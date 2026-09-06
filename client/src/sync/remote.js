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

import { getIdentity }    from '../identity/index.js'
import {
  parseCurrentLink,
  createRoomLink,
  recordPeer,
  setRoomNameInUrl,
} from './roomLink.js'
import { connLog }         from './connectionLog.js'
import { presenceStore }   from './presenceStore.js'
import { idleScheduler }   from './idleScheduler.js'

// ── xpacenode URL ─────────────────────────────────────────────────────────────
// Returns null if no node is configured — triggers DHT fallback in SpaceSync.
function resolveNodeUrl (linkNode) {
  // 1. Node encoded in the room link
  if (linkNode) return linkNode

  // 2. URL query param ?node=
  const urlParam = new URLSearchParams(window.location.search).get('node')
  if (urlParam) return urlParam

  // 3. Build-time env var
  if (import.meta.env?.VITE_XPACENODE_URL) return import.meta.env.VITE_XPACENODE_URL

  // 4. null → caller falls back to DHT
  return null
}

// ── Room helpers (public API — re-exported for main.js / lobby) ───────────────

/** Current room display name (human-readable, not the hash) */
export function currentRoomName () {
  const raw = window.location.hash.slice(1).trim()
  if (!raw || raw.startsWith('xn_')) return 'main'
  return raw
}

/** Set a plain room name in the URL (lobby text-input flow) */
export function setRoomName (name) { setRoomNameInUrl(name) }

/**
 * Generate a shareable gated room link.
 * lockCode is optional — omit for an open (unlocked) room.
 */
export { createRoomLink }

/**
 * Legacy: derive a plain room slug from the URL hash.
 * Still used internally before async link parsing is complete.
 */
