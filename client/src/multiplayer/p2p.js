import { joinRoom } from '@trystero-p2p/torrent'
import * as THREE from 'three'

// ── P2P multiplayer via Trystero (BitTorrent DHT signaling) ───────────────
// No server required. Two peers with the same appId + roomCode connect
// directly browser-to-browser via WebRTC.

const APP_ID = 'spacework-v1'

export function initP2P(scene, player, username, hud, roomCode) {
  const room    = joinRoom({ appId: APP_ID }, roomCode)
  const avatars = {}   // peerId → THREE.Group

  // ── Actions ──────────────────────────────────────────────────────────────
  const [sendPos,   onPos]   = room.makeAction('pos')    // position broadcast
  const [sendIntro, onIntro] = room.makeAction('intro')  // introduce yourself
  const [sendBye,   onBye]   = room.makeAction('bye')    // explicit leave

  // ── Peer lifecycle ────────────────────────────────────────────────────────
  room.onPeerJoin(peerId => {
    // Introduce ourselves to the new peer
    const pos = player.getPosition()
    const rot = player.getRotation()
    sendIntro({ username, x: pos.x, y: pos.y, z: pos.z, ry: rot.y }, peerId)
  })

  room.onPeerLeave(peerId => {
    removePeer(peerId)
  })

  // ── Receive intro (create avatar) ─────────────────────────────────────────
  onIntro(({ username: name, x, y, z, ry }, peerId) => {
    if (avatars[peerId]) return  // already have them
    const av = createAvatar(name)
    av.position.set(x, y, z)
    av.rotation.y = ry
    scene.add(av)
    avatars[peerId] = av
    updateCount(hud, Object.keys(avatars).length + 1)

    // Introduce back so they get our avatar too
    const pos = player.getPosition()
    const rot = player.getRotation()
    sendIntro({ username, x: pos.x, y: pos.y, z: pos.z, ry: rot.y }, peerId)
  })

  // ── Receive position updates ───────────────────────────────────────────────
  onPos(({ x, y, z, ry }, peerId) => {
    const av = avatars[peerId]
    if (!av) return
    // Smooth lerp toward received position
    av.position.lerp(new THREE.Vector3(x, y, z), 0.3)
    av.rotation.y = ry
  })

  // ── Broadcast our own position ─────────────────────────────────────────────
  setInterval(() => {
    const pos = player.getPosition()
    const rot = player.getRotation()
    sendPos({ x: pos.x, y: pos.y, z: pos.z, ry: rot.y })
  }, 50)

  // ── Helpers ────────────────────────────────────────────────────────────────
  function removePeer(peerId) {
    if (avatars[peerId]) {
      scene.remove(avatars[peerId])
      delete avatars[peerId]
      updateCount(hud, Object.keys(avatars).length + 1)
    }
  }

  return { mode: 'p2p', roomCode }
}

// ── Remote avatar ─────────────────────────────────────────────────────────
function createAvatar(username) {
  const group   = new THREE.Group()
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xff6600, roughness: 0.7 })
  const headMat = new THREE.MeshStandardMaterial({ color: 0xffbb88, roughness: 0.8 })

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.25, 0.8, 4, 8), bodyMat)
  body.position.y = 0.9
  group.add(body)

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), headMat)
  head.position.y = 1.7
  group.add(head)

  // Nametag
  const cvs = document.createElement('canvas')
  cvs.width = 256; cvs.height = 64
  const ctx = cvs.getContext('2d')
  ctx.fillStyle = 'rgba(255,100,0,0.75)'
  ctx.roundRect(0, 0, 256, 64, 12); ctx.fill()
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 26px Inter, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(username, 128, 42)

  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: new THREE.CanvasTexture(cvs), transparent: true,
  }))
  sprite.position.y = 2.15
  sprite.scale.set(1.4, 0.35, 1)
  group.add(sprite)

  return group
}

function updateCount(hud, count) {
  const el = hud?.querySelector?.('#online-count')
  if (el) el.textContent = `● ${count} aboard`
}

// ── Room code utilities ────────────────────────────────────────────────────
const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

export function generateRoomCode() {
  const seg = n => Array.from({ length: n }, () =>
    CHARS[Math.floor(Math.random() * CHARS.length)]
  ).join('')
  return `${seg(3)}-${seg(3)}`
}

export function normalizeRoomCode(code) {
  return code.toUpperCase().replace(/[^A-Z0-9]/g, '').replace(/^(.{3})(.{3})$/, '$1-$2')
}
