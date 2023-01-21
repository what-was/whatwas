import {
  require_ssr
} from "/build/_shared/chunk-K3I4BZ64.js";
import {
  Checkbox,
  List,
  ListItem,
  Text
} from "/build/_shared/chunk-3LCOXCVH.js";
import "/build/_shared/chunk-4DOPGRE4.js";
import {
  require_react_dom
} from "/build/_shared/chunk-7G6WEMYH.js";
import {
  init_esm,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-P3LUYFZE.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// ../../node_modules/direction/index.js
var require_direction = __commonJS({
  "../../node_modules/direction/index.js"(exports, module) {
    "use strict";
    module.exports = direction;
    var RTL = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
    var LTR = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
    var rtl = new RegExp("^[^" + LTR + "]*[" + RTL + "]");
    var ltr = new RegExp("^[^" + RTL + "]*[" + LTR + "]");
    function direction(value) {
      value = String(value || "");
      if (rtl.test(value)) {
        return "rtl";
      }
      if (ltr.test(value)) {
        return "ltr";
      }
      return "neutral";
    }
  }
});

// ../../node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "../../node_modules/lodash/isObject.js"(exports, module) {
    function isObject3(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject3;
  }
});

// ../../node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "../../node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    module.exports = freeGlobal;
  }
});

