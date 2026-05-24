/**
 * rooms.js — ephemeral room registry
 *
 * Rooms exist only as long as peers are active.
 * Each peer must heartbeat within PEER_TTL_MS or they are pruned.
 *
 * This is purely a discovery index — the xpacenode never stores
 * message content, only "who is in which room right now."
 *
 * Data model:
 *   rooms: Map<roomId, Map<peerId, PeerMeta>>
 *
 * PeerMeta: { username, presetId, status, nodeId, expiresAt }
 */

const PEER_TTL = parseInt(process.env.PEER_TTL_MS || '90000', 10)

export class Rooms {
  /** @type {Map<string, Map<string, object>>} */
  #rooms = new Map()

  // ── Mutations ────────────────────────────────────────────────────────────────

  join (roomId, peerId, meta, nodeId) {
    if (!this.#rooms.has(roomId)) this.#rooms.set(roomId, new Map())
    this.#rooms.get(roomId).set(peerId, {
      username:  meta.username  ?? 'anon',
      presetId:  meta.presetId  ?? 0,
      status:    meta.status    ?? 'available',
      nodeId,
      expiresAt: Date.now() + PEER_TTL,
    })
  }

  leave (roomId, peerId) {
    this.#rooms.get(roomId)?.delete(peerId)
    if (this.#rooms.get(roomId)?.size === 0) this.#rooms.delete(roomId)
  }

  heartbeat (roomId, peerId) {
    const p = this.#rooms.get(roomId)?.get(peerId)
    if (p) p.expiresAt = Date.now() + PEER_TTL
  }

  // ── Queries ──────────────────────────────────────────────────────────────────

  /** Returns all live peers in a room (prunes stale first). */
  getPeers (roomId) {
    this.#prune()
    const room = this.#rooms.get(roomId)
    if (!room) return []
    return [...room.entries()].map(([peerId, m]) => ({ peerId, ...m }))
  }

  /** Returns summary list of all active rooms — used by /rooms API + discovery. */
  list () {
    this.#prune()
    const out = []
    for (const [roomId, peers] of this.#rooms) {
      if (peers.size === 0) continue
      out.push({
        roomId,
        count:     peers.size,
        usernames: [...new Set([...peers.values()].map(p => p.username))],
      })
    }
    return out.sort((a, b) => b.count - a.count)
  }

  has (roomId, peerId) {
    return this.#rooms.get(roomId)?.has(peerId) ?? false
  }

  // ── TTL pruning ──────────────────────────────────────────────────────────────

  #prune () {
    const now = Date.now()
    for (const [roomId, peers] of this.#rooms) {
      for (const [peerId, meta] of peers) {
        if (meta.expiresAt < now) peers.delete(peerId)
      }
      if (peers.size === 0) this.#rooms.delete(roomId)
    }
  }
}
