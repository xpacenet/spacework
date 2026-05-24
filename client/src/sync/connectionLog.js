/**
 * connectionLog.js — real-time connection process log
 *
 * Records each step of the connection ladder so users can see exactly
 * what the platform is trying:
 *
 *   1. Decode link / resolve room
 *   2. Check known peers (direct reconnect)
 *   3. xpacenode (if configured)
 *   4. BitTorrent DHT (public fallback)
 *   5. Self as host (first in room — device anchors, waits for others)
 *
 * Step statuses:
 *   pending  — in progress  (⏳)
 *   ok       — succeeded    (✅)
 *   fail     — failed       (❌)
 *   warn     — degraded     (⚠️)
 *   info     — neutral note (·)
 *   host     — self is host (🏠)
 */

class ConnectionLog extends EventTarget {
  #steps         = []
  #peerTimer     = null   // fires "you're first" if no peer joins within timeout
  #firstPeerSeen = false

  /** Add a new step. Returns the step ID so you can update it later. */
  push (text, status = 'pending', detail = '') {
    const id   = `s${Date.now()}-${Math.random().toString(36).slice(2, 6)}`
    const step = { id, text, status, detail, ts: Date.now() }
    this.#steps.push(step)
    this.dispatchEvent(new CustomEvent('step', { detail: { ...step, action: 'add' } }))
    return id
  }

  /** Update an existing step's status and optional detail. */
  update (id, status, detail = '') {
    const step = this.#steps.find(s => s.id === id)
    if (!step) return
    step.status = status
    if (detail !== '') step.detail = detail
    this.dispatchEvent(new CustomEvent('step', { detail: { ...step, action: 'update' } }))
  }

  /** Shorthand helpers */
  ok   (id, detail = '') { this.update(id, 'ok',   detail) }
  fail (id, detail = '') { this.update(id, 'fail', detail) }
  warn (id, detail = '') { this.update(id, 'warn', detail) }
  info (text, detail = '') { return this.push(text, 'info', detail) }

  /**
   * Start the "you're first here" timer.
   * If no peer joins within `ms` milliseconds, fire the 'first-in-room' event.
   * Call cancelFirstTimer() when a peer joins.
   */
  startFirstTimer (ms = 12_000) {
    this.#firstPeerSeen = false
    clearTimeout(this.#peerTimer)
    this.#peerTimer = setTimeout(() => {
      if (!this.#firstPeerSeen) {
        this.push(
          'You\'re the first here — your device is the anchor',
          'host',
          'Share your invite link to let others find you'
        )
        this.dispatchEvent(new CustomEvent('first-in-room'))
      }
    }, ms)
  }

  /** Call this when the first peer joins — cancels the "first in room" timer. */
  peerJoined (username) {
    this.#firstPeerSeen = true
    clearTimeout(this.#peerTimer)
    this.info(`${username || 'Someone'} joined`)
  }

  get steps ()  { return [...this.#steps] }
  get hasHost () { return this.#firstPeerSeen === false }

  clear () {
    this.#steps = []
    clearTimeout(this.#peerTimer)
    this.#firstPeerSeen = false
    this.dispatchEvent(new CustomEvent('clear'))
  }
}

// Singleton — imported by sync layer and UI
export const connLog = new ConnectionLog()
