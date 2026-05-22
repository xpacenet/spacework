import * as THREE from 'three'

// ── Avatar presets ────────────────────────────────────────────────────────────
// Each preset drives skin tone, hair colour/style and outfit colour.
// hairStyle: 0 = short/buzzcut  1 = medium round  2 = long  3 = afro/curly
export const AVATAR_PRESETS = [
  { id: 0, label: 'Alex',   skin: 0xFFCBA4, hair: 0x2C1810, outfit: 0x1E3A8A, accent: 0xF1F5F9, hairStyle: 1 },
  { id: 1, label: 'Jordan', skin: 0xC68642, hair: 0x111111, outfit: 0x14532D, accent: 0xFEF9C3, hairStyle: 0 },
  { id: 2, label: 'Morgan', skin: 0x7C3D12, hair: 0x0A0500, outfit: 0x881337, accent: 0xFED7AA, hairStyle: 2 },
  { id: 3, label: 'Casey',  skin: 0xF0C080, hair: 0x7C2D12, outfit: 0x164E63, accent: 0xE0F2FE, hairStyle: 3 },
  { id: 4, label: 'Riley',  skin: 0x92400E, hair: 0x030303, outfit: 0x9A3412, accent: 0xFFF7ED, hairStyle: 0 },
  { id: 5, label: 'Sam',    skin: 0xFDE8D8, hair: 0xB45309, outfit: 0x4C1D95, accent: 0xEDE9FE, hairStyle: 1 },
]

// ── Status config ─────────────────────────────────────────────────────────────
export const STATUS_OPTIONS = [
  { id: 'available', label: '🟢 Available', color: 0x00e676 },
  { id: 'busy',      label: '🔴 Busy',      color: 0xff4444 },
  { id: 'away',      label: '🟡 Away',      color: 0xffcc00 },
  { id: 'meeting',   label: '🟣 In Meeting',color: 0xaa44ff },
]
const STATUS_COLORS = Object.fromEntries(STATUS_OPTIONS.map(s => [s.id, s.color]))

// ── Public API ────────────────────────────────────────────────────────────────

export function createLocalAvatar (username, presetId = 0) {
  const group = new THREE.Group()
  _populate(group, username, presetId)
  return group
}

/**
 * Update the floating status dot colour on any avatar.
 * Safe to call any time — no-op if the mesh isn't built yet.
 */
export function setAvatarStatus (avatarGroup, status) {
  avatarGroup.userData.status = status
  const mesh = avatarGroup.userData.statusMesh
  if (mesh) mesh.material.color.setHex(STATUS_COLORS[status] ?? STATUS_COLORS.available)
}

/** Swap preset in-place — safe because controls.js holds the group reference. */
export function applyPreset (avatarGroup, username, presetId) {
  avatarGroup.traverse(child => {
    if (child.isMesh || child.isSprite) {
      child.geometry?.dispose()
      const mats = Array.isArray(child.material) ? child.material : [child.material]
      mats.forEach(m => { m?.map?.dispose(); m?.dispose() })
    }
  })
  while (avatarGroup.children.length) avatarGroup.remove(avatarGroup.children[0])
  _populate(avatarGroup, username, presetId)
}

// ── Internal builder ──────────────────────────────────────────────────────────

