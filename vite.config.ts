/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  server: {
    open: true,
  },
  build: {
    outDir: "dist",
  },
  // Chart.js and GSAP are loaded via CDN in index.html and used as globals.
  // Vite keeps the CDN <script> tags and only processes the TypeScript entry point.
  test: {
    include: ["src/**/*.test.ts"],
  },
});
