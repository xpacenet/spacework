import * as THREE from 'three'
import { BLDG } from './building.js'

// ── Exterior environment ──────────────────────────────────────────────────
export function buildOutdoors (scene) {
  const B = BLDG

  // ── GROUND — very dark tarmac / night earth ────────────────────────────
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x07090d, roughness: 0.96, metalness: 0.04,
  })
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), groundMat)
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -0.01
  scene.add(ground)

  // ── CONCRETE PATH (entrance) ──────────────────────────────────────────
  const pathMat = new THREE.MeshStandardMaterial({
    color: 0x14161c, roughness: 0.85, metalness: 0.10,
  })
  // Main path from spawn to front door
  const path = new THREE.Mesh(new THREE.BoxGeometry(5, 0.06, 18), pathMat)
  path.position.set(0, 0.03, 19)
  scene.add(path)

  // Wide entrance plaza
  const plaza = new THREE.Mesh(new THREE.BoxGeometry(12, 0.06, 8), pathMat)
  plaza.position.set(0, 0.03, 14.5)
  scene.add(plaza)

  // ── BUILDING FOUNDATION ────────────────────────────────────────────────
  const foundMat = new THREE.MeshStandardMaterial({
    color: 0x0e1018, roughness: 0.88, metalness: 0.12,
  })
  const W = B.maxX - B.minX
  const D = B.maxZ - B.minZ
  const found = new THREE.Mesh(new THREE.BoxGeometry(W + 0.8, 0.2, D + 0.8), foundMat)
  found.position.set(0, -0.1, (B.minZ + B.maxZ) / 2)
  scene.add(found)

  // ── TREES — dark silhouettes against the night sky ────────────────────
  const treePositions = [
    [-30, -18], [-30, 5], [-30, 20],
    [ 30, -18], [ 30, 5], [ 30, 20],
    [-12,  26], [ 12, 26],
    [-36,  12], [ 36, 12],
    [-28, -30], [ 28, -30],
  ]
  treePositions.forEach(([x, z]) => addTree(scene, x, z))

  // ── STREET LAMPS ──────────────────────────────────────────────────────
  const lampPositions = [
    [-4, 24], [4, 24],
    [-14, 14], [14, 14],
  ]
  lampPositions.forEach(([x, z]) => addLamp(scene, x, z))

  // ── DISTANT CITY GLOW — low horizon mist ─────────────────────────────
  addHorizon(scene)
}

// ── Tree — dark silhouette ────────────────────────────────────────────────
function addTree (scene, x, z) {
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x0e0906, roughness: 0.95 })
  const leafMat  = new THREE.MeshStandardMaterial({ color: 0x060e04, roughness: 0.97 })

  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.26, 2.2, 7), trunkMat)
  trunk.position.set(x, 1.1, z)
  scene.add(trunk)

  const cone1 = new THREE.Mesh(new THREE.ConeGeometry(1.8, 2.5, 8), leafMat)
  cone1.position.set(x, 3.4, z)
  scene.add(cone1)
  const cone2 = new THREE.Mesh(new THREE.ConeGeometry(1.3, 2.0, 8), leafMat)
  cone2.position.set(x, 4.8, z)
  scene.add(cone2)
  const cone3 = new THREE.Mesh(new THREE.ConeGeometry(0.7, 1.4, 8), leafMat)
  cone3.position.set(x, 6.0, z)
  scene.add(cone3)
}

// ── Street lamp — warm sodium glow ───────────────────────────────────────
function addLamp (scene, x, z) {
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x1a1c20, roughness: 0.5, metalness: 0.8 })
  const headMat = new THREE.MeshStandardMaterial({
    color: 0xffffff, emissive: 0xffe8aa, emissiveIntensity: 5.0, roughness: 0.3,
  })

  // Pole
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 4.5, 7), poleMat)
  pole.position.set(x, 2.25, z)
  scene.add(pole)

  // Lamp head — glows hard with bloom
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), headMat)
  head.position.set(x, 4.7, z)
  scene.add(head)

  // Strong warm point light
  const light = new THREE.PointLight(0xffcc66, 18, 16)
  light.position.set(x, 4.7, z)
  scene.add(light)

  // Tiny ground halo (very soft, low fill)
  const halo = new THREE.PointLight(0xffaa44, 6, 6)
  halo.position.set(x, 0.2, z)
  scene.add(halo)
}

// ── Horizon — dark hills silhouette ──────────────────────────────────────
function addHorizon (scene) {
  const hillMat = new THREE.MeshStandardMaterial({ color: 0x060809, roughness: 1 })
  const hillData = [
    [-80, -60, 30, 8, 20],
    [ 80, -60, 28, 7, 18],
    [  0, -80, 40, 6, 25],
    [-50, -70, 35, 9, 22],
    [ 55, -70, 32, 7, 20],
  ]
  hillData.forEach(([x, z, w, h, d]) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), hillMat)
    m.position.set(x, h / 2 - 2, z)
    scene.add(m)
  })
}
