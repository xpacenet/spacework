/**
 * PresenceStore — two-tier peer presence memory
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │  Architecture overview                                                   │
 * │                                                                          │
 * │  HOT tier  — current room, full data                                    │
 * │    • One entry per connected peer                                        │
 * │    • Fields: username, presetId, status, pos, v (version counter)       │
 * │    • TTL: 60 s — reset on every heartbeat, auto-removes crashed peers   │
 * │    • Updated in real-time from HELLO / AVATAR / STATUS / MOVE messages  │
 * │    • Version diff: incoming delta dropped if delta.v ≤ stored.v         │
 * │                                                                          │
 * │  COLD tier — all other known rooms, lightweight summary                  │
 * │    • One entry per room (not current)                                    │
 * │    • Fields: roomHash, peerCount, lastSeen                              │
 * │    • Capped at MAX_COLD_ROOMS (20) — FIFO eviction                      │
 * │    • Updated by idle-time background sweeps (see idleScheduler.js)      │
 * │    • Never grows with total network size                                 │
 * │                                                                          │
 * │  Cost invariant:                                                         │
 * │    O(peers in current room) + O(1) per capped background room           │
 * │    ─→ memory stays bounded regardless of how many rooms exist globally  │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * Events dispatched (CustomEvent on this EventTarget):
 *   peer:updated  detail: { peerId, entry }     — HOT upsert succeeded
 *   peer:removed  detail: { peerId }             — explicit leave
 *   peer:expired  detail: { peerId }             — TTL expired (likely crashed)
 *   cold:updated  detail: { roomHash, peerCount }
 */

// ── Constants ─────────────────────────────────────────────────────────────────

/** Milliseconds before a peer is considered gone if no heartbeat received. */
const HOT_TTL_MS     = 60_000

/** Maximum number of background rooms held in the COLD tier. */
const MAX_COLD_ROOMS = 20

// ── PresenceStore ─────────────────────────────────────────────────────────────

export class PresenceStore extends EventTarget {
  /**
   * HOT tier map: peerId → PeerEntry
   *
   * PeerEntry shape:
   *   peerId    string  — stable Ed25519 peer identity
   *   username  string  — display name
   *   presetId  number  — avatar preset index
   *   status    string  — 'available' | 'busy' | 'away' | ...
   *   pos       object  — { x, y, z, ry } last known position (undefined until first MOVE)
   *   v         number  — monotonic version counter (used for delta version diff)
   *   ttlTimer  number  — setTimeout handle (not serialised)
   */
  #hot  = new Map()

  /**
   * COLD tier map: roomHash → ColdEntry
   *
   * ColdEntry shape:
   *   roomHash   string  — sha256 room hash
   *   peerCount  number  — last known peer count in that room
   *   lastSeen   number  — Date.now() when last updated
   */
  #cold = new Map()

  // ── HOT tier — read ──────────────────────────────────────────────────────────

