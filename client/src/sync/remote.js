/**
 * RemoteSync v3 — xpacenet signaling
 *
 * Transport layer swap:
 *   v1: Trystero / BitTorrent DHT
 *   v2: Nostr ephemeral events (~300 ms signaling latency)
 *   v3: xpacenode WebSocket bridge (~10–30 ms signaling latency)
 *
 * The WebRTC peer-to-peer layer (RTCPeer class) is identical to v2.
 * Only the signaling transport changed — xpacenode replaced NostrPool.
 *
 * xpacenode is the smallest routing unit in xpacenet.
 * It routes signed messages without reading their content.
 * SpaceWork is one client application on top of xpacenet.
 *
 * Node URL resolution order:
 *   1. ?node=ws://... in the URL query string (portable invite link)
 *   2. import.meta.env.VITE_XPACENODE_URL (build-time config)
 *   3. ws://localhost:4002 (local dev default)
 */

import { getIdentity } from '../identity/index.js'

// ── xpacenode URL ─────────────────────────────────────────────────────────────
function resolveNodeUrl () {
  // 1. URL query param — lets invite links carry a specific node
  const urlParam = new URLSearchParams(window.location.search).get('node')
  if (urlParam) return urlParam

  // 2. Build-time env var (set VITE_XPACENODE_URL in .env)
  if (import.meta.env?.VITE_XPACENODE_URL) return import.meta.env.VITE_XPACENODE_URL

  // 3. Local dev fallback
  return 'ws://localhost:4002'
}

// ── Room ID helpers (same public API as v1/v2) ────────────────────────────────

export function deriveRoomId () {
  const raw  = window.location.hash.slice(1).trim().toLowerCase()
  const slug = raw.replace(/[^a-z0-9-]/g, '-').replace(/-{2,}/g, '-').slice(0, 40) || 'main'
  return slug
}

export function currentRoomName () {
  return window.location.hash.slice(1).trim() || 'main'
}

export function setRoomName (name) {
  const slug = name.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-{2,}/g, '-') || 'main'
  window.location.hash = slug
}

// ── ICE servers (STUN public + open TURN relay) ───────────────────────────────
// xpacenode circuit relay handles libp2p-level NAT traversal.
// These servers handle WebRTC-level NAT traversal (UDP hole punching).
const ICE_SERVERS = [
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun1.l.google.com:19302' },
  { urls: 'turn:openrelay.metered.ca:80',              username: 'openrelayproject', credential: 'openrelayproject' },
  { urls: 'turn:openrelay.metered.ca:80?transport=tcp', username: 'openrelayproject', credential: 'openrelayproject' },
]

// ── XpaceNodePool — WebSocket transport ──────────────────────────────────────
// Thin wrapper around a WebSocket connection to an xpacenode.
// Replaces NostrPool from v2 — same logical API, ~10x lower latency.

class XpaceNodePool {
  #ws        = null
  #url       = ''
  #handlers  = new Map()   // type → [cb]
  #ready     = false
  #closed    = false       // true after explicit close() — suppresses reconnect
  #queue     = []          // messages buffered before connection opens
  #retries   = 0

