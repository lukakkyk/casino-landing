import { flushSync } from "react-dom";
import { useComposedRefs } from "@tamagui/compose-refs";
import { isWeb, useIsomorphicLayoutEffect } from "@tamagui/constants";
import { LayoutMeasurementController, View as TamaguiView, createStyledContext, getVariableValue, registerLayoutNode, styled } from "@tamagui/core";
import { FloatingOverrideContext } from "@tamagui/floating";
import { arrow, flip, getOverflowAncestors, offset as offsetFn, platform, shift, size as sizeMiddleware, useFloating } from "@tamagui/floating";
import { getSpace } from "@tamagui/get-token";
import { YStack } from "@tamagui/stacks";
import { startTransition } from "@tamagui/start-transition";
import * as React from "react";
import { jsx } from "react/jsx-runtime";
const PopperContextFast = createStyledContext(
  // since we always provide this we can avoid setting here
  {}, "Popper__"),
  PopperPositionContext = createStyledContext,
  {
    useStyledContext: usePopperContext,
    Provider: PopperProviderFast
  } = PopperContextFast,
  PopperContextSlow = createStyledContext(
  // since we always provide this we can avoid setting here
  {}, "PopperSlow__"),
  {
    useStyledContext: usePopperContextSlow,
    Provider: PopperProviderSlow
  } = PopperContextSlow,
  PopperProvider = ({
    scope,
    children,
    ...context
  }) => {
    const fns = React.useRef(context);
    fns.current = context;
    const [slowContext] = React.useState(() => ({
      refs: context.refs,
      triggerElements: context.triggerElements,
      update(...a) {
        fns.current.update(...a);
      },
      getReferenceProps(p) {
        return fns.current.getReferenceProps?.(p);
      },
      onHoverReference(e) {
        fns.current.onHoverReference?.(e);
      },
      onLeaveReference() {
        fns.current.onLeaveReference?.();
      }
    }));
    return /* @__PURE__ */jsx(PopperProviderFast, {
      scope,
      ...context,
      children: /* @__PURE__ */jsx(PopperProviderSlow, {
        scope,
        ...slowContext,
        children
      })
    });
  },
  checkFloating = void 0,
  setupOptions = {};
