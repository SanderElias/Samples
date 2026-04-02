import {
  __commonJS,
  __toESM
} from "./chunk-KCHQYSDT.js";

// node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js
var require_lodash = __commonJS({
  "node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"(exports, module) {
    "use strict";
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
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
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
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
    function throttle(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = throttle;
  }
});

// node_modules/.pnpm/@popmotion+easing@1.0.2/node_modules/@popmotion/easing/dist/easing.es.js
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var reversed = function(easing) {
  return function(p) {
    return 1 - easing(1 - p);
  };
};
var mirrored = function(easing) {
  return function(p) {
    return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
  };
};
var createReversedEasing = reversed;
var createExpoIn = function(power) {
  return function(p) {
    return Math.pow(p, power);
  };
};
var createBackIn = function(power) {
  return function(p) {
    return p * p * ((power + 1) * p - power);
  };
};
var createAnticipateEasing = function(power) {
  var backEasing = createBackIn(power);
  return function(p) {
    return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
  };
};
var linear = function(p) {
  return p;
};
var easeIn = /* @__PURE__ */ createExpoIn(2);
var easeOut = /* @__PURE__ */ reversed(easeIn);
var easeInOut = /* @__PURE__ */ mirrored(easeIn);
var circIn = function(p) {
  return 1 - Math.sin(Math.acos(p));
};
var circOut = /* @__PURE__ */ reversed(circIn);
var circInOut = /* @__PURE__ */ mirrored(circOut);
var backIn = /* @__PURE__ */ createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = /* @__PURE__ */ reversed(backIn);
var backInOut = /* @__PURE__ */ mirrored(backIn);
var anticipate = /* @__PURE__ */ createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
var BOUNCE_FIRST_THRESHOLD = 4 / 11;
var BOUNCE_SECOND_THRESHOLD = 8 / 11;
var BOUNCE_THIRD_THRESHOLD = 9 / 10;
var ca = 4356 / 361;
var cb = 35442 / 1805;
var cc = 16061 / 1805;
var K_SPLINE_TABLE_SIZE = 11;
var K_SAMPLE_STEP_SIZE = 1 / (K_SPLINE_TABLE_SIZE - 1);

// node_modules/.pnpm/framesync@6.1.2/node_modules/framesync/dist/es/on-next-frame.mjs
var defaultTimestep = 1 / 60 * 1e3;
var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
var onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);

// node_modules/.pnpm/framesync@6.1.2/node_modules/framesync/dist/es/create-render-step.mjs
function createRenderStep(runNextFrame2) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing3 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing3;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing3)
          numToRun = toRun.length;
      }
      return callback;
    },
    cancel: (callback) => {
      const index2 = toRunNextFrame.indexOf(callback);
      if (index2 !== -1)
        toRunNextFrame.splice(index2, 1);
      toKeepAlive.delete(callback);
    },
    process: (frameData) => {
      if (isProcessing3) {
        flushNextFrame = true;
        return;
      }
      isProcessing3 = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = toRun[i];
          callback(frameData);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame2();
          }
        }
      }
      isProcessing3 = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}

// node_modules/.pnpm/framesync@6.1.2/node_modules/framesync/dist/es/index.mjs
var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
  delta: 0,
  timestamp: 0
};
var stepsOrder = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
var steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
var sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];
  acc[key] = (process2, keepAlive = false, immediate = false) => {
    if (!runNextFrame)
      startLoop();
    return step.schedule(process2, keepAlive, immediate);
  };
  return acc;
}, {});
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
var flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frame);
  return acc;
}, {});
var processStep = (stepId) => steps[stepId].process(frame);
var processFrame = (timestamp) => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};
var startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing)
    onNextFrame(processFrame);
};
var es_default = sync;

// node_modules/.pnpm/animate-css-grid@1.5.1/node_modules/animate-css-grid/dist/main.module.js
var import_lodash = __toESM(require_lodash());

// node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}

