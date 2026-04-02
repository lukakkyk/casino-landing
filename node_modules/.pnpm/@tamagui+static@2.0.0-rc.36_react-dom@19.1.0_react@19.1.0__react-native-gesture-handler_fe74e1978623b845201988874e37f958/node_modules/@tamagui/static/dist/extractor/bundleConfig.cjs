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
var bundleConfig_exports = {};
__export(bundleConfig_exports, {
  bundleConfig: () => bundleConfig,
  esbuildOptions: () => esbuildOptions,
  esbuildOptionsWithPlugins: () => esbuildOptionsWithPlugins,
  getBundledConfig: () => getBundledConfig,
  getLoadedConfig: () => getLoadedConfig,
  hasBundledConfigChanged: () => hasBundledConfigChanged,
  loadComponents: () => loadComponents,
  loadComponentsInner: () => loadComponentsInner,
  loadComponentsInnerSync: () => loadComponentsInnerSync,
  loadComponentsSync: () => loadComponentsSync,
  writeTamaguiCSS: () => writeTamaguiCSS
});
module.exports = __toCommonJS(bundleConfig_exports);
var import_generator = __toESM(require("@babel/generator")),
  import_traverse = __toESM(require("@babel/traverse")),
  t = __toESM(require("@babel/types")),
  import_node_crypto = require("node:crypto"),
  import_node_fs = require("node:fs"),
  import_node_path = require("node:path"),
  import_node_url = require("node:url"),
  import_cli_color = require("@tamagui/cli-color"),
  import_esbuild = __toESM(require("esbuild")),
  FS = __toESM(require("fs-extra")),
  import_promises = require("node:fs/promises"),
  import_registerRequire = require("../registerRequire.cjs"),
  import_babelParse = require("./babelParse.cjs"),
  import_bundle = require("./bundle.cjs"),
  import_getTamaguiConfigPathFromOptionsConfig = require("./getTamaguiConfigPathFromOptionsConfig.cjs"),
  import_requireTamaguiCore = require("../helpers/requireTamaguiCore.cjs"),
  import_detectModuleFormat = require("./detectModuleFormat.cjs");
const activeTempFiles = /* @__PURE__ */new Set();
function getDynamicEvalOutfile(name, format, contents) {
  const ext = format === "esm" ? "mjs" : "cjs",
    hash = (0, import_node_crypto.createHash)("sha1").update(name).update("\0").update(format).update("\0").update(contents).digest("hex").slice(0, 10);
  return (0, import_node_path.join)(process.cwd(), ".tamagui", `dynamic-eval-${hash}-${(0, import_node_path.basename)(name)}.${ext}`);
}
function getEsbuildStdinLoader(filePath) {
  return filePath.endsWith(".tsx") ? "tsx" : filePath.endsWith(".ts") ? "ts" : filePath.endsWith(".jsx") ? "jsx" : "js";
}
function resolvePackageEntry(packageName, format) {
  if (format === "cjs") return require.resolve(packageName);
  const packageJsonPath = require.resolve(`${packageName}/package.json`),
    packageJson = JSON.parse((0, import_node_fs.readFileSync)(packageJsonPath, "utf-8")),
    packageRoot = (0, import_node_path.dirname)(packageJsonPath),
    exportEntry = packageJson.exports?.["."],
    esmEntry = exportEntry?.import || exportEntry?.module || exportEntry?.browser || packageJson.module;
  return typeof esmEntry == "string" ? (0, import_node_path.join)(packageRoot, esmEntry) : require.resolve(packageName);
}
function cleanupTempFiles() {
  for (const f of activeTempFiles) try {
    (0, import_node_fs.unlinkSync)(f);
  } catch {}
  activeTempFiles.clear();
}
process.on("exit", cleanupTempFiles);
process.on("SIGINT", () => {
  cleanupTempFiles(), process.exit();
});
process.on("SIGTERM", () => {
  cleanupTempFiles(), process.exit();
});
const external = ["@tamagui/core", "@tamagui/web", "react", "react-dom", "react-native-svg"],
  esbuildExtraOptions = {
    define: {
      __DEV__: `${process.env.NODE_ENV === "development"}`
    }
  },
  handleEsmFeaturesPlugin = {
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
  },
  esbuildTransformOptions = {
    target: "es2022",
    format: "cjs",
    jsx: "automatic",
    platform: "node",
    ...esbuildExtraOptions
  },
  esbuildOptions = {
    ...esbuildTransformOptions
  },
  esbuildOptionsWithPlugins = {
    ...esbuildTransformOptions,
    plugins: [handleEsmFeaturesPlugin]
  };
