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
var detectModuleFormat_exports = {};
__export(detectModuleFormat_exports, {
  clearFormatCache: () => clearFormatCache,
  detectModuleFormat: () => detectModuleFormat
});
module.exports = __toCommonJS(detectModuleFormat_exports);
var import_node_fs = require("node:fs"),
  import_node_path = require("node:path");
const formatCache = /* @__PURE__ */new Map();
function detectModuleFormat(filePath) {
  const ext = (0, import_node_path.extname)(filePath);
  if (ext === ".mjs") return "esm";
  if (ext === ".cjs") return "cjs";
  let dir = (0, import_node_path.dirname)(filePath);
  for (;;) {
    if (formatCache.has(dir)) return formatCache.get(dir);
    try {
      const format = JSON.parse((0, import_node_fs.readFileSync)((0, import_node_path.join)(dir, "package.json"), "utf-8")).type === "module" ? "esm" : "cjs";
      return formatCache.set(dir, format), format;
    } catch {}
    const parent = (0, import_node_path.dirname)(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return "cjs";
}
function clearFormatCache() {
  formatCache.clear();
}