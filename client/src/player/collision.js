// Ship wall definitions + collision detection
// Doorways are 3-unit wide gaps at X = -1.5 to 1.5

export const WALLS = [
  // Outer hull bounds (hard limits)
  { type: 'xMin', value: -6.2 },
  { type: 'xMax', value:  6.2 },
  { type: 'zMin', value: -19.5 },
  { type: 'zMax', value:  21.5 },

  // Zone divider: Bridge ↔ Lab at Z = 8 (doorway X: -1.5 to 1.5)
  { type: 'zWall', z: 8,  xGapMin: -1.6, xGapMax: 1.6 },

  // Zone divider: Lab ↔ Lounge at Z = -5 (doorway X: -1.5 to 1.5)
  { type: 'zWall', z: -5, xGapMin: -1.6, xGapMax: 1.6 },
]

const RADIUS = 0.35  // avatar collision radius

export function resolveCollision(prevPos, nextPos) {
  let x = nextPos.x
  let z = nextPos.z

  // Outer bounds
  x = Math.max(-6.2 + RADIUS, Math.min(6.2 - RADIUS, x))
  z = Math.max(-19.5 + RADIUS, Math.min(21.5 - RADIUS, z))

  // Zone divider walls
  for (const wall of WALLS) {
    if (wall.type !== 'zWall') continue

    const prevSide = prevPos.z - wall.z
    const nextSide = z - wall.z

    // Only block if crossing the wall AND not inside the doorway gap
    if (Math.sign(prevSide) !== Math.sign(nextSide) && prevSide !== 0) {
      const inGap = x > wall.xGapMin && x < wall.xGapMax
      if (!inGap) {
        // Push back to previous side + small epsilon
        z = wall.z + Math.sign(prevSide) * (RADIUS + 0.05)
      }
    }
  }

  return { x, z }
}

// Which zone a Z position is in
export function getZone(z) {
  if (z >= 8)   return 'BRIDGE'
  if (z >= -5)  return 'LAB'
  return 'LOUNGE'
}

// Zone order for pathfinding
const ZONE_ORDER = ['LOUNGE', 'LAB', 'BRIDGE']
const DOORWAYS   = [
  { z: -5, x: 0, label: 'Lab ↔ Lounge' },
  { z:  8, x: 0, label: 'Bridge ↔ Lab' },
]

export function buildPath(fromPos, toPos) {
  const fromZone = getZone(fromPos.z)
  const toZone   = getZone(toPos.z)
  const waypoints = []

  if (fromZone === toZone) {
    // Same zone — straight line
    waypoints.push({ x: toPos.x, z: toPos.z })
    return waypoints
  }

  const fromIdx = ZONE_ORDER.indexOf(fromZone)
  const toIdx   = ZONE_ORDER.indexOf(toZone)
  const dir     = toIdx > fromIdx ? 1 : -1

  // Thread through doorways between zones
  let cursor = fromIdx
  while (cursor !== toIdx) {
    const nextCursor = cursor + dir
    // Doorway between cursor and nextCursor
    const dwy = dir > 0 ? DOORWAYS[cursor] : DOORWAYS[nextCursor]
    if (dwy) waypoints.push({ x: 0, z: dwy.z + dir * 0.8 })
    cursor = nextCursor
  }

  // Final destination
  waypoints.push({ x: toPos.x, z: toPos.z })
  return waypoints
}
