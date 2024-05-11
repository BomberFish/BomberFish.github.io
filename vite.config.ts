// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  base: "",
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true,
  },
  server: {
    host: true,
    cors: true,
  },
});
