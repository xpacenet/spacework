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

import { joinRoom } from '@trystero-p2p/torrent'
import { getIdentity } from '../identity/index.js'
import { connLog } from './connectionLog.js'
import { recordPeer } from './roomLink.js'

const ICE_SERVERS = [
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun1.l.google.com:19302' },
  { urls: 'turn:openrelay.metered.ca:80',               username: 'openrelayproject', credential: 'openrelayproject' },
  { urls: 'turn:openrelay.metered.ca:80?transport=tcp',  username: 'openrelayproject', credential: 'openrelayproject' },
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

  // Trystero actions
  #sendMove    = null
  #sendChat    = null
  #sendAvatar  = null
  #sendStatus  = null
  #sendTalking = null
  #sendBye     = null
  #sendIntro   = null

  constructor (username, presetId = 0, status = 'available') {
    this.#username = username
    this.#presetId = presetId
    this.#status   = status
  }

  async start (roomHash, roomName, linkType = 'default') {
    this.#roomId   = roomHash
    this.#roomName = roomName

    if (linkType === 'link') {
      connLog.info('Invite link decoded — using hashed room address')
    }

    const dhtId = connLog.push('Starting BitTorrent DHT discovery…')

    this.#room = joinRoom(
      { appId: 'xpacenet-v3', rtcConfig: { iceServers: ICE_SERVERS } },
      roomHash,
    )

    // ── Actions (typed data channel messages) ─────────────────────────────────
    const [sendIntro,   onIntro]   = this.#room.makeAction('intro')
    const [sendMove,    onMove]    = this.#room.makeAction('move')
    const [sendChat,    onChat]    = this.#room.makeAction('chat')
    const [sendAvatar,  onAvatar]  = this.#room.makeAction('avatar')
    const [sendStatus,  onStatus]  = this.#room.makeAction('status')
    const [sendTalking, onTalking] = this.#room.makeAction('talking')
    const [sendBye,     onBye]     = this.#room.makeAction('bye')

    this.#sendMove    = sendMove
    this.#sendChat    = sendChat
    this.#sendAvatar  = sendAvatar
    this.#sendStatus  = sendStatus
    this.#sendTalking = sendTalking
    this.#sendBye     = sendBye
    this.#sendIntro   = sendIntro

    // ── Peer join ──────────────────────────────────────────────────────────────
    this.#room.onPeerJoin(peerId => {
      if (peerId === this.#selfId()) return
      connLog.info(`Peer found via DHT: ${peerId.slice(0, 10)}…`)

      // Send our intro immediately
      sendIntro({
        identityId: this.#selfId(),
        username:   this.#username,
        presetId:   this.#presetId,
        status:     this.#status,
      }, [peerId])

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

    // ── Data channel messages ──────────────────────────────────────────────────
    onMove(    ({ pos }, from) => this.#fire('MOVE',         { from, pos }))
    onChat(    (msg,    from) => this.#fire('CHAT',         { from, username: msg.username, text: msg.text, ts: msg.ts }))
    onAvatar(  ({ presetId }, from) => this.#fire('AVATAR_CHANGE',  { from, presetId }))
    onStatus(  ({ status },   from) => this.#fire('STATUS_CHANGE',  { from, status }))
    onTalking( ({ talking },  from) => this.#fire('PEER_TALKING',   { from, talking: !!talking }))
    onBye(     (_,            from) => this.#fire('PEER_LEAVE',     { from }))

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

    connLog.ok(dhtId, 'DHT ready — searching for peers')
  }

  stop () {
    this.#sendBye?.()
    this.#room?.leave()
    this.#room  = null
    this.#peers.clear()
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
    this.#sendAvatar?.({ presetId })
  }

  setStatus (status) {
    this.#status = status
    this.#sendStatus?.({ status })
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
