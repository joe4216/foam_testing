import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/foam_testing/',  // 👈 important: matches your repo name exactly
  build: {
    outDir: 'dist',
  },
})
