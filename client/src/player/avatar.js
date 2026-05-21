import * as THREE from 'three'

export function createLocalAvatar(username) {
  const group = new THREE.Group()

  const skin   = new THREE.MeshStandardMaterial({ color: 0xffbb88, roughness: 0.8 })
  const suit   = new THREE.MeshStandardMaterial({ color: 0x1144cc, roughness: 0.7, metalness: 0.1 })
  const visor  = new THREE.MeshStandardMaterial({ color: 0x88ddff, roughness: 0.05, metalness: 0.3, transparent: true, opacity: 0.7 })
  const boot   = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 })
  const hair   = new THREE.MeshStandardMaterial({ color: 0x221100, roughness: 0.9 })

  const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) => {
    const m = new THREE.Mesh(geo, mat)
    m.position.set(x, y, z)
    m.rotation.set(rx, ry, rz)
    m.castShadow = true
    group.add(m)
    return m
  }

  // Body
  add(new THREE.CapsuleGeometry(0.22, 0.55, 4, 12), suit,  0, 0.90, 0)

  // Head
  add(new THREE.SphereGeometry(0.18, 16, 12),        skin,  0, 1.62, 0)
  // Helmet visor strip
  add(new THREE.SphereGeometry(0.185, 16, 8, 0, Math.PI * 2, 0.4, 0.7), visor, 0, 1.62, 0)
  // Hair
  add(new THREE.SphereGeometry(0.185, 14, 8, 0, Math.PI * 2, 0, 1.1), hair, 0, 1.65, 0)

  // Arms
  add(new THREE.CapsuleGeometry(0.065, 0.32, 4, 8), suit, -0.31, 1.10, 0)
  add(new THREE.CapsuleGeometry(0.065, 0.32, 4, 8), suit,  0.31, 1.10, 0)
  // Hands
  add(new THREE.SphereGeometry(0.075, 10, 8), skin, -0.32, 0.72, 0)
  add(new THREE.SphereGeometry(0.075, 10, 8), skin,  0.32, 0.72, 0)

  // Legs — store refs for walk animation
  const legL = add(new THREE.CapsuleGeometry(0.085, 0.38, 4, 8), suit, -0.13, 0.42, 0)
  const legR = add(new THREE.CapsuleGeometry(0.085, 0.38, 4, 8), suit,  0.13, 0.42, 0)

  // Boots
  add(new THREE.BoxGeometry(0.18, 0.1, 0.28), boot, -0.13, 0.07, 0.04)
  add(new THREE.BoxGeometry(0.18, 0.1, 0.28), boot,  0.13, 0.07, 0.04)

  // Nametag sprite
  const cvs = document.createElement('canvas')
  cvs.width = 256; cvs.height = 56
  const ctx = cvs.getContext('2d')
  ctx.fillStyle = 'rgba(0,10,30,0.75)'
  ctx.roundRect(0, 0, 256, 56, 10); ctx.fill()
  ctx.fillStyle = '#aaddff'
  ctx.font = 'bold 26px Inter, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(username, 128, 38)
  const tex    = new THREE.CanvasTexture(cvs)
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }))
  sprite.position.set(0, 2.05, 0)
  sprite.scale.set(1.5, 0.33, 1)
  group.add(sprite)

  // Walk animation refs
  group.userData.legL = legL
  group.userData.legR = legR
  group.userData.walkClock = 0

  return group
}

export function animateWalk(avatar, moving, delta) {
  const { legL, legR } = avatar.userData
  if (!legL || !legR) return
  if (moving) {
    // 12 rad/s ≈ 1.9 Hz — matches a brisk walk at WALK_SPEED 5.5 m/s
    avatar.userData.walkClock += delta * 12
    const swing = Math.sin(avatar.userData.walkClock) * 0.42
    legL.rotation.x =  swing
    legR.rotation.x = -swing
  } else {
    // Return to neutral — delta-corrected exponential decay so snap-back
    // speed is identical at 30 fps and 144 fps (half-life ≈ 55 ms)
    const decay = Math.exp(-12 * delta)
    legL.rotation.x *= decay
    legR.rotation.x *= decay
  }
}
