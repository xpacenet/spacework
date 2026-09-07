/**
 * TrysteroSync — zero-config DHT fallback transport
 *
 * Uses BitTorrent DHT (via Trystero) for peer discovery and signaling.
 * No server required. Automatically used when no xpacenode URL is configured.
 *
 * Exposes the exact same interface as RemoteSync so SpaceSync needs no changes.
 *
 * DHT discovery takes ~1-3s (vs ~10-30ms for xpacenode).
 * Everything after discovery is identical — direct WebRTC P2P.
 */

import { joinRoom }       from '@trystero-p2p/torrent'
import { getIdentity }    from '../identity/index.js'
import { connLog }        from './connectionLog.js'
import { recordPeer }     from './roomLink.js'
import { presenceStore }  from './presenceStore.js'
import { idleScheduler }  from './idleScheduler.js'

// STUN only, no TURN — this path runs precisely when there's no xpacenode
// configured at all (the zero-config DHT fallback), so there's no self-hosted
// coturn to source a relay credential from either. openrelay.metered.ca (the
// same dead free relay removed from remote.js's xpacenode path) was still
// hardcoded here — a genuinely separate file `git grep` on the whole repo
// found, missed by the original fix because that fix only touched the
// xpacenode-configured path. It matters more here, not less: this is
// exactly the fallback that activates when xpacenode is unreachable, the
// same failure shape this whole redesign exists to fix. Google's public
// STUN stays as the last-resort default — same reasoning as PeerMesh's own
// DEFAULT_ICE_SERVERS: STUN carries no media and needs no credential, a
// fundamentally different, much lower-risk class of dependency than a TURN
// relay.
const ICE_SERVERS = [
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun1.l.google.com:19302' },
]

export class TrysteroSync {
  #room          = null
  #handlers      = {}
  #username      = ''
  #presetId      = 0
  #status        = 'available'
  #roomId        = ''       // room hash
  #roomName      = 'main'
  #nodeUrl       = null     // always null for DHT path
  #peers         = new Map()   // peerId → { username, presetId, status }
  #localTracks   = []
  #voiceCb       = null
  #pendingTracks = []

  // Trystero actions — set during start(), used by outbound methods
  #sendMove     = null
  #sendChat     = null
  #sendAvatar   = null
  #sendStatus   = null
  #sendTalking  = null
  #sendBye      = null
  #sendIntro    = null
  #sendHb       = null    // peer heartbeat (resets TTL in remote presenceStore)
  #sendStateReq = null    // request peer's HOT snapshot
  #sendState    = null    // respond with our HOT snapshot
  #sendDelta    = null    // version-gated state update

  #knownPeers   = []

  /**
   * Own monotonic version counter — incremented on avatar/status changes.
   * Sent with every `delta` so recipients can apply version-diff logic.
   */
  #myVersion    = 0

  /** Timer ID for the peer heartbeat interval (every 30 s). */
  #hbTimer      = null

  constructor (username, presetId = 0, status = 'available') {
    this.#username = username
    this.#presetId = presetId
    this.#status   = status
  }

  async start (roomHash, roomName, linkType = 'default', knownPeers = []) {
    this.#roomId    = roomHash
    this.#roomName  = roomName
    this.#knownPeers = knownPeers

    if (linkType === 'link') {
      connLog.info('Invite link decoded — using hashed room address')
    }

    if (knownPeers.length) {
      connLog.info(
        `${knownPeers.length} known peer${knownPeers.length > 1 ? 's' : ''} cached`,
        'Will recognise them when they appear on DHT'
      )
    }

    const dhtId = connLog.push('Trying public DHT route (BitTorrent)…')

    this.#room = joinRoom(
      { appId: 'xpacenet-v3', rtcConfig: { iceServers: ICE_SERVERS } },
      roomHash,
    )

    // ── Actions (typed data channel messages) ─────────────────────────────────
    // Each makeAction returns [send, onReceive] for a named typed channel.
    // Legacy actions (identical interface to the old DHT/Nostr transport):
    const [sendIntro,    onIntro]    = this.#room.makeAction('intro')
    const [sendMove,     onMove]     = this.#room.makeAction('move')
    const [sendChat,     onChat]     = this.#room.makeAction('chat')
    const [sendAvatar,   onAvatar]   = this.#room.makeAction('avatar')
    const [sendStatus,   onStatus]   = this.#room.makeAction('status')
    const [sendTalking,  onTalking]  = this.#room.makeAction('talking')
    const [sendBye,      onBye]      = this.#room.makeAction('bye')

