import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  build: {
    outDir: "dist/client",
  },
});
