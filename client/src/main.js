import * as THREE from 'three'
import { initScene }       from './scene/index.js'
import { buildScreens }    from './scene/screens.js'
import { initPlayer }      from './player/index.js'
import { initMultiplayer } from './multiplayer/index.js'
import { initScreenOverlay } from './ui/screenOverlay.js'

const lobby        = document.getElementById('lobby')
const loading      = document.getElementById('loading')
const loadFill     = document.getElementById('load-fill')
const loadText     = document.getElementById('load-text')
const hud          = document.getElementById('hud')
const clickToStart = document.getElementById('click-to-start')
const enterBtn     = document.getElementById('enter-btn')

enterBtn.addEventListener('click', startBoarding)
document.getElementById('username').addEventListener('keydown', e => {
  if (e.key === 'Enter') startBoarding()
})

function startBoarding() {
  const username = document.getElementById('username').value.trim()
  if (!username) {
    document.getElementById('username').focus()
    document.getElementById('username').style.borderColor = '#f55'
    return
  }

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

    // ── Screens ────────────────────────────────────────────────────────────
    const { meshes: screenMeshes, screens } = buildScreens(scene)
    const { openScreen, isOpen }            = initScreenOverlay()

    // ── Pointer lock + screen click handling ───────────────────────────────
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
      // Never fight the overlay while it is open
      if (isOpen()) return

      if (document.pointerLockElement !== renderer.domElement) {
        // Check if clicking a screen
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

    // ── Player ─────────────────────────────────────────────────────────────
    const player = initPlayer(scene, camera, renderer, updateZoneUI)
    initMultiplayer(scene, player, username, hud)

    // ── Screen proximity hint + E key ─────────────────────────────────────
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
      let nearest = null
      let nearestDist = 4.0   // proximity radius (world units)

      screens.forEach(s => {
        const dx   = pos.x - s.position.x
        const dz   = pos.z - s.position.z
        const dist = Math.sqrt(dx * dx + dz * dz)
        if (dist < nearestDist) {
          nearestDist = dist
          nearest = s
        }
      })

      _nearestScreen = nearest
      if (hintEl) {
        if (nearest) {
          hintEl.style.display = 'flex'
          if (hintName) hintName.textContent = nearest.label
        } else {
          hintEl.style.display = 'none'
        }
      }
    }, 150)
  })
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
