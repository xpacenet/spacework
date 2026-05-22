import * as THREE from 'three'

// ── Building dimensions — shared with collision.js and doors.js ───────────
export const BLDG = {
  // Ground-floor footprint (unchanged — collision depends on these)
  minX: -22,  maxX: 22,   // 44 m wide
  minZ: -24,  maxZ: 12,   // 36 m deep

  // Interior ceiling of navigable ground floor
  wallH: 4.5,
  wallT: 0.30,            // slightly thicker — no more micro-seams

  // Interior zone dividers
  lobbyZ:  4,
  midZ:   -4,
  centerX: 0,

  // Door geometry
  doorH:          2.2,
  doorHalfW:      0.7,
  leftDoorX:     -11,
  rightDoorX:     11,
  mainDoorH:      2.6,
  mainDoorHalfW:  1.5,
}

const B = BLDG

// ── Convenience box helper ─────────────────────────────────────────────────
function box (scene, mat, x, y, z, w, h, d) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
  m.position.set(x, y, z)
  scene.add(m)
  return m
}

// ── Materials ─────────────────────────────────────────────────────────────
function makeMats () {
  // Exterior — light off-white precast concrete panels, real office building
  const ext = new THREE.MeshStandardMaterial({
    color: 0xd4cfc6, roughness: 0.88, metalness: 0.04, side: THREE.DoubleSide,
  })
  // Spandrel bands — medium grey, marks each floor slab
  const span = new THREE.MeshStandardMaterial({
    color: 0x7a7872, roughness: 0.78, metalness: 0.08,
  })
  // Interior walls — warm off-white (real office drywall)
  const int_ = new THREE.MeshStandardMaterial({
    color: 0xf0ece5, roughness: 0.94, metalness: 0,
  })
  // Interior dividers — slightly warmer white
  const div = new THREE.MeshStandardMaterial({
    color: 0xe8e4dc, roughness: 0.90, metalness: 0,
  })
  // Lobby floor — large format polished porcelain, light stone
  const tile = new THREE.MeshStandardMaterial({
    color: 0xd8d2c8, roughness: 0.18, metalness: 0.07,
  })
  // Office floors — warm medium oak hardwood
  const wood = new THREE.MeshStandardMaterial({
    color: 0xb87c48, roughness: 0.82, metalness: 0,
  })
  // Ceiling — bright matte white with subtle warmth
  const ceil = new THREE.MeshStandardMaterial({
    color: 0xf5f3ee, roughness: 0.98, metalness: 0,
  })
  // Roof — medium dark grey membrane
  const roof = new THREE.MeshStandardMaterial({
    color: 0x424038, roughness: 0.90, metalness: 0,
  })
  // Window frames — satin aluminium
  const frame = new THREE.MeshStandardMaterial({
    color: 0x9a9890, roughness: 0.40, metalness: 0.60,
  })
  // Glass — clear low-e tint, blue-grey
  const glass = new THREE.MeshStandardMaterial({
    color: 0xa8c8d8, roughness: 0.04, metalness: 0.08,
    transparent: true, opacity: 0.25, side: THREE.DoubleSide,
  })
  // Stair treads — light grey concrete
  const stair = new THREE.MeshStandardMaterial({
    color: 0x8c8880, roughness: 0.82, metalness: 0.04,
  })
  // Steel handrail — brushed satin
  const rail = new THREE.MeshStandardMaterial({
    color: 0xb0b0b8, roughness: 0.28, metalness: 0.82,
  })
  return { ext, span, int: int_, div, tile, wood, ceil, roof, frame, glass, stair, rail }
}

