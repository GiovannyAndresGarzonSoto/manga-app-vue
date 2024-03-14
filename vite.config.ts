import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vite_d_ts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vite_d_ts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    exclude: ["vue"],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      exclude: ["src/**", "test/**"],
      reporter:["json-summary", "html"]
    },
  },
});