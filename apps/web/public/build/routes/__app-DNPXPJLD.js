import {
  __DEV__,
  createContext,
  cx,
  dataAttr,
  filterUndefined,
  i,
  import_lodash,
  memoizedGet,
  objectFilter,
  omit,
  runIfFn
} from "/build/_shared/chunk-OGV5JWI4.js";
import "/build/_shared/chunk-RZDBWPKV.js";
import {
  css,
  isStyleProp,
  propNames,
  resolveStyleConfig
} from "/build/_shared/chunk-KIPNPAPD.js";
import {
  require_user
} from "/build/_shared/chunk-X2FTVZ7H.js";
import {
  REDIRECT_ROUTES,
  require_dist
} from "/build/_shared/chunk-52X7NMXT.js";
import {
  Box,
  Collapse,
  Container,
  Flex,
  Image,
  Tooltip,
  motion,
  useBreakpointValue,
  useDisclosure,
  useId
} from "/build/_shared/chunk-3LCOXCVH.js";
import {
  ButtonGroup,
  IconButton,
  chakra,
  createStylesContext,
  emotion_styled_browser_esm_default,
  forwardRef,
  omitThemingProps,
  require_jsx_runtime,
  require_react_fast_compare,
  useMultiStyleConfig,
  useStyleConfig,
  useTheme
} from "/build/_shared/chunk-4DOPGRE4.js";
import "/build/_shared/chunk-7G6WEMYH.js";
import {
  Link,
  NavLink,
  Outlet,
  ThemeContext,
  init_esm,
  require_jsx_dev_runtime,
  require_react,
  useLocation
} from "/build/_shared/chunk-P3LUYFZE.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/__app.tsx
init_esm();

// ../../node_modules/@chakra-ui/icons/node_modules/@chakra-ui/system/dist/chunk-NLMMK76H.mjs
var import_react2 = __toESM(require_react(), 1);
function useTheme2() {
  const theme = (0, import_react2.useContext)(
    ThemeContext
  );
  if (!theme) {
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  }
  return theme;
}

// ../../node_modules/@chakra-ui/icons/node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs
var import_react3 = __toESM(require_react(), 1);
var ColorModeContext = (0, import_react3.createContext)({});
ColorModeContext.displayName = "ColorModeContext";
function useColorMode() {
  const context = (0, import_react3.useContext)(ColorModeContext);
  if (context === void 0) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
}

// ../../node_modules/@chakra-ui/icons/node_modules/@chakra-ui/system/dist/chunk-7V3ZYTH7.mjs
function useChakra() {
  const colorModeResult = useColorMode();
  const theme = useTheme2();
  return { ...colorModeResult, theme };
}

// ../../node_modules/@chakra-ui/icons/node_modules/@chakra-ui/shared-utils/dist/index.mjs
var cx2 = (...classNames) => classNames.filter(Boolean).join(" ");

// ../../node_modules/@chakra-ui/icons/node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs
var import_react4 = __toESM(require_react(), 1);
var import_react_fast_compare = __toESM(require_react_fast_compare(), 1);
function useStyleConfigImpl(themeKey, props = {}) {
  var _a2;
  const { styleConfig: styleConfigProp, ...rest } = props;
  const { theme, colorMode } = useChakra();
  const themeStyleConfig = themeKey ? memoizedGet(theme, `components.${themeKey}`) : void 0;
  const styleConfig = styleConfigProp || themeStyleConfig;
  const mergedProps = (0, import_lodash.default)(
    { theme, colorMode },
    (_a2 = styleConfig == null ? void 0 : styleConfig.defaultProps) != null ? _a2 : {},
    filterUndefined(omit(rest, ["children"]))
  );
  const stylesRef = (0, import_react4.useRef)({});
  if (styleConfig) {
    const getStyles = resolveStyleConfig(styleConfig);
    const styles = getStyles(mergedProps);
    const isStyleEqual = (0, import_react_fast_compare.default)(stylesRef.current, styles);
    if (!isStyleEqual) {
      stylesRef.current = styles;
    }
  }
  return stylesRef.current;
}
function useStyleConfig2(themeKey, props = {}) {
  return useStyleConfigImpl(themeKey, props);
}

