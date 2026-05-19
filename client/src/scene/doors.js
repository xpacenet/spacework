import * as THREE from 'three'

// These Z positions are the GLB divider walls in Three.js world space
// (Blender Y=6.5 / Y=-5.5 → after Y-up export + 180° rotation + y lift)
export const DOOR_Z = {
  BRIDGE_LAB: 6.5,
  LAB_LOUNGE: -5.5,
}

const DOOR_W  = 3.4    // doorway opening width  (must match collision.js)
const DOOR_H  = 2.6    // doorway opening height
const DOOR_T  = 0.22   // frame thickness
const WALL_H  = 5.8    // full wall height
const SHIP_W  = 13.8   // full interior width

const DOORS = [
  {
    z: DOOR_Z.BRIDGE_LAB,
    colorA: 0x00ffcc,  // Lab side
    colorB: 0x4466ff,  // Bridge side
    labelA: 'LAB',
    labelB: 'BRIDGE',
  },
  {
    z: DOOR_Z.LAB_LOUNGE,
    colorA: 0xaa55ff,  // Lounge side
    colorB: 0x00ffcc,  // Lab side
    labelA: 'LOUNGE',
    labelB: 'LAB',
  },
]

export function buildDoors(scene) {
  DOORS.forEach(d => buildDoor(scene, d))
}

// After GLB loads, find and hide the solid baked-in divider walls
export function hideGLBDividers(shipScene) {
  const box3 = new THREE.Box3()
  shipScene.traverse(child => {
    if (!child.isMesh) return
    box3.setFromObject(child)
    const center = box3.getCenter(new THREE.Vector3())
    const size   = box3.getSize(new THREE.Vector3())

    // Zone dividers are thin (Z depth < 1), wide (X > 10), at Z ≈ 6.5 or -5.5
    const isWide = size.x > 10
    const isThin = size.z < 1.5
    const atBridgeLab = Math.abs(center.z - DOOR_Z.BRIDGE_LAB) < 1.5
    const atLabLounge = Math.abs(center.z - DOOR_Z.LAB_LOUNGE) < 1.5

    if (isWide && isThin && (atBridgeLab || atLabLounge)) {
      child.visible = false
    }
  })
}

