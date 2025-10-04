import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
 // ✅ The correct base path for your repo
base: "/mywebsite/",
  plugins: [react()]
})
