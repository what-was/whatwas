import "/build/_shared/chunk-AUYLHJJM.js";
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

// app/routes/__public/login/$.tsx
init_esm();
var import_remix = __toESM(require_dist());
var import_user = __toESM(require_user());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Login() {
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
        import_remix.SignIn,
        {
          routing: "path",
          path: "/login",
          signUpUrl: "/signup",
          redirectUrl: redirectTo
        },
        void 0,
        false,
        {
          fileName: "app/routes/__public/login/$.tsx",
          lineNumber: 36,
          columnNumber: 9
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/__public/login/$.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/__public/login/$.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}
export {
  Login as default
};
//# sourceMappingURL=/build/routes/__public/login/$-UY2JE366.js.map
