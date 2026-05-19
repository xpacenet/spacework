import { describe, it, expect } from 'vitest'
import { generateRoomCode }     from '../multiplayer/index.js'
import { normalizeRoomCode }    from '../multiplayer/p2p.js'

// Multiplayer routing is now handled entirely by spaceSync (src/sync/).
// These tests cover the room-code utilities still used in the lobby UI.

describe('generateRoomCode', () => {
  it('returns XXX-XXX format', () => {
    expect(generateRoomCode()).toMatch(/^[A-Z0-9]{3}-[A-Z0-9]{3}$/)
  })

  it('generates unique codes', () => {
    const codes = new Set(Array.from({ length: 100 }, generateRoomCode))
    expect(codes.size).toBe(100)
  })

  it('never contains ambiguous chars (0, 1, I, O)', () => {
    for (let i = 0; i < 200; i++) {
      expect(generateRoomCode()).not.toMatch(/[01IO]/)
    }
  })
})

describe('normalizeRoomCode', () => {
  it('uppercases',             () => expect(normalizeRoomCode('abc123')).toBe('ABC-123'))
  it('re-inserts dash',        () => expect(normalizeRoomCode('ABCDEF')).toBe('ABC-DEF'))
  it('handles existing dash',  () => expect(normalizeRoomCode('ABC-DEF')).toBe('ABC-DEF'))
  it('strips spaces',          () => expect(normalizeRoomCode('AB C DE F')).toBe('ABC-DEF'))
})
