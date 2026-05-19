/**
 * NetworkMapRenderer — interactive canvas visualisation of the DDHSN.
 *
 * Layout:  force-directed with hierarchy bias.
 *          - Trust edges act as springs (attract children toward parents).
 *          - All nodes repel each other (Coulomb force).
 *          - Reality clusters are drawn as soft glowing regions.
 *
 * Interaction: drag-to-pan, scroll-to-zoom, click-to-inspect.
 *
 * Visibility rules are applied before rendering — private/hidden nodes
 * are excluded, invite-only nodes appear as blurred "unknown" circles.
 */

// ── Reality colour palette (cycles for > 4 realities) ─────────────────────
const PALETTE = [
  { fill: 'rgba(30,80,200,0.09)',  border: '#4466ff', glow: '#2255dd' },
  { fill: 'rgba(0,160,120,0.09)', border: '#00ffcc', glow: '#00ccaa' },
  { fill: 'rgba(130,20,220,0.09)',border: '#aa55ff', glow: '#8833dd' },
  { fill: 'rgba(200,100,0,0.09)', border: '#ff9900', glow: '#dd7700' },
  { fill: 'rgba(0,160,200,0.09)', border: '#00ccff', glow: '#00aadd' },
]

const NODE_COLOR = {
  me:      '#00ffff',
  public:  '#4488ff',
  invite:  '#ffaa00',
  private: '#666688',
  blurred: '#333355',
}

export class NetworkMapRenderer {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {import('../network/visibility.js').VisibilityLayer} visLayer
   * @param {string} myNodeId
   */
  constructor(canvas, visLayer, myNodeId) {
    this.canvas    = canvas
    this.ctx       = canvas.getContext('2d')
    this.vis       = visLayer
    this.myId      = myNodeId

    this._nodes    = []    // layout nodes  { id, x, y, vx, vy, ...meta }
    this._edges    = []    // { fromNode, toNode, type }
    this._realityGroups = new Map()  // freqId → { nodes[], color }

    this._pan      = { x: 0, y: 0 }
    this._zoom     = 1.0
    this._drag     = false
    this._lastMouse= { x: 0, y: 0 }
    this._selected = null
    this._raf      = null
    this._settled  = 0

    this._onSelect = null   // callback(nodeData | null)

    this._bindEvents()
  }

  // ── Public API ────────────────────────────────────────────────────────────

  /**
   * Load the network data visible to the observer.
   * @param {{ nodes: object[], edges: object[] }} mapData  from VisibilityLayer.buildMapFor()
   */
  load(mapData) {
    const { nodes, edges } = mapData
    const W = this.canvas.width
    const H = this.canvas.height
    const existing = new Map(this._nodes.map(n => [n.id, n]))

    // Build/update layout nodes (preserve positions for smooth refreshes)
    this._nodes = nodes.map(n => {
      if (existing.has(n.id)) {
        return { ...existing.get(n.id), ...n }
      }
      // New node — place it in a circle
      const angle = Math.random() * Math.PI * 2
      const r     = 100 + Math.random() * 80
      return {
        ...n,
        x: W / 2 + Math.cos(angle) * r,
        y: H / 2 + Math.sin(angle) * r,
        vx: 0, vy: 0,
      }
    })

    const byId = new Map(this._nodes.map(n => [n.id, n]))

    // Build edges with node references
    this._edges = edges
      .filter(e => byId.has(e.from) && byId.has(e.to))
      .map(e => ({ fromNode: byId.get(e.from), toNode: byId.get(e.to), type: e.type }))

    // Group by reality for cluster rendering
    this._realityGroups.clear()
    this._nodes.forEach(n => {
      n.realities?.forEach((fid, i) => {
        if (!this._realityGroups.has(fid)) {
          this._realityGroups.set(fid, {
            nodes: [],
            color: PALETTE[this._realityGroups.size % PALETTE.length],
          })
        }
        this._realityGroups.get(fid).nodes.push(n)
      })
    })

    this._settled = 0
    this._kickSimulation()
  }

  /** Set callback for node selection */
  onSelect(cb) { this._onSelect = cb }

