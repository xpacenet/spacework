import * as THREE from 'three'
import { setupControls }                   from './controls.js'
import { createLocalAvatar, animateWalk }  from './avatar.js'
import { getZone, setFurnitureColliders } from './collision.js'
import { BLDG as B }                       from '../scene/building.js'
import { buildFurniture }                  from '../scene/furniture.js'

// ── Zone visual config ────────────────────────────────────────────────────
const ZONES = [
  { name: 'OUTSIDE',      color: '#88cc66', mapColor: 'rgba(70,120,50,0.35)',   border: '#66aa44', desc: 'Outside the building' },
  { name: 'LOBBY',        color: '#ffffff', mapColor: 'rgba(200,200,230,0.40)', border: '#aaaacc', desc: 'Reception & Entrance' },
  { name: 'OPS',          color: '#ffaa44', mapColor: 'rgba(200,120,20,0.40)',  border: '#ffaa44', desc: 'Operations & Support' },
  { name: 'FUN',          color: '#44ffaa', mapColor: 'rgba(20,180,100,0.40)',  border: '#44ffaa', desc: 'Chill & Social' },
  { name: 'DESIGN',       color: '#ff6ba0', mapColor: 'rgba(200,50,100,0.40)', border: '#ff6ba0', desc: 'UI/UX & 3D Design' },
  { name: 'ENGINEERING',  color: '#44aaff', mapColor: 'rgba(30,100,200,0.40)', border: '#44aaff', desc: 'Development & Code' },
]

// Map canvas world extents (includes outdoor area)
const MAP = {
  minX: -26, maxX: 26,
  minZ: -27, maxZ: 28,
  W: 180, H: 200,
}

let mapCanvas, mapCtx

export function initPlayer (scene, camera, renderer, onZoneChange) {
  const username  = window._spaceUsername || 'You'
  const avatar    = createLocalAvatar(username)
  avatar.position.set(0, 0, 22)   // spawn outside, facing building
  scene.add(avatar)

  // Build furniture colliders and register them
  const { colliders: furnitureCols } = buildFurniture(scene)
  setFurnitureColliders(furnitureCols)

  const controls  = setupControls(avatar, camera, renderer.domElement)
  const clock     = new THREE.Clock()
  let currentZone = ''

  initMapClick(controls, avatar)

  function detectZone () {
    const zone = getZone(avatar.position)
    if (zone !== currentZone) {
      currentZone = zone
      onZoneChange?.(currentZone)
    }
  }

  function updateModeBadge () {
    const badge = document.getElementById('mode-badge')
    if (!badge) return
    const m = controls.getMode()
    badge.textContent   = m === 'overview' ? '🗺 OVERVIEW' : '🎮 EXPLORE'
    badge.style.background   = m === 'overview' ? 'rgba(255,160,0,0.2)' : 'rgba(0,100,255,0.2)'
    badge.style.borderColor  = m === 'overview' ? 'rgba(255,160,0,0.4)' : 'rgba(0,150,255,0.4)'
    badge.style.color        = m === 'overview' ? '#ffaa00' : '#4af'
  }

  function tick () {
    requestAnimationFrame(tick)
    const delta  = clock.getDelta()
    const moving = controls.update(delta)
    animateWalk(avatar, moving, delta)
    detectZone()
    updateModeBadge()
    drawMinimap(avatar.position, controls.getMode())
  }
  tick()

  return {
    getPosition:  () => avatar.position.clone(),
    getRotation:  () => avatar.rotation.clone(),
    navigate:     (dest) => controls.navigate(dest),
    isDragMoved:  () => controls.isDragMoved(),
  }
}

// ── Minimap click-to-move ─────────────────────────────────────────────────
function initMapClick (controls, avatar) {
  const cvs = document.getElementById('minimap-canvas')
  if (!cvs) return
  cvs.style.cursor = 'crosshair'
  cvs.addEventListener('click', e => {
    const rect = cvs.getBoundingClientRect()
    const mx   = (e.clientX - rect.left) / rect.width  * MAP.W
    const my   = (e.clientY - rect.top)  / rect.height * MAP.H
    // Map canvas → world coords
    const wx = MAP.minX + (mx / MAP.W) * (MAP.maxX - MAP.minX)
    const wz = MAP.maxZ - (my / MAP.H) * (MAP.maxZ - MAP.minZ)
    controls.navigate({ x: wx, z: wz })
    showMapPing(mx, my)
  })
}

function showMapPing (mx, my) {
  if (!mapCtx) return
  mapCtx.strokeStyle = '#fff'
  mapCtx.lineWidth   = 1.5
  mapCtx.globalAlpha = 0.9
  mapCtx.beginPath(); mapCtx.arc(mx, my, 7, 0, Math.PI * 2); mapCtx.stroke()
  mapCtx.globalAlpha = 1
}

// ── Minimap drawing ───────────────────────────────────────────────────────
function initMinimap () {
  mapCanvas = document.getElementById('minimap-canvas')
  if (!mapCanvas) return
  mapCanvas.width  = MAP.W
  mapCanvas.height = MAP.H
  mapCtx = mapCanvas.getContext('2d')
}

