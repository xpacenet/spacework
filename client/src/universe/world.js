/**
 * World — WGS84-based planetary grid.
 *
 * The Earth is divided into a lat/lng grid at configurable resolution.
 * Each cell has a deterministic terrain type derived from real-world
 * approximations (ocean coverage, Koppen climate zones, elevation proxies).
 *
 * Coordinates follow the WGS84 convention:
 *   lat  ∈ [-90,  90]   (south → north)
 *   lng  ∈ [-180, 180]  (west  → east)
 */

// ── Terrain classification ────────────────────────────────────────────────

export const TERRAIN = Object.freeze({
  OCEAN:    'ocean',
  COAST:    'coast',
  DESERT:   'desert',
  PLAINS:   'plains',
  FOREST:   'forest',
  MOUNTAIN: 'mountain',
  ARCTIC:   'arctic',
  JUNGLE:   'jungle',
  TUNDRA:   'tundra',
})

/**
 * Deterministic pseudo-random from a coordinate pair.
 * Returns a float in [0, 1).
 */
function cellRng(lat, lng, salt = 0) {
  // Simple but stable hash — deterministic across runs
  let h = Math.imul(Math.imul(lat * 1000 | 0, 2654435761) ^ salt, Math.imul(lng * 1000 | 0, 2246822519))
  h ^= h >>> 17
  h = Math.imul(h, 2246822519)
  h ^= h >>> 13
  h = Math.imul(h, 3266489917)
  h ^= h >>> 16
  return (h >>> 0) / 4294967296
}

/**
 * Classify a (lat, lng) coordinate into a terrain type.
 * Approximates real Earth biome distribution.
 */
export function classifyTerrain(lat, lng) {
  const absLat = Math.abs(lat)
  const noise  = cellRng(lat, lng)        // 0-1 micro-variation
  const noise2 = cellRng(lat, lng, 7919)  // second noise channel

  // ── Poles ──────────────────────────────────────────────────────────────
  if (absLat > 75) return TERRAIN.ARCTIC
  if (absLat > 60) return noise < 0.6 ? TERRAIN.TUNDRA : TERRAIN.ARCTIC

  // ── Continental land features (check BEFORE ocean mask) ───────────────

  // Mountains (major ranges)
  const himalaya = lat > 25 && lat < 40  && lng > 70  && lng < 100
  const andes    = lat > -55 && lat < 12 && lng > -82 && lng < -65
  const rockies  = lat > 30 && lat < 60  && lng > -125 && lng < -100
  const alps     = lat > 44 && lat < 48  && lng > 6   && lng < 16
  const atlas    = lat > 28 && lat < 38  && lng > -8  && lng < 10
  const isRange  = himalaya || andes || rockies || alps || atlas
  if (isRange && noise < 0.7 + noise2 * 0.2) return TERRAIN.MOUNTAIN

  // Deserts (Sahara, Arabian, Gobi, Australian outback, Atacama)
  const sahara    = lat > 12  && lat < 32  && lng > -18 && lng < 55
  const arabian   = lat > 15  && lat < 32  && lng > 35  && lng < 60
  const gobi      = lat > 37  && lat < 50  && lng > 95  && lng < 120
  const outback   = lat > -35 && lat < -20 && lng > 115 && lng < 145
  const atacama   = lat > -30 && lat < -15 && lng > -75 && lng < -65
  const isDesert  = sahara || arabian || gobi || outback || atacama
  if (isDesert && noise < 0.75) return TERRAIN.DESERT

  // Jungle (equatorial belt over land)
  if (absLat < 10 && noise < 0.7) return TERRAIN.JUNGLE
  if (absLat < 20 && noise < 0.4) return TERRAIN.JUNGLE

  // ── Approximate ocean mask (covers ~71% of Earth) ─────────────────────
  // Pacific: west of Americas, east of Asia/Australia — but not inside land regions above
  // Atlantic: narrow — avoid Africa/Europe interior
  // Atlantic goes up to ~lng 15 to avoid North Africa (Sahara already handled above)
  const inPacific  = (lng < -70 || lng > 130) && absLat < 65
  const inAtlantic = (lng >= -70 && lng <= 15) && absLat < 65
  const inIndian   = (lng > 50 && lng < 130) && lat < 25 && lat > -65
  const inSouthern = lat < -55

  const landNoise = cellRng(lat, lng, 1337)
  if (inSouthern)                        return landNoise < 0.15 ? TERRAIN.COAST : TERRAIN.OCEAN
  if (inPacific  && landNoise > 0.12)   return TERRAIN.OCEAN
  if (inAtlantic && landNoise > 0.18)   return TERRAIN.OCEAN
  if (inIndian   && landNoise > 0.16)   return TERRAIN.OCEAN

  // Shallow coast band
  if ((inPacific || inAtlantic || inIndian) && landNoise > 0.08) return TERRAIN.COAST

  // ── Taiga / Boreal forest ─────────────────────────────────────────────
  if (lat > 50 && lat < 65 && noise < 0.65) return TERRAIN.FOREST

  // ── Temperate forest ──────────────────────────────────────────────────
  if (absLat > 30 && absLat < 55 && noise < 0.55) return TERRAIN.FOREST

  // ── Grassland / Plains — everything else ──────────────────────────────
  return TERRAIN.PLAINS
}

