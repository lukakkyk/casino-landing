import React from "react";
import { Theme } from "../views/Theme.mjs";
import { getDefaultProps } from "./getDefaultProps.mjs";
import { jsx } from "react/jsx-runtime";
function themeable(Component, staticConfig, optimize = !1) {
  const withTheme = React.forwardRef(function (props, ref) {
    "use no memo";

    const userDefaults = getDefaultProps(staticConfig, props.componentName),
      defaultTheme = userDefaults?.theme,
      defaultResetTheme = userDefaults?.themeReset,
      {
        theme,
        componentName,
        themeReset,
        ...rest
      } = props;
    let overriddenContextProps;
    const context = staticConfig?.context;
    if (context) for (const key in context.props) {
      const val = props[key];
      val !== void 0 && (overriddenContextProps = overriddenContextProps || {}, overriddenContextProps[key] = val);
    }
    const element =
    // @ts-expect-error its ok
    /* @__PURE__ */
    jsx(Component, {
      ref,
      ...rest,
      "data-disable-theme": !0
    });
    let filteredProps = null;
    const compName = componentName || staticConfig?.componentName;
    if (compName && (filteredProps = filteredProps || {}, filteredProps.componentName = compName), "debug" in props && (filteredProps = filteredProps || {}, filteredProps.debug = props.debug), ("theme" in props || defaultTheme) && (filteredProps = filteredProps || {}, filteredProps.name = "theme" in props ? props.theme : defaultTheme), ("themeReset" in props || defaultResetTheme) && (filteredProps = filteredProps || {}, filteredProps.reset = "themeReset" in props ? themeReset : defaultResetTheme), optimize && !filteredProps) return element;
    let contents = /* @__PURE__ */jsx(Theme, {
      "disable-child-theme": !0,
      ...filteredProps,
      children: element
    });
    if (context) {
      const Provider = context.Provider,
        contextValue = React.useContext(context);
      contents = /* @__PURE__ */jsx(Provider, {
        ...contextValue,
        ...overriddenContextProps,
        children: contents
      });
    }
    return contents;
  });
  return withTheme.displayName = `Themed(${Component?.displayName || Component?.name || "Anonymous"})`, withTheme;
}
export { themeable };
//# sourceMappingURL=themeable.mjs.map
