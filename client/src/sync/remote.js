/**
 * RemoteSync — cross-machine P2P via Trystero (BitTorrent DHT signalling).
 *
 * Room ID is derived from the URL hash so every unique hash is an isolated
 * swarm.  No room ID is ever hardcoded.
 *
 *   ipns://yourapp/#main          → room "sw-1-main"    (default)
 *   ipns://yourapp/#team-alpha    → room "sw-1-team-alpha"
 *   ipns://yourapp/#acme-eng      → room "sw-1-acme-eng"
 *
 * Each peer announces itself with a HELLO that carries their stable
 * identityId (Ed25519 peerId) so peers recognise each other across
 * reconnects even if the ephemeral Trystero ID changes.
 *
 * Actions (DataChannel):
 *   intro  — sent on peer-join, contains identity + display name
 *   move   — position broadcast at 50 ms interval
 *   chat   — text chat message
 *   avatar — avatar preset change
 *   status — status change
 *   bye    — explicit disconnect signal
 */

import { joinRoom } from '@trystero-p2p/torrent'
import { getIdentity } from '../identity/index.js'

const APP_ID = 'spacework-v1'

/**
 * Derive a stable, sanitised room ID from the current URL hash.
 * Falls back to 'main' if the hash is absent or empty.
 * Exposed so the lobby can show the current room name.
 */
export function deriveRoomId () {
  const raw  = window.location.hash.slice(1).trim().toLowerCase()
  const slug = raw.replace(/[^a-z0-9-]/g, '-').replace(/-{2,}/g, '-').slice(0, 40) || 'main'
  return `sw-1-${slug}`
}

/** Human-readable room name (what the user sees / types). */
export function currentRoomName () {
  return window.location.hash.slice(1).trim() || 'main'
}

/** Navigate to a room by setting the URL hash (no page reload). */
export function setRoomName (name) {
  const slug = name.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-{2,}/g, '-') || 'main'
  window.location.hash = slug
}

export class RemoteSync {
  #room           = null
  #username       = ''
  #presetId       = 0
  #status         = 'available'
  #handlers       = {}
  #wireToIdentity = new Map()   // Trystero ephemeral ID → stable identityId

  // Trystero action senders / receivers
  #sendIntro  = null;  #onIntro  = null
  #sendMove   = null;  #onMove   = null
  #sendChat   = null;  #onChat   = null
  #sendBye    = null;  #onBye    = null
  #sendAvatar = null;  #onAvatar = null
  #sendStatus = null;  #onStatus = null

  constructor (username, presetId = 0, status = 'available') {
    this.#username = username
    this.#presetId = presetId
    this.#status   = status
  }