// ── Build everything ───────────────────────────────────────────────────────
export function buildBuilding (scene) {
  const mat = makeMats()

  const H  = B.wallH           // 4.5 — interior ceiling
  const T  = B.wallT           // 0.30
  const W  = B.maxX - B.minX  // 44
  const D  = B.maxZ - B.minZ  // 36
  const cx = 0
  const cz = (B.minZ + B.maxZ) / 2

  // ── Exterior shell heights ─────────────────────────────────────────────
  //   4 storeys × 4.5 m = 18 m  (ground floor is navigable)
  const FLOORS  = 4
  const TOTAL_H = H * FLOORS   // 18 m

  // ── GROUND FLOOR ──────────────────────────────────────────────────────
  // Lobby tile
  box(scene, mat.tile, cx, 0.04, (B.lobbyZ + B.maxZ) / 2, W, 0.08, B.maxZ - B.lobbyZ)
  // Room wood floors
  box(scene, mat.wood, cx, 0.04, (B.minZ + B.lobbyZ) / 2, W, 0.08, B.lobbyZ - B.minZ)

  // ── EXTERIOR SHELL (4-storey) ─────────────────────────────────────────
  // Back wall — full height, unbroken
  box(scene, mat.ext, cx, TOTAL_H / 2, B.minZ, W, TOTAL_H, T)

  // Left wall — full height
  box(scene, mat.ext, B.minX, TOTAL_H / 2, cz, T, TOTAL_H, D)

  // Right wall — full height
  box(scene, mat.ext, B.maxX, TOTAL_H / 2, cz, T, TOTAL_H, D)

  // Front wall:
  //   Ground floor has the main door gap (-1.5 → +1.5)
  //   Upper three floors are solid facade
  const mW = B.mainDoorHalfW   // 1.5
  const mH = B.mainDoorH       // 2.6
  const hH = H / 2             // 2.25

  // Ground floor — left panel
  box(scene, mat.ext,
    (B.minX + (-mW)) / 2, hH, B.maxZ,
    -mW - B.minX, H, T)
  // Ground floor — right panel
  box(scene, mat.ext,
    (mW + B.maxX) / 2, hH, B.maxZ,
    B.maxX - mW, H, T)
  // Lintel above main door (ground floor only)
  box(scene, mat.ext,
    0, mH + (H - mH) / 2, B.maxZ,
    mW * 2, H - mH, T)
  // Floors 2-4 — full-width, no gap
  box(scene, mat.ext,
    cx, H + (TOTAL_H - H) / 2, B.maxZ,
    W, TOTAL_H - H, T)

  // ── SPANDREL BANDS + FLOOR LEDGES (mark each storey) ─────────────────
  for (let f = 1; f < FLOORS; f++) {
    const y = H * f
    // Thin horizontal concrete ledge at slab edge (protrudes 0.12 m)
    box(scene, mat.span, cx,    y + 0.25, B.maxZ - 0.08, W + 0.2, 0.5,  0.14)
    box(scene, mat.span, cx,    y + 0.25, B.minZ + 0.08, W + 0.2, 0.5,  0.14)
    box(scene, mat.span, B.minX + 0.06, y + 0.25, cz, 0.14, 0.5, D + 0.2)
    box(scene, mat.span, B.maxX - 0.06, y + 0.25, cz, 0.14, 0.5, D + 0.2)
  }

  // ── WINDOWS — four rows (one per storey) ─────────────────────────────
  buildWindowGrid(scene, mat)

  // ── ENTRANCE CANOPY + COLUMNS ─────────────────────────────────────────
  buildEntrance(scene, mat, mW, T)

  // ── INTERIOR DIVIDERS (ground floor only) ────────────────────────────
  //
  // Rule: each divider segment starts/ends just INSIDE the exterior walls
  // and just CLEAR of intersecting perpendicular walls.
  // This eliminates all z-fighting at corners and T-junctions.
  //
  const inner = T * 0.5    // clearance so segments don't touch outer wall face
  const half  = T / 2      // half wall thickness

  // Lobby divider (z = lobbyZ = 4)  — two door gaps
  _dividedWallZ(scene, mat.div, B.lobbyZ, B.minX + inner, B.maxX - inner, H, T,
    B.leftDoorX,  B.doorHalfW, B.doorH,
    B.rightDoorX, B.doorHalfW, B.doorH)

  // Mid divider (z = midZ = -4)  — two door gaps
  _dividedWallZ(scene, mat.div, B.midZ, B.minX + inner, B.maxX - inner, H, T,
    B.leftDoorX,  B.doorHalfW, B.doorH,
    B.rightDoorX, B.doorHalfW, B.doorH)

  // Centre divider (x = 0)  — split into two segments, clearing the horizontal
  // dividers so no geometry overlaps at the T-junctions
  _solidWallX(scene, mat.div, B.centerX,
    B.minZ + inner,      B.midZ - half,        H, T)
  _solidWallX(scene, mat.div, B.centerX,
    B.midZ  + half,      B.lobbyZ - half,      H, T)

  // ── CEILING (hidden in 2D map mode) ──────────────────────────────────
  const ceilMesh = box(scene, mat.ceil, cx, H + 0.05, cz, W, 0.10, D)
  ceilMesh.userData.mapHide = true

  // ── ROOF + PARAPET ────────────────────────────────────────────────────
  const _n1 = scene.children.length
  box(scene, mat.roof, cx, TOTAL_H + 0.30, cz, W + 1.0, 0.60, D + 1.0)
  // Parapet
  _addParapet(scene, mat.ext, W, D, TOTAL_H)
  for (let i = _n1; i < scene.children.length; i++) scene.children[i].userData.mapHide = true

  // ── LOBBY STAIRCASE (visual, decorative) ─────────────────────────────
  buildStaircase(scene, mat)

  // ── ZONE ACCENT STRIPS (glowing floor trim) ───────────────────────────
  _addZoneStrips(scene)

  // ── CEILING LIGHTS ────────────────────────────────────────────────────
  const _n2 = scene.children.length
  _addCeilingLights(scene, H)
  for (let i = _n2; i < scene.children.length; i++) scene.children[i].userData.mapHide = true

  // ── ROOM FLOOR LABELS (visible only in 2D map mode) ──────────────────
  const _n3 = scene.children.length
  _addRoomLabels(scene)
  for (let i = _n3; i < scene.children.length; i++) scene.children[i].userData.mapShow = true
}

