import {
  require_user
} from "/build/_shared/chunk-X2FTVZ7H.js";
import {
  require_dist
} from "/build/_shared/chunk-52X7NMXT.js";
import {
  Box
} from "/build/_shared/chunk-3LCOXCVH.js";
import "/build/_shared/chunk-4DOPGRE4.js";
import "/build/_shared/chunk-7G6WEMYH.js";
import {
  init_esm,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-P3LUYFZE.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/__public/signup/$.tsx
var import_remix = __toESM(require_dist());
init_esm();
var import_user = __toESM(require_user());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SignUpPage() {
  const { redirectTo } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Box,
    {
      h: "full",
      w: "full",
      display: "flex",
      flexDir: "column",
      alignItems: "center",
      justifyContent: "center",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { display: "grid", gap: "4", gridTemplateColumns: "1fr", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_remix.SignUp,
        {
          routing: "path",
          path: "/signup",
          signInUrl: "/login",
          afterSignUpUrl: redirectTo
        },
        void 0,
        false,
        {
          fileName: "app/routes/__public/signup/$.tsx",
          lineNumber: 29,
          columnNumber: 9
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/__public/signup/$.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/__public/signup/$.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}
export {
  SignUpPage as default
};
//# sourceMappingURL=/build/routes/__public/signup/$-FH3GOJLW.js.map
