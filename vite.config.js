// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/memory-game/",
  build: {
    outDir: 'dist', // This is the default, but you can adjust it if needed
    assetsDir: 'assets' // This is where Vite will output static assets
  }
});
