import * as THREE from 'three'
import { BLDG as B } from './building.js'

// ── Furniture builder — returns AABB collision boxes for all furniture ──────
export function buildFurniture (scene) {
  const colliders = []

  buildDesignRoom(scene, colliders)
  buildEngineeringRoom(scene, colliders)
  buildOpsRoom(scene, colliders)
  buildFunRoom(scene, colliders)
  buildLobby(scene, colliders)

  return { colliders }
}

// ── Shared material palette — warm modern office ──────────────────────────
const MATS = {
  oak:   () => new THREE.MeshStandardMaterial({ color: 0xb07840, roughness: 0.82, metalness: 0 }),
  white: () => new THREE.MeshStandardMaterial({ color: 0xf0ece4, roughness: 0.72, metalness: 0 }),
  dark:  () => new THREE.MeshStandardMaterial({ color: 0x2e2820, roughness: 0.62, metalness: 0.08 }),
  metal: () => new THREE.MeshStandardMaterial({ color: 0x909098, roughness: 0.38, metalness: 0.80 }),
  chair: () => new THREE.MeshStandardMaterial({ color: 0x2a3a60, roughness: 0.82, metalness: 0 }),
  pink:  () => new THREE.MeshStandardMaterial({ color: 0xd06080, roughness: 0.72, metalness: 0 }),
  green: () => new THREE.MeshStandardMaterial({ color: 0x48a870, roughness: 0.72, metalness: 0 }),
  amber: () => new THREE.MeshStandardMaterial({ color: 0xe89040, roughness: 0.72, metalness: 0 }),
  blue:  () => new THREE.MeshStandardMaterial({ color: 0x4080c0, roughness: 0.72, metalness: 0 }),
  screen:() => new THREE.MeshStandardMaterial({ color: 0x101820, emissive: 0x102040, emissiveIntensity: 0.6, roughness: 0.08 }),
  bean:  () => new THREE.MeshStandardMaterial({ color: 0x9040a0, roughness: 0.92, metalness: 0 }),
  sofa:  () => new THREE.MeshStandardMaterial({ color: 0x4a7040, roughness: 0.88, metalness: 0 }),
}

// ── Helper: box mesh + optional collider ──────────────────────────────────
function addBox (scene, mat, x, y, z, w, h, d, colliders, padding = 0.12) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
  m.position.set(x, y, z)
  scene.add(m)
  if (colliders) {
    colliders.push({
      minX: x - w / 2 - padding, maxX: x + w / 2 + padding,
      minZ: z - d / 2 - padding, maxZ: z + d / 2 + padding,
    })
  }
  return m
}

// ── Table ─────────────────────────────────────────────────────────────────
function addTable (scene, x, z, w, d, colliders, mat) {
  const m = mat ?? MATS.oak()
  const tH = 0.76, top = 0.06, legH = tH - top, legR = 0.05
  addBox(scene, m, x, tH - top / 2, z, w, top, d, colliders, 0.1)  // top
  // Legs
  const lx = [x - w / 2 + 0.12, x + w / 2 - 0.12]
  const lz = [z - d / 2 + 0.12, z + d / 2 - 0.12]
  lx.forEach(lx_ => lz.forEach(lz_ => {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(legR, legR, legH, 6), MATS.metal())
    leg.position.set(lx_, legH / 2, lz_)
    scene.add(leg)
  }))
}

// ── Chair ─────────────────────────────────────────────────────────────────
function addChair (scene, x, z, rotY = 0, colliders, mat) {
  const m = mat ?? MATS.chair()
  const g = new THREE.Group()
  g.position.set(x, 0, z)
  g.rotation.y = rotY
  scene.add(g)

  // Seat
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.07, 0.5), m)
  seat.position.y = 0.46
  g.add(seat)
  // Back
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.52, 0.06), m)
  back.position.set(0, 0.75, -0.22)
  g.add(back)
  // Legs
  const legMat = MATS.metal()
  ;[[-0.2, -0.2], [0.2, -0.2], [-0.2, 0.2], [0.2, 0.2]].forEach(([lx, lz]) => {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.46, 5), legMat)
    leg.position.set(lx, 0.23, lz)
    g.add(leg)
  })

  if (colliders) {
    colliders.push({ minX: x - 0.35, maxX: x + 0.35, minZ: z - 0.35, maxZ: z + 0.35 })
  }
}

