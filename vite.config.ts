import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Simplified base path to match your GitHub repo exactly
  base: '/frontend-rocks/', 
  plugins: [react(), tailwindcss()],
})