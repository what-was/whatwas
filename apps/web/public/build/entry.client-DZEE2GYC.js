import {
  ClientStyleContext
} from "/build/_shared/chunk-VWYOXRKX.js";
import {
  require_react_dom
} from "/build/_shared/chunk-7G6WEMYH.js";
import {
  CacheProvider,
  RemixBrowser,
  emotion_cache_browser_esm_default,
  init_esm,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-P3LUYFZE.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// ../../node_modules/react-dom/client.js
var require_client = __commonJS({
  "../../node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// app/entry.client.tsx
var import_react = __toESM(require_react());
var import_client = __toESM(require_client());
init_esm();

// app/lib/createEmotionCache.ts
function createEmotionCache() {
  return emotion_cache_browser_esm_default({ key: "css" });
}

// app/entry.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ClientCacheProvider({ children }) {
  const [cache, setCache] = (0, import_react.useState)(() => createEmotionCache());
  function reset() {
    setCache(createEmotionCache());
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientStyleContext.Provider, { value: { reset }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CacheProvider, { value: cache, children }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
(0, import_client.hydrateRoot)(
  document,
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientCacheProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 28,
    columnNumber: 3
  }, this)
);
//# sourceMappingURL=/build/entry.client-DZEE2GYC.js.map