export function deriveRoomId () {
  const raw = window.location.hash.slice(1).trim().toLowerCase()
  if (!raw || raw.startsWith('xn_')) return 'main'
  return raw.replace(/[^a-z0-9-]/g, '-').replace(/-{2,}/g, '-').slice(0, 40) || 'main'
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
  #onOpenCb  = null        // fires after every (re)connect — see onOpen()

  /**
   * Register a callback that runs every time the WebSocket establishes a
   * connection — the very first connect() AND every automatic reconnect
   * after a drop (phone sleep, tab suspend, network blip).
   *
   * This is the pool's one lifecycle hook. A dropped-and-reopened
   * WebSocket is, from the bridge's point of view, a brand-new connection
   * that knows nothing about any room or peer — so anything that depended
   * on that state (re-announcing our presence, re-requesting the roster)
   * belongs here, not sprinkled through reconnect-specific branches.
   */
  onOpen (cb) { this.#onOpenCb = cb }

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
        this.#onOpenCb?.()
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
  #roomId         = ''          // room hash (sent to xpacenode)
  #roomName       = 'main'      // human-readable name (display only)
  #nodeUrl        = ''          // the xpacenode URL in use
  #knownPeers     = []          // peer IDs from previous sessions
  #voiceCb        = null
  #pendingTracks  = []
  #localTracks    = []
  #heartbeatTimer = null

  /**
   * Own monotonic version counter.
   *
   * Incremented each time our local state changes (avatar, status).
   * Sent inside every `delta` message so recipients can apply version-diff
   * logic — a delta with v ≤ stored.v is silently dropped by presenceStore.
   */
  #myVersion = 0

  constructor (username, presetId = 0, status = 'available') {
    this.#username = username
    this.#presetId = presetId
    this.#status   = status
  }

  async start () {
    // ── Step 1: decode the link ───────────────────────────────────────────────
    const roomStep = connLog.push('Reading link…')
    const link     = await parseCurrentLink()

    this.#roomId     = link.roomHash
    this.#roomName   = link.roomId
    this.#knownPeers = link.peers ?? []

    if (link.type === 'link') {
      // Encoded xn_ invite link — show what was decoded
      connLog.ok(roomStep, `Invite link decoded → room: ${this.#roomName}`)
      connLog.info('Room address is hashed — connection is private')
      if (link.node) {
        connLog.info(`Preferred node found in link`, link.node)
      }
    } else if (link.type === 'plain') {
      connLog.ok(roomStep, `Room: ${this.#roomName}`)
    } else {
      connLog.ok(roomStep, 'Using default room')
    }

    // ── Step 2: known peers ───────────────────────────────────────────────────
    if (this.#knownPeers.length) {
      const src = link.type === 'link' ? 'invite link' : 'previous session'
      connLog.info(
        `${this.#knownPeers.length} known peer${this.#knownPeers.length > 1 ? 's' : ''} from ${src}`,
        'Will reconnect directly if they are online'
      )
    }

    // ── Step 3: signaling ladder ──────────────────────────────────────────────
    this.#nodeUrl = resolveNodeUrl(link.node)

    if (!this.#nodeUrl) {
      // No node → DHT public fallback
      connLog.info('No xpacenode — trying public DHT route')
      throw Object.assign(new Error('NO_NODE'), {
        roomHash: this.#roomId,
        roomName: this.#roomName,
        linkType: link.type,
        knownPeers: this.#knownPeers,
      })
    }

    this.#pool = new XpaceNodePool()

    // Re-announce ourselves (and thus re-request the room roster — see
    // #announce) every time the socket connects, including reconnects.
    // Registering this before connect() means the very first connection
    // and every later reconnect share the exact same path — there is no
    // separate "reconnect protocol", just one lifecycle hook.
    this.#pool.onOpen(() => this.#announce())

    const nodeStep = connLog.push('Connecting to xpacenode…', 'pending', this.#nodeUrl)
    try {
      await this.#pool.connect(this.#nodeUrl)
      connLog.ok(nodeStep, this.#nodeUrl)
    } catch (err) {
      connLog.fail(nodeStep, 'xpacenode unreachable — trying public DHT route')
      throw err
    }

    // ── Step 4: waiting for peers / self-as-host timer ────────────────────────
    connLog.info('Searching for peers in room…')
    connLog.startFirstTimer(12_000)

    // ── Peer join ────────────────────────────────────────────────────────
    this.#pool.on('peer_join', async msg => {
      const { peerId, username = '', presetId = 0, status = 'available' } = msg
      if (peerId === this.#selfId()) return

      const isKnown = this.#knownPeers.includes(peerId)
      connLog.peerJoined(username || peerId.slice(0, 10))
      if (isKnown) connLog.info(`✓ ${username || peerId.slice(0,10)} — known peer (reconnected)`)

      this.#fire('HELLO', { from: peerId, username, presetId, status })

      // A peer_join for someone we already track is normal on every
      // reconnect (see #announce — both sides restate presence). Only
      // rebuild the connection if #ensureLivePeer finds it's actually dead.
      await this.#ensureLivePeer(peerId)
    })

    // ── Peer leave ───────────────────────────────────────────────────────
    this.#pool.on('peer_leave', msg => {
      this.#teardownPeer(msg.peerId)
    })

    // ── WebRTC signal from xpacenode ─────────────────────────────────────
    this.#pool.on('signal', async msg => {
      const { from, payload } = msg
      if (!from || !payload) return
      await this.#ensureLivePeer(from)
      await this.#peers.get(from)?.peer.handleSignal(payload)
    })

    // Heartbeat every 30 s — two purposes:
    //   1. Keep-alive to xpacenode (prevents server-side peer pruning)
    //   2. Peer-to-peer heartbeat through data channels (resets TTL in remote presenceStore)
    this.#heartbeatTimer = setInterval(() => {
      // xpacenode keep-alive
      this.#pool.send({ t: 'hb', roomId: this.#roomId })

      // Peer heartbeat: each connected peer resets our 60 s TTL in their store
      const hb = { type: 'hb', identityId: this.#selfId() }
      for (const { peer } of this.#peers.values()) peer.send(hb)
    }, 30_000)

    // Schedule idle-time housekeeping: prune stale COLD-tier entries
    idleScheduler.schedule(
      () => presenceStore.pruneCold(),
      'prune-cold-rooms',
    )
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
    const peer  = new RTCPeer(isPolite)
    const entry = { identityId: peerId, peer, hasBeenOpen: false }
    this.#peers.set(peerId, entry)

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

    // Data channel open:
    //   1. Send intro (our identity + display state)
    //   2. Send state_req (ask peer for their full presence snapshot)
    //   3. Record peerId for future direct reconnections
    peer.addEventListener('open', () => {
      // Record that this connection has been live at least once — the
      // signal that lets #ensureLivePeer tell "dead, was working before"
      // (rebuild it) apart from "still negotiating for the first time"
      // (leave it alone).
      entry.hasBeenOpen = true

      peer.send({
        type:       'intro',
        identityId: this.#selfId(),
        username:   this.#username,
        presetId:   this.#presetId,
        status:     this.#status,
      })

      // Request the peer's HOT snapshot — gives us immediate knowledge of
      // everyone they are connected to, populating the room before we've
      // established direct connections to each peer ourselves.
      peer.send({ type: 'state_req', identityId: this.#selfId() })

      recordPeer(this.#roomId, peerId)
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

  /**
   * (Re-)announce our presence to the room.
   *
   * Runs on the initial connect AND every time the transport reconnects
   * after a drop (phone sleep, tab suspend, network blip) — see
   * `this.#pool.onOpen(...)` in start(). The bridge treats every `hello`
   * as authoritative (see xpacenode's bridge.js #onHello): it replays a
   * `peer_join` for each peer currently in the room back to us, AND tells
   * those peers about us again too. That single message is what re-syncs
   * both directions of the room roster after a reconnect — no separate
   * "rooms" poll, no reconnect-specific protocol, no local roster caching
   * to keep consistent. The rest of the fix (#ensureLivePeer) just makes
   * sure that when those peer_join replies arrive, any WebRTC connection
   * that didn't survive the drop actually gets rebuilt instead of being
   * silently treated as still-live.
   */
  #announce () {
    this.#pool.send({
      t:        'hello',
      roomId:   this.#roomId,
      peerId:   this.#selfId(),
      username: this.#username,
      presetId: this.#presetId,
      status:   this.#status,
    })
  }

  /**
   * Ensure we have a live WebRTC connection to `peerId`, rebuilding it if
   * the existing one has gone dead.
   *
   * Called from both the `peer_join` and `signal` handlers — i.e. every
   * time xpacenode tells us this peer is present. Most of the time that's
   * a no-op restating of something we already know. But if our end's data
   * channel had been open before and is not open now, the old RTCPeer is a
   * zombie left over from a network drop that this side never cleanly
   * detected (the classic "phone went to sleep" case, from either peer's
   * side) — the fix is to throw it away and let a fresh offer/answer
   * exchange happen, not to leave it as a silent dead end.
   *
   * A connection that has never opened yet (`hasBeenOpen === false`) is
   * left alone even if not currently connected — that's just normal
   * first-time negotiation in progress, not a stale session.
   */
  async #ensureLivePeer (peerId) {
    const entry = this.#peers.get(peerId)
    if (entry) {
      const isDead = entry.hasBeenOpen && !entry.peer.connected
      if (!isDead) return
      entry.peer.close()
      this.#peers.delete(peerId)
    }
    const isPolite = this.#selfId() < peerId
    await this.#createPeer(peerId, isPolite)
  }

  // ── Data channel message dispatch ─────────────────────────────────────────

  /**
   * Route an incoming data-channel message from `fallbackId` (the RTCPeer map
   * key for this connection).
   *
   * Message types and their purpose:
   *
   *   Legacy messages (unchanged from v2):
   *     intro       — peer identity announcement (fires HELLO)
   *     move        — position update (fires MOVE, ~20 Hz)
   *     chat        — text message
   *     avatar      — avatar preset change
   *     status      — presence status change
   *     talking     — mic activity flag
   *     bye         — graceful disconnect
   *
   *   Presence-sync messages (new in v3):
   *     hb          — peer heartbeat; resets the sender's 60 s TTL in our store
   *     state_req   — request for our full HOT-tier snapshot
   *     state       — snapshot response; bulk-populates presenceStore
   *     delta       — version-gated state update (avatar/status with version)
   *
   * @param {object} msg         — parsed JSON from data channel
   * @param {string} fallbackId  — RTCPeer map key (= peerId when identityId absent)
   */
  #handleDataMsg (msg, fallbackId) {
    const from = msg.identityId ?? fallbackId

    switch (msg.type) {
      // ── Legacy messages ──────────────────────────────────────────────────────

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
        // Keep presenceStore in sync (direct patch — no version check needed,
        // this is a point-to-point authoritative message from the peer)
        presenceStore.patchPeer(from, { presetId: msg.presetId })
        break

      case 'status':
        this.#fire('STATUS_CHANGE', { from, status: msg.status })
        presenceStore.patchPeer(from, { status: msg.status })
        break

      case 'talking':
        this.#fire('PEER_TALKING', { from, talking: !!msg.talking })
        break

      case 'bye':
        this.#fire('PEER_LEAVE', { from })
        break

      // ── Presence-sync messages ───────────────────────────────────────────────

      case 'hb':
        // The peer is still alive — reset their TTL so they are not evicted.
        // No SpaceSync event needed; the avatar stays in scene as normal.
        presenceStore.heartbeat(from)
        break

      case 'state_req': {
        // A peer joined and asked for our current room snapshot.
        // Respond directly through their data channel with our HOT-tier data.
        const snapshot   = presenceStore.getSnapshot()
        const responder  = this.#peers.get(fallbackId)?.peer
        responder?.send({
          type:       'state',
          identityId: this.#selfId(),
          peers:      snapshot,
        })
        break
      }

      case 'state': {
        // Received a snapshot from a peer.  Bulk-upsert into presenceStore and
        // fire HELLO for any peers we have not yet connected to directly.
        // This gives instant room population on join — we learn about everyone
        // the sender knows, even before direct WebRTC connections are set up.
        const myId  = this.#selfId()
        const peers = msg.peers ?? {}

        for (const [peerId, data] of Object.entries(peers)) {
          if (peerId === myId) continue   // never overwrite our own state

          const applied = presenceStore.upsertPeer(peerId, data)
          if (applied && !this.#peers.has(peerId)) {
            // Fire HELLO so SpaceSync creates an avatar immediately.
            // The avatar will show the peer's last known position until
            // their first direct MOVE message arrives.
            this.#fire('HELLO', {
              from:     peerId,
              username: data.username ?? '',
              presetId: data.presetId ?? 0,
              status:   data.status   ?? 'available',
            })
          }
        }
        break
      }

      case 'delta': {
        // Version-gated update — carries the sender's current version counter.
        // presenceStore.upsertPeer drops it silently if delta.v ≤ stored.v,
        // preventing stale or replayed deltas from reverting newer state.
        const applied = presenceStore.upsertPeer(from, msg)
        if (applied && !this.#peers.has(from)) {
          // Unknown peer appeared via gossip — welcome them.
          this.#fire('HELLO', {
            from,
            username: msg.username ?? '',
            presetId: msg.presetId ?? 0,
            status:   msg.status   ?? 'available',
          })
        }
        break
      }
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
    const selfId   = this.#selfId()

    // Legacy `avatar` message — real-time UI update for all peers
    const msg = { type: 'avatar', identityId: selfId, presetId }
    for (const { peer } of this.#peers.values()) peer.send(msg)

    // Versioned `delta` — allows presenceStore version-diff on recipients.
    // The bumped version ensures late-joining peers that receive a snapshot
    // containing this peer see the latest avatar, not a stale one.
    const delta = {
      type:       'delta',
      identityId: selfId,
      presetId,
      v: ++this.#myVersion,
    }
    for (const { peer } of this.#peers.values()) peer.send(delta)
  }

  setStatus (status) {
    this.#status = status
    const selfId  = this.#selfId()

    // Legacy `status` message — real-time UI update for all peers
    const msg = { type: 'status', identityId: selfId, status }
    for (const { peer } of this.#peers.values()) peer.send(msg)

    // Versioned `delta` — keeps snapshots accurate for late joiners
    const delta = {
      type:       'delta',
      identityId: selfId,
      status,
      v: ++this.#myVersion,
    }
    for (const { peer } of this.#peers.values()) peer.send(delta)
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

  /** Human-readable room name (for display in HUD) */
  get roomName () { return this.#roomName }

  /** Room hash (the actual xpacenode topic — never the plain name) */
  get roomHash () { return this.#roomId }

  /** The xpacenode URL this session connected to */
  get nodeUrl ()  { return this.#nodeUrl }

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

// ── xpacenode HTTP API URL ─────────────────────────────────────────────────────
// The API (default :3000) and the WS bridge (default :4003) are independently
// configurable — there is no reliable way to derive one from the other's port.
// Resolve it explicitly, same ladder as resolveNodeUrl.
function resolveApiUrl (nodeWsUrl) {
  // 1. URL query param ?nodeApi=
  const urlParam = new URLSearchParams(window.location.search).get('nodeApi')
  if (urlParam) return urlParam

  // 2. Build-time env var
  if (import.meta.env?.VITE_XPACENODE_API_URL) return import.meta.env.VITE_XPACENODE_API_URL

  // 3. Best-effort fallback: same host, no port, http(s) scheme.
  //    Correct when the API is reverse-proxied on the same host as the bridge
  //    (e.g. a production domain serving both behind one proxy). Wrong
  //    whenever the API runs on a different port than the bridge, which is
  //    the local-dev default (dev.sh: bridge :4003, API :3000) — pass
  //    VITE_XPACENODE_API_URL or ?nodeApi= explicitly in that case.
  if (!nodeWsUrl) return null
  try {
    const u = new URL(nodeWsUrl.replace(/^ws/, 'http'))
    u.port = ''
    return u.toString().replace(/\/$/, '')
  } catch {
    return null
  }
}

// ── Room discovery (lobby) ─────────────────────────────────────────────────────
// Polls the xpacenode HTTP API for active rooms.
// Returns a stop() function.

export async function discoverActiveRooms (onUpdate) {
  const nodeWsUrl = resolveNodeUrl()

  // No node configured (DHT path) — nothing to query, return a clean no-op.
  // Callers get an empty list immediately; the stop function is safe to call.
  if (!nodeWsUrl) {
    onUpdate([])
    return () => {}
  }

  const apiBase = resolveApiUrl(nodeWsUrl)
  if (!apiBase) {
    onUpdate([])
    return () => {}
  }

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
