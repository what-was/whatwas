var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value;
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var __publicField = (obj, key, value) => (__defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value), value), __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj)), __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
}, __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_react3 = require("@remix-run/react");

// app/lib/context.tsx
var import_react = require("react"), ServerStyleContext = (0, import_react.createContext)(null), ClientStyleContext = (0, import_react.createContext)(
  null
);

// app/lib/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/lib/utils/env.server.ts
function getEnv() {
  return {
    NODE_ENV: "development",
    CLERK_FRONTEND_API: process.env.CLERK_FRONTEND_API,
    NORDIGEN_NAME: process.env.NORDIGEN_NAME
  };
}

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
global.ENV = getEnv();
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), App2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
    fileName: "app/entry.server.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/entry.server.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, { value: null, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(App2, {}, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 28,
      columnNumber: 5
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, { value: chunks.styles, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(App2, {}, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => root_default,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react9 = require("@remix-run/react"), import_ssr2 = require("@clerk/remix/ssr.server"), import_react10 = require("@saas-ui/react"), import_react11 = require("@chakra-ui/react"), import_remix = require("@clerk/remix"), import_themes = require("@clerk/themes");

// app/lib/seo.ts
var import_remix_seo = require("remix-seo"), { getSeo, getSeoMeta, getSeoLinks } = (0, import_remix_seo.initSeo)({
  title: "WhatWas?",
  titleTemplate: "%s",
  description: "The WhatWas? app",
  robots: {
    noIndex: !0,
    noFollow: !0
  }
});

// app/lib/user.server.ts
var import_remix_utils2 = require("remix-utils"), import_node = require("@remix-run/node"), import_ssr = require("@clerk/remix/ssr.server"), import_clerk_sdk_node = __toESM(require("@clerk/clerk-sdk-node")), import_date_fns = require("date-fns");

// app/lib/http.ts
var import_remix_utils = require("remix-utils");

// app/lib/constants.ts
var REDIRECT_ROUTES = {
  AUTHENTICATED: "/wallet",
  GUEST: "/login",
  AUTH_SUCCESSFUL: "/api/auth/init-auth",
  REDIRECT_BASE: "http://localhost:3000"
};

// app/lib/http.ts
function getRedirectTo(request, fallback) {
  let { searchParams } = new URL(request.url), redirectTo = searchParams.get("redirectTo");
  return (0, import_remix_utils.safeRedirect)(redirectTo, fallback);
}
var createRedirectToHere = (request, to, fromFallback) => {
  let { pathname } = new URL(request.url), from = pathname === to ? fromFallback : pathname;
  return `${removeTrailSlash(to)}?redirectTo=${encodeURIComponent(from)}`;
}, authRedirectUrl = (request, fallback, shouldRedirectAfterAuth = !0) => shouldRedirectAfterAuth ? createRedirectToHere(request, REDIRECT_ROUTES.GUEST, fallback ?? "/") : REDIRECT_ROUTES.GUEST;
function removeTrailSlash(path) {
  return path.replace(/\/$/, "");
}

// app/lib/db.ts
var import_client = require("@prisma/client"), import_dayjs = __toESM(require("dayjs")), logThreshold = 500;
function getClient() {
  let client2 = new import_client.PrismaClient({
    log: [
      { level: "query", emit: "event" },
      { level: "error", emit: "stdout" },
      { level: "info", emit: "stdout" },
      { level: "warn", emit: "stdout" }
    ]
  });
  return client2.$on("query", async (e) => {
    if (e.duration < logThreshold)
      return;
    let { default: chalk } = await import("chalk"), color = e.duration < logThreshold * 1.1 ? "green" : e.duration < logThreshold * 1.2 ? "blue" : e.duration < logThreshold * 1.3 ? "yellow" : e.duration < logThreshold * 1.4 ? "redBright" : "red", dur = chalk[color](`${e.duration}ms`);
    console.log(`prisma:query - ${dur} - ${e.query}`);
  }), client2.$connect(), client2;
}
var db = global.__db__ ?? (global.__db__ = getClient());
db.$use(async (params, next) => {
  switch (params.action) {
    case "delete":
      params.action = "update", params.args.data = { deletedAt: (0, import_dayjs.default)().toISOString() };
    case "deleteMany":
      params.action = "updateMany", params.args.data != null ? params.args.data.deletedAt = (0, import_dayjs.default)().toISOString() : params.args.data = { deletedAt: (0, import_dayjs.default)().toISOString() };
    case "update":
      params.args.data != null ? params.args.data.updatedAt = (0, import_dayjs.default)().toISOString() : params.args.data = { updatedAt: (0, import_dayjs.default)().toISOString() };
    default:
  }
  return next(params);
});

// app/lib/queues/auth/auth.queue.ts
var import_bull = __toESM(require("bull"));

// app/lib/queues/auth/auth.process.ts
var initAuthProcess = async (job, done) => {
  let { user } = job.data;
  !user || !user.id || (await Promise.all([
    job.queue.client.srem("init-auth:active", user.id),
    createUserMeta({
      clerkId: user.id
    })
  ]), typeof done == "function" && done());
};

// app/lib/queues/auth/auth.queue.ts
var settings = {
  stalledInterval: 3e5,
  guardInterval: 5e3,
  drainDelay: 300
}, queue = new import_bull.default("init-auth", {
  redis: process.env.REDIS_URL || "",
  settings
});
queue.process(initAuthProcess);
async function initializeAuthQueue(input) {
  let { user } = input, redis2 = await queue.client;
  if (await redis2.sismember("init-auth:active", user.id))
    return console.log(`${user.id} is already in progress: ${queue.name}`), !1;
  try {
    return await redis2.sadd("init-auth:active", user.id), await queue.add({ user }), console.log(`${user.id} is added to queue: ${queue.name}`), !0;
  } catch {
    return !1;
  }
}

// app/lib/timing.server.ts
async function time(fn, {
  type,
  desc,
  timings
}) {
  let promise = typeof fn == "function" ? fn() : fn;
  if (!timings)
    return promise;
  let start = performance.now(), result = await promise;
  type = type.replaceAll(" ", "_");
  let timingType = timings[type];
  return timingType || (timingType = timings[type] = []), timingType.push({ desc, type, time: performance.now() - start }), result;
}
function getServerTimeHeader(timings) {
  return Object.entries(timings).map(([key, timingInfos]) => {
    let dur = timingInfos.reduce((acc, timingInfo) => acc + timingInfo.time, 0).toFixed(1), desc = timingInfos.map((t) => t.desc).filter(Boolean).join(" & ");
    return [
      key.replaceAll(":", "_"),
      desc ? `desc="${desc}"` : null,
      `dur=${dur}`
    ].filter(Boolean).join(";");
  }).join(",");
}

// app/lib/redis.server.ts
var import_https = __toESM(require("https")), import_redis = require("@upstash/redis"), redis = import_redis.Redis.fromEnv({
  agent: new import_https.default.Agent({ keepAlive: !0 })
});

// app/lib/user.server.ts
var redirectAfterAuth = (request, shouldRedirect = !0) => {
  throw shouldRedirect ? (0, import_node.redirect)(authRedirectUrl(request)) : (0, import_remix_utils2.unauthorized)({ redirectTo: authRedirectUrl(request) });
}, authenticatedRequest = async (args, opts, shouldRedirectAfterAuth = !0) => {
  let { request } = args, handler = async () => {
    try {
      let { userId } = await (0, import_ssr.getAuth)(args);
      if (!userId)
        throw redirectAfterAuth(request, shouldRedirectAfterAuth);
      return { userId };
    } catch {
      throw redirectAfterAuth(request, shouldRedirectAfterAuth);
    }
  };
  return opts != null && opts.timings ? time(handler, {
    timings: opts.timings,
    type: "authenticated-request"
  }) : await handler();
}, unauthenticatedRequest = async (args, opts, shouldRedirectAfterAuth = !0) => {
  let { request } = args, handler = async () => {
    try {
      let { userId } = await (0, import_ssr.getAuth)(args);
      if (userId)
        throw redirectAfterAuth(request, shouldRedirectAfterAuth);
    } catch {
    }
    throw redirectAfterAuth(request, shouldRedirectAfterAuth);
  };
  return opts != null && opts.timings ? time(handler, {
    timings: opts.timings,
    type: "unauthenticatedRequest-request"
  }) : await handler();
}, getUserFromCache = async (clerkId) => await redis.get(`user:${clerkId}`);
async function getUser(clerkId, opts) {
  let handler = async () => {
    try {
      let cachedUser = await getUserFromCache(clerkId);
      if (cachedUser)
        return cachedUser;
      let user = await import_clerk_sdk_node.default.users.getUser(clerkId);
      if (!user)
        throw new Error(`User not found: ${clerkId}`);
      return await redis.setex(
        `user:${user.id}`,
        (0, import_date_fns.hoursToMinutes)(6),
        JSON.stringify(user)
      ), user;
    } catch (error) {
      throw error;
    }
  };
  return opts != null && opts.timings ? time(handler, {
    timings: opts.timings,
    type: "get-user"
  }) : await handler();
}
async function getUserFromRequest(args, opts, shouldRedirectAfterAuth = !0) {
  let { request } = args, handler = async () => {
    try {
      let { userId } = await authenticatedRequest(args, {
        timings: opts == null ? void 0 : opts.timings
      }), user = await getUser(userId, { timings: opts == null ? void 0 : opts.timings });
      if (!user)
        throw redirectAfterAuth(request, shouldRedirectAfterAuth);
      return user;
    } catch {
      throw redirectAfterAuth(request, shouldRedirectAfterAuth);
    }
  };
  return opts != null && opts.timings ? time(handler(), {
    timings: opts.timings,
    type: "get-user-from-request"
  }) : await handler();
}
async function getUserMeta(clerkId) {
  return await db.userMeta.findUnique({
    where: {
      clerkId
    }
  });
}
async function createUserMeta(input) {
  return await db.userMeta.create({
    data: input
  });
}
async function initializeUserMeta(userId, redirectTo) {
  let clerkUser = await getUser(userId);
  if (!clerkUser)
    throw (0, import_node.redirect)(`${REDIRECT_ROUTES.GUEST}?redirectTo=${redirectTo}`);
  await getUserMeta(userId) || await initializeAuthQueue({ user: clerkUser });
}

// app/lib/theme/theme.ts
var import_react4 = require("@chakra-ui/react"), import_theme = require("@saas-ui/theme"), import_theme_glass = require("@saas-ui/theme-glass");

// app/lib/theme/foundations/colors.ts
var colors = {
  black: "#101010",
  gray: {
    50: "#fafafa",
    100: "#f1f1f1",
    200: "#e7e7e7",
    300: "#d4d4d4",
    400: "#adadad",
    500: "#7f7f7f",
    600: "#545454",
    700: "#373737",
    800: "#202020",
    900: "#191919"
  },
  red: {
    50: "#fcf6f6",
    100: "#f4dad9",
    200: "#eabab8",
    300: "#de928f",
    400: "#d67a77",
    500: "#cc5854",
    600: "#c13530",
    700: "#9d2a26",
    800: "#852420",
    900: "#611a18"
  },
  orange: {
    50: "#fdfaf7",
    100: "#f6ece0",
    200: "#ebd5bc",
    300: "#dcb589",
    400: "#ce985a",
    500: "#c07d2f",
    600: "#a26928",
    700: "#81541f",
    800: "#664219",
    900: "#543614"
  },
  yellow: {
    50: "#fefefc",
    100: "#faf9f0",
    200: "#f2eed2",
    300: "#e8e0b0",
    400: "#d9cd7f",
    500: "#bba92e",
    600: "#968724",
    700: "#75691c",
    800: "#574f15",
    900: "#484112"
  },
  green: {
    50: "#f7fdfa",
    100: "#d3f2e3",
    200: "#a2e3c5",
    300: "#68d2a1",
    400: "#2ebd7a",
    500: "#27a269",
    600: "#218657",
    700: "#196844",
    800: "#155637",
    900: "#11462e"
  },
  teal: {
    50: "#f3fbfc",
    100: "#cceff0",
    200: "#9fe0e2",
    300: "#65cdd1",
    400: "#2cb2b6",
    500: "#26979b",
    600: "#1f7b7e",
    700: "#185f62",
    800: "#145052",
    900: "#104143"
  },
  cyan: {
    50: "#f5fbfc",
    100: "#d6edf3",
    200: "#c4e5ed",
    300: "#afdce7",
    400: "#6fc0d4",
    500: "#50b2cb",
    600: "#2ea2bf",
    700: "#26869e",
    800: "#206e82",
    900: "#185564"
  },
  blue: {
    50: "#f2f6fb",
    100: "#d0dff1",
    200: "#aec8e7",
    300: "#88afdc",
    400: "#6497d1",
    500: "#4481c7",
    600: "#2c6bb4",
    700: "#21528a",
    800: "#1b4371",
    900: "#16375c"
  },
  purple: {
    50: "#f8f6fc",
    100: "#e4dbf4",
    200: "#d0c0ec",
    300: "#b399e1",
    400: "#9f7ed8",
    500: "#855ace",
    600: "#7240c6",
    700: "#5e2cb4",
    800: "#4d2494",
    900: "#3a1b6e"
  },
  pink: {
    50: "#fcf6f9",
    100: "#f4dae6",
    200: "#ebbcd2",
    300: "#df94b7",
    400: "#d676a3",
    500: "#ca4d87",
    600: "#bd2e71",
    700: "#9b265c",
    800: "#791d48",
    900: "#591635"
  },
  primary: {
    50: "#fcf6f7",
    100: "#f4dadd",
    200: "#eab9bf",
    300: "#de919a",
    400: "#d77984",
    500: "#cd5664",
    600: "#c23244",
    700: "#9e2635",
    800: "#86212d",
    900: "#621821"
  }
}, colors_default = colors;

// app/lib/theme/foundations/typography.ts
var fonts = {
  heading: "Inter, sans-serif",
  body: "Inter, sans-serif"
};

// app/lib/theme/theme.ts
var config = {
  initialColorMode: "dark",
  useSystemColorMode: !0
}, theme = (0, import_react4.extendTheme)(
  { ...import_theme.theme, config, colors: colors_default, fonts },
  import_theme_glass.theme
);

// app/components/document.tsx
var import_react5 = require("react"), import_react6 = require("@emotion/react"), import_react7 = require("@remix-run/react"), import_react8 = require("@chakra-ui/react");
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), Document = (0, import_react6.withEmotionCache)(
  ({ children }, emotionCache) => {
    let serverStyleData = (0, import_react5.useContext)(ServerStyleContext), clientStyleData = (0, import_react5.useContext)(ClientStyleContext);
    return (0, import_react5.useEffect)(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData == null || clientStyleData.reset();
    }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.Meta, {}, void 0, !1, {
          fileName: "app/components/document.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.Links, {}, void 0, !1, {
          fileName: "app/components/document.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        serverStyleData ? serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "style",
          {
            "data-emotion": `${key} ${ids.join(" ")}`,
            dangerouslySetInnerHTML: { __html: css }
          },
          key,
          !1,
          {
            fileName: "app/components/document.tsx",
            lineNumber: 45,
            columnNumber: 17
          },
          this
        )) : null
      ] }, void 0, !0, {
        fileName: "app/components/document.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react8.ColorModeScript, { initialColorMode: theme.config.initialColorMode }, void 0, !1, {
          fileName: "app/components/document.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/components/document.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.Scripts, {}, void 0, !1, {
          fileName: "app/components/document.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.LiveReload, {}, void 0, !1, {
          fileName: "app/components/document.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/document.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/document.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this);
  }
);

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), [seoMeta, seoLinks] = getSeo(), meta = () => ({
  ...seoMeta,
  viewport: "width=device-width, initial-scale=1"
}), links = () => [
  ...seoLinks,
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  }
], loader = async (args) => await (0, import_ssr2.rootAuthLoader)(
  args,
  async ({ request }) => {
    let returnData = {
      cookies: request.headers.get("cookie") ?? ""
    }, { userId } = request.auth;
    if (!userId)
      return returnData;
    let redirectTo = getRedirectTo(request, REDIRECT_ROUTES.AUTHENTICATED);
    return await initializeUserMeta(userId, redirectTo), {
      ...returnData
    };
  },
  { loadUser: !0 }
);
function App() {
  let { cookies } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_react10.SaasProvider,
    {
      colorModeManager: (0, import_react11.cookieStorageManagerSSR)(cookies),
      theme,
      resetCSS: !0,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react9.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/root.tsx",
      lineNumber: 62,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
var root_default = (0, import_remix.ClerkApp)(App, {
  appearance: {
    baseTheme: import_themes.dark,
    variables: {
      fontFamily: fonts.body,
      colorPrimary: colors_default.primary[400],
      colorBackground: colors_default.gray[900],
      colorInputBackground: colors_default.gray[800]
    },
    layout: {
      logoPlacement: "none"
    }
  }
}), CatchBoundary = (0, import_remix.ClerkCatchBoundary)();

// app/routes/api/wallet/connect-bank.tsx
var connect_bank_exports = {};
__export(connect_bank_exports, {
  loader: () => loader2
});
var import_node4 = require("@remix-run/node");

// app/services/session.server.ts
var import_node2 = require("@remix-run/node"), sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: !0,
    secrets: [process.env.SESSION_SECRET || "SESSION_SECRET"],
    secure: !1
  }
}), { getSession, commitSession, destroySession } = sessionStorage;

