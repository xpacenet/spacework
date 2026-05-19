import * as THREE from 'three'

// ── Screen definitions ─────────────────────────────────────────────────────
export const SCREENS = [
  {
    id:       'bridge-whiteboard',
    label:    'Whiteboard',
    zone:     'BRIDGE',
    tool:     'Excalidraw',
    url:      'https://excalidraw.com',
    position: { x: 0,    y: 2.2, z: 19.2 },
    rotationY: Math.PI,          // face -Z toward players entering bridge
    width:  5.5,
    height: 3.0,
    color:  0x4466ff,
    emoji:  '✏️',
  },
  {
    id:       'lab-docs',
    label:    'Team Docs',
    zone:     'LAB',
    tool:     'HackMD',
    url:      'https://hackmd.io',
    position: { x: -5.8, y: 2.2, z: 0.5 },
    rotationY: Math.PI / 2,      // face +X into lab room
    width:  4.0,
    height: 2.5,
    color:  0x00ffcc,
    emoji:  '📝',
  },
  {
    id:       'lounge-vibe',
    label:    'Vibe Zone',
    zone:     'LOUNGE',
    tool:     'Spotify',
    url:      'https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator&theme=0',
    position: { x: 0,    y: 2.2, z: -19.2 },
    rotationY: 0,                // face +Z toward players in lounge
    width:  4.5,
    height: 2.8,
    color:  0xaa55ff,
    emoji:  '🎵',
  },
]

// ── Build all screens in the scene ─────────────────────────────────────────
export function buildScreens(scene) {
  const meshes = []

  SCREENS.forEach(s => {
    const group = new THREE.Group()
    group.position.set(s.position.x, s.position.y, s.position.z)
    group.rotation.y = s.rotationY
    scene.add(group)

    // Dark metal frame
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x0d1424, roughness: 0.25, metalness: 0.92,
    })
    const ft = 0.12  // frame thickness
    addBox(group, frameMat, -(s.width / 2 + ft / 2), 0, 0,          ft,                 s.height + ft * 2, ft * 2)  // left
    addBox(group, frameMat,  (s.width / 2 + ft / 2), 0, 0,          ft,                 s.height + ft * 2, ft * 2)  // right
    addBox(group, frameMat, 0,  s.height / 2 + ft / 2, 0,           s.width + ft * 2,   ft,                ft * 2)  // top
    addBox(group, frameMat, 0, -s.height / 2 - ft / 2, 0,           s.width + ft * 2,   ft,                ft * 2)  // bottom

    // Glow trim inside frame edges
    const glowMat = glowMaterial(s.color)
    addBox(group, glowMat, 0,  s.height / 2, 0.02, s.width, 0.035, 0.035)   // top edge
    addBox(group, glowMat, 0, -s.height / 2, 0.02, s.width, 0.035, 0.035)   // bottom edge
    addBox(group, glowMat, -s.width / 2, 0,  0.02, 0.035, s.height, 0.035)  // left edge
    addBox(group, glowMat,  s.width / 2, 0,  0.02, 0.035, s.height, 0.035)  // right edge

    // Interactive screen face
    const screenTex = makeScreenTexture(s)
    const screenMat = new THREE.MeshStandardMaterial({
      map:              screenTex,
      emissiveMap:      screenTex,
      emissive:         new THREE.Color(s.color),
      emissiveIntensity: 0.14,
      roughness:        0.1,
    })
    const screenMesh = new THREE.Mesh(new THREE.PlaneGeometry(s.width, s.height), screenMat)
    screenMesh.position.set(0, 0, 0.02)
    screenMesh.userData.screen = s
    group.add(screenMesh)
    meshes.push(screenMesh)

    // Light spill from screen
    const light = new THREE.PointLight(s.color, 18, 9)
    light.position.set(0, 0, 0.6)
    group.add(light)

    // Subtle idle pulse
    let t = Math.random() * Math.PI * 2
    ;(function pulse() {
      requestAnimationFrame(pulse)
      t += 0.018
      screenMat.emissiveIntensity = 0.12 + Math.sin(t) * 0.04
      light.intensity = 16 + Math.sin(t * 0.65) * 4
    })()
  })

  return { meshes, screens: SCREENS }
}

// ── Texture for screen face ────────────────────────────────────────────────
function makeScreenTexture(s) {
  const W = 512
  const H = Math.round(512 * (s.height / s.width))
  const cvs = document.createElement('canvas')
  cvs.width = W; cvs.height = H
  const ctx = cvs.getContext('2d')
  const hex = '#' + s.color.toString(16).padStart(6, '0')

  // Dark BG
  ctx.fillStyle = '#020b1a'
  ctx.fillRect(0, 0, W, H)

  // Subtle dot-grid
  ctx.fillStyle = 'rgba(100,180,255,0.04)'
  for (let gx = 0; gx < W; gx += 36) {
    for (let gy = 0; gy < H; gy += 36) {
      ctx.fillRect(gx, gy, 2, 2)
    }
  }

  // Header gradient band
  const grad = ctx.createLinearGradient(0, 0, W, 0)
  grad.addColorStop(0, hex + '44')
  grad.addColorStop(1, 'transparent')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, W, 48)

  // Zone label
  ctx.fillStyle = hex
  ctx.font = 'bold 17px Inter, monospace'
  ctx.textAlign = 'left'
  ctx.fillText(s.zone, 14, 31)

  // Tool name (top-right)
  ctx.fillStyle = 'rgba(255,255,255,0.4)'
  ctx.font = '13px Inter, monospace'
  ctx.textAlign = 'right'
  ctx.fillText(s.tool, W - 14, 31)

  // Thin header divider
  ctx.strokeStyle = hex + '55'
  ctx.lineWidth = 1
  ctx.beginPath(); ctx.moveTo(0, 50); ctx.lineTo(W, 50); ctx.stroke()

  // Big emoji center
  const emojiSize = Math.round(H * 0.28)
  ctx.font = `${emojiSize}px sans-serif`
  ctx.textAlign = 'center'
  ctx.fillText(s.emoji, W / 2, H * 0.52)

  // Screen label
  ctx.fillStyle = '#fff'
  ctx.font = `bold ${Math.round(H * 0.1)}px Inter, monospace`
  ctx.textAlign = 'center'
  ctx.shadowColor = hex
  ctx.shadowBlur = 18
  ctx.fillText(s.label, W / 2, H * 0.72)
  ctx.shadowBlur = 0

  // Interaction hint
  ctx.fillStyle = hex + 'bb'
  ctx.font = `${Math.round(H * 0.065)}px Inter, monospace`
  ctx.textAlign = 'center'
  ctx.fillText('[ E ] or click to open', W / 2, H * 0.88)

  // Bottom accent line
  ctx.strokeStyle = hex + '55'
  ctx.lineWidth = 2
  ctx.beginPath(); ctx.moveTo(0, H - 2); ctx.lineTo(W, H - 2); ctx.stroke()

  return new THREE.CanvasTexture(cvs)
}

// ── Helpers ────────────────────────────────────────────────────────────────
function glowMaterial(color) {
  return new THREE.MeshStandardMaterial({
    color, emissive: color, emissiveIntensity: 2.5, roughness: 0.08,
  })
}

function addBox(parent, mat, x, y, z, w, h, d) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
  m.position.set(x, y, z)
  parent.add(m)
  return m
}
