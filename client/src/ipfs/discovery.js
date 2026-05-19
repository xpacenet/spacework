/**
 * Discovery — auto-detect other SpaceWork nodes on the IPFS network.
 *
 * Every SpaceWork client subscribes to the SPACEWORK_TOPIC GossipSub channel.
 * When you open the app:
 *   1. Your node starts and joins the IPFS network
 *   2. It broadcasts a HELLO message with your username + peer ID
 *   3. Other SpaceWork nodes see it and respond
 *   4. The swarm network auto-populates with real IPFS peers
 *
 * Message types on the topic:
 *   HELLO   — "I just joined, here's who I am"
 *   BYE     — "I'm leaving"
 *   MOVE    — position update in 3D space
 *   WORLD   — world state CID broadcast (peer sharing latest commit hash)
 *   CHAT    — encrypted direct message (encrypted with recipient's pub key)
 *   INVITE  — visibility invite token
 */

import { fromString, toString } from 'uint8arrays'

export const SPACEWORK_TOPIC = '/spacework/universe/v1'

const MSG = Object.freeze({
  HELLO:  'HELLO',
  BYE:    'BYE',
  MOVE:   'MOVE',
  WORLD:  'WORLD',
  CHAT:   'CHAT',
  INVITE: 'INVITE',
})

export { MSG }

// ── Encode / decode ───────────────────────────────────────────────────────

function encode(obj) {
  return fromString(JSON.stringify(obj))
}

function decode(bytes) {
  try { return JSON.parse(toString(bytes)) } catch { return null }
}

// ── Discovery manager ─────────────────────────────────────────────────────

export class SpaceDiscovery {
  #libp2p     = null
  #peerId     = null
  #username   = null
  #peers      = new Map()    // peerId → { username, position, lastSeen }
  #handlers   = {}           // MSG.* → [callback]
  #subscribed = false

  /**
   * @param {import('libp2p').Libp2p} libp2p
   * @param {string} peerId      our peer ID string
   * @param {string} username    display name
   */
  constructor(libp2p, peerId, username) {
    this.#libp2p   = libp2p
    this.#peerId   = peerId
    this.#username = username
  }

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  async start() {
    if (this.#subscribed) return

    const pubsub = this.#libp2p.services.pubsub
    pubsub.subscribe(SPACEWORK_TOPIC)

    pubsub.addEventListener('message', evt => {
      if (evt.detail.topic !== SPACEWORK_TOPIC) return
      const msg = decode(evt.detail.data)
      if (!msg || msg.from === this.#peerId) return   // ignore own messages
      this.#handle(msg)
    })

    // Clean up stale peers every 30s
    this._staleSweep = setInterval(() => this.#sweepStale(), 30_000)

    this.#subscribed = true

    // Announce ourselves after a brief delay (give pubsub time to connect)
    setTimeout(() => this.hello(), 500)
  }

  async stop() {
    clearInterval(this._staleSweep)
    await this.bye()
    this.#libp2p.services.pubsub.unsubscribe(SPACEWORK_TOPIC)
    this.#subscribed = false
  }

  // ── Publish helpers ───────────────────────────────────────────────────────

  async #publish(obj) {
    try {
      await this.#libp2p.services.pubsub.publish(
        SPACEWORK_TOPIC,
        encode({ from: this.#peerId, ts: Date.now(), ...obj }),
      )
    } catch { /* no peers yet — that's fine */ }
  }

  async hello() {
    await this.#publish({ type: MSG.HELLO, username: this.#username })
  }

  async bye() {
    await this.#publish({ type: MSG.BYE, username: this.#username })
  }

  async move(x, y, z) {
    await this.#publish({ type: MSG.MOVE, pos: { x, y, z } })
  }

  async broadcastWorld(cid) {
    await this.#publish({ type: MSG.WORLD, cid })
  }

  async sendChat(toUsername, encryptedPayload) {
    await this.#publish({ type: MSG.CHAT, to: toUsername, payload: encryptedPayload })
  }

  async sendInvite(token) {
    await this.#publish({ type: MSG.INVITE, token })
  }

  // ── Subscribe to message types ────────────────────────────────────────────

  on(msgType, cb) {
    if (!this.#handlers[msgType]) this.#handlers[msgType] = []
    this.#handlers[msgType].push(cb)
    return () => {
      this.#handlers[msgType] = this.#handlers[msgType].filter(h => h !== cb)
    }
  }

  // ── Peers ─────────────────────────────────────────────────────────────────

  get peers()      { return [...this.#peers.values()] }
  get peerCount()  { return this.#peers.size }

  getPeer(peerId)  { return this.#peers.get(peerId) ?? null }

  // ── Internal ──────────────────────────────────────────────────────────────

  #handle(msg) {
    const { type, from, ts, username } = msg

    switch (type) {
      case MSG.HELLO:
        this.#peers.set(from, { peerId: from, username, position: null, lastSeen: ts })
        // Reply with our own hello so the new peer knows about us
        this.hello()
        break

      case MSG.BYE:
        this.#peers.delete(from)
        break

      case MSG.MOVE: {
        const peer = this.#peers.get(from)
        if (peer) { peer.position = msg.pos; peer.lastSeen = ts }
        break
      }
    }

    // Fire registered handlers
    const handlers = this.#handlers[type]
    if (handlers) {
      for (const cb of handlers) cb(msg)
    }
  }

  #sweepStale() {
    const cutoff = Date.now() - 60_000  // 60s no message = gone
    for (const [id, peer] of this.#peers) {
      if (peer.lastSeen < cutoff) this.#peers.delete(id)
    }
  }
}
