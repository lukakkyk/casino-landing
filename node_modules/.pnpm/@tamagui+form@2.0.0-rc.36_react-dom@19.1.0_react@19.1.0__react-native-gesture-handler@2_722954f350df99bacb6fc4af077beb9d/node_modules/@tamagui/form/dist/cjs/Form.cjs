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
var Form_exports = {};
__export(Form_exports, {
  Form: () => Form2,
  FormContext: () => FormContext,
  FormFrame: () => FormFrame,
  FormProvider: () => FormProvider,
  FormTrigger: () => FormTrigger,
  useFormContext: () => useFormContext
});
module.exports = __toCommonJS(Form_exports);
var import_core = require("@tamagui/core"),
  import_helpers = require("@tamagui/helpers"),
  import_jsx_runtime = require("react/jsx-runtime");
const FORM_NAME = "Form",
  FormFrame = (0, import_core.styled)(import_core.View, {
    name: FORM_NAME,
    render: "form"
  }),
  FormContext = (0, import_core.createStyledContext)({
    onSubmit: void 0
  }),
  {
    useStyledContext: useFormContext,
    Provider: FormProvider
  } = FormContext,
  FormTriggerFrame = (0, import_core.styled)(import_core.View, {
    name: "FormTrigger"
  }),
  FormTrigger = FormTriggerFrame.styleable((props, forwardedRef) => {
    const {
        scope,
        children,
        onPress,
        ...triggerProps
      } = props,
      context = useFormContext(scope);
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(FormTriggerFrame, {
      role: "button",
      ...triggerProps,
      ref: forwardedRef,
      onPress: (0, import_helpers.composeEventHandlers)(onPress, context.onSubmit),
      children
    });
  }),
  FormComponent = FormFrame.styleable(function ({
    scope,
    onSubmit,
    ...props
  }, ref) {
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(FormProvider, {
      scope,
      onSubmit,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(FormFrame, {
        ref,
        ...props,
        onSubmit: e => {
          e.preventDefault(), onSubmit?.();
        }
      })
    });
  }),
  Form2 = (0, import_helpers.withStaticProperties)(FormComponent, {
    Trigger: FormTrigger
  });