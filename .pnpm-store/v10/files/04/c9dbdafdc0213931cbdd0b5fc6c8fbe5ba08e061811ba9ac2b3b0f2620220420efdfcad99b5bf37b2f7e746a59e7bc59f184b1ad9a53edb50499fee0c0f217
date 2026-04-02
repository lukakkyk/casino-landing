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
var useFocus_exports = {};
__export(useFocus_exports, {
  useFocus: () => useFocus
});
module.exports = __toCommonJS(useFocus_exports);
var import_react = require("react"),
  import_utils = require("./utils.native.js");
function isMacSafari() {
  return (0, import_utils.isMac)() && (0, import_utils.isSafari)();
}
function useFocus(context) {
  var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    {
      open,
      onOpenChange,
      events,
      dataRef,
      elements
    } = context,
    {
      enabled = !0,
      visibleOnly = !0
    } = props,
    blockFocusRef = (0, import_react.useRef)(!1),
    timeoutRef = (0, import_react.useRef)(-1),
    keyboardModalityRef = (0, import_react.useRef)(!0);
  (0, import_react.useEffect)(function () {
    if (!enabled) return;
    var win = (0, import_utils.getDocument)(elements.domReference).defaultView || window;
    function onBlur() {
      !open && (0, import_utils.isHTMLElement)(elements.domReference) && elements.domReference === (0, import_utils.activeElement)((0, import_utils.getDocument)(elements.domReference)) && (blockFocusRef.current = !0);
    }
    function onKeyDown() {
      keyboardModalityRef.current = !0;
    }
    function onPointerDown() {
      keyboardModalityRef.current = !1;
    }
    return win.addEventListener("blur", onBlur), isMacSafari() && (win.addEventListener("keydown", onKeyDown, !0), win.addEventListener("pointerdown", onPointerDown, !0)), function () {
      win.removeEventListener("blur", onBlur), isMacSafari() && (win.removeEventListener("keydown", onKeyDown, !0), win.removeEventListener("pointerdown", onPointerDown, !0));
    };
  }, [elements.domReference, open, enabled]), (0, import_react.useEffect)(function () {
    if (!enabled || !events) return;
    function handleOpenChange(param) {
      var {
        reason
      } = param;
      (reason === "reference-press" || reason === "escape-key") && (blockFocusRef.current = !0);
    }
    return events.on("openchange", handleOpenChange), function () {
      events.off("openchange", handleOpenChange);
    };
  }, [events, enabled]), (0, import_react.useEffect)(function () {
    return function () {
      (0, import_utils.clearTimeoutIfSet)(timeoutRef);
    };
  }, []);
  var reference = (0, import_react.useMemo)(function () {
    return {
      onMouseLeave() {
        blockFocusRef.current = !1;
      },
      onFocus(event) {
        if (!blockFocusRef.current) {
          var target = (0, import_utils.getTarget)(event.nativeEvent);
          if (visibleOnly && (0, import_utils.isElement)(target)) {
            if (isMacSafari() && !event.relatedTarget) {
              if (!keyboardModalityRef.current && !(0, import_utils.isTypeableElement)(target)) return;
            } else if (!(0, import_utils.matchesFocusVisible)(target)) return;
          }
          onOpenChange(!0, event.nativeEvent, "focus");
        }
      },
      onBlur(event) {
        blockFocusRef.current = !1;
        var relatedTarget = event.relatedTarget,
          nativeEvent = event.nativeEvent;
        timeoutRef.current = window.setTimeout(function () {
          var activeEl = (0, import_utils.activeElement)(elements.domReference ? elements.domReference.ownerDocument : document);
          !relatedTarget && activeEl === elements.domReference || (0, import_utils.contains)(context.refs.floating.current, activeEl) || (0, import_utils.contains)(elements.domReference, activeEl) || onOpenChange(!1, nativeEvent, "focus");
        });
      }
    };
  }, [context.refs.floating, elements.domReference, onOpenChange, visibleOnly]);
  return (0, import_react.useMemo)(function () {
    return enabled ? {
      reference
    } : {};
  }, [enabled, reference]);
}
//# sourceMappingURL=useFocus.native.js.map
