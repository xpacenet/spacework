/**
 * SpaceSync — the single multiplayer backend.
 *
 * Two transport tiers, one event surface:
 *
 *   LocalSync  (BroadcastChannel + localStorage) — same browser, instant
 *   RemoteSync (Trystero WebRTC)                 — cross-machine, BitTorrent DHT
 *
 * Events emitted (CustomEvent on this EventTarget):
 *   peer:join   detail: { peerId, username, source }
 *   peer:leave  detail: { peerId }
 *   peer:move   detail: { peerId, pos:{x,y,z,ry} }
 *   chat        detail: { from, username, text, ts }
 *   status      detail: { peerCount }
 */

import { LocalSync }          from './local.js'
import { RemoteSync, selfId } from './remote.js'

export { selfId }

export class SpaceSync extends EventTarget {
  #local   = null
  #remote  = null
  #peers   = new Map()   // peerId → { peerId, username, source }
  #started = false

  /** Username stored so sendChat can include it without needing a parameter. */
  #username = ''

  get peers()     { return [...this.#peers.values()] }
  get peerCount() { return this.#peers.size }
  get id()        { return selfId }

  async start(username) {
    if (this.#started) return
    this.#started  = true
    this.#username = username

    // ── Tier 1: same-browser tabs via BroadcastChannel ────────────────────
    this.#local = new LocalSync(username)

    this.#local.on('PEER',   ({ from, username: u }) => {
      if (this.#peers.has(from)) return
      this.#addPeer(from, u, 'local')
    })
    this.#local.on('BYE',    ({ from })         => this.#removePeer(from))
    this.#local.on('MOVE',   ({ from, pos })    => this.#emit('peer:move', { peerId: from, pos }))
    this.#local.on('COMMIT', ({ from, commit }) => this.#emit('commit', { from, commit }))
    this.#local.on('CHAT',   ({ from, username: u, text, ts }) => {
      this.#emit('chat', { from, username: u, text, ts })
    })

    this.#local.start()

    // ── Tier 2: cross-machine via Trystero WebRTC ─────────────────────────
    this.#remote = new RemoteSync(username)

    this.#remote.on('HELLO', ({ from, username: u }) => {
      if (this.#peers.has(from)) return
      this.#addPeer(from, u, 'remote')
    })
    this.#remote.on('PEER_LEAVE', ({ from }) => this.#removePeer(from))
    this.#remote.on('MOVE', ({ from, pos }) => {
      this.#emit('peer:move', { peerId: from, pos })
    })
    this.#remote.on('CHAT', ({ from, username: u, text, ts }) => {
      this.#emit('chat', { from, username: u, text, ts })
    })

    await this.#remote.start()
  }

  stop() {
    this.#local?.stop()
    this.#remote?.stop()
    this.#peers.clear()
    this.#started = false
  }

  move(x, y, z, ry = 0) {
    this.#local?.move(x, y, z, ry)
    this.#remote?.move(x, y, z, ry)
  }

  broadcastCommit(data) {
    this.#local?.commit(data)
  }

  /**
   * Broadcast a chat message to all peers (local tabs + remote machines).
   * @param {string} text
   */
  sendChat(text) {
    if (!text.trim()) return
    const ts = Date.now()
    // Fire locally so the sender sees their own message immediately
    this.#emit('chat', { from: this.id, username: this.#username, text, ts })
    this.#local?.chat(this.#username, text)
    this.#remote?.chat(text)
  }

  // ── internal ───────────────────────────────────────────────────────────────

  #addPeer(peerId, username, source) {
    this.#peers.set(peerId, { peerId, username, source })
    this.#emit('peer:join',  { peerId, username, source })
    this.#emit('status',     { peerCount: this.#peers.size })
  }

  #removePeer(peerId) {
    if (!this.#peers.has(peerId)) return
    this.#peers.delete(peerId)
    this.#emit('peer:leave', { peerId })
    this.#emit('status',     { peerCount: this.#peers.size })
  }

  #emit(type, detail) {
    this.dispatchEvent(new CustomEvent(type, { detail }))
  }
}

export const spaceSync = new SpaceSync()
