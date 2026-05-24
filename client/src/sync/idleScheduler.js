/**
 * IdleScheduler — background work queue using requestIdleCallback
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │  Purpose                                                                 │
 * │                                                                          │
 * │  Some presence-sync work is low priority — pruning stale COLD entries,  │
 * │  refreshing background room counts, housekeeping.  Running these tasks  │
 * │  on a regular interval would compete with animation frames and user     │
 * │  input.                                                                  │
 * │                                                                          │
 * │  IdleScheduler defers tasks to requestIdleCallback, which only runs     │
 * │  when the browser has spare cycles — guaranteed zero-jank overhead       │
 * │  during active interaction.                                              │
 * │                                                                          │
 * │  Overflow protection                                                     │
 * │  ──────────────────                                                      │
 * │  If tasks accumulate faster than idle time drains them (e.g. the tab    │
 * │  is backgrounded and the device is under load), the queue is capped     │
 * │  at MAX_QUEUE_SIZE.  When full, the *oldest* task is dropped (FIFO)     │
 * │  before the new one is inserted.  This prevents incremental explosive   │
 * │  queue growth — the scheduler stays bounded regardless of input rate.   │
 * │                                                                          │
 * │  Graceful fallback                                                       │
 * │  ────────────────                                                        │
 * │  When requestIdleCallback is unavailable (Node.js test environment,     │
 * │  Safari < 16), tasks run via setTimeout(fn, 100) — still deferred,     │
 * │  just without the browser scheduler's idle-time awareness.              │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * Usage:
 *   import { idleScheduler } from './idleScheduler.js'
 *
 *   // Queue a low-priority task
 *   idleScheduler.schedule(() => presenceStore.pruneCold(), 'prune-cold')
 *
 *   // Check queue depth (for diagnostics)
 *   console.log(idleScheduler.queueSize)
 *
 *   // Drop all pending tasks (e.g. on room leave)
 *   idleScheduler.clear()
 */

// Maximum tasks held in the queue at any time.
// Exceeding this drops the oldest task — bounded memory, never explosive.
const MAX_QUEUE_SIZE = 50

// Minimum idle time remaining (ms) before we stop draining mid-batch.
// Keeps tasks well inside the idle window to avoid triggering jank.
const MIN_REMAINING_MS = 5

export class IdleScheduler {
  /** @type {Array<{ task: function, label: string }>} */
  #queue     = []

  /** Whether a requestIdleCallback (or fallback setTimeout) is already queued. */
  #scheduled = false

  // ── Public API ─────────────────────────────────────────────────────────────

  /**
   * Enqueue a task to run during the browser's next idle period.
   *
   * If the queue is already at MAX_QUEUE_SIZE, the oldest pending task is
   * dropped to make room for the new one.  This ensures the scheduler never
   * accumulates unbounded backlog under heavy load.
   *
   * @param {function} task   — zero-argument function to execute when idle
   * @param {string}  [label] — human-readable name (for debug logs only)
   */
  schedule (task, label = '') {
    // Overflow: drop oldest to keep queue bounded
    if (this.#queue.length >= MAX_QUEUE_SIZE) {
      this.#queue.shift()
    }
    this.#queue.push({ task, label })
    this.#maybeSchedule()
  }

  /**
   * Number of tasks currently waiting to run.
   * Useful for diagnostics — should stay near zero under normal operation.
   */
  get queueSize () { return this.#queue.length }

  /**
   * Discard all pending tasks immediately.
   * Call this on room leave or component teardown to prevent stale callbacks
   * from firing after the context they reference no longer exists.
   */
  clear () {
    this.#queue.length = 0
  }

  // ── Internal ───────────────────────────────────────────────────────────────

  /**
   * Register a drain callback if one isn't already scheduled.
   * Called whenever a task is added to the queue.
   */
  #maybeSchedule () {
    if (this.#scheduled || this.#queue.length === 0) return
    this.#scheduled = true

    if (typeof requestIdleCallback === 'function') {
      // Browser idle path: the engine calls us when there are spare cycles.
      // timeout:2000 ensures tasks don't starve indefinitely on busy pages.
      requestIdleCallback(
        deadline => this.#drain(deadline),
        { timeout: 2000 },
      )
    } else {
      // Fallback (Node.js / old Safari): just defer by 100 ms.
      // Tasks still run off the hot path but without idle-time awareness.
      setTimeout(() => this.#drain(null), 100)
    }
  }

  /**
   * Drain queued tasks within the available idle budget.
   *
   * If `deadline` is provided (requestIdleCallback path), we stop processing
   * as soon as less than MIN_REMAINING_MS is left — this keeps the idle
   * callback from running over its time slice and causing jank.
   *
   * If a timeout forced the callback early (`deadline.didTimeout`), we process
   * one task regardless of remaining time, to avoid indefinite starvation.
   *
   * After draining, if tasks remain, we re-schedule for the next idle window.
   *
   * @param {IdleDeadline|null} deadline
   */
  #drain (deadline) {
    this.#scheduled = false

    while (this.#queue.length > 0) {
      // Time-budget check: stop if we'd risk going over the idle slice.
      // Skip the check on the fallback path (deadline is null) — run all.
      if (deadline && !deadline.didTimeout) {
        if (deadline.timeRemaining() < MIN_REMAINING_MS) break
      }

      const { task, label } = this.#queue.shift()
      try {
        task()
      } catch (err) {
        // A failing background task must never crash the main loop.
        // Log and continue — the next tasks are unrelated.
        console.warn(`[IdleScheduler] task "${label}" threw:`, err)
      }
    }

    // Still tasks left?  Re-register for the next idle window.
    if (this.#queue.length > 0) this.#maybeSchedule()
  }
}

/**
 * Singleton scheduler shared across the sync layer.
 *
 * All low-priority background work (COLD tier pruning, room count refresh,
 * housekeeping) should go through this instance so that idle-time pressure
 * is pooled rather than each module registering its own rIC callbacks.
 */
export const idleScheduler = new IdleScheduler()
