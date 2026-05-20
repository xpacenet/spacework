import * as THREE from 'three'
import { resolveCollision, buildPath } from './collision.js'

const WALK_SPEED = 5.5
const CAM_DIST   = 4.5
const CAM_HEIGHT = 2.4
const CAM_LERP   = 0.1

export function setupControls (avatar, camera, domElement) {
  const keys = {}
  let yaw        = Math.PI   // face toward building on spawn
  let mode       = 'overview'   // start in 2D map — TAB switches to 3D
  let navPath    = []
  let navIdx     = 0
  let autoMoving = false

  // drag-rotation state
  let _dragging  = false
  let _dragMoved = false   // true if mouse moved >2px — means "was a drag, not a click"

  // ── Keyboard ───────────────────────────────────────────────────────────────
  document.addEventListener('keydown', e => {
    keys[e.code] = true
    if (e.code === 'KeyR') {
      avatar.position.set(0, 0, 22)
      yaw = Math.PI
      navPath = []; autoMoving = false
      showToast('Respawned at Entrance')
    }
    if (e.code === 'Tab')    { e.preventDefault(); toggleOverview() }
    if (e.code === 'Escape' && mode === 'overview') setMode('third')
  })
  document.addEventListener('keyup', e => { keys[e.code] = false })

  // ── Mouse look / drag-rotate ───────────────────────────────────────────────
  document.addEventListener('mousemove', e => {
    if (document.pointerLockElement === domElement) {
      // Classic FPS pointer-lock look
      if (mode === 'third') yaw -= e.movementX * 0.0025
      return
    }
    // Drag-rotate (no lock needed — click-drag on canvas)
    if (_dragging && mode === 'third') {
      yaw -= e.movementX * 0.005
      if (Math.abs(e.movementX) > 2 || Math.abs(e.movementY) > 2) _dragMoved = true
    }
  })

  domElement.addEventListener('mousedown', () => { _dragging = true; _dragMoved = false })
  document.addEventListener('mouseup',     () => { _dragging = false })

  // ── Navigate to a world-space destination (shared by canvas click + minimap) ─
  function navigate (dest) {
    navPath   = buildPath({ x: avatar.position.x, z: avatar.position.z }, dest)
    navIdx    = 0
    autoMoving = true
    if (mode === 'overview') _showOverviewMarker(dest)
  }

  function _showOverviewMarker (dest) {
    const marker = document.getElementById('overview-marker')
    if (!marker) return
    const v = new THREE.Vector3(dest.x, 0, dest.z)
    v.project(camera)
    marker.style.left    = ((v.x * 0.5 + 0.5) * window.innerWidth)   + 'px'
    marker.style.top     = ((-v.y * 0.5 + 0.5) * window.innerHeight) + 'px'
    marker.style.display = 'block'
  }

  // ── Mode switching ─────────────────────────────────────────────────────────
  function setMode (m) {
    mode = m
    const ovPanel = document.getElementById('overview-panel')
    if (ovPanel) ovPanel.style.display = mode === 'overview' ? 'flex' : 'none'
    const marker  = document.getElementById('overview-marker')
    if (marker && mode !== 'overview') marker.style.display = 'none'
    if (mode === 'third') document.exitPointerLock?.()
  }
  function toggleOverview () { setMode(mode === 'third' ? 'overview' : 'third') }

  // ── Reused vectors ─────────────────────────────────────────────────────────
  const _camFwd   = new THREE.Vector3()
  const _camRight = new THREE.Vector3()
  const _move     = new THREE.Vector3()
  const _prev     = new THREE.Vector3()
  const _camT     = new THREE.Vector3()
  const _up       = new THREE.Vector3(0, 1, 0)

  // ── Per-frame update ───────────────────────────────────────────────────────
  function update (delta) {
    _prev.copy(avatar.position)
    let isMoving = false

    if (mode === 'overview') {
      // True top-down 2D-map camera — look straight down over the building
      _camT.set(avatar.position.x, 38, avatar.position.z + 1)
      // Snap fast on first frame (camera is far away), ease smoothly after
      const camLerp = camera.position.distanceTo(_camT) > 22 ? 0.18 : 0.06
      camera.position.lerp(_camT, camLerp)
      camera.lookAt(avatar.position.x, 0, avatar.position.z)

      if (autoMoving && navPath.length > 0) {
        const wp   = navPath[navIdx]
        const dx   = wp.x - avatar.position.x
        const dz   = wp.z - avatar.position.z
        const dist = Math.sqrt(dx * dx + dz * dz)
        if (dist < 0.25) {
          if (++navIdx >= navPath.length) { autoMoving = false; navPath = [] }
        } else {
          avatar.position.x += (dx / dist) * WALK_SPEED * 1.4 * delta
          avatar.position.z += (dz / dist) * WALK_SPEED * 1.4 * delta
          avatar.rotation.y  = Math.atan2(dx, dz)
          isMoving = true
        }
      }

    } else {
      // ── Third-person ─────────────────────────────────────────────────────
      camera.getWorldDirection(_camFwd)
      _camFwd.y = 0; _camFwd.normalize()
      _camRight.crossVectors(_camFwd, _up).normalize()

      _move.set(0, 0, 0)
      if (keys['KeyW']     || keys['ArrowUp'])    _move.addScaledVector(_camFwd,   1)
      if (keys['KeyS']     || keys['ArrowDown'])  _move.addScaledVector(_camFwd,  -1)
      if (keys['KeyA']     || keys['ArrowLeft'])  _move.addScaledVector(_camRight,-1)
      if (keys['KeyD']     || keys['ArrowRight']) _move.addScaledVector(_camRight, 1)

      // Auto-move along nav path when no key is held
      if (autoMoving && navPath.length > 0 && _move.lengthSq() === 0) {
        const wp   = navPath[navIdx]
        const dx   = wp.x - avatar.position.x
        const dz   = wp.z - avatar.position.z
        const dist = Math.sqrt(dx * dx + dz * dz)
        if (dist < 0.25) {
          if (++navIdx >= navPath.length) { autoMoving = false; navPath = [] }
        } else {
          _move.set(dx / dist, 0, dz / dist)
        }
      }

      // Any key press cancels click-to-move
      const anyKey = keys['KeyW']||keys['KeyS']||keys['KeyA']||keys['KeyD']||
                     keys['ArrowUp']||keys['ArrowDown']||keys['ArrowLeft']||keys['ArrowRight']
      if (anyKey && autoMoving) { autoMoving = false; navPath = [] }

      isMoving = _move.lengthSq() > 0
      if (isMoving) {
        _move.normalize()
        avatar.position.x += _move.x * WALK_SPEED * delta
        avatar.position.z += _move.z * WALK_SPEED * delta
        // Smooth face toward movement direction
        const tYaw = Math.atan2(_move.x, _move.z)
        let diff   = tYaw - avatar.rotation.y
        while (diff >  Math.PI) diff -= Math.PI * 2
        while (diff < -Math.PI) diff += Math.PI * 2
        avatar.rotation.y += diff * 0.18
      }

      // Collision
      const resolved   = resolveCollision(_prev, avatar.position)
      avatar.position.x = resolved.x
      avatar.position.z = resolved.z
      avatar.position.y = 0

      // Camera auto-follows when click-navigating without pointer lock
      // (manual drag or pointer-lock keeps the user's explicit yaw)
      if (document.pointerLockElement !== domElement && autoMoving && isMoving) {
        let diff = avatar.rotation.y - yaw
        while (diff >  Math.PI) diff -= Math.PI * 2
        while (diff < -Math.PI) diff += Math.PI * 2
        yaw += diff * 4 * delta   // smoothly swing behind avatar
      }

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

  // Initialise UI to match starting mode (overview panel, etc.)
  setMode(mode)

  return {
    update,
    navigate,
    getMode:     () => mode,
    isDragMoved: () => _dragMoved,
    setNavPath:  (path) => { navPath = path; navIdx = 0; autoMoving = true },
  }
}

// ── Helpers ────────────────────────────────────────────────────────────────
function showToast (msg) {
  const toast = document.getElementById('hud-toast')
  if (!toast) return
  toast.textContent = msg
  toast.classList.add('show')
  clearTimeout(toast._t)
  toast._t = setTimeout(() => toast.classList.remove('show'), 2000)
}
