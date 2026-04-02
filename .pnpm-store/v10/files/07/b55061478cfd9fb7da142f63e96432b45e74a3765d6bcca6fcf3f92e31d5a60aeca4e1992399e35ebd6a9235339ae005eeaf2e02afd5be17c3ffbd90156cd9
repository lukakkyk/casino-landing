import { autoUpdate, inner, offset, size, useClick, useFloatingRaw as useFloatingDom, useInteractions, useInnerOffset, useListNavigation, useRole, useTypeahead } from "@tamagui/floating";
import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import { useEvent, useIsTouchDevice } from "@tamagui/core";
import * as React from "react";
import { flushSync } from "react-dom";
import { SCROLL_ARROW_THRESHOLD } from "./constants.mjs";
import { SelectItemParentProvider, SelectProvider, useSelectContext, useSelectItemParentContext } from "./context.mjs";
import { jsx } from "react/jsx-runtime";
const SelectInlineImpl = props => {
  const {
      scope,
      children,
      open = !1,
      listContentRef,
      setActiveIndexFast
    } = props,
    selectContext = useSelectContext(scope),
    selectItemParentContext = useSelectItemParentContext(scope),
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
    touch = useIsTouchDevice(),
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
  }, [open, selectedIndex, setActiveIndexFast]), useIsomorphicLayoutEffect(() => {
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
    } = useFloatingDom({
      open,
      placement: "bottom-start",
      whileElementsMounted: autoUpdate,
      // eslint-disable-next-line no-constant-condition
      middleware: [size({
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
      }), inner({
        listRef: listItemsRef,
        overflowRef,
        index: selectedIndex,
        offset: innerOffset,
        onFallbackChange: setFallback,
        padding: 10,
        minItemsVisible: touch ? 10 : 4,
        referenceOverflowThreshold: 20
      }), offset({
        crossAxis: -5
      })]
    }),
    floatingRef = refs.floating,
    showUpArrow = open && scrollTop > SCROLL_ARROW_THRESHOLD,
    showDownArrow = open && floatingRef.current && scrollTop < floatingRef.current.scrollHeight - floatingRef.current.clientHeight - SCROLL_ARROW_THRESHOLD,
    isScrollable = showDownArrow || showUpArrow;
  useIsomorphicLayoutEffect(() => {
    if (!(typeof window > "u")) return window.addEventListener("resize", update), open && update(), () => window.removeEventListener("resize", update);
  }, [update, open]);
  const onMatch = useEvent(index => (open ? setActiveIndex : setSelectedIndex)(index)),
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
    interactionsProps = [useClick(interactionContext, {
      event: "mousedown",
      keyboardHandlers: !1
    }),
    // useDismiss removed - already handled by Dismissable in SelectContent
    useRole(interactionContext, {
      role: "listbox"
    }), useInnerOffset(interactionContext, {
      enabled: !fallback && isScrollable,
      onChange: setInnerOffset,
      overflowRef,
      scrollRef: refs.floating
    }), useListNavigation(interactionContext, {
      listRef: listItemsRef,
      activeIndex: selectContext.activeIndex ?? 0,
      selectedIndex,
      onNavigate: index => {
        index !== null && setActiveIndex(index);
      },
      scrollItemIntoView: !1
    }), useTypeahead(interactionContext, {
      listRef: listContentRef,
      onMatch,
      selectedIndex,
      activeIndex: selectContext.activeIndex,
      onTypingChange: e => {
        state.current.isTyping = e;
      }
    })],
    interactions = useInteractions(React.useMemo(() => interactionsProps, interactionsProps)),
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
            flushSync(() => {
              setScrollTop(event.currentTarget.scrollTop);
            });
          }
        });
      }
    }), [refs.reference.current, x, y, refs.floating.current, interactions]);
  useIsomorphicLayoutEffect(() => {
    if (open) return allowMouseUpRef.current = !1, selectTimeoutRef.current = setTimeout(() => {
      allowSelectRef.current = !0, allowMouseUpRef.current = !0;
    }, 300), () => {
      clearTimeout(selectTimeoutRef.current);
    };
    allowSelectRef.current = !1, allowMouseUpRef.current = !0, setInnerOffset(0), setFallback(!1), setBlockSelection(!1);
  }, [open]), useIsomorphicLayoutEffect(() => {
    !open && state.current.isMouseOutside && (state.current.isMouseOutside = !1);
  }, [open]), useIsomorphicLayoutEffect(() => {
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
  }, [open, fallback, selectedIndex]), useIsomorphicLayoutEffect(() => {
    refs.floating.current && fallback && (refs.floating.current.style.maxHeight = "");
  }, [refs, fallback]);
  const floatingContext = React.useMemo(() => ({
    refs,
    dataRef
  }), [refs]);
  return /* @__PURE__ */jsx(SelectProvider, {
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
    children: /* @__PURE__ */jsx(SelectItemParentProvider, {
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
export { SelectInlineImpl };
//# sourceMappingURL=SelectImpl.mjs.map