// ../../node_modules/@chakra-ui/icons/node_modules/@chakra-ui/system/dist/chunk-3JUGYQRQ.mjs
var allPropNames = /* @__PURE__ */ new Set([
  ...propNames,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]);
var validHTMLProps = /* @__PURE__ */ new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
function shouldForwardProp(prop) {
  return validHTMLProps.has(prop) || !allPropNames.has(prop);
}

// ../../node_modules/@chakra-ui/icons/node_modules/@chakra-ui/object-utils/dist/index.mjs
function assignAfter(target, ...sources) {
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  const result = { ...target };
  for (const nextSource of sources) {
    if (nextSource == null)
      continue;
    for (const nextKey in nextSource) {
      if (!Object.prototype.hasOwnProperty.call(nextSource, nextKey))
        continue;
      if (nextKey in result)
        delete result[nextKey];
      result[nextKey] = nextSource[nextKey];
    }
  }
  return result;
}

// ../../node_modules/@chakra-ui/icons/node_modules/@chakra-ui/system/dist/chunk-GORXMMUN.mjs
var import_react5 = __toESM(require_react(), 1);
var _a;
var emotion_styled = (_a = emotion_styled_browser_esm_default.default) != null ? _a : emotion_styled_browser_esm_default;
var toCSSObject = ({ baseStyle }) => (props) => {
  const { theme, css: cssProp, __css, sx, ...rest } = props;
  const styleProps = objectFilter(rest, (_, prop) => isStyleProp(prop));
  const finalBaseStyle = runIfFn(baseStyle, props);
  const finalStyles = assignAfter(
    {},
    __css,
    finalBaseStyle,
    filterUndefined(styleProps),
    sx
  );
  const computedCSS = css(finalStyles)(props.theme);
  return cssProp ? [computedCSS, cssProp] : computedCSS;
};
function styled(component, options) {
  const { baseStyle, ...styledOptions } = options != null ? options : {};
  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }
  const styleObject = toCSSObject({ baseStyle });
  const Component = emotion_styled(
    component,
    styledOptions
  )(styleObject);
  const chakraComponent = import_react5.default.forwardRef(function ChakraComponent(props, ref) {
    const { colorMode, forced } = useColorMode();
    return import_react5.default.createElement(Component, {
      ref,
      "data-theme": forced ? colorMode : void 0,
      ...props
    });
  });
  return chakraComponent;
}

// ../../node_modules/@chakra-ui/icons/node_modules/@chakra-ui/system/dist/chunk-OLGE5QAF.mjs
function factory() {
  const cache = /* @__PURE__ */ new Map();
  return new Proxy(styled, {
    apply(target, thisArg, argArray) {
      return styled(...argArray);
    },
    get(_, element) {
      if (!cache.has(element)) {
        cache.set(element, styled(element));
      }
      return cache.get(element);
    }
  });
}
var chakra2 = factory();

// ../../node_modules/@chakra-ui/icons/node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs
var import_react6 = __toESM(require_react(), 1);
function forwardRef2(component) {
  return (0, import_react6.forwardRef)(component);
}

// ../../node_modules/@chakra-ui/icons/node_modules/@chakra-ui/icon/dist/chunk-DKFDJSXF.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var fallbackIcon = {
  path: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
};
var Icon = forwardRef2((props, ref) => {
  const {
    as: element,
    viewBox,
    color = "currentColor",
    focusable = false,
    children,
    className,
    __css,
    ...rest
  } = props;
  const _className = cx2("chakra-icon", className);
  const customStyles = useStyleConfig2("Icon", props);
  const styles = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color,
    ...__css,
    ...customStyles
  };
  const shared = {
    ref,
    focusable,
    className: _className,
    __css: styles
  };
  const _viewBox = viewBox != null ? viewBox : fallbackIcon.viewBox;
  if (element && typeof element !== "string") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra2.svg, { as: element, ...shared, ...rest });
  }
  const _path = children != null ? children : fallbackIcon.path;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra2.svg, { verticalAlign: "middle", viewBox: _viewBox, ...shared, ...rest, children: _path });
});
Icon.displayName = "Icon";

