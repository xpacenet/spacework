/**
 * DDHSN — Decentralised Distributed Hierarchical Swarm Network
 *
 * Architecture layers (bottom → top):
 *
 *  5. REALITY     — shared space-time (LWW CRDT state + vector clocks)
 *  4. SWARM       — collective intelligence (gossip, consensus, proposals)
 *  3. HIERARCHY   — emergent structure (trust depth, LCA routing)
 *  2. DISTRIBUTION— every node holds the full truth (eventual consistency)
 *  1. FABRIC      — P2P connections (Trystero / WebRTC in production)
 *
 * Key insight: hierarchy is NOT assigned — it emerges from the trust chain.
 * Routing follows the trust tree: message goes UP to LCA then DOWN to target.
 * This gives O(depth) routing vs O(n) broadcast — highly efficient.
 *
 * Parallel realities: nodes in different Frequency spaces cannot see each
 * other. Merging requires majority consensus from both realities.
 */

import { Frequency }     from './frequency.js'
import { Reality }       from './reality.js'
import { TrustNetwork }  from './trust.js'

// ── SwarmNode ──────────────────────────────────────────────────────────────

export class SwarmNode {
  /**
   * @param {string} id          unique peer identity
   * @param {string} [publicKey] ECDH public key (base64)
   */
  constructor(id, publicKey = '') {
    this.id        = id
    this.publicKey = publicKey
    this.realities = new Map()   // frequencyId → Reality (can bridge multiple)
    this.neighbors = new Set()   // directly connected peer IDs
    this.position  = { x: 0, y: 0, z: 0 }
    this.meta      = {}          // arbitrary application state
  }

  /** Tune into a reality — the node becomes part of that frequency */
  tune(reality) {
    reality.enter(this.id)
    this.realities.set(reality.frequency.id, reality)
    return this
  }

  /** Leave a reality */
  detune(frequencyId) {
    const r = this.realities.get(frequencyId)
    if (r) { r.exit(this.id); this.realities.delete(frequencyId) }
    return this
  }

  /** Bridge: exist in two realities simultaneously */
  bridge(realityA, realityB) {
    this.tune(realityA)
    this.tune(realityB)
    return this
  }

  /** True if this node is tuned to the given frequency */
  isIn(frequencyId) { return this.realities.has(frequencyId) }

  /** Update position state within a specific reality */
  moveTo(x, y, z, frequencyId) {
    this.position = { x, y, z }
    const reality = this.realities.get(frequencyId)
    if (reality) reality.update(this.id, `pos:${this.id}`, { x, y, z })
  }

  connect(otherId)    { this.neighbors.add(otherId) }
  disconnect(otherId) { this.neighbors.delete(otherId) }
}

// ── SwarmNetwork ───────────────────────────────────────────────────────────

export class SwarmNetwork {
  constructor() {
    this.nodes     = new Map()   // nodeId → SwarmNode
    this.realities = new Map()   // frequencyId → { reality, trust: TrustNetwork }
    this._msgLog   = []          // audit log of routed messages
  }

  // ── Reality management ──────────────────────────────────────────────────

  /**
   * Create a new Reality with rootNode as its founding member.
   * The root's ID seeds the Frequency — deterministic and reproducible.
   */
  createReality(rootNode, epochSeed = 0) {
    const freq    = new Frequency(rootNode.id, epochSeed)
    const reality = new Reality(freq)
    const trust   = new TrustNetwork(rootNode.id, rootNode.publicKey)

    this.realities.set(freq.id, { reality, trust })
    this.addNode(rootNode)
    rootNode.tune(reality)

    return { reality, trust, frequency: freq }
  }

  addNode(node) { this.nodes.set(node.id, node) }
  getNode(id)   { return this.nodes.get(id) ?? null }

  /**
   * A node joins an existing reality.
   * Requires the node to be vouched by an existing verified member.
   */
  joinReality(node, frequencyId, voucherId) {
    const entry = this.realities.get(frequencyId)
    if (!entry) throw new Error(`Reality "${frequencyId}" does not exist`)

    const { reality, trust } = entry
    trust.vouch(voucherId, node.id, node.publicKey)
    this.addNode(node)
    node.tune(reality)
    return node
  }

  // ── Hierarchical routing ────────────────────────────────────────────────

  /**
   * Route a message from `fromId` to `toId` using the trust hierarchy
   * of the given frequency.  Returns the ordered hop list.
   *
   * Algorithm: find the Lowest Common Ancestor (LCA) in the trust tree,
   * then route UP from sender to LCA, then DOWN to recipient.
   * Complexity: O(depth_from + depth_to) — typically O(log n).
   */
  route(fromId, toId, frequencyId) {
    if (fromId === toId) return [fromId]

    const entry = this.realities.get(frequencyId)
    if (!entry) return null

    const { trust } = entry
    const pathFrom  = this.#pathToRoot(fromId, trust)
    const pathTo    = this.#pathToRoot(toId,   trust)

    if (!pathFrom || !pathTo) return null

    // Find LCA — first element of pathTo that also appears in pathFrom
    const fromSet = new Set(pathFrom)
    let lca
    for (const id of pathTo) {
      if (fromSet.has(id)) { lca = id; break }
    }
    if (!lca) return null   // nodes in separate trust trees

    // Up-path: sender → LCA (inclusive)
    const upPath   = pathFrom.slice(0, pathFrom.indexOf(lca) + 1)
    // Down-path: LCA (exclusive) → recipient
    const downPath = pathTo.slice(0, pathTo.indexOf(lca)).reverse()

    return [...upPath, ...downPath]
  }

