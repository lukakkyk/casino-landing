var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: !0
}), mod);
var Progress_exports = {};
__export(Progress_exports, {
  Progress: () => Progress,
  ProgressFrame: () => ProgressFrame,
  ProgressIndicator: () => ProgressIndicator,
  ProgressIndicatorFrame: () => ProgressIndicatorFrame,
  createProgressScope: () => createProgressScope
});
module.exports = __toCommonJS(Progress_exports);
var import_core = require("@tamagui/core"),
  import_create_context = require("@tamagui/create-context"),
  import_get_token = require("@tamagui/get-token"),
  import_helpers = require("@tamagui/helpers"),
  import_stacks = require("@tamagui/stacks"),
  import_react = require("react"),
  import_jsx_runtime = require("react/jsx-runtime");
const PROGRESS_NAME = "Progress",
  [createProgressContext, createProgressScope] = (0, import_create_context.createContextScope)(PROGRESS_NAME),
  [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME),
  INDICATOR_NAME = "ProgressIndicator",
  ProgressIndicatorFrame = (0, import_core.styled)(import_stacks.YStack, {
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
    if (import_core.isWeb) x = `${-100 + progressRatio * 50}%`;else {
      const baseWidth = context.width || 0;
      x = Math.ceil(-baseWidth * (2 - progressRatio));
    }
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(ProgressIndicatorFrame, {
      "data-state": getProgressState(context.value, context.max),
      "data-value": context.value ?? void 0,
      "data-max": context.max,
      x,
      width: "200%",
      ...(!props.unstyled && {
        animateOnly: ["transform"],
        // on native, hide until we have width measurement
        ...(!import_core.isWeb && context.width === 0 && {
          opacity: 0
        })
      }),
      ...indicatorProps,
      ref: forwardedRef,
      transition: !import_core.isWeb && !context.width ? null : transition
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
  ProgressFrame = (0, import_core.styled)(import_stacks.YStack, {
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
          const size = Math.round((0, import_core.getVariableValue)((0, import_get_token.getSize)(val)) * 0.25);
          return {
            height: size,
            minWidth: (0, import_core.getVariableValue)(size) * 20,
            width: "100%"
          };
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  Progress = (0, import_helpers.withStaticProperties)(ProgressFrame.styleable(function (props, forwardedRef) {
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
      [width, setWidth] = (0, import_react.useState)(0);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(ProgressProvider, {
      scope: __scopeProgress,
      value,
      max,
      width,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(ProgressFrame, {
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
        ...(!import_core.isWeb && {
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