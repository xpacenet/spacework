import { describe, it, expect } from 'vitest'
import { resolveCollision, getZone, buildPath, WALLS } from '../player/collision.js'

// ── Wall definitions ───────────────────────────────────────────────────────

describe('WALLS', () => {
  it('has outer hull bounds', () => {
    const types = WALLS.map(w => w.type)
    expect(types).toContain('xMin')
    expect(types).toContain('xMax')
    expect(types).toContain('zMin')
    expect(types).toContain('zMax')
  })

  it('has two zone divider walls', () => {
    const zWalls = WALLS.filter(w => w.type === 'zWall')
    expect(zWalls).toHaveLength(2)
  })

  it('zone dividers are at z=6.5 and z=-5.5', () => {
    const zWalls = WALLS.filter(w => w.type === 'zWall').map(w => w.z)
    expect(zWalls).toContain(6.5)
    expect(zWalls).toContain(-5.5)
  })
})

// ── resolveCollision ───────────────────────────────────────────────────────

describe('resolveCollision — outer walls', () => {
  const prev = { x: 0, z: 0 }

  it('clamps x at left hull wall', () => {
    const result = resolveCollision(prev, { x: -10, z: 0 })
    expect(result.x).toBeGreaterThan(-6.2)
  })

  it('clamps x at right hull wall', () => {
    const result = resolveCollision(prev, { x: 10, z: 0 })
    expect(result.x).toBeLessThan(6.2)
  })

  it('clamps z at front hull wall', () => {
    const result = resolveCollision(prev, { x: 0, z: 30 })
    expect(result.z).toBeLessThan(21.5)
  })

  it('clamps z at rear hull wall', () => {
    const result = resolveCollision(prev, { x: 0, z: -30 })
    expect(result.z).toBeGreaterThan(-19.5)
  })

  it('allows free movement inside the hull', () => {
    const result = resolveCollision({ x: 0, z: 0 }, { x: 2, z: 3 })
    expect(result.x).toBe(2)
    expect(result.z).toBe(3)
  })
})

describe('resolveCollision — zone divider walls', () => {
  it('blocks crossing Bridge→Lab wall outside doorway', () => {
    // Moving from Bridge (z>6.5) to Lab (z<6.5) but not through gap
    const prev   = { x: 5, z: 7 }    // Bridge side, far from door
    const next   = { x: 5, z: 6 }    // trying to enter Lab
    const result = resolveCollision(prev, next)
    expect(result.z).toBeGreaterThanOrEqual(6.5)
  })

  it('allows crossing Bridge→Lab wall through the doorway gap', () => {
    const prev   = { x: 0, z: 7 }    // Bridge side, at center (x=0 is in gap)
    const next   = { x: 0, z: 6 }    // crossing into Lab through gap
    const result = resolveCollision(prev, next)
    expect(result.z).toBe(6)          // should pass through
  })

  it('blocks crossing Lab→Lounge wall outside doorway', () => {
    const prev   = { x: 5, z: -4 }   // Lab side, far from door
    const next   = { x: 5, z: -6 }   // trying to enter Lounge
    const result = resolveCollision(prev, next)
    expect(result.z).toBeGreaterThanOrEqual(-5.5)
  })

  it('allows crossing Lab→Lounge wall through the doorway gap', () => {
    const prev   = { x: 0, z: -4 }
    const next   = { x: 0, z: -6 }
    const result = resolveCollision(prev, next)
    expect(result.z).toBe(-6)
  })

  it('does not block movement within the same zone', () => {
    const prev   = { x: 0, z: 10 }   // Bridge
    const next   = { x: 1, z: 9 }    // still Bridge
    const result = resolveCollision(prev, next)
    expect(result.x).toBe(1)
    expect(result.z).toBe(9)
  })
})

// ── getZone ────────────────────────────────────────────────────────────────

describe('getZone', () => {
  it('returns BRIDGE for z >= 6.5', () => {
    expect(getZone(6.5)).toBe('BRIDGE')
    expect(getZone(12)).toBe('BRIDGE')
    expect(getZone(21)).toBe('BRIDGE')
  })

  it('returns LAB for -5.5 <= z < 6.5', () => {
    expect(getZone(6.4)).toBe('LAB')
    expect(getZone(0)).toBe('LAB')
    expect(getZone(-5.5)).toBe('LAB')
  })

  it('returns LOUNGE for z < -5.5', () => {
    expect(getZone(-5.6)).toBe('LOUNGE')
    expect(getZone(-12)).toBe('LOUNGE')
    expect(getZone(-19)).toBe('LOUNGE')
  })

  it('handles exact boundary at 6.5 as BRIDGE', () => {
    expect(getZone(6.5)).toBe('BRIDGE')
  })

  it('handles exact boundary at -5.5 as LAB', () => {
    expect(getZone(-5.5)).toBe('LAB')
  })
})

// ── buildPath ──────────────────────────────────────────────────────────────

describe('buildPath — same zone', () => {
  it('returns direct path with single waypoint', () => {
    const path = buildPath({ x: 0, z: 12 }, { x: 2, z: 15 })
    expect(path).toHaveLength(1)
    expect(path[0]).toMatchObject({ x: 2, z: 15 })
  })

  it('works entirely within Lab', () => {
    const path = buildPath({ x: -2, z: 0 }, { x: 3, z: 4 })
    expect(path).toHaveLength(1)
    expect(path[0]).toMatchObject({ x: 3, z: 4 })
  })

  it('works entirely within Lounge', () => {
    const path = buildPath({ x: 0, z: -10 }, { x: 2, z: -15 })
    expect(path).toHaveLength(1)
    expect(path[0]).toMatchObject({ x: 2, z: -15 })
  })
})

describe('buildPath — cross-zone', () => {
  it('Bridge → Lounge passes through both doorways', () => {
    const path = buildPath({ x: 0, z: 12 }, { x: 0, z: -12 })
    // Should have: Bridge→Lab doorway, Lab→Lounge doorway, destination
    expect(path).toHaveLength(3)
  })

  it('Lounge → Bridge passes through both doorways', () => {
    const path = buildPath({ x: 0, z: -12 }, { x: 0, z: 12 })
    expect(path).toHaveLength(3)
  })

  it('Bridge → Lab passes through one doorway', () => {
    const path = buildPath({ x: 0, z: 12 }, { x: 0, z: 0 })
    expect(path).toHaveLength(2)
  })

  it('Lab → Lounge passes through one doorway', () => {
    const path = buildPath({ x: 0, z: 0 }, { x: 0, z: -12 })
    expect(path).toHaveLength(2)
  })

  it('waypoints thread through x=0 (center of doorway)', () => {
    const path = buildPath({ x: 4, z: 12 }, { x: -3, z: 0 })
    // First waypoint should be the doorway at z=6.5, x=0
    expect(path[0].x).toBe(0)
  })

  it('final waypoint is always the destination', () => {
    const dest = { x: 2.5, z: -8 }
    const path = buildPath({ x: 0, z: 12 }, dest)
    const last = path[path.length - 1]
    expect(last.x).toBe(dest.x)
    expect(last.z).toBe(dest.z)
  })
})
