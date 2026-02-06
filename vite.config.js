import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // This serves as the equivalent of the "homepage" field in CRA
  base: '/',
  plugins: [react()],
  server: {
    // This ensures the browser opens automatically, like CRA
    open: true,
    port: 3000,
  },
  build: {
    // CRA puts builds in /build, Vite defaults to /dist
    outDir: 'build',
  },
});
