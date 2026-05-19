/**
 * RemoteSync — cross-machine P2P via Trystero (BitTorrent DHT signaling).
 *
 * Joins a global room so all peers land in the same space.
 * Emits the same event shape as LocalSync so SpaceSync can treat both
 * sources identically.
 *
 * Actions:
 *   intro  — sent on join and on receiving an intro, carries username
 *   move   — position broadcast at 50ms interval
 *   chat   — text chat message
 *   bye    — explicit leave signal
 */

import { joinRoom, selfId } from '@trystero-p2p/torrent'

export { selfId }

const APP_ID  = 'spacework-v1'
const ROOM_ID = 'SW-OPEN-v1'

export class RemoteSync {
  #room     = null
  #username = null
  #handlers = {}

  #sendIntro = null; #onIntro = null
  #sendMove  = null; #onMove  = null
  #sendChat  = null; #onChat  = null
  #sendBye   = null; #onBye   = null

  constructor(username) {
    this.#username = username
  }

  async start() {
    this.#room = joinRoom({ appId: APP_ID }, ROOM_ID)

    ;[this.#sendIntro, this.#onIntro] = this.#room.makeAction('intro')
    ;[this.#sendMove,  this.#onMove]  = this.#room.makeAction('move')
    ;[this.#sendChat,  this.#onChat]  = this.#room.makeAction('chat')
    ;[this.#sendBye,   this.#onBye]   = this.#room.makeAction('bye')

    // New peer appears — send our intro so they know our name
    this.#room.onPeerJoin(peerId => {
      this.#sendIntro({ username: this.#username }, peerId)
    })

    // Peer disconnects
    this.#room.onPeerLeave(peerId => {
      this.#fire('PEER_LEAVE', { from: peerId })
    })

    // Receive intro — announce the peer and reply so they know us
    this.#onIntro(({ username }, peerId) => {
      this.#fire('HELLO', { from: peerId, username })
      this.#sendIntro({ username: this.#username }, peerId)
    })

    this.#onMove(({ pos }, peerId) => {
      this.#fire('MOVE', { from: peerId, pos })
    })

    this.#onChat(({ username, text, ts }, peerId) => {
      this.#fire('CHAT', { from: peerId, username, text, ts })
    })

    this.#onBye((_, peerId) => {
      this.#fire('PEER_LEAVE', { from: peerId })
    })
  }

  stop() {
    this.#sendBye?.()
    this.#room?.leave()
  }

  move(x, y, z, ry = 0) {
    this.#sendMove?.({ pos: { x, y, z, ry } })
  }

  /**
   * Broadcast a chat message to all remote peers.
   * @param {string} text
   */
  chat(text) {
    this.#sendChat?.({ username: this.#username, text, ts: Date.now() })
  }

  on(type, cb) {
    if (!this.#handlers[type]) this.#handlers[type] = []
    this.#handlers[type].push(cb)
    return () => { this.#handlers[type] = this.#handlers[type].filter(h => h !== cb) }
  }

  #fire(type, payload) {
    this.#handlers[type]?.forEach(cb => cb(payload))
  }
}
