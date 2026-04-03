import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const rnwPath = path.dirname(require.resolve("react-native-web/package.json"));

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": { NODE_ENV: JSON.stringify("development") },
    global: "globalThis",
  },
  resolve: {
    dedupe: ["tamagui", "@tamagui/core", "@tamagui/web", "react", "react-dom"],
    alias: {
      "react-native/Libraries/Utilities/codegenNativeComponent": path.resolve(
        __dirname,
        "src/shims/codegenNativeComponent.js",
      ),
      "react-native": rnwPath,
      "react-native-svg": path.resolve(
        __dirname,
        "src/shims/react-native-svg.js",
      ),
      "@casino/shared-ui": path.resolve(
        __dirname,
        "../../packages/shared-ui/src",
      ),
      "@casino/config": path.resolve(__dirname, "../../packages/config/src"),
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-native-web", "tamagui"],
    exclude: [],
  },
});