    // Presence-sync actions (new in v3):
    const [sendHb,       onHb]       = this.#room.makeAction('hb')       // peer heartbeat
    const [sendStateReq, onStateReq] = this.#room.makeAction('stateReq') // request snapshot
    const [sendState,    onState]    = this.#room.makeAction('state')    // snapshot response
    const [sendDelta,    onDelta]    = this.#room.makeAction('delta')    // version-gated update

    this.#sendMove     = sendMove
    this.#sendChat     = sendChat
    this.#sendAvatar   = sendAvatar
    this.#sendStatus   = sendStatus
    this.#sendTalking  = sendTalking
    this.#sendBye      = sendBye
    this.#sendIntro    = sendIntro
    this.#sendHb       = sendHb
    this.#sendStateReq = sendStateReq
    this.#sendState    = sendState
    this.#sendDelta    = sendDelta

    // ── Peer join ──────────────────────────────────────────────────────────────
    this.#room.onPeerJoin(peerId => {
      if (peerId === this.#selfId()) return

      const isKnown = this.#knownPeers.includes(peerId)
      connLog.peerJoined(peerId.slice(0, 10))
      if (isKnown) connLog.info(`✓ Known peer reconnected via DHT`)

      // Send our intro immediately (identity + display state)
      sendIntro({
        identityId: this.#selfId(),
        username:   this.#username,
        presetId:   this.#presetId,
        status:     this.#status,
      }, [peerId])

      // Request their full HOT snapshot so we can populate the room
      // immediately, even before direct connections to all other peers
      sendStateReq({ identityId: this.#selfId() }, [peerId])

      if (!this.#peers.has(peerId)) {
        this.#peers.set(peerId, { peerId, username: '', presetId: 0, status: 'available' })
        recordPeer(this.#roomId, peerId)
      }
    })

    // ── Peer leave ─────────────────────────────────────────────────────────────
    this.#room.onPeerLeave(peerId => {
      this.#peers.delete(peerId)
      this.#fire('PEER_LEAVE', { from: peerId })
    })

    // ── Intro received ─────────────────────────────────────────────────────────
    onIntro(({ identityId, username, presetId = 0, status = 'available' }, from) => {
      const id = identityId ?? from
      this.#peers.set(id, { peerId: id, username, presetId, status })
      connLog.info(`Connected to ${username || id.slice(0, 10)}`)
      this.#fire('HELLO', { from: id, username, presetId, status })
    })

    // ── Legacy data channel messages ──────────────────────────────────────────
    onMove(    ({ pos },      from) => this.#fire('MOVE',          { from, pos }))
    onChat(    (msg,          from) => this.#fire('CHAT',          { from, username: msg.username, text: msg.text, ts: msg.ts }))
    onTalking( ({ talking },  from) => this.#fire('PEER_TALKING',  { from, talking: !!talking }))
    onBye(     (_,            from) => this.#fire('PEER_LEAVE',    { from }))

    onAvatar(({ presetId }, from) => {
      this.#fire('AVATAR_CHANGE', { from, presetId })
      // Keep presenceStore in sync (direct patch — point-to-point, authoritative)
      presenceStore.patchPeer(from, { presetId })
    })

    onStatus(({ status }, from) => {
      this.#fire('STATUS_CHANGE', { from, status })
      presenceStore.patchPeer(from, { status })
    })

    // ── Presence-sync messages ─────────────────────────────────────────────────

    // Heartbeat: reset the sender's TTL so they're not evicted as crashed
    onHb((_msg, from) => {
      presenceStore.heartbeat(from)
    })

    // State request: a peer just joined and wants our full room snapshot
    onStateReq((_msg, from) => {
      const snapshot = presenceStore.getSnapshot()
      sendState({ identityId: this.#selfId(), peers: snapshot }, [from])
    })

    // State snapshot: bulk-populate presenceStore and fire HELLO for new peers
    onState(({ peers = {} }, _from) => {
      const myId = this.#selfId()
      for (const [peerId, data] of Object.entries(peers)) {
        if (peerId === myId) continue

        const applied = presenceStore.upsertPeer(peerId, data)
        if (applied && !this.#peers.has(peerId)) {
          this.#fire('HELLO', {
            from:     peerId,
            username: data.username ?? '',
            presetId: data.presetId ?? 0,
            status:   data.status   ?? 'available',
          })
        }
      }
    })

    // Delta: version-gated state update from a peer
    onDelta((msg, from) => {
      const applied = presenceStore.upsertPeer(from, msg)
      if (applied && !this.#peers.has(from)) {
        this.#fire('HELLO', {
          from,
          username: msg.username ?? '',
          presetId: msg.presetId ?? 0,
          status:   msg.status   ?? 'available',
        })
      }
    })

    // ── Audio tracks ───────────────────────────────────────────────────────────
    this.#room.onPeerStream((stream, peerId) => {
      const track = stream.getAudioTracks()[0]
      if (!track) return
      if (this.#voiceCb) {
        this.#voiceCb(track, stream, peerId, peerId)
      } else {
        this.#pendingTracks.push({ track, stream, identityId: peerId, nostrPubkey: peerId })
      }
    })

