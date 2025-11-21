import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/starwars-intro-css3/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        episode1: resolve(__dirname, 'episode1.html'),
        episode2: resolve(__dirname, 'episode2.html'),
        episode3: resolve(__dirname, 'episode3.html'),
        episode4: resolve(__dirname, 'episode4.html'),
        episode5: resolve(__dirname, 'episode5.html'),
        episode6: resolve(__dirname, 'episode6.html')
      }
    }
  }
});
