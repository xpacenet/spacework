import * as THREE from 'three'
import { BLDG as B } from './building.js'

// ── Door definitions ──────────────────────────────────────────────────────
// Each door pivots around a hinge group. The mesh is offset from the pivot
// so that it swings around its hinge edge rather than its centre.
//
// Collision logic:
//   closed → thin AABB that fills the gap in the wall
//   open   → door panel is folded to the side; gap is free

const L  = B.leftDoorX   // -11
const R  = B.rightDoorX  //  11
const HW = B.doorHalfW   //   0.7  (door panel = 1.4 m wide)
const DH = B.doorH       //   2.2
const T  = 0.1           // panel thickness

export const DOOR_DEFS = [
  // ── Main entrance — double door, opens outward (+Z) ───────────────────
  {
    id: 'main-left',
    label: 'Main Entrance',
    hinge: { x: -B.mainDoorHalfW, y: B.mainDoorH / 2, z: B.maxZ },
    meshOffset: { x: B.mainDoorHalfW / 2, y: 0, z: 0 },
    w: B.mainDoorHalfW, h: B.mainDoorH, d: T,
    closedRY: 0,
    openRY: Math.PI / 2,
    closedAABB: { minX: -B.mainDoorHalfW, maxX: 0,
                  minZ: B.maxZ - 0.14, maxZ: B.maxZ + 0.14 },
  },
  {
    id: 'main-right',
    label: 'Main Entrance',
    hinge: { x: B.mainDoorHalfW, y: B.mainDoorH / 2, z: B.maxZ },
    meshOffset: { x: -B.mainDoorHalfW / 2, y: 0, z: 0 },
    w: B.mainDoorHalfW, h: B.mainDoorH, d: T,
    closedRY: 0,
    openRY: -Math.PI / 2,
    closedAABB: { minX: 0, maxX: B.mainDoorHalfW,
                  minZ: B.maxZ - 0.14, maxZ: B.maxZ + 0.14 },
  },

  // ── Ops room door (lobby ↔ Ops, left of centre) ───────────────────────
  {
    id: 'ops',
    label: 'Ops Room',
    hinge: { x: L - HW, y: DH / 2, z: B.lobbyZ },
    meshOffset: { x: HW, y: 0, z: 0 },
    w: HW * 2, h: DH, d: T,
    closedRY: 0,
    openRY: -Math.PI / 2,   // swings into Ops room (–Z)
    closedAABB: { minX: L - HW, maxX: L + HW,
                  minZ: B.lobbyZ - 0.12, maxZ: B.lobbyZ + 0.12 },
  },

  // ── Fun room door (lobby ↔ Fun, right of centre) ──────────────────────
  {
    id: 'fun',
    label: 'Fun Room',
    hinge: { x: R + HW, y: DH / 2, z: B.lobbyZ },
    meshOffset: { x: -HW, y: 0, z: 0 },
    w: HW * 2, h: DH, d: T,
    closedRY: 0,
    openRY: Math.PI / 2,    // swings into Fun room (–Z)
    closedAABB: { minX: R - HW, maxX: R + HW,
                  minZ: B.lobbyZ - 0.12, maxZ: B.lobbyZ + 0.12 },
  },

  // ── Design room door (Ops ↔ Design, left side) ───────────────────────
  {
    id: 'design',
    label: 'Design Room',
    hinge: { x: L - HW, y: DH / 2, z: B.midZ },
    meshOffset: { x: HW, y: 0, z: 0 },
    w: HW * 2, h: DH, d: T,
    closedRY: 0,
    openRY: -Math.PI / 2,   // swings into Design room (–Z)
    closedAABB: { minX: L - HW, maxX: L + HW,
                  minZ: B.midZ - 0.12, maxZ: B.midZ + 0.12 },
  },

  // ── Engineering room door (Fun ↔ Engineering, right side) ─────────────
  {
    id: 'engineering',
    label: 'Engineering Room',
    hinge: { x: R + HW, y: DH / 2, z: B.midZ },
    meshOffset: { x: -HW, y: 0, z: 0 },
    w: HW * 2, h: DH, d: T,
    closedRY: 0,
    openRY: Math.PI / 2,    // swings into Engineering room (–Z)
    closedAABB: { minX: R - HW, maxX: R + HW,
                  minZ: B.midZ - 0.12, maxZ: B.midZ + 0.12 },
  },
]

