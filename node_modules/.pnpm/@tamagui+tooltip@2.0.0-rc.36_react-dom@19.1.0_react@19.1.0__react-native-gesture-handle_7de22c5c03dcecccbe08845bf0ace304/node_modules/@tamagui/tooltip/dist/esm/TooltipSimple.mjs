import { getSpace } from "@tamagui/get-token";
import { Paragraph } from "@tamagui/text";
import * as React from "react";
import { Tooltip } from "./Tooltip.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
const TooltipSimple = React.forwardRef(({
  label,
  children,
  contentProps,
  disabled,
  ...tooltipProps
}, ref) => {
  "use no memo";

  const child = React.Children.only(children);
  return label ? /* @__PURE__ */jsxs(Tooltip, {
    disableRTL: !0,
    offset: 15,
    restMs: 40,
    delay: 40,
    zIndex: 1e6,
    ...tooltipProps,
    ...(disabled ? {
      open: !1
    } : null),
    children: [/* @__PURE__ */jsx(Tooltip.Trigger, {
      ...(typeof label == "string" && {
        "aria-label": label
      }),
      asChild: "except-style",
      children: ref && React.isValidElement(child) ? React.cloneElement(child, {
        ref
      }) : child
    }), /* @__PURE__ */jsxs(Tooltip.Content, {
      enterStyle: {
        y: -4,
        opacity: 0,
        scale: 0.96
      },
      exitStyle: {
        y: -4,
        opacity: 0,
        scale: 0.96
      },
      scale: 1,
      elevation: "$0.5",
      opacity: 1,
      pointerEvents: "none",
      paddingVertical: getSpace(tooltipProps.size || "$true", {
        shift: -4
      }),
      animateOnly: ["transform", "opacity"],
      transition: ["quicker", {
        opacity: {
          overshootClamping: !0
        }
      }],
      ...contentProps,
      children: [/* @__PURE__ */jsx(Tooltip.Arrow, {}), /* @__PURE__ */jsx(Paragraph, {
        maxWidth: 350,
        overflow: "hidden",
        size: "$3",
        textAlign: "center",
        "$platform-web": {
          textWrap: "balance"
        },
        children: label
      })]
    })]
  }) : children;
});
export { TooltipSimple };
//# sourceMappingURL=TooltipSimple.mjs.map
