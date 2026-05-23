/**
 * ProximityVoice — spatial audio + talking detection for SpaceWork.
 *
 * Distance model (matches a real open-plan office):
 *   0 – HEAR_NEAR  : full volume (same desk / same room)
 *   HEAR_NEAR – HEAR_FAR : linear fade
 *   > HEAR_FAR      : silent
 *
 * Audio pipeline per remote peer:
 *   MediaStreamTrack → MediaStreamSource → AnalyserNode
 *                                        → GainNode → AudioContext.destination
 *
 * The GainNode target is updated each frame via setTargetAtTime (smooth,
 * no clicks). The AnalyserNode drives the isTalking() indicator.
 *
 * Pending-track re-keying:
 *   WebRTC media tracks can arrive before the identity handshake (intro) is
 *   complete. Entries stored under a wire ID are re-keyed to the stable
 *   identityId in update() once the sync layer resolves them.
 */

const HEAR_NEAR    = 8     // metres — full volume inside this radius
const HEAR_FAR     = 18    // metres — completely silent outside this radius
const GAIN_SPEED   = 0.08  // time-constant for gain smoothing (seconds)
const TALK_THRESH  = 12    // 0-255 RMS threshold for "talking" detection

export class ProximityVoice {
  constructor () {
    this._ctx          = null          // AudioContext
    this._stream       = null          // local MediaStream (mic)
    this._gains        = new Map()     // identityId → { gainNode, sourceNode, analyser }
    this._talking      = new Set()     // identityIds currently talking (+ 'self')
    this._selfAnalyser = null          // AnalyserNode for local mic level
    this._selfBuf      = null          // Uint8Array for self analyser
    this._muted        = false
    this._active       = false
    this._onStateChange  = null
    this._onTalkChange   = null        // callback(Set<identityId>) on change
    this._syncRef        = null        // stored for pending re-keying
  }

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  /**
   * Request microphone, add local track to the room, and start listening
   * for remote tracks.  Safe to call multiple times — no-ops if already active.
   * @param {object} sync  — spaceSync instance
   * @returns {boolean} true if mic was granted
   */
  async start (sync) {
    if (this._active) return true
    this._syncRef = sync
    try {
      // Wrap getUserMedia in a 15 s timeout so "Connecting…" never hangs
      // if the browser permission prompt is ignored or slow.
      const micTimeout = new Promise((_, rej) =>
        setTimeout(() => rej(new Error('mic permission timed out')), 15_000)
      )
      this._stream = await Promise.race([
        navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: true, noiseSuppression: true, sampleRate: 48000 },
          video: false,
        }),
        micTimeout,
      ])
      this._ctx    = new AudioContext()
      this._active = true

      // Local mic analyser — to detect when WE are talking (no playback)
      this._selfAnalyser = this._ctx.createAnalyser()
      this._selfAnalyser.fftSize = 256
      this._selfBuf = new Uint8Array(this._selfAnalyser.frequencyBinCount)
      const localSrc = this._ctx.createMediaStreamSource(this._stream)
      localSrc.connect(this._selfAnalyser)
      // intentionally NOT connecting to destination (no mic monitoring)

      // Send our mic track to all current + future remote peers
      const [track] = this._stream.getAudioTracks()
      sync.addVoiceTrack(track, this._stream)

      // Receive audio from remote peers.
      // identityId may be a wire fallback if intro hasn't arrived yet —
      // update() re-keys those entries once the sync layer resolves them.
      sync.onVoiceTrack((track, stream, identityId, wirePeerId) => {
        if (track.kind !== 'audio') return
        this._addPeerTrack(identityId, track, wirePeerId)
      })

      this._notify()
      return true
    } catch (err) {
      console.warn('[ProximityVoice] mic access denied or unavailable:', err.message)
      return false
    }
  }

  _addPeerTrack (identityId, track, wirePeerId) {
    const src      = this._ctx.createMediaStreamSource(new MediaStream([track]))
    const gain     = this._ctx.createGain()
    const analyser = this._ctx.createAnalyser()
    analyser.fftSize = 256
    gain.gain.value  = 0     // start silent — proximity update sets it

    src.connect(analyser)
    src.connect(gain)
    gain.connect(this._ctx.destination)

    this._gains.set(identityId, {
      gainNode:   gain,
      sourceNode: src,
      analyser,
      buf:        new Uint8Array(analyser.frequencyBinCount),
      wirePeerId: wirePeerId ?? identityId,
    })
  }

  stop () {
    this._stream?.getTracks().forEach(t => t.stop())
    this._gains.forEach(({ gainNode, sourceNode }) => {
      try { sourceNode.disconnect(); gainNode.disconnect() } catch { /* already gone */ }
    })
    this._gains.clear()
    this._talking.clear()
    this._ctx?.close()
    this._active = false
    this._syncRef = null
    this._notify()
    this._notifyTalk()
  }

  // ── Per-frame update ──────────────────────────────────────────────────────

  /**
   * Call every 50 ms.
   * 1. Re-keys any entries stored under a temporary wire ID.
   * 2. Adjusts gain based on distance.
   * 3. Updates the talking indicator set.
   *
   * @param {{ x:number, z:number }} localPos
   * @param {Map<string, THREE.Object3D>} peerAvatars  — identityId → avatar
   */
  update (localPos, peerAvatars) {
    if (!this._active || !this._ctx) return

    // ── Re-key any entries that were stored under a wire fallback ────────────
    if (this._syncRef) {
      this._gains.forEach((entry, key) => {
        if (key.length !== 64) {  // wire IDs are shorter than 64-char Ed25519 hex
          const resolved = this._syncRef.wireToIdentityId(key)
          if (resolved && resolved !== key) {
            this._gains.set(resolved, entry)
            this._gains.delete(key)
          }
        }
      })
    }

    // ── Self talking detection ────────────────────────────────────────────────
    const prevTalking = new Set(this._talking)
    if (this._selfAnalyser && !this._muted) {
      this._selfAnalyser.getByteFrequencyData(this._selfBuf)
      const rms = this._selfBuf.reduce((a, b) => a + b, 0) / this._selfBuf.length
      if (rms > TALK_THRESH) this._talking.add('self')
      else                    this._talking.delete('self')
    } else {
      this._talking.delete('self')
    }

    // ── Remote peer gain + talking detection ─────────────────────────────────
    peerAvatars.forEach((av, identityId) => {
      const entry = this._gains.get(identityId)
      if (!entry) return

      // Distance-based gain
      const dx   = av.position.x - localPos.x
      const dz   = av.position.z - localPos.z
      const dist = Math.sqrt(dx * dx + dz * dz)
      const vol  = dist <= HEAR_NEAR ? 1
                 : dist >= HEAR_FAR  ? 0
                 : 1 - (dist - HEAR_NEAR) / (HEAR_FAR - HEAR_NEAR)
      entry.gainNode.gain.setTargetAtTime(vol, this._ctx.currentTime, GAIN_SPEED)

      // Talking detection from remote audio level
      entry.analyser.getByteFrequencyData(entry.buf)
      const rms = entry.buf.reduce((a, b) => a + b, 0) / entry.buf.length
      if (rms > TALK_THRESH) this._talking.add(identityId)
      else                    this._talking.delete(identityId)
    })

    // Fire callback only if set changed
    let changed = prevTalking.size !== this._talking.size
    if (!changed) {
      for (const id of this._talking) {
        if (!prevTalking.has(id)) { changed = true; break }
      }
    }
    if (changed) this._notifyTalk()
  }

  // ── Peer lifecycle ────────────────────────────────────────────────────────

  removePeer (identityId) {
    const entry = this._gains.get(identityId)
    if (entry) {
      try { entry.sourceNode.disconnect(); entry.gainNode.disconnect() } catch { /* ok */ }
      this._gains.delete(identityId)
    }
    this._talking.delete(identityId)
  }

  // ── Mute control ──────────────────────────────────────────────────────────

  toggleMute () { this.setMuted(!this._muted); return this._muted }

  setMuted (muted) {
    this._muted = muted
    this._stream?.getAudioTracks().forEach(t => { t.enabled = !muted })
    this._notify()
  }

  // ── State ─────────────────────────────────────────────────────────────────

  get active ()    { return this._active }
  get muted  ()    { return this._muted  }

  /** Returns true if identityId (or 'self') is currently detected as talking. */
  isTalking (identityId) { return this._talking.has(identityId) }

  /** Returns the Set of all currently-talking identityIds (including 'self'). */
  get talkingPeers () { return this._talking }

  onStateChange (cb)  { this._onStateChange = cb }
  onTalkChange  (cb)  { this._onTalkChange  = cb }

  _notify     () { this._onStateChange?.({ active: this._active, muted: this._muted }) }
  _notifyTalk () { this._onTalkChange?.(this._talking) }

  /** World radius inside which a peer is audible — used for UI indicators. */
  static get HEAR_FAR () { return HEAR_FAR }
}
