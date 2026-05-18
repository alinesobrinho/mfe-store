import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "header",

      filename: "remoteEntry.js",

      exposes: {
        "./Header": "./src/App.jsx",
      },

      remotes: {
        host:
          "http://localhost:4173/assets/remoteEntry.js",
      },

      shared: {
        react: {
          singleton: true,
        },

        "react-dom": {
          singleton: true,
        },
        "lucide-react": {
    singleton: true,
  },
      },
    }),
  ],

  build: {
    target: "esnext",

    minify: false,

    cssCodeSplit: false,
  },

   preview: {
    port: 4176,
  },
});