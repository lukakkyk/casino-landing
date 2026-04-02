import { getDefaultTamaguiConfig } from "@tamagui/config-default";
import { createTamagui } from "@tamagui/core";
import { describe, expect, test } from "vitest";
import { Button } from "./Button.mjs";
import { jsx } from "react/jsx-runtime";
const conf = createTamagui(getDefaultTamaguiConfig());
describe("Button", () => {
  test("123", () => {
    expect(!0).toBeTruthy();
  }), test("accepts native button html props", () => {
    const _submitBtn = /* @__PURE__ */jsx(Button, {
        type: "submit",
        children: "Submit"
      }),
      _resetBtn = /* @__PURE__ */jsx(Button, {
        type: "reset",
        children: "Reset"
      }),
      _buttonBtn = /* @__PURE__ */jsx(Button, {
        type: "button",
        children: "Button"
      }),
      _formBtn = /* @__PURE__ */jsx(Button, {
        type: "submit",
        form: "myForm",
        formAction: "/submit",
        formMethod: "post",
        formTarget: "_blank",
        formNoValidate: !0,
        name: "submitBtn",
        value: "submit",
        children: "Submit"
      });
    expect(!0).toBeTruthy();
  });
});
//# sourceMappingURL=Button.test.mjs.map
