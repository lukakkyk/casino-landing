"use strict";

var import_vitest = require("vitest");
(0, import_vitest.describe)("Input event handler types", function () {
  (0, import_vitest.test)("onChange event uses HTMLInputElement", function () {
    (0, import_vitest.expectTypeOf)().toMatchTypeOf();
  }), (0, import_vitest.test)("onFocus event uses HTMLInputElement", function () {
    (0, import_vitest.expectTypeOf)().toMatchTypeOf();
  }), (0, import_vitest.test)("onBlur event uses HTMLInputElement", function () {
    (0, import_vitest.expectTypeOf)().toMatchTypeOf();
  }), (0, import_vitest.test)("onKeyDown event uses HTMLInputElement", function () {
    (0, import_vitest.expectTypeOf)().toMatchTypeOf();
  }), (0, import_vitest.test)("onClick event uses HTMLInputElement", function () {
    (0, import_vitest.expectTypeOf)().toMatchTypeOf();
  }), (0, import_vitest.test)("onChange event is NOT typed with HTMLDivElement", function () {
    (0, import_vitest.expectTypeOf)().toEqualTypeOf();
  });
});
(0, import_vitest.describe)("Input HTML props", function () {
  (0, import_vitest.test)("accepts type prop", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("type");
  }), (0, import_vitest.test)("accepts placeholder prop", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("placeholder");
  }), (0, import_vitest.test)("accepts value prop", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("value");
  }), (0, import_vitest.test)("accepts defaultValue prop", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("defaultValue");
  }), (0, import_vitest.test)("accepts maxLength prop", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("maxLength");
  }), (0, import_vitest.test)("accepts pattern prop", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("pattern");
  }), (0, import_vitest.test)("accepts required prop", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("required");
  }), (0, import_vitest.test)("accepts readOnly prop", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("readOnly");
  }), (0, import_vitest.test)("accepts autoComplete prop", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("autoComplete");
  }), (0, import_vitest.test)("accepts name prop", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("name");
  });
});
(0, import_vitest.describe)("Input style props", function () {
  (0, import_vitest.test)("accepts padding style prop", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("padding");
  }), (0, import_vitest.test)("accepts backgroundColor style prop", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("backgroundColor");
  }), (0, import_vitest.test)("accepts borderRadius style prop", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("borderRadius");
  }), (0, import_vitest.test)("accepts text style props", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("fontSize"), (0, import_vitest.expectTypeOf)().toHaveProperty("fontWeight"), (0, import_vitest.expectTypeOf)().toHaveProperty("color");
  }), (0, import_vitest.test)("accepts size variant", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("size");
  }), (0, import_vitest.test)("accepts unstyled variant", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("unstyled");
  });
});
(0, import_vitest.describe)("Input cross-platform props", function () {
  (0, import_vitest.test)("autoCorrect accepts boolean and string", function () {
    (0, import_vitest.expectTypeOf)().toMatchTypeOf();
  }), (0, import_vitest.test)("autoCapitalize accepts native and web values", function () {
    (0, import_vitest.expectTypeOf)().toMatchTypeOf();
  }), (0, import_vitest.test)("accepts onChangeText callback", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("onChangeText"), (0, import_vitest.expectTypeOf)().toMatchTypeOf();
  }), (0, import_vitest.test)("accepts onSubmitEditing callback", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("onSubmitEditing");
  }), (0, import_vitest.test)("accepts placeholderTextColor", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("placeholderTextColor");
  }), (0, import_vitest.test)("accepts selection prop", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("selection");
  });
});
(0, import_vitest.describe)("InputRef type", function () {
  (0, import_vitest.test)("InputRef accepts TextInput", function () {
    var _ref = {};
  }), (0, import_vitest.test)("InputRef rejects plain HTMLDivElement", function () {
    var _ref = {};
  });
});
(0, import_vitest.describe)("TextArea types", function () {
  (0, import_vitest.test)("TextArea has rows prop", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("rows");
  }), (0, import_vitest.test)("TextArea accepts style props", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("padding"), (0, import_vitest.expectTypeOf)().toHaveProperty("fontSize");
  }), (0, import_vitest.test)("TextArea accepts HTML input props", function () {
    (0, import_vitest.expectTypeOf)().toHaveProperty("placeholder"), (0, import_vitest.expectTypeOf)().toHaveProperty("value");
  });
});
(0, import_vitest.describe)("InputProps derivation", function () {
  (0, import_vitest.test)("InputProps equals GetProps<typeof Input>", function () {
    (0, import_vitest.expectTypeOf)().toEqualTypeOf();
  }), (0, import_vitest.test)("TextAreaProps equals GetProps<typeof TextArea>", function () {
    (0, import_vitest.expectTypeOf)().toEqualTypeOf();
  });
});
//# sourceMappingURL=inputTypes.test-d.native.js.map
