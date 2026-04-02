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
var extractToNative_exports = {};
__export(extractToNative_exports, {
  extractToNative: () => extractToNative,
  getBabelParseDefinition: () => getBabelParseDefinition,
  getBabelPlugin: () => getBabelPlugin
});
module.exports = __toCommonJS(extractToNative_exports);
var import_core = require("@babel/core"),
  import_generator = __toESM(require("@babel/generator")),
  import_helper_plugin_utils = require("@babel/helper-plugin-utils"),
  import_parser = require("@babel/parser"),
  import_template = __toESM(require("@babel/template")),
  t = __toESM(require("@babel/types")),
  import_node_path = require("node:path"),
  import_getPragmaOptions = require("../getPragmaOptions.cjs"),
  import_createExtractor = require("./createExtractor.cjs"),
  import_createLogger = require("./createLogger.cjs"),
  import_extractHelpers = require("./extractHelpers.cjs"),
  import_literalToAst = require("./literalToAst.cjs"),
  import_loadTamagui = require("./loadTamagui.cjs");
const importNativeView = (0, import_template.default)(`
const __ReactNativeView = require('react-native').View;
const __ReactNativeText = require('react-native').Text;
`),
  importStyleSheet = (0, import_template.default)(`
const __ReactNativeStyleSheet = require('react-native').StyleSheet;
`),
  importWithStyle = import_template.default.ast("import { _withStableStyle } from '@tamagui/core';"),
  extractor = (0, import_createExtractor.createExtractor)({
    platform: "native"
  });
