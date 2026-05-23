import { describe, it, expect } from 'vitest'
import { resolveCollision, getZone, buildPath, STATIC_WALLS } from '../player/collision.js'

// Building constants (mirrors src/scene/building.js for reference):
//   minX=-22, maxX=22, minZ=-24, maxZ=12
//   lobbyZ=4, midZ=-4, centerX=0
//   leftDoorX=-11, rightDoorX=11, doorHalfW=0.7

// ── STATIC_WALLS structure ────────────────────────────────────────────────────

describe('STATIC_WALLS', () => {
  it('is a non-empty array of AABB boxes', () => {
    expect(Array.isArray(STATIC_WALLS)).toBe(true)
    expect(STATIC_WALLS.length).toBeGreaterThan(0)
  })

  it('every wall has minX, maxX, minZ, maxZ', () => {
    STATIC_WALLS.forEach((w, i) => {
      expect(w, `wall[${i}] missing minX`).toHaveProperty('minX')
      expect(w, `wall[${i}] missing maxX`).toHaveProperty('maxX')
      expect(w, `wall[${i}] missing minZ`).toHaveProperty('minZ')
      expect(w, `wall[${i}] missing maxZ`).toHaveProperty('maxZ')
    })
  })

  it('every wall has minX < maxX and minZ < maxZ', () => {
    STATIC_WALLS.forEach((w, i) => {
      expect(w.minX, `wall[${i}].minX >= maxX`).toBeLessThan(w.maxX)
      expect(w.minZ, `wall[${i}].minZ >= maxZ`).toBeLessThan(w.maxZ)
    })
  })

  it('includes exterior hull walls near the building bounds', () => {
    // There should be walls close to x=-22, x=22, z=-24, z=12
    const nearLeft  = STATIC_WALLS.some(w => w.minX < -21 && w.maxX > -23)
    const nearRight = STATIC_WALLS.some(w => w.maxX > 21  && w.minX < 23)
    const nearFront = STATIC_WALLS.some(w => w.minZ < 13  && w.maxZ > 11)
    const nearBack  = STATIC_WALLS.some(w => w.minZ < -23 && w.maxZ > -25)
    expect(nearLeft,  'no wall near x=-22').toBe(true)
    expect(nearRight, 'no wall near x=22').toBe(true)
    expect(nearFront, 'no wall near z=12').toBe(true)
    expect(nearBack,  'no wall near z=-24').toBe(true)
  })

  it('has zone divider walls near lobbyZ=4 and midZ=-4', () => {
    const nearLobby = STATIC_WALLS.some(w => w.minZ < 4.2 && w.maxZ > 3.8)
    const nearMid   = STATIC_WALLS.some(w => w.minZ < -3.8 && w.maxZ > -4.2)
    expect(nearLobby, 'no lobby divider near z=4').toBe(true)
    expect(nearMid,   'no mid divider near z=-4').toBe(true)
  })
})

// ── resolveCollision ──────────────────────────────────────────────────────────

describe('resolveCollision', () => {
  it('returns an object with x and z', () => {
    const result = resolveCollision({ x: 0, z: 0 }, { x: 1, z: 1 })
    expect(result).toHaveProperty('x')
    expect(result).toHaveProperty('z')
  })

  it('does not move a player who is already in open space', () => {
    // Centre of lobby — no wall should push here
    const pos = { x: 0, z: 8 }
    const result = resolveCollision(pos, pos)
    expect(result.x).toBeCloseTo(0, 1)
    expect(result.z).toBeCloseTo(8, 1)
  })

  it('pushes player away from left exterior wall (approaching from inside)', () => {
    // Wall at x≈-22, player at x=-21.6 (inside, within collision radius of wall face)
    const result = resolveCollision({ x: -20, z: 0 }, { x: -21.6, z: 0 })
    expect(result.x).toBeGreaterThan(-21.84)   // pushed back away from wall
  })

  it('pushes player away from right exterior wall (approaching from inside)', () => {
    // Wall at x≈22, player at x=21.6 (inside, within collision radius of wall face)
    const result = resolveCollision({ x: 20, z: 0 }, { x: 21.6, z: 0 })
    expect(result.x).toBeLessThan(21.84)   // pushed back away from wall
  })

  it('pushes player away from front exterior wall (approaching from inside)', () => {
    // Wall near z=12, player at z=11.7 (inside, within collision radius)
    const result = resolveCollision({ x: 0, z: 10 }, { x: 0, z: 11.7 })
    expect(result.z).toBeLessThan(11.84)
  })

  it('pushes player away from back exterior wall (approaching from inside)', () => {
    // Wall near z=-24, player at z=-23.7 (inside, within collision radius)
    const result = resolveCollision({ x: 0, z: -22 }, { x: 0, z: -23.7 })
    expect(result.z).toBeGreaterThan(-23.84)
  })
})

// ── getZone ───────────────────────────────────────────────────────────────────

describe('getZone', () => {
  it('returns OUTSIDE for positions beyond the building', () => {
    expect(getZone({ x: 0,   z: 30 })).toBe('OUTSIDE')
    expect(getZone({ x: 0,   z: -30 })).toBe('OUTSIDE')
    expect(getZone({ x: -30, z: 0  })).toBe('OUTSIDE')
    expect(getZone({ x: 30,  z: 0  })).toBe('OUTSIDE')
  })

  it('returns LOBBY for z between lobbyZ(4) and maxZ(12)', () => {
    expect(getZone({ x: 0, z: 8 })).toBe('LOBBY')
    expect(getZone({ x: 0, z: 5 })).toBe('LOBBY')
  })

  it('returns OPS for left side between midZ and lobbyZ', () => {
    expect(getZone({ x: -5, z: 0 })).toBe('OPS')
  })

  it('returns FUN for right side between midZ and lobbyZ', () => {
    expect(getZone({ x: 5, z: 0 })).toBe('FUN')
  })

  it('returns DESIGN for left side below midZ', () => {
    expect(getZone({ x: -5, z: -10 })).toBe('DESIGN')
  })

  it('returns ENGINEERING for right side below midZ', () => {
    expect(getZone({ x: 5, z: -10 })).toBe('ENGINEERING')
  })

  it('treats x=0 (centerX) as not-left → FUN / ENGINEERING', () => {
    expect(getZone({ x: 0, z: 0 })).toBe('FUN')
    expect(getZone({ x: 0, z: -10 })).toBe('ENGINEERING')
  })
})

// ── buildPath ─────────────────────────────────────────────────────────────────

describe('buildPath', () => {
  it('returns [dest] for same-zone move', () => {
    const path = buildPath({ x: 0, z: 8 }, { x: 2, z: 9 })
    expect(path).toHaveLength(1)
    expect(path[0]).toMatchObject({ x: 2, z: 9 })
  })

  it('returns multiple waypoints for cross-zone move', () => {
    // From LOBBY to ENGINEERING — must thread through at least one door
    const path = buildPath({ x: 0, z: 8 }, { x: 5, z: -10 })
    expect(path.length).toBeGreaterThan(1)
    expect(path[path.length - 1]).toMatchObject({ x: 5, z: -10 })
  })

  it('last waypoint is always the destination', () => {
    const dest = { x: -5, z: -15 }
    const path = buildPath({ x: 0, z: 8 }, dest)
    expect(path[path.length - 1]).toMatchObject(dest)
  })

  it('move within ENGINEERING is a direct single waypoint', () => {
    const path = buildPath({ x: 3, z: -12 }, { x: 8, z: -18 })
    expect(path).toHaveLength(1)
  })
})
