# xpacenode

> The smallest routing unit in the xpacenet swarm network.

---

## What is xpacenode?

An xpacenode is a **blind message router** — a middleman that moves signed messages
between peers without ever reading their content.

```
Peer A ──→ xpacenode ──→ xpacenet ──→ xpacenode ──→ Peer B
              ↑                            ↑
         "I don't know                "I don't know
          what this says"              what this says"
```

When a message arrives at its destination, the receiving node signs a **receipt**:

```
{ msgId, nodeId, timestamp, signature }
```

This receipt is broadcast back through the network — proof of delivery without
proof of content. The receipt trail becomes the foundation for the mining/incentive
layer in Phase 2.

---

## Hierarchy

```
xpacenet          ← the universal network
  └── swarms      ← geographic or topical clusters of nodes
        └── xpacenodes   ← individual routing units (this repo)
              └── clients ← SpaceWork, and future apps
```

One xpacenode = one Docker container. Anyone can run one.
Multiple xpacenodes automatically form a swarm via libp2p GossipSub + DHT.
Multiple swarms connect to form xpacenet.

---

## What runs inside

| Component          | Role                                              |
|--------------------|---------------------------------------------------|
| libp2p             | P2P networking (TCP + WebSocket transports)       |
| GossipSub          | Pub/sub message routing (the routing backbone)    |
| Kademlia DHT       | Peer discovery across the network                 |
| Circuit Relay v2   | NAT traversal for firewalled peers                |
| WebSocket bridge   | Browser clients ↔ xpacenet interface             |
| HTTP API           | Room discovery (`/rooms`), health, node info      |

**The node never parses message payloads.** It routes on topic only.

---

## Quick start (Linux)

```bash
git clone https://github.com/xpacenet/xpacenode
cd xpacenode
./start.sh
```

One command. Docker handles everything else.

### Requirements
- Docker Engine 24+
- Docker Compose v2
- Ports 4001, 4002, 3000 open in your firewall

---

## Connecting to the swarm

After `./start.sh`, the node prints its multiaddrs:

```
xpacenode is running ✓

  Peer ID:  12D3KooWabc...
  Multiaddrs:
    /ip4/1.2.3.4/tcp/4001/p2p/12D3KooWabc...
    /ip4/1.2.3.4/tcp/4002/ws/p2p/12D3KooWabc...
```

Give those addresses to other xpacenode operators and add theirs to your `.env`:

```
BOOTSTRAP_PEERS=/ip4/1.2.3.4/tcp/4001/p2p/12D3KooWabc...,/ip4/5.6.7.8/tcp/4001/p2p/12D3KooWxyz...
```

Restart with `docker compose up -d` — your node joins the swarm.

---

## Docker isolation

The container is fully isolated from its host:

| Guard                      | What it prevents                                  |
|----------------------------|---------------------------------------------------|
| `read_only: true`          | Cannot write to host filesystem                   |
| `cap_drop: ALL`            | No elevated Linux capabilities                    |
| `no-new-privileges: true`  | Cannot escalate privileges                        |
| `mem_limit: 256m`          | Cannot exhaust host RAM                           |
| `cpus: "0.5"`              | Cannot starve host CPU                            |
| Bridge network             | Isolated from other containers and host network   |
| `/tmp` as tmpfs            | Temp files disappear on restart                   |
| Named volume `/data`       | Only persistent state: node identity key          |

---

## HTTP API

| Endpoint   | Response                                                   |
|------------|------------------------------------------------------------|
| `GET /health` | `{ ok: true, ts: 1234567890 }`                          |
| `GET /info`   | `{ peerId, multiaddrs, peers, clients, uptime }`        |
| `GET /rooms`  | `{ rooms: [{ roomId, count, usernames }], ts }`         |

---

## WebSocket protocol (for client developers)

Connect to `ws://your-node:4002`

**Client → Node:**
```json
{ "t": "hello",  "roomId": "team-alpha", "peerId": "abc123", "username": "Alice" }
{ "t": "signal", "roomId": "team-alpha", "to": "peer456", "payload": { ... } }
{ "t": "leave",  "roomId": "team-alpha" }
{ "t": "hb" }
{ "t": "rooms" }
{ "t": "ping" }
```

**Node → Client:**
```json
{ "t": "welcome",    "nodeId": "12D3KooW..." }
{ "t": "peer_join",  "roomId": "team-alpha", "peerId": "peer456", "username": "Bob" }
{ "t": "peer_leave", "roomId": "team-alpha", "peerId": "peer456" }
{ "t": "signal",     "roomId": "team-alpha", "from": "peer456", "payload": { ... } }
{ "t": "rooms",      "list": [ ... ] }
{ "t": "pong" }
```

---

## Roadmap

- **Phase 1 (now):** Routing + discovery + WebSocket bridge
- **Phase 2:** Ed25519 receipt signing + receipt verification
- **Phase 3:** Mining — nodes earn xpacenet tokens for routing verified receipts
- **Phase 4:** Tiered swarm topology — bootstrap nodes, relay nodes, edge nodes
- **Phase 5:** Universal chain — receipt ledger becomes a distributed accountability layer

---

## Applications on xpacenet

| App         | Description                    |
|-------------|-------------------------------|
| SpaceWork   | 3D spatial collaboration space |
| (your app)  | Build on the same network      |

xpacenet is the routing layer. Applications own the content.
