/**
 * E2E Encryption tests
 *
 * Uses the Web Crypto API (available in Node 18+ via globalThis.crypto).
 * All operations are async — tested with Promise.all for concurrency.
 */

import { describe, it, expect } from 'vitest'
import {
  generateKeyPair,
  exportPublicKey,
  importPublicKey,
  encryptMessage,
  decryptMessage,
  roundTrip,
} from '../network/crypto.js'

// ── Key generation ─────────────────────────────────────────────────────────

describe('generateKeyPair', () => {
  it('produces a privateKey and publicKey', async () => {
    const kp = await generateKeyPair()
    expect(kp.privateKey).toBeTruthy()
    expect(kp.publicKey).toBeTruthy()
  })

  it('exported key is a non-empty string', async () => {
    const { exported } = await generateKeyPair()
    expect(typeof exported).toBe('string')
    expect(exported.length).toBeGreaterThan(0)
  })

  it('two keypairs are different', async () => {
    const [kp1, kp2] = await Promise.all([generateKeyPair(), generateKeyPair()])
    expect(kp1.exported).not.toBe(kp2.exported)
  })

  it('generates 10 keypairs concurrently without error', async () => {
    const pairs = await Promise.all(Array.from({ length: 10 }, generateKeyPair))
    expect(pairs).toHaveLength(10)
    // All exported keys are unique
    const exports = pairs.map(p => p.exported)
    expect(new Set(exports).size).toBe(10)
  })
})

// ── Key export / import round-trip ─────────────────────────────────────────

describe('exportPublicKey / importPublicKey', () => {
  it('exports to a base64 string', async () => {
    const { publicKey } = await generateKeyPair()
    const b64 = await exportPublicKey(publicKey)
    expect(typeof b64).toBe('string')
    // Base64 — only valid chars
    expect(b64).toMatch(/^[A-Za-z0-9+/]+=*$/)
  })

  it('imported key can be used for encryption', async () => {
    const alice = await generateKeyPair()
    const bob   = await generateKeyPair()

    // Export bob's public key and re-import it
    const b64        = await exportPublicKey(bob.publicKey)
    const reimported = await importPublicKey(b64)

    // Should work in a full round-trip
    const { iv, ciphertext } = await encryptMessage('hello', alice.privateKey, reimported)
    const plain = await decryptMessage({ iv, ciphertext }, bob.privateKey, alice.publicKey)
    expect(plain).toBe('hello')
  })
})

// ── Encryption / Decryption ────────────────────────────────────────────────

describe('encryptMessage / decryptMessage', () => {
  it('encrypts and decrypts a simple string', async () => {
    const alice = await generateKeyPair()
    const bob   = await generateKeyPair()
    const plain = await roundTrip('Hello, SpaceWork!', alice, bob)
    expect(plain).toBe('Hello, SpaceWork!')
  })

  it('ciphertext is not equal to plaintext', async () => {
    const alice = await generateKeyPair()
    const bob   = await generateKeyPair()
    const { ciphertext } = await encryptMessage('secret', alice.privateKey, bob.publicKey)
    const bytes = new Uint8Array(ciphertext)
    const asStr = String.fromCharCode(...bytes)
    expect(asStr).not.toBe('secret')
  })

  it('every encryption produces a different ciphertext (random IV)', async () => {
    const alice = await generateKeyPair()
    const bob   = await generateKeyPair()
    const [enc1, enc2] = await Promise.all([
      encryptMessage('same message', alice.privateKey, bob.publicKey),
      encryptMessage('same message', alice.privateKey, bob.publicKey),
    ])
    // IVs should differ
    expect(Buffer.from(enc1.iv).toString('hex')).not.toBe(
      Buffer.from(enc2.iv).toString('hex')
    )
  })

  it('wrong recipient private key cannot decrypt', async () => {
    const alice  = await generateKeyPair()
    const bob    = await generateKeyPair()
    const carol  = await generateKeyPair()
    const enc    = await encryptMessage('for bob only', alice.privateKey, bob.publicKey)

    // Carol tries to decrypt — should throw (AES-GCM tag mismatch)
    await expect(
      decryptMessage(enc, carol.privateKey, alice.publicKey)
    ).rejects.toThrow()
  })

  it('wrong sender public key cannot decrypt', async () => {
    const alice  = await generateKeyPair()
    const bob    = await generateKeyPair()
    const dave   = await generateKeyPair()
    const enc    = await encryptMessage('from alice', alice.privateKey, bob.publicKey)

    await expect(
      decryptMessage(enc, bob.privateKey, dave.publicKey)
    ).rejects.toThrow()
  })

  it('handles empty string', async () => {
    const alice = await generateKeyPair()
    const bob   = await generateKeyPair()
    expect(await roundTrip('', alice, bob)).toBe('')
  })

  it('handles long messages', async () => {
    const alice   = await generateKeyPair()
    const bob     = await generateKeyPair()
    const long    = 'A'.repeat(10_000)
    expect(await roundTrip(long, alice, bob)).toBe(long)
  })

  it('handles unicode / emoji', async () => {
    const alice = await generateKeyPair()
    const bob   = await generateKeyPair()
    const msg   = '🚀 Hello from SpaceWork 🌌 — привет — 日本語'
    expect(await roundTrip(msg, alice, bob)).toBe(msg)
  })
})

// ── Concurrency ────────────────────────────────────────────────────────────

describe('concurrent encryption (100 messages)', () => {
  it('100 simultaneous encryptions all succeed', async () => {
    const alice    = await generateKeyPair()
    const bob      = await generateKeyPair()
    const messages = Array.from({ length: 100 }, (_, i) => `message-${i}`)

    const results = await Promise.all(
      messages.map(m => roundTrip(m, alice, bob))
    )

    results.forEach((plain, i) => {
      expect(plain).toBe(`message-${i}`)
    })
  })

  it('100 different sender keypairs encrypt for same recipient — all decryptable', async () => {
    const bob     = await generateKeyPair()
    const senders = await Promise.all(Array.from({ length: 100 }, generateKeyPair))

    const encrypted = await Promise.all(
      senders.map((s, i) =>
        encryptMessage(`from sender ${i}`, s.privateKey, bob.publicKey)
          .then(enc => ({ enc, sender: s }))
      )
    )

    const decrypted = await Promise.all(
      encrypted.map(({ enc, sender }) =>
        decryptMessage(enc, bob.privateKey, sender.publicKey)
      )
    )

    decrypted.forEach((plain, i) => {
      expect(plain).toBe(`from sender ${i}`)
    })
  })

  it('100 independent keypair generations + round-trips are non-blocking', async () => {
    const pairs = await Promise.all(Array.from({ length: 100 }, generateKeyPair))

    // Each pair encrypts a message for the next peer in the ring
    const ringMessages = await Promise.all(
      pairs.map((kp, i) => {
        const next = pairs[(i + 1) % pairs.length]
        return roundTrip(`ring-msg-${i}`, kp, next)
      })
    )

    ringMessages.forEach((plain, i) => {
      expect(plain).toBe(`ring-msg-${i}`)
    })
  })
})
