#!/usr/bin/env bash
# ── xpacenode installer ────────────────────────────────────────────────────────
# Usage:
#   curl -sSL https://raw.githubusercontent.com/xpacenet/spacework/main/xpacenet/xpacenode/install.sh | bash
#   — or —
#   git clone <repo> && cd xpacenet/xpacenode && ./install.sh
#
# Re-run any time to pull the latest version and restart.
set -euo pipefail

REPO_URL="https://github.com/xpacenet/spacework.git"
INSTALL_DIR="${XPACENODE_DIR:-/opt/xpacenode}"
BRANCH="${XPACENODE_BRANCH:-main}"

BOLD='\033[1m'; GREEN='\033[0;32m'; CYAN='\033[0;36m'
YELLOW='\033[0;33m'; RED='\033[0;31m'; RESET='\033[0m'

log()  { echo -e "${CYAN}[install]${RESET} $*"; }
ok()   { echo -e "${GREEN}[install]${RESET} $*"; }
warn() { echo -e "${YELLOW}[install]${RESET} $*"; }
die()  { echo -e "${RED}[install]${RESET} $*"; exit 1; }
ask()  { echo -e "${BOLD}$*${RESET}"; }

echo ""
echo -e "${BOLD}${CYAN}xpacenode — installer${RESET}"
echo -e "  The smallest routing unit in the xpacenet network."
echo ""

# ── Must be root (or sudo) ─────────────────────────────────────────────────────
if [ "$EUID" -ne 0 ]; then
  die "Please run as root or with sudo."
fi

# ── OS check ──────────────────────────────────────────────────────────────────
if ! grep -qi "ubuntu" /etc/os-release 2>/dev/null; then
  warn "This installer is tested on Ubuntu. Other distros may need adjustments."
fi

# ── Install Docker if missing ──────────────────────────────────────────────────
if ! command -v docker >/dev/null 2>&1; then
  log "Docker not found — installing..."
  apt-get update -qq
  apt-get install -y -qq ca-certificates curl gnupg lsb-release

  install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
    | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
  chmod a+r /etc/apt/keyrings/docker.gpg

  echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
    https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
    > /etc/apt/sources.list.d/docker.list

  apt-get update -qq
  apt-get install -y -qq docker-ce docker-ce-cli containerd.io docker-compose-plugin
  systemctl enable --now docker
  ok "Docker installed"
else
  ok "Docker already installed — $(docker --version)"
fi

# Docker Compose v2 check
docker compose version >/dev/null 2>&1 \
  || die "Docker Compose v2 plugin missing. Run: apt-get install docker-compose-plugin"

# ── Pull / update repo ────────────────────────────────────────────────────────
if [ -d "$INSTALL_DIR/.git" ]; then
  log "Updating xpacenode to latest ($BRANCH)..."
  git -C "$INSTALL_DIR" fetch --quiet origin
  git -C "$INSTALL_DIR" reset --hard "origin/$BRANCH" --quiet
  ok "Updated to $(git -C "$INSTALL_DIR" rev-parse --short HEAD)"
else
  log "Cloning xpacenode into $INSTALL_DIR..."
  git clone --quiet --depth 1 --branch "$BRANCH" "$REPO_URL" "$INSTALL_DIR"
  ok "Cloned"
fi

cd "$INSTALL_DIR/xpacenet/xpacenode"

