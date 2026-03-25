import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // El punto y la barra hacen que las rutas sean relativas y no se crucen con la otra app
})