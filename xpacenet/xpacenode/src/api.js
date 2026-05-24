/**
 * api.js — HTTP REST interface
 *
 * Minimal surface — just enough for discovery and monitoring.
 * All heavy work stays in WebSocket bridge and GossipSub.
 *
 * Routes:
 *   GET /health   — liveness probe (Docker HEALTHCHECK + load balancer)
 *   GET /info     — node identity + stats
 *   GET /rooms    — live room list (for client discovery UI)
 */

import express from 'express'
import cors    from 'cors'

const START_TIME = Date.now()

/**
 * @param {import('libp2p').Libp2p} node
 * @param {import('./rooms.js').Rooms} rooms
 * @param {import('./bridge.js').Bridge} bridge
 */
export function createApi (node, rooms, bridge) {
  const app = express()
  app.disable('x-powered-by')
  app.use(cors())
  app.use(express.json({ limit: '16kb' }))

  // ── Health ─────────────────────────────────────────────────────────────────
  app.get('/health', (_, res) => {
    res.json({ ok: true, ts: Date.now() })
  })

  // ── Node info ──────────────────────────────────────────────────────────────
  app.get('/info', (_, res) => {
    res.json({
      peerId:     node.peerId.toString(),
      multiaddrs: node.getMultiaddrs().map(a => a.toString()),
      peers:      node.getPeers().length,         // connected libp2p peers (other nodes)
      clients:    bridge.clientCount,              // connected WebSocket clients
      uptime:     Math.floor((Date.now() - START_TIME) / 1000),
      version:    '0.1.0',
      network:    'xpacenet',
    })
  })

  // ── Room discovery ─────────────────────────────────────────────────────────
  // Clients can poll this before opening a WebSocket to see active rooms.
  app.get('/rooms', (_, res) => {
    res.json({ rooms: rooms.list(), ts: Date.now() })
  })

  return app
}
