// Building wall + door + furniture collision
// All coordinates in world-space metres (y is up, floor = 0)
import { BLDG as B } from '../scene/building.js'
import { getClosedColliders } from '../scene/doors.js'

const RADIUS = 0.38  // player collision radius

// ── Static wall segments (AABB thin boxes) ─────────────────────────────────
// Each { minX, maxX, minZ, maxZ } is an impenetrable slab.
// Gaps for doors are NOT included here — door.js supplies those dynamically.
const T = B.wallT / 2 + 0.01   // half-thickness + epsilon
const L = B.leftDoorX           // -11
const R = B.rightDoorX          //  11
const HW = B.doorHalfW          //   0.7
const MW = B.mainDoorHalfW      //   1.5

export const STATIC_WALLS = [
  // ── Exterior hull ────────────────────────────────────────────────────
  // Front wall (z = maxZ = 12) — gap at x: -mainDoorHalfW to +mainDoorHalfW
  { minX: B.minX,   maxX: -MW,     minZ: B.maxZ - T, maxZ: B.maxZ + T },
  { minX:  MW,      maxX: B.maxX,  minZ: B.maxZ - T, maxZ: B.maxZ + T },
  // Back wall
  { minX: B.minX,   maxX: B.maxX,  minZ: B.minZ - T, maxZ: B.minZ + T },
  // Left wall
  { minX: B.minX - T, maxX: B.minX + T, minZ: B.minZ, maxZ: B.maxZ },
  // Right wall
  { minX: B.maxX - T, maxX: B.maxX + T, minZ: B.minZ, maxZ: B.maxZ },

  // ── Lobby divider (z = lobbyZ = 4) ───────────────────────────────────
  // gap at x: L-HW to L+HW  and  x: R-HW to R+HW
  { minX: B.minX,   maxX: L - HW, minZ: B.lobbyZ - T, maxZ: B.lobbyZ + T },
  { minX: L + HW,   maxX: R - HW, minZ: B.lobbyZ - T, maxZ: B.lobbyZ + T },
  { minX: R + HW,   maxX: B.maxX, minZ: B.lobbyZ - T, maxZ: B.lobbyZ + T },

  // ── Mid divider (z = midZ = -4) ──────────────────────────────────────
  { minX: B.minX,   maxX: L - HW, minZ: B.midZ - T, maxZ: B.midZ + T },
  { minX: L + HW,   maxX: R - HW, minZ: B.midZ - T, maxZ: B.midZ + T },
  { minX: R + HW,   maxX: B.maxX, minZ: B.midZ - T, maxZ: B.midZ + T },

  // ── Centre divider (x = 0, from minZ to lobbyZ) ───────────────────────
  { minX: B.centerX - T, maxX: B.centerX + T, minZ: B.minZ, maxZ: B.lobbyZ },

  // ── World boundary — keeps player from walking to infinity ────────────
  { minX: -80, maxX:  80, minZ:  68, maxZ:  70 },   // north
  { minX: -80, maxX:  80, minZ: -70, maxZ: -68 },   // south
  { minX: -70, maxX: -68, minZ: -70, maxZ:  70 },   // west
  { minX:  68, maxX:  70, minZ: -70, maxZ:  70 },   // east
]

// ── Furniture colliders — set by furniture.js after build ─────────────────
let _furniture = []
export function setFurnitureColliders (boxes) { _furniture = boxes }

// ── Circle vs AABB push-out ───────────────────────────────────────────────
function pushOut (cx, cz, aabb) {
  const closestX = Math.max(aabb.minX, Math.min(cx, aabb.maxX))
  const closestZ = Math.max(aabb.minZ, Math.min(cz, aabb.maxZ))
  const dx = cx - closestX
  const dz = cz - closestZ
  const dist2 = dx * dx + dz * dz
  if (dist2 < RADIUS * RADIUS && dist2 > 0.000001) {
    const dist = Math.sqrt(dist2)
    const overlap = RADIUS - dist
    return { x: cx + (dx / dist) * overlap, z: cz + (dz / dist) * overlap }
  }
  // Player centre is INSIDE the box (shouldn't happen normally)
  if (dist2 === 0) {
    return { x: cx + RADIUS, z: cz }
  }
  return null  // no collision
}

// ── Resolve all collisions for a given move ───────────────────────────────
export function resolveCollision (_prev, next) {
  let x = next.x
  let z = next.z

  // Gather all active colliders
  const allBoxes = [
    ...STATIC_WALLS,
    ...getClosedColliders(),   // doors (dynamic, per-frame)
    ..._furniture,
  ]

  // Iterative resolution (2 passes handles corner cases)
  for (let pass = 0; pass < 2; pass++) {
    for (const box of allBoxes) {
      const r = pushOut(x, z, box)
      if (r) { x = r.x; z = r.z }
    }
  }

  return { x, z }
}

