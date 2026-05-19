/**
 * WorldHistory — git-like immutable history for the open universe.
 *
 * Every change to the world state is a WorldCommit:
 *   - immutable once created
 *   - linked to its parent by hash (Merkle-style chain)
 *   - revertable by creating a new commit that inverts the changes
 *   - the full chain can be replayed to reconstruct any past state
 *
 * Philosophy: "We leave no mistake, but we can correct our mistakes."
 * Nothing is deleted — everything is recoverable.
 */

// ── Hash utility ──────────────────────────────────────────────────────────

function hashString(str) {
  let h = 5381
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h, 33) ^ str.charCodeAt(i)
  }
  return (h >>> 0).toString(16).padStart(8, '0')
}

function commitHash(parentHash, authorId, changes, timestamp) {
  const payload = JSON.stringify({ parentHash, authorId, changes, timestamp })
  // Multi-pass djb2 for longer hashes (simulate SHA-like output length)
  let h1 = hashString(payload)
  let h2 = hashString(h1 + payload.slice(0, 32))
  let h3 = hashString(h2 + payload.slice(-32))
  let h4 = hashString(h3 + authorId)
  return h1 + h2 + h3 + h4  // 32-char hex string
}

// ── World Commit ──────────────────────────────────────────────────────────

export class WorldCommit {
  /**
   * @param {string}   parentHash  hash of the parent commit (null for genesis)
   * @param {string}   authorId    node/user ID making the change
   * @param {object[]} changes     array of { cellId, key, oldValue, newValue }
   * @param {string}   message     human-readable description
   * @param {number}   timestamp   epoch ms
   */
  constructor(parentHash, authorId, changes, message = '', timestamp = Date.now()) {
    this.parentHash = parentHash
    this.authorId   = authorId
    this.changes    = Object.freeze([...changes])
    this.message    = message
    this.timestamp  = timestamp
    this.hash       = commitHash(parentHash, authorId, changes, timestamp)
  }

  /** Build the inverse commit that undoes this one */
  buildRevert(authorId, timestamp = Date.now()) {
    const invertedChanges = this.changes.map(c => ({
      cellId:   c.cellId,
      key:      c.key,
      oldValue: c.newValue,   // swap
      newValue: c.oldValue,
    }))
    return new WorldCommit(
      this.hash,
      authorId,
      invertedChanges,
      `revert: ${this.message || this.hash.slice(0, 8)}`,
      timestamp,
    )
  }

  toJSON() {
    return {
      hash:       this.hash,
      parentHash: this.parentHash,
      authorId:   this.authorId,
      message:    this.message,
      timestamp:  this.timestamp,
      changes:    this.changes,
    }
  }
}

// ── World History ──────────────────────────────────────────────────────────

const GENESIS_AUTHOR = 'universe'
const GENESIS_MSG    = 'genesis: the universe begins'

export class WorldHistory {
  #commits  = new Map()   // hash → WorldCommit
  #head     = null        // hash of current tip

  constructor() {
    // Ship the product with its own history — the genesis commit
    this._genesis()
  }

  // ── Internal ─────────────────────────────────────────────────────────────

  _genesis() {
    const g = new WorldCommit(null, GENESIS_AUTHOR, [], GENESIS_MSG, 0)
    this.#commits.set(g.hash, g)
    this.#head = g.hash
  }

  // ── Read ──────────────────────────────────────────────────────────────────

  get head()    { return this.#head }
  get length()  { return this.#commits.size }

  getCommit(hash) { return this.#commits.get(hash) ?? null }
  headCommit()    { return this.#commits.get(this.#head) }

  /**
   * Walk from current HEAD back to genesis.
   * Returns commits in reverse-chronological order (newest first).
   */
  log(limit = Infinity) {
    const out = []
    let cur   = this.#head
    while (cur && out.length < limit) {
      const c = this.#commits.get(cur)
      if (!c) break
      out.push(c)
      cur = c.parentHash
    }
    return out
  }

  /**
   * Replay history to reconstruct world state at a given commit hash.
   * Returns a Map of `${cellId}:${key}` → value at that point in history.
   */
  stateAt(hash) {
    // Collect the chain from genesis → hash
    const chain = []
    let cur = hash
    while (cur) {
      const c = this.#commits.get(cur)
      if (!c) break
      chain.unshift(c)   // prepend so genesis is first
      cur = c.parentHash
    }

    const state = new Map()
    for (const commit of chain) {
      for (const { cellId, key, newValue } of commit.changes) {
        state.set(`${cellId}:${key}`, newValue)
      }
    }
    return state
  }

  /**
   * Current world state (HEAD).
   */
  currentState() {
    return this.stateAt(this.#head)
  }

  /**
   * What changed between two commits?
   * Returns array of { cellId, key, before, after }.
   */
  diff(fromHash, toHash) {
    const a   = this.stateAt(fromHash)
    const b   = this.stateAt(toHash)
    const out = []

    const keys = new Set([...a.keys(), ...b.keys()])
    for (const k of keys) {
      const before = a.get(k) ?? null
      const after  = b.get(k) ?? null
      if (before !== after) {
        const [cellId, key] = k.split(':')
        out.push({ cellId, key, before, after })
      }
    }
    return out
  }

  // ── Write ─────────────────────────────────────────────────────────────────

  /**
   * Commit a set of changes to the world.
   *
   * @param {string}   authorId   node/user ID
   * @param {object[]} changes    [{ cellId, key, oldValue, newValue }]
   * @param {string}   message    description of the change
   * @returns {WorldCommit}
   */
  commit(authorId, changes, message = '') {
    if (!Array.isArray(changes) || changes.length === 0) {
      throw new Error('commit requires at least one change')
    }
    for (const c of changes) {
      if (!c.cellId || !c.key) throw new Error('each change must have cellId and key')
    }

    const wc = new WorldCommit(this.#head, authorId, changes, message)
    this.#commits.set(wc.hash, wc)
    this.#head = wc.hash
    return wc
  }

  /**
   * Create a new commit that reverts a specific past commit.
   * Does NOT rewrite history — appends an inverse commit.
   * Safe to call even if targetHash is many commits ago.
   *
   * @param {string} targetHash  hash of the commit to revert
   * @param {string} authorId    who is reverting
   * @returns {WorldCommit}      the new revert commit
   */
  revert(targetHash, authorId) {
    const target = this.#commits.get(targetHash)
    if (!target) throw new Error(`commit ${targetHash} not found`)
    if (target.changes.length === 0) throw new Error('cannot revert empty commit')

    const revertCommit = target.buildRevert(authorId)
    // Override parent to be current HEAD (not the original parent)
    const linked = new WorldCommit(
      this.#head,
      authorId,
      [...target.changes].map(c => ({ cellId: c.cellId, key: c.key, oldValue: c.newValue, newValue: c.oldValue })),
      `revert: ${target.message || target.hash.slice(0, 8)}`,
    )
    this.#commits.set(linked.hash, linked)
    this.#head = linked.hash
    return linked
  }

  /**
   * Verify the entire commit chain integrity.
   * Returns { valid: boolean, broken?: string } where broken is the first bad hash.
   */
  verify() {
    for (const commit of this.#commits.values()) {
      const expected = commitHash(commit.parentHash, commit.authorId, commit.changes, commit.timestamp)
      if (expected !== commit.hash) {
        return { valid: false, broken: commit.hash }
      }
      if (commit.parentHash && !this.#commits.has(commit.parentHash)) {
        return { valid: false, broken: commit.hash, reason: 'missing-parent' }
      }
    }
    return { valid: true }
  }
}
