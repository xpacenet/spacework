import { describe, it, expect, beforeEach } from 'vitest'
import { VisibilityLayer, VISIBILITY, InviteToken } from '../network/visibility.js'
import { SwarmNetwork, SwarmNode }                  from '../network/swarm.js'

// ── Fixture ────────────────────────────────────────────────────────────────

function buildNet() {
  const net   = new SwarmNetwork()
  const vis   = new VisibilityLayer()
  const root  = new SwarmNode('root',  'root-key')
  const alice = new SwarmNode('alice', 'alice-key')
  const bob   = new SwarmNode('bob',   'bob-key')
  const carol = new SwarmNode('carol', 'carol-key')

  const { frequency } = net.createReality(root)
  net.joinReality(alice, frequency.id, 'root')
  net.joinReality(bob,   frequency.id, 'alice')

  // carol is NOT in the trust chain — she's a stranger
  net.addNode(carol)

  return { net, vis, root, alice, bob, carol, frequency }
}

// ═══════════════════════════════════════════════════════════════════════════
// INVITE TOKEN
// ═══════════════════════════════════════════════════════════════════════════

describe('InviteToken', () => {
  it('is valid for the right claimant', () => {
    const t = new InviteToken('root', 'freq-1', { targetId: 'alice' })
    expect(t.isValidFor('alice')).toBe(true)
  })

  it('is not valid for wrong claimant when targeted', () => {
    const t = new InviteToken('root', 'freq-1', { targetId: 'alice' })
    expect(t.isValidFor('bob')).toBe(false)
  })

  it('open invite (no targetId) is valid for anyone', () => {
    const t = new InviteToken('root', 'freq-1')
    expect(t.isValidFor('alice')).toBe(true)
    expect(t.isValidFor('stranger')).toBe(true)
  })

  it('claim marks the token as used', () => {
    const t = new InviteToken('root', 'freq-1')
    t.claim('alice')
    expect(t.claimedBy).toContain('alice')
    expect(t.uses).toBe(1)
  })

  it('single-use token rejects second claim', () => {
    const t = new InviteToken('root', 'freq-1', { maxUses: 1 })
    t.claim('alice')
    expect(t.isValidFor('bob')).toBe(false)
    expect(t.exhausted).toBe(true)
  })

  it('multi-use token allows multiple claims', () => {
    const t = new InviteToken('root', 'freq-1', { maxUses: 5 })
    t.claim('alice')
    t.claim('bob')
    t.claim('carol')
    expect(t.uses).toBe(3)
    expect(t.active).toBe(true)
  })

  it('expired token is invalid', () => {
    const t = new InviteToken('root', 'freq-1', { ttlMs: -1 })
    expect(t.expired).toBe(true)
    expect(t.isValidFor('alice')).toBe(false)
  })

  it('claim returns false on expired token', () => {
    const t = new InviteToken('root', 'freq-1', { ttlMs: -1 })
    expect(t.claim('alice')).toBe(false)
  })

  it('token ID is unique per instance', () => {
    const ids = new Set(Array.from({ length: 50 }, () => new InviteToken('r', 'f').id))
    expect(ids.size).toBe(50)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// VISIBILITY LAYER — getNode / setNode
// ═══════════════════════════════════════════════════════════════════════════

describe('VisibilityLayer — node visibility defaults', () => {
  it('unknown node defaults to PUBLIC', () => {
    const vis = new VisibilityLayer()
    expect(vis.getNode('anyone')).toBe(VISIBILITY.PUBLIC)
  })

  it('can set and retrieve visibility mode', () => {
    const vis = new VisibilityLayer()
    vis.setNode('alice', VISIBILITY.PRIVATE)
    expect(vis.getNode('alice')).toBe(VISIBILITY.PRIVATE)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// canSee — PUBLIC
// ═══════════════════════════════════════════════════════════════════════════

describe('VisibilityLayer.canSee — PUBLIC nodes', () => {
  it('public node visible to anyone', () => {
    const { net, vis, alice, carol } = buildNet()
    vis.setNode('alice', VISIBILITY.PUBLIC)
    expect(vis.canSee('carol', 'alice', net)).toBe(true)
  })

  it('anyone can always see themselves', () => {
    const { net, vis } = buildNet()
    vis.setNode('alice', VISIBILITY.PRIVATE)
    expect(vis.canSee('alice', 'alice', net)).toBe(true)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// canSee — PRIVATE
// ═══════════════════════════════════════════════════════════════════════════

describe('VisibilityLayer.canSee — PRIVATE nodes', () => {
  it('private node NOT visible to stranger', () => {
    const { net, vis } = buildNet()
    vis.setNode('alice', VISIBILITY.PRIVATE)
    expect(vis.canSee('carol', 'alice', net)).toBe(false)
  })

  it('private node IS visible to verified peer in same reality', () => {
    const { net, vis } = buildNet()
    vis.setNode('bob', VISIBILITY.PRIVATE)
    // alice vouched bob — they share the same verified reality
    expect(vis.canSee('alice', 'bob', net)).toBe(true)
  })

  it('private node IS visible to root (same trust chain)', () => {
    const { net, vis } = buildNet()
    vis.setNode('bob', VISIBILITY.PRIVATE)
    expect(vis.canSee('root', 'bob', net)).toBe(true)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// canSee — INVITE
// ═══════════════════════════════════════════════════════════════════════════

describe('VisibilityLayer.canSee — INVITE nodes', () => {
  it('invite-only node NOT visible to unconnected stranger without token', () => {
    const { net, vis } = buildNet()
    vis.setNode('alice', VISIBILITY.INVITE)
    expect(vis.canSee('carol', 'alice', net)).toBe(false)
  })

  it('invite-only node IS visible to stranger after claiming valid invite', () => {
    const { net, vis, frequency } = buildNet()
    vis.setNode('alice', VISIBILITY.INVITE)

    const token = vis.issueInvite('root', frequency.id)
    vis.claimInvite(token.id, 'carol')

    // carol now has a grant — she can see alice (invite-only in that reality)
    expect(vis.canSee('carol', 'alice', net)).toBe(true)
  })

  it('invite-only node IS visible to verified peer (no invite needed)', () => {
    const { net, vis } = buildNet()
    vis.setNode('bob', VISIBILITY.INVITE)
    // alice is verified in the same reality as bob
    expect(vis.canSee('alice', 'bob', net)).toBe(true)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// claimInvite
// ═══════════════════════════════════════════════════════════════════════════

describe('VisibilityLayer.claimInvite', () => {
  it('returns success + frequencyId on valid claim', () => {
    const { vis, frequency } = buildNet()
    const token = vis.issueInvite('root', frequency.id)
    const result = vis.claimInvite(token.id, 'carol')
    expect(result.success).toBe(true)
    expect(result.frequencyId).toBe(frequency.id)
  })

  it('returns token-not-found for unknown token', () => {
    const { vis } = buildNet()
    expect(vis.claimInvite('BAD-TOKEN', 'carol').reason).toBe('token-not-found')
  })

  it('returns token-exhausted when already used', () => {
    const { vis, frequency } = buildNet()
    const token = vis.issueInvite('root', frequency.id, { maxUses: 1 })
    vis.claimInvite(token.id, 'alice')
    const r = vis.claimInvite(token.id, 'bob')
    expect(r.success).toBe(false)
    expect(r.reason).toBe('token-exhausted')
  })

  it('returns token-expired for expired token', () => {
    const { vis, frequency } = buildNet()
    const token = vis.issueInvite('root', frequency.id, { ttlMs: -1 })
    const r = vis.claimInvite(token.id, 'carol')
    expect(r.success).toBe(false)
    expect(r.reason).toBe('token-expired')
  })

  it('returns token-not-for-you when targeted at someone else', () => {
    const { vis, frequency } = buildNet()
    const token = vis.issueInvite('root', frequency.id, { targetId: 'alice' })
    const r = vis.claimInvite(token.id, 'carol')
    expect(r.success).toBe(false)
    expect(r.reason).toBe('token-not-for-you')
  })

  it('hasGrant returns true after successful claim', () => {
    const { vis, frequency } = buildNet()
    const token = vis.issueInvite('root', frequency.id)
    vis.claimInvite(token.id, 'carol')
    expect(vis.hasGrant('carol', frequency.id)).toBe(true)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// perceptionOf
// ═══════════════════════════════════════════════════════════════════════════

describe('VisibilityLayer.perceptionOf', () => {
  it('public node → full perception', () => {
    const { net, vis } = buildNet()
    vis.setNode('alice', VISIBILITY.PUBLIC)
    expect(vis.perceptionOf('carol', 'alice', net)).toBe('full')
  })

  it('private node (unconnected) → hidden', () => {
    const { net, vis } = buildNet()
    vis.setNode('alice', VISIBILITY.PRIVATE)
    expect(vis.perceptionOf('carol', 'alice', net)).toBe('hidden')
  })

  it('invite-only node (no grant) → blurred', () => {
    const { net, vis } = buildNet()
    vis.setNode('alice', VISIBILITY.INVITE)
    expect(vis.perceptionOf('carol', 'alice', net)).toBe('blurred')
  })

  it('invite-only node (with grant) → full', () => {
    const { net, vis, frequency } = buildNet()
    vis.setNode('alice', VISIBILITY.INVITE)
    const token = vis.issueInvite('root', frequency.id)
    vis.claimInvite(token.id, 'carol')
    expect(vis.perceptionOf('carol', 'alice', net)).toBe('full')
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// buildMapFor
// ═══════════════════════════════════════════════════════════════════════════

describe('VisibilityLayer.buildMapFor', () => {
  it('public nodes appear in the map for anyone', () => {
    const { net, vis } = buildNet()
    // All nodes default to public
    const { nodes } = vis.buildMapFor('carol', net)
    // carol can see root, alice, bob (all public), and herself (she's addNode'd)
    const ids = nodes.map(n => n.id)
    expect(ids).toContain('root')
    expect(ids).toContain('alice')
    expect(ids).toContain('bob')
  })

  it('private nodes are excluded from the map for strangers', () => {
    const { net, vis } = buildNet()
    vis.setNode('alice', VISIBILITY.PRIVATE)
    const { nodes } = vis.buildMapFor('carol', net)
    expect(nodes.map(n => n.id)).not.toContain('alice')
  })

  it('invite-only nodes appear as blurred', () => {
    const { net, vis } = buildNet()
    vis.setNode('alice', VISIBILITY.INVITE)
    const { nodes } = vis.buildMapFor('carol', net)
    const aliceEntry = nodes.find(n => n.id === 'alice')
    expect(aliceEntry).toBeTruthy()
    expect(aliceEntry.perception).toBe('blurred')
  })

  it('trust edges appear between visible nodes', () => {
    const { net, vis } = buildNet()
    const { edges } = vis.buildMapFor('root', net)
    const trustEdges = edges.filter(e => e.type === 'trust')
    expect(trustEdges.length).toBeGreaterThan(0)
  })

  it('trust edges to hidden nodes are excluded', () => {
    const { net, vis } = buildNet()
    vis.setNode('bob', VISIBILITY.PRIVATE)
    const { edges } = vis.buildMapFor('carol', net)
    const bobEdges = edges.filter(e => e.to === 'bob' || e.from === 'bob')
    expect(bobEdges).toHaveLength(0)
  })

  it('observer always sees themselves in the map', () => {
    const { net, vis } = buildNet()
    vis.setNode('carol', VISIBILITY.PRIVATE)
    const { nodes } = vis.buildMapFor('carol', net)
    expect(nodes.find(n => n.id === 'carol')).toBeTruthy()
  })

  it('my node has isMe=true', () => {
    const { net, vis } = buildNet()
    const { nodes } = vis.buildMapFor('alice', net)
    expect(nodes.find(n => n.id === 'alice').isMe).toBe(true)
    expect(nodes.find(n => n.id === 'root').isMe).toBe(false)
  })
})
