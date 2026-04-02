import { jsx as _jsx } from "react/jsx-runtime";
import { getDefaultTamaguiConfig } from "@tamagui/config-default";
import { createTamagui } from "@tamagui/core";
import { describe, expect, test } from "vitest";
import { Button } from "./Button.native.js";
var conf = createTamagui(getDefaultTamaguiConfig());
describe("Button", function () {
  test("123", function () {
    expect(!0).toBeTruthy();
  }), test("accepts native button html props", function () {
    var _submitBtn = /* @__PURE__ */_jsx(Button, {
        type: "submit",
        children: "Submit"
      }),
      _resetBtn = /* @__PURE__ */_jsx(Button, {
        type: "reset",
        children: "Reset"
      }),
      _buttonBtn = /* @__PURE__ */_jsx(Button, {
        type: "button",
        children: "Button"
      }),
      _formBtn = /* @__PURE__ */_jsx(Button, {
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
//# sourceMappingURL=Button.test.native.js.map
