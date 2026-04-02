import { createCSSVariable, getVariableValue } from "../createVariable.mjs";
const registerCSSVariable = v => {
    process.env.TAMAGUI_DID_OUTPUT_CSS || tokensValueToVariable.set(getVariableValue(v), v);
  },
  variableToCSS = (v, unitless = !1) => process.env.TAMAGUI_DID_OUTPUT_CSS ? "" : `--${process.env.TAMAGUI_CSS_VARIABLE_PREFIX || ""}${createCSSVariable(v.name, !1)}:${!unitless && typeof v.val == "number" ? `${v.val}px` : v.val}`,
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
export { autoVariables, getOrCreateMutatedVariable, getOrCreateVariable, mutatedAutoVariables, registerCSSVariable, tokensValueToVariable, variableToCSS };
//# sourceMappingURL=registerCSSVariable.mjs.map