// ../../node_modules/nordigen-node/lib/api/institutions.js
var _endpoint, _client, InstitutionApi = class {
  constructor({ client: client2 }) {
    __privateAdd(this, _endpoint, "institutions");
    __privateAdd(this, _client, null);
    __privateSet(this, _client, client2);
  }
  getInstitutions({ country }) {
    return __privateGet(this, _client).request({
      endpoint: `${__privateGet(this, _endpoint)}/?country=${country}`
    });
  }
  getInstitutionById(id) {
    return __privateGet(this, _client).request({ endpoint: `${__privateGet(this, _endpoint)}/${id}/` });
  }
};
_endpoint = new WeakMap(), _client = new WeakMap();

// ../../node_modules/nordigen-node/lib/httpMethod.js
var HttpMethod = class {
};
__publicField(HttpMethod, "GET", "GET"), __publicField(HttpMethod, "POST", "POST"), __publicField(HttpMethod, "PUT", "PUT"), __publicField(HttpMethod, "DELETE", "DELETE");

// ../../node_modules/nordigen-node/lib/api/requisition.js
var _endpoint2, _client2, RequisitionsApi = class {
  constructor({ client: client2 }) {
    __privateAdd(this, _endpoint2, "requisitions");
    __privateAdd(this, _client2, null);
    __privateSet(this, _client2, client2);
  }
  createRequisition({
    redirectUrl,
    institutionId,
    agreement,
    userLanguage,
    reference,
    redirectImmediate,
    accountSelection,
    ssn
  }) {
    let payload = {
      redirect: redirectUrl,
      reference,
      institution_id: institutionId,
      ...userLanguage && { user_language: userLanguage },
      ...agreement && { agreement },
      ...redirectImmediate && { redirect_immediate: redirectImmediate },
      ...accountSelection && { account_selection: accountSelection },
      ...ssn && { ssn }
    };
    return __privateGet(this, _client2).request({
      endpoint: `${__privateGet(this, _endpoint2)}/`,
      parameters: payload,
      method: HttpMethod.POST
    });
  }
  getRequisitions({ limit = 100, offset = 0 } = {}) {
    let params = { limit, offset };
    return __privateGet(this, _client2).request({
      endpoint: `${__privateGet(this, _endpoint2)}/`,
      method: HttpMethod.GET,
      parameters: params
    });
  }
  getRequisitionById(requisitionId) {
    return __privateGet(this, _client2).request({
      endpoint: `${__privateGet(this, _endpoint2)}/${requisitionId}/`
    });
  }
  deleteRequisition(requisitionId) {
    return __privateGet(this, _client2).request({
      endpoint: `${__privateGet(this, _endpoint2)}/${requisitionId}/`,
      method: HttpMethod.DELETE
    });
  }
};
_endpoint2 = new WeakMap(), _client2 = new WeakMap();

// ../../node_modules/nordigen-node/lib/api/agreements.js
var _endpoint3, _client3, AgreementApi = class {
  constructor({ client: client2 }) {
    __privateAdd(this, _endpoint3, "agreements/enduser");
    __privateAdd(this, _client3, null);
    __privateSet(this, _client3, client2);
  }
  createAgreement({ institutionId, maxHistoricalDays = 90, accessValidForDays = 90, accessScope = [
    "balances",
    "details",
    "transactions"
  ] }) {
    let payload = {
      institution_id: institutionId,
      max_historical_days: maxHistoricalDays,
      access_valid_for_days: accessValidForDays,
      access_scope: accessScope
    };
    return __privateGet(this, _client3).request({
      endpoint: `${__privateGet(this, _endpoint3)}/`,
      parameters: payload,
      method: HttpMethod.POST
    });
  }
  getAgreements({ limit = 100, offset = 0 } = {}) {
    let params = { limit, offset };
    return __privateGet(this, _client3).request({
      endpoint: `${__privateGet(this, _endpoint3)}/`,
      parameters: params
    });
  }
  getAgreementById(agreementId) {
    return __privateGet(this, _client3).request({
      endpoint: `${__privateGet(this, _endpoint3)}/${agreementId}/`
    });
  }
  deleteAgreement(agreementId) {
    return __privateGet(this, _client3).request({
      endpoint: `${__privateGet(this, _endpoint3)}/${agreementId}/`,
      method: HttpMethod.DELETE
    });
  }
  acceptAgreement({ agreementId, ip, userAgent }) {
    let payload = {
      user_agent: userAgent,
      ip_address: ip
    };
    return __privateGet(this, _client3).request({
      endpoint: `${__privateGet(this, _endpoint3)}/${agreementId}/accept/`,
      parameters: payload,
      method: HttpMethod.PUT
    });
  }
};
_endpoint3 = new WeakMap(), _client3 = new WeakMap();

// ../../node_modules/nordigen-node/lib/api/account.js
var _endpoint4, _client4, _accountId, _get, get_fn, _getPremium, getPremium_fn, AccountApi = class {
  constructor({ client: client2, accountId }) {
    __privateAdd(this, _get);
    __privateAdd(this, _getPremium);
    __privateAdd(this, _endpoint4, "accounts");
    __privateAdd(this, _client4, null);
    __privateAdd(this, _accountId, void 0);
    __privateSet(this, _client4, client2), __privateSet(this, _accountId, accountId);
  }
  getMetadata() {
    return __privateGet(this, _client4).request({
      endpoint: `${__privateGet(this, _endpoint4)}/${__privateGet(this, _accountId)}`
    });
  }
  getDetails() {
    return __privateMethod(this, _get, get_fn).call(this, "details");
  }
  getPremiumDetails(country = "") {
    let params = {
      country
    };
    return __privateMethod(this, _getPremium, getPremium_fn).call(this, "details", params);
  }
  getBalances() {
    return __privateMethod(this, _get, get_fn).call(this, "balances");
  }
  getTransactions({ dateFrom, dateTo } = {}, country = "") {
    let params = {
      date_from: dateFrom,
      date_to: dateTo,
      country
    };
    return __privateMethod(this, _get, get_fn).call(this, "transactions", params);
  }
  getPremiumTransactions({ dateFrom, dateTo, country } = {}) {
    let params = {
      date_from: dateFrom,
      date_to: dateTo,
      country
    };
    return __privateMethod(this, _getPremium, getPremium_fn).call(this, "transactions", params);
  }
};
_endpoint4 = new WeakMap(), _client4 = new WeakMap(), _accountId = new WeakMap(), _get = new WeakSet(), get_fn = function(path, parameters = {}) {
  let url2 = `${__privateGet(this, _endpoint4)}/${__privateGet(this, _accountId)}/${path}`;
  return __privateGet(this, _client4).request({ endpoint: url2, parameters });
}, _getPremium = new WeakSet(), getPremium_fn = function(path, parameters = {}) {
  let url2 = `${__privateGet(this, _endpoint4)}/premium/${__privateGet(this, _accountId)}/${path}`;
  return __privateGet(this, _client4).request({ endpoint: url2, parameters });
};

// ../../node_modules/nordigen-node/lib/utils.js
var filterObject = (obj) => Object.keys(obj || {}).reduce((acc, key) => (obj[key] && (acc[key] = obj[key]), acc), {});

// ../../node_modules/axios/lib/helpers/bind.js
function bind(fn, thisArg) {
  return function() {
    return fn.apply(thisArg, arguments);
  };
}

// ../../node_modules/axios/lib/utils.js
var { toString } = Object.prototype, { getPrototypeOf } = Object, kindOf = ((cache) => (thing) => {
  let str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), kindOfTest = (type) => (type = type.toLowerCase(), (thing) => kindOf(thing) === type), typeOfTest = (type) => (thing) => typeof thing === type, { isArray } = Array, isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? result = ArrayBuffer.isView(val) : result = val && val.buffer && isArrayBuffer(val.buffer), result;
}
var isString = typeOfTest("string"), isFunction = typeOfTest("function"), isNumber = typeOfTest("number"), isObject = (thing) => thing !== null && typeof thing == "object", isBoolean = (thing) => thing === !0 || thing === !1, isPlainObject = (val) => {
  if (kindOf(val) !== "object")
    return !1;
  let prototype3 = getPrototypeOf(val);
  return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}, isDate = kindOfTest("Date"), isFile = kindOfTest("File"), isBlob = kindOfTest("Blob"), isFileList = kindOfTest("FileList"), isStream = (val) => isObject(val) && isFunction(val.pipe), isFormData = (thing) => {
  let pattern = "[object FormData]";
  return thing && (typeof FormData == "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
}, isURLSearchParams = kindOfTest("URLSearchParams"), trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = !1 } = {}) {
  if (obj === null || typeof obj > "u")
    return;
  let i, l;
  if (typeof obj != "object" && (obj = [obj]), isArray(obj))
    for (i = 0, l = obj.length; i < l; i++)
      fn.call(null, obj[i], i, obj);
  else {
    let keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj), len = keys.length, key;
    for (i = 0; i < len; i++)
      key = keys[i], fn.call(null, obj[key], key, obj);
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  let keys = Object.keys(obj), i = keys.length, _key;
  for (; i-- > 0; )
    if (_key = keys[i], key === _key.toLowerCase())
      return _key;
  return null;
}
var _global = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  let { caseless } = isContextDefined(this) && this || {}, result = {}, assignValue = (val, key) => {
    let targetKey = caseless && findKey(result, key) || key;
    isPlainObject(result[targetKey]) && isPlainObject(val) ? result[targetKey] = merge(result[targetKey], val) : isPlainObject(val) ? result[targetKey] = merge({}, val) : isArray(val) ? result[targetKey] = val.slice() : result[targetKey] = val;
  };
  for (let i = 0, l = arguments.length; i < l; i++)
    arguments[i] && forEach(arguments[i], assignValue);
  return result;
}
var extend = (a, b, thisArg, { allOwnKeys } = {}) => (forEach(b, (val, key) => {
  thisArg && isFunction(val) ? a[key] = bind(val, thisArg) : a[key] = val;
}, { allOwnKeys }), a), stripBOM = (content) => (content.charCodeAt(0) === 65279 && (content = content.slice(1)), content), inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2), constructor.prototype.constructor = constructor, Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  }), props && Object.assign(constructor.prototype, props);
}, toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props, i, prop, merged = {};
  if (destObj = destObj || {}, sourceObj == null)
    return destObj;
  do {
    for (props = Object.getOwnPropertyNames(sourceObj), i = props.length; i-- > 0; )
      prop = props[i], (!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop] && (destObj[prop] = sourceObj[prop], merged[prop] = !0);
    sourceObj = filter2 !== !1 && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
}, endsWith = (str, searchString, position) => {
  str = String(str), (position === void 0 || position > str.length) && (position = str.length), position -= searchString.length;
  let lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}, toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray(thing))
    return thing;
  let i = thing.length;
  if (!isNumber(i))
    return null;
  let arr = new Array(i);
  for (; i-- > 0; )
    arr[i] = thing[i];
  return arr;
}, isTypedArray = ((TypedArray) => (thing) => TypedArray && thing instanceof TypedArray)(typeof Uint8Array < "u" && getPrototypeOf(Uint8Array)), forEachEntry = (obj, fn) => {
  let iterator = (obj && obj[Symbol.iterator]).call(obj), result;
  for (; (result = iterator.next()) && !result.done; ) {
    let pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}, matchAll = (regExp, str) => {
  let matches, arr = [];
  for (; (matches = regExp.exec(str)) !== null; )
    arr.push(matches);
  return arr;
}, isHTMLForm = kindOfTest("HTMLFormElement"), toCamelCase = (str) => str.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(m, p1, p2) {
    return p1.toUpperCase() + p2;
  }
), hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype), isRegExp = kindOfTest("RegExp"), reduceDescriptors = (obj, reducer) => {
  let descriptors2 = Object.getOwnPropertyDescriptors(obj), reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    reducer(descriptor, name, obj) !== !1 && (reducedDescriptors[name] = descriptor);
  }), Object.defineProperties(obj, reducedDescriptors);
}, freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1)
      return !1;
    let value = obj[name];
    if (!!isFunction(value)) {
      if (descriptor.enumerable = !1, "writable" in descriptor) {
        descriptor.writable = !1;
        return;
      }
      descriptor.set || (descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      });
    }
  });
}, toObjectSet = (arrayOrString, delimiter) => {
  let obj = {}, define = (arr) => {
    arr.forEach((value) => {
      obj[value] = !0;
    });
  };
  return isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter)), obj;
}, noop = () => {
}, toFiniteNumber = (value, defaultValue2) => (value = +value, Number.isFinite(value) ? value : defaultValue2), toJSONObject = (obj) => {
  let stack = new Array(10), visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0)
        return;
      if (!("toJSON" in source)) {
        stack[i] = source;
        let target = isArray(source) ? [] : {};
        return forEach(source, (value, key) => {
          let reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        }), stack[i] = void 0, target;
      }
    }
    return source;
  };
  return visit(obj, 0);
}, utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  toJSONObject
};

// ../../node_modules/axios/lib/core/AxiosError.js
function AxiosError(message, code, config2, request, response) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = message, this.name = "AxiosError", code && (this.code = code), config2 && (this.config = config2), request && (this.request = request), response && (this.response = response);
}
utils_default.inherits(AxiosError, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: utils_default.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError.prototype, descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: !0 });
AxiosError.from = (error, code, config2, request, response, customProps) => {
  let axiosError = Object.create(prototype);
  return utils_default.toFlatObject(error, axiosError, function(obj) {
    return obj !== Error.prototype;
  }, (prop) => prop !== "isAxiosError"), AxiosError.call(axiosError, error.message, code, config2, request, response), axiosError.cause = error, axiosError.name = error.name, customProps && Object.assign(axiosError, customProps), axiosError;
};
var AxiosError_default = AxiosError;

// ../../node_modules/axios/lib/env/classes/FormData.js
var import_form_data = __toESM(require("form-data"), 1), FormData_default = import_form_data.default;

// ../../node_modules/axios/lib/helpers/toFormData.js
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  return path ? path.concat(key).map(function(token, i) {
    return token = removeBrackets(token), !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "") : key;
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function(prop) {
  return /^is[A-Z]/.test(prop);
});
function isSpecCompliant(thing) {
  return thing && utils_default.isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator];
}
function toFormData(obj, formData, options) {
  if (!utils_default.isObject(obj))
    throw new TypeError("target must be an object");
  formData = formData || new (FormData_default || FormData)(), options = utils_default.toFlatObject(options, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(option, source) {
    return !utils_default.isUndefined(source[option]);
  });
  let metaTokens = options.metaTokens, visitor = options.visitor || defaultVisitor, dots = options.dots, indexes = options.indexes, useBlob = (options.Blob || typeof Blob < "u" && Blob) && isSpecCompliant(formData);
  if (!utils_default.isFunction(visitor))
    throw new TypeError("visitor must be a function");
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils_default.isDate(value))
      return value.toISOString();
    if (!useBlob && utils_default.isBlob(value))
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    return utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value) ? useBlob && typeof Blob == "function" ? new Blob([value]) : Buffer.from(value) : value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value == "object") {
      if (utils_default.endsWith(key, "{}"))
        key = metaTokens ? key : key.slice(0, -2), value = JSON.stringify(value);
      else if (utils_default.isArray(value) && isFlatArray(value) || utils_default.isFileList(value) || utils_default.endsWith(key, "[]") && (arr = utils_default.toArray(value)))
        return key = removeBrackets(key), arr.forEach(function(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(
            indexes === !0 ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        }), !1;
    }
    return isVisitable(value) ? !0 : (formData.append(renderKey(path, key, dots), convertValue(value)), !1);
  }
  let stack = [], exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (!utils_default.isUndefined(value)) {
      if (stack.indexOf(value) !== -1)
        throw Error("Circular reference detected in " + path.join("."));
      stack.push(value), utils_default.forEach(value, function(el, key) {
        (!(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        )) === !0 && build(el, path ? path.concat(key) : [key]);
      }), stack.pop();
    }
  }
  if (!utils_default.isObject(obj))
    throw new TypeError("data must be an object");
  return build(obj), formData;
}
var toFormData_default = toFormData;

