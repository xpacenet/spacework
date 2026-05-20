import * as THREE from 'three'

// ── Building dimensions — shared with collision.js and doors.js ───────────
export const BLDG = {
  // Outer footprint
  minX: -22,  maxX: 22,   // 44 m wide
  minZ: -24,  maxZ: 12,   // 36 m deep  (front face = z 12, back = z -24)

  // Heights
  wallH: 4.5,             // interior ceiling height
  wallT: 0.28,            // wall/divider thickness

  // Interior dividers (z)
  lobbyZ:  4,             // separates Lobby  ↔ Ops / Fun
  midZ:   -4,             // separates Ops/Fun ↔ Design / Engineering

  // Left–right split
  centerX: 0,

  // Room door geometry
  doorH:     2.2,         // opening height
  doorHalfW: 0.7,         // half of 1.4 m opening

  // Room door X centres
  leftDoorX:  -11,        // Ops door + Design door
  rightDoorX:  11,        // Fun door  + Engineering door

  // Main entrance (double door, front wall)
  mainDoorH:      2.6,
  mainDoorHalfW:  1.5,    // each leaf → 3 m total gap
}

const B = BLDG  // short alias

// ── Materials ─────────────────────────────────────────────────────────────
function makeMats () {
  const ext  = new THREE.MeshStandardMaterial({ color: 0xd4cfc8, roughness: 0.92, metalness: 0.02, side: THREE.DoubleSide })
  const int_ = new THREE.MeshStandardMaterial({ color: 0xf2ede4, roughness: 0.95, metalness: 0,    side: THREE.DoubleSide })
  const div  = new THREE.MeshStandardMaterial({ color: 0xeae6dc, roughness: 0.95, metalness: 0,    side: THREE.DoubleSide })
  const tile = new THREE.MeshStandardMaterial({ color: 0xe2ddd6, roughness: 0.28, metalness: 0.06 })
  const wood = new THREE.MeshStandardMaterial({ color: 0xc4a882, roughness: 0.82, metalness: 0   })
  const ceil = new THREE.MeshStandardMaterial({ color: 0xf5f3ef, roughness: 1.0,  metalness: 0   })
  const roof = new THREE.MeshStandardMaterial({ color: 0x3a3832, roughness: 0.9,  metalness: 0   })
  const glass= new THREE.MeshStandardMaterial({
    color: 0xaaddff, roughness: 0.04, metalness: 0.1,
    transparent: true, opacity: 0.3, side: THREE.DoubleSide,
  })
  const frame= new THREE.MeshStandardMaterial({ color: 0x8a8070, roughness: 0.6, metalness: 0.2 })
  const skirting = new THREE.MeshStandardMaterial({ color: 0xb8b0a4, roughness: 0.7, metalness: 0.1 })
  return { ext, int: int_, div, tile, wood, ceil, roof, glass, frame, skirting }
}

// ── Box helper ─────────────────────────────────────────────────────────────
function box(scene, mat, x, y, z, w, h, d) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
  m.position.set(x, y, z)
  scene.add(m)
  return m
}

