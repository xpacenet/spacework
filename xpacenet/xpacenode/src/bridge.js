/**
 * bridge.js — WebSocket bridge between browser clients and xpacenet
 *
 * Browser clients (SpaceWork and future apps) connect here via WebSocket.
 * The bridge speaks a simple JSON protocol and translates to/from
 * the libp2p GossipSub routing layer.
 *
 * ── Client → Node messages ────────────────────────────────────────────────────
 *   { t:'hello',  roomId, peerId, username, presetId, status }
 *   { t:'signal', roomId, to, payload }        WebRTC offer/answer/ICE
 *   { t:'leave',  roomId }
 *   { t:'hb' }                                 heartbeat (every 30s)
 *   { t:'rooms' }                              request room list
 *   { t:'ping' }
 *
 * ── Node → Client messages ────────────────────────────────────────────────────
 *   { t:'welcome',    nodeId, multiaddrs }
 *   { t:'peer_join',  roomId, peerId, username, presetId, status }
 *   { t:'peer_leave', roomId, peerId }
 *   { t:'signal',     roomId, from, payload }
 *   { t:'rooms',      list }
 *   { t:'pong' }
 */

import { WebSocketServer } from 'ws'
import { TOPICS }          from './router.js'
import { buildReceipt, msgIdOf } from './receipt.js'

const MAX_CLIENTS = parseInt(process.env.MAX_WS_CLIENTS || '500', 10)
const MAX_PAYLOAD = 64 * 1024   // 64 KB per message

export class Bridge {
  #wss      = null
  #router   = null
  #rooms    = null
  #nodeId   = ''
  #nodeKey  = null   // raw Ed25519 key bytes (for receipt signing)

  // wsId → { ws, roomId, peerId, username, presetId, status }
  #clients  = new Map()
  // peerId → wsId  (fast lookup for signal routing)
  #peerMap  = new Map()

  constructor (router, rooms, nodeId, nodeKey) {
    this.#router  = router
    this.#rooms   = rooms
    this.#nodeId  = nodeId
    this.#nodeKey = nodeKey
  }

  // ── Startup ──────────────────────────────────────────────────────────────────

