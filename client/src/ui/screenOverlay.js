// ── Shared screen overlay ──────────────────────────────────────────────────
// Opens a full-screen iframe panel when the player interacts with a screen.

export function initScreenOverlay() {
  const overlay  = document.getElementById('screen-overlay')
  const iframe   = document.getElementById('screen-iframe')
  const closeBtn = document.getElementById('screen-overlay-close')
  const titleEl  = document.getElementById('screen-overlay-title')
  const toolEl   = document.getElementById('screen-overlay-tool')
  const zoneEl   = document.getElementById('screen-overlay-zone')

  if (!overlay) {
    console.warn('[screenOverlay] #screen-overlay not found in DOM')
    return { openScreen: () => {}, closeScreen: () => {}, isOpen: () => false }
  }

  closeBtn.addEventListener('click', closeScreen)

  // Backdrop click closes
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeScreen()
  })

  // ESC closes (capture phase — runs before controls.js)
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && overlay.classList.contains('visible')) {
      closeScreen()
      e.stopPropagation()
    }
  }, true)

  function openScreen(screen) {
    titleEl.textContent = screen.label
    toolEl.textContent  = screen.tool
    if (zoneEl) {
      zoneEl.textContent = screen.zone
      // Color by zone
      const zoneColors = { BRIDGE: '#4466ff', LAB: '#00ffcc', LOUNGE: '#aa55ff' }
      zoneEl.style.color = zoneColors[screen.zone] || '#fff'
    }
    iframe.src = screen.url
    overlay.classList.add('visible')
    // Release pointer lock so user can interact with iframe
    document.exitPointerLock?.()
  }

  function closeScreen() {
    overlay.classList.remove('visible')
    // Clear src to stop audio / video
    setTimeout(() => { iframe.src = '' }, 200)
  }

  function isOpen() {
    return overlay.classList.contains('visible')
  }

  return { openScreen, closeScreen, isOpen }
}
