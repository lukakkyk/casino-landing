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
var Image_exports = {};
__export(Image_exports, {
  Image: () => Image
});
module.exports = __toCommonJS(Image_exports);
var import_web = require("@tamagui/web"),
  import_jsx_runtime = require("react/jsx-runtime");
const StyledImage = (0, import_web.styled)(import_web.View, {
    name: "Image",
    render: "img"
  }),
  Image = StyledImage.styleable((inProps, ref) => {
    const {
      // exclude native only props
      blurRadius,
      capInsets,
      defaultSource,
      fadeDuration,
      loadingIndicatorSource,
      onLoadEnd,
      onPartialLoad,
      progressiveRenderingEnabled,
      resizeMethod,
      tintColor,
      ...rest
    } = inProps;
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(StyledImage, {
      ref,
      ...rest
    });
  }, {
    staticConfig: {
      memo: !0
    }
  }),
  func = () => {};
Image.getSize = func;
Image.getSizeWithHeaders = func;
Image.prefetch = func;
Image.prefetchWithMetadata = func;
Image.abortPrefetch = func;
Image.queryCache = func;