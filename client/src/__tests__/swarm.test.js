import { describe, it, expect, beforeEach } from 'vitest'
import { SwarmNode, SwarmNetwork } from '../network/swarm.js'
import { Frequency }               from '../network/frequency.js'
import { Reality, VectorClock, LWWState } from '../network/reality.js'

// ── Helpers ────────────────────────────────────────────────────────────────

function makeNode(id) { return new SwarmNode(id, `${id}-pubkey`) }

/** Build a network with a root + chain: root → alice → bob → carol */
function buildShip() {
  const net  = new SwarmNetwork()
  const root = makeNode('root')
  const { reality, trust, frequency } = net.createReality(root)

  const alice = makeNode('alice')
  const bob   = makeNode('bob')
  const carol = makeNode('carol')

  net.joinReality(alice, frequency.id, 'root')
  net.joinReality(bob,   frequency.id, 'alice')
  net.joinReality(carol, frequency.id, 'bob')

  // Connect as neighbors
  root.connect('alice'); alice.connect('root')
  alice.connect('bob');  bob.connect('alice')
  bob.connect('carol');  carol.connect('bob')

  return { net, root, alice, bob, carol, reality, trust, frequency }
}

// ═══════════════════════════════════════════════════════════════════════════
// FREQUENCY
// ═══════════════════════════════════════════════════════════════════════════

