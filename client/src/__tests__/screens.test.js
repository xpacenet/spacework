import { describe, it, expect, vi, beforeAll } from 'vitest'

// ── THREE and DOM are not available in Node — stub what SCREENS needs ──────
vi.mock('three', () => ({
  default: {},
  Group:   class { add() {} position = { set() {} }; rotation = {} },
  Mesh:    class { position = { set() {} }; userData = {} },
  PlaneGeometry: class {},
  BoxGeometry:   class {},
  MeshStandardMaterial: class {},
  CanvasTexture: class {},
  PointLight:    class { position = { set() {} } },
  Color:         class {},
}))

// Stub document.createElement so CanvasTexture doesn't blow up
global.document = {
  createElement: () => ({
    width: 0, height: 0,
    getContext: () => ({
      fillRect: () => {}, fillText: () => {}, strokeRect: () => {},
      beginPath: () => {}, moveTo: () => {}, lineTo: () => {},
      stroke: () => {}, fill: () => {}, roundRect: () => {},
      createLinearGradient: () => ({ addColorStop: () => {} }),
      arc: () => {},
    }),
  }),
}
global.requestAnimationFrame = () => {}

import { SCREENS } from '../scene/screens.js'

// ── SCREENS data structure ─────────────────────────────────────────────────

describe('SCREENS data', () => {
  it('has exactly 3 screens — one per zone', () => {
    expect(SCREENS).toHaveLength(3)
  })

  it('covers all three zones', () => {
    const zones = SCREENS.map(s => s.zone)
    expect(zones).toContain('BRIDGE')
    expect(zones).toContain('LAB')
    expect(zones).toContain('LOUNGE')
  })

  it('each screen has required fields', () => {
    const required = ['id', 'label', 'zone', 'tool', 'url', 'position', 'rotationY', 'width', 'height', 'color', 'emoji']
    SCREENS.forEach(s => {
      required.forEach(field => {
        expect(s, `screen "${s.id}" missing field "${field}"`).toHaveProperty(field)
      })
    })
  })

  it('each screen position has x, y, z', () => {
    SCREENS.forEach(s => {
      expect(s.position).toHaveProperty('x')
      expect(s.position).toHaveProperty('y')
      expect(s.position).toHaveProperty('z')
    })
  })

  it('each screen has a valid https URL', () => {
    SCREENS.forEach(s => {
      expect(s.url).toMatch(/^https:\/\//)
    })
  })

  it('each screen has positive width and height', () => {
    SCREENS.forEach(s => {
      expect(s.width).toBeGreaterThan(0)
      expect(s.height).toBeGreaterThan(0)
    })
  })

  it('each screen has a unique id', () => {
    const ids = SCREENS.map(s => s.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('Bridge screen is on the back wall (z > 18)', () => {
    const bridge = SCREENS.find(s => s.zone === 'BRIDGE')
    expect(bridge.position.z).toBeGreaterThan(18)
  })

  it('Lounge screen is on the back wall (z < -18)', () => {
    const lounge = SCREENS.find(s => s.zone === 'LOUNGE')
    expect(lounge.position.z).toBeLessThan(-18)
  })

  it('screens are at a reasonable eye height (y between 1 and 4)', () => {
    SCREENS.forEach(s => {
      expect(s.position.y).toBeGreaterThan(1)
      expect(s.position.y).toBeLessThan(4)
    })
  })
})
