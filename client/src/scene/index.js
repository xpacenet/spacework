import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { buildStarfield } from './environment.js'
import { buildDoors, hideGLBDividers } from './doors.js'

export function initScene(onProgress) {
  const canvas   = document.getElementById('canvas')
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = false
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 2.2   // much brighter overall

  const scene  = new THREE.Scene()
  scene.background = new THREE.Color(0x00010a)
  scene.fog = new THREE.FogExp2(0x00010a, 0.018)  // lighter fog

  const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 300)
  camera.position.set(0, 1.7, 12)

  buildStarfield(scene)
  buildDoors(scene)

  // ── LIGHTING ─────────────────────────────────────────────────────────────
  // Strong white ambient so everything is readable
  scene.add(new THREE.AmbientLight(0xffffff, 3.0))

  // Hemisphere light — warm ceiling, cool floor bounce
  const hemi = new THREE.HemisphereLight(0x8ab0ff, 0x334466, 2.5)
  scene.add(hemi)

  // Zone key lights — bright, wide radius
  const zoneLights = [
    { pos: [0, 4,  14], color: 0x6699ff, intensity: 120, radius: 22 },  // Bridge — blue
    { pos: [0, 4,   0], color: 0x00ffcc, intensity: 120, radius: 22 },  // Lab    — cyan
    { pos: [0, 4, -12], color: 0xaa55ff, intensity: 100, radius: 22 },  // Lounge — purple
  ]
  zoneLights.forEach(({ pos, color, intensity, radius }) => {
    const pl = new THREE.PointLight(color, intensity, radius)
    pl.position.set(...pos)
    scene.add(pl)
    // Second fill light lower down so faces/desks are lit
    const pl2 = new THREE.PointLight(color, 60, radius * 0.7)
    pl2.position.set(pos[0], 0.5, pos[2])
    scene.add(pl2)
  })

  // Extra corridor fill lights
  const fills = [
    [0, 2,  7], [0, 2, -6],   // between zones
    [-4, 2, 14], [4, 2, 14],  // bridge sides
    [-4, 2,  0], [4, 2,  0],  // lab sides
  ]
  fills.forEach(pos => {
    const fl = new THREE.PointLight(0xffffff, 30, 12)
    fl.position.set(...pos)
    scene.add(fl)
  })

  // ── LOAD GLB ─────────────────────────────────────────────────────────────
  let _onLoaded = null
  const notifyLoaded = () => { if (_onLoaded) _onLoaded() }

  const loader = new GLTFLoader()
  onProgress?.(10, 'Connecting to ship...')

  loader.load(
    '/models/spaceship.glb',
    (gltf) => {
      const ship = gltf.scene
      ship.rotation.y = Math.PI
      ship.position.y = 2.8

      // Boost emissive on glow materials
      ship.traverse(child => {
        if (child.isMesh && child.material) {
          const mats = Array.isArray(child.material) ? child.material : [child.material]
          mats.forEach(m => {
            if (m.emissiveIntensity) m.emissiveIntensity *= 2.5
            m.needsUpdate = true
          })
        }
      })

      scene.add(ship)

      // Hide the solid baked-in divider walls so our doorway walls show instead
      hideGLBDividers(ship)

      onProgress?.(100, 'Ready!')
      setTimeout(notifyLoaded, 300)
    },
    (xhr) => {
      if (xhr.total) {
        const pct = Math.round(10 + (xhr.loaded / xhr.total) * 85)
        onProgress?.(pct, `Loading ship... ${pct}%`)
      }
    },
    () => {
      buildPlaceholderShip(scene)
      onProgress?.(100, 'Ready!')
      setTimeout(notifyLoaded, 300)
    }
  )

  // ── RESIZE ────────────────────────────────────────────────────────────────
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  // ── RENDER LOOP ───────────────────────────────────────────────────────────
  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  animate()

  return {
    scene, camera, renderer,
    onShipLoaded: (cb) => { _onLoaded = cb }
  }
}

// ── PLACEHOLDER (fallback if no .glb) ────────────────────────────────────────
function buildPlaceholderShip(scene) {
  const mkMat = (color, emissive, emissiveIntensity = 0) =>
    new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensity, roughness: 0.5, metalness: 0.6 })

  const hull   = mkMat(0x1a2030, 0x000000)
  const floor  = mkMat(0x0e1420, 0x000000)
  const scrn   = mkMat(0x001833, 0x003377, 2)
  const glowB  = mkMat(0x0066ff, 0x0044ff, 3)
  const glowC  = mkMat(0x00ffcc, 0x00ccaa, 3)
  const glowP  = mkMat(0x8800ff, 0x6600cc, 3)

  const add = (geo, mat, x, y, z) => {
    const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); scene.add(m); return m
  }

  // Floors
  add(new THREE.BoxGeometry(14,0.3,14), floor,  0, 0,  12)
  add(new THREE.BoxGeometry(14,0.3,18), floor,  0, 0,   0)
  add(new THREE.BoxGeometry(14,0.3,16), floor,  0, 0, -11)
  // Walls
  add(new THREE.BoxGeometry(14,6,0.2), hull,  0, 3,  20)
  add(new THREE.BoxGeometry(0.2,6,42), hull, -7, 3,   0)
  add(new THREE.BoxGeometry(0.2,6,42), hull,  7, 3,   0)
  add(new THREE.BoxGeometry(14,6,0.2), hull,  0, 3, -21)
  // Ceiling
  add(new THREE.BoxGeometry(14,0.2,42), hull, 0, 6, 0)
  // Zone dividers
  add(new THREE.BoxGeometry(14,6,0.2), hull, 0, 3, 6.5)
  add(new THREE.BoxGeometry(14,6,0.2), hull, 0, 3,-5.5)
  // Glow strips
  add(new THREE.BoxGeometry(0.1,0.1,14), glowB, -6.9, 0.2,  12)
  add(new THREE.BoxGeometry(0.1,0.1,18), glowC, -6.9, 0.2,   0)
  add(new THREE.BoxGeometry(0.1,0.1,16), glowP, -6.9, 0.2, -11)
  // Screens
  add(new THREE.BoxGeometry(8,3,0.1), scrn,  0, 3, 19.8)
  add(new THREE.BoxGeometry(5,3,0.1), scrn,  0, 3,-20.8)
}
