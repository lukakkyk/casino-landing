const Decorated = /* @__PURE__ */Symbol(),
  withStaticProperties = (component, staticProps) => (Object.assign(component, staticProps), component[Decorated] = !0, component);
export { withStaticProperties };
//# sourceMappingURL=withStaticProperties.mjs.map
