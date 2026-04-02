import { jsx as _jsx } from "react/jsx-runtime";
export * from "@tamagui/web";
import { createMedia } from "@tamagui/react-native-media-driver";
import { enable } from "@tamagui/use-element-layout";
import { TamaguiProvider as WebTamaguiProvider, Text as WebText, View as WebView, createTamagui as createTamaguiWeb, setupHooks, useIsomorphicLayoutEffect } from "@tamagui/web";
import { createOptimizedView } from "./createOptimizedView.native.js";
import { getBaseViews } from "./getBaseViews.native.js";
import { LayoutMeasurementController, registerLayoutNode, setOnLayoutStrategy } from "@tamagui/use-element-layout";
export * from "./reactNativeTypes.native.js";
var TamaguiProvider = function (props) {
    return useIsomorphicLayoutEffect(function () {
      enable();
    }, []), /* @__PURE__ */_jsx(WebTamaguiProvider, {
      ...props
    });
  },
  createTamagui = function (conf) {
    return conf.media && (conf.media = createMedia(conf.media)), createTamaguiWeb(conf);
  },
  baseViews = getBaseViews();
setupHooks({
  getBaseViews,
  setElementProps: function (node) {
    if (0 && node && !node.measure) var _node, _node1, _node2;
  },
  usePropsTransform(elementType, propsIn, stateRef, willHydrate) {
    if (0) {
      var isDOM, onMoveShouldSetResponder, onMoveShouldSetResponderCapture, onResponderEnd, onResponderGrant, onResponderMove, onResponderReject, onResponderRelease, onResponderStart, onResponderTerminate, onResponderTerminationRequest, onScrollShouldSetResponder, onScrollShouldSetResponderCapture, onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder, onStartShouldSetResponderCapture, collapsable, focusable, accessible, accessibilityDisabled, onLayout, hrefAttrs, plainDOMProps;
      if (isDOM && plainDOMProps.href && hrefAttrs) var download, rel, target;
    }
  },
  useChildren(elementType, children, viewProps) {
    if (process.env.NODE_ENV !== "test" && elementType === baseViews.View && baseViews.TextAncestor) return createOptimizedView(children, viewProps, baseViews);
  }
});
var View = WebView,
  Text = WebText;
export { LayoutMeasurementController, TamaguiProvider, Text, View, createTamagui, registerLayoutNode, setOnLayoutStrategy };
//# sourceMappingURL=index.native.js.map
