import { defineConfig } from "vite";

export default defineConfig({
  base: "/portfolio_kaboom",
  build: {
    minify: "terser",
  },
});
