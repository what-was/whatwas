import {
  esm_exports,
  init_esm,
  require_react
} from "/build/_shared/chunk-P3LUYFZE.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// ../../node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d, b3) {
  if (typeof b3 !== "function" && b3 !== null)
    throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
  extendStatics(d, b3);
  function __() {
    this.constructor = d;
  }
  d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y2, t, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n) {
    return function(v2) {
      return step([n, v2]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g2 && (g2 = 0, op[0] && (_3 = 0)), _3)
      try {
        if (f = 1, y2 && (t = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t = y2["return"]) && t.call(y2), 0) : y2.next) && !(t = t.call(y2, op[1])).done)
          return t;
        if (y2 = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _3.label++;
            return { value: op[1], done: false };
          case 5:
            _3.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _3.ops.pop();
            _3.trys.pop();
            continue;
          default:
            if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _3 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _3.label = op[1];
              break;
            }
            if (op[0] === 6 && _3.label < t[1]) {
              _3.label = t[1];
              t = op;
              break;
            }
            if (t && _3.label < t[2]) {
              _3.label = t[2];
              _3.ops.push(op);
              break;
            }
            if (t[2])
              _3.ops.pop();
            _3.trys.pop();
            continue;
        }
        op = body.call(thisArg, _3);
      } catch (e) {
        op = [6, e];
        y2 = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
      __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k3 = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j2 = 0, jl = a.length; j2 < jl; j2++, k3++)
      r[k3] = a[j2];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v2) {
  return this instanceof __await ? (this.v = v2, this) : new __await(v2);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g2 = generator.apply(thisArg, _arguments || []), i, q2 = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g2[n])
      i[n] = function(v2) {
        return new Promise(function(a, b3) {
          q2.push([n, v2, a, b3]) > 1 || resume(n, v2);
        });
      };
  }
  function resume(n, v2) {
    try {
      step(g2[n](v2));
    } catch (e) {
      settle(q2[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q2[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v2) {
    if (f(v2), q2.shift(), q2.length)
      resume(q2[0][0], q2[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v2) {
      return (p = !p) ? { value: __await(o[n](v2)), done: n === "return" } : f ? f(v2) : v2;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v2) {
      return new Promise(function(resolve, reject) {
        v2 = o[n](v2), settle(resolve, reject, v2.done, v2.value);
      });
    };
  }
  function settle(resolve, reject, d, v2) {
    Promise.resolve(v2).then(function(v3) {
      resolve({ value: v3, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k3 in mod)
      if (k3 !== "default" && Object.prototype.hasOwnProperty.call(mod, k3))
        __createBinding(result, mod, k3);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
var extendStatics, __assign, __createBinding, __setModuleDefault;
var init_tslib_es6 = __esm({
  "../../node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d, b3) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b4) {
        d2.__proto__ = b4;
      } || function(d2, b4) {
        for (var p in b4)
          if (Object.prototype.hasOwnProperty.call(b4, p))
            d2[p] = b4[p];
      };
      return extendStatics(d, b3);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? function(o, m, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      var desc = Object.getOwnPropertyDescriptor(m, k3);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k3];
        } };
      }
      Object.defineProperty(o, k22, desc);
    } : function(o, m, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      o[k22] = m[k3];
    };
    __setModuleDefault = Object.create ? function(o, v2) {
      Object.defineProperty(o, "default", { enumerable: true, value: v2 });
    } : function(o, v2) {
      o["default"] = v2;
    };
  }
});

// ../../node_modules/@clerk/remix/dist/globalPolyfill.js
var require_globalPolyfill = __commonJS({
  "../../node_modules/@clerk/remix/dist/globalPolyfill.js"() {
    "use strict";
    if (typeof window !== "undefined" && typeof window.global === "undefined") {
      window.global = window;
    }
  }
});

// ../../node_modules/@clerk/shared/dist/esm/chunk-LNDJRDTI.js
function Ce() {
  return typeof window != "undefined";
}
function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      e[n] = r[n];
  }
  return e;
}
function y(e, t) {
  function r(s, o, i) {
    if (typeof document != "undefined") {
      i = b({}, t, i), typeof i.expires == "number" && (i.expires = new Date(Date.now() + i.expires * 864e5)), i.expires && (i.expires = i.expires.toUTCString()), s = encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var l = "";
      for (var c in i)
        !i[c] || (l += "; " + c, i[c] !== true && (l += "=" + i[c].split(";")[0]));
      return document.cookie = s + "=" + e.write(o, s) + l;
    }
  }
  function n(s) {
    if (!(typeof document == "undefined" || arguments.length && !s)) {
      for (var o = document.cookie ? document.cookie.split("; ") : [], i = {}, l = 0; l < o.length; l++) {
        var c = o[l].split("="), p = c.slice(1).join("=");
        try {
          var d = decodeURIComponent(c[0]);
          if (i[d] = e.read(p, d), s === d)
            break;
        } catch {
        }
      }
      return s ? i[s] : i;
    }
  }
  return Object.create({ set: r, get: n, remove: function(s, o) {
    r(s, "", b({}, o, { expires: -1 }));
  }, withAttributes: function(s) {
    return y(this.converter, b({}, this.attributes, s));
  }, withConverter: function(s) {
    return y(b({}, this.converter, s), this.attributes);
  } }, { attributes: { value: Object.freeze(t) }, converter: { value: Object.freeze(e) } });
}
function Pe(e) {
  return { get() {
    return T.get(e);
  }, set(t, r = {}) {
    return T.set(e, t, r);
  }, remove(t) {
    T.remove(e, t);
  } };
}
function Le(e) {
  return e ? e.toLocaleString("en-US", { hour: "2-digit", minute: "numeric", hour12: true }) : "";
}
function oe(e, t, { absolute: r = true } = {}) {
  if (!e || !t)
    return 0;
  let n = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()), s = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()), o = Math.floor((s - n) / 864e5);
  return r ? Math.abs(o) : o;
}
function v(e) {
  try {
    return new Date(e || new Date());
  } catch {
    return new Date();
  }
}
function Me(e) {
  let { date: t, relativeTo: r } = e;
  if (!t || !r)
    return null;
  let n = v(t), s = v(r), o = oe(s, n, { absolute: false });
  return o < -6 ? { relativeDateCase: "other", date: n } : o < -1 ? { relativeDateCase: "previous6Days", date: n } : o === -1 ? { relativeDateCase: "lastDay", date: n } : o === 0 ? { relativeDateCase: "sameDay", date: n } : o === 1 ? { relativeDateCase: "nextDay", date: n } : o < 7 ? { relativeDateCase: "next6Days", date: n } : { relativeDateCase: "other", date: n };
}
function We(e, t) {
  let r = v(e);
  return r.setFullYear(r.getFullYear() + t), r;
}
function Oe(e) {
  return new Promise((t, r) => {
    let n = new FileReader();
    n.addEventListener("load", function() {
      let s = JSON.parse(n.result);
      t(s);
    }), n.addEventListener("error", r), n.readAsText(e);
  });
}
function Fe(e) {
  return `${se.test(e) ? W : S}${btoa(`${e}$`)}`;
}
function Ue(e) {
  if (e = e || "", !ie(e))
    return null;
  let t = e.startsWith(S) ? "production" : "development", r = R(e.split("_")[2]);
  return r.endsWith("$") ? (r = r.slice(0, -1), { instanceType: t, frontendApi: r }) : null;
}
function ie(e) {
  e = e || "";
  let t = e.startsWith(S) || e.startsWith(W), r = R(e.split("_")[2] || "").endsWith("$");
  return t && r;
}
function Ge(e) {
  return e = e || "", e.startsWith("clerk.");
}
function Ve() {
  if (!window.matchMedia)
    return false;
  let e = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
  return e && e.matches || window.devicePixelRatio > 1;
}
function Je(e) {
  return ce.test(e || "");
}
function Ze(e) {
  let t = e || "";
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function $(e) {
  return e ? e.replace(/([-_][a-z])/g, (t) => t.toUpperCase().replace(/-|_/, "")) : "";
}
function H(e) {
  return e ? e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`) : "";
}
function pt({ delayInMs: e } = { delayInMs: 1e3 }) {
  let t = E(), r, n = false, s = () => {
    r && (t.clearTimeout(r), t.cleanup()), n = true;
  }, o = async (i) => {
    n = false, await i(s), !n && (r = t.setTimeout(() => {
      o(i);
    }, e));
  };
  return { run: o, stop: s };
}
function ft(e = "") {
  return e.startsWith("?") && (e = e.slice(1)), new URLSearchParams(e);
}
var he, V, K, X, j, Y, g, h, x, w, P, C, ve, z, J, ke, Ee, Z, Q, q, ee, te, _, L, M, re, ne, T, R, S, W, se, ae, A, le, je, O, ce, B, et, tt, k, F, ue, E, dt, de, me, fe, bt;
var init_chunk_LNDJRDTI = __esm({
  "../../node_modules/@clerk/shared/dist/esm/chunk-LNDJRDTI.js"() {
    he = (e) => {
      if (e.length == 0)
        return "";
      if (e.length == 1)
        return e[0];
      let t = e.slice(0, -1).join(", ");
      return t += `, or ${e.slice(-1)}`, t;
    };
    V = /^#?([A-F0-9]{6}|[A-F0-9]{3})$/i;
    K = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i;
    X = /^rgba\((\d+),\s*(\d+),\s*(\d+)(,\s*\d+(\.\d+)?)\)$/i;
    j = /^hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)$/i;
    Y = /^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%(,\s*\d+(\.\d+)?)*\)$/i;
    g = (e) => !!e.match(V);
    h = (e) => !!(e.match(K) || e.match(X));
    x = (e) => !!e.match(j) || !!e.match(Y);
    w = (e) => typeof e != "string" && "r" in e;
    P = (e) => typeof e != "string" && "h" in e;
    C = (e) => e === "transparent";
    ve = (e) => typeof e != "string" && e.a != null && e.a < 1;
    z = /[hsla()]/g;
    J = /[rgba()]/g;
    ke = (e) => e === "transparent" ? { h: 0, s: 0, l: 0, a: 0 } : g(e) ? te(e) : x(e) ? M(e) : h(e) ? _(e) : null;
    Ee = (e) => (e = e.trim(), g(e) ? e.startsWith("#") ? e : `#${e}` : h(e) ? L(e) : x(e) ? M(e) : C(e) ? e : "");
    Z = (e) => typeof e == "string" && (g(e) || C(e)) ? e : w(e) ? q(e) : P(e) ? ee(e) : "";
    Q = (e) => {
      e = e.replace("#", "");
      let t = parseInt(e.substring(0, 2), 16), r = parseInt(e.substring(2, 4), 16), n = parseInt(e.substring(4, 6), 16);
      return { r: t, g: r, b: n };
    };
    q = (e) => {
      let { a: t, b: r, g: n, r: s } = e;
      return e.a === 0 ? "transparent" : e.a != null ? `rgba(${s},${n},${r},${t})` : `rgb(${s},${n},${r})`;
    };
    ee = (e) => {
      let { h: t, s: r, l: n, a: s } = e, o = Math.round(r * 100), i = Math.round(n * 100);
      return e.a === 0 ? "transparent" : e.a != null ? `hsla(${t},${o}%,${i}%,${s})` : `hsl(${t},${o}%,${i}%)`;
    };
    te = (e) => {
      let t = Z(Q(e));
      return _(t);
    };
    _ = (e) => {
      let t = L(e), r = t.r / 255, n = t.g / 255, s = t.b / 255, o = Math.max(r, n, s), i = Math.min(r, n, s), l, c, p = (o + i) / 2;
      if (o == i)
        l = c = 0;
      else {
        let a = o - i;
        switch (c = p >= 0.5 ? a / (2 - (o + i)) : a / (o + i), o) {
          case r:
            l = (n - s) / a * 60;
            break;
          case n:
            l = ((s - r) / a + 2) * 60;
            break;
          default:
            l = ((r - n) / a + 4) * 60;
            break;
        }
      }
      let d = { h: Math.round(l), s: c, l: p }, f = t.a;
      return f != null && (d.a = f), d;
    };
    L = (e) => {
      let [t, r, n, s] = e.replace(J, "").split(",").map((o) => Number.parseFloat(o));
      return { r: t, g: r, b: n, a: s };
    };
    M = (e) => {
      let [t, r, n, s] = e.replace(z, "").split(",").map((o) => Number.parseFloat(o));
      return { h: t, s: r / 100, l: n / 100, a: s };
    };
    re = { read: function(e) {
      return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    }, write: function(e) {
      return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
    } };
    ne = y(re, { path: "/" });
    T = ne;
    R = (e) => typeof atob != "undefined" && typeof atob == "function" ? atob(e) : typeof Buffer != "undefined" ? new Buffer(e, "base64").toString() : e;
    S = "pk_live_";
    W = "pk_test_";
    se = /^(([a-z]+)-){2}([0-9]{1,2})\.clerk\.accounts([a-z.]*)(dev|com)$/i;
    ae = "__lsbc__";
    A = class {
      constructor(t) {
        this.eventTarget = window;
        this.postMessage = (t2) => {
          try {
            localStorage.setItem(this.channelKey, JSON.stringify(t2)), localStorage.removeItem(this.channelKey);
          } catch {
          }
        };
        this.addEventListener = (t2, r) => {
          this.eventTarget.addEventListener(this.prefixEventName(t2), (n) => {
            r(n);
          });
        };
        this.setupLocalStorageListener = () => {
          let t2 = (r) => {
            if (!(r.key !== this.channelKey || !r.newValue))
              try {
                let n = JSON.parse(r.newValue || ""), s = new MessageEvent(this.prefixEventName("message"), { data: n });
                this.eventTarget.dispatchEvent(s);
              } catch {
              }
          };
          window.addEventListener("storage", t2);
        };
        this.channelKey = ae + t, this.setupLocalStorageListener();
      }
      prefixEventName(t) {
        return this.channelKey + t;
      }
    };
    le = Object.freeze({ "image/png": "png", "image/jpeg": "jpg", "image/gif": "gif", "image/webp": "webp", "image/x-icon": "ico", "image/vnd.microsoft.icon": "ico" });
    je = (e) => le[e];
    O = (...e) => {
    };
    ce = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    B = (e) => {
      let t = (r) => {
        if (!r)
          return r;
        if (Array.isArray(r))
          return r.map((o) => typeof o == "object" || Array.isArray(o) ? t(o) : o);
        let n = { ...r }, s = Object.keys(n);
        for (let o of s) {
          let i = e(o.toString());
          i !== o && (n[i] = n[o], delete n[o]), typeof n[i] == "object" && (n[i] = t(n[i]));
        }
        return n;
      };
      return t;
    };
    et = B(H);
    tt = B($);
    k = `const respond=r=>{self.postMessage(r)},workerToTabIds={};self.addEventListener("message",r=>{const e=r.data;switch(e.type){case"setTimeout":workerToTabIds[e.id]=setTimeout(()=>{respond({id:e.id})},e.ms);break;case"clearTimeout":workerToTabIds[e.id]&&(clearTimeout(workerToTabIds[e.id]),delete workerToTabIds[e.id]);break;case"setInterval":workerToTabIds[e.id]=setInterval(()=>{respond({id:e.id})},e.ms);break;case"clearInterval":workerToTabIds[e.id]&&(clearInterval(workerToTabIds[e.id]),delete workerToTabIds[e.id]);break}});
`;
    F = (e, t = {}) => {
      if (typeof Worker == "undefined")
        return null;
      try {
        let r = new Blob([e], { type: "application/javascript; charset=utf-8" }), n = globalThis.URL.createObjectURL(r);
        return new Worker(n, t);
      } catch {
        return console.warn("Clerk: Cannot create worker from blob. Consider adding worker-src blob:; to your CSP"), null;
      }
    };
    ue = () => {
      let e = globalThis.setTimeout.bind(globalThis), t = globalThis.setInterval.bind(globalThis), r = globalThis.clearTimeout.bind(globalThis), n = globalThis.clearInterval.bind(globalThis);
      return { setTimeout: e, setInterval: t, clearTimeout: r, clearInterval: n, cleanup: O };
    };
    E = () => {
      let e = 0, t = () => e++, r = /* @__PURE__ */ new Map(), n = (a, u) => a == null ? void 0 : a.postMessage(u), s = (a) => {
        var u;
        (u = r.get(a.data.id)) == null || u();
      }, o = F(k, { name: "clerk-timers" });
      if (o == null || o.addEventListener("message", s), !o)
        return ue();
      let i = () => {
        o || (o = F(k, { name: "clerk-timers" }), o == null || o.addEventListener("message", s));
      };
      return { setTimeout: (a, u) => {
        i();
        let m = t();
        return r.set(m, a), n(o, { type: "setTimeout", id: m, ms: u }), m;
      }, setInterval: (a, u) => {
        i();
        let m = t();
        return r.set(m, a), n(o, { type: "setInterval", id: m, ms: u }), m;
      }, clearTimeout: (a) => {
        i(), r.delete(a), n(o, { type: "clearTimeout", id: a });
      }, clearInterval: (a) => {
        i(), r.delete(a), n(o, { type: "clearInterval", id: a });
      }, cleanup: () => {
        o && (o.terminate(), o = null, r.clear());
      } };
    };
    dt = () => typeof window != "undefined";
    de = { maxRetries: 10, firstDelay: 125, timeMultiple: 2, shouldRetry: () => true };
    me = async (e) => new Promise((t) => setTimeout(t, e));
    fe = (e) => {
      let t = 0, r = () => {
        let n = e.firstDelay, s = e.timeMultiple;
        return n * Math.pow(s, t);
      };
      return async () => {
        await me(r()), t++;
      };
    };
    bt = async (e, t = {}) => {
      let r = 0, { maxRetries: n, shouldRetry: s, firstDelay: o, timeMultiple: i } = { ...de, ...t }, l = () => r === n, c = fe({ firstDelay: o, timeMultiple: i });
      for (; !l(); )
        try {
          return await e();
        } catch (p) {
          if (r++, !s(p, r) || l())
            throw p;
          await c();
        }
      throw new Error("Something went wrong");
    };
  }
});

