# SpaceWork — Claude Code Rules

## Commit policy
- **NEVER add a Co-Authored-By line** to any commit message. All commits are plain:
  `git commit -m "message"`. No exceptions, no workarounds.

## Camera & controls — immutable design rules

### 3rd-person view
- The camera MUST use a **spring arm** (Unreal-style). Cast a ray from the avatar
  centre backward along the camera yaw. If the ray hits any wall AABB before
  `CAM_DIST`, shorten the arm to `hitDistance - 0.25`. The camera must **never
  clip through or render behind a wall**. Snap the camera immediately on collision
  (no lerp through the wall); ease back out with normal lerp when clear.
- Mouse drag (no pointer lock) controls **yaw** (horizontal) and **camPitch**
  (vertical, clamped -0.05 → 1.0 rad). The player character moves with WASD /
  arrow keys — **pointer lock is never requested in 3rd-person mode**.
- Camera gently auto-swings behind the avatar while moving and the mouse button
  is not held (lazy follow). When the user drags, they own the angle; the swing
  resumes naturally once they stop dragging.

### 1st-person view
- Pointer lock is **only** requested when the user is already in `'first'` mode
  (checked via `player.getMode() === 'first'`). Switching view via the pill
  button or pressing WASD in 3rd-person must **never** steal the cursor.
- Mouse forward/right = look forward/right (non-inverted). Formula:
  `camera.rotation.set(pitch, Math.PI + yaw, 0)` with `rotation.order = 'YXZ'`.

### 2D overview
- The bird's-eye camera is **independent of the avatar** — drag pans the camera
  freely. Scroll wheel zooms (camera height 14–60 m). The camera re-follows the
  avatar automatically only while `autoMoving` (click-to-navigate) is active.
- Cursor is `grab` / `grabbing` in overview mode, `pointer` elsewhere.

### Flat 2-D map (Gather / Kumospace style)
- Implemented as a pure HTML Canvas overlay (`FlatMap` class in `src/ui/flatMap.js`).
  The 3-D renderer continues ticking for collision / peer sync but its canvas is hidden.
- Scroll / pinch zooms **toward the cursor** using a multiplicative factor
  (`Math.pow(0.997, normalised_delta)`) — never an additive pixel offset. This
  ensures consistent feel across mouse wheels and trackpads.
- Click (no drag) fires `onNavigate` with the world coordinate under the cursor.
- Drag pans the camera (`panX -= dx / zoom`, `panZ -= dy / zoom`). Pixels per
  world-metre stays consistent so panning speed feels proportional to zoom level.
- WASD / arrows move the character relative to fixed world axes (W = -Z, matching
  Gather.town convention). Collision is fully active.
- Other players are drawn as dots with name labels each frame.
- Default zoom is set so the building fills ~70 % of the screen width on load.

### 3-D overview (bird's-eye)
- Scroll zoom uses the **same multiplicative formula** as the flat map (never raw
  `deltaY * constant`). This prevents trackpad scroll feeling like it races.
- Drag pan speed = `(cameraHeight * 1.534 * 0.9) / window.innerHeight` px per
  world-metre. The 0.9 coefficient keeps panning deliberate. Never exceed this.

### General
- Camera must **never** show geometry from behind/inside a wall face. If there
  is any doubt, default to pulling the camera forward (toward the avatar) rather
  than backward (into the wall).
- Do not request pointer lock from any event other than an explicit user action
  while in `'first'` mode.
