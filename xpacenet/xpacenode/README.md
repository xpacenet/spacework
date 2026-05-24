# xpacenode

> The smallest routing unit in the xpacenet swarm network.

An xpacenode is a **blind message router** — it moves signed messages between peers
without ever reading their content. Routes by topic only. The receiving peer signs a
delivery receipt with a timestamp. Receipts are the foundation for the future mining layer.

```
Peer A ──→ xpacenode ──→ xpacenet ──→ xpacenode ──→ Peer B
              ↑                            ↑
         "I don't know                "I don't know
          what this says"              what this says"
```

---

## End-to-end setup

### Prerequisites

- Ubuntu 20.04+ server (any VPS — 1 vCPU, 1 GB RAM minimum)
- Root or sudo access
- Ports **4001** and **4002** reachable from the internet

---

### Step 1 — Install

SSH into your server and run one command:

```bash
curl -sSL https://raw.githubusercontent.com/xpacenet/spacework/main/xpacenet/xpacenode/install.sh | sudo bash
```

The installer will:
1. Install Docker if not already present
2. Clone this repo to `/opt/xpacenode`
3. Ask three questions:
   - Your server's **public IP or domain**
   - **WebSocket port** (default: 4002)
   - **Bootstrap peers** (leave blank to start standalone)
4. Open firewall ports (ufw)
5. Build and start the Docker container
6. Print your node's **Peer ID** and **multiaddrs**

To update to the latest version at any time, re-run the same command (or run
`sudo /opt/xpacenode/xpacenet/xpacenode/install.sh` directly).

---

### Step 2 — Verify it's running

```bash
# Health check
curl http://localhost:3000/health
# → {"ok":true,"ts":...}

# Node info (peer ID, connected peers, active clients)
curl http://localhost:3000/info

# Active rooms
curl http://localhost:3000/rooms

# Live logs
docker compose -f /opt/xpacenode/xpacenet/xpacenode/docker-compose.yml logs -f
```

---

### Step 3 — Set up a domain + WSS (required for HTTPS clients)

> Skip this step if you only need LAN or IP-based access.

Browsers served over `https://` cannot connect to plain `ws://` — they require
`wss://` (WebSocket Secure, the encrypted version). This step installs Nginx as a
reverse proxy and gets a free SSL certificate via Let's Encrypt.

**Requirements:**
- A domain name with an **A record pointing to this server's IP**
- Port **80** and **443** open

```bash
sudo /opt/xpacenode/xpacenet/xpacenode/setup-domain.sh
```

