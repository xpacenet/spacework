import { io } from 'socket.io-client'
import * as THREE from 'three'

const DEFAULT_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:3001'

export function initProvider(scene, player, username, hud, serverUrl) {
  const socket  = io(serverUrl || DEFAULT_URL)
  const avatars = {}  // socketId → THREE.Group

  socket.on('connect', () => {
    socket.emit('join', { username })
  })

  // Someone joined
  socket.on('player:joined', ({ id, username: name, position }) => {
    if (id === socket.id) return
    const avatar = createAvatar(name)
    avatar.position.set(position.x, position.y, position.z)
    scene.add(avatar)
    avatars[id] = avatar
    updateCount(hud, Object.keys(avatars).length + 1)
  })

  // Someone moved
  socket.on('player:moved', ({ id, position, rotation }) => {
    if (!avatars[id]) return
    avatars[id].position.set(position.x, position.y, position.z)
    avatars[id].rotation.y = rotation.y
  })

  // Someone left
  socket.on('player:left', ({ id }) => {
    if (avatars[id]) {
      scene.remove(avatars[id])
      delete avatars[id]
      updateCount(hud, Object.keys(avatars).length + 1)
    }
  })

  // Existing players when you join
  socket.on('room:state', ({ players }) => {
    players.forEach(({ id, username: name, position }) => {
      if (id === socket.id) return
      const avatar = createAvatar(name)
      avatar.position.set(position.x, position.y, position.z)
      scene.add(avatar)
      avatars[id] = avatar
    })
    updateCount(hud, Object.keys(avatars).length + 1)
  })

  // Broadcast our position every 50ms
  setInterval(() => {
    const pos = player.getPosition()
    const rot = player.getRotation()
    socket.emit('player:move', {
      position: { x: pos.x, y: pos.y, z: pos.z },
      rotation: { y: rot.y },
    })
  }, 50)
}

function createAvatar(username) {
  const group = new THREE.Group()

  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x0055ff, roughness: 0.7 })
  const headMat = new THREE.MeshStandardMaterial({ color: 0xffbb88, roughness: 0.8 })

  // Body
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.25, 0.8, 4, 8), bodyMat)
  body.position.y = 0.9
  group.add(body)

  // Head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), headMat)
  head.position.y = 1.7
  group.add(head)

  // Nametag (sprite)
  const canvas  = document.createElement('canvas')
  canvas.width  = 256; canvas.height = 64
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'rgba(0,0,0,0.6)'
  ctx.roundRect(0, 0, 256, 64, 12)
  ctx.fill()
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 28px Inter, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(username, 128, 42)

  const tex     = new THREE.CanvasTexture(canvas)
  const sprite  = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }))
  sprite.position.y = 2.15
  sprite.scale.set(1.4, 0.35, 1)
  group.add(sprite)

  return group
}

function updateCount(hud, count) {
  hud.querySelector('#online-count').textContent = `● ${count} aboard`
}
