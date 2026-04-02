import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// node_modules/.pnpm/mqtt@5.15.1/node_modules/mqtt/dist/mqtt.esm.js
var as = Object.defineProperty;
var Yb = Object.getOwnPropertyDescriptor;
var Jb = Object.getOwnPropertyNames;
var Xb = Object.prototype.hasOwnProperty;
var ze = (t, e) => () => (t && (e = t(t = 0)), e);
var j = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var Kr = (t, e) => {
  for (var r in e) as(t, r, { get: e[r], enumerable: true });
};
var Zb = (t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function") for (let i of Jb(e)) !Xb.call(t, i) && i !== r && as(t, i, { get: () => e[i], enumerable: !(n = Yb(e, i)) || n.enumerable });
  return t;
};
var me = (t) => Zb(as({}, "__esModule", { value: true }), t);
var A = ze(() => {
});
var N = {};
Kr(N, { _debugEnd: () => Kc, _debugProcess: () => zc, _events: () => ff, _eventsCount: () => hf, _exiting: () => Pc, _fatalExceptions: () => $c, _getActiveHandles: () => Cc, _getActiveRequests: () => kc, _kill: () => Mc, _linkedBinding: () => xc, _maxListeners: () => cf, _preload_modules: () => af, _rawDebug: () => Ac, _startProfilerIdleNotifier: () => Qc, _stopProfilerIdleNotifier: () => Yc, _tickCallback: () => Gc, abort: () => ef, addListener: () => df, allowedNodeEnvironmentFlags: () => jc, arch: () => cc, argv: () => dc, argv0: () => sf, assert: () => Fc, binding: () => wc, browser: () => Ec, chdir: () => vc, config: () => Oc, cpuUsage: () => Ri, cwd: () => _c, debugPort: () => of, default: () => Sf, dlopen: () => Rc, domain: () => Tc, emit: () => wf, emitWarning: () => bc, env: () => hc, execArgv: () => pc, execPath: () => nf, exit: () => Uc, features: () => Wc, hasUncaughtExceptionCaptureCallback: () => Vc, hrtime: () => Oi, kill: () => Lc, listeners: () => vf, memoryUsage: () => qc, moduleLoadList: () => Ic, nextTick: () => ac, off: () => yf, on: () => Nt, once: () => pf, openStdin: () => Dc, pid: () => tf, platform: () => fc, ppid: () => rf, prependListener: () => mf, prependOnceListener: () => _f, reallyExit: () => Bc, release: () => Sc, removeAllListeners: () => bf, removeListener: () => gf, resourceUsage: () => Nc, setSourceMapsEnabled: () => uf, setUncaughtExceptionCaptureCallback: () => Hc, stderr: () => Xc, stdin: () => Zc, stdout: () => Jc, title: () => lc, umask: () => mc, uptime: () => lf, version: () => yc, versions: () => gc });
function cs(t) {
  throw new Error("Node.js process " + t + " is not supported by JSPM core outside of Node.js");
}
function ew() {
  !Qr || !wr || (Qr = false, wr.length ? Mt = wr.concat(Mt) : Pi = -1, Mt.length && sc());
}
function sc() {
  if (!Qr) {
    var t = setTimeout(ew, 0);
    Qr = true;
    for (var e = Mt.length; e; ) {
      for (wr = Mt, Mt = []; ++Pi < e; ) wr && wr[Pi].run();
      Pi = -1, e = Mt.length;
    }
    wr = null, Qr = false, clearTimeout(t);
  }
}
function ac(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
  Mt.push(new uc(t, e)), Mt.length === 1 && !Qr && setTimeout(sc, 0);
}
function uc(t, e) {
  this.fun = t, this.array = e;
}
function Ue() {
}
function xc(t) {
  cs("_linkedBinding");
}
function Rc(t) {
  cs("dlopen");
}
function kc() {
  return [];
}
function Cc() {
  return [];
}
function Fc(t, e) {
  if (!t) throw new Error(e || "assertion error");
}
function Vc() {
  return false;
}
function lf() {
  return Jt.now() / 1e3;
}
function Oi(t) {
  var e = Math.floor((Date.now() - Jt.now()) * 1e-3), r = Jt.now() * 1e-3, n = Math.floor(r) + e, i = Math.floor(r % 1 * 1e9);
  return t && (n = n - t[0], i = i - t[1], i < 0 && (n--, i += ls)), [n, i];
}
function Nt() {
  return Sf;
}
function vf(t) {
  return [];
}
var Mt;
var Qr;
var wr;
var Pi;
var lc;
var cc;
var fc;
var hc;
var dc;
var pc;
var yc;
var gc;
var bc;
var wc;
var mc;
var _c;
var vc;
var Sc;
var Ec;
var Ac;
var Ic;
var Tc;
var Pc;
var Oc;
var Bc;
var Mc;
var Ri;
var Nc;
var qc;
var Lc;
var Uc;
var Dc;
var jc;
var Wc;
var $c;
var Hc;
var Gc;
var zc;
var Kc;
var Qc;
var Yc;
var Jc;
var Xc;
var Zc;
var ef;
var tf;
var rf;
var nf;
var of;
var sf;
var af;
var uf;
var Jt;
var us;
var ls;
var cf;
var ff;
var hf;
var df;
var pf;
var yf;
var gf;
var bf;
var wf;
var mf;
var _f;
var Sf;
var Ef = ze(() => {
  A();
  x();
  I();
  Mt = [], Qr = false, Pi = -1;
  uc.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  lc = "browser", cc = "x64", fc = "browser", hc = { PATH: "/usr/bin", LANG: typeof navigator < "u" ? navigator.language + ".UTF-8" : void 0, PWD: "/", HOME: "/home", TMP: "/tmp" }, dc = ["/usr/bin/node"], pc = [], yc = "v16.8.0", gc = {}, bc = function(t, e) {
    console.warn((e ? e + ": " : "") + t);
  }, wc = function(t) {
    cs("binding");
  }, mc = function(t) {
    return 0;
  }, _c = function() {
    return "/";
  }, vc = function(t) {
  }, Sc = { name: "node", sourceUrl: "", headersUrl: "", libUrl: "" };
  Ec = true, Ac = Ue, Ic = [];
  Tc = {}, Pc = false, Oc = {};
  Bc = Ue, Mc = Ue, Ri = function() {
    return {};
  }, Nc = Ri, qc = Ri, Lc = Ue, Uc = Ue, Dc = Ue, jc = {};
  Wc = { inspector: false, debug: false, uv: false, ipv6: false, tls_alpn: false, tls_sni: false, tls_ocsp: false, tls: false, cached_builtins: true }, $c = Ue, Hc = Ue;
  Gc = Ue, zc = Ue, Kc = Ue, Qc = Ue, Yc = Ue, Jc = void 0, Xc = void 0, Zc = void 0, ef = Ue, tf = 2, rf = 1, nf = "/bin/usr/node", of = 9229, sf = "node", af = [], uf = Ue, Jt = { now: typeof performance < "u" ? performance.now.bind(performance) : void 0, timing: typeof performance < "u" ? performance.timing : void 0 };
  Jt.now === void 0 && (us = Date.now(), Jt.timing && Jt.timing.navigationStart && (us = Jt.timing.navigationStart), Jt.now = () => Date.now() - us);
  ls = 1e9;
  Oi.bigint = function(t) {
    var e = Oi(t);
    return typeof BigInt > "u" ? e[0] * ls + e[1] : BigInt(e[0] * ls) + BigInt(e[1]);
  };
  cf = 10, ff = {}, hf = 0;
  df = Nt, pf = Nt, yf = Nt, gf = Nt, bf = Nt, wf = Ue, mf = Nt, _f = Nt;
  Sf = { version: yc, versions: gc, arch: cc, platform: fc, browser: Ec, release: Sc, _rawDebug: Ac, moduleLoadList: Ic, binding: wc, _linkedBinding: xc, _events: ff, _eventsCount: hf, _maxListeners: cf, on: Nt, addListener: df, once: pf, off: yf, removeListener: gf, removeAllListeners: bf, emit: wf, prependListener: mf, prependOnceListener: _f, listeners: vf, domain: Tc, _exiting: Pc, config: Oc, dlopen: Rc, uptime: lf, _getActiveRequests: kc, _getActiveHandles: Cc, reallyExit: Bc, _kill: Mc, cpuUsage: Ri, resourceUsage: Nc, memoryUsage: qc, kill: Lc, exit: Uc, openStdin: Dc, allowedNodeEnvironmentFlags: jc, assert: Fc, features: Wc, _fatalExceptions: $c, setUncaughtExceptionCaptureCallback: Hc, hasUncaughtExceptionCaptureCallback: Vc, emitWarning: bc, nextTick: ac, _tickCallback: Gc, _debugProcess: zc, _debugEnd: Kc, _startProfilerIdleNotifier: Qc, _stopProfilerIdleNotifier: Yc, stdout: Jc, stdin: Zc, stderr: Xc, abort: ef, umask: mc, chdir: vc, cwd: _c, env: hc, title: lc, argv: dc, execArgv: pc, pid: tf, ppid: rf, execPath: nf, debugPort: of, hrtime: Oi, argv0: sf, _preload_modules: af, setSourceMapsEnabled: uf };
});
var I = ze(() => {
  Ef();
});
function tw() {
  if (Af) return On;
  Af = true, On.byteLength = a, On.toByteArray = f, On.fromByteArray = m;
  for (var t = [], e = [], r = typeof Uint8Array < "u" ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, s = n.length; i < s; ++i) t[i] = n[i], e[n.charCodeAt(i)] = i;
  e[45] = 62, e[95] = 63;
  function o(g) {
    var P = g.length;
    if (P % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var S = g.indexOf("=");
    S === -1 && (S = P);
    var b = S === P ? 0 : 4 - S % 4;
    return [S, b];
  }
  function a(g) {
    var P = o(g), S = P[0], b = P[1];
    return (S + b) * 3 / 4 - b;
  }
  function c(g, P, S) {
    return (P + S) * 3 / 4 - S;
  }
  function f(g) {
    var P, S = o(g), b = S[0], w = S[1], _ = new r(c(g, b, w)), R = 0, T = w > 0 ? b - 4 : b, y;
    for (y = 0; y < T; y += 4) P = e[g.charCodeAt(y)] << 18 | e[g.charCodeAt(y + 1)] << 12 | e[g.charCodeAt(y + 2)] << 6 | e[g.charCodeAt(y + 3)], _[R++] = P >> 16 & 255, _[R++] = P >> 8 & 255, _[R++] = P & 255;
    return w === 2 && (P = e[g.charCodeAt(y)] << 2 | e[g.charCodeAt(y + 1)] >> 4, _[R++] = P & 255), w === 1 && (P = e[g.charCodeAt(y)] << 10 | e[g.charCodeAt(y + 1)] << 4 | e[g.charCodeAt(y + 2)] >> 2, _[R++] = P >> 8 & 255, _[R++] = P & 255), _;
  }
  function h(g) {
    return t[g >> 18 & 63] + t[g >> 12 & 63] + t[g >> 6 & 63] + t[g & 63];
  }
  function d(g, P, S) {
    for (var b, w = [], _ = P; _ < S; _ += 3) b = (g[_] << 16 & 16711680) + (g[_ + 1] << 8 & 65280) + (g[_ + 2] & 255), w.push(h(b));
    return w.join("");
  }
  function m(g) {
    for (var P, S = g.length, b = S % 3, w = [], _ = 16383, R = 0, T = S - b; R < T; R += _) w.push(d(g, R, R + _ > T ? T : R + _));
    return b === 1 ? (P = g[S - 1], w.push(t[P >> 2] + t[P << 4 & 63] + "==")) : b === 2 && (P = (g[S - 2] << 8) + g[S - 1], w.push(t[P >> 10] + t[P >> 4 & 63] + t[P << 2 & 63] + "=")), w.join("");
  }
  return On;
}
function rw() {
  if (If) return ki;
  If = true;
  return ki.read = function(t, e, r, n, i) {
    var s, o, a = i * 8 - n - 1, c = (1 << a) - 1, f = c >> 1, h = -7, d = r ? i - 1 : 0, m = r ? -1 : 1, g = t[e + d];
    for (d += m, s = g & (1 << -h) - 1, g >>= -h, h += a; h > 0; s = s * 256 + t[e + d], d += m, h -= 8) ;
    for (o = s & (1 << -h) - 1, s >>= -h, h += n; h > 0; o = o * 256 + t[e + d], d += m, h -= 8) ;
    if (s === 0) s = 1 - f;
    else {
      if (s === c) return o ? NaN : (g ? -1 : 1) * (1 / 0);
      o = o + Math.pow(2, n), s = s - f;
    }
    return (g ? -1 : 1) * o * Math.pow(2, s - n);
  }, ki.write = function(t, e, r, n, i, s) {
    var o, a, c, f = s * 8 - i - 1, h = (1 << f) - 1, d = h >> 1, m = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, g = n ? 0 : s - 1, P = n ? 1 : -1, S = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, o = h) : (o = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -o)) < 1 && (o--, c *= 2), o + d >= 1 ? e += m / c : e += m * Math.pow(2, 1 - d), e * c >= 2 && (o++, c /= 2), o + d >= h ? (a = 0, o = h) : o + d >= 1 ? (a = (e * c - 1) * Math.pow(2, i), o = o + d) : (a = e * Math.pow(2, d - 1) * Math.pow(2, i), o = 0)); i >= 8; t[r + g] = a & 255, g += P, a /= 256, i -= 8) ;
    for (o = o << i | a, f += i; f > 0; t[r + g] = o & 255, g += P, o /= 256, f -= 8) ;
    t[r + g - P] |= S * 128;
  }, ki;
}
function Tf() {
  if (xf) return mr;
  xf = true;
  let t = tw(), e = rw(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom") : null;
  mr.Buffer = o, mr.SlowBuffer = w, mr.INSPECT_MAX_BYTES = 50;
  let n = 2147483647;
  mr.kMaxLength = n, o.TYPED_ARRAY_SUPPORT = i(), !o.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function i() {
    try {
      let p = new Uint8Array(1), u = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(p, u), p.foo() === 42;
    } catch {
      return false;
    }
  }
  Object.defineProperty(o.prototype, "parent", { enumerable: true, get: function() {
    if (o.isBuffer(this)) return this.buffer;
  } }), Object.defineProperty(o.prototype, "offset", { enumerable: true, get: function() {
    if (o.isBuffer(this)) return this.byteOffset;
  } });
  function s(p) {
    if (p > n) throw new RangeError('The value "' + p + '" is invalid for option "size"');
    let u = new Uint8Array(p);
    return Object.setPrototypeOf(u, o.prototype), u;
  }
  function o(p, u, l) {
    if (typeof p == "number") {
      if (typeof u == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
      return h(p);
    }
    return a(p, u, l);
  }
  o.poolSize = 8192;
  function a(p, u, l) {
    if (typeof p == "string") return d(p, u);
    if (ArrayBuffer.isView(p)) return g(p);
    if (p == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p);
    if (Ze(p, ArrayBuffer) || p && Ze(p.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Ze(p, SharedArrayBuffer) || p && Ze(p.buffer, SharedArrayBuffer))) return P(p, u, l);
    if (typeof p == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    let E = p.valueOf && p.valueOf();
    if (E != null && E !== p) return o.from(E, u, l);
    let C = S(p);
    if (C) return C;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof p[Symbol.toPrimitive] == "function") return o.from(p[Symbol.toPrimitive]("string"), u, l);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p);
  }
  o.from = function(p, u, l) {
    return a(p, u, l);
  }, Object.setPrototypeOf(o.prototype, Uint8Array.prototype), Object.setPrototypeOf(o, Uint8Array);
  function c(p) {
    if (typeof p != "number") throw new TypeError('"size" argument must be of type number');
    if (p < 0) throw new RangeError('The value "' + p + '" is invalid for option "size"');
  }
  function f(p, u, l) {
    return c(p), p <= 0 ? s(p) : u !== void 0 ? typeof l == "string" ? s(p).fill(u, l) : s(p).fill(u) : s(p);
  }
  o.alloc = function(p, u, l) {
    return f(p, u, l);
  };
  function h(p) {
    return c(p), s(p < 0 ? 0 : b(p) | 0);
  }
  o.allocUnsafe = function(p) {
    return h(p);
  }, o.allocUnsafeSlow = function(p) {
    return h(p);
  };
  function d(p, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !o.isEncoding(u)) throw new TypeError("Unknown encoding: " + u);
    let l = _(p, u) | 0, E = s(l), C = E.write(p, u);
    return C !== l && (E = E.slice(0, C)), E;
  }
  function m(p) {
    let u = p.length < 0 ? 0 : b(p.length) | 0, l = s(u);
    for (let E = 0; E < u; E += 1) l[E] = p[E] & 255;
    return l;
  }
  function g(p) {
    if (Ze(p, Uint8Array)) {
      let u = new Uint8Array(p);
      return P(u.buffer, u.byteOffset, u.byteLength);
    }
    return m(p);
  }
  function P(p, u, l) {
    if (u < 0 || p.byteLength < u) throw new RangeError('"offset" is outside of buffer bounds');
    if (p.byteLength < u + (l || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let E;
    return u === void 0 && l === void 0 ? E = new Uint8Array(p) : l === void 0 ? E = new Uint8Array(p, u) : E = new Uint8Array(p, u, l), Object.setPrototypeOf(E, o.prototype), E;
  }
  function S(p) {
    if (o.isBuffer(p)) {
      let u = b(p.length) | 0, l = s(u);
      return l.length === 0 || p.copy(l, 0, 0, u), l;
    }
    if (p.length !== void 0) return typeof p.length != "number" || Tn(p.length) ? s(0) : m(p);
    if (p.type === "Buffer" && Array.isArray(p.data)) return m(p.data);
  }
  function b(p) {
    if (p >= n) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n.toString(16) + " bytes");
    return p | 0;
  }
  function w(p) {
    return +p != p && (p = 0), o.alloc(+p);
  }
  o.isBuffer = function(u) {
    return u != null && u._isBuffer === true && u !== o.prototype;
  }, o.compare = function(u, l) {
    if (Ze(u, Uint8Array) && (u = o.from(u, u.offset, u.byteLength)), Ze(l, Uint8Array) && (l = o.from(l, l.offset, l.byteLength)), !o.isBuffer(u) || !o.isBuffer(l)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (u === l) return 0;
    let E = u.length, C = l.length;
    for (let q = 0, $ = Math.min(E, C); q < $; ++q) if (u[q] !== l[q]) {
      E = u[q], C = l[q];
      break;
    }
    return E < C ? -1 : C < E ? 1 : 0;
  }, o.isEncoding = function(u) {
    switch (String(u).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  }, o.concat = function(u, l) {
    if (!Array.isArray(u)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (u.length === 0) return o.alloc(0);
    let E;
    if (l === void 0) for (l = 0, E = 0; E < u.length; ++E) l += u[E].length;
    let C = o.allocUnsafe(l), q = 0;
    for (E = 0; E < u.length; ++E) {
      let $ = u[E];
      if (Ze($, Uint8Array)) q + $.length > C.length ? (o.isBuffer($) || ($ = o.from($)), $.copy(C, q)) : Uint8Array.prototype.set.call(C, $, q);
      else if (o.isBuffer($)) $.copy(C, q);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      q += $.length;
    }
    return C;
  };
  function _(p, u) {
    if (o.isBuffer(p)) return p.length;
    if (ArrayBuffer.isView(p) || Ze(p, ArrayBuffer)) return p.byteLength;
    if (typeof p != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof p);
    let l = p.length, E = arguments.length > 2 && arguments[2] === true;
    if (!E && l === 0) return 0;
    let C = false;
    for (; ; ) switch (u) {
      case "ascii":
      case "latin1":
      case "binary":
        return l;
      case "utf8":
      case "utf-8":
        return Ct(p).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return l * 2;
      case "hex":
        return l >>> 1;
      case "base64":
        return Ii(p).length;
      default:
        if (C) return E ? -1 : Ct(p).length;
        u = ("" + u).toLowerCase(), C = true;
    }
  }
  o.byteLength = _;
  function R(p, u, l) {
    let E = false;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((l === void 0 || l > this.length) && (l = this.length), l <= 0) || (l >>>= 0, u >>>= 0, l <= u)) return "";
    for (p || (p = "utf8"); ; ) switch (p) {
      case "hex":
        return V(this, u, l);
      case "utf8":
      case "utf-8":
        return H(this, u, l);
      case "ascii":
        return ee(this, u, l);
      case "latin1":
      case "binary":
        return G(this, u, l);
      case "base64":
        return W(this, u, l);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return te(this, u, l);
      default:
        if (E) throw new TypeError("Unknown encoding: " + p);
        p = (p + "").toLowerCase(), E = true;
    }
  }
  o.prototype._isBuffer = true;
  function T(p, u, l) {
    let E = p[u];
    p[u] = p[l], p[l] = E;
  }
  o.prototype.swap16 = function() {
    let u = this.length;
    if (u % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let l = 0; l < u; l += 2) T(this, l, l + 1);
    return this;
  }, o.prototype.swap32 = function() {
    let u = this.length;
    if (u % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let l = 0; l < u; l += 4) T(this, l, l + 3), T(this, l + 1, l + 2);
    return this;
  }, o.prototype.swap64 = function() {
    let u = this.length;
    if (u % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let l = 0; l < u; l += 8) T(this, l, l + 7), T(this, l + 1, l + 6), T(this, l + 2, l + 5), T(this, l + 3, l + 4);
    return this;
  }, o.prototype.toString = function() {
    let u = this.length;
    return u === 0 ? "" : arguments.length === 0 ? H(this, 0, u) : R.apply(this, arguments);
  }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(u) {
    if (!o.isBuffer(u)) throw new TypeError("Argument must be a Buffer");
    return this === u ? true : o.compare(this, u) === 0;
  }, o.prototype.inspect = function() {
    let u = "", l = mr.INSPECT_MAX_BYTES;
    return u = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (u += " ... "), "<Buffer " + u + ">";
  }, r && (o.prototype[r] = o.prototype.inspect), o.prototype.compare = function(u, l, E, C, q) {
    if (Ze(u, Uint8Array) && (u = o.from(u, u.offset, u.byteLength)), !o.isBuffer(u)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u);
    if (l === void 0 && (l = 0), E === void 0 && (E = u ? u.length : 0), C === void 0 && (C = 0), q === void 0 && (q = this.length), l < 0 || E > u.length || C < 0 || q > this.length) throw new RangeError("out of range index");
    if (C >= q && l >= E) return 0;
    if (C >= q) return -1;
    if (l >= E) return 1;
    if (l >>>= 0, E >>>= 0, C >>>= 0, q >>>= 0, this === u) return 0;
    let $ = q - C, k = E - l, B = Math.min($, k), re = this.slice(C, q), ie = u.slice(l, E);
    for (let oe = 0; oe < B; ++oe) if (re[oe] !== ie[oe]) {
      $ = re[oe], k = ie[oe];
      break;
    }
    return $ < k ? -1 : k < $ ? 1 : 0;
  };
  function y(p, u, l, E, C) {
    if (p.length === 0) return -1;
    if (typeof l == "string" ? (E = l, l = 0) : l > 2147483647 ? l = 2147483647 : l < -2147483648 && (l = -2147483648), l = +l, Tn(l) && (l = C ? 0 : p.length - 1), l < 0 && (l = p.length + l), l >= p.length) {
      if (C) return -1;
      l = p.length - 1;
    } else if (l < 0) if (C) l = 0;
    else return -1;
    if (typeof u == "string" && (u = o.from(u, E)), o.isBuffer(u)) return u.length === 0 ? -1 : O(p, u, l, E, C);
    if (typeof u == "number") return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? C ? Uint8Array.prototype.indexOf.call(p, u, l) : Uint8Array.prototype.lastIndexOf.call(p, u, l) : O(p, [u], l, E, C);
    throw new TypeError("val must be string, number or Buffer");
  }
  function O(p, u, l, E, C) {
    let q = 1, $ = p.length, k = u.length;
    if (E !== void 0 && (E = String(E).toLowerCase(), E === "ucs2" || E === "ucs-2" || E === "utf16le" || E === "utf-16le")) {
      if (p.length < 2 || u.length < 2) return -1;
      q = 2, $ /= 2, k /= 2, l /= 2;
    }
    function B(ie, oe) {
      return q === 1 ? ie[oe] : ie.readUInt16BE(oe * q);
    }
    let re;
    if (C) {
      let ie = -1;
      for (re = l; re < $; re++) if (B(p, re) === B(u, ie === -1 ? 0 : re - ie)) {
        if (ie === -1 && (ie = re), re - ie + 1 === k) return ie * q;
      } else ie !== -1 && (re -= re - ie), ie = -1;
    } else for (l + k > $ && (l = $ - k), re = l; re >= 0; re--) {
      let ie = true;
      for (let oe = 0; oe < k; oe++) if (B(p, re + oe) !== B(u, oe)) {
        ie = false;
        break;
      }
      if (ie) return re;
    }
    return -1;
  }
  o.prototype.includes = function(u, l, E) {
    return this.indexOf(u, l, E) !== -1;
  }, o.prototype.indexOf = function(u, l, E) {
    return y(this, u, l, E, true);
  }, o.prototype.lastIndexOf = function(u, l, E) {
    return y(this, u, l, E, false);
  };
  function v(p, u, l, E) {
    l = Number(l) || 0;
    let C = p.length - l;
    E ? (E = Number(E), E > C && (E = C)) : E = C;
    let q = u.length;
    E > q / 2 && (E = q / 2);
    let $;
    for ($ = 0; $ < E; ++$) {
      let k = parseInt(u.substr($ * 2, 2), 16);
      if (Tn(k)) return $;
      p[l + $] = k;
    }
    return $;
  }
  function M(p, u, l, E) {
    return Vr(Ct(u, p.length - l), p, l, E);
  }
  function F(p, u, l, E) {
    return Vr(Bt(u), p, l, E);
  }
  function U(p, u, l, E) {
    return Vr(Ii(u), p, l, E);
  }
  function Q(p, u, l, E) {
    return Vr(xn(u, p.length - l), p, l, E);
  }
  o.prototype.write = function(u, l, E, C) {
    if (l === void 0) C = "utf8", E = this.length, l = 0;
    else if (E === void 0 && typeof l == "string") C = l, E = this.length, l = 0;
    else if (isFinite(l)) l = l >>> 0, isFinite(E) ? (E = E >>> 0, C === void 0 && (C = "utf8")) : (C = E, E = void 0);
    else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    let q = this.length - l;
    if ((E === void 0 || E > q) && (E = q), u.length > 0 && (E < 0 || l < 0) || l > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    C || (C = "utf8");
    let $ = false;
    for (; ; ) switch (C) {
      case "hex":
        return v(this, u, l, E);
      case "utf8":
      case "utf-8":
        return M(this, u, l, E);
      case "ascii":
      case "latin1":
      case "binary":
        return F(this, u, l, E);
      case "base64":
        return U(this, u, l, E);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Q(this, u, l, E);
      default:
        if ($) throw new TypeError("Unknown encoding: " + C);
        C = ("" + C).toLowerCase(), $ = true;
    }
  }, o.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function W(p, u, l) {
    return u === 0 && l === p.length ? t.fromByteArray(p) : t.fromByteArray(p.slice(u, l));
  }
  function H(p, u, l) {
    l = Math.min(p.length, l);
    let E = [], C = u;
    for (; C < l; ) {
      let q = p[C], $ = null, k = q > 239 ? 4 : q > 223 ? 3 : q > 191 ? 2 : 1;
      if (C + k <= l) {
        let B, re, ie, oe;
        switch (k) {
          case 1:
            q < 128 && ($ = q);
            break;
          case 2:
            B = p[C + 1], (B & 192) === 128 && (oe = (q & 31) << 6 | B & 63, oe > 127 && ($ = oe));
            break;
          case 3:
            B = p[C + 1], re = p[C + 2], (B & 192) === 128 && (re & 192) === 128 && (oe = (q & 15) << 12 | (B & 63) << 6 | re & 63, oe > 2047 && (oe < 55296 || oe > 57343) && ($ = oe));
            break;
          case 4:
            B = p[C + 1], re = p[C + 2], ie = p[C + 3], (B & 192) === 128 && (re & 192) === 128 && (ie & 192) === 128 && (oe = (q & 15) << 18 | (B & 63) << 12 | (re & 63) << 6 | ie & 63, oe > 65535 && oe < 1114112 && ($ = oe));
        }
      }
      $ === null ? ($ = 65533, k = 1) : $ > 65535 && ($ -= 65536, E.push($ >>> 10 & 1023 | 55296), $ = 56320 | $ & 1023), E.push($), C += k;
    }
    return J(E);
  }
  let z = 4096;
  function J(p) {
    let u = p.length;
    if (u <= z) return String.fromCharCode.apply(String, p);
    let l = "", E = 0;
    for (; E < u; ) l += String.fromCharCode.apply(String, p.slice(E, E += z));
    return l;
  }
  function ee(p, u, l) {
    let E = "";
    l = Math.min(p.length, l);
    for (let C = u; C < l; ++C) E += String.fromCharCode(p[C] & 127);
    return E;
  }
  function G(p, u, l) {
    let E = "";
    l = Math.min(p.length, l);
    for (let C = u; C < l; ++C) E += String.fromCharCode(p[C]);
    return E;
  }
  function V(p, u, l) {
    let E = p.length;
    (!u || u < 0) && (u = 0), (!l || l < 0 || l > E) && (l = E);
    let C = "";
    for (let q = u; q < l; ++q) C += Xo[p[q]];
    return C;
  }
  function te(p, u, l) {
    let E = p.slice(u, l), C = "";
    for (let q = 0; q < E.length - 1; q += 2) C += String.fromCharCode(E[q] + E[q + 1] * 256);
    return C;
  }
  o.prototype.slice = function(u, l) {
    let E = this.length;
    u = ~~u, l = l === void 0 ? E : ~~l, u < 0 ? (u += E, u < 0 && (u = 0)) : u > E && (u = E), l < 0 ? (l += E, l < 0 && (l = 0)) : l > E && (l = E), l < u && (l = u);
    let C = this.subarray(u, l);
    return Object.setPrototypeOf(C, o.prototype), C;
  };
  function Y(p, u, l) {
    if (p % 1 !== 0 || p < 0) throw new RangeError("offset is not uint");
    if (p + u > l) throw new RangeError("Trying to access beyond buffer length");
  }
  o.prototype.readUintLE = o.prototype.readUIntLE = function(u, l, E) {
    u = u >>> 0, l = l >>> 0, E || Y(u, l, this.length);
    let C = this[u], q = 1, $ = 0;
    for (; ++$ < l && (q *= 256); ) C += this[u + $] * q;
    return C;
  }, o.prototype.readUintBE = o.prototype.readUIntBE = function(u, l, E) {
    u = u >>> 0, l = l >>> 0, E || Y(u, l, this.length);
    let C = this[u + --l], q = 1;
    for (; l > 0 && (q *= 256); ) C += this[u + --l] * q;
    return C;
  }, o.prototype.readUint8 = o.prototype.readUInt8 = function(u, l) {
    return u = u >>> 0, l || Y(u, 1, this.length), this[u];
  }, o.prototype.readUint16LE = o.prototype.readUInt16LE = function(u, l) {
    return u = u >>> 0, l || Y(u, 2, this.length), this[u] | this[u + 1] << 8;
  }, o.prototype.readUint16BE = o.prototype.readUInt16BE = function(u, l) {
    return u = u >>> 0, l || Y(u, 2, this.length), this[u] << 8 | this[u + 1];
  }, o.prototype.readUint32LE = o.prototype.readUInt32LE = function(u, l) {
    return u = u >>> 0, l || Y(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
  }, o.prototype.readUint32BE = o.prototype.readUInt32BE = function(u, l) {
    return u = u >>> 0, l || Y(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
  }, o.prototype.readBigUInt64LE = at(function(u) {
    u = u >>> 0, xe(u, "offset");
    let l = this[u], E = this[u + 7];
    (l === void 0 || E === void 0) && st(u, this.length - 8);
    let C = l + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24, q = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + E * 2 ** 24;
    return BigInt(C) + (BigInt(q) << BigInt(32));
  }), o.prototype.readBigUInt64BE = at(function(u) {
    u = u >>> 0, xe(u, "offset");
    let l = this[u], E = this[u + 7];
    (l === void 0 || E === void 0) && st(u, this.length - 8);
    let C = l * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u], q = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + E;
    return (BigInt(C) << BigInt(32)) + BigInt(q);
  }), o.prototype.readIntLE = function(u, l, E) {
    u = u >>> 0, l = l >>> 0, E || Y(u, l, this.length);
    let C = this[u], q = 1, $ = 0;
    for (; ++$ < l && (q *= 256); ) C += this[u + $] * q;
    return q *= 128, C >= q && (C -= Math.pow(2, 8 * l)), C;
  }, o.prototype.readIntBE = function(u, l, E) {
    u = u >>> 0, l = l >>> 0, E || Y(u, l, this.length);
    let C = l, q = 1, $ = this[u + --C];
    for (; C > 0 && (q *= 256); ) $ += this[u + --C] * q;
    return q *= 128, $ >= q && ($ -= Math.pow(2, 8 * l)), $;
  }, o.prototype.readInt8 = function(u, l) {
    return u = u >>> 0, l || Y(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
  }, o.prototype.readInt16LE = function(u, l) {
    u = u >>> 0, l || Y(u, 2, this.length);
    let E = this[u] | this[u + 1] << 8;
    return E & 32768 ? E | 4294901760 : E;
  }, o.prototype.readInt16BE = function(u, l) {
    u = u >>> 0, l || Y(u, 2, this.length);
    let E = this[u + 1] | this[u] << 8;
    return E & 32768 ? E | 4294901760 : E;
  }, o.prototype.readInt32LE = function(u, l) {
    return u = u >>> 0, l || Y(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
  }, o.prototype.readInt32BE = function(u, l) {
    return u = u >>> 0, l || Y(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
  }, o.prototype.readBigInt64LE = at(function(u) {
    u = u >>> 0, xe(u, "offset");
    let l = this[u], E = this[u + 7];
    (l === void 0 || E === void 0) && st(u, this.length - 8);
    let C = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (E << 24);
    return (BigInt(C) << BigInt(32)) + BigInt(l + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24);
  }), o.prototype.readBigInt64BE = at(function(u) {
    u = u >>> 0, xe(u, "offset");
    let l = this[u], E = this[u + 7];
    (l === void 0 || E === void 0) && st(u, this.length - 8);
    let C = (l << 24) + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
    return (BigInt(C) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + E);
  }), o.prototype.readFloatLE = function(u, l) {
    return u = u >>> 0, l || Y(u, 4, this.length), e.read(this, u, true, 23, 4);
  }, o.prototype.readFloatBE = function(u, l) {
    return u = u >>> 0, l || Y(u, 4, this.length), e.read(this, u, false, 23, 4);
  }, o.prototype.readDoubleLE = function(u, l) {
    return u = u >>> 0, l || Y(u, 8, this.length), e.read(this, u, true, 52, 8);
  }, o.prototype.readDoubleBE = function(u, l) {
    return u = u >>> 0, l || Y(u, 8, this.length), e.read(this, u, false, 52, 8);
  };
  function X(p, u, l, E, C, q) {
    if (!o.isBuffer(p)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > C || u < q) throw new RangeError('"value" argument is out of bounds');
    if (l + E > p.length) throw new RangeError("Index out of range");
  }
  o.prototype.writeUintLE = o.prototype.writeUIntLE = function(u, l, E, C) {
    if (u = +u, l = l >>> 0, E = E >>> 0, !C) {
      let k = Math.pow(2, 8 * E) - 1;
      X(this, u, l, E, k, 0);
    }
    let q = 1, $ = 0;
    for (this[l] = u & 255; ++$ < E && (q *= 256); ) this[l + $] = u / q & 255;
    return l + E;
  }, o.prototype.writeUintBE = o.prototype.writeUIntBE = function(u, l, E, C) {
    if (u = +u, l = l >>> 0, E = E >>> 0, !C) {
      let k = Math.pow(2, 8 * E) - 1;
      X(this, u, l, E, k, 0);
    }
    let q = E - 1, $ = 1;
    for (this[l + q] = u & 255; --q >= 0 && ($ *= 256); ) this[l + q] = u / $ & 255;
    return l + E;
  }, o.prototype.writeUint8 = o.prototype.writeUInt8 = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 1, 255, 0), this[l] = u & 255, l + 1;
  }, o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 2, 65535, 0), this[l] = u & 255, this[l + 1] = u >>> 8, l + 2;
  }, o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 2, 65535, 0), this[l] = u >>> 8, this[l + 1] = u & 255, l + 2;
  }, o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 4, 4294967295, 0), this[l + 3] = u >>> 24, this[l + 2] = u >>> 16, this[l + 1] = u >>> 8, this[l] = u & 255, l + 4;
  }, o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 4, 4294967295, 0), this[l] = u >>> 24, this[l + 1] = u >>> 16, this[l + 2] = u >>> 8, this[l + 3] = u & 255, l + 4;
  };
  function ce(p, u, l, E, C) {
    Oe(u, E, C, p, l, 7);
    let q = Number(u & BigInt(4294967295));
    p[l++] = q, q = q >> 8, p[l++] = q, q = q >> 8, p[l++] = q, q = q >> 8, p[l++] = q;
    let $ = Number(u >> BigInt(32) & BigInt(4294967295));
    return p[l++] = $, $ = $ >> 8, p[l++] = $, $ = $ >> 8, p[l++] = $, $ = $ >> 8, p[l++] = $, l;
  }
  function Z(p, u, l, E, C) {
    Oe(u, E, C, p, l, 7);
    let q = Number(u & BigInt(4294967295));
    p[l + 7] = q, q = q >> 8, p[l + 6] = q, q = q >> 8, p[l + 5] = q, q = q >> 8, p[l + 4] = q;
    let $ = Number(u >> BigInt(32) & BigInt(4294967295));
    return p[l + 3] = $, $ = $ >> 8, p[l + 2] = $, $ = $ >> 8, p[l + 1] = $, $ = $ >> 8, p[l] = $, l + 8;
  }
  o.prototype.writeBigUInt64LE = at(function(u, l = 0) {
    return ce(this, u, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), o.prototype.writeBigUInt64BE = at(function(u, l = 0) {
    return Z(this, u, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), o.prototype.writeIntLE = function(u, l, E, C) {
    if (u = +u, l = l >>> 0, !C) {
      let B = Math.pow(2, 8 * E - 1);
      X(this, u, l, E, B - 1, -B);
    }
    let q = 0, $ = 1, k = 0;
    for (this[l] = u & 255; ++q < E && ($ *= 256); ) u < 0 && k === 0 && this[l + q - 1] !== 0 && (k = 1), this[l + q] = (u / $ >> 0) - k & 255;
    return l + E;
  }, o.prototype.writeIntBE = function(u, l, E, C) {
    if (u = +u, l = l >>> 0, !C) {
      let B = Math.pow(2, 8 * E - 1);
      X(this, u, l, E, B - 1, -B);
    }
    let q = E - 1, $ = 1, k = 0;
    for (this[l + q] = u & 255; --q >= 0 && ($ *= 256); ) u < 0 && k === 0 && this[l + q + 1] !== 0 && (k = 1), this[l + q] = (u / $ >> 0) - k & 255;
    return l + E;
  }, o.prototype.writeInt8 = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[l] = u & 255, l + 1;
  }, o.prototype.writeInt16LE = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 2, 32767, -32768), this[l] = u & 255, this[l + 1] = u >>> 8, l + 2;
  }, o.prototype.writeInt16BE = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 2, 32767, -32768), this[l] = u >>> 8, this[l + 1] = u & 255, l + 2;
  }, o.prototype.writeInt32LE = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 4, 2147483647, -2147483648), this[l] = u & 255, this[l + 1] = u >>> 8, this[l + 2] = u >>> 16, this[l + 3] = u >>> 24, l + 4;
  }, o.prototype.writeInt32BE = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[l] = u >>> 24, this[l + 1] = u >>> 16, this[l + 2] = u >>> 8, this[l + 3] = u & 255, l + 4;
  }, o.prototype.writeBigInt64LE = at(function(u, l = 0) {
    return ce(this, u, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), o.prototype.writeBigInt64BE = at(function(u, l = 0) {
    return Z(this, u, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function ne(p, u, l, E, C, q) {
    if (l + E > p.length) throw new RangeError("Index out of range");
    if (l < 0) throw new RangeError("Index out of range");
  }
  function he(p, u, l, E, C) {
    return u = +u, l = l >>> 0, C || ne(p, u, l, 4), e.write(p, u, l, E, 23, 4), l + 4;
  }
  o.prototype.writeFloatLE = function(u, l, E) {
    return he(this, u, l, true, E);
  }, o.prototype.writeFloatBE = function(u, l, E) {
    return he(this, u, l, false, E);
  };
  function be(p, u, l, E, C) {
    return u = +u, l = l >>> 0, C || ne(p, u, l, 8), e.write(p, u, l, E, 52, 8), l + 8;
  }
  o.prototype.writeDoubleLE = function(u, l, E) {
    return be(this, u, l, true, E);
  }, o.prototype.writeDoubleBE = function(u, l, E) {
    return be(this, u, l, false, E);
  }, o.prototype.copy = function(u, l, E, C) {
    if (!o.isBuffer(u)) throw new TypeError("argument should be a Buffer");
    if (E || (E = 0), !C && C !== 0 && (C = this.length), l >= u.length && (l = u.length), l || (l = 0), C > 0 && C < E && (C = E), C === E || u.length === 0 || this.length === 0) return 0;
    if (l < 0) throw new RangeError("targetStart out of bounds");
    if (E < 0 || E >= this.length) throw new RangeError("Index out of range");
    if (C < 0) throw new RangeError("sourceEnd out of bounds");
    C > this.length && (C = this.length), u.length - l < C - E && (C = u.length - l + E);
    let q = C - E;
    return this === u && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(l, E, C) : Uint8Array.prototype.set.call(u, this.subarray(E, C), l), q;
  }, o.prototype.fill = function(u, l, E, C) {
    if (typeof u == "string") {
      if (typeof l == "string" ? (C = l, l = 0, E = this.length) : typeof E == "string" && (C = E, E = this.length), C !== void 0 && typeof C != "string") throw new TypeError("encoding must be a string");
      if (typeof C == "string" && !o.isEncoding(C)) throw new TypeError("Unknown encoding: " + C);
      if (u.length === 1) {
        let $ = u.charCodeAt(0);
        (C === "utf8" && $ < 128 || C === "latin1") && (u = $);
      }
    } else typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
    if (l < 0 || this.length < l || this.length < E) throw new RangeError("Out of range index");
    if (E <= l) return this;
    l = l >>> 0, E = E === void 0 ? this.length : E >>> 0, u || (u = 0);
    let q;
    if (typeof u == "number") for (q = l; q < E; ++q) this[q] = u;
    else {
      let $ = o.isBuffer(u) ? u : o.from(u, C), k = $.length;
      if (k === 0) throw new TypeError('The value "' + u + '" is invalid for argument "value"');
      for (q = 0; q < E - l; ++q) this[q + l] = $[q % k];
    }
    return this;
  };
  let ye = {};
  function Ae(p, u, l) {
    ye[p] = class extends l {
      constructor() {
        super(), Object.defineProperty(this, "message", { value: u.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${p}]`, this.stack, delete this.name;
      }
      get code() {
        return p;
      }
      set code(C) {
        Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: C, writable: true });
      }
      toString() {
        return `${this.name} [${p}]: ${this.message}`;
      }
    };
  }
  Ae("ERR_BUFFER_OUT_OF_BOUNDS", function(p) {
    return p ? `${p} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError), Ae("ERR_INVALID_ARG_TYPE", function(p, u) {
    return `The "${p}" argument must be of type number. Received type ${typeof u}`;
  }, TypeError), Ae("ERR_OUT_OF_RANGE", function(p, u, l) {
    let E = `The value of "${p}" is out of range.`, C = l;
    return Number.isInteger(l) && Math.abs(l) > 2 ** 32 ? C = _e(String(l)) : typeof l == "bigint" && (C = String(l), (l > BigInt(2) ** BigInt(32) || l < -(BigInt(2) ** BigInt(32))) && (C = _e(C)), C += "n"), E += ` It must be ${u}. Received ${C}`, E;
  }, RangeError);
  function _e(p) {
    let u = "", l = p.length, E = p[0] === "-" ? 1 : 0;
    for (; l >= E + 4; l -= 3) u = `_${p.slice(l - 3, l)}${u}`;
    return `${p.slice(0, l)}${u}`;
  }
  function ve(p, u, l) {
    xe(u, "offset"), (p[u] === void 0 || p[u + l] === void 0) && st(u, p.length - (l + 1));
  }
  function Oe(p, u, l, E, C, q) {
    if (p > l || p < u) {
      let $ = typeof u == "bigint" ? "n" : "", k;
      throw u === 0 || u === BigInt(0) ? k = `>= 0${$} and < 2${$} ** ${(q + 1) * 8}${$}` : k = `>= -(2${$} ** ${(q + 1) * 8 - 1}${$}) and < 2 ** ${(q + 1) * 8 - 1}${$}`, new ye.ERR_OUT_OF_RANGE("value", k, p);
    }
    ve(E, C, q);
  }
  function xe(p, u) {
    if (typeof p != "number") throw new ye.ERR_INVALID_ARG_TYPE(u, "number", p);
  }
  function st(p, u, l) {
    throw Math.floor(p) !== p ? (xe(p, l), new ye.ERR_OUT_OF_RANGE("offset", "an integer", p)) : u < 0 ? new ye.ERR_BUFFER_OUT_OF_BOUNDS() : new ye.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${u}`, p);
  }
  let Re = /[^+/0-9A-Za-z-_]/g;
  function Ne(p) {
    if (p = p.split("=")[0], p = p.trim().replace(Re, ""), p.length < 2) return "";
    for (; p.length % 4 !== 0; ) p = p + "=";
    return p;
  }
  function Ct(p, u) {
    u = u || 1 / 0;
    let l, E = p.length, C = null, q = [];
    for (let $ = 0; $ < E; ++$) {
      if (l = p.charCodeAt($), l > 55295 && l < 57344) {
        if (!C) {
          if (l > 56319) {
            (u -= 3) > -1 && q.push(239, 191, 189);
            continue;
          } else if ($ + 1 === E) {
            (u -= 3) > -1 && q.push(239, 191, 189);
            continue;
          }
          C = l;
          continue;
        }
        if (l < 56320) {
          (u -= 3) > -1 && q.push(239, 191, 189), C = l;
          continue;
        }
        l = (C - 55296 << 10 | l - 56320) + 65536;
      } else C && (u -= 3) > -1 && q.push(239, 191, 189);
      if (C = null, l < 128) {
        if ((u -= 1) < 0) break;
        q.push(l);
      } else if (l < 2048) {
        if ((u -= 2) < 0) break;
        q.push(l >> 6 | 192, l & 63 | 128);
      } else if (l < 65536) {
        if ((u -= 3) < 0) break;
        q.push(l >> 12 | 224, l >> 6 & 63 | 128, l & 63 | 128);
      } else if (l < 1114112) {
        if ((u -= 4) < 0) break;
        q.push(l >> 18 | 240, l >> 12 & 63 | 128, l >> 6 & 63 | 128, l & 63 | 128);
      } else throw new Error("Invalid code point");
    }
    return q;
  }
  function Bt(p) {
    let u = [];
    for (let l = 0; l < p.length; ++l) u.push(p.charCodeAt(l) & 255);
    return u;
  }
  function xn(p, u) {
    let l, E, C, q = [];
    for (let $ = 0; $ < p.length && !((u -= 2) < 0); ++$) l = p.charCodeAt($), E = l >> 8, C = l % 256, q.push(C), q.push(E);
    return q;
  }
  function Ii(p) {
    return t.toByteArray(Ne(p));
  }
  function Vr(p, u, l, E) {
    let C;
    for (C = 0; C < E && !(C + l >= u.length || C >= p.length); ++C) u[C + l] = p[C];
    return C;
  }
  function Ze(p, u) {
    return p instanceof u || p != null && p.constructor != null && p.constructor.name != null && p.constructor.name === u.name;
  }
  function Tn(p) {
    return p !== p;
  }
  let Xo = (function() {
    let p = "0123456789abcdef", u = new Array(256);
    for (let l = 0; l < 16; ++l) {
      let E = l * 16;
      for (let C = 0; C < 16; ++C) u[E + C] = p[l] + p[C];
    }
    return u;
  })();
  function at(p) {
    return typeof BigInt > "u" ? Zo : p;
  }
  function Zo() {
    throw new Error("BigInt not supported");
  }
  return mr;
}
var On;
var Af;
var ki;
var If;
var mr;
var xf;
var Pf = ze(() => {
  A();
  x();
  I();
  On = {}, Af = false;
  ki = {}, If = false;
  mr = {}, xf = false;
});
var qe = {};
Kr(qe, { Buffer: () => D, INSPECT_MAX_BYTES: () => nw, default: () => Xt, kMaxLength: () => iw });
var Xt;
var D;
var nw;
var iw;
var ke = ze(() => {
  A();
  x();
  I();
  Pf();
  Xt = Tf();
  Xt.Buffer;
  Xt.SlowBuffer;
  Xt.INSPECT_MAX_BYTES;
  Xt.kMaxLength;
  D = Xt.Buffer, nw = Xt.INSPECT_MAX_BYTES, iw = Xt.kMaxLength;
});
var x = ze(() => {
  ke();
});
var Ee = j((MP, Of) => {
  "use strict";
  A();
  x();
  I();
  var fs = class extends Error {
    constructor(e) {
      if (!Array.isArray(e)) throw new TypeError(`Expected input to be an Array, got ${typeof e}`);
      let r = "";
      for (let n = 0; n < e.length; n++) r += `    ${e[n].stack}
`;
      super(r), this.name = "AggregateError", this.errors = e;
    }
  };
  Of.exports = { AggregateError: fs, ArrayIsArray(t) {
    return Array.isArray(t);
  }, ArrayPrototypeIncludes(t, e) {
    return t.includes(e);
  }, ArrayPrototypeIndexOf(t, e) {
    return t.indexOf(e);
  }, ArrayPrototypeJoin(t, e) {
    return t.join(e);
  }, ArrayPrototypeMap(t, e) {
    return t.map(e);
  }, ArrayPrototypePop(t, e) {
    return t.pop(e);
  }, ArrayPrototypePush(t, e) {
    return t.push(e);
  }, ArrayPrototypeSlice(t, e, r) {
    return t.slice(e, r);
  }, Error, FunctionPrototypeCall(t, e, ...r) {
    return t.call(e, ...r);
  }, FunctionPrototypeSymbolHasInstance(t, e) {
    return Function.prototype[Symbol.hasInstance].call(t, e);
  }, MathFloor: Math.floor, Number, NumberIsInteger: Number.isInteger, NumberIsNaN: Number.isNaN, NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER, NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER, NumberParseInt: Number.parseInt, ObjectDefineProperties(t, e) {
    return Object.defineProperties(t, e);
  }, ObjectDefineProperty(t, e, r) {
    return Object.defineProperty(t, e, r);
  }, ObjectGetOwnPropertyDescriptor(t, e) {
    return Object.getOwnPropertyDescriptor(t, e);
  }, ObjectKeys(t) {
    return Object.keys(t);
  }, ObjectSetPrototypeOf(t, e) {
    return Object.setPrototypeOf(t, e);
  }, Promise, PromisePrototypeCatch(t, e) {
    return t.catch(e);
  }, PromisePrototypeThen(t, e, r) {
    return t.then(e, r);
  }, PromiseReject(t) {
    return Promise.reject(t);
  }, PromiseResolve(t) {
    return Promise.resolve(t);
  }, ReflectApply: Reflect.apply, RegExpPrototypeTest(t, e) {
    return t.test(e);
  }, SafeSet: Set, String, StringPrototypeSlice(t, e, r) {
    return t.slice(e, r);
  }, StringPrototypeToLowerCase(t) {
    return t.toLowerCase();
  }, StringPrototypeToUpperCase(t) {
    return t.toUpperCase();
  }, StringPrototypeTrim(t) {
    return t.trim();
  }, Symbol, SymbolFor: Symbol.for, SymbolAsyncIterator: Symbol.asyncIterator, SymbolHasInstance: Symbol.hasInstance, SymbolIterator: Symbol.iterator, SymbolDispose: Symbol.dispose || /* @__PURE__ */ Symbol("Symbol.dispose"), SymbolAsyncDispose: Symbol.asyncDispose || /* @__PURE__ */ Symbol("Symbol.asyncDispose"), TypedArrayPrototypeSet(t, e, r) {
    return t.set(e, r);
  }, Boolean, Uint8Array };
});
var hs = j((HP, Rf) => {
  "use strict";
  A();
  x();
  I();
  Rf.exports = { format(t, ...e) {
    return t.replace(/%([sdifj])/g, function(...[r, n]) {
      let i = e.shift();
      return n === "f" ? i.toFixed(6) : n === "j" ? JSON.stringify(i) : n === "s" && typeof i == "object" ? `${i.constructor !== Object ? i.constructor.name : ""} {}`.trim() : i.toString();
    });
  }, inspect(t) {
    switch (typeof t) {
      case "string":
        if (t.includes("'")) if (t.includes('"')) {
          if (!t.includes("`") && !t.includes("${")) return `\`${t}\``;
        } else return `"${t}"`;
        return `'${t}'`;
      case "number":
        return isNaN(t) ? "NaN" : Object.is(t, -0) ? String(t) : t;
      case "bigint":
        return `${String(t)}n`;
      case "boolean":
      case "undefined":
        return String(t);
      case "object":
        return "{}";
    }
  } };
});
var De = j((eO, Bf) => {
  "use strict";
  A();
  x();
  I();
  var { format: ow, inspect: Ci } = hs(), { AggregateError: sw } = Ee(), aw = globalThis.AggregateError || sw, uw = /* @__PURE__ */ Symbol("kIsNodeError"), lw = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"], cw = /^([A-Z][a-z0-9]*)+$/, fw = "__node_internal_", Bi = {};
  function _r(t, e) {
    if (!t) throw new Bi.ERR_INTERNAL_ASSERTION(e);
  }
  function kf(t) {
    let e = "", r = t.length, n = t[0] === "-" ? 1 : 0;
    for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
    return `${t.slice(0, r)}${e}`;
  }
  function hw(t, e, r) {
    if (typeof e == "function") return _r(e.length <= r.length, `Code: ${t}; The provided arguments length (${r.length}) does not match the required ones (${e.length}).`), e(...r);
    let n = (e.match(/%[dfijoOs]/g) || []).length;
    return _r(n === r.length, `Code: ${t}; The provided arguments length (${r.length}) does not match the required ones (${n}).`), r.length === 0 ? e : ow(e, ...r);
  }
  function Le(t, e, r) {
    r || (r = Error);
    class n extends r {
      constructor(...s) {
        super(hw(t, e, s));
      }
      toString() {
        return `${this.name} [${t}]: ${this.message}`;
      }
    }
    Object.defineProperties(n.prototype, { name: { value: r.name, writable: true, enumerable: false, configurable: true }, toString: { value() {
      return `${this.name} [${t}]: ${this.message}`;
    }, writable: true, enumerable: false, configurable: true } }), n.prototype.code = t, n.prototype[uw] = true, Bi[t] = n;
  }
  function Cf(t) {
    let e = fw + t.name;
    return Object.defineProperty(t, "name", { value: e }), t;
  }
  function dw(t, e) {
    if (t && e && t !== e) {
      if (Array.isArray(e.errors)) return e.errors.push(t), e;
      let r = new aw([e, t], e.message);
      return r.code = e.code, r;
    }
    return t || e;
  }
  var ds = class extends Error {
    constructor(e = "The operation was aborted", r = void 0) {
      if (r !== void 0 && typeof r != "object") throw new Bi.ERR_INVALID_ARG_TYPE("options", "Object", r);
      super(e, r), this.code = "ABORT_ERR", this.name = "AbortError";
    }
  };
  Le("ERR_ASSERTION", "%s", Error);
  Le("ERR_INVALID_ARG_TYPE", (t, e, r) => {
    _r(typeof t == "string", "'name' must be a string"), Array.isArray(e) || (e = [e]);
    let n = "The ";
    t.endsWith(" argument") ? n += `${t} ` : n += `"${t}" ${t.includes(".") ? "property" : "argument"} `, n += "must be ";
    let i = [], s = [], o = [];
    for (let c of e) _r(typeof c == "string", "All expected entries have to be of type string"), lw.includes(c) ? i.push(c.toLowerCase()) : cw.test(c) ? s.push(c) : (_r(c !== "object", 'The value "object" should be written as "Object"'), o.push(c));
    if (s.length > 0) {
      let c = i.indexOf("object");
      c !== -1 && (i.splice(i, c, 1), s.push("Object"));
    }
    if (i.length > 0) {
      switch (i.length) {
        case 1:
          n += `of type ${i[0]}`;
          break;
        case 2:
          n += `one of type ${i[0]} or ${i[1]}`;
          break;
        default: {
          let c = i.pop();
          n += `one of type ${i.join(", ")}, or ${c}`;
        }
      }
      (s.length > 0 || o.length > 0) && (n += " or ");
    }
    if (s.length > 0) {
      switch (s.length) {
        case 1:
          n += `an instance of ${s[0]}`;
          break;
        case 2:
          n += `an instance of ${s[0]} or ${s[1]}`;
          break;
        default: {
          let c = s.pop();
          n += `an instance of ${s.join(", ")}, or ${c}`;
        }
      }
      o.length > 0 && (n += " or ");
    }
    switch (o.length) {
      case 0:
        break;
      case 1:
        o[0].toLowerCase() !== o[0] && (n += "an "), n += `${o[0]}`;
        break;
      case 2:
        n += `one of ${o[0]} or ${o[1]}`;
        break;
      default: {
        let c = o.pop();
        n += `one of ${o.join(", ")}, or ${c}`;
      }
    }
    if (r == null) n += `. Received ${r}`;
    else if (typeof r == "function" && r.name) n += `. Received function ${r.name}`;
    else if (typeof r == "object") {
      var a;
      if ((a = r.constructor) !== null && a !== void 0 && a.name) n += `. Received an instance of ${r.constructor.name}`;
      else {
        let c = Ci(r, { depth: -1 });
        n += `. Received ${c}`;
      }
    } else {
      let c = Ci(r, { colors: false });
      c.length > 25 && (c = `${c.slice(0, 25)}...`), n += `. Received type ${typeof r} (${c})`;
    }
    return n;
  }, TypeError);
  Le("ERR_INVALID_ARG_VALUE", (t, e, r = "is invalid") => {
    let n = Ci(e);
    return n.length > 128 && (n = n.slice(0, 128) + "..."), `The ${t.includes(".") ? "property" : "argument"} '${t}' ${r}. Received ${n}`;
  }, TypeError);
  Le("ERR_INVALID_RETURN_VALUE", (t, e, r) => {
    var n;
    let i = r != null && (n = r.constructor) !== null && n !== void 0 && n.name ? `instance of ${r.constructor.name}` : `type ${typeof r}`;
    return `Expected ${t} to be returned from the "${e}" function but got ${i}.`;
  }, TypeError);
  Le("ERR_MISSING_ARGS", (...t) => {
    _r(t.length > 0, "At least one arg needs to be specified");
    let e, r = t.length;
    switch (t = (Array.isArray(t) ? t : [t]).map((n) => `"${n}"`).join(" or "), r) {
      case 1:
        e += `The ${t[0]} argument`;
        break;
      case 2:
        e += `The ${t[0]} and ${t[1]} arguments`;
        break;
      default:
        {
          let n = t.pop();
          e += `The ${t.join(", ")}, and ${n} arguments`;
        }
        break;
    }
    return `${e} must be specified`;
  }, TypeError);
  Le("ERR_OUT_OF_RANGE", (t, e, r) => {
    _r(e, 'Missing "range" argument');
    let n;
    if (Number.isInteger(r) && Math.abs(r) > 2 ** 32) n = kf(String(r));
    else if (typeof r == "bigint") {
      n = String(r);
      let i = BigInt(2) ** BigInt(32);
      (r > i || r < -i) && (n = kf(n)), n += "n";
    } else n = Ci(r);
    return `The value of "${t}" is out of range. It must be ${e}. Received ${n}`;
  }, RangeError);
  Le("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
  Le("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
  Le("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
  Le("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
  Le("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
  Le("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
  Le("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
  Le("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
  Le("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
  Le("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
  Le("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
  Bf.exports = { AbortError: ds, aggregateTwoErrors: Cf(dw), hideStackFrames: Cf, codes: Bi };
});
var Yr = j((cO, Mi) => {
  "use strict";
  A();
  x();
  I();
  var { AbortController: Mf, AbortSignal: pw } = typeof self < "u" ? self : typeof window < "u" ? window : void 0;
  Mi.exports = Mf;
  Mi.exports.AbortSignal = pw;
  Mi.exports.default = Mf;
});
var Zt = {};
Kr(Zt, { EventEmitter: () => gw, default: () => Rn, defaultMaxListeners: () => bw, init: () => ww, listenerCount: () => mw, on: () => _w, once: () => vw });
function yw() {
  if (Nf) return Ni;
  Nf = true;
  var t = typeof Reflect == "object" ? Reflect : null, e = t && typeof t.apply == "function" ? t.apply : function(y, O, v) {
    return Function.prototype.apply.call(y, O, v);
  }, r;
  t && typeof t.ownKeys == "function" ? r = t.ownKeys : Object.getOwnPropertySymbols ? r = function(y) {
    return Object.getOwnPropertyNames(y).concat(Object.getOwnPropertySymbols(y));
  } : r = function(y) {
    return Object.getOwnPropertyNames(y);
  };
  function n(T) {
    console && console.warn && console.warn(T);
  }
  var i = Number.isNaN || function(y) {
    return y !== y;
  };
  function s() {
    s.init.call(this);
  }
  Ni = s, Ni.once = w, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
  var o = 10;
  function a(T) {
    if (typeof T != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof T);
  }
  Object.defineProperty(s, "defaultMaxListeners", { enumerable: true, get: function() {
    return o;
  }, set: function(T) {
    if (typeof T != "number" || T < 0 || i(T)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + T + ".");
    o = T;
  } }), s.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, s.prototype.setMaxListeners = function(y) {
    if (typeof y != "number" || y < 0 || i(y)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + y + ".");
    return this._maxListeners = y, this;
  };
  function c(T) {
    return T._maxListeners === void 0 ? s.defaultMaxListeners : T._maxListeners;
  }
  s.prototype.getMaxListeners = function() {
    return c(this);
  }, s.prototype.emit = function(y) {
    for (var O = [], v = 1; v < arguments.length; v++) O.push(arguments[v]);
    var M = y === "error", F = this._events;
    if (F !== void 0) M = M && F.error === void 0;
    else if (!M) return false;
    if (M) {
      var U;
      if (O.length > 0 && (U = O[0]), U instanceof Error) throw U;
      var Q = new Error("Unhandled error." + (U ? " (" + U.message + ")" : ""));
      throw Q.context = U, Q;
    }
    var W = F[y];
    if (W === void 0) return false;
    if (typeof W == "function") e(W, this, O);
    else for (var H = W.length, z = P(W, H), v = 0; v < H; ++v) e(z[v], this, O);
    return true;
  };
  function f(T, y, O, v) {
    var M, F, U;
    if (a(O), F = T._events, F === void 0 ? (F = T._events = /* @__PURE__ */ Object.create(null), T._eventsCount = 0) : (F.newListener !== void 0 && (T.emit("newListener", y, O.listener ? O.listener : O), F = T._events), U = F[y]), U === void 0) U = F[y] = O, ++T._eventsCount;
    else if (typeof U == "function" ? U = F[y] = v ? [O, U] : [U, O] : v ? U.unshift(O) : U.push(O), M = c(T), M > 0 && U.length > M && !U.warned) {
      U.warned = true;
      var Q = new Error("Possible EventEmitter memory leak detected. " + U.length + " " + String(y) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      Q.name = "MaxListenersExceededWarning", Q.emitter = T, Q.type = y, Q.count = U.length, n(Q);
    }
    return T;
  }
  s.prototype.addListener = function(y, O) {
    return f(this, y, O, false);
  }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(y, O) {
    return f(this, y, O, true);
  };
  function h() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function d(T, y, O) {
    var v = { fired: false, wrapFn: void 0, target: T, type: y, listener: O }, M = h.bind(v);
    return M.listener = O, v.wrapFn = M, M;
  }
  s.prototype.once = function(y, O) {
    return a(O), this.on(y, d(this, y, O)), this;
  }, s.prototype.prependOnceListener = function(y, O) {
    return a(O), this.prependListener(y, d(this, y, O)), this;
  }, s.prototype.removeListener = function(y, O) {
    var v, M, F, U, Q;
    if (a(O), M = this._events, M === void 0) return this;
    if (v = M[y], v === void 0) return this;
    if (v === O || v.listener === O) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete M[y], M.removeListener && this.emit("removeListener", y, v.listener || O));
    else if (typeof v != "function") {
      for (F = -1, U = v.length - 1; U >= 0; U--) if (v[U] === O || v[U].listener === O) {
        Q = v[U].listener, F = U;
        break;
      }
      if (F < 0) return this;
      F === 0 ? v.shift() : S(v, F), v.length === 1 && (M[y] = v[0]), M.removeListener !== void 0 && this.emit("removeListener", y, Q || O);
    }
    return this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(y) {
    var O, v, M;
    if (v = this._events, v === void 0) return this;
    if (v.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : v[y] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete v[y]), this;
    if (arguments.length === 0) {
      var F = Object.keys(v), U;
      for (M = 0; M < F.length; ++M) U = F[M], U !== "removeListener" && this.removeAllListeners(U);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (O = v[y], typeof O == "function") this.removeListener(y, O);
    else if (O !== void 0) for (M = O.length - 1; M >= 0; M--) this.removeListener(y, O[M]);
    return this;
  };
  function m(T, y, O) {
    var v = T._events;
    if (v === void 0) return [];
    var M = v[y];
    return M === void 0 ? [] : typeof M == "function" ? O ? [M.listener || M] : [M] : O ? b(M) : P(M, M.length);
  }
  s.prototype.listeners = function(y) {
    return m(this, y, true);
  }, s.prototype.rawListeners = function(y) {
    return m(this, y, false);
  }, s.listenerCount = function(T, y) {
    return typeof T.listenerCount == "function" ? T.listenerCount(y) : g.call(T, y);
  }, s.prototype.listenerCount = g;
  function g(T) {
    var y = this._events;
    if (y !== void 0) {
      var O = y[T];
      if (typeof O == "function") return 1;
      if (O !== void 0) return O.length;
    }
    return 0;
  }
  s.prototype.eventNames = function() {
    return this._eventsCount > 0 ? r(this._events) : [];
  };
  function P(T, y) {
    for (var O = new Array(y), v = 0; v < y; ++v) O[v] = T[v];
    return O;
  }
  function S(T, y) {
    for (; y + 1 < T.length; y++) T[y] = T[y + 1];
    T.pop();
  }
  function b(T) {
    for (var y = new Array(T.length), O = 0; O < y.length; ++O) y[O] = T[O].listener || T[O];
    return y;
  }
  function w(T, y) {
    return new Promise(function(O, v) {
      function M(U) {
        T.removeListener(y, F), v(U);
      }
      function F() {
        typeof T.removeListener == "function" && T.removeListener("error", M), O([].slice.call(arguments));
      }
      R(T, y, F, { once: true }), y !== "error" && _(T, M, { once: true });
    });
  }
  function _(T, y, O) {
    typeof T.on == "function" && R(T, "error", y, O);
  }
  function R(T, y, O, v) {
    if (typeof T.on == "function") v.once ? T.once(y, O) : T.on(y, O);
    else if (typeof T.addEventListener == "function") T.addEventListener(y, function M(F) {
      v.once && T.removeEventListener(y, M), O(F);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof T);
  }
  return Ni;
}
var Ni;
var Nf;
var Rn;
var gw;
var bw;
var ww;
var mw;
var _w;
var vw;
var er = ze(() => {
  A();
  x();
  I();
  Ni = {}, Nf = false;
  Rn = yw();
  Rn.once;
  Rn.once = function(t, e) {
    return new Promise((r, n) => {
      function i(...o) {
        s !== void 0 && t.removeListener("error", s), r(o);
      }
      let s;
      e !== "error" && (s = (o) => {
        t.removeListener(name, i), n(o);
      }, t.once("error", s)), t.once(e, i);
    });
  };
  Rn.on = function(t, e) {
    let r = [], n = [], i = null, s = false, o = { async next() {
      let f = r.shift();
      if (f) return createIterResult(f, false);
      if (i) {
        let h = Promise.reject(i);
        return i = null, h;
      }
      return s ? createIterResult(void 0, true) : new Promise((h, d) => n.push({ resolve: h, reject: d }));
    }, async return() {
      t.removeListener(e, a), t.removeListener("error", c), s = true;
      for (let f of n) f.resolve(createIterResult(void 0, true));
      return createIterResult(void 0, true);
    }, throw(f) {
      i = f, t.removeListener(e, a), t.removeListener("error", c);
    }, [Symbol.asyncIterator]() {
      return this;
    } };
    return t.on(e, a), t.on("error", c), o;
    function a(...f) {
      let h = n.shift();
      h ? h.resolve(createIterResult(f, false)) : r.push(f);
    }
    function c(f) {
      s = true;
      let h = n.shift();
      h ? h.reject(f) : i = f, o.return();
    }
  };
  ({ EventEmitter: gw, defaultMaxListeners: bw, init: ww, listenerCount: mw, on: _w, once: vw } = Rn);
});
var $e = j((OO, ys) => {
  "use strict";
  A();
  x();
  I();
  var Sw = (ke(), me(qe)), { format: Ew, inspect: Aw } = hs(), { codes: { ERR_INVALID_ARG_TYPE: ps } } = De(), { kResistStopPropagation: Iw, AggregateError: xw, SymbolDispose: Tw } = Ee(), Pw = globalThis.AbortSignal || Yr().AbortSignal, Ow = globalThis.AbortController || Yr().AbortController, Rw = Object.getPrototypeOf(async function() {
  }).constructor, qf = globalThis.Blob || Sw.Blob, kw = typeof qf < "u" ? function(e) {
    return e instanceof qf;
  } : function(e) {
    return false;
  }, Lf = (t, e) => {
    if (t !== void 0 && (t === null || typeof t != "object" || !("aborted" in t))) throw new ps(e, "AbortSignal", t);
  }, Cw = (t, e) => {
    if (typeof t != "function") throw new ps(e, "Function", t);
  };
  ys.exports = { AggregateError: xw, kEmptyObject: Object.freeze({}), once(t) {
    let e = false;
    return function(...r) {
      e || (e = true, t.apply(this, r));
    };
  }, createDeferredPromise: function() {
    let t, e;
    return { promise: new Promise((n, i) => {
      t = n, e = i;
    }), resolve: t, reject: e };
  }, promisify(t) {
    return new Promise((e, r) => {
      t((n, ...i) => n ? r(n) : e(...i));
    });
  }, debuglog() {
    return function() {
    };
  }, format: Ew, inspect: Aw, types: { isAsyncFunction(t) {
    return t instanceof Rw;
  }, isArrayBufferView(t) {
    return ArrayBuffer.isView(t);
  } }, isBlob: kw, deprecate(t, e) {
    return t;
  }, addAbortListener: (er(), me(Zt)).addAbortListener || function(e, r) {
    if (e === void 0) throw new ps("signal", "AbortSignal", e);
    Lf(e, "signal"), Cw(r, "listener");
    let n;
    return e.aborted ? queueMicrotask(() => r()) : (e.addEventListener("abort", r, { __proto__: null, once: true, [Iw]: true }), n = () => {
      e.removeEventListener("abort", r);
    }), { __proto__: null, [Tw]() {
      var i;
      (i = n) === null || i === void 0 || i();
    } };
  }, AbortSignalAny: Pw.any || function(e) {
    if (e.length === 1) return e[0];
    let r = new Ow(), n = () => r.abort();
    return e.forEach((i) => {
      Lf(i, "signals"), i.addEventListener("abort", n, { once: true });
    }), r.signal.addEventListener("abort", () => {
      e.forEach((i) => i.removeEventListener("abort", n));
    }, { once: true }), r.signal;
  } };
  ys.exports.promisify.custom = /* @__PURE__ */ Symbol.for("nodejs.util.promisify.custom");
});
var Xr = j((DO, zf) => {
  "use strict";
  A();
  x();
  I();
  var { ArrayIsArray: bs, ArrayPrototypeIncludes: Ff, ArrayPrototypeJoin: Wf, ArrayPrototypeMap: Bw, NumberIsInteger: ws, NumberIsNaN: Mw, NumberMAX_SAFE_INTEGER: Nw, NumberMIN_SAFE_INTEGER: qw, NumberParseInt: Lw, ObjectPrototypeHasOwnProperty: Uw, RegExpPrototypeExec: $f, String: Dw, StringPrototypeToUpperCase: jw, StringPrototypeTrim: Fw } = Ee(), { hideStackFrames: et, codes: { ERR_SOCKET_BAD_PORT: Ww, ERR_INVALID_ARG_TYPE: je, ERR_INVALID_ARG_VALUE: Jr, ERR_OUT_OF_RANGE: vr, ERR_UNKNOWN_SIGNAL: Uf } } = De(), { normalizeEncoding: $w } = $e(), { isAsyncFunction: Hw, isArrayBufferView: Vw } = $e().types, Df = {};
  function Gw(t) {
    return t === (t | 0);
  }
  function zw(t) {
    return t === t >>> 0;
  }
  var Kw = /^[0-7]+$/, Qw = "must be a 32-bit unsigned integer or an octal string";
  function Yw(t, e, r) {
    if (typeof t > "u" && (t = r), typeof t == "string") {
      if ($f(Kw, t) === null) throw new Jr(e, t, Qw);
      t = Lw(t, 8);
    }
    return Hf(t, e), t;
  }
  var Jw = et((t, e, r = qw, n = Nw) => {
    if (typeof t != "number") throw new je(e, "number", t);
    if (!ws(t)) throw new vr(e, "an integer", t);
    if (t < r || t > n) throw new vr(e, `>= ${r} && <= ${n}`, t);
  }), Xw = et((t, e, r = -2147483648, n = 2147483647) => {
    if (typeof t != "number") throw new je(e, "number", t);
    if (!ws(t)) throw new vr(e, "an integer", t);
    if (t < r || t > n) throw new vr(e, `>= ${r} && <= ${n}`, t);
  }), Hf = et((t, e, r = false) => {
    if (typeof t != "number") throw new je(e, "number", t);
    if (!ws(t)) throw new vr(e, "an integer", t);
    let n = r ? 1 : 0, i = 4294967295;
    if (t < n || t > i) throw new vr(e, `>= ${n} && <= ${i}`, t);
  });
  function ms(t, e) {
    if (typeof t != "string") throw new je(e, "string", t);
  }
  function Zw(t, e, r = void 0, n) {
    if (typeof t != "number") throw new je(e, "number", t);
    if (r != null && t < r || n != null && t > n || (r != null || n != null) && Mw(t)) throw new vr(e, `${r != null ? `>= ${r}` : ""}${r != null && n != null ? " && " : ""}${n != null ? `<= ${n}` : ""}`, t);
  }
  var em = et((t, e, r) => {
    if (!Ff(r, t)) {
      let i = "must be one of: " + Wf(Bw(r, (s) => typeof s == "string" ? `'${s}'` : Dw(s)), ", ");
      throw new Jr(e, t, i);
    }
  });
  function Vf(t, e) {
    if (typeof t != "boolean") throw new je(e, "boolean", t);
  }
  function gs(t, e, r) {
    return t == null || !Uw(t, e) ? r : t[e];
  }
  var tm = et((t, e, r = null) => {
    let n = gs(r, "allowArray", false), i = gs(r, "allowFunction", false);
    if (!gs(r, "nullable", false) && t === null || !n && bs(t) || typeof t != "object" && (!i || typeof t != "function")) throw new je(e, "Object", t);
  }), rm = et((t, e) => {
    if (t != null && typeof t != "object" && typeof t != "function") throw new je(e, "a dictionary", t);
  }), qi = et((t, e, r = 0) => {
    if (!bs(t)) throw new je(e, "Array", t);
    if (t.length < r) {
      let n = `must be longer than ${r}`;
      throw new Jr(e, t, n);
    }
  });
  function nm(t, e) {
    qi(t, e);
    for (let r = 0; r < t.length; r++) ms(t[r], `${e}[${r}]`);
  }
  function im(t, e) {
    qi(t, e);
    for (let r = 0; r < t.length; r++) Vf(t[r], `${e}[${r}]`);
  }
  function om(t, e) {
    qi(t, e);
    for (let r = 0; r < t.length; r++) {
      let n = t[r], i = `${e}[${r}]`;
      if (n == null) throw new je(i, "AbortSignal", n);
      Gf(n, i);
    }
  }
  function sm(t, e = "signal") {
    if (ms(t, e), Df[t] === void 0) throw Df[jw(t)] !== void 0 ? new Uf(t + " (signals must use all capital letters)") : new Uf(t);
  }
  var am = et((t, e = "buffer") => {
    if (!Vw(t)) throw new je(e, ["Buffer", "TypedArray", "DataView"], t);
  });
  function um(t, e) {
    let r = $w(e), n = t.length;
    if (r === "hex" && n % 2 !== 0) throw new Jr("encoding", e, `is invalid for data of length ${n}`);
  }
  function lm(t, e = "Port", r = true) {
    if (typeof t != "number" && typeof t != "string" || typeof t == "string" && Fw(t).length === 0 || +t !== +t >>> 0 || t > 65535 || t === 0 && !r) throw new Ww(e, t, r);
    return t | 0;
  }
  var Gf = et((t, e) => {
    if (t !== void 0 && (t === null || typeof t != "object" || !("aborted" in t))) throw new je(e, "AbortSignal", t);
  }), cm = et((t, e) => {
    if (typeof t != "function") throw new je(e, "Function", t);
  }), fm = et((t, e) => {
    if (typeof t != "function" || Hw(t)) throw new je(e, "Function", t);
  }), hm = et((t, e) => {
    if (t !== void 0) throw new je(e, "undefined", t);
  });
  function dm(t, e, r) {
    if (!Ff(r, t)) throw new je(e, `('${Wf(r, "|")}')`, t);
  }
  var pm = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
  function jf(t, e) {
    if (typeof t > "u" || !$f(pm, t)) throw new Jr(e, t, 'must be an array or string of format "</styles.css>; rel=preload; as=style"');
  }
  function ym(t) {
    if (typeof t == "string") return jf(t, "hints"), t;
    if (bs(t)) {
      let e = t.length, r = "";
      if (e === 0) return r;
      for (let n = 0; n < e; n++) {
        let i = t[n];
        jf(i, "hints"), r += i, n !== e - 1 && (r += ", ");
      }
      return r;
    }
    throw new Jr("hints", t, 'must be an array or string of format "</styles.css>; rel=preload; as=style"');
  }
  zf.exports = { isInt32: Gw, isUint32: zw, parseFileMode: Yw, validateArray: qi, validateStringArray: nm, validateBooleanArray: im, validateAbortSignalArray: om, validateBoolean: Vf, validateBuffer: am, validateDictionary: rm, validateEncoding: um, validateFunction: cm, validateInt32: Xw, validateInteger: Jw, validateNumber: Zw, validateObject: tm, validateOneOf: em, validatePlainFunction: fm, validatePort: lm, validateSignalName: sm, validateString: ms, validateUint32: Hf, validateUndefined: hm, validateUnion: dm, validateAbortSignal: Gf, validateLinkHeaderValue: ym };
});
var tr = j((QO, Jf) => {
  A();
  x();
  I();
  var Te = Jf.exports = {}, gt, bt;
  function _s() {
    throw new Error("setTimeout has not been defined");
  }
  function vs() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? gt = setTimeout : gt = _s;
    } catch {
      gt = _s;
    }
    try {
      typeof clearTimeout == "function" ? bt = clearTimeout : bt = vs;
    } catch {
      bt = vs;
    }
  })();
  function Kf(t) {
    if (gt === setTimeout) return setTimeout(t, 0);
    if ((gt === _s || !gt) && setTimeout) return gt = setTimeout, setTimeout(t, 0);
    try {
      return gt(t, 0);
    } catch {
      try {
        return gt.call(null, t, 0);
      } catch {
        return gt.call(this, t, 0);
      }
    }
  }
  function gm(t) {
    if (bt === clearTimeout) return clearTimeout(t);
    if ((bt === vs || !bt) && clearTimeout) return bt = clearTimeout, clearTimeout(t);
    try {
      return bt(t);
    } catch {
      try {
        return bt.call(null, t);
      } catch {
        return bt.call(this, t);
      }
    }
  }
  var qt = [], Zr = false, Sr, Li = -1;
  function bm() {
    !Zr || !Sr || (Zr = false, Sr.length ? qt = Sr.concat(qt) : Li = -1, qt.length && Qf());
  }
  function Qf() {
    if (!Zr) {
      var t = Kf(bm);
      Zr = true;
      for (var e = qt.length; e; ) {
        for (Sr = qt, qt = []; ++Li < e; ) Sr && Sr[Li].run();
        Li = -1, e = qt.length;
      }
      Sr = null, Zr = false, gm(t);
    }
  }
  Te.nextTick = function(t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    qt.push(new Yf(t, e)), qt.length === 1 && !Zr && Kf(Qf);
  };
  function Yf(t, e) {
    this.fun = t, this.array = e;
  }
  Yf.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  Te.title = "browser";
  Te.browser = true;
  Te.env = {};
  Te.argv = [];
  Te.version = "";
  Te.versions = {};
  function Lt() {
  }
  Te.on = Lt;
  Te.addListener = Lt;
  Te.once = Lt;
  Te.off = Lt;
  Te.removeListener = Lt;
  Te.removeAllListeners = Lt;
  Te.emit = Lt;
  Te.prependListener = Lt;
  Te.prependOnceListener = Lt;
  Te.listeners = function(t) {
    return [];
  };
  Te.binding = function(t) {
    throw new Error("process.binding is not supported");
  };
  Te.cwd = function() {
    return "/";
  };
  Te.chdir = function(t) {
    throw new Error("process.chdir is not supported");
  };
  Te.umask = function() {
    return 0;
  };
});
var mt = j((oR, hh) => {
  "use strict";
  A();
  x();
  I();
  var { SymbolAsyncIterator: Xf, SymbolIterator: Zf, SymbolFor: Er } = Ee(), eh = Er("nodejs.stream.destroyed"), th = Er("nodejs.stream.errored"), Ss = Er("nodejs.stream.readable"), Es = Er("nodejs.stream.writable"), rh = Er("nodejs.stream.disturbed"), wm = Er("nodejs.webstream.isClosedPromise"), mm = Er("nodejs.webstream.controllerErrorFunction");
  function Ui(t, e = false) {
    var r;
    return !!(t && typeof t.pipe == "function" && typeof t.on == "function" && (!e || typeof t.pause == "function" && typeof t.resume == "function") && (!t._writableState || ((r = t._readableState) === null || r === void 0 ? void 0 : r.readable) !== false) && (!t._writableState || t._readableState));
  }
  function Di(t) {
    var e;
    return !!(t && typeof t.write == "function" && typeof t.on == "function" && (!t._readableState || ((e = t._writableState) === null || e === void 0 ? void 0 : e.writable) !== false));
  }
  function _m(t) {
    return !!(t && typeof t.pipe == "function" && t._readableState && typeof t.on == "function" && typeof t.write == "function");
  }
  function wt(t) {
    return t && (t._readableState || t._writableState || typeof t.write == "function" && typeof t.on == "function" || typeof t.pipe == "function" && typeof t.on == "function");
  }
  function nh(t) {
    return !!(t && !wt(t) && typeof t.pipeThrough == "function" && typeof t.getReader == "function" && typeof t.cancel == "function");
  }
  function ih(t) {
    return !!(t && !wt(t) && typeof t.getWriter == "function" && typeof t.abort == "function");
  }
  function oh(t) {
    return !!(t && !wt(t) && typeof t.readable == "object" && typeof t.writable == "object");
  }
  function vm(t) {
    return nh(t) || ih(t) || oh(t);
  }
  function Sm(t, e) {
    return t == null ? false : e === true ? typeof t[Xf] == "function" : e === false ? typeof t[Zf] == "function" : typeof t[Xf] == "function" || typeof t[Zf] == "function";
  }
  function ji(t) {
    if (!wt(t)) return null;
    let e = t._writableState, r = t._readableState, n = e || r;
    return !!(t.destroyed || t[eh] || n != null && n.destroyed);
  }
  function sh(t) {
    if (!Di(t)) return null;
    if (t.writableEnded === true) return true;
    let e = t._writableState;
    return e != null && e.errored ? false : typeof e?.ended != "boolean" ? null : e.ended;
  }
  function Em(t, e) {
    if (!Di(t)) return null;
    if (t.writableFinished === true) return true;
    let r = t._writableState;
    return r != null && r.errored ? false : typeof r?.finished != "boolean" ? null : !!(r.finished || e === false && r.ended === true && r.length === 0);
  }
  function Am(t) {
    if (!Ui(t)) return null;
    if (t.readableEnded === true) return true;
    let e = t._readableState;
    return !e || e.errored ? false : typeof e?.ended != "boolean" ? null : e.ended;
  }
  function ah(t, e) {
    if (!Ui(t)) return null;
    let r = t._readableState;
    return r != null && r.errored ? false : typeof r?.endEmitted != "boolean" ? null : !!(r.endEmitted || e === false && r.ended === true && r.length === 0);
  }
  function uh(t) {
    return t && t[Ss] != null ? t[Ss] : typeof t?.readable != "boolean" ? null : ji(t) ? false : Ui(t) && t.readable && !ah(t);
  }
  function lh(t) {
    return t && t[Es] != null ? t[Es] : typeof t?.writable != "boolean" ? null : ji(t) ? false : Di(t) && t.writable && !sh(t);
  }
  function Im(t, e) {
    return wt(t) ? ji(t) ? true : !(e?.readable !== false && uh(t) || e?.writable !== false && lh(t)) : null;
  }
  function xm(t) {
    var e, r;
    return wt(t) ? t.writableErrored ? t.writableErrored : (e = (r = t._writableState) === null || r === void 0 ? void 0 : r.errored) !== null && e !== void 0 ? e : null : null;
  }
  function Tm(t) {
    var e, r;
    return wt(t) ? t.readableErrored ? t.readableErrored : (e = (r = t._readableState) === null || r === void 0 ? void 0 : r.errored) !== null && e !== void 0 ? e : null : null;
  }
  function Pm(t) {
    if (!wt(t)) return null;
    if (typeof t.closed == "boolean") return t.closed;
    let e = t._writableState, r = t._readableState;
    return typeof e?.closed == "boolean" || typeof r?.closed == "boolean" ? e?.closed || r?.closed : typeof t._closed == "boolean" && ch(t) ? t._closed : null;
  }
  function ch(t) {
    return typeof t._closed == "boolean" && typeof t._defaultKeepAlive == "boolean" && typeof t._removedConnection == "boolean" && typeof t._removedContLen == "boolean";
  }
  function fh(t) {
    return typeof t._sent100 == "boolean" && ch(t);
  }
  function Om(t) {
    var e;
    return typeof t._consuming == "boolean" && typeof t._dumped == "boolean" && ((e = t.req) === null || e === void 0 ? void 0 : e.upgradeOrConnect) === void 0;
  }
  function Rm(t) {
    if (!wt(t)) return null;
    let e = t._writableState, r = t._readableState, n = e || r;
    return !n && fh(t) || !!(n && n.autoDestroy && n.emitClose && n.closed === false);
  }
  function km(t) {
    var e;
    return !!(t && ((e = t[rh]) !== null && e !== void 0 ? e : t.readableDidRead || t.readableAborted));
  }
  function Cm(t) {
    var e, r, n, i, s, o, a, c, f, h;
    return !!(t && ((e = (r = (n = (i = (s = (o = t[th]) !== null && o !== void 0 ? o : t.readableErrored) !== null && s !== void 0 ? s : t.writableErrored) !== null && i !== void 0 ? i : (a = t._readableState) === null || a === void 0 ? void 0 : a.errorEmitted) !== null && n !== void 0 ? n : (c = t._writableState) === null || c === void 0 ? void 0 : c.errorEmitted) !== null && r !== void 0 ? r : (f = t._readableState) === null || f === void 0 ? void 0 : f.errored) !== null && e !== void 0 ? e : !((h = t._writableState) === null || h === void 0) && h.errored));
  }
  hh.exports = { isDestroyed: ji, kIsDestroyed: eh, isDisturbed: km, kIsDisturbed: rh, isErrored: Cm, kIsErrored: th, isReadable: uh, kIsReadable: Ss, kIsClosedPromise: wm, kControllerErrorFunction: mm, kIsWritable: Es, isClosed: Pm, isDuplexNodeStream: _m, isFinished: Im, isIterable: Sm, isReadableNodeStream: Ui, isReadableStream: nh, isReadableEnded: Am, isReadableFinished: ah, isReadableErrored: Tm, isNodeStream: wt, isWebStream: vm, isWritable: lh, isWritableNodeStream: Di, isWritableStream: ih, isWritableEnded: sh, isWritableFinished: Em, isWritableErrored: xm, isServerRequest: Om, isServerResponse: fh, willEmitClose: Rm, isTransformStream: oh };
});
var Ut = j((yR, Ps) => {
  "use strict";
  A();
  x();
  I();
  var rr = tr(), { AbortError: vh, codes: Bm } = De(), { ERR_INVALID_ARG_TYPE: Mm, ERR_STREAM_PREMATURE_CLOSE: dh } = Bm, { kEmptyObject: Is, once: xs } = $e(), { validateAbortSignal: Nm, validateFunction: qm, validateObject: Lm, validateBoolean: Um } = Xr(), { Promise: Dm, PromisePrototypeThen: jm, SymbolDispose: Sh } = Ee(), { isClosed: Fm, isReadable: ph, isReadableNodeStream: As, isReadableStream: Wm, isReadableFinished: yh, isReadableErrored: gh, isWritable: bh, isWritableNodeStream: wh, isWritableStream: $m, isWritableFinished: mh, isWritableErrored: _h, isNodeStream: Hm, willEmitClose: Vm, kIsClosedPromise: Gm } = mt(), en;
  function zm(t) {
    return t.setHeader && typeof t.abort == "function";
  }
  var Ts = () => {
  };
  function Eh(t, e, r) {
    var n, i;
    if (arguments.length === 2 ? (r = e, e = Is) : e == null ? e = Is : Lm(e, "options"), qm(r, "callback"), Nm(e.signal, "options.signal"), r = xs(r), Wm(t) || $m(t)) return Km(t, e, r);
    if (!Hm(t)) throw new Mm("stream", ["ReadableStream", "WritableStream", "Stream"], t);
    let s = (n = e.readable) !== null && n !== void 0 ? n : As(t), o = (i = e.writable) !== null && i !== void 0 ? i : wh(t), a = t._writableState, c = t._readableState, f = () => {
      t.writable || m();
    }, h = Vm(t) && As(t) === s && wh(t) === o, d = mh(t, false), m = () => {
      d = true, t.destroyed && (h = false), !(h && (!t.readable || s)) && (!s || g) && r.call(t);
    }, g = yh(t, false), P = () => {
      g = true, t.destroyed && (h = false), !(h && (!t.writable || o)) && (!o || d) && r.call(t);
    }, S = (y) => {
      r.call(t, y);
    }, b = Fm(t), w = () => {
      b = true;
      let y = _h(t) || gh(t);
      if (y && typeof y != "boolean") return r.call(t, y);
      if (s && !g && As(t, true) && !yh(t, false)) return r.call(t, new dh());
      if (o && !d && !mh(t, false)) return r.call(t, new dh());
      r.call(t);
    }, _ = () => {
      b = true;
      let y = _h(t) || gh(t);
      if (y && typeof y != "boolean") return r.call(t, y);
      r.call(t);
    }, R = () => {
      t.req.on("finish", m);
    };
    zm(t) ? (t.on("complete", m), h || t.on("abort", w), t.req ? R() : t.on("request", R)) : o && !a && (t.on("end", f), t.on("close", f)), !h && typeof t.aborted == "boolean" && t.on("aborted", w), t.on("end", P), t.on("finish", m), e.error !== false && t.on("error", S), t.on("close", w), b ? rr.nextTick(w) : a != null && a.errorEmitted || c != null && c.errorEmitted ? h || rr.nextTick(_) : (!s && (!h || ph(t)) && (d || bh(t) === false) || !o && (!h || bh(t)) && (g || ph(t) === false) || c && t.req && t.aborted) && rr.nextTick(_);
    let T = () => {
      r = Ts, t.removeListener("aborted", w), t.removeListener("complete", m), t.removeListener("abort", w), t.removeListener("request", R), t.req && t.req.removeListener("finish", m), t.removeListener("end", f), t.removeListener("close", f), t.removeListener("finish", m), t.removeListener("end", P), t.removeListener("error", S), t.removeListener("close", w);
    };
    if (e.signal && !b) {
      let y = () => {
        let O = r;
        T(), O.call(t, new vh(void 0, { cause: e.signal.reason }));
      };
      if (e.signal.aborted) rr.nextTick(y);
      else {
        en = en || $e().addAbortListener;
        let O = en(e.signal, y), v = r;
        r = xs((...M) => {
          O[Sh](), v.apply(t, M);
        });
      }
    }
    return T;
  }
  function Km(t, e, r) {
    let n = false, i = Ts;
    if (e.signal) if (i = () => {
      n = true, r.call(t, new vh(void 0, { cause: e.signal.reason }));
    }, e.signal.aborted) rr.nextTick(i);
    else {
      en = en || $e().addAbortListener;
      let o = en(e.signal, i), a = r;
      r = xs((...c) => {
        o[Sh](), a.apply(t, c);
      });
    }
    let s = (...o) => {
      n || rr.nextTick(() => r.apply(t, o));
    };
    return jm(t[Gm].promise, s, s), Ts;
  }
  function Qm(t, e) {
    var r;
    let n = false;
    return e === null && (e = Is), (r = e) !== null && r !== void 0 && r.cleanup && (Um(e.cleanup, "cleanup"), n = e.cleanup), new Dm((i, s) => {
      let o = Eh(t, e, (a) => {
        n && o(), a ? s(a) : i();
      });
    });
  }
  Ps.exports = Eh;
  Ps.exports.finished = Qm;
});
var Ar = j((IR, kh) => {
  "use strict";
  A();
  x();
  I();
  var _t = tr(), { aggregateTwoErrors: Ym, codes: { ERR_MULTIPLE_CALLBACK: Jm }, AbortError: Xm } = De(), { Symbol: xh } = Ee(), { kIsDestroyed: Zm, isDestroyed: e_, isFinished: t_, isServerRequest: r_ } = mt(), Th = xh("kDestroy"), Os = xh("kConstruct");
  function Ph(t, e, r) {
    t && (t.stack, e && !e.errored && (e.errored = t), r && !r.errored && (r.errored = t));
  }
  function n_(t, e) {
    let r = this._readableState, n = this._writableState, i = n || r;
    return n != null && n.destroyed || r != null && r.destroyed ? (typeof e == "function" && e(), this) : (Ph(t, n, r), n && (n.destroyed = true), r && (r.destroyed = true), i.constructed ? Ah(this, t, e) : this.once(Th, function(s) {
      Ah(this, Ym(s, t), e);
    }), this);
  }
  function Ah(t, e, r) {
    let n = false;
    function i(s) {
      if (n) return;
      n = true;
      let o = t._readableState, a = t._writableState;
      Ph(s, a, o), a && (a.closed = true), o && (o.closed = true), typeof r == "function" && r(s), s ? _t.nextTick(i_, t, s) : _t.nextTick(Oh, t);
    }
    try {
      t._destroy(e || null, i);
    } catch (s) {
      i(s);
    }
  }
  function i_(t, e) {
    Rs(t, e), Oh(t);
  }
  function Oh(t) {
    let e = t._readableState, r = t._writableState;
    r && (r.closeEmitted = true), e && (e.closeEmitted = true), (r != null && r.emitClose || e != null && e.emitClose) && t.emit("close");
  }
  function Rs(t, e) {
    let r = t._readableState, n = t._writableState;
    n != null && n.errorEmitted || r != null && r.errorEmitted || (n && (n.errorEmitted = true), r && (r.errorEmitted = true), t.emit("error", e));
  }
  function o_() {
    let t = this._readableState, e = this._writableState;
    t && (t.constructed = true, t.closed = false, t.closeEmitted = false, t.destroyed = false, t.errored = null, t.errorEmitted = false, t.reading = false, t.ended = t.readable === false, t.endEmitted = t.readable === false), e && (e.constructed = true, e.destroyed = false, e.closed = false, e.closeEmitted = false, e.errored = null, e.errorEmitted = false, e.finalCalled = false, e.prefinished = false, e.ended = e.writable === false, e.ending = e.writable === false, e.finished = e.writable === false);
  }
  function ks(t, e, r) {
    let n = t._readableState, i = t._writableState;
    if (i != null && i.destroyed || n != null && n.destroyed) return this;
    n != null && n.autoDestroy || i != null && i.autoDestroy ? t.destroy(e) : e && (e.stack, i && !i.errored && (i.errored = e), n && !n.errored && (n.errored = e), r ? _t.nextTick(Rs, t, e) : Rs(t, e));
  }
  function s_(t, e) {
    if (typeof t._construct != "function") return;
    let r = t._readableState, n = t._writableState;
    r && (r.constructed = false), n && (n.constructed = false), t.once(Os, e), !(t.listenerCount(Os) > 1) && _t.nextTick(a_, t);
  }
  function a_(t) {
    let e = false;
    function r(n) {
      if (e) {
        ks(t, n ?? new Jm());
        return;
      }
      e = true;
      let i = t._readableState, s = t._writableState, o = s || i;
      i && (i.constructed = true), s && (s.constructed = true), o.destroyed ? t.emit(Th, n) : n ? ks(t, n, true) : _t.nextTick(u_, t);
    }
    try {
      t._construct((n) => {
        _t.nextTick(r, n);
      });
    } catch (n) {
      _t.nextTick(r, n);
    }
  }
  function u_(t) {
    t.emit(Os);
  }
  function Ih(t) {
    return t?.setHeader && typeof t.abort == "function";
  }
  function Rh(t) {
    t.emit("close");
  }
  function l_(t, e) {
    t.emit("error", e), _t.nextTick(Rh, t);
  }
  function c_(t, e) {
    !t || e_(t) || (!e && !t_(t) && (e = new Xm()), r_(t) ? (t.socket = null, t.destroy(e)) : Ih(t) ? t.abort() : Ih(t.req) ? t.req.abort() : typeof t.destroy == "function" ? t.destroy(e) : typeof t.close == "function" ? t.close() : e ? _t.nextTick(l_, t, e) : _t.nextTick(Rh, t), t.destroyed || (t[Zm] = true));
  }
  kh.exports = { construct: s_, destroyer: c_, destroy: n_, undestroy: o_, errorOrDestroy: ks };
});
var $i = j((NR, Bh) => {
  "use strict";
  A();
  x();
  I();
  var { ArrayIsArray: f_, ObjectSetPrototypeOf: Ch } = Ee(), { EventEmitter: Fi } = (er(), me(Zt));
  function Wi(t) {
    Fi.call(this, t);
  }
  Ch(Wi.prototype, Fi.prototype);
  Ch(Wi, Fi);
  Wi.prototype.pipe = function(t, e) {
    let r = this;
    function n(h) {
      t.writable && t.write(h) === false && r.pause && r.pause();
    }
    r.on("data", n);
    function i() {
      r.readable && r.resume && r.resume();
    }
    t.on("drain", i), !t._isStdio && (!e || e.end !== false) && (r.on("end", o), r.on("close", a));
    let s = false;
    function o() {
      s || (s = true, t.end());
    }
    function a() {
      s || (s = true, typeof t.destroy == "function" && t.destroy());
    }
    function c(h) {
      f(), Fi.listenerCount(this, "error") === 0 && this.emit("error", h);
    }
    Cs(r, "error", c), Cs(t, "error", c);
    function f() {
      r.removeListener("data", n), t.removeListener("drain", i), r.removeListener("end", o), r.removeListener("close", a), r.removeListener("error", c), t.removeListener("error", c), r.removeListener("end", f), r.removeListener("close", f), t.removeListener("close", f);
    }
    return r.on("end", f), r.on("close", f), t.on("close", f), t.emit("pipe", r), t;
  };
  function Cs(t, e, r) {
    if (typeof t.prependListener == "function") return t.prependListener(e, r);
    !t._events || !t._events[e] ? t.on(e, r) : f_(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]];
  }
  Bh.exports = { Stream: Wi, prependListener: Cs };
});
var kn = j((VR, Hi) => {
  "use strict";
  A();
  x();
  I();
  var { SymbolDispose: h_ } = Ee(), { AbortError: Mh, codes: d_ } = De(), { isNodeStream: Nh, isWebStream: p_, kControllerErrorFunction: y_ } = mt(), g_ = Ut(), { ERR_INVALID_ARG_TYPE: qh } = d_, Bs, b_ = (t, e) => {
    if (typeof t != "object" || !("aborted" in t)) throw new qh(e, "AbortSignal", t);
  };
  Hi.exports.addAbortSignal = function(e, r) {
    if (b_(e, "signal"), !Nh(r) && !p_(r)) throw new qh("stream", ["ReadableStream", "WritableStream", "Stream"], r);
    return Hi.exports.addAbortSignalNoValidate(e, r);
  };
  Hi.exports.addAbortSignalNoValidate = function(t, e) {
    if (typeof t != "object" || !("aborted" in t)) return e;
    let r = Nh(e) ? () => {
      e.destroy(new Mh(void 0, { cause: t.reason }));
    } : () => {
      e[y_](new Mh(void 0, { cause: t.reason }));
    };
    if (t.aborted) r();
    else {
      Bs = Bs || $e().addAbortListener;
      let n = Bs(t, r);
      g_(e, n[h_]);
    }
    return e;
  };
});
var Dh = j((rk, Uh) => {
  "use strict";
  A();
  x();
  I();
  var { StringPrototypeSlice: Lh, SymbolIterator: w_, TypedArrayPrototypeSet: Vi, Uint8Array: m_ } = Ee(), { Buffer: Ms } = (ke(), me(qe)), { inspect: __ } = $e();
  Uh.exports = class {
    constructor() {
      this.head = null, this.tail = null, this.length = 0;
    }
    push(e) {
      let r = { data: e, next: null };
      this.length > 0 ? this.tail.next = r : this.head = r, this.tail = r, ++this.length;
    }
    unshift(e) {
      let r = { data: e, next: this.head };
      this.length === 0 && (this.tail = r), this.head = r, ++this.length;
    }
    shift() {
      if (this.length === 0) return;
      let e = this.head.data;
      return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
    }
    clear() {
      this.head = this.tail = null, this.length = 0;
    }
    join(e) {
      if (this.length === 0) return "";
      let r = this.head, n = "" + r.data;
      for (; (r = r.next) !== null; ) n += e + r.data;
      return n;
    }
    concat(e) {
      if (this.length === 0) return Ms.alloc(0);
      let r = Ms.allocUnsafe(e >>> 0), n = this.head, i = 0;
      for (; n; ) Vi(r, n.data, i), i += n.data.length, n = n.next;
      return r;
    }
    consume(e, r) {
      let n = this.head.data;
      if (e < n.length) {
        let i = n.slice(0, e);
        return this.head.data = n.slice(e), i;
      }
      return e === n.length ? this.shift() : r ? this._getString(e) : this._getBuffer(e);
    }
    first() {
      return this.head.data;
    }
    *[w_]() {
      for (let e = this.head; e; e = e.next) yield e.data;
    }
    _getString(e) {
      let r = "", n = this.head, i = 0;
      do {
        let s = n.data;
        if (e > s.length) r += s, e -= s.length;
        else {
          e === s.length ? (r += s, ++i, n.next ? this.head = n.next : this.head = this.tail = null) : (r += Lh(s, 0, e), this.head = n, n.data = Lh(s, e));
          break;
        }
        ++i;
      } while ((n = n.next) !== null);
      return this.length -= i, r;
    }
    _getBuffer(e) {
      let r = Ms.allocUnsafe(e), n = e, i = this.head, s = 0;
      do {
        let o = i.data;
        if (e > o.length) Vi(r, o, n - e), e -= o.length;
        else {
          e === o.length ? (Vi(r, o, n - e), ++s, i.next ? this.head = i.next : this.head = this.tail = null) : (Vi(r, new m_(o.buffer, o.byteOffset, e), n - e), this.head = i, i.data = o.slice(e));
          break;
        }
        ++s;
      } while ((i = i.next) !== null);
      return this.length -= s, r;
    }
    [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")](e, r) {
      return __(this, __spreadProps(__spreadValues({}, r), { depth: 0, customInspect: false }));
    }
  };
});
var Cn = j((hk, $h) => {
  "use strict";
  A();
  x();
  I();
  var { MathFloor: v_, NumberIsInteger: S_ } = Ee(), { validateInteger: E_ } = Xr(), { ERR_INVALID_ARG_VALUE: A_ } = De().codes, jh = 16 * 1024, Fh = 16;
  function I_(t, e, r) {
    return t.highWaterMark != null ? t.highWaterMark : e ? t[r] : null;
  }
  function Wh(t) {
    return t ? Fh : jh;
  }
  function x_(t, e) {
    E_(e, "value", 0), t ? Fh = e : jh = e;
  }
  function T_(t, e, r, n) {
    let i = I_(e, n, r);
    if (i != null) {
      if (!S_(i) || i < 0) {
        let s = n ? `options.${r}` : "options.highWaterMark";
        throw new A_(s, i);
      }
      return v_(i);
    }
    return Wh(t.objectMode);
  }
  $h.exports = { getHighWaterMark: T_, getDefaultHighWaterMark: Wh, setDefaultHighWaterMark: x_ };
});
var Gh = j((Ns, Vh) => {
  A();
  x();
  I();
  var Gi = (ke(), me(qe)), vt = Gi.Buffer;
  function Hh(t, e) {
    for (var r in t) e[r] = t[r];
  }
  vt.from && vt.alloc && vt.allocUnsafe && vt.allocUnsafeSlow ? Vh.exports = Gi : (Hh(Gi, Ns), Ns.Buffer = Ir);
  function Ir(t, e, r) {
    return vt(t, e, r);
  }
  Ir.prototype = Object.create(vt.prototype);
  Hh(vt, Ir);
  Ir.from = function(t, e, r) {
    if (typeof t == "number") throw new TypeError("Argument must not be a number");
    return vt(t, e, r);
  };
  Ir.alloc = function(t, e, r) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    var n = vt(t);
    return e !== void 0 ? typeof r == "string" ? n.fill(e, r) : n.fill(e) : n.fill(0), n;
  };
  Ir.allocUnsafe = function(t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return vt(t);
  };
  Ir.allocUnsafeSlow = function(t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return Gi.SlowBuffer(t);
  };
});
var Qh = j((Kh) => {
  "use strict";
  A();
  x();
  I();
  var Ls = Gh().Buffer, zh = Ls.isEncoding || function(t) {
    switch (t = "" + t, t && t.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return true;
      default:
        return false;
    }
  };
  function P_(t) {
    if (!t) return "utf8";
    for (var e; ; ) switch (t) {
      case "utf8":
      case "utf-8":
        return "utf8";
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return "utf16le";
      case "latin1":
      case "binary":
        return "latin1";
      case "base64":
      case "ascii":
      case "hex":
        return t;
      default:
        if (e) return;
        t = ("" + t).toLowerCase(), e = true;
    }
  }
  function O_(t) {
    var e = P_(t);
    if (typeof e != "string" && (Ls.isEncoding === zh || !zh(t))) throw new Error("Unknown encoding: " + t);
    return e || t;
  }
  Kh.StringDecoder = Bn;
  function Bn(t) {
    this.encoding = O_(t);
    var e;
    switch (this.encoding) {
      case "utf16le":
        this.text = N_, this.end = q_, e = 4;
        break;
      case "utf8":
        this.fillLast = C_, e = 4;
        break;
      case "base64":
        this.text = L_, this.end = U_, e = 3;
        break;
      default:
        this.write = D_, this.end = j_;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = Ls.allocUnsafe(e);
  }
  Bn.prototype.write = function(t) {
    if (t.length === 0) return "";
    var e, r;
    if (this.lastNeed) {
      if (e = this.fillLast(t), e === void 0) return "";
      r = this.lastNeed, this.lastNeed = 0;
    } else r = 0;
    return r < t.length ? e ? e + this.text(t, r) : this.text(t, r) : e || "";
  };
  Bn.prototype.end = M_;
  Bn.prototype.text = B_;
  Bn.prototype.fillLast = function(t) {
    if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length;
  };
  function qs(t) {
    return t <= 127 ? 0 : t >> 5 === 6 ? 2 : t >> 4 === 14 ? 3 : t >> 3 === 30 ? 4 : t >> 6 === 2 ? -1 : -2;
  }
  function R_(t, e, r) {
    var n = e.length - 1;
    if (n < r) return 0;
    var i = qs(e[n]);
    return i >= 0 ? (i > 0 && (t.lastNeed = i - 1), i) : --n < r || i === -2 ? 0 : (i = qs(e[n]), i >= 0 ? (i > 0 && (t.lastNeed = i - 2), i) : --n < r || i === -2 ? 0 : (i = qs(e[n]), i >= 0 ? (i > 0 && (i === 2 ? i = 0 : t.lastNeed = i - 3), i) : 0));
  }
  function k_(t, e, r) {
    if ((e[0] & 192) !== 128) return t.lastNeed = 0, "\uFFFD";
    if (t.lastNeed > 1 && e.length > 1) {
      if ((e[1] & 192) !== 128) return t.lastNeed = 1, "\uFFFD";
      if (t.lastNeed > 2 && e.length > 2 && (e[2] & 192) !== 128) return t.lastNeed = 2, "\uFFFD";
    }
  }
  function C_(t) {
    var e = this.lastTotal - this.lastNeed, r = k_(this, t, e);
    if (r !== void 0) return r;
    if (this.lastNeed <= t.length) return t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    t.copy(this.lastChar, e, 0, t.length), this.lastNeed -= t.length;
  }
  function B_(t, e) {
    var r = R_(this, t, e);
    if (!this.lastNeed) return t.toString("utf8", e);
    this.lastTotal = r;
    var n = t.length - (r - this.lastNeed);
    return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n);
  }
  function M_(t) {
    var e = t && t.length ? this.write(t) : "";
    return this.lastNeed ? e + "\uFFFD" : e;
  }
  function N_(t, e) {
    if ((t.length - e) % 2 === 0) {
      var r = t.toString("utf16le", e);
      if (r) {
        var n = r.charCodeAt(r.length - 1);
        if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], r.slice(0, -1);
      }
      return r;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1);
  }
  function q_(t) {
    var e = t && t.length ? this.write(t) : "";
    if (this.lastNeed) {
      var r = this.lastTotal - this.lastNeed;
      return e + this.lastChar.toString("utf16le", 0, r);
    }
    return e;
  }
  function L_(t, e) {
    var r = (t.length - e) % 3;
    return r === 0 ? t.toString("base64", e) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - r));
  }
  function U_(t) {
    var e = t && t.length ? this.write(t) : "";
    return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
  }
  function D_(t) {
    return t.toString(this.encoding);
  }
  function j_(t) {
    return t && t.length ? this.write(t) : "";
  }
});
var Us = j((Fk, Zh) => {
  "use strict";
  A();
  x();
  I();
  var Yh = tr(), { PromisePrototypeThen: F_, SymbolAsyncIterator: Jh, SymbolIterator: Xh } = Ee(), { Buffer: W_ } = (ke(), me(qe)), { ERR_INVALID_ARG_TYPE: $_, ERR_STREAM_NULL_VALUES: H_ } = De().codes;
  function V_(t, e, r) {
    let n;
    if (typeof e == "string" || e instanceof W_) return new t(__spreadProps(__spreadValues({ objectMode: true }, r), { read() {
      this.push(e), this.push(null);
    } }));
    let i;
    if (e && e[Jh]) i = true, n = e[Jh]();
    else if (e && e[Xh]) i = false, n = e[Xh]();
    else throw new $_("iterable", ["Iterable"], e);
    let s = new t(__spreadValues({ objectMode: true, highWaterMark: 1 }, r)), o = false;
    s._read = function() {
      o || (o = true, c());
    }, s._destroy = function(f, h) {
      F_(a(f), () => Yh.nextTick(h, f), (d) => Yh.nextTick(h, d || f));
    };
    async function a(f) {
      let h = f != null, d = typeof n.throw == "function";
      if (h && d) {
        let { value: m, done: g } = await n.throw(f);
        if (await m, g) return;
      }
      if (typeof n.return == "function") {
        let { value: m } = await n.return();
        await m;
      }
    }
    async function c() {
      for (; ; ) {
        try {
          let { value: f, done: h } = i ? await n.next() : n.next();
          if (h) s.push(null);
          else {
            let d = f && typeof f.then == "function" ? await f : f;
            if (d === null) throw o = false, new H_();
            if (s.push(d)) continue;
            o = false;
          }
        } catch (f) {
          s.destroy(f);
        }
        break;
      }
    }
    return s;
  }
  Zh.exports = V_;
});
var Nn = j((Jk, bd) => {
  "use strict";
  A();
  x();
  I();
  var lt = tr(), { ArrayPrototypeIndexOf: G_, NumberIsInteger: z_, NumberIsNaN: K_, NumberParseInt: Q_, ObjectDefineProperties: Gs, ObjectKeys: Y_, ObjectSetPrototypeOf: rd, Promise: nd, SafeSet: J_, SymbolAsyncDispose: X_, SymbolAsyncIterator: Z_, Symbol: ev } = Ee();
  bd.exports = le;
  le.ReadableState = Yi;
  var { EventEmitter: tv } = (er(), me(Zt)), { Stream: nr, prependListener: rv } = $i(), { Buffer: Ds } = (ke(), me(qe)), { addAbortSignal: nv } = kn(), id = Ut(), de = $e().debuglog("stream", (t) => {
    de = t;
  }), iv = Dh(), nn = Ar(), { getHighWaterMark: ov, getDefaultHighWaterMark: sv } = Cn(), { aggregateTwoErrors: ed, codes: { ERR_INVALID_ARG_TYPE: av, ERR_METHOD_NOT_IMPLEMENTED: uv, ERR_OUT_OF_RANGE: lv, ERR_STREAM_PUSH_AFTER_EOF: cv, ERR_STREAM_UNSHIFT_AFTER_END_EVENT: fv }, AbortError: hv } = De(), { validateObject: dv } = Xr(), xr = ev("kPaused"), { StringDecoder: od } = Qh(), pv = Us();
  rd(le.prototype, nr.prototype);
  rd(le, nr);
  var js = () => {
  }, { errorOrDestroy: tn } = nn, rn = 1, yv = 2, sd = 4, Mn = 8, ad = 16, zi = 32, Ki = 64, ud = 128, gv = 256, bv = 512, wv = 1024, Hs = 2048, Vs = 4096, mv = 8192, _v = 16384, vv = 32768, ld = 65536, Sv = 1 << 17, Ev = 1 << 18;
  function Ce(t) {
    return { enumerable: false, get() {
      return (this.state & t) !== 0;
    }, set(e) {
      e ? this.state |= t : this.state &= ~t;
    } };
  }
  Gs(Yi.prototype, { objectMode: Ce(rn), ended: Ce(yv), endEmitted: Ce(sd), reading: Ce(Mn), constructed: Ce(ad), sync: Ce(zi), needReadable: Ce(Ki), emittedReadable: Ce(ud), readableListening: Ce(gv), resumeScheduled: Ce(bv), errorEmitted: Ce(wv), emitClose: Ce(Hs), autoDestroy: Ce(Vs), destroyed: Ce(mv), closed: Ce(_v), closeEmitted: Ce(vv), multiAwaitDrain: Ce(ld), readingMore: Ce(Sv), dataEmitted: Ce(Ev) });
  function Yi(t, e, r) {
    typeof r != "boolean" && (r = e instanceof St()), this.state = Hs | Vs | ad | zi, t && t.objectMode && (this.state |= rn), r && t && t.readableObjectMode && (this.state |= rn), this.highWaterMark = t ? ov(this, t, "readableHighWaterMark", r) : sv(false), this.buffer = new iv(), this.length = 0, this.pipes = [], this.flowing = null, this[xr] = null, t && t.emitClose === false && (this.state &= ~Hs), t && t.autoDestroy === false && (this.state &= ~Vs), this.errored = null, this.defaultEncoding = t && t.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.decoder = null, this.encoding = null, t && t.encoding && (this.decoder = new od(t.encoding), this.encoding = t.encoding);
  }
  function le(t) {
    if (!(this instanceof le)) return new le(t);
    let e = this instanceof St();
    this._readableState = new Yi(t, this, e), t && (typeof t.read == "function" && (this._read = t.read), typeof t.destroy == "function" && (this._destroy = t.destroy), typeof t.construct == "function" && (this._construct = t.construct), t.signal && !e && nv(t.signal, this)), nr.call(this, t), nn.construct(this, () => {
      this._readableState.needReadable && Qi(this, this._readableState);
    });
  }
  le.prototype.destroy = nn.destroy;
  le.prototype._undestroy = nn.undestroy;
  le.prototype._destroy = function(t, e) {
    e(t);
  };
  le.prototype[tv.captureRejectionSymbol] = function(t) {
    this.destroy(t);
  };
  le.prototype[X_] = function() {
    let t;
    return this.destroyed || (t = this.readableEnded ? null : new hv(), this.destroy(t)), new nd((e, r) => id(this, (n) => n && n !== t ? r(n) : e(null)));
  };
  le.prototype.push = function(t, e) {
    return cd(this, t, e, false);
  };
  le.prototype.unshift = function(t, e) {
    return cd(this, t, e, true);
  };
  function cd(t, e, r, n) {
    de("readableAddChunk", e);
    let i = t._readableState, s;
    if ((i.state & rn) === 0 && (typeof e == "string" ? (r = r || i.defaultEncoding, i.encoding !== r && (n && i.encoding ? e = Ds.from(e, r).toString(i.encoding) : (e = Ds.from(e, r), r = ""))) : e instanceof Ds ? r = "" : nr._isUint8Array(e) ? (e = nr._uint8ArrayToBuffer(e), r = "") : e != null && (s = new av("chunk", ["string", "Buffer", "Uint8Array"], e))), s) tn(t, s);
    else if (e === null) i.state &= ~Mn, xv(t, i);
    else if ((i.state & rn) !== 0 || e && e.length > 0) if (n) if ((i.state & sd) !== 0) tn(t, new fv());
    else {
      if (i.destroyed || i.errored) return false;
      Fs(t, i, e, true);
    }
    else if (i.ended) tn(t, new cv());
    else {
      if (i.destroyed || i.errored) return false;
      i.state &= ~Mn, i.decoder && !r ? (e = i.decoder.write(e), i.objectMode || e.length !== 0 ? Fs(t, i, e, false) : Qi(t, i)) : Fs(t, i, e, false);
    }
    else n || (i.state &= ~Mn, Qi(t, i));
    return !i.ended && (i.length < i.highWaterMark || i.length === 0);
  }
  function Fs(t, e, r, n) {
    e.flowing && e.length === 0 && !e.sync && t.listenerCount("data") > 0 ? ((e.state & ld) !== 0 ? e.awaitDrainWriters.clear() : e.awaitDrainWriters = null, e.dataEmitted = true, t.emit("data", r)) : (e.length += e.objectMode ? 1 : r.length, n ? e.buffer.unshift(r) : e.buffer.push(r), (e.state & Ki) !== 0 && Ji(t)), Qi(t, e);
  }
  le.prototype.isPaused = function() {
    let t = this._readableState;
    return t[xr] === true || t.flowing === false;
  };
  le.prototype.setEncoding = function(t) {
    let e = new od(t);
    this._readableState.decoder = e, this._readableState.encoding = this._readableState.decoder.encoding;
    let r = this._readableState.buffer, n = "";
    for (let i of r) n += e.write(i);
    return r.clear(), n !== "" && r.push(n), this._readableState.length = n.length, this;
  };
  var Av = 1073741824;
  function Iv(t) {
    if (t > Av) throw new lv("size", "<= 1GiB", t);
    return t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++, t;
  }
  function td(t, e) {
    return t <= 0 || e.length === 0 && e.ended ? 0 : (e.state & rn) !== 0 ? 1 : K_(t) ? e.flowing && e.length ? e.buffer.first().length : e.length : t <= e.length ? t : e.ended ? e.length : 0;
  }
  le.prototype.read = function(t) {
    de("read", t), t === void 0 ? t = NaN : z_(t) || (t = Q_(t, 10));
    let e = this._readableState, r = t;
    if (t > e.highWaterMark && (e.highWaterMark = Iv(t)), t !== 0 && (e.state &= ~ud), t === 0 && e.needReadable && ((e.highWaterMark !== 0 ? e.length >= e.highWaterMark : e.length > 0) || e.ended)) return de("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? Ws(this) : Ji(this), null;
    if (t = td(t, e), t === 0 && e.ended) return e.length === 0 && Ws(this), null;
    let n = (e.state & Ki) !== 0;
    if (de("need readable", n), (e.length === 0 || e.length - t < e.highWaterMark) && (n = true, de("length less than watermark", n)), e.ended || e.reading || e.destroyed || e.errored || !e.constructed) n = false, de("reading, ended or constructing", n);
    else if (n) {
      de("do read"), e.state |= Mn | zi, e.length === 0 && (e.state |= Ki);
      try {
        this._read(e.highWaterMark);
      } catch (s) {
        tn(this, s);
      }
      e.state &= ~zi, e.reading || (t = td(r, e));
    }
    let i;
    return t > 0 ? i = yd(t, e) : i = null, i === null ? (e.needReadable = e.length <= e.highWaterMark, t = 0) : (e.length -= t, e.multiAwaitDrain ? e.awaitDrainWriters.clear() : e.awaitDrainWriters = null), e.length === 0 && (e.ended || (e.needReadable = true), r !== t && e.ended && Ws(this)), i !== null && !e.errorEmitted && !e.closeEmitted && (e.dataEmitted = true, this.emit("data", i)), i;
  };
  function xv(t, e) {
    if (de("onEofChunk"), !e.ended) {
      if (e.decoder) {
        let r = e.decoder.end();
        r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length);
      }
      e.ended = true, e.sync ? Ji(t) : (e.needReadable = false, e.emittedReadable = true, fd(t));
    }
  }
  function Ji(t) {
    let e = t._readableState;
    de("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = false, e.emittedReadable || (de("emitReadable", e.flowing), e.emittedReadable = true, lt.nextTick(fd, t));
  }
  function fd(t) {
    let e = t._readableState;
    de("emitReadable_", e.destroyed, e.length, e.ended), !e.destroyed && !e.errored && (e.length || e.ended) && (t.emit("readable"), e.emittedReadable = false), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, dd(t);
  }
  function Qi(t, e) {
    !e.readingMore && e.constructed && (e.readingMore = true, lt.nextTick(Tv, t, e));
  }
  function Tv(t, e) {
    for (; !e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && e.length === 0); ) {
      let r = e.length;
      if (de("maybeReadMore read 0"), t.read(0), r === e.length) break;
    }
    e.readingMore = false;
  }
  le.prototype._read = function(t) {
    throw new uv("_read()");
  };
  le.prototype.pipe = function(t, e) {
    let r = this, n = this._readableState;
    n.pipes.length === 1 && (n.multiAwaitDrain || (n.multiAwaitDrain = true, n.awaitDrainWriters = new J_(n.awaitDrainWriters ? [n.awaitDrainWriters] : []))), n.pipes.push(t), de("pipe count=%d opts=%j", n.pipes.length, e);
    let s = (!e || e.end !== false) && t !== lt.stdout && t !== lt.stderr ? a : b;
    n.endEmitted ? lt.nextTick(s) : r.once("end", s), t.on("unpipe", o);
    function o(w, _) {
      de("onunpipe"), w === r && _ && _.hasUnpiped === false && (_.hasUnpiped = true, h());
    }
    function a() {
      de("onend"), t.end();
    }
    let c, f = false;
    function h() {
      de("cleanup"), t.removeListener("close", P), t.removeListener("finish", S), c && t.removeListener("drain", c), t.removeListener("error", g), t.removeListener("unpipe", o), r.removeListener("end", a), r.removeListener("end", b), r.removeListener("data", m), f = true, c && n.awaitDrainWriters && (!t._writableState || t._writableState.needDrain) && c();
    }
    function d() {
      f || (n.pipes.length === 1 && n.pipes[0] === t ? (de("false write response, pause", 0), n.awaitDrainWriters = t, n.multiAwaitDrain = false) : n.pipes.length > 1 && n.pipes.includes(t) && (de("false write response, pause", n.awaitDrainWriters.size), n.awaitDrainWriters.add(t)), r.pause()), c || (c = Pv(r, t), t.on("drain", c));
    }
    r.on("data", m);
    function m(w) {
      de("ondata");
      let _ = t.write(w);
      de("dest.write", _), _ === false && d();
    }
    function g(w) {
      if (de("onerror", w), b(), t.removeListener("error", g), t.listenerCount("error") === 0) {
        let _ = t._writableState || t._readableState;
        _ && !_.errorEmitted ? tn(t, w) : t.emit("error", w);
      }
    }
    rv(t, "error", g);
    function P() {
      t.removeListener("finish", S), b();
    }
    t.once("close", P);
    function S() {
      de("onfinish"), t.removeListener("close", P), b();
    }
    t.once("finish", S);
    function b() {
      de("unpipe"), r.unpipe(t);
    }
    return t.emit("pipe", r), t.writableNeedDrain === true ? d() : n.flowing || (de("pipe resume"), r.resume()), t;
  };
  function Pv(t, e) {
    return function() {
      let n = t._readableState;
      n.awaitDrainWriters === e ? (de("pipeOnDrain", 1), n.awaitDrainWriters = null) : n.multiAwaitDrain && (de("pipeOnDrain", n.awaitDrainWriters.size), n.awaitDrainWriters.delete(e)), (!n.awaitDrainWriters || n.awaitDrainWriters.size === 0) && t.listenerCount("data") && t.resume();
    };
  }
  le.prototype.unpipe = function(t) {
    let e = this._readableState, r = { hasUnpiped: false };
    if (e.pipes.length === 0) return this;
    if (!t) {
      let i = e.pipes;
      e.pipes = [], this.pause();
      for (let s = 0; s < i.length; s++) i[s].emit("unpipe", this, { hasUnpiped: false });
      return this;
    }
    let n = G_(e.pipes, t);
    return n === -1 ? this : (e.pipes.splice(n, 1), e.pipes.length === 0 && this.pause(), t.emit("unpipe", this, r), this);
  };
  le.prototype.on = function(t, e) {
    let r = nr.prototype.on.call(this, t, e), n = this._readableState;
    return t === "data" ? (n.readableListening = this.listenerCount("readable") > 0, n.flowing !== false && this.resume()) : t === "readable" && !n.endEmitted && !n.readableListening && (n.readableListening = n.needReadable = true, n.flowing = false, n.emittedReadable = false, de("on readable", n.length, n.reading), n.length ? Ji(this) : n.reading || lt.nextTick(Ov, this)), r;
  };
  le.prototype.addListener = le.prototype.on;
  le.prototype.removeListener = function(t, e) {
    let r = nr.prototype.removeListener.call(this, t, e);
    return t === "readable" && lt.nextTick(hd, this), r;
  };
  le.prototype.off = le.prototype.removeListener;
  le.prototype.removeAllListeners = function(t) {
    let e = nr.prototype.removeAllListeners.apply(this, arguments);
    return (t === "readable" || t === void 0) && lt.nextTick(hd, this), e;
  };
  function hd(t) {
    let e = t._readableState;
    e.readableListening = t.listenerCount("readable") > 0, e.resumeScheduled && e[xr] === false ? e.flowing = true : t.listenerCount("data") > 0 ? t.resume() : e.readableListening || (e.flowing = null);
  }
  function Ov(t) {
    de("readable nexttick read 0"), t.read(0);
  }
  le.prototype.resume = function() {
    let t = this._readableState;
    return t.flowing || (de("resume"), t.flowing = !t.readableListening, Rv(this, t)), t[xr] = false, this;
  };
  function Rv(t, e) {
    e.resumeScheduled || (e.resumeScheduled = true, lt.nextTick(kv, t, e));
  }
  function kv(t, e) {
    de("resume", e.reading), e.reading || t.read(0), e.resumeScheduled = false, t.emit("resume"), dd(t), e.flowing && !e.reading && t.read(0);
  }
  le.prototype.pause = function() {
    return de("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (de("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState[xr] = true, this;
  };
  function dd(t) {
    let e = t._readableState;
    for (de("flow", e.flowing); e.flowing && t.read() !== null; ) ;
  }
  le.prototype.wrap = function(t) {
    let e = false;
    t.on("data", (n) => {
      !this.push(n) && t.pause && (e = true, t.pause());
    }), t.on("end", () => {
      this.push(null);
    }), t.on("error", (n) => {
      tn(this, n);
    }), t.on("close", () => {
      this.destroy();
    }), t.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      e && t.resume && (e = false, t.resume());
    };
    let r = Y_(t);
    for (let n = 1; n < r.length; n++) {
      let i = r[n];
      this[i] === void 0 && typeof t[i] == "function" && (this[i] = t[i].bind(t));
    }
    return this;
  };
  le.prototype[Z_] = function() {
    return pd(this);
  };
  le.prototype.iterator = function(t) {
    return t !== void 0 && dv(t, "options"), pd(this, t);
  };
  function pd(t, e) {
    typeof t.read != "function" && (t = le.wrap(t, { objectMode: true }));
    let r = Cv(t, e);
    return r.stream = t, r;
  }
  async function* Cv(t, e) {
    let r = js;
    function n(o) {
      this === t ? (r(), r = js) : r = o;
    }
    t.on("readable", n);
    let i, s = id(t, { writable: false }, (o) => {
      i = o ? ed(i, o) : null, r(), r = js;
    });
    try {
      for (; ; ) {
        let o = t.destroyed ? null : t.read();
        if (o !== null) yield o;
        else {
          if (i) throw i;
          if (i === null) return;
          await new nd(n);
        }
      }
    } catch (o) {
      throw i = ed(i, o), i;
    } finally {
      (i || e?.destroyOnReturn !== false) && (i === void 0 || t._readableState.autoDestroy) ? nn.destroyer(t, null) : (t.off("readable", n), s());
    }
  }
  Gs(le.prototype, { readable: { __proto__: null, get() {
    let t = this._readableState;
    return !!t && t.readable !== false && !t.destroyed && !t.errorEmitted && !t.endEmitted;
  }, set(t) {
    this._readableState && (this._readableState.readable = !!t);
  } }, readableDidRead: { __proto__: null, enumerable: false, get: function() {
    return this._readableState.dataEmitted;
  } }, readableAborted: { __proto__: null, enumerable: false, get: function() {
    return !!(this._readableState.readable !== false && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
  } }, readableHighWaterMark: { __proto__: null, enumerable: false, get: function() {
    return this._readableState.highWaterMark;
  } }, readableBuffer: { __proto__: null, enumerable: false, get: function() {
    return this._readableState && this._readableState.buffer;
  } }, readableFlowing: { __proto__: null, enumerable: false, get: function() {
    return this._readableState.flowing;
  }, set: function(t) {
    this._readableState && (this._readableState.flowing = t);
  } }, readableLength: { __proto__: null, enumerable: false, get() {
    return this._readableState.length;
  } }, readableObjectMode: { __proto__: null, enumerable: false, get() {
    return this._readableState ? this._readableState.objectMode : false;
  } }, readableEncoding: { __proto__: null, enumerable: false, get() {
    return this._readableState ? this._readableState.encoding : null;
  } }, errored: { __proto__: null, enumerable: false, get() {
    return this._readableState ? this._readableState.errored : null;
  } }, closed: { __proto__: null, get() {
    return this._readableState ? this._readableState.closed : false;
  } }, destroyed: { __proto__: null, enumerable: false, get() {
    return this._readableState ? this._readableState.destroyed : false;
  }, set(t) {
    this._readableState && (this._readableState.destroyed = t);
  } }, readableEnded: { __proto__: null, enumerable: false, get() {
    return this._readableState ? this._readableState.endEmitted : false;
  } } });
  Gs(Yi.prototype, { pipesCount: { __proto__: null, get() {
    return this.pipes.length;
  } }, paused: { __proto__: null, get() {
    return this[xr] !== false;
  }, set(t) {
    this[xr] = !!t;
  } } });
  le._fromList = yd;
  function yd(t, e) {
    if (e.length === 0) return null;
    let r;
    return e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (e.decoder ? r = e.buffer.join("") : e.buffer.length === 1 ? r = e.buffer.first() : r = e.buffer.concat(e.length), e.buffer.clear()) : r = e.buffer.consume(t, e.decoder), r;
  }
  function Ws(t) {
    let e = t._readableState;
    de("endReadable", e.endEmitted), e.endEmitted || (e.ended = true, lt.nextTick(Bv, e, t));
  }
  function Bv(t, e) {
    if (de("endReadableNT", t.endEmitted, t.length), !t.errored && !t.closeEmitted && !t.endEmitted && t.length === 0) {
      if (t.endEmitted = true, e.emit("end"), e.writable && e.allowHalfOpen === false) lt.nextTick(Mv, e);
      else if (t.autoDestroy) {
        let r = e._writableState;
        (!r || r.autoDestroy && (r.finished || r.writable === false)) && e.destroy();
      }
    }
  }
  function Mv(t) {
    t.writable && !t.writableEnded && !t.destroyed && t.end();
  }
  le.from = function(t, e) {
    return pv(le, t, e);
  };
  var $s;
  function gd() {
    return $s === void 0 && ($s = {}), $s;
  }
  le.fromWeb = function(t, e) {
    return gd().newStreamReadableFromReadableStream(t, e);
  };
  le.toWeb = function(t, e) {
    return gd().newReadableStreamFromStreamReadable(t, e);
  };
  le.wrap = function(t, e) {
    var r, n;
    return new le(__spreadProps(__spreadValues({ objectMode: (r = (n = t.readableObjectMode) !== null && n !== void 0 ? n : t.objectMode) !== null && r !== void 0 ? r : true }, e), { destroy(i, s) {
      nn.destroyer(t, i), s(i);
    } })).wrap(t);
  };
});
var ro = j((aC, Od) => {
  "use strict";
  A();
  x();
  I();
  var Tr = tr(), { ArrayPrototypeSlice: _d, Error: Nv, FunctionPrototypeSymbolHasInstance: vd, ObjectDefineProperty: Sd, ObjectDefineProperties: qv, ObjectSetPrototypeOf: Ed, StringPrototypeToLowerCase: Lv, Symbol: Uv, SymbolHasInstance: Dv } = Ee();
  Od.exports = Ie;
  Ie.WritableState = Un;
  var { EventEmitter: jv } = (er(), me(Zt)), qn = $i().Stream, { Buffer: Xi } = (ke(), me(qe)), to = Ar(), { addAbortSignal: Fv } = kn(), { getHighWaterMark: Wv, getDefaultHighWaterMark: $v } = Cn(), { ERR_INVALID_ARG_TYPE: Hv, ERR_METHOD_NOT_IMPLEMENTED: Vv, ERR_MULTIPLE_CALLBACK: Ad, ERR_STREAM_CANNOT_PIPE: Gv, ERR_STREAM_DESTROYED: Ln, ERR_STREAM_ALREADY_FINISHED: zv, ERR_STREAM_NULL_VALUES: Kv, ERR_STREAM_WRITE_AFTER_END: Qv, ERR_UNKNOWN_ENCODING: Id } = De().codes, { errorOrDestroy: on } = to;
  Ed(Ie.prototype, qn.prototype);
  Ed(Ie, qn);
  function Qs() {
  }
  var sn = Uv("kOnFinished");
  function Un(t, e, r) {
    typeof r != "boolean" && (r = e instanceof St()), this.objectMode = !!(t && t.objectMode), r && (this.objectMode = this.objectMode || !!(t && t.writableObjectMode)), this.highWaterMark = t ? Wv(this, t, "writableHighWaterMark", r) : $v(false), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
    let n = !!(t && t.decodeStrings === false);
    this.decodeStrings = !n, this.defaultEncoding = t && t.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = Jv.bind(void 0, e), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, eo(this), this.pendingcb = 0, this.constructed = true, this.prefinished = false, this.errorEmitted = false, this.emitClose = !t || t.emitClose !== false, this.autoDestroy = !t || t.autoDestroy !== false, this.errored = null, this.closed = false, this.closeEmitted = false, this[sn] = [];
  }
  function eo(t) {
    t.buffered = [], t.bufferedIndex = 0, t.allBuffers = true, t.allNoop = true;
  }
  Un.prototype.getBuffer = function() {
    return _d(this.buffered, this.bufferedIndex);
  };
  Sd(Un.prototype, "bufferedRequestCount", { __proto__: null, get() {
    return this.buffered.length - this.bufferedIndex;
  } });
  function Ie(t) {
    let e = this instanceof St();
    if (!e && !vd(Ie, this)) return new Ie(t);
    this._writableState = new Un(t, this, e), t && (typeof t.write == "function" && (this._write = t.write), typeof t.writev == "function" && (this._writev = t.writev), typeof t.destroy == "function" && (this._destroy = t.destroy), typeof t.final == "function" && (this._final = t.final), typeof t.construct == "function" && (this._construct = t.construct), t.signal && Fv(t.signal, this)), qn.call(this, t), to.construct(this, () => {
      let r = this._writableState;
      r.writing || Js(this, r), Xs(this, r);
    });
  }
  Sd(Ie, Dv, { __proto__: null, value: function(t) {
    return vd(this, t) ? true : this !== Ie ? false : t && t._writableState instanceof Un;
  } });
  Ie.prototype.pipe = function() {
    on(this, new Gv());
  };
  function xd(t, e, r, n) {
    let i = t._writableState;
    if (typeof r == "function") n = r, r = i.defaultEncoding;
    else {
      if (!r) r = i.defaultEncoding;
      else if (r !== "buffer" && !Xi.isEncoding(r)) throw new Id(r);
      typeof n != "function" && (n = Qs);
    }
    if (e === null) throw new Kv();
    if (!i.objectMode) if (typeof e == "string") i.decodeStrings !== false && (e = Xi.from(e, r), r = "buffer");
    else if (e instanceof Xi) r = "buffer";
    else if (qn._isUint8Array(e)) e = qn._uint8ArrayToBuffer(e), r = "buffer";
    else throw new Hv("chunk", ["string", "Buffer", "Uint8Array"], e);
    let s;
    return i.ending ? s = new Qv() : i.destroyed && (s = new Ln("write")), s ? (Tr.nextTick(n, s), on(t, s, true), s) : (i.pendingcb++, Yv(t, i, e, r, n));
  }
  Ie.prototype.write = function(t, e, r) {
    return xd(this, t, e, r) === true;
  };
  Ie.prototype.cork = function() {
    this._writableState.corked++;
  };
  Ie.prototype.uncork = function() {
    let t = this._writableState;
    t.corked && (t.corked--, t.writing || Js(this, t));
  };
  Ie.prototype.setDefaultEncoding = function(e) {
    if (typeof e == "string" && (e = Lv(e)), !Xi.isEncoding(e)) throw new Id(e);
    return this._writableState.defaultEncoding = e, this;
  };
  function Yv(t, e, r, n, i) {
    let s = e.objectMode ? 1 : r.length;
    e.length += s;
    let o = e.length < e.highWaterMark;
    return o || (e.needDrain = true), e.writing || e.corked || e.errored || !e.constructed ? (e.buffered.push({ chunk: r, encoding: n, callback: i }), e.allBuffers && n !== "buffer" && (e.allBuffers = false), e.allNoop && i !== Qs && (e.allNoop = false)) : (e.writelen = s, e.writecb = i, e.writing = true, e.sync = true, t._write(r, n, e.onwrite), e.sync = false), o && !e.errored && !e.destroyed;
  }
  function wd(t, e, r, n, i, s, o) {
    e.writelen = n, e.writecb = o, e.writing = true, e.sync = true, e.destroyed ? e.onwrite(new Ln("write")) : r ? t._writev(i, e.onwrite) : t._write(i, s, e.onwrite), e.sync = false;
  }
  function md(t, e, r, n) {
    --e.pendingcb, n(r), Ys(e), on(t, r);
  }
  function Jv(t, e) {
    let r = t._writableState, n = r.sync, i = r.writecb;
    if (typeof i != "function") {
      on(t, new Ad());
      return;
    }
    r.writing = false, r.writecb = null, r.length -= r.writelen, r.writelen = 0, e ? (e.stack, r.errored || (r.errored = e), t._readableState && !t._readableState.errored && (t._readableState.errored = e), n ? Tr.nextTick(md, t, r, e, i) : md(t, r, e, i)) : (r.buffered.length > r.bufferedIndex && Js(t, r), n ? r.afterWriteTickInfo !== null && r.afterWriteTickInfo.cb === i ? r.afterWriteTickInfo.count++ : (r.afterWriteTickInfo = { count: 1, cb: i, stream: t, state: r }, Tr.nextTick(Xv, r.afterWriteTickInfo)) : Td(t, r, 1, i));
  }
  function Xv({ stream: t, state: e, count: r, cb: n }) {
    return e.afterWriteTickInfo = null, Td(t, e, r, n);
  }
  function Td(t, e, r, n) {
    for (!e.ending && !t.destroyed && e.length === 0 && e.needDrain && (e.needDrain = false, t.emit("drain")); r-- > 0; ) e.pendingcb--, n();
    e.destroyed && Ys(e), Xs(t, e);
  }
  function Ys(t) {
    if (t.writing) return;
    for (let i = t.bufferedIndex; i < t.buffered.length; ++i) {
      var e;
      let { chunk: s, callback: o } = t.buffered[i], a = t.objectMode ? 1 : s.length;
      t.length -= a, o((e = t.errored) !== null && e !== void 0 ? e : new Ln("write"));
    }
    let r = t[sn].splice(0);
    for (let i = 0; i < r.length; i++) {
      var n;
      r[i]((n = t.errored) !== null && n !== void 0 ? n : new Ln("end"));
    }
    eo(t);
  }
  function Js(t, e) {
    if (e.corked || e.bufferProcessing || e.destroyed || !e.constructed) return;
    let { buffered: r, bufferedIndex: n, objectMode: i } = e, s = r.length - n;
    if (!s) return;
    let o = n;
    if (e.bufferProcessing = true, s > 1 && t._writev) {
      e.pendingcb -= s - 1;
      let a = e.allNoop ? Qs : (f) => {
        for (let h = o; h < r.length; ++h) r[h].callback(f);
      }, c = e.allNoop && o === 0 ? r : _d(r, o);
      c.allBuffers = e.allBuffers, wd(t, e, true, e.length, c, "", a), eo(e);
    } else {
      do {
        let { chunk: a, encoding: c, callback: f } = r[o];
        r[o++] = null;
        let h = i ? 1 : a.length;
        wd(t, e, false, h, a, c, f);
      } while (o < r.length && !e.writing);
      o === r.length ? eo(e) : o > 256 ? (r.splice(0, o), e.bufferedIndex = 0) : e.bufferedIndex = o;
    }
    e.bufferProcessing = false;
  }
  Ie.prototype._write = function(t, e, r) {
    if (this._writev) this._writev([{ chunk: t, encoding: e }], r);
    else throw new Vv("_write()");
  };
  Ie.prototype._writev = null;
  Ie.prototype.end = function(t, e, r) {
    let n = this._writableState;
    typeof t == "function" ? (r = t, t = null, e = null) : typeof e == "function" && (r = e, e = null);
    let i;
    if (t != null) {
      let s = xd(this, t, e);
      s instanceof Nv && (i = s);
    }
    return n.corked && (n.corked = 1, this.uncork()), i || (!n.errored && !n.ending ? (n.ending = true, Xs(this, n, true), n.ended = true) : n.finished ? i = new zv("end") : n.destroyed && (i = new Ln("end"))), typeof r == "function" && (i || n.finished ? Tr.nextTick(r, i) : n[sn].push(r)), this;
  };
  function Zi(t) {
    return t.ending && !t.destroyed && t.constructed && t.length === 0 && !t.errored && t.buffered.length === 0 && !t.finished && !t.writing && !t.errorEmitted && !t.closeEmitted;
  }
  function Zv(t, e) {
    let r = false;
    function n(i) {
      if (r) {
        on(t, i ?? Ad());
        return;
      }
      if (r = true, e.pendingcb--, i) {
        let s = e[sn].splice(0);
        for (let o = 0; o < s.length; o++) s[o](i);
        on(t, i, e.sync);
      } else Zi(e) && (e.prefinished = true, t.emit("prefinish"), e.pendingcb++, Tr.nextTick(Ks, t, e));
    }
    e.sync = true, e.pendingcb++;
    try {
      t._final(n);
    } catch (i) {
      n(i);
    }
    e.sync = false;
  }
  function e0(t, e) {
    !e.prefinished && !e.finalCalled && (typeof t._final == "function" && !e.destroyed ? (e.finalCalled = true, Zv(t, e)) : (e.prefinished = true, t.emit("prefinish")));
  }
  function Xs(t, e, r) {
    Zi(e) && (e0(t, e), e.pendingcb === 0 && (r ? (e.pendingcb++, Tr.nextTick((n, i) => {
      Zi(i) ? Ks(n, i) : i.pendingcb--;
    }, t, e)) : Zi(e) && (e.pendingcb++, Ks(t, e))));
  }
  function Ks(t, e) {
    e.pendingcb--, e.finished = true;
    let r = e[sn].splice(0);
    for (let n = 0; n < r.length; n++) r[n]();
    if (t.emit("finish"), e.autoDestroy) {
      let n = t._readableState;
      (!n || n.autoDestroy && (n.endEmitted || n.readable === false)) && t.destroy();
    }
  }
  qv(Ie.prototype, { closed: { __proto__: null, get() {
    return this._writableState ? this._writableState.closed : false;
  } }, destroyed: { __proto__: null, get() {
    return this._writableState ? this._writableState.destroyed : false;
  }, set(t) {
    this._writableState && (this._writableState.destroyed = t);
  } }, writable: { __proto__: null, get() {
    let t = this._writableState;
    return !!t && t.writable !== false && !t.destroyed && !t.errored && !t.ending && !t.ended;
  }, set(t) {
    this._writableState && (this._writableState.writable = !!t);
  } }, writableFinished: { __proto__: null, get() {
    return this._writableState ? this._writableState.finished : false;
  } }, writableObjectMode: { __proto__: null, get() {
    return this._writableState ? this._writableState.objectMode : false;
  } }, writableBuffer: { __proto__: null, get() {
    return this._writableState && this._writableState.getBuffer();
  } }, writableEnded: { __proto__: null, get() {
    return this._writableState ? this._writableState.ending : false;
  } }, writableNeedDrain: { __proto__: null, get() {
    let t = this._writableState;
    return t ? !t.destroyed && !t.ending && t.needDrain : false;
  } }, writableHighWaterMark: { __proto__: null, get() {
    return this._writableState && this._writableState.highWaterMark;
  } }, writableCorked: { __proto__: null, get() {
    return this._writableState ? this._writableState.corked : 0;
  } }, writableLength: { __proto__: null, get() {
    return this._writableState && this._writableState.length;
  } }, errored: { __proto__: null, enumerable: false, get() {
    return this._writableState ? this._writableState.errored : null;
  } }, writableAborted: { __proto__: null, enumerable: false, get: function() {
    return !!(this._writableState.writable !== false && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
  } } });
  var t0 = to.destroy;
  Ie.prototype.destroy = function(t, e) {
    let r = this._writableState;
    return !r.destroyed && (r.bufferedIndex < r.buffered.length || r[sn].length) && Tr.nextTick(Ys, r), t0.call(this, t, e), this;
  };
  Ie.prototype._undestroy = to.undestroy;
  Ie.prototype._destroy = function(t, e) {
    e(t);
  };
  Ie.prototype[jv.captureRejectionSymbol] = function(t) {
    this.destroy(t);
  };
  var zs;
  function Pd() {
    return zs === void 0 && (zs = {}), zs;
  }
  Ie.fromWeb = function(t, e) {
    return Pd().newStreamWritableFromWritableStream(t, e);
  };
  Ie.toWeb = function(t) {
    return Pd().newWritableStreamFromStreamWritable(t);
  };
});
var Hd = j((bC, $d) => {
  A();
  x();
  I();
  var Zs = tr(), r0 = (ke(), me(qe)), { isReadable: n0, isWritable: i0, isIterable: Rd, isNodeStream: o0, isReadableNodeStream: kd, isWritableNodeStream: Cd, isDuplexNodeStream: s0, isReadableStream: Bd, isWritableStream: Md } = mt(), Nd = Ut(), { AbortError: Fd, codes: { ERR_INVALID_ARG_TYPE: a0, ERR_INVALID_RETURN_VALUE: qd } } = De(), { destroyer: un } = Ar(), u0 = St(), Wd = Nn(), l0 = ro(), { createDeferredPromise: Ld } = $e(), Ud = Us(), Dd = globalThis.Blob || r0.Blob, c0 = typeof Dd < "u" ? function(e) {
    return e instanceof Dd;
  } : function(e) {
    return false;
  }, f0 = globalThis.AbortController || Yr().AbortController, { FunctionPrototypeCall: jd } = Ee(), ir = class extends u0 {
    constructor(e) {
      super(e), e?.readable === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), e?.writable === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true);
    }
  };
  $d.exports = function t(e, r) {
    if (s0(e)) return e;
    if (kd(e)) return an({ readable: e });
    if (Cd(e)) return an({ writable: e });
    if (o0(e)) return an({ writable: false, readable: false });
    if (Bd(e)) return an({ readable: Wd.fromWeb(e) });
    if (Md(e)) return an({ writable: l0.fromWeb(e) });
    if (typeof e == "function") {
      let { value: i, write: s, final: o, destroy: a } = h0(e);
      if (Rd(i)) return Ud(ir, i, { objectMode: true, write: s, final: o, destroy: a });
      let c = i?.then;
      if (typeof c == "function") {
        let f, h = jd(c, i, (d) => {
          if (d != null) throw new qd("nully", "body", d);
        }, (d) => {
          un(f, d);
        });
        return f = new ir({ objectMode: true, readable: false, write: s, final(d) {
          o(async () => {
            try {
              await h, Zs.nextTick(d, null);
            } catch (m) {
              Zs.nextTick(d, m);
            }
          });
        }, destroy: a });
      }
      throw new qd("Iterable, AsyncIterable or AsyncFunction", r, i);
    }
    if (c0(e)) return t(e.arrayBuffer());
    if (Rd(e)) return Ud(ir, e, { objectMode: true, writable: false });
    if (Bd(e?.readable) && Md(e?.writable)) return ir.fromWeb(e);
    if (typeof e?.writable == "object" || typeof e?.readable == "object") {
      let i = e != null && e.readable ? kd(e?.readable) ? e?.readable : t(e.readable) : void 0, s = e != null && e.writable ? Cd(e?.writable) ? e?.writable : t(e.writable) : void 0;
      return an({ readable: i, writable: s });
    }
    let n = e?.then;
    if (typeof n == "function") {
      let i;
      return jd(n, e, (s) => {
        s != null && i.push(s), i.push(null);
      }, (s) => {
        un(i, s);
      }), i = new ir({ objectMode: true, writable: false, read() {
      } });
    }
    throw new a0(r, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], e);
  };
  function h0(t) {
    let { promise: e, resolve: r } = Ld(), n = new f0(), i = n.signal;
    return { value: t((async function* () {
      for (; ; ) {
        let o = e;
        e = null;
        let { chunk: a, done: c, cb: f } = await o;
        if (Zs.nextTick(f), c) return;
        if (i.aborted) throw new Fd(void 0, { cause: i.reason });
        ({ promise: e, resolve: r } = Ld()), yield a;
      }
    })(), { signal: i }), write(o, a, c) {
      let f = r;
      r = null, f({ chunk: o, done: false, cb: c });
    }, final(o) {
      let a = r;
      r = null, a({ done: true, cb: o });
    }, destroy(o, a) {
      n.abort(), a(o);
    } };
  }
  function an(t) {
    let e = t.readable && typeof t.readable.read != "function" ? Wd.wrap(t.readable) : t.readable, r = t.writable, n = !!n0(e), i = !!i0(r), s, o, a, c, f;
    function h(d) {
      let m = c;
      c = null, m ? m(d) : d && f.destroy(d);
    }
    return f = new ir({ readableObjectMode: !!(e != null && e.readableObjectMode), writableObjectMode: !!(r != null && r.writableObjectMode), readable: n, writable: i }), i && (Nd(r, (d) => {
      i = false, d && un(e, d), h(d);
    }), f._write = function(d, m, g) {
      r.write(d, m) ? g() : s = g;
    }, f._final = function(d) {
      r.end(), o = d;
    }, r.on("drain", function() {
      if (s) {
        let d = s;
        s = null, d();
      }
    }), r.on("finish", function() {
      if (o) {
        let d = o;
        o = null, d();
      }
    })), n && (Nd(e, (d) => {
      n = false, d && un(e, d), h(d);
    }), e.on("readable", function() {
      if (a) {
        let d = a;
        a = null, d();
      }
    }), e.on("end", function() {
      f.push(null);
    }), f._read = function() {
      for (; ; ) {
        let d = e.read();
        if (d === null) {
          a = f._read;
          return;
        }
        if (!f.push(d)) return;
      }
    }), f._destroy = function(d, m) {
      !d && c !== null && (d = new Fd()), a = null, s = null, o = null, c === null ? m(d) : (c = m, un(r, d), un(e, d));
    }, f;
  }
});
var St = j((TC, zd) => {
  "use strict";
  A();
  x();
  I();
  var { ObjectDefineProperties: d0, ObjectGetOwnPropertyDescriptor: Dt, ObjectKeys: p0, ObjectSetPrototypeOf: Vd } = Ee();
  zd.exports = ct;
  var ra = Nn(), tt = ro();
  Vd(ct.prototype, ra.prototype);
  Vd(ct, ra);
  {
    let t = p0(tt.prototype);
    for (let e = 0; e < t.length; e++) {
      let r = t[e];
      ct.prototype[r] || (ct.prototype[r] = tt.prototype[r]);
    }
  }
  function ct(t) {
    if (!(this instanceof ct)) return new ct(t);
    ra.call(this, t), tt.call(this, t), t ? (this.allowHalfOpen = t.allowHalfOpen !== false, t.readable === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), t.writable === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true)) : this.allowHalfOpen = true;
  }
  d0(ct.prototype, { writable: __spreadValues({ __proto__: null }, Dt(tt.prototype, "writable")), writableHighWaterMark: __spreadValues({ __proto__: null }, Dt(tt.prototype, "writableHighWaterMark")), writableObjectMode: __spreadValues({ __proto__: null }, Dt(tt.prototype, "writableObjectMode")), writableBuffer: __spreadValues({ __proto__: null }, Dt(tt.prototype, "writableBuffer")), writableLength: __spreadValues({ __proto__: null }, Dt(tt.prototype, "writableLength")), writableFinished: __spreadValues({ __proto__: null }, Dt(tt.prototype, "writableFinished")), writableCorked: __spreadValues({ __proto__: null }, Dt(tt.prototype, "writableCorked")), writableEnded: __spreadValues({ __proto__: null }, Dt(tt.prototype, "writableEnded")), writableNeedDrain: __spreadValues({ __proto__: null }, Dt(tt.prototype, "writableNeedDrain")), destroyed: { __proto__: null, get() {
    return this._readableState === void 0 || this._writableState === void 0 ? false : this._readableState.destroyed && this._writableState.destroyed;
  }, set(t) {
    this._readableState && this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t);
  } } });
  var ea;
  function Gd() {
    return ea === void 0 && (ea = {}), ea;
  }
  ct.fromWeb = function(t, e) {
    return Gd().newStreamDuplexFromReadableWritablePair(t, e);
  };
  ct.toWeb = function(t) {
    return Gd().newReadableWritablePairFromDuplex(t);
  };
  var ta;
  ct.from = function(t) {
    return ta || (ta = Hd()), ta(t, "body");
  };
});
var oa = j((LC, Qd) => {
  "use strict";
  A();
  x();
  I();
  var { ObjectSetPrototypeOf: Kd, Symbol: y0 } = Ee();
  Qd.exports = jt;
  var { ERR_METHOD_NOT_IMPLEMENTED: g0 } = De().codes, ia = St(), { getHighWaterMark: b0 } = Cn();
  Kd(jt.prototype, ia.prototype);
  Kd(jt, ia);
  var Dn = y0("kCallback");
  function jt(t) {
    if (!(this instanceof jt)) return new jt(t);
    let e = t ? b0(this, t, "readableHighWaterMark", true) : null;
    e === 0 && (t = __spreadProps(__spreadValues({}, t), { highWaterMark: null, readableHighWaterMark: e, writableHighWaterMark: t.writableHighWaterMark || 0 })), ia.call(this, t), this._readableState.sync = false, this[Dn] = null, t && (typeof t.transform == "function" && (this._transform = t.transform), typeof t.flush == "function" && (this._flush = t.flush)), this.on("prefinish", w0);
  }
  function na(t) {
    typeof this._flush == "function" && !this.destroyed ? this._flush((e, r) => {
      if (e) {
        t ? t(e) : this.destroy(e);
        return;
      }
      r != null && this.push(r), this.push(null), t && t();
    }) : (this.push(null), t && t());
  }
  function w0() {
    this._final !== na && na.call(this);
  }
  jt.prototype._final = na;
  jt.prototype._transform = function(t, e, r) {
    throw new g0("_transform()");
  };
  jt.prototype._write = function(t, e, r) {
    let n = this._readableState, i = this._writableState, s = n.length;
    this._transform(t, e, (o, a) => {
      if (o) {
        r(o);
        return;
      }
      a != null && this.push(a), i.ended || s === n.length || n.length < n.highWaterMark ? r() : this[Dn] = r;
    });
  };
  jt.prototype._read = function() {
    if (this[Dn]) {
      let t = this[Dn];
      this[Dn] = null, t();
    }
  };
});
var aa = j((zC, Jd) => {
  "use strict";
  A();
  x();
  I();
  var { ObjectSetPrototypeOf: Yd } = Ee();
  Jd.exports = ln;
  var sa = oa();
  Yd(ln.prototype, sa.prototype);
  Yd(ln, sa);
  function ln(t) {
    if (!(this instanceof ln)) return new ln(t);
    sa.call(this, t);
  }
  ln.prototype._transform = function(t, e, r) {
    r(null, t);
  };
});
var so = j((nB, rp) => {
  A();
  x();
  I();
  var jn = tr(), { ArrayIsArray: m0, Promise: _0, SymbolAsyncIterator: v0, SymbolDispose: S0 } = Ee(), oo = Ut(), { once: E0 } = $e(), A0 = Ar(), Xd = St(), { aggregateTwoErrors: I0, codes: { ERR_INVALID_ARG_TYPE: ga, ERR_INVALID_RETURN_VALUE: ua, ERR_MISSING_ARGS: x0, ERR_STREAM_DESTROYED: T0, ERR_STREAM_PREMATURE_CLOSE: P0 }, AbortError: O0 } = De(), { validateFunction: R0, validateAbortSignal: k0 } = Xr(), { isIterable: Pr, isReadable: la, isReadableNodeStream: io, isNodeStream: Zd, isTransformStream: cn, isWebStream: C0, isReadableStream: ca, isReadableFinished: B0 } = mt(), M0 = globalThis.AbortController || Yr().AbortController, fa, ha, da;
  function ep(t, e, r) {
    let n = false;
    t.on("close", () => {
      n = true;
    });
    let i = oo(t, { readable: e, writable: r }, (s) => {
      n = !s;
    });
    return { destroy: (s) => {
      n || (n = true, A0.destroyer(t, s || new T0("pipe")));
    }, cleanup: i };
  }
  function N0(t) {
    return R0(t[t.length - 1], "streams[stream.length - 1]"), t.pop();
  }
  function pa(t) {
    if (Pr(t)) return t;
    if (io(t)) return q0(t);
    throw new ga("val", ["Readable", "Iterable", "AsyncIterable"], t);
  }
  async function* q0(t) {
    ha || (ha = Nn()), yield* ha.prototype[v0].call(t);
  }
  async function no(t, e, r, { end: n }) {
    let i, s = null, o = (f) => {
      if (f && (i = f), s) {
        let h = s;
        s = null, h();
      }
    }, a = () => new _0((f, h) => {
      i ? h(i) : s = () => {
        i ? h(i) : f();
      };
    });
    e.on("drain", o);
    let c = oo(e, { readable: false }, o);
    try {
      e.writableNeedDrain && await a();
      for await (let f of t) e.write(f) || await a();
      n && (e.end(), await a()), r();
    } catch (f) {
      r(i !== f ? I0(i, f) : f);
    } finally {
      c(), e.off("drain", o);
    }
  }
  async function ya(t, e, r, { end: n }) {
    cn(e) && (e = e.writable);
    let i = e.getWriter();
    try {
      for await (let s of t) await i.ready, i.write(s).catch(() => {
      });
      await i.ready, n && await i.close(), r();
    } catch (s) {
      try {
        await i.abort(s), r(s);
      } catch (o) {
        r(o);
      }
    }
  }
  function L0(...t) {
    return tp(t, E0(N0(t)));
  }
  function tp(t, e, r) {
    if (t.length === 1 && m0(t[0]) && (t = t[0]), t.length < 2) throw new x0("streams");
    let n = new M0(), i = n.signal, s = r?.signal, o = [];
    k0(s, "options.signal");
    function a() {
      P(new O0());
    }
    da = da || $e().addAbortListener;
    let c;
    s && (c = da(s, a));
    let f, h, d = [], m = 0;
    function g(R) {
      P(R, --m === 0);
    }
    function P(R, T) {
      var y;
      if (R && (!f || f.code === "ERR_STREAM_PREMATURE_CLOSE") && (f = R), !(!f && !T)) {
        for (; d.length; ) d.shift()(f);
        (y = c) === null || y === void 0 || y[S0](), n.abort(), T && (f || o.forEach((O) => O()), jn.nextTick(e, f, h));
      }
    }
    let S;
    for (let R = 0; R < t.length; R++) {
      let T = t[R], y = R < t.length - 1, O = R > 0, v = y || r?.end !== false, M = R === t.length - 1;
      if (Zd(T)) {
        let F = function(U) {
          U && U.name !== "AbortError" && U.code !== "ERR_STREAM_PREMATURE_CLOSE" && g(U);
        };
        var _ = F;
        if (v) {
          let { destroy: U, cleanup: Q } = ep(T, y, O);
          d.push(U), la(T) && M && o.push(Q);
        }
        T.on("error", F), la(T) && M && o.push(() => {
          T.removeListener("error", F);
        });
      }
      if (R === 0) if (typeof T == "function") {
        if (S = T({ signal: i }), !Pr(S)) throw new ua("Iterable, AsyncIterable or Stream", "source", S);
      } else Pr(T) || io(T) || cn(T) ? S = T : S = Xd.from(T);
      else if (typeof T == "function") {
        if (cn(S)) {
          var b;
          S = pa((b = S) === null || b === void 0 ? void 0 : b.readable);
        } else S = pa(S);
        if (S = T(S, { signal: i }), y) {
          if (!Pr(S, true)) throw new ua("AsyncIterable", `transform[${R - 1}]`, S);
        } else {
          var w;
          fa || (fa = aa());
          let F = new fa({ objectMode: true }), U = (w = S) === null || w === void 0 ? void 0 : w.then;
          if (typeof U == "function") m++, U.call(S, (H) => {
            h = H, H != null && F.write(H), v && F.end(), jn.nextTick(g);
          }, (H) => {
            F.destroy(H), jn.nextTick(g, H);
          });
          else if (Pr(S, true)) m++, no(S, F, g, { end: v });
          else if (ca(S) || cn(S)) {
            let H = S.readable || S;
            m++, no(H, F, g, { end: v });
          } else throw new ua("AsyncIterable or Promise", "destination", S);
          S = F;
          let { destroy: Q, cleanup: W } = ep(S, false, true);
          d.push(Q), M && o.push(W);
        }
      } else if (Zd(T)) {
        if (io(S)) {
          m += 2;
          let F = U0(S, T, g, { end: v });
          la(T) && M && o.push(F);
        } else if (cn(S) || ca(S)) {
          let F = S.readable || S;
          m++, no(F, T, g, { end: v });
        } else if (Pr(S)) m++, no(S, T, g, { end: v });
        else throw new ga("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], S);
        S = T;
      } else if (C0(T)) {
        if (io(S)) m++, ya(pa(S), T, g, { end: v });
        else if (ca(S) || Pr(S)) m++, ya(S, T, g, { end: v });
        else if (cn(S)) m++, ya(S.readable, T, g, { end: v });
        else throw new ga("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], S);
        S = T;
      } else S = Xd.from(T);
    }
    return (i != null && i.aborted || s != null && s.aborted) && jn.nextTick(a), S;
  }
  function U0(t, e, r, { end: n }) {
    let i = false;
    if (e.on("close", () => {
      i || r(new P0());
    }), t.pipe(e, { end: false }), n) {
      let o = function() {
        i = true, e.end();
      };
      var s = o;
      B0(t) ? jn.nextTick(o) : t.once("end", o);
    } else r();
    return oo(t, { readable: true, writable: false }, (o) => {
      let a = t._readableState;
      o && o.code === "ERR_STREAM_PREMATURE_CLOSE" && a && a.ended && !a.errored && !a.errorEmitted ? t.once("end", r).once("error", r) : r(o);
    }), oo(e, { readable: false, writable: true }, r);
  }
  rp.exports = { pipelineImpl: tp, pipeline: L0 };
});
var wa = j((dB, up) => {
  "use strict";
  A();
  x();
  I();
  var { pipeline: D0 } = so(), ao = St(), { destroyer: j0 } = Ar(), { isNodeStream: uo, isReadable: np, isWritable: ip, isWebStream: ba, isTransformStream: Or, isWritableStream: op, isReadableStream: sp } = mt(), { AbortError: F0, codes: { ERR_INVALID_ARG_VALUE: ap, ERR_MISSING_ARGS: W0 } } = De(), $0 = Ut();
  up.exports = function(...e) {
    if (e.length === 0) throw new W0("streams");
    if (e.length === 1) return ao.from(e[0]);
    let r = [...e];
    if (typeof e[0] == "function" && (e[0] = ao.from(e[0])), typeof e[e.length - 1] == "function") {
      let g = e.length - 1;
      e[g] = ao.from(e[g]);
    }
    for (let g = 0; g < e.length; ++g) if (!(!uo(e[g]) && !ba(e[g]))) {
      if (g < e.length - 1 && !(np(e[g]) || sp(e[g]) || Or(e[g]))) throw new ap(`streams[${g}]`, r[g], "must be readable");
      if (g > 0 && !(ip(e[g]) || op(e[g]) || Or(e[g]))) throw new ap(`streams[${g}]`, r[g], "must be writable");
    }
    let n, i, s, o, a;
    function c(g) {
      let P = o;
      o = null, P ? P(g) : g ? a.destroy(g) : !m && !d && a.destroy();
    }
    let f = e[0], h = D0(e, c), d = !!(ip(f) || op(f) || Or(f)), m = !!(np(h) || sp(h) || Or(h));
    if (a = new ao({ writableObjectMode: !!(f != null && f.writableObjectMode), readableObjectMode: !!(h != null && h.readableObjectMode), writable: d, readable: m }), d) {
      if (uo(f)) a._write = function(P, S, b) {
        f.write(P, S) ? b() : n = b;
      }, a._final = function(P) {
        f.end(), i = P;
      }, f.on("drain", function() {
        if (n) {
          let P = n;
          n = null, P();
        }
      });
      else if (ba(f)) {
        let S = (Or(f) ? f.writable : f).getWriter();
        a._write = async function(b, w, _) {
          try {
            await S.ready, S.write(b).catch(() => {
            }), _();
          } catch (R) {
            _(R);
          }
        }, a._final = async function(b) {
          try {
            await S.ready, S.close().catch(() => {
            }), i = b;
          } catch (w) {
            b(w);
          }
        };
      }
      let g = Or(h) ? h.readable : h;
      $0(g, () => {
        if (i) {
          let P = i;
          i = null, P();
        }
      });
    }
    if (m) {
      if (uo(h)) h.on("readable", function() {
        if (s) {
          let g = s;
          s = null, g();
        }
      }), h.on("end", function() {
        a.push(null);
      }), a._read = function() {
        for (; ; ) {
          let g = h.read();
          if (g === null) {
            s = a._read;
            return;
          }
          if (!a.push(g)) return;
        }
      };
      else if (ba(h)) {
        let P = (Or(h) ? h.readable : h).getReader();
        a._read = async function() {
          for (; ; ) try {
            let { value: S, done: b } = await P.read();
            if (!a.push(S)) return;
            if (b) {
              a.push(null);
              return;
            }
          } catch {
            return;
          }
        };
      }
    }
    return a._destroy = function(g, P) {
      !g && o !== null && (g = new F0()), s = null, n = null, i = null, o === null ? P(g) : (o = P, uo(h) && j0(h, g));
    }, a;
  };
});
var wp = j((EB, va) => {
  "use strict";
  A();
  x();
  I();
  var H0 = globalThis.AbortController || Yr().AbortController, { codes: { ERR_INVALID_ARG_VALUE: V0, ERR_INVALID_ARG_TYPE: Fn, ERR_MISSING_ARGS: G0, ERR_OUT_OF_RANGE: z0 }, AbortError: Et } = De(), { validateAbortSignal: Rr, validateInteger: lp, validateObject: kr } = Xr(), K0 = Ee().Symbol("kWeak"), Q0 = Ee().Symbol("kResistStopPropagation"), { finished: Y0 } = Ut(), J0 = wa(), { addAbortSignalNoValidate: X0 } = kn(), { isWritable: Z0, isNodeStream: eS } = mt(), { deprecate: tS } = $e(), { ArrayPrototypePush: rS, Boolean: nS, MathFloor: cp, Number: iS, NumberIsNaN: oS, Promise: fp, PromiseReject: hp, PromiseResolve: sS, PromisePrototypeThen: dp, Symbol: yp } = Ee(), lo = yp("kEmpty"), pp = yp("kEof");
  function aS(t, e) {
    if (e != null && kr(e, "options"), e?.signal != null && Rr(e.signal, "options.signal"), eS(t) && !Z0(t)) throw new V0("stream", t, "must be writable");
    let r = J0(this, t);
    return e != null && e.signal && X0(e.signal, r), r;
  }
  function co(t, e) {
    if (typeof t != "function") throw new Fn("fn", ["Function", "AsyncFunction"], t);
    e != null && kr(e, "options"), e?.signal != null && Rr(e.signal, "options.signal");
    let r = 1;
    e?.concurrency != null && (r = cp(e.concurrency));
    let n = r - 1;
    return e?.highWaterMark != null && (n = cp(e.highWaterMark)), lp(r, "options.concurrency", 1), lp(n, "options.highWaterMark", 0), n += r, async function* () {
      let s = $e().AbortSignalAny([e?.signal].filter(nS)), o = this, a = [], c = { signal: s }, f, h, d = false, m = 0;
      function g() {
        d = true, P();
      }
      function P() {
        m -= 1, S();
      }
      function S() {
        h && !d && m < r && a.length < n && (h(), h = null);
      }
      async function b() {
        try {
          for await (let w of o) {
            if (d) return;
            if (s.aborted) throw new Et();
            try {
              if (w = t(w, c), w === lo) continue;
              w = sS(w);
            } catch (_) {
              w = hp(_);
            }
            m += 1, dp(w, P, g), a.push(w), f && (f(), f = null), !d && (a.length >= n || m >= r) && await new fp((_) => {
              h = _;
            });
          }
          a.push(pp);
        } catch (w) {
          let _ = hp(w);
          dp(_, P, g), a.push(_);
        } finally {
          d = true, f && (f(), f = null);
        }
      }
      b();
      try {
        for (; ; ) {
          for (; a.length > 0; ) {
            let w = await a[0];
            if (w === pp) return;
            if (s.aborted) throw new Et();
            w !== lo && (yield w), a.shift(), S();
          }
          await new fp((w) => {
            f = w;
          });
        }
      } finally {
        d = true, h && (h(), h = null);
      }
    }.call(this);
  }
  function uS(t = void 0) {
    return t != null && kr(t, "options"), t?.signal != null && Rr(t.signal, "options.signal"), async function* () {
      let r = 0;
      for await (let i of this) {
        var n;
        if (t != null && (n = t.signal) !== null && n !== void 0 && n.aborted) throw new Et({ cause: t.signal.reason });
        yield [r++, i];
      }
    }.call(this);
  }
  async function gp(t, e = void 0) {
    for await (let r of _a.call(this, t, e)) return true;
    return false;
  }
  async function lS(t, e = void 0) {
    if (typeof t != "function") throw new Fn("fn", ["Function", "AsyncFunction"], t);
    return !await gp.call(this, async (...r) => !await t(...r), e);
  }
  async function cS(t, e) {
    for await (let r of _a.call(this, t, e)) return r;
  }
  async function fS(t, e) {
    if (typeof t != "function") throw new Fn("fn", ["Function", "AsyncFunction"], t);
    async function r(n, i) {
      return await t(n, i), lo;
    }
    for await (let n of co.call(this, r, e)) ;
  }
  function _a(t, e) {
    if (typeof t != "function") throw new Fn("fn", ["Function", "AsyncFunction"], t);
    async function r(n, i) {
      return await t(n, i) ? n : lo;
    }
    return co.call(this, r, e);
  }
  var ma = class extends G0 {
    constructor() {
      super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
    }
  };
  async function hS(t, e, r) {
    var n;
    if (typeof t != "function") throw new Fn("reducer", ["Function", "AsyncFunction"], t);
    r != null && kr(r, "options"), r?.signal != null && Rr(r.signal, "options.signal");
    let i = arguments.length > 1;
    if (r != null && (n = r.signal) !== null && n !== void 0 && n.aborted) {
      let f = new Et(void 0, { cause: r.signal.reason });
      throw this.once("error", () => {
      }), await Y0(this.destroy(f)), f;
    }
    let s = new H0(), o = s.signal;
    if (r != null && r.signal) {
      let f = { once: true, [K0]: this, [Q0]: true };
      r.signal.addEventListener("abort", () => s.abort(), f);
    }
    let a = false;
    try {
      for await (let f of this) {
        var c;
        if (a = true, r != null && (c = r.signal) !== null && c !== void 0 && c.aborted) throw new Et();
        i ? e = await t(e, f, { signal: o }) : (e = f, i = true);
      }
      if (!a && !i) throw new ma();
    } finally {
      s.abort();
    }
    return e;
  }
  async function dS(t) {
    t != null && kr(t, "options"), t?.signal != null && Rr(t.signal, "options.signal");
    let e = [];
    for await (let n of this) {
      var r;
      if (t != null && (r = t.signal) !== null && r !== void 0 && r.aborted) throw new Et(void 0, { cause: t.signal.reason });
      rS(e, n);
    }
    return e;
  }
  function pS(t, e) {
    let r = co.call(this, t, e);
    return async function* () {
      for await (let i of r) yield* i;
    }.call(this);
  }
  function bp(t) {
    if (t = iS(t), oS(t)) return 0;
    if (t < 0) throw new z0("number", ">= 0", t);
    return t;
  }
  function yS(t, e = void 0) {
    return e != null && kr(e, "options"), e?.signal != null && Rr(e.signal, "options.signal"), t = bp(t), async function* () {
      var n;
      if (e != null && (n = e.signal) !== null && n !== void 0 && n.aborted) throw new Et();
      for await (let s of this) {
        var i;
        if (e != null && (i = e.signal) !== null && i !== void 0 && i.aborted) throw new Et();
        t-- <= 0 && (yield s);
      }
    }.call(this);
  }
  function gS(t, e = void 0) {
    return e != null && kr(e, "options"), e?.signal != null && Rr(e.signal, "options.signal"), t = bp(t), async function* () {
      var n;
      if (e != null && (n = e.signal) !== null && n !== void 0 && n.aborted) throw new Et();
      for await (let s of this) {
        var i;
        if (e != null && (i = e.signal) !== null && i !== void 0 && i.aborted) throw new Et();
        if (t-- > 0 && (yield s), t <= 0) return;
      }
    }.call(this);
  }
  va.exports.streamReturningOperators = { asIndexedPairs: tS(uS, "readable.asIndexedPairs will be removed in a future version."), drop: yS, filter: _a, flatMap: pS, map: co, take: gS, compose: aS };
  va.exports.promiseReturningOperators = { every: lS, forEach: fS, reduce: hS, toArray: dS, some: gp, find: cS };
});
var Sa = j((BB, mp) => {
  "use strict";
  A();
  x();
  I();
  var { ArrayPrototypePop: bS, Promise: wS } = Ee(), { isIterable: mS, isNodeStream: _S, isWebStream: vS } = mt(), { pipelineImpl: SS } = so(), { finished: ES } = Ut();
  Ea();
  function AS(...t) {
    return new wS((e, r) => {
      let n, i, s = t[t.length - 1];
      if (s && typeof s == "object" && !_S(s) && !mS(s) && !vS(s)) {
        let o = bS(t);
        n = o.signal, i = o.end;
      }
      SS(t, (o, a) => {
        o ? r(o) : e(a);
      }, { signal: n, end: i });
    });
  }
  mp.exports = { finished: ES, pipeline: AS };
});
var Ea = j(($B, Pp) => {
  "use strict";
  A();
  x();
  I();
  var { Buffer: IS } = (ke(), me(qe)), { ObjectDefineProperty: Ft, ObjectKeys: Sp, ReflectApply: Ep } = Ee(), { promisify: { custom: Ap } } = $e(), { streamReturningOperators: _p, promiseReturningOperators: vp } = wp(), { codes: { ERR_ILLEGAL_CONSTRUCTOR: Ip } } = De(), xS = wa(), { setDefaultHighWaterMark: TS, getDefaultHighWaterMark: PS } = Cn(), { pipeline: xp } = so(), { destroyer: OS } = Ar(), Tp = Ut(), Aa = Sa(), Wn = mt(), Se = Pp.exports = $i().Stream;
  Se.isDestroyed = Wn.isDestroyed;
  Se.isDisturbed = Wn.isDisturbed;
  Se.isErrored = Wn.isErrored;
  Se.isReadable = Wn.isReadable;
  Se.isWritable = Wn.isWritable;
  Se.Readable = Nn();
  for (let t of Sp(_p)) {
    let r = function(...n) {
      if (new.target) throw Ip();
      return Se.Readable.from(Ep(e, this, n));
    }, e = _p[t];
    Ft(r, "name", { __proto__: null, value: e.name }), Ft(r, "length", { __proto__: null, value: e.length }), Ft(Se.Readable.prototype, t, { __proto__: null, value: r, enumerable: false, configurable: true, writable: true });
  }
  for (let t of Sp(vp)) {
    let r = function(...n) {
      if (new.target) throw Ip();
      return Ep(e, this, n);
    }, e = vp[t];
    Ft(r, "name", { __proto__: null, value: e.name }), Ft(r, "length", { __proto__: null, value: e.length }), Ft(Se.Readable.prototype, t, { __proto__: null, value: r, enumerable: false, configurable: true, writable: true });
  }
  Se.Writable = ro();
  Se.Duplex = St();
  Se.Transform = oa();
  Se.PassThrough = aa();
  Se.pipeline = xp;
  var { addAbortSignal: RS } = kn();
  Se.addAbortSignal = RS;
  Se.finished = Tp;
  Se.destroy = OS;
  Se.compose = xS;
  Se.setDefaultHighWaterMark = TS;
  Se.getDefaultHighWaterMark = PS;
  Ft(Se, "promises", { __proto__: null, configurable: true, enumerable: true, get() {
    return Aa;
  } });
  Ft(xp, Ap, { __proto__: null, enumerable: true, get() {
    return Aa.pipeline;
  } });
  Ft(Tp, Ap, { __proto__: null, enumerable: true, get() {
    return Aa.finished;
  } });
  Se.Stream = Se;
  Se._isUint8Array = function(e) {
    return e instanceof Uint8Array;
  };
  Se._uint8ArrayToBuffer = function(e) {
    return IS.from(e.buffer, e.byteOffset, e.byteLength);
  };
});
var or = j((ZB, Pe) => {
  "use strict";
  A();
  x();
  I();
  var Be = Ea(), kS = Sa(), CS = Be.Readable.destroy;
  Pe.exports = Be.Readable;
  Pe.exports._uint8ArrayToBuffer = Be._uint8ArrayToBuffer;
  Pe.exports._isUint8Array = Be._isUint8Array;
  Pe.exports.isDisturbed = Be.isDisturbed;
  Pe.exports.isErrored = Be.isErrored;
  Pe.exports.isReadable = Be.isReadable;
  Pe.exports.Readable = Be.Readable;
  Pe.exports.Writable = Be.Writable;
  Pe.exports.Duplex = Be.Duplex;
  Pe.exports.Transform = Be.Transform;
  Pe.exports.PassThrough = Be.PassThrough;
  Pe.exports.addAbortSignal = Be.addAbortSignal;
  Pe.exports.finished = Be.finished;
  Pe.exports.destroy = Be.destroy;
  Pe.exports.destroy = CS;
  Pe.exports.pipeline = Be.pipeline;
  Pe.exports.compose = Be.compose;
  Object.defineProperty(Be, "promises", { configurable: true, enumerable: true, get() {
    return kS;
  } });
  Pe.exports.Stream = Be.Stream;
  Pe.exports.default = Pe.exports;
});
var Op = j((lM, Ia) => {
  A();
  x();
  I();
  typeof Object.create == "function" ? Ia.exports = function(e, r) {
    r && (e.super_ = r, e.prototype = Object.create(r.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }));
  } : Ia.exports = function(e, r) {
    if (r) {
      e.super_ = r;
      var n = function() {
      };
      n.prototype = r.prototype, e.prototype = new n(), e.prototype.constructor = e;
    }
  };
});
var Cp = j((mM, kp) => {
  "use strict";
  A();
  x();
  I();
  var { Buffer: ft } = (ke(), me(qe)), Rp = /* @__PURE__ */ Symbol.for("BufferList");
  function we(t) {
    if (!(this instanceof we)) return new we(t);
    we._init.call(this, t);
  }
  we._init = function(e) {
    Object.defineProperty(this, Rp, { value: true }), this._bufs = [], this.length = 0, e && this.append(e);
  };
  we.prototype._new = function(e) {
    return new we(e);
  };
  we.prototype._offset = function(e) {
    if (e === 0) return [0, 0];
    let r = 0;
    for (let n = 0; n < this._bufs.length; n++) {
      let i = r + this._bufs[n].length;
      if (e < i || n === this._bufs.length - 1) return [n, e - r];
      r = i;
    }
  };
  we.prototype._reverseOffset = function(t) {
    let e = t[0], r = t[1];
    for (let n = 0; n < e; n++) r += this._bufs[n].length;
    return r;
  };
  we.prototype.getBuffers = function() {
    return this._bufs;
  };
  we.prototype.get = function(e) {
    if (e > this.length || e < 0) return;
    let r = this._offset(e);
    return this._bufs[r[0]][r[1]];
  };
  we.prototype.slice = function(e, r) {
    return typeof e == "number" && e < 0 && (e += this.length), typeof r == "number" && r < 0 && (r += this.length), this.copy(null, 0, e, r);
  };
  we.prototype.copy = function(e, r, n, i) {
    if ((typeof n != "number" || n < 0) && (n = 0), (typeof i != "number" || i > this.length) && (i = this.length), n >= this.length || i <= 0) return e || ft.alloc(0);
    let s = !!e, o = this._offset(n), a = i - n, c = a, f = s && r || 0, h = o[1];
    if (n === 0 && i === this.length) {
      if (!s) return this._bufs.length === 1 ? this._bufs[0] : ft.concat(this._bufs, this.length);
      for (let d = 0; d < this._bufs.length; d++) this._bufs[d].copy(e, f), f += this._bufs[d].length;
      return e;
    }
    if (c <= this._bufs[o[0]].length - h) return s ? this._bufs[o[0]].copy(e, r, h, h + c) : this._bufs[o[0]].slice(h, h + c);
    s || (e = ft.allocUnsafe(a));
    for (let d = o[0]; d < this._bufs.length; d++) {
      let m = this._bufs[d].length - h;
      if (c > m) this._bufs[d].copy(e, f, h), f += m;
      else {
        this._bufs[d].copy(e, f, h, h + c), f += m;
        break;
      }
      c -= m, h && (h = 0);
    }
    return e.length > f ? e.slice(0, f) : e;
  };
  we.prototype.shallowSlice = function(e, r) {
    if (e = e || 0, r = typeof r != "number" ? this.length : r, e < 0 && (e += this.length), r < 0 && (r += this.length), e === r) return this._new();
    let n = this._offset(e), i = this._offset(r), s = this._bufs.slice(n[0], i[0] + 1);
    return i[1] === 0 ? s.pop() : s[s.length - 1] = s[s.length - 1].slice(0, i[1]), n[1] !== 0 && (s[0] = s[0].slice(n[1])), this._new(s);
  };
  we.prototype.toString = function(e, r, n) {
    return this.slice(r, n).toString(e);
  };
  we.prototype.consume = function(e) {
    if (e = Math.trunc(e), Number.isNaN(e) || e <= 0) return this;
    for (; this._bufs.length; ) if (e >= this._bufs[0].length) e -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift();
    else {
      this._bufs[0] = this._bufs[0].slice(e), this.length -= e;
      break;
    }
    return this;
  };
  we.prototype.duplicate = function() {
    let e = this._new();
    for (let r = 0; r < this._bufs.length; r++) e.append(this._bufs[r]);
    return e;
  };
  we.prototype.append = function(e) {
    return this._attach(e, we.prototype._appendBuffer);
  };
  we.prototype.prepend = function(e) {
    return this._attach(e, we.prototype._prependBuffer, true);
  };
  we.prototype._attach = function(e, r, n) {
    if (e == null) return this;
    if (e.buffer) r.call(this, ft.from(e.buffer, e.byteOffset, e.byteLength));
    else if (Array.isArray(e)) {
      let [i, s] = n ? [e.length - 1, -1] : [0, 1];
      for (let o = i; o >= 0 && o < e.length; o += s) this._attach(e[o], r, n);
    } else if (this._isBufferList(e)) {
      let [i, s] = n ? [e._bufs.length - 1, -1] : [0, 1];
      for (let o = i; o >= 0 && o < e._bufs.length; o += s) this._attach(e._bufs[o], r, n);
    } else typeof e == "number" && (e = e.toString()), r.call(this, ft.from(e));
    return this;
  };
  we.prototype._appendBuffer = function(e) {
    this._bufs.push(e), this.length += e.length;
  };
  we.prototype._prependBuffer = function(e) {
    this._bufs.unshift(e), this.length += e.length;
  };
  we.prototype.indexOf = function(t, e, r) {
    if (r === void 0 && typeof e == "string" && (r = e, e = void 0), typeof t == "function" || Array.isArray(t)) throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
    if (typeof t == "number" ? t = ft.from([t]) : typeof t == "string" ? t = ft.from(t, r) : this._isBufferList(t) ? t = t.slice() : Array.isArray(t.buffer) ? t = ft.from(t.buffer, t.byteOffset, t.byteLength) : ft.isBuffer(t) || (t = ft.from(t)), e = Number(e || 0), isNaN(e) && (e = 0), e < 0 && (e = this.length + e), e < 0 && (e = 0), t.length === 0) return e > this.length ? this.length : e;
    let n = this._offset(e), i = n[0], s = n[1];
    for (; i < this._bufs.length; i++) {
      let o = this._bufs[i];
      for (; s < o.length; ) if (o.length - s >= t.length) {
        let c = o.indexOf(t, s);
        if (c !== -1) return this._reverseOffset([i, c]);
        s = o.length - t.length + 1;
      } else {
        let c = this._reverseOffset([i, s]);
        if (this._match(c, t)) return c;
        s++;
      }
      s = 0;
    }
    return -1;
  };
  we.prototype._match = function(t, e) {
    if (this.length - t < e.length) return false;
    for (let r = 0; r < e.length; r++) if (this.get(t + r) !== e[r]) return false;
    return true;
  };
  (function() {
    let t = { readDoubleBE: 8, readDoubleLE: 8, readFloatBE: 4, readFloatLE: 4, readBigInt64BE: 8, readBigInt64LE: 8, readBigUInt64BE: 8, readBigUInt64LE: 8, readInt32BE: 4, readInt32LE: 4, readUInt32BE: 4, readUInt32LE: 4, readInt16BE: 2, readInt16LE: 2, readUInt16BE: 2, readUInt16LE: 2, readInt8: 1, readUInt8: 1, readIntBE: null, readIntLE: null, readUIntBE: null, readUIntLE: null };
    for (let e in t) (function(r) {
      t[r] === null ? we.prototype[r] = function(n, i) {
        return this.slice(n, n + i)[r](0, i);
      } : we.prototype[r] = function(n = 0) {
        return this.slice(n, n + t[r])[r](0);
      };
    })(e);
  })();
  we.prototype._isBufferList = function(e) {
    return e instanceof we || we.isBufferList(e);
  };
  we.isBufferList = function(e) {
    return e != null && e[Rp];
  };
  kp.exports = we;
});
var Bp = j((OM, fo) => {
  "use strict";
  A();
  x();
  I();
  var xa = or().Duplex, BS = Op(), $n = Cp();
  function Fe(t) {
    if (!(this instanceof Fe)) return new Fe(t);
    if (typeof t == "function") {
      this._callback = t;
      let e = function(n) {
        this._callback && (this._callback(n), this._callback = null);
      }.bind(this);
      this.on("pipe", function(n) {
        n.on("error", e);
      }), this.on("unpipe", function(n) {
        n.removeListener("error", e);
      }), t = null;
    }
    $n._init.call(this, t), xa.call(this);
  }
  BS(Fe, xa);
  Object.assign(Fe.prototype, $n.prototype);
  Fe.prototype._new = function(e) {
    return new Fe(e);
  };
  Fe.prototype._write = function(e, r, n) {
    this._appendBuffer(e), typeof n == "function" && n();
  };
  Fe.prototype._read = function(e) {
    if (!this.length) return this.push(null);
    e = Math.min(e, this.length), this.push(this.slice(0, e)), this.consume(e);
  };
  Fe.prototype.end = function(e) {
    xa.prototype.end.call(this, e), this._callback && (this._callback(null, this.slice()), this._callback = null);
  };
  Fe.prototype._destroy = function(e, r) {
    this._bufs.length = 0, this.length = 0, r(e);
  };
  Fe.prototype._isBufferList = function(e) {
    return e instanceof Fe || e instanceof $n || Fe.isBufferList(e);
  };
  Fe.isBufferList = $n.isBufferList;
  fo.exports = Fe;
  fo.exports.BufferListStream = Fe;
  fo.exports.BufferList = $n;
});
var Np = j((DM, Mp) => {
  A();
  x();
  I();
  var Ta = class {
    constructor() {
      this.cmd = null, this.retain = false, this.qos = 0, this.dup = false, this.length = -1, this.topic = null, this.payload = null;
    }
  };
  Mp.exports = Ta;
});
var Pa = j((QM, qp) => {
  A();
  x();
  I();
  var K = qp.exports, { Buffer: Ke } = (ke(), me(qe));
  K.types = { 0: "reserved", 1: "connect", 2: "connack", 3: "publish", 4: "puback", 5: "pubrec", 6: "pubrel", 7: "pubcomp", 8: "subscribe", 9: "suback", 10: "unsubscribe", 11: "unsuback", 12: "pingreq", 13: "pingresp", 14: "disconnect", 15: "auth" };
  K.requiredHeaderFlags = { 1: 0, 2: 0, 4: 0, 5: 0, 6: 2, 7: 0, 8: 2, 9: 0, 10: 2, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0 };
  K.requiredHeaderFlagsErrors = {};
  for (let t in K.requiredHeaderFlags) {
    let e = K.requiredHeaderFlags[t];
    K.requiredHeaderFlagsErrors[t] = "Invalid header flag bits, must be 0x" + e.toString(16) + " for " + K.types[t] + " packet";
  }
  K.codes = {};
  for (let t in K.types) {
    let e = K.types[t];
    K.codes[e] = t;
  }
  K.CMD_SHIFT = 4;
  K.CMD_MASK = 240;
  K.DUP_MASK = 8;
  K.QOS_MASK = 3;
  K.QOS_SHIFT = 1;
  K.RETAIN_MASK = 1;
  K.VARBYTEINT_MASK = 127;
  K.VARBYTEINT_FIN_MASK = 128;
  K.VARBYTEINT_MAX = 268435455;
  K.SESSIONPRESENT_MASK = 1;
  K.SESSIONPRESENT_HEADER = Ke.from([K.SESSIONPRESENT_MASK]);
  K.CONNACK_HEADER = Ke.from([K.codes.connack << K.CMD_SHIFT]);
  K.USERNAME_MASK = 128;
  K.PASSWORD_MASK = 64;
  K.WILL_RETAIN_MASK = 32;
  K.WILL_QOS_MASK = 24;
  K.WILL_QOS_SHIFT = 3;
  K.WILL_FLAG_MASK = 4;
  K.CLEAN_SESSION_MASK = 2;
  K.CONNECT_HEADER = Ke.from([K.codes.connect << K.CMD_SHIFT]);
  K.properties = { sessionExpiryInterval: 17, willDelayInterval: 24, receiveMaximum: 33, maximumPacketSize: 39, topicAliasMaximum: 34, requestResponseInformation: 25, requestProblemInformation: 23, userProperties: 38, authenticationMethod: 21, authenticationData: 22, payloadFormatIndicator: 1, messageExpiryInterval: 2, contentType: 3, responseTopic: 8, correlationData: 9, maximumQoS: 36, retainAvailable: 37, assignedClientIdentifier: 18, reasonString: 31, wildcardSubscriptionAvailable: 40, subscriptionIdentifiersAvailable: 41, sharedSubscriptionAvailable: 42, serverKeepAlive: 19, responseInformation: 26, serverReference: 28, topicAlias: 35, subscriptionIdentifier: 11 };
  K.propertiesCodes = {};
  for (let t in K.properties) {
    let e = K.properties[t];
    K.propertiesCodes[e] = t;
  }
  K.propertiesTypes = { sessionExpiryInterval: "int32", willDelayInterval: "int32", receiveMaximum: "int16", maximumPacketSize: "int32", topicAliasMaximum: "int16", requestResponseInformation: "byte", requestProblemInformation: "byte", userProperties: "pair", authenticationMethod: "string", authenticationData: "binary", payloadFormatIndicator: "byte", messageExpiryInterval: "int32", contentType: "string", responseTopic: "string", correlationData: "binary", maximumQoS: "int8", retainAvailable: "byte", assignedClientIdentifier: "string", reasonString: "string", wildcardSubscriptionAvailable: "byte", subscriptionIdentifiersAvailable: "byte", sharedSubscriptionAvailable: "byte", serverKeepAlive: "int16", responseInformation: "string", serverReference: "string", topicAlias: "int16", subscriptionIdentifier: "var" };
  function sr(t) {
    return [0, 1, 2].map((e) => [0, 1].map((r) => [0, 1].map((n) => {
      let i = Ke.alloc(1);
      return i.writeUInt8(K.codes[t] << K.CMD_SHIFT | (r ? K.DUP_MASK : 0) | e << K.QOS_SHIFT | n, 0, true), i;
    })));
  }
  K.PUBLISH_HEADER = sr("publish");
  K.SUBSCRIBE_HEADER = sr("subscribe");
  K.SUBSCRIBE_OPTIONS_QOS_MASK = 3;
  K.SUBSCRIBE_OPTIONS_NL_MASK = 1;
  K.SUBSCRIBE_OPTIONS_NL_SHIFT = 2;
  K.SUBSCRIBE_OPTIONS_RAP_MASK = 1;
  K.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3;
  K.SUBSCRIBE_OPTIONS_RH_MASK = 3;
  K.SUBSCRIBE_OPTIONS_RH_SHIFT = 4;
  K.SUBSCRIBE_OPTIONS_RH = [0, 16, 32];
  K.SUBSCRIBE_OPTIONS_NL = 4;
  K.SUBSCRIBE_OPTIONS_RAP = 8;
  K.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2];
  K.UNSUBSCRIBE_HEADER = sr("unsubscribe");
  K.ACKS = { unsuback: sr("unsuback"), puback: sr("puback"), pubcomp: sr("pubcomp"), pubrel: sr("pubrel"), pubrec: sr("pubrec") };
  K.SUBACK_HEADER = Ke.from([K.codes.suback << K.CMD_SHIFT]);
  K.VERSION3 = Ke.from([3]);
  K.VERSION4 = Ke.from([4]);
  K.VERSION5 = Ke.from([5]);
  K.VERSION131 = Ke.from([131]);
  K.VERSION132 = Ke.from([132]);
  K.QOS = [0, 1, 2].map((t) => Ke.from([t]));
  K.EMPTY = { pingreq: Ke.from([K.codes.pingreq << 4, 0]), pingresp: Ke.from([K.codes.pingresp << 4, 0]), disconnect: Ke.from([K.codes.disconnect << 4, 0]) };
  K.MQTT5_PUBACK_PUBREC_CODES = { 0: "Success", 16: "No matching subscribers", 128: "Unspecified error", 131: "Implementation specific error", 135: "Not authorized", 144: "Topic Name invalid", 145: "Packet identifier in use", 151: "Quota exceeded", 153: "Payload format invalid" };
  K.MQTT5_PUBREL_PUBCOMP_CODES = { 0: "Success", 146: "Packet Identifier not found" };
  K.MQTT5_SUBACK_CODES = { 0: "Granted QoS 0", 1: "Granted QoS 1", 2: "Granted QoS 2", 128: "Unspecified error", 131: "Implementation specific error", 135: "Not authorized", 143: "Topic Filter invalid", 145: "Packet Identifier in use", 151: "Quota exceeded", 158: "Shared Subscriptions not supported", 161: "Subscription Identifiers not supported", 162: "Wildcard Subscriptions not supported" };
  K.MQTT5_UNSUBACK_CODES = { 0: "Success", 17: "No subscription existed", 128: "Unspecified error", 131: "Implementation specific error", 135: "Not authorized", 143: "Topic Filter invalid", 145: "Packet Identifier in use" };
  K.MQTT5_DISCONNECT_CODES = { 0: "Normal disconnection", 4: "Disconnect with Will Message", 128: "Unspecified error", 129: "Malformed Packet", 130: "Protocol Error", 131: "Implementation specific error", 135: "Not authorized", 137: "Server busy", 139: "Server shutting down", 141: "Keep Alive timeout", 142: "Session taken over", 143: "Topic Filter invalid", 144: "Topic Name invalid", 147: "Receive Maximum exceeded", 148: "Topic Alias invalid", 149: "Packet too large", 150: "Message rate too high", 151: "Quota exceeded", 152: "Administrative action", 153: "Payload format invalid", 154: "Retain not supported", 155: "QoS not supported", 156: "Use another server", 157: "Server moved", 158: "Shared Subscriptions not supported", 159: "Connection rate exceeded", 160: "Maximum connect time", 161: "Subscription Identifiers not supported", 162: "Wildcard Subscriptions not supported" };
  K.MQTT5_AUTH_CODES = { 0: "Success", 24: "Continue authentication", 25: "Re-authenticate" };
});
var Up = j((o2, Lp) => {
  A();
  x();
  I();
  var fn = 1e3, hn = fn * 60, dn = hn * 60, Cr = dn * 24, MS = Cr * 7, NS = Cr * 365.25;
  Lp.exports = function(t, e) {
    e = e || {};
    var r = typeof t;
    if (r === "string" && t.length > 0) return qS(t);
    if (r === "number" && isFinite(t)) return e.long ? US(t) : LS(t);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
  };
  function qS(t) {
    if (t = String(t), !(t.length > 100)) {
      var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
      if (e) {
        var r = parseFloat(e[1]), n = (e[2] || "ms").toLowerCase();
        switch (n) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return r * NS;
          case "weeks":
          case "week":
          case "w":
            return r * MS;
          case "days":
          case "day":
          case "d":
            return r * Cr;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return r * dn;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return r * hn;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return r * fn;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return r;
          default:
            return;
        }
      }
    }
  }
  function LS(t) {
    var e = Math.abs(t);
    return e >= Cr ? Math.round(t / Cr) + "d" : e >= dn ? Math.round(t / dn) + "h" : e >= hn ? Math.round(t / hn) + "m" : e >= fn ? Math.round(t / fn) + "s" : t + "ms";
  }
  function US(t) {
    var e = Math.abs(t);
    return e >= Cr ? ho(t, e, Cr, "day") : e >= dn ? ho(t, e, dn, "hour") : e >= hn ? ho(t, e, hn, "minute") : e >= fn ? ho(t, e, fn, "second") : t + " ms";
  }
  function ho(t, e, r, n) {
    var i = e >= r * 1.5;
    return Math.round(t / r) + " " + n + (i ? "s" : "");
  }
});
var jp = j((y2, Dp) => {
  A();
  x();
  I();
  function DS(t) {
    r.debug = r, r.default = r, r.coerce = c, r.disable = o, r.enable = i, r.enabled = a, r.humanize = Up(), r.destroy = f, Object.keys(t).forEach((h) => {
      r[h] = t[h];
    }), r.names = [], r.skips = [], r.formatters = {};
    function e(h) {
      let d = 0;
      for (let m = 0; m < h.length; m++) d = (d << 5) - d + h.charCodeAt(m), d |= 0;
      return r.colors[Math.abs(d) % r.colors.length];
    }
    r.selectColor = e;
    function r(h) {
      let d, m = null, g, P;
      function S(...b) {
        if (!S.enabled) return;
        let w = S, _ = Number(/* @__PURE__ */ new Date()), R = _ - (d || _);
        w.diff = R, w.prev = d, w.curr = _, d = _, b[0] = r.coerce(b[0]), typeof b[0] != "string" && b.unshift("%O");
        let T = 0;
        b[0] = b[0].replace(/%([a-zA-Z%])/g, (O, v) => {
          if (O === "%%") return "%";
          T++;
          let M = r.formatters[v];
          if (typeof M == "function") {
            let F = b[T];
            O = M.call(w, F), b.splice(T, 1), T--;
          }
          return O;
        }), r.formatArgs.call(w, b), (w.log || r.log).apply(w, b);
      }
      return S.namespace = h, S.useColors = r.useColors(), S.color = r.selectColor(h), S.extend = n, S.destroy = r.destroy, Object.defineProperty(S, "enabled", { enumerable: true, configurable: false, get: () => m !== null ? m : (g !== r.namespaces && (g = r.namespaces, P = r.enabled(h)), P), set: (b) => {
        m = b;
      } }), typeof r.init == "function" && r.init(S), S;
    }
    function n(h, d) {
      let m = r(this.namespace + (typeof d > "u" ? ":" : d) + h);
      return m.log = this.log, m;
    }
    function i(h) {
      r.save(h), r.namespaces = h, r.names = [], r.skips = [];
      let d = (typeof h == "string" ? h : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (let m of d) m[0] === "-" ? r.skips.push(m.slice(1)) : r.names.push(m);
    }
    function s(h, d) {
      let m = 0, g = 0, P = -1, S = 0;
      for (; m < h.length; ) if (g < d.length && (d[g] === h[m] || d[g] === "*")) d[g] === "*" ? (P = g, S = m, g++) : (m++, g++);
      else if (P !== -1) g = P + 1, S++, m = S;
      else return false;
      for (; g < d.length && d[g] === "*"; ) g++;
      return g === d.length;
    }
    function o() {
      let h = [...r.names, ...r.skips.map((d) => "-" + d)].join(",");
      return r.enable(""), h;
    }
    function a(h) {
      for (let d of r.skips) if (s(h, d)) return false;
      for (let d of r.names) if (s(h, d)) return true;
      return false;
    }
    function c(h) {
      return h instanceof Error ? h.stack || h.message : h;
    }
    function f() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return r.enable(r.load()), r;
  }
  Dp.exports = DS;
});
var At = j((Qe, po) => {
  A();
  x();
  I();
  Qe.formatArgs = FS;
  Qe.save = WS;
  Qe.load = $S;
  Qe.useColors = jS;
  Qe.storage = HS();
  Qe.destroy = /* @__PURE__ */ (() => {
    let t = false;
    return () => {
      t || (t = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })();
  Qe.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
  function jS() {
    if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    let t;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (t = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(t[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function FS(t) {
    if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + po.exports.humanize(this.diff), !this.useColors) return;
    let e = "color: " + this.color;
    t.splice(1, 0, e, "color: inherit");
    let r = 0, n = 0;
    t[0].replace(/%[a-zA-Z%]/g, (i) => {
      i !== "%%" && (r++, i === "%c" && (n = r));
    }), t.splice(n, 0, e);
  }
  Qe.log = console.debug || console.log || (() => {
  });
  function WS(t) {
    try {
      t ? Qe.storage.setItem("debug", t) : Qe.storage.removeItem("debug");
    } catch {
    }
  }
  function $S() {
    let t;
    try {
      t = Qe.storage.getItem("debug") || Qe.storage.getItem("DEBUG");
    } catch {
    }
    return !t && typeof N < "u" && "env" in N && (t = N.env.DEBUG), t;
  }
  function HS() {
    try {
      return localStorage;
    } catch {
    }
  }
  po.exports = jp()(Qe);
  var { formatters: VS } = po.exports;
  VS.j = function(t) {
    try {
      return JSON.stringify(t);
    } catch (e) {
      return "[UnexpectedJSONParseError]: " + e.message;
    }
  };
});
var $p = j((M2, Wp) => {
  A();
  x();
  I();
  var GS = Bp(), { EventEmitter: zS } = (er(), me(Zt)), Fp = Np(), pe = Pa(), ae = At()("mqtt-packet:parser"), Oa = class t extends zS {
    constructor() {
      super(), this.parser = this.constructor.parser;
    }
    static parser(e) {
      return this instanceof t ? (this.settings = e || {}, this._states = ["_parseHeader", "_parseLength", "_parsePayload", "_newPacket"], this._resetState(), this) : new t().parser(e);
    }
    _resetState() {
      ae("_resetState: resetting packet, error, _list, and _stateCounter"), this.packet = new Fp(), this.error = null, this._list = GS(), this._stateCounter = 0;
    }
    parse(e) {
      for (this.error && this._resetState(), this._list.append(e), ae("parse: current state: %s", this._states[this._stateCounter]); (this.packet.length !== -1 || this._list.length > 0) && this[this._states[this._stateCounter]]() && !this.error; ) this._stateCounter++, ae("parse: state complete. _stateCounter is now: %d", this._stateCounter), ae("parse: packet.length: %d, buffer list length: %d", this.packet.length, this._list.length), this._stateCounter >= this._states.length && (this._stateCounter = 0);
      return ae("parse: exited while loop. packet: %d, buffer list length: %d", this.packet.length, this._list.length), this._list.length;
    }
    _parseHeader() {
      let e = this._list.readUInt8(0), r = e >> pe.CMD_SHIFT;
      this.packet.cmd = pe.types[r];
      let n = e & 15, i = pe.requiredHeaderFlags[r];
      return i != null && n !== i ? this._emitError(new Error(pe.requiredHeaderFlagsErrors[r])) : (this.packet.retain = (e & pe.RETAIN_MASK) !== 0, this.packet.qos = e >> pe.QOS_SHIFT & pe.QOS_MASK, this.packet.qos > 2 ? this._emitError(new Error("Packet must not have both QoS bits set to 1")) : (this.packet.dup = (e & pe.DUP_MASK) !== 0, ae("_parseHeader: packet: %o", this.packet), this._list.consume(1), true));
    }
    _parseLength() {
      let e = this._parseVarByteNum(true);
      return e && (this.packet.length = e.value, this._list.consume(e.bytes)), ae("_parseLength %d", e.value), !!e;
    }
    _parsePayload() {
      ae("_parsePayload: payload %O", this._list);
      let e = false;
      if (this.packet.length === 0 || this._list.length >= this.packet.length) {
        switch (this._pos = 0, this.packet.cmd) {
          case "connect":
            this._parseConnect();
            break;
          case "connack":
            this._parseConnack();
            break;
          case "publish":
            this._parsePublish();
            break;
          case "puback":
          case "pubrec":
          case "pubrel":
          case "pubcomp":
            this._parseConfirmation();
            break;
          case "subscribe":
            this._parseSubscribe();
            break;
          case "suback":
            this._parseSuback();
            break;
          case "unsubscribe":
            this._parseUnsubscribe();
            break;
          case "unsuback":
            this._parseUnsuback();
            break;
          case "pingreq":
          case "pingresp":
            break;
          case "disconnect":
            this._parseDisconnect();
            break;
          case "auth":
            this._parseAuth();
            break;
          default:
            this._emitError(new Error("Not supported"));
        }
        e = true;
      }
      return ae("_parsePayload complete result: %s", e), e;
    }
    _parseConnect() {
      ae("_parseConnect");
      let e, r, n, i, s = {}, o = this.packet, a = this._parseString();
      if (a === null) return this._emitError(new Error("Cannot parse protocolId"));
      if (a !== "MQTT" && a !== "MQIsdp") return this._emitError(new Error("Invalid protocolId"));
      if (o.protocolId = a, this._pos >= this._list.length) return this._emitError(new Error("Packet too short"));
      if (o.protocolVersion = this._list.readUInt8(this._pos), o.protocolVersion >= 128 && (o.bridgeMode = true, o.protocolVersion = o.protocolVersion - 128), o.protocolVersion !== 3 && o.protocolVersion !== 4 && o.protocolVersion !== 5) return this._emitError(new Error("Invalid protocol version"));
      if (this._pos++, this._pos >= this._list.length) return this._emitError(new Error("Packet too short"));
      if (this._list.readUInt8(this._pos) & 1) return this._emitError(new Error("Connect flag bit 0 must be 0, but got 1"));
      s.username = this._list.readUInt8(this._pos) & pe.USERNAME_MASK, s.password = this._list.readUInt8(this._pos) & pe.PASSWORD_MASK, s.will = this._list.readUInt8(this._pos) & pe.WILL_FLAG_MASK;
      let c = !!(this._list.readUInt8(this._pos) & pe.WILL_RETAIN_MASK), f = (this._list.readUInt8(this._pos) & pe.WILL_QOS_MASK) >> pe.WILL_QOS_SHIFT;
      if (s.will) o.will = {}, o.will.retain = c, o.will.qos = f;
      else {
        if (c) return this._emitError(new Error("Will Retain Flag must be set to zero when Will Flag is set to 0"));
        if (f) return this._emitError(new Error("Will QoS must be set to zero when Will Flag is set to 0"));
      }
      if (o.clean = (this._list.readUInt8(this._pos) & pe.CLEAN_SESSION_MASK) !== 0, this._pos++, o.keepalive = this._parseNum(), o.keepalive === -1) return this._emitError(new Error("Packet too short"));
      if (o.protocolVersion === 5) {
        let d = this._parseProperties();
        Object.getOwnPropertyNames(d).length && (o.properties = d);
      }
      let h = this._parseString();
      if (h === null) return this._emitError(new Error("Packet too short"));
      if (o.clientId = h, ae("_parseConnect: packet.clientId: %s", o.clientId), s.will) {
        if (o.protocolVersion === 5) {
          let d = this._parseProperties();
          Object.getOwnPropertyNames(d).length && (o.will.properties = d);
        }
        if (e = this._parseString(), e === null) return this._emitError(new Error("Cannot parse will topic"));
        if (o.will.topic = e, ae("_parseConnect: packet.will.topic: %s", o.will.topic), r = this._parseBuffer(), r === null) return this._emitError(new Error("Cannot parse will payload"));
        o.will.payload = r, ae("_parseConnect: packet.will.paylaod: %s", o.will.payload);
      }
      if (s.username) {
        if (i = this._parseString(), i === null) return this._emitError(new Error("Cannot parse username"));
        o.username = i, ae("_parseConnect: packet.username: %s", o.username);
      }
      if (s.password) {
        if (n = this._parseBuffer(), n === null) return this._emitError(new Error("Cannot parse password"));
        o.password = n;
      }
      return this.settings = o, ae("_parseConnect: complete"), o;
    }
    _parseConnack() {
      ae("_parseConnack");
      let e = this.packet;
      if (this._list.length < 1) return null;
      let r = this._list.readUInt8(this._pos++);
      if (r > 1) return this._emitError(new Error("Invalid connack flags, bits 7-1 must be set to 0"));
      if (e.sessionPresent = !!(r & pe.SESSIONPRESENT_MASK), this.settings.protocolVersion === 5) this._list.length >= 2 ? e.reasonCode = this._list.readUInt8(this._pos++) : e.reasonCode = 0;
      else {
        if (this._list.length < 2) return null;
        e.returnCode = this._list.readUInt8(this._pos++);
      }
      if (e.returnCode === -1 || e.reasonCode === -1) return this._emitError(new Error("Cannot parse return code"));
      if (this.settings.protocolVersion === 5) {
        let n = this._parseProperties();
        Object.getOwnPropertyNames(n).length && (e.properties = n);
      }
      ae("_parseConnack: complete");
    }
    _parsePublish() {
      ae("_parsePublish");
      let e = this.packet;
      if (e.topic = this._parseString(), e.topic === null) return this._emitError(new Error("Cannot parse topic"));
      if (!(e.qos > 0 && !this._parseMessageId())) {
        if (this.settings.protocolVersion === 5) {
          let r = this._parseProperties();
          Object.getOwnPropertyNames(r).length && (e.properties = r);
        }
        e.payload = this._list.slice(this._pos, e.length), ae("_parsePublish: payload from buffer list: %o", e.payload);
      }
    }
    _parseSubscribe() {
      ae("_parseSubscribe");
      let e = this.packet, r, n, i, s, o, a, c;
      if (e.subscriptions = [], !!this._parseMessageId()) {
        if (this.settings.protocolVersion === 5) {
          let f = this._parseProperties();
          Object.getOwnPropertyNames(f).length && (e.properties = f);
        }
        if (e.length <= 0) return this._emitError(new Error("Malformed subscribe, no payload specified"));
        for (; this._pos < e.length; ) {
          if (r = this._parseString(), r === null) return this._emitError(new Error("Cannot parse topic"));
          if (this._pos >= e.length) return this._emitError(new Error("Malformed Subscribe Payload"));
          if (n = this._parseByte(), this.settings.protocolVersion === 5) {
            if (n & 192) return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-6 must be 0"));
          } else if (n & 252) return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-2 must be 0"));
          if (i = n & pe.SUBSCRIBE_OPTIONS_QOS_MASK, i > 2) return this._emitError(new Error("Invalid subscribe QoS, must be <= 2"));
          if (a = (n >> pe.SUBSCRIBE_OPTIONS_NL_SHIFT & pe.SUBSCRIBE_OPTIONS_NL_MASK) !== 0, o = (n >> pe.SUBSCRIBE_OPTIONS_RAP_SHIFT & pe.SUBSCRIBE_OPTIONS_RAP_MASK) !== 0, s = n >> pe.SUBSCRIBE_OPTIONS_RH_SHIFT & pe.SUBSCRIBE_OPTIONS_RH_MASK, s > 2) return this._emitError(new Error("Invalid retain handling, must be <= 2"));
          c = { topic: r, qos: i }, this.settings.protocolVersion === 5 ? (c.nl = a, c.rap = o, c.rh = s) : this.settings.bridgeMode && (c.rh = 0, c.rap = true, c.nl = true), ae("_parseSubscribe: push subscription `%s` to subscription", c), e.subscriptions.push(c);
        }
      }
    }
    _parseSuback() {
      ae("_parseSuback");
      let e = this.packet;
      if (this.packet.granted = [], !!this._parseMessageId()) {
        if (this.settings.protocolVersion === 5) {
          let r = this._parseProperties();
          Object.getOwnPropertyNames(r).length && (e.properties = r);
        }
        if (e.length <= 0) return this._emitError(new Error("Malformed suback, no payload specified"));
        for (; this._pos < this.packet.length; ) {
          let r = this._list.readUInt8(this._pos++);
          if (this.settings.protocolVersion === 5) {
            if (!pe.MQTT5_SUBACK_CODES[r]) return this._emitError(new Error("Invalid suback code"));
          } else if (r > 2 && r !== 128) return this._emitError(new Error("Invalid suback QoS, must be 0, 1, 2 or 128"));
          this.packet.granted.push(r);
        }
      }
    }
    _parseUnsubscribe() {
      ae("_parseUnsubscribe");
      let e = this.packet;
      if (e.unsubscriptions = [], !!this._parseMessageId()) {
        if (this.settings.protocolVersion === 5) {
          let r = this._parseProperties();
          Object.getOwnPropertyNames(r).length && (e.properties = r);
        }
        if (e.length <= 0) return this._emitError(new Error("Malformed unsubscribe, no payload specified"));
        for (; this._pos < e.length; ) {
          let r = this._parseString();
          if (r === null) return this._emitError(new Error("Cannot parse topic"));
          ae("_parseUnsubscribe: push topic `%s` to unsubscriptions", r), e.unsubscriptions.push(r);
        }
      }
    }
    _parseUnsuback() {
      ae("_parseUnsuback");
      let e = this.packet;
      if (!this._parseMessageId()) return this._emitError(new Error("Cannot parse messageId"));
      if ((this.settings.protocolVersion === 3 || this.settings.protocolVersion === 4) && e.length !== 2) return this._emitError(new Error("Malformed unsuback, payload length must be 2"));
      if (e.length <= 0) return this._emitError(new Error("Malformed unsuback, no payload specified"));
      if (this.settings.protocolVersion === 5) {
        let r = this._parseProperties();
        for (Object.getOwnPropertyNames(r).length && (e.properties = r), e.granted = []; this._pos < this.packet.length; ) {
          let n = this._list.readUInt8(this._pos++);
          if (!pe.MQTT5_UNSUBACK_CODES[n]) return this._emitError(new Error("Invalid unsuback code"));
          this.packet.granted.push(n);
        }
      }
    }
    _parseConfirmation() {
      ae("_parseConfirmation: packet.cmd: `%s`", this.packet.cmd);
      let e = this.packet;
      if (this._parseMessageId(), this.settings.protocolVersion === 5) {
        if (e.length > 2) {
          switch (e.reasonCode = this._parseByte(), this.packet.cmd) {
            case "puback":
            case "pubrec":
              if (!pe.MQTT5_PUBACK_PUBREC_CODES[e.reasonCode]) return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
              break;
            case "pubrel":
            case "pubcomp":
              if (!pe.MQTT5_PUBREL_PUBCOMP_CODES[e.reasonCode]) return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
              break;
          }
          ae("_parseConfirmation: packet.reasonCode `%d`", e.reasonCode);
        } else e.reasonCode = 0;
        if (e.length > 3) {
          let r = this._parseProperties();
          Object.getOwnPropertyNames(r).length && (e.properties = r);
        }
      }
      return true;
    }
    _parseDisconnect() {
      let e = this.packet;
      if (ae("_parseDisconnect"), this.settings.protocolVersion === 5) {
        this._list.length > 0 ? (e.reasonCode = this._parseByte(), pe.MQTT5_DISCONNECT_CODES[e.reasonCode] || this._emitError(new Error("Invalid disconnect reason code"))) : e.reasonCode = 0;
        let r = this._parseProperties();
        Object.getOwnPropertyNames(r).length && (e.properties = r);
      }
      return ae("_parseDisconnect result: true"), true;
    }
    _parseAuth() {
      ae("_parseAuth");
      let e = this.packet;
      if (this.settings.protocolVersion !== 5) return this._emitError(new Error("Not supported auth packet for this version MQTT"));
      if (e.reasonCode = this._parseByte(), !pe.MQTT5_AUTH_CODES[e.reasonCode]) return this._emitError(new Error("Invalid auth reason code"));
      let r = this._parseProperties();
      return Object.getOwnPropertyNames(r).length && (e.properties = r), ae("_parseAuth: result: true"), true;
    }
    _parseMessageId() {
      let e = this.packet;
      return e.messageId = this._parseNum(), e.messageId === null ? (this._emitError(new Error("Cannot parse messageId")), false) : (ae("_parseMessageId: packet.messageId %d", e.messageId), true);
    }
    _parseString(e) {
      let r = this._parseNum(), n = r + this._pos;
      if (r === -1 || n > this._list.length || n > this.packet.length) return null;
      let i = this._list.toString("utf8", this._pos, n);
      return this._pos += r, ae("_parseString: result: %s", i), i;
    }
    _parseStringPair() {
      return ae("_parseStringPair"), { name: this._parseString(), value: this._parseString() };
    }
    _parseBuffer() {
      let e = this._parseNum(), r = e + this._pos;
      if (e === -1 || r > this._list.length || r > this.packet.length) return null;
      let n = this._list.slice(this._pos, r);
      return this._pos += e, ae("_parseBuffer: result: %o", n), n;
    }
    _parseNum() {
      if (this._list.length - this._pos < 2) return -1;
      let e = this._list.readUInt16BE(this._pos);
      return this._pos += 2, ae("_parseNum: result: %s", e), e;
    }
    _parse4ByteNum() {
      if (this._list.length - this._pos < 4) return -1;
      let e = this._list.readUInt32BE(this._pos);
      return this._pos += 4, ae("_parse4ByteNum: result: %s", e), e;
    }
    _parseVarByteNum(e) {
      ae("_parseVarByteNum");
      let r = 4, n = 0, i = 1, s = 0, o = false, a, c = this._pos ? this._pos : 0;
      for (; n < r && c + n < this._list.length; ) {
        if (a = this._list.readUInt8(c + n++), s += i * (a & pe.VARBYTEINT_MASK), i *= 128, (a & pe.VARBYTEINT_FIN_MASK) === 0) {
          o = true;
          break;
        }
        if (this._list.length <= n) break;
      }
      return !o && n === r && this._list.length >= n && this._emitError(new Error("Invalid variable byte integer")), c && (this._pos += n), o ? e ? o = { bytes: n, value: s } : o = s : o = false, ae("_parseVarByteNum: result: %o", o), o;
    }
    _parseByte() {
      let e;
      return this._pos < this._list.length && (e = this._list.readUInt8(this._pos), this._pos++), ae("_parseByte: result: %o", e), e;
    }
    _parseByType(e) {
      switch (ae("_parseByType: type: %s", e), e) {
        case "byte":
          return this._parseByte() !== 0;
        case "int8":
          return this._parseByte();
        case "int16":
          return this._parseNum();
        case "int32":
          return this._parse4ByteNum();
        case "var":
          return this._parseVarByteNum();
        case "string":
          return this._parseString();
        case "pair":
          return this._parseStringPair();
        case "binary":
          return this._parseBuffer();
      }
    }
    _parseProperties() {
      ae("_parseProperties");
      let e = this._parseVarByteNum(), n = this._pos + e, i = {};
      for (; this._pos < n; ) {
        let s = this._parseByte();
        if (!s) return this._emitError(new Error("Cannot parse property code type")), false;
        let o = pe.propertiesCodes[s];
        if (!o) return this._emitError(new Error("Unknown property")), false;
        if (o === "userProperties") {
          i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
          let a = this._parseByType(pe.propertiesTypes[o]);
          if (i[o][a.name]) if (Array.isArray(i[o][a.name])) i[o][a.name].push(a.value);
          else {
            let c = i[o][a.name];
            i[o][a.name] = [c], i[o][a.name].push(a.value);
          }
          else i[o][a.name] = a.value;
          continue;
        }
        i[o] ? Array.isArray(i[o]) ? i[o].push(this._parseByType(pe.propertiesTypes[o])) : (i[o] = [i[o]], i[o].push(this._parseByType(pe.propertiesTypes[o]))) : i[o] = this._parseByType(pe.propertiesTypes[o]);
      }
      return i;
    }
    _newPacket() {
      return ae("_newPacket"), this.packet && (this._list.consume(this.packet.length), ae("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d", this.packet.cmd, this.packet.payload, this.packet.length), this.emit("packet", this.packet)), ae("_newPacket: new packet"), this.packet = new Fp(), this._pos = 0, true;
    }
    _emitError(e) {
      ae("_emitError", e), this.error = e, this.emit("error", e);
    }
  };
  Wp.exports = Oa;
});
var zp = j((H2, Gp) => {
  A();
  x();
  I();
  var { Buffer: Hn } = (ke(), me(qe)), KS = 65536, Hp = {}, QS = Hn.isBuffer(Hn.from([1, 2]).subarray(0, 1));
  function Vp(t) {
    let e = Hn.allocUnsafe(2);
    return e.writeUInt8(t >> 8, 0), e.writeUInt8(t & 255, 1), e;
  }
  function YS() {
    for (let t = 0; t < KS; t++) Hp[t] = Vp(t);
  }
  function JS(t) {
    let r = 0, n = 0, i = Hn.allocUnsafe(4);
    do
      r = t % 128 | 0, t = t / 128 | 0, t > 0 && (r = r | 128), i.writeUInt8(r, n++);
    while (t > 0 && n < 4);
    return t > 0 && (n = 0), QS ? i.subarray(0, n) : i.slice(0, n);
  }
  function XS(t) {
    let e = Hn.allocUnsafe(4);
    return e.writeUInt32BE(t, 0), e;
  }
  Gp.exports = { cache: Hp, generateCache: YS, generateNumber: Vp, genBufVariableByteInt: JS, generate4ByteBuffer: XS };
});
var Kp = j((eN, Ra) => {
  "use strict";
  A();
  x();
  I();
  typeof N > "u" || !N.version || N.version.indexOf("v0.") === 0 || N.version.indexOf("v1.") === 0 && N.version.indexOf("v1.8.") !== 0 ? Ra.exports = { nextTick: ZS } : Ra.exports = N;
  function ZS(t, e, r, n) {
    if (typeof t != "function") throw new TypeError('"callback" argument must be a function');
    var i = arguments.length, s, o;
    switch (i) {
      case 0:
      case 1:
        return N.nextTick(t);
      case 2:
        return N.nextTick(function() {
          t.call(null, e);
        });
      case 3:
        return N.nextTick(function() {
          t.call(null, e, r);
        });
      case 4:
        return N.nextTick(function() {
          t.call(null, e, r, n);
        });
      default:
        for (s = new Array(i - 1), o = 0; o < s.length; ) s[o++] = arguments[o];
        return N.nextTick(function() {
          t.apply(null, s);
        });
    }
  }
});
var Ba = j((cN, ry) => {
  A();
  x();
  I();
  var ue = Pa(), { Buffer: se } = (ke(), me(qe)), eE = se.allocUnsafe(0), tE = se.from([0]), Vn = zp(), rE = Kp().nextTick, rt = At()("mqtt-packet:writeToStream"), yo = Vn.cache, nE = Vn.generateNumber, iE = Vn.generateCache, ka = Vn.genBufVariableByteInt, oE = Vn.generate4ByteBuffer, He = Ca, go = true;
  function ey(t, e, r) {
    switch (rt("generate called"), e.cork && (e.cork(), rE(sE, e)), go && (go = false, iE()), rt("generate: packet.cmd: %s", t.cmd), t.cmd) {
      case "connect":
        return aE(t, e, r);
      case "connack":
        return uE(t, e, r);
      case "publish":
        return lE(t, e, r);
      case "puback":
      case "pubrec":
      case "pubrel":
      case "pubcomp":
        return cE(t, e, r);
      case "subscribe":
        return fE(t, e, r);
      case "suback":
        return hE(t, e, r);
      case "unsubscribe":
        return dE(t, e, r);
      case "unsuback":
        return pE(t, e, r);
      case "pingreq":
      case "pingresp":
        return yE(t, e, r);
      case "disconnect":
        return gE(t, e, r);
      case "auth":
        return bE(t, e, r);
      default:
        return e.destroy(new Error("Unknown command")), false;
    }
  }
  Object.defineProperty(ey, "cacheNumbers", { get() {
    return He === Ca;
  }, set(t) {
    t ? ((!yo || Object.keys(yo).length === 0) && (go = true), He = Ca) : (go = false, He = wE);
  } });
  function sE(t) {
    t.uncork();
  }
  function aE(t, e, r) {
    let n = t || {}, i = n.protocolId || "MQTT", s = n.protocolVersion || 4, o = n.will, a = n.clean, c = n.keepalive || 0, f = n.clientId || "", h = n.username, d = n.password, m = n.properties;
    a === void 0 && (a = true);
    let g = 0;
    if (!i || typeof i != "string" && !se.isBuffer(i)) return e.destroy(new Error("Invalid protocolId")), false;
    if (g += i.length + 2, s !== 3 && s !== 4 && s !== 5) return e.destroy(new Error("Invalid protocol version")), false;
    if (g += 1, (typeof f == "string" || se.isBuffer(f)) && (f || s >= 4) && (f || a)) g += se.byteLength(f) + 2;
    else {
      if (s < 4) return e.destroy(new Error("clientId must be supplied before 3.1.1")), false;
      if (a * 1 === 0) return e.destroy(new Error("clientId must be given if cleanSession set to 0")), false;
    }
    if (typeof c != "number" || c < 0 || c > 65535 || c % 1 !== 0) return e.destroy(new Error("Invalid keepalive")), false;
    g += 2, g += 1;
    let P, S;
    if (s === 5) {
      if (P = ar(e, m), !P) return false;
      g += P.length;
    }
    if (o) {
      if (typeof o != "object") return e.destroy(new Error("Invalid will")), false;
      if (!o.topic || typeof o.topic != "string") return e.destroy(new Error("Invalid will topic")), false;
      if (g += se.byteLength(o.topic) + 2, g += 2, o.payload) if (o.payload.length >= 0) typeof o.payload == "string" ? g += se.byteLength(o.payload) : g += o.payload.length;
      else return e.destroy(new Error("Invalid will payload")), false;
      if (S = {}, s === 5) {
        if (S = ar(e, o.properties), !S) return false;
        g += S.length;
      }
    }
    let b = false;
    if (h != null) if (Zp(h)) b = true, g += se.byteLength(h) + 2;
    else return e.destroy(new Error("Invalid username")), false;
    if (d != null) {
      if (!b) return e.destroy(new Error("Username is required to use password")), false;
      if (Zp(d)) g += ty(d) + 2;
      else return e.destroy(new Error("Invalid password")), false;
    }
    e.write(ue.CONNECT_HEADER), nt(e, g), pn(e, i), n.bridgeMode && (s += 128), e.write(s === 131 ? ue.VERSION131 : s === 132 ? ue.VERSION132 : s === 4 ? ue.VERSION4 : s === 5 ? ue.VERSION5 : ue.VERSION3);
    let w = 0;
    return w |= h != null ? ue.USERNAME_MASK : 0, w |= d != null ? ue.PASSWORD_MASK : 0, w |= o && o.retain ? ue.WILL_RETAIN_MASK : 0, w |= o && o.qos ? o.qos << ue.WILL_QOS_SHIFT : 0, w |= o ? ue.WILL_FLAG_MASK : 0, w |= a ? ue.CLEAN_SESSION_MASK : 0, e.write(se.from([w])), He(e, c), s === 5 && P.write(), pn(e, f), o && (s === 5 && S.write(), Br(e, o.topic), pn(e, o.payload)), h != null && pn(e, h), d != null && pn(e, d), true;
  }
  function uE(t, e, r) {
    let n = r ? r.protocolVersion : 4, i = t || {}, s = n === 5 ? i.reasonCode : i.returnCode, o = i.properties, a = 2;
    if (typeof s != "number") return e.destroy(new Error("Invalid return code")), false;
    let c = null;
    if (n === 5) {
      if (c = ar(e, o), !c) return false;
      a += c.length;
    }
    return e.write(ue.CONNACK_HEADER), nt(e, a), e.write(i.sessionPresent ? ue.SESSIONPRESENT_HEADER : tE), e.write(se.from([s])), c?.write(), true;
  }
  function lE(t, e, r) {
    rt("publish: packet: %o", t);
    let n = r ? r.protocolVersion : 4, i = t || {}, s = i.qos || 0, o = i.retain ? ue.RETAIN_MASK : 0, a = i.topic, c = i.payload || eE, f = i.messageId, h = i.properties, d = 0;
    if (typeof a == "string") d += se.byteLength(a) + 2;
    else if (se.isBuffer(a)) d += a.length + 2;
    else return e.destroy(new Error("Invalid topic")), false;
    if (se.isBuffer(c) ? d += c.length : d += se.byteLength(c), s && typeof f != "number") return e.destroy(new Error("Invalid messageId")), false;
    s && (d += 2);
    let m = null;
    if (n === 5) {
      if (m = ar(e, h), !m) return false;
      d += m.length;
    }
    return e.write(ue.PUBLISH_HEADER[s][i.dup ? 1 : 0][o ? 1 : 0]), nt(e, d), He(e, ty(a)), e.write(a), s > 0 && He(e, f), m?.write(), rt("publish: payload: %o", c), e.write(c);
  }
  function cE(t, e, r) {
    let n = r ? r.protocolVersion : 4, i = t || {}, s = i.cmd || "puback", o = i.messageId, a = i.dup && s === "pubrel" ? ue.DUP_MASK : 0, c = 0, f = i.reasonCode, h = i.properties, d = n === 5 ? 3 : 2;
    if (s === "pubrel" && (c = 1), typeof o != "number") return e.destroy(new Error("Invalid messageId")), false;
    let m = null;
    if (n === 5 && typeof h == "object") {
      if (m = Gn(e, h, r, d), !m) return false;
      d += m.length;
    }
    return e.write(ue.ACKS[s][c][a][0]), d === 3 && (d += f !== 0 ? 1 : -1), nt(e, d), He(e, o), n === 5 && d !== 2 && e.write(se.from([f])), m !== null ? m.write() : d === 4 && e.write(se.from([0])), true;
  }
  function fE(t, e, r) {
    rt("subscribe: packet: ");
    let n = r ? r.protocolVersion : 4, i = t || {}, s = i.dup ? ue.DUP_MASK : 0, o = i.messageId, a = i.subscriptions, c = i.properties, f = 0;
    if (typeof o != "number") return e.destroy(new Error("Invalid messageId")), false;
    f += 2;
    let h = null;
    if (n === 5) {
      if (h = ar(e, c), !h) return false;
      f += h.length;
    }
    if (typeof a == "object" && a.length) for (let m = 0; m < a.length; m += 1) {
      let g = a[m].topic, P = a[m].qos;
      if (typeof g != "string") return e.destroy(new Error("Invalid subscriptions - invalid topic")), false;
      if (typeof P != "number") return e.destroy(new Error("Invalid subscriptions - invalid qos")), false;
      if (n === 5) {
        if (typeof (a[m].nl || false) != "boolean") return e.destroy(new Error("Invalid subscriptions - invalid No Local")), false;
        if (typeof (a[m].rap || false) != "boolean") return e.destroy(new Error("Invalid subscriptions - invalid Retain as Published")), false;
        let w = a[m].rh || 0;
        if (typeof w != "number" || w > 2) return e.destroy(new Error("Invalid subscriptions - invalid Retain Handling")), false;
      }
      f += se.byteLength(g) + 2 + 1;
    }
    else return e.destroy(new Error("Invalid subscriptions")), false;
    rt("subscribe: writing to stream: %o", ue.SUBSCRIBE_HEADER), e.write(ue.SUBSCRIBE_HEADER[1][s ? 1 : 0][0]), nt(e, f), He(e, o), h !== null && h.write();
    let d = true;
    for (let m of a) {
      let g = m.topic, P = m.qos, S = +m.nl, b = +m.rap, w = m.rh, _;
      Br(e, g), _ = ue.SUBSCRIBE_OPTIONS_QOS[P], n === 5 && (_ |= S ? ue.SUBSCRIBE_OPTIONS_NL : 0, _ |= b ? ue.SUBSCRIBE_OPTIONS_RAP : 0, _ |= w ? ue.SUBSCRIBE_OPTIONS_RH[w] : 0), d = e.write(se.from([_]));
    }
    return d;
  }
  function hE(t, e, r) {
    let n = r ? r.protocolVersion : 4, i = t || {}, s = i.messageId, o = i.granted, a = i.properties, c = 0;
    if (typeof s != "number") return e.destroy(new Error("Invalid messageId")), false;
    if (c += 2, typeof o == "object" && o.length) for (let h = 0; h < o.length; h += 1) {
      if (typeof o[h] != "number") return e.destroy(new Error("Invalid qos vector")), false;
      c += 1;
    }
    else return e.destroy(new Error("Invalid qos vector")), false;
    let f = null;
    if (n === 5) {
      if (f = Gn(e, a, r, c), !f) return false;
      c += f.length;
    }
    return e.write(ue.SUBACK_HEADER), nt(e, c), He(e, s), f !== null && f.write(), e.write(se.from(o));
  }
  function dE(t, e, r) {
    let n = r ? r.protocolVersion : 4, i = t || {}, s = i.messageId, o = i.dup ? ue.DUP_MASK : 0, a = i.unsubscriptions, c = i.properties, f = 0;
    if (typeof s != "number") return e.destroy(new Error("Invalid messageId")), false;
    if (f += 2, typeof a == "object" && a.length) for (let m = 0; m < a.length; m += 1) {
      if (typeof a[m] != "string") return e.destroy(new Error("Invalid unsubscriptions")), false;
      f += se.byteLength(a[m]) + 2;
    }
    else return e.destroy(new Error("Invalid unsubscriptions")), false;
    let h = null;
    if (n === 5) {
      if (h = ar(e, c), !h) return false;
      f += h.length;
    }
    e.write(ue.UNSUBSCRIBE_HEADER[1][o ? 1 : 0][0]), nt(e, f), He(e, s), h !== null && h.write();
    let d = true;
    for (let m = 0; m < a.length; m++) d = Br(e, a[m]);
    return d;
  }
  function pE(t, e, r) {
    let n = r ? r.protocolVersion : 4, i = t || {}, s = i.messageId, o = i.dup ? ue.DUP_MASK : 0, a = i.granted, c = i.properties, f = i.cmd, h = 0, d = 2;
    if (typeof s != "number") return e.destroy(new Error("Invalid messageId")), false;
    if (n === 5) if (typeof a == "object" && a.length) for (let g = 0; g < a.length; g += 1) {
      if (typeof a[g] != "number") return e.destroy(new Error("Invalid qos vector")), false;
      d += 1;
    }
    else return e.destroy(new Error("Invalid qos vector")), false;
    let m = null;
    if (n === 5) {
      if (m = Gn(e, c, r, d), !m) return false;
      d += m.length;
    }
    return e.write(ue.ACKS[f][h][o][0]), nt(e, d), He(e, s), m !== null && m.write(), n === 5 && e.write(se.from(a)), true;
  }
  function yE(t, e, r) {
    return e.write(ue.EMPTY[t.cmd]);
  }
  function gE(t, e, r) {
    let n = r ? r.protocolVersion : 4, i = t || {}, s = i.reasonCode, o = i.properties, a = n === 5 ? 1 : 0, c = null;
    if (n === 5) {
      if (c = Gn(e, o, r, a), !c) return false;
      a += c.length;
    }
    return e.write(se.from([ue.codes.disconnect << 4])), nt(e, a), n === 5 && e.write(se.from([s])), c !== null && c.write(), true;
  }
  function bE(t, e, r) {
    let n = r ? r.protocolVersion : 4, i = t || {}, s = i.reasonCode, o = i.properties, a = n === 5 ? 1 : 0;
    n !== 5 && e.destroy(new Error("Invalid mqtt version for auth packet"));
    let c = Gn(e, o, r, a);
    return c ? (a += c.length, e.write(se.from([ue.codes.auth << 4])), nt(e, a), e.write(se.from([s])), c !== null && c.write(), true) : false;
  }
  var Qp = {};
  function nt(t, e) {
    if (e > ue.VARBYTEINT_MAX) return t.destroy(new Error(`Invalid variable byte integer: ${e}`)), false;
    let r = Qp[e];
    return r || (r = ka(e), e < 16384 && (Qp[e] = r)), rt("writeVarByteInt: writing to stream: %o", r), t.write(r);
  }
  function Br(t, e) {
    let r = se.byteLength(e);
    return He(t, r), rt("writeString: %s", e), t.write(e, "utf8");
  }
  function Yp(t, e, r) {
    Br(t, e), Br(t, r);
  }
  function Ca(t, e) {
    return rt("writeNumberCached: number: %d", e), rt("writeNumberCached: %o", yo[e]), t.write(yo[e]);
  }
  function wE(t, e) {
    let r = nE(e);
    return rt("writeNumberGenerated: %o", r), t.write(r);
  }
  function mE(t, e) {
    let r = oE(e);
    return rt("write4ByteNumber: %o", r), t.write(r);
  }
  function pn(t, e) {
    typeof e == "string" ? Br(t, e) : e ? (He(t, e.length), t.write(e)) : He(t, 0);
  }
  function ar(t, e) {
    if (typeof e != "object" || e.length != null) return { length: 1, write() {
      Xp(t, {}, 0);
    } };
    let r = 0;
    function n(s, o) {
      let a = ue.propertiesTypes[s], c = 0;
      switch (a) {
        case "byte": {
          if (typeof o != "boolean") return t.destroy(new Error(`Invalid ${s}: ${o}`)), false;
          c += 2;
          break;
        }
        case "int8": {
          if (typeof o != "number" || o < 0 || o > 255) return t.destroy(new Error(`Invalid ${s}: ${o}`)), false;
          c += 2;
          break;
        }
        case "binary": {
          if (o && o === null) return t.destroy(new Error(`Invalid ${s}: ${o}`)), false;
          c += 1 + se.byteLength(o) + 2;
          break;
        }
        case "int16": {
          if (typeof o != "number" || o < 0 || o > 65535) return t.destroy(new Error(`Invalid ${s}: ${o}`)), false;
          c += 3;
          break;
        }
        case "int32": {
          if (typeof o != "number" || o < 0 || o > 4294967295) return t.destroy(new Error(`Invalid ${s}: ${o}`)), false;
          c += 5;
          break;
        }
        case "var": {
          if (typeof o != "number" || o < 0 || o > 268435455) return t.destroy(new Error(`Invalid ${s}: ${o}`)), false;
          c += 1 + se.byteLength(ka(o));
          break;
        }
        case "string": {
          if (typeof o != "string") return t.destroy(new Error(`Invalid ${s}: ${o}`)), false;
          c += 3 + se.byteLength(o.toString());
          break;
        }
        case "pair": {
          if (typeof o != "object") return t.destroy(new Error(`Invalid ${s}: ${o}`)), false;
          c += Object.getOwnPropertyNames(o).reduce((f, h) => {
            let d = o[h];
            return Array.isArray(d) ? f += d.reduce((m, g) => (m += 3 + se.byteLength(h.toString()) + 2 + se.byteLength(g.toString()), m), 0) : f += 3 + se.byteLength(h.toString()) + 2 + se.byteLength(o[h].toString()), f;
          }, 0);
          break;
        }
        default:
          return t.destroy(new Error(`Invalid property ${s}: ${o}`)), false;
      }
      return c;
    }
    if (e) for (let s in e) {
      let o = 0, a = 0, c = e[s];
      if (c !== void 0) {
        if (Array.isArray(c)) for (let f = 0; f < c.length; f++) {
          if (a = n(s, c[f]), !a) return false;
          o += a;
        }
        else {
          if (a = n(s, c), !a) return false;
          o = a;
        }
        if (!o) return false;
        r += o;
      }
    }
    return { length: se.byteLength(ka(r)) + r, write() {
      Xp(t, e, r);
    } };
  }
  function Gn(t, e, r, n) {
    let i = ["reasonString", "userProperties"], s = r && r.properties && r.properties.maximumPacketSize ? r.properties.maximumPacketSize : 0, o = ar(t, e);
    if (s) for (; n + o.length > s; ) {
      let a = i.shift();
      if (a && e[a]) delete e[a], o = ar(t, e);
      else return false;
    }
    return o;
  }
  function Jp(t, e, r) {
    switch (ue.propertiesTypes[e]) {
      case "byte": {
        t.write(se.from([ue.properties[e]])), t.write(se.from([+r]));
        break;
      }
      case "int8": {
        t.write(se.from([ue.properties[e]])), t.write(se.from([r]));
        break;
      }
      case "binary": {
        t.write(se.from([ue.properties[e]])), pn(t, r);
        break;
      }
      case "int16": {
        t.write(se.from([ue.properties[e]])), He(t, r);
        break;
      }
      case "int32": {
        t.write(se.from([ue.properties[e]])), mE(t, r);
        break;
      }
      case "var": {
        t.write(se.from([ue.properties[e]])), nt(t, r);
        break;
      }
      case "string": {
        t.write(se.from([ue.properties[e]])), Br(t, r);
        break;
      }
      case "pair": {
        Object.getOwnPropertyNames(r).forEach((i) => {
          let s = r[i];
          Array.isArray(s) ? s.forEach((o) => {
            t.write(se.from([ue.properties[e]])), Yp(t, i.toString(), o.toString());
          }) : (t.write(se.from([ue.properties[e]])), Yp(t, i.toString(), s.toString()));
        });
        break;
      }
      default:
        return t.destroy(new Error(`Invalid property ${e} value: ${r}`)), false;
    }
  }
  function Xp(t, e, r) {
    nt(t, r);
    for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && e[n] != null) {
      let i = e[n];
      if (Array.isArray(i)) for (let s = 0; s < i.length; s++) Jp(t, n, i[s]);
      else Jp(t, n, i);
    }
  }
  function ty(t) {
    return t ? t instanceof se ? t.length : se.byteLength(t) : 0;
  }
  function Zp(t) {
    return typeof t == "string" || t instanceof se;
  }
  ry.exports = ey;
});
var oy = j((_N, iy) => {
  A();
  x();
  I();
  var _E = Ba(), { EventEmitter: vE } = (er(), me(Zt)), { Buffer: ny } = (ke(), me(qe));
  function SE(t, e) {
    let r = new Ma();
    return _E(t, r, e), r.concat();
  }
  var Ma = class extends vE {
    constructor() {
      super(), this._array = new Array(20), this._i = 0;
    }
    write(e) {
      return this._array[this._i++] = e, true;
    }
    concat() {
      let e = 0, r = new Array(this._array.length), n = this._array, i = 0, s;
      for (s = 0; s < n.length && n[s] !== void 0; s++) typeof n[s] != "string" ? r[s] = n[s].length : r[s] = ny.byteLength(n[s]), e += r[s];
      let o = ny.allocUnsafe(e);
      for (s = 0; s < n.length && n[s] !== void 0; s++) typeof n[s] != "string" ? (n[s].copy(o, i), i += r[s]) : (o.write(n[s], i), i += r[s]);
      return o;
    }
    destroy(e) {
      e && this.emit("error", e);
    }
  };
  iy.exports = SE;
});
var sy = j((bo) => {
  A();
  x();
  I();
  bo.parser = $p().parser;
  bo.generate = oy();
  bo.writeToStream = Ba();
});
var uy = j((jN, ay) => {
  "use strict";
  A();
  x();
  I();
  ay.exports = EE;
  function yn(t) {
    return t instanceof D ? D.from(t) : new t.constructor(t.buffer.slice(), t.byteOffset, t.length);
  }
  function EE(t) {
    if (t = t || {}, t.circles) return AE(t);
    let e = /* @__PURE__ */ new Map();
    if (e.set(Date, (o) => new Date(o)), e.set(Map, (o, a) => new Map(n(Array.from(o), a))), e.set(Set, (o, a) => new Set(n(Array.from(o), a))), t.constructorHandlers) for (let o of t.constructorHandlers) e.set(o[0], o[1]);
    let r = null;
    return t.proto ? s : i;
    function n(o, a) {
      let c = Object.keys(o), f = new Array(c.length);
      for (let h = 0; h < c.length; h++) {
        let d = c[h], m = o[d];
        typeof m != "object" || m === null ? f[d] = m : m.constructor !== Object && (r = e.get(m.constructor)) ? f[d] = r(m, a) : ArrayBuffer.isView(m) ? f[d] = yn(m) : f[d] = a(m);
      }
      return f;
    }
    function i(o) {
      if (typeof o != "object" || o === null) return o;
      if (Array.isArray(o)) return n(o, i);
      if (o.constructor !== Object && (r = e.get(o.constructor))) return r(o, i);
      let a = {};
      for (let c in o) {
        if (Object.hasOwnProperty.call(o, c) === false) continue;
        let f = o[c];
        typeof f != "object" || f === null ? a[c] = f : f.constructor !== Object && (r = e.get(f.constructor)) ? a[c] = r(f, i) : ArrayBuffer.isView(f) ? a[c] = yn(f) : a[c] = i(f);
      }
      return a;
    }
    function s(o) {
      if (typeof o != "object" || o === null) return o;
      if (Array.isArray(o)) return n(o, s);
      if (o.constructor !== Object && (r = e.get(o.constructor))) return r(o, s);
      let a = {};
      for (let c in o) {
        let f = o[c];
        typeof f != "object" || f === null ? a[c] = f : f.constructor !== Object && (r = e.get(f.constructor)) ? a[c] = r(f, s) : ArrayBuffer.isView(f) ? a[c] = yn(f) : a[c] = s(f);
      }
      return a;
    }
  }
  function AE(t) {
    let e = [], r = [], n = /* @__PURE__ */ new Map();
    if (n.set(Date, (c) => new Date(c)), n.set(Map, (c, f) => new Map(s(Array.from(c), f))), n.set(Set, (c, f) => new Set(s(Array.from(c), f))), t.constructorHandlers) for (let c of t.constructorHandlers) n.set(c[0], c[1]);
    let i = null;
    return t.proto ? a : o;
    function s(c, f) {
      let h = Object.keys(c), d = new Array(h.length);
      for (let m = 0; m < h.length; m++) {
        let g = h[m], P = c[g];
        if (typeof P != "object" || P === null) d[g] = P;
        else if (P.constructor !== Object && (i = n.get(P.constructor))) d[g] = i(P, f);
        else if (ArrayBuffer.isView(P)) d[g] = yn(P);
        else {
          let S = e.indexOf(P);
          S !== -1 ? d[g] = r[S] : d[g] = f(P);
        }
      }
      return d;
    }
    function o(c) {
      if (typeof c != "object" || c === null) return c;
      if (Array.isArray(c)) return s(c, o);
      if (c.constructor !== Object && (i = n.get(c.constructor))) return i(c, o);
      let f = {};
      e.push(c), r.push(f);
      for (let h in c) {
        if (Object.hasOwnProperty.call(c, h) === false) continue;
        let d = c[h];
        if (typeof d != "object" || d === null) f[h] = d;
        else if (d.constructor !== Object && (i = n.get(d.constructor))) f[h] = i(d, o);
        else if (ArrayBuffer.isView(d)) f[h] = yn(d);
        else {
          let m = e.indexOf(d);
          m !== -1 ? f[h] = r[m] : f[h] = o(d);
        }
      }
      return e.pop(), r.pop(), f;
    }
    function a(c) {
      if (typeof c != "object" || c === null) return c;
      if (Array.isArray(c)) return s(c, a);
      if (c.constructor !== Object && (i = n.get(c.constructor))) return i(c, a);
      let f = {};
      e.push(c), r.push(f);
      for (let h in c) {
        let d = c[h];
        if (typeof d != "object" || d === null) f[h] = d;
        else if (d.constructor !== Object && (i = n.get(d.constructor))) f[h] = i(d, a);
        else if (ArrayBuffer.isView(d)) f[h] = yn(d);
        else {
          let m = e.indexOf(d);
          m !== -1 ? f[h] = r[m] : f[h] = a(d);
        }
      }
      return e.pop(), r.pop(), f;
    }
  }
});
var cy = j((YN, ly) => {
  "use strict";
  A();
  x();
  I();
  ly.exports = uy()();
});
var Na = j((wo) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(wo, "__esModule", { value: true });
  wo.validateTopic = fy;
  wo.validateTopics = IE;
  function fy(t) {
    let e = t.split("/");
    for (let r = 0; r < e.length; r++) if (e[r] !== "+") {
      if (e[r] === "#") return r === e.length - 1;
      if (e[r].indexOf("+") !== -1 || e[r].indexOf("#") !== -1) return false;
    }
    return true;
  }
  function IE(t) {
    if (t.length === 0) return "empty_topic_list";
    for (let e = 0; e < t.length; e++) if (!fy(t[e])) return t[e];
    return null;
  }
});
var Ua = j((La) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(La, "__esModule", { value: true });
  var xE = or(), TE = { objectMode: true }, PE = { clean: true }, qa = class {
    options;
    _inflights;
    constructor(e) {
      this.options = e || {}, this.options = __spreadValues(__spreadValues({}, PE), e), this._inflights = /* @__PURE__ */ new Map();
    }
    put(e, r) {
      return this._inflights.set(e.messageId, e), r && r(), this;
    }
    createStream() {
      let e = new xE.Readable(TE), r = [], n = false, i = 0;
      return this._inflights.forEach((s, o) => {
        r.push(s);
      }), e._read = () => {
        !n && i < r.length ? e.push(r[i++]) : e.push(null);
      }, e.destroy = (s) => {
        if (!n) return n = true, setTimeout(() => {
          e.emit("close");
        }, 0), e;
      }, e;
    }
    del(e, r) {
      let n = this._inflights.get(e.messageId);
      return n ? (this._inflights.delete(e.messageId), r(null, n)) : r && r(new Error("missing packet")), this;
    }
    get(e, r) {
      let n = this._inflights.get(e.messageId);
      return n ? r(null, n) : r && r(new Error("missing packet")), this;
    }
    close(e) {
      this.options.clean && (this._inflights = null), e && e();
    }
  };
  La.default = qa;
});
var dy = j((Da) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Da, "__esModule", { value: true });
  var hy = [0, 16, 128, 131, 135, 144, 145, 151, 153], OE = (t, e, r) => {
    t.log("handlePublish: packet %o", e), r = typeof r < "u" ? r : t.noop;
    let n = e.topic.toString(), i = e.payload, { qos: s } = e, { messageId: o } = e, { options: a } = t;
    if (t.options.protocolVersion === 5) {
      let c;
      if (e.properties && (c = e.properties.topicAlias), typeof c < "u") if (n.length === 0) if (c > 0 && c <= 65535) {
        let f = t.topicAliasRecv.getTopicByAlias(c);
        if (f) n = f, t.log("handlePublish :: topic complemented by alias. topic: %s - alias: %d", n, c);
        else {
          t.log("handlePublish :: unregistered topic alias. alias: %d", c), t.emit("error", new Error("Received unregistered Topic Alias"));
          return;
        }
      } else {
        t.log("handlePublish :: topic alias out of range. alias: %d", c), t.emit("error", new Error("Received Topic Alias is out of range"));
        return;
      }
      else if (t.topicAliasRecv.put(n, c)) t.log("handlePublish :: registered topic: %s - alias: %d", n, c);
      else {
        t.log("handlePublish :: topic alias out of range. alias: %d", c), t.emit("error", new Error("Received Topic Alias is out of range"));
        return;
      }
    }
    switch (t.log("handlePublish: qos %d", s), s) {
      case 2: {
        a.customHandleAcks(n, i, e, (c, f) => {
          if (typeof c == "number" && (f = c, c = null), c) return t.emit("error", c);
          if (hy.indexOf(f) === -1) return t.emit("error", new Error("Wrong reason code for pubrec"));
          f ? t._sendPacket({ cmd: "pubrec", messageId: o, reasonCode: f }, r) : t.incomingStore.put(e, () => {
            t._sendPacket({ cmd: "pubrec", messageId: o }, r);
          });
        });
        break;
      }
      case 1: {
        a.customHandleAcks(n, i, e, (c, f) => {
          if (typeof c == "number" && (f = c, c = null), c) return t.emit("error", c);
          if (hy.indexOf(f) === -1) return t.emit("error", new Error("Wrong reason code for puback"));
          f || t.emit("message", n, i, e), t.handleMessage(e, (h) => {
            if (h) return r && r(h);
            t._sendPacket({ cmd: "puback", messageId: o, reasonCode: f }, r);
          });
        });
        break;
      }
      case 0:
        t.emit("message", n, i, e), t.handleMessage(e, r);
        break;
      default:
        t.log("handlePublish: unknown QoS. Doing nothing.");
        break;
    }
  };
  Da.default = OE;
});
var py = j((qq, RE) => {
  RE.exports = { version: "5.15.1" };
});
var Mr = j((ht) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(ht, "__esModule", { value: true });
  ht.MQTTJS_VERSION = ht.nextTick = ht.ErrorWithSubackPacket = ht.ErrorWithReasonCode = void 0;
  ht.applyMixin = kE;
  var ja = class t extends Error {
    code;
    constructor(e, r) {
      super(e), this.code = r, Object.setPrototypeOf(this, t.prototype), Object.getPrototypeOf(this).name = "ErrorWithReasonCode";
    }
  };
  ht.ErrorWithReasonCode = ja;
  var Fa = class t extends Error {
    packet;
    constructor(e, r) {
      super(e), this.packet = r, Object.setPrototypeOf(this, t.prototype), Object.getPrototypeOf(this).name = "ErrorWithSubackPacket";
    }
  };
  ht.ErrorWithSubackPacket = Fa;
  function kE(t, e, r = false) {
    let n = [e];
    for (; ; ) {
      let i = n[0], s = Object.getPrototypeOf(i);
      if (s?.prototype) n.unshift(s);
      else break;
    }
    for (let i of n) for (let s of Object.getOwnPropertyNames(i.prototype)) (r || s !== "constructor") && Object.defineProperty(t.prototype, s, Object.getOwnPropertyDescriptor(i.prototype, s) ?? /* @__PURE__ */ Object.create(null));
  }
  ht.nextTick = typeof N?.nextTick == "function" ? N.nextTick : (t) => {
    setTimeout(t, 0);
  };
  ht.MQTTJS_VERSION = py().version;
});
var zn = j((ur) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(ur, "__esModule", { value: true });
  ur.ReasonCodes = void 0;
  var yy = Mr();
  ur.ReasonCodes = { 0: "", 1: "Unacceptable protocol version", 2: "Identifier rejected", 3: "Server unavailable", 4: "Bad username or password", 5: "Not authorized", 16: "No matching subscribers", 17: "No subscription existed", 128: "Unspecified error", 129: "Malformed Packet", 130: "Protocol Error", 131: "Implementation specific error", 132: "Unsupported Protocol Version", 133: "Client Identifier not valid", 134: "Bad User Name or Password", 135: "Not authorized", 136: "Server unavailable", 137: "Server busy", 138: "Banned", 139: "Server shutting down", 140: "Bad authentication method", 141: "Keep Alive timeout", 142: "Session taken over", 143: "Topic Filter invalid", 144: "Topic Name invalid", 145: "Packet identifier in use", 146: "Packet Identifier not found", 147: "Receive Maximum exceeded", 148: "Topic Alias invalid", 149: "Packet too large", 150: "Message rate too high", 151: "Quota exceeded", 152: "Administrative action", 153: "Payload format invalid", 154: "Retain not supported", 155: "QoS not supported", 156: "Use another server", 157: "Server moved", 158: "Shared Subscriptions not supported", 159: "Connection rate exceeded", 160: "Maximum connect time", 161: "Subscription Identifiers not supported", 162: "Wildcard Subscriptions not supported" };
  var CE = (t, e) => {
    let { messageId: r } = e, n = e.cmd, i = null, s = t.outgoing[r] ? t.outgoing[r].cb : null, o = null;
    if (!s) {
      t.log("_handleAck :: Server sent an ack in error. Ignoring.");
      return;
    }
    switch (t.log("_handleAck :: packet type", n), n) {
      case "pubcomp":
      case "puback": {
        let a = e.reasonCode;
        a && a > 0 && a !== 16 ? (o = new yy.ErrorWithReasonCode(`Publish error: ${ur.ReasonCodes[a]}`, a), t._removeOutgoingAndStoreMessage(r, () => {
          s(o, e);
        })) : t._removeOutgoingAndStoreMessage(r, s);
        break;
      }
      case "pubrec": {
        i = { cmd: "pubrel", qos: 2, messageId: r };
        let a = e.reasonCode;
        a && a > 0 && a !== 16 ? (o = new yy.ErrorWithReasonCode(`Publish error: ${ur.ReasonCodes[a]}`, a), t._removeOutgoingAndStoreMessage(r, () => {
          s(o, e);
        })) : t._sendPacket(i);
        break;
      }
      case "suback": {
        delete t.outgoing[r], t.messageIdProvider.deallocate(r);
        let a = e.granted;
        for (let c = 0; c < a.length; c++) {
          let f = a[c];
          if ((f & 128) !== 0) {
            o = new Error(`Subscribe error: ${ur.ReasonCodes[f]}`), o.code = f;
            let h = t.messageIdToTopic[r];
            h && h.forEach((d) => {
              delete t._resubscribeTopics[d];
            });
          }
        }
        delete t.messageIdToTopic[r], t._invokeStoreProcessingQueue(), s(o, e);
        break;
      }
      case "unsuback": {
        delete t.outgoing[r], t.messageIdProvider.deallocate(r), t._invokeStoreProcessingQueue(), s(null, e);
        break;
      }
      default:
        t.emit("error", new Error("unrecognized packet type"));
    }
    t.disconnecting && Object.keys(t.outgoing).length === 0 && t.emit("outgoingEmpty");
  };
  ur.default = CE;
});
var by = j((Wa) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Wa, "__esModule", { value: true });
  var gy = Mr(), BE = zn(), ME = (t, e) => {
    let { options: r } = t, n = r.protocolVersion, i = n === 5 ? e.reasonCode : e.returnCode;
    if (n !== 5) {
      let s = new gy.ErrorWithReasonCode(`Protocol error: Auth packets are only supported in MQTT 5. Your version:${n}`, i);
      t.emit("error", s);
      return;
    }
    t.handleAuth(e, (s, o) => {
      if (s) {
        t.emit("error", s);
        return;
      }
      if (i === 24) t.reconnecting = false, t._sendPacket(o);
      else {
        let a = new gy.ErrorWithReasonCode(`Connection refused: ${BE.ReasonCodes[i]}`, i);
        t.emit("error", a);
      }
    });
  };
  Wa.default = ME;
});
var Sy = j((_o) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(_o, "__esModule", { value: true });
  _o.LRUCache = void 0;
  var gn = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, my = /* @__PURE__ */ new Set(), $a = typeof N == "object" && N ? N : {}, _y = (t, e, r, n) => {
    typeof $a.emitWarning == "function" ? $a.emitWarning(t, e, r, n) : console.error(`[${r}] ${e}: ${t}`);
  }, mo = globalThis.AbortController, wy = globalThis.AbortSignal;
  if (typeof mo > "u") {
    wy = class {
      onabort;
      _onabort = [];
      reason;
      aborted = false;
      addEventListener(n, i) {
        this._onabort.push(i);
      }
    }, mo = class {
      constructor() {
        e();
      }
      signal = new wy();
      abort(n) {
        if (!this.signal.aborted) {
          this.signal.reason = n, this.signal.aborted = true;
          for (let i of this.signal._onabort) i(n);
          this.signal.onabort?.(n);
        }
      }
    };
    let t = $a.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1", e = () => {
      t && (t = false, _y("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", e));
    };
  }
  var NE = (t) => !my.has(t), yL = /* @__PURE__ */ Symbol("type"), lr = (t) => t && t === Math.floor(t) && t > 0 && isFinite(t), vy = (t) => lr(t) ? t <= Math.pow(2, 8) ? Uint8Array : t <= Math.pow(2, 16) ? Uint16Array : t <= Math.pow(2, 32) ? Uint32Array : t <= Number.MAX_SAFE_INTEGER ? bn : null : null, bn = class extends Array {
    constructor(e) {
      super(e), this.fill(0);
    }
  }, Ha = class t {
    heap;
    length;
    static #u = false;
    static create(e) {
      let r = vy(e);
      if (!r) return [];
      t.#u = true;
      let n = new t(e, r);
      return t.#u = false, n;
    }
    constructor(e, r) {
      if (!t.#u) throw new TypeError("instantiate Stack using Stack.create(n)");
      this.heap = new r(e), this.length = 0;
    }
    push(e) {
      this.heap[this.length++] = e;
    }
    pop() {
      return this.heap[--this.length];
    }
  }, Va = class t {
    #u;
    #f;
    #y;
    #g;
    #R;
    #k;
    ttl;
    ttlResolution;
    ttlAutopurge;
    updateAgeOnGet;
    updateAgeOnHas;
    allowStale;
    noDisposeOnSet;
    noUpdateTTL;
    maxEntrySize;
    sizeCalculation;
    noDeleteOnFetchRejection;
    noDeleteOnStaleGet;
    allowStaleOnFetchAbort;
    allowStaleOnFetchRejection;
    ignoreFetchAbort;
    #i;
    #b;
    #n;
    #r;
    #e;
    #l;
    #h;
    #a;
    #o;
    #w;
    #s;
    #m;
    #_;
    #d;
    #v;
    #x;
    #c;
    static unsafeExposeInternals(e) {
      return { starts: e.#_, ttls: e.#d, sizes: e.#m, keyMap: e.#n, keyList: e.#r, valList: e.#e, next: e.#l, prev: e.#h, get head() {
        return e.#a;
      }, get tail() {
        return e.#o;
      }, free: e.#w, isBackgroundFetch: (r) => e.#t(r), backgroundFetch: (r, n, i, s) => e.#M(r, n, i, s), moveToTail: (r) => e.#O(r), indexes: (r) => e.#S(r), rindexes: (r) => e.#E(r), isStale: (r) => e.#p(r) };
    }
    get max() {
      return this.#u;
    }
    get maxSize() {
      return this.#f;
    }
    get calculatedSize() {
      return this.#b;
    }
    get size() {
      return this.#i;
    }
    get fetchMethod() {
      return this.#R;
    }
    get memoMethod() {
      return this.#k;
    }
    get dispose() {
      return this.#y;
    }
    get disposeAfter() {
      return this.#g;
    }
    constructor(e) {
      let { max: r = 0, ttl: n, ttlResolution: i = 1, ttlAutopurge: s, updateAgeOnGet: o, updateAgeOnHas: a, allowStale: c, dispose: f, disposeAfter: h, noDisposeOnSet: d, noUpdateTTL: m, maxSize: g = 0, maxEntrySize: P = 0, sizeCalculation: S, fetchMethod: b, memoMethod: w, noDeleteOnFetchRejection: _, noDeleteOnStaleGet: R, allowStaleOnFetchRejection: T, allowStaleOnFetchAbort: y, ignoreFetchAbort: O } = e;
      if (r !== 0 && !lr(r)) throw new TypeError("max option must be a nonnegative integer");
      let v = r ? vy(r) : Array;
      if (!v) throw new Error("invalid max value: " + r);
      if (this.#u = r, this.#f = g, this.maxEntrySize = P || this.#f, this.sizeCalculation = S, this.sizeCalculation) {
        if (!this.#f && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
        if (typeof this.sizeCalculation != "function") throw new TypeError("sizeCalculation set to non-function");
      }
      if (w !== void 0 && typeof w != "function") throw new TypeError("memoMethod must be a function if defined");
      if (this.#k = w, b !== void 0 && typeof b != "function") throw new TypeError("fetchMethod must be a function if specified");
      if (this.#R = b, this.#x = !!b, this.#n = /* @__PURE__ */ new Map(), this.#r = new Array(r).fill(void 0), this.#e = new Array(r).fill(void 0), this.#l = new v(r), this.#h = new v(r), this.#a = 0, this.#o = 0, this.#w = Ha.create(r), this.#i = 0, this.#b = 0, typeof f == "function" && (this.#y = f), typeof h == "function" ? (this.#g = h, this.#s = []) : (this.#g = void 0, this.#s = void 0), this.#v = !!this.#y, this.#c = !!this.#g, this.noDisposeOnSet = !!d, this.noUpdateTTL = !!m, this.noDeleteOnFetchRejection = !!_, this.allowStaleOnFetchRejection = !!T, this.allowStaleOnFetchAbort = !!y, this.ignoreFetchAbort = !!O, this.maxEntrySize !== 0) {
        if (this.#f !== 0 && !lr(this.#f)) throw new TypeError("maxSize must be a positive integer if specified");
        if (!lr(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
        this.#F();
      }
      if (this.allowStale = !!c, this.noDeleteOnStaleGet = !!R, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!a, this.ttlResolution = lr(i) || i === 0 ? i : 1, this.ttlAutopurge = !!s, this.ttl = n || 0, this.ttl) {
        if (!lr(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
        this.#N();
      }
      if (this.#u === 0 && this.ttl === 0 && this.#f === 0) throw new TypeError("At least one of max, maxSize, or ttl is required");
      if (!this.ttlAutopurge && !this.#u && !this.#f) {
        let M = "LRU_CACHE_UNBOUNDED";
        NE(M) && (my.add(M), _y("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", M, t));
      }
    }
    getRemainingTTL(e) {
      return this.#n.has(e) ? 1 / 0 : 0;
    }
    #N() {
      let e = new bn(this.#u), r = new bn(this.#u);
      this.#d = e, this.#_ = r, this.#q = (s, o, a = gn.now()) => {
        if (r[s] = o !== 0 ? a : 0, e[s] = o, o !== 0 && this.ttlAutopurge) {
          let c = setTimeout(() => {
            this.#p(s) && this.#A(this.#r[s], "expire");
          }, o + 1);
          c.unref && c.unref();
        }
      }, this.#T = (s) => {
        r[s] = e[s] !== 0 ? gn.now() : 0;
      }, this.#I = (s, o) => {
        if (e[o]) {
          let a = e[o], c = r[o];
          if (!a || !c) return;
          s.ttl = a, s.start = c, s.now = n || i();
          let f = s.now - c;
          s.remainingTTL = a - f;
        }
      };
      let n = 0, i = () => {
        let s = gn.now();
        if (this.ttlResolution > 0) {
          n = s;
          let o = setTimeout(() => n = 0, this.ttlResolution);
          o.unref && o.unref();
        }
        return s;
      };
      this.getRemainingTTL = (s) => {
        let o = this.#n.get(s);
        if (o === void 0) return 0;
        let a = e[o], c = r[o];
        if (!a || !c) return 1 / 0;
        let f = (n || i()) - c;
        return a - f;
      }, this.#p = (s) => {
        let o = r[s], a = e[s];
        return !!a && !!o && (n || i()) - o > a;
      };
    }
    #T = () => {
    };
    #I = () => {
    };
    #q = () => {
    };
    #p = () => false;
    #F() {
      let e = new bn(this.#u);
      this.#b = 0, this.#m = e, this.#P = (r) => {
        this.#b -= e[r], e[r] = 0;
      }, this.#L = (r, n, i, s) => {
        if (this.#t(n)) return 0;
        if (!lr(i)) if (s) {
          if (typeof s != "function") throw new TypeError("sizeCalculation must be a function");
          if (i = s(n, r), !lr(i)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
        } else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
        return i;
      }, this.#C = (r, n, i) => {
        if (e[r] = n, this.#f) {
          let s = this.#f - e[r];
          for (; this.#b > s; ) this.#B(true);
        }
        this.#b += e[r], i && (i.entrySize = n, i.totalCalculatedSize = this.#b);
      };
    }
    #P = (e) => {
    };
    #C = (e, r, n) => {
    };
    #L = (e, r, n, i) => {
      if (n || i) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
      return 0;
    };
    *#S({ allowStale: e = this.allowStale } = {}) {
      if (this.#i) for (let r = this.#o; !(!this.#U(r) || ((e || !this.#p(r)) && (yield r), r === this.#a)); ) r = this.#h[r];
    }
    *#E({ allowStale: e = this.allowStale } = {}) {
      if (this.#i) for (let r = this.#a; !(!this.#U(r) || ((e || !this.#p(r)) && (yield r), r === this.#o)); ) r = this.#l[r];
    }
    #U(e) {
      return e !== void 0 && this.#n.get(this.#r[e]) === e;
    }
    *entries() {
      for (let e of this.#S()) this.#e[e] !== void 0 && this.#r[e] !== void 0 && !this.#t(this.#e[e]) && (yield [this.#r[e], this.#e[e]]);
    }
    *rentries() {
      for (let e of this.#E()) this.#e[e] !== void 0 && this.#r[e] !== void 0 && !this.#t(this.#e[e]) && (yield [this.#r[e], this.#e[e]]);
    }
    *keys() {
      for (let e of this.#S()) {
        let r = this.#r[e];
        r !== void 0 && !this.#t(this.#e[e]) && (yield r);
      }
    }
    *rkeys() {
      for (let e of this.#E()) {
        let r = this.#r[e];
        r !== void 0 && !this.#t(this.#e[e]) && (yield r);
      }
    }
    *values() {
      for (let e of this.#S()) this.#e[e] !== void 0 && !this.#t(this.#e[e]) && (yield this.#e[e]);
    }
    *rvalues() {
      for (let e of this.#E()) this.#e[e] !== void 0 && !this.#t(this.#e[e]) && (yield this.#e[e]);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    [Symbol.toStringTag] = "LRUCache";
    find(e, r = {}) {
      for (let n of this.#S()) {
        let i = this.#e[n], s = this.#t(i) ? i.__staleWhileFetching : i;
        if (s !== void 0 && e(s, this.#r[n], this)) return this.get(this.#r[n], r);
      }
    }
    forEach(e, r = this) {
      for (let n of this.#S()) {
        let i = this.#e[n], s = this.#t(i) ? i.__staleWhileFetching : i;
        s !== void 0 && e.call(r, s, this.#r[n], this);
      }
    }
    rforEach(e, r = this) {
      for (let n of this.#E()) {
        let i = this.#e[n], s = this.#t(i) ? i.__staleWhileFetching : i;
        s !== void 0 && e.call(r, s, this.#r[n], this);
      }
    }
    purgeStale() {
      let e = false;
      for (let r of this.#E({ allowStale: true })) this.#p(r) && (this.#A(this.#r[r], "expire"), e = true);
      return e;
    }
    info(e) {
      let r = this.#n.get(e);
      if (r === void 0) return;
      let n = this.#e[r], i = this.#t(n) ? n.__staleWhileFetching : n;
      if (i === void 0) return;
      let s = { value: i };
      if (this.#d && this.#_) {
        let o = this.#d[r], a = this.#_[r];
        if (o && a) {
          let c = o - (gn.now() - a);
          s.ttl = c, s.start = Date.now();
        }
      }
      return this.#m && (s.size = this.#m[r]), s;
    }
    dump() {
      let e = [];
      for (let r of this.#S({ allowStale: true })) {
        let n = this.#r[r], i = this.#e[r], s = this.#t(i) ? i.__staleWhileFetching : i;
        if (s === void 0 || n === void 0) continue;
        let o = { value: s };
        if (this.#d && this.#_) {
          o.ttl = this.#d[r];
          let a = gn.now() - this.#_[r];
          o.start = Math.floor(Date.now() - a);
        }
        this.#m && (o.size = this.#m[r]), e.unshift([n, o]);
      }
      return e;
    }
    load(e) {
      this.clear();
      for (let [r, n] of e) {
        if (n.start) {
          let i = Date.now() - n.start;
          n.start = gn.now() - i;
        }
        this.set(r, n.value, n);
      }
    }
    set(e, r, n = {}) {
      if (r === void 0) return this.delete(e), this;
      let { ttl: i = this.ttl, start: s, noDisposeOnSet: o = this.noDisposeOnSet, sizeCalculation: a = this.sizeCalculation, status: c } = n, { noUpdateTTL: f = this.noUpdateTTL } = n, h = this.#L(e, r, n.size || 0, a);
      if (this.maxEntrySize && h > this.maxEntrySize) return c && (c.set = "miss", c.maxEntrySizeExceeded = true), this.#A(e, "set"), this;
      let d = this.#i === 0 ? void 0 : this.#n.get(e);
      if (d === void 0) d = this.#i === 0 ? this.#o : this.#w.length !== 0 ? this.#w.pop() : this.#i === this.#u ? this.#B(false) : this.#i, this.#r[d] = e, this.#e[d] = r, this.#n.set(e, d), this.#l[this.#o] = d, this.#h[d] = this.#o, this.#o = d, this.#i++, this.#C(d, h, c), c && (c.set = "add"), f = false;
      else {
        this.#O(d);
        let m = this.#e[d];
        if (r !== m) {
          if (this.#x && this.#t(m)) {
            m.__abortController.abort(new Error("replaced"));
            let { __staleWhileFetching: g } = m;
            g !== void 0 && !o && (this.#v && this.#y?.(g, e, "set"), this.#c && this.#s?.push([g, e, "set"]));
          } else o || (this.#v && this.#y?.(m, e, "set"), this.#c && this.#s?.push([m, e, "set"]));
          if (this.#P(d), this.#C(d, h, c), this.#e[d] = r, c) {
            c.set = "replace";
            let g = m && this.#t(m) ? m.__staleWhileFetching : m;
            g !== void 0 && (c.oldValue = g);
          }
        } else c && (c.set = "update");
      }
      if (i !== 0 && !this.#d && this.#N(), this.#d && (f || this.#q(d, i, s), c && this.#I(c, d)), !o && this.#c && this.#s) {
        let m = this.#s, g;
        for (; g = m?.shift(); ) this.#g?.(...g);
      }
      return this;
    }
    pop() {
      try {
        for (; this.#i; ) {
          let e = this.#e[this.#a];
          if (this.#B(true), this.#t(e)) {
            if (e.__staleWhileFetching) return e.__staleWhileFetching;
          } else if (e !== void 0) return e;
        }
      } finally {
        if (this.#c && this.#s) {
          let e = this.#s, r;
          for (; r = e?.shift(); ) this.#g?.(...r);
        }
      }
    }
    #B(e) {
      let r = this.#a, n = this.#r[r], i = this.#e[r];
      return this.#x && this.#t(i) ? i.__abortController.abort(new Error("evicted")) : (this.#v || this.#c) && (this.#v && this.#y?.(i, n, "evict"), this.#c && this.#s?.push([i, n, "evict"])), this.#P(r), e && (this.#r[r] = void 0, this.#e[r] = void 0, this.#w.push(r)), this.#i === 1 ? (this.#a = this.#o = 0, this.#w.length = 0) : this.#a = this.#l[r], this.#n.delete(n), this.#i--, r;
    }
    has(e, r = {}) {
      let { updateAgeOnHas: n = this.updateAgeOnHas, status: i } = r, s = this.#n.get(e);
      if (s !== void 0) {
        let o = this.#e[s];
        if (this.#t(o) && o.__staleWhileFetching === void 0) return false;
        if (this.#p(s)) i && (i.has = "stale", this.#I(i, s));
        else return n && this.#T(s), i && (i.has = "hit", this.#I(i, s)), true;
      } else i && (i.has = "miss");
      return false;
    }
    peek(e, r = {}) {
      let { allowStale: n = this.allowStale } = r, i = this.#n.get(e);
      if (i === void 0 || !n && this.#p(i)) return;
      let s = this.#e[i];
      return this.#t(s) ? s.__staleWhileFetching : s;
    }
    #M(e, r, n, i) {
      let s = r === void 0 ? void 0 : this.#e[r];
      if (this.#t(s)) return s;
      let o = new mo(), { signal: a } = n;
      a?.addEventListener("abort", () => o.abort(a.reason), { signal: o.signal });
      let c = { signal: o.signal, options: n, context: i }, f = (S, b = false) => {
        let { aborted: w } = o.signal, _ = n.ignoreFetchAbort && S !== void 0;
        if (n.status && (w && !b ? (n.status.fetchAborted = true, n.status.fetchError = o.signal.reason, _ && (n.status.fetchAbortIgnored = true)) : n.status.fetchResolved = true), w && !_ && !b) return d(o.signal.reason);
        let R = g;
        return this.#e[r] === g && (S === void 0 ? R.__staleWhileFetching ? this.#e[r] = R.__staleWhileFetching : this.#A(e, "fetch") : (n.status && (n.status.fetchUpdated = true), this.set(e, S, c.options))), S;
      }, h = (S) => (n.status && (n.status.fetchRejected = true, n.status.fetchError = S), d(S)), d = (S) => {
        let { aborted: b } = o.signal, w = b && n.allowStaleOnFetchAbort, _ = w || n.allowStaleOnFetchRejection, R = _ || n.noDeleteOnFetchRejection, T = g;
        if (this.#e[r] === g && (!R || T.__staleWhileFetching === void 0 ? this.#A(e, "fetch") : w || (this.#e[r] = T.__staleWhileFetching)), _) return n.status && T.__staleWhileFetching !== void 0 && (n.status.returnedStale = true), T.__staleWhileFetching;
        if (T.__returned === T) throw S;
      }, m = (S, b) => {
        let w = this.#R?.(e, s, c);
        w && w instanceof Promise && w.then((_) => S(_ === void 0 ? void 0 : _), b), o.signal.addEventListener("abort", () => {
          (!n.ignoreFetchAbort || n.allowStaleOnFetchAbort) && (S(void 0), n.allowStaleOnFetchAbort && (S = (_) => f(_, true)));
        });
      };
      n.status && (n.status.fetchDispatched = true);
      let g = new Promise(m).then(f, h), P = Object.assign(g, { __abortController: o, __staleWhileFetching: s, __returned: void 0 });
      return r === void 0 ? (this.set(e, P, __spreadProps(__spreadValues({}, c.options), { status: void 0 })), r = this.#n.get(e)) : this.#e[r] = P, P;
    }
    #t(e) {
      if (!this.#x) return false;
      let r = e;
      return !!r && r instanceof Promise && r.hasOwnProperty("__staleWhileFetching") && r.__abortController instanceof mo;
    }
    async fetch(e, r = {}) {
      let { allowStale: n = this.allowStale, updateAgeOnGet: i = this.updateAgeOnGet, noDeleteOnStaleGet: s = this.noDeleteOnStaleGet, ttl: o = this.ttl, noDisposeOnSet: a = this.noDisposeOnSet, size: c = 0, sizeCalculation: f = this.sizeCalculation, noUpdateTTL: h = this.noUpdateTTL, noDeleteOnFetchRejection: d = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: m = this.allowStaleOnFetchRejection, ignoreFetchAbort: g = this.ignoreFetchAbort, allowStaleOnFetchAbort: P = this.allowStaleOnFetchAbort, context: S, forceRefresh: b = false, status: w, signal: _ } = r;
      if (!this.#x) return w && (w.fetch = "get"), this.get(e, { allowStale: n, updateAgeOnGet: i, noDeleteOnStaleGet: s, status: w });
      let R = { allowStale: n, updateAgeOnGet: i, noDeleteOnStaleGet: s, ttl: o, noDisposeOnSet: a, size: c, sizeCalculation: f, noUpdateTTL: h, noDeleteOnFetchRejection: d, allowStaleOnFetchRejection: m, allowStaleOnFetchAbort: P, ignoreFetchAbort: g, status: w, signal: _ }, T = this.#n.get(e);
      if (T === void 0) {
        w && (w.fetch = "miss");
        let y = this.#M(e, T, R, S);
        return y.__returned = y;
      } else {
        let y = this.#e[T];
        if (this.#t(y)) {
          let U = n && y.__staleWhileFetching !== void 0;
          return w && (w.fetch = "inflight", U && (w.returnedStale = true)), U ? y.__staleWhileFetching : y.__returned = y;
        }
        let O = this.#p(T);
        if (!b && !O) return w && (w.fetch = "hit"), this.#O(T), i && this.#T(T), w && this.#I(w, T), y;
        let v = this.#M(e, T, R, S), F = v.__staleWhileFetching !== void 0 && n;
        return w && (w.fetch = O ? "stale" : "refresh", F && O && (w.returnedStale = true)), F ? v.__staleWhileFetching : v.__returned = v;
      }
    }
    async forceFetch(e, r = {}) {
      let n = await this.fetch(e, r);
      if (n === void 0) throw new Error("fetch() returned undefined");
      return n;
    }
    memo(e, r = {}) {
      let n = this.#k;
      if (!n) throw new Error("no memoMethod provided to constructor");
      let _a = r, { context: i, forceRefresh: s } = _a, o = __objRest(_a, ["context", "forceRefresh"]), a = this.get(e, o);
      if (!s && a !== void 0) return a;
      let c = n(e, a, { options: o, context: i });
      return this.set(e, c, o), c;
    }
    get(e, r = {}) {
      let { allowStale: n = this.allowStale, updateAgeOnGet: i = this.updateAgeOnGet, noDeleteOnStaleGet: s = this.noDeleteOnStaleGet, status: o } = r, a = this.#n.get(e);
      if (a !== void 0) {
        let c = this.#e[a], f = this.#t(c);
        return o && this.#I(o, a), this.#p(a) ? (o && (o.get = "stale"), f ? (o && n && c.__staleWhileFetching !== void 0 && (o.returnedStale = true), n ? c.__staleWhileFetching : void 0) : (s || this.#A(e, "expire"), o && n && (o.returnedStale = true), n ? c : void 0)) : (o && (o.get = "hit"), f ? c.__staleWhileFetching : (this.#O(a), i && this.#T(a), c));
      } else o && (o.get = "miss");
    }
    #D(e, r) {
      this.#h[r] = e, this.#l[e] = r;
    }
    #O(e) {
      e !== this.#o && (e === this.#a ? this.#a = this.#l[e] : this.#D(this.#h[e], this.#l[e]), this.#D(this.#o, e), this.#o = e);
    }
    delete(e) {
      return this.#A(e, "delete");
    }
    #A(e, r) {
      let n = false;
      if (this.#i !== 0) {
        let i = this.#n.get(e);
        if (i !== void 0) if (n = true, this.#i === 1) this.#j(r);
        else {
          this.#P(i);
          let s = this.#e[i];
          if (this.#t(s) ? s.__abortController.abort(new Error("deleted")) : (this.#v || this.#c) && (this.#v && this.#y?.(s, e, r), this.#c && this.#s?.push([s, e, r])), this.#n.delete(e), this.#r[i] = void 0, this.#e[i] = void 0, i === this.#o) this.#o = this.#h[i];
          else if (i === this.#a) this.#a = this.#l[i];
          else {
            let o = this.#h[i];
            this.#l[o] = this.#l[i];
            let a = this.#l[i];
            this.#h[a] = this.#h[i];
          }
          this.#i--, this.#w.push(i);
        }
      }
      if (this.#c && this.#s?.length) {
        let i = this.#s, s;
        for (; s = i?.shift(); ) this.#g?.(...s);
      }
      return n;
    }
    clear() {
      return this.#j("delete");
    }
    #j(e) {
      for (let r of this.#E({ allowStale: true })) {
        let n = this.#e[r];
        if (this.#t(n)) n.__abortController.abort(new Error("deleted"));
        else {
          let i = this.#r[r];
          this.#v && this.#y?.(n, i, e), this.#c && this.#s?.push([n, i, e]);
        }
      }
      if (this.#n.clear(), this.#e.fill(void 0), this.#r.fill(void 0), this.#d && this.#_ && (this.#d.fill(0), this.#_.fill(0)), this.#m && this.#m.fill(0), this.#a = 0, this.#o = 0, this.#w.length = 0, this.#b = 0, this.#i = 0, this.#c && this.#s) {
        let r = this.#s, n;
        for (; n = r?.shift(); ) this.#g?.(...n);
      }
    }
  };
  _o.LRUCache = Va;
});
var It = j((cr) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(cr, "t", { value: true });
  cr.ContainerIterator = cr.Container = cr.Base = void 0;
  var Ga = class {
    constructor(e = 0) {
      this.iteratorType = e;
    }
    equals(e) {
      return this.o === e.o;
    }
  };
  cr.ContainerIterator = Ga;
  var vo = class {
    constructor() {
      this.i = 0;
    }
    get length() {
      return this.i;
    }
    size() {
      return this.i;
    }
    empty() {
      return this.i === 0;
    }
  };
  cr.Base = vo;
  var za = class extends vo {
  };
  cr.Container = za;
});
var Ey = j((So) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(So, "t", { value: true });
  So.default = void 0;
  var qE = It(), Ka = class extends qE.Base {
    constructor(e = []) {
      super(), this.S = [];
      let r = this;
      e.forEach((function(n) {
        r.push(n);
      }));
    }
    clear() {
      this.i = 0, this.S = [];
    }
    push(e) {
      return this.S.push(e), this.i += 1, this.i;
    }
    pop() {
      if (this.i !== 0) return this.i -= 1, this.S.pop();
    }
    top() {
      return this.S[this.i - 1];
    }
  }, LE = Ka;
  So.default = LE;
});
var Ay = j((Eo) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Eo, "t", { value: true });
  Eo.default = void 0;
  var UE = It(), Qa = class extends UE.Base {
    constructor(e = []) {
      super(), this.j = 0, this.q = [];
      let r = this;
      e.forEach((function(n) {
        r.push(n);
      }));
    }
    clear() {
      this.q = [], this.i = this.j = 0;
    }
    push(e) {
      let r = this.q.length;
      if (this.j / r > 0.5 && this.j + this.i >= r && r > 4096) {
        let n = this.i;
        for (let i = 0; i < n; ++i) this.q[i] = this.q[this.j + i];
        this.j = 0, this.q[this.i] = e;
      } else this.q[this.j + this.i] = e;
      return ++this.i;
    }
    pop() {
      if (this.i === 0) return;
      let e = this.q[this.j++];
      return this.i -= 1, e;
    }
    front() {
      if (this.i !== 0) return this.q[this.j];
    }
  }, DE = Qa;
  Eo.default = DE;
});
var Iy = j((Ao) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Ao, "t", { value: true });
  Ao.default = void 0;
  var jE = It(), Ya = class extends jE.Base {
    constructor(e = [], r = function(i, s) {
      return i > s ? -1 : i < s ? 1 : 0;
    }, n = true) {
      if (super(), this.v = r, Array.isArray(e)) this.C = n ? [...e] : e;
      else {
        this.C = [];
        let s = this;
        e.forEach((function(o) {
          s.C.push(o);
        }));
      }
      this.i = this.C.length;
      let i = this.i >> 1;
      for (let s = this.i - 1 >> 1; s >= 0; --s) this.k(s, i);
    }
    m(e) {
      let r = this.C[e];
      for (; e > 0; ) {
        let n = e - 1 >> 1, i = this.C[n];
        if (this.v(i, r) <= 0) break;
        this.C[e] = i, e = n;
      }
      this.C[e] = r;
    }
    k(e, r) {
      let n = this.C[e];
      for (; e < r; ) {
        let i = e << 1 | 1, s = i + 1, o = this.C[i];
        if (s < this.i && this.v(o, this.C[s]) > 0 && (i = s, o = this.C[s]), this.v(o, n) >= 0) break;
        this.C[e] = o, e = i;
      }
      this.C[e] = n;
    }
    clear() {
      this.i = 0, this.C.length = 0;
    }
    push(e) {
      this.C.push(e), this.m(this.i), this.i += 1;
    }
    pop() {
      if (this.i === 0) return;
      let e = this.C[0], r = this.C.pop();
      return this.i -= 1, this.i && (this.C[0] = r, this.k(0, this.i >> 1)), e;
    }
    top() {
      return this.C[0];
    }
    find(e) {
      return this.C.indexOf(e) >= 0;
    }
    remove(e) {
      let r = this.C.indexOf(e);
      return r < 0 ? false : (r === 0 ? this.pop() : r === this.i - 1 ? (this.C.pop(), this.i -= 1) : (this.C.splice(r, 1, this.C.pop()), this.i -= 1, this.m(r), this.k(r, this.i >> 1)), true);
    }
    updateItem(e) {
      let r = this.C.indexOf(e);
      return r < 0 ? false : (this.m(r), this.k(r, this.i >> 1), true);
    }
    toArray() {
      return [...this.C];
    }
  }, FE = Ya;
  Ao.default = FE;
});
var xo = j((Io) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Io, "t", { value: true });
  Io.default = void 0;
  var WE = It(), Ja = class extends WE.Container {
  }, $E = Ja;
  Io.default = $E;
});
var xt = j((Xa) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Xa, "t", { value: true });
  Xa.throwIteratorAccessError = HE;
  function HE() {
    throw new RangeError("Iterator access denied!");
  }
});
var eu = j((Po) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Po, "t", { value: true });
  Po.RandomIterator = void 0;
  var VE = It(), To = xt(), Za = class extends VE.ContainerIterator {
    constructor(e, r) {
      super(r), this.o = e, this.iteratorType === 0 ? (this.pre = function() {
        return this.o === 0 && (0, To.throwIteratorAccessError)(), this.o -= 1, this;
      }, this.next = function() {
        return this.o === this.container.size() && (0, To.throwIteratorAccessError)(), this.o += 1, this;
      }) : (this.pre = function() {
        return this.o === this.container.size() - 1 && (0, To.throwIteratorAccessError)(), this.o += 1, this;
      }, this.next = function() {
        return this.o === -1 && (0, To.throwIteratorAccessError)(), this.o -= 1, this;
      });
    }
    get pointer() {
      return this.container.getElementByPos(this.o);
    }
    set pointer(e) {
      this.container.setElementByPos(this.o, e);
    }
  };
  Po.RandomIterator = Za;
});
var xy = j((Oo) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Oo, "t", { value: true });
  Oo.default = void 0;
  var GE = KE(xo()), zE = eu();
  function KE(t) {
    return t && t.t ? t : { default: t };
  }
  var Nr = class t extends zE.RandomIterator {
    constructor(e, r, n) {
      super(e, n), this.container = r;
    }
    copy() {
      return new t(this.o, this.container, this.iteratorType);
    }
  }, tu = class extends GE.default {
    constructor(e = [], r = true) {
      if (super(), Array.isArray(e)) this.J = r ? [...e] : e, this.i = e.length;
      else {
        this.J = [];
        let n = this;
        e.forEach((function(i) {
          n.pushBack(i);
        }));
      }
    }
    clear() {
      this.i = 0, this.J.length = 0;
    }
    begin() {
      return new Nr(0, this);
    }
    end() {
      return new Nr(this.i, this);
    }
    rBegin() {
      return new Nr(this.i - 1, this, 1);
    }
    rEnd() {
      return new Nr(-1, this, 1);
    }
    front() {
      return this.J[0];
    }
    back() {
      return this.J[this.i - 1];
    }
    getElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      return this.J[e];
    }
    eraseElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      return this.J.splice(e, 1), this.i -= 1, this.i;
    }
    eraseElementByValue(e) {
      let r = 0;
      for (let n = 0; n < this.i; ++n) this.J[n] !== e && (this.J[r++] = this.J[n]);
      return this.i = this.J.length = r, this.i;
    }
    eraseElementByIterator(e) {
      let r = e.o;
      return e = e.next(), this.eraseElementByPos(r), e;
    }
    pushBack(e) {
      return this.J.push(e), this.i += 1, this.i;
    }
    popBack() {
      if (this.i !== 0) return this.i -= 1, this.J.pop();
    }
    setElementByPos(e, r) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      this.J[e] = r;
    }
    insert(e, r, n = 1) {
      if (e < 0 || e > this.i) throw new RangeError();
      return this.J.splice(e, 0, ...new Array(n).fill(r)), this.i += n, this.i;
    }
    find(e) {
      for (let r = 0; r < this.i; ++r) if (this.J[r] === e) return new Nr(r, this);
      return this.end();
    }
    reverse() {
      this.J.reverse();
    }
    unique() {
      let e = 1;
      for (let r = 1; r < this.i; ++r) this.J[r] !== this.J[r - 1] && (this.J[e++] = this.J[r]);
      return this.i = this.J.length = e, this.i;
    }
    sort(e) {
      this.J.sort(e);
    }
    forEach(e) {
      for (let r = 0; r < this.i; ++r) e(this.J[r], r, this);
    }
    [Symbol.iterator]() {
      return function* () {
        yield* this.J;
      }.bind(this)();
    }
  }, QE = tu;
  Oo.default = QE;
});
var Ty = j((Ro) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Ro, "t", { value: true });
  Ro.default = void 0;
  var YE = XE(xo()), JE = It(), qr = xt();
  function XE(t) {
    return t && t.t ? t : { default: t };
  }
  var Lr = class t extends JE.ContainerIterator {
    constructor(e, r, n, i) {
      super(i), this.o = e, this.h = r, this.container = n, this.iteratorType === 0 ? (this.pre = function() {
        return this.o.L === this.h && (0, qr.throwIteratorAccessError)(), this.o = this.o.L, this;
      }, this.next = function() {
        return this.o === this.h && (0, qr.throwIteratorAccessError)(), this.o = this.o.B, this;
      }) : (this.pre = function() {
        return this.o.B === this.h && (0, qr.throwIteratorAccessError)(), this.o = this.o.B, this;
      }, this.next = function() {
        return this.o === this.h && (0, qr.throwIteratorAccessError)(), this.o = this.o.L, this;
      });
    }
    get pointer() {
      return this.o === this.h && (0, qr.throwIteratorAccessError)(), this.o.l;
    }
    set pointer(e) {
      this.o === this.h && (0, qr.throwIteratorAccessError)(), this.o.l = e;
    }
    copy() {
      return new t(this.o, this.h, this.container, this.iteratorType);
    }
  }, ru = class extends YE.default {
    constructor(e = []) {
      super(), this.h = {}, this.p = this._ = this.h.L = this.h.B = this.h;
      let r = this;
      e.forEach((function(n) {
        r.pushBack(n);
      }));
    }
    V(e) {
      let { L: r, B: n } = e;
      r.B = n, n.L = r, e === this.p && (this.p = n), e === this._ && (this._ = r), this.i -= 1;
    }
    G(e, r) {
      let n = r.B, i = { l: e, L: r, B: n };
      r.B = i, n.L = i, r === this.h && (this.p = i), n === this.h && (this._ = i), this.i += 1;
    }
    clear() {
      this.i = 0, this.p = this._ = this.h.L = this.h.B = this.h;
    }
    begin() {
      return new Lr(this.p, this.h, this);
    }
    end() {
      return new Lr(this.h, this.h, this);
    }
    rBegin() {
      return new Lr(this._, this.h, this, 1);
    }
    rEnd() {
      return new Lr(this.h, this.h, this, 1);
    }
    front() {
      return this.p.l;
    }
    back() {
      return this._.l;
    }
    getElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let r = this.p;
      for (; e--; ) r = r.B;
      return r.l;
    }
    eraseElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let r = this.p;
      for (; e--; ) r = r.B;
      return this.V(r), this.i;
    }
    eraseElementByValue(e) {
      let r = this.p;
      for (; r !== this.h; ) r.l === e && this.V(r), r = r.B;
      return this.i;
    }
    eraseElementByIterator(e) {
      let r = e.o;
      return r === this.h && (0, qr.throwIteratorAccessError)(), e = e.next(), this.V(r), e;
    }
    pushBack(e) {
      return this.G(e, this._), this.i;
    }
    popBack() {
      if (this.i === 0) return;
      let e = this._.l;
      return this.V(this._), e;
    }
    pushFront(e) {
      return this.G(e, this.h), this.i;
    }
    popFront() {
      if (this.i === 0) return;
      let e = this.p.l;
      return this.V(this.p), e;
    }
    setElementByPos(e, r) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let n = this.p;
      for (; e--; ) n = n.B;
      n.l = r;
    }
    insert(e, r, n = 1) {
      if (e < 0 || e > this.i) throw new RangeError();
      if (n <= 0) return this.i;
      if (e === 0) for (; n--; ) this.pushFront(r);
      else if (e === this.i) for (; n--; ) this.pushBack(r);
      else {
        let i = this.p;
        for (let o = 1; o < e; ++o) i = i.B;
        let s = i.B;
        for (this.i += n; n--; ) i.B = { l: r, L: i }, i.B.L = i, i = i.B;
        i.B = s, s.L = i;
      }
      return this.i;
    }
    find(e) {
      let r = this.p;
      for (; r !== this.h; ) {
        if (r.l === e) return new Lr(r, this.h, this);
        r = r.B;
      }
      return this.end();
    }
    reverse() {
      if (this.i <= 1) return;
      let e = this.p, r = this._, n = 0;
      for (; n << 1 < this.i; ) {
        let i = e.l;
        e.l = r.l, r.l = i, e = e.B, r = r.L, n += 1;
      }
    }
    unique() {
      if (this.i <= 1) return this.i;
      let e = this.p;
      for (; e !== this.h; ) {
        let r = e;
        for (; r.B !== this.h && r.l === r.B.l; ) r = r.B, this.i -= 1;
        e.B = r.B, e.B.L = e, e = e.B;
      }
      return this.i;
    }
    sort(e) {
      if (this.i <= 1) return;
      let r = [];
      this.forEach((function(i) {
        r.push(i);
      })), r.sort(e);
      let n = this.p;
      r.forEach((function(i) {
        n.l = i, n = n.B;
      }));
    }
    merge(e) {
      let r = this;
      if (this.i === 0) e.forEach((function(n) {
        r.pushBack(n);
      }));
      else {
        let n = this.p;
        e.forEach((function(i) {
          for (; n !== r.h && n.l <= i; ) n = n.B;
          r.G(i, n.L);
        }));
      }
      return this.i;
    }
    forEach(e) {
      let r = this.p, n = 0;
      for (; r !== this.h; ) e(r.l, n++, this), r = r.B;
    }
    [Symbol.iterator]() {
      return function* () {
        if (this.i === 0) return;
        let e = this.p;
        for (; e !== this.h; ) yield e.l, e = e.B;
      }.bind(this)();
    }
  }, ZE = ru;
  Ro.default = ZE;
});
var Py = j((ko) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(ko, "t", { value: true });
  ko.default = void 0;
  var e1 = r1(xo()), t1 = eu();
  function r1(t) {
    return t && t.t ? t : { default: t };
  }
  var Ur = class t extends t1.RandomIterator {
    constructor(e, r, n) {
      super(e, n), this.container = r;
    }
    copy() {
      return new t(this.o, this.container, this.iteratorType);
    }
  }, nu = class extends e1.default {
    constructor(e = [], r = 4096) {
      super(), this.j = 0, this.D = 0, this.R = 0, this.N = 0, this.P = 0, this.A = [];
      let n = (() => {
        if (typeof e.length == "number") return e.length;
        if (typeof e.size == "number") return e.size;
        if (typeof e.size == "function") return e.size();
        throw new TypeError("Cannot get the length or size of the container");
      })();
      this.F = r, this.P = Math.max(Math.ceil(n / this.F), 1);
      for (let o = 0; o < this.P; ++o) this.A.push(new Array(this.F));
      let i = Math.ceil(n / this.F);
      this.j = this.R = (this.P >> 1) - (i >> 1), this.D = this.N = this.F - n % this.F >> 1;
      let s = this;
      e.forEach((function(o) {
        s.pushBack(o);
      }));
    }
    T() {
      let e = [], r = Math.max(this.P >> 1, 1);
      for (let n = 0; n < r; ++n) e[n] = new Array(this.F);
      for (let n = this.j; n < this.P; ++n) e[e.length] = this.A[n];
      for (let n = 0; n < this.R; ++n) e[e.length] = this.A[n];
      e[e.length] = [...this.A[this.R]], this.j = r, this.R = e.length - 1;
      for (let n = 0; n < r; ++n) e[e.length] = new Array(this.F);
      this.A = e, this.P = e.length;
    }
    O(e) {
      let r = this.D + e + 1, n = r % this.F, i = n - 1, s = this.j + (r - n) / this.F;
      return n === 0 && (s -= 1), s %= this.P, i < 0 && (i += this.F), { curNodeBucketIndex: s, curNodePointerIndex: i };
    }
    clear() {
      this.A = [new Array(this.F)], this.P = 1, this.j = this.R = this.i = 0, this.D = this.N = this.F >> 1;
    }
    begin() {
      return new Ur(0, this);
    }
    end() {
      return new Ur(this.i, this);
    }
    rBegin() {
      return new Ur(this.i - 1, this, 1);
    }
    rEnd() {
      return new Ur(-1, this, 1);
    }
    front() {
      if (this.i !== 0) return this.A[this.j][this.D];
    }
    back() {
      if (this.i !== 0) return this.A[this.R][this.N];
    }
    pushBack(e) {
      return this.i && (this.N < this.F - 1 ? this.N += 1 : this.R < this.P - 1 ? (this.R += 1, this.N = 0) : (this.R = 0, this.N = 0), this.R === this.j && this.N === this.D && this.T()), this.i += 1, this.A[this.R][this.N] = e, this.i;
    }
    popBack() {
      if (this.i === 0) return;
      let e = this.A[this.R][this.N];
      return this.i !== 1 && (this.N > 0 ? this.N -= 1 : this.R > 0 ? (this.R -= 1, this.N = this.F - 1) : (this.R = this.P - 1, this.N = this.F - 1)), this.i -= 1, e;
    }
    pushFront(e) {
      return this.i && (this.D > 0 ? this.D -= 1 : this.j > 0 ? (this.j -= 1, this.D = this.F - 1) : (this.j = this.P - 1, this.D = this.F - 1), this.j === this.R && this.D === this.N && this.T()), this.i += 1, this.A[this.j][this.D] = e, this.i;
    }
    popFront() {
      if (this.i === 0) return;
      let e = this.A[this.j][this.D];
      return this.i !== 1 && (this.D < this.F - 1 ? this.D += 1 : this.j < this.P - 1 ? (this.j += 1, this.D = 0) : (this.j = 0, this.D = 0)), this.i -= 1, e;
    }
    getElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let { curNodeBucketIndex: r, curNodePointerIndex: n } = this.O(e);
      return this.A[r][n];
    }
    setElementByPos(e, r) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let { curNodeBucketIndex: n, curNodePointerIndex: i } = this.O(e);
      this.A[n][i] = r;
    }
    insert(e, r, n = 1) {
      if (e < 0 || e > this.i) throw new RangeError();
      if (e === 0) for (; n--; ) this.pushFront(r);
      else if (e === this.i) for (; n--; ) this.pushBack(r);
      else {
        let i = [];
        for (let s = e; s < this.i; ++s) i.push(this.getElementByPos(s));
        this.cut(e - 1);
        for (let s = 0; s < n; ++s) this.pushBack(r);
        for (let s = 0; s < i.length; ++s) this.pushBack(i[s]);
      }
      return this.i;
    }
    cut(e) {
      if (e < 0) return this.clear(), 0;
      let { curNodeBucketIndex: r, curNodePointerIndex: n } = this.O(e);
      return this.R = r, this.N = n, this.i = e + 1, this.i;
    }
    eraseElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      if (e === 0) this.popFront();
      else if (e === this.i - 1) this.popBack();
      else {
        let r = [];
        for (let i = e + 1; i < this.i; ++i) r.push(this.getElementByPos(i));
        this.cut(e), this.popBack();
        let n = this;
        r.forEach((function(i) {
          n.pushBack(i);
        }));
      }
      return this.i;
    }
    eraseElementByValue(e) {
      if (this.i === 0) return 0;
      let r = [];
      for (let i = 0; i < this.i; ++i) {
        let s = this.getElementByPos(i);
        s !== e && r.push(s);
      }
      let n = r.length;
      for (let i = 0; i < n; ++i) this.setElementByPos(i, r[i]);
      return this.cut(n - 1);
    }
    eraseElementByIterator(e) {
      let r = e.o;
      return this.eraseElementByPos(r), e = e.next(), e;
    }
    find(e) {
      for (let r = 0; r < this.i; ++r) if (this.getElementByPos(r) === e) return new Ur(r, this);
      return this.end();
    }
    reverse() {
      let e = 0, r = this.i - 1;
      for (; e < r; ) {
        let n = this.getElementByPos(e);
        this.setElementByPos(e, this.getElementByPos(r)), this.setElementByPos(r, n), e += 1, r -= 1;
      }
    }
    unique() {
      if (this.i <= 1) return this.i;
      let e = 1, r = this.getElementByPos(0);
      for (let n = 1; n < this.i; ++n) {
        let i = this.getElementByPos(n);
        i !== r && (r = i, this.setElementByPos(e++, i));
      }
      for (; this.i > e; ) this.popBack();
      return this.i;
    }
    sort(e) {
      let r = [];
      for (let n = 0; n < this.i; ++n) r.push(this.getElementByPos(n));
      r.sort(e);
      for (let n = 0; n < this.i; ++n) this.setElementByPos(n, r[n]);
    }
    shrinkToFit() {
      if (this.i === 0) return;
      let e = [];
      this.forEach((function(r) {
        e.push(r);
      })), this.P = Math.max(Math.ceil(this.i / this.F), 1), this.i = this.j = this.R = this.D = this.N = 0, this.A = [];
      for (let r = 0; r < this.P; ++r) this.A.push(new Array(this.F));
      for (let r = 0; r < e.length; ++r) this.pushBack(e[r]);
    }
    forEach(e) {
      for (let r = 0; r < this.i; ++r) e(this.getElementByPos(r), r, this);
    }
    [Symbol.iterator]() {
      return function* () {
        for (let e = 0; e < this.i; ++e) yield this.getElementByPos(e);
      }.bind(this)();
    }
  }, n1 = nu;
  ko.default = n1;
});
var Oy = j((wn) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(wn, "t", { value: true });
  wn.TreeNodeEnableIndex = wn.TreeNode = void 0;
  var Co = class {
    constructor(e, r) {
      this.ee = 1, this.u = void 0, this.l = void 0, this.U = void 0, this.W = void 0, this.tt = void 0, this.u = e, this.l = r;
    }
    L() {
      let e = this;
      if (e.ee === 1 && e.tt.tt === e) e = e.W;
      else if (e.U) for (e = e.U; e.W; ) e = e.W;
      else {
        let r = e.tt;
        for (; r.U === e; ) e = r, r = e.tt;
        e = r;
      }
      return e;
    }
    B() {
      let e = this;
      if (e.W) {
        for (e = e.W; e.U; ) e = e.U;
        return e;
      } else {
        let r = e.tt;
        for (; r.W === e; ) e = r, r = e.tt;
        return e.W !== r ? r : e;
      }
    }
    te() {
      let e = this.tt, r = this.W, n = r.U;
      return e.tt === this ? e.tt = r : e.U === this ? e.U = r : e.W = r, r.tt = e, r.U = this, this.tt = r, this.W = n, n && (n.tt = this), r;
    }
    se() {
      let e = this.tt, r = this.U, n = r.W;
      return e.tt === this ? e.tt = r : e.U === this ? e.U = r : e.W = r, r.tt = e, r.W = this, this.tt = r, this.U = n, n && (n.tt = this), r;
    }
  };
  wn.TreeNode = Co;
  var iu = class extends Co {
    constructor() {
      super(...arguments), this.rt = 1;
    }
    te() {
      let e = super.te();
      return this.ie(), e.ie(), e;
    }
    se() {
      let e = super.se();
      return this.ie(), e.ie(), e;
    }
    ie() {
      this.rt = 1, this.U && (this.rt += this.U.rt), this.W && (this.rt += this.W.rt);
    }
  };
  wn.TreeNodeEnableIndex = iu;
});
var su = j((Bo) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Bo, "t", { value: true });
  Bo.default = void 0;
  var Ry = Oy(), i1 = It(), ky = xt(), ou = class extends i1.Container {
    constructor(e = function(n, i) {
      return n < i ? -1 : n > i ? 1 : 0;
    }, r = false) {
      super(), this.Y = void 0, this.v = e, r ? (this.re = Ry.TreeNodeEnableIndex, this.M = function(n, i, s) {
        let o = this.ne(n, i, s);
        if (o) {
          let a = o.tt;
          for (; a !== this.h; ) a.rt += 1, a = a.tt;
          let c = this.he(o);
          if (c) {
            let { parentNode: f, grandParent: h, curNode: d } = c;
            f.ie(), h.ie(), d.ie();
          }
        }
        return this.i;
      }, this.V = function(n) {
        let i = this.fe(n);
        for (; i !== this.h; ) i.rt -= 1, i = i.tt;
      }) : (this.re = Ry.TreeNode, this.M = function(n, i, s) {
        let o = this.ne(n, i, s);
        return o && this.he(o), this.i;
      }, this.V = this.fe), this.h = new this.re();
    }
    X(e, r) {
      let n = this.h;
      for (; e; ) {
        let i = this.v(e.u, r);
        if (i < 0) e = e.W;
        else if (i > 0) n = e, e = e.U;
        else return e;
      }
      return n;
    }
    Z(e, r) {
      let n = this.h;
      for (; e; ) this.v(e.u, r) <= 0 ? e = e.W : (n = e, e = e.U);
      return n;
    }
    $(e, r) {
      let n = this.h;
      for (; e; ) {
        let i = this.v(e.u, r);
        if (i < 0) n = e, e = e.W;
        else if (i > 0) e = e.U;
        else return e;
      }
      return n;
    }
    rr(e, r) {
      let n = this.h;
      for (; e; ) this.v(e.u, r) < 0 ? (n = e, e = e.W) : e = e.U;
      return n;
    }
    ue(e) {
      for (; ; ) {
        let r = e.tt;
        if (r === this.h) return;
        if (e.ee === 1) {
          e.ee = 0;
          return;
        }
        if (e === r.U) {
          let n = r.W;
          if (n.ee === 1) n.ee = 0, r.ee = 1, r === this.Y ? this.Y = r.te() : r.te();
          else if (n.W && n.W.ee === 1) {
            n.ee = r.ee, r.ee = 0, n.W.ee = 0, r === this.Y ? this.Y = r.te() : r.te();
            return;
          } else n.U && n.U.ee === 1 ? (n.ee = 1, n.U.ee = 0, n.se()) : (n.ee = 1, e = r);
        } else {
          let n = r.U;
          if (n.ee === 1) n.ee = 0, r.ee = 1, r === this.Y ? this.Y = r.se() : r.se();
          else if (n.U && n.U.ee === 1) {
            n.ee = r.ee, r.ee = 0, n.U.ee = 0, r === this.Y ? this.Y = r.se() : r.se();
            return;
          } else n.W && n.W.ee === 1 ? (n.ee = 1, n.W.ee = 0, n.te()) : (n.ee = 1, e = r);
        }
      }
    }
    fe(e) {
      if (this.i === 1) return this.clear(), this.h;
      let r = e;
      for (; r.U || r.W; ) {
        if (r.W) for (r = r.W; r.U; ) r = r.U;
        else r = r.U;
        [e.u, r.u] = [r.u, e.u], [e.l, r.l] = [r.l, e.l], e = r;
      }
      this.h.U === r ? this.h.U = r.tt : this.h.W === r && (this.h.W = r.tt), this.ue(r);
      let n = r.tt;
      return r === n.U ? n.U = void 0 : n.W = void 0, this.i -= 1, this.Y.ee = 0, n;
    }
    oe(e, r) {
      return e === void 0 ? false : this.oe(e.U, r) || r(e) ? true : this.oe(e.W, r);
    }
    he(e) {
      for (; ; ) {
        let r = e.tt;
        if (r.ee === 0) return;
        let n = r.tt;
        if (r === n.U) {
          let i = n.W;
          if (i && i.ee === 1) {
            if (i.ee = r.ee = 0, n === this.Y) return;
            n.ee = 1, e = n;
            continue;
          } else if (e === r.W) {
            if (e.ee = 0, e.U && (e.U.tt = r), e.W && (e.W.tt = n), r.W = e.U, n.U = e.W, e.U = r, e.W = n, n === this.Y) this.Y = e, this.h.tt = e;
            else {
              let s = n.tt;
              s.U === n ? s.U = e : s.W = e;
            }
            return e.tt = n.tt, r.tt = e, n.tt = e, n.ee = 1, { parentNode: r, grandParent: n, curNode: e };
          } else r.ee = 0, n === this.Y ? this.Y = n.se() : n.se(), n.ee = 1;
        } else {
          let i = n.U;
          if (i && i.ee === 1) {
            if (i.ee = r.ee = 0, n === this.Y) return;
            n.ee = 1, e = n;
            continue;
          } else if (e === r.U) {
            if (e.ee = 0, e.U && (e.U.tt = n), e.W && (e.W.tt = r), n.W = e.U, r.U = e.W, e.U = n, e.W = r, n === this.Y) this.Y = e, this.h.tt = e;
            else {
              let s = n.tt;
              s.U === n ? s.U = e : s.W = e;
            }
            return e.tt = n.tt, r.tt = e, n.tt = e, n.ee = 1, { parentNode: r, grandParent: n, curNode: e };
          } else r.ee = 0, n === this.Y ? this.Y = n.te() : n.te(), n.ee = 1;
        }
        return;
      }
    }
    ne(e, r, n) {
      if (this.Y === void 0) {
        this.i += 1, this.Y = new this.re(e, r), this.Y.ee = 0, this.Y.tt = this.h, this.h.tt = this.Y, this.h.U = this.Y, this.h.W = this.Y;
        return;
      }
      let i, s = this.h.U, o = this.v(s.u, e);
      if (o === 0) {
        s.l = r;
        return;
      } else if (o > 0) s.U = new this.re(e, r), s.U.tt = s, i = s.U, this.h.U = i;
      else {
        let a = this.h.W, c = this.v(a.u, e);
        if (c === 0) {
          a.l = r;
          return;
        } else if (c < 0) a.W = new this.re(e, r), a.W.tt = a, i = a.W, this.h.W = i;
        else {
          if (n !== void 0) {
            let f = n.o;
            if (f !== this.h) {
              let h = this.v(f.u, e);
              if (h === 0) {
                f.l = r;
                return;
              } else if (h > 0) {
                let d = f.L(), m = this.v(d.u, e);
                if (m === 0) {
                  d.l = r;
                  return;
                } else m < 0 && (i = new this.re(e, r), d.W === void 0 ? (d.W = i, i.tt = d) : (f.U = i, i.tt = f));
              }
            }
          }
          if (i === void 0) for (i = this.Y; ; ) {
            let f = this.v(i.u, e);
            if (f > 0) {
              if (i.U === void 0) {
                i.U = new this.re(e, r), i.U.tt = i, i = i.U;
                break;
              }
              i = i.U;
            } else if (f < 0) {
              if (i.W === void 0) {
                i.W = new this.re(e, r), i.W.tt = i, i = i.W;
                break;
              }
              i = i.W;
            } else {
              i.l = r;
              return;
            }
          }
        }
      }
      return this.i += 1, i;
    }
    I(e, r) {
      for (; e; ) {
        let n = this.v(e.u, r);
        if (n < 0) e = e.W;
        else if (n > 0) e = e.U;
        else return e;
      }
      return e || this.h;
    }
    clear() {
      this.i = 0, this.Y = void 0, this.h.tt = void 0, this.h.U = this.h.W = void 0;
    }
    updateKeyByIterator(e, r) {
      let n = e.o;
      if (n === this.h && (0, ky.throwIteratorAccessError)(), this.i === 1) return n.u = r, true;
      if (n === this.h.U) return this.v(n.B().u, r) > 0 ? (n.u = r, true) : false;
      if (n === this.h.W) return this.v(n.L().u, r) < 0 ? (n.u = r, true) : false;
      let i = n.L().u;
      if (this.v(i, r) >= 0) return false;
      let s = n.B().u;
      return this.v(s, r) <= 0 ? false : (n.u = r, true);
    }
    eraseElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let r = 0, n = this;
      return this.oe(this.Y, (function(i) {
        return e === r ? (n.V(i), true) : (r += 1, false);
      })), this.i;
    }
    eraseElementByKey(e) {
      if (this.i === 0) return false;
      let r = this.I(this.Y, e);
      return r === this.h ? false : (this.V(r), true);
    }
    eraseElementByIterator(e) {
      let r = e.o;
      r === this.h && (0, ky.throwIteratorAccessError)();
      let n = r.W === void 0;
      return e.iteratorType === 0 ? n && e.next() : (!n || r.U === void 0) && e.next(), this.V(r), e;
    }
    forEach(e) {
      let r = 0;
      for (let n of this) e(n, r++, this);
    }
    getElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let r, n = 0;
      for (let i of this) {
        if (n === e) {
          r = i;
          break;
        }
        n += 1;
      }
      return r;
    }
    getHeight() {
      if (this.i === 0) return 0;
      let e = function(r) {
        return r ? Math.max(e(r.U), e(r.W)) + 1 : 0;
      };
      return e(this.Y);
    }
  }, o1 = ou;
  Bo.default = o1;
});
var uu = j((No) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(No, "t", { value: true });
  No.default = void 0;
  var s1 = It(), Mo = xt(), au = class extends s1.ContainerIterator {
    constructor(e, r, n) {
      super(n), this.o = e, this.h = r, this.iteratorType === 0 ? (this.pre = function() {
        return this.o === this.h.U && (0, Mo.throwIteratorAccessError)(), this.o = this.o.L(), this;
      }, this.next = function() {
        return this.o === this.h && (0, Mo.throwIteratorAccessError)(), this.o = this.o.B(), this;
      }) : (this.pre = function() {
        return this.o === this.h.W && (0, Mo.throwIteratorAccessError)(), this.o = this.o.B(), this;
      }, this.next = function() {
        return this.o === this.h && (0, Mo.throwIteratorAccessError)(), this.o = this.o.L(), this;
      });
    }
    get index() {
      let e = this.o, r = this.h.tt;
      if (e === this.h) return r ? r.rt - 1 : 0;
      let n = 0;
      for (e.U && (n += e.U.rt); e !== r; ) {
        let i = e.tt;
        e === i.W && (n += 1, i.U && (n += i.U.rt)), e = i;
      }
      return n;
    }
  }, a1 = au;
  No.default = a1;
});
var By = j((qo) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(qo, "t", { value: true });
  qo.default = void 0;
  var u1 = Cy(su()), l1 = Cy(uu()), c1 = xt();
  function Cy(t) {
    return t && t.t ? t : { default: t };
  }
  var dt = class t extends l1.default {
    constructor(e, r, n, i) {
      super(e, r, i), this.container = n;
    }
    get pointer() {
      return this.o === this.h && (0, c1.throwIteratorAccessError)(), this.o.u;
    }
    copy() {
      return new t(this.o, this.h, this.container, this.iteratorType);
    }
  }, lu = class extends u1.default {
    constructor(e = [], r, n) {
      super(r, n);
      let i = this;
      e.forEach((function(s) {
        i.insert(s);
      }));
    }
    *K(e) {
      e !== void 0 && (yield* this.K(e.U), yield e.u, yield* this.K(e.W));
    }
    begin() {
      return new dt(this.h.U || this.h, this.h, this);
    }
    end() {
      return new dt(this.h, this.h, this);
    }
    rBegin() {
      return new dt(this.h.W || this.h, this.h, this, 1);
    }
    rEnd() {
      return new dt(this.h, this.h, this, 1);
    }
    front() {
      return this.h.U ? this.h.U.u : void 0;
    }
    back() {
      return this.h.W ? this.h.W.u : void 0;
    }
    insert(e, r) {
      return this.M(e, void 0, r);
    }
    find(e) {
      let r = this.I(this.Y, e);
      return new dt(r, this.h, this);
    }
    lowerBound(e) {
      let r = this.X(this.Y, e);
      return new dt(r, this.h, this);
    }
    upperBound(e) {
      let r = this.Z(this.Y, e);
      return new dt(r, this.h, this);
    }
    reverseLowerBound(e) {
      let r = this.$(this.Y, e);
      return new dt(r, this.h, this);
    }
    reverseUpperBound(e) {
      let r = this.rr(this.Y, e);
      return new dt(r, this.h, this);
    }
    union(e) {
      let r = this;
      return e.forEach((function(n) {
        r.insert(n);
      })), this.i;
    }
    [Symbol.iterator]() {
      return this.K(this.Y);
    }
  }, f1 = lu;
  qo.default = f1;
});
var Ny = j((Lo) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Lo, "t", { value: true });
  Lo.default = void 0;
  var h1 = My(su()), d1 = My(uu()), p1 = xt();
  function My(t) {
    return t && t.t ? t : { default: t };
  }
  var pt = class t extends d1.default {
    constructor(e, r, n, i) {
      super(e, r, i), this.container = n;
    }
    get pointer() {
      this.o === this.h && (0, p1.throwIteratorAccessError)();
      let e = this;
      return new Proxy([], { get(r, n) {
        if (n === "0") return e.o.u;
        if (n === "1") return e.o.l;
      }, set(r, n, i) {
        if (n !== "1") throw new TypeError("props must be 1");
        return e.o.l = i, true;
      } });
    }
    copy() {
      return new t(this.o, this.h, this.container, this.iteratorType);
    }
  }, cu = class extends h1.default {
    constructor(e = [], r, n) {
      super(r, n);
      let i = this;
      e.forEach((function(s) {
        i.setElement(s[0], s[1]);
      }));
    }
    *K(e) {
      e !== void 0 && (yield* this.K(e.U), yield [e.u, e.l], yield* this.K(e.W));
    }
    begin() {
      return new pt(this.h.U || this.h, this.h, this);
    }
    end() {
      return new pt(this.h, this.h, this);
    }
    rBegin() {
      return new pt(this.h.W || this.h, this.h, this, 1);
    }
    rEnd() {
      return new pt(this.h, this.h, this, 1);
    }
    front() {
      if (this.i === 0) return;
      let e = this.h.U;
      return [e.u, e.l];
    }
    back() {
      if (this.i === 0) return;
      let e = this.h.W;
      return [e.u, e.l];
    }
    lowerBound(e) {
      let r = this.X(this.Y, e);
      return new pt(r, this.h, this);
    }
    upperBound(e) {
      let r = this.Z(this.Y, e);
      return new pt(r, this.h, this);
    }
    reverseLowerBound(e) {
      let r = this.$(this.Y, e);
      return new pt(r, this.h, this);
    }
    reverseUpperBound(e) {
      let r = this.rr(this.Y, e);
      return new pt(r, this.h, this);
    }
    setElement(e, r, n) {
      return this.M(e, r, n);
    }
    find(e) {
      let r = this.I(this.Y, e);
      return new pt(r, this.h, this);
    }
    getElementByKey(e) {
      return this.I(this.Y, e).l;
    }
    union(e) {
      let r = this;
      return e.forEach((function(n) {
        r.setElement(n[0], n[1]);
      })), this.i;
    }
    [Symbol.iterator]() {
      return this.K(this.Y);
    }
  }, y1 = cu;
  Lo.default = y1;
});
var hu = j((fu) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(fu, "t", { value: true });
  fu.default = g1;
  function g1(t) {
    let e = typeof t;
    return e === "object" && t !== null || e === "function";
  }
});
var gu = j((mn) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(mn, "t", { value: true });
  mn.HashContainerIterator = mn.HashContainer = void 0;
  var qy = It(), du = b1(hu()), Kn = xt();
  function b1(t) {
    return t && t.t ? t : { default: t };
  }
  var pu = class extends qy.ContainerIterator {
    constructor(e, r, n) {
      super(n), this.o = e, this.h = r, this.iteratorType === 0 ? (this.pre = function() {
        return this.o.L === this.h && (0, Kn.throwIteratorAccessError)(), this.o = this.o.L, this;
      }, this.next = function() {
        return this.o === this.h && (0, Kn.throwIteratorAccessError)(), this.o = this.o.B, this;
      }) : (this.pre = function() {
        return this.o.B === this.h && (0, Kn.throwIteratorAccessError)(), this.o = this.o.B, this;
      }, this.next = function() {
        return this.o === this.h && (0, Kn.throwIteratorAccessError)(), this.o = this.o.L, this;
      });
    }
  };
  mn.HashContainerIterator = pu;
  var yu = class extends qy.Container {
    constructor() {
      super(), this.H = [], this.g = {}, this.HASH_TAG = /* @__PURE__ */ Symbol("@@HASH_TAG"), Object.setPrototypeOf(this.g, null), this.h = {}, this.h.L = this.h.B = this.p = this._ = this.h;
    }
    V(e) {
      let { L: r, B: n } = e;
      r.B = n, n.L = r, e === this.p && (this.p = n), e === this._ && (this._ = r), this.i -= 1;
    }
    M(e, r, n) {
      n === void 0 && (n = (0, du.default)(e));
      let i;
      if (n) {
        let s = e[this.HASH_TAG];
        if (s !== void 0) return this.H[s].l = r, this.i;
        Object.defineProperty(e, this.HASH_TAG, { value: this.H.length, configurable: true }), i = { u: e, l: r, L: this._, B: this.h }, this.H.push(i);
      } else {
        let s = this.g[e];
        if (s) return s.l = r, this.i;
        i = { u: e, l: r, L: this._, B: this.h }, this.g[e] = i;
      }
      return this.i === 0 ? (this.p = i, this.h.B = i) : this._.B = i, this._ = i, this.h.L = i, ++this.i;
    }
    I(e, r) {
      if (r === void 0 && (r = (0, du.default)(e)), r) {
        let n = e[this.HASH_TAG];
        return n === void 0 ? this.h : this.H[n];
      } else return this.g[e] || this.h;
    }
    clear() {
      let e = this.HASH_TAG;
      this.H.forEach((function(r) {
        delete r.u[e];
      })), this.H = [], this.g = {}, Object.setPrototypeOf(this.g, null), this.i = 0, this.p = this._ = this.h.L = this.h.B = this.h;
    }
    eraseElementByKey(e, r) {
      let n;
      if (r === void 0 && (r = (0, du.default)(e)), r) {
        let i = e[this.HASH_TAG];
        if (i === void 0) return false;
        delete e[this.HASH_TAG], n = this.H[i], delete this.H[i];
      } else {
        if (n = this.g[e], n === void 0) return false;
        delete this.g[e];
      }
      return this.V(n), true;
    }
    eraseElementByIterator(e) {
      let r = e.o;
      return r === this.h && (0, Kn.throwIteratorAccessError)(), this.V(r), e.next();
    }
    eraseElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let r = this.p;
      for (; e--; ) r = r.B;
      return this.V(r), this.i;
    }
  };
  mn.HashContainer = yu;
});
var Uy = j((Uo) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Uo, "t", { value: true });
  Uo.default = void 0;
  var Ly = gu(), w1 = xt(), Dr = class t extends Ly.HashContainerIterator {
    constructor(e, r, n, i) {
      super(e, r, i), this.container = n;
    }
    get pointer() {
      return this.o === this.h && (0, w1.throwIteratorAccessError)(), this.o.u;
    }
    copy() {
      return new t(this.o, this.h, this.container, this.iteratorType);
    }
  }, bu = class extends Ly.HashContainer {
    constructor(e = []) {
      super();
      let r = this;
      e.forEach((function(n) {
        r.insert(n);
      }));
    }
    begin() {
      return new Dr(this.p, this.h, this);
    }
    end() {
      return new Dr(this.h, this.h, this);
    }
    rBegin() {
      return new Dr(this._, this.h, this, 1);
    }
    rEnd() {
      return new Dr(this.h, this.h, this, 1);
    }
    front() {
      return this.p.u;
    }
    back() {
      return this._.u;
    }
    insert(e, r) {
      return this.M(e, void 0, r);
    }
    getElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let r = this.p;
      for (; e--; ) r = r.B;
      return r.u;
    }
    find(e, r) {
      let n = this.I(e, r);
      return new Dr(n, this.h, this);
    }
    forEach(e) {
      let r = 0, n = this.p;
      for (; n !== this.h; ) e(n.u, r++, this), n = n.B;
    }
    [Symbol.iterator]() {
      return function* () {
        let e = this.p;
        for (; e !== this.h; ) yield e.u, e = e.B;
      }.bind(this)();
    }
  }, m1 = bu;
  Uo.default = m1;
});
var jy = j((Do) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Do, "t", { value: true });
  Do.default = void 0;
  var Dy = gu(), _1 = S1(hu()), v1 = xt();
  function S1(t) {
    return t && t.t ? t : { default: t };
  }
  var jr = class t extends Dy.HashContainerIterator {
    constructor(e, r, n, i) {
      super(e, r, i), this.container = n;
    }
    get pointer() {
      this.o === this.h && (0, v1.throwIteratorAccessError)();
      let e = this;
      return new Proxy([], { get(r, n) {
        if (n === "0") return e.o.u;
        if (n === "1") return e.o.l;
      }, set(r, n, i) {
        if (n !== "1") throw new TypeError("props must be 1");
        return e.o.l = i, true;
      } });
    }
    copy() {
      return new t(this.o, this.h, this.container, this.iteratorType);
    }
  }, wu = class extends Dy.HashContainer {
    constructor(e = []) {
      super();
      let r = this;
      e.forEach((function(n) {
        r.setElement(n[0], n[1]);
      }));
    }
    begin() {
      return new jr(this.p, this.h, this);
    }
    end() {
      return new jr(this.h, this.h, this);
    }
    rBegin() {
      return new jr(this._, this.h, this, 1);
    }
    rEnd() {
      return new jr(this.h, this.h, this, 1);
    }
    front() {
      if (this.i !== 0) return [this.p.u, this.p.l];
    }
    back() {
      if (this.i !== 0) return [this._.u, this._.l];
    }
    setElement(e, r, n) {
      return this.M(e, r, n);
    }
    getElementByKey(e, r) {
      if (r === void 0 && (r = (0, _1.default)(e)), r) {
        let i = e[this.HASH_TAG];
        return i !== void 0 ? this.H[i].l : void 0;
      }
      let n = this.g[e];
      return n ? n.l : void 0;
    }
    getElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let r = this.p;
      for (; e--; ) r = r.B;
      return [r.u, r.l];
    }
    find(e, r) {
      let n = this.I(e, r);
      return new jr(n, this.h, this);
    }
    forEach(e) {
      let r = 0, n = this.p;
      for (; n !== this.h; ) e([n.u, n.l], r++, this), n = n.B;
    }
    [Symbol.iterator]() {
      return function* () {
        let e = this.p;
        for (; e !== this.h; ) yield [e.u, e.l], e = e.B;
      }.bind(this)();
    }
  }, E1 = wu;
  Do.default = E1;
});
var Fy = j((it) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(it, "t", { value: true });
  Object.defineProperty(it, "Deque", { enumerable: true, get: function() {
    return O1.default;
  } });
  Object.defineProperty(it, "HashMap", { enumerable: true, get: function() {
    return B1.default;
  } });
  Object.defineProperty(it, "HashSet", { enumerable: true, get: function() {
    return C1.default;
  } });
  Object.defineProperty(it, "LinkList", { enumerable: true, get: function() {
    return P1.default;
  } });
  Object.defineProperty(it, "OrderedMap", { enumerable: true, get: function() {
    return k1.default;
  } });
  Object.defineProperty(it, "OrderedSet", { enumerable: true, get: function() {
    return R1.default;
  } });
  Object.defineProperty(it, "PriorityQueue", { enumerable: true, get: function() {
    return x1.default;
  } });
  Object.defineProperty(it, "Queue", { enumerable: true, get: function() {
    return I1.default;
  } });
  Object.defineProperty(it, "Stack", { enumerable: true, get: function() {
    return A1.default;
  } });
  Object.defineProperty(it, "Vector", { enumerable: true, get: function() {
    return T1.default;
  } });
  var A1 = Tt(Ey()), I1 = Tt(Ay()), x1 = Tt(Iy()), T1 = Tt(xy()), P1 = Tt(Ty()), O1 = Tt(Py()), R1 = Tt(By()), k1 = Tt(Ny()), C1 = Tt(Uy()), B1 = Tt(jy());
  function Tt(t) {
    return t && t.t ? t : { default: t };
  }
});
var $y = j((cj, Wy) => {
  "use strict";
  A();
  x();
  I();
  var M1 = Fy().OrderedSet, Pt = At()("number-allocator:trace"), N1 = At()("number-allocator:error");
  function Ve(t, e) {
    this.low = t, this.high = e;
  }
  Ve.prototype.equals = function(t) {
    return this.low === t.low && this.high === t.high;
  };
  Ve.prototype.compare = function(t) {
    return this.low < t.low && this.high < t.low ? -1 : t.low < this.low && t.high < this.low ? 1 : 0;
  };
  function Ot(t, e) {
    if (!(this instanceof Ot)) return new Ot(t, e);
    this.min = t, this.max = e, this.ss = new M1([], (r, n) => r.compare(n)), Pt("Create"), this.clear();
  }
  Ot.prototype.firstVacant = function() {
    return this.ss.size() === 0 ? null : this.ss.front().low;
  };
  Ot.prototype.alloc = function() {
    if (this.ss.size() === 0) return Pt("alloc():empty"), null;
    let t = this.ss.begin(), e = t.pointer.low, r = t.pointer.high, n = e;
    return n + 1 <= r ? this.ss.updateKeyByIterator(t, new Ve(e + 1, r)) : this.ss.eraseElementByPos(0), Pt("alloc():" + n), n;
  };
  Ot.prototype.use = function(t) {
    let e = new Ve(t, t), r = this.ss.lowerBound(e);
    if (!r.equals(this.ss.end())) {
      let n = r.pointer.low, i = r.pointer.high;
      return r.pointer.equals(e) ? (this.ss.eraseElementByIterator(r), Pt("use():" + t), true) : n > t ? false : n === t ? (this.ss.updateKeyByIterator(r, new Ve(n + 1, i)), Pt("use():" + t), true) : i === t ? (this.ss.updateKeyByIterator(r, new Ve(n, i - 1)), Pt("use():" + t), true) : (this.ss.updateKeyByIterator(r, new Ve(t + 1, i)), this.ss.insert(new Ve(n, t - 1)), Pt("use():" + t), true);
    }
    return Pt("use():failed"), false;
  };
  Ot.prototype.free = function(t) {
    if (t < this.min || t > this.max) {
      N1("free():" + t + " is out of range");
      return;
    }
    let e = new Ve(t, t), r = this.ss.upperBound(e);
    if (r.equals(this.ss.end())) {
      if (r.equals(this.ss.begin())) {
        this.ss.insert(e);
        return;
      }
      r.pre();
      let n = r.pointer.high;
      r.pointer.high + 1 === t ? this.ss.updateKeyByIterator(r, new Ve(n, t)) : this.ss.insert(e);
    } else if (r.equals(this.ss.begin())) if (t + 1 === r.pointer.low) {
      let n = r.pointer.high;
      this.ss.updateKeyByIterator(r, new Ve(t, n));
    } else this.ss.insert(e);
    else {
      let n = r.pointer.low, i = r.pointer.high;
      r.pre();
      let s = r.pointer.low;
      r.pointer.high + 1 === t ? t + 1 === n ? (this.ss.eraseElementByIterator(r), this.ss.updateKeyByIterator(r, new Ve(s, i))) : this.ss.updateKeyByIterator(r, new Ve(s, t)) : t + 1 === n ? (this.ss.eraseElementByIterator(r.next()), this.ss.insert(new Ve(t, i))) : this.ss.insert(e);
    }
    Pt("free():" + t);
  };
  Ot.prototype.clear = function() {
    Pt("clear()"), this.ss.clear(), this.ss.insert(new Ve(this.min, this.max));
  };
  Ot.prototype.intervalCount = function() {
    return this.ss.size();
  };
  Ot.prototype.dump = function() {
    console.log("length:" + this.ss.size());
    for (let t of this.ss) console.log(t);
  };
  Wy.exports = Ot;
});
var mu = j((_j, Hy) => {
  A();
  x();
  I();
  var q1 = $y();
  Hy.exports.NumberAllocator = q1;
});
var Vy = j((vu) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(vu, "__esModule", { value: true });
  var L1 = Sy(), U1 = mu(), _u = class {
    aliasToTopic;
    topicToAlias;
    max;
    numberAllocator;
    length;
    constructor(e) {
      e > 0 && (this.aliasToTopic = new L1.LRUCache({ max: e }), this.topicToAlias = {}, this.numberAllocator = new U1.NumberAllocator(1, e), this.max = e, this.length = 0);
    }
    put(e, r) {
      if (r === 0 || r > this.max) return false;
      let n = this.aliasToTopic.get(r);
      return n && delete this.topicToAlias[n], this.aliasToTopic.set(r, e), this.topicToAlias[e] = r, this.numberAllocator.use(r), this.length = this.aliasToTopic.size, true;
    }
    getTopicByAlias(e) {
      return this.aliasToTopic.get(e);
    }
    getAliasByTopic(e) {
      let r = this.topicToAlias[e];
      return typeof r < "u" && this.aliasToTopic.get(r), r;
    }
    clear() {
      this.aliasToTopic.clear(), this.topicToAlias = {}, this.numberAllocator.clear(), this.length = 0;
    }
    getLruAlias() {
      let e = this.numberAllocator.firstVacant();
      return e || [...this.aliasToTopic.keys()][this.aliasToTopic.size - 1];
    }
  };
  vu.default = _u;
});
var Gy = j((Qn) => {
  "use strict";
  A();
  x();
  I();
  var D1 = Qn && Qn.__importDefault || function(t) {
    return t && t.__esModule ? t : { default: t };
  };
  Object.defineProperty(Qn, "__esModule", { value: true });
  var j1 = zn(), F1 = D1(Vy()), W1 = Mr(), $1 = (t, e) => {
    t.log("_handleConnack");
    let { options: r } = t, i = r.protocolVersion === 5 ? e.reasonCode : e.returnCode;
    if (clearTimeout(t.connackTimer), delete t.topicAliasSend, e.properties) {
      if (e.properties.topicAliasMaximum) {
        if (e.properties.topicAliasMaximum > 65535) {
          t.emit("error", new Error("topicAliasMaximum from broker is out of range"));
          return;
        }
        e.properties.topicAliasMaximum > 0 && (t.topicAliasSend = new F1.default(e.properties.topicAliasMaximum));
      }
      e.properties.serverKeepAlive && r.keepalive && (r.keepalive = e.properties.serverKeepAlive), e.properties.maximumPacketSize && (r.properties || (r.properties = {}), r.properties.maximumPacketSize = e.properties.maximumPacketSize);
    }
    if (i === 0) t.reconnecting = false, t._onConnect(e);
    else if (i > 0) {
      let s = new W1.ErrorWithReasonCode(`Connection refused: ${j1.ReasonCodes[i]}`, i);
      t.emit("error", s), t.options.reconnectOnConnackError && t._cleanUp(true);
    }
  };
  Qn.default = $1;
});
var zy = j((Su) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Su, "__esModule", { value: true });
  var H1 = (t, e, r) => {
    t.log("handling pubrel packet");
    let n = typeof r < "u" ? r : t.noop, { messageId: i } = e, s = { cmd: "pubcomp", messageId: i };
    t.incomingStore.get(e, (o, a) => {
      o ? t._sendPacket(s, n) : (t.emit("message", a.topic, a.payload, a), t.handleMessage(a, (c) => {
        if (c) return n(c);
        t.incomingStore.del(a, t.noop), t._sendPacket(s, n);
      }));
    });
  };
  Su.default = H1;
});
var Ky = j((Yn) => {
  "use strict";
  A();
  x();
  I();
  var Jn = Yn && Yn.__importDefault || function(t) {
    return t && t.__esModule ? t : { default: t };
  };
  Object.defineProperty(Yn, "__esModule", { value: true });
  var V1 = Jn(dy()), G1 = Jn(by()), z1 = Jn(Gy()), K1 = Jn(zn()), Q1 = Jn(zy()), Y1 = (t, e, r) => {
    let { options: n } = t;
    if (n.protocolVersion === 5 && n.properties && n.properties.maximumPacketSize && n.properties.maximumPacketSize < e.length) return t.emit("error", new Error(`exceeding packets size ${e.cmd}`)), t.end({ reasonCode: 149, properties: { reasonString: "Maximum packet size was exceeded" } }), t;
    switch (t.log("_handlePacket :: emitting packetreceive"), t.emit("packetreceive", e), e.cmd) {
      case "publish":
        (0, V1.default)(t, e, r);
        break;
      case "puback":
      case "pubrec":
      case "pubcomp":
      case "suback":
      case "unsuback":
        t.reschedulePing(), (0, K1.default)(t, e), r();
        break;
      case "pubrel":
        t.reschedulePing(), (0, Q1.default)(t, e, r);
        break;
      case "connack":
        (0, z1.default)(t, e), r();
        break;
      case "auth":
        t.reschedulePing(), (0, G1.default)(t, e), r();
        break;
      case "pingresp":
        t.log("_handlePacket :: received pingresp"), t.reschedulePing(true), r();
        break;
      case "disconnect":
        t.emit("disconnect", e), r();
        break;
      default:
        t.log("_handlePacket :: unknown command"), r();
        break;
    }
  };
  Yn.default = Y1;
});
var Iu = j((Au) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Au, "__esModule", { value: true });
  var Eu = class {
    nextId;
    constructor() {
      this.nextId = Math.max(1, Math.floor(Math.random() * 65535));
    }
    allocate() {
      let e = this.nextId++;
      return this.nextId === 65536 && (this.nextId = 1), e;
    }
    getLastAllocated() {
      return this.nextId === 1 ? 65535 : this.nextId - 1;
    }
    register(e) {
      return true;
    }
    deallocate(e) {
    }
    clear() {
    }
  };
  Au.default = Eu;
});
var Qy = j((Tu) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Tu, "__esModule", { value: true });
  var xu = class {
    aliasToTopic;
    max;
    length;
    constructor(e) {
      this.aliasToTopic = {}, this.max = e;
    }
    put(e, r) {
      return r === 0 || r > this.max ? false : (this.aliasToTopic[r] = e, this.length = Object.keys(this.aliasToTopic).length, true);
    }
    getTopicByAlias(e) {
      return this.aliasToTopic[e];
    }
    clear() {
      this.aliasToTopic = {};
    }
  };
  Tu.default = xu;
});
var Yy = j((_n) => {
  "use strict";
  A();
  x();
  I();
  var J1 = _n && _n.__importDefault || function(t) {
    return t && t.__esModule ? t : { default: t };
  };
  Object.defineProperty(_n, "__esModule", { value: true });
  _n.TypedEventEmitter = void 0;
  var X1 = J1((er(), me(Zt))), Z1 = Mr(), jo = class {
  };
  _n.TypedEventEmitter = jo;
  (0, Z1.applyMixin)(jo, X1.default);
});
var Pu = j((Fo, Jy) => {
  A();
  x();
  I();
  (function(t, e) {
    typeof Fo == "object" && typeof Jy < "u" ? e(Fo) : typeof define == "function" && define.amd ? define(["exports"], e) : (t = typeof globalThis < "u" ? globalThis : t || self, e(t.fastUniqueNumbers = {}));
  })(Fo, (function(t) {
    "use strict";
    var e = function(m) {
      return function(g) {
        var P = m(g);
        return g.add(P), P;
      };
    }, r = function(m) {
      return function(g, P) {
        return m.set(g, P), P;
      };
    }, n = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER, i = 536870912, s = i * 2, o = function(m, g) {
      return function(P) {
        var S = g.get(P), b = S === void 0 ? P.size : S < s ? S + 1 : 0;
        if (!P.has(b)) return m(P, b);
        if (P.size < i) {
          for (; P.has(b); ) b = Math.floor(Math.random() * s);
          return m(P, b);
        }
        if (P.size > n) throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
        for (; P.has(b); ) b = Math.floor(Math.random() * n);
        return m(P, b);
      };
    }, a = /* @__PURE__ */ new WeakMap(), c = r(a), f = o(c, a), h = e(f);
    t.addUniqueNumber = h, t.generateUniqueNumber = f;
  }));
});
var Xn = j((t8, Wt) => {
  A();
  x();
  I();
  function Ou(t) {
    "@babel/helpers - typeof";
    return Wt.exports = Ou = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, Wt.exports.__esModule = true, Wt.exports.default = Wt.exports, Ou(t);
  }
  Wt.exports = Ou, Wt.exports.__esModule = true, Wt.exports.default = Wt.exports;
});
var Zy = j((f8, Zn) => {
  A();
  x();
  I();
  var Xy = Xn().default;
  function eA(t, e) {
    if (Xy(t) != "object" || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(t, e || "default");
      if (Xy(n) != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(t);
  }
  Zn.exports = eA, Zn.exports.__esModule = true, Zn.exports.default = Zn.exports;
});
var eg = j((v8, ei) => {
  A();
  x();
  I();
  var tA = Xn().default, rA = Zy();
  function nA(t) {
    var e = rA(t, "string");
    return tA(e) == "symbol" ? e : e + "";
  }
  ei.exports = nA, ei.exports.__esModule = true, ei.exports.default = ei.exports;
});
var tg = j((k8, ti) => {
  A();
  x();
  I();
  var iA = eg();
  function oA(t, e, r) {
    return (e = iA(e)) in t ? Object.defineProperty(t, e, { value: r, enumerable: true, configurable: true, writable: true }) : t[e] = r, t;
  }
  ti.exports = oA, ti.exports.__esModule = true, ti.exports.default = ti.exports;
});
var rg = j((F8, ri) => {
  A();
  x();
  I();
  function sA(t) {
    if (Array.isArray(t)) return t;
  }
  ri.exports = sA, ri.exports.__esModule = true, ri.exports.default = ri.exports;
});
var ng = j((J8, ni) => {
  A();
  x();
  I();
  function aA(t, e) {
    var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (r != null) {
      var n, i, s, o, a = [], c = true, f = false;
      try {
        if (s = (r = r.call(t)).next, e === 0) {
          if (Object(r) !== r) return;
          c = false;
        } else for (; !(c = (n = s.call(r)).done) && (a.push(n.value), a.length !== e); c = true) ;
      } catch (h) {
        f = true, i = h;
      } finally {
        try {
          if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
        } finally {
          if (f) throw i;
        }
      }
      return a;
    }
  }
  ni.exports = aA, ni.exports.__esModule = true, ni.exports.default = ni.exports;
});
var ig = j((a6, ii) => {
  A();
  x();
  I();
  function uA(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  ii.exports = uA, ii.exports.__esModule = true, ii.exports.default = ii.exports;
});
var sg = j((b6, oi) => {
  A();
  x();
  I();
  var og = ig();
  function lA(t, e) {
    if (t) {
      if (typeof t == "string") return og(t, e);
      var r = {}.toString.call(t).slice(8, -1);
      return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? og(t, e) : void 0;
    }
  }
  oi.exports = lA, oi.exports.__esModule = true, oi.exports.default = oi.exports;
});
var ag = j((T6, si) => {
  A();
  x();
  I();
  function cA() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  si.exports = cA, si.exports.__esModule = true, si.exports.default = si.exports;
});
var ug = j((L6, ai) => {
  A();
  x();
  I();
  var fA = rg(), hA = ng(), dA = sg(), pA = ag();
  function yA(t, e) {
    return fA(t) || hA(t, e) || dA(t, e) || pA();
  }
  ai.exports = yA, ai.exports.__esModule = true, ai.exports.default = ai.exports;
});
var cg = j((z6, ui) => {
  A();
  x();
  I();
  function lg(t, e, r, n, i, s, o) {
    try {
      var a = t[s](o), c = a.value;
    } catch (f) {
      return void r(f);
    }
    a.done ? e(c) : Promise.resolve(c).then(n, i);
  }
  function gA(t) {
    return function() {
      var e = this, r = arguments;
      return new Promise(function(n, i) {
        var s = t.apply(e, r);
        function o(c) {
          lg(s, n, i, o, a, "next", c);
        }
        function a(c) {
          lg(s, n, i, o, a, "throw", c);
        }
        o(void 0);
      });
    };
  }
  ui.exports = gA, ui.exports.__esModule = true, ui.exports.default = ui.exports;
});
var Ru = j((nW, li) => {
  A();
  x();
  I();
  function bA(t, e) {
    this.v = t, this.k = e;
  }
  li.exports = bA, li.exports.__esModule = true, li.exports.default = li.exports;
});
var ku = j((dW, $t) => {
  A();
  x();
  I();
  function Wo(t, e, r, n) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch {
      i = 0;
    }
    $t.exports = Wo = function(o, a, c, f) {
      function h(d, m) {
        Wo(o, d, function(g) {
          return this._invoke(d, m, g);
        });
      }
      a ? i ? i(o, a, { value: c, enumerable: !f, configurable: !f, writable: !f }) : o[a] = c : (h("next", 0), h("throw", 1), h("return", 2));
    }, $t.exports.__esModule = true, $t.exports.default = $t.exports, Wo(t, e, r, n);
  }
  $t.exports = Wo, $t.exports.__esModule = true, $t.exports.default = $t.exports;
});
var Cu = j((EW, Ht) => {
  A();
  x();
  I();
  var Rt = ku();
  function fg() {
    var t, e, r = typeof Symbol == "function" ? Symbol : {}, n = r.iterator || "@@iterator", i = r.toStringTag || "@@toStringTag";
    function s(g, P, S, b) {
      var w = P && P.prototype instanceof a ? P : a, _ = Object.create(w.prototype);
      return Rt(_, "_invoke", (function(R, T, y) {
        var O, v, M, F = 0, U = y || [], Q = false, W = { p: 0, n: 0, v: t, a: H, f: H.bind(t, 4), d: function(J, ee) {
          return O = J, v = 0, M = t, W.n = ee, o;
        } };
        function H(z, J) {
          for (v = z, M = J, e = 0; !Q && F && !ee && e < U.length; e++) {
            var ee, G = U[e], V = W.p, te = G[2];
            z > 3 ? (ee = te === J) && (M = G[(v = G[4]) ? 5 : (v = 3, 3)], G[4] = G[5] = t) : G[0] <= V && ((ee = z < 2 && V < G[1]) ? (v = 0, W.v = J, W.n = G[1]) : V < te && (ee = z < 3 || G[0] > J || J > te) && (G[4] = z, G[5] = J, W.n = te, v = 0));
          }
          if (ee || z > 1) return o;
          throw Q = true, J;
        }
        return function(z, J, ee) {
          if (F > 1) throw TypeError("Generator is already running");
          for (Q && J === 1 && H(J, ee), v = J, M = ee; (e = v < 2 ? t : M) || !Q; ) {
            O || (v ? v < 3 ? (v > 1 && (W.n = -1), H(v, M)) : W.n = M : W.v = M);
            try {
              if (F = 2, O) {
                if (v || (z = "next"), e = O[z]) {
                  if (!(e = e.call(O, M))) throw TypeError("iterator result is not an object");
                  if (!e.done) return e;
                  M = e.value, v < 2 && (v = 0);
                } else v === 1 && (e = O.return) && e.call(O), v < 2 && (M = TypeError("The iterator does not provide a '" + z + "' method"), v = 1);
                O = t;
              } else if ((e = (Q = W.n < 0) ? M : R.call(T, W)) !== o) break;
            } catch (G) {
              O = t, v = 1, M = G;
            } finally {
              F = 1;
            }
          }
          return { value: e, done: Q };
        };
      })(g, S, b), true), _;
    }
    var o = {};
    function a() {
    }
    function c() {
    }
    function f() {
    }
    e = Object.getPrototypeOf;
    var h = [][n] ? e(e([][n]())) : (Rt(e = {}, n, function() {
      return this;
    }), e), d = f.prototype = a.prototype = Object.create(h);
    function m(g) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(g, f) : (g.__proto__ = f, Rt(g, i, "GeneratorFunction")), g.prototype = Object.create(d), g;
    }
    return c.prototype = f, Rt(d, "constructor", f), Rt(f, "constructor", c), c.displayName = "GeneratorFunction", Rt(f, i, "GeneratorFunction"), Rt(d), Rt(d, i, "Generator"), Rt(d, n, function() {
      return this;
    }), Rt(d, "toString", function() {
      return "[object Generator]";
    }), (Ht.exports = fg = function() {
      return { w: s, m };
    }, Ht.exports.__esModule = true, Ht.exports.default = Ht.exports)();
  }
  Ht.exports = fg, Ht.exports.__esModule = true, Ht.exports.default = Ht.exports;
});
var Nu = j((BW, ci) => {
  A();
  x();
  I();
  var wA = Ru(), Bu = ku();
  function Mu(t, e) {
    function r(i, s, o, a) {
      try {
        var c = t[i](s), f = c.value;
        return f instanceof wA ? e.resolve(f.v).then(function(h) {
          r("next", h, o, a);
        }, function(h) {
          r("throw", h, o, a);
        }) : e.resolve(f).then(function(h) {
          c.value = h, o(c);
        }, function(h) {
          return r("throw", h, o, a);
        });
      } catch (h) {
        a(h);
      }
    }
    var n;
    this.next || (Bu(Mu.prototype), Bu(Mu.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
      return this;
    })), Bu(this, "_invoke", function(i, s, o) {
      function a() {
        return new e(function(c, f) {
          r(i, o, c, f);
        });
      }
      return n = n ? n.then(a, a) : a();
    }, true);
  }
  ci.exports = Mu, ci.exports.__esModule = true, ci.exports.default = ci.exports;
});
var qu = j(($W, fi) => {
  A();
  x();
  I();
  var mA = Cu(), _A = Nu();
  function vA(t, e, r, n, i) {
    return new _A(mA().w(t, e, r, n), i || Promise);
  }
  fi.exports = vA, fi.exports.__esModule = true, fi.exports.default = fi.exports;
});
var hg = j((ZW, hi) => {
  A();
  x();
  I();
  var SA = qu();
  function EA(t, e, r, n, i) {
    var s = SA(t, e, r, n, i);
    return s.next().then(function(o) {
      return o.done ? o.value : s.next();
    });
  }
  hi.exports = EA, hi.exports.__esModule = true, hi.exports.default = hi.exports;
});
var dg = j((l4, di) => {
  A();
  x();
  I();
  function AA(t) {
    var e = Object(t), r = [];
    for (var n in e) r.unshift(n);
    return function i() {
      for (; r.length; ) if ((n = r.pop()) in e) return i.value = n, i.done = false, i;
      return i.done = true, i;
    };
  }
  di.exports = AA, di.exports.__esModule = true, di.exports.default = di.exports;
});
var pg = j((m4, pi) => {
  A();
  x();
  I();
  var IA = Xn().default;
  function xA(t) {
    if (t != null) {
      var e = t[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], r = 0;
      if (e) return e.call(t);
      if (typeof t.next == "function") return t;
      if (!isNaN(t.length)) return { next: function() {
        return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
      } };
    }
    throw new TypeError(IA(t) + " is not iterable");
  }
  pi.exports = xA, pi.exports.__esModule = true, pi.exports.default = pi.exports;
});
var gg = j((O4, Vt) => {
  A();
  x();
  I();
  var TA = Ru(), PA = Cu(), OA = hg(), RA = qu(), kA = Nu(), CA = dg(), yg = pg();
  function Lu() {
    "use strict";
    var t = PA(), e = t.m(Lu), r = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
    function n(o) {
      var a = typeof o == "function" && o.constructor;
      return !!a && (a === r || (a.displayName || a.name) === "GeneratorFunction");
    }
    var i = { throw: 1, return: 2, break: 3, continue: 3 };
    function s(o) {
      var a, c;
      return function(f) {
        a || (a = { stop: function() {
          return c(f.a, 2);
        }, catch: function() {
          return f.v;
        }, abrupt: function(d, m) {
          return c(f.a, i[d], m);
        }, delegateYield: function(d, m, g) {
          return a.resultName = m, c(f.d, yg(d), g);
        }, finish: function(d) {
          return c(f.f, d);
        } }, c = function(d, m, g) {
          f.p = a.prev, f.n = a.next;
          try {
            return d(m, g);
          } finally {
            a.next = f.n;
          }
        }), a.resultName && (a[a.resultName] = f.v, a.resultName = void 0), a.sent = f.v, a.next = f.n;
        try {
          return o.call(this, a);
        } finally {
          f.p = a.prev, f.n = a.next;
        }
      };
    }
    return (Vt.exports = Lu = function() {
      return { wrap: function(c, f, h, d) {
        return t.w(s(c), f, h, d && d.reverse());
      }, isGeneratorFunction: n, mark: t.m, awrap: function(c, f) {
        return new TA(c, f);
      }, AsyncIterator: kA, async: function(c, f, h, d, m) {
        return (n(f) ? RA : OA)(s(c), f, h, d, m);
      }, keys: CA, values: yg };
    }, Vt.exports.__esModule = true, Vt.exports.default = Vt.exports)();
  }
  Vt.exports = Lu, Vt.exports.__esModule = true, Vt.exports.default = Vt.exports;
});
var wg = j((D4, bg) => {
  A();
  x();
  I();
  var $o = gg()();
  bg.exports = $o;
  try {
    regeneratorRuntime = $o;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = $o : Function("r", "regeneratorRuntime = r")($o);
  }
});
var _g = j((Ho, mg) => {
  A();
  x();
  I();
  (function(t, e) {
    typeof Ho == "object" && typeof mg < "u" ? e(Ho, Pu(), tg(), ug(), cg(), wg()) : typeof define == "function" && define.amd ? define(["exports", "fast-unique-numbers", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/asyncToGenerator", "@babel/runtime/regenerator"], e) : (t = typeof globalThis < "u" ? globalThis : t || self, e(t.brokerFactory = {}, t.fastUniqueNumbers, t._defineProperty, t._slicedToArray, t._asyncToGenerator, t._regeneratorRuntime));
  })(Ho, (function(t, e, r, n, i, s) {
    "use strict";
    function o(S, b) {
      var w = Object.keys(S);
      if (Object.getOwnPropertySymbols) {
        var _ = Object.getOwnPropertySymbols(S);
        b && (_ = _.filter(function(R) {
          return Object.getOwnPropertyDescriptor(S, R).enumerable;
        })), w.push.apply(w, _);
      }
      return w;
    }
    function a(S) {
      for (var b = 1; b < arguments.length; b++) {
        var w = arguments[b] != null ? arguments[b] : {};
        b % 2 ? o(Object(w), true).forEach(function(_) {
          r(S, _, w[_]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(w)) : o(Object(w)).forEach(function(_) {
          Object.defineProperty(S, _, Object.getOwnPropertyDescriptor(w, _));
        });
      }
      return S;
    }
    var c = function(b, w, _, R) {
      return function(T) {
        var y = w(T);
        return function(O) {
          var v = b(O);
          O.addEventListener("message", function(ee) {
            var G = ee.data, V = G.id;
            if (V !== null && v.has(V)) {
              var te = v.get(V), Y = te.reject, X = te.resolve;
              v.delete(V), G.error === void 0 ? X(G.result) : Y(new Error(G.error.message));
            }
          }), R(O) && O.start();
          for (var M = function(G) {
            var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, te = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
            return new Promise(function(Y, X) {
              var ce = _(v);
              v.set(ce, { reject: X, resolve: Y }), V === null ? O.postMessage({ id: ce, method: G }, te) : O.postMessage({ id: ce, method: G, params: V }, te);
            });
          }, F = function(G, V) {
            var te = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
            O.postMessage({ id: null, method: G, params: V }, te);
          }, U = {}, Q = 0, W = Object.entries(y); Q < W.length; Q++) {
            var H = n(W[Q], 2), z = H[0], J = H[1];
            U = a(a({}, U), {}, r({}, z, J({ call: M, notify: F })));
          }
          return a({}, U);
        };
      };
    }, f = function(b) {
      return function(w) {
        if (b.has(w)) return b.get(w);
        var _ = /* @__PURE__ */ new Map();
        return b.set(w, _), _;
      };
    };
    function h(S, b) {
      var w = Object.keys(S);
      if (Object.getOwnPropertySymbols) {
        var _ = Object.getOwnPropertySymbols(S);
        b && (_ = _.filter(function(R) {
          return Object.getOwnPropertyDescriptor(S, R).enumerable;
        })), w.push.apply(w, _);
      }
      return w;
    }
    function d(S) {
      for (var b = 1; b < arguments.length; b++) {
        var w = arguments[b] != null ? arguments[b] : {};
        b % 2 ? h(Object(w), true).forEach(function(_) {
          r(S, _, w[_]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(w)) : h(Object(w)).forEach(function(_) {
          Object.defineProperty(S, _, Object.getOwnPropertyDescriptor(w, _));
        });
      }
      return S;
    }
    var m = function(b) {
      return function(w) {
        return d(d({}, w), {}, { connect: function(R) {
          var T = R.call;
          return i(s.mark(function y() {
            var O, v, M, F;
            return s.wrap(function(U) {
              for (; ; ) switch (U.prev = U.next) {
                case 0:
                  return O = new MessageChannel(), v = O.port1, M = O.port2, U.next = 1, T("connect", { port: v }, [v]);
                case 1:
                  return F = U.sent, b.set(M, F), U.abrupt("return", M);
                case 2:
                case "end":
                  return U.stop();
              }
            }, y);
          }));
        }, disconnect: function(R) {
          var T = R.call;
          return (function() {
            var y = i(s.mark(function O(v) {
              var M;
              return s.wrap(function(F) {
                for (; ; ) switch (F.prev = F.next) {
                  case 0:
                    if (M = b.get(v), M !== void 0) {
                      F.next = 1;
                      break;
                    }
                    throw new Error("The given port is not connected.");
                  case 1:
                    return F.next = 2, T("disconnect", { portId: M });
                  case 2:
                  case "end":
                    return F.stop();
                }
              }, O);
            }));
            return function(O) {
              return y.apply(this, arguments);
            };
          })();
        }, isSupported: function(R) {
          var T = R.call;
          return function() {
            return T("isSupported");
          };
        } });
      };
    }, g = function(b) {
      return typeof b.start == "function";
    }, P = c(f(/* @__PURE__ */ new WeakMap()), m(/* @__PURE__ */ new WeakMap()), e.generateUniqueNumber, g);
    t.createBroker = P;
  }));
});
var Sg = j((Vo, vg) => {
  A();
  x();
  I();
  (function(t, e) {
    typeof Vo == "object" && typeof vg < "u" ? e(Vo, _g(), Pu(), Xn()) : typeof define == "function" && define.amd ? define(["exports", "broker-factory", "fast-unique-numbers", "@babel/runtime/helpers/typeof"], e) : (t = typeof globalThis < "u" ? globalThis : t || self, e(t.workerTimersBroker = {}, t.brokerFactory, t.fastUniqueNumbers, t._typeof));
  })(Vo, (function(t, e, r, n) {
    "use strict";
    var i = function(w) {
      return function(_) {
        return function(R) {
          n(w.get(R)) === "symbol" && (w.set(R, null), _(R).then(function() {
            w.delete(R);
          }));
        };
      };
    }, s = function(w) {
      return function(_) {
        return function(R) {
          n(w.get(R)) === "symbol" && (w.set(R, null), _(R).then(function() {
            w.delete(R);
          }));
        };
      };
    }, o = function(w, _) {
      return function(R) {
        return function(T) {
          for (var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, O = arguments.length, v = new Array(O > 2 ? O - 2 : 0), M = 2; M < O; M++) v[M - 2] = arguments[M];
          var F = /* @__PURE__ */ Symbol(), U = w(_);
          _.set(U, F);
          var Q = function() {
            return R(y, U).then(function() {
              var H = _.get(U);
              if (H === void 0) throw new Error("The timer is in an undefined state.");
              H === F && (T.apply(void 0, v), _.get(U) === F && Q());
            });
          };
          return Q(), U;
        };
      };
    }, a = function(w, _) {
      return function(R) {
        return function(T) {
          for (var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, O = arguments.length, v = new Array(O > 2 ? O - 2 : 0), M = 2; M < O; M++) v[M - 2] = arguments[M];
          var F = /* @__PURE__ */ Symbol(), U = w(_);
          return _.set(U, F), R(y, U).then(function() {
            var Q = _.get(U);
            if (Q === void 0) throw new Error("The timer is in an undefined state.");
            Q === F && (_.delete(U), T.apply(void 0, v));
          }), U;
        };
      };
    }, c = /* @__PURE__ */ new Map([[0, null]]), f = /* @__PURE__ */ new Map([[0, null]]), h = i(c), d = s(f), m = o(r.generateUniqueNumber, c), g = a(r.generateUniqueNumber, f), P = e.createBroker({ clearInterval: function(w) {
      var _ = w.call;
      return h(function(R) {
        return _("clear", { timerId: R, timerType: "interval" });
      });
    }, clearTimeout: function(w) {
      var _ = w.call;
      return d(function(R) {
        return _("clear", { timerId: R, timerType: "timeout" });
      });
    }, setInterval: function(w) {
      var _ = w.call;
      return m(function(R, T) {
        return _("set", { delay: R, now: performance.timeOrigin + performance.now(), timerId: T, timerType: "interval" });
      });
    }, setTimeout: function(w) {
      var _ = w.call;
      return g(function(R, T) {
        return _("set", { delay: R, now: performance.timeOrigin + performance.now(), timerId: T, timerType: "timeout" });
      });
    } }), S = function(w) {
      var _ = new Worker(w);
      return P(_);
    };
    t.load = S, t.wrap = P;
  }));
});
var Ag = j((Go, Eg) => {
  A();
  x();
  I();
  (function(t, e) {
    typeof Go == "object" && typeof Eg < "u" ? e(Go, Sg()) : typeof define == "function" && define.amd ? define(["exports", "worker-timers-broker"], e) : (t = typeof globalThis < "u" ? globalThis : t || self, e(t.workerTimers = {}, t.workerTimersBroker));
  })(Go, (function(t, e) {
    "use strict";
    var r = function(h, d) {
      var m = null;
      return function() {
        if (m !== null) return m;
        var g = new Blob([d], { type: "application/javascript; charset=utf-8" }), P = URL.createObjectURL(g);
        return m = h(P), setTimeout(function() {
          return URL.revokeObjectURL(P);
        }), m;
      };
    }, n = `(()=>{var e={389(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,u=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<u?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*u);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,s=r(i),c=a(s,i),f=t(c);e.addUniqueNumber=f,e.generateUniqueNumber=c}(t)},623(e,t,r){!function(e,t,r,n,o){"use strict";var u={INTERNAL_ERROR:-32603,INVALID_PARAMS:-32602,METHOD_NOT_FOUND:-32601},a=function(e,t){return Object.assign(new Error(e),{status:t})},i=function(e){return a('The requested method called "'.concat(e,'" is not supported.'),u.METHOD_NOT_FOUND)},s=function(e){return a('The handler of the method called "'.concat(e,'" returned no required result.'),u.INTERNAL_ERROR)},c=function(e){return a('The handler of the method called "'.concat(e,'" returned an unexpected result.'),u.INTERNAL_ERROR)},f=function(e){return a('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),u.INVALID_PARAMS)},l=function(e,n){return function(){var o=t(r.mark(function t(o){var u,a,f,l,p,d,v,x,y,b,h,m,_,g,w;return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(u=o.data,a=u.id,f=u.method,l=u.params,p=n[f],t.prev=1,void 0!==p){t.next=2;break}throw i(f);case 2:if(void 0!==(d=void 0===l?p():p(l))){t.next=3;break}throw s(f);case 3:if(!(d instanceof Promise)){t.next=5;break}return t.next=4,d;case 4:g=t.sent,t.next=6;break;case 5:g=d;case 6:if(v=g,null!==a){t.next=8;break}if(void 0===v.result){t.next=7;break}throw c(f);case 7:t.next=10;break;case 8:if(void 0!==v.result){t.next=9;break}throw c(f);case 9:x=v.result,y=v.transferables,b=void 0===y?[]:y,e.postMessage({id:a,result:x},b);case 10:t.next=12;break;case 11:t.prev=11,w=t.catch(1),h=w.message,m=w.status,_=void 0===m?-32603:m,e.postMessage({error:{code:_,message:h},id:a});case 12:case"end":return t.stop()}},t,null,[[1,11]])}));return function(e){return o.apply(this,arguments)}}()},p=function(){return new Promise(function(e){var t=new ArrayBuffer(0),r=new MessageChannel,n=r.port1,o=r.port2;n.onmessage=function(t){var r=t.data;return e(null!==r)},o.postMessage(t,[t])})};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var x=new Map,y=function(e,n,u){return v(v({},n),{},{connect:function(t){var r=t.port;r.start();var u=e(r,n),a=o.generateUniqueNumber(x);return x.set(a,function(){u(),r.close(),x.delete(a)}),{result:a}},disconnect:function(e){var t=e.portId,r=x.get(t);if(void 0===r)throw f(t);return r(),{result:null}},isSupported:function(){var e=t(r.mark(function e(){var t,n,o;return r.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=1,p();case 1:if(!e.sent){e.next=5;break}if(!((t=u())instanceof Promise)){e.next=3;break}return e.next=2,t;case 2:o=e.sent,e.next=4;break;case 3:o=t;case 4:return n=o,e.abrupt("return",{result:n});case 5:return e.abrupt("return",{result:!1});case 6:case"end":return e.stop()}},e)}));function n(){return e.apply(this,arguments)}return n}()})},b=function(e,t){var r=y(b,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0}),n=l(e,r);return e.addEventListener("message",n),function(){return e.removeEventListener("message",n)}};e.createWorker=b,e.isSupported=p}(t,r(293),r(756),r(693),r(389))},472(e,t,r){!function(e,t,r,n){"use strict";var o=function(e,t){return function(r){var o=t.get(r);if(void 0===o)return Promise.resolve(!1);var u=n(o,2),a=u[0],i=u[1];return e(a),t.delete(r),i(!1),Promise.resolve(!0)}},u=function(e,t){var r=function(n,o,u,a){var i=n-e.now();i>0?o.set(a,[t(r,i,n,o,u,a),u]):(o.delete(a),u(!0))};return r},a=function(e,t,r,n){return function(o,u,a){var i=o+u-t.timeOrigin,s=i-t.now();return new Promise(function(t){e.set(a,[r(n,s,i,e,t,a),t])})}},i=new Map,s=o(globalThis.clearTimeout,i),c=new Map,f=o(globalThis.clearTimeout,c),l=u(performance,globalThis.setTimeout),p=a(i,performance,globalThis.setTimeout,l),d=a(c,performance,globalThis.setTimeout,l);r.createWorker(self,{clear:function(){var r=e(t.mark(function e(r){var n,o,u;return t.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.timerId,o=r.timerType,e.next=1,"interval"===o?s(n):f(n);case 1:return u=e.sent,e.abrupt("return",{result:u});case 2:case"end":return e.stop()}},e)}));function n(e){return r.apply(this,arguments)}return n}(),set:function(){var r=e(t.mark(function e(r){var n,o,u,a,i;return t.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.delay,o=r.now,u=r.timerId,a=r.timerType,e.next=1,("interval"===a?p:d)(n,o,u);case 1:return i=e.sent,e.abrupt("return",{result:i});case 2:case"end":return e.stop()}},e)}));function n(e){return r.apply(this,arguments)}return n}()})}(r(293),r(756),r(623),r(715))},172(e){e.exports=function(e,t){this.v=e,this.k=t},e.exports.__esModule=!0,e.exports.default=e.exports},79(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},987(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},293(e){function t(e,t,r,n,o,u,a){try{var i=e[u](a),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise(function(o,u){var a=e.apply(r,n);function i(e){t(a,o,u,i,s,"next",e)}function s(e){t(a,o,u,i,s,"throw",e)}i(void 0)})}},e.exports.__esModule=!0,e.exports.default=e.exports},693(e,t,r){var n=r(736);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},156(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u,a,i=[],s=!0,c=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=u.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return i}},e.exports.__esModule=!0,e.exports.default=e.exports},752(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},993(e,t,r){var n=r(546);function o(){var t,r,u="function"==typeof Symbol?Symbol:{},a=u.iterator||"@@iterator",i=u.toStringTag||"@@toStringTag";function s(e,o,u,a){var i=o&&o.prototype instanceof f?o:f,s=Object.create(i.prototype);return n(s,"_invoke",function(e,n,o){var u,a,i,s=0,f=o||[],l=!1,p={p:0,n:0,v:t,a:d,f:d.bind(t,4),d:function(e,r){return u=e,a=0,i=t,p.n=r,c}};function d(e,n){for(a=e,i=n,r=0;!l&&s&&!o&&r<f.length;r++){var o,u=f[r],d=p.p,v=u[2];e>3?(o=v===n)&&(i=u[(a=u[4])?5:(a=3,3)],u[4]=u[5]=t):u[0]<=d&&((o=e<2&&d<u[1])?(a=0,p.v=n,p.n=u[1]):d<v&&(o=e<3||u[0]>n||n>v)&&(u[4]=e,u[5]=n,p.n=v,a=0))}if(o||e>1)return c;throw l=!0,n}return function(o,f,v){if(s>1)throw TypeError("Generator is already running");for(l&&1===f&&d(f,v),a=f,i=v;(r=a<2?t:i)||!l;){u||(a?a<3?(a>1&&(p.n=-1),d(a,i)):p.n=i:p.v=i);try{if(s=2,u){if(a||(o="next"),r=u[o]){if(!(r=r.call(u,i)))throw TypeError("iterator result is not an object");if(!r.done)return r;i=r.value,a<2&&(a=0)}else 1===a&&(r=u.return)&&r.call(u),a<2&&(i=TypeError("The iterator does not provide a '"+o+"' method"),a=1);u=t}else if((r=(l=p.n<0)?i:e.call(n,p))!==c)break}catch(e){u=t,a=1,i=e}finally{s=1}}return{value:r,done:l}}}(e,u,a),!0),s}var c={};function f(){}function l(){}function p(){}r=Object.getPrototypeOf;var d=[][a]?r(r([][a]())):(n(r={},a,function(){return this}),r),v=p.prototype=f.prototype=Object.create(d);function x(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,n(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e}return l.prototype=p,n(v,"constructor",p),n(p,"constructor",l),l.displayName="GeneratorFunction",n(p,i,"GeneratorFunction"),n(v),n(v,i,"Generator"),n(v,a,function(){return this}),n(v,"toString",function(){return"[object Generator]"}),(e.exports=o=function(){return{w:s,m:x}},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},869(e,t,r){var n=r(887);e.exports=function(e,t,r,o,u){var a=n(e,t,r,o,u);return a.next().then(function(e){return e.done?e.value:a.next()})},e.exports.__esModule=!0,e.exports.default=e.exports},887(e,t,r){var n=r(993),o=r(791);e.exports=function(e,t,r,u,a){return new o(n().w(e,t,r,u),a||Promise)},e.exports.__esModule=!0,e.exports.default=e.exports},791(e,t,r){var n=r(172),o=r(546);e.exports=function e(t,r){function u(e,o,a,i){try{var s=t[e](o),c=s.value;return c instanceof n?r.resolve(c.v).then(function(e){u("next",e,a,i)},function(e){u("throw",e,a,i)}):r.resolve(c).then(function(e){s.value=e,a(s)},function(e){return u("throw",e,a,i)})}catch(e){i(e)}}var a;this.next||(o(e.prototype),o(e.prototype,"function"==typeof Symbol&&Symbol.asyncIterator||"@asyncIterator",function(){return this})),o(this,"_invoke",function(e,t,n){function o(){return new r(function(t,r){u(e,n,t,r)})}return a=a?a.then(o,o):o()},!0)},e.exports.__esModule=!0,e.exports.default=e.exports},546(e){function t(r,n,o,u){var a=Object.defineProperty;try{a({},"",{})}catch(r){a=0}e.exports=t=function(e,r,n,o){function u(r,n){t(e,r,function(e){return this._invoke(r,n,e)})}r?a?a(e,r,{value:n,enumerable:!o,configurable:!o,writable:!o}):e[r]=n:(u("next",0),u("throw",1),u("return",2))},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,n,o,u)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},373(e){e.exports=function(e){var t=Object(e),r=[];for(var n in t)r.unshift(n);return function e(){for(;r.length;)if((n=r.pop())in t)return e.value=n,e.done=!1,e;return e.done=!0,e}},e.exports.__esModule=!0,e.exports.default=e.exports},633(e,t,r){var n=r(172),o=r(993),u=r(869),a=r(887),i=r(791),s=r(373),c=r(579);function f(){"use strict";var t=o(),r=t.m(f),l=(Object.getPrototypeOf?Object.getPrototypeOf(r):r.__proto__).constructor;function p(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===l||"GeneratorFunction"===(t.displayName||t.name))}var d={throw:1,return:2,break:3,continue:3};function v(e){var t,r;return function(n){t||(t={stop:function(){return r(n.a,2)},catch:function(){return n.v},abrupt:function(e,t){return r(n.a,d[e],t)},delegateYield:function(e,o,u){return t.resultName=o,r(n.d,c(e),u)},finish:function(e){return r(n.f,e)}},r=function(e,r,o){n.p=t.prev,n.n=t.next;try{return e(r,o)}finally{t.next=n.n}}),t.resultName&&(t[t.resultName]=n.v,t.resultName=void 0),t.sent=n.v,t.next=n.n;try{return e.call(this,t)}finally{n.p=t.prev,n.n=t.next}}}return(e.exports=f=function(){return{wrap:function(e,r,n,o){return t.w(v(e),r,n,o&&o.reverse())},isGeneratorFunction:p,mark:t.m,awrap:function(e,t){return new n(e,t)},AsyncIterator:i,async:function(e,t,r,n,o){return(p(t)?a:u)(v(e),t,r,n,o)},keys:s,values:c}},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=f,e.exports.__esModule=!0,e.exports.default=e.exports},579(e,t,r){var n=r(738).default;e.exports=function(e){if(null!=e){var t=e["function"==typeof Symbol&&Symbol.iterator||"@@iterator"],r=0;if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}throw new TypeError(n(e)+" is not iterable")},e.exports.__esModule=!0,e.exports.default=e.exports},715(e,t,r){var n=r(987),o=r(156),u=r(122),a=r(752);e.exports=function(e,t){return n(e)||o(e,t)||u(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},45(e,t,r){var n=r(738).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},736(e,t,r){var n=r(738).default,o=r(45);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},738(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},122(e,t,r){var n=r(79);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},756(e,t,r){var n=r(633)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n].call(u.exports,u,u.exports,r),u.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(472)})()})();`, i = r(e.load, n), s = function(h) {
      return i().clearInterval(h);
    }, o = function(h) {
      return i().clearTimeout(h);
    }, a = function() {
      var h;
      return (h = i()).setInterval.apply(h, arguments);
    }, c = function() {
      var h;
      return (h = i()).setTimeout.apply(h, arguments);
    };
    t.clearInterval = s, t.clearTimeout = o, t.setInterval = a, t.setTimeout = c;
  }));
});
var yi = j((Fr) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Fr, "__esModule", { value: true });
  Fr.isReactNativeBrowser = Fr.isWebWorker = void 0;
  var BA = () => typeof window < "u" ? typeof navigator < "u" && navigator.userAgent?.toLowerCase().indexOf(" electron/") > -1 && N?.versions ? !Object.prototype.hasOwnProperty.call(N.versions, "electron") : typeof window.document < "u" : false, Ig = () => !!(typeof self == "object" && self?.constructor?.name?.includes("WorkerGlobalScope") && typeof Deno > "u"), xg = () => typeof navigator < "u" && navigator.product === "ReactNative", MA = BA() || Ig() || xg();
  Fr.isWebWorker = Ig();
  Fr.isReactNativeBrowser = xg();
  Fr.default = MA;
});
var Rg = j((Gt) => {
  "use strict";
  A();
  x();
  I();
  var NA = Gt && Gt.__createBinding || (Object.create ? (function(t, e, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(e, r);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[r];
    } }), Object.defineProperty(t, n, i);
  }) : (function(t, e, r, n) {
    n === void 0 && (n = r), t[n] = e[r];
  })), qA = Gt && Gt.__setModuleDefault || (Object.create ? (function(t, e) {
    Object.defineProperty(t, "default", { enumerable: true, value: e });
  }) : function(t, e) {
    t.default = e;
  }), LA = Gt && Gt.__importStar || /* @__PURE__ */ (function() {
    var t = function(e) {
      return t = Object.getOwnPropertyNames || function(r) {
        var n = [];
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[n.length] = i);
        return n;
      }, t(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (e != null) for (var n = t(e), i = 0; i < n.length; i++) n[i] !== "default" && NA(r, e, n[i]);
      return qA(r, e), r;
    };
  })();
  Object.defineProperty(Gt, "__esModule", { value: true });
  var Tg = Ag(), Uu = LA(yi()), Pg = { set: Tg.setInterval, clear: Tg.clearInterval }, Og = { set: (t, e) => setInterval(t, e), clear: (t) => clearInterval(t) }, UA = (t) => {
    switch (t) {
      case "native":
        return Og;
      case "worker":
        return Pg;
      case "auto":
      default:
        return Uu.default && !Uu.isWebWorker && !Uu.isReactNativeBrowser ? Pg : Og;
    }
  };
  Gt.default = UA;
});
var ju = j((gi) => {
  "use strict";
  A();
  x();
  I();
  var DA = gi && gi.__importDefault || function(t) {
    return t && t.__esModule ? t : { default: t };
  };
  Object.defineProperty(gi, "__esModule", { value: true });
  var jA = DA(Rg()), Du = class {
    _keepalive;
    timerId;
    timer;
    destroyed = false;
    counter;
    client;
    _keepaliveTimeoutTimestamp;
    _intervalEvery;
    get keepaliveTimeoutTimestamp() {
      return this._keepaliveTimeoutTimestamp;
    }
    get intervalEvery() {
      return this._intervalEvery;
    }
    get keepalive() {
      return this._keepalive;
    }
    constructor(e, r) {
      this.client = e, this.timer = typeof r == "object" && "set" in r && "clear" in r ? r : (0, jA.default)(r), this.setKeepalive(e.options.keepalive);
    }
    clear() {
      this.timerId && (this.timer.clear(this.timerId), this.timerId = null);
    }
    setKeepalive(e) {
      if (e *= 1e3, isNaN(e) || e <= 0 || e > 2147483647) throw new Error(`Keepalive value must be an integer between 0 and 2147483647. Provided value is ${e}`);
      this._keepalive = e, this.reschedule(), this.client.log(`KeepaliveManager: set keepalive to ${e}ms`);
    }
    destroy() {
      this.clear(), this.destroyed = true;
    }
    reschedule() {
      if (this.destroyed) return;
      this.clear(), this.counter = 0;
      let e = Math.ceil(this._keepalive * 1.5);
      this._keepaliveTimeoutTimestamp = Date.now() + e, this._intervalEvery = Math.ceil(this._keepalive / 2), this.timerId = this.timer.set(() => {
        this.destroyed || (this.counter += 1, this.counter === 2 ? this.client.sendPing() : this.counter > 2 && this.client.onKeepaliveTimeout());
      }, this._intervalEvery);
    }
  };
  gi.default = Du;
});
var zo = j((yt) => {
  "use strict";
  A();
  x();
  I();
  var FA = yt && yt.__createBinding || (Object.create ? (function(t, e, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(e, r);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[r];
    } }), Object.defineProperty(t, n, i);
  }) : (function(t, e, r, n) {
    n === void 0 && (n = r), t[n] = e[r];
  })), WA = yt && yt.__setModuleDefault || (Object.create ? (function(t, e) {
    Object.defineProperty(t, "default", { enumerable: true, value: e });
  }) : function(t, e) {
    t.default = e;
  }), Ng = yt && yt.__importStar || /* @__PURE__ */ (function() {
    var t = function(e) {
      return t = Object.getOwnPropertyNames || function(r) {
        var n = [];
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[n.length] = i);
        return n;
      }, t(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (e != null) for (var n = t(e), i = 0; i < n.length; i++) n[i] !== "default" && FA(r, e, n[i]);
      return WA(r, e), r;
    };
  })(), fr = yt && yt.__importDefault || function(t) {
    return t && t.__esModule ? t : { default: t };
  };
  Object.defineProperty(yt, "__esModule", { value: true });
  var Fu = fr(sy()), $A = or(), kg = fr(cy()), HA = fr(At()), Cg = Ng(Na()), vn = fr(Ua()), VA = fr(Ky()), GA = fr(Iu()), zA = fr(Qy()), bi = Mr(), KA = Yy(), QA = fr(ju()), Bg = Ng(yi()), Wu = globalThis.setImmediate || ((...t) => {
    let e = t.shift();
    (0, bi.nextTick)(() => {
      e(...t);
    });
  }), Mg = { keepalive: 60, reschedulePings: true, protocolId: "MQTT", protocolVersion: 4, reconnectPeriod: 1e3, connectTimeout: 30 * 1e3, clean: true, resubscribe: true, subscribeBatchSize: null, writeCache: true, timerVariant: "auto" }, $u = class t extends KA.TypedEventEmitter {
    static VERSION = bi.MQTTJS_VERSION;
    connected;
    disconnecting;
    disconnected;
    reconnecting;
    incomingStore;
    outgoingStore;
    options;
    queueQoSZero;
    _reconnectCount;
    log;
    messageIdProvider;
    outgoing;
    messageIdToTopic;
    noop;
    keepaliveManager;
    stream;
    queue;
    streamBuilder;
    _resubscribeTopics;
    connackTimer;
    reconnectTimer;
    _storeProcessing;
    _packetIdsDuringStoreProcessing;
    _storeProcessingQueue;
    _firstConnection;
    topicAliasRecv;
    topicAliasSend;
    _deferredReconnect;
    connackPacket;
    static defaultId() {
      return `mqttjs_${Math.random().toString(16).substr(2, 8)}`;
    }
    constructor(e, r) {
      super(), this.options = r || {};
      for (let n in Mg) typeof this.options[n] > "u" ? this.options[n] = Mg[n] : this.options[n] = r[n];
      this.log = this.options.log || (0, HA.default)("mqttjs:client"), this.noop = this._noop.bind(this), this.log("MqttClient :: version:", t.VERSION), Bg.isWebWorker ? this.log("MqttClient :: environment", "webworker") : this.log("MqttClient :: environment", Bg.default ? "browser" : "node"), this.log("MqttClient :: options.protocol", r.protocol), this.log("MqttClient :: options.protocolVersion", r.protocolVersion), this.log("MqttClient :: options.username", r.username), this.log("MqttClient :: options.keepalive", r.keepalive), this.log("MqttClient :: options.reconnectPeriod", r.reconnectPeriod), this.log("MqttClient :: options.rejectUnauthorized", r.rejectUnauthorized), this.log("MqttClient :: options.properties.topicAliasMaximum", r.properties ? r.properties.topicAliasMaximum : void 0), this.options.clientId = typeof r.clientId == "string" ? r.clientId : t.defaultId(), this.log("MqttClient :: clientId", this.options.clientId), this.options.customHandleAcks = r.protocolVersion === 5 && r.customHandleAcks ? r.customHandleAcks : (...n) => {
        n[3](null, 0);
      }, this.options.writeCache || (Fu.default.writeToStream.cacheNumbers = false), this.streamBuilder = e, this.messageIdProvider = typeof this.options.messageIdProvider > "u" ? new GA.default() : this.options.messageIdProvider, this.outgoingStore = r.outgoingStore || new vn.default(), this.incomingStore = r.incomingStore || new vn.default(), this.queueQoSZero = r.queueQoSZero === void 0 ? true : r.queueQoSZero, this._resubscribeTopics = {}, this.messageIdToTopic = {}, this.keepaliveManager = null, this.connected = false, this.disconnecting = false, this.reconnecting = false, this.queue = [], this.connackTimer = null, this.reconnectTimer = null, this._storeProcessing = false, this._packetIdsDuringStoreProcessing = {}, this._storeProcessingQueue = [], this.outgoing = {}, this._firstConnection = true, r.properties && r.properties.topicAliasMaximum > 0 && (r.properties.topicAliasMaximum > 65535 ? this.log("MqttClient :: options.properties.topicAliasMaximum is out of range") : this.topicAliasRecv = new zA.default(r.properties.topicAliasMaximum)), this.on("connect", () => {
        let { queue: n } = this, i = () => {
          let s = n.shift();
          this.log("deliver :: entry %o", s);
          let o = null;
          if (!s) {
            this._resubscribe();
            return;
          }
          o = s.packet, this.log("deliver :: call _sendPacket for %o", o);
          let a = true;
          o.messageId && o.messageId !== 0 && (this.messageIdProvider.register(o.messageId) || (a = false)), a ? this._sendPacket(o, (c) => {
            s.cb && s.cb(c), i();
          }) : (this.log("messageId: %d has already used. The message is skipped and removed.", o.messageId), i());
        };
        this.log("connect :: sending queued packets"), i();
      }), this.on("close", () => {
        this.log("close :: connected set to `false`"), this.connected = false, this.log("close :: clearing connackTimer"), clearTimeout(this.connackTimer), this._destroyKeepaliveManager(), this.topicAliasRecv && this.topicAliasRecv.clear(), this.log("close :: calling _setupReconnect"), this._setupReconnect();
      }), this.options.manualConnect || (this.log("MqttClient :: setting up stream"), this.connect());
    }
    handleAuth(e, r) {
      r();
    }
    handleMessage(e, r) {
      r();
    }
    _nextId() {
      return this.messageIdProvider.allocate();
    }
    getLastMessageId() {
      return this.messageIdProvider.getLastAllocated();
    }
    connect() {
      let e = new $A.Writable(), r = Fu.default.parser(this.options), n = null, i = [];
      this.log("connect :: calling method to clear reconnect"), this._clearReconnect(), this.disconnected && !this.reconnecting && (this.incomingStore = this.options.incomingStore || new vn.default(), this.outgoingStore = this.options.outgoingStore || new vn.default(), this.disconnecting = false, this.disconnected = false), this.log("connect :: using streamBuilder provided to client to create stream"), this.stream = this.streamBuilder(this), r.on("packet", (f) => {
        this.log("parser :: on packet push to packets array."), i.push(f);
      });
      let s = () => {
        this.log("work :: getting next packet in queue");
        let f = i.shift();
        if (f) this.log("work :: packet pulled from queue"), (0, VA.default)(this, f, o);
        else {
          this.log("work :: no packets in queue");
          let h = n;
          n = null, this.log("work :: done flag is %s", !!h), h && h();
        }
      }, o = () => {
        if (i.length) (0, bi.nextTick)(s);
        else {
          let f = n;
          n = null, f();
        }
      };
      e._write = (f, h, d) => {
        n = d, this.log("writable stream :: parsing buffer"), r.parse(f), s();
      };
      let a = (f) => {
        this.log("streamErrorHandler :: error", f.message), f.code ? (this.log("streamErrorHandler :: emitting error"), this.emit("error", f)) : this.noop(f);
      };
      this.log("connect :: pipe stream to writable stream"), this.stream.pipe(e), this.stream.on("error", a), this.stream.on("close", () => {
        this.log("(%s)stream :: on close", this.options.clientId), this._flushVolatile(), this.log("stream: emit close to MqttClient"), this.emit("close");
      }), this.log("connect: sending packet `connect`");
      let c = { cmd: "connect", protocolId: this.options.protocolId, protocolVersion: this.options.protocolVersion, clean: this.options.clean, clientId: this.options.clientId, keepalive: this.options.keepalive, username: this.options.username, password: this.options.password, properties: this.options.properties };
      if (this.options.will && (c.will = __spreadProps(__spreadValues({}, this.options.will), { payload: this.options.will?.payload })), this.topicAliasRecv && (c.properties || (c.properties = {}), this.topicAliasRecv && (c.properties.topicAliasMaximum = this.topicAliasRecv.max)), this._writePacket(c), r.on("error", this.emit.bind(this, "error")), this.options.properties) {
        if (!this.options.properties.authenticationMethod && this.options.properties.authenticationData) return this.end(() => this.emit("error", new Error("Packet has no Authentication Method"))), this;
        if (this.options.properties.authenticationMethod && this.options.authPacket && typeof this.options.authPacket == "object") {
          let f = __spreadValues({ cmd: "auth", reasonCode: 0 }, this.options.authPacket);
          this._writePacket(f);
        }
      }
      return this.stream.setMaxListeners(1e3), clearTimeout(this.connackTimer), this.connackTimer = setTimeout(() => {
        this.log("!!connectTimeout hit!! Calling _cleanUp with force `true`"), this.emit("error", new Error("connack timeout")), this._cleanUp(true);
      }, this.options.connectTimeout), this;
    }
    publish(e, r, n, i) {
      this.log("publish :: message `%s` to topic `%s`", r, e);
      let { options: s } = this;
      typeof n == "function" && (i = n, n = null), n = n || {}, n = __spreadValues(__spreadValues({}, { qos: 0, retain: false, dup: false }), n);
      let { qos: a, retain: c, dup: f, properties: h, cbStorePut: d } = n;
      if (this._checkDisconnecting(i)) return this;
      let m = () => {
        let g = 0;
        if ((a === 1 || a === 2) && (g = this._nextId(), g === null)) return this.log("No messageId left"), false;
        let P = { cmd: "publish", topic: e, payload: r, qos: a, retain: c, messageId: g, dup: f };
        switch (s.protocolVersion === 5 && (P.properties = h), this.log("publish :: qos", a), a) {
          case 1:
          case 2:
            this.outgoing[P.messageId] = { volatile: false, cb: i || this.noop }, this.log("MqttClient:publish: packet cmd: %s", P.cmd), this._sendPacket(P, void 0, d);
            break;
          default:
            this.log("MqttClient:publish: packet cmd: %s", P.cmd), this._sendPacket(P, i, d);
            break;
        }
        return true;
      };
      return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !m()) && this._storeProcessingQueue.push({ invoke: m, cbStorePut: n.cbStorePut, callback: i }), this;
    }
    publishAsync(e, r, n) {
      return new Promise((i, s) => {
        this.publish(e, r, n, (o, a) => {
          o ? s(o) : i(a);
        });
      });
    }
    subscribe(e, r, n) {
      let i = this.options.protocolVersion;
      typeof r == "function" && (n = r), n = n || this.noop;
      let s = false, o = [];
      typeof e == "string" ? (e = [e], o = e) : Array.isArray(e) ? o = e : typeof e == "object" && (s = e.resubscribe, delete e.resubscribe, o = Object.keys(e));
      let a = Cg.validateTopics(o);
      if (a !== null) return Wu(n, new Error(`Invalid topic ${a}`)), this;
      if (this._checkDisconnecting(n)) return this.log("subscribe: discconecting true"), this;
      let c = { qos: 0 };
      i === 5 && (c.nl = false, c.rap = false, c.rh = 0), r = __spreadValues(__spreadValues({}, c), r);
      let { properties: f } = r, h = [], d = (P, S) => {
        if (S = S || r, !Object.prototype.hasOwnProperty.call(this._resubscribeTopics, P) || this._resubscribeTopics[P].qos < S.qos || s) {
          let b = { topic: P, qos: S.qos };
          i === 5 && (b.nl = S.nl, b.rap = S.rap, b.rh = S.rh, b.properties = f), this.log("subscribe: pushing topic `%s` and qos `%s` to subs list", b.topic, b.qos), h.push(b);
        }
      };
      if (Array.isArray(e) ? e.forEach((P) => {
        this.log("subscribe: array topic %s", P), d(P);
      }) : Object.keys(e).forEach((P) => {
        this.log("subscribe: object topic %s, %o", P, e[P]), d(P, e[P]);
      }), !h.length) return n(null, []), this;
      let m = (P, S) => {
        let b = { cmd: "subscribe", subscriptions: P, messageId: S };
        if (f && (b.properties = f), this.options.resubscribe) {
          this.log("subscribe :: resubscribe true");
          let _ = [];
          P.forEach((R) => {
            if (this.options.reconnectPeriod > 0) {
              let T = { qos: R.qos };
              i === 5 && (T.nl = R.nl || false, T.rap = R.rap || false, T.rh = R.rh || 0, T.properties = R.properties), this._resubscribeTopics[R.topic] = T, _.push(R.topic);
            }
          }), this.messageIdToTopic[b.messageId] = _;
        }
        let w = new Promise((_, R) => {
          this.outgoing[b.messageId] = { volatile: true, cb(T, y) {
            if (!T) {
              let { granted: O } = y;
              for (let v = 0; v < O.length; v += 1) P[v].qos = O[v];
            }
            T ? R(new bi.ErrorWithSubackPacket(T.message, y)) : _(y);
          } };
        });
        return this.log("subscribe :: call _sendPacket"), this._sendPacket(b), w;
      }, g = () => {
        let P = this.options.subscribeBatchSize ?? h.length, S = [];
        for (let b = 0; b < h.length; b += P) {
          let w = h.slice(b, b + P), _ = this._nextId();
          if (_ === null) return this.log("No messageId left"), false;
          S.push(m(w, _));
        }
        return Promise.all(S).then((b) => {
          n(null, h, b.at(-1));
        }).catch((b) => {
          n(b, h, b.packet);
        }), true;
      };
      return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !g()) && this._storeProcessingQueue.push({ invoke: g, callback: n }), this;
    }
    subscribeAsync(e, r) {
      return new Promise((n, i) => {
        this.subscribe(e, r, (s, o) => {
          s ? i(s) : n(o);
        });
      });
    }
    unsubscribe(e, r, n) {
      typeof e == "string" && (e = [e]), typeof r == "function" && (n = r), n = n || this.noop;
      let i = Cg.validateTopics(e);
      if (i !== null) return Wu(n, new Error(`Invalid topic ${i}`)), this;
      if (this._checkDisconnecting(n)) return this;
      let s = () => {
        let o = this._nextId();
        if (o === null) return this.log("No messageId left"), false;
        let a = { cmd: "unsubscribe", messageId: o, unsubscriptions: [] };
        return typeof e == "string" ? a.unsubscriptions = [e] : Array.isArray(e) && (a.unsubscriptions = e), this.options.resubscribe && a.unsubscriptions.forEach((c) => {
          delete this._resubscribeTopics[c];
        }), typeof r == "object" && r.properties && (a.properties = r.properties), this.outgoing[a.messageId] = { volatile: true, cb: n }, this.log("unsubscribe: call _sendPacket"), this._sendPacket(a), true;
      };
      return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !s()) && this._storeProcessingQueue.push({ invoke: s, callback: n }), this;
    }
    unsubscribeAsync(e, r) {
      return new Promise((n, i) => {
        this.unsubscribe(e, r, (s, o) => {
          s ? i(s) : n(o);
        });
      });
    }
    end(e, r, n) {
      this.log("end :: (%s)", this.options.clientId), (e == null || typeof e != "boolean") && (n = n || r, r = e, e = false), typeof r != "object" && (n = n || r, r = null), this.log("end :: cb? %s", !!n), (!n || typeof n != "function") && (n = this.noop);
      let i = () => {
        this.log("end :: closeStores: closing incoming and outgoing stores"), this.disconnected = true, this.incomingStore.close((o) => {
          this.outgoingStore.close((a) => {
            if (this.log("end :: closeStores: emitting end"), this.emit("end"), n) {
              let c = o || a;
              this.log("end :: closeStores: invoking callback with args"), n(c);
            }
          });
        }), this._deferredReconnect ? this._deferredReconnect() : (this.options.reconnectPeriod === 0 || this.options.manualConnect) && (this.disconnecting = false);
      }, s = () => {
        this.log("end :: (%s) :: finish :: calling _cleanUp with force %s", this.options.clientId, e), this._cleanUp(e, () => {
          this.log("end :: finish :: calling process.nextTick on closeStores"), (0, bi.nextTick)(i);
        }, r);
      };
      return this.disconnecting ? (n(), this) : (this._clearReconnect(), this.disconnecting = true, !e && Object.keys(this.outgoing).length > 0 ? (this.log("end :: (%s) :: calling finish in 10ms once outgoing is empty", this.options.clientId), this.once("outgoingEmpty", setTimeout.bind(null, s, 10))) : (this.log("end :: (%s) :: immediately calling finish", this.options.clientId), s()), this);
    }
    endAsync(e, r) {
      return new Promise((n, i) => {
        this.end(e, r, (s) => {
          s ? i(s) : n();
        });
      });
    }
    removeOutgoingMessage(e) {
      if (this.outgoing[e]) {
        let { cb: r } = this.outgoing[e];
        this._removeOutgoingAndStoreMessage(e, () => {
          r(new Error("Message removed"));
        });
      }
      return this;
    }
    reconnect(e) {
      this.log("client reconnect");
      let r = () => {
        e ? (this.options.incomingStore = e.incomingStore, this.options.outgoingStore = e.outgoingStore) : (this.options.incomingStore = null, this.options.outgoingStore = null), this.incomingStore = this.options.incomingStore || new vn.default(), this.outgoingStore = this.options.outgoingStore || new vn.default(), this.disconnecting = false, this.disconnected = false, this._deferredReconnect = null, this._reconnect();
      };
      return this.disconnecting && !this.disconnected ? this._deferredReconnect = r : r(), this;
    }
    _flushVolatile() {
      this.outgoing && (this.log("_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"), Object.keys(this.outgoing).forEach((e) => {
        this.outgoing[e].volatile && typeof this.outgoing[e].cb == "function" && (this.outgoing[e].cb(new Error("Connection closed")), delete this.outgoing[e]);
      }));
    }
    _flush() {
      this.outgoing && (this.log("_flush: queue exists? %b", !!this.outgoing), Object.keys(this.outgoing).forEach((e) => {
        typeof this.outgoing[e].cb == "function" && (this.outgoing[e].cb(new Error("Connection closed")), delete this.outgoing[e]);
      }));
    }
    _removeTopicAliasAndRecoverTopicName(e) {
      let r;
      e.properties && (r = e.properties.topicAlias);
      let n = e.topic.toString();
      if (this.log("_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o", r, n), n.length === 0) {
        if (typeof r > "u") return new Error("Unregistered Topic Alias");
        if (n = this.topicAliasSend.getTopicByAlias(r), typeof n > "u") return new Error("Unregistered Topic Alias");
        e.topic = n;
      }
      r && delete e.properties.topicAlias;
    }
    _checkDisconnecting(e) {
      return this.disconnecting && (e && e !== this.noop ? e(new Error("client disconnecting")) : this.emit("error", new Error("client disconnecting"))), this.disconnecting;
    }
    _reconnect() {
      this.log("_reconnect: emitting reconnect to client"), this.emit("reconnect"), this.connected ? (this.end(() => {
        this.connect();
      }), this.log("client already connected. disconnecting first.")) : (this.log("_reconnect: calling connect"), this.connect());
    }
    _setupReconnect() {
      !this.disconnecting && !this.reconnectTimer && this.options.reconnectPeriod > 0 ? (this.reconnecting || (this.log("_setupReconnect :: emit `offline` state"), this.emit("offline"), this.log("_setupReconnect :: set `reconnecting` to `true`"), this.reconnecting = true), this.log("_setupReconnect :: setting reconnectTimer for %d ms", this.options.reconnectPeriod), this.reconnectTimer = setInterval(() => {
        this.log("reconnectTimer :: reconnect triggered!"), this._reconnect();
      }, this.options.reconnectPeriod)) : this.log("_setupReconnect :: doing nothing...");
    }
    _clearReconnect() {
      this.log("_clearReconnect : clearing reconnect timer"), this.reconnectTimer && (clearInterval(this.reconnectTimer), this.reconnectTimer = null);
    }
    _cleanUp(e, r, n = {}) {
      if (r && (this.log("_cleanUp :: done callback provided for on stream close"), this.stream.on("close", r)), this.log("_cleanUp :: forced? %s", e), e) this.options.reconnectPeriod === 0 && this.options.clean && this._flush(), this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId), this.stream.destroy();
      else {
        let i = __spreadValues({ cmd: "disconnect" }, n);
        this.log("_cleanUp :: (%s) :: call _sendPacket with disconnect packet", this.options.clientId), this._sendPacket(i, () => {
          this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId), Wu(() => {
            this.stream.end(() => {
              this.log("_cleanUp :: (%s) :: stream destroyed", this.options.clientId);
            });
          });
        });
      }
      !this.disconnecting && !this.reconnecting && (this.log("_cleanUp :: client not disconnecting/reconnecting. Clearing and resetting reconnect."), this._clearReconnect(), this._setupReconnect()), this._destroyKeepaliveManager(), r && !this.connected && (this.log("_cleanUp :: (%s) :: removing stream `done` callback `close` listener", this.options.clientId), this.stream.removeListener("close", r), r());
    }
    _storeAndSend(e, r, n) {
      this.log("storeAndSend :: store packet with cmd %s to outgoingStore", e.cmd);
      let i = e, s;
      if (i.cmd === "publish" && (i = (0, kg.default)(e), s = this._removeTopicAliasAndRecoverTopicName(i), s)) return r && r(s);
      this.outgoingStore.put(i, (o) => {
        if (o) return r && r(o);
        n(), this._writePacket(e, r);
      });
    }
    _applyTopicAlias(e) {
      if (this.options.protocolVersion === 5 && e.cmd === "publish") {
        let r;
        e.properties && (r = e.properties.topicAlias);
        let n = e.topic.toString();
        if (this.topicAliasSend) if (r) {
          if (n.length !== 0 && (this.log("applyTopicAlias :: register topic: %s - alias: %d", n, r), !this.topicAliasSend.put(n, r))) return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", n, r), new Error("Sending Topic Alias out of range");
        } else n.length !== 0 && (this.options.autoAssignTopicAlias ? (r = this.topicAliasSend.getAliasByTopic(n), r ? (e.topic = "", e.properties = __spreadProps(__spreadValues({}, e.properties), { topicAlias: r }), this.log("applyTopicAlias :: auto assign(use) topic: %s - alias: %d", n, r)) : (r = this.topicAliasSend.getLruAlias(), this.topicAliasSend.put(n, r), e.properties = __spreadProps(__spreadValues({}, e.properties), { topicAlias: r }), this.log("applyTopicAlias :: auto assign topic: %s - alias: %d", n, r))) : this.options.autoUseTopicAlias && (r = this.topicAliasSend.getAliasByTopic(n), r && (e.topic = "", e.properties = __spreadProps(__spreadValues({}, e.properties), { topicAlias: r }), this.log("applyTopicAlias :: auto use topic: %s - alias: %d", n, r))));
        else if (r) return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", n, r), new Error("Sending Topic Alias out of range");
      }
    }
    _noop(e) {
      this.log("noop ::", e);
    }
    _writePacket(e, r) {
      this.log("_writePacket :: packet: %O", e), this.log("_writePacket :: emitting `packetsend`"), this.emit("packetsend", e), this.log("_writePacket :: writing to stream");
      let n = Fu.default.writeToStream(e, this.stream, this.options);
      this.log("_writePacket :: writeToStream result %s", n), !n && r && r !== this.noop ? (this.log("_writePacket :: handle events on `drain` once through callback."), this.stream.once("drain", r)) : r && (this.log("_writePacket :: invoking cb"), r());
    }
    _sendPacket(e, r, n, i) {
      this.log("_sendPacket :: (%s) ::  start", this.options.clientId), n = n || this.noop, r = r || this.noop;
      let s = this._applyTopicAlias(e);
      if (s) {
        r(s);
        return;
      }
      if (!this.connected) {
        if (e.cmd === "auth") {
          this._writePacket(e, r);
          return;
        }
        this.log("_sendPacket :: client not connected. Storing packet offline."), this._storePacket(e, r, n);
        return;
      }
      if (i) {
        this._writePacket(e, r);
        return;
      }
      switch (e.cmd) {
        case "publish":
          break;
        case "pubrel":
          this._storeAndSend(e, r, n);
          return;
        default:
          this._writePacket(e, r);
          return;
      }
      switch (e.qos) {
        case 2:
        case 1:
          this._storeAndSend(e, r, n);
          break;
        case 0:
        default:
          this._writePacket(e, r);
          break;
      }
      this.log("_sendPacket :: (%s) ::  end", this.options.clientId);
    }
    _storePacket(e, r, n) {
      this.log("_storePacket :: packet: %o", e), this.log("_storePacket :: cb? %s", !!r), n = n || this.noop;
      let i = e;
      if (i.cmd === "publish") {
        i = (0, kg.default)(e);
        let o = this._removeTopicAliasAndRecoverTopicName(i);
        if (o) return r && r(o);
      }
      let s = i.qos || 0;
      s === 0 && this.queueQoSZero || i.cmd !== "publish" ? this.queue.push({ packet: i, cb: r }) : s > 0 ? (r = this.outgoing[i.messageId] ? this.outgoing[i.messageId].cb : null, this.outgoingStore.put(i, (o) => {
        if (o) return r && r(o);
        n();
      })) : r && r(new Error("No connection to broker"));
    }
    _setupKeepaliveManager() {
      this.log("_setupKeepaliveManager :: keepalive %d (seconds)", this.options.keepalive), !this.keepaliveManager && this.options.keepalive && (this.keepaliveManager = new QA.default(this, this.options.timerVariant));
    }
    _destroyKeepaliveManager() {
      this.keepaliveManager && (this.log("_destroyKeepaliveManager :: destroying keepalive manager"), this.keepaliveManager.destroy(), this.keepaliveManager = null);
    }
    reschedulePing(e = false) {
      this.keepaliveManager && this.options.keepalive && (e || this.options.reschedulePings) && this._reschedulePing();
    }
    _reschedulePing() {
      this.log("_reschedulePing :: rescheduling ping"), this.keepaliveManager.reschedule();
    }
    sendPing() {
      this.log("_sendPing :: sending pingreq"), this._sendPacket({ cmd: "pingreq" });
    }
    onKeepaliveTimeout() {
      this.emit("error", new Error("Keepalive timeout")), this.log("onKeepaliveTimeout :: calling _cleanUp with force true"), this._cleanUp(true);
    }
    _resubscribe() {
      this.log("_resubscribe");
      let e = Object.keys(this._resubscribeTopics);
      if (!this._firstConnection && (this.options.clean || this.options.protocolVersion >= 4 && !this.connackPacket.sessionPresent) && e.length > 0) if (this.options.resubscribe) if (this.options.protocolVersion === 5) {
        this.log("_resubscribe: protocolVersion 5");
        for (let r = 0; r < e.length; r++) {
          let n = {};
          n[e[r]] = this._resubscribeTopics[e[r]], n.resubscribe = true, this.subscribe(n, { properties: n[e[r]].properties });
        }
      } else this._resubscribeTopics.resubscribe = true, this.subscribe(this._resubscribeTopics);
      else this._resubscribeTopics = {};
      this._firstConnection = false;
    }
    _onConnect(e) {
      if (this.disconnected) {
        this.emit("connect", e);
        return;
      }
      this.connackPacket = e, this.messageIdProvider.clear(), this._setupKeepaliveManager(), this.connected = true;
      let r = () => {
        let n = this.outgoingStore.createStream(), i = () => {
          n.destroy(), n = null, this._flushStoreProcessingQueue(), s();
        }, s = () => {
          this._storeProcessing = false, this._packetIdsDuringStoreProcessing = {};
        };
        this.once("close", i), n.on("error", (a) => {
          s(), this._flushStoreProcessingQueue(), this.removeListener("close", i), this.emit("error", a);
        });
        let o = () => {
          if (!n) return;
          let a = n.read(1), c;
          if (!a) {
            n.once("readable", o);
            return;
          }
          if (this._storeProcessing = true, this._packetIdsDuringStoreProcessing[a.messageId]) {
            o();
            return;
          }
          !this.disconnecting && !this.reconnectTimer ? (c = this.outgoing[a.messageId] ? this.outgoing[a.messageId].cb : null, this.outgoing[a.messageId] = { volatile: false, cb(f, h) {
            c && c(f, h), o();
          } }, this._packetIdsDuringStoreProcessing[a.messageId] = true, this.messageIdProvider.register(a.messageId) ? this._sendPacket(a, void 0, void 0, true) : this.log("messageId: %d has already used.", a.messageId)) : n.destroy && n.destroy();
        };
        n.on("end", () => {
          let a = true;
          for (let c in this._packetIdsDuringStoreProcessing) if (!this._packetIdsDuringStoreProcessing[c]) {
            a = false;
            break;
          }
          this.removeListener("close", i), a ? (s(), this._invokeAllStoreProcessingQueue(), this.emit("connect", e)) : r();
        }), o();
      };
      r();
    }
    _invokeStoreProcessingQueue() {
      if (!this._storeProcessing && this._storeProcessingQueue.length > 0) {
        let e = this._storeProcessingQueue[0];
        if (e && e.invoke()) return this._storeProcessingQueue.shift(), true;
      }
      return false;
    }
    _invokeAllStoreProcessingQueue() {
      for (; this._invokeStoreProcessingQueue(); ) ;
    }
    _flushStoreProcessingQueue() {
      for (let e of this._storeProcessingQueue) e.cbStorePut && e.cbStorePut(new Error("Connection closed")), e.callback && e.callback(new Error("Connection closed"));
      this._storeProcessingQueue.splice(0);
    }
    _removeOutgoingAndStoreMessage(e, r) {
      delete this.outgoing[e], this.outgoingStore.del({ messageId: e }, (n, i) => {
        r(n, i), this.messageIdProvider.deallocate(e), this._invokeStoreProcessingQueue();
      });
    }
  };
  yt.default = $u;
});
var qg = j((Vu) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Vu, "__esModule", { value: true });
  var YA = mu(), Hu = class {
    numberAllocator;
    lastId;
    constructor() {
      this.numberAllocator = new YA.NumberAllocator(1, 65535);
    }
    allocate() {
      return this.lastId = this.numberAllocator.alloc(), this.lastId;
    }
    getLastAllocated() {
      return this.lastId;
    }
    register(e) {
      return this.numberAllocator.use(e);
    }
    deallocate(e) {
      this.numberAllocator.free(e);
    }
    clear() {
      this.numberAllocator.clear();
    }
  };
  Vu.default = Hu;
});
function JA() {
  if (Lg) return Gu;
  Lg = true;
  let t = 2147483647, e = 36, r = 1, n = 26, i = 38, s = 700, o = 72, a = 128, c = "-", f = /^xn--/, h = /[^\0-\x7F]/, d = /[\x2E\u3002\uFF0E\uFF61]/g, m = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, g = e - r, P = Math.floor, S = String.fromCharCode;
  function b(H) {
    throw new RangeError(m[H]);
  }
  function w(H, z) {
    let J = [], ee = H.length;
    for (; ee--; ) J[ee] = z(H[ee]);
    return J;
  }
  function _(H, z) {
    let J = H.split("@"), ee = "";
    J.length > 1 && (ee = J[0] + "@", H = J[1]), H = H.replace(d, ".");
    let G = H.split("."), V = w(G, z).join(".");
    return ee + V;
  }
  function R(H) {
    let z = [], J = 0, ee = H.length;
    for (; J < ee; ) {
      let G = H.charCodeAt(J++);
      if (G >= 55296 && G <= 56319 && J < ee) {
        let V = H.charCodeAt(J++);
        (V & 64512) == 56320 ? z.push(((G & 1023) << 10) + (V & 1023) + 65536) : (z.push(G), J--);
      } else z.push(G);
    }
    return z;
  }
  let T = (H) => String.fromCodePoint(...H), y = function(H) {
    return H >= 48 && H < 58 ? 26 + (H - 48) : H >= 65 && H < 91 ? H - 65 : H >= 97 && H < 123 ? H - 97 : e;
  }, O = function(H, z) {
    return H + 22 + 75 * (H < 26) - ((z != 0) << 5);
  }, v = function(H, z, J) {
    let ee = 0;
    for (H = J ? P(H / s) : H >> 1, H += P(H / z); H > g * n >> 1; ee += e) H = P(H / g);
    return P(ee + (g + 1) * H / (H + i));
  }, M = function(H) {
    let z = [], J = H.length, ee = 0, G = a, V = o, te = H.lastIndexOf(c);
    te < 0 && (te = 0);
    for (let Y = 0; Y < te; ++Y) H.charCodeAt(Y) >= 128 && b("not-basic"), z.push(H.charCodeAt(Y));
    for (let Y = te > 0 ? te + 1 : 0; Y < J; ) {
      let X = ee;
      for (let Z = 1, ne = e; ; ne += e) {
        Y >= J && b("invalid-input");
        let he = y(H.charCodeAt(Y++));
        he >= e && b("invalid-input"), he > P((t - ee) / Z) && b("overflow"), ee += he * Z;
        let be = ne <= V ? r : ne >= V + n ? n : ne - V;
        if (he < be) break;
        let ye = e - be;
        Z > P(t / ye) && b("overflow"), Z *= ye;
      }
      let ce = z.length + 1;
      V = v(ee - X, ce, X == 0), P(ee / ce) > t - G && b("overflow"), G += P(ee / ce), ee %= ce, z.splice(ee++, 0, G);
    }
    return String.fromCodePoint(...z);
  }, F = function(H) {
    let z = [];
    H = R(H);
    let J = H.length, ee = a, G = 0, V = o;
    for (let X of H) X < 128 && z.push(S(X));
    let te = z.length, Y = te;
    for (te && z.push(c); Y < J; ) {
      let X = t;
      for (let Z of H) Z >= ee && Z < X && (X = Z);
      let ce = Y + 1;
      X - ee > P((t - G) / ce) && b("overflow"), G += (X - ee) * ce, ee = X;
      for (let Z of H) if (Z < ee && ++G > t && b("overflow"), Z === ee) {
        let ne = G;
        for (let he = e; ; he += e) {
          let be = he <= V ? r : he >= V + n ? n : he - V;
          if (ne < be) break;
          let ye = ne - be, Ae = e - be;
          z.push(S(O(be + ye % Ae, 0))), ne = P(ye / Ae);
        }
        z.push(S(O(ne, 0))), V = v(G, ce, Y === te), G = 0, ++Y;
      }
      ++G, ++ee;
    }
    return z.join("");
  };
  return Gu = { version: "2.3.1", ucs2: { decode: R, encode: T }, decode: M, encode: F, toASCII: function(H) {
    return _(H, function(z) {
      return h.test(z) ? "xn--" + F(z) : z;
    });
  }, toUnicode: function(H) {
    return _(H, function(z) {
      return f.test(z) ? M(z.slice(4).toLowerCase()) : z;
    });
  } }, Gu;
}
var Gu;
var Lg;
var hr;
var w5;
var m5;
var _5;
var v5;
var S5;
var E5;
var Ug = ze(() => {
  A();
  x();
  I();
  Gu = {}, Lg = false;
  hr = JA(), w5 = hr.decode, m5 = hr.encode, _5 = hr.toASCII, v5 = hr.toUnicode, S5 = hr.ucs2, E5 = hr.version;
});
function XA() {
  return Dg || (Dg = true, zu = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return false;
    if (typeof Symbol.iterator == "symbol") return true;
    var e = {}, r = /* @__PURE__ */ Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return false;
    var i = 42;
    e[r] = i;
    for (r in e) return false;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return false;
    var s = Object.getOwnPropertySymbols(e);
    if (s.length !== 1 || s[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r)) return false;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var o = Object.getOwnPropertyDescriptor(e, r);
      if (o.value !== i || o.enumerable !== true) return false;
    }
    return true;
  }), zu;
}
function ZA() {
  return jg || (jg = true, Ku = Error), Ku;
}
function eI() {
  return Fg || (Fg = true, Qu = EvalError), Qu;
}
function tI() {
  return Wg || (Wg = true, Yu = RangeError), Yu;
}
function rI() {
  return $g || ($g = true, Ju = ReferenceError), Ju;
}
function sb() {
  return Hg || (Hg = true, Xu = SyntaxError), Xu;
}
function Sn() {
  return Vg || (Vg = true, Zu = TypeError), Zu;
}
function nI() {
  return Gg || (Gg = true, el = URIError), el;
}
function iI() {
  if (zg) return tl;
  zg = true;
  var t = typeof Symbol < "u" && Symbol, e = XA();
  return tl = function() {
    return typeof t != "function" || typeof Symbol != "function" || typeof t("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? false : e();
  }, tl;
}
function oI() {
  if (Kg) return rl;
  Kg = true;
  var t = { __proto__: null, foo: {} }, e = Object;
  return rl = function() {
    return { __proto__: t }.foo === t.foo && !(t instanceof e);
  }, rl;
}
function sI() {
  if (Qg) return nl;
  Qg = true;
  var t = "Function.prototype.bind called on incompatible ", e = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(c, f) {
    for (var h = [], d = 0; d < c.length; d += 1) h[d] = c[d];
    for (var m = 0; m < f.length; m += 1) h[m + c.length] = f[m];
    return h;
  }, s = function(c, f) {
    for (var h = [], d = f, m = 0; d < c.length; d += 1, m += 1) h[m] = c[d];
    return h;
  }, o = function(a, c) {
    for (var f = "", h = 0; h < a.length; h += 1) f += a[h], h + 1 < a.length && (f += c);
    return f;
  };
  return nl = function(c) {
    var f = this;
    if (typeof f != "function" || e.apply(f) !== n) throw new TypeError(t + f);
    for (var h = s(arguments, 1), d, m = function() {
      if (this instanceof d) {
        var w = f.apply(this, i(h, arguments));
        return Object(w) === w ? w : this;
      }
      return f.apply(c, i(h, arguments));
    }, g = r(0, f.length - h.length), P = [], S = 0; S < g; S++) P[S] = "$" + S;
    if (d = Function("binder", "return function (" + o(P, ",") + "){ return binder.apply(this,arguments); }")(m), f.prototype) {
      var b = function() {
      };
      b.prototype = f.prototype, d.prototype = new b(), b.prototype = null;
    }
    return d;
  }, nl;
}
function dl() {
  if (Yg) return il;
  Yg = true;
  var t = sI();
  return il = Function.prototype.bind || t, il;
}
function aI() {
  if (Jg) return ol;
  Jg = true;
  var t = Function.prototype.call, e = Object.prototype.hasOwnProperty, r = dl();
  return ol = r.call(t, e), ol;
}
function Wr() {
  if (Xg) return sl;
  Xg = true;
  var t, e = ZA(), r = eI(), n = tI(), i = rI(), s = sb(), o = Sn(), a = nI(), c = Function, f = function(G) {
    try {
      return c('"use strict"; return (' + G + ").constructor;")();
    } catch {
    }
  }, h = Object.getOwnPropertyDescriptor;
  if (h) try {
    h({}, "");
  } catch {
    h = null;
  }
  var d = function() {
    throw new o();
  }, m = h ? (function() {
    try {
      return arguments.callee, d;
    } catch {
      try {
        return h(arguments, "callee").get;
      } catch {
        return d;
      }
    }
  })() : d, g = iI()(), P = oI()(), S = Object.getPrototypeOf || (P ? function(G) {
    return G.__proto__;
  } : null), b = {}, w = typeof Uint8Array > "u" || !S ? t : S(Uint8Array), _ = { __proto__: null, "%AggregateError%": typeof AggregateError > "u" ? t : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? t : ArrayBuffer, "%ArrayIteratorPrototype%": g && S ? S([][Symbol.iterator]()) : t, "%AsyncFromSyncIteratorPrototype%": t, "%AsyncFunction%": b, "%AsyncGenerator%": b, "%AsyncGeneratorFunction%": b, "%AsyncIteratorPrototype%": b, "%Atomics%": typeof Atomics > "u" ? t : Atomics, "%BigInt%": typeof BigInt > "u" ? t : BigInt, "%BigInt64Array%": typeof BigInt64Array > "u" ? t : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > "u" ? t : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? t : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": e, "%eval%": eval, "%EvalError%": r, "%Float32Array%": typeof Float32Array > "u" ? t : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? t : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? t : FinalizationRegistry, "%Function%": c, "%GeneratorFunction%": b, "%Int8Array%": typeof Int8Array > "u" ? t : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? t : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? t : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": g && S ? S(S([][Symbol.iterator]())) : t, "%JSON%": typeof JSON == "object" ? JSON : t, "%Map%": typeof Map > "u" ? t : Map, "%MapIteratorPrototype%": typeof Map > "u" || !g || !S ? t : S((/* @__PURE__ */ new Map())[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? t : Promise, "%Proxy%": typeof Proxy > "u" ? t : Proxy, "%RangeError%": n, "%ReferenceError%": i, "%Reflect%": typeof Reflect > "u" ? t : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? t : Set, "%SetIteratorPrototype%": typeof Set > "u" || !g || !S ? t : S((/* @__PURE__ */ new Set())[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? t : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": g && S ? S(""[Symbol.iterator]()) : t, "%Symbol%": g ? Symbol : t, "%SyntaxError%": s, "%ThrowTypeError%": m, "%TypedArray%": w, "%TypeError%": o, "%Uint8Array%": typeof Uint8Array > "u" ? t : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? t : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? t : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? t : Uint32Array, "%URIError%": a, "%WeakMap%": typeof WeakMap > "u" ? t : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? t : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? t : WeakSet };
  if (S) try {
    null.error;
  } catch (G) {
    var R = S(S(G));
    _["%Error.prototype%"] = R;
  }
  var T = function G(V) {
    var te;
    if (V === "%AsyncFunction%") te = f("async function () {}");
    else if (V === "%GeneratorFunction%") te = f("function* () {}");
    else if (V === "%AsyncGeneratorFunction%") te = f("async function* () {}");
    else if (V === "%AsyncGenerator%") {
      var Y = G("%AsyncGeneratorFunction%");
      Y && (te = Y.prototype);
    } else if (V === "%AsyncIteratorPrototype%") {
      var X = G("%AsyncGenerator%");
      X && S && (te = S(X.prototype));
    }
    return _[V] = te, te;
  }, y = { __proto__: null, "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, O = dl(), v = aI(), M = O.call(Function.call, Array.prototype.concat), F = O.call(Function.apply, Array.prototype.splice), U = O.call(Function.call, String.prototype.replace), Q = O.call(Function.call, String.prototype.slice), W = O.call(Function.call, RegExp.prototype.exec), H = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, z = /\\(\\)?/g, J = function(V) {
    var te = Q(V, 0, 1), Y = Q(V, -1);
    if (te === "%" && Y !== "%") throw new s("invalid intrinsic syntax, expected closing `%`");
    if (Y === "%" && te !== "%") throw new s("invalid intrinsic syntax, expected opening `%`");
    var X = [];
    return U(V, H, function(ce, Z, ne, he) {
      X[X.length] = ne ? U(he, z, "$1") : Z || ce;
    }), X;
  }, ee = function(V, te) {
    var Y = V, X;
    if (v(y, Y) && (X = y[Y], Y = "%" + X[0] + "%"), v(_, Y)) {
      var ce = _[Y];
      if (ce === b && (ce = T(Y)), typeof ce > "u" && !te) throw new o("intrinsic " + V + " exists, but is not available. Please file an issue!");
      return { alias: X, name: Y, value: ce };
    }
    throw new s("intrinsic " + V + " does not exist!");
  };
  return sl = function(V, te) {
    if (typeof V != "string" || V.length === 0) throw new o("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof te != "boolean") throw new o('"allowMissing" argument must be a boolean');
    if (W(/^%?[^%]*%?$/, V) === null) throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var Y = J(V), X = Y.length > 0 ? Y[0] : "", ce = ee("%" + X + "%", te), Z = ce.name, ne = ce.value, he = false, be = ce.alias;
    be && (X = be[0], F(Y, M([0, 1], be)));
    for (var ye = 1, Ae = true; ye < Y.length; ye += 1) {
      var _e = Y[ye], ve = Q(_e, 0, 1), Oe = Q(_e, -1);
      if ((ve === '"' || ve === "'" || ve === "`" || Oe === '"' || Oe === "'" || Oe === "`") && ve !== Oe) throw new s("property names with quotes must have matching quotes");
      if ((_e === "constructor" || !Ae) && (he = true), X += "." + _e, Z = "%" + X + "%", v(_, Z)) ne = _[Z];
      else if (ne != null) {
        if (!(_e in ne)) {
          if (!te) throw new o("base intrinsic for " + V + " exists, but the property is not available.");
          return;
        }
        if (h && ye + 1 >= Y.length) {
          var xe = h(ne, _e);
          Ae = !!xe, Ae && "get" in xe && !("originalValue" in xe.get) ? ne = xe.get : ne = ne[_e];
        } else Ae = v(ne, _e), ne = ne[_e];
        Ae && !he && (_[Z] = ne);
      }
    }
    return ne;
  }, sl;
}
function pl() {
  if (Zg) return al;
  Zg = true;
  var t = Wr(), e = t("%Object.defineProperty%", true) || false;
  if (e) try {
    e({}, "a", { value: 1 });
  } catch {
    e = false;
  }
  return al = e, al;
}
function ab() {
  if (eb) return ul;
  eb = true;
  var t = Wr(), e = t("%Object.getOwnPropertyDescriptor%", true);
  if (e) try {
    e([], "length");
  } catch {
    e = null;
  }
  return ul = e, ul;
}
function uI() {
  if (tb) return ll;
  tb = true;
  var t = pl(), e = sb(), r = Sn(), n = ab();
  return ll = function(s, o, a) {
    if (!s || typeof s != "object" && typeof s != "function") throw new r("`obj` must be an object or a function`");
    if (typeof o != "string" && typeof o != "symbol") throw new r("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null) throw new r("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null) throw new r("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null) throw new r("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean") throw new r("`loose`, if provided, must be a boolean");
    var c = arguments.length > 3 ? arguments[3] : null, f = arguments.length > 4 ? arguments[4] : null, h = arguments.length > 5 ? arguments[5] : null, d = arguments.length > 6 ? arguments[6] : false, m = !!n && n(s, o);
    if (t) t(s, o, { configurable: h === null && m ? m.configurable : !h, enumerable: c === null && m ? m.enumerable : !c, value: a, writable: f === null && m ? m.writable : !f });
    else if (d || !c && !f && !h) s[o] = a;
    else throw new e("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, ll;
}
function lI() {
  if (rb) return cl;
  rb = true;
  var t = pl(), e = function() {
    return !!t;
  };
  return e.hasArrayLengthDefineBug = function() {
    if (!t) return null;
    try {
      return t([], "length", { value: 1 }).length !== 1;
    } catch {
      return true;
    }
  }, cl = e, cl;
}
function cI() {
  if (nb) return fl;
  nb = true;
  var t = Wr(), e = uI(), r = lI()(), n = ab(), i = Sn(), s = t("%Math.floor%");
  return fl = function(a, c) {
    if (typeof a != "function") throw new i("`fn` is not a function");
    if (typeof c != "number" || c < 0 || c > 4294967295 || s(c) !== c) throw new i("`length` must be a positive 32-bit integer");
    var f = arguments.length > 2 && !!arguments[2], h = true, d = true;
    if ("length" in a && n) {
      var m = n(a, "length");
      m && !m.configurable && (h = false), m && !m.writable && (d = false);
    }
    return (h || d || !f) && (r ? e(a, "length", c, true, true) : e(a, "length", c)), a;
  }, fl;
}
function fI() {
  if (ib) return wi;
  ib = true;
  var t = dl(), e = Wr(), r = cI(), n = Sn(), i = e("%Function.prototype.apply%"), s = e("%Function.prototype.call%"), o = e("%Reflect.apply%", true) || t.call(s, i), a = pl(), c = e("%Math.max%");
  wi = function(d) {
    if (typeof d != "function") throw new n("a function is required");
    var m = o(t, s, arguments);
    return r(m, 1 + c(0, d.length - (arguments.length - 1)), true);
  };
  var f = function() {
    return o(t, i, arguments);
  };
  return a ? a(wi, "apply", { value: f }) : wi.apply = f, wi;
}
function ub() {
  if (ob) return hl;
  ob = true;
  var t = Wr(), e = fI(), r = e(t("String.prototype.indexOf"));
  return hl = function(i, s) {
    var o = t(i, !!s);
    return typeof o == "function" && r(i, ".prototype.") > -1 ? e(o) : o;
  }, hl;
}
var zu;
var Dg;
var Ku;
var jg;
var Qu;
var Fg;
var Yu;
var Wg;
var Ju;
var $g;
var Xu;
var Hg;
var Zu;
var Vg;
var el;
var Gg;
var tl;
var zg;
var rl;
var Kg;
var nl;
var Qg;
var il;
var Yg;
var ol;
var Jg;
var sl;
var Xg;
var al;
var Zg;
var ul;
var eb;
var ll;
var tb;
var cl;
var rb;
var fl;
var nb;
var wi;
var ib;
var hl;
var ob;
var lb = ze(() => {
  A();
  x();
  I();
  zu = {}, Dg = false;
  Ku = {}, jg = false;
  Qu = {}, Fg = false;
  Yu = {}, Wg = false;
  Ju = {}, $g = false;
  Xu = {}, Hg = false;
  Zu = {}, Vg = false;
  el = {}, Gg = false;
  tl = {}, zg = false;
  rl = {}, Kg = false;
  nl = {}, Qg = false;
  il = {}, Yg = false;
  ol = {}, Jg = false;
  sl = {}, Xg = false;
  al = {}, Zg = false;
  ul = {}, eb = false;
  ll = {}, tb = false;
  cl = {}, rb = false;
  fl = {}, nb = false;
  wi = {}, ib = false;
  hl = {}, ob = false;
});
function wl(t) {
  throw new Error("Node.js process " + t + " is not supported by JSPM core outside of Node.js");
}
function hI() {
  !En || !$r || (En = false, $r.length ? zt = $r.concat(zt) : Ko = -1, zt.length && cb());
}
function cb() {
  if (!En) {
    var t = setTimeout(hI, 0);
    En = true;
    for (var e = zt.length; e; ) {
      for ($r = zt, zt = []; ++Ko < e; ) $r && $r[Ko].run();
      Ko = -1, e = zt.length;
    }
    $r = null, En = false, clearTimeout(t);
  }
}
function dI(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
  zt.push(new fb(t, e)), zt.length === 1 && !En && setTimeout(cb, 0);
}
function fb(t, e) {
  this.fun = t, this.array = e;
}
function We() {
}
function RI(t) {
  wl("_linkedBinding");
}
function MI(t) {
  wl("dlopen");
}
function NI() {
  return [];
}
function qI() {
  return [];
}
function VI(t, e) {
  if (!t) throw new Error(e || "assertion error");
}
function QI() {
  return false;
}
function hx() {
  return dr.now() / 1e3;
}
function bl(t) {
  var e = Math.floor((Date.now() - dr.now()) * 1e-3), r = dr.now() * 1e-3, n = Math.floor(r) + e, i = Math.floor(r % 1 * 1e9);
  return t && (n = n - t[0], i = i - t[1], i < 0 && (n--, i += gl)), [n, i];
}
function pr() {
  return _l;
}
function Ix(t) {
  return [];
}
var zt;
var En;
var $r;
var Ko;
var pI;
var yI;
var gI;
var bI;
var wI;
var mI;
var _I;
var vI;
var SI;
var EI;
var AI;
var II;
var xI;
var TI;
var PI;
var OI;
var kI;
var CI;
var BI;
var LI;
var UI;
var ml;
var DI;
var jI;
var FI;
var WI;
var $I;
var HI;
var GI;
var zI;
var KI;
var YI;
var JI;
var XI;
var ZI;
var ex;
var tx;
var rx;
var nx;
var ix;
var ox;
var sx;
var ax;
var ux;
var lx;
var cx;
var fx;
var dr;
var yl;
var gl;
var dx;
var px;
var yx;
var gx;
var bx;
var mx;
var _x;
var vx;
var Sx;
var Ex;
var Ax;
var _l;
var vl = ze(() => {
  A();
  x();
  I();
  zt = [], En = false, Ko = -1;
  fb.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  pI = "browser", yI = "x64", gI = "browser", bI = { PATH: "/usr/bin", LANG: navigator.language + ".UTF-8", PWD: "/", HOME: "/home", TMP: "/tmp" }, wI = ["/usr/bin/node"], mI = [], _I = "v16.8.0", vI = {}, SI = function(t, e) {
    console.warn((e ? e + ": " : "") + t);
  }, EI = function(t) {
    wl("binding");
  }, AI = function(t) {
    return 0;
  }, II = function() {
    return "/";
  }, xI = function(t) {
  }, TI = { name: "node", sourceUrl: "", headersUrl: "", libUrl: "" };
  PI = We, OI = [];
  kI = {}, CI = false, BI = {};
  LI = We, UI = We, ml = function() {
    return {};
  }, DI = ml, jI = ml, FI = We, WI = We, $I = We, HI = {};
  GI = { inspector: false, debug: false, uv: false, ipv6: false, tls_alpn: false, tls_sni: false, tls_ocsp: false, tls: false, cached_builtins: true }, zI = We, KI = We;
  YI = We, JI = We, XI = We, ZI = We, ex = We, tx = void 0, rx = void 0, nx = void 0, ix = We, ox = 2, sx = 1, ax = "/bin/usr/node", ux = 9229, lx = "node", cx = [], fx = We, dr = { now: typeof performance < "u" ? performance.now.bind(performance) : void 0, timing: typeof performance < "u" ? performance.timing : void 0 };
  dr.now === void 0 && (yl = Date.now(), dr.timing && dr.timing.navigationStart && (yl = dr.timing.navigationStart), dr.now = () => Date.now() - yl);
  gl = 1e9;
  bl.bigint = function(t) {
    var e = bl(t);
    return typeof BigInt > "u" ? e[0] * gl + e[1] : BigInt(e[0] * gl) + BigInt(e[1]);
  };
  dx = 10, px = {}, yx = 0;
  gx = pr, bx = pr, mx = pr, _x = pr, vx = pr, Sx = We, Ex = pr, Ax = pr;
  _l = { version: _I, versions: vI, arch: yI, platform: gI, release: TI, _rawDebug: PI, moduleLoadList: OI, binding: EI, _linkedBinding: RI, _events: px, _eventsCount: yx, _maxListeners: dx, on: pr, addListener: gx, once: bx, off: mx, removeListener: _x, removeAllListeners: vx, emit: Sx, prependListener: Ex, prependOnceListener: Ax, listeners: Ix, domain: kI, _exiting: CI, config: BI, dlopen: MI, uptime: hx, _getActiveRequests: NI, _getActiveHandles: qI, reallyExit: LI, _kill: UI, cpuUsage: ml, resourceUsage: DI, memoryUsage: jI, kill: FI, exit: WI, openStdin: $I, allowedNodeEnvironmentFlags: HI, assert: VI, features: GI, _fatalExceptions: zI, setUncaughtExceptionCaptureCallback: KI, hasUncaughtExceptionCaptureCallback: QI, emitWarning: SI, nextTick: dI, _tickCallback: YI, _debugProcess: JI, _debugEnd: XI, _startProfilerIdleNotifier: ZI, _stopProfilerIdleNotifier: ex, stdout: tx, stdin: nx, stderr: rx, abort: ix, umask: AI, chdir: xI, cwd: II, env: bI, title: pI, argv: wI, execArgv: mI, pid: ox, ppid: sx, execPath: ax, debugPort: ux, hrtime: bl, argv0: lx, _preload_modules: cx, setSourceMapsEnabled: fx };
});
function xx() {
  if (hb) return Sl;
  hb = true;
  var t = _l;
  function e(s) {
    if (typeof s != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(s));
  }
  function r(s, o) {
    for (var a = "", c = 0, f = -1, h = 0, d, m = 0; m <= s.length; ++m) {
      if (m < s.length) d = s.charCodeAt(m);
      else {
        if (d === 47) break;
        d = 47;
      }
      if (d === 47) {
        if (!(f === m - 1 || h === 1)) if (f !== m - 1 && h === 2) {
          if (a.length < 2 || c !== 2 || a.charCodeAt(a.length - 1) !== 46 || a.charCodeAt(a.length - 2) !== 46) {
            if (a.length > 2) {
              var g = a.lastIndexOf("/");
              if (g !== a.length - 1) {
                g === -1 ? (a = "", c = 0) : (a = a.slice(0, g), c = a.length - 1 - a.lastIndexOf("/")), f = m, h = 0;
                continue;
              }
            } else if (a.length === 2 || a.length === 1) {
              a = "", c = 0, f = m, h = 0;
              continue;
            }
          }
          o && (a.length > 0 ? a += "/.." : a = "..", c = 2);
        } else a.length > 0 ? a += "/" + s.slice(f + 1, m) : a = s.slice(f + 1, m), c = m - f - 1;
        f = m, h = 0;
      } else d === 46 && h !== -1 ? ++h : h = -1;
    }
    return a;
  }
  function n(s, o) {
    var a = o.dir || o.root, c = o.base || (o.name || "") + (o.ext || "");
    return a ? a === o.root ? a + c : a + s + c : c;
  }
  var i = { resolve: function() {
    for (var o = "", a = false, c, f = arguments.length - 1; f >= -1 && !a; f--) {
      var h;
      f >= 0 ? h = arguments[f] : (c === void 0 && (c = t.cwd()), h = c), e(h), h.length !== 0 && (o = h + "/" + o, a = h.charCodeAt(0) === 47);
    }
    return o = r(o, !a), a ? o.length > 0 ? "/" + o : "/" : o.length > 0 ? o : ".";
  }, normalize: function(o) {
    if (e(o), o.length === 0) return ".";
    var a = o.charCodeAt(0) === 47, c = o.charCodeAt(o.length - 1) === 47;
    return o = r(o, !a), o.length === 0 && !a && (o = "."), o.length > 0 && c && (o += "/"), a ? "/" + o : o;
  }, isAbsolute: function(o) {
    return e(o), o.length > 0 && o.charCodeAt(0) === 47;
  }, join: function() {
    if (arguments.length === 0) return ".";
    for (var o, a = 0; a < arguments.length; ++a) {
      var c = arguments[a];
      e(c), c.length > 0 && (o === void 0 ? o = c : o += "/" + c);
    }
    return o === void 0 ? "." : i.normalize(o);
  }, relative: function(o, a) {
    if (e(o), e(a), o === a || (o = i.resolve(o), a = i.resolve(a), o === a)) return "";
    for (var c = 1; c < o.length && o.charCodeAt(c) === 47; ++c) ;
    for (var f = o.length, h = f - c, d = 1; d < a.length && a.charCodeAt(d) === 47; ++d) ;
    for (var m = a.length, g = m - d, P = h < g ? h : g, S = -1, b = 0; b <= P; ++b) {
      if (b === P) {
        if (g > P) {
          if (a.charCodeAt(d + b) === 47) return a.slice(d + b + 1);
          if (b === 0) return a.slice(d + b);
        } else h > P && (o.charCodeAt(c + b) === 47 ? S = b : b === 0 && (S = 0));
        break;
      }
      var w = o.charCodeAt(c + b), _ = a.charCodeAt(d + b);
      if (w !== _) break;
      w === 47 && (S = b);
    }
    var R = "";
    for (b = c + S + 1; b <= f; ++b) (b === f || o.charCodeAt(b) === 47) && (R.length === 0 ? R += ".." : R += "/..");
    return R.length > 0 ? R + a.slice(d + S) : (d += S, a.charCodeAt(d) === 47 && ++d, a.slice(d));
  }, _makeLong: function(o) {
    return o;
  }, dirname: function(o) {
    if (e(o), o.length === 0) return ".";
    for (var a = o.charCodeAt(0), c = a === 47, f = -1, h = true, d = o.length - 1; d >= 1; --d) if (a = o.charCodeAt(d), a === 47) {
      if (!h) {
        f = d;
        break;
      }
    } else h = false;
    return f === -1 ? c ? "/" : "." : c && f === 1 ? "//" : o.slice(0, f);
  }, basename: function(o, a) {
    if (a !== void 0 && typeof a != "string") throw new TypeError('"ext" argument must be a string');
    e(o);
    var c = 0, f = -1, h = true, d;
    if (a !== void 0 && a.length > 0 && a.length <= o.length) {
      if (a.length === o.length && a === o) return "";
      var m = a.length - 1, g = -1;
      for (d = o.length - 1; d >= 0; --d) {
        var P = o.charCodeAt(d);
        if (P === 47) {
          if (!h) {
            c = d + 1;
            break;
          }
        } else g === -1 && (h = false, g = d + 1), m >= 0 && (P === a.charCodeAt(m) ? --m === -1 && (f = d) : (m = -1, f = g));
      }
      return c === f ? f = g : f === -1 && (f = o.length), o.slice(c, f);
    } else {
      for (d = o.length - 1; d >= 0; --d) if (o.charCodeAt(d) === 47) {
        if (!h) {
          c = d + 1;
          break;
        }
      } else f === -1 && (h = false, f = d + 1);
      return f === -1 ? "" : o.slice(c, f);
    }
  }, extname: function(o) {
    e(o);
    for (var a = -1, c = 0, f = -1, h = true, d = 0, m = o.length - 1; m >= 0; --m) {
      var g = o.charCodeAt(m);
      if (g === 47) {
        if (!h) {
          c = m + 1;
          break;
        }
        continue;
      }
      f === -1 && (h = false, f = m + 1), g === 46 ? a === -1 ? a = m : d !== 1 && (d = 1) : a !== -1 && (d = -1);
    }
    return a === -1 || f === -1 || d === 0 || d === 1 && a === f - 1 && a === c + 1 ? "" : o.slice(a, f);
  }, format: function(o) {
    if (o === null || typeof o != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof o);
    return n("/", o);
  }, parse: function(o) {
    e(o);
    var a = { root: "", dir: "", base: "", ext: "", name: "" };
    if (o.length === 0) return a;
    var c = o.charCodeAt(0), f = c === 47, h;
    f ? (a.root = "/", h = 1) : h = 0;
    for (var d = -1, m = 0, g = -1, P = true, S = o.length - 1, b = 0; S >= h; --S) {
      if (c = o.charCodeAt(S), c === 47) {
        if (!P) {
          m = S + 1;
          break;
        }
        continue;
      }
      g === -1 && (P = false, g = S + 1), c === 46 ? d === -1 ? d = S : b !== 1 && (b = 1) : d !== -1 && (b = -1);
    }
    return d === -1 || g === -1 || b === 0 || b === 1 && d === g - 1 && d === m + 1 ? g !== -1 && (m === 0 && f ? a.base = a.name = o.slice(1, g) : a.base = a.name = o.slice(m, g)) : (m === 0 && f ? (a.name = o.slice(1, d), a.base = o.slice(1, g)) : (a.name = o.slice(m, d), a.base = o.slice(m, g)), a.ext = o.slice(d, g)), m > 0 ? a.dir = o.slice(0, m - 1) : f && (a.dir = "/"), a;
  }, sep: "/", delimiter: ":", win32: null, posix: null };
  return i.posix = i, Sl = i, Sl;
}
var Sl;
var hb;
var El;
var db = ze(() => {
  A();
  x();
  I();
  vl();
  Sl = {}, hb = false;
  El = xx();
});
var Ib = {};
Kr(Ib, { URL: () => jx, Url: () => Nx, default: () => Ge, fileURLToPath: () => Eb, format: () => qx, parse: () => Dx, pathToFileURL: () => Ab, resolve: () => Lx, resolveObject: () => Ux });
function Px() {
  if (pb) return Al;
  pb = true;
  var t = typeof Map == "function" && Map.prototype, e = Object.getOwnPropertyDescriptor && t ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = t && e && typeof e.get == "function" ? e.get : null, n = t && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, s = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, o = i && s && typeof s.get == "function" ? s.get : null, a = i && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, f = c ? WeakMap.prototype.has : null, h = typeof WeakSet == "function" && WeakSet.prototype, d = h ? WeakSet.prototype.has : null, m = typeof WeakRef == "function" && WeakRef.prototype, g = m ? WeakRef.prototype.deref : null, P = Boolean.prototype.valueOf, S = Object.prototype.toString, b = Function.prototype.toString, w = String.prototype.match, _ = String.prototype.slice, R = String.prototype.replace, T = String.prototype.toUpperCase, y = String.prototype.toLowerCase, O = RegExp.prototype.test, v = Array.prototype.concat, M = Array.prototype.join, F = Array.prototype.slice, U = Math.floor, Q = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, W = Object.getOwnPropertySymbols, H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, z = typeof Symbol == "function" && typeof Symbol.iterator == "object", J = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === z || true) ? Symbol.toStringTag : null, ee = Object.prototype.propertyIsEnumerable, G = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(k) {
    return k.__proto__;
  } : null);
  function V(k, B) {
    if (k === 1 / 0 || k === -1 / 0 || k !== k || k && k > -1e3 && k < 1e3 || O.call(/e/, B)) return B;
    var re = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof k == "number") {
      var ie = k < 0 ? -U(-k) : U(k);
      if (ie !== k) {
        var oe = String(ie), fe = _.call(B, oe.length + 1);
        return R.call(oe, re, "$&_") + "." + R.call(R.call(fe, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return R.call(B, re, "$&_");
  }
  var te = Tx, Y = te.custom, X = Oe(Y) ? Y : null;
  Al = function k(B, re, ie, oe) {
    var fe = re || {};
    if (Re(fe, "quoteStyle") && fe.quoteStyle !== "single" && fe.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Re(fe, "maxStringLength") && (typeof fe.maxStringLength == "number" ? fe.maxStringLength < 0 && fe.maxStringLength !== 1 / 0 : fe.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var Qt = Re(fe, "customInspect") ? fe.customInspect : true;
    if (typeof Qt != "boolean" && Qt !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Re(fe, "indent") && fe.indent !== null && fe.indent !== "	" && !(parseInt(fe.indent, 10) === fe.indent && fe.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Re(fe, "numericSeparator") && typeof fe.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var br = fe.numericSeparator;
    if (typeof B > "u") return "undefined";
    if (B === null) return "null";
    if (typeof B == "boolean") return B ? "true" : "false";
    if (typeof B == "string") return at(B, fe);
    if (typeof B == "number") {
      if (B === 0) return 1 / 0 / B > 0 ? "0" : "-0";
      var Ye = String(B);
      return br ? V(B, Ye) : Ye;
    }
    if (typeof B == "bigint") {
      var Yt = String(B) + "n";
      return br ? V(B, Yt) : Yt;
    }
    var es = typeof fe.depth > "u" ? 5 : fe.depth;
    if (typeof ie > "u" && (ie = 0), ie >= es && es > 0 && typeof B == "object") return ne(B) ? "[Array]" : "[Object]";
    var Gr = C(fe, ie);
    if (typeof oe > "u") oe = [];
    else if (Bt(oe, B) >= 0) return "[Circular]";
    function ut(zr, Ti, Qb) {
      if (Ti && (oe = F.call(oe), oe.push(Ti)), Qb) {
        var oc = { depth: fe.depth };
        return Re(fe, "quoteStyle") && (oc.quoteStyle = fe.quoteStyle), k(zr, oc, ie + 1, oe);
      }
      return k(zr, fe, ie + 1, oe);
    }
    if (typeof B == "function" && !be(B)) {
      var Xl = Ct(B), Zl = $(B, ut);
      return "[Function" + (Xl ? ": " + Xl : " (anonymous)") + "]" + (Zl.length > 0 ? " { " + M.call(Zl, ", ") + " }" : "");
    }
    if (Oe(B)) {
      var ec = z ? R.call(String(B), /^(Symbol\(.*\))_[^)]*$/, "$1") : H.call(B);
      return typeof B == "object" && !z ? p(ec) : ec;
    }
    if (Xo(B)) {
      for (var Pn = "<" + y.call(String(B.nodeName)), ts = B.attributes || [], xi = 0; xi < ts.length; xi++) Pn += " " + ts[xi].name + "=" + ce(Z(ts[xi].value), "double", fe);
      return Pn += ">", B.childNodes && B.childNodes.length && (Pn += "..."), Pn += "</" + y.call(String(B.nodeName)) + ">", Pn;
    }
    if (ne(B)) {
      if (B.length === 0) return "[]";
      var rs = $(B, ut);
      return Gr && !E(rs) ? "[" + q(rs, Gr) + "]" : "[ " + M.call(rs, ", ") + " ]";
    }
    if (ye(B)) {
      var ns = $(B, ut);
      return !("cause" in Error.prototype) && "cause" in B && !ee.call(B, "cause") ? "{ [" + String(B) + "] " + M.call(v.call("[cause]: " + ut(B.cause), ns), ", ") + " }" : ns.length === 0 ? "[" + String(B) + "]" : "{ [" + String(B) + "] " + M.call(ns, ", ") + " }";
    }
    if (typeof B == "object" && Qt) {
      if (X && typeof B[X] == "function" && te) return te(B, { depth: es - ie });
      if (Qt !== "symbol" && typeof B.inspect == "function") return B.inspect();
    }
    if (xn(B)) {
      var tc = [];
      return n && n.call(B, function(zr, Ti) {
        tc.push(ut(Ti, B, true) + " => " + ut(zr, B));
      }), l("Map", r.call(B), tc, Gr);
    }
    if (Ze(B)) {
      var rc = [];
      return a && a.call(B, function(zr) {
        rc.push(ut(zr, B));
      }), l("Set", o.call(B), rc, Gr);
    }
    if (Ii(B)) return u("WeakMap");
    if (Tn(B)) return u("WeakSet");
    if (Vr(B)) return u("WeakRef");
    if (_e(B)) return p(ut(Number(B)));
    if (xe(B)) return p(ut(Q.call(B)));
    if (ve(B)) return p(P.call(B));
    if (Ae(B)) return p(ut(String(B)));
    if (typeof window < "u" && B === window) return "{ [object Window] }";
    if (typeof globalThis < "u" && B === globalThis || typeof Il < "u" && B === Il) return "{ [object globalThis] }";
    if (!he(B) && !be(B)) {
      var is = $(B, ut), nc = G ? G(B) === Object.prototype : B instanceof Object || B.constructor === Object, os = B instanceof Object ? "" : "null prototype", ic = !nc && J && Object(B) === B && J in B ? _.call(Ne(B), 8, -1) : os ? "Object" : "", Kb = nc || typeof B.constructor != "function" ? "" : B.constructor.name ? B.constructor.name + " " : "", ss = Kb + (ic || os ? "[" + M.call(v.call([], ic || [], os || []), ": ") + "] " : "");
      return is.length === 0 ? ss + "{}" : Gr ? ss + "{" + q(is, Gr) + "}" : ss + "{ " + M.call(is, ", ") + " }";
    }
    return String(B);
  };
  function ce(k, B, re) {
    var ie = (re.quoteStyle || B) === "double" ? '"' : "'";
    return ie + k + ie;
  }
  function Z(k) {
    return R.call(String(k), /"/g, "&quot;");
  }
  function ne(k) {
    return Ne(k) === "[object Array]" && (!J || !(typeof k == "object" && J in k));
  }
  function he(k) {
    return Ne(k) === "[object Date]" && (!J || !(typeof k == "object" && J in k));
  }
  function be(k) {
    return Ne(k) === "[object RegExp]" && (!J || !(typeof k == "object" && J in k));
  }
  function ye(k) {
    return Ne(k) === "[object Error]" && (!J || !(typeof k == "object" && J in k));
  }
  function Ae(k) {
    return Ne(k) === "[object String]" && (!J || !(typeof k == "object" && J in k));
  }
  function _e(k) {
    return Ne(k) === "[object Number]" && (!J || !(typeof k == "object" && J in k));
  }
  function ve(k) {
    return Ne(k) === "[object Boolean]" && (!J || !(typeof k == "object" && J in k));
  }
  function Oe(k) {
    if (z) return k && typeof k == "object" && k instanceof Symbol;
    if (typeof k == "symbol") return true;
    if (!k || typeof k != "object" || !H) return false;
    try {
      return H.call(k), true;
    } catch {
    }
    return false;
  }
  function xe(k) {
    if (!k || typeof k != "object" || !Q) return false;
    try {
      return Q.call(k), true;
    } catch {
    }
    return false;
  }
  var st = Object.prototype.hasOwnProperty || function(k) {
    return k in (this || Il);
  };
  function Re(k, B) {
    return st.call(k, B);
  }
  function Ne(k) {
    return S.call(k);
  }
  function Ct(k) {
    if (k.name) return k.name;
    var B = w.call(b.call(k), /^function\s*([\w$]+)/);
    return B ? B[1] : null;
  }
  function Bt(k, B) {
    if (k.indexOf) return k.indexOf(B);
    for (var re = 0, ie = k.length; re < ie; re++) if (k[re] === B) return re;
    return -1;
  }
  function xn(k) {
    if (!r || !k || typeof k != "object") return false;
    try {
      r.call(k);
      try {
        o.call(k);
      } catch {
        return true;
      }
      return k instanceof Map;
    } catch {
    }
    return false;
  }
  function Ii(k) {
    if (!f || !k || typeof k != "object") return false;
    try {
      f.call(k, f);
      try {
        d.call(k, d);
      } catch {
        return true;
      }
      return k instanceof WeakMap;
    } catch {
    }
    return false;
  }
  function Vr(k) {
    if (!g || !k || typeof k != "object") return false;
    try {
      return g.call(k), true;
    } catch {
    }
    return false;
  }
  function Ze(k) {
    if (!o || !k || typeof k != "object") return false;
    try {
      o.call(k);
      try {
        r.call(k);
      } catch {
        return true;
      }
      return k instanceof Set;
    } catch {
    }
    return false;
  }
  function Tn(k) {
    if (!d || !k || typeof k != "object") return false;
    try {
      d.call(k, d);
      try {
        f.call(k, f);
      } catch {
        return true;
      }
      return k instanceof WeakSet;
    } catch {
    }
    return false;
  }
  function Xo(k) {
    return !k || typeof k != "object" ? false : typeof HTMLElement < "u" && k instanceof HTMLElement ? true : typeof k.nodeName == "string" && typeof k.getAttribute == "function";
  }
  function at(k, B) {
    if (k.length > B.maxStringLength) {
      var re = k.length - B.maxStringLength, ie = "... " + re + " more character" + (re > 1 ? "s" : "");
      return at(_.call(k, 0, B.maxStringLength), B) + ie;
    }
    var oe = R.call(R.call(k, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Zo);
    return ce(oe, "single", B);
  }
  function Zo(k) {
    var B = k.charCodeAt(0), re = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[B];
    return re ? "\\" + re : "\\x" + (B < 16 ? "0" : "") + T.call(B.toString(16));
  }
  function p(k) {
    return "Object(" + k + ")";
  }
  function u(k) {
    return k + " { ? }";
  }
  function l(k, B, re, ie) {
    var oe = ie ? q(re, ie) : M.call(re, ", ");
    return k + " (" + B + ") {" + oe + "}";
  }
  function E(k) {
    for (var B = 0; B < k.length; B++) if (Bt(k[B], `
`) >= 0) return false;
    return true;
  }
  function C(k, B) {
    var re;
    if (k.indent === "	") re = "	";
    else if (typeof k.indent == "number" && k.indent > 0) re = M.call(Array(k.indent + 1), " ");
    else return null;
    return { base: re, prev: M.call(Array(B + 1), re) };
  }
  function q(k, B) {
    if (k.length === 0) return "";
    var re = `
` + B.prev + B.base;
    return re + M.call(k, "," + re) + `
` + B.prev;
  }
  function $(k, B) {
    var re = ne(k), ie = [];
    if (re) {
      ie.length = k.length;
      for (var oe = 0; oe < k.length; oe++) ie[oe] = Re(k, oe) ? B(k[oe], k) : "";
    }
    var fe = typeof W == "function" ? W(k) : [], Qt;
    if (z) {
      Qt = {};
      for (var br = 0; br < fe.length; br++) Qt["$" + fe[br]] = fe[br];
    }
    for (var Ye in k) Re(k, Ye) && (re && String(Number(Ye)) === Ye && Ye < k.length || z && Qt["$" + Ye] instanceof Symbol || (O.call(/[^\w$]/, Ye) ? ie.push(B(Ye, k) + ": " + B(k[Ye], k)) : ie.push(Ye + ": " + B(k[Ye], k))));
    if (typeof W == "function") for (var Yt = 0; Yt < fe.length; Yt++) ee.call(k, fe[Yt]) && ie.push("[" + B(fe[Yt]) + "]: " + B(k[fe[Yt]], k));
    return ie;
  }
  return Al;
}
function Ox() {
  if (yb) return xl;
  yb = true;
  var t = Wr(), e = ub(), r = Px(), n = Sn(), i = t("%WeakMap%", true), s = t("%Map%", true), o = e("WeakMap.prototype.get", true), a = e("WeakMap.prototype.set", true), c = e("WeakMap.prototype.has", true), f = e("Map.prototype.get", true), h = e("Map.prototype.set", true), d = e("Map.prototype.has", true), m = function(b, w) {
    for (var _ = b, R; (R = _.next) !== null; _ = R) if (R.key === w) return _.next = R.next, R.next = b.next, b.next = R, R;
  }, g = function(b, w) {
    var _ = m(b, w);
    return _ && _.value;
  }, P = function(b, w, _) {
    var R = m(b, w);
    R ? R.value = _ : b.next = { key: w, next: b.next, value: _ };
  }, S = function(b, w) {
    return !!m(b, w);
  };
  return xl = function() {
    var w, _, R, T = { assert: function(y) {
      if (!T.has(y)) throw new n("Side channel does not contain " + r(y));
    }, get: function(y) {
      if (i && y && (typeof y == "object" || typeof y == "function")) {
        if (w) return o(w, y);
      } else if (s) {
        if (_) return f(_, y);
      } else if (R) return g(R, y);
    }, has: function(y) {
      if (i && y && (typeof y == "object" || typeof y == "function")) {
        if (w) return c(w, y);
      } else if (s) {
        if (_) return d(_, y);
      } else if (R) return S(R, y);
      return false;
    }, set: function(y, O) {
      i && y && (typeof y == "object" || typeof y == "function") ? (w || (w = new i()), a(w, y, O)) : s ? (_ || (_ = new s()), h(_, y, O)) : (R || (R = { key: {}, next: null }), P(R, y, O));
    } };
    return T;
  }, xl;
}
function Bl() {
  if (gb) return Tl;
  gb = true;
  var t = String.prototype.replace, e = /%20/g, r = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
  return Tl = { default: r.RFC3986, formatters: { RFC1738: function(n) {
    return t.call(n, e, "+");
  }, RFC3986: function(n) {
    return String(n);
  } }, RFC1738: r.RFC1738, RFC3986: r.RFC3986 }, Tl;
}
function Sb() {
  if (bb) return Pl;
  bb = true;
  var t = Bl(), e = Object.prototype.hasOwnProperty, r = Array.isArray, n = (function() {
    for (var b = [], w = 0; w < 256; ++w) b.push("%" + ((w < 16 ? "0" : "") + w.toString(16)).toUpperCase());
    return b;
  })(), i = function(w) {
    for (; w.length > 1; ) {
      var _ = w.pop(), R = _.obj[_.prop];
      if (r(R)) {
        for (var T = [], y = 0; y < R.length; ++y) typeof R[y] < "u" && T.push(R[y]);
        _.obj[_.prop] = T;
      }
    }
  }, s = function(w, _) {
    for (var R = _ && _.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, T = 0; T < w.length; ++T) typeof w[T] < "u" && (R[T] = w[T]);
    return R;
  }, o = function b(w, _, R) {
    if (!_) return w;
    if (typeof _ != "object") {
      if (r(w)) w.push(_);
      else if (w && typeof w == "object") (R && (R.plainObjects || R.allowPrototypes) || !e.call(Object.prototype, _)) && (w[_] = true);
      else return [w, _];
      return w;
    }
    if (!w || typeof w != "object") return [w].concat(_);
    var T = w;
    return r(w) && !r(_) && (T = s(w, R)), r(w) && r(_) ? (_.forEach(function(y, O) {
      if (e.call(w, O)) {
        var v = w[O];
        v && typeof v == "object" && y && typeof y == "object" ? w[O] = b(v, y, R) : w.push(y);
      } else w[O] = y;
    }), w) : Object.keys(_).reduce(function(y, O) {
      var v = _[O];
      return e.call(y, O) ? y[O] = b(y[O], v, R) : y[O] = v, y;
    }, T);
  }, a = function(w, _) {
    return Object.keys(_).reduce(function(R, T) {
      return R[T] = _[T], R;
    }, w);
  }, c = function(b, w, _) {
    var R = b.replace(/\+/g, " ");
    if (_ === "iso-8859-1") return R.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(R);
    } catch {
      return R;
    }
  }, f = 1024, h = function(w, _, R, T, y) {
    if (w.length === 0) return w;
    var O = w;
    if (typeof w == "symbol" ? O = Symbol.prototype.toString.call(w) : typeof w != "string" && (O = String(w)), R === "iso-8859-1") return escape(O).replace(/%u[0-9a-f]{4}/gi, function(H) {
      return "%26%23" + parseInt(H.slice(2), 16) + "%3B";
    });
    for (var v = "", M = 0; M < O.length; M += f) {
      for (var F = O.length >= f ? O.slice(M, M + f) : O, U = [], Q = 0; Q < F.length; ++Q) {
        var W = F.charCodeAt(Q);
        if (W === 45 || W === 46 || W === 95 || W === 126 || W >= 48 && W <= 57 || W >= 65 && W <= 90 || W >= 97 && W <= 122 || y === t.RFC1738 && (W === 40 || W === 41)) {
          U[U.length] = F.charAt(Q);
          continue;
        }
        if (W < 128) {
          U[U.length] = n[W];
          continue;
        }
        if (W < 2048) {
          U[U.length] = n[192 | W >> 6] + n[128 | W & 63];
          continue;
        }
        if (W < 55296 || W >= 57344) {
          U[U.length] = n[224 | W >> 12] + n[128 | W >> 6 & 63] + n[128 | W & 63];
          continue;
        }
        Q += 1, W = 65536 + ((W & 1023) << 10 | F.charCodeAt(Q) & 1023), U[U.length] = n[240 | W >> 18] + n[128 | W >> 12 & 63] + n[128 | W >> 6 & 63] + n[128 | W & 63];
      }
      v += U.join("");
    }
    return v;
  }, d = function(w) {
    for (var _ = [{ obj: { o: w }, prop: "o" }], R = [], T = 0; T < _.length; ++T) for (var y = _[T], O = y.obj[y.prop], v = Object.keys(O), M = 0; M < v.length; ++M) {
      var F = v[M], U = O[F];
      typeof U == "object" && U !== null && R.indexOf(U) === -1 && (_.push({ obj: O, prop: F }), R.push(U));
    }
    return i(_), w;
  }, m = function(w) {
    return Object.prototype.toString.call(w) === "[object RegExp]";
  }, g = function(w) {
    return !w || typeof w != "object" ? false : !!(w.constructor && w.constructor.isBuffer && w.constructor.isBuffer(w));
  }, P = function(w, _) {
    return [].concat(w, _);
  }, S = function(w, _) {
    if (r(w)) {
      for (var R = [], T = 0; T < w.length; T += 1) R.push(_(w[T]));
      return R;
    }
    return _(w);
  };
  return Pl = { arrayToObject: s, assign: a, combine: P, compact: d, decode: c, encode: h, isBuffer: g, isRegExp: m, maybeMap: S, merge: o }, Pl;
}
function Rx() {
  if (wb) return Ol;
  wb = true;
  var t = Ox(), e = Sb(), r = Bl(), n = Object.prototype.hasOwnProperty, i = { brackets: function(b) {
    return b + "[]";
  }, comma: "comma", indices: function(b, w) {
    return b + "[" + w + "]";
  }, repeat: function(b) {
    return b;
  } }, s = Array.isArray, o = Array.prototype.push, a = function(S, b) {
    o.apply(S, s(b) ? b : [b]);
  }, c = Date.prototype.toISOString, f = r.default, h = { addQueryPrefix: false, allowDots: false, allowEmptyArrays: false, arrayFormat: "indices", charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encodeDotInKeys: false, encoder: e.encode, encodeValuesOnly: false, format: f, formatter: r.formatters[f], indices: false, serializeDate: function(b) {
    return c.call(b);
  }, skipNulls: false, strictNullHandling: false }, d = function(b) {
    return typeof b == "string" || typeof b == "number" || typeof b == "boolean" || typeof b == "symbol" || typeof b == "bigint";
  }, m = {}, g = function S(b, w, _, R, T, y, O, v, M, F, U, Q, W, H, z, J, ee, G) {
    for (var V = b, te = G, Y = 0, X = false; (te = te.get(m)) !== void 0 && !X; ) {
      var ce = te.get(b);
      if (Y += 1, typeof ce < "u") {
        if (ce === Y) throw new RangeError("Cyclic object value");
        X = true;
      }
      typeof te.get(m) > "u" && (Y = 0);
    }
    if (typeof F == "function" ? V = F(w, V) : V instanceof Date ? V = W(V) : _ === "comma" && s(V) && (V = e.maybeMap(V, function(Ne) {
      return Ne instanceof Date ? W(Ne) : Ne;
    })), V === null) {
      if (y) return M && !J ? M(w, h.encoder, ee, "key", H) : w;
      V = "";
    }
    if (d(V) || e.isBuffer(V)) {
      if (M) {
        var Z = J ? w : M(w, h.encoder, ee, "key", H);
        return [z(Z) + "=" + z(M(V, h.encoder, ee, "value", H))];
      }
      return [z(w) + "=" + z(String(V))];
    }
    var ne = [];
    if (typeof V > "u") return ne;
    var he;
    if (_ === "comma" && s(V)) J && M && (V = e.maybeMap(V, M)), he = [{ value: V.length > 0 ? V.join(",") || null : void 0 }];
    else if (s(F)) he = F;
    else {
      var be = Object.keys(V);
      he = U ? be.sort(U) : be;
    }
    var ye = v ? w.replace(/\./g, "%2E") : w, Ae = R && s(V) && V.length === 1 ? ye + "[]" : ye;
    if (T && s(V) && V.length === 0) return Ae + "[]";
    for (var _e = 0; _e < he.length; ++_e) {
      var ve = he[_e], Oe = typeof ve == "object" && typeof ve.value < "u" ? ve.value : V[ve];
      if (!(O && Oe === null)) {
        var xe = Q && v ? ve.replace(/\./g, "%2E") : ve, st = s(V) ? typeof _ == "function" ? _(Ae, xe) : Ae : Ae + (Q ? "." + xe : "[" + xe + "]");
        G.set(b, Y);
        var Re = t();
        Re.set(m, G), a(ne, S(Oe, st, _, R, T, y, O, v, _ === "comma" && J && s(V) ? null : M, F, U, Q, W, H, z, J, ee, Re));
      }
    }
    return ne;
  }, P = function(b) {
    if (!b) return h;
    if (typeof b.allowEmptyArrays < "u" && typeof b.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof b.encodeDotInKeys < "u" && typeof b.encodeDotInKeys != "boolean") throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (b.encoder !== null && typeof b.encoder < "u" && typeof b.encoder != "function") throw new TypeError("Encoder has to be a function.");
    var w = b.charset || h.charset;
    if (typeof b.charset < "u" && b.charset !== "utf-8" && b.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var _ = r.default;
    if (typeof b.format < "u") {
      if (!n.call(r.formatters, b.format)) throw new TypeError("Unknown format option provided.");
      _ = b.format;
    }
    var R = r.formatters[_], T = h.filter;
    (typeof b.filter == "function" || s(b.filter)) && (T = b.filter);
    var y;
    if (b.arrayFormat in i ? y = b.arrayFormat : "indices" in b ? y = b.indices ? "indices" : "repeat" : y = h.arrayFormat, "commaRoundTrip" in b && typeof b.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var O = typeof b.allowDots > "u" ? b.encodeDotInKeys === true ? true : h.allowDots : !!b.allowDots;
    return { addQueryPrefix: typeof b.addQueryPrefix == "boolean" ? b.addQueryPrefix : h.addQueryPrefix, allowDots: O, allowEmptyArrays: typeof b.allowEmptyArrays == "boolean" ? !!b.allowEmptyArrays : h.allowEmptyArrays, arrayFormat: y, charset: w, charsetSentinel: typeof b.charsetSentinel == "boolean" ? b.charsetSentinel : h.charsetSentinel, commaRoundTrip: b.commaRoundTrip, delimiter: typeof b.delimiter > "u" ? h.delimiter : b.delimiter, encode: typeof b.encode == "boolean" ? b.encode : h.encode, encodeDotInKeys: typeof b.encodeDotInKeys == "boolean" ? b.encodeDotInKeys : h.encodeDotInKeys, encoder: typeof b.encoder == "function" ? b.encoder : h.encoder, encodeValuesOnly: typeof b.encodeValuesOnly == "boolean" ? b.encodeValuesOnly : h.encodeValuesOnly, filter: T, format: _, formatter: R, serializeDate: typeof b.serializeDate == "function" ? b.serializeDate : h.serializeDate, skipNulls: typeof b.skipNulls == "boolean" ? b.skipNulls : h.skipNulls, sort: typeof b.sort == "function" ? b.sort : null, strictNullHandling: typeof b.strictNullHandling == "boolean" ? b.strictNullHandling : h.strictNullHandling };
  };
  return Ol = function(S, b) {
    var w = S, _ = P(b), R, T;
    typeof _.filter == "function" ? (T = _.filter, w = T("", w)) : s(_.filter) && (T = _.filter, R = T);
    var y = [];
    if (typeof w != "object" || w === null) return "";
    var O = i[_.arrayFormat], v = O === "comma" && _.commaRoundTrip;
    R || (R = Object.keys(w)), _.sort && R.sort(_.sort);
    for (var M = t(), F = 0; F < R.length; ++F) {
      var U = R[F];
      _.skipNulls && w[U] === null || a(y, g(w[U], U, O, v, _.allowEmptyArrays, _.strictNullHandling, _.skipNulls, _.encodeDotInKeys, _.encode ? _.encoder : null, _.filter, _.sort, _.allowDots, _.serializeDate, _.format, _.formatter, _.encodeValuesOnly, _.charset, M));
    }
    var Q = y.join(_.delimiter), W = _.addQueryPrefix === true ? "?" : "";
    return _.charsetSentinel && (_.charset === "iso-8859-1" ? W += "utf8=%26%2310003%3B&" : W += "utf8=%E2%9C%93&"), Q.length > 0 ? W + Q : "";
  }, Ol;
}
function kx() {
  if (mb) return Rl;
  mb = true;
  var t = Sb(), e = Object.prototype.hasOwnProperty, r = Array.isArray, n = { allowDots: false, allowEmptyArrays: false, allowPrototypes: false, allowSparse: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decodeDotInKeys: false, decoder: t.decode, delimiter: "&", depth: 5, duplicates: "combine", ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictDepth: false, strictNullHandling: false }, i = function(m) {
    return m.replace(/&#(\d+);/g, function(g, P) {
      return String.fromCharCode(parseInt(P, 10));
    });
  }, s = function(m, g) {
    return m && typeof m == "string" && g.comma && m.indexOf(",") > -1 ? m.split(",") : m;
  }, o = "utf8=%26%2310003%3B", a = "utf8=%E2%9C%93", c = function(g, P) {
    var S = { __proto__: null }, b = P.ignoreQueryPrefix ? g.replace(/^\?/, "") : g;
    b = b.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var w = P.parameterLimit === 1 / 0 ? void 0 : P.parameterLimit, _ = b.split(P.delimiter, w), R = -1, T, y = P.charset;
    if (P.charsetSentinel) for (T = 0; T < _.length; ++T) _[T].indexOf("utf8=") === 0 && (_[T] === a ? y = "utf-8" : _[T] === o && (y = "iso-8859-1"), R = T, T = _.length);
    for (T = 0; T < _.length; ++T) if (T !== R) {
      var O = _[T], v = O.indexOf("]="), M = v === -1 ? O.indexOf("=") : v + 1, F, U;
      M === -1 ? (F = P.decoder(O, n.decoder, y, "key"), U = P.strictNullHandling ? null : "") : (F = P.decoder(O.slice(0, M), n.decoder, y, "key"), U = t.maybeMap(s(O.slice(M + 1), P), function(W) {
        return P.decoder(W, n.decoder, y, "value");
      })), U && P.interpretNumericEntities && y === "iso-8859-1" && (U = i(U)), O.indexOf("[]=") > -1 && (U = r(U) ? [U] : U);
      var Q = e.call(S, F);
      Q && P.duplicates === "combine" ? S[F] = t.combine(S[F], U) : (!Q || P.duplicates === "last") && (S[F] = U);
    }
    return S;
  }, f = function(m, g, P, S) {
    for (var b = S ? g : s(g, P), w = m.length - 1; w >= 0; --w) {
      var _, R = m[w];
      if (R === "[]" && P.parseArrays) _ = P.allowEmptyArrays && (b === "" || P.strictNullHandling && b === null) ? [] : [].concat(b);
      else {
        _ = P.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        var T = R.charAt(0) === "[" && R.charAt(R.length - 1) === "]" ? R.slice(1, -1) : R, y = P.decodeDotInKeys ? T.replace(/%2E/g, ".") : T, O = parseInt(y, 10);
        !P.parseArrays && y === "" ? _ = { 0: b } : !isNaN(O) && R !== y && String(O) === y && O >= 0 && P.parseArrays && O <= P.arrayLimit ? (_ = [], _[O] = b) : y !== "__proto__" && (_[y] = b);
      }
      b = _;
    }
    return b;
  }, h = function(g, P, S, b) {
    if (g) {
      var w = S.allowDots ? g.replace(/\.([^.[]+)/g, "[$1]") : g, _ = /(\[[^[\]]*])/, R = /(\[[^[\]]*])/g, T = S.depth > 0 && _.exec(w), y = T ? w.slice(0, T.index) : w, O = [];
      if (y) {
        if (!S.plainObjects && e.call(Object.prototype, y) && !S.allowPrototypes) return;
        O.push(y);
      }
      for (var v = 0; S.depth > 0 && (T = R.exec(w)) !== null && v < S.depth; ) {
        if (v += 1, !S.plainObjects && e.call(Object.prototype, T[1].slice(1, -1)) && !S.allowPrototypes) return;
        O.push(T[1]);
      }
      if (T) {
        if (S.strictDepth === true) throw new RangeError("Input depth exceeded depth option of " + S.depth + " and strictDepth is true");
        O.push("[" + w.slice(T.index) + "]");
      }
      return f(O, P, S, b);
    }
  }, d = function(g) {
    if (!g) return n;
    if (typeof g.allowEmptyArrays < "u" && typeof g.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof g.decodeDotInKeys < "u" && typeof g.decodeDotInKeys != "boolean") throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (g.decoder !== null && typeof g.decoder < "u" && typeof g.decoder != "function") throw new TypeError("Decoder has to be a function.");
    if (typeof g.charset < "u" && g.charset !== "utf-8" && g.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var P = typeof g.charset > "u" ? n.charset : g.charset, S = typeof g.duplicates > "u" ? n.duplicates : g.duplicates;
    if (S !== "combine" && S !== "first" && S !== "last") throw new TypeError("The duplicates option must be either combine, first, or last");
    var b = typeof g.allowDots > "u" ? g.decodeDotInKeys === true ? true : n.allowDots : !!g.allowDots;
    return { allowDots: b, allowEmptyArrays: typeof g.allowEmptyArrays == "boolean" ? !!g.allowEmptyArrays : n.allowEmptyArrays, allowPrototypes: typeof g.allowPrototypes == "boolean" ? g.allowPrototypes : n.allowPrototypes, allowSparse: typeof g.allowSparse == "boolean" ? g.allowSparse : n.allowSparse, arrayLimit: typeof g.arrayLimit == "number" ? g.arrayLimit : n.arrayLimit, charset: P, charsetSentinel: typeof g.charsetSentinel == "boolean" ? g.charsetSentinel : n.charsetSentinel, comma: typeof g.comma == "boolean" ? g.comma : n.comma, decodeDotInKeys: typeof g.decodeDotInKeys == "boolean" ? g.decodeDotInKeys : n.decodeDotInKeys, decoder: typeof g.decoder == "function" ? g.decoder : n.decoder, delimiter: typeof g.delimiter == "string" || t.isRegExp(g.delimiter) ? g.delimiter : n.delimiter, depth: typeof g.depth == "number" || g.depth === false ? +g.depth : n.depth, duplicates: S, ignoreQueryPrefix: g.ignoreQueryPrefix === true, interpretNumericEntities: typeof g.interpretNumericEntities == "boolean" ? g.interpretNumericEntities : n.interpretNumericEntities, parameterLimit: typeof g.parameterLimit == "number" ? g.parameterLimit : n.parameterLimit, parseArrays: g.parseArrays !== false, plainObjects: typeof g.plainObjects == "boolean" ? g.plainObjects : n.plainObjects, strictDepth: typeof g.strictDepth == "boolean" ? !!g.strictDepth : n.strictDepth, strictNullHandling: typeof g.strictNullHandling == "boolean" ? g.strictNullHandling : n.strictNullHandling };
  };
  return Rl = function(m, g) {
    var P = d(g);
    if (m === "" || m === null || typeof m > "u") return P.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    for (var S = typeof m == "string" ? c(m, P) : m, b = P.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, w = Object.keys(S), _ = 0; _ < w.length; ++_) {
      var R = w[_], T = h(R, S[R], P, typeof m == "string");
      b = t.merge(b, T, P);
    }
    return P.allowSparse === true ? b : t.compact(b);
  }, Rl;
}
function Cx() {
  if (_b) return kl;
  _b = true;
  var t = Rx(), e = kx(), r = Bl();
  return kl = { formats: r, parse: e, stringify: t }, kl;
}
function Bx() {
  if (vb) return Hr;
  vb = true;
  var t = hr;
  function e() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
  }
  var r = /^([a-z0-9.+-]+:)/i, n = /:[0-9]*$/, i = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/, s = ["<", ">", '"', "`", " ", "\r", `
`, "	"], o = ["{", "}", "|", "\\", "^", "`"].concat(s), a = ["'"].concat(o), c = ["%", "/", "?", ";", "#"].concat(a), f = ["/", "?", "#"], h = 255, d = /^[+a-z0-9A-Z_-]{0,63}$/, m = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, g = { javascript: true, "javascript:": true }, P = { javascript: true, "javascript:": true }, S = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true }, b = Cx();
  function w(y, O, v) {
    if (y && typeof y == "object" && y instanceof e) return y;
    var M = new e();
    return M.parse(y, O, v), M;
  }
  e.prototype.parse = function(y, O, v) {
    if (typeof y != "string") throw new TypeError("Parameter 'url' must be a string, not " + typeof y);
    var M = y.indexOf("?"), F = M !== -1 && M < y.indexOf("#") ? "?" : "#", U = y.split(F), Q = /\\/g;
    U[0] = U[0].replace(Q, "/"), y = U.join(F);
    var W = y;
    if (W = W.trim(), !v && y.split("#").length === 1) {
      var H = i.exec(W);
      if (H) return this.path = W, this.href = W, this.pathname = H[1], H[2] ? (this.search = H[2], O ? this.query = b.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : O && (this.search = "", this.query = {}), this;
    }
    var z = r.exec(W);
    if (z) {
      z = z[0];
      var J = z.toLowerCase();
      this.protocol = J, W = W.substr(z.length);
    }
    if (v || z || W.match(/^\/\/[^@/]+@[^@/]+/)) {
      var ee = W.substr(0, 2) === "//";
      ee && !(z && P[z]) && (W = W.substr(2), this.slashes = true);
    }
    if (!P[z] && (ee || z && !S[z])) {
      for (var G = -1, V = 0; V < f.length; V++) {
        var te = W.indexOf(f[V]);
        te !== -1 && (G === -1 || te < G) && (G = te);
      }
      var Y, X;
      G === -1 ? X = W.lastIndexOf("@") : X = W.lastIndexOf("@", G), X !== -1 && (Y = W.slice(0, X), W = W.slice(X + 1), this.auth = decodeURIComponent(Y)), G = -1;
      for (var V = 0; V < c.length; V++) {
        var te = W.indexOf(c[V]);
        te !== -1 && (G === -1 || te < G) && (G = te);
      }
      G === -1 && (G = W.length), this.host = W.slice(0, G), W = W.slice(G), this.parseHost(), this.hostname = this.hostname || "";
      var ce = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!ce) for (var Z = this.hostname.split(/\./), V = 0, ne = Z.length; V < ne; V++) {
        var he = Z[V];
        if (he && !he.match(d)) {
          for (var be = "", ye = 0, Ae = he.length; ye < Ae; ye++) he.charCodeAt(ye) > 127 ? be += "x" : be += he[ye];
          if (!be.match(d)) {
            var _e = Z.slice(0, V), ve = Z.slice(V + 1), Oe = he.match(m);
            Oe && (_e.push(Oe[1]), ve.unshift(Oe[2])), ve.length && (W = "/" + ve.join(".") + W), this.hostname = _e.join(".");
            break;
          }
        }
      }
      this.hostname.length > h ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), ce || (this.hostname = t.toASCII(this.hostname));
      var xe = this.port ? ":" + this.port : "", st = this.hostname || "";
      this.host = st + xe, this.href += this.host, ce && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), W[0] !== "/" && (W = "/" + W));
    }
    if (!g[J]) for (var V = 0, ne = a.length; V < ne; V++) {
      var Re = a[V];
      if (W.indexOf(Re) !== -1) {
        var Ne = encodeURIComponent(Re);
        Ne === Re && (Ne = escape(Re)), W = W.split(Re).join(Ne);
      }
    }
    var Ct = W.indexOf("#");
    Ct !== -1 && (this.hash = W.substr(Ct), W = W.slice(0, Ct));
    var Bt = W.indexOf("?");
    if (Bt !== -1 ? (this.search = W.substr(Bt), this.query = W.substr(Bt + 1), O && (this.query = b.parse(this.query)), W = W.slice(0, Bt)) : O && (this.search = "", this.query = {}), W && (this.pathname = W), S[J] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
      var xe = this.pathname || "", xn = this.search || "";
      this.path = xe + xn;
    }
    return this.href = this.format(), this;
  };
  function _(y) {
    return typeof y == "string" && (y = w(y)), y instanceof e ? y.format() : e.prototype.format.call(y);
  }
  e.prototype.format = function() {
    var y = this.auth || "";
    y && (y = encodeURIComponent(y), y = y.replace(/%3A/i, ":"), y += "@");
    var O = this.protocol || "", v = this.pathname || "", M = this.hash || "", F = false, U = "";
    this.host ? F = y + this.host : this.hostname && (F = y + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (F += ":" + this.port)), this.query && typeof this.query == "object" && Object.keys(this.query).length && (U = b.stringify(this.query, { arrayFormat: "repeat", addQueryPrefix: false }));
    var Q = this.search || U && "?" + U || "";
    return O && O.substr(-1) !== ":" && (O += ":"), this.slashes || (!O || S[O]) && F !== false ? (F = "//" + (F || ""), v && v.charAt(0) !== "/" && (v = "/" + v)) : F || (F = ""), M && M.charAt(0) !== "#" && (M = "#" + M), Q && Q.charAt(0) !== "?" && (Q = "?" + Q), v = v.replace(/[?#]/g, function(W) {
      return encodeURIComponent(W);
    }), Q = Q.replace("#", "%23"), O + F + v + Q + M;
  };
  function R(y, O) {
    return w(y, false, true).resolve(O);
  }
  e.prototype.resolve = function(y) {
    return this.resolveObject(w(y, false, true)).format();
  };
  function T(y, O) {
    return y ? w(y, false, true).resolveObject(O) : O;
  }
  return e.prototype.resolveObject = function(y) {
    if (typeof y == "string") {
      var O = new e();
      O.parse(y, false, true), y = O;
    }
    for (var v = new e(), M = Object.keys(this), F = 0; F < M.length; F++) {
      var U = M[F];
      v[U] = this[U];
    }
    if (v.hash = y.hash, y.href === "") return v.href = v.format(), v;
    if (y.slashes && !y.protocol) {
      for (var Q = Object.keys(y), W = 0; W < Q.length; W++) {
        var H = Q[W];
        H !== "protocol" && (v[H] = y[H]);
      }
      return S[v.protocol] && v.hostname && !v.pathname && (v.pathname = "/", v.path = v.pathname), v.href = v.format(), v;
    }
    if (y.protocol && y.protocol !== v.protocol) {
      if (!S[y.protocol]) {
        for (var z = Object.keys(y), J = 0; J < z.length; J++) {
          var ee = z[J];
          v[ee] = y[ee];
        }
        return v.href = v.format(), v;
      }
      if (v.protocol = y.protocol, !y.host && !P[y.protocol]) {
        for (var ne = (y.pathname || "").split("/"); ne.length && !(y.host = ne.shift()); ) ;
        y.host || (y.host = ""), y.hostname || (y.hostname = ""), ne[0] !== "" && ne.unshift(""), ne.length < 2 && ne.unshift(""), v.pathname = ne.join("/");
      } else v.pathname = y.pathname;
      if (v.search = y.search, v.query = y.query, v.host = y.host || "", v.auth = y.auth, v.hostname = y.hostname || y.host, v.port = y.port, v.pathname || v.search) {
        var G = v.pathname || "", V = v.search || "";
        v.path = G + V;
      }
      return v.slashes = v.slashes || y.slashes, v.href = v.format(), v;
    }
    var te = v.pathname && v.pathname.charAt(0) === "/", Y = y.host || y.pathname && y.pathname.charAt(0) === "/", X = Y || te || v.host && y.pathname, ce = X, Z = v.pathname && v.pathname.split("/") || [], ne = y.pathname && y.pathname.split("/") || [], he = v.protocol && !S[v.protocol];
    if (he && (v.hostname = "", v.port = null, v.host && (Z[0] === "" ? Z[0] = v.host : Z.unshift(v.host)), v.host = "", y.protocol && (y.hostname = null, y.port = null, y.host && (ne[0] === "" ? ne[0] = y.host : ne.unshift(y.host)), y.host = null), X = X && (ne[0] === "" || Z[0] === "")), Y) v.host = y.host || y.host === "" ? y.host : v.host, v.hostname = y.hostname || y.hostname === "" ? y.hostname : v.hostname, v.search = y.search, v.query = y.query, Z = ne;
    else if (ne.length) Z || (Z = []), Z.pop(), Z = Z.concat(ne), v.search = y.search, v.query = y.query;
    else if (y.search != null) {
      if (he) {
        v.host = Z.shift(), v.hostname = v.host;
        var be = v.host && v.host.indexOf("@") > 0 ? v.host.split("@") : false;
        be && (v.auth = be.shift(), v.hostname = be.shift(), v.host = v.hostname);
      }
      return v.search = y.search, v.query = y.query, (v.pathname !== null || v.search !== null) && (v.path = (v.pathname ? v.pathname : "") + (v.search ? v.search : "")), v.href = v.format(), v;
    }
    if (!Z.length) return v.pathname = null, v.search ? v.path = "/" + v.search : v.path = null, v.href = v.format(), v;
    for (var ye = Z.slice(-1)[0], Ae = (v.host || y.host || Z.length > 1) && (ye === "." || ye === "..") || ye === "", _e = 0, ve = Z.length; ve >= 0; ve--) ye = Z[ve], ye === "." ? Z.splice(ve, 1) : ye === ".." ? (Z.splice(ve, 1), _e++) : _e && (Z.splice(ve, 1), _e--);
    if (!X && !ce) for (; _e--; _e) Z.unshift("..");
    X && Z[0] !== "" && (!Z[0] || Z[0].charAt(0) !== "/") && Z.unshift(""), Ae && Z.join("/").substr(-1) !== "/" && Z.push("");
    var Oe = Z[0] === "" || Z[0] && Z[0].charAt(0) === "/";
    if (he) {
      v.hostname = Oe ? "" : Z.length ? Z.shift() : "", v.host = v.hostname;
      var be = v.host && v.host.indexOf("@") > 0 ? v.host.split("@") : false;
      be && (v.auth = be.shift(), v.hostname = be.shift(), v.host = v.hostname);
    }
    return X = X || v.host && Z.length, X && !Oe && Z.unshift(""), Z.length > 0 ? v.pathname = Z.join("/") : (v.pathname = null, v.path = null), (v.pathname !== null || v.search !== null) && (v.path = (v.pathname ? v.pathname : "") + (v.search ? v.search : "")), v.auth = y.auth || v.auth, v.slashes = v.slashes || y.slashes, v.href = v.format(), v;
  }, e.prototype.parseHost = function() {
    var y = this.host, O = n.exec(y);
    O && (O = O[0], O !== ":" && (this.port = O.substr(1)), y = y.substr(0, y.length - O.length)), y && (this.hostname = y);
  }, Hr.parse = w, Hr.resolve = R, Hr.resolveObject = T, Hr.format = _, Hr.Url = e, Hr;
}
function Eb(t) {
  if (typeof t == "string") t = new URL(t);
  else if (!(t instanceof URL)) throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
  if (t.protocol !== "file:") throw new Deno.errors.InvalidData("invalid url scheme");
  return Cl ? Jx(t) : Xx(t);
}
function Jx(t) {
  let e = t.hostname, r = t.pathname;
  for (let n = 0; n < r.length; n++) if (r[n] === "%") {
    let i = r.codePointAt(n + 2) || 32;
    if (r[n + 1] === "2" && i === 102 || r[n + 1] === "5" && i === 99) throw new Deno.errors.InvalidData("must not include encoded \\ or / characters");
  }
  if (r = r.replace(Vx, "\\"), r = decodeURIComponent(r), e !== "") return `\\\\${e}${r}`;
  {
    let n = r.codePointAt(1) | 32, i = r[2];
    if (n < $x || n > Hx || i !== ":") throw new Deno.errors.InvalidData("file url path must be absolute");
    return r.slice(1);
  }
}
function Xx(t) {
  if (t.hostname !== "") throw new Deno.errors.InvalidData("invalid file url hostname");
  let e = t.pathname;
  for (let r = 0; r < e.length; r++) if (e[r] === "%") {
    let n = e.codePointAt(r + 2) || 32;
    if (e[r + 1] === "2" && n === 102) throw new Deno.errors.InvalidData("must not include encoded / characters");
  }
  return decodeURIComponent(e);
}
function Ab(t) {
  let e = El.resolve(t), r = t.charCodeAt(t.length - 1);
  (r === Wx || Cl && r === Fx) && e[e.length - 1] !== El.sep && (e += "/");
  let n = new URL("file://");
  return e.includes("%") && (e = e.replace(Gx, "%25")), !Cl && e.includes("\\") && (e = e.replace(zx, "%5C")), e.includes(`
`) && (e = e.replace(Kx, "%0A")), e.includes("\r") && (e = e.replace(Qx, "%0D")), e.includes("	") && (e = e.replace(Yx, "%09")), n.pathname = e, n;
}
var Tx;
var Al;
var pb;
var Il;
var xl;
var yb;
var Tl;
var gb;
var Pl;
var bb;
var Ol;
var wb;
var Rl;
var mb;
var kl;
var _b;
var Hr;
var vb;
var Ge;
var Mx;
var Nx;
var qx;
var Lx;
var Ux;
var Dx;
var jx;
var Fx;
var Wx;
var $x;
var Hx;
var Cl;
var Vx;
var Gx;
var zx;
var Kx;
var Qx;
var Yx;
var xb = ze(() => {
  A();
  x();
  I();
  Ug();
  lb();
  db();
  vl();
  Tx = Object.freeze(/* @__PURE__ */ Object.create(null)), Al = {}, pb = false, Il = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : global;
  xl = {}, yb = false;
  Tl = {}, gb = false;
  Pl = {}, bb = false;
  Ol = {}, wb = false;
  Rl = {}, mb = false;
  kl = {}, _b = false;
  Hr = {}, vb = false;
  Ge = Bx();
  Ge.parse;
  Ge.resolve;
  Ge.resolveObject;
  Ge.format;
  Ge.Url;
  Mx = typeof Deno < "u" ? Deno.build.os === "windows" ? "win32" : Deno.build.os : void 0;
  Ge.URL = typeof URL < "u" ? URL : null;
  Ge.pathToFileURL = Ab;
  Ge.fileURLToPath = Eb;
  Nx = Ge.Url, qx = Ge.format, Lx = Ge.resolve, Ux = Ge.resolveObject, Dx = Ge.parse, jx = Ge.URL, Fx = 92, Wx = 47, $x = 97, Hx = 122, Cl = Mx === "win32", Vx = /\//g, Gx = /%/g, zx = /\\/g, Kx = /\n/g, Qx = /\r/g, Yx = /\t/g;
});
var Pb = j((A9, Tb) => {
  "use strict";
  A();
  x();
  I();
  Tb.exports = function() {
    throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
  };
});
var Qo = j((mi) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(mi, "__esModule", { value: true });
  mi.BufferedDuplex = void 0;
  mi.writev = Rb;
  var Zx = or(), Ob = (ke(), me(qe));
  function Rb(t, e) {
    let r = new Array(t.length);
    for (let n = 0; n < t.length; n++) typeof t[n].chunk == "string" ? r[n] = Ob.Buffer.from(t[n].chunk, "utf8") : r[n] = t[n].chunk;
    this._write(Ob.Buffer.concat(r), "binary", e);
  }
  var Ml = class extends Zx.Duplex {
    socket;
    proxy;
    isSocketOpen;
    writeQueue;
    constructor(e, r, n) {
      super({ objectMode: true }), this.proxy = r, this.socket = n, this.writeQueue = [], e.objectMode || (this._writev = Rb.bind(this)), this.isSocketOpen = false, this.proxy.on("data", (i) => {
        !this.destroyed && this.readable && this.push(i);
      });
    }
    _read(e) {
      this.proxy.read(e);
    }
    _write(e, r, n) {
      this.isSocketOpen ? this.writeToProxy(e, r, n) : this.writeQueue.push({ chunk: e, encoding: r, cb: n });
    }
    _final(e) {
      this.writeQueue = [], this.proxy.end(e);
    }
    _destroy(e, r) {
      this.writeQueue = [], this.proxy.destroy(), r(e);
    }
    socketReady() {
      this.emit("connect"), this.isSocketOpen = true, this.processWriteQueue();
    }
    writeToProxy(e, r, n) {
      this.proxy.write(e, r) === false ? this.proxy.once("drain", n) : n();
    }
    processWriteQueue() {
      for (; this.writeQueue.length > 0; ) {
        let { chunk: e, encoding: r, cb: n } = this.writeQueue.shift();
        this.writeToProxy(e, r, n);
      }
    }
  };
  mi.BufferedDuplex = Ml;
});
var _i = j((gr) => {
  "use strict";
  A();
  x();
  I();
  var ql = gr && gr.__importDefault || function(t) {
    return t && t.__esModule ? t : { default: t };
  };
  Object.defineProperty(gr, "__esModule", { value: true });
  gr.streamBuilder = gr.browserStreamBuilder = void 0;
  var Yo = (ke(), me(qe)), kb = ql(Pb()), eT = ql(At()), tT = or(), rT = ql(yi()), Nl = Qo(), yr = (0, eT.default)("mqttjs:ws"), nT = ["rejectUnauthorized", "ca", "cert", "key", "pfx", "passphrase"];
  function Cb(t, e) {
    let r = `${t.protocol}://${t.hostname}:${t.port}${t.path}`;
    return typeof t.transformWsUrl == "function" && (r = t.transformWsUrl(r, t, e)), r;
  }
  function Bb(t) {
    let e = t;
    return t.port || (t.protocol === "wss" ? e.port = 443 : e.port = 80), t.path || (e.path = "/"), t.wsOptions || (e.wsOptions = {}), !rT.default && !t.forceNativeWebSocket && t.protocol === "wss" && nT.forEach((r) => {
      Object.prototype.hasOwnProperty.call(t, r) && !Object.prototype.hasOwnProperty.call(t.wsOptions, r) && (e.wsOptions[r] = t[r]);
    }), e;
  }
  function iT(t) {
    let e = Bb(t);
    if (e.hostname || (e.hostname = e.host), !e.hostname) {
      if (typeof document > "u") throw new Error("Could not determine host. Specify host manually.");
      let r = new URL(document.URL);
      e.hostname = r.hostname, e.port || (e.port = Number(r.port));
    }
    return e.objectMode === void 0 && (e.objectMode = !(e.binary === true || e.binary === void 0)), e;
  }
  function oT(t, e, r) {
    yr("createWebSocket"), yr(`protocol: ${r.protocolId} ${r.protocolVersion}`);
    let n = r.protocolId === "MQIsdp" && r.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
    yr(`creating new Websocket for url: ${e} and protocol: ${n}`);
    let i;
    return r.createWebsocket ? i = r.createWebsocket(e, [n], r) : i = new kb.default(e, [n], r.wsOptions), i;
  }
  function sT(t, e) {
    let r = e.protocolId === "MQIsdp" && e.protocolVersion === 3 ? "mqttv3.1" : "mqtt", n = Cb(e, t), i;
    return e.createWebsocket ? i = e.createWebsocket(n, [r], e) : i = new WebSocket(n, [r]), i.binaryType = "arraybuffer", i;
  }
  var aT = (t, e) => {
    yr("streamBuilder");
    let r = Bb(e);
    r.hostname = r.hostname || r.host || "localhost";
    let n = Cb(r, t), i = oT(t, n, r), s = kb.default.createWebSocketStream(i, r.wsOptions);
    return s.url = n, i.on("close", () => {
      s.destroy();
    }), s;
  };
  gr.streamBuilder = aT;
  var uT = (t, e) => {
    yr("browserStreamBuilder");
    let r, i = iT(e).browserBufferSize || 1024 * 512, s = e.browserBufferTimeout || 1e3, o = !e.objectMode, a = sT(t, e), c = h(e, S, b);
    e.objectMode || (c._writev = Nl.writev.bind(c)), c.on("close", () => {
      a.close();
    });
    let f = typeof a.addEventListener < "u";
    a.readyState === a.OPEN ? (r = c, r.socket = a) : (r = new Nl.BufferedDuplex(e, c, a), f ? a.addEventListener("open", d) : a.onopen = d), f ? (a.addEventListener("close", m), a.addEventListener("error", g), a.addEventListener("message", P)) : (a.onclose = m, a.onerror = g, a.onmessage = P);
    function h(w, _, R) {
      let T = new tT.Transform({ objectMode: w.objectMode });
      return T._write = _, T._flush = R, T;
    }
    function d() {
      yr("WebSocket onOpen"), r instanceof Nl.BufferedDuplex && r.socketReady();
    }
    function m(w) {
      yr("WebSocket onClose", w), r.end(), r.destroy();
    }
    function g(w) {
      yr("WebSocket onError", w);
      let _ = new Error("WebSocket error");
      _.event = w, r.destroy(_);
    }
    async function P(w) {
      if (!c || !c.readable || !c.writable) return;
      let { data: _ } = w;
      _ instanceof ArrayBuffer ? _ = Yo.Buffer.from(_) : _ instanceof Blob ? _ = Yo.Buffer.from(await new Response(_).arrayBuffer()) : _ = Yo.Buffer.from(_, "utf8"), c.push(_);
    }
    function S(w, _, R) {
      if (a.bufferedAmount > i) {
        setTimeout(S, s, w, _, R);
        return;
      }
      o && typeof w == "string" && (w = Yo.Buffer.from(w, "utf8"));
      try {
        a.send(w);
      } catch (T) {
        return R(T);
      }
      R();
    }
    function b(w) {
      a.close(), w();
    }
    return r;
  };
  gr.browserStreamBuilder = uT;
});
var Ll = {};
Kr(Ll, { Server: () => Je, Socket: () => Je, Stream: () => Je, _createServerHandle: () => Je, _normalizeArgs: () => Je, _setSimultaneousAccepts: () => Je, connect: () => Je, createConnection: () => Je, createServer: () => Je, default: () => lT, isIP: () => Je, isIPv4: () => Je, isIPv6: () => Je });
function Je() {
  throw new Error("Node.js net module is not supported by JSPM core outside of Node.js");
}
var lT;
var Ul = ze(() => {
  A();
  x();
  I();
  lT = { _createServerHandle: Je, _normalizeArgs: Je, _setSimultaneousAccepts: Je, connect: Je, createConnection: Je, createServer: Je, isIP: Je, isIPv4: Je, isIPv6: Je, Server: Je, Socket: Je, Stream: Je };
});
var Dl = j((lH, Mb) => {
  A();
  x();
  I();
  Mb.exports = {};
});
var Fl = j((vi) => {
  "use strict";
  A();
  x();
  I();
  var jl = vi && vi.__importDefault || function(t) {
    return t && t.__esModule ? t : { default: t };
  };
  Object.defineProperty(vi, "__esModule", { value: true });
  var cT = jl((Ul(), me(Ll))), fT = jl(At()), hT = jl(Dl()), dT = (0, fT.default)("mqttjs:tcp"), pT = (t, e) => {
    if (e.port = e.port || 1883, e.hostname = e.hostname || e.host || "localhost", e.socksProxy) return (0, hT.default)(e.hostname, e.port, e.socksProxy, { timeout: e.socksTimeout });
    let { port: r, path: n } = e, i = e.hostname;
    return dT("port %d and host %s", r, i), cT.default.createConnection({ port: r, host: i, path: n });
  };
  vi.default = pT;
});
var Nb = {};
Kr(Nb, { default: () => yT });
var yT;
var qb = ze(() => {
  A();
  x();
  I();
  yT = {};
});
var $l = j((Si) => {
  "use strict";
  A();
  x();
  I();
  var Wl = Si && Si.__importDefault || function(t) {
    return t && t.__esModule ? t : { default: t };
  };
  Object.defineProperty(Si, "__esModule", { value: true });
  var Lb = (qb(), me(Nb)), gT = Wl((Ul(), me(Ll))), bT = Wl(At()), wT = Wl(Dl()), mT = (0, bT.default)("mqttjs:tls");
  function _T(t) {
    let _a = t, { host: e, port: r, socksProxy: n } = _a, i = __objRest(_a, ["host", "port", "socksProxy"]);
    if (n !== void 0) {
      let s = (0, wT.default)(e, r, n, { timeout: t.socksTimeout });
      return (0, Lb.connect)(__spreadProps(__spreadValues({}, i), { socket: s }));
    }
    return (0, Lb.connect)(t);
  }
  var vT = (t, e) => {
    e.port = e.port || 8883, e.host = e.hostname || e.host || "localhost", gT.default.isIP(e.host) === 0 && (e.servername = e.host), e.rejectUnauthorized = e.rejectUnauthorized !== false, delete e.path, mT("port %d host %s rejectUnauthorized %b", e.port, e.host, e.rejectUnauthorized);
    let r = _T(e);
    r.on("secureConnect", () => {
      e.rejectUnauthorized && !r.authorized ? r.emit("error", new Error("TLS not authorized")) : r.removeListener("error", n);
    });
    function n(i) {
      e.rejectUnauthorized && t.emit("error", i), r.end();
    }
    return r.on("error", n), r;
  };
  Si.default = vT;
});
var Gl = j((Vl) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Vl, "__esModule", { value: true });
  var Ub = (ke(), me(qe)), ST = or(), ET = Qo(), kt, Hl, Xe;
  function AT() {
    let t = new ST.Transform();
    return t._write = (e, r, n) => {
      kt.send({ data: e.buffer, success() {
        n();
      }, fail(i) {
        n(new Error(i));
      } });
    }, t._flush = (e) => {
      kt.close({ success() {
        e();
      } });
    }, t;
  }
  function IT(t) {
    t.hostname || (t.hostname = "localhost"), t.path || (t.path = "/"), t.wsOptions || (t.wsOptions = {});
  }
  function xT(t, e) {
    let r = t.protocol === "wxs" ? "wss" : "ws", n = `${r}://${t.hostname}${t.path}`;
    return t.port && t.port !== 80 && t.port !== 443 && (n = `${r}://${t.hostname}:${t.port}${t.path}`), typeof t.transformWsUrl == "function" && (n = t.transformWsUrl(n, t, e)), n;
  }
  function TT() {
    kt.onOpen(() => {
      Xe.socketReady();
    }), kt.onMessage((t) => {
      let { data: e } = t;
      e instanceof ArrayBuffer ? e = Ub.Buffer.from(e) : e = Ub.Buffer.from(e, "utf8"), Hl.push(e);
    }), kt.onClose(() => {
      Xe.emit("close"), Xe.end(), Xe.destroy();
    }), kt.onError((t) => {
      let e = new Error(t.errMsg);
      Xe.destroy(e);
    });
  }
  var PT = (t, e) => {
    if (e.hostname = e.hostname || e.host, !e.hostname) throw new Error("Could not determine host. Specify host manually.");
    let r = e.protocolId === "MQIsdp" && e.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
    IT(e);
    let n = xT(e, t);
    kt = wx.connectSocket({ url: n, protocols: [r] }), Hl = AT(), Xe = new ET.BufferedDuplex(e, Hl, kt), Xe._destroy = (s, o) => {
      kt.close({ success() {
        o && o(s);
      } });
    };
    let i = Xe.destroy;
    return Xe.destroy = (s, o) => (Xe.destroy = i, setTimeout(() => {
      kt.close({ fail() {
        Xe._destroy(s, o);
      } });
    }, 0), Xe), TT(), Xe;
  };
  Vl.default = PT;
});
var Ql = j((Kl) => {
  "use strict";
  A();
  x();
  I();
  Object.defineProperty(Kl, "__esModule", { value: true });
  var zl = (ke(), me(qe)), OT = or(), RT = Qo(), Kt, Ei, An, Db = false;
  function kT() {
    let t = new OT.Transform();
    return t._write = (e, r, n) => {
      Kt.sendSocketMessage({ data: e.buffer, success() {
        n();
      }, fail() {
        n(new Error());
      } });
    }, t._flush = (e) => {
      Kt.closeSocket({ success() {
        e();
      } });
    }, t;
  }
  function CT(t) {
    t.hostname || (t.hostname = "localhost"), t.path || (t.path = "/"), t.wsOptions || (t.wsOptions = {});
  }
  function BT(t, e) {
    let r = t.protocol === "alis" ? "wss" : "ws", n = `${r}://${t.hostname}${t.path}`;
    return t.port && t.port !== 80 && t.port !== 443 && (n = `${r}://${t.hostname}:${t.port}${t.path}`), typeof t.transformWsUrl == "function" && (n = t.transformWsUrl(n, t, e)), n;
  }
  function MT() {
    Db || (Db = true, Kt.onSocketOpen(() => {
      An.socketReady();
    }), Kt.onSocketMessage((t) => {
      if (typeof t.data == "string") {
        let e = zl.Buffer.from(t.data, "base64");
        Ei.push(e);
      } else {
        let e = new FileReader();
        e.addEventListener("load", () => {
          if (e.result instanceof ArrayBuffer) {
            Ei.push(zl.Buffer.from(e.result));
            return;
          }
          Ei.push(zl.Buffer.from(e.result, "utf-8"));
        }), e.readAsArrayBuffer(t.data);
      }
    }), Kt.onSocketClose(() => {
      An.end(), An.destroy();
    }), Kt.onSocketError((t) => {
      An.destroy(t);
    }));
  }
  var NT = (t, e) => {
    if (e.hostname = e.hostname || e.host, !e.hostname) throw new Error("Could not determine host. Specify host manually.");
    let r = e.protocolId === "MQIsdp" && e.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
    CT(e);
    let n = BT(e, t);
    return Kt = e.my, Kt.connectSocket({ url: n, protocols: r }), Ei = kT(), An = new RT.BufferedDuplex(e, Ei, Kt), MT(), An;
  };
  Kl.default = NT;
});
var $b = j((In) => {
  "use strict";
  A();
  x();
  I();
  var Jo = In && In.__importDefault || function(t) {
    return t && t.__esModule ? t : { default: t };
  };
  Object.defineProperty(In, "__esModule", { value: true });
  In.connectAsync = jT;
  var qT = Jo(At()), LT = Jo((xb(), me(Ib))), UT = Jo(zo()), jb = Jo(yi());
  typeof N?.nextTick != "function" && (N.nextTick = setImmediate);
  var Fb = (0, qT.default)("mqttjs"), Me = null;
  function DT(t) {
    let e;
    if (t.auth) if (e = t.auth.match(/^(.+):(.+)$/), e) {
      let [, r, n] = e;
      t.username = r, t.password = n;
    } else t.username = t.auth;
  }
  function Wb(t, e) {
    if (Fb("connecting to an MQTT broker..."), typeof t == "object" && !e && (e = t, t = ""), e = e || {}, t && typeof t == "string") {
      let i = LT.default.parse(t, true), s = {};
      if (i.port != null && (s.port = Number(i.port)), s.host = i.hostname, s.query = i.query, s.auth = i.auth, s.protocol = i.protocol, s.path = i.path, e = __spreadValues(__spreadValues({}, s), e), !e.protocol) throw new Error("Missing protocol");
      e.protocol = e.protocol.replace(/:$/, "");
    }
    if (e.unixSocket = e.unixSocket || e.protocol?.includes("+unix"), e.unixSocket ? e.protocol = e.protocol.replace("+unix", "") : !e.protocol?.startsWith("ws") && !e.protocol?.startsWith("wx") && delete e.path, DT(e), e.query && typeof e.query.clientId == "string" && (e.clientId = e.query.clientId), jb.default || e.unixSocket ? e.socksProxy = void 0 : e.socksProxy === void 0 && typeof N < "u" && (e.socksProxy = N.env.MQTTJS_SOCKS_PROXY), e.cert && e.key) if (e.protocol) {
      if (["mqtts", "wss", "wxs", "alis"].indexOf(e.protocol) === -1) switch (e.protocol) {
        case "mqtt":
          e.protocol = "mqtts";
          break;
        case "ws":
          e.protocol = "wss";
          break;
        case "wx":
          e.protocol = "wxs";
          break;
        case "ali":
          e.protocol = "alis";
          break;
        default:
          throw new Error(`Unknown protocol for secure connection: "${e.protocol}"!`);
      }
    } else throw new Error("Missing secure protocol key");
    if (Me || (Me = {}, !jb.default && !e.forceNativeWebSocket ? (Me.ws = _i().streamBuilder, Me.wss = _i().streamBuilder, Me.mqtt = Fl().default, Me.tcp = Fl().default, Me.ssl = $l().default, Me.tls = Me.ssl, Me.mqtts = $l().default) : (Me.ws = _i().browserStreamBuilder, Me.wss = _i().browserStreamBuilder, Me.wx = Gl().default, Me.wxs = Gl().default, Me.ali = Ql().default, Me.alis = Ql().default)), !Me[e.protocol]) {
      let i = ["mqtts", "wss"].indexOf(e.protocol) !== -1;
      e.protocol = ["mqtt", "mqtts", "ws", "wss", "wx", "wxs", "ali", "alis"].filter((s, o) => i && o % 2 === 0 ? false : typeof Me[s] == "function")[0];
    }
    if (e.clean === false && !e.clientId) throw new Error("Missing clientId for unclean clients");
    e.protocol && (e.defaultProtocol = e.protocol);
    function r(i) {
      return e.servers && ((!i._reconnectCount || i._reconnectCount === e.servers.length) && (i._reconnectCount = 0), e.host = e.servers[i._reconnectCount].host, e.port = e.servers[i._reconnectCount].port, e.protocol = e.servers[i._reconnectCount].protocol ? e.servers[i._reconnectCount].protocol : e.defaultProtocol, e.hostname = e.host, i._reconnectCount++), Fb("calling streambuilder for", e.protocol), Me[e.protocol](i, e);
    }
    let n = new UT.default(r, e);
    return n.on("error", () => {
    }), n;
  }
  function jT(t, e, r = true) {
    return new Promise((n, i) => {
      let s = Wb(t, e), o = { connect: (c) => {
        a(), n(s);
      }, end: () => {
        a(), n(s);
      }, error: (c) => {
        a(), s.end(), i(c);
      } };
      r === false && (o.close = () => {
        o.error(new Error("Couldn't connect to server"));
      });
      function a() {
        Object.keys(o).forEach((c) => {
          s.off(c, o[c]);
        });
      }
      Object.keys(o).forEach((c) => {
        s.on(c, o[c]);
      });
    });
  }
  In.default = Wb;
});
var Jl = j((ge) => {
  "use strict";
  A();
  x();
  I();
  var Hb = ge && ge.__createBinding || (Object.create ? (function(t, e, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(e, r);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[r];
    } }), Object.defineProperty(t, n, i);
  }) : (function(t, e, r, n) {
    n === void 0 && (n = r), t[n] = e[r];
  })), FT = ge && ge.__setModuleDefault || (Object.create ? (function(t, e) {
    Object.defineProperty(t, "default", { enumerable: true, value: e });
  }) : function(t, e) {
    t.default = e;
  }), WT = ge && ge.__importStar || /* @__PURE__ */ (function() {
    var t = function(e) {
      return t = Object.getOwnPropertyNames || function(r) {
        var n = [];
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[n.length] = i);
        return n;
      }, t(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (e != null) for (var n = t(e), i = 0; i < n.length; i++) n[i] !== "default" && Hb(r, e, n[i]);
      return FT(r, e), r;
    };
  })(), Yl = ge && ge.__exportStar || function(t, e) {
    for (var r in t) r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && Hb(e, t, r);
  }, Ai = ge && ge.__importDefault || function(t) {
    return t && t.__esModule ? t : { default: t };
  };
  Object.defineProperty(ge, "__esModule", { value: true });
  ge.ReasonCodes = ge.KeepaliveManager = ge.UniqueMessageIdProvider = ge.DefaultMessageIdProvider = ge.Store = ge.MqttClient = ge.connectAsync = ge.connect = ge.Client = void 0;
  var Vb = Ai(zo());
  ge.MqttClient = Vb.default;
  var $T = Ai(Iu());
  ge.DefaultMessageIdProvider = $T.default;
  var HT = Ai(qg());
  ge.UniqueMessageIdProvider = HT.default;
  var VT = Ai(Ua());
  ge.Store = VT.default;
  var Gb = WT($b());
  ge.connect = Gb.default;
  Object.defineProperty(ge, "connectAsync", { enumerable: true, get: function() {
    return Gb.connectAsync;
  } });
  var GT = Ai(ju());
  ge.KeepaliveManager = GT.default;
  ge.Client = Vb.default;
  Yl(zo(), ge);
  Yl(Mr(), ge);
  Yl(Na(), ge);
  var zT = zn();
  Object.defineProperty(ge, "ReasonCodes", { enumerable: true, get: function() {
    return zT.ReasonCodes;
  } });
});
var XT = j((ot) => {
  A();
  x();
  I();
  var zb = ot && ot.__createBinding || (Object.create ? (function(t, e, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(e, r);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[r];
    } }), Object.defineProperty(t, n, i);
  }) : (function(t, e, r, n) {
    n === void 0 && (n = r), t[n] = e[r];
  })), KT = ot && ot.__setModuleDefault || (Object.create ? (function(t, e) {
    Object.defineProperty(t, "default", { enumerable: true, value: e });
  }) : function(t, e) {
    t.default = e;
  }), QT = ot && ot.__importStar || /* @__PURE__ */ (function() {
    var t = function(e) {
      return t = Object.getOwnPropertyNames || function(r) {
        var n = [];
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[n.length] = i);
        return n;
      }, t(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (e != null) for (var n = t(e), i = 0; i < n.length; i++) n[i] !== "default" && zb(r, e, n[i]);
      return KT(r, e), r;
    };
  })(), YT = ot && ot.__exportStar || function(t, e) {
    for (var r in t) r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && zb(e, t, r);
  };
  Object.defineProperty(ot, "__esModule", { value: true });
  var JT = QT(Jl());
  ot.default = JT;
  YT(Jl(), ot);
});
var mqtt_esm_default = XT();
export {
  mqtt_esm_default as default
};
