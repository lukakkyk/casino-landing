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
var useFloatingContext_exports = {};
__export(useFloatingContext_exports, {
  useFloatingContext: () => useFloatingContext
});
module.exports = __toCommonJS(useFloatingContext_exports);
var import_react = __toESM(require("react"), 1),
  import_floating = require("@tamagui/floating");
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

  const openRef = import_react.default.useRef(open);
  openRef.current = open;
  const hoverableRef = import_react.default.useRef(hoverable);
  hoverableRef.current = hoverable;
  const disableRef = import_react.default.useRef(disable);
  disableRef.current = disable;
  const disableFocusRef = import_react.default.useRef(disableFocus);
  disableFocusRef.current = disableFocus;
  const roleRef = import_react.default.useRef(roleProp);
  roleRef.current = roleProp;
  const focusRef = import_react.default.useRef(focusProp);
  focusRef.current = focusProp;
  const groupIdRef = import_react.default.useRef(groupId);
  groupIdRef.current = groupId;
  const delayRef = import_react.default.useRef(delayProp);
  delayRef.current = delayProp;
  const restMsRef = import_react.default.useRef(restMsProp);
  restMsRef.current = restMsProp;
  const events = import_react.default.useMemo(() => (0, import_floating.createFloatingEvents)(), []),
    triggerElements = import_react.default.useMemo(() => new import_floating.PopupTriggerMap(), []);
  return import_react.default.useEffect(() => {
    events.emit("openchange", {
      open
    });
  }, [open, events]), import_react.default.useCallback(props => {
    const onTriggerRef = import_react.default.useRef(!1),
      restTimerRef = import_react.default.useRef(void 0),
      graceRef = import_react.default.useRef(void 0),
      pendingCloseRef = import_react.default.useRef(!1),
      isOverFloatingRef = import_react.default.useRef(!1),
      handleCloseActiveRef = import_react.default.useRef(!1);
    import_react.default.useEffect(() => () => {
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
      floating = (0, import_floating.useFloatingRaw)({
        ...props,
        open: openRef.current
      }),
      currentHoverable = hoverableRef.current,
      dataRef = import_react.default.useRef({});
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
      } = (0, import_floating.useDelayGroup)(interactionContext, {
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
      } = (0, import_floating.useInteractions)([currentHoverable ? (0, import_floating.useHover)(interactionContext, {
        enabled: !disableRef.current && !!currentHoverable,
        delay,
        restMs,
        handleClose: (0, import_floating.safePolygon)({
          requireIntent: !0,
          buffer: 1,
          __debug: typeof window < "u" && new URLSearchParams(window.location.search).get("debug") === "safePolygon"
        }),
        ...(typeof currentHoverable == "object" && currentHoverable)
      }) : (0, import_floating.useHover)(interactionContext, {
        enabled: !1
      }), (0, import_floating.useFocus)(interactionContext, {
        enabled: !disableRef.current && !disableFocusRef.current,
        visibleOnly: !0,
        ...currentFocus
      }), (0, import_floating.useRole)(interactionContext, {
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