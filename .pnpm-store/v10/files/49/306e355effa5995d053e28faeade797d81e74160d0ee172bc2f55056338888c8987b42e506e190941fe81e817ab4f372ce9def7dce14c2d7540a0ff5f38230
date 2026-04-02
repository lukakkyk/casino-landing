import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useEvent } from "@tamagui/use-event";
import { activeElement, enqueueFocus, findNonDisabledListIndex, getMinListIndex, getMaxListIndex, isHTMLElement, isIndexOutOfListBounds, isTypeableCombobox, isVirtualClick, isVirtualPointerEvent, stopEvent } from "./utils.mjs";
const ARROW_UP = "ArrowUp",
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
  return doSwitch(orientation, key === ARROW_UP || key === ARROW_DOWN, key === ARROW_LEFT || key === ARROW_RIGHT);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
  return doSwitch(orientation, key === ARROW_DOWN, rtl ? key === ARROW_LEFT : key === ARROW_RIGHT) || key === "Enter" || key === " " || key === "";
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
  return doSwitch(orientation, rtl ? key === ARROW_LEFT : key === ARROW_RIGHT, key === ARROW_DOWN);
}
function isCrossOrientationCloseKey(key, orientation, rtl) {
  return doSwitch(orientation, rtl ? key === ARROW_RIGHT : key === ARROW_LEFT, key === ARROW_UP);
}
function useListNavigation(context, props) {
  const {
      open,
      onOpenChange,
      elements
    } = context,
    {
      listRef,
      activeIndex,
      onNavigate: unstable_onNavigate = () => {},
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
  const latestOpenRef = useRef(open);
  latestOpenRef.current = open;
  const scrollItemIntoViewRef = useRef(scrollItemIntoView);
  scrollItemIntoViewRef.current = scrollItemIntoView;
  const selectedIndexRef = useRef(selectedIndex);
  selectedIndexRef.current = selectedIndex;
  const stableOnNavigate = useEvent(unstable_onNavigate),
    [activeId, setActiveId] = useState(),
    onNavigate = useEvent(() => {
      stableOnNavigate(indexRef.current === -1 ? null : indexRef.current);
    }),
    previousOnNavigateRef = useRef(onNavigate),
    focusItem = useEvent(() => {
      function runFocus(item2) {
        virtual ? setActiveId(item2.id) : enqueueFocus(item2, {
          sync: forceSyncFocusRef.current,
          preventScroll: !0
        });
      }
      const initialItem = listRef.current[indexRef.current],
        forceScrollIntoView = forceScrollIntoViewRef.current;
      initialItem && runFocus(initialItem), (forceSyncFocusRef.current ? v => v() : requestAnimationFrame)(() => {
        const waitedItem = listRef.current[indexRef.current] || initialItem;
        if (!waitedItem) return;
        initialItem || runFocus(waitedItem);
        const scrollIntoViewOptions = scrollItemIntoViewRef.current;
        scrollIntoViewOptions && waitedItem && (forceScrollIntoView || !isPointerModalityRef.current) && waitedItem.scrollIntoView?.(typeof scrollIntoViewOptions == "boolean" ? {
          block: "nearest",
          inline: "nearest"
        } : scrollIntoViewOptions);
      });
    });
  useLayoutEffect(() => {
    enabled && (open && elements.floating ? focusItemOnOpenRef.current && selectedIndex != null && (forceScrollIntoViewRef.current = !0, indexRef.current = selectedIndex, onNavigate()) : previousMountedRef.current && (indexRef.current = -1, previousOnNavigateRef.current()));
  }, [enabled, open, elements.floating, selectedIndex, onNavigate]), useLayoutEffect(() => {
    if (enabled && open && elements.floating) if (activeIndex == null) {
      if (forceSyncFocusRef.current = !1, selectedIndexRef.current != null) return;
      if (previousMountedRef.current && (indexRef.current = -1, focusItem()), (!previousOpenRef.current || !previousMountedRef.current) && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === !0 && keyRef.current == null)) {
        let runs = 0;
        const waitForListPopulated = () => {
          listRef.current[0] == null ? (runs < 2 && (runs ? requestAnimationFrame : queueMicrotask)(waitForListPopulated), runs++) : (indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinListIndex(listRef, disabledIndicesRef.current) : getMaxListIndex(listRef, disabledIndicesRef.current), keyRef.current = null, onNavigate());
        };
        waitForListPopulated();
      }
    } else isIndexOutOfListBounds(listRef, activeIndex) || (indexRef.current = activeIndex, focusItem(), forceScrollIntoViewRef.current = !1);
  }, [enabled, open, elements.floating, activeIndex, selectedIndexRef, nested, listRef, orientation, rtl, onNavigate, focusItem, disabledIndicesRef]), useLayoutEffect(() => {
    previousOnNavigateRef.current = onNavigate, previousOpenRef.current = open, previousMountedRef.current = !!elements.floating;
  }), useLayoutEffect(() => {
    open || (keyRef.current = null, focusItemOnOpenRef.current = focusItemOnOpen);
  }, [open, focusItemOnOpen]);
  const hasActiveIndex = activeIndex != null,
    commonOnKeyDown = useEvent(event => {
      if (isPointerModalityRef.current = !1, forceSyncFocusRef.current = !0, event.which === 229 || !latestOpenRef.current && event.currentTarget === elements.floating) return;
      if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
        stopEvent(event), onOpenChange(!1, event.nativeEvent, "list-navigation"), isHTMLElement(elements.domReference) && elements.domReference.focus();
        return;
      }
      const currentIndex = indexRef.current,
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
    }),
    ariaActiveDescendantProp = useMemo(() => virtual && open && hasActiveIndex && {
      "aria-activedescendant": activeId
    }, [virtual, open, hasActiveIndex, activeId]),
    floating = useMemo(() => ({
      "aria-orientation": orientation === "both" ? void 0 : orientation,
      ...(typeableComboboxReference ? {} : ariaActiveDescendantProp),
      onKeyDown: commonOnKeyDown,
      onPointerMove() {
        isPointerModalityRef.current = !0;
      }
    }), [ariaActiveDescendantProp, commonOnKeyDown, orientation, typeableComboboxReference]),
    reference = useMemo(() => {
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
          const isArrowKey = event.key.startsWith("Arrow"),
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
    item = useMemo(() => {
      function syncCurrentTarget(currentTarget) {
        if (!latestOpenRef.current) return;
        const index = listRef.current.indexOf(currentTarget);
        index !== -1 && indexRef.current !== index && (indexRef.current = index, onNavigate());
      }
      return {
        onFocus({
          currentTarget
        }) {
          forceSyncFocusRef.current = !0, syncCurrentTarget(currentTarget);
        },
        onClick: ({
          currentTarget
        }) => currentTarget.focus({
          preventScroll: !0
        }),
        // safari
        onMouseMove({
          currentTarget
        }) {
          forceSyncFocusRef.current = !0, forceScrollIntoViewRef.current = !1, focusItemOnHover && syncCurrentTarget(currentTarget);
        },
        onPointerLeave({
          pointerType
        }) {
          !isPointerModalityRef.current || pointerType === "touch" || (forceSyncFocusRef.current = !0, focusItemOnHover && (indexRef.current = -1, onNavigate(), virtual || elements.floating?.focus({
            preventScroll: !0
          })));
        }
      };
    }, [latestOpenRef, focusItemOnHover, listRef, onNavigate, virtual, elements.floating]);
  return useMemo(() => enabled ? {
    reference,
    floating,
    item
  } : {}, [enabled, reference, floating, item]);
}
export { useListNavigation };
//# sourceMappingURL=useListNavigation.mjs.map
