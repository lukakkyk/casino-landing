import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import { useId } from "react";
import { getSetting } from "../config.mjs";
import { THEME_CLASSNAME_PREFIX } from "../constants/constants.mjs";
import { Theme } from "./Theme.mjs";
import { jsx } from "react/jsx-runtime";
const ThemeProvider = props => {
  "use no memo";

  const addThemeClassName = getSetting("addThemeClassName");
  useIsomorphicLayoutEffect(() => {
    if (addThemeClassName === !1) return;
    const cn = `${THEME_CLASSNAME_PREFIX}${props.defaultTheme}`,
      target = getSetting("addThemeClassName") === "html" ? document.documentElement : document.body;
    return target.classList.add(cn), () => {
      target.classList.remove(cn);
    };
  }, [props.defaultTheme, addThemeClassName]);
  const forceClassName = addThemeClassName === void 0;
  return /* @__PURE__ */jsx(Theme, {
    className: props.className,
    name: props.defaultTheme,
    forceClassName,
    _isRoot: useId,
    children: props.children
  });
};
export { ThemeProvider };
//# sourceMappingURL=ThemeProvider.mjs.map
