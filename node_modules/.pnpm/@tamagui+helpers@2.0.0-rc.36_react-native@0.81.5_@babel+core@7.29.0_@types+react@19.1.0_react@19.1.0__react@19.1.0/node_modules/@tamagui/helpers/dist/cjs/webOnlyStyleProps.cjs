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
var webOnlyStyleProps_exports = {};
__export(webOnlyStyleProps_exports, {
  nonAnimatableWebTextProps: () => nonAnimatableWebTextProps,
  nonAnimatableWebViewProps: () => nonAnimatableWebViewProps,
  webOnlyStylePropsText: () => webOnlyStylePropsText,
  webOnlyStylePropsView: () => webOnlyStylePropsView
});
module.exports = __toCommonJS(webOnlyStyleProps_exports);
const nonAnimatableWebViewProps = {
    backgroundAttachment: !0,
    backgroundBlendMode: !0,
    backgroundClip: !0,
    backgroundOrigin: !0,
    backgroundRepeat: !0,
    borderBottomStyle: !0,
    borderLeftStyle: !0,
    borderRightStyle: !0,
    borderTopStyle: !0,
    contain: !0,
    containerType: !0,
    content: !0,
    float: !0,
    maskBorderMode: !0,
    maskBorderRepeat: !0,
    maskClip: !0,
    maskComposite: !0,
    maskMode: !0,
    maskOrigin: !0,
    maskRepeat: !0,
    maskType: !0,
    objectFit: !0,
    overflowBlock: !0,
    overflowInline: !0,
    overflowX: !0,
    overflowY: !0,
    // NOTE: pointerEvents is NOT web-only - it's a core React Native View prop (not a style)
    pointerEvents: !0,
    scrollbarWidth: !0,
    textWrap: !0,
    touchAction: !0,
    transformStyle: !0,
    willChange: !0
  },
  nonAnimatableWebTextProps = {
    whiteSpace: !0,
    wordWrap: !0,
    textOverflow: !0,
    WebkitBoxOrient: !0
  },
  webOnlyStylePropsView = {
    ...nonAnimatableWebViewProps,
    transition: !0,
    backdropFilter: !0,
    WebkitBackdropFilter: !0,
    background: !0,
    borderTop: !0,
    borderRight: !0,
    borderBottom: !0,
    borderLeft: !0,
    backgroundPosition: !0,
    backgroundSize: !0,
    borderImage: !0,
    caretColor: !0,
    clipPath: !0,
    mask: !0,
    maskBorder: !0,
    maskBorderOutset: !0,
    maskBorderSlice: !0,
    maskBorderSource: !0,
    maskBorderWidth: !0,
    maskImage: !0,
    maskPosition: !0,
    maskSize: !0,
    objectPosition: !0,
    textEmphasis: !0,
    userSelect: !0
  },
  webOnlyStylePropsText = {
    ...nonAnimatableWebTextProps,
    textDecorationDistance: !0,
    // cursor: now cross-platform - in stylePropsView
    WebkitLineClamp: !0
  };