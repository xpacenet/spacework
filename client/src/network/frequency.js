/**
 * Frequency — the resonance signature of a Reality.
 *
 * A frequency is a cryptographic identity derived from a founding seed
 * (e.g. root node ID + genesis timestamp). Nodes that share a frequency
 * exist in the same reality and can perceive each other's state.
 *
 * Nodes at different frequencies are in parallel realities — invisible
 * to each other unless a bridge node explicitly spans both.
 *
 * Frequencies can "harmonise" — two swarms decide (by majority) to
 * collapse into one shared reality. The resulting frequency is a
 * deterministic merge of both.
 */

// ── Deterministic hash (djb2-xor variant, no dependencies) ───────────────
function hash(...parts) {
  const s = parts.join('\x00')
  let h = 5381
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(33, h) ^ s.charCodeAt(i)) >>> 0
  }
  return h.toString(36).padStart(7, '0')
}

export class Frequency {
  /**
   * @param {string} seed   founding node ID or any entropy string
   * @param {number} epoch  logical genesis time (default: 0)
   */
  constructor(seed, epoch = 0) {
    this.id        = hash(seed, String(epoch))
    this.seed      = seed
    this.epoch     = epoch
    this.resonance = 1.0   // 0–1  strength of consensus in this frequency
  }

  /** Advance the logical clock by one tick */
  tick() {
    this.epoch++
    return this
  }

  /**
   * Two frequencies "harmonise" when their resonance overlap exceeds
   * a threshold — meaning a majority of both swarms agree to merge.
   *
   * @param {Frequency} other
   * @param {number}    threshold  0–1, default 0.51 (simple majority)
   */
  harmonisesWith(other, threshold = 0.51) {
    return this.resonance >= threshold && other.resonance >= threshold
  }

  /**
   * Merge two frequencies into one deterministic new frequency.
   * The lower-id always comes first to ensure commutativity (A∪B = B∪A).
   */
  static merge(freqA, freqB) {
    const [lo, hi] = freqA.id < freqB.id ? [freqA, freqB] : [freqB, freqA]
    return new Frequency(hash(lo.id, hi.id), Math.max(lo.epoch, hi.epoch))
  }

  toString() { return `freq:${this.id}@${this.epoch}` }
}
