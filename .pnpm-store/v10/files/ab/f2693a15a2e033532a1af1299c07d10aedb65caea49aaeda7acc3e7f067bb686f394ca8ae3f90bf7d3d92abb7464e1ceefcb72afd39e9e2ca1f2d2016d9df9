import { getEffectiveAnimation, normalizeTransition } from "@tamagui/animation-helpers";
import { isWeb, useIsomorphicLayoutEffect } from "@tamagui/constants";
import { ResetPresence, usePresence } from "@tamagui/use-presence";
import { useEvent, useThemeWithState } from "@tamagui/web";
import React from "react";
import { Animated } from "react-native-web";
const isFabric = !isWeb && typeof global < "u" && !!global.__nativeFabricUIManager,
  resolveDynamicValue = (value, isDark) => value && typeof value == "object" && "dynamic" in value ? isDark ? value.dynamic.dark : value.dynamic.light : value,
  animatedStyleKey = {
    transform: !0,
    opacity: !0
  },
  colorStyleKey = {
    backgroundColor: !0,
    color: !0,
    borderColor: !0,
    borderLeftColor: !0,
    borderRightColor: !0,
    borderTopColor: !0,
    borderBottomColor: !0
  },
  costlyToAnimateStyleKey = {
    borderRadius: !0,
    borderTopLeftRadius: !0,
    borderTopRightRadius: !0,
    borderBottomLeftRadius: !0,
    borderBottomRightRadius: !0,
    borderWidth: !0,
    borderLeftWidth: !0,
    borderRightWidth: !0,
    borderTopWidth: !0,
    borderBottomWidth: !0,
    ...colorStyleKey
  },
  AnimatedView = Animated.View,
  AnimatedText = Animated.Text;
function useAnimatedNumber(initial) {
  const state = React.useRef(null);
  return state.current || (state.current = {
    composite: null,
    val: new Animated.Value(initial),
    strategy: {
      type: "spring"
    }
  }), {
    getInstance() {
      return state.current.val;
    },
    getValue() {
      return state.current.val._value;
    },
    stop() {
      state.current.composite?.stop(), state.current.composite = null;
    },
    setValue(next, {
      type,
      ...config
    } = {
      type: "spring"
    }, onFinish) {
      const val = state.current.val,
        handleFinish = onFinish ? ({
          finished
        }) => finished ? onFinish() : null : void 0;
      if (type === "direct") val.setValue(next);else if (type === "spring") {
        state.current.composite?.stop();
        const composite = Animated.spring(val, {
          ...config,
          toValue: next,
          useNativeDriver: isFabric
        });
        composite.start(handleFinish), state.current.composite = composite;
      } else {
        state.current.composite?.stop();
        const composite = Animated.timing(val, {
          ...config,
          toValue: next,
          useNativeDriver: isFabric
        });
        composite.start(handleFinish), state.current.composite = composite;
      }
    }
  };
}
const useAnimatedNumberReaction = ({
    value
  }, onValue) => {
    const onChange = useEvent(current => {
      onValue(current.value);
    });
    React.useEffect(() => {
      const id = value.getInstance().addListener(onChange);
      return () => {
        value.getInstance().removeListener(id);
      };
    }, [value, onChange]);
  },
  useAnimatedNumberStyle = (value, getStyle) => getStyle(value.getInstance()),
  useAnimatedNumbersStyle = (vals, getStyle) => getStyle(...vals.map(v => v.getInstance()));
