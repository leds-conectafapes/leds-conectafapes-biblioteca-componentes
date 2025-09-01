import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["src/vitest/setup.ts"],
    include: ["src/vitest/**/*.test.ts"],
  },
  plugins: [vue(), tailwindcss()],
});
