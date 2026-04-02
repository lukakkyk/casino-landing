import { isServer, isWeb } from "@tamagui/constants";
import { useRef, useSyncExternalStore } from "react";
import { getSetting } from "../config.native.js";
import { resetMediaStyleCache } from "../helpers/createMediaStyle.native.js";
import { matchMedia } from "../helpers/matchMedia.native.js";
import { mediaObjectToString } from "../helpers/mediaObjectToString.native.js";
import { getMedia, mediaKeys, mediaQueryConfig, setMediaState } from "../helpers/mediaState.native.js";
import { defaultMediaImportance } from "../helpers/pseudoDescriptors.native.js";
var mediaKeyRegex = /\$(platform|theme|group)-/,
  isMediaKey = function (key) {
    return key[0] !== "$" ? !1 : !!(mediaKeys.has(key) || mediaKeyRegex.test(key));
  },
  getMediaKey = function (key) {
    if (key[0] !== "$") return !1;
    if (mediaKeys.has(key)) return !0;
    var match = key.match(mediaKeyRegex);
    return match ? match[1] : !1;
  },
  initState,
  mediaKeysOrdered,
  getMediaKeyImportance = function (key) {
    if (process.env.NODE_ENV === "development" && key[0] === "$") throw new Error("use short key");
    return mediaKeysOrdered.indexOf(key) + 100;
  },
  dispose = /* @__PURE__ */new Set(),
  mediaVersion = 0,
  configureMedia = function (config) {
    var {
        media
      } = config,
      mediaQueryDefaultActive = getSetting("mediaQueryDefaultActive");
    if (media) {
      mediaVersion++, resetMediaStyleCache();
      for (var key in media) getMedia()[key] = mediaQueryDefaultActive?.[key] || !1, mediaKeys.add(`$${key}`);
      Object.assign(mediaQueryConfig, media), initState = {
        ...getMedia()
      }, mediaKeysOrdered = Object.keys(media), setupMediaListeners();
    }
  };
function unlisten() {
  dispose.forEach(function (cb) {
    return cb();
  }), dispose.clear();
}
var setupVersion = -1;
function setupMediaListeners() {
  var _loop = function (key2) {
    var str = mediaObjectToString(mediaQueryConfig[key2]),
      getMatch = function () {
        return matchMedia(str);
      },
      match = getMatch();
    if (!match) throw new Error("\u26A0\uFE0F No match");
    match.addListener(update), dispose.add(function () {
      match.removeListener(update);
    });
    function update() {
      var next = !!getMatch().matches;
      next !== getMedia()[key2] && (setMediaState({
        ...getMedia(),
        [key2]: next
      }), updateMediaListeners());
    }
    update();
  };
  if (!(isWeb && isServer) && !process.env.IS_STATIC && setupVersion !== mediaVersion) {
    setupVersion = mediaVersion, unlisten();
    for (var key in mediaQueryConfig) _loop(key);
  }
}
var listeners = /* @__PURE__ */new Set();
function updateMediaListeners() {
  listeners.forEach(function (cb) {
    return cb(getMedia());
  });
}
var States = /* @__PURE__ */new WeakMap();
function setMediaShouldUpdate(ref, enabled, keys) {
  var cur = States.get(ref);
  (!cur || cur.enabled !== enabled || keys) && States.set(ref, {
    ...cur,
    enabled,
    keys
  });
}
function subscribe(subscriber) {
  return listeners.add(subscriber), function () {
    listeners.delete(subscriber);
  };
}
function useMedia(componentContext, debug) {
  "use no memo";

  var componentState = componentContext ? States.get(componentContext) : null,
    internalRef = useRef(null);
  internalRef.current || (internalRef.current = {
    keys: /* @__PURE__ */new Set(),
    lastState: getMedia()
  }), internalRef.current.pendingState && (internalRef.current.lastState = internalRef.current.pendingState, internalRef.current.pendingState = void 0);
  var {
    keys
  } = internalRef.current;
  keys.size && keys.clear();
  var state = useSyncExternalStore(subscribe, function () {
    var curKeys = componentState?.keys || keys,
      {
        lastState,
        pendingState
      } = internalRef.current;
    if (!curKeys.size) return lastState;
    var ms = getMedia(),
      _iteratorNormalCompletion = !0,
      _didIteratorError = !1,
      _iteratorError = void 0;
    try {
      for (var _iterator = curKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
        var key = _step.value;
        if (ms[key] !== (pendingState || lastState)[key]) return process.env.NODE_ENV === "development" && debug && console.warn("useMedia() \u270D\uFE0F", key, lastState[key], "=>", ms[key]), componentContext?.mediaEmit ? (componentContext.mediaEmit(ms), internalRef.current.pendingState = ms, lastState) : (internalRef.current.lastState = ms, ms);
      }
    } catch (err) {
      _didIteratorError = !0, _iteratorError = err;
    } finally {
      try {
        !_iteratorNormalCompletion && _iterator.return != null && _iterator.return();
      } finally {
        if (_didIteratorError) throw _iteratorError;
      }
    }
    return lastState;
  }, getServerSnapshot);
  return new Proxy(state, {
    get(_, key) {
      return !disableMediaTouch && typeof key == "string" && keys.add(key), Reflect.get(state, key);
    }
  });
}
var getServerSnapshot = function () {
    return initState;
  },
  disableMediaTouch = !1;
function _disableMediaTouch(val) {
  disableMediaTouch = val;
}
function getMediaState(mediaGroups, layout) {
  disableMediaTouch = !0;
  var res;
  try {
    res = Object.fromEntries([...mediaGroups].map(function (mediaKey) {
      return [mediaKey, mediaKeyMatch(mediaKey, layout)];
    }));
  } finally {
    disableMediaTouch = !1;
  }
  return res;
}
var getMediaImportanceIfMoreImportant = function (mediaKey, key, styleState, isSizeMedia) {
    var importance = isSizeMedia ? getMediaKeyImportance(mediaKey) : defaultMediaImportance,
      usedKeys = styleState.usedKeys;
    return !usedKeys[key] || importance > usedKeys[key] ? importance : null;
  },
  cachedMediaKeyToQuery = {};
function mediaKeyToQuery(key) {
  return cachedMediaKeyToQuery[key] || (cachedMediaKeyToQuery[key] = mediaObjectToString(mediaQueryConfig[key]));
}
function mediaKeyMatch(key, dimensions) {
  var mediaQueries = mediaQueryConfig[key],
    result = Object.keys(mediaQueries).every(function (query) {
      var expectedVal = +mediaQueries[query],
        isMax = query.startsWith("max"),
        isWidth = query.endsWith("Width"),
        givenVal = dimensions[isWidth ? "width" : "height"];
      return isMax ? givenVal < expectedVal : givenVal > expectedVal;
    });
  return result;
}
export { _disableMediaTouch, configureMedia, getMediaImportanceIfMoreImportant, getMediaKey, getMediaKeyImportance, getMediaState, isMediaKey, mediaKeyMatch, mediaKeyToQuery, setMediaShouldUpdate, setupMediaListeners, updateMediaListeners, useMedia };
//# sourceMappingURL=useMedia.native.js.map