// ../../node_modules/@clerk/shared/dist/esm/index.js
var esm_exports2 = {};
__export(esm_exports2, {
  ClerkInstanceContext: () => En,
  ClientContext: () => Ln,
  LocalStorageBroadcastChannel: () => A,
  OrganizationContext: () => In,
  Poller: () => pt,
  SessionContext: () => Tn,
  UserContext: () => wn,
  addYears: () => We,
  assertContextExists: () => nt,
  buildErrorThrower: () => bn,
  buildPublishableKey: () => Fe,
  camelToSnake: () => H,
  colorToSameTypeString: () => Z,
  createContextAndHook: () => H2,
  createCookieHandler: () => Pe,
  createWorkerTimers: () => E,
  dateTo12HourTime: () => Le,
  deepCamelToSnake: () => et,
  deepSnakeToCamel: () => tt,
  differenceInCalendarDays: () => oe,
  extension: () => je,
  formatRelative: () => Me,
  hasAlpha: () => ve,
  hexStringToRgbaColor: () => Q,
  inBrowser: () => Ce,
  inClientSide: () => dt,
  isHSLColor: () => P,
  isIPV4Address: () => Je,
  isLegacyFrontendApiKey: () => Ge,
  isPublishableKey: () => ie,
  isRGBColor: () => w,
  isRetinaDisplay: () => Ve,
  isTransparent: () => C,
  isValidHexString: () => g,
  isValidHslaString: () => x,
  isValidRgbaString: () => h,
  isomorphicAtob: () => R,
  noop: () => O,
  normalizeDate: () => v,
  parsePublishableKey: () => Ue,
  parseSearchParams: () => ft,
  readJSONFile: () => Oe,
  runWithExponentialBackOff: () => bt,
  snakeToCamel: () => $,
  stringToHslaColor: () => ke,
  stringToSameTypeColor: () => Ee,
  titleize: () => Ze,
  toSentence: () => he,
  useClerkInstanceContext: () => G,
  useClientContext: () => Mn,
  useOrganization: () => Fn,
  useOrganizationContext: () => Ae,
  useOrganizationList: () => _n,
  useOrganizations: () => $n,
  useSessionContext: () => Se,
  useUserContext: () => Ie
});
function bn({ packageName: e, customMessages: i }) {
  let t = e, r = { ...tt2, ...i };
  function a(n, o) {
    if (!o)
      return `${t}: ${n}`;
    let f = n, c = n.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);
    for (let s of c) {
      let l = (o[s[1]] || "").toString();
      f = f.replace(`{{${s[1]}}}`, l);
    }
    return `${t}: ${f}`;
  }
  return { setPackageName({ packageName: n }) {
    return typeof n == "string" && (t = n), this;
  }, setMessages({ customMessages: n }) {
    return Object.assign(r, n || {}), this;
  }, throwInvalidPublishableKeyError(n) {
    throw new Error(a(r.InvalidPublishableKeyErrorMessage, n));
  }, throwInvalidFrontendApiError(n) {
    throw new Error(a(r.InvalidFrontendApiErrorMessage, n));
  }, throwMissingFrontendApiOrPublishableKeyError() {
    throw new Error(a(r.MissingFrontendApiPublishableKeyErrorMessage));
  } };
}
function nt(e, i) {
  if (!e)
    throw typeof i == "string" ? new Error(i) : new Error(`${i.displayName} not found`);
}
function Ve2(e, i, t, r) {
  function a(n) {
    return n instanceof t ? n : new t(function(o) {
      o(n);
    });
  }
  return new (t || (t = Promise))(function(n, o) {
    function f(l) {
      try {
        s(r.next(l));
      } catch (v2) {
        o(v2);
      }
    }
    function c(l) {
      try {
        s(r.throw(l));
      } catch (v2) {
        o(v2);
      }
    }
    function s(l) {
      l.done ? n(l.value) : a(l.value).then(f, c);
    }
    s((r = r.apply(e, i || [])).next());
  });
}
function We2(e, i) {
  var t = { label: 0, sent: function() {
    if (n[0] & 1)
      throw n[1];
    return n[1];
  }, trys: [], ops: [] }, r, a, n, o;
  return o = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function f(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, a && (n = s[0] & 2 ? a.return : s[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, s[1])).done)
          return n;
        switch (a = 0, n && (s = [s[0] & 2, n.value]), s[0]) {
          case 0:
          case 1:
            n = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: false };
          case 5:
            t.label++, a = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (n = t.trys, !(n = n.length > 0 && n[n.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!n || s[1] > n[0] && s[1] < n[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < n[1]) {
              t.label = n[1], n = s;
              break;
            }
            if (n && t.label < n[2]) {
              t.label = n[2], t.ops.push(s);
              break;
            }
            n[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = i.call(e, t);
      } catch (l) {
        s = [6, l], a = 0;
      } finally {
        r = n = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: true };
  }
}
function Tt(e, i) {
  return e.find((t) => t.organization.id === i);
}
function Ze2(e, i, t, r) {
  return [e, i.id, t == null ? void 0 : t.id, t == null ? void 0 : t.updatedAt, r.offset, r.limit].filter(Boolean).join("-");
}
function It(e) {
  return e.map((i) => ({ membership: i, organization: i.organization }));
}
var import_react, import_react2, tt2, H2, En, G, wn, Ie, Ln, Mn, Tn, Se, In, Ae, M2, h2, Q2, b2, k2, S2, Ce2, ye, ut, ft2, ie2, lt, te2, he2, dt2, _e, Re, pe, ct, be, vt, gt, mt, ht, pt2, bt2, ae2, Ot, X2, ve2, Pe2, Ne, _2, Ke, $e, He, ee2, zt, Oe2, Ge2, ke2, qe, Ct, je2, Je2, yt, Ye, Be, ze, Rt, xt, Et, wt, Lt, Ue2, ge, Mt, Pn, xe, Fn, _n, $n;
var init_esm2 = __esm({
  "../../node_modules/@clerk/shared/dist/esm/index.js"() {
    init_chunk_LNDJRDTI();
    import_react = __toESM(require_react());
    import_react2 = __toESM(require_react());
    tt2 = Object.freeze({ InvalidFrontendApiErrorMessage: "The frontendApi passed to Clerk is invalid. You can get your Frontend API key at https://dashboard.clerk.dev/last-active?path=api-keys. (key={{key}})", InvalidPublishableKeyErrorMessage: "The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.dev/last-active?path=api-keys. (key={{key}})", MissingFrontendApiPublishableKeyErrorMessage: "Missing frontendApi or publishableKey. You can get your key at https://dashboard.clerk.dev/last-active?path=api-keys." });
    H2 = (e, i) => {
      let { assertCtxFn: t = nt } = i || {}, r = import_react.default.createContext(void 0);
      return r.displayName = e, [r, () => {
        let o = import_react.default.useContext(r);
        return t(o, `${e} not found`), o.value;
      }, () => {
        let o = import_react.default.useContext(r);
        return o ? o.value : {};
      }];
    };
    [En, G] = H2("ClerkInstanceContext");
    [wn, Ie] = H2("UserContext");
    [Ln, Mn] = H2("ClientContext");
    [Tn, Se] = H2("SessionContext");
    [In, Ae] = H2("OrganizationContext");
    M2 = function() {
    };
    h2 = M2();
    Q2 = Object;
    b2 = function(e) {
      return e === h2;
    };
    k2 = function(e) {
      return typeof e == "function";
    };
    S2 = function(e, i) {
      return Q2.assign({}, e, i);
    };
    Ce2 = "undefined";
    ye = function() {
      return typeof window != Ce2;
    };
    ut = function() {
      return typeof document != Ce2;
    };
    ft2 = function() {
      return ye() && typeof window.requestAnimationFrame != Ce2;
    };
    ie2 = /* @__PURE__ */ new WeakMap();
    lt = 0;
    te2 = function(e) {
      var i = typeof e, t = e && e.constructor, r = t == Date, a, n;
      if (Q2(e) === e && !r && t != RegExp) {
        if (a = ie2.get(e), a)
          return a;
        if (a = ++lt + "~", ie2.set(e, a), t == Array) {
          for (a = "@", n = 0; n < e.length; n++)
            a += te2(e[n]) + ",";
          ie2.set(e, a);
        }
        if (t == Q2) {
          a = "#";
          for (var o = Q2.keys(e).sort(); !b2(n = o.pop()); )
            b2(e[n]) || (a += n + ":" + te2(e[n]) + ",");
          ie2.set(e, a);
        }
      } else
        a = r ? e.toJSON() : i == "symbol" ? e.toString() : i == "string" ? JSON.stringify(e) : "" + e;
      return a;
    };
    he2 = true;
    dt2 = function() {
      return he2;
    };
    _e = ye();
    Re = ut();
    pe = _e && window.addEventListener ? window.addEventListener.bind(window) : M2;
    ct = Re ? document.addEventListener.bind(document) : M2;
    be = _e && window.removeEventListener ? window.removeEventListener.bind(window) : M2;
    vt = Re ? document.removeEventListener.bind(document) : M2;
    gt = function() {
      var e = Re && document.visibilityState;
      return b2(e) || e !== "hidden";
    };
    mt = function(e) {
      return ct("visibilitychange", e), pe("focus", e), function() {
        vt("visibilitychange", e), be("focus", e);
      };
    };
    ht = function(e) {
      var i = function() {
        he2 = true, e();
      }, t = function() {
        he2 = false;
      };
      return pe("online", i), pe("offline", t), function() {
        be("online", i), be("offline", t);
      };
    };
    pt2 = { isOnline: dt2, isVisible: gt };
    bt2 = { initFocus: mt, initReconnect: ht };
    ae2 = !ye() || "Deno" in window;
    Ot = function(e) {
      return ft2() ? window.requestAnimationFrame(e) : setTimeout(e, 1);
    };
    X2 = ae2 ? import_react2.useEffect : import_react2.useLayoutEffect;
    ve2 = typeof navigator != "undefined" && navigator.connection;
    Pe2 = !ae2 && ve2 && (["slow-2g", "2g"].includes(ve2.effectiveType) || ve2.saveData);
    Ne = function(e) {
      if (k2(e))
        try {
          e = e();
        } catch {
          e = "";
        }
      var i = [].concat(e);
      e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? te2(e) : "";
      var t = e ? "$swr$" + e : "";
      return [e, i, t];
    };
    _2 = /* @__PURE__ */ new WeakMap();
    Ke = 0;
    $e = 1;
    He = 2;
    ee2 = function(e, i, t, r, a, n, o) {
      o === void 0 && (o = true);
      var f = _2.get(e), c = f[0], s = f[1], l = f[3], v2 = c[i], d = s[i];
      if (o && d)
        for (var y2 = 0; y2 < d.length; ++y2)
          d[y2](t, r, a);
      return n && (delete l[i], v2 && v2[0]) ? v2[0](He).then(function() {
        return e.get(i);
      }) : e.get(i);
    };
    zt = 0;
    Oe2 = function() {
      return ++zt;
    };
    Ge2 = function() {
      for (var e = [], i = 0; i < arguments.length; i++)
        e[i] = arguments[i];
      return Ve2(void 0, void 0, void 0, function() {
        var t, r, a, n, o, f, c, s, l, v2, d, y2, N, O2, g2, u, q2, U, T2, E2, D;
        return We2(this, function(A2) {
          switch (A2.label) {
            case 0:
              if (t = e[0], r = e[1], a = e[2], n = e[3], o = typeof n == "boolean" ? { revalidate: n } : n || {}, f = b2(o.populateCache) ? true : o.populateCache, c = o.revalidate !== false, s = o.rollbackOnError !== false, l = o.optimisticData, v2 = Ne(r), d = v2[0], y2 = v2[2], !d)
                return [2];
              if (N = _2.get(t), O2 = N[2], e.length < 3)
                return [2, ee2(t, d, t.get(d), h2, h2, c, true)];
              if (g2 = a, q2 = Oe2(), O2[d] = [q2, 0], U = !b2(l), T2 = t.get(d), U && (E2 = k2(l) ? l(T2) : l, t.set(d, E2), ee2(t, d, E2)), k2(g2))
                try {
                  g2 = g2(t.get(d));
                } catch (F2) {
                  u = F2;
                }
              return g2 && k2(g2.then) ? [4, g2.catch(function(F2) {
                u = F2;
              })] : [3, 2];
            case 1:
              if (g2 = A2.sent(), q2 !== O2[d][0]) {
                if (u)
                  throw u;
                return [2, g2];
              } else
                u && U && s && (f = true, g2 = T2, t.set(d, T2));
              A2.label = 2;
            case 2:
              return f && (u || (k2(f) && (g2 = f(g2, T2)), t.set(d, g2)), t.set(y2, S2(t.get(y2), { error: u }))), O2[d][1] = Oe2(), [4, ee2(t, d, g2, u, h2, c, !!f)];
            case 3:
              if (D = A2.sent(), u)
                throw u;
              return [2, f ? D : g2];
          }
        });
      });
    };
    ke2 = function(e, i) {
      for (var t in e)
        e[t][0] && e[t][0](i);
    };
    qe = function(e, i) {
      if (!_2.has(e)) {
        var t = S2(bt2, i), r = {}, a = Ge2.bind(h2, e), n = M2;
        if (_2.set(e, [r, {}, {}, {}, a]), !ae2) {
          var o = t.initFocus(setTimeout.bind(h2, ke2.bind(h2, r, Ke))), f = t.initReconnect(setTimeout.bind(h2, ke2.bind(h2, r, $e)));
          n = function() {
            o && o(), f && f(), _2.delete(e);
          };
        }
        return [e, a, n];
      }
      return [e, _2.get(e)[4]];
    };
    Ct = function(e, i, t, r, a) {
      var n = t.errorRetryCount, o = a.retryCount, f = ~~((Math.random() + 0.5) * (1 << (o < 8 ? o : 8))) * t.errorRetryInterval;
      !b2(n) && o > n || setTimeout(r, f, a);
    };
    je2 = qe(/* @__PURE__ */ new Map());
    Je2 = je2[0];
    yt = je2[1];
    Ye = S2({ onLoadingSlow: M2, onSuccess: M2, onError: M2, onErrorRetry: Ct, onDiscarded: M2, revalidateOnFocus: true, revalidateOnReconnect: true, revalidateIfStale: true, shouldRetryOnError: true, errorRetryInterval: Pe2 ? 1e4 : 5e3, focusThrottleInterval: 5 * 1e3, dedupingInterval: 2 * 1e3, loadingTimeout: Pe2 ? 5e3 : 3e3, compare: function(e, i) {
      return te2(e) == te2(i);
    }, isPaused: function() {
      return false;
    }, cache: Je2, mutate: yt, fallback: {} }, pt2);
    Be = function(e, i) {
      var t = S2(e, i);
      if (i) {
        var r = e.use, a = e.fallback, n = i.use, o = i.fallback;
        r && n && (t.use = r.concat(n)), a && o && (t.fallback = S2(a, o));
      }
      return t;
    };
    ze = (0, import_react2.createContext)({});
    Rt = function(e) {
      var i = e.value, t = Be((0, import_react2.useContext)(ze), i), r = i && i.provider, a = (0, import_react2.useState)(function() {
        return r ? qe(r(t.cache || Je2), i) : h2;
      })[0];
      return a && (t.cache = a[0], t.mutate = a[1]), X2(function() {
        return a ? a[2] : h2;
      }, []), (0, import_react2.createElement)(ze.Provider, S2(e, { value: t }));
    };
    xt = function(e, i) {
      var t = (0, import_react2.useState)({})[1], r = (0, import_react2.useRef)(e), a = (0, import_react2.useRef)({ data: false, error: false, isValidating: false }), n = (0, import_react2.useCallback)(function(o) {
        var f = false, c = r.current;
        for (var s in o) {
          var l = s;
          c[l] !== o[l] && (c[l] = o[l], a.current[l] && (f = true));
        }
        f && !i.current && t({});
      }, []);
      return X2(function() {
        r.current = e;
      }), [r, a.current, n];
    };
    Et = function(e) {
      return k2(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (e[1] === null ? e[2] : e[1]) || {}];
    };
    wt = function() {
      return S2(Ye, (0, import_react2.useContext)(ze));
    };
    Lt = function(e) {
      return function() {
        for (var t = [], r = 0; r < arguments.length; r++)
          t[r] = arguments[r];
        var a = wt(), n = Et(t), o = n[0], f = n[1], c = n[2], s = Be(a, c), l = e, v2 = s.use;
        if (v2)
          for (var d = v2.length; d-- > 0; )
            l = v2[d](l);
        return l(o, f || s.fetcher, s);
      };
    };
    Ue2 = function(e, i, t) {
      var r = i[e] || (i[e] = []);
      return r.push(t), function() {
        var a = r.indexOf(t);
        a >= 0 && (r[a] = r[r.length - 1], r.pop());
      };
    };
    ge = { dedupe: true };
    Mt = function(e, i, t) {
      var r = t.cache, a = t.compare, n = t.fallbackData, o = t.suspense, f = t.revalidateOnMount, c = t.refreshInterval, s = t.refreshWhenHidden, l = t.refreshWhenOffline, v2 = _2.get(r), d = v2[0], y2 = v2[1], N = v2[2], O2 = v2[3], g2 = Ne(e), u = g2[0], q2 = g2[1], U = g2[2], T2 = (0, import_react2.useRef)(false), E2 = (0, import_react2.useRef)(false), D = (0, import_react2.useRef)(u), A2 = (0, import_react2.useRef)(i), F2 = (0, import_react2.useRef)(t), m = function() {
        return F2.current;
      }, oe2 = function() {
        return m().isVisible() && m().isOnline();
      }, ne2 = function(R2) {
        return r.set(U, S2(r.get(U), R2));
      }, Ee2 = r.get(u), Qe = b2(n) ? t.fallback[u] : n, I = b2(Ee2) ? Qe : Ee2, we = r.get(U) || {}, j2 = we.error, Le2 = !T2.current, Me2 = function() {
        return Le2 && !b2(f) ? f : m().isPaused() ? false : o ? b2(I) ? false : t.revalidateIfStale : b2(I) || t.revalidateIfStale;
      }, Xe = function() {
        return !u || !i ? false : we.isValidating ? true : Le2 && Me2();
      }, se2 = Xe(), ue2 = xt({ data: I, error: j2, isValidating: se2 }, E2), K2 = ue2[0], fe2 = ue2[1], re2 = ue2[2], V2 = (0, import_react2.useCallback)(function(R2) {
        return Ve2(void 0, void 0, void 0, function() {
          var z2, C2, x2, J2, Y2, w2, p, P2, L2, le2, B2, $2, de2;
          return We2(this, function(Z2) {
            switch (Z2.label) {
              case 0:
                if (z2 = A2.current, !u || !z2 || E2.current || m().isPaused())
                  return [2, false];
                J2 = true, Y2 = R2 || {}, w2 = !O2[u] || !Y2.dedupe, p = function() {
                  return !E2.current && u === D.current && T2.current;
                }, P2 = function() {
                  var Te = O2[u];
                  Te && Te[1] === x2 && delete O2[u];
                }, L2 = { isValidating: false }, le2 = function() {
                  ne2({ isValidating: false }), p() && re2(L2);
                }, ne2({ isValidating: true }), re2({ isValidating: true }), Z2.label = 1;
              case 1:
                return Z2.trys.push([1, 3, , 4]), w2 && (ee2(r, u, K2.current.data, K2.current.error, true), t.loadingTimeout && !r.get(u) && setTimeout(function() {
                  J2 && p() && m().onLoadingSlow(u, t);
                }, t.loadingTimeout), O2[u] = [z2.apply(void 0, q2), Oe2()]), de2 = O2[u], C2 = de2[0], x2 = de2[1], [4, C2];
              case 2:
                return C2 = Z2.sent(), w2 && setTimeout(P2, t.dedupingInterval), !O2[u] || O2[u][1] !== x2 ? (w2 && p() && m().onDiscarded(u), [2, false]) : (ne2({ error: h2 }), L2.error = h2, B2 = N[u], !b2(B2) && (x2 <= B2[0] || x2 <= B2[1] || B2[1] === 0) ? (le2(), w2 && p() && m().onDiscarded(u), [2, false]) : (a(K2.current.data, C2) ? L2.data = K2.current.data : L2.data = C2, a(r.get(u), C2) || r.set(u, C2), w2 && p() && m().onSuccess(C2, u, t), [3, 4]));
              case 3:
                return $2 = Z2.sent(), P2(), m().isPaused() || (ne2({ error: $2 }), L2.error = $2, w2 && p() && (m().onError($2, u, t), (typeof t.shouldRetryOnError == "boolean" && t.shouldRetryOnError || k2(t.shouldRetryOnError) && t.shouldRetryOnError($2)) && oe2() && m().onErrorRetry($2, u, t, V2, { retryCount: (Y2.retryCount || 0) + 1, dedupe: true }))), [3, 4];
              case 4:
                return J2 = false, le2(), p() && w2 && ee2(r, u, L2.data, L2.error, false), [2, true];
            }
          });
        });
      }, [u]), et2 = (0, import_react2.useCallback)(Ge2.bind(h2, r, function() {
        return D.current;
      }), []);
      if (X2(function() {
        A2.current = i, F2.current = t;
      }), X2(function() {
        if (!!u) {
          var R2 = u !== D.current, z2 = V2.bind(h2, ge), C2 = function(p, P2, L2) {
            re2(S2({ error: P2, isValidating: L2 }, a(K2.current.data, p) ? h2 : { data: p }));
          }, x2 = 0, J2 = function(p) {
            if (p == Ke) {
              var P2 = Date.now();
              m().revalidateOnFocus && P2 > x2 && oe2() && (x2 = P2 + m().focusThrottleInterval, z2());
            } else if (p == $e)
              m().revalidateOnReconnect && oe2() && z2();
            else if (p == He)
              return V2();
          }, Y2 = Ue2(u, y2, C2), w2 = Ue2(u, d, J2);
          return E2.current = false, D.current = u, T2.current = true, R2 && re2({ data: I, error: j2, isValidating: se2 }), Me2() && (b2(I) || ae2 ? z2() : Ot(z2)), function() {
            E2.current = true, Y2(), w2();
          };
        }
      }, [u, V2]), X2(function() {
        var R2;
        function z2() {
          var x2 = k2(c) ? c(I) : c;
          x2 && R2 !== -1 && (R2 = setTimeout(C2, x2));
        }
        function C2() {
          !K2.current.error && (s || m().isVisible()) && (l || m().isOnline()) ? V2(ge).then(z2) : z2();
        }
        return z2(), function() {
          R2 && (clearTimeout(R2), R2 = -1);
        };
      }, [c, s, l, V2]), (0, import_react2.useDebugValue)(I), o && b2(I) && u)
        throw A2.current = i, F2.current = t, E2.current = false, b2(j2) ? V2(ge) : j2;
      return { mutate: et2, get data() {
        return fe2.data = true, I;
      }, get error() {
        return fe2.error = true, j2;
      }, get isValidating() {
        return fe2.isValidating = true, se2;
      } };
    };
    Pn = Q2.defineProperty(Rt, "default", { value: Ye });
    xe = Lt(Mt);
    Fn = (e) => {
      let { invitationList: i, membershipList: t } = e || {}, { organization: r, lastOrganizationMember: a, lastOrganizationInvitation: n } = Ae(), o = Se(), f = G(), c = f.loaded && o && r, s = f.loaded ? () => {
        var u;
        return (u = f.organization) == null ? void 0 : u.getPendingInvitations(i);
      } : () => [], l = f.loaded ? () => {
        var u;
        return (u = f.organization) == null ? void 0 : u.getMemberships(t);
      } : () => [], { data: v2, isValidating: d, mutate: y2 } = xe(c && i ? Ze2("invites", r, n, i) : null, s), { data: N, isValidating: O2, mutate: g2 } = xe(c && t ? Ze2("memberships", r, a, t) : null, l);
      return r === void 0 ? { isLoaded: false, organization: void 0, invitationList: void 0, membershipList: void 0, membership: void 0 } : r === null ? { isLoaded: true, organization: null, invitationList: null, membershipList: null, membership: null } : !f.loaded && r ? { isLoaded: true, organization: r, invitationList: void 0, membershipList: void 0, membership: void 0 } : { isLoaded: !O2 && !d, organization: r, membershipList: N, membership: Tt(o.user.organizationMemberships, r.id), invitationList: v2, unstable__mutate: () => {
        g2(), y2();
      } };
    };
    _n = () => {
      let e = G(), i = Ie();
      return !e.loaded || !i ? { isLoaded: false, organizationList: void 0, createOrganization: void 0, setActive: void 0 } : { isLoaded: true, organizationList: It(i.organizationMemberships), setActive: e.setActive, createOrganization: e.createOrganization };
    };
    $n = () => {
      let e = G();
      return e.loaded ? { isLoaded: true, createOrganization: e.createOrganization, getOrganizationMemberships: e.getOrganizationMemberships, getOrganization: e.getOrganization } : { isLoaded: false, createOrganization: void 0, getOrganizationMemberships: void 0, getOrganization: void 0 };
    };
  }
});

// ../../node_modules/@clerk/clerk-react/dist/errors.js
var require_errors = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.invalidStateError = exports.isMagicLinkError = exports.MagicLinkErrorCode = exports.multipleChildrenInButtonComponent = exports.hocChildrenNotAFunctionError = exports.multipleClerkProvidersError = exports.noGuaranteedUserError = exports.noGuaranteedLoadedError = exports.noClerkProviderError = exports.noFrontendApiError = void 0;
    exports.noFrontendApiError = "Clerk: You must add the frontendApi prop to your <ClerkProvider>";
    exports.noClerkProviderError = "Clerk: You must wrap your application in a <ClerkProvider> component.";
    var noGuaranteedLoadedError = (hookName) => `Clerk: You're calling ${hookName} before there's a guarantee the client has been loaded. Call ${hookName} from a child of <SignedIn>, <SignedOut>, or <ClerkLoaded>, or use the withClerk() HOC.`;
    exports.noGuaranteedLoadedError = noGuaranteedLoadedError;
    var noGuaranteedUserError = (hookName) => `Clerk: You're calling ${hookName} before there's a guarantee there's an active user. Call ${hookName} from a child of <SignedIn> or use the withUser() HOC.`;
    exports.noGuaranteedUserError = noGuaranteedUserError;
    exports.multipleClerkProvidersError = "Clerk: You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>.";
    exports.hocChildrenNotAFunctionError = "Clerk: Child of WithClerk must be a function.";
    var multipleChildrenInButtonComponent = (name) => `Clerk: You've passed multiple children components to <${name}/>. You can only pass a single child component or text.`;
    exports.multipleChildrenInButtonComponent = multipleChildrenInButtonComponent;
    exports.MagicLinkErrorCode = {
      Expired: "expired",
      Failed: "failed"
    };
    function isMagicLinkError(err) {
      return !!err && (err.code === exports.MagicLinkErrorCode.Expired || err.code === exports.MagicLinkErrorCode.Failed);
    }
    exports.isMagicLinkError = isMagicLinkError;
    exports.invalidStateError = "Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.dev/support";
  }
});

