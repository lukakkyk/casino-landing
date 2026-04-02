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
import { MenuPredefined } from "./MenuPredefined.mjs";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function whenMouse(handler) {
  return event => event.pointerType === "mouse" ? handler(event) : void 0;
}
const SELECTION_KEYS = ["Enter", " "],
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
function createBaseMenu({
  Item: _Item = MenuPredefined.MenuItem,
  Title: _Title = MenuPredefined.Title,
  SubTitle: _SubTitle = MenuPredefined.SubTitle,
  Image: _Image = MenuPredefined.MenuImage,
  Icon: _Icon = MenuPredefined.MenuIcon,
  Indicator: _Indicator = MenuPredefined.MenuIndicator,
  Separator: _Separator = MenuPredefined.MenuSeparator,
  MenuGroup: _MenuGroup = MenuPredefined.MenuGroup,
  Label: _Label = MenuPredefined.MenuLabel
}) {
  const MenuComp = props => {
      const direction = useDirection(props.dir),
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
      return isWeb && React.useEffect(() => {
        const handleKeyDown = () => {
            isUsingKeyboardRef.current = !0, document.addEventListener("pointerdown", handlePointer, {
              capture: !0,
              once: !0
            }), document.addEventListener("pointermove", handlePointer, {
              capture: !0,
              once: !0
            });
          },
          handlePointer = () => isUsingKeyboardRef.current = !1;
        return document.addEventListener("keydown", handleKeyDown, {
          capture: !0
        }), () => {
          document.removeEventListener("keydown", handleKeyDown, {
            capture: !0
          }), document.removeEventListener("pointerdown", handlePointer, {
            capture: !0
          }), document.removeEventListener("pointermove", handlePointer, {
            capture: !0
          });
        };
      }, []), /* @__PURE__ */jsx(PopperPrimitive.Popper, {
        scope,
        open,
        placement,
        allowFlip,
        stayInFrame,
        resize,
        offset,
        ...rest,
        children: /* @__PURE__ */jsx(MenuProvider, {
          scope,
          open,
          onOpenChange: handleOpenChange,
          content,
          onContentChange: setContent,
          children: /* @__PURE__ */jsx(MenuRootProvider, {
            scope,
            open,
            onClose: React.useCallback(() => handleOpenChange(!1), [handleOpenChange]),
            isUsingKeyboardRef,
            dir: direction,
            modal,
            children: /* @__PURE__ */jsx(MenuSubProvider, {
              scope,
              children
            })
          })
        })
      });
    },
    RepropagateMenuAndMenuRootProvider = props => {
      const {
        scope = MENU_CONTEXT,
        menuContext,
        rootContext,
        popperContext,
        menuSubContext,
        children
      } = props;
      return /* @__PURE__ */jsx(PopperPrimitive.PopperProvider, {
        ...popperContext,
        scope,
        children: /* @__PURE__ */jsx(MenuProvider, {
          scope,
          ...menuContext,
          children: /* @__PURE__ */jsx(MenuRootProvider, {
            scope,
            ...rootContext,
            children: menuSubContext ? /* @__PURE__ */jsx(MenuSubProvider, {
              scope,
              ...menuSubContext,
              children
            }) : children
          })
        })
      });
    };
  MenuComp.displayName = MENU_NAME;
  const ANCHOR_NAME = "MenuAnchor",
    MenuAnchor = props => /* @__PURE__ */jsx(PopperPrimitive.PopperAnchor, {
      scope: MENU_CONTEXT,
      ...props
    });
  MenuAnchor.displayName = ANCHOR_NAME;
  const PORTAL_NAME = "MenuPortal",
    {
      Provider: PortalProvider,
      useStyledContext: usePortalContext
    } = createStyledContext(void 0, "Portal"),
    MenuPortal = props => {
      const {
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
        themedChildren = /* @__PURE__ */jsx(Theme, {
          forceClassName: !0,
          name: themeName,
          children
        }),
        content = needsPortalRepropagation() ? /* @__PURE__ */jsx(RepropagateMenuAndMenuRootProvider, {
          menuContext,
          rootContext,
          popperContext,
          menuSubContext,
          scope,
          children: themedChildren
        }) : themedChildren,
        isPresent = forceMount || rootContext.open && menuContext.open;
      return /* @__PURE__ */jsx(Animate, {
        type: "presence",
        present: isPresent,
        children: /* @__PURE__ */jsx(PortalPrimitive, {
          stackZIndex: !0,
          children: /* @__PURE__ */jsx(Fragment, {
            children: /* @__PURE__ */jsx(PortalProvider, {
              scope,
              forceMount,
              children: /* @__PURE__ */jsxs(View, {
                zIndex: zIndex || 100,
                inset: 0,
                position: "absolute",
                children: [!!menuContext.open && !isWeb && /* @__PURE__ */jsx(View, {
                  inset: 0,
                  position: "absolute",
                  onPress: () => menuContext.onOpenChange(!menuContext.open)
                }), content]
              })
            })
          })
        })
      });
    };
  MenuPortal.displayName = PORTAL_NAME;
  const CONTENT_NAME = "MenuContent",
    {
      Provider: MenuContentProvider,
      useStyledContext: useMenuContentContext
    } = createStyledContext(),
    MenuContent = styled(PopperPrimitive.PopperContentFrame, {
      name: CONTENT_NAME
    }).styleable((props, forwardedRef) => {
      const scope = props.scope || MENU_CONTEXT,
        portalContext = usePortalContext(scope),
        {
          forceMount = portalContext.forceMount,
          ...contentProps
        } = props,
        rootContext = useMenuRootContext(scope);
      return /* @__PURE__ */jsx(Collection.Provider, {
        scope,
        children: /* @__PURE__ */jsx(Collection.Slot, {
          scope,
          children: rootContext.modal ? /* @__PURE__ */jsx(MenuRootContentModal, {
            ...contentProps,
            ref: forwardedRef
          }) : /* @__PURE__ */jsx(MenuRootContentNonModal, {
            ...contentProps,
            ref: forwardedRef
          })
        })
      });
    }),
    MenuRootContentModal = React.forwardRef((props, forwardedRef) => {
      const scope = props.scope || MENU_CONTEXT,
        context = useMenuContext(scope),
        ref = React.useRef(null),
        composedRefs = useComposedRefs(forwardedRef, ref);
      return /* @__PURE__ */jsx(MenuContentImpl, {
        ...props,
        scope,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: !1,
        onFocusOutside: composeEventHandlers(props.onFocusOutside, event => event.preventDefault(), {
          checkDefaultPrevented: !1
        }),
        onDismiss: () => context.onOpenChange(!1)
      });
    }),
    MenuRootContentNonModal = React.forwardRef((props, forwardedRef) => {
      const scope = props.scope || MENU_CONTEXT,
        context = useMenuContext(scope);
      return /* @__PURE__ */jsx(MenuContentImpl, {
        ...props,
        scope,
        ref: forwardedRef,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => context.onOpenChange(!1)
      });
    }),
    MenuContentImpl = React.forwardRef((props, forwardedRef) => {
      const {
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
        handleTypeaheadSearch = key => {
          const search = searchRef.current + key,
            items = getItems().filter(item => !item.disabled),
            currentItem = document.activeElement,
            currentMatch = items.find(item => item.ref.current === currentItem)?.textValue,
            values = items.map(item => item.textValue),
            nextMatch = getNextMatch(values, search, currentMatch),
            newItem = items.find(item => item.textValue === nextMatch)?.ref.current;
          (function updateSearch(value) {
            searchRef.current = value, clearTimeout(timerRef.current), value !== "" && (timerRef.current = setTimeout(() => updateSearch(""), 1e3));
          })(search), newItem && setTimeout(() => newItem.focus());
        };
      React.useEffect(() => () => clearTimeout(timerRef.current), []), React.useEffect(() => {
        if (!isWeb || !context.open) return;
        const frame = requestAnimationFrame(() => {
          const el = contentRef.current?.querySelector("[data-tamagui-menu-content]");
          el && (focusableContentRef.current = el);
        });
        return () => cancelAnimationFrame(frame);
      }, [context.open]), React.useEffect(() => {
        if (!isWeb || disableDismissOnScroll || !context.open) return;
        const handleScroll = event => {
          const target = event.target;
          contentRef.current?.contains(target) || onDismiss?.();
        };
        return window.addEventListener("scroll", handleScroll, {
          capture: !0,
          passive: !0
        }), () => {
          window.removeEventListener("scroll", handleScroll, {
            capture: !0
          });
        };
      }, [disableDismissOnScroll, context.open, onDismiss]), isWeb && useFocusGuards();
      const isPointerMovingToSubmenu = React.useCallback(event => {
          const isMovingTowards = pointerDirRef.current === pointerGraceIntentRef.current?.side,
            inArea = isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
          return isMovingTowards && inArea;
        }, []),
        content = /* @__PURE__ */jsx(PopperPrimitive.PopperContent, {
          role: "menu",
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
          dir: rootContext.dir,
          scope: scope || MENU_CONTEXT,
          ...contentProps,
          ref: composedRefs,
          className: contentProps.transition ? void 0 : contentProps.className,
          ...(isWeb ? {
            onKeyDown: composeEventHandlers(contentProps.onKeyDown, event => {
              const isKeyDownInside = event.target.closest("[data-tamagui-menu-content]") === event.currentTarget,
                isModifierKey = event.ctrlKey || event.altKey || event.metaKey,
                isCharacterKey = event.key.length === 1;
              isKeyDownInside && (event.key === "Tab" && event.preventDefault(), !isModifierKey && isCharacterKey && handleTypeaheadSearch(event.key));
              const isOnContentFrame = event.target.hasAttribute("data-tamagui-menu-content");
              if (!isKeyDownInside || !isOnContentFrame || !FIRST_LAST_KEYS.includes(event.key)) return;
              event.preventDefault();
              const candidateNodes = getItems().filter(item => !item.disabled).map(item => item.ref.current);
              LAST_KEYS.includes(event.key) && candidateNodes.reverse(), focusFirst(candidateNodes, {
                focusVisible: !0
              });
            }),
            // TODO
            // @ts-ignore
            onBlur: composeEventHandlers(props.onBlur, event => {
              event.currentTarget?.contains(event.target) || (clearTimeout(timerRef.current), searchRef.current = "");
            }),
            // TODO
            onPointerMove: composeEventHandlers(props.onPointerMove, event => {
              if (event.pointerType !== "mouse") return;
              const target = event.target,
                pointerXHasChanged = lastPointerXRef.current !== event.clientX;
              if (event.currentTarget?.contains(target) && pointerXHasChanged) {
                const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
                pointerDirRef.current = newDir, lastPointerXRef.current = event.clientX;
              }
            })
          } : {})
        });
      return /* @__PURE__ */jsx(MenuContentProvider, {
        scope,
        searchRef,
        onItemEnter: React.useCallback(event => {
          isPointerMovingToSubmenu(event) && event.preventDefault();
        }, [isPointerMovingToSubmenu]),
        onItemLeave: React.useCallback(event => {
          isPointerMovingToSubmenu(event) || (focusableContentRef.current?.focus(), setCurrentItemId(null));
        }, [isPointerMovingToSubmenu]),
        onTriggerLeave: React.useCallback(event => {
          isPointerMovingToSubmenu(event) && event.preventDefault();
        }, [isPointerMovingToSubmenu]),
        pointerGraceTimerRef,
        onPointerGraceIntentChange: React.useCallback(intent => {
          pointerGraceIntentRef.current = intent;
        }, []),
        children: /* @__PURE__ */jsx(RemoveScroll, {
          enabled: disableOutsideScroll,
          children: /* @__PURE__ */jsx(FocusScope, {
            asChild: !1,
            trapped: trapFocus,
            onMountAutoFocus: composeEventHandlers(onOpenAutoFocus, event => {
              event.preventDefault(), document.querySelector("[data-tamagui-menu-content]")?.focus({
                preventScroll: !0
              });
            }),
            onUnmountAutoFocus: onCloseAutoFocus,
            children: /* @__PURE__ */jsx(DismissableLayer, {
              disableOutsidePointerEvents,
              onEscapeKeyDown,
              onPointerDownOutside,
              onFocusOutside,
              onInteractOutside,
              onDismiss,
              asChild: !0,
              children: /* @__PURE__ */jsx(RovingFocusGroup, {
                asChild: !0,
                __scopeRovingFocusGroup: scope || MENU_CONTEXT,
                dir: rootContext.dir,
                orientation: "vertical",
                loop,
                currentTabStopId: currentItemId,
                onCurrentTabStopIdChange: setCurrentItemId,
                onEntryFocus: composeEventHandlers(onEntryFocus, event => {
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
  const ITEM_NAME = "MenuItem",
    ITEM_SELECT = "menu.itemSelect",
    MenuItem = _Item.styleable((props, forwardedRef) => {
      const {
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
        handleSelect = () => {
          const menuItem = ref.current;
          if (!disabled && menuItem) if (isWeb) {
            const menuItemEl = menuItem,
              itemSelectEvent = new CustomEvent(ITEM_SELECT, {
                bubbles: !0,
                cancelable: !0
              });
            menuItemEl.addEventListener(ITEM_SELECT, event => onSelect?.(event), {
              once: !0
            }), dispatchDiscreteCustomEvent(menuItemEl, itemSelectEvent), itemSelectEvent.defaultPrevented || preventCloseOnSelect ? isPointerDownRef.current = !1 : rootContext.onClose();
          } else onSelect?.({
            target: menuItem
          }), isPointerDownRef.current = !1, preventCloseOnSelect || rootContext.onClose();
        },
        content = typeof children == "string" ? /* @__PURE__ */jsx(Text, {
          children
        }) : children;
      return /* @__PURE__ */jsx(MenuItemImpl, {
        outlineStyle: "none",
        ...itemProps,
        scope,
        ref: composedRefs,
        disabled,
        onPress: composeEventHandlers(props.onPress, handleSelect),
        onPointerDown: event => {
          props.onPointerDown?.(event), isPointerDownRef.current = !0;
        },
        onPointerUp: composeEventHandlers(props.onPointerUp, event => {
          isWeb && (isPointerDownRef.current || event.currentTarget?.click());
        }),
        ...(isWeb ? {
          onKeyDown: composeEventHandlers(props.onKeyDown, event => {
            const isTypingAhead = contentContext.searchRef.current !== "";
            disabled || isTypingAhead && event.key === " " || SELECTION_KEYS.includes(event.key) && (event.currentTarget?.click(), event.preventDefault());
          })
        } : {}),
        children: content
      });
    }),
    MenuItemImpl = React.forwardRef((props, forwardedRef) => {
      const {
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
      return isWeb && React.useEffect(() => {
        const menuItem = ref.current;
        menuItem && setTextContent((menuItem.textContent ?? "").trim());
      }, [itemProps.children]), /* @__PURE__ */jsx(Collection.ItemSlot, {
        scope,
        disabled,
        textValue: textValue ?? textContent,
        children: /* @__PURE__ */jsx(RovingFocusGroup.Item, {
          asChild: !0,
          __scopeRovingFocusGroup: scope,
          focusable: !disabled,
          children: /* @__PURE__ */jsx(_Item, {
            unstyled,
            componentName: ITEM_NAME,
            role: "menuitem",
            "data-highlighted": isFocused ? "" : void 0,
            "aria-disabled": disabled || void 0,
            "data-disabled": disabled ? "" : void 0,
            ...itemProps,
            ref: composedRefs,
            onPointerMove: composeEventHandlers(props.onPointerMove, event => {
              event.pointerType === "mouse" && (disabled ? contentContext.onItemLeave(event) : (contentContext.onItemEnter(event), event.defaultPrevented || event.currentTarget.focus({
                preventScroll: !0,
                focusVisible: !1
              })));
            }),
            onPointerLeave: composeEventHandlers(props.onPointerLeave, event => {
              contentContext.onItemLeave(event);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => setIsFocused(!0)),
            onBlur: composeEventHandlers(props.onBlur, () => setIsFocused(!1))
          })
        })
      });
    });
  MenuItem.displayName = ITEM_NAME;
  const ITEM_TITLE_NAME = "MenuItemTitle",
    MenuItemTitle = _Title.styleable((props, forwardedRef) => /* @__PURE__ */jsx(_Title, {
      ...props,
      ref: forwardedRef
    }));
  MenuItemTitle.displayName = ITEM_TITLE_NAME;
  const ITEM_SUB_TITLE_NAME = "MenuItemSubTitle",
    MenuItemSubTitle = _SubTitle.styleable((props, forwardedRef) => /* @__PURE__ */jsx(_SubTitle, {
      ...props,
      ref: forwardedRef
    }));
  MenuItemSubTitle.displayName = ITEM_SUB_TITLE_NAME;
  const ITEM_IMAGE = "MenuItemImage",
    MenuItemImage = React.forwardRef((props, forwardedRef) => {
      const {
        // @ts-ignore - native menu ios config
        ios,
        // @ts-ignore
        androidIconName,
        // @ts-ignore
        iosIconName,
        ...rest
      } = props;
      return /* @__PURE__ */jsx(_Image, {
        ...rest,
        ref: forwardedRef
      });
    });
  MenuItemImage.displayName = ITEM_IMAGE;
  const ITEM_ICON = "MenuItemIcon",
    MenuItemIcon = _Icon.styleable((props, forwardedRef) => {
      const {
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
      return /* @__PURE__ */jsx(_Icon, {
        ...rest,
        ref: forwardedRef
      });
    });
  MenuItemIcon.displayName = ITEM_ICON;
  const CHECKBOX_ITEM_NAME = "MenuCheckboxItem",
    MenuCheckboxItem = _Item.styleable((props, forwardedRef) => {
      const {
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
      return /* @__PURE__ */jsx(ItemIndicatorProvider, {
        scope,
        checked,
        children: /* @__PURE__ */jsx(MenuItem, {
          componentName: CHECKBOX_ITEM_NAME,
          role: isWeb ? "menuitemcheckbox" : "menuitem",
          "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
          ...checkboxItemProps,
          scope,
          ref: forwardedRef,
          "data-state": getCheckedState(checked),
          onSelect: composeEventHandlers(checkboxItemProps.onSelect, () => onCheckedChange?.(isIndeterminate(checked) ? !0 : !checked), {
            checkDefaultPrevented: !1
          })
        })
      });
    });
  MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
  const RADIO_GROUP_NAME = "MenuRadioGroup",
    {
      Provider: RadioGroupProvider,
      useStyledContext: useRadioGroupContext
    } = createStyledContext(),
    MenuRadioGroup = _MenuGroup.styleable((props, forwardedRef) => {
      const {
          value,
          onValueChange,
          scope = MENU_CONTEXT,
          ...groupProps
        } = props,
        handleValueChange = useCallbackRef(onValueChange);
      return /* @__PURE__ */jsx(RadioGroupProvider, {
        scope,
        value,
        onValueChange: handleValueChange,
        children: /* @__PURE__ */jsx(_MenuGroup, {
          componentName: RADIO_GROUP_NAME,
          ...groupProps,
          ref: forwardedRef
        })
      });
    });
  MenuRadioGroup.displayName = RADIO_GROUP_NAME;
  const RADIO_ITEM_NAME = "MenuRadioItem",
    MenuRadioItem = _Item.styleable((props, forwardedRef) => {
      const {
          value,
          scope = MENU_CONTEXT,
          ...radioItemProps
        } = props,
        context = useRadioGroupContext(scope),
        checked = value === context.value;
      return /* @__PURE__ */jsx(ItemIndicatorProvider, {
        scope,
        checked,
        children: /* @__PURE__ */jsx(MenuItem, {
          componentName: RADIO_ITEM_NAME,
          ...radioItemProps,
          scope,
          "aria-checked": checked,
          ref: forwardedRef,
          role: isWeb ? "menuitemradio" : "menuitem",
          "data-state": getCheckedState(checked),
          onSelect: composeEventHandlers(radioItemProps.onSelect, () => context.onValueChange?.(value), {
            checkDefaultPrevented: !1
          })
        })
      });
    });
  MenuRadioItem.displayName = RADIO_ITEM_NAME;
  const ITEM_INDICATOR_NAME = "MenuItemIndicator",
    {
      Provider: ItemIndicatorProvider,
      useStyledContext: useItemIndicatorContext
    } = createStyledContext(),
    MenuItemIndicator = _Indicator.styleable((props, forwardedRef) => {
      const {
          scope = MENU_CONTEXT,
          forceMount,
          ...itemIndicatorProps
        } = props,
        indicatorContext = useItemIndicatorContext(scope);
      return /* @__PURE__ */jsx(Presence, {
        children: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === !0 ? /* @__PURE__ */jsx(_Indicator, {
          componentName: ITEM_INDICATOR_NAME,
          render: "span",
          ...itemIndicatorProps,
          ref: forwardedRef,
          "data-state": getCheckedState(indicatorContext.checked)
        }) : null
      });
    });
  MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
  const MenuArrow = React.forwardRef(function (props, forwardedRef) {
      const {
        scope = MENU_CONTEXT,
        unstyled = process.env.TAMAGUI_HEADLESS === "1",
        ...rest
      } = props;
      return /* @__PURE__ */jsx(PopperPrimitive.PopperArrow, {
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
    MenuSub = props => {
      const isTouchDevice = useIsTouchDevice(),
        {
          scope = MENU_CONTEXT
        } = props,
        rootContext = useMenuRootContext(scope),
        parentSide = PopperPrimitive.usePopperContext(scope).placement?.split("-")[0],
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
        allowFlip = React.useMemo(() => {
          if (!isNestedSubmenu || typeof allowFlipProp == "boolean" || allowFlipProp.fallbackPlacements) return allowFlipProp;
          const side = placement.split("-")[0],
            align = placement.split("-")[1] || "start",
            otherAlign = align === "start" ? "end" : "start";
          if (side === "left" || side === "right") {
            const oppositeSide = side === "right" ? "left" : "right";
            return {
              ...(typeof allowFlipProp == "object" ? allowFlipProp : {}),
              fallbackPlacements: [`${side}-${otherAlign}`, `${oppositeSide}-${align}`, `${oppositeSide}-${otherAlign}`]
            };
          }
          return allowFlipProp;
        }, [isNestedSubmenu, allowFlipProp, placement]),
        parentMenuContext = useMenuContext(scope),
        [trigger, setTrigger] = React.useState(null),
        [content, setContent] = React.useState(null),
        handleOpenChange = useCallbackRef(onOpenChange);
      return React.useEffect(() => (parentMenuContext.open === !1 && handleOpenChange(!1), () => handleOpenChange(!1)), [parentMenuContext.open, handleOpenChange]), /* @__PURE__ */jsx(PopperPrimitive.Popper, {
        open,
        placement,
        allowFlip,
        stayInFrame,
        ...rest,
        scope,
        children: /* @__PURE__ */jsx(MenuProvider, {
          scope,
          open,
          onOpenChange: handleOpenChange,
          content,
          onContentChange: setContent,
          children: /* @__PURE__ */jsx(MenuSubProvider, {
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
  const SUB_TRIGGER_NAME = "MenuSubTrigger",
    MenuSubTrigger = React.forwardRef((props, forwardedRef) => {
      const scope = props.scope || MENU_CONTEXT,
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
        clearOpenTimer = React.useCallback(() => {
          openTimerRef.current && window.clearTimeout(openTimerRef.current), openTimerRef.current = null;
        }, []);
      return React.useEffect(() => clearOpenTimer, [clearOpenTimer]), React.useEffect(() => {
        const pointerGraceTimer = pointerGraceTimerRef.current;
        return () => {
          window.clearTimeout(pointerGraceTimer), onPointerGraceIntentChange(null);
        };
      }, [pointerGraceTimerRef, onPointerGraceIntentChange]), /* @__PURE__ */jsx(MenuAnchor, {
        componentName: SUB_TRIGGER_NAME,
        asChild: "except-style",
        scope,
        children: /* @__PURE__ */jsx(MenuItemImpl, {
          id: subContext.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": context.open,
          "aria-controls": subContext.contentId,
          "data-state": getOpenState(context.open),
          outlineStyle: "none",
          ...props,
          ref: composeRefs(forwardedRef, subContext.onTriggerChange),
          onPress: event => {
            props.onPress?.(event), !(props.disabled || event.defaultPrevented) && (isWeb && event.currentTarget.focus(), context.open || context.onOpenChange(!0));
          },
          onPointerMove: composeEventHandlers(props.onPointerMove,
          // @ts-ignore
          whenMouse(event => {
            contentContext.onItemEnter(event), !event.defaultPrevented && !props.disabled && !context.open && !openTimerRef.current && (contentContext.onPointerGraceIntentChange(null), openTimerRef.current = window.setTimeout(() => {
              context.onOpenChange(!0), clearOpenTimer();
            }, 100));
          })),
          onPointerLeave: composeEventHandlers(props.onPointerLeave, eventIn => {
            const event = eventIn;
            clearOpenTimer();
            const contentRect = context.content?.getBoundingClientRect();
            if (contentRect) {
              const contentEl = context.content,
                side = (contentEl?.dataset?.side ? contentEl : contentEl?.querySelector("[data-side]"))?.dataset?.side || "right",
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
              contentContext.onPointerGraceIntentChange(polygon), window.clearTimeout(pointerGraceTimerRef.current), pointerGraceTimerRef.current = window.setTimeout(() => contentContext.onPointerGraceIntentChange(null), 300);
            } else if (isWeb && subContext.trigger) {
              const triggerRect = subContext.trigger?.getBoundingClientRect();
              if (triggerRect) {
                const placementSide = popperContext.placement?.split("-")[0],
                  side = placementSide === "left" || placementSide === "right" ? placementSide : rootContext.dir === "rtl" ? "left" : "right",
                  rightSide = side === "right",
                  bleed = rightSide ? -5 : 5,
                  nearEdge = rightSide ? triggerRect.right + 4 : triggerRect.left - 4,
                  farEdge = rightSide ? nearEdge + 200 : nearEdge - 200,
                  polygon = {
                    area: [{
                      x: event.clientX + bleed,
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
                    side
                  };
                contentContext.onPointerGraceIntentChange(polygon), window.clearTimeout(pointerGraceTimerRef.current), pointerGraceTimerRef.current = window.setTimeout(() => contentContext.onPointerGraceIntentChange(null), 300);
              }
            } else {
              if (contentContext.onTriggerLeave(event), event.defaultPrevented) return;
              contentContext.onPointerGraceIntentChange(null);
            }
          }),
          ...(isWeb ? {
            onKeyDown: composeEventHandlers(props.onKeyDown, event => {
              const isTypingAhead = contentContext.searchRef.current !== "";
              if (props.disabled || isTypingAhead && event.key === " ") return;
              if (SUB_OPEN_KEYS[effectiveDir].includes(event.key)) {
                if (context.open && context.content) {
                  const firstItem = context.content.querySelector?.('[role="menuitem"]:not([data-disabled])');
                  if (firstItem) {
                    firstItem.focus({
                      focusVisible: !0
                    }), event.preventDefault();
                    return;
                  }
                }
                const triggerEl = event.currentTarget;
                popperContext.refs?.setReference(triggerEl), context.onOpenChange(!0), requestAnimationFrame(() => {
                  popperContext.update?.();
                }), context.content?.focus({
                  focusVisible: !0
                }), event.preventDefault();
              }
            })
          } : null)
        })
      });
    });
  MenuSubTrigger.displayName = SUB_TRIGGER_NAME;
  const SUB_CONTENT_NAME = "MenuSubContent",
    MenuSubContent = styled(PopperPrimitive.PopperContentFrame, {
      name: SUB_CONTENT_NAME
    }).styleable((props, forwardedRef) => {
      const scope = props.scope || MENU_CONTEXT,
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
        placementSide = popperContext.placement?.split("-")[0],
        dataSide = placementSide === "left" || placementSide === "right" ? placementSide : rootContext.dir === "rtl" ? "left" : "right",
        effectiveDir = rootContext.dir;
      return /* @__PURE__ */jsx(Collection.Provider, {
        scope,
        children: /* @__PURE__ */jsx(Collection.Slot, {
          scope,
          children: /* @__PURE__ */jsx(MenuContentImpl, {
            id: subContext.contentId,
            "aria-labelledby": subContext.triggerId,
            ...subContentProps,
            ref: composedRefs,
            "data-side": dataSide,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: event => {
              if (rootContext.isUsingKeyboardRef.current) {
                const root = ref.current;
                (root?.querySelector?.("[data-tamagui-menu-content]") || root)?.focus({
                  preventScroll: !0
                });
              }
              event.preventDefault();
            },
            onCloseAutoFocus: event => event.preventDefault(),
            onFocusOutside: composeEventHandlers(props.onFocusOutside, event => {
              event.target !== subContext.trigger && context.onOpenChange(!1);
            }),
            onEscapeKeyDown: composeEventHandlers(props.onEscapeKeyDown, event => {
              context.onOpenChange(!1), subContext.trigger?.focus({
                focusVisible: !0
              }), event.preventDefault();
            }),
            ...(isWeb ? {
              onKeyDown: composeEventHandlers(props.onKeyDown, event => {
                const isKeyDownInside = event.currentTarget.contains(event.target),
                  isCloseKey = SUB_CLOSE_KEYS[effectiveDir].includes(event.key);
                isKeyDownInside && isCloseKey && (context.onOpenChange(!1), subContext.trigger?.focus({
                  focusVisible: !0
                }), event.preventDefault());
              })
            } : null)
          })
        })
      });
    });
  MenuSubContent.displayName = SUB_CONTENT_NAME;
  const Anchor = MenuAnchor,
    Portal = MenuPortal,
    Content = MenuContent,
    Group = _MenuGroup.styleable((props, ref) => /* @__PURE__ */jsx(_MenuGroup, {
      ...props,
      ref
    }));
  Group.displayName = "MenuGroup";
  const Label = _Label.styleable((props, ref) => /* @__PURE__ */jsx(_Label, {
    ...props,
    ref
  }));
  Label.displayName = "MenuLabel";
  const Item = MenuItem,
    CheckboxItem = MenuCheckboxItem,
    RadioGroup = MenuRadioGroup,
    RadioItem = MenuRadioItem,
    ItemIndicator = MenuItemIndicator,
    Separator = _Separator.styleable((props, ref) => /* @__PURE__ */jsx(_Separator, {
      ...props,
      ref
    }));
  return Separator.displayName = "MenuSeparator", {
    Menu: withStaticProperties(MenuComp, {
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
      Arrow: MenuArrow,
      Sub: MenuSub,
      SubTrigger: MenuSubTrigger,
      SubContent: MenuSubContent,
      ItemTitle: MenuItemTitle,
      ItemSubtitle: MenuItemSubTitle,
      ItemImage: MenuItemImage,
      ItemIcon: MenuItemIcon
    })
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
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) if (candidate === PREVIOUSLY_FOCUSED_ELEMENT || (candidate.focus({
    preventScroll: !0,
    focusVisible: options?.focusVisible
  }), document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)) return;
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
function getNextMatch(values, search, currentMatch) {
  const normalizedSearch = search.length > 1 && Array.from(search).every(char => char === search[0]) ? search[0] : search,
    currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
  normalizedSearch.length === 1 && (wrappedValues = wrappedValues.filter(v => v !== currentMatch));
  const nextMatch = wrappedValues.find(value => value.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function isPointInPolygon(point, polygon) {
  const {
    x,
    y
  } = point;
  let inside = !1;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x,
      yi = polygon[i].y,
      xj = polygon[j].x,
      yj = polygon[j].y;
    yi > y != yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi && (inside = !inside);
  }
  return inside;
}
function isPointerInGraceArea(event, area) {
  if (!area) return !1;
  const cursorPos = {
    x: event.clientX,
    y: event.clientY
  };
  return isPointInPolygon(cursorPos, area);
}
export { createBaseMenu };
//# sourceMappingURL=createBaseMenu.mjs.map
