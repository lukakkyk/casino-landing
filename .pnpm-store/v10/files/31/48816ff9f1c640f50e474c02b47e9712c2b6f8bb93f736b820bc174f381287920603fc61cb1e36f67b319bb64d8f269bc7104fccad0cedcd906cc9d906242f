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
var useThemeState_exports = {};
__export(useThemeState_exports, {
  ThemeStateContext: () => ThemeStateContext,
  forceUpdateThemes: () => forceUpdateThemes,
  getRootThemeState: () => getRootThemeState,
  getThemeState: () => getThemeState,
  hasThemeUpdatingProps: () => hasThemeUpdatingProps,
  useThemeState: () => useThemeState
});
module.exports = __toCommonJS(useThemeState_exports);
var import_constants = require("@tamagui/constants"),
  import_constants2 = require("@tamagui/constants"),
  import_react = require("react"),
  import_config = require("../config.cjs"),
  import_constants3 = require("../constants/constants.cjs");
const ThemeStateContext = (0, import_react.createContext)(""),
  allListeners = /* @__PURE__ */new Map(),
  listenersByParent = {},
  HasRenderedOnce = /* @__PURE__ */new WeakMap(),
  HadTheme = /* @__PURE__ */new WeakMap(),
  PendingUpdate = /* @__PURE__ */new Map(),
  states = /* @__PURE__ */new Map(),
  localStates = /* @__PURE__ */new Map();
let shouldForce = !1;
const forceUpdateThemes = () => {
    cacheVersion++, shouldForce = !0, allListeners.forEach(cb => cb()), shouldForce = !1;
  },
  getThemeState = id => states.get(id);
let cacheVersion = 0;
const themeNameCache = /* @__PURE__ */new Map();
let themeNameCacheVer = -1,
  themes = null,
  rootThemeState = null;
