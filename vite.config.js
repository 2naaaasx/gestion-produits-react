import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/gestion-produits-react",
  host: '0.0.0.0',
  port: process.env.PORT || 3000,
})
