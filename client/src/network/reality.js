/**
 * Reality — the shared space-time of a swarm.
 *
 * Every node in the same frequency maintains an identical copy of
 * the Reality. State is a Last-Write-Wins CRDT map keyed by
 * vector clocks — so two realities can always merge without conflict.
 *
 * "Joint reality" emerges when all nodes converge on the same state.
 * "Parallel realities" are simply two Reality instances at different
 * frequencies — they can be merged if the swarm votes for it.
 */

// ── Vector Clock ──────────────────────────────────────────────────────────
export class VectorClock {
  /** @param {Record<string,number>} [init] */
  constructor(init = {}) {
    this._v = new Map(Object.entries(init))
  }

  /** Advance this node's counter */
  tick(nodeId) {
    this._v.set(nodeId, (this._v.get(nodeId) || 0) + 1)
    return this
  }

  get(nodeId) { return this._v.get(nodeId) || 0 }

  /** Merge: take the max of each counter */
  merge(other) {
    for (const [id, t] of other._v) {
      this._v.set(id, Math.max(this.get(id), t))
    }
    return this
  }

  clone() { return new VectorClock(Object.fromEntries(this._v)) }

  /**
   * Causal ordering:
   *   'before'     — this happened before other
   *   'after'      — this happened after other
   *   'concurrent' — neither happened before the other
   *   'equal'      — identical clocks
   */
  compare(other) {
    const allIds  = new Set([...this._v.keys(), ...other._v.keys()])
    let thisLess  = false
    let otherLess = false

    for (const id of allIds) {
      const a = this.get(id)
      const b = other.get(id)
      if (a < b) thisLess  = true
      if (a > b) otherLess = true
    }

    if (!thisLess && !otherLess) return 'equal'
    if (thisLess  && !otherLess) return 'before'
    if (!thisLess && otherLess)  return 'after'
    return 'concurrent'
  }

  happensBefore(other) { return this.compare(other) === 'before' }
  toJSON() { return Object.fromEntries(this._v) }
}

// ── LWW CRDT State ────────────────────────────────────────────────────────
// Last-Write-Wins map: on conflict, highest-epoch clock wins;
// ties broken by lexicographic node ID.

export class LWWState {
  constructor() {
    // key → { value, clock: VectorClock, nodeId: string }
    this._entries = new Map()
  }

  set(key, value, clock, nodeId) {
    const existing = this._entries.get(key)
    if (!existing) {
      this._entries.set(key, { value, clock: clock.clone(), nodeId })
      return true
    }

    const order = clock.compare(existing.clock)
    if (order === 'after' ||
       (order === 'concurrent' && nodeId > existing.nodeId)) {
      this._entries.set(key, { value, clock: clock.clone(), nodeId })
      return true
    }
    return false
  }

  get(key) { return this._entries.get(key)?.value }
  has(key) { return this._entries.has(key) }
  keys()   { return this._entries.keys() }

  entries() {
    return [...this._entries.entries()].map(([k, v]) => [k, v.value])
  }

  /** Merge another LWWState into this one (commutative, associative) */
  merge(other) {
    for (const [key, { value, clock, nodeId }] of other._entries) {
      this.set(key, value, clock, nodeId)
    }
    return this
  }

  clone() {
    const s = new LWWState()
    for (const [key, entry] of this._entries) {
      s._entries.set(key, { ...entry, clock: entry.clock.clone() })
    }
    return s
  }

  size() { return this._entries.size }
}

// ── Reality ────────────────────────────────────────────────────────────────
export class Reality {
  /**
   * @param {import('./frequency.js').Frequency} frequency
   */
  constructor(frequency) {
    this.frequency   = frequency
    this.state       = new LWWState()    // shared CRDT state
    this.clock       = new VectorClock() // reality-level logical clock
    this.nodes       = new Set()         // node IDs currently in this reality
    this.createdAt   = Date.now()
  }

  /** A node joins this reality */
  enter(nodeId) {
    this.nodes.add(nodeId)
    this.clock.tick(nodeId)
  }

  /** A node leaves this reality */
  exit(nodeId) {
    this.nodes.delete(nodeId)
  }

  /**
   * Update a key in the shared state.
   * Returns true if the update was accepted (causally newer or won tie-break).
   */
  update(nodeId, key, value) {
    this.clock.tick(nodeId)
    return this.state.set(key, value, this.clock.clone(), nodeId)
  }

  get(key) { return this.state.get(key) }

  /**
   * Merge another reality's state into this one.
   * The resulting reality has the union of both states (LWW).
   * The frequency becomes the merged frequency.
   */
  merge(other) {
    this.state.merge(other.state)
    this.clock.merge(other.clock)
    // Absorb the other reality's nodes
    for (const id of other.nodes) this.nodes.add(id)
    return this
  }

  /**
   * Check causal consistency with another reality.
   * 'consistent' means one happened-before the other or they're equal.
   * 'diverged'   means they evolved concurrently (need merge).
   */
  consistency(other) {
    return this.clock.compare(other.clock)
  }

  snapshot() {
    return {
      frequency: this.frequency.toString(),
      nodeCount: this.nodes.size,
      stateSize: this.state.size(),
      epoch:     this.frequency.epoch,
      clock:     this.clock.toJSON(),
    }
  }
}