// ../../node_modules/@clerk/clerk-react/dist/utils/childrenUtils.js
var require_childrenUtils = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/utils/childrenUtils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.safeExecute = exports.normalizeWithDefaultValue = exports.assertSingleChild = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = tslib_1.__importDefault(require_react());
    var errors_1 = require_errors();
    var assertSingleChild = (children) => (name) => {
      try {
        return react_1.default.Children.only(children);
      } catch (e) {
        throw new Error((0, errors_1.multipleChildrenInButtonComponent)(name));
      }
    };
    exports.assertSingleChild = assertSingleChild;
    var normalizeWithDefaultValue = (children, defaultText) => {
      if (!children) {
        children = defaultText;
      }
      if (typeof children === "string") {
        children = react_1.default.createElement("button", null, children);
      }
      return children;
    };
    exports.normalizeWithDefaultValue = normalizeWithDefaultValue;
    var safeExecute = (cb) => (...args) => {
      if (cb && typeof cb === "function") {
        return cb(...args);
      }
    };
    exports.safeExecute = safeExecute;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/utils/errorThrower.js
var require_errorThrower = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/utils/errorThrower.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.__internal__setErrorThrowerOptions = exports.errorThrower = void 0;
    var shared_1 = (init_esm2(), __toCommonJS(esm_exports2));
    var errorThrower = (0, shared_1.buildErrorThrower)({ packageName: "@clerk/react" });
    exports.errorThrower = errorThrower;
    function __internal__setErrorThrowerOptions(options) {
      errorThrower.setMessages(options).setPackageName(options);
    }
    exports.__internal__setErrorThrowerOptions = __internal__setErrorThrowerOptions;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/utils/inClientSide.js
