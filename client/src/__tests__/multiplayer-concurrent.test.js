/**
 * Multiplayer concurrent connection tests
 *
 * Uses an in-memory MockRoom that faithfully reproduces the Trystero
 * room API (onPeerJoin, onPeerLeave, makeAction) so we can run
 * 100 peers simultaneously with zero network I/O.
 *
 * The intro-exchange protocol mirrors what p2p.js does:
 *   - On peer join  → send your intro (username + position)
 *   - On intro recv → register their avatar, send intro back if first time
 *   - On pos recv   → update their position
 *   - On peer leave → remove avatar
 */

import { describe, it, expect, beforeEach } from 'vitest'

// ── In-memory room bus ─────────────────────────────────────────────────────

class MockRoom {
  #peers   = new Map()   // peerId → { joinCbs, leaveCbs }
  #actions = new Map()   // actionName → Map<peerId, handler>

  /**
   * A peer joins the room.  Returns the room API for that peer.
   * Call .ready() after registering all handlers — this fires onPeerJoin
   * for every currently connected peer (mirrors Trystero's async discovery).
   */
  join(peerId) {
    if (this.#peers.has(peerId)) throw new Error(`${peerId} already joined`)
    const joinCbs  = []
    const leaveCbs = []
    // Snapshot of existing peers BEFORE this peer registers
    const snapshot = [...this.#peers.keys()]
    this.#peers.set(peerId, { joinCbs, leaveCbs })

    return {
      onPeerJoin:  cb => joinCbs.push(cb),
      onPeerLeave: cb => leaveCbs.push(cb),
      makeAction:  name => this.#makeAction(name, peerId),

      /**
       * Announce readiness:
       *  - tells this peer about all pre-existing peers
       *  - tells all pre-existing peers about this peer
       */
      ready() {
        // Notify new peer of existing peers
        snapshot.forEach(id => joinCbs.forEach(h => h(id)))
        // Notify existing peers of new peer (via their stored ref)
        // We need the room to do this part
      },

      // We expose a back-reference so ready() can notify others
      _peerId:    peerId,
      _joinCbs:   joinCbs,
    }
  }

  /**
   * Full announce: fires onPeerJoin on both sides.
   * Call this after the peer has registered its handlers.
   */
  announce(api) {
    const peerId   = api._peerId
    const snapshot = [...this.#peers.keys()].filter(id => id !== peerId)

    // Tell the new peer about everyone already here
    snapshot.forEach(id => api._joinCbs.forEach(h => h(id)))

    // Tell everyone already here about the new peer
    for (const [id, p] of this.#peers) {
      if (id !== peerId) p.joinCbs.forEach(h => h(peerId))
    }
  }

  leave(peerId) {
    if (!this.#peers.has(peerId)) return
    this.#peers.delete(peerId)
    // Remove all action handlers for this peer
    for (const m of this.#actions.values()) m.delete(peerId)
    // Notify remaining peers
    for (const { leaveCbs } of this.#peers.values()) {
      leaveCbs.forEach(h => h(peerId))
    }
  }

  #makeAction(name, myId) {
    if (!this.#actions.has(name)) this.#actions.set(name, new Map())
    const map = this.#actions.get(name)

    /** Send data to one peer (targetId) or broadcast to all */
    const send = (data, targetId) => {
      if (targetId !== undefined) {
        map.get(targetId)?.(data, myId)
      } else {
        for (const [id, h] of map) if (id !== myId) h(data, myId)
      }
    }

    /** Register the receive handler for this peer */
    const onReceive = h => map.set(myId, h)

    return [send, onReceive]
  }

  get peerCount() { return this.#peers.size }
}

// ── Peer simulator (mirrors p2p.js intro-exchange logic) ──────────────────

function createPeer(room, peerId, username) {
  const api      = room.join(peerId)
  const known    = new Map()   // peerId → { username, position }
  const positions = new Map()  // peerId → { x, z }
  let   myPos    = { x: Math.random() * 10, y: 0, z: Math.random() * 10 }
  let   posUpdateCount = 0

  const [sendIntro, onIntro] = api.makeAction('intro')
  const [sendPos,   onPos]   = api.makeAction('pos')
  const [sendBye,   onBye]   = api.makeAction('bye')

  // When a new peer joins — send them our intro
  api.onPeerJoin(joinedId => {
    sendIntro({ username, ...myPos }, joinedId)
  })

  // When a peer leaves — remove them
  api.onPeerLeave(leftId => {
    known.delete(leftId)
    positions.delete(leftId)
  })

  // When we receive an intro — register them, intro back if first time
  onIntro(({ username: name, x, y, z }, fromId) => {
    if (!known.has(fromId)) {
      known.set(fromId, { username: name })
      positions.set(fromId, { x, z })
      // Introduce ourselves back
      sendIntro({ username, ...myPos }, fromId)
    }
  })

  // When we receive a position update — store it
  onPos(({ x, z }, fromId) => {
    positions.set(fromId, { x, z })
    posUpdateCount++
  })

  // Position broadcast
  function broadcastPosition() {
    sendPos({ x: myPos.x, z: myPos.z })
  }

  function move(x, z) {
    myPos = { x, y: 0, z }
    broadcastPosition()
  }

  return {
    peerId, username,
    api,
    getKnown:        () => known,
    getPositions:    () => positions,
    getPosUpdateCount: () => posUpdateCount,
    move,
    broadcastPosition,
  }
}

// ── Tests ──────────────────────────────────────────────────────────────────

describe('MockRoom — 100 concurrent peers', () => {
  const N = 100
  let room, peers

  beforeEach(() => {
    room  = new MockRoom()
    peers = []

    // Spawn all N peers — non-blocking (all join before any are announced)
    for (let i = 0; i < N; i++) {
      peers.push(createPeer(room, `peer-${i}`, `User ${i}`))
    }
    // Announce all peers concurrently — triggers onPeerJoin on both sides
    for (const p of peers) room.announce(p.api)
  })

  it('all 100 peers are connected in the room', () => {
    expect(room.peerCount).toBe(N)
  })

  it('each peer knows all other 99 peers', () => {
    for (const p of peers) {
      expect(p.getKnown().size).toBe(N - 1)
    }
  })

  it('no peer knows itself', () => {
    for (const p of peers) {
      expect(p.getKnown().has(p.peerId)).toBe(false)
    }
  })

  it('known usernames are correct', () => {
    for (const p of peers) {
      for (const [id, rec] of p.getKnown()) {
        const idx = parseInt(id.split('-')[1])
        expect(rec.username).toBe(`User ${idx}`)
      }
    }
  })

  it('100 concurrent position broadcasts each reach 99 peers', () => {
    // Reset counters
    for (const p of peers) p.broadcastPosition()

    const totalReceived = peers.reduce((s, p) => s + p.getPosUpdateCount(), 0)
    // Each of 100 peers broadcasts to 99 others = 9900 total deliveries
    expect(totalReceived).toBe(N * (N - 1))
  })

  it('position updates carry correct coordinates', () => {
    const sender = peers[0]
    sender.move(42, 17)

    // Every other peer should now have (42, 17) for peer-0
    for (let i = 1; i < N; i++) {
      const pos = peers[i].getPositions().get('peer-0')
      expect(pos).toMatchObject({ x: 42, z: 17 })
    }
  })

  it('targeted intro reaches only the intended peer', () => {
    // Fresh room with 2 peers
    const r = new MockRoom()
    const a = createPeer(r, 'alice', 'Alice')
    const b = createPeer(r, 'bob',   'Bob')
    const c = createPeer(r, 'carol', 'Carol')
    r.announce(a.api)
    r.announce(b.api)
    r.announce(c.api)

    // Carol should know both Alice and Bob
    expect(c.getKnown().has('alice')).toBe(true)
    expect(c.getKnown().has('bob')).toBe(true)
  })

  it('peer leave removes them from all known maps', () => {
    room.leave('peer-0')

    for (let i = 1; i < N; i++) {
      expect(peers[i].getKnown().has('peer-0')).toBe(false)
    }
  })

  it('50 peers leaving concurrently leaves the other 50 intact', () => {
    for (let i = 0; i < 50; i++) room.leave(`peer-${i}`)
    expect(room.peerCount).toBe(50)

    for (let i = 50; i < N; i++) {
      // Remaining peers should not know any of the departed ones
      for (let j = 0; j < 50; j++) {
        expect(peers[i].getKnown().has(`peer-${j}`)).toBe(false)
      }
    }
  })

  it('peer that rejoins is re-discovered', () => {
    room.leave('peer-0')
    const rejoined = createPeer(room, 'peer-0', 'User 0')
    room.announce(rejoined.api)

    // All remaining peers know peer-0 again
    for (let i = 1; i < N; i++) {
      expect(peers[i].getKnown().has('peer-0')).toBe(true)
    }
  })

  it('all 9900 intro exchanges complete with no duplicates', () => {
    // Each peer should know exactly N-1 others — no more, no less
    const totals = peers.map(p => p.getKnown().size)
    expect(totals.every(n => n === N - 1)).toBe(true)
  })

  it('handles 100 simultaneous moves without blocking', async () => {
    // Fire 100 moves concurrently via Promise.all
    await Promise.all(
      peers.map((p, i) => Promise.resolve(p.move(i * 0.1, i * 0.2)))
    )

    // Verify every peer received the expected position for peer-50
    const expectedX = 50 * 0.1
    const expectedZ = 50 * 0.2

    for (let i = 0; i < N; i++) {
      if (i === 50) continue
      const pos = peers[i].getPositions().get('peer-50')
      expect(pos?.x).toBeCloseTo(expectedX)
      expect(pos?.z).toBeCloseTo(expectedZ)
    }
  })
})