let tamaguiBuildOptionsLoaded;
function extractToNative(sourceFileName, sourceCode, options) {
  const ast = (0, import_parser.parse)(sourceCode, {
      sourceType: "module",
      plugins: ["jsx", "typescript"]
    }),
    babelPlugin = getBabelPlugin(),
    out = (0, import_core.transformFromAstSync)(ast, sourceCode, {
      plugins: [[babelPlugin, options]],
      configFile: !1,
      sourceFileName,
      filename: sourceFileName
    });
  if (!out) throw new Error("No output returned");
  return out;
}
function getBabelPlugin() {
  return (0, import_helper_plugin_utils.declare)((api, options) => (api.assertVersion(7), getBabelParseDefinition(options)));
}
function getBabelParseDefinition(options) {
  return {
    name: "tamagui",
    visitor: {
      Program: {
        enter(root) {
          let sourcePath = this.file.opts.filename;
          if (sourcePath?.includes("node_modules") || !sourcePath?.endsWith(".jsx") && !sourcePath?.endsWith(".tsx")) return;
          process.env.SOURCE_ROOT?.endsWith("ios") && (sourcePath = sourcePath.replace("/ios", ""));
          let hasImportedView = !1,
            hasImportedViewWrapper = !1,
            wrapperCount = 0;
          const sheetStyles = {},
            sheetIdentifier = root.scope.generateUidIdentifier("sheet"),
            firstCommentContents =
            // join because you can join together multiple pragmas
            root.node.body[0]?.leadingComments?.map(comment => comment?.value || " ").join(" ") ?? "",
            firstComment = firstCommentContents ? `//${firstCommentContents}` : "",
            {
              shouldPrintDebug,
              shouldDisable
            } = (0, import_getPragmaOptions.getPragmaOptions)({
              source: firstComment,
              path: sourcePath
            });
          if (shouldDisable) return;
          !options.config && !options.components && (tamaguiBuildOptionsLoaded ||= (0, import_loadTamagui.loadTamaguiBuildConfigSync)({}));
          const finalOptions = {
              // @ts-ignore just in case they leave it out
              platform: "native",
              ...tamaguiBuildOptionsLoaded,
              ...options
            },
            printLog = (0, import_createLogger.createLogger)(sourcePath, finalOptions);
          function addSheetStyle(style, node) {
            let key = `${`${Object.keys(sheetStyles).length}`}`;
            if (process.env.NODE_ENV === "development") {
              const lineNumbers = node.loc ? node.loc.start.line + (node.loc.start.line !== node.loc.end.line ? `-${node.loc.end.line}` : "") : "";
              key += `:${(0, import_node_path.basename)(sourcePath)}:${lineNumbers}`;
            }
            return sheetStyles[key] = style, readStyleExpr(key);
          }
          function readStyleExpr(key) {
            return (0, import_template.default)("SHEET['KEY']")({
              SHEET: sheetIdentifier.name,
              KEY: key
            }).expression;
          }
          let res;
          try {
            res = extractor.parseSync(root, {
              importsWhitelist: ["constants.js", "colors.js"],
              excludeProps: /* @__PURE__ */new Set(["className", "userSelect", "whiteSpace", "textOverflow", "cursor", "contain"]),
              // native props that should pass through without preventing extraction
              inlineProps: /* @__PURE__ */new Set(["testID", "nativeID", "accessibilityLabel", "accessibilityHint", "accessibilityRole", "accessibilityState", "accessibilityValue", "accessibilityActions", "accessibilityLabelledBy", "accessibilityLiveRegion", "accessibilityElementsHidden", "accessibilityViewIsModal", "importantForAccessibility", "onAccessibilityAction", "onAccessibilityEscape", "onAccessibilityTap", "onMagicTap", "collapsable", "needsOffscreenAlphaCompositing", "removeClippedSubviews", "renderToHardwareTextureAndroid", "shouldRasterizeIOS", "hitSlop", "pointerEvents"]),
              shouldPrintDebug,
              ...finalOptions,
              // disable extracting variables as no native concept of them (only theme values)
              disableExtractVariables: !1,
              sourcePath,
              // disabling flattening for now
              // it's flattening a plain <Paragraph>hello</Paragraph> which breaks things because themes
              // thinking it's not really worth the effort to do much compilation on native
              // for now just disable flatten as it can only run in narrow places on native
              // disableFlattening: 'styled',
              getFlattenedNode({
                isTextView
              }) {
                return hasImportedView || (hasImportedView = !0, root.unshiftContainer("body", importNativeView())), isTextView ? "__ReactNativeText" : "__ReactNativeView";
              },
              onExtractTag(props) {
                assertValidTag(props.node);
                const stylesExpr = t.arrayExpression([]),
                  hocStylesExpr = t.arrayExpression([]),
                  expressions = [],
                  finalAttrs = [],
                  themeKeysUsed = /* @__PURE__ */new Set();
                function getStyleExpression(style, forTernary = !1) {
                  if (!style) return;
                  const {
                    plain,
                    themed
                  } = splitThemeStyles(style);
                  let themeExpr = null;
                  if (themed) {
                    for (const key in themed) themeKeysUsed.add(themed[key].split("$")[1]);
                    themeExpr = getThemedStyleExpression(themed);
                  }
                  const ident = Object.keys(plain).length > 0 ? addSheetStyle(plain, props.node) : null;
                  return themeExpr ? forTernary ? ident ? t.arrayExpression([ident, themeExpr]) : themeExpr : (ident && (addStyleExpression(ident), addStyleExpression(ident, !0)), themeExpr) : ident;
                }
                function addStyleExpression(expr, HOC = !1) {
                  Array.isArray(expr) ? (HOC ? hocStylesExpr : stylesExpr).elements.push(...expr) : (HOC ? hocStylesExpr : stylesExpr).elements.push(expr);
                }
                function getThemedStyleExpression(styles) {
                  const themedStylesAst = (0, import_literalToAst.literalToAst)(styles);
                  return themedStylesAst.properties.forEach(_ => {
                    const prop = _;
                    if (prop.value.type === "StringLiteral") {
                      const propVal = prop.value.value.slice(1),
                        isComputed = !t.isValidIdentifier(propVal);
                      prop.value = t.callExpression(t.memberExpression(t.memberExpression(t.identifier("theme"), isComputed ? t.stringLiteral(propVal) : t.identifier(propVal), isComputed), t.identifier("get")), []);
                    }
                  }), themedStylesAst;
                }
                let hasDynamicStyle = !1,
                  hasMediaKeys = !1;
                for (const attr of props.attrs) switch (attr.type) {
                  case "style":
                    {
                      let styleExpr = getStyleExpression(attr.value);
                      addStyleExpression(styleExpr), addStyleExpression(styleExpr, !0);
                      break;
                    }
                  case "ternary":
                    {
                      const {
                          consequent,
                          alternate
                        } = attr.value,
                        consExpr = getStyleExpression(consequent, !0),
                        altExpr = getStyleExpression(alternate, !0);
                      attr.value.inlineMediaQuery && (hasMediaKeys = !0), expressions.push(attr.value.test), addStyleExpression(t.conditionalExpression(t.identifier(`_expressions[${expressions.length - 1}]`), consExpr || t.nullLiteral(), altExpr || t.nullLiteral()), !0);
                      const styleExpr = t.conditionalExpression(attr.value.test, consExpr || t.nullLiteral(), altExpr || t.nullLiteral());
                      addStyleExpression(styleExpr);
                      break;
                    }
                  case "attr":
                    {
                      t.isJSXSpreadAttribute(attr.value) && (0, import_extractHelpers.isSimpleSpread)(attr.value) && (stylesExpr.elements.push(t.memberExpression(attr.value.argument, t.identifier("style"))), hocStylesExpr.elements.push(t.memberExpression(attr.value.argument, t.identifier("style")))), finalAttrs.push(attr.value);
                      break;
                    }
                }
                if (props.node.attributes = finalAttrs, themeKeysUsed.size || hocStylesExpr.elements.length > 1 || hasDynamicStyle) {
                  hasImportedViewWrapper || (root.unshiftContainer("body", importWithStyle), hasImportedViewWrapper = !0);
                  const name = props.flatNodeName || props.node.name.name,
                    wrapperName = `_${name.replace(/^_+/, "")}Styled${wrapperCount++}`,
                    WrapperIdentifier = t.identifier(wrapperName),
                    WrapperJSXIdentifier = t.jsxIdentifier(wrapperName),
                    hasThemeKeysFlag = themeKeysUsed.size > 0;
                  if (root.pushContainer("body", t.variableDeclaration("const", [t.variableDeclarator(WrapperIdentifier, t.callExpression(t.identifier("_withStableStyle"), [t.identifier(name), t.arrowFunctionExpression([t.identifier("theme"), t.identifier("_expressions")],
                  // return styles directly - no useMemo, theme changes must trigger style recalc
                  t.arrayExpression([...hocStylesExpr.elements])), t.booleanLiteral(hasThemeKeysFlag), t.booleanLiteral(hasMediaKeys)]))])), props.node.name = WrapperJSXIdentifier, props.jsxPath.node.openingElement.name = WrapperJSXIdentifier, props.jsxPath.node.closingElement && (props.jsxPath.node.closingElement.name = t.jsxIdentifier(wrapperName)), expressions.length) {
                    const safeExpressions = expressions.map(expr => t.isStringLiteral(expr) ? expr : t.unaryExpression("!", t.unaryExpression("!", expr)));
                    props.node.attributes.push(t.jsxAttribute(t.jsxIdentifier("_expressions"), t.jsxExpressionContainer(t.arrayExpression(safeExpressions))));
                  }
                } else props.node.attributes.push(t.jsxAttribute(t.jsxIdentifier("style"), t.jsxExpressionContainer(stylesExpr.elements.length === 1 ? stylesExpr.elements[0] : stylesExpr)));
              }
            });
          } catch (err) {
            if (err instanceof Error) {
              let message = `${shouldPrintDebug === "verbose" ? err : err.message}`;
              message.includes("Unexpected return value from visitor method") && (message = "Unexpected return value from visitor method"), console.warn("Error in Tamagui parse, skipping", message, err.stack);
              return;
            }
          }
          if (!Object.keys(sheetStyles).length) {
            shouldPrintDebug && console.info("END no styles"), res && printLog(res);
            return;
          }
          const sheetObject = (0, import_literalToAst.literalToAst)(sheetStyles),
            sheetOuter = (0, import_template.default)("const SHEET = __ReactNativeStyleSheet.create(null)")({
              SHEET: sheetIdentifier.name
            });
          sheetOuter.declarations[0].init.arguments[0] = sheetObject, root.unshiftContainer("body", sheetOuter), root.unshiftContainer("body", importStyleSheet()), shouldPrintDebug && (console.info(`
 -------- output code ------- 
`), console.info((0, import_generator.default)(root.parent).code.split(`
`).filter(x => !x.startsWith("//")).join(`
`))), res && printLog(res);
        }
      }
    }
  };
}
function assertValidTag(node) {
  node.attributes.find(x => x.type === "JSXAttribute" && x.name.name === "style") && process.env.DEBUG?.startsWith("tamagui") && console.warn("\u26A0\uFE0F Cannot pass style attribute to extracted style");
}
function splitThemeStyles(style) {
  const themed = {},
    plain = {};
  let noTheme = !0;
  for (const key in style) {
    const val = style[key];
    val && val[0] === "$" ? (themed[key] = val, noTheme = !1) : plain[key] = val;
  }
  return {
    themed: noTheme ? null : themed,
    plain
  };
}