let currentBundle = null,
  isBundling = !1,
  lastBundle = null;
const waitForBundle = /* @__PURE__ */new Set();
function hasBundledConfigChanged() {
  return lastBundle === currentBundle ? !1 : (lastBundle = currentBundle, !0);
}
let loadedConfig = null;
const getLoadedConfig = () => loadedConfig;
async function getBundledConfig(props, rebuild = !1) {
  if (isBundling) await new Promise(res => {
    waitForBundle.add(res);
  });else if (!currentBundle || rebuild) return await bundleConfig(props);
  return currentBundle;
}
global.tamaguiLastLoaded ||= 0;
function updateLastLoaded(config) {
  global.tamaguiLastLoaded = Date.now(), global.tamaguiLastBundledConfig = config;
}
let hasBundledOnce = !1,
  hasLoggedBuild = !1;
async function bundleConfig(props) {
  if (global.tamaguiLastBundledConfig && Date.now() - global.tamaguiLastLoaded < 3e3) return global.tamaguiLastBundledConfig;
  try {
    isBundling = !0;
    const configEntry = props.config ? (0, import_getTamaguiConfigPathFromOptionsConfig.getTamaguiConfigPathFromOptionsConfig)(props.config) : "",
      tmpDir = (0, import_node_path.join)(process.cwd(), ".tamagui"),
      configFormat = configEntry ? (0, import_detectModuleFormat.detectModuleFormat)(configEntry) : "cjs",
      configOutPath = (0, import_node_path.join)(tmpDir, `tamagui.config${configFormat === "esm" ? ".mjs" : ".cjs"}`),
      baseComponents = (props.components || []).filter(x => x !== "@tamagui/core"),
      componentFormats = baseComponents.map(mod => {
        try {
          const pkgJson = require.resolve(mod + "/package.json");
          return JSON.parse((0, import_node_fs.readFileSync)(pkgJson, "utf-8")).type === "module" ? "esm" : "cjs";
        } catch {
          return "cjs";
        }
      }),
      componentOutPaths = baseComponents.map((componentModule, i) => {
        const ext = componentFormats[i] === "esm" ? ".mjs" : ".cjs";
        return (0, import_node_path.join)(tmpDir, `${componentModule.split(import_node_path.sep).join("-").replace(/[^a-z0-9]+/gi, "")}-components.config${ext}`);
      });
    process.env.NODE_ENV === "development" && process.env.DEBUG?.startsWith("tamagui") && console.info("Building config entry", configEntry);
    let shouldBuild = !props.disableInitialBuild;
    if (shouldBuild && props.config) {
      const allOutFiles = [configOutPath, ...componentOutPaths];
      try {
        (await Promise.all(allOutFiles.map(f => FS.stat(f).catch(() => null)))).every(s => s !== null && Date.now() - s.mtimeMs < 3e3) && (shouldBuild = !1);
      } catch {}
    }
    if (shouldBuild) {
      try {
        await FS.ensureDir(tmpDir);
      } catch {}
      const start = Date.now();
      await Promise.all([props.config ? (0, import_bundle.esbundleTamaguiConfig)({
        entryPoints: [configEntry],
        external,
        outfile: configOutPath,
        target: "node24",
        format: configFormat,
        ...esbuildExtraOptions
      }, props.platform || "web") : null, ...baseComponents.map((componentModule, i) => (0, import_bundle.esbundleTamaguiConfig)({
        entryPoints: [componentModule],
        resolvePlatformSpecificEntries: !0,
        external,
        outfile: componentOutPaths[i],
        target: "node24",
        format: componentFormats[i],
        ...esbuildExtraOptions
      }, props.platform || "web"))]), !hasLoggedBuild && !props._skipBuildLog && (hasLoggedBuild = !0, (0, import_cli_color.colorLog)(import_cli_color.Color.FgYellow, `
  \u27A1 [tamagui] built config, components, prompt (${Date.now() - start}ms)`), process.env.DEBUG?.startsWith("tamagui") && (0, import_cli_color.colorLog)(import_cli_color.Color.Dim, `
          Config     .${import_node_path.sep}${(0, import_node_path.relative)(process.cwd(), configOutPath)}
          Components ${componentOutPaths.map(p => `.${import_node_path.sep}${(0, import_node_path.relative)(process.cwd(), p)}`).join(`
             `)}
          `));
    }
    if (hasBundledOnce) {
      try {
        delete require.cache[require.resolve(configOutPath)];
      } catch {}
      for (const p of componentOutPaths) try {
        delete require.cache[require.resolve(p)];
      } catch {}
    } else hasBundledOnce = !0;
    let out;
    configFormat === "esm" ? out = await import((0, import_node_url.pathToFileURL)(configOutPath).href) : out = require(configOutPath);
    let config = out.default || out || out.config;
    if (config && config.config && !config.tokens && (config = config.config), !config) throw new Error(`No config: ${config}`);
    if (config._isProxyWorm) throw new Error("Got a proxied config - likely a module loading error. Set DEBUG=tamagui for details.");
    if (loadedConfig = config, !config.parsed) {
      const {
        createTamagui
      } = (0, import_requireTamaguiCore.requireTamaguiCore)(props.platform || "web");
      config = createTamagui(config);
    }
    props.outputCSS && (await writeTamaguiCSS(props.outputCSS, config));
    let components = await loadComponents({
      ...props,
      components: componentOutPaths
    });
    if (!components) throw new Error(`No components found: ${componentOutPaths.join(", ")}`);
    for (const component of components) component.moduleName = baseComponents[componentOutPaths.indexOf(component.moduleName)] || component.moduleName, component.moduleName || (process.env.DEBUG?.includes("tamagui") || process.env.IS_TAMAGUI_DEV) && console.warn(`\u26A0\uFE0F no module name found: ${component.moduleName} ${JSON.stringify(baseComponents)} in ${JSON.stringify(componentOutPaths)}`);
    process.env.NODE_ENV === "development" && process.env.DEBUG?.startsWith("tamagui") && console.info("Loaded components", components);
    const res = {
      components,
      nameToPaths: {},
      tamaguiConfig: config
    };
    return currentBundle = res, updateLastLoaded(res), res;
  } catch (err) {
    console.error(`Error bundling tamagui config: ${err?.message} (run with DEBUG=tamagui to see stack)`), process.env.DEBUG?.includes("tamagui") && console.error(err.stack);
  } finally {
    isBundling = !1, waitForBundle.forEach(cb => cb()), waitForBundle.clear();
  }
}
async function writeTamaguiCSS(outputCSS, config) {
  const flush = async () => {
      (0, import_cli_color.colorLog)(import_cli_color.Color.FgYellow, `  \u27A1 [tamagui] output css: ${outputCSS}`), await FS.writeFile(outputCSS, css);
    },
    css = config.getCSS();
  if (typeof css != "string") throw new Error(`Invalid CSS: ${typeof css} ${css}`);
  try {
    (0, import_node_fs.existsSync)(outputCSS) && (await (0, import_promises.readFile)(outputCSS, "utf8")) === css || (await flush());
  } catch (err) {
    console.info("Error writing themes", err);
  }
}
async function loadComponents(props, forceExports = !1) {
  const coreComponents = getCoreComponentsSync(props),
    otherComponents = await loadComponentsInner(props, forceExports);
  return [...coreComponents, ...(otherComponents || [])];
}
function loadComponentsSync(props, forceExports = !1) {
  const coreComponents = getCoreComponentsSync(props),
    otherComponents = loadComponentsInnerSync(props, forceExports);
  return [...coreComponents, ...(otherComponents || [])];
}
function getCoreComponentsSync(props) {
  const loaded = loadComponentsInnerSync({
    ...props,
    components: ["@tamagui/core"]
  });
  if (!loaded) throw new Error("Core should always load");
  return [{
    ...loaded[0],
    moduleName: "@tamagui/core"
  }];
}
async function loadComponentsInner(props, forceExports = !1) {
  const componentsModules = props.components || [],
    key = componentsModules.join("\0");
  if (!forceExports && cacheComponents[key]) return cacheComponents[key];
  const {
    unregister
  } = (0, import_registerRequire.registerRequire)(props.platform || "web", {
    proxyWormImports: forceExports
  });
  try {
    const results = [];
    for (const name of componentsModules) {
      const isLocal = !!(0, import_node_path.extname)(name),
        isDynamic = isLocal && forceExports,
        format = isLocal ? (0, import_detectModuleFormat.detectModuleFormat)(name) : "cjs",
        fileContents = isDynamic ? (0, import_node_fs.readFileSync)(name, "utf-8") : "";
      let loadModule = name,
        writtenContents = fileContents,
        didBabel = !1;
      const attemptLoad = async ({
          forceExports: forceExports2 = !1
        } = {}) => {
          isDynamic && (writtenContents = forceExports2 ? transformAddExports((0, import_babelParse.babelParse)(esbuildit(fileContents, "modern"), name)) : fileContents, loadModule = getDynamicEvalOutfile(name, format, writtenContents), FS.ensureDirSync((0, import_node_path.dirname)(loadModule)), activeTempFiles.add(loadModule), await import_esbuild.default.build({
            ...esbuildOptionsWithPlugins,
            format,
            outfile: loadModule,
            stdin: {
              contents: writtenContents,
              resolveDir: (0, import_node_path.dirname)(name),
              sourcefile: name,
              loader: getEsbuildStdinLoader(name)
            },
            alias: {
              "react-native": resolvePackageEntry("@tamagui/react-native-web-lite", format),
              "@tamagui/react-native-web-lite": resolvePackageEntry("@tamagui/react-native-web-lite", format),
              "@tamagui/react-native-web-internals": resolvePackageEntry("@tamagui/react-native-web-internals", format)
            },
            bundle: !0,
            packages: "external",
            allowOverwrite: !0,
            sourcemap: !1,
            loader: import_bundle.esbuildLoaderConfig
          })), process.env.DEBUG === "tamagui" && console.info("loadModule", loadModule, format);
          let moduleResult;
          format === "esm" ? moduleResult = await import((0, import_node_url.pathToFileURL)(loadModule).href) : moduleResult = require(loadModule), forceExports2 || (0, import_registerRequire.setRequireResult)(name, moduleResult);
          const nameToInfo = getComponentStaticConfigByName(name, interopDefaultExport(moduleResult));
          return {
            moduleName: name,
            nameToInfo
          };
        },
        dispose = () => {
          isDynamic && (FS.removeSync(loadModule), activeTempFiles.delete(loadModule));
        };
      let loaded;
      try {
        loaded = await attemptLoad({
          forceExports: !0
        }), didBabel = !0;
      } catch (err) {
        console.info("babel err", err, writtenContents), writtenContents = fileContents, process.env.DEBUG?.startsWith("tamagui") && console.info("Error parsing babel likely", err);
        try {
          loaded = await attemptLoad({
            forceExports: !1
          });
        } catch (err2) {
          process.env.TAMAGUI_ENABLE_WARN_DYNAMIC_LOAD && (console.info(`
Tamagui attempted but failed to dynamically optimize components in:
  ${name}
`), console.info(err2), console.info(`At: ${loadModule}`, `
didBabel: ${didBabel}`, `
In:`, writtenContents, `
isDynamic: `, isDynamic)), loaded = [];
        }
      } finally {
        dispose();
      }
      Array.isArray(loaded) ? results.push(...loaded) : loaded && results.push(loaded);
    }
    return cacheComponents[key] = results, results;
  } catch (err) {
    return console.info("Tamagui error bundling components", err.message, err.stack), null;
  } finally {
    unregister();
  }
}
function loadComponentsInnerSync(props, forceExports = !1) {
  const componentsModules = props.components || [],
    key = componentsModules.join("\0");
  if (!forceExports && cacheComponents[key]) return cacheComponents[key];
  const {
    unregister
  } = (0, import_registerRequire.registerRequire)(props.platform || "web", {
    proxyWormImports: forceExports
  });
  try {
    const info = componentsModules.flatMap(name => {
      const isDynamic = !!(0, import_node_path.extname)(name) && forceExports,
        fileContents = isDynamic ? (0, import_node_fs.readFileSync)(name, "utf-8") : "";
      let loadModule = name,
        writtenContents = fileContents,
        didBabel = !1;
      function attemptLoad({
        forceExports: forceExports2 = !1
      } = {}) {
        isDynamic && (writtenContents = forceExports2 ? transformAddExports((0, import_babelParse.babelParse)(esbuildit(fileContents, "modern"), name)) : fileContents, loadModule = getDynamicEvalOutfile(name, "cjs", writtenContents), FS.ensureDirSync((0, import_node_path.dirname)(loadModule)), activeTempFiles.add(loadModule), import_esbuild.default.buildSync({
          ...esbuildOptions,
          outfile: loadModule,
          stdin: {
            contents: writtenContents,
            resolveDir: (0, import_node_path.dirname)(name),
            sourcefile: name,
            loader: getEsbuildStdinLoader(name)
          },
          alias: {
            "react-native": resolvePackageEntry("@tamagui/react-native-web-lite", "esm"),
            "@tamagui/react-native-web-lite": resolvePackageEntry("@tamagui/react-native-web-lite", "esm"),
            "@tamagui/react-native-web-internals": resolvePackageEntry("@tamagui/react-native-web-internals", "esm")
          },
          bundle: !0,
          packages: "external",
          allowOverwrite: !0,
          sourcemap: !1,
          loader: import_bundle.esbuildLoaderConfig
        })), process.env.DEBUG === "tamagui" && console.info("loadModule", loadModule, require.resolve(loadModule));
        const moduleResult = require(loadModule);
        forceExports2 || (0, import_registerRequire.setRequireResult)(name, moduleResult);
        const nameToInfo = getComponentStaticConfigByName(name, interopDefaultExport(moduleResult));
        return {
          moduleName: name,
          nameToInfo
        };
      }
      const dispose = () => {
        isDynamic && (FS.removeSync(loadModule), activeTempFiles.delete(loadModule));
      };
      try {
        const res = attemptLoad({
          forceExports: !0
        });
        return didBabel = !0, res;
      } catch (err) {
        console.info("babel err", err, writtenContents), writtenContents = fileContents, process.env.DEBUG?.startsWith("tamagui") && console.info("Error parsing babel likely", err);
      } finally {
        dispose();
      }
      try {
        return attemptLoad({
          forceExports: !1
        });
      } catch (err) {
        return process.env.TAMAGUI_ENABLE_WARN_DYNAMIC_LOAD && (console.info(`
Tamagui attempted but failed to dynamically optimize components in:
  ${name}
`), console.info(err), console.info(`At: ${loadModule}`, `
didBabel: ${didBabel}`, `
In:`, writtenContents, `
isDynamic: `, isDynamic)), [];
      } finally {
        dispose();
      }
    });
    return cacheComponents[key] = info, info;
  } catch (err) {
    return console.info("Tamagui error bundling components", err.message, err.stack), null;
  } finally {
    unregister();
  }
}
const esbuildit = (src, target) => import_esbuild.default.transformSync(src, {
  ...esbuildTransformOptions,
  ...(target === "modern" && {
    target: "es2022",
    jsx: "automatic",
    loader: "tsx",
    platform: "neutral",
    format: "esm"
  })
}).code;
function getComponentStaticConfigByName(name, exported) {
  const components = {};
  try {
    if (!exported || typeof exported != "object" || Array.isArray(exported)) throw new Error(`Invalid export from package ${name}: ${typeof exported}`);
    for (const key in exported) {
      const found = getTamaguiComponent(key, exported[key]);
      if (found) {
        const {
          Component,
          ...sc
        } = found.staticConfig;
        components[key] = {
          staticConfig: sc
        };
      }
    }
  } catch (err) {
    process.env.TAMAGUI_ENABLE_WARN_DYNAMIC_LOAD && (console.error(`Tamagui failed getting components from ${name} (Disable error by setting environment variable TAMAGUI_ENABLE_WARN_DYNAMIC_LOAD=1)`), console.error(err));
  }
  return components;
}
function getTamaguiComponent(name, Component) {
  if (name[0].toUpperCase() !== name[0]) return;
  if (Component?.staticConfig) return Component;
}
function interopDefaultExport(mod) {
  return mod?.default ?? mod;
}
const cacheComponents = {};
function transformAddExports(ast) {
  const usedNames = /* @__PURE__ */new Set();
  return (0, import_traverse.default)(ast, {
    ExportNamedDeclaration(nodePath) {
      if (nodePath.node.specifiers) for (const spec of nodePath.node.specifiers) usedNames.add(t.isIdentifier(spec.exported) ? spec.exported.name : spec.exported.value);
    }
  }), (0, import_traverse.default)(ast, {
    VariableDeclaration(nodePath) {
      if (!t.isProgram(nodePath.parent)) return;
      const decs = nodePath.node.declarations;
      if (decs.length > 1) return;
      const [dec] = decs;
      t.isIdentifier(dec.id) && dec.init && (usedNames.has(dec.id.name) || (usedNames.add(dec.id.name), nodePath.replaceWith(t.exportNamedDeclaration(t.variableDeclaration("let", [dec]), [t.exportSpecifier(t.identifier(dec.id.name), t.identifier(dec.id.name))]))));
    }
  }), (0, import_generator.default)(ast, {
    concise: !1,
    filename: "test.tsx",
    retainLines: !1,
    sourceMaps: !1
  }).code;
}