function buildDoor(scene, d) {
  const group = new THREE.Group()
  group.position.z = d.z
  scene.add(group)

  // Wall material — matches ship hull
  const matWall  = new THREE.MeshStandardMaterial({ color: 0x111825, roughness: 0.4, metalness: 0.85 })
  const matFrame = new THREE.MeshStandardMaterial({ color: 0x1e2d45, roughness: 0.25, metalness: 0.95 })
  const matGlowA = glowMat(d.colorA)
  const matGlowB = glowMat(d.colorB)

  const sideW = (SHIP_W - DOOR_W) / 2   // width of wall section each side

  // ── Replacement wall sections (left + right of doorway) ────────────────
  // Left wall chunk
  addBox(group, matWall,
    -(DOOR_W / 2 + sideW / 2), WALL_H / 2, 0,
    sideW, WALL_H, DOOR_T * 2
  )
  // Right wall chunk
  addBox(group, matWall,
    (DOOR_W / 2 + sideW / 2), WALL_H / 2, 0,
    sideW, WALL_H, DOOR_T * 2
  )
  // Wall above doorway
  addBox(group, matWall,
    0, DOOR_H + (WALL_H - DOOR_H) / 2, 0,
    DOOR_W + DOOR_T * 2, WALL_H - DOOR_H, DOOR_T * 2
  )

  // ── Door frame ──────────────────────────────────────────────────────────
  // Left post
  addBox(group, matFrame,
    -(DOOR_W / 2 + DOOR_T / 2), DOOR_H / 2, 0,
    DOOR_T, DOOR_H + DOOR_T, DOOR_T * 3
  )
  // Right post
  addBox(group, matFrame,
    (DOOR_W / 2 + DOOR_T / 2), DOOR_H / 2, 0,
    DOOR_T, DOOR_H + DOOR_T, DOOR_T * 3
  )
  // Top lintel
  addBox(group, matFrame,
    0, DOOR_H + DOOR_T / 2, 0,
    DOOR_W + DOOR_T * 2, DOOR_T, DOOR_T * 3
  )

  // ── Glow strips on frame inner edges ────────────────────────────────────
  addBox(group, matGlowA, -DOOR_W / 2, DOOR_H / 2, 0.05, 0.05, DOOR_H, 0.05)  // left edge
  addBox(group, matGlowB,  DOOR_W / 2, DOOR_H / 2, 0.05, 0.05, DOOR_H, 0.05)  // right edge
  addBox(group, matGlowA,  0, DOOR_H,  0.05, DOOR_W, 0.05, 0.05)               // top edge

  // ── Floor threshold ─────────────────────────────────────────────────────
  const threshMat = new THREE.MeshStandardMaterial({
    color: d.colorA, emissive: d.colorA, emissiveIntensity: 3,
    roughness: 0.1, transparent: true, opacity: 0.9,
  })
  addBox(group, threshMat, 0, 0.015, 0, DOOR_W, 0.03, 0.25)

  // ── Arch light ──────────────────────────────────────────────────────────
  const archLight = new THREE.PointLight(d.colorA, 30, 10)
  archLight.position.set(0, DOOR_H, 0)
  group.add(archLight)

  // Ambient spill into each side
  const spill1 = new THREE.PointLight(d.colorA, 15, 7)
  spill1.position.set(0, 1.5,  2)
  group.add(spill1)
  const spill2 = new THREE.PointLight(d.colorB, 15, 7)
  spill2.position.set(0, 1.5, -2)
  group.add(spill2)

  // ── Zone label signs ────────────────────────────────────────────────────
  addSign(group,  0, DOOR_H + 0.55,  0.2, d.labelB, d.colorB)  // +Z side
  addSign(group,  0, DOOR_H + 0.55, -0.2, d.labelA, d.colorA)  // -Z side

  // ── Pulsing floor arrows ─────────────────────────────────────────────────
  addFloorArrow(group,  0, 0, 0.9,  d.colorA, 0)
  addFloorArrow(group,  0, 0, -0.9, d.colorB, Math.PI)

  // Pulse animation for glow emissive
  let t = 0
  function pulse() {
    requestAnimationFrame(pulse)
    t += 0.025
    matGlowA.emissiveIntensity = 2.0 + Math.sin(t)       * 1.0
    matGlowB.emissiveIntensity = 2.0 + Math.sin(t + 1.6) * 1.0
    archLight.intensity = 28 + Math.sin(t * 0.8) * 6
  }
  pulse()
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function glowMat(color) {
  return new THREE.MeshStandardMaterial({
    color, emissive: color, emissiveIntensity: 2.5, roughness: 0.1,
  })
}

function addBox(parent, mat, x, y, z, w, h, d) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
  m.position.set(x, y, z)
  parent.add(m)
  return m
}

function addSign(group, x, y, z, label, color) {
  const cvs = document.createElement('canvas')
  cvs.width = 256; cvs.height = 64
  const ctx = cvs.getContext('2d')
  ctx.fillStyle = 'rgba(0,5,20,0.9)'
  ctx.roundRect(4, 4, 248, 56, 12); ctx.fill()
  const hex = '#' + color.toString(16).padStart(6, '0')
  ctx.strokeStyle = hex; ctx.lineWidth = 2
  ctx.roundRect(4, 4, 248, 56, 12); ctx.stroke()
  ctx.fillStyle = hex
  ctx.font = 'bold 28px Inter, monospace'
  ctx.textAlign = 'center'
  ctx.fillText(label, 128, 40)

  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: new THREE.CanvasTexture(cvs), transparent: true, depthTest: false,
  }))
  sprite.position.set(x, y, z)
  sprite.scale.set(2.0, 0.5, 1)
  group.add(sprite)
}

function addFloorArrow(group, x, y, z, color, rotY) {
  const shape = new THREE.Shape()
  shape.moveTo( 0,    0)
  shape.lineTo( 0.28, 0.35)
  shape.lineTo( 0.12, 0.35)
  shape.lineTo( 0.12, 0.8)
  shape.lineTo(-0.12, 0.8)
  shape.lineTo(-0.12, 0.35)
  shape.lineTo(-0.28, 0.35)
  shape.closePath()

  const mat = new THREE.MeshStandardMaterial({
    color, emissive: color, emissiveIntensity: 2, roughness: 0.1,
    transparent: true, opacity: 0.85,
  })
  const mesh = new THREE.Mesh(new THREE.ShapeGeometry(shape), mat)
  mesh.position.set(x, y + 0.02, z)
  mesh.rotation.set(-Math.PI / 2, 0, rotY)
  group.add(mesh)

  let t = rotY
  function pulse() {
    requestAnimationFrame(pulse)
    t += 0.02
    mat.opacity = 0.5 + Math.abs(Math.sin(t)) * 0.5
  }
  pulse()
}
