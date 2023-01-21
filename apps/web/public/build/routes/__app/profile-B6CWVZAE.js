import {
  require_user
} from "/build/_shared/chunk-X2FTVZ7H.js";
import {
  Box,
  Text
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

// app/routes/__app/profile.tsx
init_esm();
var import_user = __toESM(require_user());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Profile() {
  const { user } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: user.username }, void 0, false, {
    fileName: "app/routes/__app/profile.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/__app/profile.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
export {
  Profile as default
};
//# sourceMappingURL=/build/routes/__app/profile-B6CWVZAE.js.map
