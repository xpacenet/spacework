/**
 * Playwright global setup — starts a local @trystero-p2p/ws-relay server
 * so both headless browsers can signal each other without touching the
 * public BitTorrent DHT trackers (which are unreliable from CI runners).
 *
 * The returned function is called by Playwright as global teardown.
 */
import { createWsRelayServer } from '@trystero-p2p/ws-relay/server'

export const WS_RELAY_PORT = 8765
export const WS_RELAY_URL  = `ws://localhost:${WS_RELAY_PORT}`

export default async function globalSetup () {
  const server = createWsRelayServer({ port: WS_RELAY_PORT })
  console.log(`[E2E] WS relay listening on ${WS_RELAY_URL}`)

  // Return teardown function — Playwright calls it after all tests finish
  return async () => {
    server.close()
    console.log('[E2E] WS relay stopped')
  }
}
