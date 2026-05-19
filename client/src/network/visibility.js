/**
 * Visibility — access control layer for the DDHSN.
 *
 * Every node and every reality has a visibility mode:
 *
 *  PUBLIC      — discoverable by anyone on the network map,
 *                connectable without permission.
 *
 *  INVITE      — visible on the map as a "blurred" node,
 *                but entry requires a valid InviteToken.
 *
 *  PRIVATE     — completely invisible to non-connected peers.
 *                Only peers in the same verified trust chain can see you.
 *
 * Invite tokens are single-use, optionally targeted to a specific peer,
 * and carry a TTL.  They can be shared as plain strings (the token ID)
 * — the holder presents the ID to claim entry.
 */

export const VISIBILITY = Object.freeze({
  PUBLIC:  'public',
  INVITE:  'invite',
  PRIVATE: 'private',
})

// ── Invite Token ──────────────────────────────────────────────────────────

function randomId() {
  return Math.random().toString(36).slice(2, 9).toUpperCase()
}

export class InviteToken {
  /**
   * @param {string} issuerId     node ID of who issued this invite
   * @param {string} frequencyId  which reality this invite grants access to
   * @param {object} opts
   * @param {string|null} opts.targetId   specific peer the invite is for (null = open)
   * @param {number}      opts.ttlMs      time-to-live in ms (default: 24 h)
   * @param {number}      opts.maxUses    how many times it can be claimed (default: 1)
   */
  constructor(issuerId, frequencyId, { targetId = null, ttlMs = 86_400_000, maxUses = 1 } = {}) {
    this.id          = `INV-${randomId()}-${randomId()}`
    this.issuerId    = issuerId
    this.frequencyId = frequencyId
    this.targetId    = targetId
    this.expiresAt   = Date.now() + ttlMs
    this.maxUses     = maxUses
    this.uses        = 0
    this.claimedBy   = []   // list of claimant IDs
  }

  get expired()   { return Date.now() > this.expiresAt }
  get exhausted() { return this.uses >= this.maxUses }
  get active()    { return !this.expired && !this.exhausted }

  /**
   * Check if claimantId can use this token.
   * Does NOT consume the use — call claim() to do that.
   */
  isValidFor(claimantId) {
    if (this.expired)   return false
    if (this.exhausted) return false
    if (this.targetId && this.targetId !== claimantId) return false
    return true
  }

  /**
   * Claim the token.  Returns true on success, false on failure.
   */
  claim(claimantId) {
    if (!this.isValidFor(claimantId)) return false
    this.uses++
    this.claimedBy.push(claimantId)
    return true
  }
}

// ── Visibility Layer ──────────────────────────────────────────────────────

export class VisibilityLayer {
  #nodeMode     = new Map()   // nodeId     → VISIBILITY.*
  #realityMode  = new Map()   // frequencyId → VISIBILITY.*
  #tokens       = new Map()   // tokenId    → InviteToken
  #grants       = new Map()   // claimantId → Set<frequencyId>  (claimed access)

  // ── Node visibility ─────────────────────────────────────────────────────

