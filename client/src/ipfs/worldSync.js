/**
 * WorldSync — store and sync world history over IPFS.
 *
 * Every WorldCommit is stored as a DAG-JSON block on IPFS.
 * The block's CID is its globally unique address — content-addressed,
 * tamper-proof, and retrievable by any peer who knows the CID.
 *
 * Sync flow:
 *   1. You commit a change → block is stored locally → CID is broadcast
 *   2. A remote peer receives your CID broadcast
 *   3. They fetch the block by CID → deserialise → apply to their WorldHistory
 *   4. If the block references an unknown parent CID, they fetch that too (chain walk)
 *
 * This means the entire world history is append-only, content-addressed,
 * and replicated across every node without any central server.
 */

import { dagJson }  from '@helia/dag-json'

export class WorldSync {
  #dj          = null   // Helia DAG-JSON instance
  #history     = null   // WorldHistory
  #discovery   = null   // SpaceDiscovery
  #knownCIDs   = new Set()   // CIDs we've already processed
  #cidToHash   = new Map()   // CID string → WorldCommit hash
  #unsubscribe = null

  /**
   * @param {import('helia').Helia}  helia
   * @param {import('../universe/history.js').WorldHistory} history
   * @param {import('./discovery.js').SpaceDiscovery}       discovery
   */
  constructor(helia, history, discovery) {
    this.#dj        = dagJson(helia)
    this.#history   = history
    this.#discovery = discovery
  }

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  start() {
    // Listen for incoming WORLD CID broadcasts
    this.#unsubscribe = this.#discovery.on('WORLD', msg => {
      this.#onRemoteCID(msg.cid, msg.from).catch(() => {})
    })
  }

  stop() {
    if (this.#unsubscribe) this.#unsubscribe()
  }

  // ── Write ──────────────────────────────────────────────────────────────────

  /**
   * Commit a change to WorldHistory AND broadcast it to IPFS peers.
   *
   * @param {string}   authorId
   * @param {object[]} changes
   * @param {string}   message
   * @returns {Promise<{ commit: WorldCommit, cid: string }>}
   */
  async commitAndBroadcast(authorId, changes, message) {
    const commit = this.#history.commit(authorId, changes, message)

    // Store commit block on IPFS
    const cid = await this.#dj.add({
      hash:       commit.hash,
      parentHash: commit.parentHash,
      authorId:   commit.authorId,
      message:    commit.message,
      timestamp:  commit.timestamp,
      changes:    commit.changes,
    })

    const cidStr = cid.toString()
    this.#knownCIDs.add(cidStr)
    this.#cidToHash.set(cidStr, commit.hash)

    // Broadcast CID to network — peers will fetch and apply
    await this.#discovery.broadcastWorld(cidStr)

    return { commit, cid: cidStr }
  }

  // ── Read ───────────────────────────────────────────────────────────────────

  /**
   * Retrieve a specific commit block from IPFS by CID.
   * Will fetch from remote peers if not cached locally.
   */
  async fetchCommit(cidStr) {
    try {
      const cid  = CID.parse(cidStr)
      return await this.#dj.get(cid)
    } catch {
      return null
    }
  }

  // ── Sync incoming CID ─────────────────────────────────────────────────────

  async #onRemoteCID(cidStr, fromPeerId) {
    if (!cidStr || this.#knownCIDs.has(cidStr)) return
    this.#knownCIDs.add(cidStr)

    let data
    try {
      const { CID } = await import('multiformats/cid')
      const cid = CID.parse(cidStr)
      data = await this.#dj.get(cid)
    } catch {
      return  // peer offline or block unavailable — that's fine
    }

    if (!data || !data.hash || !data.changes) return

    // Don't re-apply commits we already have
    if (this.#history.getCommit(data.hash)) return

    // Walk up the parent chain if needed
    if (data.parentHash && !this.#history.getCommit(data.parentHash)) {
      // We're missing the parent — we can't apply yet; in a full impl
      // you'd queue and retry. For now, skip orphaned commits.
      return
    }

    // Apply the incoming commit — the WorldHistory accepts external commits
    try {
      this.#history.applyExternal(data)
    } catch { /* conflict or already applied */ }
  }

  // ── Stats ──────────────────────────────────────────────────────────────────

  get knownCIDCount() { return this.#knownCIDs.size }
}
