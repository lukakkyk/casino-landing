function getDocument(node) {
  return node?.ownerDocument || document;
}
function contains(parent, child) {
  if (!parent || !child) return !1;
  const rootNode = child.getRootNode?.();
  if (parent.contains(child)) return !0;
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    for (; next;) {
      if (parent === next) return !0;
      next = next.parentNode || next.host;
    }
  }
  return !1;
}
function isShadowRoot(node) {
  return node instanceof ShadowRoot;
}
function getTarget(event) {
  return "composedPath" in event ? event.composedPath()[0] : event.target;
}
function activeElement(doc) {
  let el = doc.activeElement;
  for (; el?.shadowRoot?.activeElement != null;) el = el.shadowRoot.activeElement;
  return el;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement;
}
function isElement(value) {
  return value instanceof Element;
}
const TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function isTypeableElement(element) {
  return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
}
function isTypeableCombobox(element) {
  return element ? element.getAttribute("role") === "combobox" && isTypeableElement(element) : !1;
}
function getPlatform() {
  const uaData = navigator.userAgentData;
  return uaData?.platform ? uaData.platform : navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  return uaData && Array.isArray(uaData.brands) ? uaData.brands.map(({
    brand,
    version
  }) => `${brand}/${version}`).join(" ") : navigator.userAgent;
}
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
function isMac() {
  return getPlatform().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function isJSDOM() {
  return getUserAgent().includes("jsdom/");
}
function matchesFocusVisible(element) {
  if (!element || isJSDOM()) return !0;
  try {
    return element.matches(":focus-visible");
  } catch {
    return !0;
  }
}
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  return strict || values.push("", void 0), values.includes(pointerType);
}
function clearTimeoutIfSet(timeoutRef) {
  timeoutRef.current !== -1 && (clearTimeout(timeoutRef.current), timeoutRef.current = -1);
}
function stopEvent(event) {
  event.preventDefault(), event.stopPropagation();
}
function isVirtualClick(event) {
  return event.mozInputSource === 0 && event.isTrusted ? !0 : isAndroid() && event.pointerType ? event.type === "click" && event.buttons === 1 : event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  return isJSDOM() ? !1 : !isAndroid() && event.width === 0 && event.height === 0 || isAndroid() && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse" || event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "touch";
}
function isAndroid() {
  const re = /android/i;
  return re.test(getPlatform()) || re.test(getUserAgent());
}
let rafId = 0;
function enqueueFocus(el, options = {}) {
  const {
    preventScroll = !1,
    cancelPrevious = !0,
    sync = !1
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = () => el?.focus({
    preventScroll
  });
  sync ? exec() : rafId = requestAnimationFrame(exec);
}
function isListIndexDisabled(listRef, index, disabledIndices) {
  if (typeof disabledIndices == "function") return disabledIndices(index);
  if (disabledIndices) return disabledIndices.includes(index);
  const element = listRef.current[index];
  return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
}
function findNonDisabledListIndex(listRef, {
  startingIndex = -1,
  decrement = !1,
  disabledIndices,
  amount = 1
} = {}) {
  let index = startingIndex;
  do index += decrement ? -amount : amount; while (index >= 0 && index <= listRef.current.length - 1 && isListIndexDisabled(listRef, index, disabledIndices));
  return index;
}
function getMinListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef, {
    disabledIndices
  });
}
function getMaxListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef, {
    decrement: !0,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function isIndexOutOfListBounds(listRef, index) {
  return index < 0 || index >= listRef.current.length;
}
export { activeElement, clearTimeoutIfSet, contains, enqueueFocus, findNonDisabledListIndex, getDocument, getMaxListIndex, getMinListIndex, getTarget, isElement, isHTMLElement, isIndexOutOfListBounds, isListIndexDisabled, isMac, isMouseLikePointerType, isSafari, isTypeableCombobox, isTypeableElement, isVirtualClick, isVirtualPointerEvent, matchesFocusVisible, stopEvent };
//# sourceMappingURL=utils.mjs.map