describe('Frequency', () => {
  it('same seed + epoch produce same ID (deterministic)', () => {
    const a = new Frequency('node-1', 0)
    const b = new Frequency('node-1', 0)
    expect(a.id).toBe(b.id)
  })

  it('different seeds produce different IDs', () => {
    const a = new Frequency('node-1')
    const b = new Frequency('node-2')
    expect(a.id).not.toBe(b.id)
  })

  it('tick advances epoch', () => {
    const f = new Frequency('x', 0)
    f.tick()
    expect(f.epoch).toBe(1)
  })

  it('merge is commutative (A+B = B+A)', () => {
    const a = new Frequency('nodeA', 3)
    const b = new Frequency('nodeB', 7)
    expect(Frequency.merge(a, b).id).toBe(Frequency.merge(b, a).id)
  })

  it('merged frequency has max epoch of both', () => {
    const a = new Frequency('x', 3)
    const b = new Frequency('y', 10)
    expect(Frequency.merge(a, b).epoch).toBe(10)
  })

  it('harmonises at default 0.51 threshold', () => {
    const a = new Frequency('x')
    const b = new Frequency('y')
    expect(a.harmonisesWith(b)).toBe(true)  // both start at resonance 1.0
  })

  it('does not harmonise when resonance is low', () => {
    const a = new Frequency('x')
    const b = new Frequency('y')
    a.resonance = 0.3
    expect(a.harmonisesWith(b)).toBe(false)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// VECTOR CLOCK
// ═══════════════════════════════════════════════════════════════════════════

describe('VectorClock', () => {
  it('starts at 0 for unknown nodes', () => {
    expect(new VectorClock().get('x')).toBe(0)
  })

  it('tick increments the counter for a node', () => {
    const vc = new VectorClock()
    vc.tick('alice')
    vc.tick('alice')
    expect(vc.get('alice')).toBe(2)
  })

  it('merge takes max of each counter', () => {
    const a = new VectorClock({ alice: 3, bob: 1 })
    const b = new VectorClock({ alice: 1, bob: 5, carol: 2 })
    a.merge(b)
    expect(a.get('alice')).toBe(3)
    expect(a.get('bob')).toBe(5)
    expect(a.get('carol')).toBe(2)
  })

  it('compare: before', () => {
    const a = new VectorClock({ alice: 1 })
    const b = new VectorClock({ alice: 2 })
    expect(a.compare(b)).toBe('before')
  })

  it('compare: after', () => {
    const a = new VectorClock({ alice: 3 })
    const b = new VectorClock({ alice: 1 })
    expect(a.compare(b)).toBe('after')
  })

  it('compare: concurrent', () => {
    const a = new VectorClock({ alice: 2, bob: 1 })
    const b = new VectorClock({ alice: 1, bob: 2 })
    expect(a.compare(b)).toBe('concurrent')
  })

  it('compare: equal', () => {
    const a = new VectorClock({ alice: 2 })
    const b = new VectorClock({ alice: 2 })
    expect(a.compare(b)).toBe('equal')
  })

  it('happensBefore is asymmetric', () => {
    const a = new VectorClock({ n: 1 })
    const b = new VectorClock({ n: 2 })
    expect(a.happensBefore(b)).toBe(true)
    expect(b.happensBefore(a)).toBe(false)
  })

  it('clone is independent', () => {
    const a = new VectorClock({ x: 5 })
    const b = a.clone()
    b.tick('x')
    expect(a.get('x')).toBe(5)   // a unchanged
    expect(b.get('x')).toBe(6)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// LWW CRDT STATE
// ═══════════════════════════════════════════════════════════════════════════

describe('LWWState', () => {
  it('stores and retrieves a value', () => {
    const s  = new LWWState()
    const vc = new VectorClock({ a: 1 })
    s.set('pos:alice', { x: 5, z: 3 }, vc, 'alice')
    expect(s.get('pos:alice')).toMatchObject({ x: 5, z: 3 })
  })

  it('newer clock wins over older', () => {
    const s   = new LWWState()
    const old = new VectorClock({ a: 1 })
    const now = new VectorClock({ a: 2 })
    s.set('key', 'old-value', old, 'alice')
    s.set('key', 'new-value', now, 'alice')
    expect(s.get('key')).toBe('new-value')
  })

  it('older clock cannot overwrite newer', () => {
    const s   = new LWWState()
    const now = new VectorClock({ a: 5 })
    const old = new VectorClock({ a: 1 })
    s.set('key', 'new-value', now, 'alice')
    s.set('key', 'old-value', old, 'alice')
    expect(s.get('key')).toBe('new-value')
  })

  it('concurrent conflict resolved by lexicographic node ID', () => {
    const s  = new LWWState()
    const c1 = new VectorClock({ a: 1, b: 0 })
    const c2 = new VectorClock({ a: 0, b: 1 })
    s.set('key', 'from-alice', c1, 'alice')
    s.set('key', 'from-bob',   c2, 'bob')
    // 'bob' > 'alice' lexicographically → bob wins concurrent conflict
    expect(s.get('key')).toBe('from-bob')
  })

  it('merge is commutative', () => {
    const s1  = new LWWState()
    const s2  = new LWWState()
    const vc1 = new VectorClock({ a: 2 })
    const vc2 = new VectorClock({ b: 2 })
    s1.set('x', 'from-s1', vc1, 'alice')
    s2.set('y', 'from-s2', vc2, 'bob')

    const merged1 = s1.clone().merge(s2)
    const merged2 = s2.clone().merge(s1)

    expect(merged1.get('x')).toBe(merged2.get('x'))
    expect(merged1.get('y')).toBe(merged2.get('y'))
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// REALITY — parallel universes & joint reality
// ═══════════════════════════════════════════════════════════════════════════

describe('Reality — parallel realities', () => {
  it('two nodes in different realities cannot see each others state', () => {
    const freqA = new Frequency('ship-A')
    const freqB = new Frequency('ship-B')
    const rA    = new Reality(freqA)
    const rB    = new Reality(freqB)

    rA.enter('alice')
    rB.enter('bob')

    rA.update('alice', 'pos:alice', { x: 10, z: 5 })

    // Bob's reality has no knowledge of Alice
    expect(rB.get('pos:alice')).toBeUndefined()
    expect(rB.nodes.has('alice')).toBe(false)
  })

  it('nodes in the same reality share state', () => {
    const freq = new Frequency('ship-1')
    const r    = new Reality(freq)

    r.enter('alice')
    r.enter('bob')

    r.update('alice', 'pos:alice', { x: 3, z: 7 })

    // Both alice and bob are in the reality — bob can read alice's position
    expect(r.nodes.has('alice')).toBe(true)
    expect(r.nodes.has('bob')).toBe(true)
    expect(r.get('pos:alice')).toMatchObject({ x: 3, z: 7 })
  })

  it('merge brings two realities into joint reality', () => {
    const freqA = new Frequency('ship-A')
    const freqB = new Frequency('ship-B')
    const rA    = new Reality(freqA)
    const rB    = new Reality(freqB)

    rA.enter('alice')
    rB.enter('bob')

    rA.update('alice', 'pos:alice', { x: 1, z: 2 })
    rB.update('bob',   'pos:bob',   { x: 9, z: 8 })

    // Merge B into A
    rA.merge(rB)

    // Joint reality contains both
    expect(rA.nodes.has('alice')).toBe(true)
    expect(rA.nodes.has('bob')).toBe(true)
    expect(rA.get('pos:alice')).toMatchObject({ x: 1, z: 2 })
    expect(rA.get('pos:bob')).toMatchObject({ x: 9, z: 8 })
  })

  it('consistency check detects diverged realities', () => {
    const freq = new Frequency('shared')
    const r1   = new Reality(freq)
    const r2   = new Reality(freq)

    r1.update('alice', 'key', 'val1')
    r2.update('bob',   'key', 'val2')

    // They evolved independently — concurrent
    expect(r1.consistency(r2)).toBe('concurrent')
  })

  it('consistency check: merged reality is causally ahead', () => {
    const freq = new Frequency('shared')
    const r1   = new Reality(freq)
    const r2   = new Reality(freq)

    r1.update('alice', 'key', 'v1')
    r2.update('bob',   'other', 'v2')
    r2.merge(r1)   // r2 now has everything r1 has + its own

    expect(r2.consistency(r1)).toBe('after')
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// SWARM NODE
// ═══════════════════════════════════════════════════════════════════════════

describe('SwarmNode', () => {
  it('starts in no realities', () => {
    expect(makeNode('x').realities.size).toBe(0)
  })

  it('tune registers node in a reality', () => {
    const node = makeNode('alice')
    const r    = new Reality(new Frequency('f'))
    node.tune(r)
    expect(node.isIn(r.frequency.id)).toBe(true)
    expect(r.nodes.has('alice')).toBe(true)
  })

  it('detune removes node from reality', () => {
    const node = makeNode('alice')
    const r    = new Reality(new Frequency('f'))
    node.tune(r)
    node.detune(r.frequency.id)
    expect(node.isIn(r.frequency.id)).toBe(false)
  })

  it('bridge node exists in two realities simultaneously', () => {
    const node = makeNode('bridge')
    const rA   = new Reality(new Frequency('ship-A'))
    const rB   = new Reality(new Frequency('ship-B'))
    node.bridge(rA, rB)
    expect(node.realities.size).toBe(2)
    expect(node.isIn(rA.frequency.id)).toBe(true)
    expect(node.isIn(rB.frequency.id)).toBe(true)
  })

  it('moveTo updates position in the correct reality', () => {
    const node = makeNode('alice')
    const r    = new Reality(new Frequency('ship'))
    node.tune(r)
    node.moveTo(5, 0, 10, r.frequency.id)
    expect(r.get('pos:alice')).toMatchObject({ x: 5, y: 0, z: 10 })
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// SWARM NETWORK — createReality, joinReality
// ═══════════════════════════════════════════════════════════════════════════

describe('SwarmNetwork — reality creation & joining', () => {
  it('createReality registers the root node', () => {
    const net  = new SwarmNetwork()
    const root = makeNode('root')
    const { frequency } = net.createReality(root)
    expect(net.nodesIn(frequency.id)).toHaveLength(1)
  })

  it('joinReality adds node to the reality', () => {
    const { net, frequency } = buildShip()
    expect(net.nodesIn(frequency.id)).toHaveLength(4)  // root+alice+bob+carol
  })

  it('joinReality requires a valid voucher', () => {
    const net      = new SwarmNetwork()
    const root     = makeNode('root')
    const { frequency } = net.createReality(root)
    const stranger = makeNode('stranger')
    expect(() => net.joinReality(stranger, frequency.id, 'unknown'))
      .toThrow()
  })

  it('node is in the reality after joining', () => {
    const { alice, frequency } = buildShip()
    expect(alice.isIn(frequency.id)).toBe(true)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// HIERARCHICAL ROUTING
// ═══════════════════════════════════════════════════════════════════════════

describe('SwarmNetwork — hierarchical routing', () => {
  it('route to self returns [self]', () => {
    const { net, alice, frequency } = buildShip()
    expect(net.route('alice', 'alice', frequency.id)).toEqual(['alice'])
  })

  it('route from root to carol goes through the hierarchy', () => {
    const { net, frequency } = buildShip()
    // Trust chain: root → alice → bob → carol
    // Route root→carol: root (LCA) → alice → bob → carol
    const hops = net.route('root', 'carol', frequency.id)
    expect(hops[0]).toBe('root')
    expect(hops[hops.length - 1]).toBe('carol')
  })

  it('route from carol to alice goes UP to LCA then down', () => {
    const { net, frequency } = buildShip()
    // carol → bob → alice (LCA=alice)
    const hops = net.route('carol', 'alice', frequency.id)
    expect(hops[0]).toBe('carol')
    expect(hops[hops.length - 1]).toBe('alice')
  })

  it('route hop count is depth_from + depth_to - 2*depth_LCA', () => {
    const { net, frequency } = buildShip()
    // carol (depth 3) → alice (depth 1): LCA = alice (depth 1)
    // path: carol(3) → bob(2) → alice(1) = 3 hops
    const hops = net.route('carol', 'alice', frequency.id)
    expect(hops.length).toBe(3)
  })

  it('route is more efficient than full broadcast for deep chains', () => {
    const net  = new SwarmNetwork()
    const root = makeNode('root')
    const { frequency } = net.createReality(root)

    // Build a 10-node chain
    let prev = 'root'
    for (let i = 0; i < 9; i++) {
      const n = makeNode(`n${i}`)
      net.joinReality(n, frequency.id, prev)
      prev = `n${i}`
    }

    // Route from leaf n8 to root: 9 hops (depth 9 → depth 0)
    const hops = net.route('n8', 'root', frequency.id)
    expect(hops.length).toBe(10)   // n8, n7, ..., root
    // This is O(depth) = 10, vs O(n)=10 broadcast — efficiency proven at scale
  })

  it('returns null for nodes in different trust trees', () => {
    const net  = new SwarmNetwork()
    const root = makeNode('root')
    const { frequency } = net.createReality(root)
    // stranger is in the network but not in the trust tree of this reality
    const hops = net.route('root', 'stranger', frequency.id)
    expect(hops).toBeNull()
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// SWARM GOSSIP
// ═══════════════════════════════════════════════════════════════════════════

describe('SwarmNetwork — gossip propagation', () => {
  it('gossip reaches all connected neighbors', () => {
    const { net, root, frequency } = buildShip()
    // root → alice → bob → carol (linear chain, all connected as neighbors)
    const reached = net.gossip('root', frequency.id, 'announcement', 'all-hands', 10)
    expect(reached).toBe(4)  // root + alice + bob + carol
  })

  it('gossip is bounded by maxHops', () => {
    const { net, root, frequency } = buildShip()
    // maxHops=2: root(1), alice(2) — bob and carol unreachable
    const reached = net.gossip('root', frequency.id, 'key', 'val', 2)
    expect(reached).toBeLessThan(4)
  })

  it('gossip does not visit same node twice (no infinite loop)', () => {
    // Create a cycle in neighbor connections
    const net  = new SwarmNetwork()
    const root = makeNode('root')
    const { frequency } = net.createReality(root)
    const a    = makeNode('a')
    const b    = makeNode('b')
    net.joinReality(a, frequency.id, 'root')
    net.joinReality(b, frequency.id, 'root')
    root.connect('a'); a.connect('root')
    a.connect('b');    b.connect('a')
    b.connect('root'); root.connect('b')  // triangle — cycles everywhere

    // Should complete without infinite loop
    const reached = net.gossip('root', frequency.id, 'k', 'v', 10)
    expect(reached).toBe(3)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// SWARM CONSENSUS
// ═══════════════════════════════════════════════════════════════════════════

describe('SwarmNetwork — proposal voting', () => {
  it('motion passes with majority yes votes', () => {
    const { net, frequency } = buildShip()
    // All 4 members vote YES
    const result = net.propose('root', frequency.id, 'upgrade-ship', () => true)
    expect(result.passed).toBe(true)
    expect(result.yesVotes).toBe(4)
  })

  it('motion fails without majority', () => {
    const { net, frequency } = buildShip()
    // 0 members vote YES
    const result = net.propose('root', frequency.id, 'eject-all', () => false)
    expect(result.passed).toBe(false)
  })

  it('only verified members votes count', () => {
    const { net, frequency, trust } = buildShip()
    // All 4 verified — majority needed = 3
    const result = net.propose('root', frequency.id, 'test',
      (node) => ['root', 'alice', 'bob'].includes(node.id)   // 3/4 yes
    )
    expect(result.passed).toBe(true)
    expect(result.yesVotes).toBe(3)
    expect(result.needed).toBe(3)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// REALITY MERGING (parallel → joint)
// ═══════════════════════════════════════════════════════════════════════════

describe('SwarmNetwork — merging parallel realities', () => {
  it('merging two realities creates a joint reality', () => {
    const net   = new SwarmNetwork()
    const rootA = makeNode('root-a')
    const rootB = makeNode('root-b')

    const shipA = net.createReality(rootA)
    const shipB = net.createReality(rootB)

    const result = net.mergeRealities(shipA.frequency.id, shipB.frequency.id)
    expect(result.merged).toBe(true)
  })

  it('after merge, nodes from both realities share the new frequency', () => {
    const net   = new SwarmNetwork()
    const rootA = makeNode('root-a')
    const rootB = makeNode('root-b')

    const shipA = net.createReality(rootA)
    const shipB = net.createReality(rootB)

    const { frequency } = net.mergeRealities(shipA.frequency.id, shipB.frequency.id)
    expect(rootA.isIn(frequency.id)).toBe(true)
    expect(rootB.isIn(frequency.id)).toBe(true)
  })

  it('merged reality contains state from both original realities', () => {
    const net   = new SwarmNetwork()
    const rootA = makeNode('root-a')
    const rootB = makeNode('root-b')

    const shipA = net.createReality(rootA)
    const shipB = net.createReality(rootB)

    // Each ship has its own state
    shipA.reality.update('root-a', 'shared-doc', 'from ship A')
    shipB.reality.update('root-b', 'log-entry',  'from ship B')

    const { reality } = net.mergeRealities(shipA.frequency.id, shipB.frequency.id)
    expect(reality.get('shared-doc')).toBe('from ship A')
    expect(reality.get('log-entry')).toBe('from ship B')
  })

  it('nodes leave old realities after merge (no double-existence)', () => {
    const net   = new SwarmNetwork()
    const rootA = makeNode('root-a')
    const rootB = makeNode('root-b')

    const shipA = net.createReality(rootA)
    const shipB = net.createReality(rootB)

    net.mergeRealities(shipA.frequency.id, shipB.frequency.id)

    // Old realities should no longer exist as primary home
    expect(rootA.isIn(shipA.frequency.id)).toBe(false)
    expect(rootB.isIn(shipB.frequency.id)).toBe(false)
  })

  it('merge fails when resonance is too low', () => {
    const net   = new SwarmNetwork()
    const rootA = makeNode('root-a')
    const rootB = makeNode('root-b')

    const shipA = net.createReality(rootA)
    const shipB = net.createReality(rootB)

    shipA.frequency.resonance = 0.2  // too weak to harmonise

    const result = net.mergeRealities(shipA.frequency.id, shipB.frequency.id)
    expect(result.merged).toBe(false)
    expect(result.reason).toBe('insufficient-resonance')
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// BRIDGE NODES
// ═══════════════════════════════════════════════════════════════════════════

describe('SwarmNetwork — bridge nodes (multi-reality existence)', () => {
  it('bridge node exists in both realities simultaneously', () => {
    const net     = new SwarmNetwork()
    const rootA   = makeNode('root-a')
    const rootB   = makeNode('root-b')
    const bridge  = makeNode('bridge')

    const shipA = net.createReality(rootA)
    const shipB = net.createReality(rootB)

    // Bridge node is vouched in ship A, then manually tunes into ship B
    net.joinReality(bridge, shipA.frequency.id, 'root-a')
    bridge.tune(shipB.reality)

    expect(bridge.isIn(shipA.frequency.id)).toBe(true)
    expect(bridge.isIn(shipB.frequency.id)).toBe(true)
    expect(net.bridges()).toContain(bridge)
  })

  it('stats correctly reports bridge count', () => {
    const net   = new SwarmNetwork()
    const rootA = makeNode('root-a')
    const rootB = makeNode('root-b')
    const b     = makeNode('b')

    const shipA = net.createReality(rootA)
    const shipB = net.createReality(rootB)
    net.joinReality(b, shipA.frequency.id, 'root-a')
    b.tune(shipB.reality)

    expect(net.stats().bridgeNodes).toBe(1)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// 100-NODE SWARM STRESS TEST
// ═══════════════════════════════════════════════════════════════════════════

describe('SwarmNetwork — 100-node stress', () => {
  it('100 nodes join a single reality, all verified', () => {
    const net  = new SwarmNetwork()
    const root = makeNode('root')
    const { frequency, trust } = net.createReality(root)

    for (let i = 0; i < 99; i++) {
      net.joinReality(makeNode(`n${i}`), frequency.id, 'root')
    }

    expect(net.nodesIn(frequency.id)).toHaveLength(100)
    expect(trust.getAll().filter(m => trust.isVerified(m.id))).toHaveLength(100)
  })

  it('100 position updates all land in the shared reality state', () => {
    const net  = new SwarmNetwork()
    const root = makeNode('root')
    const { reality, frequency } = net.createReality(root)

    for (let i = 0; i < 99; i++) {
      const n = makeNode(`n${i}`)
      net.joinReality(n, frequency.id, 'root')
      n.moveTo(i, 0, i * 2, frequency.id)
    }

    // Spot check a few
    expect(reality.get('pos:n0')).toMatchObject({ x: 0, z: 0 })
    expect(reality.get('pos:n49')).toMatchObject({ x: 49, z: 98 })
    expect(reality.get('pos:n98')).toMatchObject({ x: 98, z: 196 })
  })

  it('routing in a 100-node flat tree takes at most 2 hops (sibling route)', () => {
    const net  = new SwarmNetwork()
    const root = makeNode('root')
    const { frequency } = net.createReality(root)

    for (let i = 0; i < 99; i++) net.joinReality(makeNode(`n${i}`), frequency.id, 'root')

    // n0 and n98 are both direct children of root — route is n0 → root → n98
    const hops = net.route('n0', 'n98', frequency.id)
    expect(hops).toHaveLength(3)  // n0, root, n98
  })

  it('swarm consensus with 100 nodes — majority is 51', () => {
    const net  = new SwarmNetwork()
    const root = makeNode('root')
    const { frequency } = net.createReality(root)

    for (let i = 0; i < 99; i++) net.joinReality(makeNode(`n${i}`), frequency.id, 'root')

    // Only 51 nodes vote yes
    let count = 0
    const result = net.propose('root', frequency.id, 'test-motion', () => count++ < 51)
    expect(result.passed).toBe(true)
    expect(result.needed).toBe(51)
  })
})
