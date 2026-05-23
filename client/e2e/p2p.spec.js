/**
 * E2E — P2P peer discovery test
 *
 * Spins up two isolated browser contexts against the built app.
 * Both join the same room (unique per run to avoid cross-contamination).
 * The test passes only when each peer appears in the other's swarm,
 * which means the full stack worked:
 *
 *   URL hash → room ID → WS relay announce → WebRTC offer/answer
 *   → DataChannel open → intro exchange → peer:join event fired
 *
 * Signalling uses a local WebSocket relay (started by global-setup.js)
 * so the test has no dependency on public BitTorrent DHT trackers.
 * Production still uses BitTorrent DHT — window.__WS_RELAY__ is only
 * injected here, never in the real app.
 *
 * This runs before every deploy. If it fails, deploy is blocked.
 */
import { test, expect } from '@playwright/test'
import { WS_RELAY_URL } from './global-setup.js'

const BASE_URL = 'http://localhost:4173'

/** Inject the local relay URL before any page script runs. */
async function useLocalRelay (ctx) {
  await ctx.addInitScript(url => { window.__WS_RELAY__ = url }, WS_RELAY_URL)
}

/** Fill the lobby and click Enter. */
async function board (page, username, room) {
  await page.fill('#username', username)
  await page.fill('#room-name', '')
  await page.fill('#room-name', room)
  await page.click('#enter-btn')
}

/** Wait until the sync layer is initialised and reports ≥ 1 peer. */
async function waitForPeer (page, timeoutMs = 60_000) {
  // window._sync is set in main.js after spaceSync.start() is called
  await page.waitForFunction(
    () => typeof window._sync !== 'undefined',
    { timeout: 20_000 }
  )
  await page.waitForFunction(
    () => window._sync?.peerCount >= 1,
    { timeout: timeoutMs }
  )
}

test('two peers discover each other in the same room', async ({ browser }) => {
  // Unique room per run — prevents concurrent CI runs from interfering
  const room = `ci-${Date.now()}`

  // Two separate browser contexts = two different identities / localStorage
  const ctx1 = await browser.newContext()
  const ctx2 = await browser.newContext()

  // Route signalling through local relay (not public BitTorrent trackers)
  await useLocalRelay(ctx1)
  await useLocalRelay(ctx2)

  const p1 = await ctx1.newPage()
  const p2 = await ctx2.newPage()

  // Capture console errors and uncaught JS exceptions for easier debugging
  const errors1 = [], errors2 = []
  p1.on('console',   m => { if (m.type() === 'error') errors1.push(m.text()) })
  p2.on('console',   m => { if (m.type() === 'error') errors2.push(m.text()) })
  p1.on('pageerror', e => errors1.push(`[uncaught] ${e.message}`))
  p2.on('pageerror', e => errors2.push(`[uncaught] ${e.message}`))

  try {
    // Both navigate to the same room URL
    await p1.goto(`${BASE_URL}/#${room}`)
    await p2.goto(`${BASE_URL}/#${room}`)

    // Board simultaneously so they're in the swarm at the same time
    await Promise.all([
      board(p1, 'Alice', room),
      board(p2, 'Bob',   room),
    ])

    // Wait for both to see each other — this is the real P2P test
    await Promise.all([
      waitForPeer(p1),
      waitForPeer(p2),
    ])

    // Confirm peer counts
    const count1 = await p1.evaluate(() => window._sync.peerCount)
    const count2 = await p2.evaluate(() => window._sync.peerCount)

    expect(count1, 'Alice should see at least 1 peer').toBeGreaterThanOrEqual(1)
    expect(count2, 'Bob should see at least 1 peer').toBeGreaterThanOrEqual(1)

  } finally {
    if (errors1.length) console.log('[Alice console errors]', errors1)
    if (errors2.length) console.log('[Bob console errors]',   errors2)
    await ctx1.close()
    await ctx2.close()
  }
})

test('peers in different rooms do NOT see each other', async ({ browser }) => {
  const ts   = Date.now()
  const ctx1 = await browser.newContext()
  const ctx2 = await browser.newContext()

  await useLocalRelay(ctx1)
  await useLocalRelay(ctx2)

  const p1 = await ctx1.newPage()
  const p2 = await ctx2.newPage()

  try {
    await p1.goto(`${BASE_URL}/#room-a-${ts}`)
    await p2.goto(`${BASE_URL}/#room-b-${ts}`)

    await Promise.all([
      board(p1, 'Charlie', `room-a-${ts}`),
      board(p2, 'Dana',    `room-b-${ts}`),
    ])

    // Wait for sync to initialise on both sides
    await p1.waitForFunction(() => typeof window._sync !== 'undefined', { timeout: 20_000 })
    await p2.waitForFunction(() => typeof window._sync !== 'undefined', { timeout: 20_000 })

    // Give them 10 s to (not) find each other
    await p1.waitForTimeout(10_000)

    const count1 = await p1.evaluate(() => window._sync.peerCount)
    const count2 = await p2.evaluate(() => window._sync.peerCount)

    expect(count1, 'Charlie should see 0 peers (different room)').toBe(0)
    expect(count2, 'Dana should see 0 peers (different room)').toBe(0)

  } finally {
    await ctx1.close()
    await ctx2.close()
  }
})
