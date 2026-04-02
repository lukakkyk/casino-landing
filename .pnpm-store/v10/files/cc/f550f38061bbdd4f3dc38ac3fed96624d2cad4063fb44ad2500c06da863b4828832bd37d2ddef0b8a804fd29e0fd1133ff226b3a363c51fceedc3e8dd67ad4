var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: !0
  }) : target, mod)),
  __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
    value: !0
  }), mod);
var getSplitStyles_exports = {};
__export(getSplitStyles_exports, {
  PROP_SPLIT: () => PROP_SPLIT,
  getSplitStyles: () => getSplitStyles,
  getSubStyle: () => getSubStyle,
  styleOriginalValues: () => styleOriginalValues,
  useSplitStyles: () => useSplitStyles
});
module.exports = __toCommonJS(getSplitStyles_exports);
var import_constants = require("@tamagui/constants"),
  import_helpers = require("@tamagui/helpers"),
  import_react = __toESM(require("react"), 1),
  import_config = require("../config.cjs"),
  import_isDevTools = require("../constants/isDevTools.cjs"),
  import_useMedia = require("../hooks/useMedia.cjs"),
  import_mediaState = require("./mediaState.cjs"),
  import_createMediaStyle = require("./createMediaStyle.cjs"),
  import_expandStyles = require("./expandStyles.cjs"),
  import_getCSSStylesAtomic = require("./getCSSStylesAtomic.cjs"),
  import_getDefaultProps = require("./getDefaultProps.cjs"),
  import_getDynamicVal = require("./getDynamicVal.cjs"),
  import_getGroupPropParts = require("./getGroupPropParts.cjs"),
  import_insertStyleRule = require("./insertStyleRule.cjs"),
  import_isActivePlatform = require("./isActivePlatform.cjs"),
  import_isActiveTheme = require("./isActiveTheme.cjs"),
  import_log = require("./log.cjs"),
  import_normalizeValueWithProperty = require("./normalizeValueWithProperty.cjs"),
  import_propMapper = require("./propMapper.cjs"),
  import_pseudoDescriptors = require("./pseudoDescriptors.cjs"),
  import_skipProps = require("./skipProps.cjs"),
  import_sortString = require("./sortString.cjs"),
  import_transformsToString = require("./transformsToString.cjs");
let conf;
const styleOriginalValues = /* @__PURE__ */new WeakMap(),
  PROP_SPLIT = "-";
