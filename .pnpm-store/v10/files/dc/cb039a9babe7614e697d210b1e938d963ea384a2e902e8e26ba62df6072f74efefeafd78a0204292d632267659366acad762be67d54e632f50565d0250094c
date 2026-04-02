import { createCSSVariable, getVariableValue } from "../createVariable.native.js";
var registerCSSVariable = function (v) {
    process.env.TAMAGUI_DID_OUTPUT_CSS || tokensValueToVariable.set(getVariableValue(v), v);
  },
  variableToCSS = function (v) {
    var unitless = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return process.env.TAMAGUI_DID_OUTPUT_CSS ? "" : `--${process.env.TAMAGUI_CSS_VARIABLE_PREFIX || ""}${createCSSVariable(v.name, !1)}:${!unitless && typeof v.val == "number" ? `${v.val}px` : v.val}`;
  },
  tokensValueToVariable = /* @__PURE__ */new Map(),
  autoVarId = 0,
  autoVariables = [],
  getOrCreateVariable = function (val) {
    if (tokensValueToVariable.has(val)) return tokensValueToVariable.get(val);
    var name = `t${autoVarId++}`,
      variable = `var(--${name})`,
      v = {
        val,
        name,
        variable
      };
    return tokensValueToVariable.set(val, v), autoVariables.push(v), v;
  },
  mutatedVarId = 1e4,
  mutatedAutoVariables = [],
  mutatedTokensValueToVariable = /* @__PURE__ */new Map(),
  getOrCreateMutatedVariable = function (val) {
    if (mutatedTokensValueToVariable.has(val)) return mutatedTokensValueToVariable.get(val);
    var name = `t${mutatedVarId++}`,
      variable = `var(--${name})`,
      v = {
        val,
        name,
        variable
      };
    return mutatedTokensValueToVariable.set(val, v), mutatedAutoVariables.push(v), v;
  };
export { autoVariables, getOrCreateMutatedVariable, getOrCreateVariable, mutatedAutoVariables, registerCSSVariable, tokensValueToVariable, variableToCSS };
//# sourceMappingURL=registerCSSVariable.native.js.map
