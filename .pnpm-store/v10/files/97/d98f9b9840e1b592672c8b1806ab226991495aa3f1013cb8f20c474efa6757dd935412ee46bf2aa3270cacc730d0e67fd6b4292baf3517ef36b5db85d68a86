import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useEvent } from "@tamagui/use-event";
import { activeElement, enqueueFocus, findNonDisabledListIndex, getMinListIndex, getMaxListIndex, isHTMLElement, isIndexOutOfListBounds, isTypeableCombobox, isVirtualClick, isVirtualPointerEvent, stopEvent } from "./utils.native.js";
var ARROW_UP = "ArrowUp",
  ARROW_DOWN = "ArrowDown",
  ARROW_LEFT = "ArrowLeft",
  ARROW_RIGHT = "ArrowRight";
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case "vertical":
      return vertical;
    case "horizontal":
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
function isMainOrientationKey(key, orientation) {
  var vertical = key === ARROW_UP || key === ARROW_DOWN,
    horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
  var vertical = key === ARROW_DOWN,
    horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal) || key === "Enter" || key === " " || key === "";
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
  var vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT,
    horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl) {
  var vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT,
    horizontal = key === ARROW_UP;
  return doSwitch(orientation, vertical, horizontal);
}
function useListNavigation(context, props) {
  var {
      open,
      onOpenChange,
      elements
    } = context,
    {
      listRef,
      activeIndex,
      onNavigate: unstable_onNavigate = function () {},
      enabled = !0,
      selectedIndex = null,
      allowEscape = !1,
      loop = !1,
      nested = !1,
      rtl = !1,
      virtual = !1,
      focusItemOnOpen = "auto",
      focusItemOnHover = !0,
      openOnArrowKeyDown = !0,
      disabledIndices = void 0,
      orientation = "vertical",
      scrollItemIntoView = !0
    } = props,
    typeableComboboxReference = isTypeableCombobox(elements.domReference),
    focusItemOnOpenRef = useRef(focusItemOnOpen),
    indexRef = useRef(selectedIndex ?? -1),
    keyRef = useRef(null),
    isPointerModalityRef = useRef(!0),
    previousMountedRef = useRef(!!elements.floating),
    previousOpenRef = useRef(open),
    forceSyncFocusRef = useRef(!1),
    forceScrollIntoViewRef = useRef(!1),
    disabledIndicesRef = useRef(disabledIndices);
  disabledIndicesRef.current = disabledIndices;
  var latestOpenRef = useRef(open);
  latestOpenRef.current = open;
  var scrollItemIntoViewRef = useRef(scrollItemIntoView);
  scrollItemIntoViewRef.current = scrollItemIntoView;
  var selectedIndexRef = useRef(selectedIndex);
  selectedIndexRef.current = selectedIndex;
  var stableOnNavigate = useEvent(unstable_onNavigate),
    [activeId, setActiveId] = useState(),
    onNavigate = useEvent(function () {
      stableOnNavigate(indexRef.current === -1 ? null : indexRef.current);
    }),
    previousOnNavigateRef = useRef(onNavigate),
    focusItem = useEvent(function () {
      function runFocus(item2) {
        virtual ? setActiveId(item2.id) : enqueueFocus(item2, {
          sync: forceSyncFocusRef.current,
          preventScroll: !0
        });
      }
      var initialItem = listRef.current[indexRef.current],
        forceScrollIntoView = forceScrollIntoViewRef.current;
      initialItem && runFocus(initialItem);
      var scheduler = forceSyncFocusRef.current ? function (v) {
        return v();
      } : requestAnimationFrame;
      scheduler(function () {
        var waitedItem = listRef.current[indexRef.current] || initialItem;
        if (waitedItem) {
          initialItem || runFocus(waitedItem);
          var scrollIntoViewOptions = scrollItemIntoViewRef.current,
            shouldScrollIntoView = scrollIntoViewOptions && waitedItem && (forceScrollIntoView || !isPointerModalityRef.current);
          if (shouldScrollIntoView) {
            var _waitedItem_scrollIntoView;
            (_waitedItem_scrollIntoView = waitedItem.scrollIntoView) === null || _waitedItem_scrollIntoView === void 0 || _waitedItem_scrollIntoView.call(waitedItem, typeof scrollIntoViewOptions == "boolean" ? {
              block: "nearest",
              inline: "nearest"
            } : scrollIntoViewOptions);
          }
        }
      });
    });
  useLayoutEffect(function () {
    enabled && (open && elements.floating ? focusItemOnOpenRef.current && selectedIndex != null && (forceScrollIntoViewRef.current = !0, indexRef.current = selectedIndex, onNavigate()) : previousMountedRef.current && (indexRef.current = -1, previousOnNavigateRef.current()));
  }, [enabled, open, elements.floating, selectedIndex, onNavigate]), useLayoutEffect(function () {
    if (enabled && open && elements.floating) if (activeIndex == null) {
      if (forceSyncFocusRef.current = !1, selectedIndexRef.current != null) return;
      if (previousMountedRef.current && (indexRef.current = -1, focusItem()), (!previousOpenRef.current || !previousMountedRef.current) && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === !0 && keyRef.current == null)) {
        var runs = 0,
          waitForListPopulated = function () {
            if (listRef.current[0] == null) {
              if (runs < 2) {
                var scheduler = runs ? requestAnimationFrame : queueMicrotask;
                scheduler(waitForListPopulated);
              }
              runs++;
            } else indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinListIndex(listRef, disabledIndicesRef.current) : getMaxListIndex(listRef, disabledIndicesRef.current), keyRef.current = null, onNavigate();
          };
        waitForListPopulated();
      }
    } else isIndexOutOfListBounds(listRef, activeIndex) || (indexRef.current = activeIndex, focusItem(), forceScrollIntoViewRef.current = !1);
  }, [enabled, open, elements.floating, activeIndex, selectedIndexRef, nested, listRef, orientation, rtl, onNavigate, focusItem, disabledIndicesRef]), useLayoutEffect(function () {
    previousOnNavigateRef.current = onNavigate, previousOpenRef.current = open, previousMountedRef.current = !!elements.floating;
  }), useLayoutEffect(function () {
    open || (keyRef.current = null, focusItemOnOpenRef.current = focusItemOnOpen);
  }, [open, focusItemOnOpen]);
  var hasActiveIndex = activeIndex != null,
    commonOnKeyDown = useEvent(function (event) {
      if (isPointerModalityRef.current = !1, forceSyncFocusRef.current = !0, event.which !== 229 && !(!latestOpenRef.current && event.currentTarget === elements.floating)) {
        if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
          stopEvent(event), onOpenChange(!1, event.nativeEvent, "list-navigation"), isHTMLElement(elements.domReference) && elements.domReference.focus();
          return;
        }
        var currentIndex = indexRef.current,
          minIndex = getMinListIndex(listRef, disabledIndices),
          maxIndex = getMaxListIndex(listRef, disabledIndices);
        if (typeableComboboxReference || (event.key === "Home" && (stopEvent(event), indexRef.current = minIndex, onNavigate()), event.key === "End" && (stopEvent(event), indexRef.current = maxIndex, onNavigate())), isMainOrientationKey(event.key, orientation)) {
          if (stopEvent(event), open && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
            indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex, onNavigate();
            return;
          }
          isMainOrientationToEndKey(event.key, orientation, rtl) ? loop ? indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledListIndex(listRef, {
            startingIndex: currentIndex,
            disabledIndices
          }) : indexRef.current = Math.min(maxIndex, findNonDisabledListIndex(listRef, {
            startingIndex: currentIndex,
            disabledIndices
          })) : loop ? indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledListIndex(listRef, {
            startingIndex: currentIndex,
            decrement: !0,
            disabledIndices
          }) : indexRef.current = Math.max(minIndex, findNonDisabledListIndex(listRef, {
            startingIndex: currentIndex,
            decrement: !0,
            disabledIndices
          })), isIndexOutOfListBounds(listRef, indexRef.current) && (indexRef.current = -1), onNavigate();
        }
      }
    }),
    ariaActiveDescendantProp = useMemo(function () {
      return virtual && open && hasActiveIndex && {
        "aria-activedescendant": activeId
      };
    }, [virtual, open, hasActiveIndex, activeId]),
    floating = useMemo(function () {
      return {
        "aria-orientation": orientation === "both" ? void 0 : orientation,
        ...(typeableComboboxReference ? {} : ariaActiveDescendantProp),
        onKeyDown: commonOnKeyDown,
        onPointerMove() {
          isPointerModalityRef.current = !0;
        }
      };
    }, [ariaActiveDescendantProp, commonOnKeyDown, orientation, typeableComboboxReference]),
    reference = useMemo(function () {
      function checkVirtualMouse(event) {
        focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent) && (focusItemOnOpenRef.current = !0);
      }
      function checkVirtualPointer(event) {
        focusItemOnOpenRef.current = focusItemOnOpen, focusItemOnOpen === "auto" && isVirtualPointerEvent(event.nativeEvent) && (focusItemOnOpenRef.current = !0);
      }
      return {
        ...ariaActiveDescendantProp,
        onKeyDown(event) {
          isPointerModalityRef.current = !1;
          var isArrowKey = event.key.startsWith("Arrow"),
            isCrossOpenKey = isCrossOrientationOpenKey(event.key, orientation, rtl),
            isMainKey = isMainOrientationKey(event.key, orientation),
            isNavigationKey = (nested ? isCrossOpenKey : isMainKey) || event.key === "Enter" || event.key.trim() === "";
          if (virtual && open) return commonOnKeyDown(event);
          if (!(!open && !openOnArrowKeyDown && isArrowKey)) {
            if (isNavigationKey && (keyRef.current = event.key), nested) {
              isCrossOpenKey && (stopEvent(event), open ? (indexRef.current = getMinListIndex(listRef, disabledIndicesRef.current), onNavigate()) : onOpenChange(!0, event.nativeEvent, "list-navigation"));
              return;
            }
            isMainKey && (selectedIndex != null && (indexRef.current = selectedIndex), stopEvent(event), !open && openOnArrowKeyDown ? onOpenChange(!0, event.nativeEvent, "list-navigation") : commonOnKeyDown(event), open && onNavigate());
          }
        },
        onFocus() {
          open && !virtual && (indexRef.current = -1, onNavigate());
        },
        onPointerDown: checkVirtualPointer,
        onPointerEnter: checkVirtualPointer,
        onMouseDown: checkVirtualMouse,
        onClick: checkVirtualMouse
      };
    }, [ariaActiveDescendantProp, commonOnKeyDown, disabledIndicesRef, focusItemOnOpen, listRef, nested, onNavigate, onOpenChange, open, openOnArrowKeyDown, orientation, rtl, selectedIndex, virtual]),
    item = useMemo(function () {
      function syncCurrentTarget(currentTarget) {
        if (latestOpenRef.current) {
          var index = listRef.current.indexOf(currentTarget);
          index !== -1 && indexRef.current !== index && (indexRef.current = index, onNavigate());
        }
      }
      var itemProps = {
        onFocus(param) {
          var {
            currentTarget
          } = param;
          forceSyncFocusRef.current = !0, syncCurrentTarget(currentTarget);
        },
        onClick: function (param) {
          var {
            currentTarget
          } = param;
          return currentTarget.focus({
            preventScroll: !0
          });
        },
        // safari
        onMouseMove(param) {
          var {
            currentTarget
          } = param;
          forceSyncFocusRef.current = !0, forceScrollIntoViewRef.current = !1, focusItemOnHover && syncCurrentTarget(currentTarget);
        },
        onPointerLeave(param) {
          var {
            pointerType
          } = param;
          if (!(!isPointerModalityRef.current || pointerType === "touch") && (forceSyncFocusRef.current = !0, !!focusItemOnHover && (indexRef.current = -1, onNavigate(), !virtual))) {
            var _elements_floating;
            (_elements_floating = elements.floating) === null || _elements_floating === void 0 || _elements_floating.focus({
              preventScroll: !0
            });
          }
        }
      };
      return itemProps;
    }, [latestOpenRef, focusItemOnHover, listRef, onNavigate, virtual, elements.floating]);
  return useMemo(function () {
    return enabled ? {
      reference,
      floating,
      item
    } : {};
  }, [enabled, reference, floating, item]);
}
export { useListNavigation };
//# sourceMappingURL=useListNavigation.native.js.map
