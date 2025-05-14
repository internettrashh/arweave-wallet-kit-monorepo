// vite.config.ts
import { defineConfig } from "file:///workspaces/arweave-wallet-kit-monorepo/node_modules/.pnpm/vite@4.5.9_@types+node@20.17.18_sass@1.84.0_terser@5.39.0/node_modules/vite/dist/node/index.js";
import dts from "file:///workspaces/arweave-wallet-kit-monorepo/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.17.18_rollup@4.40.0_typescript@5.6.3_vite@4.5.9_@types+n_yolycl6aa5ucswv5r2mc5bmb6i/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "node:path";
import { getBabelOutputPlugin } from "file:///workspaces/arweave-wallet-kit-monorepo/node_modules/.pnpm/@rollup+plugin-babel@6.0.4_@babel+core@7.26.8_@types+babel__core@7.20.5_rollup@4.40.0/node_modules/@rollup/plugin-babel/dist/es/index.js";
import { nodePolyfills } from "file:///workspaces/arweave-wallet-kit-monorepo/node_modules/.pnpm/vite-plugin-node-polyfills@0.23.0_rollup@4.40.0_vite@4.5.9_@types+node@20.17.18_sass@1.84.0_terser@5.39.0_/node_modules/vite-plugin-node-polyfills/dist/index.js";
var __vite_injected_original_dirname = "/workspaces/arweave-wallet-kit-monorepo/strategies/othent";
var vite_config_default = defineConfig({
  plugins: [
    nodePolyfills({
      globals: {
        Buffer: false,
        global: false,
        process: false
      }
    }),
    dts({ insertTypesEntry: true })
  ],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "@arweave-wallet-kit/othent-strategy",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["@arweave-wallet-kit/core"],
      plugins: [
        /**
         * Running Babel on the generated code:
         *  https://github.com/rollup/plugins/blob/master/packages/babel/README.md#running-babel-on-the-generated-code
         *
         * Transforming ES6+ syntax to ES5 is not supported yet, there are two ways to do:
         *  https://github.com/evanw/esbuild/issues/1010#issuecomment-803865232
         * We choose to run Babel on the output files after esbuild.
         *
         * @vitejs/plugin-legacy does not support library mode:
         *  https://github.com/vitejs/vite/issues/1639
         */
        getBabelOutputPlugin({
          allowAllFormats: true,
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%, not dead, IE 11",
                useBuiltIns: false,
                // Default：false
                // // https://babeljs.io/docs/en/babel-preset-env#modules
                modules: false
              }
            ]
          ]
        })
      ]
    },
    sourcemap: false,
    // Enable sourcemaps for better debugging by library users
    minify: false
    // Minify the output
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlcy9hcndlYXZlLXdhbGxldC1raXQtbW9ub3JlcG8vc3RyYXRlZ2llcy9vdGhlbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi93b3Jrc3BhY2VzL2Fyd2VhdmUtd2FsbGV0LWtpdC1tb25vcmVwby9zdHJhdGVnaWVzL290aGVudC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vd29ya3NwYWNlcy9hcndlYXZlLXdhbGxldC1raXQtbW9ub3JlcG8vc3RyYXRlZ2llcy9vdGhlbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgeyBnZXRCYWJlbE91dHB1dFBsdWdpbiB9IGZyb20gXCJAcm9sbHVwL3BsdWdpbi1iYWJlbFwiO1xuaW1wb3J0IHsgbm9kZVBvbHlmaWxscyB9IGZyb20gXCJ2aXRlLXBsdWdpbi1ub2RlLXBvbHlmaWxsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgbm9kZVBvbHlmaWxscyh7XG4gICAgICBnbG9iYWxzOiB7XG4gICAgICAgIEJ1ZmZlcjogZmFsc2UsXG4gICAgICAgIGdsb2JhbDogZmFsc2UsXG4gICAgICAgIHByb2Nlc3M6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBkdHMoeyBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2luZGV4LnRzXCIpLFxuICAgICAgbmFtZTogXCJAYXJ3ZWF2ZS13YWxsZXQta2l0L290aGVudC1zdHJhdGVneVwiLFxuICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJ1bWRcIl0sXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1wiQGFyd2VhdmUtd2FsbGV0LWtpdC9jb3JlXCJdLFxuICAgICAgcGx1Z2luczogW1xuICAgICAgICAvKipcbiAgICAgICAgICogUnVubmluZyBCYWJlbCBvbiB0aGUgZ2VuZXJhdGVkIGNvZGU6XG4gICAgICAgICAqICBodHRwczovL2dpdGh1Yi5jb20vcm9sbHVwL3BsdWdpbnMvYmxvYi9tYXN0ZXIvcGFja2FnZXMvYmFiZWwvUkVBRE1FLm1kI3J1bm5pbmctYmFiZWwtb24tdGhlLWdlbmVyYXRlZC1jb2RlXG4gICAgICAgICAqXG4gICAgICAgICAqIFRyYW5zZm9ybWluZyBFUzYrIHN5bnRheCB0byBFUzUgaXMgbm90IHN1cHBvcnRlZCB5ZXQsIHRoZXJlIGFyZSB0d28gd2F5cyB0byBkbzpcbiAgICAgICAgICogIGh0dHBzOi8vZ2l0aHViLmNvbS9ldmFudy9lc2J1aWxkL2lzc3Vlcy8xMDEwI2lzc3VlY29tbWVudC04MDM4NjUyMzJcbiAgICAgICAgICogV2UgY2hvb3NlIHRvIHJ1biBCYWJlbCBvbiB0aGUgb3V0cHV0IGZpbGVzIGFmdGVyIGVzYnVpbGQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2aXRlanMvcGx1Z2luLWxlZ2FjeSBkb2VzIG5vdCBzdXBwb3J0IGxpYnJhcnkgbW9kZTpcbiAgICAgICAgICogIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMvdml0ZS9pc3N1ZXMvMTYzOVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0QmFiZWxPdXRwdXRQbHVnaW4oe1xuICAgICAgICAgIGFsbG93QWxsRm9ybWF0czogdHJ1ZSxcbiAgICAgICAgICBwcmVzZXRzOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIFwiQGJhYmVsL3ByZXNldC1lbnZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IFwiPiAwLjI1JSwgbm90IGRlYWQsIElFIDExXCIsXG4gICAgICAgICAgICAgICAgdXNlQnVpbHRJbnM6IGZhbHNlLCAvLyBEZWZhdWx0XHVGRjFBZmFsc2VcbiAgICAgICAgICAgICAgICAvLyAvLyBodHRwczovL2JhYmVsanMuaW8vZG9jcy9lbi9iYWJlbC1wcmVzZXQtZW52I21vZHVsZXNcbiAgICAgICAgICAgICAgICBtb2R1bGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgc291cmNlbWFwOiBmYWxzZSwgLy8gRW5hYmxlIHNvdXJjZW1hcHMgZm9yIGJldHRlciBkZWJ1Z2dpbmcgYnkgbGlicmFyeSB1c2Vyc1xuICAgIG1pbmlmeTogZmFsc2UsIC8vIE1pbmlmeSB0aGUgb3V0cHV0XG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlYsU0FBUyxvQkFBb0I7QUFDMVgsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUNqQixTQUFTLDRCQUE0QjtBQUNyQyxTQUFTLHFCQUFxQjtBQUo5QixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxjQUFjO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsTUFDWDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsSUFBSSxFQUFFLGtCQUFrQixLQUFLLENBQUM7QUFBQSxFQUNoQztBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQzdDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVyxTQUFTLE1BQU07QUFBQSxJQUN2QztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLDBCQUEwQjtBQUFBLE1BQ3JDLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFZUCxxQkFBcUI7QUFBQSxVQUNuQixpQkFBaUI7QUFBQSxVQUNqQixTQUFTO0FBQUEsWUFDUDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsU0FBUztBQUFBLGdCQUNULGFBQWE7QUFBQTtBQUFBO0FBQUEsZ0JBRWIsU0FBUztBQUFBLGNBQ1g7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGO0FBQUEsSUFDQSxXQUFXO0FBQUE7QUFBQSxJQUNYLFFBQVE7QUFBQTtBQUFBLEVBQ1Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
