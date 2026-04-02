import { jsx as _jsx } from "react/jsx-runtime";
import { getVariableValue, isWeb, styled } from "@tamagui/core";
import { createContextScope } from "@tamagui/create-context";
import { getSize } from "@tamagui/get-token";
import { withStaticProperties } from "@tamagui/helpers";
import { YStack } from "@tamagui/stacks";
import { useState } from "react";
var PROGRESS_NAME = "Progress",
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
    var {
        __scopeProgress,
        transition,
        ...indicatorProps
      } = props,
      context = useProgressContext(INDICATOR_NAME, __scopeProgress),
      _context_value,
      progressRatio = ((_context_value = context.value) !== null && _context_value !== void 0 ? _context_value : 0) / context.max,
      x;
    if (isWeb) x = `${-100 + progressRatio * 50}%`;else {
      var baseWidth = context.width || 0;
      x = Math.ceil(-baseWidth * (2 - progressRatio));
    }
    var _context_value1;
    return /* @__PURE__ */_jsx(ProgressIndicatorFrame, {
      "data-state": getProgressState(context.value, context.max),
      "data-value": (_context_value1 = context.value) !== null && _context_value1 !== void 0 ? _context_value1 : void 0,
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
var DEFAULT_MAX = 100,
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
        "...size": function (val) {
          var size = Math.round(getVariableValue(getSize(val)) * 0.25);
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
    var {
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
    return /* @__PURE__ */_jsx(ProgressProvider, {
      scope: __scopeProgress,
      value,
      max,
      width,
      children: /* @__PURE__ */_jsx(ProgressFrame, {
        "aria-valuemax": max,
        "aria-valuemin": 0,
        "aria-valuenow": isNumber(value) ? value : void 0,
        "aria-valuetext": valueLabel,
        // @ts-ignore
        role: "progressbar",
        "data-state": getProgressState(value, max),
        "data-value": value ?? void 0,
        "data-max": max,
        ...(progressProps.unstyled !== !0 && {
          size
        }),
        ...progressProps,
        ...(!isWeb && {
          onLayout: function (e) {
            var _progressProps_onLayout,
              newWidth = Math.round(e.nativeEvent.layout.width);
            newWidth !== width && setWidth(newWidth), (_progressProps_onLayout = progressProps.onLayout) === null || _progressProps_onLayout === void 0 || _progressProps_onLayout.call(progressProps, e);
          }
        }),
        ref: forwardedRef
      })
    });
  }), {
    Indicator: ProgressIndicator
  });
export { Progress, ProgressFrame, ProgressIndicator, ProgressIndicatorFrame, createProgressScope };
//# sourceMappingURL=Progress.native.js.map
