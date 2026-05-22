import { AVATAR_PRESETS } from '../player/avatar.js'

const hex = n => '#' + n.toString(16).padStart(6, '0')

/**
 * AvatarPicker — full-screen modal for choosing an avatar preset.
 * Instantiate once, then call .show() / .hide().
 * onSelect(presetId) is called immediately when a card is clicked.
 */
export class AvatarPicker {
  constructor (onSelect) {
    this._onSelect = onSelect
    this._selected = parseInt(localStorage.getItem('spaceAvatarId') ?? '0', 10)
    this._el = this._build()
    document.body.appendChild(this._el)
  }

  show () {
    this._el.classList.remove('ap-hidden')
    this._sync()
  }
  hide () { this._el.classList.add('ap-hidden') }
  getSelected () { return this._selected }

  // ── DOM builder ──────────────────────────────────────────────────────────

  _build () {
    const wrap = document.createElement('div')
    wrap.id = 'avatar-picker'
    wrap.className = 'ap-hidden'
    wrap.innerHTML = `
      <div class="ap-panel">
        <div class="ap-head">
          <span class="ap-title">Choose Your Avatar</span>
          <button class="ap-close" aria-label="Close">✕</button>
        </div>
        <div class="ap-grid">
          ${AVATAR_PRESETS.map(p => this._card(p)).join('')}
        </div>
        <p class="ap-hint">Your selection is saved automatically</p>
      </div>
    `
    wrap.querySelector('.ap-close').addEventListener('click', () => this.hide())
    wrap.addEventListener('click', e => { if (e.target === wrap) this.hide() })
    wrap.querySelectorAll('.ap-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.id, 10)
        this._selected = id
        localStorage.setItem('spaceAvatarId', String(id))
        this._sync()
        this._onSelect(id)
      })
    })
    return wrap
  }

  _sync () {
    this._el.querySelectorAll('.ap-card').forEach(c =>
      c.classList.toggle('ap-active', parseInt(c.dataset.id, 10) === this._selected)
    )
  }

  _card (p) {
    const s = hex(p.skin), h = hex(p.hair), o = hex(p.outfit), a = hex(p.accent)
    return `
      <div class="ap-card" data-id="${p.id}" title="${p.label}">
        <div class="ap-fig">
          <svg viewBox="0 0 60 82" xmlns="http://www.w3.org/2000/svg">
            <!-- Hair base -->
            <ellipse cx="30" cy="16" rx="17" ry="14" fill="${h}"/>
            <!-- Head -->
            <circle cx="30" cy="22" r="13" fill="${s}"/>
            <!-- Ears -->
            <ellipse cx="17.5" cy="22" rx="3.5" ry="4.5" fill="${s}"/>
            <ellipse cx="42.5" cy="22" rx="3.5" ry="4.5" fill="${s}"/>
            <!-- Eye whites -->
            <circle cx="25" cy="21" r="2.8" fill="${a}"/>
            <circle cx="35" cy="21" r="2.8" fill="${a}"/>
            <!-- Pupils -->
            <circle cx="25" cy="21" r="1.6" fill="#111"/>
            <circle cx="35" cy="21" r="1.6" fill="#111"/>
            <!-- Neck -->
            <rect x="26.5" y="34" width="7" height="5" rx="2" fill="${s}"/>
            <!-- Shoulders -->
            <ellipse cx="14" cy="41" rx="7" ry="5" fill="${o}"/>
            <ellipse cx="46" cy="41" rx="7" ry="5" fill="${o}"/>
            <!-- Body -->
            <rect x="14" y="39" width="32" height="24" rx="6" fill="${o}"/>
            <!-- Chest accent -->
            <rect x="22" y="44" width="16" height="5" rx="2" fill="${a}" opacity="0.75"/>
            <!-- Belt -->
            <rect x="14" y="59" width="32" height="4" rx="2" fill="#111" opacity="0.55"/>
            <!-- Arms -->
            <rect x="5"  y="40" width="10" height="20" rx="5" fill="${o}"/>
            <rect x="45" y="40" width="10" height="20" rx="5" fill="${o}"/>
            <!-- Hands -->
            <circle cx="10" cy="62" r="5" fill="${s}"/>
            <circle cx="50" cy="62" r="5" fill="${s}"/>
            <!-- Legs -->
            <rect x="16" y="62" width="11" height="14" rx="4" fill="${o}"/>
            <rect x="33" y="62" width="11" height="14" rx="4" fill="${o}"/>
            <!-- Boots -->
            <rect x="15" y="73" width="13" height="6" rx="2" fill="#111"/>
            <rect x="32" y="73" width="13" height="6" rx="2" fill="#111"/>
          </svg>
        </div>
        <div class="ap-label">${p.label}</div>
        <div class="ap-tick">✓</div>
      </div>
    `
  }
}
