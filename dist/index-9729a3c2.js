function Kg(i, n) {
  for (var r = 0; r < n.length; r++) {
    const s = n[r];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const a in s)
        if (a !== "default" && !(a in i)) {
          const u = Object.getOwnPropertyDescriptor(s, a);
          u && Object.defineProperty(i, a, u.get ? u : {
            enumerable: !0,
            get: () => s[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var _t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Za(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function Gg(i) {
  if (i.__esModule)
    return i;
  var n = i.default;
  if (typeof n == "function") {
    var r = function s() {
      return this instanceof s ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    r.prototype = n.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(i).forEach(function(s) {
    var a = Object.getOwnPropertyDescriptor(i, s);
    Object.defineProperty(r, s, a.get ? a : {
      enumerable: !0,
      get: function() {
        return i[s];
      }
    });
  }), r;
}
var ah = { exports: {} }, Ro = {}, uh = { exports: {} }, ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ff;
function Qg() {
  if (ff)
    return ae;
  ff = 1;
  var i = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.iterator;
  function _(E) {
    return E === null || typeof E != "object" ? null : (E = y && E[y] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var b = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, A = Object.assign, S = {};
  function P(E, N, ie) {
    this.props = E, this.context = N, this.refs = S, this.updater = ie || b;
  }
  P.prototype.isReactComponent = {}, P.prototype.setState = function(E, N) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, E, N, "setState");
  }, P.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function j() {
  }
  j.prototype = P.prototype;
  function M(E, N, ie) {
    this.props = E, this.context = N, this.refs = S, this.updater = ie || b;
  }
  var B = M.prototype = new j();
  B.constructor = M, A(B, P.prototype), B.isPureReactComponent = !0;
  var $ = Array.isArray, U = Object.prototype.hasOwnProperty, Z = { current: null }, q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function oe(E, N, ie) {
    var le, pe = {}, me = null, ye = null;
    if (N != null)
      for (le in N.ref !== void 0 && (ye = N.ref), N.key !== void 0 && (me = "" + N.key), N)
        U.call(N, le) && !q.hasOwnProperty(le) && (pe[le] = N[le]);
    var we = arguments.length - 2;
    if (we === 1)
      pe.children = ie;
    else if (1 < we) {
      for (var Ee = Array(we), Je = 0; Je < we; Je++)
        Ee[Je] = arguments[Je + 2];
      pe.children = Ee;
    }
    if (E && E.defaultProps)
      for (le in we = E.defaultProps, we)
        pe[le] === void 0 && (pe[le] = we[le]);
    return { $$typeof: i, type: E, key: me, ref: ye, props: pe, _owner: Z.current };
  }
  function ge(E, N) {
    return { $$typeof: i, type: E.type, key: N, ref: E.ref, props: E.props, _owner: E._owner };
  }
  function de(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function be(E) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(ie) {
      return N[ie];
    });
  }
  var ne = /\/+/g;
  function xe(E, N) {
    return typeof E == "object" && E !== null && E.key != null ? be("" + E.key) : N.toString(36);
  }
  function ue(E, N, ie, le, pe) {
    var me = typeof E;
    (me === "undefined" || me === "boolean") && (E = null);
    var ye = !1;
    if (E === null)
      ye = !0;
    else
      switch (me) {
        case "string":
        case "number":
          ye = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case i:
            case n:
              ye = !0;
          }
      }
    if (ye)
      return ye = E, pe = pe(ye), E = le === "" ? "." + xe(ye, 0) : le, $(pe) ? (ie = "", E != null && (ie = E.replace(ne, "$&/") + "/"), ue(pe, N, ie, "", function(Je) {
        return Je;
      })) : pe != null && (de(pe) && (pe = ge(pe, ie + (!pe.key || ye && ye.key === pe.key ? "" : ("" + pe.key).replace(ne, "$&/") + "/") + E)), N.push(pe)), 1;
    if (ye = 0, le = le === "" ? "." : le + ":", $(E))
      for (var we = 0; we < E.length; we++) {
        me = E[we];
        var Ee = le + xe(me, we);
        ye += ue(me, N, ie, Ee, pe);
      }
    else if (Ee = _(E), typeof Ee == "function")
      for (E = Ee.call(E), we = 0; !(me = E.next()).done; )
        me = me.value, Ee = le + xe(me, we++), ye += ue(me, N, ie, Ee, pe);
    else if (me === "object")
      throw N = String(E), Error("Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead.");
    return ye;
  }
  function ke(E, N, ie) {
    if (E == null)
      return E;
    var le = [], pe = 0;
    return ue(E, le, "", "", function(me) {
      return N.call(ie, me, pe++);
    }), le;
  }
  function he(E) {
    if (E._status === -1) {
      var N = E._result;
      N = N(), N.then(function(ie) {
        (E._status === 0 || E._status === -1) && (E._status = 1, E._result = ie);
      }, function(ie) {
        (E._status === 0 || E._status === -1) && (E._status = 2, E._result = ie);
      }), E._status === -1 && (E._status = 0, E._result = N);
    }
    if (E._status === 1)
      return E._result.default;
    throw E._result;
  }
  var X = { current: null }, D = { transition: null }, H = { ReactCurrentDispatcher: X, ReactCurrentBatchConfig: D, ReactCurrentOwner: Z };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ae.Children = { map: ke, forEach: function(E, N, ie) {
    ke(E, function() {
      N.apply(this, arguments);
    }, ie);
  }, count: function(E) {
    var N = 0;
    return ke(E, function() {
      N++;
    }), N;
  }, toArray: function(E) {
    return ke(E, function(N) {
      return N;
    }) || [];
  }, only: function(E) {
    if (!de(E))
      throw Error("React.Children.only expected to receive a single React element child.");
    return E;
  } }, ae.Component = P, ae.Fragment = r, ae.Profiler = a, ae.PureComponent = M, ae.StrictMode = s, ae.Suspense = p, ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H, ae.act = V, ae.cloneElement = function(E, N, ie) {
    if (E == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
    var le = A({}, E.props), pe = E.key, me = E.ref, ye = E._owner;
    if (N != null) {
      if (N.ref !== void 0 && (me = N.ref, ye = Z.current), N.key !== void 0 && (pe = "" + N.key), E.type && E.type.defaultProps)
        var we = E.type.defaultProps;
      for (Ee in N)
        U.call(N, Ee) && !q.hasOwnProperty(Ee) && (le[Ee] = N[Ee] === void 0 && we !== void 0 ? we[Ee] : N[Ee]);
    }
    var Ee = arguments.length - 2;
    if (Ee === 1)
      le.children = ie;
    else if (1 < Ee) {
      we = Array(Ee);
      for (var Je = 0; Je < Ee; Je++)
        we[Je] = arguments[Je + 2];
      le.children = we;
    }
    return { $$typeof: i, type: E.type, key: pe, ref: me, props: le, _owner: ye };
  }, ae.createContext = function(E) {
    return E = { $$typeof: f, _currentValue: E, _currentValue2: E, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, E.Provider = { $$typeof: u, _context: E }, E.Consumer = E;
  }, ae.createElement = oe, ae.createFactory = function(E) {
    var N = oe.bind(null, E);
    return N.type = E, N;
  }, ae.createRef = function() {
    return { current: null };
  }, ae.forwardRef = function(E) {
    return { $$typeof: h, render: E };
  }, ae.isValidElement = de, ae.lazy = function(E) {
    return { $$typeof: v, _payload: { _status: -1, _result: E }, _init: he };
  }, ae.memo = function(E, N) {
    return { $$typeof: g, type: E, compare: N === void 0 ? null : N };
  }, ae.startTransition = function(E) {
    var N = D.transition;
    D.transition = {};
    try {
      E();
    } finally {
      D.transition = N;
    }
  }, ae.unstable_act = V, ae.useCallback = function(E, N) {
    return X.current.useCallback(E, N);
  }, ae.useContext = function(E) {
    return X.current.useContext(E);
  }, ae.useDebugValue = function() {
  }, ae.useDeferredValue = function(E) {
    return X.current.useDeferredValue(E);
  }, ae.useEffect = function(E, N) {
    return X.current.useEffect(E, N);
  }, ae.useId = function() {
    return X.current.useId();
  }, ae.useImperativeHandle = function(E, N, ie) {
    return X.current.useImperativeHandle(E, N, ie);
  }, ae.useInsertionEffect = function(E, N) {
    return X.current.useInsertionEffect(E, N);
  }, ae.useLayoutEffect = function(E, N) {
    return X.current.useLayoutEffect(E, N);
  }, ae.useMemo = function(E, N) {
    return X.current.useMemo(E, N);
  }, ae.useReducer = function(E, N, ie) {
    return X.current.useReducer(E, N, ie);
  }, ae.useRef = function(E) {
    return X.current.useRef(E);
  }, ae.useState = function(E) {
    return X.current.useState(E);
  }, ae.useSyncExternalStore = function(E, N, ie) {
    return X.current.useSyncExternalStore(E, N, ie);
  }, ae.useTransition = function() {
    return X.current.useTransition();
  }, ae.version = "18.3.1", ae;
}
uh.exports = Qg();
var C = uh.exports;
const qg = /* @__PURE__ */ Za(C), Jg = /* @__PURE__ */ Kg({
  __proto__: null,
  default: qg
}, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hf;
function Yg() {
  if (hf)
    return Ro;
  hf = 1;
  var i = C, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, a = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(h, p, g) {
    var v, y = {}, _ = null, b = null;
    g !== void 0 && (_ = "" + g), p.key !== void 0 && (_ = "" + p.key), p.ref !== void 0 && (b = p.ref);
    for (v in p)
      s.call(p, v) && !u.hasOwnProperty(v) && (y[v] = p[v]);
    if (h && h.defaultProps)
      for (v in p = h.defaultProps, p)
        y[v] === void 0 && (y[v] = p[v]);
    return { $$typeof: n, type: h, key: _, ref: b, props: y, _owner: a.current };
  }
  return Ro.Fragment = r, Ro.jsx = f, Ro.jsxs = f, Ro;
}
ah.exports = Yg();
var W = ah.exports, ch = { exports: {} }, ot = {}, Sa = { exports: {} }, ba = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pf;
function Xg() {
  return pf || (pf = 1, function(i) {
    function n(D, H) {
      var V = D.length;
      D.push(H);
      e:
        for (; 0 < V; ) {
          var E = V - 1 >>> 1, N = D[E];
          if (0 < a(N, H))
            D[E] = H, D[V] = N, V = E;
          else
            break e;
        }
    }
    function r(D) {
      return D.length === 0 ? null : D[0];
    }
    function s(D) {
      if (D.length === 0)
        return null;
      var H = D[0], V = D.pop();
      if (V !== H) {
        D[0] = V;
        e:
          for (var E = 0, N = D.length, ie = N >>> 1; E < ie; ) {
            var le = 2 * (E + 1) - 1, pe = D[le], me = le + 1, ye = D[me];
            if (0 > a(pe, V))
              me < N && 0 > a(ye, pe) ? (D[E] = ye, D[me] = V, E = me) : (D[E] = pe, D[le] = V, E = le);
            else if (me < N && 0 > a(ye, V))
              D[E] = ye, D[me] = V, E = me;
            else
              break e;
          }
      }
      return H;
    }
    function a(D, H) {
      var V = D.sortIndex - H.sortIndex;
      return V !== 0 ? V : D.id - H.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      i.unstable_now = function() {
        return u.now();
      };
    } else {
      var f = Date, h = f.now();
      i.unstable_now = function() {
        return f.now() - h;
      };
    }
    var p = [], g = [], v = 1, y = null, _ = 3, b = !1, A = !1, S = !1, P = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function B(D) {
      for (var H = r(g); H !== null; ) {
        if (H.callback === null)
          s(g);
        else if (H.startTime <= D)
          s(g), H.sortIndex = H.expirationTime, n(p, H);
        else
          break;
        H = r(g);
      }
    }
    function $(D) {
      if (S = !1, B(D), !A)
        if (r(p) !== null)
          A = !0, he(U);
        else {
          var H = r(g);
          H !== null && X($, H.startTime - D);
        }
    }
    function U(D, H) {
      A = !1, S && (S = !1, j(oe), oe = -1), b = !0;
      var V = _;
      try {
        for (B(H), y = r(p); y !== null && (!(y.expirationTime > H) || D && !be()); ) {
          var E = y.callback;
          if (typeof E == "function") {
            y.callback = null, _ = y.priorityLevel;
            var N = E(y.expirationTime <= H);
            H = i.unstable_now(), typeof N == "function" ? y.callback = N : y === r(p) && s(p), B(H);
          } else
            s(p);
          y = r(p);
        }
        if (y !== null)
          var ie = !0;
        else {
          var le = r(g);
          le !== null && X($, le.startTime - H), ie = !1;
        }
        return ie;
      } finally {
        y = null, _ = V, b = !1;
      }
    }
    var Z = !1, q = null, oe = -1, ge = 5, de = -1;
    function be() {
      return !(i.unstable_now() - de < ge);
    }
    function ne() {
      if (q !== null) {
        var D = i.unstable_now();
        de = D;
        var H = !0;
        try {
          H = q(!0, D);
        } finally {
          H ? xe() : (Z = !1, q = null);
        }
      } else
        Z = !1;
    }
    var xe;
    if (typeof M == "function")
      xe = function() {
        M(ne);
      };
    else if (typeof MessageChannel < "u") {
      var ue = new MessageChannel(), ke = ue.port2;
      ue.port1.onmessage = ne, xe = function() {
        ke.postMessage(null);
      };
    } else
      xe = function() {
        P(ne, 0);
      };
    function he(D) {
      q = D, Z || (Z = !0, xe());
    }
    function X(D, H) {
      oe = P(function() {
        D(i.unstable_now());
      }, H);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, i.unstable_continueExecution = function() {
      A || b || (A = !0, he(U));
    }, i.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ge = 0 < D ? Math.floor(1e3 / D) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return _;
    }, i.unstable_getFirstCallbackNode = function() {
      return r(p);
    }, i.unstable_next = function(D) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = _;
      }
      var V = _;
      _ = H;
      try {
        return D();
      } finally {
        _ = V;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(D, H) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var V = _;
      _ = D;
      try {
        return H();
      } finally {
        _ = V;
      }
    }, i.unstable_scheduleCallback = function(D, H, V) {
      var E = i.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? E + V : E) : V = E, D) {
        case 1:
          var N = -1;
          break;
        case 2:
          N = 250;
          break;
        case 5:
          N = 1073741823;
          break;
        case 4:
          N = 1e4;
          break;
        default:
          N = 5e3;
      }
      return N = V + N, D = { id: v++, callback: H, priorityLevel: D, startTime: V, expirationTime: N, sortIndex: -1 }, V > E ? (D.sortIndex = V, n(g, D), r(p) === null && D === r(g) && (S ? (j(oe), oe = -1) : S = !0, X($, V - E))) : (D.sortIndex = N, n(p, D), A || b || (A = !0, he(U))), D;
    }, i.unstable_shouldYield = be, i.unstable_wrapCallback = function(D) {
      var H = _;
      return function() {
        var V = _;
        _ = H;
        try {
          return D.apply(this, arguments);
        } finally {
          _ = V;
        }
      };
    };
  }(ba)), ba;
}
var mf;
function Zg() {
  return mf || (mf = 1, Sa.exports = Xg()), Sa.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gf;
function ev() {
  if (gf)
    return ot;
  gf = 1;
  var i = C, n = Zg();
  function r(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, o = 1; o < arguments.length; o++)
      t += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var s = /* @__PURE__ */ new Set(), a = {};
  function u(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (a[e] = t, e = 0; e < t.length; e++)
      s.add(t[e]);
  }
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), p = Object.prototype.hasOwnProperty, g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, y = {};
  function _(e) {
    return p.call(y, e) ? !0 : p.call(v, e) ? !1 : g.test(e) ? y[e] = !0 : (v[e] = !0, !1);
  }
  function b(e, t, o, l) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l ? !1 : o !== null ? !o.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function A(e, t, o, l) {
    if (t === null || typeof t > "u" || b(e, t, o, l))
      return !0;
    if (l)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function S(e, t, o, l, c, d, m) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = l, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var P = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    P[e] = new S(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    P[t] = new S(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    P[e] = new S(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    P[e] = new S(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    P[e] = new S(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    P[e] = new S(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    P[e] = new S(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    P[e] = new S(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    P[e] = new S(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var j = /[\-:]([a-z])/g;
  function M(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      j,
      M
    );
    P[t] = new S(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(j, M);
    P[t] = new S(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(j, M);
    P[t] = new S(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    P[e] = new S(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), P.xlinkHref = new S("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    P[e] = new S(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function B(e, t, o, l) {
    var c = P.hasOwnProperty(t) ? P[t] : null;
    (c !== null ? c.type !== 0 : l || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (A(t, o, c, l) && (o = null), l || c === null ? _(t) && (o === null ? e.removeAttribute(t) : e.setAttribute(t, "" + o)) : c.mustUseProperty ? e[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (t = c.attributeName, l = c.attributeNamespace, o === null ? e.removeAttribute(t) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, l ? e.setAttributeNS(l, t, o) : e.setAttribute(t, o))));
  }
  var $ = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, U = Symbol.for("react.element"), Z = Symbol.for("react.portal"), q = Symbol.for("react.fragment"), oe = Symbol.for("react.strict_mode"), ge = Symbol.for("react.profiler"), de = Symbol.for("react.provider"), be = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), xe = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), ke = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), D = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object" ? null : (e = D && e[D] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var V = Object.assign, E;
  function N(e) {
    if (E === void 0)
      try {
        throw Error();
      } catch (o) {
        var t = o.stack.trim().match(/\n( *(at )?)/);
        E = t && t[1] || "";
      }
    return `
` + E + e;
  }
  var ie = !1;
  function le(e, t) {
    if (!e || ie)
      return "";
    ie = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (R) {
            var l = R;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (R) {
            l = R;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (R) {
          l = R;
        }
        e();
      }
    } catch (R) {
      if (R && l && typeof R.stack == "string") {
        for (var c = R.stack.split(`
`), d = l.stack.split(`
`), m = c.length - 1, w = d.length - 1; 1 <= m && 0 <= w && c[m] !== d[w]; )
          w--;
        for (; 1 <= m && 0 <= w; m--, w--)
          if (c[m] !== d[w]) {
            if (m !== 1 || w !== 1)
              do
                if (m--, w--, 0 > w || c[m] !== d[w]) {
                  var x = `
` + c[m].replace(" at new ", " at ");
                  return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), x;
                }
              while (1 <= m && 0 <= w);
            break;
          }
      }
    } finally {
      ie = !1, Error.prepareStackTrace = o;
    }
    return (e = e ? e.displayName || e.name : "") ? N(e) : "";
  }
  function pe(e) {
    switch (e.tag) {
      case 5:
        return N(e.type);
      case 16:
        return N("Lazy");
      case 13:
        return N("Suspense");
      case 19:
        return N("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = le(e.type, !1), e;
      case 11:
        return e = le(e.type.render, !1), e;
      case 1:
        return e = le(e.type, !0), e;
      default:
        return "";
    }
  }
  function me(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case q:
        return "Fragment";
      case Z:
        return "Portal";
      case ge:
        return "Profiler";
      case oe:
        return "StrictMode";
      case xe:
        return "Suspense";
      case ue:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case be:
          return (e.displayName || "Context") + ".Consumer";
        case de:
          return (e._context.displayName || "Context") + ".Provider";
        case ne:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ke:
          return t = e.displayName || null, t !== null ? t : me(e.type) || "Memo";
        case he:
          t = e._payload, e = e._init;
          try {
            return me(e(t));
          } catch {
          }
      }
    return null;
  }
  function ye(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return me(t);
      case 8:
        return t === oe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
    }
    return null;
  }
  function we(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ee(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Je(e) {
    var t = Ee(e) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), l = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, d = o.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        l = "" + m, d.call(this, m);
      } }), Object.defineProperty(e, t, { enumerable: o.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(m) {
        l = "" + m;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function er(e) {
    e._valueTracker || (e._valueTracker = Je(e));
  }
  function Ko(e) {
    if (!e)
      return !1;
    var t = e._valueTracker;
    if (!t)
      return !0;
    var o = t.getValue(), l = "";
    return e && (l = Ee(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== o ? (t.setValue(e), !0) : !1;
  }
  function Ut(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Rs(e, t) {
    var o = t.checked;
    return V({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? e._wrapperState.initialChecked });
  }
  function yu(e, t) {
    var o = t.defaultValue == null ? "" : t.defaultValue, l = t.checked != null ? t.checked : t.defaultChecked;
    o = we(t.value != null ? t.value : o), e._wrapperState = { initialChecked: l, initialValue: o, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function wu(e, t) {
    t = t.checked, t != null && B(e, "checked", t, !1);
  }
  function As(e, t) {
    wu(e, t);
    var o = we(t.value), l = t.type;
    if (o != null)
      l === "number" ? (o === 0 && e.value === "" || e.value != o) && (e.value = "" + o) : e.value !== "" + o && (e.value = "" + o);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? js(e, t.type, o) : t.hasOwnProperty("defaultValue") && js(e, t.type, we(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function _u(e, t, o) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var l = t.type;
      if (!(l !== "submit" && l !== "reset" || t.value !== void 0 && t.value !== null))
        return;
      t = "" + e._wrapperState.initialValue, o || t === e.value || (e.value = t), e.defaultValue = t;
    }
    o = e.name, o !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, o !== "" && (e.name = o);
  }
  function js(e, t, o) {
    (t !== "number" || Ut(e.ownerDocument) !== e) && (o == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + o && (e.defaultValue = "" + o));
  }
  var Hr = Array.isArray;
  function tr(e, t, o, l) {
    if (e = e.options, t) {
      t = {};
      for (var c = 0; c < o.length; c++)
        t["$" + o[c]] = !0;
      for (o = 0; o < e.length; o++)
        c = t.hasOwnProperty("$" + e[o].value), e[o].selected !== c && (e[o].selected = c), c && l && (e[o].defaultSelected = !0);
    } else {
      for (o = "" + we(o), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === o) {
          e[c].selected = !0, l && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ns(e, t) {
    if (t.dangerouslySetInnerHTML != null)
      throw Error(r(91));
    return V({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function xu(e, t) {
    var o = t.value;
    if (o == null) {
      if (o = t.children, t = t.defaultValue, o != null) {
        if (t != null)
          throw Error(r(92));
        if (Hr(o)) {
          if (1 < o.length)
            throw Error(r(93));
          o = o[0];
        }
        t = o;
      }
      t == null && (t = ""), o = t;
    }
    e._wrapperState = { initialValue: we(o) };
  }
  function ku(e, t) {
    var o = we(t.value), l = we(t.defaultValue);
    o != null && (o = "" + o, o !== e.value && (e.value = o), t.defaultValue == null && e.defaultValue !== o && (e.defaultValue = o)), l != null && (e.defaultValue = "" + l);
  }
  function Su(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function bu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ls(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? bu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Go, Eu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, o, l, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, o, l, c);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (Go = Go || document.createElement("div"), Go.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Go.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; t.firstChild; )
        e.appendChild(t.firstChild);
    }
  });
  function Vr(e, t) {
    if (t) {
      var o = e.firstChild;
      if (o && o === e.lastChild && o.nodeType === 3) {
        o.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Kr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Jp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Kr).forEach(function(e) {
    Jp.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Kr[t] = Kr[e];
    });
  });
  function Cu(e, t, o) {
    return t == null || typeof t == "boolean" || t === "" ? "" : o || typeof t != "number" || t === 0 || Kr.hasOwnProperty(e) && Kr[e] ? ("" + t).trim() : t + "px";
  }
  function Pu(e, t) {
    e = e.style;
    for (var o in t)
      if (t.hasOwnProperty(o)) {
        var l = o.indexOf("--") === 0, c = Cu(o, t[o], l);
        o === "float" && (o = "cssFloat"), l ? e.setProperty(o, c) : e[o] = c;
      }
  }
  var Yp = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Is(e, t) {
    if (t) {
      if (Yp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(r(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw Error(r(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
          throw Error(r(61));
      }
      if (t.style != null && typeof t.style != "object")
        throw Error(r(62));
    }
  }
  function $s(e, t) {
    if (e.indexOf("-") === -1)
      return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ds = null;
  function zs(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ms = null, nr = null, rr = null;
  function Tu(e) {
    if (e = mo(e)) {
      if (typeof Ms != "function")
        throw Error(r(280));
      var t = e.stateNode;
      t && (t = gi(t), Ms(e.stateNode, e.type, t));
    }
  }
  function Ou(e) {
    nr ? rr ? rr.push(e) : rr = [e] : nr = e;
  }
  function Ru() {
    if (nr) {
      var e = nr, t = rr;
      if (rr = nr = null, Tu(e), t)
        for (e = 0; e < t.length; e++)
          Tu(t[e]);
    }
  }
  function Au(e, t) {
    return e(t);
  }
  function ju() {
  }
  var Fs = !1;
  function Nu(e, t, o) {
    if (Fs)
      return e(t, o);
    Fs = !0;
    try {
      return Au(e, t, o);
    } finally {
      Fs = !1, (nr !== null || rr !== null) && (ju(), Ru());
    }
  }
  function Gr(e, t) {
    var o = e.stateNode;
    if (o === null)
      return null;
    var l = gi(o);
    if (l === null)
      return null;
    o = l[t];
    e:
      switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
          break e;
        default:
          e = !1;
      }
    if (e)
      return null;
    if (o && typeof o != "function")
      throw Error(r(231, t, typeof o));
    return o;
  }
  var Us = !1;
  if (h)
    try {
      var Qr = {};
      Object.defineProperty(Qr, "passive", { get: function() {
        Us = !0;
      } }), window.addEventListener("test", Qr, Qr), window.removeEventListener("test", Qr, Qr);
    } catch {
      Us = !1;
    }
  function Xp(e, t, o, l, c, d, m, w, x) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(o, R);
    } catch (I) {
      this.onError(I);
    }
  }
  var qr = !1, Qo = null, qo = !1, Bs = null, Zp = { onError: function(e) {
    qr = !0, Qo = e;
  } };
  function em(e, t, o, l, c, d, m, w, x) {
    qr = !1, Qo = null, Xp.apply(Zp, arguments);
  }
  function tm(e, t, o, l, c, d, m, w, x) {
    if (em.apply(this, arguments), qr) {
      if (qr) {
        var R = Qo;
        qr = !1, Qo = null;
      } else
        throw Error(r(198));
      qo || (qo = !0, Bs = R);
    }
  }
  function Nn(e) {
    var t = e, o = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (o = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? o : null;
  }
  function Lu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function Iu(e) {
    if (Nn(e) !== e)
      throw Error(r(188));
  }
  function nm(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Nn(e), t === null)
        throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var o = e, l = t; ; ) {
      var c = o.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (l = c.return, l !== null) {
          o = l;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === o)
            return Iu(c), e;
          if (d === l)
            return Iu(c), t;
          d = d.sibling;
        }
        throw Error(r(188));
      }
      if (o.return !== l.return)
        o = c, l = d;
      else {
        for (var m = !1, w = c.child; w; ) {
          if (w === o) {
            m = !0, o = c, l = d;
            break;
          }
          if (w === l) {
            m = !0, l = c, o = d;
            break;
          }
          w = w.sibling;
        }
        if (!m) {
          for (w = d.child; w; ) {
            if (w === o) {
              m = !0, o = d, l = c;
              break;
            }
            if (w === l) {
              m = !0, l = d, o = c;
              break;
            }
            w = w.sibling;
          }
          if (!m)
            throw Error(r(189));
        }
      }
      if (o.alternate !== l)
        throw Error(r(190));
    }
    if (o.tag !== 3)
      throw Error(r(188));
    return o.stateNode.current === o ? e : t;
  }
  function $u(e) {
    return e = nm(e), e !== null ? Du(e) : null;
  }
  function Du(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var t = Du(e);
      if (t !== null)
        return t;
      e = e.sibling;
    }
    return null;
  }
  var zu = n.unstable_scheduleCallback, Mu = n.unstable_cancelCallback, rm = n.unstable_shouldYield, om = n.unstable_requestPaint, Ie = n.unstable_now, im = n.unstable_getCurrentPriorityLevel, Ws = n.unstable_ImmediatePriority, Fu = n.unstable_UserBlockingPriority, Jo = n.unstable_NormalPriority, sm = n.unstable_LowPriority, Uu = n.unstable_IdlePriority, Yo = null, jt = null;
  function lm(e) {
    if (jt && typeof jt.onCommitFiberRoot == "function")
      try {
        jt.onCommitFiberRoot(Yo, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var xt = Math.clz32 ? Math.clz32 : cm, am = Math.log, um = Math.LN2;
  function cm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (am(e) / um | 0) | 0;
  }
  var Xo = 64, Zo = 4194304;
  function Jr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ei(e, t) {
    var o = e.pendingLanes;
    if (o === 0)
      return 0;
    var l = 0, c = e.suspendedLanes, d = e.pingedLanes, m = o & 268435455;
    if (m !== 0) {
      var w = m & ~c;
      w !== 0 ? l = Jr(w) : (d &= m, d !== 0 && (l = Jr(d)));
    } else
      m = o & ~c, m !== 0 ? l = Jr(m) : d !== 0 && (l = Jr(d));
    if (l === 0)
      return 0;
    if (t !== 0 && t !== l && !(t & c) && (c = l & -l, d = t & -t, c >= d || c === 16 && (d & 4194240) !== 0))
      return t;
    if (l & 4 && (l |= o & 16), t = e.entangledLanes, t !== 0)
      for (e = e.entanglements, t &= l; 0 < t; )
        o = 31 - xt(t), c = 1 << o, l |= e[o], t &= ~c;
    return l;
  }
  function dm(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function fm(e, t) {
    for (var o = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, d = e.pendingLanes; 0 < d; ) {
      var m = 31 - xt(d), w = 1 << m, x = c[m];
      x === -1 ? (!(w & o) || w & l) && (c[m] = dm(w, t)) : x <= t && (e.expiredLanes |= w), d &= ~w;
    }
  }
  function Hs(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Bu() {
    var e = Xo;
    return Xo <<= 1, !(Xo & 4194240) && (Xo = 64), e;
  }
  function Vs(e) {
    for (var t = [], o = 0; 31 > o; o++)
      t.push(e);
    return t;
  }
  function Yr(e, t, o) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - xt(t), e[t] = o;
  }
  function hm(e, t) {
    var o = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < o; ) {
      var c = 31 - xt(o), d = 1 << c;
      t[c] = 0, l[c] = -1, e[c] = -1, o &= ~d;
    }
  }
  function Ks(e, t) {
    var o = e.entangledLanes |= t;
    for (e = e.entanglements; o; ) {
      var l = 31 - xt(o), c = 1 << l;
      c & t | e[l] & t && (e[l] |= t), o &= ~c;
    }
  }
  var Se = 0;
  function Wu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hu, Gs, Vu, Ku, Gu, Qs = !1, ti = [], en = null, tn = null, nn = null, Xr = /* @__PURE__ */ new Map(), Zr = /* @__PURE__ */ new Map(), rn = [], pm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Qu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        en = null;
        break;
      case "dragenter":
      case "dragleave":
        tn = null;
        break;
      case "mouseover":
      case "mouseout":
        nn = null;
        break;
      case "pointerover":
      case "pointerout":
        Xr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zr.delete(t.pointerId);
    }
  }
  function eo(e, t, o, l, c, d) {
    return e === null || e.nativeEvent !== d ? (e = { blockedOn: t, domEventName: o, eventSystemFlags: l, nativeEvent: d, targetContainers: [c] }, t !== null && (t = mo(t), t !== null && Gs(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function mm(e, t, o, l, c) {
    switch (t) {
      case "focusin":
        return en = eo(en, e, t, o, l, c), !0;
      case "dragenter":
        return tn = eo(tn, e, t, o, l, c), !0;
      case "mouseover":
        return nn = eo(nn, e, t, o, l, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Xr.set(d, eo(Xr.get(d) || null, e, t, o, l, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Zr.set(d, eo(Zr.get(d) || null, e, t, o, l, c)), !0;
    }
    return !1;
  }
  function qu(e) {
    var t = Ln(e.target);
    if (t !== null) {
      var o = Nn(t);
      if (o !== null) {
        if (t = o.tag, t === 13) {
          if (t = Lu(o), t !== null) {
            e.blockedOn = t, Gu(e.priority, function() {
              Vu(o);
            });
            return;
          }
        } else if (t === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ni(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var o = Js(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (o === null) {
        o = e.nativeEvent;
        var l = new o.constructor(o.type, o);
        Ds = l, o.target.dispatchEvent(l), Ds = null;
      } else
        return t = mo(o), t !== null && Gs(t), e.blockedOn = o, !1;
      t.shift();
    }
    return !0;
  }
  function Ju(e, t, o) {
    ni(e) && o.delete(t);
  }
  function gm() {
    Qs = !1, en !== null && ni(en) && (en = null), tn !== null && ni(tn) && (tn = null), nn !== null && ni(nn) && (nn = null), Xr.forEach(Ju), Zr.forEach(Ju);
  }
  function to(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Qs || (Qs = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, gm)));
  }
  function no(e) {
    function t(c) {
      return to(c, e);
    }
    if (0 < ti.length) {
      to(ti[0], e);
      for (var o = 1; o < ti.length; o++) {
        var l = ti[o];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (en !== null && to(en, e), tn !== null && to(tn, e), nn !== null && to(nn, e), Xr.forEach(t), Zr.forEach(t), o = 0; o < rn.length; o++)
      l = rn[o], l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < rn.length && (o = rn[0], o.blockedOn === null); )
      qu(o), o.blockedOn === null && rn.shift();
  }
  var or = $.ReactCurrentBatchConfig, ri = !0;
  function vm(e, t, o, l) {
    var c = Se, d = or.transition;
    or.transition = null;
    try {
      Se = 1, qs(e, t, o, l);
    } finally {
      Se = c, or.transition = d;
    }
  }
  function ym(e, t, o, l) {
    var c = Se, d = or.transition;
    or.transition = null;
    try {
      Se = 4, qs(e, t, o, l);
    } finally {
      Se = c, or.transition = d;
    }
  }
  function qs(e, t, o, l) {
    if (ri) {
      var c = Js(e, t, o, l);
      if (c === null)
        hl(e, t, l, oi, o), Qu(e, l);
      else if (mm(c, e, t, o, l))
        l.stopPropagation();
      else if (Qu(e, l), t & 4 && -1 < pm.indexOf(e)) {
        for (; c !== null; ) {
          var d = mo(c);
          if (d !== null && Hu(d), d = Js(e, t, o, l), d === null && hl(e, t, l, oi, o), d === c)
            break;
          c = d;
        }
        c !== null && l.stopPropagation();
      } else
        hl(e, t, l, null, o);
    }
  }
  var oi = null;
  function Js(e, t, o, l) {
    if (oi = null, e = zs(l), e = Ln(e), e !== null)
      if (t = Nn(e), t === null)
        e = null;
      else if (o = t.tag, o === 13) {
        if (e = Lu(t), e !== null)
          return e;
        e = null;
      } else if (o === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else
        t !== e && (e = null);
    return oi = e, null;
  }
  function Yu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (im()) {
          case Ws:
            return 1;
          case Fu:
            return 4;
          case Jo:
          case sm:
            return 16;
          case Uu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var on = null, Ys = null, ii = null;
  function Xu() {
    if (ii)
      return ii;
    var e, t = Ys, o = t.length, l, c = "value" in on ? on.value : on.textContent, d = c.length;
    for (e = 0; e < o && t[e] === c[e]; e++)
      ;
    var m = o - e;
    for (l = 1; l <= m && t[o - l] === c[d - l]; l++)
      ;
    return ii = c.slice(e, 1 < l ? 1 - l : void 0);
  }
  function si(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function li() {
    return !0;
  }
  function Zu() {
    return !1;
  }
  function it(e) {
    function t(o, l, c, d, m) {
      this._reactName = o, this._targetInst = c, this.type = l, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var w in e)
        e.hasOwnProperty(w) && (o = e[w], this[w] = o ? o(d) : d[w]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? li : Zu, this.isPropagationStopped = Zu, this;
    }
    return V(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = li);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = li);
    }, persist: function() {
    }, isPersistent: li }), t;
  }
  var ir = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Xs = it(ir), ro = V({}, ir, { view: 0, detail: 0 }), wm = it(ro), Zs, el, oo, ai = V({}, ro, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: nl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== oo && (oo && e.type === "mousemove" ? (Zs = e.screenX - oo.screenX, el = e.screenY - oo.screenY) : el = Zs = 0, oo = e), Zs);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : el;
  } }), ec = it(ai), _m = V({}, ai, { dataTransfer: 0 }), xm = it(_m), km = V({}, ro, { relatedTarget: 0 }), tl = it(km), Sm = V({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bm = it(Sm), Em = V({}, ir, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Cm = it(Em), Pm = V({}, ir, { data: 0 }), tc = it(Pm), Tm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Om = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Rm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Am(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Rm[e]) ? !!t[e] : !1;
  }
  function nl() {
    return Am;
  }
  var jm = V({}, ro, { key: function(e) {
    if (e.key) {
      var t = Tm[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    return e.type === "keypress" ? (e = si(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Om[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: nl, charCode: function(e) {
    return e.type === "keypress" ? si(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? si(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Nm = it(jm), Lm = V({}, ai, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), nc = it(Lm), Im = V({}, ro, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: nl }), $m = it(Im), Dm = V({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), zm = it(Dm), Mm = V({}, ai, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fm = it(Mm), Um = [9, 13, 27, 32], rl = h && "CompositionEvent" in window, io = null;
  h && "documentMode" in document && (io = document.documentMode);
  var Bm = h && "TextEvent" in window && !io, rc = h && (!rl || io && 8 < io && 11 >= io), oc = String.fromCharCode(32), ic = !1;
  function sc(e, t) {
    switch (e) {
      case "keyup":
        return Um.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function lc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var sr = !1;
  function Wm(e, t) {
    switch (e) {
      case "compositionend":
        return lc(t);
      case "keypress":
        return t.which !== 32 ? null : (ic = !0, oc);
      case "textInput":
        return e = t.data, e === oc && ic ? null : e;
      default:
        return null;
    }
  }
  function Hm(e, t) {
    if (sr)
      return e === "compositionend" || !rl && sc(e, t) ? (e = Xu(), ii = Ys = on = null, sr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return rc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Vm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ac(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Vm[e.type] : t === "textarea";
  }
  function uc(e, t, o, l) {
    Ou(l), t = hi(t, "onChange"), 0 < t.length && (o = new Xs("onChange", "change", null, o, l), e.push({ event: o, listeners: t }));
  }
  var so = null, lo = null;
  function Km(e) {
    Pc(e, 0);
  }
  function ui(e) {
    var t = dr(e);
    if (Ko(t))
      return e;
  }
  function Gm(e, t) {
    if (e === "change")
      return t;
  }
  var cc = !1;
  if (h) {
    var ol;
    if (h) {
      var il = "oninput" in document;
      if (!il) {
        var dc = document.createElement("div");
        dc.setAttribute("oninput", "return;"), il = typeof dc.oninput == "function";
      }
      ol = il;
    } else
      ol = !1;
    cc = ol && (!document.documentMode || 9 < document.documentMode);
  }
  function fc() {
    so && (so.detachEvent("onpropertychange", hc), lo = so = null);
  }
  function hc(e) {
    if (e.propertyName === "value" && ui(lo)) {
      var t = [];
      uc(t, lo, e, zs(e)), Nu(Km, t);
    }
  }
  function Qm(e, t, o) {
    e === "focusin" ? (fc(), so = t, lo = o, so.attachEvent("onpropertychange", hc)) : e === "focusout" && fc();
  }
  function qm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ui(lo);
  }
  function Jm(e, t) {
    if (e === "click")
      return ui(t);
  }
  function Ym(e, t) {
    if (e === "input" || e === "change")
      return ui(t);
  }
  function Xm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var kt = typeof Object.is == "function" ? Object.is : Xm;
  function ao(e, t) {
    if (kt(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var o = Object.keys(e), l = Object.keys(t);
    if (o.length !== l.length)
      return !1;
    for (l = 0; l < o.length; l++) {
      var c = o[l];
      if (!p.call(t, c) || !kt(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  function pc(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function mc(e, t) {
    var o = pc(e);
    e = 0;
    for (var l; o; ) {
      if (o.nodeType === 3) {
        if (l = e + o.textContent.length, e <= t && l >= t)
          return { node: o, offset: t - e };
        e = l;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = pc(o);
    }
  }
  function gc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function vc() {
    for (var e = window, t = Ut(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var o = typeof t.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        e = t.contentWindow;
      else
        break;
      t = Ut(e.document);
    }
    return t;
  }
  function sl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Zm(e) {
    var t = vc(), o = e.focusedElem, l = e.selectionRange;
    if (t !== o && o && o.ownerDocument && gc(o.ownerDocument.documentElement, o)) {
      if (l !== null && sl(o)) {
        if (t = l.start, e = l.end, e === void 0 && (e = t), "selectionStart" in o)
          o.selectionStart = t, o.selectionEnd = Math.min(e, o.value.length);
        else if (e = (t = o.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var c = o.textContent.length, d = Math.min(l.start, c);
          l = l.end === void 0 ? d : Math.min(l.end, c), !e.extend && d > l && (c = l, l = d, d = c), c = mc(o, d);
          var m = mc(
            o,
            l
          );
          c && m && (e.rangeCount !== 1 || e.anchorNode !== c.node || e.anchorOffset !== c.offset || e.focusNode !== m.node || e.focusOffset !== m.offset) && (t = t.createRange(), t.setStart(c.node, c.offset), e.removeAllRanges(), d > l ? (e.addRange(t), e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset), e.addRange(t)));
        }
      }
      for (t = [], e = o; e = e.parentNode; )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < t.length; o++)
        e = t[o], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var eg = h && "documentMode" in document && 11 >= document.documentMode, lr = null, ll = null, uo = null, al = !1;
  function yc(e, t, o) {
    var l = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    al || lr == null || lr !== Ut(l) || (l = lr, "selectionStart" in l && sl(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), uo && ao(uo, l) || (uo = l, l = hi(ll, "onSelect"), 0 < l.length && (t = new Xs("onSelect", "select", null, t, o), e.push({ event: t, listeners: l }), t.target = lr)));
  }
  function ci(e, t) {
    var o = {};
    return o[e.toLowerCase()] = t.toLowerCase(), o["Webkit" + e] = "webkit" + t, o["Moz" + e] = "moz" + t, o;
  }
  var ar = { animationend: ci("Animation", "AnimationEnd"), animationiteration: ci("Animation", "AnimationIteration"), animationstart: ci("Animation", "AnimationStart"), transitionend: ci("Transition", "TransitionEnd") }, ul = {}, wc = {};
  h && (wc = document.createElement("div").style, "AnimationEvent" in window || (delete ar.animationend.animation, delete ar.animationiteration.animation, delete ar.animationstart.animation), "TransitionEvent" in window || delete ar.transitionend.transition);
  function di(e) {
    if (ul[e])
      return ul[e];
    if (!ar[e])
      return e;
    var t = ar[e], o;
    for (o in t)
      if (t.hasOwnProperty(o) && o in wc)
        return ul[e] = t[o];
    return e;
  }
  var _c = di("animationend"), xc = di("animationiteration"), kc = di("animationstart"), Sc = di("transitionend"), bc = /* @__PURE__ */ new Map(), Ec = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function sn(e, t) {
    bc.set(e, t), u(t, [e]);
  }
  for (var cl = 0; cl < Ec.length; cl++) {
    var dl = Ec[cl], tg = dl.toLowerCase(), ng = dl[0].toUpperCase() + dl.slice(1);
    sn(tg, "on" + ng);
  }
  sn(_c, "onAnimationEnd"), sn(xc, "onAnimationIteration"), sn(kc, "onAnimationStart"), sn("dblclick", "onDoubleClick"), sn("focusin", "onFocus"), sn("focusout", "onBlur"), sn(Sc, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var co = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), rg = new Set("cancel close invalid load scroll toggle".split(" ").concat(co));
  function Cc(e, t, o) {
    var l = e.type || "unknown-event";
    e.currentTarget = o, tm(l, t, void 0, e), e.currentTarget = null;
  }
  function Pc(e, t) {
    t = (t & 4) !== 0;
    for (var o = 0; o < e.length; o++) {
      var l = e[o], c = l.event;
      l = l.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var m = l.length - 1; 0 <= m; m--) {
            var w = l[m], x = w.instance, R = w.currentTarget;
            if (w = w.listener, x !== d && c.isPropagationStopped())
              break e;
            Cc(c, w, R), d = x;
          }
        else
          for (m = 0; m < l.length; m++) {
            if (w = l[m], x = w.instance, R = w.currentTarget, w = w.listener, x !== d && c.isPropagationStopped())
              break e;
            Cc(c, w, R), d = x;
          }
      }
    }
    if (qo)
      throw e = Bs, qo = !1, Bs = null, e;
  }
  function Te(e, t) {
    var o = t[wl];
    o === void 0 && (o = t[wl] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    o.has(l) || (Tc(t, e, 2, !1), o.add(l));
  }
  function fl(e, t, o) {
    var l = 0;
    t && (l |= 4), Tc(o, e, l, t);
  }
  var fi = "_reactListening" + Math.random().toString(36).slice(2);
  function fo(e) {
    if (!e[fi]) {
      e[fi] = !0, s.forEach(function(o) {
        o !== "selectionchange" && (rg.has(o) || fl(o, !1, e), fl(o, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[fi] || (t[fi] = !0, fl("selectionchange", !1, t));
    }
  }
  function Tc(e, t, o, l) {
    switch (Yu(t)) {
      case 1:
        var c = vm;
        break;
      case 4:
        c = ym;
        break;
      default:
        c = qs;
    }
    o = c.bind(null, t, o, e), c = void 0, !Us || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), l ? c !== void 0 ? e.addEventListener(t, o, { capture: !0, passive: c }) : e.addEventListener(t, o, !0) : c !== void 0 ? e.addEventListener(t, o, { passive: c }) : e.addEventListener(t, o, !1);
  }
  function hl(e, t, o, l, c) {
    var d = l;
    if (!(t & 1) && !(t & 2) && l !== null)
      e:
        for (; ; ) {
          if (l === null)
            return;
          var m = l.tag;
          if (m === 3 || m === 4) {
            var w = l.stateNode.containerInfo;
            if (w === c || w.nodeType === 8 && w.parentNode === c)
              break;
            if (m === 4)
              for (m = l.return; m !== null; ) {
                var x = m.tag;
                if ((x === 3 || x === 4) && (x = m.stateNode.containerInfo, x === c || x.nodeType === 8 && x.parentNode === c))
                  return;
                m = m.return;
              }
            for (; w !== null; ) {
              if (m = Ln(w), m === null)
                return;
              if (x = m.tag, x === 5 || x === 6) {
                l = d = m;
                continue e;
              }
              w = w.parentNode;
            }
          }
          l = l.return;
        }
    Nu(function() {
      var R = d, I = zs(o), z = [];
      e: {
        var L = bc.get(e);
        if (L !== void 0) {
          var K = Xs, Q = e;
          switch (e) {
            case "keypress":
              if (si(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              K = Nm;
              break;
            case "focusin":
              Q = "focus", K = tl;
              break;
            case "focusout":
              Q = "blur", K = tl;
              break;
            case "beforeblur":
            case "afterblur":
              K = tl;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              K = ec;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              K = xm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              K = $m;
              break;
            case _c:
            case xc:
            case kc:
              K = bm;
              break;
            case Sc:
              K = zm;
              break;
            case "scroll":
              K = wm;
              break;
            case "wheel":
              K = Fm;
              break;
            case "copy":
            case "cut":
            case "paste":
              K = Cm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              K = nc;
          }
          var J = (t & 4) !== 0, $e = !J && e === "scroll", T = J ? L !== null ? L + "Capture" : null : L;
          J = [];
          for (var k = R, O; k !== null; ) {
            O = k;
            var F = O.stateNode;
            if (O.tag === 5 && F !== null && (O = F, T !== null && (F = Gr(k, T), F != null && J.push(ho(k, F, O)))), $e)
              break;
            k = k.return;
          }
          0 < J.length && (L = new K(L, Q, null, o, I), z.push({ event: L, listeners: J }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (L = e === "mouseover" || e === "pointerover", K = e === "mouseout" || e === "pointerout", L && o !== Ds && (Q = o.relatedTarget || o.fromElement) && (Ln(Q) || Q[Bt]))
            break e;
          if ((K || L) && (L = I.window === I ? I : (L = I.ownerDocument) ? L.defaultView || L.parentWindow : window, K ? (Q = o.relatedTarget || o.toElement, K = R, Q = Q ? Ln(Q) : null, Q !== null && ($e = Nn(Q), Q !== $e || Q.tag !== 5 && Q.tag !== 6) && (Q = null)) : (K = null, Q = R), K !== Q)) {
            if (J = ec, F = "onMouseLeave", T = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (J = nc, F = "onPointerLeave", T = "onPointerEnter", k = "pointer"), $e = K == null ? L : dr(K), O = Q == null ? L : dr(Q), L = new J(F, k + "leave", K, o, I), L.target = $e, L.relatedTarget = O, F = null, Ln(I) === R && (J = new J(T, k + "enter", Q, o, I), J.target = O, J.relatedTarget = $e, F = J), $e = F, K && Q)
              t: {
                for (J = K, T = Q, k = 0, O = J; O; O = ur(O))
                  k++;
                for (O = 0, F = T; F; F = ur(F))
                  O++;
                for (; 0 < k - O; )
                  J = ur(J), k--;
                for (; 0 < O - k; )
                  T = ur(T), O--;
                for (; k--; ) {
                  if (J === T || T !== null && J === T.alternate)
                    break t;
                  J = ur(J), T = ur(T);
                }
                J = null;
              }
            else
              J = null;
            K !== null && Oc(z, L, K, J, !1), Q !== null && $e !== null && Oc(z, $e, Q, J, !0);
          }
        }
        e: {
          if (L = R ? dr(R) : window, K = L.nodeName && L.nodeName.toLowerCase(), K === "select" || K === "input" && L.type === "file")
            var Y = Gm;
          else if (ac(L))
            if (cc)
              Y = Ym;
            else {
              Y = qm;
              var ee = Qm;
            }
          else
            (K = L.nodeName) && K.toLowerCase() === "input" && (L.type === "checkbox" || L.type === "radio") && (Y = Jm);
          if (Y && (Y = Y(e, R))) {
            uc(z, Y, o, I);
            break e;
          }
          ee && ee(e, L, R), e === "focusout" && (ee = L._wrapperState) && ee.controlled && L.type === "number" && js(L, "number", L.value);
        }
        switch (ee = R ? dr(R) : window, e) {
          case "focusin":
            (ac(ee) || ee.contentEditable === "true") && (lr = ee, ll = R, uo = null);
            break;
          case "focusout":
            uo = ll = lr = null;
            break;
          case "mousedown":
            al = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            al = !1, yc(z, o, I);
            break;
          case "selectionchange":
            if (eg)
              break;
          case "keydown":
          case "keyup":
            yc(z, o, I);
        }
        var te;
        if (rl)
          e: {
            switch (e) {
              case "compositionstart":
                var re = "onCompositionStart";
                break e;
              case "compositionend":
                re = "onCompositionEnd";
                break e;
              case "compositionupdate":
                re = "onCompositionUpdate";
                break e;
            }
            re = void 0;
          }
        else
          sr ? sc(e, o) && (re = "onCompositionEnd") : e === "keydown" && o.keyCode === 229 && (re = "onCompositionStart");
        re && (rc && o.locale !== "ko" && (sr || re !== "onCompositionStart" ? re === "onCompositionEnd" && sr && (te = Xu()) : (on = I, Ys = "value" in on ? on.value : on.textContent, sr = !0)), ee = hi(R, re), 0 < ee.length && (re = new tc(re, e, null, o, I), z.push({ event: re, listeners: ee }), te ? re.data = te : (te = lc(o), te !== null && (re.data = te)))), (te = Bm ? Wm(e, o) : Hm(e, o)) && (R = hi(R, "onBeforeInput"), 0 < R.length && (I = new tc("onBeforeInput", "beforeinput", null, o, I), z.push({ event: I, listeners: R }), I.data = te));
      }
      Pc(z, t);
    });
  }
  function ho(e, t, o) {
    return { instance: e, listener: t, currentTarget: o };
  }
  function hi(e, t) {
    for (var o = t + "Capture", l = []; e !== null; ) {
      var c = e, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Gr(e, o), d != null && l.unshift(ho(e, d, c)), d = Gr(e, t), d != null && l.push(ho(e, d, c))), e = e.return;
    }
    return l;
  }
  function ur(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Oc(e, t, o, l, c) {
    for (var d = t._reactName, m = []; o !== null && o !== l; ) {
      var w = o, x = w.alternate, R = w.stateNode;
      if (x !== null && x === l)
        break;
      w.tag === 5 && R !== null && (w = R, c ? (x = Gr(o, d), x != null && m.unshift(ho(o, x, w))) : c || (x = Gr(o, d), x != null && m.push(ho(o, x, w)))), o = o.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var og = /\r\n?/g, ig = /\u0000|\uFFFD/g;
  function Rc(e) {
    return (typeof e == "string" ? e : "" + e).replace(og, `
`).replace(ig, "");
  }
  function pi(e, t, o) {
    if (t = Rc(t), Rc(e) !== t && o)
      throw Error(r(425));
  }
  function mi() {
  }
  var pl = null, ml = null;
  function gl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var vl = typeof setTimeout == "function" ? setTimeout : void 0, sg = typeof clearTimeout == "function" ? clearTimeout : void 0, Ac = typeof Promise == "function" ? Promise : void 0, lg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ac < "u" ? function(e) {
    return Ac.resolve(null).then(e).catch(ag);
  } : vl;
  function ag(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function yl(e, t) {
    var o = t, l = 0;
    do {
      var c = o.nextSibling;
      if (e.removeChild(o), c && c.nodeType === 8)
        if (o = c.data, o === "/$") {
          if (l === 0) {
            e.removeChild(c), no(t);
            return;
          }
          l--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || l++;
      o = c;
    } while (o);
    no(t);
  }
  function ln(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3)
        break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
          break;
        if (t === "/$")
          return null;
      }
    }
    return e;
  }
  function jc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var o = e.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (t === 0)
            return e;
          t--;
        } else
          o === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var cr = Math.random().toString(36).slice(2), Nt = "__reactFiber$" + cr, po = "__reactProps$" + cr, Bt = "__reactContainer$" + cr, wl = "__reactEvents$" + cr, ug = "__reactListeners$" + cr, cg = "__reactHandles$" + cr;
  function Ln(e) {
    var t = e[Nt];
    if (t)
      return t;
    for (var o = e.parentNode; o; ) {
      if (t = o[Bt] || o[Nt]) {
        if (o = t.alternate, t.child !== null || o !== null && o.child !== null)
          for (e = jc(e); e !== null; ) {
            if (o = e[Nt])
              return o;
            e = jc(e);
          }
        return t;
      }
      e = o, o = e.parentNode;
    }
    return null;
  }
  function mo(e) {
    return e = e[Nt] || e[Bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function dr(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(r(33));
  }
  function gi(e) {
    return e[po] || null;
  }
  var _l = [], fr = -1;
  function an(e) {
    return { current: e };
  }
  function Oe(e) {
    0 > fr || (e.current = _l[fr], _l[fr] = null, fr--);
  }
  function Ce(e, t) {
    fr++, _l[fr] = e.current, e.current = t;
  }
  var un = {}, Ve = an(un), Ze = an(!1), In = un;
  function hr(e, t) {
    var o = e.type.contextTypes;
    if (!o)
      return un;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
      return l.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in o)
      c[d] = t[d];
    return l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function et(e) {
    return e = e.childContextTypes, e != null;
  }
  function vi() {
    Oe(Ze), Oe(Ve);
  }
  function Nc(e, t, o) {
    if (Ve.current !== un)
      throw Error(r(168));
    Ce(Ve, t), Ce(Ze, o);
  }
  function Lc(e, t, o) {
    var l = e.stateNode;
    if (t = t.childContextTypes, typeof l.getChildContext != "function")
      return o;
    l = l.getChildContext();
    for (var c in l)
      if (!(c in t))
        throw Error(r(108, ye(e) || "Unknown", c));
    return V({}, o, l);
  }
  function yi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || un, In = Ve.current, Ce(Ve, e), Ce(Ze, Ze.current), !0;
  }
  function Ic(e, t, o) {
    var l = e.stateNode;
    if (!l)
      throw Error(r(169));
    o ? (e = Lc(e, t, In), l.__reactInternalMemoizedMergedChildContext = e, Oe(Ze), Oe(Ve), Ce(Ve, e)) : Oe(Ze), Ce(Ze, o);
  }
  var Wt = null, wi = !1, xl = !1;
  function $c(e) {
    Wt === null ? Wt = [e] : Wt.push(e);
  }
  function dg(e) {
    wi = !0, $c(e);
  }
  function cn() {
    if (!xl && Wt !== null) {
      xl = !0;
      var e = 0, t = Se;
      try {
        var o = Wt;
        for (Se = 1; e < o.length; e++) {
          var l = o[e];
          do
            l = l(!0);
          while (l !== null);
        }
        Wt = null, wi = !1;
      } catch (c) {
        throw Wt !== null && (Wt = Wt.slice(e + 1)), zu(Ws, cn), c;
      } finally {
        Se = t, xl = !1;
      }
    }
    return null;
  }
  var pr = [], mr = 0, _i = null, xi = 0, ft = [], ht = 0, $n = null, Ht = 1, Vt = "";
  function Dn(e, t) {
    pr[mr++] = xi, pr[mr++] = _i, _i = e, xi = t;
  }
  function Dc(e, t, o) {
    ft[ht++] = Ht, ft[ht++] = Vt, ft[ht++] = $n, $n = e;
    var l = Ht;
    e = Vt;
    var c = 32 - xt(l) - 1;
    l &= ~(1 << c), o += 1;
    var d = 32 - xt(t) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (l & (1 << m) - 1).toString(32), l >>= m, c -= m, Ht = 1 << 32 - xt(t) + c | o << c | l, Vt = d + e;
    } else
      Ht = 1 << d | o << c | l, Vt = e;
  }
  function kl(e) {
    e.return !== null && (Dn(e, 1), Dc(e, 1, 0));
  }
  function Sl(e) {
    for (; e === _i; )
      _i = pr[--mr], pr[mr] = null, xi = pr[--mr], pr[mr] = null;
    for (; e === $n; )
      $n = ft[--ht], ft[ht] = null, Vt = ft[--ht], ft[ht] = null, Ht = ft[--ht], ft[ht] = null;
  }
  var st = null, lt = null, Ae = !1, St = null;
  function zc(e, t) {
    var o = vt(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = t, o.return = e, t = e.deletions, t === null ? (e.deletions = [o], e.flags |= 16) : t.push(o);
  }
  function Mc(e, t) {
    switch (e.tag) {
      case 5:
        var o = e.type;
        return t = t.nodeType !== 1 || o.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, st = e, lt = ln(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, st = e, lt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (o = $n !== null ? { id: Ht, overflow: Vt } : null, e.memoizedState = { dehydrated: t, treeContext: o, retryLane: 1073741824 }, o = vt(18, null, null, 0), o.stateNode = t, o.return = e, e.child = o, st = e, lt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function bl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function El(e) {
    if (Ae) {
      var t = lt;
      if (t) {
        var o = t;
        if (!Mc(e, t)) {
          if (bl(e))
            throw Error(r(418));
          t = ln(o.nextSibling);
          var l = st;
          t && Mc(e, t) ? zc(l, o) : (e.flags = e.flags & -4097 | 2, Ae = !1, st = e);
        }
      } else {
        if (bl(e))
          throw Error(r(418));
        e.flags = e.flags & -4097 | 2, Ae = !1, st = e;
      }
    }
  }
  function Fc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    st = e;
  }
  function ki(e) {
    if (e !== st)
      return !1;
    if (!Ae)
      return Fc(e), Ae = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !gl(e.type, e.memoizedProps)), t && (t = lt)) {
      if (bl(e))
        throw Uc(), Error(r(418));
      for (; t; )
        zc(e, t), t = ln(t.nextSibling);
    }
    if (Fc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(r(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var o = e.data;
            if (o === "/$") {
              if (t === 0) {
                lt = ln(e.nextSibling);
                break e;
              }
              t--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        lt = null;
      }
    } else
      lt = st ? ln(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Uc() {
    for (var e = lt; e; )
      e = ln(e.nextSibling);
  }
  function gr() {
    lt = st = null, Ae = !1;
  }
  function Cl(e) {
    St === null ? St = [e] : St.push(e);
  }
  var fg = $.ReactCurrentBatchConfig;
  function go(e, t, o) {
    if (e = o.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(r(309));
          var l = o.stateNode;
        }
        if (!l)
          throw Error(r(147, e));
        var c = l, d = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === d ? t.ref : (t = function(m) {
          var w = c.refs;
          m === null ? delete w[d] : w[d] = m;
        }, t._stringRef = d, t);
      }
      if (typeof e != "string")
        throw Error(r(284));
      if (!o._owner)
        throw Error(r(290, e));
    }
    return e;
  }
  function Si(e, t) {
    throw e = Object.prototype.toString.call(t), Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Bc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Wc(e) {
    function t(T, k) {
      if (e) {
        var O = T.deletions;
        O === null ? (T.deletions = [k], T.flags |= 16) : O.push(k);
      }
    }
    function o(T, k) {
      if (!e)
        return null;
      for (; k !== null; )
        t(T, k), k = k.sibling;
      return null;
    }
    function l(T, k) {
      for (T = /* @__PURE__ */ new Map(); k !== null; )
        k.key !== null ? T.set(k.key, k) : T.set(k.index, k), k = k.sibling;
      return T;
    }
    function c(T, k) {
      return T = yn(T, k), T.index = 0, T.sibling = null, T;
    }
    function d(T, k, O) {
      return T.index = O, e ? (O = T.alternate, O !== null ? (O = O.index, O < k ? (T.flags |= 2, k) : O) : (T.flags |= 2, k)) : (T.flags |= 1048576, k);
    }
    function m(T) {
      return e && T.alternate === null && (T.flags |= 2), T;
    }
    function w(T, k, O, F) {
      return k === null || k.tag !== 6 ? (k = va(O, T.mode, F), k.return = T, k) : (k = c(k, O), k.return = T, k);
    }
    function x(T, k, O, F) {
      var Y = O.type;
      return Y === q ? I(T, k, O.props.children, F, O.key) : k !== null && (k.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === he && Bc(Y) === k.type) ? (F = c(k, O.props), F.ref = go(T, k, O), F.return = T, F) : (F = Gi(O.type, O.key, O.props, null, T.mode, F), F.ref = go(T, k, O), F.return = T, F);
    }
    function R(T, k, O, F) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== O.containerInfo || k.stateNode.implementation !== O.implementation ? (k = ya(O, T.mode, F), k.return = T, k) : (k = c(k, O.children || []), k.return = T, k);
    }
    function I(T, k, O, F, Y) {
      return k === null || k.tag !== 7 ? (k = Vn(O, T.mode, F, Y), k.return = T, k) : (k = c(k, O), k.return = T, k);
    }
    function z(T, k, O) {
      if (typeof k == "string" && k !== "" || typeof k == "number")
        return k = va("" + k, T.mode, O), k.return = T, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case U:
            return O = Gi(k.type, k.key, k.props, null, T.mode, O), O.ref = go(T, null, k), O.return = T, O;
          case Z:
            return k = ya(k, T.mode, O), k.return = T, k;
          case he:
            var F = k._init;
            return z(T, F(k._payload), O);
        }
        if (Hr(k) || H(k))
          return k = Vn(k, T.mode, O, null), k.return = T, k;
        Si(T, k);
      }
      return null;
    }
    function L(T, k, O, F) {
      var Y = k !== null ? k.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number")
        return Y !== null ? null : w(T, k, "" + O, F);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case U:
            return O.key === Y ? x(T, k, O, F) : null;
          case Z:
            return O.key === Y ? R(T, k, O, F) : null;
          case he:
            return Y = O._init, L(
              T,
              k,
              Y(O._payload),
              F
            );
        }
        if (Hr(O) || H(O))
          return Y !== null ? null : I(T, k, O, F, null);
        Si(T, O);
      }
      return null;
    }
    function K(T, k, O, F, Y) {
      if (typeof F == "string" && F !== "" || typeof F == "number")
        return T = T.get(O) || null, w(k, T, "" + F, Y);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case U:
            return T = T.get(F.key === null ? O : F.key) || null, x(k, T, F, Y);
          case Z:
            return T = T.get(F.key === null ? O : F.key) || null, R(k, T, F, Y);
          case he:
            var ee = F._init;
            return K(T, k, O, ee(F._payload), Y);
        }
        if (Hr(F) || H(F))
          return T = T.get(O) || null, I(k, T, F, Y, null);
        Si(k, F);
      }
      return null;
    }
    function Q(T, k, O, F) {
      for (var Y = null, ee = null, te = k, re = k = 0, Be = null; te !== null && re < O.length; re++) {
        te.index > re ? (Be = te, te = null) : Be = te.sibling;
        var _e = L(T, te, O[re], F);
        if (_e === null) {
          te === null && (te = Be);
          break;
        }
        e && te && _e.alternate === null && t(T, te), k = d(_e, k, re), ee === null ? Y = _e : ee.sibling = _e, ee = _e, te = Be;
      }
      if (re === O.length)
        return o(T, te), Ae && Dn(T, re), Y;
      if (te === null) {
        for (; re < O.length; re++)
          te = z(T, O[re], F), te !== null && (k = d(te, k, re), ee === null ? Y = te : ee.sibling = te, ee = te);
        return Ae && Dn(T, re), Y;
      }
      for (te = l(T, te); re < O.length; re++)
        Be = K(te, T, re, O[re], F), Be !== null && (e && Be.alternate !== null && te.delete(Be.key === null ? re : Be.key), k = d(Be, k, re), ee === null ? Y = Be : ee.sibling = Be, ee = Be);
      return e && te.forEach(function(wn) {
        return t(T, wn);
      }), Ae && Dn(T, re), Y;
    }
    function J(T, k, O, F) {
      var Y = H(O);
      if (typeof Y != "function")
        throw Error(r(150));
      if (O = Y.call(O), O == null)
        throw Error(r(151));
      for (var ee = Y = null, te = k, re = k = 0, Be = null, _e = O.next(); te !== null && !_e.done; re++, _e = O.next()) {
        te.index > re ? (Be = te, te = null) : Be = te.sibling;
        var wn = L(T, te, _e.value, F);
        if (wn === null) {
          te === null && (te = Be);
          break;
        }
        e && te && wn.alternate === null && t(T, te), k = d(wn, k, re), ee === null ? Y = wn : ee.sibling = wn, ee = wn, te = Be;
      }
      if (_e.done)
        return o(
          T,
          te
        ), Ae && Dn(T, re), Y;
      if (te === null) {
        for (; !_e.done; re++, _e = O.next())
          _e = z(T, _e.value, F), _e !== null && (k = d(_e, k, re), ee === null ? Y = _e : ee.sibling = _e, ee = _e);
        return Ae && Dn(T, re), Y;
      }
      for (te = l(T, te); !_e.done; re++, _e = O.next())
        _e = K(te, T, re, _e.value, F), _e !== null && (e && _e.alternate !== null && te.delete(_e.key === null ? re : _e.key), k = d(_e, k, re), ee === null ? Y = _e : ee.sibling = _e, ee = _e);
      return e && te.forEach(function(Vg) {
        return t(T, Vg);
      }), Ae && Dn(T, re), Y;
    }
    function $e(T, k, O, F) {
      if (typeof O == "object" && O !== null && O.type === q && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case U:
            e: {
              for (var Y = O.key, ee = k; ee !== null; ) {
                if (ee.key === Y) {
                  if (Y = O.type, Y === q) {
                    if (ee.tag === 7) {
                      o(T, ee.sibling), k = c(ee, O.props.children), k.return = T, T = k;
                      break e;
                    }
                  } else if (ee.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === he && Bc(Y) === ee.type) {
                    o(T, ee.sibling), k = c(ee, O.props), k.ref = go(T, ee, O), k.return = T, T = k;
                    break e;
                  }
                  o(T, ee);
                  break;
                } else
                  t(T, ee);
                ee = ee.sibling;
              }
              O.type === q ? (k = Vn(O.props.children, T.mode, F, O.key), k.return = T, T = k) : (F = Gi(O.type, O.key, O.props, null, T.mode, F), F.ref = go(T, k, O), F.return = T, T = F);
            }
            return m(T);
          case Z:
            e: {
              for (ee = O.key; k !== null; ) {
                if (k.key === ee)
                  if (k.tag === 4 && k.stateNode.containerInfo === O.containerInfo && k.stateNode.implementation === O.implementation) {
                    o(T, k.sibling), k = c(k, O.children || []), k.return = T, T = k;
                    break e;
                  } else {
                    o(T, k);
                    break;
                  }
                else
                  t(T, k);
                k = k.sibling;
              }
              k = ya(O, T.mode, F), k.return = T, T = k;
            }
            return m(T);
          case he:
            return ee = O._init, $e(T, k, ee(O._payload), F);
        }
        if (Hr(O))
          return Q(T, k, O, F);
        if (H(O))
          return J(T, k, O, F);
        Si(T, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O, k !== null && k.tag === 6 ? (o(T, k.sibling), k = c(k, O), k.return = T, T = k) : (o(T, k), k = va(O, T.mode, F), k.return = T, T = k), m(T)) : o(T, k);
    }
    return $e;
  }
  var vr = Wc(!0), Hc = Wc(!1), bi = an(null), Ei = null, yr = null, Pl = null;
  function Tl() {
    Pl = yr = Ei = null;
  }
  function Ol(e) {
    var t = bi.current;
    Oe(bi), e._currentValue = t;
  }
  function Rl(e, t, o) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === o)
        break;
      e = e.return;
    }
  }
  function wr(e, t) {
    Ei = e, Pl = yr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (tt = !0), e.firstContext = null);
  }
  function pt(e) {
    var t = e._currentValue;
    if (Pl !== e)
      if (e = { context: e, memoizedValue: t, next: null }, yr === null) {
        if (Ei === null)
          throw Error(r(308));
        yr = e, Ei.dependencies = { lanes: 0, firstContext: e };
      } else
        yr = yr.next = e;
    return t;
  }
  var zn = null;
  function Al(e) {
    zn === null ? zn = [e] : zn.push(e);
  }
  function Vc(e, t, o, l) {
    var c = t.interleaved;
    return c === null ? (o.next = o, Al(t)) : (o.next = c.next, c.next = o), t.interleaved = o, Kt(e, l);
  }
  function Kt(e, t) {
    e.lanes |= t;
    var o = e.alternate;
    for (o !== null && (o.lanes |= t), o = e, e = e.return; e !== null; )
      e.childLanes |= t, o = e.alternate, o !== null && (o.childLanes |= t), o = e, e = e.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var dn = !1;
  function jl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Kc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Gt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function fn(e, t, o) {
    var l = e.updateQueue;
    if (l === null)
      return null;
    if (l = l.shared, ve & 2) {
      var c = l.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), l.pending = t, Kt(e, o);
    }
    return c = l.interleaved, c === null ? (t.next = t, Al(l)) : (t.next = c.next, c.next = t), l.interleaved = t, Kt(e, o);
  }
  function Ci(e, t, o) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (o & 4194240) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, o |= l, t.lanes = o, Ks(e, o);
    }
  }
  function Gc(e, t) {
    var o = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, o === l)) {
      var c = null, d = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var m = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          d === null ? c = d = m : d = d.next = m, o = o.next;
        } while (o !== null);
        d === null ? c = d = t : d = d.next = t;
      } else
        c = d = t;
      o = { baseState: l.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: l.shared, effects: l.effects }, e.updateQueue = o;
      return;
    }
    e = o.lastBaseUpdate, e === null ? o.firstBaseUpdate = t : e.next = t, o.lastBaseUpdate = t;
  }
  function Pi(e, t, o, l) {
    var c = e.updateQueue;
    dn = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, w = c.shared.pending;
    if (w !== null) {
      c.shared.pending = null;
      var x = w, R = x.next;
      x.next = null, m === null ? d = R : m.next = R, m = x;
      var I = e.alternate;
      I !== null && (I = I.updateQueue, w = I.lastBaseUpdate, w !== m && (w === null ? I.firstBaseUpdate = R : w.next = R, I.lastBaseUpdate = x));
    }
    if (d !== null) {
      var z = c.baseState;
      m = 0, I = R = x = null, w = d;
      do {
        var L = w.lane, K = w.eventTime;
        if ((l & L) === L) {
          I !== null && (I = I.next = {
            eventTime: K,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var Q = e, J = w;
            switch (L = t, K = o, J.tag) {
              case 1:
                if (Q = J.payload, typeof Q == "function") {
                  z = Q.call(K, z, L);
                  break e;
                }
                z = Q;
                break e;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = J.payload, L = typeof Q == "function" ? Q.call(K, z, L) : Q, L == null)
                  break e;
                z = V({}, z, L);
                break e;
              case 2:
                dn = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (e.flags |= 64, L = c.effects, L === null ? c.effects = [w] : L.push(w));
        } else
          K = { eventTime: K, lane: L, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, I === null ? (R = I = K, x = z) : I = I.next = K, m |= L;
        if (w = w.next, w === null) {
          if (w = c.shared.pending, w === null)
            break;
          L = w, w = L.next, L.next = null, c.lastBaseUpdate = L, c.shared.pending = null;
        }
      } while (1);
      if (I === null && (x = z), c.baseState = x, c.firstBaseUpdate = R, c.lastBaseUpdate = I, t = c.shared.interleaved, t !== null) {
        c = t;
        do
          m |= c.lane, c = c.next;
        while (c !== t);
      } else
        d === null && (c.shared.lanes = 0);
      Un |= m, e.lanes = m, e.memoizedState = z;
    }
  }
  function Qc(e, t, o) {
    if (e = t.effects, t.effects = null, e !== null)
      for (t = 0; t < e.length; t++) {
        var l = e[t], c = l.callback;
        if (c !== null) {
          if (l.callback = null, l = o, typeof c != "function")
            throw Error(r(191, c));
          c.call(l);
        }
      }
  }
  var vo = {}, Lt = an(vo), yo = an(vo), wo = an(vo);
  function Mn(e) {
    if (e === vo)
      throw Error(r(174));
    return e;
  }
  function Nl(e, t) {
    switch (Ce(wo, t), Ce(yo, e), Ce(Lt, vo), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ls(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ls(t, e);
    }
    Oe(Lt), Ce(Lt, t);
  }
  function _r() {
    Oe(Lt), Oe(yo), Oe(wo);
  }
  function qc(e) {
    Mn(wo.current);
    var t = Mn(Lt.current), o = Ls(t, e.type);
    t !== o && (Ce(yo, e), Ce(Lt, o));
  }
  function Ll(e) {
    yo.current === e && (Oe(Lt), Oe(yo));
  }
  var je = an(0);
  function Ti(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var o = t.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Il = [];
  function $l() {
    for (var e = 0; e < Il.length; e++)
      Il[e]._workInProgressVersionPrimary = null;
    Il.length = 0;
  }
  var Oi = $.ReactCurrentDispatcher, Dl = $.ReactCurrentBatchConfig, Fn = 0, Ne = null, ze = null, Fe = null, Ri = !1, _o = !1, xo = 0, hg = 0;
  function Ke() {
    throw Error(r(321));
  }
  function zl(e, t) {
    if (t === null)
      return !1;
    for (var o = 0; o < t.length && o < e.length; o++)
      if (!kt(e[o], t[o]))
        return !1;
    return !0;
  }
  function Ml(e, t, o, l, c, d) {
    if (Fn = d, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Oi.current = e === null || e.memoizedState === null ? vg : yg, e = o(l, c), _o) {
      d = 0;
      do {
        if (_o = !1, xo = 0, 25 <= d)
          throw Error(r(301));
        d += 1, Fe = ze = null, t.updateQueue = null, Oi.current = wg, e = o(l, c);
      } while (_o);
    }
    if (Oi.current = Ni, t = ze !== null && ze.next !== null, Fn = 0, Fe = ze = Ne = null, Ri = !1, t)
      throw Error(r(300));
    return e;
  }
  function Fl() {
    var e = xo !== 0;
    return xo = 0, e;
  }
  function It() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Fe === null ? Ne.memoizedState = Fe = e : Fe = Fe.next = e, Fe;
  }
  function mt() {
    if (ze === null) {
      var e = Ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = ze.next;
    var t = Fe === null ? Ne.memoizedState : Fe.next;
    if (t !== null)
      Fe = t, ze = e;
    else {
      if (e === null)
        throw Error(r(310));
      ze = e, e = { memoizedState: ze.memoizedState, baseState: ze.baseState, baseQueue: ze.baseQueue, queue: ze.queue, next: null }, Fe === null ? Ne.memoizedState = Fe = e : Fe = Fe.next = e;
    }
    return Fe;
  }
  function ko(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ul(e) {
    var t = mt(), o = t.queue;
    if (o === null)
      throw Error(r(311));
    o.lastRenderedReducer = e;
    var l = ze, c = l.baseQueue, d = o.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      l.baseQueue = c = d, o.pending = null;
    }
    if (c !== null) {
      d = c.next, l = l.baseState;
      var w = m = null, x = null, R = d;
      do {
        var I = R.lane;
        if ((Fn & I) === I)
          x !== null && (x = x.next = { lane: 0, action: R.action, hasEagerState: R.hasEagerState, eagerState: R.eagerState, next: null }), l = R.hasEagerState ? R.eagerState : e(l, R.action);
        else {
          var z = {
            lane: I,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          };
          x === null ? (w = x = z, m = l) : x = x.next = z, Ne.lanes |= I, Un |= I;
        }
        R = R.next;
      } while (R !== null && R !== d);
      x === null ? m = l : x.next = w, kt(l, t.memoizedState) || (tt = !0), t.memoizedState = l, t.baseState = m, t.baseQueue = x, o.lastRenderedState = l;
    }
    if (e = o.interleaved, e !== null) {
      c = e;
      do
        d = c.lane, Ne.lanes |= d, Un |= d, c = c.next;
      while (c !== e);
    } else
      c === null && (o.lanes = 0);
    return [t.memoizedState, o.dispatch];
  }
  function Bl(e) {
    var t = mt(), o = t.queue;
    if (o === null)
      throw Error(r(311));
    o.lastRenderedReducer = e;
    var l = o.dispatch, c = o.pending, d = t.memoizedState;
    if (c !== null) {
      o.pending = null;
      var m = c = c.next;
      do
        d = e(d, m.action), m = m.next;
      while (m !== c);
      kt(d, t.memoizedState) || (tt = !0), t.memoizedState = d, t.baseQueue === null && (t.baseState = d), o.lastRenderedState = d;
    }
    return [d, l];
  }
  function Jc() {
  }
  function Yc(e, t) {
    var o = Ne, l = mt(), c = t(), d = !kt(l.memoizedState, c);
    if (d && (l.memoizedState = c, tt = !0), l = l.queue, Wl(ed.bind(null, o, l, e), [e]), l.getSnapshot !== t || d || Fe !== null && Fe.memoizedState.tag & 1) {
      if (o.flags |= 2048, So(9, Zc.bind(null, o, l, c, t), void 0, null), Ue === null)
        throw Error(r(349));
      Fn & 30 || Xc(o, t, c);
    }
    return c;
  }
  function Xc(e, t, o) {
    e.flags |= 16384, e = { getSnapshot: t, value: o }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.stores = [e]) : (o = t.stores, o === null ? t.stores = [e] : o.push(e));
  }
  function Zc(e, t, o, l) {
    t.value = o, t.getSnapshot = l, td(t) && nd(e);
  }
  function ed(e, t, o) {
    return o(function() {
      td(t) && nd(e);
    });
  }
  function td(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var o = t();
      return !kt(e, o);
    } catch {
      return !0;
    }
  }
  function nd(e) {
    var t = Kt(e, 1);
    t !== null && Pt(t, e, 1, -1);
  }
  function rd(e) {
    var t = It();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ko, lastRenderedState: e }, t.queue = e, e = e.dispatch = gg.bind(null, Ne, e), [t.memoizedState, e];
  }
  function So(e, t, o, l) {
    return e = { tag: e, create: t, destroy: o, deps: l, next: null }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.lastEffect = e.next = e) : (o = t.lastEffect, o === null ? t.lastEffect = e.next = e : (l = o.next, o.next = e, e.next = l, t.lastEffect = e)), e;
  }
  function od() {
    return mt().memoizedState;
  }
  function Ai(e, t, o, l) {
    var c = It();
    Ne.flags |= e, c.memoizedState = So(1 | t, o, void 0, l === void 0 ? null : l);
  }
  function ji(e, t, o, l) {
    var c = mt();
    l = l === void 0 ? null : l;
    var d = void 0;
    if (ze !== null) {
      var m = ze.memoizedState;
      if (d = m.destroy, l !== null && zl(l, m.deps)) {
        c.memoizedState = So(t, o, d, l);
        return;
      }
    }
    Ne.flags |= e, c.memoizedState = So(1 | t, o, d, l);
  }
  function id(e, t) {
    return Ai(8390656, 8, e, t);
  }
  function Wl(e, t) {
    return ji(2048, 8, e, t);
  }
  function sd(e, t) {
    return ji(4, 2, e, t);
  }
  function ld(e, t) {
    return ji(4, 4, e, t);
  }
  function ad(e, t) {
    if (typeof t == "function")
      return e = e(), t(e), function() {
        t(null);
      };
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function ud(e, t, o) {
    return o = o != null ? o.concat([e]) : null, ji(4, 4, ad.bind(null, t, e), o);
  }
  function Hl() {
  }
  function cd(e, t) {
    var o = mt();
    t = t === void 0 ? null : t;
    var l = o.memoizedState;
    return l !== null && t !== null && zl(t, l[1]) ? l[0] : (o.memoizedState = [e, t], e);
  }
  function dd(e, t) {
    var o = mt();
    t = t === void 0 ? null : t;
    var l = o.memoizedState;
    return l !== null && t !== null && zl(t, l[1]) ? l[0] : (e = e(), o.memoizedState = [e, t], e);
  }
  function fd(e, t, o) {
    return Fn & 21 ? (kt(o, t) || (o = Bu(), Ne.lanes |= o, Un |= o, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, tt = !0), e.memoizedState = o);
  }
  function pg(e, t) {
    var o = Se;
    Se = o !== 0 && 4 > o ? o : 4, e(!0);
    var l = Dl.transition;
    Dl.transition = {};
    try {
      e(!1), t();
    } finally {
      Se = o, Dl.transition = l;
    }
  }
  function hd() {
    return mt().memoizedState;
  }
  function mg(e, t, o) {
    var l = gn(e);
    if (o = { lane: l, action: o, hasEagerState: !1, eagerState: null, next: null }, pd(e))
      md(t, o);
    else if (o = Vc(e, t, o, l), o !== null) {
      var c = Xe();
      Pt(o, e, l, c), gd(o, t, l);
    }
  }
  function gg(e, t, o) {
    var l = gn(e), c = { lane: l, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (pd(e))
      md(t, c);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer, d !== null))
        try {
          var m = t.lastRenderedState, w = d(m, o);
          if (c.hasEagerState = !0, c.eagerState = w, kt(w, m)) {
            var x = t.interleaved;
            x === null ? (c.next = c, Al(t)) : (c.next = x.next, x.next = c), t.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      o = Vc(e, t, c, l), o !== null && (c = Xe(), Pt(o, e, l, c), gd(o, t, l));
    }
  }
  function pd(e) {
    var t = e.alternate;
    return e === Ne || t !== null && t === Ne;
  }
  function md(e, t) {
    _o = Ri = !0;
    var o = e.pending;
    o === null ? t.next = t : (t.next = o.next, o.next = t), e.pending = t;
  }
  function gd(e, t, o) {
    if (o & 4194240) {
      var l = t.lanes;
      l &= e.pendingLanes, o |= l, t.lanes = o, Ks(e, o);
    }
  }
  var Ni = { readContext: pt, useCallback: Ke, useContext: Ke, useEffect: Ke, useImperativeHandle: Ke, useInsertionEffect: Ke, useLayoutEffect: Ke, useMemo: Ke, useReducer: Ke, useRef: Ke, useState: Ke, useDebugValue: Ke, useDeferredValue: Ke, useTransition: Ke, useMutableSource: Ke, useSyncExternalStore: Ke, useId: Ke, unstable_isNewReconciler: !1 }, vg = { readContext: pt, useCallback: function(e, t) {
    return It().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: pt, useEffect: id, useImperativeHandle: function(e, t, o) {
    return o = o != null ? o.concat([e]) : null, Ai(
      4194308,
      4,
      ad.bind(null, t, e),
      o
    );
  }, useLayoutEffect: function(e, t) {
    return Ai(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ai(4, 2, e, t);
  }, useMemo: function(e, t) {
    var o = It();
    return t = t === void 0 ? null : t, e = e(), o.memoizedState = [e, t], e;
  }, useReducer: function(e, t, o) {
    var l = It();
    return t = o !== void 0 ? o(t) : t, l.memoizedState = l.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, l.queue = e, e = e.dispatch = mg.bind(null, Ne, e), [l.memoizedState, e];
  }, useRef: function(e) {
    var t = It();
    return e = { current: e }, t.memoizedState = e;
  }, useState: rd, useDebugValue: Hl, useDeferredValue: function(e) {
    return It().memoizedState = e;
  }, useTransition: function() {
    var e = rd(!1), t = e[0];
    return e = pg.bind(null, e[1]), It().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, o) {
    var l = Ne, c = It();
    if (Ae) {
      if (o === void 0)
        throw Error(r(407));
      o = o();
    } else {
      if (o = t(), Ue === null)
        throw Error(r(349));
      Fn & 30 || Xc(l, t, o);
    }
    c.memoizedState = o;
    var d = { value: o, getSnapshot: t };
    return c.queue = d, id(ed.bind(
      null,
      l,
      d,
      e
    ), [e]), l.flags |= 2048, So(9, Zc.bind(null, l, d, o, t), void 0, null), o;
  }, useId: function() {
    var e = It(), t = Ue.identifierPrefix;
    if (Ae) {
      var o = Vt, l = Ht;
      o = (l & ~(1 << 32 - xt(l) - 1)).toString(32) + o, t = ":" + t + "R" + o, o = xo++, 0 < o && (t += "H" + o.toString(32)), t += ":";
    } else
      o = hg++, t = ":" + t + "r" + o.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, yg = {
    readContext: pt,
    useCallback: cd,
    useContext: pt,
    useEffect: Wl,
    useImperativeHandle: ud,
    useInsertionEffect: sd,
    useLayoutEffect: ld,
    useMemo: dd,
    useReducer: Ul,
    useRef: od,
    useState: function() {
      return Ul(ko);
    },
    useDebugValue: Hl,
    useDeferredValue: function(e) {
      var t = mt();
      return fd(t, ze.memoizedState, e);
    },
    useTransition: function() {
      var e = Ul(ko)[0], t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Jc,
    useSyncExternalStore: Yc,
    useId: hd,
    unstable_isNewReconciler: !1
  }, wg = { readContext: pt, useCallback: cd, useContext: pt, useEffect: Wl, useImperativeHandle: ud, useInsertionEffect: sd, useLayoutEffect: ld, useMemo: dd, useReducer: Bl, useRef: od, useState: function() {
    return Bl(ko);
  }, useDebugValue: Hl, useDeferredValue: function(e) {
    var t = mt();
    return ze === null ? t.memoizedState = e : fd(t, ze.memoizedState, e);
  }, useTransition: function() {
    var e = Bl(ko)[0], t = mt().memoizedState;
    return [e, t];
  }, useMutableSource: Jc, useSyncExternalStore: Yc, useId: hd, unstable_isNewReconciler: !1 };
  function bt(e, t) {
    if (e && e.defaultProps) {
      t = V({}, t), e = e.defaultProps;
      for (var o in e)
        t[o] === void 0 && (t[o] = e[o]);
      return t;
    }
    return t;
  }
  function Vl(e, t, o, l) {
    t = e.memoizedState, o = o(l, t), o = o == null ? t : V({}, t, o), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
  }
  var Li = { isMounted: function(e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  }, enqueueSetState: function(e, t, o) {
    e = e._reactInternals;
    var l = Xe(), c = gn(e), d = Gt(l, c);
    d.payload = t, o != null && (d.callback = o), t = fn(e, d, c), t !== null && (Pt(t, e, c, l), Ci(t, e, c));
  }, enqueueReplaceState: function(e, t, o) {
    e = e._reactInternals;
    var l = Xe(), c = gn(e), d = Gt(l, c);
    d.tag = 1, d.payload = t, o != null && (d.callback = o), t = fn(e, d, c), t !== null && (Pt(t, e, c, l), Ci(t, e, c));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var o = Xe(), l = gn(e), c = Gt(o, l);
    c.tag = 2, t != null && (c.callback = t), t = fn(e, c, l), t !== null && (Pt(t, e, l, o), Ci(t, e, l));
  } };
  function vd(e, t, o, l, c, d, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, d, m) : t.prototype && t.prototype.isPureReactComponent ? !ao(o, l) || !ao(c, d) : !0;
  }
  function yd(e, t, o) {
    var l = !1, c = un, d = t.contextType;
    return typeof d == "object" && d !== null ? d = pt(d) : (c = et(t) ? In : Ve.current, l = t.contextTypes, d = (l = l != null) ? hr(e, c) : un), t = new t(o, d), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Li, e.stateNode = t, t._reactInternals = e, l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = c, e.__reactInternalMemoizedMaskedChildContext = d), t;
  }
  function wd(e, t, o, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(o, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(o, l), t.state !== e && Li.enqueueReplaceState(t, t.state, null);
  }
  function Kl(e, t, o, l) {
    var c = e.stateNode;
    c.props = o, c.state = e.memoizedState, c.refs = {}, jl(e);
    var d = t.contextType;
    typeof d == "object" && d !== null ? c.context = pt(d) : (d = et(t) ? In : Ve.current, c.context = hr(e, d)), c.state = e.memoizedState, d = t.getDerivedStateFromProps, typeof d == "function" && (Vl(e, t, d, o), c.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (t = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), t !== c.state && Li.enqueueReplaceState(c, c.state, null), Pi(e, o, c, l), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function xr(e, t) {
    try {
      var o = "", l = t;
      do
        o += pe(l), l = l.return;
      while (l);
      var c = o;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: e, source: t, stack: c, digest: null };
  }
  function Gl(e, t, o) {
    return { value: e, source: null, stack: o ?? null, digest: t ?? null };
  }
  function Ql(e, t) {
    try {
      console.error(t.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var _g = typeof WeakMap == "function" ? WeakMap : Map;
  function _d(e, t, o) {
    o = Gt(-1, o), o.tag = 3, o.payload = { element: null };
    var l = t.value;
    return o.callback = function() {
      Ui || (Ui = !0, ua = l), Ql(e, t);
    }, o;
  }
  function xd(e, t, o) {
    o = Gt(-1, o), o.tag = 3;
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var c = t.value;
      o.payload = function() {
        return l(c);
      }, o.callback = function() {
        Ql(e, t);
      };
    }
    var d = e.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (o.callback = function() {
      Ql(e, t), typeof l != "function" && (pn === null ? pn = /* @__PURE__ */ new Set([this]) : pn.add(this));
      var m = t.stack;
      this.componentDidCatch(t.value, { componentStack: m !== null ? m : "" });
    }), o;
  }
  function kd(e, t, o) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new _g();
      var c = /* @__PURE__ */ new Set();
      l.set(t, c);
    } else
      c = l.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(t, c));
    c.has(o) || (c.add(o), e = Lg.bind(null, e, t, o), t.then(e, e));
  }
  function Sd(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function bd(e, t, o, l, c) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = c, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (t = Gt(-1, 1), t.tag = 2, fn(o, t, 1))), o.lanes |= 1), e);
  }
  var xg = $.ReactCurrentOwner, tt = !1;
  function Ye(e, t, o, l) {
    t.child = e === null ? Hc(t, null, o, l) : vr(t, e.child, o, l);
  }
  function Ed(e, t, o, l, c) {
    o = o.render;
    var d = t.ref;
    return wr(t, c), l = Ml(e, t, o, l, d, c), o = Fl(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~c, Qt(e, t, c)) : (Ae && o && kl(t), t.flags |= 1, Ye(e, t, l, c), t.child);
  }
  function Cd(e, t, o, l, c) {
    if (e === null) {
      var d = o.type;
      return typeof d == "function" && !ga(d) && d.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (t.tag = 15, t.type = d, Pd(e, t, d, l, c)) : (e = Gi(o.type, null, l, t, t.mode, c), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (d = e.child, !(e.lanes & c)) {
      var m = d.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ao, o(m, l) && e.ref === t.ref)
        return Qt(e, t, c);
    }
    return t.flags |= 1, e = yn(d, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Pd(e, t, o, l, c) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (ao(d, l) && e.ref === t.ref)
        if (tt = !1, t.pendingProps = l = d, (e.lanes & c) !== 0)
          e.flags & 131072 && (tt = !0);
        else
          return t.lanes = e.lanes, Qt(e, t, c);
    }
    return ql(e, t, o, l, c);
  }
  function Td(e, t, o) {
    var l = t.pendingProps, c = l.children, d = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
      if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ce(Sr, at), at |= o;
      else {
        if (!(o & 1073741824))
          return e = d !== null ? d.baseLanes | o : o, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ce(Sr, at), at |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = d !== null ? d.baseLanes : o, Ce(Sr, at), at |= l;
      }
    else
      d !== null ? (l = d.baseLanes | o, t.memoizedState = null) : l = o, Ce(Sr, at), at |= l;
    return Ye(e, t, c, o), t.child;
  }
  function Od(e, t) {
    var o = t.ref;
    (e === null && o !== null || e !== null && e.ref !== o) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ql(e, t, o, l, c) {
    var d = et(o) ? In : Ve.current;
    return d = hr(t, d), wr(t, c), o = Ml(e, t, o, l, d, c), l = Fl(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~c, Qt(e, t, c)) : (Ae && l && kl(t), t.flags |= 1, Ye(e, t, o, c), t.child);
  }
  function Rd(e, t, o, l, c) {
    if (et(o)) {
      var d = !0;
      yi(t);
    } else
      d = !1;
    if (wr(t, c), t.stateNode === null)
      $i(e, t), yd(t, o, l), Kl(t, o, l, c), l = !0;
    else if (e === null) {
      var m = t.stateNode, w = t.memoizedProps;
      m.props = w;
      var x = m.context, R = o.contextType;
      typeof R == "object" && R !== null ? R = pt(R) : (R = et(o) ? In : Ve.current, R = hr(t, R));
      var I = o.getDerivedStateFromProps, z = typeof I == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      z || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (w !== l || x !== R) && wd(t, m, l, R), dn = !1;
      var L = t.memoizedState;
      m.state = L, Pi(t, l, m, c), x = t.memoizedState, w !== l || L !== x || Ze.current || dn ? (typeof I == "function" && (Vl(t, o, I, l), x = t.memoizedState), (w = dn || vd(t, o, w, l, L, x, R)) ? (z || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = x), m.props = l, m.state = x, m.context = R, l = w) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      m = t.stateNode, Kc(e, t), w = t.memoizedProps, R = t.type === t.elementType ? w : bt(t.type, w), m.props = R, z = t.pendingProps, L = m.context, x = o.contextType, typeof x == "object" && x !== null ? x = pt(x) : (x = et(o) ? In : Ve.current, x = hr(t, x));
      var K = o.getDerivedStateFromProps;
      (I = typeof K == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (w !== z || L !== x) && wd(t, m, l, x), dn = !1, L = t.memoizedState, m.state = L, Pi(t, l, m, c);
      var Q = t.memoizedState;
      w !== z || L !== Q || Ze.current || dn ? (typeof K == "function" && (Vl(t, o, K, l), Q = t.memoizedState), (R = dn || vd(t, o, R, l, L, Q, x) || !1) ? (I || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(l, Q, x), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(l, Q, x)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || w === e.memoizedProps && L === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && L === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = Q), m.props = l, m.state = Q, m.context = x, l = R) : (typeof m.componentDidUpdate != "function" || w === e.memoizedProps && L === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && L === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return Jl(e, t, o, l, d, c);
  }
  function Jl(e, t, o, l, c, d) {
    Od(e, t);
    var m = (t.flags & 128) !== 0;
    if (!l && !m)
      return c && Ic(t, o, !1), Qt(e, t, d);
    l = t.stateNode, xg.current = t;
    var w = m && typeof o.getDerivedStateFromError != "function" ? null : l.render();
    return t.flags |= 1, e !== null && m ? (t.child = vr(t, e.child, null, d), t.child = vr(t, null, w, d)) : Ye(e, t, w, d), t.memoizedState = l.state, c && Ic(t, o, !0), t.child;
  }
  function Ad(e) {
    var t = e.stateNode;
    t.pendingContext ? Nc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Nc(e, t.context, !1), Nl(e, t.containerInfo);
  }
  function jd(e, t, o, l, c) {
    return gr(), Cl(c), t.flags |= 256, Ye(e, t, o, l), t.child;
  }
  var Yl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Xl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Nd(e, t, o) {
    var l = t.pendingProps, c = je.current, d = !1, m = (t.flags & 128) !== 0, w;
    if ((w = m) || (w = e !== null && e.memoizedState === null ? !1 : (c & 2) !== 0), w ? (d = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (c |= 1), Ce(je, c & 1), e === null)
      return El(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (m = l.children, e = l.fallback, d ? (l = t.mode, d = t.child, m = { mode: "hidden", children: m }, !(l & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Qi(m, l, 0, null), e = Vn(e, l, o, null), d.return = t, e.return = t, d.sibling = e, t.child = d, t.child.memoizedState = Xl(o), t.memoizedState = Yl, e) : Zl(t, m));
    if (c = e.memoizedState, c !== null && (w = c.dehydrated, w !== null))
      return kg(e, t, m, l, w, c, o);
    if (d) {
      d = l.fallback, m = t.mode, c = e.child, w = c.sibling;
      var x = { mode: "hidden", children: l.children };
      return !(m & 1) && t.child !== c ? (l = t.child, l.childLanes = 0, l.pendingProps = x, t.deletions = null) : (l = yn(c, x), l.subtreeFlags = c.subtreeFlags & 14680064), w !== null ? d = yn(w, d) : (d = Vn(d, m, o, null), d.flags |= 2), d.return = t, l.return = t, l.sibling = d, t.child = l, l = d, d = t.child, m = e.child.memoizedState, m = m === null ? Xl(o) : { baseLanes: m.baseLanes | o, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = e.childLanes & ~o, t.memoizedState = Yl, l;
    }
    return d = e.child, e = d.sibling, l = yn(d, { mode: "visible", children: l.children }), !(t.mode & 1) && (l.lanes = o), l.return = t, l.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = l, t.memoizedState = null, l;
  }
  function Zl(e, t) {
    return t = Qi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Ii(e, t, o, l) {
    return l !== null && Cl(l), vr(t, e.child, null, o), e = Zl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function kg(e, t, o, l, c, d, m) {
    if (o)
      return t.flags & 256 ? (t.flags &= -257, l = Gl(Error(r(422))), Ii(e, t, m, l)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (d = l.fallback, c = t.mode, l = Qi({ mode: "visible", children: l.children }, c, 0, null), d = Vn(d, c, m, null), d.flags |= 2, l.return = t, d.return = t, l.sibling = d, t.child = l, t.mode & 1 && vr(t, e.child, null, m), t.child.memoizedState = Xl(m), t.memoizedState = Yl, d);
    if (!(t.mode & 1))
      return Ii(e, t, m, null);
    if (c.data === "$!") {
      if (l = c.nextSibling && c.nextSibling.dataset, l)
        var w = l.dgst;
      return l = w, d = Error(r(419)), l = Gl(d, l, void 0), Ii(e, t, m, l);
    }
    if (w = (m & e.childLanes) !== 0, tt || w) {
      if (l = Ue, l !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (l.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Kt(e, c), Pt(l, e, c, -1));
      }
      return ma(), l = Gl(Error(r(421))), Ii(e, t, m, l);
    }
    return c.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ig.bind(null, e), c._reactRetry = t, null) : (e = d.treeContext, lt = ln(c.nextSibling), st = t, Ae = !0, St = null, e !== null && (ft[ht++] = Ht, ft[ht++] = Vt, ft[ht++] = $n, Ht = e.id, Vt = e.overflow, $n = t), t = Zl(t, l.children), t.flags |= 4096, t);
  }
  function Ld(e, t, o) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Rl(e.return, t, o);
  }
  function ea(e, t, o, l, c) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: l, tail: o, tailMode: c } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = l, d.tail = o, d.tailMode = c);
  }
  function Id(e, t, o) {
    var l = t.pendingProps, c = l.revealOrder, d = l.tail;
    if (Ye(e, t, l.children, o), l = je.current, l & 2)
      l = l & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Ld(e, o, t);
            else if (e.tag === 19)
              Ld(e, o, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      l &= 1;
    }
    if (Ce(je, l), !(t.mode & 1))
      t.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (o = t.child, c = null; o !== null; )
            e = o.alternate, e !== null && Ti(e) === null && (c = o), o = o.sibling;
          o = c, o === null ? (c = t.child, t.child = null) : (c = o.sibling, o.sibling = null), ea(t, !1, c, o, d);
          break;
        case "backwards":
          for (o = null, c = t.child, t.child = null; c !== null; ) {
            if (e = c.alternate, e !== null && Ti(e) === null) {
              t.child = c;
              break;
            }
            e = c.sibling, c.sibling = o, o = c, c = e;
          }
          ea(t, !0, o, null, d);
          break;
        case "together":
          ea(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function $i(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Qt(e, t, o) {
    if (e !== null && (t.dependencies = e.dependencies), Un |= t.lanes, !(o & t.childLanes))
      return null;
    if (e !== null && t.child !== e.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, o = yn(e, e.pendingProps), t.child = o, o.return = t; e.sibling !== null; )
        e = e.sibling, o = o.sibling = yn(e, e.pendingProps), o.return = t;
      o.sibling = null;
    }
    return t.child;
  }
  function Sg(e, t, o) {
    switch (t.tag) {
      case 3:
        Ad(t), gr();
        break;
      case 5:
        qc(t);
        break;
      case 1:
        et(t.type) && yi(t);
        break;
      case 4:
        Nl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var l = t.type._context, c = t.memoizedProps.value;
        Ce(bi, l._currentValue), l._currentValue = c;
        break;
      case 13:
        if (l = t.memoizedState, l !== null)
          return l.dehydrated !== null ? (Ce(je, je.current & 1), t.flags |= 128, null) : o & t.child.childLanes ? Nd(e, t, o) : (Ce(je, je.current & 1), e = Qt(e, t, o), e !== null ? e.sibling : null);
        Ce(je, je.current & 1);
        break;
      case 19:
        if (l = (o & t.childLanes) !== 0, e.flags & 128) {
          if (l)
            return Id(e, t, o);
          t.flags |= 128;
        }
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ce(je, je.current), l)
          break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Td(e, t, o);
    }
    return Qt(e, t, o);
  }
  var $d, ta, Dd, zd;
  $d = function(e, t) {
    for (var o = t.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        e.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === t)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === t)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, ta = function() {
  }, Dd = function(e, t, o, l) {
    var c = e.memoizedProps;
    if (c !== l) {
      e = t.stateNode, Mn(Lt.current);
      var d = null;
      switch (o) {
        case "input":
          c = Rs(e, c), l = Rs(e, l), d = [];
          break;
        case "select":
          c = V({}, c, { value: void 0 }), l = V({}, l, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Ns(e, c), l = Ns(e, l), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof l.onClick == "function" && (e.onclick = mi);
      }
      Is(o, l);
      var m;
      o = null;
      for (R in c)
        if (!l.hasOwnProperty(R) && c.hasOwnProperty(R) && c[R] != null)
          if (R === "style") {
            var w = c[R];
            for (m in w)
              w.hasOwnProperty(m) && (o || (o = {}), o[m] = "");
          } else
            R !== "dangerouslySetInnerHTML" && R !== "children" && R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && R !== "autoFocus" && (a.hasOwnProperty(R) ? d || (d = []) : (d = d || []).push(R, null));
      for (R in l) {
        var x = l[R];
        if (w = c?.[R], l.hasOwnProperty(R) && x !== w && (x != null || w != null))
          if (R === "style")
            if (w) {
              for (m in w)
                !w.hasOwnProperty(m) || x && x.hasOwnProperty(m) || (o || (o = {}), o[m] = "");
              for (m in x)
                x.hasOwnProperty(m) && w[m] !== x[m] && (o || (o = {}), o[m] = x[m]);
            } else
              o || (d || (d = []), d.push(
                R,
                o
              )), o = x;
          else
            R === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, w = w ? w.__html : void 0, x != null && w !== x && (d = d || []).push(R, x)) : R === "children" ? typeof x != "string" && typeof x != "number" || (d = d || []).push(R, "" + x) : R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && (a.hasOwnProperty(R) ? (x != null && R === "onScroll" && Te("scroll", e), d || w === x || (d = [])) : (d = d || []).push(R, x));
      }
      o && (d = d || []).push("style", o);
      var R = d;
      (t.updateQueue = R) && (t.flags |= 4);
    }
  }, zd = function(e, t, o, l) {
    o !== l && (t.flags |= 4);
  };
  function bo(e, t) {
    if (!Ae)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var o = null; t !== null; )
            t.alternate !== null && (o = t), t = t.sibling;
          o === null ? e.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = e.tail;
          for (var l = null; o !== null; )
            o.alternate !== null && (l = o), o = o.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function Ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, o = 0, l = 0;
    if (t)
      for (var c = e.child; c !== null; )
        o |= c.lanes | c.childLanes, l |= c.subtreeFlags & 14680064, l |= c.flags & 14680064, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        o |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= l, e.childLanes = o, t;
  }
  function bg(e, t, o) {
    var l = t.pendingProps;
    switch (Sl(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ge(t), null;
      case 1:
        return et(t.type) && vi(), Ge(t), null;
      case 3:
        return l = t.stateNode, _r(), Oe(Ze), Oe(Ve), $l(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (ki(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, St !== null && (fa(St), St = null))), ta(e, t), Ge(t), null;
      case 5:
        Ll(t);
        var c = Mn(wo.current);
        if (o = t.type, e !== null && t.stateNode != null)
          Dd(e, t, o, l, c), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Ge(t), null;
          }
          if (e = Mn(Lt.current), ki(t)) {
            l = t.stateNode, o = t.type;
            var d = t.memoizedProps;
            switch (l[Nt] = t, l[po] = d, e = (t.mode & 1) !== 0, o) {
              case "dialog":
                Te("cancel", l), Te("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                Te("load", l);
                break;
              case "video":
              case "audio":
                for (c = 0; c < co.length; c++)
                  Te(co[c], l);
                break;
              case "source":
                Te("error", l);
                break;
              case "img":
              case "image":
              case "link":
                Te(
                  "error",
                  l
                ), Te("load", l);
                break;
              case "details":
                Te("toggle", l);
                break;
              case "input":
                yu(l, d), Te("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!d.multiple }, Te("invalid", l);
                break;
              case "textarea":
                xu(l, d), Te("invalid", l);
            }
            Is(o, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var w = d[m];
                m === "children" ? typeof w == "string" ? l.textContent !== w && (d.suppressHydrationWarning !== !0 && pi(l.textContent, w, e), c = ["children", w]) : typeof w == "number" && l.textContent !== "" + w && (d.suppressHydrationWarning !== !0 && pi(
                  l.textContent,
                  w,
                  e
                ), c = ["children", "" + w]) : a.hasOwnProperty(m) && w != null && m === "onScroll" && Te("scroll", l);
              }
            switch (o) {
              case "input":
                er(l), _u(l, d, !0);
                break;
              case "textarea":
                er(l), Su(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (l.onclick = mi);
            }
            l = c, t.updateQueue = l, l !== null && (t.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = bu(o)), e === "http://www.w3.org/1999/xhtml" ? o === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = m.createElement(o, { is: l.is }) : (e = m.createElement(o), o === "select" && (m = e, l.multiple ? m.multiple = !0 : l.size && (m.size = l.size))) : e = m.createElementNS(e, o), e[Nt] = t, e[po] = l, $d(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (m = $s(o, l), o) {
                case "dialog":
                  Te("cancel", e), Te("close", e), c = l;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Te("load", e), c = l;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < co.length; c++)
                    Te(co[c], e);
                  c = l;
                  break;
                case "source":
                  Te("error", e), c = l;
                  break;
                case "img":
                case "image":
                case "link":
                  Te(
                    "error",
                    e
                  ), Te("load", e), c = l;
                  break;
                case "details":
                  Te("toggle", e), c = l;
                  break;
                case "input":
                  yu(e, l), c = Rs(e, l), Te("invalid", e);
                  break;
                case "option":
                  c = l;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!l.multiple }, c = V({}, l, { value: void 0 }), Te("invalid", e);
                  break;
                case "textarea":
                  xu(e, l), c = Ns(e, l), Te("invalid", e);
                  break;
                default:
                  c = l;
              }
              Is(o, c), w = c;
              for (d in w)
                if (w.hasOwnProperty(d)) {
                  var x = w[d];
                  d === "style" ? Pu(e, x) : d === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, x != null && Eu(e, x)) : d === "children" ? typeof x == "string" ? (o !== "textarea" || x !== "") && Vr(e, x) : typeof x == "number" && Vr(e, "" + x) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (a.hasOwnProperty(d) ? x != null && d === "onScroll" && Te("scroll", e) : x != null && B(e, d, x, m));
                }
              switch (o) {
                case "input":
                  er(e), _u(e, l, !1);
                  break;
                case "textarea":
                  er(e), Su(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + we(l.value));
                  break;
                case "select":
                  e.multiple = !!l.multiple, d = l.value, d != null ? tr(e, !!l.multiple, d, !1) : l.defaultValue != null && tr(
                    e,
                    !!l.multiple,
                    l.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (e.onclick = mi);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ge(t), null;
      case 6:
        if (e && t.stateNode != null)
          zd(e, t, e.memoizedProps, l);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(r(166));
          if (o = Mn(wo.current), Mn(Lt.current), ki(t)) {
            if (l = t.stateNode, o = t.memoizedProps, l[Nt] = t, (d = l.nodeValue !== o) && (e = st, e !== null))
              switch (e.tag) {
                case 3:
                  pi(l.nodeValue, o, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && pi(l.nodeValue, o, (e.mode & 1) !== 0);
              }
            d && (t.flags |= 4);
          } else
            l = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(l), l[Nt] = t, t.stateNode = l;
        }
        return Ge(t), null;
      case 13:
        if (Oe(je), l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ae && lt !== null && t.mode & 1 && !(t.flags & 128))
            Uc(), gr(), t.flags |= 98560, d = !1;
          else if (d = ki(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!d)
                throw Error(r(318));
              if (d = t.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(r(317));
              d[Nt] = t;
            } else
              gr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Ge(t), d = !1;
          } else
            St !== null && (fa(St), St = null), d = !0;
          if (!d)
            return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = o, t) : (l = l !== null, l !== (e !== null && e.memoizedState !== null) && l && (t.child.flags |= 8192, t.mode & 1 && (e === null || je.current & 1 ? Me === 0 && (Me = 3) : ma())), t.updateQueue !== null && (t.flags |= 4), Ge(t), null);
      case 4:
        return _r(), ta(e, t), e === null && fo(t.stateNode.containerInfo), Ge(t), null;
      case 10:
        return Ol(t.type._context), Ge(t), null;
      case 17:
        return et(t.type) && vi(), Ge(t), null;
      case 19:
        if (Oe(je), d = t.memoizedState, d === null)
          return Ge(t), null;
        if (l = (t.flags & 128) !== 0, m = d.rendering, m === null)
          if (l)
            bo(d, !1);
          else {
            if (Me !== 0 || e !== null && e.flags & 128)
              for (e = t.child; e !== null; ) {
                if (m = Ti(e), m !== null) {
                  for (t.flags |= 128, bo(d, !1), l = m.updateQueue, l !== null && (t.updateQueue = l, t.flags |= 4), t.subtreeFlags = 0, l = o, o = t.child; o !== null; )
                    d = o, e = l, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = e, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, e = m.dependencies, d.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), o = o.sibling;
                  return Ce(je, je.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
            d.tail !== null && Ie() > br && (t.flags |= 128, l = !0, bo(d, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Ti(m), e !== null) {
              if (t.flags |= 128, l = !0, o = e.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), bo(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !Ae)
                return Ge(t), null;
            } else
              2 * Ie() - d.renderingStartTime > br && o !== 1073741824 && (t.flags |= 128, l = !0, bo(d, !1), t.lanes = 4194304);
          d.isBackwards ? (m.sibling = t.child, t.child = m) : (o = d.last, o !== null ? o.sibling = m : t.child = m, d.last = m);
        }
        return d.tail !== null ? (t = d.tail, d.rendering = t, d.tail = t.sibling, d.renderingStartTime = Ie(), t.sibling = null, o = je.current, Ce(je, l ? o & 1 | 2 : o & 1), t) : (Ge(t), null);
      case 22:
      case 23:
        return pa(), l = t.memoizedState !== null, e !== null && e.memoizedState !== null !== l && (t.flags |= 8192), l && t.mode & 1 ? at & 1073741824 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ge(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function Eg(e, t) {
    switch (Sl(t), t.tag) {
      case 1:
        return et(t.type) && vi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return _r(), Oe(Ze), Oe(Ve), $l(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ll(t), null;
      case 13:
        if (Oe(je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          gr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Oe(je), null;
      case 4:
        return _r(), null;
      case 10:
        return Ol(t.type._context), null;
      case 22:
      case 23:
        return pa(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Di = !1, Qe = !1, Cg = typeof WeakSet == "function" ? WeakSet : Set, G = null;
  function kr(e, t) {
    var o = e.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (l) {
          Le(e, t, l);
        }
      else
        o.current = null;
  }
  function na(e, t, o) {
    try {
      o();
    } catch (l) {
      Le(e, t, l);
    }
  }
  var Md = !1;
  function Pg(e, t) {
    if (pl = ri, e = vc(), sl(e)) {
      if ("selectionStart" in e)
        var o = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          o = (o = e.ownerDocument) && o.defaultView || window;
          var l = o.getSelection && o.getSelection();
          if (l && l.rangeCount !== 0) {
            o = l.anchorNode;
            var c = l.anchorOffset, d = l.focusNode;
            l = l.focusOffset;
            try {
              o.nodeType, d.nodeType;
            } catch {
              o = null;
              break e;
            }
            var m = 0, w = -1, x = -1, R = 0, I = 0, z = e, L = null;
            t:
              for (; ; ) {
                for (var K; z !== o || c !== 0 && z.nodeType !== 3 || (w = m + c), z !== d || l !== 0 && z.nodeType !== 3 || (x = m + l), z.nodeType === 3 && (m += z.nodeValue.length), (K = z.firstChild) !== null; )
                  L = z, z = K;
                for (; ; ) {
                  if (z === e)
                    break t;
                  if (L === o && ++R === c && (w = m), L === d && ++I === l && (x = m), (K = z.nextSibling) !== null)
                    break;
                  z = L, L = z.parentNode;
                }
                z = K;
              }
            o = w === -1 || x === -1 ? null : { start: w, end: x };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (ml = { focusedElem: e, selectionRange: o }, ri = !1, G = t; G !== null; )
      if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, G = e;
      else
        for (; G !== null; ) {
          t = G;
          try {
            var Q = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Q !== null) {
                    var J = Q.memoizedProps, $e = Q.memoizedState, T = t.stateNode, k = T.getSnapshotBeforeUpdate(t.elementType === t.type ? J : bt(t.type, J), $e);
                    T.__reactInternalSnapshotBeforeUpdate = k;
                  }
                  break;
                case 3:
                  var O = t.stateNode.containerInfo;
                  O.nodeType === 1 ? O.textContent = "" : O.nodeType === 9 && O.documentElement && O.removeChild(O.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(r(163));
              }
          } catch (F) {
            Le(t, t.return, F);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, G = e;
            break;
          }
          G = t.return;
        }
    return Q = Md, Md = !1, Q;
  }
  function Eo(e, t, o) {
    var l = t.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var c = l = l.next;
      do {
        if ((c.tag & e) === e) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && na(t, o, d);
        }
        c = c.next;
      } while (c !== l);
    }
  }
  function zi(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var o = t = t.next;
      do {
        if ((o.tag & e) === e) {
          var l = o.create;
          o.destroy = l();
        }
        o = o.next;
      } while (o !== t);
    }
  }
  function ra(e) {
    var t = e.ref;
    if (t !== null) {
      var o = e.stateNode;
      switch (e.tag) {
        case 5:
          e = o;
          break;
        default:
          e = o;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Fd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Fd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Nt], delete t[po], delete t[wl], delete t[ug], delete t[cg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Ud(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Bd(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Ud(e.return))
            return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
          return e.stateNode;
      }
  }
  function oa(e, t, o) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? o.nodeType === 8 ? o.parentNode.insertBefore(e, t) : o.insertBefore(e, t) : (o.nodeType === 8 ? (t = o.parentNode, t.insertBefore(e, o)) : (t = o, t.appendChild(e)), o = o._reactRootContainer, o != null || t.onclick !== null || (t.onclick = mi));
    else if (l !== 4 && (e = e.child, e !== null))
      for (oa(e, t, o), e = e.sibling; e !== null; )
        oa(e, t, o), e = e.sibling;
  }
  function ia(e, t, o) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? o.insertBefore(e, t) : o.appendChild(e);
    else if (l !== 4 && (e = e.child, e !== null))
      for (ia(e, t, o), e = e.sibling; e !== null; )
        ia(e, t, o), e = e.sibling;
  }
  var We = null, Et = !1;
  function hn(e, t, o) {
    for (o = o.child; o !== null; )
      Wd(e, t, o), o = o.sibling;
  }
  function Wd(e, t, o) {
    if (jt && typeof jt.onCommitFiberUnmount == "function")
      try {
        jt.onCommitFiberUnmount(Yo, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        Qe || kr(o, t);
      case 6:
        var l = We, c = Et;
        We = null, hn(e, t, o), We = l, Et = c, We !== null && (Et ? (e = We, o = o.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(o) : e.removeChild(o)) : We.removeChild(o.stateNode));
        break;
      case 18:
        We !== null && (Et ? (e = We, o = o.stateNode, e.nodeType === 8 ? yl(e.parentNode, o) : e.nodeType === 1 && yl(e, o), no(e)) : yl(We, o.stateNode));
        break;
      case 4:
        l = We, c = Et, We = o.stateNode.containerInfo, Et = !0, hn(e, t, o), We = l, Et = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Qe && (l = o.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
          c = l = l.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && na(o, t, m), c = c.next;
          } while (c !== l);
        }
        hn(e, t, o);
        break;
      case 1:
        if (!Qe && (kr(o, t), l = o.stateNode, typeof l.componentWillUnmount == "function"))
          try {
            l.props = o.memoizedProps, l.state = o.memoizedState, l.componentWillUnmount();
          } catch (w) {
            Le(o, t, w);
          }
        hn(e, t, o);
        break;
      case 21:
        hn(e, t, o);
        break;
      case 22:
        o.mode & 1 ? (Qe = (l = Qe) || o.memoizedState !== null, hn(e, t, o), Qe = l) : hn(e, t, o);
        break;
      default:
        hn(e, t, o);
    }
  }
  function Hd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var o = e.stateNode;
      o === null && (o = e.stateNode = new Cg()), t.forEach(function(l) {
        var c = $g.bind(null, e, l);
        o.has(l) || (o.add(l), l.then(c, c));
      });
    }
  }
  function Ct(e, t) {
    var o = t.deletions;
    if (o !== null)
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        try {
          var d = e, m = t, w = m;
          e:
            for (; w !== null; ) {
              switch (w.tag) {
                case 5:
                  We = w.stateNode, Et = !1;
                  break e;
                case 3:
                  We = w.stateNode.containerInfo, Et = !0;
                  break e;
                case 4:
                  We = w.stateNode.containerInfo, Et = !0;
                  break e;
              }
              w = w.return;
            }
          if (We === null)
            throw Error(r(160));
          Wd(d, m, c), We = null, Et = !1;
          var x = c.alternate;
          x !== null && (x.return = null), c.return = null;
        } catch (R) {
          Le(c, t, R);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
        Vd(t, e), t = t.sibling;
  }
  function Vd(e, t) {
    var o = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ct(t, e), $t(e), l & 4) {
          try {
            Eo(3, e, e.return), zi(3, e);
          } catch (J) {
            Le(e, e.return, J);
          }
          try {
            Eo(5, e, e.return);
          } catch (J) {
            Le(e, e.return, J);
          }
        }
        break;
      case 1:
        Ct(t, e), $t(e), l & 512 && o !== null && kr(o, o.return);
        break;
      case 5:
        if (Ct(t, e), $t(e), l & 512 && o !== null && kr(o, o.return), e.flags & 32) {
          var c = e.stateNode;
          try {
            Vr(c, "");
          } catch (J) {
            Le(e, e.return, J);
          }
        }
        if (l & 4 && (c = e.stateNode, c != null)) {
          var d = e.memoizedProps, m = o !== null ? o.memoizedProps : d, w = e.type, x = e.updateQueue;
          if (e.updateQueue = null, x !== null)
            try {
              w === "input" && d.type === "radio" && d.name != null && wu(c, d), $s(w, m);
              var R = $s(w, d);
              for (m = 0; m < x.length; m += 2) {
                var I = x[m], z = x[m + 1];
                I === "style" ? Pu(c, z) : I === "dangerouslySetInnerHTML" ? Eu(c, z) : I === "children" ? Vr(c, z) : B(c, I, z, R);
              }
              switch (w) {
                case "input":
                  As(c, d);
                  break;
                case "textarea":
                  ku(c, d);
                  break;
                case "select":
                  var L = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var K = d.value;
                  K != null ? tr(c, !!d.multiple, K, !1) : L !== !!d.multiple && (d.defaultValue != null ? tr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : tr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[po] = d;
            } catch (J) {
              Le(e, e.return, J);
            }
        }
        break;
      case 6:
        if (Ct(t, e), $t(e), l & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          c = e.stateNode, d = e.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (J) {
            Le(e, e.return, J);
          }
        }
        break;
      case 3:
        if (Ct(t, e), $t(e), l & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            no(t.containerInfo);
          } catch (J) {
            Le(e, e.return, J);
          }
        break;
      case 4:
        Ct(t, e), $t(e);
        break;
      case 13:
        Ct(t, e), $t(e), c = e.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (aa = Ie())), l & 4 && Hd(e);
        break;
      case 22:
        if (I = o !== null && o.memoizedState !== null, e.mode & 1 ? (Qe = (R = Qe) || I, Ct(t, e), Qe = R) : Ct(t, e), $t(e), l & 8192) {
          if (R = e.memoizedState !== null, (e.stateNode.isHidden = R) && !I && e.mode & 1)
            for (G = e, I = e.child; I !== null; ) {
              for (z = G = I; G !== null; ) {
                switch (L = G, K = L.child, L.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Eo(4, L, L.return);
                    break;
                  case 1:
                    kr(L, L.return);
                    var Q = L.stateNode;
                    if (typeof Q.componentWillUnmount == "function") {
                      l = L, o = L.return;
                      try {
                        t = l, Q.props = t.memoizedProps, Q.state = t.memoizedState, Q.componentWillUnmount();
                      } catch (J) {
                        Le(l, o, J);
                      }
                    }
                    break;
                  case 5:
                    kr(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      Qd(z);
                      continue;
                    }
                }
                K !== null ? (K.return = L, G = K) : Qd(z);
              }
              I = I.sibling;
            }
          e:
            for (I = null, z = e; ; ) {
              if (z.tag === 5) {
                if (I === null) {
                  I = z;
                  try {
                    c = z.stateNode, R ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (w = z.stateNode, x = z.memoizedProps.style, m = x != null && x.hasOwnProperty("display") ? x.display : null, w.style.display = Cu("display", m));
                  } catch (J) {
                    Le(e, e.return, J);
                  }
                }
              } else if (z.tag === 6) {
                if (I === null)
                  try {
                    z.stateNode.nodeValue = R ? "" : z.memoizedProps;
                  } catch (J) {
                    Le(e, e.return, J);
                  }
              } else if ((z.tag !== 22 && z.tag !== 23 || z.memoizedState === null || z === e) && z.child !== null) {
                z.child.return = z, z = z.child;
                continue;
              }
              if (z === e)
                break e;
              for (; z.sibling === null; ) {
                if (z.return === null || z.return === e)
                  break e;
                I === z && (I = null), z = z.return;
              }
              I === z && (I = null), z.sibling.return = z.return, z = z.sibling;
            }
        }
        break;
      case 19:
        Ct(t, e), $t(e), l & 4 && Hd(e);
        break;
      case 21:
        break;
      default:
        Ct(
          t,
          e
        ), $t(e);
    }
  }
  function $t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var o = e.return; o !== null; ) {
            if (Ud(o)) {
              var l = o;
              break e;
            }
            o = o.return;
          }
          throw Error(r(160));
        }
        switch (l.tag) {
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (Vr(c, ""), l.flags &= -33);
            var d = Bd(e);
            ia(e, d, c);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo, w = Bd(e);
            oa(e, w, m);
            break;
          default:
            throw Error(r(161));
        }
      } catch (x) {
        Le(e, e.return, x);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Tg(e, t, o) {
    G = e, Kd(e);
  }
  function Kd(e, t, o) {
    for (var l = (e.mode & 1) !== 0; G !== null; ) {
      var c = G, d = c.child;
      if (c.tag === 22 && l) {
        var m = c.memoizedState !== null || Di;
        if (!m) {
          var w = c.alternate, x = w !== null && w.memoizedState !== null || Qe;
          w = Di;
          var R = Qe;
          if (Di = m, (Qe = x) && !R)
            for (G = c; G !== null; )
              m = G, x = m.child, m.tag === 22 && m.memoizedState !== null ? qd(c) : x !== null ? (x.return = m, G = x) : qd(c);
          for (; d !== null; )
            G = d, Kd(d), d = d.sibling;
          G = c, Di = w, Qe = R;
        }
        Gd(e);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, G = d) : Gd(e);
    }
  }
  function Gd(e) {
    for (; G !== null; ) {
      var t = G;
      if (t.flags & 8772) {
        var o = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Qe || zi(5, t);
                break;
              case 1:
                var l = t.stateNode;
                if (t.flags & 4 && !Qe)
                  if (o === null)
                    l.componentDidMount();
                  else {
                    var c = t.elementType === t.type ? o.memoizedProps : bt(t.type, o.memoizedProps);
                    l.componentDidUpdate(c, o.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = t.updateQueue;
                d !== null && Qc(t, d, l);
                break;
              case 3:
                var m = t.updateQueue;
                if (m !== null) {
                  if (o = null, t.child !== null)
                    switch (t.child.tag) {
                      case 5:
                        o = t.child.stateNode;
                        break;
                      case 1:
                        o = t.child.stateNode;
                    }
                  Qc(t, m, o);
                }
                break;
              case 5:
                var w = t.stateNode;
                if (o === null && t.flags & 4) {
                  o = w;
                  var x = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      x.autoFocus && o.focus();
                      break;
                    case "img":
                      x.src && (o.src = x.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var R = t.alternate;
                  if (R !== null) {
                    var I = R.memoizedState;
                    if (I !== null) {
                      var z = I.dehydrated;
                      z !== null && no(z);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(r(163));
            }
          Qe || t.flags & 512 && ra(t);
        } catch (L) {
          Le(t, t.return, L);
        }
      }
      if (t === e) {
        G = null;
        break;
      }
      if (o = t.sibling, o !== null) {
        o.return = t.return, G = o;
        break;
      }
      G = t.return;
    }
  }
  function Qd(e) {
    for (; G !== null; ) {
      var t = G;
      if (t === e) {
        G = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        o.return = t.return, G = o;
        break;
      }
      G = t.return;
    }
  }
  function qd(e) {
    for (; G !== null; ) {
      var t = G;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var o = t.return;
            try {
              zi(4, t);
            } catch (x) {
              Le(t, o, x);
            }
            break;
          case 1:
            var l = t.stateNode;
            if (typeof l.componentDidMount == "function") {
              var c = t.return;
              try {
                l.componentDidMount();
              } catch (x) {
                Le(t, c, x);
              }
            }
            var d = t.return;
            try {
              ra(t);
            } catch (x) {
              Le(t, d, x);
            }
            break;
          case 5:
            var m = t.return;
            try {
              ra(t);
            } catch (x) {
              Le(t, m, x);
            }
        }
      } catch (x) {
        Le(t, t.return, x);
      }
      if (t === e) {
        G = null;
        break;
      }
      var w = t.sibling;
      if (w !== null) {
        w.return = t.return, G = w;
        break;
      }
      G = t.return;
    }
  }
  var Og = Math.ceil, Mi = $.ReactCurrentDispatcher, sa = $.ReactCurrentOwner, gt = $.ReactCurrentBatchConfig, ve = 0, Ue = null, De = null, He = 0, at = 0, Sr = an(0), Me = 0, Co = null, Un = 0, Fi = 0, la = 0, Po = null, nt = null, aa = 0, br = 1 / 0, qt = null, Ui = !1, ua = null, pn = null, Bi = !1, mn = null, Wi = 0, To = 0, ca = null, Hi = -1, Vi = 0;
  function Xe() {
    return ve & 6 ? Ie() : Hi !== -1 ? Hi : Hi = Ie();
  }
  function gn(e) {
    return e.mode & 1 ? ve & 2 && He !== 0 ? He & -He : fg.transition !== null ? (Vi === 0 && (Vi = Bu()), Vi) : (e = Se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Yu(e.type)), e) : 1;
  }
  function Pt(e, t, o, l) {
    if (50 < To)
      throw To = 0, ca = null, Error(r(185));
    Yr(e, o, l), (!(ve & 2) || e !== Ue) && (e === Ue && (!(ve & 2) && (Fi |= o), Me === 4 && vn(e, He)), rt(e, l), o === 1 && ve === 0 && !(t.mode & 1) && (br = Ie() + 500, wi && cn()));
  }
  function rt(e, t) {
    var o = e.callbackNode;
    fm(e, t);
    var l = ei(e, e === Ue ? He : 0);
    if (l === 0)
      o !== null && Mu(o), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = l & -l, e.callbackPriority !== t) {
      if (o != null && Mu(o), t === 1)
        e.tag === 0 ? dg(Yd.bind(null, e)) : $c(Yd.bind(null, e)), lg(function() {
          !(ve & 6) && cn();
        }), o = null;
      else {
        switch (Wu(l)) {
          case 1:
            o = Ws;
            break;
          case 4:
            o = Fu;
            break;
          case 16:
            o = Jo;
            break;
          case 536870912:
            o = Uu;
            break;
          default:
            o = Jo;
        }
        o = sf(o, Jd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = o;
    }
  }
  function Jd(e, t) {
    if (Hi = -1, Vi = 0, ve & 6)
      throw Error(r(327));
    var o = e.callbackNode;
    if (Er() && e.callbackNode !== o)
      return null;
    var l = ei(e, e === Ue ? He : 0);
    if (l === 0)
      return null;
    if (l & 30 || l & e.expiredLanes || t)
      t = Ki(e, l);
    else {
      t = l;
      var c = ve;
      ve |= 2;
      var d = Zd();
      (Ue !== e || He !== t) && (qt = null, br = Ie() + 500, Wn(e, t));
      do
        try {
          jg();
          break;
        } catch (w) {
          Xd(e, w);
        }
      while (1);
      Tl(), Mi.current = d, ve = c, De !== null ? t = 0 : (Ue = null, He = 0, t = Me);
    }
    if (t !== 0) {
      if (t === 2 && (c = Hs(e), c !== 0 && (l = c, t = da(e, c))), t === 1)
        throw o = Co, Wn(e, 0), vn(e, l), rt(e, Ie()), o;
      if (t === 6)
        vn(e, l);
      else {
        if (c = e.current.alternate, !(l & 30) && !Rg(c) && (t = Ki(e, l), t === 2 && (d = Hs(e), d !== 0 && (l = d, t = da(e, d))), t === 1))
          throw o = Co, Wn(e, 0), vn(e, l), rt(e, Ie()), o;
        switch (e.finishedWork = c, e.finishedLanes = l, t) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Hn(e, nt, qt);
            break;
          case 3:
            if (vn(e, l), (l & 130023424) === l && (t = aa + 500 - Ie(), 10 < t)) {
              if (ei(e, 0) !== 0)
                break;
              if (c = e.suspendedLanes, (c & l) !== l) {
                Xe(), e.pingedLanes |= e.suspendedLanes & c;
                break;
              }
              e.timeoutHandle = vl(Hn.bind(null, e, nt, qt), t);
              break;
            }
            Hn(e, nt, qt);
            break;
          case 4:
            if (vn(e, l), (l & 4194240) === l)
              break;
            for (t = e.eventTimes, c = -1; 0 < l; ) {
              var m = 31 - xt(l);
              d = 1 << m, m = t[m], m > c && (c = m), l &= ~d;
            }
            if (l = c, l = Ie() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Og(l / 1960)) - l, 10 < l) {
              e.timeoutHandle = vl(Hn.bind(null, e, nt, qt), l);
              break;
            }
            Hn(e, nt, qt);
            break;
          case 5:
            Hn(e, nt, qt);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return rt(e, Ie()), e.callbackNode === o ? Jd.bind(null, e) : null;
  }
  function da(e, t) {
    var o = Po;
    return e.current.memoizedState.isDehydrated && (Wn(e, t).flags |= 256), e = Ki(e, t), e !== 2 && (t = nt, nt = o, t !== null && fa(t)), e;
  }
  function fa(e) {
    nt === null ? nt = e : nt.push.apply(nt, e);
  }
  function Rg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var o = t.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var l = 0; l < o.length; l++) {
            var c = o[l], d = c.getSnapshot;
            c = c.value;
            try {
              if (!kt(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = t.child, t.subtreeFlags & 16384 && o !== null)
        o.return = t, t = o;
      else {
        if (t === e)
          break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function vn(e, t) {
    for (t &= ~la, t &= ~Fi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var o = 31 - xt(t), l = 1 << o;
      e[o] = -1, t &= ~l;
    }
  }
  function Yd(e) {
    if (ve & 6)
      throw Error(r(327));
    Er();
    var t = ei(e, 0);
    if (!(t & 1))
      return rt(e, Ie()), null;
    var o = Ki(e, t);
    if (e.tag !== 0 && o === 2) {
      var l = Hs(e);
      l !== 0 && (t = l, o = da(e, l));
    }
    if (o === 1)
      throw o = Co, Wn(e, 0), vn(e, t), rt(e, Ie()), o;
    if (o === 6)
      throw Error(r(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Hn(e, nt, qt), rt(e, Ie()), null;
  }
  function ha(e, t) {
    var o = ve;
    ve |= 1;
    try {
      return e(t);
    } finally {
      ve = o, ve === 0 && (br = Ie() + 500, wi && cn());
    }
  }
  function Bn(e) {
    mn !== null && mn.tag === 0 && !(ve & 6) && Er();
    var t = ve;
    ve |= 1;
    var o = gt.transition, l = Se;
    try {
      if (gt.transition = null, Se = 1, e)
        return e();
    } finally {
      Se = l, gt.transition = o, ve = t, !(ve & 6) && cn();
    }
  }
  function pa() {
    at = Sr.current, Oe(Sr);
  }
  function Wn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var o = e.timeoutHandle;
    if (o !== -1 && (e.timeoutHandle = -1, sg(o)), De !== null)
      for (o = De.return; o !== null; ) {
        var l = o;
        switch (Sl(l), l.tag) {
          case 1:
            l = l.type.childContextTypes, l != null && vi();
            break;
          case 3:
            _r(), Oe(Ze), Oe(Ve), $l();
            break;
          case 5:
            Ll(l);
            break;
          case 4:
            _r();
            break;
          case 13:
            Oe(je);
            break;
          case 19:
            Oe(je);
            break;
          case 10:
            Ol(l.type._context);
            break;
          case 22:
          case 23:
            pa();
        }
        o = o.return;
      }
    if (Ue = e, De = e = yn(e.current, null), He = at = t, Me = 0, Co = null, la = Fi = Un = 0, nt = Po = null, zn !== null) {
      for (t = 0; t < zn.length; t++)
        if (o = zn[t], l = o.interleaved, l !== null) {
          o.interleaved = null;
          var c = l.next, d = o.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, l.next = m;
          }
          o.pending = l;
        }
      zn = null;
    }
    return e;
  }
  function Xd(e, t) {
    do {
      var o = De;
      try {
        if (Tl(), Oi.current = Ni, Ri) {
          for (var l = Ne.memoizedState; l !== null; ) {
            var c = l.queue;
            c !== null && (c.pending = null), l = l.next;
          }
          Ri = !1;
        }
        if (Fn = 0, Fe = ze = Ne = null, _o = !1, xo = 0, sa.current = null, o === null || o.return === null) {
          Me = 1, Co = t, De = null;
          break;
        }
        e: {
          var d = e, m = o.return, w = o, x = t;
          if (t = He, w.flags |= 32768, x !== null && typeof x == "object" && typeof x.then == "function") {
            var R = x, I = w, z = I.tag;
            if (!(I.mode & 1) && (z === 0 || z === 11 || z === 15)) {
              var L = I.alternate;
              L ? (I.updateQueue = L.updateQueue, I.memoizedState = L.memoizedState, I.lanes = L.lanes) : (I.updateQueue = null, I.memoizedState = null);
            }
            var K = Sd(m);
            if (K !== null) {
              K.flags &= -257, bd(K, m, w, d, t), K.mode & 1 && kd(d, R, t), t = K, x = R;
              var Q = t.updateQueue;
              if (Q === null) {
                var J = /* @__PURE__ */ new Set();
                J.add(x), t.updateQueue = J;
              } else
                Q.add(x);
              break e;
            } else {
              if (!(t & 1)) {
                kd(d, R, t), ma();
                break e;
              }
              x = Error(r(426));
            }
          } else if (Ae && w.mode & 1) {
            var $e = Sd(m);
            if ($e !== null) {
              !($e.flags & 65536) && ($e.flags |= 256), bd($e, m, w, d, t), Cl(xr(x, w));
              break e;
            }
          }
          d = x = xr(x, w), Me !== 4 && (Me = 2), Po === null ? Po = [d] : Po.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, t &= -t, d.lanes |= t;
                var T = _d(d, x, t);
                Gc(d, T);
                break e;
              case 1:
                w = x;
                var k = d.type, O = d.stateNode;
                if (!(d.flags & 128) && (typeof k.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (pn === null || !pn.has(O)))) {
                  d.flags |= 65536, t &= -t, d.lanes |= t;
                  var F = xd(d, w, t);
                  Gc(d, F);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        tf(o);
      } catch (Y) {
        t = Y, De === o && o !== null && (De = o = o.return);
        continue;
      }
      break;
    } while (1);
  }
  function Zd() {
    var e = Mi.current;
    return Mi.current = Ni, e === null ? Ni : e;
  }
  function ma() {
    (Me === 0 || Me === 3 || Me === 2) && (Me = 4), Ue === null || !(Un & 268435455) && !(Fi & 268435455) || vn(Ue, He);
  }
  function Ki(e, t) {
    var o = ve;
    ve |= 2;
    var l = Zd();
    (Ue !== e || He !== t) && (qt = null, Wn(e, t));
    do
      try {
        Ag();
        break;
      } catch (c) {
        Xd(e, c);
      }
    while (1);
    if (Tl(), ve = o, Mi.current = l, De !== null)
      throw Error(r(261));
    return Ue = null, He = 0, Me;
  }
  function Ag() {
    for (; De !== null; )
      ef(De);
  }
  function jg() {
    for (; De !== null && !rm(); )
      ef(De);
  }
  function ef(e) {
    var t = of(e.alternate, e, at);
    e.memoizedProps = e.pendingProps, t === null ? tf(e) : De = t, sa.current = null;
  }
  function tf(e) {
    var t = e;
    do {
      var o = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (o = Eg(o, t), o !== null) {
          o.flags &= 32767, De = o;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Me = 6, De = null;
          return;
        }
      } else if (o = bg(o, t, at), o !== null) {
        De = o;
        return;
      }
      if (t = t.sibling, t !== null) {
        De = t;
        return;
      }
      De = t = e;
    } while (t !== null);
    Me === 0 && (Me = 5);
  }
  function Hn(e, t, o) {
    var l = Se, c = gt.transition;
    try {
      gt.transition = null, Se = 1, Ng(e, t, o, l);
    } finally {
      gt.transition = c, Se = l;
    }
    return null;
  }
  function Ng(e, t, o, l) {
    do
      Er();
    while (mn !== null);
    if (ve & 6)
      throw Error(r(327));
    o = e.finishedWork;
    var c = e.finishedLanes;
    if (o === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, o === e.current)
      throw Error(r(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var d = o.lanes | o.childLanes;
    if (hm(e, d), e === Ue && (De = Ue = null, He = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Bi || (Bi = !0, sf(Jo, function() {
      return Er(), null;
    })), d = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || d) {
      d = gt.transition, gt.transition = null;
      var m = Se;
      Se = 1;
      var w = ve;
      ve |= 4, sa.current = null, Pg(e, o), Vd(o, e), Zm(ml), ri = !!pl, ml = pl = null, e.current = o, Tg(o), om(), ve = w, Se = m, gt.transition = d;
    } else
      e.current = o;
    if (Bi && (Bi = !1, mn = e, Wi = c), d = e.pendingLanes, d === 0 && (pn = null), lm(o.stateNode), rt(e, Ie()), t !== null)
      for (l = e.onRecoverableError, o = 0; o < t.length; o++)
        c = t[o], l(c.value, { componentStack: c.stack, digest: c.digest });
    if (Ui)
      throw Ui = !1, e = ua, ua = null, e;
    return Wi & 1 && e.tag !== 0 && Er(), d = e.pendingLanes, d & 1 ? e === ca ? To++ : (To = 0, ca = e) : To = 0, cn(), null;
  }
  function Er() {
    if (mn !== null) {
      var e = Wu(Wi), t = gt.transition, o = Se;
      try {
        if (gt.transition = null, Se = 16 > e ? 16 : e, mn === null)
          var l = !1;
        else {
          if (e = mn, mn = null, Wi = 0, ve & 6)
            throw Error(r(331));
          var c = ve;
          for (ve |= 4, G = e.current; G !== null; ) {
            var d = G, m = d.child;
            if (G.flags & 16) {
              var w = d.deletions;
              if (w !== null) {
                for (var x = 0; x < w.length; x++) {
                  var R = w[x];
                  for (G = R; G !== null; ) {
                    var I = G;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Eo(8, I, d);
                    }
                    var z = I.child;
                    if (z !== null)
                      z.return = I, G = z;
                    else
                      for (; G !== null; ) {
                        I = G;
                        var L = I.sibling, K = I.return;
                        if (Fd(I), I === R) {
                          G = null;
                          break;
                        }
                        if (L !== null) {
                          L.return = K, G = L;
                          break;
                        }
                        G = K;
                      }
                  }
                }
                var Q = d.alternate;
                if (Q !== null) {
                  var J = Q.child;
                  if (J !== null) {
                    Q.child = null;
                    do {
                      var $e = J.sibling;
                      J.sibling = null, J = $e;
                    } while (J !== null);
                  }
                }
                G = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, G = m;
            else
              e:
                for (; G !== null; ) {
                  if (d = G, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Eo(9, d, d.return);
                    }
                  var T = d.sibling;
                  if (T !== null) {
                    T.return = d.return, G = T;
                    break e;
                  }
                  G = d.return;
                }
          }
          var k = e.current;
          for (G = k; G !== null; ) {
            m = G;
            var O = m.child;
            if (m.subtreeFlags & 2064 && O !== null)
              O.return = m, G = O;
            else
              e:
                for (m = k; G !== null; ) {
                  if (w = G, w.flags & 2048)
                    try {
                      switch (w.tag) {
                        case 0:
                        case 11:
                        case 15:
                          zi(9, w);
                      }
                    } catch (Y) {
                      Le(w, w.return, Y);
                    }
                  if (w === m) {
                    G = null;
                    break e;
                  }
                  var F = w.sibling;
                  if (F !== null) {
                    F.return = w.return, G = F;
                    break e;
                  }
                  G = w.return;
                }
          }
          if (ve = c, cn(), jt && typeof jt.onPostCommitFiberRoot == "function")
            try {
              jt.onPostCommitFiberRoot(Yo, e);
            } catch {
            }
          l = !0;
        }
        return l;
      } finally {
        Se = o, gt.transition = t;
      }
    }
    return !1;
  }
  function nf(e, t, o) {
    t = xr(o, t), t = _d(e, t, 1), e = fn(e, t, 1), t = Xe(), e !== null && (Yr(e, 1, t), rt(e, t));
  }
  function Le(e, t, o) {
    if (e.tag === 3)
      nf(e, e, o);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          nf(t, e, o);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (pn === null || !pn.has(l))) {
            e = xr(o, e), e = xd(t, e, 1), t = fn(t, e, 1), e = Xe(), t !== null && (Yr(t, 1, e), rt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Lg(e, t, o) {
    var l = e.pingCache;
    l !== null && l.delete(t), t = Xe(), e.pingedLanes |= e.suspendedLanes & o, Ue === e && (He & o) === o && (Me === 4 || Me === 3 && (He & 130023424) === He && 500 > Ie() - aa ? Wn(e, 0) : la |= o), rt(e, t);
  }
  function rf(e, t) {
    t === 0 && (e.mode & 1 ? (t = Zo, Zo <<= 1, !(Zo & 130023424) && (Zo = 4194304)) : t = 1);
    var o = Xe();
    e = Kt(e, t), e !== null && (Yr(e, t, o), rt(e, o));
  }
  function Ig(e) {
    var t = e.memoizedState, o = 0;
    t !== null && (o = t.retryLane), rf(e, o);
  }
  function $g(e, t) {
    var o = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode, c = e.memoizedState;
        c !== null && (o = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(t), rf(e, o);
  }
  var of;
  of = function(e, t, o) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ze.current)
        tt = !0;
      else {
        if (!(e.lanes & o) && !(t.flags & 128))
          return tt = !1, Sg(e, t, o);
        tt = !!(e.flags & 131072);
      }
    else
      tt = !1, Ae && t.flags & 1048576 && Dc(t, xi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var l = t.type;
        $i(e, t), e = t.pendingProps;
        var c = hr(t, Ve.current);
        wr(t, o), c = Ml(null, t, l, e, c, o);
        var d = Fl();
        return t.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, et(l) ? (d = !0, yi(t)) : d = !1, t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, jl(t), c.updater = Li, t.stateNode = c, c._reactInternals = t, Kl(t, l, e, o), t = Jl(null, t, l, !0, d, o)) : (t.tag = 0, Ae && d && kl(t), Ye(null, t, c, o), t = t.child), t;
      case 16:
        l = t.elementType;
        e: {
          switch ($i(e, t), e = t.pendingProps, c = l._init, l = c(l._payload), t.type = l, c = t.tag = zg(l), e = bt(l, e), c) {
            case 0:
              t = ql(null, t, l, e, o);
              break e;
            case 1:
              t = Rd(null, t, l, e, o);
              break e;
            case 11:
              t = Ed(null, t, l, e, o);
              break e;
            case 14:
              t = Cd(null, t, l, bt(l.type, e), o);
              break e;
          }
          throw Error(r(
            306,
            l,
            ""
          ));
        }
        return t;
      case 0:
        return l = t.type, c = t.pendingProps, c = t.elementType === l ? c : bt(l, c), ql(e, t, l, c, o);
      case 1:
        return l = t.type, c = t.pendingProps, c = t.elementType === l ? c : bt(l, c), Rd(e, t, l, c, o);
      case 3:
        e: {
          if (Ad(t), e === null)
            throw Error(r(387));
          l = t.pendingProps, d = t.memoizedState, c = d.element, Kc(e, t), Pi(t, l, null, o);
          var m = t.memoizedState;
          if (l = m.element, d.isDehydrated)
            if (d = { element: l, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, t.updateQueue.baseState = d, t.memoizedState = d, t.flags & 256) {
              c = xr(Error(r(423)), t), t = jd(e, t, l, o, c);
              break e;
            } else if (l !== c) {
              c = xr(Error(r(424)), t), t = jd(e, t, l, o, c);
              break e;
            } else
              for (lt = ln(t.stateNode.containerInfo.firstChild), st = t, Ae = !0, St = null, o = Hc(t, null, l, o), t.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (gr(), l === c) {
              t = Qt(e, t, o);
              break e;
            }
            Ye(e, t, l, o);
          }
          t = t.child;
        }
        return t;
      case 5:
        return qc(t), e === null && El(t), l = t.type, c = t.pendingProps, d = e !== null ? e.memoizedProps : null, m = c.children, gl(l, c) ? m = null : d !== null && gl(l, d) && (t.flags |= 32), Od(e, t), Ye(e, t, m, o), t.child;
      case 6:
        return e === null && El(t), null;
      case 13:
        return Nd(e, t, o);
      case 4:
        return Nl(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = vr(t, null, l, o) : Ye(e, t, l, o), t.child;
      case 11:
        return l = t.type, c = t.pendingProps, c = t.elementType === l ? c : bt(l, c), Ed(e, t, l, c, o);
      case 7:
        return Ye(e, t, t.pendingProps, o), t.child;
      case 8:
        return Ye(e, t, t.pendingProps.children, o), t.child;
      case 12:
        return Ye(e, t, t.pendingProps.children, o), t.child;
      case 10:
        e: {
          if (l = t.type._context, c = t.pendingProps, d = t.memoizedProps, m = c.value, Ce(bi, l._currentValue), l._currentValue = m, d !== null)
            if (kt(d.value, m)) {
              if (d.children === c.children && !Ze.current) {
                t = Qt(e, t, o);
                break e;
              }
            } else
              for (d = t.child, d !== null && (d.return = t); d !== null; ) {
                var w = d.dependencies;
                if (w !== null) {
                  m = d.child;
                  for (var x = w.firstContext; x !== null; ) {
                    if (x.context === l) {
                      if (d.tag === 1) {
                        x = Gt(-1, o & -o), x.tag = 2;
                        var R = d.updateQueue;
                        if (R !== null) {
                          R = R.shared;
                          var I = R.pending;
                          I === null ? x.next = x : (x.next = I.next, I.next = x), R.pending = x;
                        }
                      }
                      d.lanes |= o, x = d.alternate, x !== null && (x.lanes |= o), Rl(
                        d.return,
                        o,
                        t
                      ), w.lanes |= o;
                      break;
                    }
                    x = x.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === t.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(r(341));
                  m.lanes |= o, w = m.alternate, w !== null && (w.lanes |= o), Rl(m, o, t), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === t) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          Ye(e, t, c.children, o), t = t.child;
        }
        return t;
      case 9:
        return c = t.type, l = t.pendingProps.children, wr(t, o), c = pt(c), l = l(c), t.flags |= 1, Ye(e, t, l, o), t.child;
      case 14:
        return l = t.type, c = bt(l, t.pendingProps), c = bt(l.type, c), Cd(e, t, l, c, o);
      case 15:
        return Pd(e, t, t.type, t.pendingProps, o);
      case 17:
        return l = t.type, c = t.pendingProps, c = t.elementType === l ? c : bt(l, c), $i(e, t), t.tag = 1, et(l) ? (e = !0, yi(t)) : e = !1, wr(t, o), yd(t, l, c), Kl(t, l, c, o), Jl(null, t, l, !0, e, o);
      case 19:
        return Id(e, t, o);
      case 22:
        return Td(e, t, o);
    }
    throw Error(r(156, t.tag));
  };
  function sf(e, t) {
    return zu(e, t);
  }
  function Dg(e, t, o, l) {
    this.tag = e, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function vt(e, t, o, l) {
    return new Dg(e, t, o, l);
  }
  function ga(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function zg(e) {
    if (typeof e == "function")
      return ga(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ne)
        return 11;
      if (e === ke)
        return 14;
    }
    return 2;
  }
  function yn(e, t) {
    var o = e.alternate;
    return o === null ? (o = vt(e.tag, t, e.key, e.mode), o.elementType = e.elementType, o.type = e.type, o.stateNode = e.stateNode, o.alternate = e, e.alternate = o) : (o.pendingProps = t, o.type = e.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = e.flags & 14680064, o.childLanes = e.childLanes, o.lanes = e.lanes, o.child = e.child, o.memoizedProps = e.memoizedProps, o.memoizedState = e.memoizedState, o.updateQueue = e.updateQueue, t = e.dependencies, o.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, o.sibling = e.sibling, o.index = e.index, o.ref = e.ref, o;
  }
  function Gi(e, t, o, l, c, d) {
    var m = 2;
    if (l = e, typeof e == "function")
      ga(e) && (m = 1);
    else if (typeof e == "string")
      m = 5;
    else
      e:
        switch (e) {
          case q:
            return Vn(o.children, c, d, t);
          case oe:
            m = 8, c |= 8;
            break;
          case ge:
            return e = vt(12, o, t, c | 2), e.elementType = ge, e.lanes = d, e;
          case xe:
            return e = vt(13, o, t, c), e.elementType = xe, e.lanes = d, e;
          case ue:
            return e = vt(19, o, t, c), e.elementType = ue, e.lanes = d, e;
          case X:
            return Qi(o, c, d, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case de:
                  m = 10;
                  break e;
                case be:
                  m = 9;
                  break e;
                case ne:
                  m = 11;
                  break e;
                case ke:
                  m = 14;
                  break e;
                case he:
                  m = 16, l = null;
                  break e;
              }
            throw Error(r(130, e == null ? e : typeof e, ""));
        }
    return t = vt(m, o, t, c), t.elementType = e, t.type = l, t.lanes = d, t;
  }
  function Vn(e, t, o, l) {
    return e = vt(7, e, l, t), e.lanes = o, e;
  }
  function Qi(e, t, o, l) {
    return e = vt(22, e, l, t), e.elementType = X, e.lanes = o, e.stateNode = { isHidden: !1 }, e;
  }
  function va(e, t, o) {
    return e = vt(6, e, null, t), e.lanes = o, e;
  }
  function ya(e, t, o) {
    return t = vt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = o, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Mg(e, t, o, l, c) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vs(0), this.expirationTimes = Vs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vs(0), this.identifierPrefix = l, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function wa(e, t, o, l, c, d, m, w, x) {
    return e = new Mg(e, t, o, w, x), t === 1 ? (t = 1, d === !0 && (t |= 8)) : t = 0, d = vt(3, null, null, t), e.current = d, d.stateNode = e, d.memoizedState = { element: l, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, jl(d), e;
  }
  function Fg(e, t, o) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Z, key: l == null ? null : "" + l, children: e, containerInfo: t, implementation: o };
  }
  function lf(e) {
    if (!e)
      return un;
    e = e._reactInternals;
    e: {
      if (Nn(e) !== e || e.tag !== 1)
        throw Error(r(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (et(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(r(171));
    }
    if (e.tag === 1) {
      var o = e.type;
      if (et(o))
        return Lc(e, o, t);
    }
    return t;
  }
  function af(e, t, o, l, c, d, m, w, x) {
    return e = wa(o, l, !0, e, c, d, m, w, x), e.context = lf(null), o = e.current, l = Xe(), c = gn(o), d = Gt(l, c), d.callback = t ?? null, fn(o, d, c), e.current.lanes = c, Yr(e, c, l), rt(e, l), e;
  }
  function qi(e, t, o, l) {
    var c = t.current, d = Xe(), m = gn(c);
    return o = lf(o), t.context === null ? t.context = o : t.pendingContext = o, t = Gt(d, m), t.payload = { element: e }, l = l === void 0 ? null : l, l !== null && (t.callback = l), e = fn(c, t, m), e !== null && (Pt(e, c, m, d), Ci(e, c, m)), m;
  }
  function Ji(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function uf(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var o = e.retryLane;
      e.retryLane = o !== 0 && o < t ? o : t;
    }
  }
  function _a(e, t) {
    uf(e, t), (e = e.alternate) && uf(e, t);
  }
  function Ug() {
    return null;
  }
  var cf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function xa(e) {
    this._internalRoot = e;
  }
  Yi.prototype.render = xa.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw Error(r(409));
    qi(e, t, null, null);
  }, Yi.prototype.unmount = xa.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Bn(function() {
        qi(null, e, null, null);
      }), t[Bt] = null;
    }
  };
  function Yi(e) {
    this._internalRoot = e;
  }
  Yi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ku();
      e = { blockedOn: null, target: e, priority: t };
      for (var o = 0; o < rn.length && t !== 0 && t < rn[o].priority; o++)
        ;
      rn.splice(o, 0, e), o === 0 && qu(e);
    }
  };
  function ka(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Xi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function df() {
  }
  function Bg(e, t, o, l, c) {
    if (c) {
      if (typeof l == "function") {
        var d = l;
        l = function() {
          var R = Ji(m);
          d.call(R);
        };
      }
      var m = af(t, l, e, 0, null, !1, !1, "", df);
      return e._reactRootContainer = m, e[Bt] = m.current, fo(e.nodeType === 8 ? e.parentNode : e), Bn(), m;
    }
    for (; c = e.lastChild; )
      e.removeChild(c);
    if (typeof l == "function") {
      var w = l;
      l = function() {
        var R = Ji(x);
        w.call(R);
      };
    }
    var x = wa(e, 0, !1, null, null, !1, !1, "", df);
    return e._reactRootContainer = x, e[Bt] = x.current, fo(e.nodeType === 8 ? e.parentNode : e), Bn(function() {
      qi(t, x, o, l);
    }), x;
  }
  function Zi(e, t, o, l, c) {
    var d = o._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var w = c;
        c = function() {
          var x = Ji(m);
          w.call(x);
        };
      }
      qi(t, m, e, c);
    } else
      m = Bg(o, t, e, c, l);
    return Ji(m);
  }
  Hu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var o = Jr(t.pendingLanes);
          o !== 0 && (Ks(t, o | 1), rt(t, Ie()), !(ve & 6) && (br = Ie() + 500, cn()));
        }
        break;
      case 13:
        Bn(function() {
          var l = Kt(e, 1);
          if (l !== null) {
            var c = Xe();
            Pt(l, e, 1, c);
          }
        }), _a(e, 1);
    }
  }, Gs = function(e) {
    if (e.tag === 13) {
      var t = Kt(e, 134217728);
      if (t !== null) {
        var o = Xe();
        Pt(t, e, 134217728, o);
      }
      _a(e, 134217728);
    }
  }, Vu = function(e) {
    if (e.tag === 13) {
      var t = gn(e), o = Kt(e, t);
      if (o !== null) {
        var l = Xe();
        Pt(o, e, t, l);
      }
      _a(e, t);
    }
  }, Ku = function() {
    return Se;
  }, Gu = function(e, t) {
    var o = Se;
    try {
      return Se = e, t();
    } finally {
      Se = o;
    }
  }, Ms = function(e, t, o) {
    switch (t) {
      case "input":
        if (As(e, o), t = o.name, o.type === "radio" && t != null) {
          for (o = e; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < o.length; t++) {
            var l = o[t];
            if (l !== e && l.form === e.form) {
              var c = gi(l);
              if (!c)
                throw Error(r(90));
              Ko(l), As(l, c);
            }
          }
        }
        break;
      case "textarea":
        ku(e, o);
        break;
      case "select":
        t = o.value, t != null && tr(e, !!o.multiple, t, !1);
    }
  }, Au = ha, ju = Bn;
  var Wg = { usingClientEntryPoint: !1, Events: [mo, dr, gi, Ou, Ru, ha] }, Oo = { findFiberByHostInstance: Ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hg = { bundleType: Oo.bundleType, version: Oo.version, rendererPackageName: Oo.rendererPackageName, rendererConfig: Oo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = $u(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Oo.findFiberByHostInstance || Ug, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var es = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!es.isDisabled && es.supportsFiber)
      try {
        Yo = es.inject(Hg), jt = es;
      } catch {
      }
  }
  return ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wg, ot.createPortal = function(e, t) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ka(t))
      throw Error(r(200));
    return Fg(e, t, null, o);
  }, ot.createRoot = function(e, t) {
    if (!ka(e))
      throw Error(r(299));
    var o = !1, l = "", c = cf;
    return t != null && (t.unstable_strictMode === !0 && (o = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = wa(e, 1, !1, null, null, o, !1, l, c), e[Bt] = t.current, fo(e.nodeType === 8 ? e.parentNode : e), new xa(t);
  }, ot.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = $u(t), e = e === null ? null : e.stateNode, e;
  }, ot.flushSync = function(e) {
    return Bn(e);
  }, ot.hydrate = function(e, t, o) {
    if (!Xi(t))
      throw Error(r(200));
    return Zi(null, e, t, !0, o);
  }, ot.hydrateRoot = function(e, t, o) {
    if (!ka(e))
      throw Error(r(405));
    var l = o != null && o.hydratedSources || null, c = !1, d = "", m = cf;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onRecoverableError !== void 0 && (m = o.onRecoverableError)), t = af(t, null, e, 1, o ?? null, c, !1, d, m), e[Bt] = t.current, fo(e), l)
      for (e = 0; e < l.length; e++)
        o = l[e], c = o._getVersion, c = c(o._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [o, c] : t.mutableSourceEagerHydrationData.push(
          o,
          c
        );
    return new Yi(t);
  }, ot.render = function(e, t, o) {
    if (!Xi(t))
      throw Error(r(200));
    return Zi(null, e, t, !1, o);
  }, ot.unmountComponentAtNode = function(e) {
    if (!Xi(e))
      throw Error(r(40));
    return e._reactRootContainer ? (Bn(function() {
      Zi(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Bt] = null;
      });
    }), !0) : !1;
  }, ot.unstable_batchedUpdates = ha, ot.unstable_renderSubtreeIntoContainer = function(e, t, o, l) {
    if (!Xi(o))
      throw Error(r(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(r(38));
    return Zi(e, t, o, !1, l);
  }, ot.version = "18.3.1-next-f1338f8080-20240426", ot;
}
function dh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dh);
    } catch (i) {
      console.error(i);
    }
}
dh(), ch.exports = ev();
var Uo = ch.exports;
const tv = /* @__PURE__ */ Za(Uo);
var fh, vf = Uo;
fh = vf.createRoot, vf.hydrateRoot;
var hh = { exports: {} }, nv = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", rv = nv, ov = rv;
function ph() {
}
function mh() {
}
mh.resetWarningCache = ph;
var iv = function() {
  function i(s, a, u, f, h, p) {
    if (p !== ov) {
      var g = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw g.name = "Invariant Violation", g;
    }
  }
  i.isRequired = i;
  function n() {
    return i;
  }
  var r = {
    array: i,
    bigint: i,
    bool: i,
    func: i,
    number: i,
    object: i,
    string: i,
    symbol: i,
    any: i,
    arrayOf: n,
    element: i,
    elementType: i,
    instanceOf: n,
    node: i,
    objectOf: n,
    oneOf: n,
    oneOfType: n,
    shape: n,
    exact: n,
    checkPropTypes: mh,
    resetWarningCache: ph
  };
  return r.PropTypes = r, r;
};
hh.exports = iv();
var sv = hh.exports;
const lv = /* @__PURE__ */ Za(sv);
function av(i, n) {
  typeof i == "function" ? i(n) : i != null && (i.current = n);
}
function gh(...i) {
  return (n) => i.forEach((r) => av(r, n));
}
function An(...i) {
  return C.useCallback(gh(...i), i);
}
var ws = C.forwardRef((i, n) => {
  const { children: r, ...s } = i, a = C.Children.toArray(r), u = a.find(cv);
  if (u) {
    const f = u.props.children, h = a.map((p) => p === u ? C.Children.count(f) > 1 ? C.Children.only(null) : C.isValidElement(f) ? f.props.children : null : p);
    return /* @__PURE__ */ W.jsx(Ma, { ...s, ref: n, children: C.isValidElement(f) ? C.cloneElement(f, void 0, h) : null });
  }
  return /* @__PURE__ */ W.jsx(Ma, { ...s, ref: n, children: r });
});
ws.displayName = "Slot";
var Ma = C.forwardRef((i, n) => {
  const { children: r, ...s } = i;
  if (C.isValidElement(r)) {
    const a = fv(r);
    return C.cloneElement(r, {
      ...dv(s, r.props),
      // @ts-ignore
      ref: n ? gh(n, a) : a
    });
  }
  return C.Children.count(r) > 1 ? C.Children.only(null) : null;
});
Ma.displayName = "SlotClone";
var uv = ({ children: i }) => /* @__PURE__ */ W.jsx(W.Fragment, { children: i });
function cv(i) {
  return C.isValidElement(i) && i.type === uv;
}
function dv(i, n) {
  const r = { ...n };
  for (const s in n) {
    const a = i[s], u = n[s];
    /^on[A-Z]/.test(s) ? a && u ? r[s] = (...h) => {
      u(...h), a(...h);
    } : a && (r[s] = a) : s === "style" ? r[s] = { ...a, ...u } : s === "className" && (r[s] = [a, u].filter(Boolean).join(" "));
  }
  return { ...i, ...r };
}
function fv(i) {
  let n = Object.getOwnPropertyDescriptor(i.props, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning;
  return r ? i.ref : (n = Object.getOwnPropertyDescriptor(i, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? i.props.ref : i.props.ref || i.ref);
}
function vh(i) {
  var n, r, s = "";
  if (typeof i == "string" || typeof i == "number")
    s += i;
  else if (typeof i == "object")
    if (Array.isArray(i))
      for (n = 0; n < i.length; n++)
        i[n] && (r = vh(i[n])) && (s && (s += " "), s += r);
    else
      for (n in i)
        i[n] && (s && (s += " "), s += n);
  return s;
}
function hv() {
  for (var i, n, r = 0, s = ""; r < arguments.length; )
    (i = arguments[r++]) && (n = vh(i)) && (s && (s += " "), s += n);
  return s;
}
const yf = (i) => typeof i == "boolean" ? "".concat(i) : i === 0 ? "0" : i, wf = hv, yh = (i, n) => (r) => {
  var s;
  if (n?.variants == null)
    return wf(i, r?.class, r?.className);
  const { variants: a, defaultVariants: u } = n, f = Object.keys(a).map((g) => {
    const v = r?.[g], y = u?.[g];
    if (v === null)
      return null;
    const _ = yf(v) || yf(y);
    return a[g][_];
  }), h = r && Object.entries(r).reduce((g, v) => {
    let [y, _] = v;
    return _ === void 0 || (g[y] = _), g;
  }, {}), p = n == null || (s = n.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((g, v) => {
    let { class: y, className: _, ...b } = v;
    return Object.entries(b).every((A) => {
      let [S, P] = A;
      return Array.isArray(P) ? P.includes({
        ...u,
        ...h
      }[S]) : {
        ...u,
        ...h
      }[S] === P;
    }) ? [
      ...g,
      y,
      _
    ] : g;
  }, []);
  return wf(i, f, p, r?.class, r?.className);
};
function wh(i) {
  var n, r, s = "";
  if (typeof i == "string" || typeof i == "number")
    s += i;
  else if (typeof i == "object")
    if (Array.isArray(i)) {
      var a = i.length;
      for (n = 0; n < a; n++)
        i[n] && (r = wh(i[n])) && (s && (s += " "), s += r);
    } else
      for (r in i)
        i[r] && (s && (s += " "), s += r);
  return s;
}
function pv() {
  for (var i, n, r = 0, s = "", a = arguments.length; r < a; r++)
    (i = arguments[r]) && (n = wh(i)) && (s && (s += " "), s += n);
  return s;
}
const eu = "-";
function mv(i) {
  const n = vv(i), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: s
  } = i;
  function a(f) {
    const h = f.split(eu);
    return h[0] === "" && h.length !== 1 && h.shift(), _h(h, n) || gv(f);
  }
  function u(f, h) {
    const p = r[f] || [];
    return h && s[f] ? [...p, ...s[f]] : p;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: u
  };
}
function _h(i, n) {
  if (i.length === 0)
    return n.classGroupId;
  const r = i[0], s = n.nextPart.get(r), a = s ? _h(i.slice(1), s) : void 0;
  if (a)
    return a;
  if (n.validators.length === 0)
    return;
  const u = i.join(eu);
  return n.validators.find(({
    validator: f
  }) => f(u))?.classGroupId;
}
const _f = /^\[(.+)\]$/;
function gv(i) {
  if (_f.test(i)) {
    const n = _f.exec(i)[1], r = n?.substring(0, n.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function vv(i) {
  const {
    theme: n,
    prefix: r
  } = i, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return wv(Object.entries(i.classGroups), r).forEach(([u, f]) => {
    Fa(f, s, u, n);
  }), s;
}
function Fa(i, n, r, s) {
  i.forEach((a) => {
    if (typeof a == "string") {
      const u = a === "" ? n : xf(n, a);
      u.classGroupId = r;
      return;
    }
    if (typeof a == "function") {
      if (yv(a)) {
        Fa(a(s), n, r, s);
        return;
      }
      n.validators.push({
        validator: a,
        classGroupId: r
      });
      return;
    }
    Object.entries(a).forEach(([u, f]) => {
      Fa(f, xf(n, u), r, s);
    });
  });
}
function xf(i, n) {
  let r = i;
  return n.split(eu).forEach((s) => {
    r.nextPart.has(s) || r.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(s);
  }), r;
}
function yv(i) {
  return i.isThemeGetter;
}
function wv(i, n) {
  return n ? i.map(([r, s]) => {
    const a = s.map((u) => typeof u == "string" ? n + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map(([f, h]) => [n + f, h])) : u);
    return [r, a];
  }) : i;
}
function _v(i) {
  if (i < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  function a(u, f) {
    r.set(u, f), n++, n > i && (n = 0, s = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get(u) {
      let f = r.get(u);
      if (f !== void 0)
        return f;
      if ((f = s.get(u)) !== void 0)
        return a(u, f), f;
    },
    set(u, f) {
      r.has(u) ? r.set(u, f) : a(u, f);
    }
  };
}
const xh = "!";
function xv(i) {
  const {
    separator: n,
    experimentalParseClassName: r
  } = i, s = n.length === 1, a = n[0], u = n.length;
  function f(h) {
    const p = [];
    let g = 0, v = 0, y;
    for (let P = 0; P < h.length; P++) {
      let j = h[P];
      if (g === 0) {
        if (j === a && (s || h.slice(P, P + u) === n)) {
          p.push(h.slice(v, P)), v = P + u;
          continue;
        }
        if (j === "/") {
          y = P;
          continue;
        }
      }
      j === "[" ? g++ : j === "]" && g--;
    }
    const _ = p.length === 0 ? h : h.substring(v), b = _.startsWith(xh), A = b ? _.substring(1) : _, S = y && y > v ? y - v : void 0;
    return {
      modifiers: p,
      hasImportantModifier: b,
      baseClassName: A,
      maybePostfixModifierPosition: S
    };
  }
  return r ? function(p) {
    return r({
      className: p,
      parseClassName: f
    });
  } : f;
}
function kv(i) {
  if (i.length <= 1)
    return i;
  const n = [];
  let r = [];
  return i.forEach((s) => {
    s[0] === "[" ? (n.push(...r.sort(), s), r = []) : r.push(s);
  }), n.push(...r.sort()), n;
}
function Sv(i) {
  return {
    cache: _v(i.cacheSize),
    parseClassName: xv(i),
    ...mv(i)
  };
}
const bv = /\s+/;
function Ev(i, n) {
  const {
    parseClassName: r,
    getClassGroupId: s,
    getConflictingClassGroupIds: a
  } = n, u = /* @__PURE__ */ new Set();
  return i.trim().split(bv).map((f) => {
    const {
      modifiers: h,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: v
    } = r(f);
    let y = !!v, _ = s(y ? g.substring(0, v) : g);
    if (!_) {
      if (!y)
        return {
          isTailwindClass: !1,
          originalClassName: f
        };
      if (_ = s(g), !_)
        return {
          isTailwindClass: !1,
          originalClassName: f
        };
      y = !1;
    }
    const b = kv(h).join(":");
    return {
      isTailwindClass: !0,
      modifierId: p ? b + xh : b,
      classGroupId: _,
      originalClassName: f,
      hasPostfixModifier: y
    };
  }).reverse().filter((f) => {
    if (!f.isTailwindClass)
      return !0;
    const {
      modifierId: h,
      classGroupId: p,
      hasPostfixModifier: g
    } = f, v = h + p;
    return u.has(v) ? !1 : (u.add(v), a(p, g).forEach((y) => u.add(h + y)), !0);
  }).reverse().map((f) => f.originalClassName).join(" ");
}
function Cv() {
  let i = 0, n, r, s = "";
  for (; i < arguments.length; )
    (n = arguments[i++]) && (r = kh(n)) && (s && (s += " "), s += r);
  return s;
}
function kh(i) {
  if (typeof i == "string")
    return i;
  let n, r = "";
  for (let s = 0; s < i.length; s++)
    i[s] && (n = kh(i[s])) && (r && (r += " "), r += n);
  return r;
}
function Pv(i, ...n) {
  let r, s, a, u = f;
  function f(p) {
    const g = n.reduce((v, y) => y(v), i());
    return r = Sv(g), s = r.cache.get, a = r.cache.set, u = h, h(p);
  }
  function h(p) {
    const g = s(p);
    if (g)
      return g;
    const v = Ev(p, r);
    return a(p, v), v;
  }
  return function() {
    return u(Cv.apply(null, arguments));
  };
}
function Re(i) {
  const n = (r) => r[i] || [];
  return n.isThemeGetter = !0, n;
}
const Sh = /^\[(?:([a-z-]+):)?(.+)\]$/i, Tv = /^\d+\/\d+$/, Ov = /* @__PURE__ */ new Set(["px", "full", "screen"]), Rv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Av = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, jv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Nv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Lv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Jt(i) {
  return Jn(i) || Ov.has(i) || Tv.test(i);
}
function _n(i) {
  return zr(i, "length", Bv);
}
function Jn(i) {
  return !!i && !Number.isNaN(Number(i));
}
function ts(i) {
  return zr(i, "number", Jn);
}
function Ao(i) {
  return !!i && Number.isInteger(Number(i));
}
function Iv(i) {
  return i.endsWith("%") && Jn(i.slice(0, -1));
}
function se(i) {
  return Sh.test(i);
}
function xn(i) {
  return Rv.test(i);
}
const $v = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Dv(i) {
  return zr(i, $v, bh);
}
function zv(i) {
  return zr(i, "position", bh);
}
const Mv = /* @__PURE__ */ new Set(["image", "url"]);
function Fv(i) {
  return zr(i, Mv, Hv);
}
function Uv(i) {
  return zr(i, "", Wv);
}
function jo() {
  return !0;
}
function zr(i, n, r) {
  const s = Sh.exec(i);
  return s ? s[1] ? typeof n == "string" ? s[1] === n : n.has(s[1]) : r(s[2]) : !1;
}
function Bv(i) {
  return Av.test(i) && !jv.test(i);
}
function bh() {
  return !1;
}
function Wv(i) {
  return Nv.test(i);
}
function Hv(i) {
  return Lv.test(i);
}
function Vv() {
  const i = Re("colors"), n = Re("spacing"), r = Re("blur"), s = Re("brightness"), a = Re("borderColor"), u = Re("borderRadius"), f = Re("borderSpacing"), h = Re("borderWidth"), p = Re("contrast"), g = Re("grayscale"), v = Re("hueRotate"), y = Re("invert"), _ = Re("gap"), b = Re("gradientColorStops"), A = Re("gradientColorStopPositions"), S = Re("inset"), P = Re("margin"), j = Re("opacity"), M = Re("padding"), B = Re("saturate"), $ = Re("scale"), U = Re("sepia"), Z = Re("skew"), q = Re("space"), oe = Re("translate"), ge = () => ["auto", "contain", "none"], de = () => ["auto", "hidden", "clip", "visible", "scroll"], be = () => ["auto", se, n], ne = () => [se, n], xe = () => ["", Jt, _n], ue = () => ["auto", Jn, se], ke = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], he = () => ["solid", "dashed", "dotted", "double", "none"], X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], H = () => ["", "0", se], V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [Jn, ts], N = () => [Jn, se];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [jo],
      spacing: [Jt, _n],
      blur: ["none", "", xn, se],
      brightness: E(),
      borderColor: [i],
      borderRadius: ["none", "", "full", xn, se],
      borderSpacing: ne(),
      borderWidth: xe(),
      contrast: E(),
      grayscale: H(),
      hueRotate: N(),
      invert: H(),
      gap: ne(),
      gradientColorStops: [i],
      gradientColorStopPositions: [Iv, _n],
      inset: be(),
      margin: be(),
      opacity: E(),
      padding: ne(),
      saturate: E(),
      scale: E(),
      sepia: H(),
      skew: N(),
      space: ne(),
      translate: ne()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", se]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [xn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": V()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": V()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...ke(), se]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: de()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": de()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": de()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ge()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ge()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ge()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [S]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [S]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [S]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [S]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [S]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [S]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [S]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [S]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [S]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Ao, se]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: be()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", se]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: H()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: H()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ao, se]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [jo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ao, se]
        }, se]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ue()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ue()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [jo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ao, se]
        }, se]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ue()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ue()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", se]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", se]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [_]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [_]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [_]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...D()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...D(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...D(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [M]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [M]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [M]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [M]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [M]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [M]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [M]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [M]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [M]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [P]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [P]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [P]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [P]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [P]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [P]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [P]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [P]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [P]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [q]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [q]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", se, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [se, n, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [se, n, "none", "full", "min", "max", "fit", "prose", {
          screen: [xn]
        }, xn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [se, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [se, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [se, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [se, n, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", xn, _n]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ts]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [jo]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", se]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Jn, ts]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Jt, se]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", se]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", se]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [i]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [j]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [i]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [j]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...he(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Jt, _n]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Jt, se]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [i]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: ne()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", se]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", se]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [j]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...ke(), zv]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Dv]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Fv]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [i]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [A]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [A]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [A]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [b]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [u]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [u]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [u]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [u]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [u]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [u]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [u]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [u]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [u]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [u]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [u]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [u]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [u]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [u]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [u]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [h]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [h]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [h]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [h]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [h]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [h]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [h]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [h]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [h]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [j]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...he(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [h]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [h]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [j]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: he()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...he()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Jt, se]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Jt, _n]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [i]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: xe()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [i]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [j]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Jt, _n]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [i]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", xn, Uv]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [jo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [j]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...X(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": X()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [s]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [p]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", xn, se]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [g]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [v]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [B]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [U]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [s]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [p]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [g]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [v]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [j]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [B]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [U]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [f]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [f]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [f]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", se]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: N()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", se]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: N()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", se]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [$]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [$]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [$]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ao, se]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [oe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [oe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [Z]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Z]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", se]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", i]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", se]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [i]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": ne()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": ne()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": ne()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": ne()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": ne()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": ne()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": ne()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": ne()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": ne()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": ne()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": ne()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": ne()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": ne()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": ne()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": ne()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": ne()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": ne()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": ne()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", se]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [i, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Jt, _n, ts]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [i, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const Kv = /* @__PURE__ */ Pv(Vv);
function Mr(...i) {
  return Kv(pv(i));
}
const Gv = yh(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ua = C.forwardRef(({ className: i, variant: n, size: r, asChild: s = !1, ...a }, u) => {
  const f = s ? ws : "button";
  return /* @__PURE__ */ W.jsx(
    f,
    {
      className: Mr(Gv({ variant: n, size: r, className: i })),
      ref: u,
      ...a
    }
  );
});
Ua.displayName = "Button";
var Qv = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], At = Qv.reduce((i, n) => {
  const r = C.forwardRef((s, a) => {
    const { asChild: u, ...f } = s, h = u ? ws : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ W.jsx(h, { ...f, ref: a });
  });
  return r.displayName = `Primitive.${n}`, { ...i, [n]: r };
}, {});
function qv(i, n) {
  i && Uo.flushSync(() => i.dispatchEvent(n));
}
var Jv = "Label", Eh = C.forwardRef((i, n) => /* @__PURE__ */ W.jsx(
  At.label,
  {
    ...i,
    ref: n,
    onMouseDown: (r) => {
      r.target.closest("button, input, select, textarea") || (i.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
Eh.displayName = Jv;
var Ch = Eh;
const Yv = yh(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), ds = C.forwardRef(({ className: i, ...n }, r) => /* @__PURE__ */ W.jsx(Ch, { ref: r, className: Mr(Yv(), i), ...n }));
ds.displayName = Ch.displayName;
const Ba = C.forwardRef(({ className: i, type: n, ...r }, s) => /* @__PURE__ */ W.jsx(
  "input",
  {
    type: n,
    className: Mr(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      i
    ),
    ref: s,
    ...r
  }
));
Ba.displayName = "Input";
const Ph = C.forwardRef(({ className: i, ...n }, r) => /* @__PURE__ */ W.jsx(
  "textarea",
  {
    className: Mr(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      i
    ),
    ref: r,
    ...n
  }
));
Ph.displayName = "Textarea";
var Xv = "Separator", kf = "horizontal", Zv = ["horizontal", "vertical"], Th = C.forwardRef((i, n) => {
  const { decorative: r, orientation: s = kf, ...a } = i, u = ey(s) ? s : kf, h = r ? { role: "none" } : { "aria-orientation": u === "vertical" ? u : void 0, role: "separator" };
  return /* @__PURE__ */ W.jsx(
    At.div,
    {
      "data-orientation": u,
      ...h,
      ...a,
      ref: n
    }
  );
});
Th.displayName = Xv;
function ey(i) {
  return Zv.includes(i);
}
var Oh = Th;
const Rh = C.forwardRef(({ className: i, orientation: n = "horizontal", decorative: r = !0, ...s }, a) => /* @__PURE__ */ W.jsx(
  Oh,
  {
    ref: a,
    decorative: r,
    orientation: n,
    className: Mr(
      "shrink-0 bg-border",
      n === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      i
    ),
    ...s
  }
));
Rh.displayName = Oh.displayName;
function Cn(i, n, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(a) {
    if (i?.(a), r === !1 || !a.defaultPrevented)
      return n?.(a);
  };
}
function Ah(i, n = []) {
  let r = [];
  function s(u, f) {
    const h = C.createContext(f), p = r.length;
    r = [...r, f];
    function g(y) {
      const { scope: _, children: b, ...A } = y, S = _?.[i][p] || h, P = C.useMemo(() => A, Object.values(A));
      return /* @__PURE__ */ W.jsx(S.Provider, { value: P, children: b });
    }
    function v(y, _) {
      const b = _?.[i][p] || h, A = C.useContext(b);
      if (A)
        return A;
      if (f !== void 0)
        return f;
      throw new Error(`\`${y}\` must be used within \`${u}\``);
    }
    return g.displayName = u + "Provider", [g, v];
  }
  const a = () => {
    const u = r.map((f) => C.createContext(f));
    return function(h) {
      const p = h?.[i] || u;
      return C.useMemo(
        () => ({ [`__scope${i}`]: { ...h, [i]: p } }),
        [h, p]
      );
    };
  };
  return a.scopeName = i, [s, ty(a, ...n)];
}
function ty(...i) {
  const n = i[0];
  if (i.length === 1)
    return n;
  const r = () => {
    const s = i.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return function(u) {
      const f = s.reduce((h, { useScope: p, scopeName: g }) => {
        const y = p(u)[`__scope${g}`];
        return { ...h, ...y };
      }, {});
      return C.useMemo(() => ({ [`__scope${n.scopeName}`]: f }), [f]);
    };
  };
  return r.scopeName = n.scopeName, r;
}
function Pn(i) {
  const n = C.useRef(i);
  return C.useEffect(() => {
    n.current = i;
  }), C.useMemo(() => (...r) => n.current?.(...r), []);
}
function ny(i, n = globalThis?.document) {
  const r = Pn(i);
  C.useEffect(() => {
    const s = (a) => {
      a.key === "Escape" && r(a);
    };
    return n.addEventListener("keydown", s, { capture: !0 }), () => n.removeEventListener("keydown", s, { capture: !0 });
  }, [r, n]);
}
var ry = "DismissableLayer", Wa = "dismissableLayer.update", oy = "dismissableLayer.pointerDownOutside", iy = "dismissableLayer.focusOutside", Sf, jh = C.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Nh = C.forwardRef(
  (i, n) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      onFocusOutside: u,
      onInteractOutside: f,
      onDismiss: h,
      ...p
    } = i, g = C.useContext(jh), [v, y] = C.useState(null), _ = v?.ownerDocument ?? globalThis?.document, [, b] = C.useState({}), A = An(n, (q) => y(q)), S = Array.from(g.layers), [P] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), j = S.indexOf(P), M = v ? S.indexOf(v) : -1, B = g.layersWithOutsidePointerEventsDisabled.size > 0, $ = M >= j, U = ay((q) => {
      const oe = q.target, ge = [...g.branches].some((de) => de.contains(oe));
      !$ || ge || (a?.(q), f?.(q), q.defaultPrevented || h?.());
    }, _), Z = uy((q) => {
      const oe = q.target;
      [...g.branches].some((de) => de.contains(oe)) || (u?.(q), f?.(q), q.defaultPrevented || h?.());
    }, _);
    return ny((q) => {
      M === g.layers.size - 1 && (s?.(q), !q.defaultPrevented && h && (q.preventDefault(), h()));
    }, _), C.useEffect(() => {
      if (v)
        return r && (g.layersWithOutsidePointerEventsDisabled.size === 0 && (Sf = _.body.style.pointerEvents, _.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(v)), g.layers.add(v), bf(), () => {
          r && g.layersWithOutsidePointerEventsDisabled.size === 1 && (_.body.style.pointerEvents = Sf);
        };
    }, [v, _, r, g]), C.useEffect(() => () => {
      v && (g.layers.delete(v), g.layersWithOutsidePointerEventsDisabled.delete(v), bf());
    }, [v, g]), C.useEffect(() => {
      const q = () => b({});
      return document.addEventListener(Wa, q), () => document.removeEventListener(Wa, q);
    }, []), /* @__PURE__ */ W.jsx(
      At.div,
      {
        ...p,
        ref: A,
        style: {
          pointerEvents: B ? $ ? "auto" : "none" : void 0,
          ...i.style
        },
        onFocusCapture: Cn(i.onFocusCapture, Z.onFocusCapture),
        onBlurCapture: Cn(i.onBlurCapture, Z.onBlurCapture),
        onPointerDownCapture: Cn(
          i.onPointerDownCapture,
          U.onPointerDownCapture
        )
      }
    );
  }
);
Nh.displayName = ry;
var sy = "DismissableLayerBranch", ly = C.forwardRef((i, n) => {
  const r = C.useContext(jh), s = C.useRef(null), a = An(n, s);
  return C.useEffect(() => {
    const u = s.current;
    if (u)
      return r.branches.add(u), () => {
        r.branches.delete(u);
      };
  }, [r.branches]), /* @__PURE__ */ W.jsx(At.div, { ...i, ref: a });
});
ly.displayName = sy;
function ay(i, n = globalThis?.document) {
  const r = Pn(i), s = C.useRef(!1), a = C.useRef(() => {
  });
  return C.useEffect(() => {
    const u = (h) => {
      if (h.target && !s.current) {
        let p = function() {
          Lh(
            oy,
            r,
            g,
            { discrete: !0 }
          );
        };
        const g = { originalEvent: h };
        h.pointerType === "touch" ? (n.removeEventListener("click", a.current), a.current = p, n.addEventListener("click", a.current, { once: !0 })) : p();
      } else
        n.removeEventListener("click", a.current);
      s.current = !1;
    }, f = window.setTimeout(() => {
      n.addEventListener("pointerdown", u);
    }, 0);
    return () => {
      window.clearTimeout(f), n.removeEventListener("pointerdown", u), n.removeEventListener("click", a.current);
    };
  }, [n, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => s.current = !0
  };
}
function uy(i, n = globalThis?.document) {
  const r = Pn(i), s = C.useRef(!1);
  return C.useEffect(() => {
    const a = (u) => {
      u.target && !s.current && Lh(iy, r, { originalEvent: u }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", a), () => n.removeEventListener("focusin", a);
  }, [n, r]), {
    onFocusCapture: () => s.current = !0,
    onBlurCapture: () => s.current = !1
  };
}
function bf() {
  const i = new CustomEvent(Wa);
  document.dispatchEvent(i);
}
function Lh(i, n, r, { discrete: s }) {
  const a = r.originalEvent.target, u = new CustomEvent(i, { bubbles: !1, cancelable: !0, detail: r });
  n && a.addEventListener(i, n, { once: !0 }), s ? qv(a, u) : a.dispatchEvent(u);
}
var Ea = 0;
function cy() {
  C.useEffect(() => {
    const i = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", i[0] ?? Ef()), document.body.insertAdjacentElement("beforeend", i[1] ?? Ef()), Ea++, () => {
      Ea === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), Ea--;
    };
  }, []);
}
function Ef() {
  const i = document.createElement("span");
  return i.setAttribute("data-radix-focus-guard", ""), i.tabIndex = 0, i.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", i;
}
var Ca = "focusScope.autoFocusOnMount", Pa = "focusScope.autoFocusOnUnmount", Cf = { bubbles: !1, cancelable: !0 }, dy = "FocusScope", Ih = C.forwardRef((i, n) => {
  const {
    loop: r = !1,
    trapped: s = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: u,
    ...f
  } = i, [h, p] = C.useState(null), g = Pn(a), v = Pn(u), y = C.useRef(null), _ = An(n, (S) => p(S)), b = C.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  C.useEffect(() => {
    if (s) {
      let S = function(B) {
        if (b.paused || !h)
          return;
        const $ = B.target;
        h.contains($) ? y.current = $ : kn(y.current, { select: !0 });
      }, P = function(B) {
        if (b.paused || !h)
          return;
        const $ = B.relatedTarget;
        $ !== null && (h.contains($) || kn(y.current, { select: !0 }));
      }, j = function(B) {
        if (document.activeElement === document.body)
          for (const U of B)
            U.removedNodes.length > 0 && kn(h);
      };
      document.addEventListener("focusin", S), document.addEventListener("focusout", P);
      const M = new MutationObserver(j);
      return h && M.observe(h, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", S), document.removeEventListener("focusout", P), M.disconnect();
      };
    }
  }, [s, h, b.paused]), C.useEffect(() => {
    if (h) {
      Tf.add(b);
      const S = document.activeElement;
      if (!h.contains(S)) {
        const j = new CustomEvent(Ca, Cf);
        h.addEventListener(Ca, g), h.dispatchEvent(j), j.defaultPrevented || (fy(vy($h(h)), { select: !0 }), document.activeElement === S && kn(h));
      }
      return () => {
        h.removeEventListener(Ca, g), setTimeout(() => {
          const j = new CustomEvent(Pa, Cf);
          h.addEventListener(Pa, v), h.dispatchEvent(j), j.defaultPrevented || kn(S ?? document.body, { select: !0 }), h.removeEventListener(Pa, v), Tf.remove(b);
        }, 0);
      };
    }
  }, [h, g, v, b]);
  const A = C.useCallback(
    (S) => {
      if (!r && !s || b.paused)
        return;
      const P = S.key === "Tab" && !S.altKey && !S.ctrlKey && !S.metaKey, j = document.activeElement;
      if (P && j) {
        const M = S.currentTarget, [B, $] = hy(M);
        B && $ ? !S.shiftKey && j === $ ? (S.preventDefault(), r && kn(B, { select: !0 })) : S.shiftKey && j === B && (S.preventDefault(), r && kn($, { select: !0 })) : j === M && S.preventDefault();
      }
    },
    [r, s, b.paused]
  );
  return /* @__PURE__ */ W.jsx(At.div, { tabIndex: -1, ...f, ref: _, onKeyDown: A });
});
Ih.displayName = dy;
function fy(i, { select: n = !1 } = {}) {
  const r = document.activeElement;
  for (const s of i)
    if (kn(s, { select: n }), document.activeElement !== r)
      return;
}
function hy(i) {
  const n = $h(i), r = Pf(n, i), s = Pf(n.reverse(), i);
  return [r, s];
}
function $h(i) {
  const n = [], r = document.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (s) => {
      const a = s.tagName === "INPUT" && s.type === "hidden";
      return s.disabled || s.hidden || a ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    n.push(r.currentNode);
  return n;
}
function Pf(i, n) {
  for (const r of i)
    if (!py(r, { upTo: n }))
      return r;
}
function py(i, { upTo: n }) {
  if (getComputedStyle(i).visibility === "hidden")
    return !0;
  for (; i; ) {
    if (n !== void 0 && i === n)
      return !1;
    if (getComputedStyle(i).display === "none")
      return !0;
    i = i.parentElement;
  }
  return !1;
}
function my(i) {
  return i instanceof HTMLInputElement && "select" in i;
}
function kn(i, { select: n = !1 } = {}) {
  if (i && i.focus) {
    const r = document.activeElement;
    i.focus({ preventScroll: !0 }), i !== r && my(i) && n && i.select();
  }
}
var Tf = gy();
function gy() {
  let i = [];
  return {
    add(n) {
      const r = i[0];
      n !== r && r?.pause(), i = Of(i, n), i.unshift(n);
    },
    remove(n) {
      i = Of(i, n), i[0]?.resume();
    }
  };
}
function Of(i, n) {
  const r = [...i], s = r.indexOf(n);
  return s !== -1 && r.splice(s, 1), r;
}
function vy(i) {
  return i.filter((n) => n.tagName !== "A");
}
var Yn = globalThis?.document ? C.useLayoutEffect : () => {
}, yy = Jg["useId".toString()] || (() => {
}), wy = 0;
function _y(i) {
  const [n, r] = C.useState(yy());
  return Yn(() => {
    i || r((s) => s ?? String(wy++));
  }, [i]), i || (n ? `radix-${n}` : "");
}
const xy = ["top", "right", "bottom", "left"], zt = Math.min, ct = Math.max, ms = Math.round, ns = Math.floor, Tn = (i) => ({
  x: i,
  y: i
}), ky = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Sy = {
  start: "end",
  end: "start"
};
function Ha(i, n, r) {
  return ct(i, zt(n, r));
}
function Yt(i, n) {
  return typeof i == "function" ? i(n) : i;
}
function Xt(i) {
  return i.split("-")[0];
}
function Fr(i) {
  return i.split("-")[1];
}
function tu(i) {
  return i === "x" ? "y" : "x";
}
function nu(i) {
  return i === "y" ? "height" : "width";
}
function On(i) {
  return ["top", "bottom"].includes(Xt(i)) ? "y" : "x";
}
function ru(i) {
  return tu(On(i));
}
function by(i, n, r) {
  r === void 0 && (r = !1);
  const s = Fr(i), a = ru(i), u = nu(a);
  let f = a === "x" ? s === (r ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return n.reference[u] > n.floating[u] && (f = gs(f)), [f, gs(f)];
}
function Ey(i) {
  const n = gs(i);
  return [Va(i), n, Va(n)];
}
function Va(i) {
  return i.replace(/start|end/g, (n) => Sy[n]);
}
function Cy(i, n, r) {
  const s = ["left", "right"], a = ["right", "left"], u = ["top", "bottom"], f = ["bottom", "top"];
  switch (i) {
    case "top":
    case "bottom":
      return r ? n ? a : s : n ? s : a;
    case "left":
    case "right":
      return n ? u : f;
    default:
      return [];
  }
}
function Py(i, n, r, s) {
  const a = Fr(i);
  let u = Cy(Xt(i), r === "start", s);
  return a && (u = u.map((f) => f + "-" + a), n && (u = u.concat(u.map(Va)))), u;
}
function gs(i) {
  return i.replace(/left|right|bottom|top/g, (n) => ky[n]);
}
function Ty(i) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...i
  };
}
function Dh(i) {
  return typeof i != "number" ? Ty(i) : {
    top: i,
    right: i,
    bottom: i,
    left: i
  };
}
function vs(i) {
  const {
    x: n,
    y: r,
    width: s,
    height: a
  } = i;
  return {
    width: s,
    height: a,
    top: r,
    left: n,
    right: n + s,
    bottom: r + a,
    x: n,
    y: r
  };
}
function Rf(i, n, r) {
  let {
    reference: s,
    floating: a
  } = i;
  const u = On(n), f = ru(n), h = nu(f), p = Xt(n), g = u === "y", v = s.x + s.width / 2 - a.width / 2, y = s.y + s.height / 2 - a.height / 2, _ = s[h] / 2 - a[h] / 2;
  let b;
  switch (p) {
    case "top":
      b = {
        x: v,
        y: s.y - a.height
      };
      break;
    case "bottom":
      b = {
        x: v,
        y: s.y + s.height
      };
      break;
    case "right":
      b = {
        x: s.x + s.width,
        y
      };
      break;
    case "left":
      b = {
        x: s.x - a.width,
        y
      };
      break;
    default:
      b = {
        x: s.x,
        y: s.y
      };
  }
  switch (Fr(n)) {
    case "start":
      b[f] -= _ * (r && g ? -1 : 1);
      break;
    case "end":
      b[f] += _ * (r && g ? -1 : 1);
      break;
  }
  return b;
}
const Oy = async (i, n, r) => {
  const {
    placement: s = "bottom",
    strategy: a = "absolute",
    middleware: u = [],
    platform: f
  } = r, h = u.filter(Boolean), p = await (f.isRTL == null ? void 0 : f.isRTL(n));
  let g = await f.getElementRects({
    reference: i,
    floating: n,
    strategy: a
  }), {
    x: v,
    y
  } = Rf(g, s, p), _ = s, b = {}, A = 0;
  for (let S = 0; S < h.length; S++) {
    const {
      name: P,
      fn: j
    } = h[S], {
      x: M,
      y: B,
      data: $,
      reset: U
    } = await j({
      x: v,
      y,
      initialPlacement: s,
      placement: _,
      strategy: a,
      middlewareData: b,
      rects: g,
      platform: f,
      elements: {
        reference: i,
        floating: n
      }
    });
    v = M ?? v, y = B ?? y, b = {
      ...b,
      [P]: {
        ...b[P],
        ...$
      }
    }, U && A <= 50 && (A++, typeof U == "object" && (U.placement && (_ = U.placement), U.rects && (g = U.rects === !0 ? await f.getElementRects({
      reference: i,
      floating: n,
      strategy: a
    }) : U.rects), {
      x: v,
      y
    } = Rf(g, _, p)), S = -1);
  }
  return {
    x: v,
    y,
    placement: _,
    strategy: a,
    middlewareData: b
  };
};
async function zo(i, n) {
  var r;
  n === void 0 && (n = {});
  const {
    x: s,
    y: a,
    platform: u,
    rects: f,
    elements: h,
    strategy: p
  } = i, {
    boundary: g = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: y = "floating",
    altBoundary: _ = !1,
    padding: b = 0
  } = Yt(n, i), A = Dh(b), P = h[_ ? y === "floating" ? "reference" : "floating" : y], j = vs(await u.getClippingRect({
    element: (r = await (u.isElement == null ? void 0 : u.isElement(P))) == null || r ? P : P.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(h.floating)),
    boundary: g,
    rootBoundary: v,
    strategy: p
  })), M = y === "floating" ? {
    x: s,
    y: a,
    width: f.floating.width,
    height: f.floating.height
  } : f.reference, B = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(h.floating)), $ = await (u.isElement == null ? void 0 : u.isElement(B)) ? await (u.getScale == null ? void 0 : u.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, U = vs(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: h,
    rect: M,
    offsetParent: B,
    strategy: p
  }) : M);
  return {
    top: (j.top - U.top + A.top) / $.y,
    bottom: (U.bottom - j.bottom + A.bottom) / $.y,
    left: (j.left - U.left + A.left) / $.x,
    right: (U.right - j.right + A.right) / $.x
  };
}
const Ry = (i) => ({
  name: "arrow",
  options: i,
  async fn(n) {
    const {
      x: r,
      y: s,
      placement: a,
      rects: u,
      platform: f,
      elements: h,
      middlewareData: p
    } = n, {
      element: g,
      padding: v = 0
    } = Yt(i, n) || {};
    if (g == null)
      return {};
    const y = Dh(v), _ = {
      x: r,
      y: s
    }, b = ru(a), A = nu(b), S = await f.getDimensions(g), P = b === "y", j = P ? "top" : "left", M = P ? "bottom" : "right", B = P ? "clientHeight" : "clientWidth", $ = u.reference[A] + u.reference[b] - _[b] - u.floating[A], U = _[b] - u.reference[b], Z = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(g));
    let q = Z ? Z[B] : 0;
    (!q || !await (f.isElement == null ? void 0 : f.isElement(Z))) && (q = h.floating[B] || u.floating[A]);
    const oe = $ / 2 - U / 2, ge = q / 2 - S[A] / 2 - 1, de = zt(y[j], ge), be = zt(y[M], ge), ne = de, xe = q - S[A] - be, ue = q / 2 - S[A] / 2 + oe, ke = Ha(ne, ue, xe), he = !p.arrow && Fr(a) != null && ue !== ke && u.reference[A] / 2 - (ue < ne ? de : be) - S[A] / 2 < 0, X = he ? ue < ne ? ue - ne : ue - xe : 0;
    return {
      [b]: _[b] + X,
      data: {
        [b]: ke,
        centerOffset: ue - ke - X,
        ...he && {
          alignmentOffset: X
        }
      },
      reset: he
    };
  }
}), Ay = function(i) {
  return i === void 0 && (i = {}), {
    name: "flip",
    options: i,
    async fn(n) {
      var r, s;
      const {
        placement: a,
        middlewareData: u,
        rects: f,
        initialPlacement: h,
        platform: p,
        elements: g
      } = n, {
        mainAxis: v = !0,
        crossAxis: y = !0,
        fallbackPlacements: _,
        fallbackStrategy: b = "bestFit",
        fallbackAxisSideDirection: A = "none",
        flipAlignment: S = !0,
        ...P
      } = Yt(i, n);
      if ((r = u.arrow) != null && r.alignmentOffset)
        return {};
      const j = Xt(a), M = On(h), B = Xt(h) === h, $ = await (p.isRTL == null ? void 0 : p.isRTL(g.floating)), U = _ || (B || !S ? [gs(h)] : Ey(h)), Z = A !== "none";
      !_ && Z && U.push(...Py(h, S, A, $));
      const q = [h, ...U], oe = await zo(n, P), ge = [];
      let de = ((s = u.flip) == null ? void 0 : s.overflows) || [];
      if (v && ge.push(oe[j]), y) {
        const ue = by(a, f, $);
        ge.push(oe[ue[0]], oe[ue[1]]);
      }
      if (de = [...de, {
        placement: a,
        overflows: ge
      }], !ge.every((ue) => ue <= 0)) {
        var be, ne;
        const ue = (((be = u.flip) == null ? void 0 : be.index) || 0) + 1, ke = q[ue];
        if (ke)
          return {
            data: {
              index: ue,
              overflows: de
            },
            reset: {
              placement: ke
            }
          };
        let he = (ne = de.filter((X) => X.overflows[0] <= 0).sort((X, D) => X.overflows[1] - D.overflows[1])[0]) == null ? void 0 : ne.placement;
        if (!he)
          switch (b) {
            case "bestFit": {
              var xe;
              const X = (xe = de.filter((D) => {
                if (Z) {
                  const H = On(D.placement);
                  return H === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  H === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((H) => H > 0).reduce((H, V) => H + V, 0)]).sort((D, H) => D[1] - H[1])[0]) == null ? void 0 : xe[0];
              X && (he = X);
              break;
            }
            case "initialPlacement":
              he = h;
              break;
          }
        if (a !== he)
          return {
            reset: {
              placement: he
            }
          };
      }
      return {};
    }
  };
};
function Af(i, n) {
  return {
    top: i.top - n.height,
    right: i.right - n.width,
    bottom: i.bottom - n.height,
    left: i.left - n.width
  };
}
function jf(i) {
  return xy.some((n) => i[n] >= 0);
}
const jy = function(i) {
  return i === void 0 && (i = {}), {
    name: "hide",
    options: i,
    async fn(n) {
      const {
        rects: r
      } = n, {
        strategy: s = "referenceHidden",
        ...a
      } = Yt(i, n);
      switch (s) {
        case "referenceHidden": {
          const u = await zo(n, {
            ...a,
            elementContext: "reference"
          }), f = Af(u, r.reference);
          return {
            data: {
              referenceHiddenOffsets: f,
              referenceHidden: jf(f)
            }
          };
        }
        case "escaped": {
          const u = await zo(n, {
            ...a,
            altBoundary: !0
          }), f = Af(u, r.floating);
          return {
            data: {
              escapedOffsets: f,
              escaped: jf(f)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Ny(i, n) {
  const {
    placement: r,
    platform: s,
    elements: a
  } = i, u = await (s.isRTL == null ? void 0 : s.isRTL(a.floating)), f = Xt(r), h = Fr(r), p = On(r) === "y", g = ["left", "top"].includes(f) ? -1 : 1, v = u && p ? -1 : 1, y = Yt(n, i);
  let {
    mainAxis: _,
    crossAxis: b,
    alignmentAxis: A
  } = typeof y == "number" ? {
    mainAxis: y,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...y
  };
  return h && typeof A == "number" && (b = h === "end" ? A * -1 : A), p ? {
    x: b * v,
    y: _ * g
  } : {
    x: _ * g,
    y: b * v
  };
}
const Ly = function(i) {
  return i === void 0 && (i = 0), {
    name: "offset",
    options: i,
    async fn(n) {
      var r, s;
      const {
        x: a,
        y: u,
        placement: f,
        middlewareData: h
      } = n, p = await Ny(n, i);
      return f === ((r = h.offset) == null ? void 0 : r.placement) && (s = h.arrow) != null && s.alignmentOffset ? {} : {
        x: a + p.x,
        y: u + p.y,
        data: {
          ...p,
          placement: f
        }
      };
    }
  };
}, Iy = function(i) {
  return i === void 0 && (i = {}), {
    name: "shift",
    options: i,
    async fn(n) {
      const {
        x: r,
        y: s,
        placement: a
      } = n, {
        mainAxis: u = !0,
        crossAxis: f = !1,
        limiter: h = {
          fn: (P) => {
            let {
              x: j,
              y: M
            } = P;
            return {
              x: j,
              y: M
            };
          }
        },
        ...p
      } = Yt(i, n), g = {
        x: r,
        y: s
      }, v = await zo(n, p), y = On(Xt(a)), _ = tu(y);
      let b = g[_], A = g[y];
      if (u) {
        const P = _ === "y" ? "top" : "left", j = _ === "y" ? "bottom" : "right", M = b + v[P], B = b - v[j];
        b = Ha(M, b, B);
      }
      if (f) {
        const P = y === "y" ? "top" : "left", j = y === "y" ? "bottom" : "right", M = A + v[P], B = A - v[j];
        A = Ha(M, A, B);
      }
      const S = h.fn({
        ...n,
        [_]: b,
        [y]: A
      });
      return {
        ...S,
        data: {
          x: S.x - r,
          y: S.y - s
        }
      };
    }
  };
}, $y = function(i) {
  return i === void 0 && (i = {}), {
    options: i,
    fn(n) {
      const {
        x: r,
        y: s,
        placement: a,
        rects: u,
        middlewareData: f
      } = n, {
        offset: h = 0,
        mainAxis: p = !0,
        crossAxis: g = !0
      } = Yt(i, n), v = {
        x: r,
        y: s
      }, y = On(a), _ = tu(y);
      let b = v[_], A = v[y];
      const S = Yt(h, n), P = typeof S == "number" ? {
        mainAxis: S,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...S
      };
      if (p) {
        const B = _ === "y" ? "height" : "width", $ = u.reference[_] - u.floating[B] + P.mainAxis, U = u.reference[_] + u.reference[B] - P.mainAxis;
        b < $ ? b = $ : b > U && (b = U);
      }
      if (g) {
        var j, M;
        const B = _ === "y" ? "width" : "height", $ = ["top", "left"].includes(Xt(a)), U = u.reference[y] - u.floating[B] + ($ && ((j = f.offset) == null ? void 0 : j[y]) || 0) + ($ ? 0 : P.crossAxis), Z = u.reference[y] + u.reference[B] + ($ ? 0 : ((M = f.offset) == null ? void 0 : M[y]) || 0) - ($ ? P.crossAxis : 0);
        A < U ? A = U : A > Z && (A = Z);
      }
      return {
        [_]: b,
        [y]: A
      };
    }
  };
}, Dy = function(i) {
  return i === void 0 && (i = {}), {
    name: "size",
    options: i,
    async fn(n) {
      const {
        placement: r,
        rects: s,
        platform: a,
        elements: u
      } = n, {
        apply: f = () => {
        },
        ...h
      } = Yt(i, n), p = await zo(n, h), g = Xt(r), v = Fr(r), y = On(r) === "y", {
        width: _,
        height: b
      } = s.floating;
      let A, S;
      g === "top" || g === "bottom" ? (A = g, S = v === (await (a.isRTL == null ? void 0 : a.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (S = g, A = v === "end" ? "top" : "bottom");
      const P = b - p.top - p.bottom, j = _ - p.left - p.right, M = zt(b - p[A], P), B = zt(_ - p[S], j), $ = !n.middlewareData.shift;
      let U = M, Z = B;
      if (y ? Z = v || $ ? zt(B, j) : j : U = v || $ ? zt(M, P) : P, $ && !v) {
        const oe = ct(p.left, 0), ge = ct(p.right, 0), de = ct(p.top, 0), be = ct(p.bottom, 0);
        y ? Z = _ - 2 * (oe !== 0 || ge !== 0 ? oe + ge : ct(p.left, p.right)) : U = b - 2 * (de !== 0 || be !== 0 ? de + be : ct(p.top, p.bottom));
      }
      await f({
        ...n,
        availableWidth: Z,
        availableHeight: U
      });
      const q = await a.getDimensions(u.floating);
      return _ !== q.width || b !== q.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ur(i) {
  return zh(i) ? (i.nodeName || "").toLowerCase() : "#document";
}
function dt(i) {
  var n;
  return (i == null || (n = i.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Zt(i) {
  var n;
  return (n = (zh(i) ? i.ownerDocument : i.document) || window.document) == null ? void 0 : n.documentElement;
}
function zh(i) {
  return i instanceof Node || i instanceof dt(i).Node;
}
function Mt(i) {
  return i instanceof Element || i instanceof dt(i).Element;
}
function Ft(i) {
  return i instanceof HTMLElement || i instanceof dt(i).HTMLElement;
}
function Nf(i) {
  return typeof ShadowRoot > "u" ? !1 : i instanceof ShadowRoot || i instanceof dt(i).ShadowRoot;
}
function Bo(i) {
  const {
    overflow: n,
    overflowX: r,
    overflowY: s,
    display: a
  } = Rt(i);
  return /auto|scroll|overlay|hidden|clip/.test(n + s + r) && !["inline", "contents"].includes(a);
}
function zy(i) {
  return ["table", "td", "th"].includes(Ur(i));
}
function _s(i) {
  return [":popover-open", ":modal"].some((n) => {
    try {
      return i.matches(n);
    } catch {
      return !1;
    }
  });
}
function ou(i) {
  const n = iu(), r = Rt(i);
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !n && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !n && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((s) => (r.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (r.contain || "").includes(s));
}
function My(i) {
  let n = Rn(i);
  for (; Ft(n) && !Ir(n); ) {
    if (_s(n))
      return null;
    if (ou(n))
      return n;
    n = Rn(n);
  }
  return null;
}
function iu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ir(i) {
  return ["html", "body", "#document"].includes(Ur(i));
}
function Rt(i) {
  return dt(i).getComputedStyle(i);
}
function xs(i) {
  return Mt(i) ? {
    scrollLeft: i.scrollLeft,
    scrollTop: i.scrollTop
  } : {
    scrollLeft: i.scrollX,
    scrollTop: i.scrollY
  };
}
function Rn(i) {
  if (Ur(i) === "html")
    return i;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    i.assignedSlot || // DOM Element detected.
    i.parentNode || // ShadowRoot detected.
    Nf(i) && i.host || // Fallback.
    Zt(i)
  );
  return Nf(n) ? n.host : n;
}
function Mh(i) {
  const n = Rn(i);
  return Ir(n) ? i.ownerDocument ? i.ownerDocument.body : i.body : Ft(n) && Bo(n) ? n : Mh(n);
}
function Mo(i, n, r) {
  var s;
  n === void 0 && (n = []), r === void 0 && (r = !0);
  const a = Mh(i), u = a === ((s = i.ownerDocument) == null ? void 0 : s.body), f = dt(a);
  return u ? n.concat(f, f.visualViewport || [], Bo(a) ? a : [], f.frameElement && r ? Mo(f.frameElement) : []) : n.concat(a, Mo(a, [], r));
}
function Fh(i) {
  const n = Rt(i);
  let r = parseFloat(n.width) || 0, s = parseFloat(n.height) || 0;
  const a = Ft(i), u = a ? i.offsetWidth : r, f = a ? i.offsetHeight : s, h = ms(r) !== u || ms(s) !== f;
  return h && (r = u, s = f), {
    width: r,
    height: s,
    $: h
  };
}
function su(i) {
  return Mt(i) ? i : i.contextElement;
}
function jr(i) {
  const n = su(i);
  if (!Ft(n))
    return Tn(1);
  const r = n.getBoundingClientRect(), {
    width: s,
    height: a,
    $: u
  } = Fh(n);
  let f = (u ? ms(r.width) : r.width) / s, h = (u ? ms(r.height) : r.height) / a;
  return (!f || !Number.isFinite(f)) && (f = 1), (!h || !Number.isFinite(h)) && (h = 1), {
    x: f,
    y: h
  };
}
const Fy = /* @__PURE__ */ Tn(0);
function Uh(i) {
  const n = dt(i);
  return !iu() || !n.visualViewport ? Fy : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function Uy(i, n, r) {
  return n === void 0 && (n = !1), !r || n && r !== dt(i) ? !1 : n;
}
function Xn(i, n, r, s) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  const a = i.getBoundingClientRect(), u = su(i);
  let f = Tn(1);
  n && (s ? Mt(s) && (f = jr(s)) : f = jr(i));
  const h = Uy(u, r, s) ? Uh(u) : Tn(0);
  let p = (a.left + h.x) / f.x, g = (a.top + h.y) / f.y, v = a.width / f.x, y = a.height / f.y;
  if (u) {
    const _ = dt(u), b = s && Mt(s) ? dt(s) : s;
    let A = _, S = A.frameElement;
    for (; S && s && b !== A; ) {
      const P = jr(S), j = S.getBoundingClientRect(), M = Rt(S), B = j.left + (S.clientLeft + parseFloat(M.paddingLeft)) * P.x, $ = j.top + (S.clientTop + parseFloat(M.paddingTop)) * P.y;
      p *= P.x, g *= P.y, v *= P.x, y *= P.y, p += B, g += $, A = dt(S), S = A.frameElement;
    }
  }
  return vs({
    width: v,
    height: y,
    x: p,
    y: g
  });
}
function By(i) {
  let {
    elements: n,
    rect: r,
    offsetParent: s,
    strategy: a
  } = i;
  const u = a === "fixed", f = Zt(s), h = n ? _s(n.floating) : !1;
  if (s === f || h && u)
    return r;
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  }, g = Tn(1);
  const v = Tn(0), y = Ft(s);
  if ((y || !y && !u) && ((Ur(s) !== "body" || Bo(f)) && (p = xs(s)), Ft(s))) {
    const _ = Xn(s);
    g = jr(s), v.x = _.x + s.clientLeft, v.y = _.y + s.clientTop;
  }
  return {
    width: r.width * g.x,
    height: r.height * g.y,
    x: r.x * g.x - p.scrollLeft * g.x + v.x,
    y: r.y * g.y - p.scrollTop * g.y + v.y
  };
}
function Wy(i) {
  return Array.from(i.getClientRects());
}
function Bh(i) {
  return Xn(Zt(i)).left + xs(i).scrollLeft;
}
function Hy(i) {
  const n = Zt(i), r = xs(i), s = i.ownerDocument.body, a = ct(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth), u = ct(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
  let f = -r.scrollLeft + Bh(i);
  const h = -r.scrollTop;
  return Rt(s).direction === "rtl" && (f += ct(n.clientWidth, s.clientWidth) - a), {
    width: a,
    height: u,
    x: f,
    y: h
  };
}
function Vy(i, n) {
  const r = dt(i), s = Zt(i), a = r.visualViewport;
  let u = s.clientWidth, f = s.clientHeight, h = 0, p = 0;
  if (a) {
    u = a.width, f = a.height;
    const g = iu();
    (!g || g && n === "fixed") && (h = a.offsetLeft, p = a.offsetTop);
  }
  return {
    width: u,
    height: f,
    x: h,
    y: p
  };
}
function Ky(i, n) {
  const r = Xn(i, !0, n === "fixed"), s = r.top + i.clientTop, a = r.left + i.clientLeft, u = Ft(i) ? jr(i) : Tn(1), f = i.clientWidth * u.x, h = i.clientHeight * u.y, p = a * u.x, g = s * u.y;
  return {
    width: f,
    height: h,
    x: p,
    y: g
  };
}
function Lf(i, n, r) {
  let s;
  if (n === "viewport")
    s = Vy(i, r);
  else if (n === "document")
    s = Hy(Zt(i));
  else if (Mt(n))
    s = Ky(n, r);
  else {
    const a = Uh(i);
    s = {
      ...n,
      x: n.x - a.x,
      y: n.y - a.y
    };
  }
  return vs(s);
}
function Wh(i, n) {
  const r = Rn(i);
  return r === n || !Mt(r) || Ir(r) ? !1 : Rt(r).position === "fixed" || Wh(r, n);
}
function Gy(i, n) {
  const r = n.get(i);
  if (r)
    return r;
  let s = Mo(i, [], !1).filter((h) => Mt(h) && Ur(h) !== "body"), a = null;
  const u = Rt(i).position === "fixed";
  let f = u ? Rn(i) : i;
  for (; Mt(f) && !Ir(f); ) {
    const h = Rt(f), p = ou(f);
    !p && h.position === "fixed" && (a = null), (u ? !p && !a : !p && h.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Bo(f) && !p && Wh(i, f)) ? s = s.filter((v) => v !== f) : a = h, f = Rn(f);
  }
  return n.set(i, s), s;
}
function Qy(i) {
  let {
    element: n,
    boundary: r,
    rootBoundary: s,
    strategy: a
  } = i;
  const f = [...r === "clippingAncestors" ? _s(n) ? [] : Gy(n, this._c) : [].concat(r), s], h = f[0], p = f.reduce((g, v) => {
    const y = Lf(n, v, a);
    return g.top = ct(y.top, g.top), g.right = zt(y.right, g.right), g.bottom = zt(y.bottom, g.bottom), g.left = ct(y.left, g.left), g;
  }, Lf(n, h, a));
  return {
    width: p.right - p.left,
    height: p.bottom - p.top,
    x: p.left,
    y: p.top
  };
}
function qy(i) {
  const {
    width: n,
    height: r
  } = Fh(i);
  return {
    width: n,
    height: r
  };
}
function Jy(i, n, r) {
  const s = Ft(n), a = Zt(n), u = r === "fixed", f = Xn(i, !0, u, n);
  let h = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const p = Tn(0);
  if (s || !s && !u)
    if ((Ur(n) !== "body" || Bo(a)) && (h = xs(n)), s) {
      const y = Xn(n, !0, u, n);
      p.x = y.x + n.clientLeft, p.y = y.y + n.clientTop;
    } else
      a && (p.x = Bh(a));
  const g = f.left + h.scrollLeft - p.x, v = f.top + h.scrollTop - p.y;
  return {
    x: g,
    y: v,
    width: f.width,
    height: f.height
  };
}
function Ta(i) {
  return Rt(i).position === "static";
}
function If(i, n) {
  return !Ft(i) || Rt(i).position === "fixed" ? null : n ? n(i) : i.offsetParent;
}
function Hh(i, n) {
  const r = dt(i);
  if (_s(i))
    return r;
  if (!Ft(i)) {
    let a = Rn(i);
    for (; a && !Ir(a); ) {
      if (Mt(a) && !Ta(a))
        return a;
      a = Rn(a);
    }
    return r;
  }
  let s = If(i, n);
  for (; s && zy(s) && Ta(s); )
    s = If(s, n);
  return s && Ir(s) && Ta(s) && !ou(s) ? r : s || My(i) || r;
}
const Yy = async function(i) {
  const n = this.getOffsetParent || Hh, r = this.getDimensions, s = await r(i.floating);
  return {
    reference: Jy(i.reference, await n(i.floating), i.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function Xy(i) {
  return Rt(i).direction === "rtl";
}
const Zy = {
  convertOffsetParentRelativeRectToViewportRelativeRect: By,
  getDocumentElement: Zt,
  getClippingRect: Qy,
  getOffsetParent: Hh,
  getElementRects: Yy,
  getClientRects: Wy,
  getDimensions: qy,
  getScale: jr,
  isElement: Mt,
  isRTL: Xy
};
function e0(i, n) {
  let r = null, s;
  const a = Zt(i);
  function u() {
    var h;
    clearTimeout(s), (h = r) == null || h.disconnect(), r = null;
  }
  function f(h, p) {
    h === void 0 && (h = !1), p === void 0 && (p = 1), u();
    const {
      left: g,
      top: v,
      width: y,
      height: _
    } = i.getBoundingClientRect();
    if (h || n(), !y || !_)
      return;
    const b = ns(v), A = ns(a.clientWidth - (g + y)), S = ns(a.clientHeight - (v + _)), P = ns(g), M = {
      rootMargin: -b + "px " + -A + "px " + -S + "px " + -P + "px",
      threshold: ct(0, zt(1, p)) || 1
    };
    let B = !0;
    function $(U) {
      const Z = U[0].intersectionRatio;
      if (Z !== p) {
        if (!B)
          return f();
        Z ? f(!1, Z) : s = setTimeout(() => {
          f(!1, 1e-7);
        }, 1e3);
      }
      B = !1;
    }
    try {
      r = new IntersectionObserver($, {
        ...M,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      r = new IntersectionObserver($, M);
    }
    r.observe(i);
  }
  return f(!0), u;
}
function t0(i, n, r, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: u = !0,
    elementResize: f = typeof ResizeObserver == "function",
    layoutShift: h = typeof IntersectionObserver == "function",
    animationFrame: p = !1
  } = s, g = su(i), v = a || u ? [...g ? Mo(g) : [], ...Mo(n)] : [];
  v.forEach((j) => {
    a && j.addEventListener("scroll", r, {
      passive: !0
    }), u && j.addEventListener("resize", r);
  });
  const y = g && h ? e0(g, r) : null;
  let _ = -1, b = null;
  f && (b = new ResizeObserver((j) => {
    let [M] = j;
    M && M.target === g && b && (b.unobserve(n), cancelAnimationFrame(_), _ = requestAnimationFrame(() => {
      var B;
      (B = b) == null || B.observe(n);
    })), r();
  }), g && !p && b.observe(g), b.observe(n));
  let A, S = p ? Xn(i) : null;
  p && P();
  function P() {
    const j = Xn(i);
    S && (j.x !== S.x || j.y !== S.y || j.width !== S.width || j.height !== S.height) && r(), S = j, A = requestAnimationFrame(P);
  }
  return r(), () => {
    var j;
    v.forEach((M) => {
      a && M.removeEventListener("scroll", r), u && M.removeEventListener("resize", r);
    }), y?.(), (j = b) == null || j.disconnect(), b = null, p && cancelAnimationFrame(A);
  };
}
const n0 = Ly, r0 = Iy, o0 = Ay, i0 = Dy, s0 = jy, $f = Ry, l0 = $y, a0 = (i, n, r) => {
  const s = /* @__PURE__ */ new Map(), a = {
    platform: Zy,
    ...r
  }, u = {
    ...a.platform,
    _c: s
  };
  return Oy(i, n, {
    ...a,
    platform: u
  });
};
var fs = typeof document < "u" ? C.useLayoutEffect : C.useEffect;
function ys(i, n) {
  if (i === n)
    return !0;
  if (typeof i != typeof n)
    return !1;
  if (typeof i == "function" && i.toString() === n.toString())
    return !0;
  let r, s, a;
  if (i && n && typeof i == "object") {
    if (Array.isArray(i)) {
      if (r = i.length, r !== n.length)
        return !1;
      for (s = r; s-- !== 0; )
        if (!ys(i[s], n[s]))
          return !1;
      return !0;
    }
    if (a = Object.keys(i), r = a.length, r !== Object.keys(n).length)
      return !1;
    for (s = r; s-- !== 0; )
      if (!{}.hasOwnProperty.call(n, a[s]))
        return !1;
    for (s = r; s-- !== 0; ) {
      const u = a[s];
      if (!(u === "_owner" && i.$$typeof) && !ys(i[u], n[u]))
        return !1;
    }
    return !0;
  }
  return i !== i && n !== n;
}
function Vh(i) {
  return typeof window > "u" ? 1 : (i.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Df(i, n) {
  const r = Vh(i);
  return Math.round(n * r) / r;
}
function zf(i) {
  const n = C.useRef(i);
  return fs(() => {
    n.current = i;
  }), n;
}
function u0(i) {
  i === void 0 && (i = {});
  const {
    placement: n = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: a,
    elements: {
      reference: u,
      floating: f
    } = {},
    transform: h = !0,
    whileElementsMounted: p,
    open: g
  } = i, [v, y] = C.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [_, b] = C.useState(s);
  ys(_, s) || b(s);
  const [A, S] = C.useState(null), [P, j] = C.useState(null), M = C.useCallback((X) => {
    X !== Z.current && (Z.current = X, S(X));
  }, []), B = C.useCallback((X) => {
    X !== q.current && (q.current = X, j(X));
  }, []), $ = u || A, U = f || P, Z = C.useRef(null), q = C.useRef(null), oe = C.useRef(v), ge = p != null, de = zf(p), be = zf(a), ne = C.useCallback(() => {
    if (!Z.current || !q.current)
      return;
    const X = {
      placement: n,
      strategy: r,
      middleware: _
    };
    be.current && (X.platform = be.current), a0(Z.current, q.current, X).then((D) => {
      const H = {
        ...D,
        isPositioned: !0
      };
      xe.current && !ys(oe.current, H) && (oe.current = H, Uo.flushSync(() => {
        y(H);
      }));
    });
  }, [_, n, r, be]);
  fs(() => {
    g === !1 && oe.current.isPositioned && (oe.current.isPositioned = !1, y((X) => ({
      ...X,
      isPositioned: !1
    })));
  }, [g]);
  const xe = C.useRef(!1);
  fs(() => (xe.current = !0, () => {
    xe.current = !1;
  }), []), fs(() => {
    if ($ && (Z.current = $), U && (q.current = U), $ && U) {
      if (de.current)
        return de.current($, U, ne);
      ne();
    }
  }, [$, U, ne, de, ge]);
  const ue = C.useMemo(() => ({
    reference: Z,
    floating: q,
    setReference: M,
    setFloating: B
  }), [M, B]), ke = C.useMemo(() => ({
    reference: $,
    floating: U
  }), [$, U]), he = C.useMemo(() => {
    const X = {
      position: r,
      left: 0,
      top: 0
    };
    if (!ke.floating)
      return X;
    const D = Df(ke.floating, v.x), H = Df(ke.floating, v.y);
    return h ? {
      ...X,
      transform: "translate(" + D + "px, " + H + "px)",
      ...Vh(ke.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: D,
      top: H
    };
  }, [r, h, ke.floating, v.x, v.y]);
  return C.useMemo(() => ({
    ...v,
    update: ne,
    refs: ue,
    elements: ke,
    floatingStyles: he
  }), [v, ne, ue, ke, he]);
}
const c0 = (i) => {
  function n(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: i,
    fn(r) {
      const {
        element: s,
        padding: a
      } = typeof i == "function" ? i(r) : i;
      return s && n(s) ? s.current != null ? $f({
        element: s.current,
        padding: a
      }).fn(r) : {} : s ? $f({
        element: s,
        padding: a
      }).fn(r) : {};
    }
  };
}, d0 = (i, n) => ({
  ...n0(i),
  options: [i, n]
}), f0 = (i, n) => ({
  ...r0(i),
  options: [i, n]
}), h0 = (i, n) => ({
  ...l0(i),
  options: [i, n]
}), p0 = (i, n) => ({
  ...o0(i),
  options: [i, n]
}), m0 = (i, n) => ({
  ...i0(i),
  options: [i, n]
}), g0 = (i, n) => ({
  ...s0(i),
  options: [i, n]
}), v0 = (i, n) => ({
  ...c0(i),
  options: [i, n]
});
var y0 = "Arrow", Kh = C.forwardRef((i, n) => {
  const { children: r, width: s = 10, height: a = 5, ...u } = i;
  return /* @__PURE__ */ W.jsx(
    At.svg,
    {
      ...u,
      ref: n,
      width: s,
      height: a,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: i.asChild ? r : /* @__PURE__ */ W.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Kh.displayName = y0;
var w0 = Kh;
function _0(i) {
  const [n, r] = C.useState(void 0);
  return Yn(() => {
    if (i) {
      r({ width: i.offsetWidth, height: i.offsetHeight });
      const s = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const u = a[0];
        let f, h;
        if ("borderBoxSize" in u) {
          const p = u.borderBoxSize, g = Array.isArray(p) ? p[0] : p;
          f = g.inlineSize, h = g.blockSize;
        } else
          f = i.offsetWidth, h = i.offsetHeight;
        r({ width: f, height: h });
      });
      return s.observe(i, { box: "border-box" }), () => s.unobserve(i);
    } else
      r(void 0);
  }, [i]), n;
}
var lu = "Popper", [Gh, Qh] = Ah(lu), [x0, qh] = Gh(lu), Jh = (i) => {
  const { __scopePopper: n, children: r } = i, [s, a] = C.useState(null);
  return /* @__PURE__ */ W.jsx(x0, { scope: n, anchor: s, onAnchorChange: a, children: r });
};
Jh.displayName = lu;
var Yh = "PopperAnchor", Xh = C.forwardRef(
  (i, n) => {
    const { __scopePopper: r, virtualRef: s, ...a } = i, u = qh(Yh, r), f = C.useRef(null), h = An(n, f);
    return C.useEffect(() => {
      u.onAnchorChange(s?.current || f.current);
    }), s ? null : /* @__PURE__ */ W.jsx(At.div, { ...a, ref: h });
  }
);
Xh.displayName = Yh;
var au = "PopperContent", [k0, S0] = Gh(au), Zh = C.forwardRef(
  (i, n) => {
    const {
      __scopePopper: r,
      side: s = "bottom",
      sideOffset: a = 0,
      align: u = "center",
      alignOffset: f = 0,
      arrowPadding: h = 0,
      avoidCollisions: p = !0,
      collisionBoundary: g = [],
      collisionPadding: v = 0,
      sticky: y = "partial",
      hideWhenDetached: _ = !1,
      updatePositionStrategy: b = "optimized",
      onPlaced: A,
      ...S
    } = i, P = qh(au, r), [j, M] = C.useState(null), B = An(n, (ye) => M(ye)), [$, U] = C.useState(null), Z = _0($), q = Z?.width ?? 0, oe = Z?.height ?? 0, ge = s + (u !== "center" ? "-" + u : ""), de = typeof v == "number" ? v : { top: 0, right: 0, bottom: 0, left: 0, ...v }, be = Array.isArray(g) ? g : [g], ne = be.length > 0, xe = {
      padding: de,
      boundary: be.filter(E0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: ne
    }, { refs: ue, floatingStyles: ke, placement: he, isPositioned: X, middlewareData: D } = u0({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: ge,
      whileElementsMounted: (...ye) => t0(...ye, {
        animationFrame: b === "always"
      }),
      elements: {
        reference: P.anchor
      },
      middleware: [
        d0({ mainAxis: a + oe, alignmentAxis: f }),
        p && f0({
          mainAxis: !0,
          crossAxis: !1,
          limiter: y === "partial" ? h0() : void 0,
          ...xe
        }),
        p && p0({ ...xe }),
        m0({
          ...xe,
          apply: ({ elements: ye, rects: we, availableWidth: Ee, availableHeight: Je }) => {
            const { width: er, height: Ko } = we.reference, Ut = ye.floating.style;
            Ut.setProperty("--radix-popper-available-width", `${Ee}px`), Ut.setProperty("--radix-popper-available-height", `${Je}px`), Ut.setProperty("--radix-popper-anchor-width", `${er}px`), Ut.setProperty("--radix-popper-anchor-height", `${Ko}px`);
          }
        }),
        $ && v0({ element: $, padding: h }),
        C0({ arrowWidth: q, arrowHeight: oe }),
        _ && g0({ strategy: "referenceHidden", ...xe })
      ]
    }), [H, V] = np(he), E = Pn(A);
    Yn(() => {
      X && E?.();
    }, [X, E]);
    const N = D.arrow?.x, ie = D.arrow?.y, le = D.arrow?.centerOffset !== 0, [pe, me] = C.useState();
    return Yn(() => {
      j && me(window.getComputedStyle(j).zIndex);
    }, [j]), /* @__PURE__ */ W.jsx(
      "div",
      {
        ref: ue.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ke,
          transform: X ? ke.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: pe,
          "--radix-popper-transform-origin": [
            D.transformOrigin?.x,
            D.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...D.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: i.dir,
        children: /* @__PURE__ */ W.jsx(
          k0,
          {
            scope: r,
            placedSide: H,
            onArrowChange: U,
            arrowX: N,
            arrowY: ie,
            shouldHideArrow: le,
            children: /* @__PURE__ */ W.jsx(
              At.div,
              {
                "data-side": H,
                "data-align": V,
                ...S,
                ref: B,
                style: {
                  ...S.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: X ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Zh.displayName = au;
var ep = "PopperArrow", b0 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, tp = C.forwardRef(function(n, r) {
  const { __scopePopper: s, ...a } = n, u = S0(ep, s), f = b0[u.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ W.jsx(
      "span",
      {
        ref: u.onArrowChange,
        style: {
          position: "absolute",
          left: u.arrowX,
          top: u.arrowY,
          [f]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[u.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[u.placedSide],
          visibility: u.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ W.jsx(
          w0,
          {
            ...a,
            ref: r,
            style: {
              ...a.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
tp.displayName = ep;
function E0(i) {
  return i !== null;
}
var C0 = (i) => ({
  name: "transformOrigin",
  options: i,
  fn(n) {
    const { placement: r, rects: s, middlewareData: a } = n, f = a.arrow?.centerOffset !== 0, h = f ? 0 : i.arrowWidth, p = f ? 0 : i.arrowHeight, [g, v] = np(r), y = { start: "0%", center: "50%", end: "100%" }[v], _ = (a.arrow?.x ?? 0) + h / 2, b = (a.arrow?.y ?? 0) + p / 2;
    let A = "", S = "";
    return g === "bottom" ? (A = f ? y : `${_}px`, S = `${-p}px`) : g === "top" ? (A = f ? y : `${_}px`, S = `${s.floating.height + p}px`) : g === "right" ? (A = `${-p}px`, S = f ? y : `${b}px`) : g === "left" && (A = `${s.floating.width + p}px`, S = f ? y : `${b}px`), { data: { x: A, y: S } };
  }
});
function np(i) {
  const [n, r = "center"] = i.split("-");
  return [n, r];
}
var P0 = Jh, rp = Xh, T0 = Zh, O0 = tp, R0 = "Portal", op = C.forwardRef((i, n) => {
  const { container: r, ...s } = i, [a, u] = C.useState(!1);
  Yn(() => u(!0), []);
  const f = r || a && globalThis?.document?.body;
  return f ? tv.createPortal(/* @__PURE__ */ W.jsx(At.div, { ...s, ref: n }), f) : null;
});
op.displayName = R0;
function A0(i, n) {
  return C.useReducer((r, s) => n[r][s] ?? r, i);
}
var uu = (i) => {
  const { present: n, children: r } = i, s = j0(n), a = typeof r == "function" ? r({ present: s.isPresent }) : C.Children.only(r), u = An(s.ref, N0(a));
  return typeof r == "function" || s.isPresent ? C.cloneElement(a, { ref: u }) : null;
};
uu.displayName = "Presence";
function j0(i) {
  const [n, r] = C.useState(), s = C.useRef({}), a = C.useRef(i), u = C.useRef("none"), f = i ? "mounted" : "unmounted", [h, p] = A0(f, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return C.useEffect(() => {
    const g = rs(s.current);
    u.current = h === "mounted" ? g : "none";
  }, [h]), Yn(() => {
    const g = s.current, v = a.current;
    if (v !== i) {
      const _ = u.current, b = rs(g);
      i ? p("MOUNT") : b === "none" || g?.display === "none" ? p("UNMOUNT") : p(v && _ !== b ? "ANIMATION_OUT" : "UNMOUNT"), a.current = i;
    }
  }, [i, p]), Yn(() => {
    if (n) {
      const g = (y) => {
        const b = rs(s.current).includes(y.animationName);
        y.target === n && b && Uo.flushSync(() => p("ANIMATION_END"));
      }, v = (y) => {
        y.target === n && (u.current = rs(s.current));
      };
      return n.addEventListener("animationstart", v), n.addEventListener("animationcancel", g), n.addEventListener("animationend", g), () => {
        n.removeEventListener("animationstart", v), n.removeEventListener("animationcancel", g), n.removeEventListener("animationend", g);
      };
    } else
      p("ANIMATION_END");
  }, [n, p]), {
    isPresent: ["mounted", "unmountSuspended"].includes(h),
    ref: C.useCallback((g) => {
      g && (s.current = getComputedStyle(g)), r(g);
    }, [])
  };
}
function rs(i) {
  return i?.animationName || "none";
}
function N0(i) {
  let n = Object.getOwnPropertyDescriptor(i.props, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning;
  return r ? i.ref : (n = Object.getOwnPropertyDescriptor(i, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? i.props.ref : i.props.ref || i.ref);
}
function L0({
  prop: i,
  defaultProp: n,
  onChange: r = () => {
  }
}) {
  const [s, a] = I0({ defaultProp: n, onChange: r }), u = i !== void 0, f = u ? i : s, h = Pn(r), p = C.useCallback(
    (g) => {
      if (u) {
        const y = typeof g == "function" ? g(i) : g;
        y !== i && h(y);
      } else
        a(g);
    },
    [u, i, a, h]
  );
  return [f, p];
}
function I0({
  defaultProp: i,
  onChange: n
}) {
  const r = C.useState(i), [s] = r, a = C.useRef(s), u = Pn(n);
  return C.useEffect(() => {
    a.current !== s && (u(s), a.current = s);
  }, [s, a, u]), r;
}
var $0 = function(i) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(i) ? i[0] : i;
  return n.ownerDocument.body;
}, Cr = /* @__PURE__ */ new WeakMap(), os = /* @__PURE__ */ new WeakMap(), is = {}, Oa = 0, ip = function(i) {
  return i && (i.host || ip(i.parentNode));
}, D0 = function(i, n) {
  return n.map(function(r) {
    if (i.contains(r))
      return r;
    var s = ip(r);
    return s && i.contains(s) ? s : (console.error("aria-hidden", r, "in not contained inside", i, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, z0 = function(i, n, r, s) {
  var a = D0(n, Array.isArray(i) ? i : [i]);
  is[r] || (is[r] = /* @__PURE__ */ new WeakMap());
  var u = is[r], f = [], h = /* @__PURE__ */ new Set(), p = new Set(a), g = function(y) {
    !y || h.has(y) || (h.add(y), g(y.parentNode));
  };
  a.forEach(g);
  var v = function(y) {
    !y || p.has(y) || Array.prototype.forEach.call(y.children, function(_) {
      if (h.has(_))
        v(_);
      else
        try {
          var b = _.getAttribute(s), A = b !== null && b !== "false", S = (Cr.get(_) || 0) + 1, P = (u.get(_) || 0) + 1;
          Cr.set(_, S), u.set(_, P), f.push(_), S === 1 && A && os.set(_, !0), P === 1 && _.setAttribute(r, "true"), A || _.setAttribute(s, "true");
        } catch (j) {
          console.error("aria-hidden: cannot operate on ", _, j);
        }
    });
  };
  return v(n), h.clear(), Oa++, function() {
    f.forEach(function(y) {
      var _ = Cr.get(y) - 1, b = u.get(y) - 1;
      Cr.set(y, _), u.set(y, b), _ || (os.has(y) || y.removeAttribute(s), os.delete(y)), b || y.removeAttribute(r);
    }), Oa--, Oa || (Cr = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), os = /* @__PURE__ */ new WeakMap(), is = {});
  };
}, M0 = function(i, n, r) {
  r === void 0 && (r = "data-aria-hidden");
  var s = Array.from(Array.isArray(i) ? i : [i]), a = n || $0(i);
  return a ? (s.push.apply(s, Array.from(a.querySelectorAll("[aria-live]"))), z0(s, a, r, "aria-hidden")) : function() {
    return null;
  };
}, Dt = function() {
  return Dt = Object.assign || function(n) {
    for (var r, s = 1, a = arguments.length; s < a; s++) {
      r = arguments[s];
      for (var u in r)
        Object.prototype.hasOwnProperty.call(r, u) && (n[u] = r[u]);
    }
    return n;
  }, Dt.apply(this, arguments);
};
function sp(i, n) {
  var r = {};
  for (var s in i)
    Object.prototype.hasOwnProperty.call(i, s) && n.indexOf(s) < 0 && (r[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, s = Object.getOwnPropertySymbols(i); a < s.length; a++)
      n.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[a]) && (r[s[a]] = i[s[a]]);
  return r;
}
function F0(i, n, r) {
  if (r || arguments.length === 2)
    for (var s = 0, a = n.length, u; s < a; s++)
      (u || !(s in n)) && (u || (u = Array.prototype.slice.call(n, 0, s)), u[s] = n[s]);
  return i.concat(u || Array.prototype.slice.call(n));
}
var hs = "right-scroll-bar-position", ps = "width-before-scroll-bar", U0 = "with-scroll-bars-hidden", B0 = "--removed-body-scroll-bar-size";
function Ra(i, n) {
  return typeof i == "function" ? i(n) : i && (i.current = n), i;
}
function W0(i, n) {
  var r = C.useState(function() {
    return {
      // value
      value: i,
      // last callback
      callback: n,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(s) {
          var a = r.value;
          a !== s && (r.value = s, r.callback(s, a));
        }
      }
    };
  })[0];
  return r.callback = n, r.facade;
}
var H0 = typeof window < "u" ? C.useLayoutEffect : C.useEffect, Mf = /* @__PURE__ */ new WeakMap();
function V0(i, n) {
  var r = W0(n || null, function(s) {
    return i.forEach(function(a) {
      return Ra(a, s);
    });
  });
  return H0(function() {
    var s = Mf.get(r);
    if (s) {
      var a = new Set(s), u = new Set(i), f = r.current;
      a.forEach(function(h) {
        u.has(h) || Ra(h, null);
      }), u.forEach(function(h) {
        a.has(h) || Ra(h, f);
      });
    }
    Mf.set(r, i);
  }, [i]), r;
}
function K0(i) {
  return i;
}
function G0(i, n) {
  n === void 0 && (n = K0);
  var r = [], s = !1, a = {
    read: function() {
      if (s)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : i;
    },
    useMedium: function(u) {
      var f = n(u, s);
      return r.push(f), function() {
        r = r.filter(function(h) {
          return h !== f;
        });
      };
    },
    assignSyncMedium: function(u) {
      for (s = !0; r.length; ) {
        var f = r;
        r = [], f.forEach(u);
      }
      r = {
        push: function(h) {
          return u(h);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(u) {
      s = !0;
      var f = [];
      if (r.length) {
        var h = r;
        r = [], h.forEach(u), f = r;
      }
      var p = function() {
        var v = f;
        f = [], v.forEach(u);
      }, g = function() {
        return Promise.resolve().then(p);
      };
      g(), r = {
        push: function(v) {
          f.push(v), g();
        },
        filter: function(v) {
          return f = f.filter(v), r;
        }
      };
    }
  };
  return a;
}
function Q0(i) {
  i === void 0 && (i = {});
  var n = G0(null);
  return n.options = Dt({ async: !0, ssr: !1 }, i), n;
}
var lp = function(i) {
  var n = i.sideCar, r = sp(i, ["sideCar"]);
  if (!n)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var s = n.read();
  if (!s)
    throw new Error("Sidecar medium not found");
  return C.createElement(s, Dt({}, r));
};
lp.isSideCarExport = !0;
function q0(i, n) {
  return i.useMedium(n), lp;
}
var ap = Q0(), Aa = function() {
}, ks = C.forwardRef(function(i, n) {
  var r = C.useRef(null), s = C.useState({
    onScrollCapture: Aa,
    onWheelCapture: Aa,
    onTouchMoveCapture: Aa
  }), a = s[0], u = s[1], f = i.forwardProps, h = i.children, p = i.className, g = i.removeScrollBar, v = i.enabled, y = i.shards, _ = i.sideCar, b = i.noIsolation, A = i.inert, S = i.allowPinchZoom, P = i.as, j = P === void 0 ? "div" : P, M = i.gapMode, B = sp(i, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), $ = _, U = V0([r, n]), Z = Dt(Dt({}, B), a);
  return C.createElement(
    C.Fragment,
    null,
    v && C.createElement($, { sideCar: ap, removeScrollBar: g, shards: y, noIsolation: b, inert: A, setCallbacks: u, allowPinchZoom: !!S, lockRef: r, gapMode: M }),
    f ? C.cloneElement(C.Children.only(h), Dt(Dt({}, Z), { ref: U })) : C.createElement(j, Dt({}, Z, { className: p, ref: U }), h)
  );
});
ks.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ks.classNames = {
  fullWidth: ps,
  zeroRight: hs
};
var Ff, J0 = function() {
  if (Ff)
    return Ff;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Y0() {
  if (!document)
    return null;
  var i = document.createElement("style");
  i.type = "text/css";
  var n = J0();
  return n && i.setAttribute("nonce", n), i;
}
function X0(i, n) {
  i.styleSheet ? i.styleSheet.cssText = n : i.appendChild(document.createTextNode(n));
}
function Z0(i) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(i);
}
var ew = function() {
  var i = 0, n = null;
  return {
    add: function(r) {
      i == 0 && (n = Y0()) && (X0(n, r), Z0(n)), i++;
    },
    remove: function() {
      i--, !i && n && (n.parentNode && n.parentNode.removeChild(n), n = null);
    }
  };
}, tw = function() {
  var i = ew();
  return function(n, r) {
    C.useEffect(function() {
      return i.add(n), function() {
        i.remove();
      };
    }, [n && r]);
  };
}, up = function() {
  var i = tw(), n = function(r) {
    var s = r.styles, a = r.dynamic;
    return i(s, a), null;
  };
  return n;
}, nw = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ja = function(i) {
  return parseInt(i || "", 10) || 0;
}, rw = function(i) {
  var n = window.getComputedStyle(document.body), r = n[i === "padding" ? "paddingLeft" : "marginLeft"], s = n[i === "padding" ? "paddingTop" : "marginTop"], a = n[i === "padding" ? "paddingRight" : "marginRight"];
  return [ja(r), ja(s), ja(a)];
}, ow = function(i) {
  if (i === void 0 && (i = "margin"), typeof window > "u")
    return nw;
  var n = rw(i), r = document.documentElement.clientWidth, s = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, s - r + n[2] - n[0])
  };
}, iw = up(), Nr = "data-scroll-locked", sw = function(i, n, r, s) {
  var a = i.left, u = i.top, f = i.right, h = i.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(U0, ` {
   overflow: hidden `).concat(s, `;
   padding-right: `).concat(h, "px ").concat(s, `;
  }
  body[`).concat(Nr, `] {
    overflow: hidden `).concat(s, `;
    overscroll-behavior: contain;
    `).concat([
    n && "position: relative ".concat(s, ";"),
    r === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(f, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h, "px ").concat(s, `;
    `),
    r === "padding" && "padding-right: ".concat(h, "px ").concat(s, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(hs, ` {
    right: `).concat(h, "px ").concat(s, `;
  }
  
  .`).concat(ps, ` {
    margin-right: `).concat(h, "px ").concat(s, `;
  }
  
  .`).concat(hs, " .").concat(hs, ` {
    right: 0 `).concat(s, `;
  }
  
  .`).concat(ps, " .").concat(ps, ` {
    margin-right: 0 `).concat(s, `;
  }
  
  body[`).concat(Nr, `] {
    `).concat(B0, ": ").concat(h, `px;
  }
`);
}, Uf = function() {
  var i = parseInt(document.body.getAttribute(Nr) || "0", 10);
  return isFinite(i) ? i : 0;
}, lw = function() {
  C.useEffect(function() {
    return document.body.setAttribute(Nr, (Uf() + 1).toString()), function() {
      var i = Uf() - 1;
      i <= 0 ? document.body.removeAttribute(Nr) : document.body.setAttribute(Nr, i.toString());
    };
  }, []);
}, aw = function(i) {
  var n = i.noRelative, r = i.noImportant, s = i.gapMode, a = s === void 0 ? "margin" : s;
  lw();
  var u = C.useMemo(function() {
    return ow(a);
  }, [a]);
  return C.createElement(iw, { styles: sw(u, !n, a, r ? "" : "!important") });
}, Ka = !1;
if (typeof window < "u")
  try {
    var ss = Object.defineProperty({}, "passive", {
      get: function() {
        return Ka = !0, !0;
      }
    });
    window.addEventListener("test", ss, ss), window.removeEventListener("test", ss, ss);
  } catch {
    Ka = !1;
  }
var Pr = Ka ? { passive: !1 } : !1, uw = function(i) {
  return i.tagName === "TEXTAREA";
}, cp = function(i, n) {
  var r = window.getComputedStyle(i);
  return (
    // not-not-scrollable
    r[n] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !uw(i) && r[n] === "visible")
  );
}, cw = function(i) {
  return cp(i, "overflowY");
}, dw = function(i) {
  return cp(i, "overflowX");
}, Bf = function(i, n) {
  var r = n.ownerDocument, s = n;
  do {
    typeof ShadowRoot < "u" && s instanceof ShadowRoot && (s = s.host);
    var a = dp(i, s);
    if (a) {
      var u = fp(i, s), f = u[1], h = u[2];
      if (f > h)
        return !0;
    }
    s = s.parentNode;
  } while (s && s !== r.body);
  return !1;
}, fw = function(i) {
  var n = i.scrollTop, r = i.scrollHeight, s = i.clientHeight;
  return [
    n,
    r,
    s
  ];
}, hw = function(i) {
  var n = i.scrollLeft, r = i.scrollWidth, s = i.clientWidth;
  return [
    n,
    r,
    s
  ];
}, dp = function(i, n) {
  return i === "v" ? cw(n) : dw(n);
}, fp = function(i, n) {
  return i === "v" ? fw(n) : hw(n);
}, pw = function(i, n) {
  return i === "h" && n === "rtl" ? -1 : 1;
}, mw = function(i, n, r, s, a) {
  var u = pw(i, window.getComputedStyle(n).direction), f = u * s, h = r.target, p = n.contains(h), g = !1, v = f > 0, y = 0, _ = 0;
  do {
    var b = fp(i, h), A = b[0], S = b[1], P = b[2], j = S - P - u * A;
    (A || j) && dp(i, h) && (y += j, _ += A), h instanceof ShadowRoot ? h = h.host : h = h.parentNode;
  } while (
    // portaled content
    !p && h !== document.body || // self content
    p && (n.contains(h) || n === h)
  );
  return (v && (a && Math.abs(y) < 1 || !a && f > y) || !v && (a && Math.abs(_) < 1 || !a && -f > _)) && (g = !0), g;
}, ls = function(i) {
  return "changedTouches" in i ? [i.changedTouches[0].clientX, i.changedTouches[0].clientY] : [0, 0];
}, Wf = function(i) {
  return [i.deltaX, i.deltaY];
}, Hf = function(i) {
  return i && "current" in i ? i.current : i;
}, gw = function(i, n) {
  return i[0] === n[0] && i[1] === n[1];
}, vw = function(i) {
  return `
  .block-interactivity-`.concat(i, ` {pointer-events: none;}
  .allow-interactivity-`).concat(i, ` {pointer-events: all;}
`);
}, yw = 0, Tr = [];
function ww(i) {
  var n = C.useRef([]), r = C.useRef([0, 0]), s = C.useRef(), a = C.useState(yw++)[0], u = C.useState(up)[0], f = C.useRef(i);
  C.useEffect(function() {
    f.current = i;
  }, [i]), C.useEffect(function() {
    if (i.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var S = F0([i.lockRef.current], (i.shards || []).map(Hf), !0).filter(Boolean);
      return S.forEach(function(P) {
        return P.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), S.forEach(function(P) {
          return P.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [i.inert, i.lockRef.current, i.shards]);
  var h = C.useCallback(function(S, P) {
    if ("touches" in S && S.touches.length === 2)
      return !f.current.allowPinchZoom;
    var j = ls(S), M = r.current, B = "deltaX" in S ? S.deltaX : M[0] - j[0], $ = "deltaY" in S ? S.deltaY : M[1] - j[1], U, Z = S.target, q = Math.abs(B) > Math.abs($) ? "h" : "v";
    if ("touches" in S && q === "h" && Z.type === "range")
      return !1;
    var oe = Bf(q, Z);
    if (!oe)
      return !0;
    if (oe ? U = q : (U = q === "v" ? "h" : "v", oe = Bf(q, Z)), !oe)
      return !1;
    if (!s.current && "changedTouches" in S && (B || $) && (s.current = U), !U)
      return !0;
    var ge = s.current || U;
    return mw(ge, P, S, ge === "h" ? B : $, !0);
  }, []), p = C.useCallback(function(S) {
    var P = S;
    if (!(!Tr.length || Tr[Tr.length - 1] !== u)) {
      var j = "deltaY" in P ? Wf(P) : ls(P), M = n.current.filter(function(U) {
        return U.name === P.type && (U.target === P.target || P.target === U.shadowParent) && gw(U.delta, j);
      })[0];
      if (M && M.should) {
        P.cancelable && P.preventDefault();
        return;
      }
      if (!M) {
        var B = (f.current.shards || []).map(Hf).filter(Boolean).filter(function(U) {
          return U.contains(P.target);
        }), $ = B.length > 0 ? h(P, B[0]) : !f.current.noIsolation;
        $ && P.cancelable && P.preventDefault();
      }
    }
  }, []), g = C.useCallback(function(S, P, j, M) {
    var B = { name: S, delta: P, target: j, should: M, shadowParent: _w(j) };
    n.current.push(B), setTimeout(function() {
      n.current = n.current.filter(function($) {
        return $ !== B;
      });
    }, 1);
  }, []), v = C.useCallback(function(S) {
    r.current = ls(S), s.current = void 0;
  }, []), y = C.useCallback(function(S) {
    g(S.type, Wf(S), S.target, h(S, i.lockRef.current));
  }, []), _ = C.useCallback(function(S) {
    g(S.type, ls(S), S.target, h(S, i.lockRef.current));
  }, []);
  C.useEffect(function() {
    return Tr.push(u), i.setCallbacks({
      onScrollCapture: y,
      onWheelCapture: y,
      onTouchMoveCapture: _
    }), document.addEventListener("wheel", p, Pr), document.addEventListener("touchmove", p, Pr), document.addEventListener("touchstart", v, Pr), function() {
      Tr = Tr.filter(function(S) {
        return S !== u;
      }), document.removeEventListener("wheel", p, Pr), document.removeEventListener("touchmove", p, Pr), document.removeEventListener("touchstart", v, Pr);
    };
  }, []);
  var b = i.removeScrollBar, A = i.inert;
  return C.createElement(
    C.Fragment,
    null,
    A ? C.createElement(u, { styles: vw(a) }) : null,
    b ? C.createElement(aw, { gapMode: i.gapMode }) : null
  );
}
function _w(i) {
  for (var n = null; i !== null; )
    i instanceof ShadowRoot && (n = i.host, i = i.host), i = i.parentNode;
  return n;
}
const xw = q0(ap, ww);
var hp = C.forwardRef(function(i, n) {
  return C.createElement(ks, Dt({}, i, { ref: n, sideCar: xw }));
});
hp.classNames = ks.classNames;
const kw = hp;
var cu = "Popover", [pp, B1] = Ah(cu, [
  Qh
]), Wo = Qh(), [Sw, jn] = pp(cu), mp = (i) => {
  const {
    __scopePopover: n,
    children: r,
    open: s,
    defaultOpen: a,
    onOpenChange: u,
    modal: f = !1
  } = i, h = Wo(n), p = C.useRef(null), [g, v] = C.useState(!1), [y = !1, _] = L0({
    prop: s,
    defaultProp: a,
    onChange: u
  });
  return /* @__PURE__ */ W.jsx(P0, { ...h, children: /* @__PURE__ */ W.jsx(
    Sw,
    {
      scope: n,
      contentId: _y(),
      triggerRef: p,
      open: y,
      onOpenChange: _,
      onOpenToggle: C.useCallback(() => _((b) => !b), [_]),
      hasCustomAnchor: g,
      onCustomAnchorAdd: C.useCallback(() => v(!0), []),
      onCustomAnchorRemove: C.useCallback(() => v(!1), []),
      modal: f,
      children: r
    }
  ) });
};
mp.displayName = cu;
var gp = "PopoverAnchor", bw = C.forwardRef(
  (i, n) => {
    const { __scopePopover: r, ...s } = i, a = jn(gp, r), u = Wo(r), { onCustomAnchorAdd: f, onCustomAnchorRemove: h } = a;
    return C.useEffect(() => (f(), () => h()), [f, h]), /* @__PURE__ */ W.jsx(rp, { ...u, ...s, ref: n });
  }
);
bw.displayName = gp;
var vp = "PopoverTrigger", yp = C.forwardRef(
  (i, n) => {
    const { __scopePopover: r, ...s } = i, a = jn(vp, r), u = Wo(r), f = An(n, a.triggerRef), h = /* @__PURE__ */ W.jsx(
      At.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": Sp(a.open),
        ...s,
        ref: f,
        onClick: Cn(i.onClick, a.onOpenToggle)
      }
    );
    return a.hasCustomAnchor ? h : /* @__PURE__ */ W.jsx(rp, { asChild: !0, ...u, children: h });
  }
);
yp.displayName = vp;
var du = "PopoverPortal", [Ew, Cw] = pp(du, {
  forceMount: void 0
}), wp = (i) => {
  const { __scopePopover: n, forceMount: r, children: s, container: a } = i, u = jn(du, n);
  return /* @__PURE__ */ W.jsx(Ew, { scope: n, forceMount: r, children: /* @__PURE__ */ W.jsx(uu, { present: r || u.open, children: /* @__PURE__ */ W.jsx(op, { asChild: !0, container: a, children: s }) }) });
};
wp.displayName = du;
var $r = "PopoverContent", _p = C.forwardRef(
  (i, n) => {
    const r = Cw($r, i.__scopePopover), { forceMount: s = r.forceMount, ...a } = i, u = jn($r, i.__scopePopover);
    return /* @__PURE__ */ W.jsx(uu, { present: s || u.open, children: u.modal ? /* @__PURE__ */ W.jsx(Pw, { ...a, ref: n }) : /* @__PURE__ */ W.jsx(Tw, { ...a, ref: n }) });
  }
);
_p.displayName = $r;
var Pw = C.forwardRef(
  (i, n) => {
    const r = jn($r, i.__scopePopover), s = C.useRef(null), a = An(n, s), u = C.useRef(!1);
    return C.useEffect(() => {
      const f = s.current;
      if (f)
        return M0(f);
    }, []), /* @__PURE__ */ W.jsx(kw, { as: ws, allowPinchZoom: !0, children: /* @__PURE__ */ W.jsx(
      xp,
      {
        ...i,
        ref: a,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Cn(i.onCloseAutoFocus, (f) => {
          f.preventDefault(), u.current || r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: Cn(
          i.onPointerDownOutside,
          (f) => {
            const h = f.detail.originalEvent, p = h.button === 0 && h.ctrlKey === !0, g = h.button === 2 || p;
            u.current = g;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Cn(
          i.onFocusOutside,
          (f) => f.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Tw = C.forwardRef(
  (i, n) => {
    const r = jn($r, i.__scopePopover), s = C.useRef(!1), a = C.useRef(!1);
    return /* @__PURE__ */ W.jsx(
      xp,
      {
        ...i,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (u) => {
          i.onCloseAutoFocus?.(u), u.defaultPrevented || (s.current || r.triggerRef.current?.focus(), u.preventDefault()), s.current = !1, a.current = !1;
        },
        onInteractOutside: (u) => {
          i.onInteractOutside?.(u), u.defaultPrevented || (s.current = !0, u.detail.originalEvent.type === "pointerdown" && (a.current = !0));
          const f = u.target;
          r.triggerRef.current?.contains(f) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && a.current && u.preventDefault();
        }
      }
    );
  }
), xp = C.forwardRef(
  (i, n) => {
    const {
      __scopePopover: r,
      trapFocus: s,
      onOpenAutoFocus: a,
      onCloseAutoFocus: u,
      disableOutsidePointerEvents: f,
      onEscapeKeyDown: h,
      onPointerDownOutside: p,
      onFocusOutside: g,
      onInteractOutside: v,
      ...y
    } = i, _ = jn($r, r), b = Wo(r);
    return cy(), /* @__PURE__ */ W.jsx(
      Ih,
      {
        asChild: !0,
        loop: !0,
        trapped: s,
        onMountAutoFocus: a,
        onUnmountAutoFocus: u,
        children: /* @__PURE__ */ W.jsx(
          Nh,
          {
            asChild: !0,
            disableOutsidePointerEvents: f,
            onInteractOutside: v,
            onEscapeKeyDown: h,
            onPointerDownOutside: p,
            onFocusOutside: g,
            onDismiss: () => _.onOpenChange(!1),
            children: /* @__PURE__ */ W.jsx(
              T0,
              {
                "data-state": Sp(_.open),
                role: "dialog",
                id: _.contentId,
                ...b,
                ...y,
                ref: n,
                style: {
                  ...y.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), kp = "PopoverClose", Ow = C.forwardRef(
  (i, n) => {
    const { __scopePopover: r, ...s } = i, a = jn(kp, r);
    return /* @__PURE__ */ W.jsx(
      At.button,
      {
        type: "button",
        ...s,
        ref: n,
        onClick: Cn(i.onClick, () => a.onOpenChange(!1))
      }
    );
  }
);
Ow.displayName = kp;
var Rw = "PopoverArrow", Aw = C.forwardRef(
  (i, n) => {
    const { __scopePopover: r, ...s } = i, a = Wo(r);
    return /* @__PURE__ */ W.jsx(O0, { ...a, ...s, ref: n });
  }
);
Aw.displayName = Rw;
function Sp(i) {
  return i ? "open" : "closed";
}
var jw = mp, Nw = yp, Lw = wp, bp = _p;
const Iw = jw, $w = Nw, Ep = C.forwardRef(({ className: i, align: n = "center", sideOffset: r = 4, ...s }, a) => /* @__PURE__ */ W.jsx(Lw, { children: /* @__PURE__ */ W.jsx(
  bp,
  {
    ref: a,
    align: n,
    sideOffset: r,
    className: Mr(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      i
    ),
    ...s
  }
) }));
Ep.displayName = bp.displayName;
const Vf = `*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.widget{--background: 0 0% 100%;--foreground: 222.2 84% 4.9%;--card: 0 0% 100%;--card-foreground: 222.2 84% 4.9%;--popover: 0 0% 100%;--popover-foreground: 222.2 84% 4.9%;--primary: 222.2 47.4% 11.2%;--primary-foreground: 210 40% 98%;--secondary: 210 40% 96.1%;--secondary-foreground: 222.2 47.4% 11.2%;--muted: 210 40% 96.1%;--muted-foreground: 215.4 16.3% 46.9%;--accent: 210 40% 96.1%;--accent-foreground: 222.2 47.4% 11.2%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 210 40% 98%;--border: 214.3 31.8% 91.4%;--input: 214.3 31.8% 91.4%;--ring: 222.2 84% 4.9%;--radius: .5rem}.dark .widget{--background: 222.2 84% 4.9%;--foreground: 210 40% 98%;--card: 222.2 84% 4.9%;--card-foreground: 210 40% 98%;--popover: 222.2 84% 4.9%;--popover-foreground: 210 40% 98%;--primary: 210 40% 98%;--primary-foreground: 222.2 47.4% 11.2%;--secondary: 217.2 32.6% 17.5%;--secondary-foreground: 210 40% 98%;--muted: 217.2 32.6% 17.5%;--muted-foreground: 215 20.2% 65.1%;--accent: 217.2 32.6% 17.5%;--accent-foreground: 210 40% 98%;--destructive: 0 62.8% 30.6%;--destructive-foreground: 210 40% 98%;--border: 217.2 32.6% 17.5%;--input: 217.2 32.6% 17.5%;--ring: 212.7 26.8% 83.9%}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground))}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.fixed{position:fixed}.bottom-4{bottom:1rem}.right-4{right:1rem}.z-50{z-index:50}.my-4{margin-top:1rem;margin-bottom:1rem}.mr-2{margin-right:.5rem}.mt-4{margin-top:1rem}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-5{height:1.25rem}.h-9{height:2.25rem}.h-\\[1px\\]{height:1px}.h-full{height:100%}.min-h-\\[100px\\]{min-height:100px}.min-h-\\[80px\\]{min-height:80px}.w-10{width:2.5rem}.w-5{width:1.25rem}.w-72{width:18rem}.w-\\[1px\\]{width:1px}.w-full{width:100%}.max-w-md{max-width:28rem}.shrink-0{flex-shrink:0}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.whitespace-nowrap{white-space:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.border{border-width:1px}.border-input{border-color:hsl(var(--input))}.bg-background{background-color:hsl(var(--background))}.bg-border{background-color:hsl(var(--border))}.bg-card{background-color:hsl(var(--card))}.bg-destructive{background-color:hsl(var(--destructive))}.bg-popover{background-color:hsl(var(--popover))}.bg-primary{background-color:hsl(var(--primary))}.bg-secondary{background-color:hsl(var(--secondary))}.fill-muted{fill:hsl(var(--muted))}.fill-primary{fill:hsl(var(--primary))}.stroke-muted-foreground{stroke:hsl(var(--muted-foreground))}.p-4{padding:1rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.leading-none{line-height:1}.text-destructive-foreground{color:hsl(var(--destructive-foreground))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-indigo-600{--tw-text-opacity: 1;color:rgb(79 70 229 / var(--tw-text-opacity))}.text-popover-foreground{color:hsl(var(--popover-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.underline-offset-4{text-underline-offset:4px}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-offset-background{--tw-ring-offset-color: hsl(var(--background))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.file\\:border-0::file-selector-button{border-width:0px}.file\\:bg-transparent::file-selector-button{background-color:transparent}.file\\:text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.file\\:font-medium::file-selector-button{font-weight:500}.placeholder\\:text-muted-foreground::-moz-placeholder{color:hsl(var(--muted-foreground))}.placeholder\\:text-muted-foreground::placeholder{color:hsl(var(--muted-foreground))}.hover\\:scale-105:hover{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive) / .9)}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary) / .9)}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary) / .8)}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color: hsl(var(--ring))}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-70{opacity:.7}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity: 0}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity: 0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale: .95}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale: .95}.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y: -.5rem}.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x: .5rem}.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x: -.5rem}.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y: .5rem}
`, Dw = (i) => {
  let n;
  return i ? n = i : typeof fetch > "u" ? n = (...r) => Promise.resolve().then(() => Br).then(({ default: s }) => s(...r)) : n = fetch, (...r) => n(...r);
};
class fu extends Error {
  constructor(n, r = "FunctionsError", s) {
    super(n), this.name = r, this.context = s;
  }
}
class zw extends fu {
  constructor(n) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", n);
  }
}
class Mw extends fu {
  constructor(n) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", n);
  }
}
class Fw extends fu {
  constructor(n) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", n);
  }
}
var Ga;
(function(i) {
  i.Any = "any", i.ApNortheast1 = "ap-northeast-1", i.ApNortheast2 = "ap-northeast-2", i.ApSouth1 = "ap-south-1", i.ApSoutheast1 = "ap-southeast-1", i.ApSoutheast2 = "ap-southeast-2", i.CaCentral1 = "ca-central-1", i.EuCentral1 = "eu-central-1", i.EuWest1 = "eu-west-1", i.EuWest2 = "eu-west-2", i.EuWest3 = "eu-west-3", i.SaEast1 = "sa-east-1", i.UsEast1 = "us-east-1", i.UsWest1 = "us-west-1", i.UsWest2 = "us-west-2";
})(Ga || (Ga = {}));
var Uw = globalThis && globalThis.__awaiter || function(i, n, r, s) {
  function a(u) {
    return u instanceof r ? u : new r(function(f) {
      f(u);
    });
  }
  return new (r || (r = Promise))(function(u, f) {
    function h(v) {
      try {
        g(s.next(v));
      } catch (y) {
        f(y);
      }
    }
    function p(v) {
      try {
        g(s.throw(v));
      } catch (y) {
        f(y);
      }
    }
    function g(v) {
      v.done ? u(v.value) : a(v.value).then(h, p);
    }
    g((s = s.apply(i, n || [])).next());
  });
};
class Bw {
  constructor(n, { headers: r = {}, customFetch: s, region: a = Ga.Any } = {}) {
    this.url = n, this.headers = r, this.region = a, this.fetch = Dw(s);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   */
  setAuth(n) {
    this.headers.Authorization = `Bearer ${n}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   */
  invoke(n, r = {}) {
    var s;
    return Uw(this, void 0, void 0, function* () {
      try {
        const { headers: a, method: u, body: f } = r;
        let h = {}, { region: p } = r;
        p || (p = this.region), p && p !== "any" && (h["x-region"] = p);
        let g;
        f && (a && !Object.prototype.hasOwnProperty.call(a, "Content-Type") || !a) && (typeof Blob < "u" && f instanceof Blob || f instanceof ArrayBuffer ? (h["Content-Type"] = "application/octet-stream", g = f) : typeof f == "string" ? (h["Content-Type"] = "text/plain", g = f) : typeof FormData < "u" && f instanceof FormData ? g = f : (h["Content-Type"] = "application/json", g = JSON.stringify(f)));
        const v = yield this.fetch(`${this.url}/${n}`, {
          method: u || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, h), this.headers), a),
          body: g
        }).catch((A) => {
          throw new zw(A);
        }), y = v.headers.get("x-relay-error");
        if (y && y === "true")
          throw new Mw(v);
        if (!v.ok)
          throw new Fw(v);
        let _ = ((s = v.headers.get("Content-Type")) !== null && s !== void 0 ? s : "text/plain").split(";")[0].trim(), b;
        return _ === "application/json" ? b = yield v.json() : _ === "application/octet-stream" ? b = yield v.blob() : _ === "text/event-stream" ? b = v : _ === "multipart/form-data" ? b = yield v.formData() : b = yield v.text(), { data: b, error: null };
      } catch (a) {
        return { data: null, error: a };
      }
    });
  }
}
var wt = {}, hu = {}, Ss = {}, Ho = {}, bs = {}, Es = {}, Ww = function() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}, Dr = Ww();
const Hw = Dr.fetch, Cp = Dr.fetch.bind(Dr), Pp = Dr.Headers, Vw = Dr.Request, Kw = Dr.Response, Br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: Pp,
  Request: Vw,
  Response: Kw,
  default: Cp,
  fetch: Hw
}, Symbol.toStringTag, { value: "Module" })), Gw = /* @__PURE__ */ Gg(Br);
var pu = {};
Object.defineProperty(pu, "__esModule", { value: !0 });
class Qw extends Error {
  constructor(n) {
    super(n.message), this.name = "PostgrestError", this.details = n.details, this.hint = n.hint, this.code = n.code;
  }
}
pu.default = Qw;
var Tp = _t && _t.__importDefault || function(i) {
  return i && i.__esModule ? i : { default: i };
};
Object.defineProperty(Es, "__esModule", { value: !0 });
const qw = Tp(Gw), Jw = Tp(pu);
let Yw = class {
  constructor(n) {
    this.shouldThrowOnError = !1, this.method = n.method, this.url = n.url, this.headers = n.headers, this.schema = n.schema, this.body = n.body, this.shouldThrowOnError = n.shouldThrowOnError, this.signal = n.signal, this.isMaybeSingle = n.isMaybeSingle, n.fetch ? this.fetch = n.fetch : typeof fetch > "u" ? this.fetch = qw.default : this.fetch = fetch;
  }
  /**
   * If there's an error with the query, throwOnError will reject the promise by
   * throwing the error instead of returning it as part of a successful response.
   *
   * {@link https://github.com/supabase/supabase-js/issues/92}
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  then(n, r) {
    this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json");
    const s = this.fetch;
    let a = s(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then(async (u) => {
      var f, h, p;
      let g = null, v = null, y = null, _ = u.status, b = u.statusText;
      if (u.ok) {
        if (this.method !== "HEAD") {
          const j = await u.text();
          j === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? v = j : v = JSON.parse(j));
        }
        const S = (f = this.headers.Prefer) === null || f === void 0 ? void 0 : f.match(/count=(exact|planned|estimated)/), P = (h = u.headers.get("content-range")) === null || h === void 0 ? void 0 : h.split("/");
        S && P && P.length > 1 && (y = parseInt(P[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(v) && (v.length > 1 ? (g = {
          // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
          code: "PGRST116",
          details: `Results contain ${v.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, v = null, y = null, _ = 406, b = "Not Acceptable") : v.length === 1 ? v = v[0] : v = null);
      } else {
        const S = await u.text();
        try {
          g = JSON.parse(S), Array.isArray(g) && u.status === 404 && (v = [], g = null, _ = 200, b = "OK");
        } catch {
          u.status === 404 && S === "" ? (_ = 204, b = "No Content") : g = {
            message: S
          };
        }
        if (g && this.isMaybeSingle && (!((p = g?.details) === null || p === void 0) && p.includes("0 rows")) && (g = null, _ = 200, b = "OK"), g && this.shouldThrowOnError)
          throw new Jw.default(g);
      }
      return {
        error: g,
        data: v,
        count: y,
        status: _,
        statusText: b
      };
    });
    return this.shouldThrowOnError || (a = a.catch((u) => {
      var f, h, p;
      return {
        error: {
          message: `${(f = u?.name) !== null && f !== void 0 ? f : "FetchError"}: ${u?.message}`,
          details: `${(h = u?.stack) !== null && h !== void 0 ? h : ""}`,
          hint: "",
          code: `${(p = u?.code) !== null && p !== void 0 ? p : ""}`
        },
        data: null,
        count: null,
        status: 0,
        statusText: ""
      };
    })), a.then(n, r);
  }
};
Es.default = Yw;
var Xw = _t && _t.__importDefault || function(i) {
  return i && i.__esModule ? i : { default: i };
};
Object.defineProperty(bs, "__esModule", { value: !0 });
const Zw = Xw(Es);
let e_ = class extends Zw.default {
  /**
   * Perform a SELECT on the query result.
   *
   * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
   * return modified rows. By calling this method, modified rows are returned in
   * `data`.
   *
   * @param columns - The columns to retrieve, separated by commas
   */
  select(n) {
    let r = !1;
    const s = (n ?? "*").split("").map((a) => /\s/.test(a) && !r ? "" : (a === '"' && (r = !r), a)).join("");
    return this.url.searchParams.set("select", s), this.headers.Prefer && (this.headers.Prefer += ","), this.headers.Prefer += "return=representation", this;
  }
  /**
   * Order the query result by `column`.
   *
   * You can call this method multiple times to order by multiple columns.
   *
   * You can order referenced tables, but it only affects the ordering of the
   * parent table if you use `!inner` in the query.
   *
   * @param column - The column to order by
   * @param options - Named parameters
   * @param options.ascending - If `true`, the result will be in ascending order
   * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
   * `null`s appear last.
   * @param options.referencedTable - Set this to order a referenced table by
   * its columns
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  order(n, { ascending: r = !0, nullsFirst: s, foreignTable: a, referencedTable: u = a } = {}) {
    const f = u ? `${u}.order` : "order", h = this.url.searchParams.get(f);
    return this.url.searchParams.set(f, `${h ? `${h},` : ""}${n}.${r ? "asc" : "desc"}${s === void 0 ? "" : s ? ".nullsfirst" : ".nullslast"}`), this;
  }
  /**
   * Limit the query result by `count`.
   *
   * @param count - The maximum number of rows to return
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  limit(n, { foreignTable: r, referencedTable: s = r } = {}) {
    const a = typeof s > "u" ? "limit" : `${s}.limit`;
    return this.url.searchParams.set(a, `${n}`), this;
  }
  /**
   * Limit the query result by starting at an offset `from` and ending at the offset `to`.
   * Only records within this range are returned.
   * This respects the query order and if there is no order clause the range could behave unexpectedly.
   * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
   * and fourth rows of the query.
   *
   * @param from - The starting index from which to limit the result
   * @param to - The last index to which to limit the result
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  range(n, r, { foreignTable: s, referencedTable: a = s } = {}) {
    const u = typeof a > "u" ? "offset" : `${a}.offset`, f = typeof a > "u" ? "limit" : `${a}.limit`;
    return this.url.searchParams.set(u, `${n}`), this.url.searchParams.set(f, `${r - n + 1}`), this;
  }
  /**
   * Set the AbortSignal for the fetch request.
   *
   * @param signal - The AbortSignal to use for the fetch request
   */
  abortSignal(n) {
    return this.signal = n, this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be one row (e.g. using `.limit(1)`), otherwise this
   * returns an error.
   */
  single() {
    return this.headers.Accept = "application/vnd.pgrst.object+json", this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
   * this returns an error.
   */
  maybeSingle() {
    return this.method === "GET" ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json", this.isMaybeSingle = !0, this;
  }
  /**
   * Return `data` as a string in CSV format.
   */
  csv() {
    return this.headers.Accept = "text/csv", this;
  }
  /**
   * Return `data` as an object in [GeoJSON](https://geojson.org) format.
   */
  geojson() {
    return this.headers.Accept = "application/geo+json", this;
  }
  /**
   * Return `data` as the EXPLAIN plan for the query.
   *
   * You need to enable the
   * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
   * setting before using this method.
   *
   * @param options - Named parameters
   *
   * @param options.analyze - If `true`, the query will be executed and the
   * actual run time will be returned
   *
   * @param options.verbose - If `true`, the query identifier will be returned
   * and `data` will include the output columns of the query
   *
   * @param options.settings - If `true`, include information on configuration
   * parameters that affect query planning
   *
   * @param options.buffers - If `true`, include information on buffer usage
   *
   * @param options.wal - If `true`, include information on WAL record generation
   *
   * @param options.format - The format of the output, can be `"text"` (default)
   * or `"json"`
   */
  explain({ analyze: n = !1, verbose: r = !1, settings: s = !1, buffers: a = !1, wal: u = !1, format: f = "text" } = {}) {
    var h;
    const p = [
      n ? "analyze" : null,
      r ? "verbose" : null,
      s ? "settings" : null,
      a ? "buffers" : null,
      u ? "wal" : null
    ].filter(Boolean).join("|"), g = (h = this.headers.Accept) !== null && h !== void 0 ? h : "application/json";
    return this.headers.Accept = `application/vnd.pgrst.plan+${f}; for="${g}"; options=${p};`, f === "json" ? this : this;
  }
  /**
   * Rollback the query.
   *
   * `data` will still be returned, but the query is not committed.
   */
  rollback() {
    var n;
    return ((n = this.headers.Prefer) !== null && n !== void 0 ? n : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this;
  }
  /**
   * Override the type of the returned `data`.
   *
   * @typeParam NewResult - The new result type to override with
   */
  returns() {
    return this;
  }
};
bs.default = e_;
var t_ = _t && _t.__importDefault || function(i) {
  return i && i.__esModule ? i : { default: i };
};
Object.defineProperty(Ho, "__esModule", { value: !0 });
const n_ = t_(bs);
let r_ = class extends n_.default {
  /**
   * Match only rows where `column` is equal to `value`.
   *
   * To check if the value of `column` is NULL, you should use `.is()` instead.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  eq(n, r) {
    return this.url.searchParams.append(n, `eq.${r}`), this;
  }
  /**
   * Match only rows where `column` is not equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  neq(n, r) {
    return this.url.searchParams.append(n, `neq.${r}`), this;
  }
  /**
   * Match only rows where `column` is greater than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gt(n, r) {
    return this.url.searchParams.append(n, `gt.${r}`), this;
  }
  /**
   * Match only rows where `column` is greater than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gte(n, r) {
    return this.url.searchParams.append(n, `gte.${r}`), this;
  }
  /**
   * Match only rows where `column` is less than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lt(n, r) {
    return this.url.searchParams.append(n, `lt.${r}`), this;
  }
  /**
   * Match only rows where `column` is less than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lte(n, r) {
    return this.url.searchParams.append(n, `lte.${r}`), this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-sensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  like(n, r) {
    return this.url.searchParams.append(n, `like.${r}`), this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAllOf(n, r) {
    return this.url.searchParams.append(n, `like(all).{${r.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAnyOf(n, r) {
    return this.url.searchParams.append(n, `like(any).{${r.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-insensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  ilike(n, r) {
    return this.url.searchParams.append(n, `ilike.${r}`), this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAllOf(n, r) {
    return this.url.searchParams.append(n, `ilike(all).{${r.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAnyOf(n, r) {
    return this.url.searchParams.append(n, `ilike(any).{${r.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` IS `value`.
   *
   * For non-boolean columns, this is only relevant for checking if the value of
   * `column` is NULL by setting `value` to `null`.
   *
   * For boolean columns, you can also set `value` to `true` or `false` and it
   * will behave the same way as `.eq()`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  is(n, r) {
    return this.url.searchParams.append(n, `is.${r}`), this;
  }
  /**
   * Match only rows where `column` is included in the `values` array.
   *
   * @param column - The column to filter on
   * @param values - The values array to filter with
   */
  in(n, r) {
    const s = Array.from(new Set(r)).map((a) => typeof a == "string" && new RegExp("[,()]").test(a) ? `"${a}"` : `${a}`).join(",");
    return this.url.searchParams.append(n, `in.(${s})`), this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * `column` contains every element appearing in `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  contains(n, r) {
    return typeof r == "string" ? this.url.searchParams.append(n, `cs.${r}`) : Array.isArray(r) ? this.url.searchParams.append(n, `cs.{${r.join(",")}}`) : this.url.searchParams.append(n, `cs.${JSON.stringify(r)}`), this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * every element appearing in `column` is contained by `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  containedBy(n, r) {
    return typeof r == "string" ? this.url.searchParams.append(n, `cd.${r}`) : Array.isArray(r) ? this.url.searchParams.append(n, `cd.{${r.join(",")}}`) : this.url.searchParams.append(n, `cd.${JSON.stringify(r)}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is greater than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGt(n, r) {
    return this.url.searchParams.append(n, `sr.${r}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or greater than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGte(n, r) {
    return this.url.searchParams.append(n, `nxl.${r}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is less than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLt(n, r) {
    return this.url.searchParams.append(n, `sl.${r}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or less than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLte(n, r) {
    return this.url.searchParams.append(n, `nxr.${r}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where `column` is
   * mutually exclusive to `range` and there can be no element between the two
   * ranges.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeAdjacent(n, r) {
    return this.url.searchParams.append(n, `adj.${r}`), this;
  }
  /**
   * Only relevant for array and range columns. Match only rows where
   * `column` and `value` have an element in common.
   *
   * @param column - The array or range column to filter on
   * @param value - The array or range value to filter with
   */
  overlaps(n, r) {
    return typeof r == "string" ? this.url.searchParams.append(n, `ov.${r}`) : this.url.searchParams.append(n, `ov.{${r.join(",")}}`), this;
  }
  /**
   * Only relevant for text and tsvector columns. Match only rows where
   * `column` matches the query string in `query`.
   *
   * @param column - The text or tsvector column to filter on
   * @param query - The query text to match with
   * @param options - Named parameters
   * @param options.config - The text search configuration to use
   * @param options.type - Change how the `query` text is interpreted
   */
  textSearch(n, r, { config: s, type: a } = {}) {
    let u = "";
    a === "plain" ? u = "pl" : a === "phrase" ? u = "ph" : a === "websearch" && (u = "w");
    const f = s === void 0 ? "" : `(${s})`;
    return this.url.searchParams.append(n, `${u}fts${f}.${r}`), this;
  }
  /**
   * Match only rows where each column in `query` keys is equal to its
   * associated value. Shorthand for multiple `.eq()`s.
   *
   * @param query - The object to filter with, with column names as keys mapped
   * to their filter values
   */
  match(n) {
    return Object.entries(n).forEach(([r, s]) => {
      this.url.searchParams.append(r, `eq.${s}`);
    }), this;
  }
  /**
   * Match only rows which doesn't satisfy the filter.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to be negated to filter with, following
   * PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  not(n, r, s) {
    return this.url.searchParams.append(n, `not.${r}.${s}`), this;
  }
  /**
   * Match only rows which satisfy at least one of the filters.
   *
   * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure it's properly sanitized.
   *
   * It's currently not possible to do an `.or()` filter across multiple tables.
   *
   * @param filters - The filters to use, following PostgREST syntax
   * @param options - Named parameters
   * @param options.referencedTable - Set this to filter on referenced tables
   * instead of the parent table
   * @param options.foreignTable - Deprecated, use `referencedTable` instead
   */
  or(n, { foreignTable: r, referencedTable: s = r } = {}) {
    const a = s ? `${s}.or` : "or";
    return this.url.searchParams.append(a, `(${n})`), this;
  }
  /**
   * Match only rows which satisfy the filter. This is an escape hatch - you
   * should use the specific filter methods wherever possible.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to filter with, following PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  filter(n, r, s) {
    return this.url.searchParams.append(n, `${r}.${s}`), this;
  }
};
Ho.default = r_;
var o_ = _t && _t.__importDefault || function(i) {
  return i && i.__esModule ? i : { default: i };
};
Object.defineProperty(Ss, "__esModule", { value: !0 });
const No = o_(Ho);
let i_ = class {
  constructor(n, { headers: r = {}, schema: s, fetch: a }) {
    this.url = n, this.headers = r, this.schema = s, this.fetch = a;
  }
  /**
   * Perform a SELECT query on the table or view.
   *
   * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
   *
   * @param options - Named parameters
   *
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   *
   * @param options.count - Count algorithm to use to count rows in the table or view.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  select(n, { head: r = !1, count: s } = {}) {
    const a = r ? "HEAD" : "GET";
    let u = !1;
    const f = (n ?? "*").split("").map((h) => /\s/.test(h) && !u ? "" : (h === '"' && (u = !u), h)).join("");
    return this.url.searchParams.set("select", f), s && (this.headers.Prefer = `count=${s}`), new No.default({
      method: a,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an INSERT into the table or view.
   *
   * By default, inserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to insert. Pass an object to insert a single row
   * or an array to insert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count inserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. Only applies for bulk
   * inserts.
   */
  insert(n, { count: r, defaultToNull: s = !0 } = {}) {
    const a = "POST", u = [];
    if (this.headers.Prefer && u.push(this.headers.Prefer), r && u.push(`count=${r}`), s || u.push("missing=default"), this.headers.Prefer = u.join(","), Array.isArray(n)) {
      const f = n.reduce((h, p) => h.concat(Object.keys(p)), []);
      if (f.length > 0) {
        const h = [...new Set(f)].map((p) => `"${p}"`);
        this.url.searchParams.set("columns", h.join(","));
      }
    }
    return new No.default({
      method: a,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: n,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an UPSERT on the table or view. Depending on the column(s) passed
   * to `onConflict`, `.upsert()` allows you to perform the equivalent of
   * `.insert()` if a row with the corresponding `onConflict` columns doesn't
   * exist, or if it does exist, perform an alternative action depending on
   * `ignoreDuplicates`.
   *
   * By default, upserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to upsert with. Pass an object to upsert a
   * single row or an array to upsert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
   * duplicate rows are determined. Two rows are duplicates if all the
   * `onConflict` columns are equal.
   *
   * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
   * `false`, duplicate rows are merged with existing rows.
   *
   * @param options.count - Count algorithm to use to count upserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. This only applies when
   * inserting new rows, not when merging with existing rows under
   * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
   */
  upsert(n, { onConflict: r, ignoreDuplicates: s = !1, count: a, defaultToNull: u = !0 } = {}) {
    const f = "POST", h = [`resolution=${s ? "ignore" : "merge"}-duplicates`];
    if (r !== void 0 && this.url.searchParams.set("on_conflict", r), this.headers.Prefer && h.push(this.headers.Prefer), a && h.push(`count=${a}`), u || h.push("missing=default"), this.headers.Prefer = h.join(","), Array.isArray(n)) {
      const p = n.reduce((g, v) => g.concat(Object.keys(v)), []);
      if (p.length > 0) {
        const g = [...new Set(p)].map((v) => `"${v}"`);
        this.url.searchParams.set("columns", g.join(","));
      }
    }
    return new No.default({
      method: f,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: n,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an UPDATE on the table or view.
   *
   * By default, updated rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param values - The values to update with
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count updated rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  update(n, { count: r } = {}) {
    const s = "PATCH", a = [];
    return this.headers.Prefer && a.push(this.headers.Prefer), r && a.push(`count=${r}`), this.headers.Prefer = a.join(","), new No.default({
      method: s,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: n,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform a DELETE on the table or view.
   *
   * By default, deleted rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count deleted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  delete({ count: n } = {}) {
    const r = "DELETE", s = [];
    return n && s.push(`count=${n}`), this.headers.Prefer && s.unshift(this.headers.Prefer), this.headers.Prefer = s.join(","), new No.default({
      method: r,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
};
Ss.default = i_;
var Cs = {}, Ps = {};
Object.defineProperty(Ps, "__esModule", { value: !0 });
Ps.version = void 0;
Ps.version = "0.0.0-automated";
Object.defineProperty(Cs, "__esModule", { value: !0 });
Cs.DEFAULT_HEADERS = void 0;
const s_ = Ps;
Cs.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${s_.version}` };
var Op = _t && _t.__importDefault || function(i) {
  return i && i.__esModule ? i : { default: i };
};
Object.defineProperty(hu, "__esModule", { value: !0 });
const l_ = Op(Ss), a_ = Op(Ho), u_ = Cs;
let c_ = class Rp {
  // TODO: Add back shouldThrowOnError once we figure out the typings
  /**
   * Creates a PostgREST client.
   *
   * @param url - URL of the PostgREST endpoint
   * @param options - Named parameters
   * @param options.headers - Custom headers
   * @param options.schema - Postgres schema to switch to
   * @param options.fetch - Custom fetch
   */
  constructor(n, { headers: r = {}, schema: s, fetch: a } = {}) {
    this.url = n, this.headers = Object.assign(Object.assign({}, u_.DEFAULT_HEADERS), r), this.schemaName = s, this.fetch = a;
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(n) {
    const r = new URL(`${this.url}/${n}`);
    return new l_.default(r, {
      headers: Object.assign({}, this.headers),
      schema: this.schemaName,
      fetch: this.fetch
    });
  }
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(n) {
    return new Rp(this.url, {
      headers: this.headers,
      schema: n,
      fetch: this.fetch
    });
  }
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(n, r = {}, { head: s = !1, get: a = !1, count: u } = {}) {
    let f;
    const h = new URL(`${this.url}/rpc/${n}`);
    let p;
    s || a ? (f = s ? "HEAD" : "GET", Object.entries(r).filter(([v, y]) => y !== void 0).map(([v, y]) => [v, Array.isArray(y) ? `{${y.join(",")}}` : `${y}`]).forEach(([v, y]) => {
      h.searchParams.append(v, y);
    })) : (f = "POST", p = r);
    const g = Object.assign({}, this.headers);
    return u && (g.Prefer = `count=${u}`), new a_.default({
      method: f,
      url: h,
      headers: g,
      schema: this.schemaName,
      body: p,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
};
hu.default = c_;
var Vo = _t && _t.__importDefault || function(i) {
  return i && i.__esModule ? i : { default: i };
};
Object.defineProperty(wt, "__esModule", { value: !0 });
wt.PostgrestBuilder = wt.PostgrestTransformBuilder = wt.PostgrestFilterBuilder = wt.PostgrestQueryBuilder = wt.PostgrestClient = void 0;
const Ap = Vo(hu);
wt.PostgrestClient = Ap.default;
const jp = Vo(Ss);
wt.PostgrestQueryBuilder = jp.default;
const Np = Vo(Ho);
wt.PostgrestFilterBuilder = Np.default;
const Lp = Vo(bs);
wt.PostgrestTransformBuilder = Lp.default;
const Ip = Vo(Es);
wt.PostgrestBuilder = Ip.default;
var d_ = wt.default = {
  PostgrestClient: Ap.default,
  PostgrestQueryBuilder: jp.default,
  PostgrestFilterBuilder: Np.default,
  PostgrestTransformBuilder: Lp.default,
  PostgrestBuilder: Ip.default
};
const {
  PostgrestClient: f_,
  PostgrestQueryBuilder: G1,
  PostgrestFilterBuilder: Q1,
  PostgrestTransformBuilder: q1,
  PostgrestBuilder: J1
} = d_, h_ = "2.10.2", p_ = { "X-Client-Info": `realtime-js/${h_}` }, m_ = "1.0.0", $p = 1e4, g_ = 1e3;
var Lr;
(function(i) {
  i[i.connecting = 0] = "connecting", i[i.open = 1] = "open", i[i.closing = 2] = "closing", i[i.closed = 3] = "closed";
})(Lr || (Lr = {}));
var ut;
(function(i) {
  i.closed = "closed", i.errored = "errored", i.joined = "joined", i.joining = "joining", i.leaving = "leaving";
})(ut || (ut = {}));
var Ot;
(function(i) {
  i.close = "phx_close", i.error = "phx_error", i.join = "phx_join", i.reply = "phx_reply", i.leave = "phx_leave", i.access_token = "access_token";
})(Ot || (Ot = {}));
var Qa;
(function(i) {
  i.websocket = "websocket";
})(Qa || (Qa = {}));
var qn;
(function(i) {
  i.Connecting = "connecting", i.Open = "open", i.Closing = "closing", i.Closed = "closed";
})(qn || (qn = {}));
class v_ {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(n, r) {
    return n.constructor === ArrayBuffer ? r(this._binaryDecode(n)) : r(typeof n == "string" ? JSON.parse(n) : {});
  }
  _binaryDecode(n) {
    const r = new DataView(n), s = new TextDecoder();
    return this._decodeBroadcast(n, r, s);
  }
  _decodeBroadcast(n, r, s) {
    const a = r.getUint8(1), u = r.getUint8(2);
    let f = this.HEADER_LENGTH + 2;
    const h = s.decode(n.slice(f, f + a));
    f = f + a;
    const p = s.decode(n.slice(f, f + u));
    f = f + u;
    const g = JSON.parse(s.decode(n.slice(f, n.byteLength)));
    return { ref: null, topic: h, event: p, payload: g };
  }
}
class Dp {
  constructor(n, r) {
    this.callback = n, this.timerCalc = r, this.timer = void 0, this.tries = 0, this.callback = n, this.timerCalc = r;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer);
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var Pe;
(function(i) {
  i.abstime = "abstime", i.bool = "bool", i.date = "date", i.daterange = "daterange", i.float4 = "float4", i.float8 = "float8", i.int2 = "int2", i.int4 = "int4", i.int4range = "int4range", i.int8 = "int8", i.int8range = "int8range", i.json = "json", i.jsonb = "jsonb", i.money = "money", i.numeric = "numeric", i.oid = "oid", i.reltime = "reltime", i.text = "text", i.time = "time", i.timestamp = "timestamp", i.timestamptz = "timestamptz", i.timetz = "timetz", i.tsrange = "tsrange", i.tstzrange = "tstzrange";
})(Pe || (Pe = {}));
const Kf = (i, n, r = {}) => {
  var s;
  const a = (s = r.skipTypes) !== null && s !== void 0 ? s : [];
  return Object.keys(n).reduce((u, f) => (u[f] = y_(f, i, n, a), u), {});
}, y_ = (i, n, r, s) => {
  const a = n.find((h) => h.name === i), u = a?.type, f = r[i];
  return u && !s.includes(u) ? zp(u, f) : qa(f);
}, zp = (i, n) => {
  if (i.charAt(0) === "_") {
    const r = i.slice(1, i.length);
    return k_(n, r);
  }
  switch (i) {
    case Pe.bool:
      return w_(n);
    case Pe.float4:
    case Pe.float8:
    case Pe.int2:
    case Pe.int4:
    case Pe.int8:
    case Pe.numeric:
    case Pe.oid:
      return __(n);
    case Pe.json:
    case Pe.jsonb:
      return x_(n);
    case Pe.timestamp:
      return S_(n);
    case Pe.abstime:
    case Pe.date:
    case Pe.daterange:
    case Pe.int4range:
    case Pe.int8range:
    case Pe.money:
    case Pe.reltime:
    case Pe.text:
    case Pe.time:
    case Pe.timestamptz:
    case Pe.timetz:
    case Pe.tsrange:
    case Pe.tstzrange:
      return qa(n);
    default:
      return qa(n);
  }
}, qa = (i) => i, w_ = (i) => {
  switch (i) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return i;
  }
}, __ = (i) => {
  if (typeof i == "string") {
    const n = parseFloat(i);
    if (!Number.isNaN(n))
      return n;
  }
  return i;
}, x_ = (i) => {
  if (typeof i == "string")
    try {
      return JSON.parse(i);
    } catch (n) {
      return console.log(`JSON parse error: ${n}`), i;
    }
  return i;
}, k_ = (i, n) => {
  if (typeof i != "string")
    return i;
  const r = i.length - 1, s = i[r];
  if (i[0] === "{" && s === "}") {
    let u;
    const f = i.slice(1, r);
    try {
      u = JSON.parse("[" + f + "]");
    } catch {
      u = f ? f.split(",") : [];
    }
    return u.map((h) => zp(n, h));
  }
  return i;
}, S_ = (i) => typeof i == "string" ? i.replace(" ", "T") : i, Mp = (i) => {
  let n = i;
  return n = n.replace(/^ws/i, "http"), n = n.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), n.replace(/\/+$/, "");
};
class Na {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(n, r, s = {}, a = $p) {
    this.channel = n, this.event = r, this.payload = s, this.timeout = a, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(n) {
    this.timeout = n, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(n) {
    this.payload = Object.assign(Object.assign({}, this.payload), n);
  }
  receive(n, r) {
    var s;
    return this._hasReceived(n) && r((s = this.receivedResp) === null || s === void 0 ? void 0 : s.response), this.recHooks.push({ status: n, callback: r }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const n = (r) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = r, this._matchReceive(r);
    };
    this.channel._on(this.refEvent, {}, n), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(n, r) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: n, response: r });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: n, response: r }) {
    this.recHooks.filter((s) => s.status === n).forEach((s) => s.callback(r));
  }
  _hasReceived(n) {
    return this.receivedResp && this.receivedResp.status === n;
  }
}
var Gf;
(function(i) {
  i.SYNC = "sync", i.JOIN = "join", i.LEAVE = "leave";
})(Gf || (Gf = {}));
class $o {
  /**
   * Initializes the Presence.
   *
   * @param channel - The RealtimeChannel
   * @param opts - The options,
   *        for example `{events: {state: 'state', diff: 'diff'}}`
   */
  constructor(n, r) {
    this.channel = n, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const s = r?.events || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(s.state, {}, (a) => {
      const { onJoin: u, onLeave: f, onSync: h } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = $o.syncState(this.state, a, u, f), this.pendingDiffs.forEach((p) => {
        this.state = $o.syncDiff(this.state, p, u, f);
      }), this.pendingDiffs = [], h();
    }), this.channel._on(s.diff, {}, (a) => {
      const { onJoin: u, onLeave: f, onSync: h } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(a) : (this.state = $o.syncDiff(this.state, a, u, f), h());
    }), this.onJoin((a, u, f) => {
      this.channel._trigger("presence", {
        event: "join",
        key: a,
        currentPresences: u,
        newPresences: f
      });
    }), this.onLeave((a, u, f) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: a,
        currentPresences: u,
        leftPresences: f
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(n, r, s, a) {
    const u = this.cloneDeep(n), f = this.transformState(r), h = {}, p = {};
    return this.map(u, (g, v) => {
      f[g] || (p[g] = v);
    }), this.map(f, (g, v) => {
      const y = u[g];
      if (y) {
        const _ = v.map((P) => P.presence_ref), b = y.map((P) => P.presence_ref), A = v.filter((P) => b.indexOf(P.presence_ref) < 0), S = y.filter((P) => _.indexOf(P.presence_ref) < 0);
        A.length > 0 && (h[g] = A), S.length > 0 && (p[g] = S);
      } else
        h[g] = v;
    }), this.syncDiff(u, { joins: h, leaves: p }, s, a);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(n, r, s, a) {
    const { joins: u, leaves: f } = {
      joins: this.transformState(r.joins),
      leaves: this.transformState(r.leaves)
    };
    return s || (s = () => {
    }), a || (a = () => {
    }), this.map(u, (h, p) => {
      var g;
      const v = (g = n[h]) !== null && g !== void 0 ? g : [];
      if (n[h] = this.cloneDeep(p), v.length > 0) {
        const y = n[h].map((b) => b.presence_ref), _ = v.filter((b) => y.indexOf(b.presence_ref) < 0);
        n[h].unshift(..._);
      }
      s(h, v, p);
    }), this.map(f, (h, p) => {
      let g = n[h];
      if (!g)
        return;
      const v = p.map((y) => y.presence_ref);
      g = g.filter((y) => v.indexOf(y.presence_ref) < 0), n[h] = g, a(h, g, p), g.length === 0 && delete n[h];
    }), n;
  }
  /** @internal */
  static map(n, r) {
    return Object.getOwnPropertyNames(n).map((s) => r(s, n[s]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(n) {
    return n = this.cloneDeep(n), Object.getOwnPropertyNames(n).reduce((r, s) => {
      const a = n[s];
      return "metas" in a ? r[s] = a.metas.map((u) => (u.presence_ref = u.phx_ref, delete u.phx_ref, delete u.phx_ref_prev, u)) : r[s] = a, r;
    }, {});
  }
  /** @internal */
  static cloneDeep(n) {
    return JSON.parse(JSON.stringify(n));
  }
  /** @internal */
  onJoin(n) {
    this.caller.onJoin = n;
  }
  /** @internal */
  onLeave(n) {
    this.caller.onLeave = n;
  }
  /** @internal */
  onSync(n) {
    this.caller.onSync = n;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var Qf;
(function(i) {
  i.ALL = "*", i.INSERT = "INSERT", i.UPDATE = "UPDATE", i.DELETE = "DELETE";
})(Qf || (Qf = {}));
var qf;
(function(i) {
  i.BROADCAST = "broadcast", i.PRESENCE = "presence", i.POSTGRES_CHANGES = "postgres_changes";
})(qf || (qf = {}));
var Jf;
(function(i) {
  i.SUBSCRIBED = "SUBSCRIBED", i.TIMED_OUT = "TIMED_OUT", i.CLOSED = "CLOSED", i.CHANNEL_ERROR = "CHANNEL_ERROR";
})(Jf || (Jf = {}));
class mu {
  constructor(n, r = { config: {} }, s) {
    this.topic = n, this.params = r, this.socket = s, this.bindings = {}, this.state = ut.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = n.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "" },
      private: !1
    }, r.config), this.timeout = this.socket.timeout, this.joinPush = new Na(this, Ot.join, this.params, this.timeout), this.rejoinTimer = new Dp(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = ut.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((a) => a.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = ut.closed, this.socket._remove(this);
    }), this._onError((a) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, a), this.state = ut.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = ut.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(Ot.reply, {}, (a, u) => {
      this._trigger(this._replyEventName(u), a);
    }), this.presence = new $o(this), this.broadcastEndpointURL = Mp(this.socket.endPoint) + "/api/broadcast";
  }
  /** Subscribe registers your client with the server */
  subscribe(n, r = this.timeout) {
    var s, a;
    if (this.socket.isConnected() || this.socket.connect(), this.joinedOnce)
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const { config: { broadcast: u, presence: f, private: h } } = this.params;
      this._onError((v) => n && n("CHANNEL_ERROR", v)), this._onClose(() => n && n("CLOSED"));
      const p = {}, g = {
        broadcast: u,
        presence: f,
        postgres_changes: (a = (s = this.bindings.postgres_changes) === null || s === void 0 ? void 0 : s.map((v) => v.filter)) !== null && a !== void 0 ? a : [],
        private: h
      };
      this.socket.accessToken && (p.access_token = this.socket.accessToken), this.updateJoinPayload(Object.assign({ config: g }, p)), this.joinedOnce = !0, this._rejoin(r), this.joinPush.receive("ok", ({ postgres_changes: v }) => {
        var y;
        if (this.socket.accessToken && this.socket.setAuth(this.socket.accessToken), v === void 0) {
          n && n("SUBSCRIBED");
          return;
        } else {
          const _ = this.bindings.postgres_changes, b = (y = _?.length) !== null && y !== void 0 ? y : 0, A = [];
          for (let S = 0; S < b; S++) {
            const P = _[S], { filter: { event: j, schema: M, table: B, filter: $ } } = P, U = v && v[S];
            if (U && U.event === j && U.schema === M && U.table === B && U.filter === $)
              A.push(Object.assign(Object.assign({}, P), { id: U.id }));
            else {
              this.unsubscribe(), n && n("CHANNEL_ERROR", new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = A, n && n("SUBSCRIBED");
          return;
        }
      }).receive("error", (v) => {
        n && n("CHANNEL_ERROR", new Error(JSON.stringify(Object.values(v).join(", ") || "error")));
      }).receive("timeout", () => {
        n && n("TIMED_OUT");
      });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(n, r = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: n
    }, r.timeout || this.timeout);
  }
  async untrack(n = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, n);
  }
  on(n, r, s) {
    return this._on(n, r, s);
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(n, r = {}) {
    var s, a;
    if (!this._canPush() && n.type === "broadcast") {
      const { event: u, payload: f } = n, h = {
        method: "POST",
        headers: {
          Authorization: this.socket.accessToken ? `Bearer ${this.socket.accessToken}` : "",
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            { topic: this.subTopic, event: u, payload: f }
          ]
        })
      };
      try {
        const p = await this._fetchWithTimeout(this.broadcastEndpointURL, h, (s = r.timeout) !== null && s !== void 0 ? s : this.timeout);
        return await ((a = p.body) === null || a === void 0 ? void 0 : a.cancel()), p.ok ? "ok" : "error";
      } catch (p) {
        return p.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((u) => {
        var f, h, p;
        const g = this._push(n.type, n, r.timeout || this.timeout);
        n.type === "broadcast" && !(!((p = (h = (f = this.params) === null || f === void 0 ? void 0 : f.config) === null || h === void 0 ? void 0 : h.broadcast) === null || p === void 0) && p.ack) && u("ok"), g.receive("ok", () => u("ok")), g.receive("error", () => u("error")), g.receive("timeout", () => u("timed out"));
      });
  }
  updateJoinPayload(n) {
    this.joinPush.updatePayload(n);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(n = this.timeout) {
    this.state = ut.leaving;
    const r = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(Ot.close, "leave", this._joinRef());
    };
    return this.rejoinTimer.reset(), this.joinPush.destroy(), new Promise((s) => {
      const a = new Na(this, Ot.leave, {}, n);
      a.receive("ok", () => {
        r(), s("ok");
      }).receive("timeout", () => {
        r(), s("timed out");
      }).receive("error", () => {
        s("error");
      }), a.send(), this._canPush() || a.trigger("ok", {});
    });
  }
  /** @internal */
  async _fetchWithTimeout(n, r, s) {
    const a = new AbortController(), u = setTimeout(() => a.abort(), s), f = await this.socket.fetch(n, Object.assign(Object.assign({}, r), { signal: a.signal }));
    return clearTimeout(u), f;
  }
  /** @internal */
  _push(n, r, s = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${n}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let a = new Na(this, n, r, s);
    return this._canPush() ? a.send() : (a.startTimeout(), this.pushBuffer.push(a)), a;
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(n, r, s) {
    return r;
  }
  /** @internal */
  _isMember(n) {
    return this.topic === n;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(n, r, s) {
    var a, u;
    const f = n.toLocaleLowerCase(), { close: h, error: p, leave: g, join: v } = Ot;
    if (s && [h, p, g, v].indexOf(f) >= 0 && s !== this._joinRef())
      return;
    let _ = this._onMessage(f, r, s);
    if (r && !_)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(f) ? (a = this.bindings.postgres_changes) === null || a === void 0 || a.filter((b) => {
      var A, S, P;
      return ((A = b.filter) === null || A === void 0 ? void 0 : A.event) === "*" || ((P = (S = b.filter) === null || S === void 0 ? void 0 : S.event) === null || P === void 0 ? void 0 : P.toLocaleLowerCase()) === f;
    }).map((b) => b.callback(_, s)) : (u = this.bindings[f]) === null || u === void 0 || u.filter((b) => {
      var A, S, P, j, M, B;
      if (["broadcast", "presence", "postgres_changes"].includes(f))
        if ("id" in b) {
          const $ = b.id, U = (A = b.filter) === null || A === void 0 ? void 0 : A.event;
          return $ && ((S = r.ids) === null || S === void 0 ? void 0 : S.includes($)) && (U === "*" || U?.toLocaleLowerCase() === ((P = r.data) === null || P === void 0 ? void 0 : P.type.toLocaleLowerCase()));
        } else {
          const $ = (M = (j = b?.filter) === null || j === void 0 ? void 0 : j.event) === null || M === void 0 ? void 0 : M.toLocaleLowerCase();
          return $ === "*" || $ === ((B = r?.event) === null || B === void 0 ? void 0 : B.toLocaleLowerCase());
        }
      else
        return b.type.toLocaleLowerCase() === f;
    }).map((b) => {
      if (typeof _ == "object" && "ids" in _) {
        const A = _.data, { schema: S, table: P, commit_timestamp: j, type: M, errors: B } = A;
        _ = Object.assign(Object.assign({}, {
          schema: S,
          table: P,
          commit_timestamp: j,
          eventType: M,
          new: {},
          old: {},
          errors: B
        }), this._getPayloadRecords(A));
      }
      b.callback(_, s);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === ut.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === ut.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === ut.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === ut.leaving;
  }
  /** @internal */
  _replyEventName(n) {
    return `chan_reply_${n}`;
  }
  /** @internal */
  _on(n, r, s) {
    const a = n.toLocaleLowerCase(), u = {
      type: a,
      filter: r,
      callback: s
    };
    return this.bindings[a] ? this.bindings[a].push(u) : this.bindings[a] = [u], this;
  }
  /** @internal */
  _off(n, r) {
    const s = n.toLocaleLowerCase();
    return this.bindings[s] = this.bindings[s].filter((a) => {
      var u;
      return !(((u = a.type) === null || u === void 0 ? void 0 : u.toLocaleLowerCase()) === s && mu.isEqual(a.filter, r));
    }), this;
  }
  /** @internal */
  static isEqual(n, r) {
    if (Object.keys(n).length !== Object.keys(r).length)
      return !1;
    for (const s in n)
      if (n[s] !== r[s])
        return !1;
    return !0;
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(n) {
    this._on(Ot.close, {}, n);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(n) {
    this._on(Ot.error, {}, (r) => n(r));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(n = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = ut.joining, this.joinPush.resend(n));
  }
  /** @internal */
  _getPayloadRecords(n) {
    const r = {
      new: {},
      old: {}
    };
    return (n.type === "INSERT" || n.type === "UPDATE") && (r.new = Kf(n.columns, n.record)), (n.type === "UPDATE" || n.type === "DELETE") && (r.old = Kf(n.columns, n.old_record)), r;
  }
}
const b_ = () => {
}, E_ = typeof WebSocket < "u";
class C_ {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket.
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers The optional headers to pass when connecting.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   */
  constructor(n, r) {
    var s;
    this.accessToken = null, this.apiKey = null, this.channels = [], this.endPoint = "", this.httpEndpoint = "", this.headers = p_, this.params = {}, this.timeout = $p, this.heartbeatIntervalMs = 3e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = b_, this.conn = null, this.sendBuffer = [], this.serializer = new v_(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this._resolveFetch = (u) => {
      let f;
      return u ? f = u : typeof fetch > "u" ? f = (...h) => Promise.resolve().then(() => Br).then(({ default: p }) => p(...h)) : f = fetch, (...h) => f(...h);
    }, this.endPoint = `${n}/${Qa.websocket}`, this.httpEndpoint = Mp(n), r?.transport ? this.transport = r.transport : this.transport = null, r?.params && (this.params = r.params), r?.headers && (this.headers = Object.assign(Object.assign({}, this.headers), r.headers)), r?.timeout && (this.timeout = r.timeout), r?.logger && (this.logger = r.logger), r?.heartbeatIntervalMs && (this.heartbeatIntervalMs = r.heartbeatIntervalMs);
    const a = (s = r?.params) === null || s === void 0 ? void 0 : s.apikey;
    a && (this.accessToken = a, this.apiKey = a), this.reconnectAfterMs = r?.reconnectAfterMs ? r.reconnectAfterMs : (u) => [1e3, 2e3, 5e3, 1e4][u - 1] || 1e4, this.encode = r?.encode ? r.encode : (u, f) => f(JSON.stringify(u)), this.decode = r?.decode ? r.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new Dp(async () => {
      this.disconnect(), this.connect();
    }, this.reconnectAfterMs), this.fetch = this._resolveFetch(r?.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!this.conn) {
      if (this.transport) {
        this.conn = new this.transport(this._endPointURL(), void 0, {
          headers: this.headers
        });
        return;
      }
      if (E_) {
        this.conn = new WebSocket(this._endPointURL()), this.setupConnection();
        return;
      }
      this.conn = new P_(this._endPointURL(), void 0, {
        close: () => {
          this.conn = null;
        }
      }), import("./browser-1a071542.js").then((n) => n.b).then(({ default: n }) => {
        this.conn = new n(this._endPointURL(), void 0, {
          headers: this.headers
        }), this.setupConnection();
      });
    }
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(n, r) {
    this.conn && (this.conn.onclose = function() {
    }, n ? this.conn.close(n, r ?? "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset());
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(n) {
    const r = await n.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), r;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const n = await Promise.all(this.channels.map((r) => r.unsubscribe()));
    return this.disconnect(), n;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(n, r, s) {
    this.logger(n, r, s);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Lr.connecting:
        return qn.Connecting;
      case Lr.open:
        return qn.Open;
      case Lr.closing:
        return qn.Closing;
      default:
        return qn.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === qn.Open;
  }
  channel(n, r = { config: {} }) {
    const s = new mu(`realtime:${n}`, r, this);
    return this.channels.push(s), s;
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(n) {
    const { topic: r, event: s, payload: a, ref: u } = n, f = () => {
      this.encode(n, (h) => {
        var p;
        (p = this.conn) === null || p === void 0 || p.send(h);
      });
    };
    this.log("push", `${r} ${s} (${u})`, a), this.isConnected() ? f() : this.sendBuffer.push(f);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * @param token A JWT string.
   */
  setAuth(n) {
    this.accessToken = n, this.channels.forEach((r) => {
      n && r.updateJoinPayload({ access_token: n }), r.joinedOnce && r._isJoined() && r._push(Ot.access_token, { access_token: n });
    });
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let n = this.ref + 1;
    return n === this.ref ? this.ref = 0 : this.ref = n, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(n) {
    let r = this.channels.find((s) => s.topic === n && (s._isJoined() || s._isJoining()));
    r && (this.log("transport", `leaving duplicate topic "${n}"`), r.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(n) {
    this.channels = this.channels.filter((r) => r._joinRef() !== n._joinRef());
  }
  /**
   * Sets up connection handlers.
   *
   * @internal
   */
  setupConnection() {
    this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (n) => this._onConnError(n), this.conn.onmessage = (n) => this._onConnMessage(n), this.conn.onclose = (n) => this._onConnClose(n));
  }
  /**
   * Returns the URL of the websocket.
   *
   * @internal
   */
  _endPointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: m_ }));
  }
  /** @internal */
  _onConnMessage(n) {
    this.decode(n.data, (r) => {
      let { topic: s, event: a, payload: u, ref: f } = r;
      (f && f === this.pendingHeartbeatRef || a === u?.type) && (this.pendingHeartbeatRef = null), this.log("receive", `${u.status || ""} ${s} ${a} ${f && "(" + f + ")" || ""}`, u), this.channels.filter((h) => h._isMember(s)).forEach((h) => h._trigger(a, u, f)), this.stateChangeCallbacks.message.forEach((h) => h(r));
    });
  }
  /** @internal */
  _onConnOpen() {
    this.log("transport", `connected to ${this._endPointURL()}`), this._flushSendBuffer(), this.reconnectTimer.reset(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs), this.stateChangeCallbacks.open.forEach((n) => n());
  }
  /** @internal */
  _onConnClose(n) {
    this.log("transport", "close", n), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((r) => r(n));
  }
  /** @internal */
  _onConnError(n) {
    this.log("transport", n.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach((r) => r(n));
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((n) => n._trigger(Ot.error));
  }
  /** @internal */
  _appendParams(n, r) {
    if (Object.keys(r).length === 0)
      return n;
    const s = n.match(/\?/) ? "&" : "?", a = new URLSearchParams(r);
    return `${n}${s}${a}`;
  }
  /** @internal */
  _flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((n) => n()), this.sendBuffer = []);
  }
  /** @internal */
  _sendHeartbeat() {
    var n;
    if (this.isConnected()) {
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), (n = this.conn) === null || n === void 0 || n.close(g_, "hearbeat timeout");
        return;
      }
      this.pendingHeartbeatRef = this._makeRef(), this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef
      }), this.setAuth(this.accessToken);
    }
  }
}
class P_ {
  constructor(n, r, s) {
    this.binaryType = "arraybuffer", this.onclose = () => {
    }, this.onerror = () => {
    }, this.onmessage = () => {
    }, this.onopen = () => {
    }, this.readyState = Lr.connecting, this.send = () => {
    }, this.url = null, this.url = n, this.close = s.close;
  }
}
class gu extends Error {
  constructor(n) {
    super(n), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function qe(i) {
  return typeof i == "object" && i !== null && "__isStorageError" in i;
}
class T_ extends gu {
  constructor(n, r) {
    super(n), this.name = "StorageApiError", this.status = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status
    };
  }
}
class Yf extends gu {
  constructor(n, r) {
    super(n), this.name = "StorageUnknownError", this.originalError = r;
  }
}
var O_ = globalThis && globalThis.__awaiter || function(i, n, r, s) {
  function a(u) {
    return u instanceof r ? u : new r(function(f) {
      f(u);
    });
  }
  return new (r || (r = Promise))(function(u, f) {
    function h(v) {
      try {
        g(s.next(v));
      } catch (y) {
        f(y);
      }
    }
    function p(v) {
      try {
        g(s.throw(v));
      } catch (y) {
        f(y);
      }
    }
    function g(v) {
      v.done ? u(v.value) : a(v.value).then(h, p);
    }
    g((s = s.apply(i, n || [])).next());
  });
};
const Fp = (i) => {
  let n;
  return i ? n = i : typeof fetch > "u" ? n = (...r) => Promise.resolve().then(() => Br).then(({ default: s }) => s(...r)) : n = fetch, (...r) => n(...r);
}, R_ = () => O_(void 0, void 0, void 0, function* () {
  return typeof Response > "u" ? (yield Promise.resolve().then(() => Br)).Response : Response;
});
var Wr = globalThis && globalThis.__awaiter || function(i, n, r, s) {
  function a(u) {
    return u instanceof r ? u : new r(function(f) {
      f(u);
    });
  }
  return new (r || (r = Promise))(function(u, f) {
    function h(v) {
      try {
        g(s.next(v));
      } catch (y) {
        f(y);
      }
    }
    function p(v) {
      try {
        g(s.throw(v));
      } catch (y) {
        f(y);
      }
    }
    function g(v) {
      v.done ? u(v.value) : a(v.value).then(h, p);
    }
    g((s = s.apply(i, n || [])).next());
  });
};
const La = (i) => i.msg || i.message || i.error_description || i.error || JSON.stringify(i), A_ = (i, n) => Wr(void 0, void 0, void 0, function* () {
  const r = yield R_();
  i instanceof r ? i.json().then((s) => {
    n(new T_(La(s), i.status || 500));
  }).catch((s) => {
    n(new Yf(La(s), s));
  }) : n(new Yf(La(i), i));
}), j_ = (i, n, r, s) => {
  const a = { method: i, headers: n?.headers || {} };
  return i === "GET" ? a : (a.headers = Object.assign({ "Content-Type": "application/json" }, n?.headers), a.body = JSON.stringify(s), Object.assign(Object.assign({}, a), r));
};
function Ts(i, n, r, s, a, u) {
  return Wr(this, void 0, void 0, function* () {
    return new Promise((f, h) => {
      i(r, j_(n, s, a, u)).then((p) => {
        if (!p.ok)
          throw p;
        return s?.noResolveJson ? p : p.json();
      }).then((p) => f(p)).catch((p) => A_(p, h));
    });
  });
}
function Ja(i, n, r, s) {
  return Wr(this, void 0, void 0, function* () {
    return Ts(i, "GET", n, r, s);
  });
}
function bn(i, n, r, s, a) {
  return Wr(this, void 0, void 0, function* () {
    return Ts(i, "POST", n, s, a, r);
  });
}
function N_(i, n, r, s, a) {
  return Wr(this, void 0, void 0, function* () {
    return Ts(i, "PUT", n, s, a, r);
  });
}
function Up(i, n, r, s, a) {
  return Wr(this, void 0, void 0, function* () {
    return Ts(i, "DELETE", n, s, a, r);
  });
}
var yt = globalThis && globalThis.__awaiter || function(i, n, r, s) {
  function a(u) {
    return u instanceof r ? u : new r(function(f) {
      f(u);
    });
  }
  return new (r || (r = Promise))(function(u, f) {
    function h(v) {
      try {
        g(s.next(v));
      } catch (y) {
        f(y);
      }
    }
    function p(v) {
      try {
        g(s.throw(v));
      } catch (y) {
        f(y);
      }
    }
    function g(v) {
      v.done ? u(v.value) : a(v.value).then(h, p);
    }
    g((s = s.apply(i, n || [])).next());
  });
};
const L_ = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, Xf = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
class I_ {
  constructor(n, r = {}, s, a) {
    this.url = n, this.headers = r, this.bucketId = s, this.fetch = Fp(a);
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(n, r, s, a) {
    return yt(this, void 0, void 0, function* () {
      try {
        let u;
        const f = Object.assign(Object.assign({}, Xf), a), h = Object.assign(Object.assign({}, this.headers), n === "POST" && { "x-upsert": String(f.upsert) });
        typeof Blob < "u" && s instanceof Blob ? (u = new FormData(), u.append("cacheControl", f.cacheControl), u.append("", s)) : typeof FormData < "u" && s instanceof FormData ? (u = s, u.append("cacheControl", f.cacheControl)) : (u = s, h["cache-control"] = `max-age=${f.cacheControl}`, h["content-type"] = f.contentType);
        const p = this._removeEmptyFolders(r), g = this._getFinalPath(p), v = yield this.fetch(`${this.url}/object/${g}`, Object.assign({ method: n, body: u, headers: h }, f?.duplex ? { duplex: f.duplex } : {})), y = yield v.json();
        return v.ok ? {
          data: { path: p, id: y.Id, fullPath: y.Key },
          error: null
        } : { data: null, error: y };
      } catch (u) {
        if (qe(u))
          return { data: null, error: u };
        throw u;
      }
    });
  }
  /**
   * Uploads a file to an existing bucket.
   *
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  upload(n, r, s) {
    return yt(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", n, r, s);
    });
  }
  /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadToSignedUrl(n, r, s, a) {
    return yt(this, void 0, void 0, function* () {
      const u = this._removeEmptyFolders(n), f = this._getFinalPath(u), h = new URL(this.url + `/object/upload/sign/${f}`);
      h.searchParams.set("token", r);
      try {
        let p;
        const g = Object.assign({ upsert: Xf.upsert }, a), v = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(g.upsert) });
        typeof Blob < "u" && s instanceof Blob ? (p = new FormData(), p.append("cacheControl", g.cacheControl), p.append("", s)) : typeof FormData < "u" && s instanceof FormData ? (p = s, p.append("cacheControl", g.cacheControl)) : (p = s, v["cache-control"] = `max-age=${g.cacheControl}`, v["content-type"] = g.contentType);
        const y = yield this.fetch(h.toString(), {
          method: "PUT",
          body: p,
          headers: v
        }), _ = yield y.json();
        return y.ok ? {
          data: { path: u, fullPath: _.Key },
          error: null
        } : { data: null, error: _ };
      } catch (p) {
        if (qe(p))
          return { data: null, error: p };
        throw p;
      }
    });
  }
  /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   */
  createSignedUploadUrl(n, r) {
    return yt(this, void 0, void 0, function* () {
      try {
        let s = this._getFinalPath(n);
        const a = Object.assign({}, this.headers);
        r?.upsert && (a["x-upsert"] = "true");
        const u = yield bn(this.fetch, `${this.url}/object/upload/sign/${s}`, {}, { headers: a }), f = new URL(this.url + u.url), h = f.searchParams.get("token");
        if (!h)
          throw new gu("No token returned by API");
        return { data: { signedUrl: f.toString(), path: n, token: h }, error: null };
      } catch (s) {
        if (qe(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  update(n, r, s) {
    return yt(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", n, r, s);
    });
  }
  /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   */
  move(n, r, s) {
    return yt(this, void 0, void 0, function* () {
      try {
        return { data: yield bn(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: n,
          destinationKey: r,
          destinationBucket: s?.destinationBucket
        }, { headers: this.headers }), error: null };
      } catch (a) {
        if (qe(a))
          return { data: null, error: a };
        throw a;
      }
    });
  }
  /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   */
  copy(n, r, s) {
    return yt(this, void 0, void 0, function* () {
      try {
        return { data: { path: (yield bn(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: n,
          destinationKey: r,
          destinationBucket: s?.destinationBucket
        }, { headers: this.headers })).Key }, error: null };
      } catch (a) {
        if (qe(a))
          return { data: null, error: a };
        throw a;
      }
    });
  }
  /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  createSignedUrl(n, r, s) {
    return yt(this, void 0, void 0, function* () {
      try {
        let a = this._getFinalPath(n), u = yield bn(this.fetch, `${this.url}/object/sign/${a}`, Object.assign({ expiresIn: r }, s?.transform ? { transform: s.transform } : {}), { headers: this.headers });
        const f = s?.download ? `&download=${s.download === !0 ? "" : s.download}` : "";
        return u = { signedUrl: encodeURI(`${this.url}${u.signedURL}${f}`) }, { data: u, error: null };
      } catch (a) {
        if (qe(a))
          return { data: null, error: a };
        throw a;
      }
    });
  }
  /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   */
  createSignedUrls(n, r, s) {
    return yt(this, void 0, void 0, function* () {
      try {
        const a = yield bn(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: r, paths: n }, { headers: this.headers }), u = s?.download ? `&download=${s.download === !0 ? "" : s.download}` : "";
        return {
          data: a.map((f) => Object.assign(Object.assign({}, f), { signedUrl: f.signedURL ? encodeURI(`${this.url}${f.signedURL}${u}`) : null })),
          error: null
        };
      } catch (a) {
        if (qe(a))
          return { data: null, error: a };
        throw a;
      }
    });
  }
  /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   */
  download(n, r) {
    return yt(this, void 0, void 0, function* () {
      const a = typeof r?.transform < "u" ? "render/image/authenticated" : "object", u = this.transformOptsToQueryString(r?.transform || {}), f = u ? `?${u}` : "";
      try {
        const h = this._getFinalPath(n);
        return { data: yield (yield Ja(this.fetch, `${this.url}/${a}/${h}${f}`, {
          headers: this.headers,
          noResolveJson: !0
        })).blob(), error: null };
      } catch (h) {
        if (qe(h))
          return { data: null, error: h };
        throw h;
      }
    });
  }
  /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  getPublicUrl(n, r) {
    const s = this._getFinalPath(n), a = [], u = r?.download ? `download=${r.download === !0 ? "" : r.download}` : "";
    u !== "" && a.push(u);
    const h = typeof r?.transform < "u" ? "render/image" : "object", p = this.transformOptsToQueryString(r?.transform || {});
    p !== "" && a.push(p);
    let g = a.join("&");
    return g !== "" && (g = `?${g}`), {
      data: { publicUrl: encodeURI(`${this.url}/${h}/public/${s}${g}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   */
  remove(n) {
    return yt(this, void 0, void 0, function* () {
      try {
        return { data: yield Up(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: n }, { headers: this.headers }), error: null };
      } catch (r) {
        if (qe(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Lists all the files within a bucket.
   * @param path The folder path.
   */
  list(n, r, s) {
    return yt(this, void 0, void 0, function* () {
      try {
        const a = Object.assign(Object.assign(Object.assign({}, L_), r), { prefix: n || "" });
        return { data: yield bn(this.fetch, `${this.url}/object/list/${this.bucketId}`, a, { headers: this.headers }, s), error: null };
      } catch (a) {
        if (qe(a))
          return { data: null, error: a };
        throw a;
      }
    });
  }
  _getFinalPath(n) {
    return `${this.bucketId}/${n}`;
  }
  _removeEmptyFolders(n) {
    return n.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(n) {
    const r = [];
    return n.width && r.push(`width=${n.width}`), n.height && r.push(`height=${n.height}`), n.resize && r.push(`resize=${n.resize}`), n.format && r.push(`format=${n.format}`), n.quality && r.push(`quality=${n.quality}`), r.join("&");
  }
}
const $_ = "2.6.0", D_ = { "X-Client-Info": `storage-js/${$_}` };
var Or = globalThis && globalThis.__awaiter || function(i, n, r, s) {
  function a(u) {
    return u instanceof r ? u : new r(function(f) {
      f(u);
    });
  }
  return new (r || (r = Promise))(function(u, f) {
    function h(v) {
      try {
        g(s.next(v));
      } catch (y) {
        f(y);
      }
    }
    function p(v) {
      try {
        g(s.throw(v));
      } catch (y) {
        f(y);
      }
    }
    function g(v) {
      v.done ? u(v.value) : a(v.value).then(h, p);
    }
    g((s = s.apply(i, n || [])).next());
  });
};
class z_ {
  constructor(n, r = {}, s) {
    this.url = n, this.headers = Object.assign(Object.assign({}, D_), r), this.fetch = Fp(s);
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets() {
    return Or(this, void 0, void 0, function* () {
      try {
        return { data: yield Ja(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
      } catch (n) {
        if (qe(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @param id The unique identifier of the bucket you would like to retrieve.
   */
  getBucket(n) {
    return Or(this, void 0, void 0, function* () {
      try {
        return { data: yield Ja(this.fetch, `${this.url}/bucket/${n}`, { headers: this.headers }), error: null };
      } catch (r) {
        if (qe(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Creates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns newly created bucket id
   */
  createBucket(n, r = {
    public: !1
  }) {
    return Or(this, void 0, void 0, function* () {
      try {
        return { data: yield bn(this.fetch, `${this.url}/bucket`, {
          id: n,
          name: n,
          public: r.public,
          file_size_limit: r.fileSizeLimit,
          allowed_mime_types: r.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (s) {
        if (qe(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Updates a Storage bucket
   *
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   */
  updateBucket(n, r) {
    return Or(this, void 0, void 0, function* () {
      try {
        return { data: yield N_(this.fetch, `${this.url}/bucket/${n}`, {
          id: n,
          name: n,
          public: r.public,
          file_size_limit: r.fileSizeLimit,
          allowed_mime_types: r.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (s) {
        if (qe(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Removes all objects inside a single bucket.
   *
   * @param id The unique identifier of the bucket you would like to empty.
   */
  emptyBucket(n) {
    return Or(this, void 0, void 0, function* () {
      try {
        return { data: yield bn(this.fetch, `${this.url}/bucket/${n}/empty`, {}, { headers: this.headers }), error: null };
      } catch (r) {
        if (qe(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @param id The unique identifier of the bucket you would like to delete.
   */
  deleteBucket(n) {
    return Or(this, void 0, void 0, function* () {
      try {
        return { data: yield Up(this.fetch, `${this.url}/bucket/${n}`, {}, { headers: this.headers }), error: null };
      } catch (r) {
        if (qe(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
}
class M_ extends z_ {
  constructor(n, r = {}, s) {
    super(n, r, s);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(n) {
    return new I_(this.url, this.headers, n, this.fetch);
  }
}
const F_ = "2.44.4";
let Io = "";
typeof Deno < "u" ? Io = "deno" : typeof document < "u" ? Io = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? Io = "react-native" : Io = "node";
const U_ = { "X-Client-Info": `supabase-js-${Io}/${F_}` }, B_ = {
  headers: U_
}, W_ = {
  schema: "public"
}, H_ = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, V_ = {};
var K_ = globalThis && globalThis.__awaiter || function(i, n, r, s) {
  function a(u) {
    return u instanceof r ? u : new r(function(f) {
      f(u);
    });
  }
  return new (r || (r = Promise))(function(u, f) {
    function h(v) {
      try {
        g(s.next(v));
      } catch (y) {
        f(y);
      }
    }
    function p(v) {
      try {
        g(s.throw(v));
      } catch (y) {
        f(y);
      }
    }
    function g(v) {
      v.done ? u(v.value) : a(v.value).then(h, p);
    }
    g((s = s.apply(i, n || [])).next());
  });
};
const G_ = (i) => {
  let n;
  return i ? n = i : typeof fetch > "u" ? n = Cp : n = fetch, (...r) => n(...r);
}, Q_ = () => typeof Headers > "u" ? Pp : Headers, q_ = (i, n, r) => {
  const s = G_(r), a = Q_();
  return (u, f) => K_(void 0, void 0, void 0, function* () {
    var h;
    const p = (h = yield n()) !== null && h !== void 0 ? h : i;
    let g = new a(f?.headers);
    return g.has("apikey") || g.set("apikey", i), g.has("Authorization") || g.set("Authorization", `Bearer ${p}`), s(u, Object.assign(Object.assign({}, f), { headers: g }));
  });
};
function J_(i) {
  return i.replace(/\/$/, "");
}
function Y_(i, n) {
  const { db: r, auth: s, realtime: a, global: u } = i, { db: f, auth: h, realtime: p, global: g } = n;
  return {
    db: Object.assign(Object.assign({}, f), r),
    auth: Object.assign(Object.assign({}, h), s),
    realtime: Object.assign(Object.assign({}, p), a),
    global: Object.assign(Object.assign({}, g), u)
  };
}
const Bp = "2.64.4", X_ = "http://localhost:9999", Z_ = "supabase.auth.token", e1 = { "X-Client-Info": `gotrue-js/${Bp}` }, Zf = 10, Ya = "X-Supabase-Api-Version", Wp = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
};
function t1(i) {
  return Math.round(Date.now() / 1e3) + i;
}
function n1() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(i) {
    const n = Math.random() * 16 | 0;
    return (i == "x" ? n : n & 3 | 8).toString(16);
  });
}
const Tt = () => typeof document < "u", Kn = {
  tested: !1,
  writable: !1
}, Do = () => {
  if (!Tt())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (Kn.tested)
    return Kn.writable;
  const i = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(i, i), globalThis.localStorage.removeItem(i), Kn.tested = !0, Kn.writable = !0;
  } catch {
    Kn.tested = !0, Kn.writable = !1;
  }
  return Kn.writable;
};
function Ia(i) {
  const n = {}, r = new URL(i);
  if (r.hash && r.hash[0] === "#")
    try {
      new URLSearchParams(r.hash.substring(1)).forEach((a, u) => {
        n[u] = a;
      });
    } catch {
    }
  return r.searchParams.forEach((s, a) => {
    n[a] = s;
  }), n;
}
const Hp = (i) => {
  let n;
  return i ? n = i : typeof fetch > "u" ? n = (...r) => Promise.resolve().then(() => Br).then(({ default: s }) => s(...r)) : n = fetch, (...r) => n(...r);
}, r1 = (i) => typeof i == "object" && i !== null && "status" in i && "ok" in i && "json" in i && typeof i.json == "function", Vp = async (i, n, r) => {
  await i.setItem(n, JSON.stringify(r));
}, as = async (i, n) => {
  const r = await i.getItem(n);
  if (!r)
    return null;
  try {
    return JSON.parse(r);
  } catch {
    return r;
  }
}, $a = async (i, n) => {
  await i.removeItem(n);
};
function o1(i) {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let r = "", s, a, u, f, h, p, g, v = 0;
  for (i = i.replace("-", "+").replace("_", "/"); v < i.length; )
    f = n.indexOf(i.charAt(v++)), h = n.indexOf(i.charAt(v++)), p = n.indexOf(i.charAt(v++)), g = n.indexOf(i.charAt(v++)), s = f << 2 | h >> 4, a = (h & 15) << 4 | p >> 2, u = (p & 3) << 6 | g, r = r + String.fromCharCode(s), p != 64 && a != 0 && (r = r + String.fromCharCode(a)), g != 64 && u != 0 && (r = r + String.fromCharCode(u));
  return r;
}
class Os {
  constructor() {
    this.promise = new Os.promiseConstructor((n, r) => {
      this.resolve = n, this.reject = r;
    });
  }
}
Os.promiseConstructor = Promise;
function eh(i) {
  const n = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i, r = i.split(".");
  if (r.length !== 3)
    throw new Error("JWT is not valid: not a JWT structure");
  if (!n.test(r[1]))
    throw new Error("JWT is not valid: payload is not in base64url format");
  const s = r[1];
  return JSON.parse(o1(s));
}
async function i1(i) {
  return await new Promise((n) => {
    setTimeout(() => n(null), i);
  });
}
function s1(i, n) {
  return new Promise((s, a) => {
    (async () => {
      for (let u = 0; u < 1 / 0; u++)
        try {
          const f = await i(u);
          if (!n(u, null, f)) {
            s(f);
            return;
          }
        } catch (f) {
          if (!n(u, f)) {
            a(f);
            return;
          }
        }
    })();
  });
}
function l1(i) {
  return ("0" + i.toString(16)).substr(-2);
}
function a1() {
  const n = new Uint32Array(56);
  if (typeof crypto > "u") {
    const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", s = r.length;
    let a = "";
    for (let u = 0; u < 56; u++)
      a += r.charAt(Math.floor(Math.random() * s));
    return a;
  }
  return crypto.getRandomValues(n), Array.from(n, l1).join("");
}
async function u1(i) {
  const r = new TextEncoder().encode(i), s = await crypto.subtle.digest("SHA-256", r), a = new Uint8Array(s);
  return Array.from(a).map((u) => String.fromCharCode(u)).join("");
}
function c1(i) {
  return btoa(i).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function d1(i) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), i;
  const r = await u1(i);
  return c1(r);
}
async function Rr(i, n, r = !1) {
  const s = a1();
  let a = s;
  r && (a += "/PASSWORD_RECOVERY"), await Vp(i, `${n}-code-verifier`, a);
  const u = await d1(s);
  return [u, s === u ? "plain" : "s256"];
}
const f1 = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function h1(i) {
  const n = i.headers.get(Ya);
  if (!n || !n.match(f1))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${n}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
class vu extends Error {
  constructor(n, r, s) {
    super(n), this.__isAuthError = !0, this.name = "AuthError", this.status = r, this.code = s;
  }
}
function ce(i) {
  return typeof i == "object" && i !== null && "__isAuthError" in i;
}
class p1 extends vu {
  constructor(n, r, s) {
    super(n, r, s), this.name = "AuthApiError", this.status = r, this.code = s;
  }
}
function m1(i) {
  return ce(i) && i.name === "AuthApiError";
}
class Kp extends vu {
  constructor(n, r) {
    super(n), this.name = "AuthUnknownError", this.originalError = r;
  }
}
class Zn extends vu {
  constructor(n, r, s, a) {
    super(n, s, a), this.name = r, this.status = s;
  }
}
class Gn extends Zn {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
class Da extends Zn {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class us extends Zn {
  constructor(n) {
    super(n, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class cs extends Zn {
  constructor(n, r = null) {
    super(n, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class th extends Zn {
  constructor(n, r = null) {
    super(n, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class Xa extends Zn {
  constructor(n, r) {
    super(n, "AuthRetryableFetchError", r, void 0);
  }
}
function za(i) {
  return ce(i) && i.name === "AuthRetryableFetchError";
}
class nh extends Zn {
  constructor(n, r, s) {
    super(n, "AuthWeakPasswordError", r, "weak_password"), this.reasons = s;
  }
}
var g1 = globalThis && globalThis.__rest || function(i, n) {
  var r = {};
  for (var s in i)
    Object.prototype.hasOwnProperty.call(i, s) && n.indexOf(s) < 0 && (r[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, s = Object.getOwnPropertySymbols(i); a < s.length; a++)
      n.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[a]) && (r[s[a]] = i[s[a]]);
  return r;
};
const Qn = (i) => i.msg || i.message || i.error_description || i.error || JSON.stringify(i), v1 = [502, 503, 504];
async function rh(i) {
  var n;
  if (!r1(i))
    throw new Xa(Qn(i), 0);
  if (v1.includes(i.status))
    throw new Xa(Qn(i), i.status);
  let r;
  try {
    r = await i.json();
  } catch (u) {
    throw new Kp(Qn(u), u);
  }
  let s;
  const a = h1(i);
  if (a && a.getTime() >= Wp["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? s = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (s = r.error_code), s) {
    if (s === "weak_password")
      throw new nh(Qn(r), i.status, ((n = r.weak_password) === null || n === void 0 ? void 0 : n.reasons) || []);
  } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((u, f) => u && typeof f == "string", !0))
    throw new nh(Qn(r), i.status, r.weak_password.reasons);
  throw new p1(Qn(r), i.status || 500, s);
}
const y1 = (i, n, r, s) => {
  const a = { method: i, headers: n?.headers || {} };
  return i === "GET" ? a : (a.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, n?.headers), a.body = JSON.stringify(s), Object.assign(Object.assign({}, a), r));
};
async function fe(i, n, r, s) {
  var a;
  const u = Object.assign({}, s?.headers);
  u[Ya] || (u[Ya] = Wp["2024-01-01"].name), s?.jwt && (u.Authorization = `Bearer ${s.jwt}`);
  const f = (a = s?.query) !== null && a !== void 0 ? a : {};
  s?.redirectTo && (f.redirect_to = s.redirectTo);
  const h = Object.keys(f).length ? "?" + new URLSearchParams(f).toString() : "", p = await w1(i, n, r + h, {
    headers: u,
    noResolveJson: s?.noResolveJson
  }, {}, s?.body);
  return s?.xform ? s?.xform(p) : { data: Object.assign({}, p), error: null };
}
async function w1(i, n, r, s, a, u) {
  const f = y1(n, s, a, u);
  let h;
  try {
    h = await i(r, Object.assign({}, f));
  } catch (p) {
    throw console.error(p), new Xa(Qn(p), 0);
  }
  if (h.ok || await rh(h), s?.noResolveJson)
    return h;
  try {
    return await h.json();
  } catch (p) {
    await rh(p);
  }
}
function Sn(i) {
  var n;
  let r = null;
  S1(i) && (r = Object.assign({}, i), i.expires_at || (r.expires_at = t1(i.expires_in)));
  const s = (n = i.user) !== null && n !== void 0 ? n : i;
  return { data: { session: r, user: s }, error: null };
}
function oh(i) {
  const n = Sn(i);
  return !n.error && i.weak_password && typeof i.weak_password == "object" && Array.isArray(i.weak_password.reasons) && i.weak_password.reasons.length && i.weak_password.message && typeof i.weak_password.message == "string" && i.weak_password.reasons.reduce((r, s) => r && typeof s == "string", !0) && (n.data.weak_password = i.weak_password), n;
}
function En(i) {
  var n;
  return { data: { user: (n = i.user) !== null && n !== void 0 ? n : i }, error: null };
}
function _1(i) {
  return { data: i, error: null };
}
function x1(i) {
  const { action_link: n, email_otp: r, hashed_token: s, redirect_to: a, verification_type: u } = i, f = g1(i, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), h = {
    action_link: n,
    email_otp: r,
    hashed_token: s,
    redirect_to: a,
    verification_type: u
  }, p = Object.assign({}, f);
  return {
    data: {
      properties: h,
      user: p
    },
    error: null
  };
}
function k1(i) {
  return i;
}
function S1(i) {
  return i.access_token && i.refresh_token && i.expires_in;
}
var b1 = globalThis && globalThis.__rest || function(i, n) {
  var r = {};
  for (var s in i)
    Object.prototype.hasOwnProperty.call(i, s) && n.indexOf(s) < 0 && (r[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, s = Object.getOwnPropertySymbols(i); a < s.length; a++)
      n.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[a]) && (r[s[a]] = i[s[a]]);
  return r;
};
class E1 {
  constructor({ url: n = "", headers: r = {}, fetch: s }) {
    this.url = n, this.headers = r, this.fetch = Hp(s), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(n, r = "global") {
    try {
      return await fe(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
        headers: this.headers,
        jwt: n,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (s) {
      if (ce(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(n, r = {}) {
    try {
      return await fe(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: n, data: r.data },
        headers: this.headers,
        redirectTo: r.redirectTo,
        xform: En
      });
    } catch (s) {
      if (ce(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(n) {
    try {
      const { options: r } = n, s = b1(n, ["options"]), a = Object.assign(Object.assign({}, s), r);
      return "newEmail" in s && (a.new_email = s?.newEmail, delete a.newEmail), await fe(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: a,
        headers: this.headers,
        xform: x1,
        redirectTo: r?.redirectTo
      });
    } catch (r) {
      if (ce(r))
        return {
          data: {
            properties: null,
            user: null
          },
          error: r
        };
      throw r;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(n) {
    try {
      return await fe(this.fetch, "POST", `${this.url}/admin/users`, {
        body: n,
        headers: this.headers,
        xform: En
      });
    } catch (r) {
      if (ce(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(n) {
    var r, s, a, u, f, h, p;
    try {
      const g = { nextPage: null, lastPage: 0, total: 0 }, v = await fe(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (s = (r = n?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && s !== void 0 ? s : "",
          per_page: (u = (a = n?.perPage) === null || a === void 0 ? void 0 : a.toString()) !== null && u !== void 0 ? u : ""
        },
        xform: k1
      });
      if (v.error)
        throw v.error;
      const y = await v.json(), _ = (f = v.headers.get("x-total-count")) !== null && f !== void 0 ? f : 0, b = (p = (h = v.headers.get("link")) === null || h === void 0 ? void 0 : h.split(",")) !== null && p !== void 0 ? p : [];
      return b.length > 0 && (b.forEach((A) => {
        const S = parseInt(A.split(";")[0].split("=")[1].substring(0, 1)), P = JSON.parse(A.split(";")[1].split("=")[1]);
        g[`${P}Page`] = S;
      }), g.total = parseInt(_)), { data: Object.assign(Object.assign({}, y), g), error: null };
    } catch (g) {
      if (ce(g))
        return { data: { users: [] }, error: g };
      throw g;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(n) {
    try {
      return await fe(this.fetch, "GET", `${this.url}/admin/users/${n}`, {
        headers: this.headers,
        xform: En
      });
    } catch (r) {
      if (ce(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(n, r) {
    try {
      return await fe(this.fetch, "PUT", `${this.url}/admin/users/${n}`, {
        body: r,
        headers: this.headers,
        xform: En
      });
    } catch (s) {
      if (ce(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted (setting `deleted_at` to the current timestamp and disabling their account while preserving their data) from the auth schema.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(n, r = !1) {
    try {
      return await fe(this.fetch, "DELETE", `${this.url}/admin/users/${n}`, {
        headers: this.headers,
        body: {
          should_soft_delete: r
        },
        xform: En
      });
    } catch (s) {
      if (ce(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  async _listFactors(n) {
    try {
      const { data: r, error: s } = await fe(this.fetch, "GET", `${this.url}/admin/users/${n.userId}/factors`, {
        headers: this.headers,
        xform: (a) => ({ data: { factors: a }, error: null })
      });
      return { data: r, error: s };
    } catch (r) {
      if (ce(r))
        return { data: null, error: r };
      throw r;
    }
  }
  async _deleteFactor(n) {
    try {
      return { data: await fe(this.fetch, "DELETE", `${this.url}/admin/users/${n.userId}/factors/${n.id}`, {
        headers: this.headers
      }), error: null };
    } catch (r) {
      if (ce(r))
        return { data: null, error: r };
      throw r;
    }
  }
}
const C1 = {
  getItem: (i) => Do() ? globalThis.localStorage.getItem(i) : null,
  setItem: (i, n) => {
    Do() && globalThis.localStorage.setItem(i, n);
  },
  removeItem: (i) => {
    Do() && globalThis.localStorage.removeItem(i);
  }
};
function ih(i = {}) {
  return {
    getItem: (n) => i[n] || null,
    setItem: (n, r) => {
      i[n] = r;
    },
    removeItem: (n) => {
      delete i[n];
    }
  };
}
function P1() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
const Ar = {
  /**
   * @experimental
   */
  debug: !!(globalThis && Do() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Gp extends Error {
  constructor(n) {
    super(n), this.isAcquireTimeout = !0;
  }
}
class T1 extends Gp {
}
async function O1(i, n, r) {
  Ar.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", i, n);
  const s = new globalThis.AbortController();
  return n > 0 && setTimeout(() => {
    s.abort(), Ar.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", i);
  }, n), await globalThis.navigator.locks.request(i, n === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: s.signal
  }, async (a) => {
    if (a) {
      Ar.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", i, a.name);
      try {
        return await r();
      } finally {
        Ar.debug && console.log("@supabase/gotrue-js: navigatorLock: released", i, a.name);
      }
    } else {
      if (n === 0)
        throw Ar.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", i), new T1(`Acquiring an exclusive Navigator LockManager lock "${i}" immediately failed`);
      if (Ar.debug)
        try {
          const u = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(u, null, "  "));
        } catch (u) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", u);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await r();
    }
  });
}
P1();
const R1 = {
  url: X_,
  storageKey: Z_,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: e1,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1
}, Lo = 30 * 1e3, sh = 3;
async function lh(i, n, r) {
  return await r();
}
class Fo {
  /**
   * Create a new client for use in the browser.
   */
  constructor(n) {
    var r, s;
    this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = Fo.nextInstanceID, Fo.nextInstanceID += 1, this.instanceID > 0 && Tt() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
    const a = Object.assign(Object.assign({}, R1), n);
    if (this.logDebugMessages = !!a.debug, typeof a.debug == "function" && (this.logger = a.debug), this.persistSession = a.persistSession, this.storageKey = a.storageKey, this.autoRefreshToken = a.autoRefreshToken, this.admin = new E1({
      url: a.url,
      headers: a.headers,
      fetch: a.fetch
    }), this.url = a.url, this.headers = a.headers, this.fetch = Hp(a.fetch), this.lock = a.lock || lh, this.detectSessionInUrl = a.detectSessionInUrl, this.flowType = a.flowType, this.hasCustomAuthorizationHeader = a.hasCustomAuthorizationHeader, a.lock ? this.lock = a.lock : Tt() && (!((r = globalThis?.navigator) === null || r === void 0) && r.locks) ? this.lock = O1 : this.lock = lh, this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
    }, this.persistSession ? a.storage ? this.storage = a.storage : Do() ? this.storage = C1 : (this.memoryStorage = {}, this.storage = ih(this.memoryStorage)) : (this.memoryStorage = {}, this.storage = ih(this.memoryStorage)), Tt() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (u) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", u);
      }
      (s = this.broadcastChannel) === null || s === void 0 || s.addEventListener("message", async (u) => {
        this._debug("received broadcast notification from other tab or client", u), await this._notifyAllSubscribers(u.data.event, u.data.session, !1);
      });
    }
    this.initialize();
  }
  _debug(...n) {
    return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${Bp}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...n), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    try {
      const n = Tt() ? await this._isPKCEFlow() : !1;
      if (this._debug("#_initialize()", "begin", "is PKCE flow", n), n || this.detectSessionInUrl && this._isImplicitGrantFlow()) {
        const { data: r, error: s } = await this._getSessionFromURL(n);
        if (s)
          return this._debug("#_initialize()", "error detecting session from URL", s), s?.message === "Identity is already linked" || s?.message === "Identity is already linked to another user" ? { error: s } : (await this._removeSession(), { error: s });
        const { session: a, redirectType: u } = r;
        return this._debug("#_initialize()", "detected session in URL", a, "redirect type", u), await this._saveSession(a), setTimeout(async () => {
          u === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", a) : await this._notifyAllSubscribers("SIGNED_IN", a);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (n) {
      return ce(n) ? { error: n } : {
        error: new Kp("Unexpected error during initialization", n)
      };
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(n) {
    var r, s, a;
    try {
      const u = await fe(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (s = (r = n?.options) === null || r === void 0 ? void 0 : r.data) !== null && s !== void 0 ? s : {},
          gotrue_meta_security: { captcha_token: (a = n?.options) === null || a === void 0 ? void 0 : a.captchaToken }
        },
        xform: Sn
      }), { data: f, error: h } = u;
      if (h || !f)
        return { data: { user: null, session: null }, error: h };
      const p = f.session, g = f.user;
      return f.session && (await this._saveSession(f.session), await this._notifyAllSubscribers("SIGNED_IN", p)), { data: { user: g, session: p }, error: null };
    } catch (u) {
      if (ce(u))
        return { data: { user: null, session: null }, error: u };
      throw u;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(n) {
    var r, s, a;
    try {
      let u;
      if ("email" in n) {
        const { email: v, password: y, options: _ } = n;
        let b = null, A = null;
        this.flowType === "pkce" && ([b, A] = await Rr(this.storage, this.storageKey)), u = await fe(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: _?.emailRedirectTo,
          body: {
            email: v,
            password: y,
            data: (r = _?.data) !== null && r !== void 0 ? r : {},
            gotrue_meta_security: { captcha_token: _?.captchaToken },
            code_challenge: b,
            code_challenge_method: A
          },
          xform: Sn
        });
      } else if ("phone" in n) {
        const { phone: v, password: y, options: _ } = n;
        u = await fe(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: v,
            password: y,
            data: (s = _?.data) !== null && s !== void 0 ? s : {},
            channel: (a = _?.channel) !== null && a !== void 0 ? a : "sms",
            gotrue_meta_security: { captcha_token: _?.captchaToken }
          },
          xform: Sn
        });
      } else
        throw new us("You must provide either an email or phone number and a password");
      const { data: f, error: h } = u;
      if (h || !f)
        return { data: { user: null, session: null }, error: h };
      const p = f.session, g = f.user;
      return f.session && (await this._saveSession(f.session), await this._notifyAllSubscribers("SIGNED_IN", p)), { data: { user: g, session: p }, error: null };
    } catch (u) {
      if (ce(u))
        return { data: { user: null, session: null }, error: u };
      throw u;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(n) {
    try {
      let r;
      if ("email" in n) {
        const { email: u, password: f, options: h } = n;
        r = await fe(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: u,
            password: f,
            gotrue_meta_security: { captcha_token: h?.captchaToken }
          },
          xform: oh
        });
      } else if ("phone" in n) {
        const { phone: u, password: f, options: h } = n;
        r = await fe(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: u,
            password: f,
            gotrue_meta_security: { captcha_token: h?.captchaToken }
          },
          xform: oh
        });
      } else
        throw new us("You must provide either an email or phone number and a password");
      const { data: s, error: a } = r;
      return a ? { data: { user: null, session: null }, error: a } : !s || !s.session || !s.user ? { data: { user: null, session: null }, error: new Da() } : (s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", s.session)), {
        data: Object.assign({ user: s.user, session: s.session }, s.weak_password ? { weakPassword: s.weak_password } : null),
        error: a
      });
    } catch (r) {
      if (ce(r))
        return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(n) {
    var r, s, a, u;
    return await this._handleProviderSignIn(n.provider, {
      redirectTo: (r = n.options) === null || r === void 0 ? void 0 : r.redirectTo,
      scopes: (s = n.options) === null || s === void 0 ? void 0 : s.scopes,
      queryParams: (a = n.options) === null || a === void 0 ? void 0 : a.queryParams,
      skipBrowserRedirect: (u = n.options) === null || u === void 0 ? void 0 : u.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(n) {
    return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(n));
  }
  async _exchangeCodeForSession(n) {
    const r = await as(this.storage, `${this.storageKey}-code-verifier`), [s, a] = (r ?? "").split("/"), { data: u, error: f } = await fe(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
      headers: this.headers,
      body: {
        auth_code: n,
        code_verifier: s
      },
      xform: Sn
    });
    return await $a(this.storage, `${this.storageKey}-code-verifier`), f ? { data: { user: null, session: null, redirectType: null }, error: f } : !u || !u.session || !u.user ? {
      data: { user: null, session: null, redirectType: null },
      error: new Da()
    } : (u.session && (await this._saveSession(u.session), await this._notifyAllSubscribers("SIGNED_IN", u.session)), { data: Object.assign(Object.assign({}, u), { redirectType: a ?? null }), error: f });
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(n) {
    try {
      const { options: r, provider: s, token: a, access_token: u, nonce: f } = n, h = await fe(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: s,
          id_token: a,
          access_token: u,
          nonce: f,
          gotrue_meta_security: { captcha_token: r?.captchaToken }
        },
        xform: Sn
      }), { data: p, error: g } = h;
      return g ? { data: { user: null, session: null }, error: g } : !p || !p.session || !p.user ? {
        data: { user: null, session: null },
        error: new Da()
      } : (p.session && (await this._saveSession(p.session), await this._notifyAllSubscribers("SIGNED_IN", p.session)), { data: p, error: g });
    } catch (r) {
      if (ce(r))
        return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(n) {
    var r, s, a, u, f;
    try {
      if ("email" in n) {
        const { email: h, options: p } = n;
        let g = null, v = null;
        this.flowType === "pkce" && ([g, v] = await Rr(this.storage, this.storageKey));
        const { error: y } = await fe(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: h,
            data: (r = p?.data) !== null && r !== void 0 ? r : {},
            create_user: (s = p?.shouldCreateUser) !== null && s !== void 0 ? s : !0,
            gotrue_meta_security: { captcha_token: p?.captchaToken },
            code_challenge: g,
            code_challenge_method: v
          },
          redirectTo: p?.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: y };
      }
      if ("phone" in n) {
        const { phone: h, options: p } = n, { data: g, error: v } = await fe(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: h,
            data: (a = p?.data) !== null && a !== void 0 ? a : {},
            create_user: (u = p?.shouldCreateUser) !== null && u !== void 0 ? u : !0,
            gotrue_meta_security: { captcha_token: p?.captchaToken },
            channel: (f = p?.channel) !== null && f !== void 0 ? f : "sms"
          }
        });
        return { data: { user: null, session: null, messageId: g?.message_id }, error: v };
      }
      throw new us("You must provide either an email or phone number.");
    } catch (h) {
      if (ce(h))
        return { data: { user: null, session: null }, error: h };
      throw h;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(n) {
    var r, s;
    try {
      let a, u;
      "options" in n && (a = (r = n.options) === null || r === void 0 ? void 0 : r.redirectTo, u = (s = n.options) === null || s === void 0 ? void 0 : s.captchaToken);
      const { data: f, error: h } = await fe(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, n), { gotrue_meta_security: { captcha_token: u } }),
        redirectTo: a,
        xform: Sn
      });
      if (h)
        throw h;
      if (!f)
        throw new Error("An error occurred on token verification.");
      const p = f.session, g = f.user;
      return p?.access_token && (await this._saveSession(p), await this._notifyAllSubscribers(n.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", p)), { data: { user: g, session: p }, error: null };
    } catch (a) {
      if (ce(a))
        return { data: { user: null, session: null }, error: a };
      throw a;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(n) {
    var r, s, a;
    try {
      let u = null, f = null;
      return this.flowType === "pkce" && ([u, f] = await Rr(this.storage, this.storageKey)), await fe(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in n ? { provider_id: n.providerId } : null), "domain" in n ? { domain: n.domain } : null), { redirect_to: (s = (r = n.options) === null || r === void 0 ? void 0 : r.redirectTo) !== null && s !== void 0 ? s : void 0 }), !((a = n?.options) === null || a === void 0) && a.captchaToken ? { gotrue_meta_security: { captcha_token: n.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: u, code_challenge_method: f }),
        headers: this.headers,
        xform: _1
      });
    } catch (u) {
      if (ce(u))
        return { data: null, error: u };
      throw u;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (n) => {
        const { data: { session: r }, error: s } = n;
        if (s)
          throw s;
        if (!r)
          throw new Gn();
        const { error: a } = await fe(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: r.access_token
        });
        return { data: { user: null, session: null }, error: a };
      });
    } catch (n) {
      if (ce(n))
        return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(n) {
    try {
      const r = `${this.url}/resend`;
      if ("email" in n) {
        const { email: s, type: a, options: u } = n, { error: f } = await fe(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            email: s,
            type: a,
            gotrue_meta_security: { captcha_token: u?.captchaToken }
          },
          redirectTo: u?.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: f };
      } else if ("phone" in n) {
        const { phone: s, type: a, options: u } = n, { data: f, error: h } = await fe(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            phone: s,
            type: a,
            gotrue_meta_security: { captcha_token: u?.captchaToken }
          }
        });
        return { data: { user: null, session: null, messageId: f?.message_id }, error: h };
      }
      throw new us("You must provide either an email or phone number and a type");
    } catch (r) {
      if (ce(r))
        return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (r) => r));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(n, r) {
    this._debug("#_acquireLock", "begin", n);
    try {
      if (this.lockAcquired) {
        const s = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), a = (async () => (await s, await r()))();
        return this.pendingInLock.push((async () => {
          try {
            await a;
          } catch {
          }
        })()), a;
      }
      return await this.lock(`lock:${this.storageKey}`, n, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const s = r();
          for (this.pendingInLock.push((async () => {
            try {
              await s;
            } catch {
            }
          })()), await s; this.pendingInLock.length; ) {
            const a = [...this.pendingInLock];
            await Promise.all(a), this.pendingInLock.splice(0, a.length);
          }
          return await s;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(n) {
    this._debug("#_useSession", "begin");
    try {
      const r = await this.__loadSession();
      return await n(r);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let n = null;
      const r = await as(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", r), r !== null && (this._isValidSession(r) ? n = r : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !n)
        return { data: { session: null }, error: null };
      const s = n.expires_at ? n.expires_at <= Date.now() / 1e3 : !1;
      if (this._debug("#__loadSession()", `session has${s ? "" : " not"} expired`, "expires_at", n.expires_at), !s) {
        if (this.storage.isServer) {
          let f = this.suppressGetSessionWarning;
          n = new Proxy(n, {
            get: (p, g, v) => (!f && g === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), f = !0, this.suppressGetSessionWarning = !0), Reflect.get(p, g, v))
          });
        }
        return { data: { session: n }, error: null };
      }
      const { session: a, error: u } = await this._callRefreshToken(n.refresh_token);
      return u ? { data: { session: null }, error: u } : { data: { session: a }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(n) {
    return n ? await this._getUser(n) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(n) {
    try {
      return n ? await fe(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: n,
        xform: En
      }) : await this._useSession(async (r) => {
        var s, a, u;
        const { data: f, error: h } = r;
        if (h)
          throw h;
        return !(!((s = f.session) === null || s === void 0) && s.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new Gn() } : await fe(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (u = (a = f.session) === null || a === void 0 ? void 0 : a.access_token) !== null && u !== void 0 ? u : void 0,
          xform: En
        });
      });
    } catch (r) {
      if (ce(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(n, r = {}) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(n, r));
  }
  async _updateUser(n, r = {}) {
    try {
      return await this._useSession(async (s) => {
        const { data: a, error: u } = s;
        if (u)
          throw u;
        if (!a.session)
          throw new Gn();
        const f = a.session;
        let h = null, p = null;
        this.flowType === "pkce" && n.email != null && ([h, p] = await Rr(this.storage, this.storageKey));
        const { data: g, error: v } = await fe(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: r?.emailRedirectTo,
          body: Object.assign(Object.assign({}, n), { code_challenge: h, code_challenge_method: p }),
          jwt: f.access_token,
          xform: En
        });
        if (v)
          throw v;
        return f.user = g.user, await this._saveSession(f), await this._notifyAllSubscribers("USER_UPDATED", f), { data: { user: f.user }, error: null };
      });
    } catch (s) {
      if (ce(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Decodes a JWT (without performing any validation).
   */
  _decodeJWT(n) {
    return eh(n);
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(n) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(n));
  }
  async _setSession(n) {
    try {
      if (!n.access_token || !n.refresh_token)
        throw new Gn();
      const r = Date.now() / 1e3;
      let s = r, a = !0, u = null;
      const f = eh(n.access_token);
      if (f.exp && (s = f.exp, a = s <= r), a) {
        const { session: h, error: p } = await this._callRefreshToken(n.refresh_token);
        if (p)
          return { data: { user: null, session: null }, error: p };
        if (!h)
          return { data: { user: null, session: null }, error: null };
        u = h;
      } else {
        const { data: h, error: p } = await this._getUser(n.access_token);
        if (p)
          throw p;
        u = {
          access_token: n.access_token,
          refresh_token: n.refresh_token,
          user: h.user,
          token_type: "bearer",
          expires_in: s - r,
          expires_at: s
        }, await this._saveSession(u), await this._notifyAllSubscribers("SIGNED_IN", u);
      }
      return { data: { user: u.user, session: u }, error: null };
    } catch (r) {
      if (ce(r))
        return { data: { session: null, user: null }, error: r };
      throw r;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(n) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(n));
  }
  async _refreshSession(n) {
    try {
      return await this._useSession(async (r) => {
        var s;
        if (!n) {
          const { data: f, error: h } = r;
          if (h)
            throw h;
          n = (s = f.session) !== null && s !== void 0 ? s : void 0;
        }
        if (!n?.refresh_token)
          throw new Gn();
        const { session: a, error: u } = await this._callRefreshToken(n.refresh_token);
        return u ? { data: { user: null, session: null }, error: u } : a ? { data: { user: a.user, session: a }, error: null } : { data: { user: null, session: null }, error: null };
      });
    } catch (r) {
      if (ce(r))
        return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(n) {
    try {
      if (!Tt())
        throw new cs("No browser detected.");
      if (this.flowType === "implicit" && !this._isImplicitGrantFlow())
        throw new cs("Not a valid implicit grant flow url.");
      if (this.flowType == "pkce" && !n)
        throw new th("Not a valid PKCE flow url.");
      const r = Ia(window.location.href);
      if (n) {
        if (!r.code)
          throw new th("No code detected.");
        const { data: M, error: B } = await this._exchangeCodeForSession(r.code);
        if (B)
          throw B;
        const $ = new URL(window.location.href);
        return $.searchParams.delete("code"), window.history.replaceState(window.history.state, "", $.toString()), { data: { session: M.session, redirectType: null }, error: null };
      }
      if (r.error || r.error_description || r.error_code)
        throw new cs(r.error_description || "Error in URL with unspecified error_description", {
          error: r.error || "unspecified_error",
          code: r.error_code || "unspecified_code"
        });
      const { provider_token: s, provider_refresh_token: a, access_token: u, refresh_token: f, expires_in: h, expires_at: p, token_type: g } = r;
      if (!u || !h || !f || !g)
        throw new cs("No session defined in URL");
      const v = Math.round(Date.now() / 1e3), y = parseInt(h);
      let _ = v + y;
      p && (_ = parseInt(p));
      const b = _ - v;
      b * 1e3 <= Lo && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${b}s, should have been closer to ${y}s`);
      const A = _ - y;
      v - A >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", A, _, v) : v - A < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew", A, _, v);
      const { data: S, error: P } = await this._getUser(u);
      if (P)
        throw P;
      const j = {
        provider_token: s,
        provider_refresh_token: a,
        access_token: u,
        expires_in: y,
        expires_at: _,
        refresh_token: f,
        token_type: g,
        user: S.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), { data: { session: j, redirectType: r.type }, error: null };
    } catch (r) {
      if (ce(r))
        return { data: { session: null, redirectType: null }, error: r };
      throw r;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantFlow() {
    const n = Ia(window.location.href);
    return !!(Tt() && (n.access_token || n.error_description));
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCEFlow() {
    const n = Ia(window.location.href), r = await as(this.storage, `${this.storageKey}-code-verifier`);
    return !!(n.code && r);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(n = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(n));
  }
  async _signOut({ scope: n } = { scope: "global" }) {
    return await this._useSession(async (r) => {
      var s;
      const { data: a, error: u } = r;
      if (u)
        return { error: u };
      const f = (s = a.session) === null || s === void 0 ? void 0 : s.access_token;
      if (f) {
        const { error: h } = await this.admin.signOut(f, n);
        if (h && !(m1(h) && (h.status === 404 || h.status === 401 || h.status === 403)))
          return { error: h };
      }
      return n !== "others" && (await this._removeSession(), await $a(this.storage, `${this.storageKey}-code-verifier`), await this._notifyAllSubscribers("SIGNED_OUT", null)), { error: null };
    });
  }
  /**
   * Receive a notification every time an auth event happens.
   * @param callback A callback function to be invoked when an auth event happens.
   */
  onAuthStateChange(n) {
    const r = n1(), s = {
      id: r,
      callback: n,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", r), this.stateChangeEmitters.delete(r);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", r), this.stateChangeEmitters.set(r, s), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
      this._emitInitialSession(r);
    })))(), { data: { subscription: s } };
  }
  async _emitInitialSession(n) {
    return await this._useSession(async (r) => {
      var s, a;
      try {
        const { data: { session: u }, error: f } = r;
        if (f)
          throw f;
        await ((s = this.stateChangeEmitters.get(n)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", u)), this._debug("INITIAL_SESSION", "callback id", n, "session", u);
      } catch (u) {
        await ((a = this.stateChangeEmitters.get(n)) === null || a === void 0 ? void 0 : a.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", n, "error", u), console.error(u);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(n, r = {}) {
    let s = null, a = null;
    this.flowType === "pkce" && ([s, a] = await Rr(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await fe(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: n,
          code_challenge: s,
          code_challenge_method: a,
          gotrue_meta_security: { captcha_token: r.captchaToken }
        },
        headers: this.headers,
        redirectTo: r.redirectTo
      });
    } catch (u) {
      if (ce(u))
        return { data: null, error: u };
      throw u;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var n;
    try {
      const { data: r, error: s } = await this.getUser();
      if (s)
        throw s;
      return { data: { identities: (n = r.user.identities) !== null && n !== void 0 ? n : [] }, error: null };
    } catch (r) {
      if (ce(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Links an oauth identity to an existing user.
   * This method supports the PKCE flow.
   */
  async linkIdentity(n) {
    var r;
    try {
      const { data: s, error: a } = await this._useSession(async (u) => {
        var f, h, p, g, v;
        const { data: y, error: _ } = u;
        if (_)
          throw _;
        const b = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, n.provider, {
          redirectTo: (f = n.options) === null || f === void 0 ? void 0 : f.redirectTo,
          scopes: (h = n.options) === null || h === void 0 ? void 0 : h.scopes,
          queryParams: (p = n.options) === null || p === void 0 ? void 0 : p.queryParams,
          skipBrowserRedirect: !0
        });
        return await fe(this.fetch, "GET", b, {
          headers: this.headers,
          jwt: (v = (g = y.session) === null || g === void 0 ? void 0 : g.access_token) !== null && v !== void 0 ? v : void 0
        });
      });
      if (a)
        throw a;
      return Tt() && !(!((r = n.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(s?.url), { data: { provider: n.provider, url: s?.url }, error: null };
    } catch (s) {
      if (ce(s))
        return { data: { provider: n.provider, url: null }, error: s };
      throw s;
    }
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(n) {
    try {
      return await this._useSession(async (r) => {
        var s, a;
        const { data: u, error: f } = r;
        if (f)
          throw f;
        return await fe(this.fetch, "DELETE", `${this.url}/user/identities/${n.identity_id}`, {
          headers: this.headers,
          jwt: (a = (s = u.session) === null || s === void 0 ? void 0 : s.access_token) !== null && a !== void 0 ? a : void 0
        });
      });
    } catch (r) {
      if (ce(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(n) {
    const r = `#_refreshAccessToken(${n.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      const s = Date.now();
      return await s1(async (a) => (a > 0 && await i1(200 * Math.pow(2, a - 1)), this._debug(r, "refreshing attempt", a), await fe(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: n },
        headers: this.headers,
        xform: Sn
      })), (a, u) => {
        const f = 200 * Math.pow(2, a);
        return u && za(u) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + f - s < Lo;
      });
    } catch (s) {
      if (this._debug(r, "error", s), ce(s))
        return { data: { session: null, user: null }, error: s };
      throw s;
    } finally {
      this._debug(r, "end");
    }
  }
  _isValidSession(n) {
    return typeof n == "object" && n !== null && "access_token" in n && "refresh_token" in n && "expires_at" in n;
  }
  async _handleProviderSignIn(n, r) {
    const s = await this._getUrlForProvider(`${this.url}/authorize`, n, {
      redirectTo: r.redirectTo,
      scopes: r.scopes,
      queryParams: r.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", n, "options", r, "url", s), Tt() && !r.skipBrowserRedirect && window.location.assign(s), { data: { provider: n, url: s }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var n;
    const r = "#_recoverAndRefresh()";
    this._debug(r, "begin");
    try {
      const s = await as(this.storage, this.storageKey);
      if (this._debug(r, "session from storage", s), !this._isValidSession(s)) {
        this._debug(r, "session is not valid"), s !== null && await this._removeSession();
        return;
      }
      const a = Math.round(Date.now() / 1e3), u = ((n = s.expires_at) !== null && n !== void 0 ? n : 1 / 0) < a + Zf;
      if (this._debug(r, `session has${u ? "" : " not"} expired with margin of ${Zf}s`), u) {
        if (this.autoRefreshToken && s.refresh_token) {
          const { error: f } = await this._callRefreshToken(s.refresh_token);
          f && (console.error(f), za(f) || (this._debug(r, "refresh failed with a non-retryable error, removing the session", f), await this._removeSession()));
        }
      } else
        await this._notifyAllSubscribers("SIGNED_IN", s);
    } catch (s) {
      this._debug(r, "error", s), console.error(s);
      return;
    } finally {
      this._debug(r, "end");
    }
  }
  async _callRefreshToken(n) {
    var r, s;
    if (!n)
      throw new Gn();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const a = `#_callRefreshToken(${n.substring(0, 5)}...)`;
    this._debug(a, "begin");
    try {
      this.refreshingDeferred = new Os();
      const { data: u, error: f } = await this._refreshAccessToken(n);
      if (f)
        throw f;
      if (!u.session)
        throw new Gn();
      await this._saveSession(u.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", u.session);
      const h = { session: u.session, error: null };
      return this.refreshingDeferred.resolve(h), h;
    } catch (u) {
      if (this._debug(a, "error", u), ce(u)) {
        const f = { session: null, error: u };
        return za(u) || (await this._removeSession(), await this._notifyAllSubscribers("SIGNED_OUT", null)), (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(f), f;
      }
      throw (s = this.refreshingDeferred) === null || s === void 0 || s.reject(u), u;
    } finally {
      this.refreshingDeferred = null, this._debug(a, "end");
    }
  }
  async _notifyAllSubscribers(n, r, s = !0) {
    const a = `#_notifyAllSubscribers(${n})`;
    this._debug(a, "begin", r, `broadcast = ${s}`);
    try {
      this.broadcastChannel && s && this.broadcastChannel.postMessage({ event: n, session: r });
      const u = [], f = Array.from(this.stateChangeEmitters.values()).map(async (h) => {
        try {
          await h.callback(n, r);
        } catch (p) {
          u.push(p);
        }
      });
      if (await Promise.all(f), u.length > 0) {
        for (let h = 0; h < u.length; h += 1)
          console.error(u[h]);
        throw u[0];
      }
    } finally {
      this._debug(a, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(n) {
    this._debug("#_saveSession()", n), this.suppressGetSessionWarning = !0, await Vp(this.storage, this.storageKey, n);
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await $a(this.storage, this.storageKey);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const n = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      n && Tt() && window?.removeEventListener && window.removeEventListener("visibilitychange", n);
    } catch (r) {
      console.error("removing visibilitychange callback failed", r);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const n = setInterval(() => this._autoRefreshTokenTick(), Lo);
    this.autoRefreshTicker = n, n && typeof n == "object" && typeof n.unref == "function" ? n.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(n), setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const n = this.autoRefreshTicker;
    this.autoRefreshTicker = null, n && clearInterval(n);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const n = Date.now();
          try {
            return await this._useSession(async (r) => {
              const { data: { session: s } } = r;
              if (!s || !s.refresh_token || !s.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const a = Math.floor((s.expires_at * 1e3 - n) / Lo);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${a} ticks, a tick lasts ${Lo}ms, refresh threshold is ${sh} ticks`), a <= sh && await this._callRefreshToken(s.refresh_token);
            });
          } catch (r) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", r);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (n) {
      if (n.isAcquireTimeout || n instanceof Gp)
        this._debug("auto refresh token tick lock not available");
      else
        throw n;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !Tt() || !window?.addEventListener)
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window?.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (n) {
      console.error("_handleVisibilityChange", n);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(n) {
    const r = `#_onVisibilityChanged(${n})`;
    this._debug(r, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), n || (await this.initializePromise, await this._acquireLock(-1, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(r, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(n, r, s) {
    const a = [`provider=${encodeURIComponent(r)}`];
    if (s?.redirectTo && a.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`), s?.scopes && a.push(`scopes=${encodeURIComponent(s.scopes)}`), this.flowType === "pkce") {
      const [u, f] = await Rr(this.storage, this.storageKey), h = new URLSearchParams({
        code_challenge: `${encodeURIComponent(u)}`,
        code_challenge_method: `${encodeURIComponent(f)}`
      });
      a.push(h.toString());
    }
    if (s?.queryParams) {
      const u = new URLSearchParams(s.queryParams);
      a.push(u.toString());
    }
    return s?.skipBrowserRedirect && a.push(`skip_http_redirect=${s.skipBrowserRedirect}`), `${n}?${a.join("&")}`;
  }
  async _unenroll(n) {
    try {
      return await this._useSession(async (r) => {
        var s;
        const { data: a, error: u } = r;
        return u ? { data: null, error: u } : await fe(this.fetch, "DELETE", `${this.url}/factors/${n.factorId}`, {
          headers: this.headers,
          jwt: (s = a?.session) === null || s === void 0 ? void 0 : s.access_token
        });
      });
    } catch (r) {
      if (ce(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * {@see GoTrueMFAApi#enroll}
   */
  async _enroll(n) {
    try {
      return await this._useSession(async (r) => {
        var s, a;
        const { data: u, error: f } = r;
        if (f)
          return { data: null, error: f };
        const { data: h, error: p } = await fe(this.fetch, "POST", `${this.url}/factors`, {
          body: {
            friendly_name: n.friendlyName,
            factor_type: n.factorType,
            issuer: n.issuer
          },
          headers: this.headers,
          jwt: (s = u?.session) === null || s === void 0 ? void 0 : s.access_token
        });
        return p ? { data: null, error: p } : (!((a = h?.totp) === null || a === void 0) && a.qr_code && (h.totp.qr_code = `data:image/svg+xml;utf-8,${h.totp.qr_code}`), { data: h, error: null });
      });
    } catch (r) {
      if (ce(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * {@see GoTrueMFAApi#verify}
   */
  async _verify(n) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (r) => {
          var s;
          const { data: a, error: u } = r;
          if (u)
            return { data: null, error: u };
          const { data: f, error: h } = await fe(this.fetch, "POST", `${this.url}/factors/${n.factorId}/verify`, {
            body: { code: n.code, challenge_id: n.challengeId },
            headers: this.headers,
            jwt: (s = a?.session) === null || s === void 0 ? void 0 : s.access_token
          });
          return h ? { data: null, error: h } : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + f.expires_in }, f)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", f), { data: f, error: h });
        });
      } catch (r) {
        if (ce(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challenge}
   */
  async _challenge(n) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (r) => {
          var s;
          const { data: a, error: u } = r;
          return u ? { data: null, error: u } : await fe(this.fetch, "POST", `${this.url}/factors/${n.factorId}/challenge`, {
            headers: this.headers,
            jwt: (s = a?.session) === null || s === void 0 ? void 0 : s.access_token
          });
        });
      } catch (r) {
        if (ce(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(n) {
    const { data: r, error: s } = await this._challenge({
      factorId: n.factorId
    });
    return s ? { data: null, error: s } : await this._verify({
      factorId: n.factorId,
      challengeId: r.id,
      code: n.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    const { data: { user: n }, error: r } = await this.getUser();
    if (r)
      return { data: null, error: r };
    const s = n?.factors || [], a = s.filter((u) => u.factor_type === "totp" && u.status === "verified");
    return {
      data: {
        all: s,
        totp: a
      },
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(-1, async () => await this._useSession(async (n) => {
      var r, s;
      const { data: { session: a }, error: u } = n;
      if (u)
        return { data: null, error: u };
      if (!a)
        return {
          data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
          error: null
        };
      const f = this._decodeJWT(a.access_token);
      let h = null;
      f.aal && (h = f.aal);
      let p = h;
      ((s = (r = a.user.factors) === null || r === void 0 ? void 0 : r.filter((y) => y.status === "verified")) !== null && s !== void 0 ? s : []).length > 0 && (p = "aal2");
      const v = f.amr || [];
      return { data: { currentLevel: h, nextLevel: p, currentAuthenticationMethods: v }, error: null };
    }));
  }
}
Fo.nextInstanceID = 0;
const A1 = Fo;
class j1 extends A1 {
  constructor(n) {
    super(n);
  }
}
var N1 = globalThis && globalThis.__awaiter || function(i, n, r, s) {
  function a(u) {
    return u instanceof r ? u : new r(function(f) {
      f(u);
    });
  }
  return new (r || (r = Promise))(function(u, f) {
    function h(v) {
      try {
        g(s.next(v));
      } catch (y) {
        f(y);
      }
    }
    function p(v) {
      try {
        g(s.throw(v));
      } catch (y) {
        f(y);
      }
    }
    function g(v) {
      v.done ? u(v.value) : a(v.value).then(h, p);
    }
    g((s = s.apply(i, n || [])).next());
  });
};
class L1 {
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.global.fetch A custom fetch implementation.
   * @param options.global.headers Any additional headers to send with each network request.
   */
  constructor(n, r, s) {
    var a, u, f;
    if (this.supabaseUrl = n, this.supabaseKey = r, !n)
      throw new Error("supabaseUrl is required.");
    if (!r)
      throw new Error("supabaseKey is required.");
    const h = J_(n);
    this.realtimeUrl = `${h}/realtime/v1`.replace(/^http/i, "ws"), this.authUrl = `${h}/auth/v1`, this.storageUrl = `${h}/storage/v1`, this.functionsUrl = `${h}/functions/v1`;
    const p = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`, g = {
      db: W_,
      realtime: V_,
      auth: Object.assign(Object.assign({}, H_), { storageKey: p }),
      global: B_
    }, v = Y_(s ?? {}, g);
    this.storageKey = (a = v.auth.storageKey) !== null && a !== void 0 ? a : "", this.headers = (u = v.global.headers) !== null && u !== void 0 ? u : {}, this.auth = this._initSupabaseAuthClient((f = v.auth) !== null && f !== void 0 ? f : {}, this.headers, v.global.fetch), this.fetch = q_(r, this._getAccessToken.bind(this), v.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers }, v.realtime)), this.rest = new f_(`${h}/rest/v1`, {
      headers: this.headers,
      schema: v.db.schema,
      fetch: this.fetch
    }), this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new Bw(this.functionsUrl, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
   * Supabase Storage allows you to manage user-generated content, such as photos or videos.
   */
  get storage() {
    return new M_(this.storageUrl, this.headers, this.fetch);
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(n) {
    return this.rest.from(n);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.schema
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(n) {
    return this.rest.schema(n);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.rpc
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(n, r = {}, s = {}) {
    return this.rest.rpc(n, r, s);
  }
  /**
   * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
   *
   * @param {string} name - The name of the Realtime channel.
   * @param {Object} opts - The options to pass to the Realtime channel.
   *
   */
  channel(n, r = { config: {} }) {
    return this.realtime.channel(n, r);
  }
  /**
   * Returns all Realtime channels.
   */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
   * Unsubscribes and removes Realtime channel from Realtime client.
   *
   * @param {RealtimeChannel} channel - The name of the Realtime channel.
   *
   */
  removeChannel(n) {
    return this.realtime.removeChannel(n);
  }
  /**
   * Unsubscribes and removes all Realtime channels from Realtime client.
   */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var n, r;
    return N1(this, void 0, void 0, function* () {
      const { data: s } = yield this.auth.getSession();
      return (r = (n = s.session) === null || n === void 0 ? void 0 : n.access_token) !== null && r !== void 0 ? r : null;
    });
  }
  _initSupabaseAuthClient({ autoRefreshToken: n, persistSession: r, detectSessionInUrl: s, storage: a, storageKey: u, flowType: f, debug: h }, p, g) {
    var v;
    const y = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new j1({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, y), p),
      storageKey: u,
      autoRefreshToken: n,
      persistSession: r,
      detectSessionInUrl: s,
      storage: a,
      flowType: f,
      debug: h,
      fetch: g,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: (v = "Authorization" in this.headers) !== null && v !== void 0 ? v : !1
    });
  }
  _initRealtimeClient(n) {
    return new C_(this.realtimeUrl, Object.assign(Object.assign({}, n), { params: Object.assign({ apikey: this.supabaseKey }, n?.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((r, s) => {
      this._handleTokenChanged(r, "CLIENT", s?.access_token);
    });
  }
  _handleTokenChanged(n, r, s) {
    (n === "TOKEN_REFRESHED" || n === "SIGNED_IN") && this.changedAccessToken !== s ? (this.realtime.setAuth(s ?? null), this.changedAccessToken = s) : n === "SIGNED_OUT" && (this.realtime.setAuth(this.supabaseKey), r == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
}
const I1 = (i, n, r) => new L1(i, n, r), $1 = "https://vdaxfsufqqwaatyhwbwv.supabase.co", D1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkYXhmc3VmcXF3YWF0eWh3Ynd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMzk2NTgsImV4cCI6MjA1NzcxNTY1OH0.2Qn14OpL1WVS0JFMEwIMAuDQCQ8SQ04Ex_VdSV5hYhI", z1 = I1($1, D1), Qp = ({ projectId: i }) => {
  const [n, r] = C.useState(3), [s, a] = C.useState(!1), u = (h) => {
    r(h + 1);
  }, f = async (h) => {
    h.preventDefault();
    const p = h.target, g = {
      p_project_id: i,
      p_user_name: p.name.value,
      p_user_email: p.email.value,
      p_message: p.feedback.value,
      p_rating: n
    }, { data: v, error: y } = await z1.rpc(
      "add_feedback",
      g
    );
    y ? console.error("Error submitting feedback:", y) : (a(!0), console.log(v));
  };
  return /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
    /* @__PURE__ */ W.jsx("style", { children: Vf }),
    /* @__PURE__ */ W.jsx("div", { className: "widget fixed bottom-4 right-4 z-50", children: /* @__PURE__ */ W.jsxs(Iw, { children: [
      /* @__PURE__ */ W.jsx($w, { asChild: !0, children: /* @__PURE__ */ W.jsxs(Ua, { className: "rounded-full shadow-lg hover:scale-105", children: [
        /* @__PURE__ */ W.jsx(F1, { className: "mr-2 h-5 w-5" }),
        "Feedback"
      ] }) }),
      /* @__PURE__ */ W.jsxs(Ep, { className: "widget rounded-lg bg-card p-4 shadow-lg w-full max-w-md", children: [
        /* @__PURE__ */ W.jsx("style", { children: Vf }),
        s ? /* @__PURE__ */ W.jsxs("div", { children: [
          /* @__PURE__ */ W.jsx("h3", { className: "text-lg font-bold", children: "Thank you for your feedback!" }),
          /* @__PURE__ */ W.jsx("p", { className: "mt-4", children: "We appreciate your feedback. It helps us improve our product and provide better service to our customers." })
        ] }) : /* @__PURE__ */ W.jsxs("div", { children: [
          /* @__PURE__ */ W.jsx("h3", { className: "text-lg font-bold", children: "Send us your feedback" }),
          /* @__PURE__ */ W.jsxs("form", { className: "space-y-2", onSubmit: f, children: [
            /* @__PURE__ */ W.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ W.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ W.jsx(ds, { htmlFor: "name", children: "Name" }),
                /* @__PURE__ */ W.jsx(Ba, { id: "name", placeholder: "Enter your name" })
              ] }),
              /* @__PURE__ */ W.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ W.jsx(ds, { htmlFor: "email", children: "Email" }),
                /* @__PURE__ */ W.jsx(
                  Ba,
                  {
                    id: "email",
                    type: "email",
                    placeholder: "Enter your email"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ W.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ W.jsx(ds, { htmlFor: "feedback", children: "Feedback" }),
              /* @__PURE__ */ W.jsx(
                Ph,
                {
                  id: "feedback",
                  placeholder: "Tell us what you think",
                  className: "min-h-[100px]"
                }
              )
            ] }),
            /* @__PURE__ */ W.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ W.jsx("div", { className: "flex items-center gap-2", children: [...Array(5)].map((h, p) => /* @__PURE__ */ W.jsx(
                M1,
                {
                  className: `h-5 w-5 cursor-pointer ${n > p ? "fill-primary" : "fill-muted stroke-muted-foreground"}`,
                  onClick: () => u(p)
                },
                p
              )) }),
              /* @__PURE__ */ W.jsx(Ua, { type: "submit", children: "Submit" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ W.jsx(Rh, { className: "my-4" })
      ] })
    ] }) })
  ] });
};
Qp.propTypes = {
  projectId: lv.string.isRequired
};
function M1(i) {
  return /* @__PURE__ */ W.jsx(
    "svg",
    {
      ...i,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ W.jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
    }
  );
}
function F1(i) {
  return /* @__PURE__ */ W.jsx(
    "svg",
    {
      ...i,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "lucide lucide-message-circle",
      children: /* @__PURE__ */ W.jsx("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" })
    }
  );
}
const U1 = (i) => i.replace(/-([a-z])/g, (n, r) => r.toUpperCase());
class qp extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const n = this.getPropsFromAttributes();
    console.log("Widget props:", n), fh(this.shadowRoot).render(/* @__PURE__ */ W.jsx(Qp, { ...n }));
  }
  getPropsFromAttributes() {
    const n = {};
    for (const { name: r, value: s } of this.attributes)
      n[U1(r)] = s;
    return n;
  }
}
customElements.get("my-widget") || customElements.define("my-widget", qp);
customElements.define("my-widget", qp);
export {
  Za as g
};
