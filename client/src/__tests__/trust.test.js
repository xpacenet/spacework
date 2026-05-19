import { describe, it, expect, beforeEach } from 'vitest'
import { TrustNetwork } from '../network/trust.js'

// ── Fixture helpers ────────────────────────────────────────────────────────

function buildNetwork() {
  const net = new TrustNetwork('root', 'root-pubkey')
  return net
}

/** Build a linear chain: root → a → b → c */
function buildChain() {
  const net = buildNetwork()
  net.vouch('root', 'alice', 'alice-key')
  net.vouch('alice', 'bob',  'bob-key')
  net.vouch('bob',   'carol','carol-key')
  return net
}

// ── Constructor ────────────────────────────────────────────────────────────

describe('TrustNetwork — constructor', () => {
  it('root is verified', () => {
    const net = buildNetwork()
    expect(net.isVerified('root')).toBe(true)
  })

  it('root is active (votes for itself)', () => {
    const net = buildNetwork()
    expect(net.isActive('root')).toBe(true)
  })

  it('root has chain depth 0', () => {
    const net = buildNetwork()
    expect(net.depth('root')).toBe(0)
  })

  it('unknown peer is not verified', () => {
    const net = buildNetwork()
    expect(net.isVerified('stranger')).toBe(false)
  })

  it('network starts with 1 member', () => {
    expect(buildNetwork().size()).toBe(1)
  })
})

// ── Vouch ─────────────────────────────────────────────────────────────────

describe('TrustNetwork — vouch', () => {
  it('root can vouch for a new member', () => {
    const net = buildNetwork()
    net.vouch('root', 'alice')
    expect(net.isVerified('alice')).toBe(true)
  })

  it('verified member can vouch for another', () => {
    const net = buildChain()
    expect(net.isVerified('alice')).toBe(true)
    expect(net.isVerified('bob')).toBe(true)
    expect(net.isVerified('carol')).toBe(true)
  })

  it('chain depth increases with each hop', () => {
    const net = buildChain()
    expect(net.depth('alice')).toBe(1)
    expect(net.depth('bob')).toBe(2)
    expect(net.depth('carol')).toBe(3)
  })

  it('throws when voucher is not verified', () => {
    const net = buildNetwork()
    expect(() => net.vouch('stranger', 'alice')).toThrow()
  })

  it('throws when new member already exists', () => {
    const net = buildNetwork()
    net.vouch('root', 'alice')
    expect(() => net.vouch('root', 'alice')).toThrow()
  })

  it('newly vouched member has voucher as first vote', () => {
    const net = buildNetwork()
    net.vouch('root', 'alice')
    const member = net.getMember('alice')
    expect(member.votes.has('root')).toBe(true)
  })

  it('network size grows with each vouch', () => {
    const net = buildNetwork()
    net.vouch('root', 'alice')
    net.vouch('root', 'bob')
    expect(net.size()).toBe(3)
  })
})

// ── Chain integrity ────────────────────────────────────────────────────────

describe('TrustNetwork — chain hash integrity', () => {
  it('validates a clean network', () => {
    expect(buildChain().validateIntegrity()).toBe(true)
  })

  it('detects tampered chain hash', () => {
    const net  = buildChain()
    const m    = net.getMember('bob')
    m.chainHash = 'tampered!'
    expect(net.validateIntegrity()).toBe(false)
  })

  it('two independent vouches produce different chain hashes', () => {
    const net = buildNetwork()
    net.vouch('root', 'alice')
    net.vouch('root', 'bob')
    expect(net.getMember('alice').chainHash).not.toBe(net.getMember('bob').chainHash)
  })
})

// ── Voting ────────────────────────────────────────────────────────────────

