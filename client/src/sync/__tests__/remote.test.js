// @vitest-environment jsdom
/**
 * Unit tests for room helpers in remote.js (xpacenode v3).
 *
 * deriveRoomId() is now a legacy slug helper — returns the plain slug from
 * the URL hash. The actual xpacenode room topic is a SHA-256 hash derived
 * in RemoteSync.start() via roomLink.parseCurrentLink(). These tests cover
 * the slug fallback behaviour only.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest'

vi.mock('../roomLink.js', () => ({
  parseCurrentLink:  vi.fn(async () => ({ type: 'default', roomId: 'main', roomHash: 'deadbeef', node: null, peers: [] })),
  createRoomLink:    vi.fn(),
  recordPeer:        vi.fn(),
  setRoomNameInUrl:  vi.fn(name => { window.location.hash = name }),
}))

const { deriveRoomId, currentRoomName } = await import('../remote.js')

describe('deriveRoomId', () => {
  beforeEach(() => { window.location.hash = '' })

  it('returns "main" when hash is empty', () => {
    window.location.hash = ''
    expect(deriveRoomId()).toBe('main')
  })

  it('derives slug from a simple hash', () => {
    window.location.hash = '#team-alpha'
    expect(deriveRoomId()).toBe('team-alpha')
  })

  it('lowercases the slug', () => {
    window.location.hash = '#TeamAlpha'
    expect(deriveRoomId()).toBe('teamalpha')
  })

  it('replaces special chars with dashes and collapses them', () => {
    window.location.hash = '#my-room!!'
    expect(deriveRoomId()).toBe('my-room-')
  })

  it('collapses consecutive dashes', () => {
    window.location.hash = '#hello---world'
    expect(deriveRoomId()).toBe('hello-world')
  })

  it('truncates slug to 40 chars', () => {
    window.location.hash = '#' + 'a'.repeat(50)
    expect(deriveRoomId()).toBe('a'.repeat(40))
  })

  it('returns "main" for xn_ encoded links (hash is handled by roomLink)', () => {
    window.location.hash = '#xn_eyJyIjoiZGVzaWduIn0'
    expect(deriveRoomId()).toBe('main')
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

  it('returns "main" for xn_ encoded links (display name comes from parsed link)', () => {
    window.location.hash = '#xn_eyJyIjoiZGVzaWduIn0'
    expect(currentRoomName()).toBe('main')
  })
})