  setNode(nodeId, mode)    { this.#nodeMode.set(nodeId, mode) }
  getNode(nodeId)          { return this.#nodeMode.get(nodeId) ?? VISIBILITY.PUBLIC }

  // ── Reality visibility ──────────────────────────────────────────────────

  setReality(frequencyId, mode) { this.#realityMode.set(frequencyId, mode) }
  getReality(frequencyId)       { return this.#realityMode.get(frequencyId) ?? VISIBILITY.PUBLIC }

  // ── Invites ─────────────────────────────────────────────────────────────

  /**
   * Issue an invite token.
   * @returns {InviteToken}
   */
  issueInvite(issuerId, frequencyId, opts = {}) {
    const token = new InviteToken(issuerId, frequencyId, opts)
    this.#tokens.set(token.id, token)
    return token
  }

  getToken(tokenId) { return this.#tokens.get(tokenId) ?? null }

  /**
   * A peer claims an invite by token ID.
   * On success, they gain access to the token's reality.
   * @returns {{ success: boolean, frequencyId?: string, reason?: string }}
   */
  claimInvite(tokenId, claimantId) {
    const token = this.#tokens.get(tokenId)
    if (!token) return { success: false, reason: 'token-not-found' }

    if (token.expired)               return { success: false, reason: 'token-expired' }
    if (token.exhausted)             return { success: false, reason: 'token-exhausted' }
    if (!token.isValidFor(claimantId)) return { success: false, reason: 'token-not-for-you' }

    token.claim(claimantId)

    // Record the grant
    if (!this.#grants.has(claimantId)) this.#grants.set(claimantId, new Set())
    this.#grants.get(claimantId).add(token.frequencyId)

    return { success: true, frequencyId: token.frequencyId }
  }

  /** Has this peer been granted access via invite? */
  hasGrant(peerId, frequencyId) {
    return this.#grants.get(peerId)?.has(frequencyId) ?? false
  }

  // ── Visibility resolution ────────────────────────────────────────────────

  /**
   * Can observerId perceive targetId?
   *
   * Rules:
   *  PUBLIC  → always visible
   *  PRIVATE → only if they share a verified trust chain in any reality
   *  INVITE  → share a trust chain OR observer has a valid grant
   *
   * @param {string}       observerId
   * @param {string}       targetId
   * @param {SwarmNetwork} swarmNet
   */
  canSee(observerId, targetId, swarmNet) {
    if (observerId === targetId) return true

    const mode = this.getNode(targetId)
    if (mode === VISIBILITY.PUBLIC) return true

    // Shared verified trust chain?
    if (this.#sharesTrustChain(observerId, targetId, swarmNet)) return true

    // PRIVATE — trust chain only
    if (mode === VISIBILITY.PRIVATE) return false

    // INVITE — also allow if observer has a grant to any shared reality
    for (const [freqId] of (swarmNet.getNode(targetId)?.realities ?? [])) {
      if (this.hasGrant(observerId, freqId)) return true
    }

    return false
  }

  /**
   * What the observer sees about a node.
   * Returns 'full' | 'blurred' | 'hidden'.
   *   full    — complete info (id, position, state)
   *   blurred — knows they exist but not who they are (invite-only, unseeable)
   *   hidden  — cannot detect their presence at all (private, unseeable)
   */
  perceptionOf(observerId, targetId, swarmNet) {
    if (this.canSee(observerId, targetId, swarmNet)) return 'full'

    const mode = this.getNode(targetId)
    if (mode === VISIBILITY.INVITE)  return 'blurred'
    return 'hidden'
  }

  // ── Network map data ─────────────────────────────────────────────────────

  /**
   * Build the full network map visible to `observerId`.
   * Returns nodes and edges the observer is allowed to see.
   */
  buildMapFor(observerId, swarmNet) {
    const nodes = []
    const edges = []
    const seen  = new Set()

    for (const node of swarmNet.nodes.values()) {
      const perception = this.perceptionOf(observerId, node.id, swarmNet)
      if (perception === 'hidden') continue

      seen.add(node.id)
      nodes.push({
        id:          node.id,
        perception,                         // 'full' | 'blurred'
        visibility:  this.getNode(node.id),
        realities:   [...node.realities.keys()],
        isBridge:    node.realities.size > 1,
        isMe:        node.id === observerId,
        position:    node.position,
      })
    }

    // Edges — only between visible nodes
    for (const { reality, trust } of swarmNet.realities.values()) {
      for (const member of trust.getAll()) {
        if (!member.vouchedBy) continue
        if (seen.has(member.id) && seen.has(member.vouchedBy)) {
          edges.push({ from: member.vouchedBy, to: member.id, type: 'trust' })
        }
      }
    }

    for (const node of swarmNet.nodes.values()) {
      for (const neighborId of node.neighbors) {
        if (seen.has(node.id) && seen.has(neighborId) && node.id < neighborId) {
          edges.push({ from: node.id, to: neighborId, type: 'neighbor' })
        }
      }
    }

    return { nodes, edges }
  }

  // ── Private ──────────────────────────────────────────────────────────────

  #sharesTrustChain(idA, idB, swarmNet) {
    const nodeA = swarmNet.getNode(idA)
    const nodeB = swarmNet.getNode(idB)
    if (!nodeA || !nodeB) return false

    for (const [freqId] of nodeA.realities) {
      if (!nodeB.isIn(freqId)) continue
      const entry = swarmNet.realities.get(freqId)
      if (entry?.trust.isVerified(idA) && entry?.trust.isVerified(idB)) return true
    }
    return false
  }
}
