/**
 * LocalSync — instant tab-to-tab via BroadcastChannel.
 *
 * Protocol (no loops):
 *   HELLO   → "I just boarded" — every live tab replies with PRESENT (once)
 *   PRESENT → "I'm already here" — received by the new tab, NOT replied to
 *   MOVE    → position every 50ms
 *   BYE     → leaving
 *
 * Why two types?
 *   If Tab A replies to HELLO with another HELLO, Tab B replies back, and
 *   you get an infinite ping-pong. PRESENT breaks the cycle: it carries the
 *   same payload but live tabs never reply to it.
 */

const CHANNEL = 'spacework-local-v1'

export class LocalSync {
  #ch       = null
  #id       = null
  #username = null
  #handlers = {}

  constructor(username) {
    this.#id       = Math.random().toString(36).slice(2, 9)
    this.#username = username
  }

  get id() { return this.#id }

  start() {
    this.#ch = new BroadcastChannel(CHANNEL)
    this.#ch.onmessage = e => this.#handle(e.data)
    // Announce — every live tab will reply once with PRESENT
    this.#post('HELLO')
  }

  stop() {
    this.#post('BYE')
    this.#ch?.close()
    this.#ch = null
  }

  move(x, y, z, ry = 0) { this.#post('MOVE', { pos: { x, y, z, ry } }) }
  commit(data)   { this.#post('COMMIT', { commit: data }) }

  on(type, cb) {
    if (!this.#handlers[type]) this.#handlers[type] = []
    this.#handlers[type].push(cb)
    return () => { this.#handlers[type] = this.#handlers[type].filter(h => h !== cb) }
  }

  // ── internal ───────────────────────────────────────────────────────────────

  #post(type, extra = {}) {
    this.#ch?.postMessage({ type, from: this.#id, username: this.#username, ...extra })
  }

  #handle(msg) {
    if (!msg || msg.from === this.#id) return

    if (msg.type === 'HELLO') {
      // Someone new joined — let them know we exist (PRESENT, not HELLO, no loop)
      this.#post('PRESENT')
      // Treat incoming HELLO same as PRESENT for peer tracking
      this.#fire('PEER', msg)
      return
    }

    if (msg.type === 'PRESENT') {
      // A live tab is announcing itself back to us — add them, don't reply
      this.#fire('PEER', msg)
      return
    }

    if (msg.type === 'BYE')    { this.#fire('BYE',    msg); return }
    if (msg.type === 'MOVE')   { this.#fire('MOVE',   msg); return }
    if (msg.type === 'COMMIT') { this.#fire('COMMIT', msg); return }
  }

  #fire(type, payload) {
    this.#handlers[type]?.forEach(cb => cb(payload))
  }
}
