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
var useClick_exports = {};
__export(useClick_exports, {
  useClick: () => useClick
});
module.exports = __toCommonJS(useClick_exports);
var import_react = require("react"),
  import_utils = require("./utils.native.js");
function isButtonTarget(event) {
  return (0, import_utils.isHTMLElement)(event.target) && event.target.tagName === "BUTTON";
}
function isAnchorTarget(event) {
  return (0, import_utils.isHTMLElement)(event.target) && event.target.tagName === "A";
}
function isSpaceIgnored(element) {
  return (0, import_utils.isTypeableElement)(element);
}
function useClick(context) {
  var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    {
      open,
      onOpenChange,
      dataRef,
      elements: {
        domReference
      }
    } = context,
    {
      enabled = !0,
      event: eventOption = "click",
      toggle = !0,
      ignoreMouse = !1,
      keyboardHandlers = !0,
      stickIfOpen = !0
    } = props,
    pointerTypeRef = (0, import_react.useRef)(void 0),
    didKeyDownRef = (0, import_react.useRef)(!1),
    reference = (0, import_react.useMemo)(function () {
      return {
        onPointerDown(event) {
          pointerTypeRef.current = event.pointerType;
        },
        onMouseDown(event) {
          var pointerType = pointerTypeRef.current;
          event.button === 0 && eventOption !== "click" && ((0, import_utils.isMouseLikePointerType)(pointerType, !0) && ignoreMouse || (open && toggle && (!(dataRef.current.openEvent && stickIfOpen) || dataRef.current.openEvent.type === "mousedown") ? onOpenChange(!1, event.nativeEvent || event, "click") : (event.preventDefault(), onOpenChange(!0, event.nativeEvent || event, "click"))));
        },
        onClick(event) {
          var pointerType = pointerTypeRef.current;
          if (eventOption === "mousedown" && pointerTypeRef.current) {
            pointerTypeRef.current = void 0;
            return;
          }
          (0, import_utils.isMouseLikePointerType)(pointerType, !0) && ignoreMouse || (open && toggle && (!(dataRef.current.openEvent && stickIfOpen) || dataRef.current.openEvent.type === "click") ? onOpenChange(!1, event.nativeEvent || event, "click") : onOpenChange(!0, event.nativeEvent || event, "click"));
        },
        onKeyDown(event) {
          pointerTypeRef.current = void 0, !(event.defaultPrevented || !keyboardHandlers || isButtonTarget(event)) && (event.key === " " && !isSpaceIgnored(domReference) && (event.preventDefault(), didKeyDownRef.current = !0), !isAnchorTarget(event) && event.key === "Enter" && onOpenChange(!(open && toggle), event.nativeEvent || event, "click"));
        },
        onKeyUp(event) {
          event.defaultPrevented || !keyboardHandlers || isButtonTarget(event) || isSpaceIgnored(domReference) || event.key === " " && didKeyDownRef.current && (didKeyDownRef.current = !1, onOpenChange(!(open && toggle), event.nativeEvent || event, "click"));
        }
      };
    }, [dataRef, domReference, eventOption, ignoreMouse, keyboardHandlers, onOpenChange, open, stickIfOpen, toggle]);
  return (0, import_react.useMemo)(function () {
    return enabled ? {
      reference
    } : {};
  }, [enabled, reference]);
}
//# sourceMappingURL=useClick.native.js.map
