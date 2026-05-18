import * as THREE from 'three'
import { setupControls } from './controls.js'
import { createLocalAvatar, animateWalk } from './avatar.js'
import { buildPath } from './collision.js'

const SHIP  = { minZ: -20, maxZ: 22, minX: -7, maxX: 7 }
const ZONES = [
  { name: 'BRIDGE', minZ:  8, maxZ: 22, color: '#4af',  mapColor: 'rgba(30,80,200,0.45)',  border: '#4466ff', desc: 'Command & Meetings' },
  { name: 'LAB',    minZ: -5, maxZ:  8, color: '#0fc',  mapColor: 'rgba(0,160,120,0.40)',  border: '#00ffcc', desc: 'Deep Work & Collaboration' },
  { name: 'LOUNGE', minZ:-20, maxZ: -5, color: '#c6f',  mapColor: 'rgba(100,20,200,0.40)', border: '#aa55ff', desc: 'Casual & Social' },
]
const MAP_W = 180, MAP_H = 340
let mapCanvas, mapCtx

export function initPlayer(scene, camera, renderer, onZoneChange) {
  const username = window._spaceUsername || 'You'
  const avatar   = createLocalAvatar(username)
  avatar.position.set(0, 0, 12)
  scene.add(avatar)

  const controls  = setupControls(avatar, camera, renderer.domElement)
  const clock     = new THREE.Clock()
  let currentZone = ''

  // Minimap click-to-move
  initMapClick(controls, avatar)

  function detectZone() {
    const z = avatar.position.z
    for (const zone of ZONES) {
      if (z >= zone.minZ && z <= zone.maxZ) {
        if (zone.name !== currentZone) {
          currentZone = zone.name
          onZoneChange?.(currentZone)
        }
        return
      }
    }
    if (currentZone !== '') { currentZone = ''; onZoneChange?.('') }
  }

  // Mode badge updates
  function updateModeBadge() {
    const badge = document.getElementById('mode-badge')
    if (!badge) return
    const m = controls.getMode()
    badge.textContent = m === 'overview' ? '🗺 OVERVIEW' : '🎮 EXPLORE'
    badge.style.background = m === 'overview' ? 'rgba(255,160,0,0.2)' : 'rgba(0,100,255,0.2)'
    badge.style.borderColor= m === 'overview' ? 'rgba(255,160,0,0.4)' : 'rgba(0,150,255,0.4)'
    badge.style.color      = m === 'overview' ? '#ffaa00' : '#4af'
  }

  function tick() {
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
    getPosition: () => avatar.position.clone(),
    getRotation: () => avatar.rotation.clone(),
  }
}

// ── Minimap canvas click-to-move ───────────────────────────────────────────
function initMapClick(controls, avatar) {
  const cvs = document.getElementById('minimap-canvas')
  if (!cvs) return
  cvs.style.cursor = 'crosshair'
  cvs.addEventListener('click', e => {
    const rect = cvs.getBoundingClientRect()
    const mx   = (e.clientX - rect.left) / rect.width  * MAP_W
    const my   = (e.clientY - rect.top)  / rect.height * MAP_H

    // Map coords → world coords
    const wx = SHIP.minX + (mx / MAP_W) * (SHIP.maxX - SHIP.minX)
    const wz = SHIP.maxZ - (my / MAP_H) * (SHIP.maxZ - SHIP.minZ)

    const path = buildPath(
      { x: avatar.position.x, z: avatar.position.z },
      { x: wx, z: wz }
    )
    controls.setNavPath(path)
    showMapPing(mx, my)
  })
}

function showMapPing(mx, my) {
  const cvs = document.getElementById('minimap-canvas')
  if (!cvs || !mapCtx) return
  // Draw a temporary ping ring — will fade in next draw calls
  mapCtx.strokeStyle = '#fff'
  mapCtx.lineWidth   = 1.5
  mapCtx.globalAlpha = 0.8
  mapCtx.beginPath()
  mapCtx.arc(mx, my, 8, 0, Math.PI*2)
  mapCtx.stroke()
  mapCtx.globalAlpha = 1
}

// ── Minimap drawing ─────────────────────────────────────────────────────────
function initMinimap() {
  mapCanvas = document.getElementById('minimap-canvas')
  if (!mapCanvas) return
  mapCanvas.width  = MAP_W
  mapCanvas.height = MAP_H
  mapCtx = mapCanvas.getContext('2d')
}