// ── Window grid — 4 rows of windows on every exterior face ────────────────
function buildWindowGrid (scene, mat) {
  const winW = 2.2, winH = 1.6, frameD = 0.08

  function addWin (x, y, z, rotY) {
    // Aluminium frame
    const f = new THREE.Mesh(
      new THREE.BoxGeometry(winW + 0.16, winH + 0.12, frameD),
      mat.frame
    )
    f.position.set(x, y, z); f.rotation.y = rotY; scene.add(f)
    // Glass pane
    const g = new THREE.Mesh(
      new THREE.PlaneGeometry(winW, winH),
      mat.glass
    )
    g.position.set(x, y, z); g.rotation.y = rotY; scene.add(g)
  }

  const H = B.wallH
  // Window vertical centres: one per storey, at 60% of floor height
  const winYs = [0, 1, 2, 3].map(f => f * H + H * 0.60)

  // Left exterior wall (x = minX, face inward rotY=+π/2)
  winYs.forEach(wy => {
    [-16, -6, 8].forEach(wz => addWin(B.minX, wy, wz,  Math.PI / 2))
  })
  // Right exterior wall
  winYs.forEach(wy => {
    [-16, -6, 8].forEach(wz => addWin(B.maxX, wy, wz, -Math.PI / 2))
  })
  // Back wall
  winYs.forEach(wy => {
    [-14, 0, 14].forEach(wx => addWin(wx, wy, B.minZ, Math.PI))
  })
  // Front wall — flanking entrance on ground floor, full grid above
  winYs.forEach((wy, fi) => {
    if (fi === 0) {
      // Ground floor: only flanking windows
      addWin(-14, wy, B.maxZ, 0)
      addWin( 14, wy, B.maxZ, 0)
    } else {
      // Upper floors: full row
      [-14, -6, 6, 14].forEach(wx => addWin(wx, wy, B.maxZ, 0))
    }
  })
}

// ── Entrance canopy + flanking columns ───────────────────────────────────
function buildEntrance (scene, mat, mW, T) {
  // Two flanking columns
  ;[-mW - 0.4, mW + 0.4].forEach(x => {
    // Column shaft
    const col = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.22, B.mainDoorH, 12),
      mat.ext
    )
    col.position.set(x, B.mainDoorH / 2, B.maxZ + 0.5)
    scene.add(col)
  })
  // Flat canopy slab
  box(scene, mat.span,
    0, B.mainDoorH + 0.18, B.maxZ + 0.7,
    mW * 2 + 2.4, 0.35, 1.8)
  // Canopy soffit underside (white)
  box(scene, mat.int,
    0, B.mainDoorH, B.maxZ + 0.7,
    mW * 2 + 2.2, 0.02, 1.7)
}

