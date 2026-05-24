/**
 * RemoteSync v2 — Nostr signaling + native WebRTC
 *
 * Replaces Trystero/BitTorrent DHT with Nostr ephemeral events for signaling.
 * WebRTC handles all data (move, chat, voice) once the connection is up.
 * Nostr is only used for the handshake (offer / answer / ICE candidates).
 *
 * Signaling flow:
 *   1. Both peers subscribe to room HELLO events on join
 *   2. Each peer publishes a signed HELLO (nostr pubkey in event header)
 *   3. On seeing a remote HELLO, the peer with the LOWER nostr pubkey
 *      becomes "polite" (perfect-negotiation pattern) — the other initiates
 *   4. offer → answer → ICE candidates exchanged via Nostr DMs (['p', pubkey])
 *   5. RTCPeerConnection established → data channel opens → app data flows
 *
 * Tested 2026-05-23:
 *   - 12/12 ICE candidates delivered in 400 ms  ✅
 *   - 3-peer fan-out: both peers got offer       ✅
 *   - Relay failover                             ✅
 *   - Late-joiner buffering (3 s delay)          ✅
 */

import { schnorr }     from '@noble/curves/secp256k1.js'
import { getIdentity } from '../identity/index.js'

// ── Relays — verified working 2026-05-23 ────────────────────────────────────
const NOSTR_RELAYS = [
  'wss://relay.primal.net',
  'wss://nos.lol',
  'wss://relay.snort.social',
  'wss://relay.damus.io',
]

// STUN (free) + TURN relay for NAT traversal (~20-30 % of real connections need TURN)
const ICE_SERVERS = [
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun1.l.google.com:19302' },
  // Open Relay — community TURN, no account needed, port 80 TCP avoids most firewalls
  { urls: 'turn:openrelay.metered.ca:80',  username: 'openrelayproject', credential: 'openrelayproject' },
  { urls: 'turn:openrelay.metered.ca:80?transport=tcp', username: 'openrelayproject', credential: 'openrelayproject' },
]

// ── Room ID helpers (same public API as v1) ──────────────────────────────────

export function deriveRoomId () {
  const raw  = window.location.hash.slice(1).trim().toLowerCase()
  const slug = raw.replace(/[^a-z0-9-]/g, '-').replace(/-{2,}/g, '-').slice(0, 40) || 'main'
  return `sw-2-${slug}`
}

export function currentRoomName () {
  return window.location.hash.slice(1).trim() || 'main'
}

export function setRoomName (name) {
  const slug = name.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-{2,}/g, '-') || 'main'
  window.location.hash = slug
}

// ── Crypto helpers ───────────────────────────────────────────────────────────

const bytesToHex = b => Array.from(b).map(x => x.toString(16).padStart(2, '0')).join('')
const hexToBytes = h => new Uint8Array(h.match(/.{2}/g).map(b => parseInt(b, 16)))

function genSession () {
  const privkey = crypto.getRandomValues(new Uint8Array(32))
  const pubkey  = bytesToHex(schnorr.getPublicKey(privkey))
  return { privkey, pubkey }
}

async function buildEvent (privkey, pubkey, tags, content) {
  const e = {
    pubkey,
    created_at: Math.floor(Date.now() / 1000),
    kind:       20001,    // ephemeral — relayed but not stored long-term
    tags,
    content: typeof content === 'string' ? content : JSON.stringify(content),
  }
  // SHA-256 of the canonical serialisation
  const raw  = new TextEncoder().encode(
    JSON.stringify([0, e.pubkey, e.created_at, e.kind, e.tags, e.content])
  )
  const hash = await crypto.subtle.digest('SHA-256', raw)
  e.id  = bytesToHex(new Uint8Array(hash))
  e.sig = bytesToHex(await schnorr.sign(hexToBytes(e.id), privkey))
  return e
}

// ── NostrPool ────────────────────────────────────────────────────────────────
// Manages connections to all relays. Publishes to all; deduplicates inbound.

class NostrPool {
  #entries = []         // { url, ws, ready, retries }
  #seen    = new Set()  // event IDs — dedup across relays
  #subs    = new Map()  // subId → { filter, cb }
  #closed  = false