  /** Number of peers currently tracked in the HOT tier. */
  get hotSize () { return this.#hot.size }

  /**
   * Return a peer's current entry, or undefined if not tracked.
   * @param {string} peerId
   * @returns {object|undefined}
   */
  getPeer (peerId) { return this.#hot.get(peerId) }

  /**
   * Return a serialisable copy of the full HOT tier.
   * TTL timer handles are stripped (cannot cross a data channel).
   * Used to build STATE snapshot messages.
   *
   * @returns {{ [peerId: string]: object }}
   */
  getSnapshot () {
    const out = {}
    for (const [id, entry] of this.#hot) {
      // eslint-disable-next-line no-unused-vars
      const { ttlTimer, ...safe } = entry
      out[id] = safe
    }
    return out
  }

  // ── HOT tier — write ─────────────────────────────────────────────────────────

  /**
   * Upsert a peer entry with **version-diff guard**.
   *
   * The guard ensures that late-arriving or replayed deltas are silently
   * discarded — only strictly newer data (incoming.v > stored.v) is applied.
   *
   * When no version is supplied (e.g. legacy HELLO without `v`), the entry
   * is treated as v=0 and will always pass the guard for the first insert.
   *
   * On every successful upsert the TTL timer is reset, so a heartbeat sent
   * with a bumped version counts as both a version update AND a keep-alive.
   *
   * @param {string} peerId
   * @param {object} data  — { username?, presetId?, status?, pos?, v? }
   * @returns {boolean}    true if the data was applied, false if dropped
   */
  upsertPeer (peerId, data) {
    const existing  = this.#hot.get(peerId)
    const incoming  = data.v  ?? 0
    const current   = existing?.v ?? -1

    // Version diff: drop if data is not newer than what we already have
    if (incoming <= current) return false

    // Clear the old TTL timer before setting a new one
    if (existing?.ttlTimer) clearTimeout(existing.ttlTimer)

    const ttlTimer = setTimeout(() => this.#expirePeer(peerId), HOT_TTL_MS)

    const entry = {
      username:  '',
      presetId:  0,
      status:    'available',
      pos:       undefined,
      ...(existing ?? {}),
      ...data,
      peerId,
      v: incoming,
      ttlTimer,
    }

    this.#hot.set(peerId, entry)
    this.#emit('peer:updated', { peerId, entry })
    return true
  }

  /**
   * Apply a **direct, non-version-gated** patch to a peer entry.
   *
   * Use this for live protocol messages that arrive point-to-point and are
   * always authoritative (AVATAR_CHANGE, STATUS_CHANGE).  These come directly
   * from the peer so there is no stale-data risk — no version check needed.
   *
   * Does nothing if the peer is not yet in the HOT tier.
   *
   * @param {string} peerId
   * @param {object} patch  — partial fields to merge
   */
  patchPeer (peerId, patch) {
    const existing = this.#hot.get(peerId)
    if (!existing) return
    Object.assign(existing, patch)
    // No event emitted — callers use their own SpaceSync events for UI updates
  }

  /**
   * Update a peer's position in-place.
   *
   * Positions are always authoritative from the sender (last-write-wins),
   * so no version check is applied.  A separate event is NOT emitted here
   * because `peer:move` from SpaceSync already drives UI updates — emitting
   * twice would double the overhead on every 50 ms tick.
   *
   * @param {string} peerId
   * @param {{ x: number, y: number, z: number, ry: number }} pos
   */
  updatePos (peerId, pos) {
    const entry = this.#hot.get(peerId)
    if (entry) entry.pos = pos
  }

  /**
   * Reset the TTL timer for a peer.
   *
   * Called whenever we receive a heartbeat (`hb`) message from that peer.
   * A peer that fails to heartbeat within HOT_TTL_MS (60 s) will be
   * auto-removed as a crashed-peer cleanup.
   *
   * @param {string} peerId
   */
  heartbeat (peerId) {
    const entry = this.#hot.get(peerId)
    if (!entry) return
    clearTimeout(entry.ttlTimer)
    entry.ttlTimer = setTimeout(() => this.#expirePeer(peerId), HOT_TTL_MS)
  }

  /**
   * Remove a peer from the HOT tier (graceful leave).
   *
   * Unlike TTL expiry, this fires `peer:removed` (not `peer:expired`), which
   * SpaceSync uses to distinguish clean disconnects from crashes.
   *
   * @param {string} peerId
   */
  removePeer (peerId) {
    const entry = this.#hot.get(peerId)
    if (!entry) return
    clearTimeout(entry.ttlTimer)
    this.#hot.delete(peerId)
    this.#emit('peer:removed', { peerId })
  }

  /**
   * Clear the entire HOT tier.
   * Called on room leave or spaceSync.stop() to free all timers.
   */
  clearHot () {
    for (const entry of this.#hot.values()) clearTimeout(entry.ttlTimer)
    this.#hot.clear()
  }

  // ── COLD tier — background room summaries ────────────────────────────────────

  /**
   * Update (or insert) a room summary in the COLD tier.
   *
   * Eviction policy: when the COLD tier is full and the room is new,
   * the *oldest* entry (first inserted) is removed before the new one
   * is added — simple FIFO, O(1) amortised.
   *
   * @param {string} roomHash
   * @param {number} peerCount
   */
  updateColdRoom (roomHash, peerCount) {
    // FIFO eviction: remove the oldest entry when at capacity
    if (!this.#cold.has(roomHash) && this.#cold.size >= MAX_COLD_ROOMS) {
      const oldest = this.#cold.keys().next().value
      this.#cold.delete(oldest)
    }
    this.#cold.set(roomHash, { roomHash, peerCount, lastSeen: Date.now() })
    this.#emit('cold:updated', { roomHash, peerCount })
  }

  /**
   * Prune COLD entries that have not been seen within `maxAgeMs`.
   *
   * Intended to be called from the idle scheduler as a low-priority
   * housekeeping task — no urgency, runs when the browser is free.
   *
   * @param {number} [maxAgeMs=600_000]  — default 10 minutes
   */
  pruneCold (maxAgeMs = 600_000) {
    const cutoff = Date.now() - maxAgeMs
    for (const [hash, entry] of this.#cold) {
      if (entry.lastSeen < cutoff) this.#cold.delete(hash)
    }
  }

  /**
   * Return all COLD room summaries as an array.
   * @returns {Array<{ roomHash: string, peerCount: number, lastSeen: number }>}
   */
  getColdRooms () { return [...this.#cold.values()] }

  // ── Internal ──────────────────────────────────────────────────────────────────

  /**
   * Fires when a peer's TTL timer expires.
   * The peer likely crashed without sending a `bye` / `PEER_LEAVE` message.
   * Emits `peer:expired` so SpaceSync can remove the avatar from the scene.
   *
   * @param {string} peerId
   */
  #expirePeer (peerId) {
    if (!this.#hot.has(peerId)) return
    this.#hot.delete(peerId)
    this.#emit('peer:expired', { peerId })
  }

  /** @param {string} type  @param {object} detail */
  #emit (type, detail) {
    this.dispatchEvent(new CustomEvent(type, { detail }))
  }
}

/**
 * Singleton instance shared across the entire client.
 * Import this wherever you need read access to the current peer table.
 *
 * @example
 * import { presenceStore } from './presenceStore.js'
 * const snapshot = presenceStore.getSnapshot()
 */
export const presenceStore = new PresenceStore()