// ── Monitor ────────────────────────────────────────────────────────────────
function addMonitor (scene, x, y, z, rotY = 0) {
  const g = new THREE.Group()
  g.position.set(x, y, z)
  g.rotation.y = rotY
  scene.add(g)
  // Screen
  const screen = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.32, 0.04), MATS.screen())
  screen.position.y = 0.22
  g.add(screen)
  // Stand
  const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.18, 5), MATS.metal())
  stand.position.y = 0.07
  g.add(stand)
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.02, 0.14), MATS.metal())
  base.position.y = 0
  g.add(base)
}

// ── Plant ──────────────────────────────────────────────────────────────────
function addPlant (scene, x, z) {
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.1, 0.3, 7), MATS.amber())
  pot.position.set(x, 0.15, z)
  scene.add(pot)
  const leaves = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6), MATS.green())
  leaves.position.set(x, 0.55, z)
  scene.add(leaves)
}

// ── DESIGN ROOM ────────────────────────────────────────────────────────────
// Left-back: x = -22 to -1, z = -24 to -4
function buildDesignRoom (scene, col) {
  const cx = -11, cz = -14  // room centre

  // Large collaboration table in the middle
  addTable(scene, cx, cz, 4.5, 2.0, col)

  // 6 chairs around the table
  const tH = 0.76
  addChair(scene, cx - 2.6, cz - 0.5,  0,    col)
  addChair(scene, cx - 2.6, cz + 0.5,  0,    col)
  addChair(scene, cx + 2.6, cz - 0.5,  Math.PI, col)
  addChair(scene, cx + 2.6, cz + 0.5,  Math.PI, col)
  addChair(scene, cx,       cz - 1.2,  Math.PI / 2, col, MATS.pink())
  addChair(scene, cx,       cz + 1.2, -Math.PI / 2, col, MATS.pink())

  // Whiteboard along back wall
  const wb = new THREE.Mesh(new THREE.BoxGeometry(5, 2.4, 0.06),
    new THREE.MeshStandardMaterial({ color: 0xfafaf8, roughness: 0.5 }))
  wb.position.set(cx, 1.8, B.minZ + 0.1)
  scene.add(wb)

  // Side shelving unit
  addBox(scene, MATS.white(), B.minX + 0.5, 1.0, cz - 4, 0.5, 2.0, 3.0, col)

  // Desk along left wall
  addTable(scene, B.minX + 1.2, cz + 2, 2.0, 0.8, col)
  addMonitor(scene, B.minX + 1.0, 0.76, cz + 1.8,  Math.PI / 2)
  addMonitor(scene, B.minX + 1.0, 0.76, cz + 2.2,  Math.PI / 2)
  addChair(scene, B.minX + 2.0, cz + 2, Math.PI / 2, col, MATS.pink())

  // Plants
  addPlant(scene, B.minX + 0.5, B.midZ + 0.6)
  addPlant(scene, -3, B.minZ + 0.6)
}

