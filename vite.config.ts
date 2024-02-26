import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import path from "path";

//https://vitejs.dev/config/shared-options.html
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    outDir: 'build',
    assetsDir: 'assets'
  },
  publicDir: './public',
  cacheDir: './.vite',

  optimizeDeps: {
    include: ["js-cookie"]
  }
});
