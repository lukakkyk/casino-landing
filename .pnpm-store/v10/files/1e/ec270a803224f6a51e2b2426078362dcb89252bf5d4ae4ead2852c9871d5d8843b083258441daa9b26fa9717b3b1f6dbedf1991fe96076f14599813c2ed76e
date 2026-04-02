import { FloatingDelayGroup, useDelayGroupContext } from "@tamagui/floating";
import { useEvent } from "@tamagui/core";
import { FloatingOverrideContext } from "@tamagui/floating";
import { getSize } from "@tamagui/get-token";
import { withStaticProperties } from "@tamagui/helpers";
import { PopoverAnchor, PopoverArrow, PopoverContent, PopoverContextProvider, PopoverTrigger, useFloatingContext } from "@tamagui/popover";
import { Popper, PopperContentFrame } from "@tamagui/popper";
import { useControllableState } from "@tamagui/use-controllable-state";
import * as React from "react";
import { jsx } from "react/jsx-runtime";
const TOOLTIP_SCOPE = "",
  ALWAYS_DISABLE_TOOLTIP = {
    focus: !0,
    "remove-scroll": !0
    // it's nice to hit escape to hide a tooltip
    // dismiss: true
  },
  TooltipContent = PopperContentFrame.styleable((props, ref) => {
    const preventAnimation = React.useContext(PreventTooltipAnimationContext),
      zIndexFromContext = React.useContext(TooltipZIndexContext);
    return /* @__PURE__ */jsx(PopoverContent, {
      scope: props.scope || TOOLTIP_SCOPE,
      alwaysDisable: ALWAYS_DISABLE_TOOLTIP,
      ...(!props.unstyled && {
        backgroundColor: "$background",
        alignItems: "center",
        pointerEvents: "none",
        size: "$true"
      }),
      ref,
      ...(zIndexFromContext !== void 0 && {
        zIndex: zIndexFromContext
      }),
      ...props,
      ...(preventAnimation && {
        transition: null
      })
    });
  }, {
    staticConfig: {
      componentName: "Tooltip"
    }
  }),
  TooltipArrow = React.forwardRef((props, ref) => /* @__PURE__ */jsx(PopoverArrow, {
    scope: props.scope || TOOLTIP_SCOPE,
    componentName: "Tooltip",
    ref,
    ...props
  })),
  PreventTooltipAnimationContext = React.createContext(!1),
  TooltipZIndexContext = React.createContext(void 0),
  TooltipGroup = ({
    children,
    delay,
    preventAnimation = !1,
    timeoutMs
  }) => /* @__PURE__ */jsx(PreventTooltipAnimationContext.Provider, {
    value: preventAnimation,
    children: /* @__PURE__ */jsx(FloatingDelayGroup, {
      timeoutMs,
      delay: React.useMemo(() => delay, [JSON.stringify(delay)]),
      children
    })
  }),
  setOpens = /* @__PURE__ */new Set(),
  closeOpenTooltips = () => {
    setOpens.forEach(x => x(!1));
  },
  TooltipComponent = React.forwardRef(function (props, ref) {
    "use no memo";

    const {
        children,
        delay: delayProp,
        restMs: restMsProp,
        onOpenChange: onOpenChangeProp,
        focus,
        open: openProp,
        disableAutoCloseOnScroll,
        zIndex,
        scope = TOOLTIP_SCOPE,
        ...restProps
      } = props,
      triggerRef = React.useRef(null),
      [hasCustomAnchor, setHasCustomAnchor] = React.useState(!1),
      {
        delay: delayGroup,
        setCurrentId
      } = useDelayGroupContext(),
      delay = delayProp !== void 0 ? delayProp : delayGroup ?? 400,
      restMs = restMsProp ?? (typeof delay == "number" ? delay : 0),
      [open, setOpen] = useControllableState({
        prop: openProp,
        defaultProp: !1,
        onChange: onOpenChangeProp
      }),
      id = props.groupId,
      onOpenChange = useEvent(open2 => {
        open2 && setCurrentId(id), setOpen(open2);
      });
    React.useEffect(() => {
      if (!open || disableAutoCloseOnScroll || typeof document > "u") return;
      const closeIt = () => {
        setOpen(!1);
      };
      return setOpens.add(setOpen), document.documentElement.addEventListener("scroll", closeIt), () => {
        setOpens.delete(setOpen), document.documentElement.removeEventListener("scroll", closeIt);
      };
    }, [open, disableAutoCloseOnScroll]);
    const floatingContext = useFloatingContext({
        open,
        setOpen: onOpenChange,
        disable: !1,
        disableFocus: !1,
        hoverable: !0,
        role: "tooltip",
        focus,
        groupId: id,
        delay,
        restMs
      }),
      onCustomAnchorAdd = React.useCallback(() => setHasCustomAnchor(!0), []),
      onCustomAnchorRemove = React.useCallback(() => setHasCustomAnchor(!1), []),
      contentId = React.useId(),
      smallerSize = props.unstyled ? null : getSize("$true", {
        shift: -2,
        bounds: [0]
      }),
      content = /* @__PURE__ */jsx(FloatingOverrideContext.Provider, {
        value: floatingContext,
        children: /* @__PURE__ */jsx(Popper, {
          scope,
          size: smallerSize?.key,
          allowFlip: !0,
          stayInFrame: !0,
          open,
          ...restProps,
          children: /* @__PURE__ */jsx(PopoverContextProvider, {
            scope,
            contentId,
            triggerRef,
            open,
            onOpenChange: setOpen,
            onOpenToggle: voidFn,
            hasCustomAnchor,
            onCustomAnchorAdd,
            onCustomAnchorRemove,
            children
          })
        })
      });
    return zIndex !== void 0 ? /* @__PURE__ */jsx(TooltipZIndexContext.Provider, {
      value: zIndex,
      children: content
    }) : content;
  }),
  TooltipTrigger = React.forwardRef(function (props, ref) {
    const {
      scope,
      ...rest
    } = props;
    return /* @__PURE__ */jsx(PopoverTrigger, {
      ...rest,
      scope: scope || TOOLTIP_SCOPE,
      ref
    });
  }),
  TooltipAnchor = React.forwardRef(function (props, ref) {
    const {
      scope,
      ...rest
    } = props;
    return /* @__PURE__ */jsx(PopoverAnchor, {
      ...rest,
      scope: scope || TOOLTIP_SCOPE,
      ref
    });
  }),
  Tooltip2 = withStaticProperties(TooltipComponent, {
    Anchor: TooltipAnchor,
    Arrow: TooltipArrow,
    Content: TooltipContent,
    Trigger: TooltipTrigger
  }),
  voidFn = () => {};
export { Tooltip2 as Tooltip, TooltipGroup, closeOpenTooltips };
//# sourceMappingURL=Tooltip.mjs.map
