import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
  },
  // Chart.js e GSAP são carregados via CDN no index.html e usados como globais
  // O Vite mantém os <script> do CDN e processa apenas o entry point TypeScript
  test: {
    include: ["src/**/*.test.ts"],
  },
});
