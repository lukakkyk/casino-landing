import { isAndroid, isClient, isIos, isWeb, useIsomorphicLayoutEffect } from "@tamagui/constants";
import { StyleObjectIdentifier, StyleObjectProperty, StyleObjectPseudo, stylePropsText, stylePropsTransform, tokenCategories, validPseudoKeys, validStyles as validStylesView } from "@tamagui/helpers";
import React from "react";
import { getConfig, getFont, getSetting } from "../config.native.js";
import { isDevTools } from "../constants/isDevTools.native.js";
import { getMediaImportanceIfMoreImportant, getMediaKey, mediaKeyMatch } from "../hooks/useMedia.native.js";
import { mediaState as globalMediaState, mediaQueryConfig } from "./mediaState.native.js";
import { createMediaStyle } from "./createMediaStyle.native.js";
import { fixStyles } from "./expandStyles.native.js";
import { getCSSStylesAtomic, getStyleAtomic, styleToCSS } from "./getCSSStylesAtomic.native.js";
import { getDefaultProps } from "./getDefaultProps.native.js";
import { extractValueFromDynamic, getDynamicVal, getOppositeScheme, isColorStyleKey } from "./getDynamicVal.native.js";
import { getGroupPropParts } from "./getGroupPropParts.native.js";
import { isActivePlatform } from "./isActivePlatform.native.js";
import { isActiveTheme } from "./isActiveTheme.native.js";
import { log } from "./log.native.js";
import { normalizeValueWithProperty } from "./normalizeValueWithProperty.native.js";
import { propMapper } from "./propMapper.native.js";
import { pseudoDescriptors, pseudoPriorities } from "./pseudoDescriptors.native.js";
import { skipProps } from "./skipProps.native.js";
import { sortString } from "./sortString.native.js";
import { transformsToString } from "./transformsToString.native.js";
function _type_of(obj) {
  "@swc/helpers - typeof";

  return obj && typeof Symbol < "u" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var conf,
  styleOriginalValues = /* @__PURE__ */new WeakMap(),
  PROP_SPLIT = "-";
function normalizeGroupKey(key, groupContext) {
  var parts = key.split("-"),
    plen = parts.length;
  if (
  // check if its actually a simple group selector to avoid breaking selectors
  plen === 2 || plen === 3 && pseudoPriorities[parts[parts.length - 1]]) {
    var name = parts[1];
    if (name !== "true" && groupContext && !groupContext[name]) return key.replace("$group-", "$group-true-");
  }
  return key;
}
function isValidStyleKey(key, validStyles, accept) {
  return key in validStyles ? !0 : accept && key in accept;
}
var getSplitStyles = function (props, staticConfig, theme, themeName, componentState, styleProps, parentSplitStyles, componentContext, groupContext, elementType, startedUnhydrated, debug, animationDriver) {
  var _loop = function (keyOg2) {
    var keyInit = keyOg2,
      valInit = props[keyInit];
    if (keyInit === "children") return viewProps[keyInit] = valInit, "continue";
    if (process.env.NODE_ENV === "development" && (debug === "profile" || globalThis.time) && time`before-prop-${keyInit}`, process.env.NODE_ENV === "test" && keyInit === "jestAnimatedStyle") return "continue";
    if (accept) {
      var accepted = accept[keyInit];
      if ((accepted === "style" || accepted === "textStyle") && valInit && (typeof valInit > "u" ? "undefined" : _type_of(valInit)) === "object") return viewProps[keyInit] = getSubStyle(styleState, keyInit, valInit, styleProps.noClass), "continue";
    }
    if (disableExpandShorthands || keyInit in shorthands && (keyInit = shorthands[keyInit]), keyInit === "className") return "continue";
    if (asChild) {
      var defaults = getDefaultProps(staticConfig);
      if (defaults) {
        var _defaults_keyOg,
          defaultVal = (_defaults_keyOg = defaults[keyOg2]) !== null && _defaults_keyOg !== void 0 ? _defaults_keyOg : defaults[keyInit];
        if (defaultVal !== void 0 && valInit === defaultVal) return "continue";
      }
    }
    if (keyInit in skipProps && !noSkip && !isHOC) {
      var _driver_animations;
      if (keyInit === "group" && 0) var identifier2, containerType, containerCSS;
      if (!(keyInit === "transition" && typeof valInit == "string" && !(!(driver == null || (_driver_animations = driver.animations) === null || _driver_animations === void 0) && _driver_animations[valInit]))) return "continue";
    }
    var isValidStyleKeyInit = isValidStyleKey(keyInit, validStyles, accept);
    if (0 && staticConfig.isReactNative && keyInit.startsWith("data-")) var _viewProps2, _dataSet;
    if (!isValidStyleKeyInit) {
      if (!isAndroid && keyInit === "elevationAndroid") return "continue";
      if (keyInit === "userSelect") keyInit = "selectable", valInit = valInit !== "none";else if (keyInit.startsWith("data-")) return "continue";
    }
    var isVariant = !isValidStyleKeyInit && variants && keyInit in variants,
      isStyleLikeKey = isValidStyleKeyInit || isVariant,
      isPseudo = keyInit in validPseudoKeys,
      isMedia = !isStyleLikeKey && !isPseudo ? getMediaKey(keyInit) : !1,
      isMediaOrPseudo = !!(isMedia || isPseudo);
    isMediaOrPseudo && isMedia === "group" && (keyInit = normalizeGroupKey(keyInit, groupContext));
    var isStyleProp = isValidStyleKeyInit || isMediaOrPseudo || isVariant && !noExpand;
    if (isStyleProp && (asChild === "except-style" || asChild === "except-style-web")) return "continue";
    var shouldPassProp = !isStyleProp && isHOC ||
      // is in parent variants
      isHOC && parentVariants && keyInit in parentVariants || inlineProps?.has(keyInit),
      parentVariant = parentVariants?.[keyInit],
      isHOCShouldPassThrough = !!(isHOC && (isValidStyleKeyInit || isMediaOrPseudo || parentVariant || keyInit in skipProps)),
      shouldPassThrough = shouldPassProp || isHOCShouldPassThrough;
    if (process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed(`  \u{1F511} ${keyOg2}${keyInit !== keyOg2 ? ` (shorthand for ${keyInit})` : ""} ${shouldPassThrough ? "(pass)" : ""}`), log({
      isVariant,
      valInit,
      shouldPassProp
    }), isClient && log({
      variants,
      variant: variants?.[keyInit],
      isVariant,
      isHOCShouldPassThrough,
      usedKeys: {
        ...styleState.usedKeys
      },
      parentStaticConfig
    })), shouldPassThrough && (passDownProp(viewProps, keyInit, valInit, isMediaOrPseudo), process.env.NODE_ENV === "development" && debug === "verbose" && console.groupEnd(), !isVariant)) return "continue";
    if (!noSkip) {
      var _driver_animations1;
      if (keyInit in skipProps && !(keyInit === "transition" && typeof valInit == "string" && !(!(driver == null || (_driver_animations1 = driver.animations) === null || _driver_animations1 === void 0) && _driver_animations1[valInit]))) return process.env.NODE_ENV === "development" && debug === "verbose" && console.groupEnd(), "continue";
    }
    (isText || isInput) && valInit && (keyInit === "fontFamily" || keyInit === shorthands.fontFamily) && valInit in conf.fontsParsed && (styleState.fontFamily = valInit);
    var disablePropMap = isMediaOrPseudo || !isStyleLikeKey;
    if (propMapper(keyInit, valInit, styleState, disablePropMap, function (key5, val2, originalVal) {
      var _parentStaticConfig_variants,
        isStyledContextProp = styledContext && key5 in styledContext;
      if (!isHOC && disablePropMap && !isStyledContextProp && !isMediaOrPseudo) {
        viewProps[key5] = val2;
        return;
      }
      if (process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed("  \u{1F4A0} expanded", keyInit, "=>", key5), log(val2), console.groupEnd()), val2 != null) {
        if (key5 === "pointerEvents") {
          viewProps[key5] = val2;
          return;
        }
        if (!isHOC && isValidStyleKey(key5, validStyles, accept) || isAndroid && key5 === "elevation") {
          mergeStyle(styleState, key5, val2, 1, !1, originalVal);
          return;
        }
        if (isPseudo = key5 in validPseudoKeys, isMedia = isPseudo ? !1 : getMediaKey(key5), isMediaOrPseudo = !!(isMedia || isPseudo), isVariant = variants && key5 in variants, isMedia === "group" && (key5 = normalizeGroupKey(key5, groupContext)), inlineProps?.has(key5) || process.env.IS_STATIC === "is_static" && inlineWhenUnflattened?.has(key5)) {
          var _props_key;
          viewProps[key5] = (_props_key = props[key5]) !== null && _props_key !== void 0 ? _props_key : val2;
        }
        var shouldPassThrough2 = styleProps.noExpand && isPseudo || isHOC && (isMediaOrPseudo || (parentStaticConfig == null || (_parentStaticConfig_variants = parentStaticConfig.variants) === null || _parentStaticConfig_variants === void 0 ? void 0 : _parentStaticConfig_variants[keyInit]));
        if (shouldPassThrough2) {
          passDownProp(viewProps, key5, val2, isMediaOrPseudo), process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed(` - passing down prop ${key5}`), log({
            val: val2,
            after: {
              ...viewProps[key5]
            }
          }), console.groupEnd());
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
          var descriptor = pseudoDescriptors[key5],
            isEnter = key5 === "enterStyle",
            isExit = key5 === "exitStyle";
          if (!descriptor) return;
          if (shouldDoClasses && !isExit) {
            var pseudoStyles = getStyleAtomic(pseudoStyleObject, descriptor);
            process.env.NODE_ENV === "development" && debug === "verbose" && console.info("pseudo:", key5, pseudoStyleObject, pseudoStyles);
            var _iteratorNormalCompletion3 = !0,
              _didIteratorError3 = !1,
              _iteratorError3 = void 0;
            try {
              for (var _iterator3 = pseudoStyles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = !0) {
                var psuedoStyle = _step3.value,
                  fullKey = `${psuedoStyle[StyleObjectProperty]}${PROP_SPLIT}${descriptor.name}`;
                addStyleToInsertRules(rulesToInsert, psuedoStyle), classNames[fullKey] = psuedoStyle[StyleObjectIdentifier];
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
            var descriptorKey = descriptor.stateKey || descriptor.name,
              isDisabled = componentState[descriptorKey] === !1;
            isExit && (isDisabled = !styleProps.isExiting), isEnter && componentState.unmounted === !1 && (isDisabled = !0), process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed("pseudo", key5, {
              isDisabled
            }), log({
              pseudoStyleObject,
              isDisabled,
              descriptor,
              componentState
            }), console.groupEnd());
            var importance = descriptor.priority,
              pseudoOriginalValues = styleOriginalValues.get(pseudoStyleObject);
            for (var pkey in pseudoStyleObject) {
              var _$val = pseudoStyleObject[pkey];
              if (isDisabled) applyDefaultStyle(pkey, styleState);else {
                var curImportance = styleState.usedKeys[pkey] || 0,
                  shouldMerge = importance >= curImportance;
                if (shouldMerge) {
                  if (process.env.IS_STATIC === "is_static") {
                    var _pseudos1, _key1;
                    pseudos || (pseudos = {}), (_pseudos1 = pseudos)[_key1 = key5] || (_pseudos1[_key1] = {}), pseudos[key5][pkey] = _$val;
                  }
                  mergeStyle(styleState, pkey, _$val, importance, !1, pseudoOriginalValues?.[pkey]);
                }
                process.env.NODE_ENV === "development" && debug === "verbose" && log("    subKey", pkey, shouldMerge, {
                  importance,
                  curImportance,
                  pkey,
                  val: _$val
                });
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
          var hasSpace = val2.space;
          if ((hasSpace || !shouldDoClasses || styleProps.willBeAnimated) && ((!hasMedia || typeof hasMedia == "boolean") && (hasMedia = /* @__PURE__ */new Set()), hasMedia.add(mediaKeyShort)), isMedia === "platform" && !isActivePlatform(key5)) return;
          process.env.NODE_ENV === "development" && debug === "verbose" && log(`  \u{1F4FA} ${key5}`, {
            key: key5,
            val: val2,
            props,
            shouldDoClasses,
            acceptsClassName,
            componentState,
            mediaState
          });
          var priority = mediaStylesSeen;
          if (mediaStylesSeen += 1, shouldDoClasses) {
            var mediaStyle = getSubStyle(styleState, key5, val2, !1),
              mediaStyles = getCSSStylesAtomic(mediaStyle),
              _iteratorNormalCompletion12 = !0,
              _didIteratorError12 = !1,
              _iteratorError12 = void 0;
            try {
              for (var _iterator12 = mediaStyles[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = !0) {
                var style3 = _step12.value,
                  property = style3[StyleObjectProperty],
                  isSubStyle = property[0] === "$";
                if (!(isSubStyle && !isActivePlatform(property))) {
                  var out = createMediaStyle(style3, mediaKeyShort, mediaQueryConfig, isMedia, !1, priority);
                  process.env.NODE_ENV === "development" && debug === "verbose" && log("\u{1F4FA} media style:", out);
                  var subKey = isSubStyle ? style3[2] : "",
                    fullKey1 = `${style3[StyleObjectProperty]}${subKey}${PROP_SPLIT}${mediaKeyShort}${style3[StyleObjectPseudo] || ""}`;
                  addStyleToInsertRules(rulesToInsert, out), classNames[fullKey1] = out[StyleObjectIdentifier];
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
            let mergeMediaStyle2 = function (key6, val3, originalVal2) {
              var _styleState4;
              if (!isValidStyleKey(key6, validStyles, accept)) {
                viewProps[key6] = val3;
                return;
              }
              (_styleState4 = styleState).style || (_styleState4.style = {});
              var didMerge = mergeMediaByImportance(styleState, mediaKeyShort, key6, val3, mediaState[mediaKeyShort], importanceBump, debug, originalVal2);
              didMerge && key6 === "fontFamily" && (styleState.fontFamily = mediaStyle1.fontFamily);
            };
            var mergeMediaStyle = mergeMediaStyle2,
              isThemeMedia = isMedia === "theme",
              isGroupMedia = isMedia === "group",
              isPlatformMedia = isMedia === "platform";
            if (!isThemeMedia && !isPlatformMedia && !isGroupMedia) {
              if (!mediaState[mediaKeyShort]) {
                process.env.NODE_ENV === "development" && debug === "verbose" && log(`  \u{1F4FA} \u274C DISABLED ${mediaKeyShort}`);
                return;
              }
              process.env.NODE_ENV === "development" && debug === "verbose" && log(`  \u{1F4FA} \u2705 ENABLED ${mediaKeyShort}`);
            }
            var mediaStyle1 = getSubStyle(styleState, key5, val2, !0),
              importanceBump = 0;
            if (isThemeMedia) {
              if (isIos && getSetting("fastSchemeChange")) {
                var _styleState3;
                (_styleState3 = styleState).style || (_styleState3.style = {});
                var scheme = mediaKeyShort,
                  oppositeScheme = getOppositeScheme(mediaKeyShort),
                  themeOriginalValues = styleOriginalValues.get(mediaStyle1),
                  isCurrentScheme = themeName === scheme || themeName.startsWith(scheme);
                for (var subKey1 in mediaStyle1) {
                  var _$val1 = extractValueFromDynamic(mediaStyle1[subKey1], scheme),
                    existing = styleState.style[subKey1];
                  if (!isColorStyleKey(subKey1)) {
                    dynamicThemeAccess = !0, isCurrentScheme ? mediaStyle1[subKey1] = _$val1 : delete mediaStyle1[subKey1];
                    continue;
                  }
                  if (existing?.dynamic) existing.dynamic[scheme] = _$val1, mediaStyle1[subKey1] = existing;else {
                    var oppositeVal = extractValueFromDynamic(existing, oppositeScheme);
                    mediaStyle1[subKey1] = getDynamicVal({
                      scheme,
                      val: _$val1,
                      oppositeVal
                    }), mergeStyle(styleState, subKey1, mediaStyle1[subKey1], priority, !1, themeOriginalValues?.[subKey1]);
                  }
                }
              } else if (dynamicThemeAccess = !0, !(themeName === mediaKeyShort || themeName.startsWith(mediaKeyShort))) return;
            } else if (isGroupMedia) {
              var _groupContext_groupName,
                _componentState_group,
                groupInfo = getGroupPropParts(mediaKeyShort),
                groupName = groupInfo.name,
                groupState = groupContext == null || (_groupContext_groupName = groupContext[groupName]) === null || _groupContext_groupName === void 0 ? void 0 : _groupContext_groupName.state,
                groupPseudoKey = groupInfo.pseudo,
                groupMediaKey = groupInfo.media;
              if (!groupState) {
                process.env.NODE_ENV === "development" && debug && log(`No parent with group prop, skipping styles: ${groupName}`), pseudoGroups || (pseudoGroups = /* @__PURE__ */new Set());
                return;
              }
              var componentGroupState = (_componentState_group = componentState.group) === null || _componentState_group === void 0 ? void 0 : _componentState_group[groupName];
              if (groupMediaKey) {
                mediaGroups || (mediaGroups = /* @__PURE__ */new Set()), mediaGroups.add(groupMediaKey);
                var mediaState1 = componentGroupState?.media,
                  isActive = mediaState1?.[groupMediaKey];
                if (!mediaState1 && groupState.layout && (isActive = mediaKeyMatch(groupMediaKey, groupState.layout)), process.env.NODE_ENV === "development" && debug === "verbose" && log(` \u{1F3D8}\uFE0F GROUP media ${groupMediaKey} active? ${isActive}`, {
                  ...mediaState1,
                  usedKeys: {
                    ...styleState.usedKeys
                  }
                }), !isActive) {
                  for (var pkey1 in mediaStyle1) applyDefaultStyle(pkey1, styleState);
                  return;
                }
                importanceBump = 2;
              }
              if (groupPseudoKey) {
                var _this;
                pseudoGroups || (pseudoGroups = /* @__PURE__ */new Set()), pseudoGroups.add(groupName);
                var componentGroupPseudoState = (_this = componentGroupState || groupContext?.[groupName].state) === null || _this === void 0 ? void 0 : _this.pseudo,
                  isActive1 = componentGroupPseudoState?.[groupPseudoKey],
                  priority1 = pseudoPriorities[groupPseudoKey];
                if (process.env.NODE_ENV === "development" && debug === "verbose" && log(` \u{1F3D8}\uFE0F GROUP pseudo ${groupMediaKey} active? ${isActive1}, priority ${priority1}`, {
                  componentGroupPseudoState: {
                    ...componentGroupPseudoState
                  },
                  usedKeys: {
                    ...styleState.usedKeys
                  }
                }), !isActive1) {
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
              for (var subSubKey in mediaStyle1[subKey2]) mergeMediaStyle2(subSubKey, mediaStyle1[subKey2][subSubKey], subOriginalValues?.[subSubKey]);
            } else mergeMediaStyle2(subKey2, mediaStyle1[subKey2], mediaOriginalValues?.[subKey2]);
          }
          return;
        }
        if (!isVariant) {
          if (isStyledContextProp) return;
          viewProps[key5] = val2;
        }
      }
    }), process.env.NODE_ENV === "development" && debug === "verbose") {
      try {
        log(" \u2714\uFE0F expand complete", keyInit), log("style", {
          ...styleState.style
        }), log("viewProps", {
          ...viewProps
        }), log("transforms", {
          ...styleState.flatTransforms
        });
      } catch {}
      console.groupEnd();
    }
  };
  conf = conf || getConfig();
  var driver = animationDriver || componentContext?.animationDriver || conf.animations;
  if (props.passThrough) return null;
  isWeb && styleProps.isAnimated && driver?.isReactNative && !styleProps.noNormalize && (styleProps.noNormalize = "values");
  var {
      shorthands
    } = conf,
    {
      isHOC,
      isText,
      isInput,
      variants,
      isReactNative,
      inlineProps,
      inlineWhenUnflattened,
      parentStaticConfig,
      acceptsClassName
    } = staticConfig,
    viewProps = {},
    mediaState = styleProps.mediaState || globalMediaState,
    shouldDoClasses = acceptsClassName && isWeb && !styleProps.noClass,
    rulesToInsert = void 0,
    classNames = {},
    space = props.space,
    pseudos = null,
    hasMedia = !1,
    dynamicThemeAccess,
    pseudoGroups,
    mediaGroups,
    className = props.className || "",
    mediaStylesSeen = 0,
    validStyles = staticConfig.validStyles || (staticConfig.isText || staticConfig.isInput ? stylePropsText : validStylesView);
  process.env.NODE_ENV === "development" && (debug === "profile" || globalThis.time) && time`split-styles-setup`;
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
    // resolved animation driver (respects animatedBy prop)
    animationDriver: driver
  };
  if (process.env.IS_STATIC === "is_static") {
    var {
      fallbackProps
    } = styleProps;
    fallbackProps && (styleState.props = new Proxy(props, {
      get(_, key5, val2) {
        return Reflect.has(props, key5) ? Reflect.get(props, key5) : Reflect.get(fallbackProps, key5);
      }
    }));
  }
  process.env.NODE_ENV === "development" && (debug === "profile" || globalThis.time) && time`style-state`, process.env.NODE_ENV === "development" && debug === "verbose" && isClient && isDevTools && (console.groupCollapsed("\u{1F539} getSplitStyles \u{1F447}"), log({
    props,
    staticConfig,
    shouldDoClasses,
    styleProps,
    rulesToInsert,
    componentState,
    styleState,
    theme: {
      ...theme
    }
  }));
  var {
      asChild
    } = props,
    {
      accept
    } = staticConfig,
    {
      noSkip,
      disableExpandShorthands,
      noExpand,
      styledContext
    } = styleProps,
    {
      webContainerType
    } = conf.settings,
    parentVariants = parentStaticConfig?.variants;
  for (var keyOg in props) _loop(keyOg);
  process.env.NODE_ENV === "development" && (debug === "profile" || globalThis.time) && time`split-styles-propsend`;
  var avoidNormalize = styleProps.noNormalize === !1;
  if (!avoidNormalize) {
    if (styleState.style && (fixStyles(styleState.style), !styleProps.noExpand && !styleProps.noMergeStyle && isWeb && (!isReactNative || driver?.inputStyle !== "css") && styleToCSS(styleState.style)), styleState.flatTransforms) {
      var _styleState;
      (_styleState = styleState).style || (_styleState.style = {}), mergeFlatTransforms(styleState.style, styleState.flatTransforms);
    }
    if (parentSplitStyles) {
      if (0 && shouldDoClasses) for (var key in parentSplitStyles.classNames) var val;
      if (!shouldDoClasses) for (var key1 in parentSplitStyles.style) {
        var _styleState1;
        key1 in classNames || styleState.style && key1 in styleState.style || ((_styleState1 = styleState).style || (_styleState1.style = {}), styleState.style[key1] = parentSplitStyles.style[key1]);
      }
    }
  }
  if (0) var _styleState_style, shouldStringifyTransforms;
  if (0) {
    if (!styleProps.noMergeStyle && styleState.style && shouldDoClasses) {
      var retainedStyles, shouldRetain;
      if (!styleState.style.$$css) {
        var atomic, _iteratorNormalCompletion, _didIteratorError, _iteratorError;
        try {
          for (var _iterator, _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) var atomicStyle, _props_animateOnly, _props_animateOnly1, key2, value, identifier, isAnimatedAndTransitionOnly, nonAnimatedTransitionOnly;
        } catch (err) {}
      }
    }
    if (!styleProps.noMergeStyle && styleState.style && !shouldDoClasses && styleProps.isAnimated && !driver?.isReactNative && !styleState.style.$$css) {
      var toConvert, hasProps, animateOnly;
      for (var key3 in styleState.style);
      if (hasProps) {
        var atomic1, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1;
        try {
          for (var _iterator1, _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = !0) var atomicStyle1;
        } catch (err) {}
      }
    }
  }
  var styleProp = props.style;
  if (!styleProps.noMergeStyle && styleProp) if (isHOC) viewProps.style = normalizeStyle(styleProp);else for (var isArray = Array.isArray(styleProp), len = isArray ? styleProp.length : 1, i = 0; i < len; i++) {
    var style = isArray ? styleProp[i] : styleProp;
    if (style) if (style.$$css) Object.assign(styleState.classNames, style);else {
      var _styleState2;
      (_styleState2 = styleState).style || (_styleState2.style = {}), Object.assign(styleState.style, normalizeStyle(style));
    }
  }
  if (viewProps.tabIndex === 0) {
    var _viewProps, _accessible;
    (_accessible = (_viewProps = viewProps).accessible) !== null && _accessible !== void 0 || (_viewProps.accessible = !0);
  }
  var style1 = styleState.style;
  if (style1?.fontFamily) {
    var _getFont,
      faceInfo = (_getFont = getFont(style1.fontFamily)) === null || _getFont === void 0 ? void 0 : _getFont.face;
    if (faceInfo) {
      var _faceInfo_style_fontWeight_,
        _faceInfo_style_fontWeight,
        overrideFace = (_faceInfo_style_fontWeight = faceInfo[style1.fontWeight]) === null || _faceInfo_style_fontWeight === void 0 || (_faceInfo_style_fontWeight_ = _faceInfo_style_fontWeight[style1.fontStyle || "normal"]) === null || _faceInfo_style_fontWeight_ === void 0 ? void 0 : _faceInfo_style_fontWeight_.val;
      overrideFace && (style1.fontFamily = overrideFace, styleState.fontFamily = overrideFace, delete style1.fontWeight, delete style1.fontStyle);
    }
    process.env.NODE_ENV === "development" && debug && debug !== "profile" && log(`Found fontFamily native: ${style1.fontFamily}`, faceInfo);
  }
  process.env.NODE_ENV === "development" && (debug === "profile" || globalThis.time) && time`split-styles-pre-result`;
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
    },
    asChildExceptStyleLike = asChild === "except-style" || asChild === "except-style-web";
  if (!styleProps.noMergeStyle && !asChildExceptStyleLike) {
    var style2 = styleState.style;
    if (0) {
      var fontFamily, fontFamilyClassName, groupClassName, componentNameFinal, componentNameClassName, classList, finalClassName, needsCssStyles;
      if (!(styleProps.isAnimated && driver?.inputStyle === "css")) {
        if (needsCssStyles) {
          var cnStyles, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2;
          try {
            for (var _iterator2, _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = !0) var name;
          } catch (err) {}
        }
      }
    } else style2 && (viewProps.style = style2);
  }
  if (process.env.NODE_ENV === "development" && debug === "verbose" && isClient && isDevTools) {
    console.groupEnd(), console.groupCollapsed("\u{1F539} getSplitStyles ===>");
    try {
      var logs = {
        ...result,
        className,
        componentState,
        viewProps,
        rulesToInsert,
        parentSplitStyles
      };
      for (var key4 in logs) log(key4, logs[key4]);
    } catch {}
    console.groupEnd();
  }
  return process.env.NODE_ENV === "development" && (debug === "profile" || globalThis.time) && time`split-styles-done`, result;
};
function mergeFlatTransforms(target, flatTransforms) {
  Object.entries(flatTransforms).sort(function (param, param1) {
    var [a] = param,
      [b] = param1;
    return sortString(a, b);
  }).forEach(function (param) {
    var [key, val] = param;
    mergeTransform(target, key, val, !0);
  });
}
function mergeStyle(styleState, key, val, importance) {
  var disableNormalize = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
    originalVal = arguments.length > 5 ? arguments[5] : void 0,
    _staticConfig_context,
    _staticConfig_parentStaticConfig_context,
    _staticConfig_parentStaticConfig,
    {
      viewProps,
      styleProps,
      staticConfig,
      usedKeys
    } = styleState,
    existingImportance = usedKeys[key] || 0;
  if (!(existingImportance > importance)) {
    var contextProps = ((_staticConfig_context = staticConfig.context) === null || _staticConfig_context === void 0 ? void 0 : _staticConfig_context.props) || ((_staticConfig_parentStaticConfig = staticConfig.parentStaticConfig) === null || _staticConfig_parentStaticConfig === void 0 || (_staticConfig_parentStaticConfig_context = _staticConfig_parentStaticConfig.context) === null || _staticConfig_parentStaticConfig_context === void 0 ? void 0 : _staticConfig_parentStaticConfig_context.props);
    if (contextProps && key in contextProps) {
      var _styleState_originalContextPropValues, _styleState;
      (_styleState = styleState).overriddenContextProps || (_styleState.overriddenContextProps = {});
      var originalFromState = (_styleState_originalContextPropValues = styleState.originalContextPropValues) === null || _styleState_originalContextPropValues === void 0 ? void 0 : _styleState_originalContextPropValues[key],
        _ref;
      styleState.overriddenContextProps[key] = (_ref = originalVal ?? originalFromState) !== null && _ref !== void 0 ? _ref : val;
    }
    if (key in stylePropsTransform) {
      var _styleState1;
      (_styleState1 = styleState).flatTransforms || (_styleState1.flatTransforms = {}), usedKeys[key] = importance, styleState.flatTransforms[key] = val;
    } else {
      var shouldNormalize = isWeb && !disableNormalize && !styleProps.noNormalize,
        out = shouldNormalize ? normalizeValueWithProperty(val, key) : val;
      if (
      // accept is for props not styles
      staticConfig.accept && key in staticConfig.accept) viewProps[key] = out;else {
        var _styleState2;
        (_styleState2 = styleState).style || (_styleState2.style = {}), usedKeys[key] = importance, styleState.style[key] =
        // if you dont do this you'll be passing props.transform arrays directly here and then mutating them
        // if theres any flatTransforms later, causing issues (mutating props is bad, in strict mode styles get borked)
        key === "transform" && Array.isArray(out) ? [...out] : out;
      }
    }
  }
}
var getSubStyle = function (styleState, subKey, styleIn, avoidMergeTransform) {
    var _loop = function (key1) {
        var val = styleIn[key1];
        if (key1 = conf2.shorthands[key1] || key1, key1 === "transition") {
          var _driver_animations, _styleState;
          (_styleState = styleState).pseudoTransitions || (_styleState.pseudoTransitions = {}), styleState.pseudoTransitions[subKey] = val;
          var driver = styleState.animationDriver;
          if (driver?.outputStyle === "css") {
            var _driver_animations1,
              animationConfig = (_driver_animations1 = driver.animations) === null || _driver_animations1 === void 0 ? void 0 : _driver_animations1[val];
            if (animationConfig) {
              var important = subKey[0] === "$" ? " !important" : "";
              styleOut.transition = `all ${animationConfig}${important}`;
            }
          }
          return !styleOut.transition && typeof val == "string" && !(!(driver == null || (_driver_animations = driver.animations) === null || _driver_animations === void 0) && _driver_animations[val]) && (styleOut.transition = val), key = key1, "continue";
        }
        var shouldSkip = !staticConfig.isHOC && key1 in skipProps && !styleProps.noSkip;
        if (shouldSkip) return key = key1, "continue";
        propMapper(key1, val, styleState, !1, function (skey, sval, originalVal) {
          originalVal !== void 0 && (originalValues || (originalValues = {}), originalValues[skey] = originalVal), skey in validPseudoKeys && (sval = getSubStyle(styleState, skey, sval, avoidMergeTransform)), !avoidMergeTransform && skey in stylePropsTransform ? mergeTransform(styleOut, skey, sval) : styleOut[skey] = styleProps.noNormalize ? sval : normalizeValueWithProperty(sval, key1);
        }), key = key1;
      },
      {
        staticConfig,
        conf: conf2,
        styleProps
      } = styleState,
      styleOut = {},
      originalValues;
    for (var key in styleIn) _loop(key);
    if (!avoidMergeTransform) {
      var _styleState_style,
        parentTransform = (_styleState_style = styleState.style) === null || _styleState_style === void 0 ? void 0 : _styleState_style.transform,
        flatTransforms = styleState.flatTransforms,
        styleOutTransform = styleOut.transform;
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
  },
  useInsertEffectCompat = isWeb ? React.useInsertionEffect || useIsomorphicLayoutEffect : function () {},
  useSplitStyles = function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
    "use no memo";

    var res = getSplitStyles(a, b, c, d, e, f, g, h, i, j, k, l, m);
    return res;
  };
function addStyleToInsertRules(rulesToInsert, styleObject) {
  if (0) var identifier;
}
var defaultColor = process.env.TAMAGUI_DEFAULT_COLOR || "rgba(0,0,0,0)",
  animatableDefaults = {
    ...Object.fromEntries(Object.entries(tokenCategories.color).map(function (param) {
      var [k, v] = param;
      return [k, defaultColor];
    })),
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
  },
  mergeTransform = function (obj, key, val) {
    var backwards = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
      _obj;
    typeof obj.transform != "string" && ((_obj = obj).transform || (_obj.transform = []), obj.transform[backwards ? "unshift" : "push"]({
      [mapTransformKeys[key] || key]: val
    }));
  },
  mapTransformKeys = {
    x: "translateX",
    y: "translateY"
  };
function passDownProp(viewProps, key, val) {
  var shouldMergeObject = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (shouldMergeObject) {
    var next = {
      ...viewProps[key],
      ...val
    };
    delete viewProps[key], viewProps[key] = next;
  } else viewProps[key] = val;
}
function mergeMediaByImportance(styleState, mediaKey, key, value, isSizeMedia, importanceBump, debugProp, originalVal) {
  var usedKeys = styleState.usedKeys,
    importance = getMediaImportanceIfMoreImportant(mediaKey, key, styleState, isSizeMedia);
  if (importanceBump && (importance = (importance || 0) + importanceBump), process.env.NODE_ENV === "development" && debugProp === "verbose" && log(`mergeMediaByImportance ${key} importance usedKey ${usedKeys[key]} next ${importance}`), importance === null) return !1;
  if (key in pseudoDescriptors) {
    var descriptor = pseudoDescriptors[key],
      descriptorKey = descriptor.stateKey || descriptor.name,
      isDisabled = styleState.componentState[descriptorKey] === !1;
    if (isDisabled) return !1;
    var pseudoOriginalValues = styleOriginalValues.get(value);
    for (var subKey in value) mergeStyle(styleState, subKey, value[subKey], importance, !1, pseudoOriginalValues?.[subKey]);
  } else mergeStyle(styleState, key, value, importance, !1, originalVal);
  return !0;
}
function normalizeStyle(style) {
  var out = {};
  for (var key in style) {
    var val = style[key];
    key in stylePropsTransform ? mergeTransform(out, key, val) : out[key] = normalizeValueWithProperty(val, key);
  }
  return isWeb && Array.isArray(out.transform) && (out.transform = transformsToString(out.transform)), fixStyles(out), out;
}
function applyDefaultStyle(pkey, styleState) {
  var defaultValues = animatableDefaults[pkey];
  defaultValues != null && !(pkey in styleState.usedKeys) && (!styleState.style || !(pkey in styleState.style)) && mergeStyle(styleState, pkey, defaultValues, 1);
}
export { PROP_SPLIT, getSplitStyles, getSubStyle, styleOriginalValues, useSplitStyles };
//# sourceMappingURL=getSplitStyles.native.js.map