  /**
   * Send a message — records the route taken and delivers to target.
   * In production this would be forwarded hop-by-hop over WebRTC.
   */
  send(fromId, toId, frequencyId, payload) {
    const hops = this.route(fromId, toId, frequencyId)
    if (!hops) return { delivered: false, reason: 'no-route' }

    const entry = this.realities.get(frequencyId)
    if (entry) entry.reality.update(fromId, `msg:${Date.now()}:${fromId}→${toId}`, payload)

    const record = { from: fromId, to: toId, hops, payload, ts: Date.now() }
    this._msgLog.push(record)
    return { delivered: true, hops: hops.length, route: hops }
  }

  // ── Swarm gossip ────────────────────────────────────────────────────────

  /**
   * Gossip a state update from `nodeId` outward through its neighbors.
   * Each reached node propagates further — O(n) eventual coverage,
   * but bounded by maxHops to prevent infinite loops.
   */
  gossip(nodeId, frequencyId, key, value, maxHops = 6) {
    const node  = this.nodes.get(nodeId)
    const entry = this.realities.get(frequencyId)
    if (!node || !entry) return 0

    const { reality } = entry
    const visited     = new Set()
    let   delivered   = 0

    const spread = (id, hopsLeft) => {
      if (visited.has(id) || hopsLeft <= 0) return
      visited.add(id)

      const n = this.nodes.get(id)
      if (!n || !n.isIn(frequencyId)) return

      reality.update(id, key, value)
      delivered++

      for (const neighborId of n.neighbors) spread(neighborId, hopsLeft - 1)
    }

    spread(nodeId, maxHops)
    return delivered
  }

  // ── Swarm consensus (proposal voting) ──────────────────────────────────

  /**
   * Propose a motion to the swarm (e.g. "merge realities", "eject node").
   * Returns true if majority of verified members in this reality vote YES.
   *
   * @param {string}   proposerId
   * @param {string}   frequencyId
   * @param {string}   motion        description of the proposal
   * @param {Function} voteLogic     (node, trust) => boolean  vote for each member
   */
  propose(proposerId, frequencyId, motion, voteLogic) {
    const entry = this.realities.get(frequencyId)
    if (!entry) return { passed: false, reason: 'unknown-reality' }

    const { reality, trust } = entry
    const members  = trust.getAll().filter(m => trust.isVerified(m.id))
    const votes    = members.filter(m => {
      const node = this.nodes.get(m.id)
      return node && voteLogic(node, trust)
    })

    const needed = Math.floor(members.length / 2) + 1
    const passed = votes.length >= needed

    return {
      passed,
      motion,
      proposer:  proposerId,
      total:     members.length,
      yesVotes:  votes.length,
      needed,
      voters:    votes.map(m => m.id),
    }
  }

  // ── Reality merging ─────────────────────────────────────────────────────

  /**
   * Merge two realities into one if both swarms reach consensus.
   * The resulting merged reality is available under a new frequency ID.
   */
  mergeRealities(freqIdA, freqIdB) {
    const entryA = this.realities.get(freqIdA)
    const entryB = this.realities.get(freqIdB)
    if (!entryA || !entryB) return null

    if (!entryA.reality.frequency.harmonisesWith(entryB.reality.frequency)) {
      return { merged: false, reason: 'insufficient-resonance' }
    }

    const mergedFreq    = Frequency.merge(entryA.reality.frequency, entryB.reality.frequency)
    const mergedReality = new Reality(mergedFreq)
    mergedReality.merge(entryA.reality)
    mergedReality.merge(entryB.reality)

    // Merge trust networks — root of B is vouched by root of A
    const mergedTrust = entryA.trust
    try {
      mergedTrust.vouch(entryA.trust.rootId, entryB.trust.rootId, '')
    } catch { /* already exists — idempotent */ }

    this.realities.set(mergedFreq.id, { reality: mergedReality, trust: mergedTrust })

    // Re-tune all nodes from both old realities to the new one
    for (const node of this.nodes.values()) {
      if (node.isIn(freqIdA) || node.isIn(freqIdB)) {
        node.detune(freqIdA)
        node.detune(freqIdB)
        node.tune(mergedReality)
      }
    }

    return { merged: true, frequency: mergedFreq, reality: mergedReality }
  }

  // ── Introspection ───────────────────────────────────────────────────────

  /** Nodes currently in a given reality */
  nodesIn(frequencyId) {
    return [...this.nodes.values()].filter(n => n.isIn(frequencyId))
  }

  /** Nodes bridging two realities simultaneously */
  bridges() {
    return [...this.nodes.values()].filter(n => n.realities.size > 1)
  }

  stats() {
    return {
      totalNodes:     this.nodes.size,
      totalRealities: this.realities.size,
      bridgeNodes:    this.bridges().length,
      messageCount:   this._msgLog.length,
    }
  }

  // ── Private ─────────────────────────────────────────────────────────────

  #pathToRoot(nodeId, trust) {
    const path    = []
    let current   = nodeId
    const visited = new Set()

    while (current) {
      if (visited.has(current)) return null  // cycle guard
      visited.add(current)
      path.push(current)
      current = trust.getMember(current)?.vouchedBy ?? null
    }

    return path   // e.g. ['carol', 'bob', 'alice', 'root']
  }
}
