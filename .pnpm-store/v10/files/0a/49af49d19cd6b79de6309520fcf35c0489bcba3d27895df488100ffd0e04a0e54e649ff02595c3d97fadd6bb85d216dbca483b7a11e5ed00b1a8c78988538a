var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: !0
  }) : target, mod)),
  __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
    value: !0
  }), mod);
var createAnimations_exports = {};
__export(createAnimations_exports, {
  createAnimations: () => createAnimations
});
module.exports = __toCommonJS(createAnimations_exports);
var import_animation_helpers = require("@tamagui/animation-helpers"),
  import_core = require("@tamagui/core"),
  import_use_presence = require("@tamagui/use-presence"),
  import_react = __toESM(require("react"), 1),
  import_react_native_reanimated = __toESM(require("react-native-reanimated"), 1),
  import_jsx_runtime = require("react/jsx-runtime");
const getDefaultExport = module2 => {
    const mod = module2;
    return (mod.__esModule || mod[Symbol.toStringTag] === "Module") && mod.default || mod;
  },
  Animated = getDefaultExport(import_react_native_reanimated.default),
  resolveDynamicValue = (value, isDark) => {
    if (value !== null && typeof value == "object" && "dynamic" in value && typeof value.dynamic == "object") {
      const dynamic = value.dynamic;
      return isDark ? dynamic.dark : dynamic.light;
    }
    return value;
  },
  applyAnimation = (targetValue, config, callback) => {
    "worklet";

    const delay = config.delay;
    let animatedValue;
    return config.type === "timing" ? animatedValue = (0, import_react_native_reanimated.withTiming)(targetValue, config, callback) : animatedValue = (0, import_react_native_reanimated.withSpring)(targetValue, config, callback), delay && delay > 0 && (animatedValue = (0, import_react_native_reanimated.withDelay)(delay, animatedValue)), animatedValue;
  },
  ANIMATABLE_PROPERTIES = {
    // Transform
    transform: !0,
    // Opacity
    opacity: !0,
    // Dimensions
    height: !0,
    width: !0,
    minWidth: !0,
    minHeight: !0,
    maxWidth: !0,
    maxHeight: !0,
    // Background
    backgroundColor: !0,
    // Border colors
    borderColor: !0,
    borderLeftColor: !0,
    borderRightColor: !0,
    borderTopColor: !0,
    borderBottomColor: !0,
    // Border radius
    borderRadius: !0,
    borderTopLeftRadius: !0,
    borderTopRightRadius: !0,
    borderBottomLeftRadius: !0,
    borderBottomRightRadius: !0,
    // Border width
    borderWidth: !0,
    borderLeftWidth: !0,
    borderRightWidth: !0,
    borderTopWidth: !0,
    borderBottomWidth: !0,
    // Text
    color: !0,
    fontSize: !0,
    fontWeight: !0,
    lineHeight: !0,
    letterSpacing: !0,
    // Position
    left: !0,
    right: !0,
    top: !0,
    bottom: !0,
    // Margin
    margin: !0,
    marginTop: !0,
    marginBottom: !0,
    marginLeft: !0,
    marginRight: !0,
    marginHorizontal: !0,
    marginVertical: !0,
    // Padding
    padding: !0,
    paddingTop: !0,
    paddingBottom: !0,
    paddingLeft: !0,
    paddingRight: !0,
    paddingHorizontal: !0,
    paddingVertical: !0,
    // Flex/Gap
    gap: !0,
    rowGap: !0,
    columnGap: !0,
    flex: !0,
    flexGrow: !0,
    flexShrink: !0
  },
  canAnimateProperty = (key, value, animateOnly) => !(!ANIMATABLE_PROPERTIES[key] || value === "auto" || typeof value == "string" && value.startsWith("calc") || animateOnly && !animateOnly.includes(key));
