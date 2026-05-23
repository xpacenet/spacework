import { describe, it, expect, vi } from 'vitest'

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
// Building has 4 zones: DESIGN, ENGINEERING, OPS, FUN

describe('SCREENS data', () => {
  it('has exactly 4 screens — one per zone', () => {
    expect(SCREENS).toHaveLength(4)
  })

  it('covers all four zones', () => {
    const zones = SCREENS.map(s => s.zone)
    expect(zones).toContain('DESIGN')
    expect(zones).toContain('ENGINEERING')
    expect(zones).toContain('OPS')
    expect(zones).toContain('FUN')
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

  it('screens are at a reasonable eye height (y between 1 and 4)', () => {
    SCREENS.forEach(s => {
      expect(s.position.y).toBeGreaterThan(1)
      expect(s.position.y).toBeLessThan(4)
    })
  })

  it('DESIGN and ENGINEERING screens are in the back half (z < -4)', () => {
    const design = SCREENS.find(s => s.zone === 'DESIGN')
    const eng    = SCREENS.find(s => s.zone === 'ENGINEERING')
    expect(design.position.z).toBeLessThan(-4)
    expect(eng.position.z).toBeLessThan(-4)
  })

  it('OPS and FUN screens are in the middle zone (-4 < z < 4)', () => {
    const ops = SCREENS.find(s => s.zone === 'OPS')
    const fun = SCREENS.find(s => s.zone === 'FUN')
    expect(ops.position.z).toBeGreaterThan(-4)
    expect(ops.position.z).toBeLessThan(4)
    expect(fun.position.z).toBeGreaterThan(-4)
    expect(fun.position.z).toBeLessThan(4)
  })
})
