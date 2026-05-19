/**
 * SpaceSync — the single multiplayer backend.
 *
 * Two detection tiers, one event surface:
 *
 *   LocalSync  (BroadcastChannel) — same browser, instant, zero deps
 *   RemoteSync (Trystero WebRTC)  — cross-machine, BitTorrent DHT signaling
 *
 * Detection protocol for BOTH tiers:
 *   1. You board → send HELLO with your username
 *   2. Every live peer hears it → replies with their own HELLO
 *   3. You hear their reply → now you know each other ← the key step that was missing
 *   4. MOVE messages keep avatar positions in sync (50ms interval)
 *   5. BYE / disconnect removes the peer
 *
 * Events emitted (CustomEvent on this EventTarget):
 *   peer:join   detail: { peerId, username, source }   — someone appeared
 *   peer:leave  detail: { peerId }                     — someone left
 *   peer:move   detail: { peerId, pos:{x,y,z} }        — position update
 *   status      detail: { peerCount }                  — count changed
 */

import { LocalSync }          from './local.js'
import { RemoteSync, selfId } from './remote.js'

export { selfId }

export class SpaceSync extends EventTarget {
  #local   = null
  #remote  = null
  #peers   = new Map()   // peerId → { peerId, username, source }
  #started = false

  get peers()     { return [...this.#peers.values()] }
  get peerCount() { return this.#peers.size }
  get id()        { return selfId }

  async start(username) {
    if (this.#started) return
    this.#started = true

    // ── Tier 1: same-browser tabs via BroadcastChannel ────────────────────
    this.#local = new LocalSync(username)

    this.#local.on('PEER', ({ from, username: u }) => {
      if (this.#peers.has(from)) return
      this.#addPeer(from, u, 'local')
    })

    this.#local.on('BYE',    ({ from })        => this.#removePeer(from))
    this.#local.on('MOVE',   ({ from, pos })   => this.#emit('peer:move', { peerId: from, pos }))
    this.#local.on('COMMIT', ({ from, commit })=> this.#emit('commit', { from, commit }))

    this.#local.start()    // sends HELLO; every live tab replies automatically

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

    await this.#remote.start()    // joins SW-OPEN-v1; sends intro to anyone already there
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
