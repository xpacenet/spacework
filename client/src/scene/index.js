import * as THREE from 'three'
import { buildBuilding } from './building.js'
import { buildOutdoors }  from './outdoors.js'
import { buildDoors }     from './doors.js'

// ── Scene initialiser ─────────────────────────────────────────────────────
export function initScene (onProgress) {
  const canvas   = document.getElementById('canvas')
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = false
  renderer.toneMapping        = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.4

  const scene = new THREE.Scene()
  // Daytime sky — light blue with gentle haze
  scene.background = new THREE.Color(0x7ec8e8)
  scene.fog = new THREE.FogExp2(0x9dd5e8, 0.009)

  // Player starts outside (z ≈ 22), 80° FOV gives a natural first-person feel
  const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 300)
  camera.position.set(0, 1.7, 22)

  // ── LIGHTING ──────────────────────────────────────────────────────────────

  // Bright soft ambient so every surface is legible
  scene.add(new THREE.AmbientLight(0xffffff, 1.4))

  // Hemisphere: warm sky blue above, cool green-grey below (outdoor feel)
  scene.add(new THREE.HemisphereLight(0x7ec8e8, 0x4a7c3f, 1.2))

  // Sun — directional, coming from upper-right-front
  const sun = new THREE.DirectionalLight(0xfff8e8, 3.2)
  sun.position.set(30, 60, 40)
  scene.add(sun)

  // Softer fill from the opposite side
  const fill = new THREE.DirectionalLight(0xd0e8ff, 0.8)
  fill.position.set(-20, 30, -20)
  scene.add(fill)

  // Interior zone lights (tinted, warm-ish)
  const roomLights = [
    { pos: [-11, 3.8, -14], color: 0xffb8d0, intensity: 40, radius: 18 },  // Design  (pink)
    { pos: [ 11, 3.8, -14], color: 0x88ccff, intensity: 40, radius: 18 },  // Engineering (blue)
    { pos: [-11, 3.8,   0], color: 0xffd090, intensity: 35, radius: 16 },  // Ops  (amber)
    { pos: [ 11, 3.8,   0], color: 0x88ffcc, intensity: 35, radius: 16 },  // Fun  (green)
    { pos: [  0, 3.8,   8], color: 0xffffff, intensity: 30, radius: 20 },  // Lobby (white)
  ]
  roomLights.forEach(({ pos, color, intensity, radius }) => {
    const pl = new THREE.PointLight(color, intensity, radius)
    pl.position.set(...pos)
    scene.add(pl)
    // Low fill
    const pl2 = new THREE.PointLight(color, intensity * 0.4, radius * 0.5)
    pl2.position.set(pos[0], 0.5, pos[2])
    scene.add(pl2)
  })

  // Outdoor lamp post lights added from outdoors.js (done there)

  // ── WORLD GEOMETRY ────────────────────────────────────────────────────────
  onProgress?.(10, 'Laying foundations…')
  buildOutdoors(scene)
  onProgress?.(30, 'Building structure…')
  buildBuilding(scene)
  onProgress?.(55, 'Installing doors…')
  const doors = buildDoors(scene)
  onProgress?.(90, 'Finishing touches…')

  // Expose doors for per-frame update and collision queries
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
    // Advance door animations each frame
    doors.update(delta)
    renderer.render(scene, camera)
  }
  animate()

  // Ready immediately — no async asset loading
  let _onLoaded = null
  onProgress?.(100, 'Ready!')
  setTimeout(() => { if (_onLoaded) _onLoaded() }, 200)

  return {
    scene, camera, renderer,
    onShipLoaded: cb => { _onLoaded = cb },
  }
}
