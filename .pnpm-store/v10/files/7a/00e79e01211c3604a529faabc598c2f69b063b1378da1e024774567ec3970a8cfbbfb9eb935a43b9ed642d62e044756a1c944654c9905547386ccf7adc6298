const SPRING_CONFIG_KEYS = /* @__PURE__ */new Set(["stiffness", "damping", "mass", "tension", "friction", "velocity", "overshootClamping", "duration", "bounciness", "speed"]);
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
    const [defaultAnimation, configObj] = transition,
      properties = {},
      springConfig = {};
    let delay,
      enter = null,
      exit = null;
    if (configObj && typeof configObj == "object") for (const [key, value] of Object.entries(configObj)) key === "delay" && typeof value == "number" ? delay = value : key === "enter" && typeof value == "string" ? enter = value : key === "exit" && typeof value == "string" ? exit = value : isSpringConfigKey(key) && value !== void 0 ? springConfig[key] = value : value !== void 0 && (properties[key] = value);
    return {
      default: defaultAnimation,
      enter,
      exit,
      delay,
      properties,
      config: Object.keys(springConfig).length > 0 ? springConfig : void 0
    };
  }
  if (typeof transition == "object") {
    const properties = {},
      springConfig = {};
    let defaultAnimation = null,
      enter = null,
      exit = null,
      delay;
    for (const [key, value] of Object.entries(transition)) key === "default" && typeof value == "string" ? defaultAnimation = value : key === "enter" && typeof value == "string" ? enter = value : key === "exit" && typeof value == "string" ? exit = value : key === "delay" && typeof value == "number" ? delay = value : isSpringConfigKey(key) && value !== void 0 ? springConfig[key] = value : value !== void 0 && (properties[key] = value);
    return {
      default: defaultAnimation,
      enter,
      exit,
      delay,
      properties,
      config: Object.keys(springConfig).length > 0 ? springConfig : void 0
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
  const propertyAnimation = normalized.properties[property];
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
  const result = /* @__PURE__ */new Map();
  for (const key of keys) {
    const propAnimation = normalized.properties[key];
    let animationValue = null;
    typeof propAnimation == "string" ? animationValue = animations[propAnimation] ?? null : propAnimation && typeof propAnimation == "object" && propAnimation.type && (animationValue = animations[propAnimation.type] ?? null), animationValue === null && (animationValue = defaultAnimation), result.set(key, animationValue);
  }
  return result;
}
export { getAnimatedProperties, getAnimationConfigsForKeys, getAnimationForProperty, getEffectiveAnimation, hasAnimation, normalizeTransition };
//# sourceMappingURL=normalizeTransition.mjs.map