// ── Decorative staircase in lobby ─────────────────────────────────────────
// Two flights, one on each side of the lobby, leading to "upper floors"
function buildStaircase (scene, mat) {
  const STEPS   = 9
  const stepW   = 0.28   // tread depth
  const stepH   = 0.22   // riser height
  const stepLen = 3.0    // staircase width

  // Right-side staircase (x = 16–19, z = 5–9)
  const rx = 16.5, rz = 5.5
  for (let i = 0; i < STEPS; i++) {
    box(scene, mat.stair,
      rx,
      stepH * (i + 0.5),
      rz + stepW * (i + 0.5),
      stepLen, stepH, stepW
    )
  }
  // Handrail posts
  for (let i = 0; i < STEPS; i += 2) {
    box(scene, mat.rail, rx - stepLen / 2 + 0.1, stepH * i + 0.55, rz + stepW * i, 0.06, 1.1, 0.06)
    box(scene, mat.rail, rx + stepLen / 2 - 0.1, stepH * i + 0.55, rz + stepW * i, 0.06, 1.1, 0.06)
  }
  // Handrail bar
  box(scene, mat.rail,
    rx, stepH * STEPS * 0.5 + 0.55, rz + stepW * STEPS * 0.5,
    stepLen, 0.06, stepW * STEPS + 0.1)

  // Left-side staircase (mirror)
  const lx = -16.5
  for (let i = 0; i < STEPS; i++) {
    box(scene, mat.stair,
      lx, stepH * (i + 0.5), rz + stepW * (i + 0.5),
      stepLen, stepH, stepW
    )
  }
  for (let i = 0; i < STEPS; i += 2) {
    box(scene, mat.rail, lx - stepLen / 2 + 0.1, stepH * i + 0.55, rz + stepW * i, 0.06, 1.1, 0.06)
    box(scene, mat.rail, lx + stepLen / 2 - 0.1, stepH * i + 0.55, rz + stepW * i, 0.06, 1.1, 0.06)
  }
  box(scene, mat.rail,
    lx, stepH * STEPS * 0.5 + 0.55, rz + stepW * STEPS * 0.5,
    stepLen, 0.06, stepW * STEPS + 0.1)
}

// ── Divided wall along Z (horizontal divider with door gaps) ──────────────
function _dividedWallZ (scene, mat, wallZ, xMin, xMax, wallH, wallT,
  d1cx, d1hw, d1h, d2cx, d2hw, d2h) {

  const hH   = wallH / 2
  const segs = []
  let cursor = xMin

  const doors = []
  if (d1cx !== null) doors.push({ c: d1cx, hw: d1hw, dh: d1h })
  if (d2cx !== null) doors.push({ c: d2cx, hw: d2hw, dh: d2h })
  doors.sort((a, b) => a.c - b.c)

  doors.forEach(({ c, hw, dh }) => {
    const gMin = c - hw, gMax = c + hw
    if (gMin > cursor) segs.push({ from: cursor, to: gMin, full: true })
    segs.push({ from: gMin, to: gMax, full: false, dh })
    cursor = gMax
  })
  if (cursor < xMax) segs.push({ from: cursor, to: xMax, full: true })

  segs.forEach(({ from, to, full, dh }) => {
    const len = to - from
    const mid = (from + to) / 2
    if (full) {
      box(scene, mat, mid, hH, wallZ, len, wallH, wallT)
    } else {
      // Lintel only — above the door opening
      const lintH = wallH - dh
      box(scene, mat, mid, dh + lintH / 2, wallZ, len, lintH, wallT)
    }
  })
}

// ── Solid wall along X axis (no doors) ───────────────────────────────────
function _solidWallX (scene, mat, wallX, zMin, zMax, wallH, wallT) {
  const len = zMax - zMin
  if (len <= 0) return
  const m = new THREE.Mesh(
    new THREE.BoxGeometry(wallT, wallH, len),
    mat
  )
  m.position.set(wallX, wallH / 2, (zMin + zMax) / 2)
  scene.add(m)
}

// ── Parapet trim around flat roof ─────────────────────────────────────────
function _addParapet (scene, mat, W, D, topY) {
  const pT  = 0.28
  const pH  = 0.55
  const y   = topY + pH / 2 + 0.05
  const midZ = (B.minZ + B.maxZ) / 2
  const sides = [
    [0,         y, B.maxZ + 0.05, W + 0.6, pH, pT],
    [0,         y, B.minZ - 0.05, W + 0.6, pH, pT],
    [B.minX - 0.05, y, midZ, pT, pH, D + 0.6],
    [B.maxX + 0.05, y, midZ, pT, pH, D + 0.6],
  ]
  sides.forEach(([x, py, z, w, h, d]) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
    m.position.set(x, py, z); scene.add(m)
  })
}