// world → map canvas
function wToM (x, z) {
  const mx = ((x - MAP.minX) / (MAP.maxX - MAP.minX)) * MAP.W
  const my = ((MAP.maxZ - z) / (MAP.maxZ - MAP.minZ)) * MAP.H
  return [mx, my]
}

function drawMinimap (playerPos, mode) {
  if (!mapCtx) { initMinimap(); return }
  const ctx = mapCtx
  ctx.clearRect(0, 0, MAP.W, MAP.H)

  // Outside background (grass green)
  ctx.fillStyle = 'rgba(50,90,40,0.5)'
  ctx.fillRect(0, 0, MAP.W, MAP.H)

  // Building footprint background
  const [bx1, by1] = wToM(B.minX, B.maxZ)
  const [bx2, by2] = wToM(B.maxX, B.minZ)
  ctx.fillStyle = 'rgba(240,235,225,0.25)'
  ctx.fillRect(bx1, by1, bx2 - bx1, by2 - by1)

  // Room zone blocks
  const rooms = [
    { name: 'LOBBY',       x1: B.minX, x2: B.maxX,  z1: B.lobbyZ, z2: B.maxZ  },
    { name: 'OPS',         x1: B.minX, x2: B.centerX,z1: B.midZ,   z2: B.lobbyZ },
    { name: 'FUN',         x1: B.centerX,x2: B.maxX, z1: B.midZ,   z2: B.lobbyZ },
    { name: 'DESIGN',      x1: B.minX, x2: B.centerX,z1: B.minZ,   z2: B.midZ  },
    { name: 'ENGINEERING', x1: B.centerX,x2: B.maxX, z1: B.minZ,   z2: B.midZ  },
  ]
  rooms.forEach(r => {
    const zone = ZONES.find(z => z.name === r.name)
    if (!zone) return
    const [rx1, ry1] = wToM(r.x1, r.z2)
    const [rx2, ry2] = wToM(r.x2, r.z1)
    ctx.fillStyle   = zone.mapColor
    ctx.fillRect(rx1, ry1, rx2 - rx1, ry2 - ry1)
    ctx.strokeStyle = zone.border + '88'
    ctx.lineWidth   = 1
    ctx.strokeRect(rx1 + 0.5, ry1 + 0.5, rx2 - rx1 - 1, ry2 - ry1 - 1)
    // Label
    ctx.fillStyle = zone.border
    ctx.font      = 'bold 7px Inter, monospace'
    ctx.textAlign = 'center'
    const lx = (rx1 + rx2) / 2, ly = ry1 + 10
    ctx.fillText(r.name, lx, ly)
  })

  // Door indicators
  const doors = [
    { x: 0,  z: B.maxZ,   label: '🚪' },
    { x: -11, z: B.lobbyZ, label: '▶' },
    { x:  11, z: B.lobbyZ, label: '▶' },
    { x: -11, z: B.midZ,   label: '▶' },
    { x:  11, z: B.midZ,   label: '▶' },
  ]
  doors.forEach(({ x, z, label }) => {
    const [dx, dy] = wToM(x, z)
    ctx.fillStyle   = 'rgba(255,255,255,0.7)'
    ctx.font        = '8px sans-serif'
    ctx.textAlign   = 'center'
    ctx.fillText(label, dx, dy + 3)
  })

  // Building outline
  ctx.strokeStyle = 'rgba(220,210,190,0.5)'
  ctx.lineWidth   = 1.5
  ctx.strokeRect(bx1, by1, bx2 - bx1, by2 - by1)

  // Overview mode tint
  if (mode === 'overview') {
    ctx.strokeStyle = 'rgba(255,160,0,0.7)'
    ctx.lineWidth   = 2
    ctx.strokeRect(2, 2, MAP.W - 4, MAP.H - 4)
    ctx.fillStyle = 'rgba(255,160,0,0.06)'
    ctx.fillRect(2, 2, MAP.W - 4, MAP.H - 4)
  }

  // Player dot
  const [px, py] = wToM(playerPos.x, playerPos.z)
  ctx.shadowColor = '#00ffff'; ctx.shadowBlur = 8
  ctx.fillStyle   = '#00ffff'
  ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI * 2); ctx.fill()
  ctx.shadowBlur  = 0

  // YOU label
  ctx.fillStyle   = '#fff'
  ctx.font        = 'bold 7px Inter, monospace'
  ctx.textAlign   = 'center'
  ctx.shadowColor = '#0ff'; ctx.shadowBlur = 4
  ctx.fillText('YOU', px, py - 8)
  ctx.shadowBlur  = 0

  // Footer hint
  ctx.fillStyle = 'rgba(255,255,255,0.28)'
  ctx.font      = '7px Inter, monospace'
  ctx.textAlign = 'center'
  ctx.fillText('click map to move', MAP.W / 2, MAP.H - 4)
}
