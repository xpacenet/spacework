import * as THREE from 'three'
import { resolveCollision, buildPath } from './collision.js'

const WALK_SPEED = 5.5
const CAM_DIST   = 5.0   // 3rd-person follow distance
const CAM_HEIGHT = 2.6
const CAM_LERP   = 0.10
const EYE_HEIGHT = 1.65  // 1st-person eye height

export function setupControls (avatar, camera, domElement) {
  const keys = {}
  let yaw        = Math.PI      // faces building at spawn
  let pitch      = 0            // vertical look (1st person)
  let mode       = 'overview'   // 'overview' | 'third' | 'first'
  let navPath    = []
  let navIdx     = 0
  let autoMoving = false
  let _dragging  = false
  let _dragMoved = false

  // ── Keyboard ──────────────────────────────────────────────────────────────
  document.addEventListener('keydown', e => {
    keys[e.code] = true

    if (e.code === 'KeyR') {
      avatar.position.set(0, 0, 22); yaw = Math.PI; pitch = 0
      navPath = []; autoMoving = false
      _showToast('Respawned at Entrance')
    }
    // TAB cycles through all three views
    if (e.code === 'Tab') {
      e.preventDefault()
      const order = ['overview','third','first']
      setMode(order[(order.indexOf(mode) + 1) % order.length])
    }
    if (e.code === 'Escape' && mode !== 'third') setMode('third')
  })
  document.addEventListener('keyup', e => { keys[e.code] = false })

  // ── Mouse look / drag ─────────────────────────────────────────────────────
  document.addEventListener('mousemove', e => {
    if (document.pointerLockElement === domElement) {
      if (mode === 'third' || mode === 'first') {
        yaw   -= e.movementX * 0.0025
        if (mode === 'first') pitch = Math.max(-1.2, Math.min(0.5, pitch - e.movementY * 0.002))
      }
      return
    }
    if (_dragging && (mode === 'third' || mode === 'first')) {
      yaw -= e.movementX * 0.005
      if (Math.abs(e.movementX) > 2 || Math.abs(e.movementY) > 2) _dragMoved = true
    }
  })
  domElement.addEventListener('mousedown', () => { _dragging = true;  _dragMoved = false })
  document.addEventListener('mouseup',     () => { _dragging = false })

  // ── Navigate to world-space destination ──────────────────────────────────
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
    if (mode === 'third' || mode === 'overview') document.exitPointerLock?.()
    // Sync the toggle pill buttons
    document.querySelectorAll('.vtbtn').forEach(btn =>
      btn.classList.toggle('active', btn.dataset.view === mode)
    )
  }

  // ── Reused vectors ────────────────────────────────────────────────────────
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
      // ── 2D top-down map ──────────────────────────────────────────────────
      _camT.set(avatar.position.x, 38, avatar.position.z + 1)
      const snap = camera.position.distanceTo(_camT) > 22 ? 0.18 : 0.06
      camera.position.lerp(_camT, snap)
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

    } else if (mode === 'third') {
      // ── 3rd-person follow camera ─────────────────────────────────────────
      isMoving = _applyMovement(delta)
      const resolved = resolveCollision(_prev, avatar.position)
      avatar.position.set(resolved.x, 0, resolved.z)

      if (document.pointerLockElement !== domElement && autoMoving && isMoving) {
        // Auto-swing camera behind moving avatar
        let d = avatar.rotation.y - yaw
        while (d >  Math.PI) d -= Math.PI * 2
        while (d < -Math.PI) d += Math.PI * 2
        yaw += d * 4 * delta
      }

      _camT.set(
        avatar.position.x - Math.sin(yaw) * CAM_DIST,
        avatar.position.y + CAM_HEIGHT,
        avatar.position.z - Math.cos(yaw) * CAM_DIST
      )
      camera.position.lerp(_camT, CAM_LERP)
      camera.lookAt(avatar.position.x, avatar.position.y + 1.2, avatar.position.z)

    } else {
      // ── 1st-person (FPS) ──────────────────────────────────────────────────
      isMoving = _applyMovement(delta)
      const resolved = resolveCollision(_prev, avatar.position)
      avatar.position.set(resolved.x, 0, resolved.z)

      camera.position.set(avatar.position.x, EYE_HEIGHT, avatar.position.z)
      camera.rotation.order = 'YXZ'
      camera.rotation.set(pitch, Math.PI + yaw, 0)
    }

    return isMoving
  }

  // ── Shared WASD + nav-path movement ───────────────────────────────────────
  function _applyMovement (delta) {
    camera.getWorldDirection(_camFwd)
    _camFwd.y = 0; _camFwd.normalize()
    _camRight.crossVectors(_camFwd, _up).normalize()

    _move.set(0, 0, 0)
    if (keys['KeyW']     || keys['ArrowUp'])    _move.addScaledVector(_camFwd,    1)
    if (keys['KeyS']     || keys['ArrowDown'])  _move.addScaledVector(_camFwd,   -1)
    if (keys['KeyA']     || keys['ArrowLeft'])  _move.addScaledVector(_camRight, -1)
    if (keys['KeyD']     || keys['ArrowRight']) _move.addScaledVector(_camRight,  1)

    // Nav-path movement when no key held
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

    const anyKey = keys['KeyW']||keys['KeyS']||keys['KeyA']||keys['KeyD']||
                   keys['ArrowUp']||keys['ArrowDown']||keys['ArrowLeft']||keys['ArrowRight']
    if (anyKey && autoMoving) { autoMoving = false; navPath = [] }

    if (_move.lengthSq() > 0) {
      _move.normalize()
      avatar.position.x += _move.x * WALK_SPEED * delta
      avatar.position.z += _move.z * WALK_SPEED * delta
      // Smooth avatar face direction
      const tYaw = Math.atan2(_move.x, _move.z)
      let diff = tYaw - avatar.rotation.y
      while (diff >  Math.PI) diff -= Math.PI * 2
      while (diff < -Math.PI) diff += Math.PI * 2
      avatar.rotation.y += diff * 0.18
      return true
    }
    return false
  }

  // Initialise DOM to match starting mode
  setMode(mode)

  return {
    update,
    navigate,
    setMode,
    getMode:     () => mode,
    isDragMoved: () => _dragMoved,
    setNavPath:  (path) => { navPath = path; navIdx = 0; autoMoving = true },
  }
}

function _showToast (msg) {
  const t = document.getElementById('hud-toast')
  if (!t) return
  t.textContent = msg; t.classList.add('show')
  clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 2000)
}