// node_modules/.pnpm/style-value-types@3.2.0/node_modules/style-value-types/dist/style-value-types.es.js
var clamp = function(min, max) {
  return function(v) {
    return Math.max(Math.min(v, max), min);
  };
};
var sanitize = function(v) {
  return v % 1 ? Number(v.toFixed(5)) : v;
};
var floatRegex = /(-)?(\d[\d\.]*)/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
var number = {
  test: function(v) {
    return typeof v === "number";
  },
  parse: parseFloat,
  transform: function(v) {
    return v;
  }
};
var alpha = __assign(__assign({}, number), { transform: clamp(0, 1) });
var scale = __assign(__assign({}, number), { default: 1 });
var createUnitType = function(unit) {
  return {
    test: function(v) {
      return typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1;
    },
    parse: parseFloat,
    transform: function(v) {
      return "" + v + unit;
    }
  };
};
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = __assign(__assign({}, percent), { parse: function(v) {
  return percent.parse(v) / 100;
}, transform: function(v) {
  return percent.transform(v * 100);
} });
var getValueFromFunctionString = function(value) {
  return value.substring(value.indexOf("(") + 1, value.lastIndexOf(")"));
};
var clampRgbUnit = clamp(0, 255);
var isRgba = function(v) {
  return v.red !== void 0;
};
var isHsla = function(v) {
  return v.hue !== void 0;
};
function getValuesAsArray(value) {
  return getValueFromFunctionString(value).replace(/(,|\/)/g, " ").split(/ \s*/);
}
var splitColorValues = function(terms) {
  return function(v) {
    if (typeof v !== "string")
      return v;
    var values = {};
    var valuesArray = getValuesAsArray(v);
    for (var i = 0; i < 4; i++) {
      values[terms[i]] = valuesArray[i] !== void 0 ? parseFloat(valuesArray[i]) : 1;
    }
    return values;
  };
};
var rgbaTemplate = function(_a) {
  var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha2 = _b === void 0 ? 1 : _b;
  return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha2 + ")";
};
var hslaTemplate = function(_a) {
  var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha2 = _b === void 0 ? 1 : _b;
  return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha2 + ")";
};
var rgbUnit = __assign(__assign({}, number), { transform: function(v) {
  return Math.round(clampRgbUnit(v));
} });
function isColorString(color2, colorType) {
  return color2.startsWith(colorType) && singleColorRegex.test(color2);
}
var rgba = {
  test: function(v) {
    return typeof v === "string" ? isColorString(v, "rgb") : isRgba(v);
  },
  parse: splitColorValues(["red", "green", "blue", "alpha"]),
  transform: function(_a) {
    var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
    return rgbaTemplate({
      red: rgbUnit.transform(red),
      green: rgbUnit.transform(green),
      blue: rgbUnit.transform(blue),
      alpha: sanitize(alpha.transform(alpha$1))
    });
  }
};
var hsla = {
  test: function(v) {
    return typeof v === "string" ? isColorString(v, "hsl") : isHsla(v);
  },
  parse: splitColorValues(["hue", "saturation", "lightness", "alpha"]),
  transform: function(_a) {
    var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
    return hslaTemplate({
      hue: Math.round(hue),
      saturation: percent.transform(sanitize(saturation)),
      lightness: percent.transform(sanitize(lightness)),
      alpha: sanitize(alpha.transform(alpha$1))
    });
  }
};
var hex = __assign(__assign({}, rgba), { test: function(v) {
  return typeof v === "string" && isColorString(v, "#");
}, parse: function(v) {
  var r = "";
  var g = "";
  var b = "";
  if (v.length > 4) {
    r = v.substr(1, 2);
    g = v.substr(3, 2);
    b = v.substr(5, 2);
  } else {
    r = v.substr(1, 1);
    g = v.substr(2, 1);
    b = v.substr(3, 1);
    r += r;
    g += g;
    b += b;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: 1
  };
} });
var color = {
  test: function(v) {
    return typeof v === "string" && singleColorRegex.test(v) || isRgba(v) || isHsla(v);
  },
  parse: function(v) {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else if (hex.test(v)) {
      return hex.parse(v);
    }
    return v;
  },
  transform: function(v) {
    if (isRgba(v)) {
      return rgba.transform(v);
    } else if (isHsla(v)) {
      return hsla.transform(v);
    }
    return v;
  }
};
var COLOR_TOKEN = "${c}";
var NUMBER_TOKEN = "${n}";
var convertNumbersToZero = function(v) {
  return typeof v === "number" ? 0 : v;
};
var complex = {
  test: function(v) {
    if (typeof v !== "string" || !isNaN(v))
      return false;
    var numValues = 0;
    var foundNumbers = v.match(floatRegex);
    var foundColors = v.match(colorRegex);
    if (foundNumbers)
      numValues += foundNumbers.length;
    if (foundColors)
      numValues += foundColors.length;
    return numValues > 0;
  },
  parse: function(v) {
    var input = v;
    var parsed = [];
    var foundColors = input.match(colorRegex);
    if (foundColors) {
      input = input.replace(colorRegex, COLOR_TOKEN);
      parsed.push.apply(parsed, foundColors.map(color.parse));
    }
    var foundNumbers = input.match(floatRegex);
    if (foundNumbers) {
      parsed.push.apply(parsed, foundNumbers.map(number.parse));
    }
    return parsed;
  },
  createTransformer: function(prop) {
    var template = prop;
    var token = 0;
    var foundColors = prop.match(colorRegex);
    var numColors = foundColors ? foundColors.length : 0;
    if (foundColors) {
      for (var i = 0; i < numColors; i++) {
        template = template.replace(foundColors[i], COLOR_TOKEN);
        token++;
      }
    }
    var foundNumbers = template.match(floatRegex);
    var numNumbers = foundNumbers ? foundNumbers.length : 0;
    if (foundNumbers) {
      for (var i = 0; i < numNumbers; i++) {
        template = template.replace(foundNumbers[i], NUMBER_TOKEN);
        token++;
      }
    }
    return function(v) {
      var output = template;
      for (var i2 = 0; i2 < token; i2++) {
        output = output.replace(i2 < numColors ? COLOR_TOKEN : NUMBER_TOKEN, i2 < numColors ? color.transform(v[i2]) : sanitize(v[i2]));
      }
      return output;
    };
  },
  getAnimatableNone: function(target) {
    var parsedTarget = complex.parse(target);
    var targetTransformer = complex.createTransformer(target);
    return targetTransformer(parsedTarget.map(convertNumbersToZero));
  }
};

