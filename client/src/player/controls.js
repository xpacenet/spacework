import * as THREE from 'three'
import { resolveCollision, buildPath } from './collision.js'

const WALK_SPEED  = 5.5
const CAM_DIST    = 4.5
const CAM_HEIGHT  = 2.4
const CAM_LERP    = 0.1

export function setupControls(avatar, camera, domElement) {
  const keys = {}
  let yaw      = 0
  let mode     = 'third'   // 'third' | 'overview'
  let navPath  = []        // waypoints for click-to-move
  let navIdx   = 0
  let autoMoving = false

  // ── Input ───────────────────────────────────────────────────────────────
  document.addEventListener('keydown', e => {
    keys[e.code] = true

    // R — reset to spawn
    if (e.code === 'KeyR') {
      avatar.position.set(0, 0, 12)
      yaw = 0
      navPath = []; autoMoving = false
      showToast('Respawned at Bridge')
    }

    // Tab — toggle overview
    if (e.code === 'Tab') {
      e.preventDefault()
      toggleOverview()
    }

    // Escape — exit overview
    if (e.code === 'Escape' && mode === 'overview') {
      setMode('third')
    }
  })
  document.addEventListener('keyup', e => { keys[e.code] = false })

  // Mouse look (third-person only)
  document.addEventListener('mousemove', e => {
    if (mode !== 'third') return
    if (document.pointerLockElement !== domElement) return
    yaw -= e.movementX * 0.0025
  })

  // Overview click-to-move
  const raycaster   = new THREE.Raycaster()
  const mouse       = new THREE.Vector2()
  const floorPlane  = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
  const clickTarget = new THREE.Vector3()
  let   overviewTarget = null

  domElement.addEventListener('click', e => {
    if (mode !== 'overview') return
    mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1

    raycaster.setFromCamera(mouse, camera)
    const hit = raycaster.ray.intersectPlane(floorPlane, clickTarget)
    if (!hit) return

    const dest = { x: clickTarget.x, z: clickTarget.z }
    navPath   = buildPath({ x: avatar.position.x, z: avatar.position.z }, dest)
    navIdx    = 0
    autoMoving = true
    overviewTarget = dest
    updateOverviewMarker(dest)
  })

  // ── Overview marker (DOM dot) ────────────────────────────────────────────
  function updateOverviewMarker(dest) {
    let marker = document.getElementById('overview-marker')
    if (!marker) return
    // Project dest to screen
    const v = new THREE.Vector3(dest.x, 0, dest.z)
    v.project(camera)
    const sx = ( v.x * 0.5 + 0.5) * window.innerWidth
    const sy = (-v.y * 0.5 + 0.5) * window.innerHeight
    marker.style.left    = sx + 'px'
    marker.style.top     = sy + 'px'
    marker.style.display = 'block'
  }

  // ── Mode switching ───────────────────────────────────────────────────────
  function setMode(m) {
    mode = m
    const ovPanel = document.getElementById('overview-panel')
    if (ovPanel) ovPanel.style.display = mode === 'overview' ? 'flex' : 'none'
    const marker  = document.getElementById('overview-marker')
    if (marker && mode !== 'overview') marker.style.display = 'none'
    if (mode === 'third') document.exitPointerLock?.()
    updateModeUI()
  }

  function toggleOverview() {
    setMode(mode === 'third' ? 'overview' : 'third')
  }

  // ── Vectors reused each frame ─────────────────────────────────────────
  const _camFwd  = new THREE.Vector3()   // camera's horizontal forward
  const _camRight= new THREE.Vector3()   // camera's horizontal right
  const _move    = new THREE.Vector3()
  const _prev    = new THREE.Vector3()
  const _camT    = new THREE.Vector3()
  const _up      = new THREE.Vector3(0, 1, 0)

  // ── Update loop ──────────────────────────────────────────────────────────
  function update(delta) {
    _prev.copy(avatar.position)
    let isMoving = false

    if (mode === 'overview') {
      // Bird-eye camera
      _camT.set(avatar.position.x, 28, avatar.position.z + 2)
      camera.position.lerp(_camT, 0.06)
      camera.lookAt(avatar.position.x, 0, avatar.position.z)

      // Auto-move along nav path
      if (autoMoving && navPath.length > 0) {
        const wp   = navPath[navIdx]
        const dx   = wp.x - avatar.position.x
        const dz   = wp.z - avatar.position.z
        const dist = Math.sqrt(dx*dx + dz*dz)
        if (dist < 0.25) {
          navIdx++
          if (navIdx >= navPath.length) { autoMoving = false; navPath = [] }
        } else {
          avatar.position.x += (dx/dist) * WALK_SPEED * 1.4 * delta
          avatar.position.z += (dz/dist) * WALK_SPEED * 1.4 * delta
          avatar.rotation.y  = Math.atan2(dx, dz)
          isMoving = true
        }
      }

    } else {
      // ── Third-person WASD ─────────────────────────────────────────────
      // Derive forward/right from actual camera look direction — always correct
      camera.getWorldDirection(_camFwd)
      _camFwd.y = 0
      _camFwd.normalize()
      _camRight.crossVectors(_camFwd, _up).normalize()

      _move.set(0, 0, 0)
      if (keys['KeyW'] || keys['ArrowUp'])    _move.addScaledVector(_camFwd,   1)
      if (keys['KeyS'] || keys['ArrowDown'])  _move.addScaledVector(_camFwd,  -1)
      if (keys['KeyA'] || keys['ArrowLeft'])  _move.addScaledVector(_camRight,-1)
      if (keys['KeyD'] || keys['ArrowRight']) _move.addScaledVector(_camRight, 1)

      // Follow nav path when no key is pressed
      if (autoMoving && navPath.length > 0 && _move.lengthSq() === 0) {
        const wp   = navPath[navIdx]
        const dx   = wp.x - avatar.position.x
        const dz   = wp.z - avatar.position.z
        const dist = Math.sqrt(dx*dx + dz*dz)
        if (dist < 0.25) {
          navIdx++
          if (navIdx >= navPath.length) { autoMoving = false; navPath = [] }
        } else {
          _move.set(dx/dist, 0, dz/dist)
        }
      }

      // Cancel auto-move on manual key press
      const anyKey = keys['KeyW']||keys['KeyS']||keys['KeyA']||keys['KeyD']||
                     keys['ArrowUp']||keys['ArrowDown']||keys['ArrowLeft']||keys['ArrowRight']
      if (anyKey && autoMoving) { autoMoving = false; navPath = [] }

      isMoving = _move.lengthSq() > 0
      if (isMoving) {
        _move.normalize()
        avatar.position.x += _move.x * WALK_SPEED * delta
        avatar.position.z += _move.z * WALK_SPEED * delta

        // Face movement direction (smooth)
        const tYaw = Math.atan2(_move.x, _move.z)
        let diff   = tYaw - avatar.rotation.y
        while (diff >  Math.PI) diff -= Math.PI * 2
        while (diff < -Math.PI) diff += Math.PI * 2
        avatar.rotation.y += diff * 0.18
      }

      // Collision resolution
      const resolved = resolveCollision(_prev, avatar.position)
      avatar.position.x = resolved.x
      avatar.position.z = resolved.z
      avatar.position.y = 0

      // Smooth third-person camera behind avatar
      _camT.set(
        avatar.position.x - Math.sin(yaw) * CAM_DIST,
        avatar.position.y + CAM_HEIGHT,
        avatar.position.z - Math.cos(yaw) * CAM_DIST
      )
      camera.position.lerp(_camT, CAM_LERP)
      camera.lookAt(avatar.position.x, avatar.position.y + 1.2, avatar.position.z)
    }

    return isMoving
  }

  return { update, getMode: () => mode, setNavPath: (path) => { navPath = path; navIdx = 0; autoMoving = true } }
}

// ── UI helpers ────────────────────────────────────────────────────────────────
function updateModeUI() {
  const badge = document.getElementById('mode-badge')
  if (!badge) return
  const mode = badge.dataset.mode
  // updated by caller
}

function showToast(msg) {
  let toast = document.getElementById('hud-toast')
  if (!toast) return
  toast.textContent = msg
  toast.classList.add('show')
  clearTimeout(toast._t)
  toast._t = setTimeout(() => toast.classList.remove('show'), 2000)
}
