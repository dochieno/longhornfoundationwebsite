// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: true, // allow LAN/tunnel access
    port: 5173,
    strictPort: true,

    // ✅ safest: only allow the hosts you actually use
    allowedHosts: [
      "localhost",
      "127.0.0.1",

      // If you're using tunnels, keep the ones you use:
      ".trycloudflare.com",
      ".ngrok-free.app",
      ".ngrok.io",
    ],
  },
});
