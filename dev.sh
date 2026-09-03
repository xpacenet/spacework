#!/usr/bin/env bash
# ── xpacenet local dev ─────────────────────────────────────────────────────────
# Starts xpacenode + SpaceWork frontend on your LAN.
# Every device on the same WiFi can connect.
#
# Usage:  ./dev.sh
# Stop:   Ctrl+C
set -euo pipefail

# ── Colours ───────────────────────────────────────────────────────────────────
B='\033[1m'; G='\033[0;32m'; C='\033[0;36m'; Y='\033[0;33m'; R='\033[0m'
log()  { echo -e "${C}[dev]${R} $*"; }
ok()   { echo -e "${G}[dev]${R} $*"; }
warn() { echo -e "${Y}[dev]${R} $*"; }

# ── LAN IP ────────────────────────────────────────────────────────────────────
# Override directly (LAN_IP=192.168.1.23 ./dev.sh) when auto-detection picks
# the wrong interface, or on a platform/network setup neither branch below
# handles. Auto-detection order: macOS common interface names, then Linux
# (whatever `ip route` says is the outbound interface -- correct on far more
# network setups than a hardcoded interface name would be), then localhost.
# Falling back to 127.0.0.1 without ever attempting Linux detection would
# silently make this script's own "every device on your WiFi can connect"
# claim false on every non-Mac machine -- worth actually detecting, not just
# swallowing into the same fallback everything else lands on.
if [ -z "${LAN_IP:-}" ]; then
  LAN_IP=$(ipconfig getifaddr en0 2>/dev/null \
        || ipconfig getifaddr en1 2>/dev/null \
        || ipconfig getifaddr en2 2>/dev/null \
        || ip -4 route get 1.1.1.1 2>/dev/null | awk '{for (i=1;i<=NF;i++) if ($i=="src") print $(i+1)}' \
        || echo "127.0.0.1")
fi

# ── Ports ─────────────────────────────────────────────────────────────────────
# Overridable via env, not hardcoded -- a machine already running something
# on one of these defaults (a different local project, another instance of
# this same script) shouldn't require editing the script to work around it:
#   XN_API=3098 ./dev.sh
XN_TCP="${XN_TCP:-4001}"        # xpacenode libp2p TCP        (node ↔ node)
XN_WS="${XN_WS:-4002}"          # xpacenode libp2p WS         (node ↔ node)
XN_BRIDGE="${XN_BRIDGE:-4003}"  # xpacenode WS bridge         (browser clients)
XN_API="${XN_API:-3000}"        # xpacenode HTTP API          (/health /rooms /info)
FE_PORT="${FE_PORT:-5199}"      # SpaceWork Vite dev server

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo ""
echo -e "${B}${C}xpacenet — local dev${R}"
echo -e "  LAN IP : ${B}${LAN_IP}${R}"
echo ""

# ── 1. Install xpacenode deps if missing ──────────────────────────────────────
NODE_DIR="$ROOT/xpacenet/xpacenode"
if [ ! -d "$NODE_DIR/node_modules" ]; then
  log "Installing xpacenode dependencies..."
  (cd "$NODE_DIR" && npm install --silent)
  ok "xpacenode deps installed"
fi

# ── 2. Start xpacenode ────────────────────────────────────────────────────────
DATA_DIR="/tmp/xpacenode-dev"
mkdir -p "$DATA_DIR"

log "Starting xpacenode on :${XN_WS} (WS) :${XN_API} (API)..."
NODE_HOST="$LAN_IP"           \
NODE_TCP_PORT="$XN_TCP"       \
NODE_WS_PORT="$XN_WS"         \
NODE_BRIDGE_PORT="$XN_BRIDGE" \
NODE_API_PORT="$XN_API"       \
DATA_DIR="$DATA_DIR"           \
node "$NODE_DIR/src/index.js" 2>&1 | sed 's/^/  \x1b[36m[node]\x1b[0m /' &
NODE_PID=$!

# Wait until API responds (up to 10 s)
for i in $(seq 1 20); do
  sleep 0.5
  curl -sf "http://localhost:${XN_API}/health" >/dev/null 2>&1 && break
  if [ "$i" -eq 20 ]; then
    warn "xpacenode health check timed out — check output above"
  fi
done
ok "xpacenode ready"

# ── 3. Start SpaceWork Vite dev server ────────────────────────────────────────
log "Starting SpaceWork on :${FE_PORT}..."
(
  cd "$ROOT/client"
  VITE_XPACENODE_URL="ws://${LAN_IP}:${XN_BRIDGE}" \
  VITE_XPACENODE_API_URL="http://${LAN_IP}:${XN_API}" \
    npx vite --port "$FE_PORT" --host \
    2>&1 | sed 's/^/  \x1b[32m[vite]\x1b[0m /'
) &
VITE_PID=$!

sleep 2

# ── 4. Print access info ──────────────────────────────────────────────────────
echo ""
echo -e "  ${B}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${R}"
echo -e "  ${B}Open on any device on this WiFi:${R}"
echo ""
echo -e "    ${B}${G}http://${LAN_IP}:${FE_PORT}${R}    ← SpaceWork"
echo ""
echo -e "  xpacenode API:"
echo -e "    http://${LAN_IP}:${XN_API}/health"
echo -e "    http://${LAN_IP}:${XN_API}/rooms"
echo -e "    http://${LAN_IP}:${XN_API}/info"
echo ""
echo -e "  ${B}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${R}"
echo -e "  Press ${B}Ctrl+C${R} to stop everything"
echo ""

# ── 5. Clean shutdown on Ctrl+C ───────────────────────────────────────────────
cleanup() {
  echo ""
  log "Shutting down..."
  kill "$NODE_PID" "$VITE_PID" 2>/dev/null || true
  wait "$NODE_PID" "$VITE_PID" 2>/dev/null || true
  ok "Stopped."
}
trap cleanup INT TERM

# Keep running — stream both processes' output
wait
