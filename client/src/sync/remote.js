/**
 * RemoteSync v4 — thin SpaceWork-specific wrapper around @xpacenet/xpacesync.
 *
 * Everything generic (signaling transport, WebRTC peer lifecycle, room
 * membership, reconnection/rediscovery) now lives in xpacesync's PeerMesh.
 * This file only:
 *   - resolves which xpacenode to use (SpaceWork's own link/query/env ladder)
 *   - registers SpaceWork's message types with xpacesync's MessageRegistry
 *   - translates xpacesync's generic events into SpaceWork's existing
 *     HELLO/MOVE/CHAT/... event names — index.js needed zero changes
 *   - keeps the presence-sync protocol (hb/state_req/state/delta) that
 *     talks to presenceStore, since that store is SpaceWork-specific
 *
 * The one real behavior change: chat now has a durable local log
 * (xpacesync's MessageLog). A full page reload — the common case on
 * mobile, since most browsers discard a backgrounded tab rather than
 * merely suspend it — used to lose all chat history even though
 * reconnection itself worked fine. `history('chat')` replay on start()
 * fixes that.
 *
 * Node URL resolution order (unchanged):
 *   1. ?node=ws://... in the URL query string (portable invite link)
 *   2. import.meta.env.VITE_XPACENODE_URL (build-time config)
 *   3. ws://localhost:4002 (local dev default)
 */

import { PeerMesh, RealtimeChannel, MessageRegistry } from '@xpacenet/xpacesync'
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

// ── ICE servers ─────────────────────────────────────────────────────────────
// No hardcoded list here anymore, on purpose — this used to pull STUN from
// Google and TURN from a free public relay (openrelay.metered.ca), and that
// free relay dying silently broke every cross-region connection behind
// symmetric NAT (confirmed live: same-city peers never needed it and looked
// fine; cross-city peers on different mobile carriers had no working relay
// at all). PeerMesh now gets its STUN/TURN from whichever xpacenode it
// connects to — that node's own coturn instance, handed out fresh on every
// connection (see xpacenode's turnCredentials.js) — so this app depends on
// infrastructure this network actually runs, not a third party's goodwill.
// PeerMesh's own built-in fallback (STUN only, no relay) covers a node that
// hasn't configured coturn yet; nothing to pass here for that either.

// ── RemoteSync ────────────────────────────────────────────────────────────────
// Public API is identical to v3 — index.js and main.js need no changes.

export class RemoteSync {
  #mesh           = null    // PeerMesh
  #channel        = null    // RealtimeChannel
  #username       = ''
  #presetId       = 0
  #status         = 'available'
  #roomId         = ''          // room hash (sent to xpacenode)
  #roomName       = 'main'      // human-readable name (display only)
  #nodeUrl        = ''          // the xpacenode URL in use
  #knownPeers     = []          // peer IDs from previous sessions
  #voiceCb        = null
  #pendingTracks  = []
  #handlers       = {}
  #hbTimer        = null

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

    // ── Step 4: build the mesh + channel, wire every message type ─────────────
    // No iceServers passed — PeerMesh picks up whichever node it connects
    // to's own STUN/TURN automatically. See the comment above this class.
    this.#mesh = new PeerMesh({
      selfId:       this.#selfId(),
      introPayload: () => ({ username: this.#username, presetId: this.#presetId, status: this.#status }),
    })

    const registry = new MessageRegistry()
      .register('chat',      { persist: true, queueOnFail: true })   // survives a reload AND a sent-while-isolated moment (xpacesync PeerMesh.peerIds now correctly excludes not-yet-open peers, so this isolation check can't be fooled by a peer still mid-handshake)
      .register('move',      { persist: false })
      .register('avatar',    { persist: false })
      .register('status',    { persist: false })
      .register('talking',   { persist: false })
      .register('hb',        { persist: false })
      .register('state_req', { persist: false })
      .register('state',     { persist: false })
      .register('delta',     { persist: false })

    this.#channel = new RealtimeChannel(this.#mesh, { registry })

