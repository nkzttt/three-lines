import * as path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import inputs from "./build-inputs";

export default defineConfig({
  plugins: [vue()],
  base: "/three-lines/",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        ...inputs,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/variables.scss";
        `,
      },
    },
  },
  server: {
    open: true,
    host: true,
  },
});
