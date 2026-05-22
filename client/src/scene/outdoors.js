import * as THREE from 'three'
import { BLDG } from './building.js'

// ── Exterior environment ──────────────────────────────────────────────────
export function buildOutdoors (scene) {
  const B = BLDG

  // ── GRASS — medium green, natural afternoon colour ────────────────────
  const grassMat = new THREE.MeshStandardMaterial({
    color: 0x5a8c3c, roughness: 0.96, metalness: 0,
  })
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), grassMat)
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -0.01
  ground.receiveShadow = true
  scene.add(ground)

  // ── CONCRETE PATH (entrance) ──────────────────────────────────────────
  const pathMat = new THREE.MeshStandardMaterial({
    color: 0xc0bab0, roughness: 0.88, metalness: 0,
  })
  const path = new THREE.Mesh(new THREE.BoxGeometry(5, 0.06, 18), pathMat)
  path.position.set(0, 0.03, 19)
  path.receiveShadow = true
  scene.add(path)

  // Wide entrance plaza
  const plaza = new THREE.Mesh(new THREE.BoxGeometry(14, 0.06, 8), pathMat)
  plaza.position.set(0, 0.03, 14.5)
  plaza.receiveShadow = true
  scene.add(plaza)

  // Paving extension along the front of the building
  const frontPave = new THREE.Mesh(new THREE.BoxGeometry(B.maxX - B.minX, 0.06, 4), pathMat)
  frontPave.position.set(0, 0.03, B.maxZ + 2)
  frontPave.receiveShadow = true
  scene.add(frontPave)

  // ── BUILDING FOUNDATION ────────────────────────────────────────────────
  const foundMat = new THREE.MeshStandardMaterial({
    color: 0xb0aba0, roughness: 0.90, metalness: 0,
  })
  const W = B.maxX - B.minX
  const D = B.maxZ - B.minZ
  const found = new THREE.Mesh(new THREE.BoxGeometry(W + 0.8, 0.22, D + 0.8), foundMat)
  found.position.set(0, -0.11, (B.minZ + B.maxZ) / 2)
  scene.add(found)

  // ── TREES ─────────────────────────────────────────────────────────────
  const treePositions = [
    [-30, -18], [-30, 5], [-30, 20],
    [ 30, -18], [ 30, 5], [ 30, 20],
    [-12,  26], [ 12, 26],
    [-36,  12], [ 36, 12],
    [-28, -30], [ 28, -30],
  ]
  treePositions.forEach(([x, z]) => addTree(scene, x, z))

  // ── STREET LAMPS ──────────────────────────────────────────────────────
  ;[[-4, 24], [4, 24], [-14, 14], [14, 14]].forEach(([x, z]) => addLamp(scene, x, z))

  // ── PARKED CARS in the car park (decorative, far side) ────────────────
  addCarPark(scene)

  // ── DISTANT HILLS ─────────────────────────────────────────────────────
  addHorizon(scene)
}

// ── Tree ──────────────────────────────────────────────────────────────────
function addTree (scene, x, z) {
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5a3518, roughness: 0.92 })
  const leafMat  = new THREE.MeshStandardMaterial({ color: 0x3a7228, roughness: 0.95 })

  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.26, 2.2, 8), trunkMat)
  trunk.position.set(x, 1.1, z)
  trunk.castShadow = true
  scene.add(trunk)

  // Stacked cones give a believable deciduous silhouette
  // (leading ; prevents ASI treating [[ as a subscript on scene.add's return value)
  ;[[1.8, 2.5, 3.4], [1.3, 2.0, 4.8], [0.7, 1.4, 6.0]].forEach(([r, h, y]) => {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(r, h, 9), leafMat)
    cone.position.set(x, y, z)
    cone.castShadow = true
    scene.add(cone)
  })
}

// ── Street lamp ───────────────────────────────────────────────────────────
function addLamp (scene, x, z) {
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x606060, roughness: 0.55, metalness: 0.75 })
  const headMat = new THREE.MeshStandardMaterial({
    color: 0xfff8d8, emissive: 0xfff0b0, emissiveIntensity: 1.5, roughness: 0.4,
  })

  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 5.0, 8), poleMat)
  pole.position.set(x, 2.5, z)
  pole.castShadow = true
  scene.add(pole)

  // Rectangular arm bracket
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.9), poleMat)
  arm.position.set(x, 5.1, z - 0.4)
  scene.add(arm)

  // Flat rectangular housing (more realistic than a sphere)
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.14, 0.28), headMat)
  head.position.set(x, 4.95, z - 0.8)
  scene.add(head)

  // Soft warm light — daytime so keep it modest
  const light = new THREE.PointLight(0xffe8a0, 6, 12)
  light.position.set(x, 4.95, z - 0.8)
  scene.add(light)
}

// ── Simple parked cars (decorative blocks) ────────────────────────────────
function addCarPark (scene) {
  const bodyColors = [0x2255aa, 0xaa2222, 0x888880, 0x224422, 0x888888]
  const wheelMat   = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.8 })

  const spots = [
    [-40, -22], [-40, -16], [-40, -10],
    [ 40, -22], [ 40, -16], [ 40, -10],
  ]
  spots.forEach(([x, z], i) => {
    const col   = bodyColors[i % bodyColors.length]
    const bodyMat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.45, metalness: 0.3 })

    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(4.4, 1.4, 2.0), bodyMat)
    body.position.set(x, 0.72, z)
    body.castShadow = true
    scene.add(body)

    // Roof
    const roof = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.7, 1.85), bodyMat)
    roof.position.set(x - 0.2, 1.8, z)
    scene.add(roof)

    // Wheels
    ;[[-1.5, -1.05], [-1.5, 1.05], [1.5, -1.05], [1.5, 1.05]].forEach(([wx, wz]) => {
      const w = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.22, 12), wheelMat)
      w.rotation.z = Math.PI / 2
      w.position.set(x + wx, 0.36, z + wz)
      scene.add(w)
    })
  })
}

// ── Horizon hills ─────────────────────────────────────────────────────────
function addHorizon (scene) {
  const hillMat = new THREE.MeshStandardMaterial({ color: 0x4a7040, roughness: 1 })
  ;[
    [-80, -60, 30, 8, 20],
    [ 80, -60, 28, 7, 18],
    [  0, -80, 40, 6, 25],
    [-50, -70, 35, 9, 22],
    [ 55, -70, 32, 7, 20],
  ].forEach(([x, z, w, h, d]) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), hillMat)
    m.position.set(x, h / 2 - 2, z)
    scene.add(m)
  })
}
