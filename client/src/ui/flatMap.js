/**
 * flatMap.js — 2-D Gather / Kumospace-style overhead map
 *
 * Renders a pure 2-D canvas covering the full screen.
 * The 3-D scene keeps ticking in the background (collision, peer sync)
 * but its canvas is visually hidden behind this one.
 *
 * Controls
 *   Scroll / pinch  → zoom toward cursor (feels like Google Maps)
 *   Click + drag    → pan freely
 *   Click (no drag) → navigate character to that point
 *   WASD / arrows   → move character (handled in controls.js flat branch)
 */

import { BLDG as B } from '../scene/building.js'

// ── Visual config ─────────────────────────────────────────────────────────────
const BG      = '#0f1117'
const OUTDOOR = 'rgba(34,58,28,0.95)'
const FLOOR   = 'rgba(230,225,215,0.12)'
const WALL    = '#2a2a3a'

const ROOMS = [
  { name: 'LOBBY',       x1: B.minX,    x2: B.maxX,    z1: B.lobbyZ, z2: B.maxZ,   fill: 'rgba(180,175,210,0.18)', border: 'rgba(180,175,220,0.55)', label: '#ccc' },
  { name: 'OPS',         x1: B.minX,    x2: B.centerX, z1: B.midZ,   z2: B.lobbyZ, fill: 'rgba(200,115,20,0.20)',  border: 'rgba(220,130,30,0.60)',  label: '#fa9' },
  { name: 'FUN',         x1: B.centerX, x2: B.maxX,    z1: B.midZ,   z2: B.lobbyZ, fill: 'rgba(20,170,90,0.20)',   border: 'rgba(30,200,100,0.55)',  label: '#6fb' },
  { name: 'DESIGN',      x1: B.minX,    x2: B.centerX, z1: B.minZ,   z2: B.midZ,   fill: 'rgba(190,45,95,0.20)',   border: 'rgba(220,60,110,0.55)',  label: '#f9b' },
  { name: 'ENGINEERING', x1: B.centerX, x2: B.maxX,    z1: B.minZ,   z2: B.midZ,   fill: 'rgba(25,90,200,0.20)',   border: 'rgba(40,120,230,0.55)',  label: '#8bf' },
]

// Walls as XZ segments [ x1,z1, x2,z2 ]
const HW = B.doorHalfW, MW = B.mainDoorHalfW
const L = B.leftDoorX, R = B.rightDoorX
const SEGS = [
  // Exterior
  [B.minX, B.maxZ, -MW,    B.maxZ],   // front left
  [MW,     B.maxZ, B.maxX, B.maxZ],   // front right
  [B.minX, B.minZ, B.maxX, B.minZ],   // back
  [B.minX, B.minZ, B.minX, B.maxZ],   // left
  [B.maxX, B.minZ, B.maxX, B.maxZ],   // right
  // Lobby divider
  [B.minX,  B.lobbyZ, L-HW, B.lobbyZ],
  [L+HW,    B.lobbyZ, R-HW, B.lobbyZ],
  [R+HW,    B.lobbyZ, B.maxX, B.lobbyZ],
  // Mid divider
  [B.minX,  B.midZ, L-HW, B.midZ],
  [L+HW,    B.midZ, R-HW, B.midZ],
  [R+HW,    B.midZ, B.maxX, B.midZ],
  // Centre divider
  [B.centerX, B.minZ, B.centerX, B.lobbyZ],
]

// ── FlatMap class ─────────────────────────────────────────────────────────────
export class FlatMap {
  constructor (onNavigate) {
    this._nav   = onNavigate
    this._peers = new Map()   // peerId → { x, z, name }

    const cvs = document.createElement('canvas')
    cvs.id = 'flat-map-canvas'
    Object.assign(cvs.style, {
      position: 'fixed', inset: '0',
      width: '100%', height: '100%',
      zIndex: '6', display: 'none',
      cursor: 'crosshair',
    })
    document.body.appendChild(cvs)
    this._cvs = cvs
    this._ctx  = cvs.getContext('2d')

    // View state
    this._zoom     = 14    // px per world metre
    this._panX     = 0     // world-space look-at centre
    this._panZ     = -6
    this._dragging  = false
    this._dragMoved = false
    this._lx = 0; this._ly = 0

    // Click-destination ping (persists 600ms then fades)
    this._ping = null   // { cx, cy, born } — canvas coords + timestamp

    this._setupMouse()
    this._setupTouch()
    this._resize()
    window.addEventListener('resize', () => this._resize())
  }

