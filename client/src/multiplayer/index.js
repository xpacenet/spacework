// Multiplayer is now handled entirely by spaceSync (src/sync/index.js).
// This file is kept for the room-code export used in tests and the lobby UI.

export { generateRoomCode } from './p2p.js'

export function initMultiplayer() {
  // No-op — spaceSync.start(username) called directly in main.js
  return { mode: 'p2p', roomCode: 'SW-OPEN-v1' }
}