describe('TrustNetwork — voting', () => {
  it('newly vouched member is NOT active in a larger network (only 1 vote)', () => {
    const net = buildNetwork()
    net.vouch('root', 'alice')
    net.vouch('root', 'bob')
    net.vouch('root', 'carol')
    // Network: root(verified) + alice + bob + carol = 4 verified
    // Alice has 1 vote (root). Majority = floor(4/2)+1 = 3. Not active.
    expect(net.isActive('alice')).toBe(false)
  })

  it('member becomes active when they accumulate majority votes', () => {
    const net = buildNetwork()
    net.vouch('root', 'alice')
    net.vouch('root', 'bob')
    net.vouch('root', 'carol')
    // 4 verified members — need 3 votes
    net.vote('alice', 'bob')
    net.vote('carol', 'bob')
    // bob now has 3 votes (root + alice + carol)
    expect(net.isActive('bob')).toBe(true)
  })

  it('revoking a vote can drop member below threshold', () => {
    const net = buildNetwork()
    net.vouch('root', 'alice')
    net.vouch('root', 'bob')
    net.vouch('root', 'carol')
    net.vote('alice', 'bob')
    net.vote('carol', 'bob')
    expect(net.isActive('bob')).toBe(true)

    net.revokeVote('alice', 'bob')
    // Now bob has 2 votes (root + carol) — needs 3
    expect(net.isActive('bob')).toBe(false)
  })

  it('unverified peer vote does not count toward majority', () => {
    const net = buildNetwork()
    net.vouch('root', 'alice')
    net.vouch('root', 'bob')
    // 3 verified: root, alice, bob — majority = 2
    // alice needs 2 votes. She has 1 (root).
    // Add a fake vote from an unverified ID
    net.getMember('alice').votes.add('hacker')
    // Should still be false — hacker is not verified
    expect(net.isActive('alice')).toBe(false)
  })

  it('throws when non-verified peer tries to vote', () => {
    const net = buildNetwork()
    net.vouch('root', 'alice')
    expect(() => net.vote('stranger', 'alice')).toThrow()
  })

  it('in a 2-member network alice is active with root vote (1/2+1=2 — edge case)', () => {
    // root(1 verified), root votes for alice
    // after vouch: 2 verified → majority = floor(2/2)+1 = 2
    // alice has 1 vote — not yet active
    const net = buildNetwork()
    net.vouch('root', 'alice')
    expect(net.isActive('alice')).toBe(false)
    net.vote('alice', 'alice')   // alice votes for herself
    expect(net.isActive('alice')).toBe(true)
  })
})

// ── Trust score ───────────────────────────────────────────────────────────

describe('TrustNetwork — trust score', () => {
  it('unknown member has score 0', () => {
    expect(buildNetwork().trustScore('stranger')).toBe(0)
  })

  it('root has score 1.0 (100%)', () => {
    expect(buildNetwork().trustScore('root')).toBe(1)
  })

  it('score is between 0 and 1', () => {
    const net = buildChain()
    net.vote('root',  'alice')
    const score = net.trustScore('alice')
    expect(score).toBeGreaterThanOrEqual(0)
    expect(score).toBeLessThanOrEqual(1)
  })

  it('more votes = higher score', () => {
    const net = buildNetwork()
    net.vouch('root', 'alice')
    net.vouch('root', 'bob')
    net.vouch('root', 'carol')
    const scoreBefore = net.trustScore('alice')
    net.vote('bob', 'alice')
    expect(net.trustScore('alice')).toBeGreaterThan(scoreBefore)
  })
})

// ── Remove & cascade ──────────────────────────────────────────────────────

describe('TrustNetwork — remove', () => {
  it('removed member is no longer verified', () => {
    const net = buildChain()
    net.remove('alice')
    expect(net.isVerified('alice')).toBe(false)
  })

  it('removing a member cascades to their descendants', () => {
    const net = buildChain()
    net.remove('alice')   // alice vouched bob, bob vouched carol
    expect(net.isVerified('bob')).toBe(false)
    expect(net.isVerified('carol')).toBe(false)
  })

  it('cascade returns all removed IDs', () => {
    const net    = buildChain()
    const removed = net.remove('alice')
    expect(removed).toContain('alice')
    expect(removed).toContain('bob')
    expect(removed).toContain('carol')
    expect(removed).toHaveLength(3)
  })

  it('unrelated branches are not affected by removal', () => {
    const net = buildNetwork()
    net.vouch('root', 'alice')
    net.vouch('root', 'dave')   // different branch
    net.remove('alice')
    expect(net.isVerified('dave')).toBe(true)
  })

  it('network size decreases after removal', () => {
    const net = buildChain()   // root + alice + bob + carol = 4
    net.remove('alice')        // removes alice + bob + carol
    expect(net.size()).toBe(1)  // only root remains
  })
})

// ── Large network stress ───────────────────────────────────────────────────

describe('TrustNetwork — 100-member stress', () => {
  it('validates integrity for 100 members in a chain', () => {
    const net = buildNetwork()
    let prev  = 'root'
    for (let i = 0; i < 99; i++) {
      net.vouch(prev, `m${i}`)
      prev = `m${i}`
    }
    expect(net.size()).toBe(100)
    expect(net.validateIntegrity()).toBe(true)
  })

  it('validates integrity for 100 direct vouches from root', () => {
    const net = buildNetwork()
    for (let i = 0; i < 99; i++) net.vouch('root', `m${i}`)
    expect(net.validateIntegrity()).toBe(true)
  })

  it('removing one branch member does not corrupt others (flat tree)', () => {
    const net = buildNetwork()
    for (let i = 0; i < 99; i++) net.vouch('root', `m${i}`)
    net.remove('m0')
    expect(net.validateIntegrity()).toBe(true)
    expect(net.size()).toBe(99)   // root + 98 remaining
  })
})
