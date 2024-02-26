// vite.config.ts
import { defineConfig } from "file:///C:/git/rit-world/.yarn/__virtual__/vite-virtual-853a40cd57/0/cache/vite-npm-5.0.8-7f71954365-884dc2f17a.zip/node_modules/vite/dist/node/index.js";
import react from "file:///C:/git/rit-world/.yarn/__virtual__/@vitejs-plugin-react-virtual-6eb0d47b89/0/cache/@vitejs-plugin-react-npm-4.2.0-d680dc596c-515dc270dc.zip/node_modules/@vitejs/plugin-react/dist/index.mjs";
import jotaiDegubLabel from "file:///C:/git/rit-world/.yarn/__virtual__/jotai-virtual-e5ebe68ffc/0/cache/jotai-npm-2.6.0-dc8e6aef45-6e9ee39770.zip/node_modules/jotai/esm/babel/plugin-debug-label.mjs";
import jotaiReactRefresh from "file:///C:/git/rit-world/.yarn/__virtual__/jotai-virtual-e5ebe68ffc/0/cache/jotai-npm-2.6.0-dc8e6aef45-6e9ee39770.zip/node_modules/jotai/esm/babel/plugin-react-refresh.mjs";
import * as path from "path";
import { visualizer } from "file:///C:/git/rit-world/.yarn/__virtual__/rollup-plugin-visualizer-virtual-341d6e8841/0/cache/rollup-plugin-visualizer-npm-5.10.0-3464f6c202-b60d50bd3d.zip/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_dirname = "C:\\git\\rit-world";
var vite_config_default = defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./srccomponentscommoncircularMenucircular3.scss"`
      }
    }
  },
  esbuild: {
    jsxFactory: "f",
    jsxFragment: "Fragment",
    jsxInject: `import React from 'react'`
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
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        }
      },
      plugins: [visualizer({ template: "sunburst" })]
    }
  },
  plugins: [
    react({ babel: { plugins: [jotaiDegubLabel, jotaiReactRefresh] } }),
    visualizer()
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
  },
  optimizeDeps: {
    include: ["js-cookie"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxnaXRcXFxccml0LXdvcmxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxnaXRcXFxccml0LXdvcmxkXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9naXQvcml0LXdvcmxkL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgam90YWlEZWd1YkxhYmVsIGZyb20gXCJqb3RhaS9iYWJlbC9wbHVnaW4tZGVidWctbGFiZWxcIjtcclxuaW1wb3J0IGpvdGFpUmVhY3RSZWZyZXNoIGZyb20gXCJqb3RhaS9iYWJlbC9wbHVnaW4tcmVhY3QtcmVmcmVzaFwiO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiO1xyXG5cclxuLy9odHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL3NoYXJlZC1vcHRpb25zLmh0bWxcclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Nzczoge1xyXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQGltcG9ydCBcIi4vc3JjXFxjb21wb25lbnRzXFxjb21tb25cXGNpcmN1bGFyTWVudVxcY2lyY3VsYXIzLnNjc3NcImAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGVzYnVpbGQ6IHtcclxuICAgIGpzeEZhY3Rvcnk6IFwiZlwiLFxyXG4gICAganN4RnJhZ21lbnQ6IFwiRnJhZ21lbnRcIixcclxuICAgIGpzeEluamVjdDogYGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdgLFxyXG4gIH0sXHJcblxyXG4gIGJ1aWxkOiB7XHJcbiAgICAvKiogXHVCRTRDXHVCNERDIFx1QzcwNFx1Q0U1OCAqL1xyXG4gICAgb3V0RGlyOiBcIi4vYnVpbGRcIixcclxuICAgIC8qKiBtYXAgXHVEMzBDXHVDNzdDXHVDNzQ0IFx1QzBERFx1QzEzMVx1RDU2MFx1QzlDMCBcdUM1RUNcdUJEODAuIFx1QzE4Q1x1QzJBNCBcdUQzMENcdUM3N0NcdUM3NDQgXHVBQzFDXHVCQzFDXHVDNzkwIFx1QjNDNFx1QUQ2Q1x1Qjk3QyBcdUQxQjVcdUQ1NzQgXHVENjU1XHVDNzc4XHVENTYwIFx1QzIxOCBcdUM3ODhcdUM3M0NcdUJCQzBcdUI4NUMgXHVCQzMwXHVEM0VDXHVDMkRDXHVDNUQ0IGZhbHNlIFx1Q0M5OFx1QjlBQyAqL1xyXG4gICAgc291cmNlbWFwOiBmYWxzZSxcclxuICAgIC8qKiByb2xsdXBcdUM1RDBcdUFDOEMgXHVDODFDXHVBQ0Y1XHVCNDE4XHVCMjk0IFx1QzEyNFx1QzgxNVx1QUMxMiAqL1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAvLyBcdUJDODhcdUI0RTRcdUI5QzEgXHVBQ0IwXHVBQ0ZDXHVCQjNDXHVDNzQ0IFx1QzBERFx1QzEzMVx1RDU1OFx1QjI5NCBcdUFDRkNcdUM4MTVcdUM1RDBcdUMxMUNcclxuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcclxuICAgICAgICAgIC8vIFx1QzIxOFx1QjNEOVx1QzczQ1x1Qjg1QyBjaHVua1x1Qjk3QyBcdUIwOThcdUIyMDhcdUIyRTRcclxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcyhcIm5vZGVfbW9kdWxlc1wiKSkge1xyXG4gICAgICAgICAgICAvLyBub2RlX21vZHVsZXMgXHVBQzEyXHVDNzc0IFx1RDNFQ1x1RDU2OFx1QjQxQyBcdUQzMENcdUM3N0NcdUM3NDQgXHVBQzAxXHVBQzAxIFx1QjA5OFx1QjIwOFx1QjJFNFxyXG4gICAgICAgICAgICByZXR1cm4gaWRcclxuICAgICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgIC5zcGxpdChcIm5vZGVfbW9kdWxlcy9cIilbMV1cclxuICAgICAgICAgICAgICAuc3BsaXQoXCIvXCIpWzBdXHJcbiAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgcGx1Z2luczogW3Zpc3VhbGl6ZXIoeyB0ZW1wbGF0ZTogXCJzdW5idXJzdFwiIH0pXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCh7IGJhYmVsOiB7IHBsdWdpbnM6IFtqb3RhaURlZ3ViTGFiZWwsIGpvdGFpUmVhY3RSZWZyZXNoXSB9IH0pLFxyXG4gICAgdmlzdWFsaXplcigpLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IFt7IGZpbmQ6IFwiQFwiLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIikgfV0sXHJcbiAgfSxcclxuICBvcHRpbWl6ZURlcHM6IHtcclxuICAgIGluY2x1ZGU6IFtcImpzLWNvb2tpZVwiXSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3TyxTQUFTLG9CQUFvQjtBQUNyUSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyx1QkFBdUI7QUFDOUIsWUFBWSxVQUFVO0FBRXRCLFNBQVMsa0JBQWtCO0FBTjNCLElBQU0sbUNBQW1DO0FBVXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLFlBQVk7QUFBQSxJQUNaLGFBQWE7QUFBQSxJQUNiLFdBQVc7QUFBQSxFQUNiO0FBQUEsRUFFQSxPQUFPO0FBQUE7QUFBQSxJQUVMLFFBQVE7QUFBQTtBQUFBLElBRVIsV0FBVztBQUFBO0FBQUEsSUFFWCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUE7QUFBQSxRQUVOLGFBQWEsSUFBSTtBQUVmLGNBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUUvQixtQkFBTyxHQUNKLFNBQVMsRUFDVCxNQUFNLGVBQWUsRUFBRSxDQUFDLEVBQ3hCLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFDWixTQUFTO0FBQUEsVUFDZDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQVUsV0FBVyxDQUFDLENBQUM7QUFBQSxJQUNoRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLGlCQUFpQixpQkFBaUIsRUFBRSxFQUFFLENBQUM7QUFBQSxJQUNsRSxXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTyxDQUFDLEVBQUUsTUFBTSxLQUFLLGFBQWtCLGFBQVEsa0NBQVcsS0FBSyxFQUFFLENBQUM7QUFBQSxFQUNwRTtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLFdBQVc7QUFBQSxFQUN2QjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