The script will:
1. Ask for your **domain name** (e.g. `node.xpacenet.io`)
2. Ask for an **email** (for Let's Encrypt renewal notifications)
3. Install Nginx + Certbot
4. Write the Nginx config (WSS reverse proxy on port 443)
5. Issue the SSL certificate automatically
6. Enable auto-renewal

After this step your node is reachable at:

```
wss://node.yourdomain.com     ← use this in SpaceWork / clients
https://node.yourdomain.com/health
```

Non-interactive (CI / automation):

```bash
sudo CERTBOT_EMAIL=you@example.com ./setup-domain.sh node.yourdomain.com 4002
```

---

### Step 4 — Connect SpaceWork to your node

**Option A — URL parameter (no rebuild needed)**

Append `?node=wss://node.yourdomain.com` to any SpaceWork URL:

```
https://xpacenet.github.io/spacework/?node=wss://node.yourdomain.com
```

**Option B — Build with env var**

```bash
VITE_XPACENODE_URL=wss://node.yourdomain.com npm run build
```

Deploy the `dist/` to any static host (GitHub Pages, Cloudflare Pages, Vercel).

**Option C — Local dev**

```bash
# In spacework/
VITE_XPACENODE_URL=wss://node.yourdomain.com ./dev.sh
```

---

### Step 5 — Add to the swarm (optional)

When your node starts it prints its multiaddrs:

```
Peer ID:   12D3KooWabc...
Multiaddrs:
   /ip4/1.2.3.4/tcp/4001/p2p/12D3KooWabc...
   /ip4/1.2.3.4/tcp/4002/ws/p2p/12D3KooWabc...
   /dns4/node.yourdomain.com/tcp/443/wss/p2p/12D3KooWabc...
```

Share your TCP multiaddr with other node operators. They add it to their `.env`:

```env
BOOTSTRAP_PEERS=/ip4/1.2.3.4/tcp/4001/p2p/12D3KooWabc...
```

Add theirs to your `/opt/xpacenode/xpacenet/xpacenode/.env` too. Restart to connect:

```bash
docker compose -f /opt/xpacenode/xpacenet/xpacenode/docker-compose.yml up -d
```

Now both nodes share room state via GossipSub — clients on either node discover
each other automatically.

---

## Common commands

```bash
# Start
docker compose -f /opt/xpacenode/xpacenet/xpacenode/docker-compose.yml up -d

# Stop
docker compose -f /opt/xpacenode/xpacenet/xpacenode/docker-compose.yml down

# Restart
docker compose -f /opt/xpacenode/xpacenet/xpacenode/docker-compose.yml restart

# Live logs
docker compose -f /opt/xpacenode/xpacenet/xpacenode/docker-compose.yml logs -f

# Update to latest
sudo /opt/xpacenode/xpacenet/xpacenode/install.sh

# Reconfigure (reset .env)
rm /opt/xpacenode/xpacenet/xpacenode/.env
sudo /opt/xpacenode/xpacenet/xpacenode/install.sh

# Set up or renew domain/SSL
sudo /opt/xpacenode/xpacenet/xpacenode/setup-domain.sh
```

---

## Local dev (Mac / Linux — no server needed)

Run xpacenode + SpaceWork together on your machine. Every device on the same WiFi
can connect.

```bash
# In the spacework/ root
./dev.sh
```

Opens:
- SpaceWork at `http://[your-LAN-IP]:5199`
- xpacenode API at `http://[your-LAN-IP]:3000`

---

## Docker isolation

The container is fully isolated from the host:

| Guard | What it prevents |
|---|---|
| `read_only: true` | Cannot write to host filesystem |
| `cap_drop: ALL` | No elevated Linux capabilities |
| `no-new-privileges: true` | Cannot escalate privileges |
| `mem_limit: 256m` | Cannot exhaust host RAM |
| `cpus: "0.5"` | Cannot starve host CPU |
| Bridge network | Isolated from host network (only mapped ports exposed) |
| `/tmp` as tmpfs | Temp files live in RAM, gone on restart |
| Named volume `/data` | Only persistent state: node identity key |

The node's identity (Ed25519 key) is stored in the Docker volume `xpacenode-data`.
It persists across restarts and updates. To reset identity: `docker volume rm xpacenode-data`.

---

## HTTP API

| Endpoint | Response |
|---|---|
| `GET /health` | `{ ok: true, ts: 1234567890 }` |
| `GET /info` | `{ peerId, multiaddrs, peers, clients, uptime }` |
| `GET /rooms` | `{ rooms: [{ roomId, count, usernames }], ts }` |

---

## WebSocket protocol

Connect to `ws://your-node:4002` (or `wss://` with a domain).

**Client → Node:**
```json
{ "t": "hello",  "roomId": "team-alpha", "peerId": "abc123", "username": "Alice" }
{ "t": "signal", "roomId": "team-alpha", "to": "peer456",    "payload": { ... } }
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
{ "t": "signal",     "roomId": "team-alpha", "from": "peer456",   "payload": { ... } }
{ "t": "rooms",      "list": [ ... ] }
{ "t": "pong" }
```

---

## Architecture

```
xpacenet                    ← the universal network
  └── swarms                ← geographic / topical clusters
        └── xpacenodes      ← individual routing units  (this repo)
              └── clients   ← SpaceWork, and future apps
```

| Component | Role |
|---|---|
| libp2p | P2P networking — TCP + WebSocket transports |
| GossipSub | Pub/sub message routing backbone |
| Kademlia DHT | Peer discovery across the network |
| Circuit Relay v2 | NAT traversal for firewalled peers |
| WebSocket bridge | Browser clients ↔ xpacenet |
| HTTP API | Room discovery, health, node info |

The node **never parses message payloads**. It routes on topic only.

---

## Roadmap

| Phase | Status | Description |
|---|---|---|
| 1 | ✅ Live | Routing + discovery + WebSocket bridge |
| 2 | Planned | Ed25519 receipt signing + verification |
| 3 | Planned | Mining — nodes earn xpacenet tokens for routing verified receipts |
| 4 | Planned | Tiered topology — bootstrap / relay / edge nodes |
| 5 | Planned | Universal chain — receipt ledger as distributed accountability layer |

---

## Apps on xpacenet

| App | Description |
|---|---|
| SpaceWork | 3D spatial collaboration space |
| *(your app)* | Build on the same network |

xpacenet is the routing layer. Applications own their content.