const getRootThemeState = () => rootThemeState;
const useThemeState = (props, isRoot = !1, keys, schemeKeys) => {
    "use no memo";

    const {
        disable
      } = props,
      parentId = (0, import_react.useContext)(ThemeStateContext);
    if (!parentId && !isRoot) throw new Error(process.env.NODE_ENV === "development" ? `${import_constants3.MISSING_THEME_MESSAGE}

Looked for theme${props.name ? ` "${props.name}"` : ""}${props.componentName ? ` (component: ${props.componentName})` : ""}, but no parent theme context was found (parentId: ${parentId}).` : import_constants3.MISSING_THEME_MESSAGE);
    if (disable) return states.get(parentId) || {
      id: "",
      name: "light",
      theme: (0, import_config.getConfig)().themes.light
      // inverses: 0,
    };
    const id = (0, import_react.useId)(),
      subscribe = (0, import_react.useCallback)(cb => (listenersByParent[parentId] = listenersByParent[parentId] || /* @__PURE__ */new Set(), listenersByParent[parentId].add(id), allListeners.set(id, () => {
        PendingUpdate.set(id, shouldForce ? "force" : !0), cb();
      }), () => {
        allListeners.delete(id), listenersByParent[parentId].delete(id), localStates.delete(id), states.delete(id), PendingUpdate.delete(id);
      }), [id, parentId]),
      propsKey = getPropsKey(props),
      getSnapshot = () => {
        let local = localStates.get(id);
        const parentState = states.get(parentId);
        if (local && !PendingUpdate.has(id) && parentState && local._parentName === parentState.name && local._propsKey === propsKey) return local;
        const isSchemeOnlyChange = !1,
          keysSize = keys?.current?.size ?? 0,
          allKeysSchemeOptimized = (schemeKeys?.current?.size ?? 0) === keysSize && keysSize > 0,
          canSkipForSchemeChange = isSchemeOnlyChange && allKeysSchemeOptimized,
          needsUpdate = props.passThrough ? !1 : isRoot || props.name === "light" || props.name === "dark" || props.name === null ? !0 : HasRenderedOnce.get(keys) ? canSkipForSchemeChange ? !1 : keys?.current?.size ? !0 : props.needsUpdate?.() : !0,
          [rerender, next] = getNextState(local, props, propsKey, isRoot, id, parentId, needsUpdate, PendingUpdate.get(id));
        return PendingUpdate.delete(id), (!local || rerender) && (local = {
          ...next
        }, localStates.set(id, local)), process.env.NODE_ENV === "development" && props.debug === "verbose" && (console.groupCollapsed(` ${id} getSnapshot ${rerender}`, local.name, ">", next.name), console.info({
          props,
          propsKey,
          isRoot,
          parentId,
          local,
          next,
          needsUpdate,
          isSchemeOnlyChange,
          allKeysSchemeOptimized,
          canSkipForSchemeChange
        }), console.groupEnd()), next !== local && (Object.assign(local, next), local.id = id), local._parentName = parentState?.name, local._propsKey = propsKey, states.set(id, next), local;
      };
    process.env.NODE_ENV === "development" && globalThis.time && globalThis.time`theme-prep-uses`;
    const state = (0, import_react.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
    return (0, import_constants2.useIsomorphicLayoutEffect)(() => {
      if (!HasRenderedOnce.get(keys)) {
        HasRenderedOnce.set(keys, !0);
        return;
      }
      if (!propsKey) {
        HadTheme.get(keys) && scheduleUpdate(id), HadTheme.set(keys, !1);
        return;
      }
      process.env.NODE_ENV === "development" && props.debug === "verbose" && console.warn(` \xB7 useTheme(${id}) scheduleUpdate`, propsKey, states.get(id)?.name), scheduleUpdate(id), HadTheme.set(keys, !0);
    }, [keys, propsKey]), state;
  },
  getNextState = (lastState, props, propsKey, isRoot = !1, id, parentId, needsUpdate, pendingUpdate) => {
    const {
        debug
      } = props,
      parentState = states.get(parentId);
    if (props.passThrough) return [!1, lastState || parentState || {
      name: ""
    }];
    themes || (themes = (0, import_config.getConfig)().themes);
    const name = !propsKey && (!lastState || !lastState?.isNew) ? null : getNewThemeName(parentState?.name, props, pendingUpdate === "force" ? !0 : !!needsUpdate),
      isSameAsParent = parentState && (!name || name === parentState.name),
      shouldRerender = !!(pendingUpdate === "force" || needsUpdate && (pendingUpdate || lastState?.name !== parentState?.name));
    if (process.env.NODE_ENV === "development" && debug === "verbose") {
      const message = ` \xB7 useTheme(${id}) getNextState => ${name} needsUpdate ${needsUpdate} shouldRerender ${shouldRerender}`;
      console.groupCollapsed(message), console.trace({
        name,
        lastState,
        parentState,
        props,
        propsKey,
        id,
        isSameAsParent
      }), console.groupEnd();
    }
    if (isSameAsParent) return !shouldRerender && lastState && lastState.name === parentState.name ? [!1, lastState] : [shouldRerender, {
      ...parentState,
      isNew: !1
    }];
    if (!name) {
      const next = lastState ?? parentState;
      if (!next) throw new Error(process.env.NODE_ENV === "development" ? `${import_constants3.MISSING_THEME_MESSAGE}

Looked for theme${props.name ? ` "${props.name}"` : ""}${props.componentName ? ` (component: ${props.componentName})` : ""}, but no theme state was resolved (parentId: ${parentId}, id: ${id}).` : import_constants3.MISSING_THEME_MESSAGE);
      return shouldRerender ? [!0, {
        ...(parentState || lastState)
      }] : [!1, next];
    }
    const scheme = getScheme(name),
      isInverse = parentState && scheme !== parentState.scheme,
      nextState = {
        id,
        name,
        theme: themes[name],
        scheme,
        parentId,
        parentName: parentState?.name,
        // inverses,
        isInverse,
        isNew: !0
      };
    if (isRoot && (rootThemeState = nextState), pendingUpdate !== "force" && lastState && lastState.name === name) return [!1, nextState];
    const shouldAvoidRerender = pendingUpdate !== "force" && lastState && !needsUpdate && nextState.name === lastState.name;
    return process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed(` \xB7 useTheme(${id}) \u23ED\uFE0F ${name} shouldAvoidRerender: ${shouldAvoidRerender}`), console.info({
      lastState,
      needsUpdate,
      nextState,
      pendingUpdate
    }), console.groupEnd()), shouldAvoidRerender ? [!1, nextState] : [!0, nextState];
  };
