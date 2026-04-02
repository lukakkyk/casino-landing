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
var v5_css_exports = {};
__export(v5_css_exports, {
  animations: () => animations,
  animationsCSS: () => animationsCSS
});
module.exports = __toCommonJS(v5_css_exports);
var import_animations_css = require("@tamagui/animations-css");
const easeOut = "cubic-bezier(0.25, 0.1, 0.25, 1)",
  bouncy = "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  animationsCSS = (0, import_animations_css.createAnimations)({
    "0ms": "0ms linear",
    "50ms": "50ms linear",
    "75ms": "75ms linear",
    "100ms": "100ms ease-out",
    "200ms": "200ms ease-out",
    "250ms": "250ms ease-out",
    "300ms": "300ms ease-out",
    "400ms": "400ms ease-out",
    "500ms": "500ms ease-out",
    superBouncy: "300ms cubic-bezier(0.175, 0.885, 0.32, 1.5)",
    bouncy: `350ms ${bouncy}`,
    superLazy: `600ms ${easeOut}`,
    lazy: `500ms ${easeOut}`,
    medium: `300ms ${easeOut}`,
    slowest: `800ms ${easeOut}`,
    slow: `450ms ${easeOut}`,
    quick: `150ms ${easeOut}`,
    quickLessBouncy: `180ms ${easeOut}`,
    quicker: `120ms ${easeOut}`,
    quickerLessBouncy: `100ms ${easeOut}`,
    quickest: `80ms ${easeOut}`,
    quickestLessBouncy: `60ms ${easeOut}`
  }),
  animations = animationsCSS;