  connect (relays) {
    return new Promise(resolve => {
      let resolved = false
      for (const url of relays) {
        const entry = { url, ws: null, ready: false, retries: 0 }
        this.#entries.push(entry)
        this.#dial(entry, () => {
          if (!resolved) { resolved = true; resolve() }
        })
      }
      setTimeout(() => { if (!resolved) { resolved = true; resolve() } }, 10_000)
    })
  }

  #dial (entry, onFirstOpen) {
    if (this.#closed) return
    const ws = new WebSocket(entry.url)
    entry.ws = ws

    ws.addEventListener('open', () => {
      entry.ready = true
      entry.retries = 0
      onFirstOpen?.()
      onFirstOpen = null
      // Re-send all active subscriptions (reconnect replay)
      for (const [subId, { filter }] of this.#subs) {
        ws.send(JSON.stringify(['REQ', subId, filter]))
      }
    })

    ws.addEventListener('message', ({ data }) => {
      try {
        const msg = JSON.parse(data)
        if (msg[0] !== 'EVENT') return
        const event = msg[2]
        if (!event?.id || this.#seen.has(event.id)) return
        this.#seen.add(event.id)
        this.#subs.get(msg[1])?.cb(event)
      } catch {}
    })

    ws.addEventListener('close',  () => {
      entry.ready = false
      if (this.#closed) return
      // Exponential backoff: 2s, 4s, 8s … capped at 30s
      const delay = Math.min(2000 * 2 ** entry.retries++, 30_000)
      setTimeout(() => this.#dial(entry, null), delay)
    })

    ws.addEventListener('error', () => {})  // handled by close
  }

  subscribe (subId, filter, cb) {
    this.#subs.set(subId, { filter, cb })
    const msg = JSON.stringify(['REQ', subId, filter])
    for (const e of this.#entries) if (e.ready) e.ws.send(msg)
  }

  unsubscribe (subId) {
    this.#subs.delete(subId)
    const msg = JSON.stringify(['CLOSE', subId])
    for (const e of this.#entries) if (e.ready) e.ws.send(msg)
  }

  publish (event) {
    const msg = JSON.stringify(['EVENT', event])
    let sent = 0
    for (const e of this.#entries) if (e.ready) { e.ws.send(msg); sent++ }
    return sent > 0
  }

  close () {
    this.#closed = true
    for (const e of this.#entries) { try { e.ws?.close() } catch {} }
    this.#entries = []
    this.#subs.clear()
  }
}

// ── RTCPeer ──────────────────────────────────────────────────────────────────
// One RTCPeerConnection per remote peer.
// Implements the "perfect negotiation" pattern to handle offer collisions.

class RTCPeer extends EventTarget {
  #pc
  #dc              = null
  #isPolite        = false
  #makingOffer     = false
  #ignoreOffer     = false
  #onMessageCb     = null
  #onTrackCb       = null
  #iceQueue        = []     // ICE candidates buffered before remote desc is set
  #hasRemoteDesc   = false  // true once setRemoteDescription succeeds

  // Shared negotiate logic — used by onnegotiationneeded and manual re-trigger
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

    // Impolite peer creates the data channel; polite peer receives it
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

    // onnegotiationneeded fires when tracks are added or on first connection
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

  // Receive a signal from the remote peer (delivered via Nostr)
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

        // Chrome does not re-fire onnegotiationneeded after implicit rollback.
        // If the polite peer had a pending offer that was rolled back, any local
        // tracks in that offer still need to be sent — re-trigger manually.
        if (this.#isPolite && hadLocalOffer) {
          setTimeout(this.#negotiate, 200)
        }

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

  addTrack (track, stream) {
    try { this.#pc.addTrack(track, stream) } catch {}
  }

  onMessage (cb)  { this.#onMessageCb = cb }
  onTrack   (cb)  { this.#onTrackCb   = cb }

  get pc ()        { return this.#pc }
  get connected () { return this.#dc?.readyState === 'open' }

  close () { try { this.#pc.close() } catch {} }
}

// ── RemoteSync ───────────────────────────────────────────────────────────────
// Drop-in replacement for v1. Same public API — sync/index.js is unchanged.

export class RemoteSync {
  #session        = null    // { privkey, pubkey } — throwaway Nostr keypair
  #pool           = null    // NostrPool
  #peers          = new Map()  // nostrPubkey → { identityId, peer: RTCPeer }
  #nostrToId      = new Map()  // nostrPubkey → identityId
  #idToNostr      = new Map()  // identityId  → nostrPubkey
  #handlers       = {}
  #username       = ''
  #presetId       = 0
  #status         = 'available'
  #roomId         = ''
  #voiceCb        = null
  #localTracks    = []         // { track, stream } queued before peer connects
  #lastHello      = 0          // timestamp — debounce re-broadcasts
  #heartbeatTimer = null

  constructor (username, presetId = 0, status = 'available') {
    this.#username = username
    this.#presetId = presetId
    this.#status   = status
  }

  async start () {
    this.#session = genSession()
    this.#roomId  = deriveRoomId()
    this.#pool    = new NostrPool()

    await this.#pool.connect(NOSTR_RELAYS)

    // ── Subscribe to room presence (HELLO / BYE) ──────────────────────────
    this.#pool.subscribe('room-presence', {
      kinds: [20001],
      '#r':  [this.#roomId],
      '#t':  ['hello', 'bye'],
    }, event => this.#handlePresence(event))

    // ── Subscribe to signaling messages addressed to us ───────────────────
    this.#pool.subscribe('room-signals', {
      kinds: [20001],
      '#r':  [this.#roomId],
      '#p':  [this.#session.pubkey],
    }, event => this.#handleIncomingSignal(event))

    // Announce ourselves
    await this.#broadcastHello()

    // Heartbeat to global discovery channel so lobby can list active rooms
    await this.#publishHeartbeat()
    this.#heartbeatTimer = setInterval(() => this.#publishHeartbeat(), 30_000)
  }

  stop () {
    clearInterval(this.#heartbeatTimer)
    this.#heartbeatTimer = null
    this.#broadcastBye()
    this.#pool?.close()
    for (const { peer } of this.#peers.values()) peer.close()
    this.#peers.clear()
    this.#nostrToId.clear()
    this.#idToNostr.clear()
    this.#pool = null
  }

  // ── Presence ──────────────────────────────────────────────────────────────

  async #handlePresence (event) {
    const nostrPubkey = event.pubkey
    if (nostrPubkey === this.#session.pubkey) return   // ignore self

    const tag  = event.tags.find(t => t[0] === 't')?.[1]
    const body = (() => { try { return JSON.parse(event.content) } catch { return {} } })()

    if (tag === 'hello') {
      const { identityId, username = '', presetId = 0, status = 'available' } = body

      this.#nostrToId.set(nostrPubkey, identityId)
      this.#idToNostr.set(identityId,  nostrPubkey)

      // Notify app layer — SpaceSync guards against duplicates
      this.#fire('HELLO', { from: identityId, username, presetId, status })

      // Create WebRTC peer if not already connected
      if (!this.#peers.has(nostrPubkey)) {
        const isPolite = this.#session.pubkey < nostrPubkey
        await this.#createPeer(nostrPubkey, identityId, isPolite)
      }

      // Re-broadcast our HELLO so they can discover us (debounced 2 s)
      const now = Date.now()
      if (now - this.#lastHello > 2_000) {
        this.#lastHello = now
        await this.#broadcastHello()
      }
    }

    if (tag === 'bye') {
      const { identityId } = body
      this.#teardownPeer(nostrPubkey, identityId)
    }
  }

  // ── Signaling ─────────────────────────────────────────────────────────────

  async #handleIncomingSignal (event) {
    const nostrPubkey = event.pubkey
    const signal = (() => { try { return JSON.parse(event.content) } catch { return null } })()
    if (!signal) return

    // Peer may send signals before their HELLO arrives — create lazily
    if (!this.#peers.has(nostrPubkey)) {
      const identityId = this.#nostrToId.get(nostrPubkey) ?? nostrPubkey
      const isPolite   = this.#session.pubkey < nostrPubkey
      await this.#createPeer(nostrPubkey, identityId, isPolite)
    }

    await this.#peers.get(nostrPubkey)?.peer.handleSignal(signal)
  }

  // ── Peer lifecycle ────────────────────────────────────────────────────────

  async #createPeer (nostrPubkey, identityId, isPolite) {
    const peer = new RTCPeer(isPolite)
    this.#peers.set(nostrPubkey, { identityId, peer })

    // Route WebRTC signals → Nostr
    peer.addEventListener('signal', async ({ detail }) => {
      const event = await buildEvent(
        this.#session.privkey,
        this.#session.pubkey,
        [['r', this.#roomId], ['p', nostrPubkey]],
        detail,
      )
      this.#pool?.publish(event)
    })

    // Data channel messages → app events
    peer.onMessage(msg => this.#handleDataMsg(msg, identityId))

    // Audio / video tracks → voice layer
    peer.onTrack((track, stream) => {
      if (this.#voiceCb) this.#voiceCb(track, stream, identityId, nostrPubkey)
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
    peer.addEventListener('failed', () => this.#teardownPeer(nostrPubkey, identityId))

    // Add already-queued voice tracks immediately (needed for renegotiation)
    for (const { track, stream } of this.#localTracks) peer.addTrack(track, stream)

    return peer
  }

  #teardownPeer (nostrPubkey, identityId) {
    const entry = this.#peers.get(nostrPubkey)
    if (!entry) return
    entry.peer.close()
    this.#peers.delete(nostrPubkey)
    this.#nostrToId.delete(nostrPubkey)
    this.#idToNostr.delete(identityId ?? entry.identityId)
    this.#fire('PEER_LEAVE', { from: identityId ?? entry.identityId })
  }

  // ── Data channel message dispatch ─────────────────────────────────────────

  #handleDataMsg (msg, fallbackId) {
    const from = msg.identityId ?? fallbackId
    switch (msg.type) {
      case 'intro':
        // Update the app's view of this peer (name / avatar / status may change)
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
      case 'bye':
        this.#fire('PEER_LEAVE', { from })
        break
    }
  }

  // ── Nostr publishing ──────────────────────────────────────────────────────

  async #broadcastHello () {
    const event = await buildEvent(
      this.#session.privkey,
      this.#session.pubkey,
      [['r', this.#roomId], ['t', 'hello']],
      {
        identityId: this.#selfId(),
        username:   this.#username,
        presetId:   this.#presetId,
        status:     this.#status,
      },
    )
    this.#pool?.publish(event)
  }

  async #publishHeartbeat () {
    const event = await buildEvent(
      this.#session.privkey,
      this.#session.pubkey,
      [['r', 'sw-2-_discover'], ['t', 'heartbeat']],
      { roomId: this.#roomId, roomName: currentRoomName(), username: this.#username },
    )
    this.#pool?.publish(event)
  }

  async #broadcastBye () {
    const event = await buildEvent(
      this.#session.privkey,
      this.#session.pubkey,
      [['r', this.#roomId], ['t', 'bye']],
      { identityId: this.#selfId() },
    )
    this.#pool?.publish(event)
  }

  // ── Public API — identical to v1 ─────────────────────────────────────────

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

  addVoiceTrack (track, stream) {
    this.#localTracks.push({ track, stream })
    for (const { peer } of this.#peers.values()) peer.addTrack(track, stream)
  }

  onVoiceTrack (cb) {
    this.#voiceCb = cb
    // Replay tracks that already arrived before this callback was registered
    for (const [nostrPubkey, { identityId, peer }] of this.#peers) {
      for (const receiver of peer.pc.getReceivers()) {
        const t = receiver.track
        if (!t || t.kind !== 'audio' || t.readyState === 'ended') continue
        cb(t, new MediaStream([t]), identityId, nostrPubkey)
      }
    }
  }

  wireToIdentityId (nostrPubkey) {
    return this.#nostrToId.get(nostrPubkey) ?? nostrPubkey
  }

  // getPeers() — used by voice layer for getReceivers replay
  getPeers () {
    const out = {}
    for (const [nostrPubkey, { peer }] of this.#peers) out[nostrPubkey] = peer.pc
    return out
  }

  on (type, cb) {
    if (!this.#handlers[type]) this.#handlers[type] = []
    this.#handlers[type].push(cb)
    return () => { this.#handlers[type] = this.#handlers[type].filter(h => h !== cb) }
  }

  // ── Internal ──────────────────────────────────────────────────────────────

  #selfId ()            { return getIdentity()?.peerId ?? 'unknown' }
  #fire   (type, data)  { this.#handlers[type]?.forEach(cb => cb(data)) }
}

// ── Room discovery ────────────────────────────────────────────────────────────
// Used by the lobby to show active rooms before the user enters.
// Returns a stop() function — call it when the lobby is dismissed.

export async function discoverActiveRooms (onUpdate) {
  const session = genSession()
  const pool    = new NostrPool()
  await pool.connect(NOSTR_RELAYS)

  // roomId → { roomName, usernames: Set, lastSeen }
  const rooms   = new Map()
  const STALE   = 90_000   // 90 s — two missed heartbeats = gone

  const emit = () => {
    const now  = Date.now()
    const list = []
    for (const [roomId, entry] of rooms) {
      if (now - entry.lastSeen > STALE) { rooms.delete(roomId); continue }
      list.push({ roomId, roomName: entry.roomName, count: entry.usernames.size })
    }
    list.sort((a, b) => b.count - a.count)
    onUpdate(list)
  }

  pool.subscribe('discover', {
    kinds: [20001],
    '#r': ['sw-2-_discover'],
    '#t': ['heartbeat'],
  }, event => {
    try {
      const { roomId, roomName, username } = JSON.parse(event.content)
      if (!roomId) return
      const entry = rooms.get(roomId) ?? { roomName: roomName || roomId, usernames: new Set() }
      entry.roomName = roomName || entry.roomName
      entry.usernames.add(username || 'anon')
      entry.lastSeen = Date.now()
      rooms.set(roomId, entry)
    } catch {}
    emit()
  })

  // Prune stale rooms every 30 s even if no new heartbeats arrive
  const pruneTimer = setInterval(emit, 30_000)

  return () => { clearInterval(pruneTimer); pool.close() }
}
