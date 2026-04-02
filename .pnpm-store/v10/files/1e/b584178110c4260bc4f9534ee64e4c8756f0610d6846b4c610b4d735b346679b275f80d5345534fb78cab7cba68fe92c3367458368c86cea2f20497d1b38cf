function useInteractions(propsList) {
  const filtered = propsList.filter(Boolean),
    referenceFns = /* @__PURE__ */new Map(),
    floatingFns = /* @__PURE__ */new Map(),
    itemFns = /* @__PURE__ */new Map(),
    referenceStatic = {},
    floatingStatic = {};
  for (const props of filtered) props.reference && collectProps(props.reference, referenceFns, referenceStatic), props.floating && collectProps(props.floating, floatingFns, floatingStatic), props.item && typeof props.item == "object" && collectProps(props.item, itemFns, {});
  return {
    getReferenceProps(userProps) {
      return buildProps(referenceFns, referenceStatic, userProps);
    },
    getFloatingProps(userProps) {
      return buildProps(floatingFns, floatingStatic, userProps);
    },
    getItemProps(userProps) {
      return buildProps(itemFns, {}, userProps);
    }
  };
}
function collectProps(props, fnMap, staticMap) {
  for (const key of Object.keys(props)) if (typeof props[key] == "function") {
    let arr = fnMap.get(key);
    arr || (arr = [], fnMap.set(key, arr)), arr.push(props[key]);
  } else staticMap[key] = props[key];
}
function buildProps(fnMap, staticProps, userProps) {
  const result = {
    ...staticProps
  };
  for (const [key, fns] of fnMap) {
    const hookHandler = (...args) => {
      for (const fn of fns) {
        const result2 = fn(...args);
        if (result2 !== void 0) return result2;
      }
    };
    result[key] = hookHandler;
  }
  if (userProps) for (const key of Object.keys(userProps)) if (key === "style") result.style = {
    ...result.style,
    ...userProps.style
  };else if (typeof userProps[key] == "function" && result[key]) {
    const hookFn = result[key],
      userFn = userProps[key];
    result[key] = (...args) => {
      userFn(...args), hookFn(...args);
    };
  } else result[key] = userProps[key];
  return result;
}
export { useInteractions };
//# sourceMappingURL=useInteractions.mjs.map
