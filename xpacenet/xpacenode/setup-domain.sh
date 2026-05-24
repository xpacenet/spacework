#!/usr/bin/env bash
# ── xpacenode domain setup ────────────────────────────────────────────────────
# Sets up Nginx as a WSS reverse proxy + Let's Encrypt SSL certificate.
# Run this AFTER install.sh, only if you have a domain pointing to this server.
#
# Usage:  sudo ./setup-domain.sh
#         sudo ./setup-domain.sh node.example.com          (non-interactive)
#         sudo ./setup-domain.sh node.example.com 4002     (custom WS port)
set -euo pipefail

BOLD='\033[1m'; GREEN='\033[0;32m'; CYAN='\033[0;36m'
YELLOW='\033[0;33m'; RED='\033[0;31m'; RESET='\033[0m'

log()  { echo -e "${CYAN}[domain]${RESET} $*"; }
ok()   { echo -e "${GREEN}[domain]${RESET} $*"; }
warn() { echo -e "${YELLOW}[domain]${RESET} $*"; }
die()  { echo -e "${RED}[domain]${RESET} $*"; exit 1; }

echo ""
echo -e "${BOLD}${CYAN}xpacenode — domain + WSS setup${RESET}"
echo ""

[ "$EUID" -ne 0 ] && die "Please run as root or with sudo."

# ── Args or interactive ───────────────────────────────────────────────────────
DOMAIN="${1:-}"
WS_PORT="${2:-}"

if [ -z "$DOMAIN" ]; then
  echo -e "${BOLD}Domain name for this node (e.g. node.xpacenet.io):${RESET}"
  read -r DOMAIN
fi
[ -z "$DOMAIN" ] && die "Domain name is required."

# Read WS port from .env if not provided
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env"
if [ -z "$WS_PORT" ]; then
  WS_PORT=$(grep -E '^NODE_WS_PORT=' "$ENV_FILE" 2>/dev/null \
    | cut -d= -f2 | tr -d ' ' || echo "4002")
  WS_PORT="${WS_PORT:-4002}"
fi

EMAIL="${CERTBOT_EMAIL:-}"
if [ -z "$EMAIL" ]; then
  echo -e "${BOLD}Email for Let's Encrypt notifications:${RESET}"
  read -r EMAIL
fi
[ -z "$EMAIL" ] && die "Email is required for Let's Encrypt."

echo ""
log "Domain:   $DOMAIN"
log "WS port:  $WS_PORT (proxied at wss://$DOMAIN)"
log "Email:    $EMAIL"
echo ""

# ── Install Nginx + Certbot ───────────────────────────────────────────────────
log "Installing Nginx + Certbot..."
apt-get update -qq
apt-get install -y -qq nginx certbot python3-certbot-nginx
ok "Nginx + Certbot installed"

# ── Nginx config (HTTP first — certbot needs it to validate) ─────────────────
CONF="/etc/nginx/sites-available/xpacenode"
cat > "$CONF" <<NGINX
# ── xpacenode WebSocket proxy ──────────────────────────────────────────────
# Managed by setup-domain.sh — do not edit manually (certbot will update SSL section)

map \$http_upgrade \$connection_upgrade {
    default upgrade;
    ''      close;
}

server {
    listen 80;
    server_name ${DOMAIN};

    # WebSocket → xpacenode
    location / {
        proxy_pass         http://127.0.0.1:${WS_PORT};
        proxy_http_version 1.1;
        proxy_set_header   Upgrade    \$http_upgrade;
        proxy_set_header   Connection \$connection_upgrade;
        proxy_set_header   Host       \$host;
        proxy_set_header   X-Real-IP  \$remote_addr;
        proxy_read_timeout 3600s;
        proxy_send_timeout 3600s;
    }

    # Health check passthrough (optional direct access)
    location /health {
        proxy_pass http://127.0.0.1:3000/health;
    }
}
NGINX

ln -sf "$CONF" /etc/nginx/sites-enabled/xpacenode
rm -f /etc/nginx/sites-enabled/default 2>/dev/null || true

nginx -t && systemctl reload nginx
ok "Nginx configured for $DOMAIN"

# ── Let's Encrypt ─────────────────────────────────────────────────────────────
log "Obtaining SSL certificate..."
certbot --nginx \
  --non-interactive \
  --agree-tos \
  --email "$EMAIL" \
  --domains "$DOMAIN" \
  --redirect

ok "SSL certificate issued for $DOMAIN"

# Auto-renew
systemctl enable --now certbot.timer 2>/dev/null || true
log "Auto-renewal enabled"

# ── Open HTTPS port ───────────────────────────────────────────────────────────
if command -v ufw >/dev/null 2>&1 && ufw status | grep -q "Status: active"; then
  ufw allow 80/tcp  comment "xpacenode HTTP (ACME)" >/dev/null
  ufw allow 443/tcp comment "xpacenode HTTPS/WSS"   >/dev/null
  ok "Ports 80 + 443 open"
fi

# ── Done ──────────────────────────────────────────────────────────────────────
echo ""
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
ok "Domain setup complete ✓"
echo ""
echo -e "  ${BOLD}WebSocket URL:${RESET}   wss://${DOMAIN}"
echo -e "  ${BOLD}Health check:${RESET}    https://${DOMAIN}/health"
echo ""
echo -e "  ${BOLD}Use this in SpaceWork:${RESET}"
echo -e "    VITE_XPACENODE_URL=wss://${DOMAIN}"
echo -e "    — or open: https://your-spacework-url/?node=wss://${DOMAIN}"
echo ""
echo -e "  ${BOLD}Add to other xpacenodes (.env):${RESET}"
echo -e "    BOOTSTRAP_PEERS=/dns4/${DOMAIN}/tcp/443/wss/p2p/<your-peer-id>"
echo ""
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo ""