// ../../node_modules/@chakra-ui/icons/node_modules/@chakra-ui/icon/dist/chunk-QODHG6BI.mjs
var import_react7 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function createIcon(options) {
  const {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    displayName,
    defaultProps = {}
  } = options;
  const path = import_react7.Children.toArray(options.path);
  const Comp = forwardRef2((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { ref, viewBox, ...defaultProps, ...props, children: path.length ? path : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fill: "currentColor", d: pathDefinition }) }));
  Comp.displayName = displayName;
  return Comp;
}

// ../../node_modules/@chakra-ui/icons/dist/chunk-PHCA2RMO.mjs
var HamburgerIcon = createIcon({
  displayName: "HamburgerIcon",
  viewBox: "0 0 24 24",
  d: "M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
});

// ../../node_modules/@chakra-ui/icons/dist/chunk-QAHQKGYV.mjs
var ChevronRightIcon = createIcon({
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
  displayName: "ChevronRightIcon"
});

// ../../node_modules/@chakra-ui/icons/dist/chunk-RGZJAHFA.mjs
var ChevronDownIcon = createIcon({
  displayName: "ChevronDownIcon",
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
});

// ../../node_modules/@saas-ui/collapse/dist/index.modern.mjs
var a = __toESM(require_react(), 1);
function s() {
  return s = Object.assign ? Object.assign.bind() : function(e4) {
    for (var o2 = 1; o2 < arguments.length; o2++) {
      var a3 = arguments[o2];
      for (var r2 in a3)
        Object.prototype.hasOwnProperty.call(a3, r2) && (e4[r2] = a3[r2]);
    }
    return e4;
  }, s.apply(this, arguments);
}
function n(e4, o2) {
  if (null == e4)
    return {};
  var a3, r2, l2 = {}, s3 = Object.keys(e4);
  for (r2 = 0; r2 < s3.length; r2++)
    o2.indexOf(a3 = s3[r2]) >= 0 || (l2[a3] = e4[a3]);
  return l2;
}
var t = ["isCollapsible"];
var i2 = ["className"];
var [c, p] = createContext({ name: "UseCollapseReturn" });
var u = (r2 = {}) => {
  const { isCollapsible: c4 = true } = r2, p3 = n(r2, t), u3 = `collapse-${useId()}`, { isOpen: g, onToggle: f, onOpen: m3, onClose: C2 } = useDisclosure(p3), b = a.useCallback((e4 = {}) => {
    const { className: o2 } = e4, a3 = n(e4, i2);
    return c4 ? s({ className: cx("saas-collapse-toggle", o2), onClick: () => f(), "aria-expanded": g.toString(), "aria-controls": u3 }, a3) : {};
  }, [c4, g]), O = a.useCallback((e4 = {}) => s({ id: u3, in: g }, e4), [g]);
  return { isCollapsible: c4, isOpen: g, getToggleProps: b, getCollapseProps: O, onToggle: f, onOpen: m3, onClose: C2 };
};

// ../../node_modules/@saas-ui/react-utils/dist/index.modern.mjs
var r = __toESM(require_react(), 1);
var n2 = (r2, e4) => {
  var a3;
  const n4 = (i3 = r2, y = null == (a3 = useTheme().__breakpoints) ? void 0 : a3.toArrayValue, Array.isArray(i3) ? i3 : "object" == typeof i3 ? null == y ? void 0 : y(i3) : null != i3 ? [i3] : []);
  var i3, y;
  return useBreakpointValue(n4, e4);
};