function _populate (group, username, presetId) {
  const p = AVATAR_PRESETS[presetId] ?? AVATAR_PRESETS[0]

  const mSkin   = mat(p.skin,   0.75)
  const mOutfit = mat(p.outfit, 0.65, 0.05)
  const mAccent = mat(p.accent, 0.60)
  const mHair   = mat(p.hair,   0.90)
  const mBoot   = mat(0x111111, 0.80)
  const mEye    = mat(0x111111, 0.30)

  const add = (geo, m, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) => {
    const mesh = new THREE.Mesh(geo, m)
    mesh.position.set(x, y, z)
    mesh.rotation.set(rx, ry, rz)
    mesh.castShadow = true
    group.add(mesh)
    return mesh
  }

  // ── Torso ─────────────────────────────────────────────────────────────
  add(new THREE.CapsuleGeometry(0.21, 0.52, 4, 12), mOutfit)
  // Belt
  add(new THREE.CylinderGeometry(0.215, 0.215, 0.055, 16), mBoot, 0, 0.635)
  // Chest badge / accent stripe
  add(new THREE.BoxGeometry(0.26, 0.09, 0.04), mAccent, 0, 1.12, 0.208)

  // ── Neck ──────────────────────────────────────────────────────────────
  add(new THREE.CylinderGeometry(0.072, 0.090, 0.14, 12), mSkin, 0, 1.49)

  // ── Head ──────────────────────────────────────────────────────────────
  add(new THREE.SphereGeometry(0.19, 20, 16), mSkin, 0, 1.68)

  // Ears
  add(new THREE.SphereGeometry(0.048, 10, 8), mSkin, -0.200, 1.68)
  add(new THREE.SphereGeometry(0.048, 10, 8), mSkin,  0.200, 1.68)

  // Eye whites
  add(new THREE.SphereGeometry(0.034, 10, 8), mAccent, -0.068, 1.700, 0.163)
  add(new THREE.SphereGeometry(0.034, 10, 8), mAccent,  0.068, 1.700, 0.163)
  // Pupils
  add(new THREE.SphereGeometry(0.021, 8, 6), mEye, -0.068, 1.700, 0.178)
  add(new THREE.SphereGeometry(0.021, 8, 6), mEye,  0.068, 1.700, 0.178)

  // ── Hair ──────────────────────────────────────────────────────────────
  _hair(group, add, mHair, p.hairStyle)

  // ── Shoulders (rounds the arm-body joint) ─────────────────────────────
  add(new THREE.SphereGeometry(0.105, 10, 8), mOutfit, -0.315, 1.39)
  add(new THREE.SphereGeometry(0.105, 10, 8), mOutfit,  0.315, 1.39)

  // ── Arms ──────────────────────────────────────────────────────────────
  const armL = add(new THREE.CapsuleGeometry(0.065, 0.30, 4, 8), mOutfit, -0.31, 1.08)
  const armR = add(new THREE.CapsuleGeometry(0.065, 0.30, 4, 8), mOutfit,  0.31, 1.08)
  // Hands
  add(new THREE.SphereGeometry(0.073, 12, 9), mSkin, -0.32, 0.72)
  add(new THREE.SphereGeometry(0.073, 12, 9), mSkin,  0.32, 0.72)

  // ── Legs ──────────────────────────────────────────────────────────────
  const legL = add(new THREE.CapsuleGeometry(0.083, 0.36, 4, 8), mOutfit, -0.13, 0.40)
  const legR = add(new THREE.CapsuleGeometry(0.083, 0.36, 4, 8), mOutfit,  0.13, 0.40)

  // ── Boots ─────────────────────────────────────────────────────────────
  add(new THREE.BoxGeometry(0.17, 0.10, 0.28), mBoot, -0.13, 0.07, 0.04)
  add(new THREE.BoxGeometry(0.17, 0.10, 0.28), mBoot,  0.13, 0.07, 0.04)
  // Boot cuffs
  add(new THREE.CylinderGeometry(0.090, 0.084, 0.08, 10), mBoot, -0.13, 0.145)
  add(new THREE.CylinderGeometry(0.090, 0.084, 0.08, 10), mBoot,  0.13, 0.145)

  // ── Nametag sprite ────────────────────────────────────────────────────
  const cvs = document.createElement('canvas')
  cvs.width = 256; cvs.height = 56
  const ctx = cvs.getContext('2d')
  ctx.fillStyle = 'rgba(0,10,30,0.78)'
  ctx.roundRect(0, 0, 256, 56, 10); ctx.fill()
  ctx.fillStyle = '#aaddff'
  ctx.font = 'bold 26px Inter, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(username, 128, 38)
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(cvs), transparent: true, depthTest: false })
  )
  sprite.position.set(0, 2.18, 0)
  sprite.scale.set(1.5, 0.33, 1)
  group.add(sprite)

  // ── Status dot — small glowing sphere, top-right of nametag ─────────────
  const statusColor = STATUS_COLORS[group.userData.status ?? 'available']
  const statusMesh  = new THREE.Mesh(
    new THREE.SphereGeometry(0.065, 8, 6),
    new THREE.MeshBasicMaterial({ color: statusColor })
  )
  statusMesh.position.set(0.58, 2.22, 0)
  group.add(statusMesh)
  group.userData.statusMesh = statusMesh

  // Walk animation refs — preserve walkClock across preset swaps
  group.userData.legL      = legL
  group.userData.legR      = legR
  group.userData.armL      = armL
  group.userData.armR      = armR
  group.userData.walkClock = group.userData.walkClock ?? 0
  group.userData.presetId  = presetId
}

function _hair (group, add, mHair, style) {
  switch (style) {
    case 0: // Short / buzzcut
      add(new THREE.SphereGeometry(0.193, 16, 10, 0, Math.PI * 2, 0, 0.80), mHair, 0, 1.69)
      break
    case 1: // Medium round
      add(new THREE.SphereGeometry(0.198, 16, 10, 0, Math.PI * 2, 0, 1.10), mHair, 0, 1.68)
      break
    case 2: { // Long — rounded top + back flow
      add(new THREE.SphereGeometry(0.196, 16, 10, 0, Math.PI * 2, 0, 1.05), mHair, 0, 1.68)
      const back = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.22, 4, 8), mHair)
      back.position.set(0, 1.51, -0.13)
      back.rotation.x = 0.28
      back.castShadow = true
      group.add(back)
      break
    }
    case 3: // Afro / Curly — big puff
      add(new THREE.SphereGeometry(0.238, 16, 12), mHair, 0, 1.74)
      break
    default:
      add(new THREE.SphereGeometry(0.198, 16, 10, 0, Math.PI * 2, 0, 1.10), mHair, 0, 1.68)
  }
}

function mat (color, roughness = 0.7, metalness = 0) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness })
}

// ── Walk animation ────────────────────────────────────────────────────────────

export function animateWalk (avatar, moving, delta) {
  const { legL, legR, armL, armR } = avatar.userData
  if (!legL || !legR) return
  if (moving) {
    avatar.userData.walkClock += delta * 12
    const swing = Math.sin(avatar.userData.walkClock) * 0.42
    legL.rotation.x =  swing
    legR.rotation.x = -swing
    if (armL) armL.rotation.x = -swing * 0.55
    if (armR) armR.rotation.x =  swing * 0.55
  } else {
    const decay = Math.exp(-12 * delta)
    legL.rotation.x *= decay
    legR.rotation.x *= decay
    if (armL) armL.rotation.x *= decay
    if (armR) armR.rotation.x *= decay
  }
}
