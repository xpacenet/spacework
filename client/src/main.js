import * as THREE from 'three'
import { initScene }         from './scene/index.js'
import { buildScreens }      from './scene/screens.js'
import { initPlayer }        from './player/index.js'
import { getNearbyDoor, toggleDoor } from './scene/doors.js'
import { generateRoomCode }  from './multiplayer/index.js'
import { initScreenOverlay } from './ui/screenOverlay.js'
import { SwarmNetwork, SwarmNode } from './network/swarm.js'
import { VisibilityLayer, VISIBILITY } from './network/visibility.js'
import { openNetworkMap }    from './ui/networkMap.js'
import { spaceSync, selfId } from './sync/index.js'
import { WorldHistory }      from './universe/index.js'

// ── World history — shared, updated by peers ──────────────────────────────
const _worldHistory = new WorldHistory()
window._worldHistory = _worldHistory

// ── Sync status indicator (updates before lobby + in-game) ───────────────
function updateSyncDot({ peerCount } = {}) {
  document.querySelectorAll('.ipfs-dot').forEach(dot => {
    dot.className = 'ipfs-dot green'
  })
  document.querySelectorAll('#ipfs-label').forEach(el => {
    el.textContent = `P2P · ${selfId.slice(-6)}`
  })
  if (peerCount !== undefined) {
    document.querySelectorAll('#ipfs-peers').forEach(el => {
      el.textContent = peerCount > 0 ? `${peerCount} peer${peerCount !== 1 ? 's' : ''}` : ''
    })
  }
}

// Node ID is known immediately (no async startup needed)
updateSyncDot({ peerCount: 0 })

spaceSync.addEventListener('status', e => updateSyncDot(e.detail))

// Apply incoming world commits from peers
spaceSync.addEventListener('commit', e => {
  try { _worldHistory.applyExternal(e.detail.commit) } catch { /* already have it */ }
})

// ── DOM refs ──────────────────────────────────────────────────────────────
const lobby        = document.getElementById('lobby')
const loading      = document.getElementById('loading')
const loadFill     = document.getElementById('load-fill')
const loadText     = document.getElementById('load-text')
const hud          = document.getElementById('hud')
const clickToStart = document.getElementById('click-to-start')
const enterBtn     = document.getElementById('enter-btn')

// ── Connection mode tabs ───────────────────────────────────────────────────
let connectMode = 'p2p'
document.querySelectorAll('.connect-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.connect-tab').forEach(t => t.classList.remove('active'))
    tab.classList.add('active')
    connectMode = tab.dataset.mode
    document.getElementById('panel-p2p').style.display      = connectMode === 'p2p'      ? '' : 'none'
    document.getElementById('panel-provider').style.display = connectMode === 'provider' ? '' : 'none'
  })
})

// ── Room code input — auto-format as XXX-XXX ──────────────────────────────
const roomCodeInput = document.getElementById('room-code')
roomCodeInput.addEventListener('input', e => {
  let v = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '')
  if (v.length > 3) v = v.slice(0, 3) + '-' + v.slice(3, 6)
  e.target.value = v
})

// ── Enter key on any input ────────────────────────────────────────────────
document.getElementById('username').addEventListener('keydown', e => {
  if (e.key === 'Enter') startBoarding()
})
roomCodeInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') startBoarding()
})
document.getElementById('server-url').addEventListener('keydown', e => {
  if (e.key === 'Enter') startBoarding()
})
enterBtn.addEventListener('click', startBoarding)

