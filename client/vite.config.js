import { defineConfig } from 'vite'

// './' = relative asset paths, required for IPFS where the app lives at
// /ipfs/<CID>/ rather than the root. Works for local dev too.
export default defineConfig({
  base: './',
  test: {
    environment: 'node',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      'e2e/**',            // Playwright tests — run via `npm run test:e2e`, not vitest
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.js'],
      exclude: ['src/main.js', 'src/scene/index.js'],
    },
  },
})
