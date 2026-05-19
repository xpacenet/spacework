/**
 * LocalSync — instant tab-to-tab sync via BroadcastChannel.
 *
 * Works between any two tabs of the same origin in the same browser.
 * Zero latency, zero dependencies, no signaling needed.
 * Used as the fast-path before remote peers arrive.
 */

const CHANNEL = 'spacework-local-v1'

export class LocalSync {
  #ch       = null
  #id       = null    // random ID for this tab
  #username = null
  #handlers = {}

  constructor(username) {
    this.#id       = Math.random().toString(36).slice(2, 9)
    this.#username = username
    this.#ch       = new BroadcastChannel(CHANNEL)
    this.#ch.onmessage = e => this.#handle(e.data)
  }

  start() {
    this.#send('HELLO', { username: this.#username })
  }

  stop() {
    this.#send('BYE', { username: this.#username })
    this.#ch.close()
  }

  sendCommit(commitData) {
    this.#send('COMMIT', { commit: commitData })
  }

  sendMove(x, y, z) {
    this.#send('MOVE', { pos: { x, y, z } })
  }

  on(type, cb) {
    if (!this.#handlers[type]) this.#handlers[type] = []
    this.#handlers[type].push(cb)
    return () => { this.#handlers[type] = this.#handlers[type].filter(h => h !== cb) }
  }

  // ── internal ──────────────────────────────────────────────────────────────

  #send(type, payload = {}) {
    this.#ch.postMessage({ type, from: this.#id, username: this.#username, ...payload })
  }

  #handle(msg) {
    if (msg.from === this.#id) return   // ignore own messages
    const handlers = this.#handlers[msg.type]
    if (handlers) handlers.forEach(cb => cb(msg))
  }
}
