import { useInsertionEffect } from "react";
import { useConstant } from "@tamagui/use-constant";
import { useForceUpdate } from "@tamagui/use-force-update";
import { Children, isValidElement, useContext, useMemo, useRef, useState } from "react";
import { LayoutGroupContext } from "./LayoutGroupContext.mjs";
import { PresenceChild } from "./PresenceChild.mjs";
import { Fragment, jsx } from "react/jsx-runtime";
const getChildKey = child => child.key || (() => {
  const ct = child.type,
    defaultName = ct.displayName || ct.name || "";
  return ct && typeof ct == "object" && "staticConfig" in ct && ct.staticConfig.componentName || defaultName;
})();
function onlyElements(children) {
  const filtered = [];
  return Children.forEach(children, child => {
    isValidElement(child) && filtered.push(child);
  }), filtered;
}
const AnimatePresence = ({
  children,
  enterVariant,
  exitVariant,
  enterExitVariant,
  initial = !0,
  onExitComplete,
  exitBeforeEnter,
  mode,
  presenceAffectsLayout = !0,
  custom,
  passThrough
}) => {
  const effectiveMode = mode ?? (exitBeforeEnter ? "wait" : "sync"),
    presentChildren = useMemo(() => onlyElements(children), [children]),
    presentKeys = presentChildren.map(getChildKey),
    isInitialRender = useRef(!0),
    frozenCustomRef = useRef(/* @__PURE__ */new Map()),
    pendingPresentChildren = useRef(presentChildren),
    exitComplete = useConstant(() => /* @__PURE__ */new Map()),
    [diffedChildren, setDiffedChildren] = useState(presentChildren),
    [renderedChildren, setRenderedChildren] = useState(presentChildren),
    forceRender = useContext(LayoutGroupContext).forceRender ?? useForceUpdate();
  if (passThrough) return /* @__PURE__ */jsx(Fragment, {
    children
  });
  if (useInsertionEffect(() => {
    isInitialRender.current = !1, pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      presentKeys.includes(key) ? (exitComplete.delete(key), frozenCustomRef.current.delete(key)) : exitComplete.get(key) !== !0 && exitComplete.set(key, !1);
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]), presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i],
        key = getChildKey(child);
      presentKeys.includes(key) || (nextChildren.splice(i, 0, child), frozenCustomRef.current.has(key) || frozenCustomRef.current.set(key, custom));
    }
    const exitingChildren = renderedChildren.filter(child => !presentKeys.includes(getChildKey(child)));
    return effectiveMode === "wait" && exitingChildren.length && (nextChildren = exitingChildren), setRenderedChildren(onlyElements(nextChildren)), setDiffedChildren(presentChildren), null;
  }
  return /* @__PURE__ */jsx(Fragment, {
    children: renderedChildren.map(child => {
      const key = getChildKey(child),
        isPresent = presentChildren === renderedChildren || presentKeys.includes(key),
        onExit = () => {
          if (exitComplete.has(key)) exitComplete.set(key, !0);else return;
          let isEveryExitComplete = !0;
          exitComplete.forEach(isExitComplete => {
            isExitComplete || (isEveryExitComplete = !1);
          }), isEveryExitComplete && (forceRender?.(), setRenderedChildren(pendingPresentChildren.current), onExitComplete?.());
        };
      return /* @__PURE__ */jsx(PresenceChild, {
        isPresent,
        initial: !isInitialRender.current || initial ? void 0 : !1,
        custom: isPresent ? custom : frozenCustomRef.current.get(key) ?? custom,
        presenceAffectsLayout,
        enterExitVariant,
        enterVariant,
        exitVariant,
        onExitComplete: isPresent ? void 0 : onExit,
        children: child
      }, key);
    })
  });
};
AnimatePresence.displayName = "AnimatePresence";
export { AnimatePresence };
//# sourceMappingURL=AnimatePresence.mjs.map