  // ── Public API ──────────────────────────────────────────────────────────────
  show () { this._cvs.style.display = 'block' }
  hide () { this._cvs.style.display = 'none'  }

  setPeer   (id, x, z, name)  { this._peers.set(id, { x, z, name }) }
  removePeer(id)               { this._peers.delete(id) }
  setTalking(talkingSet)       { this._talking = talkingSet }   // Set<identityId>

  update (playerPos) {
    const W = this._cvs.width, H = this._cvs.height
    const ctx = this._ctx
    ctx.clearRect(0, 0, W, H)
    this._drawBg(ctx, W, H)
    this._drawGrid(ctx, W, H)
    this._drawBuilding(ctx)
    this._drawRooms(ctx)
    this._drawWalls(ctx)
    this._drawDoors(ctx)
    this._drawPeers(ctx)
    this._drawPlayer(ctx, playerPos)
    this._drawNavPing(ctx)
    this._drawHints(ctx, W, H)
  }

  // ── Navigation ─────────────────────────────────────────────────────────────
  _fire (canvasX, canvasY) {
    const [wx, wz] = this._c2w(canvasX, canvasY)
    this._nav({ x: wx, z: wz })
    // Store ping so it renders for 600 ms with a fade-out
    this._ping = { cx: canvasX, cy: canvasY, born: performance.now() }
  }

  // Called by player/index.js when switching TO flat mode — re-centres view
  centreOn (worldX, worldZ) {
    this._panX = worldX
    this._panZ = worldZ
  }

  // ── Coordinate helpers ──────────────────────────────────────────────────────
  _w2c (wx, wz) {
    const cx = this._cvs.width  / 2 + (wx - this._panX) * this._zoom
    const cy = this._cvs.height / 2 + (wz - this._panZ) * this._zoom
    return [cx, cy]
  }
  _c2w (cx, cy) {
    const wx = (cx - this._cvs.width  / 2) / this._zoom + this._panX
    const wz = (cy - this._cvs.height / 2) / this._zoom + this._panZ
    return [wx, wz]
  }
  _wr (meters) { return meters * this._zoom }   // world metres → canvas radius/size