// ../../node_modules/lodash/_root.js
var require_root = __commonJS({
  "../../node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// ../../node_modules/lodash/now.js
var require_now = __commonJS({
  "../../node_modules/lodash/now.js"(exports, module) {
    var root = require_root();
    var now = function() {
      return root.Date.now();
    };
    module.exports = now;
  }
});

// ../../node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "../../node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// ../../node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "../../node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// ../../node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "../../node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// ../../node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "../../node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e2) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// ../../node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "../../node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// ../../node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "../../node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// ../../node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "../../node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// ../../node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "../../node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// ../../node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "../../node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject3 = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject3(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject3(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// ../../node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "../../node_modules/lodash/debounce.js"(exports, module) {
    var isObject3 = require_isObject();
    var now = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce2(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject3(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module.exports = debounce2;
  }
});

// ../../node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "../../node_modules/lodash/throttle.js"(exports, module) {
    var debounce2 = require_debounce();
    var isObject3 = require_isObject();
    var FUNC_ERROR_TEXT = "Expected a function";
    function throttle2(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject3(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce2(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module.exports = throttle2;
  }
});

// ../../node_modules/is-hotkey/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/is-hotkey/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var IS_MAC = typeof window != "undefined" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
    var MODIFIERS = {
      alt: "altKey",
      control: "ctrlKey",
      meta: "metaKey",
      shift: "shiftKey"
    };
    var ALIASES = {
      add: "+",
      break: "pause",
      cmd: "meta",
      command: "meta",
      ctl: "control",
      ctrl: "control",
      del: "delete",
      down: "arrowdown",
      esc: "escape",
      ins: "insert",
      left: "arrowleft",
      mod: IS_MAC ? "meta" : "control",
      opt: "alt",
      option: "alt",
      return: "enter",
      right: "arrowright",
      space: " ",
      spacebar: " ",
      up: "arrowup",
      win: "meta",
      windows: "meta"
    };
    var CODES = {
      backspace: 8,
      tab: 9,
      enter: 13,
      shift: 16,
      control: 17,
      alt: 18,
      pause: 19,
      capslock: 20,
      escape: 27,
      " ": 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36,
      arrowleft: 37,
      arrowup: 38,
      arrowright: 39,
      arrowdown: 40,
      insert: 45,
      delete: 46,
      meta: 91,
      numlock: 144,
      scrolllock: 145,
      ";": 186,
      "=": 187,
      ",": 188,
      "-": 189,
      ".": 190,
      "/": 191,
      "`": 192,
      "[": 219,
      "\\": 220,
      "]": 221,
      "'": 222
    };
    for (f2 = 1; f2 < 20; f2++) {
      CODES["f" + f2] = 111 + f2;
    }
    var f2;
    function isHotkey(hotkey, options, event) {
      if (options && !("byKey" in options)) {
        event = options;
        options = null;
      }
      if (!Array.isArray(hotkey)) {
        hotkey = [hotkey];
      }
      var array = hotkey.map(function(string) {
        return parseHotkey(string, options);
      });
      var check = function check2(e2) {
        return array.some(function(object) {
          return compareHotkey(object, e2);
        });
      };
      var ret = event == null ? check : check(event);
      return ret;
    }
    function isCodeHotkey(hotkey, event) {
      return isHotkey(hotkey, event);
    }
    function isKeyHotkey2(hotkey, event) {
      return isHotkey(hotkey, { byKey: true }, event);
    }
    function parseHotkey(hotkey, options) {
      var byKey = options && options.byKey;
      var ret = {};
      hotkey = hotkey.replace("++", "+add");
      var values = hotkey.split("+");
      var length = values.length;
      for (var k2 in MODIFIERS) {
        ret[MODIFIERS[k2]] = false;
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = void 0;
      try {
        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;
          var optional = value.endsWith("?") && value.length > 1;
          if (optional) {
            value = value.slice(0, -1);
          }
          var name = toKeyName(value);
          var modifier = MODIFIERS[name];
          if (length === 1 || !modifier) {
            if (byKey) {
              ret.key = name;
            } else {
              ret.which = toKeyCode(value);
            }
          }
          if (modifier) {
            ret[modifier] = optional ? null : true;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      return ret;
    }
    function compareHotkey(object, event) {
      for (var key in object) {
        var expected = object[key];
        var actual = void 0;
        if (expected == null) {
          continue;
        }
        if (key === "key" && event.key != null) {
          actual = event.key.toLowerCase();
        } else if (key === "which") {
          actual = expected === 91 && event.which === 93 ? 91 : event.which;
        } else {
          actual = event[key];
        }
        if (actual == null && expected === false) {
          continue;
        }
        if (actual !== expected) {
          return false;
        }
      }
      return true;
    }
    function toKeyCode(name) {
      name = toKeyName(name);
      var code = CODES[name] || name.toUpperCase().charCodeAt(0);
      return code;
    }
    function toKeyName(name) {
      name = name.toLowerCase();
      name = ALIASES[name] || name;
      return name;
    }
    exports.default = isHotkey;
    exports.isHotkey = isHotkey;
    exports.isCodeHotkey = isCodeHotkey;
    exports.isKeyHotkey = isKeyHotkey2;
    exports.parseHotkey = parseHotkey;
    exports.compareHotkey = compareHotkey;
    exports.toKeyCode = toKeyCode;
    exports.toKeyName = toKeyName;
  }
});

// app/routes/__app/today.tsx
init_esm();
var import_ssr = __toESM(require_ssr());

// app/components/editor/editor.tsx
var import_react3 = __toESM(require_react());

// ../../node_modules/slate/node_modules/is-plain-object/dist/is-plain-object.mjs
function isObject(o2) {
  return Object.prototype.toString.call(o2) === "[object Object]";
}
function isPlainObject(o2) {
  var ctor, prot;
  if (isObject(o2) === false)
    return false;
  ctor = o2.constructor;
  if (ctor === void 0)
    return true;
  prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (prot.hasOwnProperty("isPrototypeOf") === false) {
    return false;
  }
  return true;
}

// ../../node_modules/immer/dist/immer.esm.mjs
function n(n4) {
  for (var r3 = arguments.length, t3 = Array(r3 > 1 ? r3 - 1 : 0), e2 = 1; e2 < r3; e2++)
    t3[e2 - 1] = arguments[e2];
  if (true) {
    var i3 = Y[n4], o2 = i3 ? "function" == typeof i3 ? i3.apply(null, t3) : i3 : "unknown error nr: " + n4;
    throw Error("[Immer] " + o2);
  }
  throw Error("[Immer] minified error nr: " + n4 + (t3.length ? " " + t3.map(function(n5) {
    return "'" + n5 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n4) {
  return !!n4 && !!n4[Q];
}
function t(n4) {
  var r3;
  return !!n4 && (function(n5) {
    if (!n5 || "object" != typeof n5)
      return false;
    var r4 = Object.getPrototypeOf(n5);
    if (null === r4)
      return true;
    var t3 = Object.hasOwnProperty.call(r4, "constructor") && r4.constructor;
    return t3 === Object || "function" == typeof t3 && Function.toString.call(t3) === Z;
  }(n4) || Array.isArray(n4) || !!n4[L] || !!(null === (r3 = n4.constructor) || void 0 === r3 ? void 0 : r3[L]) || s(n4) || v(n4));
}
function i(n4, r3, t3) {
  void 0 === t3 && (t3 = false), 0 === o(n4) ? (t3 ? Object.keys : nn)(n4).forEach(function(e2) {
    t3 && "symbol" == typeof e2 || r3(e2, n4[e2], n4);
  }) : n4.forEach(function(t4, e2) {
    return r3(e2, t4, n4);
  });
}
function o(n4) {
  var r3 = n4[Q];
  return r3 ? r3.i > 3 ? r3.i - 4 : r3.i : Array.isArray(n4) ? 1 : s(n4) ? 2 : v(n4) ? 3 : 0;
}
function u(n4, r3) {
  return 2 === o(n4) ? n4.has(r3) : Object.prototype.hasOwnProperty.call(n4, r3);
}
function a(n4, r3) {
  return 2 === o(n4) ? n4.get(r3) : n4[r3];
}
function f(n4, r3, t3) {
  var e2 = o(n4);
  2 === e2 ? n4.set(r3, t3) : 3 === e2 ? n4.add(t3) : n4[r3] = t3;
}
function c(n4, r3) {
  return n4 === r3 ? 0 !== n4 || 1 / n4 == 1 / r3 : n4 != n4 && r3 != r3;
}
function s(n4) {
  return X && n4 instanceof Map;
}
function v(n4) {
  return q && n4 instanceof Set;
}
function p(n4) {
  return n4.o || n4.t;
}
function l(n4) {
  if (Array.isArray(n4))
    return Array.prototype.slice.call(n4);
  var r3 = rn(n4);
  delete r3[Q];
  for (var t3 = nn(r3), e2 = 0; e2 < t3.length; e2++) {
    var i3 = t3[e2], o2 = r3[i3];
    false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r3[i3] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n4[i3] });
  }
  return Object.create(Object.getPrototypeOf(n4), r3);
}
function d(n4, e2) {
  return void 0 === e2 && (e2 = false), y(n4) || r(n4) || !t(n4) || (o(n4) > 1 && (n4.set = n4.add = n4.clear = n4.delete = h), Object.freeze(n4), e2 && i(n4, function(n5, r3) {
    return d(r3, true);
  }, true)), n4;
}
function h() {
  n(2);
}
function y(n4) {
  return null == n4 || "object" != typeof n4 || Object.isFrozen(n4);
}
function b(r3) {
  var t3 = tn[r3];
  return t3 || n(18, r3), t3;
}
function _() {
  return U || n(0), U;
}
function j(n4, r3) {
  r3 && (b("Patches"), n4.u = [], n4.s = [], n4.v = r3);
}
function O(n4) {
  g(n4), n4.p.forEach(S), n4.p = null;
}
function g(n4) {
  n4 === U && (U = n4.l);
}
function w(n4) {
  return U = { p: [], l: U, h: n4, m: true, _: 0 };
}
function S(n4) {
  var r3 = n4[Q];
  0 === r3.i || 1 === r3.i ? r3.j() : r3.O = true;
}
function P(r3, e2) {
  e2._ = e2.p.length;
  var i3 = e2.p[0], o2 = void 0 !== r3 && r3 !== i3;
  return e2.h.g || b("ES5").S(e2, r3, o2), o2 ? (i3[Q].P && (O(e2), n(4)), t(r3) && (r3 = M(e2, r3), e2.l || x(e2, r3)), e2.u && b("Patches").M(i3[Q].t, r3, e2.u, e2.s)) : r3 = M(e2, i3, []), O(e2), e2.u && e2.v(e2.u, e2.s), r3 !== H ? r3 : void 0;
}
function M(n4, r3, t3) {
  if (y(r3))
    return r3;
  var e2 = r3[Q];
  if (!e2)
    return i(r3, function(i3, o3) {
      return A(n4, e2, r3, i3, o3, t3);
    }, true), r3;
  if (e2.A !== n4)
    return r3;
  if (!e2.P)
    return x(n4, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = 4 === e2.i || 5 === e2.i ? e2.o = l(e2.k) : e2.o, u2 = o2, a2 = false;
    3 === e2.i && (u2 = new Set(o2), o2.clear(), a2 = true), i(u2, function(r4, i3) {
      return A(n4, e2, o2, r4, i3, t3, a2);
    }), x(n4, o2, false), t3 && n4.u && b("Patches").N(e2, t3, n4.u, n4.s);
  }
  return e2.o;
}
function A(e2, i3, o2, a2, c2, s2, v2) {
  if (c2 === o2 && n(5), r(c2)) {
    var p2 = M(e2, c2, s2 && i3 && 3 !== i3.i && !u(i3.R, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, p2), !r(p2))
      return;
    e2.m = false;
  } else
    v2 && o2.add(c2);
  if (t(c2) && !y(c2)) {
    if (!e2.h.D && e2._ < 1)
      return;
    M(e2, c2), i3 && i3.A.l || x(e2, c2);
  }
}
function x(n4, r3, t3) {
  void 0 === t3 && (t3 = false), n4.h.D && n4.m && d(r3, t3);
}
function z(n4, r3) {
  var t3 = n4[Q];
  return (t3 ? p(t3) : n4)[r3];
}
function I(n4, r3) {
  if (r3 in n4)
    for (var t3 = Object.getPrototypeOf(n4); t3; ) {
      var e2 = Object.getOwnPropertyDescriptor(t3, r3);
      if (e2)
        return e2;
      t3 = Object.getPrototypeOf(t3);
    }
}
function k(n4) {
  n4.P || (n4.P = true, n4.l && k(n4.l));
}
function E(n4) {
  n4.o || (n4.o = l(n4.t));
}
function N(n4, r3, t3) {
  var e2 = s(r3) ? b("MapSet").F(r3, t3) : v(r3) ? b("MapSet").T(r3, t3) : n4.g ? function(n5, r4) {
    var t4 = Array.isArray(n5), e3 = { i: t4 ? 1 : 0, A: r4 ? r4.A : _(), P: false, I: false, R: {}, l: r4, t: n5, k: null, o: null, j: null, C: false }, i3 = e3, o2 = en;
    t4 && (i3 = [e3], o2 = on);
    var u2 = Proxy.revocable(i3, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r3, t3) : b("ES5").J(r3, t3);
  return (t3 ? t3.A : _()).p.push(e2), e2;
}
function R(e2) {
  return r(e2) || n(22, e2), function n4(r3) {
    if (!t(r3))
      return r3;
    var e3, u2 = r3[Q], c2 = o(r3);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e3 = D(r3, c2), u2.I = false;
    } else
      e3 = D(r3, c2);
    return i(e3, function(r4, t3) {
      u2 && a(u2.t, r4) === t3 || f(e3, r4, n4(t3));
    }), 3 === c2 ? new Set(e3) : e3;
  }(e2);
}
function D(n4, r3) {
  switch (r3) {
    case 2:
      return new Map(n4);
    case 3:
      return Array.from(n4);
  }
  return l(n4);
}
var G;
var U;
var W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x");
var X = "undefined" != typeof Map;
var q = "undefined" != typeof Set;
var B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect;
var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
var Q = W ? Symbol.for("immer-state") : "__$immer_state";
var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n4) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n4;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n4) {
  return "Cannot apply patch, path doesn't resolve: " + n4;
}, 16: 'Sets cannot have "replace" patches.', 17: function(n4) {
  return "Unsupported patch operation: " + n4;
}, 18: function(n4) {
  return "The plugin for '" + n4 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n4 + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n4) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n4 + "'";
}, 22: function(n4) {
  return "'current' expects a draft, got: " + n4;
}, 23: function(n4) {
  return "'original' expects a draft, got: " + n4;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
var Z = "" + Object.prototype.constructor;
var nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n4) {
  return Object.getOwnPropertyNames(n4).concat(Object.getOwnPropertySymbols(n4));
} : Object.getOwnPropertyNames;
var rn = Object.getOwnPropertyDescriptors || function(n4) {
  var r3 = {};
  return nn(n4).forEach(function(t3) {
    r3[t3] = Object.getOwnPropertyDescriptor(n4, t3);
  }), r3;
};
var tn = {};
var en = { get: function(n4, r3) {
  if (r3 === Q)
    return n4;
  var e2 = p(n4);
  if (!u(e2, r3))
    return function(n5, r4, t3) {
      var e3, i4 = I(r4, t3);
      return i4 ? "value" in i4 ? i4.value : null === (e3 = i4.get) || void 0 === e3 ? void 0 : e3.call(n5.k) : void 0;
    }(n4, e2, r3);
  var i3 = e2[r3];
  return n4.I || !t(i3) ? i3 : i3 === z(n4.t, r3) ? (E(n4), n4.o[r3] = N(n4.A.h, i3, n4)) : i3;
}, has: function(n4, r3) {
  return r3 in p(n4);
}, ownKeys: function(n4) {
  return Reflect.ownKeys(p(n4));
}, set: function(n4, r3, t3) {
  var e2 = I(p(n4), r3);
  if (null == e2 ? void 0 : e2.set)
    return e2.set.call(n4.k, t3), true;
  if (!n4.P) {
    var i3 = z(p(n4), r3), o2 = null == i3 ? void 0 : i3[Q];
    if (o2 && o2.t === t3)
      return n4.o[r3] = t3, n4.R[r3] = false, true;
    if (c(t3, i3) && (void 0 !== t3 || u(n4.t, r3)))
      return true;
    E(n4), k(n4);
  }
  return n4.o[r3] === t3 && (void 0 !== t3 || r3 in n4.o) || Number.isNaN(t3) && Number.isNaN(n4.o[r3]) || (n4.o[r3] = t3, n4.R[r3] = true), true;
}, deleteProperty: function(n4, r3) {
  return void 0 !== z(n4.t, r3) || r3 in n4.t ? (n4.R[r3] = false, E(n4), k(n4)) : delete n4.R[r3], n4.o && delete n4.o[r3], true;
}, getOwnPropertyDescriptor: function(n4, r3) {
  var t3 = p(n4), e2 = Reflect.getOwnPropertyDescriptor(t3, r3);
  return e2 ? { writable: true, configurable: 1 !== n4.i || "length" !== r3, enumerable: e2.enumerable, value: t3[r3] } : e2;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n4) {
  return Object.getPrototypeOf(n4.t);
}, setPrototypeOf: function() {
  n(12);
} };
var on = {};
i(en, function(n4, r3) {
  on[n4] = function() {
    return arguments[0] = arguments[0][0], r3.apply(this, arguments);
  };
}), on.deleteProperty = function(r3, t3) {
  return isNaN(parseInt(t3)) && n(13), on.set.call(this, r3, t3, void 0);
}, on.set = function(r3, t3, e2) {
  return "length" !== t3 && isNaN(parseInt(t3)) && n(14), en.set.call(this, r3[0], t3, e2, r3[0]);
};
var un = function() {
  function e2(r3) {
    var e3 = this;
    this.g = B, this.D = true, this.produce = function(r4, i4, o2) {
      if ("function" == typeof r4 && "function" != typeof i4) {
        var u2 = i4;
        i4 = r4;
        var a2 = e3;
        return function(n4) {
          var r5 = this;
          void 0 === n4 && (n4 = u2);
          for (var t3 = arguments.length, e4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            e4[o3 - 1] = arguments[o3];
          return a2.produce(n4, function(n5) {
            var t4;
            return (t4 = i4).call.apply(t4, [r5, n5].concat(e4));
          });
        };
      }
      var f2;
      if ("function" != typeof i4 && n(6), void 0 !== o2 && "function" != typeof o2 && n(7), t(r4)) {
        var c2 = w(e3), s2 = N(e3, r4, void 0), v2 = true;
        try {
          f2 = i4(s2), v2 = false;
        } finally {
          v2 ? O(c2) : g(c2);
        }
        return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n4) {
          return j(c2, o2), P(n4, c2);
        }, function(n4) {
          throw O(c2), n4;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!r4 || "object" != typeof r4) {
        if (void 0 === (f2 = i4(r4)) && (f2 = r4), f2 === H && (f2 = void 0), e3.D && d(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r4, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n(21, r4);
    }, this.produceWithPatches = function(n4, r4) {
      if ("function" == typeof n4)
        return function(r5) {
          for (var t4 = arguments.length, i5 = Array(t4 > 1 ? t4 - 1 : 0), o3 = 1; o3 < t4; o3++)
            i5[o3 - 1] = arguments[o3];
          return e3.produceWithPatches(r5, function(r6) {
            return n4.apply(void 0, [r6].concat(i5));
          });
        };
      var t3, i4, o2 = e3.produce(n4, r4, function(n5, r5) {
        t3 = n5, i4 = r5;
      });
      return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then(function(n5) {
        return [n5, t3, i4];
      }) : [o2, t3, i4];
    }, "boolean" == typeof (null == r3 ? void 0 : r3.useProxies) && this.setUseProxies(r3.useProxies), "boolean" == typeof (null == r3 ? void 0 : r3.autoFreeze) && this.setAutoFreeze(r3.autoFreeze);
  }
  var i3 = e2.prototype;
  return i3.createDraft = function(e3) {
    t(e3) || n(8), r(e3) && (e3 = R(e3));
    var i4 = w(this), o2 = N(this, e3, void 0);
    return o2[Q].C = true, g(i4), o2;
  }, i3.finishDraft = function(r3, t3) {
    var e3 = r3 && r3[Q];
    e3 && e3.C || n(9), e3.I && n(10);
    var i4 = e3.A;
    return j(i4, t3), P(void 0, i4);
  }, i3.setAutoFreeze = function(n4) {
    this.D = n4;
  }, i3.setUseProxies = function(r3) {
    r3 && !B && n(20), this.g = r3;
  }, i3.applyPatches = function(n4, t3) {
    var e3;
    for (e3 = t3.length - 1; e3 >= 0; e3--) {
      var i4 = t3[e3];
      if (0 === i4.path.length && "replace" === i4.op) {
        n4 = i4.value;
        break;
      }
    }
    e3 > -1 && (t3 = t3.slice(e3 + 1));
    var o2 = b("Patches").$;
    return r(n4) ? o2(n4, t3) : this.produce(n4, function(n5) {
      return o2(n5, t3);
    });
  }, e2;
}();
var an = new un();
var fn = an.produce;
var cn = an.produceWithPatches.bind(an);
var sn = an.setAutoFreeze.bind(an);
var vn = an.setUseProxies.bind(an);
var pn = an.applyPatches.bind(an);
var ln = an.createDraft.bind(an);
var dn = an.finishDraft.bind(an);

// ../../node_modules/slate/dist/index.es.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DIRTY_PATHS = /* @__PURE__ */ new WeakMap();
var DIRTY_PATH_KEYS = /* @__PURE__ */ new WeakMap();
var FLUSHING = /* @__PURE__ */ new WeakMap();
var NORMALIZING = /* @__PURE__ */ new WeakMap();
var PATH_REFS = /* @__PURE__ */ new WeakMap();
var POINT_REFS = /* @__PURE__ */ new WeakMap();
var RANGE_REFS = /* @__PURE__ */ new WeakMap();
function ownKeys$9(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$9(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
      ownKeys$9(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$9(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var nextEditorId = 0;
var createEditor = () => {
  var editor = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    id: nextEditorId++,
    isInline: () => false,
    isVoid: () => false,
    markableVoid: () => false,
    onChange: () => {
    },
    apply: (op) => {
      for (var ref of Editor.pathRefs(editor)) {
        PathRef.transform(ref, op);
      }
      for (var _ref of Editor.pointRefs(editor)) {
        PointRef.transform(_ref, op);
      }
      for (var _ref2 of Editor.rangeRefs(editor)) {
        RangeRef.transform(_ref2, op);
      }
      var oldDirtyPaths = DIRTY_PATHS.get(editor) || [];
      var oldDirtyPathKeys = DIRTY_PATH_KEYS.get(editor) || /* @__PURE__ */ new Set();
      var dirtyPaths;
      var dirtyPathKeys;
      var add = (path2) => {
        if (path2) {
          var key = path2.join(",");
          if (!dirtyPathKeys.has(key)) {
            dirtyPathKeys.add(key);
            dirtyPaths.push(path2);
          }
        }
      };
      if (Path.operationCanTransformPath(op)) {
        dirtyPaths = [];
        dirtyPathKeys = /* @__PURE__ */ new Set();
        for (var path of oldDirtyPaths) {
          var newPath = Path.transform(path, op);
          add(newPath);
        }
      } else {
        dirtyPaths = oldDirtyPaths;
        dirtyPathKeys = oldDirtyPathKeys;
      }
      var newDirtyPaths = editor.getDirtyPaths(op);
      for (var _path of newDirtyPaths) {
        add(_path);
      }
      DIRTY_PATHS.set(editor, dirtyPaths);
      DIRTY_PATH_KEYS.set(editor, dirtyPathKeys);
      Transforms.transform(editor, op);
      editor.operations.push(op);
      Editor.normalize(editor);
      if (op.type === "set_selection") {
        editor.marks = null;
      }
      if (!FLUSHING.get(editor)) {
        FLUSHING.set(editor, true);
        Promise.resolve().then(() => {
          FLUSHING.set(editor, false);
          editor.onChange();
          editor.operations = [];
        });
      }
    },
    addMark: (key, value) => {
      var {
        selection,
        markableVoid
      } = editor;
      if (selection) {
        var match = (node, path) => {
          if (!Text2.isText(node)) {
            return false;
          }
          var [parentNode2, parentPath] = Editor.parent(editor, path);
          return !editor.isVoid(parentNode2) || editor.markableVoid(parentNode2);
        };
        var expandedSelection = Range.isExpanded(selection);
        var markAcceptingVoidSelected = false;
        if (!expandedSelection) {
          var [selectedNode, selectedPath] = Editor.node(editor, selection);
          if (selectedNode && match(selectedNode, selectedPath)) {
            var [parentNode] = Editor.parent(editor, selectedPath);
            markAcceptingVoidSelected = parentNode && editor.markableVoid(parentNode);
          }
        }
        if (expandedSelection || markAcceptingVoidSelected) {
          Transforms.setNodes(editor, {
            [key]: value
          }, {
            match,
            split: true,
            voids: true
          });
        } else {
          var marks = _objectSpread$9(_objectSpread$9({}, Editor.marks(editor) || {}), {}, {
            [key]: value
          });
          editor.marks = marks;
          if (!FLUSHING.get(editor)) {
            editor.onChange();
          }
        }
      }
    },
    deleteBackward: (unit) => {
      var {
        selection
      } = editor;
      if (selection && Range.isCollapsed(selection)) {
        Transforms.delete(editor, {
          unit,
          reverse: true
        });
      }
    },
    deleteForward: (unit) => {
      var {
        selection
      } = editor;
      if (selection && Range.isCollapsed(selection)) {
        Transforms.delete(editor, {
          unit
        });
      }
    },
    deleteFragment: (direction) => {
      var {
        selection
      } = editor;
      if (selection && Range.isExpanded(selection)) {
        Transforms.delete(editor, {
          reverse: direction === "backward"
        });
      }
    },
    getFragment: () => {
      var {
        selection
      } = editor;
      if (selection) {
        return Node.fragment(editor, selection);
      }
      return [];
    },
    insertBreak: () => {
      Transforms.splitNodes(editor, {
        always: true
      });
    },
    insertSoftBreak: () => {
      Transforms.splitNodes(editor, {
        always: true
      });
    },
    insertFragment: (fragment) => {
      Transforms.insertFragment(editor, fragment);
    },
    insertNode: (node) => {
      Transforms.insertNodes(editor, node);
    },
    insertText: (text) => {
      var {
        selection,
        marks
      } = editor;
      if (selection) {
        if (marks) {
          var node = _objectSpread$9({
            text
          }, marks);
          Transforms.insertNodes(editor, node);
        } else {
          Transforms.insertText(editor, text);
        }
        editor.marks = null;
      }
    },
    normalizeNode: (entry) => {
      var [node, path] = entry;
      if (Text2.isText(node)) {
        return;
      }
      if (Element.isElement(node) && node.children.length === 0) {
        var child = {
          text: ""
        };
        Transforms.insertNodes(editor, child, {
          at: path.concat(0),
          voids: true
        });
        return;
      }
      var shouldHaveInlines = Editor.isEditor(node) ? false : Element.isElement(node) && (editor.isInline(node) || node.children.length === 0 || Text2.isText(node.children[0]) || editor.isInline(node.children[0]));
      var n4 = 0;
      for (var i3 = 0; i3 < node.children.length; i3++, n4++) {
        var currentNode = Node.get(editor, path);
        if (Text2.isText(currentNode))
          continue;
        var _child = node.children[i3];
        var prev = currentNode.children[n4 - 1];
        var isLast = i3 === node.children.length - 1;
        var isInlineOrText = Text2.isText(_child) || Element.isElement(_child) && editor.isInline(_child);
        if (isInlineOrText !== shouldHaveInlines) {
          Transforms.removeNodes(editor, {
            at: path.concat(n4),
            voids: true
          });
          n4--;
        } else if (Element.isElement(_child)) {
          if (editor.isInline(_child)) {
            if (prev == null || !Text2.isText(prev)) {
              var newChild = {
                text: ""
              };
              Transforms.insertNodes(editor, newChild, {
                at: path.concat(n4),
                voids: true
              });
              n4++;
            } else if (isLast) {
              var _newChild = {
                text: ""
              };
              Transforms.insertNodes(editor, _newChild, {
                at: path.concat(n4 + 1),
                voids: true
              });
              n4++;
            }
          }
        } else {
          if (prev != null && Text2.isText(prev)) {
            if (Text2.equals(_child, prev, {
              loose: true
            })) {
              Transforms.mergeNodes(editor, {
                at: path.concat(n4),
                voids: true
              });
              n4--;
            } else if (prev.text === "") {
              Transforms.removeNodes(editor, {
                at: path.concat(n4 - 1),
                voids: true
              });
              n4--;
            } else if (_child.text === "") {
              Transforms.removeNodes(editor, {
                at: path.concat(n4),
                voids: true
              });
              n4--;
            }
          }
        }
      }
    },
    removeMark: (key) => {
      var {
        selection
      } = editor;
      if (selection) {
        var match = (node, path) => {
          if (!Text2.isText(node)) {
            return false;
          }
          var [parentNode2, parentPath] = Editor.parent(editor, path);
          return !editor.isVoid(parentNode2) || editor.markableVoid(parentNode2);
        };
        var expandedSelection = Range.isExpanded(selection);
        var markAcceptingVoidSelected = false;
        if (!expandedSelection) {
          var [selectedNode, selectedPath] = Editor.node(editor, selection);
          if (selectedNode && match(selectedNode, selectedPath)) {
            var [parentNode] = Editor.parent(editor, selectedPath);
            markAcceptingVoidSelected = parentNode && editor.markableVoid(parentNode);
          }
        }
        if (expandedSelection || markAcceptingVoidSelected) {
          Transforms.unsetNodes(editor, key, {
            match,
            split: true,
            voids: true
          });
        } else {
          var marks = _objectSpread$9({}, Editor.marks(editor) || {});
          delete marks[key];
          editor.marks = marks;
          if (!FLUSHING.get(editor)) {
            editor.onChange();
          }
        }
      }
    },
    getDirtyPaths: (op) => {
      switch (op.type) {
        case "insert_text":
        case "remove_text":
        case "set_node": {
          var {
            path
          } = op;
          return Path.levels(path);
        }
        case "insert_node": {
          var {
            node,
            path: _path2
          } = op;
          var levels = Path.levels(_path2);
          var descendants = Text2.isText(node) ? [] : Array.from(Node.nodes(node), (_ref3) => {
            var [, p3] = _ref3;
            return _path2.concat(p3);
          });
          return [...levels, ...descendants];
        }
        case "merge_node": {
          var {
            path: _path3
          } = op;
          var ancestors = Path.ancestors(_path3);
          var previousPath = Path.previous(_path3);
          return [...ancestors, previousPath];
        }
        case "move_node": {
          var {
            path: _path4,
            newPath
          } = op;
          if (Path.equals(_path4, newPath)) {
            return [];
          }
          var oldAncestors = [];
          var newAncestors = [];
          for (var ancestor of Path.ancestors(_path4)) {
            var p2 = Path.transform(ancestor, op);
            oldAncestors.push(p2);
          }
          for (var _ancestor of Path.ancestors(newPath)) {
            var _p = Path.transform(_ancestor, op);
            newAncestors.push(_p);
          }
          var newParent = newAncestors[newAncestors.length - 1];
          var newIndex = newPath[newPath.length - 1];
          var resultPath = newParent.concat(newIndex);
          return [...oldAncestors, ...newAncestors, resultPath];
        }
        case "remove_node": {
          var {
            path: _path5
          } = op;
          var _ancestors = Path.ancestors(_path5);
          return [..._ancestors];
        }
        case "split_node": {
          var {
            path: _path6
          } = op;
          var _levels = Path.levels(_path6);
          var nextPath = Path.next(_path6);
          return [..._levels, nextPath];
        }
        default: {
          return [];
        }
      }
    }
  };
  return editor;
};
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i3;
  for (i3 = 0; i3 < sourceKeys.length; i3++) {
    key = sourceKeys[i3];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i3;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i3 = 0; i3 < sourceSymbolKeys.length; i3++) {
      key = sourceSymbolKeys[i3];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var getCharacterDistance = function getCharacterDistance2(str) {
  var isRTL = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var isLTR = !isRTL;
  var codepoints = isRTL ? codepointsIteratorRTL(str) : str;
  var left = CodepointType.None;
  var right = CodepointType.None;
  var distance = 0;
  var gb11 = null;
  var gb12Or13 = null;
  for (var char of codepoints) {
    var code = char.codePointAt(0);
    if (!code)
      break;
    var type = getCodepointType(char, code);
    [left, right] = isLTR ? [right, type] : [type, left];
    if (intersects(left, CodepointType.ZWJ) && intersects(right, CodepointType.ExtPict)) {
      if (isLTR) {
        gb11 = endsWithEmojiZWJ(str.substring(0, distance));
      } else {
        gb11 = endsWithEmojiZWJ(str.substring(0, str.length - distance));
      }
      if (!gb11)
        break;
    }
    if (intersects(left, CodepointType.RI) && intersects(right, CodepointType.RI)) {
      if (gb12Or13 !== null) {
        gb12Or13 = !gb12Or13;
      } else {
        if (isLTR) {
          gb12Or13 = true;
        } else {
          gb12Or13 = endsWithOddNumberOfRIs(str.substring(0, str.length - distance));
        }
      }
      if (!gb12Or13)
        break;
    }
    if (left !== CodepointType.None && right !== CodepointType.None && isBoundaryPair(left, right)) {
      break;
    }
    distance += char.length;
  }
  return distance || 1;
};
var SPACE = /\s/;
var PUNCTUATION = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
var CHAMELEON = /['\u2018\u2019]/;
var getWordDistance = function getWordDistance2(text) {
  var isRTL = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var dist = 0;
  var started = false;
  while (text.length > 0) {
    var charDist = getCharacterDistance(text, isRTL);
    var [char, remaining] = splitByCharacterDistance(text, charDist, isRTL);
    if (isWordCharacter(char, remaining, isRTL)) {
      started = true;
      dist += charDist;
    } else if (!started) {
      dist += charDist;
    } else {
      break;
    }
    text = remaining;
  }
  return dist;
};
var splitByCharacterDistance = (str, dist, isRTL) => {
  if (isRTL) {
    var at = str.length - dist;
    return [str.slice(at, str.length), str.slice(0, at)];
  }
  return [str.slice(0, dist), str.slice(dist)];
};
var isWordCharacter = function isWordCharacter2(char, remaining) {
  var isRTL = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (SPACE.test(char)) {
    return false;
  }
  if (CHAMELEON.test(char)) {
    var charDist = getCharacterDistance(remaining, isRTL);
    var [nextChar, nextRemaining] = splitByCharacterDistance(remaining, charDist, isRTL);
    if (isWordCharacter2(nextChar, nextRemaining, isRTL)) {
      return true;
    }
  }
  if (PUNCTUATION.test(char)) {
    return false;
  }
  return true;
};
var codepointsIteratorRTL = function* codepointsIteratorRTL2(str) {
  var end = str.length - 1;
  for (var i3 = 0; i3 < str.length; i3++) {
    var char1 = str.charAt(end - i3);
    if (isLowSurrogate(char1.charCodeAt(0))) {
      var char2 = str.charAt(end - i3 - 1);
      if (isHighSurrogate(char2.charCodeAt(0))) {
        yield char2 + char1;
        i3++;
        continue;
      }
    }
    yield char1;
  }
};
var isHighSurrogate = (charCode) => {
  return charCode >= 55296 && charCode <= 56319;
};
var isLowSurrogate = (charCode) => {
  return charCode >= 56320 && charCode <= 57343;
};
var CodepointType;
(function(CodepointType2) {
  CodepointType2[CodepointType2["None"] = 0] = "None";
  CodepointType2[CodepointType2["Extend"] = 1] = "Extend";
  CodepointType2[CodepointType2["ZWJ"] = 2] = "ZWJ";
  CodepointType2[CodepointType2["RI"] = 4] = "RI";
  CodepointType2[CodepointType2["Prepend"] = 8] = "Prepend";
  CodepointType2[CodepointType2["SpacingMark"] = 16] = "SpacingMark";
  CodepointType2[CodepointType2["L"] = 32] = "L";
  CodepointType2[CodepointType2["V"] = 64] = "V";
  CodepointType2[CodepointType2["T"] = 128] = "T";
  CodepointType2[CodepointType2["LV"] = 256] = "LV";
  CodepointType2[CodepointType2["LVT"] = 512] = "LVT";
  CodepointType2[CodepointType2["ExtPict"] = 1024] = "ExtPict";
  CodepointType2[CodepointType2["Any"] = 2048] = "Any";
})(CodepointType || (CodepointType = {}));
var reExtend = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/;
var rePrepend = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/;
var reSpacingMark = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/;
var reL = /^[\u1100-\u115F\uA960-\uA97C]$/;
var reV = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/;
var reT = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/;
var reLV = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/;
var reLVT = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/;
var reExtPict = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/;
var getCodepointType = (char, code) => {
  var type = CodepointType.Any;
  if (char.search(reExtend) !== -1) {
    type |= CodepointType.Extend;
  }
  if (code === 8205) {
    type |= CodepointType.ZWJ;
  }
  if (code >= 127462 && code <= 127487) {
    type |= CodepointType.RI;
  }
  if (char.search(rePrepend) !== -1) {
    type |= CodepointType.Prepend;
  }
  if (char.search(reSpacingMark) !== -1) {
    type |= CodepointType.SpacingMark;
  }
  if (char.search(reL) !== -1) {
    type |= CodepointType.L;
  }
  if (char.search(reV) !== -1) {
    type |= CodepointType.V;
  }
  if (char.search(reT) !== -1) {
    type |= CodepointType.T;
  }
  if (char.search(reLV) !== -1) {
    type |= CodepointType.LV;
  }
  if (char.search(reLVT) !== -1) {
    type |= CodepointType.LVT;
  }
  if (char.search(reExtPict) !== -1) {
    type |= CodepointType.ExtPict;
  }
  return type;
};
function intersects(x2, y2) {
  return (x2 & y2) !== 0;
}
var NonBoundaryPairs = [
  [CodepointType.L, CodepointType.L | CodepointType.V | CodepointType.LV | CodepointType.LVT],
  [CodepointType.LV | CodepointType.V, CodepointType.V | CodepointType.T],
  [CodepointType.LVT | CodepointType.T, CodepointType.T],
  [CodepointType.Any, CodepointType.Extend | CodepointType.ZWJ],
  [CodepointType.Any, CodepointType.SpacingMark],
  [CodepointType.Prepend, CodepointType.Any],
  [CodepointType.ZWJ, CodepointType.ExtPict],
  [CodepointType.RI, CodepointType.RI]
];
function isBoundaryPair(left, right) {
  return NonBoundaryPairs.findIndex((r3) => intersects(left, r3[0]) && intersects(right, r3[1])) === -1;
}
var endingEmojiZWJ = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/;
var endsWithEmojiZWJ = (str) => {
  return str.search(endingEmojiZWJ) !== -1;
};
var endingRIs = /(?:\uD83C[\uDDE6-\uDDFF])+$/g;
var endsWithOddNumberOfRIs = (str) => {
  var match = str.match(endingRIs);
  if (match === null) {
    return false;
  } else {
    var numRIs = match[0].length / 2;
    return numRIs % 2 === 1;
  }
};
var isElement = (value) => {
  return isPlainObject(value) && Node.isNodeList(value.children) && !Editor.isEditor(value);
};
var Element = {
  isAncestor(value) {
    return isPlainObject(value) && Node.isNodeList(value.children);
  },
  isElement,
  isElementList(value) {
    return Array.isArray(value) && value.every((val) => Element.isElement(val));
  },
  isElementProps(props) {
    return props.children !== void 0;
  },
  isElementType: function isElementType(value, elementVal) {
    var elementKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return isElement(value) && value[elementKey] === elementVal;
  },
  matches(element, props) {
    for (var key in props) {
      if (key === "children") {
        continue;
      }
      if (element[key] !== props[key]) {
        return false;
      }
    }
    return true;
  }
};
var _excluded$4 = ["text"];
var _excluded2$3 = ["text"];
function ownKeys$8(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$8(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
      ownKeys$8(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$8(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var IS_EDITOR_CACHE = /* @__PURE__ */ new WeakMap();
var Editor = {
  above(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      voids = false,
      mode = "lowest",
      at = editor.selection,
      match
    } = options;
    if (!at) {
      return;
    }
    var path = Editor.path(editor, at);
    var reverse = mode === "lowest";
    for (var [n4, p2] of Editor.levels(editor, {
      at: path,
      voids,
      match,
      reverse
    })) {
      if (Text2.isText(n4))
        continue;
      if (Range.isRange(at)) {
        if (Path.isAncestor(p2, at.anchor.path) && Path.isAncestor(p2, at.focus.path)) {
          return [n4, p2];
        }
      } else {
        if (!Path.equals(path, p2)) {
          return [n4, p2];
        }
      }
    }
  },
  addMark(editor, key, value) {
    editor.addMark(key, value);
  },
  after(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var anchor = Editor.point(editor, at, {
      edge: "end"
    });
    var focus = Editor.end(editor, []);
    var range = {
      anchor,
      focus
    };
    var {
      distance = 1
    } = options;
    var d2 = 0;
    var target;
    for (var p2 of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      at: range
    }))) {
      if (d2 > distance) {
        break;
      }
      if (d2 !== 0) {
        target = p2;
      }
      d2++;
    }
    return target;
  },
  before(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var anchor = Editor.start(editor, []);
    var focus = Editor.point(editor, at, {
      edge: "start"
    });
    var range = {
      anchor,
      focus
    };
    var {
      distance = 1
    } = options;
    var d2 = 0;
    var target;
    for (var p2 of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      at: range,
      reverse: true
    }))) {
      if (d2 > distance) {
        break;
      }
      if (d2 !== 0) {
        target = p2;
      }
      d2++;
    }
    return target;
  },
  deleteBackward(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      unit = "character"
    } = options;
    editor.deleteBackward(unit);
  },
  deleteForward(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      unit = "character"
    } = options;
    editor.deleteForward(unit);
  },
  deleteFragment(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      direction = "forward"
    } = options;
    editor.deleteFragment(direction);
  },
  edges(editor, at) {
    return [Editor.start(editor, at), Editor.end(editor, at)];
  },
  end(editor, at) {
    return Editor.point(editor, at, {
      edge: "end"
    });
  },
  first(editor, at) {
    var path = Editor.path(editor, at, {
      edge: "start"
    });
    return Editor.node(editor, path);
  },
  fragment(editor, at) {
    var range = Editor.range(editor, at);
    var fragment = Node.fragment(editor, range);
    return fragment;
  },
  hasBlocks(editor, element) {
    return element.children.some((n4) => Editor.isBlock(editor, n4));
  },
  hasInlines(editor, element) {
    return element.children.some((n4) => Text2.isText(n4) || Editor.isInline(editor, n4));
  },
  hasTexts(editor, element) {
    return element.children.every((n4) => Text2.isText(n4));
  },
  insertBreak(editor) {
    editor.insertBreak();
  },
  insertSoftBreak(editor) {
    editor.insertSoftBreak();
  },
  insertFragment(editor, fragment) {
    editor.insertFragment(fragment);
  },
  insertNode(editor, node) {
    editor.insertNode(node);
  },
  insertText(editor, text) {
    editor.insertText(text);
  },
  isBlock(editor, value) {
    return Element.isElement(value) && !editor.isInline(value);
  },
  isEditor(value) {
    var cachedIsEditor = IS_EDITOR_CACHE.get(value);
    if (cachedIsEditor !== void 0) {
      return cachedIsEditor;
    }
    if (!isPlainObject(value)) {
      return false;
    }
    var isEditor = typeof value.addMark === "function" && typeof value.apply === "function" && typeof value.deleteBackward === "function" && typeof value.deleteForward === "function" && typeof value.deleteFragment === "function" && typeof value.insertBreak === "function" && typeof value.insertSoftBreak === "function" && typeof value.insertFragment === "function" && typeof value.insertNode === "function" && typeof value.insertText === "function" && typeof value.isInline === "function" && typeof value.isVoid === "function" && typeof value.normalizeNode === "function" && typeof value.onChange === "function" && typeof value.removeMark === "function" && typeof value.getDirtyPaths === "function" && (value.marks === null || isPlainObject(value.marks)) && (value.selection === null || Range.isRange(value.selection)) && Node.isNodeList(value.children) && Operation.isOperationList(value.operations);
    IS_EDITOR_CACHE.set(value, isEditor);
    return isEditor;
  },
  isEnd(editor, point, at) {
    var end = Editor.end(editor, at);
    return Point.equals(point, end);
  },
  isEdge(editor, point, at) {
    return Editor.isStart(editor, point, at) || Editor.isEnd(editor, point, at);
  },
  isEmpty(editor, element) {
    var {
      children
    } = element;
    var [first] = children;
    return children.length === 0 || children.length === 1 && Text2.isText(first) && first.text === "" && !editor.isVoid(element);
  },
  isInline(editor, value) {
    return Element.isElement(value) && editor.isInline(value);
  },
  isNormalizing(editor) {
    var isNormalizing = NORMALIZING.get(editor);
    return isNormalizing === void 0 ? true : isNormalizing;
  },
  isStart(editor, point, at) {
    if (point.offset !== 0) {
      return false;
    }
    var start = Editor.start(editor, at);
    return Point.equals(point, start);
  },
  isVoid(editor, value) {
    return Element.isElement(value) && editor.isVoid(value);
  },
  last(editor, at) {
    var path = Editor.path(editor, at, {
      edge: "end"
    });
    return Editor.node(editor, path);
  },
  leaf(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var node = Node.leaf(editor, path);
    return [node, path];
  },
  *levels(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      at = editor.selection,
      reverse = false,
      voids = false
    } = options;
    var {
      match
    } = options;
    if (match == null) {
      match = () => true;
    }
    if (!at) {
      return;
    }
    var levels = [];
    var path = Editor.path(editor, at);
    for (var [n4, p2] of Node.levels(editor, path)) {
      if (!match(n4, p2)) {
        continue;
      }
      levels.push([n4, p2]);
      if (!voids && Editor.isVoid(editor, n4)) {
        break;
      }
    }
    if (reverse) {
      levels.reverse();
    }
    yield* levels;
  },
  marks(editor) {
    var {
      marks,
      selection
    } = editor;
    if (!selection) {
      return null;
    }
    if (marks) {
      return marks;
    }
    if (Range.isExpanded(selection)) {
      var [match] = Editor.nodes(editor, {
        match: Text2.isText
      });
      if (match) {
        var [_node] = match;
        var _rest = _objectWithoutProperties(_node, _excluded$4);
        return _rest;
      } else {
        return {};
      }
    }
    var {
      anchor
    } = selection;
    var {
      path
    } = anchor;
    var [node] = Editor.leaf(editor, path);
    if (anchor.offset === 0) {
      var prev = Editor.previous(editor, {
        at: path,
        match: Text2.isText
      });
      var markedVoid = Editor.above(editor, {
        match: (n4) => Editor.isVoid(editor, n4) && editor.markableVoid(n4)
      });
      if (!markedVoid) {
        var block = Editor.above(editor, {
          match: (n4) => Editor.isBlock(editor, n4)
        });
        if (prev && block) {
          var [prevNode, prevPath] = prev;
          var [, blockPath] = block;
          if (Path.isAncestor(blockPath, prevPath)) {
            node = prevNode;
          }
        }
      }
    }
    var rest = _objectWithoutProperties(node, _excluded2$3);
    return rest;
  },
  next(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      mode = "lowest",
      voids = false
    } = options;
    var {
      match,
      at = editor.selection
    } = options;
    if (!at) {
      return;
    }
    var pointAfterLocation = Editor.after(editor, at, {
      voids
    });
    if (!pointAfterLocation)
      return;
    var [, to] = Editor.last(editor, []);
    var span = [pointAfterLocation.path, to];
    if (Path.isPath(at) && at.length === 0) {
      throw new Error("Cannot get the next node from the root node!");
    }
    if (match == null) {
      if (Path.isPath(at)) {
        var [parent] = Editor.parent(editor, at);
        match = (n4) => parent.children.includes(n4);
      } else {
        match = () => true;
      }
    }
    var [next] = Editor.nodes(editor, {
      at: span,
      match,
      mode,
      voids
    });
    return next;
  },
  node(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var node = Node.get(editor, path);
    return [node, path];
  },
  *nodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      at = editor.selection,
      mode = "all",
      universal = false,
      reverse = false,
      voids = false
    } = options;
    var {
      match
    } = options;
    if (!match) {
      match = () => true;
    }
    if (!at) {
      return;
    }
    var from;
    var to;
    if (Span.isSpan(at)) {
      from = at[0];
      to = at[1];
    } else {
      var first = Editor.path(editor, at, {
        edge: "start"
      });
      var last = Editor.path(editor, at, {
        edge: "end"
      });
      from = reverse ? last : first;
      to = reverse ? first : last;
    }
    var nodeEntries = Node.nodes(editor, {
      reverse,
      from,
      to,
      pass: (_ref) => {
        var [n4] = _ref;
        return voids ? false : Editor.isVoid(editor, n4);
      }
    });
    var matches = [];
    var hit;
    for (var [node, path] of nodeEntries) {
      var isLower = hit && Path.compare(path, hit[1]) === 0;
      if (mode === "highest" && isLower) {
        continue;
      }
      if (!match(node, path)) {
        if (universal && !isLower && Text2.isText(node)) {
          return;
        } else {
          continue;
        }
      }
      if (mode === "lowest" && isLower) {
        hit = [node, path];
        continue;
      }
      var emit = mode === "lowest" ? hit : [node, path];
      if (emit) {
        if (universal) {
          matches.push(emit);
        } else {
          yield emit;
        }
      }
      hit = [node, path];
    }
    if (mode === "lowest" && hit) {
      if (universal) {
        matches.push(hit);
      } else {
        yield hit;
      }
    }
    if (universal) {
      yield* matches;
    }
  },
  normalize(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      force = false
    } = options;
    var getDirtyPaths = (editor2) => {
      return DIRTY_PATHS.get(editor2) || [];
    };
    var getDirtyPathKeys = (editor2) => {
      return DIRTY_PATH_KEYS.get(editor2) || /* @__PURE__ */ new Set();
    };
    var popDirtyPath = (editor2) => {
      var path = getDirtyPaths(editor2).pop();
      var key = path.join(",");
      getDirtyPathKeys(editor2).delete(key);
      return path;
    };
    if (!Editor.isNormalizing(editor)) {
      return;
    }
    if (force) {
      var allPaths = Array.from(Node.nodes(editor), (_ref2) => {
        var [, p2] = _ref2;
        return p2;
      });
      var allPathKeys = new Set(allPaths.map((p2) => p2.join(",")));
      DIRTY_PATHS.set(editor, allPaths);
      DIRTY_PATH_KEYS.set(editor, allPathKeys);
    }
    if (getDirtyPaths(editor).length === 0) {
      return;
    }
    Editor.withoutNormalizing(editor, () => {
      for (var dirtyPath of getDirtyPaths(editor)) {
        if (Node.has(editor, dirtyPath)) {
          var entry = Editor.node(editor, dirtyPath);
          var [node, _2] = entry;
          if (Element.isElement(node) && node.children.length === 0) {
            editor.normalizeNode(entry);
          }
        }
      }
      var max = getDirtyPaths(editor).length * 42;
      var m = 0;
      while (getDirtyPaths(editor).length !== 0) {
        if (m > max) {
          throw new Error("\n            Could not completely normalize the editor after ".concat(max, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "));
        }
        var _dirtyPath = popDirtyPath(editor);
        if (Node.has(editor, _dirtyPath)) {
          var _entry = Editor.node(editor, _dirtyPath);
          editor.normalizeNode(_entry);
        }
        m++;
      }
    });
  },
  parent(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var parentPath = Path.parent(path);
    var entry = Editor.node(editor, parentPath);
    return entry;
  },
  path(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      depth,
      edge
    } = options;
    if (Path.isPath(at)) {
      if (edge === "start") {
        var [, firstPath] = Node.first(editor, at);
        at = firstPath;
      } else if (edge === "end") {
        var [, lastPath] = Node.last(editor, at);
        at = lastPath;
      }
    }
    if (Range.isRange(at)) {
      if (edge === "start") {
        at = Range.start(at);
      } else if (edge === "end") {
        at = Range.end(at);
      } else {
        at = Path.common(at.anchor.path, at.focus.path);
      }
    }
    if (Point.isPoint(at)) {
      at = at.path;
    }
    if (depth != null) {
      at = at.slice(0, depth);
    }
    return at;
  },
  hasPath(editor, path) {
    return Node.has(editor, path);
  },
  pathRef(editor, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      affinity = "forward"
    } = options;
    var ref = {
      current: path,
      affinity,
      unref() {
        var {
          current
        } = ref;
        var pathRefs = Editor.pathRefs(editor);
        pathRefs.delete(ref);
        ref.current = null;
        return current;
      }
    };
    var refs = Editor.pathRefs(editor);
    refs.add(ref);
    return ref;
  },
  pathRefs(editor) {
    var refs = PATH_REFS.get(editor);
    if (!refs) {
      refs = /* @__PURE__ */ new Set();
      PATH_REFS.set(editor, refs);
    }
    return refs;
  },
  point(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      edge = "start"
    } = options;
    if (Path.isPath(at)) {
      var path;
      if (edge === "end") {
        var [, lastPath] = Node.last(editor, at);
        path = lastPath;
      } else {
        var [, firstPath] = Node.first(editor, at);
        path = firstPath;
      }
      var node = Node.get(editor, path);
      if (!Text2.isText(node)) {
        throw new Error("Cannot get the ".concat(edge, " point in the node at path [").concat(at, "] because it has no ").concat(edge, " text node."));
      }
      return {
        path,
        offset: edge === "end" ? node.text.length : 0
      };
    }
    if (Range.isRange(at)) {
      var [start, end] = Range.edges(at);
      return edge === "start" ? start : end;
    }
    return at;
  },
  pointRef(editor, point) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      affinity = "forward"
    } = options;
    var ref = {
      current: point,
      affinity,
      unref() {
        var {
          current
        } = ref;
        var pointRefs = Editor.pointRefs(editor);
        pointRefs.delete(ref);
        ref.current = null;
        return current;
      }
    };
    var refs = Editor.pointRefs(editor);
    refs.add(ref);
    return ref;
  },
  pointRefs(editor) {
    var refs = POINT_REFS.get(editor);
    if (!refs) {
      refs = /* @__PURE__ */ new Set();
      POINT_REFS.set(editor, refs);
    }
    return refs;
  },
  *positions(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      at = editor.selection,
      unit = "offset",
      reverse = false,
      voids = false
    } = options;
    if (!at) {
      return;
    }
    var range = Editor.range(editor, at);
    var [start, end] = Range.edges(range);
    var first = reverse ? end : start;
    var isNewBlock = false;
    var blockText = "";
    var distance = 0;
    var leafTextRemaining = 0;
    var leafTextOffset = 0;
    for (var [node, path] of Editor.nodes(editor, {
      at,
      reverse,
      voids
    })) {
      if (Element.isElement(node)) {
        if (!voids && editor.isVoid(node)) {
          yield Editor.start(editor, path);
          continue;
        }
        if (editor.isInline(node))
          continue;
        if (Editor.hasInlines(editor, node)) {
          var e2 = Path.isAncestor(path, end.path) ? end : Editor.end(editor, path);
          var s2 = Path.isAncestor(path, start.path) ? start : Editor.start(editor, path);
          blockText = Editor.string(editor, {
            anchor: s2,
            focus: e2
          }, {
            voids
          });
          isNewBlock = true;
        }
      }
      if (Text2.isText(node)) {
        var isFirst = Path.equals(path, first.path);
        if (isFirst) {
          leafTextRemaining = reverse ? first.offset : node.text.length - first.offset;
          leafTextOffset = first.offset;
        } else {
          leafTextRemaining = node.text.length;
          leafTextOffset = reverse ? leafTextRemaining : 0;
        }
        if (isFirst || isNewBlock || unit === "offset") {
          yield {
            path,
            offset: leafTextOffset
          };
          isNewBlock = false;
        }
        while (true) {
          if (distance === 0) {
            if (blockText === "")
              break;
            distance = calcDistance(blockText, unit, reverse);
            blockText = splitByCharacterDistance(blockText, distance, reverse)[1];
          }
          leafTextOffset = reverse ? leafTextOffset - distance : leafTextOffset + distance;
          leafTextRemaining = leafTextRemaining - distance;
          if (leafTextRemaining < 0) {
            distance = -leafTextRemaining;
            break;
          }
          distance = 0;
          yield {
            path,
            offset: leafTextOffset
          };
        }
      }
    }
    function calcDistance(text, unit2, reverse2) {
      if (unit2 === "character") {
        return getCharacterDistance(text, reverse2);
      } else if (unit2 === "word") {
        return getWordDistance(text, reverse2);
      } else if (unit2 === "line" || unit2 === "block") {
        return text.length;
      }
      return 1;
    }
  },
  previous(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      mode = "lowest",
      voids = false
    } = options;
    var {
      match,
      at = editor.selection
    } = options;
    if (!at) {
      return;
    }
    var pointBeforeLocation = Editor.before(editor, at, {
      voids
    });
    if (!pointBeforeLocation) {
      return;
    }
    var [, to] = Editor.first(editor, []);
    var span = [pointBeforeLocation.path, to];
    if (Path.isPath(at) && at.length === 0) {
      throw new Error("Cannot get the previous node from the root node!");
    }
    if (match == null) {
      if (Path.isPath(at)) {
        var [parent] = Editor.parent(editor, at);
        match = (n4) => parent.children.includes(n4);
      } else {
        match = () => true;
      }
    }
    var [previous] = Editor.nodes(editor, {
      reverse: true,
      at: span,
      match,
      mode,
      voids
    });
    return previous;
  },
  range(editor, at, to) {
    if (Range.isRange(at) && !to) {
      return at;
    }
    var start = Editor.start(editor, at);
    var end = Editor.end(editor, to || at);
    return {
      anchor: start,
      focus: end
    };
  },
  rangeRef(editor, range) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      affinity = "forward"
    } = options;
    var ref = {
      current: range,
      affinity,
      unref() {
        var {
          current
        } = ref;
        var rangeRefs = Editor.rangeRefs(editor);
        rangeRefs.delete(ref);
        ref.current = null;
        return current;
      }
    };
    var refs = Editor.rangeRefs(editor);
    refs.add(ref);
    return ref;
  },
  rangeRefs(editor) {
    var refs = RANGE_REFS.get(editor);
    if (!refs) {
      refs = /* @__PURE__ */ new Set();
      RANGE_REFS.set(editor, refs);
    }
    return refs;
  },
  removeMark(editor, key) {
    editor.removeMark(key);
  },
  setNormalizing(editor, isNormalizing) {
    NORMALIZING.set(editor, isNormalizing);
  },
  start(editor, at) {
    return Editor.point(editor, at, {
      edge: "start"
    });
  },
  string(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      voids = false
    } = options;
    var range = Editor.range(editor, at);
    var [start, end] = Range.edges(range);
    var text = "";
    for (var [node, path] of Editor.nodes(editor, {
      at: range,
      match: Text2.isText,
      voids
    })) {
      var t3 = node.text;
      if (Path.equals(path, end.path)) {
        t3 = t3.slice(0, end.offset);
      }
      if (Path.equals(path, start.path)) {
        t3 = t3.slice(start.offset);
      }
      text += t3;
    }
    return text;
  },
  unhangRange(editor, range) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      voids = false
    } = options;
    var [start, end] = Range.edges(range);
    if (start.offset !== 0 || end.offset !== 0 || Range.isCollapsed(range) || Path.hasPrevious(end.path)) {
      return range;
    }
    var endBlock = Editor.above(editor, {
      at: end,
      match: (n4) => Editor.isBlock(editor, n4),
      voids
    });
    var blockPath = endBlock ? endBlock[1] : [];
    var first = Editor.start(editor, start);
    var before = {
      anchor: first,
      focus: end
    };
    var skip = true;
    for (var [node, path] of Editor.nodes(editor, {
      at: before,
      match: Text2.isText,
      reverse: true,
      voids
    })) {
      if (skip) {
        skip = false;
        continue;
      }
      if (node.text !== "" || Path.isBefore(path, blockPath)) {
        end = {
          path,
          offset: node.text.length
        };
        break;
      }
    }
    return {
      anchor: start,
      focus: end
    };
  },
  void(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Editor.above(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      match: (n4) => Editor.isVoid(editor, n4)
    }));
  },
  withoutNormalizing(editor, fn2) {
    var value = Editor.isNormalizing(editor);
    Editor.setNormalizing(editor, false);
    try {
      fn2();
    } finally {
      Editor.setNormalizing(editor, value);
    }
    Editor.normalize(editor);
  }
};
var Span = {
  isSpan(value) {
    return Array.isArray(value) && value.length === 2 && value.every(Path.isPath);
  }
};
var _excluded$3 = ["children"];
var _excluded2$2 = ["text"];
var IS_NODE_LIST_CACHE = /* @__PURE__ */ new WeakMap();
var Node = {
  ancestor(root, path) {
    var node = Node.get(root, path);
    if (Text2.isText(node)) {
      throw new Error("Cannot get the ancestor node at path [".concat(path, "] because it refers to a text node instead: ").concat(Scrubber.stringify(node)));
    }
    return node;
  },
  *ancestors(root, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    for (var p2 of Path.ancestors(path, options)) {
      var n4 = Node.ancestor(root, p2);
      var entry = [n4, p2];
      yield entry;
    }
  },
  child(root, index) {
    if (Text2.isText(root)) {
      throw new Error("Cannot get the child of a text node: ".concat(Scrubber.stringify(root)));
    }
    var c2 = root.children[index];
    if (c2 == null) {
      throw new Error("Cannot get child at index `".concat(index, "` in node: ").concat(Scrubber.stringify(root)));
    }
    return c2;
  },
  *children(root, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      reverse = false
    } = options;
    var ancestor = Node.ancestor(root, path);
    var {
      children
    } = ancestor;
    var index = reverse ? children.length - 1 : 0;
    while (reverse ? index >= 0 : index < children.length) {
      var child = Node.child(ancestor, index);
      var childPath = path.concat(index);
      yield [child, childPath];
      index = reverse ? index - 1 : index + 1;
    }
  },
  common(root, path, another) {
    var p2 = Path.common(path, another);
    var n4 = Node.get(root, p2);
    return [n4, p2];
  },
  descendant(root, path) {
    var node = Node.get(root, path);
    if (Editor.isEditor(node)) {
      throw new Error("Cannot get the descendant node at path [".concat(path, "] because it refers to the root editor node instead: ").concat(Scrubber.stringify(node)));
    }
    return node;
  },
  *descendants(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    for (var [node, path] of Node.nodes(root, options)) {
      if (path.length !== 0) {
        yield [node, path];
      }
    }
  },
  *elements(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    for (var [node, path] of Node.nodes(root, options)) {
      if (Element.isElement(node)) {
        yield [node, path];
      }
    }
  },
  extractProps(node) {
    if (Element.isAncestor(node)) {
      var properties = _objectWithoutProperties(node, _excluded$3);
      return properties;
    } else {
      var properties = _objectWithoutProperties(node, _excluded2$2);
      return properties;
    }
  },
  first(root, path) {
    var p2 = path.slice();
    var n4 = Node.get(root, p2);
    while (n4) {
      if (Text2.isText(n4) || n4.children.length === 0) {
        break;
      } else {
        n4 = n4.children[0];
        p2.push(0);
      }
    }
    return [n4, p2];
  },
  fragment(root, range) {
    if (Text2.isText(root)) {
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(Scrubber.stringify(root)));
    }
    var newRoot = fn({
      children: root.children
    }, (r3) => {
      var [start, end] = Range.edges(range);
      var nodeEntries = Node.nodes(r3, {
        reverse: true,
        pass: (_ref) => {
          var [, path2] = _ref;
          return !Range.includes(range, path2);
        }
      });
      for (var [, path] of nodeEntries) {
        if (!Range.includes(range, path)) {
          var parent = Node.parent(r3, path);
          var index = path[path.length - 1];
          parent.children.splice(index, 1);
        }
        if (Path.equals(path, end.path)) {
          var leaf = Node.leaf(r3, path);
          leaf.text = leaf.text.slice(0, end.offset);
        }
        if (Path.equals(path, start.path)) {
          var _leaf = Node.leaf(r3, path);
          _leaf.text = _leaf.text.slice(start.offset);
        }
      }
      if (Editor.isEditor(r3)) {
        r3.selection = null;
      }
    });
    return newRoot.children;
  },
  get(root, path) {
    var node = root;
    for (var i3 = 0; i3 < path.length; i3++) {
      var p2 = path[i3];
      if (Text2.isText(node) || !node.children[p2]) {
        throw new Error("Cannot find a descendant at path [".concat(path, "] in node: ").concat(Scrubber.stringify(root)));
      }
      node = node.children[p2];
    }
    return node;
  },
  has(root, path) {
    var node = root;
    for (var i3 = 0; i3 < path.length; i3++) {
      var p2 = path[i3];
      if (Text2.isText(node) || !node.children[p2]) {
        return false;
      }
      node = node.children[p2];
    }
    return true;
  },
  isNode(value) {
    return Text2.isText(value) || Element.isElement(value) || Editor.isEditor(value);
  },
  isNodeList(value) {
    if (!Array.isArray(value)) {
      return false;
    }
    var cachedResult = IS_NODE_LIST_CACHE.get(value);
    if (cachedResult !== void 0) {
      return cachedResult;
    }
    var isNodeList = value.every((val) => Node.isNode(val));
    IS_NODE_LIST_CACHE.set(value, isNodeList);
    return isNodeList;
  },
  last(root, path) {
    var p2 = path.slice();
    var n4 = Node.get(root, p2);
    while (n4) {
      if (Text2.isText(n4) || n4.children.length === 0) {
        break;
      } else {
        var i3 = n4.children.length - 1;
        n4 = n4.children[i3];
        p2.push(i3);
      }
    }
    return [n4, p2];
  },
  leaf(root, path) {
    var node = Node.get(root, path);
    if (!Text2.isText(node)) {
      throw new Error("Cannot get the leaf node at path [".concat(path, "] because it refers to a non-leaf node: ").concat(Scrubber.stringify(node)));
    }
    return node;
  },
  *levels(root, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    for (var p2 of Path.levels(path, options)) {
      var n4 = Node.get(root, p2);
      yield [n4, p2];
    }
  },
  matches(node, props) {
    return Element.isElement(node) && Element.isElementProps(props) && Element.matches(node, props) || Text2.isText(node) && Text2.isTextProps(props) && Text2.matches(node, props);
  },
  *nodes(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      pass,
      reverse = false
    } = options;
    var {
      from = [],
      to
    } = options;
    var visited = /* @__PURE__ */ new Set();
    var p2 = [];
    var n4 = root;
    while (true) {
      if (to && (reverse ? Path.isBefore(p2, to) : Path.isAfter(p2, to))) {
        break;
      }
      if (!visited.has(n4)) {
        yield [n4, p2];
      }
      if (!visited.has(n4) && !Text2.isText(n4) && n4.children.length !== 0 && (pass == null || pass([n4, p2]) === false)) {
        visited.add(n4);
        var nextIndex = reverse ? n4.children.length - 1 : 0;
        if (Path.isAncestor(p2, from)) {
          nextIndex = from[p2.length];
        }
        p2 = p2.concat(nextIndex);
        n4 = Node.get(root, p2);
        continue;
      }
      if (p2.length === 0) {
        break;
      }
      if (!reverse) {
        var newPath = Path.next(p2);
        if (Node.has(root, newPath)) {
          p2 = newPath;
          n4 = Node.get(root, p2);
          continue;
        }
      }
      if (reverse && p2[p2.length - 1] !== 0) {
        var _newPath = Path.previous(p2);
        p2 = _newPath;
        n4 = Node.get(root, p2);
        continue;
      }
      p2 = Path.parent(p2);
      n4 = Node.get(root, p2);
      visited.add(n4);
    }
  },
  parent(root, path) {
    var parentPath = Path.parent(path);
    var p2 = Node.get(root, parentPath);
    if (Text2.isText(p2)) {
      throw new Error("Cannot get the parent of path [".concat(path, "] because it does not exist in the root."));
    }
    return p2;
  },
  string(node) {
    if (Text2.isText(node)) {
      return node.text;
    } else {
      return node.children.map(Node.string).join("");
    }
  },
  *texts(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    for (var [node, path] of Node.nodes(root, options)) {
      if (Text2.isText(node)) {
        yield [node, path];
      }
    }
  }
};
function ownKeys$7(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$7(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
      ownKeys$7(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$7(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Operation = {
  isNodeOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_node");
  },
  isOperation(value) {
    if (!isPlainObject(value)) {
      return false;
    }
    switch (value.type) {
      case "insert_node":
        return Path.isPath(value.path) && Node.isNode(value.node);
      case "insert_text":
        return typeof value.offset === "number" && typeof value.text === "string" && Path.isPath(value.path);
      case "merge_node":
        return typeof value.position === "number" && Path.isPath(value.path) && isPlainObject(value.properties);
      case "move_node":
        return Path.isPath(value.path) && Path.isPath(value.newPath);
      case "remove_node":
        return Path.isPath(value.path) && Node.isNode(value.node);
      case "remove_text":
        return typeof value.offset === "number" && typeof value.text === "string" && Path.isPath(value.path);
      case "set_node":
        return Path.isPath(value.path) && isPlainObject(value.properties) && isPlainObject(value.newProperties);
      case "set_selection":
        return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || isPlainObject(value.properties) && isPlainObject(value.newProperties);
      case "split_node":
        return Path.isPath(value.path) && typeof value.position === "number" && isPlainObject(value.properties);
      default:
        return false;
    }
  },
  isOperationList(value) {
    return Array.isArray(value) && value.every((val) => Operation.isOperation(val));
  },
  isSelectionOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_selection");
  },
  isTextOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_text");
  },
  inverse(op) {
    switch (op.type) {
      case "insert_node": {
        return _objectSpread$7(_objectSpread$7({}, op), {}, {
          type: "remove_node"
        });
      }
      case "insert_text": {
        return _objectSpread$7(_objectSpread$7({}, op), {}, {
          type: "remove_text"
        });
      }
      case "merge_node": {
        return _objectSpread$7(_objectSpread$7({}, op), {}, {
          type: "split_node",
          path: Path.previous(op.path)
        });
      }
      case "move_node": {
        var {
          newPath,
          path
        } = op;
        if (Path.equals(newPath, path)) {
          return op;
        }
        if (Path.isSibling(path, newPath)) {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            path: newPath,
            newPath: path
          });
        }
        var inversePath = Path.transform(path, op);
        var inverseNewPath = Path.transform(Path.next(path), op);
        return _objectSpread$7(_objectSpread$7({}, op), {}, {
          path: inversePath,
          newPath: inverseNewPath
        });
      }
      case "remove_node": {
        return _objectSpread$7(_objectSpread$7({}, op), {}, {
          type: "insert_node"
        });
      }
      case "remove_text": {
        return _objectSpread$7(_objectSpread$7({}, op), {}, {
          type: "insert_text"
        });
      }
      case "set_node": {
        var {
          properties,
          newProperties
        } = op;
        return _objectSpread$7(_objectSpread$7({}, op), {}, {
          properties: newProperties,
          newProperties: properties
        });
      }
      case "set_selection": {
        var {
          properties: _properties,
          newProperties: _newProperties
        } = op;
        if (_properties == null) {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            properties: _newProperties,
            newProperties: null
          });
        } else if (_newProperties == null) {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            properties: null,
            newProperties: _properties
          });
        } else {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            properties: _newProperties,
            newProperties: _properties
          });
        }
      }
      case "split_node": {
        return _objectSpread$7(_objectSpread$7({}, op), {}, {
          type: "merge_node",
          path: Path.next(op.path)
        });
      }
    }
  }
};
var Path = {
  ancestors(path) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var paths = Path.levels(path, options);
    if (reverse) {
      paths = paths.slice(1);
    } else {
      paths = paths.slice(0, -1);
    }
    return paths;
  },
  common(path, another) {
    var common = [];
    for (var i3 = 0; i3 < path.length && i3 < another.length; i3++) {
      var av = path[i3];
      var bv = another[i3];
      if (av !== bv) {
        break;
      }
      common.push(av);
    }
    return common;
  },
  compare(path, another) {
    var min = Math.min(path.length, another.length);
    for (var i3 = 0; i3 < min; i3++) {
      if (path[i3] < another[i3])
        return -1;
      if (path[i3] > another[i3])
        return 1;
    }
    return 0;
  },
  endsAfter(path, another) {
    var i3 = path.length - 1;
    var as = path.slice(0, i3);
    var bs = another.slice(0, i3);
    var av = path[i3];
    var bv = another[i3];
    return Path.equals(as, bs) && av > bv;
  },
  endsAt(path, another) {
    var i3 = path.length;
    var as = path.slice(0, i3);
    var bs = another.slice(0, i3);
    return Path.equals(as, bs);
  },
  endsBefore(path, another) {
    var i3 = path.length - 1;
    var as = path.slice(0, i3);
    var bs = another.slice(0, i3);
    var av = path[i3];
    var bv = another[i3];
    return Path.equals(as, bs) && av < bv;
  },
  equals(path, another) {
    return path.length === another.length && path.every((n4, i3) => n4 === another[i3]);
  },
  hasPrevious(path) {
    return path[path.length - 1] > 0;
  },
  isAfter(path, another) {
    return Path.compare(path, another) === 1;
  },
  isAncestor(path, another) {
    return path.length < another.length && Path.compare(path, another) === 0;
  },
  isBefore(path, another) {
    return Path.compare(path, another) === -1;
  },
  isChild(path, another) {
    return path.length === another.length + 1 && Path.compare(path, another) === 0;
  },
  isCommon(path, another) {
    return path.length <= another.length && Path.compare(path, another) === 0;
  },
  isDescendant(path, another) {
    return path.length > another.length && Path.compare(path, another) === 0;
  },
  isParent(path, another) {
    return path.length + 1 === another.length && Path.compare(path, another) === 0;
  },
  isPath(value) {
    return Array.isArray(value) && (value.length === 0 || typeof value[0] === "number");
  },
  isSibling(path, another) {
    if (path.length !== another.length) {
      return false;
    }
    var as = path.slice(0, -1);
    var bs = another.slice(0, -1);
    var al = path[path.length - 1];
    var bl = another[another.length - 1];
    return al !== bl && Path.equals(as, bs);
  },
  levels(path) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var list = [];
    for (var i3 = 0; i3 <= path.length; i3++) {
      list.push(path.slice(0, i3));
    }
    if (reverse) {
      list.reverse();
    }
    return list;
  },
  next(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the next path of a root path [".concat(path, "], because it has no next index."));
    }
    var last = path[path.length - 1];
    return path.slice(0, -1).concat(last + 1);
  },
  operationCanTransformPath(operation) {
    switch (operation.type) {
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "split_node":
      case "move_node":
        return true;
      default:
        return false;
    }
  },
  parent(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the parent path of the root path [".concat(path, "]."));
    }
    return path.slice(0, -1);
  },
  previous(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the previous path of a root path [".concat(path, "], because it has no previous index."));
    }
    var last = path[path.length - 1];
    if (last <= 0) {
      throw new Error("Cannot get the previous path of a first child path [".concat(path, "] because it would result in a negative index."));
    }
    return path.slice(0, -1).concat(last - 1);
  },
  relative(path, ancestor) {
    if (!Path.isAncestor(ancestor, path) && !Path.equals(path, ancestor)) {
      throw new Error("Cannot get the relative path of [".concat(path, "] inside ancestor [").concat(ancestor, "], because it is not above or equal to the path."));
    }
    return path.slice(ancestor.length);
  },
  transform(path, operation) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!path)
      return null;
    var p2 = [...path];
    var {
      affinity = "forward"
    } = options;
    if (path.length === 0) {
      return p2;
    }
    switch (operation.type) {
      case "insert_node": {
        var {
          path: op
        } = operation;
        if (Path.equals(op, p2) || Path.endsBefore(op, p2) || Path.isAncestor(op, p2)) {
          p2[op.length - 1] += 1;
        }
        break;
      }
      case "remove_node": {
        var {
          path: _op
        } = operation;
        if (Path.equals(_op, p2) || Path.isAncestor(_op, p2)) {
          return null;
        } else if (Path.endsBefore(_op, p2)) {
          p2[_op.length - 1] -= 1;
        }
        break;
      }
      case "merge_node": {
        var {
          path: _op2,
          position
        } = operation;
        if (Path.equals(_op2, p2) || Path.endsBefore(_op2, p2)) {
          p2[_op2.length - 1] -= 1;
        } else if (Path.isAncestor(_op2, p2)) {
          p2[_op2.length - 1] -= 1;
          p2[_op2.length] += position;
        }
        break;
      }
      case "split_node": {
        var {
          path: _op3,
          position: _position
        } = operation;
        if (Path.equals(_op3, p2)) {
          if (affinity === "forward") {
            p2[p2.length - 1] += 1;
          } else if (affinity === "backward")
            ;
          else {
            return null;
          }
        } else if (Path.endsBefore(_op3, p2)) {
          p2[_op3.length - 1] += 1;
        } else if (Path.isAncestor(_op3, p2) && path[_op3.length] >= _position) {
          p2[_op3.length - 1] += 1;
          p2[_op3.length] -= _position;
        }
        break;
      }
      case "move_node": {
        var {
          path: _op4,
          newPath: onp
        } = operation;
        if (Path.equals(_op4, onp)) {
          return p2;
        }
        if (Path.isAncestor(_op4, p2) || Path.equals(_op4, p2)) {
          var copy = onp.slice();
          if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
            copy[_op4.length - 1] -= 1;
          }
          return copy.concat(p2.slice(_op4.length));
        } else if (Path.isSibling(_op4, onp) && (Path.isAncestor(onp, p2) || Path.equals(onp, p2))) {
          if (Path.endsBefore(_op4, p2)) {
            p2[_op4.length - 1] -= 1;
          } else {
            p2[_op4.length - 1] += 1;
          }
        } else if (Path.endsBefore(onp, p2) || Path.equals(onp, p2) || Path.isAncestor(onp, p2)) {
          if (Path.endsBefore(_op4, p2)) {
            p2[_op4.length - 1] -= 1;
          }
          p2[onp.length - 1] += 1;
        } else if (Path.endsBefore(_op4, p2)) {
          if (Path.equals(onp, p2)) {
            p2[onp.length - 1] += 1;
          }
          p2[_op4.length - 1] -= 1;
        }
        break;
      }
    }
    return p2;
  }
};
var PathRef = {
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;
    if (current == null) {
      return;
    }
    var path = Path.transform(current, op, {
      affinity
    });
    ref.current = path;
    if (path == null) {
      ref.unref();
    }
  }
};
function ownKeys$6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$6(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
      ownKeys$6(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$6(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Point = {
  compare(point, another) {
    var result = Path.compare(point.path, another.path);
    if (result === 0) {
      if (point.offset < another.offset)
        return -1;
      if (point.offset > another.offset)
        return 1;
      return 0;
    }
    return result;
  },
  isAfter(point, another) {
    return Point.compare(point, another) === 1;
  },
  isBefore(point, another) {
    return Point.compare(point, another) === -1;
  },
  equals(point, another) {
    return point.offset === another.offset && Path.equals(point.path, another.path);
  },
  isPoint(value) {
    return isPlainObject(value) && typeof value.offset === "number" && Path.isPath(value.path);
  },
  transform(point, op) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return fn(point, (p2) => {
      if (p2 === null) {
        return null;
      }
      var {
        affinity = "forward"
      } = options;
      var {
        path,
        offset
      } = p2;
      switch (op.type) {
        case "insert_node":
        case "move_node": {
          p2.path = Path.transform(path, op, options);
          break;
        }
        case "insert_text": {
          if (Path.equals(op.path, path) && (op.offset < offset || op.offset === offset && affinity === "forward")) {
            p2.offset += op.text.length;
          }
          break;
        }
        case "merge_node": {
          if (Path.equals(op.path, path)) {
            p2.offset += op.position;
          }
          p2.path = Path.transform(path, op, options);
          break;
        }
        case "remove_text": {
          if (Path.equals(op.path, path) && op.offset <= offset) {
            p2.offset -= Math.min(offset - op.offset, op.text.length);
          }
          break;
        }
        case "remove_node": {
          if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
            return null;
          }
          p2.path = Path.transform(path, op, options);
          break;
        }
        case "split_node": {
          if (Path.equals(op.path, path)) {
            if (op.position === offset && affinity == null) {
              return null;
            } else if (op.position < offset || op.position === offset && affinity === "forward") {
              p2.offset -= op.position;
              p2.path = Path.transform(path, op, _objectSpread$6(_objectSpread$6({}, options), {}, {
                affinity: "forward"
              }));
            }
          } else {
            p2.path = Path.transform(path, op, options);
          }
          break;
        }
      }
    });
  }
};
var PointRef = {
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;
    if (current == null) {
      return;
    }
    var point = Point.transform(current, op, {
      affinity
    });
    ref.current = point;
    if (point == null) {
      ref.unref();
    }
  }
};
var _excluded$2 = ["anchor", "focus"];
function ownKeys$5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$5(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
      ownKeys$5(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$5(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Range = {
  edges(range) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var {
      anchor,
      focus
    } = range;
    return Range.isBackward(range) === reverse ? [anchor, focus] : [focus, anchor];
  },
  end(range) {
    var [, end] = Range.edges(range);
    return end;
  },
  equals(range, another) {
    return Point.equals(range.anchor, another.anchor) && Point.equals(range.focus, another.focus);
  },
  includes(range, target) {
    if (Range.isRange(target)) {
      if (Range.includes(range, target.anchor) || Range.includes(range, target.focus)) {
        return true;
      }
      var [rs, re] = Range.edges(range);
      var [ts, te] = Range.edges(target);
      return Point.isBefore(rs, ts) && Point.isAfter(re, te);
    }
    var [start, end] = Range.edges(range);
    var isAfterStart = false;
    var isBeforeEnd = false;
    if (Point.isPoint(target)) {
      isAfterStart = Point.compare(target, start) >= 0;
      isBeforeEnd = Point.compare(target, end) <= 0;
    } else {
      isAfterStart = Path.compare(target, start.path) >= 0;
      isBeforeEnd = Path.compare(target, end.path) <= 0;
    }
    return isAfterStart && isBeforeEnd;
  },
  intersection(range, another) {
    var rest = _objectWithoutProperties(range, _excluded$2);
    var [s1, e1] = Range.edges(range);
    var [s2, e2] = Range.edges(another);
    var start = Point.isBefore(s1, s2) ? s2 : s1;
    var end = Point.isBefore(e1, e2) ? e1 : e2;
    if (Point.isBefore(end, start)) {
      return null;
    } else {
      return _objectSpread$5({
        anchor: start,
        focus: end
      }, rest);
    }
  },
  isBackward(range) {
    var {
      anchor,
      focus
    } = range;
    return Point.isAfter(anchor, focus);
  },
  isCollapsed(range) {
    var {
      anchor,
      focus
    } = range;
    return Point.equals(anchor, focus);
  },
  isExpanded(range) {
    return !Range.isCollapsed(range);
  },
  isForward(range) {
    return !Range.isBackward(range);
  },
  isRange(value) {
    return isPlainObject(value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
  },
  *points(range) {
    yield [range.anchor, "anchor"];
    yield [range.focus, "focus"];
  },
  start(range) {
    var [start] = Range.edges(range);
    return start;
  },
  transform(range, op) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return fn(range, (r3) => {
      if (r3 === null) {
        return null;
      }
      var {
        affinity = "inward"
      } = options;
      var affinityAnchor;
      var affinityFocus;
      if (affinity === "inward") {
        var isCollapsed = Range.isCollapsed(r3);
        if (Range.isForward(r3)) {
          affinityAnchor = "forward";
          affinityFocus = isCollapsed ? affinityAnchor : "backward";
        } else {
          affinityAnchor = "backward";
          affinityFocus = isCollapsed ? affinityAnchor : "forward";
        }
      } else if (affinity === "outward") {
        if (Range.isForward(r3)) {
          affinityAnchor = "backward";
          affinityFocus = "forward";
        } else {
          affinityAnchor = "forward";
          affinityFocus = "backward";
        }
      } else {
        affinityAnchor = affinity;
        affinityFocus = affinity;
      }
      var anchor = Point.transform(r3.anchor, op, {
        affinity: affinityAnchor
      });
      var focus = Point.transform(r3.focus, op, {
        affinity: affinityFocus
      });
      if (!anchor || !focus) {
        return null;
      }
      r3.anchor = anchor;
      r3.focus = focus;
    });
  }
};
var RangeRef = {
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;
    if (current == null) {
      return;
    }
    var path = Range.transform(current, op, {
      affinity
    });
    ref.current = path;
    if (path == null) {
      ref.unref();
    }
  }
};
var _scrubber = void 0;
var Scrubber = {
  setScrubber(scrubber) {
    _scrubber = scrubber;
  },
  stringify(value) {
    return JSON.stringify(value, _scrubber);
  }
};
var isDeepEqual = (node, another) => {
  for (var key in node) {
    var a2 = node[key];
    var b2 = another[key];
    if (isPlainObject(a2) && isPlainObject(b2)) {
      if (!isDeepEqual(a2, b2))
        return false;
    } else if (Array.isArray(a2) && Array.isArray(b2)) {
      if (a2.length !== b2.length)
        return false;
      for (var i3 = 0; i3 < a2.length; i3++) {
        if (a2[i3] !== b2[i3])
          return false;
      }
    } else if (a2 !== b2) {
      return false;
    }
  }
  for (var _key in another) {
    if (node[_key] === void 0 && another[_key] !== void 0) {
      return false;
    }
  }
  return true;
};
var _excluded$1 = ["text"];
var _excluded2$1 = ["anchor", "focus"];
function ownKeys$4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$4(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
      ownKeys$4(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$4(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Text2 = {
  equals(text, another) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      loose = false
    } = options;
    function omitText(obj) {
      var rest = _objectWithoutProperties(obj, _excluded$1);
      return rest;
    }
    return isDeepEqual(loose ? omitText(text) : text, loose ? omitText(another) : another);
  },
  isText(value) {
    return isPlainObject(value) && typeof value.text === "string";
  },
  isTextList(value) {
    return Array.isArray(value) && value.every((val) => Text2.isText(val));
  },
  isTextProps(props) {
    return props.text !== void 0;
  },
  matches(text, props) {
    for (var key in props) {
      if (key === "text") {
        continue;
      }
      if (!text.hasOwnProperty(key) || text[key] !== props[key]) {
        return false;
      }
    }
    return true;
  },
  decorations(node, decorations) {
    var leaves = [_objectSpread$4({}, node)];
    for (var dec of decorations) {
      var rest = _objectWithoutProperties(dec, _excluded2$1);
      var [start, end] = Range.edges(dec);
      var next = [];
      var leafEnd = 0;
      var decorationStart = start.offset;
      var decorationEnd = end.offset;
      for (var leaf of leaves) {
        var {
          length
        } = leaf.text;
        var leafStart = leafEnd;
        leafEnd += length;
        if (decorationStart <= leafStart && leafEnd <= decorationEnd) {
          Object.assign(leaf, rest);
          next.push(leaf);
          continue;
        }
        if (decorationStart !== decorationEnd && (decorationStart === leafEnd || decorationEnd === leafStart) || decorationStart > leafEnd || decorationEnd < leafStart || decorationEnd === leafStart && leafStart !== 0) {
          next.push(leaf);
          continue;
        }
        var middle = leaf;
        var before = void 0;
        var after = void 0;
        if (decorationEnd < leafEnd) {
          var off = decorationEnd - leafStart;
          after = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(off)
          });
          middle = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(0, off)
          });
        }
        if (decorationStart > leafStart) {
          var _off = decorationStart - leafStart;
          before = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(0, _off)
          });
          middle = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(_off)
          });
        }
        Object.assign(middle, rest);
        if (before) {
          next.push(before);
        }
        next.push(middle);
        if (after) {
          next.push(after);
        }
      }
      leaves = next;
    }
    return leaves;
  }
};
function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$3(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
      ownKeys$3(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var applyToDraft = (editor, selection, op) => {
  switch (op.type) {
    case "insert_node": {
      var {
        path,
        node
      } = op;
      var parent = Node.parent(editor, path);
      var index = path[path.length - 1];
      if (index > parent.children.length) {
        throw new Error('Cannot apply an "insert_node" operation at path ['.concat(path, "] because the destination is past the end of the node."));
      }
      parent.children.splice(index, 0, node);
      if (selection) {
        for (var [point, key] of Range.points(selection)) {
          selection[key] = Point.transform(point, op);
        }
      }
      break;
    }
    case "insert_text": {
      var {
        path: _path,
        offset,
        text
      } = op;
      if (text.length === 0)
        break;
      var _node = Node.leaf(editor, _path);
      var before = _node.text.slice(0, offset);
      var after = _node.text.slice(offset);
      _node.text = before + text + after;
      if (selection) {
        for (var [_point, _key] of Range.points(selection)) {
          selection[_key] = Point.transform(_point, op);
        }
      }
      break;
    }
    case "merge_node": {
      var {
        path: _path2
      } = op;
      var _node2 = Node.get(editor, _path2);
      var prevPath = Path.previous(_path2);
      var prev = Node.get(editor, prevPath);
      var _parent = Node.parent(editor, _path2);
      var _index = _path2[_path2.length - 1];
      if (Text2.isText(_node2) && Text2.isText(prev)) {
        prev.text += _node2.text;
      } else if (!Text2.isText(_node2) && !Text2.isText(prev)) {
        prev.children.push(..._node2.children);
      } else {
        throw new Error('Cannot apply a "merge_node" operation at path ['.concat(_path2, "] to nodes of different interfaces: ").concat(Scrubber.stringify(_node2), " ").concat(Scrubber.stringify(prev)));
      }
      _parent.children.splice(_index, 1);
      if (selection) {
        for (var [_point2, _key2] of Range.points(selection)) {
          selection[_key2] = Point.transform(_point2, op);
        }
      }
      break;
    }
    case "move_node": {
      var {
        path: _path3,
        newPath
      } = op;
      if (Path.isAncestor(_path3, newPath)) {
        throw new Error("Cannot move a path [".concat(_path3, "] to new path [").concat(newPath, "] because the destination is inside itself."));
      }
      var _node3 = Node.get(editor, _path3);
      var _parent2 = Node.parent(editor, _path3);
      var _index2 = _path3[_path3.length - 1];
      _parent2.children.splice(_index2, 1);
      var truePath = Path.transform(_path3, op);
      var newParent = Node.get(editor, Path.parent(truePath));
      var newIndex = truePath[truePath.length - 1];
      newParent.children.splice(newIndex, 0, _node3);
      if (selection) {
        for (var [_point3, _key3] of Range.points(selection)) {
          selection[_key3] = Point.transform(_point3, op);
        }
      }
      break;
    }
    case "remove_node": {
      var {
        path: _path4
      } = op;
      var _index3 = _path4[_path4.length - 1];
      var _parent3 = Node.parent(editor, _path4);
      _parent3.children.splice(_index3, 1);
      if (selection) {
        for (var [_point4, _key4] of Range.points(selection)) {
          var result = Point.transform(_point4, op);
          if (selection != null && result != null) {
            selection[_key4] = result;
          } else {
            var _prev = void 0;
            var next = void 0;
            for (var [n4, p2] of Node.texts(editor)) {
              if (Path.compare(p2, _path4) === -1) {
                _prev = [n4, p2];
              } else {
                next = [n4, p2];
                break;
              }
            }
            var preferNext = false;
            if (_prev && next) {
              if (Path.equals(next[1], _path4)) {
                preferNext = !Path.hasPrevious(next[1]);
              } else {
                preferNext = Path.common(_prev[1], _path4).length < Path.common(next[1], _path4).length;
              }
            }
            if (_prev && !preferNext) {
              _point4.path = _prev[1];
              _point4.offset = _prev[0].text.length;
            } else if (next) {
              _point4.path = next[1];
              _point4.offset = 0;
            } else {
              selection = null;
            }
          }
        }
      }
      break;
    }
    case "remove_text": {
      var {
        path: _path5,
        offset: _offset,
        text: _text
      } = op;
      if (_text.length === 0)
        break;
      var _node4 = Node.leaf(editor, _path5);
      var _before = _node4.text.slice(0, _offset);
      var _after = _node4.text.slice(_offset + _text.length);
      _node4.text = _before + _after;
      if (selection) {
        for (var [_point5, _key5] of Range.points(selection)) {
          selection[_key5] = Point.transform(_point5, op);
        }
      }
      break;
    }
    case "set_node": {
      var {
        path: _path6,
        properties,
        newProperties
      } = op;
      if (_path6.length === 0) {
        throw new Error("Cannot set properties on the root node!");
      }
      var _node5 = Node.get(editor, _path6);
      for (var _key6 in newProperties) {
        if (_key6 === "children" || _key6 === "text") {
          throw new Error('Cannot set the "'.concat(_key6, '" property of nodes!'));
        }
        var value = newProperties[_key6];
        if (value == null) {
          delete _node5[_key6];
        } else {
          _node5[_key6] = value;
        }
      }
      for (var _key7 in properties) {
        if (!newProperties.hasOwnProperty(_key7)) {
          delete _node5[_key7];
        }
      }
      break;
    }
    case "set_selection": {
      var {
        newProperties: _newProperties
      } = op;
      if (_newProperties == null) {
        selection = _newProperties;
      } else {
        if (selection == null) {
          if (!Range.isRange(_newProperties)) {
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(Scrubber.stringify(_newProperties), " when there is no current selection."));
          }
          selection = _objectSpread$3({}, _newProperties);
        }
        for (var _key8 in _newProperties) {
          var _value = _newProperties[_key8];
          if (_value == null) {
            if (_key8 === "anchor" || _key8 === "focus") {
              throw new Error('Cannot remove the "'.concat(_key8, '" selection property'));
            }
            delete selection[_key8];
          } else {
            selection[_key8] = _value;
          }
        }
      }
      break;
    }
    case "split_node": {
      var {
        path: _path7,
        position,
        properties: _properties
      } = op;
      if (_path7.length === 0) {
        throw new Error('Cannot apply a "split_node" operation at path ['.concat(_path7, "] because the root node cannot be split."));
      }
      var _node6 = Node.get(editor, _path7);
      var _parent4 = Node.parent(editor, _path7);
      var _index4 = _path7[_path7.length - 1];
      var newNode;
      if (Text2.isText(_node6)) {
        var _before2 = _node6.text.slice(0, position);
        var _after2 = _node6.text.slice(position);
        _node6.text = _before2;
        newNode = _objectSpread$3(_objectSpread$3({}, _properties), {}, {
          text: _after2
        });
      } else {
        var _before3 = _node6.children.slice(0, position);
        var _after3 = _node6.children.slice(position);
        _node6.children = _before3;
        newNode = _objectSpread$3(_objectSpread$3({}, _properties), {}, {
          children: _after3
        });
      }
      _parent4.children.splice(_index4 + 1, 0, newNode);
      if (selection) {
        for (var [_point6, _key9] of Range.points(selection)) {
          selection[_key9] = Point.transform(_point6, op);
        }
      }
      break;
    }
  }
  return selection;
};
var GeneralTransforms = {
  transform(editor, op) {
    editor.children = ln(editor.children);
    var selection = editor.selection && ln(editor.selection);
    try {
      selection = applyToDraft(editor, selection, op);
    } finally {
      editor.children = dn(editor.children);
      if (selection) {
        editor.selection = r(selection) ? dn(selection) : selection;
      } else {
        editor.selection = null;
      }
    }
  }
};
var _excluded = ["text"];
var _excluded2 = ["children"];
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$2(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
      ownKeys$2(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var NodeTransforms = {
  insertNodes(editor, nodes) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false,
        mode = "lowest"
      } = options;
      var {
        at,
        match,
        select
      } = options;
      if (Node.isNode(nodes)) {
        nodes = [nodes];
      }
      if (nodes.length === 0) {
        return;
      }
      var [node] = nodes;
      if (!at) {
        if (editor.selection) {
          at = editor.selection;
        } else if (editor.children.length > 0) {
          at = Editor.end(editor, []);
        } else {
          at = [0];
        }
        select = true;
      }
      if (select == null) {
        select = false;
      }
      if (Range.isRange(at)) {
        if (!hanging) {
          at = Editor.unhangRange(editor, at, {
            voids
          });
        }
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end] = Range.edges(at);
          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();
        }
      }
      if (Point.isPoint(at)) {
        if (match == null) {
          if (Text2.isText(node)) {
            match = (n4) => Text2.isText(n4);
          } else if (editor.isInline(node)) {
            match = (n4) => Text2.isText(n4) || Editor.isInline(editor, n4);
          } else {
            match = (n4) => Editor.isBlock(editor, n4);
          }
        }
        var [entry] = Editor.nodes(editor, {
          at: at.path,
          match,
          mode,
          voids
        });
        if (entry) {
          var [, _matchPath] = entry;
          var pathRef = Editor.pathRef(editor, _matchPath);
          var isAtEnd = Editor.isEnd(editor, at, _matchPath);
          Transforms.splitNodes(editor, {
            at,
            match,
            mode,
            voids
          });
          var path = pathRef.unref();
          at = isAtEnd ? Path.next(path) : path;
        } else {
          return;
        }
      }
      var parentPath = Path.parent(at);
      var index = at[at.length - 1];
      if (!voids && Editor.void(editor, {
        at: parentPath
      })) {
        return;
      }
      for (var _node of nodes) {
        var _path = parentPath.concat(index);
        index++;
        editor.apply({
          type: "insert_node",
          path: _path,
          node: _node
        });
        at = Path.next(at);
      }
      at = Path.previous(at);
      if (select) {
        var point = Editor.end(editor, at);
        if (point) {
          Transforms.select(editor, point);
        }
      }
    });
  },
  liftNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        at = editor.selection,
        mode = "lowest",
        voids = false
      } = options;
      var {
        match
      } = options;
      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : (n4) => Editor.isBlock(editor, n4);
      }
      if (!at) {
        return;
      }
      var matches = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(matches, (_ref) => {
        var [, p2] = _ref;
        return Editor.pathRef(editor, p2);
      });
      for (var pathRef of pathRefs) {
        var path = pathRef.unref();
        if (path.length < 2) {
          throw new Error("Cannot lift node at a path [".concat(path, "] because it has a depth of less than `2`."));
        }
        var parentNodeEntry = Editor.node(editor, Path.parent(path));
        var [parent, parentPath] = parentNodeEntry;
        var index = path[path.length - 1];
        var {
          length
        } = parent.children;
        if (length === 1) {
          var toPath = Path.next(parentPath);
          Transforms.moveNodes(editor, {
            at: path,
            to: toPath,
            voids
          });
          Transforms.removeNodes(editor, {
            at: parentPath,
            voids
          });
        } else if (index === 0) {
          Transforms.moveNodes(editor, {
            at: path,
            to: parentPath,
            voids
          });
        } else if (index === length - 1) {
          var _toPath = Path.next(parentPath);
          Transforms.moveNodes(editor, {
            at: path,
            to: _toPath,
            voids
          });
        } else {
          var splitPath = Path.next(path);
          var _toPath2 = Path.next(parentPath);
          Transforms.splitNodes(editor, {
            at: splitPath,
            voids
          });
          Transforms.moveNodes(editor, {
            at: path,
            to: _toPath2,
            voids
          });
        }
      }
    });
  },
  mergeNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        match,
        at = editor.selection
      } = options;
      var {
        hanging = false,
        voids = false,
        mode = "lowest"
      } = options;
      if (!at) {
        return;
      }
      if (match == null) {
        if (Path.isPath(at)) {
          var [parent] = Editor.parent(editor, at);
          match = (n4) => parent.children.includes(n4);
        } else {
          match = (n4) => Editor.isBlock(editor, n4);
        }
      }
      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at, {
          voids
        });
      }
      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end] = Range.edges(at);
          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();
          if (options.at == null) {
            Transforms.select(editor, at);
          }
        }
      }
      var [current] = Editor.nodes(editor, {
        at,
        match,
        voids,
        mode
      });
      var prev = Editor.previous(editor, {
        at,
        match,
        voids,
        mode
      });
      if (!current || !prev) {
        return;
      }
      var [node, path] = current;
      var [prevNode, prevPath] = prev;
      if (path.length === 0 || prevPath.length === 0) {
        return;
      }
      var newPath = Path.next(prevPath);
      var commonPath = Path.common(path, prevPath);
      var isPreviousSibling = Path.isSibling(path, prevPath);
      var levels = Array.from(Editor.levels(editor, {
        at: path
      }), (_ref2) => {
        var [n4] = _ref2;
        return n4;
      }).slice(commonPath.length).slice(0, -1);
      var emptyAncestor = Editor.above(editor, {
        at: path,
        mode: "highest",
        match: (n4) => levels.includes(n4) && hasSingleChildNest(editor, n4)
      });
      var emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1]);
      var properties;
      var position;
      if (Text2.isText(node) && Text2.isText(prevNode)) {
        var rest = _objectWithoutProperties(node, _excluded);
        position = prevNode.text.length;
        properties = rest;
      } else if (Element.isElement(node) && Element.isElement(prevNode)) {
        var rest = _objectWithoutProperties(node, _excluded2);
        position = prevNode.children.length;
        properties = rest;
      } else {
        throw new Error("Cannot merge the node at path [".concat(path, "] with the previous sibling because it is not the same kind: ").concat(Scrubber.stringify(node), " ").concat(Scrubber.stringify(prevNode)));
      }
      if (!isPreviousSibling) {
        Transforms.moveNodes(editor, {
          at: path,
          to: newPath,
          voids
        });
      }
      if (emptyRef) {
        Transforms.removeNodes(editor, {
          at: emptyRef.current,
          voids
        });
      }
      if (Element.isElement(prevNode) && Editor.isEmpty(editor, prevNode) || Text2.isText(prevNode) && prevNode.text === "" && prevPath[prevPath.length - 1] !== 0) {
        Transforms.removeNodes(editor, {
          at: prevPath,
          voids
        });
      } else {
        editor.apply({
          type: "merge_node",
          path: newPath,
          position,
          properties
        });
      }
      if (emptyRef) {
        emptyRef.unref();
      }
    });
  },
  moveNodes(editor, options) {
    Editor.withoutNormalizing(editor, () => {
      var {
        to,
        at = editor.selection,
        mode = "lowest",
        voids = false
      } = options;
      var {
        match
      } = options;
      if (!at) {
        return;
      }
      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : (n4) => Editor.isBlock(editor, n4);
      }
      var toRef = Editor.pathRef(editor, to);
      var targets = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(targets, (_ref3) => {
        var [, p2] = _ref3;
        return Editor.pathRef(editor, p2);
      });
      for (var pathRef of pathRefs) {
        var path = pathRef.unref();
        var newPath = toRef.current;
        if (path.length !== 0) {
          editor.apply({
            type: "move_node",
            path,
            newPath
          });
        }
        if (toRef.current && Path.isSibling(newPath, path) && Path.isAfter(newPath, path)) {
          toRef.current = Path.next(toRef.current);
        }
      }
      toRef.unref();
    });
  },
  removeNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false,
        mode = "lowest"
      } = options;
      var {
        at = editor.selection,
        match
      } = options;
      if (!at) {
        return;
      }
      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : (n4) => Editor.isBlock(editor, n4);
      }
      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at, {
          voids
        });
      }
      var depths = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(depths, (_ref4) => {
        var [, p2] = _ref4;
        return Editor.pathRef(editor, p2);
      });
      for (var pathRef of pathRefs) {
        var path = pathRef.unref();
        if (path) {
          var [node] = Editor.node(editor, path);
          editor.apply({
            type: "remove_node",
            path,
            node
          });
        }
      }
    });
  },
  setNodes(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        match,
        at = editor.selection,
        compare,
        merge
      } = options;
      var {
        hanging = false,
        mode = "lowest",
        split = false,
        voids = false
      } = options;
      if (!at) {
        return;
      }
      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : (n4) => Editor.isBlock(editor, n4);
      }
      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at, {
          voids
        });
      }
      if (split && Range.isRange(at)) {
        if (Range.isCollapsed(at) && Editor.leaf(editor, at.anchor)[0].text.length > 0) {
          return;
        }
        var rangeRef = Editor.rangeRef(editor, at, {
          affinity: "inward"
        });
        var [start, end] = Range.edges(at);
        var splitMode = mode === "lowest" ? "lowest" : "highest";
        var endAtEndOfNode = Editor.isEnd(editor, end, end.path);
        Transforms.splitNodes(editor, {
          at: end,
          match,
          mode: splitMode,
          voids,
          always: !endAtEndOfNode
        });
        var startAtStartOfNode = Editor.isStart(editor, start, start.path);
        Transforms.splitNodes(editor, {
          at: start,
          match,
          mode: splitMode,
          voids,
          always: !startAtStartOfNode
        });
        at = rangeRef.unref();
        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }
      if (!compare) {
        compare = (prop, nodeProp) => prop !== nodeProp;
      }
      for (var [node, path] of Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      })) {
        var properties = {};
        var newProperties = {};
        if (path.length === 0) {
          continue;
        }
        var hasChanges = false;
        for (var k2 in props) {
          if (k2 === "children" || k2 === "text") {
            continue;
          }
          if (compare(props[k2], node[k2])) {
            hasChanges = true;
            if (node.hasOwnProperty(k2))
              properties[k2] = node[k2];
            if (merge) {
              if (props[k2] != null)
                newProperties[k2] = merge(node[k2], props[k2]);
            } else {
              if (props[k2] != null)
                newProperties[k2] = props[k2];
            }
          }
        }
        if (hasChanges) {
          editor.apply({
            type: "set_node",
            path,
            properties,
            newProperties
          });
        }
      }
    });
  },
  splitNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = "lowest",
        voids = false
      } = options;
      var {
        match,
        at = editor.selection,
        height = 0,
        always = false
      } = options;
      if (match == null) {
        match = (n4) => Editor.isBlock(editor, n4);
      }
      if (Range.isRange(at)) {
        at = deleteRange(editor, at);
      }
      if (Path.isPath(at)) {
        var path = at;
        var point = Editor.point(editor, path);
        var [parent] = Editor.parent(editor, path);
        match = (n4) => n4 === parent;
        height = point.path.length - path.length + 1;
        at = point;
        always = true;
      }
      if (!at) {
        return;
      }
      var beforeRef = Editor.pointRef(editor, at, {
        affinity: "backward"
      });
      var afterRef;
      try {
        var [highest] = Editor.nodes(editor, {
          at,
          match,
          mode,
          voids
        });
        if (!highest) {
          return;
        }
        var voidMatch = Editor.void(editor, {
          at,
          mode: "highest"
        });
        var nudge = 0;
        if (!voids && voidMatch) {
          var [voidNode, voidPath] = voidMatch;
          if (Element.isElement(voidNode) && editor.isInline(voidNode)) {
            var after = Editor.after(editor, voidPath);
            if (!after) {
              var text = {
                text: ""
              };
              var afterPath = Path.next(voidPath);
              Transforms.insertNodes(editor, text, {
                at: afterPath,
                voids
              });
              after = Editor.point(editor, afterPath);
            }
            at = after;
            always = true;
          }
          var siblingHeight = at.path.length - voidPath.length;
          height = siblingHeight + 1;
          always = true;
        }
        afterRef = Editor.pointRef(editor, at);
        var depth = at.path.length - height;
        var [, highestPath] = highest;
        var lowestPath = at.path.slice(0, depth);
        var position = height === 0 ? at.offset : at.path[depth] + nudge;
        for (var [node, _path2] of Editor.levels(editor, {
          at: lowestPath,
          reverse: true,
          voids
        })) {
          var split = false;
          if (_path2.length < highestPath.length || _path2.length === 0 || !voids && Editor.isVoid(editor, node)) {
            break;
          }
          var _point = beforeRef.current;
          var isEnd = Editor.isEnd(editor, _point, _path2);
          if (always || !beforeRef || !Editor.isEdge(editor, _point, _path2)) {
            split = true;
            var properties = Node.extractProps(node);
            editor.apply({
              type: "split_node",
              path: _path2,
              position,
              properties
            });
          }
          position = _path2[_path2.length - 1] + (split || isEnd ? 1 : 0);
        }
        if (options.at == null) {
          var _point2 = afterRef.current || Editor.end(editor, []);
          Transforms.select(editor, _point2);
        }
      } finally {
        var _afterRef;
        beforeRef.unref();
        (_afterRef = afterRef) === null || _afterRef === void 0 ? void 0 : _afterRef.unref();
      }
    });
  },
  unsetNodes(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!Array.isArray(props)) {
      props = [props];
    }
    var obj = {};
    for (var key of props) {
      obj[key] = null;
    }
    Transforms.setNodes(editor, obj, options);
  },
  unwrapNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = "lowest",
        split = false,
        voids = false
      } = options;
      var {
        at = editor.selection,
        match
      } = options;
      if (!at) {
        return;
      }
      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : (n4) => Editor.isBlock(editor, n4);
      }
      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }
      var rangeRef = Range.isRange(at) ? Editor.rangeRef(editor, at) : null;
      var matches = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(
        matches,
        (_ref5) => {
          var [, p2] = _ref5;
          return Editor.pathRef(editor, p2);
        }
      ).reverse();
      var _loop = function _loop2(pathRef2) {
        var path = pathRef2.unref();
        var [node] = Editor.node(editor, path);
        var range = Editor.range(editor, path);
        if (split && rangeRef) {
          range = Range.intersection(rangeRef.current, range);
        }
        Transforms.liftNodes(editor, {
          at: range,
          match: (n4) => Element.isAncestor(node) && node.children.includes(n4),
          voids
        });
      };
      for (var pathRef of pathRefs) {
        _loop(pathRef);
      }
      if (rangeRef) {
        rangeRef.unref();
      }
    });
  },
  wrapNodes(editor, element) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = "lowest",
        split = false,
        voids = false
      } = options;
      var {
        match,
        at = editor.selection
      } = options;
      if (!at) {
        return;
      }
      if (match == null) {
        if (Path.isPath(at)) {
          match = matchPath(editor, at);
        } else if (editor.isInline(element)) {
          match = (n4) => Editor.isInline(editor, n4) || Text2.isText(n4);
        } else {
          match = (n4) => Editor.isBlock(editor, n4);
        }
      }
      if (split && Range.isRange(at)) {
        var [start, end] = Range.edges(at);
        var rangeRef = Editor.rangeRef(editor, at, {
          affinity: "inward"
        });
        Transforms.splitNodes(editor, {
          at: end,
          match,
          voids
        });
        Transforms.splitNodes(editor, {
          at: start,
          match,
          voids
        });
        at = rangeRef.unref();
        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }
      var roots = Array.from(Editor.nodes(editor, {
        at,
        match: editor.isInline(element) ? (n4) => Editor.isBlock(editor, n4) : (n4) => Editor.isEditor(n4),
        mode: "lowest",
        voids
      }));
      for (var [, rootPath] of roots) {
        var a2 = Range.isRange(at) ? Range.intersection(at, Editor.range(editor, rootPath)) : at;
        if (!a2) {
          continue;
        }
        var matches = Array.from(Editor.nodes(editor, {
          at: a2,
          match,
          mode,
          voids
        }));
        if (matches.length > 0) {
          var _ret = function() {
            var [first] = matches;
            var last = matches[matches.length - 1];
            var [, firstPath] = first;
            var [, lastPath] = last;
            if (firstPath.length === 0 && lastPath.length === 0) {
              return "continue";
            }
            var commonPath = Path.equals(firstPath, lastPath) ? Path.parent(firstPath) : Path.common(firstPath, lastPath);
            var range = Editor.range(editor, firstPath, lastPath);
            var commonNodeEntry = Editor.node(editor, commonPath);
            var [commonNode] = commonNodeEntry;
            var depth = commonPath.length + 1;
            var wrapperPath = Path.next(lastPath.slice(0, depth));
            var wrapper = _objectSpread$2(_objectSpread$2({}, element), {}, {
              children: []
            });
            Transforms.insertNodes(editor, wrapper, {
              at: wrapperPath,
              voids
            });
            Transforms.moveNodes(editor, {
              at: range,
              match: (n4) => Element.isAncestor(commonNode) && commonNode.children.includes(n4),
              to: wrapperPath.concat(0),
              voids
            });
          }();
          if (_ret === "continue")
            continue;
        }
      }
    });
  }
};
var hasSingleChildNest = (editor, node) => {
  if (Element.isElement(node)) {
    var element = node;
    if (Editor.isVoid(editor, node)) {
      return true;
    } else if (element.children.length === 1) {
      return hasSingleChildNest(editor, element.children[0]);
    } else {
      return false;
    }
  } else if (Editor.isEditor(node)) {
    return false;
  } else {
    return true;
  }
};
var deleteRange = (editor, range) => {
  if (Range.isCollapsed(range)) {
    return range.anchor;
  } else {
    var [, end] = Range.edges(range);
    var pointRef = Editor.pointRef(editor, end);
    Transforms.delete(editor, {
      at: range
    });
    return pointRef.unref();
  }
};
var matchPath = (editor, path) => {
  var [node] = Editor.node(editor, path);
  return (n4) => n4 === node;
};
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var SelectionTransforms = {
  collapse(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      edge = "anchor"
    } = options;
    var {
      selection
    } = editor;
    if (!selection) {
      return;
    } else if (edge === "anchor") {
      Transforms.select(editor, selection.anchor);
    } else if (edge === "focus") {
      Transforms.select(editor, selection.focus);
    } else if (edge === "start") {
      var [start] = Range.edges(selection);
      Transforms.select(editor, start);
    } else if (edge === "end") {
      var [, end] = Range.edges(selection);
      Transforms.select(editor, end);
    }
  },
  deselect(editor) {
    var {
      selection
    } = editor;
    if (selection) {
      editor.apply({
        type: "set_selection",
        properties: selection,
        newProperties: null
      });
    }
  },
  move(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      selection
    } = editor;
    var {
      distance = 1,
      unit = "character",
      reverse = false
    } = options;
    var {
      edge = null
    } = options;
    if (!selection) {
      return;
    }
    if (edge === "start") {
      edge = Range.isBackward(selection) ? "focus" : "anchor";
    }
    if (edge === "end") {
      edge = Range.isBackward(selection) ? "anchor" : "focus";
    }
    var {
      anchor,
      focus
    } = selection;
    var opts = {
      distance,
      unit
    };
    var props = {};
    if (edge == null || edge === "anchor") {
      var point = reverse ? Editor.before(editor, anchor, opts) : Editor.after(editor, anchor, opts);
      if (point) {
        props.anchor = point;
      }
    }
    if (edge == null || edge === "focus") {
      var _point = reverse ? Editor.before(editor, focus, opts) : Editor.after(editor, focus, opts);
      if (_point) {
        props.focus = _point;
      }
    }
    Transforms.setSelection(editor, props);
  },
  select(editor, target) {
    var {
      selection
    } = editor;
    target = Editor.range(editor, target);
    if (selection) {
      Transforms.setSelection(editor, target);
      return;
    }
    if (!Range.isRange(target)) {
      throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(Scrubber.stringify(target)));
    }
    editor.apply({
      type: "set_selection",
      properties: selection,
      newProperties: target
    });
  },
  setPoint(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      selection
    } = editor;
    var {
      edge = "both"
    } = options;
    if (!selection) {
      return;
    }
    if (edge === "start") {
      edge = Range.isBackward(selection) ? "focus" : "anchor";
    }
    if (edge === "end") {
      edge = Range.isBackward(selection) ? "anchor" : "focus";
    }
    var {
      anchor,
      focus
    } = selection;
    var point = edge === "anchor" ? anchor : focus;
    Transforms.setSelection(editor, {
      [edge === "anchor" ? "anchor" : "focus"]: _objectSpread$1(_objectSpread$1({}, point), props)
    });
  },
  setSelection(editor, props) {
    var {
      selection
    } = editor;
    var oldProps = {};
    var newProps = {};
    if (!selection) {
      return;
    }
    for (var k2 in props) {
      if (k2 === "anchor" && props.anchor != null && !Point.equals(props.anchor, selection.anchor) || k2 === "focus" && props.focus != null && !Point.equals(props.focus, selection.focus) || k2 !== "anchor" && k2 !== "focus" && props[k2] !== selection[k2]) {
        oldProps[k2] = selection[k2];
        newProps[k2] = props[k2];
      }
    }
    if (Object.keys(oldProps).length > 0) {
      editor.apply({
        type: "set_selection",
        properties: oldProps,
        newProperties: newProps
      });
    }
  }
};
var TextTransforms = {
  delete(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        reverse = false,
        unit = "character",
        distance = 1,
        voids = false
      } = options;
      var {
        at = editor.selection,
        hanging = false
      } = options;
      if (!at) {
        return;
      }
      var isCollapsed = false;
      if (Range.isRange(at) && Range.isCollapsed(at)) {
        isCollapsed = true;
        at = at.anchor;
      }
      if (Point.isPoint(at)) {
        var furthestVoid = Editor.void(editor, {
          at,
          mode: "highest"
        });
        if (!voids && furthestVoid) {
          var [, voidPath] = furthestVoid;
          at = voidPath;
        } else {
          var opts = {
            unit,
            distance
          };
          var target = reverse ? Editor.before(editor, at, opts) || Editor.start(editor, []) : Editor.after(editor, at, opts) || Editor.end(editor, []);
          at = {
            anchor: at,
            focus: target
          };
          hanging = true;
        }
      }
      if (Path.isPath(at)) {
        Transforms.removeNodes(editor, {
          at,
          voids
        });
        return;
      }
      if (Range.isCollapsed(at)) {
        return;
      }
      if (!hanging) {
        var [, _end] = Range.edges(at);
        var endOfDoc = Editor.end(editor, []);
        if (!Point.equals(_end, endOfDoc)) {
          at = Editor.unhangRange(editor, at, {
            voids
          });
        }
      }
      var [start, end] = Range.edges(at);
      var startBlock = Editor.above(editor, {
        match: (n4) => Editor.isBlock(editor, n4),
        at: start,
        voids
      });
      var endBlock = Editor.above(editor, {
        match: (n4) => Editor.isBlock(editor, n4),
        at: end,
        voids
      });
      var isAcrossBlocks = startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1]);
      var isSingleText = Path.equals(start.path, end.path);
      var startVoid = voids ? null : Editor.void(editor, {
        at: start,
        mode: "highest"
      });
      var endVoid = voids ? null : Editor.void(editor, {
        at: end,
        mode: "highest"
      });
      if (startVoid) {
        var before = Editor.before(editor, start);
        if (before && startBlock && Path.isAncestor(startBlock[1], before.path)) {
          start = before;
        }
      }
      if (endVoid) {
        var after = Editor.after(editor, end);
        if (after && endBlock && Path.isAncestor(endBlock[1], after.path)) {
          end = after;
        }
      }
      var matches = [];
      var lastPath;
      for (var entry of Editor.nodes(editor, {
        at,
        voids
      })) {
        var [node, path] = entry;
        if (lastPath && Path.compare(path, lastPath) === 0) {
          continue;
        }
        if (!voids && Editor.isVoid(editor, node) || !Path.isCommon(path, start.path) && !Path.isCommon(path, end.path)) {
          matches.push(entry);
          lastPath = path;
        }
      }
      var pathRefs = Array.from(matches, (_ref) => {
        var [, p2] = _ref;
        return Editor.pathRef(editor, p2);
      });
      var startRef = Editor.pointRef(editor, start);
      var endRef = Editor.pointRef(editor, end);
      var removedText = "";
      if (!isSingleText && !startVoid) {
        var _point = startRef.current;
        var [_node] = Editor.leaf(editor, _point);
        var {
          path: _path
        } = _point;
        var {
          offset
        } = start;
        var text = _node.text.slice(offset);
        if (text.length > 0) {
          editor.apply({
            type: "remove_text",
            path: _path,
            offset,
            text
          });
          removedText = text;
        }
      }
      pathRefs.reverse().map((r3) => r3.unref()).filter((r3) => r3 !== null).forEach((p2) => Transforms.removeNodes(editor, {
        at: p2,
        voids
      }));
      if (!endVoid) {
        var _point2 = endRef.current;
        var [_node2] = Editor.leaf(editor, _point2);
        var {
          path: _path2
        } = _point2;
        var _offset = isSingleText ? start.offset : 0;
        var _text = _node2.text.slice(_offset, end.offset);
        if (_text.length > 0) {
          editor.apply({
            type: "remove_text",
            path: _path2,
            offset: _offset,
            text: _text
          });
          removedText = _text;
        }
      }
      if (!isSingleText && isAcrossBlocks && endRef.current && startRef.current) {
        Transforms.mergeNodes(editor, {
          at: endRef.current,
          hanging: true,
          voids
        });
      }
      if (isCollapsed && reverse && unit === "character" && removedText.length > 1 && removedText.match(/[\u0E00-\u0E7F]+/)) {
        Transforms.insertText(editor, removedText.slice(0, removedText.length - distance));
      }
      var startUnref = startRef.unref();
      var endUnref = endRef.unref();
      var point = reverse ? startUnref || endUnref : endUnref || startUnref;
      if (options.at == null && point) {
        Transforms.select(editor, point);
      }
    });
  },
  insertFragment(editor, fragment) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false
      } = options;
      var {
        at = editor.selection
      } = options;
      if (!fragment.length) {
        return;
      }
      if (!at) {
        return;
      } else if (Range.isRange(at)) {
        if (!hanging) {
          at = Editor.unhangRange(editor, at, {
            voids
          });
        }
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end] = Range.edges(at);
          if (!voids && Editor.void(editor, {
            at: end
          })) {
            return;
          }
          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();
        }
      } else if (Path.isPath(at)) {
        at = Editor.start(editor, at);
      }
      if (!voids && Editor.void(editor, {
        at
      })) {
        return;
      }
      var inlineElementMatch = Editor.above(editor, {
        at,
        match: (n4) => Editor.isInline(editor, n4),
        mode: "highest",
        voids
      });
      if (inlineElementMatch) {
        var [, _inlinePath] = inlineElementMatch;
        if (Editor.isEnd(editor, at, _inlinePath)) {
          var after = Editor.after(editor, _inlinePath);
          at = after;
        } else if (Editor.isStart(editor, at, _inlinePath)) {
          var before = Editor.before(editor, _inlinePath);
          at = before;
        }
      }
      var blockMatch = Editor.above(editor, {
        match: (n4) => Editor.isBlock(editor, n4),
        at,
        voids
      });
      var [, blockPath] = blockMatch;
      var isBlockStart = Editor.isStart(editor, at, blockPath);
      var isBlockEnd = Editor.isEnd(editor, at, blockPath);
      var isBlockEmpty = isBlockStart && isBlockEnd;
      var mergeStart = !isBlockStart || isBlockStart && isBlockEnd;
      var mergeEnd = !isBlockEnd;
      var [, firstPath] = Node.first({
        children: fragment
      }, []);
      var [, lastPath] = Node.last({
        children: fragment
      }, []);
      var matches = [];
      var matcher = (_ref2) => {
        var [n4, p2] = _ref2;
        var isRoot = p2.length === 0;
        if (isRoot) {
          return false;
        }
        if (isBlockEmpty) {
          return true;
        }
        if (mergeStart && Path.isAncestor(p2, firstPath) && Element.isElement(n4) && !editor.isVoid(n4) && !editor.isInline(n4)) {
          return false;
        }
        if (mergeEnd && Path.isAncestor(p2, lastPath) && Element.isElement(n4) && !editor.isVoid(n4) && !editor.isInline(n4)) {
          return false;
        }
        return true;
      };
      for (var entry of Node.nodes({
        children: fragment
      }, {
        pass: matcher
      })) {
        if (matcher(entry)) {
          matches.push(entry);
        }
      }
      var starts = [];
      var middles = [];
      var ends = [];
      var starting = true;
      var hasBlocks = false;
      for (var [node] of matches) {
        if (Element.isElement(node) && !editor.isInline(node)) {
          starting = false;
          hasBlocks = true;
          middles.push(node);
        } else if (starting) {
          starts.push(node);
        } else {
          ends.push(node);
        }
      }
      var [inlineMatch] = Editor.nodes(editor, {
        at,
        match: (n4) => Text2.isText(n4) || Editor.isInline(editor, n4),
        mode: "highest",
        voids
      });
      var [, inlinePath] = inlineMatch;
      var isInlineStart = Editor.isStart(editor, at, inlinePath);
      var isInlineEnd = Editor.isEnd(editor, at, inlinePath);
      var middleRef = Editor.pathRef(editor, isBlockEnd && !ends.length ? Path.next(blockPath) : blockPath);
      var endRef = Editor.pathRef(editor, isInlineEnd ? Path.next(inlinePath) : inlinePath);
      Transforms.splitNodes(editor, {
        at,
        match: (n4) => hasBlocks ? Editor.isBlock(editor, n4) : Text2.isText(n4) || Editor.isInline(editor, n4),
        mode: hasBlocks ? "lowest" : "highest",
        always: hasBlocks && (!isBlockStart || starts.length > 0) && (!isBlockEnd || ends.length > 0),
        voids
      });
      var startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
      Transforms.insertNodes(editor, starts, {
        at: startRef.current,
        match: (n4) => Text2.isText(n4) || Editor.isInline(editor, n4),
        mode: "highest",
        voids
      });
      if (isBlockEmpty && !starts.length && middles.length && !ends.length) {
        Transforms.delete(editor, {
          at: blockPath,
          voids
        });
      }
      Transforms.insertNodes(editor, middles, {
        at: middleRef.current,
        match: (n4) => Editor.isBlock(editor, n4),
        mode: "lowest",
        voids
      });
      Transforms.insertNodes(editor, ends, {
        at: endRef.current,
        match: (n4) => Text2.isText(n4) || Editor.isInline(editor, n4),
        mode: "highest",
        voids
      });
      if (!options.at) {
        var path;
        if (ends.length > 0 && endRef.current) {
          path = Path.previous(endRef.current);
        } else if (middles.length > 0 && middleRef.current) {
          path = Path.previous(middleRef.current);
        } else if (startRef.current) {
          path = Path.previous(startRef.current);
        }
        if (path) {
          var _end2 = Editor.end(editor, path);
          Transforms.select(editor, _end2);
        }
      }
      startRef.unref();
      middleRef.unref();
      endRef.unref();
    });
  },
  insertText(editor, text) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        voids = false
      } = options;
      var {
        at = editor.selection
      } = options;
      if (!at) {
        return;
      }
      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }
      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var end = Range.end(at);
          if (!voids && Editor.void(editor, {
            at: end
          })) {
            return;
          }
          var start = Range.start(at);
          var startRef = Editor.pointRef(editor, start);
          var endRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at,
            voids
          });
          var startPoint = startRef.unref();
          var endPoint = endRef.unref();
          at = startPoint || endPoint;
          Transforms.setSelection(editor, {
            anchor: at,
            focus: at
          });
        }
      }
      if (!voids && Editor.void(editor, {
        at
      })) {
        return;
      }
      var {
        path,
        offset
      } = at;
      if (text.length > 0)
        editor.apply({
          type: "insert_text",
          path,
          offset,
          text
        });
    });
  }
};
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Transforms = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, GeneralTransforms), NodeTransforms), SelectionTransforms), TextTransforms);

