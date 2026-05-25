// @vitest-environment jsdom
/**
 * Tests for presenceStore.js
 *
 * Covers:
 *   HOT tier  — upsertPeer (version diff), patchPeer, heartbeat, removePeer,
 *               clearHot, TTL expiry via fake timers, getSnapshot
 *   COLD tier — updateColdRoom (FIFO eviction), pruneCold, getColdRooms
 *   Events    — peer:updated, peer:removed, peer:expired, cold:updated
 */
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { PresenceStore } from '../presenceStore.js'

describe('PresenceStore — HOT tier', () => {
  let store

  beforeEach(() => {
    vi.useFakeTimers()
    store = new PresenceStore()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  // ── upsertPeer ──────────────────────────────────────────────────────────────

  it('inserts a new peer and returns true', () => {
    const result = store.upsertPeer('peer-a', { username: 'Alice', v: 1 })
    expect(result).toBe(true)
    expect(store.getPeer('peer-a')?.username).toBe('Alice')
  })

  it('updates an existing peer when incoming v is strictly greater', () => {
    store.upsertPeer('peer-a', { username: 'Alice', v: 1 })
    const result = store.upsertPeer('peer-a', { username: 'Alice2', v: 2 })
    expect(result).toBe(true)
    expect(store.getPeer('peer-a')?.username).toBe('Alice2')
  })

  it('drops an update when incoming v equals stored v', () => {
    store.upsertPeer('peer-a', { username: 'Alice', v: 3 })
    const result = store.upsertPeer('peer-a', { username: 'Bob', v: 3 })
    expect(result).toBe(false)
    expect(store.getPeer('peer-a')?.username).toBe('Alice')   // unchanged
  })

  it('drops an update when incoming v is lower than stored v', () => {
    store.upsertPeer('peer-a', { username: 'Alice', v: 5 })
    const result = store.upsertPeer('peer-a', { username: 'Old', v: 2 })
    expect(result).toBe(false)
    expect(store.getPeer('peer-a')?.username).toBe('Alice')
  })

  it('accepts v=0 as the first insert (no existing entry)', () => {
    const result = store.upsertPeer('peer-a', { username: 'Alice', v: 0 })
    expect(result).toBe(true)
  })

  it('merges fields — existing fields not in patch are preserved', () => {
    store.upsertPeer('peer-a', { username: 'Alice', presetId: 2, v: 1 })
    store.upsertPeer('peer-a', { status: 'busy', v: 2 })
    const p = store.getPeer('peer-a')
    expect(p.username).toBe('Alice')    // preserved
    expect(p.presetId).toBe(2)          // preserved
    expect(p.status).toBe('busy')       // new field applied
  })

  it('getSnapshot strips ttlTimer handles', () => {
    store.upsertPeer('peer-a', { username: 'Alice', v: 1 })
    const snap = store.getSnapshot()
    expect(snap['peer-a']).toBeDefined()
    expect(snap['peer-a'].ttlTimer).toBeUndefined()
    expect(snap['peer-a'].username).toBe('Alice')
  })

  it('getSnapshot includes all HOT peers', () => {
    store.upsertPeer('peer-a', { username: 'A', v: 1 })
    store.upsertPeer('peer-b', { username: 'B', v: 1 })
    const snap = store.getSnapshot()
    expect(Object.keys(snap)).toHaveLength(2)
  })

  it('hotSize reflects current count', () => {
    expect(store.hotSize).toBe(0)
    store.upsertPeer('peer-a', { v: 1 })
    expect(store.hotSize).toBe(1)
    store.upsertPeer('peer-b', { v: 1 })
    expect(store.hotSize).toBe(2)
  })

  // ── patchPeer ───────────────────────────────────────────────────────────────

  it('patchPeer merges fields without version check', () => {
    store.upsertPeer('peer-a', { username: 'Alice', status: 'available', v: 5 })
    store.patchPeer('peer-a', { status: 'busy' })
    expect(store.getPeer('peer-a')?.status).toBe('busy')
  })

  it('patchPeer does nothing for unknown peer', () => {
    // Should not throw
    expect(() => store.patchPeer('nobody', { status: 'busy' })).not.toThrow()
  })

  // ── updatePos ───────────────────────────────────────────────────────────────

  it('updatePos stores position without emitting peer:updated', () => {
    store.upsertPeer('peer-a', { v: 1 })
    const listener = vi.fn()
    store.addEventListener('peer:updated', listener)
    store.updatePos('peer-a', { x: 1, y: 0, z: 2, ry: 0 })
    expect(listener).not.toHaveBeenCalled()
    expect(store.getPeer('peer-a')?.pos?.x).toBe(1)
  })

  it('updatePos does nothing for unknown peer', () => {
    expect(() => store.updatePos('nobody', { x: 0, y: 0, z: 0 })).not.toThrow()
  })

  // ── heartbeat ───────────────────────────────────────────────────────────────

  it('heartbeat resets the TTL so peer is not expired at 60 s', () => {
    store.upsertPeer('peer-a', { v: 1 })
    const expiredListener = vi.fn()
    store.addEventListener('peer:expired', expiredListener)

    vi.advanceTimersByTime(50_000)  // 50 s — not expired yet
    store.heartbeat('peer-a')       // reset TTL
    vi.advanceTimersByTime(59_000)  // 59 s more (109 s total) — still alive

    expect(expiredListener).not.toHaveBeenCalled()
    expect(store.getPeer('peer-a')).toBeDefined()
  })

  it('heartbeat on unknown peer does not throw', () => {
    expect(() => store.heartbeat('nobody')).not.toThrow()
  })

  // ── TTL expiry ──────────────────────────────────────────────────────────────

  it('fires peer:expired and removes the peer after 60 s without heartbeat', () => {
    store.upsertPeer('peer-a', { username: 'Alice', v: 1 })

    const expiredListener = vi.fn()
    store.addEventListener('peer:expired', expiredListener)

    vi.advanceTimersByTime(60_000)

    expect(expiredListener).toHaveBeenCalledOnce()
    expect(expiredListener.mock.calls[0][0].detail.peerId).toBe('peer-a')
    expect(store.getPeer('peer-a')).toBeUndefined()
    expect(store.hotSize).toBe(0)
  })

  it('does not fire peer:expired if heartbeat was received in time', () => {
    store.upsertPeer('peer-a', { v: 1 })
    const expiredListener = vi.fn()
    store.addEventListener('peer:expired', expiredListener)

    vi.advanceTimersByTime(30_000)
    store.heartbeat('peer-a')
    vi.advanceTimersByTime(30_000)  // only 30 s since last hb — should not expire

    expect(expiredListener).not.toHaveBeenCalled()
  })

  // ── removePeer ──────────────────────────────────────────────────────────────

  it('removePeer fires peer:removed and deletes the entry', () => {
    store.upsertPeer('peer-a', { v: 1 })
    const listener = vi.fn()
    store.addEventListener('peer:removed', listener)

    store.removePeer('peer-a')

    expect(listener).toHaveBeenCalledOnce()
    expect(listener.mock.calls[0][0].detail.peerId).toBe('peer-a')
    expect(store.getPeer('peer-a')).toBeUndefined()
  })

  it('removePeer does nothing for unknown peer', () => {
    const listener = vi.fn()
    store.addEventListener('peer:removed', listener)
    store.removePeer('nobody')
    expect(listener).not.toHaveBeenCalled()
  })

  // ── clearHot ────────────────────────────────────────────────────────────────

  it('clearHot removes all HOT peers and cancels their TTL timers', () => {
    store.upsertPeer('peer-a', { v: 1 })
    store.upsertPeer('peer-b', { v: 1 })

    const expiredListener = vi.fn()
    store.addEventListener('peer:expired', expiredListener)

    store.clearHot()

    // TTL timers were cleared — advancing past 60 s must not fire expired
    vi.advanceTimersByTime(120_000)

    expect(expiredListener).not.toHaveBeenCalled()
    expect(store.hotSize).toBe(0)
  })

  // ── Events ──────────────────────────────────────────────────────────────────

  it('fires peer:updated on successful upsert', () => {
    const listener = vi.fn()
    store.addEventListener('peer:updated', listener)
    store.upsertPeer('peer-a', { username: 'Alice', v: 1 })
    expect(listener).toHaveBeenCalledOnce()
    expect(listener.mock.calls[0][0].detail.peerId).toBe('peer-a')
  })

  it('does not fire peer:updated when update is dropped by version diff', () => {
    store.upsertPeer('peer-a', { v: 5 })
    const listener = vi.fn()
    store.addEventListener('peer:updated', listener)
    store.upsertPeer('peer-a', { v: 3 })   // stale — should be dropped
    expect(listener).not.toHaveBeenCalled()
  })
})

// ── COLD tier ──────────────────────────────────────────────────────────────────

describe('PresenceStore — COLD tier', () => {
  let store

  beforeEach(() => {
    vi.useFakeTimers()
    store = new PresenceStore()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('updateColdRoom stores a room summary', () => {
    store.updateColdRoom('hash-abc', 3)
    const rooms = store.getColdRooms()
    expect(rooms).toHaveLength(1)
    expect(rooms[0].roomHash).toBe('hash-abc')
    expect(rooms[0].peerCount).toBe(3)
  })

  it('updateColdRoom overwrites an existing entry (same hash)', () => {
    store.updateColdRoom('hash-abc', 3)
    store.updateColdRoom('hash-abc', 7)
    const rooms = store.getColdRooms()
    expect(rooms).toHaveLength(1)
    expect(rooms[0].peerCount).toBe(7)
  })

  it('fires cold:updated event', () => {
    const listener = vi.fn()
    store.addEventListener('cold:updated', listener)
    store.updateColdRoom('hash-abc', 2)
    expect(listener).toHaveBeenCalledOnce()
    expect(listener.mock.calls[0][0].detail).toMatchObject({ roomHash: 'hash-abc', peerCount: 2 })
  })

  it('evicts the oldest room (FIFO) when MAX_COLD_ROOMS (20) is reached', () => {
    // Fill to capacity
    for (let i = 0; i < 20; i++) {
      store.updateColdRoom(`hash-${i}`, 1)
    }
    expect(store.getColdRooms()).toHaveLength(20)

    // The next insert should evict hash-0 (the oldest)
    store.updateColdRoom('hash-new', 1)
    const hashes = store.getColdRooms().map(r => r.roomHash)
    expect(hashes).not.toContain('hash-0')
    expect(hashes).toContain('hash-new')
    expect(store.getColdRooms()).toHaveLength(20)
  })

  it('pruneCold removes entries older than maxAgeMs', () => {
    store.updateColdRoom('hash-old', 1)
    vi.advanceTimersByTime(700_000)   // 700 s ≈ 11.7 min  (default threshold is 10 min)
    store.updateColdRoom('hash-new', 1)

    store.pruneCold(600_000)   // prune anything older than 10 min

    const hashes = store.getColdRooms().map(r => r.roomHash)
    expect(hashes).not.toContain('hash-old')
    expect(hashes).toContain('hash-new')
  })

  it('pruneCold keeps entries within maxAgeMs', () => {
    store.updateColdRoom('hash-fresh', 1)
    vi.advanceTimersByTime(59_000)
    store.pruneCold(600_000)
    expect(store.getColdRooms()).toHaveLength(1)
  })
})
