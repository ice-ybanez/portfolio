import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],

  // Use "/" while developing locally.
  // Production builds are published at:
  // https://ice-ybanez.github.io/portfolio/
  base: command === "build" ? "/portfolio/" : "/",
}));
