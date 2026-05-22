/**
 * ProximityVoice — spatial audio for SpaceWork.
 *
 * Distance model (matches a real open-plan office):
 *   0 – HEAR_NEAR  : full volume (same desk / same room)
 *   HEAR_NEAR – HEAR_FAR : linear fade
 *   > HEAR_FAR      : silent
 *
 * Audio pipeline per remote peer:
 *   MediaStreamTrack → MediaStreamSource → GainNode → AudioContext.destination
 *
 * The GainNode target is updated each frame via setTargetAtTime (smooth,
 * no clicks).  Muting the local track disables transmission without
 * disconnecting the peer connection.
 */

const HEAR_NEAR  = 8    // metres — full volume inside this radius
const HEAR_FAR   = 18   // metres — completely silent outside this radius
const GAIN_SPEED = 0.08 // time-constant for gain smoothing (seconds)

export class ProximityVoice {
  constructor () {
    this._ctx    = null          // AudioContext
    this._stream = null          // local MediaStream (mic)
    this._gains  = new Map()     // peerId → { gainNode, sourceNode }
    this._muted  = false
    this._active = false
    this._onStateChange = null   // optional callback(state)
  }

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  /**
   * Request microphone, add local track to the room, and start listening
   * for remote tracks.  Safe to call multiple times — no-ops if already active.
   * @param {object} sync  — spaceSync instance (has addVoiceTrack / onVoiceTrack)
   * @returns {boolean} true if mic was granted
   */
  async start (sync) {
    if (this._active) return true
    try {
      this._stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, sampleRate: 48000 },
        video: false,
      })
      this._ctx    = new AudioContext()
      this._active = true

      // Send our mic track to all current + future remote peers
      const [track] = this._stream.getAudioTracks()
      sync.addVoiceTrack(track, this._stream)

      // Receive audio from remote peers
      sync.onVoiceTrack((track, stream, peerId) => {
        if (track.kind !== 'audio') return
        const src  = this._ctx.createMediaStreamSource(new MediaStream([track]))
        const gain = this._ctx.createGain()
        gain.gain.value = 0   // start silent — proximity update sets it
        src.connect(gain)
        gain.connect(this._ctx.destination)
        this._gains.set(peerId, { gainNode: gain, sourceNode: src })
      })

      this._notify()
      return true
    } catch (err) {
      console.warn('[ProximityVoice] mic access denied or unavailable:', err.message)
      return false
    }
  }

  stop () {
    this._stream?.getTracks().forEach(t => t.stop())
    this._gains.forEach(({ gainNode, sourceNode }) => {
      try { sourceNode.disconnect(); gainNode.disconnect() } catch { /* already gone */ }
    })
    this._gains.clear()
    this._ctx?.close()
    this._active = false
    this._notify()
  }

  // ── Per-frame update ──────────────────────────────────────────────────────

  /**
   * Adjust gain for every connected peer based on their distance.
   * Call this every frame (or at least every 50ms in the position broadcast loop).
   *
   * @param {{ x:number, z:number }} localPos
   * @param {Map<string, THREE.Object3D>} peerAvatars  — peerId → avatar group
   */
  update (localPos, peerAvatars) {
    if (!this._active || !this._ctx) return
    peerAvatars.forEach((av, peerId) => {
      const entry = this._gains.get(peerId)
      if (!entry) return
      const dx   = av.position.x - localPos.x
      const dz   = av.position.z - localPos.z
      const dist = Math.sqrt(dx * dx + dz * dz)
      const vol  = dist <= HEAR_NEAR ? 1
                 : dist >= HEAR_FAR  ? 0
                 : 1 - (dist - HEAR_NEAR) / (HEAR_FAR - HEAR_NEAR)
      entry.gainNode.gain.setTargetAtTime(vol, this._ctx.currentTime, GAIN_SPEED)
    })
  }

  // ── Peer lifecycle ────────────────────────────────────────────────────────

  removePeer (peerId) {
    const entry = this._gains.get(peerId)
    if (entry) {
      try { entry.sourceNode.disconnect(); entry.gainNode.disconnect() } catch { /* ok */ }
      this._gains.delete(peerId)
    }
  }

  // ── Mute control ──────────────────────────────────────────────────────────

  toggleMute () {
    this.setMuted(!this._muted)
    return this._muted
  }

  setMuted (muted) {
    this._muted = muted
    this._stream?.getAudioTracks().forEach(t => { t.enabled = !muted })
    this._notify()
  }

  // ── State ─────────────────────────────────────────────────────────────────

  get active () { return this._active }
  get muted  () { return this._muted  }

  /** Register a callback fired whenever state changes (active, muted). */
  onStateChange (cb) { this._onStateChange = cb }

  _notify () {
    this._onStateChange?.({ active: this._active, muted: this._muted })
  }

  /** World radius inside which a peer is audible — used for UI indicators. */
  static get HEAR_FAR () { return HEAR_FAR }
}
