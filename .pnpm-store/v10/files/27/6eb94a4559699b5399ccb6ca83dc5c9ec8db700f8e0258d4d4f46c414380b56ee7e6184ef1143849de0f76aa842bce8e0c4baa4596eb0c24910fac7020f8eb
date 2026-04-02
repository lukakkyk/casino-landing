import { getEffectiveAnimation, normalizeTransition } from "@tamagui/animation-helpers";
import { isWeb, useIsomorphicLayoutEffect } from "@tamagui/constants";
import { ResetPresence, usePresence } from "@tamagui/use-presence";
import { useEvent, useThemeWithState } from "@tamagui/web";
import React from "react";
import { Animated } from "react-native";
function _type_of(obj) {
  "@swc/helpers - typeof";

  return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var isFabric = !isWeb && typeof global < "u" && !!global.__nativeFabricUIManager,
  resolveDynamicValue = function (value, isDark) {
    if (value && (typeof value > "u" ? "undefined" : _type_of(value)) === "object" && "dynamic" in value) {
      var dynamicValue = isDark ? value.dynamic.dark : value.dynamic.light;
      return dynamicValue;
    }
    return value;
  },
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
  var state = React.useRef(null);
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
      var _state_current_composite;
      (_state_current_composite = state.current.composite) === null || _state_current_composite === void 0 || _state_current_composite.stop(), state.current.composite = null;
    },
    setValue(next) {
      var {
          type,
          ...config
        } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
          type: "spring"
        },
        onFinish = arguments.length > 2 ? arguments[2] : void 0,
        val = state.current.val,
        handleFinish = onFinish ? function (param) {
          var {
            finished
          } = param;
          return finished ? onFinish() : null;
        } : void 0;
      if (type === "direct") val.setValue(next);else if (type === "spring") {
        var _state_current_composite;
        (_state_current_composite = state.current.composite) === null || _state_current_composite === void 0 || _state_current_composite.stop();
        var composite = Animated.spring(val, {
          ...config,
          toValue: next,
          useNativeDriver: isFabric
        });
        composite.start(handleFinish), state.current.composite = composite;
      } else {
        var _state_current_composite1;
        (_state_current_composite1 = state.current.composite) === null || _state_current_composite1 === void 0 || _state_current_composite1.stop();
        var composite1 = Animated.timing(val, {
          ...config,
          toValue: next,
          useNativeDriver: isFabric
        });
        composite1.start(handleFinish), state.current.composite = composite1;
      }
    }
  };
}
var useAnimatedNumberReaction = function (param, onValue) {
    var {
        value
      } = param,
      onChange = useEvent(function (current) {
        onValue(current.value);
      });
    React.useEffect(function () {
      var id = value.getInstance().addListener(onChange);
      return function () {
        value.getInstance().removeListener(id);
      };
    }, [value, onChange]);
  },
  useAnimatedNumberStyle = function (value, getStyle) {
    return getStyle(value.getInstance());
  },
  useAnimatedNumbersStyle = function (vals, getStyle) {
    return getStyle(...vals.map(function (v) {
      return v.getInstance();
    }));
  };
