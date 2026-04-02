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
var propMapper_exports = {};
__export(propMapper_exports, {
  getFontFamilyFromNameOrVariable: () => getFontFamilyFromNameOrVariable,
  getTokenForKey: () => import_getTokenForKey2.getTokenForKey,
  propMapper: () => propMapper
});
module.exports = __toCommonJS(propMapper_exports);
var import_constants = require("@tamagui/constants"),
  import_createVariable = require("../createVariable.cjs"),
  import_expandStyle = require("./expandStyle.cjs"),
  import_getTokenForKey = require("./getTokenForKey.cjs"),
  import_getVariantExtras = require("./getVariantExtras.cjs"),
  import_isObj = require("./isObj.cjs"),
  import_normalizeStyle = require("./normalizeStyle.cjs"),
  import_parseNativeStyle = require("./parseNativeStyle.cjs"),
  import_pseudoDescriptors = require("./pseudoDescriptors.cjs"),
  import_resolveCompoundTokens = require("./resolveCompoundTokens.cjs"),
  import_resolveRem = require("./resolveRem.cjs"),
  import_skipProps = require("./skipProps.cjs"),
  import_getTokenForKey2 = require("./getTokenForKey.cjs");
const propMapper = (key, value, styleState, disabled, map) => {
    if (disabled) return map(key, value);
    if ((0, import_getTokenForKey.setLastFontFamilyToken)(null), key === "elevationAndroid") return;
    const {
        conf,
        styleProps,
        staticConfig
      } = styleState,
      {
        variants
      } = staticConfig;
    if (!styleProps.noExpand && variants && key in variants) {
      const variantValue = resolveVariants(key, value, styleProps, styleState, "");
      if (variantValue) {
        variantValue.forEach(([key2, value2]) => map(key2, value2));
        return;
      }
    }
    styleProps.disableExpandShorthands || key in conf.shorthands && (key = conf.shorthands[key]);
    const originalValue = value;
    if (value != null) if (typeof value == "string") {
      if (value[0] === "$") value = (0, import_getTokenForKey.getTokenForKey)(key, value, styleProps, styleState);else {
        const resolved = (0, import_resolveCompoundTokens.resolveCompoundTokens)(key, value, styleProps, styleState);
        value = resolved !== value ? resolved : (0, import_resolveRem.isRemValue)(value) ? (0, import_resolveRem.resolveRem)(value) : value;
      }
    } else (0, import_createVariable.isVariable)(value) ? value = (0, import_getTokenForKey.resolveVariableValue)(key, value, styleProps.resolveValues) : (0, import_resolveRem.isRemValue)(value) && (value = (0, import_resolveRem.resolveRem)(value));
    if (value != null) {
      const fontToken = (0, import_getTokenForKey.getLastFontFamilyToken)();
      key === "fontFamily" && fontToken && (styleState.fontFamily = fontToken);
      const expanded = styleProps.noExpand ? null : (0, import_expandStyle.expandStyle)(key, value);
      if (expanded) {
        const max = expanded.length;
        for (let i = 0; i < max; i++) {
          const [nkey, nvalue] = expanded[i];
          map(nkey, nvalue, originalValue);
        }
      } else map(key, value, originalValue);
    }
  },
  resolveVariants = (key, value, styleProps, styleState, parentVariantKey) => {
    const {
        staticConfig,
        conf,
        debug
      } = styleState,
      {
        variants
      } = staticConfig;
    if (!variants) return;
    let variantValue = getVariantDefinition(variants[key], value, conf, styleState);
    if (process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed(`\u2666\uFE0F\u2666\uFE0F\u2666\uFE0F resolve variant ${key}`), console.info({
      key,
      value,
      variantValue,
      variants
    }), console.groupEnd()), !variantValue) {
      if (process.env.TAMAGUI_WARN_ON_MISSING_VARIANT === "1" && typeof value != "boolean") {
        const name = staticConfig.componentName || "[UnnamedComponent]";
        console.warn(`No variant found: ${name} has variant "${key}", but no matching value "${value}"`);
      }
      return;
    }
    if (typeof variantValue == "function") {
      const fn = variantValue,
        extras = (0, import_getVariantExtras.getVariantExtras)(styleState);
      variantValue = fn(value, extras), process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed("   expanded functional variant", key), console.info({
        fn,
        variantValue,
        extras
      }), console.groupEnd());
    }
    let fontFamilyResult;
    if ((0, import_isObj.isObj)(variantValue)) {
      const fontFamilyUpdate = variantValue.fontFamily || variantValue[conf.inverseShorthands.fontFamily];
      fontFamilyUpdate && (fontFamilyResult = getFontFamilyFromNameOrVariable(fontFamilyUpdate, conf), styleState.fontFamily = fontFamilyResult, process.env.NODE_ENV === "development" && debug === "verbose" && console.info("   updating font family", fontFamilyResult)), variantValue = resolveTokensAndVariants(key, variantValue, styleProps, styleState, parentVariantKey);
    }
    if (variantValue) {
      const expanded = (0, import_normalizeStyle.normalizeStyle)(variantValue, !!styleProps.noNormalize);
      process.env.NODE_ENV === "development" && debug === "verbose" && console.info("   expanding styles from ", variantValue, "to", expanded);
      const next = Object.entries(expanded);
      return fontFamilyResult && fontFamilyResult[0] === "$" && (0, import_getTokenForKey.setLastFontFamilyToken)((0, import_createVariable.getVariableValue)(fontFamilyResult)), next;
    }
  };
