import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/tendocomic/", // 👈 Add this line with your repo name
  plugins: [react({
    jsxRuntime: 'automatic'
  })],
});
