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
var styled_exports = {};
__export(styled_exports, {
  styled: () => styledExport,
  styledHtml: () => styledHtml
});
module.exports = __toCommonJS(styled_exports);
var import_createComponent = require("./createComponent.native.js"),
  import_mergeVariants = require("./helpers/mergeVariants.native.js"),
  import_setupReactNative = require("./setupReactNative.native.js"),
  textLikeElements = /* @__PURE__ */new Set(["a", "abbr", "b", "bdi", "bdo", "cite", "code", "data", "del", "dfn", "em", "i", "ins", "kbd", "label", "mark", "q", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var"]);
function styledHtml(tag, options) {
  var isText = textLikeElements.has(tag),
    {
      variants,
      name,
      defaultVariants,
      context,
      ...defaultProps
    } = options || {},
    conf = {
      Component: tag,
      variants,
      defaultProps,
      defaultVariants,
      componentName: name,
      isReactNative: !1,
      isText,
      acceptsClassName: !0,
      context
    };
  (defaultProps.children || context) && (conf.neverFlatten = !0);
  var component = (0, import_createComponent.createComponent)(conf);
  return component;
}
function styled(ComponentIn, options, config) {
  if (process.env.NODE_ENV !== "production" && !ComponentIn) throw new Error("No component given to styled()");
  var parentStaticConfig = ComponentIn.staticConfig,
    isPlainStyledComponent = !!parentStaticConfig && !(parentStaticConfig.isReactNative || parentStaticConfig.isHOC),
    isNonStyledHOC = parentStaticConfig?.isHOC && !parentStaticConfig?.isStyledHOC,
    Component = isNonStyledHOC || isPlainStyledComponent ? ComponentIn : parentStaticConfig?.Component || ComponentIn,
    reactNativeConfig = parentStaticConfig ? void 0 : (0, import_setupReactNative.getReactNativeConfig)(Component),
    isReactNative = !!(reactNativeConfig || config?.isReactNative || parentStaticConfig?.isReactNative),
    staticConfigProps = function () {
      var {
          variants,
          name,
          defaultVariants,
          context,
          ...defaultProps
        } = options || {},
        parentDefaultVariants,
        parentDefaultProps;
      if (parentStaticConfig) {
        var avoid = parentStaticConfig.isHOC && !parentStaticConfig.isStyledHOC;
        if (!avoid) {
          var pdp = parentStaticConfig.defaultProps;
          for (var key2 in pdp) {
            var val = pdp[key2];
            parentStaticConfig.defaultVariants && key2 in parentStaticConfig.defaultVariants && (!defaultVariants || !(key2 in defaultVariants)) && (parentDefaultVariants || (parentDefaultVariants = {}), parentDefaultVariants[key2] = val), !(key2 in defaultProps) && (!defaultVariants || !(key2 in defaultVariants)) && (parentDefaultProps || (parentDefaultProps = {}), parentDefaultProps[key2] = pdp[key2]);
          }
          parentStaticConfig.variants && (variants = (0, import_mergeVariants.mergeVariants)(parentStaticConfig.variants, variants));
        }
      }
      (parentDefaultProps || defaultVariants || parentDefaultVariants) && (defaultProps = {
        ...parentDefaultProps,
        ...parentDefaultVariants,
        ...defaultProps,
        ...defaultVariants
      }), parentStaticConfig?.isHOC && name && (defaultProps.componentName = name);
      var isText = !!(config?.isText || parentStaticConfig?.isText),
        _config_acceptsClassName,
        acceptsClassName = (_config_acceptsClassName = config?.acceptsClassName) !== null && _config_acceptsClassName !== void 0 ? _config_acceptsClassName : isPlainStyledComponent || isReactNative || parentStaticConfig?.isHOC && parentStaticConfig?.acceptsClassName,
        conf = {
          ...parentStaticConfig,
          ...config,
          ...(!isPlainStyledComponent && {
            Component
          }),
          // @ts-expect-error
          variants,
          defaultProps,
          defaultVariants,
          componentName: name || parentStaticConfig?.componentName,
          isReactNative,
          isText,
          acceptsClassName,
          context,
          ...reactNativeConfig,
          isStyledHOC: !!parentStaticConfig?.isHOC,
          parentStaticConfig
        };
      return (defaultProps.children || !acceptsClassName || context) && (conf.neverFlatten = !0), conf;
    }(),
    component = (0, import_createComponent.createComponent)(staticConfigProps || {});
  for (var key in ComponentIn) key !== "propTypes" && (key in component || (component[key] = ComponentIn[key]));
  return component;
}
var styledExport = new Proxy(styled, {
  get(target, prop) {
    return prop in target ? target[prop] : function (options) {
      return styledHtml(prop, options);
    };
  }
});
//# sourceMappingURL=styled.native.js.map