// ../../node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode(str) {
  let charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [], params && toFormData_default(params, this, options);
}
var prototype2 = AxiosURLSearchParams.prototype;
prototype2.append = function(name, value) {
  this._pairs.push([name, value]);
};
prototype2.toString = function(encoder) {
  let _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// ../../node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url2, params, options) {
  if (!params)
    return url2;
  let _encode = options && options.encode || encode2, serializeFn = options && options.serialize, serializedParams;
  if (serializeFn ? serializedParams = serializeFn(params, options) : serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode), serializedParams) {
    let hashmarkIndex = url2.indexOf("#");
    hashmarkIndex !== -1 && (url2 = url2.slice(0, hashmarkIndex)), url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url2;
}

// ../../node_modules/axios/lib/core/InterceptorManager.js
var InterceptorManager = class {
  constructor() {
    this.handlers = [];
  }
  use(fulfilled, rejected, options) {
    return this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : !1,
      runWhen: options ? options.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(id) {
    this.handlers[id] && (this.handlers[id] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(fn) {
    utils_default.forEach(this.handlers, function(h) {
      h !== null && fn(h);
    });
  }
}, InterceptorManager_default = InterceptorManager;

// ../../node_modules/axios/lib/defaults/transitional.js
var transitional_default = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
};

// ../../node_modules/axios/lib/platform/node/classes/URLSearchParams.js
var import_url = __toESM(require("url"), 1), URLSearchParams_default = import_url.default.URLSearchParams;

// ../../node_modules/axios/lib/platform/node/classes/FormData.js
var import_form_data2 = __toESM(require("form-data"), 1), FormData_default2 = import_form_data2.default;

// ../../node_modules/axios/lib/platform/node/index.js
var node_default = {
  isNode: !0,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default2,
    Blob: typeof Blob < "u" && Blob || null
  },
  protocols: ["http", "https", "file", "data"]
};

// ../../node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new node_default.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      return node_default.isNode && utils_default.isBuffer(value) ? (this.append(key, value.toString("base64")), !1) : helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

// ../../node_modules/axios/lib/helpers/formDataToJSON.js
function parsePropPath(name) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => match[0] === "[]" ? "" : match[1] || match[0]);
}
function arrayToObject(arr) {
  let obj = {}, keys = Object.keys(arr), i, len = keys.length, key;
  for (i = 0; i < len; i++)
    key = keys[i], obj[key] = arr[key];
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++], isNumericKey = Number.isFinite(+name), isLast = index >= path.length;
    return name = !name && utils_default.isArray(target) ? target.length : name, isLast ? (utils_default.hasOwnProp(target, name) ? target[name] = [target[name], value] : target[name] = value, !isNumericKey) : ((!target[name] || !utils_default.isObject(target[name])) && (target[name] = []), buildPath(path, value, target[name], index) && utils_default.isArray(target[name]) && (target[name] = arrayToObject(target[name])), !isNumericKey);
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    let obj = {};
    return utils_default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    }), obj;
  }
  return null;
}
var formDataToJSON_default = formDataToJSON;

// ../../node_modules/axios/lib/defaults/index.js
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": void 0
};
function stringifySafely(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue))
    try {
      return (parser || JSON.parse)(rawValue), utils_default.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError")
        throw e;
    }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitional_default,
  adapter: ["xhr", "http"],
  transformRequest: [function(data, headers2) {
    let contentType = headers2.getContentType() || "", hasJSONContentType = contentType.indexOf("application/json") > -1, isObjectPayload = utils_default.isObject(data);
    if (isObjectPayload && utils_default.isHTMLForm(data) && (data = new FormData(data)), utils_default.isFormData(data))
      return hasJSONContentType && hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
    if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data))
      return data;
    if (utils_default.isArrayBufferView(data))
      return data.buffer;
    if (utils_default.isURLSearchParams(data))
      return headers2.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), data.toString();
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1)
        return toURLEncodedForm(data, this.formSerializer).toString();
      if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        let _FormData = this.env && this.env.FormData;
        return toFormData_default(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    return isObjectPayload || hasJSONContentType ? (headers2.setContentType("application/json", !1), stringifySafely(data)) : data;
  }],
  transformResponse: [function(data) {
    let transitional2 = this.transitional || defaults.transitional, forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing, JSONRequested = this.responseType === "json";
    if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      let strictJSONParsing = !(transitional2 && transitional2.silentJSONParsing) && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing)
          throw e.name === "SyntaxError" ? AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response) : e;
      }
    }
    return data;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: node_default.classes.FormData,
    Blob: node_default.classes.Blob
  },
  validateStatus: function(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
utils_default.forEach(["delete", "get", "head"], function(method) {
  defaults.headers[method] = {};
});
utils_default.forEach(["post", "put", "patch"], function(method) {
  defaults.headers[method] = utils_default.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_default = defaults;

// ../../node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), parseHeaders_default = (rawHeaders) => {
  let parsed = {}, key, val, i;
  return rawHeaders && rawHeaders.split(`
`).forEach(function(line) {
    i = line.indexOf(":"), key = line.substring(0, i).trim().toLowerCase(), val = line.substring(i + 1).trim(), !(!key || parsed[key] && ignoreDuplicateOf[key]) && (key === "set-cookie" ? parsed[key] ? parsed[key].push(val) : parsed[key] = [val] : parsed[key] = parsed[key] ? parsed[key] + ", " + val : val);
  }), parsed;
};

// ../../node_modules/axios/lib/core/AxiosHeaders.js
var $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  return value === !1 || value == null ? value : utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  let tokens = /* @__PURE__ */ Object.create(null), tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, match;
  for (; match = tokensRE.exec(str); )
    tokens[match[1]] = match[2];
  return tokens;
}
function isValidHeaderName(str) {
  return /^[-_a-zA-Z]+$/.test(str.trim());
}
function matchHeaderValue(context, value, header, filter2) {
  if (utils_default.isFunction(filter2))
    return filter2.call(this, value, header);
  if (!!utils_default.isString(value)) {
    if (utils_default.isString(filter2))
      return value.indexOf(filter2) !== -1;
    if (utils_default.isRegExp(filter2))
      return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => char.toUpperCase() + str);
}
function buildAccessors(obj, header) {
  let accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: !0
    });
  });
}
var AxiosHeaders = class {
  constructor(headers2) {
    headers2 && this.set(headers2);
  }
  set(header, valueOrRewrite, rewrite) {
    let self2 = this;
    function setHeader(_value, _header, _rewrite) {
      let lHeader = normalizeHeader(_header);
      if (!lHeader)
        throw new Error("header name must be a non-empty string");
      let key = utils_default.findKey(self2, lHeader);
      (!key || self2[key] === void 0 || _rewrite === !0 || _rewrite === void 0 && self2[key] !== !1) && (self2[key || _header] = normalizeValue(_value));
    }
    let setHeaders = (headers2, _rewrite) => utils_default.forEach(headers2, (_value, _header) => setHeader(_value, _header, _rewrite));
    return utils_default.isPlainObject(header) || header instanceof this.constructor ? setHeaders(header, valueOrRewrite) : utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header) ? setHeaders(parseHeaders_default(header), valueOrRewrite) : header != null && setHeader(valueOrRewrite, header, rewrite), this;
  }
  get(header, parser) {
    if (header = normalizeHeader(header), header) {
      let key = utils_default.findKey(this, header);
      if (key) {
        let value = this[key];
        if (!parser)
          return value;
        if (parser === !0)
          return parseTokens(value);
        if (utils_default.isFunction(parser))
          return parser.call(this, value, key);
        if (utils_default.isRegExp(parser))
          return parser.exec(value);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    if (header = normalizeHeader(header), header) {
      let key = utils_default.findKey(this, header);
      return !!(key && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return !1;
  }
  delete(header, matcher) {
    let self2 = this, deleted = !1;
    function deleteHeader(_header) {
      if (_header = normalizeHeader(_header), _header) {
        let key = utils_default.findKey(self2, _header);
        key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher)) && (delete self2[key], deleted = !0);
      }
    }
    return utils_default.isArray(header) ? header.forEach(deleteHeader) : deleteHeader(header), deleted;
  }
  clear() {
    return Object.keys(this).forEach(this.delete.bind(this));
  }
  normalize(format) {
    let self2 = this, headers2 = {};
    return utils_default.forEach(this, (value, header) => {
      let key = utils_default.findKey(headers2, header);
      if (key) {
        self2[key] = normalizeValue(value), delete self2[header];
        return;
      }
      let normalized = format ? formatHeader(header) : String(header).trim();
      normalized !== header && delete self2[header], self2[normalized] = normalizeValue(value), headers2[normalized] = !0;
    }), this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    let obj = /* @__PURE__ */ Object.create(null);
    return utils_default.forEach(this, (value, header) => {
      value != null && value !== !1 && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    }), obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    let computed = new this(first);
    return targets.forEach((target) => computed.set(target)), computed;
  }
  static accessor(header) {
    let accessors = (this[$internals] = this[$internals] = {
      accessors: {}
    }).accessors, prototype3 = this.prototype;
    function defineAccessor(_header) {
      let lHeader = normalizeHeader(_header);
      accessors[lHeader] || (buildAccessors(prototype3, _header), accessors[lHeader] = !0);
    }
    return utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header), this;
  }
};
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
utils_default.freezeMethods(AxiosHeaders.prototype);
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// ../../node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  let config2 = this || defaults_default, context = response || config2, headers2 = AxiosHeaders_default.from(context.headers), data = context.data;
  return utils_default.forEach(fns, function(fn) {
    data = fn.call(config2, data, headers2.normalize(), response ? response.status : void 0);
  }), headers2.normalize(), data;
}

// ../../node_modules/axios/lib/cancel/isCancel.js
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

// ../../node_modules/axios/lib/cancel/CanceledError.js
function CanceledError(message, config2, request) {
  AxiosError_default.call(this, message ?? "canceled", AxiosError_default.ERR_CANCELED, config2, request), this.name = "CanceledError";
}
utils_default.inherits(CanceledError, AxiosError_default, {
  __CANCEL__: !0
});
var CanceledError_default = CanceledError;

// ../../node_modules/axios/lib/core/settle.js
function settle(resolve, reject, response) {
  let validateStatus2 = response.config.validateStatus;
  !response.status || !validateStatus2 || validateStatus2(response.status) ? resolve(response) : reject(new AxiosError_default(
    "Request failed with status code " + response.status,
    [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
    response.config,
    response.request,
    response
  ));
}

// ../../node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url2) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
}

// ../../node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

// ../../node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  return baseURL && !isAbsoluteURL(requestedURL) ? combineURLs(baseURL, requestedURL) : requestedURL;
}

// ../../node_modules/axios/lib/adapters/http.js
var import_proxy_from_env = require("proxy-from-env"), import_http3 = __toESM(require("http"), 1), import_https2 = __toESM(require("https"), 1), import_follow_redirects = __toESM(require("follow-redirects"), 1), import_zlib = __toESM(require("zlib"), 1);

// ../../node_modules/axios/lib/env/data.js
var VERSION = "1.2.3";

// ../../node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url2) {
  let match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url2);
  return match && match[1] || "";
}

// ../../node_modules/axios/lib/helpers/fromDataURI.js
var DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function fromDataURI(uri, asBlob, options) {
  let _Blob = options && options.Blob || node_default.classes.Blob, protocol = parseProtocol(uri);
  if (asBlob === void 0 && _Blob && (asBlob = !0), protocol === "data") {
    uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
    let match = DATA_URL_PATTERN.exec(uri);
    if (!match)
      throw new AxiosError_default("Invalid URL", AxiosError_default.ERR_INVALID_URL);
    let mime = match[1], isBase64 = match[2], body = match[3], buffer = Buffer.from(decodeURIComponent(body), isBase64 ? "base64" : "utf8");
    if (asBlob) {
      if (!_Blob)
        throw new AxiosError_default("Blob is not supported", AxiosError_default.ERR_NOT_SUPPORT);
      return new _Blob([buffer], { type: mime });
    }
    return buffer;
  }
  throw new AxiosError_default("Unsupported protocol " + protocol, AxiosError_default.ERR_NOT_SUPPORT);
}

// ../../node_modules/axios/lib/adapters/http.js
var import_stream2 = __toESM(require("stream"), 1);

// ../../node_modules/axios/lib/helpers/AxiosTransformStream.js
var import_stream = __toESM(require("stream"), 1);

// ../../node_modules/axios/lib/helpers/throttle.js
function throttle(fn, freq) {
  let timestamp = 0, threshold = 1e3 / freq, timer = null;
  return function(force, args) {
    let now = Date.now();
    if (force || now - timestamp > threshold)
      return timer && (clearTimeout(timer), timer = null), timestamp = now, fn.apply(null, args);
    timer || (timer = setTimeout(() => (timer = null, timestamp = Date.now(), fn.apply(null, args)), threshold - (now - timestamp)));
  };
}
var throttle_default = throttle;

