import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  cors: true,
  headers:{
    'Access-Control-Allow-Origin': 'https://doited-error.000webhostapp.com/',
  }
})
