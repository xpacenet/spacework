/**
 * router.js — blind message routing over GossipSub
 *
 * The router subscribes to xpacenet topics and forwards raw payloads.
 * It never inspects message content — it only cares about the topic.
 *
 * Topics (all prefixed xn/):
 *   xn/rooms      room discovery heartbeats   (cross-node)
 *   xn/joins      peer-join notifications     (cross-node)
 *   xn/leaves     peer-leave notifications    (cross-node)
 *   xn/signals    WebRTC signaling payloads   (cross-node, addressed by peerId)
 *   xn/receipts   delivery acknowledgments    (cross-node, for future mining)
 */

const enc = new TextEncoder()
const dec = new TextDecoder()

// ── Topic registry ─────────────────────────────────────────────────────────────
export const TOPICS = Object.freeze({
  ROOMS:    'xn/rooms',
  JOINS:    'xn/joins',
  LEAVES:   'xn/leaves',
  SIGNALS:  'xn/signals',
  RECEIPTS: 'xn/receipts',
})

const ALL_TOPICS = Object.values(TOPICS)

// ── Router ────────────────────────────────────────────────────────────────────

export class Router {
  #node      = null
  #nodeId    = ''
  #handlers  = new Map()   // topic → [ handler ]
  #started   = false

  constructor (node) {
    this.#node   = node
    this.#nodeId = node.peerId.toString()
  }

  /**
   * Subscribe to an xpacenet topic.
   * Handler receives the decoded payload object.
   * Messages from this node are automatically filtered out.
   */
  on (topic, handler) {
    if (!this.#handlers.has(topic)) this.#handlers.set(topic, [])
    this.#handlers.get(topic).push(handler)
  }

  /**
   * Publish a payload to an xpacenet topic.
   * Always includes nodeId so recipients can filter own messages.
   */
  async publish (topic, payload) {
    const msg = { ...payload, _from: this.#nodeId }
    try {
      await this.#node.services.pubsub.publish(topic, enc.encode(JSON.stringify(msg)))
    } catch {
      // Normal: no peers subscribed to this topic yet
    }
  }

  /**
   * Start dispatching — call once after node is started.
   */
  start () {
    if (this.#started) return
    this.#started = true

    // Subscribe to all xpacenet topics
    for (const topic of ALL_TOPICS) {
      this.#node.services.pubsub.subscribe(topic)
    }

    this.#node.services.pubsub.addEventListener('message', evt => {
      const handlers = this.#handlers.get(evt.detail.topic)
      if (!handlers?.length) return
      try {
        const payload = JSON.parse(dec.decode(evt.detail.data))
        // Drop own messages (we already handled them locally)
        if (payload._from === this.#nodeId) return
        handlers.forEach(h => h(payload))
      } catch { /* malformed — drop */ }
    })

    console.log('[router] subscribed to topics:', ALL_TOPICS.join(', '))
  }
}
