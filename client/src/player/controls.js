import * as THREE from 'three'
import { resolveCollision, buildPath, STATIC_WALLS } from './collision.js'

const WALK_SPEED = 5.5
const CAM_DIST_DEFAULT = 5.0   // 3rd-person default follow distance
const CAM_DIST_MIN     = 2.0
const CAM_DIST_MAX     = 12.0
const CAM_HEIGHT = 2.6
// CAM_LERP is computed per-frame as 1 - exp(-CAM_LAG * delta) so the
// camera feel is identical at 30 fps, 60 fps, and 144 fps.
const CAM_LAG    = 14   // higher = snappier follow
const EYE_HEIGHT = 1.65  // 1st-person eye height

// 3rd-person FOV breathing
const FOV_DEFAULT = 60   // idle
const FOV_MOVE    = 64   // walking — subtle widening gives sense of speed
const FOV_TIGHT   = 57   // tight space (spring arm compressed) — narrowing = claustrophobic feel

export function setupControls (avatar, camera, domElement) {
  const keys = {}
  let yaw        = Math.PI      // faces building at spawn
  let pitch      = 0            // vertical look (1st person)
  let mode       = 'flat'        // 'flat' | 'overview' | 'third' | 'first'
  let navPath    = []
  let navIdx     = 0
  let autoMoving = false
  let _dragging  = false
  let _dragMoved = false
  let camPitch   = 0.28   // 3rd-person vertical arm angle (rad). 0 = level, π/2 = top-down
                           // default ~16° gives a comfortable over-the-shoulder view
  let camDist    = CAM_DIST_DEFAULT  // 3rd-person arm length, adjusted by scroll wheel

  // ── 3rd-person camera feel ────────────────────────────────────────────────
  let _bobClock = 0     // walk-frequency clock shared with leg animation (12 rad/s)
  let _bobAmt   = 0     // 0 = still, 1 = full bob — lerps smoothly between states

  // ── Overview free-camera pan / zoom ───────────────────────────────────────
  let _ovCamX    = 0      // world-space look-at position for overview
  let _ovCamZ    = 22     // starts at avatar spawn
  let _ovZoom    = 38     // camera height (lower = zoomed in)
  let _ovPanned  = false  // true while user has manually panned away

  // ── Keyboard ──────────────────────────────────────────────────────────────
  document.addEventListener('keydown', e => {
    keys[e.code] = true

    if (e.code === 'KeyR') {
      avatar.position.set(0, 0, 22); yaw = Math.PI; pitch = 0
      navPath = []; autoMoving = false
      _showToast('Respawned at Entrance')
    }
    // TAB cycles through all four views
    if (e.code === 'Tab') {
      e.preventDefault()
      const order = ['flat','overview','third','first']
      setMode(order[(order.indexOf(mode) + 1) % order.length])
    }
    if (e.code === 'Escape' && mode !== 'third') setMode('third')
  })
  document.addEventListener('keyup', e => { keys[e.code] = false })

  // ── Mouse look / drag ─────────────────────────────────────────────────────
  document.addEventListener('mousemove', e => {
    if (document.pointerLockElement === domElement) {
      if (mode === 'first') pitch = Math.max(-1.2, Math.min(0.5, pitch - e.movementY * 0.002))
      yaw -= e.movementX * 0.0025
      return
    }
    if (_dragging) {
      if (mode === 'overview') {
        // Pan: subtract movement so the scene follows the cursor (grab-and-drag,
        // like Google Maps). += would push the scene away from the cursor.
        // Scale: world-units-per-pixel based on current height and FOV.
        // 0.9 coefficient keeps panning deliberate — never exceed (per CLAUDE.md).
        const scale = (_ovZoom * 1.534 * 0.9) / window.innerHeight
        _ovCamX -= e.movementX * scale   // was +=  (inverted — scene ran away)
        _ovCamZ += e.movementY * scale   // was -=  (also inverted)
        _ovCamX = Math.max(-60, Math.min(60, _ovCamX))
        _ovCamZ = Math.max(-60, Math.min(60, _ovCamZ))
        _ovPanned = true
        if (Math.abs(e.movementX) > 2 || Math.abs(e.movementY) > 2) _dragMoved = true
      } else if (mode === 'third') {
        // 3rd person: horizontal drag orbits yaw, vertical drag tilts pitch
        yaw      -= e.movementX * 0.005
        camPitch  = Math.max(-0.05, Math.min(1.0, camPitch + e.movementY * 0.003))
        if (Math.abs(e.movementX) > 2 || Math.abs(e.movementY) > 2) _dragMoved = true
      } else {
        // 1st person fallback (pointer lock handles this branch normally)
        yaw -= e.movementX * 0.005
        if (Math.abs(e.movementX) > 2 || Math.abs(e.movementY) > 2) _dragMoved = true
      }
    }
  })
  domElement.addEventListener('mousedown', e => {
    // Left-click drag = orbit (3rd-person) / pan (overview).
    // Left-click tap = navigate (distinguished by _dragMoved staying false).
    if (e.button !== 0) return
    _dragging = true; _dragMoved = false
    if (mode === 'overview') domElement.style.cursor = 'grabbing'
  })
  document.addEventListener('mouseup', e => {
    if (e.button !== 0) return
    _dragging = false
    if (mode === 'overview') domElement.style.cursor = 'grab'
  })
  // Suppress context menu — keeps right-click from interrupting interaction
  domElement.addEventListener('contextmenu', e => e.preventDefault())

  // ── Scroll-to-zoom (overview: camera height / 3rd-person: arm length) ────
  domElement.addEventListener('wheel', e => {
    if (mode !== 'overview' && mode !== 'third') return
    e.preventDefault()
    // Normalise across mouse wheels (line mode) and trackpads (pixel mode).
    // Multiplicative factor = same % change per notch regardless of device.
    const raw    = e.deltaMode === 0 ? e.deltaY : e.deltaY * 24
    const factor = Math.pow(0.997, raw)
    if (mode === 'overview') {
      // Cursor-centred zoom: keep the world point under the cursor fixed.
      // 1. Compute how much the zoom level changes (dZoom).
      // 2. Convert cursor NDC position to a fractional screen offset
      //    (scx ∈ [-0.5, +0.5], scy ∈ [-0.5, +0.5]).
      // 3. Shift the look-at point so the world under the cursor doesn't move.
      //    Formula derived from the perspective projection at height h:
      //    worldOffset = screenFraction × height × 2 × tan(fov/2)
      const oldZoom = _ovZoom
      _ovZoom = Math.max(14, Math.min(60, _ovZoom * factor))
      const dZoom = _ovZoom - oldZoom
      const tanHalfFov = Math.tan((camera.fov * Math.PI / 180) / 2)
      const aspect = window.innerWidth / window.innerHeight
      const scx =  (e.clientX / window.innerWidth  - 0.5)
      const scy = -(e.clientY / window.innerHeight - 0.5)
      _ovCamX -= scx * dZoom * 2 * tanHalfFov * aspect
      _ovCamZ += scy * dZoom * 2 * tanHalfFov
      _ovCamX = Math.max(-60, Math.min(60, _ovCamX))
      _ovCamZ = Math.max(-60, Math.min(60, _ovCamZ))
      _ovPanned = true
    } else {
      // 3rd-person: scroll in/out zooms camera distance (like GTA V / Roblox)
      camDist = Math.max(CAM_DIST_MIN, Math.min(CAM_DIST_MAX, camDist * factor))
    }
  }, { passive: false })

  // ── Navigate to world-space destination ──────────────────────────────────
  function navigate (dest) {
    navPath   = buildPath({ x: avatar.position.x, z: avatar.position.z }, dest)
    navIdx    = 0
    autoMoving = true
    _ovPanned  = false   // re-follow avatar while it walks to destination
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
    // Reset FOV when leaving 3rd-person so other modes aren't affected
    if (m !== 'third') { camera.fov = FOV_DEFAULT; camera.updateProjectionMatrix() }
    // Show grab cursor in overview; flat mode manages its own canvas cursor
    domElement.style.cursor = mode === 'overview' ? 'grab' : 'pointer'
    // Flat mode covers the 3-D canvas — hide it so it doesn't bleed through
    domElement.style.visibility = mode === 'flat' ? 'hidden' : 'visible'
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

    if (mode === 'flat') {
      // ── 2-D Gather-style flat map ────────────────────────────────────────
      // WASD / arrows move along fixed world axes (up = -Z, like Gather.town).
      // navPath click-to-move also works. Collision is fully active.
      // The 3-D canvas is covered by the flat canvas overlay.
      _move.set(0, 0, 0)
      if (keys['KeyW']     || keys['ArrowUp'])    _move.z -= 1
      if (keys['KeyS']     || keys['ArrowDown'])  _move.z += 1
      if (keys['KeyA']     || keys['ArrowLeft'])  _move.x -= 1
      if (keys['KeyD']     || keys['ArrowRight']) _move.x += 1

      const anyKeyF = keys['KeyW']||keys['KeyS']||keys['KeyA']||keys['KeyD']||
                      keys['ArrowUp']||keys['ArrowDown']||keys['ArrowLeft']||keys['ArrowRight']
      if (anyKeyF && autoMoving) { autoMoving = false; navPath = [] }

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

      if (_move.lengthSq() > 0) {
        _move.normalize()
        avatar.position.x += _move.x * WALK_SPEED * delta
        avatar.position.z += _move.z * WALK_SPEED * delta
        const tYaw = Math.atan2(_move.x, _move.z)
        let diff = tYaw - avatar.rotation.y
        while (diff >  Math.PI) diff -= Math.PI * 2
        while (diff < -Math.PI) diff += Math.PI * 2
        avatar.rotation.y += diff * Math.min(1, 20 * delta)
        isMoving = true
      }
      const rflat = resolveCollision(_prev, avatar.position)
      avatar.position.set(rflat.x, 0, rflat.z)

      // Park 3-D camera out of view (flat canvas covers the renderer)
      camera.position.set(avatar.position.x, 60, avatar.position.z)
      camera.lookAt(avatar.position.x, 0, avatar.position.z)

    } else if (mode === 'overview') {
      // ── 2D top-down map ──────────────────────────────────────────────────
      // When avatar is moving (autoMoving) re-centre camera on it;
      // when user is panning manually leave the camera where they dragged it
      if (autoMoving) {
        // Follow avatar while click-navigating — delta-corrected so feel is
        // the same at 30 fps and 144 fps (lambda=8 → ~half-life of ~87ms)
        const f = 1 - Math.exp(-8 * delta)
        _ovCamX += (avatar.position.x - _ovCamX) * f
        _ovCamZ += (avatar.position.z - _ovCamZ) * f
        _ovPanned = false
      } else if (!_ovPanned) {
        // Idle: lazily stay on avatar (lambda=5 → soft follow)
        const f = 1 - Math.exp(-5 * delta)
        _ovCamX += (avatar.position.x - _ovCamX) * f
        _ovCamZ += (avatar.position.z - _ovCamZ) * f
      }

      _camT.set(_ovCamX, _ovZoom, _ovCamZ + 1)
      // Fast snap when camera is far away (first switch to overview),
      // gentle follow once settled — both delta-corrected
      const snapLambda = camera.position.distanceTo(_camT) > 22 ? 20 : 8
      camera.position.lerp(_camT, 1 - Math.exp(-snapLambda * delta))
      camera.lookAt(_ovCamX, 0, _ovCamZ)

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
      const mv = _applyMovement(delta)
      isMoving = mv.isMoving
      const resolved = resolveCollision(_prev, avatar.position)
      avatar.position.set(resolved.x, 0, resolved.z)

      // Swing camera behind avatar whenever moving & user isn't actively dragging
      // (matches GTA V / Fortnite TPP standard: camera follows locomotion,
      //  but respects manual orbit while the mouse button is held)
      if (isMoving && !_dragging) {
        let d = avatar.rotation.y - yaw
        while (d >  Math.PI) d -= Math.PI * 2
        while (d < -Math.PI) d += Math.PI * 2
        // Slightly faster swing for key movement so camera feels responsive
        const swingRate = mv.fromKeys ? 5 : 3
        yaw += d * swingRate * delta
      }

      // Spring arm: shorten when a wall sits between avatar and ideal camera position.
      // This prevents the "see through wall" effect — camera pulls in instead of clipping.
      const arm    = _springArm(avatar.position.x, avatar.position.z, yaw, camDist)
      const isTight = arm < camDist * 0.85   // true when noticeably compressed by a wall
      const pivotY = avatar.position.y + 1.2

      // ── Camera bob ────────────────────────────────────────────────────────
      // Walks at 12 rad/s (same clock as leg animation). _bobAmt smoothly
      // ramps 0→1 when moving and back to 0 when stopped so there's no
      // jarring pop. Amplitude is subtle (±3.5 cm) — felt but not seen.
      _bobClock += delta * 12
      _bobAmt   += ((isMoving ? 1 : 0) - _bobAmt) * Math.min(1, 8 * delta)
      const bob = Math.sin(_bobClock) * 0.035 * _bobAmt

      _camT.set(
        avatar.position.x - Math.sin(yaw) * Math.cos(camPitch) * arm,
        pivotY            + Math.sin(camPitch) * arm + bob,
        avatar.position.z - Math.cos(yaw) * Math.cos(camPitch) * arm
      )
      // Snap immediately when arm is shortened by collision (no lerp through wall),
      // smooth lerp otherwise so normal movement feels fluid
      if (arm < camDist * 0.92) {
        camera.position.copy(_camT)
      } else {
        camera.position.lerp(_camT, 1 - Math.exp(-CAM_LAG * delta))
      }
      camera.lookAt(avatar.position.x, pivotY, avatar.position.z)

      // ── FOV breathe ───────────────────────────────────────────────────────
      // Tight space takes priority over movement: narrowing FOV makes corridors
      // feel physically close. Walking widens FOV slightly for sense of momentum.
      const fovTarget = isTight ? FOV_TIGHT : (isMoving ? FOV_MOVE : FOV_DEFAULT)
      camera.fov += (fovTarget - camera.fov) * Math.min(1, 6 * delta)
      camera.updateProjectionMatrix()

    } else {
      // ── 1st-person (FPS) ──────────────────────────────────────────────────
      isMoving = _applyMovement(delta).isMoving
      const resolved = resolveCollision(_prev, avatar.position)
      avatar.position.set(resolved.x, 0, resolved.z)

      camera.position.set(avatar.position.x, EYE_HEIGHT, avatar.position.z)
      camera.rotation.order = 'YXZ'
      camera.rotation.set(pitch, Math.PI + yaw, 0)
    }

    return isMoving
  }

  // ── Shared WASD + nav-path movement ───────────────────────────────────────
  // Returns { isMoving: bool, fromKeys: bool }
  function _applyMovement (delta) {
    camera.getWorldDirection(_camFwd)
    _camFwd.y = 0; _camFwd.normalize()
    _camRight.crossVectors(_camFwd, _up).normalize()

    _move.set(0, 0, 0)
    if (keys['KeyW']     || keys['ArrowUp'])    _move.addScaledVector(_camFwd,    1)
    if (keys['KeyS']     || keys['ArrowDown'])  _move.addScaledVector(_camFwd,   -1)
    if (keys['KeyA']     || keys['ArrowLeft'])  _move.addScaledVector(_camRight, -1)
    if (keys['KeyD']     || keys['ArrowRight']) _move.addScaledVector(_camRight,  1)

    const anyKey = keys['KeyW']||keys['KeyS']||keys['KeyA']||keys['KeyD']||
                   keys['ArrowUp']||keys['ArrowDown']||keys['ArrowLeft']||keys['ArrowRight']
    const fromKeys = anyKey
    if (anyKey && autoMoving) { autoMoving = false; navPath = [] }

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

    if (_move.lengthSq() > 0) {
      _move.normalize()
      avatar.position.x += _move.x * WALK_SPEED * delta
      avatar.position.z += _move.z * WALK_SPEED * delta
      // Near-instant avatar facing (industry standard: GTA V, Fortnite TPP, Roblox)
      // delta-corrected so it feels the same at any frame rate; clamp to 1 so
      // we never overshoot — at 60fps this completes a full 180° in ~3 frames
      const tYaw = Math.atan2(_move.x, _move.z)
      let diff = tYaw - avatar.rotation.y
      while (diff >  Math.PI) diff -= Math.PI * 2
      while (diff < -Math.PI) diff += Math.PI * 2
      avatar.rotation.y += diff * Math.min(1, 20 * delta)
      return { isMoving: true, fromKeys }
    }
    return { isMoving: false, fromKeys }
  }

  // ── Spring arm: returns safe camera distance avoiding wall clipping ────────
  // Casts a horizontal ray from avatar centre backward along the camera yaw
  // direction. Walls are vertical slabs, so XZ-plane intersection is enough.
  // Industry reference: Unreal Engine Spring Arm Component (CameraLagSpeed),
  // also used by GTA V, Dark Souls, Roblox — camera pulls in on wall contact
  // and eases back out when clear.
  function _springArm (fromX, fromZ, yawAngle, maxArm) {
    const dirX = -Math.sin(yawAngle)
    const dirZ = -Math.cos(yawAngle)
    let safe = maxArm
    for (const wall of STATIC_WALLS) {
      const t = _rayAABB(fromX, fromZ, dirX, dirZ, wall)
      if (t > 0.3 && t < safe) safe = t - 0.25   // pull in 25cm before wall face
    }
    return Math.max(0.8, safe)
  }

  // Slab-method ray vs AABB intersection in XZ. Returns distance t or Infinity.
  function _rayAABB (ox, oz, dx, dz, box) {
    const invX = dx === 0 ? 1e10 : 1 / dx
    const invZ = dz === 0 ? 1e10 : 1 / dz
    const tx1  = (box.minX - ox) * invX,  tx2 = (box.maxX - ox) * invX
    const tz1  = (box.minZ - oz) * invZ,  tz2 = (box.maxZ - oz) * invZ
    const tmin = Math.max(Math.min(tx1, tx2), Math.min(tz1, tz2))
    const tmax = Math.min(Math.max(tx1, tx2), Math.max(tz1, tz2))
    if (tmax < 0.001 || tmin > tmax) return Infinity
    return tmin > 0.001 ? tmin : Infinity
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
