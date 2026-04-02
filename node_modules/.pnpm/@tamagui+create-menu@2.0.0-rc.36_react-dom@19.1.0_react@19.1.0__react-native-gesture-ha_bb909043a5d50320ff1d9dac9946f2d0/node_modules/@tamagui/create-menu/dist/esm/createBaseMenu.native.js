import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Animate } from "@tamagui/animate";
import { AnimatePresence as Presence } from "@tamagui/animate-presence";
import { createCollection } from "@tamagui/collection";
import { Dismissable as DismissableLayer, dispatchDiscreteCustomEvent } from "@tamagui/dismissable";
import { useFocusGuards } from "@tamagui/focus-guard";
import { FocusScope } from "@tamagui/focus-scope";
import * as PopperPrimitive from "@tamagui/popper";
import { needsPortalRepropagation, Portal as PortalPrimitive } from "@tamagui/portal";
import { RemoveScroll } from "@tamagui/remove-scroll";
import { RovingFocusGroup } from "@tamagui/roving-focus";
import { useCallbackRef } from "@tamagui/use-callback-ref";
import { useDirection } from "@tamagui/use-direction";
import { composeEventHandlers, composeRefs, createStyledContext, isWeb, styled, Text, Theme, useComposedRefs, useIsTouchDevice, useThemeName, View, withStaticProperties } from "@tamagui/web";
import * as React from "react";
import { useId } from "react";
import { MenuPredefined } from "./MenuPredefined.native.js";
function _type_of(obj) {
  "@swc/helpers - typeof";

  return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function whenMouse(handler) {
  return function (event) {
    return event.pointerType === "mouse" ? handler(event) : void 0;
  };
}
var SELECTION_KEYS = ["Enter", " "],
  FIRST_KEYS = ["ArrowDown", "PageUp", "Home"],
  LAST_KEYS = ["ArrowUp", "PageDown", "End"],
  FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS],
  SUB_OPEN_KEYS = {
    ltr: [...SELECTION_KEYS, "ArrowRight"],
    rtl: [...SELECTION_KEYS, "ArrowLeft"]
  },
  SUB_CLOSE_KEYS = {
    ltr: ["ArrowLeft"],
    rtl: ["ArrowRight"]
  },
  MENU_NAME = "Menu",
  [Collection, useCollection] = createCollection(MENU_NAME),
  {
    Provider: MenuProvider,
    useStyledContext: useMenuContext
  } = createStyledContext(),
  {
    Provider: MenuRootProvider,
    useStyledContext: useMenuRootContext
  } = createStyledContext(),
  MENU_CONTEXT = "MenuContext";