var require_inClientSide = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/utils/inClientSide.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.inClientSide = void 0;
    var inClientSide = () => {
      return typeof window !== "undefined";
    };
    exports.inClientSide = inClientSide;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/utils/isConstructor.js
var require_isConstructor = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/utils/isConstructor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isConstructor = void 0;
    function isConstructor(f) {
      return typeof f === "function";
    }
    exports.isConstructor = isConstructor;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/info.js
var require_info = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/info.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LIB_NAME = exports.LIB_VERSION = void 0;
    exports.LIB_VERSION = "4.8.2";
    exports.LIB_NAME = "@clerk/clerk-react";
  }
});

// ../../node_modules/@clerk/clerk-react/dist/utils/scriptLoader.js
var require_scriptLoader = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/utils/scriptLoader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadScript = void 0;
    var shared_1 = (init_esm2(), __toCommonJS(esm_exports2));
    var info_1 = require_info();
    var errorThrower_1 = require_errorThrower();
    var FAILED_TO_LOAD_ERROR = "Clerk: Failed to load Clerk";
    var MISSING_BODY_ERROR = "Clerk: Missing <body> element.";
    var UNSTABLE_RELEASE_TAGS = ["staging", "next"];
    var extractNonStableTag = (packageVersion) => {
      var _a;
      const tag = (_a = packageVersion.match(/-(.*)\./)) === null || _a === void 0 ? void 0 : _a[1];
      return tag && UNSTABLE_RELEASE_TAGS.includes(tag) ? tag : void 0;
    };
    var extractMajorVersion = (packageVersion) => {
      return packageVersion.split(".")[0];
    };
    var forceStagingReleaseForClerkFapi = (frontendApi) => {
      return frontendApi.endsWith(".lclstage.dev") || frontendApi.endsWith(".stgstage.dev") || frontendApi.endsWith(".clerkstage.dev") || frontendApi.endsWith(".accountsstage.dev");
    };
    function getScriptSrc({ publishableKey, frontendApi, scriptUrl, scriptVariant = "" }) {
      var _a;
      if (scriptUrl) {
        return scriptUrl;
      }
      const scriptHost = publishableKey ? (_a = (0, shared_1.parsePublishableKey)(publishableKey)) === null || _a === void 0 ? void 0 : _a.frontendApi : frontendApi;
      if (!scriptHost) {
        errorThrower_1.errorThrower.throwMissingFrontendApiOrPublishableKeyError();
      }
      const variant = scriptVariant ? `${scriptVariant.replace(/\.+$/, "")}.` : "";
      const getUrlForTag = (target) => {
        return `https://${scriptHost}/npm/@clerk/clerk-js@${target}/dist/clerk.${variant}browser.js`;
      };
      const nonStableTag = extractNonStableTag(info_1.LIB_VERSION);
      if (forceStagingReleaseForClerkFapi(scriptHost)) {
        return nonStableTag ? getUrlForTag(nonStableTag) : getUrlForTag("staging");
      }
      if (nonStableTag) {
        return getUrlForTag(nonStableTag);
      }
      return getUrlForTag(extractMajorVersion(info_1.LIB_VERSION));
    }
    async function loadScript(params) {
      return new Promise((resolve, reject) => {
        const { frontendApi, publishableKey } = params;
        if (globalThis.Clerk) {
          resolve(null);
        }
        const script = document.createElement("script");
        if (!publishableKey && !frontendApi) {
          errorThrower_1.errorThrower.throwMissingFrontendApiOrPublishableKeyError();
        }
        if (publishableKey) {
          script.setAttribute("data-clerk-publishable-key", publishableKey);
        } else if (frontendApi) {
          script.setAttribute("data-clerk-frontend-api", frontendApi);
        }
        script.setAttribute("crossorigin", "anonymous");
        script.async = true;
        if (!document.body) {
          reject(MISSING_BODY_ERROR);
        }
        script.addEventListener("load", () => resolve(script));
        script.addEventListener("error", () => reject(FAILED_TO_LOAD_ERROR));
        script.src = getScriptSrc(params);
        document.body.appendChild(script);
      });
    }
    exports.loadScript = loadScript;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/utils/useMaxAllowedInstancesGuard.js
var require_useMaxAllowedInstancesGuard = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/utils/useMaxAllowedInstancesGuard.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.withMaxAllowedInstancesGuard = exports.useMaxAllowedInstancesGuard = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = tslib_1.__importDefault(require_react());
    var counts = /* @__PURE__ */ new Map();
    function useMaxAllowedInstancesGuard(name, error, maxCount = 1) {
      react_1.default.useEffect(() => {
        const count = counts.get(name) || 0;
        if (count == maxCount) {
          throw new Error(error);
        }
        counts.set(name, count + 1);
        return () => {
          counts.set(name, (counts.get(name) || 1) - 1);
        };
      }, []);
    }
    exports.useMaxAllowedInstancesGuard = useMaxAllowedInstancesGuard;
    function withMaxAllowedInstancesGuard(WrappedComponent, name, error) {
      const displayName = WrappedComponent.displayName || WrappedComponent.name || name || "Component";
      const Hoc = (props) => {
        useMaxAllowedInstancesGuard(name, error);
        return react_1.default.createElement(WrappedComponent, Object.assign({}, props));
      };
      Hoc.displayName = `withMaxAllowedInstancesGuard(${displayName})`;
      return Hoc;
    }
    exports.withMaxAllowedInstancesGuard = withMaxAllowedInstancesGuard;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/utils/index.js
var require_utils = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_childrenUtils(), exports);
    tslib_1.__exportStar(require_errorThrower(), exports);
    tslib_1.__exportStar(require_inClientSide(), exports);
    tslib_1.__exportStar(require_isConstructor(), exports);
    tslib_1.__exportStar(require_scriptLoader(), exports);
    tslib_1.__exportStar(require_useMaxAllowedInstancesGuard(), exports);
  }
});

