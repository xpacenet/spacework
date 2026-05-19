/**
 * ResourceLayer — open resource economy for the universe.
 *
 * Resources are discoverable, claimable, mineable, and tradeable.
 * Every action is recorded through WorldHistory — full auditability.
 * Claiming and trading requires trust-network membership (TrustNetwork).
 *
 * Resource availability is seeded deterministically from terrain type,
 * meaning the world is explorable and consistent for all participants.
 */

import { TERRAIN } from './world.js'

// ── Resource types ────────────────────────────────────────────────────────

export const RESOURCE = Object.freeze({
  SOLAR:       'solar',        // High deserts, equatorial zones
  WIND:        'wind',         // Coasts, plains, mountains
  HYDRO:       'hydro',        // Rivers implied by jungle/forest
  MINERAL:     'mineral',      // Mountain, plains
  RARE_EARTH:  'rare_earth',   // Mountain, desert
  BIOLOGICAL:  'biological',   // Forest, jungle
  FISHERY:     'fishery',      // Ocean, coast
  GEOTHERMAL:  'geothermal',   // Mountain, coast (volcanic)
})

// ── Terrain → resource yield table ───────────────────────────────────────
//  Values represent base yield multipliers (0 = not present, >1 = abundant)

const TERRAIN_YIELDS = {
  [TERRAIN.OCEAN]:    { [RESOURCE.FISHERY]: 2.0, [RESOURCE.WIND]: 0.8 },
  [TERRAIN.COAST]:    { [RESOURCE.FISHERY]: 1.5, [RESOURCE.WIND]: 1.2, [RESOURCE.SOLAR]: 0.6 },
  [TERRAIN.DESERT]:   { [RESOURCE.SOLAR]: 2.5, [RESOURCE.RARE_EARTH]: 0.8, [RESOURCE.MINERAL]: 0.5 },
  [TERRAIN.PLAINS]:   { [RESOURCE.WIND]: 1.0, [RESOURCE.MINERAL]: 0.8, [RESOURCE.BIOLOGICAL]: 0.5, [RESOURCE.SOLAR]: 0.7 },
  [TERRAIN.FOREST]:   { [RESOURCE.BIOLOGICAL]: 1.8, [RESOURCE.HYDRO]: 0.9, [RESOURCE.WIND]: 0.3 },
  [TERRAIN.MOUNTAIN]: { [RESOURCE.MINERAL]: 2.0, [RESOURCE.RARE_EARTH]: 1.2, [RESOURCE.GEOTHERMAL]: 0.6, [RESOURCE.WIND]: 1.0, [RESOURCE.HYDRO]: 0.7 },
  [TERRAIN.ARCTIC]:   { [RESOURCE.MINERAL]: 0.4, [RESOURCE.WIND]: 1.5 },
  [TERRAIN.JUNGLE]:   { [RESOURCE.BIOLOGICAL]: 2.5, [RESOURCE.HYDRO]: 1.5, [RESOURCE.SOLAR]: 1.0 },
  [TERRAIN.TUNDRA]:   { [RESOURCE.MINERAL]: 0.6, [RESOURCE.GEOTHERMAL]: 0.4, [RESOURCE.WIND]: 0.8 },
}

// ── Deterministic yield noise ─────────────────────────────────────────────

function yieldNoise(cellId, resourceType) {
  let h = 5381
  for (const c of cellId + resourceType) h = Math.imul(h, 33) ^ c.charCodeAt(0)
  return ((h >>> 0) / 4294967296) * 0.4 + 0.8  // [0.8, 1.2] multiplier
}

// ── Resource Deposit ──────────────────────────────────────────────────────

export class ResourceDeposit {
  /**
   * @param {string} cellId      WorldCell.cellId
   * @param {string} type        RESOURCE.*
   * @param {number} capacity    max extractable units
   * @param {number} ratePerTick units mineable per mine() call
   */
  constructor(cellId, type, capacity, ratePerTick) {
    this.cellId      = cellId
    this.type        = type
    this.capacity    = capacity
    this.ratePerTick = ratePerTick
    this.extracted   = 0
    this.claimedBy   = null   // nodeId that claimed this deposit
    this.discovered  = false
  }

  get remaining()   { return Math.max(0, this.capacity - this.extracted) }
  get depleted()    { return this.remaining === 0 }
  get isClaimed()   { return this.claimedBy !== null }

  toJSON() {
    return {
      cellId:      this.cellId,
      type:        this.type,
      capacity:    this.capacity,
      ratePerTick: this.ratePerTick,
      extracted:   this.extracted,
      remaining:   this.remaining,
      claimedBy:   this.claimedBy,
      discovered:  this.discovered,
    }
  }
}

