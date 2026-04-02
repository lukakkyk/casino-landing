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
var useTypeahead_exports = {};
__export(useTypeahead_exports, {
  useTypeahead: () => useTypeahead
});
module.exports = __toCommonJS(useTypeahead_exports);
var import_react = require("react"),
  import_use_event = require("@tamagui/use-event"),
  import_utils = require("./utils.native.js");
function useTypeahead(context, props) {
  var {
      open,
      dataRef
    } = context,
    {
      listRef,
      activeIndex,
      onMatch: unstable_onMatch,
      onTypingChange: unstable_onTypingChange,
      enabled = !0,
      findMatch = null,
      resetMs = 750,
      ignoreKeys = [],
      selectedIndex = null
    } = props,
    timeoutIdRef = (0, import_react.useRef)(-1),
    stringRef = (0, import_react.useRef)(""),
    _ref,
    prevIndexRef = (0, import_react.useRef)((_ref = selectedIndex ?? activeIndex) !== null && _ref !== void 0 ? _ref : -1),
    matchIndexRef = (0, import_react.useRef)(null),
    onMatch = (0, import_use_event.useEvent)(unstable_onMatch || function () {}),
    onTypingChange = (0, import_use_event.useEvent)(unstable_onTypingChange || function () {}),
    findMatchRef = (0, import_react.useRef)(findMatch);
  findMatchRef.current = findMatch;
  var ignoreKeysRef = (0, import_react.useRef)(ignoreKeys);
  ignoreKeysRef.current = ignoreKeys, (0, import_react.useLayoutEffect)(function () {
    open && ((0, import_utils.clearTimeoutIfSet)(timeoutIdRef), matchIndexRef.current = null, stringRef.current = "");
  }, [open]), (0, import_react.useLayoutEffect)(function () {
    if (open && stringRef.current === "") {
      var _ref2;
      prevIndexRef.current = (_ref2 = selectedIndex ?? activeIndex) !== null && _ref2 !== void 0 ? _ref2 : -1;
    }
  }, [open, selectedIndex, activeIndex]);
  var setTypingChange = function (value) {
      value ? dataRef.current.typing || (dataRef.current.typing = value, onTypingChange(value)) : dataRef.current.typing && (dataRef.current.typing = value, onTypingChange(value));
    },
    onKeyDown = function (event) {
      function getMatchingIndex(list, orderedList, string) {
        var str = findMatchRef.current ? findMatchRef.current(orderedList, string) : orderedList.find(function (text) {
          return text?.toLocaleLowerCase().indexOf(string.toLocaleLowerCase()) === 0;
        });
        return str ? list.indexOf(str) : -1;
      }
      var listContent = listRef.current;
      if (stringRef.current.length > 0 && stringRef.current[0] !== " " && (getMatchingIndex(listContent, listContent, stringRef.current) === -1 ? setTypingChange(!1) : event.key === " " && (0, import_utils.stopEvent)(event)), !(listContent == null || ignoreKeysRef.current.includes(event.key) ||
      // character key
      event.key.length !== 1 ||
      // modifier key
      event.ctrlKey || event.metaKey || event.altKey)) {
        open && event.key !== " " && ((0, import_utils.stopEvent)(event), setTypingChange(!0));
        var allowRapidSuccessionOfFirstLetter = listContent.every(function (text) {
          var _text_, _text_1;
          return text ? ((_text_ = text[0]) === null || _text_ === void 0 ? void 0 : _text_.toLocaleLowerCase()) !== ((_text_1 = text[1]) === null || _text_1 === void 0 ? void 0 : _text_1.toLocaleLowerCase()) : !0;
        });
        allowRapidSuccessionOfFirstLetter && stringRef.current === event.key && (stringRef.current = "", prevIndexRef.current = matchIndexRef.current), stringRef.current += event.key, (0, import_utils.clearTimeoutIfSet)(timeoutIdRef), timeoutIdRef.current = window.setTimeout(function () {
          stringRef.current = "", prevIndexRef.current = matchIndexRef.current, setTypingChange(!1);
        }, resetMs);
        var prevIndex = prevIndexRef.current,
          index = getMatchingIndex(listContent, [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)], stringRef.current);
        index !== -1 ? (onMatch(index), matchIndexRef.current = index) : event.key !== " " && (stringRef.current = "", setTypingChange(!1));
      }
    },
    reference = (0, import_react.useMemo)(function () {
      return {
        onKeyDown
      };
    }, [open, enabled]),
    floating = (0, import_react.useMemo)(function () {
      return {
        onKeyDown,
        onKeyUp(event) {
          event.key === " " && setTypingChange(!1);
        }
      };
    }, [open, enabled]);
  return (0, import_react.useMemo)(function () {
    return enabled ? {
      reference,
      floating
    } : {};
  }, [enabled, reference, floating]);
}
//# sourceMappingURL=useTypeahead.native.js.map
