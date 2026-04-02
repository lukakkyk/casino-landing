import { useLayoutEffect, useMemo, useRef } from "react";
import { useEvent } from "@tamagui/use-event";
import { clearTimeoutIfSet, stopEvent } from "./utils.mjs";
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
    timeoutIdRef = useRef(-1),
    stringRef = useRef(""),
    prevIndexRef = useRef(selectedIndex ?? activeIndex ?? -1),
    matchIndexRef = useRef(null),
    onMatch = useEvent(unstable_onMatch || (() => {})),
    onTypingChange = useEvent(unstable_onTypingChange || (() => {})),
    findMatchRef = useRef(findMatch);
  findMatchRef.current = findMatch;
  const ignoreKeysRef = useRef(ignoreKeys);
  ignoreKeysRef.current = ignoreKeys, useLayoutEffect(() => {
    open && (clearTimeoutIfSet(timeoutIdRef), matchIndexRef.current = null, stringRef.current = "");
  }, [open]), useLayoutEffect(() => {
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
      if (stringRef.current.length > 0 && stringRef.current[0] !== " " && (getMatchingIndex(listContent, listContent, stringRef.current) === -1 ? setTypingChange(!1) : event.key === " " && stopEvent(event)), listContent == null || ignoreKeysRef.current.includes(event.key) ||
      // character key
      event.key.length !== 1 ||
      // modifier key
      event.ctrlKey || event.metaKey || event.altKey) return;
      open && event.key !== " " && (stopEvent(event), setTypingChange(!0)), listContent.every(text => text ? text[0]?.toLocaleLowerCase() !== text[1]?.toLocaleLowerCase() : !0) && stringRef.current === event.key && (stringRef.current = "", prevIndexRef.current = matchIndexRef.current), stringRef.current += event.key, clearTimeoutIfSet(timeoutIdRef), timeoutIdRef.current = window.setTimeout(() => {
        stringRef.current = "", prevIndexRef.current = matchIndexRef.current, setTypingChange(!1);
      }, resetMs);
      const prevIndex = prevIndexRef.current,
        index = getMatchingIndex(listContent, [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)], stringRef.current);
      index !== -1 ? (onMatch(index), matchIndexRef.current = index) : event.key !== " " && (stringRef.current = "", setTypingChange(!1));
    },
    reference = useMemo(() => ({
      onKeyDown
    }), [open, enabled]),
    floating = useMemo(() => ({
      onKeyDown,
      onKeyUp(event) {
        event.key === " " && setTypingChange(!1);
      }
    }), [open, enabled]);
  return useMemo(() => enabled ? {
    reference,
    floating
  } : {}, [enabled, reference, floating]);
}
export { useTypeahead };
//# sourceMappingURL=useTypeahead.mjs.map
