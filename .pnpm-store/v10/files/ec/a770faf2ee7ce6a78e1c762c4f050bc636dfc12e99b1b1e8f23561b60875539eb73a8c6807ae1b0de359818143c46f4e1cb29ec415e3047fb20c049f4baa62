import { jsx as _jsx } from "react/jsx-runtime";
import { createBaseMenu } from "@tamagui/create-menu";
import { usePopperContextSlow } from "@tamagui/popper";
import { ScrollView } from "@tamagui/scroll-view";
import { useControllableState } from "@tamagui/use-controllable-state";
import { composeEventHandlers, composeRefs, createStyledContext, isAndroid, isWeb, Slot, styled, useEvent, useIsTouchDevice, View, withStaticProperties } from "@tamagui/web";
import * as React from "react";
import { useId } from "react";
function _instanceof(left, right) {
  return right != null && typeof Symbol < "u" && right[Symbol.hasInstance] ? !!right[Symbol.hasInstance](left) : left instanceof right;
}
var DROPDOWN_MENU_CONTEXT = "MenuContext";
function useMenuTriggerSetup(open) {
  var triggerStateSettersRef = React.useRef(/* @__PURE__ */new Map()),
    activeTriggerIdRef = React.useRef(null),
    setActiveTrigger = useEvent(function (id) {
      var prevId = activeTriggerIdRef.current;
      if (prevId !== id) {
        if (prevId) {
          var _triggerStateSettersRef_current_get;
          (_triggerStateSettersRef_current_get = triggerStateSettersRef.current.get(prevId)) === null || _triggerStateSettersRef_current_get === void 0 || _triggerStateSettersRef_current_get(!1);
        }
        if (activeTriggerIdRef.current = id, id && open) {
          var _triggerStateSettersRef_current_get1;
          (_triggerStateSettersRef_current_get1 = triggerStateSettersRef.current.get(id)) === null || _triggerStateSettersRef_current_get1 === void 0 || _triggerStateSettersRef_current_get1(!0);
        }
      }
    }),
    registerTrigger = useEvent(function (id, setOpenState) {
      triggerStateSettersRef.current.set(id, setOpenState), setOpenState(activeTriggerIdRef.current === id && open);
    }),
    unregisterTrigger = useEvent(function (id) {
      triggerStateSettersRef.current.delete(id), activeTriggerIdRef.current === id && (activeTriggerIdRef.current = null);
    });
  return React.useEffect(function () {
    if (!open) {
      setActiveTrigger(null);
      return;
    }
    var activeId = activeTriggerIdRef.current;
    if (activeId) {
      var _triggerStateSettersRef_current_get;
      (_triggerStateSettersRef_current_get = triggerStateSettersRef.current.get(activeId)) === null || _triggerStateSettersRef_current_get === void 0 || _triggerStateSettersRef_current_get(!0);
    }
  }, [open, setActiveTrigger]), {
    setActiveTrigger,
    registerTrigger,
    unregisterTrigger
  };
}
function createNonNativeMenu(params) {
  var {
      Menu
    } = createBaseMenu(params),
    DROPDOWN_MENU_NAME = "Menu",
    {
      Provider: MenuProvider,
      useStyledContext: useMenuContext
    } = createStyledContext(),
    MenuComp = function (props) {
      var {
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
      var {
        setActiveTrigger,
        registerTrigger,
        unregisterTrigger
      } = useMenuTriggerSetup(open);
      return /* @__PURE__ */_jsx(MenuProvider, {
        scope,
        triggerId: useId(),
        triggerRef,
        contentId: useId(),
        openRef,
        onOpenChange: React.useCallback(function (nextOpen) {
          return setOpen(nextOpen);
        }, [setOpen]),
        onOpenToggle: React.useCallback(function () {
          return setOpen(function (prevOpen) {
            return !prevOpen;
          });
        }, [setOpen]),
        modal,
        setActiveTrigger,
        registerTrigger,
        unregisterTrigger,
        children: /* @__PURE__ */_jsx(Menu, {
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
  var TRIGGER_NAME = "MenuTrigger",
    MenuTriggerFrame = Menu.Anchor,
    MenuTrigger = View.styleable(function (props, forwardedRef) {
      var {
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
      React.useEffect(function () {
        return registerTrigger(triggerId, setTriggerOpen), function () {
          return unregisterTrigger(triggerId);
        };
      }, [registerTrigger, unregisterTrigger, triggerId]);
      var activateSelf = React.useCallback(function () {
          context.setActiveTrigger(triggerId);
          var el = triggerElRef.current;
          if (el && (context.triggerRef.current = el, _instanceof(el, HTMLElement))) {
            var _popperCtx_refs;
            (_popperCtx_refs = popperCtx.refs) === null || _popperCtx_refs === void 0 || _popperCtx_refs.setReference(el), requestAnimationFrame(function () {
              var _popperCtx_update;
              return (_popperCtx_update = popperCtx.update) === null || _popperCtx_update === void 0 ? void 0 : _popperCtx_update.call(popperCtx);
            });
          }
        }, [context, triggerId, popperCtx]),
        pressEvent = isWeb ? isTouchDevice ? "onClick" : "onPointerDown" : "onPress";
      return /* @__PURE__ */_jsx(MenuTriggerFrame, {
        asChild: !0,
        componentName: TRIGGER_NAME,
        scope: scope || DROPDOWN_MENU_CONTEXT,
        children: /* @__PURE__ */_jsx(Comp, {
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
          props[pressEvent], function (event) {
            if (!disabled) {
              if (isWeb && _instanceof(event, PointerEvent) && event.button !== 0 && event.ctrlKey === !0) return;
              context.openRef.current ? context.setActiveTrigger(null) : activateSelf(), context.onOpenToggle(), context.openRef.current || event.preventDefault();
            }
          }),
          ...(isWeb && {
            onKeyDown: composeEventHandlers(onKeydown, function (event) {
              disabled || (["Enter", " "].includes(event.key) && (context.openRef.current ? context.setActiveTrigger(null) : activateSelf(), context.onOpenToggle()), event.key === "ArrowDown" && (activateSelf(), context.onOpenChange(!0)), ["Enter", " ", "ArrowDown"].includes(event.key) && event.preventDefault());
            })
          }),
          ...triggerProps,
          children
        })
      });
    });
  MenuTrigger.displayName = TRIGGER_NAME;
  var PORTAL_NAME = "MenuPortal",
    MenuPortal = function (props) {
      var {
          scope,
          children,
          ...portalProps
        } = props,
        context = isAndroid ? useMenuContext(scope) : null,
        content = isAndroid ? /* @__PURE__ */_jsx(MenuProvider, {
          ...context,
          children
        }) : children;
      return /* @__PURE__ */_jsx(Menu.Portal, {
        scope: scope || DROPDOWN_MENU_CONTEXT,
        ...portalProps,
        children: content
      });
    };
  MenuPortal.displayName = PORTAL_NAME;
  var CONTENT_NAME = "MenuContent",
    MenuContent = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
      var {
          scope,
          ...contentProps
        } = props,
        context = useMenuContext(scope),
        hasInteractedOutsideRef = React.useRef(!1);
      return /* @__PURE__ */_jsx(Menu.Content, {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        scope: scope || DROPDOWN_MENU_CONTEXT,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, function (event) {
          hasInteractedOutsideRef.current || requestAnimationFrame(function () {
            var activeEl = document.activeElement;
            if (!activeEl || activeEl === document.body) {
              var _context_triggerRef_current;
              (_context_triggerRef_current = context.triggerRef.current) === null || _context_triggerRef_current === void 0 || _context_triggerRef_current.focus();
            }
          }), hasInteractedOutsideRef.current = !1, event.preventDefault();
        }),
        onInteractOutside: composeEventHandlers(props.onInteractOutside, function (event) {
          var originalEvent = event.detail.originalEvent,
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
  var DROPDOWN_MENU_SUB_NAME = "MenuSub",
    MenuSub = function (props) {
      var {
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
      return /* @__PURE__ */_jsx(Menu.Sub, {
        scope: scope || DROPDOWN_MENU_CONTEXT,
        open,
        onOpenChange: setOpen,
        ...rest,
        children
      });
    };
  MenuSub.displayName = DROPDOWN_MENU_SUB_NAME;
  var SUB_CONTENT_NAME = "MenuSubContent",
    MenuSubContent = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
      var {
        scope,
        ...subContentProps
      } = props;
      return /* @__PURE__ */_jsx(Menu.SubContent, {
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
  var MenuScrollView = styled(ScrollView, {
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
//# sourceMappingURL=createNonNativeMenu.native.js.map
