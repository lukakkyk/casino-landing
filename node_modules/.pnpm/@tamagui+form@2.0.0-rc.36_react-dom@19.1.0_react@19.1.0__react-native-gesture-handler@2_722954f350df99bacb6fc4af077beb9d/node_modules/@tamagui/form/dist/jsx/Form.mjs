import { View, createStyledContext, styled } from "@tamagui/core";
import { composeEventHandlers, withStaticProperties } from "@tamagui/helpers";
import { jsx } from "react/jsx-runtime";
const FORM_NAME = "Form",
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
  FormTrigger = FormTriggerFrame.styleable((props, forwardedRef) => {
    const {
        scope,
        children,
        onPress,
        ...triggerProps
      } = props,
      context = useFormContext(scope);
    return /* @__PURE__ */jsx(FormTriggerFrame, {
      role: "button",
      ...triggerProps,
      ref: forwardedRef,
      onPress: composeEventHandlers(onPress, context.onSubmit),
      children
    });
  }),
  FormComponent = FormFrame.styleable(function ({
    scope,
    onSubmit,
    ...props
  }, ref) {
    return /* @__PURE__ */jsx(FormProvider, {
      scope,
      onSubmit,
      children: /* @__PURE__ */jsx(FormFrame, {
        ref,
        ...props,
        onSubmit: e => {
          e.preventDefault(), onSubmit?.();
        }
      })
    });
  }),
  Form2 = withStaticProperties(FormComponent, {
    Trigger: FormTrigger
  });
export { Form2 as Form, FormContext, FormFrame, FormProvider, FormTrigger, useFormContext };
//# sourceMappingURL=Form.mjs.map
