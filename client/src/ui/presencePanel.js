/**
 * PresencePanel — live roster of everyone in the building.
 *
 * Shows each user's name, current zone, and a colour dot matching their
 * avatar preset.  Clicking a peer's row navigates the local player to them.
 *
 * Zone colours mirror the minimap palette so the UI feels consistent.
 */

import { AVATAR_PRESETS }  from '../player/avatar.js'
import { getZone }         from '../player/collision.js'

const ZONE_COLOR = {
  OUTSIDE:     '#88cc66',
  LOBBY:       '#aaaacc',
  OPS:         '#ffaa44',
  FUN:         '#44ffaa',
  DESIGN:      '#ff6ba0',
  ENGINEERING: '#44aaff',
}
const ZONE_LABEL = {
  OUTSIDE:     'Outside',
  LOBBY:       'Lobby',
  OPS:         'Ops',
  FUN:         'Fun',
  DESIGN:      'Design',
  ENGINEERING: 'Engineering',
}

export class PresencePanel {
  /**
   * @param {Function} onNavigate  — called with { x, z } when user clicks "go to"
   */
  constructor (onNavigate) {
    this._onNavigate = onNavigate
    this._peers      = new Map()   // peerId → { username, presetId, x, z, zone }
    this._self       = { username: '', presetId: 0, zone: 'OUTSIDE' }
    this._el         = this._build()
    document.body.appendChild(this._el)
    this._render()
  }

  // ── Public API ─────────────────────────────────────────────────────────────

  setSelf (username, presetId, zone) {
    this._self = { username, presetId, zone: zone || 'OUTSIDE' }
    this._render()
  }

  addPeer (peerId, username, presetId = 0) {
    this._peers.set(peerId, { username, presetId, x: 0, z: 0, zone: 'OUTSIDE' })
    this._render()
  }

  movePeer (peerId, x, z) {
    const p = this._peers.get(peerId)
    if (!p) return
    p.x = x; p.z = z
    p.zone = getZone({ x, z })
    this._render()
  }

  updatePeerPreset (peerId, presetId) {
    const p = this._peers.get(peerId)
    if (!p) return
    p.presetId = presetId
    this._render()
  }

  removePeer (peerId) {
    this._peers.delete(peerId)
    this._render()
  }

  updateSelfZone (zone) {
    this._self.zone = zone || 'OUTSIDE'
    this._render()
  }

  // ── DOM ────────────────────────────────────────────────────────────────────

  _build () {
    const el = document.createElement('div')
    el.id = 'presence-panel'
    el.innerHTML = `
      <div class="pp-header">
        <span class="pp-title">WHO'S HERE</span>
        <span class="pp-count" id="pp-count">1</span>
      </div>
      <div class="pp-list" id="pp-list"></div>
    `
    return el
  }

  _render () {
    const list  = this._el.querySelector('#pp-list')
    const count = this._el.querySelector('#pp-count')
    if (!list) return

    const total = 1 + this._peers.size
    count.textContent = total

    const rows = []

    // Local user always first
    rows.push(this._row({
      username:  this._self.username || 'You',
      presetId:  this._self.presetId,
      zone:      this._self.zone,
      isSelf:    true,
    }))

    // Sort peers by zone then name
    const sorted = [...this._peers.entries()].sort((a, b) => {
      const za = a[1].zone, zb = b[1].zone
      if (za !== zb) return za.localeCompare(zb)
      return a[1].username.localeCompare(b[1].username)
    })

    sorted.forEach(([peerId, p]) => {
      rows.push(this._row({
        username: p.username,
        presetId: p.presetId,
        zone:     p.zone,
        isSelf:   false,
        onClick:  () => this._onNavigate?.({ x: p.x, z: p.z }),
      }))
    })

    list.innerHTML = rows.join('')

    // Re-attach click listeners (innerHTML wipes them)
    list.querySelectorAll('.pp-row[data-idx]').forEach(row => {
      const idx = parseInt(row.dataset.idx, 10)
      const entry = sorted[idx]
      if (entry) row.addEventListener('click', () => this._onNavigate?.({ x: entry[1].x, z: entry[1].z }))
    })
  }

  _row ({ username, presetId, zone, isSelf, onClick }) {
    const preset    = AVATAR_PRESETS[presetId] ?? AVATAR_PRESETS[0]
    const dotColor  = '#' + preset.outfit.toString(16).padStart(6, '0')
    const zoneColor = ZONE_COLOR[zone] ?? '#888'
    const zoneLabel = ZONE_LABEL[zone] ?? zone

    return `
      <div class="pp-row ${isSelf ? 'pp-self' : 'pp-peer'}"
           ${!isSelf ? `data-idx="${username}"` : ''}>
        <span class="pp-dot" style="background:${dotColor}"></span>
        <span class="pp-name">${_esc(username)}${isSelf ? ' <span class="pp-you">(you)</span>' : ''}</span>
        <span class="pp-zone" style="color:${zoneColor}">${zoneLabel}</span>
        ${!isSelf ? '<span class="pp-go" title="Walk to this person">→</span>' : ''}
      </div>
    `
  }
}

function _esc (str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}
