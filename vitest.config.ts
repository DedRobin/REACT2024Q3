import {
  defineConfig,
  configDefaults,
  coverageConfigDefaults,
} from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"],
    exclude: [...configDefaults.exclude],
    coverage: {
      exclude: [...coverageConfigDefaults.exclude, "next.config.mjs"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
