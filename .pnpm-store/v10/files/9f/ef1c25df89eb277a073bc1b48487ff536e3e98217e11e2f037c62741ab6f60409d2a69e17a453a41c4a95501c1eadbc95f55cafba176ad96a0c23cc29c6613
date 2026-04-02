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
var SelectImpl_exports = {};
__export(SelectImpl_exports, {
  SelectInlineImpl: () => SelectInlineImpl
});
module.exports = __toCommonJS(SelectImpl_exports);
var import_floating = require("@tamagui/floating"),
  import_constants = require("@tamagui/constants"),
  import_core = require("@tamagui/core"),
  React = __toESM(require("react"), 1),
  import_react_dom = require("react-dom"),
  import_constants2 = require("./constants.cjs"),
  import_context = require("./context.cjs"),
  import_jsx_runtime = require("react/jsx-runtime");
const SelectInlineImpl = props => {
  const {
      scope,
      children,
      open = !1,
      listContentRef,
      setActiveIndexFast
    } = props,
    selectContext = (0, import_context.useSelectContext)(scope),
    selectItemParentContext = (0, import_context.useSelectItemParentContext)(scope),
    {
      setActiveIndex,
      selectedIndex,
      activeIndexRef
    } = selectContext,
    {
      setOpen,
      setSelectedIndex
    } = selectItemParentContext,
    [scrollTop, setScrollTop] = React.useState(0),
    touch = (0, import_core.useIsTouchDevice)(),
    listItemsRef = React.useRef([]),
    overflowRef = React.useRef(null),
    upArrowRef = React.useRef(null),
    downArrowRef = React.useRef(null),
    allowSelectRef = React.useRef(!1),
    allowMouseUpRef = React.useRef(!0),
    selectTimeoutRef = React.useRef(null),
    state = React.useRef({
      isMouseOutside: !1,
      isTyping: !1
    }),
    [controlledScrolling, setControlledScrolling] = React.useState(!1),
    [fallback, setFallback] = React.useState(!1),
    [innerOffset, setInnerOffset] = React.useState(0),
    [blockSelection, setBlockSelection] = React.useState(!1),
    floatingStyle = React.useRef({});
  React.useEffect(() => {
    open ? setActiveIndexFast(selectedIndex ?? 0) : (setScrollTop(0), setFallback(!1), setActiveIndexFast(null), setControlledScrolling(!1));
  }, [open, selectedIndex, setActiveIndexFast]), (0, import_constants.useIsomorphicLayoutEffect)(() => {
    if (!open) return;
    const mouseUp = e => {
      state.current.isMouseOutside && setOpen(!1);
    };
    return document.addEventListener("mouseup", mouseUp), () => {
      document.removeEventListener("mouseup", mouseUp);
    };
  }, [open]);
  const {
      x,
      y,
      strategy,
      refs,
      update,
      placement: computedPlacement
    } = (0, import_floating.useFloatingRaw)({
      open,
      placement: "bottom-start",
      whileElementsMounted: import_floating.autoUpdate,
      // eslint-disable-next-line no-constant-condition
      middleware: [(0, import_floating.size)({
        apply({
          rects: {
            reference: {
              width
            }
          }
        }) {
          Object.assign(floatingStyle.current, {
            minWidth: width + 8
          }), refs.floating.current && Object.assign(refs.floating.current.style, floatingStyle.current);
        }
      }), (0, import_floating.inner)({
        listRef: listItemsRef,
        overflowRef,
        index: selectedIndex,
        offset: innerOffset,
        onFallbackChange: setFallback,
        padding: 10,
        minItemsVisible: touch ? 10 : 4,
        referenceOverflowThreshold: 20
      }), (0, import_floating.offset)({
        crossAxis: -5
      })]
    }),
    floatingRef = refs.floating,
    showUpArrow = open && scrollTop > import_constants2.SCROLL_ARROW_THRESHOLD,
    showDownArrow = open && floatingRef.current && scrollTop < floatingRef.current.scrollHeight - floatingRef.current.clientHeight - import_constants2.SCROLL_ARROW_THRESHOLD,
    isScrollable = showDownArrow || showUpArrow;
  (0, import_constants.useIsomorphicLayoutEffect)(() => {
    if (!(typeof window > "u")) return window.addEventListener("resize", update), open && update(), () => window.removeEventListener("resize", update);
  }, [update, open]);
  const onMatch = (0, import_core.useEvent)(index => (open ? setActiveIndex : setSelectedIndex)(index)),
    dataRef = React.useRef({});
  dataRef.current.placement = computedPlacement;
  const interactionContext = {
      open,
      onOpenChange: val => setOpen(val),
      refs: {
        reference: refs.reference,
        floating: refs.floating,
        domReference: refs.reference
      },
      elements: {
        reference: refs.reference?.current || null,
        floating: refs.floating?.current || null,
        domReference: refs.reference?.current || null
      },
      dataRef
    },
    interactionsProps = [(0, import_floating.useClick)(interactionContext, {
      event: "mousedown",
      keyboardHandlers: !1
    }),
    // useDismiss removed - already handled by Dismissable in SelectContent
    (0, import_floating.useRole)(interactionContext, {
      role: "listbox"
    }), (0, import_floating.useInnerOffset)(interactionContext, {
      enabled: !fallback && isScrollable,
      onChange: setInnerOffset,
      overflowRef,
      scrollRef: refs.floating
    }), (0, import_floating.useListNavigation)(interactionContext, {
      listRef: listItemsRef,
      activeIndex: selectContext.activeIndex ?? 0,
      selectedIndex,
      onNavigate: index => {
        index !== null && setActiveIndex(index);
      },
      scrollItemIntoView: !1
    }), (0, import_floating.useTypeahead)(interactionContext, {
      listRef: listContentRef,
      onMatch,
      selectedIndex,
      activeIndex: selectContext.activeIndex,
      onTypingChange: e => {
        state.current.isTyping = e;
      }
    })],
    interactions = (0, import_floating.useInteractions)(React.useMemo(() => interactionsProps, interactionsProps)),
    interactionsContext = React.useMemo(() => ({
      ...interactions,
      getReferenceProps() {
        return interactions.getReferenceProps({
          ref: refs.reference,
          className: "SelectTrigger",
          onKeyDown(event) {
            (event.key === "Enter" || event.code === "Space" || event.key === " " && !state.current.isTyping) && (event.preventDefault(), setOpen(!0));
          }
        });
      },
      getFloatingProps(props2) {
        return interactions.getFloatingProps({
          ref: refs.floating,
          className: "Select",
          ...props2,
          style: {
            position: strategy,
            top: y ?? "",
            left: x ?? "",
            outline: 0,
            scrollbarWidth: "none",
            ...floatingStyle.current,
            ...props2?.style
          },
          onPointerEnter() {
            setControlledScrolling(!1), state.current.isMouseOutside = !1;
          },
          onPointerLeave() {
            state.current.isMouseOutside = !0;
          },
          onPointerMove() {
            state.current.isMouseOutside = !1, setControlledScrolling(!1);
          },
          onKeyDown() {
            setControlledScrolling(!0);
          },
          onContextMenu(e) {
            e.preventDefault();
          },
          onScroll(event) {
            (0, import_react_dom.flushSync)(() => {
              setScrollTop(event.currentTarget.scrollTop);
            });
          }
        });
      }
    }), [refs.reference.current, x, y, refs.floating.current, interactions]);
  (0, import_constants.useIsomorphicLayoutEffect)(() => {
    if (open) return allowMouseUpRef.current = !1, selectTimeoutRef.current = setTimeout(() => {
      allowSelectRef.current = !0, allowMouseUpRef.current = !0;
    }, 300), () => {
      clearTimeout(selectTimeoutRef.current);
    };
    allowSelectRef.current = !1, allowMouseUpRef.current = !0, setInnerOffset(0), setFallback(!1), setBlockSelection(!1);
  }, [open]), (0, import_constants.useIsomorphicLayoutEffect)(() => {
    !open && state.current.isMouseOutside && (state.current.isMouseOutside = !1);
  }, [open]), (0, import_constants.useIsomorphicLayoutEffect)(() => {
    function onPointerDown(e) {
      const target = e.target;
      refs.floating.current?.contains(target) || upArrowRef.current?.contains(target) || downArrowRef.current?.contains(target) || (setOpen(!1), setControlledScrolling(!1));
    }
    if (open) return document.addEventListener("pointerdown", onPointerDown), () => {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, refs, setOpen]), React.useEffect(() => {
    if (!open) return;
    const scrollActiveIntoView = index => {
      controlledScrolling && index != null && listItemsRef.current[index]?.scrollIntoView({
        block: "nearest"
      }), setScrollTop(refs.floating.current?.scrollTop ?? 0);
    };
    return scrollActiveIntoView(activeIndexRef.current), selectItemParentContext.activeIndexSubscribe(scrollActiveIntoView);
  }, [open, refs, controlledScrolling, selectItemParentContext.activeIndexSubscribe]), React.useEffect(() => {
    open && fallback && selectedIndex != null && listItemsRef.current[selectedIndex]?.scrollIntoView({
      block: "nearest"
    });
  }, [open, fallback, selectedIndex]), (0, import_constants.useIsomorphicLayoutEffect)(() => {
    refs.floating.current && fallback && (refs.floating.current.style.maxHeight = "");
  }, [refs, fallback]);
  const floatingContext = React.useMemo(() => ({
    refs,
    dataRef
  }), [refs]);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_context.SelectProvider, {
    scope,
    ...selectContext,
    setScrollTop,
    setInnerOffset,
    fallback,
    floatingContext,
    canScrollDown: !!showDownArrow,
    canScrollUp: !!showUpArrow,
    controlledScrolling,
    blockSelection,
    upArrowRef,
    downArrowRef,
    update,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_context.SelectItemParentProvider, {
      scope,
      ...selectItemParentContext,
      allowMouseUpRef,
      allowSelectRef,
      dataRef,
      interactions: interactionsContext,
      listRef: listItemsRef,
      selectTimeoutRef,
      children
    })
  });
};