// ../../node_modules/@clerk/clerk-react/dist/isomorphicClerk.js
var require_isomorphicClerk = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/isomorphicClerk.js"(exports) {
    "use strict";
    var _a;
    var _IsomorphicClerk_loaded;
    var _IsomorphicClerk_instance;
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var utils_1 = require_utils();
    var IsomorphicClerk = class {
      get loaded() {
        return tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f");
      }
      static getOrCreateInstance(options) {
        if (!(0, utils_1.inClientSide)() || !tslib_1.__classPrivateFieldGet(this, _a, "f", _IsomorphicClerk_instance)) {
          tslib_1.__classPrivateFieldSet(this, _a, new IsomorphicClerk(options), "f", _IsomorphicClerk_instance);
        }
        return tslib_1.__classPrivateFieldGet(this, _a, "f", _IsomorphicClerk_instance);
      }
      constructor(options) {
        this.clerkjs = null;
        this.preopenSignIn = null;
        this.preopenSignUp = null;
        this.preopenUserProfile = null;
        this.preopenOrganizationProfile = null;
        this.premountSignInNodes = /* @__PURE__ */ new Map();
        this.premountSignUpNodes = /* @__PURE__ */ new Map();
        this.premountUserProfileNodes = /* @__PURE__ */ new Map();
        this.premountUserButtonNodes = /* @__PURE__ */ new Map();
        this.premountOrganizationProfileNodes = /* @__PURE__ */ new Map();
        this.premountCreateOrganizationNodes = /* @__PURE__ */ new Map();
        this.premountOrganizationSwitcherNodes = /* @__PURE__ */ new Map();
        this.premountMethodCalls = /* @__PURE__ */ new Map();
        this.loadedListeners = [];
        _IsomorphicClerk_loaded.set(this, false);
        this.addOnLoaded = (cb) => {
          this.loadedListeners.push(cb);
        };
        this.emitLoaded = () => {
          this.loadedListeners.forEach((cb) => cb());
          this.loadedListeners = [];
        };
        this.hydrateClerkJS = (clerkjs) => {
          if (!clerkjs) {
            throw new Error("Failed to hydrate latest Clerk JS");
          }
          this.clerkjs = clerkjs;
          this.premountMethodCalls.forEach((cb) => cb());
          if (this.preopenSignIn !== null) {
            clerkjs.openSignIn(this.preopenSignIn);
          }
          if (this.preopenSignUp !== null) {
            clerkjs.openSignUp(this.preopenSignUp);
          }
          if (this.preopenUserProfile !== null) {
            clerkjs.openUserProfile(this.preopenUserProfile);
          }
          this.premountSignInNodes.forEach((props, node) => {
            clerkjs.mountSignIn(node, props);
          });
          this.premountSignUpNodes.forEach((props, node) => {
            clerkjs.mountSignUp(node, props);
          });
          this.premountUserProfileNodes.forEach((props, node) => {
            clerkjs.mountUserProfile(node, props);
          });
          this.premountUserButtonNodes.forEach((props, node) => {
            clerkjs.mountUserButton(node, props);
          });
          tslib_1.__classPrivateFieldSet(this, _IsomorphicClerk_loaded, true, "f");
          this.emitLoaded();
          return this.clerkjs;
        };
        this.__unstable__updateProps = (props) => {
          if (this.clerkjs && "__unstable__updateProps" in this.clerkjs) {
            this.clerkjs.__unstable__updateProps(props);
          } else {
            return void 0;
          }
        };
        this.setActive = ({ session, organization, beforeEmit }) => {
          if (this.clerkjs) {
            return this.clerkjs.setActive({ session, organization, beforeEmit });
          } else {
            return Promise.reject();
          }
        };
        this.setSession = (session, beforeEmit) => {
          return this.setActive({ session, beforeEmit });
        };
        this.openSignIn = (props) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.openSignIn(props);
          } else {
            this.preopenSignIn = props;
          }
        };
        this.closeSignIn = () => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.closeSignIn();
          } else {
            this.preopenSignIn = null;
          }
        };
        this.openUserProfile = (props) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.openUserProfile(props);
          } else {
            this.preopenUserProfile = props;
          }
        };
        this.closeUserProfile = () => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.closeUserProfile();
          } else {
            this.preopenUserProfile = null;
          }
        };
        this.openOrganizationProfile = (props) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.openOrganizationProfile(props);
          } else {
            this.preopenOrganizationProfile = props;
          }
        };
        this.closeOrganizationProfile = () => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.closeOrganizationProfile();
          } else {
            this.preopenOrganizationProfile = null;
          }
        };
        this.openSignUp = (props) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.openSignUp(props);
          } else {
            this.preopenSignUp = props;
          }
        };
        this.closeSignUp = () => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.closeSignUp();
          } else {
            this.preopenSignUp = null;
          }
        };
        this.mountSignIn = (node, props) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.mountSignIn(node, props);
          } else {
            this.premountSignInNodes.set(node, props);
          }
        };
        this.unmountSignIn = (node) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.unmountSignIn(node);
          } else {
            this.premountSignInNodes.delete(node);
          }
        };
        this.mountSignUp = (node, props) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.mountSignUp(node, props);
          } else {
            this.premountSignUpNodes.set(node, props);
          }
        };
        this.unmountSignUp = (node) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.unmountSignUp(node);
          } else {
            this.premountSignUpNodes.delete(node);
          }
        };
        this.mountUserProfile = (node, props) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.mountUserProfile(node, props);
          } else {
            this.premountUserProfileNodes.set(node, props);
          }
        };
        this.unmountUserProfile = (node) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.unmountUserProfile(node);
          } else {
            this.premountUserProfileNodes.delete(node);
          }
        };
        this.mountOrganizationProfile = (node, props) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.mountOrganizationProfile(node, props);
          } else {
            this.premountOrganizationProfileNodes.set(node, props);
          }
        };
        this.unmountOrganizationProfile = (node) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.unmountOrganizationProfile(node);
          } else {
            this.premountOrganizationProfileNodes.delete(node);
          }
        };
        this.mountCreateOrganization = (node, props) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.mountCreateOrganization(node, props);
          } else {
            this.premountCreateOrganizationNodes.set(node, props);
          }
        };
        this.unmountCreateOrganization = (node) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.unmountCreateOrganization(node);
          } else {
            this.premountCreateOrganizationNodes.delete(node);
          }
        };
        this.mountOrganizationSwitcher = (node, props) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.mountOrganizationSwitcher(node, props);
          } else {
            this.premountOrganizationSwitcherNodes.set(node, props);
          }
        };
        this.unmountOrganizationSwitcher = (node) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.unmountOrganizationSwitcher(node);
          } else {
            this.premountOrganizationSwitcherNodes.delete(node);
          }
        };
        this.mountUserButton = (node, userButtonProps) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.mountUserButton(node, userButtonProps);
          } else {
            this.premountUserButtonNodes.set(node, userButtonProps);
          }
        };
        this.unmountUserButton = (node) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.unmountUserButton(node);
          } else {
            this.premountUserButtonNodes.delete(node);
          }
        };
        this.addListener = (listener) => {
          const callback = () => {
            var _b2;
            return (_b2 = this.clerkjs) === null || _b2 === void 0 ? void 0 : _b2.addListener(listener);
          };
          if (this.clerkjs) {
            callback();
          } else {
            this.premountMethodCalls.set("addListener", callback);
          }
        };
        this.navigate = (to) => {
          const callback = () => {
            var _b2;
            return (_b2 = this.clerkjs) === null || _b2 === void 0 ? void 0 : _b2.navigate(to);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            void callback();
          } else {
            this.premountMethodCalls.set("navigate", callback);
          }
        };
        this.redirectToSignIn = (opts) => {
          const callback = () => {
            var _b2;
            return (_b2 = this.clerkjs) === null || _b2 === void 0 ? void 0 : _b2.redirectToSignIn(opts);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            void callback();
          } else {
            this.premountMethodCalls.set("redirectToSignIn", callback);
          }
        };
        this.redirectToSignUp = (opts) => {
          const callback = () => {
            var _b2;
            return (_b2 = this.clerkjs) === null || _b2 === void 0 ? void 0 : _b2.redirectToSignUp(opts);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            void callback();
          } else {
            this.premountMethodCalls.set("redirectToSignUp", callback);
          }
        };
        this.redirectToUserProfile = () => {
          const callback = () => {
            var _b2;
            return (_b2 = this.clerkjs) === null || _b2 === void 0 ? void 0 : _b2.redirectToUserProfile();
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            callback();
          } else {
            this.premountMethodCalls.set("redirectToUserProfile", callback);
          }
        };
        this.redirectToHome = () => {
          const callback = () => {
            var _b2;
            return (_b2 = this.clerkjs) === null || _b2 === void 0 ? void 0 : _b2.redirectToHome();
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            callback();
          } else {
            this.premountMethodCalls.set("redirectToHome", callback);
          }
        };
        this.redirectToOrganizationProfile = () => {
          const callback = () => {
            var _b2;
            return (_b2 = this.clerkjs) === null || _b2 === void 0 ? void 0 : _b2.redirectToOrganizationProfile();
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            callback();
          } else {
            this.premountMethodCalls.set("redirectToOrganizationProfile", callback);
          }
        };
        this.redirectToCreateOrganization = () => {
          const callback = () => {
            var _b2;
            return (_b2 = this.clerkjs) === null || _b2 === void 0 ? void 0 : _b2.redirectToCreateOrganization();
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            callback();
          } else {
            this.premountMethodCalls.set("redirectToCreateOrganization", callback);
          }
        };
        this.handleRedirectCallback = (params) => {
          const callback = () => {
            var _b2;
            return (_b2 = this.clerkjs) === null || _b2 === void 0 ? void 0 : _b2.handleRedirectCallback(params);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            void callback();
          } else {
            this.premountMethodCalls.set("handleRedirectCallback", callback);
          }
        };
        this.handleMagicLinkVerification = async (params) => {
          const callback = () => {
            var _b2;
            return (_b2 = this.clerkjs) === null || _b2 === void 0 ? void 0 : _b2.handleMagicLinkVerification(params);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            return callback();
          } else {
            this.premountMethodCalls.set("handleMagicLinkVerification", callback);
          }
        };
        this.authenticateWithMetamask = async (params) => {
          const callback = () => {
            var _b2;
            return (_b2 = this.clerkjs) === null || _b2 === void 0 ? void 0 : _b2.authenticateWithMetamask(params);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            return callback();
          } else {
            this.premountMethodCalls.set("authenticateWithMetamask", callback);
          }
        };
        this.createOrganization = async (params) => {
          const callback = () => {
            var _b2;
            return (_b2 = this.clerkjs) === null || _b2 === void 0 ? void 0 : _b2.createOrganization(params);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            return callback();
          } else {
            this.premountMethodCalls.set("createOrganization", callback);
          }
        };
        this.getOrganizationMemberships = async () => {
          const callback = () => {
            var _b2;
            return (_b2 = this.clerkjs) === null || _b2 === void 0 ? void 0 : _b2.getOrganizationMemberships();
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            return callback();
          } else {
            this.premountMethodCalls.set("getOrganizationMemberships", callback);
          }
        };
        this.getOrganization = async (organizationId) => {
          const callback = () => {
            var _b2;
            return (_b2 = this.clerkjs) === null || _b2 === void 0 ? void 0 : _b2.getOrganization(organizationId);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            return callback();
          } else {
            this.premountMethodCalls.set("getOrganization", callback);
          }
        };
        this.signOut = async (signOutCallbackOrOptions, options2) => {
          const callback = () => {
            var _b2;
            return (_b2 = this.clerkjs) === null || _b2 === void 0 ? void 0 : _b2.signOut(signOutCallbackOrOptions, options2);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            return callback();
          } else {
            this.premountMethodCalls.set("signOut", callback);
          }
        };
        const _b = options || {}, { Clerk = null, frontendApi, publishableKey } = _b, rest = tslib_1.__rest(_b, ["Clerk", "frontendApi", "publishableKey"]);
        this.frontendApi = frontendApi;
        this.publishableKey = publishableKey;
        this.options = options;
        this.Clerk = Clerk;
        this.mode = (0, utils_1.inClientSide)() ? "browser" : "server";
        void this.loadClerkJS();
      }
      async loadClerkJS() {
        if (this.mode !== "browser" || tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
          return;
        }
        window.__clerk_frontend_api = this.frontendApi;
        window.__clerk_publishable_key = this.publishableKey;
        try {
          if (this.Clerk) {
            let c;
            if ((0, utils_1.isConstructor)(this.Clerk)) {
              c = new this.Clerk(this.publishableKey || this.frontendApi || "");
              await c.load(this.options);
            } else {
              c = this.Clerk;
              if (!c.isReady()) {
                await c.load(this.options);
              }
            }
            globalThis.Clerk = c;
          } else {
            await (0, utils_1.loadScript)({
              frontendApi: this.frontendApi,
              publishableKey: this.publishableKey,
              scriptUrl: this.options.clerkJSUrl,
              scriptVariant: this.options.clerkJSVariant
            });
            if (!globalThis.Clerk) {
              throw new Error("Failed to download latest ClerkJS. Contact support@clerk.dev.");
            }
            await globalThis.Clerk.load(this.options);
          }
          return this.hydrateClerkJS(globalThis.Clerk);
        } catch (err) {
          let message;
          if (err instanceof Error) {
            message = err.message;
          } else {
            message = String(err);
          }
          this.throwError(message);
          return;
        }
      }
      throwError(errorMsg) {
        if (false) {
          console.error(errorMsg);
        } else {
          throw new Error(errorMsg);
        }
      }
      get version() {
        var _b;
        return (_b = this.clerkjs) === null || _b === void 0 ? void 0 : _b.version;
      }
      get client() {
        if (this.clerkjs) {
          return this.clerkjs.client;
        } else {
          return void 0;
        }
      }
      get session() {
        if (this.clerkjs) {
          return this.clerkjs.session;
        } else {
          return void 0;
        }
      }
      get user() {
        if (this.clerkjs) {
          return this.clerkjs.user;
        } else {
          return void 0;
        }
      }
      get organization() {
        if (this.clerkjs) {
          return this.clerkjs.organization;
        } else {
          return void 0;
        }
      }
      get __unstable__environment() {
        if (this.clerkjs) {
          return this.clerkjs.__unstable__environment;
        } else {
          return void 0;
        }
      }
      __unstable__setEnvironment(...args) {
        if (this.clerkjs && "__unstable__setEnvironment" in this.clerkjs) {
          this.clerkjs.__unstable__setEnvironment(args);
        } else {
          return void 0;
        }
      }
    };
    exports.default = IsomorphicClerk;
    _a = IsomorphicClerk, _IsomorphicClerk_loaded = /* @__PURE__ */ new WeakMap();
    _IsomorphicClerk_instance = { value: void 0 };
  }
});

// ../../node_modules/@clerk/clerk-react/dist/contexts/AuthContext.js
var require_AuthContext = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/contexts/AuthContext.js"(exports) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useAuthContext = exports.AuthContext = void 0;
    var shared_1 = (init_esm2(), __toCommonJS(esm_exports2));
    _a = (0, shared_1.createContextAndHook)("AuthContext"), exports.AuthContext = _a[0], exports.useAuthContext = _a[1];
  }
});

// ../../node_modules/@clerk/clerk-react/dist/contexts/ClientContext.js
var require_ClientContext = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/contexts/ClientContext.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useClientContext = exports.ClientContext = void 0;
    var shared_1 = (init_esm2(), __toCommonJS(esm_exports2));
    Object.defineProperty(exports, "ClientContext", { enumerable: true, get: function() {
      return shared_1.ClientContext;
    } });
    Object.defineProperty(exports, "useClientContext", { enumerable: true, get: function() {
      return shared_1.useClientContext;
    } });
  }
});

// ../../node_modules/@clerk/clerk-react/dist/contexts/IsomorphicClerkContext.js
var require_IsomorphicClerkContext = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/contexts/IsomorphicClerkContext.js"(exports) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useIsomorphicClerkContext = exports.IsomorphicClerkContext = void 0;
    var shared_1 = (init_esm2(), __toCommonJS(esm_exports2));
    _a = [shared_1.ClerkInstanceContext, shared_1.useClerkInstanceContext], exports.IsomorphicClerkContext = _a[0], exports.useIsomorphicClerkContext = _a[1];
  }
});

// ../../node_modules/@clerk/clerk-react/dist/contexts/OrganizationContext.js
var require_OrganizationContext = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/contexts/OrganizationContext.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useOrganizationContext = exports.OrganizationContext = void 0;
    var shared_1 = (init_esm2(), __toCommonJS(esm_exports2));
    Object.defineProperty(exports, "OrganizationContext", { enumerable: true, get: function() {
      return shared_1.OrganizationContext;
    } });
    Object.defineProperty(exports, "useOrganizationContext", { enumerable: true, get: function() {
      return shared_1.useOrganizationContext;
    } });
  }
});

// ../../node_modules/@clerk/clerk-react/dist/contexts/SessionContext.js
var require_SessionContext = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/contexts/SessionContext.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSessionContext = exports.SessionContext = void 0;
    var shared_1 = (init_esm2(), __toCommonJS(esm_exports2));
    Object.defineProperty(exports, "SessionContext", { enumerable: true, get: function() {
      return shared_1.SessionContext;
    } });
    Object.defineProperty(exports, "useSessionContext", { enumerable: true, get: function() {
      return shared_1.useSessionContext;
    } });
  }
});

// ../../node_modules/@clerk/clerk-react/dist/contexts/UserContext.js
var require_UserContext = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/contexts/UserContext.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useUserContext = exports.UserContext = void 0;
    var shared_1 = (init_esm2(), __toCommonJS(esm_exports2));
    Object.defineProperty(exports, "UserContext", { enumerable: true, get: function() {
      return shared_1.UserContext;
    } });
    Object.defineProperty(exports, "useUserContext", { enumerable: true, get: function() {
      return shared_1.useUserContext;
    } });
  }
});

// ../../node_modules/@clerk/clerk-react/dist/contexts/ClerkContextProvider.js
var require_ClerkContextProvider = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/contexts/ClerkContextProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClerkContextProvider = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = tslib_1.__importDefault(require_react());
    var isomorphicClerk_1 = tslib_1.__importDefault(require_isomorphicClerk());
    var AuthContext_1 = require_AuthContext();
    var ClientContext_1 = require_ClientContext();
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var OrganizationContext_1 = require_OrganizationContext();
    var SessionContext_1 = require_SessionContext();
    var UserContext_1 = require_UserContext();
    function ClerkContextProvider(props) {
      const { isomorphicClerkOptions, initialState, children } = props;
      const { isomorphicClerk: clerk, loaded: clerkLoaded } = useLoadedIsomorphicClerk(isomorphicClerkOptions);
      const [state, setState] = react_1.default.useState({
        client: clerk.client,
        session: clerk.session,
        user: clerk.user,
        organization: clerk.organization,
        lastOrganizationInvitation: null,
        lastOrganizationMember: null
      });
      react_1.default.useEffect(() => {
        return clerk.addListener((e) => setState(Object.assign({}, e)));
      }, []);
      const derivedState = deriveState(clerkLoaded, state, initialState);
      const clerkCtx = react_1.default.useMemo(() => ({ value: clerk }), [clerkLoaded]);
      const clientCtx = react_1.default.useMemo(() => ({ value: state.client }), [state.client]);
      const { sessionId, session, userId, user, organizationId, organization } = derivedState;
      const actor = (session === null || session === void 0 ? void 0 : session.actor) || null;
      const organizationMembership = organization ? user === null || user === void 0 ? void 0 : user.organizationMemberships.find((m) => m.organization.id === organizationId) : organization;
      const orgId = organizationId;
      const orgRole = organizationMembership ? organizationMembership.role : organizationMembership;
      const orgSlug = organizationMembership ? organizationMembership.organization.slug : organizationMembership;
      const authCtx = react_1.default.useMemo(() => ({
        value: { sessionId, userId, actor, orgId, orgRole, orgSlug }
      }), [sessionId, userId, actor, orgId, orgRole, orgSlug]);
      const userCtx = react_1.default.useMemo(() => ({ value: user }), [userId, user]);
      const sessionCtx = react_1.default.useMemo(() => ({ value: session }), [sessionId, session]);
      const organizationCtx = react_1.default.useMemo(() => {
        return {
          value: {
            organization: derivedState.organization,
            lastOrganizationInvitation: derivedState.lastOrganizationInvitation,
            lastOrganizationMember: derivedState.lastOrganizationMember
          }
        };
      }, [
        derivedState.organizationId,
        derivedState.organization,
        derivedState.lastOrganizationInvitation,
        derivedState.lastOrganizationMember
      ]);
      return react_1.default.createElement(
        IsomorphicClerkContext_1.IsomorphicClerkContext.Provider,
        { value: clerkCtx },
        react_1.default.createElement(
          ClientContext_1.ClientContext.Provider,
          { value: clientCtx },
          react_1.default.createElement(
            SessionContext_1.SessionContext.Provider,
            { value: sessionCtx },
            react_1.default.createElement(
              OrganizationContext_1.OrganizationContext.Provider,
              { value: organizationCtx },
              react_1.default.createElement(
                AuthContext_1.AuthContext.Provider,
                { value: authCtx },
                react_1.default.createElement(UserContext_1.UserContext.Provider, { value: userCtx }, children)
              )
            )
          )
        )
      );
    }
    exports.ClerkContextProvider = ClerkContextProvider;
    var useLoadedIsomorphicClerk = (options) => {
      const [loaded, setLoaded] = react_1.default.useState(false);
      const isomorphicClerk = react_1.default.useMemo(() => isomorphicClerk_1.default.getOrCreateInstance(options), []);
      react_1.default.useEffect(() => {
        isomorphicClerk.__unstable__updateProps({ appearance: options.appearance });
      }, [options.appearance]);
      react_1.default.useEffect(() => {
        isomorphicClerk.__unstable__updateProps({ options });
      }, [options.localization]);
      react_1.default.useEffect(() => {
        isomorphicClerk.addOnLoaded(() => setLoaded(true));
      }, []);
      return { isomorphicClerk, loaded };
    };
    function deriveState(clerkLoaded, state, initialState) {
      if (!clerkLoaded && initialState) {
        const userId2 = initialState.userId;
        const user2 = initialState.user;
        const sessionId2 = initialState.sessionId;
        const session2 = initialState.session;
        const organization2 = initialState.organization;
        const organizationId2 = initialState.organizationId;
        return {
          sessionId: sessionId2,
          session: session2,
          userId: userId2,
          user: user2,
          organizationId: organizationId2,
          organization: organization2,
          lastOrganizationInvitation: null,
          lastOrganizationMember: null
        };
      }
      const userId = state.user ? state.user.id : state.user;
      const user = state.user;
      const sessionId = state.session ? state.session.id : state.session;
      const session = state.session;
      const organizationId = state.organization ? state.organization.id : state.organization;
      const organization = state.organization;
      const lastOrganizationInvitation = state.lastOrganizationInvitation;
      const lastOrganizationMember = state.lastOrganizationMember;
      return {
        sessionId,
        session,
        userId,
        user,
        organization,
        organizationId,
        lastOrganizationInvitation,
        lastOrganizationMember
      };
    }
  }
});

