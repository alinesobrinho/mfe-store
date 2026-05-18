/// <reference types="vitest" />

import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

import federation from "@originjs/vite-plugin-federation";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),

    tailwindcss(),

    federation({
      name: "host",

      filename: "remoteEntry.js",

      exposes: {
        "./CartContext":
          "./src/context/CartContext.jsx",
      },

      remotes: {
        header:
          "http://localhost:4176/assets/remoteEntry.js",

        cards:
          "http://localhost:4175/assets/remoteEntry.js",

        footer:
          "http://localhost:4174/assets/remoteEntry.js",
      },

      shared: {
        react: {
          singleton: true,
        },

        "react-dom": {
          singleton: true,
        },
      },
    }),
  ],

  server: {
    port: 4173,
  },

  preview: {
    port: 4173,
  },

  build: {
    target: "esnext",
  },

  test: {
    environment: "jsdom",
  },
});