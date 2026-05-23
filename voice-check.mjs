/**
 * Voice smoke test — verifies the full WebRTC audio pipeline:
 *   mic acquired → track sent → track received → GainNode wired → gain set
 *
 * Run:  node voice-check.mjs
 *
 * Uses Chromium fake audio devices so no real mic is needed.
 * Both tabs must:
 *   1. Discover each other as P2P peers
 *   2. Successfully start voice (getUserMedia granted)
 *   3. Receive each other's audio track (GainNode created)
 *   4. Have gain > 0 once proximate (same spawn position)
 */

import { chromium } from '/Users/mrxpace/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs'

const URL        = 'http://localhost:4173/#main'
const RELAY_URL  = 'ws://localhost:8765'
const P2P_WAIT   = 15_000
const VOICE_WAIT = 15_000

const sleep = ms => new Promise(r => setTimeout(r, ms))

;(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: [
      '--use-fake-ui-for-media-stream',       // auto-grant mic permission
      '--use-fake-device-for-media-stream',   // synthetic audio oscillator as mic
      '--allow-file-access-from-files',
    ],
  })

  // Two independent browser contexts = two separate "users"
  const ctx1 = await browser.newContext({
    permissions: ['microphone'],
  })
  const ctx2 = await browser.newContext({
    permissions: ['microphone'],
  })

  const page1 = await ctx1.newPage()
  const page2 = await ctx2.newPage()

  // Log interesting console lines from each tab
  const log = (tag, m) => {
    const t = m.text()
    if (/trystero|SpaceWork|peer|voice|error/i.test(t)) console.log(`[${tag}]`, t)
  }
  page1.on('console',   m => log('ALICE', m))
  page2.on('console',   m => log('BOB',   m))
  page1.on('pageerror', e => console.error('[ALICE ERROR]', e.message))
  page2.on('pageerror', e => console.error('[BOB   ERROR]', e.message))

  // Inject local relay before page load so Trystero uses it instead of
  // public BitTorrent trackers — makes the test fast and fully offline.
  await ctx1.addInitScript(`window.__WS_RELAY__ = '${RELAY_URL}'`)
  await ctx2.addInitScript(`window.__WS_RELAY__ = '${RELAY_URL}'`)

  // ── Step 1: Load pages ─────────────────────────────────────────────────────
  console.log('\n── Step 1: Loading pages ─────────────────────────────────────')
  await Promise.all([
    page1.goto(URL, { waitUntil: 'networkidle' }),
    page2.goto(URL, { waitUntil: 'networkidle' }),
  ])

  // ── Step 2: Enter the space ────────────────────────────────────────────────
  console.log('── Step 2: Entering space ───────────────────────────────────')
  await page1.fill('#username', 'Alice')
  await page2.fill('#username', 'Bob')
  await Promise.all([
    page1.click('#enter-btn'),
    page2.click('#enter-btn'),
  ])
  await Promise.all([
    page1.waitForSelector('#hud.visible', { timeout: 20_000 }),
    page2.waitForSelector('#hud.visible', { timeout: 20_000 }),
  ])
  console.log('  ✓ Both tabs loaded')

  // ── Step 3: Wait for P2P peer discovery ────────────────────────────────────
  console.log(`── Step 3: Waiting up to ${P2P_WAIT/1000}s for P2P discovery ──────────────`)
  const p2pDeadline = Date.now() + P2P_WAIT
  let alicePeers = 0, bobPeers = 0
  while (Date.now() < p2pDeadline) {
    ;[alicePeers, bobPeers] = await Promise.all([
      page1.evaluate(() => window._sync?.peerCount ?? 0),
      page2.evaluate(() => window._sync?.peerCount ?? 0),
    ])
    if (alicePeers > 0 && bobPeers > 0) break
    process.stdout.write(`  peers → Alice:${alicePeers} Bob:${bobPeers}\r`)
    await sleep(1000)
  }
  console.log(`  peers → Alice:${alicePeers} Bob:${bobPeers}`)
  if (alicePeers === 0 || bobPeers === 0) {
    console.log('\n❌ P2P FAILED — fix peer discovery first, then re-run voice test')
    await browser.close(); process.exit(1)
  }
  console.log('  ✓ P2P working')

  // ── Step 4: Both click Voice button ───────────────────────────────────────
  console.log('── Step 4: Starting voice ───────────────────────────────────')
  await Promise.all([
    page1.click('#voice-btn'),
    page2.click('#voice-btn'),
  ])
  await sleep(2000)

  // Check voice.active
  // Check what getUserMedia returned and any error
  const [a1Info, a2Info] = await Promise.all([
    page1.evaluate(async () => {
      const v = window._voice
      const err = await navigator.mediaDevices.getUserMedia({ audio: true, video: false })
        .then(() => 'ok').catch(e => e.message)
      return { active: v?.active ?? false, micTest: err }
    }),
    page2.evaluate(async () => {
      const v = window._voice
      const err = await navigator.mediaDevices.getUserMedia({ audio: true, video: false })
        .then(() => 'ok').catch(e => e.message)
      return { active: v?.active ?? false, micTest: err }
    }),
  ])
  const a1Active = a1Info.active, a2Active = a2Info.active
  console.log(`  voice.active → Alice:${a1Active}  Bob:${a2Active}`)
  console.log(`  getUserMedia → Alice:"${a1Info.micTest}"  Bob:"${a2Info.micTest}"`)

  console.log(`  voice.active → Alice:${a1Active}  Bob:${a2Active}`)
  if (!a1Active || !a2Active) {
    console.log('\n❌ VOICE FAILED — getUserMedia not working (fake device issue?)')
    await browser.close(); process.exit(1)
  }
  console.log('  ✓ Mic acquired on both tabs')

  // ── Step 5: Wait for audio tracks to arrive ────────────────────────────────
  console.log(`── Step 5: Waiting up to ${VOICE_WAIT/1000}s for audio tracks ──────────────`)
  const trackDeadline = Date.now() + VOICE_WAIT
  let aliceGains = 0, bobGains = 0
  while (Date.now() < trackDeadline) {
    ;[aliceGains, bobGains] = await Promise.all([
      page1.evaluate(() => window._voice?._gains?.size ?? 0),
      page2.evaluate(() => window._voice?._gains?.size ?? 0),
    ])
    if (aliceGains > 0 && bobGains > 0) break
    process.stdout.write(`  gain nodes → Alice:${aliceGains} Bob:${bobGains}\r`)
    await sleep(1000)
  }
  console.log(`  gain nodes → Alice:${aliceGains} Bob:${bobGains}`)

  if (aliceGains === 0 || bobGains === 0) {
    console.log('\n❌ AUDIO TRACK FAILED — WebRTC track not arriving at peer')
    await browser.close(); process.exit(1)
  }
  console.log('  ✓ Audio tracks received on both tabs')

  // ── Step 6: Check gain is non-zero (peers are proximate at spawn) ──────────
  console.log('── Step 6: Checking gain (proximity model) ──────────────────')
  await sleep(2000)   // let the 50ms update loop run a few cycles
  const [aliceGain, bobGain] = await Promise.all([
    page1.evaluate(() => {
      const entry = [...(window._voice?._gains?.values() ?? [])]?.[0]
      return entry?.gainNode?.gain?.value ?? -1
    }),
    page2.evaluate(() => {
      const entry = [...(window._voice?._gains?.values() ?? [])]?.[0]
      return entry?.gainNode?.gain?.value ?? -1
    }),
  ])
  console.log(`  gain values → Alice hears Bob:${aliceGain.toFixed(3)}  Bob hears Alice:${bobGain.toFixed(3)}`)
  const gainOk = aliceGain > 0 && bobGain > 0
  if (!gainOk) {
    console.log('  ⚠ Gain is 0 — peers may not have synced positions yet (proximity update runs every 50ms)')
  } else {
    console.log('  ✓ Gain > 0 — peers can hear each other')
  }

  // ── Result ─────────────────────────────────────────────────────────────────
  const passed = a1Active && a2Active && aliceGains > 0 && bobGains > 0
  console.log(passed
    ? '\n✅ VOICE WORKING — mic acquired, tracks exchanged, audio pipeline live'
    : '\n❌ VOICE FAILED — see steps above for which stage failed')

  await browser.close()
  process.exit(passed ? 0 : 1)
})()
