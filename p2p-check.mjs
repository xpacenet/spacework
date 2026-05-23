/**
 * Quick P2P smoke test — opens two Chromium tabs against the live site,
 * both join the same room, and waits to see if either spots the other.
 *
 * Run:  node p2p-check.mjs
 */

import { chromium } from '/Users/mrxpace/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs'

const URL       = 'http://localhost:4173/#main'
const RELAY_URL = 'ws://localhost:8765'
const WAIT      = 15_000

;(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: [
      '--use-fake-ui-for-media-stream',
      '--use-fake-device-for-media-stream',
    ],
  })

  const ctx1 = await browser.newContext()
  const ctx2 = await browser.newContext()
  await ctx1.addInitScript(`window.__WS_RELAY__ = '${RELAY_URL}'`)
  await ctx2.addInitScript(`window.__WS_RELAY__ = '${RELAY_URL}'`)
  const page1 = await ctx1.newPage()
  const page2 = await ctx2.newPage()

  // Capture console from both pages
  const logs1 = [], logs2 = []
  page1.on('console', m => { const t = m.text(); logs1.push(t); if (t.includes('trystero') || t.includes('SpaceWork') || t.includes('peer')) console.log('[TAB1]', t) })
  page2.on('console', m => { const t = m.text(); logs2.push(t); if (t.includes('trystero') || t.includes('SpaceWork') || t.includes('peer')) console.log('[TAB2]', t) })
  page1.on('pageerror', e => console.error('[TAB1 ERROR]', e.message))
  page2.on('pageerror', e => console.error('[TAB2 ERROR]', e.message))

  console.log('→ Opening two tabs at', URL)
  await Promise.all([
    page1.goto(URL, { waitUntil: 'networkidle' }),
    page2.goto(URL, { waitUntil: 'networkidle' }),
  ])

  // Fill name and enter
  console.log('→ Entering names...')
  await page1.fill('#username', 'Alice')
  await page2.fill('#username', 'Bob')
  await Promise.all([
    page1.click('#enter-btn'),
    page2.click('#enter-btn'),
  ])

  // Wait for ship to load (loading screen disappears)
  await Promise.all([
    page1.waitForSelector('#hud.visible', { timeout: 20_000 }),
    page2.waitForSelector('#hud.visible', { timeout: 20_000 }),
  ])
  console.log('→ Both tabs loaded. Waiting up to', WAIT/1000, 's for peer discovery...')

  // Poll every 2s — check peerCount via window._sync
  const deadline = Date.now() + WAIT
  let alice = 0, bob = 0
  while (Date.now() < deadline) {
    ;[alice, bob] = await Promise.all([
      page1.evaluate(() => window._sync?.peerCount ?? 0),
      page2.evaluate(() => window._sync?.peerCount ?? 0),
    ])
    console.log(`  Alice sees ${alice} peer(s) | Bob sees ${bob} peer(s)`)
    if (alice > 0 && bob > 0) break
    await new Promise(r => setTimeout(r, 2000))
  }

  if (alice > 0 && bob > 0) {
    console.log('\n✅ P2P WORKING — both peers discovered each other')
  } else {
    console.log('\n❌ P2P FAILED — peers did not discover each other after', WAIT/1000, 's')
    console.log('   Check for tracker errors above ↑')
  }

  await browser.close()
})()