    // Peer heartbeat — every 30 s, broadcast our identity so all connected
    // peers reset our TTL in their presenceStore (prevents false "crash" eviction)
    this.#hbTimer = setInterval(() => {
      this.#sendHb?.({ identityId: this.#selfId() })
    }, 30_000)

    // Schedule idle housekeeping for background room cleanup
    idleScheduler.schedule(
      () => presenceStore.pruneCold(),
      'prune-cold-rooms',
    )

    connLog.ok(dhtId, 'DHT ready — searching for peers')
    connLog.info('Searching for peers in room…')
    connLog.startFirstTimer(15_000)   // longer timeout for DHT (slower than xpacenode)
  }

  stop () {
    clearInterval(this.#hbTimer)
    this.#hbTimer = null
    this.#sendBye?.()
    this.#room?.leave()
    this.#room  = null
    this.#peers.clear()
    idleScheduler.clear()
  }

  // ── Outbound ──────────────────────────────────────────────────────────────────

  move (x, y, z, ry = 0) {
    this.#sendMove?.({ pos: { x, y, z, ry } })
  }

  chat (text) {
    this.#sendChat?.({ username: this.#username, text, ts: Date.now() })
  }

  setAvatar (presetId) {
    this.#presetId = presetId
    // Legacy avatar message — real-time UI update for all current peers
    this.#sendAvatar?.({ presetId })
    // Versioned delta — ensures late-joining peers receive our latest avatar
    // even when they join after this change happened
    this.#sendDelta?.({ identityId: this.#selfId(), presetId, v: ++this.#myVersion })
  }

  setStatus (status) {
    this.#status = status
    this.#sendStatus?.({ status })
    this.#sendDelta?.({ identityId: this.#selfId(), status, v: ++this.#myVersion })
  }

  broadcastTalking (talking) {
    this.#sendTalking?.({ talking: !!talking })
  }

  addVoiceTrack (track, stream) {
    this.#localTracks.push({ track, stream })
    this.#room?.addStream(stream)
  }

  onVoiceTrack (cb) {
    this.#voiceCb = cb
    const pending = this.#pendingTracks.splice(0)
    for (const { track, stream, identityId, nostrPubkey } of pending) {
      if (track.readyState !== 'ended') cb(track, stream, identityId, nostrPubkey)
    }
  }

  wireToIdentityId (peerId) { return peerId }

  getPeers () { return {} }   // not needed for Trystero path

  on (type, cb) {
    if (!this.#handlers[type]) this.#handlers[type] = []
    this.#handlers[type].push(cb)
    return () => { this.#handlers[type] = this.#handlers[type].filter(h => h !== cb) }
  }

  get roomName ()  { return this.#roomName }
  get roomHash ()  { return this.#roomId }
  get nodeUrl ()   { return null }

  #selfId ()           { return getIdentity()?.peerId ?? 'unknown' }
  #fire   (type, data) { this.#handlers[type]?.forEach(cb => cb(data)) }
}
