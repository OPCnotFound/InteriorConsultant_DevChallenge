import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/InteriorConsultant_DevChallenge/",
  build: { outDir: "./build" },
});
