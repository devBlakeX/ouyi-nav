import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'

// https://vitejs.dev/config/
//ssr()
export default defineConfig({
  plugins: [react() ],
  server: {
    host: true
  }
})
