import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react({
    // Add fast refresh options
    fastRefresh: true,
    includePaths: ['src/**/*'],
  })],
  server: {
    watch: {
      usePolling: true,
      interval: 100
    },
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      overlay: true
    }
  },
  clearScreen: false
});