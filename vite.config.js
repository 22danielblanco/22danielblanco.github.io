import { defineConfig } from 'vite'

export default defineConfig({
  // Works for <username>.github.io and custom domains.
  // For a project site (<username>.github.io/<repo>/), set VITE_BASE_PATH=/repo/ in GitHub Actions.
  base: process.env.VITE_BASE_PATH || '/',
})
