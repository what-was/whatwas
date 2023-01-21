import {
  __DEV__,
  cx,
  i
} from "/build/_shared/chunk-OGV5JWI4.js";
import {
  C
} from "/build/_shared/chunk-IALVUPGS.js";
import "/build/_shared/chunk-RZDBWPKV.js";
import "/build/_shared/chunk-KIPNPAPD.js";
import {
  require_user
} from "/build/_shared/chunk-X2FTVZ7H.js";
import {
  AnimatePresence,
  Box,
  Divider,
  Heading,
  Icon,
  Link as Link2,
  Text,
  motion
} from "/build/_shared/chunk-3LCOXCVH.js";
import {
  ButtonGroup,
  Spinner,
  chakra,
  createStylesContext,
  forwardRef,
  omitThemingProps,
  useMultiStyleConfig,
  useStyleConfig
} from "/build/_shared/chunk-4DOPGRE4.js";
import "/build/_shared/chunk-7G6WEMYH.js";
import {
  Link,
  init_esm,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-P3LUYFZE.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// empty-module:~/lib/wallet/requisition.server
var require_requisition = __commonJS({
  "empty-module:~/lib/wallet/requisition.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/lib/wallet/account.server
var require_account = __commonJS({
  "empty-module:~/lib/wallet/account.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/lib/timing.server
var require_timing = __commonJS({
  "empty-module:~/lib/timing.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/__app/wallet/index.tsx
init_esm();

// ../../node_modules/@saas-ui/react/node_modules/@saas-ui/layout/dist/index.modern.mjs
var e = __toESM(require_react(), 1);
function _() {
  return _ = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var r in a)
        Object.prototype.hasOwnProperty.call(a, r) && (e2[r] = a[r]);
    }
    return e2;
  }, _.apply(this, arguments);
}
function b(e2, t) {
  if (null == e2)
    return {};
  var a, r, n = {}, s = Object.keys(e2);
  for (r = 0; r < s.length; r++)
    t.indexOf(a = s[r]) >= 0 || (n[a] = e2[a]);
  return n;
}
var v = ["label", "orientation"];
var x = (n) => {
  const { label: s, orientation: o } = n, i2 = b(n, v), l = useStyleConfig("Divider", n), c = l.borderColor, m = _({ content: '""', position: "relative", display: "inline-block" }, "vertical" === o ? { borderLeftWidth: "1px", borderColor: c, height: "50%", left: NaN } : { borderBottomWidth: "1px", borderColor: c, width: "50%", top: "50%" }), p = _({ display: "flex", flexDirection: "vertical" === o ? "column" : "row", alignItems: "center", whiteSpace: "nowrap", color: c, _before: m, _after: m, fontSize: "md" }, l, { border: 0, borderLeftWidth: 0, borderBottomWidth: 0 }), d = _({ display: "inline-block", flexShrink: 0, mx: 2, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }, "vertical" === o ? { writingMode: "vertical-rl", textOrientation: "mixed" } : {});
  return e.createElement(Divider, _({ as: s || "vertical" === o ? "div" : "hr", orientation: o, role: "separator" }, i2, { __css: p }), s && /* @__PURE__ */ e.createElement(chakra.span, { __css: d }, s));
};
__DEV__ && (x.displayName = "Divider");
var g = ["children", "spacing", "icon", "title", "description", "actions", "footer"];
var S = ["children", "spacing"];
var k = ["spacing"];
var [w, C2] = createStylesContext("EmptyState");
var L = (t) => {
  const { children: a, spacing: n, icon: s, title: o, description: i2, actions: l, footer: c } = t, m = b(t, g);
  return e.createElement(O, m, /* @__PURE__ */ e.createElement(I, { spacing: n }, s && /* @__PURE__ */ e.createElement(z, { as: s }), /* @__PURE__ */ e.createElement(chakra.div, null, o && /* @__PURE__ */ e.createElement(D, null, o), i2 && /* @__PURE__ */ e.createElement(j, null, i2)), a, l && /* @__PURE__ */ e.createElement(W, null, l), c && /* @__PURE__ */ e.createElement(B, null, c)));
};
__DEV__ && (L.displayName = "EmptyState");
var O = (t) => {
  const { children: a } = t, n = b(t, S), s = useMultiStyleConfig("EmptyState", t), o = omitThemingProps(n), c = _({ display: "flex", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" }, s.container);
  return e.createElement(w, { value: s }, /* @__PURE__ */ e.createElement(chakra.div, _({}, o, { __css: c, className: cx("saas-empty-state", t.className) }), a));
};
__DEV__ && (O.displayName = "EmptyStateContainer");
var z = forwardRef((t, a) => {
  const r = _({ boxSize: 10 }, C2().icon);
  return e.createElement(Icon, _({ ref: a, role: "presentation", sx: r }, t, { className: cx("saas-empty-state__icon", t.className) }));
});
__DEV__ && (z.displayName = "EmptyStateIcon");
var D = (t) => {
  const a = _({ mb: 1 }, C2().title);
  return e.createElement(Heading, _({ sx: a, size: "md" }, t, { className: cx("saas-empty-state__title", t.className) }));
};
__DEV__ && (D.displayName = "EmptyStateTitle");
var j = (t) => {
  const a = _({ color: "muted", fontSize: "md" }, C2().description);
  return e.createElement(Text, _({ sx: a }, t, { className: cx("saas-empty-state__description", t.className) }));
};
__DEV__ && (j.displayName = "EmptyStateDescription");
var I = (t) => {
  const a = b(t, k), n = _({}, C2().body);
  return e.createElement(chakra.div, _({ __css: n }, a, { className: cx("saas-empty-state__body", t.className) }));
};
__DEV__ && (I.displayName = "EmptyStateBody");
var W = (t) => {
  const a = C2();
  return e.createElement(ButtonGroup, _({ sx: a.actions }, t, { className: cx("saas-empty-state__actions", t.className) }));
};
__DEV__ && (W.displayName = "EmptyStateActions");
var B = (t) => {
  const a = C2();
  return e.createElement(chakra.footer, _({ __css: a.footer }, t, { className: cx("saas-empty-state__footer", t.className) }));
};
__DEV__ && (B.displayName = "EmptyStateFooter");
var M = ["children", "isLoading", "variant", "size", "colorScheme", "color", "emptyColor", "thickness", "speed", "label", "spinner", "spacing"];
var T = chakra(motion.div);
var A = (a) => {
  const n = useStyleConfig("Loader", a), { children: s, isLoading: o = true, size: i2, colorScheme: l, color: c, emptyColor: m, thickness: p, speed: y, label: f, spinner: h, spacing: N = 2 } = a, v2 = b(a, M), x2 = { size: i2, colorScheme: l, color: c, emptyColor: m, thickness: p, speed: y, label: f }, g2 = _({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", "& > *:not(style) ~ *:not(style)": { marginTop: N } }, n), S2 = e.useMemo(() => !o, []);
  let k2 = s;
  return "string" == typeof s && (k2 = /* @__PURE__ */ e.createElement(chakra.div, null, s)), /* @__PURE__ */ e.createElement(AnimatePresence, null, o && /* @__PURE__ */ e.createElement(T, _({ initial: { opacity: S2 ? 0 : 1 }, animate: { opacity: 1 }, exit: { opacity: 0 } }, v2, { __css: g2, className: cx("saas-loader", a.className) }), h || /* @__PURE__ */ e.createElement(Spinner, x2), k2));
};
__DEV__ && (A.displayName = "Loader");
var P = ["href"];
var q = forwardRef((t, a) => {
  const r = C(), { href: n } = t, s = b(t, P), o = /* @__PURE__ */ e.createElement(Link2, _({ ref: a, href: n }, s));
  return r ? /* @__PURE__ */ e.createElement(r, { href: n }, o) : o;
});
__DEV__ && (q.displayName = "Link");

// ../../node_modules/react-icons/lib/esm/iconBase.js
var import_react3 = __toESM(require_react());

// ../../node_modules/react-icons/lib/esm/iconContext.js
var import_react2 = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react2.default.createContext && import_react2.default.createContext(DefaultContext);

// ../../node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
      s = arguments[i2];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e2) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i2]))
        t[p[i2]] = s[p[i2]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i2) {
    return import_react3.default.createElement(node.tag, __assign({
      key: i2
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react3.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react3.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react3.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react3.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// ../../node_modules/react-icons/rx/index.esm.js
function RxPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 15 15", "fill": "none" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "clipRule": "evenodd", "d": "M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z", "fill": "currentColor" } }] })(props);
}

// ../../node_modules/react-icons/bs/index.esm.js
function BsWallet2(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" } }] })(props);
}

// app/routes/__app/wallet/index.tsx
var import_requisition = __toESM(require_requisition());
var import_user = __toESM(require_user());
var import_account = __toESM(require_account());
var import_timing = __toESM(require_timing());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var defaultCountry = "NL";
var AddBankButton = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  i,
  {
    rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RxPlus, {}, void 0, false, {
      fileName: "app/routes/__app/wallet/index.tsx",
      lineNumber: 67,
      columnNumber: 16
    }, this),
    as: Link,
    to: `add-bank?country=${defaultCountry}`,
    colorScheme: "green",
    variant: "ghost",
    prefetch: "intent",
    rel: "prefetch",
    label: "Add bank"
  },
  void 0,
  false,
  {
    fileName: "app/routes/__app/wallet/index.tsx",
    lineNumber: 66,
    columnNumber: 3
  },
  this
);
function WalletPage() {
  const { walletAccounts } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Box,
      {
        mb: "6",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { as: "h2", size: "md", children: "My Wallet" }, void 0, false, {
            fileName: "app/routes/__app/wallet/index.tsx",
            lineNumber: 89,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: [
            walletAccounts?.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddBankButton, {}, void 0, false, {
              fileName: "app/routes/__app/wallet/index.tsx",
              lineNumber: 93,
              columnNumber: 37
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(i, { as: Link, to: `.`, colorScheme: "red", variant: "outline", children: "Delete all transactions" }, void 0, false, {
              fileName: "app/routes/__app/wallet/index.tsx",
              lineNumber: 95,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/__app/wallet/index.tsx",
            lineNumber: 92,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/__app/wallet/index.tsx",
        lineNumber: 83,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      L,
      {
        icon: BsWallet2,
        title: "No connected banks",
        description: "You haven't connected any bank accounts yet. Connect a bank account to start tracking your transactions.",
        actions: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddBankButton, {}, void 0, false, {
          fileName: "app/routes/__app/wallet/index.tsx",
          lineNumber: 105,
          columnNumber: 18
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/__app/wallet/index.tsx",
        lineNumber: 100,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(O, { colorScheme: "purple", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(z, { as: BsWallet2 }, void 0, false, {
        fileName: "app/routes/__app/wallet/index.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(D, { children: "Whoops, something went wrong" }, void 0, false, {
        fileName: "app/routes/__app/wallet/index.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(j, { children: "Where do you want to go?" }, void 0, false, {
        fileName: "app/routes/__app/wallet/index.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(W, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddBankButton, {}, void 0, false, {
        fileName: "app/routes/__app/wallet/index.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/__app/wallet/index.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/__app/wallet/index.tsx",
      lineNumber: 109,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/__app/wallet/index.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__app/wallet/index.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}
export {
  WalletPage as default
};
//# sourceMappingURL=/build/routes/__app/wallet/index-I6KOLOQA.js.map
