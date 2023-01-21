import {
  extendTheme,
  theme,
  toHex,
  transparentize,
  withDefaultColorScheme
} from "/build/_shared/chunk-4DOPGRE4.js";

// ../../node_modules/@chakra-ui/theme-tools/dist/chunk-H4E5VM26.mjs
function dlv_es_default(t, e, l, n, r) {
  for (e = e.split ? e.split(".") : e, n = 0; n < e.length; n++)
    t = t ? t[e[n]] : r;
  return t === r ? l : t;
}
var getColor = (theme2, color, fallback) => {
  const hex = dlv_es_default(theme2, `colors.${color}`, color);
  try {
    toHex(hex);
    return hex;
  } catch {
    return fallback != null ? fallback : "#000000";
  }
};
var transparentize2 = (color, opacity) => (theme2) => {
  const raw = getColor(theme2, color);
  return transparentize(raw, 1 - opacity);
};

// ../../node_modules/@chakra-ui/theme-tools/dist/chunk-7P3W45AB.mjs
function mode(light, dark) {
  return (props) => props.colorMode === "dark" ? dark : light;
}
function orient(options) {
  const { orientation, vertical, horizontal } = options;
  if (!orientation)
    return {};
  return orientation === "vertical" ? vertical : horizontal;
}

// ../../node_modules/@chakra-ui/theme-tools/dist/chunk-7SOXEYKO.mjs
function isDecimal(value) {
  return !Number.isInteger(parseFloat(value.toString()));
}
function replaceWhiteSpace(value, replaceValue = "-") {
  return value.replace(/\s+/g, replaceValue);
}
function escape(value) {
  const valueStr = replaceWhiteSpace(value.toString());
  if (valueStr.includes("\\."))
    return value;
  return isDecimal(value) ? valueStr.replace(".", `\\.`) : value;
}
function addPrefix(value, prefix = "") {
  return [prefix, escape(value)].filter(Boolean).join("-");
}
function toVarRef(name, fallback) {
  return `var(${escape(name)}${fallback ? `, ${fallback}` : ""})`;
}
function toVar(value, prefix = "") {
  return `--${addPrefix(value, prefix)}`;
}
function cssVar(name, options) {
  const cssVariable = toVar(name, options == null ? void 0 : options.prefix);
  return {
    variable: cssVariable,
    reference: toVarRef(cssVariable, getFallback(options == null ? void 0 : options.fallback))
  };
}
function getFallback(fallback) {
  if (typeof fallback === "string")
    return fallback;
  return fallback == null ? void 0 : fallback.reference;
}

// ../../node_modules/@chakra-ui/anatomy/dist/chunk-ZN6IUO2A.mjs
function anatomy(name, map = {}) {
  let called = false;
  function assert() {
    if (!called) {
      called = true;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function parts(...values) {
    assert();
    for (const part of values) {
      ;
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function extend(...parts2) {
    for (const part of parts2) {
      if (part in map)
        continue;
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function selectors() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.selector])
    );
    return value;
  }
  function classnames() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.className])
    );
    return value;
  }
  function toPart(part) {
    const el = ["container", "root"].includes(part != null ? part : "") ? [name] : [name, part];
    const attr = el.filter(Boolean).join("__");
    const className = `chakra-${attr}`;
    const partObj = {
      className,
      selector: `.${className}`,
      toString: () => part
    };
    return partObj;
  }
  const __type = {};
  return {
    parts,
    toPart,
    extend,
    selectors,
    classnames,
    get keys() {
      return Object.keys(map);
    },
    __type
  };
}

