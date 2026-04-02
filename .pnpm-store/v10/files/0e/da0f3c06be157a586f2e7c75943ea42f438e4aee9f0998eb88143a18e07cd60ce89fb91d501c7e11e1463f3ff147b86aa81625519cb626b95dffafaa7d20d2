import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useInsertionEffect } from "react";
import { useConstant } from "@tamagui/use-constant";
import { useForceUpdate } from "@tamagui/use-force-update";
import { Children, isValidElement, useContext, useMemo, useRef, useState } from "react";
import { LayoutGroupContext } from "./LayoutGroupContext.native.js";
import { PresenceChild } from "./PresenceChild.native.js";
function _type_of(obj) {
  "@swc/helpers - typeof";

  return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var getChildKey = function (child) {
  return child.key || function () {
    var ct = child.type,
      defaultName = ct.displayName || ct.name || "";
    return ct && (typeof ct > "u" ? "undefined" : _type_of(ct)) === "object" && "staticConfig" in ct && ct.staticConfig.componentName || defaultName;
  }();
};
function onlyElements(children) {
  var filtered = [];
  return Children.forEach(children, function (child) {
    /* @__PURE__ */isValidElement(child) && filtered.push(child);
  }), filtered;
}
var AnimatePresence = function (param) {
  var {
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
    } = param,
    effectiveMode = mode ?? (exitBeforeEnter ? "wait" : "sync"),
    presentChildren = useMemo(function () {
      return onlyElements(children);
    }, [children]),
    presentKeys = presentChildren.map(getChildKey),
    isInitialRender = useRef(!0),
    frozenCustomRef = useRef(/* @__PURE__ */new Map()),
    pendingPresentChildren = useRef(presentChildren),
    exitComplete = useConstant(function () {
      return /* @__PURE__ */new Map();
    }),
    [diffedChildren, setDiffedChildren] = useState(presentChildren),
    [renderedChildren, setRenderedChildren] = useState(presentChildren),
    _useContext_forceRender,
    forceRender = (_useContext_forceRender = useContext(LayoutGroupContext).forceRender) !== null && _useContext_forceRender !== void 0 ? _useContext_forceRender : useForceUpdate();
  if (passThrough) return /* @__PURE__ */_jsx(_Fragment, {
    children
  });
  if (useInsertionEffect(function () {
    isInitialRender.current = !1, pendingPresentChildren.current = presentChildren;
    for (var i2 = 0; i2 < renderedChildren.length; i2++) {
      var key2 = getChildKey(renderedChildren[i2]);
      presentKeys.includes(key2) ? (exitComplete.delete(key2), frozenCustomRef.current.delete(key2)) : exitComplete.get(key2) !== !0 && exitComplete.set(key2, !1);
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]), presentChildren !== diffedChildren) {
    for (var nextChildren = [...presentChildren], i = 0; i < renderedChildren.length; i++) {
      var child = renderedChildren[i],
        key = getChildKey(child);
      presentKeys.includes(key) || (nextChildren.splice(i, 0, child), frozenCustomRef.current.has(key) || frozenCustomRef.current.set(key, custom));
    }
    var exitingChildren = renderedChildren.filter(function (child2) {
      return !presentKeys.includes(getChildKey(child2));
    });
    return effectiveMode === "wait" && exitingChildren.length && (nextChildren = exitingChildren), setRenderedChildren(onlyElements(nextChildren)), setDiffedChildren(presentChildren), null;
  }
  return /* @__PURE__ */_jsx(_Fragment, {
    children: renderedChildren.map(function (child2) {
      var key2 = getChildKey(child2),
        isPresent = presentChildren === renderedChildren || presentKeys.includes(key2),
        onExit = function () {
          if (exitComplete.has(key2)) exitComplete.set(key2, !0);else return;
          var isEveryExitComplete = !0;
          exitComplete.forEach(function (isExitComplete) {
            isExitComplete || (isEveryExitComplete = !1);
          }), isEveryExitComplete && (forceRender?.(), setRenderedChildren(pendingPresentChildren.current), onExitComplete?.());
        },
        _frozenCustomRef_current_get;
      return /* @__PURE__ */_jsx(PresenceChild, {
        isPresent,
        initial: !isInitialRender.current || initial ? void 0 : !1,
        custom: isPresent ? custom : (_frozenCustomRef_current_get = frozenCustomRef.current.get(key2)) !== null && _frozenCustomRef_current_get !== void 0 ? _frozenCustomRef_current_get : custom,
        presenceAffectsLayout,
        enterExitVariant,
        enterVariant,
        exitVariant,
        onExitComplete: isPresent ? void 0 : onExit,
        children: child2
      }, key2);
    })
  });
};
AnimatePresence.displayName = "AnimatePresence";
export { AnimatePresence };
//# sourceMappingURL=AnimatePresence.native.js.map
