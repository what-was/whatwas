import {
  __DEV__,
  chakra,
  createStylesContext,
  cx,
  forwardRef,
  useMultiStyleConfig
} from "/build/_shared/chunk-OGV5JWI4.js";
import {
  omitThemingProps
} from "/build/_shared/chunk-KIPNPAPD.js";
import {
  require_user
} from "/build/_shared/chunk-X2FTVZ7H.js";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Grid,
  Heading,
  Img
} from "/build/_shared/chunk-3LCOXCVH.js";
import {
  ButtonGroup
} from "/build/_shared/chunk-4DOPGRE4.js";
import "/build/_shared/chunk-7G6WEMYH.js";
import {
  Link,
  init_esm,
  require_jsx_dev_runtime,
  require_react,
  useCatch,
  useLoaderData
} from "/build/_shared/chunk-P3LUYFZE.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// empty-module:~/lib/nordigen.server
var require_nordigen = __commonJS({
  "empty-module:~/lib/nordigen.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/services/session.server
var require_session = __commonJS({
  "empty-module:~/services/session.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/__app/wallet/add-bank.tsx
init_esm();
var import_nordigen = __toESM(require_nordigen());
var import_session = __toESM(require_session());
var import_user = __toESM(require_user());

// app/containers/bank-list.tsx
init_esm();

// ../../node_modules/@saas-ui/react/node_modules/@saas-ui/card/dist/index.modern.mjs
var e = __toESM(require_react(), 1);
function d() {
  return d = Object.assign ? Object.assign.bind() : function(e2) {
    for (var a = 1; a < arguments.length; a++) {
      var t = arguments[a];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e2[r] = t[r]);
    }
    return e2;
  }, d.apply(this, arguments);
}
function o(e2, a) {
  if (null == e2)
    return {};
  var t, r, s = {}, n = Object.keys(e2);
  for (r = 0; r < n.length; r++)
    a.indexOf(t = n[r]) >= 0 || (s[t] = e2[t]);
  return s;
}
var m = ["title", "subtitle", "action", "avatar", "actions", "children"];
var f = ["children", "isHoverable"];
var u = ["title", "subtitle", "action", "avatar", "spacing", "children"];
var _ = ["children"];
var h = ["children"];
var p = ["children"];
var N = ["children"];
var v = ["children"];
var y = ["children"];
var E = ["children", "variant", "spacing"];
var [g, b] = createStylesContext("Card");
var C = forwardRef((a, t) => {
  const { title: r, subtitle: s, action: n, avatar: c, actions: l, children: i } = a, f2 = o(a, m), u2 = r || s || n || c;
  return e.createElement(x, d({ ref: t }, f2), u2 && /* @__PURE__ */ e.createElement(O, { title: r, subtitle: s, action: n, avatar: c }), i, l && /* @__PURE__ */ e.createElement(D, null, l));
});
__DEV__ && (C.displayName = "Card");
var x = forwardRef((a, t) => {
  const c = useMultiStyleConfig("Card", a), i = omitThemingProps(a), { children: m2 } = i, u2 = o(i, f);
  return e.createElement(g, { value: c }, /* @__PURE__ */ e.createElement(chakra.div, d({ __css: c.container, ref: t }, u2, { className: cx("saas-card", u2.className) }), m2));
});
__DEV__ && (x.displayName = "CardContainer");
var O = forwardRef((a, t) => {
  const { title: r, subtitle: s, action: c, avatar: m2, spacing: f2 = 4, children: _2 } = a, h2 = o(a, u), p2 = b();
  let N2, v2, y2;
  return m2 && (N2 = /* @__PURE__ */ e.createElement(chakra.div, { display: "flex", flexShrink: 0, justifyContent: "stretch", marginEnd: f2 }, m2)), (r || s) && (v2 = /* @__PURE__ */ e.createElement(chakra.div, { display: "flex", flexDirection: "column", flex: "1" }, "string" == typeof r ? /* @__PURE__ */ e.createElement(S, null, r) : r, "string" == typeof s ? /* @__PURE__ */ e.createElement(k, null, s) : s)), c && (y2 = /* @__PURE__ */ e.createElement(ButtonGroup, { variant: "ghost", marginStart: f2, alignSelf: "start" }, c)), /* @__PURE__ */ e.createElement(chakra.div, d({ __css: p2.header, ref: t }, h2, { className: cx("saas-card__header", h2.className) }), /* @__PURE__ */ e.createElement(chakra.div, { __css: { display: "flex", flexDirection: "row", alignItems: "center" } }, N2, " ", v2, " ", _2, " ", y2));
});
__DEV__ && (O.displayName = "CardHeader");
var j = forwardRef((a, t) => {
  let { children: r } = a, s = o(a, _);
  const c = b();
  return e.createElement(chakra.div, d({ __css: c.headerAction, ref: t }, s, { className: cx("saas-card__header-action", s.className) }), r);
});
__DEV__ && (j.displayName = "CardHeaderAction");
var S = forwardRef((a, t) => {
  let { children: r } = a, s = o(a, h);
  const c = b();
  return e.createElement(chakra.h2, d({ __css: c.title, ref: t }, s, { className: cx("saas-card__title", s.className) }), r);
});
__DEV__ && (S.displayName = "CardTitle");
var k = forwardRef((a, t) => {
  let { children: r } = a, s = o(a, p);
  const c = b();
  return e.createElement(chakra.p, d({ __css: c.subtitle, ref: t }, s, { className: cx("saas-card__subtitle", s.className) }), r);
});
__DEV__ && (k.displayName = "CardSubtitle");
var A = forwardRef((a, t) => {
  let { children: r } = a, s = o(a, N);
  const c = b();
  return e.createElement(chakra.div, d({ __css: c.title, ref: t }, s, { className: cx("saas-card__action", s.className) }), r);
});
__DEV__ && (A.displayName = "CardAction");
var H = forwardRef((a, t) => {
  let { children: r } = a, s = o(a, v);
  const c = d({ bgSize: "cover" }, b().media);
  return e.createElement(chakra.div, d({ __css: c, ref: t }, s, { className: cx("saas-card__media", s.className) }), r);
});
__DEV__ && (H.displayName = "CardMedia");
var w = forwardRef((a, t) => {
  let { children: r } = a, s = o(a, y);
  const c = b();
  return e.createElement(chakra.div, d({ __css: c.body, ref: t }, s, { className: cx("saas-card__body", s.className) }), r);
});
__DEV__ && (w.displayName = "CardBody");
var D = forwardRef((a, t) => {
  const r = b(), { children: s, variant: c = "ghost", spacing: m2 = 2 } = a, f2 = o(a, E), u2 = d({ display: "flex", alignItems: "center", "& > div": { flex: 1 } }, r.footer);
  return e.createElement(chakra.div, d({ __css: u2, ref: t }, f2, { className: cx("saas-card__footer", f2.className) }), /* @__PURE__ */ e.createElement(ButtonGroup, { variant: c, spacing: m2 }, s));
});
__DEV__ && (D.displayName = "CardFooter");

// app/containers/bank-list.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BankListItem = ({ logoSrc, name, to }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    C,
    {
      as: Link,
      to,
      display: "flex",
      alignItems: "center",
      width: "100%",
      p: "2",
      gap: 1,
      isHoverable: true,
      borderRadius: "md",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, { src: logoSrc, width: "12", me: "2", loading: "lazy", borderRadius: "md" }, void 0, false, {
          fileName: "app/containers/bank-list.tsx",
          lineNumber: 24,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(S, { children: name }, void 0, false, {
          fileName: "app/containers/bank-list.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/containers/bank-list.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
};

// app/routes/__app/wallet/add-bank.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Banks() {
  const { availableBanks } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { as: "h2", size: "md", mb: "4", children: "Add a bank" }, void 0, false, {
      fileName: "app/routes/__app/wallet/add-bank.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { display: "flex", flexDir: "column", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Grid, { templateColumns: { sm: "1fr", md: "repeat(4, 1fr)" }, gap: 6, children: availableBanks.map((bank) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      BankListItem,
      {
        to: `/wallet/agreements/${bank.id}`,
        name: bank.name,
        logoSrc: bank.logo
      },
      bank.id,
      false,
      {
        fileName: "app/routes/__app/wallet/add-bank.tsx",
        lineNumber: 102,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/__app/wallet/add-bank.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/__app/wallet/add-bank.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__app/wallet/add-bank.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}
var CatchBoundary = () => {
  const caught = useCatch();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Alert, { status: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertIcon, {}, void 0, false, {
      fileName: "app/routes/__app/wallet/add-bank.tsx",
      lineNumber: 122,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertTitle, { children: "Something went wrong" }, void 0, false, {
      fileName: "app/routes/__app/wallet/add-bank.tsx",
      lineNumber: 123,
      columnNumber: 9
    }, this),
    Object.values(caught.data).map((message, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertDescription, { children: message }, i, false, {
      fileName: "app/routes/__app/wallet/add-bank.tsx",
      lineNumber: 125,
      columnNumber: 11
    }, this))
  ] }, void 0, true, {
    fileName: "app/routes/__app/wallet/add-bank.tsx",
    lineNumber: 121,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/__app/wallet/add-bank.tsx",
    lineNumber: 120,
    columnNumber: 5
  }, this);
};
var ErrorBoundary = ({ error }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Alert, { status: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertIcon, {}, void 0, false, {
      fileName: "app/routes/__app/wallet/add-bank.tsx",
      lineNumber: 136,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertTitle, { children: error.statusText }, void 0, false, {
      fileName: "app/routes/__app/wallet/add-bank.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertDescription, { children: error.status === 400 ? error.message : error.statusText }, void 0, false, {
      fileName: "app/routes/__app/wallet/add-bank.tsx",
      lineNumber: 138,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__app/wallet/add-bank.tsx",
    lineNumber: 135,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/__app/wallet/add-bank.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
};
export {
  CatchBoundary,
  ErrorBoundary,
  Banks as default
};
//# sourceMappingURL=/build/routes/__app/wallet/add-bank-A2DBUUWP.js.map