// ── Trade Record ──────────────────────────────────────────────────────────

export class TradeRecord {
  constructor(fromId, toId, resourceType, amount, pricePerUnit) {
    this.id           = `trade-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
    this.fromId       = fromId
    this.toId         = toId
    this.resourceType = resourceType
    this.amount       = amount
    this.pricePerUnit = pricePerUnit
    this.total        = amount * pricePerUnit
    this.timestamp    = Date.now()
  }
}

// ── Resource Layer ────────────────────────────────────────────────────────

export class ResourceLayer {
  #deposits  = new Map()   // `${cellId}:${type}` → ResourceDeposit
  #inventory = new Map()   // nodeId → Map<resourceType, number>
  #trades    = []          // TradeRecord[]
  #history   = null        // optional WorldHistory reference

  /**
   * @param {WorldHistory|null} history  optional — if provided, changes are recorded
   */
  constructor(history = null) {
    this.#history = history
  }

  // ── Discovery ─────────────────────────────────────────────────────────────

  /**
   * Discover available resources in a cell.
   * Returns the list of deposits found.
   *
   * @param {WorldCell} cell
   * @param {string}    discoverId  nodeId of the discoverer
   * @returns {ResourceDeposit[]}
   */
  discover(cell, discoverId) {
    const yields = TERRAIN_YIELDS[cell.terrain] || {}
    const found  = []

    for (const [type, baseYield] of Object.entries(yields)) {
      const key = `${cell.cellId}:${type}`
      if (this.#deposits.has(key)) {
        const dep = this.#deposits.get(key)
        if (!dep.discovered) {
          dep.discovered = true
          found.push(dep)
        }
        continue
      }

      const noise    = yieldNoise(cell.cellId, type)
      const capacity = Math.round(baseYield * noise * 1000)
      const rate     = Math.max(1, Math.round(capacity * 0.02))

      if (capacity <= 0) continue

      const dep = new ResourceDeposit(cell.cellId, type, capacity, rate)
      dep.discovered = true
      this.#deposits.set(key, dep)
      found.push(dep)
    }

    if (this.#history && found.length > 0) {
      this.#history.commit(discoverId, found.map(d => ({
        cellId:   d.cellId,
        key:      `discovered:${d.type}`,
        oldValue: null,
        newValue: `${d.capacity}`,
      })), `discover: ${cell.cellId} by ${discoverId}`)
    }

    return found
  }

  /**
   * Return known deposits in a cell (whether discovered or not for admin views).
   */
  depositsIn(cellId) {
    const out = []
    for (const [k, dep] of this.#deposits) {
      if (k.startsWith(cellId + ':')) out.push(dep)
    }
    return out
  }

  // ── Claim ──────────────────────────────────────────────────────────────────

  /**
   * Claim a resource deposit for exclusive mining rights.
   * Requires:
   *   1. Deposit is discovered
   *   2. Not already claimed
   *   3. Claimant is a verified member of the trust network (if provided)
   *
   * @param {string}        cellId
   * @param {string}        type        RESOURCE.*
   * @param {string}        nodeId      who is claiming
   * @param {TrustNetwork}  [trust]     optional trust check
   * @returns {{ success: boolean, reason?: string }}
   */
  claim(cellId, type, nodeId, trust = null) {
    const key = `${cellId}:${type}`
    const dep = this.#deposits.get(key)

    if (!dep)              return { success: false, reason: 'not-discovered' }
    if (!dep.discovered)   return { success: false, reason: 'not-discovered' }
    if (dep.isClaimed)     return { success: false, reason: 'already-claimed' }
    if (dep.depleted)      return { success: false, reason: 'depleted' }
    if (trust && !trust.isVerified(nodeId)) return { success: false, reason: 'not-verified' }

    dep.claimedBy = nodeId

    if (this.#history) {
      this.#history.commit(nodeId, [{
        cellId,
        key:      `claim:${type}`,
        oldValue: null,
        newValue: nodeId,
      }], `claim: ${type} at ${cellId} by ${nodeId}`)
    }

    return { success: true }
  }

  // ── Mine ───────────────────────────────────────────────────────────────────

  /**
   * Mine resources from a claimed deposit.
   * Only the claimant (or a verified peer if trust is provided) can mine.
   *
   * @param {string}        cellId
   * @param {string}        type
   * @param {string}        nodeId
   * @param {TrustNetwork}  [trust]
   * @returns {{ success: boolean, amount?: number, reason?: string }}
   */
  mine(cellId, type, nodeId, trust = null) {
    const key = `${cellId}:${type}`
    const dep = this.#deposits.get(key)

    if (!dep)            return { success: false, reason: 'not-found' }
    if (!dep.discovered) return { success: false, reason: 'not-discovered' }
    if (dep.depleted)    return { success: false, reason: 'depleted' }

    // Must be claimant or unclaimed (free mining on unclaimed deposits)
    if (dep.isClaimed && dep.claimedBy !== nodeId) {
      // Allow if they share a trust chain with the claimant
      if (!trust || !trust.isVerified(nodeId)) {
        return { success: false, reason: 'not-claimant' }
      }
    }

    const amount = Math.min(dep.ratePerTick, dep.remaining)
    dep.extracted += amount

    // Add to inventory
    this._addToInventory(nodeId, type, amount)

    if (this.#history) {
      this.#history.commit(nodeId, [{
        cellId,
        key:      `extracted:${type}`,
        oldValue: String(dep.extracted - amount),
        newValue: String(dep.extracted),
      }], `mine: ${amount} ${type} from ${cellId} by ${nodeId}`)
    }

    return { success: true, amount, remaining: dep.remaining }
  }

  // ── Trade ──────────────────────────────────────────────────────────────────

  /**
   * Trade resources between two nodes.
   * Both must have a trust relationship (or no trust required if trust=null).
   *
   * @param {string}       fromId
   * @param {string}       toId
   * @param {string}       type
   * @param {number}       amount
   * @param {number}       pricePerUnit   units of abstract currency per resource unit
   * @param {TrustNetwork} [trust]
   * @returns {{ success: boolean, trade?: TradeRecord, reason?: string }}
   */
  trade(fromId, toId, type, amount, pricePerUnit = 0, trust = null) {
    if (amount <= 0) return { success: false, reason: 'invalid-amount' }

    const fromInv = this.#inventory.get(fromId)
    const has     = fromInv?.get(type) ?? 0
    if (has < amount) return { success: false, reason: 'insufficient-resources' }

    if (trust) {
      if (!trust.isVerified(fromId)) return { success: false, reason: 'from-not-verified' }
      if (!trust.isVerified(toId))   return { success: false, reason: 'to-not-verified' }
    }

    // Execute transfer
    this._removeFromInventory(fromId, type, amount)
    this._addToInventory(toId, type, amount)

    const record = new TradeRecord(fromId, toId, type, amount, pricePerUnit)
    this.#trades.push(record)

    if (this.#history) {
      this.#history.commit(fromId, [
        { cellId: `inventory:${fromId}`, key: type, oldValue: String(has), newValue: String(has - amount) },
        { cellId: `inventory:${toId}`,   key: type, oldValue: String((this.#inventory.get(toId)?.get(type) ?? 0) - amount), newValue: String(this.#inventory.get(toId)?.get(type) ?? 0) },
      ], `trade: ${amount} ${type} from ${fromId} → ${toId} @ ${pricePerUnit}`)
    }

    return { success: true, trade: record }
  }

  // ── Inventory ─────────────────────────────────────────────────────────────

  getInventory(nodeId) {
    const inv = this.#inventory.get(nodeId)
    if (!inv) return {}
    return Object.fromEntries(inv)
  }

  totalExtracted(type) {
    let total = 0
    for (const dep of this.#deposits.values()) {
      if (dep.type === type) total += dep.extracted
    }
    return total
  }

  get tradeHistory() { return [...this.#trades] }

  // ── Private ───────────────────────────────────────────────────────────────

  _addToInventory(nodeId, type, amount) {
    if (!this.#inventory.has(nodeId)) this.#inventory.set(nodeId, new Map())
    const inv = this.#inventory.get(nodeId)
    inv.set(type, (inv.get(type) ?? 0) + amount)
  }

  _removeFromInventory(nodeId, type, amount) {
    const inv = this.#inventory.get(nodeId)
    if (!inv) return
    const cur = inv.get(type) ?? 0
    inv.set(type, Math.max(0, cur - amount))
  }

  // ── Stats ─────────────────────────────────────────────────────────────────

  stats() {
    let totalDeposits = 0, totalClaimed = 0, totalDepleted = 0
    for (const dep of this.#deposits.values()) {
      totalDeposits++
      if (dep.isClaimed) totalClaimed++
      if (dep.depleted)  totalDepleted++
    }
    return { totalDeposits, totalClaimed, totalDepleted, totalTrades: this.#trades.length }
  }
}
