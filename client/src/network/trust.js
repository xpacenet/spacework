/**
 * TrustNetwork — chain-of-trust membership protocol
 *
 * Rules:
 *  1. A root peer self-bootstraps the network (depth 0).
 *  2. Any verified member can vouch for a new peer, creating a chain
 *     back to root. The chain hash makes the lineage tamper-evident.
 *  3. A member is "active" only when they hold a MAJORITY of votes
 *     (floor(verifiedCount / 2) + 1) from currently verified members.
 *     Drop below the threshold → ejected automatically.
 *  4. Removing a member cascades: everyone they vouched for loses
 *     their chain-link and is also removed.
 */

// ── Deterministic chain hash (djb2 variant, no imports needed) ────────────
function chainHash(...parts) {
  const s = parts.join('|')
  let h = 5381
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(33, h) ^ s.charCodeAt(i)) >>> 0
  }
  return h.toString(36)
}

export class TrustNetwork {
  /** @type {Map<string, MemberRecord>} */
  #members = new Map()
  #rootId

  /**
   * @param {string} rootId        peer id of the founding member
   * @param {string} rootPublicKey exported public key (base64 / JWK string)
   */
  constructor(rootId, rootPublicKey = '') {
    this.#rootId = rootId
    this.#members.set(rootId, {
      id:         rootId,
      publicKey:  rootPublicKey,
      vouchedBy:  null,          // root has no voucher
      chainDepth: 0,
      chainHash:  chainHash(rootId),
      votes:      new Set([rootId]),  // root votes for itself
      joinedAt:   Date.now(),
    })
  }

  get rootId() { return this.#rootId }

  // ── Membership ────────────────────────────────────────────────────────────

  /**
   * A verified member vouches for a new peer.
   * @throws if the voucher is not verified
   */
  vouch(voucherId, newId, newPublicKey = '') {
    if (!this.isVerified(voucherId)) {
      throw new Error(`Voucher "${voucherId}" is not a verified member`)
    }
    if (this.#members.has(newId)) {
      throw new Error(`"${newId}" is already in the network`)
    }

    const voucher = this.#members.get(voucherId)
    this.#members.set(newId, {
      id:         newId,
      publicKey:  newPublicKey,
      vouchedBy:  voucherId,
      chainDepth: voucher.chainDepth + 1,
      chainHash:  chainHash(newId, voucher.chainHash),
      votes:      new Set([voucherId]),  // voucher auto-votes
      joinedAt:   Date.now(),
    })
    return this.getMember(newId)
  }

  /** Vote to keep a member in the network */
  vote(voterId, targetId) {
    if (!this.isVerified(voterId))   throw new Error(`Voter "${voterId}" is not verified`)
    if (!this.#members.has(targetId)) throw new Error(`"${targetId}" not found`)
    this.#members.get(targetId).votes.add(voterId)
  }

  /** Revoke a vote (e.g. when you no longer trust someone) */
  revokeVote(voterId, targetId) {
    this.#members.get(targetId)?.votes.delete(voterId)
  }

  /**
   * Remove a member and everyone they vouched for (cascade).
   * Returns the list of all removed IDs.
   */
  remove(memberId) {
    const removed = []
    this.#remove(memberId, removed)
    return removed
  }

  #remove(memberId, acc) {
    if (!this.#members.has(memberId)) return
    acc.push(memberId)
    this.#members.delete(memberId)
    // Cascade — remove everyone whose chain runs through this member
    for (const [id, m] of this.#members) {
      if (m.vouchedBy === memberId) this.#remove(id, acc)
    }
  }

  // ── Verification & activity ───────────────────────────────────────────────

  /**
   * A member is "verified" if they have an unbroken chain back to root.
   * O(depth) — depth is typically small (< 10 for most networks).
   */
  isVerified(memberId) {
    if (memberId === this.#rootId) return true
    const visited = new Set()
    let current   = memberId

    while (current !== this.#rootId) {
      if (visited.has(current)) return false    // cycle — corrupted state
      visited.add(current)
      const m = this.#members.get(current)
      if (!m?.vouchedBy) return false           // broken chain
      current = m.vouchedBy
    }
    return true
  }

  /**
   * A member is "active" only when they hold a strict majority of votes
   * from *currently verified* members (n/2 + 1).
   */
  isActive(memberId) {
    if (memberId === this.#rootId) return true
    if (!this.isVerified(memberId)) return false

    const member       = this.#members.get(memberId)
    const verifiedIds  = this.#verifiedIds()
    const needed       = Math.floor(verifiedIds.size / 2) + 1
    const validVotes   = [...member.votes].filter(v => verifiedIds.has(v))

    return validVotes.length >= needed
  }

  /** Trust score 0–1: fraction of verified votes the member holds */
  trustScore(memberId) {
    if (!this.isVerified(memberId)) return 0
    const member      = this.#members.get(memberId)
    const verifiedIds = this.#verifiedIds()
    if (verifiedIds.size === 0) return 0
    const validVotes  = [...member.votes].filter(v => verifiedIds.has(v))
    return validVotes.length / verifiedIds.size
  }

  /** Chain depth from root (root = 0) */
  depth(memberId) {
    return this.#members.get(memberId)?.chainDepth ?? -1
  }

  getMember(id) { return this.#members.get(id) ?? null }
  getAll()      { return [...this.#members.values()] }
  size()        { return this.#members.size }

  /**
   * Validate the entire network's chain-hash integrity.
   * Each member's chainHash must equal hash(id | voucher.chainHash).
   */
  validateIntegrity() {
    for (const [id, m] of this.#members) {
      if (id === this.#rootId) {
        if (m.chainHash !== chainHash(id)) return false
        continue
      }
      const voucher = this.#members.get(m.vouchedBy)
      if (!voucher) return false
      const expected = chainHash(id, voucher.chainHash)
      if (m.chainHash !== expected) return false
    }
    return true
  }

  // ── Private helpers ────────────────────────────────────────────────────────
  #verifiedIds() {
    const out = new Set()
    for (const id of this.#members.keys()) {
      if (this.isVerified(id)) out.add(id)
    }
    return out
  }
}
