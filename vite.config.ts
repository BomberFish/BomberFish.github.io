// vite.config.js
import { defineConfig } from "vite";
import { ViteMinifyPlugin } from 'vite-plugin-minify' 

export default defineConfig({
  base: "",
  build: {
    cssMinify: 'lightningcss',
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      ecma: 2016,
      compress: {
        drop_console: true,
        drop_debugger: true,
        booleans_as_integers: true,
        arguments: true,
        unsafe: true,
      },
    },
    rollupOptions: {
      output: {
        compact: true,
      },
      treeshake: true,
    },
  },
  css: {
    devSourcemap: true,
    lightningcss: {
      minify: true,
      sourceMap: true,
    }
  },
  server: {
    host: true,
    cors: true,
  },
  plugins: [
    ViteMinifyPlugin({}),
  ]
});
