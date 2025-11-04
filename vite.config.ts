import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/portfolio",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "motion-vendor": ["motion"],
          "i18n-vendor": ["i18next", "react-i18next"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
    minify: "esbuild",
  },
});