// ── Zone floor accent strips — thin inlay lines, no emissive ─────────────
// In a real office these are colour-coded carpet borders or vinyl strips
// that help occupants navigate without any sci-fi glow.
function _addZoneStrips (scene) {
  const strips = [
    { color: 0xc44880, x: B.minX + 0.06, z1: B.midZ,   z2: B.lobbyZ   },  // Design — rose
    { color: 0x40b870, x: B.maxX - 0.06, z1: B.midZ,   z2: B.lobbyZ   },  // Fun    — green
    { color: 0xe08030, x: B.minX + 0.06, z1: B.minZ,   z2: B.midZ     },  // Ops    — terracotta
    { color: 0x3888c8, x: B.maxX - 0.06, z1: B.minZ,   z2: B.midZ     },  // Eng    — slate-blue
    { color: 0x888888, x: 0,             z1: B.lobbyZ, z2: B.maxZ - 1 },  // Lobby  — stone grey
  ]
  strips.forEach(({ color, x, z1, z2 }) => {
    const mat = new THREE.MeshStandardMaterial({
      color, roughness: 0.7, metalness: 0,
    })
    const d = z2 - z1
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.04, d), mat)
    m.position.set(x, 0.05, (z1 + z2) / 2)
    scene.add(m)
  })
}

// ── Ceiling light panels — 2×1 recessed troffer fixtures ─────────────────
// Real offices use fluorescent or LED panels set flush into a drop ceiling.
// The housing is a slightly-inset box; the diffuser is an emissive white panel.
function _addCeilingLights (scene, H) {
  const housingMat = new THREE.MeshStandardMaterial({
    color: 0xd8d5ce, roughness: 0.85, metalness: 0.06,
  })
  const diffuserMat = new THREE.MeshStandardMaterial({
    color: 0xffffff, emissive: 0xfff5e8, emissiveIntensity: 1.2, roughness: 0.7,
  })

  // (x, z) — one row per zone plus double set in lobby
  const fixtures = [
    // Lobby — two rows
    [-8, 8], [8, 8], [0, 8],
    // Ops / Fun
    [-11, 0], [11, 0],
    // Design / Engineering (two per room)
    [-14, -10], [-8, -18], [8, -18], [14, -10],
  ]
  fixtures.forEach(([x, z]) => {
    // Metal housing (recessed, sits at ceiling)
    const housing = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.06, 0.65), housingMat)
    housing.position.set(x, H - 0.04, z)
    scene.add(housing)
    // Bright diffuser (flush with ceiling face)
    const diff = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.01, 0.55), diffuserMat)
    diff.position.set(x, H - 0.02, z)
    scene.add(diff)
  })
}

// ── Room floor labels (2D map mode only) ─────────────────────────────────
function _addRoomLabels (scene) {
  const rooms = [
    { name: 'LOBBY',       color: '#cccccc', x:  0,   z:  8,   w: 16, d:  5 },
    { name: 'OPS',         color: '#ffaa44', x: -11,  z:  0,   w: 12, d:  6 },
    { name: 'FUN',         color: '#44ffaa', x:  11,  z:  0,   w: 12, d:  6 },
    { name: 'DESIGN',      color: '#ff6ba0', x: -11,  z: -14,  w: 14, d: 10 },
    { name: 'ENGINEERING', color: '#44aaff', x:  11,  z: -14,  w: 14, d: 10 },
  ]
  rooms.forEach(({ name, color, x, z, w, d }) => {
    const cvs = document.createElement('canvas')
    cvs.width = 512; cvs.height = 256
    const ctx = cvs.getContext('2d')
    ctx.fillStyle = color + '18'; ctx.fillRect(0, 0, 512, 256)
    ctx.strokeStyle = color; ctx.lineWidth = 10
    ctx.strokeRect(6, 6, 500, 244)
    ctx.fillStyle = color
    ctx.font = 'bold 72px Inter, Arial, sans-serif'
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.fillText(name, 256, 128)
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w, d),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cvs), transparent: true, depthWrite: false })
    )
    mesh.rotation.x = -Math.PI / 2
    mesh.position.set(x, 0.15, z)
    scene.add(mesh)
  })
}