// ../../node_modules/@saas-ui/app-shell/dist/index.modern.mjs
var e = __toESM(require_react(), 1);
function s2() {
  return s2 = Object.assign ? Object.assign.bind() : function(e4) {
    for (var a3 = 1; a3 < arguments.length; a3++) {
      var r2 = arguments[a3];
      for (var n4 in r2)
        Object.prototype.hasOwnProperty.call(r2, n4) && (e4[n4] = r2[n4]);
    }
    return e4;
  }, s2.apply(this, arguments);
}
var c2 = ["navbar", "sidebar", "aside", "footer", "children"];
var [o, m] = createStylesContext("AppShell");
var p2 = (a3) => {
  const l2 = useMultiStyleConfig("AppShell", a3), m3 = omitThemingProps(a3), { navbar: p3, sidebar: f, aside: h, footer: u3, children: d } = m3, b = function(e4, a4) {
    if (null == e4)
      return {};
    var r2, n4, t3 = {}, i3 = Object.keys(e4);
    for (n4 = 0; n4 < i3.length; n4++)
      a4.indexOf(r2 = i3[n4]) >= 0 || (t3[r2] = e4[r2]);
    return t3;
  }(m3, c2), x = s2({ flexDirection: "column" }, l2.container), v2 = s2({ flex: 1, minHeight: 0, minWidth: 0 }, l2.inner), O = s2({ flex: 1, flexDirection: "column", minWidth: 0 }, l2.main);
  return e.createElement(o, { value: l2 }, /* @__PURE__ */ e.createElement(Flex, s2({}, b, { sx: x, className: cx("saas-app-shell", a3.className) }), p3, /* @__PURE__ */ e.createElement(Flex, { sx: v2, className: "saas-app-shell__inner" }, f, /* @__PURE__ */ e.createElement(Flex, { sx: O, className: "saas-app-shell__main" }, d), h), u3));
};
__DEV__ && (p2.displayName = "AppShell");

// ../../node_modules/@saas-ui/sidebar/dist/index.modern.mjs
var e3 = __toESM(require_react(), 1);
var import_react13 = __toESM(require_react(), 1);

// ../../node_modules/@saas-ui/sidebar/node_modules/@chakra-ui/react-context/dist/index.mjs
var import_react11 = __toESM(require_react(), 1);
function getErrorMessage(hook, provider) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}
function createContext3(options = {}) {
  const {
    name,
    strict = true,
    hookName = "useContext",
    providerName = "Provider",
    errorMessage
  } = options;
  const Context = (0, import_react11.createContext)(void 0);
  Context.displayName = name;
  function useContext4() {
    var _a2;
    const context = (0, import_react11.useContext)(Context);
    if (!context && strict) {
      const error = new Error(
        errorMessage != null ? errorMessage : getErrorMessage(hookName, providerName)
      );
      error.name = "ContextError";
      (_a2 = Error.captureStackTrace) == null ? void 0 : _a2.call(Error, error, useContext4);
      throw error;
    }
    return context;
  }
  return [Context.Provider, useContext4, Context];
}

// ../../node_modules/@saas-ui/provider/dist/index.modern.mjs
var n3 = __toESM(require_react(), 1);
var import_react12 = __toESM(require_react(), 1);
var l = n3.createContext({});
var c3 = () => n3.useContext(l);
var u2 = n3.createContext(null);
var m2 = u2.Provider;
var v = ({ children: n4 }) => /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, n4);
function C() {
  const n4 = c3();
  return null != n4 && n4.linkComponent ? n4.linkComponent : v;
}