  start (port) {
    this.#wss = new WebSocketServer({ port, maxPayload: MAX_PAYLOAD })

    this.#wss.on('connection', (ws, req) => {
      if (this.#clients.size >= MAX_CLIENTS) {
        ws.close(1013, 'node full')
        return
      }
      const wsId = uid()
      this.#clients.set(wsId, { ws, roomId: null, peerId: null })

      this.#tx(ws, {
        t:          'welcome',
        nodeId:     this.#nodeId,
      })

      ws.on('message', data => {
        try { this.#dispatch(wsId, JSON.parse(data.toString())) } catch { /* drop */ }
      })
      ws.on('close',   () => this.#onDisconnect(wsId))
      ws.on('error',   () => this.#onDisconnect(wsId))

      // Ping/pong — kill dead connections after 2 missed pings (60 s)
      ws.isAlive = true
      ws.on('pong', () => { ws.isAlive = true })
    })

    // Terminate dead clients every 30 s
    setInterval(() => {
      for (const { ws } of this.#clients.values()) {
        if (!ws.isAlive) { ws.terminate(); continue }
        ws.isAlive = false
        ws.ping()
      }
    }, 30_000)

    // ── Cross-node event handlers (from GossipSub) ───────────────────────
    // Deliver join/leave/signal from other xpacenodes to local browser clients

    this.#router.on(TOPICS.JOINS, msg => {
      // A peer on another node joined a room — notify our local clients in that room
      for (const [, c] of this.#clients) {
        if (c.roomId === msg.roomId && c.peerId !== msg.peerId) {
          this.#tx(c.ws, {
            t: 'peer_join', roomId: msg.roomId,
            peerId: msg.peerId, username: msg.username,
            presetId: msg.presetId, status: msg.status,
          })
        }
      }
      // Register remote peer in local rooms index
      this.#rooms.join(msg.roomId, msg.peerId,
        { username: msg.username, presetId: msg.presetId, status: msg.status },
        msg._from
      )
    })

    this.#router.on(TOPICS.LEAVES, msg => {
      this.#rooms.leave(msg.roomId, msg.peerId)
      for (const [, c] of this.#clients) {
        if (c.roomId === msg.roomId) {
          this.#tx(c.ws, { t: 'peer_leave', roomId: msg.roomId, peerId: msg.peerId })
        }
      }
    })

    this.#router.on(TOPICS.SIGNALS, msg => {
      // Route to local client if the target is connected here
      const wsId  = this.#peerMap.get(msg.to)
      const client = this.#clients.get(wsId)
      if (!client) return   // target is not on this node — drop

      this.#tx(client.ws, {
        t: 'signal', roomId: msg.roomId, from: msg.from, payload: msg.payload,
      })

      // Sign a receipt — proof this node delivered the message
      const receipt = buildReceipt(msgIdOf(msg), this.#nodeId, this.#nodeKey)
      this.#router.publish(TOPICS.RECEIPTS, receipt)
    })

    console.log(`[bridge] WebSocket bridge on :${port} (max ${MAX_CLIENTS} clients)`)
  }

  // ── Incoming message dispatch ────────────────────────────────────────────────

  #dispatch (wsId, msg) {
    const client = this.#clients.get(wsId)
    if (!client) return

    switch (msg.t) {
      case 'hello':  return this.#onHello(wsId, client, msg)
      case 'signal': return this.#onSignal(client, msg)
      case 'leave':  return this.#onLeave(wsId, client)
      case 'hb':     return this.#onHeartbeat(client)
      case 'rooms':  return this.#tx(client.ws, { t: 'rooms', list: this.#rooms.list() })
      case 'ping':   return this.#tx(client.ws, { t: 'pong' })
    }
  }

  // ── Hello — peer announces itself ────────────────────────────────────────────

  #onHello (wsId, client, msg) {
    const { roomId, peerId, username = 'anon', presetId = 0, status = 'available' } = msg
    if (!roomId || !peerId) return

    Object.assign(client, { roomId, peerId, username, presetId, status })
    this.#peerMap.set(peerId, wsId)
    this.#rooms.join(roomId, peerId, { username, presetId, status }, this.#nodeId)

    // Tell the newcomer about every existing peer in the room
    const existing = this.#rooms.getPeers(roomId)
    for (const peer of existing) {
      if (peer.peerId === peerId) continue
      this.#tx(client.ws, {
        t: 'peer_join', roomId,
        peerId:   peer.peerId,
        username: peer.username,
        presetId: peer.presetId,
        status:   peer.status,
      })
      // Tell the existing local peer about the newcomer
      const targetWsId = this.#peerMap.get(peer.peerId)
      const targetClient = this.#clients.get(targetWsId)
      if (targetClient) {
        this.#tx(targetClient.ws, {
          t: 'peer_join', roomId, peerId, username, presetId, status,
        })
      }
    }

    // Announce to the wider xpacenet (other nodes will forward to their clients)
    this.#router.publish(TOPICS.JOINS, {
      roomId, peerId, username, presetId, status, ts: Date.now(),
    })
    // Room heartbeat for discovery
    this.#router.publish(TOPICS.ROOMS, {
      roomId, count: this.#rooms.getPeers(roomId).length, ts: Date.now(),
    })
  }

  // ── Signal — WebRTC offer / answer / ICE ─────────────────────────────────────

  #onSignal (client, msg) {
    const { roomId, to, payload } = msg
    if (!to || !payload) return

    // Check if target is local (fast path — no network hop)
    const targetWsId  = this.#peerMap.get(to)
    const targetClient = this.#clients.get(targetWsId)

    if (targetClient) {
      this.#tx(targetClient.ws, {
        t: 'signal', roomId, from: client.peerId, payload,
      })
    } else {
      // Target is on another node — publish via GossipSub (cross-node)
      this.#router.publish(TOPICS.SIGNALS, {
        roomId, from: client.peerId, to, payload, ts: Date.now(),
      })
    }
  }

  // ── Leave ─────────────────────────────────────────────────────────────────────

  #onLeave (wsId, client) {
    if (!client.roomId || !client.peerId) return
    this.#rooms.leave(client.roomId, client.peerId)
    this.#peerMap.delete(client.peerId)
    // Notify local peers
    for (const [, c] of this.#clients) {
      if (c.roomId === client.roomId && c.peerId !== client.peerId) {
        this.#tx(c.ws, { t: 'peer_leave', roomId: client.roomId, peerId: client.peerId })
      }
    }
    // Announce to network
    this.#router.publish(TOPICS.LEAVES, {
      roomId: client.roomId, peerId: client.peerId, ts: Date.now(),
    })
    client.roomId = null
    client.peerId = null
    this.#clients.delete(wsId)
  }

  // ── Heartbeat ─────────────────────────────────────────────────────────────────

  #onHeartbeat (client) {
    if (client.roomId && client.peerId) {
      this.#rooms.heartbeat(client.roomId, client.peerId)
    }
  }

  // ── Disconnect (WebSocket closed without explicit leave) ──────────────────────

  #onDisconnect (wsId) {
    const client = this.#clients.get(wsId)
    if (!client) return
    this.#onLeave(wsId, client)
    this.#clients.delete(wsId)
  }

  // ── Helpers ───────────────────────────────────────────────────────────────────

  #tx (ws, msg) {
    if (ws.readyState === 1 /* OPEN */) ws.send(JSON.stringify(msg))
  }

  get clientCount () { return this.#clients.size }
}

function uid () {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6)
}
