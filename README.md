# SpaceWork

> A 3D spatial workspace — open a link, share it, and you're in the same space.
> No account. No install. Fully peer-to-peer.

**Live →** https://xpacenet.github.io/spacework

---

## What it is

SpaceWork is a browser-based 3D virtual office built on a spaceship. Walk between
zones, see teammates as live avatars, talk and chat in real time. Everything is
peer-to-peer — no central server stores your data or media.

### Zones
| Zone | Purpose |
|---|---|
| Bridge | Command & meetings |
| Lab | Deep work & collaboration |
| Lounge | Casual hangout |

---

## How it works

### Joining a space
1. Open the link (or go to the live URL and enter a room name)
2. Enter your name
3. You're in — every other person with the same link is in the same space

### How peers find each other
SpaceWork uses **xpacenode** for peer discovery and WebRTC signaling. Once two
peers connect, all audio and data flows directly between them. xpacenode never
sees the content.

| Step | What happens |
|---|---|
| 1 | Both peers connect to xpacenode via WebSocket |
| 2 | xpacenode routes the WebRTC offer/answer (signaling only) |
| 3 | WebRTC data channel + audio established directly between peers |
| 4 | xpacenode is no longer in the loop |

---

## Features

- **3D spaceship** — walk through Bridge, Lab, Lounge (Three.js / WebGL)
- **Live avatars** — see teammates move in real time
- **Proximity voice** — audio fades in/out based on distance
- **Talking ring** — visual glow when someone is speaking
- **P2P text chat** — end-to-end via WebRTC data channel
- **No account, no server, no install** — just open and go

### Controls
| Key | Action |
|---|---|
| `W A S D` | Move |
| `Mouse drag` | Look around |
| `TAB` | Overview mode |
| `E` | Interact with nearby screen |
| `R` | Respawn at Bridge |

---

## Stack

| Layer | Technology |
|---|---|
| Rendering | Three.js (WebGL) |
| Build | Vite + ESM |
| P2P signaling | xpacenode (libp2p — GossipSub + KadDHT) |
| P2P transport | WebRTC (data channels + audio) |
| 3D assets | Blender → `.glb` |
| Hosting | GitHub Pages |

---

## Running locally

```bash
git clone https://github.com/xpacenet/spacework
cd spacework
./dev.sh
```

Starts xpacenode + SpaceWork together. Opens at `http://[your-LAN-IP]:5199` —
accessible from every device on the same WiFi. Press `Ctrl+C` to stop both.

---

## Deploying your own xpacenode