// ../../node_modules/@saas-ui/sidebar/dist/index.modern.mjs
function P() {
  return P = Object.assign ? Object.assign.bind() : function(e4) {
    for (var a3 = 1; a3 < arguments.length; a3++) {
      var t3 = arguments[a3];
      for (var n4 in t3)
        Object.prototype.hasOwnProperty.call(t3, n4) && (e4[n4] = t3[n4]);
    }
    return e4;
  }, P.apply(this, arguments);
}
function w(e4, a3) {
  if (null == e4)
    return {};
  var t3, n4, s3 = {}, l2 = Object.keys(e4);
  for (n4 = 0; n4 < l2.length; n4++)
    a3.indexOf(t3 = l2[n4]) >= 0 || (s3[t3] = e4[t3]);
  return s3;
}
var [z, T] = function(e4 = {}) {
  const { strict: n4 = true, errorMessage: s3 = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider", name: l2 } = e4, o2 = (0, import_react13.createContext)(void 0);
  return o2.displayName = l2, [o2.Provider, function e5() {
    var a3;
    const l3 = (0, import_react13.useContext)(o2);
    if (!l3 && n4) {
      const t3 = new Error(s3);
      throw t3.name = "ContextError", null == (a3 = Error.captureStackTrace) || a3.call(Error, t3, e5), t3;
    }
    return l3;
  }, o2];
}({ name: "SidebarContext", strict: false });
var [j, D] = createContext3({ name: "SidebarStylesContext", hookName: "useSidebarItemStyles", providerName: "<Sidebar />" });
var G = ["spacing", "children", "breakpoints", "className", "motionPreset", "isOpen", "onOpen", "onClose"];
var M = ["sx", "wrapperProps"];
var A = ["direction"];
var B = chakra(motion.nav);
var V = { slideInOut: { enter: { left: 0, transition: { type: "spring", duration: 0.6, bounce: 0.15 } }, exit: { left: "-100%" } }, none: {} };
var L = forwardRef((a3, t3) => {
  var n4, s3, m3;
  const p3 = useMultiStyleConfig("Sidebar", a3), d = null == (n4 = useTheme().components.Sidebar) ? void 0 : n4.defaultProps, u3 = n2(null != (s3 = a3.variant) ? s3 : null == d ? void 0 : d.variant, { fallback: "base" }), v2 = n2(null != (m3 = a3.size) ? m3 : null == d ? void 0 : d.size, { fallback: "base" }), b = "condensed" === u3, _ = omitThemingProps(a3), { spacing: h = 4, children: g, breakpoints: E = { base: true, lg: false }, className: y, motionPreset: O = "slideInOut", isOpen: C2, onOpen: I, onClose: k } = _, S = w(_, G), T2 = useBreakpointValue(E, { fallback: void 0 }), D2 = useBreakpointValue(E), M2 = void 0 === T2, A2 = D2 && !b, L2 = void 0 !== C2, W2 = useDisclosure({ defaultIsOpen: L2 ? C2 : !A2, isOpen: C2, onOpen: I, onClose: k }), { isOpen: q, onClose: F2, onOpen: H2 } = W2;
  e3.useEffect(() => {
    M2 && D2 || b || L2 || (D2 ? F2() : H2());
  }, [M2, b, D2]);
  const J2 = P({ "& > *:not(style) ~ *:not(style, .saas-resize-handle, .saas-sidebar__toggle-button + *)": { marginTop: h }, display: "flex", flexDirection: "column" }, A2 ? { position: "absolute", zIndex: "modal", top: 0, left: { base: "-100%", lg: "0" }, bottom: 0 } : { position: "relative" }), K2 = P({}, W2, { breakpoints: E, isMobile: T2, variant: u3, size: v2 });
  return e3.createElement(z, { value: K2 }, /* @__PURE__ */ e3.createElement(j, { value: p3 }, /* @__PURE__ */ e3.createElement(B, P({ ref: t3, initial: false, animate: !M2 && (!A2 || q ? "enter" : "exit"), variants: V[b ? "none" : O || "none"], __css: P({}, J2, p3.container) }, S, { id: W2.getDisclosureProps().id, className: cx("saas-sidebar", y), "data-condensed": dataAttr(b), "data-collapsible": dataAttr(A2) }), g)));
});
L.defaultProps = { variant: "default" }, L.displayName = "Sidebar";
var W = (a3) => {
  const { sx: t3, wrapperProps: s3 } = a3, l2 = w(a3, M), o2 = T(), i3 = D(), r2 = P({ display: null != o2 && o2.isMobile ? "block" : "none", height: 8 }, i3.toggleWrapper), c4 = P({ position: "fixed", top: 3, left: 4 }, i3.toggle, t3), p3 = a3.icon ? runIfFn(a3.icon, { isOpen: o2.isOpen }) : /* @__PURE__ */ e3.createElement(HamburgerIcon, null);
  return e3.createElement(chakra.div, P({}, s3, { __css: r2, className: cx("saas-sidebar__toggle-button", null == s3 ? void 0 : s3.className) }), /* @__PURE__ */ e3.createElement(IconButton, P({ variant: "ghost", sx: c4, "aria-label": "Toggle sidebar" }, o2.getButtonProps(a3), l2, { icon: p3 })));
};
W.displayName = "SidebarToggleButton";
var F = (a3) => {
  const { direction: t3 = "column" } = a3, s3 = w(a3, A), l2 = P({ display: "flex", flexDirection: t3 }, D().section);
  return e3.createElement(chakra.div, P({ __css: l2 }, s3, { className: cx("saas-sidebar__section", a3.className) }));
};
F.displayName = "SidebarSection";
var H = ["children", "spacing", "orientation"];
var J = (a3) => {
  const t3 = useStyleConfig("Nav", a3), { children: s3, spacing: l2, orientation: o2 = "vertical" } = a3, i3 = w(a3, H), r2 = P({ "& > *:not(style) ~ *:not(style)": { mt: "vertical" === o2 ? l2 : void 0, me: "horizontal" === o2 ? l2 : void 0 } }, t3);
  return e3.createElement(chakra.nav, P({}, i3, { __css: r2, className: cx("saas-nav", a3.className), "data-orientation": o2 }), s3);
};
J.defaultProps = { spacing: 0 }, J.displayName = "Nav";
var [K, Q] = createContext3({ name: "NavGroupStylesContext", hookName: "useNavItemStyles", providerName: "<NavItem />" });
var [R, U] = createContext3({ name: "NavItemStylesContext", hookName: "useNavItemStyles", providerName: "<NavItem />" });
var X = ["children", "className"];
var Y = ["leftIcon", "collapseIcon", "children"];
var Z = ["title", "icon", "isCollapsible", "defaultIsOpen", "onOpen", "onClose", "children"];
var $ = (a3) => {
  const { children: t3, className: s3 } = a3, l2 = w(a3, X), o2 = e3.isValidElement(t3) ? e3.cloneElement(t3, { "aria-hidden": true, focusable: false }) : t3, i3 = cx("saas-nav-group__icon", s3);
  return e3.createElement(chakra.span, P({ display: "inline-flex", alignSelf: "center", flexShrink: 0 }, l2, { className: i3 }), o2);
};
var ee = (a3) => {
  const { leftIcon: t3, collapseIcon: s3 = ({ isOpen: a4 }) => /* @__PURE__ */ e3.createElement(a4 ? ChevronDownIcon : ChevronRightIcon, null), children: l2 } = a3, o2 = w(a3, Y), i3 = Q(), { getToggleProps: r2, isOpen: c4, isCollapsible: m3 } = p(), p3 = P({ marginEnd: 2 }, i3.icon), d = r2(o2);
  return e3.createElement(chakra.div, P({}, d, { __css: i3.title, className: cx("saas-nav-group__title", a3.className, d.className) }), t3 && /* @__PURE__ */ e3.createElement($, { __css: p3 }, t3), /* @__PURE__ */ e3.createElement(chakra.span, { flex: "1" }, runIfFn(l2, { isOpen: c4 })), m3 && /* @__PURE__ */ e3.createElement($, null, runIfFn(s3, { isOpen: c4 })));
};
ee.displayName = "NavGroupTitle";
var ae = (a3) => {
  const t3 = Q();
  return e3.createElement(chakra.div, P({}, a3, { __css: t3.content, className: cx("saas-nav-group__content", a3.className) }));
};
var te = (a3) => {
  const { title: t3, icon: s3, isCollapsible: o2, children: i3 } = a3, r2 = w(a3, Z), c4 = useMultiStyleConfig("NavGroup", a3), m3 = u(a3), { getCollapseProps: p3 } = m3, d = t3 && /* @__PURE__ */ e3.createElement(ee, { leftIcon: s3 }, t3);
  let v2 = /* @__PURE__ */ e3.createElement(ae, null, i3);
  return o2 && (v2 = /* @__PURE__ */ e3.createElement(Collapse, p3(), v2)), /* @__PURE__ */ e3.createElement(K, { value: c4 }, /* @__PURE__ */ e3.createElement(c, { value: m3 }, /* @__PURE__ */ e3.createElement(chakra.div, P({ __css: P({ userSelect: "none" }, c4.container) }, r2, { className: cx("saas-nav-group", a3.className), role: "group" }), d, v2)));
};
te.displayName = "NavGroup", te.defaultProps = { defaultIsOpen: true, isCollapsible: false };
var ne = ["children"];
var se = ["className", "children"];
var le = ["href", "label", "icon", "inset", "className", "tooltip", "tooltipProps", "isActive", "children"];
var oe = forwardRef((a3, t3) => {
  let { children: s3 } = a3, l2 = w(a3, ne);
  const o2 = U();
  return e3.createElement(chakra.span, P({ ref: t3, __css: o2.label }, l2, { className: cx("saas-nav-item__label", l2.className) }), s3);
});
oe.displayName = "NavItemLabel";
var ie = (a3) => {
  const t3 = U(), { children: s3 } = a3, l2 = w(a3, se), o2 = e3.Children.only(s3), i3 = e3.isValidElement(o2) ? e3.cloneElement(o2, { focusable: "false", "aria-hidden": true }) : null;
  return e3.createElement(chakra.span, P({}, l2, { className: cx("saas-nav-item__icon", a3.className), __css: P({ flexShrink: 0 }, t3.icon) }), i3);
};
ie.displayName = "NavItemIcon";
var re = forwardRef((a3, t3) => {
  const s3 = omitThemingProps(a3), { href: o2 = "#", label: r2, icon: c4, inset: m3, className: p3, tooltip: d, tooltipProps: u3 = { placement: "right", openDelay: 400 }, isActive: b, children: _ } = s3, h = w(s3, le), g = C(), { onClose: E, variant: y } = T() || {}, x = "condensed" === y, O = useMultiStyleConfig("NavItem", a3);
  let C2 = _ || r2, I = d;
  "string" == typeof C2 && (!I && x && (I = C2), C2 = /* @__PURE__ */ e3.createElement(oe, { hidden: x }, C2));
  let k = /* @__PURE__ */ e3.createElement(chakra.a, P({}, h, { ref: t3, href: o2, className: "nav-item__link", "data-active": dataAttr(b), __css: O.link }), /* @__PURE__ */ e3.createElement(chakra.span, { __css: P({}, O.inner, { pl: m3 }), className: "saas-nav-item__inner" }, c4 && /* @__PURE__ */ e3.createElement(ie, null, c4), C2));
  return o2 && "#" !== o2 && (k = /* @__PURE__ */ e3.createElement(g, { href: o2 }, k)), /* @__PURE__ */ e3.createElement(R, { value: O }, /* @__PURE__ */ e3.createElement(Tooltip, P({ label: I }, u3), /* @__PURE__ */ e3.createElement(chakra.div, { __css: O.item, onClick: E, "data-condensed": dataAttr(x), className: cx("saas-nav-item", p3) }, k)));
});
re.displayName = "NavItem";

// app/routes/__app.tsx
var import_remix = __toESM(require_dist());
var import_user = __toESM(require_user());

// app/components/logo.tsx
init_esm();

// app/shared/assets/logo-white.png
var logo_white_default = "/build/_assets/logo-white-TH5MA6N5.png";

// app/components/logo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var LOGO_WIDTHS = /* @__PURE__ */ ((LOGO_WIDTHS2) => {
  LOGO_WIDTHS2[LOGO_WIDTHS2["xs"] = 96] = "xs";
  LOGO_WIDTHS2[LOGO_WIDTHS2["sm"] = 128] = "sm";
  LOGO_WIDTHS2[LOGO_WIDTHS2["md"] = 160] = "md";
  LOGO_WIDTHS2[LOGO_WIDTHS2["lg"] = 192] = "lg";
  LOGO_WIDTHS2[LOGO_WIDTHS2["xl"] = 256] = "xl";
  return LOGO_WIDTHS2;
})(LOGO_WIDTHS || {});
function Logo(props) {
  const { size, to, className } = props;
  const width = LOGO_WIDTHS[size || "md"];
  const LogoImage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { className, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { width, src: logo_white_default, alt: "Logo" }, void 0, false, {
    fileName: "app/components/logo.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/logo.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
  if (to) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoImage, {}, void 0, false, {
      fileName: "app/components/logo.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/logo.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoImage, {}, void 0, false, {
    fileName: "app/components/logo.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}

// app/routes/__app.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var isActiveRoute = (route, location) => {
  return location.pathname === route;
};
function Layout() {
  const sidebarWidth = useBreakpointValue(
    { base: 0, md: "96" },
    { fallback: "96", ssr: true }
  );
  const { onToggle, isOpen } = u({
    defaultIsOpen: !!(sidebarWidth && Number(sidebarWidth) > 96) || true
  });
  const location = useLocation();
  if (!sidebarWidth) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Container,
      {
        h: "full",
        gap: "4",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        p: "2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            Box,
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
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { flexGrow: 2, justifyContent: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: REDIRECT_ROUTES.AUTHENTICATED, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Logo, {}, void 0, false, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 63,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 62,
                  columnNumber: 13
                }, this) }, void 0, false, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 61,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.UserButton, { afterSignOutUrl: REDIRECT_ROUTES.GUEST }, void 0, false, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 66,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/__app.tsx",
              lineNumber: 51,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            Box,
            {
              flexGrow: "1",
              maxH: "calc(100vh - 40px)",
              overflowY: "auto",
              w: "full",
              py: 2,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 75,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
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
      true,
      {
        fileName: "app/routes/__app.tsx",
        lineNumber: 43,
        columnNumber: 7
      },
      this
    );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    p2,
    {
      sidebar: isOpen && sidebarWidth ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(L, { h: "full", w: sidebarWidth, isOpen, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(F, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Box,
          {
            display: "flex",
            alignItems: "center",
            gap: "4",
            justifyContent: "space-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: REDIRECT_ROUTES.AUTHENTICATED, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Logo, {}, void 0, false, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 94,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 93,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.UserButton, { afterSignOutUrl: REDIRECT_ROUTES.GUEST }, void 0, false, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 96,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/__app.tsx",
            lineNumber: 87,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(F, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            re,
            {
              as: NavLink,
              to: "/",
              children: "Home"
            },
            void 0,
            false,
            {
              fileName: "app/routes/__app.tsx",
              lineNumber: 100,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            re,
            {
              as: NavLink,
              to: "/wallet",
              isActive: isActiveRoute("/wallet", location),
              children: "Wallet"
            },
            void 0,
            false,
            {
              fileName: "app/routes/__app.tsx",
              lineNumber: 107,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(F, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ButtonGroup, { size: "sm", isAttached: true, variant: "outline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(i, { onClick: onToggle, children: "Toggle" }, void 0, false, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 117,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__app.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) : null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { as: "main", flex: "1", py: "2", px: "4", children: [
        sidebarWidth && Number(sidebarWidth) <= 96 && !isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(i, { onClick: onToggle, position: "fixed", bottom: "2", children: "Sidebar" }, void 0, false, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this),
        !isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { mt: "1", mb: "4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: REDIRECT_ROUTES.AUTHENTICATED, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Logo, {}, void 0, false, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 133,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 137,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__app.tsx",
        lineNumber: 124,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/__app.tsx",
      lineNumber: 82,
      columnNumber: 5
    },
    this
  );
}
export {
  Layout as default
};
//# sourceMappingURL=/build/routes/__app-DNPXPJLD.js.map