// ../../node_modules/slate-history/node_modules/is-plain-object/dist/is-plain-object.mjs
function isObject2(o2) {
  return Object.prototype.toString.call(o2) === "[object Object]";
}
function isPlainObject2(o2) {
  var ctor, prot;
  if (isObject2(o2) === false)
    return false;
  ctor = o2.constructor;
  if (ctor === void 0)
    return true;
  prot = ctor.prototype;
  if (isObject2(prot) === false)
    return false;
  if (prot.hasOwnProperty("isPrototypeOf") === false) {
    return false;
  }
  return true;
}

// ../../node_modules/slate-history/dist/index.es.js
var History = {
  isHistory(value) {
    return isPlainObject2(value) && Array.isArray(value.redos) && Array.isArray(value.undos) && (value.redos.length === 0 || Operation.isOperationList(value.redos[0].operations)) && (value.undos.length === 0 || Operation.isOperationList(value.undos[0].operations));
  }
};
var SAVING = /* @__PURE__ */ new WeakMap();
var MERGING = /* @__PURE__ */ new WeakMap();
var HistoryEditor = {
  isHistoryEditor(value) {
    return History.isHistory(value.history) && Editor.isEditor(value);
  },
  isMerging(editor) {
    return MERGING.get(editor);
  },
  isSaving(editor) {
    return SAVING.get(editor);
  },
  redo(editor) {
    editor.redo();
  },
  undo(editor) {
    editor.undo();
  },
  withoutMerging(editor, fn2) {
    var prev = HistoryEditor.isMerging(editor);
    MERGING.set(editor, false);
    fn2();
    MERGING.set(editor, prev);
  },
  withoutSaving(editor, fn2) {
    var prev = HistoryEditor.isSaving(editor);
    SAVING.set(editor, false);
    fn2();
    SAVING.set(editor, prev);
  }
};
var withHistory = (editor) => {
  var e2 = editor;
  var {
    apply
  } = e2;
  e2.history = {
    undos: [],
    redos: []
  };
  e2.redo = () => {
    var {
      history
    } = e2;
    var {
      redos
    } = history;
    if (redos.length > 0) {
      var batch = redos[redos.length - 1];
      if (batch.selectionBefore) {
        Transforms.setSelection(e2, batch.selectionBefore);
      }
      HistoryEditor.withoutSaving(e2, () => {
        Editor.withoutNormalizing(e2, () => {
          for (var op of batch.operations) {
            e2.apply(op);
          }
        });
      });
      history.redos.pop();
      history.undos.push(batch);
    }
  };
  e2.undo = () => {
    var {
      history
    } = e2;
    var {
      undos
    } = history;
    if (undos.length > 0) {
      var batch = undos[undos.length - 1];
      HistoryEditor.withoutSaving(e2, () => {
        Editor.withoutNormalizing(e2, () => {
          var inverseOps = batch.operations.map(Operation.inverse).reverse();
          for (var op of inverseOps) {
            e2.apply(op);
          }
          if (batch.selectionBefore) {
            Transforms.setSelection(e2, batch.selectionBefore);
          }
        });
      });
      history.redos.push(batch);
      history.undos.pop();
    }
  };
  e2.apply = (op) => {
    var {
      operations,
      history
    } = e2;
    var {
      undos
    } = history;
    var lastBatch = undos[undos.length - 1];
    var lastOp = lastBatch && lastBatch.operations[lastBatch.operations.length - 1];
    var save = HistoryEditor.isSaving(e2);
    var merge = HistoryEditor.isMerging(e2);
    if (save == null) {
      save = shouldSave(op);
    }
    if (save) {
      if (merge == null) {
        if (lastBatch == null) {
          merge = false;
        } else if (operations.length !== 0) {
          merge = true;
        } else {
          merge = shouldMerge(op, lastOp);
        }
      }
      if (lastBatch && merge) {
        lastBatch.operations.push(op);
      } else {
        var batch = {
          operations: [op],
          selectionBefore: e2.selection
        };
        undos.push(batch);
      }
      while (undos.length > 100) {
        undos.shift();
      }
      history.redos = [];
    }
    apply(op);
  };
  return e2;
};
var shouldMerge = (op, prev) => {
  if (prev && op.type === "insert_text" && prev.type === "insert_text" && op.offset === prev.offset + prev.text.length && Path.equals(op.path, prev.path)) {
    return true;
  }
  if (prev && op.type === "remove_text" && prev.type === "remove_text" && op.offset + op.text.length === prev.offset && Path.equals(op.path, prev.path)) {
    return true;
  }
  return false;
};
var shouldSave = (op, prev) => {
  if (op.type === "set_selection") {
    return false;
  }
  return true;
};

