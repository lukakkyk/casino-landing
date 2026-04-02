import { getVariableValue, isWeb, styled } from "@tamagui/core";
import { createContextScope } from "@tamagui/create-context";
import { getSize } from "@tamagui/get-token";
import { withStaticProperties } from "@tamagui/helpers";
import { YStack } from "@tamagui/stacks";
import { useState } from "react";
import { jsx } from "react/jsx-runtime";
const PROGRESS_NAME = "Progress",
  [createProgressContext, createProgressScope] = createContextScope(PROGRESS_NAME),
  [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME),
  INDICATOR_NAME = "ProgressIndicator",
  ProgressIndicatorFrame = styled(YStack, {
    name: INDICATOR_NAME,
    variants: {
      unstyled: {
        false: {
          height: "100%",
          width: "100%",
          backgroundColor: "$background"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  ProgressIndicator = ProgressIndicatorFrame.styleable(function (props, forwardedRef) {
    const {
        __scopeProgress,
        transition,
        ...indicatorProps
      } = props,
      context = useProgressContext(INDICATOR_NAME, __scopeProgress),
      progressRatio = (context.value ?? 0) / context.max;
    let x;
    if (isWeb) x = `${-100 + progressRatio * 50}%`;else {
      const baseWidth = context.width || 0;
      x = Math.ceil(-baseWidth * (2 - progressRatio));
    }
    return /* @__PURE__ */jsx(ProgressIndicatorFrame, {
      "data-state": getProgressState(context.value, context.max),
      "data-value": context.value ?? void 0,
      "data-max": context.max,
      x,
      width: "200%",
      ...(!props.unstyled && {
        animateOnly: ["transform"],
        // on native, hide until we have width measurement
        ...(!isWeb && context.width === 0 && {
          opacity: 0
        })
      }),
      ...indicatorProps,
      ref: forwardedRef,
      transition: !isWeb && !context.width ? null : transition
    });
  });
function defaultGetValueLabel(value, max) {
  return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
  return typeof value == "number";
}
function isValidMaxNumber(max) {
  return isNumber(max) && !Number.isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
  return isNumber(value) && !Number.isNaN(value) && value <= max && value >= 0;
}
const DEFAULT_MAX = 100,
  ProgressFrame = styled(YStack, {
    name: "Progress",
    variants: {
      unstyled: {
        false: {
          borderRadius: 1e5,
          overflow: "hidden",
          backgroundColor: "$background"
        }
      },
      size: {
        "...size": val => {
          const size = Math.round(getVariableValue(getSize(val)) * 0.25);
          return {
            height: size,
            minWidth: getVariableValue(size) * 20,
            width: "100%"
          };
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  Progress = withStaticProperties(ProgressFrame.styleable(function (props, forwardedRef) {
    const {
        // @ts-expect-error
        __scopeProgress,
        value: valueProp,
        max: maxProp,
        getValueLabel = defaultGetValueLabel,
        size = "$true",
        ...progressProps
      } = props,
      max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX,
      value = isValidValueNumber(valueProp, max) ? Math.round(valueProp) : null,
      valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0,
      [width, setWidth] = useState(0);
    return /* @__PURE__ */jsx(ProgressProvider, {
      scope: __scopeProgress,
      value,
      max,
      width,
      children: /* @__PURE__ */jsx(ProgressFrame, {
        "aria-valuemax": max,
        "aria-valuemin": 0,
        "aria-valuenow": isNumber(value) ? value : void 0,
        "aria-valuetext": valueLabel,
        role: "progressbar",
        "data-state": getProgressState(value, max),
        "data-value": value ?? void 0,
        "data-max": max,
        ...(progressProps.unstyled !== !0 && {
          size
        }),
        ...progressProps,
        ...(!isWeb && {
          onLayout: e => {
            const newWidth = Math.round(e.nativeEvent.layout.width);
            newWidth !== width && setWidth(newWidth), progressProps.onLayout?.(e);
          }
        }),
        ref: forwardedRef
      })
    });
  }), {
    Indicator: ProgressIndicator
  });
export { Progress, ProgressFrame, ProgressIndicator, ProgressIndicatorFrame, createProgressScope };
//# sourceMappingURL=Progress.mjs.map