// ── ENGINEERING ROOM ──────────────────────────────────────────────────────
// Right-back: x = 1 to 22, z = -24 to -4
function buildEngineeringRoom (scene, col) {
  const cx = 11, cz = -14

  // Standing desks — row along the right wall
  const deskZ = [-20, -16, -12, -8]
  deskZ.forEach(z => {
    addTable(scene, B.maxX - 1.4, z, 1.8, 0.7, col, MATS.white())
    addMonitor(scene, B.maxX - 1.1, 0.76, z - 0.18, -Math.PI / 2)
    addMonitor(scene, B.maxX - 1.1, 0.76, z + 0.18, -Math.PI / 2)
    addChair(scene, B.maxX - 2.5, z, -Math.PI / 2, col, MATS.blue())
  })

  // Server rack corner
  addBox(scene, MATS.dark(), cx - 4, 1.1, B.minZ + 0.6, 0.8, 2.2, 0.6, col)  // rack1
  addBox(scene, MATS.dark(), cx - 3, 1.1, B.minZ + 0.6, 0.8, 2.2, 0.6, col)  // rack2
  addBox(scene, MATS.dark(), cx - 2, 1.1, B.minZ + 0.6, 0.8, 2.2, 0.6, col)  // rack3
  // Server rack lights
  ;[-4, -3, -2].forEach(xOff => {
    const led = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.02, 0.4),
      new THREE.MeshStandardMaterial({ color: 0x00ff44, emissive: 0x00ff44, emissiveIntensity: 3 }))
    led.position.set(cx + xOff, 1.6, B.minZ + 0.32)
    scene.add(led)
  })

  // Central pair of desks facing each other (pair programming)
  addTable(scene, cx, cz + 1.0, 3.0, 0.75, col)
  addTable(scene, cx, cz - 1.0, 3.0, 0.75, col)
  addMonitor(scene, cx - 0.8, 0.76, cz + 1.0)
  addMonitor(scene, cx,       0.76, cz + 1.0)
  addMonitor(scene, cx + 0.8, 0.76, cz + 1.0)
  addMonitor(scene, cx - 0.8, 0.76, cz - 1.0, Math.PI)
  addMonitor(scene, cx,       0.76, cz - 1.0, Math.PI)
  addMonitor(scene, cx + 0.8, 0.76, cz - 1.0, Math.PI)
  ;[-1, 0, 1].forEach(i => {
    addChair(scene, cx + i, cz + 1.8,  Math.PI, col, MATS.blue())
    addChair(scene, cx + i, cz - 1.8,  0,       col, MATS.blue())
  })

  // Plants / misc
  addPlant(scene, B.maxX - 0.5, B.midZ + 0.6)
  addPlant(scene, cx + 4, B.minZ + 0.6)
}

// ── OPS ROOM ───────────────────────────────────────────────────────────────
// Left-front: x = -22 to -1, z = -4 to 4
function buildOpsRoom (scene, col) {
  const cx = -11, cz = 0

  // Round meeting table in the centre
  const roundTable = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.06, 16),
    MATS.oak())
  roundTable.position.set(cx, 0.74, cz)
  scene.add(roundTable)
  col.push({ minX: cx - 1.6, maxX: cx + 1.6, minZ: cz - 1.6, maxZ: cz + 1.6 })
  // Table legs
  for (let a = 0; a < 4; a++) {
    const angle = a * Math.PI / 2 + Math.PI / 4
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.74, 6), MATS.metal())
    leg.position.set(cx + Math.cos(angle) * 1.1, 0.37, cz + Math.sin(angle) * 1.1)
    scene.add(leg)
  }

  // Chairs around the round table
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2
    const r = 2.0
    addChair(scene,
      cx + Math.cos(angle) * r,
      cz + Math.sin(angle) * r,
      angle + Math.PI,   // face inward
      null,              // no individual chair colliders (table block is enough)
      MATS.amber()
    )
  }

  // Wall-mounted display panel
  const panel = new THREE.Mesh(new THREE.BoxGeometry(3.5, 2.0, 0.08), MATS.screen())
  panel.position.set(cx, 2.1, B.minX + 0.1)
  panel.rotation.y = Math.PI / 2
  scene.add(panel)

  // Sideboard / credenza
  addBox(scene, MATS.white(), B.minX + 0.5, 0.45, cz + 2.5, 0.5, 0.9, 2.0, col)

  addPlant(scene, B.minX + 0.5, B.lobbyZ - 0.6)
  addPlant(scene, -3, B.midZ + 0.5)
}

