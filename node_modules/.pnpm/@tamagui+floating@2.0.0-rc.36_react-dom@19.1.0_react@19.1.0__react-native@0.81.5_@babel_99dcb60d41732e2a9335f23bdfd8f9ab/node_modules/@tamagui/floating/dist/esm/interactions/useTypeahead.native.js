import { useLayoutEffect, useMemo, useRef } from "react";
import { useEvent } from "@tamagui/use-event";
import { clearTimeoutIfSet, stopEvent } from "./utils.native.js";
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
    timeoutIdRef = useRef(-1),
    stringRef = useRef(""),
    _ref,
    prevIndexRef = useRef((_ref = selectedIndex ?? activeIndex) !== null && _ref !== void 0 ? _ref : -1),
    matchIndexRef = useRef(null),
    onMatch = useEvent(unstable_onMatch || function () {}),
    onTypingChange = useEvent(unstable_onTypingChange || function () {}),
    findMatchRef = useRef(findMatch);
  findMatchRef.current = findMatch;
  var ignoreKeysRef = useRef(ignoreKeys);
  ignoreKeysRef.current = ignoreKeys, useLayoutEffect(function () {
    open && (clearTimeoutIfSet(timeoutIdRef), matchIndexRef.current = null, stringRef.current = "");
  }, [open]), useLayoutEffect(function () {
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
      if (stringRef.current.length > 0 && stringRef.current[0] !== " " && (getMatchingIndex(listContent, listContent, stringRef.current) === -1 ? setTypingChange(!1) : event.key === " " && stopEvent(event)), !(listContent == null || ignoreKeysRef.current.includes(event.key) ||
      // character key
      event.key.length !== 1 ||
      // modifier key
      event.ctrlKey || event.metaKey || event.altKey)) {
        open && event.key !== " " && (stopEvent(event), setTypingChange(!0));
        var allowRapidSuccessionOfFirstLetter = listContent.every(function (text) {
          var _text_, _text_1;
          return text ? ((_text_ = text[0]) === null || _text_ === void 0 ? void 0 : _text_.toLocaleLowerCase()) !== ((_text_1 = text[1]) === null || _text_1 === void 0 ? void 0 : _text_1.toLocaleLowerCase()) : !0;
        });
        allowRapidSuccessionOfFirstLetter && stringRef.current === event.key && (stringRef.current = "", prevIndexRef.current = matchIndexRef.current), stringRef.current += event.key, clearTimeoutIfSet(timeoutIdRef), timeoutIdRef.current = window.setTimeout(function () {
          stringRef.current = "", prevIndexRef.current = matchIndexRef.current, setTypingChange(!1);
        }, resetMs);
        var prevIndex = prevIndexRef.current,
          index = getMatchingIndex(listContent, [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)], stringRef.current);
        index !== -1 ? (onMatch(index), matchIndexRef.current = index) : event.key !== " " && (stringRef.current = "", setTypingChange(!1));
      }
    },
    reference = useMemo(function () {
      return {
        onKeyDown
      };
    }, [open, enabled]),
    floating = useMemo(function () {
      return {
        onKeyDown,
        onKeyUp(event) {
          event.key === " " && setTypingChange(!1);
        }
      };
    }, [open, enabled]);
  return useMemo(function () {
    return enabled ? {
      reference,
      floating
    } : {};
  }, [enabled, reference, floating]);
}
export { useTypeahead };
//# sourceMappingURL=useTypeahead.native.js.map
