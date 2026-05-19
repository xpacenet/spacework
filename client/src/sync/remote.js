/**
 * RemoteSync — cross-machine P2P via Trystero (BitTorrent DHT signaling).
 *
 * No server needed. Trystero uses BitTorrent DHT as a free signaling channel
 * then establishes direct WebRTC connections between browsers.
 *
 * Everyone who joins the same APP_ID is in the same swarm automatically.
 */

import { joinRoom, selfId } from '@trystero-p2p/torrent'

const APP_ID = 'spacework-universe-v1'

export { selfId }

export class RemoteSync {
  #room     = null
  #username = null
  #handlers = {}

  // Trystero actions
  #sendHello   = null; #onHello   = null
  #sendBye     = null; #onBye     = null
  #sendMove    = null; #onMove    = null
  #sendCommit  = null; #onCommit  = null

  constructor(username) {
    this.#username = username
  }

  async start() {
    this.#room = joinRoom({ appId: APP_ID }, APP_ID)

    ;[this.#sendHello,  this.#onHello]  = this.#room.makeAction('hello')
    ;[this.#sendBye,    this.#onBye]    = this.#room.makeAction('bye')
    ;[this.#sendMove,   this.#onMove]   = this.#room.makeAction('move')
    ;[this.#sendCommit, this.#onCommit] = this.#room.makeAction('commit')

    // Peer joins — send our intro
    this.#room.onPeerJoin(peerId => {
      this.#sendHello({ username: this.#username }, peerId)
      this.#fire('PEER_JOIN', { peerId })
    })

    this.#room.onPeerLeave(peerId => {
      this.#fire('PEER_LEAVE', { peerId })
      this.#fire('BYE', { from: peerId })
    })

    this.#onHello((data, peerId) => {
      this.#fire('HELLO', { ...data, peerId })
      // Reply so they know about us too
      this.#sendHello({ username: this.#username }, peerId)
    })

    this.#onBye((data, peerId) => this.#fire('BYE', { ...data, peerId }))

    this.#onMove((data, peerId) => this.#fire('MOVE', { ...data, peerId }))

    this.#onCommit((data, peerId) => this.#fire('COMMIT', { ...data, peerId }))
  }

  stop() {
    if (this.#room) this.#room.leave()
  }

  sendCommit(commitData) {
    if (this.#sendCommit) this.#sendCommit({ commit: commitData })
  }

  sendMove(x, y, z) {
    if (this.#sendMove) this.#sendMove({ pos: { x, y, z } })
  }

  on(type, cb) {
    if (!this.#handlers[type]) this.#handlers[type] = []
    this.#handlers[type].push(cb)
    return () => { this.#handlers[type] = this.#handlers[type].filter(h => h !== cb) }
  }

  // ── internal ──────────────────────────────────────────────────────────────

  #fire(type, payload) {
    const handlers = this.#handlers[type]
    if (handlers) handlers.forEach(cb => cb(payload))
  }
}
