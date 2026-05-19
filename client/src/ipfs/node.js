/**
 * IPFS Node — the browser IS the backend.
 *
 * Every SpaceWork client automatically starts a Helia (IPFS) node on load.
 * No server required. The browser joins the IPFS network, discovers other
 * SpaceWork peers via GossipSub, and syncs world state via content-addressed
 * blocks (CIDs).
 *
 * Architecture:
 *   libp2p → transport layer (WebRTC browser-to-browser, WebSockets to relays)
 *   Helia  → content layer   (block storage, CID-based retrieval)
 *   GossipSub → messaging   (real-time peer-to-peer pub/sub)
 *
 * The node is a singleton — call createSpaceNode() once, reuse everywhere.
 */

import { createHelia }         from 'helia'
import { createLibp2p }        from 'libp2p'
import { webRTC }              from '@libp2p/webrtc'
import { webSockets }          from '@libp2p/websockets'
import { bootstrap }           from '@libp2p/bootstrap'
import { identify }            from '@libp2p/identify'
import { gossipsub }           from '@chainsafe/libp2p-gossipsub'
import { noise }               from '@chainsafe/libp2p-noise'
import { yamux }               from '@libp2p/yamux'
import { circuitRelayTransport } from '@libp2p/circuit-relay-v2'

// ── Bootstrap peers (public IPFS nodes with WS support) ───────────────────
// These are well-known public nodes that help with initial peer discovery.
// Once connected to a few peers, the DHT handles the rest.
const BOOTSTRAP_LIST = [
  '/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN',
  '/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa',
  '/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb',
  '/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt',
]

// ── Singleton ─────────────────────────────────────────────────────────────
let _node   = null
let _helia  = null
let _status = 'idle'  // 'idle' | 'starting' | 'ready' | 'error'
const _listeners = []

export function onNodeStatus(cb) { _listeners.push(cb) }

function emit(status, detail = {}) {
  _status = status
  for (const cb of _listeners) cb({ status, ...detail })
}

/**
 * Start the IPFS node (idempotent — safe to call multiple times).
 * Returns { helia, libp2p, peerId }.
 */
export async function createSpaceNode() {
  if (_helia) return { helia: _helia, libp2p: _node, peerId: _node.peerId }
  if (_status === 'starting') {
    // Wait for the in-progress start
    return new Promise((resolve, reject) => {
      const unsub = onNodeStatus(({ status, helia, libp2p, peerId }) => {
        if (status === 'ready')  { resolve({ helia, libp2p, peerId }); _listeners.splice(_listeners.indexOf(unsub), 1) }
        if (status === 'error')  { reject(new Error('IPFS node failed to start')); _listeners.splice(_listeners.indexOf(unsub), 1) }
      })
    })
  }

  emit('starting')

  try {
    // ── libp2p — the networking layer ──────────────────────────────────────
    const libp2p = await createLibp2p({
      transports: [
        webRTC(),                           // browser ↔ browser (no server!)
        webSockets(),                       // browser ↔ public relay
        circuitRelayTransport({             // fallback relay for NAT traversal
          discoverRelays: 2,
        }),
      ],
      connectionEncrypters: [noise()],
      streamMuxers:         [yamux()],
      peerDiscovery: [
        bootstrap({
          list: BOOTSTRAP_LIST,
          timeout: 3000,
        }),
      ],
      services: {
        identify: identify(),
        pubsub:   gossipsub({
          allowPublishToZeroPeers: true,    // publish even before peers arrive
          emitSelf:                false,
          fallbackToFloodsub:      true,
        }),
      },
      connectionManager: {
        maxConnections:    50,
        minConnections:    5,
        autoDialInterval:  10_000,
      },
    })

    // ── Helia — the content layer ──────────────────────────────────────────
    const helia = await createHelia({ libp2p })

    _node  = libp2p
    _helia = helia

    const peerId = libp2p.peerId.toString()

    libp2p.addEventListener('peer:connect', e => {
      emit('peer:connect', { peerId: e.detail.toString() })
    })
    libp2p.addEventListener('peer:disconnect', e => {
      emit('peer:disconnect', { peerId: e.detail.toString() })
    })

    emit('ready', { helia, libp2p, peerId })
    return { helia, libp2p, peerId }

  } catch (err) {
    emit('error', { error: err })
    throw err
  }
}

/** Stop the node cleanly. */
export async function stopSpaceNode() {
  if (_helia) await _helia.stop()
  _helia  = null
  _node   = null
  _status = 'idle'
}

export function getNodeStatus() { return _status }
export function getNode()       { return { helia: _helia, libp2p: _node } }
