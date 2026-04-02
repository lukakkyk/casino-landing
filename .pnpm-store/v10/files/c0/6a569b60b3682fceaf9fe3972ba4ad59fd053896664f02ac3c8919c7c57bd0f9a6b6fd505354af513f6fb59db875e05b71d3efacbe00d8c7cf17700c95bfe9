"use strict";

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
var import_jsx_runtime = require("react/jsx-runtime"),
  import_animation_helpers = require("@tamagui/animation-helpers"),
  import_core = require("@tamagui/core"),
  import_use_presence = require("@tamagui/use-presence"),
  import_react = __toESM(require("react"), 1),
  import_react_native_reanimated = __toESM(require("react-native-reanimated"), 1);
function _type_of(obj) {
  "@swc/helpers - typeof";

  return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var getDefaultExport = function (module2) {
    var mod = module2;
    return (mod.__esModule || mod[Symbol.toStringTag] === "Module") && mod.default || mod;
  },
  Animated = getDefaultExport(import_react_native_reanimated.default),
  resolveDynamicValue = function (value, isDark) {
    if (value !== null && (typeof value > "u" ? "undefined" : _type_of(value)) === "object" && "dynamic" in value && _type_of(value.dynamic) === "object") {
      var dynamic = value.dynamic;
      return isDark ? dynamic.dark : dynamic.light;
    }
    return value;
  },
  applyAnimation = function (targetValue, config, callback) {
    "worklet";

    var delay = config.delay,
      animatedValue;
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
  canAnimateProperty = function (key, value, animateOnly) {
    return !(!ANIMATABLE_PROPERTIES[key] || value === "auto" || typeof value == "string" && value.startsWith("calc") || animateOnly && !animateOnly.includes(key));
  };
function createWebAnimatedComponent(defaultTag) {
  var isText = defaultTag === "span",
    Component = Animated.createAnimatedComponent(/* @__PURE__ */(0, import_react.forwardRef)(function (propsIn, ref) {
      var _hooks_usePropsTransform,
        {
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
        _themeState_theme,
        _themeState_name,
        result = (0, import_core.getSplitStyles)(rest, isText ? import_core.Text.staticConfig : import_core.View.staticConfig, (_themeState_theme = themeState?.theme) !== null && _themeState_theme !== void 0 ? _themeState_theme : {}, (_themeState_name = themeState?.name) !== null && _themeState_name !== void 0 ? _themeState_name : "", {
          unmounted: !1
        }, {
          isAnimated: !1,
          noClass: !0
        }),
        _result_viewProps,
        viewProps = (_result_viewProps = result?.viewProps) !== null && _result_viewProps !== void 0 ? _result_viewProps : {},
        Element = render,
        transformedProps = (_hooks_usePropsTransform = import_core.hooks.usePropsTransform) === null || _hooks_usePropsTransform === void 0 ? void 0 : _hooks_usePropsTransform.call(import_core.hooks, render, viewProps, stateRef, !1);
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Element, {
        ...transformedProps,
        ref: composedRefs
      });
    }));
  return Component.acceptRenderProp = !0, Component;
}
var AnimatedView = createWebAnimatedComponent("div"),
  AnimatedText = createWebAnimatedComponent("span");
function buildTransitionConfig(transition, animations, animationState, styleKeys) {
  var normalized = (0, import_animation_helpers.normalizeTransition)(transition),
    effectiveKey = (0, import_animation_helpers.getEffectiveAnimation)(normalized, animationState),
    _animations_effectiveKey,
    base = effectiveKey ? (_animations_effectiveKey = animations[effectiveKey]) !== null && _animations_effectiveKey !== void 0 ? _animations_effectiveKey : {
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
  var propertyConfigs = {},
    _iteratorNormalCompletion = !0,
    _didIteratorError = !1,
    _iteratorError = void 0;
  try {
    for (var _iterator = styleKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
      var key = _step.value,
        propAnimation = normalized.properties[key];
      if (typeof propAnimation == "string") {
        var _animations_propAnimation;
        propertyConfigs[key] = (_animations_propAnimation = animations[propAnimation]) !== null && _animations_propAnimation !== void 0 ? _animations_propAnimation : base;
      } else if (propAnimation && (typeof propAnimation > "u" ? "undefined" : _type_of(propAnimation)) === "object") {
        var configType = propAnimation.type,
          _animations_configType,
          baseForProp = configType && (_animations_configType = animations[configType]) !== null && _animations_configType !== void 0 ? _animations_configType : base;
        propertyConfigs[key] = {
          ...baseForProp,
          ...propAnimation
        };
      } else propertyConfigs[key] = base;
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
  return {
    baseConfig: base,
    propertyConfigs
  };
}
function getStyleKeys(style) {
  var keys = new Set(Object.keys(style));
  if (style.transform && Array.isArray(style.transform)) {
    var _iteratorNormalCompletion = !0,
      _didIteratorError = !1,
      _iteratorError = void 0;
    try {
      for (var _iterator = style.transform[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
        var t = _step.value;
        t && (typeof t > "u" ? "undefined" : _type_of(t)) === "object" && keys.add(Object.keys(t)[0]);
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
  return keys;
}
function createAnimations(animationsConfig) {
  var animations = {};
  for (var key in animationsConfig) animations[key] = {
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
      var sharedValue = (0, import_react_native_reanimated.useSharedValue)(initial);
      return (0, import_react.useMemo)(function () {
        return {
          getInstance() {
            "worklet";

            return sharedValue;
          },
          getValue() {
            "worklet";

            return sharedValue.value;
          },
          setValue(next) {
            var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                type: "spring"
              },
              onFinish = arguments.length > 2 ? arguments[2] : void 0;
            if (config.type === "direct") sharedValue.value = next, onFinish?.();else {
              var cb = onFinish ? function () {
                "worklet";

                (0, import_react_native_reanimated.runOnJS)(onFinish)();
              } : void 0;
              import_core.isWeb ? sharedValue.value = config.type === "spring" ? (0, import_react_native_reanimated.withSpring)(next, config, cb) : (0, import_react_native_reanimated.withTiming)(next, config, cb) : (0, import_react_native_reanimated.runOnUI)(function () {
                "worklet";

                sharedValue.value = config.type === "spring" ? (0, import_react_native_reanimated.withSpring)(next, config, cb) : (0, import_react_native_reanimated.withTiming)(next, config, cb);
              })();
            }
          },
          stop() {
            (0, import_react_native_reanimated.cancelAnimation)(sharedValue);
          }
        };
      }, [sharedValue]);
    },
    // =========================================================================
    // useAnimatedNumberReaction - React to animated value changes
    // =========================================================================
    useAnimatedNumberReaction(param, onValue) {
      var {
          value
        } = param,
        instance = value.getInstance();
      return (0, import_react_native_reanimated.useAnimatedReaction)(function () {
        return instance.value;
      }, function (next, prev) {
        prev !== next && (0, import_react_native_reanimated.runOnJS)(onValue)(next);
      }, [onValue, instance]);
    },
    // =========================================================================
    // useAnimatedNumberStyle - Create animated styles from values
    // =========================================================================
    useAnimatedNumberStyle(val, getStyle) {
      var instance = val.getInstance();
      if (import_core.isWeb) return (0, import_react_native_reanimated.useAnimatedStyle)(function () {
        "worklet";

        return getStyle(instance.value);
      }, [instance, getStyle]);
      var styleVal = (0, import_react_native_reanimated.useSharedValue)(getStyle(instance.value));
      return (0, import_react_native_reanimated.useAnimatedReaction)(function () {
        "worklet";

        return instance.value;
      }, function (current, previous) {
        "worklet";

        current !== previous && (styleVal.value = getStyle(current));
      }), (0, import_react_native_reanimated.useAnimatedStyle)(function () {
        "worklet";

        return styleVal.value;
      });
    },
    useAnimatedNumbersStyle(vals, getStyle) {
      var instances = vals.map(function (v) {
        return v.getInstance();
      });
      return (0, import_react_native_reanimated.useAnimatedStyle)(function () {
        "worklet";

        var currentValues = instances.map(function (inst) {
          return inst.value;
        });
        return getStyle(...currentValues);
      }, import_core.isWeb ? [getStyle, ...instances] : void 0);
    },
    // =========================================================================
    // useAnimations - Main animation hook for components
    // =========================================================================
    useAnimations(animationProps) {
      var {
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
      import_react.default.useEffect(function () {
        wasEnteringRef.current = isEntering;
      });
      var _styleState_effectiveTransition,
        effectiveTransition = (_styleState_effectiveTransition = styleState?.effectiveTransition) !== null && _styleState_effectiveTransition !== void 0 ? _styleState_effectiveTransition : props.transition,
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
        markExitKeyDone = (0, import_core.useEvent)(function (key3, cycleId, finished) {
          cycleId === exitCycleIdRef.current && (exitCompletedRef.current || (pendingExitKeysRef.current.delete(key3), pendingExitKeysRef.current.size === 0 && (exitCompletedRef.current = !0, sendExitComplete?.())));
        }),
        isExitingRef = (0, import_react_native_reanimated.useSharedValue)(isExiting),
        exitCycleIdShared = (0, import_react_native_reanimated.useSharedValue)(exitCycleIdRef.current);
      justStartedExiting && (exitCycleIdRef.current++, exitCompletedRef.current = !1, pendingExitKeysRef.current.clear()), justStoppedExiting && (exitCycleIdRef.current++, pendingExitKeysRef.current.clear()), (0, import_core.useIsomorphicLayoutEffect)(function () {
        isExitingRef.value = isExiting, exitCycleIdShared.value = exitCycleIdRef.current;
      }, [isExiting, exitCycleIdRef.current]), import_react.default.useEffect(function () {
        wasExitingRef.current = isExiting;
      });
      var animatedTargetsRef = (0, import_react_native_reanimated.useSharedValue)(null),
        staticTargetsRef = (0, import_react_native_reanimated.useSharedValue)(null),
        transformTargetsRef = (0, import_react_native_reanimated.useSharedValue)(null),
        {
          animatedStyles,
          staticStyles
        } = (0, import_react.useMemo)(function () {
          var animated = {},
            staticStyles2 = {},
            animateOnly2 = props.animateOnly;
          for (var key3 in style) {
            var rawValue = style[key3],
              value = resolveDynamicValue(rawValue, isDark);
            if (value !== void 0) {
              if (disableAnimation) {
                staticStyles2[key3] = value;
                continue;
              }
              canAnimateProperty(key3, value, animateOnly2) ? animated[key3] = value : staticStyles2[key3] = value;
            }
          }
          if (isMounting) for (var key1 in animated) staticStyles2[key1] = animated[key1];
          return {
            animatedStyles: animated,
            staticStyles: staticStyles2
          };
        }, [disableAnimation, style, isDark, isMounting, props.animateOnly]),
        {
          baseConfig,
          propertyConfigs
        } = (0, import_react.useMemo)(function () {
          return isHydrating ? {
            baseConfig: {
              type: "timing",
              duration: 0
            },
            propertyConfigs: {}
          } : buildTransitionConfig(props.transition, animations, animationState, getStyleKeys(animatedStyles));
        }, [isHydrating, props.transition, animatedStyles, animationState]),
        configRef = (0, import_react_native_reanimated.useSharedValue)({
          baseConfig,
          propertyConfigs,
          disableAnimation,
          isHydrating
        });
      (0, import_core.useIsomorphicLayoutEffect)(function () {
        configRef.set({
          baseConfig,
          propertyConfigs,
          disableAnimation,
          isHydrating
        });
      }, [baseConfig, propertyConfigs, disableAnimation, isHydrating]), useStyleEmitter?.(function (nextStyle, effectiveTransition2) {
        var animateOnly2 = props.animateOnly,
          animated = {},
          statics = {},
          transforms2 = [],
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
        for (var key3 in nextStyle) {
          var rawValue = nextStyle[key3],
            value = resolveDynamicValue(rawValue, isDark);
          if (value != null) {
            if (configRef.get().disableAnimation) {
              statics[key3] = value;
              continue;
            }
            if (key3 === "transform" && Array.isArray(value)) {
              var _iteratorNormalCompletion2 = !0,
                _didIteratorError2 = !1,
                _iteratorError2 = void 0;
              try {
                for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = !0) {
                  var t2 = _step2.value;
                  if (t2 && (typeof t2 > "u" ? "undefined" : _type_of(t2)) === "object") {
                    var tKey2 = Object.keys(t2)[0],
                      tVal = t2[tKey2];
                    (typeof tVal == "number" || typeof tVal == "string") && transforms2.push(t2);
                  }
                }
              } catch (err) {
                _didIteratorError2 = !0, _iteratorError2 = err;
              } finally {
                try {
                  !_iteratorNormalCompletion2 && _iterator2.return != null && _iterator2.return();
                } finally {
                  if (_didIteratorError2) throw _iteratorError2;
                }
              }
              continue;
            }
            canAnimateProperty(key3, value, animateOnly2) ? animated[key3] = value : statics[key3] = value;
          }
        }
        animatedTargetsRef.set(animated), staticTargetsRef.set(statics), transformTargetsRef.set(transforms2), process.env.NODE_ENV === "development" && props.debug && props.debug !== "profile" && console.info("[animations-reanimated] useStyleEmitter update", {
          animated,
          statics,
          transforms: transforms2
        });
      });
      var exitKeysRegistered = (0, import_react.useRef)(!1);
      if (justStartedExiting && sendExitComplete) {
        var exitKeys = [],
          animateOnly = props.animateOnly;
        for (var key2 in animatedStyles) key2 !== "transform" && canAnimateProperty(key2, animatedStyles[key2], animateOnly) && exitKeys.push(key2);
        var transforms = animatedStyles.transform;
        if (transforms && Array.isArray(transforms)) {
          var _iteratorNormalCompletion = !0,
            _didIteratorError = !1,
            _iteratorError = void 0;
          try {
            for (var _iterator = transforms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
              var t = _step.value;
              if (t) {
                var tKey = Object.keys(t)[0];
                if (tKey) {
                  if (animateOnly && !animateOnly.includes(tKey)) continue;
                  exitKeys.push(`transform:${tKey}`);
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
        }
        pendingExitKeysRef.current = new Set(exitKeys), exitKeysRegistered.current = exitKeys.length > 0;
      }
      import_react.default.useEffect(function () {
        !justStartedExiting || !sendExitComplete || !exitKeysRegistered.current && pendingExitKeysRef.current.size === 0 && (exitCompletedRef.current || (exitCompletedRef.current = !0, sendExitComplete()));
      }, [justStartedExiting, sendExitComplete]);
      var animatedStyle = (0, import_react_native_reanimated.useAnimatedStyle)(function () {
        "worklet";

        var _loop = function (key12) {
          if (key12 === "transform") return "continue";
          var targetValue = animatedValues[key12],
            _config_propertyConfigs_key,
            propConfig = (_config_propertyConfigs_key = config.propertyConfigs[key12]) !== null && _config_propertyConfigs_key !== void 0 ? _config_propertyConfigs_key : config.baseConfig,
            callback = void 0;
          if (currentlyExiting) {
            var capturedKey = key12,
              capturedCycleId = currentCycleId;
            callback = function (finished) {
              "worklet";

              (0, import_react_native_reanimated.runOnJS)(markExitKeyDone)(capturedKey, capturedCycleId, finished ?? !1);
            };
          }
          result[key12] = applyAnimation(targetValue, propConfig, callback);
        };
        if (disableAnimation || isHydrating) return {};
        var result = {},
          config = configRef.get(),
          emitterAnimated = animatedTargetsRef.value,
          emitterStatic = staticTargetsRef.value,
          emitterTransforms = transformTargetsRef.value,
          hasEmitterUpdates = emitterAnimated !== null,
          animatedValues = hasEmitterUpdates ? emitterAnimated : animatedStyles,
          staticValues = hasEmitterUpdates ? emitterStatic : {},
          currentlyExiting = isExitingRef.value,
          currentCycleId = exitCycleIdShared.value;
        for (var key3 in staticValues) result[key3] = staticValues[key3];
        for (var key1 in animatedValues) _loop(key1);
        var transforms2 = hasEmitterUpdates ? emitterTransforms : animatedStyles.transform;
        if (transforms2 && Array.isArray(transforms2)) {
          var validTransforms = [],
            _iteratorNormalCompletion2 = !0,
            _didIteratorError2 = !1,
            _iteratorError2 = void 0;
          try {
            for (var _loop1 = function () {
                var t2 = _step2.value;
                if (!t2) return "continue";
                var keys = Object.keys(t2);
                if (keys.length === 0) return "continue";
                var value = t2[keys[0]];
                if (typeof value == "number" || typeof value == "string") {
                  var transformKey = Object.keys(t2)[0],
                    targetValue = t2[transformKey],
                    _config_propertyConfigs_transformKey,
                    propConfig = (_config_propertyConfigs_transformKey = config.propertyConfigs[transformKey]) !== null && _config_propertyConfigs_transformKey !== void 0 ? _config_propertyConfigs_transformKey : config.baseConfig,
                    callback = void 0;
                  if (currentlyExiting) {
                    var capturedKey = `transform:${transformKey}`,
                      capturedCycleId = currentCycleId;
                    callback = function (finished) {
                      "worklet";

                      (0, import_react_native_reanimated.runOnJS)(markExitKeyDone)(capturedKey, capturedCycleId, finished ?? !1);
                    };
                  }
                  validTransforms.push({
                    [transformKey]: applyAnimation(targetValue, propConfig, callback)
                  });
                }
              }, _iterator2 = transforms2[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = !0) _loop1();
          } catch (err) {
            _didIteratorError2 = !0, _iteratorError2 = err;
          } finally {
            try {
              !_iteratorNormalCompletion2 && _iterator2.return != null && _iterator2.return();
            } finally {
              if (_didIteratorError2) throw _iteratorError2;
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
//# sourceMappingURL=createAnimations.native.js.map
