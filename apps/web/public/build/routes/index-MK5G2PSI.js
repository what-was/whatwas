import {
  i
} from "/build/_shared/chunk-OGV5JWI4.js";
import "/build/_shared/chunk-KIPNPAPD.js";
import {
  REDIRECT_ROUTES,
  require_dist
} from "/build/_shared/chunk-52X7NMXT.js";
import "/build/_shared/chunk-4DOPGRE4.js";
import {
  Link,
  Outlet,
  init_esm,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-P3LUYFZE.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/index.tsx
var import_remix = __toESM(require_dist());
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AppIndex() {
  const { user } = (0, import_remix.useUser)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    !user?.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(i, { as: Link, to: REDIRECT_ROUTES.GUEST, prefetch: "intent", children: "Login" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(i, { as: Link, to: `wallet`, prefetch: "intent", children: "Wallet" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
export {
  AppIndex as default
};
//# sourceMappingURL=/build/routes/index-MK5G2PSI.js.map
