/**
 * SpaceSync — single multiplayer surface.
 *
 * Transport: Nostr ephemeral events for WebRTC signaling (serverless).
 * Room:      derived from URL hash — #team-alpha → room "sw-2-team-alpha".
 * Identity:  Ed25519 peerId from identity/index.js (stable across sessions).
 *
 * All peers in the same URL hash land in the same P2P swarm automatically.
 * No server, no handshake, no room codes.
 *
 * Events emitted (CustomEvent on this EventTarget):
 *   peer:join    detail: { peerId, username, presetId, status }
 *   peer:leave   detail: { peerId }
 *   peer:move    detail: { peerId, pos:{x,y,z,ry} }
 *   peer:avatar  detail: { peerId, presetId }
 *   peer:status  detail: { peerId, status }
 *   chat         detail: { from, username, text, ts }
 *   status       detail: { peerCount }
 */

import { RemoteSync }    from './remote.js'
import { TrysteroSync }  from './trysteroSync.js'
import { getIdentity }   from '../identity/index.js'
import { connLog }       from './connectionLog.js'
import { presenceStore } from './presenceStore.js'

export { connLog, presenceStore }

export class SpaceSync extends EventTarget {
  #remote   = null
  #peers    = new Map()   // identityId → { peerId, username, presetId, status }
  #started  = false
  #username = ''
  #presetId = 0
  #status   = 'available'