// ../../node_modules/slate-react/dist/index.es.js
var import_direction = __toESM(require_direction());
var import_debounce = __toESM(require_debounce());
var import_throttle = __toESM(require_throttle());
var import_react = __toESM(require_react());

// ../../node_modules/scroll-into-view-if-needed/node_modules/compute-scroll-into-view/dist/index.mjs
function t2(t3) {
  return "object" == typeof t3 && null != t3 && 1 === t3.nodeType;
}
function e(t3, e2) {
  return (!e2 || "hidden" !== t3) && "visible" !== t3 && "clip" !== t3;
}
function n2(t3, n4) {
  if (t3.clientHeight < t3.scrollHeight || t3.clientWidth < t3.scrollWidth) {
    var r3 = getComputedStyle(t3, null);
    return e(r3.overflowY, n4) || e(r3.overflowX, n4) || function(t4) {
      var e2 = function(t5) {
        if (!t5.ownerDocument || !t5.ownerDocument.defaultView)
          return null;
        try {
          return t5.ownerDocument.defaultView.frameElement;
        } catch (t6) {
          return null;
        }
      }(t4);
      return !!e2 && (e2.clientHeight < t4.scrollHeight || e2.clientWidth < t4.scrollWidth);
    }(t3);
  }
  return false;
}
function r2(t3, e2, n4, r3, i3, o2, l2, d2) {
  return o2 < t3 && l2 > e2 || o2 > t3 && l2 < e2 ? 0 : o2 <= t3 && d2 <= n4 || l2 >= e2 && d2 >= n4 ? o2 - t3 - r3 : l2 > e2 && d2 < n4 || o2 < t3 && d2 > n4 ? l2 - e2 + i3 : 0;
}
var i2 = function(e2, i3) {
  var o2 = window, l2 = i3.scrollMode, d2 = i3.block, f2 = i3.inline, h2 = i3.boundary, u2 = i3.skipOverflowHiddenElements, s2 = "function" == typeof h2 ? h2 : function(t3) {
    return t3 !== h2;
  };
  if (!t2(e2))
    throw new TypeError("Invalid target");
  for (var a2, c2, g2 = document.scrollingElement || document.documentElement, p2 = [], m = e2; t2(m) && s2(m); ) {
    if ((m = null == (c2 = (a2 = m).parentElement) ? a2.getRootNode().host || null : c2) === g2) {
      p2.push(m);
      break;
    }
    null != m && m === document.body && n2(m) && !n2(document.documentElement) || null != m && n2(m, u2) && p2.push(m);
  }
  for (var w2 = o2.visualViewport ? o2.visualViewport.width : innerWidth, v2 = o2.visualViewport ? o2.visualViewport.height : innerHeight, W2 = window.scrollX || pageXOffset, H2 = window.scrollY || pageYOffset, b2 = e2.getBoundingClientRect(), y2 = b2.height, E2 = b2.width, M2 = b2.top, V = b2.right, x2 = b2.bottom, I2 = b2.left, C = "start" === d2 || "nearest" === d2 ? M2 : "end" === d2 ? x2 : M2 + y2 / 2, R2 = "center" === f2 ? I2 + E2 / 2 : "end" === f2 ? V : I2, T = [], k2 = 0; k2 < p2.length; k2++) {
    var B2 = p2[k2], D2 = B2.getBoundingClientRect(), O2 = D2.height, X2 = D2.width, Y2 = D2.top, L2 = D2.right, S2 = D2.bottom, j2 = D2.left;
    if ("if-needed" === l2 && M2 >= 0 && I2 >= 0 && x2 <= v2 && V <= w2 && M2 >= Y2 && x2 <= S2 && I2 >= j2 && V <= L2)
      return T;
    var N2 = getComputedStyle(B2), q2 = parseInt(N2.borderLeftWidth, 10), z2 = parseInt(N2.borderTopWidth, 10), A2 = parseInt(N2.borderRightWidth, 10), F = parseInt(N2.borderBottomWidth, 10), G2 = 0, J = 0, K = "offsetWidth" in B2 ? B2.offsetWidth - B2.clientWidth - q2 - A2 : 0, P2 = "offsetHeight" in B2 ? B2.offsetHeight - B2.clientHeight - z2 - F : 0, Q2 = "offsetWidth" in B2 ? 0 === B2.offsetWidth ? 0 : X2 / B2.offsetWidth : 0, U2 = "offsetHeight" in B2 ? 0 === B2.offsetHeight ? 0 : O2 / B2.offsetHeight : 0;
    if (g2 === B2)
      G2 = "start" === d2 ? C : "end" === d2 ? C - v2 : "nearest" === d2 ? r2(H2, H2 + v2, v2, z2, F, H2 + C, H2 + C + y2, y2) : C - v2 / 2, J = "start" === f2 ? R2 : "center" === f2 ? R2 - w2 / 2 : "end" === f2 ? R2 - w2 : r2(W2, W2 + w2, w2, q2, A2, W2 + R2, W2 + R2 + E2, E2), G2 = Math.max(0, G2 + H2), J = Math.max(0, J + W2);
    else {
      G2 = "start" === d2 ? C - Y2 - z2 : "end" === d2 ? C - S2 + F + P2 : "nearest" === d2 ? r2(Y2, S2, O2, z2, F + P2, C, C + y2, y2) : C - (Y2 + O2 / 2) + P2 / 2, J = "start" === f2 ? R2 - j2 - q2 : "center" === f2 ? R2 - (j2 + X2 / 2) + K / 2 : "end" === f2 ? R2 - L2 + A2 + K : r2(j2, L2, X2, q2, A2 + K, R2, R2 + E2, E2);
      var Z2 = B2.scrollLeft, $ = B2.scrollTop;
      C += $ - (G2 = Math.max(0, Math.min($ + G2 / U2, B2.scrollHeight - O2 / U2 + P2))), R2 += Z2 - (J = Math.max(0, Math.min(Z2 + J / Q2, B2.scrollWidth - X2 / Q2 + K)));
    }
    T.push({ el: B2, top: G2, left: J });
  }
  return T;
};