// ── Zone detection ────────────────────────────────────────────────────────
export function getZone (pos) {
  const x = pos.x, z = pos.z

  // Outside building
  if (z > B.maxZ || z < B.minZ || x < B.minX || x > B.maxX) return 'OUTSIDE'

  // Inside building — determine which area
  if (z > B.lobbyZ) return 'LOBBY'

  const inLeft  = x < B.centerX
  const inFront = z > B.midZ      // between midZ and lobbyZ
  const inBack  = z <= B.midZ     // between minZ and midZ

  if (inFront && inLeft)  return 'OPS'
  if (inFront && !inLeft) return 'FUN'
  if (inBack  && inLeft)  return 'DESIGN'
  return 'ENGINEERING'
}

// ── Simple waypoint path for overview click-to-move ───────────────────────
// Routes through doorways as needed (lobby is always accessible from outside).
const WAYPOINTS = {
  mainDoor:    { x:  0,  z: B.maxZ + 0.5 },   // just outside entrance
  lobbyIn:     { x:  0,  z: B.maxZ - 1.5 },   // just inside entrance
  opsEntry:    { x: L,   z: B.lobbyZ - 1 },   // just past Ops door
  funEntry:    { x: R,   z: B.lobbyZ - 1 },   // just past Fun door
  designEntry: { x: L,   z: B.midZ   - 1 },   // just past Design door
  engEntry:    { x: R,   z: B.midZ   - 1 },   // just past Engineering door
}

export function buildPath (fromPos, toPos) {
  const from = getZone(fromPos)
  const to   = getZone(toPos)
  if (from === to) return [{ x: toPos.x, z: toPos.z }]

  const dest = { x: toPos.x, z: toPos.z }
  const WP = WAYPOINTS

  // Route table: from → to → waypoints to thread
  // We always route via lobby for simplicity
  const routeMap = {
    'OUTSIDE→LOBBY':       [WP.mainDoor, WP.lobbyIn],
    'OUTSIDE→OPS':         [WP.mainDoor, WP.lobbyIn, WP.opsEntry],
    'OUTSIDE→FUN':         [WP.mainDoor, WP.lobbyIn, WP.funEntry],
    'OUTSIDE→DESIGN':      [WP.mainDoor, WP.lobbyIn, WP.opsEntry, WP.designEntry],
    'OUTSIDE→ENGINEERING': [WP.mainDoor, WP.lobbyIn, WP.funEntry,  WP.engEntry],
    'LOBBY→OPS':           [WP.opsEntry],
    'LOBBY→FUN':           [WP.funEntry],
    'LOBBY→DESIGN':        [WP.opsEntry, WP.designEntry],
    'LOBBY→ENGINEERING':   [WP.funEntry, WP.engEntry],
    'LOBBY→OUTSIDE':       [WP.mainDoor],
    'OPS→LOBBY':           [WP.opsEntry],
    'OPS→DESIGN':          [WP.designEntry],
    'OPS→FUN':             [WP.opsEntry, WP.funEntry],
    'OPS→ENGINEERING':     [WP.opsEntry, WP.funEntry, WP.engEntry],
    'OPS→OUTSIDE':         [WP.opsEntry, WP.mainDoor],
    'FUN→LOBBY':           [WP.funEntry],
    'FUN→ENGINEERING':     [WP.engEntry],
    'FUN→OPS':             [WP.funEntry, WP.opsEntry],
    'FUN→DESIGN':          [WP.funEntry, WP.opsEntry, WP.designEntry],
    'FUN→OUTSIDE':         [WP.funEntry, WP.mainDoor],
    'DESIGN→OPS':          [WP.designEntry],
    'DESIGN→LOBBY':        [WP.designEntry, WP.opsEntry],
    'DESIGN→FUN':          [WP.designEntry, WP.opsEntry, WP.funEntry],
    'DESIGN→ENGINEERING':  [WP.designEntry, WP.opsEntry, WP.funEntry, WP.engEntry],
    'DESIGN→OUTSIDE':      [WP.designEntry, WP.opsEntry, WP.mainDoor],
    'ENGINEERING→FUN':     [WP.engEntry],
    'ENGINEERING→LOBBY':   [WP.engEntry, WP.funEntry],
    'ENGINEERING→OPS':     [WP.engEntry, WP.funEntry, WP.opsEntry],
    'ENGINEERING→DESIGN':  [WP.engEntry, WP.funEntry, WP.opsEntry, WP.designEntry],
    'ENGINEERING→OUTSIDE': [WP.engEntry, WP.mainDoor],
  }

  const key = `${from}→${to}`
  const wps = routeMap[key] ?? []
  return [...wps, dest]
}
