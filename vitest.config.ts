import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: ['text', 'html', 'json-summary', 'json'],
      provider: 'c8',
    },
  },
})