function createBaseMenu(param) {
  var {
      Item: _Item = MenuPredefined.MenuItem,
      Title: _Title = MenuPredefined.Title,
      SubTitle: _SubTitle = MenuPredefined.SubTitle,
      Image: _Image = MenuPredefined.MenuImage,
      Icon: _Icon = MenuPredefined.MenuIcon,
      Indicator: _Indicator = MenuPredefined.MenuIndicator,
      Separator: _Separator = MenuPredefined.MenuSeparator,
      MenuGroup: _MenuGroup = MenuPredefined.MenuGroup,
      Label: _Label = MenuPredefined.MenuLabel
    } = param,
    MenuComp = function (props) {
      var direction = useDirection(props.dir),
        defaultPlacement = direction === "rtl" ? "bottom-end" : "bottom-start",
        {
          scope = MENU_CONTEXT,
          open = !1,
          children,
          dir,
          onOpenChange,
          modal = !0,
          allowFlip = {
            padding: 10
          },
          stayInFrame = {
            padding: 10
          },
          placement = defaultPlacement,
          resize = !0,
          offset = 10,
          ...rest
        } = props,
        [content, setContent] = React.useState(null),
        isUsingKeyboardRef = React.useRef(!1),
        handleOpenChange = useCallbackRef(onOpenChange);
      return isWeb && React.useEffect(function () {
        var handleKeyDown = function () {
            isUsingKeyboardRef.current = !0, document.addEventListener("pointerdown", handlePointer, {
              capture: !0,
              once: !0
            }), document.addEventListener("pointermove", handlePointer, {
              capture: !0,
              once: !0
            });
          },
          handlePointer = function () {
            return isUsingKeyboardRef.current = !1;
          };
        return document.addEventListener("keydown", handleKeyDown, {
          capture: !0
        }), function () {
          document.removeEventListener("keydown", handleKeyDown, {
            capture: !0
          }), document.removeEventListener("pointerdown", handlePointer, {
            capture: !0
          }), document.removeEventListener("pointermove", handlePointer, {
            capture: !0
          });
        };
      }, []), /* @__PURE__ */_jsx(PopperPrimitive.Popper, {
        scope,
        open,
        placement,
        allowFlip,
        stayInFrame,
        resize,
        offset,
        ...rest,
        children: /* @__PURE__ */_jsx(MenuProvider, {
          scope,
          open,
          onOpenChange: handleOpenChange,
          content,
          onContentChange: setContent,
          children: /* @__PURE__ */_jsx(MenuRootProvider, {
            scope,
            open,
            onClose: React.useCallback(function () {
              return handleOpenChange(!1);
            }, [handleOpenChange]),
            isUsingKeyboardRef,
            dir: direction,
            modal,
            children: (/** this provider is just to avoid crashing when using useSubMenuContext() inside MenuPortal */
            /* @__PURE__ */_jsx(MenuSubProvider, {
              scope,
              children
            }))
          })
        })
      });
    },
    RepropagateMenuAndMenuRootProvider = function (props) {
      var {
        scope = MENU_CONTEXT,
        menuContext,
        rootContext,
        popperContext,
        menuSubContext,
        children
      } = props;
      return /* @__PURE__ */_jsx(PopperPrimitive.PopperProvider, {
        ...popperContext,
        scope,
        children: /* @__PURE__ */_jsx(MenuProvider, {
          scope,
          ...menuContext,
          children: /* @__PURE__ */_jsx(MenuRootProvider, {
            scope,
            ...rootContext,
            children: menuSubContext ? /* @__PURE__ */_jsx(MenuSubProvider, {
              scope,
              ...menuSubContext,
              children
            }) : children
          })
        })
      });
    };
  MenuComp.displayName = MENU_NAME;
  var ANCHOR_NAME = "MenuAnchor",
    MenuAnchor = function (props) {
      return /* @__PURE__ */_jsx(PopperPrimitive.PopperAnchor, {
        scope: MENU_CONTEXT,
        ...props
      });
    };
  MenuAnchor.displayName = ANCHOR_NAME;
  var PORTAL_NAME = "MenuPortal",
    {
      Provider: PortalProvider,
      useStyledContext: usePortalContext
    } = createStyledContext(void 0, "Portal"),
    MenuPortal = function (props) {
      var {
          scope = MENU_CONTEXT,
          forceMount,
          zIndex,
          children
        } = props,
        menuContext = useMenuContext(scope),
        rootContext = useMenuRootContext(scope),
        popperContext = PopperPrimitive.usePopperContext(scope),
        menuSubContext = useMenuSubContext(scope),
        themeName = useThemeName(),
        themedChildren = /* @__PURE__ */_jsx(Theme, {
          forceClassName: !0,
          name: themeName,
          children
        }),
        content = needsPortalRepropagation() ? /* @__PURE__ */_jsx(RepropagateMenuAndMenuRootProvider, {
          menuContext,
          rootContext,
          popperContext,
          menuSubContext,
          scope,
          children: themedChildren
        }) : themedChildren,
        isPresent = forceMount || rootContext.open && menuContext.open;
      return /* @__PURE__ */_jsx(Animate, {
        type: "presence",
        present: isPresent,
        children: /* @__PURE__ */_jsx(PortalPrimitive, {
          stackZIndex: !0,
          children: /* @__PURE__ */_jsx(_Fragment, {
            children: /* @__PURE__ */_jsx(PortalProvider, {
              scope,
              forceMount,
              children: /* @__PURE__ */_jsxs(View, {
                zIndex: zIndex || 100,
                inset: 0,
                position: "absolute",
                children: [!!menuContext.open && !isWeb && /* @__PURE__ */_jsx(View, {
                  inset: 0,
                  position: "absolute",
                  onPress: function () {
                    return menuContext.onOpenChange(!menuContext.open);
                  }
                }), content]
              })
            })
          })
        })
      });
    };
  MenuPortal.displayName = PORTAL_NAME;
  var CONTENT_NAME = "MenuContent",
    {
      Provider: MenuContentProvider,
      useStyledContext: useMenuContentContext
    } = createStyledContext(),
    MenuContentFrame = styled(PopperPrimitive.PopperContentFrame, {
      name: CONTENT_NAME
    }),
    MenuContent = MenuContentFrame.styleable(function (props, forwardedRef) {
      var scope = props.scope || MENU_CONTEXT,
        portalContext = usePortalContext(scope),
        {
          forceMount = portalContext.forceMount,
          ...contentProps
        } = props,
        rootContext = useMenuRootContext(scope);
      return /* @__PURE__ */_jsx(Collection.Provider, {
        scope,
        children: /* @__PURE__ */_jsx(Collection.Slot, {
          scope,
          children: rootContext.modal ? /* @__PURE__ */_jsx(MenuRootContentModal, {
            ...contentProps,
            ref: forwardedRef
          }) : /* @__PURE__ */_jsx(MenuRootContentNonModal, {
            ...contentProps,
            ref: forwardedRef
          })
        })
      });
    }),
    MenuRootContentModal = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
      var scope = props.scope || MENU_CONTEXT,
        context = useMenuContext(scope),
        ref = React.useRef(null),
        composedRefs = useComposedRefs(forwardedRef, ref);
      return /* @__PURE__ */_jsx(MenuContentImpl, {
        ...props,
        scope,
        ref: composedRefs,
        // we make sure we're not trapping once it's been closed
        // (closed !== unmounted when animating out)
        trapFocus: context.open,
        // make sure to only disable pointer events when open
        // this avoids blocking interactions while animating out
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: !1,
        // When focus is trapped, a `focusout` event may still happen.
        // We make sure we don't trigger our `onDismiss` in such case.
        onFocusOutside: composeEventHandlers(props.onFocusOutside, function (event) {
          return event.preventDefault();
        }, {
          checkDefaultPrevented: !1
        }),
        onDismiss: function () {
          return context.onOpenChange(!1);
        }
      });
    }),
    MenuRootContentNonModal = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
      var scope = props.scope || MENU_CONTEXT,
        context = useMenuContext(scope);
      return /* @__PURE__ */_jsx(MenuContentImpl, {
        ...props,
        scope,
        ref: forwardedRef,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: function () {
          return context.onOpenChange(!1);
        }
      });
    }),
    MenuContentImpl = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
      var {
          scope = MENU_CONTEXT,
          loop = !1,
          trapFocus,
          onOpenAutoFocus,
          onCloseAutoFocus,
          disableOutsidePointerEvents,
          onEntryFocus,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside,
          onInteractOutside,
          onDismiss,
          disableOutsideScroll,
          disableDismissOnScroll = !1,
          unstyled = process.env.TAMAGUI_HEADLESS === "1",
          ...contentProps
        } = props,
        context = useMenuContext(scope),
        rootContext = useMenuRootContext(scope),
        getItems = useCollection(scope),
        [currentItemId, setCurrentItemId] = React.useState(null),
        contentRef = React.useRef(null),
        focusableContentRef = React.useRef(null),
        composedRefs = useComposedRefs(forwardedRef, contentRef, context.onContentChange),
        timerRef = React.useRef(0),
        searchRef = React.useRef(""),
        pointerGraceTimerRef = React.useRef(0),
        pointerGraceIntentRef = React.useRef(null),
        pointerDirRef = React.useRef("right"),
        lastPointerXRef = React.useRef(0),
        handleTypeaheadSearch = function (key) {
          var _items_find,
            _items_find1,
            search = searchRef.current + key,
            items = getItems().filter(function (item) {
              return !item.disabled;
            }),
            currentItem = document.activeElement,
            currentMatch = (_items_find = items.find(function (item) {
              return item.ref.current === currentItem;
            })) === null || _items_find === void 0 ? void 0 : _items_find.textValue,
            values = items.map(function (item) {
              return item.textValue;
            }),
            nextMatch = getNextMatch(values, search, currentMatch),
            newItem = (_items_find1 = items.find(function (item) {
              return item.textValue === nextMatch;
            })) === null || _items_find1 === void 0 ? void 0 : _items_find1.ref.current;
          (function updateSearch(value) {
            searchRef.current = value, clearTimeout(timerRef.current), value !== "" && (timerRef.current = setTimeout(function () {
              return updateSearch("");
            }, 1e3));
          })(search), newItem && setTimeout(function () {
            return newItem.focus();
          });
        };
      React.useEffect(function () {
        return function () {
          return clearTimeout(timerRef.current);
        };
      }, []), React.useEffect(function () {
        if (!(!isWeb || !context.open)) {
          var frame = requestAnimationFrame(function () {
            var container = contentRef.current,
              el = container?.querySelector("[data-tamagui-menu-content]");
            el && (focusableContentRef.current = el);
          });
          return function () {
            return cancelAnimationFrame(frame);
          };
        }
      }, [context.open]), React.useEffect(function () {
        if (!(!isWeb || disableDismissOnScroll || !context.open)) {
          var handleScroll = function (event) {
            var _contentRef_current,
              target = event.target;
            !((_contentRef_current = contentRef.current) === null || _contentRef_current === void 0) && _contentRef_current.contains(target) || onDismiss?.();
          };
          return window.addEventListener("scroll", handleScroll, {
            capture: !0,
            passive: !0
          }), function () {
            window.removeEventListener("scroll", handleScroll, {
              capture: !0
            });
          };
        }
      }, [disableDismissOnScroll, context.open, onDismiss]), isWeb && useFocusGuards();
      var isPointerMovingToSubmenu = React.useCallback(function (event) {
          var _pointerGraceIntentRef_current,
            _pointerGraceIntentRef_current1,
            isMovingTowards = pointerDirRef.current === ((_pointerGraceIntentRef_current = pointerGraceIntentRef.current) === null || _pointerGraceIntentRef_current === void 0 ? void 0 : _pointerGraceIntentRef_current.side),
            inArea = isPointerInGraceArea(event, (_pointerGraceIntentRef_current1 = pointerGraceIntentRef.current) === null || _pointerGraceIntentRef_current1 === void 0 ? void 0 : _pointerGraceIntentRef_current1.area);
          return isMovingTowards && inArea;
        }, []),
        content = /* @__PURE__ */_jsx(PopperPrimitive.PopperContent, {
          role: "menu",
          // tabIndex allows the content to be focusable so that onItemLeave can
          // focus the content frame and properly blur the previously focused item
          tabIndex: -1,
          unstyled,
          ...(!unstyled && {
            backgroundColor: "$background",
            borderWidth: 1,
            borderColor: "$borderColor",
            outlineWidth: 0,
            minWidth: 180
          }),
          "aria-orientation": "vertical",
          "data-state": getOpenState(context.open),
          "data-tamagui-menu-content": "",
          // TODO
          // @ts-ignore
          dir: rootContext.dir,
          scope: scope || MENU_CONTEXT,
          ...contentProps,
          ref: composedRefs,
          className: contentProps.transition ? void 0 : contentProps.className,
          ...(isWeb ? {
            onKeyDown: composeEventHandlers(contentProps.onKeyDown, function (event) {
              var target = event.target,
                isKeyDownInside = target.closest("[data-tamagui-menu-content]") === event.currentTarget,
                isModifierKey = event.ctrlKey || event.altKey || event.metaKey,
                isCharacterKey = event.key.length === 1;
              isKeyDownInside && (event.key === "Tab" && event.preventDefault(), !isModifierKey && isCharacterKey && handleTypeaheadSearch(event.key));
              var isOnContentFrame = event.target.hasAttribute("data-tamagui-menu-content");
              if (!(!isKeyDownInside || !isOnContentFrame) && FIRST_LAST_KEYS.includes(event.key)) {
                event.preventDefault();
                var items = getItems().filter(function (item) {
                    return !item.disabled;
                  }),
                  candidateNodes = items.map(function (item) {
                    return item.ref.current;
                  });
                LAST_KEYS.includes(event.key) && candidateNodes.reverse(), focusFirst(candidateNodes, {
                  focusVisible: !0
                });
              }
            }),
            // TODO
            // @ts-ignore
            onBlur: composeEventHandlers(props.onBlur, function (event) {
              var _event_currentTarget;
              !((_event_currentTarget = event.currentTarget) === null || _event_currentTarget === void 0) && _event_currentTarget.contains(event.target) || (clearTimeout(timerRef.current), searchRef.current = "");
            }),
            // TODO
            onPointerMove: composeEventHandlers(props.onPointerMove, function (event) {
              var _event_currentTarget;
              if (event.pointerType === "mouse") {
                var target = event.target,
                  pointerXHasChanged = lastPointerXRef.current !== event.clientX;
                if (!((_event_currentTarget = event.currentTarget) === null || _event_currentTarget === void 0) && _event_currentTarget.contains(target) && pointerXHasChanged) {
                  var newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
                  pointerDirRef.current = newDir, lastPointerXRef.current = event.clientX;
                }
              }
            })
          } : {})
        });
      return /* @__PURE__ */_jsx(MenuContentProvider, {
        scope,
        searchRef,
        onItemEnter: React.useCallback(function (event) {
          isPointerMovingToSubmenu(event) && event.preventDefault();
        }, [isPointerMovingToSubmenu]),
        onItemLeave: React.useCallback(function (event) {
          var _focusableContentRef_current;
          isPointerMovingToSubmenu(event) || ((_focusableContentRef_current = focusableContentRef.current) === null || _focusableContentRef_current === void 0 || _focusableContentRef_current.focus(), setCurrentItemId(null));
        }, [isPointerMovingToSubmenu]),
        onTriggerLeave: React.useCallback(function (event) {
          isPointerMovingToSubmenu(event) && event.preventDefault();
        }, [isPointerMovingToSubmenu]),
        pointerGraceTimerRef,
        onPointerGraceIntentChange: React.useCallback(function (intent) {
          pointerGraceIntentRef.current = intent;
        }, []),
        children: /* @__PURE__ */_jsx(RemoveScroll, {
          enabled: disableOutsideScroll,
          children: /* @__PURE__ */_jsx(FocusScope, {
            asChild: !1,
            trapped: trapFocus,
            onMountAutoFocus: composeEventHandlers(onOpenAutoFocus, function (event) {
              event.preventDefault();
              var content2 = document.querySelector("[data-tamagui-menu-content]");
              content2?.focus({
                preventScroll: !0
              });
            }),
            onUnmountAutoFocus: onCloseAutoFocus,
            children: /* @__PURE__ */_jsx(DismissableLayer, {
              disableOutsidePointerEvents,
              onEscapeKeyDown,
              onPointerDownOutside,
              onFocusOutside,
              onInteractOutside,
              onDismiss,
              asChild: !0,
              children: /* @__PURE__ */_jsx(RovingFocusGroup, {
                asChild: !0,
                __scopeRovingFocusGroup: scope || MENU_CONTEXT,
                dir: rootContext.dir,
                orientation: "vertical",
                loop,
                currentTabStopId: currentItemId,
                onCurrentTabStopIdChange: setCurrentItemId,
                onEntryFocus: composeEventHandlers(onEntryFocus, function (event) {
                  rootContext.isUsingKeyboardRef.current || event.preventDefault();
                }),
                children: content
              })
            })
          })
        })
      });
    });
  MenuContent.displayName = CONTENT_NAME;
  var ITEM_NAME = "MenuItem",
    ITEM_SELECT = "menu.itemSelect",
    MenuItem = _Item.styleable(function (props, forwardedRef) {
      var {
          disabled = !1,
          onSelect,
          preventCloseOnSelect,
          children,
          scope = MENU_CONTEXT,
          // filter out native-only props that shouldn't reach the DOM
          // @ts-ignore
          destructive,
          // @ts-ignore
          hidden,
          // @ts-ignore
          androidIconName,
          // @ts-ignore
          iosIconName,
          ...itemProps
        } = props,
        ref = React.useRef(null),
        rootContext = useMenuRootContext(scope),
        contentContext = useMenuContentContext(scope),
        composedRefs = useComposedRefs(forwardedRef, ref),
        isPointerDownRef = React.useRef(!1),
        handleSelect = function () {
          var menuItem = ref.current;
          if (!disabled && menuItem) if (isWeb) {
            var menuItemEl = menuItem,
              itemSelectEvent = new CustomEvent(ITEM_SELECT, {
                bubbles: !0,
                cancelable: !0
              });
            menuItemEl.addEventListener(ITEM_SELECT, function (event) {
              return onSelect?.(event);
            }, {
              once: !0
            }), dispatchDiscreteCustomEvent(menuItemEl, itemSelectEvent), itemSelectEvent.defaultPrevented || preventCloseOnSelect ? isPointerDownRef.current = !1 : rootContext.onClose();
          } else onSelect?.({
            target: menuItem
          }), isPointerDownRef.current = !1, preventCloseOnSelect || rootContext.onClose();
        },
        content = typeof children == "string" ? /* @__PURE__ */_jsx(Text, {
          children
        }) : children;
      return /* @__PURE__ */_jsx(MenuItemImpl, {
        outlineStyle: "none",
        ...itemProps,
        scope,
        // @ts-ignore
        ref: composedRefs,
        disabled,
        onPress: composeEventHandlers(props.onPress, handleSelect),
        onPointerDown: function (event) {
          var _props_onPointerDown;
          (_props_onPointerDown = props.onPointerDown) === null || _props_onPointerDown === void 0 || _props_onPointerDown.call(props, event), isPointerDownRef.current = !0;
        },
        onPointerUp: composeEventHandlers(props.onPointerUp, function (event) {
          if (isWeb) {
            var _event_currentTarget;
            isPointerDownRef.current || (_event_currentTarget = event.currentTarget) === null || _event_currentTarget === void 0 || _event_currentTarget.click();
          }
        }),
        ...(isWeb ? {
          onKeyDown: composeEventHandlers(props.onKeyDown, function (event) {
            var isTypingAhead = contentContext.searchRef.current !== "";
            if (!(disabled || isTypingAhead && event.key === " ") && SELECTION_KEYS.includes(event.key)) {
              var _event_currentTarget;
              (_event_currentTarget = event.currentTarget) === null || _event_currentTarget === void 0 || _event_currentTarget.click(), event.preventDefault();
            }
          })
        } : {}),
        children: content
      });
    }),
    MenuItemImpl = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
      var {
          scope = MENU_CONTEXT,
          disabled = !1,
          textValue,
          unstyled = process.env.TAMAGUI_HEADLESS === "1",
          ...itemProps
        } = props,
        contentContext = useMenuContentContext(scope),
        ref = React.useRef(null),
        composedRefs = useComposedRefs(forwardedRef, ref),
        [isFocused, setIsFocused] = React.useState(!1),
        [textContent, setTextContent] = React.useState("");
      return isWeb && React.useEffect(function () {
        var menuItem = ref.current;
        if (menuItem) {
          var _menuItem_textContent;
          setTextContent(((_menuItem_textContent = menuItem.textContent) !== null && _menuItem_textContent !== void 0 ? _menuItem_textContent : "").trim());
        }
      }, [itemProps.children]), /* @__PURE__ */_jsx(Collection.ItemSlot, {
        scope,
        disabled,
        textValue: textValue ?? textContent,
        children: /* @__PURE__ */_jsx(RovingFocusGroup.Item, {
          asChild: !0,
          __scopeRovingFocusGroup: scope,
          focusable: !disabled,
          children: /* @__PURE__ */_jsx(_Item, {
            unstyled,
            componentName: ITEM_NAME,
            role: "menuitem",
            "data-highlighted": isFocused ? "" : void 0,
            "aria-disabled": disabled || void 0,
            "data-disabled": disabled ? "" : void 0,
            ...itemProps,
            ref: composedRefs,
            /**
            * We focus items on `pointerMove` to achieve the following:
            *
            * - Mouse over an item (it focuses)
            * - Leave mouse where it is and use keyboard to focus a different item
            * - Wiggle mouse without it leaving previously focused item
            * - Previously focused item should re-focus
            *
            * If we used `mouseOver`/`mouseEnter` it would not re-focus when the mouse
            * wiggles. This is to match native menu implementation.
            */
            onPointerMove: composeEventHandlers(props.onPointerMove, function (event) {
              if (event.pointerType === "mouse") {
                if (disabled) contentContext.onItemLeave(event);else if (contentContext.onItemEnter(event), !event.defaultPrevented) {
                  var item = event.currentTarget;
                  item.focus({
                    preventScroll: !0,
                    focusVisible: !1
                  });
                }
              }
            }),
            onPointerLeave: composeEventHandlers(props.onPointerLeave, function (event) {
              contentContext.onItemLeave(event);
            }),
            onFocus: composeEventHandlers(props.onFocus, function () {
              return setIsFocused(!0);
            }),
            onBlur: composeEventHandlers(props.onBlur, function () {
              return setIsFocused(!1);
            })
          })
        })
      });
    });
  MenuItem.displayName = ITEM_NAME;
  var ITEM_TITLE_NAME = "MenuItemTitle",
    MenuItemTitle = _Title.styleable(function (props, forwardedRef) {
      return /* @__PURE__ */_jsx(_Title, {
        ...props,
        ref: forwardedRef
      });
    });
  MenuItemTitle.displayName = ITEM_TITLE_NAME;
  var ITEM_SUB_TITLE_NAME = "MenuItemSubTitle",
    MenuItemSubTitle = _SubTitle.styleable(function (props, forwardedRef) {
      return /* @__PURE__ */_jsx(_SubTitle, {
        ...props,
        ref: forwardedRef
      });
    });
  MenuItemSubTitle.displayName = ITEM_SUB_TITLE_NAME;
  var ITEM_IMAGE = "MenuItemImage",
    MenuItemImage = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
      var {
        // @ts-ignore - native menu ios config
        ios,
        // @ts-ignore
        androidIconName,
        // @ts-ignore
        iosIconName,
        ...rest
      } = props;
      return /* @__PURE__ */_jsx(_Image, {
        ...rest,
        ref: forwardedRef
      });
    });
  MenuItemImage.displayName = ITEM_IMAGE;
  var ITEM_ICON = "MenuItemIcon",
    MenuItemIcon = _Icon.styleable(function (props, forwardedRef) {
      var {
        // @ts-ignore
        ios,
        // @ts-ignore
        android,
        // @ts-ignore
        androidIconName,
        // @ts-ignore
        iosIconName,
        ...rest
      } = props;
      return /* @__PURE__ */_jsx(_Icon, {
        ...rest,
        ref: forwardedRef
      });
    });
  MenuItemIcon.displayName = ITEM_ICON;
  var CHECKBOX_ITEM_NAME = "MenuCheckboxItem",
    MenuCheckboxItem = _Item.styleable(function (props, forwardedRef) {
      var {
        checked = !1,
        onCheckedChange,
        scope = MENU_CONTEXT,
        // filter out native-only props
        // @ts-ignore - native menu value state
        value,
        // @ts-ignore - native menu value change handler
        onValueChange,
        ...checkboxItemProps
      } = props;
      return /* @__PURE__ */_jsx(ItemIndicatorProvider, {
        scope,
        checked,
        children: /* @__PURE__ */_jsx(MenuItem, {
          componentName: CHECKBOX_ITEM_NAME,
          role: isWeb ? "menuitemcheckbox" : "menuitem",
          "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
          ...checkboxItemProps,
          scope,
          ref: forwardedRef,
          "data-state": getCheckedState(checked),
          onSelect: composeEventHandlers(checkboxItemProps.onSelect, function () {
            return onCheckedChange?.(isIndeterminate(checked) ? !0 : !checked);
          }, {
            checkDefaultPrevented: !1
          })
        })
      });
    });
  MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
  var RADIO_GROUP_NAME = "MenuRadioGroup",
    {
      Provider: RadioGroupProvider,
      useStyledContext: useRadioGroupContext
    } = createStyledContext(),
    MenuRadioGroup = _MenuGroup.styleable(function (props, forwardedRef) {
      var {
          value,
          onValueChange,
          scope = MENU_CONTEXT,
          ...groupProps
        } = props,
        handleValueChange = useCallbackRef(onValueChange);
      return /* @__PURE__ */_jsx(RadioGroupProvider, {
        scope,
        value,
        onValueChange: handleValueChange,
        children: /* @__PURE__ */_jsx(_MenuGroup, {
          componentName: RADIO_GROUP_NAME,
          ...groupProps,
          ref: forwardedRef
        })
      });
    });
  MenuRadioGroup.displayName = RADIO_GROUP_NAME;
  var RADIO_ITEM_NAME = "MenuRadioItem",
    MenuRadioItem = _Item.styleable(function (props, forwardedRef) {
      var {
          value,
          scope = MENU_CONTEXT,
          ...radioItemProps
        } = props,
        context = useRadioGroupContext(scope),
        checked = value === context.value;
      return /* @__PURE__ */_jsx(ItemIndicatorProvider, {
        scope,
        checked,
        children: /* @__PURE__ */_jsx(MenuItem, {
          componentName: RADIO_ITEM_NAME,
          ...radioItemProps,
          scope,
          "aria-checked": checked,
          ref: forwardedRef,
          role: isWeb ? "menuitemradio" : "menuitem",
          "data-state": getCheckedState(checked),
          onSelect: composeEventHandlers(radioItemProps.onSelect, function () {
            var _context_onValueChange;
            return (_context_onValueChange = context.onValueChange) === null || _context_onValueChange === void 0 ? void 0 : _context_onValueChange.call(context, value);
          }, {
            checkDefaultPrevented: !1
          })
        })
      });
    });
  MenuRadioItem.displayName = RADIO_ITEM_NAME;
  var ITEM_INDICATOR_NAME = "MenuItemIndicator",
    {
      Provider: ItemIndicatorProvider,
      useStyledContext: useItemIndicatorContext
    } = createStyledContext(),
    MenuItemIndicator = _Indicator.styleable(function (props, forwardedRef) {
      var {
          scope = MENU_CONTEXT,
          forceMount,
          ...itemIndicatorProps
        } = props,
        indicatorContext = useItemIndicatorContext(scope);
      return /* @__PURE__ */_jsx(Presence, {
        children: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === !0 ? /* @__PURE__ */_jsx(_Indicator, {
          componentName: ITEM_INDICATOR_NAME,
          render: "span",
          ...itemIndicatorProps,
          ref: forwardedRef,
          "data-state": getCheckedState(indicatorContext.checked)
        }) : null
      });
    });
  MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
  var MenuArrow = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
      var {
        scope = MENU_CONTEXT,
        unstyled = process.env.TAMAGUI_HEADLESS === "1",
        ...rest
      } = props;
      return /* @__PURE__ */_jsx(PopperPrimitive.PopperArrow, {
        scope,
        componentName: "PopperArrow",
        unstyled,
        ...(!unstyled && {
          backgroundColor: "$background"
        }),
        ...rest,
        ref: forwardedRef
      });
    }),
    SUB_NAME = "MenuSub",
    {
      Provider: MenuSubProvider,
      useStyledContext: useMenuSubContext
    } = createStyledContext(),
    MenuSub = function (props) {
      var _parentPopperContext_placement,
        isTouchDevice = useIsTouchDevice(),
        {
          scope = MENU_CONTEXT
        } = props,
        rootContext = useMenuRootContext(scope),
        parentPopperContext = PopperPrimitive.usePopperContext(scope),
        parentSide = (_parentPopperContext_placement = parentPopperContext.placement) === null || _parentPopperContext_placement === void 0 ? void 0 : _parentPopperContext_placement.split("-")[0],
        isNestedSubmenu = parentSide === "left" || parentSide === "right",
        defaultPlacement = isTouchDevice ? "bottom" : isNestedSubmenu ? `${parentSide}-start` : rootContext.dir === "rtl" ? "left-start" : "right-start",
        {
          children,
          open = !1,
          onOpenChange,
          allowFlip: allowFlipProp = {
            padding: 10
          },
          stayInFrame = {
            padding: 10
          },
          placement = defaultPlacement,
          ...rest
        } = props,
        allowFlip = React.useMemo(function () {
          if (!isNestedSubmenu || typeof allowFlipProp == "boolean" || allowFlipProp.fallbackPlacements) return allowFlipProp;
          var side = placement.split("-")[0],
            align = placement.split("-")[1] || "start",
            otherAlign = align === "start" ? "end" : "start";
          if (side === "left" || side === "right") {
            var oppositeSide = side === "right" ? "left" : "right";
            return {
              ...((typeof allowFlipProp > "u" ? "undefined" : _type_of(allowFlipProp)) === "object" ? allowFlipProp : {}),
              fallbackPlacements: [`${side}-${otherAlign}`, `${oppositeSide}-${align}`, `${oppositeSide}-${otherAlign}`]
            };
          }
          return allowFlipProp;
        }, [isNestedSubmenu, allowFlipProp, placement]),
        parentMenuContext = useMenuContext(scope),
        [trigger, setTrigger] = React.useState(null),
        [content, setContent] = React.useState(null),
        handleOpenChange = useCallbackRef(onOpenChange);
      return React.useEffect(function () {
        return parentMenuContext.open === !1 && handleOpenChange(!1), function () {
          return handleOpenChange(!1);
        };
      }, [parentMenuContext.open, handleOpenChange]), /* @__PURE__ */_jsx(PopperPrimitive.Popper, {
        open,
        placement,
        allowFlip,
        stayInFrame,
        ...rest,
        scope,
        children: /* @__PURE__ */_jsx(MenuProvider, {
          scope,
          open,
          onOpenChange: handleOpenChange,
          content,
          onContentChange: setContent,
          children: /* @__PURE__ */_jsx(MenuSubProvider, {
            scope,
            contentId: useId(),
            triggerId: useId(),
            trigger,
            onTriggerChange: setTrigger,
            children
          })
        })
      });
    };
  MenuSub.displayName = SUB_NAME;
  var SUB_TRIGGER_NAME = "MenuSubTrigger",
    MenuSubTrigger = /* @__PURE__ */React.forwardRef(function (props, forwardedRef) {
      var scope = props.scope || MENU_CONTEXT,
        context = useMenuContext(scope),
        rootContext = useMenuRootContext(scope),
        subContext = useMenuSubContext(scope),
        contentContext = useMenuContentContext(scope),
        popperContext = PopperPrimitive.usePopperContext(scope),
        openTimerRef = React.useRef(null),
        {
          pointerGraceTimerRef,
          onPointerGraceIntentChange
        } = contentContext,
        effectiveDir = rootContext.dir,
        clearOpenTimer = React.useCallback(function () {
          openTimerRef.current && window.clearTimeout(openTimerRef.current), openTimerRef.current = null;
        }, []);
      return React.useEffect(function () {
        return clearOpenTimer;
      }, [clearOpenTimer]), React.useEffect(function () {
        var pointerGraceTimer = pointerGraceTimerRef.current;
        return function () {
          window.clearTimeout(pointerGraceTimer), onPointerGraceIntentChange(null);
        };
      }, [pointerGraceTimerRef, onPointerGraceIntentChange]), /* @__PURE__ */_jsx(MenuAnchor, {
        componentName: SUB_TRIGGER_NAME,
        asChild: "except-style",
        scope,
        children: /* @__PURE__ */_jsx(MenuItemImpl, {
          id: subContext.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": context.open,
          "aria-controls": subContext.contentId,
          "data-state": getOpenState(context.open),
          outlineStyle: "none",
          ...props,
          ref: composeRefs(forwardedRef, subContext.onTriggerChange),
          // This is redundant for mouse users but we cannot determine pointer type from
          // click event and we cannot use pointerup event (see git history for reasons why)
          onPress: function (event) {
            var _props_onPress;
            (_props_onPress = props.onPress) === null || _props_onPress === void 0 || _props_onPress.call(props, event), !(props.disabled || event.defaultPrevented) && (isWeb && event.currentTarget.focus(), context.open || context.onOpenChange(!0));
          },
          onPointerMove: composeEventHandlers(props.onPointerMove,
          // @ts-ignore
          whenMouse(function (event) {
            contentContext.onItemEnter(event), !event.defaultPrevented && !props.disabled && !context.open && !openTimerRef.current && (contentContext.onPointerGraceIntentChange(null), openTimerRef.current = window.setTimeout(function () {
              context.onOpenChange(!0), clearOpenTimer();
            }, 100));
          })),
          onPointerLeave: composeEventHandlers(props.onPointerLeave, function (eventIn) {
            var _context_content,
              event = eventIn;
            clearOpenTimer();
            var contentRect = (_context_content = context.content) === null || _context_content === void 0 ? void 0 : _context_content.getBoundingClientRect();
            if (contentRect) {
              var _contentEl_dataset,
                _sideEl_dataset,
                contentEl = context.content,
                sideEl = !(contentEl == null || (_contentEl_dataset = contentEl.dataset) === null || _contentEl_dataset === void 0) && _contentEl_dataset.side ? contentEl : contentEl?.querySelector("[data-side]"),
                side = (sideEl == null || (_sideEl_dataset = sideEl.dataset) === null || _sideEl_dataset === void 0 ? void 0 : _sideEl_dataset.side) || "right",
                rightSide = side === "right",
                bleed = rightSide ? -5 : 5,
                contentNearEdge = contentRect[rightSide ? "left" : "right"],
                contentFarEdge = contentRect[rightSide ? "right" : "left"],
                polygon = {
                  area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  {
                    x: event.clientX + bleed,
                    y: event.clientY
                  }, {
                    x: contentNearEdge,
                    y: contentRect.top
                  }, {
                    x: contentFarEdge,
                    y: contentRect.top
                  }, {
                    x: contentFarEdge,
                    y: contentRect.bottom
                  }, {
                    x: contentNearEdge,
                    y: contentRect.bottom
                  }],
                  side
                };
              contentContext.onPointerGraceIntentChange(polygon), window.clearTimeout(pointerGraceTimerRef.current), pointerGraceTimerRef.current = window.setTimeout(function () {
                return contentContext.onPointerGraceIntentChange(null);
              }, 300);
            } else if (isWeb && subContext.trigger) {
              var triggerEl = subContext.trigger,
                triggerRect = triggerEl?.getBoundingClientRect();
              if (triggerRect) {
                var _popperContext_placement,
                  placementSide = (_popperContext_placement = popperContext.placement) === null || _popperContext_placement === void 0 ? void 0 : _popperContext_placement.split("-")[0],
                  side1 = placementSide === "left" || placementSide === "right" ? placementSide : rootContext.dir === "rtl" ? "left" : "right",
                  rightSide1 = side1 === "right",
                  bleed1 = rightSide1 ? -5 : 5,
                  nearEdge = rightSide1 ? triggerRect.right + 4 : triggerRect.left - 4,
                  farEdge = rightSide1 ? nearEdge + 200 : nearEdge - 200,
                  polygon1 = {
                    area: [{
                      x: event.clientX + bleed1,
                      y: event.clientY
                    }, {
                      x: nearEdge,
                      y: triggerRect.top - 50
                    }, {
                      x: farEdge,
                      y: triggerRect.top - 50
                    }, {
                      x: farEdge,
                      y: triggerRect.bottom + 50
                    }, {
                      x: nearEdge,
                      y: triggerRect.bottom + 50
                    }],
                    side: side1
                  };
                contentContext.onPointerGraceIntentChange(polygon1), window.clearTimeout(pointerGraceTimerRef.current), pointerGraceTimerRef.current = window.setTimeout(function () {
                  return contentContext.onPointerGraceIntentChange(null);
                }, 300);
              }
            } else {
              if (contentContext.onTriggerLeave(event), event.defaultPrevented) return;
              contentContext.onPointerGraceIntentChange(null);
            }
          }),
          ...(isWeb ? {
            onKeyDown: composeEventHandlers(props.onKeyDown, function (event) {
              var isTypingAhead = contentContext.searchRef.current !== "";
              if (!(props.disabled || isTypingAhead && event.key === " ")) {
                var willOpen = SUB_OPEN_KEYS[effectiveDir].includes(event.key);
                if (willOpen) {
                  var _popperContext_refs, _context_content;
                  if (context.open && context.content) {
                    var _contentEl_querySelector,
                      contentEl = context.content,
                      firstItem = (_contentEl_querySelector = contentEl.querySelector) === null || _contentEl_querySelector === void 0 ? void 0 : _contentEl_querySelector.call(contentEl, '[role="menuitem"]:not([data-disabled])');
                    if (firstItem) {
                      firstItem.focus({
                        focusVisible: !0
                      }), event.preventDefault();
                      return;
                    }
                  }
                  var triggerEl = event.currentTarget;
                  (_popperContext_refs = popperContext.refs) === null || _popperContext_refs === void 0 || _popperContext_refs.setReference(triggerEl), context.onOpenChange(!0), requestAnimationFrame(function () {
                    var _popperContext_update;
                    (_popperContext_update = popperContext.update) === null || _popperContext_update === void 0 || _popperContext_update.call(popperContext);
                  }), (_context_content = context.content) === null || _context_content === void 0 || _context_content.focus({
                    focusVisible: !0
                  }), event.preventDefault();
                }
              }
            })
          } : null)
        })
      });
    });
  MenuSubTrigger.displayName = SUB_TRIGGER_NAME;
  var SUB_CONTENT_NAME = "MenuSubContent",
    MenuSubContentFrame = styled(PopperPrimitive.PopperContentFrame, {
      name: SUB_CONTENT_NAME
    }),
    MenuSubContent = MenuSubContentFrame.styleable(function (props, forwardedRef) {
      var _popperContext_placement,
        scope = props.scope || MENU_CONTEXT,
        portalContext = usePortalContext(scope),
        {
          forceMount = portalContext.forceMount,
          ...subContentProps
        } = props,
        context = useMenuContext(scope),
        rootContext = useMenuRootContext(scope),
        subContext = useMenuSubContext(scope),
        popperContext = PopperPrimitive.usePopperContext(scope),
        ref = React.useRef(null),
        composedRefs = useComposedRefs(forwardedRef, ref),
        placementSide = (_popperContext_placement = popperContext.placement) === null || _popperContext_placement === void 0 ? void 0 : _popperContext_placement.split("-")[0],
        dataSide = placementSide === "left" || placementSide === "right" ? placementSide : rootContext.dir === "rtl" ? "left" : "right",
        effectiveDir = rootContext.dir;
      return /* @__PURE__ */_jsx(Collection.Provider, {
        scope,
        children: /* @__PURE__ */_jsx(Collection.Slot, {
          scope,
          children: /* @__PURE__ */_jsx(MenuContentImpl, {
            id: subContext.contentId,
            "aria-labelledby": subContext.triggerId,
            ...subContentProps,
            ref: composedRefs,
            "data-side": dataSide,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: function (event) {
              if (rootContext.isUsingKeyboardRef.current) {
                var _root_querySelector,
                  _this,
                  root = ref.current,
                  content = root == null || (_root_querySelector = root.querySelector) === null || _root_querySelector === void 0 ? void 0 : _root_querySelector.call(root, "[data-tamagui-menu-content]");
                (_this = content || root) === null || _this === void 0 || _this.focus({
                  preventScroll: !0
                });
              }
              event.preventDefault();
            },
            // The menu might close because of focusing another menu item in the parent menu. We
            // don't want it to refocus the trigger in that case so we handle trigger focus ourselves.
            onCloseAutoFocus: function (event) {
              return event.preventDefault();
            },
            onFocusOutside: composeEventHandlers(props.onFocusOutside, function (event) {
              event.target !== subContext.trigger && context.onOpenChange(!1);
            }),
            onEscapeKeyDown: composeEventHandlers(props.onEscapeKeyDown, function (event) {
              var _subContext_trigger;
              context.onOpenChange(!1), (_subContext_trigger = subContext.trigger) === null || _subContext_trigger === void 0 || _subContext_trigger.focus({
                focusVisible: !0
              }), event.preventDefault();
            }),
            ...(isWeb ? {
              onKeyDown: composeEventHandlers(props.onKeyDown, function (event) {
                var isKeyDownInside = event.currentTarget.contains(event.target),
                  isCloseKey = SUB_CLOSE_KEYS[effectiveDir].includes(event.key);
                if (isKeyDownInside && isCloseKey) {
                  var _subContext_trigger;
                  context.onOpenChange(!1), (_subContext_trigger = subContext.trigger) === null || _subContext_trigger === void 0 || _subContext_trigger.focus({
                    focusVisible: !0
                  }), event.preventDefault();
                }
              })
            } : null)
          })
        })
      });
    });
  MenuSubContent.displayName = SUB_CONTENT_NAME;
  var Anchor = MenuAnchor,
    Portal = MenuPortal,
    Content = MenuContent,
    Group = _MenuGroup.styleable(function (props, ref) {
      return /* @__PURE__ */_jsx(_MenuGroup, {
        ...props,
        ref
      });
    });
  Group.displayName = "MenuGroup";
  var Label = _Label.styleable(function (props, ref) {
    return /* @__PURE__ */_jsx(_Label, {
      ...props,
      ref
    });
  });
  Label.displayName = "MenuLabel";
  var Item = MenuItem,
    CheckboxItem = MenuCheckboxItem,
    RadioGroup = MenuRadioGroup,
    RadioItem = MenuRadioItem,
    ItemIndicator = MenuItemIndicator,
    Separator = _Separator.styleable(function (props, ref) {
      return /* @__PURE__ */_jsx(_Separator, {
        ...props,
        ref
      });
    });
  Separator.displayName = "MenuSeparator";
  var Arrow = MenuArrow,
    Sub = MenuSub,
    SubTrigger = MenuSubTrigger,
    SubContent = MenuSubContent,
    ItemTitle = MenuItemTitle,
    ItemSubtitle = MenuItemSubTitle,
    ItemImage = MenuItemImage,
    ItemIcon = MenuItemIcon,
    Menu = withStaticProperties(MenuComp, {
      Anchor,
      Portal,
      Content,
      Group,
      Label,
      Item,
      CheckboxItem,
      RadioGroup,
      RadioItem,
      ItemIndicator,
      Separator,
      Arrow,
      Sub,
      SubTrigger,
      SubContent,
      ItemTitle,
      ItemSubtitle,
      ItemImage,
      ItemIcon
    });
  return {
    Menu
  };
}
function getOpenState(open) {
  return open ? "open" : "closed";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getCheckedState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function focusFirst(candidates, options) {
  var PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement,
    _iteratorNormalCompletion = !0,
    _didIteratorError = !1,
    _iteratorError = void 0;
  try {
    for (var _iterator = candidates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
      var candidate = _step.value;
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT || (candidate.focus({
        preventScroll: !0,
        focusVisible: options?.focusVisible
      }), document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)) return;
    }
  } catch (err) {
    _didIteratorError = !0, _iteratorError = err;
  } finally {
    try {
      !_iteratorNormalCompletion && _iterator.return != null && _iterator.return();
    } finally {
      if (_didIteratorError) throw _iteratorError;
    }
  }
}
function wrapArray(array, startIndex) {
  return array.map(function (_, index) {
    return array[(startIndex + index) % array.length];
  });
}
function getNextMatch(values, search, currentMatch) {
  var isRepeated = search.length > 1 && Array.from(search).every(function (char) {
      return char === search[0];
    }),
    normalizedSearch = isRepeated ? search[0] : search,
    currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1,
    wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0)),
    excludeCurrentMatch = normalizedSearch.length === 1;
  excludeCurrentMatch && (wrappedValues = wrappedValues.filter(function (v) {
    return v !== currentMatch;
  }));
  var nextMatch = wrappedValues.find(function (value) {
    return value.toLowerCase().startsWith(normalizedSearch.toLowerCase());
  });
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function isPointInPolygon(point, polygon) {
  for (var {
      x,
      y
    } = point, inside = !1, i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    var xi = polygon[i].x,
      yi = polygon[i].y,
      xj = polygon[j].x,
      yj = polygon[j].y,
      intersect = yi > y != yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    intersect && (inside = !inside);
  }
  return inside;
}
function isPointerInGraceArea(event, area) {
  if (!area) return !1;
  var cursorPos = {
    x: event.clientX,
    y: event.clientY
  };
  return isPointInPolygon(cursorPos, area);
}
export { createBaseMenu };
//# sourceMappingURL=createBaseMenu.native.js.map
