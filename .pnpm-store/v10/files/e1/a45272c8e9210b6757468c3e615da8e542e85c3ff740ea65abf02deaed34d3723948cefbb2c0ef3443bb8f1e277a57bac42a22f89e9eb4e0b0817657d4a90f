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
var import_animation_helpers = require("@tamagui/animation-helpers"),
  import_use_presence = require("@tamagui/use-presence"),
  import_web = require("@tamagui/web"),
  import_react = require("motion/react"),
  import_react2 = __toESM(require("react"), 1),
  import_jsx_runtime = require("react/jsx-runtime");
const isServer = typeof window > "u";
function useAnimateSSRSafe() {
  return isServer ? [(0, import_react2.useRef)(null), () => {}] : (0, import_react.useAnimate)();
}
const MotionValueStrategy = /* @__PURE__ */new WeakMap();
function createAnimations(animations) {
  let isHydratingGlobal;
  const hydratingComponents = /* @__PURE__ */new Set();
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
      isHydratingGlobal = !1, hydratingComponents.forEach(cb => cb());
    },
    useAnimations: animationProps => {
      isHydratingGlobal === void 0 && !(0, import_web.getConfig)().settings.disableSSR && (isHydratingGlobal = !0);
      const {
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
      const justFinishedEntering = refs.current.wasEntering && !isEntering;
      (0, import_react2.useEffect)(() => {
        refs.current.wasEntering = isEntering;
      });
      const animationState = isExiting ? "exit" : isMounting || justFinishedEntering ? "enter" : "default",
        disableAnimation = isComponentHydrating || isMounting || !animationKey,
        [scope, animate] = useAnimateSSRSafe();
      refs.current.isExiting = isExiting, refs.current.sendExitComplete = sendExitComplete, refs.current.animationState = animationState;
      const justStartedExiting = isExiting && !refs.current.wasExiting,
        justStoppedExiting = !isExiting && refs.current.wasExiting;
      (justStartedExiting || justStoppedExiting) && (refs.current.frozenExitTarget = null, refs.current.exitCompleteScheduled = !1), (0, import_react2.useEffect)(() => {
        refs.current.wasExiting = isExiting;
      });
      const {
          dontAnimate = {},
          doAnimate,
          animationOptions
        } = getMotionAnimatedProps(props, style, disableAnimation, animationState),
        [firstRenderStyle] = (0, import_react2.useState)(style);
      refs.current.isFirstRender && (refs.current.lastDontAnimate = firstRenderStyle);
      const [isHydrating, setIsHydrating] = (0, import_react2.useState)(isHydratingGlobal);
      (0, import_react2.useLayoutEffect)(() => (isHydratingGlobal && hydratingComponents.add(() => {
        setIsHydrating(!1);
      }), () => {
        refs.current.disposed = !0;
      }), []);
      const flushAnimation = ({
        doAnimate: doAnimateRaw = {},
        animationOptions: passedOptions = {},
        dontAnimate: dontAnimate2
      }) => {
        let startedControls = null;
        const isCurrentlyExiting = refs.current.isExiting,
          currentSendExitComplete = refs.current.sendExitComplete;
        let doAnimate2 = doAnimateRaw;
        isCurrentlyExiting && refs.current.frozenExitTarget && (doAnimate2 = refs.current.frozenExitTarget);
        const animationOptions2 = isCurrentlyExiting && currentSendExitComplete ? getAnimationOptions(props.transition ?? null, "exit") : passedOptions;
        try {
          const node = stateRef.current.host;
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
          }), console.groupCollapsed("trace >"), console.trace(), console.groupEnd(), console.groupEnd()), !(node instanceof HTMLElement)) return;
          const prevDont = refs.current.lastDontAnimate;
          if (dontAnimate2) if (prevDont) {
            removeRemovedStyles(prevDont, dontAnimate2, node, doAnimate2);
            const changed = getDiff(prevDont, dontAnimate2);
            changed && Object.assign(node.style, changed);
          } else Object.assign(node.style, dontAnimate2);
          if (doAnimate2) {
            if (prevDont) for (const key in prevDont) key in doAnimate2 && (node.style[key] = prevDont[key], refs.current.lastDoAnimate && (refs.current.lastDoAnimate[key] = prevDont[key]));
            const lastAnimated = refs.current.lastDoAnimate;
            lastAnimated && removeRemovedStyles(lastAnimated, doAnimate2, node, dontAnimate2);
            const diff = getDiff(refs.current.lastDoAnimate, doAnimate2);
            if (diff) {
              isCurrentlyExiting && !refs.current.frozenExitTarget && (refs.current.frozenExitTarget = {
                ...doAnimate2
              });
              const isPopperPosition = node.hasAttribute("data-popper-animate-position");
              let midFlightValues = null;
              if (refs.current.controls) {
                try {
                  const computed = getComputedStyle(node);
                  midFlightValues = {};
                  for (const key in diff) {
                    const val = computed[key];
                    val !== void 0 && val !== "" && (midFlightValues[key] = val);
                  }
                } catch {}
                if (isCurrentlyExiting && refs.current.controls.stop(), midFlightValues) for (const key in midFlightValues) node.style[key] = midFlightValues[key];
                if (isPopperPosition) {
                  const anims = node.getAnimations();
                  for (const anim of anims) anim.cancel();
                }
              }
              const fixedDiff = fixTransparentColors(diff, refs.current.lastDoAnimate, doAnimate2);
              midFlightValues?.transform && fixedDiff.transform && (fixedDiff.transform = [midFlightValues.transform, fixedDiff.transform]), startedControls = animate(scope.current, fixedDiff, animationOptions2), refs.current.controls = startedControls, refs.current.lastAnimateAt = Date.now();
            }
          }
          refs.current.lastDontAnimate = dontAnimate2 ? {
            ...dontAnimate2
          } : {}, refs.current.lastDoAnimate = doAnimate2 ? {
            ...doAnimate2
          } : {};
        } finally {
          isCurrentlyExiting && currentSendExitComplete && (startedControls ? (refs.current.exitCompleteScheduled = !0, startedControls.finished.then(() => {
            refs.current.isExiting && currentSendExitComplete();
          }).catch(() => {
            refs.current.isExiting && currentSendExitComplete();
          })) : refs.current.exitCompleteScheduled || currentSendExitComplete());
        }
      };
      return useStyleEmitter?.((nextStyle, effectiveTransition) => {
        const animationProps2 = getMotionAnimatedProps(props, nextStyle, disableAnimation, refs.current.animationState, effectiveTransition);
        flushAnimation(animationProps2);
      }), (0, import_web.useIsomorphicLayoutEffect)(() => {
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
      const motionValue = (0, import_react.useMotionValue)(initial);
      return import_react2.default.useMemo(() => ({
        getInstance() {
          return motionValue;
        },
        getValue() {
          return motionValue.get();
        },
        setValue(next, config = {
          type: "spring"
        }, onFinish) {
          if (config.type === "direct") MotionValueStrategy.set(motionValue, {
            type: "direct"
          }), motionValue.set(next), onFinish?.();else {
            if (MotionValueStrategy.set(motionValue, config), onFinish) {
              const unsubscribe = motionValue.on("change", value => {
                Math.abs(value - next) < 0.01 && (unsubscribe(), onFinish());
              });
            }
            motionValue.set(next);
          }
        },
        stop() {
          motionValue.stop();
        }
      }), [motionValue]);
    },
    useAnimatedNumberReaction({
      value
    }, onValue) {
      const instance = value.getInstance();
      (0, import_react.useMotionValueEvent)(instance, "change", onValue);
    },
    useAnimatedNumberStyle(val, getStyleProp) {
      const motionValue = val.getInstance(),
        getStyleRef = (0, import_react2.useRef)(getStyleProp);
      return getStyleRef.current = getStyleProp, (0, import_react2.useMemo)(() => ({
        getStyle: cur => getStyleRef.current(cur),
        motionValue
      }), []);
    },
    useAnimatedNumbersStyle(vals, getStyleProp) {
      const motionValues = vals.map(v => v.getInstance()),
        getStyleRef = (0, import_react2.useRef)(getStyleProp);
      return getStyleRef.current = getStyleProp, (0, import_react2.useMemo)(() => ({
        getStyle: (...currentValues) => getStyleRef.current(...currentValues),
        motionValues
      }), []);
    }
  };
  function getMotionAnimatedProps(props, style, disable, animationState = "default", transitionOverride) {
    if (disable) return {
      dontAnimate: style
    };
    const animationOptions = getAnimationOptions(transitionOverride ?? props.transition ?? null, animationState);
    let dontAnimate, doAnimate;
    const animateOnly = props.animateOnly;
    for (const key in style) {
      const value = style[key];
      disableAnimationProps.has(key) || animateOnly && !animateOnly.includes(key) ? (dontAnimate ||= {}, dontAnimate[key] = value) : (doAnimate ||= {}, doAnimate[key] = value);
    }
    return {
      dontAnimate,
      doAnimate,
      animationOptions
    };
  }
  function getAnimationOptions(transitionProp, animationState = "default") {
    const normalized = (0, import_animation_helpers.normalizeTransition)(transitionProp);
    let effectiveKey = (0, import_animation_helpers.getEffectiveAnimation)(normalized, animationState);
    !effectiveKey && animationState === "default" && (effectiveKey = normalized.enter || normalized.exit || null);
    const globalConfigOverride = normalized.config ? {
      ...normalized.config
    } : void 0;
    if (!effectiveKey && Object.keys(normalized.properties).length === 0 && !globalConfigOverride) return {};
    const defaultConfig = effectiveKey ? withInferredType(animations[effectiveKey]) : null,
      delay = normalized.delay,
      result = {};
    defaultConfig && Object.assign(result, defaultConfig), globalConfigOverride && (Object.assign(result, globalConfigOverride), result.type === void 0 && result.duration !== void 0 && result.damping === void 0 && result.stiffness === void 0 && result.mass === void 0 && (result.type = "tween")), delay && (result.delay = delay), (defaultConfig || globalConfigOverride || delay) && (result.default = {
      ...defaultConfig,
      ...globalConfigOverride,
      ...(delay ? {
        delay
      } : null)
    });
    for (const [propName, animationNameOrConfig] of Object.entries(normalized.properties)) if (typeof animationNameOrConfig == "string") result[propName] = withInferredType(animations[animationNameOrConfig]);else if (animationNameOrConfig && typeof animationNameOrConfig == "object") {
      const baseConfig = animationNameOrConfig.type ? withInferredType(animations[animationNameOrConfig.type]) : defaultConfig;
      result[propName] = {
        ...baseConfig,
        ...animationNameOrConfig
      };
    }
    convertMsToS(result), convertMsToS(result.default);
    for (const key in result) key !== "default" && typeof result[key] == "object" && convertMsToS(result[key]);
    return result;
  }
}
function withInferredType(config) {
  return config ? {
    type: config.duration !== void 0 && config.damping === void 0 && config.stiffness === void 0 && config.mass === void 0 ? "tween" : "spring",
    ...config
  } : {
    type: "spring"
  };
}
function convertMsToS(config) {
  config && (typeof config.delay == "number" && (config.delay = config.delay / 1e3), typeof config.duration == "number" && (config.type === "tween" || config.type === void 0 && config.damping === void 0 && config.stiffness === void 0 && config.mass === void 0) && (config.duration = config.duration / 1e3));
}
function removeRemovedStyles(prev, next, node, dontClearIfIn) {
  for (const key in prev) if (!(key in next)) {
    if (dontClearIfIn && key in dontClearIfIn) continue;
    node.style[key] = "";
  }
}
const disableAnimationProps = /* @__PURE__ */new Set(["alignContent", "alignItems", "boxSizing", "contain", "containerType", "display", "flexBasis", "flexDirection", "fontFamily", "justifyContent", "overflow", "overflowX", "overflowY", "pointerEvents", "position", "textWrap", "userSelect"]),
  MotionView = createMotionView("div"),
  MotionText = createMotionView("span");
