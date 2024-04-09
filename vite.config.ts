import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import path from "path";
import svgr from "vite-plugin-svgr";

//https://vitejs.dev/config/shared-options.html
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: 'app', replacement: path.resolve(__dirname, 'src/app') },
      { find: 'entities', replacement: path.resolve(__dirname, 'src/entities') },
      { find: 'features', replacement: path.resolve(__dirname, 'src/features') },
      { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'shared', replacement: path.resolve(__dirname, 'src/shared') },
      { find: 'widgets', replacement: path.resolve(__dirname, 'src/widgets') },
    ],  },
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