function createAnimations(animations, options) {
  var _options_useNativeDriver,
    nativeDriver = (_options_useNativeDriver = options?.useNativeDriver) !== null && _options_useNativeDriver !== void 0 ? _options_useNativeDriver : isFabric;
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
    useAnimations: function (param) {
      var {
          props,
          onDidAnimate,
          style,
          componentState,
          presence,
          useStyleEmitter
        } = param,
        _themeState_name,
        isDisabled = isWeb && componentState.unmounted === !0,
        isExiting = presence?.[0] === !1,
        sendExitComplete = presence?.[1],
        [, themeState] = useThemeWithState({}),
        isDark = themeState?.scheme === "dark" || (themeState == null || (_themeState_name = themeState.name) === null || _themeState_name === void 0 ? void 0 : _themeState_name.startsWith("dark")),
        animateStyles = React.useRef({}),
        animatedTranforms = React.useRef([]),
        animationsState = React.useRef(/* @__PURE__ */new WeakMap()),
        exitCycleIdRef = React.useRef(0),
        exitCompletedRef = React.useRef(!1),
        wasExitingRef = React.useRef(!1),
        justStartedExiting = isExiting && !wasExitingRef.current,
        justStoppedExiting = !isExiting && wasExitingRef.current;
      justStartedExiting && (exitCycleIdRef.current++, exitCompletedRef.current = !1), justStoppedExiting && exitCycleIdRef.current++;
      var animateOnly = props.animateOnly || [],
        hasTransitionOnly = !!props.animateOnly,
        isEntering = !!componentState.unmounted,
        wasEnteringRef = React.useRef(isEntering),
        justFinishedEntering = wasEnteringRef.current && !isEntering;
      React.useEffect(function () {
        wasEnteringRef.current = isEntering;
      });
      var args = [JSON.stringify(style), componentState, isExiting, !!onDidAnimate, isDark, justFinishedEntering, hasTransitionOnly],
        res = React.useMemo(function () {
          var runners = [],
            completions = [],
            animationState = isExiting ? "exit" : isEntering || justFinishedEntering ? "enter" : "default",
            nonAnimatedStyle = {};
          for (var key in style) {
            var rawVal = style[key],
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
                var _iteratorNormalCompletion = !0,
                  _didIteratorError = !1,
                  _iteratorError = void 0;
                try {
                  for (var _iterator = val.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                    var [index, transform] = _step.value,
                      _animatedTranforms_current_index;
                    if (transform) {
                      var tkey = Object.keys(transform)[0],
                        currentTransform = (_animatedTranforms_current_index = animatedTranforms.current[index]) === null || _animatedTranforms_current_index === void 0 ? void 0 : _animatedTranforms_current_index[tkey];
                      animatedTranforms.current[index] = {
                        [tkey]: update(tkey, currentTransform, transform[tkey])
                      }, animatedTranforms.current = [...animatedTranforms.current];
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
            }
          }
          var animatedTransformStyle = animatedTranforms.current.length > 0 ? {
              transform: animatedTranforms.current.map(function (r) {
                var _animationsState_current_get,
                  key2 = Object.keys(r)[0],
                  val2 = ((_animationsState_current_get = animationsState.current.get(r[key2])) === null || _animationsState_current_get === void 0 ? void 0 : _animationsState_current_get.interpolation) || r[key2];
                return {
                  [key2]: val2
                };
              })
            } : {},
            animatedStyle = {
              ...Object.fromEntries(Object.entries(animateStyles.current).map(function (param2) {
                var [k, v] = param2,
                  _animationsState_current_get;
                return [k, ((_animationsState_current_get = animationsState.current.get(v)) === null || _animationsState_current_get === void 0 ? void 0 : _animationsState_current_get.interpolation) || v];
              })),
              ...animatedTransformStyle
            };
          return {
            runners,
            completions,
            style: [nonAnimatedStyle, animatedStyle]
          };
          function update(key2, animated, valIn) {
            var isColorStyleKey = colorStyleKey[key2],
              [val2, type] = isColorStyleKey ? [0, void 0] : getValue(valIn),
              animateToValue = val2,
              value = animated || new Animated.Value(val2),
              curInterpolation = animationsState.current.get(value),
              interpolateArgs;
            if (type) {
              var _curInterpolation_current;
              interpolateArgs = getInterpolated((_curInterpolation_current = curInterpolation?.current) !== null && _curInterpolation_current !== void 0 ? _curInterpolation_current : value._value, val2, type), animationsState.current.set(value, {
                interpolation: value.interpolate(interpolateArgs),
                current: val2
              });
            }
            if (isColorStyleKey && (animateToValue = curInterpolation?.animateToValue ? 0 : 1, interpolateArgs = getColorInterpolated(curInterpolation?.current,
            // valIn is the next color
            valIn, animateToValue), animationsState.current.set(value, {
              current: valIn,
              interpolation: value.interpolate(interpolateArgs),
              animateToValue: curInterpolation?.animateToValue ? 0 : 1
            })), value) {
              var animationConfig = getAnimationConfig(key2, animations, props.transition, animationState),
                resolve,
                promise = new Promise(function (res2) {
                  resolve = res2;
                });
              completions.push(promise), runners.push(function () {
                value.stopAnimation();
                function getAnimation() {
                  return Animated[animationConfig.type || "spring"](value, {
                    toValue: animateToValue,
                    useNativeDriver: nativeDriver,
                    ...animationConfig
                  });
                }
                var animation = animationConfig.delay ? Animated.sequence([Animated.delay(animationConfig.delay), getAnimation()]) : getAnimation();
                animation.start(function (param2) {
                  var {
                    finished
                  } = param2;
                  (finished || isExiting) && resolve();
                });
              });
            }
            return process.env.NODE_ENV === "development" && props.debug === "verbose" && console.info(" \u{1F4A0} animate", key2, `from (${value._value}) to`, valIn, `(${val2})`, "type", type, "interpolate", interpolateArgs), value;
          }
        }, args);
      return React.useEffect(function () {
        wasExitingRef.current = isExiting;
      }), useIsomorphicLayoutEffect(function () {
        res.runners.forEach(function (r) {
          return r();
        });
        var cycleId = exitCycleIdRef.current;
        if (res.completions.length === 0) {
          onDidAnimate?.(), isExiting && !exitCompletedRef.current && (exitCompletedRef.current = !0, sendExitComplete?.());
          return;
        }
        var cancel = !1;
        return Promise.all(res.completions).then(function () {
          cancel || isExiting && cycleId !== exitCycleIdRef.current || isExiting && exitCompletedRef.current || (onDidAnimate?.(), isExiting && (exitCompletedRef.current = !0, sendExitComplete?.()));
        }), function () {
          cancel = !0;
        };
      }, args), useStyleEmitter?.(function (nextStyle) {
        for (var key in nextStyle) {
          var rawVal = nextStyle[key],
            val = resolveDynamicValue(rawVal, isDark);
          if (val !== void 0) if (key === "transform" && Array.isArray(val)) {
            var _iteratorNormalCompletion = !0,
              _didIteratorError = !1,
              _iteratorError = void 0;
            try {
              for (var _iterator = val.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                var [index, transform] = _step.value,
                  _animatedTranforms_current_index;
                if (transform) {
                  var tkey = Object.keys(transform)[0],
                    currentTransform = (_animatedTranforms_current_index = animatedTranforms.current[index]) === null || _animatedTranforms_current_index === void 0 ? void 0 : _animatedTranforms_current_index[tkey];
                  animatedTranforms.current[index] = {
                    [tkey]: update(tkey, currentTransform, transform[tkey])
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
          } else (animatedStyleKey[key] != null || costlyToAnimateStyleKey[key]) && (animateStyles.current[key] = update(key, animateStyles.current[key], val));
        }
        res.runners.forEach(function (r) {
          return r();
        });
        function update(key2, animated, valIn) {
          var isColor = colorStyleKey[key2],
            [numVal, type] = isColor ? [0, void 0] : getValue(valIn),
            animateToValue = numVal,
            value = animated || new Animated.Value(numVal),
            curInterpolation = animationsState.current.get(value);
          if (type) {
            var _curInterpolation_current;
            animationsState.current.set(value, {
              interpolation: value.interpolate(getInterpolated((_curInterpolation_current = curInterpolation?.current) !== null && _curInterpolation_current !== void 0 ? _curInterpolation_current : value._value, numVal, type)),
              current: numVal
            });
          }
          isColor && (animateToValue = curInterpolation?.animateToValue ? 0 : 1, animationsState.current.set(value, {
            current: valIn,
            interpolation: value.interpolate(getColorInterpolated(curInterpolation?.current, valIn, animateToValue)),
            animateToValue: curInterpolation?.animateToValue ? 0 : 1
          }));
          var animationConfig = getAnimationConfig(key2, animations, props.transition, "default");
          return res.runners.push(function () {
            value.stopAnimation();
            var anim = Animated[animationConfig.type || "spring"](value, {
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
  var inputRange = [0, 1],
    outputRange = [currentColor || nextColor, nextColor];
  return animateToValue === 0 && outputRange.reverse(), {
    inputRange,
    outputRange
  };
}
function getInterpolated(current, next) {
  var postfix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "deg";
  next === current && (current = next - 1e-9);
  var inputRange = [current, next],
    outputRange = [`${current}${postfix}`, `${next}${postfix}`];
  return next < current && (inputRange.reverse(), outputRange.reverse()), {
    inputRange,
    outputRange
  };
}
function getAnimationConfig(key, animations, transition) {
  var animationState = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "default",
    normalized = normalizeTransition(transition),
    shortKey = transformShorthands[key],
    _normalized_properties_key,
    propAnimation = (_normalized_properties_key = normalized.properties[key]) !== null && _normalized_properties_key !== void 0 ? _normalized_properties_key : normalized.properties[shortKey],
    animationType = null,
    extraConf = {};
  typeof propAnimation == "string" ? animationType = propAnimation : propAnimation && (typeof propAnimation > "u" ? "undefined" : _type_of(propAnimation)) === "object" ? (animationType = propAnimation.type || getEffectiveAnimation(normalized, animationState), extraConf = propAnimation) : animationType = getEffectiveAnimation(normalized, animationState), normalized.delay && !extraConf.delay && (extraConf = {
    ...extraConf,
    delay: normalized.delay
  });
  var found = animationType ? animations[animationType] : {};
  return {
    ...found,
    // Apply global spring config overrides (from transition={['bouncy', { stiffness: 1000 }]})
    ...normalized.config,
    // Property-specific config takes highest precedence
    ...extraConf
  };
}
var transformShorthands = {
  x: "translateX",
  y: "translateY",
  translateX: "x",
  translateY: "y"
};
function getValue(input) {
  var isColor = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (typeof input != "string") return [input];
  var _input_match,
    [_, number, after] = (_input_match = input.match(/([-0-9]+)(deg|%|px)/)) !== null && _input_match !== void 0 ? _input_match : [];
  return [+number, after];
}
export { AnimatedText, AnimatedView, createAnimations, useAnimatedNumber, useAnimatedNumberReaction, useAnimatedNumberStyle, useAnimatedNumbersStyle };
//# sourceMappingURL=createAnimations.native.js.map
