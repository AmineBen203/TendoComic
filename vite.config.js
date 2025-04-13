import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/TendoComic/", // Must match your GitHub repo exactly!
  plugins: [react()],
});