function scheduleUpdate(id) {
  const queue = [id],
    visited = /* @__PURE__ */new Set();
  for (; queue.length;) {
    const parent = queue.shift(),
      children = listenersByParent[parent];
    if (children) for (const childId of children) visited.has(childId) || (visited.add(childId), queue.push(childId));
  }
  visited.forEach(childId => {
    allListeners.get(childId)?.();
  });
}
const validSchemes = {
  light: "light",
  dark: "dark"
};
function getScheme(name) {
  return validSchemes[name.split("_")[0]];
}
function getNewThemeName(parentName = "", props, forceUpdate = !1) {
  const {
      name,
      reset
    } = props,
    componentName = props.unstyled ? void 0 : props.componentName;
  if (name && reset) throw new Error(process.env.NODE_ENV === "production" ? "\u274C004" : "Cannot reset and set a new name at the same time.");
  const cacheKey = `${parentName}|${name || ""}|${componentName || ""}|${reset ? 1 : 0}|${forceUpdate ? 1 : 0}`;
  if (themeNameCacheVer !== cacheVersion) themeNameCache.clear(), themeNameCacheVer = cacheVersion;else {
    const cached = themeNameCache.get(cacheKey);
    if (cached !== void 0) return cached;
  }
  const {
    themes: themes2
  } = (0, import_config.getConfig)();
  if (reset) {
    if (parentName === "light" || parentName === "dark") {
      const result2 = parentName === "light" ? "dark" : "light";
      return themeNameCache.set(cacheKey, result2), result2;
    }
    const lastPartIndex = parentName.lastIndexOf("_"),
      name2 = lastPartIndex <= 0 ? parentName : parentName.slice(lastPartIndex),
      scheme = parentName.slice(0, lastPartIndex),
      result = themes2[name2] ? name2 : scheme;
    return themeNameCache.set(cacheKey, result), result;
  }
  const parentParts = parentName.split("_"),
    lastName = parentParts[parentParts.length - 1];
  lastName && lastName[0].toLowerCase() !== lastName[0] && parentParts.pop();
  const subNames = [name && componentName ? `${name}_${componentName}` : void 0, name, componentName].filter(Boolean);
  let found = null;
  if (name) {
    const nameHasScheme = getScheme(name);
    if (nameHasScheme) {
      for (const subName of subNames) if (subName in themes2) {
        found = subName;
        break;
      }
    }
    if (!found && !nameHasScheme && getScheme(parentName)) {
      const potentialBases = [];
      for (let i = parentParts.length; i >= 1; i--) potentialBases.push(parentParts.slice(0, i).join("_"));
      outer: for (const base of potentialBases) {
        const candidates = [componentName ? `${base}_${name}_${componentName}` : void 0, `${base}_${name}`].filter(Boolean);
        for (const potential of candidates) if (potential in themes2) {
          found = potential;
          break outer;
        }
      }
    }
  }
  if (!found) if (!name && componentName) {
    const potential = `${parentParts.join("_")}_${componentName}`;
    potential in themes2 && (found = potential);
  } else {
    const max = parentParts.length;
    for (let i = 0; i <= max; i++) {
      const base = (i === 0 ? parentParts : parentParts.slice(0, -i)).join("_");
      for (const subName of subNames) {
        const potential = base ? `${base}_${subName}` : subName;
        if (potential in themes2) {
          found = potential;
          break;
        }
      }
      if (found) break;
    }
  }
  return !forceUpdate && found === parentName &&
  // if its a scheme only sub-theme, we always consider it "new" because it likely inverses
  // and we want to avoid reparenting
  !validSchemes[found] ? (themeNameCache.set(cacheKey, null), null) : (themeNameCache.set(cacheKey, found), found);
}
const getPropsKey = ({
    name,
    reset,
    forceClassName,
    componentName
  }) => `${name || ""}${reset || ""}${forceClassName || ""}${componentName || ""}`,
  hasThemeUpdatingProps = props => "name" in props || "reset" in props || "forceClassName" in props;