// ── Runtime state map  id → { open, targetRY, currentRY, pivot } ─────────
const _state = {}

// ── Build all doors ────────────────────────────────────────────────────────
export function buildDoors (scene) {
  const woodMat = new THREE.MeshStandardMaterial({
    color: 0x7a5430, roughness: 0.72, metalness: 0.02, side: THREE.DoubleSide,
  })
  const knobMat = new THREE.MeshStandardMaterial({
    color: 0xd4aa44, roughness: 0.28, metalness: 0.88,
  })
  const railMat = new THREE.MeshStandardMaterial({
    color: 0x5e3e1e, roughness: 0.8, metalness: 0,
  })

  DOOR_DEFS.forEach(def => {
    const pivot = new THREE.Group()
    pivot.position.set(def.hinge.x, def.hinge.y, def.hinge.z)
    scene.add(pivot)

    // Door panel
    const panel = new THREE.Mesh(new THREE.BoxGeometry(def.w, def.h, def.d), woodMat)
    panel.position.set(def.meshOffset.x, def.meshOffset.y, def.meshOffset.z)
    panel.userData.doorId = def.id
    pivot.add(panel)

    // Decorative rail strips on the panel
    const mo = def.meshOffset
    ;[-0.45, 0.32].forEach(yOff => {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(def.w * 0.85, 0.04, def.d * 1.2), railMat)
      rail.position.set(mo.x, mo.y + yOff, mo.z + def.d * 0.1)
      pivot.add(rail)
    })

    // Door knob
    const kx = mo.x + (mo.x >= 0 ? -def.w * 0.36 : def.w * 0.36)
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), knobMat)
    knob.position.set(kx, mo.y - 0.08, mo.z + def.d * 0.65)
    pivot.add(knob)
    // Back-side knob
    const knob2 = knob.clone()
    knob2.position.z = mo.z - def.d * 0.65
    pivot.add(knob2)

    // Main entrance doors start OPEN so players can walk in freely.
    // Room doors start closed — press F to enter a room.
    const startOpen = def.id === 'main-left' || def.id === 'main-right'
    const initRY    = startOpen ? def.openRY : def.closedRY
    pivot.rotation.y = initRY
    _state[def.id] = {
      open:      startOpen,
      targetRY:  initRY,
      currentRY: initRY,
      pivot,
    }
  })

  return { update, toggleDoor, getNearbyDoor, getClosedColliders }
}

// ── Advance door animations every frame ───────────────────────────────────
function update (delta) {
  Object.values(_state).forEach(s => {
    if (Math.abs(s.currentRY - s.targetRY) > 0.0005) {
      s.currentRY += (s.targetRY - s.currentRY) * Math.min(1, delta * 7)
      s.pivot.rotation.y = s.currentRY
    }
  })
}

// ── Toggle a door open / closed ───────────────────────────────────────────
export function toggleDoor (id) {
  const s   = _state[id]
  const def = DOOR_DEFS.find(d => d.id === id)
  if (!s || !def) return
  s.open    = !s.open
  s.targetRY = s.open ? def.openRY : def.closedRY
  return s.open
}

// ── Returns the closest door within maxDist of pos, or null ───────────────
export function getNearbyDoor (pos, maxDist = 2.8) {
  let best = null, bestDist = maxDist
  DOOR_DEFS.forEach(def => {
    // Only keep unique logical doors (main-left & main-right share a label)
    const dx = pos.x - def.hinge.x
    const dz = pos.z - def.hinge.z
    const d  = Math.sqrt(dx * dx + dz * dz)
    if (d < bestDist) { bestDist = d; best = { def, state: _state[def.id] } }
  })
  return best
}

// ── Returns whether a door is currently open ──────────────────────────────
export function isDoorOpen (id) {
  return _state[id]?.open ?? false
}

// ── Returns AABB boxes for all nearly-closed door panels ──────────────────
// Used by collision.js to block the wall gap when the door is shut.
export function getClosedColliders () {
  const boxes = []
  DOOR_DEFS.forEach(def => {
    const s = _state[def.id]
    if (!s) return
    const isClosed = Math.abs(s.currentRY - def.closedRY) < 0.18
    if (isClosed) boxes.push(def.closedAABB)
  })
  return boxes
}
