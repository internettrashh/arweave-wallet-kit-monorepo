// vite.config.ts
import { defineConfig } from "file:///Users/nischalnaik/Documents/awk/node_modules/.pnpm/vite@4.5.9_@types+node@20.17.18_sass@1.84.0_terser@5.39.0/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/nischalnaik/Documents/awk/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.17.18_rollup@4.40.0_typescript@5.6.3_vite@4.5.9_@types+n_yolycl6aa5ucswv5r2mc5bmb6i/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "node:path";
var __vite_injected_original_dirname = "/Users/nischalnaik/Documents/awk/strategies/arconnect";
var vite_config_default = defineConfig({
  plugins: [
    dts({ insertTypesEntry: true })
  ],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "@arweave-wallet-kit/arconnect-strategy",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: [
        "@arweave-wallet-kit/browser-wallet-strategy",
        "@arweave-wallet-kit/core"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbmlzY2hhbG5haWsvRG9jdW1lbnRzL2F3ay9zdHJhdGVnaWVzL2FyY29ubmVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL25pc2NoYWxuYWlrL0RvY3VtZW50cy9hd2svc3RyYXRlZ2llcy9hcmNvbm5lY3Qvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL25pc2NoYWxuYWlrL0RvY3VtZW50cy9hd2svc3RyYXRlZ2llcy9hcmNvbm5lY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBkdHMoeyBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlIH0pXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaW5kZXgudHNcIiksXG4gICAgICBuYW1lOiBcIkBhcndlYXZlLXdhbGxldC1raXQvYXJjb25uZWN0LXN0cmF0ZWd5XCIsXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiLCBcInVtZFwiXSxcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgaW5kZXguJHtmb3JtYXR9LmpzYFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgXCJAYXJ3ZWF2ZS13YWxsZXQta2l0L2Jyb3dzZXItd2FsbGV0LXN0cmF0ZWd5XCIsXG4gICAgICAgIFwiQGFyd2VhdmUtd2FsbGV0LWtpdC9jb3JlXCJcbiAgICAgIF1cbiAgICB9XG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVixTQUFTLG9CQUFvQjtBQUM5VyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBRmpCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUksRUFBRSxrQkFBa0IsS0FBSyxDQUFDO0FBQUEsRUFDaEM7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUM3QyxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsVUFBVSxDQUFDLFdBQVcsU0FBUyxNQUFNO0FBQUEsSUFDdkM7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
