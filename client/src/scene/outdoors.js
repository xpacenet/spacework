import * as THREE from 'three'
import { BLDG } from './building.js'

// ── Exterior environment ──────────────────────────────────────────────────
export function buildOutdoors (scene) {
  const B = BLDG

  // ── GRASS ──────────────────────────────────────────────────────────────
  const grassMat = new THREE.MeshStandardMaterial({
    color: 0x4a7c3f, roughness: 0.97, metalness: 0,
  })
  const grass = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), grassMat)
  grass.rotation.x = -Math.PI / 2
  grass.position.y = -0.01
  scene.add(grass)

  // ── CONCRETE PATH (entrance) ──────────────────────────────────────────
  const pathMat = new THREE.MeshStandardMaterial({
    color: 0xbeb8b0, roughness: 0.88, metalness: 0,
  })
  // Main path from player spawn to front door
  const path = new THREE.Mesh(new THREE.BoxGeometry(5, 0.06, 18), pathMat)
  path.position.set(0, 0.03, 19)  // z: 12 (building face) to 28 (near spawn)
  scene.add(path)

  // Wide entrance plaza in front of building
  const plaza = new THREE.Mesh(new THREE.BoxGeometry(12, 0.06, 8), pathMat)
  plaza.position.set(0, 0.03, 14.5)
  scene.add(plaza)

  // ── BUILDING FOUNDATION ────────────────────────────────────────────────
  // Raised concrete base the building sits on
  const foundMat = new THREE.MeshStandardMaterial({
    color: 0xa8a298, roughness: 0.9, metalness: 0,
  })
  const W = B.maxX - B.minX
  const D = B.maxZ - B.minZ
  const found = new THREE.Mesh(new THREE.BoxGeometry(W + 0.8, 0.2, D + 0.8), foundMat)
  found.position.set(0, -0.1, (B.minZ + B.maxZ) / 2)
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
  const lampPositions = [
    [-4, 24], [4, 24],     // flanking path
    [-14, 14], [14, 14],   // plaza corners
  ]
  lampPositions.forEach(([x, z]) => addLamp(scene, x, z))

  // ── DISTANT HILLS / GROUND VARIATION ─────────────────────────────────
  // Low dark hills at horizon
  addHorizon(scene)
}

// ── Tree ──────────────────────────────────────────────────────────────────
function addTree (scene, x, z) {
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5a3820, roughness: 0.9 })
  const leafMat  = new THREE.MeshStandardMaterial({ color: 0x2d6e28, roughness: 0.95 })

  // Trunk
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.26, 2.2, 7), trunkMat)
  trunk.position.set(x, 1.1, z)
  scene.add(trunk)

  // Leaf canopy — stacked cones
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

// ── Street lamp ───────────────────────────────────────────────────────────
function addLamp (scene, x, z) {
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x444440, roughness: 0.6, metalness: 0.7 })
  const headMat = new THREE.MeshStandardMaterial({
    color: 0xfff5cc, emissive: 0xfff0aa, emissiveIntensity: 2.0, roughness: 0.4,
  })

  // Pole
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 4.5, 7), poleMat)
  pole.position.set(x, 2.25, z)
  scene.add(pole)

  // Lamp head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), headMat)
  head.position.set(x, 4.7, z)
  scene.add(head)

  // Glow point light
  const light = new THREE.PointLight(0xfff0aa, 8, 12)
  light.position.set(x, 4.7, z)
  scene.add(light)
}

// ── Horizon hills ─────────────────────────────────────────────────────────
function addHorizon (scene) {
  const hillMat = new THREE.MeshStandardMaterial({ color: 0x3a5e2a, roughness: 1 })
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
