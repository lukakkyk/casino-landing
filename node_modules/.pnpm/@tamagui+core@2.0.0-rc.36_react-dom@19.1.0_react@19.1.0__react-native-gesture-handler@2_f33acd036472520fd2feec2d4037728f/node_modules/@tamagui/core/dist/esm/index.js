export * from "@tamagui/web";
import { createMeasure, createMeasureInWindow, createMeasureLayout, enable, useElementLayout } from "@tamagui/use-element-layout";
import { TamaguiProvider as WebTamaguiProvider, Text as WebText, View as WebView, createTamagui as createTamaguiWeb, setupHooks, useIsomorphicLayoutEffect } from "@tamagui/web";
import { getBaseViews } from "./getBaseViews.mjs";
import { LayoutMeasurementController, registerLayoutNode, setOnLayoutStrategy } from "@tamagui/use-element-layout";
export * from "./reactNativeTypes.mjs";
import { jsx } from "react/jsx-runtime";
const TamaguiProvider = props => (useIsomorphicLayoutEffect(() => {
    enable();
  }, []), /* @__PURE__ */jsx(WebTamaguiProvider, {
    ...props
  })),
  createTamagui = conf => createTamaguiWeb(conf),
  baseViews = getBaseViews();
setupHooks({
  getBaseViews,
  setElementProps: node => {
    node && !node.measure && (node.measure ||= createMeasure(node), node.measureInWindow ||= createMeasureInWindow(node), node.measureLayout ||= createMeasureLayout(node));
  },
  usePropsTransform(elementType, propsIn, stateRef, willHydrate) {
    {
      const isDOM = typeof elementType == "string",
        {
          // remove event props handles by useResponderEvents
          onMoveShouldSetResponder,
          onMoveShouldSetResponderCapture,
          onResponderEnd,
          onResponderGrant,
          onResponderMove,
          onResponderReject,
          onResponderRelease,
          onResponderStart,
          onResponderTerminate,
          onResponderTerminationRequest,
          onScrollShouldSetResponder,
          onScrollShouldSetResponderCapture,
          onSelectionChangeShouldSetResponder,
          onSelectionChangeShouldSetResponderCapture,
          onStartShouldSetResponder,
          onStartShouldSetResponderCapture,
          // android
          collapsable,
          focusable,
          // deprecated,
          accessible,
          accessibilityDisabled,
          onLayout,
          hrefAttrs,
          ...plainDOMProps
        } = propsIn;
      if ((willHydrate || isDOM) && useElementLayout(stateRef, isDOM ? onLayout : void 0), isDOM) {
        if (plainDOMProps.href && hrefAttrs) {
          const {
            download,
            rel,
            target
          } = hrefAttrs;
          download != null && (plainDOMProps.download = download), rel && (plainDOMProps.rel = rel), typeof target == "string" && (plainDOMProps.target = target.charAt(0) !== "_" ? `_${target}` : target);
        }
        return plainDOMProps;
      }
    }
  }
});
const View = WebView,
  Text = WebText;
export { LayoutMeasurementController, TamaguiProvider, Text, View, createTamagui, registerLayoutNode, setOnLayoutStrategy };
//# sourceMappingURL=index.js.map
