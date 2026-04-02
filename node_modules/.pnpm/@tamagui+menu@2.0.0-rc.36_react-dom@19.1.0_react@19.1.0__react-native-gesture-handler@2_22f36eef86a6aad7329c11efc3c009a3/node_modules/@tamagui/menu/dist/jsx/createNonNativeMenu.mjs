import { createBaseMenu } from "@tamagui/create-menu";
import { usePopperContextSlow } from "@tamagui/popper";
import { ScrollView } from "@tamagui/scroll-view";
import { useControllableState } from "@tamagui/use-controllable-state";
import { composeEventHandlers, composeRefs, createStyledContext, isAndroid, isWeb, Slot, styled, useEvent, useIsTouchDevice, View, withStaticProperties } from "@tamagui/web";
import * as React from "react";
import { useId } from "react";
import { jsx } from "react/jsx-runtime";
const DROPDOWN_MENU_CONTEXT = "MenuContext";
function useMenuTriggerSetup(open) {
  const triggerStateSettersRef = React.useRef(/* @__PURE__ */new Map()),
    activeTriggerIdRef = React.useRef(null),
    setActiveTrigger = useEvent(id => {
      const prevId = activeTriggerIdRef.current;
      prevId !== id && (prevId && triggerStateSettersRef.current.get(prevId)?.(!1), activeTriggerIdRef.current = id, id && open && triggerStateSettersRef.current.get(id)?.(!0));
    }),
    registerTrigger = useEvent((id, setOpenState) => {
      triggerStateSettersRef.current.set(id, setOpenState), setOpenState(activeTriggerIdRef.current === id && open);
    }),
    unregisterTrigger = useEvent(id => {
      triggerStateSettersRef.current.delete(id), activeTriggerIdRef.current === id && (activeTriggerIdRef.current = null);
    });
  return React.useEffect(() => {
    if (!open) {
      setActiveTrigger(null);
      return;
    }
    const activeId = activeTriggerIdRef.current;
    activeId && triggerStateSettersRef.current.get(activeId)?.(!0);
  }, [open, setActiveTrigger]), {
    setActiveTrigger,
    registerTrigger,
    unregisterTrigger
  };
}
function createNonNativeMenu(params) {
  const {
      Menu
    } = createBaseMenu(params),
    DROPDOWN_MENU_NAME = "Menu",
    {
      Provider: MenuProvider,
      useStyledContext: useMenuContext
    } = createStyledContext(),
    MenuComp = props => {
      const {
          scope,
          children,
          dir,
          open: openProp,
          defaultOpen,
          onOpenChange,
          modal = !0,
          ...rest
        } = props,
        triggerRef = React.useRef(null),
        [open = !1, setOpen] = useControllableState({
          prop: openProp,
          defaultProp: defaultOpen,
          onChange: onOpenChange
        }),
        openRef = React.useRef(open);
      openRef.current = open;
      const {
        setActiveTrigger,
        registerTrigger,
        unregisterTrigger
      } = useMenuTriggerSetup(open);
      return /* @__PURE__ */jsx(MenuProvider, {
        scope,
        triggerId: useId(),
        triggerRef,
        contentId: useId(),
        openRef,
        onOpenChange: React.useCallback(nextOpen => setOpen(nextOpen), [setOpen]),
        onOpenToggle: React.useCallback(() => setOpen(prevOpen => !prevOpen), [setOpen]),
        modal,
        setActiveTrigger,
        registerTrigger,
        unregisterTrigger,
        children: /* @__PURE__ */jsx(Menu, {
          scope: scope || DROPDOWN_MENU_CONTEXT,
          open,
          onOpenChange: setOpen,
          dir,
          modal,
          ...rest,
          children
        })
      });
    };
  MenuComp.displayName = DROPDOWN_MENU_NAME;
  const TRIGGER_NAME = "MenuTrigger",
    MenuTriggerFrame = Menu.Anchor,
    MenuTrigger = View.styleable((props, forwardedRef) => {
      const {
          scope,
          asChild,
          children,
          disabled = !1,
          onKeydown,
          ...triggerProps
        } = props,
        context = useMenuContext(scope),
        popperCtx = usePopperContextSlow(scope || DROPDOWN_MENU_CONTEXT),
        Comp = asChild ? Slot : View,
        isTouchDevice = useIsTouchDevice(),
        triggerElRef = React.useRef(null),
        triggerId = React.useId(),
        [triggerOpen, setTriggerOpen] = React.useState(!1),
        {
          registerTrigger,
          unregisterTrigger
        } = context;
      React.useEffect(() => (registerTrigger(triggerId, setTriggerOpen), () => unregisterTrigger(triggerId)), [registerTrigger, unregisterTrigger, triggerId]);
      const activateSelf = React.useCallback(() => {
          context.setActiveTrigger(triggerId);
          const el = triggerElRef.current;
          el && (context.triggerRef.current = el, el instanceof HTMLElement && (popperCtx.refs?.setReference(el), requestAnimationFrame(() => popperCtx.update?.())));
        }, [context, triggerId, popperCtx]),
        pressEvent = isWeb ? isTouchDevice ? "onClick" : "onPointerDown" : "onPress";
      return /* @__PURE__ */jsx(MenuTriggerFrame, {
        asChild: !0,
        componentName: TRIGGER_NAME,
        scope: scope || DROPDOWN_MENU_CONTEXT,
        children: /* @__PURE__ */jsx(Comp, {
          role: "button",
          id: context.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": triggerOpen,
          "aria-controls": triggerOpen ? context.contentId : void 0,
          "data-state": triggerOpen ? "open" : "closed",
          "data-disabled": disabled ? "" : void 0,
          "aria-disabled": disabled || void 0,
          ref: composeRefs(forwardedRef, context.triggerRef, triggerElRef),
          [pressEvent]: composeEventHandlers(
          //@ts-ignore
          props[pressEvent], event => {
            if (!disabled) {
              if (isWeb && event instanceof PointerEvent && event.button !== 0 && event.ctrlKey === !0) return;
              context.openRef.current ? context.setActiveTrigger(null) : activateSelf(), context.onOpenToggle(), context.openRef.current || event.preventDefault();
            }
          }),
          ...(isWeb && {
            onKeyDown: composeEventHandlers(onKeydown, event => {
              disabled || (["Enter", " "].includes(event.key) && (context.openRef.current ? context.setActiveTrigger(null) : activateSelf(), context.onOpenToggle()), event.key === "ArrowDown" && (activateSelf(), context.onOpenChange(!0)), ["Enter", " ", "ArrowDown"].includes(event.key) && event.preventDefault());
            })
          }),
          ...triggerProps,
          children
        })
      });
    });
  MenuTrigger.displayName = TRIGGER_NAME;
  const PORTAL_NAME = "MenuPortal",
    MenuPortal = props => {
      const {
          scope,
          children,
          ...portalProps
        } = props,
        context = isAndroid ? useMenuContext(scope) : null,
        content = isAndroid ? /* @__PURE__ */jsx(MenuProvider, {
          ...context,
          children
        }) : children;
      return /* @__PURE__ */jsx(Menu.Portal, {
        scope: scope || DROPDOWN_MENU_CONTEXT,
        ...portalProps,
        children: content
      });
    };
  MenuPortal.displayName = PORTAL_NAME;
  const CONTENT_NAME = "MenuContent",
    MenuContent = React.forwardRef((props, forwardedRef) => {
      const {
          scope,
          ...contentProps
        } = props,
        context = useMenuContext(scope),
        hasInteractedOutsideRef = React.useRef(!1);
      return /* @__PURE__ */jsx(Menu.Content, {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        scope: scope || DROPDOWN_MENU_CONTEXT,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, event => {
          hasInteractedOutsideRef.current || requestAnimationFrame(() => {
            const activeEl = document.activeElement;
            (!activeEl || activeEl === document.body) && context.triggerRef.current?.focus();
          }), hasInteractedOutsideRef.current = !1, event.preventDefault();
        }),
        onInteractOutside: composeEventHandlers(props.onInteractOutside, event => {
          const originalEvent = event.detail.originalEvent,
            ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === !0,
            isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          (!context.modal || isRightClick) && (hasInteractedOutsideRef.current = !0);
        }),
        style: isWeb ? {
          ...props.style,
          "--tamagui-menu-content-transform-origin": "var(--tamagui-popper-transform-origin)",
          "--tamagui-menu-content-available-width": "var(--tamagui-popper-available-width)",
          "--tamagui-menu-content-available-height": "var(--tamagui-popper-available-height)",
          "--tamagui-menu-trigger-width": "var(--tamagui-popper-anchor-width)",
          "--tamagui-menu-trigger-height": "var(--tamagui-popper-anchor-height)"
        } : props.style
      });
    });
  MenuContent.displayName = CONTENT_NAME;
  const DROPDOWN_MENU_SUB_NAME = "MenuSub",
    MenuSub = props => {
      const {
          scope,
          children,
          open: openProp,
          onOpenChange,
          defaultOpen,
          ...rest
        } = props,
        [open = !1, setOpen] = useControllableState({
          prop: openProp,
          defaultProp: defaultOpen,
          onChange: onOpenChange
        });
      return /* @__PURE__ */jsx(Menu.Sub, {
        scope: scope || DROPDOWN_MENU_CONTEXT,
        open,
        onOpenChange: setOpen,
        ...rest,
        children
      });
    };
  MenuSub.displayName = DROPDOWN_MENU_SUB_NAME;
  const SUB_CONTENT_NAME = "MenuSubContent",
    MenuSubContent = React.forwardRef((props, forwardedRef) => {
      const {
        scope,
        ...subContentProps
      } = props;
      return /* @__PURE__ */jsx(Menu.SubContent, {
        scope: scope || DROPDOWN_MENU_CONTEXT,
        ...subContentProps,
        ref: forwardedRef,
        style: isWeb ? {
          ...props.style,
          "--tamagui-menu-content-transform-origin": "var(--tamagui-popper-transform-origin)",
          "--tamagui-menu-content-available-width": "var(--tamagui-popper-available-width)",
          "--tamagui-menu-content-available-height": "var(--tamagui-popper-available-height)",
          "--tamagui-menu-trigger-width": "var(--tamagui-popper-anchor-width)",
          "--tamagui-menu-trigger-height": "var(--tamagui-popper-anchor-height)"
        } : null
      });
    });
  MenuSubContent.displayName = SUB_CONTENT_NAME;
  const MenuScrollView = styled(ScrollView, {
      flexShrink: 1,
      alignSelf: "stretch",
      showsHorizontalScrollIndicator: !1,
      showsVerticalScrollIndicator: !1,
      "$platform-web": {
        maxHeight: "var(--tamagui-menu-content-available-height)"
      }
    }),
    Group = Menu.Group,
    Label = Menu.Label,
    Item = Menu.Item,
    CheckboxItem = Menu.CheckboxItem,
    RadioGroup = Menu.RadioGroup,
    RadioItem = Menu.RadioItem,
    ItemIndicator = Menu.ItemIndicator,
    Separator = Menu.Separator,
    Arrow = Menu.Arrow,
    SubTrigger = Menu.SubTrigger,
    ItemTitle = Menu.ItemTitle,
    ItemSubtitle = Menu.ItemSubtitle,
    ItemImage = Menu.ItemImage,
    ItemIcon = Menu.ItemIcon;
  return withStaticProperties(MenuComp, {
    Root: MenuComp,
    Trigger: MenuTrigger,
    Portal: MenuPortal,
    Content: MenuContent,
    Group,
    Label,
    Item,
    CheckboxItem,
    RadioGroup,
    RadioItem,
    ItemIndicator,
    Separator,
    Arrow,
    Sub: MenuSub,
    SubTrigger,
    SubContent: MenuSubContent,
    ItemTitle,
    ItemSubtitle,
    ItemImage,
    ItemIcon,
    ScrollView: MenuScrollView
  });
}
export { DROPDOWN_MENU_CONTEXT, createNonNativeMenu };
//# sourceMappingURL=createNonNativeMenu.mjs.map