xpacenode is the signaling + discovery node — the shared swarm mesh network
SpaceWork, SpaceVilla, and other xpacenet apps all connect through. It's its
own repo now, not part of this one: **[github.com/xpacenet/xpacenode](https://github.com/xpacenet/xpacenode)**.

**One command on any Ubuntu server:**
```bash
curl -sSL https://raw.githubusercontent.com/xpacenet/xpacenode/main/install.sh | sudo bash
```

Then set up a domain + WSS (required for HTTPS clients):
```bash
sudo /opt/xpacenode/setup-domain.sh
```

Full guide: [xpacenode's own README](https://github.com/xpacenet/xpacenode/blob/main/README.md)

For local development, `./dev.sh` in this repo needs a checkout of `xpacenode`
as a sibling directory — see "Running locally" below.

---

## Connecting SpaceWork to a node

**URL parameter — no rebuild needed:**
```
https://xpacenet.github.io/spacework/?node=wss://node.yourdomain.com
```

**Build-time env var:**
```bash
VITE_XPACENODE_URL=wss://node.yourdomain.com npm run build
```

---

## Presence sync architecture

SpaceWork keeps the list of who is in a room accurate and lightweight using a
**two-tier presence memory** and a **three-tier timing model**.

### Two-tier memory

| Tier | What | Fields | Size |
|---|---|---|---|
| **HOT** | Current room | username, presetId, status, pos, version | O(peers) |
| **COLD** | Other known rooms | roomHash, peerCount, lastSeen | Capped at 20 |

The HOT tier is always up-to-date and full-fidelity. The COLD tier is a lightweight
summary so you can see what other rooms exist without loading them.

### Three-tier timing

| Tier | Trigger | Message | Purpose |
|---|---|---|---|
| 0 — real-time | Any state change | `delta` + `avatar`/`status` | Immediate UI update |
| 1 — heartbeat | Every 30 s | `hb` | Reset TTL, prevent ghost avatars |
| 2 — background | Browser idle time | COLD prune | Housekeeping, zero jank |

### How it connects

```
Peer joins
  └─→ state_req sent to each new connection
        └─→ peer responds with state (full HOT snapshot)
              └─→ presenceStore.upsertPeer() [version-diff guard]
                    └─→ HELLO fired for unknown peers → avatar created immediately

Own state changes (avatar / status)
  └─→ legacy message (avatar / status) → real-time UI on existing peers
  └─→ versioned delta                  → late-joining peers get correct state

Every 30 s
  └─→ hb sent to all peers → they reset our 60 s TTL
  └─→ if TTL expires without hb → peer:expired → avatar removed (crash cleanup)

Browser idle
  └─→ idleScheduler runs presenceStore.pruneCold() → old room summaries cleared
```

### Version diff (CRDT-lite)

Every `delta` message carries a monotonic version counter (`v`).
`presenceStore.upsertPeer()` drops the update silently if `incoming.v ≤ stored.v`.
This means:

- Replayed or out-of-order deltas are harmless
- Late-joining peers always converge to current state, not stale state
- No coordination needed — each peer owns their own version counter

### Cost invariant

```
O(peers in current room) + O(1 per capped background room)
```

Memory and CPU usage never grows with total network size. A room with 10 people
has the same cost whether xpacenet has 10 or 10 million global users.

### Source files

| File | Role |
|---|---|
| `sync/presenceStore.js` | Two-tier HOT/COLD store, TTL timers, version diff |
| `sync/idleScheduler.js` | requestIdleCallback queue, overflow protection |
| `sync/remote.js` | xpacenode path — hb / state_req / state / delta handling |
| `sync/trysteroSync.js` | DHT path — same protocol via Trystero makeAction |
| `sync/index.js` | SpaceSync — wires transport events to presenceStore |

---

## Project structure

```
spacework/
├── client/                  # Vite frontend (SpaceWork app)
│   ├── src/
│   │   ├── sync/            # P2P + presence layer
│   │   │   ├── index.js         # SpaceSync — main public interface
│   │   │   ├── remote.js        # xpacenode WebSocket + WebRTC transport
│   │   │   ├── trysteroSync.js  # BitTorrent DHT fallback transport
│   │   │   ├── presenceStore.js # Two-tier HOT/COLD peer memory
│   │   │   ├── idleScheduler.js # requestIdleCallback task queue
│   │   │   ├── roomLink.js      # Encoded invite link encode/decode
│   │   │   └── connectionLog.js # Real-time connection step log
│   │   ├── scene/           # Three.js scene, lighting, ship
│   │   ├── player/          # Camera + movement
│   │   └── main.js          # Entry point + HUD wiring
│   └── public/              # Static assets (ship.glb, version.txt)
├── xpacenet/
│   └── xpacenode/           # Routing node (Docker, libp2p)
│       ├── install.sh       # One-command Ubuntu installer
│       ├── setup-domain.sh  # Nginx + Let's Encrypt WSS setup
│       └── README.md        # Full node documentation
├── dev.sh                   # Local multi-device dev server
└── .github/workflows/       # CI/CD → GitHub Pages
```

---

## xpacenet

SpaceWork is one application on top of **xpacenet** — a decentralised swarm routing
network. xpacenode is the smallest unit: a blind message router that moves signed
messages without reading them. Multiple xpacenodes form a swarm. Multiple swarms
form xpacenet.

```
xpacenet
  └── swarms
        └── xpacenodes   ← anyone can run one
              └── clients (SpaceWork, and future apps)
```

---

## License

MIT — fork it, build on it, ship it.