// ../../node_modules/@clerk/clerk-react/dist/contexts/assertHelpers.js
var require_assertHelpers = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/contexts/assertHelpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assertClerkLoadedGuarantee = exports.assertWrappedByClerkProvider = void 0;
    var errors_1 = require_errors();
    function assertWrappedByClerkProvider(contextVal) {
      if (!contextVal) {
        throw new Error(errors_1.noClerkProviderError);
      }
    }
    exports.assertWrappedByClerkProvider = assertWrappedByClerkProvider;
    function assertClerkLoadedGuarantee(guarantee, hookName) {
      if (!guarantee) {
        throw new Error((0, errors_1.noGuaranteedLoadedError)(hookName));
      }
    }
    exports.assertClerkLoadedGuarantee = assertClerkLoadedGuarantee;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/contexts/StructureContext.js
var require_StructureContext = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/contexts/StructureContext.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoadedGuarantee = exports.StructureContext = exports.StructureContextStates = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = tslib_1.__importDefault(require_react());
    var assertHelpers_1 = require_assertHelpers();
    exports.StructureContextStates = Object.freeze({
      noGuarantees: Object.freeze({
        guaranteedLoaded: false
      }),
      guaranteedLoaded: Object.freeze({
        guaranteedLoaded: true
      })
    });
    exports.StructureContext = react_1.default.createContext(void 0);
    exports.StructureContext.displayName = "StructureContext";
    var useStructureContext = () => {
      const structureCtx = react_1.default.useContext(exports.StructureContext);
      (0, assertHelpers_1.assertWrappedByClerkProvider)(structureCtx);
      return structureCtx;
    };
    var LoadedGuarantee = ({ children }) => {
      const structure = useStructureContext();
      if (structure.guaranteedLoaded) {
        return react_1.default.createElement(react_1.default.Fragment, null, children);
      }
      return react_1.default.createElement(exports.StructureContext.Provider, { value: exports.StructureContextStates.guaranteedLoaded }, children);
    };
    exports.LoadedGuarantee = LoadedGuarantee;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/contexts/ClerkProvider.js
var require_ClerkProvider = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/contexts/ClerkProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.__internal__setErrorThrowerOptions = exports.ClerkProvider = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var shared_1 = (init_esm2(), __toCommonJS(esm_exports2));
    var react_1 = tslib_1.__importDefault(require_react());
    var errors_1 = require_errors();
    var utils_1 = require_utils();
    Object.defineProperty(exports, "__internal__setErrorThrowerOptions", { enumerable: true, get: function() {
      return utils_1.__internal__setErrorThrowerOptions;
    } });
    var ClerkContextProvider_1 = require_ClerkContextProvider();
    var StructureContext_1 = require_StructureContext();
    (0, utils_1.__internal__setErrorThrowerOptions)({
      packageName: "@clerk/clerk-react"
    });
    function ClerkProviderBase(props) {
      const { initialState, children } = props, restIsomorphicClerkOptions = tslib_1.__rest(props, ["initialState", "children"]);
      const { frontendApi = "", publishableKey = "", Clerk: userInitialisedClerk } = restIsomorphicClerkOptions;
      if (!userInitialisedClerk) {
        if (!publishableKey && !frontendApi) {
          utils_1.errorThrower.throwMissingFrontendApiOrPublishableKeyError();
        } else if (publishableKey && !(0, shared_1.isPublishableKey)(publishableKey)) {
          utils_1.errorThrower.throwInvalidPublishableKeyError({ key: publishableKey });
        } else if (frontendApi && !(0, shared_1.isLegacyFrontendApiKey)(frontendApi)) {
          utils_1.errorThrower.throwInvalidFrontendApiError({ key: frontendApi });
        }
      }
      return react_1.default.createElement(
        StructureContext_1.StructureContext.Provider,
        { value: StructureContext_1.StructureContextStates.noGuarantees },
        react_1.default.createElement(ClerkContextProvider_1.ClerkContextProvider, { initialState, isomorphicClerkOptions: restIsomorphicClerkOptions }, children)
      );
    }
    var ClerkProvider = (0, utils_1.withMaxAllowedInstancesGuard)(ClerkProviderBase, "ClerkProvider", errors_1.multipleClerkProvidersError);
    exports.ClerkProvider = ClerkProvider;
    ClerkProvider.displayName = "ClerkProvider";
  }
});

// ../../node_modules/@clerk/clerk-react/dist/contexts/index.js
var require_contexts = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/contexts/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.__internal__setErrorThrowerOptions = exports.ClerkProvider = void 0;
    var ClerkProvider_1 = require_ClerkProvider();
    Object.defineProperty(exports, "ClerkProvider", { enumerable: true, get: function() {
      return ClerkProvider_1.ClerkProvider;
    } });
    Object.defineProperty(exports, "__internal__setErrorThrowerOptions", { enumerable: true, get: function() {
      return ClerkProvider_1.__internal__setErrorThrowerOptions;
    } });
  }
});

// ../../node_modules/@clerk/clerk-react/dist/components/withClerk.js
var require_withClerk = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/components/withClerk.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WithClerk = exports.withClerk = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = tslib_1.__importDefault(require_react());
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var StructureContext_1 = require_StructureContext();
    var errors_1 = require_errors();
    var withClerk = (Component, displayName) => {
      displayName = displayName || Component.displayName || Component.name || "Component";
      Component.displayName = displayName;
      const HOC = (props) => {
        const clerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
        if (!clerk.loaded) {
          return null;
        }
        return react_1.default.createElement(
          StructureContext_1.LoadedGuarantee,
          null,
          react_1.default.createElement(Component, Object.assign({}, props, { clerk }))
        );
      };
      HOC.displayName = `withClerk(${displayName})`;
      return HOC;
    };
    exports.withClerk = withClerk;
    var WithClerk = ({ children }) => {
      const clerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      if (typeof children !== "function") {
        throw new Error(errors_1.hocChildrenNotAFunctionError);
      }
      if (!clerk.loaded) {
        return null;
      }
      return react_1.default.createElement(StructureContext_1.LoadedGuarantee, null, children(clerk));
    };
    exports.WithClerk = WithClerk;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/components/uiComponents.js
var require_uiComponents = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/components/uiComponents.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OrganizationSwitcher = exports.CreateOrganization = exports.OrganizationProfile = exports.UserButton = exports.UserProfile = exports.SignUp = exports.SignIn = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = tslib_1.__importDefault(require_react());
    var withClerk_1 = require_withClerk();
    var Portal = class extends react_1.default.PureComponent {
      constructor() {
        super(...arguments);
        this.portalRef = react_1.default.createRef();
      }
      componentDidUpdate(prevProps) {
        if (prevProps.props.appearance !== this.props.props.appearance) {
          this.props.updateProps({ node: this.portalRef.current, props: this.props.props });
        }
      }
      componentDidMount() {
        if (this.portalRef.current) {
          this.props.mount(this.portalRef.current, this.props.props);
        }
      }
      componentWillUnmount() {
        if (this.portalRef.current) {
          this.props.unmount(this.portalRef.current);
        }
      }
      render() {
        return react_1.default.createElement("div", { ref: this.portalRef });
      }
    };
    exports.SignIn = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, props = tslib_1.__rest(_a, ["clerk"]);
      return react_1.default.createElement(Portal, { mount: clerk.mountSignIn, unmount: clerk.unmountSignIn, updateProps: clerk.__unstable__updateProps, props });
    }, "SignIn");
    exports.SignUp = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, props = tslib_1.__rest(_a, ["clerk"]);
      return react_1.default.createElement(Portal, { mount: clerk.mountSignUp, unmount: clerk.unmountSignUp, updateProps: clerk.__unstable__updateProps, props });
    }, "SignUp");
    exports.UserProfile = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, props = tslib_1.__rest(_a, ["clerk"]);
      return react_1.default.createElement(Portal, { mount: clerk.mountUserProfile, unmount: clerk.unmountUserProfile, updateProps: clerk.__unstable__updateProps, props });
    }, "UserProfile");
    exports.UserButton = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, props = tslib_1.__rest(_a, ["clerk"]);
      return react_1.default.createElement(Portal, { mount: clerk.mountUserButton, unmount: clerk.unmountUserButton, updateProps: clerk.__unstable__updateProps, props });
    }, "UserButton");
    exports.OrganizationProfile = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, props = tslib_1.__rest(_a, ["clerk"]);
      return react_1.default.createElement(Portal, { mount: clerk.mountOrganizationProfile, unmount: clerk.unmountOrganizationProfile, updateProps: clerk.__unstable__updateProps, props });
    }, "OrganizationProfile");
    exports.CreateOrganization = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, props = tslib_1.__rest(_a, ["clerk"]);
      return react_1.default.createElement(Portal, { mount: clerk.mountCreateOrganization, unmount: clerk.unmountCreateOrganization, updateProps: clerk.__unstable__updateProps, props });
    }, "CreateOrganization");
    exports.OrganizationSwitcher = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, props = tslib_1.__rest(_a, ["clerk"]);
      return react_1.default.createElement(Portal, { mount: clerk.mountOrganizationSwitcher, unmount: clerk.unmountOrganizationSwitcher, updateProps: clerk.__unstable__updateProps, props });
    }, "OrganizationSwitcher");
  }
});

// ../../node_modules/@clerk/clerk-react/dist/components/controlComponents.js
var require_controlComponents = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/components/controlComponents.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MultisessionAppSupport = exports.AuthenticateWithRedirectCallback = exports.RedirectToCreateOrganization = exports.RedirectToOrganizationProfile = exports.RedirectToUserProfile = exports.RedirectToSignUp = exports.RedirectToSignIn = exports.ClerkLoading = exports.ClerkLoaded = exports.SignedOut = exports.SignedIn = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = tslib_1.__importDefault(require_react());
    var AuthContext_1 = require_AuthContext();
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var SessionContext_1 = require_SessionContext();
    var StructureContext_1 = require_StructureContext();
    var withClerk_1 = require_withClerk();
    var SignedIn = ({ children }) => {
      const { userId } = (0, AuthContext_1.useAuthContext)();
      if (userId) {
        return react_1.default.createElement(react_1.default.Fragment, null, children);
      }
      return null;
    };
    exports.SignedIn = SignedIn;
    var SignedOut = ({ children }) => {
      const { userId } = (0, AuthContext_1.useAuthContext)();
      if (userId === null) {
        return react_1.default.createElement(react_1.default.Fragment, null, children);
      }
      return null;
    };
    exports.SignedOut = SignedOut;
    var ClerkLoaded = ({ children }) => {
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      if (!isomorphicClerk.loaded) {
        return null;
      }
      return react_1.default.createElement(StructureContext_1.LoadedGuarantee, null, children);
    };
    exports.ClerkLoaded = ClerkLoaded;
    var ClerkLoading = ({ children }) => {
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      if (isomorphicClerk.loaded) {
        return null;
      }
      return react_1.default.createElement(react_1.default.Fragment, null, children);
    };
    exports.ClerkLoading = ClerkLoading;
    exports.RedirectToSignIn = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, props = tslib_1.__rest(_a, ["clerk"]);
      const { client, session } = clerk;
      const { __unstable__environment } = clerk;
      const hasActiveSessions = client.activeSessions && client.activeSessions.length > 0;
      react_1.default.useEffect(() => {
        if (session === null && hasActiveSessions && __unstable__environment) {
          const { afterSignOutOneUrl } = __unstable__environment.displayConfig;
          void clerk.navigate(afterSignOutOneUrl);
        } else {
          void clerk.redirectToSignIn(props);
        }
      }, []);
      return null;
    }, "RedirectToSignIn");
    exports.RedirectToSignUp = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, props = tslib_1.__rest(_a, ["clerk"]);
      react_1.default.useEffect(() => {
        void clerk.redirectToSignUp(props);
      }, []);
      return null;
    }, "RedirectToSignUp");
    exports.RedirectToUserProfile = (0, withClerk_1.withClerk)(({ clerk }) => {
      react_1.default.useEffect(() => {
        clerk.redirectToUserProfile();
      }, []);
      return null;
    }, "RedirectToUserProfile");
    exports.RedirectToOrganizationProfile = (0, withClerk_1.withClerk)(({ clerk }) => {
      react_1.default.useEffect(() => {
        clerk.redirectToOrganizationProfile();
      }, []);
      return null;
    }, "RedirectToOrganizationProfile");
    exports.RedirectToCreateOrganization = (0, withClerk_1.withClerk)(({ clerk }) => {
      react_1.default.useEffect(() => {
        clerk.redirectToCreateOrganization();
      }, []);
      return null;
    }, "RedirectToCreateOrganization");
    exports.AuthenticateWithRedirectCallback = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, handleRedirectCallbackParams = tslib_1.__rest(_a, ["clerk"]);
      react_1.default.useEffect(() => {
        void clerk.handleRedirectCallback(handleRedirectCallbackParams);
      }, []);
      return null;
    }, "AuthenticateWithRedirectCallback");
    var MultisessionAppSupport = ({ children }) => {
      const session = (0, SessionContext_1.useSessionContext)();
      return react_1.default.createElement(react_1.default.Fragment, { key: session ? session.id : "no-users" }, children);
    };
    exports.MultisessionAppSupport = MultisessionAppSupport;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/components/withUser.js
var require_withUser = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/components/withUser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WithUser = exports.withUser = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = tslib_1.__importDefault(require_react());
    var UserContext_1 = require_UserContext();
    var errors_1 = require_errors();
    var withUser = (Component, displayName) => {
      displayName = displayName || Component.displayName || Component.name || "Component";
      Component.displayName = displayName;
      const HOC = (props) => {
        const user = (0, UserContext_1.useUserContext)();
        if (!user) {
          return null;
        }
        return react_1.default.createElement(Component, Object.assign({}, props, { user }));
      };
      HOC.displayName = `withUser(${displayName})`;
      return HOC;
    };
    exports.withUser = withUser;
    var WithUser = ({ children }) => {
      const user = (0, UserContext_1.useUserContext)();
      if (typeof children !== "function") {
        throw new Error(errors_1.hocChildrenNotAFunctionError);
      }
      if (!user) {
        return null;
      }
      return react_1.default.createElement(react_1.default.Fragment, null, children(user));
    };
    exports.WithUser = WithUser;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/components/withSession.js
