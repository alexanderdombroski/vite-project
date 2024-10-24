import { defineConfig } from 'vite'
import deno from '@deno/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  root: 'src',
  base: '/vite-project/',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  plugins: [deno()],
})