// node_modules/.pnpm/hey-listen@1.0.8/node_modules/hey-listen/dist/hey-listen.es.js
var warning = function() {
};
var invariant = function() {
};
if (true) {
  warning = function(check, message) {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = function(check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}

// node_modules/.pnpm/framesync@4.1.0/node_modules/framesync/dist/framesync.es.js
var prevTime = 0;
var onNextFrame2 = typeof window !== "undefined" && window.requestAnimationFrame !== void 0 ? function(callback) {
  return window.requestAnimationFrame(callback);
} : function(callback) {
  var timestamp = Date.now();
  var timeToCall = Math.max(0, 16.7 - (timestamp - prevTime));
  prevTime = timestamp + timeToCall;
  setTimeout(function() {
    return callback(prevTime);
  }, timeToCall);
};
var createStep = function(setRunNextFrame) {
  var processToRun = [];
  var processToRunNextFrame = [];
  var numThisFrame = 0;
  var isProcessing3 = false;
  var i = 0;
  var cancelled = /* @__PURE__ */ new WeakSet();
  var toKeepAlive = /* @__PURE__ */ new WeakSet();
  var renderStep = {
    cancel: function(process2) {
      var indexOfCallback = processToRunNextFrame.indexOf(process2);
      cancelled.add(process2);
      if (indexOfCallback !== -1) {
        processToRunNextFrame.splice(indexOfCallback, 1);
      }
    },
    process: function(frame3) {
      var _a;
      isProcessing3 = true;
      _a = [processToRunNextFrame, processToRun], processToRun = _a[0], processToRunNextFrame = _a[1];
      processToRunNextFrame.length = 0;
      numThisFrame = processToRun.length;
      if (numThisFrame) {
        var process_1;
        for (i = 0; i < numThisFrame; i++) {
          process_1 = processToRun[i];
          process_1(frame3);
          if (toKeepAlive.has(process_1) === true && !cancelled.has(process_1)) {
            renderStep.schedule(process_1);
            setRunNextFrame(true);
          }
        }
      }
      isProcessing3 = false;
    },
    schedule: function(process2, keepAlive, immediate) {
      if (keepAlive === void 0) {
        keepAlive = false;
      }
      if (immediate === void 0) {
        immediate = false;
      }
      invariant(typeof process2 === "function", "Argument must be a function");
      var addToCurrentBuffer = immediate && isProcessing3;
      var buffer = addToCurrentBuffer ? processToRun : processToRunNextFrame;
      cancelled.delete(process2);
      if (keepAlive) toKeepAlive.add(process2);
      if (buffer.indexOf(process2) === -1) {
        buffer.push(process2);
        if (addToCurrentBuffer) numThisFrame = processToRun.length;
      }
    }
  };
  return renderStep;
};
var maxElapsed2 = 40;
var defaultElapsed = 1 / 60 * 1e3;
var useDefaultElapsed2 = true;
var willRunNextFrame = false;
var isProcessing2 = false;
var frame2 = {
  delta: 0,
  timestamp: 0
};
var stepsOrder2 = ["read", "update", "preRender", "render", "postRender"];
var setWillRunNextFrame = function(willRun) {
  return willRunNextFrame = willRun;
};
var steps2 = /* @__PURE__ */ stepsOrder2.reduce(function(acc, key) {
  acc[key] = createStep(setWillRunNextFrame);
  return acc;
}, {});
var sync2 = /* @__PURE__ */ stepsOrder2.reduce(function(acc, key) {
  var step = steps2[key];
  acc[key] = function(process2, keepAlive, immediate) {
    if (keepAlive === void 0) {
      keepAlive = false;
    }
    if (immediate === void 0) {
      immediate = false;
    }
    if (!willRunNextFrame) startLoop2();
    step.schedule(process2, keepAlive, immediate);
    return process2;
  };
  return acc;
}, {});
var cancelSync2 = /* @__PURE__ */ stepsOrder2.reduce(function(acc, key) {
  acc[key] = steps2[key].cancel;
  return acc;
}, {});
var processStep2 = function(stepId) {
  return steps2[stepId].process(frame2);
};
var processFrame2 = function(timestamp) {
  willRunNextFrame = false;
  frame2.delta = useDefaultElapsed2 ? defaultElapsed : Math.max(Math.min(timestamp - frame2.timestamp, maxElapsed2), 1);
  if (!useDefaultElapsed2) defaultElapsed = frame2.delta;
  frame2.timestamp = timestamp;
  isProcessing2 = true;
  stepsOrder2.forEach(processStep2);
  isProcessing2 = false;
  if (willRunNextFrame) {
    useDefaultElapsed2 = false;
    onNextFrame2(processFrame2);
  }
};
var startLoop2 = function() {
  willRunNextFrame = true;
  useDefaultElapsed2 = true;
  if (!isProcessing2) onNextFrame2(processFrame2);
};
var getFrameData = function() {
  return frame2;
};
var framesync_es_default = sync2;

// node_modules/.pnpm/@popmotion+popcorn@0.4.4/node_modules/@popmotion/popcorn/dist/popcorn.es.js
var isNum = function(v) {
  return typeof v === "number";
};
var curryRange = (function(func) {
  return function(min, max, v) {
    return v !== void 0 ? func(min, max, v) : function(cv) {
      return func(min, max, cv);
    };
  };
});
var clamp2 = function(min, max, v) {
  return Math.min(Math.max(v, min), max);
};
var clamp$1 = curryRange(clamp2);
var progress = (function(from, to, value) {
  var toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
});
var mix = (function(from, to, progress2) {
  return -progress2 * from + progress2 * to + from;
});
var __assign2 = function() {
  __assign2 = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var mixLinearColor = function(from, to, v) {
  var fromExpo = from * from;
  var toExpo = to * to;
  return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [hex, rgba, hsla];
var getColorType = function(v) {
  return colorTypes.find(function(type) {
    return type.test(v);
  });
};
var notAnimatable = function(color$$1) {
  return "'" + color$$1 + "' is not an animatable color. Use the equivalent color code instead.";
};
var mixColor = (function(from, to) {
  var fromColorType = getColorType(from);
  var toColorType = getColorType(to);
  invariant(!!fromColorType, notAnimatable(from));
  invariant(!!toColorType, notAnimatable(to));
  invariant(fromColorType.transform === toColorType.transform, "Both colors must be hex/RGBA, OR both must be HSLA.");
  var fromColor = fromColorType.parse(from);
  var toColor = toColorType.parse(to);
  var blended = __assign2({}, fromColor);
  var mixFunc = fromColorType === hsla ? mix : mixLinearColor;
  return function(v) {
    for (var key in blended) {
      if (key !== "alpha") {
        blended[key] = mixFunc(fromColor[key], toColor[key], v);
      }
    }
    blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
    return fromColorType.transform(blended);
  };
});
var combineFunctions = function(a, b) {
  return function(v) {
    return b(a(v));
  };
};
var pipe = (function() {
  var transformers = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    transformers[_i] = arguments[_i];
  }
  return transformers.reduce(combineFunctions);
});
function getMixer(origin, target) {
  if (isNum(origin)) {
    return function(v) {
      return mix(origin, target, v);
    };
  } else if (color.test(origin)) {
    return mixColor(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}
var mixArray = function(from, to) {
  var output = from.slice();
  var numValues = output.length;
  var blendValue = from.map(function(fromThis, i) {
    return getMixer(fromThis, to[i]);
  });
  return function(v) {
    for (var i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }
    return output;
  };
};
function analyse(value) {
  var parsed = complex.parse(value);
  var numValues = parsed.length;
  var numNumbers = 0;
  var numRGB = 0;
  var numHSL = 0;
  for (var i = 0; i < numValues; i++) {
    if (numNumbers || typeof parsed[i] === "number") {
      numNumbers++;
    } else {
      if (parsed[i].hue !== void 0) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }
  return { parsed, numNumbers, numRGB, numHSL };
}
var mixComplex = function(origin, target) {
  var template = complex.createTransformer(target);
  var originStats = analyse(origin);
  var targetStats = analyse(target);
  invariant(originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers, "Complex values '" + origin + "' and '" + target + "' too different to mix. Ensure all colors are of the same type.");
  return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
};
var identity = function(v) {
  return v;
};
var springForce = function(alterDisplacement) {
  if (alterDisplacement === void 0) {
    alterDisplacement = identity;
  }
  return curryRange(function(constant, origin, v) {
    var displacement = origin - v;
    var springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
    return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
  });
};
var springForceLinear = springForce();
var springForceExpo = springForce(Math.sqrt);
var velocityPerFrame = (function(xps, frameDuration) {
  return isNum(xps) ? xps / (1e3 / frameDuration) : 0;
});
var velocityPerSecond = (function(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
});
var wrap = function(min, max, v) {
  var rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};
var wrap$1 = curryRange(wrap);
var clampProgress = clamp$1(0, 1);

// node_modules/.pnpm/stylefire@7.0.3/node_modules/stylefire/dist/stylefire.es.js
var prefixes = ["Webkit", "Moz", "O", "ms", ""];
var numPrefixes = prefixes.length;

// node_modules/.pnpm/popmotion@8.7.6/node_modules/popmotion/dist/popmotion.es.js
var Chainable = /* @__PURE__ */ (function() {
  function Chainable2(props) {
    if (props === void 0) {
      props = {};
    }
    this.props = props;
  }
  Chainable2.prototype.applyMiddleware = function(middleware) {
    return this.create(__assign(__assign({}, this.props), { middleware: this.props.middleware ? __spreadArrays([middleware], this.props.middleware) : [middleware] }));
  };
  Chainable2.prototype.pipe = function() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      funcs[_i] = arguments[_i];
    }
    var pipedUpdate = funcs.length === 1 ? funcs[0] : pipe.apply(void 0, funcs);
    return this.applyMiddleware(function(update) {
      return function(v) {
        return update(pipedUpdate(v));
      };
    });
  };
  Chainable2.prototype.while = function(predicate) {
    return this.applyMiddleware(function(update, complete) {
      return function(v) {
        return predicate(v) ? update(v) : complete();
      };
    });
  };
  Chainable2.prototype.filter = function(predicate) {
    return this.applyMiddleware(function(update) {
      return function(v) {
        return predicate(v) && update(v);
      };
    });
  };
  return Chainable2;
})();
var Observer = /* @__PURE__ */ (function() {
  function Observer2(_a, observer) {
    var _this = this;
    var middleware = _a.middleware, onComplete = _a.onComplete;
    this.isActive = true;
    this.update = function(v) {
      if (_this.observer.update) _this.updateObserver(v);
    };
    this.complete = function() {
      if (_this.observer.complete && _this.isActive) _this.observer.complete();
      if (_this.onComplete) _this.onComplete();
      _this.isActive = false;
    };
    this.error = function(err) {
      if (_this.observer.error && _this.isActive) _this.observer.error(err);
      _this.isActive = false;
    };
    this.observer = observer;
    this.updateObserver = function(v) {
      return observer.update(v);
    };
    this.onComplete = onComplete;
    if (observer.update && middleware && middleware.length) {
      middleware.forEach(function(m) {
        return _this.updateObserver = m(_this.updateObserver, _this.complete);
      });
    }
  }
  return Observer2;
})();
var createObserver = function(observerCandidate, _a, onComplete) {
  var middleware = _a.middleware;
  if (typeof observerCandidate === "function") {
    return new Observer({ middleware, onComplete }, { update: observerCandidate });
  } else {
    return new Observer({ middleware, onComplete }, observerCandidate);
  }
};
var Action = /* @__PURE__ */ (function(_super) {
  __extends(Action2, _super);
  function Action2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Action2.prototype.create = function(props) {
    return new Action2(props);
  };
  Action2.prototype.start = function(observerCandidate) {
    if (observerCandidate === void 0) {
      observerCandidate = {};
    }
    var isComplete = false;
    var subscription = {
      stop: function() {
        return void 0;
      }
    };
    var _a = this.props, init = _a.init, observerProps = __rest(_a, ["init"]);
    var observer = createObserver(observerCandidate, observerProps, function() {
      isComplete = true;
      subscription.stop();
    });
    var api = init(observer);
    subscription = api ? __assign(__assign({}, subscription), api) : subscription;
    if (observerCandidate.registerParent) {
      observerCandidate.registerParent(subscription);
    }
    if (isComplete) subscription.stop();
    return subscription;
  };
  return Action2;
})(Chainable);
var action = function(init) {
  return new Action({ init });
};
var multi = function(_a) {
  var getCount = _a.getCount, getFirst = _a.getFirst, getOutput = _a.getOutput, mapApi = _a.mapApi, setProp = _a.setProp, startActions = _a.startActions;
  return function(actions) {
    return action(function(_a2) {
      var update = _a2.update, complete = _a2.complete, error = _a2.error;
      var numActions = getCount(actions);
      var output = getOutput();
      var updateOutput = function() {
        return update(output);
      };
      var numCompletedActions = 0;
      var subs = startActions(actions, function(a, name) {
        var hasCompleted = false;
        return a.start({
          complete: function() {
            if (!hasCompleted) {
              hasCompleted = true;
              numCompletedActions++;
              if (numCompletedActions === numActions) framesync_es_default.update(complete);
            }
          },
          error,
          update: function(v) {
            setProp(output, name, v);
            framesync_es_default.update(updateOutput, false, true);
          }
        });
      });
      return Object.keys(getFirst(subs)).reduce(function(api, methodName) {
        api[methodName] = mapApi(subs, methodName);
        return api;
      }, {});
    });
  };
};
var composite = /* @__PURE__ */ multi({
  getOutput: function() {
    return {};
  },
  getCount: function(subs) {
    return Object.keys(subs).length;
  },
  getFirst: function(subs) {
    return subs[Object.keys(subs)[0]];
  },
  mapApi: function(subs, methodName) {
    return function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return Object.keys(subs).reduce(function(output, propKey) {
        var _a;
        if (subs[propKey][methodName]) {
          args[0] && args[0][propKey] !== void 0 ? output[propKey] = subs[propKey][methodName](args[0][propKey]) : output[propKey] = (_a = subs[propKey])[methodName].apply(_a, args);
        }
        return output;
      }, {});
    };
  },
  setProp: function(output, name, v) {
    return output[name] = v;
  },
  startActions: function(actions, starter) {
    return Object.keys(actions).reduce(function(subs, key) {
      subs[key] = starter(actions[key], key);
      return subs;
    }, {});
  }
});
var parallel = /* @__PURE__ */ multi({
  getOutput: function() {
    return [];
  },
  getCount: function(subs) {
    return subs.length;
  },
  getFirst: function(subs) {
    return subs[0];
  },
  mapApi: function(subs, methodName) {
    return function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return subs.map(function(sub, i) {
        if (sub[methodName]) {
          return Array.isArray(args[0]) ? sub[methodName](args[0][i]) : sub[methodName].apply(sub, args);
        }
      });
    };
  },
  setProp: function(output, name, v) {
    return output[name] = v;
  },
  startActions: function(actions, starter) {
    return actions.map(function(action2, i) {
      return starter(action2, i);
    });
  }
});
var parallel$1 = function() {
  var actions = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    actions[_i] = arguments[_i];
  }
  return parallel(actions);
};
var createVectorTests = function(typeTests) {
  var testNames = Object.keys(typeTests);
  var isVectorProp = function(prop, key) {
    return prop !== void 0 && !typeTests[key](prop);
  };
  var getVectorKeys = function(props) {
    return testNames.reduce(function(vectorKeys, key) {
      if (isVectorProp(props[key], key)) vectorKeys.push(key);
      return vectorKeys;
    }, []);
  };
  var testVectorProps = function(props) {
    return props && testNames.some(function(key) {
      return isVectorProp(props[key], key);
    });
  };
  return { getVectorKeys, testVectorProps };
};
var unitTypes = [px, percent, degrees, vh, vw];
var findUnitType = function(prop) {
  return unitTypes.find(function(type) {
    return type.test(prop);
  });
};
var isUnitProp = function(prop) {
  return Boolean(findUnitType(prop));
};
var createAction = function(action2, props) {
  return action2(props);
};
var reduceArrayValue = function(i) {
  return function(props, key) {
    props[key] = props[key][i];
    return props;
  };
};
var createArrayAction = function(action2, props, vectorKeys) {
  var firstVectorKey = vectorKeys[0];
  var actionList = props[firstVectorKey].map(function(v, i) {
    var childActionProps = vectorKeys.reduce(reduceArrayValue(i), __assign({}, props));
    return getActionCreator(v)(action2, childActionProps);
  });
  return parallel$1.apply(void 0, actionList);
};
var reduceObjectValue = function(key) {
  return function(props, propKey) {
    props[propKey] = props[propKey][key];
    return props;
  };
};
var createObjectAction = function(action2, props, vectorKeys) {
  var firstVectorKey = vectorKeys[0];
  var actionMap = Object.keys(props[firstVectorKey]).reduce(function(map, key) {
    var childActionProps = vectorKeys.reduce(reduceObjectValue(key), __assign({}, props));
    map[key] = getActionCreator(props[firstVectorKey][key])(action2, childActionProps);
    return map;
  }, {});
  return composite(actionMap);
};
var createUnitAction = function(action2, _a) {
  var from = _a.from, to = _a.to, props = __rest(_a, ["from", "to"]);
  var unitType = findUnitType(from) || findUnitType(to);
  var transform = unitType.transform, parse = unitType.parse;
  return action2(__assign(__assign({}, props), { from: typeof from === "string" ? parse(from) : from, to: typeof to === "string" ? parse(to) : to })).pipe(transform);
};
var createMixerAction = function(mixer) {
  return function(action2, _a) {
    var from = _a.from, to = _a.to, props = __rest(_a, ["from", "to"]);
    return action2(__assign(__assign({}, props), { from: 0, to: 1 })).pipe(mixer(from, to));
  };
};
var createColorAction = /* @__PURE__ */ createMixerAction(mixColor);
var createComplexAction = /* @__PURE__ */ createMixerAction(mixComplex);
var createVectorAction = function(action2, typeTests) {
  var _a = createVectorTests(typeTests), testVectorProps = _a.testVectorProps, getVectorKeys = _a.getVectorKeys;
  var vectorAction = function(props) {
    var isVector = testVectorProps(props);
    if (!isVector) return action2(props);
    var vectorKeys = getVectorKeys(props);
    var testKey = vectorKeys[0];
    var testProp = props[testKey];
    return getActionCreator(testProp)(action2, props, vectorKeys);
  };
  return vectorAction;
};
var getActionCreator = function(prop) {
  if (typeof prop === "number") {
    return createAction;
  } else if (Array.isArray(prop)) {
    return createArrayAction;
  } else if (isUnitProp(prop)) {
    return createUnitAction;
  } else if (color.test(prop)) {
    return createColorAction;
  } else if (complex.test(prop)) {
    return createComplexAction;
  } else if (typeof prop === "object") {
    return createObjectAction;
  } else {
    return createAction;
  }
};
var decay = function(props) {
  if (props === void 0) {
    props = {};
  }
  return action(function(_a) {
    var complete = _a.complete, update = _a.update;
    var _b = props.velocity, velocity = _b === void 0 ? 0 : _b, _c = props.from, from = _c === void 0 ? 0 : _c, _d = props.power, power = _d === void 0 ? 0.8 : _d, _e = props.timeConstant, timeConstant = _e === void 0 ? 350 : _e, _f = props.restDelta, restDelta = _f === void 0 ? 0.5 : _f, modifyTarget = props.modifyTarget;
    var elapsed = 0;
    var amplitude = power * velocity;
    var idealTarget = from + amplitude;
    var target = typeof modifyTarget === "undefined" ? idealTarget : modifyTarget(idealTarget);
    if (target !== idealTarget) amplitude = target - from;
    var process2 = framesync_es_default.update(function(_a2) {
      var frameDelta = _a2.delta;
      elapsed += frameDelta;
      var delta = -amplitude * Math.exp(-elapsed / timeConstant);
      var isMoving = delta > restDelta || delta < -restDelta;
      var current = isMoving ? target + delta : target;
      update(current);
      if (!isMoving) {
        cancelSync2.update(process2);
        complete();
      }
    }, true);
    return {
      stop: function() {
        return cancelSync2.update(process2);
      }
    };
  });
};
var vectorDecay = /* @__PURE__ */ createVectorAction(decay, {
  from: number.test,
  modifyTarget: function(func) {
    return typeof func === "function";
  },
  velocity: number.test
});
var spring = function(props) {
  if (props === void 0) {
    props = {};
  }
  return action(function(_a) {
    var update = _a.update, complete = _a.complete;
    var _b = props.velocity, velocity = _b === void 0 ? 0 : _b;
    var _c = props.from, from = _c === void 0 ? 0 : _c, _d = props.to, to = _d === void 0 ? 0 : _d, _e = props.stiffness, stiffness = _e === void 0 ? 100 : _e, _f = props.damping, damping = _f === void 0 ? 10 : _f, _g = props.mass, mass = _g === void 0 ? 1 : _g, _h = props.restSpeed, restSpeed = _h === void 0 ? 0.01 : _h, _j = props.restDelta, restDelta = _j === void 0 ? 0.01 : _j;
    var initialVelocity = velocity ? -(velocity / 1e3) : 0;
    var t = 0;
    var delta = to - from;
    var position = from;
    var prevPosition = position;
    var process2 = framesync_es_default.update(function(_a2) {
      var timeDelta = _a2.delta;
      t += timeDelta;
      var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
      var angularFreq = Math.sqrt(stiffness / mass) / 1e3;
      prevPosition = position;
      if (dampingRatio < 1) {
        var envelope = Math.exp(-dampingRatio * angularFreq * t);
        var expoDecay = angularFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
        position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta) / expoDecay * Math.sin(expoDecay * t) + delta * Math.cos(expoDecay * t));
      } else {
        var envelope = Math.exp(-angularFreq * t);
        position = to - envelope * (delta + (initialVelocity + angularFreq * delta) * t);
      }
      velocity = velocityPerSecond(position - prevPosition, timeDelta);
      var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
      var isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;
      if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
        position = to;
        update(position);
        cancelSync2.update(process2);
        complete();
      } else {
        update(position);
      }
    }, true);
    return {
      stop: function() {
        return cancelSync2.update(process2);
      }
    };
  });
};
var vectorSpring = /* @__PURE__ */ createVectorAction(spring, {
  from: number.test,
  to: number.test,
  stiffness: number.test,
  damping: number.test,
  mass: number.test,
  velocity: number.test
});
var inertia = function(_a) {
  var _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.velocity, velocity = _c === void 0 ? 0 : _c, min = _a.min, max = _a.max, _d = _a.power, power = _d === void 0 ? 0.8 : _d, _e = _a.timeConstant, timeConstant = _e === void 0 ? 700 : _e, _f = _a.bounceStiffness, bounceStiffness = _f === void 0 ? 500 : _f, _g = _a.bounceDamping, bounceDamping = _g === void 0 ? 10 : _g, _h = _a.restDelta, restDelta = _h === void 0 ? 1 : _h, modifyTarget = _a.modifyTarget;
  return action(function(_a2) {
    var update = _a2.update, complete = _a2.complete;
    var prev = from;
    var current = from;
    var activeAnimation;
    var isOutOfBounds = function(v) {
      return min !== void 0 && v < min || max !== void 0 && v > max;
    };
    var boundaryNearest = function(v) {
      return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    var startAnimation = function(animation2, next2) {
      activeAnimation && activeAnimation.stop();
      activeAnimation = animation2.start({
        update,
        complete: function() {
          if (next2) {
            next2();
            return;
          }
          complete();
        }
      });
    };
    var startSpring = function(props) {
      startAnimation(spring(__assign(__assign({}, props), { stiffness: bounceStiffness, damping: bounceDamping, restDelta })));
    };
    if (isOutOfBounds(from)) {
      startSpring({ from, velocity, to: boundaryNearest(from) });
    } else {
      var to = power * velocity + from;
      if (typeof modifyTarget !== "undefined") {
        to = modifyTarget(to);
        modifyTarget = void 0;
        velocity = (to - from) / power;
      }
      var animation = decay({
        from,
        velocity,
        timeConstant,
        power,
        restDelta,
        modifyTarget
      });
      var next = void 0;
      if (isOutOfBounds(to)) {
        var boundary_1 = boundaryNearest(to);
        var heading_1 = boundary_1 == min ? -1 : 1;
        animation = animation.while(function(v) {
          prev = current;
          velocity = velocityPerSecond(v - prev, getFrameData().delta);
          current = v;
          return boundary_1 - v * heading_1 > 0;
        });
        next = function() {
          return startSpring({ from: current, to: boundary_1, velocity });
        };
      }
      startAnimation(animation, next);
    }
    return {
      stop: function() {
        return activeAnimation && activeAnimation.stop();
      }
    };
  });
};
var index = /* @__PURE__ */ createVectorAction(inertia, {
  from: number.test,
  velocity: number.test,
  min: number.test,
  max: number.test,
  damping: number.test,
  stiffness: number.test,
  modifyTarget: function(func) {
    return typeof func === "function";
  }
});
var scrubber = function(_a) {
  var _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.to, to = _c === void 0 ? 1 : _c, _d = _a.ease, ease = _d === void 0 ? linear : _d, _e = _a.reverseEase, reverseEase = _e === void 0 ? false : _e;
  if (reverseEase) {
    ease = createReversedEasing(ease);
  }
  return action(function(_a2) {
    var update = _a2.update;
    return {
      seek: function(progress2) {
        return update(progress2);
      }
    };
  }).pipe(ease, function(v) {
    return mix(from, to, v);
  });
};
var vectorScrubber = /* @__PURE__ */ createVectorAction(scrubber, {
  ease: function(func) {
    return typeof func === "function";
  },
  from: number.test,
  to: number.test
});
var clampProgress2 = /* @__PURE__ */ clamp$1(0, 1);
var tween = function(props) {
  if (props === void 0) {
    props = {};
  }
  return action(function(_a) {
    var update = _a.update, complete = _a.complete;
    var _b = props.duration, duration = _b === void 0 ? 300 : _b, _c = props.ease, ease = _c === void 0 ? easeOut : _c, _d = props.flip, flip = _d === void 0 ? 0 : _d, _e = props.loop, loop = _e === void 0 ? 0 : _e, _f = props.yoyo, yoyo = _f === void 0 ? 0 : _f, _g = props.repeatDelay, repeatDelay = _g === void 0 ? 0 : _g;
    var _h = props.from, from = _h === void 0 ? 0 : _h, _j = props.to, to = _j === void 0 ? 1 : _j, _k = props.elapsed, elapsed = _k === void 0 ? 0 : _k, _l = props.flipCount, flipCount = _l === void 0 ? 0 : _l, _m = props.yoyoCount, yoyoCount = _m === void 0 ? 0 : _m, _o = props.loopCount, loopCount = _o === void 0 ? 0 : _o;
    var playhead = vectorScrubber({ from, to, ease }).start(update);
    var currentProgress = 0;
    var process2;
    var isActive = false;
    var reverseAnimation = function(reverseEase) {
      var _a2;
      if (reverseEase === void 0) {
        reverseEase = false;
      }
      _a2 = [to, from], from = _a2[0], to = _a2[1];
      playhead = vectorScrubber({ from, to, ease, reverseEase }).start(update);
    };
    var isTweenComplete = function() {
      var isComplete = isActive && elapsed > duration + repeatDelay;
      if (!isComplete) return false;
      if (isComplete && !loop && !flip && !yoyo) return true;
      elapsed = duration - (elapsed - repeatDelay);
      if (loop && loopCount < loop) {
        loopCount++;
        return false;
      } else if (flip && flipCount < flip) {
        flipCount++;
        reverseAnimation();
        return false;
      } else if (yoyo && yoyoCount < yoyo) {
        yoyoCount++;
        reverseAnimation(yoyoCount % 2 !== 0);
        return false;
      }
      return true;
    };
    var updateTween = function() {
      currentProgress = clampProgress2(progress(0, duration, elapsed));
      playhead.seek(currentProgress);
    };
    var startTimer = function() {
      isActive = true;
      process2 = framesync_es_default.update(function(_a2) {
        var delta = _a2.delta;
        elapsed += delta;
        updateTween();
        if (isTweenComplete()) {
          cancelSync2.update(process2);
          complete && framesync_es_default.update(complete, false, true);
        }
      }, true);
    };
    var stopTimer = function() {
      isActive = false;
      if (process2) cancelSync2.update(process2);
    };
    startTimer();
    return {
      isActive: function() {
        return isActive;
      },
      getElapsed: function() {
        return clamp$1(0, duration, elapsed);
      },
      getProgress: function() {
        return currentProgress;
      },
      stop: function() {
        stopTimer();
      },
      pause: function() {
        stopTimer();
        return this;
      },
      resume: function() {
        if (!isActive) startTimer();
        return this;
      },
      seek: function(newProgress) {
        elapsed = mix(0, duration, newProgress);
        framesync_es_default.update(updateTween, false, true);
        return this;
      },
      reverse: function() {
        reverseAnimation();
        return this;
      }
    };
  });
};
var physics = function(props) {
  if (props === void 0) {
    props = {};
  }
  return action(function(_a) {
    var complete = _a.complete, update = _a.update;
    var _b = props.acceleration, acceleration = _b === void 0 ? 0 : _b, _c = props.friction, friction = _c === void 0 ? 0 : _c, _d = props.velocity, velocity = _d === void 0 ? 0 : _d, springStrength = props.springStrength, to = props.to;
    var _e = props.restSpeed, restSpeed = _e === void 0 ? 1e-3 : _e, _f = props.from, from = _f === void 0 ? 0 : _f;
    var current = from;
    var process2 = framesync_es_default.update(function(_a2) {
      var delta = _a2.delta;
      var elapsed = Math.max(delta, 16);
      if (acceleration) velocity += velocityPerFrame(acceleration, elapsed);
      if (friction) velocity *= Math.pow(1 - friction, elapsed / 100);
      if (springStrength !== void 0 && to !== void 0) {
        var distanceToTarget = to - current;
        velocity += distanceToTarget * velocityPerFrame(springStrength, elapsed);
      }
      current += velocityPerFrame(velocity, elapsed);
      update(current);
      var isComplete = restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed);
      if (isComplete) {
        cancelSync2.update(process2);
        complete();
      }
    }, true);
    return {
      set: function(v) {
        current = v;
        return this;
      },
      setAcceleration: function(v) {
        acceleration = v;
        return this;
      },
      setFriction: function(v) {
        friction = v;
        return this;
      },
      setSpringStrength: function(v) {
        springStrength = v;
        return this;
      },
      setSpringTarget: function(v) {
        to = v;
        return this;
      },
      setVelocity: function(v) {
        velocity = v;
        return this;
      },
      stop: function() {
        return cancelSync2.update(process2);
      }
    };
  });
};
var vectorPhysics = /* @__PURE__ */ createVectorAction(physics, {
  acceleration: number.test,
  friction: number.test,
  velocity: number.test,
  from: number.test,
  to: number.test,
  springStrength: number.test
});
var listen = function(element, events, options) {
  return action(function(_a) {
    var update = _a.update;
    var eventNames = events.split(" ").map(function(eventName) {
      element.addEventListener(eventName, update, options);
      return eventName;
    });
    return {
      stop: function() {
        return eventNames.forEach(function(eventName) {
          return element.removeEventListener(eventName, update, options);
        });
      }
    };
  });
};
var defaultPointerPos = function() {
  return {
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    x: 0,
    y: 0
  };
};
var eventToPoint = function(e, point2) {
  if (point2 === void 0) {
    point2 = defaultPointerPos();
  }
  point2.clientX = point2.x = e.clientX;
  point2.clientY = point2.y = e.clientY;
  point2.pageX = e.pageX;
  point2.pageY = e.pageY;
  return point2;
};
var points = [/* @__PURE__ */ defaultPointerPos()];
var isTouchDevice = false;
if (typeof document !== "undefined") {
  updatePointsLocation = function(_a) {
    var touches = _a.touches;
    isTouchDevice = true;
    var numTouches = touches.length;
    points.length = 0;
    for (var i = 0; i < numTouches; i++) {
      var thisTouch = touches[i];
      points.push(eventToPoint(thisTouch));
    }
  };
  listen(document, "touchstart touchmove", {
    passive: true,
    capture: true
  }).start(updatePointsLocation);
}
var updatePointsLocation;
var point = /* @__PURE__ */ defaultPointerPos();
var isMouseDevice = false;
if (typeof document !== "undefined") {
  updatePointLocation = function(e) {
    isMouseDevice = true;
    eventToPoint(e, point);
  };
  listen(document, "mousedown mousemove", true).start(updatePointLocation);
}
var updatePointLocation;

