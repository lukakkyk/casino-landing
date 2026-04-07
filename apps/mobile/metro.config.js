const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

// pnpm isolates each package in .pnpm/<pkg>/node_modules/, which can cause
// Metro to load duplicate copies of React from different paths. Force all
// imports of singleton packages to resolve from the workspace root so only
// one copy is ever loaded.
const singletons = ["react", "react-native"];

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (
    singletons.some(
      (s) => moduleName === s || moduleName.startsWith(s + "/"),
    )
  ) {
    return context.resolveRequest(
      {
        ...context,
        originModulePath: path.join(workspaceRoot, "package.json"),
      },
      moduleName,
      platform,
    );
  }
  return context.resolveRequest(context, moduleName, platform);
};

config.resolver.extraNodeModules = {
  react: path.resolve(workspaceRoot, "node_modules/react"),
  "react/jsx-runtime": path.resolve(
    workspaceRoot,
    "node_modules/react/jsx-runtime",
  ),
  "react-native": path.resolve(workspaceRoot, "node_modules/react-native"),
  tamagui: path.resolve(workspaceRoot, "node_modules/tamagui"),
  "@tamagui/core": path.resolve(workspaceRoot, "node_modules/@tamagui/core"),
  "@tamagui/web": path.resolve(workspaceRoot, "node_modules/@tamagui/web"),
  "@tamagui/lucide-icons": path.resolve(
    workspaceRoot,
    "node_modules/@tamagui/lucide-icons",
  ),
};

module.exports = config;