  /** The current user's stable peer ID (Ed25519 hex, 64 chars). */
  get id ()        { return getIdentity()?.peerId ?? '' }
  get peers ()     { return [...this.#peers.values()] }
  get peerCount () { return this.#peers.size }

  /** Human-readable room name (for display / invite link generation) */
  get roomName ()  { return this.#remote?.roomName ?? 'main' }

  /** The xpacenode URL this session is using */
  get nodeUrl ()   { return this.#remote?.nodeUrl  ?? null }

  async start (username, presetId = 0, status = 'available') {
    if (this.#started) return
    this.#started  = true
    this.#username = username
    this.#presetId = presetId
    this.#status   = status

    // Try xpacenode first — fall back to BitTorrent DHT if not configured/reachable
    let remote
    try {
      remote = new RemoteSync(username, presetId, status)
      await remote.start()
    } catch (err) {
      if (err?.message === 'NO_NODE') {
        remote = new TrysteroSync(username, presetId, status)
        await remote.start(err.roomHash, err.roomName, err.linkType, err.knownPeers ?? [])
      } else {
        connLog.info('xpacenode unreachable — falling back to public DHT route')
        const { parseCurrentLink, getKnownPeers } = await import('./roomLink.js')
        const link  = await parseCurrentLink()
        const known = getKnownPeers(link.roomHash)
        remote = new TrysteroSync(username, presetId, status)
        await remote.start(link.roomHash, link.roomId, link.type, known)
      }
    }
    this.#remote = remote
    this.#wireListeners()
  }

  /**
   * Wire all event handlers from the active transport (RemoteSync or TrysteroSync)
   * to SpaceSync's own CustomEvent surface, and also update presenceStore in
   * parallel for richer cached state and TTL tracking.
   *
   * Flow summary:
   *   transport fires event  →  SpaceSync emits CustomEvent  →  UI reacts
   *                          →  presenceStore.upsertPeer()   →  snapshot & TTL
   *
   * The two paths (CustomEvent + presenceStore) are independent — presenceStore
   * updates never block or delay UI events.
   */
  #wireListeners () {
    const r = this.#remote

    // ── Peer join ──────────────────────────────────────────────────────────────
    r.on('HELLO', ({ from, username: u, presetId: pid = 0, status: st = 'available' }) => {
      if (this.#peers.has(from)) return
      this.#addPeer(from, u, pid, st)

      // Seed presenceStore with v=0 for a new peer.
      // Future delta messages with v > 0 will apply version-diff updates.
      presenceStore.upsertPeer(from, { username: u, presetId: pid, status: st, v: 0 })
    })

    // ── Peer leave (graceful) ──────────────────────────────────────────────────
    r.on('PEER_LEAVE', ({ from }) => {
      this.#removePeer(from)
      presenceStore.removePeer(from)
    })

    // ── Position update (high-frequency, ~20 Hz) ───────────────────────────────
    r.on('MOVE', ({ from, pos }) => {
      this.#emit('peer:move', { peerId: from, pos })
      // Direct in-place position update — no event emitted from store,
      // no version check needed (last-write-wins for positions)
      presenceStore.updatePos(from, pos)
    })

    // ── Avatar change ──────────────────────────────────────────────────────────
    r.on('AVATAR_CHANGE', ({ from, presetId: pid }) => {
      this.#emit('peer:avatar', { peerId: from, presetId: pid })
      // presenceStore is already patched inside remote.js / trysteroSync.js
      // immediately after they fire this event — no double update needed here
    })

    // ── Status change ──────────────────────────────────────────────────────────
    r.on('STATUS_CHANGE', ({ from, status: st }) => {
      this.#emit('peer:status', { peerId: from, status: st })
      // presenceStore is patched inside the transport layer (see above)
    })

    // ── Talking indicator ──────────────────────────────────────────────────────
    r.on('PEER_TALKING', ({ from, talking }) => {
      this.#emit('peer:talking', { peerId: from, talking })
    })

    // ── Chat ───────────────────────────────────────────────────────────────────
    r.on('CHAT', ({ from, username: u, text, ts }) => {
      this.#emit('chat', { from, username: u, text, ts })
    })

    // ── TTL expiry (crashed peer, no graceful bye) ─────────────────────────────
    // When a peer's 60 s TTL expires without a heartbeat, presenceStore fires
    // `peer:expired`.  We treat it like a PEER_LEAVE for UI cleanup.
    presenceStore.addEventListener('peer:expired', ({ detail: { peerId } }) => {
      if (!this.#peers.has(peerId)) return
      this.#removePeer(peerId)
    })
  }

  stop () {
    this.#remote?.stop()
    this.#remote = null
    this.#peers.clear()
    this.#started = false
    // Clear HOT tier so stale peer data does not pollute a future session.
    // COLD tier is left intact — room summaries remain valid across sessions.
    presenceStore.clearHot()
  }

  // ── Outbound ──────────────────────────────────────────────────────────────

  move (x, y, z, ry = 0)  { this.#remote?.move(x, y, z, ry) }

  setAvatar (presetId) {
    this.#presetId = presetId
    this.#remote?.setAvatar(presetId)
  }

  setStatus (status) {
    this.#status = status
    this.#remote?.setStatus(status)
  }

  sendChat (text) {
    if (!text.trim()) return
    const ts = Date.now()
    // Echo locally so the sender sees their own message immediately
    this.#emit('chat', { from: this.id, username: this.#username, text, ts })
    this.#remote?.chat(text)
  }

  // ── Proximity voice ───────────────────────────────────────────────────────
  addVoiceTrack    (track, stream) { this.#remote?.addVoiceTrack(track, stream) }
  onVoiceTrack     (cb)            { this.#remote?.onVoiceTrack(cb) }
  wireToIdentityId (wirePeerId)    { return this.#remote?.wireToIdentityId(wirePeerId) }
  broadcastTalking (talking)       { this.#remote?.broadcastTalking(talking) }

  // ── Internal ──────────────────────────────────────────────────────────────

  #addPeer (peerId, username, presetId, status) {
    this.#peers.set(peerId, { peerId, username, presetId, status })
    this.#emit('peer:join',  { peerId, username, presetId, status })
    this.#emit('status',     { peerCount: this.#peers.size })
  }

  #removePeer (peerId) {
    if (!this.#peers.has(peerId)) return
    this.#peers.delete(peerId)
    this.#emit('peer:leave', { peerId })
    this.#emit('status',     { peerCount: this.#peers.size })
  }

  #emit (type, detail) {
    this.dispatchEvent(new CustomEvent(type, { detail }))
  }
}

export const spaceSync = new SpaceSync()
