# SpaceWork — IPFS Deployment

SpaceWork is deployed as a fully static SPA on IPFS/IPNS. No servers. No proprietary hosting.

## Stack

| Layer | Tool | Licence | What it does |
|---|---|---|---|
| Build | Vite (`base: './'`) | MIT | Relative asset paths — works at any IPFS path |
| Pinning | [Storacha](https://storacha.network) (`@storacha/cli`) | MIT/Apache | Pins content to IPFS + Filecoin — persists even when you're offline |
| IPNS | [Kubo](https://github.com/ipfs/kubo) (`ipfs name publish`) | MIT | Publishes a stable mutable pointer to the latest CID |
| CI/CD | GitHub Actions | — | Builds + pins + updates IPNS on every push to `main` |

---

## How it works

```
Push to main
     │
     ▼
GitHub Actions builds  →  client/dist/
     │
     ▼
storacha up ./client/dist  →  CID  (e.g. bafybei3abc...)
     │                         pinned on IPFS + Filecoin, permanent
     ▼
ipfs name publish /ipfs/<CID>  →  IPNS record updated
     │                              same address, new content
     ▼
https://<IPNS>.ipns.dweb.link/   ← your stable link, share this
```

The URL hash (`#room-name`) is handled entirely in the browser — no server-side routing needed. IPFS gateways serve `index.html` and the app reads the hash. This is why the architecture already works on IPFS without any special config.

---

## First-time setup (run once)

### Prerequisites

- Node.js 18+
- macOS or Linux (or WSL on Windows)

### Run the setup script

```bash
chmod +x scripts/ipfs-setup.sh
./scripts/ipfs-setup.sh
```

The script will:
1. Install `@storacha/cli` (npm global)
2. Install Kubo (the IPFS node binary)
3. Walk you through Storacha login + space creation
4. Generate a CI agent keypair and delegation proof
5. Generate a persistent Ed25519 IPNS signing key
6. Print all three secrets to add to GitHub

### Add secrets to GitHub

Go to: **Settings → Secrets and variables → Actions → New repository secret**

| Secret name | What it is |
|---|---|
| `STORACHA_PRINCIPAL` | CI agent private key (signs upload requests) |
| `STORACHA_PROOF` | Delegation granting the agent upload rights to your space |
| `IPNS_KEY_B64` | Base64-encoded Ed25519 key for IPNS publishing (optional but recommended) |

`IPNS_KEY_B64` is optional. Without it, each deploy gets a new immutable CID. With it, you also get one stable IPNS address that updates on every deploy.

---

## Deploying

### Automatic (recommended)

Just push to `main`. The workflow runs automatically.

```bash
git push origin main
```

Check the **Actions** tab → **Deploy to IPFS** → job summary for the CID and gateway links.

### Manual trigger

Go to **Actions → Deploy to IPFS → Run workflow**.

---

## Accessing the deployed app

After the first deploy, the job summary shows:

```
CID:  bafybei3abc...
IPNS: k51qzi5uqu...

Gateways:
- https://bafybei3abc.ipfs.dweb.link/   ← this build (immutable)
- https://k51qzi5uqu.ipns.dweb.link/    ← always latest (updates on each deploy)
```

**Share the IPNS link.** It stays the same forever. The CID link is useful for pinning a specific version.

### Room links

Room IDs come from the URL hash. Share these with teammates:

```
https://k51qzi5uqu.ipns.dweb.link/#main          default room
https://k51qzi5uqu.ipns.dweb.link/#team-design    design team room
https://k51qzi5uqu.ipns.dweb.link/#eng-standup    engineering room
```

---

## Adding a custom domain (optional)

If you have a domain, you can map it to your IPFS content using DNSLink. Add a DNS TXT record:

```
_dnslink.yourspace.com   TXT   "dnslink=/ipns/k51qzi5uqu..."
```

Then enable IPFS on your domain via Cloudflare (free): **DNS → Add record → TXT**.

Your app is then accessible at `https://yourspace.com/` via Cloudflare's IPFS gateway, and still fully on IPFS.

---

## Upgrading the IPNS key to a self-hosted node (future)

Right now IPNS records are published from GitHub Actions — that's fine for now. When you want full sovereignty:

1. Set up a Kubo daemon on a VPS (Hetzner CX11 = ~€4/mo)
2. Copy your `spacework` key to the node: `scp ~/.ipfs/keystore/spacework root@yourserver:~/.ipfs/keystore/`
3. Run `ipfs name publish` from the VPS after each deploy

The IPNS address stays the same — it's tied to the key, not the machine.

---

## Tooling versions pinned

| Tool | Version |
|---|---|
| Kubo | v0.32.1 |
| @storacha/cli | latest at install time |
| Node.js (CI) | 20 |
