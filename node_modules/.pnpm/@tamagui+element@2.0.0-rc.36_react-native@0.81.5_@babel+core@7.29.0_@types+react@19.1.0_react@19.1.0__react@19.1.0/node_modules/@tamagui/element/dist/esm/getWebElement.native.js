function _instanceof(left, right) {
  return right != null && typeof Symbol < "u" && right[Symbol.hasInstance] ? !!right[Symbol.hasInstance](left) : left instanceof right;
}
function getWebElement(element) {
  if (!element) throw new Error("Element is null or undefined");
  if (!_instanceof(element, HTMLElement)) throw new Error("Element is not an HTMLElement");
  return element;
}
export { getWebElement };
//# sourceMappingURL=getWebElement.native.js.map
