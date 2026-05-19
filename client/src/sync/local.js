/**
 * LocalSync — instant tab-to-tab via BroadcastChannel.
 *
 * Protocol:
 *   HELLO  → "I just boarded, who else is here?"
 *   HELLO  ← every live tab replies with their own HELLO (so late joiners see everyone)
 *   MOVE   → position every 50ms
 *   BYE    → leaving
 *
 * Because BroadcastChannel is same-origin only, this works the moment
 * a second tab opens — no WebRTC, no signaling, no latency.
 */

const CHANNEL = 'spacework-local-v1'

export class LocalSync {
  #ch       = null
  #id       = null
  #username = null
  #handlers = {}
  #alive    = false

  constructor(username) {
    this.#id       = Math.random().toString(36).slice(2, 9)
    this.#username = username
  }

  get id() { return this.#id }

  start() {
    this.#ch = new BroadcastChannel(CHANNEL)
    this.#ch.onmessage = e => this.#handle(e.data)
    this.#alive = true
    // Announce ourselves — every live tab will reply with their own HELLO
    this.#send('HELLO')
  }

  stop() {
    if (!this.#alive) return
    this.#send('BYE')
    this.#ch.close()
    this.#alive = false
  }

  move(x, y, z)    { this.#send('MOVE',   { pos: { x, y, z } }) }
  commit(data)      { this.#send('COMMIT', { commit: data }) }

  on(type, cb) {
    if (!this.#handlers[type]) this.#handlers[type] = []
    this.#handlers[type].push(cb)
    return () => { this.#handlers[type] = this.#handlers[type].filter(h => h !== cb) }
  }

  // ── internal ───────────────────────────────────────────────────────────────

  #send(type, extra = {}) {
    if (!this.#alive && type !== 'HELLO') return
    this.#ch?.postMessage({ type, from: this.#id, username: this.#username, ...extra })
  }

  #handle(msg) {
    if (!msg || msg.from === this.#id) return   // ignore own messages

    // When someone new announces themselves, reply so they know we exist too
    if (msg.type === 'HELLO') {
      this.#send('HELLO')
    }

    const handlers = this.#handlers[msg.type]
    if (handlers) handlers.forEach(cb => cb(msg))
  }
}