// node_modules/.pnpm/animate-css-grid@1.5.1/node_modules/animate-css-grid/dist/main.module.js
var $149c1bd638913645$var$popmotionEasing = {
  anticipate,
  backIn,
  backInOut,
  backOut,
  circIn,
  circInOut,
  circOut,
  easeIn,
  easeInOut,
  easeOut,
  linear
};
var $149c1bd638913645$var$DATASET_KEY = "animateGridId";
var $149c1bd638913645$var$getGridAwareBoundingClientRect = (gridBoundingClientRect, el) => {
  const { top, left, width, height } = el.getBoundingClientRect();
  const rect = {
    top,
    left,
    width,
    height
  };
  rect.top -= gridBoundingClientRect.top;
  rect.left -= gridBoundingClientRect.left;
  rect.top = Math.max(rect.top, 0);
  rect.left = Math.max(rect.left, 0);
  return rect;
};
var $149c1bd638913645$var$applyCoordTransform = (el, { translateX, translateY, scaleX, scaleY }, { immediate } = {}) => {
  const isFinished = translateX === 0 && translateY === 0 && scaleX === 1 && scaleY === 1;
  const styleEl = () => {
    el.style.transform = isFinished ? "" : `translateX(${translateX}px) translateY(${translateY}px) scaleX(${scaleX}) scaleY(${scaleY})`;
  };
  if (immediate) styleEl();
  else (0, es_default).render(styleEl);
  const firstChild = el.children[0];
  if (firstChild) {
    const styleChild = () => {
      firstChild.style.transform = isFinished ? "" : `scaleX(${1 / scaleX}) scaleY(${1 / scaleY})`;
    };
    if (immediate) styleChild();
    else (0, es_default).render(styleChild);
  }
};
var $149c1bd638913645$export$cfa74da6327324bf = (container, { duration = 250, stagger = 0, easing = "easeInOut", onStart = () => {
}, onEnd = () => {
} } = {}) => {
  if (!$149c1bd638913645$var$popmotionEasing[easing]) throw new Error(`${easing} is not a valid easing name`);
  let mutationsDisabled = false;
  const disableMutationsWhileFunctionRuns = (func) => {
    mutationsDisabled = true;
    func();
    setTimeout(() => {
      mutationsDisabled = false;
    }, 0);
  };
  const cachedPositionData = {};
  const recordPositions = (elements) => {
    const gridBoundingClientRect = container.getBoundingClientRect();
    Array.from(elements).forEach((el) => {
      if (typeof el.getBoundingClientRect !== "function") return;
      if (!el.dataset[$149c1bd638913645$var$DATASET_KEY]) {
        const newId = `${Math.random()}`;
        el.dataset[$149c1bd638913645$var$DATASET_KEY] = newId;
      }
      const animateGridId = el.dataset[$149c1bd638913645$var$DATASET_KEY];
      if (!cachedPositionData[animateGridId]) cachedPositionData[animateGridId] = {};
      const rect = $149c1bd638913645$var$getGridAwareBoundingClientRect(gridBoundingClientRect, el);
      cachedPositionData[animateGridId].rect = rect;
      cachedPositionData[animateGridId].gridBoundingClientRect = gridBoundingClientRect;
    });
  };
  recordPositions(container.children);
  const throttledResizeListener = (0, import_lodash.default)(() => {
    const bodyElement = document.querySelector("body");
    const containerIsNoLongerInPage = bodyElement && !bodyElement.contains(container);
    if (!container || containerIsNoLongerInPage) window.removeEventListener("resize", throttledResizeListener);
    recordPositions(container.children);
  }, 250);
  window.addEventListener("resize", throttledResizeListener);
  const throttledScrollListener = (0, import_lodash.default)(() => {
    recordPositions(container.children);
  }, 20);
  container.addEventListener("scroll", throttledScrollListener);
  const mutationCallback = (mutationsList) => {
    if (mutationsList !== "forceGridAnimation") {
      const relevantMutationHappened = mutationsList.filter((m) => m.attributeName === "class" || m.addedNodes.length || m.removedNodes.length).length;
      if (!relevantMutationHappened) return;
      if (mutationsDisabled) return;
    }
    const gridBoundingClientRect = container.getBoundingClientRect();
    const childrenElements = Array.from(container.children);
    childrenElements.filter((el) => {
      const itemPosition = cachedPositionData[el.dataset[$149c1bd638913645$var$DATASET_KEY]];
      if (itemPosition && itemPosition.stopTween) {
        itemPosition.stopTween();
        delete itemPosition.stopTween;
        return true;
      }
    }).forEach((el) => {
      el.style.transform = "";
      const firstChild = el.children[0];
      if (firstChild) firstChild.style.transform = "";
    });
    const animatedGridChildren = childrenElements.map((el) => ({
      childCoords: {},
      el,
      boundingClientRect: $149c1bd638913645$var$getGridAwareBoundingClientRect(gridBoundingClientRect, el)
    })).filter(({ el, boundingClientRect }) => {
      const itemPosition = cachedPositionData[el.dataset[$149c1bd638913645$var$DATASET_KEY]];
      if (!itemPosition) {
        recordPositions([
          el
        ]);
        return false;
      } else if (boundingClientRect.top === itemPosition.rect.top && boundingClientRect.left === itemPosition.rect.left && boundingClientRect.width === itemPosition.rect.width && boundingClientRect.height === itemPosition.rect.height)
        return false;
      return true;
    });
    animatedGridChildren.forEach(({ el }) => {
      if (Array.from(el.children).length > 1) throw new Error("Make sure every grid item has a single container element surrounding its children");
    });
    if (!animatedGridChildren.length) return;
    const animatedElements = animatedGridChildren.map(({ el }) => el);
    disableMutationsWhileFunctionRuns(() => onStart(animatedElements));
    const completionPromises = [];
    animatedGridChildren.map((data) => {
      const firstChild = data.el.children[0];
      if (firstChild) data.childCoords = $149c1bd638913645$var$getGridAwareBoundingClientRect(gridBoundingClientRect, firstChild);
      return data;
    }).forEach(({ el, boundingClientRect: { top, left, width, height }, childCoords: { top: childTop, left: childLeft } }, i) => {
      const firstChild = el.children[0];
      const itemPosition = cachedPositionData[el.dataset[$149c1bd638913645$var$DATASET_KEY]];
      const coords = {
        scaleX: itemPosition.rect.width / width,
        scaleY: itemPosition.rect.height / height,
        translateX: itemPosition.rect.left - left,
        translateY: itemPosition.rect.top - top
      };
      el.style.transformOrigin = "0 0";
      if (firstChild && childLeft === left && childTop === top) firstChild.style.transformOrigin = "0 0";
      let cachedResolve;
      const completionPromise = new Promise((resolve) => {
        cachedResolve = resolve;
      });
      completionPromises.push(completionPromise);
      $149c1bd638913645$var$applyCoordTransform(el, coords, {
        immediate: true
      });
      const startAnimation = () => {
        const { stop } = (0, tween)({
          from: coords,
          to: {
            translateX: 0,
            translateY: 0,
            scaleX: 1,
            scaleY: 1
          },
          duration,
          ease: $149c1bd638913645$var$popmotionEasing[easing]
        }).start({
          update: (transforms) => {
            $149c1bd638913645$var$applyCoordTransform(el, transforms);
            (0, es_default).postRender(() => recordPositions([
              el
            ]));
          },
          complete: cachedResolve
        });
        itemPosition.stopTween = stop;
      };
      if (typeof stagger !== "number") startAnimation();
      else {
        const timeoutId = setTimeout(() => {
          (0, es_default).update(startAnimation);
        }, stagger * i);
        itemPosition.stopTween = () => clearTimeout(timeoutId);
      }
    });
    Promise.all(completionPromises).then(() => {
      onEnd(animatedElements);
    });
  };
  const observer = new MutationObserver(mutationCallback);
  observer.observe(container, {
    childList: true,
    attributes: true,
    subtree: true,
    attributeFilter: [
      "class"
    ]
  });
  const unwrapGrid = () => {
    window.removeEventListener("resize", throttledResizeListener);
    container.removeEventListener("scroll", throttledScrollListener);
    observer.disconnect();
  };
  const forceGridAnimation = () => mutationCallback("forceGridAnimation");
  return {
    unwrapGrid,
    forceGridAnimation
  };
};
export {
  $149c1bd638913645$export$cfa74da6327324bf as wrapGrid
};
