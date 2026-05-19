/**
 * RemoteSync — cross-machine P2P via Trystero (BitTorrent DHT signaling).
 *
 * Same room as the global lobby so all peers land in the same space.
 * Emits the same event shape as LocalSync so SpaceSync can treat both
 * sources identically.
 */

import { joinRoom, selfId } from '@trystero-p2p/torrent'

export { selfId }

const APP_ID   = 'spacework-v1'
const ROOM_ID  = 'SW-OPEN-v1'        // global open room — everyone lands here

export class RemoteSync {
  #room     = null
  #username = null
  #handlers = {}

  #sendIntro = null; #onIntro = null
  #sendMove  = null; #onMove  = null
  #sendBye   = null; #onBye   = null

  constructor(username) {
    this.#username = username
  }

  async start() {
    this.#room = joinRoom({ appId: APP_ID }, ROOM_ID)

    ;[this.#sendIntro, this.#onIntro] = this.#room.makeAction('intro')
    ;[this.#sendMove,  this.#onMove]  = this.#room.makeAction('move')
    ;[this.#sendBye,   this.#onBye]   = this.#room.makeAction('bye')

    // New peer appears — send them our intro immediately
    this.#room.onPeerJoin(peerId => {
      this.#sendIntro({ username: this.#username }, peerId)
    })

    // Peer disconnects — fire leave
    this.#room.onPeerLeave(peerId => {
      this.#fire('PEER_LEAVE', { from: peerId })
    })

    // Receive intro — add to peers and reply so they know us too
    this.#onIntro(({ username }, peerId) => {
      this.#fire('HELLO', { from: peerId, username })
      // Reply with our intro so they get our name
      this.#sendIntro({ username: this.#username }, peerId)
    })

    this.#onMove(({ pos }, peerId) => {
      this.#fire('MOVE', { from: peerId, pos })
    })

    this.#onBye((_, peerId) => {
      this.#fire('PEER_LEAVE', { from: peerId })
    })
  }

  stop() {
    this.#sendBye?.()
    this.#room?.leave()
  }

  move(x, y, z) {
    this.#sendMove?.({ pos: { x, y, z } })
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