// ── World Cell ────────────────────────────────────────────────────────────

export class WorldCell {
  /**
   * @param {number} lat   cell centre latitude
   * @param {number} lng   cell centre longitude
   * @param {string} terrain  TERRAIN.*
   */
  constructor(lat, lng, terrain) {
    this.lat     = lat
    this.lng     = lng
    this.terrain = terrain
    this.cellId  = WorldCell.makeId(lat, lng)
  }

  static makeId(lat, lng) {
    const la = (lat  >= 0 ? 'N' : 'S') + String(Math.abs(lat)).replace('.', 'd')
    const lo = (lng  >= 0 ? 'E' : 'W') + String(Math.abs(lng)).replace('.', 'd')
    return `${la}_${lo}`
  }

  /** Geographic centre as a plain object */
  get coords() { return { lat: this.lat, lng: this.lng } }

  toJSON() {
    return { cellId: this.cellId, lat: this.lat, lng: this.lng, terrain: this.terrain }
  }
}

// ── World Grid ────────────────────────────────────────────────────────────

export class WorldGrid {
  /**
   * @param {number} resolution  degrees per cell (default 1° ≈ 111 km)
   */
  constructor(resolution = 1) {
    if (resolution <= 0 || resolution > 90) throw new RangeError('resolution must be in (0, 90]')
    this.resolution = resolution
    this._cells     = new Map()  // cellId → WorldCell (lazy)
  }

  /** Snap a lat/lng to grid cell centre */
  snap(lat, lng) {
    const r  = this.resolution
    const la = Math.round(lat / r) * r
    const lo = Math.round(lng / r) * r
    return { lat: Math.max(-90, Math.min(90, la)), lng: Math.max(-180, Math.min(180, lo)) }
  }

  /** Get (or lazily create) the cell at (lat, lng) */
  getCell(lat, lng) {
    const { lat: la, lng: lo } = this.snap(lat, lng)
    const id = WorldCell.makeId(la, lo)
    if (!this._cells.has(id)) {
      this._cells.set(id, new WorldCell(la, lo, classifyTerrain(la, lo)))
    }
    return this._cells.get(id)
  }

  /** Get cells within a bounding box — generates them lazily */
  getCellsInBounds(latMin, latMax, lngMin, lngMax) {
    const cells = []
    const r = this.resolution
    for (let la = latMin; la <= latMax; la = +(la + r).toFixed(8)) {
      for (let lo = lngMin; lo <= lngMax; lo = +(lo + r).toFixed(8)) {
        cells.push(this.getCell(la, lo))
      }
    }
    return cells
  }

  /** How many cells have been materialised so far */
  get size() { return this._cells.size }

  /** Terrain breakdown across all materialised cells */
  terrainStats() {
    const counts = {}
    for (const cell of this._cells.values()) {
      counts[cell.terrain] = (counts[cell.terrain] || 0) + 1
    }
    return counts
  }
}
