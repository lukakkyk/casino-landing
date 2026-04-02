import { createBaseMenu } from "@tamagui/create-menu";
import { useControllableState } from "@tamagui/use-controllable-state";
import { composeEventHandlers, composeRefs, createStyledContext, isAndroid, isWeb, Slot, View, withStaticProperties } from "@tamagui/web";
import React, { useId } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
const CONTEXTMENU_CONTEXT = "ContextMenuContext";
function createNonNativeContextMenu(params) {
  const {
      Menu
    } = createBaseMenu(params),
    CONTEXT_MENU_NAME = "ContextMenu",
    {
      Provider: ContextMenuProvider,
      useStyledContext: useContextMenuContext
    } = createStyledContext(),
    ContextMenuComp = props => {
      const {
          scope,
          children,
          onOpenChange,
          dir,
          modal = !0,
          ...rest
        } = props,
        [open, setOpen] = React.useState(!1),
        triggerRef = React.useRef(null),
        handleOpenChange = React.useCallback((open2, event) => {
          onOpenChange?.(open2, event), !event?.defaultPrevented && setOpen(open2);
        }, [onOpenChange]);
      return /* @__PURE__ */jsx(ContextMenuProvider, {
        scope,
        triggerId: useId(),
        triggerRef,
        contentId: useId(),
        open,
        onOpenChange: handleOpenChange,
        modal,
        children: /* @__PURE__ */jsx(Menu, {
          scope: scope || CONTEXTMENU_CONTEXT,
          dir,
          open,
          onOpenChange: handleOpenChange,
          modal,
          ...rest,
          children
        })
      });
    };
  ContextMenuComp.displayName = CONTEXT_MENU_NAME;
  const TRIGGER_NAME = "ContextMenuTrigger",
    ContextMenuTrigger = View.styleable((props, forwardedRef) => {
      const {
          scope,
          style,
          disabled = !1,
          asChild,
          children,
          ...triggerProps
        } = props,
        context = useContextMenuContext(scope),
        pointRef = React.useRef({
          x: 0,
          y: 0
        }),
        virtualRef = React.useMemo(() => ({
          current: {
            getBoundingClientRect: () => {
              if (isWeb) {
                const scrollX = window.scrollX || document.documentElement.scrollLeft,
                  scrollY = window.scrollY || document.documentElement.scrollTop;
                return DOMRect.fromRect({
                  width: 0,
                  height: 0,
                  x: pointRef.current.x - scrollX,
                  y: pointRef.current.y - scrollY
                });
              }
              return {
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                ...pointRef.current
              };
            },
            ...(!isWeb && {
              measure: c => c(pointRef.current.x, pointRef.current.y, 0, 0),
              measureInWindow: c => c(pointRef.current.x, pointRef.current.y, 0, 0)
            })
          }
        }), [pointRef.current.x, pointRef.current.y]),
        longPressTimerRef = React.useRef(0),
        clearLongPress = React.useCallback(() => window.clearTimeout(longPressTimerRef.current), []),
        createOpenChangeEvent = () => {
          let defaultPrevented = !1;
          return {
            get defaultPrevented() {
              return defaultPrevented;
            },
            preventDefault() {
              defaultPrevented = !0;
            }
          };
        },
        handleOpen = event => {
          isWeb && (event instanceof MouseEvent || event instanceof PointerEvent) ? pointRef.current = {
            x: event.clientX,
            y: event.clientY
          } : pointRef.current = {
            x: event.nativeEvent.pageX,
            y: event.nativeEvent.pageY
          };
          const openChangeEvent = createOpenChangeEvent();
          return context.onOpenChange(!0, openChangeEvent), openChangeEvent;
        };
      React.useEffect(() => clearLongPress, [clearLongPress]), React.useEffect(() => {
        disabled && clearLongPress();
      }, [disabled, clearLongPress]);
      const Comp = asChild ? Slot : View;
      return /* @__PURE__ */jsxs(Fragment, {
        children: [/* @__PURE__ */jsx(Menu.Anchor, {
          scope: scope || CONTEXTMENU_CONTEXT,
          virtualRef
        }), /* @__PURE__ */jsx(Comp, {
          render: "span",
          componentName: TRIGGER_NAME,
          id: context.triggerId,
          "data-state": context.open ? "open" : "closed",
          "data-disabled": disabled ? "" : void 0,
          ...triggerProps,
          ref: composeRefs(forwardedRef, context.triggerRef),
          style: isWeb ? {
            WebkitTouchCallout: "none",
            ...style
          } : null,
          ...(isWeb && {
            onContextMenu: disabled ? props.onContextMenu : composeEventHandlers(props.onContextMenu, event => {
              clearLongPress(), handleOpen(event).defaultPrevented || event.preventDefault();
            }),
            onPointerDown: disabled ? props.onPointerDown : composeEventHandlers(props.onPointerDown, event => {
              event.pointerType !== "mouse" && (clearLongPress(), longPressTimerRef.current = window.setTimeout(() => handleOpen(event), 700));
            }),
            onPointerMove: disabled ? props.onPointerMove : composeEventHandlers(props.onPointerMove, event => {
              event.pointerType !== "mouse" && clearLongPress();
            }),
            onPointerCancel: disabled ? props.onPointerCancel : composeEventHandlers(props.onPointerCancel, event => {
              event.pointerType !== "mouse" && clearLongPress();
            }),
            onPointerUp: disabled ? props.onPointerUp : composeEventHandlers(props.onPointerUp, event => {
              event.pointerType !== "mouse" && clearLongPress();
            })
          }),
          ...(!isWeb && {
            onLongPress: disabled ? props.onLongPress : composeEventHandlers(props.onLongPress, event => {
              clearLongPress(), handleOpen(event).defaultPrevented || event.preventDefault();
            })
          }),
          children
        })]
      });
    });
  ContextMenuTrigger.displayName = TRIGGER_NAME;
  const PORTAL_NAME = "ContextMenuPortal",
    ContextMenuPortal = props => {
      const {
          scope,
          children,
          ...portalProps
        } = props,
        context = isAndroid ? useContextMenuContext(scope) : null,
        content = isAndroid ? /* @__PURE__ */jsx(ContextMenuProvider, {
          ...context,
          children
        }) : children;
      return /* @__PURE__ */jsx(Menu.Portal, {
        scope: scope || CONTEXTMENU_CONTEXT,
        ...portalProps,
        children: content
      });
    };
  ContextMenuPortal.displayName = PORTAL_NAME;
  const CONTENT_NAME = "ContextMenuContent",
    ContextMenuContent = React.forwardRef((props, forwardedRef) => {
      const {
          scope,
          ...contentProps
        } = props,
        context = useContextMenuContext(scope),
        hasInteractedOutsideRef = React.useRef(!1);
      return /* @__PURE__ */jsx(Menu.Content, {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, event => {
          hasInteractedOutsideRef.current || context.triggerRef.current?.focus(), hasInteractedOutsideRef.current = !1, event.preventDefault();
        }),
        onInteractOutside: composeEventHandlers(props.onInteractOutside, event => {
          const originalEvent = event.detail.originalEvent,
            ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === !0,
            isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          (!context.modal || isRightClick) && (hasInteractedOutsideRef.current = !0);
        })
      });
    });
  ContextMenuContent.displayName = CONTENT_NAME;
  const ITEM_NAME = "ContextMenuItem",
    ContextMenuItem = React.forwardRef((props, forwardedRef) => {
      const {
        scope,
        ...itemProps
      } = props;
      return /* @__PURE__ */jsx(Menu.Item, {
        componentName: ITEM_NAME,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...itemProps,
        ref: forwardedRef
      });
    });
  ContextMenuItem.displayName = ITEM_NAME;
  const CHECKBOX_ITEM_NAME = "ContextMenuCheckboxItem",
    ContextMenuCheckboxItem = React.forwardRef((props, forwardedRef) => {
      const {
        scope,
        ...checkboxItemProps
      } = props;
      return /* @__PURE__ */jsx(Menu.CheckboxItem, {
        componentName: CHECKBOX_ITEM_NAME,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...checkboxItemProps,
        ref: forwardedRef
      });
    });
  ContextMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
  const RADIO_GROUP_NAME = "ContextMenuRadioGroup",
    ContextMenuRadioGroup = React.forwardRef((props, forwardedRef) => {
      const {
        scope,
        ...radioGroupProps
      } = props;
      return /* @__PURE__ */jsx(Menu.RadioGroup, {
        scope: scope || CONTEXTMENU_CONTEXT,
        ...radioGroupProps,
        ref: forwardedRef
      });
    });
  ContextMenuRadioGroup.displayName = RADIO_GROUP_NAME;
  const RADIO_ITEM_NAME = "ContextMenuRadioItem",
    ContextMenuRadioItem = React.forwardRef((props, forwardedRef) => {
      const {
        scope,
        ...radioItemProps
      } = props;
      return /* @__PURE__ */jsx(Menu.RadioItem, {
        componentName: RADIO_ITEM_NAME,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...radioItemProps,
        ref: forwardedRef
      });
    });
  ContextMenuRadioItem.displayName = RADIO_ITEM_NAME;
  const INDICATOR_NAME = "ContextMenuItemIndicator",
    ContextMenuItemIndicator = Menu.ItemIndicator.styleable((props, forwardedRef) => {
      const {
        scope,
        ...itemIndicatorProps
      } = props;
      return /* @__PURE__ */jsx(Menu.ItemIndicator, {
        componentName: INDICATOR_NAME,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...itemIndicatorProps,
        ref: forwardedRef
      });
    });
  ContextMenuItemIndicator.displayName = INDICATOR_NAME;
  const SUB_NAME = "ContextMenuSub",
    ContextMenuSub = props => {
      const {
          scope,
          children,
          onOpenChange,
          open: openProp,
          defaultOpen,
          ...rest
        } = props,
        [open, setOpen] = useControllableState({
          prop: openProp,
          defaultProp: defaultOpen,
          onChange: onOpenChange
        });
      return /* @__PURE__ */jsx(Menu.Sub, {
        scope: scope || CONTEXTMENU_CONTEXT,
        open,
        onOpenChange: setOpen,
        ...rest,
        children
      });
    };
  ContextMenuSub.displayName = SUB_NAME;
  const SUB_TRIGGER_NAME = "ContextMenuSubTrigger",
    ContextMenuSubTrigger = View.styleable((props, forwardedRef) => {
      const {
        scope,
        ...subTriggerProps
      } = props;
      return /* @__PURE__ */jsx(Menu.SubTrigger, {
        componentName: SUB_TRIGGER_NAME,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...subTriggerProps,
        ref: forwardedRef
      });
    });
  ContextMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
  const SUB_CONTENT_NAME = "ContextMenuSubContent",
    ContextMenuSubContent = React.forwardRef((props, forwardedRef) => {
      const {
        scope,
        ...subContentProps
      } = props;
      return /* @__PURE__ */jsx(Menu.SubContent, {
        scope: scope || CONTEXTMENU_CONTEXT,
        ...subContentProps,
        ref: forwardedRef,
        style: isWeb ? {
          ...props.style,
          "--tamagui-context-menu-content-transform-origin": "var(--tamagui-popper-transform-origin)",
          "--tamagui-context-menu-content-available-width": "var(--tamagui-popper-available-width)",
          "--tamagui-context-menu-content-available-height": "var(--tamagui-popper-available-height)",
          "--tamagui-context-menu-trigger-width": "var(--tamagui-popper-anchor-width)",
          "--tamagui-context-menu-trigger-height": "var(--tamagui-popper-anchor-height)"
        } : null
      });
    });
  ContextMenuSubContent.displayName = SUB_CONTENT_NAME;
  const ARROW_NAME = "ContextMenuArrow",
    ContextMenuArrow = React.forwardRef((props, forwardedRef) => {
      const {
        scope,
        ...arrowProps
      } = props;
      return /* @__PURE__ */jsx(Menu.Arrow, {
        componentName: ARROW_NAME,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...arrowProps,
        ref: forwardedRef
      });
    });
  ContextMenuArrow.displayName = ARROW_NAME;
  const ContextMenuGroup = Menu.Group,
    ContextMenuLabel = Menu.Label,
    ContextMenuSeparator = Menu.Separator,
    ContextMenuItemTitle = Menu.ItemTitle,
    ContextMenuItemSubTitle = Menu.ItemSubtitle,
    ContextMenuItemImage = Menu.ItemImage,
    ContextMenuItemIcon = Menu.ItemIcon;
  return withStaticProperties(ContextMenuComp, {
    Root: ContextMenuComp,
    Trigger: ContextMenuTrigger,
    Portal: ContextMenuPortal,
    Content: ContextMenuContent,
    Group: ContextMenuGroup,
    Label: ContextMenuLabel,
    Item: ContextMenuItem,
    CheckboxItem: ContextMenuCheckboxItem,
    RadioGroup: ContextMenuRadioGroup,
    RadioItem: ContextMenuRadioItem,
    ItemIndicator: ContextMenuItemIndicator,
    Separator: ContextMenuSeparator,
    Arrow: ContextMenuArrow,
    Sub: ContextMenuSub,
    SubTrigger: ContextMenuSubTrigger,
    SubContent: ContextMenuSubContent,
    ItemTitle: ContextMenuItemTitle,
    ItemSubtitle: ContextMenuItemSubTitle,
    ItemIcon: ContextMenuItemIcon,
    ItemImage: ContextMenuItemImage,
    Preview: () => null
  });
}
export { CONTEXTMENU_CONTEXT, createNonNativeContextMenu };
//# sourceMappingURL=createNonNativeContextMenu.mjs.map
