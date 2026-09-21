import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sender-web3/', // IMPORTANTE: debe coincidir EXACTAMENTE con el nombre del repo
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  preview: {
    allowedHosts: true,
  },
})
