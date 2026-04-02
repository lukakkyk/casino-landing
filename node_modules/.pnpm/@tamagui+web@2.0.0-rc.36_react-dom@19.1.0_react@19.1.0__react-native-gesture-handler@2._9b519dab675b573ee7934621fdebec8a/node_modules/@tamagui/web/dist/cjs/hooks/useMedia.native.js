"use strict";

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
  import_config = require("../config.native.js"),
  import_createMediaStyle = require("../helpers/createMediaStyle.native.js"),
  import_matchMedia = require("../helpers/matchMedia.native.js"),
  import_mediaObjectToString = require("../helpers/mediaObjectToString.native.js"),
  import_mediaState = require("../helpers/mediaState.native.js"),
  import_pseudoDescriptors = require("../helpers/pseudoDescriptors.native.js"),
  mediaKeyRegex = /\$(platform|theme|group)-/,
  isMediaKey = function (key) {
    return key[0] !== "$" ? !1 : !!(import_mediaState.mediaKeys.has(key) || mediaKeyRegex.test(key));
  },
  getMediaKey = function (key) {
    if (key[0] !== "$") return !1;
    if (import_mediaState.mediaKeys.has(key)) return !0;
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
      mediaQueryDefaultActive = (0, import_config.getSetting)("mediaQueryDefaultActive");
    if (media) {
      mediaVersion++, (0, import_createMediaStyle.resetMediaStyleCache)();
      for (var key in media) (0, import_mediaState.getMedia)()[key] = mediaQueryDefaultActive?.[key] || !1, import_mediaState.mediaKeys.add(`$${key}`);
      Object.assign(import_mediaState.mediaQueryConfig, media), initState = {
        ...(0, import_mediaState.getMedia)()
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
    var str = (0, import_mediaObjectToString.mediaObjectToString)(import_mediaState.mediaQueryConfig[key2]),
      getMatch = function () {
        return (0, import_matchMedia.matchMedia)(str);
      },
      match = getMatch();
    if (!match) throw new Error("\u26A0\uFE0F No match");
    match.addListener(update), dispose.add(function () {
      match.removeListener(update);
    });
    function update() {
      var next = !!getMatch().matches;
      next !== (0, import_mediaState.getMedia)()[key2] && ((0, import_mediaState.setMediaState)({
        ...(0, import_mediaState.getMedia)(),
        [key2]: next
      }), updateMediaListeners());
    }
    update();
  };
  if (!(import_constants.isWeb && import_constants.isServer) && !process.env.IS_STATIC && setupVersion !== mediaVersion) {
    setupVersion = mediaVersion, unlisten();
    for (var key in import_mediaState.mediaQueryConfig) _loop(key);
  }
}
var listeners = /* @__PURE__ */new Set();
function updateMediaListeners() {
  listeners.forEach(function (cb) {
    return cb((0, import_mediaState.getMedia)());
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
    internalRef = (0, import_react.useRef)(null);
  internalRef.current || (internalRef.current = {
    keys: /* @__PURE__ */new Set(),
    lastState: (0, import_mediaState.getMedia)()
  }), internalRef.current.pendingState && (internalRef.current.lastState = internalRef.current.pendingState, internalRef.current.pendingState = void 0);
  var {
    keys
  } = internalRef.current;
  keys.size && keys.clear();
  var state = (0, import_react.useSyncExternalStore)(subscribe, function () {
    var curKeys = componentState?.keys || keys,
      {
        lastState,
        pendingState
      } = internalRef.current;
    if (!curKeys.size) return lastState;
    var ms = (0, import_mediaState.getMedia)(),
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
    var importance = isSizeMedia ? getMediaKeyImportance(mediaKey) : import_pseudoDescriptors.defaultMediaImportance,
      usedKeys = styleState.usedKeys;
    return !usedKeys[key] || importance > usedKeys[key] ? importance : null;
  },
  cachedMediaKeyToQuery = {};
function mediaKeyToQuery(key) {
  return cachedMediaKeyToQuery[key] || (cachedMediaKeyToQuery[key] = (0, import_mediaObjectToString.mediaObjectToString)(import_mediaState.mediaQueryConfig[key]));
}
function mediaKeyMatch(key, dimensions) {
  var mediaQueries = import_mediaState.mediaQueryConfig[key],
    result = Object.keys(mediaQueries).every(function (query) {
      var expectedVal = +mediaQueries[query],
        isMax = query.startsWith("max"),
        isWidth = query.endsWith("Width"),
        givenVal = dimensions[isWidth ? "width" : "height"];
      return isMax ? givenVal < expectedVal : givenVal > expectedVal;
    });
  return result;
}
//# sourceMappingURL=useMedia.native.js.map