var require_withSession = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/components/withSession.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WithSession = exports.withSession = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = tslib_1.__importDefault(require_react());
    var SessionContext_1 = require_SessionContext();
    var errors_1 = require_errors();
    var withSession = (Component, displayName) => {
      displayName = displayName || Component.displayName || Component.name || "Component";
      Component.displayName = displayName;
      const HOC = (props) => {
        const session = (0, SessionContext_1.useSessionContext)();
        if (!session) {
          return null;
        }
        return react_1.default.createElement(Component, Object.assign({}, props, { session }));
      };
      HOC.displayName = `withSession(${displayName})`;
      return HOC;
    };
    exports.withSession = withSession;
    var WithSession = ({ children }) => {
      const session = (0, SessionContext_1.useSessionContext)();
      if (typeof children !== "function") {
        throw new Error(errors_1.hocChildrenNotAFunctionError);
      }
      if (!session) {
        return null;
      }
      return react_1.default.createElement(react_1.default.Fragment, null, children(session));
    };
    exports.WithSession = WithSession;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/components/SignInButton.js
var require_SignInButton = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/components/SignInButton.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SignInButton = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = tslib_1.__importDefault(require_react());
    var utils_1 = require_utils();
    var withClerk_1 = require_withClerk();
    exports.SignInButton = (0, withClerk_1.withClerk)((_a) => {
      var { clerk, children } = _a, props = tslib_1.__rest(_a, ["clerk", "children"]);
      const { afterSignInUrl, afterSignUpUrl, redirectUrl, mode } = props, rest = tslib_1.__rest(props, ["afterSignInUrl", "afterSignUpUrl", "redirectUrl", "mode"]);
      children = (0, utils_1.normalizeWithDefaultValue)(children, "Sign in");
      const child = (0, utils_1.assertSingleChild)(children)("SignInButton");
      const clickHandler = () => {
        const opts = { afterSignInUrl, afterSignUpUrl, redirectUrl };
        if (mode === "modal") {
          return clerk.openSignIn(opts);
        }
        return clerk.redirectToSignIn(opts);
      };
      const wrappedChildClickHandler = async (e) => {
        await (0, utils_1.safeExecute)(child.props.onClick)(e);
        return clickHandler();
      };
      const childProps = Object.assign(Object.assign({}, rest), { onClick: wrappedChildClickHandler });
      return react_1.default.cloneElement(child, childProps);
    }, "SignInButton");
  }
});

// ../../node_modules/@clerk/clerk-react/dist/components/SignUpButton.js
var require_SignUpButton = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/components/SignUpButton.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SignUpButton = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = tslib_1.__importDefault(require_react());
    var utils_1 = require_utils();
    var withClerk_1 = require_withClerk();
    exports.SignUpButton = (0, withClerk_1.withClerk)((_a) => {
      var { clerk, children } = _a, props = tslib_1.__rest(_a, ["clerk", "children"]);
      const { afterSignInUrl, afterSignUpUrl, redirectUrl, mode } = props, rest = tslib_1.__rest(props, ["afterSignInUrl", "afterSignUpUrl", "redirectUrl", "mode"]);
      children = (0, utils_1.normalizeWithDefaultValue)(children, "Sign up");
      const child = (0, utils_1.assertSingleChild)(children)("SignUpButton");
      const clickHandler = () => {
        const opts = { afterSignInUrl, afterSignUpUrl, redirectUrl };
        if (mode === "modal") {
          return clerk.openSignUp(opts);
        }
        return clerk.redirectToSignUp(opts);
      };
      const wrappedChildClickHandler = async (e) => {
        await (0, utils_1.safeExecute)(child.props.onClick)(e);
        return clickHandler();
      };
      const childProps = Object.assign(Object.assign({}, rest), { onClick: wrappedChildClickHandler });
      return react_1.default.cloneElement(child, childProps);
    }, "SignUpButton");
  }
});

// ../../node_modules/@clerk/clerk-react/dist/components/SignOutButton.js
var require_SignOutButton = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/components/SignOutButton.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SignOutButton = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = tslib_1.__importDefault(require_react());
    var utils_1 = require_utils();
    var withClerk_1 = require_withClerk();
    exports.SignOutButton = (0, withClerk_1.withClerk)((_a) => {
      var { clerk, children } = _a, props = tslib_1.__rest(_a, ["clerk", "children"]);
      const { signOutCallback, signOutOptions } = props, rest = tslib_1.__rest(props, ["signOutCallback", "signOutOptions"]);
      children = (0, utils_1.normalizeWithDefaultValue)(children, "Sign out");
      const child = (0, utils_1.assertSingleChild)(children)("SignOutButton");
      const clickHandler = () => {
        return clerk.signOut(signOutCallback, signOutOptions);
      };
      const wrappedChildClickHandler = async (e) => {
        await (0, utils_1.safeExecute)(child.props.onClick)(e);
        return clickHandler();
      };
      const childProps = Object.assign(Object.assign({}, rest), { onClick: wrappedChildClickHandler });
      return react_1.default.cloneElement(child, childProps);
    }, "SignOutButton");
  }
});

// ../../node_modules/@clerk/clerk-react/dist/components/SignInWithMetamaskButton.js
var require_SignInWithMetamaskButton = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/components/SignInWithMetamaskButton.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SignInWithMetamaskButton = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = tslib_1.__importDefault(require_react());
    var utils_1 = require_utils();
    var withClerk_1 = require_withClerk();
    exports.SignInWithMetamaskButton = (0, withClerk_1.withClerk)((_a) => {
      var { clerk, children } = _a, props = tslib_1.__rest(_a, ["clerk", "children"]);
      const { redirectUrl } = props, rest = tslib_1.__rest(props, ["redirectUrl"]);
      children = (0, utils_1.normalizeWithDefaultValue)(children, "Sign in with Metamask");
      const child = (0, utils_1.assertSingleChild)(children)("SignInWithMetamaskButton");
      const clickHandler = async () => {
        async function authenticate() {
          await clerk.authenticateWithMetamask({ redirectUrl });
        }
        void authenticate();
      };
      const wrappedChildClickHandler = async (e) => {
        await (0, utils_1.safeExecute)(child.props.onClick)(e);
        return clickHandler();
      };
      const childProps = Object.assign(Object.assign({}, rest), { onClick: wrappedChildClickHandler });
      return react_1.default.cloneElement(child, childProps);
    }, "SignInWithMetamask");
  }
});

// ../../node_modules/@clerk/clerk-react/dist/components/index.js
var require_components = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/components/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RedirectToOrganizationProfile = exports.RedirectToCreateOrganization = exports.MultisessionAppSupport = exports.AuthenticateWithRedirectCallback = exports.RedirectToUserProfile = exports.RedirectToSignUp = exports.RedirectToSignIn = exports.SignedIn = exports.SignedOut = exports.ClerkLoading = exports.ClerkLoaded = exports.CreateOrganization = exports.OrganizationProfile = exports.OrganizationSwitcher = exports.UserButton = exports.UserProfile = exports.SignIn = exports.SignUp = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var uiComponents_1 = require_uiComponents();
    Object.defineProperty(exports, "SignUp", { enumerable: true, get: function() {
      return uiComponents_1.SignUp;
    } });
    Object.defineProperty(exports, "SignIn", { enumerable: true, get: function() {
      return uiComponents_1.SignIn;
    } });
    Object.defineProperty(exports, "UserProfile", { enumerable: true, get: function() {
      return uiComponents_1.UserProfile;
    } });
    Object.defineProperty(exports, "UserButton", { enumerable: true, get: function() {
      return uiComponents_1.UserButton;
    } });
    Object.defineProperty(exports, "OrganizationSwitcher", { enumerable: true, get: function() {
      return uiComponents_1.OrganizationSwitcher;
    } });
    Object.defineProperty(exports, "OrganizationProfile", { enumerable: true, get: function() {
      return uiComponents_1.OrganizationProfile;
    } });
    Object.defineProperty(exports, "CreateOrganization", { enumerable: true, get: function() {
      return uiComponents_1.CreateOrganization;
    } });
    var controlComponents_1 = require_controlComponents();
    Object.defineProperty(exports, "ClerkLoaded", { enumerable: true, get: function() {
      return controlComponents_1.ClerkLoaded;
    } });
    Object.defineProperty(exports, "ClerkLoading", { enumerable: true, get: function() {
      return controlComponents_1.ClerkLoading;
    } });
    Object.defineProperty(exports, "SignedOut", { enumerable: true, get: function() {
      return controlComponents_1.SignedOut;
    } });
    Object.defineProperty(exports, "SignedIn", { enumerable: true, get: function() {
      return controlComponents_1.SignedIn;
    } });
    Object.defineProperty(exports, "RedirectToSignIn", { enumerable: true, get: function() {
      return controlComponents_1.RedirectToSignIn;
    } });
    Object.defineProperty(exports, "RedirectToSignUp", { enumerable: true, get: function() {
      return controlComponents_1.RedirectToSignUp;
    } });
    Object.defineProperty(exports, "RedirectToUserProfile", { enumerable: true, get: function() {
      return controlComponents_1.RedirectToUserProfile;
    } });
    Object.defineProperty(exports, "AuthenticateWithRedirectCallback", { enumerable: true, get: function() {
      return controlComponents_1.AuthenticateWithRedirectCallback;
    } });
    Object.defineProperty(exports, "MultisessionAppSupport", { enumerable: true, get: function() {
      return controlComponents_1.MultisessionAppSupport;
    } });
    Object.defineProperty(exports, "RedirectToCreateOrganization", { enumerable: true, get: function() {
      return controlComponents_1.RedirectToCreateOrganization;
    } });
    Object.defineProperty(exports, "RedirectToOrganizationProfile", { enumerable: true, get: function() {
      return controlComponents_1.RedirectToOrganizationProfile;
    } });
    tslib_1.__exportStar(require_withClerk(), exports);
    tslib_1.__exportStar(require_withUser(), exports);
    tslib_1.__exportStar(require_withSession(), exports);
    tslib_1.__exportStar(require_SignInButton(), exports);
    tslib_1.__exportStar(require_SignUpButton(), exports);
    tslib_1.__exportStar(require_SignOutButton(), exports);
    tslib_1.__exportStar(require_SignInWithMetamaskButton(), exports);
  }
});

// ../../node_modules/@clerk/clerk-react/dist/hooks/useUser.js
var require_useUser = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/hooks/useUser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useUser = void 0;
    var UserContext_1 = require_UserContext();
    function useUser() {
      const user = (0, UserContext_1.useUserContext)();
      if (user === void 0) {
        return { isLoaded: false, isSignedIn: void 0, user: void 0 };
      }
      if (user === null) {
        return { isLoaded: true, isSignedIn: false, user: null };
      }
      return { isLoaded: true, isSignedIn: true, user };
    }
    exports.useUser = useUser;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/hooks/utils.js
var require_utils2 = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/hooks/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSignOut = exports.createGetToken = void 0;
    var clerkLoaded = (isomorphicClerk) => {
      return new Promise((resolve) => {
        if (isomorphicClerk.loaded) {
          resolve();
        }
        isomorphicClerk.addOnLoaded(resolve);
      });
    };
    var createGetToken = (isomorphicClerk) => async (options) => {
      await clerkLoaded(isomorphicClerk);
      if (!isomorphicClerk.session) {
        return null;
      }
      return isomorphicClerk.session.getToken(options);
    };
    exports.createGetToken = createGetToken;
    var createSignOut = (isomorphicClerk) => async (...args) => {
      await clerkLoaded(isomorphicClerk);
      return isomorphicClerk.signOut(...args);
    };
    exports.createSignOut = createSignOut;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/hooks/useAuth.js
var require_useAuth = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/hooks/useAuth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useAuth = void 0;
    var AuthContext_1 = require_AuthContext();
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var errors_1 = require_errors();
    var utils_1 = require_utils2();
    var useAuth = () => {
      const { sessionId, userId, actor, orgId, orgRole, orgSlug } = (0, AuthContext_1.useAuthContext)();
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      const getToken = (0, utils_1.createGetToken)(isomorphicClerk);
      const signOut = (0, utils_1.createSignOut)(isomorphicClerk);
      if (sessionId === void 0 && userId === void 0) {
        return {
          isLoaded: false,
          isSignedIn: void 0,
          sessionId,
          userId,
          actor: void 0,
          orgId: void 0,
          orgRole: void 0,
          orgSlug: void 0,
          signOut,
          getToken
        };
      }
      if (sessionId === null && userId === null) {
        return {
          isLoaded: true,
          isSignedIn: false,
          sessionId,
          userId,
          actor: null,
          orgId: null,
          orgRole: null,
          orgSlug: null,
          signOut,
          getToken
        };
      }
      if (!!sessionId && !!userId && !!orgId && !!orgRole) {
        return {
          isLoaded: true,
          isSignedIn: true,
          sessionId,
          userId,
          actor: actor || null,
          orgId,
          orgRole,
          orgSlug: orgSlug || null,
          signOut,
          getToken
        };
      }
      if (!!sessionId && !!userId && !orgId) {
        return {
          isLoaded: true,
          isSignedIn: true,
          sessionId,
          userId,
          actor: actor || null,
          orgId: null,
          orgRole: null,
          orgSlug: null,
          signOut,
          getToken
        };
      }
      throw new Error(errors_1.invalidStateError);
    };
    exports.useAuth = useAuth;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/hooks/useSession.js
var require_useSession = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/hooks/useSession.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSession = void 0;
    var SessionContext_1 = require_SessionContext();
    var useSession = () => {
      const session = (0, SessionContext_1.useSessionContext)();
      if (session === void 0) {
        return { isLoaded: false, isSignedIn: void 0, session: void 0 };
      }
      if (session === null) {
        return { isLoaded: true, isSignedIn: false, session: null };
      }
      return { isLoaded: true, isSignedIn: true, session };
    };
    exports.useSession = useSession;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/hooks/useClerk.js
var require_useClerk = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/hooks/useClerk.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useClerk = void 0;
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var useClerk = () => {
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      return isomorphicClerk;
    };
    exports.useClerk = useClerk;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/hooks/useSignIn.js
var require_useSignIn = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/hooks/useSignIn.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSignIn = void 0;
    var ClientContext_1 = require_ClientContext();
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var useSignIn = () => {
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      const client = (0, ClientContext_1.useClientContext)();
      if (!client) {
        return { isLoaded: false, signIn: void 0, setSession: void 0, setActive: void 0 };
      }
      return {
        isLoaded: true,
        signIn: client.signIn,
        setSession: isomorphicClerk.setSession,
        setActive: isomorphicClerk.setActive
      };
    };
    exports.useSignIn = useSignIn;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/hooks/useSignUp.js