// ../../node_modules/@chakra-ui/anatomy/dist/chunk-HAKT6JCA.mjs
var accordionAnatomy = anatomy("accordion").parts("root", "container", "button", "panel").extend("icon");
var alertAnatomy = anatomy("alert").parts("title", "description", "container").extend("icon", "spinner");
var avatarAnatomy = anatomy("avatar").parts("label", "badge", "container").extend("excessLabel", "group");
var breadcrumbAnatomy = anatomy("breadcrumb").parts("link", "item", "container").extend("separator");
var buttonAnatomy = anatomy("button").parts();
var checkboxAnatomy = anatomy("checkbox").parts("control", "icon", "container").extend("label");
var circularProgressAnatomy = anatomy("progress").parts("track", "filledTrack").extend("label");
var drawerAnatomy = anatomy("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var editableAnatomy = anatomy("editable").parts(
  "preview",
  "input",
  "textarea"
);
var formAnatomy = anatomy("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
);
var formErrorAnatomy = anatomy("formError").parts("text", "icon");
var inputAnatomy = anatomy("input").parts("addon", "field", "element");
var listAnatomy = anatomy("list").parts("container", "item", "icon");
var menuAnatomy = anatomy("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider");
var modalAnatomy = anatomy("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var numberInputAnatomy = anatomy("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
var pinInputAnatomy = anatomy("pininput").parts("field");
var popoverAnatomy = anatomy("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton");
var progressAnatomy = anatomy("progress").parts(
  "label",
  "filledTrack",
  "track"
);
var radioAnatomy = anatomy("radio").parts(
  "container",
  "control",
  "label"
);
var selectAnatomy = anatomy("select").parts("field", "icon");
var sliderAnatomy = anatomy("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
);
var statAnatomy = anatomy("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
);
var switchAnatomy = anatomy("switch").parts(
  "container",
  "track",
  "thumb"
);
var tableAnatomy = anatomy("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
);
var tabsAnatomy = anatomy("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
);
var tagAnatomy = anatomy("tag").parts(
  "container",
  "label",
  "closeButton"
);
var cardAnatomy = anatomy("card").parts(
  "container",
  "header",
  "body",
  "footer"
);

// ../../node_modules/@saas-ui/theme/dist/index.modern.mjs
var d = { parts: anatomy("app-shell").parts("container", "inner", "main").keys, defaultProps: { variant: "fullscreen" }, variants: { static: {}, fullscreen: { container: { position: "absolute", inset: 0 } } }, baseStyle: () => ({ container: {} }) };
function b(e) {
  const { theme: t, colorScheme: o } = e, r = getColor(t, `${o}.100`, o), n = transparentize2(`${o}.200`, 0.16)(t);
  return mode(r, n)(e);
}
var h = { parts: anatomy("banner").parts("container", "icon", "content", "title", "description", "actions", "close").keys, baseStyle: { container: { px: 4, py: 3 }, content: { display: "flex", flex: 1, flexDirection: ["column", null, "row"] }, title: { fontWeight: "bold", lineHeight: 6, marginEnd: 2 }, description: { lineHeight: 6, marginEnd: 2 }, actions: { marginEnd: 2 }, icon: { flexShrink: 0, marginEnd: 3, w: 5, h: 6 } }, variants: { subtle: (e) => {
  const { colorScheme: t } = e;
  return { container: { bg: b(e) }, icon: { color: mode(`${t}.500`, `${t}.200`)(e) } };
}, solid: (e) => {
  const { colorScheme: t } = e;
  return { container: { bg: `${t}.500`, color: "white" } };
} }, defaultProps: { variant: "subtle", colorScheme: "blue" } };
var p = { defaultProps: { variant: "shadow" }, parts: ["container", "header", "title", "subtitle", "body", "footer"], baseStyle: (e) => ({ container: { rounded: "lg", transitionProperty: "common", transitionDuration: "normal" }, header: { p: 4 }, media: { mb: 2 }, title: { fontSize: "xl", fontWeight: "semibold" }, subtitle: { color: mode("gray.400", "gray.300")(e) }, body: { p: 4 }, footer: { p: 4 } }), variants: { shadow: (e) => {
  const { isHoverable: t } = e;
  return { container: { bg: mode("white", "whiteAlpha.100")(e), boxShadow: "sm", borderWidth: "1px", borderColor: mode("blackAlpha.200", "whiteAlpha.300")(e), _hover: { borderColor: t && mode("blackAlpha.300", "whiteAlpha.400")(e) } } };
}, outline: (e) => {
  const { colorScheme: t, isHoverable: o } = e, r = t && mode(`${t}.500`, `${t}.400`)(e), i = t && mode(`${t}.600`, `${t}.500`)(e);
  return { container: { bg: "transparent", boxShadow: "none", borderWidth: "1px", borderColor: r, _hover: { borderColor: o && i } } };
}, solid: (e) => {
  const { colorScheme: t, isHoverable: o } = e, r = t ? mode(`${t}.500`, `${t}.300`)(e) : mode("blackAlpha.100", "whiteAlpha.100")(e), i = t ? mode(`${t}.600`, `${t}.400`)(e) : mode("blackAlpha.200", "whiteAlpha.200")(e);
  return { container: { border: "none", boxShadow: "none", bg: r, color: t ? "white" : "inherit", _hover: { bg: o && i } } };
} } };
var m = anatomy("emptystate").parts("container", "body", "icon", "title", "descripton", "actions", "footer");
var f = m;
var g = { parts: m.keys, baseStyle: (e) => {
  const { colorScheme: t } = e;
  return { icon: { boxSize: [10, null, 12], color: mode(`${t}.500`, `${t}.200`)(e) }, title: { mt: 8 }, actions: { mt: 8 } };
}, variants: { centered: (e) => ({ body: { display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center" } }) } };
var y = { variants: { horizontal: { container: { display: "flex", alignItems: "center", flexDirection: "row-reverse", justifyContent: "flex-end" } } } };
anatomy("list").parts("list", "item", "button", "header", "primary", "secondary", "tertiary", "action");
var u;
var S;
var v;
var x;
var w = { baseStyle: (e) => ({ button: { transitionProperty: "common", transitionDuration: "normal", outline: "none", _hover: { bg: mode("blackAlpha.100", "whiteAlpha.200")(e) }, _focusVisible: { boxShadow: "outline" }, _focus: { bg: mode("blackAlpha.100", "whiteAlpha.200")(e) }, _active: { bg: mode("blackAlpha.200", "whiteAlpha.300")(e) } } }), variants: { "structured-list": { icon: { marginEnd: 4 } } }, sizes: { condensed: { item: { py: 1 }, label: { p: 0 } } } };
var k = { defaultProps: { variant: "fill" }, baseStyle: { fontSize: "sm" }, variants: { fill: { flex: 1, height: "100%" }, overlay: (e) => ({ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, bg: mode("whiteAlpha.300", "blackAlpha.300")(e) }), fullscreen: (e) => ({ position: "fixed", top: 0, right: 0, bottom: 0, left: 0, bg: mode("white", "gray.800")(e), zIndex: "modal" }) } };
var A = { parts: anatomy("nav-group").parts("container", "title", "icon", "content").keys, baseStyle: (e) => ({ container: { "&:not(:last-of-type)": { mb: 4 } }, title: { display: "flex", alignItems: "center", px: 3, my: 1, height: 6, fontSize: "sm", fontWeight: "medium", color: "muted", transitionProperty: "common", transitionDuration: "normal", "&.saas-collapse-toggle .chakra-icon": { opacity: 0 }, "&.saas-collapse-toggle": { cursor: "pointer", borderRadius: "md", _hover: { bg: "blackAlpha.100", "& .chakra-icon": { opacity: 1 }, _dark: { bg: "whiteAlpha.200" } } } }, content: {} }) };
var $ = { parts: anatomy("nav-item").parts("item", "link", "inner", "icon", "label").keys, defaultProps: { size: "sm", colorScheme: "primary", variant: "neutral" }, baseStyle: (e) => ({ item: { my: "2px", color: "gray.900", _dark: { color: "whiteAlpha.900" } }, link: { display: "flex", rounded: "md", justifyContent: "flex-start", alignItems: "center", textDecoration: "none", transitionProperty: "common", transitionDuration: "normal", _hover: { textDecoration: "none" }, _focusVisible: { boxShadow: "outline" }, "[data-condensed] &": { padding: 0 } }, inner: { display: "flex", flex: 1, alignItems: "center", justifyContent: "stretch", "[data-condensed] &": { justifyContent: "center" } }, label: { "[data-condensed] &": { display: "none" } }, icon: { display: "flex", transitionProperty: "common", transitionDuration: "normal", "[data-condensed] &": { me: 0, alignItems: "center", justifyContent: "center" } } }), sizes: { xs: { link: null == (u = theme.components.Button.sizes) ? void 0 : u.xs, icon: { me: 2, fontSize: "xs" } }, sm: { link: null == (S = theme.components.Button.sizes) ? void 0 : S.sm, icon: { me: 2, fontSize: "sm" } }, md: { link: null == (v = theme.components.Button.sizes) ? void 0 : v.md, icon: { me: 2, fontSize: "md" } }, lg: { link: null == (x = theme.components.Button.sizes) ? void 0 : x.lg, icon: { me: 2, fontSize: "lg" } } }, variants: { neutral: (e) => ({ link: { _hover: { bg: mode("blackAlpha.100", "whiteAlpha.200")(e) }, _active: { bg: mode("blackAlpha.200", "whiteAlpha.300")(e) } }, icon: { opacity: 0.8, "[data-active] &": { opacity: 1 } } }), subtle: (e) => {
  const { colorScheme: t, theme: o } = e;
  mode(`${t}.700`, `${t}.200`)(e);
  const r = mode(transparentize2(`${t}.500`, 0.3)(o), transparentize2(`${t}.500`, 0.3)(o))(e);
  return { link: { _hover: { bg: mode("blackAlpha.100", "whiteAlpha.200")(e) }, _active: { bg: r, fontWeight: "semibold", color: mode(`${t}.600`, `${t}.100`)(e) } } };
}, solid: (e) => {
  const { colorScheme: t } = e, o = `${t}.500`;
  return { link: { _hover: { bg: mode("blackAlpha.100", "whiteAlpha.200")(e) }, _active: { bg: o }, color: "white" }, icon: { color: "white" }, label: {} };
} } };
var z = anatomy("persona").parts("container", "details", "avatar", "label", "secondaryLabel", "tertiaryLabel");
var _ = (e) => ({ color: mode("gray.500", "whiteAlpha.600")(e), overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
var C = { parts: z.keys, defaultProps: { size: "md" }, baseStyle: (e) => ({ container: {}, avatar: {}, label: {}, secondaryLabel: _(e), tertiaryLabel: _(e) }), sizes: { "2xs": { details: { ms: 2 }, label: { fontSize: "xs" }, secondaryLabel: { display: "none" }, tertiaryLabel: { display: "none" } }, xs: { details: { ms: 2 }, label: { fontSize: "md" }, secondaryLabel: { display: "none" }, tertiaryLabel: { display: "none" } }, sm: { details: { ms: 2 }, label: { fontSize: "md" }, secondaryLabel: { fontSize: "sm" }, tertiaryLabel: { display: "none" } }, md: { details: { ms: 2 }, label: { fontSize: "md" }, secondaryLabel: { fontSize: "sm" }, tertiaryLabel: { display: "none" } }, lg: { details: { ms: 3 }, label: { fontSize: "md" }, secondaryLabel: { fontSize: "sm" }, tertiaryLabel: { fontSize: "sm" } }, xl: { details: { ms: 3 }, label: { fontSize: "xl" }, secondaryLabel: { fontSize: "md" }, tertiaryLabel: { fontSize: "md" } }, "2xl": { details: { ms: 4 }, label: { fontSize: "2xl" }, secondaryLabel: { fontSize: "lg" }, tertiaryLabel: { fontSize: "lg" } } } };
var P = { defaultProps: { colorScheme: "teal" }, baseStyle: (e) => {
  const { colorScheme: t } = e;
  return { bar: { bg: mode(`${t}.500`, `${t}.300`)(e) } };
} };
function W() {
  return W = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o)
        Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, W.apply(this, arguments);
}
function L(e) {
  const { theme: t, colorScheme: o } = e, r = getColor(t, `${o}.100`, o), n = transparentize2(`${o}.200`, 0.16)(t);
  return mode(r, n)(e);
}
var D = { parts: anatomy("stepper").parts("container", "steps", "icon", "content", "title", "separator").keys, defaultProps: { variant: "solid", colorScheme: "blue", orientation: "horizontal", size: "lg" }, baseStyle: (e) => {
  const { orientation: t, size: o } = e, r = "lg" === o ? 2 : 1, a = orient({ orientation: t, vertical: { borderLeftWidth: r, ms: "lg" === o ? 4 : 3, ps: 5 }, horizontal: {} }), i = orient({ orientation: t, vertical: { flexDirection: "column", alignItems: "stretch" }, horizontal: { flexDirection: "row", alignItems: { base: "flex-start", sm: "center" }, position: "relative" } }), l = orient({ orientation: t, vertical: { flexDirection: "row" }, horizontal: { flexDirection: { base: "column", sm: "row" }, flex: { base: "1 1", sm: "inherit" }, position: "relative", _before: { content: '""', transitionProperty: "common", transitionDuration: "normal", borderTopWidth: r, borderColor: "inherit", display: "block", position: { base: "absolute", sm: "static" }, left: { base: "calc(-50% + 24px)", sm: 0 }, right: { base: "calc(50% + 24px)", sm: 0 }, top: 6 }, "&:first-of-type:before": { display: "none" } } }), c = orient({ orientation: t, vertical: {}, horizontal: { mt: { base: 2, sm: 0 }, textAlign: "center" } }), s = orient({ orientation: t, vertical: { minHeight: 4, borderLeftWidth: r, borderTopWidth: 0, mx: "lg" === o ? 4 : 3 }, horizontal: { borderTopWidth: r, mx: { base: 0, sm: 3 }, mt: { base: 5, sm: 0 }, alignSelf: { base: "flex-start", sm: "center" }, flex: { base: "inherit", sm: 1 } } }), d2 = orient({ orientation: t, vertical: { me: 2 }, horizontal: { me: { base: 0, sm: 2 } } });
  return { container: { flexDirection: "column" }, steps: i, step: W({}, l, { py: 2 }), title: c, separator: W({}, s, { transitionProperty: "common", transitionDuration: "normal" }), icon: W({}, d2, { bg: "whiteAlpha.400", lineHeight: 1, flexShrink: 0, transitionProperty: "common", transitionDuration: "normal" }), content: a };
}, variants: { subtle: (e) => {
  const { colorScheme: t } = e;
  return { icon: { bg: mode("blackAlpha.300", "whiteAlpha.200")(e), color: mode("blackAlpha.600", "whiteAlpha.600")(e), "[data-active] &": { bg: L(e), color: mode(`${t}.500`, `${t}.200`)(e) }, "[data-completed] &": { bg: L(e), color: mode(`${t}.500`, `${t}.200`)(e) } } };
}, solid: (e) => {
  const { colorScheme: t } = e;
  return { icon: { bg: "gray.500", color: mode("white", "gray.800")(e), "[data-active] &": { bg: mode(`${t}.500`, `${t}.200`)(e) }, "[data-completed] &": { bg: mode(`${t}.500`, `${t}.200`)(e) } }, separator: { "&[data-active]": { borderColor: mode(`${t}.500`, `${t}.200`)(e) } }, step: { "&[data-active]:before, &[data-completed]:before": { borderColor: mode(`${t}.500`, `${t}.200`)(e) } } };
} }, sizes: { md: { icon: { boxSize: 6, fontSize: "sm" }, title: { fontSize: "md" }, step: { _before: { top: 5 } } }, lg: { icon: { boxSize: 8 }, title: { fontSize: "lg" } } } };
var I = anatomy("sidebar").parts("container", "overlay", "section", "toggleWrapper", "toggle");
var B = extendTheme({ colors: { primary: theme.colors.blue }, semanticTokens: { colors: { "presence.online": "green.500", "presence.offline": "gray.400", "presence.busy": "orange.500", "presence.dnd": "red.500", "presence.away": "gray.400" } }, components: { AppShell: d, Banner: h, Card: p, EmptyState: g, FormLayout: { defaultProps: { spacing: 4 } }, Form: y, FormLegend: y, Hotkeys: { parts: ["container", "group", "groupTitle", "item", "command", "then"], baseStyle: { container: { fontSize: "md" }, group: { my: 2, py: 2 }, groupTitle: { py: 2, fontWeight: "semibold", fontSize: "sm" }, item: { display: "flex", alignItems: "center", textAlign: "start", flex: "0 0 auto", py: 2 }, then: { mr: 1, fontSize: "sm", color: "muted" } } }, List: w, Loader: k, NavGroup: A, NavItem: $, Persona: C, NProgress: P, SearchInput: { parts: ["input", "reset"], baseStyle: { input: { pr: 8 } }, sizes: { sm: { reset: { fontSize: "0.7em" } }, lg: { input: { pr: 10 } } } }, Stepper: D, Sidebar: { parts: I.keys, defaultProps: { variant: "default" }, baseStyle: (e) => {
  const { colorScheme: t } = e;
  return { container: { bg: t ? `${t}.500` : mode("white", "gray.800")(e), display: "flex", flexDirection: "column", borderRightWidth: "1px", "&[data-condensed]": { alignItems: "center" } }, overlay: { bg: "blackAlpha.200" } };
}, variants: { default: (e) => ({ container: { width: "280px", maxWidth: ["100vw", "320px"], minWidth: "220px", py: 3 }, section: { px: 4 }, toggleWrapper: { h: 8 } }), condensed: (e) => ({ container: { width: "12", py: 3 }, toggleWrapper: { display: "none" } }) } } } });
var H = { global: (e) => ({ body: { WebkitFontSmoothing: "antialiased", TextRendering: "optimizelegibility" }, "*, *::before, &::after": { borderColor: mode("gray.200", "whiteAlpha.200")(e), wordWrap: "break-word" } }) };
var T = { black: "#0e1012", gray: { 50: "#f9fafa", 100: "#f1f1f2", 200: "#e7e7e8", 300: "#d3d4d5", 400: "#abadaf", 500: "#7d7f83", 600: "#52555a", 700: "#33373d", 800: "#1d2025", 900: "#171a1d" }, purple: { 50: "#f9f6fd", 100: "#e5daf8", 200: "#d3bef4", 300: "#b795ec", 400: "#a379e7", 500: "#8952e0", 600: "#7434db", 700: "#6023c0", 800: "#4f1d9e", 900: "#3b1676" }, pink: { 50: "#fdf5f9", 100: "#f8d9e7", 200: "#f3b9d3", 300: "#eb8db8", 400: "#e56ba2", 500: "#dc3882", 600: "#c4246c", 700: "#a01d58", 800: "#7d1745", 900: "#5d1133" }, red: { 50: "#fdf6f5", 100: "#f8d9d8", 200: "#f1b8b4", 300: "#e98d87", 400: "#e4726c", 500: "#dc4a41", 600: "#d2140a", 700: "#ac0900", 800: "#930800", 900: "#6d0600" }, orange: { 50: "#fdfaf6", 100: "#f9ebdb", 200: "#f1d4b1", 300: "#e6b273", 400: "#dc9239", 500: "#c37b24", 600: "#a5681e", 700: "#835318", 800: "#674113", 900: "#553610" }, yellow: { 50: "#fffefb", 100: "#fff8e9", 200: "#feecbd", 300: "#fddc87", 400: "#fbc434", 500: "#d2a01e", 600: "#a88018", 700: "#836413", 800: "#624b0e", 900: "#513e0c" }, green: { 50: "#f7fdfb", 100: "#d2f2e7", 200: "#9fe3cd", 300: "#64d2ad", 400: "#1dbd88", 500: "#0ea371", 600: "#0c875e", 700: "#096949", 800: "#07563c", 900: "#064731" }, teal: { 50: "#f1fcfc", 100: "#c0f1f4", 200: "#84e4e9", 300: "#2dd1da", 400: "#22b2ba", 500: "#1d979e", 600: "#187b80", 700: "#125f64", 800: "#0f5053", 900: "#0d4244" }, cyan: { 50: "#f4fbfd", 100: "#d0eef7", 200: "#bae7f3", 300: "#a2deee", 400: "#53c2e1", 500: "#2ab4d9", 600: "#24a2c4", 700: "#1e86a2", 800: "#196e85", 900: "#135567" }, blue: { 50: "#f1f6fd", 100: "#cde0f6", 200: "#a8c8f0", 300: "#7fafe8", 400: "#5896e1", 500: "#347fdb", 600: "#236abf", 700: "#1b5192", 800: "#164278", 900: "#123662" }, indigo: { 50: "#f8f7fc", 100: "#e1ddf5", 200: "#c8c0ec", 300: "#a89de2", 400: "#9789dc", 500: "#7f6ed4", 600: "#6a58c9", 700: "#5546a1", 800: "#483c88", 900: "#342b62" } };
var R = W({ primary: T.purple, secondary: T.cyan }, T);
var j = { outline: `0 0 0 2px ${transparentize2(R.primary[500], 0.6)({ colors: R })}` };
var E = { parts: alertAnatomy.keys, defaultProps: { size: "sm" }, baseStyle: { container: { borderRadius: "md" } }, variants: { snackbar: (e) => {
  const { colorScheme: t } = e;
  return { container: { bg: mode("white", "black")(e), borderWidth: "1px" }, icon: { color: mode(`${t}.500`, `${t}.500`)(e), "& .chakra-spinner": { color: mode("black", "white")(e) } }, title: { fontWeight: "semibold" }, description: { color: mode("gray.500", "gray.400")(e) } };
} } };
var O = (e) => {
  const { colorScheme: t } = e;
  return "gray" === t ? { base: mode("gray.100", "whiteAlpha.300")(e), hover: mode("gray.200", "whiteAlpha.400")(e), active: mode("gray.300", "whiteAlpha.500")(e) } : "white" === t ? { base: "whiteAlpha.900", hover: "whiteAlpha.700", active: "whiteAlpha.500" } : { base: mode(`${t}.500`, `${t}.500`)(e), hover: mode(`${t}.600`, `${t}.600`)(e), active: mode(`${t}.700`, `${t}.700`)(e) };
};
var F = { yellow: { bg: "yellow.400", hoverBg: "yellow.500", activeBg: "yellow.600", color: "black" }, cyan: { bg: "cyan.400", color: "black", hoverBg: "cyan.500", activeBg: "cyan.600" } };
var N = (e) => {
  var t;
  const { colorScheme: o } = e;
  if ("white" === o)
    return { bg: "white", color: "black", _hover: { bg: mode("whiteAlpha.900", "whiteAlpha.900")(e), _disabled: { bg: "white" } }, _active: { bg: mode("whiteAlpha.800", "whiteAlpha.800")(e) }, _disabled: { color: "blackAlpha.700" } };
  const { base: r, hover: i, active: l } = O(e), { color: n = "gray" === o ? mode("black", "white")(e) : "white", bg: c = r, hoverBg: s = i, activeBg: d2 = l } = null != (t = F[o]) ? t : {};
  return { bg: c, color: n, _hover: { bg: s, _disabled: { bg: c } }, _active: { bg: d2 } };
};
var V = (e) => {
  const { colorScheme: t } = e, { base: o, hover: r, active: a } = O(e);
  return W({ borderColor: "gray" === t ? r : o, color: o }, M(e), { _hover: { borderColor: "gray" === t ? a : r } });
};
var M = (e) => {
  const { colorScheme: t, theme: o } = e;
  if ("gray" === t)
    return { color: mode("inherit", "whiteAlpha.900")(e), _hover: { bg: mode("blackAlpha.100", "whiteAlpha.200")(e) }, _active: { bg: mode("blackAlpha.200", "whiteAlpha.300")(e) } };
  if ("white" === t)
    return { color: "white", _hover: { bg: "whiteAlpha.200" }, _active: "whiteAlpha.300" };
  const r = transparentize2(`${t}.200`, 0.12)(o), i = transparentize2(`${t}.200`, 0.24)(o);
  return { color: mode(`${t}.600`, `${t}.200`)(e), bg: "transparent", _hover: { bg: mode(`${t}.50`, r)(e) }, _active: { bg: mode(`${t}.100`, i)(e) } };
};
var G = { defaultProps: { size: "sm" }, variants: { solid: N, ghost: M, outline: V, subtle: (e) => {
  const { colorScheme: t, theme: o } = e;
  if ("gray" === t)
    return { color: mode("inherit", "whiteAlpha.900")(e), bg: mode("blackAlpha.100", "whiteAlpha.100")(e), _hover: { bg: mode("blackAlpha.200", "whiteAlpha.200")(e) }, _active: { bg: mode("blackAlpha.300", "whiteAlpha.300")(e) } };
  const r = "white" === t ? "white" : mode(`${t}.500`, `${t}.200`)(e), i = transparentize2(r, 0.1)(o), n = transparentize2(r, 0.16)(o), c = transparentize2(r, 0.24)(o);
  return { color: "white" === t ? "white" : mode(`${t}.600`, `${t}.200`)(e), bg: i, _hover: { bg: n }, _active: { bg: c } };
}, elevated: (e) => W({ shadow: "md" }, N(e)), link: (e) => {
  const { colorScheme: t } = e;
  return { padding: 0, height: "auto", lineHeight: "normal", verticalAlign: "baseline", color: "white" === t ? "white" : mode(`${t}.500`, `${t}.200`)(e), _hover: { textDecoration: "underline", _disabled: { textDecoration: "none" } }, _active: { color: "white" === t ? "whiteAlpha.800" : mode(`${t}.700`, `${t}.500`)(e) } };
}, primary: (e) => N(W({}, e, { variant: "solid", colorScheme: "primary" })), secondary: (e) => V(W({}, e, { variant: "outline", colorScheme: "secondary" })) } };
var K = { parts: anatomy("card").parts("container", "header", "title", "subtitle", "body", "footer").keys, defaultProps: { variant: "shadow" }, baseStyle: () => ({ container: { rounded: "lg" }, header: { p: 4 }, title: { fontSize: "lg", fontWeight: "semibold" }, subtitle: { color: "muted", fontSize: "md" }, body: { p: 4 }, footer: { p: 4 } }), variants: { shadow: (e) => {
  const { isHoverable: t } = e;
  return { container: { borderColor: mode("blackAlpha.200", "whiteAlpha.50")(e), _hover: { borderColor: t && mode("blackAlpha.300", "whiteAlpha.300")(e) } } };
}, outline: (e) => {
  const { colorScheme: t, isHoverable: o } = e, r = t ? mode(`${t}.500`, `${t}.500`)(e) : mode("blackAlpha.200", "whiteAlpha.300")(e), i = t ? mode(`${t}.600`, `${t}.600`)(e) : mode("blackAlpha.300", "whiteAlpha.400")(e);
  return { container: { bg: "transparent", boxShadow: "none", borderWidth: "1px", borderColor: r, _hover: { borderColor: o && i } } };
}, solid: (e) => {
  const { colorScheme: t, isHoverable: o } = e, r = t ? mode(`${t}.500`, `${t}.500`)(e) : mode("blackAlpha.100", "whiteAlpha.100")(e), i = t ? mode(`${t}.600`, `${t}.600`)(e) : mode("blackAlpha.200", "whiteAlpha.200")(e);
  return { container: { border: "none", boxShadow: "none", bg: r, color: t ? "white" : "inherit", _hover: { bg: o && i } } };
} } };
var q = { parts: f.keys, baseStyle: (e) => {
  const { colorScheme: t } = e;
  return { icon: { boxSize: [10, null, 12], color: mode(`${t}.500`, `${t}.500`)(e) } };
} };
var J = { defaultProps: { focusBorderColor: "primary.500" }, variants: { outline: (e) => ({ field: { borderColor: mode("blackAlpha.300", "whiteAlpha.300")(e), _hover: { borderColor: mode("blackAlpha.400", "whiteAlpha.400")(e) } } }) }, sizes: { sm: { field: { borderRadius: "md" }, addon: { borderRadius: "md" } }, md: { field: { px: 3, h: 9 }, addon: { px: 3, h: 9 } } } };
var Q = { FormLabel: { variants: { horizontal: { mb: 0, marginStart: "0.5rem" } } }, Input: J, NumberInput: J, PinInput: J, Textarea: J, Select: J };
var U = { defaultProps: { variant: "solid" }, variants: { basic: { opacity: 0.6 }, solid: (e) => ({ bg: mode("blackAlpha.300", "whiteAlpha.300")(e), borderWidth: 0, borderBottomWidth: 0, padding: "1px", display: "inline-block", borderRadius: "3px", minW: "20px", textAlign: "center", mr: 1, ":last-child": { mr: 0 } }) } };
var X = { baseStyle: (e) => ({ list: { borderWidth: mode(1, 0)(e), borderColor: mode("blackAlpha.200", "whiteAlpha.300")(e), boxShadow: mode("lg", "dark-lg")(e) }, divider: { borderColor: mode("blackAlpha.200", "whiteAlpha.300")(e) }, groupTitle: { mx: 3 } }), variants: { dialog: () => ({ item: { px: 6 }, groupTitle: { color: "muted", px: 3 } }) } };
var Y = { defaultProps: { colorScheme: "primary" }, baseStyle: (e) => {
  const { colorScheme: t } = e;
  return { bar: { bg: mode(`${t}.500`, `${t}.500`)(e) } };
} };
var Z = { baseStyle: (e) => ({ bg: mode("whiteAlpha.800", "blackAlpha.800")(e), boxShadow: "sm", border: "1px", borderColor: mode("gray.200", "gray.700")(e) }) };
var ee = { defaultProps: { variant: "outline", colorScheme: "primary", size: "md" }, variants: { solid: (e) => {
  const { colorScheme: t } = e;
  return { icon: { bg: mode("gray.500", "gray.600")(e), color: "white", "[data-active] &": { bg: `${t}.500` }, "[data-completed] &": { bg: `${t}.500` } }, separator: { "&[data-active]": { borderColor: `${t}.500` } }, step: { "&[data-active]:before, &[data-completed]": { borderColor: `${t}.500` } } };
}, outline: (e) => {
  const { colorScheme: t } = e;
  return { icon: { bg: mode("gray.500", "gray.600")(e), color: "white", "[data-active] &": { bg: `${t}.500`, outlineColor: `${t}.500`, outlineWidth: "1px", outlineStyle: "solid", outlineOffset: "2px" }, "[data-completed] &": { bg: `${t}.500` } }, separator: { "&[data-active]": { borderColor: `${t}.500` } }, step: { "&[data-active]:before, &[data-completed]": { borderColor: `${t}.500` } } };
} } };
var te = cssVar("tooltip-bg");
var oe = cssVar("tooltip-fg");
var re = cssVar("popper-arrow-bg");
var ae = extendTheme({ config: { useSystemColorMode: false }, colors: R, fonts: { heading: "InterVariable, Inter, sans-serif", body: "InterVariable, Inter, sans-serif" }, fontSizes: { xs: "0.75rem", sm: "0.8125rem", md: "0.875rem", lg: "1", xl: "1.125rem", "2xl": "1.5rem", "3xl": "1.875rem", "4xl": "2.25rem", "5xl": "3rem", "6xl": "3.75rem", "7xl": "4.5rem", "8xl": "6rem", "9xl": "8rem" }, textStyles: { h1: { fontSize: ["4xl", null, "6xl"], fontWeight: "extrabold", lineHeight: "1.2", letterSpacing: "-2%" }, h2: { fontSize: ["36px", "48px"], fontWeight: "900", lineHeight: "110%", letterSpacing: "-1%" }, h3: { fontSize: ["lg", "xl"], fontWeight: "900", lineHeight: "110%", letterSpacing: "-1%" }, subtitle: { fontSize: ["lg", null, "2xl"], fontWeight: "normal" } }, sizes: { container: { sm: "30em", md: "48em", lg: "62em", xl: "80em", "2xl": "96em" } }, styles: H, components: W({ Alert: E, Button: G, Card: K, Checkbox: { baseStyle: (e) => {
  const { colorScheme: t } = e;
  return { control: { _checked: { borderColor: `${t}.500`, bg: `${t}.500`, color: "white" } } };
} }, CloseButton: { defaultProps: { size: "sm" } }, EmptyState: q, Heading: { defaultProps: { size: "lg" } }, Kbd: U, Link: { baseStyle: {} }, Menu: X, Modal: { baseStyle: (e) => ({ closeButton: { top: 4, insetEnd: 4 } }) }, NProgress: Y, Progress: { defaultProps: { colorScheme: "primary" }, baseStyle: (e) => {
  const { colorScheme: t } = e;
  return { track: { borderRadius: "md" }, filledTrack: { bg: `${t}.500` } };
} }, Property: { baseStyle: { label: { color: "muted" } } }, Toaster: Z, Text: { baseStyle: {} }, Radio: { baseStyle: (e) => {
  const { colorScheme: t } = e;
  return { control: { _checked: { borderColor: `${t}.500`, bg: `${t}.500`, color: "white" } } };
} }, Slider: { defaultProps: { colorScheme: "primary" }, baseStyle: (e) => {
  const { colorScheme: t } = e;
  return { filledTrack: { bg: `${t}.500` } };
} }, Stepper: ee, Switch: { baseStyle: (e) => {
  const { colorScheme: t } = e;
  return { track: { _checked: { bg: `${t}.500` } } };
} }, Tooltip: { baseStyle: (e) => ({ display: "flex", [te.variable]: "colors.white", [oe.variable]: "colors.blackAlpha.900", _dark: { [te.variable]: "colors.gray.700", [oe.variable]: "colors.whiteAlpha.900" }, px: "8px", py: "2px", bg: [te.reference], [re.variable]: [te.reference], borderRadius: "sm", fontWeight: "medium", fontSize: "xs", boxShadow: "md", maxW: "320px", zIndex: "tooltip", borderWidth: "1px" }) } }, Q), shadows: j, semanticTokens: { colors: { muted: { default: "gray.500", _dark: "gray.400" } } } }, withDefaultColorScheme({ colorScheme: "primary", components: ["Radio", "Switch", "Checkbox"] }), B);

export {
  anatomy,
  alertAnatomy,
  drawerAnatomy,
  inputAnatomy,
  menuAnatomy,
  modalAnatomy,
  popoverAnatomy,
  progressAnatomy,
  switchAnatomy,
  getColor,
  transparentize2 as transparentize,
  mode,
  cssVar,
  ae
};
//# sourceMappingURL=/build/_shared/chunk-RZDBWPKV.js.map
