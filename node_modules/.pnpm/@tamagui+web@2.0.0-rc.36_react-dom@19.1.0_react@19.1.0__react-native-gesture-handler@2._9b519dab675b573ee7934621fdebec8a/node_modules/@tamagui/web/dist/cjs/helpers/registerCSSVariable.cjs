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
var registerCSSVariable_exports = {};
__export(registerCSSVariable_exports, {
  autoVariables: () => autoVariables,
  getOrCreateMutatedVariable: () => getOrCreateMutatedVariable,
  getOrCreateVariable: () => getOrCreateVariable,
  mutatedAutoVariables: () => mutatedAutoVariables,
  registerCSSVariable: () => registerCSSVariable,
  tokensValueToVariable: () => tokensValueToVariable,
  variableToCSS: () => variableToCSS
});
module.exports = __toCommonJS(registerCSSVariable_exports);
var import_createVariable = require("../createVariable.cjs");
const registerCSSVariable = v => {
    process.env.TAMAGUI_DID_OUTPUT_CSS || tokensValueToVariable.set((0, import_createVariable.getVariableValue)(v), v);
  },
  variableToCSS = (v, unitless = !1) => process.env.TAMAGUI_DID_OUTPUT_CSS ? "" : `--${process.env.TAMAGUI_CSS_VARIABLE_PREFIX || ""}${(0, import_createVariable.createCSSVariable)(v.name, !1)}:${!unitless && typeof v.val == "number" ? `${v.val}px` : v.val}`,
  tokensValueToVariable = /* @__PURE__ */new Map();
let autoVarId = 0;
const autoVariables = [],
  getOrCreateVariable = val => {
    if (tokensValueToVariable.has(val)) return tokensValueToVariable.get(val);
    const name = `t${autoVarId++}`,
      variable = `var(--${name})`,
      v = {
        val,
        name,
        variable
      };
    return tokensValueToVariable.set(val, v), autoVariables.push(v), v;
  };
let mutatedVarId = 1e4;
const mutatedAutoVariables = [],
  mutatedTokensValueToVariable = /* @__PURE__ */new Map(),
  getOrCreateMutatedVariable = val => {
    if (mutatedTokensValueToVariable.has(val)) return mutatedTokensValueToVariable.get(val);
    const name = `t${mutatedVarId++}`,
      variable = `var(--${name})`,
      v = {
        val,
        name,
        variable
      };
    return mutatedTokensValueToVariable.set(val, v), mutatedAutoVariables.push(v), v;
  };