  async start () {
    const roomId = deriveRoomId()
    this.#room = joinRoom({ appId: APP_ID }, roomId)

    ;[this.#sendIntro,  this.#onIntro]  = this.#room.makeAction('intro')
    ;[this.#sendMove,   this.#onMove]   = this.#room.makeAction('move')
    ;[this.#sendChat,   this.#onChat]   = this.#room.makeAction('chat')
    ;[this.#sendBye,    this.#onBye]    = this.#room.makeAction('bye')
    ;[this.#sendAvatar, this.#onAvatar] = this.#room.makeAction('avatar')
    ;[this.#sendStatus, this.#onStatus] = this.#room.makeAction('status')

    // ── Peer arrives — exchange intros ──────────────────────────────────────
    this.#room.onPeerJoin(peerId => {
      this.#sendIntro(this.#makeIntro(), peerId)
    })

    // ── Peer departs ────────────────────────────────────────────────────────
    // Trystero fires onPeerLeave with the ephemeral wire ID; resolve it to
    // the stable identityId so all higher-level code uses a consistent key.
    this.#room.onPeerLeave(wirePeerId => {
      const identityId = this.#wireToIdentity.get(wirePeerId) ?? wirePeerId
      this.#wireToIdentity.delete(wirePeerId)
      this.#fire('PEER_LEAVE', { from: identityId })
    })

    // ── Receive intro — announce peer + reply with our own intro ────────────
    // _wirePeerId is Trystero's ephemeral ID; we store the wire→identity mapping
    // here so the voice layer can resolve it when WebRTC media tracks arrive.
    this.#onIntro(({ identityId, username, presetId = 0, status = 'available' }, _wirePeerId) => {
      const from = identityId   // stable key for the rest of the session
      this.#wireToIdentity.set(_wirePeerId, identityId)
      this.#fire('HELLO', { from, username, presetId, status })
      // Reply so they know us
      this.#sendIntro(this.#makeIntro(), _wirePeerId)
    })

    // ── Receive avatar change ────────────────────────────────────────────────
    this.#onAvatar(({ identityId, presetId }, _wirePeerId) => {
      this.#fire('AVATAR_CHANGE', { from: identityId, presetId })
    })

    // ── Receive status change ────────────────────────────────────────────────
    this.#onStatus(({ identityId, status }, _wirePeerId) => {
      this.#fire('STATUS_CHANGE', { from: identityId, status })
    })

    // ── Receive position ─────────────────────────────────────────────────────
    this.#onMove(({ identityId, pos }, _wirePeerId) => {
      this.#fire('MOVE', { from: identityId, pos })
    })

    // ── Receive chat ─────────────────────────────────────────────────────────
    this.#onChat(({ identityId, username, text, ts }, _wirePeerId) => {
      this.#fire('CHAT', { from: identityId, username, text, ts })
    })

    // ── Receive bye ──────────────────────────────────────────────────────────
    this.#onBye(({ identityId }, _wirePeerId) => {
      this.#fire('PEER_LEAVE', { from: identityId })
    })
  }

  stop () {
    if (this.#sendBye) {
      this.#sendBye({ identityId: this.#selfId() })
    }
    this.#room?.leave()
    this.#room = null
  }

  // ── Proximity voice (WebRTC media tracks) ──────────────────────────────────
  addVoiceTrack (track, stream) { this.#room?.addTrack(track, stream) }
  onVoiceTrack  (cb)            {
    this.#room?.onTrack((t, s, wirePeerId) => {
      // Resolve Trystero ephemeral ID → stable identityId before handing up.
      // Falls back to wirePeerId if intro hasn't arrived yet (race condition);
      // ProximityVoice re-keys pending entries in its update() loop.
      const identityId = this.#wireToIdentity.get(wirePeerId) ?? wirePeerId
      cb(t, s, identityId, wirePeerId)
    })
  }

  /** Resolve a Trystero ephemeral wire ID to a stable identityId. */
  wireToIdentityId (wirePeerId) { return this.#wireToIdentity.get(wirePeerId) }

  // ── Outbound messages ─────────────────────────────────────────────────────

  move (x, y, z, ry = 0) {
    this.#sendMove?.({ identityId: this.#selfId(), pos: { x, y, z, ry } })
  }

  chat (text) {
    this.#sendChat?.({
      identityId: this.#selfId(),
      username:   this.#username,
      text,
      ts: Date.now(),
    })
  }

  setAvatar (presetId) {
    this.#presetId = presetId
    this.#sendAvatar?.({ identityId: this.#selfId(), presetId })
  }

  setStatus (status) {
    this.#status = status
    this.#sendStatus?.({ identityId: this.#selfId(), status })
  }

  // ── Event subscription ────────────────────────────────────────────────────
  on (type, cb) {
    if (!this.#handlers[type]) this.#handlers[type] = []
    this.#handlers[type].push(cb)
    return () => { this.#handlers[type] = this.#handlers[type].filter(h => h !== cb) }
  }

  // ── Internal ──────────────────────────────────────────────────────────────
  #selfId   () { return getIdentity()?.peerId ?? 'unknown' }
  #fire (type, payload) { this.#handlers[type]?.forEach(cb => cb(payload)) }

  #makeIntro () {
    return {
      identityId: this.#selfId(),
      username:   this.#username,
      presetId:   this.#presetId,
      status:     this.#status,
    }
  }
}
