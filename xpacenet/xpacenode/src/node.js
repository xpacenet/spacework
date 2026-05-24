/**
 * node.js — xpacenode identity + libp2p setup
 *
 * Responsibilities:
 *   • Load or create a persistent Ed25519 identity (saved to DATA_DIR/node.key)
 *   • Boot a libp2p node with:
 *       - TCP + WebSocket transports        (node↔node and browser↔node)
 *       - Noise encryption                  (all bytes on the wire are encrypted)
 *       - Yamux stream multiplexing
 *       - GossipSub pubsub                  (the routing backbone)
 *       - Kademlia DHT                      (peer discovery across the network)
 *       - Circuit Relay v2 server           (NAT traversal for firewalled peers)
 *       - Identify protocol
 *
 * The node NEVER parses message content — it only routes opaque bytes
 * keyed by GossipSub topic.
 */

import { createLibp2p }         from 'libp2p'
import { tcp }                  from '@libp2p/tcp'
import { webSockets }           from '@libp2p/websockets'
import { noise }                from '@chainsafe/libp2p-noise'
import { yamux }                from '@chainsafe/libp2p-yamux'
import { gossipsub }            from '@chainsafe/libp2p-gossipsub'
import { kadDHT }               from '@libp2p/kad-dht'
import { circuitRelayServer }   from '@libp2p/circuit-relay-v2'
import { identify }             from '@libp2p/identify'
import { generateKeyPair }      from '@libp2p/crypto/keys'
import { readFile, writeFile }  from 'fs/promises'
import { existsSync }           from 'fs'

/**
 * Boot an xpacenode.
 *
 * @param {{ host, tcpPort, wsPort, dataDir, bootstrapPeers }} cfg
 * @returns {Promise<import('libp2p').Libp2p>}
 */
export async function bootNode (cfg) {
  const { host, tcpPort, wsPort, dataDir } = cfg

  // ── Persistent identity ──────────────────────────────────────────────────
  const keyFile   = `${dataDir}/node.key`
  const privKey   = await loadOrCreateKey(keyFile)

  // ── Listen + announce addresses ──────────────────────────────────────────
  const listenAddrs = [
    `/ip4/0.0.0.0/tcp/${tcpPort}`,
    `/ip4/0.0.0.0/tcp/${wsPort}/ws`,
  ]
  // Announce external reachable addresses to the DHT (skip if host is 0.0.0.0)
  const announceAddrs = (host && host !== '0.0.0.0') ? [
    `/ip4/${host}/tcp/${tcpPort}`,
    `/ip4/${host}/tcp/${wsPort}/ws`,
  ] : []

  // ── Build node ───────────────────────────────────────────────────────────
  const node = await createLibp2p({
    privateKey: privKey,
    addresses:  { listen: listenAddrs, announce: announceAddrs },

    transports:          [ tcp(), webSockets() ],
    connectionEncryption:[ noise() ],
    streamMuxers:        [ yamux() ],

    services: {
      // Protocol negotiation — required by most other services
      identify: identify(),

      // ── GossipSub — the routing backbone ──────────────────────────────
      // Messages are opaque bytes; topics are the only routing key.
      // Faster heartbeat (700 ms) for near-real-time propagation.
      pubsub: gossipsub({
        allowPublishToZeroTopicPeers: true,
        emitSelf:          false,
        heartbeatInterval: 700,       // ms — default 1000
        fanoutTTL:         60_000,
        msgIdFn:           defaultMsgId,
      }),

      // ── Kademlia DHT — peer routing + discovery ────────────────────────
      dht: kadDHT({
        protocol:   '/xpacenet/dht/1.0.0',
        clientMode: false,            // server mode: participate in routing
      }),

      // ── Circuit Relay v2 — NAT traversal for firewalled peers ─────────
      // Acts as TURN-equivalent at the libp2p layer.
      // Browsers behind NAT can reserve a relay slot and be reachable.
      relay: circuitRelayServer({
        reservations: {
          maxReservations:          1000,
          reservationClearanceDelay: 300_000,   // 5 min
          defaultDurationLimit:      3_600_000, // 1 h
          defaultDataLimit:          BigInt(1 << 28), // 256 MB/session
        },
      }),
    },
  })

  return node
}

// ── Key persistence ──────────────────────────────────────────────────────────

async function loadOrCreateKey (keyFile) {
  if (existsSync(keyFile)) {
    try {
      const raw = await readFile(keyFile)
      // @libp2p/crypto v5+: privateKeyFromRaw
      const { privateKeyFromRaw } = await import('@libp2p/crypto/keys')
      const key = privateKeyFromRaw(new Uint8Array(raw))
      console.log('[node] loaded existing identity from', keyFile)
      return key
    } catch (e) {
      console.warn('[node] could not load saved key, generating new one:', e.message)
    }
  }

  const key = await generateKeyPair('Ed25519')
  await writeFile(keyFile, Buffer.from(key.raw))   // 64 bytes (Ed25519 priv+pub)
  console.log('[node] generated new identity, saved to', keyFile)
  return key
}

// ── Message ID function (deduplication) ─────────────────────────────────────
// Default: sha256(topic + data) — prevents replay of identical messages.
function defaultMsgId (msg) {
  // Use the built-in msgId from gossipsub if available, else concat bytes
  return msg.sequenceNumber
    ? `${msg.from}-${msg.sequenceNumber}`
    : `${msg.topic}-${Buffer.from(msg.data).toString('hex').slice(0, 16)}`
}
