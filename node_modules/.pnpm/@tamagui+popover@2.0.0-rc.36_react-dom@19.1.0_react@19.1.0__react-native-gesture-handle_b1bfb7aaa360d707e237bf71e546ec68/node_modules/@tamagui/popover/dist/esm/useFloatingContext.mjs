import React from "react";
import { createFloatingEvents, safePolygon, useDelayGroup, useFloatingRaw, useFocus, useHover, useInteractions, useRole, PopupTriggerMap } from "@tamagui/floating";
const useFloatingContext = ({
  open,
  setOpen,
  disable,
  disableFocus,
  hoverable,
  role: roleProp = "dialog",
  focus: focusProp,
  groupId,
  delay: delayProp,
  restMs: restMsProp
}) => {
  "use no memo";

  const openRef = React.useRef(open);
  openRef.current = open;
  const hoverableRef = React.useRef(hoverable);
  hoverableRef.current = hoverable;
  const disableRef = React.useRef(disable);
  disableRef.current = disable;
  const disableFocusRef = React.useRef(disableFocus);
  disableFocusRef.current = disableFocus;
  const roleRef = React.useRef(roleProp);
  roleRef.current = roleProp;
  const focusRef = React.useRef(focusProp);
  focusRef.current = focusProp;
  const groupIdRef = React.useRef(groupId);
  groupIdRef.current = groupId;
  const delayRef = React.useRef(delayProp);
  delayRef.current = delayProp;
  const restMsRef = React.useRef(restMsProp);
  restMsRef.current = restMsProp;
  const events = React.useMemo(() => createFloatingEvents(), []),
    triggerElements = React.useMemo(() => new PopupTriggerMap(), []);
  return React.useEffect(() => {
    events.emit("openchange", {
      open
    });
  }, [open, events]), React.useCallback(props => {
    const onTriggerRef = React.useRef(!1),
      restTimerRef = React.useRef(void 0),
      graceRef = React.useRef(void 0),
      pendingCloseRef = React.useRef(!1),
      isOverFloatingRef = React.useRef(!1),
      handleCloseActiveRef = React.useRef(!1);
    React.useEffect(() => () => {
      clearTimeout(restTimerRef.current), clearTimeout(graceRef.current);
    }, []);
    const onOpenChange = (val, event) => {
        if (val && event?.type === "mouseenter") return;
        if (!val && onTriggerRef.current && (event?.type === "mousemove" || event?.type === "mouseleave")) {
          pendingCloseRef.current = !0;
          return;
        }
        const type = event?.type === "mousemove" || event?.type === "mouseenter" || event?.type === "mouseleave" ? "hover" : "press";
        setOpen(val, type);
      },
      floating = useFloatingRaw({
        ...props,
        open: openRef.current
      }),
      currentHoverable = hoverableRef.current,
      dataRef = React.useRef({});
    dataRef.current.placement = floating.placement;
    const floatingRefs = floating.refs,
      nullRef = {
        current: null
      },
      interactionContext = {
        open: openRef.current,
        onOpenChange,
        refs: {
          reference: floatingRefs?.reference || nullRef,
          floating: floatingRefs?.floating || nullRef,
          domReference: floatingRefs?.reference || nullRef
        },
        elements: {
          get reference() {
            return floatingRefs?.reference?.current || null;
          },
          get floating() {
            return floatingRefs?.floating?.current || null;
          },
          get domReference() {
            return floatingRefs?.reference?.current || null;
          }
        },
        dataRef,
        events,
        triggerElements,
        handleCloseActiveRef
      },
      {
        delay: groupDelay,
        currentId: groupCurrentId
      } = useDelayGroup(interactionContext, {
        id: groupIdRef.current
      }),
      isInActiveGroup = groupIdRef.current && groupCurrentId != null && typeof groupDelay == "object";
    let delay, restMs;
    isInActiveGroup ? (delay = groupDelay, restMs = 0) : delayRef.current !== void 0 ? (delay = delayRef.current, restMs = restMsRef.current ?? 0) : (delay = currentHoverable && typeof currentHoverable == "object" ? currentHoverable.delay ?? 0 : 0, restMs = currentHoverable && typeof currentHoverable == "object" ? currentHoverable.restMs ?? 0 : 0);
    const currentRole = roleRef.current,
      currentFocus = focusRef.current,
      {
        getReferenceProps,
        getFloatingProps: getFloatingPropsInner
      } = useInteractions([currentHoverable ? useHover(interactionContext, {
        enabled: !disableRef.current && !!currentHoverable,
        delay,
        restMs,
        handleClose: safePolygon({
          requireIntent: !0,
          buffer: 1,
          __debug: typeof window < "u" && new URLSearchParams(window.location.search).get("debug") === "safePolygon"
        }),
        ...(typeof currentHoverable == "object" && currentHoverable)
      }) : useHover(interactionContext, {
        enabled: !1
      }), useFocus(interactionContext, {
        enabled: !disableRef.current && !disableFocusRef.current,
        visibleOnly: !0,
        ...currentFocus
      }), useRole(interactionContext, {
        role: currentRole
      })]),
      getFloatingProps = currentHoverable ? userProps => {
        const merged = getFloatingPropsInner(userProps),
          origEnter = merged.onMouseEnter,
          origLeave = merged.onMouseLeave;
        return {
          ...merged,
          onMouseEnter: e => {
            isOverFloatingRef.current = !0, origEnter?.(e);
          },
          onMouseLeave: e => {
            isOverFloatingRef.current = !1, origLeave?.(e);
          }
        };
      } : getFloatingPropsInner,
      openDelay = typeof delay == "number" ? delay : delay?.open ?? 0,
      closeDelay = typeof delay == "number" ? delay : delay?.close ?? 0,
      setOpenWithDelay = () => {
        clearTimeout(restTimerRef.current), restMs && !openDelay ? restTimerRef.current = setTimeout(() => {
          setOpen(!0, "hover");
        }, restMs) : openDelay ? restTimerRef.current = setTimeout(() => {
          setOpen(!0, "hover");
        }, openDelay) : setOpen(!0, "hover");
      };
    return {
      ...floating,
      open: openRef.current,
      triggerElements,
      getReferenceProps,
      getFloatingProps,
      onHoverReference: currentHoverable ? _event => {
        clearTimeout(graceRef.current), onTriggerRef.current = !0, pendingCloseRef.current = !1, clearTimeout(restTimerRef.current), !openRef.current && setOpenWithDelay();
      } : void 0,
      onLeaveReference: currentHoverable ? () => {
        clearTimeout(restTimerRef.current), clearTimeout(graceRef.current), graceRef.current = setTimeout(() => {
          if (onTriggerRef.current = !1, pendingCloseRef.current) {
            pendingCloseRef.current = !1, setOpen(!1, "hover");
            return;
          }
          openRef.current && (graceRef.current = setTimeout(() => {
            openRef.current && !isOverFloatingRef.current && !handleCloseActiveRef.current && setOpen(!1, "hover");
          }, Math.max(250, closeDelay)));
        }, 40);
      } : void 0
    };
  }, [setOpen]);
};
export { useFloatingContext };
//# sourceMappingURL=useFloatingContext.mjs.map
