import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Cambia 'portfolio' si tu repo se llama distinto
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