  /** Fit all nodes into view */
  fitView() {
    if (this._nodes.length === 0) return
    const xs = this._nodes.map(n => n.x)
    const ys = this._nodes.map(n => n.y)
    const minX = Math.min(...xs), maxX = Math.max(...xs)
    const minY = Math.min(...ys), maxY = Math.max(...ys)
    const W = this.canvas.width, H = this.canvas.height
    const padding = 60
    const scaleX = (W - padding * 2) / (maxX - minX || 1)
    const scaleY = (H - padding * 2) / (maxY - minY || 1)
    this._zoom = Math.min(scaleX, scaleY, 2)
    this._pan.x = -((minX + maxX) / 2) * this._zoom
    this._pan.y = -((minY + maxY) / 2) * this._zoom
    this.render()
  }

  stop() { if (this._raf) cancelAnimationFrame(this._raf) }

  // ── Simulation ────────────────────────────────────────────────────────────

  _kickSimulation() {
    if (this._raf) return
    const tick = () => {
      if (this._settled < 250) {
        this._stepForce()
        this._settled++
      }
      this.render()
      this._raf = requestAnimationFrame(tick)
    }
    this._raf = requestAnimationFrame(tick)
  }

  _stepForce() {
    const ns = this._nodes
    const REPEL  = 4000
    const SPRING = 90    // rest length
    const K      = 0.025 // spring stiffness
    const DAMP   = 0.82

    // Repulsion between every pair
    for (let i = 0; i < ns.length; i++) {
      for (let j = i + 1; j < ns.length; j++) {
        const a = ns[i], b = ns[j]
        const dx = b.x - a.x, dy = b.y - a.y
        const d2 = dx * dx + dy * dy || 1
        const d  = Math.sqrt(d2)
        const f  = REPEL / d2
        a.vx -= (f * dx) / d;  a.vy -= (f * dy) / d
        b.vx += (f * dx) / d;  b.vy += (f * dy) / d
      }
    }

    // Spring attraction along trust edges
    for (const e of this._edges) {
      if (e.type !== 'trust') continue
      const dx = e.toNode.x - e.fromNode.x
      const dy = e.toNode.y - e.fromNode.y
      const d  = Math.sqrt(dx * dx + dy * dy) || 1
      const f  = (d - SPRING) * K
      e.fromNode.vx += (f * dx) / d;  e.fromNode.vy += (f * dy) / d
      e.toNode.vx   -= (f * dx) / d;  e.toNode.vy   -= (f * dy) / d

      // Hierarchy bias: children drift slightly below parents
      e.toNode.vy += (e.toNode.y - (e.fromNode.y + SPRING)) * -0.008
    }

    // Weak neighbor attraction (shorter rest length)
    for (const e of this._edges) {
      if (e.type !== 'neighbor') continue
      const dx = e.toNode.x - e.fromNode.x
      const dy = e.toNode.y - e.fromNode.y
      const d  = Math.sqrt(dx * dx + dy * dy) || 1
      const f  = (d - 50) * 0.008
      e.fromNode.vx += (f * dx) / d;  e.fromNode.vy += (f * dy) / d
      e.toNode.vx   -= (f * dx) / d;  e.toNode.vy   -= (f * dy) / d
    }

    // Update positions
    for (const n of ns) {
      n.x += n.vx * DAMP;  n.y += n.vy * DAMP
      n.vx *= DAMP;        n.vy *= DAMP
    }
  }

  // ── Rendering ─────────────────────────────────────────────────────────────

  render() {
    const ctx = this.ctx
    const W   = this.canvas.width
    const H   = this.canvas.height

    ctx.clearRect(0, 0, W, H)
    ctx.fillStyle = 'rgba(0,2,12,0.97)'
    ctx.fillRect(0, 0, W, H)

    ctx.save()
    ctx.translate(W / 2 + this._pan.x, H / 2 + this._pan.y)
    ctx.scale(this._zoom, this._zoom)

    this._drawRealityClusters()
    this._drawEdges()
    this._drawNodes()
    if (this._selected) this._drawSelection(this._selected)

    ctx.restore()

    this._drawLegend()
    if (this._settled < 250) this._drawSettlingIndicator()
  }

