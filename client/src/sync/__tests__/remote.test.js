// @vitest-environment jsdom
/**
 * Unit tests for room ID derivation logic in remote.js.
 * These run with jsdom (simulated browser env, no network) via Vitest.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest'

// Mock both Trystero strategies — remote.js uses dynamic imports so both
// need to be stubbed to prevent Vitest loading browser-only modules.
vi.mock('@trystero-p2p/torrent',   () => ({ joinRoom: vi.fn() }))
vi.mock('@trystero-p2p/ws-relay',  () => ({ joinRoom: vi.fn() }))

const { deriveRoomId, currentRoomName } =
  await import('../remote.js')

describe('deriveRoomId', () => {
  beforeEach(() => { window.location.hash = '' })

  it('returns sw-1-main when hash is empty', () => {
    window.location.hash = ''
    expect(deriveRoomId()).toBe('sw-1-main')
  })

  it('derives room id from a simple hash', () => {
    window.location.hash = '#team-alpha'
    expect(deriveRoomId()).toBe('sw-1-team-alpha')
  })

  it('lowercases the slug', () => {
    window.location.hash = '#TeamAlpha'
    expect(deriveRoomId()).toBe('sw-1-teamalpha')
  })

  it('replaces spaces and special chars with dashes', () => {
    window.location.hash = '#My Room!!'
    // space→dash, each !→dash, then consecutive dashes collapse to one
    expect(deriveRoomId()).toBe('sw-1-my-room-')
  })

  it('collapses consecutive dashes', () => {
    window.location.hash = '#hello---world'
    expect(deriveRoomId()).toBe('sw-1-hello-world')
  })

  it('truncates slug to 40 chars', () => {
    window.location.hash = '#' + 'a'.repeat(50)
    expect(deriveRoomId()).toBe('sw-1-' + 'a'.repeat(40))
  })
})

describe('currentRoomName', () => {
  it('returns "main" when hash is empty', () => {
    window.location.hash = ''
    expect(currentRoomName()).toBe('main')
  })

  it('returns the hash without the # prefix', () => {
    window.location.hash = '#eng-standup'
    expect(currentRoomName()).toBe('eng-standup')
  })
})