function createMotionView(defaultTag) {
  const isText = defaultTag === "span",
    Component = (0, import_react2.forwardRef)((propsIn, ref) => {
      const {
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
      const [_, state] = (0, import_web.useThemeWithState)({}),
        styles = Array.isArray(style) ? style : [style],
        [animatedStyle, nonAnimatedStyles] = (() => {
          let animatedStyle2;
          const nonAnimatedStyles2 = [];
          for (const style2 of styles) style2.getStyle ? animatedStyle2 = style2 : nonAnimatedStyles2.push(style2);
          return [animatedStyle2, nonAnimatedStyles2];
        })();
      function getProps(props2) {
        const out = (0, import_web.getSplitStyles)(props2, isText ? import_web.Text.staticConfig : import_web.View.staticConfig, state?.theme, state?.name, {
          unmounted: !1
        }, {
          isAnimated: !1,
          noClass: !0,
          resolveValues: "auto"
        });
        return out ? (out.viewProps.style && ((0, import_web.fixStyles)(out.viewProps.style), (0, import_web.styleToCSS)(out.viewProps.style)), out.viewProps) : {};
      }
      const props = getProps({
          ...propsRest,
          style: nonAnimatedStyles
        }),
        Element = render || "div",
        transformedProps = import_web.hooks.usePropsTransform?.(render, props, stateRef, !1);
      return (0, import_react2.useEffect)(() => {
        if (animatedStyle) {
          if (animatedStyle.motionValues) {
            const mvs = animatedStyle.motionValues,
              unsubs = mvs.map(mv => mv.on("change", () => {
                const currentValues = mvs.map(v => v.get()),
                  nextStyle = animatedStyle.getStyle(...currentValues),
                  animationConfig = MotionValueStrategy.get(mv),
                  node = hostRef.current,
                  webStyle = getProps({
                    style: nextStyle
                  }).style;
                if (webStyle && node instanceof HTMLElement) {
                  const motionAnimationConfig = animationConfig?.type === "timing" ? {
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
              }));
            return () => unsubs.forEach(fn => fn());
          }
          if (animatedStyle.motionValue) return animatedStyle.motionValue.on("change", value => {
            const nextStyle = animatedStyle.getStyle(value),
              animationConfig = MotionValueStrategy.get(animatedStyle.motionValue),
              node = hostRef.current,
              webStyle = getProps({
                style: nextStyle
              }).style;
            if (webStyle && node instanceof HTMLElement) {
              const motionAnimationConfig = animationConfig?.type === "timing" ? {
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
  let diff = null;
  for (const key in next) next[key] !== previous[key] && (diff ||= {}, diff[key] = next[key]);
  return diff;
}
function fixTransparentColors(diff, previous, next) {
  let result = diff;
  for (const key in diff) if (diff[key] === "transparent") {
    let fixed = "rgba(0, 0, 0, 0)";
    const candidates = [previous?.[key], next?.[key]];
    for (const candidate of candidates) if (typeof candidate == "string" && candidate !== "transparent") {
      const rgbaMatch = candidate.match(/^rgba?\(([^,]+),\s*([^,]+),\s*([^,)]+)/);
      if (rgbaMatch) {
        fixed = `rgba(${rgbaMatch[1]}, ${rgbaMatch[2]}, ${rgbaMatch[3]}, 0)`;
        break;
      }
    }
    result === diff && (result = {
      ...diff
    }), result[key] = fixed;
  }
  return result;
}