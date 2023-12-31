import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 2001,
    proxy: {
      '/api': {
        target: 'http://localhost:2000',
        changeOrigin: true
      }
    }
  }
})
