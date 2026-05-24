/**
 * index.js — xpacenode entry point
 *
 * Boots one xpacenode:
 *   1. Load / generate persistent Ed25519 identity
 *   2. Start libp2p (GossipSub + DHT + Circuit Relay + transports)
 *   3. Start GossipSub router (blind message forwarding)
 *   4. Start WebSocket bridge (browser ↔ xpacenet)
 *   5. Start HTTP API (/health /info /rooms)
 *   6. Dial bootstrap peers (connect to the swarm)
 *   7. Publish room heartbeats every 30 s
 *
 * Everything runs inside Docker — isolated from the host by design.
 * The container is read-only except for the /data volume.
 */

import http             from 'http'
import { mkdir }        from 'fs/promises'
import { existsSync }   from 'fs'

import { bootNode }     from './node.js'
import { Router, TOPICS } from './router.js'
import { Rooms }        from './rooms.js'
import { Bridge }       from './bridge.js'
import { createApi }    from './api.js'

// ── Config (from env — injected by docker-compose) ────────────────────────────
const cfg = {
  host:       process.env.NODE_HOST      || '0.0.0.0',
  tcpPort:    parseInt(process.env.NODE_TCP_PORT  || '4001', 10),
  wsPort:     parseInt(process.env.NODE_WS_PORT   || '4002', 10),
  apiPort:    parseInt(process.env.NODE_API_PORT  || '3000', 10),
  dataDir:    process.env.DATA_DIR       || '/data',
  bootstraps: (process.env.BOOTSTRAP_PEERS || '').split(',').filter(Boolean),
}

// ── Boot ──────────────────────────────────────────────────────────────────────
async function main () {
  console.log('[xpacenode] booting...')

  // Ensure /data exists (Docker volume may be empty on first run)
  if (!existsSync(cfg.dataDir)) await mkdir(cfg.dataDir, { recursive: true })

  // ── 1. libp2p node ─────────────────────────────────────────────────────────
  const node = await bootNode(cfg)
  await node.start()

  const nodeId = node.peerId.toString()
  console.log('[xpacenode] peer id :', nodeId)
  console.log('[xpacenode] listening:')
  node.getMultiaddrs().forEach(a => console.log('  ', a.toString()))

  // ── 2. Router — blind GossipSub forwarding ─────────────────────────────────
  const router = new Router(node)
  router.start()

  // ── 3. Room registry ────────────────────────────────────────────────────────
  const rooms = new Rooms()

  // ── 4. WebSocket bridge ─────────────────────────────────────────────────────
  const bridge = new Bridge(router, rooms, nodeId, null /* key wired in Phase 2 */)
  bridge.start(cfg.wsPort)

  // ── 5. HTTP API ─────────────────────────────────────────────────────────────
  const app    = createApi(node, rooms, bridge)
  const server = http.createServer(app)
  await new Promise(resolve =>
    server.listen(cfg.apiPort, () => {
      console.log(`[xpacenode] API on :${cfg.apiPort}`)
      resolve()
    })
  )

  // ── 6. Connect to bootstrap swarm peers ────────────────────────────────────
  if (cfg.bootstraps.length) {
    const { multiaddr } = await import('@multiformats/multiaddr')
    for (const addr of cfg.bootstraps) {
      node.dial(multiaddr(addr)).then(() => {
        console.log('[xpacenode] connected to bootstrap:', addr)
      }).catch(e => {
        console.warn('[xpacenode] bootstrap unreachable:', addr, '-', e.message)
      })
    }
  }

  // ── 7. Periodic room heartbeat → discovery topic ───────────────────────────
  // Lets other nodes in the swarm know what rooms are live here
  setInterval(() => {
    for (const room of rooms.list()) {
      router.publish(TOPICS.ROOMS, {
        nodeId, roomId: room.roomId, count: room.count, ts: Date.now(),
      })
    }
  }, 30_000)

  console.log('[xpacenode] ready ✓')

  // ── Graceful shutdown ──────────────────────────────────────────────────────
  const shutdown = async (sig) => {
    console.log(`\n[xpacenode] ${sig} — shutting down`)
    server.close()
    await node.stop()
    process.exit(0)
  }
  process.on('SIGTERM', () => shutdown('SIGTERM'))
  process.on('SIGINT',  () => shutdown('SIGINT'))
}

main().catch(err => {
  console.error('[xpacenode] fatal:', err)
  process.exit(1)
})