// ── FUN ROOM ───────────────────────────────────────────────────────────────
// Right-front: x = 1 to 22, z = -4 to 4
function buildFunRoom (scene, col) {
  const cx = 11, cz = 0

  // Sofa cluster (L-shape)
  addBox(scene, MATS.sofa(), cx - 2.5, 0.44, cz + 1.5, 3.2, 0.88, 1.0, col, 0.1)  // long seat
  addBox(scene, MATS.sofa(), cx - 3.5, 0.44, cz,       1.0, 0.88, 2.2, col, 0.1)  // short arm

  // Coffee table in front of sofa
  addTable(scene, cx - 1.8, cz - 0.2, 1.2, 0.7, col)

  // Bean bags
  const bbMat = MATS.bean()
  for (let i = 0; i < 3; i++) {
    const bx = cx + 3 + i * 1.4
    const bb = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 8), bbMat)
    bb.scale.y = 0.65
    bb.position.set(bx, 0.28, cz)
    scene.add(bb)
    col.push({ minX: bx - 0.55, maxX: bx + 0.55, minZ: cz - 0.55, maxZ: cz + 0.55 })
  }

  // Arcade cabinet
  const arcMat = new THREE.MeshStandardMaterial({ color: 0x220044, roughness: 0.6, metalness: 0.3 })
  addBox(scene, arcMat, B.maxX - 1.0, 1.1, cz + 2.5, 0.9, 2.2, 0.7, col)
  const arcScreen = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.44, 0.04),
    new THREE.MeshStandardMaterial({ color: 0x2244ff, emissive: 0x1133ee, emissiveIntensity: 1.5 }))
  arcScreen.position.set(B.maxX - 0.72, 1.6, cz + 2.15)
  scene.add(arcScreen)

  // Foosball table
  addTable(scene, cx + 1.5, cz - 2.5, 1.6, 0.8, col, MATS.dark())

  // TV / projection screen on far wall
  const tv = new THREE.Mesh(new THREE.BoxGeometry(4.0, 2.2, 0.08), MATS.screen())
  tv.position.set(cx - 2, 2.3, B.maxX - 0.1)  // right wall interior
  tv.rotation.y = -Math.PI / 2
  scene.add(tv)

  addPlant(scene, B.maxX - 0.5, B.lobbyZ - 0.6)
  addPlant(scene, cx - 4, B.midZ + 0.5)
}

// ── LOBBY ─────────────────────────────────────────────────────────────────
// Full width: x = -22 to 22, z = 4 to 12
function buildLobby (scene, col) {
  const cz = (B.lobbyZ + B.maxZ) / 2  // z=8

  // Reception desk
  addBox(scene, MATS.white(), -8, 0.9, cz - 1, 3.0, 1.8, 0.7, col)

  // Waiting chairs — row on right side
  ;[6, 8, 10].forEach(x => {
    addChair(scene, x, cz + 0.5, Math.PI, col, MATS.amber())
  })

  // Low coffee table near waiting chairs
  addTable(scene, 8, cz + 1.8, 1.5, 0.6, col)

  // Large logo floor mat (purely visual)
  const mat = new THREE.Mesh(
    new THREE.CircleGeometry(2.2, 32),
    new THREE.MeshStandardMaterial({ color: 0x2244aa, roughness: 0.4 })
  )
  mat.rotation.x = -Math.PI / 2
  mat.position.set(0, 0.07, cz)
  scene.add(mat)
  // Logo text sprite
  const cvs = document.createElement('canvas')
  cvs.width = 512; cvs.height = 128
  const ctx = cvs.getContext('2d')
  ctx.fillStyle = '#3366ff'
  ctx.font = 'bold 72px Inter, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('SPACEWORK', 256, 88)
  const spr = new THREE.Mesh(
    new THREE.PlaneGeometry(4.0, 1.0),
    new THREE.MeshStandardMaterial({ map: new THREE.CanvasTexture(cvs), roughness: 0.4, transparent: true })
  )
  spr.rotation.x = -Math.PI / 2
  spr.position.set(0, 0.08, cz)
  scene.add(spr)

  // Tall plants flanking entrance
  addPlant(scene, -5, B.maxZ - 1.2)
  addPlant(scene,  5, B.maxZ - 1.2)

  // Info kiosk near entrance
  addBox(scene, MATS.metal(), 0, 1.0, B.lobbyZ + 1.5, 0.4, 2.0, 0.4, col)
  const kiosk = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.28, 0.04), MATS.screen())
  kiosk.position.set(0, 1.9, B.lobbyZ + 1.28)
  scene.add(kiosk)
}