function createAnimations(animations, options) {
  const nativeDriver = options?.useNativeDriver ?? isFabric;
  return {
    isReactNative: !0,
    inputStyle: "value",
    outputStyle: "inline",
    avoidReRenders: !0,
    animations,
    needsCustomComponent: !0,
    View: AnimatedView,
    Text: AnimatedText,
    useAnimatedNumber,
    useAnimatedNumberReaction,
    useAnimatedNumberStyle,
    useAnimatedNumbersStyle,
    usePresence,
    ResetPresence,
    useAnimations: ({
      props,
      onDidAnimate,
      style,
      componentState,
      presence,
      useStyleEmitter
    }) => {
      const isDisabled = isWeb && componentState.unmounted === !0,
        isExiting = presence?.[0] === !1,
        sendExitComplete = presence?.[1],
        [, themeState] = useThemeWithState({}),
        isDark = themeState?.scheme === "dark" || themeState?.name?.startsWith("dark"),
        animateStyles = React.useRef({}),
        animatedTranforms = React.useRef([]),
        animationsState = React.useRef(/* @__PURE__ */new WeakMap()),
        exitCycleIdRef = React.useRef(0),
        exitCompletedRef = React.useRef(!1),
        wasExitingRef = React.useRef(!1),
        justStartedExiting = isExiting && !wasExitingRef.current,
        justStoppedExiting = !isExiting && wasExitingRef.current;
      justStartedExiting && (exitCycleIdRef.current++, exitCompletedRef.current = !1), justStoppedExiting && exitCycleIdRef.current++;
      const animateOnly = props.animateOnly || [],
        hasTransitionOnly = !!props.animateOnly,
        isEntering = !!componentState.unmounted,
        wasEnteringRef = React.useRef(isEntering),
        justFinishedEntering = wasEnteringRef.current && !isEntering;
      React.useEffect(() => {
        wasEnteringRef.current = isEntering;
      });
      const args = [JSON.stringify(style), componentState, isExiting, !!onDidAnimate, isDark, justFinishedEntering, hasTransitionOnly],
        res = React.useMemo(() => {
          const runners = [],
            completions = [],
            animationState = isExiting ? "exit" : isEntering || justFinishedEntering ? "enter" : "default",
            nonAnimatedStyle = {};
          for (const key in style) {
            const rawVal = style[key],
              val = resolveDynamicValue(rawVal, isDark);
            if (val !== void 0 && !isDisabled) {
              if (animatedStyleKey[key] == null && !costlyToAnimateStyleKey[key]) {
                nonAnimatedStyle[key] = val;
                continue;
              }
              if (hasTransitionOnly && !animateOnly.includes(key)) {
                nonAnimatedStyle[key] = val;
                continue;
              }
              if (key !== "transform") {
                animateStyles.current[key] = update(key, animateStyles.current[key], val);
                continue;
              }
              if (val) {
                if (typeof val == "string") {
                  console.warn("Warning: Tamagui can't animate string transforms yet!");
                  continue;
                }
                for (const [index, transform] of val.entries()) {
                  if (!transform) continue;
                  const tkey = Object.keys(transform)[0],
                    currentTransform = animatedTranforms.current[index]?.[tkey];
                  animatedTranforms.current[index] = {
                    [tkey]: update(tkey, currentTransform, transform[tkey])
                  }, animatedTranforms.current = [...animatedTranforms.current];
                }
              }
            }
          }
          const animatedTransformStyle = animatedTranforms.current.length > 0 ? {
              transform: animatedTranforms.current.map(r => {
                const key = Object.keys(r)[0],
                  val = animationsState.current.get(r[key])?.interpolation || r[key];
                return {
                  [key]: val
                };
              })
            } : {},
            animatedStyle = {
              ...Object.fromEntries(Object.entries(animateStyles.current).map(([k, v]) => [k, animationsState.current.get(v)?.interpolation || v])),
              ...animatedTransformStyle
            };
          return {
            runners,
            completions,
            style: [nonAnimatedStyle, animatedStyle]
          };
          function update(key, animated, valIn) {
            const isColorStyleKey = colorStyleKey[key],
              [val, type] = isColorStyleKey ? [0, void 0] : getValue(valIn);
            let animateToValue = val;
            const value = animated || new Animated.Value(val),
              curInterpolation = animationsState.current.get(value);
            let interpolateArgs;
            if (type && (interpolateArgs = getInterpolated(curInterpolation?.current ?? value._value, val, type), animationsState.current.set(value, {
              interpolation: value.interpolate(interpolateArgs),
              current: val
            })), isColorStyleKey && (animateToValue = curInterpolation?.animateToValue ? 0 : 1, interpolateArgs = getColorInterpolated(curInterpolation?.current,
            // valIn is the next color
            valIn, animateToValue), animationsState.current.set(value, {
              current: valIn,
              interpolation: value.interpolate(interpolateArgs),
              animateToValue: curInterpolation?.animateToValue ? 0 : 1
            })), value) {
              const animationConfig = getAnimationConfig(key, animations, props.transition, animationState);
              let resolve;
              const promise = new Promise(res2 => {
                resolve = res2;
              });
              completions.push(promise), runners.push(() => {
                value.stopAnimation();
                function getAnimation() {
                  return Animated[animationConfig.type || "spring"](value, {
                    toValue: animateToValue,
                    useNativeDriver: nativeDriver,
                    ...animationConfig
                  });
                }
                (animationConfig.delay ? Animated.sequence([Animated.delay(animationConfig.delay), getAnimation()]) : getAnimation()).start(({
                  finished
                }) => {
                  (finished || isExiting) && resolve();
                });
              });
            }
            return process.env.NODE_ENV === "development" && props.debug === "verbose" && console.info(" \u{1F4A0} animate", key, `from (${value._value}) to`, valIn, `(${val})`, "type", type, "interpolate", interpolateArgs), value;
          }
        }, args);
      return React.useEffect(() => {
        wasExitingRef.current = isExiting;
      }), useIsomorphicLayoutEffect(() => {
        res.runners.forEach(r => r());
        const cycleId = exitCycleIdRef.current;
        if (res.completions.length === 0) {
          onDidAnimate?.(), isExiting && !exitCompletedRef.current && (exitCompletedRef.current = !0, sendExitComplete?.());
          return;
        }
        let cancel = !1;
        return Promise.all(res.completions).then(() => {
          cancel || isExiting && cycleId !== exitCycleIdRef.current || isExiting && exitCompletedRef.current || (onDidAnimate?.(), isExiting && (exitCompletedRef.current = !0, sendExitComplete?.()));
        }), () => {
          cancel = !0;
        };
      }, args), useStyleEmitter?.(nextStyle => {
        for (const key in nextStyle) {
          const rawVal = nextStyle[key],
            val = resolveDynamicValue(rawVal, isDark);
          if (val !== void 0) if (key === "transform" && Array.isArray(val)) for (const [index, transform] of val.entries()) {
            if (!transform) continue;
            const tkey = Object.keys(transform)[0],
              currentTransform = animatedTranforms.current[index]?.[tkey];
            animatedTranforms.current[index] = {
              [tkey]: update(tkey, currentTransform, transform[tkey])
            };
          } else (animatedStyleKey[key] != null || costlyToAnimateStyleKey[key]) && (animateStyles.current[key] = update(key, animateStyles.current[key], val));
        }
        res.runners.forEach(r => r());
        function update(key, animated, valIn) {
          const isColor = colorStyleKey[key],
            [numVal, type] = isColor ? [0, void 0] : getValue(valIn);
          let animateToValue = numVal;
          const value = animated || new Animated.Value(numVal),
            curInterpolation = animationsState.current.get(value);
          type && animationsState.current.set(value, {
            interpolation: value.interpolate(getInterpolated(curInterpolation?.current ?? value._value, numVal, type)),
            current: numVal
          }), isColor && (animateToValue = curInterpolation?.animateToValue ? 0 : 1, animationsState.current.set(value, {
            current: valIn,
            interpolation: value.interpolate(getColorInterpolated(curInterpolation?.current, valIn, animateToValue)),
            animateToValue: curInterpolation?.animateToValue ? 0 : 1
          }));
          const animationConfig = getAnimationConfig(key, animations, props.transition, "default");
          return res.runners.push(() => {
            value.stopAnimation();
            const anim = Animated[animationConfig.type || "spring"](value, {
              toValue: animateToValue,
              useNativeDriver: nativeDriver,
              ...animationConfig
            });
            (animationConfig.delay ? Animated.sequence([Animated.delay(animationConfig.delay), anim]) : anim).start();
          }), value;
        }
      }), process.env.NODE_ENV === "development" && props.debug === "verbose" && console.info("Animated", {
        response: res,
        inputStyle: style,
        isExiting
      }), res;
    }
  };
}
function getColorInterpolated(currentColor, nextColor, animateToValue) {
  const inputRange = [0, 1],
    outputRange = [currentColor || nextColor, nextColor];
  return animateToValue === 0 && outputRange.reverse(), {
    inputRange,
    outputRange
  };
}
function getInterpolated(current, next, postfix = "deg") {
  next === current && (current = next - 1e-9);
  const inputRange = [current, next],
    outputRange = [`${current}${postfix}`, `${next}${postfix}`];
  return next < current && (inputRange.reverse(), outputRange.reverse()), {
    inputRange,
    outputRange
  };
}
function getAnimationConfig(key, animations, transition, animationState = "default") {
  const normalized = normalizeTransition(transition),
    shortKey = transformShorthands[key],
    propAnimation = normalized.properties[key] ?? normalized.properties[shortKey];
  let animationType = null,
    extraConf = {};
  return typeof propAnimation == "string" ? animationType = propAnimation : propAnimation && typeof propAnimation == "object" ? (animationType = propAnimation.type || getEffectiveAnimation(normalized, animationState), extraConf = propAnimation) : animationType = getEffectiveAnimation(normalized, animationState), normalized.delay && !extraConf.delay && (extraConf = {
    ...extraConf,
    delay: normalized.delay
  }), {
    ...(animationType ? animations[animationType] : {}),
    // Apply global spring config overrides (from transition={['bouncy', { stiffness: 1000 }]})
    ...normalized.config,
    // Property-specific config takes highest precedence
    ...extraConf
  };
}
const transformShorthands = {
  x: "translateX",
  y: "translateY",
  translateX: "x",
  translateY: "y"
};
function getValue(input, isColor = !1) {
  if (typeof input != "string") return [input];
  const [_, number, after] = input.match(/([-0-9]+)(deg|%|px)/) ?? [];
  return [+number, after];
}
export { AnimatedText, AnimatedView, createAnimations, useAnimatedNumber, useAnimatedNumberReaction, useAnimatedNumberStyle, useAnimatedNumbersStyle };
//# sourceMappingURL=createAnimations.mjs.map
