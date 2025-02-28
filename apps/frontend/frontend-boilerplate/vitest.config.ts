import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: [
      "src/**/__tests__/**/*.spec.ts",
      "src/**/__tests__/**/*.test.ts",
      "src/**/__tests__/**/*.spec.js",
      "src/**/__tests__/**/*.test.js"
    ],
    exclude: [
      "node_modules/",
      "dist/",
      "coverage/",
      "./src/setupTests.ts",
      "vite.config.ts",
    ],
    coverage: {
      provider: "v8",
      reporter: ["lcov", "text-summary", "html"],
      exclude: [
        "node_modules/",
        "dist/",
        "./src/setupTests.ts",
        "coverage/",
        "vite.config.ts",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