  _drawRealityClusters() {
    const ctx = this.ctx
    for (const [fid, { nodes, color }] of this._realityGroups) {
      if (nodes.length < 2) continue
      const cx  = nodes.reduce((s, n) => s + n.x, 0) / nodes.length
      const cy  = nodes.reduce((s, n) => s + n.y, 0) / nodes.length
      const rad = Math.max(...nodes.map(n => Math.hypot(n.x - cx, n.y - cy))) + 55

      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad)
      grad.addColorStop(0, color.fill.replace('0.09', '0.14'))
      grad.addColorStop(0.7, color.fill)
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(cx, cy, rad, 0, Math.PI * 2)
      ctx.fill()

      // Cluster border
      ctx.strokeStyle = color.border + '33'
      ctx.lineWidth   = 1
      ctx.beginPath()
      ctx.arc(cx, cy, rad, 0, Math.PI * 2)
      ctx.stroke()
    }
  }

  _drawEdges() {
    const ctx = this.ctx
    for (const e of this._edges) {
      ctx.beginPath()
      ctx.moveTo(e.fromNode.x, e.fromNode.y)
      ctx.lineTo(e.toNode.x,   e.toNode.y)

      if (e.type === 'trust') {
        ctx.strokeStyle = 'rgba(120,180,255,0.45)'
        ctx.lineWidth   = 1.8
        ctx.setLineDash([])
      } else {
        ctx.strokeStyle = 'rgba(255,255,255,0.1)'
        ctx.lineWidth   = 0.8
        ctx.setLineDash([3, 5])
      }
      ctx.stroke()
    }
    ctx.setLineDash([])
  }

  _drawNodes() {
    const ctx = this.ctx

    for (const n of this._nodes) {
      const isSelected = this._selected?.id === n.id
      const r = n.isMe ? 11 : n.isBridge ? 9 : 7
      const color = n.isMe ? NODE_COLOR.me
                  : n.perception === 'blurred' ? NODE_COLOR.blurred
                  : NODE_COLOR[n.visibility] ?? NODE_COLOR.public

      // Glow halo
      ctx.shadowColor = color
      ctx.shadowBlur  = isSelected ? 28 : n.isMe ? 22 : 12

      // Node circle
      ctx.fillStyle = n.perception === 'blurred'
        ? 'rgba(50,50,80,0.7)'
        : color + (n.isMe ? '' : 'cc')
      ctx.beginPath()
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0

      // Bridge ring (gold pulsing border — static version)
      if (n.isBridge) {
        ctx.strokeStyle = '#ffcc00bb'
        ctx.lineWidth   = 2
        ctx.beginPath()
        ctx.arc(n.x, n.y, r + 5, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Selection ring
      if (isSelected) {
        ctx.strokeStyle = '#ffffff88'
        ctx.lineWidth   = 1.5
        ctx.beginPath()
        ctx.arc(n.x, n.y, r + 8, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Label
      const label = n.perception === 'blurred' ? '???' : (n.id.length > 12 ? n.id.slice(0, 12) + '…' : n.id)
      ctx.fillStyle = n.isMe ? '#ffffff' : 'rgba(255,255,255,0.65)'
      ctx.font      = `${n.isMe ? 'bold ' : ''}10px Inter, monospace`
      ctx.textAlign = 'center'
      ctx.fillText(label, n.x, n.y + r + 14)

      // Depth badge
      if (n.perception === 'full' && n.depth > 0) {
        ctx.fillStyle = 'rgba(255,255,255,0.28)'
        ctx.font      = '8px monospace'
        ctx.fillText(`d${n.depth}`, n.x, n.y - r - 4)
      }

      // YOU label
      if (n.isMe) {
        ctx.fillStyle   = '#00ffff'
        ctx.font        = 'bold 8px Inter, monospace'
        ctx.shadowColor = '#00ffff'
        ctx.shadowBlur  = 8
        ctx.fillText('YOU', n.x, n.y - r - 4)
        ctx.shadowBlur  = 0
      }
    }
  }

  _drawSelection(n) {
    // Already handled in _drawNodes — here we can extend if needed
  }

  _drawLegend() {
    const ctx  = this.ctx
    const items = [
      { color: NODE_COLOR.me,      label: 'You' },
      { color: NODE_COLOR.public,  label: 'Public' },
      { color: NODE_COLOR.invite,  label: 'Invite-only' },
      { color: NODE_COLOR.private, label: 'Private' },
      { color: NODE_COLOR.blurred, label: 'Unknown (invite-only, not connected)' },
      { color: '#ffcc00',          label: 'Bridge node' },
    ]
    const x = 14, startY = this.canvas.height - 14 - items.length * 18

    ctx.fillStyle = 'rgba(0,5,20,0.75)'
    ctx.fillRect(x - 6, startY - 10, 280, items.length * 18 + 16)
    ctx.strokeStyle = 'rgba(255,255,255,0.07)'
    ctx.lineWidth = 1
    ctx.strokeRect(x - 6, startY - 10, 280, items.length * 18 + 16)

    items.forEach(({ color, label }, i) => {
      const y = startY + i * 18
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(x + 6, y, 5, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = 'rgba(255,255,255,0.6)'
      ctx.font      = '11px Inter, monospace'
      ctx.textAlign = 'left'
      ctx.fillText(label, x + 18, y + 4)
    })
  }

  _drawSettlingIndicator() {
    const ctx  = this.ctx
    const pct  = this._settled / 250
    const W    = this.canvas.width
    ctx.fillStyle   = 'rgba(100,180,255,0.5)'
    ctx.fillRect(0, this.canvas.height - 2, W * pct, 2)
  }

  // ── Events ────────────────────────────────────────────────────────────────

  _bindEvents() {
    const c = this.canvas

    c.addEventListener('mousedown', e => {
      this._drag = true
      this._lastMouse = { x: e.clientX, y: e.clientY }
    })

    c.addEventListener('mousemove', e => {
      if (!this._drag) return
      this._pan.x += e.clientX - this._lastMouse.x
      this._pan.y += e.clientY - this._lastMouse.y
      this._lastMouse = { x: e.clientX, y: e.clientY }
      this.render()
    })

    c.addEventListener('mouseup',    () => { this._drag = false })
    c.addEventListener('mouseleave', () => { this._drag = false })

    c.addEventListener('wheel', e => {
      e.preventDefault()
      const factor = e.deltaY > 0 ? 0.88 : 1.14
      this._zoom = Math.max(0.15, Math.min(6, this._zoom * factor))
      if (!this._raf) this.render()
    }, { passive: false })

    c.addEventListener('click', e => {
      if (this._drag) return
      const rect  = c.getBoundingClientRect()
      const mx = (e.clientX - rect.left - c.width  / 2 - this._pan.x) / this._zoom
      const my = (e.clientY - rect.top  - c.height / 2 - this._pan.y) / this._zoom

      let hit = null
      for (const n of this._nodes) {
        if (Math.hypot(n.x - mx, n.y - my) < 14) { hit = n; break }
      }
      this._selected = hit
      this._onSelect?.(hit)
      if (!this._raf) this.render()
    })
  }
}

// ── DOM overlay factory ────────────────────────────────────────────────────

/**
 * Open the network map overlay.
 * @param {SwarmNetwork}     swarmNet
 * @param {VisibilityLayer}  visLayer
 * @param {string}           myNodeId
 */
export function openNetworkMap(swarmNet, visLayer, myNodeId) {
  const overlay = document.getElementById('network-map-overlay')
  if (!overlay) return

  overlay.classList.add('visible')

  const canvas = document.getElementById('network-map-canvas')
  canvas.width  = canvas.offsetWidth  || 800
  canvas.height = canvas.offsetHeight || 560

  const mapData = visLayer.buildMapFor(myNodeId, swarmNet)
  const renderer = new NetworkMapRenderer(canvas, visLayer, myNodeId)
  renderer.load(mapData)

  // Node info panel
  const panel = document.getElementById('nm-node-panel')
  renderer.onSelect(node => {
    if (!node || node.perception === 'blurred') {
      panel.innerHTML = node
        ? `<div class="nm-panel-blurred">🔒 Unknown node<br><small>Invite required</small></div>`
        : ''
      return
    }
    panel.innerHTML = `
      <div class="nm-panel-title">${node.isMe ? '👤 You' : '🔵 ' + node.id}</div>
      <div class="nm-panel-row"><span>Visibility</span><span class="nm-badge nm-badge-${node.visibility}">${node.visibility}</span></div>
      <div class="nm-panel-row"><span>Depth</span><span>d${node.depth ?? 0}</span></div>
      <div class="nm-panel-row"><span>Realities</span><span>${node.realities?.length ?? 0}</span></div>
      ${node.isBridge ? '<div class="nm-panel-bridge">🌉 Bridge node</div>' : ''}
    `
  })

  // Close button
  const closeBtn = document.getElementById('nm-close')
  const close = () => {
    overlay.classList.remove('visible')
    renderer.stop()
  }
  closeBtn.onclick = close
  overlay.addEventListener('keydown', e => { if (e.key === 'Escape') close() })
}
