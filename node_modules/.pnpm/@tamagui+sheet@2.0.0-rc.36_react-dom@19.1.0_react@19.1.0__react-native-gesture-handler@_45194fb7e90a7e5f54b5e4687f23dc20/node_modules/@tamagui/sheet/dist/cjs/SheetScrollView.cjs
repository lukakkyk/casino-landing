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
var SheetScrollView_exports = {};
__export(SheetScrollView_exports, {
  SheetScrollView: () => SheetScrollView
});
module.exports = __toCommonJS(SheetScrollView_exports);
var import_compose_refs = require("@tamagui/compose-refs"),
  import_core = require("@tamagui/core"),
  import_scroll_view = require("@tamagui/scroll-view"),
  import_use_controllable_state = require("@tamagui/use-controllable-state"),
  import_react = __toESM(require("react"), 1),
  import_GestureSheetContext = require("./GestureSheetContext.cjs"),
  import_gestureState = require("./gestureState.cjs"),
  import_SheetContext = require("./SheetContext.cjs"),
  import_useSheetScrollViewGestures = require("./useSheetScrollViewGestures.cjs"),
  import_jsx_runtime = require("react/jsx-runtime");
const SHEET_SCROLL_VIEW_NAME = "SheetScrollView",
  SheetScrollView = import_react.default.forwardRef(({
    __scopeSheet,
    children,
    onScroll,
    scrollEnabled: scrollEnabledProp,
    ...props
  }, ref) => {
    const context = (0, import_SheetContext.useSheetContext)(SHEET_SCROLL_VIEW_NAME, __scopeSheet),
      gestureContext = (0, import_GestureSheetContext.useGestureSheetContext)(),
      {
        scrollBridge,
        setHasScrollView
      } = context,
      [scrollEnabled] = (0, import_use_controllable_state.useControllableState)({
        prop: scrollEnabledProp,
        defaultProp: !0
      }),
      scrollRef = import_react.default.useRef(null),
      panGestureRef = gestureContext?.panGestureRef,
      {
        ScrollView: RNGHScrollView
      } = (0, import_gestureState.getGestureHandlerState)(),
      useRNGHScrollView = (0, import_gestureState.isGestureHandlerEnabled)() && RNGHScrollView && panGestureRef,
      currentScrollOffset = (0, import_react.useRef)(0),
      lockedScrollY = (0, import_react.useRef)(0),
      setScrollEnabled = (next, lockTo) => {
        if (next) lockedScrollY.current = currentScrollOffset.current, scrollBridge.scrollLockY = void 0;else {
          const lockY = lockTo ?? currentScrollOffset.current;
          lockedScrollY.current = lockY, scrollBridge.scrollLockY = lockY, scrollRef.current?.scrollTo?.({
            x: 0,
            y: lockY,
            animated: !1
          });
        }
      },
      forceScrollTo = y => {
        scrollRef.current?.scrollTo?.({
          x: 0,
          y,
          animated: !1
        });
      };
    (0, import_react.useEffect)(() => (setHasScrollView(!0), (0, import_gestureState.isGestureHandlerEnabled)() && (scrollBridge.setScrollEnabled = setScrollEnabled, scrollBridge.forceScrollTo = forceScrollTo), () => {
      setHasScrollView(!1), scrollBridge.setScrollEnabled = void 0, scrollBridge.forceScrollTo = void 0;
    }), []);
    const [hasScrollableContent, setHasScrollableContent] = (0, import_react.useState)(!0),
      parentHeight = (0, import_react.useRef)(0),
      contentHeight = (0, import_react.useRef)(0),
      updateScrollable = () => {
        parentHeight.current && contentHeight.current && setHasScrollableContent(contentHeight.current > parentHeight.current);
      };
    (0, import_react.useEffect)(() => {
      scrollBridge.hasScrollableContent = hasScrollableContent;
    }, [hasScrollableContent]);
    const gestureProps = (0, import_useSheetScrollViewGestures.useSheetScrollViewGestures)({
        scrollRef,
        scrollBridge,
        hasScrollableContent,
        scrollEnabled,
        setScrollEnabled
      }),
      contentWrapper = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_core.View, {
        onLayout: e => {
          const height = Math.floor(e.nativeEvent.layout.height);
          height !== contentHeight.current && (contentHeight.current = height, updateScrollable());
        },
        children
      });
    return useRNGHScrollView && RNGHScrollView && panGestureRef ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(RNGHScrollView, {
      ref: (0, import_compose_refs.composeRefs)(scrollRef, ref),
      style: {
        flex: 1
      },
      scrollEventThrottle: 1,
      scrollEnabled,
      simultaneousHandlers: [panGestureRef],
      onLayout: e => {
        parentHeight.current = Math.ceil(e.nativeEvent.layout.height), updateScrollable();
      },
      onScroll: e => {
        const {
          y
        } = e.nativeEvent.contentOffset;
        if (currentScrollOffset.current = y, scrollBridge.scrollLockY !== void 0) {
          y !== scrollBridge.scrollLockY && scrollRef.current?.scrollTo?.({
            x: 0,
            y: scrollBridge.scrollLockY,
            animated: !1
          }), scrollBridge.y = scrollBridge.scrollLockY, onScroll?.({
            ...e,
            nativeEvent: {
              ...e.nativeEvent,
              contentOffset: {
                ...e.nativeEvent.contentOffset,
                y: scrollBridge.scrollLockY
              }
            }
          });
          return;
        }
        scrollBridge.y = y, y > 0 && (scrollBridge.scrollStartY = -1), onScroll?.(e);
      },
      contentContainerStyle: {
        minHeight: "100%"
      },
      bounces: !1,
      keyboardShouldPersistTaps: "always",
      keyboardDismissMode: "none",
      ...props,
      children: contentWrapper
    }) : /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_scroll_view.ScrollView, {
      onLayout: e => {
        parentHeight.current = Math.ceil(e.nativeEvent.layout.height), updateScrollable();
      },
      ref: (0, import_compose_refs.composeRefs)(scrollRef, ref),
      flex: 1,
      scrollEventThrottle: 1,
      className: "_ovs-contain",
      scrollEnabled,
      onScroll: e => {
        const {
          y
        } = e.nativeEvent.contentOffset;
        scrollBridge.y = y, y > 0 && (scrollBridge.scrollStartY = -1), onScroll?.(e);
      },
      contentContainerStyle: {
        minHeight: "100%"
      },
      ...gestureProps,
      ...props,
      children: contentWrapper
    });
  });