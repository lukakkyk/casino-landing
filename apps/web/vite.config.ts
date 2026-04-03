import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": { NODE_ENV: JSON.stringify("development") },
    global: "globalThis",
  },
  resolve: {
    /*
     * Force a single instance of every Tamagui package + React so that the
     * runtime theme/token state is never split across two copies.
     */
    dedupe: [
      "tamagui",
      "@tamagui/core",
      "@tamagui/web",
      "react",
      "react-dom",
      "react-native-web",
    ],
    alias: {
      "react-native/Libraries/Utilities/codegenNativeComponent": path.resolve(
        __dirname,
        "src/shims/codegenNativeComponent.js",
      ),
      "react-native": "react-native-web",
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
  },
});
