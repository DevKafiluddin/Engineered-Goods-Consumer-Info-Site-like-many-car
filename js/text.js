var mh = e => {
    throw TypeError(e)
}
;
var Bl = (e, t, n) => t.has(e) || mh("Cannot " + n);
var R = (e, t, n) => (Bl(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , J = (e, t, n) => t.has(e) ? mh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , H = (e, t, n, r) => (Bl(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , je = (e, t, n) => (Bl(e, t, "access private method"),
n);
var To = (e, t, n, r) => ({
    set _(i) {
        H(e, t, i, n)
    },
    get _() {
        return R(e, t, r)
    }
});
function k1(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, i);
                    s && Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
function Og(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Ig = {
    exports: {}
}
  , sl = {}
  , Vg = {
    exports: {}
}
  , X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ao = Symbol.for("react.element")
  , R1 = Symbol.for("react.portal")
  , A1 = Symbol.for("react.fragment")
  , N1 = Symbol.for("react.strict_mode")
  , M1 = Symbol.for("react.profiler")
  , D1 = Symbol.for("react.provider")
  , j1 = Symbol.for("react.context")
  , L1 = Symbol.for("react.forward_ref")
  , O1 = Symbol.for("react.suspense")
  , I1 = Symbol.for("react.memo")
  , V1 = Symbol.for("react.lazy")
  , gh = Symbol.iterator;
function F1(e) {
    return e === null || typeof e != "object" ? null : (e = gh && e[gh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Fg = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , _g = Object.assign
  , zg = {};
function Ui(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = zg,
    this.updater = n || Fg
}
Ui.prototype.isReactComponent = {};
Ui.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Ui.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Bg() {}
Bg.prototype = Ui.prototype;
function yd(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = zg,
    this.updater = n || Fg
}
var vd = yd.prototype = new Bg;
vd.constructor = yd;
_g(vd, Ui.prototype);
vd.isPureReactComponent = !0;
var yh = Array.isArray
  , $g = Object.prototype.hasOwnProperty
  , xd = {
    current: null
}
  , Ug = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Wg(e, t, n) {
    var r, i = {}, s = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            $g.call(t, r) && !Ug.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: ao,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: xd.current
    }
}
function _1(e, t) {
    return {
        $$typeof: ao,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function wd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ao
}
function z1(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var vh = /\/+/g;
function $l(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? z1("" + e.key) : t.toString(36)
}
function Zo(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ao:
            case R1:
                o = !0
            }
        }
    if (o)
        return o = e,
        i = i(o),
        e = r === "" ? "." + $l(o, 0) : r,
        yh(i) ? (n = "",
        e != null && (n = e.replace(vh, "$&/") + "/"),
        Zo(i, t, n, "", function(u) {
            return u
        })) : i != null && (wd(i) && (i = _1(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(vh, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    yh(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + $l(s, a);
            o += Zo(s, t, n, l, i)
        }
    else if (l = F1(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(s = e.next()).done; )
            s = s.value,
            l = r + $l(s, a++),
            o += Zo(s, t, n, l, i);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function bo(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Zo(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }),
    r
}
function B1(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ke = {
    current: null
}
  , Jo = {
    transition: null
}
  , $1 = {
    ReactCurrentDispatcher: Ke,
    ReactCurrentBatchConfig: Jo,
    ReactCurrentOwner: xd
};
function Hg() {
    throw Error("act(...) is not supported in production builds of React.")
}
X.Children = {
    map: bo,
    forEach: function(e, t, n) {
        bo(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return bo(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return bo(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!wd(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
X.Component = Ui;
X.Fragment = A1;
X.Profiler = M1;
X.PureComponent = yd;
X.StrictMode = N1;
X.Suspense = O1;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $1;
X.act = Hg;
X.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = _g({}, e.props)
      , i = e.key
      , s = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        o = xd.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            $g.call(t, l) && !Ug.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: ao,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
}
;
X.createContext = function(e) {
    return e = {
        $$typeof: j1,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: D1,
        _context: e
    },
    e.Consumer = e
}
;
X.createElement = Wg;
X.createFactory = function(e) {
    var t = Wg.bind(null, e);
    return t.type = e,
    t
}
;
X.createRef = function() {
    return {
        current: null
    }
}
;
X.forwardRef = function(e) {
    return {
        $$typeof: L1,
        render: e
    }
}
;
X.isValidElement = wd;
X.lazy = function(e) {
    return {
        $$typeof: V1,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: B1
    }
}
;
X.memo = function(e, t) {
    return {
        $$typeof: I1,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
X.startTransition = function(e) {
    var t = Jo.transition;
    Jo.transition = {};
    try {
        e()
    } finally {
        Jo.transition = t
    }
}
;
X.unstable_act = Hg;
X.useCallback = function(e, t) {
    return Ke.current.useCallback(e, t)
}
;
X.useContext = function(e) {
    return Ke.current.useContext(e)
}
;
X.useDebugValue = function() {}
;
X.useDeferredValue = function(e) {
    return Ke.current.useDeferredValue(e)
}
;
X.useEffect = function(e, t) {
    return Ke.current.useEffect(e, t)
}
;
X.useId = function() {
    return Ke.current.useId()
}
;
X.useImperativeHandle = function(e, t, n) {
    return Ke.current.useImperativeHandle(e, t, n)
}
;
X.useInsertionEffect = function(e, t) {
    return Ke.current.useInsertionEffect(e, t)
}
;
X.useLayoutEffect = function(e, t) {
    return Ke.current.useLayoutEffect(e, t)
}
;
X.useMemo = function(e, t) {
    return Ke.current.useMemo(e, t)
}
;
X.useReducer = function(e, t, n) {
    return Ke.current.useReducer(e, t, n)
}
;
X.useRef = function(e) {
    return Ke.current.useRef(e)
}
;
X.useState = function(e) {
    return Ke.current.useState(e)
}
;
X.useSyncExternalStore = function(e, t, n) {
    return Ke.current.useSyncExternalStore(e, t, n)
}
;
X.useTransition = function() {
    return Ke.current.useTransition()
}
;
X.version = "18.3.1";
Vg.exports = X;
var w = Vg.exports;
const j = Og(w)
  , Kg = k1({
    __proto__: null,
    default: j
}, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U1 = w
  , W1 = Symbol.for("react.element")
  , H1 = Symbol.for("react.fragment")
  , K1 = Object.prototype.hasOwnProperty
  , G1 = U1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Q1 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Gg(e, t, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        K1.call(t, r) && !Q1.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: W1,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: G1.current
    }
}
sl.Fragment = H1;
sl.jsx = Gg;
sl.jsxs = Gg;
Ig.exports = sl;
var S = Ig.exports
  , Qg = {
    exports: {}
}
  , at = {}
  , Yg = {
    exports: {}
}
  , Xg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(k, A) {
        var O = k.length;
        k.push(A);
        e: for (; 0 < O; ) {
            var U = O - 1 >>> 1
              , B = k[U];
            if (0 < i(B, A))
                k[U] = A,
                k[O] = B,
                O = U;
            else
                break e
        }
    }
    function n(k) {
        return k.length === 0 ? null : k[0]
    }
    function r(k) {
        if (k.length === 0)
            return null;
        var A = k[0]
          , O = k.pop();
        if (O !== A) {
            k[0] = O;
            e: for (var U = 0, B = k.length, Y = B >>> 1; U < Y; ) {
                var q = 2 * (U + 1) - 1
                  , ve = k[q]
                  , De = q + 1
                  , ee = k[De];
                if (0 > i(ve, O))
                    De < B && 0 > i(ee, ve) ? (k[U] = ee,
                    k[De] = O,
                    U = De) : (k[U] = ve,
                    k[q] = O,
                    U = q);
                else if (De < B && 0 > i(ee, O))
                    k[U] = ee,
                    k[De] = O,
                    U = De;
                else
                    break e
            }
        }
        return A
    }
    function i(k, A) {
        var O = k.sortIndex - A.sortIndex;
        return O !== 0 ? O : k.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
          , a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , d = null
      , f = 3
      , h = !1
      , v = !1
      , g = !1
      , x = typeof setTimeout == "function" ? setTimeout : null
      , p = typeof clearTimeout == "function" ? clearTimeout : null
      , m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(k) {
        for (var A = n(u); A !== null; ) {
            if (A.callback === null)
                r(u);
            else if (A.startTime <= k)
                r(u),
                A.sortIndex = A.expirationTime,
                t(l, A);
            else
                break;
            A = n(u)
        }
    }
    function C(k) {
        if (g = !1,
        y(k),
        !v)
            if (n(l) !== null)
                v = !0,
                $(E);
            else {
                var A = n(u);
                A !== null && _(C, A.startTime - k)
            }
    }
    function E(k, A) {
        v = !1,
        g && (g = !1,
        p(b),
        b = -1),
        h = !0;
        var O = f;
        try {
            for (y(A),
            d = n(l); d !== null && (!(d.expirationTime > A) || k && !z()); ) {
                var U = d.callback;
                if (typeof U == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var B = U(d.expirationTime <= A);
                    A = e.unstable_now(),
                    typeof B == "function" ? d.callback = B : d === n(l) && r(l),
                    y(A)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var Y = !0;
            else {
                var q = n(u);
                q !== null && _(C, q.startTime - A),
                Y = !1
            }
            return Y
        } finally {
            d = null,
            f = O,
            h = !1
        }
    }
    var P = !1
      , T = null
      , b = -1
      , N = 5
      , M = -1;
    function z() {
        return !(e.unstable_now() - M < N)
    }
    function I() {
        if (T !== null) {
            var k = e.unstable_now();
            M = k;
            var A = !0;
            try {
                A = T(!0, k)
            } finally {
                A ? K() : (P = !1,
                T = null)
            }
        } else
            P = !1
    }
    var K;
    if (typeof m == "function")
        K = function() {
            m(I)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var L = new MessageChannel
          , Q = L.port2;
        L.port1.onmessage = I,
        K = function() {
            Q.postMessage(null)
        }
    } else
        K = function() {
            x(I, 0)
        }
        ;
    function $(k) {
        T = k,
        P || (P = !0,
        K())
    }
    function _(k, A) {
        b = x(function() {
            k(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(k) {
        k.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || h || (v = !0,
        $(E))
    }
    ,
    e.unstable_forceFrameRate = function(k) {
        0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < k ? Math.floor(1e3 / k) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(k) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var A = 3;
            break;
        default:
            A = f
        }
        var O = f;
        f = A;
        try {
            return k()
        } finally {
            f = O
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(k, A) {
        switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            k = 3
        }
        var O = f;
        f = k;
        try {
            return A()
        } finally {
            f = O
        }
    }
    ,
    e.unstable_scheduleCallback = function(k, A, O) {
        var U = e.unstable_now();
        switch (typeof O == "object" && O !== null ? (O = O.delay,
        O = typeof O == "number" && 0 < O ? U + O : U) : O = U,
        k) {
        case 1:
            var B = -1;
            break;
        case 2:
            B = 250;
            break;
        case 5:
            B = 1073741823;
            break;
        case 4:
            B = 1e4;
            break;
        default:
            B = 5e3
        }
        return B = O + B,
        k = {
            id: c++,
            callback: A,
            priorityLevel: k,
            startTime: O,
            expirationTime: B,
            sortIndex: -1
        },
        O > U ? (k.sortIndex = O,
        t(u, k),
        n(l) === null && k === n(u) && (g ? (p(b),
        b = -1) : g = !0,
        _(C, O - U))) : (k.sortIndex = B,
        t(l, k),
        v || h || (v = !0,
        $(E))),
        k
    }
    ,
    e.unstable_shouldYield = z,
    e.unstable_wrapCallback = function(k) {
        var A = f;
        return function() {
            var O = f;
            f = A;
            try {
                return k.apply(this, arguments)
            } finally {
                f = O
            }
        }
    }
}
)(Xg);
Yg.exports = Xg;
var Y1 = Yg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X1 = w
  , ot = Y1;
function D(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var qg = new Set
  , Ms = {};
function zr(e, t) {
    Di(e, t),
    Di(e + "Capture", t)
}
function Di(e, t) {
    for (Ms[e] = t,
    e = 0; e < t.length; e++)
        qg.add(t[e])
}
var dn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , _u = Object.prototype.hasOwnProperty
  , q1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , xh = {}
  , wh = {};
function Z1(e) {
    return _u.call(wh, e) ? !0 : _u.call(xh, e) ? !1 : q1.test(e) ? wh[e] = !0 : (xh[e] = !0,
    !1)
}
function J1(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function eS(e, t, n, r) {
    if (t === null || typeof t > "u" || J1(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ge(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var Me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Me[e] = new Ge(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Me[t] = new Ge(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Me[e] = new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Me[e] = new Ge(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Me[e] = new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Me[e] = new Ge(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Me[e] = new Ge(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Me[e] = new Ge(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Me[e] = new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Sd = /[\-:]([a-z])/g;
function Cd(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Sd, Cd);
    Me[t] = new Ge(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Sd, Cd);
    Me[t] = new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Sd, Cd);
    Me[t] = new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Me[e] = new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Me.xlinkHref = new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Me[e] = new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Ed(e, t, n, r) {
    var i = Me.hasOwnProperty(t) ? Me[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (eS(t, n, i, r) && (n = null),
    r || i === null ? Z1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var vn = X1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ko = Symbol.for("react.element")
  , Zr = Symbol.for("react.portal")
  , Jr = Symbol.for("react.fragment")
  , Pd = Symbol.for("react.strict_mode")
  , zu = Symbol.for("react.profiler")
  , Zg = Symbol.for("react.provider")
  , Jg = Symbol.for("react.context")
  , Td = Symbol.for("react.forward_ref")
  , Bu = Symbol.for("react.suspense")
  , $u = Symbol.for("react.suspense_list")
  , bd = Symbol.for("react.memo")
  , Mn = Symbol.for("react.lazy")
  , ey = Symbol.for("react.offscreen")
  , Sh = Symbol.iterator;
function ts(e) {
    return e === null || typeof e != "object" ? null : (e = Sh && e[Sh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var pe = Object.assign, Ul;
function fs(e) {
    if (Ul === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ul = t && t[1] || ""
        }
    return `
` + Ul + e
}
var Wl = !1;
function Hl(e, t) {
    if (!e || Wl)
        return "";
    Wl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (i[o] !== s[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || i[o] !== s[a]) {
                                var l = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        Wl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? fs(e) : ""
}
function tS(e) {
    switch (e.tag) {
    case 5:
        return fs(e.type);
    case 16:
        return fs("Lazy");
    case 13:
        return fs("Suspense");
    case 19:
        return fs("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Hl(e.type, !1),
        e;
    case 11:
        return e = Hl(e.type.render, !1),
        e;
    case 1:
        return e = Hl(e.type, !0),
        e;
    default:
        return ""
    }
}
function Uu(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Jr:
        return "Fragment";
    case Zr:
        return "Portal";
    case zu:
        return "Profiler";
    case Pd:
        return "StrictMode";
    case Bu:
        return "Suspense";
    case $u:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Jg:
            return (e.displayName || "Context") + ".Consumer";
        case Zg:
            return (e._context.displayName || "Context") + ".Provider";
        case Td:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case bd:
            return t = e.displayName || null,
            t !== null ? t : Uu(e.type) || "Memo";
        case Mn:
            t = e._payload,
            e = e._init;
            try {
                return Uu(e(t))
            } catch {}
        }
    return null
}
function nS(e) {
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
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
        return Uu(t);
    case 8:
        return t === Pd ? "StrictMode" : "Mode";
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
            return t
    }
    return null
}
function Jn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function ty(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function rS(e) {
    var t = ty(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                s.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Ro(e) {
    e._valueTracker || (e._valueTracker = rS(e))
}
function ny(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = ty(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function xa(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Wu(e, t) {
    var n = t.checked;
    return pe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Ch(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Jn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function ry(e, t) {
    t = t.checked,
    t != null && Ed(e, "checked", t, !1)
}
function Hu(e, t) {
    ry(e, t);
    var n = Jn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ku(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ku(e, t.type, Jn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Eh(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Ku(e, t, n) {
    (t !== "number" || xa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var hs = Array.isArray;
function mi(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Jn(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Gu(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(D(91));
    return pe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ph(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(D(92));
            if (hs(n)) {
                if (1 < n.length)
                    throw Error(D(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Jn(n)
    }
}
function iy(e, t) {
    var n = Jn(t.value)
      , r = Jn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Th(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function sy(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Qu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? sy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ao, oy = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Ao = Ao || document.createElement("div"),
        Ao.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ao.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ds(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ys = {
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
}
  , iS = ["Webkit", "ms", "Moz", "O"];
Object.keys(ys).forEach(function(e) {
    iS.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        ys[t] = ys[e]
    })
});
function ay(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ys.hasOwnProperty(e) && ys[e] ? ("" + t).trim() : t + "px"
}
function ly(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = ay(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var sS = pe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Yu(e, t) {
    if (t) {
        if (sS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(D(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(D(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(D(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(D(62))
    }
}
function Xu(e, t) {
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
        return !0
    }
}
var qu = null;
function kd(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Zu = null
  , gi = null
  , yi = null;
function bh(e) {
    if (e = co(e)) {
        if (typeof Zu != "function")
            throw Error(D(280));
        var t = e.stateNode;
        t && (t = cl(t),
        Zu(e.stateNode, e.type, t))
    }
}
function uy(e) {
    gi ? yi ? yi.push(e) : yi = [e] : gi = e
}
function cy() {
    if (gi) {
        var e = gi
          , t = yi;
        if (yi = gi = null,
        bh(e),
        t)
            for (e = 0; e < t.length; e++)
                bh(t[e])
    }
}
function dy(e, t) {
    return e(t)
}
function fy() {}
var Kl = !1;
function hy(e, t, n) {
    if (Kl)
        return e(t, n);
    Kl = !0;
    try {
        return dy(e, t, n)
    } finally {
        Kl = !1,
        (gi !== null || yi !== null) && (fy(),
        cy())
    }
}
function js(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = cl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(D(231, t, typeof n));
    return n
}
var Ju = !1;
if (dn)
    try {
        var ns = {};
        Object.defineProperty(ns, "passive", {
            get: function() {
                Ju = !0
            }
        }),
        window.addEventListener("test", ns, ns),
        window.removeEventListener("test", ns, ns)
    } catch {
        Ju = !1
    }
function oS(e, t, n, r, i, s, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var vs = !1
  , wa = null
  , Sa = !1
  , ec = null
  , aS = {
    onError: function(e) {
        vs = !0,
        wa = e
    }
};
function lS(e, t, n, r, i, s, o, a, l) {
    vs = !1,
    wa = null,
    oS.apply(aS, arguments)
}
function uS(e, t, n, r, i, s, o, a, l) {
    if (lS.apply(this, arguments),
    vs) {
        if (vs) {
            var u = wa;
            vs = !1,
            wa = null
        } else
            throw Error(D(198));
        Sa || (Sa = !0,
        ec = u)
    }
}
function Br(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function py(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function kh(e) {
    if (Br(e) !== e)
        throw Error(D(188))
}
function cS(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Br(e),
        t === null)
            throw Error(D(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s; ) {
                if (s === n)
                    return kh(i),
                    e;
                if (s === r)
                    return kh(i),
                    t;
                s = s.sibling
            }
            throw Error(D(188))
        }
        if (n.return !== r.return)
            n = i,
            r = s;
        else {
            for (var o = !1, a = i.child; a; ) {
                if (a === n) {
                    o = !0,
                    n = i,
                    r = s;
                    break
                }
                if (a === r) {
                    o = !0,
                    r = i,
                    n = s;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = s.child; a; ) {
                    if (a === n) {
                        o = !0,
                        n = s,
                        r = i;
                        break
                    }
                    if (a === r) {
                        o = !0,
                        r = s,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(D(189))
            }
        }
        if (n.alternate !== r)
            throw Error(D(190))
    }
    if (n.tag !== 3)
        throw Error(D(188));
    return n.stateNode.current === n ? e : t
}
function my(e) {
    return e = cS(e),
    e !== null ? gy(e) : null
}
function gy(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = gy(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var yy = ot.unstable_scheduleCallback
  , Rh = ot.unstable_cancelCallback
  , dS = ot.unstable_shouldYield
  , fS = ot.unstable_requestPaint
  , ye = ot.unstable_now
  , hS = ot.unstable_getCurrentPriorityLevel
  , Rd = ot.unstable_ImmediatePriority
  , vy = ot.unstable_UserBlockingPriority
  , Ca = ot.unstable_NormalPriority
  , pS = ot.unstable_LowPriority
  , xy = ot.unstable_IdlePriority
  , ol = null
  , Qt = null;
function mS(e) {
    if (Qt && typeof Qt.onCommitFiberRoot == "function")
        try {
            Qt.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var jt = Math.clz32 ? Math.clz32 : vS
  , gS = Math.log
  , yS = Math.LN2;
function vS(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (gS(e) / yS | 0) | 0
}
var No = 64
  , Mo = 4194304;
function ps(e) {
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
        return e
    }
}
function Ea(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , s = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? r = ps(a) : (s &= o,
        s !== 0 && (r = ps(s)))
    } else
        o = n & ~i,
        o !== 0 ? r = ps(o) : s !== 0 && (r = ps(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    s = t & -t,
    i >= s || i === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - jt(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function xS(e, t) {
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
        return -1
    }
}
function wS(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var o = 31 - jt(s)
          , a = 1 << o
          , l = i[o];
        l === -1 ? (!(a & n) || a & r) && (i[o] = xS(a, t)) : l <= t && (e.expiredLanes |= a),
        s &= ~a
    }
}
function tc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function wy() {
    var e = No;
    return No <<= 1,
    !(No & 4194240) && (No = 64),
    e
}
function Gl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function lo(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - jt(t),
    e[t] = n
}
function SS(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - jt(n)
          , s = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~s
    }
}
function Ad(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - jt(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var te = 0;
function Sy(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Cy, Nd, Ey, Py, Ty, nc = !1, Do = [], Wn = null, Hn = null, Kn = null, Ls = new Map, Os = new Map, jn = [], CS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ah(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Wn = null;
        break;
    case "dragenter":
    case "dragleave":
        Hn = null;
        break;
    case "mouseover":
    case "mouseout":
        Kn = null;
        break;
    case "pointerover":
    case "pointerout":
        Ls.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Os.delete(t.pointerId)
    }
}
function rs(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
    t !== null && (t = co(t),
    t !== null && Nd(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function ES(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Wn = rs(Wn, e, t, n, r, i),
        !0;
    case "dragenter":
        return Hn = rs(Hn, e, t, n, r, i),
        !0;
    case "mouseover":
        return Kn = rs(Kn, e, t, n, r, i),
        !0;
    case "pointerover":
        var s = i.pointerId;
        return Ls.set(s, rs(Ls.get(s) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return s = i.pointerId,
        Os.set(s, rs(Os.get(s) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function by(e) {
    var t = xr(e.target);
    if (t !== null) {
        var n = Br(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = py(n),
                t !== null) {
                    e.blockedOn = t,
                    Ty(e.priority, function() {
                        Ey(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ea(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = rc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            qu = r,
            n.target.dispatchEvent(r),
            qu = null
        } else
            return t = co(n),
            t !== null && Nd(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Nh(e, t, n) {
    ea(e) && n.delete(t)
}
function PS() {
    nc = !1,
    Wn !== null && ea(Wn) && (Wn = null),
    Hn !== null && ea(Hn) && (Hn = null),
    Kn !== null && ea(Kn) && (Kn = null),
    Ls.forEach(Nh),
    Os.forEach(Nh)
}
function is(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    nc || (nc = !0,
    ot.unstable_scheduleCallback(ot.unstable_NormalPriority, PS)))
}
function Is(e) {
    function t(i) {
        return is(i, e)
    }
    if (0 < Do.length) {
        is(Do[0], e);
        for (var n = 1; n < Do.length; n++) {
            var r = Do[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Wn !== null && is(Wn, e),
    Hn !== null && is(Hn, e),
    Kn !== null && is(Kn, e),
    Ls.forEach(t),
    Os.forEach(t),
    n = 0; n < jn.length; n++)
        r = jn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < jn.length && (n = jn[0],
    n.blockedOn === null); )
        by(n),
        n.blockedOn === null && jn.shift()
}
var vi = vn.ReactCurrentBatchConfig
  , Pa = !0;
function TS(e, t, n, r) {
    var i = te
      , s = vi.transition;
    vi.transition = null;
    try {
        te = 1,
        Md(e, t, n, r)
    } finally {
        te = i,
        vi.transition = s
    }
}
function bS(e, t, n, r) {
    var i = te
      , s = vi.transition;
    vi.transition = null;
    try {
        te = 4,
        Md(e, t, n, r)
    } finally {
        te = i,
        vi.transition = s
    }
}
function Md(e, t, n, r) {
    if (Pa) {
        var i = rc(e, t, n, r);
        if (i === null)
            ru(e, t, r, Ta, n),
            Ah(e, r);
        else if (ES(i, e, t, n, r))
            r.stopPropagation();
        else if (Ah(e, r),
        t & 4 && -1 < CS.indexOf(e)) {
            for (; i !== null; ) {
                var s = co(i);
                if (s !== null && Cy(s),
                s = rc(e, t, n, r),
                s === null && ru(e, t, r, Ta, n),
                s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            ru(e, t, r, null, n)
    }
}
var Ta = null;
function rc(e, t, n, r) {
    if (Ta = null,
    e = kd(r),
    e = xr(e),
    e !== null)
        if (t = Br(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = py(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ta = e,
    null
}
function ky(e) {
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
        switch (hS()) {
        case Rd:
            return 1;
        case vy:
            return 4;
        case Ca:
        case pS:
            return 16;
        case xy:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var zn = null
  , Dd = null
  , ta = null;
function Ry() {
    if (ta)
        return ta;
    var e, t = Dd, n = t.length, r, i = "value"in zn ? zn.value : zn.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
        ;
    return ta = i.slice(e, 1 < r ? 1 - r : void 0)
}
function na(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function jo() {
    return !0
}
function Mh() {
    return !1
}
function lt(e) {
    function t(n, r, i, s, o) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = s,
        this.target = o,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? jo : Mh,
        this.isPropagationStopped = Mh,
        this
    }
    return pe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = jo)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = jo)
        },
        persist: function() {},
        isPersistent: jo
    }),
    t
}
var Wi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, jd = lt(Wi), uo = pe({}, Wi, {
    view: 0,
    detail: 0
}), kS = lt(uo), Ql, Yl, ss, al = pe({}, uo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ld,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== ss && (ss && e.type === "mousemove" ? (Ql = e.screenX - ss.screenX,
        Yl = e.screenY - ss.screenY) : Yl = Ql = 0,
        ss = e),
        Ql)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Yl
    }
}), Dh = lt(al), RS = pe({}, al, {
    dataTransfer: 0
}), AS = lt(RS), NS = pe({}, uo, {
    relatedTarget: 0
}), Xl = lt(NS), MS = pe({}, Wi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), DS = lt(MS), jS = pe({}, Wi, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), LS = lt(jS), OS = pe({}, Wi, {
    data: 0
}), jh = lt(OS), IS = {
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
}, VS = {
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
}, FS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function _S(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = FS[e]) ? !!t[e] : !1
}
function Ld() {
    return _S
}
var zS = pe({}, uo, {
    key: function(e) {
        if (e.key) {
            var t = IS[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = na(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? VS[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ld,
    charCode: function(e) {
        return e.type === "keypress" ? na(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? na(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , BS = lt(zS)
  , $S = pe({}, al, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Lh = lt($S)
  , US = pe({}, uo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ld
})
  , WS = lt(US)
  , HS = pe({}, Wi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , KS = lt(HS)
  , GS = pe({}, al, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , QS = lt(GS)
  , YS = [9, 13, 27, 32]
  , Od = dn && "CompositionEvent"in window
  , xs = null;
dn && "documentMode"in document && (xs = document.documentMode);
var XS = dn && "TextEvent"in window && !xs
  , Ay = dn && (!Od || xs && 8 < xs && 11 >= xs)
  , Oh = " "
  , Ih = !1;
function Ny(e, t) {
    switch (e) {
    case "keyup":
        return YS.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function My(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ei = !1;
function qS(e, t) {
    switch (e) {
    case "compositionend":
        return My(t);
    case "keypress":
        return t.which !== 32 ? null : (Ih = !0,
        Oh);
    case "textInput":
        return e = t.data,
        e === Oh && Ih ? null : e;
    default:
        return null
    }
}
function ZS(e, t) {
    if (ei)
        return e === "compositionend" || !Od && Ny(e, t) ? (e = Ry(),
        ta = Dd = zn = null,
        ei = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Ay && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var JS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Vh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!JS[e.type] : t === "textarea"
}
function Dy(e, t, n, r) {
    uy(r),
    t = ba(t, "onChange"),
    0 < t.length && (n = new jd("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var ws = null
  , Vs = null;
function eC(e) {
    Uy(e, 0)
}
function ll(e) {
    var t = ri(e);
    if (ny(t))
        return e
}
function tC(e, t) {
    if (e === "change")
        return t
}
var jy = !1;
if (dn) {
    var ql;
    if (dn) {
        var Zl = "oninput"in document;
        if (!Zl) {
            var Fh = document.createElement("div");
            Fh.setAttribute("oninput", "return;"),
            Zl = typeof Fh.oninput == "function"
        }
        ql = Zl
    } else
        ql = !1;
    jy = ql && (!document.documentMode || 9 < document.documentMode)
}
function _h() {
    ws && (ws.detachEvent("onpropertychange", Ly),
    Vs = ws = null)
}
function Ly(e) {
    if (e.propertyName === "value" && ll(Vs)) {
        var t = [];
        Dy(t, Vs, e, kd(e)),
        hy(eC, t)
    }
}
function nC(e, t, n) {
    e === "focusin" ? (_h(),
    ws = t,
    Vs = n,
    ws.attachEvent("onpropertychange", Ly)) : e === "focusout" && _h()
}
function rC(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ll(Vs)
}
function iC(e, t) {
    if (e === "click")
        return ll(t)
}
function sC(e, t) {
    if (e === "input" || e === "change")
        return ll(t)
}
function oC(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ot = typeof Object.is == "function" ? Object.is : oC;
function Fs(e, t) {
    if (Ot(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!_u.call(t, i) || !Ot(e[i], t[i]))
            return !1
    }
    return !0
}
function zh(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Bh(e, t) {
    var n = zh(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = zh(n)
    }
}
function Oy(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Oy(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Iy() {
    for (var e = window, t = xa(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = xa(e.document)
    }
    return t
}
function Id(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function aC(e) {
    var t = Iy()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Oy(n.ownerDocument.documentElement, n)) {
        if (r !== null && Id(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                !e.extend && s > r && (i = r,
                r = s,
                s = i),
                i = Bh(n, s);
                var o = Bh(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var lC = dn && "documentMode"in document && 11 >= document.documentMode
  , ti = null
  , ic = null
  , Ss = null
  , sc = !1;
function $h(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    sc || ti == null || ti !== xa(r) || (r = ti,
    "selectionStart"in r && Id(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ss && Fs(Ss, r) || (Ss = r,
    r = ba(ic, "onSelect"),
    0 < r.length && (t = new jd("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = ti)))
}
function Lo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var ni = {
    animationend: Lo("Animation", "AnimationEnd"),
    animationiteration: Lo("Animation", "AnimationIteration"),
    animationstart: Lo("Animation", "AnimationStart"),
    transitionend: Lo("Transition", "TransitionEnd")
}
  , Jl = {}
  , Vy = {};
dn && (Vy = document.createElement("div").style,
"AnimationEvent"in window || (delete ni.animationend.animation,
delete ni.animationiteration.animation,
delete ni.animationstart.animation),
"TransitionEvent"in window || delete ni.transitionend.transition);
function ul(e) {
    if (Jl[e])
        return Jl[e];
    if (!ni[e])
        return e;
    var t = ni[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Vy)
            return Jl[e] = t[n];
    return e
}
var Fy = ul("animationend")
  , _y = ul("animationiteration")
  , zy = ul("animationstart")
  , By = ul("transitionend")
  , $y = new Map
  , Uh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ar(e, t) {
    $y.set(e, t),
    zr(t, [e])
}
for (var eu = 0; eu < Uh.length; eu++) {
    var tu = Uh[eu]
      , uC = tu.toLowerCase()
      , cC = tu[0].toUpperCase() + tu.slice(1);
    ar(uC, "on" + cC)
}
ar(Fy, "onAnimationEnd");
ar(_y, "onAnimationIteration");
ar(zy, "onAnimationStart");
ar("dblclick", "onDoubleClick");
ar("focusin", "onFocus");
ar("focusout", "onBlur");
ar(By, "onTransitionEnd");
Di("onMouseEnter", ["mouseout", "mouseover"]);
Di("onMouseLeave", ["mouseout", "mouseover"]);
Di("onPointerEnter", ["pointerout", "pointerover"]);
Di("onPointerLeave", ["pointerout", "pointerover"]);
zr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ms = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , dC = new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));
function Wh(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    uS(r, t, void 0, e),
    e.currentTarget = null
}
function Uy(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== s && i.isPropagationStopped())
                        break e;
                    Wh(i, a, u),
                    s = l
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== s && i.isPropagationStopped())
                        break e;
                    Wh(i, a, u),
                    s = l
                }
        }
    }
    if (Sa)
        throw e = ec,
        Sa = !1,
        ec = null,
        e
}
function oe(e, t) {
    var n = t[cc];
    n === void 0 && (n = t[cc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Wy(t, e, 2, !1),
    n.add(r))
}
function nu(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Wy(n, e, r, t)
}
var Oo = "_reactListening" + Math.random().toString(36).slice(2);
function _s(e) {
    if (!e[Oo]) {
        e[Oo] = !0,
        qg.forEach(function(n) {
            n !== "selectionchange" && (dC.has(n) || nu(n, !1, e),
            nu(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Oo] || (t[Oo] = !0,
        nu("selectionchange", !1, t))
    }
}
function Wy(e, t, n, r) {
    switch (ky(t)) {
    case 1:
        var i = TS;
        break;
    case 4:
        i = bS;
        break;
    default:
        i = Md
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Ju || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function ru(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var l = o.tag;
                        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = xr(a),
                    o === null)
                        return;
                    if (l = o.tag,
                    l === 5 || l === 6) {
                        r = s = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    hy(function() {
        var u = s
          , c = kd(n)
          , d = [];
        e: {
            var f = $y.get(e);
            if (f !== void 0) {
                var h = jd
                  , v = e;
                switch (e) {
                case "keypress":
                    if (na(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = BS;
                    break;
                case "focusin":
                    v = "focus",
                    h = Xl;
                    break;
                case "focusout":
                    v = "blur",
                    h = Xl;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = Xl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = Dh;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = AS;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = WS;
                    break;
                case Fy:
                case _y:
                case zy:
                    h = DS;
                    break;
                case By:
                    h = KS;
                    break;
                case "scroll":
                    h = kS;
                    break;
                case "wheel":
                    h = QS;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = LS;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = Lh
                }
                var g = (t & 4) !== 0
                  , x = !g && e === "scroll"
                  , p = g ? f !== null ? f + "Capture" : null : f;
                g = [];
                for (var m = u, y; m !== null; ) {
                    y = m;
                    var C = y.stateNode;
                    if (y.tag === 5 && C !== null && (y = C,
                    p !== null && (C = js(m, p),
                    C != null && g.push(zs(m, C, y)))),
                    x)
                        break;
                    m = m.return
                }
                0 < g.length && (f = new h(f,v,null,n,c),
                d.push({
                    event: f,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                h = e === "mouseout" || e === "pointerout",
                f && n !== qu && (v = n.relatedTarget || n.fromElement) && (xr(v) || v[fn]))
                    break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                h ? (v = n.relatedTarget || n.toElement,
                h = u,
                v = v ? xr(v) : null,
                v !== null && (x = Br(v),
                v !== x || v.tag !== 5 && v.tag !== 6) && (v = null)) : (h = null,
                v = u),
                h !== v)) {
                    if (g = Dh,
                    C = "onMouseLeave",
                    p = "onMouseEnter",
                    m = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = Lh,
                    C = "onPointerLeave",
                    p = "onPointerEnter",
                    m = "pointer"),
                    x = h == null ? f : ri(h),
                    y = v == null ? f : ri(v),
                    f = new g(C,m + "leave",h,n,c),
                    f.target = x,
                    f.relatedTarget = y,
                    C = null,
                    xr(c) === u && (g = new g(p,m + "enter",v,n,c),
                    g.target = y,
                    g.relatedTarget = x,
                    C = g),
                    x = C,
                    h && v)
                        t: {
                            for (g = h,
                            p = v,
                            m = 0,
                            y = g; y; y = Xr(y))
                                m++;
                            for (y = 0,
                            C = p; C; C = Xr(C))
                                y++;
                            for (; 0 < m - y; )
                                g = Xr(g),
                                m--;
                            for (; 0 < y - m; )
                                p = Xr(p),
                                y--;
                            for (; m--; ) {
                                if (g === p || p !== null && g === p.alternate)
                                    break t;
                                g = Xr(g),
                                p = Xr(p)
                            }
                            g = null
                        }
                    else
                        g = null;
                    h !== null && Hh(d, f, h, g, !1),
                    v !== null && x !== null && Hh(d, x, v, g, !0)
                }
            }
            e: {
                if (f = u ? ri(u) : window,
                h = f.nodeName && f.nodeName.toLowerCase(),
                h === "select" || h === "input" && f.type === "file")
                    var E = tC;
                else if (Vh(f))
                    if (jy)
                        E = sC;
                    else {
                        E = rC;
                        var P = nC
                    }
                else
                    (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (E = iC);
                if (E && (E = E(e, u))) {
                    Dy(d, E, n, c);
                    break e
                }
                P && P(e, f, u),
                e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Ku(f, "number", f.value)
            }
            switch (P = u ? ri(u) : window,
            e) {
            case "focusin":
                (Vh(P) || P.contentEditable === "true") && (ti = P,
                ic = u,
                Ss = null);
                break;
            case "focusout":
                Ss = ic = ti = null;
                break;
            case "mousedown":
                sc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                sc = !1,
                $h(d, n, c);
                break;
            case "selectionchange":
                if (lC)
                    break;
            case "keydown":
            case "keyup":
                $h(d, n, c)
            }
            var T;
            if (Od)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var b = "onCompositionStart";
                        break e;
                    case "compositionend":
                        b = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        b = "onCompositionUpdate";
                        break e
                    }
                    b = void 0
                }
            else
                ei ? Ny(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
            b && (Ay && n.locale !== "ko" && (ei || b !== "onCompositionStart" ? b === "onCompositionEnd" && ei && (T = Ry()) : (zn = c,
            Dd = "value"in zn ? zn.value : zn.textContent,
            ei = !0)),
            P = ba(u, b),
            0 < P.length && (b = new jh(b,e,null,n,c),
            d.push({
                event: b,
                listeners: P
            }),
            T ? b.data = T : (T = My(n),
            T !== null && (b.data = T)))),
            (T = XS ? qS(e, n) : ZS(e, n)) && (u = ba(u, "onBeforeInput"),
            0 < u.length && (c = new jh("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = T))
        }
        Uy(d, t)
    })
}
function zs(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ba(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
        s = js(e, n),
        s != null && r.unshift(zs(e, s, i)),
        s = js(e, t),
        s != null && r.push(zs(e, s, i))),
        e = e.return
    }
    return r
}
function Xr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Hh(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        i ? (l = js(n, s),
        l != null && o.unshift(zs(n, l, a))) : i || (l = js(n, s),
        l != null && o.push(zs(n, l, a)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var fC = /\r\n?/g
  , hC = /\u0000|\uFFFD/g;
function Kh(e) {
    return (typeof e == "string" ? e : "" + e).replace(fC, `
`).replace(hC, "")
}
function Io(e, t, n) {
    if (t = Kh(t),
    Kh(e) !== t && n)
        throw Error(D(425))
}
function ka() {}
var oc = null
  , ac = null;
function lc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var uc = typeof setTimeout == "function" ? setTimeout : void 0
  , pC = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Gh = typeof Promise == "function" ? Promise : void 0
  , mC = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gh < "u" ? function(e) {
    return Gh.resolve(null).then(e).catch(gC)
}
: uc;
function gC(e) {
    setTimeout(function() {
        throw e
    })
}
function iu(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Is(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Is(t)
}
function Gn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Qh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Hi = Math.random().toString(36).slice(2)
  , Kt = "__reactFiber$" + Hi
  , Bs = "__reactProps$" + Hi
  , fn = "__reactContainer$" + Hi
  , cc = "__reactEvents$" + Hi
  , yC = "__reactListeners$" + Hi
  , vC = "__reactHandles$" + Hi;
function xr(e) {
    var t = e[Kt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[fn] || n[Kt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Qh(e); e !== null; ) {
                    if (n = e[Kt])
                        return n;
                    e = Qh(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function co(e) {
    return e = e[Kt] || e[fn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function ri(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(D(33))
}
function cl(e) {
    return e[Bs] || null
}
var dc = []
  , ii = -1;
function lr(e) {
    return {
        current: e
    }
}
function ae(e) {
    0 > ii || (e.current = dc[ii],
    dc[ii] = null,
    ii--)
}
function re(e, t) {
    ii++,
    dc[ii] = e.current,
    e.current = t
}
var er = {}
  , _e = lr(er)
  , qe = lr(!1)
  , jr = er;
function ji(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return er;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Ze(e) {
    return e = e.childContextTypes,
    e != null
}
function Ra() {
    ae(qe),
    ae(_e)
}
function Yh(e, t, n) {
    if (_e.current !== er)
        throw Error(D(168));
    re(_e, t),
    re(qe, n)
}
function Hy(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(D(108, nS(e) || "Unknown", i));
    return pe({}, n, r)
}
function Aa(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || er,
    jr = _e.current,
    re(_e, e),
    re(qe, qe.current),
    !0
}
function Xh(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(D(169));
    n ? (e = Hy(e, t, jr),
    r.__reactInternalMemoizedMergedChildContext = e,
    ae(qe),
    ae(_e),
    re(_e, e)) : ae(qe),
    re(qe, n)
}
var on = null
  , dl = !1
  , su = !1;
function Ky(e) {
    on === null ? on = [e] : on.push(e)
}
function xC(e) {
    dl = !0,
    Ky(e)
}
function ur() {
    if (!su && on !== null) {
        su = !0;
        var e = 0
          , t = te;
        try {
            var n = on;
            for (te = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            on = null,
            dl = !1
        } catch (i) {
            throw on !== null && (on = on.slice(e + 1)),
            yy(Rd, ur),
            i
        } finally {
            te = t,
            su = !1
        }
    }
    return null
}
var si = []
  , oi = 0
  , Na = null
  , Ma = 0
  , dt = []
  , ft = 0
  , Lr = null
  , ln = 1
  , un = "";
function gr(e, t) {
    si[oi++] = Ma,
    si[oi++] = Na,
    Na = e,
    Ma = t
}
function Gy(e, t, n) {
    dt[ft++] = ln,
    dt[ft++] = un,
    dt[ft++] = Lr,
    Lr = e;
    var r = ln;
    e = un;
    var i = 32 - jt(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var s = 32 - jt(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        ln = 1 << 32 - jt(t) + i | n << i | r,
        un = s + e
    } else
        ln = 1 << s | n << i | r,
        un = e
}
function Vd(e) {
    e.return !== null && (gr(e, 1),
    Gy(e, 1, 0))
}
function Fd(e) {
    for (; e === Na; )
        Na = si[--oi],
        si[oi] = null,
        Ma = si[--oi],
        si[oi] = null;
    for (; e === Lr; )
        Lr = dt[--ft],
        dt[ft] = null,
        un = dt[--ft],
        dt[ft] = null,
        ln = dt[--ft],
        dt[ft] = null
}
var it = null
  , rt = null
  , ue = !1
  , Dt = null;
function Qy(e, t) {
    var n = ht(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function qh(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        it = e,
        rt = Gn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        it = e,
        rt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Lr !== null ? {
            id: ln,
            overflow: un
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = ht(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        it = e,
        rt = null,
        !0) : !1;
    default:
        return !1
    }
}
function fc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function hc(e) {
    if (ue) {
        var t = rt;
        if (t) {
            var n = t;
            if (!qh(e, t)) {
                if (fc(e))
                    throw Error(D(418));
                t = Gn(n.nextSibling);
                var r = it;
                t && qh(e, t) ? Qy(r, n) : (e.flags = e.flags & -4097 | 2,
                ue = !1,
                it = e)
            }
        } else {
            if (fc(e))
                throw Error(D(418));
            e.flags = e.flags & -4097 | 2,
            ue = !1,
            it = e
        }
    }
}
function Zh(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    it = e
}
function Vo(e) {
    if (e !== it)
        return !1;
    if (!ue)
        return Zh(e),
        ue = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !lc(e.type, e.memoizedProps)),
    t && (t = rt)) {
        if (fc(e))
            throw Yy(),
            Error(D(418));
        for (; t; )
            Qy(e, t),
            t = Gn(t.nextSibling)
    }
    if (Zh(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(D(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            rt = Gn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            rt = null
        }
    } else
        rt = it ? Gn(e.stateNode.nextSibling) : null;
    return !0
}
function Yy() {
    for (var e = rt; e; )
        e = Gn(e.nextSibling)
}
function Li() {
    rt = it = null,
    ue = !1
}
function _d(e) {
    Dt === null ? Dt = [e] : Dt.push(e)
}
var wC = vn.ReactCurrentBatchConfig;
function os(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(D(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(D(147, e));
            var i = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var a = i.refs;
                o === null ? delete a[s] : a[s] = o
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(D(284));
        if (!n._owner)
            throw Error(D(290, e))
    }
    return e
}
function Fo(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Jh(e) {
    var t = e._init;
    return t(e._payload)
}
function Xy(e) {
    function t(p, m) {
        if (e) {
            var y = p.deletions;
            y === null ? (p.deletions = [m],
            p.flags |= 16) : y.push(m)
        }
    }
    function n(p, m) {
        if (!e)
            return null;
        for (; m !== null; )
            t(p, m),
            m = m.sibling;
        return null
    }
    function r(p, m) {
        for (p = new Map; m !== null; )
            m.key !== null ? p.set(m.key, m) : p.set(m.index, m),
            m = m.sibling;
        return p
    }
    function i(p, m) {
        return p = qn(p, m),
        p.index = 0,
        p.sibling = null,
        p
    }
    function s(p, m, y) {
        return p.index = y,
        e ? (y = p.alternate,
        y !== null ? (y = y.index,
        y < m ? (p.flags |= 2,
        m) : y) : (p.flags |= 2,
        m)) : (p.flags |= 1048576,
        m)
    }
    function o(p) {
        return e && p.alternate === null && (p.flags |= 2),
        p
    }
    function a(p, m, y, C) {
        return m === null || m.tag !== 6 ? (m = fu(y, p.mode, C),
        m.return = p,
        m) : (m = i(m, y),
        m.return = p,
        m)
    }
    function l(p, m, y, C) {
        var E = y.type;
        return E === Jr ? c(p, m, y.props.children, C, y.key) : m !== null && (m.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Mn && Jh(E) === m.type) ? (C = i(m, y.props),
        C.ref = os(p, m, y),
        C.return = p,
        C) : (C = ua(y.type, y.key, y.props, null, p.mode, C),
        C.ref = os(p, m, y),
        C.return = p,
        C)
    }
    function u(p, m, y, C) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = hu(y, p.mode, C),
        m.return = p,
        m) : (m = i(m, y.children || []),
        m.return = p,
        m)
    }
    function c(p, m, y, C, E) {
        return m === null || m.tag !== 7 ? (m = Mr(y, p.mode, C, E),
        m.return = p,
        m) : (m = i(m, y),
        m.return = p,
        m)
    }
    function d(p, m, y) {
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return m = fu("" + m, p.mode, y),
            m.return = p,
            m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case ko:
                return y = ua(m.type, m.key, m.props, null, p.mode, y),
                y.ref = os(p, null, m),
                y.return = p,
                y;
            case Zr:
                return m = hu(m, p.mode, y),
                m.return = p,
                m;
            case Mn:
                var C = m._init;
                return d(p, C(m._payload), y)
            }
            if (hs(m) || ts(m))
                return m = Mr(m, p.mode, y, null),
                m.return = p,
                m;
            Fo(p, m)
        }
        return null
    }
    function f(p, m, y, C) {
        var E = m !== null ? m.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return E !== null ? null : a(p, m, "" + y, C);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case ko:
                return y.key === E ? l(p, m, y, C) : null;
            case Zr:
                return y.key === E ? u(p, m, y, C) : null;
            case Mn:
                return E = y._init,
                f(p, m, E(y._payload), C)
            }
            if (hs(y) || ts(y))
                return E !== null ? null : c(p, m, y, C, null);
            Fo(p, y)
        }
        return null
    }
    function h(p, m, y, C, E) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return p = p.get(y) || null,
            a(m, p, "" + C, E);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
            case ko:
                return p = p.get(C.key === null ? y : C.key) || null,
                l(m, p, C, E);
            case Zr:
                return p = p.get(C.key === null ? y : C.key) || null,
                u(m, p, C, E);
            case Mn:
                var P = C._init;
                return h(p, m, y, P(C._payload), E)
            }
            if (hs(C) || ts(C))
                return p = p.get(y) || null,
                c(m, p, C, E, null);
            Fo(m, C)
        }
        return null
    }
    function v(p, m, y, C) {
        for (var E = null, P = null, T = m, b = m = 0, N = null; T !== null && b < y.length; b++) {
            T.index > b ? (N = T,
            T = null) : N = T.sibling;
            var M = f(p, T, y[b], C);
            if (M === null) {
                T === null && (T = N);
                break
            }
            e && T && M.alternate === null && t(p, T),
            m = s(M, m, b),
            P === null ? E = M : P.sibling = M,
            P = M,
            T = N
        }
        if (b === y.length)
            return n(p, T),
            ue && gr(p, b),
            E;
        if (T === null) {
            for (; b < y.length; b++)
                T = d(p, y[b], C),
                T !== null && (m = s(T, m, b),
                P === null ? E = T : P.sibling = T,
                P = T);
            return ue && gr(p, b),
            E
        }
        for (T = r(p, T); b < y.length; b++)
            N = h(T, p, b, y[b], C),
            N !== null && (e && N.alternate !== null && T.delete(N.key === null ? b : N.key),
            m = s(N, m, b),
            P === null ? E = N : P.sibling = N,
            P = N);
        return e && T.forEach(function(z) {
            return t(p, z)
        }),
        ue && gr(p, b),
        E
    }
    function g(p, m, y, C) {
        var E = ts(y);
        if (typeof E != "function")
            throw Error(D(150));
        if (y = E.call(y),
        y == null)
            throw Error(D(151));
        for (var P = E = null, T = m, b = m = 0, N = null, M = y.next(); T !== null && !M.done; b++,
        M = y.next()) {
            T.index > b ? (N = T,
            T = null) : N = T.sibling;
            var z = f(p, T, M.value, C);
            if (z === null) {
                T === null && (T = N);
                break
            }
            e && T && z.alternate === null && t(p, T),
            m = s(z, m, b),
            P === null ? E = z : P.sibling = z,
            P = z,
            T = N
        }
        if (M.done)
            return n(p, T),
            ue && gr(p, b),
            E;
        if (T === null) {
            for (; !M.done; b++,
            M = y.next())
                M = d(p, M.value, C),
                M !== null && (m = s(M, m, b),
                P === null ? E = M : P.sibling = M,
                P = M);
            return ue && gr(p, b),
            E
        }
        for (T = r(p, T); !M.done; b++,
        M = y.next())
            M = h(T, p, b, M.value, C),
            M !== null && (e && M.alternate !== null && T.delete(M.key === null ? b : M.key),
            m = s(M, m, b),
            P === null ? E = M : P.sibling = M,
            P = M);
        return e && T.forEach(function(I) {
            return t(p, I)
        }),
        ue && gr(p, b),
        E
    }
    function x(p, m, y, C) {
        if (typeof y == "object" && y !== null && y.type === Jr && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case ko:
                e: {
                    for (var E = y.key, P = m; P !== null; ) {
                        if (P.key === E) {
                            if (E = y.type,
                            E === Jr) {
                                if (P.tag === 7) {
                                    n(p, P.sibling),
                                    m = i(P, y.props.children),
                                    m.return = p,
                                    p = m;
                                    break e
                                }
                            } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Mn && Jh(E) === P.type) {
                                n(p, P.sibling),
                                m = i(P, y.props),
                                m.ref = os(p, P, y),
                                m.return = p,
                                p = m;
                                break e
                            }
                            n(p, P);
                            break
                        } else
                            t(p, P);
                        P = P.sibling
                    }
                    y.type === Jr ? (m = Mr(y.props.children, p.mode, C, y.key),
                    m.return = p,
                    p = m) : (C = ua(y.type, y.key, y.props, null, p.mode, C),
                    C.ref = os(p, m, y),
                    C.return = p,
                    p = C)
                }
                return o(p);
            case Zr:
                e: {
                    for (P = y.key; m !== null; ) {
                        if (m.key === P)
                            if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                                n(p, m.sibling),
                                m = i(m, y.children || []),
                                m.return = p,
                                p = m;
                                break e
                            } else {
                                n(p, m);
                                break
                            }
                        else
                            t(p, m);
                        m = m.sibling
                    }
                    m = hu(y, p.mode, C),
                    m.return = p,
                    p = m
                }
                return o(p);
            case Mn:
                return P = y._init,
                x(p, m, P(y._payload), C)
            }
            if (hs(y))
                return v(p, m, y, C);
            if (ts(y))
                return g(p, m, y, C);
            Fo(p, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
        m !== null && m.tag === 6 ? (n(p, m.sibling),
        m = i(m, y),
        m.return = p,
        p = m) : (n(p, m),
        m = fu(y, p.mode, C),
        m.return = p,
        p = m),
        o(p)) : n(p, m)
    }
    return x
}
var Oi = Xy(!0)
  , qy = Xy(!1)
  , Da = lr(null)
  , ja = null
  , ai = null
  , zd = null;
function Bd() {
    zd = ai = ja = null
}
function $d(e) {
    var t = Da.current;
    ae(Da),
    e._currentValue = t
}
function pc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function xi(e, t) {
    ja = e,
    zd = ai = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Xe = !0),
    e.firstContext = null)
}
function vt(e) {
    var t = e._currentValue;
    if (zd !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        ai === null) {
            if (ja === null)
                throw Error(D(308));
            ai = e,
            ja.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            ai = ai.next = e;
    return t
}
var wr = null;
function Ud(e) {
    wr === null ? wr = [e] : wr.push(e)
}
function Zy(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    Ud(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    hn(e, r)
}
function hn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Dn = !1;
function Wd(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Jy(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function cn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Qn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    Z & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        hn(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    Ud(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    hn(e, n)
}
function ra(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ad(e, n)
    }
}
function ep(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o,
                n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else
            i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function La(e, t, n, r) {
    var i = e.updateQueue;
    Dn = !1;
    var s = i.firstBaseUpdate
      , o = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        o === null ? s = u : o.next = u,
        o = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (s !== null) {
        var d = i.baseState;
        o = 0,
        c = u = l = null,
        a = s;
        do {
            var f = a.lane
              , h = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var v = e
                      , g = a;
                    switch (f = t,
                    h = n,
                    g.tag) {
                    case 1:
                        if (v = g.payload,
                        typeof v == "function") {
                            d = v.call(h, d, f);
                            break e
                        }
                        d = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = g.payload,
                        f = typeof v == "function" ? v.call(h, d, f) : v,
                        f == null)
                            break e;
                        d = pe({}, d, f);
                        break e;
                    case 2:
                        Dn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                f = i.effects,
                f === null ? i.effects = [a] : f.push(a))
            } else
                h = {
                    eventTime: h,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = h,
                l = d) : c = c.next = h,
                o |= f;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                i.lastBaseUpdate = f,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d),
        i.baseState = l,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                o |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            s === null && (i.shared.lanes = 0);
        Ir |= o,
        e.lanes = o,
        e.memoizedState = d
    }
}
function tp(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(D(191, i));
                i.call(r)
            }
        }
}
var fo = {}
  , Yt = lr(fo)
  , $s = lr(fo)
  , Us = lr(fo);
function Sr(e) {
    if (e === fo)
        throw Error(D(174));
    return e
}
function Hd(e, t) {
    switch (re(Us, t),
    re($s, e),
    re(Yt, fo),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Qu(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Qu(t, e)
    }
    ae(Yt),
    re(Yt, t)
}
function Ii() {
    ae(Yt),
    ae($s),
    ae(Us)
}
function ev(e) {
    Sr(Us.current);
    var t = Sr(Yt.current)
      , n = Qu(t, e.type);
    t !== n && (re($s, e),
    re(Yt, n))
}
function Kd(e) {
    $s.current === e && (ae(Yt),
    ae($s))
}
var de = lr(0);
function Oa(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var ou = [];
function Gd() {
    for (var e = 0; e < ou.length; e++)
        ou[e]._workInProgressVersionPrimary = null;
    ou.length = 0
}
var ia = vn.ReactCurrentDispatcher
  , au = vn.ReactCurrentBatchConfig
  , Or = 0
  , he = null
  , Ee = null
  , be = null
  , Ia = !1
  , Cs = !1
  , Ws = 0
  , SC = 0;
function Le() {
    throw Error(D(321))
}
function Qd(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ot(e[n], t[n]))
            return !1;
    return !0
}
function Yd(e, t, n, r, i, s) {
    if (Or = s,
    he = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    ia.current = e === null || e.memoizedState === null ? TC : bC,
    e = n(r, i),
    Cs) {
        s = 0;
        do {
            if (Cs = !1,
            Ws = 0,
            25 <= s)
                throw Error(D(301));
            s += 1,
            be = Ee = null,
            t.updateQueue = null,
            ia.current = kC,
            e = n(r, i)
        } while (Cs)
    }
    if (ia.current = Va,
    t = Ee !== null && Ee.next !== null,
    Or = 0,
    be = Ee = he = null,
    Ia = !1,
    t)
        throw Error(D(300));
    return e
}
function Xd() {
    var e = Ws !== 0;
    return Ws = 0,
    e
}
function Bt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return be === null ? he.memoizedState = be = e : be = be.next = e,
    be
}
function xt() {
    if (Ee === null) {
        var e = he.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Ee.next;
    var t = be === null ? he.memoizedState : be.next;
    if (t !== null)
        be = t,
        Ee = e;
    else {
        if (e === null)
            throw Error(D(310));
        Ee = e,
        e = {
            memoizedState: Ee.memoizedState,
            baseState: Ee.baseState,
            baseQueue: Ee.baseQueue,
            queue: Ee.queue,
            next: null
        },
        be === null ? he.memoizedState = be = e : be = be.next = e
    }
    return be
}
function Hs(e, t) {
    return typeof t == "function" ? t(e) : t
}
function lu(e) {
    var t = xt()
      , n = t.queue;
    if (n === null)
        throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = Ee
      , i = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next,
            s.next = o
        }
        r.baseQueue = i = s,
        n.pending = null
    }
    if (i !== null) {
        s = i.next,
        r = r.baseState;
        var a = o = null
          , l = null
          , u = s;
        do {
            var c = u.lane;
            if ((Or & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                o = r) : l = l.next = d,
                he.lanes |= c,
                Ir |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? o = r : l.next = a,
        Ot(r, t.memoizedState) || (Xe = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            s = i.lane,
            he.lanes |= s,
            Ir |= s,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function uu(e) {
    var t = xt()
      , n = t.queue;
    if (n === null)
        throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            s = e(s, o.action),
            o = o.next;
        while (o !== i);
        Ot(s, t.memoizedState) || (Xe = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function tv() {}
function nv(e, t) {
    var n = he
      , r = xt()
      , i = t()
      , s = !Ot(r.memoizedState, i);
    if (s && (r.memoizedState = i,
    Xe = !0),
    r = r.queue,
    qd(sv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || be !== null && be.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Ks(9, iv.bind(null, n, r, i, t), void 0, null),
        ke === null)
            throw Error(D(349));
        Or & 30 || rv(n, t, i)
    }
    return i
}
function rv(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = he.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    he.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function iv(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    ov(t) && av(e)
}
function sv(e, t, n) {
    return n(function() {
        ov(t) && av(e)
    })
}
function ov(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ot(e, n)
    } catch {
        return !0
    }
}
function av(e) {
    var t = hn(e, 1);
    t !== null && Lt(t, e, 1, -1)
}
function np(e) {
    var t = Bt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hs,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = PC.bind(null, he, e),
    [t.memoizedState, e]
}
function Ks(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = he.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    he.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function lv() {
    return xt().memoizedState
}
function sa(e, t, n, r) {
    var i = Bt();
    he.flags |= e,
    i.memoizedState = Ks(1 | t, n, void 0, r === void 0 ? null : r)
}
function fl(e, t, n, r) {
    var i = xt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Ee !== null) {
        var o = Ee.memoizedState;
        if (s = o.destroy,
        r !== null && Qd(r, o.deps)) {
            i.memoizedState = Ks(t, n, s, r);
            return
        }
    }
    he.flags |= e,
    i.memoizedState = Ks(1 | t, n, s, r)
}
function rp(e, t) {
    return sa(8390656, 8, e, t)
}
function qd(e, t) {
    return fl(2048, 8, e, t)
}
function uv(e, t) {
    return fl(4, 2, e, t)
}
function cv(e, t) {
    return fl(4, 4, e, t)
}
function dv(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function fv(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    fl(4, 4, dv.bind(null, t, e), n)
}
function Zd() {}
function hv(e, t) {
    var n = xt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qd(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function pv(e, t) {
    var n = xt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qd(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function mv(e, t, n) {
    return Or & 21 ? (Ot(n, t) || (n = wy(),
    he.lanes |= n,
    Ir |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Xe = !0),
    e.memoizedState = n)
}
function CC(e, t) {
    var n = te;
    te = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = au.transition;
    au.transition = {};
    try {
        e(!1),
        t()
    } finally {
        te = n,
        au.transition = r
    }
}
function gv() {
    return xt().memoizedState
}
function EC(e, t, n) {
    var r = Xn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    yv(e))
        vv(t, n);
    else if (n = Zy(e, t, n, r),
    n !== null) {
        var i = He();
        Lt(n, e, r, i),
        xv(n, t, r)
    }
}
function PC(e, t, n) {
    var r = Xn(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (yv(e))
        vv(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var o = t.lastRenderedState
                  , a = s(o, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                Ot(a, o)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    Ud(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Zy(e, t, i, r),
        n !== null && (i = He(),
        Lt(n, e, r, i),
        xv(n, t, r))
    }
}
function yv(e) {
    var t = e.alternate;
    return e === he || t !== null && t === he
}
function vv(e, t) {
    Cs = Ia = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function xv(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ad(e, n)
    }
}
var Va = {
    readContext: vt,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1
}
  , TC = {
    readContext: vt,
    useCallback: function(e, t) {
        return Bt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: vt,
    useEffect: rp,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        sa(4194308, 4, dv.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return sa(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return sa(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Bt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Bt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = EC.bind(null, he, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Bt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: np,
    useDebugValue: Zd,
    useDeferredValue: function(e) {
        return Bt().memoizedState = e
    },
    useTransition: function() {
        var e = np(!1)
          , t = e[0];
        return e = CC.bind(null, e[1]),
        Bt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = he
          , i = Bt();
        if (ue) {
            if (n === void 0)
                throw Error(D(407));
            n = n()
        } else {
            if (n = t(),
            ke === null)
                throw Error(D(349));
            Or & 30 || rv(r, t, n)
        }
        i.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return i.queue = s,
        rp(sv.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        Ks(9, iv.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Bt()
          , t = ke.identifierPrefix;
        if (ue) {
            var n = un
              , r = ln;
            n = (r & ~(1 << 32 - jt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Ws++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = SC++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , bC = {
    readContext: vt,
    useCallback: hv,
    useContext: vt,
    useEffect: qd,
    useImperativeHandle: fv,
    useInsertionEffect: uv,
    useLayoutEffect: cv,
    useMemo: pv,
    useReducer: lu,
    useRef: lv,
    useState: function() {
        return lu(Hs)
    },
    useDebugValue: Zd,
    useDeferredValue: function(e) {
        var t = xt();
        return mv(t, Ee.memoizedState, e)
    },
    useTransition: function() {
        var e = lu(Hs)[0]
          , t = xt().memoizedState;
        return [e, t]
    },
    useMutableSource: tv,
    useSyncExternalStore: nv,
    useId: gv,
    unstable_isNewReconciler: !1
}
  , kC = {
    readContext: vt,
    useCallback: hv,
    useContext: vt,
    useEffect: qd,
    useImperativeHandle: fv,
    useInsertionEffect: uv,
    useLayoutEffect: cv,
    useMemo: pv,
    useReducer: uu,
    useRef: lv,
    useState: function() {
        return uu(Hs)
    },
    useDebugValue: Zd,
    useDeferredValue: function(e) {
        var t = xt();
        return Ee === null ? t.memoizedState = e : mv(t, Ee.memoizedState, e)
    },
    useTransition: function() {
        var e = uu(Hs)[0]
          , t = xt().memoizedState;
        return [e, t]
    },
    useMutableSource: tv,
    useSyncExternalStore: nv,
    useId: gv,
    unstable_isNewReconciler: !1
};
function kt(e, t) {
    if (e && e.defaultProps) {
        t = pe({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function mc(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : pe({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var hl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Br(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = He()
          , i = Xn(e)
          , s = cn(r, i);
        s.payload = t,
        n != null && (s.callback = n),
        t = Qn(e, s, i),
        t !== null && (Lt(t, e, i, r),
        ra(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = He()
          , i = Xn(e)
          , s = cn(r, i);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = Qn(e, s, i),
        t !== null && (Lt(t, e, i, r),
        ra(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = He()
          , r = Xn(e)
          , i = cn(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Qn(e, i, r),
        t !== null && (Lt(t, e, r, n),
        ra(t, e, r))
    }
};
function ip(e, t, n, r, i, s, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Fs(n, r) || !Fs(i, s) : !0
}
function wv(e, t, n) {
    var r = !1
      , i = er
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = vt(s) : (i = Ze(t) ? jr : _e.current,
    r = t.contextTypes,
    s = (r = r != null) ? ji(e, i) : er),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = hl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function sp(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && hl.enqueueReplaceState(t, t.state, null)
}
function gc(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    Wd(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = vt(s) : (s = Ze(t) ? jr : _e.current,
    i.context = ji(e, s)),
    i.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (mc(e, t, s, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && hl.enqueueReplaceState(i, i.state, null),
    La(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Vi(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += tS(r),
            r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function cu(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function yc(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var RC = typeof WeakMap == "function" ? WeakMap : Map;
function Sv(e, t, n) {
    n = cn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        _a || (_a = !0,
        kc = r),
        yc(e, t)
    }
    ,
    n
}
function Cv(e, t, n) {
    n = cn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            yc(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        yc(e, t),
        typeof r != "function" && (Yn === null ? Yn = new Set([this]) : Yn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function op(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new RC;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = $C.bind(null, e, t, n),
    t.then(e, e))
}
function ap(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function lp(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = cn(-1, 1),
    t.tag = 2,
    Qn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var AC = vn.ReactCurrentOwner
  , Xe = !1;
function Be(e, t, n, r) {
    t.child = e === null ? qy(t, null, n, r) : Oi(t, e.child, n, r)
}
function up(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return xi(t, i),
    r = Yd(e, t, n, r, s, i),
    n = Xd(),
    e !== null && !Xe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    pn(e, t, i)) : (ue && n && Vd(t),
    t.flags |= 1,
    Be(e, t, r, i),
    t.child)
}
function cp(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !af(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        Ev(e, t, s, r, i)) : (e = ua(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Fs,
        n(o, r) && e.ref === t.ref)
            return pn(e, t, i)
    }
    return t.flags |= 1,
    e = qn(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Ev(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Fs(s, r) && e.ref === t.ref)
            if (Xe = !1,
            t.pendingProps = r = s,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Xe = !0);
            else
                return t.lanes = e.lanes,
                pn(e, t, i)
    }
    return vc(e, t, n, r, i)
}
function Pv(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            re(ui, tt),
            tt |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                re(ui, tt),
                tt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            re(ui, tt),
            tt |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        re(ui, tt),
        tt |= r;
    return Be(e, t, i, n),
    t.child
}
function Tv(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function vc(e, t, n, r, i) {
    var s = Ze(n) ? jr : _e.current;
    return s = ji(t, s),
    xi(t, i),
    n = Yd(e, t, n, r, s, i),
    r = Xd(),
    e !== null && !Xe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    pn(e, t, i)) : (ue && r && Vd(t),
    t.flags |= 1,
    Be(e, t, n, i),
    t.child)
}
function dp(e, t, n, r, i) {
    if (Ze(n)) {
        var s = !0;
        Aa(t)
    } else
        s = !1;
    if (xi(t, i),
    t.stateNode === null)
        oa(e, t),
        wv(t, n, r),
        gc(t, n, r, i),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var l = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = vt(u) : (u = Ze(n) ? jr : _e.current,
        u = ji(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && sp(t, o, r, u),
        Dn = !1;
        var f = t.memoizedState;
        o.state = f,
        La(t, r, o, i),
        l = t.memoizedState,
        a !== r || f !== l || qe.current || Dn ? (typeof c == "function" && (mc(t, n, c, r),
        l = t.memoizedState),
        (a = Dn || ip(t, n, a, r, f, l, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        o.props = r,
        o.state = l,
        o.context = u,
        r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        Jy(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : kt(t.type, a),
        o.props = u,
        d = t.pendingProps,
        f = o.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = vt(l) : (l = Ze(n) ? jr : _e.current,
        l = ji(t, l));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== d || f !== l) && sp(t, o, r, l),
        Dn = !1,
        f = t.memoizedState,
        o.state = f,
        La(t, r, o, i);
        var v = t.memoizedState;
        a !== d || f !== v || qe.current || Dn ? (typeof h == "function" && (mc(t, n, h, r),
        v = t.memoizedState),
        (u = Dn || ip(t, n, u, r, f, v, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, l)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = v),
        o.props = r,
        o.state = v,
        o.context = l,
        r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return xc(e, t, n, r, s, i)
}
function xc(e, t, n, r, i, s) {
    Tv(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return i && Xh(t, n, !1),
        pn(e, t, s);
    r = t.stateNode,
    AC.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = Oi(t, e.child, null, s),
    t.child = Oi(t, null, a, s)) : Be(e, t, a, s),
    t.memoizedState = r.state,
    i && Xh(t, n, !0),
    t.child
}
function bv(e) {
    var t = e.stateNode;
    t.pendingContext ? Yh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Yh(e, t.context, !1),
    Hd(e, t.containerInfo)
}
function fp(e, t, n, r, i) {
    return Li(),
    _d(i),
    t.flags |= 256,
    Be(e, t, n, r),
    t.child
}
var wc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Sc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function kv(e, t, n) {
    var r = t.pendingProps, i = de.current, s = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    re(de, i & 1),
    e === null)
        return hc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = o) : s = gl(o, r, 0, null),
        e = Mr(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = Sc(n),
        t.memoizedState = wc,
        e) : Jd(t, o));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return NC(e, t, o, r, a, i, n);
    if (s) {
        s = r.fallback,
        o = t.mode,
        i = e.child,
        a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = qn(i, l),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? s = qn(a, s) : (s = Mr(s, o, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        o = e.child.memoizedState,
        o = o === null ? Sc(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = wc,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = qn(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Jd(e, t) {
    return t = gl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function _o(e, t, n, r) {
    return r !== null && _d(r),
    Oi(t, e.child, null, n),
    e = Jd(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function NC(e, t, n, r, i, s, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = cu(Error(D(422))),
        _o(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        i = t.mode,
        r = gl({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        s = Mr(s, i, o, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && Oi(t, e.child, null, o),
        t.child.memoizedState = Sc(o),
        t.memoizedState = wc,
        s);
    if (!(t.mode & 1))
        return _o(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        s = Error(D(419)),
        r = cu(s, r, void 0),
        _o(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0,
    Xe || a) {
        if (r = ke,
        r !== null) {
            switch (o & -o) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
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
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
            i !== 0 && i !== s.retryLane && (s.retryLane = i,
            hn(e, i),
            Lt(r, e, i, -1))
        }
        return of(),
        r = cu(Error(D(421))),
        _o(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = UC.bind(null, e),
    i._reactRetry = t,
    null) : (e = s.treeContext,
    rt = Gn(i.nextSibling),
    it = t,
    ue = !0,
    Dt = null,
    e !== null && (dt[ft++] = ln,
    dt[ft++] = un,
    dt[ft++] = Lr,
    ln = e.id,
    un = e.overflow,
    Lr = t),
    t = Jd(t, r.children),
    t.flags |= 4096,
    t)
}
function hp(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    pc(e.return, t, n)
}
function du(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = i)
}
function Rv(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , s = r.tail;
    if (Be(e, t, r.children, n),
    r = de.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && hp(e, n, t);
                else if (e.tag === 19)
                    hp(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (re(de, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && Oa(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            du(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && Oa(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            du(t, !0, n, null, s);
            break;
        case "together":
            du(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function oa(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function pn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Ir |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(D(153));
    if (t.child !== null) {
        for (e = t.child,
        n = qn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = qn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function MC(e, t, n) {
    switch (t.tag) {
    case 3:
        bv(t),
        Li();
        break;
    case 5:
        ev(t);
        break;
    case 1:
        Ze(t.type) && Aa(t);
        break;
    case 4:
        Hd(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        re(Da, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (re(de, de.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? kv(e, t, n) : (re(de, de.current & 1),
            e = pn(e, t, n),
            e !== null ? e.sibling : null);
        re(de, de.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Rv(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        re(de, de.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Pv(e, t, n)
    }
    return pn(e, t, n)
}
var Av, Cc, Nv, Mv;
Av = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Cc = function() {}
;
Nv = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Sr(Yt.current);
        var s = null;
        switch (n) {
        case "input":
            i = Wu(e, i),
            r = Wu(e, r),
            s = [];
            break;
        case "select":
            i = pe({}, i, {
                value: void 0
            }),
            r = pe({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            i = Gu(e, i),
            r = Gu(e, r),
            s = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ka)
        }
        Yu(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ms.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in l)
                            l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}),
                            n[o] = l[o])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ms.hasOwnProperty(u) ? (l != null && u === "onScroll" && oe("scroll", e),
                    s || a === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Mv = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function as(e, t) {
    if (!ue)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function DC(e, t, n) {
    var r = t.pendingProps;
    switch (Fd(t),
    t.tag) {
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
        return Oe(t),
        null;
    case 1:
        return Ze(t.type) && Ra(),
        Oe(t),
        null;
    case 3:
        return r = t.stateNode,
        Ii(),
        ae(qe),
        ae(_e),
        Gd(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Vo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Dt !== null && (Nc(Dt),
        Dt = null))),
        Cc(e, t),
        Oe(t),
        null;
    case 5:
        Kd(t);
        var i = Sr(Us.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Nv(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(D(166));
                return Oe(t),
                null
            }
            if (e = Sr(Yt.current),
            Vo(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[Kt] = t,
                r[Bs] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    oe("cancel", r),
                    oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < ms.length; i++)
                        oe(ms[i], r);
                    break;
                case "source":
                    oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    oe("error", r),
                    oe("load", r);
                    break;
                case "details":
                    oe("toggle", r);
                    break;
                case "input":
                    Ch(r, s),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    Ph(r, s),
                    oe("invalid", r)
                }
                Yu(n, s),
                i = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var a = s[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Io(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Io(r.textContent, a, e),
                        i = ["children", "" + a]) : Ms.hasOwnProperty(o) && a != null && o === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    Ro(r),
                    Eh(r, s, !0);
                    break;
                case "textarea":
                    Ro(r),
                    Th(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = ka)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = sy(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[Kt] = t,
                e[Bs] = r,
                Av(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = Xu(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < ms.length; i++)
                            oe(ms[i], e);
                        i = r;
                        break;
                    case "source":
                        oe("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        i = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Ch(e, r),
                        i = Wu(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = pe({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        Ph(e, r),
                        i = Gu(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Yu(n, i),
                    a = i;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var l = a[s];
                            s === "style" ? ly(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && oy(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ds(e, l) : typeof l == "number" && Ds(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Ms.hasOwnProperty(s) ? l != null && s === "onScroll" && oe("scroll", e) : l != null && Ed(e, s, l, o))
                        }
                    switch (n) {
                    case "input":
                        Ro(e),
                        Eh(e, r, !1);
                        break;
                    case "textarea":
                        Ro(e),
                        Th(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Jn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? mi(e, !!r.multiple, s, !1) : r.defaultValue != null && mi(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = ka)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Oe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Mv(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(D(166));
            if (n = Sr(Us.current),
            Sr(Yt.current),
            Vo(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Kt] = t,
                (s = r.nodeValue !== n) && (e = it,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Io(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Io(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Kt] = t,
                t.stateNode = r
        }
        return Oe(t),
        null;
    case 13:
        if (ae(de),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ue && rt !== null && t.mode & 1 && !(t.flags & 128))
                Yy(),
                Li(),
                t.flags |= 98560,
                s = !1;
            else if (s = Vo(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(D(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(D(317));
                    s[Kt] = t
                } else
                    Li(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Oe(t),
                s = !1
            } else
                Dt !== null && (Nc(Dt),
                Dt = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || de.current & 1 ? Te === 0 && (Te = 3) : of())),
        t.updateQueue !== null && (t.flags |= 4),
        Oe(t),
        null);
    case 4:
        return Ii(),
        Cc(e, t),
        e === null && _s(t.stateNode.containerInfo),
        Oe(t),
        null;
    case 10:
        return $d(t.type._context),
        Oe(t),
        null;
    case 17:
        return Ze(t.type) && Ra(),
        Oe(t),
        null;
    case 19:
        if (ae(de),
        s = t.memoizedState,
        s === null)
            return Oe(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (r)
                as(s, !1);
            else {
                if (Te !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Oa(e),
                        o !== null) {
                            for (t.flags |= 128,
                            as(s, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                o = s.alternate,
                                o === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = o.childLanes,
                                s.lanes = o.lanes,
                                s.child = o.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = o.memoizedProps,
                                s.memoizedState = o.memoizedState,
                                s.updateQueue = o.updateQueue,
                                s.type = o.type,
                                e = o.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return re(de, de.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && ye() > Fi && (t.flags |= 128,
                r = !0,
                as(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Oa(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    as(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !ue)
                        return Oe(t),
                        null
                } else
                    2 * ye() - s.renderingStartTime > Fi && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    as(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = s.last,
            n !== null ? n.sibling = o : t.child = o,
            s.last = o)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = ye(),
        t.sibling = null,
        n = de.current,
        re(de, r ? n & 1 | 2 : n & 1),
        t) : (Oe(t),
        null);
    case 22:
    case 23:
        return sf(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? tt & 1073741824 && (Oe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(D(156, t.tag))
}
function jC(e, t) {
    switch (Fd(t),
    t.tag) {
    case 1:
        return Ze(t.type) && Ra(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Ii(),
        ae(qe),
        ae(_e),
        Gd(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Kd(t),
        null;
    case 13:
        if (ae(de),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(D(340));
            Li()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ae(de),
        null;
    case 4:
        return Ii(),
        null;
    case 10:
        return $d(t.type._context),
        null;
    case 22:
    case 23:
        return sf(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var zo = !1
  , Ve = !1
  , LC = typeof WeakSet == "function" ? WeakSet : Set
  , V = null;
function li(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ge(e, t, r)
            }
        else
            n.current = null
}
function Ec(e, t, n) {
    try {
        n()
    } catch (r) {
        ge(e, t, r)
    }
}
var pp = !1;
function OC(e, t) {
    if (oc = Pa,
    e = Iy(),
    Id(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , f = null;
                    t: for (; ; ) {
                        for (var h; d !== n || i !== 0 && d.nodeType !== 3 || (a = o + i),
                        d !== s || r !== 0 && d.nodeType !== 3 || (l = o + r),
                        d.nodeType === 3 && (o += d.nodeValue.length),
                        (h = d.firstChild) !== null; )
                            f = d,
                            d = h;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === i && (a = o),
                            f === s && ++c === r && (l = o),
                            (h = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = h
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ac = {
        focusedElem: e,
        selectionRange: n
    },
    Pa = !1,
    V = t; V !== null; )
        if (t = V,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            V = e;
        else
            for (; V !== null; ) {
                t = V;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var g = v.memoizedProps
                                  , x = v.memoizedState
                                  , p = t.stateNode
                                  , m = p.getSnapshotBeforeUpdate(t.elementType === t.type ? g : kt(t.type, g), x);
                                p.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(D(163))
                        }
                } catch (C) {
                    ge(t, t.return, C)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    V = e;
                    break
                }
                V = t.return
            }
    return v = pp,
    pp = !1,
    v
}
function Es(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0,
                s !== void 0 && Ec(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function pl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Pc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Dv(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Dv(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Kt],
    delete t[Bs],
    delete t[cc],
    delete t[yC],
    delete t[vC])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function jv(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function mp(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || jv(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Tc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ka));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Tc(e, t, n),
        e = e.sibling; e !== null; )
            Tc(e, t, n),
            e = e.sibling
}
function bc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (bc(e, t, n),
        e = e.sibling; e !== null; )
            bc(e, t, n),
            e = e.sibling
}
var Re = null
  , Mt = !1;
function Tn(e, t, n) {
    for (n = n.child; n !== null; )
        Lv(e, t, n),
        n = n.sibling
}
function Lv(e, t, n) {
    if (Qt && typeof Qt.onCommitFiberUnmount == "function")
        try {
            Qt.onCommitFiberUnmount(ol, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ve || li(n, t);
    case 6:
        var r = Re
          , i = Mt;
        Re = null,
        Tn(e, t, n),
        Re = r,
        Mt = i,
        Re !== null && (Mt ? (e = Re,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Re.removeChild(n.stateNode));
        break;
    case 18:
        Re !== null && (Mt ? (e = Re,
        n = n.stateNode,
        e.nodeType === 8 ? iu(e.parentNode, n) : e.nodeType === 1 && iu(e, n),
        Is(e)) : iu(Re, n.stateNode));
        break;
    case 4:
        r = Re,
        i = Mt,
        Re = n.stateNode.containerInfo,
        Mt = !0,
        Tn(e, t, n),
        Re = r,
        Mt = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ve && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var s = i
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && Ec(n, t, o),
                i = i.next
            } while (i !== r)
        }
        Tn(e, t, n);
        break;
    case 1:
        if (!Ve && (li(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                ge(n, t, a)
            }
        Tn(e, t, n);
        break;
    case 21:
        Tn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ve = (r = Ve) || n.memoizedState !== null,
        Tn(e, t, n),
        Ve = r) : Tn(e, t, n);
        break;
    default:
        Tn(e, t, n)
    }
}
function gp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new LC),
        t.forEach(function(r) {
            var i = WC.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function Et(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e
                  , o = t
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Re = a.stateNode,
                        Mt = !1;
                        break e;
                    case 3:
                        Re = a.stateNode.containerInfo,
                        Mt = !0;
                        break e;
                    case 4:
                        Re = a.stateNode.containerInfo,
                        Mt = !0;
                        break e
                    }
                    a = a.return
                }
                if (Re === null)
                    throw Error(D(160));
                Lv(s, o, i),
                Re = null,
                Mt = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (u) {
                ge(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Ov(t, e),
            t = t.sibling
}
function Ov(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Et(t, e),
        zt(e),
        r & 4) {
            try {
                Es(3, e, e.return),
                pl(3, e)
            } catch (g) {
                ge(e, e.return, g)
            }
            try {
                Es(5, e, e.return)
            } catch (g) {
                ge(e, e.return, g)
            }
        }
        break;
    case 1:
        Et(t, e),
        zt(e),
        r & 512 && n !== null && li(n, n.return);
        break;
    case 5:
        if (Et(t, e),
        zt(e),
        r & 512 && n !== null && li(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Ds(i, "")
            } catch (g) {
                ge(e, e.return, g)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var s = e.memoizedProps
              , o = n !== null ? n.memoizedProps : s
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && s.type === "radio" && s.name != null && ry(i, s),
                    Xu(a, o);
                    var u = Xu(a, s);
                    for (o = 0; o < l.length; o += 2) {
                        var c = l[o]
                          , d = l[o + 1];
                        c === "style" ? ly(i, d) : c === "dangerouslySetInnerHTML" ? oy(i, d) : c === "children" ? Ds(i, d) : Ed(i, c, d, u)
                    }
                    switch (a) {
                    case "input":
                        Hu(i, s);
                        break;
                    case "textarea":
                        iy(i, s);
                        break;
                    case "select":
                        var f = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var h = s.value;
                        h != null ? mi(i, !!s.multiple, h, !1) : f !== !!s.multiple && (s.defaultValue != null ? mi(i, !!s.multiple, s.defaultValue, !0) : mi(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[Bs] = s
                } catch (g) {
                    ge(e, e.return, g)
                }
        }
        break;
    case 6:
        if (Et(t, e),
        zt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(D(162));
            i = e.stateNode,
            s = e.memoizedProps;
            try {
                i.nodeValue = s
            } catch (g) {
                ge(e, e.return, g)
            }
        }
        break;
    case 3:
        if (Et(t, e),
        zt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Is(t.containerInfo)
            } catch (g) {
                ge(e, e.return, g)
            }
        break;
    case 4:
        Et(t, e),
        zt(e);
        break;
    case 13:
        Et(t, e),
        zt(e),
        i = e.child,
        i.flags & 8192 && (s = i.memoizedState !== null,
        i.stateNode.isHidden = s,
        !s || i.alternate !== null && i.alternate.memoizedState !== null || (nf = ye())),
        r & 4 && gp(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ve = (u = Ve) || c,
        Et(t, e),
        Ve = u) : Et(t, e),
        zt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (V = e,
                c = e.child; c !== null; ) {
                    for (d = V = c; V !== null; ) {
                        switch (f = V,
                        h = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Es(4, f, f.return);
                            break;
                        case 1:
                            li(f, f.return);
                            var v = f.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (g) {
                                    ge(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            li(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                vp(d);
                                continue
                            }
                        }
                        h !== null ? (h.return = f,
                        V = h) : vp(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            i = d.stateNode,
                            u ? (s = i.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode,
                            l = d.memoizedProps.style,
                            o = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = ay("display", o))
                        } catch (g) {
                            ge(e, e.return, g)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (g) {
                            ge(e, e.return, g)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        Et(t, e),
        zt(e),
        r & 4 && gp(e);
        break;
    case 21:
        break;
    default:
        Et(t, e),
        zt(e)
    }
}
function zt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (jv(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(D(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Ds(i, ""),
                r.flags &= -33);
                var s = mp(e);
                bc(e, s, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , a = mp(e);
                Tc(e, a, o);
                break;
            default:
                throw Error(D(161))
            }
        } catch (l) {
            ge(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function IC(e, t, n) {
    V = e,
    Iv(e)
}
function Iv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; V !== null; ) {
        var i = V
          , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || zo;
            if (!o) {
                var a = i.alternate
                  , l = a !== null && a.memoizedState !== null || Ve;
                a = zo;
                var u = Ve;
                if (zo = o,
                (Ve = l) && !u)
                    for (V = i; V !== null; )
                        o = V,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? xp(i) : l !== null ? (l.return = o,
                        V = l) : xp(i);
                for (; s !== null; )
                    V = s,
                    Iv(s),
                    s = s.sibling;
                V = i,
                zo = a,
                Ve = u
            }
            yp(e)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
            V = s) : yp(e)
    }
}
function yp(e) {
    for (; V !== null; ) {
        var t = V;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ve || pl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ve)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : kt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && tp(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            tp(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
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
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Is(d)
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
                        throw Error(D(163))
                    }
                Ve || t.flags & 512 && Pc(t)
            } catch (f) {
                ge(t, t.return, f)
            }
        }
        if (t === e) {
            V = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            V = n;
            break
        }
        V = t.return
    }
}
function vp(e) {
    for (; V !== null; ) {
        var t = V;
        if (t === e) {
            V = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            V = n;
            break
        }
        V = t.return
    }
}
function xp(e) {
    for (; V !== null; ) {
        var t = V;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    pl(4, t)
                } catch (l) {
                    ge(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        ge(t, i, l)
                    }
                }
                var s = t.return;
                try {
                    Pc(t)
                } catch (l) {
                    ge(t, s, l)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Pc(t)
                } catch (l) {
                    ge(t, o, l)
                }
            }
        } catch (l) {
            ge(t, t.return, l)
        }
        if (t === e) {
            V = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            V = a;
            break
        }
        V = t.return
    }
}
var VC = Math.ceil
  , Fa = vn.ReactCurrentDispatcher
  , ef = vn.ReactCurrentOwner
  , mt = vn.ReactCurrentBatchConfig
  , Z = 0
  , ke = null
  , we = null
  , Ne = 0
  , tt = 0
  , ui = lr(0)
  , Te = 0
  , Gs = null
  , Ir = 0
  , ml = 0
  , tf = 0
  , Ps = null
  , Ye = null
  , nf = 0
  , Fi = 1 / 0
  , sn = null
  , _a = !1
  , kc = null
  , Yn = null
  , Bo = !1
  , Bn = null
  , za = 0
  , Ts = 0
  , Rc = null
  , aa = -1
  , la = 0;
function He() {
    return Z & 6 ? ye() : aa !== -1 ? aa : aa = ye()
}
function Xn(e) {
    return e.mode & 1 ? Z & 2 && Ne !== 0 ? Ne & -Ne : wC.transition !== null ? (la === 0 && (la = wy()),
    la) : (e = te,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : ky(e.type)),
    e) : 1
}
function Lt(e, t, n, r) {
    if (50 < Ts)
        throw Ts = 0,
        Rc = null,
        Error(D(185));
    lo(e, n, r),
    (!(Z & 2) || e !== ke) && (e === ke && (!(Z & 2) && (ml |= n),
    Te === 4 && Ln(e, Ne)),
    Je(e, r),
    n === 1 && Z === 0 && !(t.mode & 1) && (Fi = ye() + 500,
    dl && ur()))
}
function Je(e, t) {
    var n = e.callbackNode;
    wS(e, t);
    var r = Ea(e, e === ke ? Ne : 0);
    if (r === 0)
        n !== null && Rh(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Rh(n),
        t === 1)
            e.tag === 0 ? xC(wp.bind(null, e)) : Ky(wp.bind(null, e)),
            mC(function() {
                !(Z & 6) && ur()
            }),
            n = null;
        else {
            switch (Sy(r)) {
            case 1:
                n = Rd;
                break;
            case 4:
                n = vy;
                break;
            case 16:
                n = Ca;
                break;
            case 536870912:
                n = xy;
                break;
            default:
                n = Ca
            }
            n = Wv(n, Vv.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Vv(e, t) {
    if (aa = -1,
    la = 0,
    Z & 6)
        throw Error(D(327));
    var n = e.callbackNode;
    if (wi() && e.callbackNode !== n)
        return null;
    var r = Ea(e, e === ke ? Ne : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ba(e, r);
    else {
        t = r;
        var i = Z;
        Z |= 2;
        var s = _v();
        (ke !== e || Ne !== t) && (sn = null,
        Fi = ye() + 500,
        Nr(e, t));
        do
            try {
                zC();
                break
            } catch (a) {
                Fv(e, a)
            }
        while (!0);
        Bd(),
        Fa.current = s,
        Z = i,
        we !== null ? t = 0 : (ke = null,
        Ne = 0,
        t = Te)
    }
    if (t !== 0) {
        if (t === 2 && (i = tc(e),
        i !== 0 && (r = i,
        t = Ac(e, i))),
        t === 1)
            throw n = Gs,
            Nr(e, 0),
            Ln(e, r),
            Je(e, ye()),
            n;
        if (t === 6)
            Ln(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !FC(i) && (t = Ba(e, r),
            t === 2 && (s = tc(e),
            s !== 0 && (r = s,
            t = Ac(e, s))),
            t === 1))
                throw n = Gs,
                Nr(e, 0),
                Ln(e, r),
                Je(e, ye()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(D(345));
            case 2:
                yr(e, Ye, sn);
                break;
            case 3:
                if (Ln(e, r),
                (r & 130023424) === r && (t = nf + 500 - ye(),
                10 < t)) {
                    if (Ea(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        He(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = uc(yr.bind(null, e, Ye, sn), t);
                    break
                }
                yr(e, Ye, sn);
                break;
            case 4:
                if (Ln(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - jt(r);
                    s = 1 << o,
                    o = t[o],
                    o > i && (i = o),
                    r &= ~s
                }
                if (r = i,
                r = ye() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * VC(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = uc(yr.bind(null, e, Ye, sn), r);
                    break
                }
                yr(e, Ye, sn);
                break;
            case 5:
                yr(e, Ye, sn);
                break;
            default:
                throw Error(D(329))
            }
        }
    }
    return Je(e, ye()),
    e.callbackNode === n ? Vv.bind(null, e) : null
}
function Ac(e, t) {
    var n = Ps;
    return e.current.memoizedState.isDehydrated && (Nr(e, t).flags |= 256),
    e = Ba(e, t),
    e !== 2 && (t = Ye,
    Ye = n,
    t !== null && Nc(t)),
    e
}
function Nc(e) {
    Ye === null ? Ye = e : Ye.push.apply(Ye, e)
}
function FC(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Ot(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Ln(e, t) {
    for (t &= ~tf,
    t &= ~ml,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - jt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function wp(e) {
    if (Z & 6)
        throw Error(D(327));
    wi();
    var t = Ea(e, 0);
    if (!(t & 1))
        return Je(e, ye()),
        null;
    var n = Ba(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = tc(e);
        r !== 0 && (t = r,
        n = Ac(e, r))
    }
    if (n === 1)
        throw n = Gs,
        Nr(e, 0),
        Ln(e, t),
        Je(e, ye()),
        n;
    if (n === 6)
        throw Error(D(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    yr(e, Ye, sn),
    Je(e, ye()),
    null
}
function rf(e, t) {
    var n = Z;
    Z |= 1;
    try {
        return e(t)
    } finally {
        Z = n,
        Z === 0 && (Fi = ye() + 500,
        dl && ur())
    }
}
function Vr(e) {
    Bn !== null && Bn.tag === 0 && !(Z & 6) && wi();
    var t = Z;
    Z |= 1;
    var n = mt.transition
      , r = te;
    try {
        if (mt.transition = null,
        te = 1,
        e)
            return e()
    } finally {
        te = r,
        mt.transition = n,
        Z = t,
        !(Z & 6) && ur()
    }
}
function sf() {
    tt = ui.current,
    ae(ui)
}
function Nr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    pC(n)),
    we !== null)
        for (n = we.return; n !== null; ) {
            var r = n;
            switch (Fd(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ra();
                break;
            case 3:
                Ii(),
                ae(qe),
                ae(_e),
                Gd();
                break;
            case 5:
                Kd(r);
                break;
            case 4:
                Ii();
                break;
            case 13:
                ae(de);
                break;
            case 19:
                ae(de);
                break;
            case 10:
                $d(r.type._context);
                break;
            case 22:
            case 23:
                sf()
            }
            n = n.return
        }
    if (ke = e,
    we = e = qn(e.current, null),
    Ne = tt = t,
    Te = 0,
    Gs = null,
    tf = ml = Ir = 0,
    Ye = Ps = null,
    wr !== null) {
        for (t = 0; t < wr.length; t++)
            if (n = wr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i,
                    r.next = o
                }
                n.pending = r
            }
        wr = null
    }
    return e
}
function Fv(e, t) {
    do {
        var n = we;
        try {
            if (Bd(),
            ia.current = Va,
            Ia) {
                for (var r = he.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Ia = !1
            }
            if (Or = 0,
            be = Ee = he = null,
            Cs = !1,
            Ws = 0,
            ef.current = null,
            n === null || n.return === null) {
                Te = 1,
                Gs = t,
                we = null;
                break
            }
            e: {
                var s = e
                  , o = n.return
                  , a = n
                  , l = t;
                if (t = Ne,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var h = ap(o);
                    if (h !== null) {
                        h.flags &= -257,
                        lp(h, o, a, s, t),
                        h.mode & 1 && op(s, u, t),
                        t = h,
                        l = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var g = new Set;
                            g.add(l),
                            t.updateQueue = g
                        } else
                            v.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            op(s, u, t),
                            of();
                            break e
                        }
                        l = Error(D(426))
                    }
                } else if (ue && a.mode & 1) {
                    var x = ap(o);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                        lp(x, o, a, s, t),
                        _d(Vi(l, a));
                        break e
                    }
                }
                s = l = Vi(l, a),
                Te !== 4 && (Te = 2),
                Ps === null ? Ps = [s] : Ps.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var p = Sv(s, l, t);
                        ep(s, p);
                        break e;
                    case 1:
                        a = l;
                        var m = s.type
                          , y = s.stateNode;
                        if (!(s.flags & 128) && (typeof m.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Yn === null || !Yn.has(y)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var C = Cv(s, a, t);
                            ep(s, C);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            Bv(n)
        } catch (E) {
            t = E,
            we === n && n !== null && (we = n = n.return);
            continue
        }
        break
    } while (!0)
}
function _v() {
    var e = Fa.current;
    return Fa.current = Va,
    e === null ? Va : e
}
function of() {
    (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    ke === null || !(Ir & 268435455) && !(ml & 268435455) || Ln(ke, Ne)
}
function Ba(e, t) {
    var n = Z;
    Z |= 2;
    var r = _v();
    (ke !== e || Ne !== t) && (sn = null,
    Nr(e, t));
    do
        try {
            _C();
            break
        } catch (i) {
            Fv(e, i)
        }
    while (!0);
    if (Bd(),
    Z = n,
    Fa.current = r,
    we !== null)
        throw Error(D(261));
    return ke = null,
    Ne = 0,
    Te
}
function _C() {
    for (; we !== null; )
        zv(we)
}
function zC() {
    for (; we !== null && !dS(); )
        zv(we)
}
function zv(e) {
    var t = Uv(e.alternate, e, tt);
    e.memoizedProps = e.pendingProps,
    t === null ? Bv(e) : we = t,
    ef.current = null
}
function Bv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = jC(n, t),
            n !== null) {
                n.flags &= 32767,
                we = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Te = 6,
                we = null;
                return
            }
        } else if (n = DC(n, t, tt),
        n !== null) {
            we = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            we = t;
            return
        }
        we = t = e
    } while (t !== null);
    Te === 0 && (Te = 5)
}
function yr(e, t, n) {
    var r = te
      , i = mt.transition;
    try {
        mt.transition = null,
        te = 1,
        BC(e, t, n, r)
    } finally {
        mt.transition = i,
        te = r
    }
    return null
}
function BC(e, t, n, r) {
    do
        wi();
    while (Bn !== null);
    if (Z & 6)
        throw Error(D(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(D(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (SS(e, s),
    e === ke && (we = ke = null,
    Ne = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Bo || (Bo = !0,
    Wv(Ca, function() {
        return wi(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = mt.transition,
        mt.transition = null;
        var o = te;
        te = 1;
        var a = Z;
        Z |= 4,
        ef.current = null,
        OC(e, n),
        Ov(n, e),
        aC(ac),
        Pa = !!oc,
        ac = oc = null,
        e.current = n,
        IC(n),
        fS(),
        Z = a,
        te = o,
        mt.transition = s
    } else
        e.current = n;
    if (Bo && (Bo = !1,
    Bn = e,
    za = i),
    s = e.pendingLanes,
    s === 0 && (Yn = null),
    mS(n.stateNode),
    Je(e, ye()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (_a)
        throw _a = !1,
        e = kc,
        kc = null,
        e;
    return za & 1 && e.tag !== 0 && wi(),
    s = e.pendingLanes,
    s & 1 ? e === Rc ? Ts++ : (Ts = 0,
    Rc = e) : Ts = 0,
    ur(),
    null
}
function wi() {
    if (Bn !== null) {
        var e = Sy(za)
          , t = mt.transition
          , n = te;
        try {
            if (mt.transition = null,
            te = 16 > e ? 16 : e,
            Bn === null)
                var r = !1;
            else {
                if (e = Bn,
                Bn = null,
                za = 0,
                Z & 6)
                    throw Error(D(331));
                var i = Z;
                for (Z |= 4,
                V = e.current; V !== null; ) {
                    var s = V
                      , o = s.child;
                    if (V.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (V = u; V !== null; ) {
                                    var c = V;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Es(8, c, s)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        V = d;
                                    else
                                        for (; V !== null; ) {
                                            c = V;
                                            var f = c.sibling
                                              , h = c.return;
                                            if (Dv(c),
                                            c === u) {
                                                V = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h,
                                                V = f;
                                                break
                                            }
                                            V = h
                                        }
                                }
                            }
                            var v = s.alternate;
                            if (v !== null) {
                                var g = v.child;
                                if (g !== null) {
                                    v.child = null;
                                    do {
                                        var x = g.sibling;
                                        g.sibling = null,
                                        g = x
                                    } while (g !== null)
                                }
                            }
                            V = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                        V = o;
                    else
                        e: for (; V !== null; ) {
                            if (s = V,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Es(9, s, s.return)
                                }
                            var p = s.sibling;
                            if (p !== null) {
                                p.return = s.return,
                                V = p;
                                break e
                            }
                            V = s.return
                        }
                }
                var m = e.current;
                for (V = m; V !== null; ) {
                    o = V;
                    var y = o.child;
                    if (o.subtreeFlags & 2064 && y !== null)
                        y.return = o,
                        V = y;
                    else
                        e: for (o = m; V !== null; ) {
                            if (a = V,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        pl(9, a)
                                    }
                                } catch (E) {
                                    ge(a, a.return, E)
                                }
                            if (a === o) {
                                V = null;
                                break e
                            }
                            var C = a.sibling;
                            if (C !== null) {
                                C.return = a.return,
                                V = C;
                                break e
                            }
                            V = a.return
                        }
                }
                if (Z = i,
                ur(),
                Qt && typeof Qt.onPostCommitFiberRoot == "function")
                    try {
                        Qt.onPostCommitFiberRoot(ol, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            te = n,
            mt.transition = t
        }
    }
    return !1
}
function Sp(e, t, n) {
    t = Vi(n, t),
    t = Sv(e, t, 1),
    e = Qn(e, t, 1),
    t = He(),
    e !== null && (lo(e, 1, t),
    Je(e, t))
}
function ge(e, t, n) {
    if (e.tag === 3)
        Sp(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Sp(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yn === null || !Yn.has(r))) {
                    e = Vi(n, e),
                    e = Cv(t, e, 1),
                    t = Qn(t, e, 1),
                    e = He(),
                    t !== null && (lo(t, 1, e),
                    Je(t, e));
                    break
                }
            }
            t = t.return
        }
}
function $C(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = He(),
    e.pingedLanes |= e.suspendedLanes & n,
    ke === e && (Ne & n) === n && (Te === 4 || Te === 3 && (Ne & 130023424) === Ne && 500 > ye() - nf ? Nr(e, 0) : tf |= n),
    Je(e, t)
}
function $v(e, t) {
    t === 0 && (e.mode & 1 ? (t = Mo,
    Mo <<= 1,
    !(Mo & 130023424) && (Mo = 4194304)) : t = 1);
    var n = He();
    e = hn(e, t),
    e !== null && (lo(e, t, n),
    Je(e, n))
}
function UC(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    $v(e, n)
}
function WC(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(D(314))
    }
    r !== null && r.delete(t),
    $v(e, n)
}
var Uv;
Uv = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || qe.current)
            Xe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Xe = !1,
                MC(e, t, n);
            Xe = !!(e.flags & 131072)
        }
    else
        Xe = !1,
        ue && t.flags & 1048576 && Gy(t, Ma, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        oa(e, t),
        e = t.pendingProps;
        var i = ji(t, _e.current);
        xi(t, n),
        i = Yd(null, t, r, e, i, n);
        var s = Xd();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ze(r) ? (s = !0,
        Aa(t)) : s = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Wd(t),
        i.updater = hl,
        t.stateNode = i,
        i._reactInternals = t,
        gc(t, r, e, n),
        t = xc(null, t, r, !0, s, n)) : (t.tag = 0,
        ue && s && Vd(t),
        Be(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (oa(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = KC(r),
            e = kt(r, e),
            i) {
            case 0:
                t = vc(null, t, r, e, n);
                break e;
            case 1:
                t = dp(null, t, r, e, n);
                break e;
            case 11:
                t = up(null, t, r, e, n);
                break e;
            case 14:
                t = cp(null, t, r, kt(r.type, e), n);
                break e
            }
            throw Error(D(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : kt(r, i),
        vc(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : kt(r, i),
        dp(e, t, r, i, n);
    case 3:
        e: {
            if (bv(t),
            e === null)
                throw Error(D(387));
            r = t.pendingProps,
            s = t.memoizedState,
            i = s.element,
            Jy(e, t),
            La(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    i = Vi(Error(D(423)), t),
                    t = fp(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Vi(Error(D(424)), t),
                    t = fp(e, t, r, n, i);
                    break e
                } else
                    for (rt = Gn(t.stateNode.containerInfo.firstChild),
                    it = t,
                    ue = !0,
                    Dt = null,
                    n = qy(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Li(),
                r === i) {
                    t = pn(e, t, n);
                    break e
                }
                Be(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return ev(t),
        e === null && hc(t),
        r = t.type,
        i = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        o = i.children,
        lc(r, i) ? o = null : s !== null && lc(r, s) && (t.flags |= 32),
        Tv(e, t),
        Be(e, t, o, n),
        t.child;
    case 6:
        return e === null && hc(t),
        null;
    case 13:
        return kv(e, t, n);
    case 4:
        return Hd(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Oi(t, null, r, n) : Be(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : kt(r, i),
        up(e, t, r, i, n);
    case 7:
        return Be(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Be(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Be(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            s = t.memoizedProps,
            o = i.value,
            re(Da, r._currentValue),
            r._currentValue = o,
            s !== null)
                if (Ot(s.value, o)) {
                    if (s.children === i.children && !qe.current) {
                        t = pn(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var a = s.dependencies;
                        if (a !== null) {
                            o = s.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (s.tag === 1) {
                                        l = cn(-1, n & -n),
                                        l.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    s.lanes |= n,
                                    l = s.alternate,
                                    l !== null && (l.lanes |= n),
                                    pc(s.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (s.tag === 10)
                            o = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return,
                            o === null)
                                throw Error(D(341));
                            o.lanes |= n,
                            a = o.alternate,
                            a !== null && (a.lanes |= n),
                            pc(o, n, t),
                            o = s.sibling
                        } else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (s = o.sibling,
                                s !== null) {
                                    s.return = o.return,
                                    o = s;
                                    break
                                }
                                o = o.return
                            }
                        s = o
                    }
            Be(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        xi(t, n),
        i = vt(i),
        r = r(i),
        t.flags |= 1,
        Be(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = kt(r, t.pendingProps),
        i = kt(r.type, i),
        cp(e, t, r, i, n);
    case 15:
        return Ev(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : kt(r, i),
        oa(e, t),
        t.tag = 1,
        Ze(r) ? (e = !0,
        Aa(t)) : e = !1,
        xi(t, n),
        wv(t, r, i),
        gc(t, r, i, n),
        xc(null, t, r, !0, e, n);
    case 19:
        return Rv(e, t, n);
    case 22:
        return Pv(e, t, n)
    }
    throw Error(D(156, t.tag))
}
;
function Wv(e, t) {
    return yy(e, t)
}
function HC(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function ht(e, t, n, r) {
    return new HC(e,t,n,r)
}
function af(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function KC(e) {
    if (typeof e == "function")
        return af(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Td)
            return 11;
        if (e === bd)
            return 14
    }
    return 2
}
function qn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ht(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function ua(e, t, n, r, i, s) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        af(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case Jr:
            return Mr(n.children, i, s, t);
        case Pd:
            o = 8,
            i |= 8;
            break;
        case zu:
            return e = ht(12, n, t, i | 2),
            e.elementType = zu,
            e.lanes = s,
            e;
        case Bu:
            return e = ht(13, n, t, i),
            e.elementType = Bu,
            e.lanes = s,
            e;
        case $u:
            return e = ht(19, n, t, i),
            e.elementType = $u,
            e.lanes = s,
            e;
        case ey:
            return gl(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Zg:
                    o = 10;
                    break e;
                case Jg:
                    o = 9;
                    break e;
                case Td:
                    o = 11;
                    break e;
                case bd:
                    o = 14;
                    break e;
                case Mn:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(D(130, e == null ? e : typeof e, ""))
        }
    return t = ht(o, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function Mr(e, t, n, r) {
    return e = ht(7, e, r, t),
    e.lanes = n,
    e
}
function gl(e, t, n, r) {
    return e = ht(22, e, r, t),
    e.elementType = ey,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function fu(e, t, n) {
    return e = ht(6, e, null, t),
    e.lanes = n,
    e
}
function hu(e, t, n) {
    return t = ht(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function GC(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Gl(0),
    this.expirationTimes = Gl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Gl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function lf(e, t, n, r, i, s, o, a, l) {
    return e = new GC(e,t,n,a,l),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = ht(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Wd(s),
    e
}
function QC(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Zr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Hv(e) {
    if (!e)
        return er;
    e = e._reactInternals;
    e: {
        if (Br(e) !== e || e.tag !== 1)
            throw Error(D(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ze(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(D(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ze(n))
            return Hy(e, n, t)
    }
    return t
}
function Kv(e, t, n, r, i, s, o, a, l) {
    return e = lf(n, r, !0, e, i, s, o, a, l),
    e.context = Hv(null),
    n = e.current,
    r = He(),
    i = Xn(n),
    s = cn(r, i),
    s.callback = t ?? null,
    Qn(n, s, i),
    e.current.lanes = i,
    lo(e, i, r),
    Je(e, r),
    e
}
function yl(e, t, n, r) {
    var i = t.current
      , s = He()
      , o = Xn(i);
    return n = Hv(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = cn(s, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Qn(i, t, o),
    e !== null && (Lt(e, i, o, s),
    ra(e, i, o)),
    o
}
function $a(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Cp(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function uf(e, t) {
    Cp(e, t),
    (e = e.alternate) && Cp(e, t)
}
function YC() {
    return null
}
var Gv = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function cf(e) {
    this._internalRoot = e
}
vl.prototype.render = cf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(D(409));
    yl(e, t, null, null)
}
;
vl.prototype.unmount = cf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Vr(function() {
            yl(null, e, null, null)
        }),
        t[fn] = null
    }
}
;
function vl(e) {
    this._internalRoot = e
}
vl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Py();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < jn.length && t !== 0 && t < jn[n].priority; n++)
            ;
        jn.splice(n, 0, e),
        n === 0 && by(e)
    }
}
;
function df(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function xl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Ep() {}
function XC(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = $a(o);
                s.call(u)
            }
        }
        var o = Kv(t, r, e, 0, null, !1, !1, "", Ep);
        return e._reactRootContainer = o,
        e[fn] = o.current,
        _s(e.nodeType === 8 ? e.parentNode : e),
        Vr(),
        o
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = $a(l);
            a.call(u)
        }
    }
    var l = lf(e, 0, !1, null, null, !1, !1, "", Ep);
    return e._reactRootContainer = l,
    e[fn] = l.current,
    _s(e.nodeType === 8 ? e.parentNode : e),
    Vr(function() {
        yl(t, l, n, r)
    }),
    l
}
function wl(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = $a(o);
                a.call(l)
            }
        }
        yl(t, o, e, i)
    } else
        o = XC(n, t, e, i, r);
    return $a(o)
}
Cy = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = ps(t.pendingLanes);
            n !== 0 && (Ad(t, n | 1),
            Je(t, ye()),
            !(Z & 6) && (Fi = ye() + 500,
            ur()))
        }
        break;
    case 13:
        Vr(function() {
            var r = hn(e, 1);
            if (r !== null) {
                var i = He();
                Lt(r, e, 1, i)
            }
        }),
        uf(e, 1)
    }
}
;
Nd = function(e) {
    if (e.tag === 13) {
        var t = hn(e, 134217728);
        if (t !== null) {
            var n = He();
            Lt(t, e, 134217728, n)
        }
        uf(e, 134217728)
    }
}
;
Ey = function(e) {
    if (e.tag === 13) {
        var t = Xn(e)
          , n = hn(e, t);
        if (n !== null) {
            var r = He();
            Lt(n, e, t, r)
        }
        uf(e, t)
    }
}
;
Py = function() {
    return te
}
;
Ty = function(e, t) {
    var n = te;
    try {
        return te = e,
        t()
    } finally {
        te = n
    }
}
;
Zu = function(e, t, n) {
    switch (t) {
    case "input":
        if (Hu(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = cl(r);
                    if (!i)
                        throw Error(D(90));
                    ny(r),
                    Hu(r, i)
                }
            }
        }
        break;
    case "textarea":
        iy(e, n);
        break;
    case "select":
        t = n.value,
        t != null && mi(e, !!n.multiple, t, !1)
    }
}
;
dy = rf;
fy = Vr;
var qC = {
    usingClientEntryPoint: !1,
    Events: [co, ri, cl, uy, cy, rf]
}
  , ls = {
    findFiberByHostInstance: xr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , ZC = {
    bundleType: ls.bundleType,
    version: ls.version,
    rendererPackageName: ls.rendererPackageName,
    rendererConfig: ls.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: vn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = my(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ls.findFiberByHostInstance || YC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$o.isDisabled && $o.supportsFiber)
        try {
            ol = $o.inject(ZC),
            Qt = $o
        } catch {}
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qC;
at.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!df(t))
        throw Error(D(200));
    return QC(e, t, null, n)
}
;
at.createRoot = function(e, t) {
    if (!df(e))
        throw Error(D(299));
    var n = !1
      , r = ""
      , i = Gv;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = lf(e, 1, !1, null, null, n, !1, r, i),
    e[fn] = t.current,
    _s(e.nodeType === 8 ? e.parentNode : e),
    new cf(t)
}
;
at.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","),
        Error(D(268, e)));
    return e = my(t),
    e = e === null ? null : e.stateNode,
    e
}
;
at.flushSync = function(e) {
    return Vr(e)
}
;
at.hydrate = function(e, t, n) {
    if (!xl(t))
        throw Error(D(200));
    return wl(null, e, t, !0, n)
}
;
at.hydrateRoot = function(e, t, n) {
    if (!df(e))
        throw Error(D(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , s = ""
      , o = Gv;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = Kv(t, null, e, 1, n ?? null, i, !1, s, o),
    e[fn] = t.current,
    _s(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new vl(t)
}
;
at.render = function(e, t, n) {
    if (!xl(t))
        throw Error(D(200));
    return wl(null, e, t, !1, n)
}
;
at.unmountComponentAtNode = function(e) {
    if (!xl(e))
        throw Error(D(40));
    return e._reactRootContainer ? (Vr(function() {
        wl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[fn] = null
        })
    }),
    !0) : !1
}
;
at.unstable_batchedUpdates = rf;
at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!xl(n))
        throw Error(D(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(D(38));
    return wl(e, t, n, !1, r)
}
;
at.version = "18.3.1-next-f1338f8080-20240426";
function Qv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qv)
        } catch (e) {
            console.error(e)
        }
}
Qv(),
Qg.exports = at;
var ho = Qg.exports;
const Yv = Og(ho);
var Xv, Pp = ho;
Xv = Pp.createRoot,
Pp.hydrateRoot;
const JC = 1
  , eE = 1e6;
let pu = 0;
function tE() {
    return pu = (pu + 1) % Number.MAX_SAFE_INTEGER,
    pu.toString()
}
const mu = new Map
  , Tp = e => {
    if (mu.has(e))
        return;
    const t = setTimeout( () => {
        mu.delete(e),
        bs({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , eE);
    mu.set(e, t)
}
  , nE = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, JC)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Tp(n) : e.toasts.forEach(r => {
                Tp(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , ca = [];
let da = {
    toasts: []
};
function bs(e) {
    da = nE(da, e),
    ca.forEach(t => {
        t(da)
    }
    )
}
function rE({...e}) {
    const t = tE()
      , n = i => bs({
        type: "UPDATE_TOAST",
        toast: {
            ...i,
            id: t
        }
    })
      , r = () => bs({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return bs({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: i => {
                i || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function iE() {
    const [e,t] = w.useState(da);
    return w.useEffect( () => (ca.push(t),
    () => {
        const n = ca.indexOf(t);
        n > -1 && ca.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: rE,
        dismiss: n => bs({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function Pe(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(i) {
        if (e == null || e(i),
        n === !1 || !i.defaultPrevented)
            return t == null ? void 0 : t(i)
    }
}
function bp(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function qv(...e) {
    return t => {
        let n = !1;
        const r = e.map(i => {
            const s = bp(i, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let i = 0; i < r.length; i++) {
                    const s = r[i];
                    typeof s == "function" ? s() : bp(e[i], null)
                }
            }
    }
}
function It(...e) {
    return w.useCallback(qv(...e), e)
}
function Sl(e, t=[]) {
    let n = [];
    function r(s, o) {
        const a = w.createContext(o)
          , l = n.length;
        n = [...n, o];
        const u = d => {
            var p;
            const {scope: f, children: h, ...v} = d
              , g = ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[l]) || a
              , x = w.useMemo( () => v, Object.values(v));
            return S.jsx(g.Provider, {
                value: x,
                children: h
            })
        }
        ;
        u.displayName = s + "Provider";
        function c(d, f) {
            var g;
            const h = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a
              , v = w.useContext(h);
            if (v)
                return v;
            if (o !== void 0)
                return o;
            throw new Error(`\`${d}\` must be used within \`${s}\``)
        }
        return [u, c]
    }
    const i = () => {
        const s = n.map(o => w.createContext(o));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return w.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return i.scopeName = e,
    [r, sE(i, ...t)]
}
function sE(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(i => ({
            useScope: i(),
            scopeName: i.scopeName
        }));
        return function(s) {
            const o = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const d = l(s)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
            , {});
            return w.useMemo( () => ({
                [`__scope${t.scopeName}`]: o
            }), [o])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function Ua(e) {
    const t = aE(e)
      , n = w.forwardRef( (r, i) => {
        const {children: s, ...o} = r
          , a = w.Children.toArray(s)
          , l = a.find(uE);
        if (l) {
            const u = l.props.children
              , c = a.map(d => d === l ? w.Children.count(u) > 1 ? w.Children.only(null) : w.isValidElement(u) ? u.props.children : null : d);
            return S.jsx(t, {
                ...o,
                ref: i,
                children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null
            })
        }
        return S.jsx(t, {
            ...o,
            ref: i,
            children: s
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var oE = Ua("Slot");
function aE(e) {
    const t = w.forwardRef( (n, r) => {
        const {children: i, ...s} = n;
        if (w.isValidElement(i)) {
            const o = dE(i)
              , a = cE(s, i.props);
            return i.type !== w.Fragment && (a.ref = r ? qv(r, o) : o),
            w.cloneElement(i, a)
        }
        return w.Children.count(i) > 1 ? w.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Zv = Symbol("radix.slottable");
function lE(e) {
    const t = ({children: n}) => S.jsx(S.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Zv,
    t
}
function uE(e) {
    return w.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Zv
}
function cE(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const i = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? i && s ? n[r] = (...a) => {
            const l = s(...a);
            return i(...a),
            l
        }
        : i && (n[r] = i) : r === "style" ? n[r] = {
            ...i,
            ...s
        } : r === "className" && (n[r] = [i, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function dE(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function fE(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Sl(t)
      , [i,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , o = g => {
        const {scope: x, children: p} = g
          , m = j.useRef(null)
          , y = j.useRef(new Map).current;
        return S.jsx(i, {
            scope: x,
            itemMap: y,
            collectionRef: m,
            children: p
        })
    }
    ;
    o.displayName = t;
    const a = e + "CollectionSlot"
      , l = Ua(a)
      , u = j.forwardRef( (g, x) => {
        const {scope: p, children: m} = g
          , y = s(a, p)
          , C = It(x, y.collectionRef);
        return S.jsx(l, {
            ref: C,
            children: m
        })
    }
    );
    u.displayName = a;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , f = Ua(c)
      , h = j.forwardRef( (g, x) => {
        const {scope: p, children: m, ...y} = g
          , C = j.useRef(null)
          , E = It(x, C)
          , P = s(c, p);
        return j.useEffect( () => (P.itemMap.set(C, {
            ref: C,
            ...y
        }),
        () => void P.itemMap.delete(C))),
        S.jsx(f, {
            [d]: "",
            ref: E,
            children: m
        })
    }
    );
    h.displayName = c;
    function v(g) {
        const x = s(e + "CollectionConsumer", g);
        return j.useCallback( () => {
            const m = x.collectionRef.current;
            if (!m)
                return [];
            const y = Array.from(m.querySelectorAll(`[${d}]`));
            return Array.from(x.itemMap.values()).sort( (P, T) => y.indexOf(P.ref.current) - y.indexOf(T.ref.current))
        }
        , [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: o,
        Slot: u,
        ItemSlot: h
    }, v, r]
}
var hE = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , et = hE.reduce( (e, t) => {
    const n = Ua(`Primitive.${t}`)
      , r = w.forwardRef( (i, s) => {
        const {asChild: o, ...a} = i
          , l = o ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        S.jsx(l, {
            ...a,
            ref: s
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Jv(e, t) {
    e && ho.flushSync( () => e.dispatchEvent(t))
}
function tr(e) {
    const t = w.useRef(e);
    return w.useEffect( () => {
        t.current = e
    }
    ),
    w.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function pE(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = tr(e);
    w.useEffect( () => {
        const r = i => {
            i.key === "Escape" && n(i)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var mE = "DismissableLayer", Mc = "dismissableLayer.update", gE = "dismissableLayer.pointerDownOutside", yE = "dismissableLayer.focusOutside", kp, e0 = w.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), ff = w.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: s, onInteractOutside: o, onDismiss: a, ...l} = e
      , u = w.useContext(e0)
      , [c,d] = w.useState(null)
      , f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,h] = w.useState({})
      , v = It(t, T => d(T))
      , g = Array.from(u.layers)
      , [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , p = g.indexOf(x)
      , m = c ? g.indexOf(c) : -1
      , y = u.layersWithOutsidePointerEventsDisabled.size > 0
      , C = m >= p
      , E = xE(T => {
        const b = T.target
          , N = [...u.branches].some(M => M.contains(b));
        !C || N || (i == null || i(T),
        o == null || o(T),
        T.defaultPrevented || a == null || a())
    }
    , f)
      , P = wE(T => {
        const b = T.target;
        [...u.branches].some(M => M.contains(b)) || (s == null || s(T),
        o == null || o(T),
        T.defaultPrevented || a == null || a())
    }
    , f);
    return pE(T => {
        m === u.layers.size - 1 && (r == null || r(T),
        !T.defaultPrevented && a && (T.preventDefault(),
        a()))
    }
    , f),
    w.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (kp = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Rp(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = kp)
            }
    }
    , [c, f, n, u]),
    w.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        Rp())
    }
    , [c, u]),
    w.useEffect( () => {
        const T = () => h({});
        return document.addEventListener(Mc, T),
        () => document.removeEventListener(Mc, T)
    }
    , []),
    S.jsx(et.div, {
        ...l,
        ref: v,
        style: {
            pointerEvents: y ? C ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: Pe(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: Pe(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: Pe(e.onPointerDownCapture, E.onPointerDownCapture)
    })
}
);
ff.displayName = mE;
var vE = "DismissableLayerBranch"
  , t0 = w.forwardRef( (e, t) => {
    const n = w.useContext(e0)
      , r = w.useRef(null)
      , i = It(t, r);
    return w.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    S.jsx(et.div, {
        ...e,
        ref: i
    })
}
);
t0.displayName = vE;
function xE(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = tr(e)
      , r = w.useRef(!1)
      , i = w.useRef( () => {}
    );
    return w.useEffect( () => {
        const s = a => {
            if (a.target && !r.current) {
                let l = function() {
                    n0(gE, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", i.current),
                i.current = l,
                t.addEventListener("click", i.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", i.current);
            r.current = !1
        }
          , o = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(o),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", i.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function wE(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = tr(e)
      , r = w.useRef(!1);
    return w.useEffect( () => {
        const i = s => {
            s.target && !r.current && n0(yE, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", i),
        () => t.removeEventListener("focusin", i)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Rp() {
    const e = new CustomEvent(Mc);
    document.dispatchEvent(e)
}
function n0(e, t, n, {discrete: r}) {
    const i = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && i.addEventListener(e, t, {
        once: !0
    }),
    r ? Jv(i, s) : i.dispatchEvent(s)
}
var SE = ff
  , CE = t0
  , nr = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {}
  , EE = "Portal"
  , r0 = w.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [i,s] = w.useState(!1);
    nr( () => s(!0), []);
    const o = n || i && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return o ? Yv.createPortal(S.jsx(et.div, {
        ...r,
        ref: t
    }), o) : null
}
);
r0.displayName = EE;
function PE(e, t) {
    return w.useReducer( (n, r) => t[n][r] ?? n, e)
}
var hf = e => {
    const {present: t, children: n} = e
      , r = TE(t)
      , i = typeof n == "function" ? n({
        present: r.isPresent
    }) : w.Children.only(n)
      , s = It(r.ref, bE(i));
    return typeof n == "function" || r.isPresent ? w.cloneElement(i, {
        ref: s
    }) : null
}
;
hf.displayName = "Presence";
function TE(e) {
    const [t,n] = w.useState()
      , r = w.useRef(null)
      , i = w.useRef(e)
      , s = w.useRef("none")
      , o = e ? "mounted" : "unmounted"
      , [a,l] = PE(o, {
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
    return w.useEffect( () => {
        const u = Uo(r.current);
        s.current = a === "mounted" ? u : "none"
    }
    , [a]),
    nr( () => {
        const u = r.current
          , c = i.current;
        if (c !== e) {
            const f = s.current
              , h = Uo(u);
            e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
            i.current = e
        }
    }
    , [e, l]),
    nr( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , d = h => {
                const g = Uo(r.current).includes(h.animationName);
                if (h.target === t && g && (l("ANIMATION_END"),
                !i.current)) {
                    const x = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x)
                    }
                    )
                }
            }
              , f = h => {
                h.target === t && (s.current = Uo(r.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: w.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function Uo(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function bE(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var kE = Kg[" useInsertionEffect ".trim().toString()] || nr;
function RE({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [i,s,o] = AE({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , l = a ? e : i;
    {
        const c = w.useRef(e !== void 0);
        w.useEffect( () => {
            const d = c.current;
            d !== a && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = a
        }
        , [a, r])
    }
    const u = w.useCallback(c => {
        var d;
        if (a) {
            const f = NE(c) ? c(e) : c;
            f !== e && ((d = o.current) == null || d.call(o, f))
        } else
            s(c)
    }
    , [a, e, s, o]);
    return [l, u]
}
function AE({defaultProp: e, onChange: t}) {
    const [n,r] = w.useState(e)
      , i = w.useRef(n)
      , s = w.useRef(t);
    return kE( () => {
        s.current = t
    }
    , [t]),
    w.useEffect( () => {
        var o;
        i.current !== n && ((o = s.current) == null || o.call(s, n),
        i.current = n)
    }
    , [n, i]),
    [n, r, s]
}
function NE(e) {
    return typeof e == "function"
}
var ME = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , DE = "VisuallyHidden"
  , Cl = w.forwardRef( (e, t) => S.jsx(et.span, {
    ...e,
    ref: t,
    style: {
        ...ME,
        ...e.style
    }
}));
Cl.displayName = DE;
var jE = Cl
  , pf = "ToastProvider"
  , [mf,LE,OE] = fE("Toast")
  , [i0,qD] = Sl("Toast", [OE])
  , [IE,El] = i0(pf)
  , s0 = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: i="right", swipeThreshold: s=50, children: o} = e
      , [a,l] = w.useState(null)
      , [u,c] = w.useState(0)
      , d = w.useRef(!1)
      , f = w.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${pf}\`. Expected non-empty \`string\`.`),
    S.jsx(mf.Provider, {
        scope: t,
        children: S.jsx(IE, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: i,
            swipeThreshold: s,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: w.useCallback( () => c(h => h + 1), []),
            onToastRemove: w.useCallback( () => c(h => h - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: f,
            children: o
        })
    })
}
;
s0.displayName = pf;
var o0 = "ToastViewport"
  , VE = ["F8"]
  , Dc = "toast.viewportPause"
  , jc = "toast.viewportResume"
  , a0 = w.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=VE, label: i="Notifications ({hotkey})", ...s} = e
      , o = El(o0, n)
      , a = LE(n)
      , l = w.useRef(null)
      , u = w.useRef(null)
      , c = w.useRef(null)
      , d = w.useRef(null)
      , f = It(t, d, o.onViewportChange)
      , h = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , v = o.toastCount > 0;
    w.useEffect( () => {
        const x = p => {
            var y;
            r.length !== 0 && r.every(C => p[C] || p.code === C) && ((y = d.current) == null || y.focus())
        }
        ;
        return document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
    }
    , [r]),
    w.useEffect( () => {
        const x = l.current
          , p = d.current;
        if (v && x && p) {
            const m = () => {
                if (!o.isClosePausedRef.current) {
                    const P = new CustomEvent(Dc);
                    p.dispatchEvent(P),
                    o.isClosePausedRef.current = !0
                }
            }
              , y = () => {
                if (o.isClosePausedRef.current) {
                    const P = new CustomEvent(jc);
                    p.dispatchEvent(P),
                    o.isClosePausedRef.current = !1
                }
            }
              , C = P => {
                !x.contains(P.relatedTarget) && y()
            }
              , E = () => {
                x.contains(document.activeElement) || y()
            }
            ;
            return x.addEventListener("focusin", m),
            x.addEventListener("focusout", C),
            x.addEventListener("pointermove", m),
            x.addEventListener("pointerleave", E),
            window.addEventListener("blur", m),
            window.addEventListener("focus", y),
            () => {
                x.removeEventListener("focusin", m),
                x.removeEventListener("focusout", C),
                x.removeEventListener("pointermove", m),
                x.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", y)
            }
        }
    }
    , [v, o.isClosePausedRef]);
    const g = w.useCallback( ({tabbingDirection: x}) => {
        const m = a().map(y => {
            const C = y.ref.current
              , E = [C, ...XE(C)];
            return x === "forwards" ? E : E.reverse()
        }
        );
        return (x === "forwards" ? m.reverse() : m).flat()
    }
    , [a]);
    return w.useEffect( () => {
        const x = d.current;
        if (x) {
            const p = m => {
                var E, P, T;
                const y = m.altKey || m.ctrlKey || m.metaKey;
                if (m.key === "Tab" && !y) {
                    const b = document.activeElement
                      , N = m.shiftKey;
                    if (m.target === x && N) {
                        (E = u.current) == null || E.focus();
                        return
                    }
                    const I = g({
                        tabbingDirection: N ? "backwards" : "forwards"
                    })
                      , K = I.findIndex(L => L === b);
                    gu(I.slice(K + 1)) ? m.preventDefault() : N ? (P = u.current) == null || P.focus() : (T = c.current) == null || T.focus()
                }
            }
            ;
            return x.addEventListener("keydown", p),
            () => x.removeEventListener("keydown", p)
        }
    }
    , [a, g]),
    S.jsxs(CE, {
        ref: l,
        role: "region",
        "aria-label": i.replace("{hotkey}", h),
        tabIndex: -1,
        style: {
            pointerEvents: v ? void 0 : "none"
        },
        children: [v && S.jsx(Lc, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const x = g({
                    tabbingDirection: "forwards"
                });
                gu(x)
            }
        }), S.jsx(mf.Slot, {
            scope: n,
            children: S.jsx(et.ol, {
                tabIndex: -1,
                ...s,
                ref: f
            })
        }), v && S.jsx(Lc, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const x = g({
                    tabbingDirection: "backwards"
                });
                gu(x)
            }
        })]
    })
}
);
a0.displayName = o0;
var l0 = "ToastFocusProxy"
  , Lc = w.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...i} = e
      , s = El(l0, n);
    return S.jsx(Cl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: o => {
            var u;
            const a = o.relatedTarget;
            !((u = s.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
Lc.displayName = l0;
var po = "Toast"
  , FE = "toast.swipeStart"
  , _E = "toast.swipeMove"
  , zE = "toast.swipeCancel"
  , BE = "toast.swipeEnd"
  , u0 = w.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: i, onOpenChange: s, ...o} = e
      , [a,l] = RE({
        prop: r,
        defaultProp: i ?? !0,
        onChange: s,
        caller: po
    });
    return S.jsx(hf, {
        present: n || a,
        children: S.jsx(WE, {
            open: a,
            ...o,
            ref: t,
            onClose: () => l(!1),
            onPause: tr(e.onPause),
            onResume: tr(e.onResume),
            onSwipeStart: Pe(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: Pe(e.onSwipeMove, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: Pe(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: Pe(e.onSwipeEnd, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                l(!1)
            }
            )
        })
    })
}
);
u0.displayName = po;
var [$E,UE] = i0(po, {
    onClose() {}
})
  , WE = w.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: i, open: s, onClose: o, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: h, ...v} = e
      , g = El(po, n)
      , [x,p] = w.useState(null)
      , m = It(t, L => p(L))
      , y = w.useRef(null)
      , C = w.useRef(null)
      , E = i || g.duration
      , P = w.useRef(0)
      , T = w.useRef(E)
      , b = w.useRef(0)
      , {onToastAdd: N, onToastRemove: M} = g
      , z = tr( () => {
        var Q;
        (x == null ? void 0 : x.contains(document.activeElement)) && ((Q = g.viewport) == null || Q.focus()),
        o()
    }
    )
      , I = w.useCallback(L => {
        !L || L === 1 / 0 || (window.clearTimeout(b.current),
        P.current = new Date().getTime(),
        b.current = window.setTimeout(z, L))
    }
    , [z]);
    w.useEffect( () => {
        const L = g.viewport;
        if (L) {
            const Q = () => {
                I(T.current),
                u == null || u()
            }
              , $ = () => {
                const _ = new Date().getTime() - P.current;
                T.current = T.current - _,
                window.clearTimeout(b.current),
                l == null || l()
            }
            ;
            return L.addEventListener(Dc, $),
            L.addEventListener(jc, Q),
            () => {
                L.removeEventListener(Dc, $),
                L.removeEventListener(jc, Q)
            }
        }
    }
    , [g.viewport, E, l, u, I]),
    w.useEffect( () => {
        s && !g.isClosePausedRef.current && I(E)
    }
    , [s, E, g.isClosePausedRef, I]),
    w.useEffect( () => (N(),
    () => M()), [N, M]);
    const K = w.useMemo( () => x ? g0(x) : null, [x]);
    return g.viewport ? S.jsxs(S.Fragment, {
        children: [K && S.jsx(HE, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: K
        }), S.jsx($E, {
            scope: n,
            onClose: z,
            children: ho.createPortal(S.jsx(mf.ItemSlot, {
                scope: n,
                children: S.jsx(SE, {
                    asChild: !0,
                    onEscapeKeyDown: Pe(a, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || z(),
                        g.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: S.jsx(et.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...v,
                        ref: m,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: Pe(e.onKeyDown, L => {
                            L.key === "Escape" && (a == null || a(L.nativeEvent),
                            L.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                            z()))
                        }
                        ),
                        onPointerDown: Pe(e.onPointerDown, L => {
                            L.button === 0 && (y.current = {
                                x: L.clientX,
                                y: L.clientY
                            })
                        }
                        ),
                        onPointerMove: Pe(e.onPointerMove, L => {
                            if (!y.current)
                                return;
                            const Q = L.clientX - y.current.x
                              , $ = L.clientY - y.current.y
                              , _ = !!C.current
                              , k = ["left", "right"].includes(g.swipeDirection)
                              , A = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                              , O = k ? A(0, Q) : 0
                              , U = k ? 0 : A(0, $)
                              , B = L.pointerType === "touch" ? 10 : 2
                              , Y = {
                                x: O,
                                y: U
                            }
                              , q = {
                                originalEvent: L,
                                delta: Y
                            };
                            _ ? (C.current = Y,
                            Wo(_E, d, q, {
                                discrete: !1
                            })) : Ap(Y, g.swipeDirection, B) ? (C.current = Y,
                            Wo(FE, c, q, {
                                discrete: !1
                            }),
                            L.target.setPointerCapture(L.pointerId)) : (Math.abs(Q) > B || Math.abs($) > B) && (y.current = null)
                        }
                        ),
                        onPointerUp: Pe(e.onPointerUp, L => {
                            const Q = C.current
                              , $ = L.target;
                            if ($.hasPointerCapture(L.pointerId) && $.releasePointerCapture(L.pointerId),
                            C.current = null,
                            y.current = null,
                            Q) {
                                const _ = L.currentTarget
                                  , k = {
                                    originalEvent: L,
                                    delta: Q
                                };
                                Ap(Q, g.swipeDirection, g.swipeThreshold) ? Wo(BE, h, k, {
                                    discrete: !0
                                }) : Wo(zE, f, k, {
                                    discrete: !0
                                }),
                                _.addEventListener("click", A => A.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), g.viewport)
        })]
    }) : null
}
)
  , HE = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , i = El(po, t)
      , [s,o] = w.useState(!1)
      , [a,l] = w.useState(!1);
    return QE( () => o(!0)),
    w.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : S.jsx(r0, {
        asChild: !0,
        children: S.jsx(Cl, {
            ...r,
            children: s && S.jsxs(S.Fragment, {
                children: [i.label, " ", n]
            })
        })
    })
}
  , KE = "ToastTitle"
  , c0 = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return S.jsx(et.div, {
        ...r,
        ref: t
    })
}
);
c0.displayName = KE;
var GE = "ToastDescription"
  , d0 = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return S.jsx(et.div, {
        ...r,
        ref: t
    })
}
);
d0.displayName = GE;
var f0 = "ToastAction"
  , h0 = w.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? S.jsx(m0, {
        altText: n,
        asChild: !0,
        children: S.jsx(gf, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${f0}\`. Expected non-empty \`string\`.`),
    null)
}
);
h0.displayName = f0;
var p0 = "ToastClose"
  , gf = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , i = UE(p0, n);
    return S.jsx(m0, {
        asChild: !0,
        children: S.jsx(et.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: Pe(e.onClick, i.onClose)
        })
    })
}
);
gf.displayName = p0;
var m0 = w.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...i} = e;
    return S.jsx(et.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...i,
        ref: t
    })
}
);
function g0(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        YE(r)) {
            const i = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!i)
                if (s) {
                    const o = r.dataset.radixToastAnnounceAlt;
                    o && t.push(o)
                } else
                    t.push(...g0(r))
        }
    }
    ),
    t
}
function Wo(e, t, n, {discrete: r}) {
    const i = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && i.addEventListener(e, t, {
        once: !0
    }),
    r ? Jv(i, s) : i.dispatchEvent(s)
}
var Ap = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , i = Math.abs(e.y)
      , s = r > i;
    return t === "left" || t === "right" ? s && r > n : !s && i > n
}
;
function QE(e= () => {}
) {
    const t = tr(e);
    nr( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function YE(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function XE(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const i = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function gu(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var qE = s0
  , y0 = a0
  , v0 = u0
  , x0 = c0
  , w0 = d0
  , S0 = h0
  , C0 = gf;
function E0(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
                e[t] && (n = E0(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function P0() {
    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
        (e = arguments[n]) && (t = E0(e)) && (r && (r += " "),
        r += t);
    return r
}
const Np = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Mp = P0
  , T0 = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Mp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: i, defaultVariants: s} = t
      , o = Object.keys(i).map(u => {
        const c = n == null ? void 0 : n[u]
          , d = s == null ? void 0 : s[u];
        if (c === null)
            return null;
        const f = Np(c) || Np(d);
        return i[u][f]
    }
    )
      , a = n && Object.entries(n).reduce( (u, c) => {
        let[d,f] = c;
        return f === void 0 || (u[d] = f),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: d, className: f, ...h} = c;
        return Object.entries(h).every(v => {
            let[g,x] = v;
            return Array.isArray(x) ? x.includes({
                ...s,
                ...a
            }[g]) : {
                ...s,
                ...a
            }[g] === x
        }
        ) ? [...u, d, f] : u
    }
    , []);
    return Mp(e, o, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZE = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , b0 = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var JE = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eP = w.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: i="", children: s, iconNode: o, ...a}, l) => w.createElement("svg", {
    ref: l,
    ...JE,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: b0("lucide", i),
    ...a
}, [...o.map( ([u,c]) => w.createElement(u, c)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const en = (e, t) => {
    const n = w.forwardRef( ({className: r, ...i}, s) => w.createElement(eP, {
        ref: s,
        iconNode: t,
        className: b0(`lucide-${ZE(e)}`, r),
        ...i
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yf = en("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tP = en("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nP = en("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oc = en("MapPin", [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rP = en("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k0 = en("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iP = en("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sP = en("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R0 = en("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oP = en("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , vf = "-"
  , aP = e => {
    const t = uP(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: o => {
            const a = o.split(vf);
            return a[0] === "" && a.length !== 1 && a.shift(),
            A0(a, t) || lP(o)
        }
        ,
        getConflictingClassGroupIds: (o, a) => {
            const l = n[o] || [];
            return a && r[o] ? [...l, ...r[o]] : l
        }
    }
}
  , A0 = (e, t) => {
    var o;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , i = r ? A0(e.slice(1), r) : void 0;
    if (i)
        return i;
    if (t.validators.length === 0)
        return;
    const s = e.join(vf);
    return (o = t.validators.find( ({validator: a}) => a(s))) == null ? void 0 : o.classGroupId
}
  , Dp = /^\[(.+)\]$/
  , lP = e => {
    if (Dp.test(e)) {
        const t = Dp.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , uP = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return dP(Object.entries(e.classGroups), n).forEach( ([s,o]) => {
        Ic(o, r, s, t)
    }
    ),
    r
}
  , Ic = (e, t, n, r) => {
    e.forEach(i => {
        if (typeof i == "string") {
            const s = i === "" ? t : jp(t, i);
            s.classGroupId = n;
            return
        }
        if (typeof i == "function") {
            if (cP(i)) {
                Ic(i(r), t, n, r);
                return
            }
            t.validators.push({
                validator: i,
                classGroupId: n
            });
            return
        }
        Object.entries(i).forEach( ([s,o]) => {
            Ic(o, jp(t, s), n, r)
        }
        )
    }
    )
}
  , jp = (e, t) => {
    let n = e;
    return t.split(vf).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , cP = e => e.isThemeGetter
  , dP = (e, t) => t ? e.map( ([n,r]) => {
    const i = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([o,a]) => [t + o, a])) : s);
    return [n, i]
}
) : e
  , fP = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const i = (s, o) => {
        n.set(s, o),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let o = n.get(s);
            if (o !== void 0)
                return o;
            if ((o = r.get(s)) !== void 0)
                return i(s, o),
                o
        },
        set(s, o) {
            n.has(s) ? n.set(s, o) : i(s, o)
        }
    }
}
  , N0 = "!"
  , hP = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , i = t[0]
      , s = t.length
      , o = a => {
        const l = [];
        let u = 0, c = 0, d;
        for (let x = 0; x < a.length; x++) {
            let p = a[x];
            if (u === 0) {
                if (p === i && (r || a.slice(x, x + s) === t)) {
                    l.push(a.slice(c, x)),
                    c = x + s;
                    continue
                }
                if (p === "/") {
                    d = x;
                    continue
                }
            }
            p === "[" ? u++ : p === "]" && u--
        }
        const f = l.length === 0 ? a : a.substring(c)
          , h = f.startsWith(N0)
          , v = h ? f.substring(1) : f
          , g = d && d > c ? d - c : void 0;
        return {
            modifiers: l,
            hasImportantModifier: h,
            baseClassName: v,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: o
    }) : o
}
  , pP = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , mP = e => ({
    cache: fP(e.cacheSize),
    parseClassName: hP(e),
    ...aP(e)
})
  , gP = /\s+/
  , yP = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i} = t
      , s = []
      , o = e.trim().split(gP);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
        const u = o[l]
          , {modifiers: c, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: h} = n(u);
        let v = !!h
          , g = r(v ? f.substring(0, h) : f);
        if (!g) {
            if (!v) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (g = r(f),
            !g) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            v = !1
        }
        const x = pP(c).join(":")
          , p = d ? x + N0 : x
          , m = p + g;
        if (s.includes(m))
            continue;
        s.push(m);
        const y = i(g, v);
        for (let C = 0; C < y.length; ++C) {
            const E = y[C];
            s.push(p + E)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function vP() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = M0(t)) && (r && (r += " "),
        r += n);
    return r
}
const M0 = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = M0(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function xP(e, ...t) {
    let n, r, i, s = o;
    function o(l) {
        const u = t.reduce( (c, d) => d(c), e());
        return n = mP(u),
        r = n.cache.get,
        i = n.cache.set,
        s = a,
        a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const c = yP(l, n);
        return i(l, c),
        c
    }
    return function() {
        return s(vP.apply(null, arguments))
    }
}
const se = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , D0 = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , wP = /^\d+\/\d+$/
  , SP = new Set(["px", "full", "screen"])
  , CP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , EP = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , PP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , TP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , bP = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , nn = e => Si(e) || SP.has(e) || wP.test(e)
  , bn = e => Ki(e, "length", LP)
  , Si = e => !!e && !Number.isNaN(Number(e))
  , yu = e => Ki(e, "number", Si)
  , us = e => !!e && Number.isInteger(Number(e))
  , kP = e => e.endsWith("%") && Si(e.slice(0, -1))
  , G = e => D0.test(e)
  , kn = e => CP.test(e)
  , RP = new Set(["length", "size", "percentage"])
  , AP = e => Ki(e, RP, j0)
  , NP = e => Ki(e, "position", j0)
  , MP = new Set(["image", "url"])
  , DP = e => Ki(e, MP, IP)
  , jP = e => Ki(e, "", OP)
  , cs = () => !0
  , Ki = (e, t, n) => {
    const r = D0.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , LP = e => EP.test(e) && !PP.test(e)
  , j0 = () => !1
  , OP = e => TP.test(e)
  , IP = e => bP.test(e)
  , VP = () => {
    const e = se("colors")
      , t = se("spacing")
      , n = se("blur")
      , r = se("brightness")
      , i = se("borderColor")
      , s = se("borderRadius")
      , o = se("borderSpacing")
      , a = se("borderWidth")
      , l = se("contrast")
      , u = se("grayscale")
      , c = se("hueRotate")
      , d = se("invert")
      , f = se("gap")
      , h = se("gradientColorStops")
      , v = se("gradientColorStopPositions")
      , g = se("inset")
      , x = se("margin")
      , p = se("opacity")
      , m = se("padding")
      , y = se("saturate")
      , C = se("scale")
      , E = se("sepia")
      , P = se("skew")
      , T = se("space")
      , b = se("translate")
      , N = () => ["auto", "contain", "none"]
      , M = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , z = () => ["auto", G, t]
      , I = () => [G, t]
      , K = () => ["", nn, bn]
      , L = () => ["auto", Si, G]
      , Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , $ = () => ["solid", "dashed", "dotted", "double", "none"]
      , _ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , A = () => ["", "0", G]
      , O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , U = () => [Si, G];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [cs],
            spacing: [nn, bn],
            blur: ["none", "", kn, G],
            brightness: U(),
            borderColor: [e],
            borderRadius: ["none", "", "full", kn, G],
            borderSpacing: I(),
            borderWidth: K(),
            contrast: U(),
            grayscale: A(),
            hueRotate: U(),
            invert: A(),
            gap: I(),
            gradientColorStops: [e],
            gradientColorStopPositions: [kP, bn],
            inset: z(),
            margin: z(),
            opacity: U(),
            padding: I(),
            saturate: U(),
            scale: U(),
            sepia: A(),
            skew: U(),
            space: I(),
            translate: I()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", G]
            }],
            container: ["container"],
            columns: [{
                columns: [kn]
            }],
            "break-after": [{
                "break-after": O()
            }],
            "break-before": [{
                "break-before": O()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Q(), G]
            }],
            overflow: [{
                overflow: M()
            }],
            "overflow-x": [{
                "overflow-x": M()
            }],
            "overflow-y": [{
                "overflow-y": M()
            }],
            overscroll: [{
                overscroll: N()
            }],
            "overscroll-x": [{
                "overscroll-x": N()
            }],
            "overscroll-y": [{
                "overscroll-y": N()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", us, G]
            }],
            basis: [{
                basis: z()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", G]
            }],
            grow: [{
                grow: A()
            }],
            shrink: [{
                shrink: A()
            }],
            order: [{
                order: ["first", "last", "none", us, G]
            }],
            "grid-cols": [{
                "grid-cols": [cs]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", us, G]
                }, G]
            }],
            "col-start": [{
                "col-start": L()
            }],
            "col-end": [{
                "col-end": L()
            }],
            "grid-rows": [{
                "grid-rows": [cs]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [us, G]
                }, G]
            }],
            "row-start": [{
                "row-start": L()
            }],
            "row-end": [{
                "row-end": L()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", G]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", G]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...k()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...k(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...k(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [m]
            }],
            px: [{
                px: [m]
            }],
            py: [{
                py: [m]
            }],
            ps: [{
                ps: [m]
            }],
            pe: [{
                pe: [m]
            }],
            pt: [{
                pt: [m]
            }],
            pr: [{
                pr: [m]
            }],
            pb: [{
                pb: [m]
            }],
            pl: [{
                pl: [m]
            }],
            m: [{
                m: [x]
            }],
            mx: [{
                mx: [x]
            }],
            my: [{
                my: [x]
            }],
            ms: [{
                ms: [x]
            }],
            me: [{
                me: [x]
            }],
            mt: [{
                mt: [x]
            }],
            mr: [{
                mr: [x]
            }],
            mb: [{
                mb: [x]
            }],
            ml: [{
                ml: [x]
            }],
            "space-x": [{
                "space-x": [T]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [T]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t]
            }],
            "min-w": [{
                "min-w": [G, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [G, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [kn]
                }, kn]
            }],
            h: [{
                h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [G, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", kn, bn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", yu]
            }],
            "font-family": [{
                font: [cs]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Si, yu]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", nn, G]
            }],
            "list-image": [{
                "list-image": ["none", G]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", G]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [p]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [p]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...$(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", nn, bn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", nn, G]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", G]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [p]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Q(), NP]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", AP]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, DP]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [v]
            }],
            "gradient-via-pos": [{
                via: [v]
            }],
            "gradient-to-pos": [{
                to: [v]
            }],
            "gradient-from": [{
                from: [h]
            }],
            "gradient-via": [{
                via: [h]
            }],
            "gradient-to": [{
                to: [h]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [p]
            }],
            "border-style": [{
                border: [...$(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [p]
            }],
            "divide-style": [{
                divide: $()
            }],
            "border-color": [{
                border: [i]
            }],
            "border-color-x": [{
                "border-x": [i]
            }],
            "border-color-y": [{
                "border-y": [i]
            }],
            "border-color-s": [{
                "border-s": [i]
            }],
            "border-color-e": [{
                "border-e": [i]
            }],
            "border-color-t": [{
                "border-t": [i]
            }],
            "border-color-r": [{
                "border-r": [i]
            }],
            "border-color-b": [{
                "border-b": [i]
            }],
            "border-color-l": [{
                "border-l": [i]
            }],
            "divide-color": [{
                divide: [i]
            }],
            "outline-style": [{
                outline: ["", ...$()]
            }],
            "outline-offset": [{
                "outline-offset": [nn, G]
            }],
            "outline-w": [{
                outline: [nn, bn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: K()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [p]
            }],
            "ring-offset-w": [{
                "ring-offset": [nn, bn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", kn, jP]
            }],
            "shadow-color": [{
                shadow: [cs]
            }],
            opacity: [{
                opacity: [p]
            }],
            "mix-blend": [{
                "mix-blend": [..._(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": _()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", kn, G]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [y]
            }],
            sepia: [{
                sepia: [E]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [p]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [y]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [E]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [o]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [o]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [o]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
            }],
            duration: [{
                duration: U()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", G]
            }],
            delay: [{
                delay: U()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", G]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [C]
            }],
            "scale-x": [{
                "scale-x": [C]
            }],
            "scale-y": [{
                "scale-y": [C]
            }],
            rotate: [{
                rotate: [us, G]
            }],
            "translate-x": [{
                "translate-x": [b]
            }],
            "translate-y": [{
                "translate-y": [b]
            }],
            "skew-x": [{
                "skew-x": [P]
            }],
            "skew-y": [{
                "skew-y": [P]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", G]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [nn, bn, yu]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
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
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
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
    }
}
  , FP = xP(VP);
function cr(...e) {
    return FP(P0(e))
}
const _P = qE
  , L0 = w.forwardRef( ({className: e, ...t}, n) => S.jsx(y0, {
    ref: n,
    className: cr("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
L0.displayName = y0.displayName;
const zP = T0("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , O0 = w.forwardRef( ({className: e, variant: t, ...n}, r) => S.jsx(v0, {
    ref: r,
    className: cr(zP({
        variant: t
    }), e),
    ...n
}));
O0.displayName = v0.displayName;
const BP = w.forwardRef( ({className: e, ...t}, n) => S.jsx(S0, {
    ref: n,
    className: cr("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
BP.displayName = S0.displayName;
const I0 = w.forwardRef( ({className: e, ...t}, n) => S.jsx(C0, {
    ref: n,
    className: cr("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: S.jsx(R0, {
        className: "h-4 w-4"
    })
}));
I0.displayName = C0.displayName;
const V0 = w.forwardRef( ({className: e, ...t}, n) => S.jsx(x0, {
    ref: n,
    className: cr("text-sm font-semibold", e),
    ...t
}));
V0.displayName = x0.displayName;
const F0 = w.forwardRef( ({className: e, ...t}, n) => S.jsx(w0, {
    ref: n,
    className: cr("text-sm opacity-90", e),
    ...t
}));
F0.displayName = w0.displayName;
function $P() {
    const {toasts: e} = iE();
    return S.jsxs(_P, {
        children: [e.map(function({id: t, title: n, description: r, action: i, ...s}) {
            return S.jsxs(O0, {
                ...s,
                children: [S.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && S.jsx(V0, {
                        children: n
                    }), r && S.jsx(F0, {
                        children: r
                    })]
                }), i, S.jsx(I0, {})]
            }, t)
        }), S.jsx(L0, {})]
    })
}
var Lp = ["light", "dark"]
  , UP = "(prefers-color-scheme: dark)"
  , WP = w.createContext(void 0)
  , HP = {
    setTheme: e => {}
    ,
    themes: []
}
  , KP = () => {
    var e;
    return (e = w.useContext(WP)) != null ? e : HP
}
;
w.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: i, defaultTheme: s, value: o, attrs: a, nonce: l}) => {
    let u = s === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(v => `'${v}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , d = i ? Lp.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , f = (v, g=!1, x=!0) => {
        let p = o ? o[v] : v
          , m = g ? v + "|| ''" : `'${p}'`
          , y = "";
        return i && x && !g && Lp.includes(v) && (y += `d.style.colorScheme = '${v}';`),
        n === "class" ? g || p ? y += `c.add(${m})` : y += "null" : p && (y += `d[s](n,${m})`),
        y
    }
      , h = e ? `!function(){${c}${f(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${UP}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(s, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}else{${f(s, !1, !1)};}${d}}catch(t){}}();`;
    return w.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: h
        }
    })
}
);
var GP = e => {
    switch (e) {
    case "success":
        return XP;
    case "info":
        return ZP;
    case "warning":
        return qP;
    case "error":
        return JP;
    default:
        return null
    }
}
  , QP = Array(12).fill(0)
  , YP = ({visible: e, className: t}) => j.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, j.createElement("div", {
    className: "sonner-spinner"
}, QP.map( (n, r) => j.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , XP = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, j.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , qP = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, j.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , ZP = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, j.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , JP = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, j.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , eT = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, j.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), j.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , tT = () => {
    let[e,t] = j.useState(document.hidden);
    return j.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Vc = 1
  , nT = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , i = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Vc++
              , s = this.toasts.find(a => a.id === i)
              , o = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i),
            s ? this.toasts = this.toasts.map(a => a.id === i ? (this.publish({
                ...a,
                ...e,
                id: i,
                title: n
            }),
            {
                ...a,
                ...e,
                id: i,
                dismissible: o,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: o,
                id: i
            }),
            i
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), i = n !== void 0, s, o = r.then(async l => {
                if (s = ["resolve", l],
                j.isValidElement(l))
                    i = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (iT(l) && !l.ok) {
                    i = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    i = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async l => {
                if (s = ["reject", l],
                t.error !== void 0) {
                    i = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var l;
                i && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), a = () => new Promise( (l, u) => o.then( () => s[0] === "reject" ? u(s[1]) : l(s[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: a
            } : Object.assign(n, {
                unwrap: a
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Vc++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Qe = new nT
  , rT = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Vc++;
    return Qe.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , iT = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , sT = rT
  , oT = () => Qe.toasts
  , aT = () => Qe.getActiveToasts();
Object.assign(sT, {
    success: Qe.success,
    info: Qe.info,
    warning: Qe.warning,
    error: Qe.error,
    custom: Qe.custom,
    message: Qe.message,
    promise: Qe.promise,
    dismiss: Qe.dismiss,
    loading: Qe.loading
}, {
    getHistory: oT,
    getToasts: aT
});
function lT(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
lT(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Ho(e) {
    return e.label !== void 0
}
var uT = 3
  , cT = "32px"
  , dT = "16px"
  , Op = 4e3
  , fT = 356
  , hT = 14
  , pT = 20
  , mT = 200;
function Pt(...e) {
    return e.filter(Boolean).join(" ")
}
function gT(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var yT = e => {
    var t, n, r, i, s, o, a, l, u, c, d;
    let {invert: f, toast: h, unstyled: v, interacting: g, setHeights: x, visibleToasts: p, heights: m, index: y, toasts: C, expanded: E, removeToast: P, defaultRichColors: T, closeButton: b, style: N, cancelButtonStyle: M, actionButtonStyle: z, className: I="", descriptionClassName: K="", duration: L, position: Q, gap: $, loadingIcon: _, expandByDefault: k, classNames: A, icons: O, closeButtonAriaLabel: U="Close toast", pauseWhenPageIsHidden: B} = e
      , [Y,q] = j.useState(null)
      , [ve,De] = j.useState(null)
      , [ee,Wr] = j.useState(!1)
      , [xn,fr] = j.useState(!1)
      , [wn,Hr] = j.useState(!1)
      , [Sn,Co] = j.useState(!1)
      , [Vl,Eo] = j.useState(!1)
      , [Fl,Ji] = j.useState(0)
      , [Kr,uh] = j.useState(0)
      , es = j.useRef(h.duration || L || Op)
      , ch = j.useRef(null)
      , hr = j.useRef(null)
      , v1 = y === 0
      , x1 = y + 1 <= p
      , ut = h.type
      , Gr = h.dismissible !== !1
      , w1 = h.className || ""
      , S1 = h.descriptionClassName || ""
      , Po = j.useMemo( () => m.findIndex(W => W.toastId === h.id) || 0, [m, h.id])
      , C1 = j.useMemo( () => {
        var W;
        return (W = h.closeButton) != null ? W : b
    }
    , [h.closeButton, b])
      , dh = j.useMemo( () => h.duration || L || Op, [h.duration, L])
      , _l = j.useRef(0)
      , Qr = j.useRef(0)
      , fh = j.useRef(0)
      , Yr = j.useRef(null)
      , [E1,P1] = Q.split("-")
      , hh = j.useMemo( () => m.reduce( (W, ne, le) => le >= Po ? W : W + ne.height, 0), [m, Po])
      , ph = tT()
      , T1 = h.invert || f
      , zl = ut === "loading";
    Qr.current = j.useMemo( () => Po * $ + hh, [Po, hh]),
    j.useEffect( () => {
        es.current = dh
    }
    , [dh]),
    j.useEffect( () => {
        Wr(!0)
    }
    , []),
    j.useEffect( () => {
        let W = hr.current;
        if (W) {
            let ne = W.getBoundingClientRect().height;
            return uh(ne),
            x(le => [{
                toastId: h.id,
                height: ne,
                position: h.position
            }, ...le]),
            () => x(le => le.filter(wt => wt.toastId !== h.id))
        }
    }
    , [x, h.id]),
    j.useLayoutEffect( () => {
        if (!ee)
            return;
        let W = hr.current
          , ne = W.style.height;
        W.style.height = "auto";
        let le = W.getBoundingClientRect().height;
        W.style.height = ne,
        uh(le),
        x(wt => wt.find(St => St.toastId === h.id) ? wt.map(St => St.toastId === h.id ? {
            ...St,
            height: le
        } : St) : [{
            toastId: h.id,
            height: le,
            position: h.position
        }, ...wt])
    }
    , [ee, h.title, h.description, x, h.id]);
    let Cn = j.useCallback( () => {
        fr(!0),
        Ji(Qr.current),
        x(W => W.filter(ne => ne.toastId !== h.id)),
        setTimeout( () => {
            P(h)
        }
        , mT)
    }
    , [h, P, x, Qr]);
    j.useEffect( () => {
        if (h.promise && ut === "loading" || h.duration === 1 / 0 || h.type === "loading")
            return;
        let W;
        return E || g || B && ph ? ( () => {
            if (fh.current < _l.current) {
                let ne = new Date().getTime() - _l.current;
                es.current = es.current - ne
            }
            fh.current = new Date().getTime()
        }
        )() : es.current !== 1 / 0 && (_l.current = new Date().getTime(),
        W = setTimeout( () => {
            var ne;
            (ne = h.onAutoClose) == null || ne.call(h, h),
            Cn()
        }
        , es.current)),
        () => clearTimeout(W)
    }
    , [E, g, h, ut, B, ph, Cn]),
    j.useEffect( () => {
        h.delete && Cn()
    }
    , [Cn, h.delete]);
    function b1() {
        var W, ne, le;
        return O != null && O.loading ? j.createElement("div", {
            className: Pt(A == null ? void 0 : A.loader, (W = h == null ? void 0 : h.classNames) == null ? void 0 : W.loader, "sonner-loader"),
            "data-visible": ut === "loading"
        }, O.loading) : _ ? j.createElement("div", {
            className: Pt(A == null ? void 0 : A.loader, (ne = h == null ? void 0 : h.classNames) == null ? void 0 : ne.loader, "sonner-loader"),
            "data-visible": ut === "loading"
        }, _) : j.createElement(YP, {
            className: Pt(A == null ? void 0 : A.loader, (le = h == null ? void 0 : h.classNames) == null ? void 0 : le.loader),
            visible: ut === "loading"
        })
    }
    return j.createElement("li", {
        tabIndex: 0,
        ref: hr,
        className: Pt(I, w1, A == null ? void 0 : A.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, A == null ? void 0 : A.default, A == null ? void 0 : A[ut], (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[ut]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = h.richColors) != null ? r : T,
        "data-styled": !(h.jsx || h.unstyled || v),
        "data-mounted": ee,
        "data-promise": !!h.promise,
        "data-swiped": Vl,
        "data-removed": xn,
        "data-visible": x1,
        "data-y-position": E1,
        "data-x-position": P1,
        "data-index": y,
        "data-front": v1,
        "data-swiping": wn,
        "data-dismissible": Gr,
        "data-type": ut,
        "data-invert": T1,
        "data-swipe-out": Sn,
        "data-swipe-direction": ve,
        "data-expanded": !!(E || k && ee),
        style: {
            "--index": y,
            "--toasts-before": y,
            "--z-index": C.length - y,
            "--offset": `${xn ? Fl : Qr.current}px`,
            "--initial-height": k ? "auto" : `${Kr}px`,
            ...N,
            ...h.style
        },
        onDragEnd: () => {
            Hr(!1),
            q(null),
            Yr.current = null
        }
        ,
        onPointerDown: W => {
            zl || !Gr || (ch.current = new Date,
            Ji(Qr.current),
            W.target.setPointerCapture(W.pointerId),
            W.target.tagName !== "BUTTON" && (Hr(!0),
            Yr.current = {
                x: W.clientX,
                y: W.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var W, ne, le, wt;
            if (Sn || !Gr)
                return;
            Yr.current = null;
            let St = Number(((W = hr.current) == null ? void 0 : W.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , En = Number(((ne = hr.current) == null ? void 0 : ne.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , pr = new Date().getTime() - ((le = ch.current) == null ? void 0 : le.getTime())
              , Ct = Y === "x" ? St : En
              , Pn = Math.abs(Ct) / pr;
            if (Math.abs(Ct) >= pT || Pn > .11) {
                Ji(Qr.current),
                (wt = h.onDismiss) == null || wt.call(h, h),
                De(Y === "x" ? St > 0 ? "right" : "left" : En > 0 ? "down" : "up"),
                Cn(),
                Co(!0),
                Eo(!1);
                return
            }
            Hr(!1),
            q(null)
        }
        ,
        onPointerMove: W => {
            var ne, le, wt, St;
            if (!Yr.current || !Gr || ((ne = window.getSelection()) == null ? void 0 : ne.toString().length) > 0)
                return;
            let En = W.clientY - Yr.current.y
              , pr = W.clientX - Yr.current.x
              , Ct = (le = e.swipeDirections) != null ? le : gT(Q);
            !Y && (Math.abs(pr) > 1 || Math.abs(En) > 1) && q(Math.abs(pr) > Math.abs(En) ? "x" : "y");
            let Pn = {
                x: 0,
                y: 0
            };
            Y === "y" ? (Ct.includes("top") || Ct.includes("bottom")) && (Ct.includes("top") && En < 0 || Ct.includes("bottom") && En > 0) && (Pn.y = En) : Y === "x" && (Ct.includes("left") || Ct.includes("right")) && (Ct.includes("left") && pr < 0 || Ct.includes("right") && pr > 0) && (Pn.x = pr),
            (Math.abs(Pn.x) > 0 || Math.abs(Pn.y) > 0) && Eo(!0),
            (wt = hr.current) == null || wt.style.setProperty("--swipe-amount-x", `${Pn.x}px`),
            (St = hr.current) == null || St.style.setProperty("--swipe-amount-y", `${Pn.y}px`)
        }
    }, C1 && !h.jsx ? j.createElement("button", {
        "aria-label": U,
        "data-disabled": zl,
        "data-close-button": !0,
        onClick: zl || !Gr ? () => {}
        : () => {
            var W;
            Cn(),
            (W = h.onDismiss) == null || W.call(h, h)
        }
        ,
        className: Pt(A == null ? void 0 : A.closeButton, (i = h == null ? void 0 : h.classNames) == null ? void 0 : i.closeButton)
    }, (s = O == null ? void 0 : O.close) != null ? s : eT) : null, h.jsx || w.isValidElement(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : j.createElement(j.Fragment, null, ut || h.icon || h.promise ? j.createElement("div", {
        "data-icon": "",
        className: Pt(A == null ? void 0 : A.icon, (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.icon)
    }, h.promise || h.type === "loading" && !h.icon ? h.icon || b1() : null, h.type !== "loading" ? h.icon || (O == null ? void 0 : O[ut]) || GP(ut) : null) : null, j.createElement("div", {
        "data-content": "",
        className: Pt(A == null ? void 0 : A.content, (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.content)
    }, j.createElement("div", {
        "data-title": "",
        className: Pt(A == null ? void 0 : A.title, (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title)
    }, typeof h.title == "function" ? h.title() : h.title), h.description ? j.createElement("div", {
        "data-description": "",
        className: Pt(K, S1, A == null ? void 0 : A.description, (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.description)
    }, typeof h.description == "function" ? h.description() : h.description) : null), w.isValidElement(h.cancel) ? h.cancel : h.cancel && Ho(h.cancel) ? j.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: h.cancelButtonStyle || M,
        onClick: W => {
            var ne, le;
            Ho(h.cancel) && Gr && ((le = (ne = h.cancel).onClick) == null || le.call(ne, W),
            Cn())
        }
        ,
        className: Pt(A == null ? void 0 : A.cancelButton, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.cancelButton)
    }, h.cancel.label) : null, w.isValidElement(h.action) ? h.action : h.action && Ho(h.action) ? j.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: h.actionButtonStyle || z,
        onClick: W => {
            var ne, le;
            Ho(h.action) && ((le = (ne = h.action).onClick) == null || le.call(ne, W),
            !W.defaultPrevented && Cn())
        }
        ,
        className: Pt(A == null ? void 0 : A.actionButton, (d = h == null ? void 0 : h.classNames) == null ? void 0 : d.actionButton)
    }, h.action.label) : null))
}
;
function Ip() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function vT(e, t) {
    let n = {};
    return [e, t].forEach( (r, i) => {
        let s = i === 1
          , o = s ? "--mobile-offset" : "--offset"
          , a = s ? dT : cT;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${o}-${u}`] = a : n[`${o}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(a)
    }
    ),
    n
}
var xT = w.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: i=["altKey", "KeyT"], expand: s, closeButton: o, className: a, offset: l, mobileOffset: u, theme: c="light", richColors: d, duration: f, style: h, visibleToasts: v=uT, toastOptions: g, dir: x=Ip(), gap: p=hT, loadingIcon: m, icons: y, containerAriaLabel: C="Notifications", pauseWhenPageIsHidden: E} = e
      , [P,T] = j.useState([])
      , b = j.useMemo( () => Array.from(new Set([r].concat(P.filter(B => B.position).map(B => B.position)))), [P, r])
      , [N,M] = j.useState([])
      , [z,I] = j.useState(!1)
      , [K,L] = j.useState(!1)
      , [Q,$] = j.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , _ = j.useRef(null)
      , k = i.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , A = j.useRef(null)
      , O = j.useRef(!1)
      , U = j.useCallback(B => {
        T(Y => {
            var q;
            return (q = Y.find(ve => ve.id === B.id)) != null && q.delete || Qe.dismiss(B.id),
            Y.filter( ({id: ve}) => ve !== B.id)
        }
        )
    }
    , []);
    return j.useEffect( () => Qe.subscribe(B => {
        if (B.dismiss) {
            T(Y => Y.map(q => q.id === B.id ? {
                ...q,
                delete: !0
            } : q));
            return
        }
        setTimeout( () => {
            Yv.flushSync( () => {
                T(Y => {
                    let q = Y.findIndex(ve => ve.id === B.id);
                    return q !== -1 ? [...Y.slice(0, q), {
                        ...Y[q],
                        ...B
                    }, ...Y.slice(q + 1)] : [B, ...Y]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    j.useEffect( () => {
        if (c !== "system") {
            $(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")),
        typeof window > "u")
            return;
        let B = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            B.addEventListener("change", ({matches: Y}) => {
                $(Y ? "dark" : "light")
            }
            )
        } catch {
            B.addListener( ({matches: q}) => {
                try {
                    $(q ? "dark" : "light")
                } catch (ve) {
                    console.error(ve)
                }
            }
            )
        }
    }
    , [c]),
    j.useEffect( () => {
        P.length <= 1 && I(!1)
    }
    , [P]),
    j.useEffect( () => {
        let B = Y => {
            var q, ve;
            i.every(De => Y[De] || Y.code === De) && (I(!0),
            (q = _.current) == null || q.focus()),
            Y.code === "Escape" && (document.activeElement === _.current || (ve = _.current) != null && ve.contains(document.activeElement)) && I(!1)
        }
        ;
        return document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
    }
    , [i]),
    j.useEffect( () => {
        if (_.current)
            return () => {
                A.current && (A.current.focus({
                    preventScroll: !0
                }),
                A.current = null,
                O.current = !1)
            }
    }
    , [_.current]),
    j.createElement("section", {
        ref: t,
        "aria-label": `${C} ${k}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, b.map( (B, Y) => {
        var q;
        let[ve,De] = B.split("-");
        return P.length ? j.createElement("ol", {
            key: B,
            dir: x === "auto" ? Ip() : x,
            tabIndex: -1,
            ref: _,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": Q,
            "data-y-position": ve,
            "data-lifted": z && P.length > 1 && !s,
            "data-x-position": De,
            style: {
                "--front-toast-height": `${((q = N[0]) == null ? void 0 : q.height) || 0}px`,
                "--width": `${fT}px`,
                "--gap": `${p}px`,
                ...h,
                ...vT(l, u)
            },
            onBlur: ee => {
                O.current && !ee.currentTarget.contains(ee.relatedTarget) && (O.current = !1,
                A.current && (A.current.focus({
                    preventScroll: !0
                }),
                A.current = null))
            }
            ,
            onFocus: ee => {
                ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || O.current || (O.current = !0,
                A.current = ee.relatedTarget)
            }
            ,
            onMouseEnter: () => I(!0),
            onMouseMove: () => I(!0),
            onMouseLeave: () => {
                K || I(!1)
            }
            ,
            onDragEnd: () => I(!1),
            onPointerDown: ee => {
                ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || L(!0)
            }
            ,
            onPointerUp: () => L(!1)
        }, P.filter(ee => !ee.position && Y === 0 || ee.position === B).map( (ee, Wr) => {
            var xn, fr;
            return j.createElement(yT, {
                key: ee.id,
                icons: y,
                index: Wr,
                toast: ee,
                defaultRichColors: d,
                duration: (xn = g == null ? void 0 : g.duration) != null ? xn : f,
                className: g == null ? void 0 : g.className,
                descriptionClassName: g == null ? void 0 : g.descriptionClassName,
                invert: n,
                visibleToasts: v,
                closeButton: (fr = g == null ? void 0 : g.closeButton) != null ? fr : o,
                interacting: K,
                position: B,
                style: g == null ? void 0 : g.style,
                unstyled: g == null ? void 0 : g.unstyled,
                classNames: g == null ? void 0 : g.classNames,
                cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                removeToast: U,
                toasts: P.filter(wn => wn.position == ee.position),
                heights: N.filter(wn => wn.position == ee.position),
                setHeights: M,
                expandByDefault: s,
                gap: p,
                loadingIcon: m,
                expanded: z,
                pauseWhenPageIsHidden: E,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const wT = ({...e}) => {
    const {theme: t="system"} = KP();
    return S.jsx(xT, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , ST = ["top", "right", "bottom", "left"]
  , rr = Math.min
  , nt = Math.max
  , Wa = Math.round
  , Ko = Math.floor
  , Xt = e => ({
    x: e,
    y: e
})
  , CT = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , ET = {
    start: "end",
    end: "start"
};
function Fc(e, t, n) {
    return nt(e, rr(t, n))
}
function mn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function gn(e) {
    return e.split("-")[0]
}
function Gi(e) {
    return e.split("-")[1]
}
function xf(e) {
    return e === "x" ? "y" : "x"
}
function wf(e) {
    return e === "y" ? "height" : "width"
}
const PT = new Set(["top", "bottom"]);
function Gt(e) {
    return PT.has(gn(e)) ? "y" : "x"
}
function Sf(e) {
    return xf(Gt(e))
}
function TT(e, t, n) {
    n === void 0 && (n = !1);
    const r = Gi(e)
      , i = Sf(e)
      , s = wf(i);
    let o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (o = Ha(o)),
    [o, Ha(o)]
}
function bT(e) {
    const t = Ha(e);
    return [_c(e), t, _c(t)]
}
function _c(e) {
    return e.replace(/start|end/g, t => ET[t])
}
const Vp = ["left", "right"]
  , Fp = ["right", "left"]
  , kT = ["top", "bottom"]
  , RT = ["bottom", "top"];
function AT(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? Fp : Vp : t ? Vp : Fp;
    case "left":
    case "right":
        return t ? kT : RT;
    default:
        return []
    }
}
function NT(e, t, n, r) {
    const i = Gi(e);
    let s = AT(gn(e), n === "start", r);
    return i && (s = s.map(o => o + "-" + i),
    t && (s = s.concat(s.map(_c)))),
    s
}
function Ha(e) {
    return e.replace(/left|right|bottom|top/g, t => CT[t])
}
function MT(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function _0(e) {
    return typeof e != "number" ? MT(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Ka(e) {
    const {x: t, y: n, width: r, height: i} = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n
    }
}
function _p(e, t, n) {
    let {reference: r, floating: i} = e;
    const s = Gt(t)
      , o = Sf(t)
      , a = wf(o)
      , l = gn(t)
      , u = s === "y"
      , c = r.x + r.width / 2 - i.width / 2
      , d = r.y + r.height / 2 - i.height / 2
      , f = r[a] / 2 - i[a] / 2;
    let h;
    switch (l) {
    case "top":
        h = {
            x: c,
            y: r.y - i.height
        };
        break;
    case "bottom":
        h = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        h = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        h = {
            x: r.x - i.width,
            y: d
        };
        break;
    default:
        h = {
            x: r.x,
            y: r.y
        }
    }
    switch (Gi(t)) {
    case "start":
        h[o] -= f * (n && u ? -1 : 1);
        break;
    case "end":
        h[o] += f * (n && u ? -1 : 1);
        break
    }
    return h
}
const DT = async (e, t, n) => {
    const {placement: r="bottom", strategy: i="absolute", middleware: s=[], platform: o} = n
      , a = s.filter(Boolean)
      , l = await (o.isRTL == null ? void 0 : o.isRTL(t));
    let u = await o.getElementRects({
        reference: e,
        floating: t,
        strategy: i
    })
      , {x: c, y: d} = _p(u, r, l)
      , f = r
      , h = {}
      , v = 0;
    for (let g = 0; g < a.length; g++) {
        const {name: x, fn: p} = a[g]
          , {x: m, y, data: C, reset: E} = await p({
            x: c,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: i,
            middlewareData: h,
            rects: u,
            platform: o,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = m ?? c,
        d = y ?? d,
        h = {
            ...h,
            [x]: {
                ...h[x],
                ...C
            }
        },
        E && v <= 50 && (v++,
        typeof E == "object" && (E.placement && (f = E.placement),
        E.rects && (u = E.rects === !0 ? await o.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }) : E.rects),
        {x: c, y: d} = _p(u, f, l)),
        g = -1)
    }
    return {
        x: c,
        y: d,
        placement: f,
        strategy: i,
        middlewareData: h
    }
}
;
async function Qs(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: i, platform: s, rects: o, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: f=!1, padding: h=0} = mn(t, e)
      , v = _0(h)
      , x = a[f ? d === "floating" ? "reference" : "floating" : d]
      , p = Ka(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , m = d === "floating" ? {
        x: r,
        y: i,
        width: o.floating.width,
        height: o.floating.height
    } : o.reference
      , y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating))
      , C = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , E = Ka(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: m,
        offsetParent: y,
        strategy: l
    }) : m);
    return {
        top: (p.top - E.top + v.top) / C.y,
        bottom: (E.bottom - p.bottom + v.bottom) / C.y,
        left: (p.left - E.left + v.left) / C.x,
        right: (E.right - p.right + v.right) / C.x
    }
}
const jT = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: i, rects: s, platform: o, elements: a, middlewareData: l} = t
          , {element: u, padding: c=0} = mn(e, t) || {};
        if (u == null)
            return {};
        const d = _0(c)
          , f = {
            x: n,
            y: r
        }
          , h = Sf(i)
          , v = wf(h)
          , g = await o.getDimensions(u)
          , x = h === "y"
          , p = x ? "top" : "left"
          , m = x ? "bottom" : "right"
          , y = x ? "clientHeight" : "clientWidth"
          , C = s.reference[v] + s.reference[h] - f[h] - s.floating[v]
          , E = f[h] - s.reference[h]
          , P = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
        let T = P ? P[y] : 0;
        (!T || !await (o.isElement == null ? void 0 : o.isElement(P))) && (T = a.floating[y] || s.floating[v]);
        const b = C / 2 - E / 2
          , N = T / 2 - g[v] / 2 - 1
          , M = rr(d[p], N)
          , z = rr(d[m], N)
          , I = M
          , K = T - g[v] - z
          , L = T / 2 - g[v] / 2 + b
          , Q = Fc(I, L, K)
          , $ = !l.arrow && Gi(i) != null && L !== Q && s.reference[v] / 2 - (L < I ? M : z) - g[v] / 2 < 0
          , _ = $ ? L < I ? L - I : L - K : 0;
        return {
            [h]: f[h] + _,
            data: {
                [h]: Q,
                centerOffset: L - Q - _,
                ...$ && {
                    alignmentOffset: _
                }
            },
            reset: $
        }
    }
})
  , LT = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, middlewareData: s, rects: o, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: d=!0, fallbackPlacements: f, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: v="none", flipAlignment: g=!0, ...x} = mn(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const p = gn(i)
              , m = Gt(a)
              , y = gn(a) === a
              , C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , E = f || (y || !g ? [Ha(a)] : bT(a))
              , P = v !== "none";
            !f && P && E.push(...NT(a, g, v, C));
            const T = [a, ...E]
              , b = await Qs(t, x)
              , N = [];
            let M = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if (c && N.push(b[p]),
            d) {
                const L = TT(i, o, C);
                N.push(b[L[0]], b[L[1]])
            }
            if (M = [...M, {
                placement: i,
                overflows: N
            }],
            !N.every(L => L <= 0)) {
                var z, I;
                const L = (((z = s.flip) == null ? void 0 : z.index) || 0) + 1
                  , Q = T[L];
                if (Q && (!(d === "alignment" ? m !== Gt(Q) : !1) || M.every(k => k.overflows[0] > 0 && Gt(k.placement) === m)))
                    return {
                        data: {
                            index: L,
                            overflows: M
                        },
                        reset: {
                            placement: Q
                        }
                    };
                let $ = (I = M.filter(_ => _.overflows[0] <= 0).sort( (_, k) => _.overflows[1] - k.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!$)
                    switch (h) {
                    case "bestFit":
                        {
                            var K;
                            const _ = (K = M.filter(k => {
                                if (P) {
                                    const A = Gt(k.placement);
                                    return A === m || A === "y"
                                }
                                return !0
                            }
                            ).map(k => [k.placement, k.overflows.filter(A => A > 0).reduce( (A, O) => A + O, 0)]).sort( (k, A) => k[1] - A[1])[0]) == null ? void 0 : K[0];
                            _ && ($ = _);
                            break
                        }
                    case "initialPlacement":
                        $ = a;
                        break
                    }
                if (i !== $)
                    return {
                        reset: {
                            placement: $
                        }
                    }
            }
            return {}
        }
    }
};
function zp(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Bp(e) {
    return ST.some(t => e[t] >= 0)
}
const OT = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...i} = mn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const s = await Qs(t, {
                        ...i,
                        elementContext: "reference"
                    })
                      , o = zp(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: o,
                            referenceHidden: Bp(o)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await Qs(t, {
                        ...i,
                        altBoundary: !0
                    })
                      , o = zp(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: o,
                            escaped: Bp(o)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , z0 = new Set(["left", "top"]);
async function IT(e, t) {
    const {placement: n, platform: r, elements: i} = e
      , s = await (r.isRTL == null ? void 0 : r.isRTL(i.floating))
      , o = gn(n)
      , a = Gi(n)
      , l = Gt(n) === "y"
      , u = z0.has(o) ? -1 : 1
      , c = s && l ? -1 : 1
      , d = mn(t, e);
    let {mainAxis: f, crossAxis: h, alignmentAxis: v} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return a && typeof v == "number" && (h = a === "end" ? v * -1 : v),
    l ? {
        x: h * c,
        y: f * u
    } : {
        x: f * u,
        y: h * c
    }
}
const VT = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: i, y: s, placement: o, middlewareData: a} = t
              , l = await IT(t, e);
            return o === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: i + l.x,
                y: s + l.y,
                data: {
                    ...l,
                    placement: o
                }
            }
        }
    }
}
  , FT = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: i} = t
              , {mainAxis: s=!0, crossAxis: o=!1, limiter: a={
                fn: x => {
                    let {x: p, y: m} = x;
                    return {
                        x: p,
                        y: m
                    }
                }
            }, ...l} = mn(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await Qs(t, l)
              , d = Gt(gn(i))
              , f = xf(d);
            let h = u[f]
              , v = u[d];
            if (s) {
                const x = f === "y" ? "top" : "left"
                  , p = f === "y" ? "bottom" : "right"
                  , m = h + c[x]
                  , y = h - c[p];
                h = Fc(m, h, y)
            }
            if (o) {
                const x = d === "y" ? "top" : "left"
                  , p = d === "y" ? "bottom" : "right"
                  , m = v + c[x]
                  , y = v - c[p];
                v = Fc(m, v, y)
            }
            const g = a.fn({
                ...t,
                [f]: h,
                [d]: v
            });
            return {
                ...g,
                data: {
                    x: g.x - n,
                    y: g.y - r,
                    enabled: {
                        [f]: s,
                        [d]: o
                    }
                }
            }
        }
    }
}
  , _T = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: i, rects: s, middlewareData: o} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = mn(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = Gt(i)
              , f = xf(d);
            let h = c[f]
              , v = c[d];
            const g = mn(a, t)
              , x = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (l) {
                const y = f === "y" ? "height" : "width"
                  , C = s.reference[f] - s.floating[y] + x.mainAxis
                  , E = s.reference[f] + s.reference[y] - x.mainAxis;
                h < C ? h = C : h > E && (h = E)
            }
            if (u) {
                var p, m;
                const y = f === "y" ? "width" : "height"
                  , C = z0.has(gn(i))
                  , E = s.reference[d] - s.floating[y] + (C && ((p = o.offset) == null ? void 0 : p[d]) || 0) + (C ? 0 : x.crossAxis)
                  , P = s.reference[d] + s.reference[y] + (C ? 0 : ((m = o.offset) == null ? void 0 : m[d]) || 0) - (C ? x.crossAxis : 0);
                v < E ? v = E : v > P && (v = P)
            }
            return {
                [f]: h,
                [d]: v
            }
        }
    }
}
  , zT = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, rects: s, platform: o, elements: a} = t
              , {apply: l= () => {}
            , ...u} = mn(e, t)
              , c = await Qs(t, u)
              , d = gn(i)
              , f = Gi(i)
              , h = Gt(i) === "y"
              , {width: v, height: g} = s.floating;
            let x, p;
            d === "top" || d === "bottom" ? (x = d,
            p = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (p = d,
            x = f === "end" ? "top" : "bottom");
            const m = g - c.top - c.bottom
              , y = v - c.left - c.right
              , C = rr(g - c[x], m)
              , E = rr(v - c[p], y)
              , P = !t.middlewareData.shift;
            let T = C
              , b = E;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (b = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = m),
            P && !f) {
                const M = nt(c.left, 0)
                  , z = nt(c.right, 0)
                  , I = nt(c.top, 0)
                  , K = nt(c.bottom, 0);
                h ? b = v - 2 * (M !== 0 || z !== 0 ? M + z : nt(c.left, c.right)) : T = g - 2 * (I !== 0 || K !== 0 ? I + K : nt(c.top, c.bottom))
            }
            await l({
                ...t,
                availableWidth: b,
                availableHeight: T
            });
            const N = await o.getDimensions(a.floating);
            return v !== N.width || g !== N.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Pl() {
    return typeof window < "u"
}
function Qi(e) {
    return B0(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function st(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function tn(e) {
    var t;
    return (t = (B0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function B0(e) {
    return Pl() ? e instanceof Node || e instanceof st(e).Node : !1
}
function Vt(e) {
    return Pl() ? e instanceof Element || e instanceof st(e).Element : !1
}
function Zt(e) {
    return Pl() ? e instanceof HTMLElement || e instanceof st(e).HTMLElement : !1
}
function $p(e) {
    return !Pl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof st(e).ShadowRoot
}
const BT = new Set(["inline", "contents"]);
function mo(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: i} = Ft(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !BT.has(i)
}
const $T = new Set(["table", "td", "th"]);
function UT(e) {
    return $T.has(Qi(e))
}
const WT = [":popover-open", ":modal"];
function Tl(e) {
    return WT.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const HT = ["transform", "translate", "scale", "rotate", "perspective"]
  , KT = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , GT = ["paint", "layout", "strict", "content"];
function Cf(e) {
    const t = Ef()
      , n = Vt(e) ? Ft(e) : e;
    return HT.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || KT.some(r => (n.willChange || "").includes(r)) || GT.some(r => (n.contain || "").includes(r))
}
function QT(e) {
    let t = ir(e);
    for (; Zt(t) && !_i(t); ) {
        if (Cf(t))
            return t;
        if (Tl(t))
            return null;
        t = ir(t)
    }
    return null
}
function Ef() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const YT = new Set(["html", "body", "#document"]);
function _i(e) {
    return YT.has(Qi(e))
}
function Ft(e) {
    return st(e).getComputedStyle(e)
}
function bl(e) {
    return Vt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function ir(e) {
    if (Qi(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || $p(e) && e.host || tn(e);
    return $p(t) ? t.host : t
}
function $0(e) {
    const t = ir(e);
    return _i(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Zt(t) && mo(t) ? t : $0(t)
}
function Ys(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const i = $0(e)
      , s = i === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , o = st(i);
    if (s) {
        const a = zc(o);
        return t.concat(o, o.visualViewport || [], mo(i) ? i : [], a && n ? Ys(a) : [])
    }
    return t.concat(i, Ys(i, [], n))
}
function zc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function U0(e) {
    const t = Ft(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const i = Zt(e)
      , s = i ? e.offsetWidth : n
      , o = i ? e.offsetHeight : r
      , a = Wa(n) !== s || Wa(r) !== o;
    return a && (n = s,
    r = o),
    {
        width: n,
        height: r,
        $: a
    }
}
function Pf(e) {
    return Vt(e) ? e : e.contextElement
}
function Ci(e) {
    const t = Pf(e);
    if (!Zt(t))
        return Xt(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: i, $: s} = U0(t);
    let o = (s ? Wa(n.width) : n.width) / r
      , a = (s ? Wa(n.height) : n.height) / i;
    return (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: o,
        y: a
    }
}
const XT = Xt(0);
function W0(e) {
    const t = st(e);
    return !Ef() || !t.visualViewport ? XT : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function qT(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== st(e) ? !1 : t
}
function Fr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const i = e.getBoundingClientRect()
      , s = Pf(e);
    let o = Xt(1);
    t && (r ? Vt(r) && (o = Ci(r)) : o = Ci(e));
    const a = qT(s, n, r) ? W0(s) : Xt(0);
    let l = (i.left + a.x) / o.x
      , u = (i.top + a.y) / o.y
      , c = i.width / o.x
      , d = i.height / o.y;
    if (s) {
        const f = st(s)
          , h = r && Vt(r) ? st(r) : r;
        let v = f
          , g = zc(v);
        for (; g && r && h !== v; ) {
            const x = Ci(g)
              , p = g.getBoundingClientRect()
              , m = Ft(g)
              , y = p.left + (g.clientLeft + parseFloat(m.paddingLeft)) * x.x
              , C = p.top + (g.clientTop + parseFloat(m.paddingTop)) * x.y;
            l *= x.x,
            u *= x.y,
            c *= x.x,
            d *= x.y,
            l += y,
            u += C,
            v = st(g),
            g = zc(v)
        }
    }
    return Ka({
        width: c,
        height: d,
        x: l,
        y: u
    })
}
function Tf(e, t) {
    const n = bl(e).scrollLeft;
    return t ? t.left + n : Fr(tn(e)).left + n
}
function H0(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , i = r.left + t.scrollLeft - (n ? 0 : Tf(e, r))
      , s = r.top + t.scrollTop;
    return {
        x: i,
        y: s
    }
}
function ZT(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: i} = e;
    const s = i === "fixed"
      , o = tn(r)
      , a = t ? Tl(t.floating) : !1;
    if (r === o || a && s)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Xt(1);
    const c = Xt(0)
      , d = Zt(r);
    if ((d || !d && !s) && ((Qi(r) !== "body" || mo(o)) && (l = bl(r)),
    Zt(r))) {
        const h = Fr(r);
        u = Ci(r),
        c.x = h.x + r.clientLeft,
        c.y = h.y + r.clientTop
    }
    const f = o && !d && !s ? H0(o, l, !0) : Xt(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
    }
}
function JT(e) {
    return Array.from(e.getClientRects())
}
function eb(e) {
    const t = tn(e)
      , n = bl(e)
      , r = e.ownerDocument.body
      , i = nt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , s = nt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let o = -n.scrollLeft + Tf(e);
    const a = -n.scrollTop;
    return Ft(r).direction === "rtl" && (o += nt(t.clientWidth, r.clientWidth) - i),
    {
        width: i,
        height: s,
        x: o,
        y: a
    }
}
function tb(e, t) {
    const n = st(e)
      , r = tn(e)
      , i = n.visualViewport;
    let s = r.clientWidth
      , o = r.clientHeight
      , a = 0
      , l = 0;
    if (i) {
        s = i.width,
        o = i.height;
        const u = Ef();
        (!u || u && t === "fixed") && (a = i.offsetLeft,
        l = i.offsetTop)
    }
    return {
        width: s,
        height: o,
        x: a,
        y: l
    }
}
const nb = new Set(["absolute", "fixed"]);
function rb(e, t) {
    const n = Fr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , i = n.left + e.clientLeft
      , s = Zt(e) ? Ci(e) : Xt(1)
      , o = e.clientWidth * s.x
      , a = e.clientHeight * s.y
      , l = i * s.x
      , u = r * s.y;
    return {
        width: o,
        height: a,
        x: l,
        y: u
    }
}
function Up(e, t, n) {
    let r;
    if (t === "viewport")
        r = tb(e, n);
    else if (t === "document")
        r = eb(tn(e));
    else if (Vt(t))
        r = rb(t, n);
    else {
        const i = W0(e);
        r = {
            x: t.x - i.x,
            y: t.y - i.y,
            width: t.width,
            height: t.height
        }
    }
    return Ka(r)
}
function K0(e, t) {
    const n = ir(e);
    return n === t || !Vt(n) || _i(n) ? !1 : Ft(n).position === "fixed" || K0(n, t)
}
function ib(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Ys(e, [], !1).filter(a => Vt(a) && Qi(a) !== "body")
      , i = null;
    const s = Ft(e).position === "fixed";
    let o = s ? ir(e) : e;
    for (; Vt(o) && !_i(o); ) {
        const a = Ft(o)
          , l = Cf(o);
        !l && a.position === "fixed" && (i = null),
        (s ? !l && !i : !l && a.position === "static" && !!i && nb.has(i.position) || mo(o) && !l && K0(e, o)) ? r = r.filter(c => c !== o) : i = a,
        o = ir(o)
    }
    return t.set(e, r),
    r
}
function sb(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: i} = e;
    const o = [...n === "clippingAncestors" ? Tl(t) ? [] : ib(t, this._c) : [].concat(n), r]
      , a = o[0]
      , l = o.reduce( (u, c) => {
        const d = Up(t, c, i);
        return u.top = nt(d.top, u.top),
        u.right = rr(d.right, u.right),
        u.bottom = rr(d.bottom, u.bottom),
        u.left = nt(d.left, u.left),
        u
    }
    , Up(t, a, i));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function ob(e) {
    const {width: t, height: n} = U0(e);
    return {
        width: t,
        height: n
    }
}
function ab(e, t, n) {
    const r = Zt(t)
      , i = tn(t)
      , s = n === "fixed"
      , o = Fr(e, !0, s, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Xt(0);
    function u() {
        l.x = Tf(i)
    }
    if (r || !r && !s)
        if ((Qi(t) !== "body" || mo(i)) && (a = bl(t)),
        r) {
            const h = Fr(t, !0, s, t);
            l.x = h.x + t.clientLeft,
            l.y = h.y + t.clientTop
        } else
            i && u();
    s && !r && i && u();
    const c = i && !r && !s ? H0(i, a) : Xt(0)
      , d = o.left + a.scrollLeft - l.x - c.x
      , f = o.top + a.scrollTop - l.y - c.y;
    return {
        x: d,
        y: f,
        width: o.width,
        height: o.height
    }
}
function vu(e) {
    return Ft(e).position === "static"
}
function Wp(e, t) {
    if (!Zt(e) || Ft(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return tn(e) === n && (n = n.ownerDocument.body),
    n
}
function G0(e, t) {
    const n = st(e);
    if (Tl(e))
        return n;
    if (!Zt(e)) {
        let i = ir(e);
        for (; i && !_i(i); ) {
            if (Vt(i) && !vu(i))
                return i;
            i = ir(i)
        }
        return n
    }
    let r = Wp(e, t);
    for (; r && UT(r) && vu(r); )
        r = Wp(r, t);
    return r && _i(r) && vu(r) && !Cf(r) ? n : r || QT(e) || n
}
const lb = async function(e) {
    const t = this.getOffsetParent || G0
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: ab(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function ub(e) {
    return Ft(e).direction === "rtl"
}
const cb = {
    convertOffsetParentRelativeRectToViewportRelativeRect: ZT,
    getDocumentElement: tn,
    getClippingRect: sb,
    getOffsetParent: G0,
    getElementRects: lb,
    getClientRects: JT,
    getDimensions: ob,
    getScale: Ci,
    isElement: Vt,
    isRTL: ub
};
function Q0(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function db(e, t) {
    let n = null, r;
    const i = tn(e);
    function s() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function o(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        s();
        const u = e.getBoundingClientRect()
          , {left: c, top: d, width: f, height: h} = u;
        if (a || t(),
        !f || !h)
            return;
        const v = Ko(d)
          , g = Ko(i.clientWidth - (c + f))
          , x = Ko(i.clientHeight - (d + h))
          , p = Ko(c)
          , y = {
            rootMargin: -v + "px " + -g + "px " + -x + "px " + -p + "px",
            threshold: nt(0, rr(1, l)) || 1
        };
        let C = !0;
        function E(P) {
            const T = P[0].intersectionRatio;
            if (T !== l) {
                if (!C)
                    return o();
                T ? o(!1, T) : r = setTimeout( () => {
                    o(!1, 1e-7)
                }
                , 1e3)
            }
            T === 1 && !Q0(u, e.getBoundingClientRect()) && o(),
            C = !1
        }
        try {
            n = new IntersectionObserver(E,{
                ...y,
                root: i.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(E,y)
        }
        n.observe(e)
    }
    return o(!0),
    s
}
function fb(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: i=!0, ancestorResize: s=!0, elementResize: o=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = Pf(e)
      , c = i || s ? [...u ? Ys(u) : [], ...Ys(t)] : [];
    c.forEach(p => {
        i && p.addEventListener("scroll", n, {
            passive: !0
        }),
        s && p.addEventListener("resize", n)
    }
    );
    const d = u && a ? db(u, n) : null;
    let f = -1
      , h = null;
    o && (h = new ResizeObserver(p => {
        let[m] = p;
        m && m.target === u && h && (h.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var y;
            (y = h) == null || y.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && h.observe(u),
    h.observe(t));
    let v, g = l ? Fr(e) : null;
    l && x();
    function x() {
        const p = Fr(e);
        g && !Q0(g, p) && n(),
        g = p,
        v = requestAnimationFrame(x)
    }
    return n(),
    () => {
        var p;
        c.forEach(m => {
            i && m.removeEventListener("scroll", n),
            s && m.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (p = h) == null || p.disconnect(),
        h = null,
        l && cancelAnimationFrame(v)
    }
}
const hb = VT
  , pb = FT
  , mb = LT
  , gb = zT
  , yb = OT
  , Hp = jT
  , vb = _T
  , xb = (e, t, n) => {
    const r = new Map
      , i = {
        platform: cb,
        ...n
    }
      , s = {
        ...i.platform,
        _c: r
    };
    return DT(e, t, {
        ...i,
        platform: s
    })
}
;
var wb = typeof document < "u"
  , Sb = function() {}
  , fa = wb ? w.useLayoutEffect : Sb;
function Ga(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, i;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Ga(e[r], t[r]))
                    return !1;
            return !0
        }
        if (i = Object.keys(e),
        n = i.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, i[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const s = i[r];
            if (!(s === "_owner" && e.$$typeof) && !Ga(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Y0(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Kp(e, t) {
    const n = Y0(e);
    return Math.round(t * n) / n
}
function xu(e) {
    const t = w.useRef(e);
    return fa( () => {
        t.current = e
    }
    ),
    t
}
function Cb(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: i, elements: {reference: s, floating: o}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [c,d] = w.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,h] = w.useState(r);
    Ga(f, r) || h(r);
    const [v,g] = w.useState(null)
      , [x,p] = w.useState(null)
      , m = w.useCallback(k => {
        k !== P.current && (P.current = k,
        g(k))
    }
    , [])
      , y = w.useCallback(k => {
        k !== T.current && (T.current = k,
        p(k))
    }
    , [])
      , C = s || v
      , E = o || x
      , P = w.useRef(null)
      , T = w.useRef(null)
      , b = w.useRef(c)
      , N = l != null
      , M = xu(l)
      , z = xu(i)
      , I = xu(u)
      , K = w.useCallback( () => {
        if (!P.current || !T.current)
            return;
        const k = {
            placement: t,
            strategy: n,
            middleware: f
        };
        z.current && (k.platform = z.current),
        xb(P.current, T.current, k).then(A => {
            const O = {
                ...A,
                isPositioned: I.current !== !1
            };
            L.current && !Ga(b.current, O) && (b.current = O,
            ho.flushSync( () => {
                d(O)
            }
            ))
        }
        )
    }
    , [f, t, n, z, I]);
    fa( () => {
        u === !1 && b.current.isPositioned && (b.current.isPositioned = !1,
        d(k => ({
            ...k,
            isPositioned: !1
        })))
    }
    , [u]);
    const L = w.useRef(!1);
    fa( () => (L.current = !0,
    () => {
        L.current = !1
    }
    ), []),
    fa( () => {
        if (C && (P.current = C),
        E && (T.current = E),
        C && E) {
            if (M.current)
                return M.current(C, E, K);
            K()
        }
    }
    , [C, E, K, M, N]);
    const Q = w.useMemo( () => ({
        reference: P,
        floating: T,
        setReference: m,
        setFloating: y
    }), [m, y])
      , $ = w.useMemo( () => ({
        reference: C,
        floating: E
    }), [C, E])
      , _ = w.useMemo( () => {
        const k = {
            position: n,
            left: 0,
            top: 0
        };
        if (!$.floating)
            return k;
        const A = Kp($.floating, c.x)
          , O = Kp($.floating, c.y);
        return a ? {
            ...k,
            transform: "translate(" + A + "px, " + O + "px)",
            ...Y0($.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: A,
            top: O
        }
    }
    , [n, a, $.floating, c.x, c.y]);
    return w.useMemo( () => ({
        ...c,
        update: K,
        refs: Q,
        elements: $,
        floatingStyles: _
    }), [c, K, Q, $, _])
}
const Eb = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: i} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Hp({
                element: r.current,
                padding: i
            }).fn(n) : {} : r ? Hp({
                element: r,
                padding: i
            }).fn(n) : {}
        }
    }
}
  , Pb = (e, t) => ({
    ...hb(e),
    options: [e, t]
})
  , Tb = (e, t) => ({
    ...pb(e),
    options: [e, t]
})
  , bb = (e, t) => ({
    ...vb(e),
    options: [e, t]
})
  , kb = (e, t) => ({
    ...mb(e),
    options: [e, t]
})
  , Rb = (e, t) => ({
    ...gb(e),
    options: [e, t]
})
  , Ab = (e, t) => ({
    ...yb(e),
    options: [e, t]
})
  , Nb = (e, t) => ({
    ...Eb(e),
    options: [e, t]
});
var Mb = "Arrow"
  , X0 = w.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: i=5, ...s} = e;
    return S.jsx(et.svg, {
        ...s,
        ref: t,
        width: r,
        height: i,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : S.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
X0.displayName = Mb;
var Db = X0;
function jb(e) {
    const [t,n] = w.useState(void 0);
    return nr( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(i => {
                if (!Array.isArray(i) || !i.length)
                    return;
                const s = i[0];
                let o, a;
                if ("borderBoxSize"in s) {
                    const l = s.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    o = u.inlineSize,
                    a = u.blockSize
                } else
                    o = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: o,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var q0 = "Popper"
  , [Z0,J0] = Sl(q0)
  , [ZD,ex] = Z0(q0)
  , tx = "PopperAnchor"
  , nx = w.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...i} = e
      , s = ex(tx, n)
      , o = w.useRef(null)
      , a = It(t, o);
    return w.useEffect( () => {
        s.onAnchorChange((r == null ? void 0 : r.current) || o.current)
    }
    ),
    r ? null : S.jsx(et.div, {
        ...i,
        ref: a
    })
}
);
nx.displayName = tx;
var bf = "PopperContent"
  , [Lb,Ob] = Z0(bf)
  , rx = w.forwardRef( (e, t) => {
    var ee, Wr, xn, fr, wn, Hr;
    const {__scopePopper: n, side: r="bottom", sideOffset: i=0, align: s="center", alignOffset: o=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: d="partial", hideWhenDetached: f=!1, updatePositionStrategy: h="optimized", onPlaced: v, ...g} = e
      , x = ex(bf, n)
      , [p,m] = w.useState(null)
      , y = It(t, Sn => m(Sn))
      , [C,E] = w.useState(null)
      , P = jb(C)
      , T = (P == null ? void 0 : P.width) ?? 0
      , b = (P == null ? void 0 : P.height) ?? 0
      , N = r + (s !== "center" ? "-" + s : "")
      , M = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , z = Array.isArray(u) ? u : [u]
      , I = z.length > 0
      , K = {
        padding: M,
        boundary: z.filter(Vb),
        altBoundary: I
    }
      , {refs: L, floatingStyles: Q, placement: $, isPositioned: _, middlewareData: k} = Cb({
        strategy: "fixed",
        placement: N,
        whileElementsMounted: (...Sn) => fb(...Sn, {
            animationFrame: h === "always"
        }),
        elements: {
            reference: x.anchor
        },
        middleware: [Pb({
            mainAxis: i + b,
            alignmentAxis: o
        }), l && Tb({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? bb() : void 0,
            ...K
        }), l && kb({
            ...K
        }), Rb({
            ...K,
            apply: ({elements: Sn, rects: Co, availableWidth: Vl, availableHeight: Eo}) => {
                const {width: Fl, height: Ji} = Co.reference
                  , Kr = Sn.floating.style;
                Kr.setProperty("--radix-popper-available-width", `${Vl}px`),
                Kr.setProperty("--radix-popper-available-height", `${Eo}px`),
                Kr.setProperty("--radix-popper-anchor-width", `${Fl}px`),
                Kr.setProperty("--radix-popper-anchor-height", `${Ji}px`)
            }
        }), C && Nb({
            element: C,
            padding: a
        }), Fb({
            arrowWidth: T,
            arrowHeight: b
        }), f && Ab({
            strategy: "referenceHidden",
            ...K
        })]
    })
      , [A,O] = ox($)
      , U = tr(v);
    nr( () => {
        _ && (U == null || U())
    }
    , [_, U]);
    const B = (ee = k.arrow) == null ? void 0 : ee.x
      , Y = (Wr = k.arrow) == null ? void 0 : Wr.y
      , q = ((xn = k.arrow) == null ? void 0 : xn.centerOffset) !== 0
      , [ve,De] = w.useState();
    return nr( () => {
        p && De(window.getComputedStyle(p).zIndex)
    }
    , [p]),
    S.jsx("div", {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Q,
            transform: _ ? Q.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ve,
            "--radix-popper-transform-origin": [(fr = k.transformOrigin) == null ? void 0 : fr.x, (wn = k.transformOrigin) == null ? void 0 : wn.y].join(" "),
            ...((Hr = k.hide) == null ? void 0 : Hr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: S.jsx(Lb, {
            scope: n,
            placedSide: A,
            onArrowChange: E,
            arrowX: B,
            arrowY: Y,
            shouldHideArrow: q,
            children: S.jsx(et.div, {
                "data-side": A,
                "data-align": O,
                ...g,
                ref: y,
                style: {
                    ...g.style,
                    animation: _ ? void 0 : "none"
                }
            })
        })
    })
}
);
rx.displayName = bf;
var ix = "PopperArrow"
  , Ib = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , sx = w.forwardRef(function(t, n) {
    const {__scopePopper: r, ...i} = t
      , s = Ob(ix, r)
      , o = Ib[s.placedSide];
    return S.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [o]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: S.jsx(Db, {
            ...i,
            ref: n,
            style: {
                ...i.style,
                display: "block"
            }
        })
    })
});
sx.displayName = ix;
function Vb(e) {
    return e !== null
}
var Fb = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var x, p, m;
        const {placement: n, rects: r, middlewareData: i} = t
          , o = ((x = i.arrow) == null ? void 0 : x.centerOffset) !== 0
          , a = o ? 0 : e.arrowWidth
          , l = o ? 0 : e.arrowHeight
          , [u,c] = ox(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , f = (((p = i.arrow) == null ? void 0 : p.x) ?? 0) + a / 2
          , h = (((m = i.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
        let v = ""
          , g = "";
        return u === "bottom" ? (v = o ? d : `${f}px`,
        g = `${-l}px`) : u === "top" ? (v = o ? d : `${f}px`,
        g = `${r.floating.height + l}px`) : u === "right" ? (v = `${-l}px`,
        g = o ? d : `${h}px`) : u === "left" && (v = `${r.floating.width + l}px`,
        g = o ? d : `${h}px`),
        {
            data: {
                x: v,
                y: g
            }
        }
    }
});
function ox(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var _b = nx
  , zb = rx
  , Bb = sx
  , [kl,JD] = Sl("Tooltip", [J0])
  , kf = J0()
  , ax = "TooltipProvider"
  , $b = 700
  , Gp = "tooltip.open"
  , [Ub,lx] = kl(ax)
  , ux = e => {
    const {__scopeTooltip: t, delayDuration: n=$b, skipDelayDuration: r=300, disableHoverableContent: i=!1, children: s} = e
      , o = w.useRef(!0)
      , a = w.useRef(!1)
      , l = w.useRef(0);
    return w.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    S.jsx(Ub, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: w.useCallback( () => {
            window.clearTimeout(l.current),
            o.current = !1
        }
        , []),
        onClose: w.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => o.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: w.useCallback(u => {
            a.current = u
        }
        , []),
        disableHoverableContent: i,
        children: s
    })
}
;
ux.displayName = ax;
var cx = "Tooltip"
  , [ej,Rl] = kl(cx)
  , Bc = "TooltipTrigger"
  , Wb = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , i = Rl(Bc, n)
      , s = lx(Bc, n)
      , o = kf(n)
      , a = w.useRef(null)
      , l = It(t, a, i.onTriggerChange)
      , u = w.useRef(!1)
      , c = w.useRef(!1)
      , d = w.useCallback( () => u.current = !1, []);
    return w.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    S.jsx(_b, {
        asChild: !0,
        ...o,
        children: S.jsx(et.button, {
            "aria-describedby": i.open ? i.contentId : void 0,
            "data-state": i.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: Pe(e.onPointerMove, f => {
                f.pointerType !== "touch" && !c.current && !s.isPointerInTransitRef.current && (i.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: Pe(e.onPointerLeave, () => {
                i.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: Pe(e.onPointerDown, () => {
                i.open && i.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: Pe(e.onFocus, () => {
                u.current || i.onOpen()
            }
            ),
            onBlur: Pe(e.onBlur, i.onClose),
            onClick: Pe(e.onClick, i.onClose)
        })
    })
}
);
Wb.displayName = Bc;
var Hb = "TooltipPortal"
  , [tj,Kb] = kl(Hb, {
    forceMount: void 0
})
  , zi = "TooltipContent"
  , dx = w.forwardRef( (e, t) => {
    const n = Kb(zi, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: i="top", ...s} = e
      , o = Rl(zi, e.__scopeTooltip);
    return S.jsx(hf, {
        present: r || o.open,
        children: o.disableHoverableContent ? S.jsx(fx, {
            side: i,
            ...s,
            ref: t
        }) : S.jsx(Gb, {
            side: i,
            ...s,
            ref: t
        })
    })
}
)
  , Gb = w.forwardRef( (e, t) => {
    const n = Rl(zi, e.__scopeTooltip)
      , r = lx(zi, e.__scopeTooltip)
      , i = w.useRef(null)
      , s = It(t, i)
      , [o,a] = w.useState(null)
      , {trigger: l, onClose: u} = n
      , c = i.current
      , {onPointerInTransitChange: d} = r
      , f = w.useCallback( () => {
        a(null),
        d(!1)
    }
    , [d])
      , h = w.useCallback( (v, g) => {
        const x = v.currentTarget
          , p = {
            x: v.clientX,
            y: v.clientY
        }
          , m = Zb(p, x.getBoundingClientRect())
          , y = Jb(p, m)
          , C = ek(g.getBoundingClientRect())
          , E = nk([...y, ...C]);
        a(E),
        d(!0)
    }
    , [d]);
    return w.useEffect( () => () => f(), [f]),
    w.useEffect( () => {
        if (l && c) {
            const v = x => h(x, c)
              , g = x => h(x, l);
            return l.addEventListener("pointerleave", v),
            c.addEventListener("pointerleave", g),
            () => {
                l.removeEventListener("pointerleave", v),
                c.removeEventListener("pointerleave", g)
            }
        }
    }
    , [l, c, h, f]),
    w.useEffect( () => {
        if (o) {
            const v = g => {
                const x = g.target
                  , p = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , m = (l == null ? void 0 : l.contains(x)) || (c == null ? void 0 : c.contains(x))
                  , y = !tk(p, o);
                m ? f() : y && (f(),
                u())
            }
            ;
            return document.addEventListener("pointermove", v),
            () => document.removeEventListener("pointermove", v)
        }
    }
    , [l, c, o, u, f]),
    S.jsx(fx, {
        ...e,
        ref: s
    })
}
)
  , [Qb,Yb] = kl(cx, {
    isInside: !1
})
  , Xb = lE("TooltipContent")
  , fx = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": i, onEscapeKeyDown: s, onPointerDownOutside: o, ...a} = e
      , l = Rl(zi, n)
      , u = kf(n)
      , {onClose: c} = l;
    return w.useEffect( () => (document.addEventListener(Gp, c),
    () => document.removeEventListener(Gp, c)), [c]),
    w.useEffect( () => {
        if (l.trigger) {
            const d = f => {
                const h = f.target;
                h != null && h.contains(l.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [l.trigger, c]),
    S.jsx(ff, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: o,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: c,
        children: S.jsxs(zb, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [S.jsx(Xb, {
                children: r
            }), S.jsx(Qb, {
                scope: n,
                isInside: !0,
                children: S.jsx(jE, {
                    id: l.contentId,
                    role: "tooltip",
                    children: i || r
                })
            })]
        })
    })
}
);
dx.displayName = zi;
var hx = "TooltipArrow"
  , qb = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , i = kf(n);
    return Yb(hx, n).isInside ? null : S.jsx(Bb, {
        ...i,
        ...r,
        ref: t
    })
}
);
qb.displayName = hx;
function Zb(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , i = Math.abs(t.right - e.x)
      , s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, i, s)) {
    case s:
        return "left";
    case i:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function Jb(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function ek(e) {
    const {top: t, right: n, bottom: r, left: i} = e;
    return [{
        x: i,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: i,
        y: r
    }]
}
function tk(e, t) {
    const {x: n, y: r} = e;
    let i = !1;
    for (let s = 0, o = t.length - 1; s < t.length; o = s++) {
        const a = t[s]
          , l = t[o]
          , u = a.x
          , c = a.y
          , d = l.x
          , f = l.y;
        c > r != f > r && n < (d - u) * (r - c) / (f - c) + u && (i = !i)
    }
    return i
}
function nk(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    rk(t)
}
function rk(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1]
              , o = t[t.length - 2];
            if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x))
                t.pop();
            else
                break
        }
        t.push(i)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const i = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1]
              , o = n[n.length - 2];
            if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x))
                n.pop();
            else
                break
        }
        n.push(i)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var ik = ux
  , px = dx;
const sk = ik
  , ok = w.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => S.jsx(px, {
    ref: r,
    sideOffset: t,
    className: cr("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
ok.displayName = px.displayName;
var Al = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Nl = typeof window > "u" || "Deno"in globalThis;
function Rt() {}
function ak(e, t) {
    return typeof e == "function" ? e(t) : e
}
function lk(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function uk(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function $c(e, t) {
    return typeof e == "function" ? e(t) : e
}
function ck(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Qp(e, t) {
    const {type: n="all", exact: r, fetchStatus: i, predicate: s, queryKey: o, stale: a} = e;
    if (o) {
        if (r) {
            if (t.queryHash !== Rf(o, t.options))
                return !1
        } else if (!qs(t.queryKey, o))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || i && i !== t.state.fetchStatus || s && !s(t))
}
function Yp(e, t) {
    const {exact: n, status: r, predicate: i, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Xs(t.options.mutationKey) !== Xs(s))
                return !1
        } else if (!qs(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || i && !i(t))
}
function Rf(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Xs)(e)
}
function Xs(e) {
    return JSON.stringify(e, (t, n) => Uc(n) ? Object.keys(n).sort().reduce( (r, i) => (r[i] = n[i],
    r), {}) : n)
}
function qs(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => qs(e[n], t[n])) : !1
}
function mx(e, t) {
    if (e === t)
        return e;
    const n = Xp(e) && Xp(t);
    if (n || Uc(e) && Uc(t)) {
        const r = n ? e : Object.keys(e)
          , i = r.length
          , s = n ? t : Object.keys(t)
          , o = s.length
          , a = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let c = 0; c < o; c++) {
            const d = n ? c : s[c];
            (!n && l.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (a[d] = void 0,
            u++) : (a[d] = mx(e[d], t[d]),
            a[d] === e[d] && e[d] !== void 0 && u++)
        }
        return i === o && u === i ? e : a
    }
    return t
}
function Xp(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Uc(e) {
    if (!qp(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!qp(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function qp(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function dk(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function fk(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? mx(e, t) : t
}
function hk(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function pk(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Af = Symbol();
function gx(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Af ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Pr, On, Pi, kg, mk = (kg = class extends Al {
    constructor() {
        super();
        J(this, Pr);
        J(this, On);
        J(this, Pi);
        H(this, Pi, t => {
            if (!Nl && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        R(this, On) || this.setEventListener(R(this, Pi))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = R(this, On)) == null || t.call(this),
        H(this, On, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Pi, t),
        (n = R(this, On)) == null || n.call(this),
        H(this, On, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        R(this, Pr) !== t && (H(this, Pr, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof R(this, Pr) == "boolean" ? R(this, Pr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Pr = new WeakMap,
On = new WeakMap,
Pi = new WeakMap,
kg), yx = new mk, Ti, In, bi, Rg, gk = (Rg = class extends Al {
    constructor() {
        super();
        J(this, Ti, !0);
        J(this, In);
        J(this, bi);
        H(this, bi, t => {
            if (!Nl && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        R(this, In) || this.setEventListener(R(this, bi))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = R(this, In)) == null || t.call(this),
        H(this, In, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, bi, t),
        (n = R(this, In)) == null || n.call(this),
        H(this, In, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        R(this, Ti) !== t && (H(this, Ti, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return R(this, Ti)
    }
}
,
Ti = new WeakMap,
In = new WeakMap,
bi = new WeakMap,
Rg), Qa = new gk;
function yk() {
    let e, t;
    const n = new Promise( (i, s) => {
        e = i,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(i) {
        Object.assign(n, i),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = i => {
        r({
            status: "fulfilled",
            value: i
        }),
        e(i)
    }
    ,
    n.reject = i => {
        r({
            status: "rejected",
            reason: i
        }),
        t(i)
    }
    ,
    n
}
function vk(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function vx(e) {
    return (e ?? "online") === "online" ? Qa.isOnline() : !0
}
var xx = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function wu(e) {
    return e instanceof xx
}
function wx(e) {
    let t = !1, n = 0, r = !1, i;
    const s = yk()
      , o = g => {
        var x;
        r || (f(new xx(g)),
        (x = e.abort) == null || x.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => yx.isFocused() && (e.networkMode === "always" || Qa.isOnline()) && e.canRun()
      , c = () => vx(e.networkMode) && e.canRun()
      , d = g => {
        var x;
        r || (r = !0,
        (x = e.onSuccess) == null || x.call(e, g),
        i == null || i(),
        s.resolve(g))
    }
      , f = g => {
        var x;
        r || (r = !0,
        (x = e.onError) == null || x.call(e, g),
        i == null || i(),
        s.reject(g))
    }
      , h = () => new Promise(g => {
        var x;
        i = p => {
            (r || u()) && g(p)
        }
        ,
        (x = e.onPause) == null || x.call(e)
    }
    ).then( () => {
        var g;
        i = void 0,
        r || (g = e.onContinue) == null || g.call(e)
    }
    )
      , v = () => {
        if (r)
            return;
        let g;
        const x = n === 0 ? e.initialPromise : void 0;
        try {
            g = x ?? e.fn()
        } catch (p) {
            g = Promise.reject(p)
        }
        Promise.resolve(g).then(d).catch(p => {
            var P;
            if (r)
                return;
            const m = e.retry ?? (Nl ? 0 : 3)
              , y = e.retryDelay ?? vk
              , C = typeof y == "function" ? y(n, p) : y
              , E = m === !0 || typeof m == "number" && n < m || typeof m == "function" && m(n, p);
            if (t || !E) {
                f(p);
                return
            }
            n++,
            (P = e.onFail) == null || P.call(e, n, p),
            dk(C).then( () => u() ? void 0 : h()).then( () => {
                t ? f(p) : v()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: o,
        continue: () => (i == null || i(),
        s),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? v() : h().then(v),
        s)
    }
}
var xk = e => setTimeout(e, 0);
function wk() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , i = xk;
    const s = a => {
        t ? e.push(a) : i( () => {
            n(a)
        }
        )
    }
      , o = () => {
        const a = e;
        e = [],
        a.length && i( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || o()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            s( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            i = a
        }
    }
}
var $e = wk(), Tr, Ag, Sx = (Ag = class {
    constructor() {
        J(this, Tr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        lk(this.gcTime) && H(this, Tr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Nl ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        R(this, Tr) && (clearTimeout(R(this, Tr)),
        H(this, Tr, void 0))
    }
}
,
Tr = new WeakMap,
Ag), ki, br, ct, kr, Ie, so, Rr, At, rn, Ng, Sk = (Ng = class extends Sx {
    constructor(t) {
        super();
        J(this, At);
        J(this, ki);
        J(this, br);
        J(this, ct);
        J(this, kr);
        J(this, Ie);
        J(this, so);
        J(this, Rr);
        H(this, Rr, !1),
        H(this, so, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        H(this, kr, t.client),
        H(this, ct, R(this, kr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        H(this, ki, Ek(this.options)),
        this.state = t.state ?? R(this, ki),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = R(this, Ie)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...R(this, so),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && R(this, ct).remove(this)
    }
    setData(t, n) {
        const r = fk(this.state.data, t, this.options);
        return je(this, At, rn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        je(this, At, rn).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, i;
        const n = (r = R(this, Ie)) == null ? void 0 : r.promise;
        return (i = R(this, Ie)) == null || i.cancel(t),
        n ? n.then(Rt).catch(Rt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(R(this, ki))
    }
    isActive() {
        return this.observers.some(t => ck(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Af || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => $c(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !uk(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = R(this, Ie)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = R(this, Ie)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        R(this, ct).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (R(this, Ie) && (R(this, Rr) ? R(this, Ie).cancel({
            revert: !0
        }) : R(this, Ie).cancelRetry()),
        this.scheduleGc()),
        R(this, ct).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || je(this, At, rn).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (R(this, Ie))
                return R(this, Ie).continueRetry(),
                R(this, Ie).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(h => h.options.queryFn);
            f && this.setOptions(f.options)
        }
        const r = new AbortController
          , i = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (H(this, Rr, !0),
                r.signal)
            })
        }
          , s = () => {
            const f = gx(this.options, n)
              , v = ( () => {
                const g = {
                    client: R(this, kr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return i(g),
                g
            }
            )();
            return H(this, Rr, !1),
            this.options.persister ? this.options.persister(f, v, this) : f(v)
        }
          , a = ( () => {
            const f = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: R(this, kr),
                state: this.state,
                fetchFn: s
            };
            return i(f),
            f
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        H(this, br, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) && je(this, At, rn).call(this, {
            type: "fetch",
            meta: (d = a.fetchOptions) == null ? void 0 : d.meta
        });
        const l = f => {
            var h, v, g, x;
            wu(f) && f.silent || je(this, At, rn).call(this, {
                type: "error",
                error: f
            }),
            wu(f) || ((v = (h = R(this, ct).config).onError) == null || v.call(h, f, this),
            (x = (g = R(this, ct).config).onSettled) == null || x.call(g, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return H(this, Ie, wx({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: a.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: f => {
                var h, v, g, x;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (p) {
                    l(p);
                    return
                }
                (v = (h = R(this, ct).config).onSuccess) == null || v.call(h, f, this),
                (x = (g = R(this, ct).config).onSettled) == null || x.call(g, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (f, h) => {
                je(this, At, rn).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: h
                })
            }
            ,
            onPause: () => {
                je(this, At, rn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                je(this, At, rn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        R(this, Ie).start()
    }
}
,
ki = new WeakMap,
br = new WeakMap,
ct = new WeakMap,
kr = new WeakMap,
Ie = new WeakMap,
so = new WeakMap,
Rr = new WeakMap,
At = new WeakSet,
rn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...Ck(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return H(this, br, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const i = t.error;
            return wu(i) && i.revert && R(this, br) ? {
                ...R(this, br),
                fetchStatus: "idle"
            } : {
                ...r,
                error: i,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: i,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    $e.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        R(this, ct).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Ng);
function Ck(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: vx(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Ek(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Ut, Mg, Pk = (Mg = class extends Al {
    constructor(t={}) {
        super();
        J(this, Ut);
        this.config = t,
        H(this, Ut, new Map)
    }
    build(t, n, r) {
        const i = n.queryKey
          , s = n.queryHash ?? Rf(i, n);
        let o = this.get(s);
        return o || (o = new Sk({
            client: t,
            queryKey: i,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(i)
        }),
        this.add(o)),
        o
    }
    add(t) {
        R(this, Ut).has(t.queryHash) || (R(this, Ut).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = R(this, Ut).get(t.queryHash);
        n && (t.destroy(),
        n === t && R(this, Ut).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        $e.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return R(this, Ut).get(t)
    }
    getAll() {
        return [...R(this, Ut).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Qp(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Qp(t, r)) : n
    }
    notify(t) {
        $e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        $e.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        $e.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Ut = new WeakMap,
Mg), Wt, ze, Ar, Ht, Rn, Dg, Tk = (Dg = class extends Sx {
    constructor(t) {
        super();
        J(this, Ht);
        J(this, Wt);
        J(this, ze);
        J(this, Ar);
        this.mutationId = t.mutationId,
        H(this, ze, t.mutationCache),
        H(this, Wt, []),
        this.state = t.state || bk(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        R(this, Wt).includes(t) || (R(this, Wt).push(t),
        this.clearGcTimeout(),
        R(this, ze).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        H(this, Wt, R(this, Wt).filter(n => n !== t)),
        this.scheduleGc(),
        R(this, ze).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        R(this, Wt).length || (this.state.status === "pending" ? this.scheduleGc() : R(this, ze).remove(this))
    }
    continue() {
        var t;
        return ((t = R(this, Ar)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var s, o, a, l, u, c, d, f, h, v, g, x, p, m, y, C, E, P, T, b;
        const n = () => {
            je(this, Ht, Rn).call(this, {
                type: "continue"
            })
        }
        ;
        H(this, Ar, wx({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (N, M) => {
                je(this, Ht, Rn).call(this, {
                    type: "failed",
                    failureCount: N,
                    error: M
                })
            }
            ,
            onPause: () => {
                je(this, Ht, Rn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => R(this, ze).canRun(this)
        }));
        const r = this.state.status === "pending"
          , i = !R(this, Ar).canStart();
        try {
            if (r)
                n();
            else {
                je(this, Ht, Rn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: i
                }),
                await ((o = (s = R(this, ze).config).onMutate) == null ? void 0 : o.call(s, t, this));
                const M = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                M !== this.state.context && je(this, Ht, Rn).call(this, {
                    type: "pending",
                    context: M,
                    variables: t,
                    isPaused: i
                })
            }
            const N = await R(this, Ar).start();
            return await ((c = (u = R(this, ze).config).onSuccess) == null ? void 0 : c.call(u, N, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, N, t, this.state.context)),
            await ((v = (h = R(this, ze).config).onSettled) == null ? void 0 : v.call(h, N, null, this.state.variables, this.state.context, this)),
            await ((x = (g = this.options).onSettled) == null ? void 0 : x.call(g, N, null, t, this.state.context)),
            je(this, Ht, Rn).call(this, {
                type: "success",
                data: N
            }),
            N
        } catch (N) {
            try {
                throw await ((m = (p = R(this, ze).config).onError) == null ? void 0 : m.call(p, N, t, this.state.context, this)),
                await ((C = (y = this.options).onError) == null ? void 0 : C.call(y, N, t, this.state.context)),
                await ((P = (E = R(this, ze).config).onSettled) == null ? void 0 : P.call(E, void 0, N, this.state.variables, this.state.context, this)),
                await ((b = (T = this.options).onSettled) == null ? void 0 : b.call(T, void 0, N, t, this.state.context)),
                N
            } finally {
                je(this, Ht, Rn).call(this, {
                    type: "error",
                    error: N
                })
            }
        } finally {
            R(this, ze).runNext(this)
        }
    }
}
,
Wt = new WeakMap,
ze = new WeakMap,
Ar = new WeakMap,
Ht = new WeakSet,
Rn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    $e.batch( () => {
        R(this, Wt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        R(this, ze).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Dg);
function bk() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var an, Nt, oo, jg, kk = (jg = class extends Al {
    constructor(t={}) {
        super();
        J(this, an);
        J(this, Nt);
        J(this, oo);
        this.config = t,
        H(this, an, new Set),
        H(this, Nt, new Map),
        H(this, oo, 0)
    }
    build(t, n, r) {
        const i = new Tk({
            mutationCache: this,
            mutationId: ++To(this, oo)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(i),
        i
    }
    add(t) {
        R(this, an).add(t);
        const n = Go(t);
        if (typeof n == "string") {
            const r = R(this, Nt).get(n);
            r ? r.push(t) : R(this, Nt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (R(this, an).delete(t)) {
            const n = Go(t);
            if (typeof n == "string") {
                const r = R(this, Nt).get(n);
                if (r)
                    if (r.length > 1) {
                        const i = r.indexOf(t);
                        i !== -1 && r.splice(i, 1)
                    } else
                        r[0] === t && R(this, Nt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = Go(t);
        if (typeof n == "string") {
            const r = R(this, Nt).get(n)
              , i = r == null ? void 0 : r.find(s => s.state.status === "pending");
            return !i || i === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = Go(t);
        if (typeof n == "string") {
            const i = (r = R(this, Nt).get(n)) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
            return (i == null ? void 0 : i.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        $e.batch( () => {
            R(this, an).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            R(this, an).clear(),
            R(this, Nt).clear()
        }
        )
    }
    getAll() {
        return Array.from(R(this, an))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Yp(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Yp(t, n))
    }
    notify(t) {
        $e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return $e.batch( () => Promise.all(t.map(n => n.continue().catch(Rt))))
    }
}
,
an = new WeakMap,
Nt = new WeakMap,
oo = new WeakMap,
jg);
function Go(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Zp(e) {
    return {
        onFetch: (t, n) => {
            var c, d, f, h, v;
            const r = t.options
              , i = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction
              , s = ((h = t.state.data) == null ? void 0 : h.pages) || []
              , o = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let g = !1;
                const x = y => {
                    Object.defineProperty(y, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , p = gx(t.options, t.fetchOptions)
                  , m = async (y, C, E) => {
                    if (g)
                        return Promise.reject();
                    if (C == null && y.pages.length)
                        return Promise.resolve(y);
                    const T = ( () => {
                        const z = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: C,
                            direction: E ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return x(z),
                        z
                    }
                    )()
                      , b = await p(T)
                      , {maxPages: N} = t.options
                      , M = E ? pk : hk;
                    return {
                        pages: M(y.pages, b, N),
                        pageParams: M(y.pageParams, C, N)
                    }
                }
                ;
                if (i && s.length) {
                    const y = i === "backward"
                      , C = y ? Rk : Jp
                      , E = {
                        pages: s,
                        pageParams: o
                    }
                      , P = C(r, E);
                    a = await m(E, P, y)
                } else {
                    const y = e ?? s.length;
                    do {
                        const C = l === 0 ? o[0] ?? r.initialPageParam : Jp(r, a);
                        if (l > 0 && C == null)
                            break;
                        a = await m(a, C),
                        l++
                    } while (l < y)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, x;
                return (x = (g = t.options).persister) == null ? void 0 : x.call(g, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Jp(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function Rk(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var me, Vn, Fn, Ri, Ai, _n, Ni, Mi, Lg, Ak = (Lg = class {
    constructor(e={}) {
        J(this, me);
        J(this, Vn);
        J(this, Fn);
        J(this, Ri);
        J(this, Ai);
        J(this, _n);
        J(this, Ni);
        J(this, Mi);
        H(this, me, e.queryCache || new Pk),
        H(this, Vn, e.mutationCache || new kk),
        H(this, Fn, e.defaultOptions || {}),
        H(this, Ri, new Map),
        H(this, Ai, new Map),
        H(this, _n, 0)
    }
    mount() {
        To(this, _n)._++,
        R(this, _n) === 1 && (H(this, Ni, yx.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            R(this, me).onFocus())
        }
        )),
        H(this, Mi, Qa.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            R(this, me).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        To(this, _n)._--,
        R(this, _n) === 0 && ((e = R(this, Ni)) == null || e.call(this),
        H(this, Ni, void 0),
        (t = R(this, Mi)) == null || t.call(this),
        H(this, Mi, void 0))
    }
    isFetching(e) {
        return R(this, me).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return R(this, Vn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = R(this, me).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = R(this, me).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime($c(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return R(this, me).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , i = R(this, me).get(r.queryHash)
          , s = i == null ? void 0 : i.state.data
          , o = ak(t, s);
        if (o !== void 0)
            return R(this, me).build(this, r).setData(o, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return $e.batch( () => R(this, me).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = R(this, me).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = R(this, me);
        $e.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = R(this, me);
        return $e.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = $e.batch( () => R(this, me).findAll(e).map(i => i.cancel(n)));
        return Promise.all(r).then(Rt).catch(Rt)
    }
    invalidateQueries(e, t={}) {
        return $e.batch( () => (R(this, me).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = $e.batch( () => R(this, me).findAll(e).filter(i => !i.isDisabled() && !i.isStatic()).map(i => {
            let s = i.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(Rt)),
            i.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(Rt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = R(this, me).build(this, t);
        return n.isStaleByTime($c(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Rt).catch(Rt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Zp(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Rt).catch(Rt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Zp(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Qa.isOnline() ? R(this, Vn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return R(this, me)
    }
    getMutationCache() {
        return R(this, Vn)
    }
    getDefaultOptions() {
        return R(this, Fn)
    }
    setDefaultOptions(e) {
        H(this, Fn, e)
    }
    setQueryDefaults(e, t) {
        R(this, Ri).set(Xs(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...R(this, Ri).values()]
          , n = {};
        return t.forEach(r => {
            qs(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        R(this, Ai).set(Xs(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...R(this, Ai).values()]
          , n = {};
        return t.forEach(r => {
            qs(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...R(this, Fn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Rf(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Af && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...R(this, Fn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        R(this, me).clear(),
        R(this, Vn).clear()
    }
}
,
me = new WeakMap,
Vn = new WeakMap,
Fn = new WeakMap,
Ri = new WeakMap,
Ai = new WeakMap,
_n = new WeakMap,
Ni = new WeakMap,
Mi = new WeakMap,
Lg), Nk = w.createContext(void 0), Mk = ({client: e, children: t}) => (w.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
S.jsx(Nk.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Zs() {
    return Zs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Zs.apply(this, arguments)
}
var $n;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)($n || ($n = {}));
const em = "popstate";
function Dk(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let {pathname: s, search: o, hash: a} = r.location;
        return Wc("", {
            pathname: s,
            search: o,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : Ya(i)
    }
    return Lk(t, n, null, e)
}
function Se(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Cx(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function jk() {
    return Math.random().toString(36).substr(2, 8)
}
function tm(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Wc(e, t, n, r) {
    return n === void 0 && (n = null),
    Zs({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Yi(t) : t, {
        state: n,
        key: t && t.key || r || jk()
    })
}
function Ya(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Yi(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function Lk(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: s=!1} = r
      , o = i.history
      , a = $n.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    o.replaceState(Zs({}, o.state, {
        idx: u
    }), ""));
    function c() {
        return (o.state || {
            idx: null
        }).idx
    }
    function d() {
        a = $n.Pop;
        let x = c()
          , p = x == null ? null : x - u;
        u = x,
        l && l({
            action: a,
            location: g.location,
            delta: p
        })
    }
    function f(x, p) {
        a = $n.Push;
        let m = Wc(g.location, x, p);
        u = c() + 1;
        let y = tm(m, u)
          , C = g.createHref(m);
        try {
            o.pushState(y, "", C)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError")
                throw E;
            i.location.assign(C)
        }
        s && l && l({
            action: a,
            location: g.location,
            delta: 1
        })
    }
    function h(x, p) {
        a = $n.Replace;
        let m = Wc(g.location, x, p);
        u = c();
        let y = tm(m, u)
          , C = g.createHref(m);
        o.replaceState(y, "", C),
        s && l && l({
            action: a,
            location: g.location,
            delta: 0
        })
    }
    function v(x) {
        let p = i.location.origin !== "null" ? i.location.origin : i.location.href
          , m = typeof x == "string" ? x : Ya(x);
        return m = m.replace(/ $/, "%20"),
        Se(p, "No window.location.(origin|href) available to create URL for href: " + m),
        new URL(m,p)
    }
    let g = {
        get action() {
            return a
        },
        get location() {
            return e(i, o)
        },
        listen(x) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(em, d),
            l = x,
            () => {
                i.removeEventListener(em, d),
                l = null
            }
        },
        createHref(x) {
            return t(i, x)
        },
        createURL: v,
        encodeLocation(x) {
            let p = v(x);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: f,
        replace: h,
        go(x) {
            return o.go(x)
        }
    };
    return g
}
var nm;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(nm || (nm = {}));
function Ok(e, t, n) {
    return n === void 0 && (n = "/"),
    Ik(e, t, n, !1)
}
function Ik(e, t, n, r) {
    let i = typeof t == "string" ? Yi(t) : t
      , s = Nf(i.pathname || "/", n);
    if (s == null)
        return null;
    let o = Ex(e);
    Vk(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
        let u = Qk(s);
        a = Kk(o[l], u, r)
    }
    return a
}
function Ex(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (s, o, a) => {
        let l = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: o,
            route: s
        };
        l.relativePath.startsWith("/") && (Se(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = Zn([r, l.relativePath])
          , c = n.concat(l);
        s.children && s.children.length > 0 && (Se(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Ex(s.children, t, c, u)),
        !(s.path == null && !s.index) && t.push({
            path: u,
            score: Wk(u, s.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (s, o) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?")))
            i(s, o);
        else
            for (let l of Px(s.path))
                i(s, o, l)
    }
    ),
    t
}
function Px(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [s, ""] : [s];
    let o = Px(r.join("/"))
      , a = [];
    return a.push(...o.map(l => l === "" ? s : [s, l].join("/"))),
    i && a.push(...o),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function Vk(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : Hk(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Fk = /^:[\w-]+$/
  , _k = 3
  , zk = 2
  , Bk = 1
  , $k = 10
  , Uk = -2
  , rm = e => e === "*";
function Wk(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(rm) && (r += Uk),
    t && (r += zk),
    n.filter(i => !rm(i)).reduce( (i, s) => i + (Fk.test(s) ? _k : s === "" ? Bk : $k), r)
}
function Hk(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Kk(e, t, n) {
    let {routesMeta: r} = e
      , i = {}
      , s = "/"
      , o = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , c = s === "/" ? t : t.slice(s.length) || "/"
          , d = im({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , f = l.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = im({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !d)
            return null;
        Object.assign(i, d.params),
        o.push({
            params: i,
            pathname: Zn([s, d.pathname]),
            pathnameBase: Zk(Zn([s, d.pathnameBase])),
            route: f
        }),
        d.pathnameBase !== "/" && (s = Zn([s, d.pathnameBase]))
    }
    return o
}
function im(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Gk(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let s = i[0]
      , o = s.replace(/(.)\/+$/, "$1")
      , a = i.slice(1);
    return {
        params: r.reduce( (u, c, d) => {
            let {paramName: f, isOptional: h} = c;
            if (f === "*") {
                let g = a[d] || "";
                o = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const v = a[d];
            return h && !v ? u[f] = void 0 : u[f] = (v || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: s,
        pathnameBase: o,
        pattern: e
    }
}
function Gk(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Cx(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function Qk(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Cx(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Nf(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function Yk(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: i=""} = typeof e == "string" ? Yi(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Xk(n, t) : t,
        search: Jk(r),
        hash: eR(i)
    }
}
function Xk(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Su(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function qk(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Tx(e, t) {
    let n = qk(e);
    return t ? n.map( (r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function bx(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = Yi(e) : (i = Zs({}, e),
    Se(!i.pathname || !i.pathname.includes("?"), Su("?", "pathname", "search", i)),
    Se(!i.pathname || !i.pathname.includes("#"), Su("#", "pathname", "hash", i)),
    Se(!i.search || !i.search.includes("#"), Su("#", "search", "hash", i)));
    let s = e === "" || i.pathname === "", o = s ? "/" : i.pathname, a;
    if (o == null)
        a = n;
    else {
        let d = t.length - 1;
        if (!r && o.startsWith("..")) {
            let f = o.split("/");
            for (; f[0] === ".."; )
                f.shift(),
                d -= 1;
            i.pathname = f.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let l = Yk(i, a)
      , u = o && o !== "/" && o.endsWith("/")
      , c = (s || o === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"),
    l
}
const Zn = e => e.join("/").replace(/\/\/+/g, "/")
  , Zk = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Jk = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , eR = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function tR(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const kx = ["post", "put", "patch", "delete"];
new Set(kx);
const nR = ["get", ...kx];
new Set(nR);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Js() {
    return Js = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Js.apply(this, arguments)
}
const Mf = w.createContext(null)
  , rR = w.createContext(null)
  , $r = w.createContext(null)
  , Ml = w.createContext(null)
  , Ur = w.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Rx = w.createContext(null);
function iR(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    go() || Se(!1);
    let {basename: r, navigator: i} = w.useContext($r)
      , {hash: s, pathname: o, search: a} = Nx(e, {
        relative: n
    })
      , l = o;
    return r !== "/" && (l = o === "/" ? r : Zn([r, o])),
    i.createHref({
        pathname: l,
        search: a,
        hash: s
    })
}
function go() {
    return w.useContext(Ml) != null
}
function yo() {
    return go() || Se(!1),
    w.useContext(Ml).location
}
function Ax(e) {
    w.useContext($r).static || w.useLayoutEffect(e)
}
function sR() {
    let {isDataRoute: e} = w.useContext(Ur);
    return e ? vR() : oR()
}
function oR() {
    go() || Se(!1);
    let e = w.useContext(Mf)
      , {basename: t, future: n, navigator: r} = w.useContext($r)
      , {matches: i} = w.useContext(Ur)
      , {pathname: s} = yo()
      , o = JSON.stringify(Tx(i, n.v7_relativeSplatPath))
      , a = w.useRef(!1);
    return Ax( () => {
        a.current = !0
    }
    ),
    w.useCallback(function(u, c) {
        if (c === void 0 && (c = {}),
        !a.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let d = bx(u, JSON.parse(o), s, c.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Zn([t, d.pathname])),
        (c.replace ? r.replace : r.push)(d, c.state, c)
    }, [t, r, o, s, e])
}
function Nx(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = w.useContext($r)
      , {matches: i} = w.useContext(Ur)
      , {pathname: s} = yo()
      , o = JSON.stringify(Tx(i, r.v7_relativeSplatPath));
    return w.useMemo( () => bx(e, JSON.parse(o), s, n === "path"), [e, o, s, n])
}
function aR(e, t) {
    return lR(e, t)
}
function lR(e, t, n, r) {
    go() || Se(!1);
    let {navigator: i} = w.useContext($r)
      , {matches: s} = w.useContext(Ur)
      , o = s[s.length - 1]
      , a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let u = yo(), c;
    if (t) {
        var d;
        let x = typeof t == "string" ? Yi(t) : t;
        l === "/" || (d = x.pathname) != null && d.startsWith(l) || Se(!1),
        c = x
    } else
        c = u;
    let f = c.pathname || "/"
      , h = f;
    if (l !== "/") {
        let x = l.replace(/^\//, "").split("/");
        h = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let v = Ok(e, {
        pathname: h
    })
      , g = hR(v && v.map(x => Object.assign({}, x, {
        params: Object.assign({}, a, x.params),
        pathname: Zn([l, i.encodeLocation ? i.encodeLocation(x.pathname).pathname : x.pathname]),
        pathnameBase: x.pathnameBase === "/" ? l : Zn([l, i.encodeLocation ? i.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
    })), s, n, r);
    return t && g ? w.createElement(Ml.Provider, {
        value: {
            location: Js({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: $n.Pop
        }
    }, g) : g
}
function uR() {
    let e = yR()
      , t = tR(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? w.createElement("pre", {
        style: i
    }, n) : null, null)
}
const cR = w.createElement(uR, null);
class dR extends w.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(Ur.Provider, {
            value: this.props.routeContext
        }, w.createElement(Rx.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function fR(e) {
    let {routeContext: t, match: n, children: r} = e
      , i = w.useContext(Mf);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Ur.Provider, {
        value: t
    }, r)
}
function hR(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let o = e
      , a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let c = o.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || Se(!1),
        o = o.slice(0, Math.min(o.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < o.length; c++) {
            let d = o[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
            d.route.id) {
                let {loaderData: f, errors: h} = n
                  , v = d.route.loader && f[d.route.id] === void 0 && (!h || h[d.route.id] === void 0);
                if (d.route.lazy || v) {
                    l = !0,
                    u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (c, d, f) => {
        let h, v = !1, g = null, x = null;
        n && (h = a && d.route.id ? a[d.route.id] : void 0,
        g = d.route.errorElement || cR,
        l && (u < 0 && f === 0 ? (v = !0,
        x = null) : u === f && (v = !0,
        x = d.route.hydrateFallbackElement || null)));
        let p = t.concat(o.slice(0, f + 1))
          , m = () => {
            let y;
            return h ? y = g : v ? y = x : d.route.Component ? y = w.createElement(d.route.Component, null) : d.route.element ? y = d.route.element : y = c,
            w.createElement(fR, {
                match: d,
                routeContext: {
                    outlet: c,
                    matches: p,
                    isDataRoute: n != null
                },
                children: y
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? w.createElement(dR, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: h,
            children: m(),
            routeContext: {
                outlet: null,
                matches: p,
                isDataRoute: !0
            }
        }) : m()
    }
    , null)
}
var Mx = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Mx || {})
  , Xa = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Xa || {});
function pR(e) {
    let t = w.useContext(Mf);
    return t || Se(!1),
    t
}
function mR(e) {
    let t = w.useContext(rR);
    return t || Se(!1),
    t
}
function gR(e) {
    let t = w.useContext(Ur);
    return t || Se(!1),
    t
}
function Dx(e) {
    let t = gR()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Se(!1),
    n.route.id
}
function yR() {
    var e;
    let t = w.useContext(Rx)
      , n = mR(Xa.UseRouteError)
      , r = Dx(Xa.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function vR() {
    let {router: e} = pR(Mx.UseNavigateStable)
      , t = Dx(Xa.UseNavigateStable)
      , n = w.useRef(!1);
    return Ax( () => {
        n.current = !0
    }
    ),
    w.useCallback(function(i, s) {
        s === void 0 && (s = {}),
        n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, Js({
            fromRouteId: t
        }, s)))
    }, [e, t])
}
function xR(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Hc(e) {
    Se(!1)
}
function wR(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=$n.Pop, navigator: s, static: o=!1, future: a} = e;
    go() && Se(!1);
    let l = t.replace(/^\/*/, "/")
      , u = w.useMemo( () => ({
        basename: l,
        navigator: s,
        static: o,
        future: Js({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, s, o]);
    typeof r == "string" && (r = Yi(r));
    let {pathname: c="/", search: d="", hash: f="", state: h=null, key: v="default"} = r
      , g = w.useMemo( () => {
        let x = Nf(c, l);
        return x == null ? null : {
            location: {
                pathname: x,
                search: d,
                hash: f,
                state: h,
                key: v
            },
            navigationType: i
        }
    }
    , [l, c, d, f, h, v, i]);
    return g == null ? null : w.createElement($r.Provider, {
        value: u
    }, w.createElement(Ml.Provider, {
        children: n,
        value: g
    }))
}
function SR(e) {
    let {children: t, location: n} = e;
    return aR(Kc(t), n)
}
new Promise( () => {}
);
function Kc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (r, i) => {
        if (!w.isValidElement(r))
            return;
        let s = [...t, i];
        if (r.type === w.Fragment) {
            n.push.apply(n, Kc(r.props.children, s));
            return
        }
        r.type !== Hc && Se(!1),
        !r.props.index || !r.props.children || Se(!1);
        let o = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = Kc(r.props.children, s)),
        n.push(o)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Gc() {
    return Gc = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Gc.apply(this, arguments)
}
function CR(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, s;
    for (s = 0; s < r.length; s++)
        i = r[s],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function ER(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function PR(e, t) {
    return e.button === 0 && (!t || t === "_self") && !ER(e)
}
const TR = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , bR = "6";
try {
    window.__reactRouterVersion = bR
} catch {}
const kR = "startTransition"
  , sm = Kg[kR];
function RR(e) {
    let {basename: t, children: n, future: r, window: i} = e
      , s = w.useRef();
    s.current == null && (s.current = Dk({
        window: i,
        v5Compat: !0
    }));
    let o = s.current
      , [a,l] = w.useState({
        action: o.action,
        location: o.location
    })
      , {v7_startTransition: u} = r || {}
      , c = w.useCallback(d => {
        u && sm ? sm( () => l(d)) : l(d)
    }
    , [l, u]);
    return w.useLayoutEffect( () => o.listen(c), [o, c]),
    w.useEffect( () => xR(r), [r]),
    w.createElement(wR, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: r
    })
}
const AR = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , NR = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , MR = w.forwardRef(function(t, n) {
    let {onClick: r, relative: i, reloadDocument: s, replace: o, state: a, target: l, to: u, preventScrollReset: c, viewTransition: d} = t, f = CR(t, TR), {basename: h} = w.useContext($r), v, g = !1;
    if (typeof u == "string" && NR.test(u) && (v = u,
    AR))
        try {
            let y = new URL(window.location.href)
              , C = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u)
              , E = Nf(C.pathname, h);
            C.origin === y.origin && E != null ? u = E + C.search + C.hash : g = !0
        } catch {}
    let x = iR(u, {
        relative: i
    })
      , p = DR(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        viewTransition: d
    });
    function m(y) {
        r && r(y),
        y.defaultPrevented || p(y)
    }
    return w.createElement("a", Gc({}, f, {
        href: v || x,
        onClick: g || s ? r : m,
        ref: n,
        target: l
    }))
});
var om;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(om || (om = {}));
var am;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(am || (am = {}));
function DR(e, t) {
    let {target: n, replace: r, state: i, preventScrollReset: s, relative: o, viewTransition: a} = t === void 0 ? {} : t
      , l = sR()
      , u = yo()
      , c = Nx(e, {
        relative: o
    });
    return w.useCallback(d => {
        if (PR(d, n)) {
            d.preventDefault();
            let f = r !== void 0 ? r : Ya(u) === Ya(c);
            l(e, {
                replace: f,
                state: i,
                preventScrollReset: s,
                relative: o,
                viewTransition: a
            })
        }
    }
    , [u, l, c, r, i, n, e, s, o, a])
}
const jR = T0("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            hero: "bg-primary text-primary-foreground hover:bg-amber-dark font-heading font-semibold tracking-wide uppercase shadow-amber-glow",
            heroOutline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-semibold tracking-wide uppercase",
            steel: "bg-secondary text-secondary-foreground hover:bg-steel-light font-heading font-medium tracking-wide"
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
})
  , _r = w.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...i}, s) => {
    const o = r ? oE : "button";
    return S.jsx(o, {
        className: cr(jR({
            variant: t,
            size: n,
            className: e
        })),
        ref: s,
        ...i
    })
}
);
_r.displayName = "Button";
const Df = w.createContext({});
function jf(e) {
    const t = w.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const jx = typeof window < "u"
  , Lx = jx ? w.useLayoutEffect : w.useEffect
  , Dl = w.createContext(null);
function Lf(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function qa(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const Jt = (e, t, n) => n > t ? t : n < e ? e : n;
let jl = () => {}
  , Bi = () => {}
;
const yn = {}
  , Ox = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Ix(e) {
    return typeof e == "object" && e !== null
}
const Vx = e => /^0[^.\s]+$/u.test(e);
function Of(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const gt = e => e
  , LR = (e, t) => n => t(e(n))
  , vo = (...e) => e.reduce(LR)
  , eo = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
;
class If {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Lf(this.subscriptions, t),
        () => qa(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const yt = e => e * 1e3
  , pt = e => e / 1e3;
function Fx(e, t) {
    return t ? e * (1e3 / t) : 0
}
const _x = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , OR = 1e-7
  , IR = 12;
function VR(e, t, n, r, i) {
    let s, o, a = 0;
    do
        o = t + (n - t) / 2,
        s = _x(o, r, i) - e,
        s > 0 ? n = o : t = o;
    while (Math.abs(s) > OR && ++a < IR);
    return o
}
function xo(e, t, n, r) {
    if (e === t && n === r)
        return gt;
    const i = s => VR(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : _x(i(s), t, r)
}
const zx = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Bx = e => t => 1 - e(1 - t)
  , $x = xo(.33, 1.53, .69, .99)
  , Vf = Bx($x)
  , Ux = zx(Vf)
  , Wx = e => (e *= 2) < 1 ? .5 * Vf(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Ff = e => 1 - Math.sin(Math.acos(e))
  , Hx = Bx(Ff)
  , Kx = zx(Ff)
  , FR = xo(.42, 0, 1, 1)
  , _R = xo(0, 0, .58, 1)
  , Gx = xo(.42, 0, .58, 1)
  , zR = e => Array.isArray(e) && typeof e[0] != "number"
  , Qx = e => Array.isArray(e) && typeof e[0] == "number"
  , lm = {
    linear: gt,
    easeIn: FR,
    easeInOut: Gx,
    easeOut: _R,
    circIn: Ff,
    circInOut: Kx,
    circOut: Hx,
    backIn: Vf,
    backInOut: Ux,
    backOut: $x,
    anticipate: Wx
}
  , BR = e => typeof e == "string"
  , um = e => {
    if (Qx(e)) {
        Bi(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
        const [t,n,r,i] = e;
        return xo(t, n, r, i)
    } else if (BR(e))
        return Bi(lm[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"),
        lm[e];
    return e
}
  , Qo = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , cm = {
    value: null,
    addProjectionMetrics: null
};
function $R(e, t) {
    let n = new Set
      , r = new Set
      , i = !1
      , s = !1;
    const o = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = 0;
    function u(d) {
        o.has(d) && (c.schedule(d),
        e()),
        l++,
        d(a)
    }
    const c = {
        schedule: (d, f=!1, h=!1) => {
            const g = h && i ? n : r;
            return f && o.add(d),
            g.has(d) || g.add(d),
            d
        }
        ,
        cancel: d => {
            r.delete(d),
            o.delete(d)
        }
        ,
        process: d => {
            if (a = d,
            i) {
                s = !0;
                return
            }
            i = !0,
            [n,r] = [r, n],
            n.forEach(u),
            t && cm.value && cm.value.frameloop[t].push(l),
            l = 0,
            n.clear(),
            i = !1,
            s && (s = !1,
            c.process(d))
        }
    };
    return c
}
const UR = 40;
function Yx(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = () => n = !0
      , o = Qo.reduce( (y, C) => (y[C] = $R(s, t ? C : void 0),
    y), {})
      , {setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: d, preRender: f, render: h, postRender: v} = o
      , g = () => {
        const y = yn.useManualTiming ? i.timestamp : performance.now();
        n = !1,
        yn.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, UR), 1)),
        i.timestamp = y,
        i.isProcessing = !0,
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        v.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(g))
    }
      , x = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(g)
    }
    ;
    return {
        schedule: Qo.reduce( (y, C) => {
            const E = o[C];
            return y[C] = (P, T=!1, b=!1) => (n || x(),
            E.schedule(P, T, b)),
            y
        }
        , {}),
        cancel: y => {
            for (let C = 0; C < Qo.length; C++)
                o[Qo[C]].cancel(y)
        }
        ,
        state: i,
        steps: o
    }
}
const {schedule: ie, cancel: sr, state: Ae, steps: Cu} = Yx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : gt, !0);
let ha;
function WR() {
    ha = void 0
}
const Ue = {
    now: () => (ha === void 0 && Ue.set(Ae.isProcessing || yn.useManualTiming ? Ae.timestamp : performance.now()),
    ha),
    set: e => {
        ha = e,
        queueMicrotask(WR)
    }
}
  , Xx = e => t => typeof t == "string" && t.startsWith(e)
  , qx = Xx("--")
  , HR = Xx("var(--")
  , _f = e => HR(e) ? KR.test(e.split("/*")[0].trim()) : !1
  , KR = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function dm(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const Xi = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , to = {
    ...Xi,
    transform: e => Jt(0, 1, e)
}
  , Yo = {
    ...Xi,
    default: 1
}
  , ks = e => Math.round(e * 1e5) / 1e5
  , zf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function GR(e) {
    return e == null
}
const QR = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Bf = (e, t) => n => !!(typeof n == "string" && QR.test(n) && n.startsWith(e) || t && !GR(n) && Object.prototype.hasOwnProperty.call(n, t))
  , Zx = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [i,s,o,a] = r.match(zf);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , YR = e => Jt(0, 255, e)
  , Eu = {
    ...Xi,
    transform: e => Math.round(YR(e))
}
  , Cr = {
    test: Bf("rgb", "red"),
    parse: Zx("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + Eu.transform(e) + ", " + Eu.transform(t) + ", " + Eu.transform(n) + ", " + ks(to.transform(r)) + ")"
};
function XR(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Qc = {
    test: Bf("#"),
    parse: XR,
    transform: Cr.transform
}
  , wo = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , An = wo("deg")
  , qt = wo("%")
  , F = wo("px")
  , qR = wo("vh")
  , ZR = wo("vw")
  , fm = {
    ...qt,
    parse: e => qt.parse(e) / 100,
    transform: e => qt.transform(e * 100)
}
  , ci = {
    test: Bf("hsl", "hue"),
    parse: Zx("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + qt.transform(ks(t)) + ", " + qt.transform(ks(n)) + ", " + ks(to.transform(r)) + ")"
}
  , xe = {
    test: e => Cr.test(e) || Qc.test(e) || ci.test(e),
    parse: e => Cr.test(e) ? Cr.parse(e) : ci.test(e) ? ci.parse(e) : Qc.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Cr.transform(e) : ci.transform(e),
    getAnimatableNone: e => {
        const t = xe.parse(e);
        return t.alpha = 0,
        xe.transform(t)
    }
}
  , JR = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function eA(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(zf)) == null ? void 0 : t.length) || 0) + (((n = e.match(JR)) == null ? void 0 : n.length) || 0) > 0
}
const Jx = "number"
  , ew = "color"
  , tA = "var"
  , nA = "var("
  , hm = "${}"
  , rA = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function no(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let s = 0;
    const a = t.replace(rA, l => (xe.test(l) ? (r.color.push(s),
    i.push(ew),
    n.push(xe.parse(l))) : l.startsWith(nA) ? (r.var.push(s),
    i.push(tA),
    n.push(l)) : (r.number.push(s),
    i.push(Jx),
    n.push(parseFloat(l))),
    ++s,
    hm)).split(hm);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}
function tw(e) {
    return no(e).values
}
function nw(e) {
    const {split: t, types: n} = no(e)
      , r = t.length;
    return i => {
        let s = "";
        for (let o = 0; o < r; o++)
            if (s += t[o],
            i[o] !== void 0) {
                const a = n[o];
                a === Jx ? s += ks(i[o]) : a === ew ? s += xe.transform(i[o]) : s += i[o]
            }
        return s
    }
}
const iA = e => typeof e == "number" ? 0 : xe.test(e) ? xe.getAnimatableNone(e) : e;
function sA(e) {
    const t = tw(e);
    return nw(e)(t.map(iA))
}
const or = {
    test: eA,
    parse: tw,
    createTransformer: nw,
    getAnimatableNone: sA
};
function Pu(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function oA({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , s = 0
      , o = 0;
    if (!t)
        i = s = o = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        i = Pu(l, a, e + 1 / 3),
        s = Pu(l, a, e),
        o = Pu(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
function Za(e, t) {
    return n => n > 0 ? t : e
}
const fe = (e, t, n) => e + (t - e) * n
  , Tu = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , aA = [Qc, Cr, ci]
  , lA = e => aA.find(t => t.test(e));
function pm(e) {
    const t = lA(e);
    if (jl(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"),
    !t)
        return !1;
    let n = t.parse(e);
    return t === ci && (n = oA(n)),
    n
}
const mm = (e, t) => {
    const n = pm(e)
      , r = pm(t);
    if (!n || !r)
        return Za(e, t);
    const i = {
        ...n
    };
    return s => (i.red = Tu(n.red, r.red, s),
    i.green = Tu(n.green, r.green, s),
    i.blue = Tu(n.blue, r.blue, s),
    i.alpha = fe(n.alpha, r.alpha, s),
    Cr.transform(i))
}
  , Yc = new Set(["none", "hidden"]);
function uA(e, t) {
    return Yc.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function cA(e, t) {
    return n => fe(e, t, n)
}
function $f(e) {
    return typeof e == "number" ? cA : typeof e == "string" ? _f(e) ? Za : xe.test(e) ? mm : hA : Array.isArray(e) ? rw : typeof e == "object" ? xe.test(e) ? mm : dA : Za
}
function rw(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map( (s, o) => $f(s)(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++)
            n[o] = i[o](s);
        return n
    }
}
function dA(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = $f(e[i])(e[i], t[i]));
    return i => {
        for (const s in r)
            n[s] = r[s](i);
        return n
    }
}
function fA(e, t) {
    const n = []
      , r = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let i = 0; i < t.values.length; i++) {
        const s = t.types[i]
          , o = e.indexes[s][r[s]]
          , a = e.values[o] ?? 0;
        n[i] = a,
        r[s]++
    }
    return n
}
const hA = (e, t) => {
    const n = or.createTransformer(t)
      , r = no(e)
      , i = no(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Yc.has(e) && !i.values.length || Yc.has(t) && !r.values.length ? uA(e, t) : vo(rw(fA(r, i), i.values), n) : (jl(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"),
    Za(e, t))
}
;
function iw(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? fe(e, t, n) : $f(e)(e, t)
}
const pA = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: (n=!0) => ie.update(t, n),
        stop: () => sr(t),
        now: () => Ae.isProcessing ? Ae.timestamp : Ue.now()
    }
}
  , sw = (e, t, n=10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
        r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
  , Ja = 2e4;
function Uf(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Ja; )
        t += n,
        r = e.next(t);
    return t >= Ja ? 1 / 0 : t
}
function mA(e, t=100, n) {
    const r = n({
        ...e,
        keyframes: [0, t]
    })
      , i = Math.min(Uf(r), Ja);
    return {
        type: "keyframes",
        ease: s => r.next(i * s).value / t,
        duration: pt(i)
    }
}
const gA = 5;
function ow(e, t, n) {
    const r = Math.max(t - gA, 0);
    return Fx(n - e(r), t - r)
}
const ce = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , bu = .001;
function yA({duration: e=ce.duration, bounce: t=ce.bounce, velocity: n=ce.velocity, mass: r=ce.mass}) {
    let i, s;
    jl(e <= yt(ce.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let o = 1 - t;
    o = Jt(ce.minDamping, ce.maxDamping, o),
    e = Jt(ce.minDuration, ce.maxDuration, pt(e)),
    o < 1 ? (i = u => {
        const c = u * o
          , d = c * e
          , f = c - n
          , h = Xc(u, o)
          , v = Math.exp(-d);
        return bu - f / h * v
    }
    ,
    s = u => {
        const d = u * o * e
          , f = d * n + n
          , h = Math.pow(o, 2) * Math.pow(u, 2) * e
          , v = Math.exp(-d)
          , g = Xc(Math.pow(u, 2), o);
        return (-i(u) + bu > 0 ? -1 : 1) * ((f - h) * v) / g
    }
    ) : (i = u => {
        const c = Math.exp(-u * e)
          , d = (u - n) * e + 1;
        return -bu + c * d
    }
    ,
    s = u => {
        const c = Math.exp(-u * e)
          , d = (n - u) * (e * e);
        return c * d
    }
    );
    const a = 5 / e
      , l = xA(i, s, a);
    if (e = yt(e),
    isNaN(l))
        return {
            stiffness: ce.stiffness,
            damping: ce.damping,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const vA = 12;
function xA(e, t, n) {
    let r = n;
    for (let i = 1; i < vA; i++)
        r = r - e(r) / t(r);
    return r
}
function Xc(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const wA = ["duration", "bounce"]
  , SA = ["stiffness", "damping", "mass"];
function gm(e, t) {
    return t.some(n => e[n] !== void 0)
}
function CA(e) {
    let t = {
        velocity: ce.velocity,
        stiffness: ce.stiffness,
        damping: ce.damping,
        mass: ce.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!gm(e, SA) && gm(e, wA))
        if (e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , i = r * r
              , s = 2 * Jt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: ce.mass,
                stiffness: i,
                damping: s
            }
        } else {
            const n = yA(e);
            t = {
                ...t,
                ...n,
                mass: ce.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function el(e=ce.visualDuration, t=ce.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: i} = n;
    const s = n.keyframes[0]
      , o = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: s
    }
      , {stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: h} = CA({
        ...n,
        velocity: -pt(n.velocity || 0)
    })
      , v = f || 0
      , g = u / (2 * Math.sqrt(l * c))
      , x = o - s
      , p = pt(Math.sqrt(l / c))
      , m = Math.abs(x) < 5;
    r || (r = m ? ce.restSpeed.granular : ce.restSpeed.default),
    i || (i = m ? ce.restDelta.granular : ce.restDelta.default);
    let y;
    if (g < 1) {
        const E = Xc(p, g);
        y = P => {
            const T = Math.exp(-g * p * P);
            return o - T * ((v + g * p * x) / E * Math.sin(E * P) + x * Math.cos(E * P))
        }
    } else if (g === 1)
        y = E => o - Math.exp(-p * E) * (x + (v + p * x) * E);
    else {
        const E = p * Math.sqrt(g * g - 1);
        y = P => {
            const T = Math.exp(-g * p * P)
              , b = Math.min(E * P, 300);
            return o - T * ((v + g * p * x) * Math.sinh(b) + E * x * Math.cosh(b)) / E
        }
    }
    const C = {
        calculatedDuration: h && d || null,
        next: E => {
            const P = y(E);
            if (h)
                a.done = E >= d;
            else {
                let T = E === 0 ? v : 0;
                g < 1 && (T = E === 0 ? yt(v) : ow(y, E, P));
                const b = Math.abs(T) <= r
                  , N = Math.abs(o - P) <= i;
                a.done = b && N
            }
            return a.value = a.done ? o : P,
            a
        }
        ,
        toString: () => {
            const E = Math.min(Uf(C), Ja)
              , P = sw(T => C.next(E * T).value, E, 30);
            return E + "ms " + P
        }
        ,
        toTransition: () => {}
    };
    return C
}
el.applyToOptions = e => {
    const t = mA(e, 100, el);
    return e.ease = t.ease,
    e.duration = yt(t.duration),
    e.type = "keyframes",
    e
}
;
function qc({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
    const d = e[0]
      , f = {
        done: !1,
        value: d
    }
      , h = b => a !== void 0 && b < a || l !== void 0 && b > l
      , v = b => a === void 0 ? l : l === void 0 || Math.abs(a - b) < Math.abs(l - b) ? a : l;
    let g = n * t;
    const x = d + g
      , p = o === void 0 ? x : o(x);
    p !== x && (g = p - d);
    const m = b => -g * Math.exp(-b / r)
      , y = b => p + m(b)
      , C = b => {
        const N = m(b)
          , M = y(b);
        f.done = Math.abs(N) <= u,
        f.value = f.done ? p : M
    }
    ;
    let E, P;
    const T = b => {
        h(f.value) && (E = b,
        P = el({
            keyframes: [f.value, v(f.value)],
            velocity: ow(y, b, f.value),
            damping: i,
            stiffness: s,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return T(0),
    {
        calculatedDuration: null,
        next: b => {
            let N = !1;
            return !P && E === void 0 && (N = !0,
            C(b),
            T(b)),
            E !== void 0 && b >= E ? P.next(b - E) : (!N && C(b),
            f)
        }
    }
}
function EA(e, t, n) {
    const r = []
      , i = n || yn.mix || iw
      , s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let a = i(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || gt : t;
            a = vo(l, a)
        }
        r.push(a)
    }
    return r
}
function PA(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const s = e.length;
    if (Bi(s === t.length, "Both input and output ranges must be the same length", "range-length"),
    s === 1)
        return () => t[0];
    if (s === 2 && t[0] === t[1])
        return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const a = EA(t, r, i)
      , l = a.length
      , u = c => {
        if (o && c < e[0])
            return t[0];
        let d = 0;
        if (l > 1)
            for (; d < e.length - 2 && !(c < e[d + 1]); d++)
                ;
        const f = eo(e[d], e[d + 1], c);
        return a[d](f)
    }
    ;
    return n ? c => u(Jt(e[0], e[s - 1], c)) : u
}
function TA(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = eo(0, t, r);
        e.push(fe(n, 1, i))
    }
}
function bA(e) {
    const t = [0];
    return TA(t, e.length - 1),
    t
}
function kA(e, t) {
    return e.map(n => n * t)
}
function RA(e, t) {
    return e.map( () => t || Gx).splice(0, e.length - 1)
}
function Rs({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = zR(r) ? r.map(um) : um(r)
      , s = {
        done: !1,
        value: t[0]
    }
      , o = kA(n && n.length === t.length ? n : bA(t), e)
      , a = PA(o, t, {
        ease: Array.isArray(i) ? i : RA(t, i)
    });
    return {
        calculatedDuration: e,
        next: l => (s.value = a(l),
        s.done = l >= e,
        s)
    }
}
const AA = e => e !== null;
function Wf(e, {repeat: t, repeatType: n="loop"}, r, i=1) {
    const s = e.filter(AA)
      , a = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !a || r === void 0 ? s[a] : r
}
const NA = {
    decay: qc,
    inertia: qc,
    tween: Rs,
    keyframes: Rs,
    spring: el
};
function aw(e) {
    typeof e.type == "string" && (e.type = NA[e.type])
}
class Hf {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const MA = e => e / 100;
class Kf extends Hf {
    constructor(t) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var r, i;
            const {motionValue: n} = this.options;
            n && n.updatedAt !== Ue.now() && this.tick(Ue.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r))
        }
        ,
        this.options = t,
        this.initAnimation(),
        this.play(),
        t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: t} = this;
        aw(t);
        const {type: n=Rs, repeat: r=0, repeatDelay: i=0, repeatType: s, velocity: o=0} = t;
        let {keyframes: a} = t;
        const l = n || Rs;
        l !== Rs && typeof a[0] != "number" && (this.mixKeyframes = vo(MA, iw(a[0], a[1])),
        a = [0, 100]);
        const u = l({
            ...t,
            keyframes: a
        });
        s === "mirror" && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...a].reverse(),
            velocity: -o
        })),
        u.calculatedDuration === null && (u.calculatedDuration = Uf(u));
        const {calculatedDuration: c} = u;
        this.calculatedDuration = c,
        this.resolvedDuration = c + i,
        this.totalDuration = this.resolvedDuration * (r + 1) - i,
        this.generator = u
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n=!1) {
        const {generator: r, totalDuration: i, mixKeyframes: s, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: l} = this;
        if (this.startTime === null)
            return r.next(0);
        const {delay: u=0, keyframes: c, repeat: d, repeatType: f, repeatDelay: h, type: v, onUpdate: g, finalKeyframe: x} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)),
        n ? this.currentTime = t : this.updateTime(t);
        const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1)
          , m = this.playbackSpeed >= 0 ? p < 0 : p > i;
        this.currentTime = Math.max(p, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = i);
        let y = this.currentTime
          , C = r;
        if (d) {
            const b = Math.min(this.currentTime, i) / a;
            let N = Math.floor(b)
              , M = b % 1;
            !M && b >= 1 && (M = 1),
            M === 1 && N--,
            N = Math.min(N, d + 1),
            !!(N % 2) && (f === "reverse" ? (M = 1 - M,
            h && (M -= h / a)) : f === "mirror" && (C = o)),
            y = Jt(0, 1, M) * a
        }
        const E = m ? {
            done: !1,
            value: c[0]
        } : C.next(y);
        s && (E.value = s(E.value));
        let {done: P} = E;
        !m && l !== null && (P = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
        const T = this.holdTime === null && (this.state === "finished" || this.state === "running" && P);
        return T && v !== qc && (E.value = Wf(c, this.options, x, this.speed)),
        g && g(E.value),
        T && this.finish(),
        E
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return pt(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + pt(t)
    }
    get time() {
        return pt(this.currentTime)
    }
    set time(t) {
        var n;
        t = yt(t),
        this.currentTime = t,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
        (n = this.driver) == null || n.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        this.updateTime(Ue.now());
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = pt(this.currentTime))
    }
    play() {
        var i, s;
        if (this.isStopped)
            return;
        const {driver: t=pA, startTime: n} = this.options;
        this.driver || (this.driver = t(o => this.tick(o))),
        (s = (i = this.options).onPlay) == null || s.call(i);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(Ue.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (n = this.driver) == null || n.stop(),
        t.observe(this)
    }
}
function DA(e) {
    for (let t = 1; t < e.length; t++)
        e[t] ?? (e[t] = e[t - 1])
}
const Er = e => e * 180 / Math.PI
  , Zc = e => {
    const t = Er(Math.atan2(e[1], e[0]));
    return Jc(t)
}
  , jA = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Zc,
    rotateZ: Zc,
    skewX: e => Er(Math.atan(e[1])),
    skewY: e => Er(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}
  , Jc = e => (e = e % 360,
e < 0 && (e += 360),
e)
  , ym = Zc
  , vm = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
  , xm = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
  , LA = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: vm,
    scaleY: xm,
    scale: e => (vm(e) + xm(e)) / 2,
    rotateX: e => Jc(Er(Math.atan2(e[6], e[5]))),
    rotateY: e => Jc(Er(Math.atan2(-e[2], e[0]))),
    rotateZ: ym,
    rotate: ym,
    skewX: e => Er(Math.atan(e[4])),
    skewY: e => Er(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function ed(e) {
    return e.includes("scale") ? 1 : 0
}
function td(e, t) {
    if (!e || e === "none")
        return ed(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, i;
    if (n)
        r = LA,
        i = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = jA,
        i = a
    }
    if (!i)
        return ed(t);
    const s = r[t]
      , o = i[1].split(",").map(IA);
    return typeof s == "function" ? s(o) : o[s]
}
const OA = (e, t) => {
    const {transform: n="none"} = getComputedStyle(e);
    return td(n, t)
}
;
function IA(e) {
    return parseFloat(e.trim())
}
const qi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Zi = new Set(qi)
  , wm = e => e === Xi || e === F
  , VA = new Set(["x", "y", "z"])
  , FA = qi.filter(e => !VA.has(e));
function _A(e) {
    const t = [];
    return FA.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const Un = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: (e, {transform: t}) => td(t, "x"),
    y: (e, {transform: t}) => td(t, "y")
};
Un.translateX = Un.x;
Un.translateY = Un.y;
const Dr = new Set;
let nd = !1
  , rd = !1
  , id = !1;
function lw() {
    if (rd) {
        const e = Array.from(Dr).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const i = _A(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach( ([s,o]) => {
                var a;
                (a = r.getValue(s)) == null || a.set(o)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    rd = !1,
    nd = !1,
    Dr.forEach(e => e.complete(id)),
    Dr.clear()
}
function uw() {
    Dr.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (rd = !0)
    }
    )
}
function zA() {
    id = !0,
    uw(),
    lw(),
    id = !1
}
class Gf {
    constructor(t, n, r, i, s, o=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = s,
        this.isAsync = o
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (Dr.add(this),
        nd || (nd = !0,
        ie.read(uw),
        ie.resolveKeyframes(lw))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        if (t[0] === null) {
            const s = i == null ? void 0 : i.get()
              , o = t[t.length - 1];
            if (s !== void 0)
                t[0] = s;
            else if (r && n) {
                const a = r.readValue(n, o);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = o),
            i && s === void 0 && i.set(t[0])
        }
        DA(t)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
        Dr.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Dr.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const BA = e => e.startsWith("--");
function $A(e, t, n) {
    BA(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const UA = Of( () => window.ScrollTimeline !== void 0)
  , WA = {};
function HA(e, t) {
    const n = Of(e);
    return () => WA[t] ?? n()
}
const cw = HA( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , gs = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Sm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: gs([0, .65, .55, 1]),
    circOut: gs([.55, 0, 1, .45]),
    backIn: gs([.31, .01, .66, -.59]),
    backOut: gs([.33, 1.53, .69, .99])
};
function dw(e, t) {
    if (e)
        return typeof e == "function" ? cw() ? sw(e, t) : "ease-out" : Qx(e) ? gs(e) : Array.isArray(e) ? e.map(n => dw(n, t) || Sm.easeOut) : Sm[e]
}
function KA(e, t, n, {delay: r=0, duration: i=300, repeat: s=0, repeatType: o="loop", ease: a="easeOut", times: l}={}, u=void 0) {
    const c = {
        [t]: n
    };
    l && (c.offset = l);
    const d = dw(a, i);
    Array.isArray(d) && (c.easing = d);
    const f = {
        delay: r,
        duration: i,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    };
    return u && (f.pseudoElement = u),
    e.animate(c, f)
}
function fw(e) {
    return typeof e == "function" && "applyToOptions"in e
}
function GA({type: e, ...t}) {
    return fw(e) && cw() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300),
    t.ease ?? (t.ease = "easeOut"),
    t)
}
class hw extends Hf {
    constructor(t) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        this.manualStartTime = null,
        !t)
            return;
        const {element: n, name: r, keyframes: i, pseudoElement: s, allowFlatten: o=!1, finalKeyframe: a, onComplete: l} = t;
        this.isPseudoElement = !!s,
        this.allowFlatten = o,
        this.options = t,
        Bi(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
        const u = GA(t);
        this.animation = KA(n, r, i, u, s),
        u.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !s) {
                const c = Wf(i, this.options, a, this.speed);
                this.updateMotionValue ? this.updateMotionValue(c) : $A(n, r, c),
                this.animation.cancel()
            }
            l == null || l(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
        this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: t} = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var n, r, i;
        const t = (n = this.options) == null ? void 0 : n.element;
        !this.isPseudoElement && (t != null && t.isConnected) && ((i = (r = this.animation).commitStyles) == null || i.call(r))
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return pt(Number(t))
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + pt(t)
    }
    get time() {
        return pt(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        this.manualStartTime = null,
        this.finishedTime = null,
        this.animation.currentTime = yt(t)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null),
        this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(t) {
        this.manualStartTime = this.animation.startTime = t
    }
    attachTimeline({timeline: t, observe: n}) {
        var r;
        return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        t && UA() ? (this.animation.timeline = t,
        gt) : n(this)
    }
}
const pw = {
    anticipate: Wx,
    backInOut: Ux,
    circInOut: Kx
};
function QA(e) {
    return e in pw
}
function YA(e) {
    typeof e.ease == "string" && QA(e.ease) && (e.ease = pw[e.ease])
}
const ku = 10;
class XA extends hw {
    constructor(t) {
        YA(t),
        aw(t),
        super(t),
        t.startTime !== void 0 && (this.startTime = t.startTime),
        this.options = t
    }
    updateMotionValue(t) {
        const {motionValue: n, onUpdate: r, onComplete: i, element: s, ...o} = this.options;
        if (!n)
            return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new Kf({
            ...o,
            autoplay: !1
        })
          , l = Math.max(ku, Ue.now() - this.startTime)
          , u = Jt(0, ku, l - ku);
        n.setWithVelocity(a.sample(Math.max(0, l - u)).value, a.sample(l).value, u),
        a.stop()
    }
}
const Cm = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (or.test(e) || e === "0") && !e.startsWith("url("));
function qA(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function ZA(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const s = e[e.length - 1]
      , o = Cm(i, t)
      , a = Cm(s, t);
    return jl(o === a, `You are trying to animate ${t} from "${i}" to "${s}". "${o ? s : i}" is not an animatable value.`, "value-not-animatable"),
    !o || !a ? !1 : qA(e) || (n === "spring" || fw(n)) && r
}
function sd(e) {
    e.duration = 0,
    e.type = "keyframes"
}
const JA = new Set(["opacity", "clipPath", "filter", "transform"])
  , e2 = Of( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function t2(e) {
    var c;
    const {motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: s, type: o} = e;
    if (!(((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: l, transformTemplate: u} = t.owner.getProps();
    return e2() && n && JA.has(n) && (n !== "transform" || !u) && !l && !r && i !== "mirror" && s !== 0 && o !== "inertia"
}
const n2 = 40;
class r2 extends Hf {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: o="loop", keyframes: a, name: l, motionValue: u, element: c, ...d}) {
        var v;
        super(),
        this.stop = () => {
            var g, x;
            this._animation && (this._animation.stop(),
            (g = this.stopTimeline) == null || g.call(this)),
            (x = this.keyframeResolver) == null || x.cancel()
        }
        ,
        this.createdAt = Ue.now();
        const f = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: s,
            repeatType: o,
            name: l,
            motionValue: u,
            element: c,
            ...d
        }
          , h = (c == null ? void 0 : c.KeyframeResolver) || Gf;
        this.keyframeResolver = new h(a, (g, x, p) => this.onKeyframesResolved(g, x, f, !p),l,u,c),
        (v = this.keyframeResolver) == null || v.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, i) {
        var x, p;
        this.keyframeResolver = void 0;
        const {name: s, type: o, velocity: a, delay: l, isHandoff: u, onUpdate: c} = r;
        this.resolvedAt = Ue.now(),
        ZA(t, s, o, a) || ((yn.instantAnimations || !l) && (c == null || c(Wf(t, r, n))),
        t[0] = t[t.length - 1],
        sd(r),
        r.repeat = 0);
        const f = {
            startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > n2 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: n,
            ...r,
            keyframes: t
        }
          , h = !u && t2(f)
          , v = (p = (x = f.motionValue) == null ? void 0 : x.owner) == null ? void 0 : p.current
          , g = h ? new XA({
            ...f,
            element: v
        }) : new Kf(f);
        g.finished.then( () => {
            this.notifyFinished()
        }
        ).catch(gt),
        this.pendingTimeline && (this.stopTimeline = g.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = g
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then( () => {}
        )
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(),
        zA()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(),
        (t = this.keyframeResolver) == null || t.cancel()
    }
}
function mw(e, t, n, r=0, i=1) {
    const s = Array.from(e).sort( (u, c) => u.sortNodePosition(c)).indexOf(t)
      , o = e.size
      , a = (o - 1) * r;
    return typeof n == "function" ? n(s, o) : i === 1 ? s * r : a - s * r
}
const i2 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function s2(e) {
    const t = i2.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
const o2 = 4;
function gw(e, t, n=1) {
    Bi(n <= o2, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [r,i] = s2(e);
    if (!r)
        return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return Ox(o) ? parseFloat(o) : o
    }
    return _f(i) ? gw(i, t, n + 1) : i
}
const a2 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , l2 = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , u2 = {
    type: "keyframes",
    duration: .8
}
  , c2 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , d2 = (e, {keyframes: t}) => t.length > 2 ? u2 : Zi.has(e) ? e.startsWith("scale") ? l2(t[1]) : a2 : c2
  , f2 = e => e !== null;
function h2(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(f2)
      , s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !s || r === void 0 ? i[s] : r
}
function yw(e, t) {
    if (e != null && e.inherit && t) {
        const {inherit: n, ...r} = e;
        return {
            ...t,
            ...r
        }
    }
    return e
}
function Qf(e, t) {
    const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
    return n !== e ? yw(n, e) : n
}
function p2({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
const Yf = (e, t, n, r={}, i, s) => o => {
    const a = Qf(r, e) || {}
      , l = a.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - yt(l);
    const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: f => {
            t.set(f),
            a.onUpdate && a.onUpdate(f)
        }
        ,
        onComplete: () => {
            o(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: s ? void 0 : i
    };
    p2(a) || Object.assign(c, d2(e, c)),
    c.duration && (c.duration = yt(c.duration)),
    c.repeatDelay && (c.repeatDelay = yt(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (sd(c),
    c.delay === 0 && (d = !0)),
    (yn.instantAnimations || yn.skipAnimations || i != null && i.shouldSkipAnimations) && (d = !0,
    sd(c),
    c.delay = 0),
    c.allowFlatten = !a.type && !a.ease,
    d && !s && t.get() !== void 0) {
        const f = h2(c.keyframes, a);
        if (f !== void 0) {
            ie.update( () => {
                c.onUpdate(f),
                c.onComplete()
            }
            );
            return
        }
    }
    return a.isSync ? new Kf(c) : new r2(c)
}
;
function Em(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function Xf(e, t, n, r) {
    if (typeof t == "function") {
        const [i,s] = Em(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,s] = Em(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    return t
}
function Ei(e, t, n) {
    const r = e.getProps();
    return Xf(r, t, n !== void 0 ? n : r.custom, e)
}
const vw = new Set(["width", "height", "top", "left", "right", "bottom", ...qi])
  , Pm = 30
  , m2 = e => !isNaN(parseFloat(e));
class g2 {
    constructor(t, n={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = r => {
            var s;
            const i = Ue.now();
            if (this.updatedAt !== i && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
                for (const o of this.dependents)
                    o.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = Ue.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = m2(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new If);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            ie.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = Ue.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Pm)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Pm);
        return Fx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(),
        (n = this.events.destroy) == null || n.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function $i(e, t) {
    return new g2(e,t)
}
const od = e => Array.isArray(e);
function y2(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, $i(n))
}
function v2(e) {
    return od(e) ? e[e.length - 1] || 0 : e
}
function x2(e, t) {
    const n = Ei(e, t);
    let {transitionEnd: r={}, transition: i={}, ...s} = n || {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const a = v2(s[o]);
        y2(e, o, a)
    }
}
const Fe = e => !!(e && e.getVelocity);
function w2(e) {
    return !!(Fe(e) && e.add)
}
function ad(e, t) {
    const n = e.getValue("willChange");
    if (w2(n))
        return n.add(t);
    if (!n && yn.WillChange) {
        const r = new yn.WillChange("auto");
        e.addValue("willChange", r),
        r.add(t)
    }
}
function qf(e) {
    return e.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
}
const S2 = "framerAppearId"
  , xw = "data-" + qf(S2);
function ww(e) {
    return e.props[xw]
}
function C2({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function Sw(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    let {transition: s, transitionEnd: o, ...a} = t;
    const l = e.getDefaultTransition();
    s = s ? yw(s, l) : l;
    const u = s == null ? void 0 : s.reduceMotion;
    r && (s = r);
    const c = []
      , d = i && e.animationState && e.animationState.getState()[i];
    for (const f in a) {
        const h = e.getValue(f, e.latestValues[f] ?? null)
          , v = a[f];
        if (v === void 0 || d && C2(d, f))
            continue;
        const g = {
            delay: n,
            ...Qf(s || {}, f)
        }
          , x = h.get();
        if (x !== void 0 && !h.isAnimating && !Array.isArray(v) && v === x && !g.velocity)
            continue;
        let p = !1;
        if (window.MotionHandoffAnimation) {
            const C = ww(e);
            if (C) {
                const E = window.MotionHandoffAnimation(C, f, ie);
                E !== null && (g.startTime = E,
                p = !0)
            }
        }
        ad(e, f);
        const m = u ?? e.shouldReduceMotion;
        h.start(Yf(f, h, v, m && vw.has(f) ? {
            type: !1
        } : g, e, p));
        const y = h.animation;
        y && c.push(y)
    }
    if (o) {
        const f = () => ie.update( () => {
            o && x2(e, o)
        }
        );
        c.length ? Promise.all(c).then(f) : f()
    }
    return c
}
function ld(e, t, n={}) {
    var l;
    const r = Ei(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let {transition: i=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? () => Promise.all(Sw(e, r, n)) : () => Promise.resolve()
      , o = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: c=0, staggerChildren: d, staggerDirection: f} = i;
        return E2(e, t, u, c, d, f, n)
    }
    : () => Promise.resolve()
      , {when: a} = i;
    if (a) {
        const [u,c] = a === "beforeChildren" ? [s, o] : [o, s];
        return u().then( () => c())
    } else
        return Promise.all([s(), o(n.delay)])
}
function E2(e, t, n=0, r=0, i=0, s=1, o) {
    const a = [];
    for (const l of e.variantChildren)
        l.notify("AnimationStart", t),
        a.push(ld(l, t, {
            ...o,
            delay: n + (typeof r == "function" ? 0 : r) + mw(e.variantChildren, l, r, i, s)
        }).then( () => l.notify("AnimationComplete", t)));
    return Promise.all(a)
}
function P2(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => ld(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = ld(e, t, n);
    else {
        const i = typeof t == "function" ? Ei(e, t, n.custom) : t;
        r = Promise.all(Sw(e, i, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const T2 = {
    test: e => e === "auto",
    parse: e => e
}
  , Cw = e => t => t.test(e)
  , Ew = [Xi, F, qt, An, ZR, qR, T2]
  , Tm = e => Ew.find(Cw(e));
function b2(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Vx(e) : !0
}
const k2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function R2(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(zf) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let s = k2.has(t) ? 1 : 0;
    return r !== n && (s *= 100),
    t + "(" + s + i + ")"
}
const A2 = /\b([a-z-]*)\(.*?\)/gu
  , ud = {
    ...or,
    getAnimatableNone: e => {
        const t = e.match(A2);
        return t ? t.map(R2).join(" ") : e
    }
}
  , bm = {
    ...Xi,
    transform: Math.round
}
  , N2 = {
    rotate: An,
    rotateX: An,
    rotateY: An,
    rotateZ: An,
    scale: Yo,
    scaleX: Yo,
    scaleY: Yo,
    scaleZ: Yo,
    skew: An,
    skewX: An,
    skewY: An,
    distance: F,
    translateX: F,
    translateY: F,
    translateZ: F,
    x: F,
    y: F,
    z: F,
    perspective: F,
    transformPerspective: F,
    opacity: to,
    originX: fm,
    originY: fm,
    originZ: F
}
  , Zf = {
    borderWidth: F,
    borderTopWidth: F,
    borderRightWidth: F,
    borderBottomWidth: F,
    borderLeftWidth: F,
    borderRadius: F,
    borderTopLeftRadius: F,
    borderTopRightRadius: F,
    borderBottomRightRadius: F,
    borderBottomLeftRadius: F,
    width: F,
    maxWidth: F,
    height: F,
    maxHeight: F,
    top: F,
    right: F,
    bottom: F,
    left: F,
    inset: F,
    insetBlock: F,
    insetBlockStart: F,
    insetBlockEnd: F,
    insetInline: F,
    insetInlineStart: F,
    insetInlineEnd: F,
    padding: F,
    paddingTop: F,
    paddingRight: F,
    paddingBottom: F,
    paddingLeft: F,
    paddingBlock: F,
    paddingBlockStart: F,
    paddingBlockEnd: F,
    paddingInline: F,
    paddingInlineStart: F,
    paddingInlineEnd: F,
    margin: F,
    marginTop: F,
    marginRight: F,
    marginBottom: F,
    marginLeft: F,
    marginBlock: F,
    marginBlockStart: F,
    marginBlockEnd: F,
    marginInline: F,
    marginInlineStart: F,
    marginInlineEnd: F,
    fontSize: F,
    backgroundPositionX: F,
    backgroundPositionY: F,
    ...N2,
    zIndex: bm,
    fillOpacity: to,
    strokeOpacity: to,
    numOctaves: bm
}
  , M2 = {
    ...Zf,
    color: xe,
    backgroundColor: xe,
    outlineColor: xe,
    fill: xe,
    stroke: xe,
    borderColor: xe,
    borderTopColor: xe,
    borderRightColor: xe,
    borderBottomColor: xe,
    borderLeftColor: xe,
    filter: ud,
    WebkitFilter: ud
}
  , Pw = e => M2[e];
function Tw(e, t) {
    let n = Pw(e);
    return n !== ud && (n = or),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const D2 = new Set(["auto", "none", "0"]);
function j2(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const s = e[r];
        typeof s == "string" && !D2.has(s) && no(s).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const s of t)
            e[s] = Tw(n, i)
}
class L2 extends Gf {
    constructor(t, n, r, i, s) {
        super(t, n, r, i, s, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let c = 0; c < t.length; c++) {
            let d = t[c];
            if (typeof d == "string" && (d = d.trim(),
            _f(d))) {
                const f = gw(d, n.current);
                f !== void 0 && (t[c] = f),
                c === t.length - 1 && (this.finalKeyframe = d)
            }
        }
        if (this.resolveNoneKeyframes(),
        !vw.has(r) || t.length !== 2)
            return;
        const [i,s] = t
          , o = Tm(i)
          , a = Tm(s)
          , l = dm(i)
          , u = dm(s);
        if (l !== u && Un[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (o !== a)
            if (wm(o) && wm(a))
                for (let c = 0; c < t.length; c++) {
                    const d = t[c];
                    typeof d == "string" && (t[c] = parseFloat(d))
                }
            else
                Un[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            (t[i] === null || b2(t[i])) && r.push(i);
        r.length && j2(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Un[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var a;
        const {element: t, name: n, unresolvedKeyframes: r} = this;
        if (!t || !t.current)
            return;
        const i = t.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        const s = r.length - 1
          , o = r[s];
        r[s] = Un[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
        o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
        (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach( ([l,u]) => {
            t.getValue(l).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const O2 = new Set(["opacity", "clipPath", "filter", "transform"]);
function bw(e, t, n) {
    if (e == null)
        return [];
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        const i = document.querySelectorAll(e);
        return i ? Array.from(i) : []
    }
    return Array.from(e).filter(r => r != null)
}
const kw = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function cd(e) {
    return Ix(e) && "offsetHeight"in e
}
const {schedule: Jf, cancel: nj} = Yx(queueMicrotask, !1)
  , bt = {
    x: !1,
    y: !1
};
function Rw() {
    return bt.x || bt.y
}
function I2(e) {
    return e === "x" || e === "y" ? bt[e] ? null : (bt[e] = !0,
    () => {
        bt[e] = !1
    }
    ) : bt.x || bt.y ? null : (bt.x = bt.y = !0,
    () => {
        bt.x = bt.y = !1
    }
    )
}
function Aw(e, t) {
    const n = bw(e)
      , r = new AbortController
      , i = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, i, () => r.abort()]
}
function V2(e) {
    return !(e.pointerType === "touch" || Rw())
}
function F2(e, t, n={}) {
    const [r,i,s] = Aw(e, n);
    return r.forEach(o => {
        let a = !1, l = !1, u;
        const c = () => {
            o.removeEventListener("pointerleave", v)
        }
          , d = x => {
            u && (u(x),
            u = void 0),
            c()
        }
          , f = x => {
            a = !1,
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            l && (l = !1,
            d(x))
        }
          , h = () => {
            a = !0,
            window.addEventListener("pointerup", f, i),
            window.addEventListener("pointercancel", f, i)
        }
          , v = x => {
            if (x.pointerType !== "touch") {
                if (a) {
                    l = !0;
                    return
                }
                d(x)
            }
        }
          , g = x => {
            if (!V2(x))
                return;
            l = !1;
            const p = t(o, x);
            typeof p == "function" && (u = p,
            o.addEventListener("pointerleave", v, i))
        }
        ;
        o.addEventListener("pointerenter", g, i),
        o.addEventListener("pointerdown", h, i)
    }
    ),
    s
}
const Nw = (e, t) => t ? e === t ? !0 : Nw(e, t.parentElement) : !1
  , eh = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , _2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function z2(e) {
    return _2.has(e.tagName) || e.isContentEditable === !0
}
const B2 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function $2(e) {
    return B2.has(e.tagName) || e.isContentEditable === !0
}
const pa = new WeakSet;
function km(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Ru(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const U2 = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = km( () => {
        if (pa.has(n))
            return;
        Ru(n, "down");
        const i = km( () => {
            Ru(n, "up")
        }
        )
          , s = () => Ru(n, "cancel");
        n.addEventListener("keyup", i, t),
        n.addEventListener("blur", s, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function Rm(e) {
    return eh(e) && !Rw()
}
const Am = new WeakSet;
function W2(e, t, n={}) {
    const [r,i,s] = Aw(e, n)
      , o = a => {
        const l = a.currentTarget;
        if (!Rm(a) || Am.has(a))
            return;
        pa.add(l),
        n.stopPropagation && Am.add(a);
        const u = t(l, a)
          , c = (h, v) => {
            window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            pa.has(l) && pa.delete(l),
            Rm(h) && typeof u == "function" && u(h, {
                success: v
            })
        }
          , d = h => {
            c(h, l === window || l === document || n.useGlobalTarget || Nw(l, h.target))
        }
          , f = h => {
            c(h, !1)
        }
        ;
        window.addEventListener("pointerup", d, i),
        window.addEventListener("pointercancel", f, i)
    }
    ;
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        cd(a) && (a.addEventListener("focus", u => U2(u, i)),
        !z2(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }
    ),
    s
}
function th(e) {
    return Ix(e) && "ownerSVGElement"in e
}
const ma = new WeakMap;
let Nn;
const Mw = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : th(r) && "getBBox"in r ? r.getBBox()[t] : r[n]
  , H2 = Mw("inline", "width", "offsetWidth")
  , K2 = Mw("block", "height", "offsetHeight");
function G2({target: e, borderBoxSize: t}) {
    var n;
    (n = ma.get(e)) == null || n.forEach(r => {
        r(e, {
            get width() {
                return H2(e, t)
            },
            get height() {
                return K2(e, t)
            }
        })
    }
    )
}
function Q2(e) {
    e.forEach(G2)
}
function Y2() {
    typeof ResizeObserver > "u" || (Nn = new ResizeObserver(Q2))
}
function X2(e, t) {
    Nn || Y2();
    const n = bw(e);
    return n.forEach(r => {
        let i = ma.get(r);
        i || (i = new Set,
        ma.set(r, i)),
        i.add(t),
        Nn == null || Nn.observe(r)
    }
    ),
    () => {
        n.forEach(r => {
            const i = ma.get(r);
            i == null || i.delete(t),
            i != null && i.size || Nn == null || Nn.unobserve(r)
        }
        )
    }
}
const ga = new Set;
let di;
function q2() {
    di = () => {
        const e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        ga.forEach(t => t(e))
    }
    ,
    window.addEventListener("resize", di)
}
function Z2(e) {
    return ga.add(e),
    di || q2(),
    () => {
        ga.delete(e),
        !ga.size && typeof di == "function" && (window.removeEventListener("resize", di),
        di = void 0)
    }
}
function Nm(e, t) {
    return typeof e == "function" ? Z2(e) : X2(e, t)
}
function J2(e) {
    return th(e) && e.tagName === "svg"
}
const eN = [...Ew, xe, or]
  , tN = e => eN.find(Cw(e))
  , Mm = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , fi = () => ({
    x: Mm(),
    y: Mm()
})
  , Dm = () => ({
    min: 0,
    max: 0
})
  , Ce = () => ({
    x: Dm(),
    y: Dm()
})
  , nN = new WeakMap;
function Ll(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
function ro(e) {
    return typeof e == "string" || Array.isArray(e)
}
const nh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , rh = ["initial", ...nh];
function Ol(e) {
    return Ll(e.animate) || rh.some(t => ro(e[t]))
}
function Dw(e) {
    return !!(Ol(e) || e.variants)
}
function rN(e, t, n) {
    for (const r in t) {
        const i = t[r]
          , s = n[r];
        if (Fe(i))
            e.addValue(r, i);
        else if (Fe(s))
            e.addValue(r, $i(i, {
                owner: e
            }));
        else if (s !== i)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, $i(o !== void 0 ? o : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const dd = {
    current: null
}
  , jw = {
    current: !1
}
  , iN = typeof window < "u";
function sN() {
    if (jw.current = !0,
    !!iN)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => dd.current = e.matches;
            e.addEventListener("change", t),
            t()
        } else
            dd.current = !1
}
const jm = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let tl = {};
function Lw(e) {
    tl = e
}
function oN() {
    return tl
}
class aN {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, skipAnimations: s, blockInitialAnimation: o, visualState: a}, l={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.shouldSkipAnimations = !1,
        this.values = new Map,
        this.KeyframeResolver = Gf,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.hasBeenMounted = !1,
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const h = Ue.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h,
            ie.render(this.render, !1, !0))
        }
        ;
        const {latestValues: u, renderState: c} = a;
        this.latestValues = u,
        this.baseTarget = {
            ...u
        },
        this.initialValues = n.initial ? {
            ...u
        } : {},
        this.renderState = c,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.skipAnimationsConfig = s,
        this.options = l,
        this.blockInitialAnimation = !!o,
        this.isControllingVariants = Ol(n),
        this.isVariantNode = Dw(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: d, ...f} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in f) {
            const v = f[h];
            u[h] !== void 0 && Fe(v) && v.set(u[h])
        }
    }
    mount(t) {
        var n, r;
        if (this.hasBeenMounted)
            for (const i in this.initialValues)
                (n = this.values.get(i)) == null || n.jump(this.initialValues[i]),
                this.latestValues[i] = this.initialValues[i];
        this.current = t,
        nN.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (i, s) => this.bindToMotionValue(s, i)),
        this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (jw.current || sN(),
        this.shouldReduceMotion = dd.current),
        this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
        (r = this.parent) == null || r.addChild(this),
        this.update(this.props, this.presenceContext),
        this.hasBeenMounted = !0
    }
    unmount() {
        var t;
        this.projection && this.projection.unmount(),
        sr(this.notifyUpdate),
        sr(this.render),
        this.valueSubscriptions.forEach(n => n()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (t = this.parent) == null || t.removeChild(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features) {
            const r = this.features[n];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    addChild(t) {
        this.children.add(t),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(t)
    }
    removeChild(t) {
        this.children.delete(t),
        this.enteringChildren && this.enteringChildren.delete(t)
    }
    bindToMotionValue(t, n) {
        if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
        n.accelerate && O2.has(t) && this.current instanceof HTMLElement) {
            const {factory: o, keyframes: a, times: l, ease: u, duration: c} = n.accelerate
              , d = new hw({
                element: this.current,
                name: t,
                keyframes: a,
                times: l,
                ease: u,
                duration: yt(c)
            })
              , f = o(d);
            this.valueSubscriptions.set(t, () => {
                f(),
                d.cancel()
            }
            );
            return
        }
        const r = Zi.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const i = n.on("change", o => {
            this.latestValues[t] = o,
            this.props.onUpdate && ie.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let s;
        typeof window < "u" && window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            i(),
            s && s(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in tl) {
            const n = tl[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: i} = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(),
                s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ce()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < jm.length; r++) {
            const i = jm[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const s = "on" + i
              , o = t[s];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = rN(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = $i(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (Ox(r) || Vx(r)) ? r = parseFloat(r) : !tN(r) && or.test(n) && (r = Tw(t, n)),
        this.setBaseTarget(t, Fe(r) ? r.get() : r)),
        Fe(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var s;
        const {initial: n} = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const o = Xf(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
            o && (r = o[t])
        }
        if (n && r !== void 0)
            return r;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !Fe(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new If),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
    scheduleRenderMicrotask() {
        Jf.render(this.render)
    }
}
class Ow extends aN {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = L2
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        const r = t.style;
        return r ? r[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Fe(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
class dr {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function Iw({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function lN({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function uN(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Au(e) {
    return e === void 0 || e === 1
}
function fd({scale: e, scaleX: t, scaleY: n}) {
    return !Au(e) || !Au(t) || !Au(n)
}
function vr(e) {
    return fd(e) || Vw(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function Vw(e) {
    return Lm(e.x) || Lm(e.y)
}
function Lm(e) {
    return e && e !== "0%"
}
function nl(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function Om(e, t, n, r, i) {
    return i !== void 0 && (e = nl(e, i, r)),
    nl(e, n, r) + t
}
function hd(e, t=0, n=1, r, i) {
    e.min = Om(e.min, t, n, r, i),
    e.max = Om(e.max, t, n, r, i)
}
function Fw(e, {x: t, y: n}) {
    hd(e.x, t.translate, t.scale, t.originPoint),
    hd(e.y, n.translate, n.scale, n.originPoint)
}
const Im = .999999999999
  , Vm = 1.0000000000001;
function cN(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let s, o;
    for (let a = 0; a < i; a++) {
        s = n[a],
        o = s.projectionDelta;
        const {visualElement: l} = s.options;
        l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && pi(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        Fw(e, o)),
        r && vr(s.latestValues) && pi(e, s.latestValues))
    }
    t.x < Vm && t.x > Im && (t.x = 1),
    t.y < Vm && t.y > Im && (t.y = 1)
}
function hi(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function Fm(e, t, n, r, i=.5) {
    const s = fe(e.min, e.max, i);
    hd(e, t, n, s, r)
}
function pi(e, t) {
    Fm(e.x, t.x, t.scaleX, t.scale, t.originX),
    Fm(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function _w(e, t) {
    return Iw(uN(e.getBoundingClientRect(), t))
}
function dN(e, t, n) {
    const r = _w(e, n)
      , {scroll: i} = t;
    return i && (hi(r.x, i.offset.x),
    hi(r.y, i.offset.y)),
    r
}
const fN = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , hN = qi.length;
function pN(e, t, n) {
    let r = ""
      , i = !0;
    for (let s = 0; s < hN; s++) {
        const o = qi[s]
          , a = e[o];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number")
            l = a === (o.startsWith("scale") ? 1 : 0);
        else {
            const u = parseFloat(a);
            l = o.startsWith("scale") ? u === 1 : u === 0
        }
        if (!l || n) {
            const u = kw(a, Zf[o]);
            if (!l) {
                i = !1;
                const c = fN[o] || o;
                r += `${c}(${u}) `
            }
            n && (t[o] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function ih(e, t, n) {
    const {style: r, vars: i, transformOrigin: s} = e;
    let o = !1
      , a = !1;
    for (const l in t) {
        const u = t[l];
        if (Zi.has(l)) {
            o = !0;
            continue
        } else if (qx(l)) {
            i[l] = u;
            continue
        } else {
            const c = kw(u, Zf[l]);
            l.startsWith("origin") ? (a = !0,
            s[l] = c) : r[l] = c
        }
    }
    if (t.transform || (o || n ? r.transform = pN(t, e.transform, n) : r.transform && (r.transform = "none")),
    a) {
        const {originX: l="50%", originY: u="50%", originZ: c=0} = s;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}
function zw(e, {style: t, vars: n}, r, i) {
    const s = e.style;
    let o;
    for (o in t)
        s[o] = t[o];
    i == null || i.applyProjectionStyles(s, r);
    for (o in n)
        s.setProperty(o, n[o])
}
function _m(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const ds = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (F.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = _m(e, t.target.x)
          , r = _m(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , mN = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = or.parse(e);
        if (i.length > 5)
            return r;
        const s = or.createTransformer(e)
          , o = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        i[0 + o] /= a,
        i[1 + o] /= l;
        const u = fe(a, l, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
    }
}
  , pd = {
    borderRadius: {
        ...ds,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ds,
    borderTopRightRadius: ds,
    borderBottomLeftRadius: ds,
    borderBottomRightRadius: ds,
    boxShadow: mN
};
function Bw(e, {layout: t, layoutId: n}) {
    return Zi.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!pd[e] || e === "opacity")
}
function sh(e, t, n) {
    var o;
    const r = e.style
      , i = t == null ? void 0 : t.style
      , s = {};
    if (!r)
        return s;
    for (const a in r)
        (Fe(r[a]) || i && Fe(i[a]) || Bw(a, e) || ((o = n == null ? void 0 : n.getValue(a)) == null ? void 0 : o.liveStyle) !== void 0) && (s[a] = r[a]);
    return s
}
function gN(e) {
    return window.getComputedStyle(e)
}
class yN extends Ow {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = zw
    }
    readValueFromInstance(t, n) {
        var r;
        if (Zi.has(n))
            return (r = this.projection) != null && r.isProjecting ? ed(n) : OA(t, n);
        {
            const i = gN(t)
              , s = (qx(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof s == "string" ? s.trim() : s
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return _w(t, n)
    }
    build(t, n, r) {
        ih(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return sh(t, n, r)
    }
}
const vN = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , xN = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function wN(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const s = i ? vN : xN;
    e[s.offset] = `${-r}`,
    e[s.array] = `${t} ${n}`
}
const SN = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function $w(e, {attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: s=1, pathOffset: o=0, ...a}, l, u, c) {
    if (ih(e, a, u),
    l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: d, style: f} = e;
    d.transform && (f.transform = d.transform,
    delete d.transform),
    (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%",
    delete d.transformOrigin),
    f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box",
    delete d.transformBox);
    for (const h of SN)
        d[h] !== void 0 && (f[h] = d[h],
        delete d[h]);
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && wN(d, i, s, o, !1)
}
const Uw = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , Ww = e => typeof e == "string" && e.toLowerCase() === "svg";
function CN(e, t, n, r) {
    zw(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(Uw.has(i) ? i : qf(i), t.attrs[i])
}
function Hw(e, t, n) {
    const r = sh(e, t, n);
    for (const i in e)
        if (Fe(e[i]) || Fe(t[i])) {
            const s = qi.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[s] = e[i]
        }
    return r
}
class EN extends Ow {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Ce
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Zi.has(n)) {
            const r = Pw(n);
            return r && r.default || 0
        }
        return n = Uw.has(n) ? n : qf(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Hw(t, n, r)
    }
    build(t, n, r) {
        $w(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, i) {
        CN(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = Ww(t.tagName),
        super.mount(t)
    }
}
const PN = rh.length;
function Kw(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? Kw(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < PN; n++) {
        const r = rh[n]
          , i = e.props[r];
        (ro(i) || i === !1) && (t[r] = i)
    }
    return t
}
function Gw(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
const TN = [...nh].reverse()
  , bN = nh.length;
function kN(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => P2(e, n, r)))
}
function RN(e) {
    let t = kN(e)
      , n = zm()
      , r = !0;
    const i = l => (u, c) => {
        var f;
        const d = Ei(e, c, l === "exit" ? (f = e.presenceContext) == null ? void 0 : f.custom : void 0);
        if (d) {
            const {transition: h, transitionEnd: v, ...g} = d;
            u = {
                ...u,
                ...g,
                ...v
            }
        }
        return u
    }
    ;
    function s(l) {
        t = l(e)
    }
    function o(l) {
        const {props: u} = e
          , c = Kw(e.parent) || {}
          , d = []
          , f = new Set;
        let h = {}
          , v = 1 / 0;
        for (let x = 0; x < bN; x++) {
            const p = TN[x]
              , m = n[p]
              , y = u[p] !== void 0 ? u[p] : c[p]
              , C = ro(y)
              , E = p === l ? m.isActive : null;
            E === !1 && (v = x);
            let P = y === c[p] && y !== u[p] && C;
            if (P && r && e.manuallyAnimateOnMount && (P = !1),
            m.protectedKeys = {
                ...h
            },
            !m.isActive && E === null || !y && !m.prevProp || Ll(y) || typeof y == "boolean")
                continue;
            if (p === "exit" && m.isActive && E !== !0) {
                m.prevResolvedValues && (h = {
                    ...h,
                    ...m.prevResolvedValues
                });
                continue
            }
            const T = AN(m.prevProp, y);
            let b = T || p === l && m.isActive && !P && C || x > v && C
              , N = !1;
            const M = Array.isArray(y) ? y : [y];
            let z = M.reduce(i(p), {});
            E === !1 && (z = {});
            const {prevResolvedValues: I={}} = m
              , K = {
                ...I,
                ...z
            }
              , L = _ => {
                b = !0,
                f.has(_) && (N = !0,
                f.delete(_)),
                m.needsAnimating[_] = !0;
                const k = e.getValue(_);
                k && (k.liveStyle = !1)
            }
            ;
            for (const _ in K) {
                const k = z[_]
                  , A = I[_];
                if (h.hasOwnProperty(_))
                    continue;
                let O = !1;
                od(k) && od(A) ? O = !Gw(k, A) : O = k !== A,
                O ? k != null ? L(_) : f.add(_) : k !== void 0 && f.has(_) ? L(_) : m.protectedKeys[_] = !0
            }
            m.prevProp = y,
            m.prevResolvedValues = z,
            m.isActive && (h = {
                ...h,
                ...z
            }),
            r && e.blockInitialAnimation && (b = !1);
            const Q = P && T;
            b && (!Q || N) && d.push(...M.map(_ => {
                const k = {
                    type: p
                };
                if (typeof _ == "string" && r && !Q && e.manuallyAnimateOnMount && e.parent) {
                    const {parent: A} = e
                      , O = Ei(A, _);
                    if (A.enteringChildren && O) {
                        const {delayChildren: U} = O.transition || {};
                        k.delay = mw(A.enteringChildren, e, U)
                    }
                }
                return {
                    animation: _,
                    options: k
                }
            }
            ))
        }
        if (f.size) {
            const x = {};
            if (typeof u.initial != "boolean") {
                const p = Ei(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                p && p.transition && (x.transition = p.transition)
            }
            f.forEach(p => {
                const m = e.getBaseTarget(p)
                  , y = e.getValue(p);
                y && (y.liveStyle = !0),
                x[p] = m ?? null
            }
            ),
            d.push({
                animation: x
            })
        }
        let g = !!d.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (g = !1),
        r = !1,
        g ? t(d) : Promise.resolve()
    }
    function a(l, u) {
        var d;
        if (n[l].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) == null || d.forEach(f => {
            var h;
            return (h = f.animationState) == null ? void 0 : h.setActive(l, u)
        }
        ),
        n[l].isActive = u;
        const c = o(l);
        for (const f in n)
            n[f].protectedKeys = {};
        return c
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = zm()
        }
    }
}
function AN(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Gw(t, e) : !1
}
function mr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function zm() {
    return {
        animate: mr(!0),
        whileInView: mr(),
        whileHover: mr(),
        whileTap: mr(),
        whileDrag: mr(),
        whileFocus: mr(),
        exit: mr()
    }
}
function Bm(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Tt(e, t) {
    Bm(e.x, t.x),
    Bm(e.y, t.y)
}
function $m(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
const Qw = 1e-4
  , NN = 1 - Qw
  , MN = 1 + Qw
  , Yw = .01
  , DN = 0 - Yw
  , jN = 0 + Yw;
function We(e) {
    return e.max - e.min
}
function LN(e, t, n) {
    return Math.abs(e - t) <= n
}
function Um(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = fe(t.min, t.max, e.origin),
    e.scale = We(n) / We(t),
    e.translate = fe(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= NN && e.scale <= MN || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= DN && e.translate <= jN || isNaN(e.translate)) && (e.translate = 0)
}
function As(e, t, n, r) {
    Um(e.x, t.x, n.x, r ? r.originX : void 0),
    Um(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Wm(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + We(t)
}
function ON(e, t, n) {
    Wm(e.x, t.x, n.x),
    Wm(e.y, t.y, n.y)
}
function Hm(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + We(t)
}
function rl(e, t, n) {
    Hm(e.x, t.x, n.x),
    Hm(e.y, t.y, n.y)
}
function Km(e, t, n, r, i) {
    return e -= t,
    e = nl(e, 1 / n, r),
    i !== void 0 && (e = nl(e, 1 / i, r)),
    e
}
function IN(e, t=0, n=1, r=.5, i, s=e, o=e) {
    if (qt.test(t) && (t = parseFloat(t),
    t = fe(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let a = fe(s.min, s.max, r);
    e === s && (a -= t),
    e.min = Km(e.min, t, n, a, i),
    e.max = Km(e.max, t, n, a, i)
}
function Gm(e, t, [n,r,i], s, o) {
    IN(e, t[n], t[r], t[i], t.scale, s, o)
}
const VN = ["x", "scaleX", "originX"]
  , FN = ["y", "scaleY", "originY"];
function Qm(e, t, n, r) {
    Gm(e.x, t, VN, n ? n.x : void 0, r ? r.x : void 0),
    Gm(e.y, t, FN, n ? n.y : void 0, r ? r.y : void 0)
}
function Ym(e) {
    return e.translate === 0 && e.scale === 1
}
function Xw(e) {
    return Ym(e.x) && Ym(e.y)
}
function Xm(e, t) {
    return e.min === t.min && e.max === t.max
}
function _N(e, t) {
    return Xm(e.x, t.x) && Xm(e.y, t.y)
}
function qm(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function qw(e, t) {
    return qm(e.x, t.x) && qm(e.y, t.y)
}
function Zm(e) {
    return We(e.x) / We(e.y)
}
function Jm(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
function $t(e) {
    return [e("x"), e("y")]
}
function zN(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , s = e.y.translate / t.y
      , o = (n == null ? void 0 : n.z) || 0;
    if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: h, skewY: v} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        d && (r += `rotateX(${d}deg) `),
        f && (r += `rotateY(${f}deg) `),
        h && (r += `skewX(${h}deg) `),
        v && (r += `skewY(${v}deg) `)
    }
    const a = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
    r || "none"
}
const Zw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , BN = Zw.length
  , eg = e => typeof e == "string" ? parseFloat(e) : e
  , tg = e => typeof e == "number" || F.test(e);
function $N(e, t, n, r, i, s) {
    i ? (e.opacity = fe(0, n.opacity ?? 1, UN(r)),
    e.opacityExit = fe(t.opacity ?? 1, 0, WN(r))) : s && (e.opacity = fe(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let o = 0; o < BN; o++) {
        const a = `border${Zw[o]}Radius`;
        let l = ng(t, a)
          , u = ng(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || tg(l) === tg(u) ? (e[a] = Math.max(fe(eg(l), eg(u), r), 0),
        (qt.test(u) || qt.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = fe(t.rotate || 0, n.rotate || 0, r))
}
function ng(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const UN = Jw(0, .5, Hx)
  , WN = Jw(.5, .95, gt);
function Jw(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(eo(e, t, r))
}
function HN(e, t, n) {
    const r = Fe(e) ? e : $i(e);
    return r.start(Yf("", r, t, n)),
    r.animation
}
function io(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
const KN = (e, t) => e.depth - t.depth;
class GN {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Lf(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        qa(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(KN),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function QN(e, t) {
    const n = Ue.now()
      , r = ({timestamp: i}) => {
        const s = i - n;
        s >= t && (sr(r),
        e(s - t))
    }
    ;
    return ie.setup(r, !0),
    () => sr(r)
}
function ya(e) {
    return Fe(e) ? e.get() : e
}
class YN {
    constructor() {
        this.members = []
    }
    add(t) {
        Lf(this.members, t);
        for (let n = this.members.length - 1; n >= 0; n--) {
            const r = this.members[n];
            if (r === t || r === this.lead || r === this.prevLead)
                continue;
            const i = r.instance;
            i && i.isConnected === !1 && r.isPresent !== !1 && !r.snapshot && qa(this.members, r)
        }
        t.scheduleRender()
    }
    remove(t) {
        if (qa(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i]
              , o = s.instance;
            if (s.isPresent !== !1 && (!o || o.isConnected !== !1)) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender();
            const i = r.options.layoutDependency
              , s = t.options.layoutDependency;
            if (!(i !== void 0 && s !== void 0 && i === s)) {
                const l = r.instance;
                l && l.isConnected === !1 && !r.snapshot || (t.resumeFrom = r,
                n && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot && (t.snapshot = r.snapshot,
                t.snapshot.latestValues = r.animationValues || r.latestValues),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0))
            }
            const {crossfade: a} = t.options;
            a === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
const va = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
  , Nu = ["", "X", "Y", "Z"]
  , XN = 1e3;
let qN = 0;
function Mu(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function e1(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = ww(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: s} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", ie, !(i || s))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && e1(r)
}
function t1({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(o={}, a=t == null ? void 0 : t()) {
            this.id = qN++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(eM),
                this.nodes.forEach(iM),
                this.nodes.forEach(sM),
                this.nodes.forEach(tM)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new GN)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new If),
            this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o) {
            if (this.instance)
                return;
            this.isSVG = th(o) && !J2(o),
            this.instance = o;
            const {layoutId: a, layout: l, visualElement: u} = this.options;
            if (u && !u.current && u.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
            e) {
                let c, d = 0;
                const f = () => this.root.updateBlockedByResize = !1;
                ie.read( () => {
                    d = window.innerWidth
                }
                ),
                e(o, () => {
                    const h = window.innerWidth;
                    h !== d && (d = h,
                    this.root.updateBlockedByResize = !0,
                    c && c(),
                    c = QN(f, 250),
                    va.hasAnimatedSinceResize && (va.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(sg)))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: h}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || u.getDefaultTransition() || cM
                  , {onLayoutAnimationStart: g, onLayoutAnimationComplete: x} = u.getProps()
                  , p = !this.targetLayout || !qw(this.targetLayout, h)
                  , m = !d && f;
                if (this.options.layoutRoot || this.resumeFrom || m || d && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const y = {
                        ...Qf(v, "layout"),
                        onPlay: g,
                        onComplete: x
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (y.delay = 0,
                    y.type = !1),
                    this.startAnimation(y),
                    this.setAnimationOrigin(c, m)
                } else
                    d || sg(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = h
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            sr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(oM),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && e1(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                d.updateScroll("snapshot"),
                d.options.layoutRoot && d.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(rg);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(ig);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(rM),
            this.nodes.forEach(ZN),
            this.nodes.forEach(JN)) : this.nodes.forEach(ig),
            this.clearAllSnapshots();
            const a = Ue.now();
            Ae.delta = Jt(0, 1e3 / 60, a - Ae.timestamp),
            Ae.timestamp = a,
            Ae.isProcessing = !0,
            Cu.update.process(Ae),
            Cu.preRender.process(Ae),
            Cu.render.process(Ae),
            Ae.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Jf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(nM),
            this.sharedNodes.forEach(aM)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            ie.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            ie.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !We(this.snapshot.measuredBox.x) && !We(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected = Ce(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1),
            a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !Xw(this.projectionDelta)
              , l = this.getTransformTemplate()
              , u = l ? l(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            o && this.instance && (a || vr(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)),
            dM(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {visualElement: o} = this.options;
            if (!o)
                return Ce();
            const a = o.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(fM))) {
                const {scroll: c} = this.root;
                c && (hi(a.x, c.offset.x),
                hi(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(o) {
            var l;
            const a = Ce();
            if (Tt(a, o),
            (l = this.scroll) != null && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u]
                  , {scroll: d, options: f} = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && Tt(a, o),
                hi(a.x, d.offset.x),
                hi(a.y, d.offset.y))
            }
            return a
        }
        applyTransform(o, a=!1) {
            const l = Ce();
            Tt(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && pi(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                vr(c.latestValues) && pi(l, c.latestValues)
            }
            return vr(this.latestValues) && pi(l, this.latestValues),
            l
        }
        removeTransform(o) {
            const a = Ce();
            Tt(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !vr(u.latestValues))
                    continue;
                fd(u.latestValues) && u.updateSnapshot();
                const c = Ce()
                  , d = u.measurePageBox();
                Tt(c, d),
                Qm(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return vr(this.latestValues) && Qm(a, this.latestValues),
            a
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ae.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var h;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: c, layoutId: d} = this.options;
            if (!this.layout || !(c || d))
                return;
            this.resolvedRelativeTargetAt = Ae.timestamp;
            const f = this.getClosestProjectingParent();
            f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ce(),
            this.targetWithTransforms = Ce()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            ON(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Tt(this.target, this.layout.layoutBox),
            Fw(this.target, this.targetDelta)) : Tt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || fd(this.parent.latestValues) || Vw(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(o, a, l) {
            this.relativeParent = o,
            this.linkedParentVersion = o.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = Ce(),
            this.relativeTargetOrigin = Ce(),
            rl(this.relativeTargetOrigin, a, l),
            Tt(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var v;
            const o = this.getLead()
              , a = !!this.resumingFrom || this !== o;
            let l = !0;
            if ((this.isProjectionDirty || (v = this.parent) != null && v.isProjectionDirty) && (l = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
            this.resolvedRelativeTargetAt === Ae.timestamp && (l = !1),
            l)
                return;
            const {layout: u, layoutId: c} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || c))
                return;
            Tt(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , f = this.treeScale.y;
            cN(this.layoutCorrected, this.treeScale, this.path, a),
            o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox,
            o.targetWithTransforms = Ce());
            const {target: h} = o;
            if (!h) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : ($m(this.prevProjectionDelta.x, this.projectionDelta.x),
            $m(this.prevProjectionDelta.y, this.projectionDelta.y)),
            As(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
            (this.treeScale.x !== d || this.treeScale.y !== f || !Jm(this.projectionDelta.x, this.prevProjectionDelta.x) || !Jm(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", h))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(),
            o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = fi(),
            this.projectionDelta = fi(),
            this.projectionDeltaWithTransform = fi()
        }
        setAnimationOrigin(o, a=!1) {
            const l = this.snapshot
              , u = l ? l.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , d = fi();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const f = Ce()
              , h = l ? l.source : void 0
              , v = this.layout ? this.layout.source : void 0
              , g = h !== v
              , x = this.getStack()
              , p = !x || x.members.length <= 1
              , m = !!(g && !p && this.options.crossfade === !0 && !this.path.some(uM));
            this.animationProgress = 0;
            let y;
            this.mixTargetDelta = C => {
                const E = C / 1e3;
                og(d.x, o.x, E),
                og(d.y, o.y, E),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (rl(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                lM(this.relativeTarget, this.relativeTargetOrigin, f, E),
                y && _N(this.relativeTarget, y) && (this.isProjectionDirty = !1),
                y || (y = Ce()),
                Tt(y, this.relativeTarget)),
                g && (this.animationValues = c,
                $N(c, u, this.latestValues, E, m, p)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = E
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            var a, l, u;
            this.notifyListeners("animationStart"),
            (a = this.currentAnimation) == null || a.stop(),
            (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(),
            this.pendingAnimation && (sr(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = ie.update( () => {
                va.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = $i(0)),
                this.currentAnimation = HN(this.motionValue, [0, 1e3], {
                    ...o,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: c => {
                        this.mixTargetDelta(c),
                        o.onUpdate && o.onUpdate(c)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(XN),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: a, target: l, layout: u, latestValues: c} = o;
            if (!(!a || !l || !u)) {
                if (this !== o && this.layout && u && n1(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || Ce();
                    const d = We(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min,
                    l.x.max = l.x.min + d;
                    const f = We(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min,
                    l.y.max = l.y.min + f
                }
                Tt(a, l),
                pi(a, c),
                As(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new YN),
            this.sharedNodes.get(o).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var a;
            const {layoutId: o} = this.options;
            return o ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {layoutId: o} = this.options;
            return o ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: a, preserveFollowOpacity: l}={}) {
            const u = this.getStack();
            u && u.promote(this, l),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let a = !1;
            const {latestValues: l} = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const u = {};
            l.z && Mu("z", o, u, this.animationValues);
            for (let c = 0; c < Nu.length; c++)
                Mu(`rotate${Nu[c]}`, o, u, this.animationValues),
                Mu(`skew${Nu[c]}`, o, u, this.animationValues);
            o.render();
            for (const c in u)
                o.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            o.scheduleRender()
        }
        applyProjectionStyles(o, a) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                o.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                o.visibility = "",
                o.opacity = "",
                o.pointerEvents = ya(a == null ? void 0 : a.pointerEvents) || "",
                o.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                o.pointerEvents = ya(a == null ? void 0 : a.pointerEvents) || ""),
                this.hasProjected && !vr(this.latestValues) && (o.transform = l ? l({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            o.visibility = "";
            const c = u.animationValues || u.latestValues;
            this.applyTransformsToTarget();
            let d = zN(this.projectionDeltaWithTransform, this.treeScale, c);
            l && (d = l(c, d)),
            o.transform = d;
            const {x: f, y: h} = this.projectionDelta;
            o.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`,
            u.animationValues ? o.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : o.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
            for (const v in pd) {
                if (c[v] === void 0)
                    continue;
                const {correct: g, applyTo: x, isCSSVariable: p} = pd[v]
                  , m = d === "none" ? c[v] : g(c[v], u);
                if (x) {
                    const y = x.length;
                    for (let C = 0; C < y; C++)
                        o[x[C]] = m
                } else
                    p ? this.options.visualElement.renderState.vars[v] = m : o[v] = m
            }
            this.options.layoutId && (o.pointerEvents = u === this ? ya(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) == null ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(rg),
            this.root.sharedNodes.clear()
        }
    }
}
function ZN(e) {
    e.updateLayout()
}
function JN(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: s} = e.options
          , o = t.source !== e.layout.source;
        s === "size" ? $t(d => {
            const f = o ? t.measuredBox[d] : t.layoutBox[d]
              , h = We(f);
            f.min = r[d].min,
            f.max = f.min + h
        }
        ) : n1(s, t.layoutBox, r) && $t(d => {
            const f = o ? t.measuredBox[d] : t.layoutBox[d]
              , h = We(r[d]);
            f.max = f.min + h,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[d].max = e.relativeTarget[d].min + h)
        }
        );
        const a = fi();
        As(a, r, t.layoutBox);
        const l = fi();
        o ? As(l, e.applyTransform(i, !0), t.measuredBox) : As(l, r, t.layoutBox);
        const u = !Xw(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {snapshot: f, layout: h} = d;
                if (f && h) {
                    const v = Ce();
                    rl(v, t.layoutBox, f.layoutBox);
                    const g = Ce();
                    rl(g, r, h.layoutBox),
                    qw(v, g) || (c = !0),
                    d.options.layoutRoot && (e.relativeTarget = g,
                    e.relativeTargetOrigin = v,
                    e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function eM(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function tM(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function nM(e) {
    e.clearSnapshot()
}
function rg(e) {
    e.clearMeasurements()
}
function ig(e) {
    e.isLayoutDirty = !1
}
function rM(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function sg(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function iM(e) {
    e.resolveTargetDelta()
}
function sM(e) {
    e.calcProjection()
}
function oM(e) {
    e.resetSkewAndRotation()
}
function aM(e) {
    e.removeLeadSnapshot()
}
function og(e, t, n) {
    e.translate = fe(t.translate, 0, n),
    e.scale = fe(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function ag(e, t, n, r) {
    e.min = fe(t.min, n.min, r),
    e.max = fe(t.max, n.max, r)
}
function lM(e, t, n, r) {
    ag(e.x, t.x, n.x, r),
    ag(e.y, t.y, n.y, r)
}
function uM(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const cM = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , lg = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , ug = lg("applewebkit/") && !lg("chrome/") ? Math.round : gt;
function cg(e) {
    e.min = ug(e.min),
    e.max = ug(e.max)
}
function dM(e) {
    cg(e.x),
    cg(e.y)
}
function n1(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !LN(Zm(t), Zm(n), .2)
}
function fM(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const hM = t1({
    attachResizeListener: (e, t) => io(e, "resize", t),
    measureScroll: () => {
        var e, t;
        return {
            x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0
        }
    }
    ,
    checkIsScrollRoot: () => !0
})
  , Du = {
    current: void 0
}
  , r1 = t1({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!Du.current) {
            const e = new hM({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Du.current = e
        }
        return Du.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , oh = w.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
function dg(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function pM(...e) {
    return t => {
        let n = !1;
        const r = e.map(i => {
            const s = dg(i, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let i = 0; i < r.length; i++) {
                    const s = r[i];
                    typeof s == "function" ? s() : dg(e[i], null)
                }
            }
    }
}
function mM(...e) {
    return w.useCallback(pM(...e), e)
}
class gM extends w.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const r = n.offsetParent
              , i = cd(r) && r.offsetWidth || 0
              , s = cd(r) && r.offsetHeight || 0
              , o = this.props.sizeRef.current;
            o.height = n.offsetHeight || 0,
            o.width = n.offsetWidth || 0,
            o.top = n.offsetTop,
            o.left = n.offsetLeft,
            o.right = i - o.width - o.left,
            o.bottom = s - o.height - o.top
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function yM({children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: s}) {
    var f;
    const o = w.useId()
      , a = w.useRef(null)
      , l = w.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    })
      , {nonce: u} = w.useContext(oh)
      , c = ((f = e.props) == null ? void 0 : f.ref) ?? (e == null ? void 0 : e.ref)
      , d = mM(a, c);
    return w.useInsertionEffect( () => {
        const {width: h, height: v, top: g, left: x, right: p, bottom: m} = l.current;
        if (t || s === !1 || !a.current || !h || !v)
            return;
        const y = n === "left" ? `left: ${x}` : `right: ${p}`
          , C = r === "bottom" ? `bottom: ${m}` : `top: ${g}`;
        a.current.dataset.motionPopId = o;
        const E = document.createElement("style");
        u && (E.nonce = u);
        const P = i ?? document.head;
        return P.appendChild(E),
        E.sheet && E.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${v}px !important;
            ${y}px !important;
            ${C}px !important;
          }
        `),
        () => {
            P.contains(E) && P.removeChild(E)
        }
    }
    , [t]),
    S.jsx(gM, {
        isPresent: t,
        childRef: a,
        sizeRef: l,
        pop: s,
        children: s === !1 ? e : w.cloneElement(e, {
            ref: d
        })
    })
}
const vM = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o, anchorX: a, anchorY: l, root: u}) => {
    const c = jf(xM)
      , d = w.useId();
    let f = !0
      , h = w.useMemo( () => (f = !1,
    {
        id: d,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: v => {
            c.set(v, !0);
            for (const g of c.values())
                if (!g)
                    return;
            r && r()
        }
        ,
        register: v => (c.set(v, !1),
        () => c.delete(v))
    }), [n, c, r]);
    return s && f && (h = {
        ...h
    }),
    w.useMemo( () => {
        c.forEach( (v, g) => c.set(g, !1))
    }
    , [n]),
    w.useEffect( () => {
        !n && !c.size && r && r()
    }
    , [n]),
    e = S.jsx(yM, {
        pop: o === "popLayout",
        isPresent: n,
        anchorX: a,
        anchorY: l,
        root: u,
        children: e
    }),
    S.jsx(Dl.Provider, {
        value: h,
        children: e
    })
}
;
function xM() {
    return new Map
}
function i1(e=!0) {
    const t = w.useContext(Dl);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: i} = t
      , s = w.useId();
    w.useEffect( () => {
        if (e)
            return i(s)
    }
    , [e]);
    const o = w.useCallback( () => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, o] : [!0]
}
const Xo = e => e.key || "";
function fg(e) {
    const t = [];
    return w.Children.forEach(e, n => {
        w.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const wM = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: i=!0, mode: s="sync", propagate: o=!1, anchorX: a="left", anchorY: l="top", root: u}) => {
    const [c,d] = i1(o)
      , f = w.useMemo( () => fg(e), [e])
      , h = o && !c ? [] : f.map(Xo)
      , v = w.useRef(!0)
      , g = w.useRef(f)
      , x = jf( () => new Map)
      , p = w.useRef(new Set)
      , [m,y] = w.useState(f)
      , [C,E] = w.useState(f);
    Lx( () => {
        v.current = !1,
        g.current = f;
        for (let b = 0; b < C.length; b++) {
            const N = Xo(C[b]);
            h.includes(N) ? (x.delete(N),
            p.current.delete(N)) : x.get(N) !== !0 && x.set(N, !1)
        }
    }
    , [C, h.length, h.join("-")]);
    const P = [];
    if (f !== m) {
        let b = [...f];
        for (let N = 0; N < C.length; N++) {
            const M = C[N]
              , z = Xo(M);
            h.includes(z) || (b.splice(N, 0, M),
            P.push(M))
        }
        return s === "wait" && P.length && (b = P),
        E(fg(b)),
        y(f),
        null
    }
    const {forceRender: T} = w.useContext(Df);
    return S.jsx(S.Fragment, {
        children: C.map(b => {
            const N = Xo(b)
              , M = o && !c ? !1 : f === C || h.includes(N)
              , z = () => {
                if (p.current.has(N))
                    return;
                if (p.current.add(N),
                x.has(N))
                    x.set(N, !0);
                else
                    return;
                let I = !0;
                x.forEach(K => {
                    K || (I = !1)
                }
                ),
                I && (T == null || T(),
                E(g.current),
                o && (d == null || d()),
                r && r())
            }
            ;
            return S.jsx(vM, {
                isPresent: M,
                initial: !v.current || n ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: i,
                mode: s,
                root: u,
                onExitComplete: M ? void 0 : z,
                anchorX: a,
                anchorY: l,
                children: b
            }, N)
        }
        )
    })
}
  , s1 = w.createContext({
    strict: !1
})
  , hg = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let pg = !1;
function SM() {
    if (pg)
        return;
    const e = {};
    for (const t in hg)
        e[t] = {
            isEnabled: n => hg[t].some(r => !!n[r])
        };
    Lw(e),
    pg = !0
}
function o1() {
    return SM(),
    oN()
}
function CM(e) {
    const t = o1();
    for (const n in e)
        t[n] = {
            ...t[n],
            ...e[n]
        };
    Lw(t)
}
const EM = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function il(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || EM.has(e)
}
let a1 = e => !il(e);
function PM(e) {
    typeof e == "function" && (a1 = t => t.startsWith("on") ? !il(t) : e(t))
}
try {
    PM(require("@emotion/is-prop-valid").default)
} catch {}
function TM(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (a1(i) || n === !0 && il(i) || !t && !il(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
const Il = w.createContext({});
function bM(e, t) {
    if (Ol(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || ro(n) ? n : void 0,
            animate: ro(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function kM(e) {
    const {initial: t, animate: n} = bM(e, w.useContext(Il));
    return w.useMemo( () => ({
        initial: t,
        animate: n
    }), [mg(t), mg(n)])
}
function mg(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const ah = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function l1(e, t, n) {
    for (const r in t)
        !Fe(t[r]) && !Bw(r, n) && (e[r] = t[r])
}
function RM({transformTemplate: e}, t) {
    return w.useMemo( () => {
        const n = ah();
        return ih(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function AM(e, t) {
    const n = e.style || {}
      , r = {};
    return l1(r, n, e),
    Object.assign(r, RM(e, t)),
    r
}
function NM(e, t) {
    const n = {}
      , r = AM(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const u1 = () => ({
    ...ah(),
    attrs: {}
});
function MM(e, t, n, r) {
    const i = w.useMemo( () => {
        const s = u1();
        return $w(s, t, Ww(r), e.transformTemplate, e.style),
        {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const s = {};
        l1(s, e.style, e),
        i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
const DM = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function lh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(DM.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function jM(e, t, n, {latestValues: r}, i, s=!1, o) {
    const l = (o ?? lh(e) ? MM : NM)(t, r, i, e)
      , u = TM(t, typeof e == "string", s)
      , c = e !== w.Fragment ? {
        ...u,
        ...l,
        ref: n
    } : {}
      , {children: d} = t
      , f = w.useMemo( () => Fe(d) ? d.get() : d, [d]);
    return w.createElement(e, {
        ...c,
        children: f
    })
}
function LM({scrapeMotionValuesFromProps: e, createRenderState: t}, n, r, i) {
    return {
        latestValues: OM(n, r, i, e),
        renderState: t()
    }
}
function OM(e, t, n, r) {
    const i = {}
      , s = r(e, {});
    for (const f in s)
        i[f] = ya(s[f]);
    let {initial: o, animate: a} = e;
    const l = Ol(e)
      , u = Dw(e);
    t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial),
    a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || o === !1;
    const d = c ? a : o;
    if (d && typeof d != "boolean" && !Ll(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let h = 0; h < f.length; h++) {
            const v = Xf(e, f[h]);
            if (v) {
                const {transitionEnd: g, transition: x, ...p} = v;
                for (const m in p) {
                    let y = p[m];
                    if (Array.isArray(y)) {
                        const C = c ? y.length - 1 : 0;
                        y = y[C]
                    }
                    y !== null && (i[m] = y)
                }
                for (const m in g)
                    i[m] = g[m]
            }
        }
    }
    return i
}
const c1 = e => (t, n) => {
    const r = w.useContext(Il)
      , i = w.useContext(Dl)
      , s = () => LM(e, t, r, i);
    return n ? s() : jf(s)
}
  , IM = c1({
    scrapeMotionValuesFromProps: sh,
    createRenderState: ah
})
  , VM = c1({
    scrapeMotionValuesFromProps: Hw,
    createRenderState: u1
})
  , FM = Symbol.for("motionComponentSymbol");
function _M(e, t, n) {
    const r = w.useRef(n);
    w.useInsertionEffect( () => {
        r.current = n
    }
    );
    const i = w.useRef(null);
    return w.useCallback(s => {
        var a;
        s && ((a = e.onMount) == null || a.call(e, s)),
        t && (s ? t.mount(s) : t.unmount());
        const o = r.current;
        if (typeof o == "function")
            if (s) {
                const l = o(s);
                typeof l == "function" && (i.current = l)
            } else
                i.current ? (i.current(),
                i.current = null) : o(s);
        else
            o && (o.current = s)
    }
    , [t])
}
const d1 = w.createContext({});
function qr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function zM(e, t, n, r, i, s) {
    var y, C;
    const {visualElement: o} = w.useContext(Il)
      , a = w.useContext(s1)
      , l = w.useContext(Dl)
      , u = w.useContext(oh)
      , c = u.reducedMotion
      , d = u.skipAnimations
      , f = w.useRef(null)
      , h = w.useRef(!1);
    r = r || a.renderer,
    !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: s
    }),
    h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
    const v = f.current
      , g = w.useContext(d1);
    v && !v.projection && i && (v.type === "html" || v.type === "svg") && BM(f.current, n, i, g);
    const x = w.useRef(!1);
    w.useInsertionEffect( () => {
        v && x.current && v.update(n, l)
    }
    );
    const p = n[xw]
      , m = w.useRef(!!p && !((y = window.MotionHandoffIsComplete) != null && y.call(window, p)) && ((C = window.MotionHasOptimisedAnimation) == null ? void 0 : C.call(window, p)));
    return Lx( () => {
        h.current = !0,
        v && (x.current = !0,
        window.MotionIsMounted = !0,
        v.updateFeatures(),
        v.scheduleRenderMicrotask(),
        m.current && v.animationState && v.animationState.animateChanges())
    }
    ),
    w.useEffect( () => {
        v && (!m.current && v.animationState && v.animationState.animateChanges(),
        m.current && (queueMicrotask( () => {
            var E;
            (E = window.MotionHandoffMarkAsComplete) == null || E.call(window, p)
        }
        ),
        m.current = !1),
        v.enteringChildren = void 0)
    }
    ),
    v
}
function BM(e, t, n, r) {
    const {layoutId: i, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : f1(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: s,
        alwaysMeasureLayout: !!o || a && qr(a),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        crossfade: c,
        layoutScroll: l,
        layoutRoot: u
    })
}
function f1(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : f1(e.parent)
}
function ju(e, {forwardMotionProps: t=!1, type: n}={}, r, i) {
    r && CM(r);
    const s = n ? n === "svg" : lh(e)
      , o = s ? VM : IM;
    function a(u, c) {
        let d;
        const f = {
            ...w.useContext(oh),
            ...u,
            layoutId: $M(u)
        }
          , {isStatic: h} = f
          , v = kM(u)
          , g = o(u, h);
        if (!h && jx) {
            UM();
            const x = WM(f);
            d = x.MeasureLayout,
            v.visualElement = zM(e, g, f, i, x.ProjectionNode, s)
        }
        return S.jsxs(Il.Provider, {
            value: v,
            children: [d && v.visualElement ? S.jsx(d, {
                visualElement: v.visualElement,
                ...f
            }) : null, jM(e, u, _M(g, v.visualElement, c), g, h, t, s)]
        })
    }
    a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const l = w.forwardRef(a);
    return l[FM] = e,
    l
}
function $M({layoutId: e}) {
    const t = w.useContext(Df).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function UM(e, t) {
    w.useContext(s1).strict
}
function WM(e) {
    const t = o1()
      , {drag: n, layout: r} = t;
    if (!n && !r)
        return {};
    const i = {
        ...n,
        ...r
    };
    return {
        MeasureLayout: n != null && n.isEnabled(e) || r != null && r.isEnabled(e) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
function HM(e, t) {
    if (typeof Proxy > "u")
        return ju;
    const n = new Map
      , r = (s, o) => ju(s, o, e, t)
      , i = (s, o) => r(s, o);
    return new Proxy(i,{
        get: (s, o) => o === "create" ? r : (n.has(o) || n.set(o, ju(o, void 0, e, t)),
        n.get(o))
    })
}
const KM = (e, t) => t.isSVG ?? lh(e) ? new EN(t) : new yN(t,{
    allowProjection: e !== w.Fragment
});
class GM extends dr {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = RN(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        Ll(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) == null || t.call(this)
    }
}
let QM = 0;
class YM extends dr {
    constructor() {
        super(...arguments),
        this.id = QM++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then( () => {
            n(this.id)
        }
        )
    }
    mount() {
        const {register: t, onExitComplete: n} = this.node.presenceContext || {};
        n && n(this.id),
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const XM = {
    animation: {
        Feature: GM
    },
    exit: {
        Feature: YM
    }
};
function So(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const qM = e => t => eh(t) && e(t, So(t));
function Ns(e, t, n, r) {
    return io(e, t, qM(n), r)
}
const h1 = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , gg = (e, t) => Math.abs(e - t);
function ZM(e, t) {
    const n = gg(e.x, t.x)
      , r = gg(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
const yg = new Set(["auto", "scroll"]);
class p1 {
    constructor(t, n, {transformPagePoint: r, contextWindow: i=window, dragSnapToOrigin: s=!1, distanceThreshold: o=3, element: a}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.scrollPositions = new Map,
        this.removeScrollListeners = null,
        this.onElementScroll = h => {
            this.handleScroll(h.target)
        }
        ,
        this.onWindowScroll = () => {
            this.handleScroll(window)
        }
        ,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const h = Ou(this.lastMoveEventInfo, this.history)
              , v = this.startEvent !== null
              , g = ZM(h.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!v && !g)
                return;
            const {point: x} = h
              , {timestamp: p} = Ae;
            this.history.push({
                ...x,
                timestamp: p
            });
            const {onStart: m, onMove: y} = this.handlers;
            v || (m && m(this.lastMoveEvent, h),
            this.startEvent = this.lastMoveEvent),
            y && y(this.lastMoveEvent, h)
        }
        ,
        this.handlePointerMove = (h, v) => {
            this.lastMoveEvent = h,
            this.lastMoveEventInfo = Lu(v, this.transformPagePoint),
            ie.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (h, v) => {
            this.end();
            const {onEnd: g, onSessionEnd: x, resumeAnimation: p} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && p && p(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const m = Ou(h.type === "pointercancel" ? this.lastMoveEventInfo : Lu(v, this.transformPagePoint), this.history);
            this.startEvent && g && g(h, m),
            x && x(h, m)
        }
        ,
        !eh(t))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = n,
        this.transformPagePoint = r,
        this.distanceThreshold = o,
        this.contextWindow = i || window;
        const l = So(t)
          , u = Lu(l, this.transformPagePoint)
          , {point: c} = u
          , {timestamp: d} = Ae;
        this.history = [{
            ...c,
            timestamp: d
        }];
        const {onSessionStart: f} = n;
        f && f(t, Ou(u, this.history)),
        this.removeListeners = vo(Ns(this.contextWindow, "pointermove", this.handlePointerMove), Ns(this.contextWindow, "pointerup", this.handlePointerUp), Ns(this.contextWindow, "pointercancel", this.handlePointerUp)),
        a && this.startScrollTracking(a)
    }
    startScrollTracking(t) {
        let n = t.parentElement;
        for (; n; ) {
            const r = getComputedStyle(n);
            (yg.has(r.overflowX) || yg.has(r.overflowY)) && this.scrollPositions.set(n, {
                x: n.scrollLeft,
                y: n.scrollTop
            }),
            n = n.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
        window.addEventListener("scroll", this.onElementScroll, {
            capture: !0,
            passive: !0
        }),
        window.addEventListener("scroll", this.onWindowScroll, {
            passive: !0
        }),
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(t) {
        const n = this.scrollPositions.get(t);
        if (!n)
            return;
        const r = t === window
          , i = r ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: t.scrollLeft,
            y: t.scrollTop
        }
          , s = {
            x: i.x - n.x,
            y: i.y - n.y
        };
        s.x === 0 && s.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s.x,
        this.lastMoveEventInfo.point.y += s.y) : this.history.length > 0 && (this.history[0].x -= s.x,
        this.history[0].y -= s.y),
        this.scrollPositions.set(t, i),
        ie.update(this.updatePoint, !0))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        sr(this.updatePoint)
    }
}
function Lu(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function vg(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Ou({point: e}, t) {
    return {
        point: e,
        delta: vg(e, m1(t)),
        offset: vg(e, JM(t)),
        velocity: eD(t, .1)
    }
}
function JM(e) {
    return e[0]
}
function m1(e) {
    return e[e.length - 1]
}
function eD(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = m1(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > yt(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    r === e[0] && e.length > 2 && i.timestamp - r.timestamp > yt(t) * 2 && (r = e[1]);
    const s = pt(i.timestamp - r.timestamp);
    if (s === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
function tD(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? fe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? fe(n, e, r.max) : Math.min(e, n)),
    e
}
function xg(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function nD(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: xg(e.x, n, i),
        y: xg(e.y, t, r)
    }
}
function wg(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function rD(e, t) {
    return {
        x: wg(e.x, t.x),
        y: wg(e.y, t.y)
    }
}
function iD(e, t) {
    let n = .5;
    const r = We(e)
      , i = We(t);
    return i > r ? n = eo(t.min, t.max - r, e.min) : r > i && (n = eo(e.min, e.max - i, t.min)),
    Jt(0, 1, n)
}
function sD(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const md = .35;
function oD(e=md) {
    return e === !1 ? e = 0 : e === !0 && (e = md),
    {
        x: Sg(e, "left", "right"),
        y: Sg(e, "top", "bottom")
    }
}
function Sg(e, t, n) {
    return {
        min: Cg(e, t),
        max: Cg(e, n)
    }
}
function Cg(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const aD = new WeakMap;
class lD {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Ce(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1, distanceThreshold: r}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const s = d => {
            n && this.snapToCursor(So(d).point),
            this.stopAnimation()
        }
          , o = (d, f) => {
            const {drag: h, dragPropagation: v, onDragStart: g} = this.getProps();
            if (h && !v && (this.openDragLock && this.openDragLock(),
            this.openDragLock = I2(h),
            !this.openDragLock))
                return;
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            $t(p => {
                let m = this.getAxisMotionValue(p).get() || 0;
                if (qt.test(m)) {
                    const {projection: y} = this.visualElement;
                    if (y && y.layout) {
                        const C = y.layout.layoutBox[p];
                        C && (m = We(C) * (parseFloat(m) / 100))
                    }
                }
                this.originPoint[p] = m
            }
            ),
            g && ie.update( () => g(d, f), !1, !0),
            ad(this.visualElement, "transform");
            const {animationState: x} = this.visualElement;
            x && x.setActive("whileDrag", !0)
        }
          , a = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f;
            const {dragPropagation: h, dragDirectionLock: v, onDirectionLock: g, onDrag: x} = this.getProps();
            if (!h && !this.openDragLock)
                return;
            const {offset: p} = f;
            if (v && this.currentDirection === null) {
                this.currentDirection = cD(p),
                this.currentDirection !== null && g && g(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, p),
            this.updateAxis("y", f.point, p),
            this.visualElement.render(),
            x && ie.update( () => x(d, f), !1, !0)
        }
          , l = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.stop(d, f),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , u = () => {
            const {dragSnapToOrigin: d} = this.getProps();
            (d || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
            })
        }
          , {dragSnapToOrigin: c} = this.getProps();
        this.panSession = new p1(t,{
            onSessionStart: s,
            onStart: o,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            distanceThreshold: r,
            contextWindow: h1(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent
          , i = n || this.latestPanInfo
          , s = this.isDragging;
        if (this.cancel(),
        !s || !i || !r)
            return;
        const {velocity: o} = i;
        this.startAnimation(o);
        const {onDragEnd: a} = this.getProps();
        a && ie.postRender( () => a(r, i))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.endPanSession();
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
        this.panSession = void 0
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !qo(t, i, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = tD(o, this.constraints[t], this.elastic[t])),
        s.set(o)
    }
    resolveConstraints() {
        var s;
        const {dragConstraints: t, dragElastic: n} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout
          , i = this.constraints;
        t && qr(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = nD(r.layoutBox, t) : this.constraints = !1,
        this.elastic = oD(n),
        i !== this.constraints && !qr(t) && r && this.constraints && !this.hasMutatedConstraints && $t(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = sD(r.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !qr(t))
            return !1;
        const r = t.current;
        Bi(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
        const {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const s = dN(r, i.root, this.visualElement.getTransformPagePoint());
        let o = rD(i.layout.layoutBox, s);
        if (n) {
            const a = n(lN(o));
            this.hasMutatedConstraints = !!a,
            a && (o = Iw(a))
        }
        return o
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , u = $t(c => {
            if (!qo(c, n, this.currentDirection))
                return;
            let d = l && l[c] || {};
            o && (d = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6
              , h = i ? 40 : 1e7
              , v = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: f,
                bounceDamping: h,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...d
            };
            return this.startAxisValueAnimation(c, v)
        }
        );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return ad(this.visualElement, t),
        r.start(Yf(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        $t(t => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        $t(n => {
            const {drag: r} = this.getProps();
            if (!qo(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: a} = i.layout.layoutBox[n]
                  , l = s.get() || 0;
                s.set(t[n] - fe(o, a, .5) + l)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!qr(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        $t(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[o] = iD({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.constraints = !1,
        this.resolveConstraints(),
        $t(o => {
            if (!qo(o, t, null))
                return;
            const a = this.getAxisMotionValue(o)
              , {min: l, max: u} = this.constraints[o];
            a.set(fe(l, u, i[o]))
        }
        ),
        this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        aD.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Ns(t, "pointerdown", u => {
            const {drag: c, dragListener: d=!0} = this.getProps()
              , f = u.target
              , h = f !== t && $2(f);
            c && d && !h && this.start(u)
        }
        );
        let r;
        const i = () => {
            const {dragConstraints: u} = this.getProps();
            qr(u) && u.current && (this.constraints = this.resolveRefConstraints(),
            r || (r = uD(t, u.current, () => this.scalePositionWithinConstraints())))
        }
          , {projection: s} = this.visualElement
          , o = s.addEventListener("measure", i);
        s && !s.layout && (s.root && s.root.updateScroll(),
        s.updateLayout()),
        ie.read(i);
        const a = io(window, "resize", () => this.scalePositionWithinConstraints())
          , l = s.addEventListener("didUpdate", ({delta: u, hasLayoutChanged: c}) => {
            this.isDragging && c && ($t(d => {
                const f = this.getAxisMotionValue(d);
                f && (this.originPoint[d] += u[d].translate,
                f.set(f.get() + u[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            a(),
            n(),
            o(),
            l && l(),
            r && r()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: o=md, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: a
        }
    }
}
function Eg(e) {
    let t = !0;
    return () => {
        if (t) {
            t = !1;
            return
        }
        e()
    }
}
function uD(e, t, n) {
    const r = Nm(e, Eg(n))
      , i = Nm(t, Eg(n));
    return () => {
        r(),
        i()
    }
}
function qo(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function cD(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class dD extends dr {
    constructor(t) {
        super(t),
        this.removeGroupControls = gt,
        this.removeListeners = gt,
        this.controls = new lD(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || gt
    }
    update() {
        const {dragControls: t} = this.node.getProps()
          , {dragControls: n} = this.node.prevProps || {};
        t !== n && (this.removeGroupControls(),
        t && (this.removeGroupControls = t.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession()
    }
}
const Iu = e => (t, n) => {
    e && ie.update( () => e(t, n), !1, !0)
}
;
class fD extends dr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = gt
    }
    onPointerDown(t) {
        this.session = new p1(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: h1(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: Iu(t),
            onStart: Iu(n),
            onMove: Iu(r),
            onEnd: (s, o) => {
                delete this.session,
                i && ie.postRender( () => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Ns(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
let Vu = !1;
class hD extends w.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: s} = t;
        s && (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        Vu && s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })),
        va.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: s} = this.props
          , {projection: o} = r;
        return o && (o.isPresent = s,
        t.layoutDependency !== n && o.setOptions({
            ...o.options,
            layoutDependency: n
        }),
        Vu = !0,
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== s && (s ? o.promote() : o.relegate() || ie.postRender( () => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        Jf.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        Vu = !0,
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function g1(e) {
    const [t,n] = i1()
      , r = w.useContext(Df);
    return S.jsx(hD, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: w.useContext(d1),
        isPresent: t,
        safeToRemove: n
    })
}
const pD = {
    pan: {
        Feature: fD
    },
    drag: {
        Feature: dD,
        ProjectionNode: r1,
        MeasureLayout: g1
    }
};
function Pg(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
      , s = r[i];
    s && ie.postRender( () => s(t, So(t)))
}
class mD extends dr {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = F2(t, (n, r) => (Pg(this.node, r, "Start"),
        i => Pg(this.node, i, "End"))))
    }
    unmount() {}
}
class gD extends dr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = vo(io(this.node.current, "focus", () => this.onFocus()), io(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Tg(e, t, n) {
    const {props: r} = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
      , s = r[i];
    s && ie.postRender( () => s(t, So(t)))
}
class yD extends dr {
    mount() {
        const {current: t} = this.node;
        if (!t)
            return;
        const {globalTapTarget: n, propagate: r} = this.node.props;
        this.unmount = W2(t, (i, s) => (Tg(this.node, s, "Start"),
        (o, {success: a}) => Tg(this.node, o, a ? "End" : "Cancel")), {
            useGlobalTarget: n,
            stopPropagation: (r == null ? void 0 : r.tap) === !1
        })
    }
    unmount() {}
}
const gd = new WeakMap
  , Fu = new WeakMap
  , vD = e => {
    const t = gd.get(e.target);
    t && t(e)
}
  , xD = e => {
    e.forEach(vD)
}
;
function wD({root: e, ...t}) {
    const n = e || document;
    Fu.has(n) || Fu.set(n, {});
    const r = Fu.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(xD,{
        root: e,
        ...t
    })),
    r[i]
}
function SD(e, t, n) {
    const r = wD(t);
    return gd.set(e, n),
    r.observe(e),
    () => {
        gd.delete(e),
        r.unobserve(e)
    }
}
const CD = {
    some: 0,
    all: 1
};
class ED extends dr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: s} = t
          , o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : CD[i]
        }
          , a = l => {
            const {isIntersecting: u} = l;
            if (this.isInView === u || (this.isInView = u,
            s && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: d} = this.node.getProps()
              , f = u ? c : d;
            f && f(l)
        }
        ;
        return SD(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(PD(t, n)) && this.startObserver()
    }
    unmount() {}
}
function PD({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const TD = {
    inView: {
        Feature: ED
    },
    tap: {
        Feature: yD
    },
    focus: {
        Feature: gD
    },
    hover: {
        Feature: mD
    }
}
  , bD = {
    layout: {
        ProjectionNode: r1,
        MeasureLayout: g1
    }
}
  , kD = {
    ...XM,
    ...TD,
    ...pD,
    ...bD
}
  , _t = HM(kD, KM)
  , bg = [{
    label: "Products",
    href: "#products"
}, {
    label: "Applications",
    href: "#applications"
}, {
    label: "Find a Dealer",
    href: "#dealers"
}, {
    label: "Support",
    href: "#support"
}]
  , RD = () => {
    const [e,t] = w.useState(!1);
    return S.jsxs("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-steel-dark/95 backdrop-blur-md border-b border-steel/30",
        children: [S.jsxs("div", {
            className: "container mx-auto px-6 h-16 flex items-center justify-between",
            children: [S.jsxs(MR, {
                to: "/",
                className: "font-heading text-2xl font-bold tracking-tight text-secondary-foreground",
                children: ["FORGE", S.jsx("span", {
                    className: "text-primary",
                    children: "PRO"
                })]
            }), S.jsxs("div", {
                className: "hidden md:flex items-center gap-8",
                children: [bg.map(n => S.jsx("a", {
                    href: n.href,
                    className: "text-sm font-medium text-slate-warm hover:text-primary transition-colors tracking-wide uppercase",
                    children: n.label
                }, n.label)), S.jsx(_r, {
                    variant: "hero",
                    size: "sm",
                    children: "Request Quote"
                })]
            }), S.jsx("button", {
                className: "md:hidden text-secondary-foreground",
                onClick: () => t(!e),
                "aria-label": "Toggle menu",
                children: e ? S.jsx(R0, {
                    size: 24
                }) : S.jsx(rP, {
                    size: 24
                })
            })]
        }), S.jsx(wM, {
            children: e && S.jsx(_t.div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: "auto"
                },
                exit: {
                    opacity: 0,
                    height: 0
                },
                className: "md:hidden bg-steel-dark border-t border-steel/30",
                children: S.jsxs("div", {
                    className: "container mx-auto px-6 py-4 flex flex-col gap-4",
                    children: [bg.map(n => S.jsx("a", {
                        href: n.href,
                        className: "text-sm font-medium text-slate-warm hover:text-primary transition-colors tracking-wide uppercase py-2",
                        onClick: () => t(!1),
                        children: n.label
                    }, n.label)), S.jsx(_r, {
                        variant: "hero",
                        size: "sm",
                        className: "w-full",
                        children: "Request Quote"
                    })]
                })
            })
        })]
    })
}
  , AD = "/assets/hero-industrial-hxheivFD.jpg"
  , ND = () => S.jsxs("section", {
    className: "relative min-h-screen flex items-center justify-center overflow-hidden",
    children: [S.jsxs("div", {
        className: "absolute inset-0",
        children: [S.jsx("img", {
            src: AD,
            alt: "Heavy-duty industrial equipment at a construction site during golden hour",
            className: "w-full h-full object-cover",
            loading: "eager"
        }), S.jsx("div", {
            className: "absolute inset-0 bg-hero-overlay"
        })]
    }), S.jsx("div", {
        className: "relative z-10 container mx-auto px-6 pt-16",
        children: S.jsxs(_t.div, {
            initial: {
                opacity: 0,
                y: 40
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .8,
                ease: "easeOut"
            },
            className: "max-w-3xl",
            children: [S.jsxs("div", {
                className: "flex items-center gap-3 mb-6",
                children: [S.jsx("div", {
                    className: "h-px w-12 bg-primary"
                }), S.jsx("span", {
                    className: "text-primary font-heading text-sm font-semibold tracking-[0.2em] uppercase",
                    children: "Engineered for the Real World"
                })]
            }), S.jsxs("h1", {
                className: "font-heading text-5xl md:text-7xl font-bold leading-[0.95] mb-6 text-secondary-foreground",
                children: ["Industrial", S.jsx("br", {}), "Strength.", S.jsx("br", {}), S.jsx("span", {
                    className: "text-gradient-amber",
                    children: "Human Language."
                })]
            }), S.jsx("p", {
                className: "text-lg md:text-xl text-slate-warm max-w-xl mb-10 leading-relaxed",
                children: "Heavy‑duty products built to perform in the harshest conditions—explained in ways that make choosing the right one simple."
            }), S.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-4 mb-16",
                children: [S.jsxs(_r, {
                    variant: "hero",
                    size: "lg",
                    className: "gap-2",
                    children: ["Explore Products ", S.jsx(yf, {
                        size: 18
                    })]
                }), S.jsx(_r, {
                    variant: "heroOutline",
                    size: "lg",
                    children: "Find a Dealer"
                })]
            }), S.jsxs("div", {
                className: "flex flex-wrap gap-8",
                children: [S.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [S.jsx(sP, {
                        className: "text-primary",
                        size: 20
                    }), S.jsx("span", {
                        className: "text-sm text-slate-warm font-medium",
                        children: "5-Year Warranty"
                    })]
                }), S.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [S.jsx(oP, {
                        className: "text-primary",
                        size: 20
                    }), S.jsx("span", {
                        className: "text-sm text-slate-warm font-medium",
                        children: "ISO 9001 Certified"
                    })]
                }), S.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [S.jsx("div", {
                        className: "w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center",
                        children: S.jsx("div", {
                            className: "w-2 h-2 rounded-full bg-primary"
                        })
                    }), S.jsx("span", {
                        className: "text-sm text-slate-warm font-medium",
                        children: "500+ Dealers Worldwide"
                    })]
                })]
            })]
        })
    }), S.jsx(_t.div, {
        className: "absolute bottom-8 left-1/2 -translate-x-1/2",
        animate: {
            y: [0, 8, 0]
        },
        transition: {
            duration: 2,
            repeat: 1 / 0
        },
        children: S.jsx("div", {
            className: "w-6 h-10 rounded-full border-2 border-slate-warm/50 flex items-start justify-center p-1.5",
            children: S.jsx("div", {
                className: "w-1.5 h-3 rounded-full bg-primary"
            })
        })
    })]
})
  , y1 = "/assets/product-hydraulics-_beUuZmP.jpg"
  , MD = "/assets/product-generators-9UvSIKqO.jpg"
  , DD = "/assets/product-compressors-BXRUB_4J.jpg"
  , jD = "/assets/product-pumps-GOIVVxGH.jpg"
  , LD = [{
    title: "Hydraulic Systems",
    description: "Power units, cylinders, and valves for demanding applications.",
    image: y1,
    count: "24 Products"
}, {
    title: "Generator Sets",
    description: "Reliable power generation from 20kW to 2,000kW.",
    image: MD,
    count: "18 Products"
}, {
    title: "Air Compressors",
    description: "Industrial-grade compressed air for any worksite.",
    image: DD,
    count: "15 Products"
}, {
    title: "Pump Systems",
    description: "Centrifugal and positive displacement pumps for every fluid.",
    image: jD,
    count: "21 Products"
}]
  , OD = () => S.jsx("section", {
    id: "products",
    className: "py-24 bg-background",
    children: S.jsxs("div", {
        className: "container mx-auto px-6",
        children: [S.jsxs(_t.div, {
            initial: {
                opacity: 0,
                y: 30
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: .6
            },
            className: "mb-16",
            children: [S.jsxs("div", {
                className: "flex items-center gap-3 mb-4",
                children: [S.jsx("div", {
                    className: "h-px w-12 bg-primary"
                }), S.jsx("span", {
                    className: "text-primary font-heading text-sm font-semibold tracking-[0.2em] uppercase",
                    children: "Product Lines"
                })]
            }), S.jsx("h2", {
                className: "font-heading text-4xl md:text-5xl font-bold text-foreground mb-4",
                children: "Built to Perform"
            }), S.jsx("p", {
                className: "text-lg text-muted-foreground max-w-xl",
                children: "Browse our full range of heavy‑duty equipment. Every product is backed by decades of engineering and real‑world field testing."
            })]
        }), S.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
            children: LD.map( (e, t) => S.jsx(_t.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .5,
                    delay: t * .1
                },
                children: S.jsxs("div", {
                    className: "group relative bg-card rounded-lg overflow-hidden shadow-industrial hover:shadow-amber-glow transition-shadow duration-500 cursor-pointer",
                    children: [S.jsx("div", {
                        className: "aspect-square overflow-hidden",
                        children: S.jsx("img", {
                            src: e.image,
                            alt: e.title,
                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
                            loading: "lazy"
                        })
                    }), S.jsxs("div", {
                        className: "p-6",
                        children: [S.jsx("span", {
                            className: "text-xs font-heading text-primary font-semibold tracking-wider uppercase",
                            children: e.count
                        }), S.jsx("h3", {
                            className: "font-heading text-xl font-bold text-card-foreground mt-1 mb-2",
                            children: e.title
                        }), S.jsx("p", {
                            className: "text-sm text-muted-foreground mb-4",
                            children: e.description
                        }), S.jsxs("div", {
                            className: "flex items-center gap-2 text-primary font-heading text-sm font-semibold group-hover:gap-3 transition-all",
                            children: ["View Products ", S.jsx(yf, {
                                size: 16
                            })]
                        })]
                    })]
                })
            }, e.title))
        })]
    })
})
  , ID = [{
    label: "Max Pressure",
    value: "5,000 PSI"
}, {
    label: "Flow Rate",
    value: "60 GPM"
}, {
    label: "Motor",
    value: "75 HP Electric"
}, {
    label: "Reservoir",
    value: "100 Gallon"
}, {
    label: "Weight",
    value: "2,400 lbs"
}, {
    label: "Noise Level",
    value: "< 72 dB"
}]
  , VD = ["Continuous duty cycle rated", "Integrated thermal management", "Smart monitoring ready", "IP66 weather protection"]
  , FD = () => S.jsx("section", {
    className: "py-24 bg-steel-dark",
    children: S.jsx("div", {
        className: "container mx-auto px-6",
        children: S.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
            children: [S.jsxs(_t.div, {
                initial: {
                    opacity: 0,
                    x: -40
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .7
                },
                className: "relative",
                children: [S.jsx("div", {
                    className: "rounded-lg overflow-hidden",
                    children: S.jsx("img", {
                        src: y1,
                        alt: "HPU-7500X Hydraulic Power Unit",
                        className: "w-full h-auto"
                    })
                }), S.jsx("div", {
                    className: "absolute -bottom-4 -right-4 bg-primary rounded-lg px-6 py-3",
                    children: S.jsx("span", {
                        className: "font-heading text-primary-foreground font-bold text-lg",
                        children: "NEW"
                    })
                })]
            }), S.jsxs(_t.div, {
                initial: {
                    opacity: 0,
                    x: 40
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .7
                },
                children: [S.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [S.jsx("div", {
                        className: "h-px w-12 bg-primary"
                    }), S.jsx("span", {
                        className: "text-primary font-heading text-sm font-semibold tracking-[0.2em] uppercase",
                        children: "Featured Product"
                    })]
                }), S.jsx("h2", {
                    className: "font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-2",
                    children: "HPU‑7500X"
                }), S.jsx("p", {
                    className: "text-lg text-slate-warm mb-8",
                    children: "Hydraulic Power Unit — High‑flow, low‑noise, built for 24/7 operation in the toughest environments."
                }), S.jsx("div", {
                    className: "grid grid-cols-3 gap-4 mb-8",
                    children: ID.map(e => S.jsxs("div", {
                        className: "bg-steel/30 rounded-lg p-4",
                        children: [S.jsx("p", {
                            className: "text-xs text-slate-warm font-medium uppercase tracking-wider mb-1",
                            children: e.label
                        }), S.jsx("p", {
                            className: "font-heading text-lg font-bold text-secondary-foreground",
                            children: e.value
                        })]
                    }, e.label))
                }), S.jsx("div", {
                    className: "grid grid-cols-2 gap-3 mb-8",
                    children: VD.map(e => S.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [S.jsx(tP, {
                            size: 16,
                            className: "text-primary shrink-0"
                        }), S.jsx("span", {
                            className: "text-sm text-slate-warm",
                            children: e
                        })]
                    }, e))
                }), S.jsxs("div", {
                    className: "flex gap-4",
                    children: [S.jsx(_r, {
                        variant: "hero",
                        size: "lg",
                        children: "View Full Specs"
                    }), S.jsx(_r, {
                        variant: "steel",
                        size: "lg",
                        children: "Download Manual"
                    })]
                })]
            })]
        })
    })
})
  , _D = "/assets/story-mining-DYDw07cV.jpg"
  , zD = "/assets/story-water-BXyzCZVn.jpg"
  , BD = [{
    image: _D,
    tag: "Mining & Extraction",
    title: "Powering a 24/7 Open‑Pit Operation",
    summary: "How our HPU‑7500X reduced downtime by 40% in one of Australia's largest iron ore mines.",
    result: "40% less downtime"
}, {
    image: zD,
    tag: "Water & Utilities",
    title: "Municipal Pumping Station Overhaul",
    summary: "Replacing aging infrastructure with modern pump systems that cut energy costs by a third.",
    result: "33% energy savings"
}]
  , $D = () => S.jsx("section", {
    id: "applications",
    className: "py-24 bg-background",
    children: S.jsxs("div", {
        className: "container mx-auto px-6",
        children: [S.jsxs(_t.div, {
            initial: {
                opacity: 0,
                y: 30
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: .6
            },
            className: "mb-16",
            children: [S.jsxs("div", {
                className: "flex items-center gap-3 mb-4",
                children: [S.jsx("div", {
                    className: "h-px w-12 bg-primary"
                }), S.jsx("span", {
                    className: "text-primary font-heading text-sm font-semibold tracking-[0.2em] uppercase",
                    children: "Application Stories"
                })]
            }), S.jsx("h2", {
                className: "font-heading text-4xl md:text-5xl font-bold text-foreground mb-4",
                children: "Proven in the Field"
            }), S.jsx("p", {
                className: "text-lg text-muted-foreground max-w-xl",
                children: "Real projects, real results. See how our equipment performs where it matters most."
            })]
        }), S.jsx("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
            children: BD.map( (e, t) => S.jsx(_t.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .5,
                    delay: t * .15
                },
                children: S.jsxs("div", {
                    className: "group bg-card rounded-lg overflow-hidden shadow-industrial hover:shadow-amber-glow transition-shadow duration-500 cursor-pointer",
                    children: [S.jsxs("div", {
                        className: "relative aspect-video overflow-hidden",
                        children: [S.jsx("img", {
                            src: e.image,
                            alt: e.title,
                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
                            loading: "lazy"
                        }), S.jsx("div", {
                            className: "absolute top-4 left-4 bg-primary rounded px-3 py-1",
                            children: S.jsx("span", {
                                className: "font-heading text-xs font-semibold text-primary-foreground uppercase tracking-wider",
                                children: e.tag
                            })
                        }), S.jsx("div", {
                            className: "absolute bottom-4 right-4 bg-steel-dark/90 backdrop-blur-sm rounded px-4 py-2",
                            children: S.jsx("span", {
                                className: "font-heading text-sm font-bold text-primary",
                                children: e.result
                            })
                        })]
                    }), S.jsxs("div", {
                        className: "p-6",
                        children: [S.jsx("h3", {
                            className: "font-heading text-xl font-bold text-card-foreground mb-2",
                            children: e.title
                        }), S.jsx("p", {
                            className: "text-sm text-muted-foreground mb-4",
                            children: e.summary
                        }), S.jsxs("div", {
                            className: "flex items-center gap-2 text-primary font-heading text-sm font-semibold group-hover:gap-3 transition-all",
                            children: ["Read Full Story ", S.jsx(yf, {
                                size: 16
                            })]
                        })]
                    })]
                })
            }, e.title))
        })]
    })
})
  , UD = [{
    name: "Western Equipment Co.",
    location: "Phoenix, AZ",
    distance: "12 mi",
    phone: "(602) 555-0142"
}, {
    name: "Pacific Industrial Supply",
    location: "Los Angeles, CA",
    distance: "28 mi",
    phone: "(213) 555-0198"
}, {
    name: "Mountain States Machinery",
    location: "Denver, CO",
    distance: "45 mi",
    phone: "(303) 555-0167"
}]
  , WD = () => {
    const [e,t] = w.useState("");
    return S.jsx("section", {
        id: "dealers",
        className: "py-24 bg-steel-dark",
        children: S.jsx("div", {
            className: "container mx-auto px-6",
            children: S.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-16",
                children: [S.jsxs(_t.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .6
                    },
                    children: [S.jsxs("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [S.jsx("div", {
                            className: "h-px w-12 bg-primary"
                        }), S.jsx("span", {
                            className: "text-primary font-heading text-sm font-semibold tracking-[0.2em] uppercase",
                            children: "Dealer Network"
                        })]
                    }), S.jsx("h2", {
                        className: "font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-4",
                        children: "Find a Dealer Near You"
                    }), S.jsx("p", {
                        className: "text-lg text-slate-warm mb-8 max-w-md",
                        children: "Our authorized dealers provide expert guidance, installation support, and genuine parts. Enter your location to get started."
                    }), S.jsxs("div", {
                        className: "relative mb-8",
                        children: [S.jsx(iP, {
                            size: 18,
                            className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-warm"
                        }), S.jsx("input", {
                            type: "text",
                            placeholder: "Enter city, state, or ZIP code",
                            value: e,
                            onChange: n => t(n.target.value),
                            className: "w-full bg-steel/30 border border-steel/50 rounded-lg pl-12 pr-4 py-4 text-secondary-foreground placeholder:text-slate-warm font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        })]
                    }), S.jsx("div", {
                        className: "space-y-4",
                        children: UD.map(n => S.jsx("div", {
                            className: "bg-steel/20 border border-steel/30 rounded-lg p-5 hover:border-primary/50 transition-colors cursor-pointer",
                            children: S.jsxs("div", {
                                className: "flex items-start justify-between",
                                children: [S.jsxs("div", {
                                    children: [S.jsx("h4", {
                                        className: "font-heading font-bold text-secondary-foreground",
                                        children: n.name
                                    }), S.jsxs("div", {
                                        className: "flex items-center gap-2 mt-1",
                                        children: [S.jsx(Oc, {
                                            size: 14,
                                            className: "text-primary"
                                        }), S.jsx("span", {
                                            className: "text-sm text-slate-warm",
                                            children: n.location
                                        }), S.jsxs("span", {
                                            className: "text-xs text-slate-warm/60",
                                            children: ["• ", n.distance]
                                        })]
                                    })]
                                }), S.jsxs("div", {
                                    className: "flex items-center gap-2 text-sm text-slate-warm",
                                    children: [S.jsx(k0, {
                                        size: 14
                                    }), n.phone]
                                })]
                            })
                        }, n.name))
                    })]
                }), S.jsx(_t.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .6,
                        delay: .2
                    },
                    className: "flex items-center justify-center",
                    children: S.jsxs("div", {
                        className: "w-full aspect-square bg-steel/20 border border-steel/30 rounded-lg flex flex-col items-center justify-center gap-4",
                        children: [S.jsx(Oc, {
                            size: 48,
                            className: "text-steel-light"
                        }), S.jsx("p", {
                            className: "text-slate-warm font-heading text-sm tracking-wider uppercase",
                            children: "Interactive Map"
                        }), S.jsx("p", {
                            className: "text-slate-warm/60 text-sm",
                            children: "Map integration coming soon"
                        })]
                    })
                })]
            })
        })
    })
}
  , HD = () => S.jsx("footer", {
    className: "bg-steel-dark border-t border-steel/30 pt-16 pb-8",
    children: S.jsxs("div", {
        className: "container mx-auto px-6",
        children: [S.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12",
            children: [S.jsxs("div", {
                children: [S.jsxs("h3", {
                    className: "font-heading text-2xl font-bold text-secondary-foreground mb-4",
                    children: ["FORGE", S.jsx("span", {
                        className: "text-primary",
                        children: "PRO"
                    })]
                }), S.jsx("p", {
                    className: "text-sm text-slate-warm leading-relaxed mb-6",
                    children: "Industrial‑strength engineered products built for the real world. Trusted by operators and dealers worldwide."
                }), S.jsxs("div", {
                    className: "space-y-3",
                    children: [S.jsxs("div", {
                        className: "flex items-center gap-3 text-sm text-slate-warm",
                        children: [S.jsx(k0, {
                            size: 14,
                            className: "text-primary"
                        }), " 1‑800‑FORGE‑PRO"]
                    }), S.jsxs("div", {
                        className: "flex items-center gap-3 text-sm text-slate-warm",
                        children: [S.jsx(nP, {
                            size: 14,
                            className: "text-primary"
                        }), " info@forgepro.com"]
                    }), S.jsxs("div", {
                        className: "flex items-center gap-3 text-sm text-slate-warm",
                        children: [S.jsx(Oc, {
                            size: 14,
                            className: "text-primary"
                        }), " Houston, TX"]
                    })]
                })]
            }), S.jsxs("div", {
                children: [S.jsx("h4", {
                    className: "font-heading font-semibold text-secondary-foreground mb-4 text-sm uppercase tracking-wider",
                    children: "Products"
                }), S.jsx("ul", {
                    className: "space-y-2",
                    children: ["Hydraulic Systems", "Generator Sets", "Air Compressors", "Pump Systems", "Compare Products"].map(e => S.jsx("li", {
                        children: S.jsx("a", {
                            href: "#",
                            className: "text-sm text-slate-warm hover:text-primary transition-colors",
                            children: e
                        })
                    }, e))
                })]
            }), S.jsxs("div", {
                children: [S.jsx("h4", {
                    className: "font-heading font-semibold text-secondary-foreground mb-4 text-sm uppercase tracking-wider",
                    children: "Resources"
                }), S.jsx("ul", {
                    className: "space-y-2",
                    children: ["Application Stories", "Technical Manuals", "CAD Downloads", "Product Videos", "FAQ"].map(e => S.jsx("li", {
                        children: S.jsx("a", {
                            href: "#",
                            className: "text-sm text-slate-warm hover:text-primary transition-colors",
                            children: e
                        })
                    }, e))
                })]
            }), S.jsxs("div", {
                children: [S.jsx("h4", {
                    className: "font-heading font-semibold text-secondary-foreground mb-4 text-sm uppercase tracking-wider",
                    children: "Company"
                }), S.jsx("ul", {
                    className: "space-y-2",
                    children: ["About Us", "Careers", "Dealer Portal", "Contact", "Privacy Policy"].map(e => S.jsx("li", {
                        children: S.jsx("a", {
                            href: "#",
                            className: "text-sm text-slate-warm hover:text-primary transition-colors",
                            children: e
                        })
                    }, e))
                })]
            })]
        }), S.jsxs("div", {
            className: "border-t border-steel/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4",
            children: [S.jsx("p", {
                className: "text-xs text-slate-warm/60",
                children: "© 2026 ForgePro Industries. All rights reserved."
            }), S.jsx("p", {
                className: "text-xs text-slate-warm/60",
                children: "ISO 9001 · ISO 14001 · ASME Certified"
            })]
        })]
    })
})
  , KD = () => S.jsxs("div", {
    className: "min-h-screen",
    children: [S.jsx(RD, {}), S.jsx(ND, {}), S.jsx(OD, {}), S.jsx(FD, {}), S.jsx($D, {}), S.jsx(WD, {}), S.jsx(HD, {})]
})
  , GD = () => {
    const e = yo();
    return w.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    S.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: S.jsxs("div", {
            className: "text-center",
            children: [S.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), S.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), S.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , QD = new Ak
  , YD = () => S.jsx(Mk, {
    client: QD,
    children: S.jsxs(sk, {
        children: [S.jsx($P, {}), S.jsx(wT, {}), S.jsx(RR, {
            children: S.jsxs(SR, {
                children: [S.jsx(Hc, {
                    path: "/",
                    element: S.jsx(KD, {})
                }), S.jsx(Hc, {
                    path: "*",
                    element: S.jsx(GD, {})
                })]
            })
        })]
    })
});
Xv(document.getElementById("root")).render(S.jsx(YD, {}));