// ../../node_modules/axios/lib/helpers/speedometer.js
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  let bytes = new Array(samplesCount), timestamps = new Array(samplesCount), head = 0, tail = 0, firstSampleTS;
  return min = min !== void 0 ? min : 1e3, function(chunkLength) {
    let now = Date.now(), startedAt = timestamps[tail];
    firstSampleTS || (firstSampleTS = now), bytes[head] = chunkLength, timestamps[head] = now;
    let i = tail, bytesCount = 0;
    for (; i !== head; )
      bytesCount += bytes[i++], i = i % samplesCount;
    if (head = (head + 1) % samplesCount, head === tail && (tail = (tail + 1) % samplesCount), now - firstSampleTS < min)
      return;
    let passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
var speedometer_default = speedometer;

// ../../node_modules/axios/lib/helpers/AxiosTransformStream.js
var kInternals = Symbol("internals"), AxiosTransformStream = class extends import_stream.default.Transform {
  constructor(options) {
    options = utils_default.toFlatObject(options, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (prop, source) => !utils_default.isUndefined(source[prop])), super({
      readableHighWaterMark: options.chunkSize
    });
    let self2 = this, internals = this[kInternals] = {
      length: options.length,
      timeWindow: options.timeWindow,
      ticksRate: options.ticksRate,
      chunkSize: options.chunkSize,
      maxRate: options.maxRate,
      minChunkSize: options.minChunkSize,
      bytesSeen: 0,
      isCaptured: !1,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    }, _speedometer = speedometer_default(internals.ticksRate * options.samplesCount, internals.timeWindow);
    this.on("newListener", (event) => {
      event === "progress" && (internals.isCaptured || (internals.isCaptured = !0));
    });
    let bytesNotified = 0;
    internals.updateProgress = throttle_default(function() {
      let totalBytes = internals.length, bytesTransferred = internals.bytesSeen, progressBytes = bytesTransferred - bytesNotified;
      if (!progressBytes || self2.destroyed)
        return;
      let rate = _speedometer(progressBytes);
      bytesNotified = bytesTransferred, process.nextTick(() => {
        self2.emit("progress", {
          loaded: bytesTransferred,
          total: totalBytes,
          progress: totalBytes ? bytesTransferred / totalBytes : void 0,
          bytes: progressBytes,
          rate: rate || void 0,
          estimated: rate && totalBytes && bytesTransferred <= totalBytes ? (totalBytes - bytesTransferred) / rate : void 0
        });
      });
    }, internals.ticksRate);
    let onFinish = () => {
      internals.updateProgress(!0);
    };
    this.once("end", onFinish), this.once("error", onFinish);
  }
  _read(size) {
    let internals = this[kInternals];
    return internals.onReadCallback && internals.onReadCallback(), super._read(size);
  }
  _transform(chunk, encoding, callback) {
    let self2 = this, internals = this[kInternals], maxRate = internals.maxRate, readableHighWaterMark = this.readableHighWaterMark, timeWindow = internals.timeWindow, divider = 1e3 / timeWindow, bytesThreshold = maxRate / divider, minChunkSize = internals.minChunkSize !== !1 ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;
    function pushChunk(_chunk, _callback) {
      let bytes = Buffer.byteLength(_chunk);
      internals.bytesSeen += bytes, internals.bytes += bytes, internals.isCaptured && internals.updateProgress(), self2.push(_chunk) ? process.nextTick(_callback) : internals.onReadCallback = () => {
        internals.onReadCallback = null, process.nextTick(_callback);
      };
    }
    let transformChunk = (_chunk, _callback) => {
      let chunkSize = Buffer.byteLength(_chunk), chunkRemainder = null, maxChunkSize = readableHighWaterMark, bytesLeft, passed = 0;
      if (maxRate) {
        let now = Date.now();
        (!internals.ts || (passed = now - internals.ts) >= timeWindow) && (internals.ts = now, bytesLeft = bytesThreshold - internals.bytes, internals.bytes = bytesLeft < 0 ? -bytesLeft : 0, passed = 0), bytesLeft = bytesThreshold - internals.bytes;
      }
      if (maxRate) {
        if (bytesLeft <= 0)
          return setTimeout(() => {
            _callback(null, _chunk);
          }, timeWindow - passed);
        bytesLeft < maxChunkSize && (maxChunkSize = bytesLeft);
      }
      maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize && (chunkRemainder = _chunk.subarray(maxChunkSize), _chunk = _chunk.subarray(0, maxChunkSize)), pushChunk(_chunk, chunkRemainder ? () => {
        process.nextTick(_callback, null, chunkRemainder);
      } : _callback);
    };
    transformChunk(chunk, function transformNextChunk(err, _chunk) {
      if (err)
        return callback(err);
      _chunk ? transformChunk(_chunk, transformNextChunk) : callback(null);
    });
  }
  setLength(length) {
    return this[kInternals].length = +length, this;
  }
}, AxiosTransformStream_default = AxiosTransformStream;

// ../../node_modules/axios/lib/adapters/http.js
var import_events = __toESM(require("events"), 1), zlibOptions = {
  flush: import_zlib.default.constants.Z_SYNC_FLUSH,
  finishFlush: import_zlib.default.constants.Z_SYNC_FLUSH
}, brotliOptions = {
  flush: import_zlib.default.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: import_zlib.default.constants.BROTLI_OPERATION_FLUSH
}, isBrotliSupported = utils_default.isFunction(import_zlib.default.createBrotliDecompress), { http: httpFollow, https: httpsFollow } = import_follow_redirects.default, isHttps = /https:?/, supportedProtocols = node_default.protocols.map((protocol) => protocol + ":");
function dispatchBeforeRedirect(options) {
  options.beforeRedirects.proxy && options.beforeRedirects.proxy(options), options.beforeRedirects.config && options.beforeRedirects.config(options);
}
function setProxy(options, configProxy, location) {
  let proxy = configProxy;
  if (!proxy && proxy !== !1) {
    let proxyUrl = (0, import_proxy_from_env.getProxyForUrl)(location);
    proxyUrl && (proxy = new URL(proxyUrl));
  }
  if (proxy) {
    if (proxy.username && (proxy.auth = (proxy.username || "") + ":" + (proxy.password || "")), proxy.auth) {
      (proxy.auth.username || proxy.auth.password) && (proxy.auth = (proxy.auth.username || "") + ":" + (proxy.auth.password || ""));
      let base64 = Buffer.from(proxy.auth, "utf8").toString("base64");
      options.headers["Proxy-Authorization"] = "Basic " + base64;
    }
    options.headers.host = options.hostname + (options.port ? ":" + options.port : "");
    let proxyHost = proxy.hostname || proxy.host;
    options.hostname = proxyHost, options.host = proxyHost, options.port = proxy.port, options.path = location, proxy.protocol && (options.protocol = proxy.protocol.includes(":") ? proxy.protocol : `${proxy.protocol}:`);
  }
  options.beforeRedirects.proxy = function(redirectOptions) {
    setProxy(redirectOptions, configProxy, redirectOptions.href);
  };
}
var isHttpAdapterSupported = typeof process < "u" && utils_default.kindOf(process) === "process", http_default = isHttpAdapterSupported && function(config2) {
  return new Promise(function(resolvePromise, rejectPromise) {
    let data = config2.data, responseType = config2.responseType, responseEncoding = config2.responseEncoding, method = config2.method.toUpperCase(), isFinished, isDone, rejected = !1, req, emitter = new import_events.default();
    function onFinished() {
      isFinished || (isFinished = !0, config2.cancelToken && config2.cancelToken.unsubscribe(abort), config2.signal && config2.signal.removeEventListener("abort", abort), emitter.removeAllListeners());
    }
    function done(value, isRejected) {
      isDone || (isDone = !0, isRejected && (rejected = !0, onFinished()), isRejected ? rejectPromise(value) : resolvePromise(value));
    }
    let resolve = function(value) {
      done(value);
    }, reject = function(value) {
      done(value, !0);
    };
    function abort(reason) {
      emitter.emit("abort", !reason || reason.type ? new CanceledError_default(null, config2, req) : reason);
    }
    emitter.once("abort", reject), (config2.cancelToken || config2.signal) && (config2.cancelToken && config2.cancelToken.subscribe(abort), config2.signal && (config2.signal.aborted ? abort() : config2.signal.addEventListener("abort", abort)));
    let fullPath = buildFullPath(config2.baseURL, config2.url), parsed = new URL(fullPath), protocol = parsed.protocol || supportedProtocols[0];
    if (protocol === "data:") {
      let convertedData;
      if (method !== "GET")
        return settle(resolve, reject, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config: config2
        });
      try {
        convertedData = fromDataURI(config2.url, responseType === "blob", {
          Blob: config2.env && config2.env.Blob
        });
      } catch (err) {
        throw AxiosError_default.from(err, AxiosError_default.ERR_BAD_REQUEST, config2);
      }
      return responseType === "text" ? (convertedData = convertedData.toString(responseEncoding), (!responseEncoding || responseEncoding === "utf8") && (data = utils_default.stripBOM(convertedData))) : responseType === "stream" && (convertedData = import_stream2.default.Readable.from(convertedData)), settle(resolve, reject, {
        data: convertedData,
        status: 200,
        statusText: "OK",
        headers: new AxiosHeaders_default(),
        config: config2
      });
    }
    if (supportedProtocols.indexOf(protocol) === -1)
      return reject(new AxiosError_default(
        "Unsupported protocol " + protocol,
        AxiosError_default.ERR_BAD_REQUEST,
        config2
      ));
    let headers2 = AxiosHeaders_default.from(config2.headers).normalize();
    headers2.set("User-Agent", "axios/" + VERSION, !1);
    let onDownloadProgress = config2.onDownloadProgress, onUploadProgress = config2.onUploadProgress, maxRate = config2.maxRate, maxUploadRate, maxDownloadRate;
    if (utils_default.isFormData(data) && utils_default.isFunction(data.getHeaders))
      headers2.set(data.getHeaders());
    else if (data && !utils_default.isStream(data)) {
      if (!Buffer.isBuffer(data))
        if (utils_default.isArrayBuffer(data))
          data = Buffer.from(new Uint8Array(data));
        else if (utils_default.isString(data))
          data = Buffer.from(data, "utf-8");
        else
          return reject(new AxiosError_default(
            "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
            AxiosError_default.ERR_BAD_REQUEST,
            config2
          ));
      if (headers2.set("Content-Length", data.length, !1), config2.maxBodyLength > -1 && data.length > config2.maxBodyLength)
        return reject(new AxiosError_default(
          "Request body larger than maxBodyLength limit",
          AxiosError_default.ERR_BAD_REQUEST,
          config2
        ));
    }
    let contentLength = utils_default.toFiniteNumber(headers2.getContentLength());
    utils_default.isArray(maxRate) ? (maxUploadRate = maxRate[0], maxDownloadRate = maxRate[1]) : maxUploadRate = maxDownloadRate = maxRate, data && (onUploadProgress || maxUploadRate) && (utils_default.isStream(data) || (data = import_stream2.default.Readable.from(data, { objectMode: !1 })), data = import_stream2.default.pipeline([data, new AxiosTransformStream_default({
      length: contentLength,
      maxRate: utils_default.toFiniteNumber(maxUploadRate)
    })], utils_default.noop), onUploadProgress && data.on("progress", (progress) => {
      onUploadProgress(Object.assign(progress, {
        upload: !0
      }));
    }));
    let auth;
    if (config2.auth) {
      let username = config2.auth.username || "", password = config2.auth.password || "";
      auth = username + ":" + password;
    }
    if (!auth && parsed.username) {
      let urlUsername = parsed.username, urlPassword = parsed.password;
      auth = urlUsername + ":" + urlPassword;
    }
    auth && headers2.delete("authorization");
    let path;
    try {
      path = buildURL(
        parsed.pathname + parsed.search,
        config2.params,
        config2.paramsSerializer
      ).replace(/^\?/, "");
    } catch (err) {
      let customErr = new Error(err.message);
      return customErr.config = config2, customErr.url = config2.url, customErr.exists = !0, reject(customErr);
    }
    headers2.set(
      "Accept-Encoding",
      "gzip, compress, deflate" + (isBrotliSupported ? ", br" : ""),
      !1
    );
    let options = {
      path,
      method,
      headers: headers2.toJSON(),
      agents: { http: config2.httpAgent, https: config2.httpsAgent },
      auth,
      protocol,
      beforeRedirect: dispatchBeforeRedirect,
      beforeRedirects: {}
    };
    config2.socketPath ? options.socketPath = config2.socketPath : (options.hostname = parsed.hostname, options.port = parsed.port, setProxy(options, config2.proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path));
    let transport, isHttpsRequest = isHttps.test(options.protocol);
    if (options.agent = isHttpsRequest ? config2.httpsAgent : config2.httpAgent, config2.transport ? transport = config2.transport : config2.maxRedirects === 0 ? transport = isHttpsRequest ? import_https2.default : import_http3.default : (config2.maxRedirects && (options.maxRedirects = config2.maxRedirects), config2.beforeRedirect && (options.beforeRedirects.config = config2.beforeRedirect), transport = isHttpsRequest ? httpsFollow : httpFollow), config2.maxBodyLength > -1 ? options.maxBodyLength = config2.maxBodyLength : options.maxBodyLength = 1 / 0, config2.insecureHTTPParser && (options.insecureHTTPParser = config2.insecureHTTPParser), req = transport.request(options, function(res) {
      if (req.destroyed)
        return;
      let streams = [res], responseLength = +res.headers["content-length"];
      if (onDownloadProgress) {
        let transformStream = new AxiosTransformStream_default({
          length: utils_default.toFiniteNumber(responseLength),
          maxRate: utils_default.toFiniteNumber(maxDownloadRate)
        });
        onDownloadProgress && transformStream.on("progress", (progress) => {
          onDownloadProgress(Object.assign(progress, {
            download: !0
          }));
        }), streams.push(transformStream);
      }
      let responseStream = res, lastRequest = res.req || req;
      if (config2.decompress !== !1 && res.headers["content-encoding"])
        switch ((method === "HEAD" || res.statusCode === 204) && delete res.headers["content-encoding"], res.headers["content-encoding"]) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
          case "deflate":
            streams.push(import_zlib.default.createUnzip(zlibOptions)), delete res.headers["content-encoding"];
            break;
          case "br":
            isBrotliSupported && (streams.push(import_zlib.default.createBrotliDecompress(brotliOptions)), delete res.headers["content-encoding"]);
        }
      responseStream = streams.length > 1 ? import_stream2.default.pipeline(streams, utils_default.noop) : streams[0];
      let offListeners = import_stream2.default.finished(responseStream, () => {
        offListeners(), onFinished();
      }), response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: new AxiosHeaders_default(res.headers),
        config: config2,
        request: lastRequest
      };
      if (responseType === "stream")
        response.data = responseStream, settle(resolve, reject, response);
      else {
        let responseBuffer = [], totalResponseBytes = 0;
        responseStream.on("data", function(chunk) {
          responseBuffer.push(chunk), totalResponseBytes += chunk.length, config2.maxContentLength > -1 && totalResponseBytes > config2.maxContentLength && (rejected = !0, responseStream.destroy(), reject(new AxiosError_default(
            "maxContentLength size of " + config2.maxContentLength + " exceeded",
            AxiosError_default.ERR_BAD_RESPONSE,
            config2,
            lastRequest
          )));
        }), responseStream.on("aborted", function() {
          if (rejected)
            return;
          let err = new AxiosError_default(
            "maxContentLength size of " + config2.maxContentLength + " exceeded",
            AxiosError_default.ERR_BAD_RESPONSE,
            config2,
            lastRequest
          );
          responseStream.destroy(err), reject(err);
        }), responseStream.on("error", function(err) {
          req.destroyed || reject(AxiosError_default.from(err, null, config2, lastRequest));
        }), responseStream.on("end", function() {
          try {
            let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            responseType !== "arraybuffer" && (responseData = responseData.toString(responseEncoding), (!responseEncoding || responseEncoding === "utf8") && (responseData = utils_default.stripBOM(responseData))), response.data = responseData;
          } catch (err) {
            reject(AxiosError_default.from(err, null, config2, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }
      emitter.once("abort", (err) => {
        responseStream.destroyed || (responseStream.emit("error", err), responseStream.destroy());
      });
    }), emitter.once("abort", (err) => {
      reject(err), req.destroy(err);
    }), req.on("error", function(err) {
      reject(AxiosError_default.from(err, null, config2, req));
    }), req.on("socket", function(socket) {
      socket.setKeepAlive(!0, 1e3 * 60);
    }), config2.timeout) {
      let timeout = parseInt(config2.timeout, 10);
      if (isNaN(timeout)) {
        reject(new AxiosError_default(
          "error trying to parse `config.timeout` to int",
          AxiosError_default.ERR_BAD_OPTION_VALUE,
          config2,
          req
        ));
        return;
      }
      req.setTimeout(timeout, function() {
        if (isDone)
          return;
        let timeoutErrorMessage = config2.timeout ? "timeout of " + config2.timeout + "ms exceeded" : "timeout exceeded", transitional2 = config2.transitional || transitional_default;
        config2.timeoutErrorMessage && (timeoutErrorMessage = config2.timeoutErrorMessage), reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config2,
          req
        )), abort();
      });
    }
    if (utils_default.isStream(data)) {
      let ended = !1, errored = !1;
      data.on("end", () => {
        ended = !0;
      }), data.once("error", (err) => {
        errored = !0, req.destroy(err);
      }), data.on("close", () => {
        !ended && !errored && abort(new CanceledError_default("Request stream has been aborted", config2, req));
      }), data.pipe(req);
    } else
      req.end(data);
  });
};

// ../../node_modules/axios/lib/helpers/cookies.js
var cookies_default = node_default.isStandardBrowserEnv ? function() {
  return {
    write: function(name, value, expires, path, domain, secure) {
      let cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value)), utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString()), utils_default.isString(path) && cookie.push("path=" + path), utils_default.isString(domain) && cookie.push("domain=" + domain), secure === !0 && cookie.push("secure"), document.cookie = cookie.join("; ");
    },
    read: function(name) {
      let match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function() {
  return {
    write: function() {
    },
    read: function() {
      return null;
    },
    remove: function() {
    }
  };
}();

// ../../node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default = node_default.isStandardBrowserEnv ? function() {
  let msie = /(msie|trident)/i.test(navigator.userAgent), urlParsingNode = document.createElement("a"), originURL;
  function resolveURL(url2) {
    let href = url2;
    return msie && (urlParsingNode.setAttribute("href", href), href = urlParsingNode.href), urlParsingNode.setAttribute("href", href), {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  return originURL = resolveURL(window.location.href), function(requestURL) {
    let parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function() {
  return function() {
    return !0;
  };
}();

// ../../node_modules/axios/lib/adapters/xhr.js
function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0, _speedometer = speedometer_default(50, 250);
  return (e) => {
    let loaded = e.loaded, total = e.lengthComputable ? e.total : void 0, progressBytes = loaded - bytesNotified, rate = _speedometer(progressBytes), inRange = loaded <= total;
    bytesNotified = loaded;
    let data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate || void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e
    };
    data[isDownloadStream ? "download" : "upload"] = !0, listener(data);
  };
}
var isXHRAdapterSupported = typeof XMLHttpRequest < "u", xhr_default = isXHRAdapterSupported && function(config2) {
  return new Promise(function(resolve, reject) {
    let requestData = config2.data, requestHeaders = AxiosHeaders_default.from(config2.headers).normalize(), responseType = config2.responseType, onCanceled;
    function done() {
      config2.cancelToken && config2.cancelToken.unsubscribe(onCanceled), config2.signal && config2.signal.removeEventListener("abort", onCanceled);
    }
    utils_default.isFormData(requestData) && (node_default.isStandardBrowserEnv || node_default.isStandardBrowserWebWorkerEnv) && requestHeaders.setContentType(!1);
    let request = new XMLHttpRequest();
    if (config2.auth) {
      let username = config2.auth.username || "", password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
      requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
    }
    let fullPath = buildFullPath(config2.baseURL, config2.url);
    request.open(config2.method.toUpperCase(), buildURL(fullPath, config2.params, config2.paramsSerializer), !0), request.timeout = config2.timeout;
    function onloadend() {
      if (!request)
        return;
      let responseHeaders = AxiosHeaders_default.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      ), response = {
        data: !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config2,
        request
      };
      settle(function(value) {
        resolve(value), done();
      }, function(err) {
        reject(err), done();
      }, response), request = null;
    }
    if ("onloadend" in request ? request.onloadend = onloadend : request.onreadystatechange = function() {
      !request || request.readyState !== 4 || request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0) || setTimeout(onloadend);
    }, request.onabort = function() {
      !request || (reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config2, request)), request = null);
    }, request.onerror = function() {
      reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config2, request)), request = null;
    }, request.ontimeout = function() {
      let timeoutErrorMessage = config2.timeout ? "timeout of " + config2.timeout + "ms exceeded" : "timeout exceeded", transitional2 = config2.transitional || transitional_default;
      config2.timeoutErrorMessage && (timeoutErrorMessage = config2.timeoutErrorMessage), reject(new AxiosError_default(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
        config2,
        request
      )), request = null;
    }, node_default.isStandardBrowserEnv) {
      let xsrfValue = (config2.withCredentials || isURLSameOrigin_default(fullPath)) && config2.xsrfCookieName && cookies_default.read(config2.xsrfCookieName);
      xsrfValue && requestHeaders.set(config2.xsrfHeaderName, xsrfValue);
    }
    requestData === void 0 && requestHeaders.setContentType(null), "setRequestHeader" in request && utils_default.forEach(requestHeaders.toJSON(), function(val, key) {
      request.setRequestHeader(key, val);
    }), utils_default.isUndefined(config2.withCredentials) || (request.withCredentials = !!config2.withCredentials), responseType && responseType !== "json" && (request.responseType = config2.responseType), typeof config2.onDownloadProgress == "function" && request.addEventListener("progress", progressEventReducer(config2.onDownloadProgress, !0)), typeof config2.onUploadProgress == "function" && request.upload && request.upload.addEventListener("progress", progressEventReducer(config2.onUploadProgress)), (config2.cancelToken || config2.signal) && (onCanceled = (cancel) => {
      !request || (reject(!cancel || cancel.type ? new CanceledError_default(null, config2, request) : cancel), request.abort(), request = null);
    }, config2.cancelToken && config2.cancelToken.subscribe(onCanceled), config2.signal && (config2.signal.aborted ? onCanceled() : config2.signal.addEventListener("abort", onCanceled)));
    let protocol = parseProtocol(fullPath);
    if (protocol && node_default.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config2));
      return;
    }
    request.send(requestData || null);
  });
};

