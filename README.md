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

xpacenode is the signaling + discovery node. Anyone can run one on a Linux server.

**One command on any Ubuntu server:**
```bash
curl -sSL https://raw.githubusercontent.com/xpacenet/spacework/main/xpacenet/xpacenode/install.sh | sudo bash
```

Then set up a domain + WSS (required for HTTPS clients):
```bash
sudo /opt/xpacenode/xpacenet/xpacenode/setup-domain.sh
```

Full guide: [`xpacenet/xpacenode/README.md`](xpacenet/xpacenode/README.md)

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

## Project structure

```
spacework/
├── client/                  # Vite frontend (SpaceWork app)
│   ├── src/
│   │   ├── sync/            # P2P layer (xpacenode pool, WebRTC peers, SpaceSync)
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
