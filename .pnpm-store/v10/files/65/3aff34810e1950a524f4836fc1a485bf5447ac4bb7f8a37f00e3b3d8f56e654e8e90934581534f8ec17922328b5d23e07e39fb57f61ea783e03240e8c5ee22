import { getVariableValue, isVariable } from "../createVariable.mjs";
import { expandStyle } from "./expandStyle.mjs";
import { getLastFontFamilyToken, getTokenForKey, resolveVariableValue, setLastFontFamilyToken } from "./getTokenForKey.mjs";
import { getVariantExtras } from "./getVariantExtras.mjs";
import { isObj } from "./isObj.mjs";
import { normalizeStyle } from "./normalizeStyle.mjs";
import { pseudoDescriptors } from "./pseudoDescriptors.mjs";
import { resolveCompoundTokens } from "./resolveCompoundTokens.mjs";
import { isRemValue, resolveRem } from "./resolveRem.mjs";
import { skipProps } from "./skipProps.mjs";
import { getTokenForKey as getTokenForKey2 } from "./getTokenForKey.mjs";
const propMapper = (key, value, styleState, disabled, map) => {
    if (disabled) return map(key, value);
    if (setLastFontFamilyToken(null), key === "elevationAndroid") return;
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
      if (value[0] === "$") value = getTokenForKey(key, value, styleProps, styleState);else {
        const resolved = resolveCompoundTokens(key, value, styleProps, styleState);
        value = resolved !== value ? resolved : isRemValue(value) ? resolveRem(value) : value;
      }
    } else isVariable(value) ? value = resolveVariableValue(key, value, styleProps.resolveValues) : isRemValue(value) && (value = resolveRem(value));
    if (value != null) {
      const fontToken = getLastFontFamilyToken();
      key === "fontFamily" && fontToken && (styleState.fontFamily = fontToken);
      const expanded = styleProps.noExpand ? null : expandStyle(key, value);
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
        extras = getVariantExtras(styleState);
      variantValue = fn(value, extras), process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed("   expanded functional variant", key), console.info({
        fn,
        variantValue,
        extras
      }), console.groupEnd());
    }
    let fontFamilyResult;
    if (isObj(variantValue)) {
      const fontFamilyUpdate = variantValue.fontFamily || variantValue[conf.inverseShorthands.fontFamily];
      fontFamilyUpdate && (fontFamilyResult = getFontFamilyFromNameOrVariable(fontFamilyUpdate, conf), styleState.fontFamily = fontFamilyResult, process.env.NODE_ENV === "development" && debug === "verbose" && console.info("   updating font family", fontFamilyResult)), variantValue = resolveTokensAndVariants(key, variantValue, styleProps, styleState, parentVariantKey);
    }
    if (variantValue) {
      const expanded = normalizeStyle(variantValue, !!styleProps.noNormalize);
      process.env.NODE_ENV === "development" && debug === "verbose" && console.info("   expanding styles from ", variantValue, "to", expanded);
      const next = Object.entries(expanded);
      return fontFamilyResult && fontFamilyResult[0] === "$" && setLastFontFamilyToken(getVariableValue(fontFamilyResult)), next;
    }
  };
function getFontFamilyFromNameOrVariable(input, conf) {
  if (isVariable(input)) {
    const val = variableToFontNameCache.get(input);
    if (val) return val;
    for (const key in conf.fontsParsed) {
      const familyVariable = conf.fontsParsed[key].family;
      if (isVariable(familyVariable) && (variableToFontNameCache.set(familyVariable, key), familyVariable === input)) return key;
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
      if (!(!styleProps.noSkip && subKey in skipProps)) {
        if (staticConfig) {
          const contextProps = staticConfig.context?.props || staticConfig.parentStaticConfig?.context?.props;
          contextProps && subKey in contextProps && (styleState.overriddenContextProps ||= {}, styleState.overriddenContextProps[subKey] = val, styleState.originalContextPropValues ||= {}, styleState.originalContextPropValues[subKey] = val);
        }
        if (styleProps.noExpand) res[subKey] = val;else if (variants && subKey in variants) {
          if (parentVariantKey && parentVariantKey === key) res[subKey] = val[0] === "$" ? getTokenForKey(subKey, val, styleProps, styleState) : val;else {
            const variantOut = resolveVariants(subKey, val, styleProps, styleState, key);
            if (variantOut) for (const [key2, val2] of variantOut) val2 != null && (key2 in pseudoDescriptors ? (res[key2] ??= {}, Object.assign(res[key2], val2)) : res[key2] = val2);
          }
          continue;
        }
        if (isVariable(val)) {
          res[subKey] = resolveVariableValue(subKey, val, styleProps.resolveValues), process.env.NODE_ENV === "development" && debug === "verbose" && console.info("variable", subKey, res[subKey]);
          continue;
        }
        if (typeof val == "string") {
          const fVal = val[0] === "$" ? getTokenForKey(subKey, val, styleProps, styleState) : resolveCompoundTokens(subKey, val, styleProps, styleState);
          res[subKey] = fVal === val && isRemValue(val) ? resolveRem(val) : fVal;
          continue;
        }
        if (isObj(val)) {
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
export { getFontFamilyFromNameOrVariable, getTokenForKey2 as getTokenForKey, propMapper };
//# sourceMappingURL=propMapper.mjs.map
