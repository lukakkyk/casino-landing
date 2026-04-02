var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: !0
    });
  },
  __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames(from)) !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
    return to;
  };
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: !0
  }) : target, mod)),
  __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
    value: !0
  }), mod);
var createNonNativeContextMenu_exports = {};
__export(createNonNativeContextMenu_exports, {
  CONTEXTMENU_CONTEXT: () => CONTEXTMENU_CONTEXT,
  createNonNativeContextMenu: () => createNonNativeContextMenu
});
module.exports = __toCommonJS(createNonNativeContextMenu_exports);
var import_create_menu = require("@tamagui/create-menu"),
  import_use_controllable_state = require("@tamagui/use-controllable-state"),
  import_web = require("@tamagui/web"),
  import_react = __toESM(require("react"), 1),
  import_jsx_runtime = require("react/jsx-runtime");
const CONTEXTMENU_CONTEXT = "ContextMenuContext";
function createNonNativeContextMenu(params) {
  const {
      Menu
    } = (0, import_create_menu.createBaseMenu)(params),
    CONTEXT_MENU_NAME = "ContextMenu",
    {
      Provider: ContextMenuProvider,
      useStyledContext: useContextMenuContext
    } = (0, import_web.createStyledContext)(),
    ContextMenuComp = props => {
      const {
          scope,
          children,
          onOpenChange,
          dir,
          modal = !0,
          ...rest
        } = props,
        [open, setOpen] = import_react.default.useState(!1),
        triggerRef = import_react.default.useRef(null),
        handleOpenChange = import_react.default.useCallback((open2, event) => {
          onOpenChange?.(open2, event), !event?.defaultPrevented && setOpen(open2);
        }, [onOpenChange]);
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(ContextMenuProvider, {
        scope,
        triggerId: (0, import_react.useId)(),
        triggerRef,
        contentId: (0, import_react.useId)(),
        open,
        onOpenChange: handleOpenChange,
        modal,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(Menu, {
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
    ContextMenuTrigger = import_web.View.styleable((props, forwardedRef) => {
      const {
          scope,
          style,
          disabled = !1,
          asChild,
          children,
          ...triggerProps
        } = props,
        context = useContextMenuContext(scope),
        pointRef = import_react.default.useRef({
          x: 0,
          y: 0
        }),
        virtualRef = import_react.default.useMemo(() => ({
          current: {
            getBoundingClientRect: () => {
              if (import_web.isWeb) {
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
            ...(!import_web.isWeb && {
              measure: c => c(pointRef.current.x, pointRef.current.y, 0, 0),
              measureInWindow: c => c(pointRef.current.x, pointRef.current.y, 0, 0)
            })
          }
        }), [pointRef.current.x, pointRef.current.y]),
        longPressTimerRef = import_react.default.useRef(0),
        clearLongPress = import_react.default.useCallback(() => window.clearTimeout(longPressTimerRef.current), []),
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
          import_web.isWeb && (event instanceof MouseEvent || event instanceof PointerEvent) ? pointRef.current = {
            x: event.clientX,
            y: event.clientY
          } : pointRef.current = {
            x: event.nativeEvent.pageX,
            y: event.nativeEvent.pageY
          };
          const openChangeEvent = createOpenChangeEvent();
          return context.onOpenChange(!0, openChangeEvent), openChangeEvent;
        };
      import_react.default.useEffect(() => clearLongPress, [clearLongPress]), import_react.default.useEffect(() => {
        disabled && clearLongPress();
      }, [disabled, clearLongPress]);
      const Comp = asChild ? import_web.Slot : import_web.View;
      return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
        children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)(Menu.Anchor, {
          scope: scope || CONTEXTMENU_CONTEXT,
          virtualRef
        }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(Comp, {
          render: "span",
          componentName: TRIGGER_NAME,
          id: context.triggerId,
          "data-state": context.open ? "open" : "closed",
          "data-disabled": disabled ? "" : void 0,
          ...triggerProps,
          ref: (0, import_web.composeRefs)(forwardedRef, context.triggerRef),
          style: import_web.isWeb ? {
            WebkitTouchCallout: "none",
            ...style
          } : null,
          ...(import_web.isWeb && {
            onContextMenu: disabled ? props.onContextMenu : (0, import_web.composeEventHandlers)(props.onContextMenu, event => {
              clearLongPress(), handleOpen(event).defaultPrevented || event.preventDefault();
            }),
            onPointerDown: disabled ? props.onPointerDown : (0, import_web.composeEventHandlers)(props.onPointerDown, event => {
              event.pointerType !== "mouse" && (clearLongPress(), longPressTimerRef.current = window.setTimeout(() => handleOpen(event), 700));
            }),
            onPointerMove: disabled ? props.onPointerMove : (0, import_web.composeEventHandlers)(props.onPointerMove, event => {
              event.pointerType !== "mouse" && clearLongPress();
            }),
            onPointerCancel: disabled ? props.onPointerCancel : (0, import_web.composeEventHandlers)(props.onPointerCancel, event => {
              event.pointerType !== "mouse" && clearLongPress();
            }),
            onPointerUp: disabled ? props.onPointerUp : (0, import_web.composeEventHandlers)(props.onPointerUp, event => {
              event.pointerType !== "mouse" && clearLongPress();
            })
          }),
          ...(!import_web.isWeb && {
            onLongPress: disabled ? props.onLongPress : (0, import_web.composeEventHandlers)(props.onLongPress, event => {
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
        context = import_web.isAndroid ? useContextMenuContext(scope) : null,
        content = import_web.isAndroid ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(ContextMenuProvider, {
          ...context,
          children
        }) : children;
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Menu.Portal, {
        scope: scope || CONTEXTMENU_CONTEXT,
        ...portalProps,
        children: content
      });
    };
  ContextMenuPortal.displayName = PORTAL_NAME;
  const CONTENT_NAME = "ContextMenuContent",
    ContextMenuContent = import_react.default.forwardRef((props, forwardedRef) => {
      const {
          scope,
          ...contentProps
        } = props,
        context = useContextMenuContext(scope),
        hasInteractedOutsideRef = import_react.default.useRef(!1);
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Menu.Content, {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: (0, import_web.composeEventHandlers)(props.onCloseAutoFocus, event => {
          hasInteractedOutsideRef.current || context.triggerRef.current?.focus(), hasInteractedOutsideRef.current = !1, event.preventDefault();
        }),
        onInteractOutside: (0, import_web.composeEventHandlers)(props.onInteractOutside, event => {
          const originalEvent = event.detail.originalEvent,
            ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === !0,
            isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          (!context.modal || isRightClick) && (hasInteractedOutsideRef.current = !0);
        })
      });
    });
  ContextMenuContent.displayName = CONTENT_NAME;
  const ITEM_NAME = "ContextMenuItem",
    ContextMenuItem = import_react.default.forwardRef((props, forwardedRef) => {
      const {
        scope,
        ...itemProps
      } = props;
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Menu.Item, {
        componentName: ITEM_NAME,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...itemProps,
        ref: forwardedRef
      });
    });
  ContextMenuItem.displayName = ITEM_NAME;
  const CHECKBOX_ITEM_NAME = "ContextMenuCheckboxItem",
    ContextMenuCheckboxItem = import_react.default.forwardRef((props, forwardedRef) => {
      const {
        scope,
        ...checkboxItemProps
      } = props;
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Menu.CheckboxItem, {
        componentName: CHECKBOX_ITEM_NAME,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...checkboxItemProps,
        ref: forwardedRef
      });
    });
  ContextMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
  const RADIO_GROUP_NAME = "ContextMenuRadioGroup",
    ContextMenuRadioGroup = import_react.default.forwardRef((props, forwardedRef) => {
      const {
        scope,
        ...radioGroupProps
      } = props;
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Menu.RadioGroup, {
        scope: scope || CONTEXTMENU_CONTEXT,
        ...radioGroupProps,
        ref: forwardedRef
      });
    });
  ContextMenuRadioGroup.displayName = RADIO_GROUP_NAME;
  const RADIO_ITEM_NAME = "ContextMenuRadioItem",
    ContextMenuRadioItem = import_react.default.forwardRef((props, forwardedRef) => {
      const {
        scope,
        ...radioItemProps
      } = props;
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Menu.RadioItem, {
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
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Menu.ItemIndicator, {
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
        [open, setOpen] = (0, import_use_controllable_state.useControllableState)({
          prop: openProp,
          defaultProp: defaultOpen,
          onChange: onOpenChange
        });
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Menu.Sub, {
        scope: scope || CONTEXTMENU_CONTEXT,
        open,
        onOpenChange: setOpen,
        ...rest,
        children
      });
    };
  ContextMenuSub.displayName = SUB_NAME;
  const SUB_TRIGGER_NAME = "ContextMenuSubTrigger",
    ContextMenuSubTrigger = import_web.View.styleable((props, forwardedRef) => {
      const {
        scope,
        ...subTriggerProps
      } = props;
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Menu.SubTrigger, {
        componentName: SUB_TRIGGER_NAME,
        scope: scope || CONTEXTMENU_CONTEXT,
        ...subTriggerProps,
        ref: forwardedRef
      });
    });
  ContextMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
  const SUB_CONTENT_NAME = "ContextMenuSubContent",
    ContextMenuSubContent = import_react.default.forwardRef((props, forwardedRef) => {
      const {
        scope,
        ...subContentProps
      } = props;
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Menu.SubContent, {
        scope: scope || CONTEXTMENU_CONTEXT,
        ...subContentProps,
        ref: forwardedRef,
        style: import_web.isWeb ? {
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
    ContextMenuArrow = import_react.default.forwardRef((props, forwardedRef) => {
      const {
        scope,
        ...arrowProps
      } = props;
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Menu.Arrow, {
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
  return (0, import_web.withStaticProperties)(ContextMenuComp, {
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