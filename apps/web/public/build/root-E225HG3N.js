import "/build/_shared/chunk-AUYLHJJM.js";
import {
  getSeo
} from "/build/_shared/chunk-CALHA5WK.js";
import {
  require_ssr
} from "/build/_shared/chunk-K3I4BZ64.js";
import {
  a
} from "/build/_shared/chunk-IALVUPGS.js";
import {
  ae,
  alertAnatomy,
  anatomy,
  cssVar as cssVar2,
  drawerAnatomy,
  getColor,
  inputAnatomy,
  menuAnatomy,
  modalAnatomy,
  mode,
  popoverAnatomy,
  progressAnatomy,
  switchAnatomy,
  transparentize
} from "/build/_shared/chunk-RZDBWPKV.js";
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
  defineStyleConfig
} from "/build/_shared/chunk-KIPNPAPD.js";
import {
  ClientStyleContext,
  ServerStyleContext
} from "/build/_shared/chunk-VWYOXRKX.js";
import {
  init_tslib_es6,
  require_dist,
  tslib_es6_exports
} from "/build/_shared/chunk-52X7NMXT.js";
import "/build/_shared/chunk-3LCOXCVH.js";
import {
  ColorModeScript,
  cookieStorageManagerSSR,
  extendTheme,
  withDefaultColorScheme
} from "/build/_shared/chunk-4DOPGRE4.js";
import "/build/_shared/chunk-7G6WEMYH.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  init_esm,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData,
  withEmotionCache
} from "/build/_shared/chunk-P3LUYFZE.js";
import {
  __commonJS,
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// ../../node_modules/@clerk/themes/dist/themes/src/createTheme.js
var require_createTheme = __commonJS({
  "../../node_modules/@clerk/themes/dist/themes/src/createTheme.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unstable_createTheme = void 0;
    var unstable_createTheme = (appearance) => {
      return { ...appearance, __type: "prebuilt_appearance" };
    };
    exports.unstable_createTheme = unstable_createTheme;
  }
});

// ../../node_modules/@clerk/themes/dist/themes/src/themes/dark.js
var require_dark = __commonJS({
  "../../node_modules/@clerk/themes/dist/themes/src/themes/dark.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dark = void 0;
    var createTheme_1 = require_createTheme();
    exports.dark = (0, createTheme_1.unstable_createTheme)({
      variables: {
        colorBackground: "#19191A",
        colorInputBackground: "#19191A",
        colorAlphaShade: "white",
        colorText: "white",
        colorInputText: "white"
      },
      elements: () => {
        return {
          providerIcon__apple: { filter: "invert(1)" },
          providerIcon__github: { filter: "invert(1)" },
          activeDeviceIcon: {
            "--cl-chassis-bottom": "#d2d2d2",
            "--cl-chassis-back": "#e6e6e6",
            "--cl-chassis-screen": "#e6e6e6",
            "--cl-screen": "#111111"
          }
        };
      }
    });
  }
});

// ../../node_modules/@clerk/themes/dist/themes/src/themes/shadesOfPurple.js
var require_shadesOfPurple = __commonJS({
  "../../node_modules/@clerk/themes/dist/themes/src/themes/shadesOfPurple.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shadesOfPurple = void 0;
    var createTheme_1 = require_createTheme();
    var dark_1 = require_dark();
    exports.shadesOfPurple = (0, createTheme_1.unstable_createTheme)({
      baseTheme: dark_1.dark,
      variables: {
        colorBackground: "#3f3c77",
        colorPrimary: "#f8d80d",
        colorTextOnPrimaryBackground: "#38375f",
        colorInputText: "#a1fdfe"
      }
    });
  }
});