// ../../node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: http_default,
  xhr: xhr_default
};
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
var adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    let { length } = adapters, nameOrAdapter, adapter;
    for (let i = 0; i < length && (nameOrAdapter = adapters[i], !(adapter = utils_default.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)); i++)
      ;
    if (!adapter)
      throw adapter === !1 ? new AxiosError_default(
        `Adapter ${nameOrAdapter} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        utils_default.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
      );
    if (!utils_default.isFunction(adapter))
      throw new TypeError("adapter is not a function");
    return adapter;
  },
  adapters: knownAdapters
};

// ../../node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config2) {
  if (config2.cancelToken && config2.cancelToken.throwIfRequested(), config2.signal && config2.signal.aborted)
    throw new CanceledError_default(null, config2);
}
function dispatchRequest(config2) {
  return throwIfCancellationRequested(config2), config2.headers = AxiosHeaders_default.from(config2.headers), config2.data = transformData.call(
    config2,
    config2.transformRequest
  ), ["post", "put", "patch"].indexOf(config2.method) !== -1 && config2.headers.setContentType("application/x-www-form-urlencoded", !1), adapters_default.getAdapter(config2.adapter || defaults_default.adapter)(config2).then(function(response) {
    return throwIfCancellationRequested(config2), response.data = transformData.call(
      config2,
      config2.transformResponse,
      response
    ), response.headers = AxiosHeaders_default.from(response.headers), response;
  }, function(reason) {
    return isCancel(reason) || (throwIfCancellationRequested(config2), reason && reason.response && (reason.response.data = transformData.call(
      config2,
      config2.transformResponse,
      reason.response
    ), reason.response.headers = AxiosHeaders_default.from(reason.response.headers))), Promise.reject(reason);
  });
}

// ../../node_modules/axios/lib/core/mergeConfig.js
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  let config3 = {};
  function getMergedValue(target, source, caseless) {
    return utils_default.isPlainObject(target) && utils_default.isPlainObject(source) ? utils_default.merge.call({ caseless }, target, source) : utils_default.isPlainObject(source) ? utils_default.merge({}, source) : utils_default.isArray(source) ? source.slice() : source;
  }
  function mergeDeepProperties(a, b, caseless) {
    if (utils_default.isUndefined(b)) {
      if (!utils_default.isUndefined(a))
        return getMergedValue(void 0, a, caseless);
    } else
      return getMergedValue(a, b, caseless);
  }
  function valueFromConfig2(a, b) {
    if (!utils_default.isUndefined(b))
      return getMergedValue(void 0, b);
  }
  function defaultToConfig2(a, b) {
    if (utils_default.isUndefined(b)) {
      if (!utils_default.isUndefined(a))
        return getMergedValue(void 0, a);
    } else
      return getMergedValue(void 0, b);
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2)
      return getMergedValue(a, b);
    if (prop in config1)
      return getMergedValue(void 0, a);
  }
  let mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), !0)
  };
  return utils_default.forEach(Object.keys(config1).concat(Object.keys(config2)), function(prop) {
    let merge2 = mergeMap[prop] || mergeDeepProperties, configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
  }), config3;
}

// ../../node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators[type] = function(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function(validator, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator === !1)
      throw new AxiosError_default(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError_default.ERR_DEPRECATED
      );
    return version && !deprecatedWarnings[opt] && (deprecatedWarnings[opt] = !0, console.warn(
      formatMessage(
        opt,
        " has been deprecated since v" + version + " and will be removed in the near future"
      )
    )), validator ? validator(value, opt, opts) : !0;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options != "object")
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  let keys = Object.keys(options), i = keys.length;
  for (; i-- > 0; ) {
    let opt = keys[i], validator = schema[opt];
    if (validator) {
      let value = options[opt], result = value === void 0 || validator(value, opt, options);
      if (result !== !0)
        throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (allowUnknown !== !0)
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
  }
}
var validator_default = {
  assertOptions,
  validators
};

// ../../node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators, Axios = class {
  constructor(instanceConfig) {
    this.defaults = instanceConfig, this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  request(configOrUrl, config2) {
    typeof configOrUrl == "string" ? (config2 = config2 || {}, config2.url = configOrUrl) : config2 = configOrUrl || {}, config2 = mergeConfig(this.defaults, config2);
    let { transitional: transitional2, paramsSerializer, headers: headers2 } = config2;
    transitional2 !== void 0 && validator_default.assertOptions(transitional2, {
      silentJSONParsing: validators2.transitional(validators2.boolean),
      forcedJSONParsing: validators2.transitional(validators2.boolean),
      clarifyTimeoutError: validators2.transitional(validators2.boolean)
    }, !1), paramsSerializer !== void 0 && validator_default.assertOptions(paramsSerializer, {
      encode: validators2.function,
      serialize: validators2.function
    }, !0), config2.method = (config2.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders;
    contextHeaders = headers2 && utils_default.merge(
      headers2.common,
      headers2[config2.method]
    ), contextHeaders && utils_default.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers2[method];
      }
    ), config2.headers = AxiosHeaders_default.concat(contextHeaders, headers2);
    let requestInterceptorChain = [], synchronousRequestInterceptors = !0;
    this.interceptors.request.forEach(function(interceptor) {
      typeof interceptor.runWhen == "function" && interceptor.runWhen(config2) === !1 || (synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous, requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected));
    });
    let responseInterceptorChain = [];
    this.interceptors.response.forEach(function(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise, i = 0, len;
    if (!synchronousRequestInterceptors) {
      let chain = [dispatchRequest.bind(this), void 0];
      for (chain.unshift.apply(chain, requestInterceptorChain), chain.push.apply(chain, responseInterceptorChain), len = chain.length, promise = Promise.resolve(config2); i < len; )
        promise = promise.then(chain[i++], chain[i++]);
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config2;
    for (i = 0; i < len; ) {
      let onFulfilled = requestInterceptorChain[i++], onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    for (i = 0, len = responseInterceptorChain.length; i < len; )
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    return promise;
  }
  getUri(config2) {
    config2 = mergeConfig(this.defaults, config2);
    let fullPath = buildFullPath(config2.baseURL, config2.url);
    return buildURL(fullPath, config2.params, config2.paramsSerializer);
  }
};
utils_default.forEach(["delete", "get", "head", "options"], function(method) {
  Axios.prototype[method] = function(url2, config2) {
    return this.request(mergeConfig(config2 || {}, {
      method,
      url: url2,
      data: (config2 || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function(method) {
  function generateHTTPMethod(isForm) {
    return function(url2, data, config2) {
      return this.request(mergeConfig(config2 || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: url2,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod(), Axios.prototype[method + "Form"] = generateHTTPMethod(!0);
});
var Axios_default = Axios;

// ../../node_modules/axios/lib/cancel/CancelToken.js
var CancelToken = class {
  constructor(executor) {
    if (typeof executor != "function")
      throw new TypeError("executor must be a function.");
    let resolvePromise;
    this.promise = new Promise(function(resolve) {
      resolvePromise = resolve;
    });
    let token = this;
    this.promise.then((cancel) => {
      if (!token._listeners)
        return;
      let i = token._listeners.length;
      for (; i-- > 0; )
        token._listeners[i](cancel);
      token._listeners = null;
    }), this.promise.then = (onfulfilled) => {
      let _resolve, promise = new Promise((resolve) => {
        token.subscribe(resolve), _resolve = resolve;
      }).then(onfulfilled);
      return promise.cancel = function() {
        token.unsubscribe(_resolve);
      }, promise;
    }, executor(function(message, config2, request) {
      token.reason || (token.reason = new CanceledError_default(message, config2, request), resolvePromise(token.reason));
    });
  }
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(listener) : this._listeners = [listener];
  }
  unsubscribe(listener) {
    if (!this._listeners)
      return;
    let index = this._listeners.indexOf(listener);
    index !== -1 && this._listeners.splice(index, 1);
  }
  static source() {
    let cancel;
    return {
      token: new CancelToken(function(c) {
        cancel = c;
      }),
      cancel
    };
  }
}, CancelToken_default = CancelToken;

// ../../node_modules/axios/lib/helpers/spread.js
function spread(callback) {
  return function(arr) {
    return callback.apply(null, arr);
  };
}

// ../../node_modules/axios/lib/helpers/isAxiosError.js
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === !0;
}

// ../../node_modules/axios/lib/helpers/HttpStatusCode.js
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var HttpStatusCode_default = HttpStatusCode;

// ../../node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  let context = new Axios_default(defaultConfig), instance = bind(Axios_default.prototype.request, context);
  return utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: !0 }), utils_default.extend(instance, context, null, { allOwnKeys: !0 }), instance.create = function(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  }, instance;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;

// ../../node_modules/axios/index.js
var {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel: isCancel2,
  CancelToken: CancelToken2,
  VERSION: VERSION2,
  all: all2,
  Cancel,
  isAxiosError: isAxiosError2,
  spread: spread2,
  toFormData: toFormData2,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode: HttpStatusCode2,
  formToJSON,
  mergeConfig: mergeConfig2
} = axios_default;

// ../../node_modules/nordigen-node/lib/index.js
var _endpoint5, _token, NordigenClient5 = class {
  constructor({
    secretId,
    secretKey,
    baseUrl = "https://ob.nordigen.com/api/v2"
  }) {
    __privateAdd(this, _endpoint5, "token");
    __privateAdd(this, _token, null);
    this.baseUrl = baseUrl, this.secretKey = secretKey, this.secretId = secretId, this.headers = {
      accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "Nordigen-Node-v2"
    }, this.institution = new InstitutionApi({ client: this }), this.agreement = new AgreementApi({ client: this }), this.requisition = new RequisitionsApi({ client: this });
  }
  set token(token) {
    __privateSet(this, _token, token), this.headers.Authorization = `Bearer ${token}`;
  }
  get token() {
    return __privateGet(this, _token);
  }
  account(accountId) {
    return new AccountApi({ client: this, accountId });
  }
  async request({ endpoint, parameters, method = HttpMethod.GET }) {
    let url2 = new URL(`${this.baseUrl}/${endpoint}`), validParams = filterObject(parameters);
    return method === HttpMethod.GET && Object.keys(validParams).length > 0 && (url2.search = new URLSearchParams(validParams)), (await axios_default({
      method,
      url: url2,
      headers: this.headers,
      ...method !== HttpMethod.GET ? { data: JSON.stringify(parameters) } : {}
    })).data;
  }
  async generateToken() {
    let payload = {
      secret_key: this.secretKey,
      secret_id: this.secretId
    }, response = await this.request({
      endpoint: `${__privateGet(this, _endpoint5)}/new/`,
      parameters: payload,
      method: HttpMethod.POST
    });
    return this.headers.Authorization = `Bearer ${response.access}`, response;
  }
  exchangeToken({ refreshToken }) {
    let payload = { refresh: refreshToken };
    return this.request({
      endpoint: `${__privateGet(this, _endpoint5)}/refresh/`,
      parameters: payload,
      method: HttpMethod.POST
    });
  }
  async initSession({
    redirectUrl,
    institutionId,
    referenceId,
    maxHistoricalDays = 90,
    accessValidForDays = 90,
    userLanguage = "en",
    ssn = null,
    redirectImmediate = !1,
    accountSelection = !1
  }) {
    let agreement = await this.agreement.createAgreement({
      maxHistoricalDays,
      institutionId
    });
    return await this.requisition.createRequisition({
      redirectUrl,
      institutionId,
      reference: referenceId,
      agreement: agreement.id,
      userLanguage,
      redirectImmediate,
      accountSelection,
      ssn
    });
  }
};
_endpoint5 = new WeakMap(), _token = new WeakMap();

// app/lib/nordigen.server.ts
var client = null;
async function getNordigenClient(input, session) {
  if (client || (client = new NordigenClient5({
    secretId: process.env.SECRET_ID,
    secretKey: process.env.SECRET_KEY
  })), "token" in input)
    return client.token = input.token, { client, access: input.token };
  let cookie = input.request.headers.get("Cookie"), s = session ?? await getSession(cookie), token = s.get("walletAccessToken");
  if (token != null && token.access)
    return client.token = token.access, { client, access: token.access, session: s };
  let { access, refresh } = await client.generateToken();
  return s.set("walletAccessToken", { access, refresh }), { client, access, refresh, session: s };
}

// app/lib/queues/wallet/account.queue.ts
var import_bull2 = __toESM(require("bull"));

// app/lib/wallet/account.server.ts
async function insertWalletAccount(input) {
  return await db.walletAccount.upsert({
    create: input,
    update: input,
    where: {
      accountId: input.accountId
    }
  });
}
async function getWalletAccountListOfUser(userMetaId, opts) {
  let handler = async () => await db.walletAccount.findMany({
    where: {
      userMetaId
    }
  });
  return opts != null && opts.timings ? await time(handler, {
    timings: opts.timings,
    type: "getWalletAccountListOfUser"
  }) : await handler();
}
var sanitizeTransactions = (transactions, userId, accountId, status) => transactions.map((transaction) => ({
  userId,
  status,
  transactionId: transaction.transactionId,
  bookingDate: transaction.bookingDate,
  bookingDateTime: transaction.bookingDateTime,
  valueDate: transaction.valueDate,
  valueDateTime: transaction.valueDateTime,
  transactionAmount: transaction.transactionAmount.amount,
  currency: transaction.transactionAmount.currency,
  creditorName: transaction.creditorName,
  proprietaryBankTransactionCode: transaction.proprietaryBankTransactionCode,
  ...transaction.currencyExchange && {
    sourceCurrency: transaction.currencyExchange.sourceCurrency,
    targetCurrency: transaction.currencyExchange.targetCurrency,
    exchangeRate: transaction.currencyExchange.exchangeRate
  },
  walletAccountId: accountId
}));
async function insertAccountData({
  accountData,
  userMetaId
}) {
  let data = [
    ...sanitizeTransactions(
      accountData.transactions.transactions.booked,
      userMetaId,
      accountData.metadata.id,
      "booked"
    ),
    ...sanitizeTransactions(
      accountData.transactions.transactions.pending,
      userMetaId,
      accountData.metadata.id,
      "pending"
    )
  ];
  return await db.walletTransaction.createMany({ data });
}

// app/lib/queues/wallet/account.process.ts
var fetchAccountProcess = async (job) => {
  let { accountId, requisitionId, userId, token } = job.data;
  if (console.log("job.data", job.data), !userId)
    return;
  let { client: nordigenClient } = await getNordigenClient({ token }), account = nordigenClient.account(accountId);
  console.log("account", account);
  let metadata = await account.getMetadata();
  console.log("metadata", metadata);
  let balances = await account.getBalances();
  console.log("balances", balances);
  let details = await account.getDetails();
  console.log("details", details);
  let transactions = await account.getTransactions(), accountData = {
    metadata,
    balances,
    details,
    transactions
  };
  try {
    return await Promise.all([
      insertWalletAccount({
        userMetaId: userId,
        requisitionId,
        accountId,
        balance: balances.balances[0].balanceAmount.amount
      }),
      insertAccountData({ accountData, userMetaId: userId })
    ]);
  } catch (error) {
    return console.log("failed queue", error), job.moveToFailed(error);
  }
};

// app/lib/queues/wallet/account.queue.ts
var settings2 = {
  stalledInterval: 3e5,
  guardInterval: 5e3,
  drainDelay: 300
}, queue2 = new import_bull2.default("walletAccount", {
  redis: process.env.UPSTASH_REDIS_URL,
  settings: settings2
});
queue2.process(fetchAccountProcess);
var initializeMultipleAccountsQueue = async (input) => {
  let { accounts, ...rest } = input;
  return accounts.forEach(async (acc) => {
    let data = { ...rest, accountId: acc };
    await queue2.add(data), console.log(`${acc}: added to queue`);
  }), !0;
};

// app/lib/wallet/requisition.server.ts
var createRequisition = async (input) => await db.walletRequisition.create({
  data: input
}), getRequisitionsOfUser = async (userMetaId, opts) => {
  let handler = async () => await db.walletRequisition.findMany({
    where: {
      userMetaId
    }
  });
  return opts != null && opts.timings ? time(handler, {
    timings: opts.timings,
    type: "get-requisitions-of-user"
  }) : await handler();
}, getRequisition = async (requisitionId) => await db.walletRequisition.findUnique({
  where: {
    requisitionId
  }
});

// app/routes/api/wallet/connect-bank.tsx
var loader2 = async (args) => {
  let { request } = args, { id: userId, username } = await getUserFromRequest(args), cookie = request.headers.get("Cookie"), session = await getSession(cookie), requisitionId = session.get("requisitionId") ?? new URL(request.url).searchParams.get("requisitionId");
  if (!requisitionId)
    return (0, import_node4.redirect)(
      username ? `/${username}/wallet` : REDIRECT_ROUTES.AUTHENTICATED
    );
  if (await getRequisition(requisitionId))
    return await session.unset("requisitionId"), (0, import_node4.redirect)(
      username ? `/${username}/wallet` : REDIRECT_ROUTES.AUTHENTICATED,
      {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      }
    );
  let { client: nordigenClient, access } = await getNordigenClient(args), requisitionData = await nordigenClient.requisition.getRequisitionById(
    requisitionId
  );
  return await initializeMultipleAccountsQueue({
    requisitionId,
    accounts: requisitionData.accounts,
    token: access,
    userId
  }), await session.unset("requisitionId"), (0, import_node4.redirect)(
    username ? `/${username}/wallet` : REDIRECT_ROUTES.AUTHENTICATED,
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
};

// app/routes/api/auth/init-auth.tsx
var init_auth_exports = {};
__export(init_auth_exports, {
  loader: () => loader3
});
var import_node5 = require("@remix-run/node");
var loader3 = async (args) => {
  let { userId } = await authenticatedRequest(args), redirectTo = getRedirectTo(
    args == null ? void 0 : args.request,
    REDIRECT_ROUTES.AUTHENTICATED
  );
  return await initializeUserMeta(userId, redirectTo), (0, import_node5.redirect)(redirectTo);
};

// app/routes/api/auth/send-eml.tsx
var send_eml_exports = {};
__export(send_eml_exports, {
  action: () => action,
  loader: () => loader4,
  sendEML: () => sendEML
});
var loader4 = async () => {
}, action = async ({ request }) => {
};
async function sendEML(email) {
  return (await fetch("/api/auth/send-eml", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  })).json();
}

// app/routes/api/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader5
});
async function loader5({ request }) {
  let host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    let url2 = new URL("/", `http://${host}`);
    return await Promise.all([
      fetch(url2.toString(), { method: "HEAD" }).then((res) => {
        if (!res.ok)
          return Promise.reject(res);
      })
    ]), new Response("OK");
  } catch (err) {
    return console.log("Healthcheck Error:", { err }), new Response("Healthcheck Error.", { status: 500 });
  }
}

