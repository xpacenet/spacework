#!/usr/bin/env bash
# ── xpacenode start ────────────────────────────────────────────────────────────
# One command to bring up a node in an isolated Docker container.
# Safe to run on any Linux host — never touches the host system.
set -euo pipefail

BOLD='\033[1m'; GREEN='\033[0;32m'; CYAN='\033[0;36m'
YELLOW='\033[0;33m'; RED='\033[0;31m'; RESET='\033[0m'

log()  { echo -e "${CYAN}[xpacenode]${RESET} $*"; }
ok()   { echo -e "${GREEN}[xpacenode]${RESET} $*"; }
warn() { echo -e "${YELLOW}[xpacenode]${RESET} $*"; }
die()  { echo -e "${RED}[xpacenode]${RESET} $*"; exit 1; }

echo -e "\n${BOLD}${CYAN}xpacenode — swarm routing node${RESET}\n"

# ── Dependency checks ──────────────────────────────────────────────────────────
command -v docker >/dev/null 2>&1 \
  || die "Docker is not installed. See https://docs.docker.com/engine/install/"

docker compose version >/dev/null 2>&1 \
  || die "Docker Compose v2 is required. Update Docker Desktop or install the plugin."

# ── First-run: create .env from example ───────────────────────────────────────
if [ ! -f .env ]; then
  cp .env.example .env
  warn "Created .env from .env.example"
  warn "Edit NODE_HOST to your public IP or domain if peers need to reach you."
fi

# ── Build image + start container ─────────────────────────────────────────────
log "Building image..."
docker compose build --quiet

log "Starting container..."
docker compose up -d

# ── Wait for health check ──────────────────────────────────────────────────────
API_PORT=$(grep -E '^NODE_API_PORT=' .env 2>/dev/null | cut -d= -f2 | tr -d ' ' || echo "3000")
API_PORT="${API_PORT:-3000}"

log "Waiting for health check on :${API_PORT}..."
for i in $(seq 1 20); do
  if curl -sf "http://localhost:${API_PORT}/health" >/dev/null 2>&1; then
    break
  fi
  sleep 1
  if [ "$i" -eq 20 ]; then
    warn "Health check timed out — check logs: docker compose logs xpacenode"
  fi
done

# ── Print node info ────────────────────────────────────────────────────────────
INFO=$(curl -sf "http://localhost:${API_PORT}/info" 2>/dev/null || echo "{}")
PEER_ID=$(echo "$INFO" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('peerId','(unavailable)'))" 2>/dev/null || echo "(unavailable)")

echo ""
ok "xpacenode is running ✓"
echo ""
echo -e "  ${BOLD}Peer ID:${RESET}  $PEER_ID"
echo ""
echo -e "  ${BOLD}Multiaddrs${RESET} (share with other nodes to connect):"
echo "$INFO" | python3 -c "
import sys, json
d = json.load(sys.stdin)
for a in d.get('multiaddrs', []):
    print('   ', a)
" 2>/dev/null || true
echo ""
echo -e "  ${BOLD}API:${RESET}      http://localhost:${API_PORT}"
echo -e "  ${BOLD}Rooms:${RESET}    http://localhost:${API_PORT}/rooms"
echo -e "  ${BOLD}Logs:${RESET}     docker compose logs -f xpacenode"
echo -e "  ${BOLD}Stop:${RESET}     docker compose down"
echo ""
echo -e "  Add this node as a bootstrap peer for other xpacenodes:"
echo -e "  ${BOLD}BOOTSTRAP_PEERS=${PEER_ID}${RESET} (add multiaddr above)"
echo ""