// ../../node_modules/@clerk/themes/dist/themes/src/themes/neobrutalism.js
var require_neobrutalism = __commonJS({
  "../../node_modules/@clerk/themes/dist/themes/src/themes/neobrutalism.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.neobrutalism = void 0;
    var createTheme_1 = require_createTheme();
    var buttonStyle = {
      boxShadow: "3px 3px 0px #000",
      border: "2px solid #000",
      "&:focus": {
        boxShadow: "4px 4px 0px #000",
        border: "2px solid #000",
        transform: "scale(1.01)"
      },
      "&:active": {
        boxShadow: "2px 2px 0px #000",
        transform: "translate(1px)"
      }
    };
    exports.neobrutalism = (0, createTheme_1.unstable_createTheme)({
      variables: {
        colorPrimary: "#DF1B1B",
        colorTextSecondary: "#000",
        fontWeight: {
          normal: 500,
          medium: 600,
          bold: 700
        }
      },
      elements: () => ({
        card: {
          boxShadow: "7px 7px 0px #000",
          border: "3px solid #000"
        },
        alternativeMethodsBlockButton: buttonStyle,
        socialButtonsIconButton: {
          ...buttonStyle
        },
        socialButtonsBlockButton: buttonStyle,
        profileSectionPrimaryButton: buttonStyle,
        formButtonPrimary: buttonStyle,
        navbarButton: buttonStyle,
        formFieldInput: {
          boxShadow: "3px 3px 0px #000",
          border: "2px solid #000",
          transition: "all 0.2s ease-in-out",
          "&:focus": {
            boxShadow: "4px 4px 0px #000",
            border: "2px solid #000",
            transform: "scale(1.01)"
          }
        },
        dividerLine: {
          background: "#000"
        },
        footerActionLink: {
          fontWeight: "600",
          borderBottom: "2px solid",
          "&:focus": {
            boxShadow: "none"
          }
        }
      })
    });
  }
});

// ../../node_modules/@clerk/themes/dist/themes/src/themes/index.js
var require_themes = __commonJS({
  "../../node_modules/@clerk/themes/dist/themes/src/themes/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_dark(), exports);
    tslib_1.__exportStar(require_shadesOfPurple(), exports);
    tslib_1.__exportStar(require_neobrutalism(), exports);
  }
});

// ../../node_modules/@clerk/themes/dist/themes/src/index.js
var require_src = __commonJS({
  "../../node_modules/@clerk/themes/dist/themes/src/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_createTheme(), exports);
    tslib_1.__exportStar(require_themes(), exports);
  }
});

// empty-module:./lib/user.server
var require_user = __commonJS({
  "empty-module:./lib/user.server"(exports, module) {
    module.exports = {};
  }
});

// app/root.tsx
init_esm();
var import_ssr = __toESM(require_ssr());
var import_remix = __toESM(require_dist());
var import_themes = __toESM(require_src());
var import_user = __toESM(require_user());

