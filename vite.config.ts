import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        game10000: resolve(__dirname, "games/10000/index.html")
      }
    }
  },
  test: {
    environment: "happy-dom"
  }
});
