/**
 * connectionLog.js — real-time connection process log
 *
 * A lightweight event bus that records each step of the connection process.
 * UI components subscribe to 'step' events and render them as they arrive.
 *
 * Step statuses:
 *   pending  — in progress (spinner)
 *   ok       — succeeded  (✅)
 *   fail     — failed     (❌)
 *   info     — neutral    (ℹ)
 *   warn     — degraded   (⚠️)
 */

class ConnectionLog extends EventTarget {
  #steps = []

  /** Add a new step. Returns the step ID so you can update it later. */
  push (text, status = 'pending', detail = '') {
    const id = `s${Date.now()}-${Math.random().toString(36).slice(2, 6)}`
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
    if (detail) step.detail = detail
    this.dispatchEvent(new CustomEvent('step', { detail: { ...step, action: 'update' } }))
  }

  /** Shorthand helpers */
  ok   (id, detail = '') { this.update(id, 'ok',   detail) }
  fail (id, detail = '') { this.update(id, 'fail', detail) }
  warn (id, detail = '') { this.update(id, 'warn', detail) }
  info (text, detail = '') { return this.push(text, 'info', detail) }

  get steps () { return [...this.#steps] }

  clear () {
    this.#steps = []
    this.dispatchEvent(new CustomEvent('clear'))
  }
}

// Singleton — imported by both RemoteSync and UI
export const connLog = new ConnectionLog()