// ── Board ─────────────────────────────────────────────────────────────────
function startBoarding() {
  const username = document.getElementById('username').value.trim()
  if (!username) {
    document.getElementById('username').focus()
    document.getElementById('username').style.borderColor = '#f55'
    return
  }

  // Build connection config
  const config = connectMode === 'p2p'
    ? { roomCode: roomCodeInput.value.replace('-', '').length === 6 ? roomCodeInput.value : null }
    : { serverUrl: document.getElementById('server-url').value.trim() || undefined }

  window._spaceUsername = username
  lobby.style.display = 'none'
  loading.classList.add('visible')

  const { scene, camera, renderer, onShipLoaded } = initScene(
    (pct, msg) => {
      loadFill.style.width = pct + '%'
      loadText.textContent = msg
    }
  )

  onShipLoaded(() => {
    loading.classList.remove('visible')
    hud.classList.add('visible')
    clickToStart.classList.remove('hidden')

    // ── Screens ──────────────────────────────────────────────────────────
    const { meshes: screenMeshes, screens } = buildScreens(scene)
    const { openScreen, isOpen }            = initScreenOverlay()

    // ── Pointer lock + screen click ───────────────────────────────────────
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement === renderer.domElement) {
        clickToStart.classList.add('hidden')
      } else {
        clickToStart.classList.remove('hidden')
      }
    })

    clickToStart.addEventListener('click', () => renderer.domElement.requestPointerLock())

    const _ray   = new THREE.Raycaster()
    const _mouse = new THREE.Vector2()

    renderer.domElement.addEventListener('click', e => {
      if (isOpen()) return
      if (document.pointerLockElement !== renderer.domElement) {
        _mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1
        _mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
        _ray.setFromCamera(_mouse, camera)
        const hits = _ray.intersectObjects(screenMeshes)
        if (hits.length > 0) {
          openScreen(hits[0].object.userData.screen)
          return
        }
        renderer.domElement.requestPointerLock()
      }
    })

    // ── Player ────────────────────────────────────────────────────────────
    const player = initPlayer(scene, camera, renderer, updateZoneUI)

    // ── Player ─────────────────────────────────────────────────────────────
    // (already declared above — kept here for clarity of insertion point)

    // ── Peer avatars — single system driven by spaceSync ─────────────────
    // spaceSync detects peers via BroadcastChannel (local, instant) and
    // Trystero WebRTC (remote, seconds). Both fire the same events here.
    const _avatars = new Map()   // peerId → THREE.Group

    spaceSync.addEventListener('peer:join', e => {
      const { peerId, username: peerName } = e.detail
      if (_avatars.has(peerId)) return
      const av = _makeAvatar(peerName)
      scene.add(av)
      _avatars.set(peerId, av)
      _updateOnlineCount(hud, _avatars.size + 1)
    })

    spaceSync.addEventListener('peer:move', e => {
      const { peerId, pos } = e.detail
      const av = _avatars.get(peerId)
      if (!av) return
      // Lerp at 0.6 — fast enough to feel real-time at 50ms broadcast interval
      av.position.lerp(new THREE.Vector3(pos.x, pos.y, pos.z), 0.6)
      if (pos.ry !== undefined) av.rotation.y = pos.ry
    })

    spaceSync.addEventListener('peer:leave', e => {
      const av = _avatars.get(e.detail.peerId)
      if (av) {
        scene.remove(av)
        _avatars.delete(e.detail.peerId)
        _updateOnlineCount(hud, _avatars.size + 1)
      }
    })

    // Start sync only after listeners are ready — peers detected before this would fire into void
    spaceSync.start(username)
    window._sync = spaceSync

    // Broadcast own position + rotation every 50ms
    setInterval(() => {
      const pos = player.getPosition()
      const rot = player.getRotation()
      spaceSync.move(pos.x, pos.y, pos.z, rot.y)
    }, 50)

    // ── Chat ──────────────────────────────────────────────────────────────
    const chatToggle  = document.getElementById('chat-toggle')
    const chatPanel   = document.getElementById('chat-panel')
    const chatInput   = document.getElementById('chat-input')
    const chatSend    = document.getElementById('chat-send')
    const chatMsgs    = document.getElementById('chat-messages')
    const chatBadge   = document.getElementById('chat-badge')
    let   unread      = 0

    // Open / close the panel
    chatToggle.addEventListener('click', (e) => {
      e.stopPropagation()
      const opening = !chatPanel.classList.contains('open')
      chatPanel.classList.toggle('open', opening)
      chatToggle.classList.toggle('open', opening)
      if (opening) {
        // Clear unread badge and focus input
        unread = 0
        chatBadge.textContent = ''
        chatBadge.classList.remove('visible')
        chatInput.focus()
      }
    })

    // Send on button click or Enter key
    function sendMessage() {
      const text = chatInput.value.trim()
      if (!text) return
      spaceSync.sendChat(text)
      chatInput.value = ''
    }
    chatSend.addEventListener('click',   (e) => { e.stopPropagation(); sendMessage() })
    chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMessage() })

    // Prevent clicks inside the panel from bubbling to pointer-lock overlay
    chatPanel.addEventListener('click', (e) => e.stopPropagation())

    // Render an incoming chat message
    function appendMessage({ from, username: name, text, ts }) {
      const isSelf = from === spaceSync.id
      const time   = new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

      const msg  = document.createElement('div')
      msg.className = 'chat-msg'
      msg.innerHTML = `
        <div class="chat-msg-meta">
          <span class="chat-msg-name${isSelf ? ' self' : ''}">${name}</span>
          <span class="chat-msg-time">${time}</span>
        </div>
        <div class="chat-msg-body">${text.replace(/</g, '&lt;')}</div>
      `
      chatMsgs.appendChild(msg)
      chatMsgs.scrollTop = chatMsgs.scrollHeight

      // Increment badge when panel is closed and message is from someone else
      if (!chatPanel.classList.contains('open') && !isSelf) {
        unread++
        chatBadge.textContent = unread > 9 ? '9+' : unread
        chatBadge.classList.add('visible')
      }
    }

    // Show a system line when peers join or leave
    function appendSystem(text) {
      const el = document.createElement('div')
      el.className = 'chat-system'
      el.textContent = text
      chatMsgs.appendChild(el)
      chatMsgs.scrollTop = chatMsgs.scrollHeight
    }

    // Track peer names so we can show them in leave messages after removal
    const _peerNames = new Map()

    spaceSync.addEventListener('chat',      e => appendMessage(e.detail))
    spaceSync.addEventListener('peer:join', e => {
      _peerNames.set(e.detail.peerId, e.detail.username)
      appendSystem(`${e.detail.username} joined`)
    })
    spaceSync.addEventListener('peer:leave', e => {
      const name = _peerNames.get(e.detail.peerId) ?? 'Someone'
      _peerNames.delete(e.detail.peerId)
      appendSystem(`${name} left`)
    })

    // ── DDHSN swarm + visibility ──────────────────────────────────────────
    const swarmNet = new SwarmNetwork()
    const visLayer = new VisibilityLayer()
    const myNode   = new SwarmNode(username)
    const { frequency: shipFreq } = swarmNet.createReality(myNode)
    visLayer.setNode(username, VISIBILITY.PUBLIC)

    // ── Network map button ────────────────────────────────────────────────
    document.getElementById('nm-open-btn').addEventListener('click', (e) => {
      e.stopPropagation()   // prevent click bubbling to pointer-lock overlay
      openNetworkMap(swarmNet, visLayer, username)
    })

    // ── Screen proximity + E key ──────────────────────────────────────────
    const hintEl   = document.getElementById('screen-hint')
    const hintName = document.getElementById('screen-hint-name')
    let _nearestScreen = null
    let _nearestDoor   = null

    document.addEventListener('keydown', e => {
      if (e.code === 'KeyE' && _nearestScreen && !isOpen()) {
        openScreen(_nearestScreen)
      }
      if (e.code === 'KeyF' && _nearestDoor) {
        const id = _nearestDoor.def.id
        // Double door — always toggle both leaves together
        const isMain = id === 'main-left' || id === 'main-right'
        const isNowOpen = toggleDoor(isMain ? 'main-left' : id)
        if (isMain) toggleDoor('main-right')
        showDoorHint(_nearestDoor.def.label, isNowOpen)
      }
    })

    function showDoorHint (label, open) {
      let el = document.getElementById('door-action-hint')
      if (!el) {
        el = document.createElement('div')
        el.id = 'door-action-hint'
        el.style.cssText = `
          position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
          background:rgba(0,0,0,0.7);border:1px solid rgba(255,255,255,0.2);
          padding:10px 22px;border-radius:20px;font-size:0.9rem;color:#fff;
          pointer-events:none;z-index:13;opacity:0;transition:opacity 0.2s;
        `
        document.body.appendChild(el)
      }
      el.textContent = `${label} ${open ? 'opened' : 'closed'}`
      el.style.opacity = '1'
      clearTimeout(el._t)
      el._t = setTimeout(() => { el.style.opacity = '0' }, 1500)
    }

    setInterval(() => {
      if (isOpen()) return
      const pos = player.getPosition()

      // Screen proximity
      let nearest = null, nearestDist = 4.0
      screens.forEach(s => {
        const dx = pos.x - s.position.x
        const dz = pos.z - s.position.z
        const dist = Math.sqrt(dx * dx + dz * dz)
        if (dist < nearestDist) { nearestDist = dist; nearest = s }
      })
      _nearestScreen = nearest
      if (hintEl) {
        hintEl.style.display = nearest ? 'flex' : 'none'
        if (nearest && hintName) hintName.textContent = nearest.label
      }

      // Door proximity
      const nearDoor = getNearbyDoor(pos, 2.8)
      _nearestDoor = nearDoor
      const doorHintEl = document.getElementById('door-proximity-hint')
      if (doorHintEl) {
        if (nearDoor && !nearest) {
          const st = nearDoor.state?.open ? 'Close' : 'Open'
          doorHintEl.style.display = 'flex'
          doorHintEl.querySelector('#door-hint-name').textContent =
            `${st} ${nearDoor.def.label}`
        } else {
          doorHintEl.style.display = 'none'
        }
      }
    }, 150)
  })
}

