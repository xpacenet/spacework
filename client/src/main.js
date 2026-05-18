import { initScene } from './scene/index.js'
import { initPlayer } from './player/index.js'
import { initMultiplayer } from './multiplayer/index.js'

const lobby       = document.getElementById('lobby')
const loading     = document.getElementById('loading')
const loadFill    = document.getElementById('load-fill')
const loadText    = document.getElementById('load-text')
const hud         = document.getElementById('hud')
const clickToStart= document.getElementById('click-to-start')
const enterBtn    = document.getElementById('enter-btn')

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

  window._spaceUsername = username   // avatar picks this up
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

    // Toggle click-to-start with pointer lock state
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement === renderer.domElement) {
        clickToStart.classList.add('hidden')
      } else {
        clickToStart.classList.remove('hidden')
      }
    })

    // Click to lock pointer
    clickToStart.addEventListener('click', () => renderer.domElement.requestPointerLock())
    renderer.domElement.addEventListener('click',  () => renderer.domElement.requestPointerLock())

    const player = initPlayer(scene, camera, renderer, updateZoneUI)
    initMultiplayer(scene, player, username, hud)
  })
}

const ZONE_META = {
  BRIDGE: { color: '#44aaff', desc: 'Command & Meetings' },
  LAB:    { color: '#00ffcc', desc: 'Deep Work & Collaboration' },
  LOUNGE: { color: '#cc66ff', desc: 'Casual & Social' },
  '':     { color: '#ffffff', desc: '' },
}

function updateZoneUI(zoneName) {
  const zoneName_el = document.getElementById('zone-name')
  const zoneDesc_el = document.getElementById('zone-desc')
  const meta = ZONE_META[zoneName] || ZONE_META['']

  zoneName_el.textContent = zoneName
  zoneName_el.style.color = meta.color
  zoneDesc_el.textContent = meta.desc

  // Update mini map
  document.querySelectorAll('.map-zone').forEach(el => {
    el.classList.toggle('active', el.dataset.zone === zoneName)
  })
}
