import { normalizeTransition, getAnimatedProperties, hasAnimation as hasNormalizedAnimation, getEffectiveAnimation, getAnimationConfigsForKeys } from "@tamagui/animation-helpers";
import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import { ResetPresence, usePresence } from "@tamagui/use-presence";
import { transformsToString } from "@tamagui/web";
import React from "react";
function _type_of(obj) {
  "@swc/helpers - typeof";

  return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var EXTRACT_MS_REGEX = /(\d+(?:\.\d+)?)\s*ms/,
  EXTRACT_S_REGEX = /(\d+(?:\.\d+)?)\s*s/;
function extractDuration(animation) {
  var msMatch = animation.match(EXTRACT_MS_REGEX);
  if (msMatch) return Number.parseInt(msMatch[1], 10);
  var sMatch = animation.match(EXTRACT_S_REGEX);
  return sMatch ? Math.round(Number.parseFloat(sMatch[1]) * 1e3) : 300;
}
var MS_DURATION_REGEX = /(\d+(?:\.\d+)?)\s*ms/,
  S_DURATION_REGEX = /(\d+(?:\.\d+)?)\s*s(?!tiffness)/;
function applyDurationOverride(animation, durationMs) {
  var msReplaced = animation.replace(MS_DURATION_REGEX, `${durationMs}ms`);
  if (msReplaced !== animation) return msReplaced;
  var sReplaced = animation.replace(S_DURATION_REGEX, `${durationMs}ms`);
  return sReplaced !== animation ? sReplaced : `${durationMs}ms ${animation}`;
}
var TRANSFORM_KEYS = ["x", "y", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY"];
function buildTransformString(style) {
  if (!style) return "";
  var parts = [];
  if (style.x !== void 0 || style.y !== void 0) {
    var _style_x,
      x = (_style_x = style.x) !== null && _style_x !== void 0 ? _style_x : 0,
      _style_y,
      y = (_style_y = style.y) !== null && _style_y !== void 0 ? _style_y : 0;
    parts.push(`translate(${x}px, ${y}px)`);
  }
  if (style.scale !== void 0 && parts.push(`scale(${style.scale})`), style.scaleX !== void 0 && parts.push(`scaleX(${style.scaleX})`), style.scaleY !== void 0 && parts.push(`scaleY(${style.scaleY})`), style.rotate !== void 0) {
    var val = style.rotate,
      unit = typeof val == "string" && val.includes("deg") ? "" : "deg";
    parts.push(`rotate(${val}${unit})`);
  }
  return style.rotateX !== void 0 && parts.push(`rotateX(${style.rotateX}deg)`), style.rotateY !== void 0 && parts.push(`rotateY(${style.rotateY}deg)`), style.rotateZ !== void 0 && parts.push(`rotateZ(${style.rotateZ}deg)`), style.skewX !== void 0 && parts.push(`skewX(${style.skewX}deg)`), style.skewY !== void 0 && parts.push(`skewY(${style.skewY}deg)`), parts.join(" ");
}
function applyStylesToNode(node, style) {
  if (style) {
    var transformStr = buildTransformString(style);
    transformStr && (node.style.transform = transformStr);
    var _iteratorNormalCompletion = !0,
      _didIteratorError = !1,
      _iteratorError = void 0;
    try {
      for (var _iterator = Object.entries(style)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
        var [key, value] = _step.value;
        TRANSFORM_KEYS.includes(key) || value !== void 0 && (key === "opacity" ? node.style.opacity = String(value) : key === "backgroundColor" ? node.style.backgroundColor = String(value) : key === "color" ? node.style.color = String(value) : node.style[key] = typeof value == "number" ? `${value}px` : String(value));
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
function createAnimations(animations) {
  var reactionListeners = /* @__PURE__ */new WeakMap();
  return {
    animations,
    usePresence,
    ResetPresence,
    inputStyle: "css",
    outputStyle: "css",
    useAnimatedNumber(initial) {
      var [val, setVal] = React.useState(initial),
        finishTimerRef = React.useRef(null);
      return {
        getInstance() {
          return setVal;
        },
        getValue() {
          return val;
        },
        setValue(next, config, onFinish) {
          if (setVal(next), finishTimerRef.current && (clearTimeout(finishTimerRef.current), finishTimerRef.current = null), onFinish) if (!config || config.type === "direct" || config.type === "timing" && config.duration === 0) onFinish();else {
            var duration = config.type === "timing" ? config.duration : 300;
            finishTimerRef.current = setTimeout(onFinish, duration);
          }
          var listeners = reactionListeners.get(setVal);
          listeners && listeners.forEach(function (listener) {
            return listener(next);
          });
        },
        stop() {
          finishTimerRef.current && (clearTimeout(finishTimerRef.current), finishTimerRef.current = null);
        }
      };
    },
    useAnimatedNumberReaction(param, onValue) {
      var {
        value
      } = param;
      React.useEffect(function () {
        var instance = value.getInstance(),
          queue = reactionListeners.get(instance);
        if (!queue) {
          var next = /* @__PURE__ */new Set();
          reactionListeners.set(instance, next), queue = next;
        }
        return queue.add(onValue), function () {
          queue?.delete(onValue);
        };
      }, []);
    },
    useAnimatedNumberStyle(val, getStyle) {
      return getStyle(val.getValue());
    },
    useAnimatedNumbersStyle(vals, getStyle) {
      return getStyle(...vals.map(function (v) {
        return v.getValue();
      }));
    },
    // @ts-ignore - styleState is added by createComponent
    useAnimations: function (param) {
      var {
          props,
          presence,
          style,
          componentState,
          stateRef,
          styleState
        } = param,
        _normalized_config,
        isHydrating = componentState.unmounted === !0,
        isEntering = !!componentState.unmounted,
        isExiting = presence?.[0] === !1,
        sendExitComplete = presence?.[1],
        wasEnteringRef = React.useRef(isEntering),
        justFinishedEntering = wasEnteringRef.current && !isEntering;
      React.useEffect(function () {
        wasEnteringRef.current = isEntering;
      });
      var exitCycleIdRef = React.useRef(0),
        exitCompletedRef = React.useRef(!1),
        wasExitingRef = React.useRef(!1),
        exitInterruptedRef = React.useRef(!1),
        justStartedExiting = isExiting && !wasExitingRef.current,
        justStoppedExiting = !isExiting && wasExitingRef.current;
      justStartedExiting && (exitCycleIdRef.current++, exitCompletedRef.current = !1), justStoppedExiting && (exitCycleIdRef.current++, exitInterruptedRef.current = !0), React.useEffect(function () {
        wasExitingRef.current = isExiting;
      });
      var _styleState_effectiveTransition,
        effectiveTransition = (_styleState_effectiveTransition = styleState?.effectiveTransition) !== null && _styleState_effectiveTransition !== void 0 ? _styleState_effectiveTransition : props.transition,
        normalized = normalizeTransition(effectiveTransition),
        animationState = isExiting ? "exit" : isEntering || justFinishedEntering ? "enter" : "default",
        effectiveAnimationKey = getEffectiveAnimation(normalized, animationState),
        defaultAnimation = effectiveAnimationKey ? animations[effectiveAnimationKey] : null,
        animatedProperties = getAnimatedProperties(normalized),
        hasDefault = normalized.default !== null || normalized.enter !== null || normalized.exit !== null,
        hasPerPropertyConfigs = animatedProperties.length > 0,
        keys;
      if (props.animateOnly ? keys = props.animateOnly : hasPerPropertyConfigs && !hasDefault ? keys = animatedProperties : hasPerPropertyConfigs && hasDefault ? keys = ["all", ...animatedProperties] : keys = ["all"], useIsomorphicLayoutEffect(function () {
        var _normalized_config2,
          host = stateRef.current.host;
        if (!(!sendExitComplete || !isExiting || !host)) {
          var node = host,
            cycleId = exitCycleIdRef.current,
            completeExit = function () {
              cycleId === exitCycleIdRef.current && (exitCompletedRef.current || (exitCompletedRef.current = !0, sendExitComplete()));
            };
          if (keys.length === 0) {
            completeExit();
            return;
          }
          var rafId,
            wasInterrupted = exitInterruptedRef.current,
            ignoreCancelEvents = wasInterrupted,
            enterStyle = props.enterStyle,
            exitStyle = props.exitStyle,
            delayStr2 = normalized.delay ? ` ${normalized.delay}ms` : "",
            durationOverride2 = (_normalized_config2 = normalized.config) === null || _normalized_config2 === void 0 ? void 0 : _normalized_config2.duration,
            exitTransitionString = keys.map(function (key2) {
              var propAnimation = normalized.properties[key2],
                animationValue2 = null;
              return typeof propAnimation == "string" ? animationValue2 = animations[propAnimation] : propAnimation && (typeof propAnimation > "u" ? "undefined" : _type_of(propAnimation)) === "object" && propAnimation.type ? animationValue2 = animations[propAnimation.type] : defaultAnimation && (animationValue2 = defaultAnimation), animationValue2 && durationOverride2 && (animationValue2 = applyDurationOverride(animationValue2, durationOverride2)), animationValue2 ? `${key2} ${animationValue2}${delayStr2}` : null;
            }).filter(Boolean).join(", ");
          if (wasInterrupted) {
            if (exitInterruptedRef.current = !1, node.style.transition = "none", exitStyle) {
              var resetStyle = {},
                _iteratorNormalCompletion = !0,
                _didIteratorError = !1,
                _iteratorError = void 0;
              try {
                for (var _iterator = Object.keys(exitStyle)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                  var key = _step.value;
                  key === "opacity" ? resetStyle[key] = 1 : TRANSFORM_KEYS.includes(key) ? resetStyle[key] = key === "scale" || key === "scaleX" || key === "scaleY" ? 1 : 0 : enterStyle?.[key] !== void 0 && (resetStyle[key] = enterStyle[key]);
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
              applyStylesToNode(node, resetStyle);
            } else node.style.opacity = "1", node.style.transform = "none";
            node.offsetHeight;
          } else if (exitStyle) {
            ignoreCancelEvents = !0, node.style.transition = "none";
            var resetStyle1 = {},
              _iteratorNormalCompletion1 = !0,
              _didIteratorError1 = !1,
              _iteratorError1 = void 0;
            try {
              for (var _iterator1 = Object.keys(exitStyle)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = !0) {
                var key1 = _step1.value;
                key1 === "opacity" ? resetStyle1[key1] = 1 : TRANSFORM_KEYS.includes(key1) ? resetStyle1[key1] = key1 === "scale" || key1 === "scaleX" || key1 === "scaleY" ? 1 : 0 : enterStyle?.[key1] !== void 0 && (resetStyle1[key1] = enterStyle[key1]);
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
            applyStylesToNode(node, resetStyle1), node.offsetHeight, rafId = requestAnimationFrame(function () {
              cycleId === exitCycleIdRef.current && (node.style.transition = exitTransitionString, node.offsetHeight, applyStylesToNode(node, exitStyle), ignoreCancelEvents = !1);
            });
          }
          var maxDuration = defaultAnimation ? extractDuration(defaultAnimation) : 200,
            animationConfigs = getAnimationConfigsForKeys(normalized, animations, keys, defaultAnimation),
            _iteratorNormalCompletion2 = !0,
            _didIteratorError2 = !1,
            _iteratorError2 = void 0;
          try {
            for (var _iterator2 = animationConfigs.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = !0) {
              var animationValue = _step2.value;
              if (animationValue) {
                var duration = extractDuration(animationValue);
                duration > maxDuration && (maxDuration = duration);
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
          var _normalized_delay,
            delay = (_normalized_delay = normalized.delay) !== null && _normalized_delay !== void 0 ? _normalized_delay : 0,
            fallbackTimeout = maxDuration + delay,
            timeoutId = setTimeout(function () {
              completeExit();
            }, fallbackTimeout),
            transitioningProps = new Set(keys),
            completedCount = 0,
            onFinishAnimation = function (event) {
              if (event.target === node) {
                var eventProp = event.propertyName;
                (transitioningProps.has(eventProp) || eventProp === "all") && (completedCount++, completedCount >= transitioningProps.size && (clearTimeout(timeoutId), completeExit()));
              }
            },
            onCancelAnimation = function () {
              ignoreCancelEvents || (clearTimeout(timeoutId), completeExit());
            };
          return node.addEventListener("transitionend", onFinishAnimation), node.addEventListener("transitioncancel", onCancelAnimation), wasInterrupted && (rafId = requestAnimationFrame(function () {
            cycleId === exitCycleIdRef.current && (node.style.transition = exitTransitionString, node.offsetHeight, applyStylesToNode(node, exitStyle), ignoreCancelEvents = !1);
          })), function () {
            clearTimeout(timeoutId), rafId !== void 0 && cancelAnimationFrame(rafId), node.removeEventListener("transitionend", onFinishAnimation), node.removeEventListener("transitioncancel", onCancelAnimation), node.style.transition = "";
          };
        }
      }, [sendExitComplete, isExiting, stateRef, keys, normalized, defaultAnimation, props.enterStyle, props.exitStyle]), isHydrating || !hasNormalizedAnimation(normalized)) return null;
      Array.isArray(style.transform) && (style.transform = transformsToString(style.transform));
      var delayStr = normalized.delay ? ` ${normalized.delay}ms` : "",
        durationOverride = (_normalized_config = normalized.config) === null || _normalized_config === void 0 ? void 0 : _normalized_config.duration;
      return style.transition = keys.map(function (key) {
        var propAnimation = normalized.properties[key],
          animationValue = null;
        return typeof propAnimation == "string" ? animationValue = animations[propAnimation] : propAnimation && (typeof propAnimation > "u" ? "undefined" : _type_of(propAnimation)) === "object" && propAnimation.type ? animationValue = animations[propAnimation.type] : defaultAnimation && (animationValue = defaultAnimation), animationValue && durationOverride && (animationValue = applyDurationOverride(animationValue, durationOverride)), animationValue ? `${key} ${animationValue}${delayStr}` : null;
      }).filter(Boolean).join(", "), process.env.NODE_ENV === "development" && props.debug === "verbose" && console.info("CSS animation", {
        props,
        animations,
        normalized,
        defaultAnimation,
        style,
        isEntering,
        isExiting
      }), {
        style,
        className: isEntering ? "t_unmounted" : ""
      };
    }
  };
}
export { createAnimations };
//# sourceMappingURL=createAnimations.native.js.map
