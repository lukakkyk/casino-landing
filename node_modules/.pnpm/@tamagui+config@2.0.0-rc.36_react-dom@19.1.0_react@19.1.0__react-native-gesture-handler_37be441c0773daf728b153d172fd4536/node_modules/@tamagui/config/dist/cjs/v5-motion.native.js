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
var v5_motion_exports = {};
__export(v5_motion_exports, {
  animations: () => animations,
  animationsMotion: () => animationsMotion
});
module.exports = __toCommonJS(v5_motion_exports);
var import_animations_motion = require("@tamagui/animations-motion"),
  animationsMotion = (0, import_animations_motion.createAnimations)({
    "0ms": {
      duration: 0
    },
    "50ms": {
      duration: 50
    },
    "75ms": {
      duration: 75
    },
    "100ms": {
      duration: 100
    },
    "200ms": {
      duration: 200
    },
    "250ms": {
      duration: 250
    },
    "300ms": {
      duration: 300
    },
    "400ms": {
      duration: 400
    },
    "500ms": {
      duration: 500
    },
    superLazy: {
      type: "spring",
      damping: 15,
      mass: 2,
      stiffness: 20
    },
    lazy: {
      type: "spring",
      damping: 11,
      mass: 0.25,
      stiffness: 12
    },
    slowest: {
      type: "spring",
      damping: 9,
      stiffness: 7.5
    },
    slow: {
      type: "spring",
      damping: 27,
      stiffness: 45
    },
    medium: {
      damping: 12,
      stiffness: 100,
      mass: 0.85
    },
    superBouncy: {
      type: "spring",
      damping: 3,
      mass: 0.7,
      stiffness: 135
    },
    bouncy: {
      type: "spring",
      damping: 5.4,
      mass: 0.9,
      stiffness: 90
    },
    quick: {
      type: "spring",
      damping: 17,
      mass: 0.5,
      stiffness: 410
    },
    quickLessBouncy: {
      type: "spring",
      damping: 40,
      mass: 1,
      stiffness: 400,
      velocity: 5
    },
    quicker: {
      type: "spring",
      damping: 20,
      mass: 0.35,
      stiffness: 450
    },
    quickerLessBouncy: {
      type: "spring",
      damping: 26,
      mass: 0.5,
      stiffness: 500
    },
    quickest: {
      type: "spring",
      damping: 22,
      mass: 0.3,
      stiffness: 550
    },
    quickestLessBouncy: {
      type: "spring",
      damping: 28,
      mass: 0.4,
      stiffness: 600
    }
  }),
  animations = animationsMotion;
//# sourceMappingURL=v5-motion.native.js.map
