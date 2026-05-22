import * as THREE from 'three'
import { EffectComposer }  from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass }      from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { buildBuilding }   from './building.js'
import { buildOutdoors }   from './outdoors.js'
import { buildDoors }      from './doors.js'
import { buildStarfield }  from './environment.js'

// ── Scene initialiser ─────────────────────────────────────────────────────
export function initScene (onProgress) {
  const canvas   = document.getElementById('canvas')
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = false
  renderer.toneMapping        = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.1

  const scene = new THREE.Scene()

  // ── Night sky ─────────────────────────────────────────────────────────────
  scene.background = new THREE.Color(0x05070e)
  scene.fog = new THREE.FogExp2(0x05070e, 0.013)

  const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 300)
  camera.position.set(0, 1.7, 22)

  // ── LIGHTING ──────────────────────────────────────────────────────────────

  // Very low ambient — everything relies on the neon zone lights
  scene.add(new THREE.AmbientLight(0x06101e, 0.9))

  // Hemisphere: cool midnight sky above, warm city-glow orange below
  scene.add(new THREE.HemisphereLight(0x0a0f20, 0x1a0e06, 0.7))

  // Cool moonlight — soft, directional, no hard shadows
  const moon = new THREE.DirectionalLight(0x6677bb, 0.6)
  moon.position.set(-30, 80, -40)
  scene.add(moon)

  // Interior zone lights — vivid neon, plenty of radius to paint the walls
  const roomLights = [
    { pos: [-11, 3.6, -14], color: 0xff2288, intensity: 80, radius: 22 },  // Design  — hot pink
    { pos: [ 11, 3.6, -14], color: 0x2299ff, intensity: 80, radius: 22 },  // Engineering — electric blue
    { pos: [-11, 3.6,   0], color: 0xff8800, intensity: 70, radius: 20 },  // Ops  — amber
    { pos: [ 11, 3.6,   0], color: 0x00ffbb, intensity: 70, radius: 20 },  // Fun  — neon mint
    { pos: [  0, 3.6,   8], color: 0x99aaff, intensity: 55, radius: 24 },  // Lobby — lavender-white
  ]
  roomLights.forEach(({ pos, color, intensity, radius }) => {
    const pl = new THREE.PointLight(color, intensity, radius)
    pl.position.set(...pos)
    scene.add(pl)
    // Low floor-level fill so neon bleeds onto the dark floor
    const pl2 = new THREE.PointLight(color, intensity * 0.35, radius * 0.45)
    pl2.position.set(pos[0], 0.3, pos[2])
    scene.add(pl2)
  })

  // ── WORLD GEOMETRY ────────────────────────────────────────────────────────
  onProgress?.(10, 'Laying foundations…')
  buildOutdoors(scene)
  onProgress?.(25, 'Building structure…')
  buildBuilding(scene)
  onProgress?.(50, 'Installing doors…')
  const doors = buildDoors(scene)
  onProgress?.(75, 'Lighting the stars…')
  buildStarfield(scene)
  onProgress?.(90, 'Finishing touches…')

  scene.userData.doors = doors

  // ── POST-PROCESSING ───────────────────────────────────────────────────────
  // UnrealBloom makes the emissive zone strips, ceiling lights and lamp heads
  // actually glow. Threshold is low enough to catch them without blooming
  // the dark wall surfaces.
  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.75,   // strength
    0.55,   // radius
    0.28    // threshold — only bright emissive surfaces bloom
  )
  composer.addPass(bloom)

  // ── RESIZE ────────────────────────────────────────────────────────────────
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    composer.setSize(window.innerWidth, window.innerHeight)
  })

  // ── RENDER LOOP ───────────────────────────────────────────────────────────
  const clock = new THREE.Clock()
  function animate () {
    requestAnimationFrame(animate)
    const delta = clock.getDelta()
    doors.update(delta)
    composer.render()   // bloom composer replaces direct renderer.render
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
