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
var normalizeTransition_exports = {};
__export(normalizeTransition_exports, {
  getAnimatedProperties: () => getAnimatedProperties,
  getAnimationConfigsForKeys: () => getAnimationConfigsForKeys,
  getAnimationForProperty: () => getAnimationForProperty,
  getEffectiveAnimation: () => getEffectiveAnimation,
  hasAnimation: () => hasAnimation,
  normalizeTransition: () => normalizeTransition
});
module.exports = __toCommonJS(normalizeTransition_exports);
function _type_of(obj) {
  "@swc/helpers - typeof";

  return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var SPRING_CONFIG_KEYS = /* @__PURE__ */new Set(["stiffness", "damping", "mass", "tension", "friction", "velocity", "overshootClamping", "duration", "bounciness", "speed"]);
function isSpringConfigKey(key) {
  return SPRING_CONFIG_KEYS.has(key);
}
function normalizeTransition(transition) {
  if (!transition) return {
    default: null,
    enter: null,
    exit: null,
    delay: void 0,
    properties: {}
  };
  if (typeof transition == "string") return {
    default: transition,
    enter: null,
    exit: null,
    delay: void 0,
    properties: {}
  };
  if (Array.isArray(transition)) {
    var [defaultAnimation, configObj] = transition,
      properties = {},
      springConfig = {},
      delay,
      enter = null,
      exit = null;
    if (configObj && (typeof configObj > "u" ? "undefined" : _type_of(configObj)) === "object") {
      var _iteratorNormalCompletion = !0,
        _didIteratorError = !1,
        _iteratorError = void 0;
      try {
        for (var _iterator = Object.entries(configObj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
          var [key, value] = _step.value;
          key === "delay" && typeof value == "number" ? delay = value : key === "enter" && typeof value == "string" ? enter = value : key === "exit" && typeof value == "string" ? exit = value : isSpringConfigKey(key) && value !== void 0 ? springConfig[key] = value : value !== void 0 && (properties[key] = value);
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
    return {
      default: defaultAnimation,
      enter,
      exit,
      delay,
      properties,
      config: Object.keys(springConfig).length > 0 ? springConfig : void 0
    };
  }
  if ((typeof transition > "u" ? "undefined" : _type_of(transition)) === "object") {
    var properties1 = {},
      springConfig1 = {},
      defaultAnimation1 = null,
      enter1 = null,
      exit1 = null,
      delay1,
      _iteratorNormalCompletion1 = !0,
      _didIteratorError1 = !1,
      _iteratorError1 = void 0;
    try {
      for (var _iterator1 = Object.entries(transition)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = !0) {
        var [key1, value1] = _step1.value;
        key1 === "default" && typeof value1 == "string" ? defaultAnimation1 = value1 : key1 === "enter" && typeof value1 == "string" ? enter1 = value1 : key1 === "exit" && typeof value1 == "string" ? exit1 = value1 : key1 === "delay" && typeof value1 == "number" ? delay1 = value1 : isSpringConfigKey(key1) && value1 !== void 0 ? springConfig1[key1] = value1 : value1 !== void 0 && (properties1[key1] = value1);
      }
    } catch (err) {
      _didIteratorError1 = !0, _iteratorError1 = err;
    } finally {
      try {
        !_iteratorNormalCompletion1 && _iterator1.return != null && _iterator1.return();
      } finally {
        if (_didIteratorError1) throw _iteratorError1;
      }
    }
    return {
      default: defaultAnimation1,
      enter: enter1,
      exit: exit1,
      delay: delay1,
      properties: properties1,
      config: Object.keys(springConfig1).length > 0 ? springConfig1 : void 0
    };
  }
  return {
    default: null,
    enter: null,
    exit: null,
    delay: void 0,
    properties: {}
  };
}
function getAnimationForProperty(normalized, property) {
  var propertyAnimation = normalized.properties[property];
  return propertyAnimation !== void 0 ? propertyAnimation : normalized.default;
}
function hasAnimation(normalized) {
  return normalized.default !== null || normalized.enter !== null || normalized.exit !== null || Object.keys(normalized.properties).length > 0;
}
function getAnimatedProperties(normalized) {
  return Object.keys(normalized.properties);
}
function getEffectiveAnimation(normalized, state) {
  return state === "enter" && normalized.enter ? normalized.enter : state === "exit" && normalized.exit ? normalized.exit : normalized.default;
}
function getAnimationConfigsForKeys(normalized, animations, keys, defaultAnimation) {
  var result = /* @__PURE__ */new Map(),
    _iteratorNormalCompletion = !0,
    _didIteratorError = !1,
    _iteratorError = void 0;
  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
      var key = _step.value,
        propAnimation = normalized.properties[key],
        animationValue = null;
      if (typeof propAnimation == "string") {
        var _animations_propAnimation;
        animationValue = (_animations_propAnimation = animations[propAnimation]) !== null && _animations_propAnimation !== void 0 ? _animations_propAnimation : null;
      } else if (propAnimation && (typeof propAnimation > "u" ? "undefined" : _type_of(propAnimation)) === "object" && propAnimation.type) {
        var _animations_propAnimation_type;
        animationValue = (_animations_propAnimation_type = animations[propAnimation.type]) !== null && _animations_propAnimation_type !== void 0 ? _animations_propAnimation_type : null;
      }
      animationValue === null && (animationValue = defaultAnimation), result.set(key, animationValue);
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
  return result;
}
//# sourceMappingURL=normalizeTransition.native.js.map
