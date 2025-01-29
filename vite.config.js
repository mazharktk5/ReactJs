// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set the base URL for GitHub Pages
export default defineConfig({
  base: "/ReactJs/", // Your GitHub repository name here
  plugins: [react()],
  server: {
    historyApiFallback: true, // Ensures proper routing on refresh during development
  },
})
