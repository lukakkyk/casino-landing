import { TamaguiRoot, useDidFinishSSR, useThemeName } from "@tamagui/web";
import { useStackedZIndex, ZIndexHardcodedContext } from "@tamagui/z-index-stack";
import * as React from "react";
import { createPortal } from "react-dom";
import { getStackedZIndexProps } from "./helpers.mjs";
import { jsx } from "react/jsx-runtime";
const Portal = React.memo(propsIn => {
  const {
      children,
      passThrough,
      style,
      open
    } = propsIn,
    themeName = useThemeName(),
    didHydrate = useDidFinishSSR(),
    zIndex = useStackedZIndex(getStackedZIndexProps(propsIn));
  return passThrough ? children : didHydrate ? createPortal(/* @__PURE__ */jsx(TamaguiRoot, {
    theme: themeName,
    style: {
      zIndex,
      position: "fixed",
      inset: 0,
      contain: "strict",
      pointerEvents: open ? "auto" : "none",
      // prevent mobile browser from scrolling/moving this fixed element
      touchAction: "none",
      display: "flex",
      ...style
    },
    children: /* @__PURE__ */jsx(ZIndexHardcodedContext.Provider, {
      value: zIndex,
      children
    })
  }), globalThis.document?.body) : null;
});
export { Portal };
//# sourceMappingURL=Portal.mjs.map