  async connect (url) {
    this.#url = url
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(url)
      this.#ws = ws

      const timeout = setTimeout(() => reject(new Error('xpacenode connect timeout')), 10_000)

      ws.onopen = () => {
        clearTimeout(timeout)
        this.#ready   = true
        this.#retries = 0
        // Drain buffered messages
        const q = this.#queue.splice(0)
        q.forEach(m => ws.send(m))
        resolve()
      }

      ws.onmessage = ({ data }) => {
        try {
          const msg = JSON.parse(data)
          this.#dispatch(msg)
        } catch { /* malformed — drop */ }
      }

      ws.onerror = err => {
        clearTimeout(timeout)
        reject(err)
      }

      ws.onclose = () => {
        this.#ready = false
        this.#reconnect()
      }
    })
  }

  send (msg) {
    const s = JSON.stringify(msg)
    if (this.#ready && this.#ws?.readyState === WebSocket.OPEN) {
      this.#ws.send(s)
    } else {
      this.#queue.push(s)   // buffer until reconnect
    }
  }

  on (type, cb) {
    if (!this.#handlers.has(type)) this.#handlers.set(type, [])
    this.#handlers.get(type).push(cb)
  }

  close () {
    this.#closed = true    // prevent reconnect loop after intentional close
    this.#ready  = false
    this.#ws?.close()
  }

  #dispatch (msg) {
    const cbs = this.#handlers.get(msg.t)
    cbs?.forEach(cb => cb(msg))
  }

  #reconnect () {
    if (this.#closed) return    // explicit close — do not reconnect
    const delay = Math.min(1000 * 2 ** this.#retries++, 30_000)
    console.warn(`[xpacenode] disconnected — reconnecting in ${delay}ms`)
    setTimeout(() => {
      if (this.#closed) return
      this.connect(this.#url).catch(() => { /* next retry handles it */ })
    }, delay)
  }
}

// ── RTCPeer ────────────────────────────────────────────────────────────────────
// Unchanged from v2 — perfect-negotiation WebRTC peer.

class RTCPeer extends EventTarget {
  #pc
  #dc              = null
  #isPolite        = false
  #makingOffer     = false
  #ignoreOffer     = false
  #onMessageCb     = null
  #onTrackCb       = null
  #iceQueue        = []
  #hasRemoteDesc   = false

  #negotiate = async () => {
    if (this.#makingOffer) return
    if (this.#pc.signalingState !== 'stable') return
    try {
      this.#makingOffer = true
      await this.#pc.setLocalDescription()
      this.dispatchEvent(new CustomEvent('signal', {
        detail: { type: 'offer', sdp: this.#pc.localDescription.sdp },
      }))
    } catch (err) {
      console.warn('[RTCPeer] negotiate error', err)
    } finally {
      this.#makingOffer = false
    }
  }

  constructor (isPolite) {
    super()
    this.#isPolite = isPolite
    this.#pc = new RTCPeerConnection({ iceServers: ICE_SERVERS })

    if (!isPolite) {
      this.#dc = this.#pc.createDataChannel('sw', { ordered: true })
      this.#hookDC(this.#dc)
    }

    this.#pc.ondatachannel = ({ channel }) => {
      this.#dc = channel
      this.#hookDC(channel)
    }

    this.#pc.onicecandidate = ({ candidate }) => {
      if (candidate) {
        this.dispatchEvent(new CustomEvent('signal', {
          detail: { type: 'ice', candidate: candidate.toJSON() },
        }))
      }
    }

    this.#pc.onnegotiationneeded = this.#negotiate

    this.#pc.ontrack = ({ track, streams }) => {
      const stream = streams[0] ?? new MediaStream([track])
      this.#onTrackCb?.(track, stream)
    }

    this.#pc.onconnectionstatechange = () => {
      if (this.#pc.connectionState === 'failed') {
        this.dispatchEvent(new CustomEvent('failed'))
      }
    }
  }

  #hookDC (dc) {
    dc.onopen    = () => this.dispatchEvent(new CustomEvent('open'))
    dc.onclose   = () => this.dispatchEvent(new CustomEvent('close'))
    dc.onmessage = ({ data }) => {
      try { this.#onMessageCb?.(JSON.parse(data)) } catch {}
    }
  }

  async handleSignal ({ type, sdp, candidate }) {
    try {
      if (type === 'offer') {
        const hadLocalOffer = this.#pc.signalingState === 'have-local-offer'
        const collision     = this.#makingOffer || hadLocalOffer
        this.#ignoreOffer   = !this.#isPolite && collision
        if (this.#ignoreOffer) return

        await this.#pc.setRemoteDescription({ type: 'offer', sdp })
        this.#hasRemoteDesc = true
        await this.#pc.setLocalDescription()
        this.dispatchEvent(new CustomEvent('signal', {
          detail: { type: 'answer', sdp: this.#pc.localDescription.sdp },
        }))
        await this.#drainIceQueue()

        if (this.#isPolite && hadLocalOffer) setTimeout(this.#negotiate, 200)

      } else if (type === 'answer') {
        if (this.#pc.signalingState === 'have-local-offer') {
          await this.#pc.setRemoteDescription({ type: 'answer', sdp })
          this.#hasRemoteDesc = true
          await this.#drainIceQueue()
        }

      } else if (type === 'ice') {
        if (!this.#hasRemoteDesc) {
          this.#iceQueue.push(candidate)
        } else {
          try { await this.#pc.addIceCandidate(candidate) } catch (err) {
            if (!this.#ignoreOffer) console.warn('[RTCPeer] addIceCandidate', err)
          }
        }
      }
    } catch (err) {
      console.warn('[RTCPeer] handleSignal', type, err)
    }
  }

  async #drainIceQueue () {
    const queued = this.#iceQueue.splice(0)
    for (const c of queued) {
      try { await this.#pc.addIceCandidate(c) } catch {}
    }
  }

  send (msg) {
    if (this.#dc?.readyState === 'open') this.#dc.send(JSON.stringify(msg))
  }

  addTrack (track, stream) { try { this.#pc.addTrack(track, stream) } catch {} }

  onMessage (cb) { this.#onMessageCb = cb }
  onTrack   (cb) { this.#onTrackCb   = cb }

  get pc ()        { return this.#pc }
  get connected () { return this.#dc?.readyState === 'open' }

  close () { try { this.#pc.close() } catch {} }
}

// ── RemoteSync ────────────────────────────────────────────────────────────────
// Drop-in replacement — identical public API to v2.

export class RemoteSync {
  #pool           = null    // XpaceNodePool
  #peers          = new Map()   // peerId → { identityId, peer: RTCPeer }
  #handlers       = {}
  #username       = ''
  #presetId       = 0
  #status         = 'available'
  #roomId         = ''
  #voiceCb        = null
  #pendingTracks  = []
  #localTracks    = []
  #heartbeatTimer = null

  constructor (username, presetId = 0, status = 'available') {
    this.#username = username
    this.#presetId = presetId
    this.#status   = status
  }

  async start () {
    this.#roomId = deriveRoomId()
    this.#pool   = new XpaceNodePool()

    const nodeUrl = resolveNodeUrl()
    console.log('[RemoteSync] connecting to xpacenode:', nodeUrl)
    await this.#pool.connect(nodeUrl)

    // ── Peer join ────────────────────────────────────────────────────────
    this.#pool.on('peer_join', async msg => {
      const { peerId, username = '', presetId = 0, status = 'available' } = msg
      if (peerId === this.#selfId()) return

      this.#fire('HELLO', { from: peerId, username, presetId, status })

      if (!this.#peers.has(peerId)) {
        // Polite peer = lower string value (deterministic tie-break)
        const isPolite = this.#selfId() < peerId
        await this.#createPeer(peerId, isPolite)
      }
    })

    // ── Peer leave ───────────────────────────────────────────────────────
    this.#pool.on('peer_leave', msg => {
      this.#teardownPeer(msg.peerId)
    })

    // ── WebRTC signal from xpacenode ─────────────────────────────────────
    this.#pool.on('signal', async msg => {
      const { from, payload } = msg
      if (!from || !payload) return
      if (!this.#peers.has(from)) {
        const isPolite = this.#selfId() < from
        await this.#createPeer(from, isPolite)
      }
      await this.#peers.get(from)?.peer.handleSignal(payload)
    })

    // ── Announce ourselves to the room ───────────────────────────────────
    this.#pool.send({
      t:        'hello',
      roomId:   this.#roomId,
      peerId:   this.#selfId(),
      username: this.#username,
      presetId: this.#presetId,
      status:   this.#status,
    })

    // Heartbeat every 30 s so the node doesn't prune us
    this.#heartbeatTimer = setInterval(() => {
      this.#pool.send({ t: 'hb', roomId: this.#roomId })
    }, 30_000)
  }

  stop () {
    clearInterval(this.#heartbeatTimer)
    this.#pool?.send({ t: 'leave', roomId: this.#roomId })
    this.#pool?.close()
    for (const { peer } of this.#peers.values()) peer.close()
    this.#peers.clear()
    this.#pool = null
  }

  // ── Peer lifecycle ────────────────────────────────────────────────────────

  async #createPeer (peerId, isPolite) {
    const peer = new RTCPeer(isPolite)
    this.#peers.set(peerId, { identityId: peerId, peer })

    // Route WebRTC signals through xpacenode
    peer.addEventListener('signal', ({ detail }) => {
      this.#pool?.send({
        t:      'signal',
        roomId: this.#roomId,
        to:     peerId,
        payload: detail,
      })
    })

    // Data channel messages
    peer.onMessage(msg => this.#handleDataMsg(msg, peerId))

    // Audio / video tracks
    peer.onTrack((track, stream) => {
      if (this.#voiceCb) {
        this.#voiceCb(track, stream, peerId, peerId)
      } else {
        this.#pendingTracks.push({ track, stream, identityId: peerId, nostrPubkey: peerId })
      }
    })

    // Data channel open → send intro
    peer.addEventListener('open', () => {
      peer.send({
        type:       'intro',
        identityId: this.#selfId(),
        username:   this.#username,
        presetId:   this.#presetId,
        status:     this.#status,
      })
    })

    // Connection failed → tear down
    peer.addEventListener('failed', () => this.#teardownPeer(peerId))

    // Add queued voice tracks
    for (const { track, stream } of this.#localTracks) peer.addTrack(track, stream)

    return peer
  }

  #teardownPeer (peerId) {
    const entry = this.#peers.get(peerId)
    if (!entry) return
    entry.peer.close()
    this.#peers.delete(peerId)
    this.#fire('PEER_LEAVE', { from: peerId })
  }

  // ── Data channel message dispatch ─────────────────────────────────────────

  #handleDataMsg (msg, fallbackId) {
    const from = msg.identityId ?? fallbackId
    switch (msg.type) {
      case 'intro':
        this.#fire('HELLO', {
          from,
          username: msg.username,
          presetId: msg.presetId ?? 0,
          status:   msg.status   ?? 'available',
        })
        break
      case 'move':
        this.#fire('MOVE', { from, pos: msg.pos })
        break
      case 'chat':
        this.#fire('CHAT', { from, username: msg.username, text: msg.text, ts: msg.ts })
        break
      case 'avatar':
        this.#fire('AVATAR_CHANGE', { from, presetId: msg.presetId })
        break
      case 'status':
        this.#fire('STATUS_CHANGE', { from, status: msg.status })
        break
      case 'talking':
        this.#fire('PEER_TALKING', { from, talking: !!msg.talking })
        break
      case 'bye':
        this.#fire('PEER_LEAVE', { from })
        break
    }
  }

  // ── Public API (identical to v2) ──────────────────────────────────────────

  move (x, y, z, ry = 0) {
    const msg = { type: 'move', identityId: this.#selfId(), pos: { x, y, z, ry } }
    for (const { peer } of this.#peers.values()) peer.send(msg)
  }

  chat (text) {
    const msg = {
      type: 'chat', identityId: this.#selfId(),
      username: this.#username, text, ts: Date.now(),
    }
    for (const { peer } of this.#peers.values()) peer.send(msg)
  }

  setAvatar (presetId) {
    this.#presetId = presetId
    const msg = { type: 'avatar', identityId: this.#selfId(), presetId }
    for (const { peer } of this.#peers.values()) peer.send(msg)
  }

  setStatus (status) {
    this.#status = status
    const msg = { type: 'status', identityId: this.#selfId(), status }
    for (const { peer } of this.#peers.values()) peer.send(msg)
  }

  broadcastTalking (talking) {
    const msg = { type: 'talking', identityId: this.#selfId(), talking: !!talking }
    for (const { peer } of this.#peers.values()) peer.send(msg)
  }

  addVoiceTrack (track, stream) {
    this.#localTracks.push({ track, stream })
    for (const { peer } of this.#peers.values()) peer.addTrack(track, stream)
  }

  onVoiceTrack (cb) {
    this.#voiceCb = cb
    const pending = this.#pendingTracks.splice(0)
    for (const { track, stream, identityId, nostrPubkey } of pending) {
      if (track.readyState !== 'ended') cb(track, stream, identityId, nostrPubkey)
    }
    for (const [peerId, { peer }] of this.#peers) {
      for (const receiver of peer.pc.getReceivers()) {
        const t = receiver.track
        if (!t || t.kind !== 'audio' || t.readyState === 'ended') continue
        cb(t, new MediaStream([t]), peerId, peerId)
      }
    }
  }

  wireToIdentityId (peerId) { return peerId }

  getPeers () {
    const out = {}
    for (const [peerId, { peer }] of this.#peers) out[peerId] = peer.pc
    return out
  }

  on (type, cb) {
    if (!this.#handlers[type]) this.#handlers[type] = []
    this.#handlers[type].push(cb)
    return () => { this.#handlers[type] = this.#handlers[type].filter(h => h !== cb) }
  }

  #selfId ()           { return getIdentity()?.peerId ?? 'unknown' }
  #fire   (type, data) { this.#handlers[type]?.forEach(cb => cb(data)) }
}

// ── Room discovery (lobby) ─────────────────────────────────────────────────────
// Polls the xpacenode HTTP API for active rooms.
// Returns a stop() function.

export async function discoverActiveRooms (onUpdate) {
  const nodeWsUrl  = resolveNodeUrl()
  // Convert ws:// or wss:// to http:// or https://
  const apiBase    = nodeWsUrl.replace(/^ws(s?):\/\//, 'http$1://').replace(/:4002$/, ':3000')

  let   stopped    = false
  const STALE_MS   = 90_000

  // Remote rooms seen via HTTP API
  const remoteRooms = new Map()   // roomId → { count, usernames, lastSeen }

  const fetchAndEmit = async () => {
    if (stopped) return
    try {
      const res  = await fetch(`${apiBase}/rooms`, { signal: AbortSignal.timeout(5_000) })
      const data = await res.json()
      const now  = Date.now()

      for (const r of (data.rooms ?? [])) {
        remoteRooms.set(r.roomId, {
          count:     r.count,
          usernames: r.usernames ?? [],
          lastSeen:  now,
        })
      }
      // Prune stale
      for (const [id, entry] of remoteRooms) {
        if (now - entry.lastSeen > STALE_MS) remoteRooms.delete(id)
      }
      emit()
    } catch { /* node unreachable — keep existing list */ }
  }

  const emit = () => {
    const list = [...remoteRooms.entries()].map(([roomId, e]) => ({
      roomId,
      roomName: roomId,
      count:    e.count,
    })).sort((a, b) => b.count - a.count)
    onUpdate(list)
  }

  await fetchAndEmit()
  const timer = setInterval(fetchAndEmit, 30_000)

  return () => { stopped = true; clearInterval(timer) }
}
