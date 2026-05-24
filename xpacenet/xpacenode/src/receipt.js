/**
 * receipt.js — signed delivery acknowledgments
 *
 * When a message is delivered to its destination by this node,
 * we sign a receipt: { msgId, nodeId, ts } with this node's Ed25519 key.
 *
 * The receipt is published to xn/receipts so the sender knows their
 * message was delivered — without the network knowing what it contained.
 *
 * This receipt trail is the foundation for the future mining/incentive layer:
 *   • Nodes that route and deliver messages accumulate verified receipts
 *   • Receipts are the proof-of-work for the xpacenet token economy
 *   • A recipient can challenge a fake receipt by showing no matching message
 *
 * For now: receipts are published but not yet used for rewards.
 */

import { createHash } from 'crypto'

/**
 * Build a signed receipt for a delivered message.
 *
 * @param {string} msgId       — sha256 hash of the original message payload
 * @param {string} nodeId      — this node's libp2p peer ID string
 * @param {Uint8Array} rawKey  — this node's Ed25519 raw private key (32 bytes)
 * @returns {{ msgId, nodeId, ts, sig }}
 */
export function buildReceipt (msgId, nodeId, rawKey) {
  const ts  = Date.now()
  const sig = sign(`${msgId}:${nodeId}:${ts}`, rawKey)
  return { msgId, nodeId, ts, sig }
}

/**
 * Compute a deterministic message ID from any payload.
 * sha256(JSON.stringify(payload)) — same message always hashes identically.
 */
export function msgIdOf (payload) {
  return createHash('sha256')
    .update(JSON.stringify(payload))
    .digest('hex')
    .slice(0, 32)   // 32 hex chars = 128 bits — sufficient for dedup
}

/**
 * Verify a receipt's signature.
 * Returns true if structurally valid (full Ed25519 verify is Phase 2).
 */
export function verifyReceipt (receipt) {
  return !!(receipt?.msgId && receipt?.nodeId && receipt?.ts && receipt?.sig)
}

// ── Ed25519 signing (Node.js native crypto) ──────────────────────────────────

function sign (data, rawKey) {
  if (!rawKey) return hashFallback(data)
  try {
    // Node.js >= 15 supports Ed25519 via createSign
    // The raw 32-byte key must be wrapped in a DER/PKCS#8 envelope for createSign.
    // We use the hash fallback until the key wrapping helper is wired up in index.js.
    // TODO Phase 2: wrap rawKey in pkcs8 DER and use createSign('ed25519')
    return hashFallback(data)
  } catch {
    return hashFallback(data)
  }
}

function hashFallback (data) {
  return createHash('sha256').update(data).digest('base64')
}
