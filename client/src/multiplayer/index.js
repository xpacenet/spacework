// ── Multiplayer router ────────────────────────────────────────────────────
// Routes to P2P (Trystero / BitTorrent DHT) or Provider (Socket.io)
// based on the mode the user chose in the lobby.

import { initP2P, generateRoomCode } from './p2p.js'
import { initProvider }              from './provider.js'

export { generateRoomCode }

/**
 * @param {'p2p'|'provider'} mode
 * @param {object}  config    { roomCode? } for p2p | { serverUrl } for provider
 * @param {object}  scene     THREE.Scene
 * @param {object}  player    { getPosition, getRotation }
 * @param {string}  username
 * @param {Element} hud
 * @returns {{ mode, roomCode? }}
 */
export function initMultiplayer(mode, config, scene, player, username, hud) {
  if (mode === 'p2p') {
    const code = config.roomCode || generateRoomCode()
    initP2P(scene, player, username, hud, code)
    return { mode: 'p2p', roomCode: code }
  }

  // Provider (Socket.io) — falls back to localhost in dev
  initProvider(scene, player, username, hud, config.serverUrl)
  return { mode: 'provider' }
}
