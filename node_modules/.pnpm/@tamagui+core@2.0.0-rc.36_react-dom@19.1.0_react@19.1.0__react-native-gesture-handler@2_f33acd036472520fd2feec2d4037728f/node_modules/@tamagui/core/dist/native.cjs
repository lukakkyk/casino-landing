Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
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
var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);
//#endregion
let react_jsx_runtime = require("react/jsx-runtime");
let react = require("react");
react = __toESM(react);
//#region \0@oxc-project+runtime@0.122.0/helpers/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
var init_typeof = __esmMin((() => {}));
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
var init_toPrimitive = __esmMin((() => {
	init_typeof();
}));
//#endregion
//#region \0@oxc-project+runtime@0.122.0/helpers/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
var init_toPropertyKey = __esmMin((() => {
	init_typeof();
	init_toPrimitive();
}));
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
var init_defineProperty = __esmMin((() => {
	init_toPropertyKey();
}));
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
var init_objectSpread2 = __esmMin((() => {
	init_defineProperty();
}));
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
var init_objectWithoutPropertiesLoose = __esmMin((() => {}));
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
var init_objectWithoutProperties = __esmMin((() => {
	init_objectWithoutPropertiesLoose();
}));
//#endregion
//#region ../web/dist/esm/helpers/pseudoDescriptors.native.js
var pseudoDescriptorsBase, pseudoPriorities, pseudoDescriptors, defaultMediaImportance;
var init_pseudoDescriptors_native = __esmMin((() => {
	init_objectSpread2();
	pseudoDescriptorsBase = {
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
}));
//#endregion
//#region ../web/dist/esm/helpers/mergeProps.native.js
function _type_of$10(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function mergeProp(out, defaultProps, props, key) {
	var val = props[key];
	if (defaultProps && key in defaultProps && (key in pseudoDescriptors || key[0] === "$") && val && (typeof val > "u" ? "undefined" : _type_of$10(val)) === "object") {
		var defaultVal = defaultProps[key];
		defaultVal && (typeof defaultVal > "u" ? "undefined" : _type_of$10(defaultVal)) === "object" && (val = mergeProps(defaultVal, val));
	}
	out[key] = val;
}
var mergeProps, mergeComponentProps;
var init_mergeProps_native = __esmMin((() => {
	init_pseudoDescriptors_native();
	mergeProps = function(defaultProps, props) {
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
}));
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
		else if (cache$6.has(arg)) k += cache$6.get(arg);
		else {
			var v = Math.random();
			cache$6.set(arg, v), k += v;
		}
	}
	return k;
}
var cache$6;
var init_objectIdentityKey_native = __esmMin((() => {
	cache$6 = /* @__PURE__ */ new WeakMap();
}));
//#endregion
//#region ../web/dist/esm/helpers/createStyledContext.native.js
var _excluded$24, createStyledContext;
var init_createStyledContext_native = __esmMin((() => {
	init_mergeProps_native();
	init_objectIdentityKey_native();
	init_objectWithoutProperties();
	_excluded$24 = [
		"children",
		"scope",
		"__disableMergeDefaultValues"
	];
	createStyledContext = function(defaultValues) {
		"use no memo";
		var namespace = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", createReactContext = react.default["createContext"], useReactMemo = react.default["useMemo"], useReactContext = react.default["useContext"], OGContext = createReactContext(defaultValues), OGProvider = OGContext.Provider, Context = OGContext, scopedContexts = /* @__PURE__ */ new Map(), LastScopeInNamespace = createReactContext(namespace);
		function getOrCreateScopedContext(scope) {
			var ScopedContext = scopedContexts.get(scope);
			return ScopedContext || (ScopedContext = createReactContext(defaultValues), scopedContexts.set(scope, ScopedContext)), ScopedContext;
		}
		var getNamespacedScope = function(scope) {
			return namespace ? `${namespace}--${scope}` : scope;
		}, Provider = function(param) {
			var { children, scope: scopeIn, __disableMergeDefaultValues } = param, values = _objectWithoutProperties(param, _excluded$24), scope = getNamespacedScope(scopeIn), next = useReactMemo(function() {
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
}));
//#endregion
//#region ../web/dist/esm/contexts/ComponentContext.native.js
var ComponentContext, useConfiguration;
var init_ComponentContext_native = __esmMin((() => {
	init_createStyledContext_native();
	ComponentContext = createStyledContext({
		disableSSR: void 0,
		inText: !1,
		language: null,
		animationDriver: null,
		setParentFocusState: null,
		insets: null
	}), useConfiguration = function() {
		return (0, react.useContext)(ComponentContext);
	};
}));
//#endregion
//#region ../web/dist/esm/contexts/GroupContext.native.js
var GroupContext;
var init_GroupContext_native = __esmMin((() => {
	GroupContext = /* @__PURE__ */ (0, react.createContext)(null);
}));
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
var init_index_native$12 = __esmMin((() => {
	init_objectSpread2();
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/AssetRegistry/index.mjs
function getAssetByID(assetId) {
	return assets[assetId - 1];
}
var assets;
var init_AssetRegistry = __esmMin((() => {
	assets = [];
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/forwardedProps/index.mjs
var defaultProps$1, accessibilityProps, clickProps, focusProps, keyboardProps, mouseProps, touchProps, styleProps, forwardedProps, forwardPropsListText, forwardPropsListView;
var init_forwardedProps = __esmMin((() => {
	init_objectSpread2();
	defaultProps$1 = {
		children: !0,
		dataSet: !0,
		nativeID: !0,
		ref: !0,
		suppressHydrationWarning: !0,
		testID: !0,
		id: !0
	}, accessibilityProps = {
		accessibilityActiveDescendant: !0,
		accessibilityAtomic: !0,
		accessibilityAutoComplete: !0,
		accessibilityBusy: !0,
		accessibilityChecked: !0,
		accessibilityColumnCount: !0,
		accessibilityColumnIndex: !0,
		accessibilityColumnSpan: !0,
		accessibilityControls: !0,
		accessibilityCurrent: !0,
		accessibilityDescribedBy: !0,
		accessibilityDetails: !0,
		accessibilityDisabled: !0,
		accessibilityErrorMessage: !0,
		accessibilityExpanded: !0,
		accessibilityFlowTo: !0,
		accessibilityHasPopup: !0,
		accessibilityHidden: !0,
		accessibilityInvalid: !0,
		accessibilityKeyShortcuts: !0,
		accessibilityLabel: !0,
		accessibilityLabelledBy: !0,
		accessibilityLevel: !0,
		accessibilityLiveRegion: !0,
		accessibilityModal: !0,
		accessibilityMultiline: !0,
		accessibilityMultiSelectable: !0,
		accessibilityOrientation: !0,
		accessibilityOwns: !0,
		accessibilityPlaceholder: !0,
		accessibilityPosInSet: !0,
		accessibilityPressed: !0,
		accessibilityReadOnly: !0,
		accessibilityRequired: !0,
		accessibilityRole: !0,
		accessibilityRoleDescription: !0,
		accessibilityRowCount: !0,
		accessibilityRowIndex: !0,
		accessibilityRowSpan: !0,
		accessibilitySelected: !0,
		accessibilitySetSize: !0,
		accessibilitySort: !0,
		accessibilityValueMax: !0,
		accessibilityValueMin: !0,
		accessibilityValueNow: !0,
		accessibilityValueText: !0,
		dir: !0,
		focusable: !0
	}, clickProps = {
		onClick: !0,
		onClickCapture: !0,
		onContextMenu: !0
	}, focusProps = {
		onBlur: !0,
		onFocus: !0
	}, keyboardProps = {
		onKeyDown: !0,
		onKeyDownCapture: !0,
		onKeyUp: !0,
		onKeyUpCapture: !0
	}, mouseProps = {
		onMouseDown: !0,
		onMouseEnter: !0,
		onMouseLeave: !0,
		onMouseMove: !0,
		onMouseOver: !0,
		onMouseOut: !0,
		onMouseUp: !0
	}, touchProps = {
		onTouchCancel: !0,
		onTouchCancelCapture: !0,
		onTouchEnd: !0,
		onTouchEndCapture: !0,
		onTouchMove: !0,
		onTouchMoveCapture: !0,
		onTouchStart: !0,
		onTouchStartCapture: !0
	}, styleProps = {
		classList: !0,
		className: !0,
		style: !0
	}, forwardedProps = {
		defaultProps: defaultProps$1,
		accessibilityProps,
		clickProps,
		focusProps,
		keyboardProps,
		mouseProps,
		touchProps,
		styleProps
	}, forwardPropsListText = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, defaultProps$1), accessibilityProps), clickProps), focusProps), keyboardProps), mouseProps), touchProps), styleProps), {}, {
		href: !0,
		lang: !0,
		pointerEvents: !0
	}), forwardPropsListView = _objectSpread2(_objectSpread2({}, forwardPropsListText), {}, {
		onScroll: !0,
		onWheel: !0
	});
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/mergeRefs/index.mjs
function mergeRefs(...args) {
	return function(node) {
		args.forEach((ref) => {
			if (ref != null) {
				if (typeof ref == "function") {
					ref(node);
					return;
				}
				if (typeof ref == "object") {
					ref.current = node;
					return;
				}
				console.error(`mergeRefs cannot handle Refs of type boolean, number or string, received ref ${String(ref)}`);
			}
		});
	};
}
var init_mergeRefs = __esmMin((() => {}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/canUseDOM.mjs
var canUseDOM$1;
var init_canUseDOM = __esmMin((() => {
	canUseDOM$1 = !!(typeof window < "u" && window.document && window.document.createElement);
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/createEventHandle/index.mjs
function supportsPassiveEvents() {
	let supported = !1;
	if (canUseDOM$1) try {
		const options = {};
		Object.defineProperty(options, "passive", { get() {
			return supported = !0, !1;
		} }), window.addEventListener("test", null, options), window.removeEventListener("test", null, options);
	} catch (_unused) {}
	return supported;
}
function getOptions(options) {
	return options == null ? !1 : canUsePassiveEvents ? options : !!options.capture;
}
function isPropagationStopped() {
	return this.cancelBubble;
}
function isDefaultPrevented() {
	return this.defaultPrevented;
}
function normalizeEvent(event) {
	return event.nativeEvent = event, event.persist = emptyFunction$3, event.isDefaultPrevented = isDefaultPrevented, event.isPropagationStopped = isPropagationStopped, event;
}
function createEventHandle(type, options) {
	const opts = getOptions(options);
	return function(target, listener) {
		if (target == null || typeof target.addEventListener != "function") throw new Error("createEventHandle: called on an invalid target.");
		const element = target;
		if (listener != null) {
			const compatListener = (e) => listener(normalizeEvent(e));
			return element.addEventListener(type, compatListener, opts), function() {
				element === null || element === void 0 || element.removeEventListener(type, compatListener, opts);
			};
		} else return emptyFunction$3;
	};
}
var emptyFunction$3, canUsePassiveEvents;
var init_createEventHandle = __esmMin((() => {
	init_canUseDOM();
	emptyFunction$3 = () => {};
	canUsePassiveEvents = supportsPassiveEvents();
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/modality/index.mjs
function restoreModality() {
	(previousModality != null || previousActiveModality != null) && (previousModality != null && (modality = previousModality, previousModality = null), previousActiveModality != null && (activeModality = previousActiveModality, previousActiveModality = null), callListeners());
}
function onBlurWindow() {
	previousModality = modality, previousActiveModality = activeModality, activeModality = KEYBOARD, modality = KEYBOARD, callListeners(), isEmulatingMouseEvents$1 = !1;
}
function onFocusWindow() {
	restoreModality();
}
function onKeyDown(event) {
	event.metaKey || event.altKey || event.ctrlKey || modality !== KEYBOARD && (modality = KEYBOARD, activeModality = KEYBOARD, callListeners());
}
function onVisibilityChange() {
	document.visibilityState !== "hidden" && restoreModality();
}
function onPointerish(event) {
	const eventType = event.type;
	if (supportsPointerEvent$1()) {
		if (eventType === POINTERDOWN) {
			activeModality !== event.pointerType && (modality = event.pointerType, activeModality = event.pointerType, callListeners());
			return;
		}
		if (eventType === POINTERMOVE) {
			modality !== event.pointerType && (modality = event.pointerType, callListeners());
			return;
		}
	} else {
		if (isEmulatingMouseEvents$1 || (eventType === MOUSEDOWN && activeModality !== MOUSE && (modality = MOUSE, activeModality = MOUSE, callListeners()), eventType === MOUSEMOVE && modality !== MOUSE && (modality = MOUSE, callListeners())), eventType === TOUCHSTART) {
			isEmulatingMouseEvents$1 = !0, event.touches && event.touches.length > 1 && (isEmulatingMouseEvents$1 = !1), activeModality !== TOUCH && (modality = TOUCH, activeModality = TOUCH, callListeners());
			return;
		}
		(eventType === CONTEXTMENU || eventType === MOUSEUP || eventType === SELECTIONCHANGE || eventType === SCROLL$1 || eventType === TOUCHCANCEL || eventType === TOUCHMOVE) && (isEmulatingMouseEvents$1 = !1);
	}
}
function callListeners() {
	const value = {
		activeModality,
		modality
	};
	listeners$2.forEach((listener) => {
		listener(value);
	});
}
function getModality() {
	return modality;
}
var supportsPointerEvent$1, activeModality, modality, previousModality, previousActiveModality, isEmulatingMouseEvents$1, listeners$2, KEYBOARD, MOUSE, TOUCH, BLUR$1, CONTEXTMENU, FOCUS, KEYDOWN, MOUSEDOWN, MOUSEMOVE, MOUSEUP, POINTERDOWN, POINTERMOVE, SCROLL$1, SELECTIONCHANGE, TOUCHCANCEL, TOUCHMOVE, TOUCHSTART, VISIBILITYCHANGE, bubbleOptions, captureOptions, addBlurListener, addFocusListener, addVisibilityChangeListener, addKeyDownListener, addPointerDownListener, addPointerMoveListener, addContextMenuListener, addMouseDownListener, addMouseMoveListener, addMouseUpListener, addScrollListener, addSelectiomChangeListener, addTouchCancelListener, addTouchMoveListener, addTouchStartListener;
var init_modality = __esmMin((() => {
	init_canUseDOM();
	init_createEventHandle();
	supportsPointerEvent$1 = () => typeof window < "u" && window.PointerEvent != null;
	activeModality = "keyboard", modality = "keyboard", isEmulatingMouseEvents$1 = !1;
	listeners$2 = /* @__PURE__ */ new Set(), KEYBOARD = "keyboard", MOUSE = "mouse", TOUCH = "touch", BLUR$1 = "blur", CONTEXTMENU = "contextmenu", FOCUS = "focus", KEYDOWN = "keydown", MOUSEDOWN = "mousedown", MOUSEMOVE = "mousemove", MOUSEUP = "mouseup", POINTERDOWN = "pointerdown", POINTERMOVE = "pointermove", SCROLL$1 = "scroll", SELECTIONCHANGE = "selectionchange", TOUCHCANCEL = "touchcancel", TOUCHMOVE = "touchmove", TOUCHSTART = "touchstart", VISIBILITYCHANGE = "visibilitychange", bubbleOptions = { passive: !0 }, captureOptions = {
		capture: !0,
		passive: !0
	}, addBlurListener = createEventHandle(BLUR$1, bubbleOptions), addFocusListener = createEventHandle(FOCUS, bubbleOptions), addVisibilityChangeListener = createEventHandle(VISIBILITYCHANGE, captureOptions), addKeyDownListener = createEventHandle(KEYDOWN, captureOptions), addPointerDownListener = createEventHandle(POINTERDOWN, captureOptions), addPointerMoveListener = createEventHandle(POINTERMOVE, captureOptions), addContextMenuListener = createEventHandle(CONTEXTMENU, captureOptions), addMouseDownListener = createEventHandle(MOUSEDOWN, captureOptions), addMouseMoveListener = createEventHandle(MOUSEMOVE, captureOptions), addMouseUpListener = createEventHandle(MOUSEUP, captureOptions), addScrollListener = createEventHandle(SCROLL$1, captureOptions), addSelectiomChangeListener = createEventHandle(SELECTIONCHANGE, captureOptions), addTouchCancelListener = createEventHandle(TOUCHCANCEL, captureOptions), addTouchMoveListener = createEventHandle(TOUCHMOVE, captureOptions), addTouchStartListener = createEventHandle(TOUCHSTART, captureOptions);
	canUseDOM$1 && (addBlurListener(window, onBlurWindow), addFocusListener(window, onFocusWindow), addKeyDownListener(document, onKeyDown), addPointerDownListener(document, onPointerish), addPointerMoveListener(document, onPointerish), addVisibilityChangeListener(document, onVisibilityChange), addContextMenuListener(document, onPointerish), addMouseDownListener(document, onPointerish), addMouseMoveListener(document, onPointerish), addMouseUpListener(document, onPointerish), addTouchCancelListener(document, onPointerish), addTouchMoveListener(document, onPointerish), addTouchStartListener(document, onPointerish), addSelectiomChangeListener(document, onPointerish), addScrollListener(document, onPointerish));
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/useLocale/isLocaleRTL.mjs
function isLocaleRTL(locale) {
	const cachedRTL = cache$5.get(locale);
	if (cachedRTL) return cachedRTL;
	let isRTL = !1;
	if (Intl.Locale) {
		const script = new Intl.Locale(locale).maximize().script;
		isRTL = rtlScripts.has(script);
	} else {
		const lang = locale.split("-")[0];
		isRTL = rtlLangs.has(lang);
	}
	return cache$5.set(locale, isRTL), isRTL;
}
var rtlScripts, rtlLangs, cache$5;
var init_isLocaleRTL = __esmMin((() => {
	rtlScripts = /* @__PURE__ */ new Set([
		"Arab",
		"Syrc",
		"Samr",
		"Mand",
		"Thaa",
		"Mend",
		"Nkoo",
		"Adlm",
		"Rohg",
		"Hebr"
	]), rtlLangs = /* @__PURE__ */ new Set([
		"ae",
		"ar",
		"arc",
		"bcc",
		"bqi",
		"ckb",
		"dv",
		"fa",
		"far",
		"glk",
		"he",
		"iw",
		"khw",
		"ks",
		"ku",
		"mzn",
		"nqo",
		"pnb",
		"ps",
		"sd",
		"ug",
		"ur",
		"yi"
	]), cache$5 = /* @__PURE__ */ new Map();
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/useLocale/index.mjs
function getLocaleDirection(locale) {
	return isLocaleRTL(locale) ? "rtl" : "ltr";
}
function LocaleProvider(props) {
	const { direction, locale, children } = props;
	return direction || locale ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LocaleContext.Provider, {
		value: {
			direction: locale ? getLocaleDirection(locale) : direction,
			locale
		},
		children
	}) : children;
}
function useLocaleContext() {
	return react.default.useContext(LocaleContext);
}
var LocaleContext;
var init_useLocale = __esmMin((() => {
	init_isLocaleRTL();
	LocaleContext = react.default.createContext({
		direction: "ltr",
		locale: "en-US"
	});
}));
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
var init_asyncToGenerator = __esmMin((() => {}));
//#endregion
//#region ../use-element-layout/dist/esm/index.native.js
function _instanceof(left, right) {
	return right != null && typeof Symbol < "u" && right[Symbol.hasInstance] ? !!right[Symbol.hasInstance](left) : left instanceof right;
}
function setOnLayoutStrategy(state) {
	strategy = state;
}
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
function registerLayoutNode(node, onChange, disableKey) {
	return Nodes.add(node), LayoutHandlers.set(node, onChange), disableKey && LayoutDisableKey.set(node, disableKey), startGlobalObservers(), globalIntersectionObserver && (globalIntersectionObserver.observe(node), IntersectionState.set(node, !0)), function() {
		return cleanupNode(node);
	};
}
function cleanupNode(node) {
	Nodes.delete(node), LayoutHandlers.delete(node), LayoutDisableKey.delete(node), NodeRectCache.delete(node), IntersectionState.delete(node), globalIntersectionObserver && globalIntersectionObserver.unobserve(node);
}
function useElementLayout$1(ref, onLayout) {
	var _ref_current, disableKey = (0, react.useContext)(DisableLayoutContextKey), node = ensureWebElement((_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.host);
	node && onLayout && (LayoutHandlers.set(node, onLayout), LayoutDisableKey.set(node, disableKey)), useIsomorphicLayoutEffect(function() {
		var _ref_current2;
		if (onLayout) {
			var nextNode = ensureWebElement((_ref_current2 = ref.current) === null || _ref_current2 === void 0 ? void 0 : _ref_current2.host), prevNode = PrevHostNode.get(ref);
			if (nextNode !== prevNode && (prevNode && cleanupNode(prevNode), PrevHostNode.set(ref, nextNode), !!nextNode)) {
				Nodes.add(nextNode), startGlobalObservers(), globalIntersectionObserver && (globalIntersectionObserver.observe(nextNode), IntersectionState.set(nextNode, !0));
				var handler = LayoutHandlers.get(nextNode);
				if (typeof handler == "function") {
					var parentNode = nextNode.parentElement;
					if (parentNode) {
						var nodeRect = nextNode.getBoundingClientRect(), parentRect = parentNode.getBoundingClientRect();
						NodeRectCache.set(nextNode, nodeRect), NodeRectCache.set(parentNode, parentRect), handler(getElementLayoutEvent(nodeRect, parentRect, nextNode));
					}
				}
			}
		}
	}), useIsomorphicLayoutEffect(function() {
		var _ref_current2;
		if (onLayout) {
			var node2 = (_ref_current2 = ref.current) === null || _ref_current2 === void 0 ? void 0 : _ref_current2.host;
			if (node2) {
				Nodes.add(node2), startGlobalObservers(), globalIntersectionObserver && (globalIntersectionObserver.observe(node2), IntersectionState.set(node2, !0));
				var parentNode = node2.parentNode;
				return parentNode && onLayout(getElementLayoutEvent(node2.getBoundingClientRect(), parentNode.getBoundingClientRect(), node2)), function() {
					cleanupNode(node2);
					var swappedNode = PrevHostNode.get(ref);
					swappedNode && swappedNode !== node2 && cleanupNode(swappedNode), PrevHostNode.delete(ref);
				};
			}
		}
	}, [ref, !!onLayout]);
}
function ensureWebElement(x) {
	if (!(typeof HTMLElement > "u")) return _instanceof(x, HTMLElement) ? x : void 0;
}
function createMeasure(node) {
	return function(callback) {
		return measure(node, callback);
	};
}
function createMeasureLayout(node) {
	return function(relativeTo, callback) {
		return measureLayout$1(node, relativeTo, callback);
	};
}
var LayoutHandlers, LayoutDisableKey, Nodes, IntersectionState, usePretransformDimensions, DisableLayoutContextValues, DisableLayoutContextKey, ENABLE, LayoutMeasurementController, globalIntersectionObserver, strategy, NodeRectCache, avoidUpdates, queuedUpdates, BoundingRects, rectFetchObserver, rectFetchResolve, rectFetchStartTime, lastCallbackDelay, rAF, userSkipVal, BASE_SKIP_FRAMES, MAX_SKIP_FRAMES, skipFrames, frameCount, getElementLayoutEvent, getPreTransformDimensions, getRelativeDimensions, PrevHostNode, getBoundingClientRectAsync, measureNode, measure, measureInWindow, createMeasureInWindow, measureLayout$1;
var init_index_native$11 = __esmMin((() => {
	init_index_native$7();
	init_asyncToGenerator();
	LayoutHandlers = /* @__PURE__ */ new WeakMap(), LayoutDisableKey = /* @__PURE__ */ new WeakMap(), Nodes = /* @__PURE__ */ new Set(), IntersectionState = /* @__PURE__ */ new WeakMap(), usePretransformDimensions = function() {
		return globalThis.__TAMAGUI_ONLAYOUT_PRETRANSFORM === !0 || process.env.TAMAGUI_ONLAYOUT_PRETRANSFORM === "1";
	};
	DisableLayoutContextValues = {}, DisableLayoutContextKey = /* @__PURE__ */ (0, react.createContext)(""), ENABLE = !1, LayoutMeasurementController = function(param) {
		var { disable, children } = param, id = (0, react.useId)();
		return useIsomorphicLayoutEffect(function() {
			DisableLayoutContextValues[id] = disable;
		}, [disable, id]), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DisableLayoutContextKey.Provider, {
			value: id,
			children
		});
	}, globalIntersectionObserver = null, strategy = "async";
	NodeRectCache = /* @__PURE__ */ new WeakMap(), avoidUpdates = !0, queuedUpdates = /* @__PURE__ */ new Map();
	if (ENABLE) {
		let ensureRectFetchObserver = function() {
			return rectFetchObserver || (rectFetchObserver = new IntersectionObserver(function(entries) {
				lastCallbackDelay = Math.round(performance.now() - rectFetchStartTime);
				for (var i = 0; i < entries.length; i++) BoundingRects.set(entries[i].target, entries[i].boundingClientRect);
				rectFetchResolve && (rectFetchResolve(!0), rectFetchResolve = null);
			}, { threshold: 0 }), rectFetchObserver);
		};
		BoundingRects = /* @__PURE__ */ new WeakMap(), rectFetchObserver = null, rectFetchResolve = null, rectFetchStartTime = 0, lastCallbackDelay = 0;
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
		rAF = typeof requestAnimationFrame < "u" ? requestAnimationFrame : void 0, userSkipVal = process.env.TAMAGUI_LAYOUT_FRAME_SKIP, BASE_SKIP_FRAMES = userSkipVal ? +userSkipVal : 10, MAX_SKIP_FRAMES = 20, skipFrames = BASE_SKIP_FRAMES, frameCount = 0;
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
	getElementLayoutEvent = function(nodeRect, parentRect, node) {
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
	PrevHostNode = /* @__PURE__ */ new WeakMap();
	getBoundingClientRectAsync = function(node) {
		return new Promise(function(res) {
			if (!node || node.nodeType !== 1) return res(!1);
			var io = new IntersectionObserver(function(entries) {
				return io.disconnect(), res(entries[0].boundingClientRect);
			}, { threshold: 0 });
			io.observe(node);
		});
	}, measureNode = /* @__PURE__ */ function() {
		var _ref = _asyncToGenerator(function* (node, relativeTo) {
			var relativeNode = relativeTo || (node === null || node === void 0 ? void 0 : node.parentElement);
			if (_instanceof(relativeNode, HTMLElement)) {
				var [nodeDim, relativeNodeDim] = yield Promise.all([getBoundingClientRectAsync(node), getBoundingClientRectAsync(relativeNode)]);
				if (relativeNodeDim && nodeDim) return getRelativeDimensions(nodeDim, relativeNodeDim, node);
			}
			return null;
		});
		return function measureNode(_x2, _x3) {
			return _ref.apply(this, arguments);
		};
	}(), measure = /* @__PURE__ */ function() {
		var _ref2 = _asyncToGenerator(function* (node, callback) {
			var out = yield measureNode(node, _instanceof(node.parentNode, HTMLElement) ? node.parentNode : null);
			return out && (callback === null || callback === void 0 || callback(out.x, out.y, out.width, out.height, out.pageX, out.pageY)), out;
		});
		return function measure(_x4, _x5) {
			return _ref2.apply(this, arguments);
		};
	}();
	measureInWindow = /* @__PURE__ */ function() {
		var _ref3 = _asyncToGenerator(function* (node, callback) {
			var out = yield measureNode(node, null);
			return out && (callback === null || callback === void 0 || callback(out.pageX, out.pageY, out.width, out.height)), out;
		});
		return function measureInWindow(_x6, _x7) {
			return _ref3.apply(this, arguments);
		};
	}(), createMeasureInWindow = function(node) {
		return function(callback) {
			return measureInWindow(node, callback);
		};
	}, measureLayout$1 = /* @__PURE__ */ function() {
		var _ref4 = _asyncToGenerator(function* (node, relativeNode, callback) {
			var out = yield measureNode(node, relativeNode);
			return out && (callback === null || callback === void 0 || callback(out.x, out.y, out.width, out.height, out.pageX, out.pageY)), out;
		});
		return function measureLayout(_x8, _x9, _x10) {
			return _ref4.apply(this, arguments);
		};
	}();
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/useStable/index.mjs
function useStable(getInitialValue) {
	const ref = react.useRef(UNINITIALIZED);
	return ref.current === UNINITIALIZED && (ref.current = getInitialValue()), ref.current;
}
var UNINITIALIZED;
var init_useStable = __esmMin((() => {
	UNINITIALIZED = typeof Symbol == "function" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /* @__PURE__ */ Symbol() : Object.freeze({});
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/usePlatformMethods/index.mjs
function usePlatformMethods({ pointerEvents, style }) {
	return useStable(() => (hostNode) => {
		hostNode != null && (hostNode.measure = createMeasure(hostNode), hostNode.measureLayout = createMeasureLayout(hostNode), hostNode.measureInWindow = createMeasureInWindow(hostNode));
	});
}
var init_usePlatformMethods = __esmMin((() => {
	init_index_native$11();
	init_useStable();
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/TextAncestorContext.mjs
var TextAncestorContext;
var init_TextAncestorContext = __esmMin((() => {
	TextAncestorContext = (0, react.createContext)(!1);
}));
//#endregion
//#region ../react-native-use-pressable/dist/esm/PressResponder.native.js
function _class_call_check$2(instance, Constructor) {
	if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties$2(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
	}
}
function _create_class$2(Constructor, protoProps, staticProps) {
	return protoProps && _defineProperties$2(Constructor.prototype, protoProps), staticProps && _defineProperties$2(Constructor, staticProps), Constructor;
}
function _define_property$2(obj, key, value) {
	return key in obj ? Object.defineProperty(obj, key, {
		value,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : obj[key] = value, obj;
}
function normalizeDelay(delay, min, fallback) {
	return min === void 0 && (min = 0), fallback === void 0 && (fallback = 0), Math.max(min, delay !== null && delay !== void 0 ? delay : fallback);
}
function getTouchFromResponderEvent(event) {
	var _event$nativeEvent = event.nativeEvent, changedTouches = _event$nativeEvent.changedTouches, touches = _event$nativeEvent.touches;
	return touches != null && touches.length > 0 ? touches[0] : changedTouches != null && changedTouches.length > 0 ? changedTouches[0] : event.nativeEvent;
}
var DELAY, ERROR, LONG_PRESS_DETECTED, NOT_RESPONDER, RESPONDER_ACTIVE_LONG_PRESS_START, RESPONDER_ACTIVE_PRESS_START, RESPONDER_INACTIVE_PRESS_START, RESPONDER_GRANT, RESPONDER_RELEASE, RESPONDER_TERMINATED, Transitions, isActiveSignal, isButtonRole, isPressStartSignal, isTerminalSignal, isValidKeyPress, DEFAULT_LONG_PRESS_DELAY_MS, DEFAULT_PRESS_DELAY_MS, PressResponder;
var init_PressResponder_native = __esmMin((() => {
	DELAY = "DELAY", ERROR = "ERROR", LONG_PRESS_DETECTED = "LONG_PRESS_DETECTED", NOT_RESPONDER = "NOT_RESPONDER", RESPONDER_ACTIVE_LONG_PRESS_START = "RESPONDER_ACTIVE_LONG_PRESS_START", RESPONDER_ACTIVE_PRESS_START = "RESPONDER_ACTIVE_PRESS_START", RESPONDER_INACTIVE_PRESS_START = "RESPONDER_INACTIVE_PRESS_START", RESPONDER_GRANT = "RESPONDER_GRANT", RESPONDER_RELEASE = "RESPONDER_RELEASE", RESPONDER_TERMINATED = "RESPONDER_TERMINATED", Transitions = Object.freeze({
		NOT_RESPONDER: {
			DELAY: ERROR,
			RESPONDER_GRANT: RESPONDER_INACTIVE_PRESS_START,
			RESPONDER_RELEASE: ERROR,
			RESPONDER_TERMINATED: ERROR,
			LONG_PRESS_DETECTED: ERROR
		},
		RESPONDER_INACTIVE_PRESS_START: {
			DELAY: RESPONDER_ACTIVE_PRESS_START,
			RESPONDER_GRANT: ERROR,
			RESPONDER_RELEASE: NOT_RESPONDER,
			RESPONDER_TERMINATED: NOT_RESPONDER,
			LONG_PRESS_DETECTED: ERROR
		},
		RESPONDER_ACTIVE_PRESS_START: {
			DELAY: ERROR,
			RESPONDER_GRANT: ERROR,
			RESPONDER_RELEASE: NOT_RESPONDER,
			RESPONDER_TERMINATED: NOT_RESPONDER,
			LONG_PRESS_DETECTED: RESPONDER_ACTIVE_LONG_PRESS_START
		},
		RESPONDER_ACTIVE_LONG_PRESS_START: {
			DELAY: ERROR,
			RESPONDER_GRANT: ERROR,
			RESPONDER_RELEASE: NOT_RESPONDER,
			RESPONDER_TERMINATED: NOT_RESPONDER,
			LONG_PRESS_DETECTED: RESPONDER_ACTIVE_LONG_PRESS_START
		},
		ERROR: {
			DELAY: NOT_RESPONDER,
			RESPONDER_GRANT: RESPONDER_INACTIVE_PRESS_START,
			RESPONDER_RELEASE: NOT_RESPONDER,
			RESPONDER_TERMINATED: NOT_RESPONDER,
			LONG_PRESS_DETECTED: NOT_RESPONDER
		}
	}), isActiveSignal = function(signal) {
		return signal === RESPONDER_ACTIVE_PRESS_START || signal === RESPONDER_ACTIVE_LONG_PRESS_START;
	}, isButtonRole = function(element) {
		return element.getAttribute("role") === "button";
	}, isPressStartSignal = function(signal) {
		return signal === RESPONDER_INACTIVE_PRESS_START || signal === RESPONDER_ACTIVE_PRESS_START || signal === RESPONDER_ACTIVE_LONG_PRESS_START;
	}, isTerminalSignal = function(signal) {
		return signal === RESPONDER_TERMINATED || signal === RESPONDER_RELEASE;
	}, isValidKeyPress = function(event) {
		var key = event.key, role = event.target.getAttribute("role");
		return key === "Enter" || (key === " " || key === "Spacebar") && role === "button";
	}, DEFAULT_LONG_PRESS_DELAY_MS = 450, DEFAULT_PRESS_DELAY_MS = 50, PressResponder = /* @__PURE__ */ function() {
		"use strict";
		function PressResponder2(config) {
			_class_call_check$2(this, PressResponder2), _define_property$2(this, "_touchActivatePosition", null), _define_property$2(this, "_pressDelayTimeout", 0), _define_property$2(this, "_selectionTerminated", !1), _define_property$2(this, "_isPointerTouch", !1), _define_property$2(this, "_longPressDelayTimeout", 0), _define_property$2(this, "_longPressDispatched", !1), _define_property$2(this, "_pressOutDelayTimeout", 0), _define_property$2(this, "_touchState", NOT_RESPONDER), _define_property$2(this, "_config", null), _define_property$2(this, "_eventHandlers", null), this.configure(config);
		}
		return _create_class$2(PressResponder2, [
			{
				key: "configure",
				value: function(config) {
					this._config = config;
				}
			},
			{
				key: "reset",
				value: function() {
					this._cancelLongPressDelayTimeout(), this._cancelPressDelayTimeout(), this._cancelPressOutDelayTimeout();
				}
			},
			{
				key: "getEventHandlers",
				value: function() {
					return this._eventHandlers == null && (this._eventHandlers = this._createEventHandlers()), this._eventHandlers;
				}
			},
			{
				key: "_createEventHandlers",
				value: function() {
					var _this = this, start = function(event, shouldDelay) {
						event.persist(), _this._cancelPressOutDelayTimeout(), _this._longPressDispatched = !1, _this._selectionTerminated = !1, _this._touchState = NOT_RESPONDER, _this._isPointerTouch = event.nativeEvent.type === "touchstart", _this._receiveSignal(RESPONDER_GRANT, event);
						var delayPressStart = normalizeDelay(_this._config.delayPressStart, 0, DEFAULT_PRESS_DELAY_MS);
						shouldDelay !== !1 && delayPressStart > 0 ? _this._pressDelayTimeout = setTimeout(function() {
							_this._receiveSignal(DELAY, event);
						}, delayPressStart) : _this._receiveSignal(DELAY, event);
						var delayLongPress = normalizeDelay(_this._config.delayLongPress, 10, DEFAULT_LONG_PRESS_DELAY_MS);
						_this._longPressDelayTimeout = setTimeout(function() {
							_this._handleLongPress(event);
						}, delayLongPress + delayPressStart);
					}, end = function(event) {
						_this._receiveSignal(RESPONDER_RELEASE, event);
					}, keyupHandler = function(event) {
						var onPress = _this._config.onPress, target = event.target;
						if (_this._touchState !== NOT_RESPONDER && isValidKeyPress(event)) {
							end(event), document.removeEventListener("keyup", keyupHandler);
							var role = target.getAttribute("role"), elementType = target.tagName.toLowerCase();
							onPress != null && !(role === "link" || elementType === "a" || elementType === "button" || elementType === "input" || elementType === "select" || elementType === "textarea") && onPress(event);
						}
					};
					return {
						onStartShouldSetResponder: function(event) {
							var disabled = _this._config.disabled;
							return disabled && isButtonRole(event.currentTarget) && event.stopPropagation(), disabled == null ? !0 : !disabled;
						},
						onKeyDown: function(event) {
							var disabled = _this._config.disabled, key = event.key, target = event.target;
							if (!disabled && isValidKeyPress(event)) {
								_this._touchState === NOT_RESPONDER && (start(event, !1), document.addEventListener("keyup", keyupHandler));
								var role = target.getAttribute("role");
								(key === " " || key === "Spacebar") && (role === "button" || role === "menuitem") && event.preventDefault(), event.stopPropagation();
							}
						},
						onResponderGrant: function(event) {
							return start(event);
						},
						onResponderMove: function(event) {
							_this._config.onPressMove != null && _this._config.onPressMove(event);
							var touch = getTouchFromResponderEvent(event);
							if (_this._touchActivatePosition != null) {
								var deltaX = _this._touchActivatePosition.pageX - touch.pageX, deltaY = _this._touchActivatePosition.pageY - touch.pageY;
								Math.hypot(deltaX, deltaY) > 10 && _this._cancelLongPressDelayTimeout();
							}
						},
						onResponderRelease: function(event) {
							return end(event);
						},
						onResponderTerminate: function(event) {
							event.nativeEvent.type === "selectionchange" && (_this._selectionTerminated = !0), _this._receiveSignal(RESPONDER_TERMINATED, event);
						},
						onResponderTerminationRequest: function(event) {
							var _this$_config = _this._config, cancelable = _this$_config.cancelable, disabled = _this$_config.disabled, onLongPress = _this$_config.onLongPress;
							return !disabled && onLongPress != null && _this._isPointerTouch && event.nativeEvent.type === "contextmenu" ? !1 : cancelable !== null && cancelable !== void 0 ? cancelable : !0;
						},
						onClick: function(event) {
							var _this$_config2 = _this._config, disabled = _this$_config2.disabled, onPress = _this$_config2.onPress;
							disabled ? isButtonRole(event.currentTarget) && event.stopPropagation() : (event.stopPropagation(), _this._longPressDispatched || _this._selectionTerminated ? event.preventDefault() : onPress != null && event.altKey === !1 && onPress(event));
						},
						onContextMenu: function(event) {
							var _this$_config3 = _this._config, disabled = _this$_config3.disabled, onLongPress = _this$_config3.onLongPress;
							disabled ? isButtonRole(event.currentTarget) && event.stopPropagation() : onLongPress != null && _this._isPointerTouch && !event.defaultPrevented && (event.preventDefault(), event.stopPropagation());
						}
					};
				}
			},
			{
				key: "_receiveSignal",
				value: function(signal, event) {
					var prevState = this._touchState, nextState = null;
					Transitions[prevState] != null && (nextState = Transitions[prevState][signal]), !(this._touchState === NOT_RESPONDER && signal === RESPONDER_RELEASE) && (nextState == null || nextState === ERROR ? console.error(`PressResponder: Invalid signal ${signal} for state ${prevState} on responder`) : prevState !== nextState && (this._performTransitionSideEffects(prevState, nextState, signal, event), this._touchState = nextState));
				}
			},
			{
				key: "_performTransitionSideEffects",
				value: function(prevState, nextState, signal, event) {
					var _this = this;
					if (isTerminalSignal(signal) && (setTimeout(function() {
						_this._isPointerTouch = !1;
					}, 0), this._touchActivatePosition = null, this._cancelLongPressDelayTimeout()), isPressStartSignal(prevState) && signal === LONG_PRESS_DETECTED) {
						var onLongPress = this._config.onLongPress;
						onLongPress != null && event.nativeEvent.key == null && (onLongPress(event), this._longPressDispatched = !0);
					}
					var isPrevActive = isActiveSignal(prevState), isNextActive = isActiveSignal(nextState);
					if (!isPrevActive && isNextActive ? this._activate(event) : isPrevActive && !isNextActive && this._deactivate(event), isPressStartSignal(prevState) && signal === RESPONDER_RELEASE) {
						var _this$_config4 = this._config, _onLongPress = _this$_config4.onLongPress;
						if (_this$_config4.onPress != null) _onLongPress != null && prevState === RESPONDER_ACTIVE_LONG_PRESS_START || isNextActive || isPrevActive || (this._activate(event), this._deactivate(event));
					}
					this._cancelPressDelayTimeout();
				}
			},
			{
				key: "_activate",
				value: function(event) {
					var _this$_config5 = this._config, onPressChange = _this$_config5.onPressChange, onPressStart = _this$_config5.onPressStart, touch = getTouchFromResponderEvent(event);
					this._touchActivatePosition = {
						pageX: touch.pageX,
						pageY: touch.pageY
					}, onPressStart === null || onPressStart === void 0 || onPressStart(event), onPressChange === null || onPressChange === void 0 || onPressChange(!0);
				}
			},
			{
				key: "_deactivate",
				value: function(event) {
					var _this$_config6 = this._config, onPressChange = _this$_config6.onPressChange, onPressEnd = _this$_config6.onPressEnd;
					function end() {
						onPressEnd === null || onPressEnd === void 0 || onPressEnd(event), onPressChange === null || onPressChange === void 0 || onPressChange(!1);
					}
					var delayPressEnd = normalizeDelay(this._config.delayPressEnd);
					delayPressEnd > 0 ? this._pressOutDelayTimeout = setTimeout(function() {
						end();
					}, delayPressEnd) : end();
				}
			},
			{
				key: "_handleLongPress",
				value: function(event) {
					(this._touchState === RESPONDER_ACTIVE_PRESS_START || this._touchState === RESPONDER_ACTIVE_LONG_PRESS_START) && this._receiveSignal(LONG_PRESS_DETECTED, event);
				}
			},
			{
				key: "_cancelLongPressDelayTimeout",
				value: function() {
					this._longPressDelayTimeout != null && (clearTimeout(this._longPressDelayTimeout), this._longPressDelayTimeout = null);
				}
			},
			{
				key: "_cancelPressDelayTimeout",
				value: function() {
					this._pressDelayTimeout != null && (clearTimeout(this._pressDelayTimeout), this._pressDelayTimeout = null);
				}
			},
			{
				key: "_cancelPressOutDelayTimeout",
				value: function() {
					this._pressOutDelayTimeout != null && (clearTimeout(this._pressOutDelayTimeout), this._pressOutDelayTimeout = null);
				}
			}
		]), PressResponder2;
	}();
}));
//#endregion
//#region ../react-native-use-pressable/dist/esm/index.native.js
function usePressEvents(_, config) {
	var pressResponderRef = react.default.useRef(null);
	pressResponderRef.current == null && (pressResponderRef.current = new PressResponder(config));
	var pressResponder = pressResponderRef.current;
	return react.default.useEffect(function() {
		pressResponder.configure(config);
	}, [config, pressResponder]), react.default.useEffect(function() {
		return function() {
			pressResponder.reset();
		};
	}, [pressResponder]), react.default.useDebugValue(config), pressResponder.getEventHandlers();
}
var init_index_native$10 = __esmMin((() => {
	init_PressResponder_native();
}));
//#endregion
//#region ../react-native-use-responder-events/dist/esm/utils.native.js
function getEventPath(domEvent) {
	if (domEvent.type === "selectionchange") {
		var _window_getSelection;
		return composedPathFallback((_window_getSelection = window.getSelection()) === null || _window_getSelection === void 0 ? void 0 : _window_getSelection.anchorNode);
	}
	return domEvent.composedPath != null ? domEvent.composedPath() : composedPathFallback(domEvent.target);
}
function composedPathFallback(target) {
	for (var path = []; target != null && target !== document.body;) path.push(target), target = target.parentNode;
	return path;
}
function getResponderId(node) {
	return node != null ? node[keyName] : null;
}
function setResponderId(node, id) {
	node != null && (node[keyName] = id);
}
function getResponderPaths(domEvent) {
	for (var idPath = [], nodePath = [], eventPath = getEventPath(domEvent), i = 0; i < eventPath.length; i++) {
		var node = eventPath[i], id = getResponderId(node);
		id != null && (idPath.push(id), nodePath.push(node));
	}
	return {
		idPath,
		nodePath
	};
}
function getLowestCommonAncestor(pathA, pathB) {
	var pathALength = pathA.length, pathBLength = pathB.length;
	if (pathALength === 0 || pathBLength === 0 || pathA[pathALength - 1] !== pathB[pathBLength - 1]) return null;
	var itemA = pathA[0], indexA = 0, itemB = pathB[0], indexB = 0;
	pathALength - pathBLength > 0 && (indexA = pathALength - pathBLength, itemA = pathA[indexA], pathALength = pathBLength), pathBLength - pathALength > 0 && (indexB = pathBLength - pathALength, itemB = pathB[indexB], pathBLength = pathALength);
	for (var depth = pathALength; depth--;) {
		if (itemA === itemB) return itemA;
		itemA = pathA[indexA++], itemB = pathB[indexB++];
	}
	return null;
}
function hasTargetTouches(target, touches) {
	if (!touches || touches.length === 0) return !1;
	for (var i = 0; i < touches.length; i++) {
		var node = touches[i].target;
		if (node != null && target.contains(node)) return !0;
	}
	return !1;
}
function hasValidSelection(domEvent) {
	return domEvent.type === "selectionchange" ? isSelectionValid() : domEvent.type === "select";
}
function isPrimaryPointerDown(domEvent) {
	var { altKey, button, buttons, ctrlKey, type } = domEvent, isTouch = type === "touchstart" || type === "touchmove", isPrimaryMouseDown = type === "mousedown" && (button === 0 || buttons === 1), isPrimaryMouseMove = type === "mousemove" && buttons === 1, noModifiers = altKey === !1 && ctrlKey === !1;
	return !!(isTouch || isPrimaryMouseDown && noModifiers || isPrimaryMouseMove && noModifiers);
}
function isSelectionValid() {
	var selection = window.getSelection();
	if (!selection) return !1;
	var string = selection.toString(), anchorNode = selection.anchorNode, focusNode = selection.focusNode, isTextNode = anchorNode && anchorNode.nodeType === window.Node.TEXT_NODE || focusNode && focusNode.nodeType === window.Node.TEXT_NODE;
	return string.length >= 1 && string !== `
` && !!isTextNode;
}
var keyName, canUseDOM, getBoundingClientRect;
var init_utils_native = __esmMin((() => {
	keyName = "__reactResponderId", canUseDOM = !!(typeof window < "u" && window.document && window.document.createElement), getBoundingClientRect = function(node) {
		if (node && node.nodeType === 1 && node.getBoundingClientRect) return node.getBoundingClientRect();
	};
}));
//#endregion
//#region ../react-native-use-responder-events/dist/esm/createResponderEvent.native.js
function normalizeIdentifier(identifier) {
	return identifier > 20 ? identifier % 20 : identifier;
}
function createResponderEvent(domEvent, responderTouchHistoryStore) {
	var rect, propagationWasStopped = !1, changedTouches, touches, domEventChangedTouches = domEvent.changedTouches, domEventType = domEvent.type, metaKey = domEvent.metaKey === !0, shiftKey = domEvent.shiftKey === !0, force = (domEventChangedTouches === null || domEventChangedTouches === void 0 ? void 0 : domEventChangedTouches[0].force) || 0, identifier = normalizeIdentifier((domEventChangedTouches === null || domEventChangedTouches === void 0 ? void 0 : domEventChangedTouches[0].identifier) || 0), clientX = (domEventChangedTouches === null || domEventChangedTouches === void 0 ? void 0 : domEventChangedTouches[0].clientX) || domEvent.clientX, clientY = (domEventChangedTouches === null || domEventChangedTouches === void 0 ? void 0 : domEventChangedTouches[0].clientY) || domEvent.clientY, pageX = (domEventChangedTouches === null || domEventChangedTouches === void 0 ? void 0 : domEventChangedTouches[0].pageX) || domEvent.pageX, pageY = (domEventChangedTouches === null || domEventChangedTouches === void 0 ? void 0 : domEventChangedTouches[0].pageY) || domEvent.pageY, preventDefault = typeof domEvent.preventDefault == "function" ? domEvent.preventDefault.bind(domEvent) : emptyFunction$2, timestamp = domEvent.timeStamp;
	function normalizeTouches(touches2) {
		return Array.prototype.slice.call(touches2).map(function(touch) {
			return {
				force: touch.force,
				identifier: normalizeIdentifier(touch.identifier),
				get locationX() {
					return locationX(touch.clientX);
				},
				get locationY() {
					return locationY(touch.clientY);
				},
				pageX: touch.pageX,
				pageY: touch.pageY,
				target: touch.target,
				timestamp
			};
		});
	}
	if (domEventChangedTouches != null) changedTouches = normalizeTouches(domEventChangedTouches), touches = normalizeTouches(domEvent.touches);
	else {
		var emulatedTouches = [{
			force,
			identifier,
			get locationX() {
				return locationX(clientX);
			},
			get locationY() {
				return locationY(clientY);
			},
			pageX,
			pageY,
			target: domEvent.target,
			timestamp
		}];
		changedTouches = emulatedTouches, touches = domEventType === "mouseup" || domEventType === "dragstart" ? emptyArray : emulatedTouches;
	}
	var responderEvent = {
		bubbles: !0,
		cancelable: !0,
		currentTarget: null,
		defaultPrevented: domEvent.defaultPrevented,
		dispatchConfig: emptyObject$10,
		eventPhase: domEvent.eventPhase,
		isDefaultPrevented() {
			return domEvent.defaultPrevented;
		},
		isPropagationStopped() {
			return propagationWasStopped;
		},
		isTrusted: domEvent.isTrusted,
		nativeEvent: {
			altKey: !1,
			ctrlKey: !1,
			metaKey,
			shiftKey,
			changedTouches,
			force,
			identifier,
			get locationX() {
				return locationX(clientX);
			},
			get locationY() {
				return locationY(clientY);
			},
			pageX,
			pageY,
			target: domEvent.target,
			timestamp,
			touches,
			type: domEventType
		},
		persist: emptyFunction$2,
		preventDefault,
		stopPropagation() {
			propagationWasStopped = !0;
		},
		target: domEvent.target,
		timeStamp: timestamp,
		touchHistory: responderTouchHistoryStore.touchHistory
	};
	function locationX(x) {
		if (rect = rect || getBoundingClientRect(responderEvent.currentTarget), rect) return x - rect.left;
	}
	function locationY(y) {
		if (rect = rect || getBoundingClientRect(responderEvent.currentTarget), rect) return y - rect.top;
	}
	return responderEvent;
}
var emptyFunction$2, emptyObject$10, emptyArray;
var init_createResponderEvent_native = __esmMin((() => {
	init_utils_native();
	emptyFunction$2 = function() {}, emptyObject$10 = {}, emptyArray = [];
}));
//#endregion
//#region ../react-native-use-responder-events/dist/esm/types.native.js
function isStartish(eventType) {
	return eventType === "touchstart" || eventType === "mousedown";
}
function isMoveish(eventType) {
	return eventType === "touchmove" || eventType === "mousemove";
}
function isEndish(eventType) {
	return eventType === "touchend" || eventType === "mouseup" || isCancelish(eventType);
}
function isCancelish(eventType) {
	return eventType === "touchcancel" || eventType === "dragstart";
}
function isScroll(eventType) {
	return eventType === SCROLL;
}
function isSelectionChange(eventType) {
	return eventType === "select" || eventType === "selectionchange";
}
var SCROLL;
var init_types_native$1 = __esmMin((() => {
	SCROLL = "scroll";
}));
//#endregion
//#region ../react-native-use-responder-events/dist/esm/ResponderTouchHistoryStore.native.js
function _class_call_check$1(instance, Constructor) {
	if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties$1(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
	}
}
function _create_class$1(Constructor, protoProps, staticProps) {
	return protoProps && _defineProperties$1(Constructor.prototype, protoProps), staticProps && _defineProperties$1(Constructor, staticProps), Constructor;
}
function _define_property$1(obj, key, value) {
	return key in obj ? Object.defineProperty(obj, key, {
		value,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : obj[key] = value, obj;
}
function timestampForTouch(touch) {
	return touch.timeStamp || touch.timestamp;
}
function createTouchRecord(touch) {
	return {
		touchActive: !0,
		startPageX: touch.pageX,
		startPageY: touch.pageY,
		startTimeStamp: timestampForTouch(touch),
		currentPageX: touch.pageX,
		currentPageY: touch.pageY,
		currentTimeStamp: timestampForTouch(touch),
		previousPageX: touch.pageX,
		previousPageY: touch.pageY,
		previousTimeStamp: timestampForTouch(touch)
	};
}
function resetTouchRecord(touchRecord, touch) {
	touchRecord.touchActive = !0, touchRecord.startPageX = touch.pageX, touchRecord.startPageY = touch.pageY, touchRecord.startTimeStamp = timestampForTouch(touch), touchRecord.currentPageX = touch.pageX, touchRecord.currentPageY = touch.pageY, touchRecord.currentTimeStamp = timestampForTouch(touch), touchRecord.previousPageX = touch.pageX, touchRecord.previousPageY = touch.pageY, touchRecord.previousTimeStamp = timestampForTouch(touch);
}
function getTouchIdentifier(param) {
	var { identifier } = param;
	return identifier == null && console.error("Touch object is missing identifier."), identifier;
}
function recordTouchStart(touch, touchHistory) {
	var identifier = getTouchIdentifier(touch), touchRecord = touchHistory.touchBank[identifier];
	touchRecord ? resetTouchRecord(touchRecord, touch) : touchHistory.touchBank[identifier] = createTouchRecord(touch), touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
}
function recordTouchMove(touch, touchHistory) {
	var touchRecord = touchHistory.touchBank[getTouchIdentifier(touch)];
	touchRecord ? (touchRecord.touchActive = !0, touchRecord.previousPageX = touchRecord.currentPageX, touchRecord.previousPageY = touchRecord.currentPageY, touchRecord.previousTimeStamp = touchRecord.currentTimeStamp, touchRecord.currentPageX = touch.pageX, touchRecord.currentPageY = touch.pageY, touchRecord.currentTimeStamp = timestampForTouch(touch), touchHistory.mostRecentTimeStamp = timestampForTouch(touch)) : console.warn(`Cannot record touch move without a touch start.
`, `Touch Move: ${printTouch(touch)}
`, `Touch Bank: ${printTouchBank(touchHistory)}`);
}
function recordTouchEnd(touch, touchHistory) {
	var touchRecord = touchHistory.touchBank[getTouchIdentifier(touch)];
	touchRecord ? (touchRecord.touchActive = !1, touchRecord.previousPageX = touchRecord.currentPageX, touchRecord.previousPageY = touchRecord.currentPageY, touchRecord.previousTimeStamp = touchRecord.currentTimeStamp, touchRecord.currentPageX = touch.pageX, touchRecord.currentPageY = touch.pageY, touchRecord.currentTimeStamp = timestampForTouch(touch), touchHistory.mostRecentTimeStamp = timestampForTouch(touch)) : console.warn(`Cannot record touch end without a touch start.
`, `Touch End: ${printTouch(touch)}
`, `Touch Bank: ${printTouchBank(touchHistory)}`);
}
function printTouch(touch) {
	return JSON.stringify({
		identifier: touch.identifier,
		pageX: touch.pageX,
		pageY: touch.pageY,
		timestamp: timestampForTouch(touch)
	});
}
function printTouchBank(touchHistory) {
	var { touchBank } = touchHistory, printed = JSON.stringify(touchBank.slice(0, MAX_TOUCH_BANK));
	return touchBank.length > MAX_TOUCH_BANK && (printed += ` (original size: ${touchBank.length})`), printed;
}
var ResponderTouchHistoryStore, MAX_TOUCH_BANK;
var init_ResponderTouchHistoryStore_native = __esmMin((() => {
	init_types_native$1();
	ResponderTouchHistoryStore = /* @__PURE__ */ function() {
		"use strict";
		function ResponderTouchHistoryStore2() {
			_class_call_check$1(this, ResponderTouchHistoryStore2), _define_property$1(this, "_touchHistory", {
				touchBank: [],
				numberActiveTouches: 0,
				indexOfSingleActiveTouch: -1,
				mostRecentTimeStamp: 0
			});
		}
		return _create_class$1(ResponderTouchHistoryStore2, [{
			key: "recordTouchTrack",
			value: function(topLevelType, nativeEvent) {
				var touchHistory = this._touchHistory;
				if (isMoveish(topLevelType)) nativeEvent.changedTouches.forEach(function(touch) {
					return recordTouchMove(touch, touchHistory);
				});
				else if (isStartish(topLevelType)) nativeEvent.changedTouches.forEach(function(touch) {
					return recordTouchStart(touch, touchHistory);
				}), touchHistory.numberActiveTouches = nativeEvent.touches.length, touchHistory.numberActiveTouches === 1 && (touchHistory.indexOfSingleActiveTouch = nativeEvent.touches[0].identifier);
				else if (isEndish(topLevelType) && (nativeEvent.changedTouches.forEach(function(touch) {
					return recordTouchEnd(touch, touchHistory);
				}), touchHistory.numberActiveTouches = nativeEvent.touches.length, touchHistory.numberActiveTouches === 1)) for (var { touchBank } = touchHistory, i = 0; i < touchBank.length; i++) {
					var touchTrackToCheck = touchBank[i];
					if (touchTrackToCheck === null || touchTrackToCheck === void 0 ? void 0 : touchTrackToCheck.touchActive) {
						touchHistory.indexOfSingleActiveTouch = i;
						break;
					}
				}
			}
		}, {
			key: "touchHistory",
			get: function() {
				return this._touchHistory;
			}
		}]), ResponderTouchHistoryStore2;
	}(), MAX_TOUCH_BANK = 20;
}));
//#endregion
//#region ../react-native-use-responder-events/dist/esm/ResponderSystem.native.js
function changeCurrentResponder(responder) {
	currentResponder = responder;
}
function getResponderConfig(id) {
	var config = responderListenersMap.get(id);
	return config !== null && config !== void 0 ? config : emptyObject$9;
}
function eventListener(domEvent) {
	var eventType = domEvent.type, eventTarget = domEvent.target;
	if (eventType === "touchstart" && (isEmulatingMouseEvents = !0), (eventType === "touchmove" || trackedTouchCount > 1) && (isEmulatingMouseEvents = !1), !(eventType === "mousedown" && isEmulatingMouseEvents || eventType === "mousemove" && isEmulatingMouseEvents || eventType === "mousemove" && trackedTouchCount < 1)) {
		if (isEmulatingMouseEvents && eventType === "mouseup") {
			trackedTouchCount === 0 && (isEmulatingMouseEvents = !1);
			return;
		}
		var isStartEvent = isStartish(eventType) && isPrimaryPointerDown(domEvent), isMoveEvent = isMoveish(eventType), isEndEvent = isEndish(eventType), isScrollEvent = isScroll(eventType), isSelectionChangeEvent = isSelectionChange(eventType), responderEvent = createResponderEvent(domEvent, responderTouchHistoryStore);
		(isStartEvent || isMoveEvent || isEndEvent) && (domEvent.touches ? trackedTouchCount = domEvent.touches.length : isStartEvent ? trackedTouchCount = 1 : isEndEvent && (trackedTouchCount = 0), responderTouchHistoryStore.recordTouchTrack(eventType, responderEvent.nativeEvent));
		var eventPaths = getResponderPaths(domEvent), wasNegotiated = !1, wantsResponder;
		if (isStartEvent || isMoveEvent || isScrollEvent && trackedTouchCount > 0) {
			var currentResponderIdPath = currentResponder.idPath, eventIdPath = eventPaths.idPath;
			if (currentResponderIdPath != null && eventIdPath != null) {
				var lowestCommonAncestor = getLowestCommonAncestor(currentResponderIdPath, eventIdPath);
				if (lowestCommonAncestor != null) {
					var index = eventIdPath.indexOf(lowestCommonAncestor) + (lowestCommonAncestor === currentResponder.id ? 1 : 0);
					eventPaths = {
						idPath: eventIdPath.slice(index),
						nodePath: eventPaths.nodePath.slice(index)
					};
				} else eventPaths = null;
			}
			eventPaths != null && (wantsResponder = findWantsResponder(eventPaths, domEvent, responderEvent), wantsResponder != null && (attemptTransfer(responderEvent, wantsResponder), wasNegotiated = !0));
		}
		if (currentResponder.id != null && currentResponder.node != null) {
			var { id, node } = currentResponder, { onResponderStart, onResponderMove, onResponderEnd, onResponderRelease, onResponderTerminate, onResponderTerminationRequest } = getResponderConfig(id);
			if (responderEvent.bubbles = !1, responderEvent.cancelable = !1, responderEvent.currentTarget = node, isStartEvent) onResponderStart != null && (responderEvent.dispatchConfig.registrationName = "onResponderStart", onResponderStart(responderEvent));
			else if (isMoveEvent) onResponderMove != null && (responderEvent.dispatchConfig.registrationName = "onResponderMove", onResponderMove(responderEvent));
			else {
				var isTerminateEvent = isCancelish(eventType) || eventType === "contextmenu" || eventType === "blur" && eventTarget === window || eventType === "blur" && eventTarget.contains(node) && domEvent.relatedTarget !== node || isScrollEvent && trackedTouchCount === 0 || isScrollEvent && eventTarget.contains(node) && eventTarget !== node || isSelectionChangeEvent && hasValidSelection(domEvent), isReleaseEvent = isEndEvent && !isTerminateEvent && !hasTargetTouches(node, domEvent.touches);
				if (isEndEvent && onResponderEnd != null && (responderEvent.dispatchConfig.registrationName = "onResponderEnd", onResponderEnd(responderEvent)), isReleaseEvent && (onResponderRelease != null && (responderEvent.dispatchConfig.registrationName = "onResponderRelease", onResponderRelease(responderEvent)), changeCurrentResponder(emptyResponder)), isTerminateEvent) {
					var shouldTerminate = !0;
					(eventType === "contextmenu" || eventType === "scroll" || eventType === "selectionchange") && (wasNegotiated ? shouldTerminate = !1 : onResponderTerminationRequest != null && (responderEvent.dispatchConfig.registrationName = "onResponderTerminationRequest", onResponderTerminationRequest(responderEvent) === !1 && (shouldTerminate = !1))), shouldTerminate && (onResponderTerminate != null && (responderEvent.dispatchConfig.registrationName = "onResponderTerminate", onResponderTerminate(responderEvent)), changeCurrentResponder(emptyResponder), isEmulatingMouseEvents = !1, trackedTouchCount = 0);
				}
			}
		}
	}
}
function findWantsResponder(eventPaths, domEvent, responderEvent) {
	var shouldSetCallbacks = shouldSetResponderEvents[domEvent.type];
	if (shouldSetCallbacks != null) {
		for (var { idPath, nodePath } = eventPaths, shouldSetCallbackCaptureName = shouldSetCallbacks[0], shouldSetCallbackBubbleName = shouldSetCallbacks[1], { bubbles } = shouldSetCallbacks[2], check = function(id3, node3, callbackName) {
			var shouldSetCallback = getResponderConfig(id3)[callbackName];
			if (shouldSetCallback != null && (responderEvent.currentTarget = node3, shouldSetCallback(responderEvent) === !0)) return {
				id: id3,
				node: node3,
				idPath: idPath.slice(idPath.indexOf(id3))
			};
		}, i = idPath.length - 1; i >= 0; i--) {
			var id = idPath[i], node = nodePath[i], result = check(id, node, shouldSetCallbackCaptureName);
			if (result != null) return result;
			if (responderEvent.isPropagationStopped() === !0) return;
		}
		if (bubbles) for (var i1 = 0; i1 < idPath.length; i1++) {
			var id1 = idPath[i1], node1 = nodePath[i1], result1 = check(id1, node1, shouldSetCallbackBubbleName);
			if (result1 != null) return result1;
			if (responderEvent.isPropagationStopped() === !0) return;
		}
		else {
			var id2 = idPath[0], node2 = nodePath[0];
			if (domEvent.target === node2) return check(id2, node2, shouldSetCallbackBubbleName);
		}
	}
}
function attemptTransfer(responderEvent, wantsResponder) {
	var { id: currentId, node: currentNode } = currentResponder, { id, node } = wantsResponder, { onResponderGrant, onResponderReject } = getResponderConfig(id);
	if (responderEvent.bubbles = !1, responderEvent.cancelable = !1, responderEvent.currentTarget = node, currentId == null) onResponderGrant != null && (responderEvent.currentTarget = node, responderEvent.dispatchConfig.registrationName = "onResponderGrant", onResponderGrant(responderEvent)), changeCurrentResponder(wantsResponder);
	else {
		var { onResponderTerminate, onResponderTerminationRequest } = getResponderConfig(currentId), allowTransfer = !0;
		onResponderTerminationRequest != null && (responderEvent.currentTarget = currentNode, responderEvent.dispatchConfig.registrationName = "onResponderTerminationRequest", onResponderTerminationRequest(responderEvent) === !1 && (allowTransfer = !1)), allowTransfer ? (onResponderTerminate != null && (responderEvent.currentTarget = currentNode, responderEvent.dispatchConfig.registrationName = "onResponderTerminate", onResponderTerminate(responderEvent)), onResponderGrant != null && (responderEvent.currentTarget = node, responderEvent.dispatchConfig.registrationName = "onResponderGrant", onResponderGrant(responderEvent)), changeCurrentResponder(wantsResponder)) : onResponderReject != null && (responderEvent.currentTarget = node, responderEvent.dispatchConfig.registrationName = "onResponderReject", onResponderReject(responderEvent));
	}
}
function attachListeners() {
	canUseDOM && !window[isTamaguiResponderActive] && (window.addEventListener("blur", eventListener), documentEventsBubblePhase.forEach(function(eventType) {
		document.addEventListener(eventType, eventListener);
	}), documentEventsCapturePhase.forEach(function(eventType) {
		document.addEventListener(eventType, eventListener, !0);
	}), window[isTamaguiResponderActive] = !0);
}
function addNode(id, node, config) {
	setResponderId(node, id), responderListenersMap.set(id, config);
}
function removeNode(id) {
	currentResponder.id === id && terminateResponder(), responderListenersMap.has(id) && responderListenersMap.delete(id);
}
function terminateResponder() {
	var { id, node } = currentResponder;
	if (id != null && node != null) {
		var { onResponderTerminate } = getResponderConfig(id);
		if (onResponderTerminate != null) {
			var event = createResponderEvent({}, responderTouchHistoryStore);
			event.currentTarget = node, onResponderTerminate(event);
		}
		changeCurrentResponder(emptyResponder);
	}
	isEmulatingMouseEvents = !1, trackedTouchCount = 0;
}
var emptyObject$9, startRegistration, moveRegistration, shouldSetResponderEvents, emptyResponder, responderListenersMap, isEmulatingMouseEvents, trackedTouchCount, currentResponder, responderTouchHistoryStore, documentEventsCapturePhase, documentEventsBubblePhase, isTamaguiResponderActive;
var init_ResponderSystem_native = __esmMin((() => {
	init_createResponderEvent_native();
	init_ResponderTouchHistoryStore_native();
	init_types_native$1();
	init_utils_native();
	emptyObject$9 = {}, startRegistration = [
		"onStartShouldSetResponderCapture",
		"onStartShouldSetResponder",
		{ bubbles: !0 }
	], moveRegistration = [
		"onMoveShouldSetResponderCapture",
		"onMoveShouldSetResponder",
		{ bubbles: !0 }
	], shouldSetResponderEvents = {
		touchstart: startRegistration,
		mousedown: startRegistration,
		touchmove: moveRegistration,
		mousemove: moveRegistration,
		scroll: [
			"onScrollShouldSetResponderCapture",
			"onScrollShouldSetResponder",
			{ bubbles: !1 }
		]
	}, emptyResponder = {
		id: null,
		idPath: null,
		node: null
	}, responderListenersMap = /* @__PURE__ */ new Map(), isEmulatingMouseEvents = !1, trackedTouchCount = 0, currentResponder = {
		id: null,
		node: null,
		idPath: null
	}, responderTouchHistoryStore = new ResponderTouchHistoryStore();
	documentEventsCapturePhase = ["blur", "scroll"], documentEventsBubblePhase = [
		"mousedown",
		"mousemove",
		"mouseup",
		"dragstart",
		"touchstart",
		"touchmove",
		"touchend",
		"touchcancel",
		"contextmenu",
		"select",
		"selectionchange"
	], isTamaguiResponderActive = /* @__PURE__ */ Symbol();
}));
//#endregion
//#region ../react-native-use-responder-events/dist/esm/useResponderEvents.native.js
function useResponderEvents(hostRef) {
	var configIn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : emptyObject$8, _hostRef_current, config = getResponderConfigIfDefined(configIn), node = (hostRef == null || (_hostRef_current = hostRef.current) === null || _hostRef_current === void 0 ? void 0 : _hostRef_current.host) || (hostRef === null || hostRef === void 0 ? void 0 : hostRef.current);
	react.useEffect(function() {
		if (config !== emptyObject$8) {
			attachListeners(), Ids.has(hostRef) || Ids.set(hostRef, `${Math.random()}`);
			return addNode(Ids.get(hostRef), node, config), Attached.set(hostRef, !0), function() {
				removeNode(node), Attached.set(hostRef, !1);
			};
		}
	}, [config, hostRef]);
}
function getResponderConfigIfDefined(param) {
	var { onMoveShouldSetResponder, onMoveShouldSetResponderCapture, onResponderEnd, onResponderGrant, onResponderMove, onResponderReject, onResponderRelease, onResponderStart, onResponderTerminate, onResponderTerminationRequest, onScrollShouldSetResponder, onScrollShouldSetResponderCapture, onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder, onStartShouldSetResponderCapture } = param;
	return onMoveShouldSetResponder || onMoveShouldSetResponderCapture || onResponderEnd || onResponderGrant || onResponderMove || onResponderReject || onResponderRelease || onResponderStart || onResponderTerminate || onResponderTerminationRequest || onScrollShouldSetResponder || onScrollShouldSetResponderCapture || onSelectionChangeShouldSetResponder || onSelectionChangeShouldSetResponderCapture || onStartShouldSetResponder || onStartShouldSetResponderCapture ? {
		onMoveShouldSetResponder,
		onMoveShouldSetResponderCapture,
		onResponderEnd,
		onResponderGrant,
		onResponderMove,
		onResponderReject,
		onResponderRelease,
		onResponderStart,
		onResponderTerminate,
		onResponderTerminationRequest,
		onScrollShouldSetResponder,
		onScrollShouldSetResponderCapture,
		onSelectionChangeShouldSetResponder,
		onSelectionChangeShouldSetResponderCapture,
		onStartShouldSetResponder,
		onStartShouldSetResponderCapture
	} : emptyObject$8;
}
var emptyObject$8, Attached, Ids;
var init_useResponderEvents_native = __esmMin((() => {
	init_ResponderSystem_native();
	init_utils_native();
	emptyObject$8 = {}, Attached = /* @__PURE__ */ new WeakMap(), Ids = /* @__PURE__ */ new WeakMap();
}));
//#endregion
//#region ../react-native-use-responder-events/dist/esm/index.native.js
var init_index_native$9 = __esmMin((() => {
	init_useResponderEvents_native();
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/AccessibilityUtil/isDisabled.mjs
var isDisabled$1;
var init_isDisabled = __esmMin((() => {
	isDisabled$1 = (props) => props.disabled || Array.isArray(props.accessibilityStates) && props.accessibilityStates.indexOf("disabled") > -1;
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/AccessibilityUtil/propsToAriaRole.mjs
var accessibilityRoleToWebRole, propsToAriaRole;
var init_propsToAriaRole = __esmMin((() => {
	accessibilityRoleToWebRole = {
		adjustable: "slider",
		button: "button",
		header: "heading",
		image: "img",
		imagebutton: null,
		keyboardkey: null,
		label: null,
		link: "link",
		none: "presentation",
		search: "search",
		summary: "region",
		text: null
	}, propsToAriaRole = ({ accessibilityRole }) => {
		if (accessibilityRole) {
			const inferredRole = accessibilityRoleToWebRole[accessibilityRole];
			if (inferredRole !== null) return inferredRole || accessibilityRole;
		}
	};
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/AccessibilityUtil/propsToAccessibilityComponent.mjs
var roleComponents, emptyObject$7, propsToAccessibilityComponent;
var init_propsToAccessibilityComponent = __esmMin((() => {
	init_propsToAriaRole();
	roleComponents = {
		article: "article",
		banner: "header",
		blockquote: "blockquote",
		code: "code",
		complementary: "aside",
		contentinfo: "footer",
		deletion: "del",
		emphasis: "em",
		figure: "figure",
		insertion: "ins",
		form: "form",
		list: "ul",
		listitem: "li",
		main: "main",
		navigation: "nav",
		region: "section",
		strong: "strong"
	}, emptyObject$7 = {}, propsToAccessibilityComponent = (props = emptyObject$7) => {
		if (props.accessibilityRole === "label") return "label";
		const role = propsToAriaRole(props);
		if (role) {
			if (role === "heading") {
				const level = props.accessibilityLevel || props["aria-level"];
				return level != null ? `h${level}` : "h1";
			}
			return roleComponents[role];
		}
	};
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/AccessibilityUtil/index.mjs
var AccessibilityUtil;
var init_AccessibilityUtil = __esmMin((() => {
	init_isDisabled();
	init_propsToAccessibilityComponent();
	init_propsToAriaRole();
	AccessibilityUtil = {
		isDisabled: isDisabled$1,
		propsToAccessibilityComponent,
		propsToAriaRole
	};
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/createDOMProps/index.mjs
function toHyphenLower(match) {
	return "-" + match.toLowerCase();
}
function hyphenateString(str) {
	return str.replace(uppercasePattern, toHyphenLower);
}
function processIDRefList(idRefList) {
	return isArray(idRefList) ? idRefList.join(" ") : idRefList;
}
function flattenStyle$1(style) {
	if (style === null || typeof style != "object") return;
	if (!isArray(style)) return style;
	const result = {};
	for (let i = 0, styleLength = style.length; i < styleLength; ++i) {
		const computedStyle = flattenStyle$1(style[i]);
		if (computedStyle) for (const key in computedStyle) hasOwnProperty.call(computedStyle, key) && (result[key] = computedStyle[key]);
	}
	return result;
}
var _excluded$23, emptyObject$6, hasOwnProperty, isArray, reactNativeOnlyProps, uppercasePattern, stylesFromProps, createDOMProps;
var init_createDOMProps = __esmMin((() => {
	init_index_native();
	init_AccessibilityUtil();
	init_objectWithoutProperties();
	_excluded$23 = [
		"accessibilityActiveDescendant",
		"accessibilityAtomic",
		"accessibilityAutoComplete",
		"accessibilityBusy",
		"accessibilityChecked",
		"accessibilityColumnCount",
		"accessibilityColumnIndex",
		"accessibilityColumnSpan",
		"accessibilityControls",
		"accessibilityCurrent",
		"accessibilityDescribedBy",
		"accessibilityDetails",
		"accessibilityDisabled",
		"accessibilityErrorMessage",
		"accessibilityExpanded",
		"accessibilityFlowTo",
		"accessibilityHasPopup",
		"accessibilityHidden",
		"accessibilityInvalid",
		"accessibilityKeyShortcuts",
		"accessibilityLabel",
		"accessibilityLabelledBy",
		"accessibilityLevel",
		"accessibilityLiveRegion",
		"accessibilityModal",
		"accessibilityMultiline",
		"accessibilityMultiSelectable",
		"accessibilityOrientation",
		"accessibilityOwns",
		"accessibilityPlaceholder",
		"accessibilityPosInSet",
		"accessibilityPressed",
		"accessibilityReadOnly",
		"accessibilityRequired",
		"accessibilityRole",
		"accessibilityRoleDescription",
		"accessibilityRowCount",
		"accessibilityRowIndex",
		"accessibilityRowSpan",
		"accessibilitySelected",
		"accessibilitySetSize",
		"accessibilitySort",
		"accessibilityValueMax",
		"accessibilityValueMin",
		"accessibilityValueNow",
		"accessibilityValueText",
		"dataSet",
		"focusable",
		"nativeID",
		"pointerEvents",
		"style",
		"testID",
		"id"
	];
	emptyObject$6 = {}, hasOwnProperty = Object.prototype.hasOwnProperty, isArray = Array.isArray, reactNativeOnlyProps = {
		collapsable: !0,
		contentContainerStyle: !0,
		contentOffset: !0,
		decelerationRate: !0,
		maintainVisibleContentPosition: !0,
		onLayout: !0,
		onMomentumScrollBegin: !0,
		onMomentumScrollEnd: !0,
		onMoveShouldSetResponder: !0,
		onMoveShouldSetResponderCapture: !0,
		onResponderEnd: !0,
		onResponderGrant: !0,
		onResponderMove: !0,
		onResponderReject: !0,
		onResponderRelease: !0,
		onResponderStart: !0,
		onResponderTerminate: !0,
		onResponderTerminationRequest: !0,
		onScrollBeginDrag: !0,
		onScrollEndDrag: !0,
		onScrollShouldSetResponder: !0,
		onScrollShouldSetResponderCapture: !0,
		onSelectionChangeShouldSetResponder: !0,
		onSelectionChangeShouldSetResponderCapture: !0,
		onStartShouldSetResponder: !0,
		onStartShouldSetResponderCapture: !0,
		refreshControl: !0,
		removeClippedSubviews: !0,
		scrollEnabled: !0,
		scrollEventThrottle: !0,
		scrollIndicatorInsets: !0,
		showsHorizontalScrollIndicator: !0,
		showsVerticalScrollIndicator: !0,
		snapToAlignment: !0,
		snapToEnd: !0,
		snapToInterval: !0,
		snapToOffsets: !0,
		snapToStart: !0,
		stickyHeaderIndices: !0,
		ScrollComponent: !0
	}, uppercasePattern = /[A-Z]/g;
	stylesFromProps = /* @__PURE__ */ new WeakMap(), createDOMProps = (elementType, props, options) => {
		props || (props = emptyObject$6);
		const { accessibilityActiveDescendant, accessibilityAtomic, accessibilityAutoComplete, accessibilityBusy, accessibilityChecked, accessibilityColumnCount, accessibilityColumnIndex, accessibilityColumnSpan, accessibilityControls, accessibilityCurrent, accessibilityDescribedBy, accessibilityDetails, accessibilityDisabled, accessibilityErrorMessage, accessibilityExpanded, accessibilityFlowTo, accessibilityHasPopup, accessibilityHidden, accessibilityInvalid, accessibilityKeyShortcuts, accessibilityLabel, accessibilityLabelledBy, accessibilityLevel, accessibilityLiveRegion, accessibilityModal, accessibilityMultiline, accessibilityMultiSelectable, accessibilityOrientation, accessibilityOwns, accessibilityPlaceholder, accessibilityPosInSet, accessibilityPressed, accessibilityReadOnly, accessibilityRequired, accessibilityRole, accessibilityRoleDescription, accessibilityRowCount, accessibilityRowIndex, accessibilityRowSpan, accessibilitySelected, accessibilitySetSize, accessibilitySort, accessibilityValueMax, accessibilityValueMin, accessibilityValueNow, accessibilityValueText, dataSet, focusable, nativeID, pointerEvents, style, testID, id } = props, domProps = _objectWithoutProperties(props, _excluded$23);
		for (const key in domProps) reactNativeOnlyProps[key] && delete domProps[key];
		const disabled = accessibilityDisabled, role = AccessibilityUtil.propsToAriaRole(props);
		accessibilityActiveDescendant != null && (domProps["aria-activedescendant"] = accessibilityActiveDescendant), accessibilityAtomic != null && (domProps["aria-atomic"] = accessibilityAtomic), accessibilityAutoComplete != null && (domProps["aria-autocomplete"] = accessibilityAutoComplete), accessibilityBusy != null && (domProps["aria-busy"] = accessibilityBusy), accessibilityChecked != null && (domProps["aria-checked"] = accessibilityChecked), accessibilityColumnCount != null && (domProps["aria-colcount"] = accessibilityColumnCount), accessibilityColumnIndex != null && (domProps["aria-colindex"] = accessibilityColumnIndex), accessibilityColumnSpan != null && (domProps["aria-colspan"] = accessibilityColumnSpan), accessibilityControls != null && (domProps["aria-controls"] = processIDRefList(accessibilityControls)), accessibilityCurrent != null && (domProps["aria-current"] = accessibilityCurrent), accessibilityDescribedBy != null && (domProps["aria-describedby"] = processIDRefList(accessibilityDescribedBy)), accessibilityDetails != null && (domProps["aria-details"] = accessibilityDetails), disabled === !0 && (domProps["aria-disabled"] = !0, (elementType === "button" || elementType === "form" || elementType === "input" || elementType === "select" || elementType === "textarea") && (domProps.disabled = !0)), accessibilityErrorMessage != null && (domProps["aria-errormessage"] = accessibilityErrorMessage), accessibilityExpanded != null && (domProps["aria-expanded"] = accessibilityExpanded), accessibilityFlowTo != null && (domProps["aria-flowto"] = processIDRefList(accessibilityFlowTo)), accessibilityHasPopup != null && (domProps["aria-haspopup"] = accessibilityHasPopup), accessibilityHidden === !0 && (domProps["aria-hidden"] = accessibilityHidden), accessibilityInvalid != null && (domProps["aria-invalid"] = accessibilityInvalid), accessibilityKeyShortcuts != null && Array.isArray(accessibilityKeyShortcuts) && (domProps["aria-keyshortcuts"] = accessibilityKeyShortcuts.join(" ")), accessibilityLabel != null && (domProps["aria-label"] = accessibilityLabel), accessibilityLabelledBy != null && (domProps["aria-labelledby"] = processIDRefList(accessibilityLabelledBy)), accessibilityLevel != null && (domProps["aria-level"] = accessibilityLevel), accessibilityLiveRegion != null && (domProps["aria-live"] = accessibilityLiveRegion === "none" ? "off" : accessibilityLiveRegion), accessibilityModal != null && (domProps["aria-modal"] = accessibilityModal), accessibilityMultiline != null && (domProps["aria-multiline"] = accessibilityMultiline), accessibilityMultiSelectable != null && (domProps["aria-multiselectable"] = accessibilityMultiSelectable), accessibilityOrientation != null && (domProps["aria-orientation"] = accessibilityOrientation), accessibilityOwns != null && (domProps["aria-owns"] = processIDRefList(accessibilityOwns)), accessibilityPlaceholder != null && (domProps["aria-placeholder"] = accessibilityPlaceholder), accessibilityPosInSet != null && (domProps["aria-posinset"] = accessibilityPosInSet), accessibilityPressed != null && (domProps["aria-pressed"] = accessibilityPressed), accessibilityReadOnly != null && (domProps["aria-readonly"] = accessibilityReadOnly, (elementType === "input" || elementType === "select" || elementType === "textarea") && (domProps.readOnly = !0)), accessibilityRequired != null && (domProps["aria-required"] = accessibilityRequired, (elementType === "input" || elementType === "select" || elementType === "textarea") && (domProps.required = !0)), role != null && (domProps.role = role === "none" ? "presentation" : role), accessibilityRoleDescription != null && (domProps["aria-roledescription"] = accessibilityRoleDescription), accessibilityRowCount != null && (domProps["aria-rowcount"] = accessibilityRowCount), accessibilityRowIndex != null && (domProps["aria-rowindex"] = accessibilityRowIndex), accessibilityRowSpan != null && (domProps["aria-rowspan"] = accessibilityRowSpan), accessibilitySelected != null && (domProps["aria-selected"] = accessibilitySelected), accessibilitySetSize != null && (domProps["aria-setsize"] = accessibilitySetSize), accessibilitySort != null && (domProps["aria-sort"] = accessibilitySort), accessibilityValueMax != null && (domProps["aria-valuemax"] = accessibilityValueMax), accessibilityValueMin != null && (domProps["aria-valuemin"] = accessibilityValueMin), accessibilityValueNow != null && (domProps["aria-valuenow"] = accessibilityValueNow), accessibilityValueText != null && (domProps["aria-valuetext"] = accessibilityValueText);
		const tmgCN = dataSet ? dataSet.className : void 0, tmgID = dataSet ? dataSet.id : void 0;
		if (dataSet != null) {
			for (const dataProp in dataSet) if (!(dataProp === "className" || dataProp === "id") && hasOwnProperty.call(dataSet, dataProp)) {
				const dataName = hyphenateString(dataProp), dataValue = dataSet[dataProp];
				dataValue != null && (domProps[`data-${dataName}`] = dataValue);
			}
		}
		focusable === !1 && (domProps.tabIndex = "-1"), elementType === "a" || elementType === "button" || elementType === "input" || elementType === "select" || elementType === "textarea" ? (focusable === !1 || accessibilityDisabled === !0) && (domProps.tabIndex = "-1") : role === "button" || role === "checkbox" || role === "link" || role === "radio" || role === "textbox" || role === "switch" ? focusable !== !1 && (domProps.tabIndex = "0") : focusable === !0 && (domProps.tabIndex = "0");
		const flat = flattenStyle$1(style);
		let className = tmgCN || "";
		props.className && (className += ` ${props.className}`);
		const stylesAtomic = flat ? getCSSStylesAtomic(flat) : [];
		stylesFromProps.set(domProps, stylesAtomic), domProps.style = stylesAtomic.reduce((acc, [key, value]) => key[0] === "_" || key.startsWith("is_") || key.startsWith("font_") ? (className += ` ${key}`, acc) : (key === "$$css" || key === "" || (acc[key] = value), acc), {}), className && (domProps.className = className);
		const _id = tmgID || id || nativeID;
		return _id && (domProps.id = _id), testID != null && (domProps["data-testid"] = testID), domProps;
	};
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/unitlessNumbers/index.mjs
var unitlessNumbers, prefixes$1, prefixKey;
var init_unitlessNumbers = __esmMin((() => {
	unitlessNumbers = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		flex: !0,
		flexGrow: !0,
		flexOrder: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		fontWeight: !0,
		gap: !0,
		columnGap: !0,
		rowGap: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowGap: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnGap: !0,
		gridColumnStart: !0,
		lineClamp: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
		scale: !0,
		scaleX: !0,
		scaleY: !0,
		scaleZ: !0,
		shadowOpacity: !0
	}, prefixes$1 = [
		"ms",
		"Moz",
		"O",
		"Webkit"
	], prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);
	Object.keys(unitlessNumbers).forEach((prop) => {
		prefixes$1.forEach((prefix) => {
			unitlessNumbers[prefixKey(prefix, prop)] = unitlessNumbers[prop];
		});
	});
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/isWebColor/index.mjs
var isWebColor;
var init_isWebColor = __esmMin((() => {
	isWebColor = (color) => color === "currentcolor" || color === "currentColor" || color === "inherit" || color.startsWith("var(");
}));
//#endregion
//#region ../../../node_modules/@react-native/normalize-color/index.js
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
* @format
* @noflow
*/
var require_normalize_color = /* @__PURE__ */ __commonJSMin(((exports, module) => {
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
}));
//#endregion
//#region ../normalize-css-color/dist/esm/index.native.js
function rgba(colorInt) {
	return {
		r: Math.round((colorInt & 4278190080) >>> 24),
		g: Math.round((colorInt & 16711680) >>> 16),
		b: Math.round((colorInt & 65280) >>> 8),
		a: ((colorInt & 255) >>> 0) / 255
	};
}
var import_normalize_color, normalizeCSSColor, index_default;
var init_index_native$8 = __esmMin((() => {
	import_normalize_color = /* @__PURE__ */ __toESM(require_normalize_color(), 1);
	normalizeCSSColor = import_normalize_color.default || import_normalize_color;
	index_default = normalizeCSSColor;
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/processColor/index.mjs
var processColor$1;
var init_processColor = __esmMin((() => {
	init_index_native$8();
	processColor$1 = (color) => {
		if (color == null) return color;
		let int32Color = index_default(color);
		if (int32Color != null) return int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0, int32Color;
	};
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/StyleSheet/compiler/normalizeColor.mjs
var normalizeColor$2;
var init_normalizeColor$1 = __esmMin((() => {
	init_isWebColor();
	init_processColor();
	normalizeColor$2 = (color, opacity = 1) => {
		if (color == null) return;
		if (typeof color == "string" && isWebColor(color)) return color;
		const colorInt = processColor$1(color);
		if (colorInt != null) return `rgba(${colorInt >> 16 & 255},${colorInt >> 8 & 255},${colorInt & 255},${((colorInt >> 24 & 255) / 255 * opacity).toFixed(2)})`;
		if (typeof color == "string") return color;
	};
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/StyleSheet/compiler/normalizeValueWithProperty.mjs
function normalizeValueWithProperty$1(value, property) {
	let returnValue = value;
	return (property == null || !unitlessNumbers[property]) && typeof value == "number" ? returnValue = `${value}px` : property != null && colorProps[property] && (returnValue = normalizeColor$2(value)), returnValue;
}
var colorProps;
var init_normalizeValueWithProperty = __esmMin((() => {
	init_unitlessNumbers();
	init_normalizeColor$1();
	colorProps = {
		backgroundColor: !0,
		borderColor: !0,
		borderTopColor: !0,
		borderRightColor: !0,
		borderBottomColor: !0,
		borderLeftColor: !0,
		color: !0,
		shadowColor: !0,
		textDecorationColor: !0,
		textShadowColor: !0
	};
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/UIManager/index.mjs
var focusableElements, UIManager;
var init_UIManager = __esmMin((() => {
	init_index_native$11();
	init_asyncToGenerator();
	focusableElements = {
		A: !0,
		INPUT: !0,
		SELECT: !0,
		TEXTAREA: !0
	}, UIManager = {
		blur(node) {
			try {
				node.blur();
			} catch (_unused) {}
		},
		focus(node) {
			try {
				const name = node.nodeName;
				node.getAttribute("tabIndex") == null && focusableElements[name] == null && node.setAttribute("tabIndex", "-1"), node.focus();
			} catch (_unused2) {}
		},
		measure(node, callback) {
			return measure(node, callback);
		},
		measureInWindow(node, callback) {
			return measureInWindow(node, callback);
		},
		measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
			return _asyncToGenerator(function* () {
				return measureLayout(node, relativeToNativeNode, onSuccess);
			})();
		},
		configureNextLayoutAnimation(config, onAnimationDidEnd) {
			onAnimationDidEnd();
		},
		setLayoutAnimationEnabledExperimental() {}
	};
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/TextInputState/index.mjs
var TextInputState;
var init_TextInputState = __esmMin((() => {
	init_UIManager();
	TextInputState = {
		_currentlyFocusedNode: null,
		currentlyFocusedField() {
			return document.activeElement !== this._currentlyFocusedNode && (this._currentlyFocusedNode = null), this._currentlyFocusedNode;
		},
		focusTextInput(textFieldNode) {
			textFieldNode !== null && (this._currentlyFocusedNode = textFieldNode, document.activeElement !== textFieldNode && UIManager.focus(textFieldNode));
		},
		blurTextInput(textFieldNode) {
			textFieldNode !== null && (this._currentlyFocusedNode = null, document.activeElement === textFieldNode && UIManager.blur(textFieldNode));
		}
	};
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/dismissKeyboard/index.mjs
var dismissKeyboard;
var init_dismissKeyboard = __esmMin((() => {
	init_TextInputState();
	dismissKeyboard = () => {
		TextInputState.blurTextInput(TextInputState.currentlyFocusedField());
	};
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/ImageLoader/index.mjs
var dataUriPattern, ImageUriCache, id, requests, ImageLoader;
var init_ImageLoader = __esmMin((() => {
	init_defineProperty();
	dataUriPattern = /^data:/;
	ImageUriCache = class ImageUriCache {
		static has(uri) {
			const entries = ImageUriCache._entries;
			return dataUriPattern.test(uri) || !!entries[uri];
		}
		static add(uri) {
			const entries = ImageUriCache._entries, lastUsedTimestamp = Date.now();
			entries[uri] ? (entries[uri].lastUsedTimestamp = lastUsedTimestamp, entries[uri].refCount += 1) : entries[uri] = {
				lastUsedTimestamp,
				refCount: 1
			};
		}
		static remove(uri) {
			const entries = ImageUriCache._entries;
			entries[uri] && (entries[uri].refCount -= 1), ImageUriCache._cleanUpIfNeeded();
		}
		static _cleanUpIfNeeded() {
			const entries = ImageUriCache._entries, imageUris = Object.keys(entries);
			if (imageUris.length + 1 > ImageUriCache._maximumEntries) {
				let leastRecentlyUsedKey, leastRecentlyUsedEntry;
				imageUris.forEach((uri) => {
					const entry = entries[uri];
					(!leastRecentlyUsedEntry || entry.lastUsedTimestamp < leastRecentlyUsedEntry.lastUsedTimestamp) && entry.refCount === 0 && (leastRecentlyUsedKey = uri, leastRecentlyUsedEntry = entry);
				}), leastRecentlyUsedKey && delete entries[leastRecentlyUsedKey];
			}
		}
	};
	_defineProperty(ImageUriCache, "_maximumEntries", 256);
	_defineProperty(ImageUriCache, "_entries", {});
	id = 0;
	requests = {}, ImageLoader = {
		abort(requestId) {
			let image = requests[`${requestId}`];
			image && (image.onerror = null, image.onload = null, image = null, delete requests[`${requestId}`]);
		},
		getSize(uri, success, failure) {
			let complete = !1;
			const interval = setInterval(callback, 16), requestId = ImageLoader.load(uri, callback, errorCallback);
			function callback() {
				const image = requests[`${requestId}`];
				if (image) {
					const { naturalHeight, naturalWidth } = image;
					naturalHeight && naturalWidth && (success(naturalWidth, naturalHeight), complete = !0);
				}
				complete && (ImageLoader.abort(requestId), clearInterval(interval));
			}
			function errorCallback() {
				typeof failure == "function" && failure(), ImageLoader.abort(requestId), clearInterval(interval);
			}
		},
		has(uri) {
			return ImageUriCache.has(uri);
		},
		load(uri, onLoad, onError) {
			id += 1;
			const image = new window.Image();
			return image.onerror = onError, image.onload = (e) => {
				const onDecode = () => onLoad({ nativeEvent: e });
				typeof image.decode == "function" ? image.decode().then(onDecode, onDecode) : setTimeout(onDecode, 0);
			}, image.src = uri, requests[`${id}`] = image, id;
		},
		prefetch(uri) {
			return new Promise((resolve, reject) => {
				ImageLoader.load(uri, () => {
					ImageUriCache.add(uri), ImageUriCache.remove(uri), resolve();
				}, reject);
			});
		},
		queryCache(uris) {
			const result = {};
			return uris.forEach((u) => {
				ImageUriCache.has(u) && (result[u] = "disk/memory");
			}), Promise.resolve(result);
		}
	};
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/normalizeColor/index.mjs
var normalizeColor$1;
var init_normalizeColor = __esmMin((() => {
	init_isWebColor();
	init_processColor();
	normalizeColor$1 = (color, opacity = 1) => {
		if (color == null) return;
		if (typeof color == "string" && isWebColor(color)) return color;
		const colorInt = processColor$1(color);
		if (colorInt != null) return `rgba(${colorInt >> 16 & 255},${colorInt >> 8 & 255},${colorInt & 255},${((colorInt >> 24 & 255) / 255 * opacity).toFixed(2)})`;
	};
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/pick/index.mjs
function pick(obj, list) {
	const nextObj = {};
	for (const key in obj) obj.hasOwnProperty(key) && list[key] === !0 && (nextObj[key] = obj[key]);
	return nextObj;
}
var init_pick = __esmMin((() => {}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/Platform/index.mjs
var Platform;
var init_Platform$1 = __esmMin((() => {
	Platform = {
		OS: "web",
		select: (obj) => "web" in obj ? obj.web : obj.default,
		isTesting: false
	};
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/StyleSheet/preprocess.mjs
var emptyObject$5, defaultOffset$1, createBoxShadowValue, createTextShadowValue, preprocess, processStyle;
var init_preprocess = __esmMin((() => {
	init_normalizeColor$1();
	init_normalizeValueWithProperty();
	emptyObject$5 = {}, defaultOffset$1 = {
		height: 0,
		width: 0
	}, createBoxShadowValue = (style) => {
		const { shadowColor, shadowOffset, shadowOpacity, shadowRadius } = style, { height, width } = shadowOffset || defaultOffset$1, offsetX = normalizeValueWithProperty$1(width), offsetY = normalizeValueWithProperty$1(height), blurRadius = normalizeValueWithProperty$1(shadowRadius || 0), color = normalizeColor$2(shadowColor || "black", shadowOpacity);
		if (color != null && offsetX != null && offsetY != null && blurRadius != null) return `${offsetX} ${offsetY} ${blurRadius} ${color}`;
	}, createTextShadowValue = (style) => {
		const { textShadowColor, textShadowOffset, textShadowRadius } = style, { height, width } = textShadowOffset || defaultOffset$1, radius = textShadowRadius || 0, offsetX = normalizeValueWithProperty$1(width), offsetY = normalizeValueWithProperty$1(height), blurRadius = normalizeValueWithProperty$1(radius), color = normalizeValueWithProperty$1(textShadowColor, "textShadowColor");
		if (color && (height !== 0 || width !== 0 || radius !== 0) && offsetX != null && offsetY != null && blurRadius != null) return `${offsetX} ${offsetY} ${blurRadius} ${color}`;
	}, preprocess = (originalStyle) => {
		const style = originalStyle || emptyObject$5, nextStyle = {};
		for (const originalProp in style) {
			const originalValue = style[originalProp];
			let prop = originalProp, value = originalValue;
			if (!(!Object.prototype.hasOwnProperty.call(style, originalProp) || originalValue == null)) {
				if (prop === "shadowColor" || prop === "shadowOffset" || prop === "shadowOpacity" || prop === "shadowRadius") {
					const boxShadowValue = createBoxShadowValue(style);
					if (boxShadowValue != null && nextStyle.boxShadow == null) {
						const { boxShadow } = style;
						prop = "boxShadow", value = boxShadow ? `${boxShadow}, ${boxShadowValue}` : boxShadowValue;
					} else continue;
				}
				if (prop === "textShadowColor" || prop === "textShadowOffset" || prop === "textShadowRadius") {
					const textShadowValue = createTextShadowValue(style);
					if (textShadowValue != null && nextStyle.textShadow == null) {
						const { textShadow } = style;
						prop = "textShadow", value = textShadow ? `${textShadow}, ${textShadowValue}` : textShadowValue;
					} else continue;
				}
				nextStyle[prop] = value;
			}
		}
		return nextStyle;
	}, processStyle = preprocess;
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/StyleSheet/index.mjs
function create(styles) {
	return styles;
}
function compose(style1, style2) {
	return flatten(style1, style2);
}
function flatten(...styles) {
	return styles.flat().flat().flat().flat().reduce((acc, cur) => (cur && Object.assign(acc, cur), acc), {});
}
function getSheet() {
	return {
		id: "",
		textContent: sheet.getTextContent()
	};
}
function StyleSheet(styles, options) {}
var absoluteFillObject, absoluteFill, init_StyleSheet = __esmMin((() => {
	absoluteFillObject = {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
	}, absoluteFill = absoluteFillObject;
	StyleSheet.absoluteFill = absoluteFill;
	StyleSheet.absoluteFillObject = absoluteFillObject;
	StyleSheet.create = create;
	StyleSheet.compose = compose;
	StyleSheet.flatten = flatten;
	StyleSheet.getSheet = getSheet;
	StyleSheet.hairlineWidth = 1;
})), _requestIdleCallback, isSupported, requestIdleCallback;
var init_requestIdleCallback = __esmMin((() => {
	init_canUseDOM();
	_requestIdleCallback = function(cb, options) {
		return setTimeout(() => {
			const start = Date.now();
			cb({
				didTimeout: !1,
				timeRemaining() {
					return Math.max(0, 50 - (Date.now() - start));
				}
			});
		}, 1);
	}, isSupported = canUseDOM$1 && typeof window.requestIdleCallback < "u", requestIdleCallback = isSupported ? window.requestIdleCallback : _requestIdleCallback, isSupported && window.cancelIdleCallback;
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/useElementLayout/index.mjs
function useElementLayout(ref, onLayout) {
	const wrappedRef = (0, react.useMemo)(() => ({ current: { get host() {
		return ref.current;
	} } }), [ref]);
	return (0, react.useEffect)(() => {
		enable();
	}, []), useElementLayout$1(wrappedRef, onLayout);
}
var init_useElementLayout = __esmMin((() => {
	init_index_native$11();
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/useLayoutEffect/index.mjs
var useLayoutEffectImpl;
var init_useLayoutEffect = __esmMin((() => {
	init_canUseDOM();
	useLayoutEffectImpl = canUseDOM$1 ? react.default.useLayoutEffect : react.default.useEffect;
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/useEvent/index.mjs
function useEvent$1(event, options) {
	const targetListeners = useStable(() => /* @__PURE__ */ new Map()), addListener = useStable(() => {
		const addEventListener = createEventHandle(event, options);
		return (target, callback) => {
			const removeTargetListener = targetListeners.get(target);
			removeTargetListener === null || removeTargetListener === void 0 || removeTargetListener(), callback == null && targetListeners.delete(target);
			const removeEventListener = addEventListener(target, callback);
			return targetListeners.set(target, removeEventListener), removeEventListener;
		};
	});
	return useLayoutEffectImpl(() => () => {
		targetListeners.forEach((removeListener) => {
			removeListener();
		}), targetListeners.clear();
	}, [targetListeners]), addListener;
}
var init_useEvent = __esmMin((() => {
	init_createEventHandle();
	init_useLayoutEffect();
	init_useStable();
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/useHover/index.mjs
function dispatchCustomEvent(target, type, payload) {
	const event = document.createEvent("CustomEvent"), { bubbles = !0, cancelable = !0, detail } = payload || emptyObject$4;
	event.initCustomEvent(type, bubbles, cancelable, detail), target.dispatchEvent(event);
}
function getPointerType(event) {
	const { pointerType } = event;
	return pointerType !== null && pointerType !== void 0 ? pointerType : getModality();
}
function useHover(targetRef, config) {
	const { contain, disabled, onHoverStart, onHoverChange, onHoverUpdate, onHoverEnd } = config, canUsePE = supportsPointerEvent(), addMoveListener = useEvent$1(canUsePE ? "pointermove" : "mousemove", opts), addEnterListener = useEvent$1(canUsePE ? "pointerenter" : "mouseenter", opts), addLeaveListener = useEvent$1(canUsePE ? "pointerleave" : "mouseleave", opts), addLockListener = useEvent$1(lockEventType, opts), addUnlockListener = useEvent$1(unlockEventType, opts);
	useLayoutEffectImpl(() => {
		const target = targetRef.current;
		if (target !== null) {
			const hoverEnd = function(e) {
				onHoverEnd === null || onHoverEnd === void 0 || onHoverEnd(e), onHoverChange === null || onHoverChange === void 0 || onHoverChange(!1), addMoveListener(target, null), addLeaveListener(target, null);
			}, leaveListener = function(e) {
				const target2 = targetRef.current;
				target2 != null && getPointerType(e) !== "touch" && (contain && dispatchCustomEvent(target2, unlockEventType), hoverEnd(e));
			}, moveListener = function(e) {
				getPointerType(e) !== "touch" && onHoverUpdate != null && (e.x == null && (e.x = e.clientX), e.y == null && (e.y = e.clientY), onHoverUpdate(e));
			}, hoverStart = function(e) {
				onHoverStart === null || onHoverStart === void 0 || onHoverStart(e), onHoverChange === null || onHoverChange === void 0 || onHoverChange(!0), onHoverUpdate != null && addMoveListener(target, disabled ? null : moveListener), addLeaveListener(target, disabled ? null : leaveListener);
			};
			addEnterListener(target, disabled ? null : function(e) {
				const target2 = targetRef.current;
				if (target2 != null && getPointerType(e) !== "touch") {
					contain && dispatchCustomEvent(target2, lockEventType), hoverStart(e);
					const lockListener = function(lockEvent) {
						lockEvent.target !== target2 && hoverEnd(e);
					}, unlockListener = function(lockEvent) {
						lockEvent.target !== target2 && hoverStart(e);
					};
					addLockListener(target2, disabled ? null : lockListener), addUnlockListener(target2, disabled ? null : unlockListener);
				}
			});
		}
	}, [
		addEnterListener,
		addMoveListener,
		addLeaveListener,
		addLockListener,
		addUnlockListener,
		contain,
		disabled,
		onHoverStart,
		onHoverChange,
		onHoverUpdate,
		onHoverEnd,
		targetRef
	]);
}
var emptyObject$4, opts, lockEventType, unlockEventType, supportsPointerEvent;
var init_useHover = __esmMin((() => {
	init_modality();
	init_useEvent();
	init_useLayoutEffect();
	emptyObject$4 = {}, opts = { passive: !0 }, lockEventType = "react-gui:hover:lock", unlockEventType = "react-gui:hover:unlock", supportsPointerEvent = () => typeof window < "u" && window.PointerEvent != null;
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/invariant.mjs
function invariant(condition, log, ...logVars) {
	if (!condition) throw new Error(log);
}
function warning(condition, log, ...logVars) {}
var init_invariant = __esmMin((() => {}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/InteractionManager.mjs
function _scheduleUpdate() {
	_nextUpdateHandle || (_deadline > 0 ? _nextUpdateHandle = setTimeout(_processUpdate) : _nextUpdateHandle = requestIdleCallback(_processUpdate));
}
function _processUpdate() {
	_nextUpdateHandle = null;
	const interactionCount = _interactionSet.size;
	_addInteractionSet.forEach((handle) => _interactionSet.add(handle)), _deleteInteractionSet.forEach((handle) => _interactionSet.delete(handle));
	const nextInteractionCount = _interactionSet.size;
	if (interactionCount !== 0 && nextInteractionCount === 0 ? _emitter.emit("interactionComplete") : interactionCount === 0 && nextInteractionCount !== 0 && _emitter.emit("interactionStart"), nextInteractionCount === 0) {
		const begin = Date.now();
		for (; _taskQueue.hasTasksToProcess();) if (_taskQueue.processNext(), _deadline > 0 && Date.now() - begin >= _deadline) {
			_scheduleUpdate();
			break;
		}
	}
	_addInteractionSet.clear(), _deleteInteractionSet.clear();
}
var EventEmitter$2, TaskQueue, _emitter, InteractionManager, _interactionSet, _addInteractionSet, _deleteInteractionSet, _taskQueue, _nextUpdateHandle, _inc, _deadline;
var init_InteractionManager = __esmMin((() => {
	init_invariant();
	init_requestIdleCallback();
	init_defineProperty();
	init_objectSpread2();
	EventEmitter$2 = class {
		constructor() {
			_defineProperty(this, "_registry", {});
		}
		addListener(eventType, listener, context) {
			const registrations = this._allocate(eventType), registration = {
				context,
				listener,
				remove: () => {
					registrations.delete(registration);
				}
			};
			return registrations.add(registration), registration;
		}
		emit(eventType, ...args) {
			const registrations = this._registry[eventType];
			if (registrations != null) for (const registration of Array.from(registrations)) registration.listener.apply(registration.context, args);
		}
		_allocate(eventType) {
			let registrations = this._registry[eventType];
			return registrations == null && (registrations = /* @__PURE__ */ new Set(), this._registry[eventType] = registrations), registrations;
		}
	};
	TaskQueue = class {
		constructor({ onMoreTasks }) {
			_defineProperty(this, "_queueStack", void 0);
			_defineProperty(this, "_onMoreTasks", void 0);
			this._onMoreTasks = onMoreTasks, this._queueStack = [{
				tasks: [],
				popable: !0
			}];
		}
		enqueueTasks(tasks) {
			tasks.forEach((task) => this._enqueue(task));
		}
		cancelTasks(tasksToCancel) {
			this._queueStack = this._queueStack.map((queue) => _objectSpread2(_objectSpread2({}, queue), {}, { tasks: queue.tasks.filter((task) => !tasksToCancel.includes(task)) })).filter((queue, idx) => queue.tasks.length > 0 || idx === 0);
		}
		hasTasksToProcess() {
			return this._getCurrentQueue().length > 0;
		}
		processNext() {
			const queue = this._getCurrentQueue();
			if (queue.length) {
				const task = queue.shift();
				try {
					typeof task == "object" && task && "gen" in task ? this._genPromise(task) : typeof task == "object" && task && "run" in task ? task.run() : (invariant(typeof task == "function", `Expected Function, SimpleTask, or PromiseTask, but got:
` + JSON.stringify(task, null, 2)), task());
				} catch (e) {
					if (e instanceof Error) e.message = "TaskQueue: Error with task " + (task && typeof task == "object" && "name" in task ? task.name : "") + ": " + e.message;
					throw e;
				}
			}
		}
		_enqueue(task) {
			this._getCurrentQueue().push(task);
		}
		_getCurrentQueue() {
			const stackIdx = this._queueStack.length - 1, queue = this._queueStack[stackIdx];
			return queue.popable && queue.tasks.length === 0 && stackIdx > 0 ? (this._queueStack.pop(), this._getCurrentQueue()) : queue.tasks;
		}
		_genPromise(task) {
			const stackIdx = this._queueStack.push({
				tasks: [],
				popable: !1
			}) - 1, stackItem = this._queueStack[stackIdx];
			task.gen().then(() => {
				stackItem.popable = !0, this.hasTasksToProcess() && this._onMoreTasks();
			}).catch((ex) => {
				setTimeout(() => {
					throw ex instanceof Error && (ex.message = `TaskQueue: Error resolving Promise in task ${task.name}: ${ex.message}`), ex;
				}, 0);
			});
		}
	};
	_emitter = new EventEmitter$2(), InteractionManager = {
		Events: {
			interactionStart: "interactionStart",
			interactionComplete: "interactionComplete"
		},
		runAfterInteractions(task) {
			const tasks = [], promise = new Promise((resolve) => {
				_scheduleUpdate(), task && tasks.push(task), tasks.push({
					run: resolve,
					name: "resolve " + (task && typeof task == "object" && "name" in task && task.name || "?")
				}), _taskQueue.enqueueTasks(tasks);
			});
			return {
				then: promise.then.bind(promise),
				done: promise.then.bind(promise),
				cancel: () => {
					_taskQueue.cancelTasks(tasks);
				}
			};
		},
		createInteractionHandle() {
			_scheduleUpdate();
			const handle = ++_inc;
			return _addInteractionSet.add(handle), handle;
		},
		clearInteractionHandle(handle) {
			invariant(!!handle, "Must provide a handle to clear."), _scheduleUpdate(), _addInteractionSet.delete(handle), _deleteInteractionSet.add(handle);
		},
		addListener: _emitter.addListener.bind(_emitter),
		setDeadline(deadline) {
			_deadline = deadline;
		}
	}, _interactionSet = /* @__PURE__ */ new Set(), _addInteractionSet = /* @__PURE__ */ new Set(), _deleteInteractionSet = /* @__PURE__ */ new Set(), _taskQueue = new TaskQueue({ onMoreTasks: _scheduleUpdate });
	_nextUpdateHandle = null, _inc = 0, _deadline = -1;
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/modules/useMergeRefs/index.mjs
function useMergeRefs$1(...args) {
	return react.useMemo(() => mergeRefs(...args), [...args]);
}
var init_useMergeRefs$1 = __esmMin((() => {
	init_mergeRefs();
}));
//#endregion
//#region ../react-native-web-internals/dist/esm/index.mjs
var init_esm$1 = __esmMin((() => {
	init_AssetRegistry();
	init_forwardedProps();
	init_mergeRefs();
	init_modality();
	init_useLocale();
	init_usePlatformMethods();
	init_TextAncestorContext();
	init_index_native$10();
	init_index_native$9();
	init_AccessibilityUtil();
	init_canUseDOM();
	init_createDOMProps();
	init_dismissKeyboard();
	init_ImageLoader();
	init_isWebColor();
	init_normalizeColor();
	init_pick();
	init_Platform$1();
	init_preprocess();
	init_StyleSheet();
	init_TextInputState();
	init_UIManager();
	init_useElementLayout();
	init_useEvent();
	init_useHover();
	init_useLayoutEffect();
	init_InteractionManager();
	init_invariant();
	init_processColor();
	init_useMergeRefs$1();
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/createElement/index.mjs
var useCreateElement, createElement, createElementAndStyles;
var init_createElement = __esmMin((() => {
	init_esm$1();
	init_index_native();
	useCreateElement = (component, props, options) => {
		const { element, styles } = createElementAndStyles(component, props, options), isHydrated = useDidFinishSSR(), styleTags = (0, react.useMemo)(() => isHydrated || !styles ? null : getStyleTags(styles), []);
		return (0, react.useInsertionEffect)(() => {
			if (!styles) return;
			const styleObj = {};
			for (const style of styles) styleObj[style[0]] = style;
			insertStyleRules(styleObj);
		}, [styles]), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [element, styleTags] });
	}, createElement = (component, props, options) => {
		const { element, styles } = createElementAndStyles(component, props, options);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [element, styles ? getStyleTags(styles) : null] });
	}, createElementAndStyles = (component, props, options) => {
		let accessibilityComponent;
		component && component.constructor === String && (accessibilityComponent = AccessibilityUtil.propsToAccessibilityComponent(props));
		const Component = accessibilityComponent || component, domProps = createDOMProps(Component, props, options), styles = stylesFromProps.get(domProps);
		let element = react.default.createElement(Component, domProps);
		return {
			element: domProps.dir ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LocaleProvider, {
				direction: domProps.dir,
				locale: domProps.lang,
				children: element
			}) : element,
			styles
		};
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/NativeModules/index.mjs
var NativeModules;
var init_NativeModules = __esmMin((() => {
	init_esm$1();
	NativeModules = { UIManager };
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/render/index.mjs
function hydrate(element, root) {}
function render(element, root) {}
function hydrateLegacy(element, root, callback) {}
function renderLegacy(element, root, callback) {}
var init_render = __esmMin((() => {}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/TurboModule/TurboModuleRegistry.mjs
function get(name) {
	return null;
}
var init_TurboModuleRegistry = __esmMin((() => {})), NativeAnimatedNonTurboModule;
var init_NativeAnimatedModule = __esmMin((() => {
	init_TurboModuleRegistry();
	NativeAnimatedNonTurboModule = get("NativeAnimatedModule") || {
		startOperationBatch: () => {},
		finishOperationBatch: () => {},
		createAnimatedNode: (tag, config) => {},
		updateAnimatedNodeConfig: (tag, config) => {},
		getValue: (tag, saveValueCallback) => {},
		startListeningToAnimatedNodeValue: (tag) => {},
		stopListeningToAnimatedNodeValue: (tag) => {},
		connectAnimatedNodes: (parentTag, childTag) => {},
		disconnectAnimatedNodes: (parentTag, childTag) => {},
		startAnimatingNode: (animationId, nodeTag, config, endCallback) => {},
		stopAnimation: (animationId) => {},
		setAnimatedNodeValue: (nodeTag, value) => {},
		setAnimatedNodeOffset: (nodeTag, offset) => {},
		flattenAnimatedNodeOffset: (nodeTag) => {},
		extractAnimatedNodeOffset: (nodeTag) => {},
		connectAnimatedNodeToView: (nodeTag, viewTag) => {},
		disconnectAnimatedNodeFromView: (nodeTag, viewTag) => {},
		restoreDefaultValues: (nodeTag) => {},
		dropAnimatedNode: (tag) => {},
		addAnimatedEventToView: (viewTag, eventName, eventMapping) => {},
		removeAnimatedEventFromView: (viewTag, eventName, animatedNodeTag) => {},
		addListener: (eventName) => {},
		removeListeners: (count) => {},
		queueAndExecuteBatchedOperations: (operationsAndArgs) => {}
	};
})), NativeAnimatedTurboModule;
var init_NativeAnimatedTurboModule = __esmMin((() => {
	init_TurboModuleRegistry();
	NativeAnimatedTurboModule = get("NativeAnimatedTurboModule") || {
		startOperationBatch: () => {},
		finishOperationBatch: () => {},
		createAnimatedNode: (tag, config) => {},
		getValue: (tag, saveValueCallback) => {},
		startListeningToAnimatedNodeValue: (tag) => {},
		stopListeningToAnimatedNodeValue: (tag) => {},
		connectAnimatedNodes: (parentTag, childTag) => {},
		disconnectAnimatedNodes: (parentTag, childTag) => {},
		startAnimatingNode: (animationId, nodeTag, config, endCallback) => {},
		stopAnimation: (animationId) => {},
		setAnimatedNodeValue: (nodeTag, value) => {},
		setAnimatedNodeOffset: (nodeTag, offset) => {},
		flattenAnimatedNodeOffset: (nodeTag) => {},
		extractAnimatedNodeOffset: (nodeTag) => {},
		connectAnimatedNodeToView: (nodeTag, viewTag) => {},
		disconnectAnimatedNodeFromView: (nodeTag, viewTag) => {},
		restoreDefaultValues: (nodeTag) => {},
		dropAnimatedNode: (tag) => {},
		addAnimatedEventToView: (viewTag, eventName, eventMapping) => {},
		removeAnimatedEventFromView: (viewTag, eventName, animatedNodeTag) => {},
		addListener: (eventName) => {},
		removeListeners: (count) => {}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/emitter/_EventSubscription.mjs
var _EventSubscription;
var init__EventSubscription = __esmMin((() => {
	_EventSubscription = class {
		/**
		* @param {EventSubscriptionVendor} subscriber the subscriber that controls
		*   this subscription.
		*/
		constructor(subscriber) {
			this.subscriber = subscriber;
		}
		/**
		* Removes this subscription from the subscriber that controls it.
		*/
		remove() {
			this.subscriber.removeSubscription(this);
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/emitter/_EmitterSubscription.mjs
var EmitterSubscription;
var init__EmitterSubscription = __esmMin((() => {
	init__EventSubscription();
	EmitterSubscription = class extends _EventSubscription {
		/**
		* @param {EventEmitter} emitter - The event emitter that registered this
		*   subscription
		* @param {EventSubscriptionVendor} subscriber - The subscriber that controls
		*   this subscription
		* @param {function} listener - Function to invoke when the specified event is
		*   emitted
		* @param {*} context - Optional context object to use when invoking the
		*   listener
		*/
		constructor(emitter, subscriber, listener, context) {
			super(subscriber), this.emitter = emitter, this.listener = listener, this.context = context;
		}
		/**
		* Removes this subscription from the emitter that registered it.
		* Note: we're overriding the `remove()` method of _EventSubscription here
		* but deliberately not calling `super.remove()` as the responsibility
		* for removing the subscription lies with the EventEmitter.
		*/
		remove() {
			this.emitter.removeSubscription(this);
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/emitter/_EventSubscriptionVendor.mjs
var EventSubscriptionVendor;
var init__EventSubscriptionVendor = __esmMin((() => {
	init_esm$1();
	EventSubscriptionVendor = class {
		constructor() {
			this._subscriptionsForType = {};
		}
		/**
		* Adds a subscription keyed by an event type.
		*
		* @param {string} eventType
		* @param {EventSubscription} subscription
		*/
		addSubscription(eventType, subscription) {
			invariant(subscription.subscriber === this, "The subscriber of the subscription is incorrectly set."), this._subscriptionsForType[eventType] || (this._subscriptionsForType[eventType] = []);
			var key = this._subscriptionsForType[eventType].length;
			return this._subscriptionsForType[eventType].push(subscription), subscription.eventType = eventType, subscription.key = key, subscription;
		}
		/**
		* Removes a bulk set of the subscriptions.
		*
		* @param {?string} eventType - Optional name of the event type whose
		*   registered supscriptions to remove, if null remove all subscriptions.
		*/
		removeAllSubscriptions(eventType) {
			eventType == null ? this._subscriptionsForType = {} : delete this._subscriptionsForType[eventType];
		}
		/**
		* Removes a specific subscription. Instead of calling this function, call
		* `subscription.remove()` directly.
		*
		* @param {object} subscription
		*/
		removeSubscription(subscription) {
			var eventType = subscription.eventType, key = subscription.key, subscriptionsForType = this._subscriptionsForType[eventType];
			subscriptionsForType && delete subscriptionsForType[key];
		}
		/**
		* Returns the array of subscriptions that are currently registered for the
		* given event type.
		*
		* Note: This array can be potentially sparse as subscriptions are deleted
		* from it when they are removed.
		*
		* TODO: This returns a nullable array. wat?
		*
		* @param {string} eventType
		* @returns {?array}
		*/
		getSubscriptionsForType(eventType) {
			return this._subscriptionsForType[eventType];
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/emitter/_EventEmitter.mjs
var sparseFilterPredicate, EventEmitter$1;
var init__EventEmitter = __esmMin((() => {
	init_esm$1();
	init__EmitterSubscription();
	init__EventSubscriptionVendor();
	sparseFilterPredicate = () => !0;
	EventEmitter$1 = class {
		/**
		* @constructor
		*
		* @param {EventSubscriptionVendor} subscriber - Optional subscriber instance
		*   to use. If omitted, a new subscriber will be created for the emitter.
		*/
		constructor(subscriber = new EventSubscriptionVendor()) {
			this._subscriber = subscriber;
		}
		/**
		* Adds a listener to be invoked when events of the specified type are
		* emitted. An optional calling context may be provided. The data arguments
		* emitted will be passed to the listener function.
		*
		* TODO: Annotate the listener arg's type. This is tricky because listeners
		*       can be invoked with varargs.
		*
		* @param {string} eventType - Name of the event to listen to
		* @param {function} listener - Function to invoke when the specified event is
		*   emitted
		* @param {*} context - Optional context object to use when invoking the
		*   listener
		*/
		addListener(eventType, listener, context) {
			return this._subscriber.addSubscription(eventType, new EmitterSubscription(this, this._subscriber, listener, context));
		}
		/**
		* Removes all of the registered listeners, including those registered as
		* listener maps.
		*
		* @param {?string} eventType - Optional name of the event whose registered
		*   listeners to remove
		*/
		removeAllListeners(eventType) {
			this._subscriber.removeAllSubscriptions(eventType);
		}
		/**
		* @deprecated Use `remove` on the EventSubscription from `addListener`.
		*/
		removeSubscription(subscription) {
			invariant(subscription.emitter === this, "Subscription does not belong to this emitter."), this._subscriber.removeSubscription(subscription);
		}
		/**
		* Returns the number of listeners that are currently registered for the given
		* event.
		*
		* @param {string} eventType - Name of the event to query
		* @returns {number}
		*/
		listenerCount(eventType) {
			var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
			return subscriptions ? subscriptions.filter(sparseFilterPredicate).length : 0;
		}
		/**
		* Emits an event of the given type with the given data. All handlers of that
		* particular type will be notified.
		*
		* @param {string} eventType - Name of the event to emit
		* @param {...*} Arbitrary arguments to be passed to each registered listener
		*
		* @example
		*   emitter.addListener('someEvent', function(message) {
		*     console.log(message);
		*   });
		*
		*   emitter.emit('someEvent', 'abc'); // logs 'abc'
		*/
		emit(eventType) {
			var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
			if (subscriptions) {
				for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
				for (var i = 0, l = subscriptions.length; i < l; i++) {
					var subscription = subscriptions[i];
					subscription && subscription.listener && subscription.listener.apply(subscription.context, args);
				}
			}
		}
		/**
		* @deprecated Use `remove` on the EventSubscription from `addListener`.
		*/
		removeListener(eventType, listener) {
			console.error("EventEmitter.removeListener('" + eventType + "', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`.");
			var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
			if (subscriptions) for (var i = 0, l = subscriptions.length; i < l; i++) {
				var subscription = subscriptions[i];
				subscription && subscription.listener === listener && subscription.remove();
			}
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/emitter/EventEmitter.mjs
var init_EventEmitter = __esmMin((() => {
	init__EventEmitter();
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/EventEmitter/RCTDeviceEventEmitter.mjs
var RCTDeviceEventEmitter;
var init_RCTDeviceEventEmitter = __esmMin((() => {
	init_EventEmitter();
	RCTDeviceEventEmitter = new EventEmitter$1();
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/EventEmitter/NativeEventEmitter.mjs
var NativeEventEmitter, NativeEventEmitter_default;
var init_NativeEventEmitter = __esmMin((() => {
	init_esm$1();
	init_RCTDeviceEventEmitter();
	init_defineProperty();
	NativeEventEmitter = class {
		constructor(nativeModule) {
			_defineProperty(this, "_nativeModule", void 0);
			Platform.OS === "ios" && (invariant(nativeModule != null, "`new NativeEventEmitter()` requires a non-null argument."), this._nativeModule = nativeModule);
		}
		addListener(eventType, listener, context) {
			var _this$_nativeModule;
			(_this$_nativeModule = this._nativeModule) === null || _this$_nativeModule === void 0 || _this$_nativeModule.addListener(eventType);
			let subscription = RCTDeviceEventEmitter.addListener(eventType, listener, context);
			return { remove: () => {
				var _this$_nativeModule2;
				subscription != null && ((_this$_nativeModule2 = this._nativeModule) === null || _this$_nativeModule2 === void 0 || _this$_nativeModule2.removeListeners(1), subscription.remove(), subscription = null);
			} };
		}
		/**
		* @deprecated Use `remove` on the EventSubscription from `addListener`.
		*/
		removeListener(eventType, listener) {
			var _this$_nativeModule3;
			(_this$_nativeModule3 = this._nativeModule) === null || _this$_nativeModule3 === void 0 || _this$_nativeModule3.removeListeners(1), RCTDeviceEventEmitter.removeListener(eventType, listener);
		}
		emit(eventType, ...args) {
			RCTDeviceEventEmitter.emit(eventType, ...args);
		}
		removeAllListeners(eventType) {
			var _this$_nativeModule4;
			invariant(eventType != null, "`NativeEventEmitter.removeAllListener()` requires a non-null argument."), (_this$_nativeModule4 = this._nativeModule) === null || _this$_nativeModule4 === void 0 || _this$_nativeModule4.removeListeners(this.listenerCount(eventType)), RCTDeviceEventEmitter.removeAllListeners(eventType);
		}
		listenerCount(eventType) {
			return RCTDeviceEventEmitter.listenerCount(eventType);
		}
	};
	NativeEventEmitter_default = NativeEventEmitter;
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Utilities/Platform.mjs
var init_Platform = __esmMin((() => {
	init_esm$1();
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/ReactNative/ReactNativeFeatureFlags.mjs
var ReactNativeFeatureFlags;
var init_ReactNativeFeatureFlags = __esmMin((() => {
	ReactNativeFeatureFlags = {
		isLayoutAnimationEnabled: () => !0,
		shouldEmitW3CPointerEvents: () => !1,
		shouldPressibilityUseW3CPointerEventsForHover: () => !1,
		animatedShouldDebounceQueueFlush: () => !1,
		animatedShouldUseSingleOp: () => !1
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/NativeAnimatedHelper.mjs
function addWhitelistedStyleProp(prop) {
	SUPPORTED_STYLES[prop] = !0;
}
function addWhitelistedTransformProp(prop) {
	SUPPORTED_TRANSFORMS[prop] = !0;
}
function addWhitelistedInterpolationParam(param) {
	SUPPORTED_INTERPOLATION_PARAMS[param] = !0;
}
function isSupportedColorStyleProp(prop) {
	return SUPPORTED_COLOR_STYLES.hasOwnProperty(prop);
}
function isSupportedStyleProp(prop) {
	return SUPPORTED_STYLES.hasOwnProperty(prop);
}
function isSupportedTransformProp(prop) {
	return SUPPORTED_TRANSFORMS.hasOwnProperty(prop);
}
function isSupportedInterpolationParam(param) {
	return SUPPORTED_INTERPOLATION_PARAMS.hasOwnProperty(param);
}
function validateTransform(configs) {
	configs.forEach((config) => {
		if (!isSupportedTransformProp(config.property)) throw new Error(`Property '${config.property}' is not supported by native animated module`);
	});
}
function validateStyles(styles) {
	for (const key in styles) if (!isSupportedStyleProp(key)) throw new Error(`Style property '${key}' is not supported by native animated module`);
}
function validateInterpolation(config) {
	for (const key in config) if (!isSupportedInterpolationParam(key)) throw new Error(`Interpolation property '${key}' is not supported by native animated module`);
}
function generateNewNodeTag() {
	return __nativeAnimatedNodeTagCount++;
}
function generateNewAnimationId() {
	return __nativeAnimationIdCount++;
}
function assertNativeAnimatedModule() {
	invariant(NativeAnimatedModule, "Native animated module is not available");
}
function shouldUseNativeDriver(config) {
	return config.useNativeDriver == null && console.warn("Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`"), config.useNativeDriver === !0 && !NativeAnimatedModule ? (_warnedMissingNativeAnimated || (console.warn("Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. Make sure to run `bundle exec pod install` first. Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"), _warnedMissingNativeAnimated = !0), !1) : config.useNativeDriver || !1;
}
function transformDataType(value) {
	return typeof value != "string" ? value : /deg$/.test(value) ? (parseFloat(value) || 0) * Math.PI / 180 : value;
}
var NativeAnimatedModule, __nativeAnimatedNodeTagCount, __nativeAnimationIdCount, nativeEventEmitter, waitingForQueuedOperations, queueOperations, queue, flushQueueTimeout, nativeOps, API, SUPPORTED_COLOR_STYLES, SUPPORTED_STYLES, SUPPORTED_TRANSFORMS, SUPPORTED_INTERPOLATION_PARAMS, _warnedMissingNativeAnimated, NativeAnimatedHelper;
var init_NativeAnimatedHelper = __esmMin((() => {
	init_NativeAnimatedModule();
	init_NativeAnimatedTurboModule();
	init_NativeEventEmitter();
	init_Platform();
	init_ReactNativeFeatureFlags();
	init_esm$1();
	init_RCTDeviceEventEmitter();
	init_objectSpread2();
	NativeAnimatedModule = Platform.OS === "ios" && global.RN$Bridgeless === !0 ? NativeAnimatedTurboModule : NativeAnimatedNonTurboModule;
	__nativeAnimatedNodeTagCount = 1, __nativeAnimationIdCount = 1, waitingForQueuedOperations = /* @__PURE__ */ new Set(), queueOperations = !1, queue = [];
	Platform.OS === "android" && !(NativeAnimatedModule === null || NativeAnimatedModule === void 0) && NativeAnimatedModule.queueAndExecuteBatchedOperations && ReactNativeFeatureFlags.animatedShouldUseSingleOp();
	flushQueueTimeout = null;
	nativeOps = NativeAnimatedModule, API = {
		getValue: function(tag, saveValueCallback) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.getValue, tag, saveValueCallback);
		},
		setWaitingForIdentifier: function(id) {
			waitingForQueuedOperations.add(id), queueOperations = !0, ReactNativeFeatureFlags.animatedShouldDebounceQueueFlush() && flushQueueTimeout && clearTimeout(flushQueueTimeout);
		},
		unsetWaitingForIdentifier: function(id) {
			waitingForQueuedOperations.delete(id), waitingForQueuedOperations.size === 0 && (queueOperations = !1, API.disableQueue());
		},
		disableQueue: function() {
			if (invariant(nativeOps, "Native animated module is not available"), ReactNativeFeatureFlags.animatedShouldDebounceQueueFlush()) {
				const prevTimeout = flushQueueTimeout;
				clearImmediate(prevTimeout), flushQueueTimeout = setImmediate(API.flushQueue);
			} else API.flushQueue();
		},
		flushQueue: function() {},
		queueOperation: (fn, ...args) => {
			queueOperations || queue.length !== 0 ? queue.push(() => fn(...args)) : fn(...args);
		},
		createAnimatedNode: function(tag, config) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.createAnimatedNode, tag, config);
		},
		updateAnimatedNodeConfig: function(tag, config) {
			invariant(nativeOps, "Native animated module is not available");
		},
		startListeningToAnimatedNodeValue: function(tag) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.startListeningToAnimatedNodeValue, tag);
		},
		stopListeningToAnimatedNodeValue: function(tag) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.stopListeningToAnimatedNodeValue, tag);
		},
		connectAnimatedNodes: function(parentTag, childTag) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.connectAnimatedNodes, parentTag, childTag);
		},
		disconnectAnimatedNodes: function(parentTag, childTag) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.disconnectAnimatedNodes, parentTag, childTag);
		},
		startAnimatingNode: function(animationId, nodeTag, config, endCallback) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.startAnimatingNode, animationId, nodeTag, config, endCallback);
		},
		stopAnimation: function(animationId) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.stopAnimation, animationId);
		},
		setAnimatedNodeValue: function(nodeTag, value) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.setAnimatedNodeValue, nodeTag, value);
		},
		setAnimatedNodeOffset: function(nodeTag, offset) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.setAnimatedNodeOffset, nodeTag, offset);
		},
		flattenAnimatedNodeOffset: function(nodeTag) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.flattenAnimatedNodeOffset, nodeTag);
		},
		extractAnimatedNodeOffset: function(nodeTag) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.extractAnimatedNodeOffset, nodeTag);
		},
		connectAnimatedNodeToView: function(nodeTag, viewTag) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.connectAnimatedNodeToView, nodeTag, viewTag);
		},
		disconnectAnimatedNodeFromView: function(nodeTag, viewTag) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.disconnectAnimatedNodeFromView, nodeTag, viewTag);
		},
		restoreDefaultValues: function(nodeTag) {
			invariant(nativeOps, "Native animated module is not available"), nativeOps.restoreDefaultValues != null && API.queueOperation(nativeOps.restoreDefaultValues, nodeTag);
		},
		dropAnimatedNode: function(tag) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.dropAnimatedNode, tag);
		},
		addAnimatedEventToView: function(viewTag, eventName, eventMapping) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.addAnimatedEventToView, viewTag, eventName, eventMapping);
		},
		removeAnimatedEventFromView(viewTag, eventName, animatedNodeTag) {
			invariant(nativeOps, "Native animated module is not available"), API.queueOperation(nativeOps.removeAnimatedEventFromView, viewTag, eventName, animatedNodeTag);
		}
	};
	SUPPORTED_COLOR_STYLES = {
		backgroundColor: !0,
		borderBottomColor: !0,
		borderColor: !0,
		borderEndColor: !0,
		borderLeftColor: !0,
		borderRightColor: !0,
		borderStartColor: !0,
		borderTopColor: !0,
		color: !0,
		tintColor: !0
	}, SUPPORTED_STYLES = _objectSpread2(_objectSpread2({}, SUPPORTED_COLOR_STYLES), {}, {
		borderBottomEndRadius: !0,
		borderBottomLeftRadius: !0,
		borderBottomRightRadius: !0,
		borderBottomStartRadius: !0,
		borderRadius: !0,
		borderTopEndRadius: !0,
		borderTopLeftRadius: !0,
		borderTopRightRadius: !0,
		borderTopStartRadius: !0,
		elevation: !0,
		opacity: !0,
		transform: !0,
		zIndex: !0,
		shadowOpacity: !0,
		shadowRadius: !0,
		scaleX: !0,
		scaleY: !0,
		translateX: !0,
		translateY: !0
	}), SUPPORTED_TRANSFORMS = {
		translateX: !0,
		translateY: !0,
		scale: !0,
		scaleX: !0,
		scaleY: !0,
		rotate: !0,
		rotateX: !0,
		rotateY: !0,
		rotateZ: !0,
		perspective: !0
	}, SUPPORTED_INTERPOLATION_PARAMS = {
		inputRange: !0,
		outputRange: !0,
		extrapolate: !0,
		extrapolateRight: !0,
		extrapolateLeft: !0
	};
	_warnedMissingNativeAnimated = !1;
	NativeAnimatedHelper = {
		API,
		isSupportedColorStyleProp,
		isSupportedStyleProp,
		isSupportedTransformProp,
		isSupportedInterpolationParam,
		addWhitelistedStyleProp,
		addWhitelistedTransformProp,
		addWhitelistedInterpolationParam,
		validateStyles,
		validateTransform,
		validateInterpolation,
		generateNewNodeTag,
		generateNewAnimationId,
		assertNativeAnimatedModule,
		shouldUseNativeDriver,
		transformDataType,
		get nativeEventEmitter() {
			return nativeEventEmitter || (nativeEventEmitter = new NativeEventEmitter(Platform.OS !== "ios" ? null : NativeAnimatedModule)), nativeEventEmitter;
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/nodes/AnimatedNode.mjs
var NativeAnimatedAPI$2, _uniqueId$2, AnimatedNode;
var init_AnimatedNode = __esmMin((() => {
	init_NativeAnimatedHelper();
	init_esm$1();
	init_defineProperty();
	NativeAnimatedAPI$2 = NativeAnimatedHelper.API;
	_uniqueId$2 = 1;
	AnimatedNode = class {
		__attach() {}
		__detach() {
			this.__isNative && this.__nativeTag != null && (NativeAnimatedHelper.API.dropAnimatedNode(this.__nativeTag), this.__nativeTag = void 0);
		}
		__getValue() {}
		__getAnimatedValue() {
			return this.__getValue();
		}
		__addChild(child) {}
		__removeChild(child) {}
		__getChildren() {
			return [];
		}
		constructor() {
			_defineProperty(this, "_listeners", void 0);
			_defineProperty(this, "_platformConfig", void 0);
			_defineProperty(this, "__nativeAnimatedValueListener", void 0);
			_defineProperty(this, "__isNative", void 0);
			_defineProperty(this, "__nativeTag", void 0);
			_defineProperty(this, "__shouldUpdateListenersForNewNativeTag", void 0);
			this._listeners = {};
		}
		__makeNative(platformConfig) {
			if (!this.__isNative) throw new Error("This node cannot be made a \"native\" animated node");
			this._platformConfig = platformConfig, this.hasListeners() && this._startListeningToNativeValueUpdates();
		}
		/**
		* Adds an asynchronous listener to the value so you can observe updates from
		* animations.  This is useful because there is no way to
		* synchronously read the value because it might be driven natively.
		*
		* See https://reactnative.dev/docs/animatedvalue#addlistener
		*/
		addListener(callback) {
			const id = String(_uniqueId$2++);
			return this._listeners[id] = callback, this.__isNative && this._startListeningToNativeValueUpdates(), id;
		}
		/**
		* Unregister a listener. The `id` param shall match the identifier
		* previously returned by `addListener()`.
		*
		* See https://reactnative.dev/docs/animatedvalue#removelistener
		*/
		removeListener(id) {
			delete this._listeners[id], this.__isNative && !this.hasListeners() && this._stopListeningForNativeValueUpdates();
		}
		/**
		* Remove all registered listeners.
		*
		* See https://reactnative.dev/docs/animatedvalue#removealllisteners
		*/
		removeAllListeners() {
			this._listeners = {}, this.__isNative && this._stopListeningForNativeValueUpdates();
		}
		hasListeners() {
			return !!Object.keys(this._listeners).length;
		}
		_startListeningToNativeValueUpdates() {
			this.__nativeAnimatedValueListener && !this.__shouldUpdateListenersForNewNativeTag || (this.__shouldUpdateListenersForNewNativeTag && (this.__shouldUpdateListenersForNewNativeTag = !1, this._stopListeningForNativeValueUpdates()), NativeAnimatedAPI$2.startListeningToAnimatedNodeValue(this.__getNativeTag()), this.__nativeAnimatedValueListener = NativeAnimatedHelper.nativeEventEmitter.addListener("onAnimatedValueUpdate", (data) => {
				data.tag === this.__getNativeTag() && this.__onAnimatedValueUpdateReceived(data.value);
			}));
		}
		__onAnimatedValueUpdateReceived(value) {
			this.__callListeners(value);
		}
		__callListeners(value) {
			for (const key in this._listeners) this._listeners[key]({ value });
		}
		_stopListeningForNativeValueUpdates() {
			this.__nativeAnimatedValueListener && (this.__nativeAnimatedValueListener.remove(), this.__nativeAnimatedValueListener = null, NativeAnimatedAPI$2.stopListeningToAnimatedNodeValue(this.__getNativeTag()));
		}
		__getNativeTag() {
			var _this$__nativeTag;
			NativeAnimatedHelper.assertNativeAnimatedModule(), invariant(this.__isNative, "Attempt to get native tag from node not marked as \"native\"");
			const nativeTag = (_this$__nativeTag = this.__nativeTag) !== null && _this$__nativeTag !== void 0 ? _this$__nativeTag : NativeAnimatedHelper.generateNewNodeTag();
			if (this.__nativeTag == null) {
				this.__nativeTag = nativeTag;
				const config = this.__getNativeConfig();
				this._platformConfig && (config.platformConfig = this._platformConfig), NativeAnimatedHelper.API.createAnimatedNode(nativeTag, config), this.__shouldUpdateListenersForNewNativeTag = !0;
			}
			return nativeTag;
		}
		__getNativeConfig() {
			throw new Error("This JS animated node type cannot be used as native animated node");
		}
		toJSON() {
			return this.__getValue();
		}
		__getPlatformConfig() {
			return this._platformConfig;
		}
		__setPlatformConfig(platformConfig) {
			this._platformConfig = platformConfig;
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/nodes/AnimatedWithChildren.mjs
var AnimatedWithChildren;
var init_AnimatedWithChildren = __esmMin((() => {
	init_AnimatedNode();
	init_NativeAnimatedHelper();
	init_defineProperty();
	AnimatedWithChildren = class extends AnimatedNode {
		constructor() {
			var _super = (..._args) => (super(..._args), _defineProperty(this, "_children", void 0), this);
			_super(), this._children = [];
		}
		__makeNative(platformConfig) {
			if (!this.__isNative) {
				this.__isNative = !0;
				for (const child of this._children) child.__makeNative(platformConfig), NativeAnimatedHelper.API.connectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
			}
			super.__makeNative(platformConfig);
		}
		__addChild(child) {
			this._children.length === 0 && this.__attach(), this._children.push(child), this.__isNative && (child.__makeNative(this.__getPlatformConfig()), NativeAnimatedHelper.API.connectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag()));
		}
		__removeChild(child) {
			const index = this._children.indexOf(child);
			if (index === -1) {
				console.warn("Trying to remove a child that doesn't exist");
				return;
			}
			this.__isNative && child.__isNative && NativeAnimatedHelper.API.disconnectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag()), this._children.splice(index, 1), this._children.length === 0 && this.__detach();
		}
		__getChildren() {
			return this._children;
		}
		__callListeners(value) {
			if (super.__callListeners(value), !this.__isNative) for (const child of this._children) child.__getValue && child.__callListeners(child.__getValue());
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/nodes/AnimatedInterpolation.mjs
function createInterpolation(config) {
	if (config.outputRange && typeof config.outputRange[0] == "string") return createInterpolationFromStringOutputRange(config);
	const outputRange = config.outputRange, inputRange = config.inputRange;
	const easing = config.easing || linear;
	let extrapolateLeft = "extend";
	config.extrapolateLeft !== void 0 ? extrapolateLeft = config.extrapolateLeft : config.extrapolate !== void 0 && (extrapolateLeft = config.extrapolate);
	let extrapolateRight = "extend";
	return config.extrapolateRight !== void 0 ? extrapolateRight = config.extrapolateRight : config.extrapolate !== void 0 && (extrapolateRight = config.extrapolate), (input) => {
		invariant(typeof input == "number", "Cannot interpolation an input which is not a number");
		const range = findRange(input, inputRange);
		return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight);
	};
}
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight) {
	let result = input;
	if (result < inputMin) {
		if (extrapolateLeft === "identity") return result;
		extrapolateLeft === "clamp" && (result = inputMin);
	}
	if (result > inputMax) {
		if (extrapolateRight === "identity") return result;
		extrapolateRight === "clamp" && (result = inputMax);
	}
	return outputMin === outputMax ? outputMin : inputMin === inputMax ? input <= inputMin ? outputMin : outputMax : (inputMin === -Infinity ? result = -result : inputMax === Infinity ? result = result - inputMin : result = (result - inputMin) / (inputMax - inputMin), result = easing(result), outputMin === -Infinity ? result = -result : outputMax === Infinity ? result = result + outputMin : result = result * (outputMax - outputMin) + outputMin, result);
}
function colorToRgba(input) {
	let normalizedColor = normalizeColor$1(input);
	if (normalizedColor === null || typeof normalizedColor != "number") return input;
	normalizedColor = normalizedColor || 0;
	return `rgba(${(normalizedColor & 4278190080) >>> 24}, ${(normalizedColor & 16711680) >>> 16}, ${(normalizedColor & 65280) >>> 8}, ${(normalizedColor & 255) / 255})`;
}
function createInterpolationFromStringOutputRange(config) {
	let outputRange = config.outputRange;
	invariant(outputRange.length >= 2, "Bad output range"), outputRange = outputRange.map(colorToRgba), checkPattern(outputRange);
	const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
	outputRange.forEach((value) => {
		value.match(stringShapeRegex).forEach((number, i) => {
			outputRanges[i].push(+number);
		});
	});
	const interpolations = outputRange[0].match(stringShapeRegex).map((value, i) => createInterpolation(_objectSpread2(_objectSpread2({}, config), {}, { outputRange: outputRanges[i] }))), shouldRound = isRgbOrRgba(outputRange[0]);
	return (input) => {
		let i = 0;
		return outputRange[0].replace(stringShapeRegex, () => {
			let val = +interpolations[i++](input);
			return shouldRound && (val = i < 4 ? Math.round(val) : Math.round(val * 1e3) / 1e3), String(val);
		});
	};
}
function isRgbOrRgba(range) {
	return typeof range == "string" && range.startsWith("rgb");
}
function checkPattern(arr) {
	const pattern = arr[0].replace(stringShapeRegex, "");
	for (let i = 1; i < arr.length; ++i) invariant(pattern === arr[i].replace(stringShapeRegex, ""), "invalid pattern " + arr[0] + " and " + arr[i]);
}
function findRange(input, inputRange) {
	let i;
	for (i = 1; i < inputRange.length - 1 && !(inputRange[i] >= input); ++i);
	return i - 1;
}
var linear, stringShapeRegex, AnimatedInterpolation;
var init_AnimatedInterpolation = __esmMin((() => {
	init_AnimatedWithChildren();
	init_NativeAnimatedHelper();
	init_esm$1();
	init_objectSpread2();
	init_defineProperty();
	linear = (t) => t;
	stringShapeRegex = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;
	AnimatedInterpolation = class AnimatedInterpolation extends AnimatedWithChildren {
		constructor(parent, config) {
			super(), this._parent = parent, this._config = config, this._interpolation = createInterpolation(config);
		}
		__makeNative(platformConfig) {
			this._parent.__makeNative(platformConfig), super.__makeNative(platformConfig);
		}
		__getValue() {
			const parentValue = this._parent.__getValue();
			return invariant(typeof parentValue == "number", "Cannot interpolate an input which is not a number."), this._interpolation(parentValue);
		}
		interpolate(config) {
			return new AnimatedInterpolation(this, config);
		}
		__attach() {
			this._parent.__addChild(this);
		}
		__detach() {
			this._parent.__removeChild(this), super.__detach();
		}
		__transformDataType(range) {
			return range.map(NativeAnimatedHelper.transformDataType);
		}
		__getNativeConfig() {
			return {
				inputRange: this._config.inputRange,
				outputRange: this.__transformDataType(this._config.outputRange),
				extrapolateLeft: this._config.extrapolateLeft || this._config.extrapolate || "extend",
				extrapolateRight: this._config.extrapolateRight || this._config.extrapolate || "extend",
				type: "interpolation"
			};
		}
	};
	_defineProperty(AnimatedInterpolation, "__createInterpolation", createInterpolation);
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/nodes/AnimatedValue.mjs
function _flush(rootNode) {
	const animatedStyles = /* @__PURE__ */ new Set();
	function findAnimatedStyles(node) {
		typeof node.update == "function" ? animatedStyles.add(node) : node.__getChildren().forEach(findAnimatedStyles);
	}
	findAnimatedStyles(rootNode), animatedStyles.forEach((animatedStyle) => animatedStyle.update());
}
function _executeAsAnimatedBatch(id, operation) {
	NativeAnimatedAPI$1.setWaitingForIdentifier(id), operation(), NativeAnimatedAPI$1.unsetWaitingForIdentifier(id);
}
var NativeAnimatedAPI$1, AnimatedValue;
var init_AnimatedValue = __esmMin((() => {
	init_AnimatedInterpolation();
	init_AnimatedWithChildren();
	init_esm$1();
	init_NativeAnimatedHelper();
	init_defineProperty();
	NativeAnimatedAPI$1 = NativeAnimatedHelper.API;
	AnimatedValue = class extends AnimatedWithChildren {
		constructor(value, config) {
			var _super = (..._args) => (super(..._args), _defineProperty(this, "_value", void 0), _defineProperty(this, "_startingValue", void 0), _defineProperty(this, "_offset", void 0), _defineProperty(this, "_animation", void 0), _defineProperty(this, "_tracking", void 0), this);
			if (_super(), typeof value != "number") throw new Error("AnimatedValue: Attempting to set value to undefined");
			this._startingValue = this._value = value, this._offset = 0, this._animation = null, config && config.useNativeDriver && this.__makeNative();
		}
		__detach() {
			this.__isNative && NativeAnimatedAPI$1.getValue(this.__getNativeTag(), (value) => {
				this._value = value - this._offset;
			}), this.stopAnimation(), super.__detach();
		}
		__getValue() {
			return this._value + this._offset;
		}
		/**
		* Directly set the value.  This will stop any animations running on the value
		* and update all the bound properties.
		*
		* See https://reactnative.dev/docs/animatedvalue#setvalue
		*/
		setValue(value) {
			this._animation && (this._animation.stop(), this._animation = null), this._updateValue(value, !this.__isNative), this.__isNative && _executeAsAnimatedBatch(this.__getNativeTag().toString(), () => NativeAnimatedAPI$1.setAnimatedNodeValue(this.__getNativeTag(), value));
		}
		/**
		* Sets an offset that is applied on top of whatever value is set, whether via
		* `setValue`, an animation, or `Animated.event`.  Useful for compensating
		* things like the start of a pan gesture.
		*
		* See https://reactnative.dev/docs/animatedvalue#setoffset
		*/
		setOffset(offset) {
			this._offset = offset, this.__isNative && NativeAnimatedAPI$1.setAnimatedNodeOffset(this.__getNativeTag(), offset);
		}
		/**
		* Merges the offset value into the base value and resets the offset to zero.
		* The final output of the value is unchanged.
		*
		* See https://reactnative.dev/docs/animatedvalue#flattenoffset
		*/
		flattenOffset() {
			this._value += this._offset, this._offset = 0, this.__isNative && NativeAnimatedAPI$1.flattenAnimatedNodeOffset(this.__getNativeTag());
		}
		/**
		* Sets the offset value to the base value, and resets the base value to zero.
		* The final output of the value is unchanged.
		*
		* See https://reactnative.dev/docs/animatedvalue#extractoffset
		*/
		extractOffset() {
			this._offset += this._value, this._value = 0, this.__isNative && NativeAnimatedAPI$1.extractAnimatedNodeOffset(this.__getNativeTag());
		}
		/**
		* Stops any running animation or tracking. `callback` is invoked with the
		* final value after stopping the animation, which is useful for updating
		* state to match the animation position with layout.
		*
		* See https://reactnative.dev/docs/animatedvalue#stopanimation
		*/
		stopAnimation(callback) {
			this.stopTracking(), this._animation && this._animation.stop(), this._animation = null, callback && (this.__isNative ? NativeAnimatedAPI$1.getValue(this.__getNativeTag(), callback) : callback(this.__getValue()));
		}
		/**
		* Stops any animation and resets the value to its original.
		*
		* See https://reactnative.dev/docs/animatedvalue#resetanimation
		*/
		resetAnimation(callback) {
			this.stopAnimation(callback), this._value = this._startingValue, this.__isNative && NativeAnimatedAPI$1.setAnimatedNodeValue(this.__getNativeTag(), this._startingValue);
		}
		__onAnimatedValueUpdateReceived(value) {
			this._updateValue(value, !1);
		}
		/**
		* Interpolates the value before updating the property, e.g. mapping 0-1 to
		* 0-10.
		*/
		interpolate(config) {
			return new AnimatedInterpolation(this, config);
		}
		/**
		* Typically only used internally, but could be used by a custom Animation
		* class.
		*
		* See https://reactnative.dev/docs/animatedvalue#animate
		*/
		animate(animation, callback) {
			let handle = null;
			animation.__isInteraction && (handle = InteractionManager.createInteractionHandle());
			const previousAnimation = this._animation;
			this._animation && this._animation.stop(), this._animation = animation, animation.start(this._value, (value) => {
				this._updateValue(value, !0);
			}, (result) => {
				this._animation = null, handle !== null && InteractionManager.clearInteractionHandle(handle), callback && callback(result);
			}, previousAnimation, this);
		}
		/**
		* Typically only used internally.
		*/
		stopTracking() {
			this._tracking && this._tracking.__detach(), this._tracking = null;
		}
		/**
		* Typically only used internally.
		*/
		track(tracking) {
			this.stopTracking(), this._tracking = tracking, this._tracking && this._tracking.update();
		}
		_updateValue(value, flush) {
			if (value === void 0) throw new Error("AnimatedValue: Attempting to set value to undefined");
			this._value = value, flush && _flush(this), super.__callListeners(this.__getValue());
		}
		__getNativeConfig() {
			return {
				type: "value",
				value: this._value,
				offset: this._offset
			};
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/AnimatedEvent.mjs
function attachNativeEvent(viewRef, eventName, argMapping) {
	const eventMappings = [], traverse = (value, path) => {
		if (value instanceof AnimatedValue) value.__makeNative(), eventMappings.push({
			nativeEventPath: path,
			animatedValueTag: value.__getNativeTag()
		});
		else if (typeof value == "object") for (const key in value) traverse(value[key], path.concat(key));
	};
	return invariant(argMapping[0] && argMapping[0].nativeEvent, "Native driven events only support animated values contained inside `nativeEvent`."), traverse(argMapping[0].nativeEvent, []), viewRef != null && eventMappings.forEach((mapping) => {
		NativeAnimatedHelper.API.addAnimatedEventToView(viewRef, eventName, mapping);
	}), { detach() {
		viewRef != null && eventMappings.forEach((mapping) => {
			NativeAnimatedHelper.API.removeAnimatedEventFromView(viewRef, eventName, mapping.animatedValueTag);
		});
	} };
}
var AnimatedEvent;
var init_AnimatedEvent = __esmMin((() => {
	init_AnimatedValue();
	init_NativeAnimatedHelper();
	init_esm$1();
	init_defineProperty();
	AnimatedEvent = class {
		constructor(argMapping, config) {
			_defineProperty(this, "_argMapping", void 0);
			_defineProperty(this, "_listeners", []);
			_defineProperty(this, "_attachedEvent", void 0);
			_defineProperty(this, "__isNative", void 0);
			this._argMapping = argMapping, config == null && (console.warn("Animated.event now requires a second argument for options"), config = { useNativeDriver: !1 }), config.listener && this.__addListener(config.listener), this._callListeners = this._callListeners.bind(this), this._attachedEvent = null, this.__isNative = shouldUseNativeDriver(config);
		}
		__addListener(callback) {
			this._listeners.push(callback);
		}
		__removeListener(callback) {
			this._listeners = this._listeners.filter((listener) => listener !== callback);
		}
		__attach(viewRef, eventName) {
			invariant(this.__isNative, "Only native driven events need to be attached."), this._attachedEvent = attachNativeEvent(viewRef, eventName, this._argMapping);
		}
		__detach(viewTag, eventName) {
			invariant(this.__isNative, "Only native driven events need to be detached."), this._attachedEvent && this._attachedEvent.detach();
		}
		__getHandler() {
			if (this.__isNative) return this._callListeners;
			return (...args) => {
				const traverse = (recMapping, recEvt, key) => {
					if (recMapping instanceof AnimatedValue) typeof recEvt == "number" && recMapping.setValue(recEvt);
					else if (typeof recMapping == "object") for (const mappingKey in recMapping) traverse(recMapping[mappingKey], recEvt[mappingKey], mappingKey);
				};
				this._argMapping.forEach((mapping, idx) => {
					traverse(mapping, args[idx], "arg" + idx);
				}), this._callListeners(...args);
			};
		}
		_callListeners(...args) {
			this._listeners.forEach((listener) => listener(...args));
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/nodes/AnimatedAddition.mjs
var AnimatedAddition;
var init_AnimatedAddition = __esmMin((() => {
	init_AnimatedInterpolation();
	init_AnimatedValue();
	init_AnimatedWithChildren();
	init_defineProperty();
	AnimatedAddition = class extends AnimatedWithChildren {
		constructor(a, b) {
			var _super = (..._args) => (super(..._args), _defineProperty(this, "_a", void 0), _defineProperty(this, "_b", void 0), this);
			_super(), this._a = typeof a == "number" ? new AnimatedValue(a) : a, this._b = typeof b == "number" ? new AnimatedValue(b) : b;
		}
		__makeNative(platformConfig) {
			this._a.__makeNative(platformConfig), this._b.__makeNative(platformConfig), super.__makeNative(platformConfig);
		}
		__getValue() {
			return this._a.__getValue() + this._b.__getValue();
		}
		interpolate(config) {
			return new AnimatedInterpolation(this, config);
		}
		__attach() {
			this._a.__addChild(this), this._b.__addChild(this);
		}
		__detach() {
			this._a.__removeChild(this), this._b.__removeChild(this), super.__detach();
		}
		__getNativeConfig() {
			return {
				type: "addition",
				input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
			};
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/nodes/AnimatedDiffClamp.mjs
var AnimatedDiffClamp;
var init_AnimatedDiffClamp = __esmMin((() => {
	init_AnimatedInterpolation();
	init_AnimatedWithChildren();
	init_defineProperty();
	AnimatedDiffClamp = class extends AnimatedWithChildren {
		constructor(a, min, max) {
			var _super = (..._args) => (super(..._args), _defineProperty(this, "_a", void 0), _defineProperty(this, "_min", void 0), _defineProperty(this, "_max", void 0), _defineProperty(this, "_value", void 0), _defineProperty(this, "_lastValue", void 0), this);
			_super(), this._a = a, this._min = min, this._max = max, this._value = this._lastValue = this._a.__getValue();
		}
		__makeNative(platformConfig) {
			this._a.__makeNative(platformConfig), super.__makeNative(platformConfig);
		}
		interpolate(config) {
			return new AnimatedInterpolation(this, config);
		}
		__getValue() {
			const value = this._a.__getValue(), diff = value - this._lastValue;
			return this._lastValue = value, this._value = Math.min(Math.max(this._value + diff, this._min), this._max), this._value;
		}
		__attach() {
			this._a.__addChild(this);
		}
		__detach() {
			this._a.__removeChild(this), super.__detach();
		}
		__getNativeConfig() {
			return {
				type: "diffclamp",
				input: this._a.__getNativeTag(),
				min: this._min,
				max: this._max
			};
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/nodes/AnimatedDivision.mjs
var AnimatedDivision;
var init_AnimatedDivision = __esmMin((() => {
	init_AnimatedInterpolation();
	init_AnimatedNode();
	init_AnimatedValue();
	init_AnimatedWithChildren();
	init_defineProperty();
	AnimatedDivision = class extends AnimatedWithChildren {
		constructor(a, b) {
			var _super = (..._args) => (super(..._args), _defineProperty(this, "_a", void 0), _defineProperty(this, "_b", void 0), _defineProperty(this, "_warnedAboutDivideByZero", !1), this);
			_super(), (b === 0 || b instanceof AnimatedNode && b.__getValue() === 0) && console.error("Detected potential division by zero in AnimatedDivision"), this._a = typeof a == "number" ? new AnimatedValue(a) : a, this._b = typeof b == "number" ? new AnimatedValue(b) : b;
		}
		__makeNative(platformConfig) {
			this._a.__makeNative(platformConfig), this._b.__makeNative(platformConfig), super.__makeNative(platformConfig);
		}
		__getValue() {
			const a = this._a.__getValue(), b = this._b.__getValue();
			return b === 0 ? (this._warnedAboutDivideByZero || (console.error("Detected division by zero in AnimatedDivision"), this._warnedAboutDivideByZero = !0), 0) : (this._warnedAboutDivideByZero = !1, a / b);
		}
		interpolate(config) {
			return new AnimatedInterpolation(this, config);
		}
		__attach() {
			this._a.__addChild(this), this._b.__addChild(this);
		}
		__detach() {
			this._a.__removeChild(this), this._b.__removeChild(this), super.__detach();
		}
		__getNativeConfig() {
			return {
				type: "division",
				input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
			};
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/nodes/AnimatedModulo.mjs
var AnimatedModulo;
var init_AnimatedModulo = __esmMin((() => {
	init_AnimatedInterpolation();
	init_AnimatedWithChildren();
	init_defineProperty();
	AnimatedModulo = class extends AnimatedWithChildren {
		constructor(a, modulus) {
			var _super = (..._args) => (super(..._args), _defineProperty(this, "_a", void 0), _defineProperty(this, "_modulus", void 0), this);
			_super(), this._a = a, this._modulus = modulus;
		}
		__makeNative(platformConfig) {
			this._a.__makeNative(platformConfig), super.__makeNative(platformConfig);
		}
		__getValue() {
			return (this._a.__getValue() % this._modulus + this._modulus) % this._modulus;
		}
		interpolate(config) {
			return new AnimatedInterpolation(this, config);
		}
		__attach() {
			this._a.__addChild(this);
		}
		__detach() {
			this._a.__removeChild(this), super.__detach();
		}
		__getNativeConfig() {
			return {
				type: "modulus",
				input: this._a.__getNativeTag(),
				modulus: this._modulus
			};
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/nodes/AnimatedMultiplication.mjs
var AnimatedMultiplication;
var init_AnimatedMultiplication = __esmMin((() => {
	init_AnimatedInterpolation();
	init_AnimatedValue();
	init_AnimatedWithChildren();
	init_defineProperty();
	AnimatedMultiplication = class extends AnimatedWithChildren {
		constructor(a, b) {
			var _super = (..._args) => (super(..._args), _defineProperty(this, "_a", void 0), _defineProperty(this, "_b", void 0), this);
			_super(), this._a = typeof a == "number" ? new AnimatedValue(a) : a, this._b = typeof b == "number" ? new AnimatedValue(b) : b;
		}
		__makeNative(platformConfig) {
			this._a.__makeNative(platformConfig), this._b.__makeNative(platformConfig), super.__makeNative(platformConfig);
		}
		__getValue() {
			return this._a.__getValue() * this._b.__getValue();
		}
		interpolate(config) {
			return new AnimatedInterpolation(this, config);
		}
		__attach() {
			this._a.__addChild(this), this._b.__addChild(this);
		}
		__detach() {
			this._a.__removeChild(this), this._b.__removeChild(this), super.__detach();
		}
		__getNativeConfig() {
			return {
				type: "multiplication",
				input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
			};
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/nodes/AnimatedTransform.mjs
var AnimatedTransform;
var init_AnimatedTransform = __esmMin((() => {
	init_AnimatedNode();
	init_AnimatedWithChildren();
	init_NativeAnimatedHelper();
	init_defineProperty();
	AnimatedTransform = class extends AnimatedWithChildren {
		constructor(transforms) {
			var _super = (..._args) => (super(..._args), _defineProperty(this, "_transforms", void 0), this);
			_super(), this._transforms = transforms;
		}
		__makeNative() {
			this._transforms.forEach((transform) => {
				for (const key in transform) {
					const value = transform[key];
					value instanceof AnimatedNode && value.__makeNative();
				}
			}), super.__makeNative();
		}
		__getValue() {
			return this._transforms.map((transform) => {
				const result = {};
				for (const key in transform) {
					const value = transform[key];
					value instanceof AnimatedNode ? result[key] = value.__getValue() : result[key] = value;
				}
				return result;
			});
		}
		__getAnimatedValue() {
			return this._transforms.map((transform) => {
				const result = {};
				for (const key in transform) {
					const value = transform[key];
					value instanceof AnimatedNode ? result[key] = value.__getAnimatedValue() : result[key] = value;
				}
				return result;
			});
		}
		__attach() {
			this._transforms.forEach((transform) => {
				for (const key in transform) {
					const value = transform[key];
					value instanceof AnimatedNode && value.__addChild(this);
				}
			});
		}
		__detach() {
			this._transforms.forEach((transform) => {
				for (const key in transform) {
					const value = transform[key];
					value instanceof AnimatedNode && value.__removeChild(this);
				}
			}), super.__detach();
		}
		__getNativeConfig() {
			const transConfigs = [];
			return this._transforms.forEach((transform) => {
				for (const key in transform) {
					const value = transform[key];
					value instanceof AnimatedNode ? transConfigs.push({
						type: "animated",
						property: key,
						nodeTag: value.__getNativeTag()
					}) : transConfigs.push({
						type: "static",
						property: key,
						value: NativeAnimatedHelper.transformDataType(value)
					});
				}
			}), NativeAnimatedHelper.validateTransform(transConfigs), {
				type: "transform",
				transforms: transConfigs
			};
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/nodes/AnimatedStyle.mjs
function createAnimatedStyle(inputStyle) {
	const style = flattenStyle(inputStyle), animatedStyles = {};
	for (const key in style) {
		const value = style[key];
		key === "transform" && Array.isArray(value) ? animatedStyles[key] = new AnimatedTransform(value) : value instanceof AnimatedNode ? animatedStyles[key] = value : value && !Array.isArray(value) && typeof value == "object" && (animatedStyles[key] = createAnimatedStyle(value));
	}
	return animatedStyles;
}
var flattenStyle, AnimatedStyle;
var init_AnimatedStyle = __esmMin((() => {
	init_AnimatedNode();
	init_AnimatedTransform();
	init_AnimatedWithChildren();
	init_NativeAnimatedHelper();
	init_esm$1();
	init_defineProperty();
	flattenStyle = StyleSheet.flatten;
	AnimatedStyle = class extends AnimatedWithChildren {
		constructor(style) {
			var _super = (..._args) => (super(..._args), _defineProperty(this, "_inputStyle", void 0), _defineProperty(this, "_style", void 0), this);
			_super(), this._inputStyle = style, this._style = createAnimatedStyle(style);
		}
		_walkStyleAndGetValues(style) {
			const updatedStyle = {};
			for (const key in style) {
				const value = style[key];
				value instanceof AnimatedNode ? value.__isNative || (updatedStyle[key] = value.__getValue()) : value && !Array.isArray(value) && typeof value == "object" ? updatedStyle[key] = this._walkStyleAndGetValues(value) : updatedStyle[key] = value;
			}
			return updatedStyle;
		}
		__getValue() {
			return [this._inputStyle, this._walkStyleAndGetValues(this._style)];
		}
		_walkStyleAndGetAnimatedValues(style) {
			const updatedStyle = {};
			for (const key in style) {
				const value = style[key];
				value instanceof AnimatedNode ? updatedStyle[key] = value.__getAnimatedValue() : value && !Array.isArray(value) && typeof value == "object" && (updatedStyle[key] = this._walkStyleAndGetAnimatedValues(value));
			}
			return updatedStyle;
		}
		__getAnimatedValue() {
			return this._walkStyleAndGetAnimatedValues(this._style);
		}
		__attach() {
			for (const key in this._style) {
				const value = this._style[key];
				value instanceof AnimatedNode && value.__addChild(this);
			}
		}
		__detach() {
			for (const key in this._style) {
				const value = this._style[key];
				value instanceof AnimatedNode && value.__removeChild(this);
			}
			super.__detach();
		}
		__makeNative() {
			for (const key in this._style) {
				const value = this._style[key];
				value instanceof AnimatedNode && value.__makeNative();
			}
			super.__makeNative();
		}
		__getNativeConfig() {
			const styleConfig = {};
			for (const styleKey in this._style) if (this._style[styleKey] instanceof AnimatedNode) {
				const style = this._style[styleKey];
				style.__makeNative(), styleConfig[styleKey] = style.__getNativeTag();
			}
			return NativeAnimatedHelper.validateStyles(styleConfig), {
				type: "style",
				style: styleConfig
			};
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/nodes/AnimatedProps.mjs
var AnimatedProps;
var init_AnimatedProps = __esmMin((() => {
	init_AnimatedEvent();
	init_AnimatedNode();
	init_AnimatedStyle();
	init_NativeAnimatedHelper();
	init_esm$1();
	init_objectSpread2();
	AnimatedProps = class extends AnimatedNode {
		constructor(props, callback) {
			super(), props.style && (props = _objectSpread2(_objectSpread2({}, props), {}, { style: new AnimatedStyle(props.style) })), this._props = props, this._callback = callback, this.__attach();
		}
		__getValue() {
			const props = {};
			for (const key in this._props) {
				const value = this._props[key];
				value instanceof AnimatedNode ? (!value.__isNative || value instanceof AnimatedStyle) && (props[key] = value.__getValue()) : value instanceof AnimatedEvent ? props[key] = value.__getHandler() : props[key] = value;
			}
			return props;
		}
		__getAnimatedValue() {
			const props = {};
			for (const key in this._props) {
				const value = this._props[key];
				value instanceof AnimatedNode && (props[key] = value.__getAnimatedValue());
			}
			return props;
		}
		__attach() {
			for (const key in this._props) {
				const value = this._props[key];
				value instanceof AnimatedNode && value.__addChild(this);
			}
		}
		__detach() {
			this.__isNative && this._animatedView && this.__disconnectAnimatedView();
			for (const key in this._props) {
				const value = this._props[key];
				value instanceof AnimatedNode && value.__removeChild(this);
			}
			super.__detach();
		}
		update() {
			this._callback();
		}
		__makeNative() {
			if (!this.__isNative) {
				this.__isNative = !0;
				for (const key in this._props) {
					const value = this._props[key];
					value instanceof AnimatedNode && value.__makeNative();
				}
				this._animatedView && this.__connectAnimatedView();
			}
		}
		setNativeView(animatedView) {
			this._animatedView !== animatedView && (this._animatedView = animatedView, this.__isNative && this.__connectAnimatedView());
		}
		__connectAnimatedView() {
			invariant(this.__isNative, "Expected node to be marked as \"native\"");
			const nativeViewTag = this._animatedView;
			invariant(nativeViewTag != null, "Unable to locate attached view in the native tree"), NativeAnimatedHelper.API.connectAnimatedNodeToView(this.__getNativeTag(), nativeViewTag);
		}
		__disconnectAnimatedView() {
			invariant(this.__isNative, "Expected node to be marked as \"native\"");
			const nativeViewTag = this._animatedView;
			invariant(nativeViewTag != null, "Unable to locate attached view in the native tree"), NativeAnimatedHelper.API.disconnectAnimatedNodeFromView(this.__getNativeTag(), nativeViewTag);
		}
		__restoreDefaultValues() {
			this.__isNative && NativeAnimatedHelper.API.restoreDefaultValues(this.__getNativeTag());
		}
		__getNativeConfig() {
			const propsConfig = {};
			for (const propKey in this._props) {
				const value = this._props[propKey];
				value instanceof AnimatedNode && (value.__makeNative(), propsConfig[propKey] = value.__getNativeTag());
			}
			return {
				type: "props",
				props: propsConfig
			};
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/nodes/AnimatedSubtraction.mjs
var AnimatedSubtraction;
var init_AnimatedSubtraction = __esmMin((() => {
	init_AnimatedInterpolation();
	init_AnimatedValue();
	init_AnimatedWithChildren();
	init_defineProperty();
	AnimatedSubtraction = class extends AnimatedWithChildren {
		constructor(a, b) {
			var _super = (..._args) => (super(..._args), _defineProperty(this, "_a", void 0), _defineProperty(this, "_b", void 0), this);
			_super(), this._a = typeof a == "number" ? new AnimatedValue(a) : a, this._b = typeof b == "number" ? new AnimatedValue(b) : b;
		}
		__makeNative(platformConfig) {
			this._a.__makeNative(platformConfig), this._b.__makeNative(platformConfig), super.__makeNative(platformConfig);
		}
		__getValue() {
			return this._a.__getValue() - this._b.__getValue();
		}
		interpolate(config) {
			return new AnimatedInterpolation(this, config);
		}
		__attach() {
			this._a.__addChild(this), this._b.__addChild(this);
		}
		__detach() {
			this._a.__removeChild(this), this._b.__removeChild(this), super.__detach();
		}
		__getNativeConfig() {
			return {
				type: "subtraction",
				input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
			};
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/nodes/AnimatedTracking.mjs
var AnimatedTracking;
var init_AnimatedTracking = __esmMin((() => {
	init_AnimatedValue();
	init_AnimatedNode();
	init_NativeAnimatedHelper();
	init_defineProperty();
	init_objectSpread2();
	AnimatedTracking = class extends AnimatedNode {
		constructor(value, parent, animationClass, animationConfig, callback) {
			var _super = (..._args) => (super(..._args), _defineProperty(this, "_value", void 0), _defineProperty(this, "_parent", void 0), _defineProperty(this, "_callback", void 0), _defineProperty(this, "_animationConfig", void 0), _defineProperty(this, "_animationClass", void 0), _defineProperty(this, "_useNativeDriver", void 0), this);
			_super(), this._value = value, this._parent = parent, this._animationClass = animationClass, this._animationConfig = animationConfig, this._useNativeDriver = shouldUseNativeDriver(animationConfig), this._callback = callback, this.__attach();
		}
		__makeNative() {
			this.__isNative = !0, this._parent.__makeNative(), super.__makeNative(), this._value.__makeNative();
		}
		__getValue() {
			return this._parent.__getValue();
		}
		__attach() {
			this._parent.__addChild(this), this._useNativeDriver && this.__makeNative();
		}
		__detach() {
			this._parent.__removeChild(this), super.__detach();
		}
		update() {
			this._value.animate(new this._animationClass(_objectSpread2(_objectSpread2({}, this._animationConfig), {}, { toValue: this._animationConfig.toValue.__getValue() })), this._callback);
		}
		__getNativeConfig() {
			const animationConfig = new this._animationClass(_objectSpread2(_objectSpread2({}, this._animationConfig), {}, { toValue: void 0 })).__getNativeAnimationConfig();
			return {
				type: "tracking",
				animationId: generateNewAnimationId(),
				animationConfig,
				toValue: this._parent.__getNativeTag(),
				value: this._value.__getNativeTag()
			};
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/nodes/AnimatedValueXY.mjs
var _uniqueId$1, AnimatedValueXY;
var init_AnimatedValueXY = __esmMin((() => {
	init_AnimatedValue();
	init_AnimatedWithChildren();
	init_esm$1();
	_uniqueId$1 = 1;
	AnimatedValueXY = class extends AnimatedWithChildren {
		constructor(valueIn) {
			super();
			const value = valueIn || {
				x: 0,
				y: 0
			};
			typeof value.x == "number" && typeof value.y == "number" ? (this.x = new AnimatedValue(value.x), this.y = new AnimatedValue(value.y)) : (invariant(value.x instanceof AnimatedValue && value.y instanceof AnimatedValue, "AnimatedValueXY must be initialized with an object of numbers or AnimatedValues."), this.x = value.x, this.y = value.y), this._listeners = {};
		}
		setValue(value) {
			this.x.setValue(value.x), this.y.setValue(value.y);
		}
		setOffset(offset) {
			this.x.setOffset(offset.x), this.y.setOffset(offset.y);
		}
		flattenOffset() {
			this.x.flattenOffset(), this.y.flattenOffset();
		}
		extractOffset() {
			this.x.extractOffset(), this.y.extractOffset();
		}
		__getValue() {
			return {
				x: this.x.__getValue(),
				y: this.y.__getValue()
			};
		}
		resetAnimation(callback) {
			this.x.resetAnimation(), this.y.resetAnimation(), callback && callback(this.__getValue());
		}
		stopAnimation(callback) {
			this.x.stopAnimation(), this.y.stopAnimation(), callback && callback(this.__getValue());
		}
		addListener(callback) {
			const id = String(_uniqueId$1++), jointCallback = ({ value }) => {
				callback(this.__getValue());
			};
			return this._listeners[id] = {
				x: this.x.addListener(jointCallback),
				y: this.y.addListener(jointCallback)
			}, id;
		}
		removeListener(id) {
			this.x.removeListener(this._listeners[id].x), this.y.removeListener(this._listeners[id].y), delete this._listeners[id];
		}
		removeAllListeners() {
			this.x.removeAllListeners(), this.y.removeAllListeners(), this._listeners = {};
		}
		getLayout() {
			return {
				left: this.x,
				top: this.y
			};
		}
		getTranslateTransform() {
			return [{ translateX: this.x }, { translateY: this.y }];
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/animations/Animation.mjs
var startNativeAnimationNextId, Animation;
var init_Animation = __esmMin((() => {
	init_NativeAnimatedHelper();
	init_defineProperty();
	startNativeAnimationNextId = 1;
	Animation = class {
		constructor() {
			_defineProperty(this, "__active", void 0);
			_defineProperty(this, "__isInteraction", void 0);
			_defineProperty(this, "__nativeId", void 0);
			_defineProperty(this, "__onEnd", void 0);
			_defineProperty(this, "__iterations", void 0);
		}
		start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {}
		stop() {
			this.__nativeId && NativeAnimatedHelper.API.stopAnimation(this.__nativeId);
		}
		__getNativeAnimationConfig() {
			throw new Error("This animation type cannot be offloaded to native");
		}
		__debouncedOnEnd(result) {
			const onEnd = this.__onEnd;
			this.__onEnd = null, onEnd && onEnd(result);
		}
		__startNativeAnimation(animatedValue) {
			const startNativeAnimationWaitId = `${startNativeAnimationNextId}:startAnimation`;
			startNativeAnimationNextId += 1, NativeAnimatedHelper.API.setWaitingForIdentifier(startNativeAnimationWaitId);
			try {
				const config = this.__getNativeAnimationConfig();
				animatedValue.__makeNative(config.platformConfig), this.__nativeId = NativeAnimatedHelper.generateNewAnimationId(), NativeAnimatedHelper.API.startAnimatingNode(this.__nativeId, animatedValue.__getNativeTag(), config, this.__debouncedOnEnd.bind(this));
			} catch (e) {
				throw e;
			} finally {
				NativeAnimatedHelper.API.unsetWaitingForIdentifier(startNativeAnimationWaitId);
			}
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/animations/DecayAnimation.mjs
var DecayAnimation;
var init_DecayAnimation = __esmMin((() => {
	init_Animation();
	init_NativeAnimatedHelper();
	init_defineProperty();
	DecayAnimation = class extends Animation {
		constructor(config) {
			var _config$deceleration, _config$isInteraction, _config$iterations;
			var _super = (..._args) => (super(..._args), _defineProperty(this, "_startTime", void 0), _defineProperty(this, "_lastValue", void 0), _defineProperty(this, "_fromValue", void 0), _defineProperty(this, "_deceleration", void 0), _defineProperty(this, "_velocity", void 0), _defineProperty(this, "_onUpdate", void 0), _defineProperty(this, "_animationFrame", void 0), _defineProperty(this, "_useNativeDriver", void 0), this);
			_super(), this._deceleration = (_config$deceleration = config.deceleration) !== null && _config$deceleration !== void 0 ? _config$deceleration : .998, this._velocity = config.velocity, this._useNativeDriver = shouldUseNativeDriver(config), this.__isInteraction = (_config$isInteraction = config.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !this._useNativeDriver, this.__iterations = (_config$iterations = config.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1;
		}
		__getNativeAnimationConfig() {
			return {
				type: "decay",
				deceleration: this._deceleration,
				velocity: this._velocity,
				iterations: this.__iterations
			};
		}
		start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
			this.__active = !0, this._lastValue = fromValue, this._fromValue = fromValue, this._onUpdate = onUpdate, this.__onEnd = onEnd, this._startTime = Date.now(), this._useNativeDriver ? this.__startNativeAnimation(animatedValue) : this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
		}
		onUpdate() {
			const now = Date.now(), value = this._fromValue + this._velocity / (1 - this._deceleration) * (1 - Math.exp(-(1 - this._deceleration) * (now - this._startTime)));
			if (this._onUpdate(value), Math.abs(this._lastValue - value) < .1) {
				this.__debouncedOnEnd({ finished: !0 });
				return;
			}
			this._lastValue = value, this.__active && (this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this)));
		}
		stop() {
			super.stop(), this.__active = !1, global.cancelAnimationFrame(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/SpringConfig.mjs
function stiffnessFromOrigamiValue(oValue) {
	return (oValue - 30) * 3.62 + 194;
}
function dampingFromOrigamiValue(oValue) {
	return (oValue - 8) * 3 + 25;
}
function fromOrigamiTensionAndFriction(tension, friction) {
	return {
		stiffness: stiffnessFromOrigamiValue(tension),
		damping: dampingFromOrigamiValue(friction)
	};
}
function fromBouncinessAndSpeed(bounciness, speed) {
	function normalize(value, startValue, endValue) {
		return (value - startValue) / (endValue - startValue);
	}
	function projectNormal(n, start, end) {
		return start + n * (end - start);
	}
	function linearInterpolation(t, start, end) {
		return t * end + (1 - t) * start;
	}
	function quadraticOutInterpolation(t, start, end) {
		return linearInterpolation(2 * t - t * t, start, end);
	}
	function b3Friction1(x) {
		return 7e-4 * Math.pow(x, 3) - .031 * Math.pow(x, 2) + .64 * x + 1.28;
	}
	function b3Friction2(x) {
		return 44e-6 * Math.pow(x, 3) - .006 * Math.pow(x, 2) + .36 * x + 2;
	}
	function b3Friction3(x) {
		return 45e-8 * Math.pow(x, 3) - 332e-6 * Math.pow(x, 2) + .1078 * x + 5.84;
	}
	function b3Nobounce(tension) {
		return tension <= 18 ? b3Friction1(tension) : tension > 18 && tension <= 44 ? b3Friction2(tension) : b3Friction3(tension);
	}
	let b = normalize(bounciness / 1.7, 0, 20);
	b = projectNormal(b, 0, .8);
	const bouncyTension = projectNormal(normalize(speed / 1.7, 0, 20), .5, 200), bouncyFriction = quadraticOutInterpolation(b, b3Nobounce(bouncyTension), .01);
	return {
		stiffness: stiffnessFromOrigamiValue(bouncyTension),
		damping: dampingFromOrigamiValue(bouncyFriction)
	};
}
var SpringConfig;
var init_SpringConfig = __esmMin((() => {
	SpringConfig = {
		fromOrigamiTensionAndFriction,
		fromBouncinessAndSpeed
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/animations/SpringAnimation.mjs
var SpringAnimation;
var init_SpringAnimation = __esmMin((() => {
	init_Animation();
	init_SpringConfig();
	init_esm$1();
	init_NativeAnimatedHelper();
	init_defineProperty();
	SpringAnimation = class SpringAnimation extends Animation {
		constructor(config) {
			var _config$overshootClam, _config$restDisplacem, _config$restSpeedThre, _config$velocity, _config$velocity2, _config$delay, _config$isInteraction, _config$iterations, _config$stiffness, _config$damping, _config$mass;
			var _super = (..._args) => (super(..._args), _defineProperty(this, "_overshootClamping", void 0), _defineProperty(this, "_restDisplacementThreshold", void 0), _defineProperty(this, "_restSpeedThreshold", void 0), _defineProperty(this, "_lastVelocity", void 0), _defineProperty(this, "_startPosition", void 0), _defineProperty(this, "_lastPosition", void 0), _defineProperty(this, "_fromValue", void 0), _defineProperty(this, "_toValue", void 0), _defineProperty(this, "_stiffness", void 0), _defineProperty(this, "_damping", void 0), _defineProperty(this, "_mass", void 0), _defineProperty(this, "_initialVelocity", void 0), _defineProperty(this, "_delay", void 0), _defineProperty(this, "_timeout", void 0), _defineProperty(this, "_startTime", void 0), _defineProperty(this, "_lastTime", void 0), _defineProperty(this, "_frameTime", void 0), _defineProperty(this, "_onUpdate", void 0), _defineProperty(this, "_animationFrame", void 0), _defineProperty(this, "_useNativeDriver", void 0), _defineProperty(this, "_platformConfig", void 0), this);
			if (_super(), this._overshootClamping = (_config$overshootClam = config.overshootClamping) !== null && _config$overshootClam !== void 0 ? _config$overshootClam : !1, this._restDisplacementThreshold = (_config$restDisplacem = config.restDisplacementThreshold) !== null && _config$restDisplacem !== void 0 ? _config$restDisplacem : .001, this._restSpeedThreshold = (_config$restSpeedThre = config.restSpeedThreshold) !== null && _config$restSpeedThre !== void 0 ? _config$restSpeedThre : .001, this._initialVelocity = (_config$velocity = config.velocity) !== null && _config$velocity !== void 0 ? _config$velocity : 0, this._lastVelocity = (_config$velocity2 = config.velocity) !== null && _config$velocity2 !== void 0 ? _config$velocity2 : 0, this._toValue = config.toValue, this._delay = (_config$delay = config.delay) !== null && _config$delay !== void 0 ? _config$delay : 0, this._useNativeDriver = shouldUseNativeDriver(config), this._platformConfig = config.platformConfig, this.__isInteraction = (_config$isInteraction = config.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !this._useNativeDriver, this.__iterations = (_config$iterations = config.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1, config.stiffness !== void 0 || config.damping !== void 0 || config.mass !== void 0) invariant(config.bounciness === void 0 && config.speed === void 0 && config.tension === void 0 && config.friction === void 0, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one"), this._stiffness = (_config$stiffness = config.stiffness) !== null && _config$stiffness !== void 0 ? _config$stiffness : 100, this._damping = (_config$damping = config.damping) !== null && _config$damping !== void 0 ? _config$damping : 10, this._mass = (_config$mass = config.mass) !== null && _config$mass !== void 0 ? _config$mass : 1;
			else if (config.bounciness !== void 0 || config.speed !== void 0) {
				var _config$bounciness, _config$speed;
				invariant(config.tension === void 0 && config.friction === void 0 && config.stiffness === void 0 && config.damping === void 0 && config.mass === void 0, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
				const springConfig = SpringConfig.fromBouncinessAndSpeed((_config$bounciness = config.bounciness) !== null && _config$bounciness !== void 0 ? _config$bounciness : 8, (_config$speed = config.speed) !== null && _config$speed !== void 0 ? _config$speed : 12);
				this._stiffness = springConfig.stiffness, this._damping = springConfig.damping, this._mass = 1;
			} else {
				var _config$tension, _config$friction;
				const springConfig = SpringConfig.fromOrigamiTensionAndFriction((_config$tension = config.tension) !== null && _config$tension !== void 0 ? _config$tension : 40, (_config$friction = config.friction) !== null && _config$friction !== void 0 ? _config$friction : 7);
				this._stiffness = springConfig.stiffness, this._damping = springConfig.damping, this._mass = 1;
			}
			invariant(this._stiffness > 0, "Stiffness value must be greater than 0"), invariant(this._damping > 0, "Damping value must be greater than 0"), invariant(this._mass > 0, "Mass value must be greater than 0");
		}
		__getNativeAnimationConfig() {
			var _this$_initialVelocit;
			return {
				type: "spring",
				overshootClamping: this._overshootClamping,
				restDisplacementThreshold: this._restDisplacementThreshold,
				restSpeedThreshold: this._restSpeedThreshold,
				stiffness: this._stiffness,
				damping: this._damping,
				mass: this._mass,
				initialVelocity: (_this$_initialVelocit = this._initialVelocity) !== null && _this$_initialVelocit !== void 0 ? _this$_initialVelocit : this._lastVelocity,
				toValue: this._toValue,
				iterations: this.__iterations,
				platformConfig: this._platformConfig
			};
		}
		start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
			if (this.__active = !0, this._startPosition = fromValue, this._lastPosition = this._startPosition, this._onUpdate = onUpdate, this.__onEnd = onEnd, this._lastTime = Date.now(), this._frameTime = 0, previousAnimation instanceof SpringAnimation) {
				const internalState = previousAnimation.getInternalState();
				this._lastPosition = internalState.lastPosition, this._lastVelocity = internalState.lastVelocity, this._initialVelocity = this._lastVelocity, this._lastTime = internalState.lastTime;
			}
			const start = () => {
				this._useNativeDriver ? this.__startNativeAnimation(animatedValue) : this.onUpdate();
			};
			this._delay ? this._timeout = setTimeout(start, this._delay) : start();
		}
		getInternalState() {
			return {
				lastPosition: this._lastPosition,
				lastVelocity: this._lastVelocity,
				lastTime: this._lastTime
			};
		}
		/**
		* This spring model is based off of a damped harmonic oscillator
		* (https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator).
		*
		* We use the closed form of the second order differential equation:
		*
		* x'' + (2ζ⍵_0)x' + ⍵^2x = 0
		*
		* where
		*    ⍵_0 = √(k / m) (undamped angular frequency of the oscillator),
		*    ζ = c / 2√mk (damping ratio),
		*    c = damping constant
		*    k = stiffness
		*    m = mass
		*
		* The derivation of the closed form is described in detail here:
		* http://planetmath.org/sites/default/files/texpdf/39745.pdf
		*
		* This algorithm happens to match the algorithm used by CASpringAnimation,
		* a QuartzCore (iOS) API that creates spring animations.
		*/
		onUpdate() {
			let now = Date.now();
			now > this._lastTime + 64 && (now = this._lastTime + 64);
			const deltaTime = (now - this._lastTime) / 1e3;
			this._frameTime += deltaTime;
			const c = this._damping, m = this._mass, k = this._stiffness, v0 = -this._initialVelocity, zeta = c / (2 * Math.sqrt(k * m)), omega0 = Math.sqrt(k / m), omega1 = omega0 * Math.sqrt(1 - zeta * zeta), x0 = this._toValue - this._startPosition;
			let position = 0, velocity = 0;
			const t = this._frameTime;
			if (zeta < 1) {
				const envelope = Math.exp(-zeta * omega0 * t);
				position = this._toValue - envelope * ((v0 + zeta * omega0 * x0) / omega1 * Math.sin(omega1 * t) + x0 * Math.cos(omega1 * t)), velocity = zeta * omega0 * envelope * (Math.sin(omega1 * t) * (v0 + zeta * omega0 * x0) / omega1 + x0 * Math.cos(omega1 * t)) - envelope * (Math.cos(omega1 * t) * (v0 + zeta * omega0 * x0) - omega1 * x0 * Math.sin(omega1 * t));
			} else {
				const envelope = Math.exp(-omega0 * t);
				position = this._toValue - envelope * (x0 + (v0 + omega0 * x0) * t), velocity = envelope * (v0 * (t * omega0 - 1) + t * x0 * (omega0 * omega0));
			}
			if (this._lastTime = now, this._lastPosition = position, this._lastVelocity = velocity, this._onUpdate(position), !this.__active) return;
			let isOvershooting = !1;
			this._overshootClamping && this._stiffness !== 0 && (this._startPosition < this._toValue ? isOvershooting = position > this._toValue : isOvershooting = position < this._toValue);
			const isVelocity = Math.abs(velocity) <= this._restSpeedThreshold;
			let isDisplacement = !0;
			if (this._stiffness !== 0 && (isDisplacement = Math.abs(this._toValue - position) <= this._restDisplacementThreshold), isOvershooting || isVelocity && isDisplacement) {
				this._stiffness !== 0 && (this._lastPosition = this._toValue, this._lastVelocity = 0, this._onUpdate(this._toValue)), this.__debouncedOnEnd({ finished: !0 });
				return;
			}
			this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
		}
		stop() {
			super.stop(), this.__active = !1, clearTimeout(this._timeout), global.cancelAnimationFrame(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/bezier.mjs
function A(aA1, aA2) {
	return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
	return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
	return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
	return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
	return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, _aA, _aB, mX1, mX2) {
	let currentX, currentT, i = 0, aA = _aA, aB = _aB;
	do
		currentT = aA + (aB - aA) / 2, currentX = calcBezier(currentT, mX1, mX2) - aX, currentX > 0 ? aB = currentT : aA = currentT;
	while (Math.abs(currentX) > 1e-7 && ++i < 10);
	return currentT;
}
function newtonRaphsonIterate(aX, _aGuessT, mX1, mX2) {
	let aGuessT = _aGuessT;
	for (let i = 0; i < 4; ++i) {
		const currentSlope = getSlope(aGuessT, mX1, mX2);
		if (currentSlope === 0) return aGuessT;
		const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
		aGuessT -= currentX / currentSlope;
	}
	return aGuessT;
}
function bezier(mX1, mY1, mX2, mY2) {
	if (!(mX1 >= 0 && mX1 <= 1 && mX2 >= 0 && mX2 <= 1)) throw new Error("bezier x values must be in [0, 1] range");
	const sampleValues = float32ArraySupported ? new Float32Array(11) : new Array(11);
	if (mX1 !== mY1 || mX2 !== mY2) for (let i = 0; i < 11; ++i) sampleValues[i] = calcBezier(i * .1, mX1, mX2);
	function getTForX(aX) {
		let intervalStart = 0, currentSample = 1;
		const lastSample = 10;
		for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) intervalStart += .1;
		--currentSample;
		const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]), guessForT = intervalStart + dist * .1, initialSlope = getSlope(guessForT, mX1, mX2);
		return initialSlope >= .001 ? newtonRaphsonIterate(aX, guessForT, mX1, mX2) : initialSlope === 0 ? guessForT : binarySubdivide(aX, intervalStart, intervalStart + .1, mX1, mX2);
	}
	return function(x) {
		return mX1 === mY1 && mX2 === mY2 ? x : x === 0 ? 0 : x === 1 ? 1 : calcBezier(getTForX(x), mY1, mY2);
	};
}
var float32ArraySupported;
var init_bezier = __esmMin((() => {
	float32ArraySupported = typeof Float32Array == "function";
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/Easing.mjs
var ease, Easing, Easing_default;
var init_Easing = __esmMin((() => {
	init_bezier();
	Easing = class Easing {
		/**
		* A stepping function, returns 1 for any positive value of `n`.
		*/
		static step0(n) {
			return n > 0 ? 1 : 0;
		}
		/**
		* A stepping function, returns 1 if `n` is greater than or equal to 1.
		*/
		static step1(n) {
			return n >= 1 ? 1 : 0;
		}
		/**
		* A linear function, `f(t) = t`. Position correlates to elapsed time one to
		* one.
		*
		* http://cubic-bezier.com/#0,0,1,1
		*/
		static linear(t) {
			return t;
		}
		/**
		* A simple inertial interaction, similar to an object slowly accelerating to
		* speed.
		*
		* http://cubic-bezier.com/#.42,0,1,1
		*/
		static ease(t) {
			return ease || (ease = Easing.bezier(.42, 0, 1, 1)), ease(t);
		}
		/**
		* A quadratic function, `f(t) = t * t`. Position equals the square of elapsed
		* time.
		*
		* http://easings.net/#easeInQuad
		*/
		static quad(t) {
			return t * t;
		}
		/**
		* A cubic function, `f(t) = t * t * t`. Position equals the cube of elapsed
		* time.
		*
		* http://easings.net/#easeInCubic
		*/
		static cubic(t) {
			return t * t * t;
		}
		/**
		* A power function. Position is equal to the Nth power of elapsed time.
		*
		* n = 4: http://easings.net/#easeInQuart
		* n = 5: http://easings.net/#easeInQuint
		*/
		static poly(n) {
			return (t) => Math.pow(t, n);
		}
		/**
		* A sinusoidal function.
		*
		* http://easings.net/#easeInSine
		*/
		static sin(t) {
			return 1 - Math.cos(t * Math.PI / 2);
		}
		/**
		* A circular function.
		*
		* http://easings.net/#easeInCirc
		*/
		static circle(t) {
			return 1 - Math.sqrt(1 - t * t);
		}
		/**
		* An exponential function.
		*
		* http://easings.net/#easeInExpo
		*/
		static exp(t) {
			return Math.pow(2, 10 * (t - 1));
		}
		/**
		* A simple elastic interaction, similar to a spring oscillating back and
		* forth.
		*
		* Default bounciness is 1, which overshoots a little bit once. 0 bounciness
		* doesn't overshoot at all, and bounciness of N > 1 will overshoot about N
		* times.
		*
		* http://easings.net/#easeInElastic
		*/
		static elastic(bounciness = 1) {
			const p = bounciness * Math.PI;
			return (t) => 1 - Math.pow(Math.cos(t * Math.PI / 2), 3) * Math.cos(t * p);
		}
		/**
		* Use with `Animated.parallel()` to create a simple effect where the object
		* animates back slightly as the animation starts.
		*
		* Wolfram Plot:
		*
		* - http://tiny.cc/back_default (s = 1.70158, default)
		*/
		static back(s = 1.70158) {
			return (t) => t * t * ((s + 1) * t - s);
		}
		/**
		* Provides a simple bouncing effect.
		*
		* http://easings.net/#easeInBounce
		*/
		static bounce(t) {
			if (t < 1 / 2.75) return 7.5625 * t * t;
			if (t < 2 / 2.75) {
				const t22 = t - .5454545454545454;
				return 7.5625 * t22 * t22 + .75;
			}
			if (t < 2.5 / 2.75) {
				const t22 = t - .8181818181818182;
				return 7.5625 * t22 * t22 + .9375;
			}
			const t2 = t - 2.625 / 2.75;
			return 7.5625 * t2 * t2 + .984375;
		}
		/**
		* Provides a cubic bezier curve, equivalent to CSS Transitions'
		* `transition-timing-function`.
		*
		* A useful tool to visualize cubic bezier curves can be found at
		* http://cubic-bezier.com/
		*/
		static bezier(x1, y1, x2, y2) {
			return bezier(x1, y1, x2, y2);
		}
		/**
		* Runs an easing function forwards.
		*/
		static in(easing) {
			return easing;
		}
		/**
		* Runs an easing function backwards.
		*/
		static out(easing) {
			return (t) => 1 - easing(1 - t);
		}
		/**
		* Makes any easing function symmetrical. The easing function will run
		* forwards for half of the duration, then backwards for the rest of the
		* duration.
		*/
		static inOut(easing) {
			return (t) => t < .5 ? easing(t * 2) / 2 : 1 - easing((1 - t) * 2) / 2;
		}
	};
	Easing_default = Easing;
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/animations/TimingAnimation.mjs
function easeInOut() {
	return _easeInOut || (_easeInOut = Easing.inOut(Easing.ease)), _easeInOut;
}
var _easeInOut, TimingAnimation;
var init_TimingAnimation = __esmMin((() => {
	init_Easing();
	init_Animation();
	init_NativeAnimatedHelper();
	init_defineProperty();
	TimingAnimation = class extends Animation {
		constructor(config) {
			var _config$easing, _config$duration, _config$delay, _config$iterations, _config$isInteraction;
			var _super = (..._args) => (super(..._args), _defineProperty(this, "_startTime", void 0), _defineProperty(this, "_fromValue", void 0), _defineProperty(this, "_toValue", void 0), _defineProperty(this, "_duration", void 0), _defineProperty(this, "_delay", void 0), _defineProperty(this, "_easing", void 0), _defineProperty(this, "_onUpdate", void 0), _defineProperty(this, "_animationFrame", void 0), _defineProperty(this, "_timeout", void 0), _defineProperty(this, "_useNativeDriver", void 0), _defineProperty(this, "_platformConfig", void 0), this);
			_super(), this._toValue = config.toValue, this._easing = (_config$easing = config.easing) !== null && _config$easing !== void 0 ? _config$easing : easeInOut(), this._duration = (_config$duration = config.duration) !== null && _config$duration !== void 0 ? _config$duration : 500, this._delay = (_config$delay = config.delay) !== null && _config$delay !== void 0 ? _config$delay : 0, this.__iterations = (_config$iterations = config.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1, this._useNativeDriver = shouldUseNativeDriver(config), this._platformConfig = config.platformConfig, this.__isInteraction = (_config$isInteraction = config.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !this._useNativeDriver;
		}
		__getNativeAnimationConfig() {
			const frameDuration = 16.666666666666668, frames = [], numFrames = Math.round(this._duration / frameDuration);
			for (let frame = 0; frame < numFrames; frame++) frames.push(this._easing(frame / numFrames));
			return frames.push(this._easing(1)), {
				type: "frames",
				frames,
				toValue: this._toValue,
				iterations: this.__iterations,
				platformConfig: this._platformConfig
			};
		}
		start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
			this.__active = !0, this._fromValue = fromValue, this._onUpdate = onUpdate, this.__onEnd = onEnd;
			const start = () => {
				this._duration === 0 && !this._useNativeDriver ? (this._onUpdate(this._toValue), this.__debouncedOnEnd({ finished: !0 })) : (this._startTime = Date.now(), this._useNativeDriver ? this.__startNativeAnimation(animatedValue) : this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this)));
			};
			this._delay ? this._timeout = setTimeout(start, this._delay) : start();
		}
		onUpdate() {
			const now = Date.now();
			if (now >= this._startTime + this._duration) {
				this._duration === 0 ? this._onUpdate(this._toValue) : this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue)), this.__debouncedOnEnd({ finished: !0 });
				return;
			}
			this._onUpdate(this._fromValue + this._easing((now - this._startTime) / this._duration) * (this._toValue - this._fromValue)), this.__active && (this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this)));
		}
		stop() {
			super.stop(), this.__active = !1, clearTimeout(this._timeout), global.cancelAnimationFrame(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Utilities/useRefEffect.mjs
function useRefEffect(effect) {
	const cleanupRef = (0, react.useRef)(void 0);
	return (0, react.useCallback)((instance) => {
		cleanupRef.current && (cleanupRef.current(), cleanupRef.current = void 0), instance != null && (cleanupRef.current = effect(instance));
	}, [effect]);
}
var init_useRefEffect = __esmMin((() => {}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/useAnimatedProps.mjs
function useAnimatedProps(props) {
	const [, scheduleUpdate] = (0, react.useReducer)((count) => count + 1, 0), onUpdateRef = (0, react.useRef)(null), node = (0, react.useMemo)(() => new AnimatedProps(props, () => {
		var _onUpdateRef$current;
		return (_onUpdateRef$current = onUpdateRef.current) === null || _onUpdateRef$current === void 0 ? void 0 : _onUpdateRef$current.call(onUpdateRef);
	}), [props]);
	useAnimatedPropsLifecycle(node);
	const callbackRef = useRefEffect((0, react.useCallback)((instance) => {
		node.setNativeView(instance), onUpdateRef.current = () => {
			scheduleUpdate();
		};
		const target = getEventTarget(instance), events = [];
		for (const propName in props) {
			const propValue = props[propName];
			propValue instanceof AnimatedEvent && propValue.__isNative && (propValue.__attach(target, propName), events.push([propName, propValue]));
		}
		return () => {
			onUpdateRef.current = null;
			for (const [propName, propValue] of events) propValue.__detach(target, propName);
		};
	}, [props, node]));
	return [reduceAnimatedProps(node), callbackRef];
}
function reduceAnimatedProps(node) {
	return _objectSpread2(_objectSpread2({}, node.__getValue()), {}, { collapsable: !1 });
}
function useAnimatedPropsLifecycle(node) {
	const prevNodeRef = (0, react.useRef)(null), isUnmountingRef = (0, react.useRef)(!1);
	(0, react.useEffect)(() => {
		NativeAnimatedHelper.API.flushQueue();
	}), useLayoutEffectImpl(() => (isUnmountingRef.current = !1, () => {
		isUnmountingRef.current = !0;
	}), []), useLayoutEffectImpl(() => {
		if (node.__attach(), prevNodeRef.current != null) {
			const prevNode = prevNodeRef.current;
			prevNode.__restoreDefaultValues(), prevNode.__detach(), prevNodeRef.current = null;
		}
		return () => {
			isUnmountingRef.current ? node.__detach() : prevNodeRef.current = node;
		};
	}, [node]);
}
function getEventTarget(instance) {
	return typeof instance == "object" && typeof (instance === null || instance === void 0 ? void 0 : instance.getScrollableNode) == "function" ? instance.getScrollableNode() : instance;
}
var init_useAnimatedProps = __esmMin((() => {
	init_AnimatedProps();
	init_AnimatedEvent();
	init_useRefEffect();
	init_NativeAnimatedHelper();
	init_esm$1();
	init_objectSpread2();
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Utilities/useMergeRefs.mjs
function useMergeRefs(...refs) {
	return (0, react.useCallback)((current) => {
		for (const ref of refs) ref != null && (typeof ref == "function" ? ref(current) : ref.current = current);
	}, [...refs]);
}
var init_useMergeRefs = __esmMin((() => {}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/createAnimatedComponent.mjs
function createAnimatedComponent(Component) {
	return react.forwardRef((props, forwardedRef) => {
		const [reducedProps, callbackRef] = useAnimatedProps(props), ref = useMergeRefs(callbackRef, forwardedRef), { passthroughAnimatedPropExplicitValues, style } = reducedProps, _ref = passthroughAnimatedPropExplicitValues !== null && passthroughAnimatedPropExplicitValues !== void 0 ? passthroughAnimatedPropExplicitValues : {}, { style: passthroughStyle } = _ref, passthroughProps = _objectWithoutProperties(_ref, _excluded$22);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Component, _objectSpread2(_objectSpread2(_objectSpread2({}, reducedProps), passthroughProps), {}, {
			style: [style, passthroughStyle],
			ref
		}));
	});
}
var _excluded$22;
var init_createAnimatedComponent = __esmMin((() => {
	init_useAnimatedProps();
	init_useMergeRefs();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$22 = ["style"];
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/nodes/AnimatedColor.mjs
function processColor(color) {
	if (color == null) return null;
	if (isRgbaValue(color)) return color;
	let normalizedColor = normalizeColor$1(color);
	if (normalizedColor == null) return null;
	if (typeof normalizedColor == "object") {
		const processedColorObj = processColorObject(normalizedColor);
		if (processedColorObj != null) return processedColorObj;
	} else if (typeof normalizedColor == "number") return {
		r: (normalizedColor & 4278190080) >>> 24,
		g: (normalizedColor & 16711680) >>> 16,
		b: (normalizedColor & 65280) >>> 8,
		a: (normalizedColor & 255) / 255
	};
	return null;
}
function isRgbaValue(value) {
	return value && typeof value.r == "number" && typeof value.g == "number" && typeof value.b == "number" && typeof value.a == "number";
}
function isRgbaAnimatedValue(value) {
	return value && value.r instanceof AnimatedValue && value.g instanceof AnimatedValue && value.b instanceof AnimatedValue && value.a instanceof AnimatedValue;
}
var NativeAnimatedAPI, defaultColor$1, _uniqueId, processColorObject, AnimatedColor;
var init_AnimatedColor = __esmMin((() => {
	init_AnimatedValue();
	init_AnimatedWithChildren();
	init_esm$1();
	init_NativeAnimatedHelper();
	NativeAnimatedAPI = NativeAnimatedHelper.API, defaultColor$1 = {
		r: 0,
		g: 0,
		b: 0,
		a: 1
	};
	_uniqueId = 1;
	processColorObject = (color) => color;
	AnimatedColor = class extends AnimatedWithChildren {
		constructor(valueIn, config) {
			super(), this._listeners = {};
			let value = valueIn !== null && valueIn !== void 0 ? valueIn : defaultColor$1;
			if (isRgbaAnimatedValue(value)) {
				const rgbaAnimatedValue = value;
				this.r = rgbaAnimatedValue.r, this.g = rgbaAnimatedValue.g, this.b = rgbaAnimatedValue.b, this.a = rgbaAnimatedValue.a;
			} else {
				var _processColor;
				const processedColor = (_processColor = processColor(value)) !== null && _processColor !== void 0 ? _processColor : defaultColor$1;
				let initColor = defaultColor$1;
				isRgbaValue(processedColor) ? initColor = processedColor : this.nativeColor = processedColor, this.r = new AnimatedValue(initColor.r), this.g = new AnimatedValue(initColor.g), this.b = new AnimatedValue(initColor.b), this.a = new AnimatedValue(initColor.a);
			}
			(this.nativeColor || config && config.useNativeDriver) && this.__makeNative();
		}
		/**
		* Directly set the value. This will stop any animations running on the value
		* and update all the bound properties.
		*/
		setValue(value) {
			var _processColor2;
			let shouldUpdateNodeConfig = !1;
			if (this.__isNative) {
				const nativeTag = this.__getNativeTag();
				NativeAnimatedAPI.setWaitingForIdentifier(nativeTag.toString());
			}
			const processedColor = (_processColor2 = processColor(value)) !== null && _processColor2 !== void 0 ? _processColor2 : defaultColor$1;
			if (isRgbaValue(processedColor)) {
				const rgbaValue = processedColor;
				this.r.setValue(rgbaValue.r), this.g.setValue(rgbaValue.g), this.b.setValue(rgbaValue.b), this.a.setValue(rgbaValue.a), this.nativeColor != null && (this.nativeColor = null, shouldUpdateNodeConfig = !0);
			} else {
				const nativeColor = processedColor;
				this.nativeColor !== nativeColor && (this.nativeColor = nativeColor, shouldUpdateNodeConfig = !0);
			}
			if (this.__isNative) {
				const nativeTag = this.__getNativeTag();
				shouldUpdateNodeConfig && NativeAnimatedAPI.updateAnimatedNodeConfig(nativeTag, this.__getNativeConfig()), NativeAnimatedAPI.unsetWaitingForIdentifier(nativeTag.toString());
			}
		}
		/**
		* Sets an offset that is applied on top of whatever value is set, whether
		* via `setValue`, an animation, or `Animated.event`. Useful for compensating
		* things like the start of a pan gesture.
		*/
		setOffset(offset) {
			this.r.setOffset(offset.r), this.g.setOffset(offset.g), this.b.setOffset(offset.b), this.a.setOffset(offset.a);
		}
		/**
		* Merges the offset value into the base value and resets the offset to zero.
		* The final output of the value is unchanged.
		*/
		flattenOffset() {
			this.r.flattenOffset(), this.g.flattenOffset(), this.b.flattenOffset(), this.a.flattenOffset();
		}
		/**
		* Sets the offset value to the base value, and resets the base value to
		* zero. The final output of the value is unchanged.
		*/
		extractOffset() {
			this.r.extractOffset(), this.g.extractOffset(), this.b.extractOffset(), this.a.extractOffset();
		}
		/**
		* Adds an asynchronous listener to the value so you can observe updates from
		* animations.  This is useful because there is no way to synchronously read
		* the value because it might be driven natively.
		*
		* Returns a string that serves as an identifier for the listener.
		*/
		addListener(callback) {
			const id = String(_uniqueId++), jointCallback = ({ value }) => {
				callback(this.__getValue());
			};
			return this._listeners[id] = {
				r: this.r.addListener(jointCallback),
				g: this.g.addListener(jointCallback),
				b: this.b.addListener(jointCallback),
				a: this.a.addListener(jointCallback)
			}, id;
		}
		removeListener(id) {
			this._listeners[id] && (this.r.removeListener(this._listeners[id].r), this.g.removeListener(this._listeners[id].g), this.b.removeListener(this._listeners[id].b), this.a.removeListener(this._listeners[id].a), delete this._listeners[id]);
		}
		removeAllListeners() {
			this.r.removeAllListeners(), this.g.removeAllListeners(), this.b.removeAllListeners(), this.a.removeAllListeners(), this._listeners = {};
		}
		stopAnimation(callback) {
			this.r.stopAnimation(), this.g.stopAnimation(), this.b.stopAnimation(), this.a.stopAnimation(), callback && callback(this.__getValue());
		}
		resetAnimation(callback) {
			this.r.resetAnimation(), this.g.resetAnimation(), this.b.resetAnimation(), this.a.resetAnimation(), callback && callback(this.__getValue());
		}
		interpolate(config) {
			throw new Error("Directly calling interpolate on an AnimatedColor is not supported. Call interpolate on the AnimatedColor.r/g/b/a values instead.");
		}
		__getValue() {
			return this.nativeColor != null ? this.nativeColor : {
				r: this.r.__getValue(),
				g: this.g.__getValue(),
				b: this.b.__getValue(),
				a: this.a.__getValue()
			};
		}
		__attach() {
			this.r.__addChild(this), this.g.__addChild(this), this.b.__addChild(this), this.a.__addChild(this), super.__attach();
		}
		__detach() {
			this.r.__removeChild(this), this.g.__removeChild(this), this.b.__removeChild(this), this.a.__removeChild(this), super.__detach();
		}
		__makeNative(platformConfig) {
			this.r.__makeNative(platformConfig), this.g.__makeNative(platformConfig), this.b.__makeNative(platformConfig), this.a.__makeNative(platformConfig), super.__makeNative(platformConfig);
		}
		__getNativeConfig() {
			return {
				type: "color",
				r: this.r.__getNativeTag(),
				g: this.g.__getNativeTag(),
				b: this.b.__getNativeTag(),
				a: this.a.__getNativeTag(),
				nativeColor: this.nativeColor
			};
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/AnimatedImplementation.mjs
function forkEvent(event2, listener) {
	return event2 ? event2 instanceof AnimatedEvent ? (event2.__addListener(listener), event2) : (...args) => {
		typeof event2 == "function" && event2(...args), listener(...args);
	} : listener;
}
function unforkEvent(event2, listener) {
	event2 && event2 instanceof AnimatedEvent && event2.__removeListener(listener);
}
var add, subtract, divide, multiply, modulo, diffClamp, _combineCallbacks, maybeVectorAnim, spring$1, timing$1, decay$1, sequence$1, parallel$1, delay$1, stagger$1, loop$1, event, AnimatedImplementationExports;
var init_AnimatedImplementation = __esmMin((() => {
	init_AnimatedEvent();
	init_AnimatedAddition();
	init_AnimatedDiffClamp();
	init_AnimatedDivision();
	init_AnimatedInterpolation();
	init_AnimatedModulo();
	init_AnimatedMultiplication();
	init_AnimatedNode();
	init_AnimatedProps();
	init_AnimatedSubtraction();
	init_AnimatedTracking();
	init_AnimatedValue();
	init_AnimatedValueXY();
	init_DecayAnimation();
	init_SpringAnimation();
	init_TimingAnimation();
	init_createAnimatedComponent();
	init_Animation();
	init_AnimatedColor();
	init_objectSpread2();
	add = function(a, b) {
		return new AnimatedAddition(a, b);
	}, subtract = function(a, b) {
		return new AnimatedSubtraction(a, b);
	}, divide = function(a, b) {
		return new AnimatedDivision(a, b);
	}, multiply = function(a, b) {
		return new AnimatedMultiplication(a, b);
	}, modulo = function(a, modulus) {
		return new AnimatedModulo(a, modulus);
	}, diffClamp = function(a, min, max) {
		return new AnimatedDiffClamp(a, min, max);
	}, _combineCallbacks = function(callback, config) {
		return callback && config.onComplete ? (...args) => {
			config.onComplete && config.onComplete(...args), callback && callback(...args);
		} : callback || config.onComplete;
	}, maybeVectorAnim = function(value, config, anim) {
		if (value instanceof AnimatedValueXY) {
			const configX = _objectSpread2({}, config), configY = _objectSpread2({}, config);
			for (const key in config) {
				const { x, y } = config[key];
				x !== void 0 && y !== void 0 && (configX[key] = x, configY[key] = y);
			}
			return parallel$1([anim(value.x, configX), anim(value.y, configY)], { stopTogether: !1 });
		} else if (value instanceof AnimatedColor) {
			const configR = _objectSpread2({}, config), configG = _objectSpread2({}, config), configB = _objectSpread2({}, config), configA = _objectSpread2({}, config);
			for (const key in config) {
				const { r, g, b, a } = config[key];
				r !== void 0 && g !== void 0 && b !== void 0 && a !== void 0 && (configR[key] = r, configG[key] = g, configB[key] = b, configA[key] = a);
			}
			return parallel$1([
				anim(value.r, configR),
				anim(value.g, configG),
				anim(value.b, configB),
				anim(value.a, configA)
			], { stopTogether: !1 });
		}
		return null;
	}, spring$1 = function(value, config) {
		const start = function(animatedValue, configuration, callback) {
			callback = _combineCallbacks(callback, configuration);
			const singleValue = animatedValue, singleConfig = configuration;
			singleValue.stopTracking(), configuration.toValue instanceof AnimatedNode ? singleValue.track(new AnimatedTracking(singleValue, configuration.toValue, SpringAnimation, singleConfig, callback)) : singleValue.animate(new SpringAnimation(singleConfig), callback);
		};
		return maybeVectorAnim(value, config, spring$1) || {
			start: function(callback) {
				start(value, config, callback);
			},
			stop: function() {
				value.stopAnimation();
			},
			reset: function() {
				value.resetAnimation();
			},
			_startNativeLoop: function(iterations) {
				start(value, _objectSpread2(_objectSpread2({}, config), {}, { iterations }));
			},
			_isUsingNativeDriver: function() {
				return config.useNativeDriver || !1;
			}
		};
	}, timing$1 = function(value, config) {
		const start = function(animatedValue, configuration, callback) {
			callback = _combineCallbacks(callback, configuration);
			const singleValue = animatedValue, singleConfig = configuration;
			singleValue.stopTracking(), configuration.toValue instanceof AnimatedNode ? singleValue.track(new AnimatedTracking(singleValue, configuration.toValue, TimingAnimation, singleConfig, callback)) : singleValue.animate(new TimingAnimation(singleConfig), callback);
		};
		return maybeVectorAnim(value, config, timing$1) || {
			start: function(callback) {
				start(value, config, callback);
			},
			stop: function() {
				value.stopAnimation();
			},
			reset: function() {
				value.resetAnimation();
			},
			_startNativeLoop: function(iterations) {
				start(value, _objectSpread2(_objectSpread2({}, config), {}, { iterations }));
			},
			_isUsingNativeDriver: function() {
				return config.useNativeDriver || !1;
			}
		};
	}, decay$1 = function(value, config) {
		const start = function(animatedValue, configuration, callback) {
			callback = _combineCallbacks(callback, configuration);
			const singleValue = animatedValue, singleConfig = configuration;
			singleValue.stopTracking(), singleValue.animate(new DecayAnimation(singleConfig), callback);
		};
		return maybeVectorAnim(value, config, decay$1) || {
			start: function(callback) {
				start(value, config, callback);
			},
			stop: function() {
				value.stopAnimation();
			},
			reset: function() {
				value.resetAnimation();
			},
			_startNativeLoop: function(iterations) {
				start(value, _objectSpread2(_objectSpread2({}, config), {}, { iterations }));
			},
			_isUsingNativeDriver: function() {
				return config.useNativeDriver || !1;
			}
		};
	}, sequence$1 = function(animations) {
		let current = 0;
		return {
			start: function(callback) {
				const onComplete = function(result) {
					if (!result.finished) {
						callback && callback(result);
						return;
					}
					if (current++, current === animations.length) {
						callback && callback(result);
						return;
					}
					animations[current].start(onComplete);
				};
				animations.length === 0 ? callback && callback({ finished: !0 }) : animations[current].start(onComplete);
			},
			stop: function() {
				current < animations.length && animations[current].stop();
			},
			reset: function() {
				animations.forEach((animation, idx) => {
					idx <= current && animation.reset();
				}), current = 0;
			},
			_startNativeLoop: function() {
				throw new Error("Loops run using the native driver cannot contain Animated.sequence animations");
			},
			_isUsingNativeDriver: function() {
				return !1;
			}
		};
	}, parallel$1 = function(animations, config) {
		let doneCount = 0;
		const hasEnded = {}, stopTogether = !(config && config.stopTogether === !1), result = {
			start: function(callback) {
				if (doneCount === animations.length) {
					callback && callback({ finished: !0 });
					return;
				}
				animations.forEach((animation, idx) => {
					const cb = function(endResult) {
						if (hasEnded[idx] = !0, doneCount++, doneCount === animations.length) {
							doneCount = 0, callback && callback(endResult);
							return;
						}
						!endResult.finished && stopTogether && result.stop();
					};
					animation ? animation.start(cb) : cb({ finished: !0 });
				});
			},
			stop: function() {
				animations.forEach((animation, idx) => {
					!hasEnded[idx] && animation.stop(), hasEnded[idx] = !0;
				});
			},
			reset: function() {
				animations.forEach((animation, idx) => {
					animation.reset(), hasEnded[idx] = !1, doneCount = 0;
				});
			},
			_startNativeLoop: function() {
				throw new Error("Loops run using the native driver cannot contain Animated.parallel animations");
			},
			_isUsingNativeDriver: function() {
				return !1;
			}
		};
		return result;
	}, delay$1 = function(time) {
		return timing$1(new AnimatedValue(0), {
			toValue: 0,
			delay: time,
			duration: 0,
			useNativeDriver: !1
		});
	}, stagger$1 = function(time, animations) {
		return parallel$1(animations.map((animation, i) => sequence$1([delay$1(time * i), animation])));
	}, loop$1 = function(animation, { iterations = -1, resetBeforeIteration = !0 } = {}) {
		let isFinished = !1, iterationsSoFar = 0;
		return {
			start: function(callback) {
				const restart = function(result = { finished: !0 }) {
					isFinished || iterationsSoFar === iterations || result.finished === !1 ? callback && callback(result) : (iterationsSoFar++, resetBeforeIteration && animation.reset(), animation.start(restart));
				};
				!animation || iterations === 0 ? callback && callback({ finished: !0 }) : animation._isUsingNativeDriver() ? animation._startNativeLoop(iterations) : restart();
			},
			stop: function() {
				isFinished = !0, animation.stop();
			},
			reset: function() {
				iterationsSoFar = 0, isFinished = !1, animation.reset();
			},
			_startNativeLoop: function() {
				throw new Error("Loops run using the native driver cannot contain Animated.loop animations");
			},
			_isUsingNativeDriver: function() {
				return animation._isUsingNativeDriver();
			}
		};
	};
	event = function(argMapping, config) {
		const animatedEvent = new AnimatedEvent(argMapping, config);
		return animatedEvent.__isNative ? animatedEvent : animatedEvent.__getHandler();
	}, AnimatedImplementationExports = {
		Value: AnimatedValue,
		ValueXY: AnimatedValueXY,
		Color: AnimatedColor,
		Interpolation: AnimatedInterpolation,
		Node: AnimatedNode,
		decay: decay$1,
		timing: timing$1,
		spring: spring$1,
		add,
		subtract,
		divide,
		multiply,
		modulo,
		diffClamp,
		delay: delay$1,
		sequence: sequence$1,
		parallel: parallel$1,
		stagger: stagger$1,
		loop: loop$1,
		event,
		createAnimatedComponent,
		attachNativeEvent,
		forkEvent,
		unforkEvent,
		Event: AnimatedEvent
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/AnimatedMock.mjs
function mockAnimationStart(start) {
	return (callback) => {
		start(callback == null ? callback : (...args) => {
			if (inAnimationCallback) {
				console.warn("Ignoring recursive animation callback when running mock animations");
				return;
			}
			inAnimationCallback = !0;
			try {
				callback(...args);
			} finally {
				inAnimationCallback = !1;
			}
		});
	};
}
var inAnimationCallback, emptyAnimation, mockCompositeAnimation, spring, timing, decay, sequence, parallel, delay, stagger, loop, AnimatedMockExports;
var init_AnimatedMock = __esmMin((() => {
	init_AnimatedEvent();
	init_AnimatedImplementation();
	init_AnimatedInterpolation();
	init_AnimatedNode();
	init_AnimatedValue();
	init_AnimatedValueXY();
	init_createAnimatedComponent();
	init_AnimatedColor();
	init_objectSpread2();
	inAnimationCallback = !1;
	emptyAnimation = {
		start: () => {},
		stop: () => {},
		reset: () => {},
		_startNativeLoop: () => {},
		_isUsingNativeDriver: () => !1
	}, mockCompositeAnimation = (animations) => _objectSpread2(_objectSpread2({}, emptyAnimation), {}, { start: mockAnimationStart((callback) => {
		animations.forEach((animation) => animation.start()), callback === null || callback === void 0 || callback({ finished: !0 });
	}) }), spring = function(value, config) {
		const anyValue = value;
		return _objectSpread2(_objectSpread2({}, emptyAnimation), {}, { start: mockAnimationStart((callback) => {
			anyValue.setValue(config.toValue), callback === null || callback === void 0 || callback({ finished: !0 });
		}) });
	}, timing = function(value, config) {
		const anyValue = value;
		return _objectSpread2(_objectSpread2({}, emptyAnimation), {}, { start: mockAnimationStart((callback) => {
			anyValue.setValue(config.toValue), callback === null || callback === void 0 || callback({ finished: !0 });
		}) });
	}, decay = function(value, config) {
		return emptyAnimation;
	}, sequence = function(animations) {
		return mockCompositeAnimation(animations);
	}, parallel = function(animations, config) {
		return mockCompositeAnimation(animations);
	}, delay = function(time) {
		return emptyAnimation;
	}, stagger = function(time, animations) {
		return mockCompositeAnimation(animations);
	}, loop = function(animation, { iterations = -1 } = {}) {
		return emptyAnimation;
	}, AnimatedMockExports = {
		Value: AnimatedValue,
		ValueXY: AnimatedValueXY,
		Color: AnimatedColor,
		Interpolation: AnimatedInterpolation,
		Node: AnimatedNode,
		decay,
		timing,
		spring,
		add: AnimatedImplementationExports.add,
		subtract: AnimatedImplementationExports.subtract,
		divide: AnimatedImplementationExports.divide,
		multiply: AnimatedImplementationExports.multiply,
		modulo: AnimatedImplementationExports.modulo,
		diffClamp: AnimatedImplementationExports.diffClamp,
		delay,
		sequence,
		parallel,
		stagger,
		loop,
		event: AnimatedImplementationExports.event,
		createAnimatedComponent,
		attachNativeEvent,
		forkEvent: AnimatedImplementationExports.forkEvent,
		unforkEvent: AnimatedImplementationExports.unforkEvent,
		Event: AnimatedEvent
	};
}));
//#endregion
//#region ../../../node_modules/memoize-one/dist/memoize-one.esm.js
function isEqual(first, second) {
	if (first === second) return true;
	if (safeIsNaN(first) && safeIsNaN(second)) return true;
	return false;
}
function areInputsEqual(newInputs, lastInputs) {
	if (newInputs.length !== lastInputs.length) return false;
	for (var i = 0; i < newInputs.length; i++) if (!isEqual(newInputs[i], lastInputs[i])) return false;
	return true;
}
function memoizeOne(resultFn, isEqual) {
	if (isEqual === void 0) isEqual = areInputsEqual;
	var cache = null;
	function memoized() {
		var newArgs = [];
		for (var _i = 0; _i < arguments.length; _i++) newArgs[_i] = arguments[_i];
		if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) return cache.lastResult;
		var lastResult = resultFn.apply(this, newArgs);
		cache = {
			lastResult,
			lastArgs: newArgs,
			lastThis: this
		};
		return lastResult;
	}
	memoized.clear = function clear() {
		cache = null;
	};
	return memoized;
}
var safeIsNaN;
var init_memoize_one_esm = __esmMin((() => {
	safeIsNaN = Number.isNaN || function ponyfill(value) {
		return typeof value === "number" && value !== value;
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/deepDiffer/index.mjs
var deepDiffer;
var init_deepDiffer = __esmMin((() => {
	deepDiffer = function(one, two, maxDepth = -1) {
		if (maxDepth === 0) return !0;
		if (one === two || typeof one == "function" && typeof two == "function") return !1;
		if (typeof one != "object" || one === null) return one !== two;
		if (typeof two != "object" || two === null || one.constructor !== two.constructor) return !0;
		if (Array.isArray(one)) {
			const len = one.length;
			if (two.length !== len) return !0;
			for (let ii = 0; ii < len; ii++) if (deepDiffer(one[ii], two[ii], maxDepth - 1)) return !0;
		} else {
			for (const key in one) if (deepDiffer(one[key], two[key], maxDepth - 1)) return !0;
			for (const twoKey in two) if (one[twoKey] === void 0 && two[twoKey] !== void 0) return !0;
		}
		return !1;
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/Dimensions/index.mjs
function update() {
	if (!canUseDOM$1) return;
	const win = window, docEl = win.document.documentElement;
	dimensions.window = {
		fontScale: 1,
		height: docEl.clientHeight,
		scale: win.devicePixelRatio || 1,
		width: docEl.clientWidth
	}, dimensions.screen = {
		fontScale: 1,
		height: win.screen.height,
		scale: win.devicePixelRatio || 1,
		width: win.screen.width
	};
}
function handleResize() {
	update(), Array.isArray(listeners$1.change) && listeners$1.change.forEach((handler) => handler(dimensions));
}
var dimensions, listeners$1, shouldInit, Dimensions;
var init_Dimensions = __esmMin((() => {
	init_esm$1();
	dimensions = {
		window: {
			fontScale: 1,
			height: 0,
			scale: 1,
			width: 0
		},
		screen: {
			fontScale: 1,
			height: 0,
			scale: 1,
			width: 0
		}
	}, listeners$1 = {};
	shouldInit = canUseDOM$1;
	Dimensions = class {
		static get(dimension) {
			return shouldInit && (shouldInit = !1, update()), invariant(dimensions[dimension], `No dimension set for key ${dimension}`), dimensions[dimension];
		}
		static set(initialDimensions) {
			initialDimensions && (canUseDOM$1 ? invariant(!1, "Dimensions cannot be set in the browser") : (initialDimensions.screen != null && (dimensions.screen = initialDimensions.screen), initialDimensions.window != null && (dimensions.window = initialDimensions.window)));
		}
		static addEventListener(type, handler) {
			return listeners$1[type] = listeners$1[type] || [], listeners$1[type].push(handler), { remove: () => {
				this.removeEventListener(type, handler);
			} };
		}
		static removeEventListener(type, handler) {
			Array.isArray(listeners$1[type]) && (listeners$1[type] = listeners$1[type].filter((_handler) => _handler !== handler));
		}
	};
	canUseDOM$1 && window.addEventListener("resize", handleResize, !1);
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/View/index.mjs
var _excluded$21, pickProps$3, View$2, styles$12;
var init_View = __esmMin((() => {
	init_esm$1();
	init_createElement();
	init_objectWithoutProperties();
	_excluded$21 = [
		"hrefAttrs",
		"onLayout",
		"onMoveShouldSetResponder",
		"onMoveShouldSetResponderCapture",
		"onResponderEnd",
		"onResponderGrant",
		"onResponderMove",
		"onResponderReject",
		"onResponderRelease",
		"onResponderStart",
		"onResponderTerminate",
		"onResponderTerminationRequest",
		"onScrollShouldSetResponder",
		"onScrollShouldSetResponderCapture",
		"onSelectionChangeShouldSetResponder",
		"onSelectionChangeShouldSetResponderCapture",
		"onStartShouldSetResponder",
		"onStartShouldSetResponderCapture"
	];
	pickProps$3 = (props) => pick(props, forwardPropsListView), View$2 = react.forwardRef((props, forwardedRef) => {
		const { hrefAttrs, onLayout, onMoveShouldSetResponder, onMoveShouldSetResponderCapture, onResponderEnd, onResponderGrant, onResponderMove, onResponderReject, onResponderRelease, onResponderStart, onResponderTerminate, onResponderTerminationRequest, onScrollShouldSetResponder, onScrollShouldSetResponderCapture, onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder, onStartShouldSetResponderCapture } = props, rest = _objectWithoutProperties(props, _excluded$21);
		const hasTextAncestor = react.useContext(TextAncestorContext), hostRef = react.useRef(null), { direction: contextDirection } = useLocaleContext();
		useElementLayout(hostRef, onLayout), useResponderEvents(hostRef, {
			onMoveShouldSetResponder,
			onMoveShouldSetResponderCapture,
			onResponderEnd,
			onResponderGrant,
			onResponderMove,
			onResponderReject,
			onResponderRelease,
			onResponderStart,
			onResponderTerminate,
			onResponderTerminationRequest,
			onScrollShouldSetResponder,
			onScrollShouldSetResponderCapture,
			onSelectionChangeShouldSetResponder,
			onSelectionChangeShouldSetResponderCapture,
			onStartShouldSetResponder,
			onStartShouldSetResponderCapture
		});
		let component = "div";
		const langDirection = props.lang != null ? getLocaleDirection(props.lang) : null, componentDirection = props.dir || langDirection, writingDirection = componentDirection || contextDirection, supportedProps = pickProps$3(rest);
		if (supportedProps.dir = componentDirection, supportedProps.style = [
			styles$12.view,
			hasTextAncestor && styles$12.inline,
			props.style
		], props.href != null && (component = "a", hrefAttrs != null)) {
			const { download, rel, target } = hrefAttrs;
			download != null && (supportedProps.download = download), rel != null && (supportedProps.rel = rel), typeof target == "string" && (supportedProps.target = target.charAt(0) !== "_" ? "_" + target : target);
		}
		return supportedProps.ref = useMergeRefs$1(hostRef, usePlatformMethods(supportedProps), forwardedRef), useCreateElement(component, supportedProps, { writingDirection });
	});
	View$2.displayName = "View";
	styles$12 = {
		view: {
			alignItems: "stretch",
			boxSizing: "border-box",
			display: "flex",
			flexBasis: "auto",
			flexDirection: "column",
			flexShrink: 0
		},
		inline: { display: "inline-flex" }
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/ScrollView/ScrollViewBase.mjs
function normalizeScrollEvent(e) {
	return {
		nativeEvent: {
			contentOffset: {
				get x() {
					return e.target.scrollLeft;
				},
				get y() {
					return e.target.scrollTop;
				}
			},
			contentSize: {
				get height() {
					return e.target.scrollHeight;
				},
				get width() {
					return e.target.scrollWidth;
				}
			},
			layoutMeasurement: {
				get height() {
					return e.target.offsetHeight;
				},
				get width() {
					return e.target.offsetWidth;
				}
			}
		},
		timeStamp: Date.now()
	};
}
function shouldEmitScrollEvent(lastTick, eventThrottle) {
	const timeSinceLastTick = Date.now() - lastTick;
	return eventThrottle > 0 && timeSinceLastTick >= eventThrottle;
}
var _excluded$20, ScrollViewBase, styles$11;
var init_ScrollViewBase = __esmMin((() => {
	init_esm$1();
	init_View();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$20 = [
		"onScroll",
		"onTouchMove",
		"onWheel",
		"scrollEnabled",
		"scrollEventThrottle",
		"showsHorizontalScrollIndicator",
		"showsVerticalScrollIndicator",
		"style",
		"onMomentumScrollBegin",
		"onMomentumScrollEnd",
		"onScrollBeginDrag",
		"onScrollEndDrag"
	];
	ScrollViewBase = react.forwardRef((props, forwardedRef) => {
		const { onScroll, onTouchMove, onWheel, scrollEnabled = !0, scrollEventThrottle = 0, showsHorizontalScrollIndicator, showsVerticalScrollIndicator, style, onMomentumScrollBegin, onMomentumScrollEnd, onScrollBeginDrag, onScrollEndDrag } = props, rest = _objectWithoutProperties(props, _excluded$20), scrollState = react.useRef({
			isScrolling: !1,
			scrollLastTick: 0
		}), scrollTimeout = react.useRef(null), scrollRef = react.useRef(null);
		function createPreventableScrollHandler(handler) {
			return (e) => {
				scrollEnabled && handler && handler(e);
			};
		}
		function handleScroll(e) {
			e.stopPropagation(), e.target === scrollRef.current && (e.persist(), scrollTimeout.current != null && clearTimeout(scrollTimeout.current), scrollTimeout.current = setTimeout(() => {
				handleScrollEnd(e);
			}, 100), scrollState.current.isScrolling ? shouldEmitScrollEvent(scrollState.current.scrollLastTick, scrollEventThrottle) && handleScrollTick(e) : handleScrollStart(e));
		}
		function handleScrollStart(e) {
			scrollState.current.isScrolling = !0, handleScrollTick(e);
		}
		function handleScrollTick(e) {
			scrollState.current.scrollLastTick = Date.now(), onScroll && onScroll(normalizeScrollEvent(e));
		}
		function handleScrollEnd(e) {
			scrollState.current.isScrolling = !1, onScroll && onScroll(normalizeScrollEvent(e));
		}
		const hideHorizontalScrollbar = showsHorizontalScrollIndicator === !1, hideVerticalScrollbar = showsVerticalScrollIndicator === !1;
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(View$2, _objectSpread2(_objectSpread2({}, rest), {}, {
			className: "_dsp_contents" + (hideHorizontalScrollbar ? " _hsb-x" : "") + (hideVerticalScrollbar ? " _hsb-y" : ""),
			onScroll: handleScroll,
			onTouchMove: createPreventableScrollHandler(onTouchMove),
			onWheel: createPreventableScrollHandler(onWheel),
			ref: useMergeRefs$1(scrollRef, forwardedRef),
			style: [style, !scrollEnabled && styles$11.scrollDisabled]
		}));
	}), styles$11 = { scrollDisabled: {
		overflowX: "hidden",
		overflowY: "hidden",
		touchAction: "none"
	} };
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/ScrollView/index.mjs
var _excluded$19, emptyObject$3, IS_ANIMATING_TOUCH_START_THRESHOLD_MS, ScrollView$1, commonStyle, styles$10, ForwardedScrollView;
var init_ScrollView = __esmMin((() => {
	init_esm$1();
	init_Dimensions();
	init_View();
	init_ScrollViewBase();
	init_defineProperty();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$19 = [
		"contentContainerStyle",
		"horizontal",
		"onContentSizeChange",
		"refreshControl",
		"stickyHeaderIndices",
		"pagingEnabled",
		"forwardedRef",
		"keyboardDismissMode",
		"onScroll",
		"centerContent",
		"contentOffset",
		"contentInset",
		"contentInsetAdjustmentBehavior",
		"decelerationRate",
		"directionalLockEnabled",
		"disableIntervalMomentum",
		"disableScrollViewPanResponder",
		"endFillColor",
		"fadingEdgeLength",
		"indicatorStyle",
		"invertStickyHeaders",
		"keyboardShouldPersistTaps",
		"maintainVisibleContentPosition",
		"maximumZoomScale",
		"minimumZoomScale",
		"nestedScrollEnabled",
		"onScrollToTop",
		"overScrollMode",
		"pinchGestureEnabled",
		"removeClippedSubviews",
		"scrollIndicatorInsets",
		"scrollPerfTag",
		"scrollToOverflowEnabled",
		"snapToAlignment",
		"snapToEnd",
		"snapToInterval",
		"snapToOffsets",
		"snapToStart",
		"StickyHeaderComponent",
		"ScrollComponent"
	];
	emptyObject$3 = {}, IS_ANIMATING_TOUCH_START_THRESHOLD_MS = 16;
	ScrollView$1 = class extends react.default.Component {
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "_scrollNodeRef", void 0);
			_defineProperty(this, "_innerViewRef", void 0);
			_defineProperty(this, "keyboardWillOpenTo", null);
			_defineProperty(this, "additionalScrollOffset", 0);
			_defineProperty(this, "preventNegativeScrollOffset", !1);
			_defineProperty(this, "isTouching", !1);
			_defineProperty(this, "lastMomentumScrollBeginTime", 0);
			_defineProperty(this, "lastMomentumScrollEndTime", 0);
			_defineProperty(this, "observedScrollSinceBecomingResponder", !1);
			_defineProperty(this, "becameResponderWhileAnimating", !1);
			_defineProperty(this, "flashScrollIndicators", () => {
				this.scrollResponderFlashScrollIndicators();
			});
			_defineProperty(
				this,
				/**
				* Scrolls to a given x, y offset, either immediately or with a smooth animation.
				* Syntax:
				*
				* scrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})
				*
				* Note: The weird argument signature is due to the fact that, for historical reasons,
				* the function also accepts separate arguments as as alternative to the options object.
				* This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
				*/
				"scrollTo",
				(y, x, animated) => {
					typeof y == "number" ? console.warn("`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.") : {x, y, animated} = y || emptyObject$3, this.scrollResponderScrollTo({
						x: x || 0,
						y: y || 0,
						animated: animated !== !1
					});
				}
			);
			_defineProperty(
				this,
				/**
				* If this is a vertical ScrollView scrolls to the bottom.
				* If this is a horizontal ScrollView scrolls to the right.
				*
				* Use `scrollToEnd({ animated: true })` for smooth animated scrolling,
				* `scrollToEnd({ animated: false })` for immediate scrolling.
				* If no options are passed, `animated` defaults to true.
				*/
				"scrollToEnd",
				(options) => {
					const animated = (options && options.animated) !== !1, { horizontal } = this.props, scrollResponderNode = this.getScrollableNode(), x = horizontal ? scrollResponderNode.scrollWidth : 0, y = horizontal ? 0 : scrollResponderNode.scrollHeight;
					this.scrollResponderScrollTo({
						x,
						y,
						animated
					});
				}
			);
			_defineProperty(
				this,
				/**
				* A helper function to scroll to a specific point in the scrollview.
				* This is currently used to help focus on child textviews, but can also
				* be used to quickly scroll to any element we want to focus. Syntax:
				*
				* scrollResponderScrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})
				*
				* Note: The weird argument signature is due to the fact that, for historical reasons,
				* the function also accepts separate arguments as as alternative to the options object.
				* This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
				*/
				"scrollResponderScrollTo",
				(x, y, animated) => {
					typeof x == "number" ? console.warn("`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.") : {x, y, animated} = x || emptyObject$3;
					const node = this.getScrollableNode(), left = x || 0, top = y || 0;
					node != null && (typeof node.scroll == "function" ? node.scroll({
						top,
						left,
						behavior: animated ? "smooth" : "auto"
					}) : (node.scrollLeft = left, node.scrollTop = top));
				}
			);
			_defineProperty(
				this,
				/**
				* A helper function to zoom to a specific rect in the scrollview. The argument has the shape
				* {x: number; y: number; width: number; height: number; animated: boolean = true}
				*
				* @platform ios
				*/
				"scrollResponderZoomTo",
				(rect, animated) => {
					Platform.OS !== "ios" && invariant("zoomToRect is not implemented");
				}
			);
			_defineProperty(
				this,
				/**
				* This method should be used as the callback to onFocus in a TextInputs'
				* parent view. Note that any module using this mixin needs to return
				* the parent view's ref in getScrollViewRef() in order to use this method.
				* @param {any} nodeHandle The TextInput node handle
				* @param {number} additionalOffset The scroll view's top "contentInset".
				*        Default is 0.
				* @param {bool} preventNegativeScrolling Whether to allow pulling the content
				*        down to make it meet the keyboard's top. Default is false.
				*/
				"scrollResponderScrollNativeHandleToKeyboard",
				(nodeHandle, additionalOffset, preventNegativeScrollOffset) => {
					this.additionalScrollOffset = additionalOffset || 0, this.preventNegativeScrollOffset = !!preventNegativeScrollOffset, UIManager.measureLayout(nodeHandle, this.getInnerViewNode(), this.scrollResponderTextInputFocusError, this.scrollResponderInputMeasureAndScrollToKeyboard);
				}
			);
			_defineProperty(
				this,
				/**
				* The calculations performed here assume the scroll view takes up the entire
				* screen - even if has some content inset. We then measure the offsets of the
				* keyboard, and compensate both for the scroll view's "contentInset".
				*
				* @param {number} left Position of input w.r.t. table view.
				* @param {number} top Position of input w.r.t. table view.
				* @param {number} width Width of the text input.
				* @param {number} height Height of the text input.
				*/
				"scrollResponderInputMeasureAndScrollToKeyboard",
				(left, top, width, height) => {
					let keyboardScreenY = Dimensions.get("window").height;
					this.keyboardWillOpenTo && (keyboardScreenY = this.keyboardWillOpenTo.endCoordinates.screenY);
					let scrollOffsetY = top - keyboardScreenY + height + this.additionalScrollOffset;
					this.preventNegativeScrollOffset && (scrollOffsetY = Math.max(0, scrollOffsetY)), this.scrollResponderScrollTo({
						x: 0,
						y: scrollOffsetY,
						animated: !0
					}), this.additionalScrollOffset = 0, this.preventNegativeScrollOffset = !1;
				}
			);
			_defineProperty(
				this,
				/**
				* Warning, this may be called several times for a single keyboard opening.
				* It's best to store the information in this method and then take any action
				* at a later point (either in `keyboardDidShow` or other).
				*
				* Here's the order that events occur in:
				* - focus
				* - willShow {startCoordinates, endCoordinates} several times
				* - didShow several times
				* - blur
				* - willHide {startCoordinates, endCoordinates} several times
				* - didHide several times
				*
				* The `ScrollResponder` providesModule callbacks for each of these events.
				* Even though any user could have easily listened to keyboard events
				* themselves, using these `props` callbacks ensures that ordering of events
				* is consistent - and not dependent on the order that the keyboard events are
				* subscribed to. This matters when telling the scroll view to scroll to where
				* the keyboard is headed - the scroll responder better have been notified of
				* the keyboard destination before being instructed to scroll to where the
				* keyboard will be. Stick to the `ScrollResponder` callbacks, and everything
				* will work.
				*
				* WARNING: These callbacks will fire even if a keyboard is displayed in a
				* different navigation pane. Filter out the events to determine if they are
				* relevant to you. (For example, only if you receive these callbacks after
				* you had explicitly focused a node etc).
				*/
				"scrollResponderKeyboardWillShow",
				(e) => {
					this.keyboardWillOpenTo = e, this.props.onKeyboardWillShow && this.props.onKeyboardWillShow(e);
				}
			);
			_defineProperty(this, "scrollResponderKeyboardWillHide", (e) => {
				this.keyboardWillOpenTo = null, this.props.onKeyboardWillHide && this.props.onKeyboardWillHide(e);
			});
			_defineProperty(this, "scrollResponderKeyboardDidShow", (e) => {
				e && (this.keyboardWillOpenTo = e), this.props.onKeyboardDidShow && this.props.onKeyboardDidShow(e);
			});
			_defineProperty(this, "scrollResponderKeyboardDidHide", (e) => {
				this.keyboardWillOpenTo = null, this.props.onKeyboardDidHide && this.props.onKeyboardDidHide(e);
			});
		}
		/**
		* Returns a reference to the underlying scroll responder, which supports
		* operations like `scrollTo`. All ScrollView-like components should
		* implement this method so that they can be composed while providing access
		* to the underlying scroll responder's methods.
		*/
		getScrollResponder() {
			return this;
		}
		getScrollableNode() {
			return this._scrollNodeRef;
		}
		getInnerViewRef() {
			return this._innerViewRef;
		}
		getInnerViewNode() {
			return this._innerViewRef;
		}
		getNativeScrollRef() {
			return this._scrollNodeRef;
		}
		render() {
			const _this$props = this.props, { contentContainerStyle, horizontal, onContentSizeChange, refreshControl, stickyHeaderIndices, pagingEnabled, forwardedRef, keyboardDismissMode, onScroll, centerContent, contentOffset, contentInset, contentInsetAdjustmentBehavior, decelerationRate, directionalLockEnabled, disableIntervalMomentum, disableScrollViewPanResponder, endFillColor, fadingEdgeLength, indicatorStyle, invertStickyHeaders, keyboardShouldPersistTaps, maintainVisibleContentPosition, maximumZoomScale, minimumZoomScale, nestedScrollEnabled, onScrollToTop, overScrollMode, pinchGestureEnabled, removeClippedSubviews, scrollIndicatorInsets, scrollPerfTag, scrollToOverflowEnabled, snapToAlignment, snapToEnd, snapToInterval, snapToOffsets, snapToStart, StickyHeaderComponent, ScrollComponent } = _this$props, other = _objectWithoutProperties(_this$props, _excluded$19);
			let contentSizeChangeProps = {};
			onContentSizeChange && (contentSizeChangeProps = { onLayout: this._handleContentOnLayout.bind(this) });
			const hasStickyHeaderIndices = !horizontal && Array.isArray(stickyHeaderIndices), children = hasStickyHeaderIndices || pagingEnabled ? react.default.Children.map(this.props.children, (child, i) => {
				const isSticky = hasStickyHeaderIndices && stickyHeaderIndices.indexOf(i) > -1;
				return child != null && (isSticky || pagingEnabled) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(View$2, {
					style: StyleSheet.compose(isSticky && styles$10.stickyHeader, pagingEnabled && styles$10.pagingEnabledChild),
					children: child
				}) : child;
			}) : this.props.children, contentContainer = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(View$2, _objectSpread2(_objectSpread2({}, contentSizeChangeProps), {}, {
				collapsable: !1,
				ref: this._setInnerViewRef.bind(this),
				style: [
					horizontal && styles$10.contentContainerHorizontal,
					centerContent && styles$10.contentContainerCenterContent,
					contentContainerStyle
				],
				children
			})), baseStyle = horizontal ? styles$10.baseHorizontal : styles$10.baseVertical, pagingEnabledStyle = horizontal ? styles$10.pagingEnabledHorizontal : styles$10.pagingEnabledVertical, props = _objectSpread2(_objectSpread2({}, other), {}, {
				style: [
					baseStyle,
					pagingEnabled && pagingEnabledStyle,
					this.props.style
				],
				onTouchStart: this.scrollResponderHandleTouchStart.bind(this),
				onTouchMove: this.scrollResponderHandleTouchMove.bind(this),
				onTouchEnd: this.scrollResponderHandleTouchEnd.bind(this),
				onScrollBeginDrag: this.scrollResponderHandleScrollBeginDrag.bind(this),
				onScrollEndDrag: this.scrollResponderHandleScrollEndDrag.bind(this),
				onMomentumScrollBegin: this.scrollResponderHandleMomentumScrollBegin.bind(this),
				onMomentumScrollEnd: this.scrollResponderHandleMomentumScrollEnd.bind(this),
				onStartShouldSetResponder: this.scrollResponderHandleStartShouldSetResponder.bind(this),
				onStartShouldSetResponderCapture: this.scrollResponderHandleStartShouldSetResponderCapture.bind(this),
				onScrollShouldSetResponder: this.scrollResponderHandleScrollShouldSetResponder.bind(this),
				onScroll: this._handleScroll.bind(this),
				onResponderGrant: this.scrollResponderHandleResponderGrant.bind(this),
				onResponderTerminationRequest: this.scrollResponderHandleTerminationRequest.bind(this),
				onResponderRelease: this.scrollResponderHandleResponderRelease.bind(this),
				onResponderReject: this.scrollResponderHandleResponderReject.bind(this),
				onResponderTerminate: this.scrollResponderHandleTerminate.bind(this)
			}), ScrollViewClass = ScrollViewBase;
			invariant(ScrollViewClass !== void 0, "ScrollViewClass must not be undefined");
			const scrollView = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ScrollViewClass, _objectSpread2(_objectSpread2({}, props), {}, {
				ref: this._setScrollNodeRef.bind(this),
				children: contentContainer
			}));
			return refreshControl ? react.default.cloneElement(refreshControl, { style: props.style }, scrollView) : scrollView;
		}
		_handleContentOnLayout(e) {
			var _this$props$onContent, _this$props2;
			const { width, height } = e.nativeEvent.layout;
			(_this$props$onContent = (_this$props2 = this.props).onContentSizeChange) === null || _this$props$onContent === void 0 || _this$props$onContent.call(_this$props2, width, height);
		}
		_handleScroll(e) {
			this.props.keyboardDismissMode === "on-drag" && dismissKeyboard(), this.scrollResponderHandleScroll(e);
		}
		_setInnerViewRef(node) {
			this._innerViewRef = node;
		}
		_setScrollNodeRef(node) {
			this._scrollNodeRef = node, node != null && (node.getScrollResponder = this.getScrollResponder, node.getInnerViewNode = this.getInnerViewNode, node.getInnerViewRef = this.getInnerViewRef, node.getNativeScrollRef = this.getNativeScrollRef, node.getScrollableNode = this.getScrollableNode, node.scrollTo = this.scrollTo, node.scrollToEnd = this.scrollToEnd, node.flashScrollIndicators = this.flashScrollIndicators, node.scrollResponderZoomTo = this.scrollResponderZoomTo, node.scrollResponderScrollNativeHandleToKeyboard = this.scrollResponderScrollNativeHandleToKeyboard), mergeRefs(this.props.forwardedRef)(node);
		}
		/**
		* Invoke this from an `onScroll` event.
		*/
		scrollResponderHandleScrollShouldSetResponder() {
			return this.isTouching;
		}
		/**
		* Merely touch starting is not sufficient for a scroll view to become the
		* responder. Being the "responder" means that the very next touch move/end
		* event will result in an action/movement.
		*
		* Invoke this from an `onStartShouldSetResponder` event.
		*
		* `onStartShouldSetResponder` is used when the next move/end will trigger
		* some UI movement/action, but when you want to yield priority to views
		* nested inside of the view.
		*
		* There may be some cases where scroll views actually should return `true`
		* from `onStartShouldSetResponder`: Any time we are detecting a standard tap
		* that gives priority to nested views.
		*
		* - If a single tap on the scroll view triggers an action such as
		*   recentering a map style view yet wants to give priority to interaction
		*   views inside (such as dropped pins or labels), then we would return true
		*   from this method when there is a single touch.
		*
		* - Similar to the previous case, if a two finger "tap" should trigger a
		*   zoom, we would check the `touches` count, and if `>= 2`, we would return
		*   true.
		*
		*/
		scrollResponderHandleStartShouldSetResponder() {
			return !1;
		}
		/**
		* There are times when the scroll view wants to become the responder
		* (meaning respond to the next immediate `touchStart/touchEnd`), in a way
		* that *doesn't* give priority to nested views (hence the capture phase):
		*
		* - Currently animating.
		* - Tapping anywhere that is not the focused input, while the keyboard is
		*   up (which should dismiss the keyboard).
		*
		* Invoke this from an `onStartShouldSetResponderCapture` event.
		*/
		scrollResponderHandleStartShouldSetResponderCapture(e) {
			return this.scrollResponderIsAnimating();
		}
		/**
		* Invoke this from an `onResponderReject` event.
		*
		* Some other element is not yielding its role as responder. Normally, we'd
		* just disable the `UIScrollView`, but a touch has already began on it, the
		* `UIScrollView` will not accept being disabled after that. The easiest
		* solution for now is to accept the limitation of disallowing this
		* altogether. To improve this, find a way to disable the `UIScrollView` after
		* a touch has already started.
		*/
		scrollResponderHandleResponderReject() {
			warning(!1, "ScrollView doesn't take rejection well - scrolls anyway");
		}
		/**
		* We will allow the scroll view to give up its lock iff it acquired the lock
		* during an animation. This is a very useful default that happens to satisfy
		* many common user experiences.
		*
		* - Stop a scroll on the left edge, then turn that into an outer view's
		*   backswipe.
		* - Stop a scroll mid-bounce at the top, continue pulling to have the outer
		*   view dismiss.
		* - However, without catching the scroll view mid-bounce (while it is
		*   motionless), if you drag far enough for the scroll view to become
		*   responder (and therefore drag the scroll view a bit), any backswipe
		*   navigation of a swipe gesture higher in the view hierarchy, should be
		*   rejected.
		*/
		scrollResponderHandleTerminationRequest() {
			return !this.observedScrollSinceBecomingResponder;
		}
		/**
		* Invoke this from an `onTouchEnd` event.
		*
		* @param {SyntheticEvent} e Event.
		*/
		scrollResponderHandleTouchEnd(e) {
			this.isTouching = e.nativeEvent.touches.length !== 0, this.props.onTouchEnd && this.props.onTouchEnd(e);
		}
		/**
		* Invoke this from an `onResponderRelease` event.
		*/
		scrollResponderHandleResponderRelease(e) {
			this.props.onResponderRelease && this.props.onResponderRelease(e);
			const currentlyFocusedTextInput = TextInputState.currentlyFocusedField();
			!this.props.keyboardShouldPersistTaps && currentlyFocusedTextInput != null && e.target !== currentlyFocusedTextInput && !this.observedScrollSinceBecomingResponder && !this.becameResponderWhileAnimating && (this.props.onScrollResponderKeyboardDismissed && this.props.onScrollResponderKeyboardDismissed(e), TextInputState.blurTextInput(currentlyFocusedTextInput));
		}
		scrollResponderHandleScroll(e) {
			this.observedScrollSinceBecomingResponder = !0, this.props.onScroll && this.props.onScroll(e);
		}
		/**
		* Invoke this from an `onResponderGrant` event.
		*/
		scrollResponderHandleResponderGrant(e) {
			this.observedScrollSinceBecomingResponder = !1, this.props.onResponderGrant && this.props.onResponderGrant(e), this.becameResponderWhileAnimating = this.scrollResponderIsAnimating();
		}
		/**
		* Unfortunately, `onScrollBeginDrag` also fires when *stopping* the scroll
		* animation, and there's not an easy way to distinguish a drag vs. stopping
		* momentum.
		*
		* Invoke this from an `onScrollBeginDrag` event.
		*/
		scrollResponderHandleScrollBeginDrag(e) {
			this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e);
		}
		/**
		* Invoke this from an `onScrollEndDrag` event.
		*/
		scrollResponderHandleScrollEndDrag(e) {
			this.props.onScrollEndDrag && this.props.onScrollEndDrag(e);
		}
		/**
		* Invoke this from an `onMomentumScrollBegin` event.
		*/
		scrollResponderHandleMomentumScrollBegin(e) {
			this.lastMomentumScrollBeginTime = Date.now(), this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(e);
		}
		/**
		* Invoke this from an `onMomentumScrollEnd` event.
		*/
		scrollResponderHandleMomentumScrollEnd(e) {
			this.lastMomentumScrollEndTime = Date.now(), this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e);
		}
		/**
		* Invoke this from an `onTouchStart` event.
		*
		* Since we know that the `SimpleEventPlugin` occurs later in the plugin
		* order, after `ResponderEventPlugin`, we can detect that we were *not*
		* permitted to be the responder (presumably because a contained view became
		* responder). The `onResponderReject` won't fire in that case - it only
		* fires when a *current* responder rejects our request.
		*
		* @param {SyntheticEvent} e Touch Start event.
		*/
		scrollResponderHandleTouchStart(e) {
			this.isTouching = !0, this.props.onTouchStart && this.props.onTouchStart(e);
		}
		/**
		* Invoke this from an `onTouchMove` event.
		*
		* Since we know that the `SimpleEventPlugin` occurs later in the plugin
		* order, after `ResponderEventPlugin`, we can detect that we were *not*
		* permitted to be the responder (presumably because a contained view became
		* responder). The `onResponderReject` won't fire in that case - it only
		* fires when a *current* responder rejects our request.
		*
		* @param {SyntheticEvent} e Touch Start event.
		*/
		scrollResponderHandleTouchMove(e) {
			this.props.onTouchMove && this.props.onTouchMove(e);
		}
		scrollResponderHandleTerminate(e) {
			this.props.onResponderTerminate && this.props.onResponderTerminate(e);
		}
		/**
		* A helper function for this class that lets us quickly determine if the
		* view is currently animating. This is particularly useful to know when
		* a touch has just started or ended.
		*/
		scrollResponderIsAnimating() {
			return Date.now() - this.lastMomentumScrollEndTime < IS_ANIMATING_TOUCH_START_THRESHOLD_MS || this.lastMomentumScrollEndTime < this.lastMomentumScrollBeginTime;
		}
		/**
		* Displays the scroll indicators momentarily.
		*/
		scrollResponderFlashScrollIndicators() {}
		scrollResponderTextInputFocusError(e) {
			console.error("Error measuring text field: ", e);
		}
	};
	commonStyle = {
		flexGrow: 1,
		flexShrink: 1,
		transform: [{ translateZ: 0 }],
		WebkitOverflowScrolling: "touch"
	}, styles$10 = {
		baseVertical: _objectSpread2(_objectSpread2({}, commonStyle), {}, {
			flexDirection: "column",
			overflowX: "hidden",
			overflowY: "auto"
		}),
		baseHorizontal: _objectSpread2(_objectSpread2({}, commonStyle), {}, {
			flexDirection: "row",
			overflowX: "auto",
			overflowY: "hidden"
		}),
		contentContainerHorizontal: { flexDirection: "row" },
		contentContainerCenterContent: {
			justifyContent: "center",
			flexGrow: 1
		},
		stickyHeader: {
			position: "sticky",
			top: 0,
			zIndex: 10
		},
		pagingEnabledHorizontal: { scrollSnapType: "x mandatory" },
		pagingEnabledVertical: { scrollSnapType: "y mandatory" },
		pagingEnabledChild: { scrollSnapAlign: "start" }
	}, ForwardedScrollView = react.default.forwardRef((props, forwardedRef) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ScrollView$1, _objectSpread2(_objectSpread2({}, props), {}, { forwardedRef })));
	ForwardedScrollView.displayName = "ScrollView";
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/RefreshControl/index.mjs
function RefreshControl(props) {
	const { colors, enabled, onRefresh, progressBackgroundColor, progressViewOffset, refreshing, size, tintColor, title, titleColor } = props;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(View$2, _objectSpread2({}, _objectWithoutProperties(props, _excluded$18)));
}
var _excluded$18;
var init_RefreshControl = __esmMin((() => {
	init_View();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$18 = [
		"colors",
		"enabled",
		"onRefresh",
		"progressBackgroundColor",
		"progressViewOffset",
		"refreshing",
		"size",
		"tintColor",
		"title",
		"titleColor"
	];
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Batchinator/index.mjs
var Batchinator;
var init_Batchinator = __esmMin((() => {
	init_esm$1();
	init_defineProperty();
	Batchinator = class {
		constructor(callback, delayMS) {
			_defineProperty(this, "_callback", void 0);
			_defineProperty(this, "_delay", void 0);
			_defineProperty(this, "_taskHandle", void 0);
			this._delay = delayMS, this._callback = callback;
		}
		dispose(options = { abort: !1 }) {
			this._taskHandle && (this._taskHandle.cancel(), options.abort || this._callback(), this._taskHandle = null);
		}
		schedule() {
			if (this._taskHandle) return;
			const timeoutHandle = setTimeout(() => {
				this._taskHandle = InteractionManager.runAfterInteractions(() => {
					this._taskHandle = null, this._callback();
				});
			}, this._delay);
			this._taskHandle = { cancel: () => clearTimeout(timeoutHandle) };
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/VirtualizedList/ChildListCollection.mjs
var ChildListCollection;
var init_ChildListCollection = __esmMin((() => {
	init_esm$1();
	init_defineProperty();
	ChildListCollection = class {
		constructor() {
			_defineProperty(this, "_cellKeyToChildren", /* @__PURE__ */ new Map());
			_defineProperty(this, "_childrenToCellKey", /* @__PURE__ */ new Map());
		}
		add(list, cellKey) {
			var _this$_cellKeyToChild;
			invariant(!this._childrenToCellKey.has(list), "Trying to add already present child list");
			const cellLists = (_this$_cellKeyToChild = this._cellKeyToChildren.get(cellKey)) !== null && _this$_cellKeyToChild !== void 0 ? _this$_cellKeyToChild : /* @__PURE__ */ new Set();
			cellLists.add(list), this._cellKeyToChildren.set(cellKey, cellLists), this._childrenToCellKey.set(list, cellKey);
		}
		remove(list) {
			const cellKey = this._childrenToCellKey.get(list);
			invariant(cellKey != null, "Trying to remove non-present child list"), this._childrenToCellKey.delete(list);
			const cellLists = this._cellKeyToChildren.get(cellKey);
			invariant(cellLists, "_cellKeyToChildren should contain cellKey"), cellLists.delete(list), cellLists.size === 0 && this._cellKeyToChildren.delete(cellKey);
		}
		forEach(fn) {
			for (const listSet of this._cellKeyToChildren.values()) for (const list of listSet) fn(list);
		}
		forEachInCell(cellKey, fn) {
			var _this$_cellKeyToChild2;
			const listSet = (_this$_cellKeyToChild2 = this._cellKeyToChildren.get(cellKey)) !== null && _this$_cellKeyToChild2 !== void 0 ? _this$_cellKeyToChild2 : [];
			for (const list of listSet) fn(list);
		}
		anyInCell(cellKey, fn) {
			var _this$_cellKeyToChild3;
			const listSet = (_this$_cellKeyToChild3 = this._cellKeyToChildren.get(cellKey)) !== null && _this$_cellKeyToChild3 !== void 0 ? _this$_cellKeyToChild3 : [];
			for (const list of listSet) if (fn(list)) return !0;
			return !1;
		}
		size() {
			return this._childrenToCellKey.size;
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/FillRateHelper/index.mjs
var Info, _listeners, _minSampleCount, _sampleRate, FillRateHelper;
var init_FillRateHelper = __esmMin((() => {
	init_defineProperty();
	init_objectSpread2();
	Info = class {
		constructor() {
			_defineProperty(this, "any_blank_count", 0);
			_defineProperty(this, "any_blank_ms", 0);
			_defineProperty(this, "any_blank_speed_sum", 0);
			_defineProperty(this, "mostly_blank_count", 0);
			_defineProperty(this, "mostly_blank_ms", 0);
			_defineProperty(this, "pixels_blank", 0);
			_defineProperty(this, "pixels_sampled", 0);
			_defineProperty(this, "pixels_scrolled", 0);
			_defineProperty(this, "total_time_spent", 0);
			_defineProperty(this, "sample_count", 0);
		}
	};
	_listeners = [], _minSampleCount = 10, _sampleRate = null;
	FillRateHelper = class {
		static addListener(callback) {
			return _sampleRate === null && console.warn("Call `FillRateHelper.setSampleRate` before `addListener`."), _listeners.push(callback), { remove: () => {
				_listeners = _listeners.filter((listener) => callback !== listener);
			} };
		}
		static setSampleRate(sampleRate) {
			_sampleRate = sampleRate;
		}
		static setMinSampleCount(minSampleCount) {
			_minSampleCount = minSampleCount;
		}
		constructor(getFrameMetrics) {
			_defineProperty(this, "_anyBlankStartTime", null);
			_defineProperty(this, "_enabled", !1);
			_defineProperty(this, "_getFrameMetrics", void 0);
			_defineProperty(this, "_info", new Info());
			_defineProperty(this, "_mostlyBlankStartTime", null);
			_defineProperty(this, "_samplesStartTime", null);
			this._getFrameMetrics = getFrameMetrics, this._enabled = (_sampleRate || 0) > Math.random(), this._resetData();
		}
		activate() {
			this._enabled && this._samplesStartTime == null && (this._samplesStartTime = global.performance.now());
		}
		deactivateAndFlush() {
			if (!this._enabled) return;
			const start = this._samplesStartTime;
			if (start == null) return;
			if (this._info.sample_count < _minSampleCount) {
				this._resetData();
				return;
			}
			const total_time_spent = global.performance.now() - start, info = _objectSpread2(_objectSpread2({}, this._info), {}, { total_time_spent });
			_listeners.forEach((listener) => listener(info)), this._resetData();
		}
		computeBlankness(props, cellsAroundViewport, scrollMetrics) {
			if (!this._enabled || props.getItemCount(props.data) === 0 || cellsAroundViewport.last < cellsAroundViewport.first || this._samplesStartTime == null) return 0;
			const { dOffset, offset, velocity, visibleLength } = scrollMetrics;
			this._info.sample_count++, this._info.pixels_sampled += Math.round(visibleLength), this._info.pixels_scrolled += Math.round(Math.abs(dOffset));
			const scrollSpeed = Math.round(Math.abs(velocity) * 1e3), now = global.performance.now();
			this._anyBlankStartTime != null && (this._info.any_blank_ms += now - this._anyBlankStartTime), this._anyBlankStartTime = null, this._mostlyBlankStartTime != null && (this._info.mostly_blank_ms += now - this._mostlyBlankStartTime), this._mostlyBlankStartTime = null;
			let blankTop = 0, first = cellsAroundViewport.first, firstFrame = this._getFrameMetrics(first, props);
			for (; first <= cellsAroundViewport.last && (!firstFrame || !firstFrame.inLayout);) firstFrame = this._getFrameMetrics(first, props), first++;
			firstFrame && first > 0 && (blankTop = Math.min(visibleLength, Math.max(0, firstFrame.offset - offset)));
			let blankBottom = 0, last = cellsAroundViewport.last, lastFrame = this._getFrameMetrics(last, props);
			for (; last >= cellsAroundViewport.first && (!lastFrame || !lastFrame.inLayout);) lastFrame = this._getFrameMetrics(last, props), last--;
			if (lastFrame && last < props.getItemCount(props.data) - 1) {
				const bottomEdge = lastFrame.offset + lastFrame.length;
				blankBottom = Math.min(visibleLength, Math.max(0, offset + visibleLength - bottomEdge));
			}
			const pixels_blank = Math.round(blankTop + blankBottom), blankness = pixels_blank / visibleLength;
			return blankness > 0 ? (this._anyBlankStartTime = now, this._info.any_blank_speed_sum += scrollSpeed, this._info.any_blank_count++, this._info.pixels_blank += pixels_blank, blankness > .5 && (this._mostlyBlankStartTime = now, this._info.mostly_blank_count++)) : (scrollSpeed < .01 || Math.abs(dOffset) < 1) && this.deactivateAndFlush(), blankness;
		}
		enabled() {
			return this._enabled;
		}
		_resetData() {
			this._anyBlankStartTime = null, this._info = new Info(), this._mostlyBlankStartTime = null, this._samplesStartTime = null;
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/VirtualizedList/StateSafePureComponent.mjs
var StateSafePureComponent;
var init_StateSafePureComponent = __esmMin((() => {
	init_esm$1();
	init_defineProperty();
	StateSafePureComponent = class extends react.PureComponent {
		constructor(props) {
			var _super = (..._args) => (super(..._args), _defineProperty(this, "_inAsyncStateUpdate", !1), this);
			_super(props), this._installSetStateHooks();
		}
		setState(partialState, callback) {
			typeof partialState == "function" ? super.setState((state, props) => {
				this._inAsyncStateUpdate = !0;
				let ret;
				try {
					ret = partialState(state, props);
				} catch (err) {
					throw err;
				} finally {
					this._inAsyncStateUpdate = !1;
				}
				return ret;
			}, callback) : super.setState(partialState, callback);
		}
		_installSetStateHooks() {
			const that = this;
			let { props, state } = this;
			Object.defineProperty(this, "props", {
				get() {
					return invariant(!that._inAsyncStateUpdate, "\"this.props\" should not be accessed during state updates"), props;
				},
				set(newProps) {
					props = newProps;
				}
			}), Object.defineProperty(this, "state", {
				get() {
					return invariant(!that._inAsyncStateUpdate, "\"this.state\" should not be acceessed during state updates"), state;
				},
				set(newState) {
					state = newState;
				}
			});
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/ViewabilityHelper.mjs
function _isViewable(viewAreaMode, viewablePercentThreshold, top, bottom, viewportHeight, itemLength) {
	if (_isEntirelyVisible(top, bottom, viewportHeight)) return !0;
	{
		const pixels = _getPixelsVisible(top, bottom, viewportHeight);
		return 100 * (viewAreaMode ? pixels / viewportHeight : pixels / itemLength) >= viewablePercentThreshold;
	}
}
function _getPixelsVisible(top, bottom, viewportHeight) {
	const visibleHeight = Math.min(bottom, viewportHeight) - Math.max(top, 0);
	return Math.max(0, visibleHeight);
}
function _isEntirelyVisible(top, bottom, viewportHeight) {
	return top >= 0 && bottom <= viewportHeight && bottom > top;
}
var ViewabilityHelper;
var init_ViewabilityHelper = __esmMin((() => {
	init_esm$1();
	init_defineProperty();
	init_objectSpread2();
	ViewabilityHelper = class {
		constructor(config = { viewAreaCoveragePercentThreshold: 0 }) {
			_defineProperty(this, "_config", void 0);
			_defineProperty(this, "_hasInteracted", !1);
			_defineProperty(this, "_timers", /* @__PURE__ */ new Set());
			_defineProperty(this, "_viewableIndices", []);
			_defineProperty(this, "_viewableItems", /* @__PURE__ */ new Map());
			this._config = config;
		}
		/**
		* Cleanup, e.g. on unmount. Clears any pending timers.
		*/
		dispose() {
			this._timers.forEach(clearTimeout);
		}
		/**
		* Determines which items are viewable based on the current metrics and config.
		*/
		computeViewableItems(props, scrollOffset, viewportHeight, getFrameMetrics, renderRange) {
			const itemCount = props.getItemCount(props.data), { itemVisiblePercentThreshold, viewAreaCoveragePercentThreshold } = this._config, viewAreaMode = viewAreaCoveragePercentThreshold != null, viewablePercentThreshold = viewAreaMode ? viewAreaCoveragePercentThreshold : itemVisiblePercentThreshold;
			invariant(viewablePercentThreshold != null && itemVisiblePercentThreshold != null != (viewAreaCoveragePercentThreshold != null), "Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold");
			const viewableIndices = [];
			if (itemCount === 0) return viewableIndices;
			let firstVisible = -1;
			const { first, last } = renderRange || {
				first: 0,
				last: itemCount - 1
			};
			if (last >= itemCount) return console.warn("Invalid render range computing viewability " + JSON.stringify({
				renderRange,
				itemCount
			})), [];
			for (let idx = first; idx <= last; idx++) {
				const metrics = getFrameMetrics(idx, props);
				if (!metrics) continue;
				const top = metrics.offset - scrollOffset, bottom = top + metrics.length;
				if (top < viewportHeight && bottom > 0) firstVisible = idx, _isViewable(viewAreaMode, viewablePercentThreshold, top, bottom, viewportHeight, metrics.length) && viewableIndices.push(idx);
				else if (firstVisible >= 0) break;
			}
			return viewableIndices;
		}
		/**
		* Figures out which items are viewable and how that has changed from before and calls
		* `onViewableItemsChanged` as appropriate.
		*/
		onUpdate(props, scrollOffset, viewportHeight, getFrameMetrics, createViewToken, onViewableItemsChanged, renderRange) {
			const itemCount = props.getItemCount(props.data);
			if (this._config.waitForInteraction && !this._hasInteracted || itemCount === 0 || !getFrameMetrics(0, props)) return;
			let viewableIndices = [];
			if (itemCount && (viewableIndices = this.computeViewableItems(props, scrollOffset, viewportHeight, getFrameMetrics, renderRange)), !(this._viewableIndices.length === viewableIndices.length && this._viewableIndices.every((v, ii) => v === viewableIndices[ii]))) if (this._viewableIndices = viewableIndices, this._config.minimumViewTime) {
				const handle = setTimeout(() => {
					this._timers.delete(handle), this._onUpdateSync(props, viewableIndices, onViewableItemsChanged, createViewToken);
				}, this._config.minimumViewTime);
				this._timers.add(handle);
			} else this._onUpdateSync(props, viewableIndices, onViewableItemsChanged, createViewToken);
		}
		resetViewableIndices() {
			this._viewableIndices = [];
		}
		recordInteraction() {
			this._hasInteracted = !0;
		}
		_onUpdateSync(props, viewableIndicesToCheck, onViewableItemsChanged, createViewToken) {
			viewableIndicesToCheck = viewableIndicesToCheck.filter((ii) => this._viewableIndices.includes(ii));
			const prevItems = this._viewableItems, nextItems = new Map(viewableIndicesToCheck.map((ii) => {
				const viewable = createViewToken(ii, !0, props);
				return [viewable.key, viewable];
			})), changed = [];
			for (const [key, viewable] of nextItems) prevItems.has(key) || changed.push(viewable);
			for (const [key, viewable] of prevItems) nextItems.has(key) || changed.push(_objectSpread2(_objectSpread2({}, viewable), {}, { isViewable: !1 }));
			changed.length > 0 && (this._viewableItems = nextItems, onViewableItemsChanged({
				viewableItems: Array.from(nextItems.values()),
				changed
			}));
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/VirtualizedList/VirtualizedListContext.mjs
function VirtualizedListCellContextProvider({ cellKey, children }) {
	const currContext = (0, react.useContext)(VirtualizedListContext), context = (0, react.useMemo)(() => currContext == null ? null : _objectSpread2(_objectSpread2({}, currContext), {}, { cellKey }), [currContext, cellKey]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(VirtualizedListContext.Provider, {
		value: context,
		children
	});
}
var VirtualizedListContext;
var init_VirtualizedListContext = __esmMin((() => {
	init_VirtualizedList$1();
	init_objectSpread2();
	VirtualizedListContext = react.createContext(null);
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/VirtualizedList/VirtualizedListCellRenderer.mjs
var CellRenderer, styles$9;
var init_VirtualizedListCellRenderer = __esmMin((() => {
	init_View();
	init_esm$1();
	init_VirtualizedListContext();
	init_defineProperty();
	init_objectSpread2();
	CellRenderer = class extends react.Component {
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "state", { separatorProps: {
				highlighted: !1,
				leadingItem: this.props.item
			} });
			_defineProperty(this, "_separators", {
				highlight: () => {
					var _this$props$onUpdateS, _this$props;
					const { cellKey, prevCellKey } = this.props;
					(_this$props$onUpdateS = (_this$props = this.props).onUpdateSeparators) === null || _this$props$onUpdateS === void 0 || _this$props$onUpdateS.call(_this$props, [cellKey, prevCellKey], { highlighted: !0 });
				},
				unhighlight: () => {
					var _this$props$onUpdateS2, _this$props2;
					const { cellKey, prevCellKey } = this.props;
					(_this$props$onUpdateS2 = (_this$props2 = this.props).onUpdateSeparators) === null || _this$props$onUpdateS2 === void 0 || _this$props$onUpdateS2.call(_this$props2, [cellKey, prevCellKey], { highlighted: !1 });
				},
				updateProps: (select, newProps) => {
					var _this$props$onUpdateS3, _this$props3;
					const { cellKey, prevCellKey } = this.props;
					(_this$props$onUpdateS3 = (_this$props3 = this.props).onUpdateSeparators) === null || _this$props$onUpdateS3 === void 0 || _this$props$onUpdateS3.call(_this$props3, [select === "leading" ? prevCellKey : cellKey], newProps);
				}
			});
			_defineProperty(this, "_onLayout", (nativeEvent) => {
				var _this$props$onCellLay, _this$props4;
				(_this$props$onCellLay = (_this$props4 = this.props).onCellLayout) === null || _this$props$onCellLay === void 0 || _this$props$onCellLay.call(_this$props4, nativeEvent, this.props.cellKey, this.props.index);
			});
		}
		static getDerivedStateFromProps(props, prevState) {
			return { separatorProps: _objectSpread2(_objectSpread2({}, prevState.separatorProps), {}, { leadingItem: props.item }) };
		}
		updateSeparatorProps(newProps) {
			this.setState((state) => ({ separatorProps: _objectSpread2(_objectSpread2({}, state.separatorProps), newProps) }));
		}
		componentWillUnmount() {
			var _this$props$onUnmount, _this$props5;
			(_this$props$onUnmount = (_this$props5 = this.props).onUnmount) === null || _this$props$onUnmount === void 0 || _this$props$onUnmount.call(_this$props5, this.props.cellKey);
		}
		_renderElement(renderItem, ListItemComponent, item, index) {
			if (renderItem && ListItemComponent && console.warn("VirtualizedList: Both ListItemComponent and renderItem props are present. ListItemComponent will take precedence over renderItem."), ListItemComponent) return react.createElement(ListItemComponent, {
				item,
				index,
				separators: this._separators
			});
			if (renderItem) return renderItem({
				item,
				index,
				separators: this._separators
			});
			invariant(!1, "VirtualizedList: Either ListItemComponent or renderItem props are required but none were found.");
		}
		render() {
			const { CellRendererComponent, ItemSeparatorComponent, ListItemComponent, cellKey, horizontal, item, index, inversionStyle, onCellFocusCapture, onCellLayout, renderItem } = this.props, element = this._renderElement(renderItem, ListItemComponent, item, index), itemSeparator = react.isValidElement(ItemSeparatorComponent) ? ItemSeparatorComponent : ItemSeparatorComponent && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ItemSeparatorComponent, _objectSpread2({}, this.state.separatorProps)), cellStyle = inversionStyle ? horizontal ? [styles$9.rowReverse, inversionStyle] : [styles$9.columnReverse, inversionStyle] : horizontal ? [styles$9.row, inversionStyle] : inversionStyle, result = CellRendererComponent ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(CellRendererComponent, _objectSpread2(_objectSpread2({
				cellKey,
				index,
				item,
				style: cellStyle,
				onFocusCapture: onCellFocusCapture
			}, onCellLayout && { onLayout: this._onLayout }), {}, { children: [element, itemSeparator] })) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(View$2, _objectSpread2(_objectSpread2({
				style: cellStyle,
				onFocusCapture: onCellFocusCapture
			}, onCellLayout && { onLayout: this._onLayout }), {}, { children: [element, itemSeparator] }));
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(VirtualizedListCellContextProvider, {
				cellKey: this.props.cellKey,
				children: result
			});
		}
	};
	styles$9 = StyleSheet.create({
		row: { flexDirection: "row" },
		rowReverse: { flexDirection: "row-reverse" },
		columnReverse: { flexDirection: "column-reverse" }
	});
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/VirtualizedList/index.mjs
function horizontalOrDefault(horizontal) {
	return horizontal !== null && horizontal !== void 0 ? horizontal : !1;
}
function scrollEventThrottleOrDefault(scrollEventThrottle) {
	return scrollEventThrottle !== null && scrollEventThrottle !== void 0 ? scrollEventThrottle : 50;
}
var _excluded$17, VirtualizedList, VirtualizedList_default;
var init_VirtualizedList$1 = __esmMin((() => {
	init_esm$1();
	init_ScrollView();
	init_RefreshControl();
	init_Batchinator();
	init_ChildListCollection();
	init_FillRateHelper();
	init_StateSafePureComponent();
	init_ViewabilityHelper();
	init_VirtualizedListCellRenderer();
	init_VirtualizedListContext();
	init_defineProperty();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$17 = [
		"ListEmptyComponent",
		"ListFooterComponent",
		"ListHeaderComponent",
		"data",
		"debug",
		"disableVirtualization",
		"getItem",
		"getItemCount",
		"getItemLayout",
		"horizontal",
		"keyExtractor",
		"numColumns",
		"onEndReached",
		"onEndReachedThreshold",
		"onLayout",
		"onRefresh",
		"onScroll",
		"onScrollBeginDrag",
		"onScrollEndDrag",
		"onMomentumScrollBegin",
		"onMomentumScrollEnd",
		"onStartReached",
		"onStartReachedThreshold",
		"onViewableItemsChanged",
		"refreshing",
		"removeClippedSubviews",
		"renderItem",
		"viewabilityConfig",
		"viewabilityConfigCallbackPairs"
	];
	VirtualizedList = class extends StateSafePureComponent {
		constructor(props) {
			var _this$props$updateCel;
			var _super = (..._args) => (super(..._args), _defineProperty(this, "_captureRef", (ref) => {
				this._scrollRef = ref;
			}), _defineProperty(this, "_onContentSizeChange", (width, height) => {}), _defineProperty(this, "_onLayout", (event) => {}), _defineProperty(this, "_onScroll", (event) => {}), this);
			_super(props), this._nestedChildLists = new ChildListCollection(), this._viewabilityTuples = [], this._scrollMetrics = {
				contentLength: 0,
				dOffset: 0,
				dt: 10,
				offset: 0,
				timestamp: 0,
				velocity: 0,
				visibleLength: 0
			}, this._highestMeasuredFrameIndex = 0, this._headerLength = 0, this._footerLength = 0, this._averageCellLength = 0, this._hasWarned = {}, this._fillRateHelper = new FillRateHelper(this._getFrameMetrics), this._updateCellsToRenderBatcher = new Batchinator(this._updateCellsToRender, (_this$props$updateCel = this.props.updateCellsBatchingPeriod) !== null && _this$props$updateCel !== void 0 ? _this$props$updateCel : 50), this.props.viewabilityConfig && this.props.onViewableItemsChanged && this._viewabilityTuples.push({
				viewabilityHelper: new ViewabilityHelper(this.props.viewabilityConfig),
				onViewableItemsChanged: this.props.onViewableItemsChanged
			});
		}
		scrollToEnd(params) {
			const animated = params ? params.animated : !0, veryLast = this.props.getItemCount(this.props.data) - 1;
			if (veryLast < 0) return;
			const frame = this.__getFrameMetricsApprox(veryLast, this.props), offset = Math.max(0, frame.offset + frame.length + this._footerLength - this._scrollMetrics.visibleLength);
			if (this._scrollRef != null) {
				if (this._scrollRef.scrollTo == null) {
					console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");
					return;
				}
				this._scrollRef.scrollTo(horizontalOrDefault(this.props.horizontal) ? {
					x: offset,
					animated
				} : {
					y: offset,
					animated
				});
			}
		}
		scrollToIndex(params) {
			const { data, horizontal, getItemCount, getItemLayout, onScrollToIndexFailed } = this.props, { animated, index, viewOffset, viewPosition } = params;
			if (invariant(index >= 0, `scrollToIndex out of range: requested index ${index} but minimum is 0`), invariant(getItemCount(data) >= 1, `scrollToIndex out of range: item length ${getItemCount(data)} but minimum is 1`), invariant(index < getItemCount(data), `scrollToIndex out of range: requested index ${index} is out of 0 to ${getItemCount(data) - 1}`), !getItemLayout && index > this._highestMeasuredFrameIndex) {
				invariant(!!onScrollToIndexFailed, "scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, otherwise there is no way to know the location of offscreen indices or handle failures."), onScrollToIndexFailed({
					averageItemLength: this._averageCellLength,
					highestMeasuredFrameIndex: this._highestMeasuredFrameIndex,
					index
				});
				return;
			}
			const frame = this.__getFrameMetricsApprox(Math.floor(index), this.props), offset = Math.max(0, this._getOffsetApprox(index, this.props) - (viewPosition || 0) * (this._scrollMetrics.visibleLength - frame.length)) - (viewOffset || 0);
			this._scrollRef != null && this._scrollRef.scrollTo(horizontalOrDefault(horizontal) ? {
				x: offset,
				animated
			} : {
				y: offset,
				animated
			});
		}
		scrollToItem(params) {
			const { data, getItem, getItemCount, horizontal, onScrollToIndexFailed } = this.props, { animated, item, viewPosition, viewOffset } = params, index = this.props.data.indexOf(item);
			if (index !== -1) this.scrollToIndex({
				animated,
				index,
				viewOffset,
				viewPosition
			});
			else {
				const itemCount = getItemCount(data);
				for (let i = 0; i < itemCount; i++) if (getItem(data, i) === item) {
					this.scrollToIndex({
						animated,
						index: i,
						viewOffset,
						viewPosition
					});
					break;
				}
			}
		}
		scrollToOffset(params) {
			const { animated, offset } = params;
			this._scrollRef != null && this._scrollRef.scrollTo(horizontalOrDefault(this.props.horizontal) ? {
				x: offset,
				animated
			} : {
				y: offset,
				animated
			});
		}
		recordInteraction() {
			this._nestedChildLists.forEach((childList) => {
				childList.recordInteraction();
			}), this._viewabilityTuples.forEach((viewabilityTuple) => {
				viewabilityTuple.viewabilityHelper.recordInteraction();
			});
		}
		flashScrollIndicators() {
			this._scrollRef && this._scrollRef.flashScrollIndicators && this._scrollRef.flashScrollIndicators();
		}
		getScrollResponder() {
			if (this._scrollRef && this._scrollRef.getScrollResponder) return this._scrollRef.getScrollResponder();
		}
		getScrollableNode() {
			if (this._scrollRef && this._scrollRef.getScrollableNode) return this._scrollRef.getScrollableNode();
		}
		getScrollRef() {
			return this._scrollRef;
		}
		setNativeProps(props) {
			this._scrollRef && this._scrollRef.setNativeProps(props);
		}
		render() {
			const _this$props = this.props, { ListEmptyComponent, ListFooterComponent, ListHeaderComponent, data, debug, disableVirtualization, getItem, getItemCount, getItemLayout, horizontal, keyExtractor, numColumns, onEndReached, onEndReachedThreshold, onLayout, onRefresh, onScroll, onScrollBeginDrag, onScrollEndDrag, onMomentumScrollBegin, onMomentumScrollEnd, onStartReached, onStartReachedThreshold, onViewableItemsChanged, refreshing, removeClippedSubviews, renderItem, viewabilityConfig, viewabilityConfigCallbackPairs } = _this$props, restProps = _objectWithoutProperties(_this$props, _excluded$17);
			return getItemCount(data) === 0 ? ListEmptyComponent ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ListEmptyComponent, {}) : null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ForwardedScrollView, _objectSpread2(_objectSpread2({}, restProps), {}, {
				ref: this._captureRef,
				onContentSizeChange: this._onContentSizeChange,
				onLayout: this._onLayout,
				onScroll: this._onScroll,
				refreshControl: onRefresh && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RefreshControl, {
					refreshing,
					onRefresh
				}),
				scrollEventThrottle: scrollEventThrottleOrDefault(this.props.scrollEventThrottle),
				removeClippedSubviews,
				children: this._renderChildren()
			}));
		}
		_renderChildren() {
			const { data, getItem, getItemCount, renderItem } = this.props, items = [];
			for (let i = 0; i < getItemCount(data); i++) {
				const item = getItem(data, i);
				items.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)(CellRenderer, {
					cellKey: String(i),
					index: i,
					item,
					renderItem
				}, this.props.keyExtractor ? this.props.keyExtractor(item, i) : i));
			}
			return items;
		}
		__getFrameMetricsApprox(index, props) {
			return {
				length: this._averageCellLength,
				offset: this._averageCellLength * index
			};
		}
		_getOffsetApprox(index, props) {
			return this.__getFrameMetricsApprox(index, props).offset;
		}
	};
	_defineProperty(VirtualizedList, "contextType", VirtualizedListContext);
	VirtualizedList_default = VirtualizedList;
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/VirtualizeUtils/index.mjs
function keyExtractor(item, index) {
	return typeof item == "object" && (item === null || item === void 0 ? void 0 : item.key) != null ? item.key : typeof item == "object" && (item === null || item === void 0 ? void 0 : item.id) != null ? item.id : String(index);
}
var init_VirtualizeUtils = __esmMin((() => {}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/FlatList.mjs
function removeClippedSubviewsOrDefault(removeClippedSubviews) {
	return removeClippedSubviews !== null && removeClippedSubviews !== void 0 ? removeClippedSubviews : Platform.OS === "android";
}
function numColumnsOrDefault(numColumns) {
	return numColumns !== null && numColumns !== void 0 ? numColumns : 1;
}
function isArrayLike(data) {
	return typeof Object(data).length == "number";
}
var _excluded$16, FlatList$1, styles$8;
var init_FlatList = __esmMin((() => {
	init_esm$1();
	init_memoize_one_esm();
	init_deepDiffer();
	init_VirtualizedList$1();
	init_VirtualizeUtils();
	init_View();
	init_defineProperty();
	init_objectSpread2();
	init_objectWithoutProperties();
	_excluded$16 = [
		"numColumns",
		"columnWrapperStyle",
		"removeClippedSubviews",
		"strictMode"
	];
	FlatList$1 = class extends react.default.PureComponent {
		constructor(props) {
			var _super = (..._args) => (super(..._args), _defineProperty(this, "props", void 0), _defineProperty(this, "_listRef", null), _defineProperty(this, "_virtualizedListPairs", []), _defineProperty(this, "_captureRef", (ref) => {
				this._listRef = ref;
			}), _defineProperty(this, "_getItem", (data, index) => {
				const numColumns = numColumnsOrDefault(this.props.numColumns);
				if (numColumns > 1) {
					const ret = [];
					for (let kk = 0; kk < numColumns; kk++) {
						const itemIndex = index * numColumns + kk;
						if (itemIndex < data.length) {
							const item = data[itemIndex];
							ret.push(item);
						}
					}
					return ret;
				} else return data[index];
			}), _defineProperty(this, "_getItemCount", (data) => {
				if (data != null && isArrayLike(data)) {
					const numColumns = numColumnsOrDefault(this.props.numColumns);
					return numColumns > 1 ? Math.ceil(data.length / numColumns) : data.length;
				} else return 0;
			}), _defineProperty(this, "_keyExtractor", (items, index) => {
				var _this$props$keyExtrac;
				const numColumns = numColumnsOrDefault(this.props.numColumns), keyExtractor$1 = (_this$props$keyExtrac = this.props.keyExtractor) !== null && _this$props$keyExtrac !== void 0 ? _this$props$keyExtrac : keyExtractor;
				return numColumns > 1 ? (invariant(Array.isArray(items), "FlatList: Expected each item to be an array with multiple columns."), items.map((item, kk) => keyExtractor$1(item, index * numColumns + kk)).join(":")) : keyExtractor$1(items, index);
			}), _defineProperty(this, "_renderer", (ListItemComponent, renderItem, columnWrapperStyle, numColumns, extraData) => {
				const cols = numColumnsOrDefault(numColumns), render = (props) => ListItemComponent ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ListItemComponent, _objectSpread2({}, props)) : renderItem ? renderItem(props) : null, renderProp = (info) => {
					if (cols > 1) {
						const { item, index } = info;
						return invariant(Array.isArray(item), "Expected array of items with numColumns > 1"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(View$2, {
							style: [styles$8.row, columnWrapperStyle],
							children: item.map((it, kk) => {
								const element = render({
									item: it,
									index: index * cols + kk,
									separators: info.separators
								});
								return element != null ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react.default.Fragment, { children: element }, kk) : null;
							})
						});
					} else return render(info);
				};
				return ListItemComponent ? { ListItemComponent: renderProp } : { renderItem: renderProp };
			}), _defineProperty(this, "_memoizedRenderer", memoizeOne(this._renderer)), this);
			_super(props), this.props = props, this._checkProps(this.props), this.props.viewabilityConfigCallbackPairs ? this._virtualizedListPairs = this.props.viewabilityConfigCallbackPairs.map((pair) => ({
				viewabilityConfig: pair.viewabilityConfig,
				onViewableItemsChanged: this._createOnViewableItemsChanged(pair.onViewableItemsChanged)
			})) : this.props.onViewableItemsChanged && this._virtualizedListPairs.push({
				viewabilityConfig: this.props.viewabilityConfig,
				onViewableItemsChanged: this._createOnViewableItemsChanged(this.props.onViewableItemsChanged)
			});
		}
		componentDidUpdate(prevProps) {
			invariant(prevProps.numColumns === this.props.numColumns, "Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component."), invariant(prevProps.onViewableItemsChanged === this.props.onViewableItemsChanged, "Changing onViewableItemsChanged on the fly is not supported"), invariant(!deepDiffer(prevProps.viewabilityConfig, this.props.viewabilityConfig), "Changing viewabilityConfig on the fly is not supported"), invariant(prevProps.viewabilityConfigCallbackPairs === this.props.viewabilityConfigCallbackPairs, "Changing viewabilityConfigCallbackPairs on the fly is not supported"), this._checkProps(this.props);
		}
		_checkProps(props) {
			const { getItem, getItemCount, horizontal, columnWrapperStyle, onViewableItemsChanged, viewabilityConfigCallbackPairs } = props, numColumns = numColumnsOrDefault(this.props.numColumns);
			invariant(!getItem && !getItemCount, "FlatList does not support custom data formats."), numColumns > 1 ? invariant(!horizontal, "numColumns does not support horizontal.") : invariant(!columnWrapperStyle, "columnWrapperStyle not supported for single column lists"), invariant(!(onViewableItemsChanged && viewabilityConfigCallbackPairs), "FlatList does not support setting both onViewableItemsChanged and viewabilityConfigCallbackPairs.");
		}
		_pushMultiColumnViewable(arr, v) {
			var _this$props$keyExtrac2;
			const numColumns = numColumnsOrDefault(this.props.numColumns), keyExtractor$2 = (_this$props$keyExtrac2 = this.props.keyExtractor) !== null && _this$props$keyExtrac2 !== void 0 ? _this$props$keyExtrac2 : keyExtractor;
			v.item.forEach((item, ii) => {
				invariant(v.index != null, "Missing index!");
				const index = v.index * numColumns + ii;
				arr.push(_objectSpread2(_objectSpread2({}, v), {}, {
					item,
					key: keyExtractor$2(item, index),
					index
				}));
			});
		}
		_createOnViewableItemsChanged(onViewableItemsChanged) {
			return (info) => {
				const numColumns = numColumnsOrDefault(this.props.numColumns);
				if (onViewableItemsChanged) if (numColumns > 1) {
					const changed = [], viewableItems = [];
					info.viewableItems.forEach((v) => this._pushMultiColumnViewable(viewableItems, v)), info.changed.forEach((v) => this._pushMultiColumnViewable(changed, v)), onViewableItemsChanged({
						viewableItems,
						changed
					});
				} else onViewableItemsChanged(info);
			};
		}
		render() {
			const _this$props = this.props, { numColumns, columnWrapperStyle, removeClippedSubviews: _removeClippedSubviews, strictMode = !1 } = _this$props, restProps = _objectWithoutProperties(_this$props, _excluded$16), renderer = strictMode ? this._memoizedRenderer : this._renderer;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(VirtualizedList, _objectSpread2(_objectSpread2({}, restProps), {}, {
				getItem: this._getItem,
				getItemCount: this._getItemCount,
				keyExtractor: this._keyExtractor,
				ref: this._captureRef,
				viewabilityConfigCallbackPairs: this._virtualizedListPairs,
				removeClippedSubviews: removeClippedSubviewsOrDefault(_removeClippedSubviews)
			}, renderer(this.props.ListItemComponent, this.props.renderItem, columnWrapperStyle, numColumns, this.props.extraData)));
		}
	};
	styles$8 = { row: { flexDirection: "row" } };
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/components/AnimatedFlatList.mjs
var FlatList;
var init_AnimatedFlatList = __esmMin((() => {
	init_FlatList();
	init_createAnimatedComponent();
	init_objectSpread2();
	FlatList = createAnimatedComponent(react.forwardRef((props, ref) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(FlatList$1, _objectSpread2(_objectSpread2({ scrollEventThrottle: 1e-4 }, props), {}, { ref }))));
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/PixelRatio/index.mjs
var PixelRatio;
var init_PixelRatio = __esmMin((() => {
	init_Dimensions();
	PixelRatio = class PixelRatio {
		/**
		* Returns the device pixel density.
		*/
		static get() {
			return Dimensions.get("window").scale;
		}
		/**
		* No equivalent for Web
		*/
		static getFontScale() {
			return Dimensions.get("window").fontScale || PixelRatio.get();
		}
		/**
		* Converts a layout size (dp) to pixel size (px).
		* Guaranteed to return an integer number.
		*/
		static getPixelSizeForLayoutSize(layoutSize) {
			return Math.round(layoutSize * PixelRatio.get());
		}
		/**
		* Rounds a layout size (dp) to the nearest layout size that corresponds to
		* an integer number of pixels. For example, on a device with a PixelRatio
		* of 3, `PixelRatio.roundToNearestPixel(8.4) = 8.33`, which corresponds to
		* exactly (8.33 * 3) = 25 pixels.
		*/
		static roundToNearestPixel(layoutSize) {
			const ratio = PixelRatio.get();
			return Math.round(layoutSize * ratio) / ratio;
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/Image/index.mjs
function createTintColorSVG(tintColor, id) {
	return tintColor && id != null ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
		style: {
			position: "absolute",
			height: 0,
			visibility: "hidden",
			width: 0
		},
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("filter", {
			id: `tint-${id}`,
			suppressHydrationWarning: !0,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("feFlood", { floodColor: `${tintColor}` }, tintColor), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("feComposite", {
				in2: "SourceAlpha",
				operator: "atop"
			})]
		}) })
	}) : null;
}
function getFlatStyle(style, blurRadius, filterId) {
	const flatStyle = StyleSheet.flatten(style), { filter, resizeMode, shadowOffset, tintColor } = flatStyle, filters = [];
	let _filter = null;
	if (filter && filters.push(filter), blurRadius && filters.push(`blur(${blurRadius}px)`), shadowOffset) {
		const shadowString = createBoxShadowValue(flatStyle);
		shadowString && filters.push(`drop-shadow(${shadowString})`);
	}
	return tintColor && filterId != null && filters.push(`url(#tint-${filterId})`), filters.length > 0 && (_filter = filters.join(" ")), delete flatStyle.blurRadius, delete flatStyle.shadowColor, delete flatStyle.shadowOpacity, delete flatStyle.shadowOffset, delete flatStyle.shadowRadius, delete flatStyle.tintColor, delete flatStyle.overlayColor, delete flatStyle.resizeMode, [
		flatStyle,
		resizeMode,
		_filter,
		tintColor
	];
}
function resolveAssetDimensions(source) {
	if (typeof source == "number") {
		const { height, width } = getAssetByID(source);
		return {
			height,
			width
		};
	} else if (source != null && !Array.isArray(source) && typeof source == "object") {
		const { height, width } = source;
		return {
			height,
			width
		};
	}
}
function resolveAssetUri(source) {
	let uri = null;
	if (typeof source == "number") {
		const asset = getAssetByID(source);
		let scale = asset.scales[0];
		if (asset.scales.length > 1) {
			const preferredScale = PixelRatio.get();
			scale = asset.scales.reduce((prev, curr) => Math.abs(curr - preferredScale) < Math.abs(prev - preferredScale) ? curr : prev);
		}
		const scaleSuffix = scale !== 1 ? `@${scale}x` : "";
		uri = asset ? `${asset.httpServerLocation}/${asset.name}${scaleSuffix}.${asset.type}` : "";
	} else typeof source == "string" ? uri = source : source && typeof source.uri == "string" && (uri = source.uri);
	if (uri) {
		const match = uri.match(svgDataUriPattern);
		if (match) {
			const [, prefix, svg] = match;
			return `${prefix}${encodeURIComponent(svg)}`;
		}
	}
	return uri;
}
var _excluded$15, ERRORED, LOADED, LOADING, IDLE, _filterId, svgDataUriPattern, Image, ImageWithStatics, styles$7, resizeModeStyles;
var init_Image = __esmMin((() => {
	init_esm$1();
	init_createElement();
	init_PixelRatio();
	init_View();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$15 = [
		"accessibilityLabel",
		"blurRadius",
		"defaultSource",
		"draggable",
		"onError",
		"onLayout",
		"onLoad",
		"onLoadEnd",
		"onLoadStart",
		"pointerEvents",
		"source",
		"style"
	];
	ERRORED = "ERRORED", LOADED = "LOADED", LOADING = "LOADING", IDLE = "IDLE";
	_filterId = 0;
	svgDataUriPattern = /^(data:image\/svg\+xml;utf8,)(.*)/;
	Image = react.forwardRef((props, ref) => {
		const { accessibilityLabel, blurRadius, defaultSource, draggable, onError, onLayout, onLoad, onLoadEnd, onLoadStart, pointerEvents, source, style } = props, rest = _objectWithoutProperties(props, _excluded$15);
		const [state, updateState] = react.useState(() => {
			const uri2 = resolveAssetUri(source);
			return uri2 != null && ImageLoader.has(uri2) ? LOADED : IDLE;
		}), [layout, updateLayout] = react.useState({}), hasTextAncestor = react.useContext(TextAncestorContext), hiddenImageRef = react.useRef(null), filterRef = react.useRef(_filterId++), requestRef = react.useRef(null), shouldDisplaySource = state === LOADED || state === LOADING && defaultSource == null, [flatStyle, _resizeMode, filter, tintColor] = getFlatStyle({}, blurRadius, filterRef.current), resizeMode = props.resizeMode || _resizeMode || "cover", selectedSource = shouldDisplaySource ? source : defaultSource, displayImageUri = resolveAssetUri(selectedSource), imageSizeStyle = resolveAssetDimensions(selectedSource), backgroundImage = displayImageUri ? `url("${displayImageUri}")` : null, backgroundSize = getBackgroundSize(), hiddenImage = displayImageUri ? createElement("img", {
			alt: accessibilityLabel || "",
			style: styles$7.accessibilityImage$raw,
			draggable: draggable || !1,
			ref: hiddenImageRef,
			src: displayImageUri
		}) : null;
		function getBackgroundSize() {
			if (hiddenImageRef.current != null && (resizeMode === "center" || resizeMode === "repeat")) {
				const { naturalHeight, naturalWidth } = hiddenImageRef.current, { height, width } = layout;
				if (naturalHeight && naturalWidth && height && width) {
					const scaleFactor = Math.min(1, width / naturalWidth, height / naturalHeight);
					return `${Math.ceil(scaleFactor * naturalWidth)}px ${Math.ceil(scaleFactor * naturalHeight)}px`;
				}
			}
		}
		function handleLayout(e) {
			if (resizeMode === "center" || resizeMode === "repeat" || onLayout) {
				const { layout: layout2 } = e.nativeEvent;
				onLayout && onLayout(e), updateLayout(layout2);
			}
		}
		const uri = resolveAssetUri(source);
		return react.useEffect(() => {
			abortPendingRequest(), uri != null && (updateState(LOADING), onLoadStart && onLoadStart(), requestRef.current = ImageLoader.load(uri, function(e) {
				updateState(LOADED), onLoad && onLoad(e), onLoadEnd && onLoadEnd();
			}, function() {
				updateState(ERRORED), onError && onError({ nativeEvent: { error: `Failed to load resource ${uri} (404)` } }), onLoadEnd && onLoadEnd();
			}));
			function abortPendingRequest() {
				requestRef.current != null && (ImageLoader.abort(requestRef.current), requestRef.current = null);
			}
			return abortPendingRequest;
		}, [
			uri,
			requestRef,
			updateState,
			onError,
			onLoad,
			onLoadEnd,
			onLoadStart
		]), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(View$2, _objectSpread2(_objectSpread2({}, rest), {}, {
			"aria-label": accessibilityLabel,
			onLayout: handleLayout,
			pointerEvents,
			ref,
			style: [
				style,
				styles$7.root,
				hasTextAncestor && styles$7.inline,
				imageSizeStyle,
				flatStyle
			],
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(View$2, {
					style: [
						...[].concat(styles$7.image),
						resizeModeStyles[resizeMode],
						{
							backgroundImage,
							filter
						},
						backgroundSize != null && { backgroundSize }
					],
					suppressHydrationWarning: !0
				}),
				hiddenImage,
				createTintColorSVG(tintColor, filterRef.current)
			]
		}));
	});
	Image.displayName = "Image";
	ImageWithStatics = Image;
	ImageWithStatics.getSize = function(uri, success, failure) {
		ImageLoader.getSize(uri, success, failure);
	};
	ImageWithStatics.prefetch = function(uri) {
		return ImageLoader.prefetch(uri);
	};
	ImageWithStatics.queryCache = function(uris) {
		return ImageLoader.queryCache(uris);
	};
	styles$7 = StyleSheet.create({
		root: {
			flexBasis: "auto",
			overflow: "hidden",
			zIndex: 0
		},
		inline: { display: "inline-flex" },
		image: _objectSpread2(_objectSpread2({}, StyleSheet.absoluteFillObject), {}, {
			backgroundColor: "transparent",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			height: "100%",
			width: "100%",
			zIndex: -1
		}),
		accessibilityImage$raw: _objectSpread2(_objectSpread2({}, StyleSheet.absoluteFillObject), {}, {
			height: "100%",
			opacity: 0,
			width: "100%",
			zIndex: -1
		})
	}), resizeModeStyles = StyleSheet.create({
		center: { backgroundSize: "auto" },
		contain: { backgroundSize: "contain" },
		cover: { backgroundSize: "cover" },
		none: {
			backgroundPosition: "0",
			backgroundSize: "auto"
		},
		repeat: {
			backgroundPosition: "0",
			backgroundRepeat: "repeat",
			backgroundSize: "auto"
		},
		stretch: { backgroundSize: "100% 100%" }
	});
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/components/AnimatedImage.mjs
var AnimatedImage;
var init_AnimatedImage = __esmMin((() => {
	init_Image();
	init_createAnimatedComponent();
	AnimatedImage = createAnimatedComponent(ImageWithStatics);
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/components/AnimatedScrollView.mjs
var ScrollView;
var init_AnimatedScrollView = __esmMin((() => {
	init_ScrollView();
	init_createAnimatedComponent();
	init_objectSpread2();
	ScrollView = createAnimatedComponent(react.forwardRef((props, ref) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ForwardedScrollView, _objectSpread2(_objectSpread2({ scrollEventThrottle: 1e-4 }, props), {}, { ref }))));
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/VirtualizedSectionList/index.mjs
var _excluded$14, defaultProps, VirtualizedSectionList;
var init_VirtualizedSectionList = __esmMin((() => {
	init_VirtualizedList$1();
	init_defineProperty();
	init_objectSpread2();
	init_objectWithoutProperties();
	_excluded$14 = [
		"ItemSeparatorComponent",
		"SectionSeparatorComponent",
		"renderItem",
		"renderSectionFooter",
		"renderSectionHeader",
		"sections",
		"stickySectionHeadersEnabled"
	];
	defaultProps = {
		data: [],
		key: null,
		renderItem: null,
		ItemSeparatorComponent: null,
		keyExtractor: null
	};
	VirtualizedSectionList = class extends react.PureComponent {
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "_keyExtractor", (item, index) => (this.props.keyExtractor || this._defaultKeyExtractor)(item, index));
			_defineProperty(this, "_defaultKeyExtractor", (item, index) => item.key != null ? item.key : String(index));
			_defineProperty(this, "_captureRef", (ref) => {
				this._listRef = ref;
			});
			_defineProperty(this, "_renderItem", (itemCount) => ({ item, index }) => index === 0 || index === itemCount - 1 ? null : (this.props.renderItem || this._defaultRenderItem)({
				item,
				index,
				section: item
			}));
			_defineProperty(this, "_defaultRenderItem", ({ item }) => null);
			_defineProperty(this, "_onViewableItemsChanged", (info) => {
				this.props.onViewableItemsChanged && this.props.onViewableItemsChanged(info);
			});
		}
		scrollToLocation(params) {
			let index = params.itemIndex;
			for (let i = 0; i < params.sectionIndex; i++) index += this.props.getItemCount(this.props.sections[i].data) + 2;
			let viewOffset = params.viewOffset || 0;
			if (this._listRef == null) return;
			if (params.itemIndex > 0 && this.props.stickySectionHeadersEnabled) {
				const frame = this._listRef.__getFrameMetricsApprox(index - params.itemIndex, this._listRef.props);
				viewOffset += frame.length;
			}
			const toIndexParams = _objectSpread2(_objectSpread2({}, params), {}, {
				viewOffset,
				index
			});
			this._listRef.scrollToIndex(toIndexParams);
		}
		getListRef() {
			return this._listRef;
		}
		render() {
			const _this$props = this.props, { ItemSeparatorComponent, SectionSeparatorComponent, renderItem: _renderItem, renderSectionFooter, renderSectionHeader, sections: _sections, stickySectionHeadersEnabled } = _this$props, passThroughProps = _objectWithoutProperties(_this$props, _excluded$14), listHeaderOffset = this.props.ListHeaderComponent ? 1 : 0, stickyHeaderIndices = this.props.stickySectionHeadersEnabled ? [] : void 0;
			let itemCount = 0;
			for (const section of this.props.sections) stickyHeaderIndices === null || stickyHeaderIndices === void 0 || stickyHeaderIndices.push(itemCount + listHeaderOffset), itemCount += 2, itemCount += this.props.getItemCount(section.data);
			const renderItem = this._renderItem(itemCount);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(VirtualizedList, _objectSpread2(_objectSpread2({}, passThroughProps), {}, {
				keyExtractor: this._keyExtractor,
				stickyHeaderIndices,
				renderItem,
				data: this.props.sections,
				getItem: (sections, index) => this._getItem(this.props, sections, index),
				getItemCount: () => itemCount,
				onViewableItemsChanged: this.props.onViewableItemsChanged ? this._onViewableItemsChanged : void 0,
				ref: this._captureRef
			}));
		}
		_getItem(props, sections, index) {
			if (!sections) return null;
			let itemIdx = index - 1;
			for (let i = 0; i < sections.length; i++) {
				const section = sections[i], sectionData = section.data, itemCount = props.getItemCount(sectionData);
				if (itemIdx === -1 || itemIdx === itemCount) return section;
				if (itemIdx < itemCount) return props.getItem(sectionData, itemIdx);
				itemIdx -= itemCount + 2;
			}
			return null;
		}
	};
	VirtualizedSectionList.defaultProps = defaultProps;
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/SectionList/index.mjs
var _excluded$13, SectionList$1, SectionList_default;
var init_SectionList$1 = __esmMin((() => {
	init_VirtualizedSectionList();
	init_defineProperty();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$13 = ["sections"];
	SectionList$1 = class extends react.PureComponent {
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "_captureRef", (ref) => {
				this._wrapperListRef = ref;
			});
			_defineProperty(this, "_getItem", (sections, index) => {
				if (!sections) return null;
				const section = sections[index];
				return section && section.data ? section.data[0] : null;
			});
			_defineProperty(this, "_getItemCount", (sections) => sections ? sections.length : 0);
			_defineProperty(this, "_keyExtractor", (item, index) => (this.props.keyExtractor || this._defaultKeyExtractor)(item, index));
			_defineProperty(this, "_defaultKeyExtractor", (item, index) => item.key != null ? item.key : String(index));
			_defineProperty(this, "_renderItem", ({ item, index, section }) => (this.props.renderItem || this._defaultRenderItem)({
				item,
				index,
				section
			}));
			_defineProperty(this, "_defaultRenderItem", ({ item }) => null);
		}
		scrollToLocation(params) {
			this._wrapperListRef != null && this._wrapperListRef.scrollToLocation(params);
		}
		recordInteraction() {
			const listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
			listRef && listRef.recordInteraction();
		}
		flashScrollIndicators() {
			const listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
			listRef && listRef.flashScrollIndicators();
		}
		getScrollResponder() {
			const listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
			if (listRef) return listRef.getScrollResponder();
		}
		getScrollableNode() {
			const listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
			if (listRef) return listRef.getScrollableNode();
		}
		setNativeProps(props) {
			const listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
			listRef && listRef.setNativeProps(props);
		}
		render() {
			const _this$props = this.props, { sections } = _this$props;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(VirtualizedSectionList, _objectSpread2(_objectSpread2({}, _objectWithoutProperties(_this$props, _excluded$13)), {}, {
				sections,
				ref: this._captureRef,
				getItem: this._getItem,
				getItemCount: this._getItemCount,
				keyExtractor: this._keyExtractor,
				renderItem: this._renderItem
			}));
		}
	};
	SectionList_default = SectionList$1;
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/SectionList.mjs
var init_SectionList = __esmMin((() => {
	init_SectionList$1();
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/components/AnimatedSectionList.mjs
var SectionList;
var init_AnimatedSectionList = __esmMin((() => {
	init_SectionList();
	init_createAnimatedComponent();
	init_objectSpread2();
	SectionList = createAnimatedComponent(react.forwardRef((props, ref) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionList_default, _objectSpread2(_objectSpread2({ scrollEventThrottle: 1e-4 }, props), {}, { ref }))));
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/Text/index.mjs
var _excluded$12, pickProps$2, Text$2, textStyle, styles$6;
var init_Text = __esmMin((() => {
	init_esm$1();
	init_createElement();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$12 = [
		"hrefAttrs",
		"numberOfLines",
		"onClick",
		"onLayout",
		"onPress",
		"onMoveShouldSetResponder",
		"onMoveShouldSetResponderCapture",
		"onResponderEnd",
		"onResponderGrant",
		"onResponderMove",
		"onResponderReject",
		"onResponderRelease",
		"onResponderStart",
		"onResponderTerminate",
		"onResponderTerminationRequest",
		"onScrollShouldSetResponder",
		"onScrollShouldSetResponderCapture",
		"onSelectionChangeShouldSetResponder",
		"onSelectionChangeShouldSetResponderCapture",
		"onStartShouldSetResponder",
		"onStartShouldSetResponderCapture",
		"selectable"
	];
	pickProps$2 = (props) => pick(props, forwardPropsListText), Text$2 = react.forwardRef((props, forwardedRef) => {
		const { hrefAttrs, numberOfLines, onClick, onLayout, onPress, onMoveShouldSetResponder, onMoveShouldSetResponderCapture, onResponderEnd, onResponderGrant, onResponderMove, onResponderReject, onResponderRelease, onResponderStart, onResponderTerminate, onResponderTerminationRequest, onScrollShouldSetResponder, onScrollShouldSetResponderCapture, onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder, onStartShouldSetResponderCapture, selectable } = props, rest = _objectWithoutProperties(props, _excluded$12), hasTextAncestor = react.useContext(TextAncestorContext), hostRef = react.useRef(null), { direction: contextDirection } = useLocaleContext();
		useElementLayout(hostRef, onLayout), useResponderEvents(hostRef, {
			onMoveShouldSetResponder,
			onMoveShouldSetResponderCapture,
			onResponderEnd,
			onResponderGrant,
			onResponderMove,
			onResponderReject,
			onResponderRelease,
			onResponderStart,
			onResponderTerminate,
			onResponderTerminationRequest,
			onScrollShouldSetResponder,
			onScrollShouldSetResponderCapture,
			onSelectionChangeShouldSetResponder,
			onSelectionChangeShouldSetResponderCapture,
			onStartShouldSetResponder,
			onStartShouldSetResponderCapture
		});
		const handleClick = react.useCallback((e) => {
			onClick != null ? onClick(e) : onPress != null && (e.stopPropagation(), onPress(e));
		}, [onClick, onPress]);
		let component = hasTextAncestor ? "span" : "div";
		const langDirection = props.lang != null ? getLocaleDirection(props.lang) : null, componentDirection = props.dir || langDirection, writingDirection = componentDirection || contextDirection, supportedProps = pickProps$2(rest);
		if (supportedProps.dir = componentDirection, hasTextAncestor || (supportedProps.dir = componentDirection !== null && componentDirection !== void 0 ? componentDirection : "auto"), (onClick || onPress) && (supportedProps.onClick = handleClick), supportedProps.style = [
			numberOfLines != null && numberOfLines > 1 && { WebkitLineClamp: numberOfLines },
			hasTextAncestor === !0 ? styles$6.textHasAncestor$raw : styles$6.text,
			numberOfLines === 1 && styles$6.textOneLine,
			numberOfLines != null && numberOfLines > 1 && styles$6.textMultiLine,
			props.style,
			selectable === !0 && styles$6.selectable,
			selectable === !1 && styles$6.notSelectable,
			onPress && styles$6.pressable
		], props.href != null && (component = "a", hrefAttrs != null)) {
			const { download, rel, target } = hrefAttrs;
			download != null && (supportedProps.download = download), rel != null && (supportedProps.rel = rel), typeof target == "string" && (supportedProps.target = target.charAt(0) !== "_" ? "_" + target : target);
		}
		supportedProps.ref = useMergeRefs$1(hostRef, usePlatformMethods(supportedProps), forwardedRef);
		const element = useCreateElement(component, supportedProps, { writingDirection });
		return hasTextAncestor ? element : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TextAncestorContext.Provider, {
			value: !0,
			children: element
		});
	});
	Text$2.displayName = "Text";
	textStyle = {
		backgroundColor: "transparent",
		border: "0 solid black",
		boxSizing: "border-box",
		color: "black",
		display: "inline",
		font: "14px System",
		listStyle: "none",
		margin: 0,
		padding: 0,
		textAlign: "inherit",
		textDecoration: "none",
		whiteSpace: "pre-wrap",
		wordWrap: "break-word"
	}, styles$6 = {
		text: textStyle,
		textHasAncestor$raw: _objectSpread2(_objectSpread2({}, textStyle), {}, {
			color: "inherit",
			font: "inherit",
			whiteSpace: "inherit"
		}),
		textOneLine: {
			maxWidth: "100%",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
			wordWrap: "normal"
		},
		textMultiLine: {
			display: "-webkit-box",
			maxWidth: "100%",
			overflow: "hidden",
			textOverflow: "ellipsis",
			WebkitBoxOrient: "vertical"
		},
		notSelectable: { userSelect: "none" },
		selectable: { userSelect: "text" },
		pressable: { cursor: "pointer" }
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/components/AnimatedText.mjs
var AnimatedText;
var init_AnimatedText = __esmMin((() => {
	init_Text();
	init_createAnimatedComponent();
	AnimatedText = createAnimatedComponent(Text$2);
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/components/AnimatedView.mjs
var AnimatedView;
var init_AnimatedView = __esmMin((() => {
	init_View();
	init_createAnimatedComponent();
	AnimatedView = createAnimatedComponent(View$2);
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/Animated/Animated.mjs
var Animated, AnimatedExports, Animated_default;
var init_Animated = __esmMin((() => {
	init_esm$1();
	init_AnimatedImplementation();
	init_AnimatedMock();
	init_AnimatedFlatList();
	init_AnimatedImage();
	init_AnimatedScrollView();
	init_AnimatedSectionList();
	init_AnimatedText();
	init_AnimatedView();
	init_objectSpread2();
	Animated = Platform.isTesting ? AnimatedMockExports : AnimatedImplementationExports, AnimatedExports = _objectSpread2({
		FlatList,
		Image: AnimatedImage,
		ScrollView,
		SectionList,
		Text: AnimatedText,
		View: AnimatedView
	}, Animated);
	Animated_default = AnimatedExports;
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/AccessibilityInfo/index.mjs
function isScreenReaderEnabled() {
	return new Promise((resolve, reject) => {
		resolve(!0);
	});
}
function isReduceMotionEnabled() {
	return new Promise((resolve, reject) => {
		resolve(prefersReducedMotionMedia ? prefersReducedMotionMedia.matches : !0);
	});
}
function addChangeListener(fn) {
	prefersReducedMotionMedia != null && (prefersReducedMotionMedia.addEventListener != null ? prefersReducedMotionMedia.addEventListener("change", fn) : prefersReducedMotionMedia.addListener(fn));
}
function removeChangeListener(fn) {
	prefersReducedMotionMedia != null && (prefersReducedMotionMedia.removeEventListener != null ? prefersReducedMotionMedia.removeEventListener("change", fn) : prefersReducedMotionMedia.removeListener(fn));
}
var prefersReducedMotionMedia, handlers, AccessibilityInfo;
var init_AccessibilityInfo = __esmMin((() => {
	init_esm$1();
	prefersReducedMotionMedia = canUseDOM$1 && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
	handlers = {}, AccessibilityInfo = {
		isScreenReaderEnabled,
		isReduceMotionEnabled,
		fetch: isScreenReaderEnabled,
		addEventListener: function(eventName, handler) {
			if (eventName === "reduceMotionChanged") {
				if (!prefersReducedMotionMedia) return;
				const listener = (event) => {
					handler(event.matches);
				};
				addChangeListener(listener), handlers[handler] = listener;
			}
			return { remove: () => AccessibilityInfo.removeEventListener(eventName, handler) };
		},
		setAccessibilityFocus: function(reactTag) {},
		announceForAccessibility: function(announcement) {},
		removeEventListener: function(eventName, handler) {
			if (eventName === "reduceMotionChanged") {
				const listener = handlers[handler];
				if (!listener || !prefersReducedMotionMedia) return;
				removeChangeListener(listener);
			}
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/Alert/index.mjs
var Alert;
var init_Alert = __esmMin((() => {
	Alert = class {
		static alert() {}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/Appearance/index.mjs
function getQuery() {
	return canUseDOM$1 && window.matchMedia != null ? window.matchMedia("(prefers-color-scheme: dark)") : null;
}
var query, listenerMapping, Appearance;
var init_Appearance = __esmMin((() => {
	init_esm$1();
	query = getQuery(), listenerMapping = /* @__PURE__ */ new WeakMap(), Appearance = {
		getColorScheme() {
			return query && query.matches ? "dark" : "light";
		},
		addChangeListener(listener) {
			let mappedListener = listenerMapping.get(listener);
			mappedListener || (mappedListener = ({ matches }) => {
				listener({ colorScheme: matches ? "dark" : "light" });
			}, listenerMapping.set(listener, mappedListener)), query && query.addListener(mappedListener);
			function remove() {
				const mappedListener2 = listenerMapping.get(listener);
				query && mappedListener2 && query.removeListener(mappedListener2), listenerMapping.delete(listener);
			}
			return { remove };
		}
	};
}));
//#endregion
//#region ../../../node_modules/react-dom/cjs/react-dom.production.js
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	require("react").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	exports.unstable_batchedUpdates = function(fn, a) {
		return fn(a);
	};
}));
//#endregion
//#region ../../../node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production();
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/AppRegistry/AppContainer.mjs
var RootTagContext$1, AppContainer, styles$5;
var init_AppContainer = __esmMin((() => {
	init_esm$1();
	init_View();
	RootTagContext$1 = react.createContext(null), AppContainer = react.forwardRef((props, forwardedRef) => {
		const { children, WrapperComponent } = props;
		let innerView = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(View$2, {
			pointerEvents: "box-none",
			style: styles$5.appContainer,
			children
		}, 1);
		return WrapperComponent && (innerView = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(WrapperComponent, { children: innerView })), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RootTagContext$1.Provider, {
			value: props.rootTag,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(View$2, {
				pointerEvents: "box-none",
				ref: forwardedRef,
				style: styles$5.appContainer,
				children: innerView
			})
		});
	});
	AppContainer.displayName = "AppContainer";
	styles$5 = StyleSheet.create({ appContainer: { flex: 1 } });
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/AppRegistry/renderApplication.mjs
function renderApplication(RootComponent, WrapperComponent = null, callback = () => {}, options) {
	const { hydrate: shouldHydrate, initialProps, mode, rootTag } = options, renderFn = shouldHydrate ? mode === "concurrent" ? hydrate : hydrateLegacy : mode === "concurrent" ? render : renderLegacy;
	return invariant(rootTag, "Expect to have a valid rootTag, instead got ", rootTag), renderFn(/* @__PURE__ */ (0, react_jsx_runtime.jsx)(AppContainer, {
		WrapperComponent,
		ref: callback,
		rootTag,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RootComponent, _objectSpread2({}, initialProps))
	}), rootTag);
}
function getApplication(RootComponent, initialProps, WrapperComponent) {
	return {
		element: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AppContainer, {
			WrapperComponent,
			rootTag: {},
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RootComponent, _objectSpread2({}, initialProps))
		}),
		getStyleElement: (props) => {
			const sheet = StyleSheet.getSheet();
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("style", _objectSpread2(_objectSpread2({}, props), {}, {
				dangerouslySetInnerHTML: { __html: sheet.textContent },
				id: sheet.id
			}));
		}
	};
}
var init_renderApplication = __esmMin((() => {
	init_esm$1();
	init_render();
	init_AppContainer();
	init_objectSpread2();
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/AppRegistry/index.mjs
var import_react_dom$1, emptyObject$2, runnables, componentProviderInstrumentationHook, wrapperComponentProvider, AppRegistry;
var init_AppRegistry = __esmMin((() => {
	import_react_dom$1 = require_react_dom();
	init_esm$1();
	init_renderApplication();
	emptyObject$2 = {}, runnables = {};
	componentProviderInstrumentationHook = (component) => component();
	AppRegistry = class AppRegistry {
		static getAppKeys() {
			return Object.keys(runnables);
		}
		static getApplication(appKey, appParameters) {
			var _runnables$appKey, _runnables$appKey$get;
			return invariant(runnables[appKey] && runnables[appKey].getApplication, `Application ${appKey} has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.`), (_runnables$appKey = runnables[appKey]) === null || _runnables$appKey === void 0 || (_runnables$appKey$get = _runnables$appKey.getApplication) === null || _runnables$appKey$get === void 0 ? void 0 : _runnables$appKey$get.call(_runnables$appKey, appParameters);
		}
		static registerComponent(appKey, componentProvider) {
			return runnables[appKey] = {
				getApplication: (appParameters) => getApplication(componentProviderInstrumentationHook(componentProvider), appParameters ? appParameters.initialProps : emptyObject$2, wrapperComponentProvider && wrapperComponentProvider(appParameters)),
				run: (appParameters) => renderApplication(componentProviderInstrumentationHook(componentProvider), wrapperComponentProvider && wrapperComponentProvider(appParameters), appParameters.callback, {
					hydrate: appParameters.hydrate || !1,
					initialProps: appParameters.initialProps || emptyObject$2,
					mode: appParameters.mode || "legacy",
					rootTag: appParameters.rootTag
				})
			}, appKey;
		}
		static registerConfig(config) {
			config.forEach(({ appKey, component, run }) => {
				run ? AppRegistry.registerRunnable(appKey, run) : (invariant(component, "No component provider passed in"), AppRegistry.registerComponent(appKey, component));
			});
		}
		static registerRunnable(appKey, run) {
			return runnables[appKey] = { run }, appKey;
		}
		static runApplication(appKey, appParameters) {
			return invariant(runnables[appKey] && runnables[appKey].run, `Application "${appKey}" has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.`), runnables[appKey].run(appParameters);
		}
		static setComponentProviderInstrumentationHook(hook) {
			componentProviderInstrumentationHook = hook;
		}
		static setWrapperComponentProvider(provider) {
			wrapperComponentProvider = provider;
		}
		static unmountApplicationComponentAtRootTag(rootTag) {
			(0, import_react_dom$1.unmountComponentAtNode)(rootTag);
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/AppState/index.mjs
var isPrefixed, EVENT_TYPES, VISIBILITY_CHANGE_EVENT, VISIBILITY_STATE_PROPERTY, AppStates, EventEmitter, hasBoundVisibilityChangeEvent, changeEmitter, AppState;
var init_AppState = __esmMin((() => {
	init_esm$1();
	init_defineProperty();
	isPrefixed = canUseDOM$1 && !document.hasOwnProperty("hidden") && document.hasOwnProperty("webkitHidden"), EVENT_TYPES = ["change", "memoryWarning"], VISIBILITY_CHANGE_EVENT = isPrefixed ? "webkitvisibilitychange" : "visibilitychange", VISIBILITY_STATE_PROPERTY = isPrefixed ? "webkitVisibilityState" : "visibilityState", AppStates = {
		BACKGROUND: "background",
		ACTIVE: "active"
	};
	EventEmitter = class {
		constructor() {
			_defineProperty(this, "listeners", {});
		}
		addListener(type, handler) {
			var _this$listeners, _this$listeners$type;
			(_this$listeners$type = (_this$listeners = this.listeners)[type]) !== null && _this$listeners$type !== void 0 || (_this$listeners[type] = /* @__PURE__ */ new Set()), this.listeners[type].add(handler);
		}
		emit(type, state) {
			var _this$listeners$type2;
			(_this$listeners$type2 = this.listeners[type]) === null || _this$listeners$type2 === void 0 || _this$listeners$type2.forEach((cb) => cb(state));
		}
		removeListener(type, handler) {
			var _this$listeners$type3;
			(_this$listeners$type3 = this.listeners[type]) === null || _this$listeners$type3 === void 0 || _this$listeners$type3.delete(handler);
		}
	};
	hasBoundVisibilityChangeEvent = !1;
	changeEmitter = new EventEmitter();
	AppState = class AppState {
		static get currentState() {
			if (!AppState.isAvailable) return AppStates.ACTIVE;
			switch (document[VISIBILITY_STATE_PROPERTY]) {
				case "hidden":
				case "prerender":
				case "unloaded": return AppStates.BACKGROUND;
				default: return AppStates.ACTIVE;
			}
		}
		static addEventListener(type, handler) {
			if (AppState.isAvailable && (invariant(EVENT_TYPES.indexOf(type) !== -1, "Trying to subscribe to unknown event: \"%s\"", type), type === "change")) return hasBoundVisibilityChangeEvent || (hasBoundVisibilityChangeEvent = !0, document.addEventListener(VISIBILITY_CHANGE_EVENT, () => {
				changeEmitter && changeEmitter.emit("change", AppState.currentState);
			}, !1)), changeEmitter.addListener(type, handler);
		}
	};
	_defineProperty(AppState, "isAvailable", canUseDOM$1 && document[VISIBILITY_STATE_PROPERTY]);
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/BackHandler/index.mjs
function emptyFunction$1() {}
var BackHandler;
var init_BackHandler = __esmMin((() => {
	BackHandler = {
		exitApp: emptyFunction$1,
		addEventListener() {
			return { remove: emptyFunction$1 };
		},
		removeEventListener: emptyFunction$1
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/Clipboard/index.mjs
var clipboardAvailable, Clipboard;
var init_Clipboard = __esmMin((() => {
	Clipboard = class {
		static isAvailable() {
			return clipboardAvailable === void 0 && (clipboardAvailable = typeof document.queryCommandSupported == "function" && document.queryCommandSupported("copy")), clipboardAvailable;
		}
		static getString() {
			return Promise.resolve("");
		}
		static setString(text) {
			let success = !1;
			const body = document.body;
			if (body) {
				const node = document.createElement("span");
				node.textContent = text, node.style.opacity = "0", node.style.position = "absolute", node.style.whiteSpace = "pre-wrap", node.style.userSelect = "auto", body.appendChild(node);
				const selection = window.getSelection();
				selection.removeAllRanges();
				const range = document.createRange();
				range.selectNodeContents(node), selection.addRange(range);
				try {
					document.execCommand("copy"), success = !0;
				} catch (_unused) {}
				selection.removeAllRanges(), body.removeChild(node);
			}
			return success;
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/DeviceEmitter.mjs
var DeviceEmitter;
var init_DeviceEmitter = __esmMin((() => {
	init__EventEmitter();
	DeviceEmitter = new EventEmitter$1();
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/DeviceInfo/index.mjs
var DeviceInfo;
var init_DeviceInfo = __esmMin((() => {
	init_esm$1();
	init_Dimensions();
	DeviceInfo = {
		Dimensions: {
			get windowPhysicalPixels() {
				const { width, height, fontScale, scale } = Dimensions.get("window");
				return {
					width: width * scale,
					height: height * scale,
					scale,
					fontScale
				};
			},
			get screenPhysicalPixels() {
				const { width, height, fontScale, scale } = Dimensions.get("screen");
				return {
					width: width * scale,
					height: height * scale,
					scale,
					fontScale
				};
			}
		},
		get locale() {
			if (canUseDOM$1) return navigator.languages ? navigator.languages[0] : navigator.language;
		},
		get totalMemory() {
			return canUseDOM$1 ? navigator.deviceMemory : void 0;
		},
		get userAgent() {
			return canUseDOM$1 ? navigator.userAgent : "";
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/I18nManager/index.mjs
var I18nManager;
var init_I18nManager = __esmMin((() => {
	I18nManager = {
		allowRTL() {},
		forceRTL() {},
		getConstants() {
			return { isRTL: !1 };
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/Keyboard/index.mjs
var Keyboard;
var init_Keyboard = __esmMin((() => {
	init_esm$1();
	Keyboard = {
		addListener() {
			return { remove: () => {} };
		},
		dismiss() {
			dismissKeyboard();
		},
		removeAllListeners() {},
		removeListener() {}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/Linking/index.mjs
var initialURL, Linking, open, LinkingInstance;
var init_Linking = __esmMin((() => {
	init_esm$1();
	init_defineProperty();
	initialURL = canUseDOM$1 ? window.location.href : "";
	Linking = class {
		constructor() {
			_defineProperty(
				this,
				/**
				* An object mapping of event name
				* and all the callbacks subscribing to it
				*/
				"_eventCallbacks",
				{}
			);
			_defineProperty(
				this,
				/**
				* Adds a event listener for the specified event. The callback will be called when the
				* said event is dispatched.
				*/
				"addEventListener",
				(event, callback) => {
					if (!this._eventCallbacks[event]) {
						this._eventCallbacks[event] = [callback];
						return;
					}
					this._eventCallbacks[event].push(callback);
				}
			);
			_defineProperty(
				this,
				/**
				* Removes a previously added event listener for the specified event. The callback must
				* be the same object as the one passed to `addEventListener`.
				*/
				"removeEventListener",
				(event, callback) => {
					const filteredCallbacks = this._eventCallbacks[event].filter((c) => c.toString() !== callback.toString());
					this._eventCallbacks[event] = filteredCallbacks;
				}
			);
		}
		_dispatchEvent(event, ...data) {
			const listeners = this._eventCallbacks[event];
			listeners != null && Array.isArray(listeners) && listeners.map((listener) => {
				listener(...data);
			});
		}
		canOpenURL() {
			return Promise.resolve(!0);
		}
		getInitialURL() {
			return Promise.resolve(initialURL);
		}
		/**
		* Try to open the given url in a secure fashion. The method returns a Promise object.
		* If a target is passed (including undefined) that target will be used, otherwise '_blank'.
		* If the url opens, the promise is resolved. If not, the promise is rejected.
		* Dispatches the `onOpen` event if `url` is opened successfully.
		*/
		openURL(url, target) {
			arguments.length === 1 && (target = "_blank");
			try {
				return open(url, target), this._dispatchEvent("onOpen", url), Promise.resolve();
			} catch (e) {
				return Promise.reject(e);
			}
		}
		_validateURL(url) {
			invariant(typeof url == "string", "Invalid URL: should be a string. Was: " + url), invariant(url, "Invalid URL: cannot be empty");
		}
	};
	open = (url, target) => {
		if (canUseDOM$1) {
			const urlToOpen = new URL(url, window.location).toString();
			urlToOpen.indexOf("tel:") === 0 ? window.location = urlToOpen : window.open(urlToOpen, target, "noopener");
		}
	}, LinkingInstance = new Linking();
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/TouchHistoryMath/index.mjs
var TouchHistoryMath, TouchHistoryMath_default;
var init_TouchHistoryMath = __esmMin((() => {
	TouchHistoryMath = {
		centroidDimension: function(touchHistory, touchesChangedAfter, isXAxis, ofCurrent) {
			const touchBank = touchHistory.touchBank;
			let total = 0, count = 0;
			const oneTouchData = touchHistory.numberActiveTouches === 1 ? touchHistory.touchBank[touchHistory.indexOfSingleActiveTouch] : null;
			if (oneTouchData !== null) oneTouchData.touchActive && oneTouchData.currentTimeStamp > touchesChangedAfter && (total += ofCurrent && isXAxis ? oneTouchData.currentPageX : ofCurrent && !isXAxis ? oneTouchData.currentPageY : !ofCurrent && isXAxis ? oneTouchData.previousPageX : oneTouchData.previousPageY, count = 1);
			else for (let i = 0; i < touchBank.length; i++) {
				const touchTrack = touchBank[i];
				if (touchTrack != null && touchTrack.touchActive && touchTrack.currentTimeStamp >= touchesChangedAfter) {
					let toAdd;
					ofCurrent && isXAxis ? toAdd = touchTrack.currentPageX : ofCurrent && !isXAxis ? toAdd = touchTrack.currentPageY : !ofCurrent && isXAxis ? toAdd = touchTrack.previousPageX : toAdd = touchTrack.previousPageY, total += toAdd, count++;
				}
			}
			return count > 0 ? total / count : TouchHistoryMath.noCentroid;
		},
		currentCentroidXOfTouchesChangedAfter: function(touchHistory, touchesChangedAfter) {
			return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, !0, !0);
		},
		currentCentroidYOfTouchesChangedAfter: function(touchHistory, touchesChangedAfter) {
			return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, !1, !0);
		},
		previousCentroidXOfTouchesChangedAfter: function(touchHistory, touchesChangedAfter) {
			return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, !0, !1);
		},
		previousCentroidYOfTouchesChangedAfter: function(touchHistory, touchesChangedAfter) {
			return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, !1, !1);
		},
		currentCentroidX: function(touchHistory) {
			return TouchHistoryMath.centroidDimension(touchHistory, 0, !0, !0);
		},
		currentCentroidY: function(touchHistory) {
			return TouchHistoryMath.centroidDimension(touchHistory, 0, !1, !0);
		},
		noCentroid: -1
	};
	TouchHistoryMath_default = TouchHistoryMath;
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/vendor/react-native/PanResponder/index.mjs
function clearInteractionHandle(interactionState, callback, event, gestureState) {
	interactionState.handle && (InteractionManager.clearInteractionHandle(interactionState.handle), interactionState.handle = null), callback && callback(event, gestureState);
}
function clearInteractionTimeout(interactionState) {
	clearTimeout(interactionState.timeout);
}
function setInteractionTimeout(interactionState) {
	interactionState.timeout = setTimeout(() => {
		interactionState.shouldCancelClick = !1;
	}, 250);
}
var currentCentroidXOfTouchesChangedAfter, currentCentroidYOfTouchesChangedAfter, previousCentroidXOfTouchesChangedAfter, previousCentroidYOfTouchesChangedAfter, currentCentroidX, currentCentroidY, PanResponder, PanResponder_default;
var init_PanResponder$1 = __esmMin((() => {
	init_esm$1();
	init_TouchHistoryMath();
	currentCentroidXOfTouchesChangedAfter = TouchHistoryMath_default.currentCentroidXOfTouchesChangedAfter, currentCentroidYOfTouchesChangedAfter = TouchHistoryMath_default.currentCentroidYOfTouchesChangedAfter, previousCentroidXOfTouchesChangedAfter = TouchHistoryMath_default.previousCentroidXOfTouchesChangedAfter, previousCentroidYOfTouchesChangedAfter = TouchHistoryMath_default.previousCentroidYOfTouchesChangedAfter, currentCentroidX = TouchHistoryMath_default.currentCentroidX, currentCentroidY = TouchHistoryMath_default.currentCentroidY, PanResponder = {
		_initializeGestureState(gestureState) {
			gestureState.moveX = 0, gestureState.moveY = 0, gestureState.x0 = 0, gestureState.y0 = 0, gestureState.dx = 0, gestureState.dy = 0, gestureState.vx = 0, gestureState.vy = 0, gestureState.numberActiveTouches = 0, gestureState._accountsForMovesUpTo = 0;
		},
		_updateGestureStateOnMove(gestureState, touchHistory) {
			gestureState.numberActiveTouches = touchHistory.numberActiveTouches, gestureState.moveX = currentCentroidXOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo), gestureState.moveY = currentCentroidYOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo);
			const movedAfter = gestureState._accountsForMovesUpTo, prevX = previousCentroidXOfTouchesChangedAfter(touchHistory, movedAfter), x = currentCentroidXOfTouchesChangedAfter(touchHistory, movedAfter), prevY = previousCentroidYOfTouchesChangedAfter(touchHistory, movedAfter), y = currentCentroidYOfTouchesChangedAfter(touchHistory, movedAfter), nextDX = gestureState.dx + (x - prevX), nextDY = gestureState.dy + (y - prevY), dt = touchHistory.mostRecentTimeStamp - gestureState._accountsForMovesUpTo;
			gestureState.vx = (nextDX - gestureState.dx) / dt, gestureState.vy = (nextDY - gestureState.dy) / dt, gestureState.dx = nextDX, gestureState.dy = nextDY, gestureState._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
		},
		create(config) {
			const interactionState = {
				handle: null,
				shouldCancelClick: !1,
				timeout: null
			}, gestureState = {
				stateID: Math.random(),
				moveX: 0,
				moveY: 0,
				x0: 0,
				y0: 0,
				dx: 0,
				dy: 0,
				vx: 0,
				vy: 0,
				numberActiveTouches: 0,
				_accountsForMovesUpTo: 0
			};
			return {
				panHandlers: {
					onStartShouldSetResponder(event) {
						return config.onStartShouldSetPanResponder == null ? !1 : config.onStartShouldSetPanResponder(event, gestureState);
					},
					onMoveShouldSetResponder(event) {
						return config.onMoveShouldSetPanResponder == null ? !1 : config.onMoveShouldSetPanResponder(event, gestureState);
					},
					onStartShouldSetResponderCapture(event) {
						return event.nativeEvent.touches.length === 1 && PanResponder._initializeGestureState(gestureState), gestureState.numberActiveTouches = event.touchHistory.numberActiveTouches, config.onStartShouldSetPanResponderCapture != null ? config.onStartShouldSetPanResponderCapture(event, gestureState) : !1;
					},
					onMoveShouldSetResponderCapture(event) {
						const touchHistory = event.touchHistory;
						return gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp ? !1 : (PanResponder._updateGestureStateOnMove(gestureState, touchHistory), config.onMoveShouldSetPanResponderCapture ? config.onMoveShouldSetPanResponderCapture(event, gestureState) : !1);
					},
					onResponderGrant(event) {
						return interactionState.handle || (interactionState.handle = InteractionManager.createInteractionHandle()), interactionState.timeout && clearInteractionTimeout(interactionState), interactionState.shouldCancelClick = !0, gestureState.x0 = currentCentroidX(event.touchHistory), gestureState.y0 = currentCentroidY(event.touchHistory), gestureState.dx = 0, gestureState.dy = 0, config.onPanResponderGrant && config.onPanResponderGrant(event, gestureState), config.onShouldBlockNativeResponder == null ? !0 : config.onShouldBlockNativeResponder(event, gestureState);
					},
					onResponderReject(event) {
						clearInteractionHandle(interactionState, config.onPanResponderReject, event, gestureState);
					},
					onResponderRelease(event) {
						clearInteractionHandle(interactionState, config.onPanResponderRelease, event, gestureState), setInteractionTimeout(interactionState), PanResponder._initializeGestureState(gestureState);
					},
					onResponderStart(event) {
						gestureState.numberActiveTouches = event.touchHistory.numberActiveTouches, config.onPanResponderStart && config.onPanResponderStart(event, gestureState);
					},
					onResponderMove(event) {
						const touchHistory = event.touchHistory;
						gestureState._accountsForMovesUpTo !== touchHistory.mostRecentTimeStamp && (PanResponder._updateGestureStateOnMove(gestureState, touchHistory), config.onPanResponderMove && config.onPanResponderMove(event, gestureState));
					},
					onResponderEnd(event) {
						gestureState.numberActiveTouches = event.touchHistory.numberActiveTouches, clearInteractionHandle(interactionState, config.onPanResponderEnd, event, gestureState);
					},
					onResponderTerminate(event) {
						clearInteractionHandle(interactionState, config.onPanResponderTerminate, event, gestureState), setInteractionTimeout(interactionState), PanResponder._initializeGestureState(gestureState);
					},
					onResponderTerminationRequest(event) {
						return config.onPanResponderTerminationRequest == null ? !0 : config.onPanResponderTerminationRequest(event, gestureState);
					},
					onClickCapture: (event) => {
						interactionState.shouldCancelClick === !0 && (event.stopPropagation(), event.preventDefault());
					}
				},
				getInteractionHandle() {
					return interactionState.handle;
				}
			};
		}
	};
	PanResponder_default = PanResponder;
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/PanResponder/index.mjs
var init_PanResponder = __esmMin((() => {
	init_PanResponder$1();
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/Share/index.mjs
var Share;
var init_Share = __esmMin((() => {
	init_esm$1();
	Share = class {
		static share(content, options = {}) {
			return invariant(typeof content == "object" && content !== null, "Content to share must be a valid object"), invariant(typeof content.url == "string" || typeof content.message == "string", "At least one of URL and message is required"), invariant(typeof options == "object" && options !== null, "Options must be a valid object"), invariant(!content.title || typeof content.title == "string", "Invalid title: title should be a string."), window.navigator.share !== void 0 ? window.navigator.share({
				title: content.title,
				text: content.message,
				url: content.url
			}) : Promise.reject(/* @__PURE__ */ new Error("Share is not supported in this browser"));
		}
		/**
		* The content was successfully shared.
		*/
		static get sharedAction() {
			return "sharedAction";
		}
		/**
		* The dialog has been dismissed.
		* @platform ios
		*/
		static get dismissedAction() {
			return "dismissedAction";
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/Vibration/index.mjs
var vibrate, Vibration;
var init_Vibration = __esmMin((() => {
	vibrate = (pattern) => {
		"vibrate" in window.navigator && window.navigator.vibrate(pattern);
	}, Vibration = {
		cancel() {
			vibrate(0);
		},
		vibrate(pattern = 400) {
			vibrate(pattern);
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/VirtualizedList.mjs
var init_VirtualizedList = __esmMin((() => {
	init_VirtualizedList$1();
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/UnimplementedView.mjs
var UnimplementedView;
var init_UnimplementedView = __esmMin((() => {
	init_View();
	init_defineProperty();
	init_objectSpread2();
	UnimplementedView = class extends react.default.Component {
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "setNativeProps", () => {});
		}
		render() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(View$2, _objectSpread2({}, this.props));
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/TouchableNativeFeedback.mjs
var init_TouchableNativeFeedback = __esmMin((() => {
	init_UnimplementedView();
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/TouchableOpacity.mjs
function TouchableOpacityImpl(props, forwardedRef) {
	const { activeOpacity, delayPressIn, delayPressOut, delayLongPress, disabled, focusable, onLongPress, onPress, onPressIn, onPressOut, rejectResponderTermination, style } = props, rest = _objectWithoutProperties(props, _excluded$11), hostRef = (0, react.useRef)(null), setRef = useMergeRefs$1(forwardedRef, hostRef), [duration, setDuration] = (0, react.useState)("0s"), [opacityOverride, setOpacityOverride] = (0, react.useState)(null), setOpacityTo = (0, react.useCallback)((value, duration2) => {
		setOpacityOverride(value), setDuration(duration2 ? `${duration2 / 1e3}s` : "0s");
	}, [setOpacityOverride, setDuration]), setOpacityActive = (0, react.useCallback)((duration2) => {
		setOpacityTo(activeOpacity !== null && activeOpacity !== void 0 ? activeOpacity : .2, duration2);
	}, [activeOpacity, setOpacityTo]), setOpacityInactive = (0, react.useCallback)((duration2) => {
		setOpacityTo(null, duration2);
	}, [setOpacityTo]), pressEventHandlers = usePressEvents(hostRef, (0, react.useMemo)(() => ({
		cancelable: !rejectResponderTermination,
		disabled,
		delayLongPress,
		delayPressStart: delayPressIn,
		delayPressEnd: delayPressOut,
		onLongPress,
		onPress,
		onPressStart(event) {
			setOpacityActive((event.dispatchConfig != null ? event.dispatchConfig.registrationName === "onResponderGrant" : event.type === "keydown") ? 0 : 150), onPressIn === null || onPressIn === void 0 || onPressIn(event);
		},
		onPressEnd(event) {
			setOpacityInactive(250), onPressOut === null || onPressOut === void 0 || onPressOut(event);
		}
	}), [
		delayLongPress,
		delayPressIn,
		delayPressOut,
		disabled,
		onLongPress,
		onPress,
		onPressIn,
		onPressOut,
		rejectResponderTermination,
		setOpacityActive,
		setOpacityInactive
	]));
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(View$2, _objectSpread2(_objectSpread2(_objectSpread2({}, rest), pressEventHandlers), {}, {
		accessibilityDisabled: disabled,
		focusable: !disabled && focusable !== !1,
		ref: setRef,
		style: [
			styles$4.root,
			!disabled && styles$4.actionable,
			style,
			opacityOverride != null && { opacity: opacityOverride },
			{ transitionDuration: duration }
		]
	}));
}
var _excluded$11, styles$4, TouchableOpacity;
var init_TouchableOpacity = __esmMin((() => {
	init_esm$1();
	init_View();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$11 = [
		"activeOpacity",
		"delayPressIn",
		"delayPressOut",
		"delayLongPress",
		"disabled",
		"focusable",
		"onLongPress",
		"onPress",
		"onPressIn",
		"onPressOut",
		"rejectResponderTermination",
		"style"
	];
	styles$4 = StyleSheet.create({
		root: {
			transitionProperty: "opacity",
			transitionDuration: "0.15s",
			userSelect: "none"
		},
		actionable: {
			cursor: "pointer",
			touchAction: "manipulation"
		}
	}), TouchableOpacity = react.memo(react.forwardRef(TouchableOpacityImpl));
	TouchableOpacity.displayName = "TouchableOpacity";
	TouchableOpacity.Mixin = {};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/TouchableWithoutFeedback.mjs
function TouchableWithoutFeedbackImpl(props, forwardedRef) {
	const { delayPressIn, delayPressOut, delayLongPress, disabled, focusable, onLongPress, onPress, onPressIn, onPressOut, rejectResponderTermination } = props, hostRef = (0, react.useRef)(null), pressEventHandlers = usePressEvents(hostRef, (0, react.useMemo)(() => ({
		cancelable: !rejectResponderTermination,
		disabled,
		delayLongPress,
		delayPressStart: delayPressIn,
		delayPressEnd: delayPressOut,
		onLongPress,
		onPress,
		onPressStart: onPressIn,
		onPressEnd: onPressOut
	}), [
		disabled,
		delayPressIn,
		delayPressOut,
		delayLongPress,
		onLongPress,
		onPress,
		onPressIn,
		onPressOut,
		rejectResponderTermination
	])), element = react.Children.only(props.children), children = [element.props.children], supportedProps = pickProps$1(props);
	supportedProps.accessibilityDisabled = disabled, supportedProps.focusable = !disabled && focusable !== !1, supportedProps.ref = useMergeRefs$1(forwardedRef, hostRef, element.ref);
	const elementProps = Object.assign(supportedProps, pressEventHandlers);
	return react.cloneElement(element, elementProps, ...children);
}
var forwardPropsList$1, pickProps$1, TouchableWithoutFeedback;
var init_TouchableWithoutFeedback = __esmMin((() => {
	init_esm$1();
	forwardPropsList$1 = {
		accessibilityDisabled: !0,
		accessibilityLabel: !0,
		accessibilityLiveRegion: !0,
		accessibilityRole: !0,
		accessibilityState: !0,
		accessibilityValue: !0,
		children: !0,
		disabled: !0,
		focusable: !0,
		nativeID: !0,
		onBlur: !0,
		onFocus: !0,
		onLayout: !0,
		testID: !0
	}, pickProps$1 = (props) => pick(props, forwardPropsList$1);
	TouchableWithoutFeedback = react.memo(react.forwardRef(TouchableWithoutFeedbackImpl));
	TouchableWithoutFeedback.displayName = "TouchableWithoutFeedback";
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/ActivityIndicator/index.mjs
var _excluded$10, createSvgCircle, ActivityIndicator, styles$3, indicatorSizes;
var init_ActivityIndicator = __esmMin((() => {
	init_esm$1();
	init_View();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$10 = [
		"animating",
		"color",
		"hidesWhenStopped",
		"size",
		"style"
	];
	createSvgCircle = (style) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
		cx: "16",
		cy: "16",
		fill: "none",
		r: "14",
		strokeWidth: "4",
		style
	}), ActivityIndicator = react.forwardRef((props, forwardedRef) => {
		const { animating = !0, color = "#1976D2", hidesWhenStopped = !0, size = "small", style } = props, other = _objectWithoutProperties(props, _excluded$10), svg = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
			height: "100%",
			viewBox: "0 0 32 32",
			width: "100%",
			children: [createSvgCircle({
				stroke: color,
				opacity: .2
			}), createSvgCircle({
				stroke: color,
				strokeDasharray: 80,
				strokeDashoffset: 60
			})]
		});
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(View$2, _objectSpread2(_objectSpread2({}, other), {}, {
			accessibilityRole: "progressbar",
			accessibilityValueMax: 1,
			accessibilityValueMin: 0,
			ref: forwardedRef,
			style: [styles$3.container, style],
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(View$2, {
				children: svg,
				style: [
					typeof size == "number" ? {
						height: size,
						width: size
					} : indicatorSizes[size],
					styles$3.animation,
					!animating && styles$3.animationPause,
					!animating && hidesWhenStopped && styles$3.hidesWhenStopped
				]
			})
		}));
	});
	ActivityIndicator.displayName = "ActivityIndicator";
	styles$3 = StyleSheet.create({
		container: {
			alignItems: "center",
			justifyContent: "center"
		},
		hidesWhenStopped: { visibility: "hidden" },
		animation: {
			animationDuration: "0.75s",
			animationKeyframes: [{
				"0%": { transform: [{ rotate: "0deg" }] },
				"100%": { transform: [{ rotate: "360deg" }] }
			}],
			animationTimingFunction: "linear",
			animationIterationCount: "infinite"
		},
		animationPause: { animationPlayState: "paused" }
	}), indicatorSizes = StyleSheet.create({
		small: {
			width: 20,
			height: 20
		},
		large: {
			width: 36,
			height: 36
		}
	});
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/ImageBackground/index.mjs
var _excluded$9, emptyObject$1, ImageBackground;
var init_ImageBackground = __esmMin((() => {
	init_esm$1();
	init_Image();
	init_View();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$9 = [
		"children",
		"style",
		"imageStyle",
		"imageRef"
	];
	emptyObject$1 = {}, ImageBackground = (0, react.forwardRef)((props, forwardedRef) => {
		const { children, style = emptyObject$1, imageStyle, imageRef } = props, rest = _objectWithoutProperties(props, _excluded$9), { height, width } = StyleSheet.flatten(style);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(View$2, {
			ref: forwardedRef,
			style,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ImageWithStatics, _objectSpread2(_objectSpread2({}, rest), {}, {
				ref: imageRef,
				style: [
					{
						width,
						height,
						zIndex: -1
					},
					StyleSheet.absoluteFill,
					imageStyle
				]
			})), children]
		});
	});
	ImageBackground.displayName = "ImageBackground";
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/KeyboardAvoidingView/index.mjs
var _excluded$8, KeyboardAvoidingView;
var init_KeyboardAvoidingView = __esmMin((() => {
	init_View();
	init_defineProperty();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$8 = [
		"behavior",
		"contentContainerStyle",
		"keyboardVerticalOffset"
	];
	KeyboardAvoidingView = class extends react.Component {
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "frame", null);
			_defineProperty(this, "onLayout", (event) => {
				this.frame = event.nativeEvent.layout;
			});
		}
		relativeKeyboardHeight(keyboardFrame) {
			const frame = this.frame;
			if (!frame || !keyboardFrame) return 0;
			const keyboardY = keyboardFrame.screenY - (this.props.keyboardVerticalOffset || 0);
			return Math.max(frame.y + frame.height - keyboardY, 0);
		}
		onKeyboardChange(event) {}
		render() {
			const _this$props = this.props, { behavior, contentContainerStyle, keyboardVerticalOffset } = _this$props, rest = _objectWithoutProperties(_this$props, _excluded$8);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(View$2, _objectSpread2({ onLayout: this.onLayout }, rest));
		}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/LogBox/index.mjs
var LogBox;
var init_LogBox = __esmMin((() => {
	LogBox = {
		ignoreLogs() {},
		ignoreAllLogs() {},
		uninstall() {},
		install() {}
	};
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/Modal/index.mjs
var Modal;
var init_Modal = __esmMin((() => {
	Modal = () => null;
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/Pressable/index.mjs
function Pressable(props, forwardedRef) {
	const { children, delayLongPress, delayPressIn, delayPressOut, disabled, focusable, onBlur, onContextMenu, onFocus, onHoverIn, onHoverOut, onKeyDown, onLongPress, onPress, onPressMove, onPressIn, onPressOut, style, testOnly_hovered, testOnly_pressed } = props, rest = _objectWithoutProperties(props, _excluded$7), [hovered, setHovered] = useForceableState(testOnly_hovered === !0), [focused, setFocused] = useForceableState(!1), [pressed, setPressed] = useForceableState(testOnly_pressed === !0), hostRef = (0, react.useRef)(null), setRef = useMergeRefs$1(forwardedRef, hostRef), pressEventHandlers = usePressEvents(hostRef, (0, react.useMemo)(() => ({
		delayLongPress,
		delayPressStart: delayPressIn,
		delayPressEnd: delayPressOut,
		disabled,
		onLongPress,
		onPress,
		onPressChange: setPressed,
		onPressStart: onPressIn,
		onPressMove,
		onPressEnd: onPressOut
	}), [
		delayLongPress,
		delayPressIn,
		delayPressOut,
		disabled,
		onLongPress,
		onPress,
		onPressIn,
		onPressMove,
		onPressOut,
		setPressed
	])), { onContextMenu: onContextMenuPress, onKeyDown: onKeyDownPress } = pressEventHandlers;
	useHover(hostRef, {
		contain: !0,
		disabled,
		onHoverChange: setHovered,
		onHoverStart: onHoverIn,
		onHoverEnd: onHoverOut
	});
	const interactionState = {
		hovered,
		focused,
		pressed
	}, blurHandler = react.useCallback((e) => {
		disabled || e.nativeEvent.target === hostRef.current && (setFocused(!1), onBlur === null || onBlur === void 0 || onBlur(e));
	}, [
		disabled,
		hostRef,
		setFocused,
		onBlur
	]), focusHandler = react.useCallback((e) => {
		disabled || e.nativeEvent.target === hostRef.current && (setFocused(!0), onFocus === null || onFocus === void 0 || onFocus(e));
	}, [
		disabled,
		hostRef,
		setFocused,
		onFocus
	]), contextMenuHandler = react.useCallback((e) => {
		onContextMenuPress === null || onContextMenuPress === void 0 || onContextMenuPress(e), onContextMenu === null || onContextMenu === void 0 || onContextMenu(e);
	}, [onContextMenu, onContextMenuPress]), keyDownHandler = react.useCallback((e) => {
		onKeyDownPress === null || onKeyDownPress === void 0 || onKeyDownPress(e), onKeyDown === null || onKeyDown === void 0 || onKeyDown(e);
	}, [onKeyDown, onKeyDownPress]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(View$2, _objectSpread2(_objectSpread2(_objectSpread2({}, rest), pressEventHandlers), {}, {
		accessibilityDisabled: disabled,
		focusable: !disabled && focusable !== !1,
		onBlur: blurHandler,
		onContextMenu: contextMenuHandler,
		onFocus: focusHandler,
		onKeyDown: keyDownHandler,
		pointerEvents: disabled ? "none" : rest.pointerEvents,
		ref: setRef,
		style: [!disabled && styles$2.root, typeof style == "function" ? style(interactionState) : style],
		children: typeof children == "function" ? children(interactionState) : children
	}));
}
function useForceableState(forced) {
	const [bool, setBool] = (0, react.useState)(!1);
	return [bool || forced, setBool];
}
var _excluded$7, styles$2, PressableComponent;
var init_Pressable = __esmMin((() => {
	init_index_native$10();
	init_esm$1();
	init_View();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$7 = [
		"children",
		"delayLongPress",
		"delayPressIn",
		"delayPressOut",
		"disabled",
		"focusable",
		"onBlur",
		"onContextMenu",
		"onFocus",
		"onHoverIn",
		"onHoverOut",
		"onKeyDown",
		"onLongPress",
		"onPress",
		"onPressMove",
		"onPressIn",
		"onPressOut",
		"style",
		"testOnly_hovered",
		"testOnly_pressed"
	];
	styles$2 = StyleSheet.create({ root: {
		cursor: "pointer",
		touchAction: "manipulation"
	} }), PressableComponent = (0, react.memo)((0, react.forwardRef)(Pressable));
	PressableComponent.displayName = "Pressable";
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/SafeAreaView/index.mjs
var _excluded$6, cssFunction, SafeAreaView, styles$1;
var init_SafeAreaView = __esmMin((() => {
	init_esm$1();
	init_View();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$6 = ["style"];
	cssFunction = canUseDOM$1 && window.CSS && window.CSS.supports && window.CSS.supports("top: constant(safe-area-inset-top)") ? "constant" : "env", SafeAreaView = react.forwardRef((props, ref) => {
		const { style } = props;
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(View$2, _objectSpread2(_objectSpread2({}, _objectWithoutProperties(props, _excluded$6)), {}, {
			ref,
			style: StyleSheet.compose(styles$1.root, style)
		}));
	});
	SafeAreaView.displayName = "SafeAreaView";
	styles$1 = StyleSheet.create({ root: {
		paddingTop: `${cssFunction}(safe-area-inset-top)`,
		paddingRight: `${cssFunction}(safe-area-inset-right)`,
		paddingBottom: `${cssFunction}(safe-area-inset-bottom)`,
		paddingLeft: `${cssFunction}(safe-area-inset-left)`
	} });
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/StatusBar/index.mjs
function StatusBar() {
	return null;
}
var emptyFunction;
var init_StatusBar = __esmMin((() => {
	emptyFunction = () => {};
	StatusBar.setBackgroundColor = emptyFunction;
	StatusBar.setBarStyle = emptyFunction;
	StatusBar.setHidden = emptyFunction;
	StatusBar.setNetworkActivityIndicatorVisible = emptyFunction;
	StatusBar.setTranslucent = emptyFunction;
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/TextInput/index.mjs
function isEventComposing(nativeEvent) {
	return nativeEvent.isComposing || nativeEvent.keyCode === 229;
}
function warn(...args) {}
var isSelectionStale, setSelection, forwardPropsList, pickProps, useIsomorphicLayoutEffect$1, focusTimeout, TextInput, styles;
var init_TextInput = __esmMin((() => {
	init_esm$1();
	init_createElement();
	isSelectionStale = (node, selection) => {
		const { selectionEnd, selectionStart } = node, { start, end } = selection;
		return start !== selectionStart || end !== selectionEnd;
	}, setSelection = (node, selection) => {
		if (isSelectionStale(node, selection)) {
			const { start, end } = selection;
			try {
				node.setSelectionRange(start, end || start);
			} catch (_unused) {}
		}
	}, forwardPropsList = Object.assign({}, forwardedProps.defaultProps, forwardedProps.accessibilityProps, forwardedProps.clickProps, forwardedProps.focusProps, forwardedProps.keyboardProps, forwardedProps.mouseProps, forwardedProps.touchProps, forwardedProps.styleProps, {
		autoCapitalize: !0,
		className: !0,
		autoComplete: !0,
		autoCorrect: !0,
		autoFocus: !0,
		defaultValue: !0,
		disabled: !0,
		lang: !0,
		maxLength: !0,
		onChange: !0,
		onScroll: !0,
		placeholder: !0,
		pointerEvents: !0,
		readOnly: !0,
		rows: !0,
		spellCheck: !0,
		value: !0,
		type: !0
	}), pickProps = (props) => pick(props, forwardPropsList), useIsomorphicLayoutEffect$1 = typeof window > "u" ? react.useEffect : react.useLayoutEffect;
	focusTimeout = null;
	TextInput = react.forwardRef((props, forwardedRef) => {
		const { autoCapitalize = "sentences", autoComplete, autoCompleteType, autoCorrect = !0, blurOnSubmit, clearTextOnFocus, dir, editable, enterKeyHint, inputMode = "text", keyboardType, multiline = !1, numberOfLines, onBlur, onChange, onChangeText, onContentSizeChange, onFocus, onKeyPress, onLayout, onMoveShouldSetResponder, onMoveShouldSetResponderCapture, onResponderEnd, onResponderGrant, onResponderMove, onResponderReject, onResponderRelease, onResponderStart, onResponderTerminate, onResponderTerminationRequest, onScrollShouldSetResponder, onScrollShouldSetResponderCapture, onSelectionChange, onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder, onStartShouldSetResponderCapture, onSubmitEditing, placeholderTextColor, readOnly = !1, returnKeyType, rows = 1, secureTextEntry = !1, selection, selectTextOnFocus, showSoftInputOnFocus, caretHidden, spellCheck } = props;
		let type, _inputMode;
		if (inputMode != null) _inputMode = inputMode, inputMode === "email" ? type = "email" : inputMode === "tel" ? type = "tel" : inputMode === "search" ? type = "search" : inputMode === "url" ? type = "url" : type = "text";
		else if (keyboardType != null) switch (warn("keyboardType", "keyboardType is deprecated. Use inputMode."), keyboardType) {
			case "email-address":
				type = "email";
				break;
			case "number-pad":
			case "numeric":
				_inputMode = "numeric";
				break;
			case "decimal-pad":
				_inputMode = "decimal";
				break;
			case "phone-pad":
				type = "tel";
				break;
			case "search":
			case "web-search":
				type = "search";
				break;
			case "url":
				type = "url";
				break;
			default: type = "text";
		}
		secureTextEntry && (type = "password");
		const dimensions = react.useRef({
			height: null,
			width: null
		}), hostRef = react.useRef(null), handleContentSizeChange = react.useCallback((hostNode) => {
			if (multiline && onContentSizeChange && hostNode != null) {
				const newHeight = hostNode.scrollHeight, newWidth = hostNode.scrollWidth;
				(newHeight !== dimensions.current.height || newWidth !== dimensions.current.width) && (dimensions.current.height = newHeight, dimensions.current.width = newWidth, onContentSizeChange({ nativeEvent: { contentSize: {
					height: dimensions.current.height,
					width: dimensions.current.width
				} } }));
			}
		}, [multiline, onContentSizeChange]), imperativeRef = react.useMemo(() => (hostNode) => {
			hostNode != null && (hostNode.clear = () => {
				hostNode != null && (hostNode.value = "");
			}, hostNode.isFocused = () => hostNode != null && TextInputState.currentlyFocusedField() === hostNode, handleContentSizeChange(hostNode));
		}, [handleContentSizeChange]);
		function handleBlur(e) {
			TextInputState._currentlyFocusedNode = null, onBlur && (e.nativeEvent.text = e.target.value, onBlur(e));
		}
		function handleChange(e) {
			const hostNode = e.target, text = hostNode.value;
			e.nativeEvent.text = text, handleContentSizeChange(hostNode), onChange && onChange(e), onChangeText && onChangeText(text);
		}
		function handleFocus(e) {
			const hostNode = e.target;
			onFocus && (e.nativeEvent.text = hostNode.value, onFocus(e)), hostNode != null && (TextInputState._currentlyFocusedNode = hostNode, clearTextOnFocus && (hostNode.value = ""), selectTextOnFocus && (focusTimeout != null && clearTimeout(focusTimeout), focusTimeout = setTimeout(() => {
				hostNode === null || hostNode === void 0 || hostNode.select();
			}, 0)));
		}
		function handleKeyDown(e) {
			const hostNode = e.target;
			e.stopPropagation();
			const shouldBlurOnSubmit = blurOnSubmit !== null && blurOnSubmit !== void 0 ? blurOnSubmit : !multiline, nativeEvent = e.nativeEvent, isComposing = isEventComposing(nativeEvent);
			onKeyPress && onKeyPress(e), e.key === "Enter" && !e.shiftKey && !isComposing && !e.isDefaultPrevented() && ((blurOnSubmit || !multiline) && onSubmitEditing && (e.preventDefault(), nativeEvent.text = e.target.value, onSubmitEditing(e)), shouldBlurOnSubmit && hostNode != null && setTimeout(() => hostNode.blur(), 0));
		}
		function handleSelectionChange(e) {
			if (onSelectionChange) try {
				const { selectionStart, selectionEnd } = e.target;
				e.nativeEvent.selection = {
					start: selectionStart,
					end: selectionEnd
				}, e.nativeEvent.text = e.target.value, onSelectionChange(e);
			} catch (_unused2) {}
		}
		useIsomorphicLayoutEffect$1(() => {
			const node = hostRef.current;
			node != null && selection != null && setSelection(node, selection), document.activeElement === node && (TextInputState._currentlyFocusedNode = node);
		}, [hostRef, selection]);
		const component = multiline ? "textarea" : "input";
		useElementLayout(hostRef, onLayout), useResponderEvents(hostRef, {
			onMoveShouldSetResponder,
			onMoveShouldSetResponderCapture,
			onResponderEnd,
			onResponderGrant,
			onResponderMove,
			onResponderReject,
			onResponderRelease,
			onResponderStart,
			onResponderTerminate,
			onResponderTerminationRequest,
			onScrollShouldSetResponder,
			onScrollShouldSetResponderCapture,
			onSelectionChangeShouldSetResponder,
			onSelectionChangeShouldSetResponderCapture,
			onStartShouldSetResponder,
			onStartShouldSetResponderCapture
		});
		const { direction: contextDirection } = useLocaleContext(), supportedProps = pickProps(props);
		supportedProps.autoCapitalize = autoCapitalize, supportedProps.autoComplete = autoComplete || autoCompleteType || "on", supportedProps.autoCorrect = autoCorrect ? "on" : "off", supportedProps.dir = dir !== void 0 ? dir : "auto", returnKeyType != null && warn("returnKeyType", "returnKeyType is deprecated. Use enterKeyHint."), supportedProps.enterKeyHint = enterKeyHint || returnKeyType, supportedProps.inputMode = _inputMode, supportedProps.onBlur = handleBlur, supportedProps.onChange = handleChange, supportedProps.onFocus = handleFocus, supportedProps.onKeyDown = handleKeyDown, supportedProps.onSelect = handleSelectionChange, editable != null && warn("editable", "editable is deprecated. Use readOnly."), supportedProps.readOnly = readOnly === !0 || editable === !1, numberOfLines != null && warn("numberOfLines", "TextInput numberOfLines is deprecated. Use rows."), supportedProps.rows = multiline ? rows !== null && rows !== void 0 ? rows : numberOfLines : 1, supportedProps.spellCheck = spellCheck !== null && spellCheck !== void 0 ? spellCheck : autoCorrect, supportedProps.style = [
			{ "--placeholderTextColor": placeholderTextColor },
			styles.textinput$raw,
			styles.placeholder,
			props.style,
			caretHidden && styles.caretHidden
		], supportedProps.type = multiline ? void 0 : type, supportedProps.virtualkeyboardpolicy = showSoftInputOnFocus === !1 ? "manual" : "auto";
		supportedProps.ref = useMergeRefs$1(hostRef, usePlatformMethods(supportedProps), imperativeRef, forwardedRef);
		const langDirection = props.lang != null ? getLocaleDirection(props.lang) : null;
		return useCreateElement(component, supportedProps, { writingDirection: props.dir || langDirection || contextDirection });
	});
	TextInput.displayName = "TextInput";
	TextInput.State = TextInputState;
	styles = StyleSheet.create({
		textinput$raw: {
			MozAppearance: "textfield",
			WebkitAppearance: "none",
			appearance: "none"
		},
		placeholder: { placeholderTextColor: "var(--placeholderTextColor)" },
		caretHidden: { caretColor: "transparent" }
	});
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/useColorScheme/index.mjs
function useColorScheme() {
	const [colorScheme, setColorScheme] = react.useState(Appearance.getColorScheme());
	return react.useEffect(() => {
		function listener(appearance) {
			setColorScheme(appearance.colorScheme);
		}
		const { remove } = Appearance.addChangeListener(listener);
		return remove;
	}), colorScheme;
}
var init_useColorScheme = __esmMin((() => {
	init_Appearance();
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/useLocaleContext/index.mjs
var init_useLocaleContext = __esmMin((() => {
	init_esm$1();
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/useWindowDimensions/index.mjs
function useWindowDimensions() {
	const [dims, setDims] = react.default.useState(() => Dimensions.get("window"));
	return react.default.useEffect(() => {
		function handleChange({ window }) {
			window != null && setDims(window);
		}
		return Dimensions.addEventListener("change", handleChange), setDims(Dimensions.get("window")), () => {
			Dimensions.removeEventListener("change", handleChange);
		};
	}, []), dims;
}
var init_useWindowDimensions = __esmMin((() => {
	init_Dimensions();
}));
//#endregion
//#region ../../packages/react-native-web-lite/dist/esm/index.mjs
var esm_exports = /* @__PURE__ */ __exportAll({
	AccessibilityInfo: () => AccessibilityInfo,
	AccessibilityUtil: () => AccessibilityUtil,
	ActivityIndicator: () => ActivityIndicator,
	Alert: () => Alert,
	Animated: () => Animated_default,
	AppRegistry: () => AppRegistry,
	AppState: () => AppState,
	Appearance: () => Appearance,
	BackHandler: () => BackHandler,
	Clipboard: () => Clipboard,
	DeviceEmitter: () => DeviceEmitter,
	DeviceEventEmitter: () => DeviceEmitter,
	DeviceInfo: () => DeviceInfo,
	Dimensions: () => Dimensions,
	DrawerLayoutAndroid: () => UnimplementedView,
	Easing: () => Easing_default,
	FlatList: () => FlatList$1,
	I18nManager: () => I18nManager,
	Image: () => ImageWithStatics,
	ImageBackground: () => ImageBackground,
	ImageLoader: () => ImageLoader,
	InteractionManager: () => InteractionManager,
	Keyboard: () => Keyboard,
	KeyboardAvoidingView: () => KeyboardAvoidingView,
	Linking: () => LinkingInstance,
	LocaleProvider: () => LocaleProvider,
	LogBox: () => LogBox,
	Modal: () => Modal,
	NativeEventEmitter: () => NativeEventEmitter_default,
	NativeModules: () => NativeModules,
	PanResponder: () => PanResponder_default,
	PixelRatio: () => PixelRatio,
	Platform: () => Platform,
	Pressable: () => PressableComponent,
	RefreshControl: () => RefreshControl,
	RootTagContext: () => RootTagContext,
	SafeAreaView: () => SafeAreaView,
	ScrollView: () => ForwardedScrollView,
	SectionList: () => SectionList_default,
	Share: () => Share,
	StatusBar: () => StatusBar,
	StyleSheet: () => StyleSheet,
	Switch: () => UnimplementedView,
	Text: () => Text$2,
	TextAncestorContext: () => TextAncestorContext,
	TextInput: () => TextInput,
	Touchable: () => TouchableOpacity,
	TouchableHighlight: () => UnimplementedView,
	TouchableNativeFeedback: () => UnimplementedView,
	TouchableOpacity: () => TouchableOpacity,
	TouchableWithoutFeedback: () => TouchableWithoutFeedback,
	UIManager: () => UIManager,
	Vibration: () => Vibration,
	View: () => View$2,
	VirtualizedList: () => VirtualizedList_default,
	canUseDOM: () => canUseDOM$1,
	clickProps: () => clickProps,
	createDOMProps: () => createDOMProps,
	dismissKeyboard: () => dismissKeyboard,
	findNodeHandle: () => findNodeHandle,
	flattenStyle: () => flatten,
	isWebColor: () => isWebColor,
	mergeRefs: () => mergeRefs,
	normalizeColor: () => normalizeColor$1,
	processColor: () => processColor$1,
	processStyle: () => processStyle,
	render: () => render,
	requireNativeComponent: () => requireNativeComponent,
	unstable_batchedUpdates: () => import_react_dom.unstable_batchedUpdates,
	unstable_createElement: () => createElement,
	useColorScheme: () => useColorScheme,
	useEvent: () => useEvent$1,
	useHover: () => useHover,
	useLayoutEffect: () => useLayoutEffectImpl,
	useLocaleContext: () => useLocaleContext,
	useMergeRefs: () => useMergeRefs$1,
	usePlatformMethods: () => usePlatformMethods,
	useWindowDimensions: () => useWindowDimensions
});
function requireNativeComponent(name) {
	return function() {
		return null;
	};
}
var import_react_dom, findNodeHandle, RootTagContext;
var init_esm = __esmMin((() => {
	init_esm$1();
	init_createElement();
	init_NativeModules();
	init_render();
	init_Animated();
	init_Easing();
	init_NativeEventEmitter();
	init_AccessibilityInfo();
	init_Alert();
	init_Appearance();
	init_AppRegistry();
	init_AppState();
	init_BackHandler();
	init_Clipboard();
	init_DeviceEmitter();
	init_DeviceInfo();
	init_Dimensions();
	init_I18nManager();
	init_Keyboard();
	init_Linking();
	init_PanResponder();
	init_PixelRatio();
	init_Share();
	init_Vibration();
	init_FlatList();
	init_SectionList();
	init_VirtualizedList();
	init_TouchableNativeFeedback();
	init_UnimplementedView();
	init_TouchableOpacity();
	init_TouchableWithoutFeedback();
	init_ActivityIndicator();
	init_Image();
	init_ImageBackground();
	init_KeyboardAvoidingView();
	init_LogBox();
	init_Modal();
	init_Pressable();
	init_RefreshControl();
	init_SafeAreaView();
	init_ScrollView();
	init_StatusBar();
	init_Text();
	init_TextInput();
	init_View();
	init_useColorScheme();
	init_useLocaleContext();
	init_useWindowDimensions();
	import_react_dom = require_react_dom();
	findNodeHandle = (component) => {
		throw new Error("not supported - use ref instead");
	}, RootTagContext = (0, react.createContext)(null);
}));
//#endregion
//#region ../constants/dist/esm/constants.native.js
var isWeb, isBrowser, isServer, isClient, isWindowDefined, useIsomorphicLayoutEffect, isChrome, isWebTouchable, isTouchable, isAndroid, isIos, currentPlatform;
var init_constants_native$1 = __esmMin((() => {
	init_esm();
	isWeb = !1, isBrowser = !1, isServer = !1, isClient = !0, isWindowDefined = !1, useIsomorphicLayoutEffect = react.useLayoutEffect, isChrome = !1, isWebTouchable = !1, isTouchable = !0, isAndroid = (Platform === null || Platform === void 0 ? void 0 : Platform.OS) === "android" || process.env.TEST_NATIVE_PLATFORM === "android", isIos = (Platform === null || Platform === void 0 ? void 0 : Platform.OS) === "ios" || process.env.TEST_NATIVE_PLATFORM === "ios", currentPlatform = (!(Platform === null || Platform === void 0) && Platform.OS ? {
		ios: "ios",
		android: "android"
	}[Platform.OS] : void 0) || "native";
}));
//#endregion
//#region ../constants/dist/esm/index.native.js
var init_index_native$7 = __esmMin((() => {
	init_constants_native$1();
}));
//#endregion
//#region ../web/dist/esm/constants/constants.native.js
var THEME_NAME_SEPARATOR, THEME_CLASSNAME_PREFIX, FONT_DATA_ATTRIBUTE_NAME, MISSING_THEME_MESSAGE;
var init_constants_native = __esmMin((() => {
	THEME_NAME_SEPARATOR = "_", THEME_CLASSNAME_PREFIX = "t_", FONT_DATA_ATTRIBUTE_NAME = "data-tamagui-font", MISSING_THEME_MESSAGE = "Missing theme.";
}));
//#endregion
//#region ../web/dist/esm/config.native.js
function setTokens(_) {
	tokensMerged = _;
}
function setupDev(conf2) {}
function loadAnimationDriver(name, driver) {
	var config = getConfigFromGlobalOrLocal();
	if (!config) return;
	config.animations && !("default" in config.animations) && (config.animations = { default: config.animations }), config.animations ? config.animations[name] = driver : config.animations = {
		default: driver,
		[name]: driver
	};
}
var conf$1, getConfigFromGlobalOrLocal, getSetting, setConfig, setConfigFont, getConfig, getConfigMaybe, tokensMerged, getTokens, getTokenObject, getToken, getTokenValue, getThemes, updateConfig, getFont;
var init_config_native = __esmMin((() => {
	init_index_native$7();
	getConfigFromGlobalOrLocal = function() {
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
		if (!config) throw new Error("Err0");
		return config;
	}, getConfigMaybe = function() {
		return getConfigFromGlobalOrLocal();
	};
	getTokens = function() {
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
}));
//#endregion
//#region ../web/dist/esm/helpers/mediaObjectToString.native.js
function camelToHyphen(str) {
	return str.replace(/[A-Z]/g, function(m) {
		return `-${m.toLowerCase()}`;
	}).toLowerCase();
}
function mediaObjectToString(query) {
	if (typeof query == "string") return query;
	if (cache$4.has(query)) return cache$4.get(query);
	var res = Object.entries(query).map(function(param) {
		var [feature, value] = param;
		return feature = camelToHyphen(feature), typeof value == "string" ? `(${feature}: ${value})` : (typeof value == "number" && /[height|width]$/.test(feature) && (value = `${value}px`), `(${feature}: ${value})`);
	}).join(" and ");
	return cache$4.set(query, res), res;
}
var cache$4;
var init_mediaObjectToString_native = __esmMin((() => {
	cache$4 = /* @__PURE__ */ new WeakMap();
}));
//#endregion
//#region ../web/dist/esm/helpers/mediaState.native.js
var mediaState, setMediaState, mediaQueryConfig, getMedia, mediaKeys;
var init_mediaState_native = __esmMin((() => {
	mediaState = {}, setMediaState = function(next) {
		mediaState = next;
	}, mediaQueryConfig = {}, getMedia = function() {
		return mediaState;
	}, mediaKeys = /* @__PURE__ */ new Set();
}));
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
var init_getGroupPropParts_native = __esmMin((() => {
	init_mediaState_native();
	init_pseudoDescriptors_native();
}));
//#endregion
//#region ../web/dist/esm/helpers/createMediaStyle.native.js
function resetMediaStyleCache() {
	prefixes = null, selectors = null;
}
function getThemeOrGroupSelector(name, styleInner, isGroup, groupParts) {
	var isTheme = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, precedenceImportancePrefix = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "", selectorStart = styleInner.lastIndexOf(":root") + 5, selectorEnd = styleInner.lastIndexOf("{"), selector = styleInner.slice(selectorStart, selectorEnd), precedenceSpace = getSetting("addThemeClassName") !== !1 && isTheme ? "" : " ", pseudoSelectorName = groupParts.pseudo ? groupPseudoToPseudoCSSMap[groupParts.pseudo] || groupParts.pseudo : void 0, pseudoSelector = pseudoSelectorName ? `:${pseudoSelectorName}` : "";
	return [selector, `${`:root${precedenceImportancePrefix}${precedenceSpace}`}${`.t_${isGroup ? "group_" : ""}${name}${pseudoSelector}`} ${selector.replaceAll(":root", "")}`];
}
var MEDIA_SEP, prefixes, selectors, groupPseudoToPseudoCSSMap, specificities, createMediaStyle;
var init_createMediaStyle_native = __esmMin((() => {
	init_config_native();
	init_mediaObjectToString_native();
	init_getGroupPropParts_native();
	MEDIA_SEP = "_", prefixes = null, selectors = null;
	groupPseudoToPseudoCSSMap = {
		press: "active",
		focusVisible: "focus-visible",
		focusWithin: "focus-within"
	}, specificities = new Array(12).fill(0).map(function(_, i) {
		return new Array(i).fill(":root").join("");
	});
	createMediaStyle = function(styleObject, mediaKeyIn, mediaQueries, type, negate, priority) {
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
}));
//#endregion
//#region ../web/dist/esm/helpers/matchMedia.native.js
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
var matchMediaImpl, matchMedia;
var init_matchMedia_native = __esmMin((() => {
	matchMediaImpl = matchMediaFallback, matchMedia = function() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		return matchMediaImpl(...args);
	};
}));
//#endregion
//#region ../web/dist/esm/hooks/useMedia.native.js
function unlisten() {
	dispose.forEach(function(cb) {
		return cb();
	}), dispose.clear();
}
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
function updateMediaListeners() {
	listeners.forEach(function(cb) {
		return cb(getMedia());
	});
}
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
function mediaKeyMatch(key, dimensions) {
	var mediaQueries = mediaQueryConfig[key];
	return Object.keys(mediaQueries).every(function(query) {
		var expectedVal = +mediaQueries[query], isMax = query.startsWith("max"), givenVal = dimensions[query.endsWith("Width") ? "width" : "height"];
		return isMax ? givenVal < expectedVal : givenVal > expectedVal;
	});
}
var mediaKeyRegex, getMediaKey, initState, mediaKeysOrdered, getMediaKeyImportance, dispose, mediaVersion, configureMedia, setupVersion, listeners, States, getServerSnapshot, disableMediaTouch, getMediaImportanceIfMoreImportant;
var init_useMedia_native = __esmMin((() => {
	init_index_native$7();
	init_config_native();
	init_createMediaStyle_native();
	init_matchMedia_native();
	init_mediaObjectToString_native();
	init_mediaState_native();
	init_pseudoDescriptors_native();
	init_objectSpread2();
	mediaKeyRegex = /\$(platform|theme|group)-/, getMediaKey = function(key) {
		if (key[0] !== "$") return !1;
		if (mediaKeys.has(key)) return !0;
		var match = key.match(mediaKeyRegex);
		return match ? match[1] : !1;
	}, getMediaKeyImportance = function(key) {
		return mediaKeysOrdered.indexOf(key) + 100;
	}, dispose = /* @__PURE__ */ new Set(), mediaVersion = 0, configureMedia = function(config) {
		var { media } = config, mediaQueryDefaultActive = getSetting("mediaQueryDefaultActive");
		if (media) {
			mediaVersion++, resetMediaStyleCache();
			for (var key in media) getMedia()[key] = (mediaQueryDefaultActive === null || mediaQueryDefaultActive === void 0 ? void 0 : mediaQueryDefaultActive[key]) || !1, mediaKeys.add(`$${key}`);
			Object.assign(mediaQueryConfig, media), initState = _objectSpread2({}, getMedia()), mediaKeysOrdered = Object.keys(media), setupMediaListeners();
		}
	};
	setupVersion = -1;
	listeners = /* @__PURE__ */ new Set();
	States = /* @__PURE__ */ new WeakMap();
	getServerSnapshot = function() {
		return initState;
	}, disableMediaTouch = !1;
	getMediaImportanceIfMoreImportant = function(mediaKey, key, styleState, isSizeMedia) {
		var importance = isSizeMedia ? getMediaKeyImportance(mediaKey) : defaultMediaImportance, usedKeys = styleState.usedKeys;
		return !usedKeys[key] || importance > usedKeys[key] ? importance : null;
	};
}));
//#endregion
//#region ../simple-hash/dist/esm/index.native.js
function isValidCSSCharCode(code) {
	return code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95 || code === 45 || code >= 48 && code <= 57;
}
var cache$3, cacheSize, simpleHash, hashChar;
var init_index_native$6 = __esmMin((() => {
	cache$3 = /* @__PURE__ */ new Map(), cacheSize = 0, simpleHash = function(strIn) {
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
}));
//#endregion
//#region ../helpers/dist/esm/clamp.native.js
function clamp(value, param) {
	var [min, max] = param;
	return Math.min(max, Math.max(min, value));
}
var init_clamp_native = __esmMin((() => {}));
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
var init_composeEventHandlers_native = __esmMin((() => {}));
//#endregion
//#region ../helpers/dist/esm/types.native.js
var StyleObjectProperty, StyleObjectValue, StyleObjectIdentifier, StyleObjectPseudo, StyleObjectRules;
var init_types_native = __esmMin((() => {
	StyleObjectProperty = 0, StyleObjectValue = 1, StyleObjectIdentifier = 2, StyleObjectPseudo = 3, StyleObjectRules = 4;
}));
//#endregion
//#region ../helpers/dist/esm/shouldRenderNativePlatform.native.js
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
var ALL_PLATFORMS;
var init_shouldRenderNativePlatform_native = __esmMin((() => {
	init_index_native$7();
	ALL_PLATFORMS = [
		"web",
		"android",
		"ios"
	];
}));
//#endregion
//#region ../helpers/dist/esm/validStyleProps.native.js
var cssShorthandLonghands, textColors, tokenCategories, nonAnimatableViewProps, nonAnimatableFontProps, nonAnimatableTextOnlyProps, nonAnimatableUnitlessProps, nonAnimatableStyleProps, stylePropsUnitless, stylePropsTransform, stylePropsView, stylePropsTextOnly, stylePropsText, stylePropsAll, validPseudoKeys, validStyles;
var init_validStyleProps_native = __esmMin((() => {
	init_index_native$7();
	init_objectSpread2();
	cssShorthandLonghands = {
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
}));
//#endregion
//#region ../helpers/dist/esm/withStaticProperties.native.js
var Decorated, withStaticProperties;
var init_withStaticProperties_native = __esmMin((() => {
	Decorated = /* @__PURE__ */ Symbol(), withStaticProperties = function(component, staticProps) {
		return Object.assign(component, staticProps), component[Decorated] = !0, component;
	};
}));
//#endregion
//#region ../helpers/dist/esm/webOnlyStyleProps.native.js
var nonAnimatableWebViewProps, nonAnimatableWebTextProps, webOnlyStylePropsView, webOnlyStylePropsText;
var init_webOnlyStyleProps_native = __esmMin((() => {
	init_objectSpread2();
	nonAnimatableWebViewProps = {
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
}));
//#endregion
//#region ../helpers/dist/esm/index.native.js
var init_index_native$5 = __esmMin((() => {
	init_index_native$6();
	init_clamp_native();
	init_composeEventHandlers_native();
	init_types_native();
	init_shouldRenderNativePlatform_native();
	init_validStyleProps_native();
	init_withStaticProperties_native();
	init_webOnlyStyleProps_native();
}));
//#endregion
//#region ../web/dist/esm/createVariable.native.js
function _type_of$7(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function constructCSSVariableName(name) {
	return `var(--${process.env.TAMAGUI_CSS_VARIABLE_PREFIX || ""}${name})`;
}
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
function px(value) {
	return {
		val: value,
		needsPx: !0
	};
}
var createVariable, accessed, setDidGetVariableValue, didGetVariableValue, createCSSVariable;
var init_createVariable_native = __esmMin((() => {
	init_index_native$7();
	init_index_native$5();
	init_config_native();
	createVariable = function(props) {
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
	accessed = !1, setDidGetVariableValue = function(val) {
		return accessed = val;
	}, didGetVariableValue = function() {
		return accessed;
	};
	createCSSVariable = function(nameProp) {
		var includeVar = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
		var name = simpleHash(nameProp, 60);
		return includeVar ? constructCSSVariableName(name) : name;
	};
}));
//#endregion
//#region ../web/dist/esm/helpers/getDynamicVal.native.js
function getOppositeScheme(scheme) {
	return scheme === "dark" ? "light" : "dark";
}
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
var colorStyleKeys;
var init_getDynamicVal_native = __esmMin((() => {
	colorStyleKeys = {
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
}));
//#endregion
//#region ../web/dist/esm/hooks/useThemeState.native.js
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
function getScheme(name) {
	return validSchemes[name.split("_")[0]];
}
function getNewThemeName() {
	var parentName = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", props = arguments.length > 1 ? arguments[1] : void 0, forceUpdate = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, { name, reset } = props, componentName = props.unstyled ? void 0 : props.componentName;
	if (name && reset) throw new Error("❌004");
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
var ThemeStateContext, allListeners, listenersByParent, HasRenderedOnce, HadTheme, PendingUpdate, states, localStates, shouldForce, forceUpdateThemes, getThemeState, cacheVersion, themeNameCache, themeNameCacheVer, themes, rootThemeState, getRootThemeState, getThemeBaseName, useThemeState, getNextState, validSchemes, getPropsKey, hasThemeUpdatingProps;
var init_useThemeState_native = __esmMin((() => {
	init_index_native$7();
	init_config_native();
	init_constants_native();
	init_objectSpread2();
	ThemeStateContext = (0, react.createContext)(""), allListeners = /* @__PURE__ */ new Map(), listenersByParent = {}, HasRenderedOnce = /* @__PURE__ */ new WeakMap(), HadTheme = /* @__PURE__ */ new WeakMap(), PendingUpdate = /* @__PURE__ */ new Map(), states = /* @__PURE__ */ new Map(), localStates = /* @__PURE__ */ new Map(), shouldForce = !1, forceUpdateThemes = function() {
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
	validSchemes = {
		light: "light",
		dark: "dark"
	};
	getPropsKey = function(param) {
		var { name, reset, forceClassName, componentName } = param;
		return `${name || ""}${reset || ""}${forceClassName || ""}${componentName || ""}`;
	}, hasThemeUpdatingProps = function(props) {
		return "name" in props || "reset" in props || "forceClassName" in props;
	};
}));
//#endregion
//#region ../web/dist/esm/hooks/doesRootSchemeMatchSystem.native.js
function doesRootSchemeMatchSystem() {
	var _getRootThemeState;
	return ((_getRootThemeState = getRootThemeState()) === null || _getRootThemeState === void 0 ? void 0 : _getRootThemeState.scheme) === Appearance.getColorScheme();
}
var init_doesRootSchemeMatchSystem_native = __esmMin((() => {
	init_esm();
	init_useThemeState_native();
}));
//#endregion
//#region ../web/dist/esm/hooks/getThemeProxied.native.js
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
var cache$2, curKeys, curSchemeKeys, curProps, curState, emptyObject;
var init_getThemeProxied_native = __esmMin((() => {
	init_index_native$7();
	init_config_native();
	init_createVariable_native();
	init_getDynamicVal_native();
	init_doesRootSchemeMatchSystem_native();
	init_objectSpread2();
	cache$2 = /* @__PURE__ */ new Map(), emptyObject = {};
}));
//#endregion
//#region ../web/dist/esm/hooks/useTheme.native.js
var EMPTY, useTheme, useThemeWithState;
var init_useTheme_native = __esmMin((() => {
	init_getThemeProxied_native();
	init_useThemeState_native();
	EMPTY = {}, useTheme = function() {
		"use no memo";
		var [theme] = useThemeWithState(EMPTY);
		return theme;
	}, useThemeWithState = function(props) {
		"use no memo";
		var isRoot = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, keys = (0, react.useRef)(null), schemeKeys = (0, react.useRef)(null), themeState = useThemeState(props, isRoot, keys, schemeKeys);
		return [props.passThrough ? {} : getThemeProxied(props, themeState, keys, schemeKeys), themeState];
	};
}));
//#endregion
//#region ../web/dist/esm/_withStableStyle.native.js
var _excluded$5, EMPTY_EXPRESSIONS, EMPTY_THEME, _withStableStyle;
var init__withStableStyle_native = __esmMin((() => {
	init_config_native();
	init_useMedia_native();
	init_useTheme_native();
	init_useThemeState_native();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$5 = ["_expressions"];
	EMPTY_EXPRESSIONS = [], EMPTY_THEME = {}, _withStableStyle = function(Component, createStyle, hasThemeKeys, hasMediaKeys) {
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
}));
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
var init_compose_refs_native = __esmMin((() => {}));
//#endregion
//#region ../compose-refs/dist/esm/index.native.js
var init_index_native$4 = __esmMin((() => {
	init_compose_refs_native();
}));
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
var init_globalState_native = __esmMin((() => {}));
//#endregion
//#region ../native/dist/esm/gestureState.native.js
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
var state;
var init_gestureState_native = __esmMin((() => {
	init_globalState_native();
	state = createGlobalState("gesture", {
		enabled: !1,
		Gesture: null,
		GestureDetector: null,
		ScrollView: null
	});
}));
//#endregion
//#region ../native/dist/esm/nativeMenuContext.native.js
var NativeMenuContext;
var init_nativeMenuContext_native = __esmMin((() => {
	NativeMenuContext = (0, react.createContext)(!1);
}));
//#endregion
//#region ../native/dist/esm/index.native.js
var init_index_native$3 = __esmMin((() => {
	init_gestureState_native();
	init_nativeMenuContext_native();
}));
//#endregion
//#region ../web/dist/esm/defaultComponentState.native.js
var defaultComponentState, defaultComponentStateMounted, defaultComponentStateShouldEnter;
var init_defaultComponentState_native = __esmMin((() => {
	init_objectSpread2();
	defaultComponentState = {
		hover: !1,
		press: !1,
		pressIn: !1,
		focus: !1,
		focusVisible: !1,
		focusWithin: !1,
		unmounted: !0,
		disabled: !1
	}, defaultComponentStateMounted = _objectSpread2(_objectSpread2({}, defaultComponentState), {}, { unmounted: !1 }), defaultComponentStateShouldEnter = _objectSpread2(_objectSpread2({}, defaultComponentState), {}, { unmounted: "should-enter" });
}));
//#endregion
//#region ../web/dist/esm/helpers/mainThreadPressEvents.native.js
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
var DEFAULT_LONG_PRESS_DELAY, DEFAULT_MIN_PRESS_DURATION;
var init_mainThreadPressEvents_native = __esmMin((() => {
	DEFAULT_LONG_PRESS_DELAY = 500, DEFAULT_MIN_PRESS_DURATION = 130;
}));
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
var init_eventHandling_native = __esmMin((() => {
	init_index_native$5();
	init_index_native$3();
	init_mainThreadPressEvents_native();
}));
//#endregion
//#region ../web/dist/esm/helpers/getDefaultProps.native.js
var getDefaultProps;
var init_getDefaultProps_native = __esmMin((() => {
	init_config_native();
	init_objectSpread2();
	getDefaultProps = function(staticConfig, propsComponentName) {
		var _conf_defaultProps, defaultProps = staticConfig === null || staticConfig === void 0 ? void 0 : staticConfig.defaultProps, conf = getConfig(), name = propsComponentName || (staticConfig === null || staticConfig === void 0 ? void 0 : staticConfig.componentName) || (staticConfig.isText ? "Text" : "View"), userDefaultProps = conf == null || (_conf_defaultProps = conf.defaultProps) === null || _conf_defaultProps === void 0 ? void 0 : _conf_defaultProps[name];
		return userDefaultProps && (defaultProps = defaultProps ? _objectSpread2(_objectSpread2({}, userDefaultProps), defaultProps) : userDefaultProps), defaultProps;
	};
}));
//#endregion
//#region ../web/dist/esm/helpers/resolveAnimationDriver.native.js
function resolveAnimationDriver(driver) {
	var _driver_default;
	return driver ? typeof driver.useAnimations == "function" ? driver : "default" in driver && typeof ((_driver_default = driver.default) === null || _driver_default === void 0 ? void 0 : _driver_default.useAnimations) == "function" ? driver.default : null : null;
}
var init_resolveAnimationDriver_native = __esmMin((() => {}));
//#endregion
//#region ../web/dist/esm/helpers/defaultOffset.native.js
var defaultOffset;
var init_defaultOffset_native = __esmMin((() => {
	defaultOffset = {
		height: 0,
		width: 0
	};
}));
//#endregion
//#region ../web/dist/esm/helpers/normalizeColor.native.js
var normalizeColor, getRgba;
var init_normalizeColor_native = __esmMin((() => {
	init_index_native$8();
	normalizeColor = function(color, opacity) {
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
}));
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
var init_normalizeShadow_native = __esmMin((() => {
	init_defaultOffset_native();
	init_normalizeColor_native();
}));
//#endregion
//#region ../web/dist/esm/helpers/expandStyles.native.js
function fixStyles(style) {
	"elevationAndroid" in style && (style.elevation = style.elevationAndroid, delete style.elevationAndroid), (style.shadowRadius != null || style.shadowColor || style.shadowOpacity != null || style.shadowOffset) && Object.assign(style, normalizeShadow(style));
	for (var key in borderDefaults) if (key in style) {
		var _style, _borderDefaults_key;
		(_style = style)[_borderDefaults_key = borderDefaults[key]] || (_style[_borderDefaults_key] = "solid");
	}
}
var nativeStyle, borderDefaults;
var init_expandStyles_native = __esmMin((() => {
	init_index_native$7();
	init_normalizeShadow_native();
	nativeStyle = "borderStyle", borderDefaults = {
		borderWidth: "borderStyle",
		borderBottomWidth: nativeStyle || "borderBottomStyle",
		borderTopWidth: nativeStyle || "borderTopStyle",
		borderLeftWidth: nativeStyle || "borderLeftStyle",
		borderRightWidth: nativeStyle || "borderRightStyle"
	};
}));
//#endregion
//#region ../web/dist/esm/helpers/getCSSStylesAtomic.native.js
var empty$1, getCSSStylesAtomic, getStyleAtomic, styleToCSS;
var init_getCSSStylesAtomic_native = __esmMin((() => {
	empty$1 = function() {
		console.warn("no-op native");
	}, getCSSStylesAtomic = empty$1, getStyleAtomic = empty$1, styleToCSS = empty$1;
}));
//#endregion
//#region ../web/dist/esm/helpers/isActivePlatform.native.js
function isActivePlatform(key) {
	if (!key.startsWith("$platform")) return !0;
	var platform = key.slice(10);
	return platform === currentPlatform || platform === "native";
}
var init_isActivePlatform_native = __esmMin((() => {
	init_index_native$7();
}));
//#endregion
//#region ../web/dist/esm/helpers/isActiveTheme.native.js
function isActiveTheme(key, activeThemeName) {
	if (key.startsWith("$theme-")) return key.slice(7).startsWith(activeThemeName);
}
var init_isActiveTheme_native = __esmMin((() => {}));
function normalizeValueWithProperty(value) {
	arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
	return value;
}
var init_normalizeValueWithProperty_native = __esmMin((() => {
	init_index_native$7();
	init_index_native$5();
	init_objectSpread2();
	_objectSpread2(_objectSpread2({}, stylePropsAll), {}, {
		translateX: !0,
		translateY: !0
	});
}));
//#endregion
//#region ../web/dist/esm/helpers/parseBorderShorthand.native.js
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
var borderStyles;
var init_parseBorderShorthand_native = __esmMin((() => {
	borderStyles = /* @__PURE__ */ new Set([
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
}));
//#endregion
//#region ../web/dist/esm/helpers/parseOutlineShorthand.native.js
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
var outlineStyles;
var init_parseOutlineShorthand_native = __esmMin((() => {
	outlineStyles = /* @__PURE__ */ new Set([
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
}));
//#endregion
//#region ../web/dist/esm/helpers/expandStyle.native.js
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
var _loop, resizeModeMap, verticalAlignMap, all, horiz, vert, EXPANSIONS, nativeExpansions;
var init_expandStyle_native = __esmMin((() => {
	init_index_native$7();
	init_parseBorderShorthand_native();
	init_parseOutlineShorthand_native();
	init_objectSpread2();
	_loop = function(parent) {
		var _exec, _exec_index, prefix = parent.slice(0, (_exec_index = (_exec = /[A-Z]/.exec(parent)) === null || _exec === void 0 ? void 0 : _exec.index) !== null && _exec_index !== void 0 ? _exec_index : parent.length);
		EXPANSIONS[parent] = EXPANSIONS[parent].map(function(k) {
			return `${prefix}${k}`;
		});
	};
	resizeModeMap = {
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
	nativeExpansions = {
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
}));
//#endregion
//#region ../web/dist/esm/helpers/getVariantExtras.native.js
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
var cache$1, getVariantExtras, fontLanguageCache;
var init_getVariantExtras_native = __esmMin((() => {
	init_config_native();
	init_createVariable_native();
	init_objectSpread2();
	cache$1 = /* @__PURE__ */ new WeakMap(), getVariantExtras = function(styleState) {
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
}));
//#endregion
//#region ../web/dist/esm/helpers/getTokenForKey.native.js
function getLastFontFamilyToken() {
	return _lastFontFamilyToken;
}
function setLastFontFamilyToken(value) {
	_lastFontFamilyToken = value;
}
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
var fontShorthand, colorKeys, _lastFontFamilyToken, getTokenForKey;
var init_getTokenForKey_native = __esmMin((() => {
	init_index_native$5();
	init_config_native();
	init_createVariable_native();
	init_getVariantExtras_native();
	init_normalizeColor_native();
	fontShorthand = {
		fontSize: "size",
		fontWeight: "weight"
	}, colorKeys = tokenCategories.color, _lastFontFamilyToken = null;
	getTokenForKey = function(key, value, styleProps, styleState) {
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
}));
//#endregion
//#region ../web/dist/esm/helpers/isObj.native.js
function _type_of$5(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var isObj;
var init_isObj_native = __esmMin((() => {
	isObj = function(x) {
		return x && !Array.isArray(x) && (typeof x > "u" ? "undefined" : _type_of$5(x)) === "object";
	};
}));
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
var init_normalizeStyle_native = __esmMin((() => {
	init_expandStyle_native();
	init_expandStyles_native();
	init_isObj_native();
	init_normalizeValueWithProperty_native();
	init_pseudoDescriptors_native();
}));
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
var init_parseNativeStyle_native = __esmMin((() => {}));
//#endregion
//#region ../web/dist/esm/helpers/platformResolveValue.native.js
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
var tokenPattern, nativeParseKeys;
var init_platformResolveValue_native = __esmMin((() => {
	init_getTokenForKey_native();
	init_parseNativeStyle_native();
	init_objectSpread2();
	tokenPattern = /(\$[\w.-]+)/g, nativeParseKeys = {
		backgroundImage: !0,
		boxShadow: !0,
		textShadow: !0
	};
}));
//#endregion
//#region ../web/dist/esm/helpers/resolveCompoundTokens.native.js
function resolveCompoundTokens(key, value, styleProps, styleState) {
	return !value.includes("$") || !compoundKeys[key] ? value : platformResolveValue(key, value, styleProps, styleState);
}
var compoundKeys;
var init_resolveCompoundTokens_native = __esmMin((() => {
	init_platformResolveValue_native();
	compoundKeys = {
		boxShadow: !0,
		textShadow: !0,
		filter: !0,
		backgroundImage: !0,
		border: !0,
		outline: !0
	};
}));
//#endregion
//#region ../web/dist/esm/helpers/resolveRem.native.js
function resolveRem(value) {
	var _config_settings, config = getConfig(), _config_settings_remBaseFontSize, baseFontSize = (_config_settings_remBaseFontSize = config == null || (_config_settings = config.settings) === null || _config_settings === void 0 ? void 0 : _config_settings.remBaseFontSize) !== null && _config_settings_remBaseFontSize !== void 0 ? _config_settings_remBaseFontSize : 16;
	if (value.endsWith("rem") && !value.includes(" ")) {
		var numericValue = Number.parseFloat(value);
		if (!Number.isNaN(numericValue)) return PixelRatio.getFontScale() * baseFontSize * numericValue;
	}
	for (var result = 0, match; (match = remRegex.exec(value)) !== null;) {
		var numericValue1 = Number.parseFloat(match[1]);
		Number.isNaN(numericValue1) || (result += PixelRatio.getFontScale() * baseFontSize * numericValue1);
	}
	return remRegex.lastIndex = 0, result;
}
function isRemValue(value) {
	return typeof value == "string" && value.includes("rem");
}
var remRegex;
var init_resolveRem_native = __esmMin((() => {
	init_esm();
	init_config_native();
	remRegex = /(-?[\d.]+)rem/g;
}));
//#endregion
//#region ../web/dist/esm/helpers/webPropsToSkip.native.js
var _, webPropsToSkip;
var init_webPropsToSkip_native = __esmMin((() => {
	init_index_native$5();
	init_objectWithoutProperties();
	init_objectSpread2();
	({pointerEvents: _} = webOnlyStylePropsView), webPropsToSkip = _objectSpread2(_objectSpread2(_objectSpread2({}, _objectWithoutProperties(webOnlyStylePropsView, ["pointerEvents"])), webOnlyStylePropsText), {}, {
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
}));
//#endregion
//#region ../web/dist/esm/helpers/skipProps.native.js
var skipProps;
var init_skipProps_native = __esmMin((() => {
	init_webPropsToSkip_native();
	skipProps = {
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
	Object.assign(skipProps, webPropsToSkip);
}));
//#endregion
//#region ../web/dist/esm/helpers/propMapper.native.js
function _type_of$4(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
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
var propMapper, resolveVariants, variableToFontNameCache, resolveTokensAndVariants, tokenCats;
var init_propMapper_native = __esmMin((() => {
	init_index_native$7();
	init_createVariable_native();
	init_expandStyle_native();
	init_getTokenForKey_native();
	init_getVariantExtras_native();
	init_isObj_native();
	init_normalizeStyle_native();
	init_parseNativeStyle_native();
	init_pseudoDescriptors_native();
	init_resolveCompoundTokens_native();
	init_resolveRem_native();
	init_skipProps_native();
	propMapper = function(key, value, styleState, disabled, map) {
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
	variableToFontNameCache = /* @__PURE__ */ new WeakMap(), resolveTokensAndVariants = function(key, value, styleProps, styleState, parentVariantKey) {
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
}));
//#endregion
//#region ../web/dist/esm/helpers/sortString.native.js
var sortString;
var init_sortString_native = __esmMin((() => {
	sortString = function(a, b) {
		return a < b ? -1 : a > b ? 1 : 0;
	};
}));
//#endregion
//#region ../web/dist/esm/helpers/transformsToString.native.js
function transformsToString(transforms) {
	return transforms.map(function(transform) {
		var type = Object.keys(transform)[0], value = transform[type];
		return type === "matrix" || type === "matrix3d" ? `${type}(${value.join(",")})` : `${type}(${normalizeValueWithProperty(value, type)})`;
	}).join(" ");
}
var init_transformsToString_native = __esmMin((() => {
	init_normalizeValueWithProperty_native();
}));
//#endregion
//#region ../web/dist/esm/helpers/getSplitStyles.native.js
function _type_of$3(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
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
function addStyleToInsertRules(rulesToInsert, styleObject) {}
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
var conf, styleOriginalValues, PROP_SPLIT, getSplitStyles, getSubStyle, useSplitStyles, defaultColor, animatableDefaults, mergeTransform, mapTransformKeys;
var init_getSplitStyles_native = __esmMin((() => {
	init_index_native$7();
	init_index_native$5();
	init_config_native();
	init_useMedia_native();
	init_mediaState_native();
	init_createMediaStyle_native();
	init_expandStyles_native();
	init_getCSSStylesAtomic_native();
	init_getDefaultProps_native();
	init_getDynamicVal_native();
	init_getGroupPropParts_native();
	init_isActivePlatform_native();
	init_isActiveTheme_native();
	init_normalizeValueWithProperty_native();
	init_propMapper_native();
	init_pseudoDescriptors_native();
	init_skipProps_native();
	init_sortString_native();
	init_transformsToString_native();
	init_objectSpread2();
	styleOriginalValues = /* @__PURE__ */ new WeakMap(), PROP_SPLIT = "-";
	getSplitStyles = function(props, staticConfig, theme, themeName, componentState, styleProps, parentSplitStyles, componentContext, groupContext, elementType, startedUnhydrated, debug, animationDriver) {
		var _loop = function(keyOg2) {
			var keyInit = keyOg2, valInit = props[keyInit];
			if (keyInit === "children") return viewProps[keyInit] = valInit, "continue";
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
	getSubStyle = function(styleState, subKey, styleIn, avoidMergeTransform) {
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
	useSplitStyles = function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
		"use no memo";
		return getSplitStyles(a, b, c, d, e, f, g, h, i, j, k, l, m);
	};
	defaultColor = process.env.TAMAGUI_DEFAULT_COLOR || "rgba(0,0,0,0)", animatableDefaults = _objectSpread2(_objectSpread2({}, Object.fromEntries(Object.entries(tokenCategories.color).map(function(param) {
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
}));
//#endregion
//#region ../web/dist/esm/helpers/mergeSlotStyleProps.native.js
function mergeSlotStyleProps(base, overlay) {
	for (var key in overlay) {
		var baseVal = base[key], overlayVal = overlay[key];
		overlayVal !== void 0 && (key === "style" ? base.style = baseVal && overlayVal ? _objectSpread2(_objectSpread2({}, baseVal), overlayVal) : overlayVal || baseVal : key === "className" ? base.className = baseVal && overlayVal ? `${baseVal} ${overlayVal}` : overlayVal || baseVal : key === "ref" ? base.ref = baseVal && overlayVal ? composeRefs(baseVal, overlayVal) : overlayVal || baseVal : isEventHandler.test(key) && typeof baseVal == "function" && typeof overlayVal == "function" ? base[key] = composeEventHandlers(baseVal, overlayVal) : base[key] = overlayVal);
	}
	return base;
}
var isEventHandler;
var init_mergeSlotStyleProps_native = __esmMin((() => {
	init_index_native$4();
	init_index_native$5();
	init_objectSpread2();
	isEventHandler = /^on[A-Z]/;
}));
//#endregion
//#region ../web/dist/esm/helpers/mergeRenderElementProps.native.js
function mergeRenderElementProps(elementProps, viewProps, children) {
	var merged = mergeSlotStyleProps(_objectSpread2({}, elementProps), viewProps);
	return merged.children = children, merged;
}
var init_mergeRenderElementProps_native = __esmMin((() => {
	init_mergeSlotStyleProps_native();
	init_objectSpread2();
}));
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
var init_pointerEvents_native = __esmMin((() => {
	init_index_native$5();
	init_objectSpread2();
}));
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
var init_pseudoTransitions_native = __esmMin((() => {}));
//#endregion
//#region ../web/dist/esm/helpers/setElementProps.native.js
function setElementProps(element) {
	element && !element.getBoundingClientRect && (element.getBoundingClientRect = function() {
		if (element.unstable_getBoundingClientRect != null) return element.unstable_getBoundingClientRect();
	});
}
var init_setElementProps_native = __esmMin((() => {}));
//#endregion
//#region ../web/dist/esm/helpers/subscribeToContextGroup.native.js
var subscribeToContextGroup, createGroupListener;
var init_subscribeToContextGroup_native = __esmMin((() => {
	init_index_native$12();
	init_useMedia_native();
	init_objectSpread2();
	subscribeToContextGroup = function(props) {
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
}));
//#endregion
//#region ../web/dist/esm/views/Theme.native.js
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
var Theme;
var init_Theme_native = __esmMin((() => {
	init_index_native$7();
	init_createVariable_native();
	init_useTheme_native();
	init_useThemeState_native();
	init_objectSpread2();
	Theme = /* @__PURE__ */ (0, react.forwardRef)(function(props, ref) {
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
}));
//#endregion
//#region ../web/dist/esm/helpers/themeable.native.js
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
var _excluded$4;
var init_themeable_native = __esmMin((() => {
	init_Theme_native();
	init_getDefaultProps_native();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$4 = [
		"theme",
		"componentName",
		"themeReset"
	];
}));
//#endregion
//#region ../use-did-finish-ssr/dist/esm/ClientOnly.native.js
var ClientOnlyContext, ClientOnly;
var init_ClientOnly_native = __esmMin((() => {
	ClientOnlyContext = /* @__PURE__ */ (0, react.createContext)(!1), ClientOnly = function(param) {
		var { children, enabled } = param, existingValue = (0, react.useContext)(ClientOnlyContext);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ClientOnlyContext.Provider, {
			value: enabled !== null && enabled !== void 0 ? enabled : existingValue,
			children
		});
	};
}));
//#endregion
//#region ../use-did-finish-ssr/dist/esm/index.native.js
function useDidFinishSSR() {
	react.useContext(ClientOnlyContext);
	return !0;
}
function useClientValue(value) {
	return useDidFinishSSR() ? typeof value == "function" ? value() : value : void 0;
}
var useIsClientOnly;
var init_index_native$2 = __esmMin((() => {
	init_ClientOnly_native();
	useIsClientOnly = function() {
		return react.useContext(ClientOnlyContext);
	};
}));
//#endregion
//#region ../web/dist/esm/hooks/useComponentState.native.js
function _type_of$2(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function hasAnimatedStyleValue(style) {
	return Object.keys(style).some(function(k) {
		var val = style[k];
		return val && (typeof val > "u" ? "undefined" : _type_of$2(val)) === "object" && "_animation" in val;
	});
}
var useComponentState, isDisabled;
var init_useComponentState_native = __esmMin((() => {
	init_index_native$7();
	init_index_native$12();
	init_index_native$2();
	init_config_native();
	init_defaultComponentState_native();
	init_isObj_native();
	init_objectSpread2();
	useComponentState = function(props, animationDriver, staticConfig, config) {
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
	isDisabled = function(props) {
		var _props_accessibilityState;
		return props.disabled || props.passThrough || ((_props_accessibilityState = props.accessibilityState) === null || _props_accessibilityState === void 0 ? void 0 : _props_accessibilityState.disabled) || props["aria-disabled"] || props.accessibilityDisabled || !1;
	};
}));
//#endregion
//#region ../web/dist/esm/setupHooks.native.js
function setupHooks(next) {
	Object.assign(hooks, next);
}
var hooks;
var init_setupHooks_native = __esmMin((() => {
	hooks = {};
}));
//#endregion
//#region ../web/dist/esm/views/Slot.native.js
function mergeSlotProps(child, slotProps) {
	var childProps = child.props, isHTMLChild = typeof child.type == "string";
	if (isHTMLChild) for (var key in pressMap) key in slotProps && (slotProps[pressMap[key]] = slotProps[key], delete slotProps[key]);
	var merged = mergeSlotStyleProps(slotProps, childProps);
	if (isHTMLChild) for (var key1 in pressMap) key1 in merged && (merged[pressMap[key1]] = merged[key1], delete merged[key1]);
	return merged;
}
var _excluded$3, Slot, Slottable, pressMap;
var init_Slot_native = __esmMin((() => {
	init_index_native$4();
	init_index_native$7();
	init_mergeSlotStyleProps_native();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$3 = ["children"];
	Slot = /* @__PURE__ */ (0, react.memo)(/* @__PURE__ */ (0, react.forwardRef)(function(props, forwardedRef) {
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
	pressMap = {};
}));
//#endregion
//#region ../web/dist/esm/createComponent.native.js
function _type_of$1(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
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
function getRenderElementForPlatform(potential) {
	if (!isHTMLElement(potential)) return potential;
}
function isHTMLElement(el) {
	return typeof el.type == "string" && el.type[0] === el.type[0].toLowerCase();
}
var _excluded$2, _excluded2$1, componentSetStates, avoidReRenderKeys, BaseText, BaseView, hasSetupBaseViews, lastInteractionWasKeyboard, lastInteractionWasTouch, fromPx, getCustomRender;
var init_createComponent_native = __esmMin((() => {
	init_index_native$4();
	init_index_native$7();
	init_index_native$3();
	init_index_native$5();
	init_index_native$12();
	init_config_native();
	init_ComponentContext_native();
	init_GroupContext_native();
	init_createVariable_native();
	init_defaultComponentState_native();
	init_eventHandling_native();
	init_getDefaultProps_native();
	init_resolveAnimationDriver_native();
	init_getSplitStyles_native();
	init_mergeProps_native();
	init_mergeRenderElementProps_native();
	init_objectIdentityKey_native();
	init_pointerEvents_native();
	init_pseudoTransitions_native();
	init_setElementProps_native();
	init_subscribeToContextGroup_native();
	init_themeable_native();
	init_useComponentState_native();
	init_useMedia_native();
	init_useTheme_native();
	init_setupHooks_native();
	init_Slot_native();
	init_Theme_native();
	init_objectSpread2();
	init_objectWithoutProperties();
	_excluded$2 = [
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
	componentSetStates = /* @__PURE__ */ new Set(), avoidReRenderKeys = /* @__PURE__ */ new Set([
		"hover",
		"press",
		"pressIn",
		"group",
		"focus",
		"focusWithin",
		"media",
		"group"
	]);
	hasSetupBaseViews = !1, lastInteractionWasKeyboard = { value: !1 }, lastInteractionWasTouch = { value: !1 };
	fromPx = function(val) {
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
}));
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
var init_getExpandedShorthands_native = __esmMin((() => {
	init_config_native();
}));
//#endregion
//#region ../web/dist/esm/helpers/getShorthandValue.native.js
var inverseShorthands, getShorthandValue;
var init_getShorthandValue_native = __esmMin((() => {
	init_config_native();
	inverseShorthands = null, getShorthandValue = function(props, key) {
		inverseShorthands || (inverseShorthands = getConfig().inverseShorthands);
		var _props_key;
		return (_props_key = props[key]) !== null && _props_key !== void 0 ? _props_key : inverseShorthands ? props[inverseShorthands[key]] : void 0;
	};
}));
//#endregion
//#region ../web/dist/esm/helpers/getThemeCSSRules.native.js
function getThemeCSSRules() {
	return [];
}
var init_getThemeCSSRules_native = __esmMin((() => {})), registerCSSVariable, variableToCSS, tokensValueToVariable, autoVariables, mutatedAutoVariables;
var init_registerCSSVariable_native = __esmMin((() => {
	init_createVariable_native();
	registerCSSVariable = function(v) {
		process.env.TAMAGUI_DID_OUTPUT_CSS || tokensValueToVariable.set(getVariableValue(v), v);
	}, variableToCSS = function(v) {
		var unitless = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		return process.env.TAMAGUI_DID_OUTPUT_CSS ? "" : `--${process.env.TAMAGUI_CSS_VARIABLE_PREFIX || ""}${createCSSVariable(v.name, !1)}:${!unitless && typeof v.val == "number" ? `${v.val}px` : v.val}`;
	}, tokensValueToVariable = /* @__PURE__ */ new Map(), autoVariables = [], mutatedAutoVariables = [];
}));
//#endregion
//#region ../web/dist/esm/helpers/insertStyleRule.native.js
function scanAllSheets() {
	arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
	arguments.length > 1 && arguments[1];
	if (!process.env.TAMAGUI_DID_OUTPUT_CSS) return;
}
function stopAccumulatingRules() {
	trackAllRules = !1;
}
function setNonce(_) {}
function insertStyleRules(rulesToInsert) {}
var bailAfterEnv, trackAllRules;
var init_insertStyleRule_native = __esmMin((() => {
	bailAfterEnv = process.env.TAMAGUI_BAIL_AFTER_SCANNING_X_CSS_RULES;
	bailAfterEnv && +bailAfterEnv;
	process.env.TAMAGUI_INSERT_SELECTOR_TRIES && +process.env.TAMAGUI_INSERT_SELECTOR_TRIES;
}));
//#endregion
//#region ../web/dist/esm/helpers/isTamaguiComponent.native.js
function isTamaguiComponent(comp, name) {
	var config = comp === null || comp === void 0 ? void 0 : comp.staticConfig;
	return !!(config && (!name || name === config.componentName));
}
var init_isTamaguiComponent_native = __esmMin((() => {}));
//#endregion
//#region ../web/dist/esm/helpers/isTamaguiElement.native.js
var isTamaguiElement;
var init_isTamaguiElement_native = __esmMin((() => {
	init_isTamaguiComponent_native();
	isTamaguiElement = function(child, name) {
		return /* @__PURE__ */ react.default.isValidElement(child) && isTamaguiComponent(child.type, name);
	};
}));
//#endregion
//#region ../web/dist/esm/helpers/proxyThemeToParents.native.js
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
var themesRaw;
var init_proxyThemeToParents_native = __esmMin((() => {
	themesRaw = {};
}));
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
var removeStarting$;
var init_proxyThemeVariables_native = __esmMin((() => {
	removeStarting$ = function(str) {
		return typeof str == "string" && str[0] === "$" ? str.slice(1) : str;
	};
}));
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
var init_themes_native = __esmMin((() => {
	init_createVariable_native();
}));
//#endregion
//#region ../web/dist/esm/helpers/wrapStyleTags.native.js
function getStyleTags(styles) {}
var init_wrapStyleTags_native = __esmMin((() => {}));
//#endregion
//#region ../web/dist/esm/createFont.native.js
var fontWeights, processSection, createFont;
var init_createFont_native = __esmMin((() => {
	fontWeights = [
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
}));
//#endregion
//#region ../web/dist/esm/createShorthands.native.js
function createShorthands(shorthands) {
	return Object.freeze(shorthands);
}
var init_createShorthands_native = __esmMin((() => {}));
//#endregion
//#region ../web/dist/esm/createVariables.native.js
function _type_of(obj) {
	"@swc/helpers - typeof";
	return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var cache, createVariables;
var init_createVariables_native = __esmMin((() => {
	init_index_native$7();
	init_index_native$5();
	init_createVariable_native();
	cache = /* @__PURE__ */ new WeakMap(), createVariables = function(tokens) {
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
}));
//#endregion
//#region ../web/dist/esm/helpers/defaultAnimationDriver.native.js
var noAnimationDriver, createEmptyAnimationDriver, defaultAnimationDriver;
var init_defaultAnimationDriver_native = __esmMin((() => {
	noAnimationDriver = function(method) {
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
}));
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
var init_createDesignSystem_native = __esmMin((() => {
	init_index_native$7();
	init_createVariable_native();
	init_registerCSSVariable_native();
	init_getThemeCSSRules_native();
}));
//#endregion
//#region ../web/dist/esm/insertFont.native.js
function insertFont(name, fontIn) {
	var tokened = createVariables(createFont(fontIn), name), parsed = parseFont(tokened);
	return setConfigFont(name, tokened, parsed), parsed;
}
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
var updateFont;
var init_insertFont_native = __esmMin((() => {
	init_config_native();
	init_createFont_native();
	init_createVariables_native();
	init_registerCSSVariable_native();
	updateFont = insertFont;
}));
//#endregion
//#region ../web/dist/esm/Tamagui.native.js
var Tamagui, identifierToValue, getValueFromIdentifier, setIdentifierValue;
var init_Tamagui_native = __esmMin((() => {
	Tamagui = void 0, identifierToValue = /* @__PURE__ */ new Map(), getValueFromIdentifier = function(identifier) {
		return identifierToValue.get(identifier);
	}, setIdentifierValue = function(identifier, value) {
		identifierToValue.set(identifier, value);
	};
}));
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
var builtinShorthands;
var init_createTamagui_native = __esmMin((() => {
	init_config_native();
	init_createVariables_native();
	init_defaultAnimationDriver_native();
	init_resolveAnimationDriver_native();
	init_createDesignSystem_native();
	init_insertStyleRule_native();
	init_proxyThemeToParents_native();
	init_themes_native();
	init_useMedia_native();
	init_insertFont_native();
	init_objectSpread2();
	builtinShorthands = {
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
}));
//#endregion
//#region ../web/dist/esm/createTokens.native.js
function createTokens(tokens) {
	var _process_env_TAMAGUI_TOKEN_PREFIX;
	return createVariables(tokens, (_process_env_TAMAGUI_TOKEN_PREFIX = process.env.TAMAGUI_TOKEN_PREFIX) !== null && _process_env_TAMAGUI_TOKEN_PREFIX !== void 0 ? _process_env_TAMAGUI_TOKEN_PREFIX : "t");
}
var init_createTokens_native = __esmMin((() => {
	init_createVariables_native();
}));
//#endregion
//#region ../web/dist/esm/setupReactNative.native.js
function getReactNativeConfig(Component) {
	if (Component) {
		var _Component_propTypes, _Component_propTypes1, _Component_propTypes2;
		return !((_Component_propTypes = Component.propTypes) === null || _Component_propTypes === void 0) && _Component_propTypes.onTextInput || !((_Component_propTypes1 = Component.propTypes) === null || _Component_propTypes1 === void 0) && _Component_propTypes1.onChangeText ? RNConfigs.TextInput : Component.getSizeWithHeaders ? RNConfigs.Image : !((_Component_propTypes2 = Component.propTypes) === null || _Component_propTypes2 === void 0) && _Component_propTypes2.textBreakStrategy ? RNConfigs.Text : RNConfigs.default;
	}
}
var RNConfigs;
var init_setupReactNative_native = __esmMin((() => {
	RNConfigs = {
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
}));
//#endregion
//#region ../web/dist/esm/helpers/mergeVariants.native.js
var mergeVariants;
var init_mergeVariants_native = __esmMin((() => {
	init_objectSpread2();
	mergeVariants = function(parentVariants, ourVariants) {
		var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, variants = {};
		for (var key in ourVariants) {
			var parentVariant = parentVariants === null || parentVariants === void 0 ? void 0 : parentVariants[key], ourVariant = ourVariants[key];
			!parentVariant || typeof ourVariant == "function" ? variants[key] = ourVariant : parentVariant && !ourVariant ? variants[key] = parentVariant[key] : level === 0 ? variants[key] = mergeVariants(parentVariant, ourVariant, level + 1) : variants[key] = _objectSpread2(_objectSpread2({}, parentVariant), ourVariant);
		}
		return _objectSpread2(_objectSpread2({}, parentVariants), variants);
	};
}));
//#endregion
//#region ../web/dist/esm/styled.native.js
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
var _excluded$1, _excluded2, textLikeElements, styledExport;
var init_styled_native = __esmMin((() => {
	init_createComponent_native();
	init_mergeVariants_native();
	init_setupReactNative_native();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded$1 = [
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
	textLikeElements = /* @__PURE__ */ new Set([
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
	styledExport = new Proxy(styled, { get(target, prop) {
		return prop in target ? target[prop] : function(options) {
			return styledHtml(prop, options);
		};
	} });
}));
//#endregion
//#region ../web/dist/esm/interfaces/GetRef.native.js
var init_GetRef_native = __esmMin((() => {}));
//#endregion
//#region ../web/dist/esm/hooks/useIsTouchDevice.native.js
var useIsTouchDevice;
var init_useIsTouchDevice_native = __esmMin((() => {
	init_index_native$7();
	init_index_native$2();
	useIsTouchDevice = function() {
		return !0;
	};
}));
//#endregion
//#region ../web/dist/esm/views/View.native.js
var View$1;
var init_View_native = __esmMin((() => {
	init_index_native$5();
	init_createComponent_native();
	View$1 = createComponent({
		acceptsClassName: !0,
		validStyles
	});
}));
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
var init_useProps_native = __esmMin((() => {
	init_index_native$7();
	init_config_native();
	init_ComponentContext_native();
	init_GroupContext_native();
	init_getSplitStyles_native();
	init_subscribeToContextGroup_native();
	init_View_native();
	init_useComponentState_native();
	init_mediaState_native();
	init_useMedia_native();
	init_useTheme_native();
	init_objectSpread2();
}));
//#endregion
//#region ../web/dist/esm/hooks/useThemeName.native.js
function useThemeName() {
	var _useThemeState;
	return ((_useThemeState = useThemeState(forceUpdateState, !1, forceKeys)) === null || _useThemeState === void 0 ? void 0 : _useThemeState.name) || "";
}
var forceUpdateState, forceKeys;
var init_useThemeName_native = __esmMin((() => {
	init_useThemeState_native();
	forceUpdateState = {
		forceClassName: !0,
		deopt: !0,
		needsUpdate: function() {
			return !0;
		}
	}, forceKeys = { current: /* @__PURE__ */ new Set([""]) };
}));
//#endregion
//#region ../web/dist/esm/views/Configuration.native.js
var Configuration;
var init_Configuration_native = __esmMin((() => {
	init_index_native$2();
	init_ComponentContext_native();
	init_objectSpread2();
	Configuration = function(props) {
		var current = react.default.useContext(ComponentContext), _props_disableSSR;
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ClientOnly, {
			enabled: (_props_disableSSR = props.disableSSR) !== null && _props_disableSSR !== void 0 ? _props_disableSSR : current.disableSSR,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComponentContext.Provider, _objectSpread2(_objectSpread2({}, current), props))
		});
	};
}));
//#endregion
//#region ../web/dist/esm/views/TamaguiRoot.native.js
function TamaguiRoot(props) {
	return props.children;
}
var init_TamaguiRoot_native = __esmMin((() => {}));
//#endregion
//#region ../web/dist/esm/views/FontLanguage.native.js
function FontLanguage(param) {
	var { children } = param, props = _objectWithoutProperties(param, _excluded), parentProps = react.default.useContext(ComponentContext), language = react.default.useMemo(function() {
		return props;
	}, [JSON.stringify(props)]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComponentContext.Provider, _objectSpread2(_objectSpread2({}, parentProps), {}, {
		language,
		children
	}));
}
var _excluded;
var init_FontLanguage_native = __esmMin((() => {
	init_ComponentContext_native();
	init_objectWithoutProperties();
	init_objectSpread2();
	_excluded = ["children"];
}));
//#endregion
//#region ../web/dist/esm/views/ThemeProvider.native.js
var ThemeProvider;
var init_ThemeProvider_native = __esmMin((() => {
	init_config_native();
	init_Theme_native();
	ThemeProvider = function(props) {
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
}));
//#endregion
//#region ../web/dist/esm/views/TamaguiProvider.native.js
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
var _cachedFirstKey, _cachedConfig;
var init_TamaguiProvider_native = __esmMin((() => {
	init_index_native$7();
	init_index_native$2();
	init_config_native();
	init_ComponentContext_native();
	init_insertStyleRule_native();
	init_useMedia_native();
	init_resolveAnimationDriver_native();
	init_TamaguiRoot_native();
	init_ThemeProvider_native();
}));
//#endregion
//#region ../web/dist/esm/views/Text.native.js
var Text$1;
var init_Text_native = __esmMin((() => {
	init_index_native$5();
	init_createComponent_native();
	init_objectSpread2();
	Text$1 = createComponent({
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
}));
//#endregion
//#region ../use-event/dist/esm/useGet.native.js
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
var useIsomorphicInsertionEffect;
var init_useGet_native = __esmMin((() => {
	useIsomorphicInsertionEffect = typeof window > "u" ? react.useEffect : react.useInsertionEffect || react.useLayoutEffect;
}));
//#endregion
//#region ../use-event/dist/esm/useEvent.native.js
function useEvent(callback) {
	return useGet(callback, defaultValue, !0);
}
var defaultValue;
var init_useEvent_native = __esmMin((() => {
	init_useGet_native();
	defaultValue = function() {
		throw new Error("Cannot call an event handler while rendering.");
	};
}));
//#endregion
//#region ../use-event/dist/esm/index.native.js
var init_index_native$1 = __esmMin((() => {
	init_useEvent_native();
	init_useGet_native();
}));
//#endregion
//#region ../web/dist/esm/index.native.js
var init_index_native = __esmMin((() => {
	init_ComponentContext_native();
	init_GroupContext_native();
	init_index_native$12();
	init__withStableStyle_native();
	init_createComponent_native();
	init_createMediaStyle_native();
	init_createStyledContext_native();
	init_getDefaultProps_native();
	init_expandStyles_native();
	init_getCSSStylesAtomic_native();
	init_getExpandedShorthands_native();
	init_getShorthandValue_native();
	init_getSplitStyles_native();
	init_getThemeCSSRules_native();
	init_getVariantExtras_native();
	init_registerCSSVariable_native();
	init_insertStyleRule_native();
	init_isTamaguiComponent_native();
	init_isTamaguiElement_native();
	init_matchMedia_native();
	init_mergeProps_native();
	init_mergeSlotStyleProps_native();
	init_normalizeColor_native();
	init_normalizeStyle_native();
	init_normalizeValueWithProperty_native();
	init_propMapper_native();
	init_proxyThemeToParents_native();
	init_proxyThemeVariables_native();
	init_pseudoDescriptors_native();
	init_pseudoTransitions_native();
	init_themeable_native();
	init_themes_native();
	init_transformsToString_native();
	init_wrapStyleTags_native();
	init_createComponent_native();
	init_createFont_native();
	init_createShorthands_native();
	init_createTamagui_native();
	init_createTokens_native();
	init_createVariable_native();
	init_createVariables_native();
	init_insertFont_native();
	init_setupReactNative_native();
	init_styled_native();
	init_Tamagui_native();
	init_GetRef_native();
	init_config_native();
	init_constants_native();
	init_useIsTouchDevice_native();
	init_useMedia_native();
	init_mediaObjectToString_native();
	init_mediaState_native();
	init_useProps_native();
	init_useTheme_native();
	init_useThemeName_native();
	init_useThemeState_native();
	init_Configuration_native();
	init_TamaguiRoot_native();
	init_FontLanguage_native();
	init_Slot_native();
	init_TamaguiProvider_native();
	init_Text_native();
	init_Theme_native();
	init_ThemeProvider_native();
	init_View_native();
	init_index_native$4();
	init_index_native$7();
	init_index_native$5();
	init_index_native$2();
	init_index_native$1();
	init_setupHooks_native();
}));
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
init_esm();
init_objectSpread2();
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
		_class_call_check(this, NativeMediaQueryList2), _define_property(this, "query", void 0), _define_property(this, "listeners", void 0), this.query = query, this.listeners = [], this.notify(), Dimensions.addEventListener("change", function() {
			_this.notify();
		});
	}
	return _create_class(NativeMediaQueryList2, [
		{
			key: "orientation",
			get: function() {
				var windowDimensions = Dimensions.get("window");
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
				var windowDimensions = Dimensions.get("window");
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
init_index_native();
function createMedia(media) {
	return setupMatchMedia(matchMedia$1), media;
}
//#endregion
//#region src/createOptimizedView.native.tsx
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
* @flow strict-local
* @format
*/
function createOptimizedView(children, viewProps, baseViews) {
	var _ariaLabelledBy$split, _viewProps$style;
	const TextAncestor = baseViews.TextAncestor;
	const { accessibilityElementsHidden, accessibilityLabel, accessibilityLabelledBy, accessibilityLiveRegion, accessibilityState, accessibilityValue, "aria-busy": ariaBusy, "aria-checked": ariaChecked, "aria-disabled": ariaDisabled, "aria-expanded": ariaExpanded, "aria-hidden": ariaHidden, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-live": ariaLive, "aria-selected": ariaSelected, "aria-valuemax": ariaValueMax, "aria-valuemin": ariaValueMin, "aria-valuenow": ariaValueNow, "aria-valuetext": ariaValueText, focusable, id, role, tabIndex } = viewProps;
	const _accessibilityLabelledBy = (_ariaLabelledBy$split = ariaLabelledBy === null || ariaLabelledBy === void 0 ? void 0 : ariaLabelledBy.split(/\s*,\s*/g)) !== null && _ariaLabelledBy$split !== void 0 ? _ariaLabelledBy$split : accessibilityLabelledBy;
	let _accessibilityState;
	if (accessibilityState != null || ariaBusy != null || ariaChecked != null || ariaDisabled != null || ariaExpanded != null || ariaSelected != null) _accessibilityState = {
		busy: ariaBusy !== null && ariaBusy !== void 0 ? ariaBusy : accessibilityState === null || accessibilityState === void 0 ? void 0 : accessibilityState.busy,
		checked: ariaChecked !== null && ariaChecked !== void 0 ? ariaChecked : accessibilityState === null || accessibilityState === void 0 ? void 0 : accessibilityState.checked,
		disabled: ariaDisabled !== null && ariaDisabled !== void 0 ? ariaDisabled : accessibilityState === null || accessibilityState === void 0 ? void 0 : accessibilityState.disabled,
		expanded: ariaExpanded !== null && ariaExpanded !== void 0 ? ariaExpanded : accessibilityState === null || accessibilityState === void 0 ? void 0 : accessibilityState.expanded,
		selected: ariaSelected !== null && ariaSelected !== void 0 ? ariaSelected : accessibilityState === null || accessibilityState === void 0 ? void 0 : accessibilityState.selected
	};
	let _accessibilityValue;
	if (accessibilityValue != null || ariaValueMax != null || ariaValueMin != null || ariaValueNow != null || ariaValueText != null) _accessibilityValue = {
		max: ariaValueMax !== null && ariaValueMax !== void 0 ? ariaValueMax : accessibilityValue === null || accessibilityValue === void 0 ? void 0 : accessibilityValue.max,
		min: ariaValueMin !== null && ariaValueMin !== void 0 ? ariaValueMin : accessibilityValue === null || accessibilityValue === void 0 ? void 0 : accessibilityValue.min,
		now: ariaValueNow !== null && ariaValueNow !== void 0 ? ariaValueNow : accessibilityValue === null || accessibilityValue === void 0 ? void 0 : accessibilityValue.now,
		text: ariaValueText !== null && ariaValueText !== void 0 ? ariaValueText : accessibilityValue === null || accessibilityValue === void 0 ? void 0 : accessibilityValue.text
	};
	if ((_viewProps$style = viewProps.style) === null || _viewProps$style === void 0 ? void 0 : _viewProps$style.pointerEvents) {
		var _viewProps$style2;
		viewProps.pointerEvents = (_viewProps$style2 = viewProps.style) === null || _viewProps$style2 === void 0 ? void 0 : _viewProps$style2.pointerEvents;
	}
	if (id) viewProps.nativeID = id;
	if (ariaHidden === true) viewProps.importantForAccessibility = "no-hide-descendants";
	if (_accessibilityValue) viewProps.accessibilityValue = _accessibilityValue;
	if (role) viewProps.accessibilityRole = getAccessibilityRoleFromRole(role);
	if (ariaLive === "off") viewProps.accessibilityLiveRegion = "none";
	else {
		const alr = ariaLive !== null && ariaLive !== void 0 ? ariaLive : accessibilityLiveRegion;
		if (alr) viewProps.accessibilityLiveRegion = alr;
	}
	const al = ariaLabel !== null && ariaLabel !== void 0 ? ariaLabel : accessibilityLabel;
	if (al) viewProps.accessibilityLabel = al;
	const f = tabIndex !== void 0 ? !tabIndex : focusable;
	if (f != null) viewProps.focusable = f;
	if (_accessibilityState != null) viewProps.accessibilityState = _accessibilityState;
	const ah = ariaHidden !== null && ariaHidden !== void 0 ? ariaHidden : accessibilityElementsHidden;
	if (ah != null) viewProps.accessibilityElementsHidden = ah;
	if (_accessibilityLabelledBy) viewProps.accessibilityLabelledBy = _accessibilityLabelledBy;
	const isInText = react.default.useContext(TextAncestor);
	const finalElement = react.default.createElement("RCTView", viewProps, children);
	if (!isInText) return finalElement;
	return react.default.createElement(TextAncestor.Provider, { value: false }, finalElement);
}
function getAccessibilityRoleFromRole(role) {
	switch (role) {
		case "alert": return "alert";
		case "alertdialog": return;
		case "application": return;
		case "article": return;
		case "banner": return;
		case "button": return "button";
		case "cell": return;
		case "checkbox": return "checkbox";
		case "columnheader": return;
		case "combobox": return "combobox";
		case "complementary": return;
		case "contentinfo": return;
		case "definition": return;
		case "dialog": return;
		case "directory": return;
		case "document": return;
		case "feed": return;
		case "figure": return;
		case "form": return;
		case "grid": return "grid";
		case "group": return;
		case "heading": return "header";
		case "img": return "image";
		case "link": return "link";
		case "list": return "list";
		case "listitem": return;
		case "log": return;
		case "main": return;
		case "marquee": return;
		case "math": return;
		case "menu": return "menu";
		case "menubar": return "menubar";
		case "menuitem": return "menuitem";
		case "meter": return;
		case "navigation": return;
		case "none": return "none";
		case "note": return;
		case "option": return;
		case "presentation": return "none";
		case "progressbar": return "progressbar";
		case "radio": return "radio";
		case "radiogroup": return "radiogroup";
		case "region": return;
		case "row": return;
		case "rowgroup": return;
		case "rowheader": return;
		case "scrollbar": return "scrollbar";
		case "searchbox": return "search";
		case "separator": return;
		case "slider": return "adjustable";
		case "spinbutton": return "spinbutton";
		case "status": return;
		case "summary": return "summary";
		case "switch": return "switch";
		case "tab": return "tab";
		case "table": return;
		case "tablist": return "tablist";
		case "tabpanel": return;
		case "term": return;
		case "timer": return "timer";
		case "toolbar": return "toolbar";
		case "tooltip": return;
		case "tree": return;
		case "treegrid": return;
		case "treeitem": return;
	}
}
//#endregion
//#region src/getBaseViews.native.ts
function getBaseViews() {
	var _native$default, _native$default2, _native$default3, _native$default4;
	const native = (init_esm(), __toCommonJS(esm_exports));
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
init_objectSpread2();
init_index_native();
init_index_native$11();
init_index_native();
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
var baseViews = getBaseViews();
setupHooks(_objectSpread2({
	getBaseViews,
	setElementProps: (node) => {},
	usePropsTransform(elementType, propsIn, stateRef, willHydrate) {}
}, { useChildren(elementType, children, viewProps) {
	if (elementType === baseViews.View && baseViews.TextAncestor) return createOptimizedView(children, viewProps, baseViews);
} }));
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
