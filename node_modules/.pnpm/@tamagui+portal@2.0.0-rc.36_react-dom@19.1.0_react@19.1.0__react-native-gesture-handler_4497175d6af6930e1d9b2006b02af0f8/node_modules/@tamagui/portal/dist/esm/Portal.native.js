import { jsx as _jsx } from "react/jsx-runtime";
import { View } from "@tamagui/core";
import { getPortal, NativePortal } from "@tamagui/native";
import { useStackedZIndex } from "@tamagui/z-index-stack";
import { GorhomPortalItem } from "./GorhomPortalItem.native.js";
import { getStackedZIndexProps } from "./helpers.native.js";
var Portal = function (propsIn) {
  var zIndex = useStackedZIndex(getStackedZIndexProps(propsIn)),
    {
      children,
      passThrough
    } = propsIn,
    contents = /* @__PURE__ */_jsx(View, {
      pointerEvents: "box-none",
      position: "absolute",
      inset: 0,
      maxWidth: "100%",
      zIndex,
      passThrough,
      children
    }),
    portalState = getPortal().state;
  return portalState.type === "teleport" ? /* @__PURE__ */_jsx(NativePortal, {
    hostName: "root",
    children: contents
  }) : /* @__PURE__ */_jsx(GorhomPortalItem, {
    passThrough,
    hostName: "root",
    children: contents
  });
};
export { Portal };
//# sourceMappingURL=Portal.native.js.map
