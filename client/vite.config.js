import { defineConfig } from 'vite'

// VITE_BASE_URL is injected by CI when deploying to a GitHub Pages project page
// (e.g. /spacework/). Falls back to '/' for local dev and custom domains.
export default defineConfig({
  base: process.env.VITE_BASE_URL ?? '/',
  test: {
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.js'],
      exclude: ['src/main.js', 'src/scene/index.js'],
    },
  },
})