var require_useSignUp = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/hooks/useSignUp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSignUp = void 0;
    var ClientContext_1 = require_ClientContext();
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var useSignUp = () => {
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      const client = (0, ClientContext_1.useClientContext)();
      if (!client) {
        return { isLoaded: false, signUp: void 0, setSession: void 0, setActive: void 0 };
      }
      return {
        isLoaded: true,
        signUp: client.signUp,
        setSession: isomorphicClerk.setSession,
        setActive: isomorphicClerk.setActive
      };
    };
    exports.useSignUp = useSignUp;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/hooks/useSessionList.js
var require_useSessionList = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/hooks/useSessionList.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSessionList = void 0;
    var ClientContext_1 = require_ClientContext();
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var useSessionList = () => {
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      const client = (0, ClientContext_1.useClientContext)();
      if (!client) {
        return { isLoaded: false, sessions: void 0, setSession: void 0, setActive: void 0 };
      }
      return {
        isLoaded: true,
        sessions: client.sessions,
        setSession: isomorphicClerk.setSession,
        setActive: isomorphicClerk.setActive
      };
    };
    exports.useSessionList = useSessionList;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/hooks/useOrganization.js
var require_useOrganization = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/hooks/useOrganization.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useOrganization = void 0;
    var shared_1 = (init_esm2(), __toCommonJS(esm_exports2));
    Object.defineProperty(exports, "useOrganization", { enumerable: true, get: function() {
      return shared_1.useOrganization;
    } });
  }
});

// ../../node_modules/@clerk/clerk-react/dist/hooks/useOrganizationList.js
var require_useOrganizationList = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/hooks/useOrganizationList.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useOrganizationList = void 0;
    var shared_1 = (init_esm2(), __toCommonJS(esm_exports2));
    Object.defineProperty(exports, "useOrganizationList", { enumerable: true, get: function() {
      return shared_1.useOrganizationList;
    } });
  }
});

// ../../node_modules/@clerk/clerk-react/dist/hooks/useOrganizations.js
var require_useOrganizations = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/hooks/useOrganizations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useOrganizations = void 0;
    var shared_1 = (init_esm2(), __toCommonJS(esm_exports2));
    Object.defineProperty(exports, "useOrganizations", { enumerable: true, get: function() {
      return shared_1.useOrganizations;
    } });
  }
});

// ../../node_modules/@clerk/clerk-react/dist/hooks/useMagicLink.js
var require_useMagicLink = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/hooks/useMagicLink.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useMagicLink = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = tslib_1.__importDefault(require_react());
    function useMagicLink(resource) {
      const { startMagicLinkFlow, cancelMagicLinkFlow } = react_1.default.useMemo(() => resource.createMagicLinkFlow(), [resource]);
      react_1.default.useEffect(() => {
        return cancelMagicLinkFlow;
      }, []);
      return {
        startMagicLinkFlow,
        cancelMagicLinkFlow
      };
    }
    exports.useMagicLink = useMagicLink;
  }
});

// ../../node_modules/@clerk/clerk-react/dist/hooks/index.js
var require_hooks = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/hooks/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_useUser(), exports);
    tslib_1.__exportStar(require_useAuth(), exports);
    tslib_1.__exportStar(require_useSession(), exports);
    tslib_1.__exportStar(require_useClerk(), exports);
    tslib_1.__exportStar(require_useSignIn(), exports);
    tslib_1.__exportStar(require_useSignUp(), exports);
    tslib_1.__exportStar(require_useSessionList(), exports);
    tslib_1.__exportStar(require_useOrganization(), exports);
    tslib_1.__exportStar(require_useOrganizationList(), exports);
    tslib_1.__exportStar(require_useOrganizations(), exports);
    tslib_1.__exportStar(require_useMagicLink(), exports);
  }
});

// ../../node_modules/@clerk/clerk-react/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/@clerk/clerk-react/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useMagicLink = exports.MagicLinkErrorCode = exports.isMagicLinkError = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_contexts(), exports);
    tslib_1.__exportStar(require_components(), exports);
    tslib_1.__exportStar(require_hooks(), exports);
    var errors_1 = require_errors();
    Object.defineProperty(exports, "isMagicLinkError", { enumerable: true, get: function() {
      return errors_1.isMagicLinkError;
    } });
    Object.defineProperty(exports, "MagicLinkErrorCode", { enumerable: true, get: function() {
      return errors_1.MagicLinkErrorCode;
    } });
    var useMagicLink_1 = require_useMagicLink();
    Object.defineProperty(exports, "useMagicLink", { enumerable: true, get: function() {
      return useMagicLink_1.useMagicLink;
    } });
    if (typeof globalThis === "undefined" && typeof window !== "undefined" && !window.global) {
      window.global = window;
    }
  }
});

// ../../node_modules/@clerk/remix/dist/errors.js
var require_errors2 = __commonJS({
  "../../node_modules/@clerk/remix/dist/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.noSecretKeyOrApiKeyError = exports.invalidRootLoaderCallbackReturn = exports.invalidRootLoaderCallbackResponseReturn = exports.noLoaderArgsPassedInGetAuth = exports.noClerkStateError = exports.invalidClerkStatePropError = void 0;
    var createErrorMessage = (msg) => {
      return `\u{1F512} Clerk: ${msg.trim()}

For more info, check out the docs: https://docs.clerk.dev,
or come say hi in our discord server: https://rebrand.ly/clerk-discord

`;
    };
    var ssrExample = `Use 'rootAuthLoader' as your root loader. Then, simply wrap the App component with ClerkApp and make it the default export.
Example:

import { ClerkApp } from '@clerk/remix';
import { rootAuthLoader } from '@clerk/remix/ssr.server';

export const loader: LoaderFunction = args => rootAuthLoader(args)

function App() {
  return (
    <html lang='en'>
      ...
    </html>
  );
}

export default ClerkApp(App, { frontendApi: '...' });
`;
    exports.invalidClerkStatePropError = createErrorMessage(`
You're trying to pass an invalid object in "<ClerkProvider clerkState={...}>".

${ssrExample}
`);
    exports.noClerkStateError = createErrorMessage(`
Looks like you didn't pass 'clerkState' to "<ClerkProvider clerkState={...}>".

${ssrExample}
`);
    exports.noLoaderArgsPassedInGetAuth = createErrorMessage(`
You're calling 'getAuth()' from a loader, without providing the loader args object.
Example:

export const loader: LoaderFunction = async (args) => {
  const { sessionId } = await getAuth(args);
  ...
};
`);
    exports.invalidRootLoaderCallbackResponseReturn = createErrorMessage(`
You're returning an invalid 'Response' object from the 'rootAuthLoader' in root.tsx.
You can return numbers, strings, objects, booleans, and redirect 'Response' objects (status codes in the range of 300 to 400)
`);
    exports.invalidRootLoaderCallbackReturn = createErrorMessage(`
You're returning an invalid value from 'rootAuthLoader' in root.tsx.
You can only return plain objects or redirect 'Response' objects (status codes in the range of 300 to 400).
If you want to return a primitive value or an array, wrap the response with an object.
Example:

export const loader: LoaderFunction = args => rootAuthLoader(args, ({ auth }) => {
    const { userId } = auth;
    const posts: Post[] = database.getPostsByUserId(userId);
    return { data: posts };
})
`);
    exports.noSecretKeyOrApiKeyError = createErrorMessage(`
A secretKey or apiKey must be provided in order to use SSR and the exports from @clerk/remix/api.');
If your runtime supports environment variables, you can add a CLERK_SECRET_KEY or CLERK_API_KEY variable to your config.
Otherwise, you can pass a secretKey parameter to rootAuthLoader or getAuth.
`);
  }
});

// ../../node_modules/@clerk/remix/dist/utils.js
var require_utils3 = __commonJS({
  "../../node_modules/@clerk/remix/dist/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEnvVariable = exports.assertValidClerkState = exports.assertEnvVar = exports.warnForSsr = void 0;
    var errors_1 = require_errors2();
    function warnForSsr(val) {
      if (!val || !val.__internal_clerk_state) {
        console.warn(errors_1.noClerkStateError);
      }
    }
    exports.warnForSsr = warnForSsr;
    function assertEnvVar(name, errorMessage) {
      if (!name || typeof name !== "string") {
        throw new Error(errorMessage);
      }
    }
    exports.assertEnvVar = assertEnvVar;
    function assertValidClerkState(val) {
      if (!val) {
        throw new Error(errors_1.noClerkStateError);
      }
      if (!!val && !val.__internal_clerk_state) {
        throw new Error(errors_1.invalidClerkStatePropError);
      }
    }
    exports.assertValidClerkState = assertValidClerkState;
    var getEnvVariable = (name) => {
      if (typeof process !== "undefined") {
        return process.env && process.env[name] || "";
      }
      try {
        return globalThis[name];
      } catch (_3) {
      }
      return "";
    };
    exports.getEnvVariable = getEnvVariable;
  }
});

// ../../node_modules/@clerk/remix/dist/client/useAwaitableNavigate.js
var require_useAwaitableNavigate = __commonJS({
  "../../node_modules/@clerk/remix/dist/client/useAwaitableNavigate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useAwaitableNavigate = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = (init_esm(), __toCommonJS(esm_exports));
    var react_2 = tslib_1.__importDefault(require_react());
    var useAwaitableNavigate = () => {
      const navigate = (0, react_1.useNavigate)();
      const transition = (0, react_1.useTransition)();
      const resolveFunctionsRef = react_2.default.useRef([]);
      const resolveAll = () => {
        if (transition.state !== "idle") {
          return;
        }
        resolveFunctionsRef.current.forEach((resolve) => resolve());
        resolveFunctionsRef.current.splice(0, resolveFunctionsRef.current.length);
      };
      react_2.default.useEffect(() => {
        resolveAll();
      }, [transition.state]);
      return (to) => {
        return new Promise((res) => {
          resolveFunctionsRef.current.push(res);
          navigate(to);
        });
      };
    };
    exports.useAwaitableNavigate = useAwaitableNavigate;
  }
});

// ../../node_modules/@clerk/remix/dist/client/RemixClerkProvider.js
var require_RemixClerkProvider = __commonJS({
  "../../node_modules/@clerk/remix/dist/client/RemixClerkProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClerkProvider = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var clerk_react_1 = require_dist();
    var react_1 = tslib_1.__importDefault(require_react());
    var utils_1 = require_utils3();
    var useAwaitableNavigate_1 = require_useAwaitableNavigate();
    tslib_1.__exportStar(require_dist(), exports);
    function ClerkProvider({ children, ...rest }) {
      const awaitableNavigate = (0, useAwaitableNavigate_1.useAwaitableNavigate)();
      const { clerkState, ...restProps } = rest;
      clerk_react_1.ClerkProvider.displayName = "ReactClerkProvider";
      (0, utils_1.assertValidClerkState)(clerkState);
      const { __clerk_ssr_state, __frontendApi, __publishableKey, __clerk_debug } = (clerkState === null || clerkState === void 0 ? void 0 : clerkState.__internal_clerk_state) || {};
      react_1.default.useEffect(() => {
        (0, utils_1.warnForSsr)(clerkState);
      }, []);
      react_1.default.useEffect(() => {
        window.__clerk_debug = __clerk_debug;
      }, []);
      return react_1.default.createElement(clerk_react_1.ClerkProvider, { navigate: awaitableNavigate, initialState: __clerk_ssr_state, frontendApi: __frontendApi, publishableKey: __publishableKey, ...restProps }, children);
    }
    exports.ClerkProvider = ClerkProvider;
  }
});

// ../../node_modules/@clerk/remix/dist/client/ClerkApp.js
var require_ClerkApp = __commonJS({
  "../../node_modules/@clerk/remix/dist/client/ClerkApp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClerkApp = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = (init_esm(), __toCommonJS(esm_exports));
    var react_2 = tslib_1.__importDefault(require_react());
    var RemixClerkProvider_1 = require_RemixClerkProvider();
    function ClerkApp(App, opts = {}) {
      return () => {
        const { clerkState } = (0, react_1.useLoaderData)();
        return react_2.default.createElement(
          RemixClerkProvider_1.ClerkProvider,
          { ...opts, clerkState },
          react_2.default.createElement(App, null)
        );
      };
    }
    exports.ClerkApp = ClerkApp;
  }
});

// ../../node_modules/@clerk/remix/dist/client/Interstitial.js
var require_Interstitial = __commonJS({
  "../../node_modules/@clerk/remix/dist/client/Interstitial.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Interstitial = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = tslib_1.__importDefault(require_react());
    function Interstitial({ html }) {
      return react_1.default.createElement("html", { dangerouslySetInnerHTML: { __html: html } });
    }
    exports.Interstitial = Interstitial;
  }
});

// ../../node_modules/@clerk/remix/dist/client/ClerkCatchBoundary.js
var require_ClerkCatchBoundary = __commonJS({
  "../../node_modules/@clerk/remix/dist/client/ClerkCatchBoundary.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClerkCatchBoundary = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = (init_esm(), __toCommonJS(esm_exports));
    var react_2 = tslib_1.__importDefault(require_react());
    var Interstitial_1 = require_Interstitial();
    function ClerkCatchBoundary(RootCatchBoundary) {
      return () => {
        var _a;
        const { data } = (0, react_1.useCatch)();
        const { __clerk_ssr_interstitial_html } = ((_a = data === null || data === void 0 ? void 0 : data.clerkState) === null || _a === void 0 ? void 0 : _a.__internal_clerk_state) || {};
        if (__clerk_ssr_interstitial_html) {
          return react_2.default.createElement(Interstitial_1.Interstitial, { html: __clerk_ssr_interstitial_html });
        }
        if (!RootCatchBoundary) {
          return void 0;
        }
        return react_2.default.createElement(RootCatchBoundary, null);
      };
    }
    exports.ClerkCatchBoundary = ClerkCatchBoundary;
  }
});

// ../../node_modules/@clerk/remix/dist/client/index.js
var require_client = __commonJS({
  "../../node_modules/@clerk/remix/dist/client/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClerkApp = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_RemixClerkProvider(), exports);
    var ClerkApp_1 = require_ClerkApp();
    Object.defineProperty(exports, "ClerkApp", { enumerable: true, get: function() {
      return ClerkApp_1.ClerkApp;
    } });
    tslib_1.__exportStar(require_ClerkCatchBoundary(), exports);
  }
});

// ../../node_modules/@clerk/remix/dist/index.js
var require_dist2 = __commonJS({
  "../../node_modules/@clerk/remix/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    require_globalPolyfill();
    tslib_1.__exportStar(require_client(), exports);
  }
});

// app/lib/constants.ts
var REDIRECT_ROUTES = {
  AUTHENTICATED: "/wallet",
  GUEST: "/login",
  AUTH_SUCCESSFUL: "/api/auth/init-auth",
  REDIRECT_BASE: "http://localhost:3000"
};

export {
  tslib_es6_exports,
  init_tslib_es6,
  require_dist2 as require_dist,
  REDIRECT_ROUTES
};
//# sourceMappingURL=/build/_shared/chunk-52X7NMXT.js.map
