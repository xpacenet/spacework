import { describe, it, expect, vi, beforeEach } from 'vitest'

// ── Mock the transport modules so no real network calls happen ─────────────
vi.mock('../multiplayer/p2p.js', () => ({
  initP2P:          vi.fn(),
  generateRoomCode: vi.fn(() => 'TST-123'),
  normalizeRoomCode: vi.fn(c => c),
}))

vi.mock('../multiplayer/provider.js', () => ({
  initProvider: vi.fn(),
}))

import { initMultiplayer, generateRoomCode } from '../multiplayer/index.js'
import { initP2P }      from '../multiplayer/p2p.js'
import { initProvider } from '../multiplayer/provider.js'

// Minimal stubs for scene / player / hud — these modules aren't under test
const scene    = {}
const player   = { getPosition: () => ({ x: 0, y: 0, z: 0 }), getRotation: () => ({ y: 0 }) }
const username = 'TestUser'
const hud      = {}

beforeEach(() => {
  vi.clearAllMocks()
})

// ── Mode routing ───────────────────────────────────────────────────────────

describe('initMultiplayer — mode routing', () => {
  it('calls initP2P when mode is p2p', () => {
    initMultiplayer('p2p', { roomCode: 'ABC-123' }, scene, player, username, hud)
    expect(initP2P).toHaveBeenCalledOnce()
    expect(initProvider).not.toHaveBeenCalled()
  })

  it('calls initProvider when mode is provider', () => {
    initMultiplayer('provider', { serverUrl: 'http://localhost:3001' }, scene, player, username, hud)
    expect(initProvider).toHaveBeenCalledOnce()
    expect(initP2P).not.toHaveBeenCalled()
  })
})

// ── P2P mode ───────────────────────────────────────────────────────────────

describe('initMultiplayer — P2P mode', () => {
  it('returns mode: p2p', () => {
    const result = initMultiplayer('p2p', { roomCode: 'ABC-123' }, scene, player, username, hud)
    expect(result.mode).toBe('p2p')
  })

  it('passes provided room code to initP2P', () => {
    initMultiplayer('p2p', { roomCode: 'ABC-123' }, scene, player, username, hud)
    expect(initP2P).toHaveBeenCalledWith(scene, player, username, hud, 'ABC-123')
  })

  it('generates a room code when none is provided', () => {
    const result = initMultiplayer('p2p', {}, scene, player, username, hud)
    // generateRoomCode mock returns 'TST-123'
    expect(result.roomCode).toBe('TST-123')
  })

  it('passes generated room code to initP2P', () => {
    initMultiplayer('p2p', {}, scene, player, username, hud)
    expect(initP2P).toHaveBeenCalledWith(scene, player, username, hud, 'TST-123')
  })

  it('returns the room code in the result', () => {
    const result = initMultiplayer('p2p', { roomCode: 'XY9-88Z' }, scene, player, username, hud)
    expect(result.roomCode).toBe('XY9-88Z')
  })
})

// ── Provider mode ──────────────────────────────────────────────────────────

describe('initMultiplayer — Provider mode', () => {
  it('returns mode: provider', () => {
    const result = initMultiplayer('provider', { serverUrl: 'http://myserver.com' }, scene, player, username, hud)
    expect(result.mode).toBe('provider')
  })

  it('passes serverUrl to initProvider', () => {
    initMultiplayer('provider', { serverUrl: 'http://myserver.com' }, scene, player, username, hud)
    expect(initProvider).toHaveBeenCalledWith(scene, player, username, hud, 'http://myserver.com')
  })

  it('passes undefined serverUrl when not given (falls back in provider)', () => {
    initMultiplayer('provider', {}, scene, player, username, hud)
    expect(initProvider).toHaveBeenCalledWith(scene, player, username, hud, undefined)
  })

  it('does not return a roomCode', () => {
    const result = initMultiplayer('provider', {}, scene, player, username, hud)
    expect(result.roomCode).toBeUndefined()
  })
})
