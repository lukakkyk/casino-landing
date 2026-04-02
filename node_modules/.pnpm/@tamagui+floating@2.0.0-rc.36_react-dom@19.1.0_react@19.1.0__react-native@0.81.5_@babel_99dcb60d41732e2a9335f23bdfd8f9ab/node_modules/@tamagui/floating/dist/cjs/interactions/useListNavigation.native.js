"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: !0
}), mod);
var useListNavigation_exports = {};
__export(useListNavigation_exports, {
  useListNavigation: () => useListNavigation
});
module.exports = __toCommonJS(useListNavigation_exports);
var import_react = require("react"),
  import_use_event = require("@tamagui/use-event"),
  import_utils = require("./utils.native.js"),
  ARROW_UP = "ArrowUp",
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
    typeableComboboxReference = (0, import_utils.isTypeableCombobox)(elements.domReference),
    focusItemOnOpenRef = (0, import_react.useRef)(focusItemOnOpen),
    indexRef = (0, import_react.useRef)(selectedIndex ?? -1),
    keyRef = (0, import_react.useRef)(null),
    isPointerModalityRef = (0, import_react.useRef)(!0),
    previousMountedRef = (0, import_react.useRef)(!!elements.floating),
    previousOpenRef = (0, import_react.useRef)(open),
    forceSyncFocusRef = (0, import_react.useRef)(!1),
    forceScrollIntoViewRef = (0, import_react.useRef)(!1),
    disabledIndicesRef = (0, import_react.useRef)(disabledIndices);
  disabledIndicesRef.current = disabledIndices;
  var latestOpenRef = (0, import_react.useRef)(open);
  latestOpenRef.current = open;
  var scrollItemIntoViewRef = (0, import_react.useRef)(scrollItemIntoView);
  scrollItemIntoViewRef.current = scrollItemIntoView;
  var selectedIndexRef = (0, import_react.useRef)(selectedIndex);
  selectedIndexRef.current = selectedIndex;
  var stableOnNavigate = (0, import_use_event.useEvent)(unstable_onNavigate),
    [activeId, setActiveId] = (0, import_react.useState)(),
    onNavigate = (0, import_use_event.useEvent)(function () {
      stableOnNavigate(indexRef.current === -1 ? null : indexRef.current);
    }),
    previousOnNavigateRef = (0, import_react.useRef)(onNavigate),
    focusItem = (0, import_use_event.useEvent)(function () {
      function runFocus(item2) {
        virtual ? setActiveId(item2.id) : (0, import_utils.enqueueFocus)(item2, {
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
  (0, import_react.useLayoutEffect)(function () {
    enabled && (open && elements.floating ? focusItemOnOpenRef.current && selectedIndex != null && (forceScrollIntoViewRef.current = !0, indexRef.current = selectedIndex, onNavigate()) : previousMountedRef.current && (indexRef.current = -1, previousOnNavigateRef.current()));
  }, [enabled, open, elements.floating, selectedIndex, onNavigate]), (0, import_react.useLayoutEffect)(function () {
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
            } else indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? (0, import_utils.getMinListIndex)(listRef, disabledIndicesRef.current) : (0, import_utils.getMaxListIndex)(listRef, disabledIndicesRef.current), keyRef.current = null, onNavigate();
          };
        waitForListPopulated();
      }
    } else (0, import_utils.isIndexOutOfListBounds)(listRef, activeIndex) || (indexRef.current = activeIndex, focusItem(), forceScrollIntoViewRef.current = !1);
  }, [enabled, open, elements.floating, activeIndex, selectedIndexRef, nested, listRef, orientation, rtl, onNavigate, focusItem, disabledIndicesRef]), (0, import_react.useLayoutEffect)(function () {
    previousOnNavigateRef.current = onNavigate, previousOpenRef.current = open, previousMountedRef.current = !!elements.floating;
  }), (0, import_react.useLayoutEffect)(function () {
    open || (keyRef.current = null, focusItemOnOpenRef.current = focusItemOnOpen);
  }, [open, focusItemOnOpen]);
  var hasActiveIndex = activeIndex != null,
    commonOnKeyDown = (0, import_use_event.useEvent)(function (event) {
      if (isPointerModalityRef.current = !1, forceSyncFocusRef.current = !0, event.which !== 229 && !(!latestOpenRef.current && event.currentTarget === elements.floating)) {
        if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
          (0, import_utils.stopEvent)(event), onOpenChange(!1, event.nativeEvent, "list-navigation"), (0, import_utils.isHTMLElement)(elements.domReference) && elements.domReference.focus();
          return;
        }
        var currentIndex = indexRef.current,
          minIndex = (0, import_utils.getMinListIndex)(listRef, disabledIndices),
          maxIndex = (0, import_utils.getMaxListIndex)(listRef, disabledIndices);
        if (typeableComboboxReference || (event.key === "Home" && ((0, import_utils.stopEvent)(event), indexRef.current = minIndex, onNavigate()), event.key === "End" && ((0, import_utils.stopEvent)(event), indexRef.current = maxIndex, onNavigate())), isMainOrientationKey(event.key, orientation)) {
          if ((0, import_utils.stopEvent)(event), open && !virtual && (0, import_utils.activeElement)(event.currentTarget.ownerDocument) === event.currentTarget) {
            indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex, onNavigate();
            return;
          }
          isMainOrientationToEndKey(event.key, orientation, rtl) ? loop ? indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : (0, import_utils.findNonDisabledListIndex)(listRef, {
            startingIndex: currentIndex,
            disabledIndices
          }) : indexRef.current = Math.min(maxIndex, (0, import_utils.findNonDisabledListIndex)(listRef, {
            startingIndex: currentIndex,
            disabledIndices
          })) : loop ? indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : (0, import_utils.findNonDisabledListIndex)(listRef, {
            startingIndex: currentIndex,
            decrement: !0,
            disabledIndices
          }) : indexRef.current = Math.max(minIndex, (0, import_utils.findNonDisabledListIndex)(listRef, {
            startingIndex: currentIndex,
            decrement: !0,
            disabledIndices
          })), (0, import_utils.isIndexOutOfListBounds)(listRef, indexRef.current) && (indexRef.current = -1), onNavigate();
        }
      }
    }),
    ariaActiveDescendantProp = (0, import_react.useMemo)(function () {
      return virtual && open && hasActiveIndex && {
        "aria-activedescendant": activeId
      };
    }, [virtual, open, hasActiveIndex, activeId]),
    floating = (0, import_react.useMemo)(function () {
      return {
        "aria-orientation": orientation === "both" ? void 0 : orientation,
        ...(typeableComboboxReference ? {} : ariaActiveDescendantProp),
        onKeyDown: commonOnKeyDown,
        onPointerMove() {
          isPointerModalityRef.current = !0;
        }
      };
    }, [ariaActiveDescendantProp, commonOnKeyDown, orientation, typeableComboboxReference]),
    reference = (0, import_react.useMemo)(function () {
      function checkVirtualMouse(event) {
        focusItemOnOpen === "auto" && (0, import_utils.isVirtualClick)(event.nativeEvent) && (focusItemOnOpenRef.current = !0);
      }
      function checkVirtualPointer(event) {
        focusItemOnOpenRef.current = focusItemOnOpen, focusItemOnOpen === "auto" && (0, import_utils.isVirtualPointerEvent)(event.nativeEvent) && (focusItemOnOpenRef.current = !0);
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
              isCrossOpenKey && ((0, import_utils.stopEvent)(event), open ? (indexRef.current = (0, import_utils.getMinListIndex)(listRef, disabledIndicesRef.current), onNavigate()) : onOpenChange(!0, event.nativeEvent, "list-navigation"));
              return;
            }
            isMainKey && (selectedIndex != null && (indexRef.current = selectedIndex), (0, import_utils.stopEvent)(event), !open && openOnArrowKeyDown ? onOpenChange(!0, event.nativeEvent, "list-navigation") : commonOnKeyDown(event), open && onNavigate());
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
    item = (0, import_react.useMemo)(function () {
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
  return (0, import_react.useMemo)(function () {
    return enabled ? {
      reference,
      floating,
      item
    } : {};
  }, [enabled, reference, floating, item]);
}
//# sourceMappingURL=useListNavigation.native.js.map
