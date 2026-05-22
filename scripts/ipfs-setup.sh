#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# SpaceWork — one-time IPFS deployment setup
#
# Run this once on your machine. It installs the tools, authenticates,
# and prints the secrets you need to add to GitHub.
#
# Usage:
#   chmod +x scripts/ipfs-setup.sh
#   ./scripts/ipfs-setup.sh
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

step() { echo -e "\n${CYAN}▶ $1${NC}"; }
ok()   { echo -e "${GREEN}✓ $1${NC}"; }
note() { echo -e "${YELLOW}  $1${NC}"; }

echo ""
echo "  SpaceWork IPFS Setup"
echo "  ─────────────────────"

# ── 1. Install Storacha CLI ───────────────────────────────────────────────────
step "Installing Storacha CLI (@storacha/cli)"
if command -v storacha &>/dev/null; then
  ok "storacha already installed ($(storacha --version 2>/dev/null || echo 'version unknown'))"
else
  npm install -g @storacha/cli
  ok "Storacha CLI installed"
fi

# ── 2. Install Kubo (go-ipfs) ─────────────────────────────────────────────────
step "Checking for Kubo (go-ipfs)"
if command -v ipfs &>/dev/null; then
  ok "Kubo already installed ($(ipfs --version))"
else
  KUBO_VERSION="v0.32.1"
  OS="$(uname -s | tr '[:upper:]' '[:lower:]')"
  ARCH="amd64"
  if [ "$(uname -m)" = "arm64" ]; then ARCH="arm64"; fi

  note "Downloading Kubo ${KUBO_VERSION} for ${OS}/${ARCH}..."
  TMP=$(mktemp -d)
  curl -sL "https://dist.ipfs.tech/kubo/${KUBO_VERSION}/kubo_${KUBO_VERSION}_${OS}-${ARCH}.tar.gz" \
    -o "${TMP}/kubo.tar.gz"
  tar -xzf "${TMP}/kubo.tar.gz" -C "${TMP}"
  if [ "$OS" = "darwin" ]; then
    sudo cp "${TMP}/kubo/ipfs" /usr/local/bin/ipfs
  else
    sudo bash "${TMP}/kubo/install.sh"
  fi
  rm -rf "$TMP"
  ok "Kubo installed ($(ipfs --version))"
fi

# Initialise Kubo if not already done
if [ ! -d "$HOME/.ipfs" ]; then
  ipfs init --profile=lowpower
  ok "IPFS node initialised"
fi

# ── 3. Storacha: login + create space ─────────────────────────────────────────
step "Storacha: login"
note "This will send a verification email to your address."
echo ""
read -rp "  Enter your email: " EMAIL
storacha login "$EMAIL"
echo ""
note "Check your email and click the link, then press Enter to continue..."
read -r

step "Storacha: create storage space"
note "Creating a space called 'spacework'..."
storacha space create spacework
ok "Space created"

# ── 4. Storacha: generate CI agent key ────────────────────────────────────────
step "Storacha: generate CI signing key"
note "This key is only used in CI — it's separate from your login."

KEY_JSON=$(storacha key create --json)
AGENT_DID=$(echo "$KEY_JSON" | node -e "process.stdin.resume();let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>console.log(JSON.parse(d).did))")
AGENT_KEY=$(echo "$KEY_JSON" | node -e "process.stdin.resume();let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>console.log(JSON.parse(d).key))")

ok "CI agent DID: $AGENT_DID"

step "Storacha: create delegation proof for CI agent"
PROOF=$(storacha delegation create "$AGENT_DID" \
  -c space/blob/add \
  -c space/index/add \
  -c filecoin/offer \
  -c upload/add \
  --base64)

ok "Delegation proof generated"

# ── 5. Generate IPNS key ──────────────────────────────────────────────────────
step "Generate persistent IPNS signing key (Ed25519)"

if ipfs key list | grep -q "^spacework$"; then
  note "Key 'spacework' already exists in your IPFS node"
else
  ipfs key gen spacework --type=ed25519
  ok "IPNS key 'spacework' created"
fi

IPNS_KEY_B64=$(ipfs key export spacework | base64 | tr -d '\n')
IPNS_ADDR=$(ipfs key list -l | awk '/spacework/{print $1}')

ok "IPNS address: $IPNS_ADDR"

# ── 6. Print everything ───────────────────────────────────────────────────────
echo ""
echo "  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "  ${GREEN}Setup complete! Add these secrets to your GitHub repo:${NC}"
echo ""
echo "  Go to: https://github.com/xpacenet/spacework/settings/secrets/actions"
echo ""
echo "  ┌─────────────────────────────────────────────────────────────"
echo "  │  Secret name          Value"
echo "  ├─────────────────────────────────────────────────────────────"
echo "  │  STORACHA_PRINCIPAL   $AGENT_KEY"
echo "  │"
echo "  │  STORACHA_PROOF       $PROOF"
echo "  │"
echo "  │  IPNS_KEY_B64         $IPNS_KEY_B64"
echo "  └─────────────────────────────────────────────────────────────"
echo ""
echo "  Your stable IPNS address (bookmark this):"
echo "  https://${IPNS_ADDR}.ipns.dweb.link/"
echo ""
echo "  Once secrets are added, push to main — GitHub Actions will"
echo "  build, pin to IPFS, and update IPNS automatically."
echo ""
echo "  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
