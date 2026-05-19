// Avatar creation and position sync are now handled by spaceSync in main.js.
// This file only exports the room-code utilities still used in tests.

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

export function generateRoomCode() {
  const seg = n => Array.from({ length: n }, () =>
    CHARS[Math.floor(Math.random() * CHARS.length)]
  ).join('')
  return `${seg(3)}-${seg(3)}`
}

export function normalizeRoomCode(code) {
  return code.toUpperCase().replace(/[^A-Z0-9]/g, '').replace(/^(.{3})(.{3})$/, '$1-$2')
}
