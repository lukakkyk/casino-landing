var Decorated = /* @__PURE__ */Symbol(),
  withStaticProperties = function (component, staticProps) {
    return Object.assign(component, staticProps), component[Decorated] = !0, component;
  };
export { withStaticProperties };
//# sourceMappingURL=withStaticProperties.native.js.map
