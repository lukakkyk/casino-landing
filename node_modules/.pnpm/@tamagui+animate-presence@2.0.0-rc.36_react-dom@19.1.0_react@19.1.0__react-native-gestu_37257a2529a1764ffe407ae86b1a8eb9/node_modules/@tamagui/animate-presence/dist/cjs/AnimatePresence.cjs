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
var AnimatePresence_exports = {};
__export(AnimatePresence_exports, {
  AnimatePresence: () => AnimatePresence
});
module.exports = __toCommonJS(AnimatePresence_exports);
var import_react = require("react"),
  import_use_constant = require("@tamagui/use-constant"),
  import_use_force_update = require("@tamagui/use-force-update"),
  import_react2 = require("react"),
  import_LayoutGroupContext = require("./LayoutGroupContext.cjs"),
  import_PresenceChild = require("./PresenceChild.cjs"),
  import_jsx_runtime = require("react/jsx-runtime");
const getChildKey = child => child.key || (() => {
  const ct = child.type,
    defaultName = ct.displayName || ct.name || "";
  return ct && typeof ct == "object" && "staticConfig" in ct && ct.staticConfig.componentName || defaultName;
})();
function onlyElements(children) {
  const filtered = [];
  return import_react2.Children.forEach(children, child => {
    (0, import_react2.isValidElement)(child) && filtered.push(child);
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
    presentChildren = (0, import_react2.useMemo)(() => onlyElements(children), [children]),
    presentKeys = presentChildren.map(getChildKey),
    isInitialRender = (0, import_react2.useRef)(!0),
    frozenCustomRef = (0, import_react2.useRef)(/* @__PURE__ */new Map()),
    pendingPresentChildren = (0, import_react2.useRef)(presentChildren),
    exitComplete = (0, import_use_constant.useConstant)(() => /* @__PURE__ */new Map()),
    [diffedChildren, setDiffedChildren] = (0, import_react2.useState)(presentChildren),
    [renderedChildren, setRenderedChildren] = (0, import_react2.useState)(presentChildren),
    forceRender = (0, import_react2.useContext)(import_LayoutGroupContext.LayoutGroupContext).forceRender ?? (0, import_use_force_update.useForceUpdate)();
  if (passThrough) return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children
  });
  if ((0, import_react.useInsertionEffect)(() => {
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
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
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
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_PresenceChild.PresenceChild, {
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