function normalizeGroupKey(key, groupContext) {
  const parts = key.split("-"),
    plen = parts.length;
  if (
  // check if its actually a simple group selector to avoid breaking selectors
  plen === 2 || plen === 3 && import_pseudoDescriptors.pseudoPriorities[parts[parts.length - 1]]) {
    const name = parts[1];
    if (name !== "true" && groupContext && !groupContext[name]) return key.replace("$group-", "$group-true-");
  }
  return key;
}
function isValidStyleKey(key, validStyles, accept) {
  return key in validStyles ? !0 : accept && key in accept;
}
const getSplitStyles = (props, staticConfig, theme, themeName, componentState, styleProps, parentSplitStyles, componentContext, groupContext, elementType, startedUnhydrated, debug, animationDriver) => {
  conf = conf || (0, import_config.getConfig)();
  const driver = animationDriver || componentContext?.animationDriver || conf.animations;
  if (props.passThrough) return null;
  import_constants.isWeb && styleProps.isAnimated && driver?.isReactNative && !styleProps.noNormalize && (styleProps.noNormalize = "values");
  const {
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
    mediaState = styleProps.mediaState || import_mediaState.mediaState,
    shouldDoClasses = acceptsClassName && import_constants.isWeb && !styleProps.noClass,
    rulesToInsert = {},
    classNames = {};
  let space = props.space,
    pseudos = null,
    hasMedia = !1,
    dynamicThemeAccess,
    pseudoGroups,
    mediaGroups,
    className = props.className || "",
    mediaStylesSeen = 0;
  const validStyles = staticConfig.validStyles || (staticConfig.isText || staticConfig.isInput ? import_helpers.stylePropsText : import_helpers.validStyles);
  process.env.NODE_ENV === "development" && (debug === "profile" || globalThis.time) && time`split-styles-setup`;
  const styleState = {
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
    const {
      fallbackProps
    } = styleProps;
    fallbackProps && (styleState.props = new Proxy(props, {
      get(_, key, val) {
        return Reflect.has(props, key) ? Reflect.get(props, key) : Reflect.get(fallbackProps, key);
      }
    }));
  }
  process.env.NODE_ENV === "development" && (debug === "profile" || globalThis.time) && time`style-state`, process.env.NODE_ENV === "development" && debug === "verbose" && import_constants.isClient && import_isDevTools.isDevTools && (console.groupCollapsed("\u{1F539} getSplitStyles \u{1F447}"), (0, import_log.log)({
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
  const {
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
  for (const keyOg in props) {
    let keyInit = keyOg,
      valInit = props[keyInit];
    if (keyInit === "children") {
      viewProps[keyInit] = valInit;
      continue;
    }
    if (process.env.NODE_ENV === "development" && (debug === "profile" || globalThis.time) && time`before-prop-${keyInit}`, process.env.NODE_ENV === "test" && keyInit === "jestAnimatedStyle") continue;
    if (accept) {
      const accepted = accept[keyInit];
      if ((accepted === "style" || accepted === "textStyle") && valInit && typeof valInit == "object") {
        viewProps[keyInit] = getSubStyle(styleState, keyInit, valInit, styleProps.noClass);
        continue;
      }
    }
    if (disableExpandShorthands || keyInit in shorthands && (keyInit = shorthands[keyInit]), keyInit === "className") continue;
    if (asChild) {
      const defaults = (0, import_getDefaultProps.getDefaultProps)(staticConfig);
      if (defaults) {
        const defaultVal = defaults[keyOg] ?? defaults[keyInit];
        if (defaultVal !== void 0 && valInit === defaultVal) continue;
      }
    }
    if (keyInit in import_skipProps.skipProps && !noSkip && !isHOC) {
      if (keyInit === "group") {
        const identifier = `t_group_${valInit}`,
          containerCSS = ["container", void 0, identifier, void 0, [`.${identifier} { container-name: ${valInit}; container-type: ${webContainerType || "inline-size"}; }`]];
        addStyleToInsertRules(rulesToInsert, containerCSS);
      }
      if (!(keyInit === "transition" && typeof valInit == "string" && !driver?.animations?.[valInit])) continue;
    }
    let isValidStyleKeyInit = isValidStyleKey(keyInit, validStyles, accept);
    if (staticConfig.isReactNative && keyInit.startsWith("data-")) {
      keyInit = keyInit.replace("data-", ""), viewProps.dataSet ||= {}, viewProps.dataSet[keyInit] = valInit;
      continue;
    }
    if (!noExpand) {
      if (keyInit === "disabled" && valInit === !0 && (viewProps["aria-disabled"] = !0, (elementType === "button" || elementType === "form" || elementType === "input" || elementType === "select" || elementType === "textarea") && (viewProps.disabled = !0), !variants?.disabled)) continue;
      if (keyInit === "testID") {
        isReactNative ? viewProps.testID = valInit : (viewProps["data-testid"] = valInit, styleProps.isAnimated && driver?.isReactNative && (viewProps.testID = valInit));
        continue;
      }
      if (keyInit === "id") {
        viewProps.id = valInit;
        continue;
      }
    }
    let isVariant = !isValidStyleKeyInit && variants && keyInit in variants;
    const isStyleLikeKey = isValidStyleKeyInit || isVariant;
    let isPseudo = keyInit in import_helpers.validPseudoKeys,
      isMedia = !isStyleLikeKey && !isPseudo ? (0, import_useMedia.getMediaKey)(keyInit) : !1,
      isMediaOrPseudo = !!(isMedia || isPseudo);
    isMediaOrPseudo && isMedia === "group" && (keyInit = normalizeGroupKey(keyInit, groupContext));
    const isStyleProp = isValidStyleKeyInit || isMediaOrPseudo || isVariant && !noExpand;
    if (isStyleProp && (asChild === "except-style" || asChild === "except-style-web")) continue;
    const shouldPassProp = !isStyleProp && isHOC ||
      // is in parent variants
      isHOC && parentVariants && keyInit in parentVariants || inlineProps?.has(keyInit),
      parentVariant = parentVariants?.[keyInit],
      isHOCShouldPassThrough = !!(isHOC && (isValidStyleKeyInit || isMediaOrPseudo || parentVariant || keyInit in import_skipProps.skipProps)),
      shouldPassThrough = shouldPassProp || isHOCShouldPassThrough;
    if (process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed(`  \u{1F511} ${keyOg}${keyInit !== keyOg ? ` (shorthand for ${keyInit})` : ""} ${shouldPassThrough ? "(pass)" : ""}`), (0, import_log.log)({
      isVariant,
      valInit,
      shouldPassProp
    }), import_constants.isClient && (0, import_log.log)({
      variants,
      variant: variants?.[keyInit],
      isVariant,
      isHOCShouldPassThrough,
      usedKeys: {
        ...styleState.usedKeys
      },
      parentStaticConfig
    })), shouldPassThrough && (passDownProp(viewProps, keyInit, valInit, isMediaOrPseudo), process.env.NODE_ENV === "development" && debug === "verbose" && console.groupEnd(), !isVariant)) continue;
    if (!noSkip && keyInit in import_skipProps.skipProps && !(keyInit === "transition" && typeof valInit == "string" && !driver?.animations?.[valInit])) {
      process.env.NODE_ENV === "development" && debug === "verbose" && console.groupEnd();
      continue;
    }
    (isText || isInput) && valInit && (keyInit === "fontFamily" || keyInit === shorthands.fontFamily) && valInit in conf.fontsParsed && (styleState.fontFamily = valInit);
    const disablePropMap = isMediaOrPseudo || !isStyleLikeKey;
    if ((0, import_propMapper.propMapper)(keyInit, valInit, styleState, disablePropMap, (key, val, originalVal) => {
      const isStyledContextProp = styledContext && key in styledContext;
      if (!isHOC && disablePropMap && !isStyledContextProp && !isMediaOrPseudo) {
        viewProps[key] = val;
        return;
      }
      if (process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed("  \u{1F4A0} expanded", keyInit, "=>", key), (0, import_log.log)(val), console.groupEnd()), val == null) return;
      if (!isHOC && isValidStyleKey(key, validStyles, accept)) {
        mergeStyle(styleState, key, val, 1, !1, originalVal);
        return;
      }
      if (isPseudo = key in import_helpers.validPseudoKeys, isMedia = isPseudo ? !1 : (0, import_useMedia.getMediaKey)(key), isMediaOrPseudo = !!(isMedia || isPseudo), isVariant = variants && key in variants, isMedia === "group" && (key = normalizeGroupKey(key, groupContext)), (inlineProps?.has(key) || process.env.IS_STATIC === "is_static" && inlineWhenUnflattened?.has(key)) && (viewProps[key] = props[key] ?? val), styleProps.noExpand && isPseudo || isHOC && (isMediaOrPseudo || parentStaticConfig?.variants?.[keyInit])) {
        passDownProp(viewProps, key, val, isMediaOrPseudo), process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed(` - passing down prop ${key}`), (0, import_log.log)({
          val,
          after: {
            ...viewProps[key]
          }
        }), console.groupEnd());
        return;
      }
      if (isPseudo) {
        if (!val) return;
        const pseudoStyleObject = getSubStyle(styleState, key, val, styleProps.noClass && process.env.IS_STATIC !== "is_static");
        if ((!shouldDoClasses || process.env.IS_STATIC === "is_static") && (pseudos ||= {}, pseudos[key] ||= {}, process.env.IS_STATIC === "is_static")) {
          Object.assign(pseudos[key], pseudoStyleObject);
          return;
        }
        const descriptor = import_pseudoDescriptors.pseudoDescriptors[key],
          isEnter = key === "enterStyle",
          isExit = key === "exitStyle";
        if (!descriptor) return;
        if (shouldDoClasses && !isExit) {
          const pseudoStyles = (0, import_getCSSStylesAtomic.getStyleAtomic)(pseudoStyleObject, descriptor);
          process.env.NODE_ENV === "development" && debug === "verbose" && console.info("pseudo:", key, pseudoStyleObject, pseudoStyles);
          for (const psuedoStyle of pseudoStyles) {
            const fullKey = `${psuedoStyle[import_helpers.StyleObjectProperty]}${PROP_SPLIT}${descriptor.name}`;
            addStyleToInsertRules(rulesToInsert, psuedoStyle), classNames[fullKey] = psuedoStyle[import_helpers.StyleObjectIdentifier];
          }
        }
        if (!shouldDoClasses || isExit || isEnter) {
          const descriptorKey = descriptor.stateKey || descriptor.name;
          let isDisabled = componentState[descriptorKey] === !1;
          isExit && (isDisabled = !styleProps.isExiting), isEnter && componentState.unmounted === !1 && (isDisabled = !0), process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed("pseudo", key, {
            isDisabled
          }), (0, import_log.log)({
            pseudoStyleObject,
            isDisabled,
            descriptor,
            componentState
          }), console.groupEnd());
          const importance = descriptor.priority,
            pseudoOriginalValues = styleOriginalValues.get(pseudoStyleObject);
          for (const pkey in pseudoStyleObject) {
            const val2 = pseudoStyleObject[pkey];
            if (isDisabled) applyDefaultStyle(pkey, styleState);else {
              const curImportance = styleState.usedKeys[pkey] || 0,
                shouldMerge = importance >= curImportance;
              shouldMerge && (process.env.IS_STATIC === "is_static" && (pseudos ||= {}, pseudos[key] ||= {}, pseudos[key][pkey] = val2), mergeStyle(styleState, pkey, val2, importance, !1, pseudoOriginalValues?.[pkey])), process.env.NODE_ENV === "development" && debug === "verbose" && (0, import_log.log)("    subKey", pkey, shouldMerge, {
                importance,
                curImportance,
                pkey,
                val: val2
              });
            }
          }
          if (!isDisabled) for (const key2 in val) {
            const k = shorthands[key2] || key2;
            styleState.usedKeys[k] = Math.max(importance, styleState.usedKeys[k] || 0);
          }
        }
        return;
      }
      if (isMedia) {
        if (!val) return;
        const mediaKeyShort = key.slice(isMedia == "theme" ? 7 : 1);
        if (hasMedia ||= !0, (val.space || !shouldDoClasses || styleProps.willBeAnimated) && ((!hasMedia || typeof hasMedia == "boolean") && (hasMedia = /* @__PURE__ */new Set()), hasMedia.add(mediaKeyShort)), isMedia === "platform" && !(0, import_isActivePlatform.isActivePlatform)(key)) return;
        process.env.NODE_ENV === "development" && debug === "verbose" && (0, import_log.log)(`  \u{1F4FA} ${key}`, {
          key,
          val,
          props,
          shouldDoClasses,
          acceptsClassName,
          componentState,
          mediaState
        });
        const priority = mediaStylesSeen;
        if (mediaStylesSeen += 1, shouldDoClasses) {
          const mediaStyle = getSubStyle(styleState, key, val, !1),
            mediaStyles = (0, import_getCSSStylesAtomic.getCSSStylesAtomic)(mediaStyle);
          for (const style of mediaStyles) {
            const property = style[import_helpers.StyleObjectProperty],
              isSubStyle = property[0] === "$";
            if (isSubStyle && !(0, import_isActivePlatform.isActivePlatform)(property)) continue;
            const out = (0, import_createMediaStyle.createMediaStyle)(style, mediaKeyShort, import_mediaState.mediaQueryConfig, isMedia, !1, priority);
            process.env.NODE_ENV === "development" && debug === "verbose" && (0, import_log.log)("\u{1F4FA} media style:", out);
            const subKey = isSubStyle ? style[2] : "",
              fullKey = `${style[import_helpers.StyleObjectProperty]}${subKey}${PROP_SPLIT}${mediaKeyShort}${style[import_helpers.StyleObjectPseudo] || ""}`;
            addStyleToInsertRules(rulesToInsert, out), classNames[fullKey] = out[import_helpers.StyleObjectIdentifier];
          }
        } else {
          let mergeMediaStyle = function (key2, val2, originalVal2) {
            styleState.style ||= {}, mergeMediaByImportance(styleState, mediaKeyShort, key2, val2, mediaState[mediaKeyShort], importanceBump, debug, originalVal2) && key2 === "fontFamily" && (styleState.fontFamily = mediaStyle.fontFamily);
          };
          const isThemeMedia = isMedia === "theme",
            isGroupMedia = isMedia === "group";
          if (!isThemeMedia && !(isMedia === "platform") && !isGroupMedia) {
            if (!mediaState[mediaKeyShort]) {
              process.env.NODE_ENV === "development" && debug === "verbose" && (0, import_log.log)(`  \u{1F4FA} \u274C DISABLED ${mediaKeyShort}`);
              return;
            }
            process.env.NODE_ENV === "development" && debug === "verbose" && (0, import_log.log)(`  \u{1F4FA} \u2705 ENABLED ${mediaKeyShort}`);
          }
          const mediaStyle = getSubStyle(styleState, key, val, !0);
          let importanceBump = 0;
          if (isThemeMedia) {
            if (dynamicThemeAccess = !0, !(themeName === mediaKeyShort || themeName.startsWith(mediaKeyShort))) return;
          } else if (isGroupMedia) {
            const groupInfo = (0, import_getGroupPropParts.getGroupPropParts)(mediaKeyShort),
              groupName = groupInfo.name,
              groupState = groupContext?.[groupName]?.state,
              groupPseudoKey = groupInfo.pseudo,
              groupMediaKey = groupInfo.media;
            if (!groupState) {
              process.env.NODE_ENV === "development" && debug && (0, import_log.log)(`No parent with group prop, skipping styles: ${groupName}`), pseudoGroups ||= /* @__PURE__ */new Set();
              return;
            }
            const componentGroupState = componentState.group?.[groupName];
            if (groupMediaKey) {
              mediaGroups ||= /* @__PURE__ */new Set(), mediaGroups.add(groupMediaKey);
              const mediaState2 = componentGroupState?.media;
              let isActive = mediaState2?.[groupMediaKey];
              if (!mediaState2 && groupState.layout && (isActive = (0, import_useMedia.mediaKeyMatch)(groupMediaKey, groupState.layout)), process.env.NODE_ENV === "development" && debug === "verbose" && (0, import_log.log)(` \u{1F3D8}\uFE0F GROUP media ${groupMediaKey} active? ${isActive}`, {
                ...mediaState2,
                usedKeys: {
                  ...styleState.usedKeys
                }
              }), !isActive) {
                for (const pkey in mediaStyle) applyDefaultStyle(pkey, styleState);
                return;
              }
              importanceBump = 2;
            }
            if (groupPseudoKey) {
              pseudoGroups ||= /* @__PURE__ */new Set(), pseudoGroups.add(groupName);
              const componentGroupPseudoState = (componentGroupState ||
                // fallback to context initially
                groupContext?.[groupName].state)?.pseudo,
                isActive = componentGroupPseudoState?.[groupPseudoKey],
                priority2 = import_pseudoDescriptors.pseudoPriorities[groupPseudoKey];
              if (process.env.NODE_ENV === "development" && debug === "verbose" && (0, import_log.log)(` \u{1F3D8}\uFE0F GROUP pseudo ${groupMediaKey} active? ${isActive}, priority ${priority2}`, {
                componentGroupPseudoState: {
                  ...componentGroupPseudoState
                },
                usedKeys: {
                  ...styleState.usedKeys
                }
              }), !isActive) {
                for (const pkey in mediaStyle) applyDefaultStyle(pkey, styleState);
                return;
              }
              importanceBump = priority2;
            }
          }
          const mediaOriginalValues = styleOriginalValues.get(mediaStyle);
          isGroupMedia && mediaStyle.transition && (styleState.pseudoTransitions ||= {}, styleState.pseudoTransitions[`$${mediaKeyShort}`] = mediaStyle.transition);
          for (const subKey in mediaStyle) if (subKey !== "space") if (subKey[0] === "$") {
            if (!(0, import_isActivePlatform.isActivePlatform)(subKey) || !(0, import_isActiveTheme.isActiveTheme)(subKey, themeName)) continue;
            const subOriginalValues = styleOriginalValues.get(mediaStyle[subKey]);
            for (const subSubKey in mediaStyle[subKey]) mergeMediaStyle(subSubKey, mediaStyle[subKey][subSubKey], subOriginalValues?.[subSubKey]);
          } else mergeMediaStyle(subKey, mediaStyle[subKey], mediaOriginalValues?.[subKey]);
        }
        return;
      }
      if (!isVariant) {
        if (isStyledContextProp) return;
        viewProps[key] = val;
      }
    }), process.env.NODE_ENV === "development" && debug === "verbose") {
      try {
        (0, import_log.log)(" \u2714\uFE0F expand complete", keyInit), (0, import_log.log)("style", {
          ...styleState.style
        }), (0, import_log.log)("viewProps", {
          ...viewProps
        }), (0, import_log.log)("transforms", {
          ...styleState.flatTransforms
        });
      } catch {}
      console.groupEnd();
    }
  }
  if (process.env.NODE_ENV === "development" && (debug === "profile" || globalThis.time) && time`split-styles-propsend`, !(styleProps.noNormalize === !1) && (styleState.style && ((0, import_expandStyles.fixStyles)(styleState.style), !styleProps.noExpand && !styleProps.noMergeStyle && import_constants.isWeb && (!isReactNative || driver?.inputStyle !== "css") && (0, import_getCSSStylesAtomic.styleToCSS)(styleState.style)), styleState.flatTransforms && (styleState.style ||= {}, mergeFlatTransforms(styleState.style, styleState.flatTransforms)), parentSplitStyles)) {
    if (shouldDoClasses) for (const key in parentSplitStyles.classNames) {
      const val = parentSplitStyles.classNames[key];
      styleState.style && key in styleState.style || key in classNames || (classNames[key] = val);
    }
    if (!shouldDoClasses) for (const key in parentSplitStyles.style) key in classNames || styleState.style && key in styleState.style || (styleState.style ||= {}, styleState.style[key] = parentSplitStyles.style[key]);
  }
  if (!styleProps.noNormalize && !staticConfig.isReactNative && !staticConfig.isHOC && (!styleProps.isAnimated || driver?.inputStyle === "css") && Array.isArray(styleState.style?.transform) && (styleState.style.transform = (0, import_transformsToString.transformsToString)(styleState.style.transform)), !styleProps.noMergeStyle && styleState.style && shouldDoClasses) {
    let retainedStyles,
      shouldRetain = !1;
    if (!styleState.style.$$css) {
      const atomic = (0, import_getCSSStylesAtomic.getCSSStylesAtomic)(styleState.style);
      for (const atomicStyle of atomic) {
        const [key, value, identifier] = atomicStyle,
          isAnimatedAndTransitionOnly = styleProps.isAnimated && styleProps.noClass && props.animateOnly?.includes(key),
          nonAnimatedTransitionOnly = !isAnimatedAndTransitionOnly && !styleProps.isAnimated && import_constants.isClient && driver?.outputStyle === "css" && props.animateOnly?.includes(key);
        isAnimatedAndTransitionOnly ? (retainedStyles ||= {}, retainedStyles[key] = styleState.style[key]) : nonAnimatedTransitionOnly ? (retainedStyles ||= {}, retainedStyles[key] = value, shouldRetain = !0) : (addStyleToInsertRules(rulesToInsert, atomicStyle), classNames[key] = identifier);
      }
      process.env.NODE_ENV === "development" && props.debug === "verbose" && (console.groupCollapsed("\u{1F539} getSplitStyles final style object"), console.info(styleState.style), console.info("retainedStyles", retainedStyles), console.groupEnd()), (shouldRetain || process.env.IS_STATIC !== "is_static") && (styleState.style = retainedStyles || {});
    }
  }
  if (!styleProps.noMergeStyle && styleState.style && !shouldDoClasses && styleProps.isAnimated && !driver?.isReactNative && !styleState.style.$$css) {
    const toConvert = {};
    let hasProps = !1;
    const animateOnly = props.animateOnly;
    for (const key in styleState.style) key in import_helpers.nonAnimatableStyleProps && (toConvert[key] = styleState.style[key], delete styleState.style[key], hasProps = !0);
    if (hasProps) {
      const atomic = (0, import_getCSSStylesAtomic.getCSSStylesAtomic)(toConvert);
      for (const atomicStyle of atomic) addStyleToInsertRules(rulesToInsert, atomicStyle), classNames[atomicStyle[import_helpers.StyleObjectProperty]] = atomicStyle[import_helpers.StyleObjectIdentifier];
    }
  }
  const styleProp = props.style;
  if (!styleProps.noMergeStyle && styleProp) if (isHOC) viewProps.style = normalizeStyle(styleProp);else {
    const isArray = Array.isArray(styleProp),
      len = isArray ? styleProp.length : 1;
    for (let i = 0; i < len; i++) {
      const style = isArray ? styleProp[i] : styleProp;
      style && (style.$$css ? Object.assign(styleState.classNames, style) : (styleState.style ||= {}, Object.assign(styleState.style, normalizeStyle(style))));
    }
  }
  process.env.NODE_ENV === "development" && (debug === "profile" || globalThis.time) && time`split-styles-pre-result`;
  const result = {
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
    const style = styleState.style;
    {
      let fontFamily = isText || isInput ? styleState.fontFamily : null;
      fontFamily && fontFamily[0] === "$" && (fontFamily = fontFamily.slice(1));
      const fontFamilyClassName = fontFamily ? `font_${fontFamily}` : "",
        groupClassName = props.group ? `t_group_${props.group}` : "",
        componentNameFinal = props.componentName || staticConfig.componentName,
        componentNameClassName = props.asChild || !componentNameFinal || componentNameFinal === "Text" ? "" : `is_${componentNameFinal}`;
      let classList = [];
      componentNameClassName && classList.push(componentNameClassName), isText ? classList.push("is_Text") : classList.push("is_View"), fontFamilyClassName && classList.push(fontFamilyClassName), classNames && classList.push(Object.values(classNames).join(" ")), groupClassName && classList.push(groupClassName), props.className && classList.push(props.className);
      const finalClassName = classList.join(" "),
        needsCssStyles = isReactNative || styleProps.isAnimated && driver?.isReactNative;
      if (styleProps.isAnimated && driver?.inputStyle === "css") viewProps.className = finalClassName, style && (viewProps.style = style);else if (needsCssStyles) {
        let cnStyles;
        for (const name of finalClassName.split(" ")) cnStyles ||= {
          $$css: !0
        }, cnStyles[name] = name;
        viewProps.style = cnStyles ? [...(Array.isArray(style) ? style : [style]), cnStyles] : [style];
      } else finalClassName && (viewProps.className = finalClassName), style && (viewProps.style = style);
    }
  }
  if (process.env.NODE_ENV === "development" && debug === "verbose" && import_constants.isClient && import_isDevTools.isDevTools) {
    console.groupEnd(), console.groupCollapsed("\u{1F539} getSplitStyles ===>");
    try {
      const logs = {
        ...result,
        className,
        componentState,
        viewProps,
        rulesToInsert,
        parentSplitStyles
      };
      for (const key in logs) (0, import_log.log)(key, logs[key]);
    } catch {}
    console.groupEnd();
  }
  return process.env.NODE_ENV === "development" && (debug === "profile" || globalThis.time) && time`split-styles-done`, result;
};
function mergeFlatTransforms(target, flatTransforms) {
  Object.entries(flatTransforms).sort(([a], [b]) => (0, import_sortString.sortString)(a, b)).forEach(([key, val]) => {
    mergeTransform(target, key, val, !0);
  });
}
function mergeStyle(styleState, key, val, importance, disableNormalize = !1, originalVal) {
  const {
    viewProps,
    styleProps,
    staticConfig,
    usedKeys
  } = styleState;
  if ((usedKeys[key] || 0) > importance) return;
  const contextProps = staticConfig.context?.props || staticConfig.parentStaticConfig?.context?.props;
  if (contextProps && key in contextProps) {
    styleState.overriddenContextProps ||= {};
    const originalFromState = styleState.originalContextPropValues?.[key];
    styleState.overriddenContextProps[key] = originalVal ?? originalFromState ?? val;
  }
  if (key in import_helpers.stylePropsTransform) styleState.flatTransforms ||= {}, usedKeys[key] = importance, styleState.flatTransforms[key] = val;else {
    const out = import_constants.isWeb && !disableNormalize && !styleProps.noNormalize ? (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(val, key) : val;
    // accept is for props not styles
    staticConfig.accept && key in staticConfig.accept ? viewProps[key] = out : (styleState.style ||= {}, usedKeys[key] = importance, styleState.style[key] =
    // if you dont do this you'll be passing props.transform arrays directly here and then mutating them
    // if theres any flatTransforms later, causing issues (mutating props is bad, in strict mode styles get borked)
    key === "transform" && Array.isArray(out) ? [...out] : out);
  }
}
const getSubStyle = (styleState, subKey, styleIn, avoidMergeTransform) => {
    const {
        staticConfig,
        conf: conf2,
        styleProps
      } = styleState,
      styleOut = {};
    let originalValues;
    for (let key in styleIn) {
      const val = styleIn[key];
      if (key = conf2.shorthands[key] || key, key === "transition") {
        styleState.pseudoTransitions ||= {}, styleState.pseudoTransitions[subKey] = val;
        const driver = styleState.animationDriver;
        if (driver?.outputStyle === "css") {
          const animationConfig = driver.animations?.[val];
          if (animationConfig) {
            const important = subKey[0] === "$" ? " !important" : "";
            styleOut.transition = `all ${animationConfig}${important}`;
          }
        }
        !styleOut.transition && typeof val == "string" && !driver?.animations?.[val] && (styleOut.transition = val);
        continue;
      }
      !staticConfig.isHOC && key in import_skipProps.skipProps && !styleProps.noSkip || (0, import_propMapper.propMapper)(key, val, styleState, !1, (skey, sval, originalVal) => {
        originalVal !== void 0 && (originalValues ||= {}, originalValues[skey] = originalVal), skey in import_helpers.validPseudoKeys && (sval = getSubStyle(styleState, skey, sval, avoidMergeTransform)), !avoidMergeTransform && skey in import_helpers.stylePropsTransform ? mergeTransform(styleOut, skey, sval) : styleOut[skey] = styleProps.noNormalize ? sval : (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(sval, key);
      });
    }
    if (!avoidMergeTransform) {
      const parentTransform = styleState.style?.transform,
        flatTransforms = styleState.flatTransforms,
        styleOutTransform = styleOut.transform;
      if (Array.isArray(styleOutTransform) && styleOutTransform.length) {
        const len = styleOutTransform.length;
        if (Array.isArray(parentTransform)) {
          const merged = [];
          outer: for (let i = 0; i < parentTransform.length; i++) {
            const pt = parentTransform[i];
            for (const pk in pt) {
              for (let j = 0; j < len; j++) for (const sk in styleOutTransform[j]) {
                if (pk === sk) continue outer;
                break;
              }
              merged.push(pt);
              break;
            }
          }
          for (let i = 0; i < len; i++) merged.push(styleOutTransform[i]);
          styleOut.transform = merged;
        }
        if (flatTransforms) outer: for (const fk in flatTransforms) {
          const ck = fk === "x" ? "translateX" : fk === "y" ? "translateY" : fk;
          for (let j = 0; j < len; j++) for (const sk in styleOutTransform[j]) {
            if (ck === sk) continue outer;
            break;
          }
          mergeTransform(styleOut, fk, flatTransforms[fk]);
        }
      } else flatTransforms && mergeFlatTransforms(styleOut, flatTransforms);
    }
    return styleProps.noNormalize || (0, import_expandStyles.fixStyles)(styleOut), originalValues && styleOriginalValues.set(styleOut, originalValues), styleOut;
  },
  useInsertEffectCompat = import_constants.isWeb ? import_react.default.useInsertionEffect || import_constants.useIsomorphicLayoutEffect : () => {},
  useSplitStyles = (a, b, c, d, e, f, g, h, i, j, k, l, m) => {
    "use no memo";

    const res = getSplitStyles(a, b, c, d, e, f, g, h, i, j, k, l, m);
    return useInsertEffectCompat(() => {
      res && (0, import_insertStyleRule.insertStyleRules)(res.rulesToInsert);
    }, [res?.rulesToInsert]), res;
  };
function addStyleToInsertRules(rulesToInsert, styleObject) {
  {
    const identifier = styleObject[import_helpers.StyleObjectIdentifier];
    (0, import_insertStyleRule.shouldInsertStyleRules)(identifier) && ((0, import_insertStyleRule.updateRules)(identifier, styleObject[import_helpers.StyleObjectRules]), rulesToInsert[identifier] = styleObject);
  }
}
const defaultColor = process.env.TAMAGUI_DEFAULT_COLOR || "rgba(0,0,0,0)",
  animatableDefaults = {
    ...Object.fromEntries(Object.entries(import_helpers.tokenCategories.color).map(([k, v]) => [k, defaultColor])),
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
  mergeTransform = (obj, key, val, backwards = !1) => {
    typeof obj.transform != "string" && (obj.transform ||= [], obj.transform[backwards ? "unshift" : "push"]({
      [mapTransformKeys[key] || key]: val
    }));
  },
  mapTransformKeys = {
    x: "translateX",
    y: "translateY"
  };
function passDownProp(viewProps, key, val, shouldMergeObject = !1) {
  if (shouldMergeObject) {
    const next = {
      ...viewProps[key],
      ...val
    };
    delete viewProps[key], viewProps[key] = next;
  } else viewProps[key] = val;
}
function mergeMediaByImportance(styleState, mediaKey, key, value, isSizeMedia, importanceBump, debugProp, originalVal) {
  const usedKeys = styleState.usedKeys;
  let importance = (0, import_useMedia.getMediaImportanceIfMoreImportant)(mediaKey, key, styleState, isSizeMedia);
  if (importanceBump && (importance = (importance || 0) + importanceBump), process.env.NODE_ENV === "development" && debugProp === "verbose" && (0, import_log.log)(`mergeMediaByImportance ${key} importance usedKey ${usedKeys[key]} next ${importance}`), importance === null) return !1;
  if (key in import_pseudoDescriptors.pseudoDescriptors) {
    const descriptor = import_pseudoDescriptors.pseudoDescriptors[key],
      descriptorKey = descriptor.stateKey || descriptor.name;
    if (styleState.componentState[descriptorKey] === !1) return !1;
    const pseudoOriginalValues = styleOriginalValues.get(value);
    for (const subKey in value) mergeStyle(styleState, subKey, value[subKey], importance, !1, pseudoOriginalValues?.[subKey]);
  } else mergeStyle(styleState, key, value, importance, !1, originalVal);
  return !0;
}
function normalizeStyle(style) {
  const out = {};
  for (const key in style) {
    const val = style[key];
    key in import_helpers.stylePropsTransform ? mergeTransform(out, key, val) : out[key] = (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(val, key);
  }
  return import_constants.isWeb && Array.isArray(out.transform) && (out.transform = (0, import_transformsToString.transformsToString)(out.transform)), (0, import_expandStyles.fixStyles)(out), out;
}
function applyDefaultStyle(pkey, styleState) {
  const defaultValues = animatableDefaults[pkey];
  defaultValues != null && !(pkey in styleState.usedKeys) && (!styleState.style || !(pkey in styleState.style)) && mergeStyle(styleState, pkey, defaultValues, 1);
}