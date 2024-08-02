import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/development': {
        target: 'https://free-ap-south-1.cosmocloud.io', // Your backend API server
        changeOrigin: true,
      },
    }
  },

  plugins: [react()],
})
