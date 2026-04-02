var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: !0
}), mod);
var checkDeps_exports = {};
__export(checkDeps_exports, {
  DEPENDENCY_TYPE: () => DEPENDENCY_TYPE,
  checkDeps: () => checkDeps
});
module.exports = __toCommonJS(checkDeps_exports);
var import_node_fs = require("node:fs"),
  import_node_path = require("node:path"),
  import_check_dep_versions = require("./check-dep-versions.cjs"),
  DEPENDENCY_TYPE = /* @__PURE__ */(DEPENDENCY_TYPE2 => (DEPENDENCY_TYPE2.dependencies = "dependencies", DEPENDENCY_TYPE2.devDependencies = "devDependencies", DEPENDENCY_TYPE2.optionalDependencies = "optionalDependencies", DEPENDENCY_TYPE2.peerDependencies = "peerDependencies", DEPENDENCY_TYPE2.resolutions = "resolutions", DEPENDENCY_TYPE2))(DEPENDENCY_TYPE || {});
const CRITICAL_PACKAGES = ["@tamagui/web", "@tamagui/core", "tamagui"];
function checkDuplicateInstalls(root) {
  const nodeModules = (0, import_node_path.join)(root, "node_modules");
  if (!(0, import_node_fs.existsSync)(nodeModules)) return "";
  const duplicates = /* @__PURE__ */new Map();
  for (const pkg of CRITICAL_PACKAGES) {
    const locations = findAllInstances(nodeModules, pkg);
    if (locations.length > 1) {
      const realPaths = /* @__PURE__ */new Set(),
        distinctLocations = [];
      for (const loc of locations) try {
        const real = (0, import_node_fs.realpathSync)(loc);
        realPaths.has(real) || (realPaths.add(real), distinctLocations.push((0, import_node_path.relative)(root, loc)));
      } catch {
        distinctLocations.push((0, import_node_path.relative)(root, loc));
      }
      distinctLocations.length > 1 && duplicates.set(pkg, distinctLocations);
    }
  }
  if (duplicates.size === 0) return "";
  const lines = ["Found duplicate tamagui installations in node_modules:", "", "This causes multiple runtime instances, which breaks theme/config detection.", ""];
  for (const [pkg, locations] of duplicates) {
    lines.push(`  ${pkg}:`);
    for (const loc of locations) {
      const pkgJsonPath = (0, import_node_path.join)(root, loc, "package.json");
      let version = "?";
      try {
        version = JSON.parse((0, import_node_fs.readFileSync)(pkgJsonPath, "utf8")).version;
      } catch {}
      lines.push(`    ${version} at ${loc}`);
    }
    lines.push("");
  }
  return lines.push("Fix: run your package manager's dedupe command:"), lines.push("  bun install  (bun auto-dedupes)"), lines.push("  npx yarn-deduplicate && yarn install"), lines.push("  npm dedupe"), lines.push(""), lines.push("If that doesn't help, delete node_modules and lockfile, then reinstall."), lines.join(`
`);
}
function findAllInstances(nodeModulesDir, packageName, found = [], depth = 0) {
  if (depth > 4 || !(0, import_node_fs.existsSync)(nodeModulesDir)) return found;
  const pkgDir = (0, import_node_path.join)(nodeModulesDir, ...packageName.split("/"));
  (0, import_node_fs.existsSync)((0, import_node_path.join)(pkgDir, "package.json")) && found.push(pkgDir);
  try {
    const entries = (0, import_node_fs.readdirSync)(nodeModulesDir);
    for (const entry of entries) if (!entry.startsWith(".")) if (entry.startsWith("@")) {
      const scopeDir = (0, import_node_path.join)(nodeModulesDir, entry);
      try {
        const scopeEntries = (0, import_node_fs.readdirSync)(scopeDir);
        for (const scopeEntry of scopeEntries) {
          const nested = (0, import_node_path.join)(scopeDir, scopeEntry, "node_modules");
          (0, import_node_fs.existsSync)(nested) && findAllInstances(nested, packageName, found, depth + 1);
        }
      } catch {}
    } else {
      const nested = (0, import_node_path.join)(nodeModulesDir, entry, "node_modules");
      (0, import_node_fs.existsSync)(nested) && findAllInstances(nested, packageName, found, depth + 1);
    }
  } catch {}
  return found;
}
function checkLockfileDuplicates(root) {
  const bunLock = (0, import_node_path.join)(root, "bun.lock"),
    yarnLock = (0, import_node_path.join)(root, "yarn.lock"),
    npmLock = (0, import_node_path.join)(root, "package-lock.json");
  return (0, import_node_fs.existsSync)(bunLock) ? checkBunLockDuplicates(bunLock) : (0, import_node_fs.existsSync)(yarnLock) ? checkYarnLockDuplicates(yarnLock) : (0, import_node_fs.existsSync)(npmLock) ? checkNpmLockDuplicates(npmLock) : "";
}
function checkBunLockDuplicates(lockPath) {
  try {
    const content = (0, import_node_fs.readFileSync)(lockPath, "utf8"),
      duplicates = /* @__PURE__ */new Map(),
      criticalSet = new Set(CRITICAL_PACKAGES),
      packagePattern = /["'](@tamagui\/[\w-]+|tamagui)@([^"'\s,]+)["']/g;
    let match;
    for (; (match = packagePattern.exec(content)) !== null;) {
      const name = match[1],
        version = match[2];
      version.startsWith("workspace:") || criticalSet.has(name) && (duplicates.has(name) || duplicates.set(name, /* @__PURE__ */new Set()), duplicates.get(name).add(version));
    }
    return formatLockfileDuplicates(duplicates, "bun.lock");
  } catch {
    return "";
  }
}
function checkYarnLockDuplicates(lockPath) {
  try {
    const content = (0, import_node_fs.readFileSync)(lockPath, "utf8"),
      duplicates = /* @__PURE__ */new Map(),
      criticalSet = new Set(CRITICAL_PACKAGES),
      entryPattern = /^"?(@tamagui\/[\w-]+|tamagui)@[^":\n]+[":]?\s*$/gm,
      versionPattern = /^\s+version\s+"([^"]+)"/gm;
    let entryMatch;
    for (; (entryMatch = entryPattern.exec(content)) !== null;) {
      const name = entryMatch[1];
      if (!criticalSet.has(name)) continue;
      versionPattern.lastIndex = entryMatch.index;
      const verMatch = versionPattern.exec(content);
      verMatch && (duplicates.has(name) || duplicates.set(name, /* @__PURE__ */new Set()), duplicates.get(name).add(verMatch[1]));
    }
    return formatLockfileDuplicates(duplicates, "yarn.lock");
  } catch {
    return "";
  }
}
function checkNpmLockDuplicates(lockPath) {
  try {
    const lock = JSON.parse((0, import_node_fs.readFileSync)(lockPath, "utf8")),
      duplicates = /* @__PURE__ */new Map(),
      criticalSet = new Set(CRITICAL_PACKAGES),
      packages = lock.packages || {};
    for (const [path, info] of Object.entries(packages)) {
      if (!path) continue;
      const name = info.name || path.split("node_modules/").pop();
      if (!name || !criticalSet.has(name)) continue;
      const version = info.version;
      version && (duplicates.has(name) || duplicates.set(name, /* @__PURE__ */new Set()), duplicates.get(name).add(version));
    }
    return formatLockfileDuplicates(duplicates, "package-lock.json");
  } catch {
    return "";
  }
}
function formatLockfileDuplicates(duplicates, lockfileName) {
  const multiVersion = /* @__PURE__ */new Map();
  for (const [name, versions] of duplicates) versions.size > 1 && multiVersion.set(name, [...versions].sort());
  if (multiVersion.size === 0) return "";
  const lines = [`Found multiple resolved versions in ${lockfileName}:`, ""];
  for (const [name, versions] of multiVersion) lines.push(`  ${name}: ${versions.join(", ")}`);
  return lines.push(""), lines.push("Multiple versions cause duplicate runtime instances, breaking config/theme detection."), lines.push("Fix: ensure all tamagui packages use the same version range, then dedupe."), lines.join(`
`);
}
function checkConfigExists(root) {
  const configNames = ["tamagui.config.ts", "tamagui.config.tsx", "tamagui.config.js", "tamagui.config.mjs", "tamagui.config.cjs"],
    searchDirs = [root, (0, import_node_path.join)(root, "src"), (0, import_node_path.join)(root, "app"), (0, import_node_path.join)(root, "config")];
  for (const dir of searchDirs) for (const name of configNames) if ((0, import_node_fs.existsSync)((0, import_node_path.join)(dir, name))) return "";
  const buildConfigNames = ["tamagui.build.ts", "tamagui.build.js", "tamagui.build.mjs", "tamagui.build.cjs"];
  for (const name of buildConfigNames) {
    const buildPath = (0, import_node_path.join)(root, name);
    if ((0, import_node_fs.existsSync)(buildPath)) try {
      const match = (0, import_node_fs.readFileSync)(buildPath, "utf8").match(/config\s*:\s*['"`]([^'"`]+)['"`]/);
      if (match) {
        const configPath = (0, import_node_path.join)(root, match[1]);
        if ((0, import_node_fs.existsSync)(configPath)) return "";
      }
    } catch {}
  }
  const pkgJsonPath = (0, import_node_path.join)(root, "package.json");
  if ((0, import_node_fs.existsSync)(pkgJsonPath)) try {
    const pkg = JSON.parse((0, import_node_fs.readFileSync)(pkgJsonPath, "utf8"));
    if (pkg.tamagui?.config) {
      const configPath = (0, import_node_path.join)(root, pkg.tamagui.config);
      if ((0, import_node_fs.existsSync)(configPath)) return "";
    }
  } catch {}
  if ((0, import_node_fs.existsSync)(pkgJsonPath)) try {
    if (JSON.parse((0, import_node_fs.readFileSync)(pkgJsonPath, "utf8")).workspaces) return "";
  } catch {}
  return ["No tamagui.config file found.", "", "Tamagui requires a config file (e.g. tamagui.config.ts) that calls createTamagui().", `Without it, components will throw "Can't find Tamagui configuration" at runtime.`, "", "See: https://tamagui.dev/docs/core/configuration"].join(`
`);
}
async function checkDeps(root) {
  const issues = [],
    workspaceMismatchSummary = new import_check_dep_versions.CDVC(root).toMismatchSummary();
  workspaceMismatchSummary && issues.push(workspaceMismatchSummary);
  const lockfileSummary = checkLockfileDuplicates(root);
  lockfileSummary && issues.push(lockfileSummary);
  const duplicatesSummary = checkDuplicateInstalls(root);
  duplicatesSummary && issues.push(duplicatesSummary);
  const configSummary = checkConfigExists(root);
  configSummary && issues.push(configSummary), issues.length === 0 && (console.info("Tamagui dependencies look good \u2705"), process.exit(0));
  for (let i = 0; i < issues.length; i++) i > 0 && console.error(""), console.error(issues[i]);
  process.exit(1);
}