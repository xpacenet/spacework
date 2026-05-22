/**
 * Identity — self-sovereign Ed25519 keypair + display name.
 *
 * Uses the browser's built-in SubtleCrypto (Ed25519). Zero external deps.
 * Keypair is generated once on first visit, stored as JWK in localStorage,
 * and reloaded on every subsequent visit — giving the user a stable PeerID
 * across all sessions on that device.
 *
 * PeerID = lowercase hex of the 32-byte Ed25519 public key (64 chars).
 * This is the user's canonical address in every room they join.
 *
 * API (after calling loadIdentity() once at startup):
 *   .peerId      string   — stable 64-char hex ID
 *   .shortId     string   — last 8 chars (for compact display)
 *   .displayName string   — mutable; persisted via setName()
 *   .isNew       bool     — true on first-ever visit (no stored keypair)
 *   .setName(s)  void     — update display name + persist
 *   .sign(text)  Promise<string>  — hex Ed25519 signature over UTF-8 text
 */

const STORE_KEY = 'sw_id_v1'

// ── helpers ───────────────────────────────────────────────────────────────────
const _hex = bytes =>
  Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('')

// JWK 'x' field is base64url-encoded public key bytes
const _b64urlToBytes = s => {
  const b64 = s.replace(/-/g, '+').replace(/_/g, '/')
  const raw = atob(b64)
  return Uint8Array.from(raw, c => c.charCodeAt(0))
}

// ── Identity class ────────────────────────────────────────────────────────────
class Identity {
  constructor (peerId, displayName, privateKey, isNew) {
    this.peerId      = peerId
    this.displayName = displayName
    this.isNew       = isNew
    this._priv       = privateKey   // CryptoKey, sign-only, never extractable
  }

  get shortId () { return this.peerId.slice(-8) }

  setName (name) {
    this.displayName = name
    _persist()
  }

  /** Returns hex-encoded 64-byte Ed25519 signature over the UTF-8 text. */
  async sign (text) {
    const data = new TextEncoder().encode(text)
    const sig  = await crypto.subtle.sign({ name: 'Ed25519' }, this._priv, data)
    return _hex(new Uint8Array(sig))
  }
}

// ── module state ──────────────────────────────────────────────────────────────
let _id      = null   // current Identity instance
let _privJwk = null   // stored JWK (kept for persistence)

function _persist () {
  if (!_id || !_privJwk) return
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({
      privJwk:     _privJwk,
      displayName: _id.displayName,
    }))
  } catch { /* private-mode or storage full — silently skip */ }
}

// ── public API ────────────────────────────────────────────────────────────────

/**
 * Load (or generate) the user's identity.
 * Must be called once at startup before any sync code runs.
 * Subsequent calls return the cached instance immediately.
 *
 * @returns {Promise<Identity>}
 */
export async function loadIdentity () {
  if (_id) return _id

  // ── Returning user: restore keypair from localStorage ─────────────────────
  const raw = localStorage.getItem(STORE_KEY)
  if (raw) {
    try {
      const { privJwk, displayName } = JSON.parse(raw)

      // Import as sign-only (non-extractable) — private key never leaves memory
      const priv = await crypto.subtle.importKey(
        'jwk', privJwk, { name: 'Ed25519' }, false, ['sign']
      )

      // Public key bytes live in the JWK 'x' field (base64url, 32 bytes)
      const peerId = _hex(_b64urlToBytes(privJwk.x))

      _privJwk = privJwk
      _id      = new Identity(peerId, displayName || '', priv, false)
      return _id
    } catch {
      // Corrupted entry — fall through to generation
      localStorage.removeItem(STORE_KEY)
    }
  }

  // ── First visit: generate a fresh Ed25519 keypair ─────────────────────────
  const kp = await crypto.subtle.generateKey(
    { name: 'Ed25519' },
    true,              // extractable = true so we can export + persist
    ['sign', 'verify']
  )

  // Export once to derive peerId and persist; then use the in-memory CryptoKey
  _privJwk     = await crypto.subtle.exportKey('jwk', kp.privateKey)
  const peerId = _hex(_b64urlToBytes(_privJwk.x))

  _id = new Identity(peerId, '', kp.privateKey, true)
  _persist()    // save keypair + empty name; name written again when user sets it
  return _id
}

/**
 * Synchronous accessor — only valid after loadIdentity() has resolved.
 * @returns {Identity|null}
 */
export function getIdentity () { return _id }

/**
 * Wipe the stored identity (equivalent to "log out + reset").
 * Next page load generates a brand-new keypair.
 */
export function clearIdentity () {
  try { localStorage.removeItem(STORE_KEY) } catch {}
  _id      = null
  _privJwk = null
}
