# SpaceWork Architecture

## Overview

SpaceWork is peer-to-peer. There is no application server holding room state —
`xpacenode` only relays signed WebRTC signaling messages (offer/answer/ICE) and
never sees chat, voice, or position data once a connection is established.

```
Browser A (Three.js) ──┐                                   ┌── Browser B (Three.js)
                        │                                   │
                        ├──WebSocket (signaling only)──→ xpacenode ←──WebSocket──┤
                        │        (libp2p GossipSub + KadDHT swarm)               │
                        │                                                        │
                        └──────────────── WebRTC (data channel + audio) ─────────┘
                                     ↑ direct peer-to-peer once connected

  Vite dev server serves the client + /public/models/spaceship.glb (Blender export)
```

Fallback transport: if no `xpacenode` is reachable, `sync/trysteroSync.js` uses
the BitTorrent DHT (via Trystero) for signaling instead — same message protocol,
different transport. See `sync/remote.js` header for the transport history
(Trystero → Nostr → xpacenode).

## Zones

| Zone   | Z range     | Color  | Purpose              |
|--------|-------------|--------|----------------------|
| Bridge | +5 to +20   | Blue   | Meetings, command    |
| Lab    | -5 to +5    | Cyan   | Deep work, screens   |
| Lounge | -20 to -5   | Purple | Casual, social       |

## Peer protocol (over WebRTC data channel, post-signaling)

These are the actual message `type`s handled in `sync/remote.js` (see `#handleMessage`
switch), not a server event model — every peer sends and receives the same set:

| Message     | Purpose                                                        |
|-------------|-----------------------------------------------------------------|
| `intro`     | Sent on connect; triggers `state_req` to sync full peer state   |
| `state_req` | Ask a newly-connected peer for a full state snapshot            |
| `state`     | Full HOT-tier snapshot reply to `state_req`                     |
| `delta`     | Versioned state change (avatar/status) — CRDT-lite, see below   |
| `move`      | Position/rotation update (unversioned, high-frequency)          |
| `avatar`    | Avatar preset change                                             |
| `status`    | Status change                                                    |
| `talking`   | Mic-activity flag, drives the talking-ring visual                |
| `chat`      | P2P text chat payload                                            |
| `hb`        | Heartbeat every 30s — resets the sender's TTL on receivers       |
| `bye`       | Graceful peer departure                                          |

Voice and video are not messages — they're WebRTC `MediaStreamTrack`s added
directly to the `RTCPeerConnection` (`RTCPeer#addTrack` / `ontrack`), routed
peer-to-peer like any other WebRTC media, entirely outside this message protocol.

## Presence sync (HOT/COLD, CRDT-lite)

Full detail lives in the top-level `README.md` ("Presence sync architecture").
Summary: `presenceStore.js` holds a HOT tier (current room, full fidelity) and a
COLD tier (other known rooms, capped at 20, summary-only). `delta` messages carry
a monotonic version counter so replayed/out-of-order updates are dropped safely,
and `hb` + a 60s TTL clean up peers that vanish without sending `bye`.

## Adding a new feature

1. **New zone** — add bounds to `ZONES` in `client/src/player/index.js`
2. **New screen/embed** — add an iframe plane in `client/src/scene/index.js`
3. **Voice chat** — already wired: `sync/remote.js` handles local mic capture and
   remote track playback via WebRTC directly, no third-party SDK (Daily.co etc.)
   is used or needed. Extend `RemoteSync#addVoiceTrack` / `onVoice` callbacks for
   anything voice-related (e.g. muting, per-peer volume).
4. **New P2P message type** — add a `case` in `#handleMessage` (`sync/remote.js`)
   and a matching sender method; mirror it in `sync/trysteroSync.js` if it must
   also work over the DHT fallback transport.
5. **New room** — extend `SpaceRoom.js` or add a new room class
