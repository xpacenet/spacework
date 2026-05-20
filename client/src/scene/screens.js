import * as THREE from 'three'
import { BLDG as B } from './building.js'

// ── Screen definitions — one per zone ──────────────────────────────────────
export const SCREENS = [
  {
    id:       'design-screen',
    label:    'Design Board',
    zone:     'DESIGN',
    tool:     'Excalidraw',
    url:      'https://excalidraw.com',
    position: { x: B.minX + 0.12, y: 2.2, z: -14 },
    rotationY: Math.PI / 2,   // faces +X (into room from left wall)
    width: 4.5, height: 2.8,
    color: 0xff6ba0,
    emoji: '✏️',
  },
  {
    id:       'engineering-screen',
    label:    'Code Docs',
    zone:     'ENGINEERING',
    tool:     'HackMD',
    url:      'https://hackmd.io',
    position: { x: B.maxX - 0.12, y: 2.2, z: -14 },
    rotationY: -Math.PI / 2,  // faces -X (into room from right wall)
    width: 4.5, height: 2.8,
    color: 0x44aaff,
    emoji: '💻',
  },
  {
    id:       'ops-screen',
    label:    'Ops Dashboard',
    zone:     'OPS',
    tool:     'Grafana',
    url:      'https://play.grafana.org',
    position: { x: B.minX + 0.12, y: 2.2, z: 0 },
    rotationY: Math.PI / 2,
    width: 4.0, height: 2.5,
    color: 0xffaa44,
    emoji: '📊',
  },
  {
    id:       'fun-screen',
    label:    'Vibe Zone',
    zone:     'FUN',
    tool:     'Spotify',
    url:      'https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator&theme=0',
    position: { x: B.maxX - 0.12, y: 2.2, z: 0 },
    rotationY: -Math.PI / 2,
    width: 4.0, height: 2.5,
    color: 0x44ffaa,
    emoji: '🎵',
  },
]

// ── Build all screens ─────────────────────────────────────────────────────
export function buildScreens (scene) {
  const meshes = []

  SCREENS.forEach(s => {
    const group = new THREE.Group()
    group.position.set(s.position.x, s.position.y, s.position.z)
    group.rotation.y = s.rotationY
    scene.add(group)

    const ft = 0.1  // frame thickness
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a, roughness: 0.3, metalness: 0.85,
    })

    // Frame bars
    const addBar = (x, y, z, w, h, d) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), frameMat)
      m.position.set(x, y, z)
      group.add(m)
    }
    addBar(0,                     s.height / 2 + ft / 2, 0, s.width + ft * 2, ft, ft * 2)  // top
    addBar(0,                    -s.height / 2 - ft / 2, 0, s.width + ft * 2, ft, ft * 2)  // bottom
    addBar(-s.width / 2 - ft / 2, 0,                     0, ft, s.height + ft * 2, ft * 2)  // left
    addBar( s.width / 2 + ft / 2, 0,                     0, ft, s.height + ft * 2, ft * 2)  // right

    // Glow trim
    const glowMat = new THREE.MeshStandardMaterial({
      color: s.color, emissive: s.color, emissiveIntensity: 2.5, roughness: 0.08,
    })
    const addTrim = (x, y, z, w, h, d) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), glowMat)
      m.position.set(x, y, z)
      group.add(m)
    }
    addTrim(0,                s.height / 2, 0.02, s.width, 0.04, 0.04)
    addTrim(0,               -s.height / 2, 0.02, s.width, 0.04, 0.04)
    addTrim(-s.width / 2, 0,               0.02, 0.04, s.height, 0.04)
    addTrim( s.width / 2, 0,               0.02, 0.04, s.height, 0.04)

    // Screen face
    const tex    = makeScreenTexture(s)
    const faceMat = new THREE.MeshStandardMaterial({
      map: tex, emissiveMap: tex,
      emissive: new THREE.Color(s.color),
      emissiveIntensity: 0.14,
      roughness: 0.1,
    })
    const screenMesh = new THREE.Mesh(new THREE.PlaneGeometry(s.width, s.height), faceMat)
    screenMesh.position.set(0, 0, 0.02)
    screenMesh.userData.screen = s
    group.add(screenMesh)
    meshes.push(screenMesh)

    // Point light spill
    const light = new THREE.PointLight(s.color, 16, 8)
    light.position.set(0, 0, 0.6)
    group.add(light)

    // Idle pulse
    let t = Math.random() * Math.PI * 2
    ;(function pulse () {
      requestAnimationFrame(pulse)
      t += 0.018
      faceMat.emissiveIntensity = 0.12 + Math.sin(t) * 0.04
      light.intensity = 14 + Math.sin(t * 0.65) * 4
    })()
  })

  return { meshes, screens: SCREENS }
}

// ── Canvas texture for screen face ────────────────────────────────────────
function makeScreenTexture (s) {
  const W = 512
  const H = Math.round(512 * (s.height / s.width))
  const cvs = document.createElement('canvas')
  cvs.width = W; cvs.height = H
  const ctx = cvs.getContext('2d')
  const hex = '#' + s.color.toString(16).padStart(6, '0')

  // Background
  ctx.fillStyle = '#060c18'
  ctx.fillRect(0, 0, W, H)

  // Dot grid
  ctx.fillStyle = 'rgba(200,230,255,0.035)'
  for (let gx = 0; gx < W; gx += 32) {
    for (let gy = 0; gy < H; gy += 32) {
      ctx.fillRect(gx, gy, 2, 2)
    }
  }

  // Header band
  const grad = ctx.createLinearGradient(0, 0, W, 0)
  grad.addColorStop(0, hex + '55')
  grad.addColorStop(1, 'transparent')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, W, 46)

  // Zone label
  ctx.fillStyle = hex
  ctx.font = 'bold 16px Inter, monospace'
  ctx.textAlign = 'left'
  ctx.fillText(s.zone, 14, 30)

  // Tool name
  ctx.fillStyle = 'rgba(255,255,255,0.38)'
  ctx.font = '12px Inter, monospace'
  ctx.textAlign = 'right'
  ctx.fillText(s.tool, W - 14, 30)

  // Divider
  ctx.strokeStyle = hex + '44'
  ctx.lineWidth = 1
  ctx.beginPath(); ctx.moveTo(0, 48); ctx.lineTo(W, 48); ctx.stroke()

  // Emoji
  const emojiSize = Math.round(H * 0.27)
  ctx.font = `${emojiSize}px sans-serif`
  ctx.textAlign = 'center'
  ctx.fillText(s.emoji, W / 2, H * 0.52)

  // Label
  ctx.fillStyle = '#fff'
  ctx.font = `bold ${Math.round(H * 0.1)}px Inter, monospace`
  ctx.textAlign = 'center'
  ctx.shadowColor = hex; ctx.shadowBlur = 18
  ctx.fillText(s.label, W / 2, H * 0.72)
  ctx.shadowBlur = 0

  // Hint
  ctx.fillStyle = hex + 'bb'
  ctx.font = `${Math.round(H * 0.062)}px Inter, monospace`
  ctx.textAlign = 'center'
  ctx.fillText('[ E ] or click to open', W / 2, H * 0.88)

  // Bottom accent
  ctx.strokeStyle = hex + '55'
  ctx.lineWidth = 2
  ctx.beginPath(); ctx.moveTo(0, H - 2); ctx.lineTo(W, H - 2); ctx.stroke()

  return new THREE.CanvasTexture(cvs)
}
