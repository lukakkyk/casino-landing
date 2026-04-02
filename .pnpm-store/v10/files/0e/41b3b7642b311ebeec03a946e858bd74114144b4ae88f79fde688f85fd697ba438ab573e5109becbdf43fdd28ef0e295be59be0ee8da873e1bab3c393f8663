var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: !0
    });
  },
  __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames(from)) !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
    return to;
  };
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: !0
  }) : target, mod)),
  __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
    value: !0
  }), mod);
var bundle_exports = {};
__export(bundle_exports, {
  esbuildIgnoreFilesRegex: () => esbuildIgnoreFilesRegex,
  esbuildLoaderConfig: () => esbuildLoaderConfig,
  esbundleTamaguiConfig: () => esbundleTamaguiConfig
});
module.exports = __toCommonJS(bundle_exports);
var import_node_fs = require("node:fs"),
  import_esbuild = __toESM(require("esbuild")),
  FS = __toESM(require("fs-extra")),
  import_detectModuleFormat = require("./detectModuleFormat.cjs"),
  import_esbuildAliasPlugin = require("./esbuildAliasPlugin.cjs"),
  import_loadTamagui = require("./loadTamagui.cjs"),
  import_esbuildTsconfigPaths = require("./esbuildTsconfigPaths.cjs");
const esbuildLoaderConfig = {
    ".js": "jsx",
    ".png": "dataurl",
    ".jpg": "dataurl",
    ".jpeg": "dataurl",
    ".svg": "dataurl",
    ".gif": "dataurl",
    ".webp": "dataurl",
    ".woff2": "dataurl",
    ".woff": "dataurl",
    ".eot": "dataurl",
    ".otf": "dataurl",
    ".ttf": "dataurl",
    ".mp4": "file",
    ".mpeg4": "file",
    ".mov": "file",
    ".avif": "file",
    ".wmv": "file",
    ".webm": "file",
    ".wav": "file",
    ".aac": "file",
    ".ogg": "file",
    ".flac": "file",
    ".node": "empty"
  },
  dataExtensions = Object.keys(esbuildLoaderConfig).filter(k => esbuildLoaderConfig[k] === "file" || esbuildLoaderConfig[k] === "dataurl").map(k => k.slice(1)),
  esbuildIgnoreFilesRegex = new RegExp(`.(${dataExtensions.join("|")})$`, "i");
function getESBuildConfig({
  entryPoints,
  resolvePlatformSpecificEntries,
  ...options
}, platform, aliases) {
  process.env.DEBUG?.startsWith("tamagui") && console.info("Building", entryPoints);
  const resolvedEntryPoints = resolvePlatformSpecificEntries ? entryPoints.map(import_loadTamagui.resolveWebOrNativeSpecificEntry) : entryPoints,
    detectedFormat = options.format || detectEntryFormat(resolvedEntryPoints[0]);
  return {
    bundle: !0,
    entryPoints: resolvedEntryPoints,
    format: detectedFormat,
    // for ESM: prefer "module" field for resolution, add require() shim for bundled CJS deps
    ...(detectedFormat === "esm" ? {
      mainFields: ["module", "main"],
      banner: {
        js: 'import { createRequire as __cr } from "module"; const require = __cr(import.meta.url);'
      }
    } : {}),
    target: "node24",
    jsx: "transform",
    jsxFactory: "react",
    allowOverwrite: !0,
    keepNames: !0,
    resolveExtensions: [".web.tsx", ".web.ts", ".web.jsx", ".web.js", ".tsx", ".ts", ".jsx", ".js"],
    platform: "node",
    tsconfigRaw: {
      compilerOptions: {
        jsx: "react-jsx"
      }
    },
    loader: esbuildLoaderConfig,
    logLevel: "warning",
    plugins: [(0, import_esbuildTsconfigPaths.TsconfigPathsPlugin)(),
    // handle ESM-only features that can't be used with CJS output
    {
      name: "handle-esm-features",
      setup(build) {
        const isCjs = build.initialOptions.format === "cjs" || !build.initialOptions.format;
        build.onLoad({
          filter: /\.(ts|tsx|js|jsx|mjs)$/
        }, args => {
          if (!isCjs || args.path.includes("node_modules") && !args.path.includes("@tamagui")) return null;
          let contents = (0, import_node_fs.readFileSync)(args.path, "utf8"),
            modified = !1;
          return contents.includes("import.meta.env") && (contents = contents.replace(/import\.meta\.env/g, "process.env"), modified = !0), contents.includes("import.meta.url") && (contents = contents.replace(/import\.meta\.url/g, '""'), modified = !0), contents.includes("import.meta.main") && (contents = contents.replace(/import\.meta\.main/g, "false"), modified = !0), /^\s*(?:const|let|var|export)\s+[^=]*=\s*await\b/m.test(contents) || /^await\s/m.test(contents) ? (process.env.DEBUG?.startsWith("tamagui") && console.info(`[tamagui] stubbing file with top-level await: ${args.path}`), {
            contents: `// stubbed - contains top-level await
module.exports = {}`,
            loader: "js"
          }) : modified ? {
            contents,
            loader: args.path.endsWith(".tsx") ? "tsx" : args.path.endsWith(".ts") ? "ts" : args.path.endsWith(".jsx") ? "jsx" : "js"
          } : null;
        });
      }
    }, {
      name: "external",
      setup(build) {
        const proxyWormPath = require.resolve("@tamagui/proxy-worm");
        build.onResolve({
          filter: /^@tamagui\/(core|web)$/
        }, args => args.kind === "entry-point" ? null : {
          path: platform === "native" ? "@tamagui/core/native" : args.path,
          external: !0
        }), build.onResolve({
          filter: /react-native\/package.json$/
        }, () => ({
          path: "react-native/package.json",
          external: !0
        })), build.onResolve({
          filter: /^(react-native|react-native\/.*)$/
        }, () => ({
          path: "@tamagui/react-native-web-lite",
          external: !0
        })), build.onResolve({
          filter: /^react-native-reanimated(?:\/.*)?$/
        }, () => ({
          path: proxyWormPath
        })), build.onResolve({
          filter: /^react-native-worklets(?:\/.*)?$/
        }, () => ({
          path: proxyWormPath
        })), build.onResolve({
          filter: /^(framer-motion|motion)/
        }, args => ({
          path: args.path,
          external: !0
        }));
      }
    }, (0, import_esbuildAliasPlugin.esbuildAliasPlugin)({
      ...aliases
    })],
    ...options
  };
}
function detectEntryFormat(entryPoint) {
  if (entryPoint.startsWith("/") || entryPoint.startsWith(".")) return (0, import_detectModuleFormat.detectModuleFormat)(entryPoint);
  try {
    const pkgJsonPath = require.resolve(entryPoint + "/package.json");
    return JSON.parse((0, import_node_fs.readFileSync)(pkgJsonPath, "utf-8")).type === "module" ? "esm" : "cjs";
  } catch {
    return "cjs";
  }
}
async function esbundleTamaguiConfig(props, platform, aliases) {
  const config = getESBuildConfig(props, platform, aliases),
    tmpFile = props.outfile + ".tmp." + process.pid,
    result = await import_esbuild.default.build({
      ...config,
      outfile: tmpFile
    });
  return await FS.rename(tmpFile, props.outfile), result;
}