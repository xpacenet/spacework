import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir:     './e2e',
  globalSetup: './e2e/global-setup.js',
  timeout:     120_000,      // 120 s per test
  retries:     process.env.CI ? 1 : 0,

  use: {
    headless: true,
  },

  // Start `vite preview` automatically before running tests.
  // Expects the dist folder to already exist (built in a prior CI step).
  webServer: {
    command: 'npm run preview -- --port 4173 --host',
    port:    4173,
    timeout: 30_000,
    reuseExistingServer: !process.env.CI,
  },

  reporter: process.env.CI ? 'github' : 'list',
})
