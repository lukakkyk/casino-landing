import { useComposedRefs } from "@tamagui/compose-refs";
import { Slot, View, composeEventHandlers } from "@tamagui/core";
import { useEscapeKeydown } from "@tamagui/use-escape-keydown";
import { useEvent } from "@tamagui/use-event";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { jsx } from "react/jsx-runtime";
function dispatchDiscreteCustomEvent(target, event) {
  target && ReactDOM.flushSync(() => target.dispatchEvent(event));
}
const DISMISSABLE_LAYER_NAME = "Dismissable",
  CONTEXT_UPDATE = "dismissable.update",
  POINTER_DOWN_OUTSIDE = "dismissable.pointerDownOutside",
  FOCUS_OUTSIDE = "dismissable.focusOutside";
let originalBodyPointerEvents;
const globalLayers = /* @__PURE__ */new Set(),
  layerChangeListeners = /* @__PURE__ */new Set();
let layersWithPointerEventsDisabledCount = 0;
function notifyLayerChange() {
  for (const listener of layerChangeListeners) listener();
}
function getDismissableLayerCount() {
  return globalLayers.size;
}
function debugDismissableLayers() {
  const layers = Array.from(globalLayers);
  return console.log("[Dismissable] Active layers:", layers.length, layers), layers;
}
function useHasDismissableLayers() {
  const [count, setCount] = React.useState(() => globalLayers.size);
  return React.useEffect(() => {
    setCount(globalLayers.size);
    const update = () => setCount(globalLayers.size);
    return layerChangeListeners.add(update), () => {
      layerChangeListeners.delete(update);
    };
  }, []), count > 0;
}
const DismissableContext = React.createContext({
  layers: /* @__PURE__ */new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */new Set(),
  branches: /* @__PURE__ */new Set()
});
function useIsInsideDismissable(ref) {
  const context = React.useContext(DismissableContext),
    [isInside, setIsInside] = React.useState(!1);
  return React.useEffect(() => {
    const check = () => {
      const el = ref.current;
      if (!el) {
        setIsInside(!1);
        return;
      }
      for (const layer of context.layers) if (layer.contains(el)) {
        setIsInside(!0);
        return;
      }
      setIsInside(!1);
    };
    return check(), document.addEventListener(CONTEXT_UPDATE, check), () => document.removeEventListener(CONTEXT_UPDATE, check);
  }, [context.layers, ref]), isInside;
}
function useDismissableLayersAbove(ref) {
  const context = React.useContext(DismissableContext),
    [count, setCount] = React.useState(0);
  return React.useEffect(() => {
    const check = () => {
      const el = ref.current;
      if (!el) {
        setCount(0);
        return;
      }
      let above = 0;
      for (const layer of context.layers) layer.contains(el) && above++;
      setCount(above);
    };
    return check(), document.addEventListener(CONTEXT_UPDATE, check), () => document.removeEventListener(CONTEXT_UPDATE, check);
  }, [context.layers, ref]), count;
}
const Dismissable = React.forwardRef((props, forwardedRef) => {
  const {
      disableOutsidePointerEvents = !1,
      forceUnmount,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      asChild,
      children,
      branches: branchesProp,
      ...layerProps
    } = props,
    Comp = asChild ? Slot : View,
    context = React.useContext(DismissableContext),
    [node, setNode] = React.useState(null),
    [, force] = React.useState({}),
    composedRefs = useComposedRefs(forwardedRef, node2 => setNode(node2)),
    layers = Array.from(context.layers),
    [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1),
    highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled),
    index = node ? layers.indexOf(node) : -1,
    isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0,
    isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex,
    pointerDownOutside = usePointerDownOutside(event => {
      const target = event.target,
        isPointerDownOnBranch = [...(branchesProp || context.branches)].some(branch => branch.contains(target));
      !isPointerEventsEnabled || isPointerDownOnBranch || (onPointerDownOutside?.(event), onInteractOutside?.(event), event.defaultPrevented || onDismiss?.());
    }),
    focusOutside = useFocusOutside(event => {
      const target = event.target;
      [...(branchesProp || context.branches)].some(branch => branch.contains(target)) || (onFocusOutside?.(event), onInteractOutside?.(event), event.defaultPrevented || onDismiss?.());
    }),
    forceUnmountRef = React.useRef(forceUnmount);
  return React.useEffect(() => {
    forceUnmountRef.current = forceUnmount;
  }, [forceUnmount]), useEscapeKeydown(event => {
    if (forceUnmountRef.current) return;
    const currentLayers = Array.from(context.layers);
    (node ? currentLayers.indexOf(node) : -1) === currentLayers.length - 1 && (onEscapeKeyDown?.(event), !event.defaultPrevented && onDismiss && (event.preventDefault(), onDismiss()));
  }), React.useEffect(() => {
    if (node && !forceUnmount) return disableOutsidePointerEvents && (context.layersWithOutsidePointerEventsDisabled.size === 0 && (originalBodyPointerEvents = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), context.layersWithOutsidePointerEventsDisabled.add(node), layersWithPointerEventsDisabledCount++), context.layers.add(node), globalLayers.add(node), (disableOutsidePointerEvents || layersWithPointerEventsDisabledCount > 0) && dispatchUpdate(), notifyLayerChange(), () => {
      disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = originalBodyPointerEvents);
    };
  }, [node, disableOutsidePointerEvents, forceUnmount, context]), React.useEffect(() => {
    if (!forceUnmount) return () => {
      if (!node) return;
      const hadPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.has(node);
      context.layers.delete(node), context.layersWithOutsidePointerEventsDisabled.delete(node), globalLayers.delete(node), layersWithPointerEventsDisabledCount > 0 && dispatchUpdate(), notifyLayerChange(), hadPointerEventsDisabled && layersWithPointerEventsDisabledCount--;
    };
  }, [node, context, forceUnmount]), React.useEffect(() => {
    const handleUpdate = () => {
      layersWithPointerEventsDisabledCount > 0 && force({});
    };
    return document.addEventListener(CONTEXT_UPDATE, handleUpdate), () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
  }, []), /* @__PURE__ */jsx(Comp, {
    ...layerProps,
    ref: composedRefs,
    ...(!asChild && {
      display: "contents"
    }),
    pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
    onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture),
    children
  });
});
Dismissable.displayName = DISMISSABLE_LAYER_NAME;
const BRANCH_NAME = "DismissableBranch",
  DismissableBranch = React.forwardRef((props, forwardedRef) => {
    const {
        branches: branchesProp,
        ...rest
      } = props,
      context = React.useContext(DismissableContext),
      ref = React.useRef(null),
      composedRefs = useComposedRefs(forwardedRef, ref);
    return React.useEffect(() => {
      const node = ref.current;
      if (!(node instanceof HTMLElement)) return;
      const branches = branchesProp || context.branches;
      if (node && branches) return branches.add(node), () => {
        branches.delete(node);
      };
    }, [branchesProp, context.branches]), /* @__PURE__ */jsx(View, {
      asChild: "except-style",
      ...rest,
      ref: composedRefs
    });
  });
DismissableBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside) {
  const handlePointerDownOutside = useEvent(onPointerDownOutside),
    isPointerInsideReactTreeRef = React.useRef(!1),
    handleClickRef = React.useRef(() => {});
  return React.useEffect(() => {
    const handlePointerDown = event => {
        if (event.target && !isPointerInsideReactTreeRef.current) {
          let handleAndDispatchPointerDownOutsideEvent = function () {
            handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
              discrete: !0
            });
          };
          const eventDetail = {
            originalEvent: event
          };
          event.pointerType === "touch" ? (document.removeEventListener("click", handleClickRef.current), handleClickRef.current = handleAndDispatchPointerDownOutsideEvent, document.addEventListener("click", handleClickRef.current, {
            once: !0
          })) : handleAndDispatchPointerDownOutsideEvent();
        }
        isPointerInsideReactTreeRef.current = !1;
      },
      timerId = setTimeout(() => {
        document.addEventListener("pointerdown", handlePointerDown);
      }, 0);
    return () => {
      window.clearTimeout(timerId), document.removeEventListener("pointerdown", handlePointerDown), document.removeEventListener("click", handleClickRef.current);
    };
  }, [handlePointerDownOutside]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => {
      isPointerInsideReactTreeRef.current = !0;
    }
  };
}
function useFocusOutside(onFocusOutside) {
  const handleFocusOutside = useEvent(onFocusOutside),
    isFocusInsideReactTreeRef = React.useRef(!1);
  return React.useEffect(() => {
    const handleFocus = event => {
      event.target && !isFocusInsideReactTreeRef.current && handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, {
        originalEvent: event
      }, {
        discrete: !1
      });
    };
    return document.addEventListener("focusin", handleFocus), () => document.removeEventListener("focusin", handleFocus);
  }, [handleFocusOutside]), {
    onFocusCapture: () => {
      isFocusInsideReactTreeRef.current = !0;
    },
    onBlurCapture: () => {
      isFocusInsideReactTreeRef.current = !1;
    }
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, {
  discrete
}) {
  const target = detail.originalEvent.target,
    event = new CustomEvent(name, {
      bubbles: !1,
      cancelable: !0,
      detail
    });
  handler && target.addEventListener(name, handler, {
    once: !0
  }), discrete ? dispatchDiscreteCustomEvent(target, event) : target.dispatchEvent(event);
}
export { Dismissable, DismissableBranch, debugDismissableLayers, dispatchDiscreteCustomEvent, getDismissableLayerCount, useDismissableLayersAbove, useHasDismissableLayers, useIsInsideDismissable };
//# sourceMappingURL=Dismissable.mjs.map
