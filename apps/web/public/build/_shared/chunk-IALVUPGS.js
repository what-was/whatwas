import {
  ae
} from "/build/_shared/chunk-RZDBWPKV.js";
import {
  ChakraProvider
} from "/build/_shared/chunk-3LCOXCVH.js";
import {
  require_react
} from "/build/_shared/chunk-P3LUYFZE.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// ../../node_modules/@saas-ui/react/node_modules/@saas-ui/provider/dist/index.modern.mjs
var n = __toESM(require_react(), 1);
var import_react = __toESM(require_react(), 1);
function o() {
  return o = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t = arguments[e2];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n2[r] = t[r]);
    }
    return n2;
  }, o.apply(this, arguments);
}
var i = ["theme", "linkComponent", "onError", "children"];
var l = n.createContext({});
function a(e2) {
  let { theme: a2, linkComponent: c2, onError: u2, children: m2 } = e2, s = function(n2, e3) {
    if (null == n2)
      return {};
    var t, r, o2 = {}, i2 = Object.keys(n2);
    for (r = 0; r < i2.length; r++)
      e3.indexOf(t = i2[r]) >= 0 || (o2[t] = n2[t]);
    return o2;
  }(e2, i);
  return n.createElement(l.Provider, { value: { linkComponent: c2, onError: u2 } }, /* @__PURE__ */ n.createElement(ChakraProvider, o({}, s, { theme: a2 || ae }), m2));
}
var c = () => n.useContext(l);
var u = n.createContext(null);
var m = u.Provider;
var v = ({ children: n2 }) => /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, n2);
function C() {
  const n2 = c();
  return null != n2 && n2.linkComponent ? n2.linkComponent : v;
}

export {
  a,
  C
};
//# sourceMappingURL=/build/_shared/chunk-IALVUPGS.js.map
