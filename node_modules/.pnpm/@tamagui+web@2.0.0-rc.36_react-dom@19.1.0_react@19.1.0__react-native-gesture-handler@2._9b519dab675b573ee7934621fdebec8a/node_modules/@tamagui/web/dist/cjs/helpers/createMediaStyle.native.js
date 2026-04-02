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
var createMediaStyle_exports = {};
__export(createMediaStyle_exports, {
  MEDIA_SEP: () => MEDIA_SEP,
  createMediaStyle: () => createMediaStyle,
  resetMediaStyleCache: () => resetMediaStyleCache
});
module.exports = __toCommonJS(createMediaStyle_exports);
var import_config = require("../config.native.js"),
  import_mediaObjectToString = require("./mediaObjectToString.native.js"),
  import_getGroupPropParts = require("./getGroupPropParts.native.js"),
  MEDIA_SEP = "_",
  prefixes = null,
  selectors = null;
function resetMediaStyleCache() {
  prefixes = null, selectors = null;
}
var groupPseudoToPseudoCSSMap = {
    press: "active",
    focusVisible: "focus-visible",
    focusWithin: "focus-within"
  },
  specificities = new Array(12).fill(0).map(function (_, i) {
    return new Array(i).fill(":root").join("");
  });
function getThemeOrGroupSelector(name, styleInner, isGroup, groupParts) {
  var isTheme = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
    precedenceImportancePrefix = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
    selectorStart = styleInner.lastIndexOf(":root") + 5,
    selectorEnd = styleInner.lastIndexOf("{"),
    selector = styleInner.slice(selectorStart, selectorEnd),
    precedenceSpace = (0, import_config.getSetting)("addThemeClassName") !== !1 && isTheme ? "" : " ",
    pseudoSelectorName = groupParts.pseudo ? groupPseudoToPseudoCSSMap[groupParts.pseudo] || groupParts.pseudo : void 0,
    pseudoSelector = pseudoSelectorName ? `:${pseudoSelectorName}` : "",
    presedencePrefix = `:root${precedenceImportancePrefix}${precedenceSpace}`,
    mediaSelector = `.t_${isGroup ? "group_" : ""}${name}${pseudoSelector}`;
  return [selector, `${presedencePrefix}${mediaSelector} ${selector.replaceAll(":root", "")}`];
}
var createMediaStyle = function (styleObject, mediaKeyIn, mediaQueries, type, negate, priority) {
  var [property,, identifier, pseudoIn, rules] = styleObject,
    isTheme = type === "theme",
    isPlatform = type === "platform",
    isGroup = type === "group",
    isNonWindowMedia = isTheme || isPlatform || isGroup,
    negKey = negate ? "0" : "",
    ogPrefix = identifier.slice(0, identifier.indexOf("-") + 1),
    id = `${ogPrefix}${MEDIA_SEP}${mediaKeyIn.replace("-", "")}${negKey}${MEDIA_SEP}`,
    styleRule = "",
    groupPriority = "",
    groupMediaKey,
    containerName,
    nextIdentifier = identifier.replace(ogPrefix, id),
    styleInner = rules.map(function (rule) {
      return rule.replaceAll(identifier, nextIdentifier);
    }).join(";"),
    isHover = !1;
  if (isNonWindowMedia) {
    var specificity = (priority || 0) + (isGroup || isPlatform ? 1 : 0);
    if (isTheme || isGroup) {
      var groupParts = (0, import_getGroupPropParts.getGroupPropParts)(isTheme ? "theme-" + mediaKeyIn : mediaKeyIn),
        {
          name,
          media,
          pseudo
        } = groupParts;
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
      selectors = Object.fromEntries(mediaKeys.map(function (key) {
        return [key, (0, import_mediaObjectToString.mediaObjectToString)(mediaQueries[key])];
      })), prefixes = Object.fromEntries(mediaKeys.map(function (k, index) {
        return [k, new Array(index + 1).fill(":root").join("")];
      }));
    }
    var mediaKey = groupMediaKey || mediaKeyIn,
      mediaSelector = selectors[mediaKey],
      screenStr = negate ? "not all and " : "",
      mediaQuery = `${screenStr}${mediaSelector}`,
      precedenceImportancePrefix = groupMediaKey ? groupPriority : prefixes[mediaKey],
      prefix1 = groupMediaKey ? `@container ${containerName}` : "@media";
    groupMediaKey && (styleInner = styleRule), styleInner.includes(prefix1) ? styleRule = styleInner.replace("{", ` and ${mediaQuery} {`).replace("and screen and", "and") : styleRule = `${prefix1} ${mediaQuery}{${precedenceImportancePrefix}${styleInner}}`, groupMediaKey && (styleRule = `@supports (contain: ${(0, import_config.getSetting)("webContainerType") || "inline-size"}) {${styleRule}}`);
  }
  return isHover && (styleRule = `@media (hover:hover){${styleRule}}`), [property, void 0, nextIdentifier, void 0, [styleRule]];
};
//# sourceMappingURL=createMediaStyle.native.js.map
