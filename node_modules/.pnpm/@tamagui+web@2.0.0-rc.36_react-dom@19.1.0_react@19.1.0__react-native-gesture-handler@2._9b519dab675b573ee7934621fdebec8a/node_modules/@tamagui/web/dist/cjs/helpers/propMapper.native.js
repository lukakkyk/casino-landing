"use strict";

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
  import_createVariable = require("../createVariable.native.js"),
  import_expandStyle = require("./expandStyle.native.js"),
  import_getTokenForKey = require("./getTokenForKey.native.js"),
  import_getVariantExtras = require("./getVariantExtras.native.js"),
  import_isObj = require("./isObj.native.js"),
  import_normalizeStyle = require("./normalizeStyle.native.js"),
  import_parseNativeStyle = require("./parseNativeStyle.native.js"),
  import_pseudoDescriptors = require("./pseudoDescriptors.native.js"),
  import_resolveCompoundTokens = require("./resolveCompoundTokens.native.js"),
  import_resolveRem = require("./resolveRem.native.js"),
  import_skipProps = require("./skipProps.native.js"),
  import_getTokenForKey2 = require("./getTokenForKey.native.js");
function _type_of(obj) {
  "@swc/helpers - typeof";

  return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var propMapper = function (key, value, styleState, disabled, map) {
    if (disabled) return map(key, value);
    if ((0, import_getTokenForKey.setLastFontFamilyToken)(null), !(!import_constants.isAndroid && key === "elevationAndroid")) {
      var {
          conf,
          styleProps,
          staticConfig
        } = styleState,
        {
          variants
        } = staticConfig;
      if (!styleProps.noExpand && variants && key in variants) {
        var variantValue = resolveVariants(key, value, styleProps, styleState, "");
        if (variantValue) {
          variantValue.forEach(function (param) {
            var [_$key, _$value] = param;
            return map(_$key, _$value);
          });
          return;
        }
      }
      styleProps.disableExpandShorthands || key in conf.shorthands && (key = conf.shorthands[key]);
      var originalValue = value;
      if (value != null) if (typeof value == "string") {
        if (value[0] === "$") value = (0, import_getTokenForKey.getTokenForKey)(key, value, styleProps, styleState);else {
          var resolved = (0, import_resolveCompoundTokens.resolveCompoundTokens)(key, value, styleProps, styleState);
          value = resolved !== value ? resolved : (0, import_resolveRem.isRemValue)(value) ? (0, import_resolveRem.resolveRem)(value) : value;
        }
      } else (0, import_createVariable.isVariable)(value) ? value = (0, import_getTokenForKey.resolveVariableValue)(key, value, styleProps.resolveValues) : (0, import_resolveRem.isRemValue)(value) && (value = (0, import_resolveRem.resolveRem)(value));
      if (value != null && typeof value == "string" && (key === "backgroundImage" || key === "boxShadow" || key === "textShadow")) {
        var parsed = (0, import_parseNativeStyle.parseNativeStyle)(key, value);
        if (parsed) {
          if (key === "textShadow" && Array.isArray(parsed) && Array.isArray(parsed[0])) {
            var _iteratorNormalCompletion = !0,
              _didIteratorError = !1,
              _iteratorError = void 0;
            try {
              for (var _iterator = parsed[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                var [nkey, nvalue] = _step.value;
                map(nkey, nvalue, originalValue);
              }
            } catch (err) {
              _didIteratorError = !0, _iteratorError = err;
            } finally {
              try {
                !_iteratorNormalCompletion && _iterator.return != null && _iterator.return();
              } finally {
                if (_didIteratorError) throw _iteratorError;
              }
            }
            return;
          }
          value = parsed;
        }
      }
      if (value != null) {
        var fontToken = (0, import_getTokenForKey.getLastFontFamilyToken)();
        key === "fontFamily" && fontToken && (styleState.fontFamily = fontToken);
        var expanded = styleProps.noExpand ? null : (0, import_expandStyle.expandStyle)(key, value);
        if (expanded) for (var max = expanded.length, i = 0; i < max; i++) {
          var [nkey1, nvalue1] = expanded[i];
          map(nkey1, nvalue1, originalValue);
        } else map(key, value, originalValue);
      }
    }
  },
  resolveVariants = function (key, value, styleProps, styleState, parentVariantKey) {
    var {
        staticConfig,
        conf,
        debug
      } = styleState,
      {
        variants
      } = staticConfig;
    if (variants) {
      var variantValue = getVariantDefinition(variants[key], value, conf, styleState);
      if (process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed(`\u2666\uFE0F\u2666\uFE0F\u2666\uFE0F resolve variant ${key}`), console.info({
        key,
        value,
        variantValue,
        variants
      }), console.groupEnd()), !variantValue) {
        if (process.env.TAMAGUI_WARN_ON_MISSING_VARIANT === "1" && typeof value != "boolean") {
          var name = staticConfig.componentName || "[UnnamedComponent]";
          console.warn(`No variant found: ${name} has variant "${key}", but no matching value "${value}"`);
        }
        return;
      }
      if (typeof variantValue == "function") {
        var fn = variantValue,
          extras = (0, import_getVariantExtras.getVariantExtras)(styleState);
        variantValue = fn(value, extras), process.env.NODE_ENV;
      }
      var fontFamilyResult;
      if ((0, import_isObj.isObj)(variantValue)) {
        var fontFamilyUpdate = variantValue.fontFamily || variantValue[conf.inverseShorthands.fontFamily];
        fontFamilyUpdate && (fontFamilyResult = getFontFamilyFromNameOrVariable(fontFamilyUpdate, conf), styleState.fontFamily = fontFamilyResult, process.env.NODE_ENV === "development" && debug === "verbose" && console.info("   updating font family", fontFamilyResult)), variantValue = resolveTokensAndVariants(key, variantValue, styleProps, styleState, parentVariantKey);
      }
      if (variantValue) {
        var expanded = (0, import_normalizeStyle.normalizeStyle)(variantValue, !!styleProps.noNormalize);
        process.env.NODE_ENV === "development" && debug === "verbose" && console.info("   expanding styles from ", variantValue, "to", expanded);
        var next = Object.entries(expanded);
        return fontFamilyResult && fontFamilyResult[0] === "$" && (0, import_getTokenForKey.setLastFontFamilyToken)((0, import_createVariable.getVariableValue)(fontFamilyResult)), next;
      }
    }
  };
function getFontFamilyFromNameOrVariable(input, conf) {
  if ((0, import_createVariable.isVariable)(input)) {
    var val = variableToFontNameCache.get(input);
    if (val) return val;
    for (var key in conf.fontsParsed) {
      var familyVariable = conf.fontsParsed[key].family;
      if ((0, import_createVariable.isVariable)(familyVariable) && (variableToFontNameCache.set(familyVariable, key), familyVariable === input)) return key;
    }
  } else if (typeof input == "string" && input[0] === "$") return input;
}
var variableToFontNameCache = /* @__PURE__ */new WeakMap(),
  resolveTokensAndVariants = function (key, value, styleProps, styleState, parentVariantKey) {
    var {
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
    for (var _key in value) {
      var subKey = conf.shorthands[_key] || _key,
        val = value[_key];
      if (!(!styleProps.noSkip && subKey in import_skipProps.skipProps)) {
        if (staticConfig) {
          var _staticConfig_context,
            _staticConfig_parentStaticConfig_context,
            _staticConfig_parentStaticConfig,
            contextProps = ((_staticConfig_context = staticConfig.context) === null || _staticConfig_context === void 0 ? void 0 : _staticConfig_context.props) || ((_staticConfig_parentStaticConfig = staticConfig.parentStaticConfig) === null || _staticConfig_parentStaticConfig === void 0 || (_staticConfig_parentStaticConfig_context = _staticConfig_parentStaticConfig.context) === null || _staticConfig_parentStaticConfig_context === void 0 ? void 0 : _staticConfig_parentStaticConfig_context.props);
          if (contextProps && subKey in contextProps) {
            var _styleState, _styleState1;
            (_styleState = styleState).overriddenContextProps || (_styleState.overriddenContextProps = {}), styleState.overriddenContextProps[subKey] = val, (_styleState1 = styleState).originalContextPropValues || (_styleState1.originalContextPropValues = {}), styleState.originalContextPropValues[subKey] = val;
          }
        }
        if (styleProps.noExpand) res[subKey] = val;else if (variants && subKey in variants) {
          if (parentVariantKey && parentVariantKey === key) res[subKey] = val[0] === "$" ? (0, import_getTokenForKey.getTokenForKey)(subKey, val, styleProps, styleState) : val;else {
            var variantOut = resolveVariants(subKey, val, styleProps, styleState, key);
            if (variantOut) {
              var _iteratorNormalCompletion = !0,
                _didIteratorError = !1,
                _iteratorError = void 0;
              try {
                for (var _iterator = variantOut[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                  var [_$key, val1] = _step.value;
                  if (val1 != null) if (_$key in import_pseudoDescriptors.pseudoDescriptors) {
                    var _res, _key1, _;
                    (_ = (_res = res)[_key1 = _$key]) !== null && _ !== void 0 || (_res[_key1] = {}), Object.assign(res[_$key], val1);
                  } else res[_$key] = val1;
                }
              } catch (err) {
                _didIteratorError = !0, _iteratorError = err;
              } finally {
                try {
                  !_iteratorNormalCompletion && _iterator.return != null && _iterator.return();
                } finally {
                  if (_didIteratorError) throw _iteratorError;
                }
              }
            }
          }
          continue;
        }
        if ((0, import_createVariable.isVariable)(val)) {
          res[subKey] = (0, import_getTokenForKey.resolveVariableValue)(subKey, val, styleProps.resolveValues), process.env.NODE_ENV === "development" && debug === "verbose" && console.info("variable", subKey, res[subKey]);
          continue;
        }
        if (typeof val == "string") {
          var fVal = val[0] === "$" ? (0, import_getTokenForKey.getTokenForKey)(subKey, val, styleProps, styleState) : (0, import_resolveCompoundTokens.resolveCompoundTokens)(subKey, val, styleProps, styleState);
          res[subKey] = fVal === val && (0, import_resolveRem.isRemValue)(val) ? (0, import_resolveRem.resolveRem)(val) : fVal;
          continue;
        }
        if ((0, import_isObj.isObj)(val)) {
          var _res1,
            _subKey,
            subObject = resolveTokensAndVariants(subKey, val, styleProps, styleState, key);
          process.env.NODE_ENV === "development" && debug === "verbose" && console.info("object", subKey, subObject);
          var _1;
          (_1 = (_res1 = res)[_subKey = subKey]) !== null && _1 !== void 0 || (_res1[_subKey] = {}), Object.assign(res[subKey], subObject);
        } else res[subKey] = val;
        if (process.env.NODE_ENV === "development" && debug) {
          var _res_subKey;
          ((_res_subKey = res[subKey]) === null || _res_subKey === void 0 ? void 0 : _res_subKey[0]) === "$" && console.warn(`\u26A0\uFE0F Missing token in theme ${theme.name}:`, subKey, res[subKey], theme);
        }
      }
    }
    return res;
  },
  tokenCats = ["size", "color", "radius", "space", "zIndex"].map(function (name) {
    return {
      name,
      spreadName: `...${name}`
    };
  });
function getVariantDefinition(variant, value, conf, param) {
  var {
    theme
  } = param;
  if (variant) {
    if (typeof variant == "function") return variant;
    var exact = variant[value];
    if (exact) return exact;
    if (value != null) {
      var {
          tokensParsed
        } = conf,
        _iteratorNormalCompletion = !0,
        _didIteratorError = !1,
        _iteratorError = void 0;
      try {
        for (var _iterator = tokenCats[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
          var {
            name,
            spreadName
          } = _step.value;
          if (spreadName in variant) {
            if (name in tokensParsed && value in tokensParsed[name]) return variant[spreadName];
            if (name === "color" && theme && typeof value == "string" && value[0] === "$") {
              var themeKey = value.slice(1);
              if (themeKey in theme) return variant[spreadName];
            }
          }
        }
      } catch (err) {
        _didIteratorError = !0, _iteratorError = err;
      } finally {
        try {
          !_iteratorNormalCompletion && _iterator.return != null && _iterator.return();
        } finally {
          if (_didIteratorError) throw _iteratorError;
        }
      }
      var fontSizeVariant = variant["...fontSize"];
      if (fontSizeVariant && conf.fontSizeTokens.has(value)) return fontSizeVariant;
    }
    return variant[`:${typeof value > "u" ? "undefined" : _type_of(value)}`] || variant["..."];
  }
}
//# sourceMappingURL=propMapper.native.js.map
