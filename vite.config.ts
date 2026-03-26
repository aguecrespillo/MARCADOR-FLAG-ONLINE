import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // El secreto está en esta línea:
  base: '/MARCADOR-FLAG-ONLINE/',
})