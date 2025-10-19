
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// Vite configuration for proper build and deployment
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias the src directory for easier imports
    },
  },
  build: {
    outDir: 'dist', // Output the final build into the "dist" folder (required by Vercel)
  },
})
