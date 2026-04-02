import "./chunk-KCHQYSDT.js";

// node_modules/.pnpm/@plausible-analytics+tracker@0.4.4/node_modules/@plausible-analytics/tracker/plausible.js
var t;
var n;
var i;
var o = {};
function r(e) {
  return Object.assign(e, { autoCapturePageviews: false !== e.autoCapturePageviews, logging: false !== e.logging, bindToWindow: false !== e.bindToWindow });
}
function u(e) {
  if (o.isInitialized) throw Error("plausible.init() can only be called once");
  if (!e || !e.domain) throw Error("plausible.init(): domain argument is required");
  e.endpoint || (e.endpoint = "https://plausible.io/api/event"), Object.assign(o, e), o.isInitialized = true;
}
function s(e, t2, n2) {
  window.fetch && fetch(e, { method: "POST", headers: { "Content-Type": "text/plain" }, keepalive: true, body: JSON.stringify(t2) }).then(function(e2) {
    n2 && n2.callback && n2.callback({ status: e2.status });
  }).catch(function(e2) {
    n2 && n2.callback && n2.callback({ error: e2 });
  });
}
var c = false;
var l = location.href;
var d = {};
var f = -1;
var p = 0;
var v = 0;
function m() {
  c && (g(), n = E(), i = L());
}
function h(e) {
  t = false, l = e.u, d = e.p, f = -1, v = 0, p = Date.now(), y();
}
function w() {
  t = true;
}
function g() {
  var e = k();
  if (!t && (f < i || e >= 3e3)) {
    f = i;
    var a = { n: "engagement", sd: Math.round(i / n * 100), d: o.domain, u: l, p: d, e, v: 33 };
    p = 0, v = 0, o.hashBasedRouting && (a.h = 1), s(o.endpoint, a);
  }
}
function b() {
  "visible" === document.visibilityState && document.hasFocus() && 0 === p ? p = Date.now() : "hidden" !== document.visibilityState && document.hasFocus() || (v = k(), p = 0, g());
}
function y() {
  c || (document.addEventListener("visibilitychange", b), window.addEventListener("blur", b), window.addEventListener("focus", b), c = true);
}
function k() {
  return p ? v + (Date.now() - p) : v;
}
function E() {
  var e = document.body || {}, t2 = document.documentElement || {};
  return Math.max(e.scrollHeight || 0, e.offsetHeight || 0, e.clientHeight || 0, t2.scrollHeight || 0, t2.offsetHeight || 0, t2.clientHeight || 0);
}
function L() {
  var e = document.body || {}, t2 = document.documentElement || {}, i2 = window.innerHeight || t2.clientHeight || 0, o2 = window.scrollY || t2.scrollTop || e.scrollTop || 0;
  return n <= i2 ? n : o2 + i2;
}
function S() {
  n = E(), i = L(), window.addEventListener("load", function() {
    n = E();
    var e = 0, t2 = setInterval(function() {
      n = E(), 15 == ++e && clearInterval(t2);
    }, 200);
  }), document.addEventListener("scroll", function() {
    n = E();
    var e = L();
    e > i && (i = e);
  });
}
function track(e, t2) {
  if (!o.isInitialized) throw Error("plausible.track() can only be called after plausible.init()");
  var n2, i2 = "pageview" === e;
  if (i2 && m(), !o.captureOnLocalhost) {
    if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(location.hostname) || "file:" === location.protocol) return x(e, t2, "localhost");
    if ((window._phantom || window.__nightmare || window.navigator.webdriver || window.Cypress) && !window.__plausible) return x(e, t2);
  }
  try {
    if ("true" === window.localStorage.plausible_ignore) return x(e, t2, "localStorage flag");
  } catch (e2) {
  }
  var a = {};
  a.n = e, a.v = 33;
  var r2 = t2 && (t2.u || t2.url);
  if (a.u = r2 || location.href, a.d = o.domain, a.r = document.referrer || null, t2 && t2.props && (a.p = t2.props), t2 && false === t2.interactive && (a.i = false), t2 && t2.revenue && (a.$ = t2.revenue), o.customProperties) {
    var n2 = o.customProperties;
    "function" == typeof n2 && (n2 = o.customProperties(e)), "object" == typeof n2 && (a.p = Object.assign({}, n2, a.p));
  }
  if (o.hashBasedRouting && (a.h = 1), "function" == typeof o.transformRequest && !(a = o.transformRequest(a))) return x(e, t2, "transformRequest");
  i2 && h(a), s(o.endpoint, a, t2);
}
function x(e, t2, n2) {
  n2 && o.logging && console.warn("Ignoring Event: " + n2), t2 && t2.callback && t2.callback(), "pageview" === e && w();
}
var DEFAULT_FILE_TYPES = ["pdf", "xlsx", "docx", "txt", "rtf", "csv", "exe", "key", "pps", "ppt", "pptx", "7z", "pkg", "rar", "gz", "zip", "avi", "mov", "mp4", "mpeg", "wmv", "midi", "mp3", "wav", "wma", "dmg"];
var D = 1;
var T = 3;
var _ = DEFAULT_FILE_TYPES;
function N(e) {
  for (; e && (void 0 === e.tagName || !P(e) || !e.href); ) e = e.parentNode;
  return e;
}
function P(e) {
  return e && e.tagName && "a" === e.tagName.toLowerCase();
}
function F(e) {
  if ("auxclick" !== e.type || e.button === D) {
    var t2 = N(e.target), n2 = t2 && "string" == typeof t2.href && t2.href.split("?")[0];
    if (!z(t2, 0)) {
      if (o.outboundLinks && I(t2)) return H(e, t2, { name: "Outbound Link: Click", props: { url: t2.href } });
      if (o.fileDownloads && R(n2)) return H(e, t2, { name: "File Download", props: { url: n2 } });
    }
  }
}
function H(e, t2, n2) {
  var i2;
  (i2 = { props: n2.props }).revenue = n2.revenue, track(n2.name, i2);
}
function I(e) {
  return e && "string" == typeof e.href && e.host && e.host !== location.host;
}
function R(e) {
  if (!e) return false;
  var t2 = e.split(".").pop();
  return _.some(function(e2) {
    return e2 === t2;
  });
}
function O(e) {
  var t2 = e && e.classList;
  if (t2) {
    for (var n2 = 0; n2 < t2.length; n2++) if (t2.item(n2).match(/plausible-event-name(=|--)(.+)/)) return true;
  }
  return false;
}
function z(e, t2) {
  return !!e && !(t2 > T) && (!!O(e) || z(e.parentNode, t2 + 1));
}
function j(e) {
  var t2 = O(e) ? e : e && e.parentNode, n2 = { name: null, props: {} };
  n2.revenue = {};
  var i2 = t2 && t2.classList;
  if (!i2) return n2;
  for (var o2 = 0; o2 < i2.length; o2++) {
    var a, r2, u2 = i2.item(o2), s2 = u2.match(/plausible-event-(.+)(=|--)(.+)/);
    s2 && (a = s2[1], r2 = s2[3].replace(/\+/g, " "), "name" == a.toLowerCase() ? n2.name = r2 : n2.props[a] = r2);
    var c2 = u2.match(/plausible-revenue-(.+)(=|--)(.+)/);
    c2 && (a = c2[1], r2 = c2[3], n2.revenue[a] = r2);
  }
  return n2;
}
function A() {
  function e(e2) {
    if ("auxclick" !== e2.type || e2.button === D) {
      for (var t2, n2, i2, o2 = e2.target, a = 0; a <= T && o2; a++) {
        if ((t2 = o2) && t2.tagName && "form" === t2.tagName.toLowerCase()) return;
        P(o2) && (n2 = o2), O(o2) && (i2 = o2), o2 = o2.parentNode;
      }
      if (i2) {
        var r2 = j(i2);
        if (n2) r2.props.url = n2.href, H(e2, n2, r2);
        else {
          var u2 = {};
          u2.props = r2.props, u2.revenue = r2.revenue, track(r2.name, u2);
        }
      }
    }
  }
  document.addEventListener("click", F), document.addEventListener("auxclick", F), o.fileDownloads && "object" == typeof o.fileDownloads && Array.isArray(o.fileDownloads.fileExtensions) && (_ = o.fileDownloads.fileExtensions), o.formSubmissions && document.addEventListener("submit", function(e2) {
    (e2.target.hasAttribute("novalidate") || e2.target.checkValidity()) && (z(e2.target, 0) || track("Form: Submission"));
  }, true), document.addEventListener("submit", function(e2) {
    var t2, n2 = j(e2.target);
    n2.name && ((t2 = { props: n2.props }).revenue = n2.revenue, track(n2.name, t2));
  }), document.addEventListener("click", e), document.addEventListener("auxclick", e);
}
function $(track2) {
  function e(e2) {
    (o.hashBasedRouting || !e2 || t2 !== location.pathname) && (t2 = location.pathname, track2("pageview"));
  }
  var t2, n2 = function() {
    e(true);
  };
  if (o.hashBasedRouting) window.addEventListener("hashchange", n2);
  else {
    var i2 = window.history;
    if (i2.pushState) {
      var a = i2.pushState;
      i2.pushState = function() {
        a.apply(this, arguments), n2();
      }, window.addEventListener("popstate", n2);
    }
  }
  "hidden" === document.visibilityState || "prerender" === document.visibilityState ? document.addEventListener("visibilitychange", function() {
    t2 || "visible" !== document.visibilityState || e();
  }) : e(), window.addEventListener("pageshow", function(t3) {
    t3.persisted && e();
  });
}
function init(e) {
  u(r(e || {})), S(), o.autoCapturePageviews && $(track), A(), o.bindToWindow && "undefined" != typeof window && (window.plausible = track, window.plausible.s = "npm", window.plausible.v = 33, window.plausible.l = true);
}
export {
  DEFAULT_FILE_TYPES,
  init,
  track
};
