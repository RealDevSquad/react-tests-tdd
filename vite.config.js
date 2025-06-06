import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: '/src/index.jsx'
      }
    }
  },
  server: {
    port: 5173,
    open: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}) 