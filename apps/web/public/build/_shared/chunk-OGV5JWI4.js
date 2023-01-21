import {
  css,
  isStyleProp,
  propNames,
  resolveStyleConfig
} from "/build/_shared/chunk-KIPNPAPD.js";
import {
  Button,
  emotion_styled_browser_esm_default,
  require_jsx_runtime,
  require_lodash,
  require_react_fast_compare
} from "/build/_shared/chunk-4DOPGRE4.js";
import {
  ThemeContext,
  require_react
} from "/build/_shared/chunk-P3LUYFZE.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// ../../node_modules/@saas-ui/react/node_modules/@saas-ui/button/dist/index.modern.mjs
var t = __toESM(require_react(), 1);

// ../../node_modules/@chakra-ui/utils/dist/chunk-O3SWHQEE.mjs
var dataAttr = (condition) => condition ? "" : void 0;
var cx = (...classNames) => classNames.filter(Boolean).join(" ");

// ../../node_modules/@chakra-ui/utils/dist/chunk-YTQ3XZ3T.mjs
var import_lodash = __toESM(require_lodash(), 1);
function omit(object, keys) {
  const result = {};
  Object.keys(object).forEach((key) => {
    if (keys.includes(key))
      return;
    result[key] = object[key];
  });
  return result;
}
function get(obj, path, fallback, index) {
  const key = typeof path === "string" ? path.split(".") : [path];
  for (index = 0; index < key.length; index += 1) {
    if (!obj)
      break;
    obj = obj[key[index]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize = (fn) => {
  const cache = /* @__PURE__ */ new WeakMap();
  const memoizedFn = (obj, path, fallback, index) => {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, /* @__PURE__ */ new Map());
    }
    const map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    const value = fn(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet = memoize(get);
function objectFilter(object, fn) {
  const result = {};
  Object.keys(object).forEach((key) => {
    const value = object[key];
    const shouldPass = fn(value, key, object);
    if (shouldPass) {
      result[key] = value;
    }
  });
  return result;
}
var filterUndefined = (object) => objectFilter(object, (val) => val !== null && val !== void 0);

// ../../node_modules/@chakra-ui/utils/dist/chunk-Y5FGD7DM.mjs
function isFunction(value) {
  return typeof value === "function";
}
var __DEV__ = true;

// ../../node_modules/@chakra-ui/utils/dist/chunk-M3TFMUOL.mjs
function runIfFn(valueOrFn, ...args) {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

// ../../node_modules/@saas-ui/react/node_modules/@chakra-ui/system/dist/chunk-NLMMK76H.mjs
var import_react2 = __toESM(require_react(), 1);
function useTheme() {
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

// ../../node_modules/@saas-ui/react/node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs
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

// ../../node_modules/@saas-ui/react/node_modules/@chakra-ui/system/dist/chunk-7V3ZYTH7.mjs
function useChakra() {
  const colorModeResult = useColorMode();
  const theme = useTheme();
  return { ...colorModeResult, theme };
}

// ../../node_modules/@saas-ui/react/node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs
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
function useMultiStyleConfig(themeKey, props = {}) {
  return useStyleConfigImpl(themeKey, props);
}

// ../../node_modules/@saas-ui/react/node_modules/@chakra-ui/system/dist/chunk-3JUGYQRQ.mjs
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

// ../../node_modules/@saas-ui/react/node_modules/@chakra-ui/object-utils/dist/index.mjs
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

// ../../node_modules/@saas-ui/react/node_modules/@chakra-ui/system/dist/chunk-GORXMMUN.mjs
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

// ../../node_modules/@saas-ui/react/node_modules/@chakra-ui/system/dist/chunk-OLGE5QAF.mjs
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
var chakra = factory();

// ../../node_modules/@saas-ui/react/node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs
var import_react6 = __toESM(require_react(), 1);
function forwardRef(component) {
  return (0, import_react6.forwardRef)(component);
}

// ../../node_modules/@chakra-ui/react-utils/dist/chunk-ITIKTQWJ.mjs
var import_react7 = __toESM(require_react(), 1);
function createContext2(options = {}) {
  const {
    strict = true,
    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name
  } = options;
  const Context = (0, import_react7.createContext)(void 0);
  Context.displayName = name;
  function useContext3() {
    var _a2;
    const context = (0, import_react7.useContext)(Context);
    if (!context && strict) {
      const error2 = new Error(errorMessage);
      error2.name = "ContextError";
      (_a2 = Error.captureStackTrace) == null ? void 0 : _a2.call(Error, error2, useContext3);
      throw error2;
    }
    return context;
  }
  return [
    Context.Provider,
    useContext3,
    Context
  ];
}

// ../../node_modules/@saas-ui/react/node_modules/@chakra-ui/system/dist/chunk-3ZTTLJBV.mjs
var import_react8 = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var [StylesProvider, useStyles] = createContext2({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function createStylesContext(componentName) {
  return createContext2({
    name: `${componentName}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${componentName} />" `
  });
}

// ../../node_modules/@saas-ui/react/node_modules/@saas-ui/button/dist/index.modern.mjs
function o() {
  return o = Object.assign ? Object.assign.bind() : function(t2) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var e in n)
        Object.prototype.hasOwnProperty.call(n, e) && (t2[e] = n[e]);
    }
    return t2;
  }, o.apply(this, arguments);
}
var a = ["label", "children"];
var i = forwardRef((n, e) => {
  let { label: i2, children: u } = n, c = function(t2, r) {
    if (null == t2)
      return {};
    var n2, e2, o2 = {}, a2 = Object.keys(t2);
    for (e2 = 0; e2 < a2.length; e2++)
      r.indexOf(n2 = a2[e2]) >= 0 || (o2[n2] = t2[n2]);
    return o2;
  }(n, a);
  return t.createElement(Button, o({ ref: e }, c), u || i2);
});
__DEV__ && (i.displayName = "Button");

export {
  dataAttr,
  cx,
  import_lodash,
  omit,
  memoizedGet,
  objectFilter,
  filterUndefined,
  __DEV__,
  runIfFn,
  useMultiStyleConfig,
  chakra,
  forwardRef,
  createContext2 as createContext,
  createStylesContext,
  i
};
//# sourceMappingURL=/build/_shared/chunk-OGV5JWI4.js.map
