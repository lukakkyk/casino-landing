import { createComponent } from "./createComponent.mjs";
import { mergeVariants } from "./helpers/mergeVariants.mjs";
import { getReactNativeConfig } from "./setupReactNative.mjs";
const textLikeElements = /* @__PURE__ */new Set(["a", "abbr", "b", "bdi", "bdo", "cite", "code", "data", "del", "dfn", "em", "i", "ins", "kbd", "label", "mark", "q", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var"]);
function styledHtml(tag, options) {
  const isText = textLikeElements.has(tag),
    {
      variants,
      name,
      defaultVariants,
      context,
      ...defaultProps
    } = options || {},
    conf = {
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
  return (defaultProps.children || context) && (conf.neverFlatten = !0), createComponent(conf);
}
function styled(ComponentIn, options, config) {
  if (process.env.NODE_ENV !== "production" && !ComponentIn) throw new Error("No component given to styled()");
  const parentStaticConfig = ComponentIn.staticConfig,
    isPlainStyledComponent = !!parentStaticConfig && !(parentStaticConfig.isReactNative || parentStaticConfig.isHOC);
  let Component = parentStaticConfig?.isHOC && !parentStaticConfig?.isStyledHOC || isPlainStyledComponent ? ComponentIn : parentStaticConfig?.Component || ComponentIn;
  const reactNativeConfig = parentStaticConfig ? void 0 : getReactNativeConfig(Component),
    isReactNative = !!(reactNativeConfig || config?.isReactNative || parentStaticConfig?.isReactNative),
    staticConfigProps = (() => {
      let {
          variants,
          name,
          defaultVariants,
          context,
          ...defaultProps
        } = options || {},
        parentDefaultVariants,
        parentDefaultProps;
      if (parentStaticConfig && !(parentStaticConfig.isHOC && !parentStaticConfig.isStyledHOC)) {
        const pdp = parentStaticConfig.defaultProps;
        for (const key in pdp) {
          const val = pdp[key];
          parentStaticConfig.defaultVariants && key in parentStaticConfig.defaultVariants && (!defaultVariants || !(key in defaultVariants)) && (parentDefaultVariants ||= {}, parentDefaultVariants[key] = val), !(key in defaultProps) && (!defaultVariants || !(key in defaultVariants)) && (parentDefaultProps ||= {}, parentDefaultProps[key] = pdp[key]);
        }
        parentStaticConfig.variants && (variants = mergeVariants(parentStaticConfig.variants, variants));
      }
      (parentDefaultProps || defaultVariants || parentDefaultVariants) && (defaultProps = {
        ...parentDefaultProps,
        ...parentDefaultVariants,
        ...defaultProps,
        ...defaultVariants
      }), parentStaticConfig?.isHOC && name && (defaultProps.componentName = name);
      const isText = !!(config?.isText || parentStaticConfig?.isText),
        acceptsClassName = config?.acceptsClassName ?? (isPlainStyledComponent || isReactNative || parentStaticConfig?.isHOC && parentStaticConfig?.acceptsClassName),
        conf = {
          ...parentStaticConfig,
          ...config,
          ...(!isPlainStyledComponent && {
            Component
          }),
          // @ts-expect-error
          variants,
          defaultProps,
          defaultVariants,
          componentName: name || parentStaticConfig?.componentName,
          isReactNative,
          isText,
          acceptsClassName,
          context,
          ...reactNativeConfig,
          isStyledHOC: !!parentStaticConfig?.isHOC,
          parentStaticConfig
        };
      return (defaultProps.children || !acceptsClassName || context) && (conf.neverFlatten = !0), conf;
    })(),
    component = createComponent(staticConfigProps || {});
  for (const key in ComponentIn) key !== "propTypes" && (key in component || (component[key] = ComponentIn[key]));
  return component;
}
const styledExport = new Proxy(styled, {
  get(target, prop) {
    return prop in target ? target[prop] : options => styledHtml(prop, options);
  }
});
export { styledExport as styled, styledHtml };
//# sourceMappingURL=styled.mjs.map
