# SpaceWork

A virtual spaceship workspace — float in orbit, move between zones, chat and collaborate with teammates in real time. No server required. Fully peer-to-peer.

**Live →** https://mrxpace.github.io/spacework

---

## What it is

SpaceWork is a browser-based 3D virtual office built on a spaceship. Open the link, enter your name, and you're in. Every other person who opens the same link is in the same space with you.

### Zones
| Zone | Purpose |
|------|---------|
| **Bridge** | Command & meetings |
| **Lab** | Deep work & collaboration |
| **Lounge** | Casual hangout |

---

## How peers find each other

Two detection tiers run simultaneously — no server needed:

| Tier | Transport | Range | Latency |
|------|-----------|-------|---------|
| Local | BroadcastChannel + localStorage | Same browser (multiple tabs) | < 150ms |
| Remote | Trystero WebRTC via BitTorrent DHT | Any machine on the internet | 1–5s |

Both tiers feed the same event surface (`peer:join`, `peer:move`, `peer:leave`, `chat`). Avatars appear regardless of how the peer was discovered.

---

## Features

- **3D spaceship** rendered in Three.js — walk through Bridge, Lab, Lounge
- **Live avatars** — see teammates move in real time (50ms position broadcast)
- **P2P text chat** — end-to-end via WebRTC data channel, works cross-machine
- **Zone detection** — minimap highlights your current zone
- **Interactive screens** — walk up to a screen and press `E` to open it
- **No account, no server, no install** — just open and go

---

## Stack

| Layer | Technology |
|-------|-----------|
| Rendering | Three.js (WebGL) |
| Build | Vite + ESM |
| Local P2P | BroadcastChannel + localStorage presence |
| Remote P2P | [Trystero](https://github.com/dmotz/trystero) (BitTorrent DHT → WebRTC) |
| 3D Assets | Blender → `.glb` |
| Hosting | GitHub Pages + IPFS |

---

## Quick start

```bash
git clone https://github.com/mrxpace/spacework
cd spacework/client
npm install
npm run dev
# open http://localhost:5173
```

### Controls
| Key | Action |
|-----|--------|
| `W A S D` | Move |
| `Mouse` | Look around |
| `TAB` | Overview mode |
| `E` | Open nearby screen |
| `R` | Respawn at Bridge |
| `ESC` | Release cursor |

---

## Deployment

### GitHub Pages (automatic)
Every push to `main` triggers the [deploy workflow](.github/workflows/deploy.yml):
1. Builds `client/` with Vite
2. Publishes `dist/` to the `gh-pages` branch
3. *(Optional)* Pins the build to IPFS via Pinata

Enable GitHub Pages in your repo settings → **Source: Deploy from branch → `gh-pages`**.

### IPFS (optional)
Add these secrets to your GitHub repo to enable automatic IPFS pinning on every deploy:

| Secret | Where to get it |
|--------|----------------|
| `PINATA_API_KEY` | [app.pinata.cloud](https://app.pinata.cloud) → API Keys |
| `PINATA_SECRET_API_KEY` | Same page |

Each successful deploy logs the IPFS CID in the Actions run. Access the build via any gateway:
```
https://gateway.pinata.cloud/ipfs/<CID>
https://cloudflare-ipfs.com/ipfs/<CID>
```

---

## Project structure

```
spacework/
├── client/                  # Vite frontend
│   ├── src/
│   │   ├── sync/            # P2P layer (LocalSync, RemoteSync, SpaceSync)
│   │   ├── scene/           # Three.js scene, lighting, ship
│   │   ├── player/          # First-person camera + movement
│   │   ├── universe/        # World grid, history, resources
│   │   └── main.js          # Entry point + HUD wiring
│   ├── public/              # Static assets (ship.glb, etc.)
│   └── vite.config.js
├── server/                  # Optional Node.js server (unused for P2P mode)
├── blender/                 # Source .blend files
└── .github/workflows/       # CI/CD
```

---

## Contributing

Fork it, open a PR. Issues welcome.

## License

MIT — fork it, build on it, ship it.
