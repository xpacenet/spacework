import * as THREE from 'three'
import { buildBuilding }  from './building.js'
import { buildOutdoors }  from './outdoors.js'
import { buildDoors }     from './doors.js'

// ── Scene initialiser ─────────────────────────────────────────────────────
export function initScene (onProgress) {
  const canvas   = document.getElementById('canvas')
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type    = THREE.PCFSoftShadowMap
  renderer.toneMapping        = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.0

  const scene = new THREE.Scene()

  // ── Daytime sky — clear afternoon blue ───────────────────────────────────
  scene.background = new THREE.Color(0x8ec8e8)
  scene.fog = new THREE.FogExp2(0xaad4e8, 0.007)

  const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 300)
  camera.position.set(0, 1.7, 22)

  // ── LIGHTING ──────────────────────────────────────────────────────────────

  // Broad soft ambient — fills every shadow without washing out
  scene.add(new THREE.AmbientLight(0xfff8f0, 0.9))

  // Sky/ground hemisphere — warm sky, green-grey ground bounce
  scene.add(new THREE.HemisphereLight(0x9ecce8, 0x5a7a48, 0.9))

  // Sun — strong directional, afternoon angle, casts soft shadows
  const sun = new THREE.DirectionalLight(0xfff5d8, 3.2)
  sun.position.set(40, 70, 35)
  sun.castShadow = true
  sun.shadow.mapSize.set(2048, 2048)
  sun.shadow.camera.near   = 1
  sun.shadow.camera.far    = 120
  sun.shadow.camera.left   = -50
  sun.shadow.camera.right  =  50
  sun.shadow.camera.top    =  50
  sun.shadow.camera.bottom = -50
  sun.shadow.radius        = 3
  sun.shadow.bias          = -0.001
  scene.add(sun)

  // Soft sky-fill from opposite side (blue tint, no shadows)
  const fill = new THREE.DirectionalLight(0xc8ddf5, 0.6)
  fill.position.set(-25, 30, -20)
  scene.add(fill)

  // ── Interior ceiling lights — warm white, one per room ───────────────────
  // These work alongside the architectural ceiling panels in building.js.
  // Intensity is high enough to push light into corners realistically.
  const roomLights = [
    { pos: [ -5, 3.8, -14], color: 0xfff0e0, intensity: 25, radius: 18 },  // Design
    { pos: [  5, 3.8, -14], color: 0xfff0e0, intensity: 25, radius: 18 },  // Engineering
    { pos: [-11, 3.8,   0], color: 0xfff4e8, intensity: 22, radius: 16 },  // Ops
    { pos: [ 11, 3.8,   0], color: 0xfff4e8, intensity: 22, radius: 16 },  // Fun
    { pos: [  0, 3.8,   8], color: 0xfff8f4, intensity: 28, radius: 22 },  // Lobby
  ]
  roomLights.forEach(({ pos, color, intensity, radius }) => {
    const pl = new THREE.PointLight(color, intensity, radius)
    pl.position.set(...pos)
    scene.add(pl)
  })

  // ── WORLD GEOMETRY ────────────────────────────────────────────────────────
  onProgress?.(10, 'Laying foundations…')
  buildOutdoors(scene)
  onProgress?.(35, 'Building structure…')
  buildBuilding(scene)
  onProgress?.(65, 'Installing doors…')
  const doors = buildDoors(scene)
  onProgress?.(90, 'Finishing touches…')

  scene.userData.doors = doors

  // ── RESIZE ────────────────────────────────────────────────────────────────
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  // ── RENDER LOOP ───────────────────────────────────────────────────────────
  const clock = new THREE.Clock()
  function animate () {
    requestAnimationFrame(animate)
    const delta = clock.getDelta()
    doors.update(delta)
    renderer.render(scene, camera)
  }
  animate()

  let _onLoaded = null
  onProgress?.(100, 'Ready!')
  setTimeout(() => { if (_onLoaded) _onLoaded() }, 200)

  return {
    scene, camera, renderer,
    onShipLoaded: cb => { _onLoaded = cb },
  }
}