// ../../node_modules/scroll-into-view-if-needed/es/index.js
function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}
function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = "auto";
  }
  var canSmoothScroll = "scrollBehavior" in document.body.style;
  actions.forEach(function(_ref) {
    var el = _ref.el, top = _ref.top, left = _ref.left;
    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top,
        left,
        behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}
function getOptions(options) {
  if (options === false) {
    return {
      block: "end",
      inline: "nearest"
    };
  }
  if (isOptionsObject(options)) {
    return options;
  }
  return {
    block: "start",
    inline: "nearest"
  };
}
function scrollIntoView(target, options) {
  var isTargetAttached = target.isConnected || target.ownerDocument.documentElement.contains(target);
  if (isOptionsObject(options) && typeof options.behavior === "function") {
    return options.behavior(isTargetAttached ? i2(target, options) : []);
  }
  if (!isTargetAttached) {
    return;
  }
  var computeOptions = getOptions(options);
  return defaultBehavior(i2(target, computeOptions), computeOptions.behavior);
}
var es_default = scrollIntoView;

// ../../node_modules/slate-react/dist/index.es.js
var import_is_hotkey = __toESM(require_lib());
var import_react_dom = __toESM(require_react_dom());
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i3;
  for (i3 = 0; i3 < sourceKeys.length; i3++) {
    key = sourceKeys[i3];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i3;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i3 = 0; i3 < sourceSymbolKeys.length; i3++) {
      key = sourceSymbolKeys[i3];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var n3 = 0;
var Key = class {
  constructor() {
    this.id = "".concat(n3++);
  }
};
var NODE_TO_INDEX = /* @__PURE__ */ new WeakMap();
var NODE_TO_PARENT = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_WINDOW = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_ELEMENT = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_PLACEHOLDER_ELEMENT = /* @__PURE__ */ new WeakMap();
var ELEMENT_TO_NODE = /* @__PURE__ */ new WeakMap();
var NODE_TO_ELEMENT = /* @__PURE__ */ new WeakMap();
var NODE_TO_KEY = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_KEY_TO_ELEMENT = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_STYLE_ELEMENT = /* @__PURE__ */ new WeakMap();
var IS_READ_ONLY = /* @__PURE__ */ new WeakMap();
var IS_FOCUSED = /* @__PURE__ */ new WeakMap();
var IS_COMPOSING = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_USER_SELECTION = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_ON_CHANGE = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_SCHEDULE_FLUSH = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_PENDING_INSERTION_MARKS = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_USER_MARKS = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_PENDING_DIFFS = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_PENDING_ACTION = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_PENDING_SELECTION = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_FORCE_RENDER = /* @__PURE__ */ new WeakMap();
var PLACEHOLDER_SYMBOL = Symbol("placeholder");
var MARK_PLACEHOLDER_SYMBOL = Symbol("mark-placeholder");
var DOMText = globalThis.Text;
var getDefaultView = (value) => {
  return value && value.ownerDocument && value.ownerDocument.defaultView || null;
};
var isDOMComment = (value) => {
  return isDOMNode(value) && value.nodeType === 8;
};
var isDOMElement = (value) => {
  return isDOMNode(value) && value.nodeType === 1;
};
var isDOMNode = (value) => {
  var window2 = getDefaultView(value);
  return !!window2 && value instanceof window2.Node;
};
var isDOMSelection = (value) => {
  var window2 = value && value.anchorNode && getDefaultView(value.anchorNode);
  return !!window2 && value instanceof window2.Selection;
};
var isDOMText = (value) => {
  return isDOMNode(value) && value.nodeType === 3;
};
var isPlainTextOnlyPaste = (event) => {
  return event.clipboardData && event.clipboardData.getData("text/plain") !== "" && event.clipboardData.types.length === 1;
};
var normalizeDOMPoint = (domPoint) => {
  var [node, offset] = domPoint;
  if (isDOMElement(node) && node.childNodes.length) {
    var isLast = offset === node.childNodes.length;
    var index = isLast ? offset - 1 : offset;
    [node, index] = getEditableChildAndIndex(node, index, isLast ? "backward" : "forward");
    isLast = index < offset;
    while (isDOMElement(node) && node.childNodes.length) {
      var i3 = isLast ? node.childNodes.length - 1 : 0;
      node = getEditableChild(node, i3, isLast ? "backward" : "forward");
    }
    offset = isLast && node.textContent != null ? node.textContent.length : 0;
  }
  return [node, offset];
};
var hasShadowRoot = (node) => {
  var parent = node && node.parentNode;
  while (parent) {
    if (parent.toString() === "[object ShadowRoot]") {
      return true;
    }
    parent = parent.parentNode;
  }
  return false;
};
var getEditableChildAndIndex = (parent, index, direction) => {
  var {
    childNodes
  } = parent;
  var child = childNodes[index];
  var i3 = index;
  var triedForward = false;
  var triedBackward = false;
  while (isDOMComment(child) || isDOMElement(child) && child.childNodes.length === 0 || isDOMElement(child) && child.getAttribute("contenteditable") === "false") {
    if (triedForward && triedBackward) {
      break;
    }
    if (i3 >= childNodes.length) {
      triedForward = true;
      i3 = index - 1;
      direction = "backward";
      continue;
    }
    if (i3 < 0) {
      triedBackward = true;
      i3 = index + 1;
      direction = "forward";
      continue;
    }
    child = childNodes[i3];
    index = i3;
    i3 += direction === "forward" ? 1 : -1;
  }
  return [child, index];
};
var getEditableChild = (parent, index, direction) => {
  var [child] = getEditableChildAndIndex(parent, index, direction);
  return child;
};
var getPlainText = (domNode) => {
  var text = "";
  if (isDOMText(domNode) && domNode.nodeValue) {
    return domNode.nodeValue;
  }
  if (isDOMElement(domNode)) {
    for (var childNode of Array.from(domNode.childNodes)) {
      text += getPlainText(childNode);
    }
    var display = getComputedStyle(domNode).getPropertyValue("display");
    if (display === "block" || display === "list" || domNode.tagName === "BR") {
      text += "\n";
    }
  }
  return text;
};
var catchSlateFragment = /data-slate-fragment="(.+?)"/m;
var getSlateFragmentAttribute = (dataTransfer) => {
  var htmlData = dataTransfer.getData("text/html");
  var [, fragment] = htmlData.match(catchSlateFragment) || [];
  return fragment;
};
var isTrackedMutation = (editor, mutation, batch) => {
  var {
    target
  } = mutation;
  if (isDOMElement(target) && target.matches('[contentEditable="false"]')) {
    return false;
  }
  var {
    document: document2
  } = ReactEditor.getWindow(editor);
  if (document2.contains(target)) {
    return ReactEditor.hasDOMNode(editor, target, {
      editable: true
    });
  }
  var parentMutation = batch.find((_ref) => {
    var {
      addedNodes,
      removedNodes
    } = _ref;
    for (var node of addedNodes) {
      if (node === target || node.contains(target)) {
        return true;
      }
    }
    for (var _node of removedNodes) {
      if (_node === target || _node.contains(target)) {
        return true;
      }
    }
  });
  if (!parentMutation || parentMutation === mutation) {
    return false;
  }
  return isTrackedMutation(editor, parentMutation, batch);
};
var IS_REACT_VERSION_17_OR_ABOVE = parseInt(import_react.default.version.split(".")[0], 10) >= 17;
var IS_IOS = typeof navigator !== "undefined" && typeof window !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var IS_APPLE = typeof navigator !== "undefined" && /Mac OS X/.test(navigator.userAgent);
var IS_ANDROID = typeof navigator !== "undefined" && /Android/.test(navigator.userAgent);
var IS_FIREFOX = typeof navigator !== "undefined" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
var IS_SAFARI = typeof navigator !== "undefined" && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent);
var IS_EDGE_LEGACY = typeof navigator !== "undefined" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent);
var IS_CHROME = typeof navigator !== "undefined" && /Chrome/i.test(navigator.userAgent);
var IS_CHROME_LEGACY = typeof navigator !== "undefined" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent);
var IS_FIREFOX_LEGACY = typeof navigator !== "undefined" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent);
var IS_UC_MOBILE = typeof navigator !== "undefined" && /.*UCBrowser/.test(navigator.userAgent);
var IS_WECHATBROWSER = typeof navigator !== "undefined" && /.*Wechat/.test(navigator.userAgent);
var CAN_USE_DOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var HAS_BEFORE_INPUT_SUPPORT = !IS_CHROME_LEGACY && !IS_EDGE_LEGACY && typeof globalThis !== "undefined" && globalThis.InputEvent && typeof globalThis.InputEvent.prototype.getTargetRanges === "function";
var ReactEditor = {
  isComposing(editor) {
    return !!IS_COMPOSING.get(editor);
  },
  getWindow(editor) {
    var window2 = EDITOR_TO_WINDOW.get(editor);
    if (!window2) {
      throw new Error("Unable to find a host window element for this editor");
    }
    return window2;
  },
  findKey(editor, node) {
    var key = NODE_TO_KEY.get(node);
    if (!key) {
      key = new Key();
      NODE_TO_KEY.set(node, key);
    }
    return key;
  },
  findPath(editor, node) {
    var path = [];
    var child = node;
    while (true) {
      var parent = NODE_TO_PARENT.get(child);
      if (parent == null) {
        if (Editor.isEditor(child)) {
          return path;
        } else {
          break;
        }
      }
      var i3 = NODE_TO_INDEX.get(child);
      if (i3 == null) {
        break;
      }
      path.unshift(i3);
      child = parent;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(Scrubber.stringify(node)));
  },
  findDocumentOrShadowRoot(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = el.getRootNode();
    if ((root instanceof Document || root instanceof ShadowRoot) && root.getSelection != null) {
      return root;
    }
    return el.ownerDocument;
  },
  isFocused(editor) {
    return !!IS_FOCUSED.get(editor);
  },
  isReadOnly(editor) {
    return !!IS_READ_ONLY.get(editor);
  },
  blur(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    IS_FOCUSED.set(editor, false);
    if (root.activeElement === el) {
      el.blur();
    }
  },
  focus(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    IS_FOCUSED.set(editor, true);
    if (root.activeElement !== el) {
      el.focus({
        preventScroll: true
      });
    }
  },
  deselect(editor) {
    var {
      selection
    } = editor;
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    var domSelection = root.getSelection();
    if (domSelection && domSelection.rangeCount > 0) {
      domSelection.removeAllRanges();
    }
    if (selection) {
      Transforms.deselect(editor);
    }
  },
  hasDOMNode(editor, target) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      editable = false
    } = options;
    var editorEl = ReactEditor.toDOMNode(editor, editor);
    var targetEl;
    try {
      targetEl = isDOMElement(target) ? target : target.parentElement;
    } catch (err) {
      if (!err.message.includes('Permission denied to access property "nodeType"')) {
        throw err;
      }
    }
    if (!targetEl) {
      return false;
    }
    return targetEl.closest("[data-slate-editor]") === editorEl && (!editable || targetEl.isContentEditable ? true : typeof targetEl.isContentEditable === "boolean" && targetEl.closest('[contenteditable="false"]') === editorEl || !!targetEl.getAttribute("data-slate-zero-width"));
  },
  insertData(editor, data) {
    editor.insertData(data);
  },
  insertFragmentData(editor, data) {
    return editor.insertFragmentData(data);
  },
  insertTextData(editor, data) {
    return editor.insertTextData(data);
  },
  setFragmentData(editor, data, originEvent) {
    editor.setFragmentData(data, originEvent);
  },
  toDOMNode(editor, node) {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    var domNode = Editor.isEditor(node) ? EDITOR_TO_ELEMENT.get(editor) : KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.get(ReactEditor.findKey(editor, node));
    if (!domNode) {
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(Scrubber.stringify(node)));
    }
    return domNode;
  },
  toDOMPoint(editor, point) {
    var [node] = Editor.node(editor, point.path);
    var el = ReactEditor.toDOMNode(editor, node);
    var domPoint;
    if (Editor.void(editor, {
      at: point
    })) {
      point = {
        path: point.path,
        offset: 0
      };
    }
    var selector = "[data-slate-string], [data-slate-zero-width]";
    var texts = Array.from(el.querySelectorAll(selector));
    var start = 0;
    for (var i3 = 0; i3 < texts.length; i3++) {
      var text = texts[i3];
      var domNode = text.childNodes[0];
      if (domNode == null || domNode.textContent == null) {
        continue;
      }
      var {
        length
      } = domNode.textContent;
      var attr = text.getAttribute("data-slate-length");
      var trueLength = attr == null ? length : parseInt(attr, 10);
      var end = start + trueLength;
      var nextText = texts[i3 + 1];
      if (point.offset === end && nextText !== null && nextText !== void 0 && nextText.hasAttribute("data-slate-mark-placeholder")) {
        var _nextText$textContent;
        var domText = nextText.childNodes[0];
        domPoint = [
          domText instanceof DOMText ? domText : nextText,
          (_nextText$textContent = nextText.textContent) !== null && _nextText$textContent !== void 0 && _nextText$textContent.startsWith("\uFEFF") ? 1 : 0
        ];
        break;
      }
      if (point.offset <= end) {
        var offset = Math.min(length, Math.max(0, point.offset - start));
        domPoint = [domNode, offset];
        break;
      }
      start = end;
    }
    if (!domPoint) {
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(Scrubber.stringify(point)));
    }
    return domPoint;
  },
  toDOMRange(editor, range) {
    var {
      anchor,
      focus
    } = range;
    var isBackward = Range.isBackward(range);
    var domAnchor = ReactEditor.toDOMPoint(editor, anchor);
    var domFocus = Range.isCollapsed(range) ? domAnchor : ReactEditor.toDOMPoint(editor, focus);
    var window2 = ReactEditor.getWindow(editor);
    var domRange = window2.document.createRange();
    var [startNode, startOffset] = isBackward ? domFocus : domAnchor;
    var [endNode, endOffset] = isBackward ? domAnchor : domFocus;
    var startEl = isDOMElement(startNode) ? startNode : startNode.parentElement;
    var isStartAtZeroWidth = !!startEl.getAttribute("data-slate-zero-width");
    var endEl = isDOMElement(endNode) ? endNode : endNode.parentElement;
    var isEndAtZeroWidth = !!endEl.getAttribute("data-slate-zero-width");
    domRange.setStart(startNode, isStartAtZeroWidth ? 1 : startOffset);
    domRange.setEnd(endNode, isEndAtZeroWidth ? 1 : endOffset);
    return domRange;
  },
  toSlateNode(editor, domNode) {
    var domEl = isDOMElement(domNode) ? domNode : domNode.parentElement;
    if (domEl && !domEl.hasAttribute("data-slate-node")) {
      domEl = domEl.closest("[data-slate-node]");
    }
    var node = domEl ? ELEMENT_TO_NODE.get(domEl) : null;
    if (!node) {
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(domEl));
    }
    return node;
  },
  findEventRange(editor, event) {
    if ("nativeEvent" in event) {
      event = event.nativeEvent;
    }
    var {
      clientX: x2,
      clientY: y2,
      target
    } = event;
    if (x2 == null || y2 == null) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    }
    var node = ReactEditor.toSlateNode(editor, event.target);
    var path = ReactEditor.findPath(editor, node);
    if (Editor.isVoid(editor, node)) {
      var rect = target.getBoundingClientRect();
      var isPrev = editor.isInline(node) ? x2 - rect.left < rect.left + rect.width - x2 : y2 - rect.top < rect.top + rect.height - y2;
      var edge = Editor.point(editor, path, {
        edge: isPrev ? "start" : "end"
      });
      var point = isPrev ? Editor.before(editor, edge) : Editor.after(editor, edge);
      if (point) {
        var _range = Editor.range(editor, point);
        return _range;
      }
    }
    var domRange;
    var {
      document: document2
    } = ReactEditor.getWindow(editor);
    if (document2.caretRangeFromPoint) {
      domRange = document2.caretRangeFromPoint(x2, y2);
    } else {
      var position = document2.caretPositionFromPoint(x2, y2);
      if (position) {
        domRange = document2.createRange();
        domRange.setStart(position.offsetNode, position.offset);
        domRange.setEnd(position.offsetNode, position.offset);
      }
    }
    if (!domRange) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    }
    var range = ReactEditor.toSlateRange(editor, domRange, {
      exactMatch: false,
      suppressThrow: false
    });
    return range;
  },
  toSlatePoint(editor, domPoint, options) {
    var {
      exactMatch,
      suppressThrow
    } = options;
    var [nearestNode, nearestOffset] = exactMatch ? domPoint : normalizeDOMPoint(domPoint);
    var parentNode = nearestNode.parentNode;
    var textNode = null;
    var offset = 0;
    if (parentNode) {
      var _domNode$textContent, _domNode$textContent2;
      var editorEl = ReactEditor.toDOMNode(editor, editor);
      var potentialVoidNode = parentNode.closest('[data-slate-void="true"]');
      var voidNode = potentialVoidNode && editorEl.contains(potentialVoidNode) ? potentialVoidNode : null;
      var leafNode = parentNode.closest("[data-slate-leaf]");
      var domNode = null;
      if (leafNode) {
        textNode = leafNode.closest('[data-slate-node="text"]');
        if (textNode) {
          var window2 = ReactEditor.getWindow(editor);
          var range = window2.document.createRange();
          range.setStart(textNode, 0);
          range.setEnd(nearestNode, nearestOffset);
          var contents = range.cloneContents();
          var removals = [...Array.prototype.slice.call(contents.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(contents.querySelectorAll("[contenteditable=false]"))];
          removals.forEach((el) => {
            if (IS_ANDROID && !exactMatch && el.hasAttribute("data-slate-zero-width") && el.textContent.length > 0 && el.textContext !== "\uFEFF") {
              if (el.textContent.startsWith("\uFEFF")) {
                el.textContent = el.textContent.slice(1);
              }
              return;
            }
            el.parentNode.removeChild(el);
          });
          offset = contents.textContent.length;
          domNode = textNode;
        }
      } else if (voidNode) {
        var leafNodes = voidNode.querySelectorAll("[data-slate-leaf]");
        for (var index = 0; index < leafNodes.length; index++) {
          var current = leafNodes[index];
          if (ReactEditor.hasDOMNode(editor, current)) {
            leafNode = current;
            break;
          }
        }
        if (!leafNode) {
          offset = 1;
        } else {
          textNode = leafNode.closest('[data-slate-node="text"]');
          domNode = leafNode;
          offset = domNode.textContent.length;
          domNode.querySelectorAll("[data-slate-zero-width]").forEach((el) => {
            offset -= el.textContent.length;
          });
        }
      }
      if (domNode && offset === domNode.textContent.length && IS_ANDROID && domNode.getAttribute("data-slate-zero-width") === "z" && (_domNode$textContent = domNode.textContent) !== null && _domNode$textContent !== void 0 && _domNode$textContent.startsWith("\uFEFF") && (parentNode.hasAttribute("data-slate-zero-width") || IS_FIREFOX && (_domNode$textContent2 = domNode.textContent) !== null && _domNode$textContent2 !== void 0 && _domNode$textContent2.endsWith("\n\n"))) {
        offset--;
      }
    }
    if (IS_ANDROID && !textNode && !exactMatch) {
      var node = parentNode.hasAttribute("data-slate-node") ? parentNode : parentNode.closest("[data-slate-node]");
      if (node && ReactEditor.hasDOMNode(editor, node, {
        editable: true
      })) {
        var _slateNode = ReactEditor.toSlateNode(editor, node);
        var {
          path: _path,
          offset: _offset
        } = Editor.start(editor, ReactEditor.findPath(editor, _slateNode));
        if (!node.querySelector("[data-slate-leaf]")) {
          _offset = nearestOffset;
        }
        return {
          path: _path,
          offset: _offset
        };
      }
    }
    if (!textNode) {
      if (suppressThrow) {
        return null;
      }
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(domPoint));
    }
    var slateNode = ReactEditor.toSlateNode(editor, textNode);
    var path = ReactEditor.findPath(editor, slateNode);
    return {
      path,
      offset
    };
  },
  toSlateRange(editor, domRange, options) {
    var {
      exactMatch,
      suppressThrow
    } = options;
    var el = isDOMSelection(domRange) ? domRange.anchorNode : domRange.startContainer;
    var anchorNode;
    var anchorOffset;
    var focusNode;
    var focusOffset;
    var isCollapsed;
    if (el) {
      if (isDOMSelection(domRange)) {
        anchorNode = domRange.anchorNode;
        anchorOffset = domRange.anchorOffset;
        focusNode = domRange.focusNode;
        focusOffset = domRange.focusOffset;
        if (IS_CHROME && hasShadowRoot(anchorNode)) {
          isCollapsed = domRange.anchorNode === domRange.focusNode && domRange.anchorOffset === domRange.focusOffset;
        } else {
          isCollapsed = domRange.isCollapsed;
        }
      } else {
        anchorNode = domRange.startContainer;
        anchorOffset = domRange.startOffset;
        focusNode = domRange.endContainer;
        focusOffset = domRange.endOffset;
        isCollapsed = domRange.collapsed;
      }
    }
    if (anchorNode == null || focusNode == null || anchorOffset == null || focusOffset == null) {
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(domRange));
    }
    var anchor = ReactEditor.toSlatePoint(editor, [anchorNode, anchorOffset], {
      exactMatch,
      suppressThrow
    });
    if (!anchor) {
      return null;
    }
    var focus = isCollapsed ? anchor : ReactEditor.toSlatePoint(editor, [focusNode, focusOffset], {
      exactMatch,
      suppressThrow
    });
    if (!focus) {
      return null;
    }
    var range = {
      anchor,
      focus
    };
    if (Range.isExpanded(range) && Range.isForward(range) && isDOMElement(focusNode) && Editor.void(editor, {
      at: range.focus,
      mode: "highest"
    })) {
      range = Editor.unhangRange(editor, range, {
        voids: true
      });
    }
    return range;
  },
  hasRange(editor, range) {
    var {
      anchor,
      focus
    } = range;
    return Editor.hasPath(editor, anchor.path) && Editor.hasPath(editor, focus.path);
  },
  hasTarget(editor, target) {
    return isDOMNode(target) && ReactEditor.hasDOMNode(editor, target);
  },
  hasEditableTarget(editor, target) {
    return isDOMNode(target) && ReactEditor.hasDOMNode(editor, target, {
      editable: true
    });
  },
  hasSelectableTarget(editor, target) {
    return ReactEditor.hasEditableTarget(editor, target) || ReactEditor.isTargetInsideNonReadonlyVoid(editor, target);
  },
  isTargetInsideNonReadonlyVoid(editor, target) {
    if (IS_READ_ONLY.get(editor))
      return false;
    var slateNode = ReactEditor.hasTarget(editor, target) && ReactEditor.toSlateNode(editor, target);
    return Editor.isVoid(editor, slateNode);
  },
  androidScheduleFlush(editor) {
    var _EDITOR_TO_SCHEDULE_F;
    (_EDITOR_TO_SCHEDULE_F = EDITOR_TO_SCHEDULE_FLUSH.get(editor)) === null || _EDITOR_TO_SCHEDULE_F === void 0 ? void 0 : _EDITOR_TO_SCHEDULE_F();
  },
  androidPendingDiffs(editor) {
    return EDITOR_TO_PENDING_DIFFS.get(editor);
  }
};
var useIsomorphicLayoutEffect = CAN_USE_DOM ? import_react.useLayoutEffect : import_react.useEffect;
var _excluded$32 = ["anchor", "focus"];
var _excluded2$12 = ["anchor", "focus"];
var shallowCompare = (obj1, obj2) => Object.keys(obj1).length === Object.keys(obj2).length && Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
var isDecoratorRangeListEqual = (list, another) => {
  if (list.length !== another.length) {
    return false;
  }
  for (var i3 = 0; i3 < list.length; i3++) {
    var range = list[i3];
    var other = another[i3];
    var rangeOwnProps = _objectWithoutProperties2(range, _excluded$32);
    var otherOwnProps = _objectWithoutProperties2(other, _excluded2$12);
    if (!Range.equals(range, other) || range[PLACEHOLDER_SYMBOL] !== other[PLACEHOLDER_SYMBOL] || !shallowCompare(rangeOwnProps, otherOwnProps)) {
      return false;
    }
  }
  return true;
};
var String2 = (props) => {
  var {
    isLast,
    leaf,
    parent,
    text
  } = props;
  var editor = useSlateStatic();
  var path = ReactEditor.findPath(editor, text);
  var parentPath = Path.parent(path);
  var isMarkPlaceholder = leaf[MARK_PLACEHOLDER_SYMBOL] === true;
  if (editor.isVoid(parent)) {
    return /* @__PURE__ */ import_react.default.createElement(ZeroWidthString, {
      length: Node.string(parent).length
    });
  }
  if (leaf.text === "" && parent.children[parent.children.length - 1] === text && !editor.isInline(parent) && Editor.string(editor, parentPath) === "") {
    return /* @__PURE__ */ import_react.default.createElement(ZeroWidthString, {
      isLineBreak: true,
      isMarkPlaceholder
    });
  }
  if (leaf.text === "") {
    return /* @__PURE__ */ import_react.default.createElement(ZeroWidthString, {
      isMarkPlaceholder
    });
  }
  if (isLast && leaf.text.slice(-1) === "\n") {
    return /* @__PURE__ */ import_react.default.createElement(TextString, {
      isTrailing: true,
      text: leaf.text
    });
  }
  return /* @__PURE__ */ import_react.default.createElement(TextString, {
    text: leaf.text
  });
};
var TextString = (props) => {
  var {
    text,
    isTrailing = false
  } = props;
  var ref = (0, import_react.useRef)(null);
  var getTextContent = () => {
    return "".concat(text !== null && text !== void 0 ? text : "").concat(isTrailing ? "\n" : "");
  };
  useIsomorphicLayoutEffect(() => {
    var textWithTrailing = getTextContent();
    if (ref.current && ref.current.textContent !== textWithTrailing) {
      ref.current.textContent = textWithTrailing;
    }
  });
  if (!ref.current) {
    return /* @__PURE__ */ import_react.default.createElement("span", {
      "data-slate-string": true,
      ref
    }, getTextContent());
  }
  return /* @__PURE__ */ import_react.default.createElement("span", {
    "data-slate-string": true,
    ref
  });
};
var ZeroWidthString = (props) => {
  var {
    length = 0,
    isLineBreak = false,
    isMarkPlaceholder = false
  } = props;
  var attributes = {
    "data-slate-zero-width": isLineBreak ? "n" : "z",
    "data-slate-length": length
  };
  if (isMarkPlaceholder) {
    attributes["data-slate-mark-placeholder"] = true;
  }
  return /* @__PURE__ */ import_react.default.createElement("span", Object.assign({}, attributes), !IS_ANDROID || !isLineBreak ? "\uFEFF" : null, isLineBreak ? /* @__PURE__ */ import_react.default.createElement("br", null) : null);
};
var EditorContext = /* @__PURE__ */ (0, import_react.createContext)(null);
var useSlateStatic = () => {
  var editor = (0, import_react.useContext)(EditorContext);
  if (!editor) {
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  }
  return editor;
};
var Leaf = (props) => {
  var {
    leaf,
    isLast,
    text,
    parent,
    renderPlaceholder,
    renderLeaf = (props2) => /* @__PURE__ */ import_react.default.createElement(DefaultLeaf, Object.assign({}, props2))
  } = props;
  var placeholderRef = (0, import_react.useRef)(null);
  var editor = useSlateStatic();
  var placeholderResizeObserver = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    return () => {
      if (placeholderResizeObserver.current) {
        placeholderResizeObserver.current.disconnect();
      }
    };
  }, []);
  (0, import_react.useEffect)(() => {
    var placeholderEl = placeholderRef === null || placeholderRef === void 0 ? void 0 : placeholderRef.current;
    if (placeholderEl) {
      EDITOR_TO_PLACEHOLDER_ELEMENT.set(editor, placeholderEl);
    } else {
      EDITOR_TO_PLACEHOLDER_ELEMENT.delete(editor);
    }
    if (placeholderResizeObserver.current) {
      placeholderResizeObserver.current.disconnect();
      if (placeholderEl)
        placeholderResizeObserver.current.observe(placeholderEl);
    } else if (placeholderEl) {
      placeholderResizeObserver.current = new ResizeObserver((_ref) => {
        var [{
          target
        }] = _ref;
        var styleElement2 = EDITOR_TO_STYLE_ELEMENT.get(editor);
        if (styleElement2) {
          var minHeight = "".concat(target.clientHeight, "px");
          styleElement2.innerHTML = ':where([data-slate-editor-id="'.concat(editor.id, '"]) { min-height: ').concat(minHeight, "; }");
        }
      });
      placeholderResizeObserver.current.observe(placeholderEl);
    }
    if (!placeholderEl) {
      var styleElement = EDITOR_TO_STYLE_ELEMENT.get(editor);
      if (styleElement) {
        styleElement.innerHTML = "";
      }
    }
    return () => {
      EDITOR_TO_PLACEHOLDER_ELEMENT.delete(editor);
    };
  }, [placeholderRef, leaf]);
  var children = /* @__PURE__ */ import_react.default.createElement(String2, {
    isLast,
    leaf,
    parent,
    text
  });
  if (leaf[PLACEHOLDER_SYMBOL]) {
    var placeholderProps = {
      children: leaf.placeholder,
      attributes: {
        "data-slate-placeholder": true,
        style: {
          position: "absolute",
          pointerEvents: "none",
          width: "100%",
          maxWidth: "100%",
          display: "block",
          opacity: "0.333",
          userSelect: "none",
          textDecoration: "none"
        },
        contentEditable: false,
        ref: placeholderRef
      }
    };
    children = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, renderPlaceholder(placeholderProps), children);
  }
  var attributes = {
    "data-slate-leaf": true
  };
  return renderLeaf({
    attributes,
    children,
    leaf,
    text
  });
};
var MemoizedLeaf = /* @__PURE__ */ import_react.default.memo(Leaf, (prev, next) => {
  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.renderPlaceholder === prev.renderPlaceholder && next.text === prev.text && Text2.equals(next.leaf, prev.leaf) && next.leaf[PLACEHOLDER_SYMBOL] === prev.leaf[PLACEHOLDER_SYMBOL];
});
var DefaultLeaf = (props) => {
  var {
    attributes,
    children
  } = props;
  return /* @__PURE__ */ import_react.default.createElement("span", Object.assign({}, attributes), children);
};
var Text3 = (props) => {
  var {
    decorations,
    isLast,
    parent,
    renderPlaceholder,
    renderLeaf,
    text
  } = props;
  var editor = useSlateStatic();
  var ref = (0, import_react.useRef)(null);
  var leaves = Text2.decorations(text, decorations);
  var key = ReactEditor.findKey(editor, text);
  var children = [];
  for (var i3 = 0; i3 < leaves.length; i3++) {
    var leaf = leaves[i3];
    children.push(/* @__PURE__ */ import_react.default.createElement(MemoizedLeaf, {
      isLast: isLast && i3 === leaves.length - 1,
      key: "".concat(key.id, "-").concat(i3),
      renderPlaceholder,
      leaf,
      text,
      parent,
      renderLeaf
    }));
  }
  useIsomorphicLayoutEffect(() => {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    if (ref.current) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.set(key, ref.current);
      NODE_TO_ELEMENT.set(text, ref.current);
      ELEMENT_TO_NODE.set(ref.current, text);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.delete(key);
      NODE_TO_ELEMENT.delete(text);
    }
  });
  return /* @__PURE__ */ import_react.default.createElement("span", {
    "data-slate-node": "text",
    ref
  }, children);
};
var MemoizedText = /* @__PURE__ */ import_react.default.memo(Text3, (prev, next) => {
  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.text === prev.text && isDecoratorRangeListEqual(next.decorations, prev.decorations);
});
var Element2 = (props) => {
  var {
    decorations,
    element,
    renderElement = (p2) => /* @__PURE__ */ import_react.default.createElement(DefaultElement, Object.assign({}, p2)),
    renderPlaceholder,
    renderLeaf,
    selection
  } = props;
  var editor = useSlateStatic();
  var readOnly = useReadOnly();
  var isInline = editor.isInline(element);
  var key = ReactEditor.findKey(editor, element);
  var ref = (0, import_react.useCallback)((ref2) => {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    if (ref2) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.set(key, ref2);
      NODE_TO_ELEMENT.set(element, ref2);
      ELEMENT_TO_NODE.set(ref2, element);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.delete(key);
      NODE_TO_ELEMENT.delete(element);
    }
  }, [editor, key, element]);
  var children = useChildren({
    decorations,
    node: element,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection
  });
  var attributes = {
    "data-slate-node": "element",
    ref
  };
  if (isInline) {
    attributes["data-slate-inline"] = true;
  }
  if (!isInline && Editor.hasInlines(editor, element)) {
    var text = Node.string(element);
    var dir = (0, import_direction.default)(text);
    if (dir === "rtl") {
      attributes.dir = dir;
    }
  }
  if (Editor.isVoid(editor, element)) {
    attributes["data-slate-void"] = true;
    if (!readOnly && isInline) {
      attributes.contentEditable = false;
    }
    var Tag = isInline ? "span" : "div";
    var [[_text]] = Node.texts(element);
    children = /* @__PURE__ */ import_react.default.createElement(Tag, {
      "data-slate-spacer": true,
      style: {
        height: "0",
        color: "transparent",
        outline: "none",
        position: "absolute"
      }
    }, /* @__PURE__ */ import_react.default.createElement(MemoizedText, {
      renderPlaceholder,
      decorations: [],
      isLast: false,
      parent: element,
      text: _text
    }));
    NODE_TO_INDEX.set(_text, 0);
    NODE_TO_PARENT.set(_text, element);
  }
  return renderElement({
    attributes,
    children,
    element
  });
};
var MemoizedElement = /* @__PURE__ */ import_react.default.memo(Element2, (prev, next) => {
  return prev.element === next.element && prev.renderElement === next.renderElement && prev.renderLeaf === next.renderLeaf && isDecoratorRangeListEqual(prev.decorations, next.decorations) && (prev.selection === next.selection || !!prev.selection && !!next.selection && Range.equals(prev.selection, next.selection));
});
var DefaultElement = (props) => {
  var {
    attributes,
    children,
    element
  } = props;
  var editor = useSlateStatic();
  var Tag = editor.isInline(element) ? "span" : "div";
  return /* @__PURE__ */ import_react.default.createElement(Tag, Object.assign({}, attributes, {
    style: {
      position: "relative"
    }
  }), children);
};
var DecorateContext = /* @__PURE__ */ (0, import_react.createContext)(() => []);
var useDecorate = () => {
  return (0, import_react.useContext)(DecorateContext);
};
var SelectedContext = /* @__PURE__ */ (0, import_react.createContext)(false);
var useChildren = (props) => {
  var {
    decorations,
    node,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection
  } = props;
  var decorate = useDecorate();
  var editor = useSlateStatic();
  var path = ReactEditor.findPath(editor, node);
  var children = [];
  var isLeafBlock = Element.isElement(node) && !editor.isInline(node) && Editor.hasInlines(editor, node);
  for (var i3 = 0; i3 < node.children.length; i3++) {
    var p2 = path.concat(i3);
    var n4 = node.children[i3];
    var key = ReactEditor.findKey(editor, n4);
    var range = Editor.range(editor, p2);
    var sel = selection && Range.intersection(range, selection);
    var ds = decorate([n4, p2]);
    for (var dec of decorations) {
      var d2 = Range.intersection(dec, range);
      if (d2) {
        ds.push(d2);
      }
    }
    if (Element.isElement(n4)) {
      children.push(/* @__PURE__ */ import_react.default.createElement(SelectedContext.Provider, {
        key: "provider-".concat(key.id),
        value: !!sel
      }, /* @__PURE__ */ import_react.default.createElement(MemoizedElement, {
        decorations: ds,
        element: n4,
        key: key.id,
        renderElement,
        renderPlaceholder,
        renderLeaf,
        selection: sel
      })));
    } else {
      children.push(/* @__PURE__ */ import_react.default.createElement(MemoizedText, {
        decorations: ds,
        key: key.id,
        isLast: isLeafBlock && i3 === node.children.length - 1,
        parent: node,
        renderPlaceholder,
        renderLeaf,
        text: n4
      }));
    }
    NODE_TO_INDEX.set(n4, i3);
    NODE_TO_PARENT.set(n4, node);
  }
  return children;
};
var ReadOnlyContext = /* @__PURE__ */ (0, import_react.createContext)(false);
var useReadOnly = () => {
  return (0, import_react.useContext)(ReadOnlyContext);
};
var SlateContext = /* @__PURE__ */ (0, import_react.createContext)(null);
var useSlate = () => {
  var context = (0, import_react.useContext)(SlateContext);
  if (!context) {
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  }
  var {
    editor
  } = context;
  return editor;
};
var TRIPLE_CLICK = 3;
var HOTKEYS = {
  bold: "mod+b",
  compose: ["down", "left", "right", "up", "backspace", "enter"],
  moveBackward: "left",
  moveForward: "right",
  moveWordBackward: "ctrl+left",
  moveWordForward: "ctrl+right",
  deleteBackward: "shift?+backspace",
  deleteForward: "shift?+delete",
  extendBackward: "shift+left",
  extendForward: "shift+right",
  italic: "mod+i",
  insertSoftBreak: "shift+enter",
  splitBlock: "enter",
  undo: "mod+z"
};
var APPLE_HOTKEYS = {
  moveLineBackward: "opt+up",
  moveLineForward: "opt+down",
  moveWordBackward: "opt+left",
  moveWordForward: "opt+right",
  deleteBackward: ["ctrl+backspace", "ctrl+h"],
  deleteForward: ["ctrl+delete", "ctrl+d"],
  deleteLineBackward: "cmd+shift?+backspace",
  deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
  deleteWordBackward: "opt+shift?+backspace",
  deleteWordForward: "opt+shift?+delete",
  extendLineBackward: "opt+shift+up",
  extendLineForward: "opt+shift+down",
  redo: "cmd+shift+z",
  transposeCharacter: "ctrl+t"
};
var WINDOWS_HOTKEYS = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
};
var create = (key) => {
  var generic = HOTKEYS[key];
  var apple = APPLE_HOTKEYS[key];
  var windows = WINDOWS_HOTKEYS[key];
  var isGeneric = generic && (0, import_is_hotkey.isKeyHotkey)(generic);
  var isApple = apple && (0, import_is_hotkey.isKeyHotkey)(apple);
  var isWindows = windows && (0, import_is_hotkey.isKeyHotkey)(windows);
  return (event) => {
    if (isGeneric && isGeneric(event))
      return true;
    if (IS_APPLE && isApple && isApple(event))
      return true;
    if (!IS_APPLE && isWindows && isWindows(event))
      return true;
    return false;
  };
};
var Hotkeys = {
  isBold: create("bold"),
  isCompose: create("compose"),
  isMoveBackward: create("moveBackward"),
  isMoveForward: create("moveForward"),
  isDeleteBackward: create("deleteBackward"),
  isDeleteForward: create("deleteForward"),
  isDeleteLineBackward: create("deleteLineBackward"),
  isDeleteLineForward: create("deleteLineForward"),
  isDeleteWordBackward: create("deleteWordBackward"),
  isDeleteWordForward: create("deleteWordForward"),
  isExtendBackward: create("extendBackward"),
  isExtendForward: create("extendForward"),
  isExtendLineBackward: create("extendLineBackward"),
  isExtendLineForward: create("extendLineForward"),
  isItalic: create("italic"),
  isMoveLineBackward: create("moveLineBackward"),
  isMoveLineForward: create("moveLineForward"),
  isMoveWordBackward: create("moveWordBackward"),
  isMoveWordForward: create("moveWordForward"),
  isRedo: create("redo"),
  isSoftBreak: create("insertSoftBreak"),
  isSplitBlock: create("splitBlock"),
  isTransposeCharacter: create("transposeCharacter"),
  isUndo: create("undo")
};
var createRestoreDomManager = (editor, receivedUserInput) => {
  var bufferedMutations = [];
  var clear = () => {
    bufferedMutations = [];
  };
  var registerMutations = (mutations) => {
    if (!receivedUserInput.current) {
      return;
    }
    var trackedMutations = mutations.filter((mutation) => isTrackedMutation(editor, mutation, mutations));
    bufferedMutations.push(...trackedMutations);
  };
  function restoreDOM() {
    bufferedMutations.reverse().forEach((mutation) => {
      if (mutation.type === "characterData") {
        mutation.target.textContent = mutation.oldValue;
        return;
      }
      mutation.removedNodes.forEach((node) => {
        mutation.target.insertBefore(node, mutation.nextSibling);
      });
      mutation.addedNodes.forEach((node) => {
        mutation.target.removeChild(node);
      });
    });
    clear();
  }
  return {
    registerMutations,
    restoreDOM,
    clear
  };
};
var MUTATION_OBSERVER_CONFIG$1 = {
  subtree: true,
  childList: true,
  characterData: true,
  characterDataOldValue: true
};
var RestoreDOMComponent = class extends import_react.Component {
  constructor() {
    super(...arguments);
    this.context = null;
    this.manager = null;
    this.mutationObserver = null;
  }
  observe() {
    var _this$mutationObserve;
    var {
      node
    } = this.props;
    if (!node.current) {
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    }
    (_this$mutationObserve = this.mutationObserver) === null || _this$mutationObserve === void 0 ? void 0 : _this$mutationObserve.observe(node.current, MUTATION_OBSERVER_CONFIG$1);
  }
  componentDidMount() {
    var {
      receivedUserInput
    } = this.props;
    var editor = this.context;
    this.manager = createRestoreDomManager(editor, receivedUserInput);
    this.mutationObserver = new MutationObserver(this.manager.registerMutations);
    this.observe();
  }
  getSnapshotBeforeUpdate() {
    var _this$mutationObserve2, _this$mutationObserve3, _this$manager2;
    var pendingMutations = (_this$mutationObserve2 = this.mutationObserver) === null || _this$mutationObserve2 === void 0 ? void 0 : _this$mutationObserve2.takeRecords();
    if (pendingMutations !== null && pendingMutations !== void 0 && pendingMutations.length) {
      var _this$manager;
      (_this$manager = this.manager) === null || _this$manager === void 0 ? void 0 : _this$manager.registerMutations(pendingMutations);
    }
    (_this$mutationObserve3 = this.mutationObserver) === null || _this$mutationObserve3 === void 0 ? void 0 : _this$mutationObserve3.disconnect();
    (_this$manager2 = this.manager) === null || _this$manager2 === void 0 ? void 0 : _this$manager2.restoreDOM();
    return null;
  }
  componentDidUpdate() {
    var _this$manager3;
    (_this$manager3 = this.manager) === null || _this$manager3 === void 0 ? void 0 : _this$manager3.clear();
    this.observe();
  }
  componentWillUnmount() {
    var _this$mutationObserve4;
    (_this$mutationObserve4 = this.mutationObserver) === null || _this$mutationObserve4 === void 0 ? void 0 : _this$mutationObserve4.disconnect();
  }
  render() {
    return this.props.children;
  }
};
RestoreDOMComponent.contextType = EditorContext;
var RestoreDOM = IS_ANDROID ? RestoreDOMComponent : (_ref) => {
  var {
    children
  } = _ref;
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, children);
};
function verifyDiffState(editor, textDiff) {
  var {
    path,
    diff
  } = textDiff;
  if (!Editor.hasPath(editor, path)) {
    return false;
  }
  var node = Node.get(editor, path);
  if (!Text2.isText(node)) {
    return false;
  }
  if (diff.start !== node.text.length || diff.text.length === 0) {
    return node.text.slice(diff.start, diff.start + diff.text.length) === diff.text;
  }
  var nextPath = Path.next(path);
  if (!Editor.hasPath(editor, nextPath)) {
    return false;
  }
  var nextNode = Node.get(editor, nextPath);
  return Text2.isText(nextNode) && nextNode.text.startsWith(diff.text);
}
function applyStringDiff(text) {
  for (var _len = arguments.length, diffs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    diffs[_key - 1] = arguments[_key];
  }
  return diffs.reduce((text2, diff) => text2.slice(0, diff.start) + diff.text + text2.slice(diff.end), text);
}
function longestCommonPrefixLength(str, another) {
  var length = Math.min(str.length, another.length);
  for (var i3 = 0; i3 < length; i3++) {
    if (str.charAt(i3) !== another.charAt(i3)) {
      return i3;
    }
  }
  return length;
}
function longestCommonSuffixLength(str, another, max) {
  var length = Math.min(str.length, another.length, max);
  for (var i3 = 0; i3 < length; i3++) {
    if (str.charAt(str.length - i3 - 1) !== another.charAt(another.length - i3 - 1)) {
      return i3;
    }
  }
  return length;
}
function normalizeStringDiff(targetText, diff) {
  var {
    start,
    end,
    text
  } = diff;
  var removedText = targetText.slice(start, end);
  var prefixLength = longestCommonPrefixLength(removedText, text);
  var max = Math.min(removedText.length - prefixLength, text.length - prefixLength);
  var suffixLength = longestCommonSuffixLength(removedText, text, max);
  var normalized = {
    start: start + prefixLength,
    end: end - suffixLength,
    text: text.slice(prefixLength, text.length - suffixLength)
  };
  if (normalized.start === normalized.end && normalized.text.length === 0) {
    return null;
  }
  return normalized;
}
function mergeStringDiffs(targetText, a2, b2) {
  var start = Math.min(a2.start, b2.start);
  var overlap = Math.max(0, Math.min(a2.start + a2.text.length, b2.end) - b2.start);
  var applied = applyStringDiff(targetText, a2, b2);
  var sliceEnd = Math.max(b2.start + b2.text.length, a2.start + a2.text.length + (a2.start + a2.text.length > b2.start ? b2.text.length : 0) - overlap);
  var text = applied.slice(start, sliceEnd);
  var end = Math.max(a2.end, b2.end - a2.text.length + (a2.end - a2.start));
  return normalizeStringDiff(targetText, {
    start,
    end,
    text
  });
}
function targetRange(textDiff) {
  var {
    path,
    diff
  } = textDiff;
  return {
    anchor: {
      path,
      offset: diff.start
    },
    focus: {
      path,
      offset: diff.end
    }
  };
}
function normalizePoint(editor, point) {
  var {
    path,
    offset
  } = point;
  if (!Editor.hasPath(editor, path)) {
    return null;
  }
  var leaf = Node.get(editor, path);
  if (!Text2.isText(leaf)) {
    return null;
  }
  var parentBlock = Editor.above(editor, {
    match: (n4) => Editor.isBlock(editor, n4),
    at: path
  });
  if (!parentBlock) {
    return null;
  }
  while (offset > leaf.text.length) {
    var entry = Editor.next(editor, {
      at: path,
      match: Text2.isText
    });
    if (!entry || !Path.isDescendant(entry[1], parentBlock[1])) {
      return null;
    }
    offset -= leaf.text.length;
    leaf = entry[0];
    path = entry[1];
  }
  return {
    path,
    offset
  };
}
function normalizeRange(editor, range) {
  var anchor = normalizePoint(editor, range.anchor);
  if (!anchor) {
    return null;
  }
  if (Range.isCollapsed(range)) {
    return {
      anchor,
      focus: anchor
    };
  }
  var focus = normalizePoint(editor, range.focus);
  if (!focus) {
    return null;
  }
  return {
    anchor,
    focus
  };
}
function transformPendingPoint(editor, point, op) {
  var pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(editor);
  var textDiff = pendingDiffs === null || pendingDiffs === void 0 ? void 0 : pendingDiffs.find((_ref) => {
    var {
      path
    } = _ref;
    return Path.equals(path, point.path);
  });
  if (!textDiff || point.offset <= textDiff.diff.start) {
    return Point.transform(point, op, {
      affinity: "backward"
    });
  }
  var {
    diff
  } = textDiff;
  if (point.offset <= diff.start + diff.text.length) {
    var _anchor = {
      path: point.path,
      offset: diff.start
    };
    var _transformed = Point.transform(_anchor, op, {
      affinity: "backward"
    });
    if (!_transformed) {
      return null;
    }
    return {
      path: _transformed.path,
      offset: _transformed.offset + point.offset - diff.start
    };
  }
  var anchor = {
    path: point.path,
    offset: point.offset - diff.text.length + diff.end - diff.start
  };
  var transformed = Point.transform(anchor, op, {
    affinity: "backward"
  });
  if (!transformed) {
    return null;
  }
  if (op.type === "split_node" && Path.equals(op.path, point.path) && anchor.offset < op.position && diff.start < op.position) {
    return transformed;
  }
  return {
    path: transformed.path,
    offset: transformed.offset + diff.text.length - diff.end + diff.start
  };
}
function transformPendingRange(editor, range, op) {
  var anchor = transformPendingPoint(editor, range.anchor, op);
  if (!anchor) {
    return null;
  }
  if (Range.isCollapsed(range)) {
    return {
      anchor,
      focus: anchor
    };
  }
  var focus = transformPendingPoint(editor, range.focus, op);
  if (!focus) {
    return null;
  }
  return {
    anchor,
    focus
  };
}
function transformTextDiff(textDiff, op) {
  var {
    path,
    diff,
    id
  } = textDiff;
  switch (op.type) {
    case "insert_text": {
      if (!Path.equals(op.path, path) || op.offset >= diff.end) {
        return textDiff;
      }
      if (op.offset <= diff.start) {
        return {
          diff: {
            start: op.text.length + diff.start,
            end: op.text.length + diff.end,
            text: diff.text
          },
          id,
          path
        };
      }
      return {
        diff: {
          start: diff.start,
          end: diff.end + op.text.length,
          text: diff.text
        },
        id,
        path
      };
    }
    case "remove_text": {
      if (!Path.equals(op.path, path) || op.offset >= diff.end) {
        return textDiff;
      }
      if (op.offset + op.text.length <= diff.start) {
        return {
          diff: {
            start: diff.start - op.text.length,
            end: diff.end - op.text.length,
            text: diff.text
          },
          id,
          path
        };
      }
      return {
        diff: {
          start: diff.start,
          end: diff.end - op.text.length,
          text: diff.text
        },
        id,
        path
      };
    }
    case "split_node": {
      if (!Path.equals(op.path, path) || op.position >= diff.end) {
        return {
          diff,
          id,
          path: Path.transform(path, op, {
            affinity: "backward"
          })
        };
      }
      if (op.position > diff.start) {
        return {
          diff: {
            start: diff.start,
            end: Math.min(op.position, diff.end),
            text: diff.text
          },
          id,
          path
        };
      }
      return {
        diff: {
          start: diff.start - op.position,
          end: diff.end - op.position,
          text: diff.text
        },
        id,
        path: Path.transform(path, op, {
          affinity: "forward"
        })
      };
    }
    case "merge_node": {
      if (!Path.equals(op.path, path)) {
        return {
          diff,
          id,
          path: Path.transform(path, op)
        };
      }
      return {
        diff: {
          start: diff.start + op.position,
          end: diff.end + op.position,
          text: diff.text
        },
        id,
        path: Path.transform(path, op)
      };
    }
  }
  var newPath = Path.transform(path, op);
  if (!newPath) {
    return null;
  }
  return {
    diff,
    path: newPath,
    id
  };
}
function ownKeys$32(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$32(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
      ownKeys$32(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$32(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var RESOLVE_DELAY = 25;
var FLUSH_DELAY = 200;
var debug = function debug2() {
};
function createAndroidInputManager(_ref) {
  var {
    editor,
    scheduleOnDOMSelectionChange,
    onDOMSelectionChange
  } = _ref;
  var flushing = false;
  var compositionEndTimeoutId = null;
  var flushTimeoutId = null;
  var actionTimeoutId = null;
  var idCounter = 0;
  var insertPositionHint = false;
  var applyPendingSelection = () => {
    var pendingSelection = EDITOR_TO_PENDING_SELECTION.get(editor);
    EDITOR_TO_PENDING_SELECTION.delete(editor);
    if (pendingSelection) {
      var {
        selection
      } = editor;
      var normalized = normalizeRange(editor, pendingSelection);
      if (normalized && (!selection || !Range.equals(normalized, selection))) {
        Transforms.select(editor, normalized);
      }
    }
  };
  var performAction = () => {
    var action = EDITOR_TO_PENDING_ACTION.get(editor);
    EDITOR_TO_PENDING_ACTION.delete(editor);
    if (!action) {
      return;
    }
    if (action.at) {
      var target = Point.isPoint(action.at) ? normalizePoint(editor, action.at) : normalizeRange(editor, action.at);
      if (!target) {
        return;
      }
      var _targetRange = Editor.range(editor, target);
      if (!editor.selection || !Range.equals(editor.selection, _targetRange)) {
        Transforms.select(editor, target);
      }
    }
    action.run();
  };
  var flush = () => {
    var _EDITOR_TO_PENDING_DI;
    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }
    if (actionTimeoutId) {
      clearTimeout(actionTimeoutId);
      actionTimeoutId = null;
    }
    if (!hasPendingDiffs() && !hasPendingAction()) {
      applyPendingSelection();
      return;
    }
    if (!flushing) {
      flushing = true;
      setTimeout(() => flushing = false);
    }
    if (hasPendingAction()) {
      flushing = "action";
    }
    var selectionRef = editor.selection && Editor.rangeRef(editor, editor.selection, {
      affinity: "forward"
    });
    EDITOR_TO_USER_MARKS.set(editor, editor.marks);
    debug("flush", EDITOR_TO_PENDING_ACTION.get(editor), EDITOR_TO_PENDING_DIFFS.get(editor));
    var scheduleSelectionChange = !!((_EDITOR_TO_PENDING_DI = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI !== void 0 && _EDITOR_TO_PENDING_DI.length);
    var diff;
    while (diff = (_EDITOR_TO_PENDING_DI2 = EDITOR_TO_PENDING_DIFFS.get(editor)) === null || _EDITOR_TO_PENDING_DI2 === void 0 ? void 0 : _EDITOR_TO_PENDING_DI2[0]) {
      var _EDITOR_TO_PENDING_DI2, _EDITOR_TO_PENDING_DI3;
      var pendingMarks = EDITOR_TO_PENDING_INSERTION_MARKS.get(editor);
      if (pendingMarks !== void 0) {
        EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
        editor.marks = pendingMarks;
      }
      if (pendingMarks && insertPositionHint === false) {
        insertPositionHint = null;
      }
      var range = targetRange(diff);
      if (!editor.selection || !Range.equals(editor.selection, range)) {
        Transforms.select(editor, range);
      }
      if (diff.diff.text) {
        Editor.insertText(editor, diff.diff.text);
      } else {
        Editor.deleteFragment(editor);
      }
      EDITOR_TO_PENDING_DIFFS.set(editor, (_EDITOR_TO_PENDING_DI3 = EDITOR_TO_PENDING_DIFFS.get(editor)) === null || _EDITOR_TO_PENDING_DI3 === void 0 ? void 0 : _EDITOR_TO_PENDING_DI3.filter((_ref2) => {
        var {
          id
        } = _ref2;
        return id !== diff.id;
      }));
      if (!verifyDiffState(editor, diff)) {
        scheduleSelectionChange = false;
        EDITOR_TO_PENDING_ACTION.delete(editor);
        EDITOR_TO_USER_MARKS.delete(editor);
        flushing = "action";
        EDITOR_TO_PENDING_SELECTION.delete(editor);
        scheduleOnDOMSelectionChange.cancel();
        onDOMSelectionChange.cancel();
        selectionRef === null || selectionRef === void 0 ? void 0 : selectionRef.unref();
      }
    }
    var selection = selectionRef === null || selectionRef === void 0 ? void 0 : selectionRef.unref();
    if (selection && !EDITOR_TO_PENDING_SELECTION.get(editor) && (!editor.selection || !Range.equals(selection, editor.selection))) {
      Transforms.select(editor, selection);
    }
    if (hasPendingAction()) {
      performAction();
      return;
    }
    if (scheduleSelectionChange) {
      scheduleOnDOMSelectionChange();
    }
    scheduleOnDOMSelectionChange.flush();
    onDOMSelectionChange.flush();
    applyPendingSelection();
    var userMarks = EDITOR_TO_USER_MARKS.get(editor);
    EDITOR_TO_USER_MARKS.delete(editor);
    if (userMarks !== void 0) {
      editor.marks = userMarks;
      editor.onChange();
    }
  };
  var handleCompositionEnd = (_event) => {
    if (compositionEndTimeoutId) {
      clearTimeout(compositionEndTimeoutId);
    }
    compositionEndTimeoutId = setTimeout(() => {
      IS_COMPOSING.set(editor, false);
      flush();
    }, RESOLVE_DELAY);
  };
  var handleCompositionStart = (_event) => {
    IS_COMPOSING.set(editor, true);
    if (compositionEndTimeoutId) {
      clearTimeout(compositionEndTimeoutId);
      compositionEndTimeoutId = null;
    }
  };
  var updatePlaceholderVisibility = function updatePlaceholderVisibility2() {
    var forceHide = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var placeholderElement = EDITOR_TO_PLACEHOLDER_ELEMENT.get(editor);
    if (!placeholderElement) {
      return;
    }
    if (hasPendingDiffs() || forceHide) {
      placeholderElement.style.display = "none";
      return;
    }
    placeholderElement.style.removeProperty("display");
  };
  var storeDiff = (path, diff) => {
    var _EDITOR_TO_PENDING_DI4;
    var pendingDiffs = (_EDITOR_TO_PENDING_DI4 = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI4 !== void 0 ? _EDITOR_TO_PENDING_DI4 : [];
    EDITOR_TO_PENDING_DIFFS.set(editor, pendingDiffs);
    var target = Node.leaf(editor, path);
    var idx = pendingDiffs.findIndex((change) => Path.equals(change.path, path));
    if (idx < 0) {
      var normalized = normalizeStringDiff(target.text, diff);
      if (normalized) {
        pendingDiffs.push({
          path,
          diff,
          id: idCounter++
        });
      }
      updatePlaceholderVisibility();
      return;
    }
    var merged = mergeStringDiffs(target.text, pendingDiffs[idx].diff, diff);
    if (!merged) {
      pendingDiffs.splice(idx, 1);
      updatePlaceholderVisibility();
      return;
    }
    pendingDiffs[idx] = _objectSpread$32(_objectSpread$32({}, pendingDiffs[idx]), {}, {
      diff: merged
    });
  };
  var scheduleAction = function scheduleAction2(run) {
    var {
      at
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    insertPositionHint = false;
    EDITOR_TO_PENDING_SELECTION.delete(editor);
    scheduleOnDOMSelectionChange.cancel();
    onDOMSelectionChange.cancel();
    if (hasPendingAction()) {
      flush();
    }
    EDITOR_TO_PENDING_ACTION.set(editor, {
      at,
      run
    });
    actionTimeoutId = setTimeout(flush);
  };
  var handleDOMBeforeInput = (event) => {
    var _targetRange2;
    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }
    var {
      inputType: type
    } = event;
    var targetRange2 = null;
    var data = event.dataTransfer || event.data || void 0;
    if (insertPositionHint !== false && type !== "insertText" && type !== "insertCompositionText") {
      insertPositionHint = false;
    }
    var [nativeTargetRange] = event.getTargetRanges();
    if (nativeTargetRange) {
      targetRange2 = ReactEditor.toSlateRange(editor, nativeTargetRange, {
        exactMatch: false,
        suppressThrow: true
      });
    }
    var window2 = ReactEditor.getWindow(editor);
    var domSelection = window2.getSelection();
    if (!targetRange2 && domSelection) {
      nativeTargetRange = domSelection;
      targetRange2 = ReactEditor.toSlateRange(editor, domSelection, {
        exactMatch: false,
        suppressThrow: true
      });
    }
    targetRange2 = (_targetRange2 = targetRange2) !== null && _targetRange2 !== void 0 ? _targetRange2 : editor.selection;
    if (!targetRange2) {
      return;
    }
    if (Range.isExpanded(targetRange2) && type.startsWith("delete")) {
      var [start, end] = Range.edges(targetRange2);
      var leaf = Node.leaf(editor, start.path);
      if (leaf.text.length === start.offset && end.offset === 0) {
        var next = Editor.next(editor, {
          at: start.path,
          match: Text2.isText
        });
        if (next && Path.equals(next[1], end.path)) {
          targetRange2 = {
            anchor: end,
            focus: end
          };
        }
      }
    }
    if (Range.isExpanded(targetRange2) && type.startsWith("delete")) {
      if (Path.equals(targetRange2.anchor.path, targetRange2.focus.path)) {
        var [_start, _end] = Range.edges(targetRange2);
        return storeDiff(targetRange2.anchor.path, {
          text: "",
          end: _end.offset,
          start: _start.offset
        });
      }
      var direction = type.endsWith("Backward") ? "backward" : "forward";
      return scheduleAction(() => Editor.deleteFragment(editor, {
        direction
      }), {
        at: targetRange2
      });
    }
    switch (type) {
      case "deleteByComposition":
      case "deleteByCut":
      case "deleteByDrag": {
        return scheduleAction(() => Editor.deleteFragment(editor), {
          at: targetRange2
        });
      }
      case "deleteContent":
      case "deleteContentForward": {
        var {
          anchor
        } = targetRange2;
        if (Range.isCollapsed(targetRange2)) {
          var targetNode = Node.leaf(editor, anchor.path);
          if (anchor.offset < targetNode.text.length) {
            return storeDiff(anchor.path, {
              text: "",
              start: anchor.offset,
              end: anchor.offset + 1
            });
          }
        }
        return scheduleAction(() => Editor.deleteForward(editor), {
          at: targetRange2
        });
      }
      case "deleteContentBackward": {
        var _nativeTargetRange;
        var {
          anchor: _anchor
        } = targetRange2;
        var nativeCollapsed = isDOMSelection(nativeTargetRange) ? nativeTargetRange.isCollapsed : !!((_nativeTargetRange = nativeTargetRange) !== null && _nativeTargetRange !== void 0 && _nativeTargetRange.collapsed);
        if (nativeCollapsed && Range.isCollapsed(targetRange2) && _anchor.offset > 0) {
          return storeDiff(_anchor.path, {
            text: "",
            start: _anchor.offset - 1,
            end: _anchor.offset
          });
        }
        return scheduleAction(() => Editor.deleteBackward(editor), {
          at: targetRange2
        });
      }
      case "deleteEntireSoftLine": {
        return scheduleAction(() => {
          Editor.deleteBackward(editor, {
            unit: "line"
          });
          Editor.deleteForward(editor, {
            unit: "line"
          });
        }, {
          at: targetRange2
        });
      }
      case "deleteHardLineBackward": {
        return scheduleAction(() => Editor.deleteBackward(editor, {
          unit: "block"
        }), {
          at: targetRange2
        });
      }
      case "deleteSoftLineBackward": {
        return scheduleAction(() => Editor.deleteBackward(editor, {
          unit: "line"
        }), {
          at: targetRange2
        });
      }
      case "deleteHardLineForward": {
        return scheduleAction(() => Editor.deleteForward(editor, {
          unit: "block"
        }), {
          at: targetRange2
        });
      }
      case "deleteSoftLineForward": {
        return scheduleAction(() => Editor.deleteForward(editor, {
          unit: "line"
        }), {
          at: targetRange2
        });
      }
      case "deleteWordBackward": {
        return scheduleAction(() => Editor.deleteBackward(editor, {
          unit: "word"
        }), {
          at: targetRange2
        });
      }
      case "deleteWordForward": {
        return scheduleAction(() => Editor.deleteForward(editor, {
          unit: "word"
        }), {
          at: targetRange2
        });
      }
      case "insertLineBreak": {
        return scheduleAction(() => Editor.insertSoftBreak(editor), {
          at: targetRange2
        });
      }
      case "insertParagraph": {
        return scheduleAction(() => Editor.insertBreak(editor), {
          at: targetRange2
        });
      }
      case "insertCompositionText":
      case "deleteCompositionText":
      case "insertFromComposition":
      case "insertFromDrop":
      case "insertFromPaste":
      case "insertFromYank":
      case "insertReplacementText":
      case "insertText": {
        if ((data === null || data === void 0 ? void 0 : data.constructor.name) === "DataTransfer") {
          return scheduleAction(() => ReactEditor.insertData(editor, data), {
            at: targetRange2
          });
        }
        if (typeof data === "string" && data.includes("\n")) {
          return scheduleAction(() => Editor.insertSoftBreak(editor), {
            at: Range.end(targetRange2)
          });
        }
        var text = data !== null && data !== void 0 ? data : "";
        if (EDITOR_TO_PENDING_INSERTION_MARKS.get(editor)) {
          text = text.replace("\uFEFF", "");
        }
        if (Path.equals(targetRange2.anchor.path, targetRange2.focus.path)) {
          var [_start2, _end2] = Range.edges(targetRange2);
          var diff = {
            start: _start2.offset,
            end: _end2.offset,
            text
          };
          if (text && insertPositionHint && type === "insertCompositionText") {
            var hintPosition = insertPositionHint.start + insertPositionHint.text.search(/\S|$/);
            var diffPosition = diff.start + diff.text.search(/\S|$/);
            if (diffPosition === hintPosition + 1 && diff.end === insertPositionHint.start + insertPositionHint.text.length) {
              diff.start -= 1;
              insertPositionHint = null;
              scheduleFlush();
            } else {
              insertPositionHint = false;
            }
          } else if (type === "insertText") {
            if (insertPositionHint === null) {
              insertPositionHint = diff;
            } else if (insertPositionHint && Range.isCollapsed(targetRange2) && insertPositionHint.end + insertPositionHint.text.length === _start2.offset) {
              insertPositionHint = _objectSpread$32(_objectSpread$32({}, insertPositionHint), {}, {
                text: insertPositionHint.text + text
              });
            } else {
              insertPositionHint = false;
            }
          } else {
            insertPositionHint = false;
          }
          storeDiff(_start2.path, diff);
          return;
        }
        return scheduleAction(() => Editor.insertText(editor, text), {
          at: targetRange2
        });
      }
    }
  };
  var hasPendingAction = () => {
    return !!EDITOR_TO_PENDING_ACTION.get(editor);
  };
  var hasPendingDiffs = () => {
    var _EDITOR_TO_PENDING_DI5;
    return !!((_EDITOR_TO_PENDING_DI5 = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI5 !== void 0 && _EDITOR_TO_PENDING_DI5.length);
  };
  var hasPendingChanges = () => {
    return hasPendingAction() || hasPendingDiffs();
  };
  var isFlushing = () => {
    return flushing;
  };
  var handleUserSelect = (range) => {
    EDITOR_TO_PENDING_SELECTION.set(editor, range);
    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }
    var {
      selection
    } = editor;
    if (!range) {
      return;
    }
    var pathChanged = !selection || !Path.equals(selection.anchor.path, range.anchor.path);
    var parentPathChanged = !selection || !Path.equals(selection.anchor.path.slice(0, -1), range.anchor.path.slice(0, -1));
    if (pathChanged && insertPositionHint || parentPathChanged) {
      insertPositionHint = false;
    }
    if (pathChanged || !hasPendingDiffs()) {
      flushTimeoutId = setTimeout(flush, FLUSH_DELAY);
    }
  };
  var handleInput = () => {
    if (hasPendingAction() || !hasPendingDiffs()) {
      flush();
    }
  };
  var handleKeyDown = (_2) => {
    if (!hasPendingDiffs()) {
      updatePlaceholderVisibility(true);
      setTimeout(updatePlaceholderVisibility);
    }
  };
  var scheduleFlush = () => {
    if (!hasPendingAction()) {
      actionTimeoutId = setTimeout(flush);
    }
  };
  var handleDomMutations = (mutations) => {
    if (hasPendingDiffs() || hasPendingAction()) {
      return;
    }
    if (mutations.some((mutation) => isTrackedMutation(editor, mutation, mutations))) {
      var _EDITOR_TO_FORCE_REND;
      (_EDITOR_TO_FORCE_REND = EDITOR_TO_FORCE_RENDER.get(editor)) === null || _EDITOR_TO_FORCE_REND === void 0 ? void 0 : _EDITOR_TO_FORCE_REND();
    }
  };
  return {
    flush,
    scheduleFlush,
    hasPendingDiffs,
    hasPendingAction,
    hasPendingChanges,
    isFlushing,
    handleUserSelect,
    handleCompositionEnd,
    handleCompositionStart,
    handleDOMBeforeInput,
    handleKeyDown,
    handleDomMutations,
    handleInput
  };
}
function useIsMounted() {
  var isMountedRef = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return isMountedRef.current;
}
function useMutationObserver(node, callback, options) {
  var [mutationObserver] = (0, import_react.useState)(() => new MutationObserver(callback));
  useIsomorphicLayoutEffect(() => {
    mutationObserver.takeRecords();
  });
  (0, import_react.useEffect)(() => {
    if (!node.current) {
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    }
    mutationObserver.observe(node.current, options);
    return () => mutationObserver.disconnect();
  }, []);
}
var _excluded$22 = ["node"];
function ownKeys$22(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$22(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
      ownKeys$22(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$22(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var MUTATION_OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true
};
function useAndroidInputManager(_ref) {
  var {
    node
  } = _ref, options = _objectWithoutProperties2(_ref, _excluded$22);
  if (!IS_ANDROID) {
    return null;
  }
  var editor = useSlateStatic();
  var isMounted = useIsMounted();
  var [inputManager] = (0, import_react.useState)(() => createAndroidInputManager(_objectSpread$22({
    editor
  }, options)));
  useMutationObserver(node, inputManager.handleDomMutations, MUTATION_OBSERVER_CONFIG);
  EDITOR_TO_SCHEDULE_FLUSH.set(editor, inputManager.scheduleFlush);
  if (isMounted) {
    inputManager.flush();
  }
  return inputManager;
}
function useTrackUserInput() {
  var editor = useSlateStatic();
  var receivedUserInput = (0, import_react.useRef)(false);
  var animationFrameIdRef = (0, import_react.useRef)(0);
  var onUserInput = (0, import_react.useCallback)(() => {
    if (receivedUserInput.current) {
      return;
    }
    receivedUserInput.current = true;
    var window2 = ReactEditor.getWindow(editor);
    window2.cancelAnimationFrame(animationFrameIdRef.current);
    animationFrameIdRef.current = window2.requestAnimationFrame(() => {
      receivedUserInput.current = false;
    });
  }, []);
  (0, import_react.useEffect)(() => () => cancelAnimationFrame(animationFrameIdRef.current), []);
  return {
    receivedUserInput,
    onUserInput
  };
}
var _excluded$12 = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as"];
var _excluded22 = ["text"];
function ownKeys$12(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$12(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
      ownKeys$12(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$12(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Children = (props) => /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, useChildren(props));
var mountedCount = 0;
var Editable = (props) => {
  var {
    autoFocus,
    decorate = defaultDecorate,
    onDOMBeforeInput: propsOnDOMBeforeInput,
    placeholder,
    readOnly = false,
    renderElement,
    renderLeaf,
    renderPlaceholder = (props2) => /* @__PURE__ */ import_react.default.createElement(DefaultPlaceholder, Object.assign({}, props2)),
    scrollSelectionIntoView = defaultScrollSelectionIntoView,
    style = {},
    as: Component2 = "div"
  } = props, attributes = _objectWithoutProperties2(props, _excluded$12);
  var editor = useSlate();
  var [isComposing, setIsComposing] = (0, import_react.useState)(false);
  var ref = (0, import_react.useRef)(null);
  var deferredOperations = (0, import_react.useRef)([]);
  var {
    onUserInput,
    receivedUserInput
  } = useTrackUserInput();
  var [, forceRender] = (0, import_react.useReducer)((s2) => s2 + 1, 0);
  EDITOR_TO_FORCE_RENDER.set(editor, forceRender);
  IS_READ_ONLY.set(editor, readOnly);
  var state = (0, import_react.useMemo)(() => ({
    isDraggingInternally: false,
    isUpdatingSelection: false,
    latestElement: null,
    hasMarkPlaceholder: false
  }), []);
  (0, import_react.useEffect)(() => {
    if (ref.current && autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);
  var onDOMSelectionChange = (0, import_react.useCallback)((0, import_throttle.default)(() => {
    if ((IS_ANDROID || !ReactEditor.isComposing(editor)) && (!state.isUpdatingSelection || androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing()) && !state.isDraggingInternally) {
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      var {
        activeElement
      } = root;
      var el = ReactEditor.toDOMNode(editor, editor);
      var domSelection = root.getSelection();
      if (activeElement === el) {
        state.latestElement = activeElement;
        IS_FOCUSED.set(editor, true);
      } else {
        IS_FOCUSED.delete(editor);
      }
      if (!domSelection) {
        return Transforms.deselect(editor);
      }
      var {
        anchorNode,
        focusNode
      } = domSelection;
      var anchorNodeSelectable = ReactEditor.hasEditableTarget(editor, anchorNode) || ReactEditor.isTargetInsideNonReadonlyVoid(editor, anchorNode);
      var focusNodeSelectable = ReactEditor.hasEditableTarget(editor, focusNode) || ReactEditor.isTargetInsideNonReadonlyVoid(editor, focusNode);
      if (anchorNodeSelectable && focusNodeSelectable) {
        var range = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: true
        });
        if (range) {
          if (!ReactEditor.isComposing(editor) && !(androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.hasPendingChanges()) && !(androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing())) {
            Transforms.select(editor, range);
          } else {
            androidInputManager === null || androidInputManager === void 0 ? void 0 : androidInputManager.handleUserSelect(range);
          }
        }
      }
      if (readOnly && (!anchorNodeSelectable || !focusNodeSelectable)) {
        Transforms.deselect(editor);
      }
    }
  }, 100), [readOnly]);
  var scheduleOnDOMSelectionChange = (0, import_react.useMemo)(() => (0, import_debounce.default)(onDOMSelectionChange, 0), [onDOMSelectionChange]);
  var androidInputManager = useAndroidInputManager({
    node: ref,
    onDOMSelectionChange,
    scheduleOnDOMSelectionChange
  });
  useIsomorphicLayoutEffect(() => {
    var window2;
    if (ref.current && (window2 = getDefaultView(ref.current))) {
      EDITOR_TO_WINDOW.set(editor, window2);
      EDITOR_TO_ELEMENT.set(editor, ref.current);
      NODE_TO_ELEMENT.set(editor, ref.current);
      ELEMENT_TO_NODE.set(ref.current, editor);
    } else {
      NODE_TO_ELEMENT.delete(editor);
    }
    var {
      selection
    } = editor;
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    var domSelection = root.getSelection();
    if (!domSelection || !ReactEditor.isFocused(editor) || androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.hasPendingAction()) {
      return;
    }
    var setDomSelection = (forceChange) => {
      var hasDomSelection = domSelection.type !== "None";
      if (!selection && !hasDomSelection) {
        return;
      }
      var editorElement = EDITOR_TO_ELEMENT.get(editor);
      var hasDomSelectionInEditor = false;
      if (editorElement.contains(domSelection.anchorNode) && editorElement.contains(domSelection.focusNode)) {
        hasDomSelectionInEditor = true;
      }
      if (hasDomSelection && hasDomSelectionInEditor && selection && !forceChange) {
        var slateRange = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: true,
          suppressThrow: true
        });
        if (slateRange && Range.equals(slateRange, selection)) {
          var _anchorNode$parentEle;
          if (!state.hasMarkPlaceholder) {
            return;
          }
          var {
            anchorNode
          } = domSelection;
          if (anchorNode !== null && anchorNode !== void 0 && (_anchorNode$parentEle = anchorNode.parentElement) !== null && _anchorNode$parentEle !== void 0 && _anchorNode$parentEle.hasAttribute("data-slate-mark-placeholder")) {
            return;
          }
        }
      }
      if (selection && !ReactEditor.hasRange(editor, selection)) {
        editor.selection = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: true
        });
        return;
      }
      state.isUpdatingSelection = true;
      var newDomRange2 = selection && ReactEditor.toDOMRange(editor, selection);
      if (newDomRange2) {
        if (Range.isBackward(selection)) {
          domSelection.setBaseAndExtent(newDomRange2.endContainer, newDomRange2.endOffset, newDomRange2.startContainer, newDomRange2.startOffset);
        } else {
          domSelection.setBaseAndExtent(newDomRange2.startContainer, newDomRange2.startOffset, newDomRange2.endContainer, newDomRange2.endOffset);
        }
        scrollSelectionIntoView(editor, newDomRange2);
      } else {
        domSelection.removeAllRanges();
      }
      return newDomRange2;
    };
    var newDomRange = setDomSelection();
    var ensureSelection = (androidInputManager === null || androidInputManager === void 0 ? void 0 : androidInputManager.isFlushing()) === "action";
    if (!IS_ANDROID || !ensureSelection) {
      setTimeout(() => {
        if (newDomRange && IS_FIREFOX) {
          var el = ReactEditor.toDOMNode(editor, editor);
          el.focus();
        }
        state.isUpdatingSelection = false;
      });
      return;
    }
    var timeoutId = null;
    var animationFrameId = requestAnimationFrame(() => {
      if (ensureSelection) {
        var ensureDomSelection = (forceChange) => {
          try {
            var el = ReactEditor.toDOMNode(editor, editor);
            el.focus();
            setDomSelection(forceChange);
          } catch (e2) {
          }
        };
        ensureDomSelection();
        timeoutId = setTimeout(() => {
          ensureDomSelection(true);
          state.isUpdatingSelection = false;
        });
      }
    });
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  });
  var onDOMBeforeInput = (0, import_react.useCallback)((event) => {
    onUserInput();
    if (!readOnly && ReactEditor.hasEditableTarget(editor, event.target) && !isDOMEventHandled(event, propsOnDOMBeforeInput)) {
      var _EDITOR_TO_USER_SELEC;
      if (androidInputManager) {
        return androidInputManager.handleDOMBeforeInput(event);
      }
      scheduleOnDOMSelectionChange.flush();
      onDOMSelectionChange.flush();
      var {
        selection
      } = editor;
      var {
        inputType: type
      } = event;
      var data = event.dataTransfer || event.data || void 0;
      var isCompositionChange = type === "insertCompositionText" || type === "deleteCompositionText";
      if (isCompositionChange && ReactEditor.isComposing(editor)) {
        return;
      }
      var native = false;
      if (type === "insertText" && selection && Range.isCollapsed(selection) && event.data && event.data.length === 1 && /[a-z ]/i.test(event.data) && selection.anchor.offset !== 0) {
        var _node$parentElement, _window$getComputedSt;
        native = true;
        if (editor.marks) {
          native = false;
        }
        var {
          anchor: anchor2
        } = selection;
        var [node, offset] = ReactEditor.toDOMPoint(editor, anchor2);
        var anchorNode = (_node$parentElement = node.parentElement) === null || _node$parentElement === void 0 ? void 0 : _node$parentElement.closest("a");
        var window2 = ReactEditor.getWindow(editor);
        if (native && anchorNode && ReactEditor.hasDOMNode(editor, anchorNode)) {
          var _lastText$textContent;
          var lastText = window2 === null || window2 === void 0 ? void 0 : window2.document.createTreeWalker(anchorNode, NodeFilter.SHOW_TEXT).lastChild();
          if (lastText === node && ((_lastText$textContent = lastText.textContent) === null || _lastText$textContent === void 0 ? void 0 : _lastText$textContent.length) === offset) {
            native = false;
          }
        }
        if (native && node.parentElement && (window2 === null || window2 === void 0 ? void 0 : (_window$getComputedSt = window2.getComputedStyle(node.parentElement)) === null || _window$getComputedSt === void 0 ? void 0 : _window$getComputedSt.whiteSpace) === "pre") {
          var block = Editor.above(editor, {
            at: anchor2.path,
            match: (n4) => Editor.isBlock(editor, n4)
          });
          if (block && Node.string(block[0]).includes("	")) {
            native = false;
          }
        }
      }
      if (!type.startsWith("delete") || type.startsWith("deleteBy")) {
        var [targetRange2] = event.getTargetRanges();
        if (targetRange2) {
          var range = ReactEditor.toSlateRange(editor, targetRange2, {
            exactMatch: false,
            suppressThrow: false
          });
          if (!selection || !Range.equals(selection, range)) {
            native = false;
            var selectionRef = !isCompositionChange && editor.selection && Editor.rangeRef(editor, editor.selection);
            Transforms.select(editor, range);
            if (selectionRef) {
              EDITOR_TO_USER_SELECTION.set(editor, selectionRef);
            }
          }
        }
      }
      if (isCompositionChange) {
        return;
      }
      if (!native) {
        event.preventDefault();
      }
      if (selection && Range.isExpanded(selection) && type.startsWith("delete")) {
        var direction = type.endsWith("Backward") ? "backward" : "forward";
        Editor.deleteFragment(editor, {
          direction
        });
        return;
      }
      switch (type) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag": {
          Editor.deleteFragment(editor);
          break;
        }
        case "deleteContent":
        case "deleteContentForward": {
          Editor.deleteForward(editor);
          break;
        }
        case "deleteContentBackward": {
          Editor.deleteBackward(editor);
          break;
        }
        case "deleteEntireSoftLine": {
          Editor.deleteBackward(editor, {
            unit: "line"
          });
          Editor.deleteForward(editor, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineBackward": {
          Editor.deleteBackward(editor, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineBackward": {
          Editor.deleteBackward(editor, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineForward": {
          Editor.deleteForward(editor, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineForward": {
          Editor.deleteForward(editor, {
            unit: "line"
          });
          break;
        }
        case "deleteWordBackward": {
          Editor.deleteBackward(editor, {
            unit: "word"
          });
          break;
        }
        case "deleteWordForward": {
          Editor.deleteForward(editor, {
            unit: "word"
          });
          break;
        }
        case "insertLineBreak":
          Editor.insertSoftBreak(editor);
          break;
        case "insertParagraph": {
          Editor.insertBreak(editor);
          break;
        }
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          if (type === "insertFromComposition") {
            if (ReactEditor.isComposing(editor)) {
              setIsComposing(false);
              IS_COMPOSING.set(editor, false);
            }
          }
          if ((data === null || data === void 0 ? void 0 : data.constructor.name) === "DataTransfer") {
            ReactEditor.insertData(editor, data);
          } else if (typeof data === "string") {
            if (native) {
              deferredOperations.current.push(() => Editor.insertText(editor, data));
            } else {
              Editor.insertText(editor, data);
            }
          }
          break;
        }
      }
      var toRestore = (_EDITOR_TO_USER_SELEC = EDITOR_TO_USER_SELECTION.get(editor)) === null || _EDITOR_TO_USER_SELEC === void 0 ? void 0 : _EDITOR_TO_USER_SELEC.unref();
      EDITOR_TO_USER_SELECTION.delete(editor);
      if (toRestore && (!editor.selection || !Range.equals(editor.selection, toRestore))) {
        Transforms.select(editor, toRestore);
      }
    }
  }, [readOnly, propsOnDOMBeforeInput]);
  useIsomorphicLayoutEffect(() => {
    if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
      ref.current.addEventListener("beforeinput", onDOMBeforeInput);
    }
    return () => {
      if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
        ref.current.removeEventListener("beforeinput", onDOMBeforeInput);
      }
    };
  }, [onDOMBeforeInput]);
  useIsomorphicLayoutEffect(() => {
    var window2 = ReactEditor.getWindow(editor);
    window2.document.addEventListener("selectionchange", scheduleOnDOMSelectionChange);
    return () => {
      window2.document.removeEventListener("selectionchange", scheduleOnDOMSelectionChange);
    };
  }, [scheduleOnDOMSelectionChange]);
  var decorations = decorate([editor, []]);
  if (placeholder && editor.children.length === 1 && Array.from(Node.texts(editor)).length === 1 && Node.string(editor) === "" && !isComposing) {
    var start = Editor.start(editor, []);
    decorations.push({
      [PLACEHOLDER_SYMBOL]: true,
      placeholder,
      anchor: start,
      focus: start
    });
  }
  var {
    marks
  } = editor;
  state.hasMarkPlaceholder = false;
  if (editor.selection && Range.isCollapsed(editor.selection) && marks) {
    var {
      anchor
    } = editor.selection;
    var leaf = Node.leaf(editor, anchor.path);
    var rest = _objectWithoutProperties2(leaf, _excluded22);
    if (!Text2.equals(leaf, marks, {
      loose: true
    })) {
      state.hasMarkPlaceholder = true;
      var unset = Object.fromEntries(Object.keys(rest).map((mark) => [mark, null]));
      decorations.push(_objectSpread$12(_objectSpread$12(_objectSpread$12({
        [MARK_PLACEHOLDER_SYMBOL]: true
      }, unset), marks), {}, {
        anchor,
        focus: anchor
      }));
    }
  }
  (0, import_react.useEffect)(() => {
    setTimeout(() => {
      var {
        selection
      } = editor;
      if (selection) {
        var {
          anchor: _anchor
        } = selection;
        var _text = Node.leaf(editor, _anchor.path);
        if (marks && !Text2.equals(_text, marks, {
          loose: true
        })) {
          EDITOR_TO_PENDING_INSERTION_MARKS.set(editor, marks);
          return;
        }
      }
      EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
    });
  });
  (0, import_react.useEffect)(() => {
    mountedCount++;
    if (mountedCount === 1) {
      var defaultStylesElement = document.createElement("style");
      defaultStylesElement.setAttribute("data-slate-default-styles", "true");
      defaultStylesElement.innerHTML = ":where([data-slate-editor]) {position: relative;outline: none;white-space: pre-wrap;word-wrap: break-word;}";
      document.head.appendChild(defaultStylesElement);
    }
    return () => {
      var _document$querySelect;
      mountedCount--;
      if (mountedCount <= 0)
        (_document$querySelect = document.querySelector("style[data-slate-default-styles]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();
    };
  }, []);
  (0, import_react.useEffect)(() => {
    var styleElement = document.createElement("style");
    document.head.appendChild(styleElement);
    EDITOR_TO_STYLE_ELEMENT.set(editor, styleElement);
    return () => {
      styleElement.remove();
      EDITOR_TO_STYLE_ELEMENT.delete(editor);
    };
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(ReadOnlyContext.Provider, {
    value: readOnly
  }, /* @__PURE__ */ import_react.default.createElement(DecorateContext.Provider, {
    value: decorate
  }, /* @__PURE__ */ import_react.default.createElement(RestoreDOM, {
    node: ref,
    receivedUserInput
  }, /* @__PURE__ */ import_react.default.createElement(Component2, Object.assign({
    role: readOnly ? void 0 : "textbox",
    "aria-multiline": readOnly ? void 0 : true
  }, attributes, {
    spellCheck: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.spellCheck : false,
    autoCorrect: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.autoCorrect : "false",
    autoCapitalize: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.autoCapitalize : "false",
    "data-slate-editor": true,
    "data-slate-editor-id": editor.id,
    "data-slate-node": "value",
    contentEditable: !readOnly,
    zindex: -1,
    suppressContentEditableWarning: true,
    ref,
    style,
    onBeforeInput: (0, import_react.useCallback)((event) => {
      if (!HAS_BEFORE_INPUT_SUPPORT && !readOnly && !isEventHandled(event, attributes.onBeforeInput) && ReactEditor.hasSelectableTarget(editor, event.target)) {
        event.preventDefault();
        if (!ReactEditor.isComposing(editor)) {
          var _text2 = event.data;
          Editor.insertText(editor, _text2);
        }
      }
    }, [readOnly]),
    onInput: (0, import_react.useCallback)((event) => {
      if (androidInputManager) {
        androidInputManager.handleInput();
        return;
      }
      for (var op of deferredOperations.current) {
        op();
      }
      deferredOperations.current = [];
    }, []),
    onBlur: (0, import_react.useCallback)((event) => {
      if (readOnly || state.isUpdatingSelection || !ReactEditor.hasSelectableTarget(editor, event.target) || isEventHandled(event, attributes.onBlur)) {
        return;
      }
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      if (state.latestElement === root.activeElement) {
        return;
      }
      var {
        relatedTarget
      } = event;
      var el = ReactEditor.toDOMNode(editor, editor);
      if (relatedTarget === el) {
        return;
      }
      if (isDOMElement(relatedTarget) && relatedTarget.hasAttribute("data-slate-spacer")) {
        return;
      }
      if (relatedTarget != null && isDOMNode(relatedTarget) && ReactEditor.hasDOMNode(editor, relatedTarget)) {
        var node = ReactEditor.toSlateNode(editor, relatedTarget);
        if (Element.isElement(node) && !editor.isVoid(node)) {
          return;
        }
      }
      if (IS_SAFARI) {
        var domSelection = root.getSelection();
        domSelection === null || domSelection === void 0 ? void 0 : domSelection.removeAllRanges();
      }
      IS_FOCUSED.delete(editor);
    }, [readOnly, attributes.onBlur]),
    onClick: (0, import_react.useCallback)((event) => {
      if (ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onClick) && isDOMNode(event.target)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node);
        if (!Editor.hasPath(editor, path) || Node.get(editor, path) !== node) {
          return;
        }
        if (event.detail === TRIPLE_CLICK && path.length >= 1) {
          var blockPath = path;
          if (!Editor.isBlock(editor, node)) {
            var _block$;
            var block = Editor.above(editor, {
              match: (n4) => Editor.isBlock(editor, n4),
              at: path
            });
            blockPath = (_block$ = block === null || block === void 0 ? void 0 : block[1]) !== null && _block$ !== void 0 ? _block$ : path.slice(0, 1);
          }
          var range = Editor.range(editor, blockPath);
          Transforms.select(editor, range);
          return;
        }
        if (readOnly) {
          return;
        }
        var _start = Editor.start(editor, path);
        var end = Editor.end(editor, path);
        var startVoid = Editor.void(editor, {
          at: _start
        });
        var endVoid = Editor.void(editor, {
          at: end
        });
        if (startVoid && endVoid && Path.equals(startVoid[1], endVoid[1])) {
          var _range = Editor.range(editor, _start);
          Transforms.select(editor, _range);
        }
      }
    }, [readOnly, attributes.onClick]),
    onCompositionEnd: (0, import_react.useCallback)((event) => {
      if (ReactEditor.hasSelectableTarget(editor, event.target)) {
        if (ReactEditor.isComposing(editor)) {
          setIsComposing(false);
          IS_COMPOSING.set(editor, false);
        }
        androidInputManager === null || androidInputManager === void 0 ? void 0 : androidInputManager.handleCompositionEnd(event);
        if (isEventHandled(event, attributes.onCompositionEnd) || IS_ANDROID) {
          return;
        }
        if (!IS_SAFARI && !IS_FIREFOX_LEGACY && !IS_IOS && !IS_WECHATBROWSER && !IS_UC_MOBILE && event.data) {
          var placeholderMarks = EDITOR_TO_PENDING_INSERTION_MARKS.get(editor);
          EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
          if (placeholderMarks !== void 0) {
            EDITOR_TO_USER_MARKS.set(editor, editor.marks);
            editor.marks = placeholderMarks;
          }
          Editor.insertText(editor, event.data);
          var userMarks = EDITOR_TO_USER_MARKS.get(editor);
          EDITOR_TO_USER_MARKS.delete(editor);
          if (userMarks !== void 0) {
            editor.marks = userMarks;
          }
        }
      }
    }, [attributes.onCompositionEnd]),
    onCompositionUpdate: (0, import_react.useCallback)((event) => {
      if (ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionUpdate)) {
        if (!ReactEditor.isComposing(editor)) {
          setIsComposing(true);
          IS_COMPOSING.set(editor, true);
        }
      }
    }, [attributes.onCompositionUpdate]),
    onCompositionStart: (0, import_react.useCallback)((event) => {
      if (ReactEditor.hasSelectableTarget(editor, event.target)) {
        androidInputManager === null || androidInputManager === void 0 ? void 0 : androidInputManager.handleCompositionStart(event);
        if (isEventHandled(event, attributes.onCompositionStart) || IS_ANDROID) {
          return;
        }
        setIsComposing(true);
        var {
          selection
        } = editor;
        if (selection) {
          if (Range.isExpanded(selection)) {
            Editor.deleteFragment(editor);
            return;
          }
          var inline = Editor.above(editor, {
            match: (n4) => Editor.isInline(editor, n4),
            mode: "highest"
          });
          if (inline) {
            var [, inlinePath] = inline;
            if (Editor.isEnd(editor, selection.anchor, inlinePath)) {
              var point = Editor.after(editor, inlinePath);
              Transforms.setSelection(editor, {
                anchor: point,
                focus: point
              });
            }
          }
        }
      }
    }, [attributes.onCompositionStart]),
    onCopy: (0, import_react.useCallback)((event) => {
      if (ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCopy)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, "copy");
      }
    }, [attributes.onCopy]),
    onCut: (0, import_react.useCallback)((event) => {
      if (!readOnly && ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCut)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, "cut");
        var {
          selection
        } = editor;
        if (selection) {
          if (Range.isExpanded(selection)) {
            Editor.deleteFragment(editor);
          } else {
            var node = Node.parent(editor, selection.anchor.path);
            if (Editor.isVoid(editor, node)) {
              Transforms.delete(editor);
            }
          }
        }
      }
    }, [readOnly, attributes.onCut]),
    onDragOver: (0, import_react.useCallback)((event) => {
      if (ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragOver)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        if (Editor.isVoid(editor, node)) {
          event.preventDefault();
        }
      }
    }, [attributes.onDragOver]),
    onDragStart: (0, import_react.useCallback)((event) => {
      if (!readOnly && ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragStart)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node);
        var voidMatch = Editor.isVoid(editor, node) || Editor.void(editor, {
          at: path,
          voids: true
        });
        if (voidMatch) {
          var range = Editor.range(editor, path);
          Transforms.select(editor, range);
        }
        state.isDraggingInternally = true;
        ReactEditor.setFragmentData(editor, event.dataTransfer, "drag");
      }
    }, [readOnly, attributes.onDragStart]),
    onDrop: (0, import_react.useCallback)((event) => {
      if (!readOnly && ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDrop)) {
        event.preventDefault();
        var draggedRange = editor.selection;
        var range = ReactEditor.findEventRange(editor, event);
        var data = event.dataTransfer;
        Transforms.select(editor, range);
        if (state.isDraggingInternally) {
          if (draggedRange && !Range.equals(draggedRange, range) && !Editor.void(editor, {
            at: range,
            voids: true
          })) {
            Transforms.delete(editor, {
              at: draggedRange
            });
          }
        }
        ReactEditor.insertData(editor, data);
        if (!ReactEditor.isFocused(editor)) {
          ReactEditor.focus(editor);
        }
      }
      state.isDraggingInternally = false;
    }, [readOnly, attributes.onDrop]),
    onDragEnd: (0, import_react.useCallback)((event) => {
      if (!readOnly && state.isDraggingInternally && attributes.onDragEnd && ReactEditor.hasTarget(editor, event.target)) {
        attributes.onDragEnd(event);
      }
      state.isDraggingInternally = false;
    }, [readOnly, attributes.onDragEnd]),
    onFocus: (0, import_react.useCallback)((event) => {
      if (!readOnly && !state.isUpdatingSelection && ReactEditor.hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onFocus)) {
        var el = ReactEditor.toDOMNode(editor, editor);
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        state.latestElement = root.activeElement;
        if (IS_FIREFOX && event.target !== el) {
          el.focus();
          return;
        }
        IS_FOCUSED.set(editor, true);
      }
    }, [readOnly, attributes.onFocus]),
    onKeyDown: (0, import_react.useCallback)((event) => {
      if (!readOnly && ReactEditor.hasEditableTarget(editor, event.target)) {
        androidInputManager === null || androidInputManager === void 0 ? void 0 : androidInputManager.handleKeyDown(event);
        var {
          nativeEvent
        } = event;
        if (ReactEditor.isComposing(editor) && nativeEvent.isComposing === false) {
          IS_COMPOSING.set(editor, false);
          setIsComposing(false);
        }
        if (isEventHandled(event, attributes.onKeyDown) || ReactEditor.isComposing(editor)) {
          return;
        }
        var {
          selection
        } = editor;
        var element = editor.children[selection !== null ? selection.focus.path[0] : 0];
        var isRTL = (0, import_direction.default)(Node.string(element)) === "rtl";
        if (Hotkeys.isRedo(nativeEvent)) {
          event.preventDefault();
          var maybeHistoryEditor = editor;
          if (typeof maybeHistoryEditor.redo === "function") {
            maybeHistoryEditor.redo();
          }
          return;
        }
        if (Hotkeys.isUndo(nativeEvent)) {
          event.preventDefault();
          var _maybeHistoryEditor = editor;
          if (typeof _maybeHistoryEditor.undo === "function") {
            _maybeHistoryEditor.undo();
          }
          return;
        }
        if (Hotkeys.isMoveLineBackward(nativeEvent)) {
          event.preventDefault();
          Transforms.move(editor, {
            unit: "line",
            reverse: true
          });
          return;
        }
        if (Hotkeys.isMoveLineForward(nativeEvent)) {
          event.preventDefault();
          Transforms.move(editor, {
            unit: "line"
          });
          return;
        }
        if (Hotkeys.isExtendLineBackward(nativeEvent)) {
          event.preventDefault();
          Transforms.move(editor, {
            unit: "line",
            edge: "focus",
            reverse: true
          });
          return;
        }
        if (Hotkeys.isExtendLineForward(nativeEvent)) {
          event.preventDefault();
          Transforms.move(editor, {
            unit: "line",
            edge: "focus"
          });
          return;
        }
        if (Hotkeys.isMoveBackward(nativeEvent)) {
          event.preventDefault();
          if (selection && Range.isCollapsed(selection)) {
            Transforms.move(editor, {
              reverse: !isRTL
            });
          } else {
            Transforms.collapse(editor, {
              edge: "start"
            });
          }
          return;
        }
        if (Hotkeys.isMoveForward(nativeEvent)) {
          event.preventDefault();
          if (selection && Range.isCollapsed(selection)) {
            Transforms.move(editor, {
              reverse: isRTL
            });
          } else {
            Transforms.collapse(editor, {
              edge: "end"
            });
          }
          return;
        }
        if (Hotkeys.isMoveWordBackward(nativeEvent)) {
          event.preventDefault();
          if (selection && Range.isExpanded(selection)) {
            Transforms.collapse(editor, {
              edge: "focus"
            });
          }
          Transforms.move(editor, {
            unit: "word",
            reverse: !isRTL
          });
          return;
        }
        if (Hotkeys.isMoveWordForward(nativeEvent)) {
          event.preventDefault();
          if (selection && Range.isExpanded(selection)) {
            Transforms.collapse(editor, {
              edge: "focus"
            });
          }
          Transforms.move(editor, {
            unit: "word",
            reverse: isRTL
          });
          return;
        }
        if (!HAS_BEFORE_INPUT_SUPPORT) {
          if (Hotkeys.isBold(nativeEvent) || Hotkeys.isItalic(nativeEvent) || Hotkeys.isTransposeCharacter(nativeEvent)) {
            event.preventDefault();
            return;
          }
          if (Hotkeys.isSoftBreak(nativeEvent)) {
            event.preventDefault();
            Editor.insertSoftBreak(editor);
            return;
          }
          if (Hotkeys.isSplitBlock(nativeEvent)) {
            event.preventDefault();
            Editor.insertBreak(editor);
            return;
          }
          if (Hotkeys.isDeleteBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "backward"
              });
            } else {
              Editor.deleteBackward(editor);
            }
            return;
          }
          if (Hotkeys.isDeleteForward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "forward"
              });
            } else {
              Editor.deleteForward(editor);
            }
            return;
          }
          if (Hotkeys.isDeleteLineBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "backward"
              });
            } else {
              Editor.deleteBackward(editor, {
                unit: "line"
              });
            }
            return;
          }
          if (Hotkeys.isDeleteLineForward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "forward"
              });
            } else {
              Editor.deleteForward(editor, {
                unit: "line"
              });
            }
            return;
          }
          if (Hotkeys.isDeleteWordBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "backward"
              });
            } else {
              Editor.deleteBackward(editor, {
                unit: "word"
              });
            }
            return;
          }
          if (Hotkeys.isDeleteWordForward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "forward"
              });
            } else {
              Editor.deleteForward(editor, {
                unit: "word"
              });
            }
            return;
          }
        } else {
          if (IS_CHROME || IS_SAFARI) {
            if (selection && (Hotkeys.isDeleteBackward(nativeEvent) || Hotkeys.isDeleteForward(nativeEvent)) && Range.isCollapsed(selection)) {
              var currentNode = Node.parent(editor, selection.anchor.path);
              if (Element.isElement(currentNode) && Editor.isVoid(editor, currentNode) && (Editor.isInline(editor, currentNode) || Editor.isBlock(editor, currentNode))) {
                event.preventDefault();
                Editor.deleteBackward(editor, {
                  unit: "block"
                });
                return;
              }
            }
          }
        }
      }
    }, [readOnly, attributes.onKeyDown]),
    onPaste: (0, import_react.useCallback)((event) => {
      if (!readOnly && ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onPaste)) {
        if (!HAS_BEFORE_INPUT_SUPPORT || isPlainTextOnlyPaste(event.nativeEvent)) {
          event.preventDefault();
          ReactEditor.insertData(editor, event.clipboardData);
        }
      }
    }, [readOnly, attributes.onPaste])
  }), /* @__PURE__ */ import_react.default.createElement(Children, {
    decorations,
    node: editor,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection: editor.selection
  })))));
};
var DefaultPlaceholder = (_ref) => {
  var {
    attributes,
    children
  } = _ref;
  return /* @__PURE__ */ import_react.default.createElement("span", Object.assign({}, attributes), children, IS_ANDROID && /* @__PURE__ */ import_react.default.createElement("br", null));
};
var defaultDecorate = () => [];
var defaultScrollSelectionIntoView = (editor, domRange) => {
  if (domRange.getBoundingClientRect && (!editor.selection || editor.selection && Range.isCollapsed(editor.selection))) {
    var leafEl = domRange.startContainer.parentElement;
    leafEl.getBoundingClientRect = domRange.getBoundingClientRect.bind(domRange);
    es_default(leafEl, {
      scrollMode: "if-needed"
    });
    delete leafEl.getBoundingClientRect;
  }
};
var isEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  }
  var shouldTreatEventAsHandled = handler(event);
  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }
  return event.isDefaultPrevented() || event.isPropagationStopped();
};
var isDOMEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  }
  var shouldTreatEventAsHandled = handler(event);
  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }
  return event.defaultPrevented;
};
var FocusedContext = /* @__PURE__ */ (0, import_react.createContext)(false);
var SlateSelectorContext = /* @__PURE__ */ (0, import_react.createContext)({});
function getSelectorContext(editor) {
  var eventListeners = (0, import_react.useRef)([]).current;
  var slateRef = (0, import_react.useRef)({
    editor
  }).current;
  var onChange = (0, import_react.useCallback)((editor2) => {
    slateRef.editor = editor2;
    eventListeners.forEach((listener) => listener(editor2));
  }, []);
  var selectorContext = (0, import_react.useMemo)(() => {
    return {
      getSlate: () => slateRef.editor,
      addEventListener: (callback) => {
        eventListeners.push(callback);
        return () => {
          eventListeners.splice(eventListeners.indexOf(callback), 1);
        };
      }
    };
  }, [eventListeners, slateRef]);
  return {
    selectorContext,
    onChange
  };
}
var _excluded3 = ["editor", "children", "onChange", "value"];
var Slate = (props) => {
  var {
    editor,
    children,
    onChange,
    value
  } = props, rest = _objectWithoutProperties2(props, _excluded3);
  var unmountRef = (0, import_react.useRef)(false);
  var [context, setContext] = import_react.default.useState(() => {
    if (!Node.isNodeList(value)) {
      throw new Error("[Slate] value is invalid! Expected a list of elements but got: ".concat(Scrubber.stringify(value)));
    }
    if (!Editor.isEditor(editor)) {
      throw new Error("[Slate] editor is invalid! You passed: ".concat(Scrubber.stringify(editor)));
    }
    editor.children = value;
    Object.assign(editor, rest);
    return {
      v: 0,
      editor
    };
  });
  var {
    selectorContext,
    onChange: handleSelectorChange
  } = getSelectorContext(editor);
  var onContextChange = (0, import_react.useCallback)(() => {
    if (onChange) {
      onChange(editor.children);
    }
    setContext((prevContext) => ({
      v: prevContext.v + 1,
      editor
    }));
    handleSelectorChange(editor);
  }, [onChange]);
  EDITOR_TO_ON_CHANGE.set(editor, onContextChange);
  (0, import_react.useEffect)(() => {
    return () => {
      EDITOR_TO_ON_CHANGE.set(editor, () => {
      });
      unmountRef.current = true;
    };
  }, []);
  var [isFocused, setIsFocused] = (0, import_react.useState)(ReactEditor.isFocused(editor));
  (0, import_react.useEffect)(() => {
    setIsFocused(ReactEditor.isFocused(editor));
  });
  useIsomorphicLayoutEffect(() => {
    var fn2 = () => setIsFocused(ReactEditor.isFocused(editor));
    if (IS_REACT_VERSION_17_OR_ABOVE) {
      document.addEventListener("focusin", fn2);
      document.addEventListener("focusout", fn2);
      return () => {
        document.removeEventListener("focusin", fn2);
        document.removeEventListener("focusout", fn2);
      };
    } else {
      document.addEventListener("focus", fn2, true);
      document.addEventListener("blur", fn2, true);
      return () => {
        document.removeEventListener("focus", fn2, true);
        document.removeEventListener("blur", fn2, true);
      };
    }
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(SlateSelectorContext.Provider, {
    value: selectorContext
  }, /* @__PURE__ */ import_react.default.createElement(SlateContext.Provider, {
    value: context
  }, /* @__PURE__ */ import_react.default.createElement(EditorContext.Provider, {
    value: context.editor
  }, /* @__PURE__ */ import_react.default.createElement(FocusedContext.Provider, {
    value: isFocused
  }, children))));
};
var doRectsIntersect = (rect, compareRect) => {
  var middle = (compareRect.top + compareRect.bottom) / 2;
  return rect.top <= middle && rect.bottom >= middle;
};
var areRangesSameLine = (editor, range1, range2) => {
  var rect1 = ReactEditor.toDOMRange(editor, range1).getBoundingClientRect();
  var rect2 = ReactEditor.toDOMRange(editor, range2).getBoundingClientRect();
  return doRectsIntersect(rect1, rect2) && doRectsIntersect(rect2, rect1);
};
var findCurrentLineRange = (editor, parentRange) => {
  var parentRangeBoundary = Editor.range(editor, Range.end(parentRange));
  var positions = Array.from(Editor.positions(editor, {
    at: parentRange
  }));
  var left = 0;
  var right = positions.length;
  var middle = Math.floor(right / 2);
  if (areRangesSameLine(editor, Editor.range(editor, positions[left]), parentRangeBoundary)) {
    return Editor.range(editor, positions[left], parentRangeBoundary);
  }
  if (positions.length < 2) {
    return Editor.range(editor, positions[positions.length - 1], parentRangeBoundary);
  }
  while (middle !== positions.length && middle !== left) {
    if (areRangesSameLine(editor, Editor.range(editor, positions[middle]), parentRangeBoundary)) {
      right = middle;
    } else {
      left = middle;
    }
    middle = Math.floor((left + right) / 2);
  }
  return Editor.range(editor, positions[right], parentRangeBoundary);
};
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
      ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var withReact = (editor) => {
  var e2 = editor;
  var {
    apply,
    onChange,
    deleteBackward,
    addMark,
    removeMark
  } = e2;
  EDITOR_TO_KEY_TO_ELEMENT.set(e2, /* @__PURE__ */ new WeakMap());
  e2.addMark = (key, value) => {
    var _EDITOR_TO_SCHEDULE_F, _EDITOR_TO_PENDING_DI;
    (_EDITOR_TO_SCHEDULE_F = EDITOR_TO_SCHEDULE_FLUSH.get(e2)) === null || _EDITOR_TO_SCHEDULE_F === void 0 ? void 0 : _EDITOR_TO_SCHEDULE_F();
    if (!EDITOR_TO_PENDING_INSERTION_MARKS.get(e2) && (_EDITOR_TO_PENDING_DI = EDITOR_TO_PENDING_DIFFS.get(e2)) !== null && _EDITOR_TO_PENDING_DI !== void 0 && _EDITOR_TO_PENDING_DI.length) {
      EDITOR_TO_PENDING_INSERTION_MARKS.set(e2, null);
    }
    EDITOR_TO_USER_MARKS.delete(e2);
    addMark(key, value);
  };
  e2.removeMark = (key) => {
    var _EDITOR_TO_PENDING_DI2;
    if (!EDITOR_TO_PENDING_INSERTION_MARKS.get(e2) && (_EDITOR_TO_PENDING_DI2 = EDITOR_TO_PENDING_DIFFS.get(e2)) !== null && _EDITOR_TO_PENDING_DI2 !== void 0 && _EDITOR_TO_PENDING_DI2.length) {
      EDITOR_TO_PENDING_INSERTION_MARKS.set(e2, null);
    }
    EDITOR_TO_USER_MARKS.delete(e2);
    removeMark(key);
  };
  e2.deleteBackward = (unit) => {
    if (unit !== "line") {
      return deleteBackward(unit);
    }
    if (e2.selection && Range.isCollapsed(e2.selection)) {
      var parentBlockEntry = Editor.above(e2, {
        match: (n4) => Editor.isBlock(e2, n4),
        at: e2.selection
      });
      if (parentBlockEntry) {
        var [, parentBlockPath] = parentBlockEntry;
        var parentElementRange = Editor.range(e2, parentBlockPath, e2.selection.anchor);
        var currentLineRange = findCurrentLineRange(e2, parentElementRange);
        if (!Range.isCollapsed(currentLineRange)) {
          Transforms.delete(e2, {
            at: currentLineRange
          });
        }
      }
    }
  };
  e2.apply = (op) => {
    var matches = [];
    var pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(e2);
    if (pendingDiffs !== null && pendingDiffs !== void 0 && pendingDiffs.length) {
      var transformed = pendingDiffs.map((textDiff) => transformTextDiff(textDiff, op)).filter(Boolean);
      EDITOR_TO_PENDING_DIFFS.set(e2, transformed);
    }
    var pendingSelection = EDITOR_TO_PENDING_SELECTION.get(e2);
    if (pendingSelection) {
      EDITOR_TO_PENDING_SELECTION.set(e2, transformPendingRange(e2, pendingSelection, op));
    }
    var pendingAction = EDITOR_TO_PENDING_ACTION.get(e2);
    if (pendingAction !== null && pendingAction !== void 0 && pendingAction.at) {
      var at = Point.isPoint(pendingAction === null || pendingAction === void 0 ? void 0 : pendingAction.at) ? transformPendingPoint(e2, pendingAction.at, op) : transformPendingRange(e2, pendingAction.at, op);
      EDITOR_TO_PENDING_ACTION.set(e2, at ? _objectSpread2(_objectSpread2({}, pendingAction), {}, {
        at
      }) : null);
    }
    switch (op.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
      case "split_node": {
        matches.push(...getMatches(e2, op.path));
        break;
      }
      case "set_selection": {
        var _EDITOR_TO_USER_SELEC;
        (_EDITOR_TO_USER_SELEC = EDITOR_TO_USER_SELECTION.get(e2)) === null || _EDITOR_TO_USER_SELEC === void 0 ? void 0 : _EDITOR_TO_USER_SELEC.unref();
        EDITOR_TO_USER_SELECTION.delete(e2);
        break;
      }
      case "insert_node":
      case "remove_node": {
        matches.push(...getMatches(e2, Path.parent(op.path)));
        break;
      }
      case "merge_node": {
        var prevPath = Path.previous(op.path);
        matches.push(...getMatches(e2, prevPath));
        break;
      }
      case "move_node": {
        var commonPath = Path.common(Path.parent(op.path), Path.parent(op.newPath));
        matches.push(...getMatches(e2, commonPath));
        break;
      }
    }
    apply(op);
    for (var [path, key] of matches) {
      var [node] = Editor.node(e2, path);
      NODE_TO_KEY.set(node, key);
    }
  };
  e2.setFragmentData = (data) => {
    var {
      selection
    } = e2;
    if (!selection) {
      return;
    }
    var [start, end] = Range.edges(selection);
    var startVoid = Editor.void(e2, {
      at: start.path
    });
    var endVoid = Editor.void(e2, {
      at: end.path
    });
    if (Range.isCollapsed(selection) && !startVoid) {
      return;
    }
    var domRange = ReactEditor.toDOMRange(e2, selection);
    var contents = domRange.cloneContents();
    var attach = contents.childNodes[0];
    contents.childNodes.forEach((node) => {
      if (node.textContent && node.textContent.trim() !== "") {
        attach = node;
      }
    });
    if (endVoid) {
      var [voidNode] = endVoid;
      var r3 = domRange.cloneRange();
      var domNode = ReactEditor.toDOMNode(e2, voidNode);
      r3.setEndAfter(domNode);
      contents = r3.cloneContents();
    }
    if (startVoid) {
      attach = contents.querySelector("[data-slate-spacer]");
    }
    Array.from(contents.querySelectorAll("[data-slate-zero-width]")).forEach((zw) => {
      var isNewline = zw.getAttribute("data-slate-zero-width") === "n";
      zw.textContent = isNewline ? "\n" : "";
    });
    if (isDOMText(attach)) {
      var span = attach.ownerDocument.createElement("span");
      span.style.whiteSpace = "pre";
      span.appendChild(attach);
      contents.appendChild(span);
      attach = span;
    }
    var fragment = e2.getFragment();
    var string = JSON.stringify(fragment);
    var encoded = window.btoa(encodeURIComponent(string));
    attach.setAttribute("data-slate-fragment", encoded);
    data.setData("application/x-slate-fragment", encoded);
    var div = contents.ownerDocument.createElement("div");
    div.appendChild(contents);
    div.setAttribute("hidden", "true");
    contents.ownerDocument.body.appendChild(div);
    data.setData("text/html", div.innerHTML);
    data.setData("text/plain", getPlainText(div));
    contents.ownerDocument.body.removeChild(div);
    return data;
  };
  e2.insertData = (data) => {
    if (!e2.insertFragmentData(data)) {
      e2.insertTextData(data);
    }
  };
  e2.insertFragmentData = (data) => {
    var fragment = data.getData("application/x-slate-fragment") || getSlateFragmentAttribute(data);
    if (fragment) {
      var decoded = decodeURIComponent(window.atob(fragment));
      var parsed = JSON.parse(decoded);
      e2.insertFragment(parsed);
      return true;
    }
    return false;
  };
  e2.insertTextData = (data) => {
    var text = data.getData("text/plain");
    if (text) {
      var lines = text.split(/\r\n|\r|\n/);
      var split = false;
      for (var line of lines) {
        if (split) {
          Transforms.splitNodes(e2, {
            always: true
          });
        }
        e2.insertText(line);
        split = true;
      }
      return true;
    }
    return false;
  };
  e2.onChange = () => {
    import_react_dom.default.unstable_batchedUpdates(() => {
      var onContextChange = EDITOR_TO_ON_CHANGE.get(e2);
      if (onContextChange) {
        onContextChange();
      }
      onChange();
    });
  };
  return e2;
};
var getMatches = (e2, path) => {
  var matches = [];
  for (var [n4, p2] of Editor.levels(e2, {
    at: path
  })) {
    var key = ReactEditor.findKey(e2, n4);
    matches.push([p2, key]);
  }
  return matches;
};

// app/components/editor/editor.middlewares.ts
var SHORTCUTS = {
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
};
var withShortcuts = (editor) => {
  const { deleteBackward, insertText } = editor;
  editor.insertText = (text) => {
    const { selection } = editor;
    if (text.endsWith(" ") && selection && Range.isCollapsed(selection)) {
      const { anchor } = selection;
      const block = Editor.above(editor, {
        match: (n4) => Editor.isBlock(editor, n4)
      });
      const path = block ? block[1] : [];
      const start = Editor.start(editor, path);
      const range = { anchor, focus: start };
      const beforeText = Editor.string(editor, range) + text.slice(0, -1);
      const type = SHORTCUTS[beforeText];
      if (type) {
        Transforms.select(editor, range);
        if (!Range.isCollapsed(range)) {
          Transforms.delete(editor);
        }
        const newProperties = {
          type
        };
        Transforms.setNodes(editor, newProperties, {
          match: (n4) => Editor.isBlock(editor, n4)
        });
        if (type === "list-item") {
          const list = {
            type: "bulleted-list",
            children: []
          };
          Transforms.wrapNodes(editor, list, {
            match: (n4) => !Editor.isEditor(n4) && Element.isElement(n4) && n4.type === "list-item"
          });
        }
        return;
      }
    }
    insertText(text);
  };
  editor.deleteBackward = (...args) => {
    const { selection } = editor;
    if (selection && Range.isCollapsed(selection)) {
      const match = Editor.above(editor, {
        match: (n4) => Editor.isBlock(editor, n4)
      });
      if (match) {
        const [block, path] = match;
        const start = Editor.start(editor, path);
        if (!Editor.isEditor(block) && Element.isElement(block) && block.type !== "paragraph" && Point.equals(selection.anchor, start)) {
          const newProperties = {
            type: "paragraph"
          };
          Transforms.setNodes(editor, newProperties);
          if (block.type === "list-item") {
            Transforms.unwrapNodes(editor, {
              match: (n4) => !Editor.isEditor(n4) && Element.isElement(n4) && n4.type === "bulleted-list",
              split: true
            });
          }
          return;
        }
      }
      deleteBackward(...args);
    }
  };
  return editor;
};
var withChecklists = (editor) => {
  const { deleteBackward } = editor;
  editor.deleteBackward = (...args) => {
    const { selection } = editor;
    if (selection && Range.isCollapsed(selection)) {
      const [match] = Editor.nodes(editor, {
        match: (n4) => !Editor.isEditor(n4) && Element.isElement(n4) && n4.type === "check-list-item"
      });
      if (match) {
        const [, path] = match;
        const start = Editor.start(editor, path);
        if (Point.equals(selection.anchor, start)) {
          const newProperties = {
            type: "paragraph"
          };
          Transforms.setNodes(editor, newProperties, {
            match: (n4) => !Editor.isEditor(n4) && Element.isElement(n4) && n4.type === "check-list-item"
          });
          return;
        }
      }
    }
    deleteBackward(...args);
  };
  return editor;
};

// app/components/editor/editor.components.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Element3 = (props) => {
  const { attributes, children, element } = props;
  switch (element.type) {
    case "heading-one":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h1", ...attributes, children }, void 0, false, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this);
    case "heading-two":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", ...attributes, children }, void 0, false, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this);
    case "heading-three":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h3", ...attributes, children }, void 0, false, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this);
    case "heading-four":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h4", ...attributes, children }, void 0, false, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this);
    case "heading-five":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h5", ...attributes, children }, void 0, false, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this);
    case "heading-six":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h6", ...attributes, children }, void 0, false, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this);
    case "bulleted-list":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { listStyleType: "disc", ...attributes, children }, void 0, false, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this);
    case "list-item":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListItem, { ...attributes, children }, void 0, false, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 54,
        columnNumber: 14
      }, this);
    case "check-list-item":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckListItemElement, { ...props }, void 0, false, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 57,
        columnNumber: 14
      }, this);
    default:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { ...attributes, children }, void 0, false, {
        fileName: "app/components/editor/editor.components.tsx",
        lineNumber: 59,
        columnNumber: 14
      }, this);
  }
};
var CheckListItemElement = (props) => {
  const { attributes, children, element } = props;
  const editor = useSlateStatic();
  const readOnly = useReadOnly();
  const { checked } = element;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Checkbox,
    {
      ...attributes,
      checked,
      onChange: (event) => {
        const path = ReactEditor.findPath(editor, element);
        const newProperties = {
          checked: event.target.checked
        };
        Transforms.setNodes(editor, newProperties, { at: path });
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Text,
        {
          contentEditable: !readOnly,
          suppressContentEditableWarning: true,
          textDecoration: checked ? "line-through" : void 0,
          children
        },
        void 0,
        false,
        {
          fileName: "app/components/editor/editor.components.tsx",
          lineNumber: 82,
          columnNumber: 9
        },
        this
      )
    },
    void 0,
    false,
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
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var Editor2 = (props) => {
  const { initialValue = defaultValue } = props;
  const renderElement = (0, import_react3.useCallback)(
    (elementProps) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Element3, { ...elementProps }, void 0, false, {
      fileName: "app/components/editor/editor.tsx",
      lineNumber: 15,
      columnNumber: 43
    }, this),
    []
  );
  const editor = (0, import_react3.useMemo)(
    () => withChecklists(withShortcuts(withReact(withHistory(createEditor())))),
    []
  );
  const handleDOMBeforeInput = (e2) => {
    queueMicrotask(() => {
      const pendingDiffs = ReactEditor.androidPendingDiffs(editor);
      const scheduleFlush = pendingDiffs?.some(({ diff, path }) => {
        if (!diff.text.endsWith(" ")) {
          return false;
        }
        const { text } = Node.leaf(editor, path);
        const beforeText = text.slice(0, diff.start) + diff.text.slice(0, -1);
        if (!(beforeText in SHORTCUTS)) {
          return false;
        }
        const blockEntry = Editor.above(editor, {
          at: path,
          match: (n4) => Editor.isBlock(editor, n4)
        });
        if (!blockEntry) {
          return false;
        }
        const [, blockPath] = blockEntry;
        return Editor.isStart(
          editor,
          Editor.start(editor, path),
          blockPath
        );
      });
      if (scheduleFlush) {
        ReactEditor.androidScheduleFlush(editor);
      }
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Slate, { editor, value: initialValue, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    Editable,
    {
      onDOMBeforeInput: handleDOMBeforeInput,
      renderElement,
      placeholder: "Write some markdown...",
      spellCheck: true,
      autoFocus: true
    },
    void 0,
    false,
    {
      fileName: "app/components/editor/editor.tsx",
      lineNumber: 63,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/editor/editor.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
};

// app/routes/__app/today.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Today() {
  const { initialValue } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Editor2, { initialValue }, void 0, false, {
    fileName: "app/routes/__app/today.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/__app/today.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
export {
  Today as default
};
//# sourceMappingURL=/build/routes/__app/today-I2PSHJYM.js.map
