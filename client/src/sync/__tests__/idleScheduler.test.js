// @vitest-environment jsdom
/**
 * Tests for idleScheduler.js
 *
 * Covers:
 *   schedule()     — basic enqueue and run
 *   overflow       — FIFO eviction when queue exceeds MAX (50)
 *   error handling — a failing task does not prevent the rest from running
 *   clear()        — discards pending tasks
 *   queueSize      — reflects current depth
 *   rIC fallback   — when requestIdleCallback is unavailable, uses setTimeout
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { IdleScheduler } from '../idleScheduler.js'

// ── Helper: run requestIdleCallback registered callbacks synchronously ─────────
// jsdom does not implement rIC, so we capture callbacks and call them ourselves.

function withRIC (fn) {
  const callbacks = []
  const origRIC = window.requestIdleCallback
  window.requestIdleCallback = (cb) => { callbacks.push(cb); return 0 }

  fn()

  // Fire all registered rIC callbacks with a mock deadline (5 ms budget)
  for (const cb of callbacks) {
    cb({ timeRemaining: () => 5, didTimeout: false })
  }

  window.requestIdleCallback = origRIC
}

describe('IdleScheduler — basic scheduling', () => {
  let scheduler

  beforeEach(() => {
    vi.useFakeTimers()
    scheduler = new IdleScheduler()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('runs a scheduled task via setTimeout fallback', async () => {
    const task = vi.fn()
    scheduler.schedule(task, 'test-task')
    expect(task).not.toHaveBeenCalled()   // not synchronous
    await vi.runAllTimersAsync()
    expect(task).toHaveBeenCalledOnce()
  })

  it('runs multiple tasks in order', async () => {
    const order = []
    scheduler.schedule(() => order.push(1), 'a')
    scheduler.schedule(() => order.push(2), 'b')
    scheduler.schedule(() => order.push(3), 'c')
    await vi.runAllTimersAsync()
    expect(order).toEqual([1, 2, 3])
  })

  it('queueSize starts at 0', () => {
    expect(scheduler.queueSize).toBe(0)
  })

  it('queueSize reflects pending task count', () => {
    scheduler.schedule(() => {}, 'a')
    scheduler.schedule(() => {}, 'b')
    expect(scheduler.queueSize).toBe(2)
  })

  it('queueSize reaches 0 after tasks run', async () => {
    scheduler.schedule(() => {}, 'a')
    await vi.runAllTimersAsync()
    expect(scheduler.queueSize).toBe(0)
  })
})

describe('IdleScheduler — overflow protection', () => {
  let scheduler

  beforeEach(() => {
    vi.useFakeTimers()
    scheduler = new IdleScheduler()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('drops the oldest task (FIFO) when queue exceeds 50', async () => {
    const ran = []

    // Enqueue 51 tasks — the first one should be dropped
    for (let i = 0; i < 51; i++) {
      scheduler.schedule(() => ran.push(i), `task-${i}`)
    }

    // Should be capped at 50
    expect(scheduler.queueSize).toBe(50)

    await vi.runAllTimersAsync()

    // task 0 was dropped — ran starts from 1
    expect(ran[0]).toBe(1)
    expect(ran).toHaveLength(50)
    expect(ran).not.toContain(0)
  })

  it('keeps the newest tasks when overflowing', async () => {
    const ran = []

    for (let i = 0; i < 55; i++) {
      scheduler.schedule(() => ran.push(i), `task-${i}`)
    }

    await vi.runAllTimersAsync()

    // Tasks 0-4 were evicted to make room for 50-54
    expect(ran).not.toContain(0)
    expect(ran).not.toContain(4)
    expect(ran).toContain(54)
  })
})

describe('IdleScheduler — error handling', () => {
  let scheduler

  beforeEach(() => {
    vi.useFakeTimers()
    scheduler = new IdleScheduler()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('continues executing subsequent tasks after one throws', async () => {
    const ran = []
    scheduler.schedule(() => { throw new Error('boom') }, 'fail')
    scheduler.schedule(() => ran.push('after'), 'after')

    // suppress console.warn for this test
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    await vi.runAllTimersAsync()
    warn.mockRestore()

    expect(ran).toContain('after')
  })

  it('logs a warning with the task label when a task throws', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    scheduler.schedule(() => { throw new Error('oops') }, 'my-failing-task')
    await vi.runAllTimersAsync()
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('my-failing-task'),
      expect.any(Error),
    )
    warn.mockRestore()
  })
})

describe('IdleScheduler — clear()', () => {
  let scheduler

  beforeEach(() => {
    vi.useFakeTimers()
    scheduler = new IdleScheduler()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('clear() discards all pending tasks', async () => {
    const ran = []
    scheduler.schedule(() => ran.push('a'), 'a')
    scheduler.schedule(() => ran.push('b'), 'b')
    scheduler.clear()
    await vi.runAllTimersAsync()
    expect(ran).toHaveLength(0)
  })

  it('clear() resets queueSize to 0', () => {
    scheduler.schedule(() => {}, 'a')
    scheduler.schedule(() => {}, 'b')
    scheduler.clear()
    expect(scheduler.queueSize).toBe(0)
  })
})

describe('IdleScheduler — requestIdleCallback path', () => {
  it('uses rIC when available and runs tasks within idle window', () => {
    const scheduler = new IdleScheduler()
    const ran = []

    withRIC(() => {
      scheduler.schedule(() => ran.push('x'), 'x')
    })

    expect(ran).toContain('x')
  })

  it('stops draining if timeRemaining < 5 ms and re-schedules', () => {
    const callbacks = []
    const origRIC = window.requestIdleCallback
    window.requestIdleCallback = (cb) => { callbacks.push(cb); return 0 }

    const scheduler = new IdleScheduler()
    const ran = []

    scheduler.schedule(() => ran.push(1), 'a')
    scheduler.schedule(() => ran.push(2), 'b')

    expect(callbacks).toHaveLength(1)

    // First idle call: deadline immediately exhausted (0 ms remaining, not timed out)
    // First task should run (it runs before the check), second should be deferred
    // Actually the drain loop checks BEFORE running, so with 0 ms the first task runs
    // because the while-condition is checked per iteration.
    // Let's simulate: first callback exhausts quickly
    callbacks[0]({ timeRemaining: () => 0, didTimeout: false })

    // A second rIC should have been registered for remaining tasks
    expect(callbacks).toHaveLength(2)

    // Fire second idle with ample time
    callbacks[1]({ timeRemaining: () => 50, didTimeout: false })

    expect(ran).toContain(2)

    window.requestIdleCallback = origRIC
  })
})