// ── Build everything ───────────────────────────────────────────────────────
export function buildBuilding (scene) {
  const m = makeMats()
  const H  = B.wallH          // 4.5
  const T  = B.wallT          // 0.28
  const hH = H / 2            // 2.25  (centre y for full-height walls)
  const W  = B.maxX - B.minX  // 44
  const D  = B.maxZ - B.minZ  // 36
  const cx = 0
  const cz = (B.minZ + B.maxZ) / 2  // -6

  // ── FLOOR ─────────────────────────────────────────────────────────────
  // Lobby — polished tile
  box(scene, m.tile, cx, 0.04, (B.lobbyZ + B.maxZ) / 2,
      W, 0.08, B.maxZ - B.lobbyZ)
  // Rooms — wood
  box(scene, m.wood, cx, 0.04, (B.minZ + B.lobbyZ) / 2,
      W, 0.08, B.lobbyZ - B.minZ)

  // Skirting boards (thin strip at base of all interior walls)
  const sk = 0.06
  addSkirting(scene, m.skirting, sk)

  // ── CEILING ───────────────────────────────────────────────────────────
  box(scene, m.ceil, cx, H + 0.06, cz,  W + T * 2, 0.12, D + T * 2)

  // ── ROOF ──────────────────────────────────────────────────────────────
  box(scene, m.roof, cx, H + 0.55, cz,  W + 1.2, 0.5, D + 1.2)
  // Parapet edge trim
  addParapet(scene, m.ext, W, D, H, T)

  // ── OUTER WALLS ───────────────────────────────────────────────────────

  // Front wall  (z = maxZ = 12) — two side panels + lintel above main door
  const mW = B.mainDoorHalfW                // 1.5
  const mH = B.mainDoorH                    // 2.6
  // Left panel: minX → −mW
  wallPanel(scene, m.ext,
    (B.minX + (-mW)) / 2, hH, B.maxZ,
    -mW - B.minX, H, T)
  // Right panel: mW → maxX
  wallPanel(scene, m.ext,
    (mW + B.maxX) / 2, hH, B.maxZ,
    B.maxX - mW, H, T)
  // Lintel above main door
  wallPanel(scene, m.ext,
    0, mH + (H - mH) / 2, B.maxZ,
    mW * 2, H - mH, T)

  // Front wall — exterior cladding detail (darker recessed band)
  box(scene, m.frame, cx, H * 0.72, B.maxZ + T / 2,  W * 0.92, 0.08, 0.04)

  // Back wall (z = minZ = −24) — full
  wallPanel(scene, m.ext,
    cx, hH, B.minZ,
    W, H, T)

  // Left wall (x = minX = −22) — full depth
  wallPanel(scene, m.ext,
    B.minX, hH, cz,
    T, H, D, true)

  // Right wall (x = maxX = 22) — full depth
  wallPanel(scene, m.ext,
    B.maxX, hH, cz,
    T, H, D, true)

  // ── WINDOWS on exterior walls ─────────────────────────────────────────
  addWindows(scene, m)

  // ── INTERIOR DIVIDERS ─────────────────────────────────────────────────

  // Lobby divider (z = lobbyZ = 4) — Ops + Fun door gaps
  addDividedWall(scene, m.div, 'z', B.lobbyZ, B.minX, B.maxX, H, T,
    B.leftDoorX,  B.doorHalfW, B.doorH,
    B.rightDoorX, B.doorHalfW, B.doorH)

  // Mid divider (z = midZ = −4) — Design + Engineering door gaps
  addDividedWall(scene, m.div, 'z', B.midZ, B.minX, B.maxX, H, T,
    B.leftDoorX,  B.doorHalfW, B.doorH,
    B.rightDoorX, B.doorHalfW, B.doorH)

  // Centre divider (x = 0, z = minZ → lobbyZ) — left/right room split
  addDividedWall(scene, m.div, 'x', B.centerX, B.minZ, B.lobbyZ, H, T,
    null, 0, 0,
    null, 0, 0)

  // ── ZONE ACCENT STRIPS (glow trim on floor of each room) ─────────────
  addZoneStrips(scene)

  // ── INDOOR CEILING LIGHTS (recessed squares) ─────────────────────────
  addCeilingLights(scene, H)
}

// ── Wall panel (faces +Z or +X direction) ─────────────────────────────────
function wallPanel (scene, mat, x, y, z, w, h, t, isXWall = false) {
  const geo = isXWall
    ? new THREE.BoxGeometry(t, h, w)
    : new THREE.BoxGeometry(w, h, t)
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.set(x, y, z)
  scene.add(mesh)
}

// ── Wall with two door gaps and lintels ───────────────────────────────────
// axis='z': wall at constant z, spanning x from rangeMin→rangeMax
// axis='x': wall at constant x, spanning z from rangeMin→rangeMax
// Pass null doorCenter to skip a door
function addDividedWall (scene, mat, axis, wallPos,
  rangeMin, rangeMax, wallH, wallT,
  door1Centre, door1HalfW, door1H,
  door2Centre, door2HalfW, door2H) {

  const hH = wallH / 2

  const segments = []
  let cursor = rangeMin

  const doors = []
  if (door1Centre !== null) doors.push({ c: door1Centre, hw: door1HalfW, dh: door1H })
  if (door2Centre !== null) doors.push({ c: door2Centre, hw: door2HalfW, dh: door2H })
  doors.sort((a, b) => a.c - b.c)

  doors.forEach(({ c, hw, dh }) => {
    const gMin = c - hw
    const gMax = c + hw
    if (gMin > cursor) segments.push({ from: cursor, to: gMin, full: true })
    // Lintel above door
    segments.push({ from: gMin, to: gMax, full: false, dh })
    cursor = gMax
  })
  if (cursor < rangeMax) segments.push({ from: cursor, to: rangeMax, full: true })

  segments.forEach(({ from, to, full, dh }) => {
    const len = to - from
    const mid = (from + to) / 2
    if (full) {
      // Full-height panel
      addAxisBox(scene, mat, axis, wallPos, mid, hH, len, wallH, wallT)
    } else {
      // Lintel only (above door opening)
      const lintH = wallH - dh
      addAxisBox(scene, mat, axis, wallPos, mid, dh + lintH / 2, len, lintH, wallT)
    }
  })
}

// Helper: add a box for z-axis or x-axis wall
function addAxisBox (scene, mat, axis, wallPos, midAlong, midY, lenAlong, h, t) {
  let geo, x, z
  if (axis === 'z') {
    geo = new THREE.BoxGeometry(lenAlong, h, t)
    x = midAlong; z = wallPos
  } else {
    geo = new THREE.BoxGeometry(t, h, lenAlong)
    x = wallPos;  z = midAlong
  }
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.set(x, midY, z)
  scene.add(mesh)
}