// ../../node_modules/@saas-ui/theme-glass/dist/index.modern.mjs
var x = { black: "#0e1012", primary: { 50: "#f6f7fd", 100: "#dcdff5", 200: "#bec3ed", 300: "#9aa1e2", 400: "#858edd", 500: "#6b75d0", 600: "#5a63af", 700: "#484f8d", 800: "#3d4377", 900: "#2c3056" }, grayAlpha: { 50: "rgba(249, 249, 250, 0.5)", 100: "rgba(241, 241, 243, 0.5)", 200: "rgba(231, 231, 234, 0.5)", 300: "rgba(211, 212, 216, 0.5)", 400: "rgba(171, 172, 181, 0.5)", 500: "rgba(124, 126, 139, 0.5)", 600: "rgba(81, 84, 101, 0.5)", 700: "rgba(52, 54, 67, 0.5)", 800: "rgba(30, 32, 39, 0.5)", 900: "rgba(24, 25, 31, 0.5)" }, gray: { 50: "#f9f9fa", 100: "#f1f1f3", 200: "#e7e7ea", 300: "#d3d4d8", 400: "#abacb5", 500: "#7c7e8b", 600: "#515465", 700: "#343643", 800: "#1e2027", 900: "#18191f" }, purple: { 50: "#f9f6fd", 100: "#e5daf8", 200: "#d3bef4", 300: "#b795ec", 400: "#a379e7", 500: "#8952e0", 600: "#7434db", 700: "#6023c0", 800: "#4f1d9e", 900: "#3b1676" }, pink: { 50: "#fdf5f9", 100: "#f8d9e7", 200: "#f3b9d3", 300: "#eb8db8", 400: "#e56ba2", 500: "#dc3882", 600: "#c4246c", 700: "#a01d58", 800: "#7d1745", 900: "#5d1133" }, red: { 50: "#fdf6f5", 100: "#f8d9d8", 200: "#f1b8b4", 300: "#e98d87", 400: "#e4726c", 500: "#dc4a41", 600: "#d2140a", 700: "#ac0900", 800: "#930800", 900: "#6d0600" }, orange: { 50: "#fdfaf6", 100: "#f9ebdb", 200: "#f1d4b1", 300: "#e6b273", 400: "#dc9239", 500: "#c37b24", 600: "#a5681e", 700: "#835318", 800: "#674113", 900: "#553610" }, yellow: { 50: "#fffefb", 100: "#fff8e9", 200: "#feecbd", 300: "#fddc87", 400: "#fbc434", 500: "#d2a01e", 600: "#a88018", 700: "#836413", 800: "#624b0e", 900: "#513e0c" }, green: { 50: "#f7fdfb", 100: "#d2f2e7", 200: "#9fe3cd", 300: "#64d2ad", 400: "#1dbd88", 500: "#0ea371", 600: "#0c875e", 700: "#096949", 800: "#07563c", 900: "#064731" }, teal: { 50: "#f1fcfc", 100: "#c0f1f4", 200: "#84e4e9", 300: "#2dd1da", 400: "#22b2ba", 500: "#1d979e", 600: "#187b80", 700: "#125f64", 800: "#0f5053", 900: "#0d4244" }, cyan: { 50: "#f4fbfd", 100: "#d0eef7", 200: "#bae7f3", 300: "#a2deee", 400: "#53c2e1", 500: "#2ab4d9", 600: "#24a2c4", 700: "#1e86a2", 800: "#196e85", 900: "#135567" }, blue: { 50: "#f1f6fd", 100: "#cde0f6", 200: "#a8c8f0", 300: "#7fafe8", 400: "#5896e1", 500: "#347fdb", 600: "#236abf", 700: "#1b5192", 800: "#164278", 900: "#123662" }, indigo: { 50: "#f8f7fc", 100: "#e1ddf5", 200: "#c8c0ec", 300: "#a89de2", 400: "#9789dc", 500: "#7f6ed4", 600: "#6a58c9", 700: "#5546a1", 800: "#483c88", 900: "#342b62" } };
var k = { xs: "rgb(0 0 0 / 7%) 0px 1px 1px", "dark-xs": "rgb(0 0 0 / 7%) 0px 1px 1px", outline: `0 0 0 2px ${transparentize(x.primary[500], 0.6)({ colors: x })}` };
function v() {
  return v = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var o = arguments[e];
      for (var a2 in o)
        Object.prototype.hasOwnProperty.call(o, a2) && (r[a2] = o[a2]);
    }
    return r;
  }, v.apply(this, arguments);
}
var { definePartsStyle: S, defineMultiStyleConfig: w } = createMultiStyleConfigHelpers(alertAnatomy.keys);
var _ = cssVar("alert-fg");
var C = cssVar("alert-bg");
var A = cssVar("alert-border");
var z = S((r) => {
  const { colorScheme: e } = r, a2 = function(r2) {
    const { theme: e2, colorScheme: a3 } = r2;
    return { light: `colors.${a3}.100`, dark: transparentize(`${a3}.600`, 0.16)(e2) };
  }(r), t = function(r2) {
    const { theme: e2, colorScheme: a3 } = r2;
    return { light: `colors.${a3}.200`, dark: transparentize(`${a3}.300`, 0.16)(e2) };
  }(r);
  return { container: { borderWidth: "1px", [_.variable]: `colors.${e}.500`, [C.variable]: a2.light, [A.variable]: t.light, _dark: { [_.variable]: `colors.${e}.500`, [C.variable]: a2.dark, [A.variable]: t.dark } } };
});
var W = w({ defaultProps: { size: "sm", colorScheme: "primary" }, baseStyle: S(() => ({ container: { borderColor: A.reference, borderRadius: "md", fontSize: "sm" }, icon: { w: 4, h: 5 }, title: { fontSize: "sm", fontWeight: "medium" }, description: { color: "muted" } })), variants: { subtle: z } });
var P = defineStyle((r) => {
  const { colorScheme: e } = r, o = `${e}.500`, a2 = `${e}.600`;
  return { borderWidth: "1px", borderColor: o, boxShadow: "xs", bg: o, color: "white", fontWeight: "medium", _hover: { borderColor: a2, bg: a2 }, _dark: { boxShadow: "dark-xs" } };
});
var $ = defineStyle((r) => ({ fontWeight: "medium", _checked: { bg: "blackAlpha.100" }, _dark: { _checked: { bg: "whiteAlpha.100" } } }));
var R = defineStyle((r) => {
  const { colorScheme: e } = r;
  return "gray" === e ? { fontWeight: "medium" } : { fontWeight: "medium", color: `${e}.500`, _hover: { color: `${e}.400`, bg: "blackAlpha.50" }, _dark: { color: `${e}.500`, _hover: { color: `${e}.400`, bg: "whiteAlpha.50" } } };
});
var B = defineStyle((r) => P(v({}, r, { colorScheme: "primary" })));
var F = defineStyle({ borderWidth: "1px", borderColor: "gray.200", boxShadow: "xs", bg: "white", fontWeight: "medium", color: "inherit", _hover: { borderColor: "gray.300", bg: "gray.50" }, _dark: { boxShadow: "dark-xs", borderColor: "gray.600", bg: "gray.700", _hover: { borderColor: "gray.500", bg: "gray.600" } } });
var M = defineStyle({ borderWidth: "1px", borderColor: "gray.200", bg: "gray.200", color: "black", fontWeight: "medium", _hover: { borderColor: "gray.300", bg: "gray.200" }, _dark: { borderColor: "gray.700", bg: "gray.700", color: "white", _hover: { borderColor: "gray.600" } } });
var I = { lg: defineStyle({ h: "8", minW: "10", fontSize: "md", px: "4", rounded: "6" }), md: defineStyle({ h: "7", minW: "8", fontSize: "sm", px: "3", rounded: "4" }), sm: defineStyle({ h: "6", minW: "6", fontSize: "sm", px: "2", rounded: "3" }), xs: defineStyle({ h: "5", minW: "4", fontSize: "xs", px: "1", rounded: "3" }) };
var T = defineStyleConfig({ defaultProps: { size: "md", variant: "secondary" }, variants: { solid: P, outline: R, ghost: $, primary: B, secondary: F, tertiary: M }, sizes: I });
var V = anatomy("card").parts("container", "header", "title", "subtitle", "body", "footer");
var { definePartsStyle: O } = createMultiStyleConfigHelpers(V.keys);
var j = cssVar("card-bg");
var D = cssVar("card-padding");
var E = cssVar("card-border");
var H = O(() => ({ container: { borderColor: E.reference } }));
var K = { sm: O({ container: { borderRadius: "base", [D.variable]: "space.3" } }), md: O({ container: { borderRadius: "md", [D.variable]: "space.4" } }), lg: O({ container: { borderRadius: "xl", [D.variable]: "space.6" } }) };
var L = O((r) => {
  const { isHoverable: e } = r;
  return { container: { [E.variable]: "colors.blackAlpha.200", boxShadow: "sm", borderWidth: "1px", _hover: e ? { [E.variable]: "colors.blackAlpha.300" } : {}, _dark: { [j.variable]: "colors.gray.700", [E.variable]: "colors.whiteAlpha.50", _hover: e ? { [E.variable]: "colors.whiteAlpha.300" } : {} } } };
});
var N = { parts: V.keys, defaultProps: { variant: "elevated" }, baseStyle: H, variants: { elevated: L, shadow: L }, sizes: K };
function q(r, ...e) {
  return "function" == typeof r ? r(...e) : r;
}
process, process;
var { defineMultiStyleConfig: G, definePartsStyle: J } = createMultiStyleConfigHelpers(drawerAnatomy.keys);
var Q = cssVar("drawer-bg");
var U = defineStyle({ bg: "blackAlpha.50" });
var X = defineStyle((r) => ({ borderRadius: "md", margin: "8px", borderWidth: "1px", borderColor: "chakra-border-color", backdropFilter: "blur(10px) contrast(100%) saturate(100%) brightness(200%)", [Q.variable]: "colors.whiteAlpha.800", fontSize: "md", _dark: { backdropFilter: "blur(10px) saturate(190%) contrast(70%) brightness(80%)", [Q.variable]: "colors.grayAlpha.700" } }));
var Y = defineStyle({ px: "4", py: "3", fontSize: "md", fontWeight: "semibold" });
var Z = defineStyle({ position: "absolute", top: "2", insetEnd: "3" });
var rr = defineStyle((r) => ({ px: "4", py: "2" }));
var er = defineStyle({ px: "3", py: "3" });
var or = G({ baseStyle: J((r) => ({ overlay: U, dialog: q(X, r), header: Y, closeButton: Z, body: q(rr, r), footer: er })) });
var { definePartsStyle: ar } = createMultiStyleConfigHelpers(inputAnatomy.keys);
var tr = ar((r) => {
  const { theme: e } = r, { focusBorderColor: o, errorBorderColor: l } = function(r2) {
    const { focusBorderColor: e2, errorBorderColor: o2 } = r2;
    return { focusBorderColor: e2 || mode("blue.500", "blue.300")(r2), errorBorderColor: o2 || mode("red.500", "red.300")(r2) };
  }(r);
  return { field: { border: "1px solid var(--chakra-colors-chakra-border-color)", bg: "inherit", _hover: { borderColor: "gray.300" }, _invalid: { borderColor: getColor(e, l), boxShadow: "none" }, _focusVisible: { zIndex: 1, borderColor: getColor(e, o), boxShadow: "none" }, _dark: { bg: "gray.900", borderColor: "chakra-border-color", _hover: { borderColor: "whiteAlpha.400" }, _invalid: { borderColor: getColor(e, l) }, _focusVisible: { borderColor: getColor(e, o) } } }, addon: { borderColor: "inherit", bg: "gray.100", _dark: { borderColor: "whiteAlpha.50", bg: "whiteAlpha.300" } } };
});
var lr = { defaultProps: { variant: "outline", size: "sm", focusBorderColor: "primary.500" }, variants: { outline: tr }, sizes: { sm: { field: { borderRadius: "4px", h: 7 }, addon: { borderRadius: "4px", h: 7 } }, md: { field: { px: 3, h: 9 }, addon: { px: 3, h: 9 } } } };
var dr = { FormLabel: { baseStyle: { mb: 1 }, variants: { horizontal: { mb: 0, marginStart: "0.5rem" } } }, Input: lr, NumberInput: lr, PinInput: lr, Textarea: lr, Select: lr };
var ir = cssVar("kbd-bg");
var br = defineStyleConfig({ defaultProps: { variant: "solid" }, baseStyle: defineStyle({ [ir.variable]: "colors.blackAlpha.300", _dark: { [ir.variable]: "colors.whiteAlpha.300" }, bg: ir.reference, borderRadius: "md", borderWidth: "0", borderBottomWidth: "0", padding: "1px", minW: "20px", textAlign: "center", ":last-child": { mr: 0 } }) });
var { defineMultiStyleConfig: sr, definePartsStyle: cr } = createMultiStyleConfigHelpers(menuAnatomy.keys);
var nr = cssVar("menu-bg");
var fr = cssVar("menu-shadow");
var hr = defineStyle({ [nr.variable]: "colors.whiteAlpha.500", [fr.variable]: "shadows.lg", backdropFilter: "blur(10px) contrast(100%) saturate(190%)", _dark: { [nr.variable]: "colors.grayAlpha.700", [fr.variable]: "shadows.dark-lg", backdropFilter: "blur(10px) saturate(190%) contrast(70%) brightness(80%)" }, py: "1", borderRadius: "md", borderWidth: "1px", bg: nr.reference, boxShadow: fr.reference });
var pr = defineStyle({ py: "1.5", px: "3", mx: "1", rounded: "md", fontSize: "sm", width: "calc(100% - 8px)", boxSizing: "border-box", bg: "transparent", _hover: { bg: nr.reference, [nr.variable]: "colors.grayAlpha.300" }, _focus: { bg: nr.reference, [nr.variable]: "colors.grayAlpha.300" }, _active: { bg: nr.reference, [nr.variable]: "colors.grayAlpha.300" }, _expanded: { bg: nr.reference, [nr.variable]: "colors.grayAlpha.300" } });
var gr = defineStyle({ mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" });
var mr = sr({ baseStyle: cr({ button: defineStyle({ transitionProperty: "common", transitionDuration: "normal" }), list: hr, item: pr, groupTitle: gr, divider: defineStyle({ my: "1" }) }) });
var { defineMultiStyleConfig: ur, definePartsStyle: yr } = createMultiStyleConfigHelpers(modalAnatomy.keys);
var xr = defineStyle({ bg: "blackAlpha.50" });
var kr = defineStyle((r) => ({ bg: "whiteAlpha.800", backdropFilter: "blur(10px) contrast(100%) saturate(100%) brightness(200%)", fontSize: "md", _dark: { bg: "grayAlpha.700", boxShadow: "dark-lg", backdropFilter: "blur(10px) saturate(190%) contrast(70%) brightness(80%)" } }));
var vr = defineStyle({ px: "4", py: "3", fontSize: "md", fontWeight: "semibold" });
var Sr = defineStyle({ position: "absolute", top: "2", insetEnd: "3" });
var wr = defineStyle((r) => ({ px: "4", py: "2" }));
var _r = defineStyle({ px: "3", py: "3" });
var Cr = ur({ baseStyle: yr((r) => ({ overlay: xr, dialog: q(kr, r), header: vr, closeButton: Sr, body: q(wr, r), footer: _r })), defaultProps: { size: "md" } });
var { defineMultiStyleConfig: Ar } = createMultiStyleConfigHelpers(progressAnatomy.keys);
var zr = Ar({ defaultProps: { colorScheme: "primary" }, baseStyle: (r) => {
  const { colorScheme: e } = r;
  return { track: { borderRadius: "md", bg: "gray.200", _dark: { bg: "gray.700" } }, filledTrack: { bg: `${e}.500` } };
} });
var { defineMultiStyleConfig: Wr, definePartsStyle: Pr } = createMultiStyleConfigHelpers(popoverAnatomy.keys);
var $r = cssVar("popper-bg");
var Rr = cssVar("popper-arrow-bg");
var Br = cssVar("popper-arrow-shadow-color");
var Fr = defineStyle({ [$r.variable]: "colors.whiteAlpha.800", bg: $r.reference, [Rr.variable]: $r.reference, [Br.variable]: "colors.gray.200", backdropFilter: "blur(10px) contrast(100%) saturate(100%) brightness(200%)", _dark: { [$r.variable]: "colors.grayAlpha.700", [Br.variable]: "colors.whiteAlpha.300", backdropFilter: "blur(10px) saturate(190%) contrast(70%) brightness(80%)" } });
var Mr = Wr({ baseStyle: Pr((r) => ({ content: q(Fr, r) })), defaultProps: { size: "md" } });
var Ir = { baseStyle: (r) => ({ bg: mode("whiteAlpha.800", "blackAlpha.800")(r), boxShadow: "sm", border: "1px", borderColor: mode("gray.200", "gray.700")(r) }) };
var { defineMultiStyleConfig: Tr, definePartsStyle: Vr } = createMultiStyleConfigHelpers(switchAnatomy.keys);
var Or = cssVar2("switch-bg");
var jr = defineStyle((r) => {
  const { colorScheme: e } = r;
  return { [Or.variable]: "colors.gray.300", _dark: { [Or.variable]: "colors.whiteAlpha.300" }, _checked: { [Or.variable]: `colors.${e}.500`, _dark: { [Or.variable]: `colors.${e}.500` } }, bg: Or.reference };
});
var Dr = defineStyle({ bg: "white", _dark: { bg: "blackAlpha.800", _checked: { bg: "white" } } });
var Er = Tr({ baseStyle: Vr((r) => ({ track: jr(r), thumb: Dr })), defaultProps: { size: "md", colorScheme: "primary" } });
var Hr = cssVar2("tooltip-bg");
var Kr = cssVar2("tooltip-fg");
var Lr = cssVar2("popper-arrow-bg");
var Nr = extendTheme({ colors: x, fonts: { heading: "InterVariable, sans-serif", body: "InterVariable, sans-serif" }, fontSizes: { xs: "0.75rem", sm: "0.8125rem", md: "0.875rem", lg: "1rem", xl: "1.125rem", "2xl": "1.5rem", "3xl": "1.875rem", "4xl": "2.25rem", "5xl": "3rem", "6xl": "3.75rem", "7xl": "4.5rem", "8xl": "6rem", "9xl": "8rem" }, textStyles: {}, sizes: { container: { sm: "30em", md: "48em", lg: "62em", xl: "80em", "2xl": "96em" } }, components: v({ Alert: W, Button: T, Card: N, Checkbox: { baseStyle: (r) => {
  const { colorScheme: e } = r;
  return { control: { _checked: { borderColor: `${e}.500`, bg: `${e}.500`, color: "white" } } };
} }, CloseButton: { defaultProps: { size: "sm" } }, Drawer: or, Heading: { defaultProps: { size: "lg" } }, Kbd: br, Menu: mr, Modal: Cr, Progress: zr, Popover: Mr, Toaster: Ir, Radio: { baseStyle: (r) => {
  const { colorScheme: e } = r;
  return { control: { _checked: { borderColor: `${e}.500`, bg: `${e}.500`, color: "white" } } };
} }, Slider: { defaultProps: { colorScheme: "primary" }, baseStyle: (r) => {
  const { colorScheme: e } = r;
  return { filledTrack: { bg: `${e}.500` } };
} }, Switch: Er, Tooltip: { baseStyle: (r) => ({ display: "flex", [Hr.variable]: "colors.white", [Kr.variable]: "colors.blackAlpha.900", _dark: { [Hr.variable]: "colors.gray.700", [Kr.variable]: "colors.whiteAlpha.900" }, px: "8px", py: "2px", bg: [Hr.reference], [Lr.variable]: [Hr.reference], borderRadius: "sm", fontWeight: "medium", fontSize: "xs", boxShadow: "md", maxW: "320px", zIndex: "tooltip", borderWidth: "1px" }) } }, dr), shadows: k, semanticTokens: { colors: { muted: { default: "gray.500", _dark: "gray.400" } } } }, withDefaultColorScheme({ colorScheme: "primary", components: ["Radio", "Switch", "Checkbox"] }));

// app/lib/theme/foundations/colors.ts
var colors = {
  black: "#101010",
  gray: {
    "50": "#fafafa",
    "100": "#f1f1f1",
    "200": "#e7e7e7",
    "300": "#d4d4d4",
    "400": "#adadad",
    "500": "#7f7f7f",
    "600": "#545454",
    "700": "#373737",
    "800": "#202020",
    "900": "#191919"
  },
  red: {
    "50": "#fcf6f6",
    "100": "#f4dad9",
    "200": "#eabab8",
    "300": "#de928f",
    "400": "#d67a77",
    "500": "#cc5854",
    "600": "#c13530",
    "700": "#9d2a26",
    "800": "#852420",
    "900": "#611a18"
  },
  orange: {
    "50": "#fdfaf7",
    "100": "#f6ece0",
    "200": "#ebd5bc",
    "300": "#dcb589",
    "400": "#ce985a",
    "500": "#c07d2f",
    "600": "#a26928",
    "700": "#81541f",
    "800": "#664219",
    "900": "#543614"
  },
  yellow: {
    "50": "#fefefc",
    "100": "#faf9f0",
    "200": "#f2eed2",
    "300": "#e8e0b0",
    "400": "#d9cd7f",
    "500": "#bba92e",
    "600": "#968724",
    "700": "#75691c",
    "800": "#574f15",
    "900": "#484112"
  },
  green: {
    "50": "#f7fdfa",
    "100": "#d3f2e3",
    "200": "#a2e3c5",
    "300": "#68d2a1",
    "400": "#2ebd7a",
    "500": "#27a269",
    "600": "#218657",
    "700": "#196844",
    "800": "#155637",
    "900": "#11462e"
  },
  teal: {
    "50": "#f3fbfc",
    "100": "#cceff0",
    "200": "#9fe0e2",
    "300": "#65cdd1",
    "400": "#2cb2b6",
    "500": "#26979b",
    "600": "#1f7b7e",
    "700": "#185f62",
    "800": "#145052",
    "900": "#104143"
  },
  cyan: {
    "50": "#f5fbfc",
    "100": "#d6edf3",
    "200": "#c4e5ed",
    "300": "#afdce7",
    "400": "#6fc0d4",
    "500": "#50b2cb",
    "600": "#2ea2bf",
    "700": "#26869e",
    "800": "#206e82",
    "900": "#185564"
  },
  blue: {
    "50": "#f2f6fb",
    "100": "#d0dff1",
    "200": "#aec8e7",
    "300": "#88afdc",
    "400": "#6497d1",
    "500": "#4481c7",
    "600": "#2c6bb4",
    "700": "#21528a",
    "800": "#1b4371",
    "900": "#16375c"
  },
  purple: {
    "50": "#f8f6fc",
    "100": "#e4dbf4",
    "200": "#d0c0ec",
    "300": "#b399e1",
    "400": "#9f7ed8",
    "500": "#855ace",
    "600": "#7240c6",
    "700": "#5e2cb4",
    "800": "#4d2494",
    "900": "#3a1b6e"
  },
  pink: {
    "50": "#fcf6f9",
    "100": "#f4dae6",
    "200": "#ebbcd2",
    "300": "#df94b7",
    "400": "#d676a3",
    "500": "#ca4d87",
    "600": "#bd2e71",
    "700": "#9b265c",
    "800": "#791d48",
    "900": "#591635"
  },
  primary: {
    "50": "#fcf6f7",
    "100": "#f4dadd",
    "200": "#eab9bf",
    "300": "#de919a",
    "400": "#d77984",
    "500": "#cd5664",
    "600": "#c23244",
    "700": "#9e2635",
    "800": "#86212d",
    "900": "#621821"
  }
};
var colors_default = colors;

// app/lib/theme/foundations/typography.ts
var fonts = {
  heading: "Inter, sans-serif",
  body: "Inter, sans-serif"
};

// app/lib/theme/theme.ts
var config = {
  initialColorMode: "dark",
  useSystemColorMode: true
};
var theme = extendTheme(
  { ...ae, config, colors: colors_default, fonts },
  Nr
);

// app/components/document.tsx
var import_react3 = __toESM(require_react());
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Document = withEmotionCache(
  ({ children }, emotionCache) => {
    const serverStyleData = (0, import_react3.useContext)(ServerStyleContext);
    const clientStyleData = (0, import_react3.useContext)(ClientStyleContext);
    (0, import_react3.useEffect)(() => {
      emotionCache.sheet.container = document.head;
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      });
      clientStyleData?.reset();
    }, []);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
          fileName: "app/components/document.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
          fileName: "app/components/document.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        serverStyleData ? serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "style",
          {
            "data-emotion": `${key} ${ids.join(" ")}`,
            dangerouslySetInnerHTML: { __html: css }
          },
          key,
          false,
          {
            fileName: "app/components/document.tsx",
            lineNumber: 45,
            columnNumber: 17
          },
          this
        )) : null
      ] }, void 0, true, {
        fileName: "app/components/document.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorModeScript, { initialColorMode: theme.config.initialColorMode }, void 0, false, {
          fileName: "app/components/document.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
          fileName: "app/components/document.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
          fileName: "app/components/document.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
          fileName: "app/components/document.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/document.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/document.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this);
  }
);

// app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var [seoMeta, seoLinks] = getSeo();
var meta = () => ({
  ...seoMeta,
  viewport: "width=device-width, initial-scale=1"
});
var links = () => [
  ...seoLinks,
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  }
];
function App() {
  const { cookies } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    a,
    {
      colorModeManager: cookieStorageManagerSSR(cookies),
      theme,
      resetCSS: true,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/root.tsx",
      lineNumber: 62,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
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
});
var CatchBoundary = (0, import_remix.ClerkCatchBoundary)();
export {
  CatchBoundary,
  root_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-E225HG3N.js.map
