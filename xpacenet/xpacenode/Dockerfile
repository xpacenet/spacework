# ── Stage 1: install dependencies ─────────────────────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /build
COPY package.json ./
# npm install (no lockfile yet — lockfile generated on first build)
RUN npm install --omit=dev

# ── Stage 2: lean runtime image ────────────────────────────────────────────────
FROM node:22-alpine AS runtime

# Security: non-root user
RUN addgroup -g 1001 -S xpacenode \
 && adduser  -u 1001 -S xpacenode -G xpacenode

WORKDIR /app

# Copy deps from stage 1
COPY --from=deps /build/node_modules ./node_modules

# Copy source
COPY src/ ./src/
COPY package.json ./

# Data volume (peer identity + routing state)
RUN mkdir -p /data && chown xpacenode:xpacenode /data

USER xpacenode
VOLUME ["/data"]

EXPOSE 4001 4002 3000

# Health check — API must respond within 5 s
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget -q -O- http://localhost:3000/health || exit 1

CMD ["node", "src/index.js"]
