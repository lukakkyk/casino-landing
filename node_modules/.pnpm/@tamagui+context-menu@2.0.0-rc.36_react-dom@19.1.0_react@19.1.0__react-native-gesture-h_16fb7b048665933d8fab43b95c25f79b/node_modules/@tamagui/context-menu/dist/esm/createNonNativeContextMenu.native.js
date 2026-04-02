import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createBaseMenu } from "@tamagui/create-menu";
import { useControllableState } from "@tamagui/use-controllable-state";
import { composeEventHandlers, composeRefs, createStyledContext, isAndroid, isWeb, Slot, View, withStaticProperties } from "@tamagui/web";
import React, { useId } from "react";
function _instanceof(left, right) {
  return right != null && typeof Symbol < "u" && right[Symbol.hasInstance] ? !!right[Symbol.hasInstance](left) : left instanceof right;
}
var CONTEXTMENU_CONTEXT = "ContextMenuContext";
function createNonNativeContextMenu(params) {
  var {
      Menu
    } = createBaseMenu(params),
    CONTEXT_MENU_NAME = "ContextMenu",
    {
      Provider: ContextMenuProvider,
      useStyledContext: useContextMenuContext
    } = createStyledContext(),
    ContextMenuComp = function (props) {
      var {
          scope,
          children,
          onOpenChange,
          dir,
          modal = !0,
          ...rest
        } = props,
        [open, setOpen] = React.useState(!1),
        triggerRef = React.useRef(null),
        handleOpenChange = React.useCallback(function (open2, event) {
          onOpenChange?.(open2, event), !event?.defaultPrevented && setOpen(open2);
        }, [onOpenChange]);
      return /* @__PURE__ */_jsx(ContextMenuProvider, {
        scope,
        triggerId: useId(),
        triggerRef,
        contentId: useId(),
        open,
        onOpenChange: handleOpenChange,
        modal,
        children: /* @__PURE__ */_jsx(Menu, {
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
  var TRIGGER_NAME = "ContextMenuTrigger",
    ContextMenuTrigger = View.styleable(function (props, forwardedRef) {
      var {
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
        virtualRef = React.useMemo(function () {
          return {
            current: {
              getBoundingClientRect: function () {
                if (isWeb) {
                  var scrollX = window.scrollX || document.documentElement.scrollLeft,
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
                measure: function (c) {
                  return c(pointRef.current.x, pointRef.current.y, 0, 0);
                },
                measureInWindow: function (c) {
                  return c(pointRef.current.x, pointRef.current.y, 0, 0);
                }
              })
            }
          };
        }, [pointRef.current.x, pointRef.current.y]),
        longPressTimerRef = React.useRef(0),
        clearLongPress = React.useCallback(function () {
          return window.clearTimeout(longPressTimerRef.current);
        }, []),
        createOpenChangeEvent = function () {
          var defaultPrevented = !1;
          return {
            get defaultPrevented() {
              return defaultPrevented;
            },
            preventDefault() {
              defaultPrevented = !0;
            }
          };
        },
        handleOpen = function (event) {
          isWeb && (_instanceof(event, MouseEvent) || _instanceof(event, PointerEvent)) ? pointRef.current = {
            x: event.clientX,
            y: event.clientY
          } : pointRef.current = {
            x: event.nativeEvent.pageX,
            y: event.nativeEvent.pageY
          };
          var openChangeEvent = createOpenChangeEvent();
          return context.onOpenChange(!0, openChangeEvent), openChangeEvent;
        };
      React.useEffect(function () {
        return clearLongPress;
      }, [clearLongPress]), React.useEffect(function () {
        disabled && clearLongPress();
      }, [disabled, clearLongPress]);
      var Comp = asChild ? Slot : View;
      return /* @__PURE__ */_jsxs(_Fragment, {
        children: [/* @__PURE__ */_jsx(Menu.Anchor, {
          scope: scope || CONTEXTMENU_CONTEXT,
          virtualRef
        }), /* @__PURE__ */_jsx(Comp, {
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
            onContextMenu: disabled ? props.onContextMenu : composeEventHandlers(props.onContextMenu, function (event) {
              clearLongPress();
              var openChangeEvent = handleOpen(event);
              openChangeEvent.defaultPrevented || event.preventDefault();
            }),
            onPointerDown: disabled ? props.onPointerDown : composeEventHandlers(props.onPointerDown, function (event) {
              event.pointerType !== "mouse" && (clearLongPress(), longPressTimerRef.current = window.setTimeout(function () {
                return handleOpen(event);
              }, 700));
            }),
            onPointerMove: disabled ? props.onPointerMove : composeEventHandlers(props.onPointerMove, function (event) {
              event.pointerType !== "mouse" && clearLongPress();
            }),
            onPointerCancel: disabled ? props.onPointerCancel : composeEventHandlers(props.onPointerCancel, function (event) {
              event.pointerType !== "mouse" && clearLongPress();
            }),
            onPointerUp: disabled ? props.onPointerUp : composeEventHandlers(props.onPointerUp, function (event) {
              event.pointerType !== "mouse" && clearLongPress();
            })
          }),
          ...(!isWeb && {
            onLongPress: disabled ? props.onLongPress : composeEventHandlers(props.onLongPress, function (event) {
              clearLongPress();
              var openChangeEvent = handleOpen(event);
              openChangeEvent.defaultPrevented || event.preventDefault();
            })
          }),
          children
        })]
      });
    });
  ContextMenuTrigger.displayName = TRIGGER_NAME;
  var PORTAL_NAME = "ContextMenuPortal",
    ContextMenuPortal = function (props) {
      var {
          scope,
          children,
          ...portalProps
        } = props,
        context = isAndroid ? useContextMenuContext(scope) : null,
        content = isAndroid ? /* @__PURE__ */_jsx(ContextMenuProvider, {
          ...context,
          children
        }) : children;
      return /* @__PURE__ */_jsx(Menu.Portal, {
        scope: scope || CONTEXTMENU_CONTEXT,
        ...portalProps,
        children: content
      });
    };
  ContextMenuPortal.displayName = PORTAL_NAME;
  var CONTENT_NAME = "ContextMenuContent",
    ContextMenuContent = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
      var {
          scope,
          ...contentProps
        } = props,
        context = useContextMenuContext(scope),
        hasInteractedOutsideRef = React.useRef(!1);
      return /* @__PURE__ */_jsx(Menu.Content, {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, function (event) {
          var _context_triggerRef_current;
          hasInteractedOutsideRef.current || (_context_triggerRef_current = context.triggerRef.current) === null || _context_triggerRef_current === void 0 || _context_triggerRef_current.focus(), hasInteractedOutsideRef.current = !1, event.preventDefault();
        }),
        onInteractOutside: composeEventHandlers(props.onInteractOutside, function (event) {
          var originalEvent = event.detail.originalEvent,
            ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === !0,
            isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          (!context.modal || isRightClick) && (hasInteractedOutsideRef.current = !0);
        })
      });
    });
  ContextMenuContent.displayName = CONTENT_NAME;
  var ITEM_NAME = "ContextMenuItem",
    ContextMenuItem = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
      var {
        scope,
        ...itemProps
      } = props;
      return /* @__PURE__ */_jsx(Menu.Item, {
        componentName: ITEM_NAME,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...itemProps,
        ref: forwardedRef
      });
    });
  ContextMenuItem.displayName = ITEM_NAME;
  var CHECKBOX_ITEM_NAME = "ContextMenuCheckboxItem",
    ContextMenuCheckboxItem = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
      var {
        scope,
        ...checkboxItemProps
      } = props;
      return /* @__PURE__ */_jsx(Menu.CheckboxItem, {
        componentName: CHECKBOX_ITEM_NAME,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...checkboxItemProps,
        ref: forwardedRef
      });
    });
  ContextMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
  var RADIO_GROUP_NAME = "ContextMenuRadioGroup",
    ContextMenuRadioGroup = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
      var {
        scope,
        ...radioGroupProps
      } = props;
      return /* @__PURE__ */_jsx(Menu.RadioGroup, {
        scope: scope || CONTEXTMENU_CONTEXT,
        ...radioGroupProps,
        ref: forwardedRef
      });
    });
  ContextMenuRadioGroup.displayName = RADIO_GROUP_NAME;
  var RADIO_ITEM_NAME = "ContextMenuRadioItem",
    ContextMenuRadioItem = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
      var {
        scope,
        ...radioItemProps
      } = props;
      return /* @__PURE__ */_jsx(Menu.RadioItem, {
        componentName: RADIO_ITEM_NAME,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...radioItemProps,
        ref: forwardedRef
      });
    });
  ContextMenuRadioItem.displayName = RADIO_ITEM_NAME;
  var INDICATOR_NAME = "ContextMenuItemIndicator",
    ContextMenuItemIndicator = Menu.ItemIndicator.styleable(function (props, forwardedRef) {
      var {
        scope,
        ...itemIndicatorProps
      } = props;
      return /* @__PURE__ */_jsx(Menu.ItemIndicator, {
        componentName: INDICATOR_NAME,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...itemIndicatorProps,
        ref: forwardedRef
      });
    });
  ContextMenuItemIndicator.displayName = INDICATOR_NAME;
  var SUB_NAME = "ContextMenuSub",
    ContextMenuSub = function (props) {
      var {
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
      return /* @__PURE__ */_jsx(Menu.Sub, {
        scope: scope || CONTEXTMENU_CONTEXT,
        open,
        onOpenChange: setOpen,
        ...rest,
        children
      });
    };
  ContextMenuSub.displayName = SUB_NAME;
  var SUB_TRIGGER_NAME = "ContextMenuSubTrigger",
    ContextMenuSubTrigger = View.styleable(function (props, forwardedRef) {
      var {
        scope,
        ...subTriggerProps
      } = props;
      return /* @__PURE__ */_jsx(Menu.SubTrigger, {
        componentName: SUB_TRIGGER_NAME,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...subTriggerProps,
        ref: forwardedRef
      });
    });
  ContextMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
  var SUB_CONTENT_NAME = "ContextMenuSubContent",
    ContextMenuSubContent = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
      var {
        scope,
        ...subContentProps
      } = props;
      return /* @__PURE__ */_jsx(Menu.SubContent, {
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
  var ARROW_NAME = "ContextMenuArrow",
    ContextMenuArrow = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
      var {
        scope,
        ...arrowProps
      } = props;
      return /* @__PURE__ */_jsx(Menu.Arrow, {
        componentName: ARROW_NAME,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...arrowProps,
        ref: forwardedRef
      });
    });
  ContextMenuArrow.displayName = ARROW_NAME;
  var ContextMenuGroup = Menu.Group,
    ContextMenuLabel = Menu.Label,
    ContextMenuSeparator = Menu.Separator,
    ContextMenuItemTitle = Menu.ItemTitle,
    ContextMenuItemSubTitle = Menu.ItemSubtitle,
    ContextMenuItemImage = Menu.ItemImage,
    ContextMenuItemIcon = Menu.ItemIcon,
    ContextMenuPreview = function () {
      return null;
    };
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
    Preview: ContextMenuPreview
  });
}
export { CONTEXTMENU_CONTEXT, createNonNativeContextMenu };
//# sourceMappingURL=createNonNativeContextMenu.native.js.map