    // ── Peer lifecycle (mesh-level) ────────────────────────────────────────
    this.#mesh.addEventListener('peer:join', ({ detail: { peerId, announced } }) => {
      const username = announced.username ?? ''
      const isKnown  = this.#knownPeers.includes(peerId)
      connLog.peerJoined(username || peerId.slice(0, 10))
      if (isKnown) connLog.info(`✓ ${username || peerId.slice(0, 10)} — known peer (reconnected)`)

      this.#fire('HELLO', {
        from: peerId, username,
        presetId: announced.presetId ?? 0,
        status:   announced.status   ?? 'available',
      })
      // Rebuilding a stale connection (the phone-went-to-sleep case) is
      // PeerMesh's own job, triggered internally on this same event.
    })

    this.#mesh.addEventListener('peer:leave', ({ detail: { peerId } }) => {
      this.#fire('PEER_LEAVE', { from: peerId })
    })

    // Data-channel intro confirmation — same HELLO, now backed by what the
    // peer says about itself directly over the channel rather than only
    // via the signaling relay.
    this.#mesh.addEventListener('peer:intro', ({ detail: { peerId, announced } }) => {
      this.#fire('HELLO', {
        from: peerId,
        username: announced.username ?? '',
        presetId: announced.presetId ?? 0,
        status:   announced.status   ?? 'available',
      })
    })

    // Data channel just opened: ask the peer for their full presence
    // snapshot, and remember them for future direct reconnection.
    this.#mesh.addEventListener('peer:open', ({ detail: { peerId } }) => {
      this.#channel.sendTo(peerId, 'state_req', {})
      recordPeer(this.#roomId, peerId)
    })

    this.#mesh.onTrack((track, stream, peerId) => {
      if (this.#voiceCb) {
        this.#voiceCb(track, stream, peerId, peerId)
      } else {
        this.#pendingTracks.push({ track, stream, identityId: peerId, nostrPubkey: peerId })
      }
    })

    // ── App-level message types (via the registry — no switch statement) ────
    this.#channel.on('chat', ({ from, payload }) => {
      this.#fire('CHAT', { from, username: payload.username, text: payload.text, ts: payload.ts })
    })

    this.#channel.on('move', ({ from, payload }) => {
      this.#fire('MOVE', { from, pos: payload.pos })
    })

    this.#channel.on('avatar', ({ from, payload }) => {
      this.#fire('AVATAR_CHANGE', { from, presetId: payload.presetId })
      presenceStore.patchPeer(from, { presetId: payload.presetId })
    })

    this.#channel.on('status', ({ from, payload }) => {
      this.#fire('STATUS_CHANGE', { from, status: payload.status })
      presenceStore.patchPeer(from, { status: payload.status })
    })

    this.#channel.on('talking', ({ from, payload }) => {
      this.#fire('PEER_TALKING', { from, talking: !!payload.talking })
    })

    // The peer is still alive — reset their TTL so they are not evicted.
    this.#channel.on('hb', ({ from }) => presenceStore.heartbeat(from))

    this.#channel.on('state_req', ({ from }) => {
      this.#channel.sendTo(from, 'state', { peers: presenceStore.getSnapshot() })
    })

    this.#channel.on('state', ({ payload }) => {
      const myId  = this.#selfId()
      const peers = payload.peers ?? {}
      for (const [peerId, data] of Object.entries(peers)) {
        if (peerId === myId) continue
        const applied = presenceStore.upsertPeer(peerId, data)
        if (applied && !this.#mesh.peerIds.includes(peerId)) {
          this.#fire('HELLO', {
            from: peerId,
            username: data.username ?? '', presetId: data.presetId ?? 0, status: data.status ?? 'available',
          })
        }
      }
    })

    this.#channel.on('delta', ({ from, payload }) => {
      const applied = presenceStore.upsertPeer(from, payload)
      if (applied && !this.#mesh.peerIds.includes(from)) {
        this.#fire('HELLO', {
          from,
          username: payload.username ?? '', presetId: payload.presetId ?? 0, status: payload.status ?? 'available',
        })
      }
    })

    // ── Step 5: connect + join ─────────────────────────────────────────────
    const nodeStep = connLog.push('Connecting to xpacenode…', 'pending', this.#nodeUrl)
    connLog.info('Searching for peers in room…')
    connLog.startFirstTimer(12_000)
    try {
      await this.#mesh.join(this.#nodeUrl, this.#roomId)
      connLog.ok(nodeStep, this.#nodeUrl)
    } catch (err) {
      connLog.fail(nodeStep, 'xpacenode unreachable — trying public DHT route')
      throw err
    }

    // ── Replay chat history — the actual fix for the original bug report.
    // A full page reload has nothing in memory; this is what makes it not
    // matter. Must run after mesh.join() — that's what sets the real room
    // id RealtimeChannel logs/replays under; reading history before it,
    // history would silently look under the wrong (empty) room forever.
    //
    // Also deliberately NOT fired synchronously: index.js's SpaceSync only
    // calls #wireListeners() (which registers our 'CHAT' handler) in the
    // continuation AFTER `await remote.start()` resolves. Firing these
    // events before that continuation has run would mean no one is
    // listening yet, and the very history this exists to restore gets
    // silently dropped on every reload. The fix is ordering, not a longer
    // wait: `history()`'s own async gap already pushes past start()'s
    // synchronous body, and the setTimeout guarantees this runs after
    // every microtask queued so far — including that continuation, since
    // microtasks always drain before a timer fires, however short. ──────
    this.#channel.history('chat').then(history => {
      setTimeout(() => {
        for (const message of history) {
          this.#fire('CHAT', {
            from: message.meta.from,
            username: message.payload.username, text: message.payload.text, ts: message.payload.ts,
          })
        }
      }, 0)
    })

    // Peer-to-peer heartbeat: resets each peer's 60s TTL in their own store.
    // (xpacenode keep-alive is PeerMesh's own internal concern, not ours.)
    this.#hbTimer = setInterval(() => this.#channel.send('hb', {}), 30_000)

    // Schedule idle-time housekeeping: prune stale COLD-tier entries
    idleScheduler.schedule(
      () => presenceStore.pruneCold(),
      'prune-cold-rooms',
    )
  }

  stop () {
    clearInterval(this.#hbTimer)
    this.#mesh?.leave()
    this.#mesh    = null
    this.#channel = null
  }

  // ── Public API (identical to v3) ──────────────────────────────────────────

  move (x, y, z, ry = 0) {
    this.#channel.send('move', { pos: { x, y, z, ry } })
  }

  chat (text) {
    this.#channel.send('chat', { username: this.#username, text, ts: Date.now() })
  }

  setAvatar (presetId) {
    this.#presetId = presetId
    // Legacy immediate message — real-time UI update for all peers
    this.#channel.send('avatar', { presetId })
    // Versioned delta — lets late-joining peers see the latest via `state`
    this.#channel.send('delta', { presetId, v: ++this.#myVersion })
  }

  setStatus (status) {
    this.#status = status
    this.#channel.send('status', { status })
    this.#channel.send('delta', { status, v: ++this.#myVersion })
  }

  broadcastTalking (talking) {
    this.#channel.send('talking', { talking: !!talking })
  }

  addVoiceTrack (track, stream) {
    this.#mesh.addTrack(track, stream)
  }

  onVoiceTrack (cb) {
    this.#voiceCb = cb
    const pending = this.#pendingTracks.splice(0)
    for (const { track, stream, identityId, nostrPubkey } of pending) {
      if (track.readyState !== 'ended') cb(track, stream, identityId, nostrPubkey)
    }
    // Replay tracks from peers connected before this callback was registered.
    for (const [peerId, pc] of Object.entries(this.#mesh.getPeerConnections())) {
      for (const receiver of pc.getReceivers()) {
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

  getPeers () { return this.#mesh.getPeerConnections() }

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
