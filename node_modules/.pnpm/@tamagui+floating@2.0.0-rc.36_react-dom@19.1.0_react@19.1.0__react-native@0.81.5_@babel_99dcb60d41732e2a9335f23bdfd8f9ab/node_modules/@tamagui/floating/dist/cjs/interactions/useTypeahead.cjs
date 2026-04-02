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
  import_utils = require("./utils.cjs");
function useTypeahead(context, props) {
  const {
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
    prevIndexRef = (0, import_react.useRef)(selectedIndex ?? activeIndex ?? -1),
    matchIndexRef = (0, import_react.useRef)(null),
    onMatch = (0, import_use_event.useEvent)(unstable_onMatch || (() => {})),
    onTypingChange = (0, import_use_event.useEvent)(unstable_onTypingChange || (() => {})),
    findMatchRef = (0, import_react.useRef)(findMatch);
  findMatchRef.current = findMatch;
  const ignoreKeysRef = (0, import_react.useRef)(ignoreKeys);
  ignoreKeysRef.current = ignoreKeys, (0, import_react.useLayoutEffect)(() => {
    open && ((0, import_utils.clearTimeoutIfSet)(timeoutIdRef), matchIndexRef.current = null, stringRef.current = "");
  }, [open]), (0, import_react.useLayoutEffect)(() => {
    open && stringRef.current === "" && (prevIndexRef.current = selectedIndex ?? activeIndex ?? -1);
  }, [open, selectedIndex, activeIndex]);
  const setTypingChange = value => {
      value ? dataRef.current.typing || (dataRef.current.typing = value, onTypingChange(value)) : dataRef.current.typing && (dataRef.current.typing = value, onTypingChange(value));
    },
    onKeyDown = event => {
      function getMatchingIndex(list, orderedList, string) {
        const str = findMatchRef.current ? findMatchRef.current(orderedList, string) : orderedList.find(text => text?.toLocaleLowerCase().indexOf(string.toLocaleLowerCase()) === 0);
        return str ? list.indexOf(str) : -1;
      }
      const listContent = listRef.current;
      if (stringRef.current.length > 0 && stringRef.current[0] !== " " && (getMatchingIndex(listContent, listContent, stringRef.current) === -1 ? setTypingChange(!1) : event.key === " " && (0, import_utils.stopEvent)(event)), listContent == null || ignoreKeysRef.current.includes(event.key) ||
      // character key
      event.key.length !== 1 ||
      // modifier key
      event.ctrlKey || event.metaKey || event.altKey) return;
      open && event.key !== " " && ((0, import_utils.stopEvent)(event), setTypingChange(!0)), listContent.every(text => text ? text[0]?.toLocaleLowerCase() !== text[1]?.toLocaleLowerCase() : !0) && stringRef.current === event.key && (stringRef.current = "", prevIndexRef.current = matchIndexRef.current), stringRef.current += event.key, (0, import_utils.clearTimeoutIfSet)(timeoutIdRef), timeoutIdRef.current = window.setTimeout(() => {
        stringRef.current = "", prevIndexRef.current = matchIndexRef.current, setTypingChange(!1);
      }, resetMs);
      const prevIndex = prevIndexRef.current,
        index = getMatchingIndex(listContent, [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)], stringRef.current);
      index !== -1 ? (onMatch(index), matchIndexRef.current = index) : event.key !== " " && (stringRef.current = "", setTypingChange(!1));
    },
    reference = (0, import_react.useMemo)(() => ({
      onKeyDown
    }), [open, enabled]),
    floating = (0, import_react.useMemo)(() => ({
      onKeyDown,
      onKeyUp(event) {
        event.key === " " && setTypingChange(!1);
      }
    }), [open, enabled]);
  return (0, import_react.useMemo)(() => enabled ? {
    reference,
    floating
  } : {}, [enabled, reference, floating]);
}