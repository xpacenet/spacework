import { defineConfig } from 'vite'

export default defineConfig({
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
