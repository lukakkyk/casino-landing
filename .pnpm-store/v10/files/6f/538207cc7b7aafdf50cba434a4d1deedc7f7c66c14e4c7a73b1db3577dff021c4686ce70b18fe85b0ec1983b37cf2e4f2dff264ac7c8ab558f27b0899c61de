import React, { useContext } from "react";
import { getConfigMaybe } from "./config.mjs";
import { useMedia } from "./hooks/useMedia.mjs";
import { useTheme } from "./hooks/useTheme.mjs";
import { ThemeStateContext } from "./hooks/useThemeState.mjs";
import { jsx } from "react/jsx-runtime";
const EMPTY_EXPRESSIONS = [],
  EMPTY_THEME = {},
  _withStableStyle = (Component, createStyle, hasThemeKeys, hasMediaKeys) => React.memo(React.forwardRef((props, ref) => {
    const {
        _expressions = EMPTY_EXPRESSIONS,
        ...rest
      } = props,
      parentId = useContext(ThemeStateContext),
      theme = hasThemeKeys && parentId ? useTheme() : null,
      media = hasMediaKeys ? useMedia() : null,
      resolvedExpressions = media ? _expressions.map(expr => typeof expr == "string" ? media[expr] : expr) : _expressions;
    let resolvedTheme = theme || EMPTY_THEME;
    if (hasThemeKeys && !parentId) {
      const themes = getConfigMaybe()?.themes;
      if (themes) for (const k in themes) {
        resolvedTheme = themes.light || themes.dark || themes[k];
        break;
      }
      process.env.NODE_ENV === "development" && console.warn("[@tamagui] _withStableStyle: no ThemeStateContext found. This usually means duplicate tamagui instances in a monorepo. Falling back to default theme from config.");
    }
    return /* @__PURE__ */jsx(Component, {
      ref,
      style: createStyle(resolvedTheme, resolvedExpressions),
      ...rest
    });
  }));
export { _withStableStyle };
//# sourceMappingURL=_withStableStyle.mjs.map
