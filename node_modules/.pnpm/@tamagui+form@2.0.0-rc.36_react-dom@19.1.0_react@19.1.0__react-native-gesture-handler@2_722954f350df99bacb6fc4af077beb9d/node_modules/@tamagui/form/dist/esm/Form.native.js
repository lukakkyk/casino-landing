import { jsx as _jsx } from "react/jsx-runtime";
import { View, createStyledContext, styled } from "@tamagui/core";
import { composeEventHandlers, withStaticProperties } from "@tamagui/helpers";
var FORM_NAME = "Form",
  FormFrame = styled(View, {
    name: FORM_NAME,
    render: "form"
  }),
  FormContext = createStyledContext({
    onSubmit: void 0
  }),
  {
    useStyledContext: useFormContext,
    Provider: FormProvider
  } = FormContext,
  FormTriggerFrame = styled(View, {
    name: "FormTrigger"
  }),
  FormTrigger = FormTriggerFrame.styleable(function (props, forwardedRef) {
    var {
        scope,
        children,
        onPress,
        ...triggerProps
      } = props,
      context = useFormContext(scope);
    return /* @__PURE__ */_jsx(FormTriggerFrame, {
      role: "button",
      ...triggerProps,
      ref: forwardedRef,
      onPress: composeEventHandlers(onPress, context.onSubmit),
      children
    });
  }),
  FormComponent = FormFrame.styleable(function (param, ref) {
    var {
      scope,
      onSubmit,
      ...props
    } = param;
    return /* @__PURE__ */_jsx(FormProvider, {
      scope,
      onSubmit,
      children: /* @__PURE__ */_jsx(FormFrame, {
        ref,
        ...props,
        onSubmit: function (e) {
          e.preventDefault(), onSubmit?.();
        }
      })
    });
  }),
  Form2 = withStaticProperties(FormComponent, {
    Trigger: FormTrigger
  });
export { Form2 as Form, FormContext, FormFrame, FormProvider, FormTrigger, useFormContext };
//# sourceMappingURL=Form.native.js.map
