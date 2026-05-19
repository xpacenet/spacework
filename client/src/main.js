import * as THREE from 'three'
import { initScene }         from './scene/index.js'
import { buildScreens }      from './scene/screens.js'
import { initPlayer }        from './player/index.js'
import { initMultiplayer }   from './multiplayer/index.js'
import { initScreenOverlay } from './ui/screenOverlay.js'
import { SwarmNetwork, SwarmNode } from './network/swarm.js'
import { VisibilityLayer, VISIBILITY } from './network/visibility.js'
import { openNetworkMap }    from './ui/networkMap.js'

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

    // ── Multiplayer ───────────────────────────────────────────────────────
    const mp = initMultiplayer(connectMode, config, scene, player, username, hud)

    // ── DDHSN swarm + visibility ──────────────────────────────────────────
    const swarmNet = new SwarmNetwork()
    const visLayer = new VisibilityLayer()
    const myNode   = new SwarmNode(username)
    const { frequency: shipFreq } = swarmNet.createReality(myNode)
    // Default: player is public
    visLayer.setNode(username, VISIBILITY.PUBLIC)

    // ── Network map button ────────────────────────────────────────────────
    document.getElementById('nm-open-btn').addEventListener('click', () => {
      openNetworkMap(swarmNet, visLayer, username)
    })

    // Show room code toast for P2P
    if (mp.mode === 'p2p') {
      showRoomCodeBanner(mp.roomCode)
    }

    // ── Screen proximity + E key ──────────────────────────────────────────
    const hintEl   = document.getElementById('screen-hint')
    const hintName = document.getElementById('screen-hint-name')
    let _nearestScreen = null

    document.addEventListener('keydown', e => {
      if (e.code === 'KeyE' && _nearestScreen && !isOpen()) {
        openScreen(_nearestScreen)
      }
    })

    setInterval(() => {
      if (isOpen()) return
      const pos = player.getPosition()
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
    }, 150)
  })
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
  BRIDGE: { color: '#44aaff', desc: 'Command & Meetings' },
  LAB:    { color: '#00ffcc', desc: 'Deep Work & Collaboration' },
  LOUNGE: { color: '#cc66ff', desc: 'Casual & Social' },
  '':     { color: '#ffffff', desc: '' },
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