  // ── Mouse events ────────────────────────────────────────────────────────────
  _setupMouse () {
    const cvs = this._cvs

    cvs.addEventListener('wheel', e => {
      e.preventDefault()
      const rect = cvs.getBoundingClientRect()
      const cx = e.clientX - rect.left
      const cy = e.clientY - rect.top
      const [wx0, wz0] = this._c2w(cx, cy)

      // Normalised delta: same speed on trackpad (px mode) and mouse (line mode)
      const rawDelta = e.deltaMode === 0 ? e.deltaY : e.deltaY * 24
      const factor   = Math.pow(0.997, rawDelta)          // ~3 % per px of scroll
      this._zoom     = Math.max(6, Math.min(55, this._zoom * factor))

      // Zoom toward cursor — keep world point under cursor fixed
      const [wx1, wz1] = this._c2w(cx, cy)
      this._panX += wx0 - wx1
      this._panZ += wz0 - wz1
    }, { passive: false })

    cvs.addEventListener('mousedown', e => {
      this._dragging  = true
      this._dragMoved = false
      this._lx = e.clientX; this._ly = e.clientY
      cvs.style.cursor = 'grabbing'
    })
    document.addEventListener('mousemove', e => {
      if (!this._dragging) return
      const dx = e.clientX - this._lx
      const dy = e.clientY - this._ly
      this._panX -= dx / this._zoom
      this._panZ -= dy / this._zoom
      this._lx = e.clientX; this._ly = e.clientY
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) this._dragMoved = true
    })
    document.addEventListener('mouseup', e => {
      if (!this._dragging) return
      this._dragging = false
      cvs.style.cursor = 'crosshair'
      if (this._dragMoved) return
      const rect = cvs.getBoundingClientRect()
      this._fire(e.clientX - rect.left, e.clientY - rect.top)
    })
  }

  // ── Touch events (mobile) ───────────────────────────────────────────────────
  _setupTouch () {
    const cvs = this._cvs
    let _t0x = 0, _t0y = 0, _tMoved = false, _tDist = 0

    cvs.addEventListener('touchstart', e => {
      e.preventDefault()
      _tMoved = false
      if (e.touches.length === 1) {
        _t0x = e.touches[0].clientX; _t0y = e.touches[0].clientY
        this._lx = _t0x; this._ly = _t0y
      } else if (e.touches.length === 2) {
        const dx = e.touches[1].clientX - e.touches[0].clientX
        const dy = e.touches[1].clientY - e.touches[0].clientY
        _tDist = Math.sqrt(dx*dx + dy*dy)
      }
    }, { passive: false })

    cvs.addEventListener('touchmove', e => {
      e.preventDefault()
      if (e.touches.length === 1) {
        const dx = e.touches[0].clientX - this._lx
        const dy = e.touches[0].clientY - this._ly
        this._panX -= dx / this._zoom
        this._panZ -= dy / this._zoom
        this._lx = e.touches[0].clientX
        this._ly = e.touches[0].clientY
        if (Math.abs(dx) > 4 || Math.abs(dy) > 4) _tMoved = true
      } else if (e.touches.length === 2) {
        const dx = e.touches[1].clientX - e.touches[0].clientX
        const dy = e.touches[1].clientY - e.touches[0].clientY
        const newDist = Math.sqrt(dx*dx + dy*dy)
        const factor  = newDist / (_tDist || newDist)
        // Zoom toward pinch centre
        const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2
        const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2
        const [wx0, wz0] = this._c2w(cx, cy)
        this._zoom  = Math.max(6, Math.min(55, this._zoom * factor))
        const [wx1, wz1] = this._c2w(cx, cy)
        this._panX += wx0 - wx1; this._panZ += wz0 - wz1
        _tDist = newDist; _tMoved = true
      }
    }, { passive: false })

    cvs.addEventListener('touchend', e => {
      if (e.touches.length === 0 && !_tMoved && e.changedTouches.length === 1) {
        const rect = cvs.getBoundingClientRect()
        this._fire(
          e.changedTouches[0].clientX - rect.left,
          e.changedTouches[0].clientY - rect.top,
        )
      }
    }, { passive: false })
  }

  _resize () {
    this._cvs.width  = window.innerWidth
    this._cvs.height = window.innerHeight
  }

  // ── Drawing ─────────────────────────────────────────────────────────────────
  _drawBg (ctx, W, H) {
    ctx.fillStyle = BG
    ctx.fillRect(0, 0, W, H)
  }

  _drawGrid (ctx, W, H) {
    const step = this._zoom * 4   // grid every 4m in world
    if (step < 10) return         // too zoomed out → skip grid
    ctx.strokeStyle = 'rgba(255,255,255,0.04)'
    ctx.lineWidth = 1
    // vertical lines
    const ox = (W / 2 - this._panX * this._zoom) % step
    for (let x = ox; x < W; x += step) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke() }
    // horizontal lines
    const oy = (H / 2 - this._panZ * this._zoom) % step
    for (let y = oy; y < H; y += step) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke() }
  }

  _drawBuilding (ctx) {
    // Outdoor area (whole visible area behind building gets outdoor colour first)
    const [x1, y1] = this._w2c(B.minX - 20, B.minZ - 20)
    const [x2, y2] = this._w2c(B.maxX + 20, B.maxZ + 20)
    ctx.fillStyle = OUTDOOR
    ctx.fillRect(Math.min(x1,x2), Math.min(y1,y2), Math.abs(x2-x1), Math.abs(y2-y1))

    // Building floor
    const [bx1, by1] = this._w2c(B.minX, B.maxZ)
    const [bx2, by2] = this._w2c(B.maxX, B.minZ)
    ctx.fillStyle = FLOOR
    ctx.fillRect(Math.min(bx1,bx2), Math.min(by1,by2), Math.abs(bx2-bx1), Math.abs(by2-by1))
  }

  _drawRooms (ctx) {
    ROOMS.forEach(r => {
      const [x1, y1] = this._w2c(r.x1, r.z2)
      const [x2, y2] = this._w2c(r.x2, r.z1)
      const rx = Math.min(x1, x2), ry = Math.min(y1, y2)
      const rw = Math.abs(x2 - x1), rh = Math.abs(y2 - y1)

      // Fill
      ctx.fillStyle = r.fill
      ctx.fillRect(rx, ry, rw, rh)

      // Border (inset 1px)
      ctx.strokeStyle = r.border
      ctx.lineWidth   = 1.5
      ctx.strokeRect(rx + 1, ry + 1, rw - 2, rh - 2)

      // Label — only when room is large enough on screen
      if (rw > 50 && rh > 30) {
        ctx.fillStyle  = r.label
        ctx.font       = `bold ${Math.max(9, Math.min(13, rw * 0.11))}px Inter, monospace`
        ctx.textAlign  = 'center'
        ctx.textBaseline = 'middle'
        ctx.shadowColor = 'rgba(0,0,0,0.8)'; ctx.shadowBlur = 4
        ctx.fillText(r.name, rx + rw / 2, ry + rh / 2)
        ctx.shadowBlur = 0
      }
    })
  }

  _drawWalls (ctx) {
    ctx.strokeStyle = '#4a4a6a'
    ctx.lineWidth   = Math.max(2, this._wr(B.wallT) * 0.8)
    ctx.lineCap     = 'round'
    SEGS.forEach(([wx1, wz1, wx2, wz2]) => {
      const [cx1, cy1] = this._w2c(wx1, wz1)
      const [cx2, cy2] = this._w2c(wx2, wz2)
      ctx.beginPath(); ctx.moveTo(cx1, cy1); ctx.lineTo(cx2, cy2); ctx.stroke()
    })
  }

  _drawDoors (ctx) {
    // Doors shown as small gaps / lighter marks at wall junctions
    const doorMarks = [
      { x: 0,  z: B.maxZ,   w: MW * 2 },     // main entrance
      { x: L,  z: B.lobbyZ, w: HW * 2 },
      { x: R,  z: B.lobbyZ, w: HW * 2 },
      { x: L,  z: B.midZ,   w: HW * 2 },
      { x: R,  z: B.midZ,   w: HW * 2 },
    ]
    ctx.strokeStyle = 'rgba(255,220,100,0.60)'
    ctx.lineWidth   = Math.max(3, this._wr(B.wallT) * 0.9)
    ctx.lineCap     = 'square'
    doorMarks.forEach(d => {
      const [cx, cy] = this._w2c(d.x, d.z)
      const hw = this._wr(d.w / 2)
      // vertical or horizontal door? We check by which wall it's on
      const isHoriz = Math.abs(d.z - B.maxZ) < 0.1 || Math.abs(d.z - B.lobbyZ) < 0.1 || Math.abs(d.z - B.midZ) < 0.1
      if (isHoriz) {
        ctx.beginPath(); ctx.moveTo(cx - hw, cy); ctx.lineTo(cx + hw, cy); ctx.stroke()
      } else {
        ctx.beginPath(); ctx.moveTo(cx, cy - hw); ctx.lineTo(cx, cy + hw); ctx.stroke()
      }
    })
  }

  _drawPeers (ctx) {
    const now = performance.now() / 1000
    this._peers.forEach(({ x, z, name }, id) => {
      const [cx, cy] = this._w2c(x, z)
      const r        = Math.max(5, this._wr(0.4))
      const talking  = this._talking?.has(id)

      if (talking) {
        // Animated glow ring
        const pulse = 0.5 + Math.sin(now * 6) * 0.5           // 0–1
        const ringR = r + 4 + pulse * 4
        ctx.beginPath(); ctx.arc(cx, cy, ringR, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0,255,136,${0.6 + pulse * 0.4})`
        ctx.lineWidth   = 2.5
        ctx.shadowColor = '#00ff88'; ctx.shadowBlur = 10
        ctx.stroke(); ctx.shadowBlur = 0
      }

      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.fillStyle   = talking ? 'rgba(0,255,120,0.9)' : 'rgba(255,120,150,0.85)'
      ctx.fill()
      ctx.strokeStyle = talking ? '#00ff88' : '#ff88aa'
      ctx.lineWidth   = 1.5; ctx.stroke()

      if (r > 5) {
        ctx.fillStyle    = '#fff'
        ctx.font         = `bold ${Math.max(8, r * 1.1)}px Inter,monospace`
        ctx.textAlign    = 'center'; ctx.textBaseline = 'bottom'
        ctx.shadowColor  = '#000'; ctx.shadowBlur = 3
        ctx.fillText(name, cx, cy - r - 2)
        ctx.shadowBlur   = 0
      }
    })
  }

  _drawPlayer (ctx, pos) {
    const [cx, cy] = this._w2c(pos.x, pos.z)
    const r        = Math.max(6, this._wr(0.45))
    const t        = performance.now() / 600
    const pulse    = r + Math.sin(t) * r * 0.35
    const selfTalk = this._talking?.has('self')
    const now      = performance.now() / 1000

    if (selfTalk) {
      // Green talking ring (overrides idle pulse)
      const tp    = 0.5 + Math.sin(now * 6) * 0.5
      const tRing = r + 5 + tp * 5
      ctx.beginPath(); ctx.arc(cx, cy, tRing, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(0,255,136,${0.7 + tp * 0.3})`
      ctx.lineWidth   = 3
      ctx.shadowColor = '#00ff88'; ctx.shadowBlur = 14
      ctx.stroke(); ctx.shadowBlur = 0
    } else {
      // Normal idle pulse ring
      ctx.beginPath(); ctx.arc(cx, cy, pulse, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(0,255,255,0.25)'; ctx.lineWidth = 2; ctx.stroke()
    }

    // Outer glow
    ctx.shadowColor = selfTalk ? '#00ff88' : '#00ffff'; ctx.shadowBlur = 10
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.fillStyle = selfTalk ? '#00ff88' : '#00e5ff'; ctx.fill()
    ctx.shadowBlur = 0

    // YOU label
    ctx.fillStyle = '#fff'
    ctx.font = `bold ${Math.max(9, r * 1.2)}px Inter,monospace`
    ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'
    ctx.shadowColor = '#000'; ctx.shadowBlur = 3
    ctx.fillText('YOU', cx, cy - r - 3)
    ctx.shadowBlur = 0
  }

  _drawNavPing (ctx) {
    if (!this._ping) return
    const age    = performance.now() - this._ping.born
    const dur    = 600   // ms the ping lasts
    if (age > dur) { this._ping = null; return }

    const t      = age / dur               // 0 → 1
    const alpha  = 1 - t                   // fades out
    const radius = 8 + t * 18             // expands outward

    // Destination cross
    const { cx, cy } = this._ping
    ctx.globalAlpha = alpha
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth   = 2
    const cs = 6
    ctx.beginPath()
    ctx.moveTo(cx - cs, cy); ctx.lineTo(cx + cs, cy)
    ctx.moveTo(cx, cy - cs); ctx.lineTo(cx, cy + cs)
    ctx.stroke()

    // Expanding ring
    ctx.strokeStyle = '#00ffff'
    ctx.lineWidth   = 1.5
    ctx.beginPath(); ctx.arc(cx, cy, radius, 0, Math.PI * 2); ctx.stroke()
    ctx.globalAlpha = 1
  }

  _drawHints (ctx, W, H) {
    ctx.fillStyle = 'rgba(255,255,255,0.22)'
    ctx.font = '11px Inter, monospace'
    ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'
    ctx.fillText('Click to walk  ·  Scroll to zoom  ·  Drag to pan  ·  WASD to move', W / 2, H - 8)
  }
}
