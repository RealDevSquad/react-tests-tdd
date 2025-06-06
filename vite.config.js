import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/src/index.jsx', // Explicit entry point
    },
  },
  server: {
    port: 5173,
    open: true,
    host: true, // Allow external connections
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // Add this for better error reporting
  esbuild: {
    jsxInject: `import React from 'react'`, // Auto-import React if needed
  }
});