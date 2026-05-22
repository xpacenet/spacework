# SpaceWork — Deployment

## Live URL

```
https://xpacenet.github.io/spacework/
```

Deployed automatically on every push to `main`.

---

## How it works

```
Push to main
     │
     ▼
GitHub Actions builds  →  client/dist/
     │
     ├──► GitHub Pages  →  https://xpacenet.github.io/spacework/
     │                      stable, always latest, free
     │
     └──► IPFS CID computed locally (no account needed)
              printed in the job summary
              pin it any time with: ipfs pin add <CID>
```

---

## Room links

Room IDs come from the URL hash. Share these with teammates:

```
https://xpacenet.github.io/spacework/#main
https://xpacenet.github.io/spacework/#team-design
https://xpacenet.github.io/spacework/#eng-standup
```

Hash routing is handled entirely in the browser — no server config needed.

---

## Enable GitHub Pages (one-time, 30 seconds)

The workflow pushes to the `gh-pages` branch. You need to tell GitHub to serve from it:

1. Go to **github.com/xpacenet/spacework/settings/pages**
2. Under **Source**, select **Deploy from a branch**
3. Branch: **gh-pages** / folder: **/ (root)**
4. Click **Save**

That's it. GitHub Pages activates and the URL goes live after the next push.

---

## IPFS (optional, no account needed)

Every build computes the IPFS CID of the dist folder. It appears in the Actions job summary after each deploy:

```
bafybeig3abc...
```

This is the cryptographic hash of the exact content that's live. To pin it to your local IPFS node:

```bash
ipfs pin add bafybeig3abc...
```

Or fetch it via any public gateway:

```
https://bafybeig3abc.ipfs.dweb.link/
```

No Storacha, no Pinata — the CID is just a fact about the content, computed offline.

---

## Custom domain (optional)

Add a `CNAME` file to `client/public/` with your domain:

```
spacework.yourdomain.com
```

Then add a DNS CNAME record pointing to `xpacenet.github.io` and update the Pages settings to use your custom domain. HTTPS is automatic via GitHub.
