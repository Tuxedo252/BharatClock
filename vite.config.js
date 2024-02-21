import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    base: "/",
    outDir: "dist",
    assetsDir: "assets",
    minify: true, // Enable minification for production
  },
});
