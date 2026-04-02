import { normalizeTransition, getAnimatedProperties, hasAnimation as hasNormalizedAnimation, getEffectiveAnimation, getAnimationConfigsForKeys } from "@tamagui/animation-helpers";
import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import { ResetPresence, usePresence } from "@tamagui/use-presence";
import { transformsToString } from "@tamagui/web";
import React from "react";
const EXTRACT_MS_REGEX = /(\d+(?:\.\d+)?)\s*ms/,
  EXTRACT_S_REGEX = /(\d+(?:\.\d+)?)\s*s/;
function extractDuration(animation) {
  const msMatch = animation.match(EXTRACT_MS_REGEX);
  if (msMatch) return Number.parseInt(msMatch[1], 10);
  const sMatch = animation.match(EXTRACT_S_REGEX);
  return sMatch ? Math.round(Number.parseFloat(sMatch[1]) * 1e3) : 300;
}
const MS_DURATION_REGEX = /(\d+(?:\.\d+)?)\s*ms/,
  S_DURATION_REGEX = /(\d+(?:\.\d+)?)\s*s(?!tiffness)/;
function applyDurationOverride(animation, durationMs) {
  const msReplaced = animation.replace(MS_DURATION_REGEX, `${durationMs}ms`);
  if (msReplaced !== animation) return msReplaced;
  const sReplaced = animation.replace(S_DURATION_REGEX, `${durationMs}ms`);
  return sReplaced !== animation ? sReplaced : `${durationMs}ms ${animation}`;
}
const TRANSFORM_KEYS = ["x", "y", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY"];
function buildTransformString(style) {
  if (!style) return "";
  const parts = [];
  if (style.x !== void 0 || style.y !== void 0) {
    const x = style.x ?? 0,
      y = style.y ?? 0;
    parts.push(`translate(${x}px, ${y}px)`);
  }
  if (style.scale !== void 0 && parts.push(`scale(${style.scale})`), style.scaleX !== void 0 && parts.push(`scaleX(${style.scaleX})`), style.scaleY !== void 0 && parts.push(`scaleY(${style.scaleY})`), style.rotate !== void 0) {
    const val = style.rotate,
      unit = typeof val == "string" && val.includes("deg") ? "" : "deg";
    parts.push(`rotate(${val}${unit})`);
  }
  return style.rotateX !== void 0 && parts.push(`rotateX(${style.rotateX}deg)`), style.rotateY !== void 0 && parts.push(`rotateY(${style.rotateY}deg)`), style.rotateZ !== void 0 && parts.push(`rotateZ(${style.rotateZ}deg)`), style.skewX !== void 0 && parts.push(`skewX(${style.skewX}deg)`), style.skewY !== void 0 && parts.push(`skewY(${style.skewY}deg)`), parts.join(" ");
}
function applyStylesToNode(node, style) {
  if (!style) return;
  const transformStr = buildTransformString(style);
  transformStr && (node.style.transform = transformStr);
  for (const [key, value] of Object.entries(style)) TRANSFORM_KEYS.includes(key) || value !== void 0 && (key === "opacity" ? node.style.opacity = String(value) : key === "backgroundColor" ? node.style.backgroundColor = String(value) : key === "color" ? node.style.color = String(value) : node.style[key] = typeof value == "number" ? `${value}px` : String(value));
}
function createAnimations(animations) {
  const reactionListeners = /* @__PURE__ */new WeakMap();
  return {
    animations,
    usePresence,
    ResetPresence,
    inputStyle: "css",
    outputStyle: "css",
    useAnimatedNumber(initial) {
      const [val, setVal] = React.useState(initial),
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
            const duration = config.type === "timing" ? config.duration : 300;
            finishTimerRef.current = setTimeout(onFinish, duration);
          }
          const listeners = reactionListeners.get(setVal);
          listeners && listeners.forEach(listener => listener(next));
        },
        stop() {
          finishTimerRef.current && (clearTimeout(finishTimerRef.current), finishTimerRef.current = null);
        }
      };
    },
    useAnimatedNumberReaction({
      value
    }, onValue) {
      React.useEffect(() => {
        const instance = value.getInstance();
        let queue = reactionListeners.get(instance);
        if (!queue) {
          const next = /* @__PURE__ */new Set();
          reactionListeners.set(instance, next), queue = next;
        }
        return queue.add(onValue), () => {
          queue?.delete(onValue);
        };
      }, []);
    },
    useAnimatedNumberStyle(val, getStyle) {
      return getStyle(val.getValue());
    },
    useAnimatedNumbersStyle(vals, getStyle) {
      return getStyle(...vals.map(v => v.getValue()));
    },
    // @ts-ignore - styleState is added by createComponent
    useAnimations: ({
      props,
      presence,
      style,
      componentState,
      stateRef,
      styleState
    }) => {
      const isHydrating = componentState.unmounted === !0,
        isEntering = !!componentState.unmounted,
        isExiting = presence?.[0] === !1,
        sendExitComplete = presence?.[1],
        wasEnteringRef = React.useRef(isEntering),
        justFinishedEntering = wasEnteringRef.current && !isEntering;
      React.useEffect(() => {
        wasEnteringRef.current = isEntering;
      });
      const exitCycleIdRef = React.useRef(0),
        exitCompletedRef = React.useRef(!1),
        wasExitingRef = React.useRef(!1),
        exitInterruptedRef = React.useRef(!1),
        justStartedExiting = isExiting && !wasExitingRef.current,
        justStoppedExiting = !isExiting && wasExitingRef.current;
      justStartedExiting && (exitCycleIdRef.current++, exitCompletedRef.current = !1), justStoppedExiting && (exitCycleIdRef.current++, exitInterruptedRef.current = !0), React.useEffect(() => {
        wasExitingRef.current = isExiting;
      });
      const effectiveTransition = styleState?.effectiveTransition ?? props.transition,
        normalized = normalizeTransition(effectiveTransition),
        effectiveAnimationKey = getEffectiveAnimation(normalized, isExiting ? "exit" : isEntering || justFinishedEntering ? "enter" : "default"),
        defaultAnimation = effectiveAnimationKey ? animations[effectiveAnimationKey] : null,
        animatedProperties = getAnimatedProperties(normalized),
        hasDefault = normalized.default !== null || normalized.enter !== null || normalized.exit !== null,
        hasPerPropertyConfigs = animatedProperties.length > 0;
      let keys;
      if (props.animateOnly ? keys = props.animateOnly : hasPerPropertyConfigs && !hasDefault ? keys = animatedProperties : hasPerPropertyConfigs && hasDefault ? keys = ["all", ...animatedProperties] : keys = ["all"], useIsomorphicLayoutEffect(() => {
        const host = stateRef.current.host;
        if (!sendExitComplete || !isExiting || !host) return;
        const node = host,
          cycleId = exitCycleIdRef.current,
          completeExit = () => {
            cycleId === exitCycleIdRef.current && (exitCompletedRef.current || (exitCompletedRef.current = !0, sendExitComplete()));
          };
        if (keys.length === 0) {
          completeExit();
          return;
        }
        let rafId;
        const wasInterrupted = exitInterruptedRef.current;
        let ignoreCancelEvents = wasInterrupted;
        const enterStyle = props.enterStyle,
          exitStyle = props.exitStyle,
          delayStr2 = normalized.delay ? ` ${normalized.delay}ms` : "",
          durationOverride2 = normalized.config?.duration,
          exitTransitionString = keys.map(key => {
            const propAnimation = normalized.properties[key];
            let animationValue = null;
            return typeof propAnimation == "string" ? animationValue = animations[propAnimation] : propAnimation && typeof propAnimation == "object" && propAnimation.type ? animationValue = animations[propAnimation.type] : defaultAnimation && (animationValue = defaultAnimation), animationValue && durationOverride2 && (animationValue = applyDurationOverride(animationValue, durationOverride2)), animationValue ? `${key} ${animationValue}${delayStr2}` : null;
          }).filter(Boolean).join(", ");
        if (wasInterrupted) {
          if (exitInterruptedRef.current = !1, node.style.transition = "none", exitStyle) {
            const resetStyle = {};
            for (const key of Object.keys(exitStyle)) key === "opacity" ? resetStyle[key] = 1 : TRANSFORM_KEYS.includes(key) ? resetStyle[key] = key === "scale" || key === "scaleX" || key === "scaleY" ? 1 : 0 : enterStyle?.[key] !== void 0 && (resetStyle[key] = enterStyle[key]);
            applyStylesToNode(node, resetStyle);
          } else node.style.opacity = "1", node.style.transform = "none";
          node.offsetHeight;
        } else if (exitStyle) {
          ignoreCancelEvents = !0, node.style.transition = "none";
          const resetStyle = {};
          for (const key of Object.keys(exitStyle)) key === "opacity" ? resetStyle[key] = 1 : TRANSFORM_KEYS.includes(key) ? resetStyle[key] = key === "scale" || key === "scaleX" || key === "scaleY" ? 1 : 0 : enterStyle?.[key] !== void 0 && (resetStyle[key] = enterStyle[key]);
          applyStylesToNode(node, resetStyle), node.offsetHeight, rafId = requestAnimationFrame(() => {
            cycleId === exitCycleIdRef.current && (node.style.transition = exitTransitionString, node.offsetHeight, applyStylesToNode(node, exitStyle), ignoreCancelEvents = !1);
          });
        }
        let maxDuration = defaultAnimation ? extractDuration(defaultAnimation) : 200;
        const animationConfigs = getAnimationConfigsForKeys(normalized, animations, keys, defaultAnimation);
        for (const animationValue of animationConfigs.values()) if (animationValue) {
          const duration = extractDuration(animationValue);
          duration > maxDuration && (maxDuration = duration);
        }
        const delay = normalized.delay ?? 0,
          fallbackTimeout = maxDuration + delay,
          timeoutId = setTimeout(() => {
            completeExit();
          }, fallbackTimeout),
          transitioningProps = new Set(keys);
        let completedCount = 0;
        const onFinishAnimation = event => {
            if (event.target !== node) return;
            const eventProp = event.propertyName;
            (transitioningProps.has(eventProp) || eventProp === "all") && (completedCount++, completedCount >= transitioningProps.size && (clearTimeout(timeoutId), completeExit()));
          },
          onCancelAnimation = () => {
            ignoreCancelEvents || (clearTimeout(timeoutId), completeExit());
          };
        return node.addEventListener("transitionend", onFinishAnimation), node.addEventListener("transitioncancel", onCancelAnimation), wasInterrupted && (rafId = requestAnimationFrame(() => {
          cycleId === exitCycleIdRef.current && (node.style.transition = exitTransitionString, node.offsetHeight, applyStylesToNode(node, exitStyle), ignoreCancelEvents = !1);
        })), () => {
          clearTimeout(timeoutId), rafId !== void 0 && cancelAnimationFrame(rafId), node.removeEventListener("transitionend", onFinishAnimation), node.removeEventListener("transitioncancel", onCancelAnimation), node.style.transition = "";
        };
      }, [sendExitComplete, isExiting, stateRef, keys, normalized, defaultAnimation, props.enterStyle, props.exitStyle]), isHydrating || !hasNormalizedAnimation(normalized)) return null;
      Array.isArray(style.transform) && (style.transform = transformsToString(style.transform));
      const delayStr = normalized.delay ? ` ${normalized.delay}ms` : "",
        durationOverride = normalized.config?.duration;
      return style.transition = keys.map(key => {
        const propAnimation = normalized.properties[key];
        let animationValue = null;
        return typeof propAnimation == "string" ? animationValue = animations[propAnimation] : propAnimation && typeof propAnimation == "object" && propAnimation.type ? animationValue = animations[propAnimation.type] : defaultAnimation && (animationValue = defaultAnimation), animationValue && durationOverride && (animationValue = applyDurationOverride(animationValue, durationOverride)), animationValue ? `${key} ${animationValue}${delayStr}` : null;
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
//# sourceMappingURL=createAnimations.mjs.map