// ── Shared avatar factory (used by both local and remote peer handlers) ───
function _makeAvatar(name) {
  const group   = new THREE.Group()
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x4488ff, roughness: 0.7 })
  const headMat = new THREE.MeshStandardMaterial({ color: 0xffbb88, roughness: 0.8 })
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.25, 0.8, 4, 8), bodyMat)
  body.position.y = 0.9
  group.add(body)
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), headMat)
  head.position.y = 1.7
  group.add(head)
  const cvs = document.createElement('canvas')
  cvs.width = 256; cvs.height = 64
  const ctx = cvs.getContext('2d')
  ctx.fillStyle = 'rgba(40,100,255,0.8)'
  ctx.roundRect(0, 0, 256, 64, 12); ctx.fill()
  ctx.fillStyle = '#fff'
  ctx.font = 'bold 26px Inter,sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(name, 128, 42)
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: new THREE.CanvasTexture(cvs), transparent: true,
  }))
  sprite.position.y = 2.15
  sprite.scale.set(1.4, 0.35, 1)
  group.add(sprite)
  return group
}

function _updateOnlineCount(hud, count) {
  const el = hud?.querySelector?.('#online-count')
  if (el) el.textContent = `● ${count} aboard`
}

// ── Room code banner (P2P) ─────────────────────────────────────────────────
function showRoomCodeBanner(code) {
  const banner = document.createElement('div')
  banner.id = 'room-code-banner'
  banner.innerHTML = `
    <div class="rcb-inner">
      <span class="rcb-label">Your room code</span>
      <span class="rcb-code">${code}</span>
      <button class="rcb-copy" onclick="navigator.clipboard.writeText('${code}').then(()=>{this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1500)})">Copy</button>
      <button class="rcb-close" onclick="this.closest('#room-code-banner').remove()">✕</button>
    </div>
    <p class="rcb-note">Share this code with teammates so they can join your P2P room.</p>
  `
  document.body.appendChild(banner)
}

// ── Zone UI ────────────────────────────────────────────────────────────────
const ZONE_META = {
  OUTSIDE:     { color: '#88cc66', desc: 'Outside the building' },
  LOBBY:       { color: '#ffffff', desc: 'Reception & Entrance' },
  OPS:         { color: '#ffaa44', desc: 'Operations & Technical Support' },
  FUN:         { color: '#44ffaa', desc: 'Chill, Social & Games' },
  DESIGN:      { color: '#ff6ba0', desc: 'UI/UX, Design & 3D' },
  ENGINEERING: { color: '#44aaff', desc: 'Development & Engineering' },
  '':          { color: '#ffffff', desc: '' },
}

function updateZoneUI(zoneName) {
  const nameEl = document.getElementById('zone-name')
  const descEl = document.getElementById('zone-desc')
  const meta   = ZONE_META[zoneName] || ZONE_META['']
  nameEl.textContent = zoneName
  nameEl.style.color = meta.color
  descEl.textContent = meta.desc
  document.querySelectorAll('.map-zone').forEach(el => {
    el.classList.toggle('active', el.dataset.zone === zoneName)
  })
}
