import "./chunk-MJUTT27M.js";

// node_modules/.pnpm/@plausible-analytics+tracker@0.4.6/node_modules/@plausible-analytics/tracker/plausible.js
var t;
var n;
var i;
var o;
var r = {};
function u(e) {
  return Object.assign(e, { autoCapturePageviews: false !== e.autoCapturePageviews, logging: false !== e.logging, bindToWindow: false !== e.bindToWindow });
}
function s(e) {
  if (r.isInitialized) throw Error("plausible.init() can only be called once");
  if (!e || !e.domain) throw Error("plausible.init(): domain argument is required");
  e.endpoint || (e.endpoint = "https://plausible.io/api/event"), Object.assign(r, e), r.isInitialized = true;
}
function c(e, t2, n2) {
  window.fetch && fetch(e, { method: "POST", headers: { "Content-Type": "text/plain" }, keepalive: true, body: JSON.stringify(t2) }).then(function(e2) {
    n2 && n2.callback && n2.callback({ status: e2.status });
  }).catch(function(e2) {
    n2 && n2.callback && n2.callback({ error: e2 });
  });
}
var l = false;
var d = {};
var f = -1;
var p = 0;
var v = 0;
function m() {
  l && (g(), i = E(), o = L());
}
function h(e) {
  t = false, n = e.u, d = e.p, f = -1, v = 0, p = Date.now(), y();
}
function w() {
  t = true;
}
function g() {
  var e = k();
  if (!t && (f < o || e >= 3e3)) {
    f = o;
    var a = { n: "engagement", sd: Math.round(o / i * 100), d: r.domain, u: n, p: d, e, v: 36 };
    p = 0, v = 0, r.hashBasedRouting && (a.h = 1), c(r.endpoint, a);
  }
}
function b() {
  "visible" === document.visibilityState && document.hasFocus() && 0 === p ? p = Date.now() : "hidden" !== document.visibilityState && document.hasFocus() || (v = k(), p = 0, g());
}
function y() {
  l || (document.addEventListener("visibilitychange", b), window.addEventListener("blur", b), window.addEventListener("focus", b), l = true);
}
function k() {
  return p ? v + (Date.now() - p) : v;
}
function E() {
  var e = document.body || {}, t2 = document.documentElement || {};
  return Math.max(e.scrollHeight || 0, e.offsetHeight || 0, e.clientHeight || 0, t2.scrollHeight || 0, t2.offsetHeight || 0, t2.clientHeight || 0);
}
function L() {
  var e, t2;
  return e = window.innerHeight, t2 = window.scrollY, i <= e ? i : t2 + e;
}
function S() {
  i = E(), o = L(), new ResizeObserver(function() {
    i = E();
  }).observe(document.documentElement), document.addEventListener("scroll", function() {
    var e = L();
    e > o && (o = e);
  });
}
function track(e, t2) {
  if (!r.isInitialized) throw Error("plausible.track() can only be called after plausible.init()");
  var n2, i2 = "pageview" === e;
  if (i2 && m(), !r.captureOnLocalhost) {
    if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(location.hostname) || "file:" === location.protocol) return x(e, t2, "localhost");
    if ((window._phantom || window.__nightmare || window.navigator.webdriver || window.Cypress) && !window.__plausible) return x(e, t2);
  }
  try {
    if ("true" === window.localStorage.plausible_ignore) return x(e, t2, "localStorage flag");
  } catch (e2) {
  }
  var o2 = {};
  o2.n = e, o2.v = 36;
  var a = t2 && (t2.u || t2.url);
  if (o2.u = a || location.href, o2.d = r.domain, o2.r = document.referrer || null, t2 && t2.props && (o2.p = t2.props), t2 && false === t2.interactive && (o2.i = false), t2 && t2.revenue && (o2.$ = t2.revenue), r.customProperties) {
    var n2 = r.customProperties;
    "function" == typeof n2 && (n2 = r.customProperties(e)), "object" == typeof n2 && (o2.p = Object.assign({}, n2, o2.p));
  }
  if (r.hashBasedRouting && (o2.h = 1), "function" == typeof r.transformRequest && !(o2 = r.transformRequest(o2))) return x(e, t2, "transformRequest");
  i2 && h(o2), c(r.endpoint, o2, t2);
}
function x(e, t2, n2) {
  n2 && r.logging && console.warn("Ignoring Event: " + n2), t2 && t2.callback && t2.callback(), "pageview" === e && w();
}
var DEFAULT_FILE_TYPES = ["pdf", "xlsx", "docx", "txt", "rtf", "csv", "exe", "key", "pps", "ppt", "pptx", "7z", "pkg", "rar", "gz", "zip", "avi", "mov", "mp4", "mpeg", "wmv", "midi", "mp3", "wav", "wma", "dmg"];
var D = 1;
var _ = 3;
var N = DEFAULT_FILE_TYPES;
function P(e) {
  for (; e && (void 0 === e.tagName || !C(e) || !e.href); ) e = e.parentNode;
  return e;
}
function C(e) {
  return e && e.tagName && "a" === e.tagName.toLowerCase();
}
function T(e) {
  if ("auxclick" !== e.type || e.button === D) {
    var t2 = P(e.target), n2 = t2 && "string" == typeof t2.href && t2.href.split("?")[0];
    if (!I(t2, 0)) {
      if (r.outboundLinks && O(t2)) return F(e, t2, { name: "Outbound Link: Click", props: { url: t2.href } });
      if (r.fileDownloads && z(n2)) return F(e, t2, { name: "File Download", props: { url: n2 } });
    }
  }
}
function F(e, t2, n2) {
  var i2;
  (i2 = { props: n2.props }).revenue = n2.revenue, track(n2.name, i2);
}
function O(e) {
  return e && "string" == typeof e.href && e.host && e.host !== location.host;
}
function z(e) {
  if (!e) return false;
  var t2 = e.split(".").pop();
  return N.some(function(e2) {
    return e2 === t2;
  });
}
function H(e) {
  var t2 = e && e.classList;
  if (t2) {
    for (var n2 = 0; n2 < t2.length; n2++) if (t2.item(n2).match(/plausible-event-name(=|--)(.+)/)) return true;
  }
  return false;
}
function I(e, t2) {
  return !!e && !(t2 > _) && (!!H(e) || I(e.parentNode, t2 + 1));
}
function j(e) {
  var t2 = H(e) ? e : e && e.parentNode, n2 = { name: null, props: {} };
  n2.revenue = {};
  var i2 = t2 && t2.classList;
  if (!i2) return n2;
  for (var o2 = 0; o2 < i2.length; o2++) {
    var r2, a, u2 = i2.item(o2), s2 = u2.match(/plausible-event-(.+)(=|--)(.+)/);
    s2 && (r2 = s2[1], a = s2[3].replace(/\+/g, " "), "name" == r2.toLowerCase() ? n2.name = a : n2.props[r2] = a);
    var c2 = u2.match(/plausible-revenue-(.+)(=|--)(.+)/);
    c2 && (r2 = c2[1], a = c2[3], n2.revenue[r2] = a);
  }
  return n2;
}
function A() {
  function e(e2) {
    if ("auxclick" !== e2.type || e2.button === D) {
      for (var t2, n2, i2, o2 = e2.target, r2 = 0; r2 <= _ && o2; r2++) {
        if ((t2 = o2) && t2.tagName && "form" === t2.tagName.toLowerCase()) return;
        C(o2) && (n2 = o2), H(o2) && (i2 = o2), o2 = o2.parentNode;
      }
      if (i2) {
        var a = j(i2);
        if (n2) a.props.url = n2.href, F(e2, n2, a);
        else {
          var u2 = {};
          u2.props = a.props, u2.revenue = a.revenue, track(a.name, u2);
        }
      }
    }
  }
  document.addEventListener("click", T), document.addEventListener("auxclick", T), r.fileDownloads && "object" == typeof r.fileDownloads && Array.isArray(r.fileDownloads.fileExtensions) && (N = r.fileDownloads.fileExtensions), r.formSubmissions && document.addEventListener("submit", function(e2) {
    (e2.target.hasAttribute("novalidate") || e2.target.checkValidity()) && (I(e2.target, 0) || track("Form: Submission"));
  }, true), document.addEventListener("submit", function(e2) {
    var t2, n2 = j(e2.target);
    n2.name && ((t2 = { props: n2.props }).revenue = n2.revenue, track(n2.name, t2));
  }), document.addEventListener("click", e), document.addEventListener("auxclick", e);
}
function $(track2) {
  function e(e2) {
    (r.hashBasedRouting || !e2 || t2 !== location.pathname) && (t2 = location.pathname, track2("pageview"));
  }
  var t2, n2 = function() {
    e(true);
  };
  if (r.hashBasedRouting) window.addEventListener("hashchange", n2);
  else {
    var i2 = window.history;
    if (i2.pushState) {
      var o2 = i2.pushState;
      i2.pushState = function() {
        o2.apply(this, arguments), n2();
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
  s(u(e || {})), S(), r.autoCapturePageviews && $(track), A(), r.bindToWindow && "undefined" != typeof window && (window.plausible = track, window.plausible.s = "npm", window.plausible.v = 36, window.plausible.l = true);
}
export {
  DEFAULT_FILE_TYPES,
  init,
  track
};
