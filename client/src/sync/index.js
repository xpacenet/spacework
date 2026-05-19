/**
 * SpaceSync — unified sync layer.
 *
 * Tier 1 — LocalSync  (BroadcastChannel): same browser, instant, zero deps
 * Tier 2 — RemoteSync (Trystero WebRTC):  cross-machine, BitTorrent DHT signaling
 *
 * Both tiers fire the same events so the rest of the app doesn't care which
 * transport delivered a message.
 *
 * Events emitted:
 *   peer:join    { peerId, username, source }   — a peer appeared
 *   peer:leave   { peerId, source }             — a peer left
 *   peer:move    { peerId, pos }                — position update
 *   commit       { commit }                     — world history commit from peer
 *   status       { local, remote, peerCount }   — connectivity update
 */

import { LocalSync }  from './local.js'
import { RemoteSync, selfId } from './remote.js'

export { selfId }

export class SpaceSync extends EventTarget {
  #local   = null
  #remote  = null
  #peers   = new Map()   // peerId → { username, source }
  #started = false

  get peers()     { return [...this.#peers.values()] }
  get peerCount() { return this.#peers.size }
  get id()        { return selfId }

  /**
   * Start both sync tiers.
   * @param {string} username
   */
  async start(username) {
    if (this.#started) return
    this.#started = true

    // ── Tier 1: local tabs ─────────────────────────────────────────────────
    this.#local = new LocalSync(username)

    this.#local.on('HELLO', ({ from, username: u }) => {
      this.#peers.set(from, { peerId: from, username: u, source: 'local' })
      this.#emit('peer:join', { peerId: from, username: u, source: 'local' })
      this.#emitStatus()
    })
    this.#local.on('BYE', ({ from }) => {
      this.#peers.delete(from)
      this.#emit('peer:leave', { peerId: from, source: 'local' })
      this.#emitStatus()
    })
    this.#local.on('MOVE',   ({ from, pos })    => this.#emit('peer:move',  { peerId: from, pos }))
    this.#local.on('COMMIT', ({ from, commit }) => this.#emit('commit',     { commit, from }))

    this.#local.start()

    // ── Tier 2: remote peers ───────────────────────────────────────────────
    this.#remote = new RemoteSync(username)

    this.#remote.on('HELLO', ({ peerId, username: u }) => {
      if (!this.#peers.has(peerId)) {
        this.#peers.set(peerId, { peerId, username: u, source: 'remote' })
        this.#emit('peer:join', { peerId, username: u, source: 'remote' })
        this.#emitStatus()
      }
    })
    this.#remote.on('PEER_LEAVE', ({ peerId }) => {
      this.#peers.delete(peerId)
      this.#emit('peer:leave', { peerId, source: 'remote' })
      this.#emitStatus()
    })
    this.#remote.on('MOVE',   ({ peerId, pos })    => this.#emit('peer:move',  { peerId, pos }))
    this.#remote.on('COMMIT', ({ peerId, commit }) => this.#emit('commit',     { commit, from: peerId }))

    await this.#remote.start()

    this.#emitStatus()
  }

  stop() {
    this.#local?.stop()
    this.#remote?.stop()
    this.#started = false
  }

  /** Broadcast a world commit to all peers. */
  broadcastCommit(commitData) {
    this.#local?.sendCommit(commitData)
    this.#remote?.sendCommit(commitData)
  }

  /** Broadcast position update. */
  broadcastMove(x, y, z) {
    this.#local?.sendMove(x, y, z)
    this.#remote?.sendMove(x, y, z)
  }

  // ── internal ───────────────────────────────────────────────────────────

  #emit(type, detail) {
    this.dispatchEvent(new CustomEvent(type, { detail }))
  }

  #emitStatus() {
    this.#emit('status', {
      local:     this.#local  !== null,
      remote:    this.#remote !== null,
      peerCount: this.#peers.size,
    })
  }
}

// Singleton — one sync instance per tab
export const spaceSync = new SpaceSync()
