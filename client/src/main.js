import * as THREE from 'three'
import { AVATAR_PRESETS, createLocalAvatar, animateWalk } from './player/avatar.js'
import { initScene }         from './scene/index.js'
import { buildScreens }      from './scene/screens.js'
import { initPlayer }        from './player/index.js'
import { getNearbyDoor, toggleDoor, DOOR_DEFS, isDoorOpen } from './scene/doors.js'
import { generateRoomCode }  from './multiplayer/index.js'
import { initScreenOverlay } from './ui/screenOverlay.js'
import { SwarmNetwork, SwarmNode } from './network/swarm.js'
import { VisibilityLayer, VISIBILITY } from './network/visibility.js'
import { openNetworkMap }    from './ui/networkMap.js'
import { ProximityVoice }   from './ui/proximityVoice.js'
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

// ── Lobby avatar grid ──────────────────────────────────────────────────────
;(function initLobbyAvatars () {
  const grid = document.getElementById('lobby-avatar-grid')
  if (!grid) return
  const saved = parseInt(localStorage.getItem('spaceAvatarId') ?? '0', 10)
  const hex = n => '#' + n.toString(16).padStart(6, '0')
  AVATAR_PRESETS.forEach(p => {
    const s = hex(p.skin), h = hex(p.hair), o = hex(p.outfit), a = hex(p.accent)
    const chip = document.createElement('div')
    chip.className = 'lav-chip' + (p.id === saved ? ' lav-active' : '')
    chip.dataset.id = String(p.id)
    chip.title = p.label
    chip.innerHTML = `<svg viewBox="0 0 60 82" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="16" rx="17" ry="14" fill="${h}"/>
      <circle cx="30" cy="22" r="13" fill="${s}"/>
      <ellipse cx="17.5" cy="22" rx="3.5" ry="4.5" fill="${s}"/>
      <ellipse cx="42.5" cy="22" rx="3.5" ry="4.5" fill="${s}"/>
      <circle cx="25" cy="21" r="2.8" fill="${a}"/><circle cx="35" cy="21" r="2.8" fill="${a}"/>
      <circle cx="25" cy="21" r="1.6" fill="#111"/><circle cx="35" cy="21" r="1.6" fill="#111"/>
      <rect x="26.5" y="34" width="7" height="5" rx="2" fill="${s}"/>
      <rect x="14" y="39" width="32" height="24" rx="6" fill="${o}"/>
      <rect x="22" y="44" width="16" height="5" rx="2" fill="${a}" opacity="0.75"/>
      <rect x="5" y="40" width="10" height="20" rx="5" fill="${o}"/>
      <rect x="45" y="40" width="10" height="20" rx="5" fill="${o}"/>
      <rect x="16" y="62" width="11" height="14" rx="4" fill="${o}"/>
      <rect x="33" y="62" width="11" height="14" rx="4" fill="${o}"/>
    </svg>`
    chip.addEventListener('click', () => {
      grid.querySelectorAll('.lav-chip').forEach(c => c.classList.remove('lav-active'))
      chip.classList.add('lav-active')
      localStorage.setItem('spaceAvatarId', String(p.id))
    })
    grid.appendChild(chip)
  })
})()

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

    // ── Player ────────────────────────────────────────────────────────────
    const player = initPlayer(scene, camera, renderer, updateZoneUI)

    // ── View toggle pill (2D / 3rd / 1st) ────────────────────────────────
    document.querySelectorAll('.vtbtn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        dismissStartOverlay()
        player.setView(btn.dataset.view)
        // First person needs pointer lock for mouse look
        if (btn.dataset.view === 'first' && document.pointerLockElement !== renderer.domElement) {
          renderer.domElement.requestPointerLock()
        }
      })
    })

    // ── Pointer lock: opt-in (WASD) — click-to-move works without it ─────
    let _hudStarted = false
    function dismissStartOverlay () {
      if (_hudStarted) return
      _hudStarted = true
      clickToStart.classList.add('hidden')
    }
    // Pointer lock acquired (e.g. user pressed WASD) — hide overlay
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement === renderer.domElement) dismissStartOverlay()
      // Do NOT re-show overlay on lock release — player has already started
    })
    // Clicking the overlay just dismisses it; WASD grants lock on first press
    clickToStart.addEventListener('click', dismissStartOverlay)
    // Arrow keys just move — they never steal the cursor.
    // WASD only enters pointer-lock in 1st-person mode; in 3rd-person
    // the camera is controlled by mouse drag so no lock is needed.
    const FPS_KEYS = new Set(['KeyW','KeyA','KeyS','KeyD'])
    const ALL_MOV  = new Set([...FPS_KEYS,'ArrowUp','ArrowDown','ArrowLeft','ArrowRight'])
    document.addEventListener('keydown', e => {
      if (!ALL_MOV.has(e.code)) return
      dismissStartOverlay()
      if (FPS_KEYS.has(e.code) &&
          player.getMode() === 'first' &&
          document.pointerLockElement !== renderer.domElement) {
        renderer.domElement.requestPointerLock()
      }
    })

    // ── Unified canvas click: screen → navigate to floor ─────────────────
    const _ray        = new THREE.Raycaster()
    const _mouse      = new THREE.Vector2()
    const _floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
    const _floorHit   = new THREE.Vector3()

    renderer.domElement.addEventListener('click', e => {
      if (isOpen()) return
      if (document.pointerLockElement === renderer.domElement) return  // FPS mode — no click nav
      if (player.isDragMoved()) return                                  // was a drag-rotate

      dismissStartOverlay()

      _mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1
      _mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
      _ray.setFromCamera(_mouse, camera)

      // Screen objects take priority
      const hits = _ray.intersectObjects(screenMeshes)
      if (hits.length > 0) { openScreen(hits[0].object.userData.screen); return }

      // Navigate to wherever they clicked on the floor
      if (!_ray.ray.intersectPlane(_floorPlane, _floorHit)) return
      player.navigate({
        x: Math.max(-65, Math.min(65, _floorHit.x)),
        z: Math.max(-65, Math.min(65, _floorHit.z)),
      })
    })

    // ── Peer avatars — single system driven by spaceSync ─────────────────
    // spaceSync detects peers via BroadcastChannel (local, instant) and
    // Trystero WebRTC (remote, seconds). Both fire the same events here.
    const _avatars = new Map()   // peerId → THREE.Group

    const _peerUsernames = new Map()   // peerId → username

    spaceSync.addEventListener('peer:join', e => {
      const { peerId, username: peerName } = e.detail
      _peerUsernames.set(peerId, peerName)
      if (_avatars.has(peerId)) return
      // Assign a deterministic preset from the peer ID so the same peer always
      // gets the same avatar colour across sessions (upgradeable to user-chosen later)
      const av = createLocalAvatar(peerName, _presetFromId(peerId))
      scene.add(av)
      _avatars.set(peerId, av)
      _updateOnlineCount(hud, _avatars.size + 1)
      player.peerJoin(peerId, peerName)
    })

    spaceSync.addEventListener('peer:move', e => {
      const { peerId, pos } = e.detail
      const av = _avatars.get(peerId)
      if (av) {
        const prev = av.position.clone()
        // Lerp position — fast enough to feel real-time at 50ms broadcast interval
        av.position.lerp(new THREE.Vector3(pos.x, pos.y ?? 0, pos.z), 0.6)
        // Smooth yaw rotation — shortest-arc lerp so avatar turns naturally
        if (pos.ry !== undefined) {
          let d = pos.ry - av.rotation.y
          while (d >  Math.PI) d -= Math.PI * 2
          while (d < -Math.PI) d += Math.PI * 2
          av.rotation.y += d * 0.25
        }
        // Detect actual movement to drive walk animation
        if (prev.distanceTo(av.position) > 0.008) {
          av.userData.isMoving = true
          clearTimeout(av.userData._stopTimer)
          av.userData._stopTimer = setTimeout(() => { av.userData.isMoving = false }, 180)
        }
      }
      player.peerMove(peerId, pos.x, pos.z, _peerUsernames.get(peerId) ?? peerId.slice(-4))
    })

    spaceSync.addEventListener('peer:leave', e => {
      const av = _avatars.get(e.detail.peerId)
      if (av) {
        scene.remove(av)
        _avatars.delete(e.detail.peerId)
        _updateOnlineCount(hud, _avatars.size + 1)
      }
      voice.removePeer(e.detail.peerId)
      player.peerLeave(e.detail.peerId)
      _peerUsernames.delete(e.detail.peerId)
    })

    // ── Peer avatar animation loop ─────────────────────────────────────────
    // Runs independently of the player tick so peer walk animation stays
    // smooth even when the local player is idle.
    let _peerTickLast = performance.now()
    ;(function _tickPeers () {
      requestAnimationFrame(_tickPeers)
      const now   = performance.now()
      const delta = Math.min((now - _peerTickLast) / 1000, 0.1)
      _peerTickLast = now
      _avatars.forEach(av => animateWalk(av, av.userData.isMoving ?? false, delta))
    })()

    // Start sync only after listeners are ready — peers detected before this would fire into void
    spaceSync.start(username)
    window._sync = spaceSync

    // ── Proximity voice ────────────────────────────────────────────────────
    const voice    = new ProximityVoice()
    const voiceBtn = document.getElementById('voice-btn')

    const _updateVoiceBtn = ({ active, muted } = {}) => {
      if (!voiceBtn) return
      if (!active) {
        voiceBtn.textContent  = '🎙 Voice'
        voiceBtn.className    = 'hud-side-btn'
      } else if (muted) {
        voiceBtn.textContent  = '🔇 Muted'
        voiceBtn.className    = 'hud-side-btn voice-muted'
      } else {
        voiceBtn.textContent  = '🎙 Live'
        voiceBtn.className    = 'hud-side-btn voice-active'
      }
    }
    voice.onStateChange(_updateVoiceBtn)
    _updateVoiceBtn({ active: false, muted: false })

    if (voiceBtn) {
      voiceBtn.addEventListener('click', async e => {
        e.stopPropagation()
        if (!voice.active) {
          voiceBtn.textContent = '⏳ Connecting…'
          const ok = await voice.start(spaceSync)
          if (!ok) { voiceBtn.textContent = '🚫 No mic'; return }
        } else {
          voice.toggleMute()
        }
      })
    }

    // Broadcast own position + rotation every 50ms; update voice proximity
    setInterval(() => {
      const pos = player.getPosition()
      const rot = player.getRotation()
      spaceSync.move(pos.x, pos.y, pos.z, rot.y)
      voice.update(pos, _avatars)
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

    // Track which doors we auto-opened so we can auto-close them when player leaves
    const _autoDoors = new Set()

    setInterval(() => {
      if (isOpen()) return
      const pos = player.getPosition()

      // ── Screen proximity ─────────────────────────────────────────────────
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

      // ── Auto-open / auto-close doors ──────────────────────────────────────
      // Doors open automatically when player walks up; close when they leave.
      // F key still works for manual override.
      DOOR_DEFS.forEach(def => {
        const dx   = pos.x - def.hinge.x
        const dz   = pos.z - def.hinge.z
        const dist = Math.sqrt(dx * dx + dz * dz)
        const id   = def.id

        if (dist < 2.2 && !isDoorOpen(id)) {
          // Approaching a closed door — open it
          toggleDoor(id)
          _autoDoors.add(id)
          // Keep double main door in sync
          if (id === 'main-left')  { if (!isDoorOpen('main-right')) toggleDoor('main-right'); _autoDoors.add('main-right') }
          if (id === 'main-right') { if (!isDoorOpen('main-left'))  toggleDoor('main-left');  _autoDoors.add('main-left')  }
        } else if (dist > 3.5 && _autoDoors.has(id) && isDoorOpen(id)) {
          // Left an auto-opened door — close it
          toggleDoor(id)
          _autoDoors.delete(id)
          if (id === 'main-left')  { if (isDoorOpen('main-right')) toggleDoor('main-right'); _autoDoors.delete('main-right') }
          if (id === 'main-right') { if (isDoorOpen('main-left'))  toggleDoor('main-left');  _autoDoors.delete('main-left')  }
        }
      })

      // ── Door proximity hint (F = manual override) ──────────────────────────
      const nearDoor = getNearbyDoor(pos, 2.8)
      _nearestDoor = nearDoor
      const doorHintEl = document.getElementById('door-proximity-hint')
      if (doorHintEl) {
        if (nearDoor && !nearest) {
          const st = nearDoor.state?.open ? 'Close' : 'Open'
          doorHintEl.style.display = 'flex'
          doorHintEl.querySelector('#door-hint-name').textContent = `${st} ${nearDoor.def.label}`
        } else {
          doorHintEl.style.display = 'none'
        }
      }
    }, 150)
  })
}

// ── Peer avatar helpers ────────────────────────────────────────────────────

/** Deterministic preset 0-5 from a peer ID string (hash-based). */
function _presetFromId (id) {
  let h = 0
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0
  return Math.abs(h) % AVATAR_PRESETS.length
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