// ── Windows on exterior walls ──────────────────────────────────────────────
function addWindows (scene, m) {
  const winW = 1.8, winH = 1.2, winY = 1.8
  const T = 0.04  // glass thickness
  const fT = 0.06 // frame depth

  const addWin = (x, z, rotY) => {
    // Frame
    const fg = new THREE.Mesh(new THREE.BoxGeometry(winW + 0.12, winH + 0.12, fT), m.frame)
    fg.position.set(x, winY + winH / 2, z)
    fg.rotation.y = rotY
    scene.add(fg)
    // Glass
    const gl = new THREE.Mesh(new THREE.PlaneGeometry(winW, winH), m.glass)
    gl.position.set(x, winY + winH / 2, z)
    gl.rotation.y = rotY
    scene.add(gl)
  }

  const B = BLDG
  // Left exterior wall (x = minX, windows face inward so rotY=π/2)
  addWin(B.minX, -16, Math.PI / 2)
  addWin(B.minX,  -6, Math.PI / 2)
  addWin(B.minX,   8, Math.PI / 2)

  // Right exterior wall
  addWin(B.maxX, -16, -Math.PI / 2)
  addWin(B.maxX,  -6, -Math.PI / 2)
  addWin(B.maxX,   8, -Math.PI / 2)

  // Back wall
  addWin(-12, B.minZ, Math.PI)
  addWin( 12, B.minZ, Math.PI)

  // Front wall — flanking main entrance
  addWin(-11, B.maxZ, 0)
  addWin( 11, B.maxZ, 0)
}

// ── Parapet edge trim around roof ─────────────────────────────────────────
function addParapet (scene, mat, W, D, H, T) {
  const pW = W + 1.0, pD = D + 1.0, pH = 0.4, pT = 0.22, y = H + 0.85
  // Four sides
  const add = (x, z, w, d) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, pH, d), mat)
    m.position.set(x, y, z)
    scene.add(m)
  }
  const hW = pW / 2, hD = pD / 2
  add(0,    -hD + pT / 2,  pW,  pT)  // front
  add(0,     hD - pT / 2,  pW,  pT)  // back
  add(-hW + pT / 2, 0,  pT, pD)  // left
  add( hW - pT / 2, 0,  pT, pD)  // right
}

// ── Zone accent floor strips ───────────────────────────────────────────────
function addZoneStrips (scene) {
  const ZONES = [
    { color: 0xff6ba0, x: B.minX + 0.05, z1: B.midZ,   z2: B.lobbyZ   },  // Ops  (pink)
    { color: 0x44ffaa, x: B.maxX - 0.05, z1: B.midZ,   z2: B.lobbyZ   },  // Fun  (green)
    { color: 0xff9944, x: B.minX + 0.05, z1: B.minZ,   z2: B.midZ     },  // Design (amber)
    { color: 0x44aaff, x: B.maxX - 0.05, z1: B.minZ,   z2: B.midZ     },  // Engineering (blue)
    { color: 0xffffff, x: 0,             z1: B.lobbyZ, z2: B.maxZ - 1 },  // Lobby (white)
  ]
  ZONES.forEach(({ color, x, z1, z2 }) => {
    const mat = new THREE.MeshStandardMaterial({
      color, emissive: color, emissiveIntensity: 1.2,
      roughness: 0.2,
    })
    const d = z2 - z1
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, d), mat)
    m.position.set(x, 0.08, (z1 + z2) / 2)
    scene.add(m)
  })
}

// ── Skirting boards ────────────────────────────────────────────────────────
function addSkirting (scene, mat, h) {
  const B = BLDG, T = 0.06, y = h / 2
  const add = (x, z, w, d) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
    m.position.set(x, y, z)
    scene.add(m)
  }
  const W = B.maxX - B.minX, D = B.maxZ - B.minZ
  // Outer walls interior base
  add(0,     B.maxZ - T / 2, W,     T)
  add(0,     B.minZ + T / 2, W,     T)
  add(B.minX + T / 2, (B.minZ + B.maxZ) / 2, T, D)
  add(B.maxX - T / 2, (B.minZ + B.maxZ) / 2, T, D)
  // Dividers
  add(0, B.lobbyZ - T / 2, W, T)
  add(0, B.midZ   + T / 2, W, T)
  add(B.centerX, (B.minZ + B.lobbyZ) / 2, T, B.lobbyZ - B.minZ)
}

// ── Ceiling light housings ─────────────────────────────────────────────────
function addCeilingLights (scene, H) {
  const mat = new THREE.MeshStandardMaterial({
    color: 0xfff8ee, emissive: 0xfff5dd, emissiveIntensity: 1.5,
    roughness: 0.6,
  })
  const positions = [
    // Lobby
    [  0,  8 ], [ -10,  8 ], [ 10,  8 ],
    // Ops / Fun
    [ -11, 0 ], [ 11, 0 ],
    // Design / Eng
    [ -11,-14 ], [ 11,-14 ],
  ]
  positions.forEach(([x, z]) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.04, 1.2), mat)
    m.position.set(x, H - 0.03, z)
    scene.add(m)
  })
}