# ── Configure .env ────────────────────────────────────────────────────────────
if [ ! -f .env ]; then
  cp .env.example .env

  echo ""
  echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
  echo -e "${BOLD} Node configuration${RESET}"
  echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
  echo ""

  # Detect public IP automatically
  DETECTED_IP=$(curl -sf --max-time 5 https://api.ipify.org 2>/dev/null || \
                curl -sf --max-time 5 https://checkip.amazonaws.com 2>/dev/null || \
                echo "")

  ask "Public IP or domain for this node [${DETECTED_IP:-0.0.0.0}]:"
  read -r NODE_HOST_INPUT
  NODE_HOST="${NODE_HOST_INPUT:-${DETECTED_IP:-0.0.0.0}}"

  ask "WebSocket port [4002]:"
  read -r WS_INPUT
  WS_PORT="${WS_INPUT:-4002}"

  ask "Bootstrap peers (comma-separated multiaddrs, leave blank for standalone):"
  read -r BOOTSTRAP_INPUT

  # Write to .env
  sed -i "s|^NODE_HOST=.*|NODE_HOST=${NODE_HOST}|" .env
  sed -i "s|^NODE_WS_PORT=.*|NODE_WS_PORT=${WS_PORT}|" .env
  if [ -n "$BOOTSTRAP_INPUT" ]; then
    sed -i "s|^BOOTSTRAP_PEERS=.*|BOOTSTRAP_PEERS=${BOOTSTRAP_INPUT}|" .env
  fi

  ok ".env configured"
else
  warn ".env already exists — skipping config (delete it to reconfigure)"
fi

# ── Open firewall ports ───────────────────────────────────────────────────────
if command -v ufw >/dev/null 2>&1 && ufw status | grep -q "Status: active"; then
  log "Opening firewall ports..."
  ufw allow 4001/tcp comment "xpacenode libp2p TCP" >/dev/null
  ufw allow 4002/tcp comment "xpacenode WebSocket" >/dev/null
  ok "Ports 4001 + 4002 open"
fi

# ── Build + start ─────────────────────────────────────────────────────────────
echo ""
log "Building Docker image..."
docker compose build --quiet

log "Starting xpacenode..."
docker compose down --remove-orphans 2>/dev/null || true
docker compose up -d

# ── Health check ──────────────────────────────────────────────────────────────
API_PORT=$(grep -E '^NODE_API_PORT=' .env 2>/dev/null | cut -d= -f2 | tr -d ' ' || echo "3000")
API_PORT="${API_PORT:-3000}"

log "Waiting for node to be ready..."
for i in $(seq 1 30); do
  if curl -sf "http://localhost:${API_PORT}/health" >/dev/null 2>&1; then
    break
  fi
  sleep 1
  [ "$i" -eq 30 ] && warn "Health check timed out — check: docker compose logs xpacenode"
done

# ── Print node info ────────────────────────────────────────────────────────────
INFO=$(curl -sf "http://localhost:${API_PORT}/info" 2>/dev/null || echo "{}")
PEER_ID=$(echo "$INFO" | python3 -c \
  "import sys,json; print(json.load(sys.stdin).get('peerId','(unavailable)'))" 2>/dev/null \
  || echo "(unavailable)")

echo ""
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
ok "xpacenode is live ✓"
echo ""
echo -e "  ${BOLD}Peer ID:${RESET}   $PEER_ID"
echo ""
echo -e "  ${BOLD}Multiaddrs${RESET} (for BOOTSTRAP_PEERS on other nodes):"
echo "$INFO" | python3 -c "
import sys, json
for a in json.load(sys.stdin).get('multiaddrs', []):
    print('   ', a)
" 2>/dev/null || true
echo ""
echo -e "  ${BOLD}Installed at:${RESET}  $INSTALL_DIR/xpacenet/xpacenode"
echo -e "  ${BOLD}API:${RESET}           http://localhost:${API_PORT}"
echo -e "  ${BOLD}Logs:${RESET}          docker compose -f $INSTALL_DIR/xpacenet/xpacenode/docker-compose.yml logs -f"
echo -e "  ${BOLD}Stop:${RESET}          docker compose -f $INSTALL_DIR/xpacenet/xpacenode/docker-compose.yml down"
echo ""
echo -e "  ${BOLD}━━ Next steps ━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo -e "  • To set up a domain + WSS (required for HTTPS sites):"
echo -e "    ${BOLD}sudo $INSTALL_DIR/xpacenet/xpacenode/setup-domain.sh${RESET}"
echo ""
echo -e "  • To update to the latest version:"
echo -e "    ${BOLD}sudo $INSTALL_DIR/xpacenet/xpacenode/install.sh${RESET}"
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo ""