function createWebAnimatedComponent(defaultTag) {
  const isText = defaultTag === "span",
    Component = Animated.createAnimatedComponent((0, import_react.forwardRef)((propsIn, ref) => {
      const {
          forwardedRef,
          render = defaultTag,
          ...rest
        } = propsIn,
        hostRef = (0, import_react.useRef)(null),
        composedRefs = (0, import_core.useComposedRefs)(forwardedRef, ref, hostRef),
        stateRef = (0, import_react.useRef)({
          get host() {
            return hostRef.current;
          }
        }),
        [, themeState] = (0, import_core.useThemeWithState)({}),
        viewProps = (0, import_core.getSplitStyles)(rest, isText ? import_core.Text.staticConfig : import_core.View.staticConfig, themeState?.theme ?? {}, themeState?.name ?? "", {
          unmounted: !1
        }, {
          isAnimated: !1,
          noClass: !0
        })?.viewProps ?? {},
        Element = render,
        transformedProps = import_core.hooks.usePropsTransform?.(render, viewProps, stateRef, !1);
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Element, {
        ...transformedProps,
        ref: composedRefs
      });
    }));
  return Component.acceptRenderProp = !0, Component;
}
const AnimatedView = createWebAnimatedComponent("div"),
  AnimatedText = createWebAnimatedComponent("span");