function setupPopper(options) {
  Object.assign(setupOptions, options);
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
const transformOriginMiddleware = options => ({
  name: "transformOrigin",
  options,
  fn(data) {
    const {
        placement,
        rects,
        middlewareData
      } = data,
      isArrowHidden = middlewareData.arrow?.centerOffset !== 0,
      arrowWidth = isArrowHidden ? 0 : options.arrowWidth,
      arrowHeight = isArrowHidden ? 0 : options.arrowHeight,
      [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement),
      noArrowAlign = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[placedAlign],
      arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2,
      arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
    let x = "",
      y = "";
    return placedSide === "bottom" ? (x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`, y = `${-arrowHeight}px`) : placedSide === "top" ? (x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`, y = `${rects.floating.height + arrowHeight}px`) : placedSide === "right" ? (x = `${-arrowHeight}px`, y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`) : placedSide === "left" && (x = `${rects.floating.width + arrowHeight}px`, y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`), {
      data: {
        x,
        y
      }
    };
  }
});
function tamaguiAutoUpdate(reference, floating, update) {
  update();
  let rafId = requestAnimationFrame(() => {
    update(), rafId = 0;
  });
  const cleanups = [() => {
    rafId && cancelAnimationFrame(rafId);
  }];
  reference instanceof HTMLElement && cleanups.push(registerLayoutNode(reference, update));
  const ancestors = [...(reference instanceof Element ? getOverflowAncestors(reference) : []), ...getOverflowAncestors(floating)],
    uniqueAncestors = [...new Set(ancestors)];
  for (const ancestor of uniqueAncestors) ancestor.addEventListener("scroll", update, {
    passive: !0
  });
  return window.addEventListener("resize", update), cleanups.push(() => {
    for (const ancestor of uniqueAncestors) ancestor.removeEventListener("scroll", update);
    window.removeEventListener("resize", update);
  }), () => cleanups.forEach(fn => fn());
}
function Popper(props) {
  const {
      children,
      size,
      strategy = "absolute",
      placement = "bottom",
      stayInFrame,
      allowFlip,
      offset,
      disableRTL,
      resize,
      passThrough,
      open,
      scope
    } = props,
    [arrowEl, setArrow] = React.useState(null),
    [arrowSize, setArrowSize] = React.useState(0),
    offsetOptions = offset ?? arrowSize,
    floatingStyle = React.useRef({}),
    isOpen = passThrough ? !1 : open ?? !0,
    middlewareRef = React.useRef([]);
  isOpen && (middlewareRef.current = [
  // order matters: offset first, then flip, then shift, then arrow
  typeof offsetOptions < "u" ? offsetFn(offsetOptions) : null, allowFlip ? flip(typeof allowFlip == "boolean" ? {} : allowFlip) : null,
  // NOTE: shift's axis terminology is reversed vs flip/offset:
  // for top/bottom placements: mainAxis = horizontal, crossAxis = vertical
  // for left/right placements: mainAxis = vertical, crossAxis = horizontal
  // default to horizontal shift only (mainAxis: true, crossAxis: false)
  stayInFrame ? shift({
    padding: 10,
    mainAxis: !0,
    crossAxis: !1,
    ...(typeof stayInFrame == "object" ? stayInFrame : null)
  }) : null, arrowEl ? arrow({
    element: arrowEl
  }) : null, checkFloating, resize ? sizeMiddleware({
    padding: typeof stayInFrame == "object" ? stayInFrame.padding : 10,
    apply({
      availableHeight,
      availableWidth
    }) {
      if (passThrough) return;
      Object.assign(floatingStyle.current, {
        maxHeight: `${availableHeight}px`,
        maxWidth: `${availableWidth}px`
      });
      const floatingChild = floating.refs.floating.current?.firstChild;
      floatingChild && floatingChild instanceof HTMLElement && Object.assign(floatingChild.style, floatingStyle.current);
    },
    ...(typeof resize == "object" && resize)
  }) : null, sizeMiddleware({
    apply({
      elements,
      rects,
      availableWidth,
      availableHeight
    }) {
      const {
          width: anchorWidth,
          height: anchorHeight
        } = rects.reference,
        contentStyle = elements.floating.style;
      contentStyle.setProperty("--tamagui-popper-available-width", `${availableWidth}px`), contentStyle.setProperty("--tamagui-popper-available-height", `${availableHeight}px`), contentStyle.setProperty("--tamagui-popper-anchor-width", `${anchorWidth}px`), contentStyle.setProperty("--tamagui-popper-anchor-height", `${anchorHeight}px`);
    }
  }), transformOriginMiddleware({
    arrowHeight: arrowSize,
    arrowWidth: arrowSize
  })].filter(Boolean));
  let floating = useFloating({
    open: isOpen,
    strategy,
    placement,
    sameScrollView: !1,
    // this only takes effect on native
    whileElementsMounted: isOpen ? tamaguiAutoUpdate : void 0,
    platform: disableRTL ?? setupOptions.disableRTL ? {
      ...platform,
      isRTL(element) {
        return !1;
      }
    } : platform,
    middleware: middlewareRef.current
  });
  floating = React.useMemo(() => {
    const og = floating.getFloatingProps;
    return resize && og && (floating.getFloatingProps = props2 => og({
      ...props2,
      style: {
        ...props2.style,
        ...floatingStyle.current
      }
    })), floating;
  }, [floating, resize ? JSON.stringify(resize) : null]);
  const {
      middlewareData
    } = floating,
    popperContext = React.useMemo(() => ({
      size,
      arrowRef: setArrow,
      arrowStyle: middlewareData.arrow,
      onArrowSize: setArrowSize,
      hasFloating: middlewareData.checkFloating?.hasFloating,
      transformOrigin: middlewareData.transformOrigin,
      open: !!open,
      ...floating
    }), [open, size, floating, JSON.stringify(middlewareData.arrow || null), JSON.stringify(middlewareData.transformOrigin || null)]);
  return /* @__PURE__ */jsx(PopperProvider, {
    scope,
    ...popperContext,
    children: /* @__PURE__ */jsx(FloatingOverrideContext.Provider, {
      value: null,
      children
    })
  });
}
const PopperAnchor = YStack.styleable(function (props, forwardedRef) {
    const {
        virtualRef,
        scope,
        ...rest
      } = props,
      context = usePopperContextSlow(scope),
      {
        getReferenceProps,
        refs,
        update
      } = context,
      ref = React.useRef(null),
      triggerId = React.useId();
    React.useEffect(() => {
      if (!scope || !context.triggerElements || !ref.current || !(ref.current instanceof Element)) return;
      const el = ref.current;
      return context.triggerElements.add(triggerId, el), () => {
        context.triggerElements?.delete(triggerId);
      };
    }, [scope, triggerId, context.triggerElements]), React.useEffect(() => {
      virtualRef && (refs.setReference(virtualRef.current), update());
    }, [virtualRef]);
    const refProps = getReferenceProps?.({
        ...rest,
        ref
      }) || null,
      safeSetReference = React.useCallback(node => {
        startTransition(() => {
          refs.setReference(node);
        });
      },
      // it was refs.setRefernce but its stable and refs is undefined on server
      [refs]),
      shouldHandleInHover = isWeb && scope,
      composedRefs = useComposedRefs(forwardedRef, ref,
      // web handles this onMouseEnter below so it can support multiple targets + hovering
      shouldHandleInHover ? void 0 : safeSetReference);
    return /* @__PURE__ */jsx(TamaguiView, {
      ...rest,
      ...refProps,
      ref: composedRefs,
      ...(shouldHandleInHover && {
        // scoped poppers with multiple triggers: set the reference on
        // mouseEnter so floating-ui positions relative to the hovered
        // trigger, not the last one rendered.
        //
        // flushSync is critical here: without it, setReference batches
        // with React's async state updates and the arrow/content position
        // computes against the OLD reference element. this causes the
        // arrow to flash at x=0 (top-left) during trigger switches.
        // flushSync forces synchronous commit so update() below reads
        // the correct reference element immediately.
        onMouseEnter: e => {
          const el = e.currentTarget ?? ref.current;
          if (el instanceof HTMLElement) {
            if (flushSync(() => refs.setReference(el)), update(), !refProps) return;
            refProps.onPointerEnter?.(e), context.onHoverReference?.(e.nativeEvent);
          }
        },
        onMouseLeave: e => {
          context.onLeaveReference?.(), refProps?.onMouseLeave?.(e);
        }
      })
    });
  }),
  PopperContentFrame = styled(YStack, {
    name: "PopperContent",
    variants: {
      unstyled: {
        true: {}
      },
      size: {
        "...size": (val, {
          tokens
        }) => ({
          padding: tokens.space[val],
          borderRadius: tokens.radius[val]
        })
      }
    }
  }),
  PopperContent = React.forwardRef(function (props, forwardedRef) {
    const {
        scope,
        animatePosition,
        enableAnimationForPositionChange,
        children,
        passThrough,
        unstyled,
        ...rest
      } = props,
      animatePos = animatePosition ?? enableAnimationForPositionChange,
      context = usePopperContext(scope),
      {
        strategy,
        placement,
        refs,
        x,
        y,
        getFloatingProps,
        size,
        isPositioned,
        transformOrigin,
        update
      } = context,
      updateRef = React.useRef(update);
    updateRef.current = update;
    const lastNodeRef = React.useRef(null),
      safeSetFloating = React.useCallback(node => {
        const isNewNode = node !== lastNodeRef.current;
        node && (lastNodeRef.current = node, refs.setFloating(node), isNewNode || updateRef.current?.());
      }, [refs.setFloating]);
    React.useEffect(() => () => {
      const ourNode = lastNodeRef.current;
      ourNode && refs.floating.current === ourNode && refs.setFloating(null), lastNodeRef.current = null;
    }, []);
    const contentRefs = useComposedRefs(safeSetFloating, forwardedRef),
      [needsMeasure, setNeedsMeasure] = React.useState(animatePos);
    useIsomorphicLayoutEffect(() => {
      needsMeasure && x && y && setNeedsMeasure(!1);
    }, [needsMeasure, animatePos, x, y]);
    const hasBeenPositioned = React.useRef(!1),
      lastGoodPosition = React.useRef({
        x: 0,
        y: 0
      });
    (x !== 0 || y !== 0) && (lastGoodPosition.current = {
      x,
      y
    }, isPositioned && (hasBeenPositioned.current = !0));
    const brieflyZero = hasBeenPositioned.current && x === 0 && y === 0,
      effectiveX = brieflyZero ? lastGoodPosition.current.x : x,
      effectiveY = brieflyZero ? lastGoodPosition.current.y : y,
      hide = !hasBeenPositioned.current && effectiveX === 0 && effectiveY === 0,
      disableAnimationProp =
      // if they want to animate also when re-positioning allow it
      animatePos === "even-when-repositioning" ? needsMeasure : !hasBeenPositioned.current && !isPositioned || needsMeasure,
      [disableAnimation, setDisableAnimation] = React.useState(disableAnimationProp);
    React.useEffect(() => {
      setDisableAnimation(disableAnimationProp);
    }, [disableAnimationProp]);
    const frameProps = {
        ref: contentRefs,
        ...(hide ? {} : {
          x: effectiveX || 0,
          y: effectiveY || 0
        }),
        top: 0,
        left: 0,
        position: strategy,
        opacity: hide ? 0 : 1,
        ...(animatePos && {
          transition: rest.transition,
          // animateOnly: [] turns off transitions while keeping styles applied,
          // letting the element move to its position silently before animations start
          animateOnly: disableAnimation ? [] : rest.animateOnly,
          animatePresence: !1
        })
      },
      {
        style,
        ...floatingProps
      } = getFloatingProps ? getFloatingProps(frameProps) : frameProps,
      transformOriginStyle = isWeb && transformOrigin ? {
        transformOrigin: `${transformOrigin.x} ${transformOrigin.y}`
      } : void 0;
    return /* @__PURE__ */jsx(LayoutMeasurementController, {
      disable: !context.open,
      children: /* @__PURE__ */jsx(TamaguiView, {
        passThrough,
        ref: contentRefs,
        direction: rest.direction,
        ...(passThrough ? null : floatingProps),
        ...(!passThrough && animatePos && {
          "data-popper-animate-position": "true"
        }),
        children: /* @__PURE__ */jsx(PopperContentFrame, {
          passThrough,
          unstyled,
          ...(!passThrough && {
            "data-placement": placement,
            "data-strategy": strategy,
            size,
            ...style,
            ...transformOriginStyle,
            ...rest
          }),
          children
        }, "popper-content-frame")
      })
    });
  }),
  PopperArrowFrame = styled(YStack, {
    name: "PopperArrow",
    variants: {
      unstyled: {
        false: {
          borderColor: "$borderColor",
          backgroundColor: "$background",
          position: "relative"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  PopperArrowOuterFrame = styled(YStack, {
    name: "PopperArrowOuter",
    variants: {
      unstyled: {
        false: {
          position: "absolute",
          zIndex: 1e6,
          pointerEvents: "none",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center"
        }
      }
    },
    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1"
    }
  }),
  opposites = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  },
  PopperArrow = React.forwardRef(function (propsIn, forwardedRef) {
    const {
        scope,
        animatePosition,
        transition,
        ...rest
      } = propsIn,
      {
        offset,
        size: sizeProp,
        borderWidth = 0,
        ...arrowProps
      } = rest,
      context = usePopperContext(scope),
      sizeVal = typeof sizeProp == "number" ? sizeProp : getVariableValue(getSpace(sizeProp ?? context.size, {
        shift: -2,
        bounds: [2]
      })),
      size = Math.max(0, +sizeVal),
      {
        placement
      } = context,
      refs = useComposedRefs(context.arrowRef, forwardedRef),
      x = context.arrowStyle?.x || 0,
      y = context.arrowStyle?.y || 0,
      arrowPositioned = context.arrowStyle != null,
      primaryPlacement = placement ? placement.split("-")[0] : "top",
      arrowStyle = {
        x,
        y,
        width: size,
        height: size
      },
      innerArrowStyle = {},
      isVertical = primaryPlacement === "bottom" || primaryPlacement === "top";
    if (primaryPlacement) {
      arrowStyle[isVertical ? "width" : "height"] = size * 2;
      const oppSide = opposites[primaryPlacement];
      oppSide && (arrowStyle[oppSide] = -size, innerArrowStyle[oppSide] = size / 2), (oppSide === "top" || oppSide === "bottom") && (arrowStyle.left = 0), (oppSide === "left" || oppSide === "right") && (arrowStyle.top = 0), useIsomorphicLayoutEffect(() => {
        context.onArrowSize?.(size);
      }, [size, context.onArrowSize]);
    }
    return /* @__PURE__ */jsx(PopperArrowOuterFrame, {
      ref: refs,
      ...arrowStyle,
      ...(!arrowPositioned && {
        opacity: 0
      }),
      ...(animatePosition && {
        transition,
        animateOnly: ["transform"],
        animatePresence: !1
      }),
      children: /* @__PURE__ */jsx(PopperArrowFrame, {
        width: size,
        height: size,
        ...arrowProps,
        ...innerArrowStyle,
        rotate: "45deg",
        ...(primaryPlacement === "bottom" && {
          borderLeftWidth: borderWidth,
          borderTopWidth: borderWidth
        }),
        ...(primaryPlacement === "top" && {
          borderBottomWidth: borderWidth,
          borderRightWidth: borderWidth
        }),
        ...(primaryPlacement === "right" && {
          borderLeftWidth: borderWidth,
          borderBottomWidth: borderWidth
        }),
        ...(primaryPlacement === "left" && {
          borderTopWidth: borderWidth,
          borderRightWidth: borderWidth
        })
      })
    });
  });
export { Popper, PopperAnchor, PopperArrow, PopperArrowFrame, PopperContent, PopperContentFrame, PopperContextFast, PopperContextSlow, PopperPositionContext, PopperProvider, PopperProviderFast, PopperProviderSlow, setupPopper, usePopperContext, usePopperContextSlow };
//# sourceMappingURL=Popper.mjs.map
