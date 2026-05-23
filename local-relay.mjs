/**
 * Minimal local BitTorrent WebSocket tracker relay for testing.
 * Implements just enough of the BT tracker WS protocol for Trystero:
 *   announce + offer routing + answer routing
 *
 * Usage:  node local-relay.mjs   (listens on ws://localhost:8765)
 */

import { WebSocketServer } from '/Users/mrxpace/spacework/client/node_modules/ws/wrapper.mjs'

const PORT = 8765

// info_hash → Map<peer_id, ws>
const rooms = new Map()

const wss = new WebSocketServer({ port: PORT })

wss.on('connection', ws => {
  ws._peerId = null
  ws._rooms  = new Set()

  ws.on('message', raw => {
    let msg
    try { msg = JSON.parse(raw) } catch { return }
    if (msg.action !== 'announce' || !msg.info_hash) return

    const hash = msg.info_hash

    // Register this peer in the room
    if (!rooms.has(hash)) rooms.set(hash, new Map())
    const room = rooms.get(hash)
    if (msg.peer_id) { ws._peerId = msg.peer_id; room.set(msg.peer_id, ws); ws._rooms.add(hash) }

    // Route offer(s) to other peers in the room
    if (msg.offers?.length) {
      const others = [...room.values()].filter(c => c !== ws && c.readyState === 1)
      msg.offers.forEach((offerObj, i) => {
        const target = others[i]
        if (!target) return
        target.send(JSON.stringify({
          info_hash: hash,
          peer_id:   msg.peer_id,
          offer_id:  offerObj.offer_id,
          offer:     offerObj.offer,
        }))
      })
    }

    // Route answer back to original offerer
    if (msg.answer && msg.to_peer_id) {
      const target = room.get(msg.to_peer_id)
      if (target?.readyState === 1) {
        target.send(JSON.stringify({
          info_hash: hash,
          peer_id:   msg.peer_id,
          offer_id:  msg.offer_id,
          answer:    msg.answer,
        }))
      }
    }
  })

  ws.on('close', () => {
    ws._rooms.forEach(hash => {
      const room = rooms.get(hash)
      if (room && ws._peerId) room.delete(ws._peerId)
    })
  })
})

wss.on('listening', () => console.log(`relay listening on ws://localhost:${PORT}`))
