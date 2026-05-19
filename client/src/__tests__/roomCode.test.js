import { describe, it, expect } from 'vitest'
import { generateRoomCode, normalizeRoomCode } from '../multiplayer/p2p.js'

// ── generateRoomCode ───────────────────────────────────────────────────────

describe('generateRoomCode', () => {
  it('returns a string', () => {
    expect(typeof generateRoomCode()).toBe('string')
  })

  it('has format XXX-XXX (7 chars)', () => {
    const code = generateRoomCode()
    expect(code).toHaveLength(7)
    expect(code[3]).toBe('-')
  })

  it('only contains valid characters', () => {
    // No confusable chars (0, 1, I, O) and uppercase only
    const code = generateRoomCode()
    const clean = code.replace('-', '')
    expect(clean).toMatch(/^[A-HJ-NP-Z2-9]{6}$/)
  })

  it('generates unique codes', () => {
    const codes = new Set(Array.from({ length: 100 }, generateRoomCode))
    // 100 codes should all be unique (collision probability is astronomically low)
    expect(codes.size).toBe(100)
  })
})

// ── normalizeRoomCode ──────────────────────────────────────────────────────

describe('normalizeRoomCode', () => {
  it('uppercases lowercase input', () => {
    expect(normalizeRoomCode('abc123')).toBe('ABC-123')
  })

  it('re-inserts the dash in the right place', () => {
    expect(normalizeRoomCode('XK942F')).toBe('XK9-42F')
  })

  it('handles input that already has a dash', () => {
    expect(normalizeRoomCode('XK9-42F')).toBe('XK9-42F')
  })

  it('strips spaces', () => {
    expect(normalizeRoomCode('XK9 42F')).toBe('XK9-42F')
  })

  it('strips non-alphanumeric characters', () => {
    expect(normalizeRoomCode('XK9.42F')).toBe('XK9-42F')
  })
})
