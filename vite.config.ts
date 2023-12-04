import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

import { visualizer } from "rollup-plugin-visualizer";

//https://vitejs.dev/config/shared-options.html
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src\components\common\circularMenu\circular3.scss"`,
      },
    },
  },

  esbuild: {
    jsxFactory: "f",
    jsxFragment: "Fragment",
    jsxInject: `import React from 'react'`,
  },

  build: {
    /** 빌드 위치 */
    outDir: "./build",
    /** map 파일을 생성할지 여부. 소스 파일을 개발자 도구를 통해 확인할 수 있으므로 배포시엔 false 처리 */
    sourcemap: false,
    /** rollup에게 제공되는 설정값 */
    rollupOptions: {
      output: {
        // 번들링 결과물을 생성하는 과정에서
        manualChunks(id) {
          // 수동으로 chunk를 나눈다
          if (id.includes("node_modules")) {
            // node_modules 값이 포함된 파일을 각각 나눈다
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
      plugins: [visualizer({ template: "sunburst" })],
    },
  },
  plugins: [react(), visualizer()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  optimizeDeps: {
    include: ["js-cookie"],
  },
});
