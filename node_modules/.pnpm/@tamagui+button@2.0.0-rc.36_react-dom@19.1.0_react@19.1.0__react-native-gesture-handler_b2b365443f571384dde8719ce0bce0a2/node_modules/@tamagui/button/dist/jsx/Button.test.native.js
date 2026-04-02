"use strict";

var import_jsx_runtime = require("react/jsx-runtime"),
  import_config_default = require("@tamagui/config-default"),
  import_core = require("@tamagui/core"),
  import_vitest = require("vitest"),
  import_Button = require("./Button.native.js"),
  conf = (0, import_core.createTamagui)((0, import_config_default.getDefaultTamaguiConfig)());
(0, import_vitest.describe)("Button", function () {
  (0, import_vitest.test)("123", function () {
    (0, import_vitest.expect)(!0).toBeTruthy();
  }), (0, import_vitest.test)("accepts native button html props", function () {
    var _submitBtn = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_Button.Button, {
        type: "submit",
        children: "Submit"
      }),
      _resetBtn = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_Button.Button, {
        type: "reset",
        children: "Reset"
      }),
      _buttonBtn = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_Button.Button, {
        type: "button",
        children: "Button"
      }),
      _formBtn = /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_Button.Button, {
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
    (0, import_vitest.expect)(!0).toBeTruthy();
  });
});
//# sourceMappingURL=Button.test.native.js.map
