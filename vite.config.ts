import { defineConfig } from "vitest/config";

export default defineConfig({
  base: "/landing-page/",
  test: {
    environment: "happy-dom"
  }
});
