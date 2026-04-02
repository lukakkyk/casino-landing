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
  createAnimations: () => createAnimations,
  disableAnimationProps: () => disableAnimationProps
});
module.exports = __toCommonJS(createAnimations_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_animation_helpers = require("@tamagui/animation-helpers"),
  import_use_presence = require("@tamagui/use-presence"),
  import_web = require("@tamagui/web"),
  import_react = require("motion/react"),
  import_react2 = __toESM(require("react"), 1);
function _instanceof(left, right) {
  return right != null && typeof Symbol < "u" && right[Symbol.hasInstance] ? !!right[Symbol.hasInstance](left) : left instanceof right;
}
function _type_of(obj) {
  "@swc/helpers - typeof";

  return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var isServer = typeof window > "u";
function useAnimateSSRSafe() {
  return isServer ? [(0, import_react2.useRef)(null), function () {}] : (0, import_react.useAnimate)();
}
var MotionValueStrategy = /* @__PURE__ */new WeakMap();
function createAnimations(animations) {
  var isHydratingGlobal,
    hydratingComponents = /* @__PURE__ */new Set();
  return {
    View: MotionView,
    Text: MotionText,
    isReactNative: !1,
    inputStyle: "css",
    outputStyle: "inline",
    avoidReRenders: !0,
    animations,
    usePresence: import_use_presence.usePresence,
    ResetPresence: import_use_presence.ResetPresence,
    onMount() {
      isHydratingGlobal = !1, hydratingComponents.forEach(function (cb) {
        return cb();
      });
    },
    useAnimations: function (animationProps) {
      isHydratingGlobal === void 0 && !(0, import_web.getConfig)().settings.disableSSR && (isHydratingGlobal = !0);
      var {
          props,
          style,
          componentState,
          stateRef,
          useStyleEmitter,
          presence
        } = animationProps,
        animationKey = Array.isArray(props.transition) ? props.transition[0] : props.transition,
        isComponentHydrating = componentState.unmounted === !0,
        isMounting = componentState.unmounted === "should-enter",
        isEntering = !!componentState.unmounted,
        isExiting = presence?.[0] === !1,
        sendExitComplete = presence?.[1],
        refs = (0, import_react2.useRef)(null);
      refs.current || (refs.current = {
        isFirstRender: !0,
        lastDoAnimate: null,
        lastDontAnimate: null,
        controls: null,
        lastAnimateAt: 0,
        disposed: !1,
        wasExiting: !1,
        isExiting: !1,
        sendExitComplete: void 0,
        animationState: "default",
        frozenExitTarget: null,
        exitCompleteScheduled: !1,
        wasEntering: !1
      });
      var justFinishedEntering = refs.current.wasEntering && !isEntering;
      (0, import_react2.useEffect)(function () {
        refs.current.wasEntering = isEntering;
      });
      var animationState = isExiting ? "exit" : isMounting || justFinishedEntering ? "enter" : "default",
        disableAnimation = isComponentHydrating || isMounting || !animationKey,
        [scope, animate] = useAnimateSSRSafe();
      refs.current.isExiting = isExiting, refs.current.sendExitComplete = sendExitComplete, refs.current.animationState = animationState;
      var justStartedExiting = isExiting && !refs.current.wasExiting,
        justStoppedExiting = !isExiting && refs.current.wasExiting;
      (justStartedExiting || justStoppedExiting) && (refs.current.frozenExitTarget = null, refs.current.exitCompleteScheduled = !1), (0, import_react2.useEffect)(function () {
        refs.current.wasExiting = isExiting;
      });
      var {
          dontAnimate = {},
          doAnimate,
          animationOptions
        } = getMotionAnimatedProps(props, style, disableAnimation, animationState),
        [firstRenderStyle] = (0, import_react2.useState)(style);
      refs.current.isFirstRender && (refs.current.lastDontAnimate = firstRenderStyle);
      var [isHydrating, setIsHydrating] = (0, import_react2.useState)(isHydratingGlobal);
      (0, import_react2.useLayoutEffect)(function () {
        return isHydratingGlobal && hydratingComponents.add(function () {
          setIsHydrating(!1);
        }), function () {
          refs.current.disposed = !0;
        };
      }, []);
      var flushAnimation = function (param) {
        var {
            doAnimate: doAnimateRaw = {},
            animationOptions: passedOptions = {},
            dontAnimate: dontAnimate2
          } = param,
          startedControls = null,
          isCurrentlyExiting = refs.current.isExiting,
          currentSendExitComplete = refs.current.sendExitComplete,
          doAnimate2 = doAnimateRaw;
        isCurrentlyExiting && refs.current.frozenExitTarget && (doAnimate2 = refs.current.frozenExitTarget);
        var _props_transition,
          animationOptions2 = isCurrentlyExiting && currentSendExitComplete ? getAnimationOptions((_props_transition = props.transition) !== null && _props_transition !== void 0 ? _props_transition : null, "exit") : passedOptions;
        try {
          var node = stateRef.current.host;
          if (refs.current.isFirstRender && (refs.current.lastDontAnimate = null, refs.current.lastDoAnimate = null), process.env.NODE_ENV === "development" && props.debug && props.debug !== "profile" && (console.groupCollapsed(`[motion] animate (${JSON.stringify(getDiff(refs.current.lastDoAnimate, doAnimate2), null, 2)})`), console.info({
            props,
            componentState,
            doAnimate: doAnimate2,
            dontAnimate: dontAnimate2,
            animationOptions: animationOptions2,
            animationProps,
            lastDoAnimate: {
              ...refs.current.lastDoAnimate
            },
            lastDontAnimate: {
              ...refs.current.lastDontAnimate
            },
            isExiting,
            style,
            node
          }), console.groupCollapsed("trace >"), console.trace(), console.groupEnd(), console.groupEnd()), !_instanceof(node, HTMLElement)) return;
          var prevDont = refs.current.lastDontAnimate;
          if (dontAnimate2) if (prevDont) {
            removeRemovedStyles(prevDont, dontAnimate2, node, doAnimate2);
            var changed = getDiff(prevDont, dontAnimate2);
            changed && Object.assign(node.style, changed);
          } else Object.assign(node.style, dontAnimate2);
          if (doAnimate2) {
            if (prevDont) for (var key in prevDont) key in doAnimate2 && (node.style[key] = prevDont[key], refs.current.lastDoAnimate && (refs.current.lastDoAnimate[key] = prevDont[key]));
            var lastAnimated = refs.current.lastDoAnimate;
            lastAnimated && removeRemovedStyles(lastAnimated, doAnimate2, node, dontAnimate2);
            var diff = getDiff(refs.current.lastDoAnimate, doAnimate2);
            if (diff) {
              isCurrentlyExiting && !refs.current.frozenExitTarget && (refs.current.frozenExitTarget = {
                ...doAnimate2
              });
              var isPopperPosition = node.hasAttribute("data-popper-animate-position"),
                midFlightValues = null;
              if (refs.current.controls) {
                try {
                  var computed = getComputedStyle(node);
                  midFlightValues = {};
                  for (var key1 in diff) {
                    var val = computed[key1];
                    val !== void 0 && val !== "" && (midFlightValues[key1] = val);
                  }
                } catch {}
                if (isCurrentlyExiting && refs.current.controls.stop(), midFlightValues) for (var key2 in midFlightValues) node.style[key2] = midFlightValues[key2];
                if (isPopperPosition) {
                  var anims = node.getAnimations(),
                    _iteratorNormalCompletion = !0,
                    _didIteratorError = !1,
                    _iteratorError = void 0;
                  try {
                    for (var _iterator = anims[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                      var anim = _step.value;
                      anim.cancel();
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
              var fixedDiff = fixTransparentColors(diff, refs.current.lastDoAnimate, doAnimate2);
              midFlightValues?.transform && fixedDiff.transform && (fixedDiff.transform = [midFlightValues.transform, fixedDiff.transform]), startedControls = animate(scope.current, fixedDiff, animationOptions2), refs.current.controls = startedControls, refs.current.lastAnimateAt = Date.now();
            }
          }
          refs.current.lastDontAnimate = dontAnimate2 ? {
            ...dontAnimate2
          } : {}, refs.current.lastDoAnimate = doAnimate2 ? {
            ...doAnimate2
          } : {};
        } finally {
          isCurrentlyExiting && currentSendExitComplete && (startedControls ? (refs.current.exitCompleteScheduled = !0, startedControls.finished.then(function () {
            refs.current.isExiting && currentSendExitComplete();
          }).catch(function () {
            refs.current.isExiting && currentSendExitComplete();
          })) : refs.current.exitCompleteScheduled || currentSendExitComplete());
        }
      };
      return useStyleEmitter?.(function (nextStyle, effectiveTransition) {
        var _$animationProps = getMotionAnimatedProps(props, nextStyle, disableAnimation, refs.current.animationState, effectiveTransition);
        flushAnimation(_$animationProps);
      }), (0, import_web.useIsomorphicLayoutEffect)(function () {
        if (refs.current.isFirstRender) {
          if (refs.current.isFirstRender = !1, isHydrating) {
            doAnimate && Object.keys(doAnimate).length > 0 ? refs.current.lastDoAnimate = {
              ...doAnimate
            } : refs.current.lastDoAnimate = dontAnimate ? {
              ...dontAnimate
            } : {}, refs.current.lastDontAnimate = dontAnimate ? {
              ...dontAnimate
            } : {}, refs.current.lastAnimateAt = Date.now();
            return;
          }
          refs.current.lastDontAnimate = dontAnimate ? {
            ...dontAnimate
          } : {}, refs.current.lastDoAnimate = doAnimate ? {
            ...doAnimate
          } : {};
          return;
        }
        flushAnimation({
          doAnimate,
          dontAnimate,
          animationOptions
        });
      }, [style, isExiting, disableAnimation]), process.env.NODE_ENV === "development" && props.debug && props.debug !== "profile" && (console.groupCollapsed("[motion] render"), console.info({
        style,
        doAnimate,
        dontAnimate,
        scope,
        animationOptions,
        isExiting,
        isFirstRender: refs.current.isFirstRender,
        animationProps
      }), console.groupEnd()), {
        style: firstRenderStyle,
        ref: scope,
        render: "div"
      };
    },
    useAnimatedNumber(initial) {
      var motionValue = (0, import_react.useMotionValue)(initial);
      return import_react2.default.useMemo(function () {
        return {
          getInstance() {
            return motionValue;
          },
          getValue() {
            return motionValue.get();
          },
          setValue(next) {
            var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                type: "spring"
              },
              onFinish = arguments.length > 2 ? arguments[2] : void 0;
            if (config.type === "direct") MotionValueStrategy.set(motionValue, {
              type: "direct"
            }), motionValue.set(next), onFinish?.();else {
              if (MotionValueStrategy.set(motionValue, config), onFinish) var unsubscribe = motionValue.on("change", function (value) {
                Math.abs(value - next) < 0.01 && (unsubscribe(), onFinish());
              });
              motionValue.set(next);
            }
          },
          stop() {
            motionValue.stop();
          }
        };
      }, [motionValue]);
    },
    useAnimatedNumberReaction(param, onValue) {
      var {
          value
        } = param,
        instance = value.getInstance();
      (0, import_react.useMotionValueEvent)(instance, "change", onValue);
    },
    useAnimatedNumberStyle(val, getStyleProp) {
      var motionValue = val.getInstance(),
        getStyleRef = (0, import_react2.useRef)(getStyleProp);
      return getStyleRef.current = getStyleProp, (0, import_react2.useMemo)(function () {
        return {
          getStyle: function (cur) {
            return getStyleRef.current(cur);
          },
          motionValue
        };
      }, []);
    },
    useAnimatedNumbersStyle(vals, getStyleProp) {
      var motionValues = vals.map(function (v) {
          return v.getInstance();
        }),
        getStyleRef = (0, import_react2.useRef)(getStyleProp);
      return getStyleRef.current = getStyleProp, (0, import_react2.useMemo)(function () {
        return {
          getStyle: function () {
            for (var _len = arguments.length, currentValues = new Array(_len), _key = 0; _key < _len; _key++) currentValues[_key] = arguments[_key];
            return getStyleRef.current(...currentValues);
          },
          motionValues
        };
      }, []);
    }
  };
  function getMotionAnimatedProps(props, style, disable) {
    var animationState = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "default",
      transitionOverride = arguments.length > 4 ? arguments[4] : void 0;
    if (disable) return {
      dontAnimate: style
    };
    var _ref,
      animationOptions = getAnimationOptions((_ref = transitionOverride ?? props.transition) !== null && _ref !== void 0 ? _ref : null, animationState),
      dontAnimate,
      doAnimate,
      animateOnly = props.animateOnly;
    for (var key in style) {
      var value = style[key];
      disableAnimationProps.has(key) || animateOnly && !animateOnly.includes(key) ? (dontAnimate || (dontAnimate = {}), dontAnimate[key] = value) : (doAnimate || (doAnimate = {}), doAnimate[key] = value);
    }
    return {
      dontAnimate,
      doAnimate,
      animationOptions
    };
  }
  function getAnimationOptions(transitionProp) {
    var animationState = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default",
      normalized = (0, import_animation_helpers.normalizeTransition)(transitionProp),
      effectiveKey = (0, import_animation_helpers.getEffectiveAnimation)(normalized, animationState);
    !effectiveKey && animationState === "default" && (effectiveKey = normalized.enter || normalized.exit || null);
    var globalConfigOverride = normalized.config ? {
      ...normalized.config
    } : void 0;
    if (!effectiveKey && Object.keys(normalized.properties).length === 0 && !globalConfigOverride) return {};
    var defaultConfig = effectiveKey ? withInferredType(animations[effectiveKey]) : null,
      delay = normalized.delay,
      result = {};
    defaultConfig && Object.assign(result, defaultConfig), globalConfigOverride && (Object.assign(result, globalConfigOverride), result.type === void 0 && result.duration !== void 0 && result.damping === void 0 && result.stiffness === void 0 && result.mass === void 0 && (result.type = "tween")), delay && (result.delay = delay), (defaultConfig || globalConfigOverride || delay) && (result.default = {
      ...defaultConfig,
      ...globalConfigOverride,
      ...(delay ? {
        delay
      } : null)
    });
    var _iteratorNormalCompletion = !0,
      _didIteratorError = !1,
      _iteratorError = void 0;
    try {
      for (var _iterator = Object.entries(normalized.properties)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
        var [propName, animationNameOrConfig] = _step.value;
        if (typeof animationNameOrConfig == "string") result[propName] = withInferredType(animations[animationNameOrConfig]);else if (animationNameOrConfig && (typeof animationNameOrConfig > "u" ? "undefined" : _type_of(animationNameOrConfig)) === "object") {
          var baseConfig = animationNameOrConfig.type ? withInferredType(animations[animationNameOrConfig.type]) : defaultConfig;
          result[propName] = {
            ...baseConfig,
            ...animationNameOrConfig
          };
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
    convertMsToS(result), convertMsToS(result.default);
    for (var key in result) key !== "default" && _type_of(result[key]) === "object" && convertMsToS(result[key]);
    return result;
  }
}
function withInferredType(config) {
  if (!config) return {
    type: "spring"
  };
  var isTimingBased = config.duration !== void 0 && config.damping === void 0 && config.stiffness === void 0 && config.mass === void 0;
  return {
    type: isTimingBased ? "tween" : "spring",
    ...config
  };
}
function convertMsToS(config) {
  if (config && (typeof config.delay == "number" && (config.delay = config.delay / 1e3), typeof config.duration == "number")) {
    var isTimingBased = config.type === "tween" || config.type === void 0 && config.damping === void 0 && config.stiffness === void 0 && config.mass === void 0;
    isTimingBased && (config.duration = config.duration / 1e3);
  }
}
function removeRemovedStyles(prev, next, node, dontClearIfIn) {
  for (var key in prev) if (!(key in next)) {
    if (dontClearIfIn && key in dontClearIfIn) continue;
    node.style[key] = "";
  }
}
var disableAnimationProps = /* @__PURE__ */new Set(["alignContent", "alignItems", "boxSizing", "contain", "containerType", "display", "flexBasis", "flexDirection", "fontFamily", "justifyContent", "overflow", "overflowX", "overflowY", "pointerEvents", "position", "textWrap", "userSelect"]),
  MotionView = createMotionView("div"),
  MotionText = createMotionView("span");
function createMotionView(defaultTag) {
  var isText = defaultTag === "span",
    Component = /* @__PURE__ */(0, import_react2.forwardRef)(function (propsIn, ref) {
      var _hooks_usePropsTransform,
        {
          forwardedRef,
          animation,
          render = defaultTag,
          style,
          ...propsRest
        } = propsIn,
        [scope, animate] = useAnimateSSRSafe(),
        hostRef = (0, import_react2.useRef)(null),
        composedRefs = (0, import_web.useComposedRefs)(forwardedRef, ref, hostRef, scope),
        stateRef = (0, import_react2.useRef)(null);
      stateRef.current || (stateRef.current = {
        get host() {
          return hostRef.current;
        }
      });
      var [_, state] = (0, import_web.useThemeWithState)({}),
        styles = Array.isArray(style) ? style : [style],
        [animatedStyle, nonAnimatedStyles] = function () {
          var animatedStyle2,
            nonAnimatedStyles2 = [],
            _iteratorNormalCompletion = !0,
            _didIteratorError = !1,
            _iteratorError = void 0;
          try {
            for (var _iterator = styles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
              var style2 = _step.value;
              style2.getStyle ? animatedStyle2 = style2 : nonAnimatedStyles2.push(style2);
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
          return [animatedStyle2, nonAnimatedStyles2];
        }();
      function getProps(props2) {
        var out = (0, import_web.getSplitStyles)(props2, isText ? import_web.Text.staticConfig : import_web.View.staticConfig, state?.theme, state?.name, {
          unmounted: !1
        }, {
          isAnimated: !1,
          noClass: !0,
          resolveValues: "auto"
        });
        return out ? (out.viewProps.style && ((0, import_web.fixStyles)(out.viewProps.style), (0, import_web.styleToCSS)(out.viewProps.style)), out.viewProps) : {};
      }
      var props = getProps({
          ...propsRest,
          style: nonAnimatedStyles
        }),
        Element = render || "div",
        transformedProps = (_hooks_usePropsTransform = import_web.hooks.usePropsTransform) === null || _hooks_usePropsTransform === void 0 ? void 0 : _hooks_usePropsTransform.call(import_web.hooks, render, props, stateRef, !1);
      return (0, import_react2.useEffect)(function () {
        if (animatedStyle) {
          if (animatedStyle.motionValues) {
            var mvs = animatedStyle.motionValues,
              unsubs = mvs.map(function (mv) {
                return mv.on("change", function () {
                  var currentValues = mvs.map(function (v) {
                      return v.get();
                    }),
                    nextStyle = animatedStyle.getStyle(...currentValues),
                    animationConfig = MotionValueStrategy.get(mv),
                    node = hostRef.current,
                    webStyle = getProps({
                      style: nextStyle
                    }).style;
                  if (webStyle && _instanceof(node, HTMLElement)) {
                    var motionAnimationConfig = animationConfig?.type === "timing" ? {
                      type: "tween",
                      duration: (animationConfig?.duration || 0) / 1e3
                    } : animationConfig?.type === "direct" ? {
                      type: "tween",
                      duration: 0
                    } : {
                      type: "spring",
                      ...animationConfig
                    };
                    animate(node, webStyle, motionAnimationConfig);
                  }
                });
              });
            return function () {
              return unsubs.forEach(function (fn) {
                return fn();
              });
            };
          }
          if (animatedStyle.motionValue) return animatedStyle.motionValue.on("change", function (value) {
            var nextStyle = animatedStyle.getStyle(value),
              animationConfig = MotionValueStrategy.get(animatedStyle.motionValue),
              node = hostRef.current,
              webStyle = getProps({
                style: nextStyle
              }).style;
            if (webStyle && _instanceof(node, HTMLElement)) {
              var motionAnimationConfig = animationConfig?.type === "timing" ? {
                type: "tween",
                duration: (animationConfig?.duration || 0) / 1e3
              } : animationConfig?.type === "direct" ? {
                type: "tween",
                duration: 0
              } : {
                type: "spring",
                ...animationConfig
              };
              animate(node, webStyle, motionAnimationConfig);
            }
          });
        }
      }, [animatedStyle]), /* @__PURE__ */(0, import_jsx_runtime.jsx)(Element, {
        ...transformedProps,
        ref: composedRefs
      });
    });
  return Component.acceptRenderProp = !0, Component;
}
function getDiff(previous, next) {
  if (!previous) return next;
  var diff = null;
  for (var key in next) next[key] !== previous[key] && (diff || (diff = {}), diff[key] = next[key]);
  return diff;
}
function fixTransparentColors(diff, previous, next) {
  var result = diff;
  for (var key in diff) if (diff[key] === "transparent") {
    var fixed = "rgba(0, 0, 0, 0)",
      candidates = [previous?.[key], next?.[key]],
      _iteratorNormalCompletion = !0,
      _didIteratorError = !1,
      _iteratorError = void 0;
    try {
      for (var _iterator = candidates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
        var candidate = _step.value;
        if (typeof candidate == "string" && candidate !== "transparent") {
          var rgbaMatch = candidate.match(/^rgba?\(([^,]+),\s*([^,]+),\s*([^,)]+)/);
          if (rgbaMatch) {
            fixed = `rgba(${rgbaMatch[1]}, ${rgbaMatch[2]}, ${rgbaMatch[3]}, 0)`;
            break;
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
    result === diff && (result = {
      ...diff
    }), result[key] = fixed;
  }
  return result;
}
//# sourceMappingURL=createAnimations.native.js.map
