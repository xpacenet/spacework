import * as THREE from 'three'
import { AVATAR_PRESETS, createLocalAvatar, animateWalk, setAvatarStatus, setAvatarTalking, applyPreset, STATUS_OPTIONS } from './player/avatar.js'
// setAvatarTalking used in the peer tick loop below
import { initScene }         from './scene/index.js'
import { buildScreens }      from './scene/screens.js'
import { initPlayer }        from './player/index.js'
import { getNearbyDoor, toggleDoor, DOOR_DEFS, isDoorOpen } from './scene/doors.js'
import { initScreenOverlay } from './ui/screenOverlay.js'
import { SwarmNetwork, SwarmNode } from './network/swarm.js'
import { VisibilityLayer, VISIBILITY } from './network/visibility.js'
import { openNetworkMap }    from './ui/networkMap.js'
import { ProximityVoice }   from './ui/proximityVoice.js'
import { PresencePanel }    from './ui/presencePanel.js'
import { spaceSync }         from './sync/index.js'
import { loadIdentity, getIdentity } from './identity/index.js'
import { setRoomName, currentRoomName } from './sync/remote.js'
import { WorldHistory }      from './universe/index.js'

// ── Bootstrap — load identity before anything else ────────────────────────────
;(async () => {
  const identity = await loadIdentity()

  // ── World history ───────────────────────────────────────────────────────────
  const _worldHistory = new WorldHistory()
  window._worldHistory = _worldHistory

  // ── P2P status indicator ────────────────────────────────────────────────────
  function updateSyncDot ({ peerCount } = {}) {
    document.querySelectorAll('.ipfs-dot').forEach(dot => {
      dot.className = 'ipfs-dot green'
    })
    document.querySelectorAll('#ipfs-label').forEach(el => {
      el.textContent = `P2P · ${identity.shortId}`
    })
    if (peerCount !== undefined) {
      document.querySelectorAll('#ipfs-peers').forEach(el => {
        el.textContent = peerCount > 0 ? `${peerCount} peer${peerCount !== 1 ? 's' : ''}` : ''
      })
    }
  }

  updateSyncDot({ peerCount: 0 })
  spaceSync.addEventListener('status', e => updateSyncDot(e.detail))

  spaceSync.addEventListener('commit', e => {
    try { _worldHistory.applyExternal(e.detail.commit) } catch { /* already have it */ }
  })

  // ── DOM refs ────────────────────────────────────────────────────────────────
  const lobby        = document.getElementById('lobby')
  const loading      = document.getElementById('loading')
  const loadFill     = document.getElementById('load-fill')
  const loadText     = document.getElementById('load-text')
  const hud          = document.getElementById('hud')
  const clickToStart = document.getElementById('click-to-start')
  const enterBtn     = document.getElementById('enter-btn')
  const usernameInput = document.getElementById('username')
  const roomInput     = document.getElementById('room-name')

  // ── Pre-fill from identity if returning user ────────────────────────────────
  if (!identity.isNew && identity.displayName) {
    usernameInput.value = identity.displayName
  }

  // ── Pre-fill room name from URL hash ────────────────────────────────────────
  if (roomInput) roomInput.value = currentRoomName()

  // ── Show identity fingerprint in lobby ──────────────────────────────────────
  const idFingerprintEl = document.getElementById('id-fingerprint')
  if (idFingerprintEl) {
    idFingerprintEl.textContent = identity.isNew
      ? 'New identity generated'
      : `Identity · ${identity.shortId}`
  }

  // ── Lobby avatar grid ───────────────────────────────────────────────────────
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

  // ── Enter key shortcuts ──────────────────────────────────────────────────────
  usernameInput?.addEventListener('keydown', e => { if (e.key === 'Enter') startBoarding() })
  roomInput?.addEventListener('keydown',    e => { if (e.key === 'Enter') startBoarding() })
  enterBtn?.addEventListener('click', startBoarding)

  // ── Board ─────────────────────────────────────────────────────────────────────
  function startBoarding () {
    const username = usernameInput.value.trim()
    if (!username) {
      usernameInput.focus()
      usernameInput.style.borderColor = '#f55'
      return
    }
    usernameInput.style.borderColor = ''

    // Persist display name in identity so it's pre-filled on next visit
    identity.setName(username)

    // Set room from the input (updates URL hash — shareable link)
    if (roomInput?.value.trim()) setRoomName(roomInput.value.trim())

    window._spaceUsername = username
    lobby.style.display   = 'none'
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

      // ── Screens ────────────────────────────────────────────────────────────
      const { meshes: screenMeshes, screens } = buildScreens(scene)
      const { openScreen, isOpen }            = initScreenOverlay()

      // ── Presence panel ─────────────────────────────────────────────────────
      const _localPreset = parseInt(localStorage.getItem('spaceAvatarId') ?? '0', 10)
      const presence = new PresencePanel((dest) => player?.navigate(dest))
      const ppEl     = document.getElementById('presence-panel')
      if (ppEl) ppEl.classList.add('pp-visible')
      presence.setSelf(username, _localPreset, 'OUTSIDE', 'available')

      // ── Player ─────────────────────────────────────────────────────────────
      const player = initPlayer(scene, camera, renderer,
        (zone) => { updateZoneUI(zone); presence.updateSelfZone(zone) },
        (presetId) => {
          spaceSync.setAvatar(presetId)
          presence.setSelf(username, presetId, presence._self.zone, _selfStatus)
        }
      )

      // ── Status selector ─────────────────────────────────────────────────────
      let _selfStatus = 'available'
      const statusBtn  = document.getElementById('status-btn')
      const statusMenu = document.getElementById('status-menu')
      if (statusBtn && statusMenu) {
        STATUS_OPTIONS.forEach(opt => {
          const color = '#' + opt.color.toString(16).padStart(6, '0')
          const item  = document.createElement('div')
          item.className      = 'sm-opt' + (opt.id === _selfStatus ? ' sm-active' : '')
          item.dataset.status = opt.id
          item.innerHTML = `<span class="sm-dot" style="background:${color};box-shadow:0 0 4px ${color}40"></span>${opt.label}`
          item.addEventListener('click', e => {
            e.stopPropagation()
            _selfStatus = opt.id
            statusBtn.innerHTML = `<span class="sm-dot" style="background:${color};box-shadow:0 0 4px ${color}40;display:inline-block;vertical-align:middle;width:8px;height:8px;border-radius:50%;margin-right:5px"></span>${opt.label.replace(/^\S+\s/, '')}`
            player.setStatus(opt.id)
            presence.updateSelfStatus(opt.id)
            spaceSync.setStatus(opt.id)
            statusMenu.querySelectorAll('.sm-opt').forEach(el =>
              el.classList.toggle('sm-active', el.dataset.status === opt.id))
            statusMenu.classList.remove('sm-open')
          })
          statusMenu.appendChild(item)
        })
        statusBtn.addEventListener('click', e => {
          e.stopPropagation()
          statusMenu.classList.toggle('sm-open')
        })
        document.addEventListener('click', () => statusMenu.classList.remove('sm-open'))
      }

      // ── View toggle pill ────────────────────────────────────────────────────
      document.querySelectorAll('.vtbtn').forEach(btn => {
        btn.addEventListener('click', e => {
          e.stopPropagation()
          dismissStartOverlay()
          player.setView(btn.dataset.view)
          if (btn.dataset.view === 'first' && document.pointerLockElement !== renderer.domElement) {
            renderer.domElement.requestPointerLock()
          }
        })
      })

      // ── Pointer lock / start overlay ─────────────────────────────────────
      let _hudStarted = false
      function dismissStartOverlay () {
        if (_hudStarted) return
        _hudStarted = true
        clickToStart.classList.add('hidden')
      }
      document.addEventListener('pointerlockchange', () => {
        if (document.pointerLockElement === renderer.domElement) dismissStartOverlay()
      })
      clickToStart.addEventListener('click', dismissStartOverlay)
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

      // ── Canvas click: screen or floor navigate ───────────────────────────
      const _ray        = new THREE.Raycaster()
      const _mouse      = new THREE.Vector2()
      const _floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
      const _floorHit   = new THREE.Vector3()

      renderer.domElement.addEventListener('click', e => {
        if (isOpen()) return
        if (document.pointerLockElement === renderer.domElement) return
        if (player.isDragMoved()) return

        dismissStartOverlay()

        _mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1
        _mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
        _ray.setFromCamera(_mouse, camera)

        const hits = _ray.intersectObjects(screenMeshes)
        if (hits.length > 0) { openScreen(hits[0].object.userData.screen); return }

        if (!_ray.ray.intersectPlane(_floorPlane, _floorHit)) return
        player.navigate({
          x: Math.max(-65, Math.min(65, _floorHit.x)),
          z: Math.max(-65, Math.min(65, _floorHit.z)),
        })
      })

      // ── Proximity voice — must be declared before any peer event listeners
      //    that reference it, otherwise the const TDZ fires when a peer
      //    leaves during spaceSync.start().
      const voice    = new ProximityVoice()
      const voiceBtn = document.getElementById('voice-btn')

      // ── Peer avatars ──────────────────────────────────────────────────────
      const _avatars      = new Map()   // peerId → THREE.Group
      const _peerUsernames = new Map()  // peerId → username

      spaceSync.addEventListener('peer:join', e => {
        const { peerId, username: peerName, presetId: peerPreset } = e.detail
        _peerUsernames.set(peerId, peerName)
        if (_avatars.has(peerId)) return
        const resolvedPreset = peerPreset ?? _presetFromId(peerId)
        const av = createLocalAvatar(peerName, resolvedPreset)
        scene.add(av)
        _avatars.set(peerId, av)
        _updateOnlineCount(hud, _avatars.size + 1)
        presence.addPeer(peerId, peerName, resolvedPreset)
        player.peerJoin(peerId, peerName)
      })

      spaceSync.addEventListener('peer:move', e => {
        const { peerId, pos } = e.detail
        const av = _avatars.get(peerId)
        presence.movePeer(peerId, pos.x, pos.z)
        if (av) {
          const prev = av.position.clone()
          av.position.lerp(new THREE.Vector3(pos.x, pos.y ?? 0, pos.z), 0.6)
          if (pos.ry !== undefined) {
            let d = pos.ry - av.rotation.y
            while (d >  Math.PI) d -= Math.PI * 2
            while (d < -Math.PI) d += Math.PI * 2
            av.rotation.y += d * 0.25
          }
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
        presence.removePeer(e.detail.peerId)
        player.peerLeave(e.detail.peerId)
        _peerUsernames.delete(e.detail.peerId)
      })

      spaceSync.addEventListener('peer:avatar', e => {
        const { peerId, presetId } = e.detail
        const av   = _avatars.get(peerId)
        const name = _peerUsernames.get(peerId) ?? peerId.slice(-4)
        if (av) applyPreset(av, name, presetId)
        presence.updatePeerPreset(peerId, presetId)
      })

      spaceSync.addEventListener('peer:status', e => {
        const { peerId, status } = e.detail
        const av = _avatars.get(peerId)
        if (av) setAvatarStatus(av, status)
        presence.updatePeerStatus(peerId, status)
      })

      // Peer walk + talking animation loop
      let _peerTickLast = performance.now()
      ;(function _tickPeers () {
        requestAnimationFrame(_tickPeers)
        const now   = performance.now()
        const delta = Math.min((now - _peerTickLast) / 1000, 0.1)
        _peerTickLast = now
        const clock = now / 1000
        _avatars.forEach((av, peerId) => {
          animateWalk(av, av.userData.isMoving ?? false, delta)
          setAvatarTalking(av, voice.isTalking(peerId), clock)
        })
        // Local avatar talking ring
        player.setSelfTalking(voice.isTalking('self'), clock)
      })()

      // ── Start sync ───────────────────────────────────────────────────────────
      spaceSync.start(username, _localPreset, _selfStatus)
      window._sync = spaceSync

      // ── Proximity voice (continued — voice + voiceBtn declared above) ────────
      const _updateVoiceBtn = ({ active, muted } = {}) => {
        if (!voiceBtn) return
        if (!active) {
          voiceBtn.textContent = '🎙 Voice'
          voiceBtn.className   = 'hud-side-btn'
        } else if (muted) {
          voiceBtn.textContent = '🔇 Muted'
          voiceBtn.className   = 'hud-side-btn voice-muted'
        } else {
          voiceBtn.textContent = '🎙 Live'
          voiceBtn.className   = 'hud-side-btn voice-active'
        }
      }
      voice.onStateChange(_updateVoiceBtn)
      _updateVoiceBtn({ active: false, muted: false })

      // Push talking set to all 2D views whenever it changes
      voice.onTalkChange(talkingSet => {
        player.setTalkingPeers(talkingSet)
      })

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

      // Position broadcast + voice proximity update every 50 ms
      setInterval(() => {
        const pos = player.getPosition()
        const rot = player.getRotation()
        spaceSync.move(pos.x, pos.y, pos.z, rot.y)
        voice.update(pos, _avatars)
      }, 50)

      // ── Chat ──────────────────────────────────────────────────────────────────
      const chatToggle = document.getElementById('chat-toggle')
      const chatPanel  = document.getElementById('chat-panel')
      const chatClose  = document.getElementById('chat-close')
      const chatInput  = document.getElementById('chat-input')
      const chatSend   = document.getElementById('chat-send')
      const chatMsgs   = document.getElementById('chat-messages')
      const chatBadge  = document.getElementById('chat-badge')
      let   unread     = 0

      const mbChatBadge = document.getElementById('mb-chat-badge')

      function openChat () {
        chatPanel.classList.add('open')
        chatToggle.classList.add('open')
        document.getElementById('mb-chat-btn')?.classList.add('mb-active')
        unread = 0
        chatBadge.textContent = ''
        chatBadge.classList.remove('visible')
        if (mbChatBadge) { mbChatBadge.textContent = ''; mbChatBadge.classList.remove('visible') }
        chatInput.focus()
      }
      function closeChat () {
        chatPanel.classList.remove('open')
        chatToggle.classList.remove('open')
        document.getElementById('mb-chat-btn')?.classList.remove('mb-active')
      }

      chatToggle.addEventListener('click', e => {
        e.stopPropagation()
        chatPanel.classList.contains('open') ? closeChat() : openChat()
      })
      chatClose.addEventListener('click', e => { e.stopPropagation(); closeChat() })
      document.getElementById('mb-chat-btn')?.addEventListener('click', e => {
        e.stopPropagation()
        chatPanel.classList.contains('open') ? closeChat() : openChat()
      })

      function sendMessage () {
        const text = chatInput.value.trim()
        if (!text) return
        spaceSync.sendChat(text)
        chatInput.value = ''
      }
      chatSend.addEventListener('click',   e => { e.stopPropagation(); sendMessage() })
      chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage() })
      chatPanel.addEventListener('click',  e => e.stopPropagation())

      function appendMessage ({ from, username: name, text, ts }) {
        const isSelf = from === spaceSync.id
        const time   = new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        const msg    = document.createElement('div')
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
        if (!chatPanel.classList.contains('open') && !isSelf) {
          unread++
          const label = unread > 9 ? '9+' : String(unread)
          chatBadge.textContent = label
          chatBadge.classList.add('visible')
          if (mbChatBadge) { mbChatBadge.textContent = label; mbChatBadge.classList.add('visible') }
        }
      }

      function appendSystem (text) {
        const el = document.createElement('div')
        el.className = 'chat-system'
        el.textContent = text
        chatMsgs.appendChild(el)
        chatMsgs.scrollTop = chatMsgs.scrollHeight
      }

      const _peerNames = new Map()
      spaceSync.addEventListener('chat',       e => appendMessage(e.detail))
      spaceSync.addEventListener('peer:join',  e => {
        _peerNames.set(e.detail.peerId, e.detail.username)
        appendSystem(`${e.detail.username} joined`)
      })
      spaceSync.addEventListener('peer:leave', e => {
        const name = _peerNames.get(e.detail.peerId) ?? 'Someone'
        _peerNames.delete(e.detail.peerId)
        appendSystem(`${name} left`)
      })

      // ── DDHSN swarm + visibility ─────────────────────────────────────────────
      const swarmNet = new SwarmNetwork()
      const visLayer = new VisibilityLayer()
      const myNode   = new SwarmNode(username)
      swarmNet.createReality(myNode)
      visLayer.setNode(username, VISIBILITY.PUBLIC)

      document.getElementById('nm-open-btn')?.addEventListener('click', e => {
        e.stopPropagation()
        openNetworkMap(swarmNet, visLayer, username)
      })

      // ── Mobile bottom bar wiring ─────────────────────────────────────────────
      // Proxy each mobile bar button to its desktop counterpart, or inline action.
      document.getElementById('mb-avatar-btn')?.addEventListener('click', () =>
        document.getElementById('avatar-btn')?.click())
      document.getElementById('mb-nm-btn')?.addEventListener('click', e => {
        e.stopPropagation()
        openNetworkMap(swarmNet, visLayer, username)
      })
      document.getElementById('mb-voice-btn')?.addEventListener('click', e => {
        e.stopPropagation()
        voiceBtn?.click()
      })
      document.getElementById('mb-status-btn')?.addEventListener('click', e => {
        e.stopPropagation()
        statusBtn?.click()
      })

      // Keep mobile bar voice button in sync with voice state
      voice.onStateChange(({ active, muted } = {}) => {
        const btn = document.getElementById('mb-voice-btn')
        if (!btn) return
        if (!active) {
          btn.innerHTML = '🎙'; btn.className = 'mb-btn'
        } else if (muted) {
          btn.innerHTML = '🔇'; btn.className = 'mb-btn mb-voice-active'
          btn.style.color = '#ff6b6b'
        } else {
          btn.innerHTML = '🎙'; btn.className = 'mb-btn mb-voice-active'
          btn.style.color = ''
        }
      })

      // ── Screen + door proximity ──────────────────────────────────────────────
      const hintEl   = document.getElementById('screen-hint')
      const hintName = document.getElementById('screen-hint-name')
      let _nearestScreen = null
      let _nearestDoor   = null

      document.addEventListener('keydown', e => {
        if (e.code === 'KeyE' && _nearestScreen && !isOpen()) openScreen(_nearestScreen)
        if (e.code === 'KeyF' && _nearestDoor) {
          const id     = _nearestDoor.def.id
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

      const _autoDoors = new Set()

      setInterval(() => {
        if (isOpen()) return
        const pos = player.getPosition()

        // Screen proximity
        let nearest = null, nearestDist = 4.0
        screens.forEach(s => {
          const dx = pos.x - s.position.x, dz = pos.z - s.position.z
          const dist = Math.sqrt(dx * dx + dz * dz)
          if (dist < nearestDist) { nearestDist = dist; nearest = s }
        })
        _nearestScreen = nearest
        if (hintEl) {
          hintEl.style.display = nearest ? 'flex' : 'none'
          if (nearest && hintName) hintName.textContent = nearest.label
        }

        // Door auto-open / close
        DOOR_DEFS.forEach(def => {
          const dx = pos.x - def.hinge.x, dz = pos.z - def.hinge.z
          const dist = Math.sqrt(dx * dx + dz * dz)
          const id   = def.id
          if (dist < 2.2 && !isDoorOpen(id)) {
            toggleDoor(id); _autoDoors.add(id)
            if (id === 'main-left')  { if (!isDoorOpen('main-right')) toggleDoor('main-right'); _autoDoors.add('main-right') }
            if (id === 'main-right') { if (!isDoorOpen('main-left'))  toggleDoor('main-left');  _autoDoors.add('main-left')  }
          } else if (dist > 3.5 && _autoDoors.has(id) && isDoorOpen(id)) {
            toggleDoor(id); _autoDoors.delete(id)
            if (id === 'main-left')  { if (isDoorOpen('main-right')) toggleDoor('main-right'); _autoDoors.delete('main-right') }
            if (id === 'main-right') { if (isDoorOpen('main-left'))  toggleDoor('main-left');  _autoDoors.delete('main-left')  }
          }
        })

        // Door proximity hint
        const nearDoor    = getNearbyDoor(pos, 2.8)
        _nearestDoor      = nearDoor
        const doorHintEl  = document.getElementById('door-proximity-hint')
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

})()

// ── Helpers ───────────────────────────────────────────────────────────────────

function _presetFromId (id) {
  let h = 0
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0
  return Math.abs(h) % AVATAR_PRESETS.length
}

function _updateOnlineCount (hud, count) {
  const el = hud?.querySelector?.('#online-count')
  if (el) el.textContent = `● ${count} aboard`
}

// ── Zone UI ───────────────────────────────────────────────────────────────────
const ZONE_META = {
  OUTSIDE:     { color: '#88cc66', desc: 'Outside the building' },
  LOBBY:       { color: '#ffffff', desc: 'Reception & Entrance' },
  OPS:         { color: '#ffaa44', desc: 'Operations & Technical Support' },
  FUN:         { color: '#44ffaa', desc: 'Chill, Social & Games' },
  DESIGN:      { color: '#ff6ba0', desc: 'UI/UX, Design & 3D' },
  ENGINEERING: { color: '#44aaff', desc: 'Development & Engineering' },
  '':          { color: '#ffffff', desc: '' },
}

function updateZoneUI (zoneName) {
  const nameEl = document.getElementById('zone-name')
  const descEl = document.getElementById('zone-desc')
  const meta   = ZONE_META[zoneName] || ZONE_META['']
  if (nameEl) { nameEl.textContent = zoneName; nameEl.style.color = meta.color }
  if (descEl) descEl.textContent = meta.desc
  document.querySelectorAll('.map-zone').forEach(el => {
    el.classList.toggle('active', el.dataset.zone === zoneName)
  })
}
