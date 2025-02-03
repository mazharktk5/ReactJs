import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/",  // No subdirectory needed for Vercel
  build: {
    outDir: "dist"  // Vercel will auto-detect this
  }
});
