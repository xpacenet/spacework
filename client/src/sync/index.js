/**
 * SpaceSync — single multiplayer surface.
 *
 * Transport: Trystero WebRTC over BitTorrent DHT (cross-machine, serverless).
 * Room:      derived from URL hash — #team-alpha → room "sw-1-team-alpha".
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

import { RemoteSync }  from './remote.js'
import { getIdentity } from '../identity/index.js'

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

  async start (username, presetId = 0, status = 'available') {
    if (this.#started) return
    this.#started  = true
    this.#username = username
    this.#presetId = presetId
    this.#status   = status

    this.#remote = new RemoteSync(username, presetId, status)

    // ── Peer discovered ──────────────────────────────────────────────────────
    this.#remote.on('HELLO', ({ from, username: u, presetId: pid = 0, status: st = 'available' }) => {
      if (this.#peers.has(from)) return
      this.#addPeer(from, u, pid, st)
    })

    // ── Peer left ────────────────────────────────────────────────────────────
    this.#remote.on('PEER_LEAVE', ({ from }) => this.#removePeer(from))

    // ── Position update ───────────────────────────────────────────────────────
    this.#remote.on('MOVE', ({ from, pos }) => {
      this.#emit('peer:move', { peerId: from, pos })
    })

    // ── Avatar change ─────────────────────────────────────────────────────────
    this.#remote.on('AVATAR_CHANGE', ({ from, presetId: pid }) => {
      this.#emit('peer:avatar', { peerId: from, presetId: pid })
    })

    // ── Status change ─────────────────────────────────────────────────────────
    this.#remote.on('STATUS_CHANGE', ({ from, status: st }) => {
      this.#emit('peer:status', { peerId: from, status: st })
    })

    // ── Chat ──────────────────────────────────────────────────────────────────
    this.#remote.on('CHAT', ({ from, username: u, text, ts }) => {
      this.#emit('chat', { from, username: u, text, ts })
    })

    await this.#remote.start()
  }

  stop () {
    this.#remote?.stop()
    this.#remote = null
    this.#peers.clear()
    this.#started = false
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
  addVoiceTrack (track, stream)    { this.#remote?.addVoiceTrack(track, stream) }
  onVoiceTrack  (cb)               { this.#remote?.onVoiceTrack(cb) }
  wireToIdentityId (wirePeerId)    { return this.#remote?.wireToIdentityId(wirePeerId) }

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