function buildTransitionConfig(transition, animations, animationState, styleKeys) {
  const normalized = (0, import_animation_helpers.normalizeTransition)(transition),
    effectiveKey = (0, import_animation_helpers.getEffectiveAnimation)(normalized, animationState);
  let base = effectiveKey ? animations[effectiveKey] ?? {
    type: "spring"
  } : {
    type: "spring"
  };
  normalized.delay && (base = {
    ...base,
    delay: normalized.delay
  }), normalized.config && (base = {
    ...base,
    ...normalized.config
  }, base.type !== "timing" && normalized.config.duration !== void 0 && normalized.config.damping === void 0 && normalized.config.stiffness === void 0 && normalized.config.mass === void 0 && (base = {
    ...base,
    type: "timing"
  }));
  const propertyConfigs = {};
  for (const key of styleKeys) {
    const propAnimation = normalized.properties[key];
    if (typeof propAnimation == "string") propertyConfigs[key] = animations[propAnimation] ?? base;else if (propAnimation && typeof propAnimation == "object") {
      const configType = propAnimation.type,
        baseForProp = configType ? animations[configType] ?? base : base;
      propertyConfigs[key] = {
        ...baseForProp,
        ...propAnimation
      };
    } else propertyConfigs[key] = base;
  }
  return {
    baseConfig: base,
    propertyConfigs
  };
}
function getStyleKeys(style) {
  const keys = new Set(Object.keys(style));
  if (style.transform && Array.isArray(style.transform)) for (const t of style.transform) t && typeof t == "object" && keys.add(Object.keys(t)[0]);
  return keys;
}
function createAnimations(animationsConfig) {
  const animations = {};
  for (const key in animationsConfig) animations[key] = {
    type: "spring",
    ...animationsConfig[key]
  };
  return {
    needsCustomComponent: !0,
    View: import_core.isWeb ? AnimatedView : Animated.View,
    Text: import_core.isWeb ? AnimatedText : Animated.Text,
    isReactNative: !0,
    inputStyle: "value",
    outputStyle: "inline",
    avoidReRenders: !0,
    animations,
    usePresence: import_use_presence.usePresence,
    ResetPresence: import_use_presence.ResetPresence,
    // =========================================================================
    // useAnimatedNumber - For imperative animated values
    // =========================================================================
    useAnimatedNumber(initial) {
      const sharedValue = (0, import_react_native_reanimated.useSharedValue)(initial);
      return (0, import_react.useMemo)(() => ({
        getInstance() {
          "worklet";

          return sharedValue;
        },
        getValue() {
          "worklet";

          return sharedValue.value;
        },
        setValue(next, config = {
          type: "spring"
        }, onFinish) {
          if (config.type === "direct") sharedValue.value = next, onFinish?.();else {
            const cb = onFinish ? () => {
              "worklet";

              (0, import_react_native_reanimated.runOnJS)(onFinish)();
            } : void 0;
            import_core.isWeb ? sharedValue.value = config.type === "spring" ? (0, import_react_native_reanimated.withSpring)(next, config, cb) : (0, import_react_native_reanimated.withTiming)(next, config, cb) : (0, import_react_native_reanimated.runOnUI)(() => {
              "worklet";

              sharedValue.value = config.type === "spring" ? (0, import_react_native_reanimated.withSpring)(next, config, cb) : (0, import_react_native_reanimated.withTiming)(next, config, cb);
            })();
          }
        },
        stop() {
          (0, import_react_native_reanimated.cancelAnimation)(sharedValue);
        }
      }), [sharedValue]);
    },
    // =========================================================================
    // useAnimatedNumberReaction - React to animated value changes
    // =========================================================================
    useAnimatedNumberReaction({
      value
    }, onValue) {
      const instance = value.getInstance();
      return (0, import_react_native_reanimated.useAnimatedReaction)(() => instance.value, (next, prev) => {
        prev !== next && (0, import_react_native_reanimated.runOnJS)(onValue)(next);
      }, [onValue, instance]);
    },
    // =========================================================================
    // useAnimatedNumberStyle - Create animated styles from values
    // =========================================================================
    useAnimatedNumberStyle(val, getStyle) {
      const instance = val.getInstance();
      if (import_core.isWeb) return (0, import_react_native_reanimated.useAnimatedStyle)(() => {
        "worklet";

        return getStyle(instance.value);
      }, [instance, getStyle]);
      const styleVal = (0, import_react_native_reanimated.useSharedValue)(getStyle(instance.value));
      return (0, import_react_native_reanimated.useAnimatedReaction)(() => {
        "worklet";

        return instance.value;
      }, (current, previous) => {
        "worklet";

        current !== previous && (styleVal.value = getStyle(current));
      }), (0, import_react_native_reanimated.useAnimatedStyle)(() => {
        "worklet";

        return styleVal.value;
      });
    },
    useAnimatedNumbersStyle(vals, getStyle) {
      const instances = vals.map(v => v.getInstance());
      return (0, import_react_native_reanimated.useAnimatedStyle)(() => {
        "worklet";

        const currentValues = instances.map(inst => inst.value);
        return getStyle(...currentValues);
      }, import_core.isWeb ? [getStyle, ...instances] : void 0);
    },
    // =========================================================================
    // useAnimations - Main animation hook for components
    // =========================================================================
    useAnimations(animationProps) {
      const {
          props,
          presence,
          style,
          componentState,
          useStyleEmitter,
          themeName,
          stateRef,
          styleState
        } = animationProps,
        isHydrating = componentState.unmounted === !0,
        isMounting = componentState.unmounted === "should-enter",
        isEntering = !!componentState.unmounted,
        isExiting = presence?.[0] === !1,
        wasEnteringRef = (0, import_react.useRef)(isEntering),
        justFinishedEntering = wasEnteringRef.current && !isEntering;
      import_react.default.useEffect(() => {
        wasEnteringRef.current = isEntering;
      });
      const effectiveTransition = styleState?.effectiveTransition ?? props.transition,
        normalized = (0, import_animation_helpers.normalizeTransition)(effectiveTransition),
        animationState = isExiting ? "exit" : isMounting || justFinishedEntering ? "enter" : "default",
        animationKey = (0, import_animation_helpers.getEffectiveAnimation)(normalized, animationState),
        disableAnimation = isHydrating || !animationKey,
        isDark = themeName?.startsWith("dark") || !1,
        sendExitComplete = presence?.[1],
        exitCycleIdRef = (0, import_react.useRef)(0),
        pendingExitKeysRef = (0, import_react.useRef)(/* @__PURE__ */new Set()),
        exitCompletedRef = (0, import_react.useRef)(!1),
        wasExitingRef = (0, import_react.useRef)(!1),
        justStartedExiting = isExiting && !wasExitingRef.current,
        justStoppedExiting = !isExiting && wasExitingRef.current,
        markExitKeyDone = (0, import_core.useEvent)((key, cycleId, finished) => {
          cycleId === exitCycleIdRef.current && (exitCompletedRef.current || (pendingExitKeysRef.current.delete(key), pendingExitKeysRef.current.size === 0 && (exitCompletedRef.current = !0, sendExitComplete?.())));
        }),
        isExitingRef = (0, import_react_native_reanimated.useSharedValue)(isExiting),
        exitCycleIdShared = (0, import_react_native_reanimated.useSharedValue)(exitCycleIdRef.current);
      justStartedExiting && (exitCycleIdRef.current++, exitCompletedRef.current = !1, pendingExitKeysRef.current.clear()), justStoppedExiting && (exitCycleIdRef.current++, pendingExitKeysRef.current.clear()), (0, import_core.useIsomorphicLayoutEffect)(() => {
        isExitingRef.value = isExiting, exitCycleIdShared.value = exitCycleIdRef.current;
      }, [isExiting, exitCycleIdRef.current]), import_react.default.useEffect(() => {
        wasExitingRef.current = isExiting;
      });
      const animatedTargetsRef = (0, import_react_native_reanimated.useSharedValue)(null),
        staticTargetsRef = (0, import_react_native_reanimated.useSharedValue)(null),
        transformTargetsRef = (0, import_react_native_reanimated.useSharedValue)(null),
        {
          animatedStyles,
          staticStyles
        } = (0, import_react.useMemo)(() => {
          const animated = {},
            staticStyles2 = {},
            animateOnly = props.animateOnly;
          for (const key in style) {
            const rawValue = style[key],
              value = resolveDynamicValue(rawValue, isDark);
            if (value !== void 0) {
              if (disableAnimation) {
                staticStyles2[key] = value;
                continue;
              }
              canAnimateProperty(key, value, animateOnly) ? animated[key] = value : staticStyles2[key] = value;
            }
          }
          if (isMounting) for (const key in animated) staticStyles2[key] = animated[key];
          return {
            animatedStyles: animated,
            staticStyles: staticStyles2
          };
        }, [disableAnimation, style, isDark, isMounting, props.animateOnly]),
        {
          baseConfig,
          propertyConfigs
        } = (0, import_react.useMemo)(() => isHydrating ? {
          baseConfig: {
            type: "timing",
            duration: 0
          },
          propertyConfigs: {}
        } : buildTransitionConfig(props.transition, animations, animationState, getStyleKeys(animatedStyles)), [isHydrating, props.transition, animatedStyles, animationState]),
        configRef = (0, import_react_native_reanimated.useSharedValue)({
          baseConfig,
          propertyConfigs,
          disableAnimation,
          isHydrating
        });
      (0, import_core.useIsomorphicLayoutEffect)(() => {
        configRef.set({
          baseConfig,
          propertyConfigs,
          disableAnimation,
          isHydrating
        });
      }, [baseConfig, propertyConfigs, disableAnimation, isHydrating]), useStyleEmitter?.((nextStyle, effectiveTransition2) => {
        const animateOnly = props.animateOnly,
          animated = {},
          statics = {},
          transforms = [],
          transitionToUse = effectiveTransition2 ?? props.transition,
          {
            baseConfig: newBase,
            propertyConfigs: newPropertyConfigs
          } = buildTransitionConfig(transitionToUse, animations, animationState, getStyleKeys(nextStyle));
        configRef.set({
          baseConfig: newBase,
          propertyConfigs: newPropertyConfigs,
          disableAnimation: configRef.get().disableAnimation,
          isHydrating: configRef.get().isHydrating
        });
        for (const key in nextStyle) {
          const rawValue = nextStyle[key],
            value = resolveDynamicValue(rawValue, isDark);
          if (value != null) {
            if (configRef.get().disableAnimation) {
              statics[key] = value;
              continue;
            }
            if (key === "transform" && Array.isArray(value)) {
              for (const t of value) if (t && typeof t == "object") {
                const tKey = Object.keys(t)[0],
                  tVal = t[tKey];
                (typeof tVal == "number" || typeof tVal == "string") && transforms.push(t);
              }
              continue;
            }
            canAnimateProperty(key, value, animateOnly) ? animated[key] = value : statics[key] = value;
          }
        }
        animatedTargetsRef.set(animated), staticTargetsRef.set(statics), transformTargetsRef.set(transforms), process.env.NODE_ENV === "development" && props.debug && props.debug !== "profile" && console.info("[animations-reanimated] useStyleEmitter update", {
          animated,
          statics,
          transforms
        });
      });
      const exitKeysRegistered = (0, import_react.useRef)(!1);
      if (justStartedExiting && sendExitComplete) {
        const exitKeys = [],
          animateOnly = props.animateOnly;
        for (const key in animatedStyles) key !== "transform" && canAnimateProperty(key, animatedStyles[key], animateOnly) && exitKeys.push(key);
        const transforms = animatedStyles.transform;
        if (transforms && Array.isArray(transforms)) for (const t of transforms) {
          if (!t) continue;
          const tKey = Object.keys(t)[0];
          if (tKey) {
            if (animateOnly && !animateOnly.includes(tKey)) continue;
            exitKeys.push(`transform:${tKey}`);
          }
        }
        pendingExitKeysRef.current = new Set(exitKeys), exitKeysRegistered.current = exitKeys.length > 0;
      }
      import_react.default.useEffect(() => {
        !justStartedExiting || !sendExitComplete || !exitKeysRegistered.current && pendingExitKeysRef.current.size === 0 && (exitCompletedRef.current || (exitCompletedRef.current = !0, sendExitComplete()));
      }, [justStartedExiting, sendExitComplete]);
      const animatedStyle = (0, import_react_native_reanimated.useAnimatedStyle)(() => {
        "worklet";

        if (disableAnimation || isHydrating) return {};
        const result = {},
          config = configRef.get(),
          emitterAnimated = animatedTargetsRef.value,
          emitterStatic = staticTargetsRef.value,
          emitterTransforms = transformTargetsRef.value,
          hasEmitterUpdates = emitterAnimated !== null,
          animatedValues = hasEmitterUpdates ? emitterAnimated : animatedStyles,
          staticValues = hasEmitterUpdates ? emitterStatic : {},
          currentlyExiting = isExitingRef.value,
          currentCycleId = exitCycleIdShared.value;
        for (const key in staticValues) result[key] = staticValues[key];
        for (const key in animatedValues) {
          if (key === "transform") continue;
          const targetValue = animatedValues[key],
            propConfig = config.propertyConfigs[key] ?? config.baseConfig;
          let callback;
          if (currentlyExiting) {
            const capturedKey = key,
              capturedCycleId = currentCycleId;
            callback = finished => {
              "worklet";

              (0, import_react_native_reanimated.runOnJS)(markExitKeyDone)(capturedKey, capturedCycleId, finished ?? !1);
            };
          }
          result[key] = applyAnimation(targetValue, propConfig, callback);
        }
        const transforms = hasEmitterUpdates ? emitterTransforms : animatedStyles.transform;
        if (transforms && Array.isArray(transforms)) {
          const validTransforms = [];
          for (const t of transforms) {
            if (!t) continue;
            const keys = Object.keys(t);
            if (keys.length === 0) continue;
            const value = t[keys[0]];
            if (typeof value == "number" || typeof value == "string") {
              const transformKey = Object.keys(t)[0],
                targetValue = t[transformKey],
                propConfig = config.propertyConfigs[transformKey] ?? config.baseConfig;
              let callback;
              if (currentlyExiting) {
                const capturedKey = `transform:${transformKey}`,
                  capturedCycleId = currentCycleId;
                callback = finished => {
                  "worklet";

                  (0, import_react_native_reanimated.runOnJS)(markExitKeyDone)(capturedKey, capturedCycleId, finished ?? !1);
                };
              }
              validTransforms.push({
                [transformKey]: applyAnimation(targetValue, propConfig, callback)
              });
            }
          }
          validTransforms.length > 0 && (result.transform = validTransforms);
        }
        return result;
      }, import_core.isWeb ? [animatedStyles, baseConfig, propertyConfigs, disableAnimation, isHydrating,
      // pass SharedValues so the mapper watches them on web (no babel plugin)
      animatedTargetsRef, staticTargetsRef, transformTargetsRef, isExitingRef, exitCycleIdShared, markExitKeyDone] : void 0);
      return process.env.NODE_ENV === "development" && props.debug && props.debug !== "profile" && console.info("[animations-reanimated] useAnimations", {
        animationKey,
        componentState,
        isExiting,
        animatedStyles,
        staticStyles,
        baseConfig,
        propertyConfigs
      }), {
        style: [staticStyles, animatedStyle]
      };
    }
  };
}