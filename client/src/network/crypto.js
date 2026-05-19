/**
 * SpaceWork E2E Encryption — Web Crypto API (P-256 ECDH + AES-256-GCM)
 *
 * How it works:
 *  - Every peer generates an ECDH keypair on first connect.
 *  - To send a private message to peer B:
 *    1. Derive a shared AES key from (my private key × B's public key).
 *    2. Encrypt with AES-GCM (random IV every message).
 *    3. Send { ciphertext, iv, senderId } over the P2P channel.
 *  - Only peer B can derive the same shared key (ECDH is symmetric).
 *  - The P2P network sees only encrypted bytes — never plaintext.
 *
 * Thread-model: all operations are async (Web Crypto is always async).
 * Concurrent encryptions/decryptions are non-blocking Promise chains.
 */

const ECDH  = { name: 'ECDH', namedCurve: 'P-256' }
const AES   = { name: 'AES-GCM', length: 256 }
const ENC   = new TextEncoder()
const DEC   = new TextDecoder()

// ── Key generation ─────────────────────────────────────────────────────────

/**
 * Generate a fresh ECDH keypair for a peer.
 * @returns {{ privateKey: CryptoKey, publicKey: CryptoKey, exported: string }}
 */
export async function generateKeyPair() {
  const pair = await crypto.subtle.generateKey(ECDH, true, ['deriveKey'])
  const exported = await exportPublicKey(pair.publicKey)
  return { privateKey: pair.privateKey, publicKey: pair.publicKey, exported }
}

/** Export a CryptoKey to a base64 string (for wire transmission) */
export async function exportPublicKey(publicKey) {
  const raw = await crypto.subtle.exportKey('raw', publicKey)
  return btoa(String.fromCharCode(...new Uint8Array(raw)))
}

/** Import a base64 public key string back to a CryptoKey */
export async function importPublicKey(b64) {
  const raw = Uint8Array.from(atob(b64), c => c.charCodeAt(0))
  return crypto.subtle.importKey('raw', raw, ECDH, true, [])
}

// ── Shared key derivation ──────────────────────────────────────────────────

/**
 * Derive a symmetric AES key from an ECDH keypair exchange.
 * The same key is derived regardless of which side is "sender" or "recipient".
 */
export async function deriveSharedKey(myPrivateKey, theirPublicKey) {
  return crypto.subtle.deriveKey(
    { name: 'ECDH', public: theirPublicKey },
    myPrivateKey,
    AES,
    false,        // not extractable — stays in memory only
    ['encrypt', 'decrypt']
  )
}

// ── Message encryption / decryption ───────────────────────────────────────

/**
 * Encrypt a message string for a specific recipient.
 * @param {string}     plaintext
 * @param {CryptoKey}  myPrivateKey   sender's ECDH private key
 * @param {CryptoKey}  theirPublicKey recipient's ECDH public key
 * @returns {{ iv: Uint8Array, ciphertext: ArrayBuffer }}
 */
export async function encryptMessage(plaintext, myPrivateKey, theirPublicKey) {
  const sharedKey  = await deriveSharedKey(myPrivateKey, theirPublicKey)
  const iv         = crypto.getRandomValues(new Uint8Array(12))
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    sharedKey,
    ENC.encode(plaintext)
  )
  return { iv, ciphertext }
}

/**
 * Decrypt a message received from a specific sender.
 * @param {{ iv: Uint8Array, ciphertext: ArrayBuffer }} payload
 * @param {CryptoKey}  myPrivateKey    recipient's ECDH private key
 * @param {CryptoKey}  theirPublicKey  sender's ECDH public key
 * @returns {string} plaintext
 */
export async function decryptMessage({ iv, ciphertext }, myPrivateKey, theirPublicKey) {
  const sharedKey = await deriveSharedKey(myPrivateKey, theirPublicKey)
  const plainBuf  = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    sharedKey,
    ciphertext
  )
  return DEC.decode(plainBuf)
}

/**
 * Convenience: encrypt + immediately decrypt to verify round-trip.
 * Useful in tests and for self-diagnostics.
 */
export async function roundTrip(plaintext, aliceKeys, bobKeys) {
  const encrypted = await encryptMessage(plaintext, aliceKeys.privateKey, bobKeys.publicKey)
  const decrypted = await decryptMessage(encrypted,  bobKeys.privateKey,  aliceKeys.publicKey)
  return decrypted
}
