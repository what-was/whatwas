import {
  require_user
} from "/build/_shared/chunk-X2FTVZ7H.js";
import {
  Box,
  Grid,
  GridItem,
  Select,
  Text
} from "/build/_shared/chunk-3LCOXCVH.js";
import {
  Button
} from "/build/_shared/chunk-4DOPGRE4.js";
import "/build/_shared/chunk-7G6WEMYH.js";
import {
  Form,
  init_esm,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-P3LUYFZE.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/__app/settings.tsx
init_esm();
var import_user = __toESM(require_user());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ThemePreferenceOptions = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "auto" }
];
function SettingsPage() {
  const { user } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { templateColumns: "repeat(2, 1fr)", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", size: "md", children: "Settings" }, void 0, false, {
      fileName: "app/routes/__app/settings.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "patch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { display: "flex", flexDir: "column", gap: 4, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Select,
        {
          name: "themePreference",
          placeholder: "Theme Mode",
          defaultValue: user.themePreference,
          children: ThemePreferenceOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: option.value, children: option.label }, option.value, false, {
            fileName: "app/routes/__app/settings.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, this))
        },
        void 0,
        false,
        {
          fileName: "app/routes/__app/settings.tsx",
          lineNumber: 68,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { color: "green", type: "submit", children: "Save" }, void 0, false, {
        fileName: "app/routes/__app/settings.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/__app/settings.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/__app/settings.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/__app/settings.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__app/settings.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}
export {
  SettingsPage as default
};
//# sourceMappingURL=/build/routes/__app/settings-R24PVVNI.js.map
