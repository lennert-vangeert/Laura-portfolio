import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        // See default plugins: https://svgo.dev/docs/preset-default/#plugins-list
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: { overrides: { removeViewBox: false } },
            },
          ],
        },
      },
    }),
    react(),
  ],
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      // Add aliases here and in the tsconfig.json file
      "@global": path.resolve(__dirname, "src/global"),
      "@common": path.resolve(__dirname, "src/_common"),
    },
  },
});
