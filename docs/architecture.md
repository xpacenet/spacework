# SpaceWork Architecture

## Overview

```
Browser (Three.js)  ←──WebSocket──→  Node.js Server  ←──→  SpaceRoom state
        ↕                                                  
  Vite dev server                                         
        ↕                                                  
  /public/models/spaceship.glb   ← exported from Blender
```

## Zones

| Zone   | Z range     | Color  | Purpose              |
|--------|-------------|--------|----------------------|
| Bridge | +5 to +20   | Blue   | Meetings, command    |
| Lab    | -5 to +5    | Cyan   | Deep work, screens   |
| Lounge | -20 to -5   | Purple | Casual, social       |

## Multiplayer Events

| Event           | Direction       | Payload                        |
|-----------------|-----------------|--------------------------------|
| `join`          | client → server | `{ username }`                 |
| `room:state`    | server → client | `{ players[] }`                |
| `player:joined` | server → others | `{ id, username, position }`   |
| `player:move`   | client → server | `{ position, rotation }`       |
| `player:moved`  | server → others | `{ id, position, rotation }`   |
| `player:left`   | server → all    | `{ id }`                       |

## Adding a new feature

1. **New zone** — add bounds to `ZONES` in `client/src/player/index.js`
2. **New screen/embed** — add an iframe plane in `client/src/scene/index.js`
3. **Voice chat** — wire Daily.co SDK into `client/src/multiplayer/index.js`
4. **New room** — extend `SpaceRoom.js` or add a new room class
