/**
 * LocalSync — localStorage presence + BroadcastChannel for moves.
 *
 * Presence (discovery):
 *   Every tab writes its own entry to localStorage every 500ms.
 *   Every tab scans all entries every 150ms.
 *   New entry  → peer:join.   Stale entry (>3s) → peer:leave.
 *   No handshake. No ordering. Works regardless of which tab joined first.
 *
 * Movement (fast path):
 *   BroadcastChannel carries MOVE-only messages at 50ms.
 *   No acknowledgement needed — if a frame is lost, the next one corrects it.
 */

const PREFIX  = 'sw_peer_'
const TTL_MS  = 3000    // entry older than 3s = that tab is gone
const HB_MS   = 500     // how often we refresh our own entry
const SCAN_MS = 150     // how often we scan for new/gone peers

export class LocalSync {
  #id       = Math.random().toString(36).slice(2, 9)
  #username = ''
  #presetId = 0
  #status   = 'available'
  #pos      = { x: 0, y: 0, z: 0, ry: 0 }
  #ch       = null    // BroadcastChannel — MOVE + AVATAR
  #known    = new Map()  // peerId → { username, presetId }
  #handlers = {}
  #hb       = null
  #scan     = null

  constructor(username, presetId = 0, status = 'available') {
    this.#username = username || ''
    this.#presetId = presetId
    this.#status   = status
  }

  get id() { return this.#id }

  start() {
    this.#write()                                   // register immediately
    this.#hb   = setInterval(() => this.#write(),  HB_MS)
    this.#scan = setInterval(() => this.#poll(),   SCAN_MS)

    this.#ch = new BroadcastChannel('sw_move_v1')
    this.#ch.onmessage = ({ data }) => {
      if (!data || data.from === this.#id) return
      if (data.type === 'MOVE')   this.#fire('MOVE',   data)
      if (data.type === 'COMMIT') this.#fire('COMMIT', data)
      if (data.type === 'CHAT')   this.#fire('CHAT',   data)
      if (data.type === 'AVATAR') this.#fire('AVATAR', data)
      if (data.type === 'STATUS') this.#fire('STATUS', data)
    }
  }

  stop() {
    clearInterval(this.#hb)
    clearInterval(this.#scan)
    try { localStorage.removeItem(PREFIX + this.#id) } catch {}
    this.#ch?.close()
    this.#ch = null
  }

  move(x, y, z, ry = 0) {
    this.#pos = { x, y, z, ry }
    this.#ch?.postMessage({ type: 'MOVE', from: this.#id, pos: { x, y, z, ry } })
  }

  commit(data) {
    this.#ch?.postMessage({ type: 'COMMIT', from: this.#id, commit: data })
  }

  chat(username, text) {
    this.#ch?.postMessage({ type: 'CHAT', from: this.#id, username, text, ts: Date.now() })
  }

  avatar(presetId) {
    this.#presetId = presetId
    this.#write()
    this.#ch?.postMessage({ type: 'AVATAR', from: this.#id, presetId })
  }

  status(status) {
    this.#status = status
    this.#write()   // update localStorage so joining tabs see current status
    this.#ch?.postMessage({ type: 'STATUS', from: this.#id, status })
  }

  on(type, cb) {
    if (!this.#handlers[type]) this.#handlers[type] = []
    this.#handlers[type].push(cb)
    return () => { this.#handlers[type] = this.#handlers[type].filter(h => h !== cb) }
  }

  // ── internal ───────────────────────────────────────────────────────────────

  #write() {
    try {
      localStorage.setItem(PREFIX + this.#id, JSON.stringify({
        id: this.#id, username: this.#username, presetId: this.#presetId,
        status: this.#status, ...this.#pos, ts: Date.now(),
      }))
    } catch {}
  }

  #poll() {
    const now   = Date.now()
    const alive = new Set()

    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i)
      if (!key?.startsWith(PREFIX)) continue
      const peerId = key.slice(PREFIX.length)
      if (peerId === this.#id) continue

      let data
      try { data = JSON.parse(localStorage.getItem(key)) } catch {
        try { localStorage.removeItem(key) } catch {}
        continue
      }

      if (now - data.ts > TTL_MS) {
        try { localStorage.removeItem(key) } catch {}
        continue
      }

      alive.add(peerId)

      if (!this.#known.has(peerId)) {
        this.#known.set(peerId, { username: data.username, presetId: data.presetId ?? 0, status: data.status ?? 'available' })
        this.#fire('PEER', { from: peerId, username: data.username, presetId: data.presetId ?? 0, status: data.status ?? 'available' })
      }
    }

    // Peers whose entries disappeared
    for (const [id] of this.#known) {
      if (!alive.has(id)) {
        this.#known.delete(id)
        this.#fire('BYE', { from: id })
      }
    }
  }

  #fire(type, payload) {
    this.#handlers[type]?.forEach(cb => cb(payload))
  }
}
