import { defineConfig } from "vite";
import { dreamlandPlugin } from "vite-plugin-dreamland";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    dreamlandPlugin(),
    legacy({
      targets: [
        "fully supports flexbox",
        "partially supports css-grid",
        "supports proxy",
        "not dead",
        "BlackBerry 10",
        "Firefox ESR",
      ],
    }),
  ],
  base: "",
  build: {
    sourcemap: true,
    cssMinify: "lightningcss",
    minify: "terser",
  },
  css: {
    devSourcemap: true,
  },
  server: {
    host: true,
    cors: false,
  },
});
