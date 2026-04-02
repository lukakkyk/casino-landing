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
var useMedia_exports = {};
__export(useMedia_exports, {
  _disableMediaTouch: () => _disableMediaTouch,
  configureMedia: () => configureMedia,
  getMediaImportanceIfMoreImportant: () => getMediaImportanceIfMoreImportant,
  getMediaKey: () => getMediaKey,
  getMediaKeyImportance: () => getMediaKeyImportance,
  getMediaState: () => getMediaState,
  isMediaKey: () => isMediaKey,
  mediaKeyMatch: () => mediaKeyMatch,
  mediaKeyToQuery: () => mediaKeyToQuery,
  setMediaShouldUpdate: () => setMediaShouldUpdate,
  setupMediaListeners: () => setupMediaListeners,
  updateMediaListeners: () => updateMediaListeners,
  useMedia: () => useMedia
});
module.exports = __toCommonJS(useMedia_exports);
var import_constants = require("@tamagui/constants"),
  import_react = require("react"),
  import_config = require("../config.cjs"),
  import_createMediaStyle = require("../helpers/createMediaStyle.cjs"),
  import_matchMedia = require("../helpers/matchMedia.cjs"),
  import_mediaObjectToString = require("../helpers/mediaObjectToString.cjs"),
  import_mediaState = require("../helpers/mediaState.cjs"),
  import_pseudoDescriptors = require("../helpers/pseudoDescriptors.cjs");
const mediaKeyRegex = /\$(platform|theme|group)-/,
  isMediaKey = key => key[0] !== "$" ? !1 : !!(import_mediaState.mediaKeys.has(key) || mediaKeyRegex.test(key)),
  getMediaKey = key => {
    if (key[0] !== "$") return !1;
    if (import_mediaState.mediaKeys.has(key)) return !0;
    const match = key.match(mediaKeyRegex);
    return match ? match[1] : !1;
  };
let initState, mediaKeysOrdered;
const getMediaKeyImportance = key => {
    if (process.env.NODE_ENV === "development" && key[0] === "$") throw new Error("use short key");
    return mediaKeysOrdered.indexOf(key) + 100;
  },
  dispose = /* @__PURE__ */new Set();
let mediaVersion = 0;
const configureMedia = config => {
  const {
      media
    } = config,
    mediaQueryDefaultActive = (0, import_config.getSetting)("mediaQueryDefaultActive");
  if (media) {
    mediaVersion++, (0, import_createMediaStyle.resetMediaStyleCache)();
    for (const key in media) (0, import_mediaState.getMedia)()[key] = mediaQueryDefaultActive?.[key] || !1, import_mediaState.mediaKeys.add(`$${key}`);
    Object.assign(import_mediaState.mediaQueryConfig, media), initState = {
      ...(0, import_mediaState.getMedia)()
    }, mediaKeysOrdered = Object.keys(media), setupMediaListeners();
  }
};
function unlisten() {
  dispose.forEach(cb => cb()), dispose.clear();
}
let setupVersion = -1;
function setupMediaListeners() {
  if (!(import_constants.isWeb && import_constants.isServer) && !process.env.IS_STATIC && setupVersion !== mediaVersion) {
    setupVersion = mediaVersion, unlisten();
    for (const key in import_mediaState.mediaQueryConfig) {
      let update = function () {
        const next = !!getMatch().matches;
        next !== (0, import_mediaState.getMedia)()[key] && ((0, import_mediaState.setMediaState)({
          ...(0, import_mediaState.getMedia)(),
          [key]: next
        }), updateMediaListeners());
      };
      const str = (0, import_mediaObjectToString.mediaObjectToString)(import_mediaState.mediaQueryConfig[key]),
        getMatch = () => (0, import_matchMedia.matchMedia)(str),
        match = getMatch();
      if (!match) throw new Error("\u26A0\uFE0F No match");
      match.addListener(update), dispose.add(() => {
        match.removeListener(update);
      }), update();
    }
  }
}
const listeners = /* @__PURE__ */new Set();
function updateMediaListeners() {
  listeners.forEach(cb => cb((0, import_mediaState.getMedia)()));
}
const States = /* @__PURE__ */new WeakMap();
function setMediaShouldUpdate(ref, enabled, keys) {
  const cur = States.get(ref);
  (!cur || cur.enabled !== enabled || keys) && States.set(ref, {
    ...cur,
    enabled,
    keys
  });
}
function subscribe(subscriber) {
  return listeners.add(subscriber), () => {
    listeners.delete(subscriber);
  };
}
function useMedia(componentContext, debug) {
  "use no memo";

  const componentState = componentContext ? States.get(componentContext) : null,
    internalRef = (0, import_react.useRef)(null);
  internalRef.current || (internalRef.current = {
    keys: /* @__PURE__ */new Set(),
    lastState: (0, import_mediaState.getMedia)()
  }), internalRef.current.pendingState && (internalRef.current.lastState = internalRef.current.pendingState, internalRef.current.pendingState = void 0);
  const {
    keys
  } = internalRef.current;
  keys.size && keys.clear();
  const state = (0, import_react.useSyncExternalStore)(subscribe, () => {
    const curKeys = componentState?.keys || keys,
      {
        lastState,
        pendingState
      } = internalRef.current;
    if (!curKeys.size) return lastState;
    const ms = (0, import_mediaState.getMedia)();
    for (const key of curKeys) if (ms[key] !== (pendingState || lastState)[key]) return process.env.NODE_ENV === "development" && debug && console.warn("useMedia() \u270D\uFE0F", key, lastState[key], "=>", ms[key]), componentContext?.mediaEmit ? (componentContext.mediaEmit(ms), internalRef.current.pendingState = ms, lastState) : (internalRef.current.lastState = ms, ms);
    return lastState;
  }, getServerSnapshot);
  return new Proxy(state, {
    get(_, key) {
      return !disableMediaTouch && typeof key == "string" && keys.add(key), Reflect.get(state, key);
    }
  });
}
const getServerSnapshot = () => initState;
let disableMediaTouch = !1;
function _disableMediaTouch(val) {
  disableMediaTouch = val;
}
function getMediaState(mediaGroups, layout) {
  disableMediaTouch = !0;
  let res;
  try {
    res = Object.fromEntries([...mediaGroups].map(mediaKey => [mediaKey, mediaKeyMatch(mediaKey, layout)]));
  } finally {
    disableMediaTouch = !1;
  }
  return res;
}
const getMediaImportanceIfMoreImportant = (mediaKey, key, styleState, isSizeMedia) => {
    const importance = isSizeMedia ? getMediaKeyImportance(mediaKey) : import_pseudoDescriptors.defaultMediaImportance,
      usedKeys = styleState.usedKeys;
    return !usedKeys[key] || importance > usedKeys[key] ? importance : null;
  },
  cachedMediaKeyToQuery = {};
function mediaKeyToQuery(key) {
  return cachedMediaKeyToQuery[key] || (cachedMediaKeyToQuery[key] = (0, import_mediaObjectToString.mediaObjectToString)(import_mediaState.mediaQueryConfig[key]));
}
function mediaKeyMatch(key, dimensions) {
  const mediaQueries = import_mediaState.mediaQueryConfig[key];
  return Object.keys(mediaQueries).every(query => {
    const expectedVal = +mediaQueries[query],
      isMax = query.startsWith("max"),
      isWidth = query.endsWith("Width"),
      givenVal = dimensions[isWidth ? "width" : "height"];
    return isMax ? givenVal < expectedVal : givenVal > expectedVal;
  });
}