// app/routes/__public.tsx
var public_exports = {};
__export(public_exports, {
  default: () => Layout,
  loader: () => loader6
});
var import_react12 = require("@remix-run/react"), import_react13 = require("@chakra-ui/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
async function loader6({ request }) {
  return null;
}
function Layout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react13.Container, { size: "lg", height: "100vh", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
    fileName: "app/routes/__public.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__public.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/__public/signup/$.tsx
var __exports = {};
__export(__exports, {
  default: () => SignUpPage,
  loader: () => loader7
});
var import_node6 = require("@remix-run/node"), import_react14 = require("@chakra-ui/react"), import_remix2 = require("@clerk/remix"), import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
async function loader7(args) {
  return await unauthenticatedRequest(args), (0, import_node6.json)({
    redirectTo: REDIRECT_ROUTES.AUTH_SUCCESSFUL
  });
}
function SignUpPage() {
  let { redirectTo } = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react14.Box,
    {
      h: "full",
      w: "full",
      display: "flex",
      flexDir: "column",
      alignItems: "center",
      justifyContent: "center",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Box, { display: "grid", gap: "4", gridTemplateColumns: "1fr", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_remix2.SignUp,
        {
          routing: "path",
          path: "/signup",
          signInUrl: "/login",
          afterSignUpUrl: redirectTo
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__public/signup/$.tsx",
          lineNumber: 29,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/__public/signup/$.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/__public/signup/$.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}

// app/routes/__public/login/$.tsx
var __exports2 = {};
__export(__exports2, {
  default: () => Login,
  loader: () => loader8
});
var import_node7 = require("@remix-run/node"), import_react16 = require("@chakra-ui/react"), import_react17 = require("@remix-run/react"), import_remix3 = require("@clerk/remix");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
async function loader8(args) {
  try {
    await unauthenticatedRequest(args);
  } catch (error) {
    if (error.redirectTo)
      return (0, import_node7.redirect)(error.redirectTo);
  }
  return (0, import_node7.json)({
    redirectTo: getRedirectTo(args.request)
  });
}
function Login() {
  let { redirectTo } = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_react16.Box,
    {
      h: "full",
      w: "full",
      display: "flex",
      flexDir: "column",
      alignItems: "center",
      justifyContent: "center",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react16.Box, { display: "grid", gap: "4", gridTemplateColumns: "1fr", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        import_remix3.SignIn,
        {
          routing: "path",
          path: "/login",
          signUpUrl: "/signup",
          redirectUrl: redirectTo
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__public/login/$.tsx",
          lineNumber: 36,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/__public/login/$.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/__public/login/$.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}

// app/routes/__public/auth/$.tsx
var __exports3 = {};
__export(__exports3, {
  loader: () => loader9
});
var loader9 = async ({ request }) => (console.log("request", request.url), null);

// app/routes/__app.tsx
var app_exports = {};
__export(app_exports, {
  default: () => Layout2,
  loader: () => loader10
});
var import_node8 = require("@remix-run/node"), import_react20 = require("@chakra-ui/react"), import_react21 = require("@remix-run/react"), import_react22 = require("@saas-ui/react"), import_sidebar = require("@saas-ui/sidebar"), import_remix4 = require("@clerk/remix");

// app/components/logo.tsx
var import_react18 = require("@chakra-ui/react"), import_react19 = require("@remix-run/react");

// app/shared/assets/logo-white.png
var logo_white_default = "/build/_assets/logo-white-TH5MA6N5.png";

// app/components/logo.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), LOGO_WIDTHS = /* @__PURE__ */ ((LOGO_WIDTHS2) => (LOGO_WIDTHS2[LOGO_WIDTHS2.xs = 96] = "xs", LOGO_WIDTHS2[LOGO_WIDTHS2.sm = 128] = "sm", LOGO_WIDTHS2[LOGO_WIDTHS2.md = 160] = "md", LOGO_WIDTHS2[LOGO_WIDTHS2.lg = 192] = "lg", LOGO_WIDTHS2[LOGO_WIDTHS2.xl = 256] = "xl", LOGO_WIDTHS2))(LOGO_WIDTHS || {});
function Logo(props) {
  let { size, to, className } = props, width = LOGO_WIDTHS[size || "md"], LogoImage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react18.Box, { className, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react18.Image, { width, src: logo_white_default, alt: "Logo" }, void 0, !1, {
    fileName: "app/components/logo.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/logo.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
  return to ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react19.Link, { to, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LogoImage, {}, void 0, !1, {
    fileName: "app/components/logo.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/logo.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LogoImage, {}, void 0, !1, {
    fileName: "app/components/logo.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}

// app/routes/__app.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
async function loader10(args) {
  let { userId } = await authenticatedRequest(args);
  return (0, import_node8.json)({ userId });
}
var isActiveRoute = (route, location) => location.pathname === route;
function Layout2() {
  let sidebarWidth = (0, import_react20.useBreakpointValue)(
    { base: 0, md: "96" },
    { fallback: "96", ssr: !0 }
  ), { onToggle, isOpen } = (0, import_react22.useCollapse)({
    defaultIsOpen: !!(sidebarWidth && Number(sidebarWidth) > 96) || !0
  }), location = (0, import_react21.useLocation)();
  return sidebarWidth ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_react22.AppShell,
    {
      sidebar: isOpen && sidebarWidth ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_sidebar.Sidebar, { h: "full", w: sidebarWidth, isOpen, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_sidebar.SidebarSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_react20.Box,
          {
            display: "flex",
            alignItems: "center",
            gap: "4",
            justifyContent: "space-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react21.Link, { to: REDIRECT_ROUTES.AUTHENTICATED, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Logo, {}, void 0, !1, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 94,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 93,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_remix4.UserButton, { afterSignOutUrl: REDIRECT_ROUTES.GUEST }, void 0, !1, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 96,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/__app.tsx",
            lineNumber: 87,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_sidebar.SidebarSection, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_sidebar.NavItem,
            {
              as: import_react21.NavLink,
              to: "/",
              children: "Home"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__app.tsx",
              lineNumber: 100,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_sidebar.NavItem,
            {
              as: import_react21.NavLink,
              to: "/wallet",
              isActive: isActiveRoute("/wallet", location),
              children: "Wallet"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__app.tsx",
              lineNumber: 107,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_sidebar.SidebarSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react20.ButtonGroup, { size: "sm", isAttached: !0, variant: "outline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react22.Button, { onClick: onToggle, children: "Toggle" }, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 117,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) : null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react20.Box, { as: "main", flex: "1", py: "2", px: "4", children: [
        sidebarWidth && Number(sidebarWidth) <= 96 && !isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react22.Button, { onClick: onToggle, position: "fixed", bottom: "2", children: "Sidebar" }, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this),
        isOpen ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react20.Box, { mt: "1", mb: "4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react21.Link, { to: REDIRECT_ROUTES.AUTHENTICATED, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Logo, {}, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 133,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react21.Outlet, {}, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 137,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app.tsx",
        lineNumber: 124,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/__app.tsx",
      lineNumber: 82,
      columnNumber: 5
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_react20.Container,
    {
      h: "full",
      gap: "4",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-between",
      p: "2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_react20.Box,
          {
            display: "flex",
            alignItems: "center",
            position: "sticky",
            top: 0,
            pb: "2",
            zIndex: "99",
            backgroundColor: "gray.800",
            justifyContent: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react20.Flex, { flexGrow: 2, justifyContent: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react21.Link, { to: REDIRECT_ROUTES.AUTHENTICATED, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Logo, {}, void 0, !1, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 63,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 62,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 61,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_remix4.UserButton, { afterSignOutUrl: REDIRECT_ROUTES.GUEST }, void 0, !1, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 66,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/__app.tsx",
            lineNumber: 51,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_react20.Box,
          {
            flexGrow: "1",
            maxH: "calc(100vh - 40px)",
            overflowY: "auto",
            w: "full",
            py: 2,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react21.Outlet, {}, void 0, !1, {
              fileName: "app/routes/__app.tsx",
              lineNumber: 75,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__app.tsx",
            lineNumber: 68,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/__app.tsx",
      lineNumber: 43,
      columnNumber: 7
    },
    this
  );
}

// app/routes/__app/wallet/agreements.$id.tsx
var agreements_id_exports = {};
__export(agreements_id_exports, {
  loader: () => loader11
});
var import_crypto = require("crypto"), import_node9 = require("@remix-run/node");
var REDIRECT_URI = "http://localhost:3000/api/wallet/data/", loader11 = async (args) => {
  let { request, params } = args, institutionId = params.id, { userId } = await authenticatedRequest(args);
  if (!institutionId)
    throw (0, import_node9.redirect)("/wallet");
  let cookie = request.headers.get("Cookie"), session = await getSession(cookie), { client: nordigenClient } = await getNordigenClient(args);
  if (!session)
    throw (0, import_node9.redirect)("/wallet");
  let requisition = await nordigenClient.initSession({
    redirectUrl: REDIRECT_URI,
    institutionId,
    referenceId: (0, import_crypto.randomUUID)()
  });
  return await createRequisition({
    UserMeta: {
      connect: {
        clerkId: userId
      }
    },
    requisitionId: requisition.id,
    agreementId: requisition.agreement
  }), session.set("requisitionId", requisition.id), (0, import_node9.redirect)(requisition.link, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// app/routes/__app/$username/index.tsx
var username_exports = {};
__export(username_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary,
  default: () => UserProfilePage,
  loader: () => loader12,
  meta: () => meta2
});
var import_ssr3 = require("@clerk/remix/ssr.server"), import_react24 = require("@chakra-ui/react"), import_node10 = require("@remix-run/node"), import_react25 = require("@remix-run/react");

// app/services/notes/notes.service.ts
async function getNotesOfUser(props) {
  let { userId, limit = 10, skip = 0 } = props;
  return await db.note.findMany({
    where: {
      userMetaId: userId
    },
    take: limit,
    skip
  });
}

// app/components/error.tsx
var import_react23 = require("@chakra-ui/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), defaultProps = {
  status: 500,
  title: "Internal Server Error",
  description: "Our servers could not handle your request. Don't worry, our development team was already notified. Try refreshing the page."
};
function ErrorFullscreen(props) {
  let { status, title, description } = { ...defaultProps, ...props };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: status }, void 0, !1, {
      fileName: "app/components/error.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Text, { children: title }, void 0, !1, {
      fileName: "app/components/error.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Text, { size: "lg", align: "center", children: description }, void 0, !1, {
      fileName: "app/components/error.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Button, { variant: "subtle", size: "md", color: "dark", children: "Refresh the page" }, void 0, !1, {
      fileName: "app/components/error.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/error.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/error.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/__app/$username/index.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader12 = async (args) => {
  let { userId } = await (0, import_ssr3.getAuth)(args);
  if (!userId)
    return (0, import_node10.json)({ error: "Invalid userId" }, { status: 404 });
  if (!args.params.username)
    return (0, import_node10.json)({ error: "Invalid user" }, { status: 404 });
  let requestUser = await getUserFromRequest(args);
  if (!requestUser)
    return (0, import_node10.json)({ error: "User not found!" }, { status: 404 });
  let limit = args.params.limit ? parseInt(args.params.limit) : 10, skip = args.params.skip ? parseInt(args.params.skip) : 0, notes = await getNotesOfUser({ userId: requestUser.id, limit, skip });
  return (0, import_node10.json)({ user: requestUser, notes });
}, meta2 = ({ params }) => ({
  ...getSeoMeta({
    title: params.username
  })
});
function UserProfilePage() {
  let { notes } = (0, import_react25.useLoaderData)(), { userId } = (0, import_react25.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react24.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react24.Text, { children: userId }, void 0, !1, {
      fileName: "app/routes/__app/$username/index.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    notes.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react24.Text, { children: note.content }, note.id, !1, {
      fileName: "app/routes/__app/$username/index.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/__app/$username/index.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
var ErrorBoundary = ({ error }) => (console.log("error", error), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ErrorFullscreen, { title: error.name, description: error.message }, void 0, !1, {
  fileName: "app/routes/__app/$username/index.tsx",
  lineNumber: 55,
  columnNumber: 10
}, this)), CatchBoundary2 = () => {
  let caught = (0, import_react25.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    ErrorFullscreen,
    {
      title: "Something went wrong!",
      description: caught.data.error
    },
    void 0,
    !1,
    {
      fileName: "app/routes/__app/$username/index.tsx",
      lineNumber: 61,
      columnNumber: 5
    },
    this
  );
};

// app/routes/__app/wallet/add-bank.tsx
var add_bank_exports = {};
__export(add_bank_exports, {
  CatchBoundary: () => CatchBoundary3,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Banks,
  loader: () => loader13
});
var import_node11 = require("@remix-run/node"), import_react29 = require("@remix-run/react"), import_react30 = require("@chakra-ui/react");

// app/containers/bank-list.tsx
var import_react26 = require("@chakra-ui/react"), import_react27 = require("@remix-run/react"), import_react28 = require("@saas-ui/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), BankListItem = ({ logoSrc, name, to }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  import_react28.Card,
  {
    as: import_react27.Link,
    to,
    display: "flex",
    alignItems: "center",
    width: "100%",
    p: "2",
    gap: 1,
    isHoverable: !0,
    borderRadius: "md",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react26.Img, { src: logoSrc, width: "12", me: "2", loading: "lazy", borderRadius: "md" }, void 0, !1, {
        fileName: "app/containers/bank-list.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react28.CardTitle, { children: name }, void 0, !1, {
        fileName: "app/containers/bank-list.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/containers/bank-list.tsx",
    lineNumber: 13,
    columnNumber: 5
  },
  this
);

// app/routes/__app/wallet/add-bank.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), DEFAULT_COUNTRY = "NL", loader13 = async (args) => {
  let { request } = args;
  await authenticatedRequest(args);
  let headers2 = new Headers(args.request.headers);
  headers2.set("Cache-Control", "private, max-age=5, smax-age=0");
  let country = new URL(request.url).searchParams.get("country");
  if (!country)
    throw (0, import_node11.redirect)(`?country=${DEFAULT_COUNTRY}`, { headers: headers2 });
  let {
    client: nordigenClient,
    access: token,
    session
  } = await getNordigenClient(args);
  if (!session)
    throw new Error("No session found");
  token && session && session.set("walletAccessToken", token);
  try {
    let availableBanks = await nordigenClient.institution.getInstitutions({
      country
    });
    return headers2.set("Set-Cookie", await commitSession(session)), (0, import_node11.json)(
      {
        availableBanks
      },
      {
        headers: headers2
      }
    );
  } catch (error) {
    let requestError = error.response.data;
    if (requestError) {
      let { status_code, ...errorBody } = requestError;
      throw (0, import_node11.json)(
        {
          ...errorBody
        },
        {
          status: status_code
        }
      );
    }
    throw error;
  }
};
function Banks() {
  let { availableBanks } = (0, import_react29.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.Heading, { as: "h2", size: "md", mb: "4", children: "Add a bank" }, void 0, !1, {
      fileName: "app/routes/__app/wallet/add-bank.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.Box, { display: "flex", flexDir: "column", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.Grid, { templateColumns: { sm: "1fr", md: "repeat(4, 1fr)" }, gap: 6, children: availableBanks.map((bank) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      BankListItem,
      {
        to: `/wallet/agreements/${bank.id}`,
        name: bank.name,
        logoSrc: bank.logo
      },
      bank.id,
      !1,
      {
        fileName: "app/routes/__app/wallet/add-bank.tsx",
        lineNumber: 102,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/__app/wallet/add-bank.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/__app/wallet/add-bank.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app/wallet/add-bank.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}
var CatchBoundary3 = () => {
  let caught = (0, import_react29.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.Alert, { status: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.AlertIcon, {}, void 0, !1, {
      fileName: "app/routes/__app/wallet/add-bank.tsx",
      lineNumber: 122,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.AlertTitle, { children: "Something went wrong" }, void 0, !1, {
      fileName: "app/routes/__app/wallet/add-bank.tsx",
      lineNumber: 123,
      columnNumber: 9
    }, this),
    Object.values(caught.data).map((message, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.AlertDescription, { children: message }, i, !1, {
      fileName: "app/routes/__app/wallet/add-bank.tsx",
      lineNumber: 125,
      columnNumber: 11
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/__app/wallet/add-bank.tsx",
    lineNumber: 121,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__app/wallet/add-bank.tsx",
    lineNumber: 120,
    columnNumber: 5
  }, this);
}, ErrorBoundary2 = ({ error }) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.Alert, { status: "error", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.AlertIcon, {}, void 0, !1, {
    fileName: "app/routes/__app/wallet/add-bank.tsx",
    lineNumber: 136,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.AlertTitle, { children: error.statusText }, void 0, !1, {
    fileName: "app/routes/__app/wallet/add-bank.tsx",
    lineNumber: 137,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.AlertDescription, { children: error.status === 400 ? error.message : error.statusText }, void 0, !1, {
    fileName: "app/routes/__app/wallet/add-bank.tsx",
    lineNumber: 138,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/__app/wallet/add-bank.tsx",
  lineNumber: 135,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/__app/wallet/add-bank.tsx",
  lineNumber: 134,
  columnNumber: 5
}, this);

// app/routes/__app/wallet/index.tsx
var wallet_exports = {};
__export(wallet_exports, {
  default: () => WalletPage,
  headers: () => headers,
  loader: () => loader14
});
var import_react31 = require("@chakra-ui/react"), import_react32 = require("@remix-run/react"), import_react33 = require("@saas-ui/react"), import_rx = require("react-icons/rx"), import_bs = require("react-icons/bs"), import_remix_utils3 = require("remix-utils");

// app/lib/utils/misc.ts
var reuseUsefulLoaderHeaders = ({
  loaderHeaders,
  parentHeaders
}) => {
  let headers2 = new Headers(), usefulHeaders = ["Cache-Control", "Vary", "Server-Timing"];
  for (let headerName of usefulHeaders)
    loaderHeaders.has(headerName) && headers2.set(headerName, loaderHeaders.get(headerName));
  let appendHeaders = ["Server-Timing"];
  for (let headerName of appendHeaders)
    parentHeaders.has(headerName) && headers2.append(headerName, parentHeaders.get(headerName));
  let useIfNotExistsHeaders = ["Cache-Control", "Vary"];
  for (let headerName of useIfNotExistsHeaders)
    !headers2.has(headerName) && parentHeaders.has(headerName) && headers2.set(headerName, parentHeaders.get(headerName));
  return headers2;
};

// app/routes/__app/wallet/index.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), defaultCountry = "NL", loader14 = async (args) => {
  let timings = {}, currentUser = await getUserFromRequest(args, {
    timings
  });
  return typeof (currentUser == null ? void 0 : currentUser.id) != "string" ? (0, import_remix_utils3.jsonHash)(
    {
      redirect: {
        destination: `/login?redirectTo=${encodeURIComponent(
          args.request.url
        )}`,
        permanent: !1
      }
    },
    {
      headers: {
        "Server-Timing": getServerTimeHeader(timings)
      }
    }
  ) : (0, import_remix_utils3.jsonHash)(
    {
      walletAccounts: getRequisitionsOfUser(currentUser.id, { timings }),
      requisitions: getWalletAccountListOfUser(currentUser.id, { timings })
    },
    {
      headers: {
        "Server-Timing": getServerTimeHeader(timings)
      }
    }
  );
}, headers = reuseUsefulLoaderHeaders, AddBankButton = () => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
  import_react33.Button,
  {
    rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_rx.RxPlus, {}, void 0, !1, {
      fileName: "app/routes/__app/wallet/index.tsx",
      lineNumber: 67,
      columnNumber: 16
    }, this),
    as: import_react32.Link,
    to: `add-bank?country=${defaultCountry}`,
    colorScheme: "green",
    variant: "ghost",
    prefetch: "intent",
    rel: "prefetch",
    label: "Add bank"
  },
  void 0,
  !1,
  {
    fileName: "app/routes/__app/wallet/index.tsx",
    lineNumber: 66,
    columnNumber: 3
  },
  this
);
function WalletPage() {
  let { walletAccounts } = (0, import_react32.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_react31.Box,
      {
        mb: "6",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react31.Heading, { as: "h2", size: "md", children: "My Wallet" }, void 0, !1, {
            fileName: "app/routes/__app/wallet/index.tsx",
            lineNumber: 89,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react31.Box, { children: [
            walletAccounts != null && walletAccounts.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(AddBankButton, {}, void 0, !1, {
              fileName: "app/routes/__app/wallet/index.tsx",
              lineNumber: 93,
              columnNumber: 37
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react33.Button, { as: import_react32.Link, to: ".", colorScheme: "red", variant: "outline", children: "Delete all transactions" }, void 0, !1, {
              fileName: "app/routes/__app/wallet/index.tsx",
              lineNumber: 95,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/__app/wallet/index.tsx",
            lineNumber: 92,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/__app/wallet/index.tsx",
        lineNumber: 83,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_react33.EmptyState,
      {
        icon: import_bs.BsWallet2,
        title: "No connected banks",
        description: "You haven't connected any bank accounts yet. Connect a bank account to start tracking your transactions.",
        actions: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(AddBankButton, {}, void 0, !1, {
          fileName: "app/routes/__app/wallet/index.tsx",
          lineNumber: 105,
          columnNumber: 18
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app/wallet/index.tsx",
        lineNumber: 100,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react33.EmptyStateContainer, { colorScheme: "purple", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react33.EmptyStateBody, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react33.EmptyStateIcon, { as: import_bs.BsWallet2 }, void 0, !1, {
        fileName: "app/routes/__app/wallet/index.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react33.EmptyStateTitle, { children: "Whoops, something went wrong" }, void 0, !1, {
        fileName: "app/routes/__app/wallet/index.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react33.EmptyStateDescription, { children: "Where do you want to go?" }, void 0, !1, {
        fileName: "app/routes/__app/wallet/index.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react33.EmptyStateActions, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(AddBankButton, {}, void 0, !1, {
        fileName: "app/routes/__app/wallet/index.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/__app/wallet/index.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app/wallet/index.tsx",
      lineNumber: 109,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/__app/wallet/index.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app/wallet/index.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}

// app/routes/__app/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  action: () => action2,
  default: () => SettingsPage,
  loader: () => loader15
});
var import_react34 = require("@chakra-ui/react"), import_node12 = require("@remix-run/node"), import_react35 = require("@remix-run/react");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), ThemePreferenceOptions = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "auto" }
], loader15 = async (args) => {
  let { userId } = await authenticatedRequest(args), clerkUser = await getUser(userId), userMeta = await getUserMeta(userId), user = {
    ...clerkUser,
    ...userMeta
  };
  return (0, import_node12.json)({ user });
}, action2 = async ({ request }) => {
  if (request.method === "PATCH") {
    let themePreference = (await request.formData()).get("themePreference");
    if (typeof themePreference == "string" && ThemePreferenceOptions.find(
      (option) => option.value === themePreference
    ))
      return (0, import_node12.redirect)("/settings");
  }
  return null;
};
function SettingsPage() {
  let { user } = (0, import_react35.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react34.Grid, { templateColumns: "repeat(2, 1fr)", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react34.Text, { as: "h2", size: "md", children: "Settings" }, void 0, !1, {
      fileName: "app/routes/__app/settings.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react34.GridItem, { colSpan: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.Form, { method: "patch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react34.Box, { display: "flex", flexDir: "column", gap: 4, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        import_react34.Select,
        {
          name: "themePreference",
          placeholder: "Theme Mode",
          defaultValue: user.themePreference,
          children: ThemePreferenceOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("option", { value: option.value, children: option.label }, option.value, !1, {
            fileName: "app/routes/__app/settings.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__app/settings.tsx",
          lineNumber: 68,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react34.Button, { color: "green", type: "submit", children: "Save" }, void 0, !1, {
        fileName: "app/routes/__app/settings.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app/settings.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/__app/settings.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/__app/settings.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app/settings.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

// app/routes/__app/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => Profile,
  loader: () => loader16
});
var import_node13 = require("@remix-run/node"), import_react36 = require("@remix-run/react"), import_react37 = require("@chakra-ui/react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
async function loader16(args) {
  let user = await getUserFromRequest(args);
  return (0, import_node13.json)({ user });
}
function Profile() {
  let { user } = (0, import_react36.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react37.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react37.Text, { children: user.username }, void 0, !1, {
    fileName: "app/routes/__app/profile.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__app/profile.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/__app/debug.tsx
var debug_exports = {};
__export(debug_exports, {
  loader: () => loader17
});
var loader17 = async (args) => null;

// app/routes/__app/today.tsx
var today_exports = {};
__export(today_exports, {
  default: () => Today,
  loader: () => loader18
});
var import_node14 = require("@remix-run/node"), import_react40 = require("@remix-run/react"), import_ssr4 = require("@clerk/remix/ssr.server");

// app/components/editor/editor.tsx
var import_react39 = require("react"), import_slate3 = require("slate"), import_slate_history = require("slate-history"), import_slate_react2 = require("slate-react");

// app/components/editor/editor.middlewares.ts
var import_slate = require("slate"), SHORTCUTS = {
  "*": "list-item",
  "-": "list-item",
  "+": "list-item",
  ">": "block-quote",
  "#": "heading-one",
  "##": "heading-two",
  "###": "heading-three",
  "####": "heading-four",
  "#####": "heading-five",
  "######": "heading-six",
  "[]": "check-list-item"
}, withShortcuts = (editor) => {
  let { deleteBackward, insertText } = editor;
  return editor.insertText = (text) => {
    let { selection } = editor;
    if (text.endsWith(" ") && selection && import_slate.Range.isCollapsed(selection)) {
      let { anchor } = selection, block = import_slate.Editor.above(editor, {
        match: (n) => import_slate.Editor.isBlock(editor, n)
      }), path = block ? block[1] : [], start = import_slate.Editor.start(editor, path), range = { anchor, focus: start }, beforeText = import_slate.Editor.string(editor, range) + text.slice(0, -1), type = SHORTCUTS[beforeText];
      if (type) {
        import_slate.Transforms.select(editor, range), import_slate.Range.isCollapsed(range) || import_slate.Transforms.delete(editor);
        let newProperties = {
          type
        };
        if (import_slate.Transforms.setNodes(editor, newProperties, {
          match: (n) => import_slate.Editor.isBlock(editor, n)
        }), type === "list-item") {
          let list = {
            type: "bulleted-list",
            children: []
          };
          import_slate.Transforms.wrapNodes(editor, list, {
            match: (n) => !import_slate.Editor.isEditor(n) && import_slate.Element.isElement(n) && n.type === "list-item"
          });
        }
        return;
      }
    }
    insertText(text);
  }, editor.deleteBackward = (...args) => {
    let { selection } = editor;
    if (selection && import_slate.Range.isCollapsed(selection)) {
      let match = import_slate.Editor.above(editor, {
        match: (n) => import_slate.Editor.isBlock(editor, n)
      });
      if (match) {
        let [block, path] = match, start = import_slate.Editor.start(editor, path);
        if (!import_slate.Editor.isEditor(block) && import_slate.Element.isElement(block) && block.type !== "paragraph" && import_slate.Point.equals(selection.anchor, start)) {
          let newProperties = {
            type: "paragraph"
          };
          import_slate.Transforms.setNodes(editor, newProperties), block.type === "list-item" && import_slate.Transforms.unwrapNodes(editor, {
            match: (n) => !import_slate.Editor.isEditor(n) && import_slate.Element.isElement(n) && n.type === "bulleted-list",
            split: !0
          });
          return;
        }
      }
      deleteBackward(...args);
    }
  }, editor;
}, withChecklists = (editor) => {
  let { deleteBackward } = editor;
  return editor.deleteBackward = (...args) => {
    let { selection } = editor;
    if (selection && import_slate.Range.isCollapsed(selection)) {
      let [match] = import_slate.Editor.nodes(editor, {
        match: (n) => !import_slate.Editor.isEditor(n) && import_slate.Element.isElement(n) && n.type === "check-list-item"
      });
      if (match) {
        let [, path] = match, start = import_slate.Editor.start(editor, path);
        if (import_slate.Point.equals(selection.anchor, start)) {
          let newProperties = {
            type: "paragraph"
          };
          import_slate.Transforms.setNodes(editor, newProperties, {
            match: (n) => !import_slate.Editor.isEditor(n) && import_slate.Element.isElement(n) && n.type === "check-list-item"
          });
          return;
        }
      }
    }
    deleteBackward(...args);
  }, editor;
};

// app/components/editor/editor.components.tsx
var import_react38 = require("@chakra-ui/react"), import_slate2 = require("slate"), import_slate_react = require("slate-react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), Element2 = (props) => {
  let { attributes, children, element } = props;
  switch (element.type) {
    case "heading-one":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react38.Text, { as: "h1", ...attributes, children }, void 0, !1, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this);
    case "heading-two":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react38.Text, { as: "h2", ...attributes, children }, void 0, !1, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this);
    case "heading-three":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react38.Text, { as: "h3", ...attributes, children }, void 0, !1, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this);
    case "heading-four":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react38.Text, { as: "h4", ...attributes, children }, void 0, !1, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this);
    case "heading-five":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react38.Text, { as: "h5", ...attributes, children }, void 0, !1, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this);
    case "heading-six":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react38.Text, { as: "h6", ...attributes, children }, void 0, !1, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this);
    case "bulleted-list":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react38.List, { listStyleType: "disc", ...attributes, children }, void 0, !1, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this);
    case "list-item":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react38.ListItem, { ...attributes, children }, void 0, !1, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 54,
        columnNumber: 14
      }, this);
    case "check-list-item":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(CheckListItemElement, { ...props }, void 0, !1, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 57,
        columnNumber: 14
      }, this);
    default:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react38.Text, { ...attributes, children }, void 0, !1, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 59,
        columnNumber: 14
      }, this);
  }
}, CheckListItemElement = (props) => {
  let { attributes, children, element } = props, editor = (0, import_slate_react.useSlateStatic)(), readOnly = (0, import_slate_react.useReadOnly)(), { checked } = element;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    import_react38.Checkbox,
    {
      ...attributes,
      checked,
      onChange: (event) => {
        let path = import_slate_react.ReactEditor.findPath(editor, element), newProperties = {
          checked: event.target.checked
        };
        import_slate2.Transforms.setNodes(editor, newProperties, { at: path });
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_react38.Text,
        {
          contentEditable: !readOnly,
          suppressContentEditableWarning: !0,
          textDecoration: checked ? "line-through" : void 0,
          children
        },
        void 0,
        !1,
        {
          fileName: "app/components/editor/editor.components.tsx",
          lineNumber: 82,
          columnNumber: 9
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/editor/editor.components.tsx",
      lineNumber: 71,
      columnNumber: 5
    },
    this
  );
};

// app/components/editor/editor.mocks.ts
var defaultValue = [
  {
    type: "paragraph",
    children: [
      {
        text: `The editor gives you full control over the logic you can add. For example, it's fairly common to want to add markdown-like shortcuts to editors. So that, when you start a line with "> " you get a blockquote that looks like this:`
      }
    ]
  },
  {
    type: "block-quote",
    children: [{ text: "A wise quote." }]
  },
  {
    type: "paragraph",
    children: [
      {
        text: 'Order when you start a line with "## " you get a level-two heading, like this:'
      }
    ]
  },
  {
    type: "heading-two",
    children: [{ text: "Try it out!" }]
  },
  {
    type: "paragraph",
    children: [
      {
        text: 'Try it out for yourself! Try starting a new line with ">", "-", or "#"s.'
      }
    ]
  }
];

// app/components/editor/editor.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), Editor2 = (props) => {
  let { initialValue = defaultValue } = props, renderElement = (0, import_react39.useCallback)(
    (elementProps) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Element2, { ...elementProps }, void 0, !1, {
      fileName: "app/components/editor/editor.tsx",
      lineNumber: 15,
      columnNumber: 43
    }, this),
    []
  ), editor = (0, import_react39.useMemo)(
    () => withChecklists(withShortcuts((0, import_slate_react2.withReact)((0, import_slate_history.withHistory)((0, import_slate3.createEditor)())))),
    []
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_slate_react2.Slate, { editor, value: initialValue, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    import_slate_react2.Editable,
    {
      onDOMBeforeInput: (e) => {
        queueMicrotask(() => {
          let pendingDiffs = import_slate_react2.ReactEditor.androidPendingDiffs(editor);
          (pendingDiffs == null ? void 0 : pendingDiffs.some(({ diff, path }) => {
            if (!diff.text.endsWith(" "))
              return !1;
            let { text } = import_slate3.Node.leaf(editor, path);
            if (!(text.slice(0, diff.start) + diff.text.slice(0, -1) in SHORTCUTS))
              return !1;
            let blockEntry = import_slate3.Editor.above(editor, {
              at: path,
              match: (n) => import_slate3.Editor.isBlock(editor, n)
            });
            if (!blockEntry)
              return !1;
            let [, blockPath] = blockEntry;
            return import_slate3.Editor.isStart(
              editor,
              import_slate3.Editor.start(editor, path),
              blockPath
            );
          })) && import_slate_react2.ReactEditor.androidScheduleFlush(editor);
        });
      },
      renderElement,
      placeholder: "Write some markdown...",
      spellCheck: !0,
      autoFocus: !0
    },
    void 0,
    !1,
    {
      fileName: "app/components/editor/editor.tsx",
      lineNumber: 63,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/editor/editor.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
};

// app/routes/__app/today.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
async function loader18(args) {
  let user = await (0, import_ssr4.getAuth)(args);
  return user ? (0, import_node14.json)({
    user,
    initialValue: void 0
  }) : (0, import_node14.json)({ user: null }, { status: 401 });
}
function Today() {
  let { initialValue } = (0, import_react40.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Editor2, { initialValue }, void 0, !1, {
    fileName: "app/routes/__app/today.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__app/today.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => AppIndex
});
var import_remix5 = require("@clerk/remix"), import_react41 = require("@remix-run/react"), import_react42 = require("@saas-ui/react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function AppIndex() {
  let { user } = (0, import_remix5.useUser)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    user != null && user.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react42.Button, { as: import_react41.Link, to: "wallet", prefetch: "intent", children: "Wallet" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react42.Button, { as: import_react41.Link, to: REDIRECT_ROUTES.GUEST, prefetch: "intent", children: "Login" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react41.Outlet, {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "264eb06a", entry: { module: "/build/entry.client-DZEE2GYC.js", imports: ["/build/_shared/chunk-VWYOXRKX.js", "/build/_shared/chunk-7G6WEMYH.js", "/build/_shared/chunk-P3LUYFZE.js", "/build/_shared/chunk-4IYZMDEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-E225HG3N.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-CALHA5WK.js", "/build/_shared/chunk-K3I4BZ64.js", "/build/_shared/chunk-IALVUPGS.js", "/build/_shared/chunk-RZDBWPKV.js", "/build/_shared/chunk-KIPNPAPD.js", "/build/_shared/chunk-52X7NMXT.js", "/build/_shared/chunk-3LCOXCVH.js", "/build/_shared/chunk-4DOPGRE4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/__app": { id: "routes/__app", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__app-DNPXPJLD.js", imports: ["/build/_shared/chunk-OGV5JWI4.js", "/build/_shared/chunk-X2FTVZ7H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/$username/index": { id: "routes/__app/$username/index", parentId: "routes/__app", path: ":username", index: !0, caseSensitive: void 0, module: "/build/routes/__app/$username/index-TTWMUXNV.js", imports: ["/build/_shared/chunk-CALHA5WK.js", "/build/_shared/chunk-K3I4BZ64.js", "/build/_shared/chunk-3LCOXCVH.js", "/build/_shared/chunk-4DOPGRE4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/__app/debug": { id: "routes/__app/debug", parentId: "routes/__app", path: "debug", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/debug-4UU35DYY.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/profile": { id: "routes/__app/profile", parentId: "routes/__app", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/profile-B6CWVZAE.js", imports: ["/build/_shared/chunk-3LCOXCVH.js", "/build/_shared/chunk-4DOPGRE4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/settings": { id: "routes/__app/settings", parentId: "routes/__app", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/settings-R24PVVNI.js", imports: ["/build/_shared/chunk-3LCOXCVH.js", "/build/_shared/chunk-4DOPGRE4.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/today": { id: "routes/__app/today", parentId: "routes/__app", path: "today", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/today-I2PSHJYM.js", imports: ["/build/_shared/chunk-K3I4BZ64.js", "/build/_shared/chunk-3LCOXCVH.js", "/build/_shared/chunk-4DOPGRE4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/wallet/add-bank": { id: "routes/__app/wallet/add-bank", parentId: "routes/__app", path: "wallet/add-bank", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/wallet/add-bank-A2DBUUWP.js", imports: ["/build/_shared/chunk-KIPNPAPD.js", "/build/_shared/chunk-3LCOXCVH.js", "/build/_shared/chunk-4DOPGRE4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/__app/wallet/agreements.$id": { id: "routes/__app/wallet/agreements.$id", parentId: "routes/__app", path: "wallet/agreements/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/wallet/agreements.$id-NXTOPTIH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/wallet/index": { id: "routes/__app/wallet/index", parentId: "routes/__app", path: "wallet", index: !0, caseSensitive: void 0, module: "/build/routes/__app/wallet/index-I6KOLOQA.js", imports: ["/build/_shared/chunk-IALVUPGS.js", "/build/_shared/chunk-RZDBWPKV.js", "/build/_shared/chunk-KIPNPAPD.js", "/build/_shared/chunk-3LCOXCVH.js", "/build/_shared/chunk-4DOPGRE4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__public": { id: "routes/__public", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__public-OUTBCF2N.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__public/auth/$": { id: "routes/__public/auth/$", parentId: "routes/__public", path: "auth/*", index: void 0, caseSensitive: void 0, module: "/build/routes/__public/auth/$-DJNAGKZD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__public/login/$": { id: "routes/__public/login/$", parentId: "routes/__public", path: "login/*", index: void 0, caseSensitive: void 0, module: "/build/routes/__public/login/$-UY2JE366.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-X2FTVZ7H.js", "/build/_shared/chunk-52X7NMXT.js", "/build/_shared/chunk-3LCOXCVH.js", "/build/_shared/chunk-4DOPGRE4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__public/signup/$": { id: "routes/__public/signup/$", parentId: "routes/__public", path: "signup/*", index: void 0, caseSensitive: void 0, module: "/build/routes/__public/signup/$-FH3GOJLW.js", imports: ["/build/_shared/chunk-X2FTVZ7H.js", "/build/_shared/chunk-52X7NMXT.js", "/build/_shared/chunk-3LCOXCVH.js", "/build/_shared/chunk-4DOPGRE4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/auth/init-auth": { id: "routes/api/auth/init-auth", parentId: "root", path: "api/auth/init-auth", index: void 0, caseSensitive: void 0, module: "/build/routes/api/auth/init-auth-Y657R3M4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/auth/send-eml": { id: "routes/api/auth/send-eml", parentId: "root", path: "api/auth/send-eml", index: void 0, caseSensitive: void 0, module: "/build/routes/api/auth/send-eml-2V253YR2.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/healthcheck": { id: "routes/api/healthcheck", parentId: "root", path: "api/healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/api/healthcheck-JWXEYW3M.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/wallet/connect-bank": { id: "routes/api/wallet/connect-bank", parentId: "root", path: "api/wallet/connect-bank", index: void 0, caseSensitive: void 0, module: "/build/routes/api/wallet/connect-bank-5ZGRX7RJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-MK5G2PSI.js", imports: ["/build/_shared/chunk-OGV5JWI4.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-264EB06A.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api/wallet/connect-bank": {
    id: "routes/api/wallet/connect-bank",
    parentId: "root",
    path: "api/wallet/connect-bank",
    index: void 0,
    caseSensitive: void 0,
    module: connect_bank_exports
  },
  "routes/api/auth/init-auth": {
    id: "routes/api/auth/init-auth",
    parentId: "root",
    path: "api/auth/init-auth",
    index: void 0,
    caseSensitive: void 0,
    module: init_auth_exports
  },
  "routes/api/auth/send-eml": {
    id: "routes/api/auth/send-eml",
    parentId: "root",
    path: "api/auth/send-eml",
    index: void 0,
    caseSensitive: void 0,
    module: send_eml_exports
  },
  "routes/api/healthcheck": {
    id: "routes/api/healthcheck",
    parentId: "root",
    path: "api/healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/__public": {
    id: "routes/__public",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: public_exports
  },
  "routes/__public/signup/$": {
    id: "routes/__public/signup/$",
    parentId: "routes/__public",
    path: "signup/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/__public/login/$": {
    id: "routes/__public/login/$",
    parentId: "routes/__public",
    path: "login/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports2
  },
  "routes/__public/auth/$": {
    id: "routes/__public/auth/$",
    parentId: "routes/__public",
    path: "auth/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports3
  },
  "routes/__app": {
    id: "routes/__app",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  },
  "routes/__app/wallet/agreements.$id": {
    id: "routes/__app/wallet/agreements.$id",
    parentId: "routes/__app",
    path: "wallet/agreements/:id",
    index: void 0,
    caseSensitive: void 0,
    module: agreements_id_exports
  },
  "routes/__app/$username/index": {
    id: "routes/__app/$username/index",
    parentId: "routes/__app",
    path: ":username",
    index: !0,
    caseSensitive: void 0,
    module: username_exports
  },
  "routes/__app/wallet/add-bank": {
    id: "routes/__app/wallet/add-bank",
    parentId: "routes/__app",
    path: "wallet/add-bank",
    index: void 0,
    caseSensitive: void 0,
    module: add_bank_exports
  },
  "routes/__app/wallet/index": {
    id: "routes/__app/wallet/index",
    parentId: "routes/__app",
    path: "wallet",
    index: !0,
    caseSensitive: void 0,
    module: wallet_exports
  },
  "routes/__app/settings": {
    id: "routes/__app/settings",
    parentId: "routes/__app",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/__app/profile": {
    id: "routes/__app/profile",
    parentId: "routes/__app",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/__app/debug": {
    id: "routes/__app/debug",
    parentId: "routes/__app",
    path: "debug",
    index: void 0,
    caseSensitive: void 0,
    module: debug_exports
  },
  "routes/__app/today": {
    id: "routes/__app/today",
    parentId: "routes/__app",
    path: "today",
    index: void 0,
    caseSensitive: void 0,
    module: today_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