function getFontFamilyFromNameOrVariable(input, conf) {
  if ((0, import_createVariable.isVariable)(input)) {
    const val = variableToFontNameCache.get(input);
    if (val) return val;
    for (const key in conf.fontsParsed) {
      const familyVariable = conf.fontsParsed[key].family;
      if ((0, import_createVariable.isVariable)(familyVariable) && (variableToFontNameCache.set(familyVariable, key), familyVariable === input)) return key;
    }
  } else if (typeof input == "string" && input[0] === "$") return input;
}
const variableToFontNameCache = /* @__PURE__ */new WeakMap(),
  resolveTokensAndVariants = (key, value, styleProps, styleState, parentVariantKey) => {
    const {
        conf,
        staticConfig,
        debug,
        theme
      } = styleState,
      {
        variants
      } = staticConfig,
      res = {};
    process.env.NODE_ENV === "development" && debug === "verbose" && console.info("   - resolveTokensAndVariants", key, value);
    for (const _key in value) {
      const subKey = conf.shorthands[_key] || _key,
        val = value[_key];
      if (!(!styleProps.noSkip && subKey in import_skipProps.skipProps)) {
        if (staticConfig) {
          const contextProps = staticConfig.context?.props || staticConfig.parentStaticConfig?.context?.props;
          contextProps && subKey in contextProps && (styleState.overriddenContextProps ||= {}, styleState.overriddenContextProps[subKey] = val, styleState.originalContextPropValues ||= {}, styleState.originalContextPropValues[subKey] = val);
        }
        if (styleProps.noExpand) res[subKey] = val;else if (variants && subKey in variants) {
          if (parentVariantKey && parentVariantKey === key) res[subKey] = val[0] === "$" ? (0, import_getTokenForKey.getTokenForKey)(subKey, val, styleProps, styleState) : val;else {
            const variantOut = resolveVariants(subKey, val, styleProps, styleState, key);
            if (variantOut) for (const [key2, val2] of variantOut) val2 != null && (key2 in import_pseudoDescriptors.pseudoDescriptors ? (res[key2] ??= {}, Object.assign(res[key2], val2)) : res[key2] = val2);
          }
          continue;
        }
        if ((0, import_createVariable.isVariable)(val)) {
          res[subKey] = (0, import_getTokenForKey.resolveVariableValue)(subKey, val, styleProps.resolveValues), process.env.NODE_ENV === "development" && debug === "verbose" && console.info("variable", subKey, res[subKey]);
          continue;
        }
        if (typeof val == "string") {
          const fVal = val[0] === "$" ? (0, import_getTokenForKey.getTokenForKey)(subKey, val, styleProps, styleState) : (0, import_resolveCompoundTokens.resolveCompoundTokens)(subKey, val, styleProps, styleState);
          res[subKey] = fVal === val && (0, import_resolveRem.isRemValue)(val) ? (0, import_resolveRem.resolveRem)(val) : fVal;
          continue;
        }
        if ((0, import_isObj.isObj)(val)) {
          const subObject = resolveTokensAndVariants(subKey, val, styleProps, styleState, key);
          process.env.NODE_ENV === "development" && debug === "verbose" && console.info("object", subKey, subObject), res[subKey] ??= {}, Object.assign(res[subKey], subObject);
        } else res[subKey] = val;
        process.env.NODE_ENV === "development" && debug && res[subKey]?.[0] === "$" && console.warn(`\u26A0\uFE0F Missing token in theme ${theme.name}:`, subKey, res[subKey], theme);
      }
    }
    return res;
  },
  tokenCats = ["size", "color", "radius", "space", "zIndex"].map(name => ({
    name,
    spreadName: `...${name}`
  }));
function getVariantDefinition(variant, value, conf, {
  theme
}) {
  if (!variant) return;
  if (typeof variant == "function") return variant;
  const exact = variant[value];
  if (exact) return exact;
  if (value != null) {
    const {
      tokensParsed
    } = conf;
    for (const {
      name,
      spreadName
    } of tokenCats) if (spreadName in variant && (name in tokensParsed && value in tokensParsed[name] || name === "color" && theme && typeof value == "string" && value[0] === "$" && value.slice(1) in theme)) return variant[spreadName];
    const fontSizeVariant = variant["...fontSize"];
    if (fontSizeVariant && conf.fontSizeTokens.has(value)) return fontSizeVariant;
  }
  return variant[`:${typeof value}`] || variant["..."];
}