import { jsx as _jsx } from "react/jsx-runtime";
import React, { useContext } from "react";
import { getConfigMaybe } from "./config.native.js";
import { useMedia } from "./hooks/useMedia.native.js";
import { useTheme } from "./hooks/useTheme.native.js";
import { ThemeStateContext } from "./hooks/useThemeState.native.js";
var EMPTY_EXPRESSIONS = [],
  EMPTY_THEME = {},
  _withStableStyle = function (Component, createStyle, hasThemeKeys, hasMediaKeys) {
    return /* @__PURE__ */React.memo(/* @__PURE__ */React.forwardRef(function (props, ref) {
      var {
          _expressions = EMPTY_EXPRESSIONS,
          ...rest
        } = props,
        parentId = useContext(ThemeStateContext),
        theme = hasThemeKeys && parentId ? useTheme() : null,
        media = hasMediaKeys ? useMedia() : null,
        resolvedExpressions = media ? _expressions.map(function (expr) {
          return typeof expr == "string" ? media[expr] : expr;
        }) : _expressions,
        resolvedTheme = theme || EMPTY_THEME;
      if (hasThemeKeys && !parentId) {
        var config = getConfigMaybe(),
          themes = config?.themes;
        if (themes) for (var k in themes) {
          resolvedTheme = themes.light || themes.dark || themes[k];
          break;
        }
        process.env.NODE_ENV === "development" && console.warn("[@tamagui] _withStableStyle: no ThemeStateContext found. This usually means duplicate tamagui instances in a monorepo. Falling back to default theme from config.");
      }
      return /* @__PURE__ */_jsx(Component, {
        ref,
        style: createStyle(resolvedTheme, resolvedExpressions),
        ...rest
      });
    }));
  };
export { _withStableStyle };
//# sourceMappingURL=_withStableStyle.native.js.map
