/**
 * roomLink.js — gated room link encoding/decoding
 *
 * A room link encodes everything needed to find and join a room:
 *   - roomId     : human-readable name (shown in UI, never sent to node)
 *   - lockHash   : sha256(roomId + lockCode) — the actual topic on xpacenode
 *                  xpacenode only ever sees this hash, never the room name
 *   - node       : (optional) preferred xpacenode WSS URL
 *   - peers      : (optional) known peer IDs from previous sessions
 *
 * Link format:
 *   https://spacework.io/#xn_<base64url(JSON payload)>
 *
 * Open link → browser derives lockHash → connects to xpacenode using hash as
 * room topic → WebRTC takes over → fully P2P.
 *
 * Known peers are stored in localStorage after each session. On reconnect,
 * direct peer connections are attempted first. xpacenode is the fallback.
 */

const LINK_PREFIX  = 'xn_'
const PEERS_STORE  = 'xn_known_peers'   // localStorage key → { roomHash: [peerId, ...] }

// ── Crypto helpers ─────────────────────────────────────────────────────────────

/**
 * SHA-256 of a string, returned as lowercase hex.
 * Uses the native Web Crypto API — no dependencies.
 */
export async function sha256hex (str) {
  const buf    = new TextEncoder().encode(str)
  const digest = await crypto.subtle.digest('SHA-256', buf)
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Derive the room topic hash from roomId + lockCode.
 * This is what xpacenode sees — never the plain roomId.
 */
export async function deriveRoomHash (roomId, lockCode = '') {
  return sha256hex(roomId.toLowerCase().trim() + ':' + lockCode.trim())
}

// ── Base64url encode/decode (URL-safe, no padding) ────────────────────────────

function b64uEncode (str) {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

function b64uDecode (str) {
  // Restore padding
  const pad = str.length % 4
  const padded = pad ? str + '='.repeat(4 - pad) : str
  return atob(padded.replace(/-/g, '+').replace(/_/g, '/'))
}

// ── Link creation ──────────────────────────────────────────────────────────────

/**
 * Create a shareable room link.
 *
 * @param {object} opts
 * @param {string}   opts.roomId    - Human-readable room name
 * @param {string}   [opts.lockCode='']  - Optional password / lock code
 * @param {string}   [opts.node]    - xpacenode WSS URL (e.g. wss://node.xpacenet.io)
 * @returns {Promise<{ link: string, roomHash: string }>}
 */
export async function createRoomLink ({ roomId, lockCode = '', node } = {}) {
  if (!roomId?.trim()) throw new Error('roomId is required')

  const roomHash = await deriveRoomHash(roomId, lockCode)
  const knownPeers = getKnownPeers(roomHash)

  const payload = { r: roomId.trim(), h: roomHash }
  if (node)              payload.n = node
  if (knownPeers.length) payload.p = knownPeers.slice(0, 8)   // cap at 8 peers

  const encoded = b64uEncode(JSON.stringify(payload))
  const base    = window.location.origin + window.location.pathname

  return {
    link:     `${base}#${LINK_PREFIX}${encoded}`,
    roomHash,
  }
}

// ── Link parsing ───────────────────────────────────────────────────────────────

/**
 * Parse the current URL hash into room info.
 *
 * Returns one of:
 *   { type: 'link',   roomId, roomHash, node, peers }  — encoded xn_ link
 *   { type: 'plain',  roomId, roomHash, node, peers }  — plain #room-name hash
 *   { type: 'default' }                                — no hash → 'main' room
 */
export async function parseCurrentLink () {
  const raw = window.location.hash.slice(1)

  // ── Encoded xn_ link ──────────────────────────────────────────────────────
  if (raw.startsWith(LINK_PREFIX)) {
    try {
      const payload = JSON.parse(b64uDecode(raw.slice(LINK_PREFIX.length)))
      const roomId   = payload.r || 'main'
      const roomHash = payload.h || await deriveRoomHash(roomId)
      return {
        type:   'link',
        roomId,
        roomHash,
        node:   payload.n || null,
        peers:  payload.p || [],
      }
    } catch {
      console.warn('[roomLink] failed to decode link — falling back to main')
    }
  }

  // ── Plain #room-name ──────────────────────────────────────────────────────
  if (raw) {
    const roomId   = raw.trim().toLowerCase()
    const roomHash = await deriveRoomHash(roomId)
    return { type: 'plain', roomId, roomHash, node: null, peers: [] }
  }

  // ── No hash ───────────────────────────────────────────────────────────────
  const roomHash = await deriveRoomHash('main')
  return { type: 'default', roomId: 'main', roomHash, node: null, peers: [] }
}

// ── Known peers (localStorage cache) ─────────────────────────────────────────
//
// After each session, store the peer IDs we connected with.
// Next time we open the same link, we try them directly before using xpacenode.

function loadPeerStore () {
  try { return JSON.parse(localStorage.getItem(PEERS_STORE) || '{}') } catch { return {} }
}

function savePeerStore (store) {
  try { localStorage.setItem(PEERS_STORE, JSON.stringify(store)) } catch {}
}

/** Get known peers for a room hash. */
export function getKnownPeers (roomHash) {
  return loadPeerStore()[roomHash] || []
}

/**
 * Record a peer ID we successfully connected with.
 * Keeps max 20 peers per room (FIFO eviction).
 */
export function recordPeer (roomHash, peerId) {
  const store = loadPeerStore()
  const list  = store[roomHash] || []
  if (!list.includes(peerId)) {
    list.unshift(peerId)
    if (list.length > 20) list.length = 20
    store[roomHash] = list
    savePeerStore(store)
  }
}

/** Remove a peer from the known-peers list (called on clean disconnect). */
export function forgetPeer (roomHash, peerId) {
  const store = loadPeerStore()
  const list  = store[roomHash]
  if (!list) return
  const idx = list.indexOf(peerId)
  if (idx !== -1) { list.splice(idx, 1); store[roomHash] = list; savePeerStore(store) }
}

// ── URL helpers ───────────────────────────────────────────────────────────────

/**
 * Set the current URL hash to a plain room name (used in lobby text input flow).
 * Generates a plain hash — user can upgrade to a locked link from the HUD.
 */
export function setRoomNameInUrl (name) {
  const slug = name.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-{2,}/g, '-') || 'main'
  window.location.hash = slug
}