function wToM(x, z) {
  const mx = ((x - SHIP.minX) / (SHIP.maxX - SHIP.minX)) * MAP_W
  const my = ((SHIP.maxZ - z) / (SHIP.maxZ - SHIP.minZ)) * MAP_H
  return [mx, my]
}

function drawMinimap(playerPos, mode) {
  if (!mapCtx) { initMinimap(); return }
  const ctx = mapCtx
  ctx.clearRect(0, 0, MAP_W, MAP_H)

  // Background
  ctx.fillStyle = 'rgba(0,5,20,0.95)'
  ctx.fillRect(0, 0, MAP_W, MAP_H)

  // Zone blocks
  ZONES.forEach(z => {
    const [x1, y1] = wToM(SHIP.minX, z.maxZ)
    const [x2, y2] = wToM(SHIP.maxX, z.minZ)
    ctx.fillStyle   = z.mapColor
    ctx.fillRect(x1, y1, x2-x1, y2-y1)
    ctx.strokeStyle = z.border
    ctx.lineWidth   = 1
    ctx.strokeRect(x1+0.5, y1+0.5, x2-x1-1, y2-y1-1)
    ctx.fillStyle = z.border
    ctx.font = 'bold 9px Inter, monospace'
    ctx.textAlign = 'center'
    ctx.fillText(z.name, (x1+x2)/2, y1+13)
  })

  // Doorway gaps
  const doorways = [
    { z: 8,  label: 'Door' },
    { z: -5, label: 'Door' },
  ]
  doorways.forEach(d => {
    const [lx, ly] = wToM(-1.6, d.z)
    const [rx]     = wToM( 1.6, d.z)
    // White gap indicating doorway
    ctx.fillStyle = 'rgba(255,255,255,0.15)'
    ctx.fillRect(lx, ly - 4, rx - lx, 8)
    ctx.strokeStyle = 'rgba(255,255,255,0.5)'
    ctx.lineWidth = 1
    ctx.strokeRect(lx, ly - 4, rx - lx, 8)
    // Door icon
    ctx.fillStyle  = 'rgba(255,255,255,0.6)'
    ctx.font       = '7px monospace'
    ctx.textAlign  = 'center'
    ctx.fillText('▶◀', (lx+rx)/2, ly + 3)
  })

  // Ship outline
  ctx.strokeStyle = 'rgba(100,160,255,0.35)'
  ctx.lineWidth   = 1.5
  ctx.strokeRect(1, 1, MAP_W-2, MAP_H-2)

  // Grid
  ctx.strokeStyle = 'rgba(255,255,255,0.04)'
  ctx.lineWidth   = 1
  for (let gx = MAP_W/4; gx < MAP_W; gx += MAP_W/4) {
    ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, MAP_H); ctx.stroke()
  }

  // Overview mode indicator on map
  if (mode === 'overview') {
    ctx.strokeStyle = 'rgba(255,170,0,0.6)'
    ctx.lineWidth   = 2
    ctx.strokeRect(2, 2, MAP_W-4, MAP_H-4)
    ctx.fillStyle = 'rgba(255,170,0,0.15)'
    ctx.fillRect(2, 2, MAP_W-4, MAP_H-4)
  }

  // Player dot
  const [px, py] = wToM(playerPos.x, playerPos.z)
  ctx.shadowColor = '#00ffff'; ctx.shadowBlur = 10
  ctx.fillStyle   = '#00ffff'
  ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI*2); ctx.fill()

  // Direction tick
  ctx.shadowBlur  = 0
  ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 1.5
  ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, py - 10); ctx.stroke()

  // YOU label
  ctx.fillStyle   = '#fff'
  ctx.font        = 'bold 8px Inter, monospace'
  ctx.textAlign   = 'center'
  ctx.shadowColor = '#0ff'; ctx.shadowBlur = 5
  ctx.fillText('YOU', px, py - 14)
  ctx.shadowBlur  = 0

  // Click-to-move hint
  ctx.fillStyle = 'rgba(255,255,255,0.3)'
  ctx.font      = '8px Inter, monospace'
  ctx.textAlign = 'center'
  ctx.fillText('click map to move', MAP_W/2, MAP_H - 5)
}
