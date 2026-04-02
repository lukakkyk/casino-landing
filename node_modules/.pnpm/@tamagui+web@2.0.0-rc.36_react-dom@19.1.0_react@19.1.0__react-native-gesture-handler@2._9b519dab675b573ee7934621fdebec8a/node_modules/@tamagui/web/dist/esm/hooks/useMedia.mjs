import { isServer, isWeb } from "@tamagui/constants";
import { useRef, useSyncExternalStore } from "react";
import { getSetting } from "../config.mjs";
import { resetMediaStyleCache } from "../helpers/createMediaStyle.mjs";
import { matchMedia } from "../helpers/matchMedia.mjs";
import { mediaObjectToString } from "../helpers/mediaObjectToString.mjs";
import { getMedia, mediaKeys, mediaQueryConfig, setMediaState } from "../helpers/mediaState.mjs";
import { defaultMediaImportance } from "../helpers/pseudoDescriptors.mjs";
const mediaKeyRegex = /\$(platform|theme|group)-/,
  isMediaKey = key => key[0] !== "$" ? !1 : !!(mediaKeys.has(key) || mediaKeyRegex.test(key)),
  getMediaKey = key => {
    if (key[0] !== "$") return !1;
    if (mediaKeys.has(key)) return !0;
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
    mediaQueryDefaultActive = getSetting("mediaQueryDefaultActive");
  if (media) {
    mediaVersion++, resetMediaStyleCache();
    for (const key in media) getMedia()[key] = mediaQueryDefaultActive?.[key] || !1, mediaKeys.add(`$${key}`);
    Object.assign(mediaQueryConfig, media), initState = {
      ...getMedia()
    }, mediaKeysOrdered = Object.keys(media), setupMediaListeners();
  }
};
function unlisten() {
  dispose.forEach(cb => cb()), dispose.clear();
}
let setupVersion = -1;
function setupMediaListeners() {
  if (!(isWeb && isServer) && !process.env.IS_STATIC && setupVersion !== mediaVersion) {
    setupVersion = mediaVersion, unlisten();
    for (const key in mediaQueryConfig) {
      let update = function () {
        const next = !!getMatch().matches;
        next !== getMedia()[key] && (setMediaState({
          ...getMedia(),
          [key]: next
        }), updateMediaListeners());
      };
      const str = mediaObjectToString(mediaQueryConfig[key]),
        getMatch = () => matchMedia(str),
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
  listeners.forEach(cb => cb(getMedia()));
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
    internalRef = useRef(null);
  internalRef.current || (internalRef.current = {
    keys: /* @__PURE__ */new Set(),
    lastState: getMedia()
  }), internalRef.current.pendingState && (internalRef.current.lastState = internalRef.current.pendingState, internalRef.current.pendingState = void 0);
  const {
    keys
  } = internalRef.current;
  keys.size && keys.clear();
  const state = useSyncExternalStore(subscribe, () => {
    const curKeys = componentState?.keys || keys,
      {
        lastState,
        pendingState
      } = internalRef.current;
    if (!curKeys.size) return lastState;
    const ms = getMedia();
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
    const importance = isSizeMedia ? getMediaKeyImportance(mediaKey) : defaultMediaImportance,
      usedKeys = styleState.usedKeys;
    return !usedKeys[key] || importance > usedKeys[key] ? importance : null;
  },
  cachedMediaKeyToQuery = {};
function mediaKeyToQuery(key) {
  return cachedMediaKeyToQuery[key] || (cachedMediaKeyToQuery[key] = mediaObjectToString(mediaQueryConfig[key]));
}
function mediaKeyMatch(key, dimensions) {
  const mediaQueries = mediaQueryConfig[key];
  return Object.keys(mediaQueries).every(query => {
    const expectedVal = +mediaQueries[query],
      isMax = query.startsWith("max"),
      isWidth = query.endsWith("Width"),
      givenVal = dimensions[isWidth ? "width" : "height"];
    return isMax ? givenVal < expectedVal : givenVal > expectedVal;
  });
}
export { _disableMediaTouch, configureMedia, getMediaImportanceIfMoreImportant, getMediaKey, getMediaKeyImportance, getMediaState, isMediaKey, mediaKeyMatch, mediaKeyToQuery, setMediaShouldUpdate, setupMediaListeners, updateMediaListeners, useMedia };
//# sourceMappingURL=useMedia.mjs.map
