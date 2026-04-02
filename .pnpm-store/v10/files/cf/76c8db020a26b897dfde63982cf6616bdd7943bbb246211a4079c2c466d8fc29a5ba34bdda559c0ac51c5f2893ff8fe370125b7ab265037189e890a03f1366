import { jsx as _jsx } from "react/jsx-runtime";
import { useId } from "react";
import { getSetting } from "../config.native.js";
import { Theme } from "./Theme.native.js";
var ThemeProvider = function (props) {
  "use no memo";

  var addThemeClassName = getSetting("addThemeClassName"),
    forceClassName = addThemeClassName === void 0;
  return /* @__PURE__ */_jsx(Theme, {
    className: props.className,
    name: props.defaultTheme,
    forceClassName,
    // @ts-expect-error
    _isRoot: useId,
    children: props.children
  });
};
export { ThemeProvider };
//# sourceMappingURL=ThemeProvider.native.js.map
