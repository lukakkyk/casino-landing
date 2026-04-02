import * as React from "react";
let count = 0;
function FocusGuards(props) {
  return useFocusGuards(), props.children;
}
function useFocusGuards() {
  React.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-tamagui-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard()), document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard()), count++, () => {
      count === 1 && document.querySelectorAll("[data-tamagui-focus-guard]").forEach(node => node.remove()), count--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  return element.setAttribute("data-tamagui-focus-guard", ""), element.tabIndex = 0, element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", element;
}
const Root = FocusGuards;
export { FocusGuards, Root, useFocusGuards };
//# sourceMappingURL=FocusGuard.mjs.map
