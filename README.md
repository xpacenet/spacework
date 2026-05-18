# SpaceWork 🚀

A virtual spaceship workspace — float in space, work together in real time.
Open source. Browser-based. No install needed.

## Zones
- **Bridge** — command & meetings
- **Lab** — deep work, shared screens
- **Lounge** — casual hangouts

## Stack
- Frontend: Vite + Three.js
- Multiplayer: Socket.io + Node.js
- Voice: WebRTC (Daily.co)
- 3D Assets: Blender → .glb

## Quick Start

```bash
# Install everything
npm run install:all

# Run frontend + server together
npm run dev
```

## Project Structure

```
spacework/
├── client/          # Three.js frontend (Vite)
├── server/          # Node.js + Socket.io multiplayer server
├── blender/         # Blender source files (.blend)
└── docs/            # Architecture & contribution docs
```

## License
MIT — fork it, build on it, ship it.
