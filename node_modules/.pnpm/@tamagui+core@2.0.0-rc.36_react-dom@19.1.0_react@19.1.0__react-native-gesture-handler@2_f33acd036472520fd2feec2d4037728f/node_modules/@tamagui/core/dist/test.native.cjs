Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let react_jsx_runtime = require("react/jsx-runtime");
let react = require("react");
react = __toESM(react);
let react_native = require("react-native");
//#region \0@oxc-project+runtime@0.122.0/helpers/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
//#endregion
//#region \0@oxc-project+runtime@0.122.0/helpers/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
//#endregion
//#region \0@oxc-project+runtime@0.122.0/helpers/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.122.0/helpers/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
//#endregion
//#region \0@oxc-project+runtime@0.122.0/helpers/objectSpread2.js
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
//#endregion
//#region \0@oxc-project+runtime@0.122.0/helpers/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (e.includes(n)) continue;
		t[n] = r[n];
	}
	return t;
}
//#endregion
//#region \0@oxc-project+runtime@0.122.0/helpers/objectWithoutProperties.js
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
//#endregion
//#region ../web/dist/esm/helpers/pseudoDescriptors.native.js
var pseudoDescriptorsBase = {
	hoverStyle: {
		name: "hover",
		priority: 2
	},
	pressStyle: {
		name: "active",
		stateKey: "press",
		priority: 3
	},
	focusVisibleStyle: {
		name: "focus-visible",
		priority: 4,
		stateKey: "focusVisible"
	},
	focusStyle: {
		name: "focus",
		priority: 4
	},
	focusWithinStyle: {
		name: "focus-within",
		priority: 4,
		stateKey: "focusWithin"
	},
	disabledStyle: {
		name: "disabled",
		priority: 5,
		stateKey: "disabled"
	}
}, pseudoPriorities = {
	hover: pseudoDescriptorsBase.hoverStyle.priority,
	press: pseudoDescriptorsBase.pressStyle.priority,
	focus: pseudoDescriptorsBase.focusStyle.priority,
	focusVisible: pseudoDescriptorsBase.focusVisibleStyle.priority,
	focusWithin: pseudoDescriptorsBase.focusWithinStyle.priority,
	disabled: pseudoDescriptorsBase.disabledStyle.priority
}, pseudoDescriptors = _objectSpread2(_objectSpread2({}, pseudoDescriptorsBase), {}, {
	enterStyle: {
		name: "enter",
		selector: ".t_unmounted",
		priority: 4
	},
	exitStyle: {
		name: "exit",
		priority: 5
	}
}), defaultMediaImportance = Object.keys(pseudoDescriptors).length;
//#endregion
//#region ../web/dist/esm/helpers/mergeProps.native.js
function _type_of$10(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var mergeProps = function(defaultProps, props) {
	var out = {};
	for (var key in defaultProps) key in props || (out[key] = defaultProps[key]);
	for (var key1 in props) mergeProp(out, defaultProps, props, key1);
	return out;
}, mergeComponentProps = function(defaultProps, contextProps, props) {
	var overriddenContext = null;
	if (!defaultProps && !contextProps) return [props, overriddenContext];
	if (defaultProps && !contextProps) return [mergeProps(defaultProps, props), overriddenContext];
	var out = {};
	for (var key in defaultProps) key in props || (out[key] = defaultProps[key]);
	for (var key1 in contextProps) if (!(key1 in props)) {
		var contextValue = contextProps[key1];
		contextValue !== void 0 && (out[key1] = contextValue);
	}
	for (var key2 in props) mergeProp(out, defaultProps, props, key2), contextProps && key2 in contextProps && (overriddenContext || (overriddenContext = {}), overriddenContext[key2] = props[key2]);
	return [out, overriddenContext];
};
function mergeProp(out, defaultProps, props, key) {
	var val = props[key];
	if (defaultProps && key in defaultProps && (key in pseudoDescriptors || key[0] === "$") && val && (typeof val > "u" ? "undefined" : _type_of$10(val)) === "object") {
		var defaultVal = defaultProps[key];
		defaultVal && (typeof defaultVal > "u" ? "undefined" : _type_of$10(defaultVal)) === "object" && (val = mergeProps(defaultVal, val));
	}
	out[key] = val;
}
//#endregion
//#region ../web/dist/esm/helpers/objectIdentityKey.native.js
function _type_of$9(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function objectIdentityKey(obj) {
	var k = "";
	for (var key in obj) {
		k += key;
		var arg = obj[key], type = typeof arg > "u" ? "undefined" : _type_of$9(arg);
		if (!arg || type !== "object" && type !== "function") k += type + arg;
		else if (cache$5.has(arg)) k += cache$5.get(arg);
		else {
			var v = Math.random();
			cache$5.set(arg, v), k += v;
		}
	}
	return k;
}
var cache$5 = /* @__PURE__ */ new WeakMap();
//#endregion
//#region ../web/dist/esm/helpers/createStyledContext.native.js
var _excluded$6 = [
	"children",
	"scope",
	"__disableMergeDefaultValues"
];
var createStyledContext = function(defaultValues) {
	"use no memo";
	var namespace = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", createReactContext = react.default["createContext"], useReactMemo = react.default["useMemo"], useReactContext = react.default["useContext"], OGContext = createReactContext(defaultValues), OGProvider = OGContext.Provider, Context = OGContext, scopedContexts = /* @__PURE__ */ new Map(), LastScopeInNamespace = createReactContext(namespace);
	function getOrCreateScopedContext(scope) {
		var ScopedContext = scopedContexts.get(scope);
		return ScopedContext || (ScopedContext = createReactContext(defaultValues), scopedContexts.set(scope, ScopedContext)), ScopedContext;
	}
	var getNamespacedScope = function(scope) {
		return namespace ? `${namespace}--${scope}` : scope;
	}, Provider = function(param) {
		var { children, scope: scopeIn, __disableMergeDefaultValues } = param, values = _objectWithoutProperties(param, _excluded$6), scope = getNamespacedScope(scopeIn), next = useReactMemo(function() {
			return __disableMergeDefaultValues ? values : mergeProps(defaultValues, values);
		}, [objectIdentityKey(values)]), ScopedProvider = OGProvider;
		return scope && (ScopedProvider = getOrCreateScopedContext(scope).Provider), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LastScopeInNamespace.Provider, {
			value: scope,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ScopedProvider, {
				value: next,
				children
			})
		});
	}, useStyledContext = function() {
		var scopeIn = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", lastScopeInNamespace = useReactContext(LastScopeInNamespace), scope = namespace ? scopeIn ? getNamespacedScope(scopeIn) : lastScopeInNamespace : scopeIn;
		return useReactContext(scope ? getOrCreateScopedContext(scope) : OGContext);
	};
	return Context.Provider = Provider, Context.props = defaultValues, Context.context = OGContext, Context.useStyledContext = useStyledContext, Context;
};
//#endregion
//#region ../web/dist/esm/contexts/ComponentContext.native.js
var ComponentContext = createStyledContext({
	disableSSR: void 0,
	inText: !1,
	language: null,
	animationDriver: null,
	setParentFocusState: null,
	insets: null
}), useConfiguration = function() {
	return (0, react.useContext)(ComponentContext);
};
//#endregion
//#region ../web/dist/esm/contexts/GroupContext.native.js
var GroupContext = /* @__PURE__ */ (0, react.createContext)(null);
//#endregion
//#region ../../packages/is-equal-shallow/dist/esm/index.native.js
function useCreateShallowSetState(setter, debug) {
	return (0, react.useCallback)(function(stateOrGetState) {
		setter(function(prev) {
			return mergeIfNotShallowEqual(prev, typeof stateOrGetState == "function" ? stateOrGetState(prev) : stateOrGetState);
		});
	}, [setter, debug]);
}
function mergeIfNotShallowEqual(prev, next) {
	return !prev || !next || isEqualShallow(prev, next) ? prev || next : _objectSpread2(_objectSpread2({}, prev), next);
}
function isEqualShallow(prev, next) {
	for (var key in next) if (prev[key] !== next[key]) return !1;
	return !0;
}
//#endregion
//#region ../constants/dist/esm/constants.native.js
var isWeb = !1, isBrowser = !1, isServer = !1, isClient = !0, isWindowDefined = !1, useIsomorphicLayoutEffect = react.useLayoutEffect, isChrome = !1, isWebTouchable = !1, isTouchable = !0, isAndroid = (react_native.Platform === null || react_native.Platform === void 0 ? void 0 : react_native.Platform.OS) === "android" || process.env.TEST_NATIVE_PLATFORM === "android", isIos = (react_native.Platform === null || react_native.Platform === void 0 ? void 0 : react_native.Platform.OS) === "ios" || process.env.TEST_NATIVE_PLATFORM === "ios", currentPlatform = (!(react_native.Platform === null || react_native.Platform === void 0) && react_native.Platform.OS ? {
	ios: "ios",
	android: "android"
}[react_native.Platform.OS] : void 0) || "native";
//#endregion
//#region ../web/dist/esm/constants/constants.native.js
var THEME_NAME_SEPARATOR = "_", THEME_CLASSNAME_PREFIX = "t_", FONT_DATA_ATTRIBUTE_NAME = "data-tamagui-font", MISSING_THEME_MESSAGE = "Missing theme.";
//#endregion
//#region ../web/dist/esm/config.native.js
var conf$1, getConfigFromGlobalOrLocal = function() {
	return conf$1 || (globalThis.__tamaguiConfig ? globalThis.__tamaguiConfig : null);
}, getSetting = function(key) {
	var config = getConfigFromGlobalOrLocal();
	var _config_settings_key;
	return (_config_settings_key = config.settings[key]) !== null && _config_settings_key !== void 0 ? _config_settings_key : config[key];
}, setConfig = function(next) {
	conf$1 = next, globalThis.__tamaguiConfig = next;
}, setConfigFont = function(name, font, fontParsed) {
	var config = getConfigFromGlobalOrLocal();
	config.fonts[name] = font, config.fontsParsed[`$${name}`] = fontParsed;
}, getConfig = function() {
	var config = getConfigFromGlobalOrLocal();
	if (!config) throw new Error("Missing tamagui config, you either have a duplicate config, or haven't set it up. Be sure createTamagui is called before rendering. Also, make sure all of your tamagui dependencies are on the same version (`tamagui`, `@tamagui/package-name`, etc.) not just in your package.json, but in your lockfile.");
	return config;
}, getConfigMaybe = function() {
	return getConfigFromGlobalOrLocal();
}, tokensMerged;
function setTokens(_) {
	tokensMerged = _;
}
var getTokens = function() {
	var { prefixed } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (
	/**
	* Force either with $ or without $ prefix
	*/
	{});
	var { tokens, tokensParsed } = getConfigFromGlobalOrLocal();
	return prefixed === !1 ? tokens : prefixed === !0 ? tokensParsed : tokensMerged;
}, getTokenObject = function(value, group) {
	var _tokensMerged_group, _tokensMerged_, config = getConfigFromGlobalOrLocal(), _config_specificTokens_value;
	return (_config_specificTokens_value = config.specificTokens[value]) !== null && _config_specificTokens_value !== void 0 ? _config_specificTokens_value : group ? (_tokensMerged_group = tokensMerged[group]) === null || _tokensMerged_group === void 0 ? void 0 : _tokensMerged_group[value] : (_tokensMerged_ = tokensMerged[Object.keys(tokensMerged).find(function(cat) {
		return tokensMerged[cat][value];
	}) || ""]) === null || _tokensMerged_ === void 0 ? void 0 : _tokensMerged_[value];
}, getToken = function(value, group) {
	var useVariable = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, token = getTokenObject(value, group);
	return useVariable ? token === null || token === void 0 ? void 0 : token.variable : token === null || token === void 0 ? void 0 : token.val;
}, getTokenValue = function(value, group) {
	if (!(value === "unset" || value === "auto")) return getToken(value, group, !1);
}, getThemes = function() {
	return getConfigFromGlobalOrLocal().themes;
}, updateConfig = function(key, value) {
	var config = getConfigFromGlobalOrLocal();
	Object.assign(config[key], value);
}, getFont = function(name) {
	var _Object_entries_find, conf2 = getConfig(), _conf_fontsParsed_name;
	return (_conf_fontsParsed_name = conf2.fontsParsed[name]) !== null && _conf_fontsParsed_name !== void 0 ? _conf_fontsParsed_name : (_Object_entries_find = Object.entries(conf2.fontsParsed).find(function(param) {
		var [k] = param, _conf_fontsParsed_k_family, _conf_fontsParsed_k;
		return ((_conf_fontsParsed_k = conf2.fontsParsed[k]) === null || _conf_fontsParsed_k === void 0 || (_conf_fontsParsed_k_family = _conf_fontsParsed_k.family) === null || _conf_fontsParsed_k_family === void 0 ? void 0 : _conf_fontsParsed_k_family.val) === name;
	})) === null || _Object_entries_find === void 0 ? void 0 : _Object_entries_find[1];
};
function setupDev(conf2) {}
function loadAnimationDriver(name, driver) {
	var config = getConfigFromGlobalOrLocal();
	if (!config) return;
	config.animations && !("default" in config.animations) && (config.animations = { default: config.animations }), config.animations ? config.animations[name] = driver : config.animations = {
		default: driver,
		[name]: driver
	};
}
//#endregion
//#region ../web/dist/esm/helpers/mediaObjectToString.native.js
function camelToHyphen(str) {
	return str.replace(/[A-Z]/g, function(m) {
		return `-${m.toLowerCase()}`;
	}).toLowerCase();
}
var cache$4 = /* @__PURE__ */ new WeakMap();
function mediaObjectToString(query) {
	if (typeof query == "string") return query;
	if (cache$4.has(query)) return cache$4.get(query);
	var res = Object.entries(query).map(function(param) {
		var [feature, value] = param;
		return feature = camelToHyphen(feature), typeof value == "string" ? `(${feature}: ${value})` : (typeof value == "number" && /[height|width]$/.test(feature) && (value = `${value}px`), `(${feature}: ${value})`);
	}).join(" and ");
	return cache$4.set(query, res), res;
}
//#endregion
//#region ../web/dist/esm/helpers/mediaState.native.js
var mediaState = {}, setMediaState = function(next) {
	mediaState = next;
}, mediaQueryConfig = {}, getMedia = function() {
	return mediaState;
}, mediaKeys = /* @__PURE__ */ new Set();
//#endregion
//#region ../web/dist/esm/helpers/getGroupPropParts.native.js
function kebabToCamel(str) {
	return str.replace(/-([a-z])/g, function(_, c) {
		return c.toUpperCase();
	});
}
function isValidPseudo(str) {
	return str ? kebabToCamel(str) in pseudoPriorities : !1;
}
function getGroupPropParts(groupProp) {
	var m = getMedia(), [_, name, a, b, c] = groupProp.split("-"), m2 = a && b ? `${a}-${b}` : "", media = m2 && m2 in m && m2 || a && a in m && a || void 0, pseudoCandidate = media ? media === m2 ? c : b ? `${b}${c ? `-${c}` : ""}` : void 0 : a ? `${a}${b ? `-${b}` : ""}${c ? `-${c}` : ""}` : void 0;
	return pseudoCandidate && !isValidPseudo(pseudoCandidate) && (pseudoCandidate = void 0), {
		name,
		pseudo: pseudoCandidate,
		media
	};
}
//#endregion
//#region ../web/dist/esm/helpers/createMediaStyle.native.js
var MEDIA_SEP = "_", prefixes = null, selectors = null;
function resetMediaStyleCache() {
	prefixes = null, selectors = null;
}
var groupPseudoToPseudoCSSMap = {
	press: "active",
	focusVisible: "focus-visible",
	focusWithin: "focus-within"
}, specificities = new Array(12).fill(0).map(function(_, i) {
	return new Array(i).fill(":root").join("");
});
function getThemeOrGroupSelector(name, styleInner, isGroup, groupParts) {
	var isTheme = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, precedenceImportancePrefix = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "", selectorStart = styleInner.lastIndexOf(":root") + 5, selectorEnd = styleInner.lastIndexOf("{"), selector = styleInner.slice(selectorStart, selectorEnd), precedenceSpace = getSetting("addThemeClassName") !== !1 && isTheme ? "" : " ", pseudoSelectorName = groupParts.pseudo ? groupPseudoToPseudoCSSMap[groupParts.pseudo] || groupParts.pseudo : void 0, pseudoSelector = pseudoSelectorName ? `:${pseudoSelectorName}` : "";
	return [selector, `${`:root${precedenceImportancePrefix}${precedenceSpace}`}${`.t_${isGroup ? "group_" : ""}${name}${pseudoSelector}`} ${selector.replaceAll(":root", "")}`];
}
var createMediaStyle = function(styleObject, mediaKeyIn, mediaQueries, type, negate, priority) {
	var [property, , identifier, pseudoIn, rules] = styleObject, isTheme = type === "theme", isPlatform = type === "platform", isGroup = type === "group", isNonWindowMedia = isTheme || isPlatform || isGroup, negKey = negate ? "0" : "", ogPrefix = identifier.slice(0, identifier.indexOf("-") + 1), id = `${ogPrefix}_${mediaKeyIn.replace("-", "")}${negKey}_`, styleRule = "", groupPriority = "", groupMediaKey, containerName, nextIdentifier = identifier.replace(ogPrefix, id), styleInner = rules.map(function(rule) {
		return rule.replaceAll(identifier, nextIdentifier);
	}).join(";"), isHover = !1;
	if (isNonWindowMedia) {
		var specificity = (priority || 0) + (isGroup || isPlatform ? 1 : 0);
		if (isTheme || isGroup) {
			var groupParts = getGroupPropParts(isTheme ? "theme-" + mediaKeyIn : mediaKeyIn), { name, media, pseudo } = groupParts;
			groupMediaKey = media, isGroup && (containerName = name), (pseudo === "press" || pseudoIn === "active") && (specificity += 2), pseudo === "hover" && (isHover = !0);
			var [selector, nextSelector] = getThemeOrGroupSelector(name, styleInner, isGroup, groupParts, isTheme, specificities[specificity]);
			styleRule = styleInner.replace(selector, nextSelector);
		} else {
			var prefix = specificities[specificity];
			styleRule = prefix && styleInner[0] === "@" ? styleInner.replace("{", `{${prefix}`) : `${prefix}${styleInner}`;
		}
	}
	if (!isNonWindowMedia || groupMediaKey) {
		if (!selectors) {
			var mediaKeys = Object.keys(mediaQueries);
			selectors = Object.fromEntries(mediaKeys.map(function(key) {
				return [key, mediaObjectToString(mediaQueries[key])];
			})), prefixes = Object.fromEntries(mediaKeys.map(function(k, index) {
				return [k, new Array(index + 1).fill(":root").join("")];
			}));
		}
		var mediaKey = groupMediaKey || mediaKeyIn, mediaSelector = selectors[mediaKey], mediaQuery = `${negate ? "not all and " : ""}${mediaSelector}`, precedenceImportancePrefix = groupMediaKey ? groupPriority : prefixes[mediaKey], prefix1 = groupMediaKey ? `@container ${containerName}` : "@media";
		groupMediaKey && (styleInner = styleRule), styleInner.includes(prefix1) ? styleRule = styleInner.replace("{", ` and ${mediaQuery} {`).replace("and screen and", "and") : styleRule = `${prefix1} ${mediaQuery}{${precedenceImportancePrefix}${styleInner}}`, groupMediaKey && (styleRule = `@supports (contain: ${getSetting("webContainerType") || "inline-size"}) {${styleRule}}`);
	}
	return isHover && (styleRule = `@media (hover:hover){${styleRule}}`), [
		property,
		void 0,
		nextIdentifier,
		void 0,
		[styleRule]
	];
};
//#endregion
//#region ../web/dist/esm/helpers/matchMedia.native.js
var matchMediaImpl = matchMediaFallback, matchMedia = function() {
	for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
	return matchMediaImpl(...args);
};
function matchMediaFallback(query) {
	return process.env.IS_STATIC, {
		match: function(a, b) {
			return !1;
		},
		addListener: function() {},
		removeListener: function() {},
		matches: !1
	};
}
function setupMatchMedia(_) {
	matchMediaImpl = _, globalThis.matchMedia = _;
}
//#endregion
//#region ../web/dist/esm/hooks/useMedia.native.js
var mediaKeyRegex = /\$(platform|theme|group)-/, getMediaKey = function(key) {
	if (key[0] !== "$") return !1;
	if (mediaKeys.has(key)) return !0;
	var match = key.match(mediaKeyRegex);
	return match ? match[1] : !1;
}, initState, mediaKeysOrdered, getMediaKeyImportance = function(key) {
	return mediaKeysOrdered.indexOf(key) + 100;
}, dispose = /* @__PURE__ */ new Set(), mediaVersion = 0, configureMedia = function(config) {
	var { media } = config, mediaQueryDefaultActive = getSetting("mediaQueryDefaultActive");
	if (media) {
		mediaVersion++, resetMediaStyleCache();
		for (var key in media) getMedia()[key] = (mediaQueryDefaultActive === null || mediaQueryDefaultActive === void 0 ? void 0 : mediaQueryDefaultActive[key]) || !1, mediaKeys.add(`$${key}`);
		Object.assign(mediaQueryConfig, media), initState = _objectSpread2({}, getMedia()), mediaKeysOrdered = Object.keys(media), setupMediaListeners();
	}
};
function unlisten() {
	dispose.forEach(function(cb) {
		return cb();
	}), dispose.clear();
}
var setupVersion = -1;
function setupMediaListeners() {
	var _loop = function(key2) {
		var str = mediaObjectToString(mediaQueryConfig[key2]), getMatch = function() {
			return matchMedia(str);
		}, match = getMatch();
		if (!match) throw new Error("⚠️ No match");
		match.addListener(update), dispose.add(function() {
			match.removeListener(update);
		});
		function update() {
			var next = !!getMatch().matches;
			next !== getMedia()[key2] && (setMediaState(_objectSpread2(_objectSpread2({}, getMedia()), {}, { [key2]: next })), updateMediaListeners());
		}
		update();
	};
	if (!process.env.IS_STATIC && setupVersion !== mediaVersion) {
		setupVersion = mediaVersion, unlisten();
		for (var key in mediaQueryConfig) _loop(key);
	}
}
var listeners = /* @__PURE__ */ new Set();
function updateMediaListeners() {
	listeners.forEach(function(cb) {
		return cb(getMedia());
	});
}
var States = /* @__PURE__ */ new WeakMap();
function setMediaShouldUpdate(ref, enabled, keys) {
	var cur = States.get(ref);
	(!cur || cur.enabled !== enabled || keys) && States.set(ref, _objectSpread2(_objectSpread2({}, cur), {}, {
		enabled,
		keys
	}));
}
function subscribe(subscriber) {
	return listeners.add(subscriber), function() {
		listeners.delete(subscriber);
	};
}
function useMedia(componentContext, debug) {
	"use no memo";
	var componentState = componentContext ? States.get(componentContext) : null, internalRef = (0, react.useRef)(null);
	internalRef.current || (internalRef.current = {
		keys: /* @__PURE__ */ new Set(),
		lastState: getMedia()
	}), internalRef.current.pendingState && (internalRef.current.lastState = internalRef.current.pendingState, internalRef.current.pendingState = void 0);
	var { keys } = internalRef.current;
	keys.size && keys.clear();
	var state = (0, react.useSyncExternalStore)(subscribe, function() {
		var curKeys = (componentState === null || componentState === void 0 ? void 0 : componentState.keys) || keys, { lastState, pendingState } = internalRef.current;
		if (!curKeys.size) return lastState;
		var ms = getMedia(), _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
		try {
			for (var _iterator = curKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
				var key = _step.value;
				if (ms[key] !== (pendingState || lastState)[key]) return (componentContext === null || componentContext === void 0 ? void 0 : componentContext.mediaEmit) ? (componentContext.mediaEmit(ms), internalRef.current.pendingState = ms, lastState) : (internalRef.current.lastState = ms, ms);
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
	return new Proxy(state, { get(_, key) {
		return !disableMediaTouch && typeof key == "string" && keys.add(key), Reflect.get(state, key);
	} });
}
var getServerSnapshot = function() {
	return initState;
}, disableMediaTouch = !1;
function _disableMediaTouch(val) {
	disableMediaTouch = val;
}
function getMediaState(mediaGroups, layout) {
	disableMediaTouch = !0;
	var res;
	try {
		res = Object.fromEntries([...mediaGroups].map(function(mediaKey) {
			return [mediaKey, mediaKeyMatch(mediaKey, layout)];
		}));
	} finally {
		disableMediaTouch = !1;
	}
	return res;
}
var getMediaImportanceIfMoreImportant = function(mediaKey, key, styleState, isSizeMedia) {
	var importance = isSizeMedia ? getMediaKeyImportance(mediaKey) : defaultMediaImportance, usedKeys = styleState.usedKeys;
	return !usedKeys[key] || importance > usedKeys[key] ? importance : null;
};
function mediaKeyMatch(key, dimensions) {
	var mediaQueries = mediaQueryConfig[key];
	return Object.keys(mediaQueries).every(function(query) {
		var expectedVal = +mediaQueries[query], isMax = query.startsWith("max"), givenVal = dimensions[query.endsWith("Width") ? "width" : "height"];
		return isMax ? givenVal < expectedVal : givenVal > expectedVal;
	});
}
//#endregion
//#region ../simple-hash/dist/esm/index.native.js
var cache$3 = /* @__PURE__ */ new Map(), cacheSize = 0, simpleHash = function(strIn) {
	var hashMin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;
	if (cache$3.has(strIn)) return cache$3.get(strIn);
	var str = strIn;
	str[0] === "v" && str.startsWith("var(") && (str = str.slice(6, str.length - 1));
	for (var hash = 0, valids = "", added = 0, len = str.length, i = 0; i < len; i++) {
		if (hashMin !== "strict" && added <= hashMin) {
			var char = str.charCodeAt(i);
			if (char === 46) {
				valids += "--";
				continue;
			}
			if (isValidCSSCharCode(char)) {
				added++, valids += str[i];
				continue;
			}
		}
		hash = hashChar(hash, str[i]);
	}
	var res = valids + (hash ? Math.abs(hash) : "");
	return cacheSize > 1e4 && (cache$3.clear(), cacheSize = 0), cache$3.set(strIn, res), cacheSize++, res;
}, hashChar = function(hash, c) {
	return Math.imul(31, hash) + c.charCodeAt(0) | 0;
};
function isValidCSSCharCode(code) {
	return code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95 || code === 45 || code >= 48 && code <= 57;
}
//#endregion
//#region ../helpers/dist/esm/clamp.native.js
function clamp(value, param) {
	var [min, max] = param;
	return Math.min(max, Math.max(min, value));
}
//#endregion
//#region ../helpers/dist/esm/composeEventHandlers.native.js
function _type_of$8(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function composeEventHandlers(og, next) {
	var { checkDefaultPrevented = !0 } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	return !og || !next ? next || og || void 0 : function(event) {
		if (og === null || og === void 0 || og(event), !event || !(checkDefaultPrevented && (typeof event > "u" ? "undefined" : _type_of$8(event)) === "object" && "defaultPrevented" in event) || "defaultPrevented" in event && !event.defaultPrevented) return next === null || next === void 0 ? void 0 : next(event);
	};
}
//#endregion
//#region ../helpers/dist/esm/types.native.js
var StyleObjectProperty = 0, StyleObjectValue = 1, StyleObjectIdentifier = 2, StyleObjectPseudo = 3, StyleObjectRules = 4;
//#endregion
//#region ../helpers/dist/esm/shouldRenderNativePlatform.native.js
var ALL_PLATFORMS = [
	"web",
	"android",
	"ios"
];
function shouldRenderNativePlatform(nativeProp) {
	if (!nativeProp) return null;
	var userRequestedPlatforms = resolvePlatformNames(nativeProp), _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
	try {
		for (var _iterator = ALL_PLATFORMS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
			var platform = _step.value;
			if (platform === currentPlatform && userRequestedPlatforms.has(platform)) return platform;
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
	return null;
}
function resolvePlatformNames(nativeProp) {
	var set = new Set(nativeProp === !0 ? ALL_PLATFORMS : nativeProp === !1 ? [] : Array.isArray(nativeProp) ? nativeProp : [nativeProp]);
	return set.has("mobile") && (set.add("android"), set.add("ios"), set.delete("mobile")), set;
}
//#endregion
//#region ../helpers/dist/esm/validStyleProps.native.js
var cssShorthandLonghands = {
	borderWidth: !0,
	borderStyle: !0,
	borderColor: !0,
	borderTopWidth: !0,
	borderTopStyle: !0,
	borderTopColor: !0,
	borderRightWidth: !0,
	borderRightStyle: !0,
	borderRightColor: !0,
	borderBottomWidth: !0,
	borderBottomStyle: !0,
	borderBottomColor: !0,
	borderLeftWidth: !0,
	borderLeftStyle: !0,
	borderLeftColor: !0,
	outlineWidth: !0,
	outlineStyle: !0,
	outlineColor: !0,
	outlineOffset: !0
}, textColors = {
	color: !0,
	textDecorationColor: !0,
	textShadowColor: !0
}, tokenCategories = {
	radius: {
		borderRadius: !0,
		borderTopLeftRadius: !0,
		borderTopRightRadius: !0,
		borderBottomLeftRadius: !0,
		borderBottomRightRadius: !0,
		borderStartStartRadius: !0,
		borderStartEndRadius: !0,
		borderEndStartRadius: !0,
		borderEndEndRadius: !0
	},
	size: {
		width: !0,
		height: !0,
		minWidth: !0,
		minHeight: !0,
		maxWidth: !0,
		maxHeight: !0,
		blockSize: !0,
		minBlockSize: !0,
		maxBlockSize: !0,
		inlineSize: !0,
		minInlineSize: !0,
		maxInlineSize: !0
	},
	zIndex: { zIndex: !0 },
	color: _objectSpread2(_objectSpread2({
		backgroundColor: !0,
		borderColor: !0,
		borderBlockStartColor: !0,
		borderBlockEndColor: !0,
		borderBlockColor: !0,
		borderBottomColor: !0,
		borderInlineColor: !0,
		borderInlineStartColor: !0,
		borderInlineEndColor: !0,
		borderTopColor: !0,
		borderLeftColor: !0,
		borderRightColor: !0,
		borderEndColor: !0,
		borderStartColor: !0,
		shadowColor: !0
	}, textColors), {}, { outlineColor: !0 })
}, nonAnimatableViewProps = {
	alignContent: !0,
	alignItems: !0,
	alignSelf: !0,
	backfaceVisibility: !0,
	borderCurve: !0,
	borderStyle: !0,
	borderBlockStyle: !0,
	borderBlockEndStyle: !0,
	borderBlockStartStyle: !0,
	borderInlineStyle: !0,
	borderInlineEndStyle: !0,
	borderInlineStartStyle: !0,
	boxSizing: !0,
	cursor: !0,
	direction: !0,
	display: !0,
	flexDirection: !0,
	flexWrap: !0,
	isolation: !0,
	justifyContent: !0,
	mixBlendMode: !0,
	outlineStyle: !0,
	overflow: !0,
	position: !0
}, nonAnimatableFontProps = {
	fontFamily: !0,
	fontStyle: !0,
	fontVariant: !0,
	textTransform: !0
}, nonAnimatableTextOnlyProps = {
	textAlign: !0,
	textDecorationLine: !0,
	textDecorationStyle: !0,
	userSelect: !0
}, nonAnimatableUnitlessProps = {
	WebkitLineClamp: !0,
	lineClamp: !0,
	gridTemplateColumns: !0,
	gridTemplateAreas: !0
}, nonAnimatableStyleProps = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, nonAnimatableViewProps), nonAnimatableFontProps), nonAnimatableTextOnlyProps), nonAnimatableUnitlessProps), stylePropsUnitless = _objectSpread2(_objectSpread2({}, nonAnimatableUnitlessProps), {}, {
	animationIterationCount: !0,
	aspectRatio: !0,
	borderImageOutset: !0,
	borderImageSlice: !0,
	borderImageWidth: !0,
	columnCount: !0,
	flex: !0,
	flexGrow: !0,
	flexOrder: !0,
	flexPositive: !0,
	flexShrink: !0,
	flexNegative: !0,
	fontWeight: !0,
	gridRow: !0,
	gridRowEnd: !0,
	gridRowGap: !0,
	gridRowStart: !0,
	gridColumn: !0,
	gridColumnEnd: !0,
	gridColumnGap: !0,
	gridColumnStart: !0,
	opacity: !0,
	order: !0,
	orphans: !0,
	tabSize: !0,
	widows: !0,
	zIndex: !0,
	zoom: !0,
	scale: !0,
	scaleX: !0,
	scaleY: !0,
	scaleZ: !0,
	shadowOpacity: !0
}), stylePropsTransform = {
	x: !0,
	y: !0,
	scale: !0,
	perspective: !0,
	scaleX: !0,
	scaleY: !0,
	skewX: !0,
	skewY: !0,
	matrix: !0,
	rotate: !0,
	rotateY: !0,
	rotateX: !0,
	rotateZ: !0
}, stylePropsView = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, nonAnimatableViewProps), {}, {
	borderBottomEndRadius: !0,
	borderBottomStartRadius: !0,
	borderBottomWidth: !0,
	borderLeftWidth: !0,
	borderRightWidth: !0,
	borderBlockWidth: !0,
	borderBlockEndWidth: !0,
	borderBlockStartWidth: !0,
	borderInlineWidth: !0,
	borderInlineEndWidth: !0,
	borderInlineStartWidth: !0,
	borderTopEndRadius: !0,
	borderTopStartRadius: !0,
	borderTopWidth: !0,
	borderWidth: !0,
	transform: !0,
	transformOrigin: !0,
	borderEndWidth: !0,
	borderStartWidth: !0,
	bottom: !0,
	end: !0,
	flexBasis: !0,
	gap: !0,
	columnGap: !0,
	rowGap: !0,
	left: !0,
	margin: !0,
	marginBlock: !0,
	marginBlockEnd: !0,
	marginBlockStart: !0,
	marginInline: !0,
	marginInlineStart: !0,
	marginInlineEnd: !0,
	marginBottom: !0,
	marginEnd: !0,
	marginHorizontal: !0,
	marginLeft: !0,
	marginRight: !0,
	marginStart: !0,
	marginTop: !0,
	marginVertical: !0,
	padding: !0,
	paddingBottom: !0,
	paddingInline: !0,
	paddingBlock: !0,
	paddingBlockStart: !0,
	paddingInlineEnd: !0,
	paddingInlineStart: !0,
	paddingEnd: !0,
	paddingHorizontal: !0,
	paddingLeft: !0,
	paddingRight: !0,
	paddingStart: !0,
	paddingTop: !0,
	paddingVertical: !0,
	right: !0,
	start: !0,
	top: !0,
	inset: !0,
	insetBlock: !0,
	insetBlockEnd: !0,
	insetBlockStart: !0,
	insetInline: !0,
	insetInlineEnd: !0,
	insetInlineStart: !0,
	shadowOffset: !0,
	shadowRadius: !0
}, tokenCategories.color), tokenCategories.radius), tokenCategories.size), stylePropsTransform), stylePropsUnitless), isAndroid ? { elevationAndroid: !0 } : {}), {}, {
	boxShadow: !0,
	border: !0,
	filter: !0,
	backgroundImage: !0,
	experimental_backgroundImage: !0,
	outline: !0,
	outlineColor: !0,
	outlineOffset: !0,
	outlineWidth: !0
}), stylePropsTextOnly = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, _objectSpread2(_objectSpread2({}, nonAnimatableFontProps), {}, {
	fontSize: !0,
	fontWeight: !0,
	letterSpacing: !0,
	lineHeight: !0
})), nonAnimatableTextOnlyProps), textColors), {}, {
	textShadow: !0,
	textShadowOffset: !0,
	textShadowRadius: !0,
	verticalAlign: !0
}), stylePropsText = _objectSpread2(_objectSpread2({}, stylePropsView), stylePropsTextOnly), stylePropsAll = stylePropsText, validPseudoKeys = {
	enterStyle: !0,
	exitStyle: !0,
	hoverStyle: !0,
	pressStyle: !0,
	focusStyle: !0,
	disabledStyle: !0,
	focusWithinStyle: !0
}, validStyles = stylePropsView;
//#endregion
//#region ../helpers/dist/esm/withStaticProperties.native.js
var Decorated = /* @__PURE__ */ Symbol(), withStaticProperties = function(component, staticProps) {
	return Object.assign(component, staticProps), component[Decorated] = !0, component;
};
//#endregion
//#region ../helpers/dist/esm/webOnlyStyleProps.native.js
var nonAnimatableWebViewProps = {
	backgroundAttachment: !0,
	backgroundBlendMode: !0,
	backgroundClip: !0,
	backgroundOrigin: !0,
	backgroundRepeat: !0,
	borderBottomStyle: !0,
	borderLeftStyle: !0,
	borderRightStyle: !0,
	borderTopStyle: !0,
	contain: !0,
	containerType: !0,
	content: !0,
	float: !0,
	maskBorderMode: !0,
	maskBorderRepeat: !0,
	maskClip: !0,
	maskComposite: !0,
	maskMode: !0,
	maskOrigin: !0,
	maskRepeat: !0,
	maskType: !0,
	objectFit: !0,
	overflowBlock: !0,
	overflowInline: !0,
	overflowX: !0,
	overflowY: !0,
	pointerEvents: !0,
	scrollbarWidth: !0,
	textWrap: !0,
	touchAction: !0,
	transformStyle: !0,
	willChange: !0
}, nonAnimatableWebTextProps = {
	whiteSpace: !0,
	wordWrap: !0,
	textOverflow: !0,
	WebkitBoxOrient: !0
}, webOnlyStylePropsView = _objectSpread2(_objectSpread2({}, nonAnimatableWebViewProps), {}, {
	transition: !0,
	backdropFilter: !0,
	WebkitBackdropFilter: !0,
	background: !0,
	borderTop: !0,
	borderRight: !0,
	borderBottom: !0,
	borderLeft: !0,
	backgroundPosition: !0,
	backgroundSize: !0,
	borderImage: !0,
	caretColor: !0,
	clipPath: !0,
	mask: !0,
	maskBorder: !0,
	maskBorderOutset: !0,
	maskBorderSlice: !0,
	maskBorderSource: !0,
	maskBorderWidth: !0,
	maskImage: !0,
	maskPosition: !0,
	maskSize: !0,
	objectPosition: !0,
	textEmphasis: !0,
	userSelect: !0
}), webOnlyStylePropsText = _objectSpread2(_objectSpread2({}, nonAnimatableWebTextProps), {}, {
	textDecorationDistance: !0,
	WebkitLineClamp: !0
});
//#endregion
//#region ../web/dist/esm/createVariable.native.js
function _type_of$7(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function constructCSSVariableName(name) {
	return `var(--${process.env.TAMAGUI_CSS_VARIABLE_PREFIX || ""}${name})`;
}
var createVariable = function(props) {
	var skipHash = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
	if (!skipHash && isVariable(props)) return props;
	var { key, name, val } = props;
	return {
		isVar: !0,
		key,
		name: skipHash ? name : simpleHash(name, 40),
		val,
		variable: ""
	};
};
function variableToString(vrble) {
	arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
	return isVariable(vrble) ? `${vrble.val}` : `${vrble || ""}`;
}
function isVariable(v) {
	return v && (typeof v > "u" ? "undefined" : _type_of$7(v)) === "object" && "isVar" in v;
}
function getVariable(nameOrVariable) {
	var group = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "size", _tokens_group;
	if (nameOrVariable === null || nameOrVariable === void 0 ? void 0 : nameOrVariable.dynamic) return nameOrVariable;
	if (setDidGetVariableValue(!0), isVariable(nameOrVariable)) return variableToString(nameOrVariable);
	var tokens = getConfig().tokensParsed, _tokens_group_nameOrVariable;
	return variableToString((_tokens_group_nameOrVariable = (_tokens_group = tokens[group]) === null || _tokens_group === void 0 ? void 0 : _tokens_group[nameOrVariable]) !== null && _tokens_group_nameOrVariable !== void 0 ? _tokens_group_nameOrVariable : nameOrVariable);
}
var accessed = !1, setDidGetVariableValue = function(val) {
	return accessed = val;
}, didGetVariableValue = function() {
	return accessed;
};
function getVariableValue(v, group) {
	if (isVariable(v)) return setDidGetVariableValue(!0), v.val;
	if (group) {
		var _tokens_group, token = (_tokens_group = getConfig().tokensParsed[group]) === null || _tokens_group === void 0 ? void 0 : _tokens_group[v];
		if (token) return setDidGetVariableValue(!0), token.val;
	}
	return v;
}
function getVariableName(v) {
	return isVariable(v) ? v.name : v;
}
function getVariableVariable(v) {
	return isVariable(v) ? v.variable : v;
}
var createCSSVariable = function(nameProp) {
	var includeVar = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
	var name = simpleHash(nameProp, 60);
	return includeVar ? constructCSSVariableName(name) : name;
};
function px(value) {
	return {
		val: value,
		needsPx: !0
	};
}
//#endregion
//#region ../web/dist/esm/helpers/getDynamicVal.native.js
function getOppositeScheme(scheme) {
	return scheme === "dark" ? "light" : "dark";
}
var colorStyleKeys = {
	backgroundColor: !0,
	borderColor: !0,
	borderTopColor: !0,
	borderRightColor: !0,
	borderBottomColor: !0,
	borderLeftColor: !0,
	borderBlockColor: !0,
	borderBlockEndColor: !0,
	borderBlockStartColor: !0,
	color: !0,
	shadowColor: !0,
	textDecorationColor: !0,
	textShadowColor: !0,
	tintColor: !0,
	outlineColor: !0
};
function isColorStyleKey(key) {
	return colorStyleKeys[key] === !0;
}
function getDynamicVal(param) {
	var { scheme, val, oppositeVal } = param, oppositeScheme = getOppositeScheme(scheme);
	return { dynamic: {
		[scheme]: val,
		[oppositeScheme]: oppositeVal
	} };
}
function extractValueFromDynamic(val, scheme) {
	return (val === null || val === void 0 ? void 0 : val.dynamic) ? val.dynamic[scheme] : val;
}
//#endregion
//#region ../web/dist/esm/hooks/useThemeState.native.js
var ThemeStateContext = (0, react.createContext)(""), allListeners = /* @__PURE__ */ new Map(), listenersByParent = {}, HasRenderedOnce = /* @__PURE__ */ new WeakMap(), HadTheme = /* @__PURE__ */ new WeakMap(), PendingUpdate = /* @__PURE__ */ new Map(), states = /* @__PURE__ */ new Map(), localStates = /* @__PURE__ */ new Map(), shouldForce = !1, forceUpdateThemes = function() {
	cacheVersion++, shouldForce = !0, allListeners.forEach(function(cb) {
		return cb();
	}), shouldForce = !1;
}, getThemeState = function(id) {
	return states.get(id);
}, cacheVersion = 0, themeNameCache = /* @__PURE__ */ new Map(), themeNameCacheVer = -1, themes = null, rootThemeState = null, getRootThemeState = function() {
	return rootThemeState;
}, getThemeBaseName = function(name) {
	return name.replace(/^(light|dark)_/, "");
}, useThemeState = function(props) {
	"use no memo";
	var isRoot = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, keys = arguments.length > 2 ? arguments[2] : void 0, schemeKeys = arguments.length > 3 ? arguments[3] : void 0, { disable } = props, parentId = (0, react.useContext)(ThemeStateContext);
	if (!parentId && !isRoot) throw new Error(MISSING_THEME_MESSAGE);
	if (disable) return states.get(parentId) || {
		id: "",
		name: "light",
		theme: getConfig().themes.light
	};
	var id = (0, react.useId)(), subscribe = (0, react.useCallback)(function(cb) {
		return listenersByParent[parentId] = listenersByParent[parentId] || /* @__PURE__ */ new Set(), listenersByParent[parentId].add(id), allListeners.set(id, function() {
			PendingUpdate.set(id, shouldForce ? "force" : !0), cb();
		}), function() {
			allListeners.delete(id), listenersByParent[parentId].delete(id), localStates.delete(id), states.delete(id), PendingUpdate.delete(id);
		};
	}, [id, parentId]), propsKey = getPropsKey(props), getSnapshot = function() {
		var _keys_current, _schemeKeys_current, _keys_current1, _props_needsUpdate, local = localStates.get(id), parentState = states.get(parentId);
		if (local && !PendingUpdate.has(id) && parentState && local._parentName === parentState.name && local._propsKey === propsKey) return local;
		var isSchemeOnlyChange = isIos && getSetting("fastSchemeChange") && local && parentState && local.scheme !== parentState.scheme && getThemeBaseName(local.name) === getThemeBaseName(parentState.name), _keys_current_size, keysSize = (_keys_current_size = keys == null || (_keys_current = keys.current) === null || _keys_current === void 0 ? void 0 : _keys_current.size) !== null && _keys_current_size !== void 0 ? _keys_current_size : 0, _schemeKeys_current_size, allKeysSchemeOptimized = ((_schemeKeys_current_size = schemeKeys == null || (_schemeKeys_current = schemeKeys.current) === null || _schemeKeys_current === void 0 ? void 0 : _schemeKeys_current.size) !== null && _schemeKeys_current_size !== void 0 ? _schemeKeys_current_size : 0) === keysSize && keysSize > 0, canSkipForSchemeChange = isSchemeOnlyChange && allKeysSchemeOptimized, needsUpdate = props.passThrough ? !1 : isRoot || props.name === "light" || props.name === "dark" || props.name === null ? !0 : HasRenderedOnce.get(keys) ? canSkipForSchemeChange ? !1 : !(keys == null || (_keys_current1 = keys.current) === null || _keys_current1 === void 0) && _keys_current1.size ? !0 : (_props_needsUpdate = props.needsUpdate) === null || _props_needsUpdate === void 0 ? void 0 : _props_needsUpdate.call(props) : !0, [rerender, next] = getNextState(local, props, propsKey, isRoot, id, parentId, needsUpdate, PendingUpdate.get(id));
		return PendingUpdate.delete(id), (!local || rerender) && (local = _objectSpread2({}, next), localStates.set(id, local)), next !== local && (Object.assign(local, next), local.id = id), local._parentName = parentState === null || parentState === void 0 ? void 0 : parentState.name, local._propsKey = propsKey, states.set(id, next), local;
	};
	var state = (0, react.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
	return useIsomorphicLayoutEffect(function() {
		if (!HasRenderedOnce.get(keys)) {
			HasRenderedOnce.set(keys, !0);
			return;
		}
		if (!propsKey) {
			HadTheme.get(keys) && scheduleUpdate(id), HadTheme.set(keys, !1);
			return;
		}
		scheduleUpdate(id), HadTheme.set(keys, !0);
	}, [keys, propsKey]), state;
}, getNextState = function(lastState, props, propsKey) {
	var isRoot = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, id = arguments.length > 4 ? arguments[4] : void 0, parentId = arguments.length > 5 ? arguments[5] : void 0, needsUpdate = arguments.length > 6 ? arguments[6] : void 0, pendingUpdate = arguments.length > 7 ? arguments[7] : void 0, { debug } = props, parentState = states.get(parentId);
	if (props.passThrough) return [!1, lastState || parentState || { name: "" }];
	themes || (themes = getConfig().themes);
	var name = !propsKey && (!lastState || !(lastState === null || lastState === void 0 ? void 0 : lastState.isNew)) ? null : getNewThemeName(parentState === null || parentState === void 0 ? void 0 : parentState.name, props, pendingUpdate === "force" ? !0 : !!needsUpdate), isSameAsParent = parentState && (!name || name === parentState.name), shouldRerender = !!(pendingUpdate === "force" || needsUpdate && (pendingUpdate || (lastState === null || lastState === void 0 ? void 0 : lastState.name) !== (parentState === null || parentState === void 0 ? void 0 : parentState.name)));
	if (isSameAsParent) return !shouldRerender && lastState && lastState.name === parentState.name ? [!1, lastState] : [shouldRerender, _objectSpread2(_objectSpread2({}, parentState), {}, { isNew: !1 })];
	if (!name) {
		var next = lastState !== null && lastState !== void 0 ? lastState : parentState;
		if (!next) throw new Error(MISSING_THEME_MESSAGE);
		if (shouldRerender) return [!0, _objectSpread2({}, parentState || lastState)];
		return [!1, next];
	}
	var scheme = getScheme(name), isInverse = parentState && scheme !== parentState.scheme, nextState = {
		id,
		name,
		theme: themes[name],
		scheme,
		parentId,
		parentName: parentState === null || parentState === void 0 ? void 0 : parentState.name,
		isInverse,
		isNew: !0
	};
	if (isRoot && (rootThemeState = nextState), pendingUpdate !== "force" && lastState && lastState.name === name) return [!1, nextState];
	return pendingUpdate !== "force" && lastState && !needsUpdate && nextState.name === lastState.name ? [!1, nextState] : [!0, nextState];
};
function scheduleUpdate(id) {
	for (var queue = [id], visited = /* @__PURE__ */ new Set(); queue.length;) {
		var children = listenersByParent[queue.shift()];
		if (children) {
			var _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
			try {
				for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
					var childId = _step.value;
					visited.has(childId) || (visited.add(childId), queue.push(childId));
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
		}
	}
	visited.forEach(function(childId2) {
		var cb = allListeners.get(childId2);
		cb === null || cb === void 0 || cb();
	});
}
var validSchemes = {
	light: "light",
	dark: "dark"
};
function getScheme(name) {
	return validSchemes[name.split("_")[0]];
}
function getNewThemeName() {
	var parentName = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", props = arguments.length > 1 ? arguments[1] : void 0, forceUpdate = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, { name, reset } = props, componentName = props.unstyled ? void 0 : props.componentName;
	if (name && reset) throw new Error("Cannot reset and set a new name at the same time.");
	var cacheKey = `${parentName}|${name || ""}|${componentName || ""}|${reset ? 1 : 0}|${forceUpdate ? 1 : 0}`;
	if (themeNameCacheVer !== cacheVersion) themeNameCache.clear(), themeNameCacheVer = cacheVersion;
	else {
		var cached = themeNameCache.get(cacheKey);
		if (cached !== void 0) return cached;
	}
	var { themes: themes2 } = getConfig();
	if (reset) {
		if (parentName === "light" || parentName === "dark") {
			var result = parentName === "light" ? "dark" : "light";
			return themeNameCache.set(cacheKey, result), result;
		}
		var lastPartIndex = parentName.lastIndexOf("_"), name1 = lastPartIndex <= 0 ? parentName : parentName.slice(lastPartIndex), scheme = parentName.slice(0, lastPartIndex), result1 = themes2[name1] ? name1 : scheme;
		return themeNameCache.set(cacheKey, result1), result1;
	}
	var parentParts = parentName.split("_"), lastName = parentParts[parentParts.length - 1];
	lastName && lastName[0].toLowerCase() !== lastName[0] && parentParts.pop();
	var subNames = [
		name && componentName ? `${name}_${componentName}` : void 0,
		name,
		componentName
	].filter(Boolean), found = null;
	if (name) {
		var nameHasScheme = getScheme(name);
		if (nameHasScheme) {
			var _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
			try {
				for (var _iterator = subNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
					var subName = _step.value;
					if (subName in themes2) {
						found = subName;
						break;
					}
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
		}
		if (!found && !nameHasScheme) {
			if (getScheme(parentName)) {
				for (var potentialBases = [], i = parentParts.length; i >= 1; i--) potentialBases.push(parentParts.slice(0, i).join("_"));
				var _iteratorNormalCompletion1 = !0, _didIteratorError1 = !1, _iteratorError1 = void 0;
				try {
					outer: for (var _iterator1 = potentialBases[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = !0) {
						var base = _step1.value, candidates = [componentName ? `${base}_${name}_${componentName}` : void 0, `${base}_${name}`].filter(Boolean), _iteratorNormalCompletion2 = !0, _didIteratorError2 = !1, _iteratorError2 = void 0;
						try {
							for (var _iterator2 = candidates[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = !0) {
								var potential = _step2.value;
								if (potential in themes2) {
									found = potential;
									break outer;
								}
							}
						} catch (err) {
							_didIteratorError2 = !0, _iteratorError2 = err;
						} finally {
							try {
								!_iteratorNormalCompletion2 && _iterator2.return != null && _iterator2.return();
							} finally {
								if (_didIteratorError2) throw _iteratorError2;
							}
						}
					}
				} catch (err) {
					_didIteratorError1 = !0, _iteratorError1 = err;
				} finally {
					try {
						!_iteratorNormalCompletion1 && _iterator1.return != null && _iterator1.return();
					} finally {
						if (_didIteratorError1) throw _iteratorError1;
					}
				}
			}
		}
	}
	if (!found) if (!name && componentName) {
		var potential1 = `${parentParts.join("_")}_${componentName}`;
		potential1 in themes2 && (found = potential1);
	} else for (var max = parentParts.length, i1 = 0; i1 <= max; i1++) {
		var base1 = (i1 === 0 ? parentParts : parentParts.slice(0, -i1)).join("_"), _iteratorNormalCompletion3 = !0, _didIteratorError3 = !1, _iteratorError3 = void 0;
		try {
			for (var _iterator3 = subNames[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = !0) {
				var subName1 = _step3.value, potential2 = base1 ? `${base1}_${subName1}` : subName1;
				if (potential2 in themes2) {
					found = potential2;
					break;
				}
			}
		} catch (err) {
			_didIteratorError3 = !0, _iteratorError3 = err;
		} finally {
			try {
				!_iteratorNormalCompletion3 && _iterator3.return != null && _iterator3.return();
			} finally {
				if (_didIteratorError3) throw _iteratorError3;
			}
		}
		if (found) break;
	}
	return !forceUpdate && found === parentName && !validSchemes[found] ? (themeNameCache.set(cacheKey, null), null) : (themeNameCache.set(cacheKey, found), found);
}
var getPropsKey = function(param) {
	var { name, reset, forceClassName, componentName } = param;
	return `${name || ""}${reset || ""}${forceClassName || ""}${componentName || ""}`;
}, hasThemeUpdatingProps = function(props) {
	return "name" in props || "reset" in props || "forceClassName" in props;
};
//#endregion
//#region ../web/dist/esm/hooks/doesRootSchemeMatchSystem.native.js
function doesRootSchemeMatchSystem() {
	var _getRootThemeState;
	return ((_getRootThemeState = getRootThemeState()) === null || _getRootThemeState === void 0 ? void 0 : _getRootThemeState.scheme) === react_native.Appearance.getColorScheme();
}
//#endregion
//#region ../web/dist/esm/hooks/getThemeProxied.native.js
var cache$2 = /* @__PURE__ */ new Map(), curKeys, curSchemeKeys, curProps, curState, emptyObject = {};
function getThemeProxied(_props, _state, _keys, _schemeKeys) {
	if (!(_state === null || _state === void 0 ? void 0 : _state.theme)) return emptyObject;
	if (curKeys = _keys, curSchemeKeys = _schemeKeys, curProps = _props, curState = _state, cache$2.has(curState.theme)) return cache$2.get(curState.theme);
	var config = getConfig();
	function track(key) {
		var schemeOptimized = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		curKeys && (curKeys.current || (curKeys.current = /* @__PURE__ */ new Set()), curKeys.current.add(key), schemeOptimized && curSchemeKeys && (curSchemeKeys.current || (curSchemeKeys.current = /* @__PURE__ */ new Set()), curSchemeKeys.current.add(key)));
	}
	var proxied1 = Object.fromEntries(Object.entries(_state.theme).flatMap(function(param) {
		var [key, value] = param, proxied2 = _objectSpread2(_objectSpread2({}, value), {}, {
			get val() {
				return globalThis.tamaguiAvoidTracking || track(key, !1), value.val;
			},
			get(platform) {
				if (curState) {
					var outVal = getVariable(value), { name, scheme } = curState, fastSchemeChange = getSetting("fastSchemeChange"), rootMatchesSystem = doesRootSchemeMatchSystem();
					if (scheme && platform !== "web" && isIos && !curProps.deopt && !curState.isInverse && fastSchemeChange && rootMatchesSystem) {
						var _config_themes_name, _config_themes_oppositeName, oppositeScheme = scheme === "dark" ? "light" : "dark", oppositeName = name.replace(scheme, oppositeScheme);
						var dynamicVal = getDynamicVal({
							scheme,
							val: getVariable((_config_themes_name = config.themes[name]) === null || _config_themes_name === void 0 ? void 0 : _config_themes_name[key]),
							oppositeVal: getVariable((_config_themes_oppositeName = config.themes[oppositeName]) === null || _config_themes_oppositeName === void 0 ? void 0 : _config_themes_oppositeName[key])
						});
						return track(key, !0), dynamicVal;
					}
					return track(key, !1), outVal;
				}
			}
		});
		return [[key, proxied2], [`$${key}`, proxied2]];
	}));
	return cache$2.set(_state.theme, proxied1), proxied1;
}
//#endregion
//#region ../web/dist/esm/hooks/useTheme.native.js
var EMPTY = {}, useTheme = function() {
	"use no memo";
	var [theme] = useThemeWithState(EMPTY);
	return theme;
}, useThemeWithState = function(props) {
	"use no memo";
	var isRoot = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, keys = (0, react.useRef)(null), schemeKeys = (0, react.useRef)(null), themeState = useThemeState(props, isRoot, keys, schemeKeys);
	return [props.passThrough ? {} : getThemeProxied(props, themeState, keys, schemeKeys), themeState];
};
//#endregion
//#region ../web/dist/esm/_withStableStyle.native.js
var _excluded$5 = ["_expressions"];
var EMPTY_EXPRESSIONS = [], EMPTY_THEME = {}, _withStableStyle = function(Component, createStyle, hasThemeKeys, hasMediaKeys) {
	return /* @__PURE__ */ react.default.memo(/* @__PURE__ */ react.default.forwardRef(function(props, ref) {
		var { _expressions = EMPTY_EXPRESSIONS } = props, rest = _objectWithoutProperties(props, _excluded$5), parentId = (0, react.useContext)(ThemeStateContext), theme = hasThemeKeys && parentId ? useTheme() : null, media = hasMediaKeys ? useMedia() : null, resolvedExpressions = media ? _expressions.map(function(expr) {
			return typeof expr == "string" ? media[expr] : expr;
		}) : _expressions, resolvedTheme = theme || EMPTY_THEME;
		if (hasThemeKeys && !parentId) {
			var config = getConfigMaybe(), themes = config === null || config === void 0 ? void 0 : config.themes;
			if (themes) for (var k in themes) {
				resolvedTheme = themes.light || themes.dark || themes[k];
				break;
			}
		}
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Component, _objectSpread2({
			ref,
			style: createStyle(resolvedTheme, resolvedExpressions)
		}, rest));
	}));
};
//#endregion
//#region ../compose-refs/dist/esm/compose-refs.native.js
function setRef(ref, value) {
	typeof ref == "function" ? ref(value) : ref && (ref.current = value);
}
function composeRefs() {
	for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) refs[_key] = arguments[_key];
	return function(node) {
		return refs.forEach(function(ref) {
			return setRef(ref, node);
		});
	};
}
function useComposedRefs() {
	for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) refs[_key] = arguments[_key];
	return react.useCallback(composeRefs(...refs), refs);
}
//#endregion
//#region ../native/dist/esm/globalState.native.js
function createGlobalState(key, defaultValue) {
	var GLOBAL_KEY = `__tamagui_${key}__`;
	function getGlobalState() {
		var g = globalThis;
		return g[GLOBAL_KEY] || (g[GLOBAL_KEY] = defaultValue), g[GLOBAL_KEY];
	}
	function setGlobalState(newState) {
		globalThis[GLOBAL_KEY] = newState;
	}
	return {
		get: getGlobalState,
		set: setGlobalState
	};
}
//#endregion
//#region ../native/dist/esm/gestureState.native.js
var state = createGlobalState("gesture", {
	enabled: !1,
	Gesture: null,
	GestureDetector: null,
	ScrollView: null
});
function getGestureHandler() {
	return {
		get isEnabled() {
			return state.get().enabled;
		},
		get state() {
			return state.get();
		},
		set(updates) {
			Object.assign(state.get(), updates);
		},
		disable() {
			state.get().enabled = !1;
		},
		createPressGesture(config) {
			var { Gesture } = state.get();
			if (!Gesture) return null;
			var _config_delayLongPress, longPressDuration = (_config_delayLongPress = config.delayLongPress) !== null && _config_delayLongPress !== void 0 ? _config_delayLongPress : 500, tap = Gesture.Tap().runOnJS(!0).maxDuration(1e4).onBegin(function(e) {
				var _config_onPressIn;
				(_config_onPressIn = config.onPressIn) === null || _config_onPressIn === void 0 || _config_onPressIn.call(config, e);
			}).onEnd(function(e) {
				var _config_onPress;
				(_config_onPress = config.onPress) === null || _config_onPress === void 0 || _config_onPress.call(config, e);
			}).onFinalize(function(e) {
				var _config_onPressOut;
				(_config_onPressOut = config.onPressOut) === null || _config_onPressOut === void 0 || _config_onPressOut.call(config, e);
			});
			if (config.hitSlop && tap.hitSlop(config.hitSlop), !config.onLongPress) return tap;
			var longPress = Gesture.LongPress().runOnJS(!0).minDuration(longPressDuration).onBegin(function(e) {
				var _config_onPressIn;
				return (_config_onPressIn = config.onPressIn) === null || _config_onPressIn === void 0 ? void 0 : _config_onPressIn.call(config, e);
			}).onStart(function(e) {
				var _config_onLongPress;
				return (_config_onLongPress = config.onLongPress) === null || _config_onLongPress === void 0 ? void 0 : _config_onLongPress.call(config, e);
			}).onFinalize(function(e) {
				var _config_onPressOut;
				return (_config_onPressOut = config.onPressOut) === null || _config_onPressOut === void 0 ? void 0 : _config_onPressOut.call(config, e);
			});
			return config.hitSlop && longPress.hitSlop(config.hitSlop), Gesture.Exclusive(longPress, tap);
		}
	};
}
//#endregion
//#region ../native/dist/esm/nativeMenuContext.native.js
var NativeMenuContext = (0, react.createContext)(!1);
//#endregion
//#region ../web/dist/esm/defaultComponentState.native.js
var defaultComponentState = {
	hover: !1,
	press: !1,
	pressIn: !1,
	focus: !1,
	focusVisible: !1,
	focusWithin: !1,
	unmounted: !0,
	disabled: !1
}, defaultComponentStateMounted = _objectSpread2(_objectSpread2({}, defaultComponentState), {}, { unmounted: !1 }), defaultComponentStateShouldEnter = _objectSpread2(_objectSpread2({}, defaultComponentState), {}, { unmounted: "should-enter" });
//#endregion
//#region ../web/dist/esm/helpers/mainThreadPressEvents.native.js
var DEFAULT_LONG_PRESS_DELAY = 500, DEFAULT_MIN_PRESS_DURATION = 130;
function useMainThreadPressEvents(events, viewProps) {
	var enabled = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, ref = (0, react.useRef)(null);
	if (ref.current || (ref.current = {
		state: "idle",
		pressInTimer: null,
		pressOutTimer: null,
		longPressTimer: null,
		activateTime: 0
	}), !enabled || !events) return;
	var _events_delayPressIn, delayPressIn = Math.max(0, (_events_delayPressIn = events.delayPressIn) !== null && _events_delayPressIn !== void 0 ? _events_delayPressIn : 0), _events_delayPressOut, delayPressOut = Math.max(0, (_events_delayPressOut = events.delayPressOut) !== null && _events_delayPressOut !== void 0 ? _events_delayPressOut : 0), _events_delayLongPress, delayLongPress = Math.max(0, (_events_delayLongPress = events.delayLongPress) !== null && _events_delayLongPress !== void 0 ? _events_delayLongPress : DEFAULT_LONG_PRESS_DELAY), _events_minPressDuration, minPressDuration = Math.max(0, (_events_minPressDuration = events.minPressDuration) !== null && _events_minPressDuration !== void 0 ? _events_minPressDuration : DEFAULT_MIN_PRESS_DURATION);
	function activate(e) {
		var _events_onPressIn;
		ref.current.state = "active", ref.current.activateTime = Date.now(), (_events_onPressIn = events.onPressIn) === null || _events_onPressIn === void 0 || _events_onPressIn.call(events, e);
	}
	function deactivate(e) {
		var pressDuration = Date.now() - ref.current.activateTime, remaining = Math.max(minPressDuration - pressDuration, delayPressOut);
		if (remaining > 0) ref.current.pressOutTimer = setTimeout(function() {
			var _events_onPressOut2;
			(_events_onPressOut2 = events.onPressOut) === null || _events_onPressOut2 === void 0 || _events_onPressOut2.call(events, e);
		}, remaining);
		else {
			var _events_onPressOut;
			(_events_onPressOut = events.onPressOut) === null || _events_onPressOut === void 0 || _events_onPressOut.call(events, e);
		}
	}
	function cleanup() {
		ref.current.pressInTimer && clearTimeout(ref.current.pressInTimer), ref.current.pressOutTimer && clearTimeout(ref.current.pressOutTimer), ref.current.longPressTimer && clearTimeout(ref.current.longPressTimer), ref.current.pressInTimer = null, ref.current.pressOutTimer = null, ref.current.longPressTimer = null;
	}
	viewProps.onStartShouldSetResponder = function() {
		return !events.disabled;
	}, viewProps.onResponderGrant = function(e) {
		cleanup(), ref.current.state = "pressing", delayPressIn > 0 ? ref.current.pressInTimer = setTimeout(function() {
			return activate(e);
		}, delayPressIn) : activate(e), events.onLongPress && (ref.current.longPressTimer = setTimeout(function() {
			if (ref.current.state === "active") {
				var _events_onLongPress;
				ref.current.state = "longPressed", (_events_onLongPress = events.onLongPress) === null || _events_onLongPress === void 0 || _events_onLongPress.call(events, e);
			}
		}, delayLongPress + delayPressIn));
	}, viewProps.onResponderRelease = function(e) {
		ref.current.state;
		var wasLongPressed = ref.current.state === "longPressed";
		if (cleanup(), ref.current.state === "pressing" && activate(e), !wasLongPressed) {
			var _events_onPress;
			(_events_onPress = events.onPress) === null || _events_onPress === void 0 || _events_onPress.call(events, e);
		}
		deactivate(e), ref.current.state = "idle";
	}, viewProps.onResponderTerminate = function(e) {
		cleanup(), (ref.current.state === "active" || ref.current.state === "longPressed") && deactivate(e), ref.current.state = "idle";
	}, viewProps.onResponderTerminationRequest = function() {
		return events.cancelable !== !1;
	}, viewProps.onResponderMove = function(e) {
		var _events_onPressMove;
		(_events_onPressMove = events.onPressMove) === null || _events_onPressMove === void 0 || _events_onPressMove.call(events, e);
	};
}
//#endregion
//#region ../web/dist/esm/eventHandling.native.js
function useEvents(events, viewProps, stateRef, staticConfig, isHOC, isInsideNativeMenu) {
	events && (events.onFocus && (viewProps.onFocus = events.onFocus), events.onBlur && (viewProps.onBlur = events.onBlur));
	var hasPressEvents = events === null || events === void 0 ? void 0 : events.onPress, gh = getGestureHandler();
	hasPressEvents && (stateRef.current.hasHadEvents = !0);
	var everEnabled = !!(hasPressEvents || stateRef.current.hasHadEvents), isUsingRNGH = gh.isEnabled;
	if (staticConfig.isInput) {
		if (events) {
			var { onPressIn, onPressOut, onPress } = events, inputEvents = {
				onPressIn,
				onPressOut: onPressOut || onPress
			};
			onPressOut && onPress && (inputEvents.onPressOut = composeEventHandlers(onPress, onPressOut)), Object.assign(viewProps, inputEvents);
		}
		return null;
	}
	var isCompositeComponent = !isHOC && staticConfig.Component && typeof staticConfig.Component != "string";
	if (isHOC || isCompositeComponent) {
		if (events) {
			var { onPressIn: onPressIn1, onPressOut: onPressOut1, onPress: onPress1, onLongPress, delayLongPress } = events;
			Object.assign(viewProps, {
				onPressIn: onPressIn1,
				onPressOut: onPressOut1,
				onPress: onPress1,
				onLongPress,
				delayLongPress
			});
		}
		return null;
	}
	if (isUsingRNGH) {
		var callbacksRef = (0, react.useRef)(isUsingRNGH ? {} : null), gestureRef = (0, react.useRef)(null);
		if (everEnabled) {
			if (callbacksRef.current = hasPressEvents ? {
				onPressIn: events.onPressIn,
				onPressOut: events.onPressOut,
				onPress: events.onPress,
				onLongPress: events.onLongPress
			} : {}, !gestureRef.current) if (isInsideNativeMenu) {
				var { Gesture } = gh.state;
				gestureRef.current = Gesture.Manual().runOnJS(!0).manualActivation(!0).onTouchesDown(function() {
					var _callbacksRef_current_onPressIn, _callbacksRef_current;
					(_callbacksRef_current_onPressIn = (_callbacksRef_current = callbacksRef.current).onPressIn) === null || _callbacksRef_current_onPressIn === void 0 || _callbacksRef_current_onPressIn.call(_callbacksRef_current, {});
				}).onTouchesUp(function() {
					var _callbacksRef_current_onPress, _callbacksRef_current, _callbacksRef_current_onPressOut, _callbacksRef_current1;
					(_callbacksRef_current_onPress = (_callbacksRef_current = callbacksRef.current).onPress) === null || _callbacksRef_current_onPress === void 0 || _callbacksRef_current_onPress.call(_callbacksRef_current, {}), (_callbacksRef_current_onPressOut = (_callbacksRef_current1 = callbacksRef.current).onPressOut) === null || _callbacksRef_current_onPressOut === void 0 || _callbacksRef_current_onPressOut.call(_callbacksRef_current1, {});
				}).onTouchesCancelled(function() {
					var _callbacksRef_current_onPressOut, _callbacksRef_current;
					(_callbacksRef_current_onPressOut = (_callbacksRef_current = callbacksRef.current).onPressOut) === null || _callbacksRef_current_onPressOut === void 0 || _callbacksRef_current_onPressOut.call(_callbacksRef_current, {});
				});
			} else gestureRef.current = gh.createPressGesture({
				onPressIn: function(e) {
					var _callbacksRef_current_onPressIn, _callbacksRef_current;
					return (_callbacksRef_current_onPressIn = (_callbacksRef_current = callbacksRef.current).onPressIn) === null || _callbacksRef_current_onPressIn === void 0 ? void 0 : _callbacksRef_current_onPressIn.call(_callbacksRef_current, e);
				},
				onPressOut: function(e) {
					var _callbacksRef_current_onPressOut, _callbacksRef_current;
					return (_callbacksRef_current_onPressOut = (_callbacksRef_current = callbacksRef.current).onPressOut) === null || _callbacksRef_current_onPressOut === void 0 ? void 0 : _callbacksRef_current_onPressOut.call(_callbacksRef_current, e);
				},
				onPress: function(e) {
					var _callbacksRef_current_onPress, _callbacksRef_current;
					return (_callbacksRef_current_onPress = (_callbacksRef_current = callbacksRef.current).onPress) === null || _callbacksRef_current_onPress === void 0 ? void 0 : _callbacksRef_current_onPress.call(_callbacksRef_current, e);
				},
				onLongPress: function(e) {
					var _callbacksRef_current_onLongPress, _callbacksRef_current;
					return (_callbacksRef_current_onLongPress = (_callbacksRef_current = callbacksRef.current).onLongPress) === null || _callbacksRef_current_onLongPress === void 0 ? void 0 : _callbacksRef_current_onLongPress.call(_callbacksRef_current, e);
				},
				delayLongPress: events === null || events === void 0 ? void 0 : events.delayLongPress,
				hitSlop: viewProps.hitSlop
			});
			return gestureRef.current;
		}
		return null;
	}
	return useMainThreadPressEvents(events, viewProps, hasPressEvents), null;
}
function wrapWithGestureDetector(content, gesture, stateRef, isHOC, isCompositeComponent) {
	if (isHOC || isCompositeComponent) return content;
	var { GestureDetector, Gesture } = getGestureHandler().state, shouldWrap = stateRef.current.hasHadEvents;
	if (!GestureDetector || !shouldWrap) return content;
	var gestureToUse = gesture || (Gesture === null || Gesture === void 0 ? void 0 : Gesture.Manual());
	return gestureToUse ? react.default.createElement(GestureDetector, { gesture: gestureToUse }, content) : content;
}
//#endregion
//#region ../web/dist/esm/helpers/getDefaultProps.native.js
var getDefaultProps = function(staticConfig, propsComponentName) {
	var _conf_defaultProps, defaultProps = staticConfig === null || staticConfig === void 0 ? void 0 : staticConfig.defaultProps, conf = getConfig(), name = propsComponentName || (staticConfig === null || staticConfig === void 0 ? void 0 : staticConfig.componentName) || (staticConfig.isText ? "Text" : "View"), userDefaultProps = conf == null || (_conf_defaultProps = conf.defaultProps) === null || _conf_defaultProps === void 0 ? void 0 : _conf_defaultProps[name];
	return userDefaultProps && (defaultProps = defaultProps ? _objectSpread2(_objectSpread2({}, userDefaultProps), defaultProps) : userDefaultProps), defaultProps;
};
//#endregion
//#region ../web/dist/esm/helpers/resolveAnimationDriver.native.js
function resolveAnimationDriver(driver) {
	var _driver_default;
	return driver ? typeof driver.useAnimations == "function" ? driver : "default" in driver && typeof ((_driver_default = driver.default) === null || _driver_default === void 0 ? void 0 : _driver_default.useAnimations) == "function" ? driver.default : null : null;
}
//#endregion
//#region ../web/dist/esm/helpers/defaultOffset.native.js
var defaultOffset = {
	height: 0,
	width: 0
};
//#endregion
//#region ../normalize-css-color/dist/esm/index.native.js
var import_normalize_color = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	function normalizeColor(color) {
		if (typeof color === "number") {
			if (color >>> 0 === color && color >= 0 && color <= 4294967295) return color;
			return null;
		}
		if (typeof color !== "string") return null;
		const matchers = getMatchers();
		let match;
		if (match = matchers.hex6.exec(color)) return parseInt(match[1] + "ff", 16) >>> 0;
		const colorFromKeyword = normalizeKeyword(color);
		if (colorFromKeyword != null) return colorFromKeyword;
		if (match = matchers.rgb.exec(color)) return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0;
		if (match = matchers.rgba.exec(color)) {
			if (match[6] !== void 0) return (parse255(match[6]) << 24 | parse255(match[7]) << 16 | parse255(match[8]) << 8 | parse1(match[9])) >>> 0;
			return (parse255(match[2]) << 24 | parse255(match[3]) << 16 | parse255(match[4]) << 8 | parse1(match[5])) >>> 0;
		}
		if (match = matchers.hex3.exec(color)) return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0;
		if (match = matchers.hex8.exec(color)) return parseInt(match[1], 16) >>> 0;
		if (match = matchers.hex4.exec(color)) return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
		if (match = matchers.hsl.exec(color)) return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
		if (match = matchers.hsla.exec(color)) {
			if (match[6] !== void 0) return (hslToRgb(parse360(match[6]), parsePercentage(match[7]), parsePercentage(match[8])) | parse1(match[9])) >>> 0;
			return (hslToRgb(parse360(match[2]), parsePercentage(match[3]), parsePercentage(match[4])) | parse1(match[5])) >>> 0;
		}
		if (match = matchers.hwb.exec(color)) return (hwbToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
		return null;
	}
	function hue2rgb(p, q, t) {
		if (t < 0) t += 1;
		if (t > 1) t -= 1;
		if (t < 1 / 6) return p + (q - p) * 6 * t;
		if (t < 1 / 2) return q;
		if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
		return p;
	}
	function hslToRgb(h, s, l) {
		const q = l < .5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		const r = hue2rgb(p, q, h + 1 / 3);
		const g = hue2rgb(p, q, h);
		const b = hue2rgb(p, q, h - 1 / 3);
		return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
	}
	function hwbToRgb(h, w, b) {
		if (w + b >= 1) {
			const gray = Math.round(w * 255 / (w + b));
			return gray << 24 | gray << 16 | gray << 8;
		}
		const red = hue2rgb(0, 1, h + 1 / 3) * (1 - w - b) + w;
		const green = hue2rgb(0, 1, h) * (1 - w - b) + w;
		const blue = hue2rgb(0, 1, h - 1 / 3) * (1 - w - b) + w;
		return Math.round(red * 255) << 24 | Math.round(green * 255) << 16 | Math.round(blue * 255) << 8;
	}
	var NUMBER = "[-+]?\\d*\\.?\\d+";
	var PERCENTAGE = NUMBER + "%";
	function call(...args) {
		return "\\(\\s*(" + args.join(")\\s*,?\\s*(") + ")\\s*\\)";
	}
	function callWithSlashSeparator(...args) {
		return "\\(\\s*(" + args.slice(0, args.length - 1).join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + args[args.length - 1] + ")\\s*\\)";
	}
	function commaSeparatedCall(...args) {
		return "\\(\\s*(" + args.join(")\\s*,\\s*(") + ")\\s*\\)";
	}
	var cachedMatchers;
	function getMatchers() {
		if (cachedMatchers === void 0) cachedMatchers = {
			rgb: new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER)),
			rgba: new RegExp("rgba(" + commaSeparatedCall(NUMBER, NUMBER, NUMBER, NUMBER) + "|" + callWithSlashSeparator(NUMBER, NUMBER, NUMBER, NUMBER) + ")"),
			hsl: new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE)),
			hsla: new RegExp("hsla(" + commaSeparatedCall(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER) + "|" + callWithSlashSeparator(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER) + ")"),
			hwb: new RegExp("hwb" + call(NUMBER, PERCENTAGE, PERCENTAGE)),
			hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
			hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
			hex6: /^#([0-9a-fA-F]{6})$/,
			hex8: /^#([0-9a-fA-F]{8})$/
		};
		return cachedMatchers;
	}
	function parse255(str) {
		const int = parseInt(str, 10);
		if (int < 0) return 0;
		if (int > 255) return 255;
		return int;
	}
	function parse360(str) {
		return (parseFloat(str) % 360 + 360) % 360 / 360;
	}
	function parse1(str) {
		const num = parseFloat(str);
		if (num < 0) return 0;
		if (num > 1) return 255;
		return Math.round(num * 255);
	}
	function parsePercentage(str) {
		const int = parseFloat(str);
		if (int < 0) return 0;
		if (int > 100) return 1;
		return int / 100;
	}
	function normalizeKeyword(name) {
		switch (name) {
			case "transparent": return 0;
			case "aliceblue": return 4042850303;
			case "antiquewhite": return 4209760255;
			case "aqua": return 16777215;
			case "aquamarine": return 2147472639;
			case "azure": return 4043309055;
			case "beige": return 4126530815;
			case "bisque": return 4293182719;
			case "black": return 255;
			case "blanchedalmond": return 4293643775;
			case "blue": return 65535;
			case "blueviolet": return 2318131967;
			case "brown": return 2771004159;
			case "burlywood": return 3736635391;
			case "burntsienna": return 3934150143;
			case "cadetblue": return 1604231423;
			case "chartreuse": return 2147418367;
			case "chocolate": return 3530104575;
			case "coral": return 4286533887;
			case "cornflowerblue": return 1687547391;
			case "cornsilk": return 4294499583;
			case "crimson": return 3692313855;
			case "cyan": return 16777215;
			case "darkblue": return 35839;
			case "darkcyan": return 9145343;
			case "darkgoldenrod": return 3095792639;
			case "darkgray": return 2846468607;
			case "darkgreen": return 6553855;
			case "darkgrey": return 2846468607;
			case "darkkhaki": return 3182914559;
			case "darkmagenta": return 2332068863;
			case "darkolivegreen": return 1433087999;
			case "darkorange": return 4287365375;
			case "darkorchid": return 2570243327;
			case "darkred": return 2332033279;
			case "darksalmon": return 3918953215;
			case "darkseagreen": return 2411499519;
			case "darkslateblue": return 1211993087;
			case "darkslategray": return 793726975;
			case "darkslategrey": return 793726975;
			case "darkturquoise": return 13554175;
			case "darkviolet": return 2483082239;
			case "deeppink": return 4279538687;
			case "deepskyblue": return 12582911;
			case "dimgray": return 1768516095;
			case "dimgrey": return 1768516095;
			case "dodgerblue": return 512819199;
			case "firebrick": return 2988581631;
			case "floralwhite": return 4294635775;
			case "forestgreen": return 579543807;
			case "fuchsia": return 4278255615;
			case "gainsboro": return 3705462015;
			case "ghostwhite": return 4177068031;
			case "gold": return 4292280575;
			case "goldenrod": return 3668254975;
			case "gray": return 2155905279;
			case "green": return 8388863;
			case "greenyellow": return 2919182335;
			case "grey": return 2155905279;
			case "honeydew": return 4043305215;
			case "hotpink": return 4285117695;
			case "indianred": return 3445382399;
			case "indigo": return 1258324735;
			case "ivory": return 4294963455;
			case "khaki": return 4041641215;
			case "lavender": return 3873897215;
			case "lavenderblush": return 4293981695;
			case "lawngreen": return 2096890111;
			case "lemonchiffon": return 4294626815;
			case "lightblue": return 2916673279;
			case "lightcoral": return 4034953471;
			case "lightcyan": return 3774873599;
			case "lightgoldenrodyellow": return 4210742015;
			case "lightgray": return 3553874943;
			case "lightgreen": return 2431553791;
			case "lightgrey": return 3553874943;
			case "lightpink": return 4290167295;
			case "lightsalmon": return 4288707327;
			case "lightseagreen": return 548580095;
			case "lightskyblue": return 2278488831;
			case "lightslategray": return 2005441023;
			case "lightslategrey": return 2005441023;
			case "lightsteelblue": return 2965692159;
			case "lightyellow": return 4294959359;
			case "lime": return 16711935;
			case "limegreen": return 852308735;
			case "linen": return 4210091775;
			case "magenta": return 4278255615;
			case "maroon": return 2147483903;
			case "mediumaquamarine": return 1724754687;
			case "mediumblue": return 52735;
			case "mediumorchid": return 3126187007;
			case "mediumpurple": return 2473647103;
			case "mediumseagreen": return 1018393087;
			case "mediumslateblue": return 2070474495;
			case "mediumspringgreen": return 16423679;
			case "mediumturquoise": return 1221709055;
			case "mediumvioletred": return 3340076543;
			case "midnightblue": return 421097727;
			case "mintcream": return 4127193855;
			case "mistyrose": return 4293190143;
			case "moccasin": return 4293178879;
			case "navajowhite": return 4292783615;
			case "navy": return 33023;
			case "oldlace": return 4260751103;
			case "olive": return 2155872511;
			case "olivedrab": return 1804477439;
			case "orange": return 4289003775;
			case "orangered": return 4282712319;
			case "orchid": return 3664828159;
			case "palegoldenrod": return 4008225535;
			case "palegreen": return 2566625535;
			case "paleturquoise": return 2951671551;
			case "palevioletred": return 3681588223;
			case "papayawhip": return 4293907967;
			case "peachpuff": return 4292524543;
			case "peru": return 3448061951;
			case "pink": return 4290825215;
			case "plum": return 3718307327;
			case "powderblue": return 2967529215;
			case "purple": return 2147516671;
			case "rebeccapurple": return 1714657791;
			case "red": return 4278190335;
			case "rosybrown": return 3163525119;
			case "royalblue": return 1097458175;
			case "saddlebrown": return 2336560127;
			case "salmon": return 4202722047;
			case "sandybrown": return 4104413439;
			case "seagreen": return 780883967;
			case "seashell": return 4294307583;
			case "sienna": return 2689740287;
			case "silver": return 3233857791;
			case "skyblue": return 2278484991;
			case "slateblue": return 1784335871;
			case "slategray": return 1887473919;
			case "slategrey": return 1887473919;
			case "snow": return 4294638335;
			case "springgreen": return 16744447;
			case "steelblue": return 1182971135;
			case "tan": return 3535047935;
			case "teal": return 8421631;
			case "thistle": return 3636451583;
			case "tomato": return 4284696575;
			case "turquoise": return 1088475391;
			case "violet": return 4001558271;
			case "wheat": return 4125012991;
			case "white": return 4294967295;
			case "whitesmoke": return 4126537215;
			case "yellow": return 4294902015;
			case "yellowgreen": return 2597139199;
		}
		return null;
	}
	module.exports = normalizeColor;
})))(), 1);
var normalizeCSSColor = import_normalize_color.default || import_normalize_color;
function rgba(colorInt) {
	return {
		r: Math.round((colorInt & 4278190080) >>> 24),
		g: Math.round((colorInt & 16711680) >>> 16),
		b: Math.round((colorInt & 65280) >>> 8),
		a: ((colorInt & 255) >>> 0) / 255
	};
}
//#endregion
//#region ../web/dist/esm/helpers/normalizeColor.native.js
var normalizeColor = function(color, opacity) {
	if (color) {
		if (typeof color != "string" || color[0] === "$") return color;
		var rgbaVal = getRgba(color);
		if (rgbaVal) {
			var colors = `${rgbaVal.r},${rgbaVal.g},${rgbaVal.b}`, _ref;
			return opacity === 1 ? `rgb(${colors})` : `rgba(${colors},${(_ref = opacity !== null && opacity !== void 0 ? opacity : rgbaVal.a) !== null && _ref !== void 0 ? _ref : 1})`;
		}
		return color;
	}
}, getRgba = function(color) {
	if (typeof color == "string") {
		var colorNum = normalizeCSSColor(color);
		if (colorNum != null) return rgba(colorNum);
	}
};
//#endregion
//#region ../web/dist/esm/helpers/normalizeShadow.native.js
function normalizeShadow(param) {
	var { shadowColor, shadowOffset, shadowOpacity, shadowRadius } = param, _getRgba, { height, width } = shadowOffset || defaultOffset;
	return {
		shadowOffset: {
			width: width || 0,
			height: height || 0
		},
		shadowRadius: shadowRadius || 0,
		shadowColor: normalizeColor(shadowColor, 1),
		shadowOpacity: shadowOpacity !== null && shadowOpacity !== void 0 ? shadowOpacity : shadowColor ? (_getRgba = getRgba(shadowColor)) === null || _getRgba === void 0 ? void 0 : _getRgba.a : 1
	};
}
//#endregion
//#region ../web/dist/esm/helpers/expandStyles.native.js
function fixStyles(style) {
	"elevationAndroid" in style && (style.elevation = style.elevationAndroid, delete style.elevationAndroid), (style.shadowRadius != null || style.shadowColor || style.shadowOpacity != null || style.shadowOffset) && Object.assign(style, normalizeShadow(style));
	for (var key in borderDefaults) if (key in style) {
		var _style, _borderDefaults_key;
		(_style = style)[_borderDefaults_key = borderDefaults[key]] || (_style[_borderDefaults_key] = "solid");
	}
}
var nativeStyle = "borderStyle", borderDefaults = {
	borderWidth: "borderStyle",
	borderBottomWidth: nativeStyle || "borderBottomStyle",
	borderTopWidth: nativeStyle || "borderTopStyle",
	borderLeftWidth: nativeStyle || "borderLeftStyle",
	borderRightWidth: nativeStyle || "borderRightStyle"
};
//#endregion
//#region ../web/dist/esm/helpers/getCSSStylesAtomic.native.js
var empty$1 = function() {
	console.warn("no-op native");
}, getCSSStylesAtomic = empty$1, getStyleAtomic = empty$1, styleToCSS = empty$1;
//#endregion
//#region ../web/dist/esm/helpers/isActivePlatform.native.js
function isActivePlatform(key) {
	if (!key.startsWith("$platform")) return !0;
	var platform = key.slice(10);
	return platform === currentPlatform || platform === "native";
}
//#endregion
//#region ../web/dist/esm/helpers/isActiveTheme.native.js
function isActiveTheme(key, activeThemeName) {
	if (key.startsWith("$theme-")) return key.slice(7).startsWith(activeThemeName);
}
_objectSpread2(_objectSpread2({}, stylePropsAll), {}, {
	translateX: !0,
	translateY: !0
});
function normalizeValueWithProperty(value) {
	arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
	return value;
}
//#endregion
//#region ../web/dist/esm/helpers/parseBorderShorthand.native.js
var borderStyles = /* @__PURE__ */ new Set([
	"solid",
	"dashed",
	"dotted",
	"double",
	"groove",
	"ridge",
	"inset",
	"outset",
	"none",
	"hidden"
]);
function parseBorderShorthand(value) {
	if (value === "none" || value === "0") return [
		["borderTopWidth", 0],
		["borderRightWidth", 0],
		["borderBottomWidth", 0],
		["borderLeftWidth", 0],
		["borderStyle", "solid"]
	];
	var parts = value.trim().split(/\s+/), borderWidth, borderStyle, borderColor, _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
	try {
		for (var _iterator = parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
			var part = _step.value;
			if (borderStyles.has(part)) borderStyle = part;
			else if (/^[\d.]+(?:px|em|rem|%|pt|vw|vh)?$/.test(part)) {
				var num = parseFloat(part);
				borderWidth = part.endsWith("px") || !part.match(/[a-z%]/i) ? num : part;
			} else borderColor = part;
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
	var result = [];
	return borderWidth !== void 0 && (result.push(["borderTopWidth", borderWidth]), result.push(["borderRightWidth", borderWidth]), result.push(["borderBottomWidth", borderWidth]), result.push(["borderLeftWidth", borderWidth])), borderStyle !== void 0 && result.push(["borderStyle", borderStyle]), borderColor !== void 0 && (result.push(["borderTopColor", borderColor]), result.push(["borderRightColor", borderColor]), result.push(["borderBottomColor", borderColor]), result.push(["borderLeftColor", borderColor])), result.length > 0 ? result : void 0;
}
//#endregion
//#region ../web/dist/esm/helpers/parseOutlineShorthand.native.js
var outlineStyles = /* @__PURE__ */ new Set([
	"solid",
	"dashed",
	"dotted",
	"double",
	"groove",
	"ridge",
	"inset",
	"outset",
	"none",
	"hidden"
]);
function parseOutlineShorthand(value) {
	if (value === "none" || value === "0") return [["outlineWidth", 0], ["outlineStyle", "none"]];
	var parts = value.trim().split(/\s+/), outlineWidth, outlineStyle, outlineColor, _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
	try {
		for (var _iterator = parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
			var part = _step.value;
			if (outlineStyles.has(part)) outlineStyle = part;
			else if (/^[\d.]+(?:px|em|rem|%|pt|vw|vh)?$/.test(part)) {
				var num = parseFloat(part);
				outlineWidth = part.endsWith("px") || !part.match(/[a-z%]/i) ? num : part;
			} else outlineColor = part;
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
	var result = [];
	return outlineWidth !== void 0 && result.push(["outlineWidth", outlineWidth]), outlineStyle !== void 0 && result.push(["outlineStyle", outlineStyle]), outlineColor !== void 0 && result.push(["outlineColor", outlineColor]), result.length > 0 ? result : void 0;
}
//#endregion
//#region ../web/dist/esm/helpers/expandStyle.native.js
var _loop = function(parent) {
	var _exec, _exec_index, prefix = parent.slice(0, (_exec_index = (_exec = /[A-Z]/.exec(parent)) === null || _exec === void 0 ? void 0 : _exec.index) !== null && _exec_index !== void 0 ? _exec_index : parent.length);
	EXPANSIONS[parent] = EXPANSIONS[parent].map(function(k) {
		return `${prefix}${k}`;
	});
};
function expandStyle(key, value) {
	if (isAndroid && key === "elevationAndroid") return [["elevation", value]];
	switch (key) {
		case "objectFit": return [["resizeMode", resizeModeMap[value] || "cover"]];
		case "verticalAlign": return [["textAlignVertical", verticalAlignMap[value] || "auto"]];
		case "position": return value === "fixed" || value === "sticky" ? [["position", "absolute"]] : void 0;
		case "backgroundImage": return [["experimental_backgroundImage", value]];
		case "border":
			if (typeof value == "string") {
				var parsed = parseBorderShorthand(value);
				if (parsed) return parsed;
			}
			return;
		case "outline":
			if (typeof value == "string") {
				var parsed1 = parseOutlineShorthand(value);
				if (parsed1) return parsed1;
			}
			return;
	}
	if (key in nativeExpansions) return nativeExpansions[key].map(function(k) {
		return [k, value];
	});
	if (key in EXPANSIONS) return EXPANSIONS[key].map(function(k) {
		return [k, value];
	});
}
var resizeModeMap = {
	fill: "stretch",
	none: "center",
	"scale-down": "contain",
	contain: "contain",
	cover: "cover"
}, verticalAlignMap = {
	top: "top",
	middle: "center",
	bottom: "bottom",
	auto: "auto"
}, all = [
	"Top",
	"Right",
	"Bottom",
	"Left"
], horiz = ["Right", "Left"], vert = ["Top", "Bottom"], EXPANSIONS = _objectSpread2({
	borderColor: [
		"TopColor",
		"RightColor",
		"BottomColor",
		"LeftColor"
	],
	borderRadius: [
		"TopLeftRadius",
		"TopRightRadius",
		"BottomRightRadius",
		"BottomLeftRadius"
	],
	borderWidth: [
		"TopWidth",
		"RightWidth",
		"BottomWidth",
		"LeftWidth"
	],
	margin: all,
	marginHorizontal: horiz,
	marginVertical: vert,
	padding: all,
	paddingHorizontal: horiz,
	paddingVertical: vert
}, false);
for (var parent in EXPANSIONS) _loop(parent);
var nativeExpansions = {
	borderBlockColor: ["borderTopColor", "borderBottomColor"],
	borderInlineColor: ["borderEndColor", "borderStartColor"],
	borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
	borderInlineWidth: ["borderEndWidth", "borderStartWidth"],
	borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
	borderInlineStyle: ["borderEndStyle", "borderStartStyle"],
	borderBlockStartColor: ["borderTopColor"],
	borderBlockEndColor: ["borderBottomColor"],
	borderInlineStartColor: ["borderStartColor"],
	borderInlineEndColor: ["borderEndColor"],
	borderBlockStartWidth: ["borderTopWidth"],
	borderBlockEndWidth: ["borderBottomWidth"],
	borderInlineStartWidth: ["borderStartWidth"],
	borderInlineEndWidth: ["borderEndWidth"],
	borderBlockStartStyle: ["borderTopStyle"],
	borderBlockEndStyle: ["borderBottomStyle"],
	borderInlineStartStyle: ["borderStartStyle"],
	borderInlineEndStyle: ["borderEndStyle"],
	marginBlock: ["marginTop", "marginBottom"],
	marginInline: ["marginEnd", "marginStart"],
	paddingBlock: ["paddingTop", "paddingBottom"],
	paddingInline: ["paddingEnd", "paddingStart"],
	marginBlockStart: ["marginTop"],
	marginBlockEnd: ["marginBottom"],
	marginInlineStart: ["marginStart"],
	marginInlineEnd: ["marginEnd"],
	paddingBlockStart: ["paddingTop"],
	paddingBlockEnd: ["paddingBottom"],
	paddingInlineStart: ["paddingStart"],
	paddingInlineEnd: ["paddingEnd"],
	minBlockSize: ["minHeight"],
	maxBlockSize: ["maxHeight"],
	minInlineSize: ["minWidth"],
	maxInlineSize: ["maxWidth"],
	blockSize: ["height"],
	inlineSize: ["width"],
	inset: [
		"top",
		"right",
		"bottom",
		"left"
	],
	insetBlock: ["top", "bottom"],
	insetBlockStart: ["top"],
	insetBlockEnd: ["bottom"],
	insetInlineStart: ["left"],
	insetInlineEnd: ["right"]
};
//#endregion
//#region ../web/dist/esm/helpers/getVariantExtras.native.js
var cache$1 = /* @__PURE__ */ new WeakMap(), getVariantExtras = function(styleState) {
	if (cache$1.has(styleState)) return cache$1.get(styleState);
	var { props, conf, context, theme, styleProps } = styleState, styledContext = styleProps.styledContext, fonts = conf.fontsParsed;
	!(context === null || context === void 0) && context.language && (fonts = getFontsForLanguage(conf.fontsParsed, context.language));
	var next = {
		fonts,
		tokens: conf.tokensParsed,
		theme,
		context: styledContext,
		get fontFamily() {
			return getVariableValue(styleState.fontFamily || styleState.props.fontFamily) || props.fontFamily || getVariableValue(getSetting("defaultFont"));
		},
		get font() {
			return fonts[this.fontFamily] || (!props.fontFamily || props.fontFamily[0] === "$" ? fonts[getSetting("defaultFont") || ""] : void 0);
		},
		props
	};
	return cache$1.set(styleState, next), next;
}, fontLanguageCache = /* @__PURE__ */ new WeakMap();
function getFontsForLanguage(fonts, language) {
	if (fontLanguageCache.has(language)) return fontLanguageCache.get(language);
	var next = _objectSpread2(_objectSpread2({}, fonts), Object.fromEntries(Object.entries(language).flatMap(function(param) {
		var [name, lang] = param;
		if (lang === "default") return [];
		var langKey = `$${name}_${lang}`;
		return [[`$${name}`, fonts[langKey]]];
	})));
	return fontLanguageCache.set(language, next), next;
}
//#endregion
//#region ../web/dist/esm/helpers/getTokenForKey.native.js
var fontShorthand = {
	fontSize: "size",
	fontWeight: "weight"
}, colorKeys = tokenCategories.color, _lastFontFamilyToken = null;
function getLastFontFamilyToken() {
	return _lastFontFamilyToken;
}
function setLastFontFamilyToken(value) {
	_lastFontFamilyToken = value;
}
var getTokenForKey = function(key, value, styleProps, styleState) {
	var _staticConfig_accept, resolveAs = styleProps.resolveValues || "none";
	if (resolveAs === "none") return value;
	var opacityModifier;
	if (key in colorKeys) {
		var slashIdx = value.indexOf("/");
		if (slashIdx > 0) {
			var raw = value.slice(slashIdx + 1);
			if (raw.length > 0) {
				var num = Number(raw);
				Number.isNaN(num) || (opacityModifier = Math.max(0, Math.min(1, num / 100)), value = value.slice(0, slashIdx));
			}
		}
	}
	var { theme, conf = getConfig(), context, fontFamily, staticConfig } = styleState, themeValue = theme ? theme[value] || theme[value.slice(1)] : void 0, tokensParsed = conf.tokensParsed, valOrVar, hasSet = !1, customTokenAccept = staticConfig == null || (_staticConfig_accept = staticConfig.accept) === null || _staticConfig_accept === void 0 ? void 0 : _staticConfig_accept[key];
	if (customTokenAccept) {
		var _tokensParsed_customTokenAccept, val = themeValue !== null && themeValue !== void 0 ? themeValue : (_tokensParsed_customTokenAccept = tokensParsed[customTokenAccept]) === null || _tokensParsed_customTokenAccept === void 0 ? void 0 : _tokensParsed_customTokenAccept[value];
		val != null && (resolveAs = "value", valOrVar = val, hasSet = !0);
	}
	if (themeValue) {
		if (resolveAs === "except-theme") return value;
		valOrVar = themeValue, hasSet = !0;
	} else {
		if (value in conf.specificTokens) hasSet = !0, valOrVar = conf.specificTokens[value];
		else {
			switch (key) {
				case "fontFamily":
					var _fontsParsed_value;
					valOrVar = ((_fontsParsed_value = ((context === null || context === void 0 ? void 0 : context.language) ? getFontsForLanguage(conf.fontsParsed, context.language) : conf.fontsParsed)[value]) === null || _fontsParsed_value === void 0 ? void 0 : _fontsParsed_value.family) || value, setLastFontFamilyToken(value), hasSet = !0;
					break;
				case "fontSize":
				case "lineHeight":
				case "letterSpacing":
				case "fontWeight":
					var fam = fontFamily || conf.defaultFontToken;
					if (fam) {
						var _font_, fontsParsed1 = (context === null || context === void 0 ? void 0 : context.language) ? getFontsForLanguage(conf.fontsParsed, context.language) : conf.fontsParsed, font = fontsParsed1[fam] || fontsParsed1[conf.defaultFontToken];
						valOrVar = (font == null || (_font_ = font[fontShorthand[key] || key]) === null || _font_ === void 0 ? void 0 : _font_[value]) || value, hasSet = !0;
					}
					break;
			}
			for (var cat in tokenCategories) if (key in tokenCategories[cat]) {
				var _tokensParsed_cat, res = (_tokensParsed_cat = tokensParsed[cat]) === null || _tokensParsed_cat === void 0 ? void 0 : _tokensParsed_cat[value];
				res != null && (valOrVar = res, hasSet = !0);
			}
		}
		if (!hasSet) {
			var spaceVar = tokensParsed.space[value];
			spaceVar != null && (valOrVar = spaceVar, hasSet = !0);
		}
	}
	if (hasSet) {
		var out = resolveVariableValue(key, valOrVar, resolveAs);
		if (opacityModifier !== void 0 && opacityModifier < 1) {
			var _normalizeColor;
			out = (_normalizeColor = normalizeColor(String(out), opacityModifier)) !== null && _normalizeColor !== void 0 ? _normalizeColor : out;
		}
		return out;
	}
};
function resolveVariableValue(key, valOrVar, resolveValues) {
	if (resolveValues === "none") return valOrVar;
	if (isVariable(valOrVar)) {
		if (resolveValues === "value") return valOrVar.val;
		var get = valOrVar === null || valOrVar === void 0 ? void 0 : valOrVar.get;
		if (key !== "shadowColor" && typeof get == "function") return get(resolveValues === "web" ? "web" : void 0);
		return valOrVar.val;
	}
	return valOrVar;
}
//#endregion
//#region ../web/dist/esm/helpers/isObj.native.js
function _type_of$5(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var isObj = function(x) {
	return x && !Array.isArray(x) && (typeof x > "u" ? "undefined" : _type_of$5(x)) === "object";
};
//#endregion
//#region ../web/dist/esm/helpers/normalizeStyle.native.js
function normalizeStyle(style) {
	var disableNormalize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, res = {};
	for (var key in style) {
		var prop = style[key];
		if (prop != null) {
			if (key in pseudoDescriptors || key[0] === "$" && isObj(prop)) {
				res[key] = normalizeStyle(prop, disableNormalize);
				continue;
			}
			var value = disableNormalize ? prop : normalizeValueWithProperty(prop, key), out = expandStyle(key, value);
			out ? Object.assign(res, Object.fromEntries(out)) : res[key] = value;
		}
	}
	return fixStyles(res), res;
}
//#endregion
//#region ../web/dist/esm/helpers/parseNativeStyle.native.js
function parseNativeStyle(key, cssString, tokenMap) {
	switch (key) {
		case "backgroundImage": return parseBackgroundImage(cssString, tokenMap);
		case "boxShadow": return parseBoxShadow(cssString, tokenMap);
		case "textShadow": return parseTextShadow(cssString, tokenMap);
		default: return;
	}
}
function resolveColor(raw, tokenMap) {
	return tokenMap && tokenMap.has(raw) ? tokenMap.get(raw) : raw;
}
function parseBackgroundImage(css, tokenMap) {
	var match = css.match(RegExp("^linear-gradient\\((.+)\\)$", "s"));
	if (match) {
		var inner = match[1], parts = splitOutsideParens(inner);
		if (!(parts.length < 2)) {
			var direction, startIdx = 0, firstPart = parts[0].trim();
			(firstPart.startsWith("to ") || /^\d+(\.\d+)?(deg|rad|turn|grad)$/.test(firstPart)) && (direction = firstPart, startIdx = 1);
			for (var colorStops = [], i = startIdx; i < parts.length; i++) {
				var stopParts = parts[i].trim().match(/\S+\([^)]*\)|\S+/g);
				if (stopParts) {
					var colorRaw = stopParts[0], color = resolveColor(colorRaw, tokenMap), positions = stopParts.slice(1), stop = { color };
					positions.length > 0 && (stop.positions = positions), colorStops.push(stop);
				}
			}
			var gradient = {
				type: "linear-gradient",
				colorStops
			};
			return direction && (gradient.direction = direction), [gradient];
		}
	}
}
function parseBoxShadow(css, tokenMap) {
	var shadowStrings = splitOutsideParens(css), shadows = [], _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
	try {
		for (var _iterator = shadowStrings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
			var s = _step.value.trim();
			if (s) {
				var tokens = s.split(/\s+/);
				if (tokens.length < 2) return;
				var startIdx = 0, inset = !1;
				tokens[0] === "inset" && (inset = !0, startIdx = 1);
				for (var numericParts = [], colorParts = [], i = startIdx; i < tokens.length; i++) {
					var n = parseDimension(tokens[i]);
					if (n !== void 0) numericParts.push(n);
					else {
						colorParts = tokens.slice(i);
						break;
					}
				}
				if (numericParts.length < 2) return;
				var shadow = {
					offsetX: numericParts[0],
					offsetY: numericParts[1]
				};
				if (inset && (shadow.inset = !0), numericParts.length >= 3 && (shadow.blurRadius = numericParts[2]), numericParts.length >= 4 && (shadow.spreadDistance = numericParts[3]), colorParts.length > 0) shadow.color = resolveColor(colorParts.join(" "), tokenMap);
				shadows.push(shadow);
			}
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
	return shadows.length > 0 ? shadows : void 0;
}
function parseTextShadow(css, tokenMap) {
	var tokens = css.trim().split(/\s+/);
	if (!(tokens.length < 3)) {
		var offsetX = parseDimension(tokens[0]), offsetY = parseDimension(tokens[1]), blur = parseDimension(tokens[2]);
		if (!(offsetX === void 0 || offsetY === void 0 || blur === void 0)) {
			var result = [["textShadowOffset", {
				width: offsetX,
				height: offsetY
			}], ["textShadowRadius", blur]];
			if (tokens.length >= 4) {
				var colorStr = tokens.slice(3).join(" ");
				result.push(["textShadowColor", resolveColor(colorStr, tokenMap)]);
			}
			return result;
		}
	}
}
function parseDimension(s) {
	var cleaned = s.replace(/px$|dp$/, ""), n = Number(cleaned);
	return Number.isFinite(n) ? n : void 0;
}
function splitOutsideParens(s) {
	for (var parts = [], depth = 0, start = 0, i = 0; i < s.length; i++) {
		var ch = s.charCodeAt(i);
		ch === 40 ? depth++ : ch === 41 ? depth-- : ch === 44 && depth === 0 && (parts.push(s.slice(start, i)), start = i + 1);
	}
	return parts.push(s.slice(start)), parts;
}
//#endregion
//#region ../web/dist/esm/helpers/platformResolveValue.native.js
var tokenPattern = /(\$[\w.-]+)/g, nativeParseKeys = {
	backgroundImage: !0,
	boxShadow: !0,
	textShadow: !0
};
function replaceTokens(value, styleProps, styleState) {
	return value.replace(tokenPattern, function(t) {
		var r = getTokenForKey("size", t, styleProps, styleState);
		return r == null && (r = getTokenForKey("color", t, styleProps, styleState)), r != null ? String(r) : t;
	});
}
function platformResolveValue(key, value, styleProps, styleState) {
	if (!nativeParseKeys[key]) return replaceTokens(value, styleProps, styleState);
	var effectiveStyleProps = key === "backgroundImage" ? _objectSpread2(_objectSpread2({}, styleProps), {}, { resolveValues: "web" }) : styleProps, tokenMap = /* @__PURE__ */ new Map(), placeholderIdx = 0;
	return parseNativeStyle(key, value.replace(tokenPattern, function(t) {
		var r = getTokenForKey("size", t, effectiveStyleProps, styleState);
		if (r == null && (r = getTokenForKey("color", t, effectiveStyleProps, styleState)), r == null) return t;
		if (typeof r != "string" && typeof r != "number") {
			var placeholder = `__tk${placeholderIdx++}__`;
			return tokenMap.set(placeholder, r), placeholder;
		}
		return String(r);
	}), tokenMap) || replaceTokens(value, styleProps, styleState);
}
//#endregion
//#region ../web/dist/esm/helpers/resolveCompoundTokens.native.js
var compoundKeys = {
	boxShadow: !0,
	textShadow: !0,
	filter: !0,
	backgroundImage: !0,
	border: !0,
	outline: !0
};
function resolveCompoundTokens(key, value, styleProps, styleState) {
	return !value.includes("$") || !compoundKeys[key] ? value : platformResolveValue(key, value, styleProps, styleState);
}
//#endregion
//#region ../web/dist/esm/helpers/resolveRem.native.js
var remRegex = /(-?[\d.]+)rem/g;
function resolveRem(value) {
	var _config_settings, config = getConfig(), _config_settings_remBaseFontSize, baseFontSize = (_config_settings_remBaseFontSize = config == null || (_config_settings = config.settings) === null || _config_settings === void 0 ? void 0 : _config_settings.remBaseFontSize) !== null && _config_settings_remBaseFontSize !== void 0 ? _config_settings_remBaseFontSize : 16;
	if (value.endsWith("rem") && !value.includes(" ")) {
		var numericValue = Number.parseFloat(value);
		if (!Number.isNaN(numericValue)) return react_native.PixelRatio.getFontScale() * baseFontSize * numericValue;
	}
	for (var result = 0, match; (match = remRegex.exec(value)) !== null;) {
		var numericValue1 = Number.parseFloat(match[1]);
		Number.isNaN(numericValue1) || (result += react_native.PixelRatio.getFontScale() * baseFontSize * numericValue1);
	}
	return remRegex.lastIndex = 0, result;
}
function isRemValue(value) {
	return typeof value == "string" && value.includes("rem");
}
//#endregion
//#region ../web/dist/esm/helpers/webPropsToSkip.native.js
var { pointerEvents: _ } = webOnlyStylePropsView, webPropsToSkip = _objectSpread2(_objectSpread2(_objectSpread2({}, _objectWithoutProperties(webOnlyStylePropsView, ["pointerEvents"])), webOnlyStylePropsText), {}, {
	onClick: 1,
	onDoubleClick: 1,
	onContextMenu: 1,
	onMouseEnter: 1,
	onMouseLeave: 1,
	onMouseMove: 1,
	onMouseOver: 1,
	onMouseOut: 1,
	onMouseDown: 1,
	onMouseUp: 1,
	onWheel: 1,
	onKeyDown: 1,
	onKeyUp: 1,
	onKeyPress: 1,
	onPointerDown: 1,
	onPointerMove: 1,
	onPointerUp: 1,
	onPointerCancel: 1,
	onPointerEnter: 1,
	onPointerLeave: 1,
	onDrag: 1,
	onDragStart: 1,
	onDragEnd: 1,
	onDragEnter: 1,
	onDragLeave: 1,
	onDragOver: 1,
	onDrop: 1,
	onChange: 1,
	onInput: 1,
	onBeforeInput: 1,
	onScroll: 1,
	onCopy: 1,
	onCut: 1,
	onPaste: 1,
	htmlFor: 1,
	dangerouslySetInnerHTML: 1
});
//#endregion
//#region ../web/dist/esm/helpers/skipProps.native.js
var skipProps = {
	untilMeasured: 1,
	transition: 1,
	space: 1,
	animateOnly: 1,
	animatedBy: 1,
	disableClassName: 1,
	debug: 1,
	componentName: 1,
	disableOptimization: 1,
	render: 1,
	style: 1,
	group: 1,
	animatePresence: 1
};
skipProps["data-test-renders"] = 1;
Object.assign(skipProps, webPropsToSkip);
//#endregion
//#region ../web/dist/esm/helpers/propMapper.native.js
function _type_of$4(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var propMapper = function(key, value, styleState, disabled, map) {
	if (disabled) return map(key, value);
	if (setLastFontFamilyToken(null), !(!isAndroid && key === "elevationAndroid")) {
		var { conf, styleProps, staticConfig } = styleState, { variants } = staticConfig;
		if (!styleProps.noExpand && variants && key in variants) {
			var variantValue = resolveVariants(key, value, styleProps, styleState, "");
			if (variantValue) {
				variantValue.forEach(function(param) {
					var [_$key, _$value] = param;
					return map(_$key, _$value);
				});
				return;
			}
		}
		styleProps.disableExpandShorthands || key in conf.shorthands && (key = conf.shorthands[key]);
		var originalValue = value;
		if (value != null) if (typeof value == "string") if (value[0] === "$") value = getTokenForKey(key, value, styleProps, styleState);
		else {
			var resolved = resolveCompoundTokens(key, value, styleProps, styleState);
			value = resolved !== value ? resolved : isRemValue(value) ? resolveRem(value) : value;
		}
		else isVariable(value) ? value = resolveVariableValue(key, value, styleProps.resolveValues) : isRemValue(value) && (value = resolveRem(value));
		if (value != null && typeof value == "string" && (key === "backgroundImage" || key === "boxShadow" || key === "textShadow")) {
			var parsed = parseNativeStyle(key, value);
			if (parsed) {
				if (key === "textShadow" && Array.isArray(parsed) && Array.isArray(parsed[0])) {
					var _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
					try {
						for (var _iterator = parsed[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
							var [nkey, nvalue] = _step.value;
							map(nkey, nvalue, originalValue);
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
					return;
				}
				value = parsed;
			}
		}
		if (value != null) {
			var fontToken = getLastFontFamilyToken();
			key === "fontFamily" && fontToken && (styleState.fontFamily = fontToken);
			var expanded = styleProps.noExpand ? null : expandStyle(key, value);
			if (expanded) for (var max = expanded.length, i = 0; i < max; i++) {
				var [nkey1, nvalue1] = expanded[i];
				map(nkey1, nvalue1, originalValue);
			}
			else map(key, value, originalValue);
		}
	}
}, resolveVariants = function(key, value, styleProps, styleState, parentVariantKey) {
	var { staticConfig, conf, debug } = styleState, { variants } = staticConfig;
	if (variants) {
		var variantValue = getVariantDefinition(variants[key], value, conf, styleState);
		if (!variantValue) {
			if (process.env.TAMAGUI_WARN_ON_MISSING_VARIANT === "1" && typeof value != "boolean") {
				var name = staticConfig.componentName || "[UnnamedComponent]";
				console.warn(`No variant found: ${name} has variant "${key}", but no matching value "${value}"`);
			}
			return;
		}
		if (typeof variantValue == "function") variantValue = variantValue(value, getVariantExtras(styleState));
		var fontFamilyResult;
		if (isObj(variantValue)) {
			var fontFamilyUpdate = variantValue.fontFamily || variantValue[conf.inverseShorthands.fontFamily];
			fontFamilyUpdate && (fontFamilyResult = getFontFamilyFromNameOrVariable(fontFamilyUpdate, conf), styleState.fontFamily = fontFamilyResult), variantValue = resolveTokensAndVariants(key, variantValue, styleProps, styleState, parentVariantKey);
		}
		if (variantValue) {
			var expanded = normalizeStyle(variantValue, !!styleProps.noNormalize);
			var next = Object.entries(expanded);
			return fontFamilyResult && fontFamilyResult[0] === "$" && setLastFontFamilyToken(getVariableValue(fontFamilyResult)), next;
		}
	}
};
function getFontFamilyFromNameOrVariable(input, conf) {
	if (isVariable(input)) {
		var val = variableToFontNameCache.get(input);
		if (val) return val;
		for (var key in conf.fontsParsed) {
			var familyVariable = conf.fontsParsed[key].family;
			if (isVariable(familyVariable) && (variableToFontNameCache.set(familyVariable, key), familyVariable === input)) return key;
		}
	} else if (typeof input == "string" && input[0] === "$") return input;
}
var variableToFontNameCache = /* @__PURE__ */ new WeakMap(), resolveTokensAndVariants = function(key, value, styleProps, styleState, parentVariantKey) {
	var { conf, staticConfig, debug, theme } = styleState, { variants } = staticConfig, res = {};
	for (var _key in value) {
		var subKey = conf.shorthands[_key] || _key, val = value[_key];
		if (!(!styleProps.noSkip && subKey in skipProps)) {
			if (staticConfig) {
				var _staticConfig_context, _staticConfig_parentStaticConfig_context, _staticConfig_parentStaticConfig, contextProps = ((_staticConfig_context = staticConfig.context) === null || _staticConfig_context === void 0 ? void 0 : _staticConfig_context.props) || ((_staticConfig_parentStaticConfig = staticConfig.parentStaticConfig) === null || _staticConfig_parentStaticConfig === void 0 || (_staticConfig_parentStaticConfig_context = _staticConfig_parentStaticConfig.context) === null || _staticConfig_parentStaticConfig_context === void 0 ? void 0 : _staticConfig_parentStaticConfig_context.props);
				if (contextProps && subKey in contextProps) {
					var _styleState, _styleState1;
					(_styleState = styleState).overriddenContextProps || (_styleState.overriddenContextProps = {}), styleState.overriddenContextProps[subKey] = val, (_styleState1 = styleState).originalContextPropValues || (_styleState1.originalContextPropValues = {}), styleState.originalContextPropValues[subKey] = val;
				}
			}
			if (styleProps.noExpand) res[subKey] = val;
			else if (variants && subKey in variants) {
				if (parentVariantKey && parentVariantKey === key) res[subKey] = val[0] === "$" ? getTokenForKey(subKey, val, styleProps, styleState) : val;
				else {
					var variantOut = resolveVariants(subKey, val, styleProps, styleState, key);
					if (variantOut) {
						var _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
						try {
							for (var _iterator = variantOut[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
								var [_$key, val1] = _step.value;
								if (val1 != null) if (_$key in pseudoDescriptors) {
									var _res, _key1, _;
									(_ = (_res = res)[_key1 = _$key]) !== null && _ !== void 0 || (_res[_key1] = {}), Object.assign(res[_$key], val1);
								} else res[_$key] = val1;
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
					}
				}
				continue;
			}
			if (isVariable(val)) {
				res[subKey] = resolveVariableValue(subKey, val, styleProps.resolveValues);
				continue;
			}
			if (typeof val == "string") {
				var fVal = val[0] === "$" ? getTokenForKey(subKey, val, styleProps, styleState) : resolveCompoundTokens(subKey, val, styleProps, styleState);
				res[subKey] = fVal === val && isRemValue(val) ? resolveRem(val) : fVal;
				continue;
			}
			if (isObj(val)) {
				var _res1, _subKey, subObject = resolveTokensAndVariants(subKey, val, styleProps, styleState, key);
				var _1;
				(_1 = (_res1 = res)[_subKey = subKey]) !== null && _1 !== void 0 || (_res1[_subKey] = {}), Object.assign(res[subKey], subObject);
			} else res[subKey] = val;
		}
	}
	return res;
}, tokenCats = [
	"size",
	"color",
	"radius",
	"space",
	"zIndex"
].map(function(name) {
	return {
		name,
		spreadName: `...${name}`
	};
});
function getVariantDefinition(variant, value, conf, param) {
	var { theme } = param;
	if (variant) {
		if (typeof variant == "function") return variant;
		var exact = variant[value];
		if (exact) return exact;
		if (value != null) {
			var { tokensParsed } = conf, _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
			try {
				for (var _iterator = tokenCats[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
					var { name, spreadName } = _step.value;
					if (spreadName in variant) {
						if (name in tokensParsed && value in tokensParsed[name]) return variant[spreadName];
						if (name === "color" && theme && typeof value == "string" && value[0] === "$") {
							if (value.slice(1) in theme) return variant[spreadName];
						}
					}
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
			var fontSizeVariant = variant["...fontSize"];
			if (fontSizeVariant && conf.fontSizeTokens.has(value)) return fontSizeVariant;
		}
		return variant[`:${typeof value > "u" ? "undefined" : _type_of$4(value)}`] || variant["..."];
	}
}
//#endregion
//#region ../web/dist/esm/helpers/sortString.native.js
var sortString = function(a, b) {
	return a < b ? -1 : a > b ? 1 : 0;
};
//#endregion
//#region ../web/dist/esm/helpers/transformsToString.native.js
function transformsToString(transforms) {
	return transforms.map(function(transform) {
		var type = Object.keys(transform)[0], value = transform[type];
		return type === "matrix" || type === "matrix3d" ? `${type}(${value.join(",")})` : `${type}(${normalizeValueWithProperty(value, type)})`;
	}).join(" ");
}
//#endregion
//#region ../web/dist/esm/helpers/getSplitStyles.native.js
function _type_of$3(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var conf, styleOriginalValues = /* @__PURE__ */ new WeakMap(), PROP_SPLIT = "-";
function normalizeGroupKey(key, groupContext) {
	var parts = key.split("-"), plen = parts.length;
	if (plen === 2 || plen === 3 && pseudoPriorities[parts[parts.length - 1]]) {
		var name = parts[1];
		if (name !== "true" && groupContext && !groupContext[name]) return key.replace("$group-", "$group-true-");
	}
	return key;
}
function isValidStyleKey(key, validStyles, accept) {
	return key in validStyles ? !0 : accept && key in accept;
}
var getSplitStyles = function(props, staticConfig, theme, themeName, componentState, styleProps, parentSplitStyles, componentContext, groupContext, elementType, startedUnhydrated, debug, animationDriver) {
	var _loop = function(keyOg2) {
		var keyInit = keyOg2, valInit = props[keyInit];
		if (keyInit === "children") return viewProps[keyInit] = valInit, "continue";
		if (keyInit === "jestAnimatedStyle") return "continue";
		if (accept) {
			var accepted = accept[keyInit];
			if ((accepted === "style" || accepted === "textStyle") && valInit && (typeof valInit > "u" ? "undefined" : _type_of$3(valInit)) === "object") return viewProps[keyInit] = getSubStyle(styleState, keyInit, valInit, styleProps.noClass), "continue";
		}
		if (disableExpandShorthands || keyInit in shorthands && (keyInit = shorthands[keyInit]), keyInit === "className") return "continue";
		if (asChild) {
			var defaults = getDefaultProps(staticConfig);
			if (defaults) {
				var _defaults_keyOg, defaultVal = (_defaults_keyOg = defaults[keyOg2]) !== null && _defaults_keyOg !== void 0 ? _defaults_keyOg : defaults[keyInit];
				if (defaultVal !== void 0 && valInit === defaultVal) return "continue";
			}
		}
		if (keyInit in skipProps && !noSkip && !isHOC) {
			var _driver_animations;
			if (!(keyInit === "transition" && typeof valInit == "string" && !(!(driver == null || (_driver_animations = driver.animations) === null || _driver_animations === void 0) && _driver_animations[valInit]))) return "continue";
		}
		var isValidStyleKeyInit = isValidStyleKey(keyInit, validStyles$1, accept);
		if (!isValidStyleKeyInit) {
			if (!isAndroid && keyInit === "elevationAndroid") return "continue";
			if (keyInit === "userSelect") keyInit = "selectable", valInit = valInit !== "none";
			else if (keyInit.startsWith("data-")) return "continue";
		}
		var isVariant = !isValidStyleKeyInit && variants && keyInit in variants, isStyleLikeKey = isValidStyleKeyInit || isVariant, isPseudo = keyInit in validPseudoKeys, isMedia = !isStyleLikeKey && !isPseudo ? getMediaKey(keyInit) : !1, isMediaOrPseudo = !!(isMedia || isPseudo);
		isMediaOrPseudo && isMedia === "group" && (keyInit = normalizeGroupKey(keyInit, groupContext));
		var isStyleProp = isValidStyleKeyInit || isMediaOrPseudo || isVariant && !noExpand;
		if (isStyleProp && (asChild === "except-style" || asChild === "except-style-web")) return "continue";
		var shouldPassProp = !isStyleProp && isHOC || isHOC && parentVariants && keyInit in parentVariants || (inlineProps === null || inlineProps === void 0 ? void 0 : inlineProps.has(keyInit)), parentVariant = parentVariants === null || parentVariants === void 0 ? void 0 : parentVariants[keyInit], isHOCShouldPassThrough = !!(isHOC && (isValidStyleKeyInit || isMediaOrPseudo || parentVariant || keyInit in skipProps));
		if ((shouldPassProp || isHOCShouldPassThrough) && (passDownProp(viewProps, keyInit, valInit, isMediaOrPseudo), !isVariant)) return "continue";
		if (!noSkip) {
			var _driver_animations1;
			if (keyInit in skipProps && !(keyInit === "transition" && typeof valInit == "string" && !(!(driver == null || (_driver_animations1 = driver.animations) === null || _driver_animations1 === void 0) && _driver_animations1[valInit]))) return "continue";
		}
		(isText || isInput) && valInit && (keyInit === "fontFamily" || keyInit === shorthands.fontFamily) && valInit in conf.fontsParsed && (styleState.fontFamily = valInit);
		var disablePropMap = isMediaOrPseudo || !isStyleLikeKey;
		if (propMapper(keyInit, valInit, styleState, disablePropMap, function(key5, val2, originalVal) {
			var _parentStaticConfig_variants, isStyledContextProp = styledContext && key5 in styledContext;
			if (!isHOC && disablePropMap && !isStyledContextProp && !isMediaOrPseudo) {
				viewProps[key5] = val2;
				return;
			}
			if (val2 != null) {
				if (key5 === "pointerEvents") {
					viewProps[key5] = val2;
					return;
				}
				if (!isHOC && isValidStyleKey(key5, validStyles$1, accept) || isAndroid && key5 === "elevation") {
					mergeStyle(styleState, key5, val2, 1, !1, originalVal);
					return;
				}
				if (isPseudo = key5 in validPseudoKeys, isMedia = isPseudo ? !1 : getMediaKey(key5), isMediaOrPseudo = !!(isMedia || isPseudo), isVariant = variants && key5 in variants, isMedia === "group" && (key5 = normalizeGroupKey(key5, groupContext)), (inlineProps === null || inlineProps === void 0 ? void 0 : inlineProps.has(key5)) || process.env.IS_STATIC === "is_static" && (inlineWhenUnflattened === null || inlineWhenUnflattened === void 0 ? void 0 : inlineWhenUnflattened.has(key5))) {
					var _props_key;
					viewProps[key5] = (_props_key = props[key5]) !== null && _props_key !== void 0 ? _props_key : val2;
				}
				if (styleProps.noExpand && isPseudo || isHOC && (isMediaOrPseudo || (parentStaticConfig == null || (_parentStaticConfig_variants = parentStaticConfig.variants) === null || _parentStaticConfig_variants === void 0 ? void 0 : _parentStaticConfig_variants[keyInit]))) {
					passDownProp(viewProps, key5, val2, isMediaOrPseudo);
					return;
				}
				if (isPseudo) {
					if (!val2) return;
					var pseudoStyleObject = getSubStyle(styleState, key5, val2, styleProps.noClass && process.env.IS_STATIC !== "is_static");
					if (!shouldDoClasses || process.env.IS_STATIC === "is_static") {
						var _pseudos, _key;
						if (pseudos || (pseudos = {}), (_pseudos = pseudos)[_key = key5] || (_pseudos[_key] = {}), process.env.IS_STATIC === "is_static") {
							Object.assign(pseudos[key5], pseudoStyleObject);
							return;
						}
					}
					var descriptor = pseudoDescriptors[key5], isEnter = key5 === "enterStyle", isExit = key5 === "exitStyle";
					if (!descriptor) return;
					if (shouldDoClasses && !isExit) {
						var pseudoStyles = getStyleAtomic(pseudoStyleObject, descriptor);
						var _iteratorNormalCompletion3 = !0, _didIteratorError3 = !1, _iteratorError3 = void 0;
						try {
							for (var _iterator3 = pseudoStyles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = !0) {
								var psuedoStyle = _step3.value, fullKey = `${psuedoStyle[0]}-${descriptor.name}`;
								addStyleToInsertRules(rulesToInsert, psuedoStyle), classNames[fullKey] = psuedoStyle[2];
							}
						} catch (err) {
							_didIteratorError3 = !0, _iteratorError3 = err;
						} finally {
							try {
								!_iteratorNormalCompletion3 && _iterator3.return != null && _iterator3.return();
							} finally {
								if (_didIteratorError3) throw _iteratorError3;
							}
						}
					}
					if (!shouldDoClasses || isExit || isEnter) {
						var isDisabled = componentState[descriptor.stateKey || descriptor.name] === !1;
						isExit && (isDisabled = !styleProps.isExiting), isEnter && componentState.unmounted === !1 && (isDisabled = !0);
						var importance = descriptor.priority, pseudoOriginalValues = styleOriginalValues.get(pseudoStyleObject);
						for (var pkey in pseudoStyleObject) {
							var _$val = pseudoStyleObject[pkey];
							if (isDisabled) applyDefaultStyle(pkey, styleState);
							else if (importance >= (styleState.usedKeys[pkey] || 0)) {
								if (process.env.IS_STATIC === "is_static") {
									var _pseudos1, _key1;
									pseudos || (pseudos = {}), (_pseudos1 = pseudos)[_key1 = key5] || (_pseudos1[_key1] = {}), pseudos[key5][pkey] = _$val;
								}
								mergeStyle(styleState, pkey, _$val, importance, !1, pseudoOriginalValues === null || pseudoOriginalValues === void 0 ? void 0 : pseudoOriginalValues[pkey]);
							}
						}
						if (!isDisabled) for (var _$key in val2) {
							var k = shorthands[_$key] || _$key;
							styleState.usedKeys[k] = Math.max(importance, styleState.usedKeys[k] || 0);
						}
					}
					return;
				}
				if (isMedia) {
					if (!val2) return;
					var mediaKeyShort = key5.slice(isMedia == "theme" ? 7 : 1);
					hasMedia || (hasMedia = !0);
					if ((val2.space || !shouldDoClasses || styleProps.willBeAnimated) && ((!hasMedia || typeof hasMedia == "boolean") && (hasMedia = /* @__PURE__ */ new Set()), hasMedia.add(mediaKeyShort)), isMedia === "platform" && !isActivePlatform(key5)) return;
					var priority = mediaStylesSeen;
					if (mediaStylesSeen += 1, shouldDoClasses) {
						var mediaStyles = getCSSStylesAtomic(getSubStyle(styleState, key5, val2, !1)), _iteratorNormalCompletion12 = !0, _didIteratorError12 = !1, _iteratorError12 = void 0;
						try {
							for (var _iterator12 = mediaStyles[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = !0) {
								var style3 = _step12.value, property = style3[0], isSubStyle = property[0] === "$";
								if (!(isSubStyle && !isActivePlatform(property))) {
									var out = createMediaStyle(style3, mediaKeyShort, mediaQueryConfig, isMedia, !1, priority);
									var subKey = isSubStyle ? style3[2] : "", fullKey1 = `${style3[0]}${subKey}-${mediaKeyShort}${style3[3] || ""}`;
									addStyleToInsertRules(rulesToInsert, out), classNames[fullKey1] = out[2];
								}
							}
						} catch (err) {
							_didIteratorError12 = !0, _iteratorError12 = err;
						} finally {
							try {
								!_iteratorNormalCompletion12 && _iterator12.return != null && _iterator12.return();
							} finally {
								if (_didIteratorError12) throw _iteratorError12;
							}
						}
					} else {
						let mergeMediaStyle2 = function(key6, val3, originalVal2) {
							var _styleState4;
							if (!isValidStyleKey(key6, validStyles$1, accept)) {
								viewProps[key6] = val3;
								return;
							}
							(_styleState4 = styleState).style || (_styleState4.style = {});
							mergeMediaByImportance(styleState, mediaKeyShort, key6, val3, mediaState$1[mediaKeyShort], importanceBump, debug, originalVal2) && key6 === "fontFamily" && (styleState.fontFamily = mediaStyle1.fontFamily);
						};
						var isThemeMedia = isMedia === "theme", isGroupMedia = isMedia === "group";
						if (!isThemeMedia && !(isMedia === "platform") && !isGroupMedia) {
							if (!mediaState$1[mediaKeyShort]) return;
						}
						var mediaStyle1 = getSubStyle(styleState, key5, val2, !0), importanceBump = 0;
						if (isThemeMedia) {
							if (isIos && getSetting("fastSchemeChange")) {
								var _styleState3;
								(_styleState3 = styleState).style || (_styleState3.style = {});
								var scheme = mediaKeyShort, oppositeScheme = getOppositeScheme(mediaKeyShort), themeOriginalValues = styleOriginalValues.get(mediaStyle1), isCurrentScheme = themeName === scheme || themeName.startsWith(scheme);
								for (var subKey1 in mediaStyle1) {
									var _$val1 = extractValueFromDynamic(mediaStyle1[subKey1], scheme), existing = styleState.style[subKey1];
									if (!isColorStyleKey(subKey1)) {
										dynamicThemeAccess = !0, isCurrentScheme ? mediaStyle1[subKey1] = _$val1 : delete mediaStyle1[subKey1];
										continue;
									}
									if (existing === null || existing === void 0 ? void 0 : existing.dynamic) existing.dynamic[scheme] = _$val1, mediaStyle1[subKey1] = existing;
									else mediaStyle1[subKey1] = getDynamicVal({
										scheme,
										val: _$val1,
										oppositeVal: extractValueFromDynamic(existing, oppositeScheme)
									}), mergeStyle(styleState, subKey1, mediaStyle1[subKey1], priority, !1, themeOriginalValues === null || themeOriginalValues === void 0 ? void 0 : themeOriginalValues[subKey1]);
								}
							} else if (dynamicThemeAccess = !0, !(themeName === mediaKeyShort || themeName.startsWith(mediaKeyShort))) return;
						} else if (isGroupMedia) {
							var _groupContext_groupName, _componentState_group, groupInfo = getGroupPropParts(mediaKeyShort), groupName = groupInfo.name, groupState = groupContext == null || (_groupContext_groupName = groupContext[groupName]) === null || _groupContext_groupName === void 0 ? void 0 : _groupContext_groupName.state, groupPseudoKey = groupInfo.pseudo, groupMediaKey = groupInfo.media;
							if (!groupState) {
								pseudoGroups || (pseudoGroups = /* @__PURE__ */ new Set());
								return;
							}
							var componentGroupState = (_componentState_group = componentState.group) === null || _componentState_group === void 0 ? void 0 : _componentState_group[groupName];
							if (groupMediaKey) {
								mediaGroups || (mediaGroups = /* @__PURE__ */ new Set()), mediaGroups.add(groupMediaKey);
								var mediaState1 = componentGroupState === null || componentGroupState === void 0 ? void 0 : componentGroupState.media, isActive = mediaState1 === null || mediaState1 === void 0 ? void 0 : mediaState1[groupMediaKey];
								if (!mediaState1 && groupState.layout && (isActive = mediaKeyMatch(groupMediaKey, groupState.layout)), !isActive) {
									for (var pkey1 in mediaStyle1) applyDefaultStyle(pkey1, styleState);
									return;
								}
								importanceBump = 2;
							}
							if (groupPseudoKey) {
								var _this;
								pseudoGroups || (pseudoGroups = /* @__PURE__ */ new Set()), pseudoGroups.add(groupName);
								var componentGroupPseudoState = (_this = componentGroupState || (groupContext === null || groupContext === void 0 ? void 0 : groupContext[groupName].state)) === null || _this === void 0 ? void 0 : _this.pseudo, isActive1 = componentGroupPseudoState === null || componentGroupPseudoState === void 0 ? void 0 : componentGroupPseudoState[groupPseudoKey], priority1 = pseudoPriorities[groupPseudoKey];
								if (!isActive1) {
									for (var pkey2 in mediaStyle1) applyDefaultStyle(pkey2, styleState);
									return;
								}
								importanceBump = priority1;
							}
						}
						var mediaOriginalValues = styleOriginalValues.get(mediaStyle1);
						if (isGroupMedia && mediaStyle1.transition) {
							var _styleState12;
							(_styleState12 = styleState).pseudoTransitions || (_styleState12.pseudoTransitions = {}), styleState.pseudoTransitions[`$${mediaKeyShort}`] = mediaStyle1.transition;
						}
						for (var subKey2 in mediaStyle1) if (subKey2 !== "space") if (subKey2[0] === "$") {
							if (!isActivePlatform(subKey2) || !isActiveTheme(subKey2, themeName)) continue;
							var subOriginalValues = styleOriginalValues.get(mediaStyle1[subKey2]);
							for (var subSubKey in mediaStyle1[subKey2]) mergeMediaStyle2(subSubKey, mediaStyle1[subKey2][subSubKey], subOriginalValues === null || subOriginalValues === void 0 ? void 0 : subOriginalValues[subSubKey]);
						} else mergeMediaStyle2(subKey2, mediaStyle1[subKey2], mediaOriginalValues === null || mediaOriginalValues === void 0 ? void 0 : mediaOriginalValues[subKey2]);
					}
					return;
				}
				if (!isVariant) {
					if (isStyledContextProp) return;
					viewProps[key5] = val2;
				}
			}
		}), false);
	};
	conf = conf || getConfig();
	var driver = animationDriver || (componentContext === null || componentContext === void 0 ? void 0 : componentContext.animationDriver) || conf.animations;
	if (props.passThrough) return null;
	var { shorthands } = conf, { isHOC, isText, isInput, variants, isReactNative, inlineProps, inlineWhenUnflattened, parentStaticConfig, acceptsClassName } = staticConfig, viewProps = {}, mediaState$1 = styleProps.mediaState || mediaState, shouldDoClasses = acceptsClassName && false, rulesToInsert = void 0, classNames = {};
	props.space;
	var pseudos = null, hasMedia = !1, dynamicThemeAccess, pseudoGroups, mediaGroups;
	props.className;
	var mediaStylesSeen = 0, validStyles$1 = staticConfig.validStyles || (staticConfig.isText || staticConfig.isInput ? stylePropsText : validStyles);
	var styleState = {
		classNames,
		conf,
		props,
		styleProps,
		componentState,
		staticConfig,
		style: null,
		theme,
		usedKeys: {},
		viewProps,
		context: componentContext,
		debug,
		animationDriver: driver
	};
	if (process.env.IS_STATIC === "is_static") {
		var { fallbackProps } = styleProps;
		fallbackProps && (styleState.props = new Proxy(props, { get(_, key5, val2) {
			return Reflect.has(props, key5) ? Reflect.get(props, key5) : Reflect.get(fallbackProps, key5);
		} }));
	}
	var { asChild } = props, { accept } = staticConfig, { noSkip, disableExpandShorthands, noExpand, styledContext } = styleProps, { webContainerType } = conf.settings, parentVariants = parentStaticConfig === null || parentStaticConfig === void 0 ? void 0 : parentStaticConfig.variants;
	for (var keyOg in props) _loop(keyOg);
	if (!(styleProps.noNormalize === !1)) {
		if (styleState.style && (fixStyles(styleState.style), !styleProps.noExpand && styleProps.noMergeStyle), styleState.flatTransforms) {
			var _styleState;
			(_styleState = styleState).style || (_styleState.style = {}), mergeFlatTransforms(styleState.style, styleState.flatTransforms);
		}
		if (parentSplitStyles) {
			if (!shouldDoClasses) for (var key1 in parentSplitStyles.style) {
				var _styleState1;
				key1 in classNames || styleState.style && key1 in styleState.style || ((_styleState1 = styleState).style || (_styleState1.style = {}), styleState.style[key1] = parentSplitStyles.style[key1]);
			}
		}
	}
	var styleProp = props.style;
	if (!styleProps.noMergeStyle && styleProp) if (isHOC) viewProps.style = normalizeStyle$1(styleProp);
	else for (var isArray = Array.isArray(styleProp), len = isArray ? styleProp.length : 1, i = 0; i < len; i++) {
		var style = isArray ? styleProp[i] : styleProp;
		if (style) if (style.$$css) Object.assign(styleState.classNames, style);
		else {
			var _styleState2;
			(_styleState2 = styleState).style || (_styleState2.style = {}), Object.assign(styleState.style, normalizeStyle$1(style));
		}
	}
	if (viewProps.tabIndex === 0) {
		var _viewProps, _accessible;
		(_accessible = (_viewProps = viewProps).accessible) !== null && _accessible !== void 0 || (_viewProps.accessible = !0);
	}
	var style1 = styleState.style;
	if (style1 === null || style1 === void 0 ? void 0 : style1.fontFamily) {
		var _getFont, faceInfo = (_getFont = getFont(style1.fontFamily)) === null || _getFont === void 0 ? void 0 : _getFont.face;
		if (faceInfo) {
			var _faceInfo_style_fontWeight_, _faceInfo_style_fontWeight, overrideFace = (_faceInfo_style_fontWeight = faceInfo[style1.fontWeight]) === null || _faceInfo_style_fontWeight === void 0 || (_faceInfo_style_fontWeight_ = _faceInfo_style_fontWeight[style1.fontStyle || "normal"]) === null || _faceInfo_style_fontWeight_ === void 0 ? void 0 : _faceInfo_style_fontWeight_.val;
			overrideFace && (style1.fontFamily = overrideFace, styleState.fontFamily = overrideFace, delete style1.fontWeight, delete style1.fontStyle);
		}
	}
	var result = {
		hasMedia,
		fontFamily: styleState.fontFamily,
		viewProps,
		style: styleState.style,
		pseudos,
		classNames,
		rulesToInsert,
		dynamicThemeAccess,
		pseudoGroups,
		mediaGroups,
		overriddenContextProps: styleState.overriddenContextProps,
		pseudoTransitions: styleState.pseudoTransitions
	}, asChildExceptStyleLike = asChild === "except-style" || asChild === "except-style-web";
	if (!styleProps.noMergeStyle && !asChildExceptStyleLike) {
		var style2 = styleState.style;
		style2 && (viewProps.style = style2);
	}
	return result;
};
function mergeFlatTransforms(target, flatTransforms) {
	Object.entries(flatTransforms).sort(function(param, param1) {
		var [a] = param, [b] = param1;
		return sortString(a, b);
	}).forEach(function(param) {
		var [key, val] = param;
		mergeTransform(target, key, val, !0);
	});
}
function mergeStyle(styleState, key, val, importance) {
	arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
	var originalVal = arguments.length > 5 ? arguments[5] : void 0, _staticConfig_context, _staticConfig_parentStaticConfig_context, _staticConfig_parentStaticConfig, { viewProps, styleProps, staticConfig, usedKeys } = styleState;
	if (!((usedKeys[key] || 0) > importance)) {
		var contextProps = ((_staticConfig_context = staticConfig.context) === null || _staticConfig_context === void 0 ? void 0 : _staticConfig_context.props) || ((_staticConfig_parentStaticConfig = staticConfig.parentStaticConfig) === null || _staticConfig_parentStaticConfig === void 0 || (_staticConfig_parentStaticConfig_context = _staticConfig_parentStaticConfig.context) === null || _staticConfig_parentStaticConfig_context === void 0 ? void 0 : _staticConfig_parentStaticConfig_context.props);
		if (contextProps && key in contextProps) {
			var _styleState_originalContextPropValues, _styleState;
			(_styleState = styleState).overriddenContextProps || (_styleState.overriddenContextProps = {});
			var originalFromState = (_styleState_originalContextPropValues = styleState.originalContextPropValues) === null || _styleState_originalContextPropValues === void 0 ? void 0 : _styleState_originalContextPropValues[key], _ref;
			styleState.overriddenContextProps[key] = (_ref = originalVal !== null && originalVal !== void 0 ? originalVal : originalFromState) !== null && _ref !== void 0 ? _ref : val;
		}
		if (key in stylePropsTransform) {
			var _styleState1;
			(_styleState1 = styleState).flatTransforms || (_styleState1.flatTransforms = {}), usedKeys[key] = importance, styleState.flatTransforms[key] = val;
		} else {
			var out = val;
			if (staticConfig.accept && key in staticConfig.accept) viewProps[key] = out;
			else {
				var _styleState2;
				(_styleState2 = styleState).style || (_styleState2.style = {}), usedKeys[key] = importance, styleState.style[key] = key === "transform" && Array.isArray(out) ? [...out] : out;
			}
		}
	}
}
var getSubStyle = function(styleState, subKey, styleIn, avoidMergeTransform) {
	var _loop = function(key1) {
		var val = styleIn[key1];
		if (key1 = conf2.shorthands[key1] || key1, key1 === "transition") {
			var _driver_animations, _styleState;
			(_styleState = styleState).pseudoTransitions || (_styleState.pseudoTransitions = {}), styleState.pseudoTransitions[subKey] = val;
			var driver = styleState.animationDriver;
			if ((driver === null || driver === void 0 ? void 0 : driver.outputStyle) === "css") {
				var _driver_animations1, animationConfig = (_driver_animations1 = driver.animations) === null || _driver_animations1 === void 0 ? void 0 : _driver_animations1[val];
				if (animationConfig) styleOut.transition = `all ${animationConfig}${subKey[0] === "$" ? " !important" : ""}`;
			}
			return !styleOut.transition && typeof val == "string" && !(!(driver == null || (_driver_animations = driver.animations) === null || _driver_animations === void 0) && _driver_animations[val]) && (styleOut.transition = val), key = key1, "continue";
		}
		if (!staticConfig.isHOC && key1 in skipProps && !styleProps.noSkip) return key = key1, "continue";
		propMapper(key1, val, styleState, !1, function(skey, sval, originalVal) {
			originalVal !== void 0 && (originalValues || (originalValues = {}), originalValues[skey] = originalVal), skey in validPseudoKeys && (sval = getSubStyle(styleState, skey, sval, avoidMergeTransform)), !avoidMergeTransform && skey in stylePropsTransform ? mergeTransform(styleOut, skey, sval) : styleOut[skey] = styleProps.noNormalize ? sval : normalizeValueWithProperty(sval, key1);
		}), key = key1;
	}, { staticConfig, conf: conf2, styleProps } = styleState, styleOut = {}, originalValues;
	for (var key in styleIn) _loop(key);
	if (!avoidMergeTransform) {
		var _styleState_style, parentTransform = (_styleState_style = styleState.style) === null || _styleState_style === void 0 ? void 0 : _styleState_style.transform, flatTransforms = styleState.flatTransforms, styleOutTransform = styleOut.transform;
		if (Array.isArray(styleOutTransform) && styleOutTransform.length) {
			var len = styleOutTransform.length;
			if (Array.isArray(parentTransform)) {
				var merged = [];
				outer: for (var i = 0; i < parentTransform.length; i++) {
					var pt = parentTransform[i];
					for (var pk in pt) {
						for (var j = 0; j < len; j++) for (var sk in styleOutTransform[j]) {
							if (pk === sk) continue outer;
							break;
						}
						merged.push(pt);
						break;
					}
				}
				for (var i1 = 0; i1 < len; i1++) merged.push(styleOutTransform[i1]);
				styleOut.transform = merged;
			}
			if (flatTransforms) outer: for (var fk in flatTransforms) {
				for (var ck = fk === "x" ? "translateX" : fk === "y" ? "translateY" : fk, j1 = 0; j1 < len; j1++) for (var sk1 in styleOutTransform[j1]) {
					if (ck === sk1) continue outer;
					break;
				}
				mergeTransform(styleOut, fk, flatTransforms[fk]);
			}
		} else flatTransforms && mergeFlatTransforms(styleOut, flatTransforms);
	}
	return styleProps.noNormalize || fixStyles(styleOut), originalValues && styleOriginalValues.set(styleOut, originalValues), styleOut;
};
var useSplitStyles = function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
	"use no memo";
	return getSplitStyles(a, b, c, d, e, f, g, h, i, j, k, l, m);
};
function addStyleToInsertRules(rulesToInsert, styleObject) {}
var defaultColor = process.env.TAMAGUI_DEFAULT_COLOR || "rgba(0,0,0,0)", animatableDefaults = _objectSpread2(_objectSpread2({}, Object.fromEntries(Object.entries(tokenCategories.color).map(function(param) {
	var [k, v] = param;
	return [k, defaultColor];
}))), {}, {
	opacity: 1,
	scale: 1,
	scaleX: 1,
	scaleY: 1,
	rotate: "0deg",
	rotateX: "0deg",
	rotateY: "0deg",
	rotateZ: "0deg",
	skewX: "0deg",
	skewY: "0deg",
	x: 0,
	y: 0,
	borderRadius: 0
}), mergeTransform = function(obj, key, val) {
	var backwards = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, _obj;
	typeof obj.transform != "string" && ((_obj = obj).transform || (_obj.transform = []), obj.transform[backwards ? "unshift" : "push"]({ [mapTransformKeys[key] || key]: val }));
}, mapTransformKeys = {
	x: "translateX",
	y: "translateY"
};
function passDownProp(viewProps, key, val) {
	if (arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1) {
		var next = _objectSpread2(_objectSpread2({}, viewProps[key]), val);
		delete viewProps[key], viewProps[key] = next;
	} else viewProps[key] = val;
}
function mergeMediaByImportance(styleState, mediaKey, key, value, isSizeMedia, importanceBump, debugProp, originalVal) {
	styleState.usedKeys;
	var importance = getMediaImportanceIfMoreImportant(mediaKey, key, styleState, isSizeMedia);
	if (importanceBump && (importance = (importance || 0) + importanceBump), importance === null) return !1;
	if (key in pseudoDescriptors) {
		var descriptor = pseudoDescriptors[key], descriptorKey = descriptor.stateKey || descriptor.name;
		if (styleState.componentState[descriptorKey] === !1) return !1;
		var pseudoOriginalValues = styleOriginalValues.get(value);
		for (var subKey in value) mergeStyle(styleState, subKey, value[subKey], importance, !1, pseudoOriginalValues === null || pseudoOriginalValues === void 0 ? void 0 : pseudoOriginalValues[subKey]);
	} else mergeStyle(styleState, key, value, importance, !1, originalVal);
	return !0;
}
function normalizeStyle$1(style) {
	var out = {};
	for (var key in style) {
		var val = style[key];
		key in stylePropsTransform ? mergeTransform(out, key, val) : out[key] = normalizeValueWithProperty(val, key);
	}
	return fixStyles(out), out;
}
function applyDefaultStyle(pkey, styleState) {
	var defaultValues = animatableDefaults[pkey];
	defaultValues != null && !(pkey in styleState.usedKeys) && (!styleState.style || !(pkey in styleState.style)) && mergeStyle(styleState, pkey, defaultValues, 1);
}
//#endregion
//#region ../web/dist/esm/helpers/mergeSlotStyleProps.native.js
var isEventHandler = /^on[A-Z]/;
function mergeSlotStyleProps(base, overlay) {
	for (var key in overlay) {
		var baseVal = base[key], overlayVal = overlay[key];
		overlayVal !== void 0 && (key === "style" ? base.style = baseVal && overlayVal ? _objectSpread2(_objectSpread2({}, baseVal), overlayVal) : overlayVal || baseVal : key === "className" ? base.className = baseVal && overlayVal ? `${baseVal} ${overlayVal}` : overlayVal || baseVal : key === "ref" ? base.ref = baseVal && overlayVal ? composeRefs(baseVal, overlayVal) : overlayVal || baseVal : isEventHandler.test(key) && typeof baseVal == "function" && typeof overlayVal == "function" ? base[key] = composeEventHandlers(baseVal, overlayVal) : base[key] = overlayVal);
	}
	return base;
}
//#endregion
//#region ../web/dist/esm/helpers/mergeRenderElementProps.native.js
function mergeRenderElementProps(elementProps, viewProps, children) {
	var merged = mergeSlotStyleProps(_objectSpread2({}, elementProps), viewProps);
	return merged.children = children, merged;
}
//#endregion
//#region ../web/dist/esm/helpers/pointerEvents.native.js
function usePointerEvents(props, viewProps) {
	var { onPointerDown, onPointerUp, onPointerMove, onPointerCancel, onPointerEnter, onPointerLeave } = props, hasPointerEvents = onPointerDown || onPointerUp || onPointerMove || onPointerCancel || onPointerEnter || onPointerLeave, isInsideRef = (0, react.useRef)(!1), layoutRef = (0, react.useRef)({
		width: 0,
		height: 0
	}), isCapturedRef = (0, react.useRef)(!1);
	if (hasPointerEvents) {
		var createNormalizedEvent = function(e) {
			var touch = e.nativeEvent, _touch_identifier;
			return _objectSpread2(_objectSpread2({}, e), {}, {
				clientX: touch.pageX,
				clientY: touch.pageY,
				pageX: touch.pageX,
				pageY: touch.pageY,
				offsetX: touch.locationX,
				offsetY: touch.locationY,
				pointerType: "touch",
				pointerId: (_touch_identifier = touch.identifier) !== null && _touch_identifier !== void 0 ? _touch_identifier : 0,
				nativeEvent: touch,
				target: {
					setPointerCapture: function(_pointerId) {
						isCapturedRef.current = !0;
					},
					releasePointerCapture: function(_pointerId) {
						isCapturedRef.current = !1;
					}
				}
			});
		};
		onPointerDown && (viewProps.onTouchStart = composeEventHandlers(viewProps.onTouchStart, function(e) {
			onPointerDown(createNormalizedEvent(e));
		})), onPointerUp && (viewProps.onTouchEnd = composeEventHandlers(viewProps.onTouchEnd, function(e) {
			isCapturedRef.current = !1, onPointerUp(createNormalizedEvent(e));
		})), onPointerMove && (viewProps.onTouchMove = composeEventHandlers(viewProps.onTouchMove, function(e) {
			var { locationX, locationY } = e.nativeEvent, { width, height } = layoutRef.current, isInBounds = locationX >= 0 && locationX <= width && locationY >= 0 && locationY <= height;
			(isCapturedRef.current || isInBounds) && onPointerMove(createNormalizedEvent(e));
		})), onPointerCancel && (viewProps.onTouchCancel = composeEventHandlers(viewProps.onTouchCancel, function(e) {
			isCapturedRef.current = !1, onPointerCancel(createNormalizedEvent(e));
		})), (onPointerEnter || onPointerLeave || onPointerMove) && (viewProps.onLayout = composeEventHandlers(viewProps.onLayout, function(e) {
			layoutRef.current = {
				width: e.nativeEvent.layout.width,
				height: e.nativeEvent.layout.height
			};
		})), onPointerEnter && (viewProps.onTouchStart = composeEventHandlers(viewProps.onTouchStart, function(e) {
			var { locationX, locationY } = e.nativeEvent, { width, height } = layoutRef.current;
			locationX >= 0 && locationX <= width && locationY >= 0 && locationY <= height && (isInsideRef.current = !0, onPointerEnter(createNormalizedEvent(e)));
		})), onPointerLeave && (viewProps.onTouchMove = composeEventHandlers(viewProps.onTouchMove, function(e) {
			var { locationX, locationY } = e.nativeEvent, { width, height } = layoutRef.current, isInside = locationX >= 0 && locationX <= width && locationY >= 0 && locationY <= height;
			isInsideRef.current && !isInside && (isInsideRef.current = !1, onPointerLeave(createNormalizedEvent(e)));
		}), viewProps.onTouchEnd = composeEventHandlers(viewProps.onTouchEnd, function(e) {
			isInsideRef.current && (isInsideRef.current = !1, onPointerLeave(createNormalizedEvent(e)));
		}));
	}
}
//#endregion
//#region ../web/dist/esm/helpers/pseudoTransitions.native.js
function resolveEffectivePseudoTransition(prev, next, pseudoTransitions, baseTransition) {
	if (!pseudoTransitions) return baseTransition;
	var prevState = prev || {
		hover: !1,
		press: !1,
		focus: !1,
		groups: {}
	};
	if (next.press && !prevState.press && pseudoTransitions.pressStyle) return pseudoTransitions.pressStyle;
	if (next.hover && !prevState.hover && pseudoTransitions.hoverStyle) return pseudoTransitions.hoverStyle;
	if (next.focus && !prevState.focus && pseudoTransitions.focusStyle) return pseudoTransitions.focusStyle;
	for (var key in pseudoTransitions) if (key.startsWith("$group-")) {
		var _next_group_groupName, _next_group, _prevState_groups, match = key.match(/^\$group-(.+)-(hover|press|focus)$/);
		if (!match) continue;
		var groupName = match[1], pseudoType = match[2], nextGroupPseudo = (_next_group = next.group) === null || _next_group === void 0 || (_next_group_groupName = _next_group[groupName]) === null || _next_group_groupName === void 0 ? void 0 : _next_group_groupName.pseudo, prevGroupPseudo = (_prevState_groups = prevState.groups) === null || _prevState_groups === void 0 ? void 0 : _prevState_groups[groupName];
		if ((nextGroupPseudo === null || nextGroupPseudo === void 0 ? void 0 : nextGroupPseudo[pseudoType]) && !(prevGroupPseudo === null || prevGroupPseudo === void 0 ? void 0 : prevGroupPseudo[pseudoType])) return pseudoTransitions[key];
	}
	return baseTransition;
}
function extractPseudoState(state) {
	var groups = {};
	if (state.group) for (var groupName in state.group) {
		var _state_group_groupName, pseudo = (_state_group_groupName = state.group[groupName]) === null || _state_group_groupName === void 0 ? void 0 : _state_group_groupName.pseudo;
		pseudo && (groups[groupName] = {
			hover: pseudo.hover,
			press: pseudo.press,
			focus: pseudo.focus
		});
	}
	return {
		hover: state.hover,
		press: state.press,
		focus: state.focus,
		groups
	};
}
//#endregion
//#region ../web/dist/esm/helpers/setElementProps.native.js
function setElementProps(element) {
	element && !element.getBoundingClientRect && (element.getBoundingClientRect = function() {
		if (element.unstable_getBoundingClientRect != null) return element.unstable_getBoundingClientRect();
	});
}
//#endregion
//#region ../web/dist/esm/helpers/subscribeToContextGroup.native.js
var subscribeToContextGroup = function(props) {
	var { pseudoGroups, mediaGroups, groupContext } = props;
	if (pseudoGroups || mediaGroups) {
		var disposables = /* @__PURE__ */ new Set();
		if (pseudoGroups) {
			var _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
			try {
				for (var _iterator = pseudoGroups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
					var name = _step.value;
					disposables.add(createGroupListener(name, props));
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
		}
		if (mediaGroups) {
			var _iteratorNormalCompletion1 = !0, _didIteratorError1 = !1, _iteratorError1 = void 0;
			try {
				for (var _iterator1 = mediaGroups[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = !0) {
					var name1 = _step1.value;
					disposables.add(createGroupListener(name1, props));
				}
			} catch (err) {
				_didIteratorError1 = !0, _iteratorError1 = err;
			} finally {
				try {
					!_iteratorNormalCompletion1 && _iterator1.return != null && _iterator1.return();
				} finally {
					if (_didIteratorError1) throw _iteratorError1;
				}
			}
		}
		return function() {
			disposables.forEach(function(d) {
				return d();
			});
		};
	}
}, createGroupListener = function(name, param) {
	var { setStateShallow, pseudoGroups, mediaGroups, groupContext } = param, parent = groupContext === null || groupContext === void 0 ? void 0 : groupContext[name];
	if (!parent) return function() {};
	var dispose = parent.subscribe(function(param2) {
		var { layout, pseudo } = param2;
		setStateShallow(function(prev) {
			var _prev_group, didChange = !1, group = ((_prev_group = prev.group) === null || _prev_group === void 0 ? void 0 : _prev_group[name]) || {
				pseudo: {},
				media: {}
			};
			if (pseudo && (pseudoGroups === null || pseudoGroups === void 0 ? void 0 : pseudoGroups.has(name))) {
				var _group;
				(_group = group).pseudo || (_group.pseudo = {});
				mergeIfNotShallowEqual(group.pseudo, pseudo) !== group.pseudo && (Object.assign(group.pseudo, pseudo), didChange = !0);
			} else if (layout && mediaGroups) {
				var _group1;
				(_group1 = group).media || (_group1.media = {});
				var mediaState = getMediaState(mediaGroups, layout), next1 = mergeIfNotShallowEqual(group.media, mediaState);
				next1 !== group.media && (Object.assign(group.media, next1), didChange = !0);
			}
			return didChange ? { group: _objectSpread2(_objectSpread2({}, prev.group), {}, { [name]: group }) } : prev;
		});
	});
	return function() {
		dispose(), setStateShallow({ group: {} });
	};
};
//#endregion
//#region ../web/dist/esm/views/Theme.native.js
var Theme = /* @__PURE__ */ (0, react.forwardRef)(function(props, ref) {
	"use no memo";
	if (props.disable) return props.children;
	var { passThrough } = props, isRoot = !!props._isRoot, [_, themeState] = useThemeWithState(props, isRoot), finalChildren = props["disable-child-theme"] ? react.Children.map(props.children, function(child) {
		return passThrough || !/* @__PURE__ */ (0, react.isValidElement)(child) ? child : /* @__PURE__ */ (0, react.cloneElement)(child, { "data-disable-theme": !0 });
	}) : props.children;
	if (ref) try {
		react.default.Children.only(finalChildren), finalChildren = /* @__PURE__ */ (0, react.cloneElement)(finalChildren, { ref });
	} catch (_unused) {}
	var stateRef = (0, react.useRef)({ hasEverThemed: !1 });
	return getThemedChildren(themeState, finalChildren, props, isRoot, stateRef, passThrough);
});
Theme.avoidForwardRef = !0;
function getThemedChildren(themeState, children, props) {
	var isRoot = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, stateRef = arguments.length > 4 ? arguments[4] : void 0, passThrough = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1, { shallow, forceClassName } = props, state = stateRef.current;
	if (!(state.hasEverThemed || themeState.isNew || isRoot || hasThemeUpdatingProps(props))) return children;
	children = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ThemeStateContext.Provider, {
		value: themeState.id,
		children
	});
	var { isInverse, name } = themeState, requiresExtraWrapper = isInverse || forceClassName;
	if (state.hasEverThemed || (state.hasEverThemed = !0), (requiresExtraWrapper || themeState.name === "dark" || themeState.name === "light") && (state.hasEverThemed = "wrapped"), shallow && themeState.parentId) {
		var parentState = getThemeState(themeState.isNew ? themeState.id : themeState.parentId);
		if (!parentState) throw new Error("‼️010");
		children = react.Children.toArray(children).map(function(child) {
			return /* @__PURE__ */ (0, react.isValidElement)(child) ? passThrough ? child : /* @__PURE__ */ (0, react.cloneElement)(child, void 0, /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Theme, {
				name: parentState.name,
				children: child.props.children
			})) : child;
		});
	}
	if (forceClassName === !1) return children;
	return children;
}
//#endregion
//#region ../web/dist/esm/helpers/themeable.native.js
var _excluded$4 = [
	"theme",
	"componentName",
	"themeReset"
];
function themeable(Component, staticConfig) {
	var optimize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, withTheme = /* @__PURE__ */ react.default.forwardRef(function(props, ref) {
		"use no memo";
		var userDefaults = getDefaultProps(staticConfig, props.componentName), defaultTheme = userDefaults === null || userDefaults === void 0 ? void 0 : userDefaults.theme, defaultResetTheme = userDefaults === null || userDefaults === void 0 ? void 0 : userDefaults.themeReset, { theme, componentName, themeReset } = props, rest = _objectWithoutProperties(props, _excluded$4), overriddenContextProps, context = staticConfig === null || staticConfig === void 0 ? void 0 : staticConfig.context;
		if (context) for (var key in context.props) {
			var val = props[key];
			val !== void 0 && (overriddenContextProps = overriddenContextProps || {}, overriddenContextProps[key] = val);
		}
		var element = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Component, _objectSpread2(_objectSpread2({ ref }, rest), {}, { "data-disable-theme": !0 })), filteredProps = null, compName = componentName || (staticConfig === null || staticConfig === void 0 ? void 0 : staticConfig.componentName);
		if (compName && (filteredProps = filteredProps || {}, filteredProps.componentName = compName), "debug" in props && (filteredProps = filteredProps || {}, filteredProps.debug = props.debug), ("theme" in props || defaultTheme) && (filteredProps = filteredProps || {}, filteredProps.name = "theme" in props ? props.theme : defaultTheme), ("themeReset" in props || defaultResetTheme) && (filteredProps = filteredProps || {}, filteredProps.reset = "themeReset" in props ? themeReset : defaultResetTheme), optimize && !filteredProps) return element;
		var contents = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Theme, _objectSpread2(_objectSpread2({ "disable-child-theme": !0 }, filteredProps), {}, { children: element }));
		if (context) {
			var Provider = context.Provider;
			contents = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Provider, _objectSpread2(_objectSpread2(_objectSpread2({}, react.default.useContext(context)), overriddenContextProps), {}, { children: contents }));
		}
		return contents;
	});
	return withTheme.displayName = `Themed(${(Component === null || Component === void 0 ? void 0 : Component.displayName) || (Component === null || Component === void 0 ? void 0 : Component.name) || "Anonymous"})`, withTheme;
}
//#endregion
//#region ../use-did-finish-ssr/dist/esm/ClientOnly.native.js
var ClientOnlyContext = /* @__PURE__ */ (0, react.createContext)(!1), ClientOnly = function(param) {
	var { children, enabled } = param, existingValue = (0, react.useContext)(ClientOnlyContext);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ClientOnlyContext.Provider, {
		value: enabled !== null && enabled !== void 0 ? enabled : existingValue,
		children
	});
};
//#endregion
//#region ../use-did-finish-ssr/dist/esm/index.native.js
var useIsClientOnly = function() {
	return react.useContext(ClientOnlyContext);
};
function useDidFinishSSR() {
	react.useContext(ClientOnlyContext);
	return !0;
}
function useClientValue(value) {
	return useDidFinishSSR() ? typeof value == "function" ? value() : value : void 0;
}
//#endregion
//#region ../web/dist/esm/hooks/useComponentState.native.js
function _type_of$2(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var useComponentState = function(props, animationDriver, staticConfig, config) {
	"use no memo";
	var _animationDriver_usePresence, isHydrated = useDidFinishSSR(), needsHydration = !useIsClientOnly(), useAnimations = (animationDriver === null || animationDriver === void 0 ? void 0 : animationDriver.isStub) ? void 0 : animationDriver === null || animationDriver === void 0 ? void 0 : animationDriver.useAnimations, { isHOC } = staticConfig, stateRef = (0, react.useRef)(void 0);
	stateRef.current || (stateRef.current = { startedUnhydrated: needsHydration && !isHydrated });
	var hasAnimationProp = !!(!isHOC && "transition" in props || props.style && hasAnimatedStyleValue(props.style)), _animationDriver_inputStyle, inputStyle = (_animationDriver_inputStyle = animationDriver === null || animationDriver === void 0 ? void 0 : animationDriver.inputStyle) !== null && _animationDriver_inputStyle !== void 0 ? _animationDriver_inputStyle : "css", _animationDriver_outputStyle, outputStyle = (_animationDriver_outputStyle = animationDriver === null || animationDriver === void 0 ? void 0 : animationDriver.outputStyle) !== null && _animationDriver_outputStyle !== void 0 ? _animationDriver_outputStyle : "css", curStateRef = stateRef.current;
	!needsHydration && hasAnimationProp && (curStateRef.hasAnimated = !0);
	var willBeAnimatedClient = function() {
		return !!(!!(hasAnimationProp && !isHOC && useAnimations) || curStateRef.hasAnimated);
	}(), willBeAnimated = willBeAnimatedClient;
	willBeAnimated && !curStateRef.hasAnimated && (curStateRef.hasAnimated = !0);
	var { disableClassName } = props, presence = !isHOC && willBeAnimated && props.animatePresence !== !1 && (animationDriver == null || (_animationDriver_usePresence = animationDriver.usePresence) === null || _animationDriver_usePresence === void 0 ? void 0 : _animationDriver_usePresence.call(animationDriver)) || null, presenceState = presence === null || presence === void 0 ? void 0 : presence[2], isExiting = (presenceState === null || presenceState === void 0 ? void 0 : presenceState.isPresent) === !1, isEntering = (presenceState === null || presenceState === void 0 ? void 0 : presenceState.isPresent) === !0 && presenceState.initial !== !1, hasEnterStyle = !!props.enterStyle, hasAnimationThatNeedsHydrate = hasAnimationProp && !isHydrated && ((animationDriver === null || animationDriver === void 0 ? void 0 : animationDriver.isReactNative) || inputStyle !== "css"), initialState = !isHOC && (hasEnterStyle || isEntering || hasAnimationThatNeedsHydrate || disableClassName) ? hasEnterStyle || isEntering ? defaultComponentStateShouldEnter : defaultComponentState : defaultComponentStateMounted, disabled = isDisabled(props);
	disabled != null && (initialState.disabled = disabled);
	var states = (0, react.useState)(initialState), state = props.forceStyle ? _objectSpread2(_objectSpread2({}, states[0]), {}, { [props.forceStyle]: !0 }) : states[0], setState = states[1], isAnimated = willBeAnimated;
	disabled !== state.disabled && (disabled && Object.assign(state, defaultComponentStateMounted), state.disabled = disabled, setState(function(_) {
		return _objectSpread2({}, state);
	}));
	var groupName = props.group, setStateShallow = useCreateShallowSetState(setState, props.debug);
	if (presenceState && isAnimated && isHydrated && staticConfig.variants) {
		var { enterVariant, exitVariant, enterExitVariant, custom } = presenceState;
		isObj(custom) && Object.assign(props, custom);
		var exv = exitVariant !== null && exitVariant !== void 0 ? exitVariant : enterExitVariant, env = enterVariant !== null && enterVariant !== void 0 ? enterVariant : enterExitVariant;
		state.unmounted && env && staticConfig.variants[env] ? props[env] = !0 : isExiting && exv && (props[exv] = exitVariant !== enterExitVariant);
	}
	var noClass = true;
	if (!isHydrated) noClass = !1;
	return {
		startedUnhydrated: curStateRef.startedUnhydrated,
		curStateRef,
		disabled,
		groupName,
		hasAnimationProp,
		hasEnterStyle,
		isAnimated,
		isExiting,
		isHydrated,
		presence,
		presenceState,
		setState,
		setStateShallow,
		noClass,
		state,
		stateRef,
		inputStyle,
		outputStyle,
		willBeAnimated,
		willBeAnimatedClient
	};
};
function hasAnimatedStyleValue(style) {
	return Object.keys(style).some(function(k) {
		var val = style[k];
		return val && (typeof val > "u" ? "undefined" : _type_of$2(val)) === "object" && "_animation" in val;
	});
}
var isDisabled = function(props) {
	var _props_accessibilityState;
	return props.disabled || props.passThrough || ((_props_accessibilityState = props.accessibilityState) === null || _props_accessibilityState === void 0 ? void 0 : _props_accessibilityState.disabled) || props["aria-disabled"] || props.accessibilityDisabled || !1;
};
//#endregion
//#region ../web/dist/esm/setupHooks.native.js
var hooks = {};
function setupHooks(next) {
	Object.assign(hooks, next);
}
//#endregion
//#region ../web/dist/esm/views/Slot.native.js
var _excluded$3 = ["children"];
var Slot = /* @__PURE__ */ (0, react.memo)(/* @__PURE__ */ (0, react.forwardRef)(function(props, forwardedRef) {
	var { children } = props, slotProps = _objectWithoutProperties(props, _excluded$3);
	if (/* @__PURE__ */ (0, react.isValidElement)(children)) {
		var mergedProps = mergeSlotProps(children, slotProps);
		return /* @__PURE__ */ (0, react.cloneElement)(children, children.type.avoidForwardRef ? mergedProps : _objectSpread2(_objectSpread2({}, mergedProps), {}, { ref: composeRefs(forwardedRef, children.props.ref) }));
	}
	return react.Children.count(children) > 1 ? react.Children.only(null) : null;
})), Slottable = function(param) {
	var { children } = param;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children });
};
Slottable.displayName = "Slottable";
var pressMap = {};
function mergeSlotProps(child, slotProps) {
	var childProps = child.props, isHTMLChild = typeof child.type == "string";
	if (isHTMLChild) for (var key in pressMap) key in slotProps && (slotProps[pressMap[key]] = slotProps[key], delete slotProps[key]);
	var merged = mergeSlotStyleProps(slotProps, childProps);
	if (isHTMLChild) for (var key1 in pressMap) key1 in merged && (merged[pressMap[key1]] = merged[key1], delete merged[key1]);
	return merged;
}
//#endregion
//#region ../web/dist/esm/createComponent.native.js
var _excluded$2 = [
	"group",
	"hasDynGroupChildren",
	"unmounted",
	"transition"
], _excluded2$1 = [
	"asChild",
	"children",
	"themeShallow",
	"spaceDirection",
	"onPress",
	"onLongPress",
	"onPressIn",
	"onPressOut",
	"onHoverIn",
	"onHoverOut",
	"onMouseUp",
	"onMouseDown",
	"onMouseEnter",
	"onMouseLeave",
	"onFocus",
	"onBlur",
	"separator",
	"passThrough",
	"forceStyle",
	"onClick",
	"theme"
];
function _type_of$1(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var componentSetStates = /* @__PURE__ */ new Set(), avoidReRenderKeys = /* @__PURE__ */ new Set([
	"hover",
	"press",
	"pressIn",
	"group",
	"focus",
	"focusWithin",
	"media",
	"group"
]);
var BaseText, BaseView, hasSetupBaseViews = !1, lastInteractionWasKeyboard = { value: !1 }, lastInteractionWasTouch = { value: !1 };
function createComponent(staticConfig) {
	var config = null, { Component, isText, isHOC } = staticConfig, component = /* @__PURE__ */ react.default.forwardRef(function(propsIn, forwardedRef) {
		"use no memo";
		var _hooks_usePropsTransform;
		config = config || getConfig();
		if (!hasSetupBaseViews) {
			var _hooks_getBaseViews;
			hasSetupBaseViews = !0;
			var baseViews = (_hooks_getBaseViews = hooks.getBaseViews) === null || _hooks_getBaseViews === void 0 ? void 0 : _hooks_getBaseViews.call(hooks);
			baseViews && (BaseText = baseViews.Text, BaseView = baseViews.View);
		}
		if (propsIn["data-test-renders"]) {
			var _propsIn_datatestrenders_current;
			propsIn["data-test-renders"].current = (_propsIn_datatestrenders_current = propsIn["data-test-renders"].current) !== null && _propsIn_datatestrenders_current !== void 0 ? _propsIn_datatestrenders_current : 0, propsIn["data-test-renders"].current += 1;
		}
		var { context, isReactNative } = staticConfig, debugProp = propsIn.debug, styledContextValue = context ? react.default.useContext(context) : void 0, overriddenContextProps = null, componentContext = react.default.useContext(ComponentContext), hasTextAncestor = false, isInsideNativeMenu = react.default.useContext(NativeMenuContext);
		var props = propsIn, componentName = props.componentName || staticConfig.componentName, [nextProps, overrides] = mergeComponentProps(getDefaultProps(staticConfig, props.componentName), styledContextValue, propsIn);
		props = nextProps, overriddenContextProps = overrides;
		var groupContextParent = react.default.useContext(GroupContext), animationDriver = function() {
			if (props.animatedBy && config) {
				if (config.animationDrivers) {
					var _config_animationDrivers_props_animatedBy;
					return (_config_animationDrivers_props_animatedBy = config.animationDrivers[props.animatedBy]) !== null && _config_animationDrivers_props_animatedBy !== void 0 ? _config_animationDrivers_props_animatedBy : config.animations;
				}
				return props.animatedBy === "default" ? config.animations : null;
			}
			var _resolveAnimationDriver, _ref;
			return (_ref = (_resolveAnimationDriver = resolveAnimationDriver(componentContext.animationDriver)) !== null && _resolveAnimationDriver !== void 0 ? _resolveAnimationDriver : resolveAnimationDriver(config === null || config === void 0 ? void 0 : config.animations)) !== null && _ref !== void 0 ? _ref : null;
		}(), useAnimations = animationDriver === null || animationDriver === void 0 ? void 0 : animationDriver.useAnimations, componentState = useComponentState(props, (animationDriver === null || animationDriver === void 0 ? void 0 : animationDriver.isStub) ? null : animationDriver, staticConfig, config), { disabled, groupName, hasAnimationProp, hasEnterStyle, isAnimated, isExiting, isHydrated, presence, presenceState, setState, noClass, state, stateRef, inputStyle, outputStyle, willBeAnimated, willBeAnimatedClient, startedUnhydrated } = componentState;
		hasAnimationProp && !(animationDriver === null || animationDriver === void 0) && animationDriver.avoidReRenders && useIsomorphicLayoutEffect(function() {
			var pendingState = stateRef.current.nextState;
			pendingState && (stateRef.current.nextState = void 0, componentState.setStateShallow(pendingState));
		});
		var allGroupContexts = (0, react.useMemo)(function() {
			var _stateRef_current_group_listeners, _stateRef_current_group;
			if (!groupName || props.passThrough) return groupContextParent;
			var listeners = /* @__PURE__ */ new Set();
			return (_stateRef_current_group = stateRef.current.group) === null || _stateRef_current_group === void 0 || (_stateRef_current_group_listeners = _stateRef_current_group.listeners) === null || _stateRef_current_group_listeners === void 0 || _stateRef_current_group_listeners.clear(), stateRef.current.group = {
				listeners,
				emit(state2) {
					listeners.forEach(function(l) {
						return l(state2);
					});
				},
				subscribe(cb) {
					return listeners.add(cb), listeners.size === 1 && setStateShallow({ hasDynGroupChildren: !0 }), function() {
						listeners.delete(cb), listeners.size === 0 && setStateShallow({ hasDynGroupChildren: !1 });
					};
				}
			}, _objectSpread2(_objectSpread2({}, groupContextParent), {}, { [groupName]: {
				state: { pseudo: defaultComponentStateMounted },
				subscribe: function(listener) {
					var _stateRef_current_group2, dispose = (_stateRef_current_group2 = stateRef.current.group) === null || _stateRef_current_group2 === void 0 ? void 0 : _stateRef_current_group2.subscribe(listener);
					return function() {
						dispose === null || dispose === void 0 || dispose();
					};
				}
			} });
		}, [
			stateRef,
			groupName,
			groupContextParent
		]), setStateShallow = componentState.setStateShallow;
		var renderProp = props.render, element = Component, BaseComponent = isText ? BaseText || element || "span" : BaseView || element || (hasTextAncestor ? "span" : "div"), elementType = BaseComponent;
		animationDriver && isAnimated && animationDriver.needsCustomComponent && (elementType = animationDriver[isText ? "Text" : "View"] || elementType);
		var disableTheme = isHOC;
		var themeStateProps = {
			componentName,
			disable: disableTheme,
			shallow: props.themeShallow,
			debug: debugProp,
			unstyled: props.unstyled
		};
		if ("theme" in props && (themeStateProps.name = props.theme), themeStateProps.needsUpdate = function() {
			return !!stateRef.current.isListeningToTheme;
		}, themeStateProps.deopt = willBeAnimated, false);
		var [theme, themeState] = useThemeWithState(themeStateProps);
		elementType = element || elementType;
		var mediaState = useMedia(componentContext, debugProp);
		setDidGetVariableValue(!1);
		var styleProps = {
			mediaState,
			noClass,
			resolveValues: isAnimated && inputStyle !== "css" || isHOC && state.unmounted == !1 && hasAnimationProp ? "value" : "auto",
			isExiting,
			isAnimated,
			willBeAnimated,
			styledContext: styledContextValue
		}, themeName = (themeState === null || themeState === void 0 ? void 0 : themeState.name) || "";
		var splitStyles = useSplitStyles(props, staticConfig, theme, themeName, state, styleProps, null, componentContext, allGroupContexts, elementType, startedUnhydrated, debugProp, animationDriver), isPassthrough = !splitStyles, contextForOverride = staticConfig.context;
		if (splitStyles === null || splitStyles === void 0 ? void 0 : splitStyles.overriddenContextProps) {
			var _staticConfig_parentStaticConfig, contextForProps = staticConfig.context || ((_staticConfig_parentStaticConfig = staticConfig.parentStaticConfig) === null || _staticConfig_parentStaticConfig === void 0 ? void 0 : _staticConfig_parentStaticConfig.context);
			if (contextForProps) {
				for (var key in splitStyles.overriddenContextProps) overriddenContextProps = overriddenContextProps || {}, overriddenContextProps[key] = splitStyles.overriddenContextProps[key];
				staticConfig.context || (contextForOverride = contextForProps);
			}
		}
		var groupContext = groupName && (allGroupContexts === null || allGroupContexts === void 0 ? void 0 : allGroupContexts[groupName]) || null;
		if (!isPassthrough && groupContext && props.containerType !== "normal") {
			var groupState = groupContext === null || groupContext === void 0 ? void 0 : groupContext.state;
			if (groupState && groupState.layout === void 0) {
				var _splitStyles_style, _splitStyles_style1;
				(!((_splitStyles_style = splitStyles.style) === null || _splitStyles_style === void 0) && _splitStyles_style.width || !((_splitStyles_style1 = splitStyles.style) === null || _splitStyles_style1 === void 0) && _splitStyles_style1.height) && (groupState.layout = {
					width: fromPx(splitStyles.style.width),
					height: fromPx(splitStyles.style.height)
				});
			}
		}
		var hasEnterExitTransition = props.transition && _type_of$1(props.transition) === "object" && !Array.isArray(props.transition) && ("enter" in props.transition || "exit" in props.transition);
		if (!isPassthrough && (hasAnimationProp || groupName) && (animationDriver === null || animationDriver === void 0 ? void 0 : animationDriver.avoidReRenders) && !hasEnterExitTransition) {
			let updateGroupListeners2 = function() {
				var updatedState = stateRef.current.nextState;
				if (groupContext) {
					var { group, hasDynGroupChildren, unmounted, transition } = updatedState, childrenGroupState = _objectWithoutProperties(updatedState, _excluded$2);
					notifyGroupSubscribers(groupContext, stateRef.current.group || null, childrenGroupState);
				}
			};
			var ogSetStateShallow = setStateShallow;
			if (stateRef.current.updateStyleListener = function() {
				var useStyleListener = stateRef.current.useStyleListener;
				if (!useStyleListener) {
					var pendingState = stateRef.current.nextState;
					pendingState && (stateRef.current.nextState = void 0, ogSetStateShallow(pendingState));
					return;
				}
				var updatedState = stateRef.current.nextState || state, mediaState2 = stateRef.current.nextMedia, nextStyles = getSplitStyles(props, staticConfig, theme, themeName, updatedState, mediaState2 ? _objectSpread2(_objectSpread2({}, styleProps), {}, { mediaState: mediaState2 }) : styleProps, null, componentContext, allGroupContexts, elementType, startedUnhydrated, debugProp, animationDriver), effectiveTransition2 = resolveEffectivePseudoTransition(stateRef.current.prevPseudoState, updatedState, nextStyles === null || nextStyles === void 0 ? void 0 : nextStyles.pseudoTransitions, props.transition);
				stateRef.current.prevPseudoState = extractPseudoState(updatedState), useStyleListener((nextStyles === null || nextStyles === void 0 ? void 0 : nextStyles.style) || {}, effectiveTransition2);
			}, componentContext.mediaEmitListeners = componentContext.mediaEmitListeners || /* @__PURE__ */ new Set(), !stateRef.current.mediaEmitCleanup) {
				var updateListener = function(next) {
					var _stateRef_current_updateStyleListener, _stateRef_current;
					stateRef.current.nextMedia = next, (_stateRef_current_updateStyleListener = (_stateRef_current = stateRef.current).updateStyleListener) === null || _stateRef_current_updateStyleListener === void 0 || _stateRef_current_updateStyleListener.call(_stateRef_current);
				};
				componentContext.mediaEmitListeners.add(updateListener), stateRef.current.mediaEmitCleanup = function() {
					var _componentContext_mediaEmitListeners;
					(_componentContext_mediaEmitListeners = componentContext.mediaEmitListeners) === null || _componentContext_mediaEmitListeners === void 0 || _componentContext_mediaEmitListeners.delete(updateListener);
				};
			}
			componentContext.mediaEmit = componentContext.mediaEmit || function(next) {
				var _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
				try {
					for (var _iterator = componentContext.mediaEmitListeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
						var listener = _step.value;
						listener(next);
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
			}, stateRef.current.setStateShallow = function(nextOrGetNext) {
				var prev = stateRef.current.nextState || state, next = typeof nextOrGetNext == "function" ? nextOrGetNext(prev) : nextOrGetNext;
				if (!(next === prev || isEqualShallow(prev, next))) {
					var canAvoidReRender = Object.keys(next).every(function(key3) {
						return avoidReRenderKeys.has(key3);
					}), updatedState = _objectSpread2(_objectSpread2({}, prev), next);
					if (stateRef.current.nextState = updatedState, canAvoidReRender) {
						var _stateRef_current_updateStyleListener, _stateRef_current;
						updateGroupListeners2(), (_stateRef_current_updateStyleListener = (_stateRef_current = stateRef.current).updateStyleListener) === null || _stateRef_current_updateStyleListener === void 0 || _stateRef_current_updateStyleListener.call(_stateRef_current);
					} else ogSetStateShallow(next);
				}
			}, setStateShallow = function(state2) {
				var _stateRef_current_setStateShallow, _stateRef_current;
				(_stateRef_current_setStateShallow = (_stateRef_current = stateRef.current).setStateShallow) === null || _stateRef_current_setStateShallow === void 0 || _stateRef_current_setStateShallow.call(_stateRef_current, state2);
			};
		}
		splitStyles && (props.group && props.untilMeasured === "hide" && !stateRef.current.hasMeasured && (splitStyles.style = splitStyles.style || {}, splitStyles.style.opacity = 0), splitStyles.dynamicThemeAccess != null && (stateRef.current.isListeningToTheme = splitStyles.dynamicThemeAccess));
		var hasRuntimeMediaKeys = (splitStyles === null || splitStyles === void 0 ? void 0 : splitStyles.hasMedia) && splitStyles.hasMedia !== !0;
		setMediaShouldUpdate(componentContext, didGetVariableValue() || hasRuntimeMediaKeys || noClass && (splitStyles === null || splitStyles === void 0 ? void 0 : splitStyles.hasMedia) === !0, hasRuntimeMediaKeys ? splitStyles.hasMedia : null);
		var { viewProps: viewPropsIn, pseudos, style: splitStylesStyle, classNames, pseudoGroups, mediaGroups } = splitStyles || {}, propsWithAnimation = props, _ref2 = viewPropsIn || {}, { asChild, children, themeShallow, spaceDirection: _spaceDirection, onPress, onLongPress, onPressIn, onPressOut, onHoverIn, onHoverOut, onMouseUp, onMouseDown, onMouseEnter, onMouseLeave, onFocus, onBlur, separator, passThrough, forceStyle: _forceStyle, onClick, theme: _themeProp } = _ref2, nonTamaguiProps = _objectWithoutProperties(_ref2, _excluded2$1), viewProps = nonTamaguiProps;
		props.forceStyle && (viewProps.forceStyle = props.forceStyle), isHOC && (typeof _themeProp < "u" && (viewProps.theme = _themeProp), typeof passThrough < "u" && (viewProps.passThrough = passThrough));
		var animationStyles, shouldUseAnimation = (inputStyle === "css" ? willBeAnimatedClient : willBeAnimated) && useAnimations && !isHOC, animatedRef;
		if (shouldUseAnimation) {
			var useStyleEmitter = (animationDriver === null || animationDriver === void 0 ? void 0 : animationDriver.avoidReRenders) ? function(listener) {
				stateRef.current.useStyleListener = listener;
			} : void 0, effectiveTransition = resolveEffectivePseudoTransition(stateRef.current.prevPseudoState, state, splitStyles === null || splitStyles === void 0 ? void 0 : splitStyles.pseudoTransitions, props.transition);
			splitStyles && (splitStyles.effectiveTransition = effectiveTransition), stateRef.current.prevPseudoState = extractPseudoState(state);
			var animations = useAnimations({
				props: propsWithAnimation,
				style: isHydrated ? splitStylesStyle || {} : _objectSpread2({}, splitStylesStyle),
				styleState: splitStyles,
				useStyleEmitter,
				presence,
				componentState: state,
				styleProps,
				theme,
				themeName,
				pseudos: pseudos || null,
				staticConfig,
				stateRef
			});
			animations && (animations.ref && (animatedRef = animations.ref), isHydrated && animations && (animationStyles = animations.style, viewProps.style = animationStyles, animations.className && (viewProps.className = `${state.unmounted === "should-enter" ? "t_unmounted " : ""}${viewProps.className || ""} ${animations.className}`)));
		}
		!isPassthrough && groupContext && props.containerType !== "normal" && (nonTamaguiProps.onLayout = composeEventHandlers(nonTamaguiProps.onLayout, function(e) {
			var _stateRef_current_group, layout = e.nativeEvent.layout;
			groupContext.state.layout = layout, (_stateRef_current_group = stateRef.current.group) === null || _stateRef_current_group === void 0 || _stateRef_current_group.emit({ layout }), !stateRef.current.hasMeasured && props.untilMeasured === "hide" && setState(function(prev) {
				return _objectSpread2({}, prev);
			}), stateRef.current.hasMeasured = !0;
		})), viewProps = ((_hooks_usePropsTransform = hooks.usePropsTransform) === null || _hooks_usePropsTransform === void 0 ? void 0 : _hooks_usePropsTransform.call(hooks, elementType, nonTamaguiProps, stateRef, stateRef.current.willHydrate)) || nonTamaguiProps, stateRef.current.composedRef || (stateRef.current.composedRef = composeRefs(function(x) {
			return stateRef.current.host = x;
		}, forwardedRef, setElementProps, animatedRef)), viewProps.ref = stateRef.current.composedRef, usePointerEvents(props, viewProps);
		var unPress = function() {
			setStateShallow({
				press: !1,
				pressIn: !1
			});
		};
		useIsomorphicLayoutEffect(function() {
			if (state.unmounted === !0 && hasEnterStyle) {
				setStateShallow({ unmounted: "should-enter" });
				return;
			}
			if (state.unmounted) {
				if (inputStyle === "css") {
					var cancelled = !1;
					return requestAnimationFrame(function() {
						cancelled || requestAnimationFrame(function() {
							cancelled || setStateShallow({ unmounted: !1 });
						});
					}), function() {
						cancelled = !0;
					};
				}
				setStateShallow({ unmounted: !1 });
			}
			return function() {
				var _stateRef_current_mediaEmitCleanup, _stateRef_current;
				componentSetStates.delete(setState), (_stateRef_current_mediaEmitCleanup = (_stateRef_current = stateRef.current).mediaEmitCleanup) === null || _stateRef_current_mediaEmitCleanup === void 0 || _stateRef_current_mediaEmitCleanup.call(_stateRef_current);
			};
		}, [state.unmounted, inputStyle]), useIsomorphicLayoutEffect(function() {
			if (!disabled && !(!pseudoGroups && !mediaGroups) && allGroupContexts) return subscribeToContextGroup({
				groupContext: allGroupContexts,
				setStateShallow,
				mediaGroups,
				pseudoGroups
			});
		}, [
			allGroupContexts,
			disabled,
			pseudoGroups ? objectIdentityKey(pseudoGroups) : 0,
			mediaGroups ? objectIdentityKey(mediaGroups) : 0
		]);
		var groupEmitter = stateRef.current.group;
		useIsomorphicLayoutEffect(function() {
			!groupContext || !groupEmitter || notifyGroupSubscribers(groupContext, groupEmitter, state);
		}, [
			groupContext,
			groupEmitter,
			state
		]);
		var runtimePressStyle = !disabled && noClass && (pseudos === null || pseudos === void 0 ? void 0 : pseudos.pressStyle), runtimeFocusStyle = !disabled && noClass && (pseudos === null || pseudos === void 0 ? void 0 : pseudos.focusStyle), runtimeFocusVisibleStyle = !disabled && noClass && (pseudos === null || pseudos === void 0 ? void 0 : pseudos.focusVisibleStyle), attachFocus = !!(runtimePressStyle || runtimeFocusStyle || runtimeFocusVisibleStyle || onFocus || onBlur || componentContext.setParentFocusState), hasDynamicGroupChildren = !!(groupName && state.hasDynGroupChildren), attachPress = !!(hasDynamicGroupChildren || runtimePressStyle || onPress || onPressOut || onPressIn || onMouseDown || onMouseUp || onLongPress || onClick || (pseudos === null || pseudos === void 0 ? void 0 : pseudos.focusVisibleStyle)), runtimeHoverStyle = !disabled && noClass && (pseudos === null || pseudos === void 0 ? void 0 : pseudos.hoverStyle), needsHoverState = !!(hasDynamicGroupChildren || runtimeHoverStyle), attachHover = false, shouldAttach = !disabled && !props.asChild && !!(attachFocus || attachPress || attachHover || runtimePressStyle || runtimeHoverStyle || runtimeFocusStyle), needsPressState = !!(hasDynamicGroupChildren || runtimePressStyle);
		var events = shouldAttach ? _objectSpread2(_objectSpread2(_objectSpread2({ onPressOut: attachPress ? function(e) {
			unPress(), onPressOut === null || onPressOut === void 0 || onPressOut(e), onMouseUp === null || onMouseUp === void 0 || onMouseUp(e);
		} : void 0 }, (attachHover || attachPress) && {
			onMouseEnter: function(e) {
				var next = {};
				needsHoverState && !lastInteractionWasTouch.value && (next.hover = !0), needsPressState && state.pressIn && (next.press = !0), setStateShallow(next), onHoverIn === null || onHoverIn === void 0 || onHoverIn(e), onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter(e);
			},
			onMouseLeave: function(e) {
				var next = {};
				needsHoverState && (next.hover = !1), needsPressState && (next.press = !1, next.pressIn = !1), setStateShallow(next), onHoverOut === null || onHoverOut === void 0 || onHoverOut(e), onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave(e);
			}
		}), {}, {
			onPressIn: attachPress ? function(e) {
				needsPressState && setStateShallow({
					press: !0,
					pressIn: !0
				}), onPressIn === null || onPressIn === void 0 || onPressIn(e), onMouseDown === null || onMouseDown === void 0 || onMouseDown(e);
			} : void 0,
			onPress: attachPress ? function(e) {
				unPress(), onPress === null || onPress === void 0 || onPress(e);
			} : void 0
		}, attachPress && onLongPress && { onLongPress: function(e) {
			unPress(), onLongPress === null || onLongPress === void 0 || onLongPress(e);
		} }), attachFocus && {
			onFocus: function(e) {
				var next = {};
				componentContext.setParentFocusState && (componentContext.setParentFocusState({ focusWithin: !0 }), next.focusWithin = !0), (pseudos === null || pseudos === void 0 ? void 0 : pseudos.focusVisibleStyle) && lastInteractionWasKeyboard.value ? next.focusVisible = !0 : next.focus = !0, setStateShallow(next), onFocus === null || onFocus === void 0 || onFocus(e);
			},
			onBlur: function(e) {
				componentContext.setParentFocusState && componentContext.setParentFocusState({ focusWithin: !1 }), setStateShallow({
					focus: !1,
					focusVisible: !1,
					focusWithin: !1
				}), onBlur === null || onBlur === void 0 || onBlur(e);
			}
		}) : null;
		if (events && !asChild) {
			var _viewProps_focusable;
			Object.assign(events, {
				cancelable: !viewProps.rejectResponderTermination,
				disabled,
				hitSlop: viewProps.hitSlop,
				delayLongPress: viewProps.delayLongPress,
				delayPressIn: viewProps.delayPressIn,
				delayPressOut: viewProps.delayPressOut,
				focusable: (_viewProps_focusable = viewProps.focusable) !== null && _viewProps_focusable !== void 0 ? _viewProps_focusable : !0,
				minPressDuration: 0
			});
		}
		var pressGesture = useEvents(events, viewProps, stateRef, staticConfig, isHOC, isInsideNativeMenu);
		if (asChild) if (elementType = Slot, 0);
		else Object.assign(viewProps, {
			onPress,
			onLongPress
		});
		var content;
		if (isPassthrough) content = /* @__PURE__ */ react.default.createElement(BaseComponent, { style: { display: "contents" } }, propsIn.children);
		else {
			hooks.useChildren && (content = hooks.useChildren(elementType, content || children, viewProps));
			var isRenderPropString = typeof renderProp == "string";
			if (renderProp && !isRenderPropString) {
				var out = getCustomRender(renderProp, content || children, viewProps, componentState);
				out && (viewProps = out.viewProps, elementType = out.elementType);
			}
			content || (isRenderPropString && viewProps.render, content = /* @__PURE__ */ react.default.createElement(elementType, viewProps, content || children));
		}
		content = wrapWithGestureDetector(content, pressGesture, stateRef, isHOC, !isHOC && Component && typeof Component != "string");
		var ResetPresence = animationDriver === null || animationDriver === void 0 ? void 0 : animationDriver.ResetPresence, needsReset = !!(!asChild && splitStyles && !isHOC && ResetPresence && willBeAnimated && (hasEnterStyle || presenceState)), hasEverReset = stateRef.current.hasEverResetPresence;
		needsReset && !hasEverReset && (stateRef.current.hasEverResetPresence = !0);
		if ((needsReset || hasEverReset) && ResetPresence && (content = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ResetPresence, {
			disabled: !needsReset,
			children: content
		})), ("focusWithinStyle" in propsIn || !(pseudos === null || pseudos === void 0) && pseudos.focusWithinStyle) && (content = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComponentContext.Provider, _objectSpread2(_objectSpread2({}, componentContext), {}, {
			setParentFocusState: setStateShallow,
			children: content
		}))), "group" in props && (content = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(GroupContext.Provider, {
			value: allGroupContexts,
			children: content
		})), content = disableTheme || !splitStyles ? content : getThemedChildren(themeState, content, themeStateProps, !1, stateRef), overriddenContextProps && contextForOverride) {
			var Provider = contextForOverride.Provider;
			for (var key1 in styledContextValue) key1 in overriddenContextProps || (overriddenContextProps[key1] = styledContextValue[key1]);
			content = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Provider, _objectSpread2(_objectSpread2({ __disableMergeDefaultValues: !0 }, overriddenContextProps), {}, { children: content }));
		}
		return content;
	});
	function notifyGroupSubscribers(groupContext, groupEmitter, pseudo) {
		if (!(!groupContext || !groupEmitter)) {
			var nextState = _objectSpread2(_objectSpread2({}, groupContext.state), {}, { pseudo });
			groupEmitter.emit(nextState), groupContext.state = nextState;
		}
	}
	staticConfig.componentName && (component.displayName = staticConfig.componentName);
	var res = component;
	res = /* @__PURE__ */ react.default.memo(res), res.staticConfig = staticConfig;
	function extendStyledConfig(extended) {
		return _objectSpread2(_objectSpread2(_objectSpread2({}, staticConfig), extended), {}, {
			neverFlatten: !0,
			isHOC: !0,
			isStyledHOC: !1
		});
	}
	function styleable(Component2, options) {
		var out = typeof Component2 == "function" && Component2.length === 1 ? Component2 : /* @__PURE__ */ react.default.forwardRef(Component2), extendedConfig = extendStyledConfig(options === null || options === void 0 ? void 0 : options.staticConfig);
		return out = (options === null || options === void 0 ? void 0 : options.disableTheme) ? out : themeable(out, extendedConfig, !0), (extendedConfig.memo || process.env.TAMAGUI_MEMOIZE_STYLEABLE) && (out = /* @__PURE__ */ react.default.memo(out)), out.staticConfig = extendedConfig, out.styleable = styleable, out;
	}
	return res.styleable = styleable, res;
}
var fromPx = function(val) {
	return typeof val == "number" ? val : typeof val == "string" ? +val.replace("px", "") : 0;
}, getCustomRender = function(renderProp, content, viewProps, state) {
	if (typeof renderProp == "function") renderProp = getRenderElementForPlatform(renderProp(viewProps, state));
	if (renderProp && (typeof renderProp > "u" ? "undefined" : _type_of$1(renderProp)) === "object" && /* @__PURE__ */ react.default.isValidElement(renderProp)) {
		if (getRenderElementForPlatform(renderProp)) {
			var elementProps = renderProp.props, mergedProps = elementProps ? mergeRenderElementProps(elementProps, viewProps, content) : viewProps;
			return {
				elementType: renderProp.type,
				viewProps: mergedProps
			};
		}
	}
};
function getRenderElementForPlatform(potential) {
	if (!isHTMLElement(potential)) return potential;
}
function isHTMLElement(el) {
	return typeof el.type == "string" && el.type[0] === el.type[0].toLowerCase();
}
//#endregion
//#region ../web/dist/esm/helpers/getExpandedShorthands.native.js
function getExpandedShorthands(props) {
	var shorthands = getConfig().shorthands;
	if (!shorthands) return props;
	var res = {};
	for (var key in props) res[shorthands[key] || key] = props[key];
	return res;
}
function getExpandedShorthand(propKey, props) {
	var shorthands = getConfig().inverseShorthands, _props_propKey;
	return (_props_propKey = props[propKey]) !== null && _props_propKey !== void 0 ? _props_propKey : props[shorthands[propKey]];
}
//#endregion
//#region ../web/dist/esm/helpers/getShorthandValue.native.js
var inverseShorthands = null, getShorthandValue = function(props, key) {
	inverseShorthands || (inverseShorthands = getConfig().inverseShorthands);
	var _props_key;
	return (_props_key = props[key]) !== null && _props_key !== void 0 ? _props_key : inverseShorthands ? props[inverseShorthands[key]] : void 0;
};
//#endregion
//#region ../web/dist/esm/helpers/getThemeCSSRules.native.js
function getThemeCSSRules() {
	return [];
}
//#endregion
//#region ../web/dist/esm/helpers/registerCSSVariable.native.js
var registerCSSVariable = function(v) {
	process.env.TAMAGUI_DID_OUTPUT_CSS || tokensValueToVariable.set(getVariableValue(v), v);
}, variableToCSS = function(v) {
	var unitless = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
	return process.env.TAMAGUI_DID_OUTPUT_CSS ? "" : `--${process.env.TAMAGUI_CSS_VARIABLE_PREFIX || ""}${createCSSVariable(v.name, !1)}:${!unitless && typeof v.val == "number" ? `${v.val}px` : v.val}`;
}, tokensValueToVariable = /* @__PURE__ */ new Map(), autoVariables = [], mutatedAutoVariables = [];
//#endregion
//#region ../web/dist/esm/helpers/insertStyleRule.native.js
function scanAllSheets() {
	arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
	arguments.length > 1 && arguments[1];
	if (!process.env.TAMAGUI_DID_OUTPUT_CSS) return;
}
var bailAfterEnv = process.env.TAMAGUI_BAIL_AFTER_SCANNING_X_CSS_RULES;
bailAfterEnv && +bailAfterEnv;
function stopAccumulatingRules() {}
function setNonce(_) {}
function insertStyleRules(rulesToInsert) {}
process.env.TAMAGUI_INSERT_SELECTOR_TRIES && +process.env.TAMAGUI_INSERT_SELECTOR_TRIES;
//#endregion
//#region ../web/dist/esm/helpers/isTamaguiComponent.native.js
function isTamaguiComponent(comp, name) {
	var config = comp === null || comp === void 0 ? void 0 : comp.staticConfig;
	return !!(config && (!name || name === config.componentName));
}
//#endregion
//#region ../web/dist/esm/helpers/isTamaguiElement.native.js
var isTamaguiElement = function(child, name) {
	return /* @__PURE__ */ react.default.isValidElement(child) && isTamaguiComponent(child.type, name);
};
//#endregion
//#region ../web/dist/esm/helpers/proxyThemeToParents.native.js
var themesRaw = {};
function proxyThemesToParents(dedupedThemes) {
	var _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
	try {
		for (var _iterator = dedupedThemes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
			var { names, theme } = _step.value, _iteratorNormalCompletion1 = !0, _didIteratorError1 = !1, _iteratorError1 = void 0;
			try {
				for (var _iterator1 = names[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = !0) {
					var name = _step1.value;
					themesRaw[name] = theme;
				}
			} catch (err) {
				_didIteratorError1 = !0, _iteratorError1 = err;
			} finally {
				try {
					!_iteratorNormalCompletion1 && _iterator1.return != null && _iterator1.return();
				} finally {
					if (_didIteratorError1) throw _iteratorError1;
				}
			}
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
	var themes = {}, _iteratorNormalCompletion2 = !0, _didIteratorError2 = !1, _iteratorError2 = void 0;
	try {
		for (var _iterator2 = dedupedThemes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = !0) {
			var { names: names1, theme: theme1 } = _step2.value, _iteratorNormalCompletion3 = !0, _didIteratorError3 = !1, _iteratorError3 = void 0;
			try {
				for (var _iterator3 = names1[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = !0) {
					var themeName = _step3.value;
					themes[themeName] = proxyThemeToParents(themeName, theme1);
				}
			} catch (err) {
				_didIteratorError3 = !0, _iteratorError3 = err;
			} finally {
				try {
					!_iteratorNormalCompletion3 && _iterator3.return != null && _iterator3.return();
				} finally {
					if (_didIteratorError3) throw _iteratorError3;
				}
			}
		}
	} catch (err) {
		_didIteratorError2 = !0, _iteratorError2 = err;
	} finally {
		try {
			!_iteratorNormalCompletion2 && _iterator2.return != null && _iterator2.return();
		} finally {
			if (_didIteratorError2) throw _iteratorError2;
		}
	}
	return themes;
}
function proxyThemeToParents(themeName, theme) {
	var out = {}, cur = [], parents = themeName.split("_").slice(0, -1).map(function(part) {
		return cur.push(part), cur.join("_");
	}), _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
	try {
		for (var _iterator = parents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
			var parent = _step.value;
			Object.assign(out, themesRaw[parent]);
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
	return Object.assign(out, theme), out;
}
//#endregion
//#region ../web/dist/esm/helpers/proxyThemeVariables.native.js
function proxyThemeVariables(obj) {
	return new Proxy(obj || {}, {
		has(target, key) {
			return Reflect.has(target, removeStarting$(key));
		},
		get(target, key) {
			return Reflect.get(target, removeStarting$(key));
		}
	});
}
var removeStarting$ = function(str) {
	return typeof str == "string" && str[0] === "$" ? str.slice(1) : str;
};
//#endregion
//#region ../web/dist/esm/helpers/themes.native.js
function ensureThemeVariable(theme, key) {
	var val = theme[key];
	isVariable(val) ? val.name !== key && (theme[key] = createVariable({
		key: val.name,
		name: key,
		val: val.val
	})) : theme[key] = createVariable({
		key,
		name: key,
		val
	});
}
//#endregion
//#region ../web/dist/esm/helpers/wrapStyleTags.native.js
function getStyleTags(styles) {}
//#endregion
//#region ../web/dist/esm/createFont.native.js
var fontWeights = [
	"100",
	"200",
	"300",
	"400",
	"500",
	"600",
	"700",
	"800",
	"900"
], processSection = function(section, keys, defaultValue) {
	if (typeof section == "string") return section;
	var sectionKeys = Object.keys(section), fillValue = section[sectionKeys[0]];
	return Object.fromEntries([.../* @__PURE__ */ new Set([...keys, ...sectionKeys])].map(function(key) {
		var _section_key, _ref, value = (_ref = (_section_key = section[key]) !== null && _section_key !== void 0 ? _section_key : defaultValue) !== null && _ref !== void 0 ? _ref : fillValue;
		return fillValue = value, defaultValue = value, [key, value];
	}));
}, createFont = function(font) {
	var sizeKeys = Object.keys(font.size || {}), processedFont = Object.fromEntries(Object.entries(font).map(function(param) {
		var [key, section] = param;
		return [key, processSection(section, key === "face" ? fontWeights : sizeKeys, key === "face" ? { normal: font.family } : void 0)];
	}));
	return Object.freeze(processedFont);
};
//#endregion
//#region ../web/dist/esm/createShorthands.native.js
function createShorthands(shorthands) {
	return Object.freeze(shorthands);
}
//#endregion
//#region ../web/dist/esm/createVariables.native.js
function _type_of(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var cache = /* @__PURE__ */ new WeakMap(), createVariables = function(tokens) {
	var parentPath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
	arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
	if (cache.has(tokens)) return tokens;
	var res = {}, i = 0;
	for (var keyIn in tokens) {
		i++;
		var val = tokens[keyIn], isPrefixed = keyIn[0] === "$", keyWithPrefix = isPrefixed ? keyIn : `$${keyIn}`, key = isPrefixed ? keyWithPrefix.slice(1) : keyIn;
		if (isVariable(val)) {
			res[key] = val;
			continue;
		}
		var niceKey = simpleHash(key, 1e3), name = parentPath && parentPath !== "t-color" ? `${parentPath}-${niceKey}` : `c-${niceKey}`;
		if (val && (typeof val > "u" ? "undefined" : _type_of(val)) === "object" && "needsPx" in val && "val" in val) {
			res[key] = createVariable({
				val: val.val,
				name,
				key: keyWithPrefix
			});
			continue;
		}
		if (val && (typeof val > "u" ? "undefined" : _type_of(val)) === "object") {
			res[key] = createVariables(tokens[key], name, !1);
			continue;
		}
		res[key] = isVariable(val) ? val : createVariable({
			val,
			name,
			key: keyWithPrefix
		});
	}
	return cache.set(res, !0), res;
};
//#endregion
//#region ../web/dist/esm/helpers/defaultAnimationDriver.native.js
var noAnimationDriver = function(method) {
	console.warn(`No animation driver configured. To use ${method}, you must pass \`animations\` to createTamagui. See: https://tamagui.dev/docs/core/animations`);
}, createEmptyAnimationDriver = function() {
	return {
		isReactNative: !1,
		inputStyle: "css",
		outputStyle: "css",
		isStub: !0,
		animations: {},
		useAnimations: function() {
			return noAnimationDriver("animations");
		},
		usePresence: function() {
			return noAnimationDriver("usePresence");
		},
		ResetPresence: function() {
			return noAnimationDriver("ResetPresence");
		},
		useAnimatedNumber: function() {
			return noAnimationDriver("useAnimatedNumber");
		},
		useAnimatedNumberStyle: function() {
			return noAnimationDriver("useAnimatedNumberStyle");
		},
		useAnimatedNumbersStyle: function() {
			return noAnimationDriver("useAnimatedNumbersStyle");
		},
		useAnimatedNumberReaction: function() {
			return noAnimationDriver("useAnimatedNumberReaction");
		}
	};
}, defaultAnimationDriver = createEmptyAnimationDriver();
//#endregion
//#region ../web/dist/esm/helpers/createDesignSystem.native.js
function getFontPropertyDeclarations(fontParsed) {
	var tokenKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "$true", props = ["font-family: var(--f-family)"], getVarRef = function(obj) {
		var val = obj === null || obj === void 0 ? void 0 : obj[tokenKey];
		if (isVariable(val)) return getVariableVariable(val);
	}, letterSpacing = getVarRef(fontParsed.letterSpacing);
	letterSpacing && props.push(`letter-spacing: ${letterSpacing}`);
	var lineHeight = getVarRef(fontParsed.lineHeight);
	lineHeight && props.push(`line-height: ${lineHeight}`);
	var fontStyle = getVarRef(fontParsed.style);
	fontStyle && props.push(`font-style: ${fontStyle}`);
	var fontWeight = getVarRef(fontParsed.weight);
	return fontWeight && props.push(`font-weight: ${fontWeight}`), props;
}
function createTokenCSS(tokens, shouldTokenCategoryHaveUnits) {
	if (!process.env.TAMAGUI_DID_OUTPUT_CSS) {
		var declarations = [], sortedTokenKeys = Object.keys(tokens).sort(), _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
		try {
			for (var _iterator = sortedTokenKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
				var key = _step.value, sortedSubKeys = Object.keys(tokens[key]).sort(), _iteratorNormalCompletion1 = !0, _didIteratorError1 = !1, _iteratorError1 = void 0;
				try {
					for (var _iterator1 = sortedSubKeys[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = !0) {
						var skey = _step1.value;
						tokens[key][skey];
					}
				} catch (err) {
					_didIteratorError1 = !0, _iteratorError1 = err;
				} finally {
					try {
						!_iteratorNormalCompletion1 && _iterator1.return != null && _iterator1.return();
					} finally {
						if (_didIteratorError1) throw _iteratorError1;
					}
				}
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
		return declarations;
	}
	return [];
}
function createFontCSS(fontsParsed, registerFontVariables) {
	if (!process.env.TAMAGUI_DID_OUTPUT_CSS) {
		var fontDeclarations = {};
		if (!fontsParsed) return fontDeclarations;
		var sortedFontKeys = Object.keys(fontsParsed).sort(), _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
		try {
			for (var _iterator = sortedFontKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
				var key = _step.value, fontParsed = fontsParsed[key], [name, language] = key.includes("_") ? key.split("_") : [key], fontVars = registerFontVariables(fontParsed);
				fontDeclarations[key] = {
					name: name.slice(1),
					declarations: fontVars,
					language,
					fontParsed
				};
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
		return fontDeclarations;
	}
	return {};
}
function buildCSSRuleSets(declarations, fontDeclarations) {
	var defaultFontToken = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "$true";
	if (!process.env.TAMAGUI_DID_OUTPUT_CSS) {
		let declarationsToRuleSet2 = function(decs) {
			return `:root${arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""} {${sep}${[...decs].join(`;${sep}`)}
}`;
		};
		var cssRuleSets = [], sep = " ";
		declarations.length && cssRuleSets.push(declarationsToRuleSet2(declarations));
		var fontSelectors = [], sortedFontDeclarationKeys = Object.keys(fontDeclarations).sort(), _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
		try {
			for (var _iterator = sortedFontDeclarationKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
				var { name, declarations: _$declarations, language = "default" } = fontDeclarations[_step.value], fontSelector = `.font_${name}`;
				fontSelectors.push(fontSelector);
				var langSelector = `:root .t_lang-${name}-${language} ${fontSelector}`, specificRuleSet = declarationsToRuleSet2(_$declarations, language === "default" ? ` ${fontSelector}, ${langSelector}` : langSelector);
				cssRuleSets.push(specificRuleSet);
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
		if (fontSelectors.length) {
			var firstFont = fontDeclarations[sortedFontDeclarationKeys[0]];
			if (firstFont === null || firstFont === void 0 ? void 0 : firstFont.fontParsed) {
				var fontProps = getFontPropertyDeclarations(firstFont.fontParsed, defaultFontToken), sharedSelectors = [...fontSelectors, ".is_View"].join(", ");
				cssRuleSets.push(`${sharedSelectors} {${fontProps.join("; ")}}`);
			}
		}
		return cssRuleSets;
	}
	return [];
}
function createThemeCSS(dedupedThemes, configIn) {
	if (!process.env.TAMAGUI_DID_OUTPUT_CSS) return [];
	return [];
}
function getCSS(themeConfig) {
	arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
	arguments.length > 2 && arguments[2];
	if (!process.env.TAMAGUI_DID_OUTPUT_CSS && !1);
	return "";
}
//#endregion
//#region ../web/dist/esm/insertFont.native.js
function insertFont(name, fontIn) {
	var tokened = createVariables(createFont(fontIn), name), parsed = parseFont(tokened);
	return setConfigFont(name, tokened, parsed), parsed;
}
var updateFont = insertFont;
function parseFont(definition) {
	var parsed = {};
	for (var attrKey in definition) {
		var attr = definition[attrKey];
		if (attrKey === "family" || attrKey === "face") parsed[attrKey] = attr;
		else {
			parsed[attrKey] = {};
			for (var key in attr) {
				var _val_val, val = attr[key];
				((_val_val = val.val) === null || _val_val === void 0 ? void 0 : _val_val[0]) === "$" && (val = val.val), parsed[attrKey][`$${key}`] = val;
			}
		}
	}
	return parsed;
}
function registerFontVariables(parsedFont) {
	if (!process.env.TAMAGUI_DID_OUTPUT_CSS) {
		var response = [];
		for (var fkey in parsedFont) if (fkey !== "face") {
			if (fkey === "family") {
				var val = parsedFont[fkey];
				registerCSSVariable(val), response.push(variableToCSS(val));
			} else for (var fskey in parsedFont[fkey]) if (typeof parsedFont[fkey][fskey] != "string") {
				var val1 = parsedFont[fkey][fskey];
				registerCSSVariable(val1), response.push(variableToCSS(val1));
			}
		}
		return response;
	}
	return [];
}
//#endregion
//#region ../web/dist/esm/Tamagui.native.js
var Tamagui = void 0, identifierToValue = /* @__PURE__ */ new Map(), getValueFromIdentifier = function(identifier) {
	return identifierToValue.get(identifier);
}, setIdentifierValue = function(identifier, value) {
	identifierToValue.set(identifier, value);
};
//#endregion
//#region ../web/dist/esm/createTamagui.native.js
function shouldTokenCategoryHaveUnits(category) {
	return (/* @__PURE__ */ new Set([
		"size",
		"space",
		"radius"
	])).has(category);
}
function createTamagui$1(configIn) {
	var _configIn_settings, _configIn_settings1, existingConfig = getConfigMaybe();
	existingConfig && (configIn = _objectSpread2(_objectSpread2({}, existingConfig), configIn));
	var tokensParsed = {}, tokens = createVariables(configIn.tokens || {});
	if (configIn.tokens) {
		var tokensMerged = {};
		for (var cat in tokens) {
			tokensParsed[cat] = {}, tokensMerged[cat] = {};
			var tokenCat = tokens[cat];
			for (var key in tokenCat) {
				var val = tokenCat[key], prefixedKey = `$${key}`;
				tokensParsed[cat][prefixedKey] = val, tokensMerged[cat][prefixedKey] = val, tokensMerged[cat][key] = val;
			}
		}
		setTokens(tokensMerged);
	}
	var foundThemes;
	if (configIn.themes) {
		var noThemes = Object.keys(configIn.themes).length === 0;
		noThemes && !process.env.TAMAGUI_DID_OUTPUT_CSS && (foundThemes = scanAllSheets(noThemes, tokensParsed));
	}
	var fontSizeTokens = null, fontsParsed;
	if (configIn.fonts) {
		var fontTokens = Object.fromEntries(Object.entries(configIn.fonts).map(function(param) {
			var [k, v] = param;
			return [k, createVariables(v, "f", !0)];
		}));
		fontsParsed = function() {
			var res = {};
			for (var familyName in fontTokens) {
				var font = fontTokens[familyName], fontParsed = parseFont(font);
				res[`$${familyName}`] = fontParsed, !fontSizeTokens && fontParsed.size && (fontSizeTokens = new Set(Object.keys(fontParsed.size)));
			}
			return res;
		}();
	}
	var specificTokens = {}, themeConfig = function() {
		var _foundThemes;
		var sortedTokenKeys = Object.keys(tokens).sort(), _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
		try {
			for (var _iterator = sortedTokenKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
				var key2 = _step.value, sortedSubKeys = Object.keys(tokens[key2]).sort(), _iteratorNormalCompletion1 = !0, _didIteratorError1 = !1, _iteratorError1 = void 0;
				try {
					for (var _iterator1 = sortedSubKeys[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = !0) {
						var skey = _step1.value, variable = tokens[key2][skey];
						if (specificTokens[`$${key2}.${skey}`] = variable, false);
					}
				} catch (err) {
					_didIteratorError1 = !0, _iteratorError1 = err;
				} finally {
					try {
						!_iteratorNormalCompletion1 && _iterator1.return != null && _iterator1.return();
					} finally {
						if (_didIteratorError1) throw _iteratorError1;
					}
				}
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
		var cssRuleSets = buildCSSRuleSets(createTokenCSS(tokens, shouldTokenCategoryHaveUnits), createFontCSS(fontsParsed, registerFontVariables)), themesIn = configIn.themes, dedupedThemes = (_foundThemes = foundThemes) !== null && _foundThemes !== void 0 ? _foundThemes : getThemesDeduped(themesIn, tokens.color);
		return {
			themes: proxyThemesToParents(dedupedThemes),
			cssRuleSets,
			getThemeRulesSets() {
				return createThemeCSS(dedupedThemes, configIn);
			}
		};
	}(), userShorthands = configIn.shorthands || {}, shorthands = _objectSpread2(_objectSpread2({}, builtinShorthands), userShorthands), lastCSSIndex = { value: -1 }, getCSS$1 = function() {
		return getCSS(themeConfig, arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, lastCSSIndex);
	}, getNewCSS = function(opts) {
		return getCSS$1(_objectSpread2(_objectSpread2({}, opts), {}, { sinceLastCall: !0 }));
	}, defaultFontSetting = (_configIn_settings = configIn.settings) === null || _configIn_settings === void 0 ? void 0 : _configIn_settings.defaultFont, defaultFont = function() {
		var val2 = defaultFontSetting;
		return (val2 === null || val2 === void 0 ? void 0 : val2[0]) === "$" && (val2 = val2.slice(1)), val2;
	}();
	!((_configIn_settings1 = configIn.settings) === null || _configIn_settings1 === void 0) && _configIn_settings1.defaultPosition;
	var defaultProps = configIn.defaultProps || {}, defaultFontToken = defaultFont ? `$${defaultFont}` : "", inputAnimations = configIn.animations, resolvedDriver = resolveAnimationDriver(inputAnimations), isMultiDriver = resolvedDriver !== null && resolvedDriver !== inputAnimations, resolvedAnimations = resolvedDriver !== null && resolvedDriver !== void 0 ? resolvedDriver : inputAnimations, animationDrivers = isMultiDriver ? inputAnimations : void 0, config = _objectSpread2(_objectSpread2({
		fonts: {},
		onlyAllowShorthands: !1,
		fontLanguages: [],
		media: {}
	}, configIn), {}, {
		animations: resolvedAnimations !== null && resolvedAnimations !== void 0 ? resolvedAnimations : defaultAnimationDriver,
		animationDrivers,
		defaultProps,
		settings: _objectSpread2({ webContainerType: "inline-size" }, configIn.settings),
		tokens,
		shorthands,
		userShorthands,
		inverseShorthands: shorthands ? Object.fromEntries(Object.entries(shorthands).map(function(param) {
			var [k, v] = param;
			return [v, k];
		})) : {},
		themes: themeConfig.themes,
		fontsParsed: fontsParsed || {},
		themeConfig,
		tokensParsed,
		parsed: !0,
		getNewCSS,
		getCSS: getCSS$1,
		defaultFont,
		fontSizeTokens: fontSizeTokens || /* @__PURE__ */ new Set(),
		specificTokens,
		defaultFontToken
	});
	if (setConfig(config), configureMedia(config), false);
	return config;
}
function getThemesDeduped(themes, colorTokens) {
	var dedupedThemes = [], existing = /* @__PURE__ */ new Map(), sortedThemeNames = Object.keys(themes).sort(), _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
	try {
		for (var _iterator = sortedThemeNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
			var themeName = _step.value, darkOrLightSpecificPrefix = themeName.startsWith("dark") ? "dark" : themeName.startsWith("light") ? "light" : "", rawTheme = themes[themeName], key = darkOrLightSpecificPrefix + JSON.stringify(rawTheme);
			if (existing.has(key)) {
				existing.get(key).names.push(themeName);
				continue;
			}
			var theme = _objectSpread2(_objectSpread2({}, colorTokens), rawTheme);
			for (var key1 in theme) ensureThemeVariable(theme, key1);
			var deduped = {
				names: [themeName],
				theme
			};
			dedupedThemes.push(deduped), existing.set(key, deduped);
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
	return dedupedThemes;
}
var builtinShorthands = {
	bblr: "borderBottomLeftRadius",
	bbrr: "borderBottomRightRadius",
	bbs: "borderBottomStyle",
	bls: "borderLeftStyle",
	brc: "borderRightColor",
	brs: "borderRightStyle",
	brw: "borderRightWidth",
	bs: "borderStyle",
	btc: "borderTopColor",
	btlr: "borderTopLeftRadius",
	btrr: "borderTopRightRadius",
	bts: "borderTopStyle",
	btw: "borderTopWidth",
	bw: "borderWidth",
	bxs: "boxSizing",
	bxsh: "boxShadow",
	col: "color",
	cur: "cursor",
	dsp: "display",
	fb: "flexBasis",
	fd: "flexDirection",
	ff: "fontFamily",
	fs: "fontSize",
	fst: "fontStyle",
	fw: "fontWeight",
	fwr: "flexWrap",
	lh: "lineHeight",
	ls: "letterSpacing",
	o: "opacity",
	ov: "overflow",
	ox: "overflowX",
	oy: "overflowY",
	pe: "pointerEvents",
	pos: "position",
	td: "textDecorationLine",
	tr: "transform",
	tt: "textTransform",
	va: "verticalAlign",
	wb: "wordBreak",
	ws: "whiteSpace",
	ww: "wordWrap"
};
//#endregion
//#region ../web/dist/esm/createTokens.native.js
function createTokens(tokens) {
	var _process_env_TAMAGUI_TOKEN_PREFIX;
	return createVariables(tokens, (_process_env_TAMAGUI_TOKEN_PREFIX = process.env.TAMAGUI_TOKEN_PREFIX) !== null && _process_env_TAMAGUI_TOKEN_PREFIX !== void 0 ? _process_env_TAMAGUI_TOKEN_PREFIX : "t");
}
//#endregion
//#region ../web/dist/esm/setupReactNative.native.js
function getReactNativeConfig(Component) {
	if (Component) {
		var _Component_propTypes, _Component_propTypes1, _Component_propTypes2;
		return !((_Component_propTypes = Component.propTypes) === null || _Component_propTypes === void 0) && _Component_propTypes.onTextInput || !((_Component_propTypes1 = Component.propTypes) === null || _Component_propTypes1 === void 0) && _Component_propTypes1.onChangeText ? RNConfigs.TextInput : Component.getSizeWithHeaders ? RNConfigs.Image : !((_Component_propTypes2 = Component.propTypes) === null || _Component_propTypes2 === void 0) && _Component_propTypes2.textBreakStrategy ? RNConfigs.Text : RNConfigs.default;
	}
}
var RNConfigs = {
	Image: {
		isReactNative: !0,
		inlineProps: /* @__PURE__ */ new Set([
			"src",
			"width",
			"height"
		])
	},
	Text: {
		isReactNative: !0,
		isText: !0
	},
	TextInput: {
		isReactNative: !0,
		isInput: !0,
		isText: !0
	},
	default: { isReactNative: !0 }
};
//#endregion
//#region ../web/dist/esm/helpers/mergeVariants.native.js
var mergeVariants = function(parentVariants, ourVariants) {
	var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, variants = {};
	for (var key in ourVariants) {
		var parentVariant = parentVariants === null || parentVariants === void 0 ? void 0 : parentVariants[key], ourVariant = ourVariants[key];
		!parentVariant || typeof ourVariant == "function" ? variants[key] = ourVariant : parentVariant && !ourVariant ? variants[key] = parentVariant[key] : level === 0 ? variants[key] = mergeVariants(parentVariant, ourVariant, level + 1) : variants[key] = _objectSpread2(_objectSpread2({}, parentVariant), ourVariant);
	}
	return _objectSpread2(_objectSpread2({}, parentVariants), variants);
};
//#endregion
//#region ../web/dist/esm/styled.native.js
var _excluded$1 = [
	"variants",
	"name",
	"defaultVariants",
	"context"
], _excluded2 = [
	"variants",
	"name",
	"defaultVariants",
	"context"
];
var textLikeElements = /* @__PURE__ */ new Set([
	"a",
	"abbr",
	"b",
	"bdi",
	"bdo",
	"cite",
	"code",
	"data",
	"del",
	"dfn",
	"em",
	"i",
	"ins",
	"kbd",
	"label",
	"mark",
	"q",
	"s",
	"samp",
	"small",
	"span",
	"strong",
	"sub",
	"sup",
	"time",
	"u",
	"var"
]);
function styledHtml(tag, options) {
	var isText = textLikeElements.has(tag), _ref = options || {}, { variants, name, defaultVariants, context } = _ref, defaultProps = _objectWithoutProperties(_ref, _excluded$1), conf = {
		Component: tag,
		variants,
		defaultProps,
		defaultVariants,
		componentName: name,
		isReactNative: !1,
		isText,
		acceptsClassName: !0,
		context
	};
	(defaultProps.children || context) && (conf.neverFlatten = !0);
	return createComponent(conf);
}
function styled(ComponentIn, options, config) {
	if (!ComponentIn) throw new Error("No component given to styled()");
	var parentStaticConfig = ComponentIn.staticConfig, isPlainStyledComponent = !!parentStaticConfig && !(parentStaticConfig.isReactNative || parentStaticConfig.isHOC), Component = (parentStaticConfig === null || parentStaticConfig === void 0 ? void 0 : parentStaticConfig.isHOC) && !(parentStaticConfig === null || parentStaticConfig === void 0 ? void 0 : parentStaticConfig.isStyledHOC) || isPlainStyledComponent ? ComponentIn : (parentStaticConfig === null || parentStaticConfig === void 0 ? void 0 : parentStaticConfig.Component) || ComponentIn, reactNativeConfig = parentStaticConfig ? void 0 : getReactNativeConfig(Component), isReactNative = !!(reactNativeConfig || (config === null || config === void 0 ? void 0 : config.isReactNative) || (parentStaticConfig === null || parentStaticConfig === void 0 ? void 0 : parentStaticConfig.isReactNative)), component = createComponent(function() {
		var _ref2 = options || {}, { variants, name, defaultVariants, context } = _ref2, defaultProps = _objectWithoutProperties(_ref2, _excluded2), parentDefaultVariants, parentDefaultProps;
		if (parentStaticConfig) {
			if (!(parentStaticConfig.isHOC && !parentStaticConfig.isStyledHOC)) {
				var pdp = parentStaticConfig.defaultProps;
				for (var key2 in pdp) {
					var val = pdp[key2];
					parentStaticConfig.defaultVariants && key2 in parentStaticConfig.defaultVariants && (!defaultVariants || !(key2 in defaultVariants)) && (parentDefaultVariants || (parentDefaultVariants = {}), parentDefaultVariants[key2] = val), !(key2 in defaultProps) && (!defaultVariants || !(key2 in defaultVariants)) && (parentDefaultProps || (parentDefaultProps = {}), parentDefaultProps[key2] = pdp[key2]);
				}
				parentStaticConfig.variants && (variants = mergeVariants(parentStaticConfig.variants, variants));
			}
		}
		(parentDefaultProps || defaultVariants || parentDefaultVariants) && (defaultProps = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, parentDefaultProps), parentDefaultVariants), defaultProps), defaultVariants)), !(parentStaticConfig === null || parentStaticConfig === void 0) && parentStaticConfig.isHOC && name && (defaultProps.componentName = name);
		var isText = !!((config === null || config === void 0 ? void 0 : config.isText) || (parentStaticConfig === null || parentStaticConfig === void 0 ? void 0 : parentStaticConfig.isText)), _config_acceptsClassName, acceptsClassName = (_config_acceptsClassName = config === null || config === void 0 ? void 0 : config.acceptsClassName) !== null && _config_acceptsClassName !== void 0 ? _config_acceptsClassName : isPlainStyledComponent || isReactNative || (parentStaticConfig === null || parentStaticConfig === void 0 ? void 0 : parentStaticConfig.isHOC) && (parentStaticConfig === null || parentStaticConfig === void 0 ? void 0 : parentStaticConfig.acceptsClassName), conf = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, parentStaticConfig), config), !isPlainStyledComponent && { Component }), {}, {
			variants,
			defaultProps,
			defaultVariants,
			componentName: name || (parentStaticConfig === null || parentStaticConfig === void 0 ? void 0 : parentStaticConfig.componentName),
			isReactNative,
			isText,
			acceptsClassName,
			context
		}, reactNativeConfig), {}, {
			isStyledHOC: !!(parentStaticConfig === null || parentStaticConfig === void 0 ? void 0 : parentStaticConfig.isHOC),
			parentStaticConfig
		});
		return (defaultProps.children || !acceptsClassName || context) && (conf.neverFlatten = !0), conf;
	}() || {});
	for (var key in ComponentIn) key !== "propTypes" && (key in component || (component[key] = ComponentIn[key]));
	return component;
}
var styledExport = new Proxy(styled, { get(target, prop) {
	return prop in target ? target[prop] : function(options) {
		return styledHtml(prop, options);
	};
} });
//#endregion
//#region ../web/dist/esm/hooks/useIsTouchDevice.native.js
var useIsTouchDevice = function() {
	return !0;
};
//#endregion
//#region ../web/dist/esm/views/View.native.js
var View$1 = createComponent({
	acceptsClassName: !0,
	validStyles
});
//#endregion
//#region ../web/dist/esm/hooks/useProps.native.js
function useProps(props, opts) {
	var [propsOut, styleOut] = usePropsAndStyle(props, _objectSpread2(_objectSpread2({}, opts), {}, {
		noExpand: !0,
		noNormalize: !0,
		resolveValues: "none"
	}));
	return _objectSpread2(_objectSpread2({}, propsOut), styleOut);
}
function useStyle(props, opts) {
	return usePropsAndStyle(props, opts)[1] || {};
}
function usePropsAndStyle(props, opts) {
	var _opts_forComponent, _opts_forComponent_staticConfig, staticConfig = (_opts_forComponent_staticConfig = opts == null || (_opts_forComponent = opts.forComponent) === null || _opts_forComponent === void 0 ? void 0 : _opts_forComponent.staticConfig) !== null && _opts_forComponent_staticConfig !== void 0 ? _opts_forComponent_staticConfig : View$1.staticConfig, [theme, themeState] = useThemeWithState({
		componentName: staticConfig.componentName,
		name: "theme" in props ? props.theme : void 0,
		needsUpdate() {
			return !0;
		}
	}), componentContext = react.default.useContext(ComponentContext), groupContext = react.default.useContext(GroupContext), { state, disabled, setStateShallow } = useComponentState(props, componentContext.animationDriver, staticConfig, getConfig()), mediaStateNow = (opts === null || opts === void 0 ? void 0 : opts.noMedia) ? mediaState : useMedia(), splitStyles = useSplitStyles(props, staticConfig, theme, (themeState === null || themeState === void 0 ? void 0 : themeState.name) || "", state, _objectSpread2({
		isAnimated: !1,
		mediaState: mediaStateNow,
		noSkip: !0,
		noMergeStyle: !0,
		noClass: !0,
		resolveValues: "auto"
	}, opts), null, componentContext, groupContext), { mediaGroups, pseudoGroups } = splitStyles || {};
	return useIsomorphicLayoutEffect(function() {
		if (!disabled) {
			if (state.unmounted) {
				setStateShallow({ unmounted: !1 });
				return;
			}
			if (groupContext) return subscribeToContextGroup({
				groupContext,
				setStateShallow,
				mediaGroups,
				pseudoGroups
			});
		}
	}, [
		disabled,
		groupContext,
		pseudoGroups ? Object.keys([...pseudoGroups]).join("") : 0,
		mediaGroups ? Object.keys([...mediaGroups]).join("") : 0
	]), [
		(splitStyles === null || splitStyles === void 0 ? void 0 : splitStyles.viewProps) || {},
		(splitStyles === null || splitStyles === void 0 ? void 0 : splitStyles.style) || {},
		theme,
		mediaState
	];
}
//#endregion
//#region ../web/dist/esm/hooks/useThemeName.native.js
var forceUpdateState = {
	forceClassName: !0,
	deopt: !0,
	needsUpdate: function() {
		return !0;
	}
}, forceKeys = { current: /* @__PURE__ */ new Set([""]) };
function useThemeName() {
	var _useThemeState;
	return ((_useThemeState = useThemeState(forceUpdateState, !1, forceKeys)) === null || _useThemeState === void 0 ? void 0 : _useThemeState.name) || "";
}
//#endregion
//#region ../web/dist/esm/views/Configuration.native.js
var Configuration = function(props) {
	var current = react.default.useContext(ComponentContext), _props_disableSSR;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ClientOnly, {
		enabled: (_props_disableSSR = props.disableSSR) !== null && _props_disableSSR !== void 0 ? _props_disableSSR : current.disableSSR,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComponentContext.Provider, _objectSpread2(_objectSpread2({}, current), props))
	});
};
//#endregion
//#region ../web/dist/esm/views/TamaguiRoot.native.js
function TamaguiRoot(props) {
	return props.children;
}
//#endregion
//#region ../web/dist/esm/views/FontLanguage.native.js
var _excluded = ["children"];
function FontLanguage(param) {
	var { children } = param, props = _objectWithoutProperties(param, _excluded), parentProps = react.default.useContext(ComponentContext), language = react.default.useMemo(function() {
		return props;
	}, [JSON.stringify(props)]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComponentContext.Provider, _objectSpread2(_objectSpread2({}, parentProps), {}, {
		language,
		children
	}));
}
//#endregion
//#region ../web/dist/esm/views/ThemeProvider.native.js
var ThemeProvider = function(props) {
	"use no memo";
	var forceClassName = getSetting("addThemeClassName") === void 0;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Theme, {
		className: props.className,
		name: props.defaultTheme,
		forceClassName,
		_isRoot: react.useId,
		children: props.children
	});
};
//#endregion
//#region ../web/dist/esm/views/TamaguiProvider.native.js
var _cachedFirstKey, _cachedConfig;
function firstThemeKey(config) {
	return config !== _cachedConfig && (_cachedConfig = config, _cachedFirstKey = (config === null || config === void 0 ? void 0 : config.themes) ? Object.keys(config.themes)[0] : void 0), _cachedFirstKey;
}
function TamaguiProvider$1(param) {
	var { children, disableInjectCSS, config, className, defaultTheme: defaultThemeProp, reset, insets } = param, defaultTheme = defaultThemeProp || firstThemeKey(config) || "light";
	useIsomorphicLayoutEffect(function() {
		stopAccumulatingRules(), updateMediaListeners();
	}, []);
	var memoizedInsets = react.default.useMemo(function() {
		return insets;
	}, [
		insets === null || insets === void 0 ? void 0 : insets.top,
		insets === null || insets === void 0 ? void 0 : insets.right,
		insets === null || insets === void 0 ? void 0 : insets.bottom,
		insets === null || insets === void 0 ? void 0 : insets.left
	]), defaultAnimationDriver = react.default.useMemo(function() {
		return resolveAnimationDriver(config === null || config === void 0 ? void 0 : config.animations);
	}, [config === null || config === void 0 ? void 0 : config.animations]);
	(0, react.useEffect)(function() {
		var _defaultAnimationDriver_onMount;
		defaultAnimationDriver == null || (_defaultAnimationDriver_onMount = defaultAnimationDriver.onMount) === null || _defaultAnimationDriver_onMount === void 0 || _defaultAnimationDriver_onMount.call(defaultAnimationDriver);
	}, []);
	var contents = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComponentContext.Provider, {
		animationDriver: defaultAnimationDriver,
		insets: memoizedInsets,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ThemeProvider, {
			defaultTheme,
			reset,
			className,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TamaguiRoot, {
				theme: defaultTheme,
				isRootRoot: !0,
				children
			})
		})
	});
	return getSetting("disableSSR") && (contents = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ClientOnly, {
		enabled: !0,
		children: contents
	})), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [contents, !1] });
}
//#endregion
//#region ../web/dist/esm/views/Text.native.js
var Text$1 = createComponent({
	componentName: "Text",
	acceptsClassName: !0,
	isText: !0,
	defaultProps: { suppressHighlighting: !0 },
	inlineWhenUnflattened: /* @__PURE__ */ new Set(["fontFamily"]),
	variants: { ellipsis: { true: {
		numberOfLines: 1,
		lineBreakMode: "clip"
	} } },
	validStyles: _objectSpread2(_objectSpread2({}, validStyles), stylePropsTextOnly)
});
//#endregion
//#region ../use-event/dist/esm/useGet.native.js
var useIsomorphicInsertionEffect = typeof window > "u" ? react.useEffect : react.useInsertionEffect || react.useLayoutEffect;
function useGet(currentValue, initialValue, forwardToFunction) {
	var curRef = react.useRef(initialValue !== null && initialValue !== void 0 ? initialValue : currentValue);
	return useIsomorphicInsertionEffect(function() {
		curRef.current = currentValue;
	}), react.useCallback(forwardToFunction ? function() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		var _curRef_current;
		return (_curRef_current = curRef.current) === null || _curRef_current === void 0 ? void 0 : _curRef_current.apply(null, args);
	} : function() {
		return curRef.current;
	}, []);
}
//#endregion
//#region ../use-event/dist/esm/useEvent.native.js
function useEvent(callback) {
	return useGet(callback, defaultValue, !0);
}
var defaultValue = function() {
	throw new Error("Cannot call an event handler while rendering.");
};
//#endregion
//#region ../react-native-media-driver/dist/esm/matchQuery.native.js
var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s()]+)(?:\s*and)?\s*)?(.+)?/i, RE_MQ_EXPRESSION = /\(\s*([^\s:)]+)\s*(?::\s*([^\s)]+))?\s*\)/, RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/, RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/, RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
function matchQuery(mediaQuery, values) {
	return parseQuery(mediaQuery).some(function(query) {
		if (query) {
			var inverse = query.inverse, typeMatch = query.type === "all" || values.type === query.type;
			if (typeMatch && inverse || !(typeMatch || inverse)) return !1;
			var expressionsMatch = query.expressions.every(function(expression) {
				var feature = expression.feature, modifier = expression.modifier, expValue = expression.value, value = values[feature];
				if (!value) return !1;
				switch (feature) {
					case "orientation":
					case "scan": return value.toLowerCase() === expValue.toLowerCase();
					case "width":
					case "height":
					case "device-width":
					case "device-height":
						expValue = toPx(expValue), value = toPx(value);
						break;
					case "resolution":
						expValue = toDpi(expValue), value = toDpi(value);
						break;
					case "aspect-ratio":
					case "device-aspect-ratio":
					case "device-pixel-ratio":
						expValue = toDecimal(expValue), value = toDecimal(value);
						break;
					case "grid":
					case "color":
					case "color-index":
					case "monochrome":
						expValue = Number.parseInt(expValue, 10) || 1, value = Number.parseInt(value, 10) || 0;
						break;
				}
				switch (modifier) {
					case "min": return value >= expValue;
					case "max": return value <= expValue;
					default: return value === expValue;
				}
			});
			return expressionsMatch && !inverse || !expressionsMatch && inverse;
		}
	});
}
function parseQuery(mediaQuery) {
	return mediaQuery.split(",").map(function(query) {
		query = query.trim();
		var captures = query.match(RE_MEDIA_QUERY);
		if (!captures) return null;
		var modifier = captures[1], type = captures[2], expressions = (captures[3] || "").match(/\([^)]+\)/g) || [];
		return {
			inverse: !!modifier && modifier.toLowerCase() === "not",
			type: type ? type.toLowerCase() : "all",
			expressions: expressions.map(function(expression) {
				var captures2 = expression.match(RE_MQ_EXPRESSION), feature = captures2[1].toLowerCase().match(RE_MQ_FEATURE);
				return {
					modifier: feature[1],
					feature: feature[2],
					value: captures2[2]
				};
			})
		};
	});
}
function toDecimal(ratio) {
	var decimal = Number(ratio), numbers;
	return decimal || (numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/), decimal = numbers[1] / numbers[2]), decimal;
}
function toDpi(resolution) {
	var _String_match, value = Number.parseFloat(resolution);
	switch ((_String_match = String(resolution).match(RE_RESOLUTION_UNIT)) === null || _String_match === void 0 ? void 0 : _String_match[1]) {
		case "dpcm": return value / 2.54;
		case "dppx": return value * 96;
		default: return value;
	}
}
function toPx(length) {
	var _String_match, value = Number.parseFloat(length);
	switch ((_String_match = String(length).match(RE_LENGTH_UNIT)) === null || _String_match === void 0 ? void 0 : _String_match[1]) {
		case "em": return value * 16;
		case "rem": return value * 16;
		case "cm": return value * 96 / 2.54;
		case "mm": return value * 96 / 2.54 / 10;
		case "in": return value * 96;
		case "pt": return value * 72;
		case "pc": return value * 72 / 12;
		default: return value;
	}
}
//#endregion
//#region ../react-native-media-driver/dist/esm/mediaQueryList.native.js
function _class_call_check(instance, Constructor) {
	if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
	}
}
function _create_class(Constructor, protoProps, staticProps) {
	return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
}
function _define_property(obj, key, value) {
	return key in obj ? Object.defineProperty(obj, key, {
		value,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : obj[key] = value, obj;
}
var NativeMediaQueryList = /* @__PURE__ */ function() {
	"use strict";
	function NativeMediaQueryList2(query) {
		var _this = this;
		_class_call_check(this, NativeMediaQueryList2), _define_property(this, "query", void 0), _define_property(this, "listeners", void 0), this.query = query, this.listeners = [], this.notify(), react_native.Dimensions.addEventListener("change", function() {
			_this.notify();
		});
	}
	return _create_class(NativeMediaQueryList2, [
		{
			key: "orientation",
			get: function() {
				var windowDimensions = react_native.Dimensions.get("window");
				return windowDimensions.height > windowDimensions.width ? "portrait" : "landscape";
			}
		},
		{
			key: "notify",
			value: function() {
				var _this = this;
				this.listeners.forEach(function(listener) {
					listener(_this.orientation);
				});
			}
		},
		{
			key: "addListener",
			value: function(listener) {
				this.listeners.push(listener);
			}
		},
		{
			key: "removeListener",
			value: function(listener) {
				var index = this.listeners.indexOf(listener);
				index !== -1 && this.listeners.splice(index, 1);
			}
		},
		{
			key: "match",
			value: function(query, param) {
				var { width, height } = param;
				return matchQuery(query, {
					type: "screen",
					orientation: height > width ? "portrait" : "landscape",
					"device-width": width,
					"device-height": height
				});
			}
		},
		{
			key: "matches",
			get: function() {
				var windowDimensions = react_native.Dimensions.get("window");
				return matchQuery(this.query, _objectSpread2(_objectSpread2({
					type: "screen",
					orientation: this.orientation
				}, windowDimensions), {}, {
					"device-width": windowDimensions.width,
					"device-height": windowDimensions.height
				}));
			}
		}
	]), NativeMediaQueryList2;
}();
//#endregion
//#region ../react-native-media-driver/dist/esm/matchMedia.native.js
var matchMedia$1 = function(query) {
	return new NativeMediaQueryList(query);
};
//#endregion
//#region ../react-native-media-driver/dist/esm/createMedia.native.js
function createMedia(media) {
	return setupMatchMedia(matchMedia$1), media;
}
//#endregion
//#region \0@oxc-project+runtime@0.122.0/helpers/asyncToGenerator.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
	try {
		var i = n[a](c), u = i.value;
	} catch (n) {
		e(n);
		return;
	}
	i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
	return function() {
		var t = this, e = arguments;
		return new Promise(function(r, o) {
			var a = n.apply(t, e);
			function _next(n) {
				asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
			}
			function _throw(n) {
				asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
			}
			_next(void 0);
		});
	};
}
//#endregion
//#region ../use-element-layout/dist/esm/index.native.js
function _instanceof(left, right) {
	return right != null && typeof Symbol < "u" && right[Symbol.hasInstance] ? !!right[Symbol.hasInstance](left) : left instanceof right;
}
var LayoutHandlers = /* @__PURE__ */ new WeakMap(), LayoutDisableKey = /* @__PURE__ */ new WeakMap(), Nodes = /* @__PURE__ */ new Set(), IntersectionState = /* @__PURE__ */ new WeakMap(), usePretransformDimensions = function() {
	return globalThis.__TAMAGUI_ONLAYOUT_PRETRANSFORM === !0 || process.env.TAMAGUI_ONLAYOUT_PRETRANSFORM === "1";
};
var DisableLayoutContextValues = {}, DisableLayoutContextKey = /* @__PURE__ */ (0, react.createContext)(""), ENABLE = !1, LayoutMeasurementController = function(param) {
	var { disable, children } = param, id = (0, react.useId)();
	return useIsomorphicLayoutEffect(function() {
		DisableLayoutContextValues[id] = disable;
	}, [disable, id]), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DisableLayoutContextKey.Provider, {
		value: id,
		children
	});
}, globalIntersectionObserver = null, strategy = "async";
function setOnLayoutStrategy(state) {
	strategy = state;
}
var NodeRectCache = /* @__PURE__ */ new WeakMap(), avoidUpdates = !0, queuedUpdates = /* @__PURE__ */ new Map();
function enable() {
	avoidUpdates && (avoidUpdates = !1, queuedUpdates && (queuedUpdates.forEach(function(cb) {
		return cb();
	}), queuedUpdates.clear()));
}
function startGlobalObservers() {
	!ENABLE || globalIntersectionObserver || (globalIntersectionObserver = new IntersectionObserver(function(entries) {
		for (var i = 0; i < entries.length; i++) {
			var entry = entries[i], node = entry.target;
			IntersectionState.get(node) !== entry.isIntersecting && IntersectionState.set(node, entry.isIntersecting);
		}
	}, { threshold: 0 }));
}
function rectsEqual(a, b) {
	return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
if (ENABLE) {
	let ensureRectFetchObserver = function() {
		return rectFetchObserver || (rectFetchObserver = new IntersectionObserver(function(entries) {
			lastCallbackDelay = Math.round(performance.now() - rectFetchStartTime);
			for (var i = 0; i < entries.length; i++) BoundingRects.set(entries[i].target, entries[i].boundingClientRect);
			rectFetchResolve && (rectFetchResolve(!0), rectFetchResolve = null);
		}, { threshold: 0 }), rectFetchObserver);
	};
	var BoundingRects = /* @__PURE__ */ new WeakMap(), rectFetchObserver = null, rectFetchResolve = null, rectFetchStartTime = 0, lastCallbackDelay = 0;
	function updateLayoutIfChanged(_x) {
		return _updateLayoutIfChanged.apply(this, arguments);
	}
	function _updateLayoutIfChanged() {
		_updateLayoutIfChanged = _asyncToGenerator(function* (node) {
			var onLayout = LayoutHandlers.get(node);
			if (typeof onLayout == "function") {
				var parentNode = node.parentElement;
				if (parentNode) {
					var nodeRect, parentRect;
					if (strategy === "async") {
						if (nodeRect = BoundingRects.get(node), parentRect = BoundingRects.get(parentNode), !nodeRect || !parentRect) return;
					} else nodeRect = node.getBoundingClientRect(), parentRect = parentNode.getBoundingClientRect();
					var cachedRect = NodeRectCache.get(node), cachedParentRect = NodeRectCache.get(parentNode), nodeChanged = !cachedRect || !rectsEqual(cachedRect, nodeRect), parentChanged = !cachedParentRect || !rectsEqual(cachedParentRect, parentRect);
					if (nodeChanged || parentChanged) {
						NodeRectCache.set(node, nodeRect), NodeRectCache.set(parentNode, parentRect);
						var event = getElementLayoutEvent(nodeRect, parentRect, node);
						avoidUpdates ? queuedUpdates.set(node, function() {
							return onLayout(event);
						}) : onLayout(event);
					}
				}
			}
		});
		return _updateLayoutIfChanged.apply(this, arguments);
	}
	var rAF = typeof requestAnimationFrame < "u" ? requestAnimationFrame : void 0, userSkipVal = process.env.TAMAGUI_LAYOUT_FRAME_SKIP, BASE_SKIP_FRAMES = userSkipVal ? +userSkipVal : 10, MAX_SKIP_FRAMES = 20, skipFrames = BASE_SKIP_FRAMES, frameCount = 0;
	function layoutOnAnimationFrame() {
		return _layoutOnAnimationFrame.apply(this, arguments);
	}
	function _layoutOnAnimationFrame() {
		_layoutOnAnimationFrame = _asyncToGenerator(function* () {
			if (frameCount++ % skipFrames !== 0) {
				rAF ? rAF(layoutOnAnimationFrame) : setTimeout(layoutOnAnimationFrame, 16);
				return;
			}
			if (frameCount >= Number.MAX_SAFE_INTEGER && (frameCount = 0), strategy !== "off") {
				var visibleNodes = [], parentsToObserve = /* @__PURE__ */ new Set(), _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
				try {
					for (var _iterator = Nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
						var node = _step.value, parentElement = node.parentElement;
						if (!_instanceof(parentElement, HTMLElement)) {
							cleanupNode(node);
							continue;
						}
						var disableKey = LayoutDisableKey.get(node);
						disableKey && DisableLayoutContextValues[disableKey] === !0 || IntersectionState.get(node) !== !1 && (visibleNodes.push(node), parentsToObserve.add(parentElement));
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
				if (visibleNodes.length > 0) {
					var io = ensureRectFetchObserver();
					rectFetchStartTime = performance.now();
					for (var i = 0; i < visibleNodes.length; i++) io.observe(visibleNodes[i]);
					var _iteratorNormalCompletion1 = !0, _didIteratorError1 = !1, _iteratorError1 = void 0;
					try {
						for (var _iterator1 = parentsToObserve[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = !0) {
							var parent = _step1.value;
							io.observe(parent);
						}
					} catch (err) {
						_didIteratorError1 = !0, _iteratorError1 = err;
					} finally {
						try {
							!_iteratorNormalCompletion1 && _iterator1.return != null && _iterator1.return();
						} finally {
							if (_didIteratorError1) throw _iteratorError1;
						}
					}
					yield new Promise(function(res) {
						rectFetchResolve = res;
					});
					for (var i1 = 0; i1 < visibleNodes.length; i1++) io.unobserve(visibleNodes[i1]);
					var _iteratorNormalCompletion2 = !0, _didIteratorError2 = !1, _iteratorError2 = void 0;
					try {
						for (var _iterator2 = parentsToObserve[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = !0) {
							var parent1 = _step2.value;
							io.unobserve(parent1);
						}
					} catch (err) {
						_didIteratorError2 = !0, _iteratorError2 = err;
					} finally {
						try {
							!_iteratorNormalCompletion2 && _iterator2.return != null && _iterator2.return();
						} finally {
							if (_didIteratorError2) throw _iteratorError2;
						}
					}
					lastCallbackDelay > 50 ? skipFrames = Math.min(skipFrames + 2, MAX_SKIP_FRAMES) : lastCallbackDelay < 20 && (skipFrames = Math.max(skipFrames - 1, BASE_SKIP_FRAMES));
					for (var i2 = 0; i2 < visibleNodes.length; i2++) updateLayoutIfChanged(visibleNodes[i2]);
				}
			}
			rAF ? rAF(layoutOnAnimationFrame) : setTimeout(layoutOnAnimationFrame, 16);
		});
		return _layoutOnAnimationFrame.apply(this, arguments);
	}
	layoutOnAnimationFrame();
}
var getElementLayoutEvent = function(nodeRect, parentRect, node) {
	return {
		nativeEvent: {
			layout: getRelativeDimensions(nodeRect, parentRect, node),
			target: nodeRect
		},
		timeStamp: Date.now()
	};
}, getPreTransformDimensions = function(node) {
	return {
		width: node.offsetWidth,
		height: node.offsetHeight
	};
}, getRelativeDimensions = function(a, b, aNode) {
	var { left, top } = a, x = left - b.left, y = top - b.top, { width, height } = usePretransformDimensions() && aNode ? getPreTransformDimensions(aNode) : {
		width: a.width,
		height: a.height
	};
	return {
		x,
		y,
		width,
		height,
		pageX: a.left,
		pageY: a.top
	};
};
function registerLayoutNode(node, onChange, disableKey) {
	return Nodes.add(node), LayoutHandlers.set(node, onChange), disableKey && LayoutDisableKey.set(node, disableKey), startGlobalObservers(), globalIntersectionObserver && (globalIntersectionObserver.observe(node), IntersectionState.set(node, !0)), function() {
		return cleanupNode(node);
	};
}
function cleanupNode(node) {
	Nodes.delete(node), LayoutHandlers.delete(node), LayoutDisableKey.delete(node), NodeRectCache.delete(node), IntersectionState.delete(node), globalIntersectionObserver && globalIntersectionObserver.unobserve(node);
}
//#endregion
//#region src/getBaseViews.native.ts
function getBaseViews() {
	var _native$default, _native$default2, _native$default3, _native$default4;
	const native = require("react-native");
	return {
		View: native.View || ((_native$default = native.default) === null || _native$default === void 0 ? void 0 : _native$default.View),
		Text: native.Text || ((_native$default2 = native.default) === null || _native$default2 === void 0 ? void 0 : _native$default2.Text),
		TextAncestor: native.unstable_TextAncestorContext,
		StyleSheet: native.StyleSheet || ((_native$default3 = native.default) === null || _native$default3 === void 0 ? void 0 : _native$default3.StyleSheet),
		Pressable: native.Pressable || ((_native$default4 = native.default) === null || _native$default4 === void 0 ? void 0 : _native$default4.Pressable)
	};
}
//#endregion
//#region src/index.tsx
var TamaguiProvider = (props) => {
	useIsomorphicLayoutEffect(() => {
		enable();
	}, []);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TamaguiProvider$1, _objectSpread2({}, props));
};
var createTamagui = (conf) => {
	if (conf.media) conf.media = createMedia(conf.media);
	return createTamagui$1(conf);
};
getBaseViews();
setupHooks(_objectSpread2({
	getBaseViews,
	setElementProps: (node) => {},
	usePropsTransform(elementType, propsIn, stateRef, willHydrate) {}
}, { useChildren(elementType, children, viewProps) {} }));
var View = View$1;
var Text = Text$1;
//#endregion
exports.ClientOnly = ClientOnly;
exports.ClientOnlyContext = ClientOnlyContext;
exports.ComponentContext = ComponentContext;
exports.Configuration = Configuration;
exports.FONT_DATA_ATTRIBUTE_NAME = FONT_DATA_ATTRIBUTE_NAME;
exports.FontLanguage = FontLanguage;
exports.GroupContext = GroupContext;
exports.LayoutMeasurementController = LayoutMeasurementController;
exports.MEDIA_SEP = MEDIA_SEP;
exports.MISSING_THEME_MESSAGE = MISSING_THEME_MESSAGE;
exports.PROP_SPLIT = PROP_SPLIT;
exports.Slot = Slot;
exports.Slottable = Slottable;
exports.StyleObjectIdentifier = StyleObjectIdentifier;
exports.StyleObjectProperty = StyleObjectProperty;
exports.StyleObjectPseudo = StyleObjectPseudo;
exports.StyleObjectRules = StyleObjectRules;
exports.StyleObjectValue = StyleObjectValue;
exports.THEME_CLASSNAME_PREFIX = THEME_CLASSNAME_PREFIX;
exports.THEME_NAME_SEPARATOR = THEME_NAME_SEPARATOR;
exports.Tamagui = Tamagui;
exports.TamaguiProvider = TamaguiProvider;
exports.TamaguiRoot = TamaguiRoot;
exports.Text = Text;
exports.Theme = Theme;
exports.ThemeProvider = ThemeProvider;
exports.View = View;
exports._disableMediaTouch = _disableMediaTouch;
exports._withStableStyle = _withStableStyle;
exports.autoVariables = autoVariables;
exports.clamp = clamp;
exports.componentSetStates = componentSetStates;
exports.composeEventHandlers = composeEventHandlers;
exports.composeRefs = composeRefs;
exports.configureMedia = configureMedia;
exports.createCSSVariable = createCSSVariable;
exports.createComponent = createComponent;
exports.createFont = createFont;
exports.createMediaStyle = createMediaStyle;
exports.createShorthands = createShorthands;
exports.createStyledContext = createStyledContext;
exports.createTamagui = createTamagui;
exports.createTokens = createTokens;
exports.createVariable = createVariable;
exports.createVariables = createVariables;
exports.cssShorthandLonghands = cssShorthandLonghands;
exports.currentPlatform = currentPlatform;
exports.defaultMediaImportance = defaultMediaImportance;
exports.didGetVariableValue = didGetVariableValue;
exports.ensureThemeVariable = ensureThemeVariable;
exports.extractPseudoState = extractPseudoState;
exports.fixStyles = fixStyles;
exports.forceUpdateThemes = forceUpdateThemes;
exports.getCSSStylesAtomic = getCSSStylesAtomic;
exports.getConfig = getConfig;
exports.getDefaultProps = getDefaultProps;
exports.getExpandedShorthand = getExpandedShorthand;
exports.getExpandedShorthands = getExpandedShorthands;
exports.getFontFamilyFromNameOrVariable = getFontFamilyFromNameOrVariable;
exports.getFontsForLanguage = getFontsForLanguage;
exports.getMedia = getMedia;
exports.getReactNativeConfig = getReactNativeConfig;
exports.getRgba = getRgba;
exports.getSetting = getSetting;
exports.getShorthandValue = getShorthandValue;
exports.getSplitStyles = getSplitStyles;
exports.getStyleAtomic = getStyleAtomic;
exports.getStyleTags = getStyleTags;
exports.getSubStyle = getSubStyle;
exports.getThemeCSSRules = getThemeCSSRules;
exports.getThemedChildren = getThemedChildren;
exports.getThemes = getThemes;
exports.getToken = getToken;
exports.getTokenForKey = getTokenForKey;
exports.getTokenValue = getTokenValue;
exports.getTokens = getTokens;
exports.getValueFromIdentifier = getValueFromIdentifier;
exports.getVariable = getVariable;
exports.getVariableName = getVariableName;
exports.getVariableValue = getVariableValue;
exports.getVariableVariable = getVariableVariable;
exports.getVariantExtras = getVariantExtras;
exports.hooks = hooks;
exports.insertFont = insertFont;
exports.insertStyleRules = insertStyleRules;
exports.isAndroid = isAndroid;
exports.isBrowser = isBrowser;
exports.isChrome = isChrome;
exports.isClient = isClient;
exports.isEqualShallow = isEqualShallow;
exports.isIos = isIos;
exports.isServer = isServer;
exports.isTamaguiComponent = isTamaguiComponent;
exports.isTamaguiElement = isTamaguiElement;
exports.isTouchable = isTouchable;
exports.isVariable = isVariable;
exports.isWeb = isWeb;
exports.isWebTouchable = isWebTouchable;
exports.isWindowDefined = isWindowDefined;
exports.loadAnimationDriver = loadAnimationDriver;
exports.matchMedia = matchMedia;
exports.mediaKeyMatch = mediaKeyMatch;
exports.mediaObjectToString = mediaObjectToString;
exports.mediaQueryConfig = mediaQueryConfig;
Object.defineProperty(exports, "mediaState", {
	enumerable: true,
	get: function() {
		return mediaState;
	}
});
exports.mergeComponentProps = mergeComponentProps;
exports.mergeIfNotShallowEqual = mergeIfNotShallowEqual;
exports.mergeProps = mergeProps;
exports.mergeSlotStyleProps = mergeSlotStyleProps;
exports.mutatedAutoVariables = mutatedAutoVariables;
exports.nonAnimatableStyleProps = nonAnimatableStyleProps;
exports.nonAnimatableWebTextProps = nonAnimatableWebTextProps;
exports.nonAnimatableWebViewProps = nonAnimatableWebViewProps;
exports.normalizeColor = normalizeColor;
exports.normalizeStyle = normalizeStyle;
exports.normalizeValueWithProperty = normalizeValueWithProperty;
exports.parseFont = parseFont;
exports.propMapper = propMapper;
exports.proxyThemeToParents = proxyThemeToParents;
exports.proxyThemeVariables = proxyThemeVariables;
exports.proxyThemesToParents = proxyThemesToParents;
exports.pseudoDescriptors = pseudoDescriptors;
exports.pseudoDescriptorsBase = pseudoDescriptorsBase;
exports.pseudoPriorities = pseudoPriorities;
exports.px = px;
exports.registerFontVariables = registerFontVariables;
exports.registerLayoutNode = registerLayoutNode;
exports.resetMediaStyleCache = resetMediaStyleCache;
exports.resolveEffectivePseudoTransition = resolveEffectivePseudoTransition;
exports.rgba = rgba;
exports.setConfig = setConfig;
exports.setDidGetVariableValue = setDidGetVariableValue;
exports.setIdentifierValue = setIdentifierValue;
exports.setNonce = setNonce;
exports.setOnLayoutStrategy = setOnLayoutStrategy;
exports.setRef = setRef;
exports.setupDev = setupDev;
exports.setupHooks = setupHooks;
exports.setupMatchMedia = setupMatchMedia;
exports.shouldRenderNativePlatform = shouldRenderNativePlatform;
exports.simpleHash = simpleHash;
exports.styleOriginalValues = styleOriginalValues;
exports.stylePropsAll = stylePropsAll;
exports.stylePropsText = stylePropsText;
exports.stylePropsTextOnly = stylePropsTextOnly;
exports.stylePropsTransform = stylePropsTransform;
exports.stylePropsUnitless = stylePropsUnitless;
exports.stylePropsView = stylePropsView;
exports.styleToCSS = styleToCSS;
exports.styled = styledExport;
exports.styledHtml = styledHtml;
exports.themeable = themeable;
exports.tokenCategories = tokenCategories;
exports.transformsToString = transformsToString;
exports.updateConfig = updateConfig;
exports.updateFont = updateFont;
exports.useClientValue = useClientValue;
exports.useComposedRefs = useComposedRefs;
exports.useConfiguration = useConfiguration;
exports.useCreateShallowSetState = useCreateShallowSetState;
exports.useDidFinishSSR = useDidFinishSSR;
exports.useEvent = useEvent;
exports.useGet = useGet;
exports.useIsClientOnly = useIsClientOnly;
exports.useIsTouchDevice = useIsTouchDevice;
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;
exports.useMedia = useMedia;
exports.useProps = useProps;
exports.usePropsAndStyle = usePropsAndStyle;
exports.useSplitStyles = useSplitStyles;
exports.useStyle = useStyle;
exports.useTheme = useTheme;
exports.useThemeName = useThemeName;
exports.useThemeWithState = useThemeWithState;
exports.validPseudoKeys = validPseudoKeys;
exports.validStyles = validStyles;
exports.variableToString = variableToString;
exports.webOnlyStylePropsText = webOnlyStylePropsText;
exports.webOnlyStylePropsView = webOnlyStylePropsView;
exports.withStaticProperties = withStaticProperties;
