import {
  HttpClient
} from "./chunk-UN3GGFEO.js";
import {
  DestroyRef,
  Injectable,
  Injector,
  computed,
  effect,
  firstValueFrom,
  inject,
  isDevMode,
  isObservable,
  isWritableSignal,
  linkedSignal,
  runInInjectionContext,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-4YMCON7N.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// dist/se-ng/signal-utils/fesm2022/se-ng-signal-utils.mjs
var Deferred = class {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
};
function isDate(date) {
  return typeof date?.getMonth === "function";
}
var cloneDeep = (value, existingClones = /* @__PURE__ */ new Map()) => {
  if (value === null || typeof value !== "object") {
    return value;
  }
  if (isDate(value)) {
    return new Date(value.getTime());
  }
  if (existingClones.has(value)) {
    return existingClones.get(value);
  }
  const deepClone = (x) => cloneDeep(x, existingClones);
  if (value instanceof RegExp) {
    const clone2 = new RegExp(value.source, value.flags);
    clone2.lastIndex = value.lastIndex;
    existingClones.set(value, clone2);
    return clone2;
  }
  if (value instanceof Set) {
    const clone2 = /* @__PURE__ */ new Set();
    existingClones.set(value, clone2);
    [...value].forEach((val) => clone2.add(deepClone(val)));
    return clone2;
  }
  if (value instanceof Map) {
    const clone2 = /* @__PURE__ */ new Map();
    existingClones.set(value, clone2);
    [...value.entries()].forEach((val) => clone2.set(deepClone(val[0]), deepClone(val[1])));
    return clone2;
  }
  if (Array.isArray(value)) {
    const clone2 = new Array(value.length);
    existingClones.set(value, clone2);
    value.forEach((val, i) => clone2[i] = deepClone(val));
    return clone2;
  }
  const clone = __spreadValues({}, value);
  existingClones.set(value, clone);
  for (const [key, val] of Object.entries(clone)) {
    if (val !== null && typeof val === "object") {
      clone[key] = deepClone(val);
    }
  }
  return clone;
};
var isTemporal = (value) => {
  const tag = value?.[Symbol.toStringTag];
  return tag?.startsWith("Temporal") ?? false;
};
var isObject = (x) => {
  if (typeof x !== "object") {
    return false;
  }
  if (x === null) {
    return false;
  }
  if (Array.isArray(x)) {
    return false;
  }
  if (isDate(x)) {
    return false;
  }
  if (isTemporal(x)) {
    return false;
  }
  return true;
};
function flattenRecord(r, options) {
  const onCircular = options?.onCircular ?? "throw";
  const marker = options?.marker ?? "[Circular]";
  return _flattenRecord(r, "", void 0, onCircular, marker);
}
function _flattenRecord(r, prefix = "", ancestors, onCircular = "throw", marker = "[Circular]") {
  const acc = {};
  ancestors ??= /* @__PURE__ */ new WeakSet();
  if (ancestors.has(r)) {
    if (onCircular === "throw") throw new Error("Circular reference detected");
    return acc;
  }
  ancestors.add(r);
  for (const [objectKey, value] of Object.entries(r)) {
    const key = `${prefix}${objectKey}`;
    if ((isObject(value) || Array.isArray(value)) && ancestors.has(value)) {
      if (onCircular === "throw") throw new Error(`Circular reference detected at key ${key}`);
      acc[key] = marker;
      continue;
    }
    if (isObject(value)) {
      Object.assign(acc, _flattenRecord(value, `${key}.`, ancestors, onCircular, marker));
      continue;
    }
    if (Array.isArray(value)) {
      Object.assign(acc, _flattenArray(value, `${key}.`, ancestors, onCircular, marker));
      continue;
    }
    acc[key] = value;
  }
  ancestors.delete(r);
  return acc;
}
function _flattenArray(a, prefix = "", ancestors, onCircular = "throw", marker = "[Circular]") {
  const acc = {};
  ancestors ??= /* @__PURE__ */ new WeakSet();
  if (ancestors.has(a)) {
    if (onCircular === "throw") throw new Error("Circular reference detected");
    return acc;
  }
  ancestors.add(a);
  for (let i = 0; i < a.length; i++) {
    const value = a[i];
    const key = `${prefix}${i}`;
    if ((isObject(value) || Array.isArray(value)) && ancestors.has(value)) {
      if (onCircular === "throw") throw new Error(`Circular reference detected at key ${key}`);
      acc[key] = marker;
      continue;
    }
    if (isObject(value)) {
      Object.assign(acc, _flattenRecord(value, `${key}.`, ancestors, onCircular, marker));
      continue;
    }
    if (Array.isArray(value)) {
      Object.assign(acc, _flattenArray(value, `${key}.`, ancestors, onCircular, marker));
      continue;
    }
    acc[key] = value;
  }
  ancestors.delete(a);
  return acc;
}
var _isTestEnv = typeof process !== "undefined" && (process.env?.VITEST === "true" || process.env?.VITEST === "1" || typeof globalThis.__vitest !== "undefined");
if (_isTestEnv) {
  flattenRecord.__test = {
    _flattenRecord,
    _flattenArray
  };
}
var isIntegerString = (str) => {
  return /^\d+$/.test(str);
};
var assertDefined = (value, message = "Value is undefined") => {
  if (value === void 0) {
    throw new Error(message);
  }
  return value;
};
function pathToArray(path) {
  if (path.split("").reduce(
    // count open and close brackets, reject if unbalanced
    (acc, c) => c === "[" ? acc + 1 : c === "]" ? acc - 1 : acc,
    0
  ) !== 0) {
    return void 0;
  }
  let cleanStr = path.replace(/[[\]]/g, (m) => m === "[" ? "." : "").replaceAll(",", ".").replaceAll(`"`, "").replaceAll(`'`, "").replaceAll("`", "").replaceAll(" ", "");
  if (path.trim().startsWith("[")) cleanStr = cleanStr.replace(/^[.]+/, "");
  const tokens = cleanStr.split(".").map((t) => t.trim());
  if (tokens.some((t) => t === "")) {
    return void 0;
  }
  return tokens;
}
function unFlattenRecord(r) {
  return Object.entries(r).reduce((acc, [k, v]) => {
    const path = assertDefined(pathToArray(k), `[unFlattenRecord] Invalid path "${k}": found empty segments`);
    const slot = path.pop();
    let obj = acc;
    for (let idx = 0; idx < path.length; idx++) {
      const key = path[idx];
      const nextKey = path[idx + 1] ?? slot;
      obj = obj[key] ??= isIntegerString(nextKey) ? [] : {};
    }
    obj[slot] = v;
    return acc;
  }, {});
}
var deepDiff = (a, b) => {
  const aFlat = flattenRecord(a);
  const bFlat = flattenRecord(b);
  const diff = {};
  for (const key in aFlat) {
    if (aFlat[key] !== bFlat[key]) {
      diff[key] = bFlat[key] ?? aFlat[key];
    }
  }
  for (const key in bFlat) {
    if (!(key in aFlat)) {
      diff[key] = bFlat[key];
    }
  }
  return unFlattenRecord(diff);
};
function deepEqual(a, b) {
  if (a === b) return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor) return false;
    let length, i;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; ) if (!deepEqual(a[i], b[i])) return false;
      return true;
    }
    if (a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      for (i of a.entries()) if (!b.has(i[0])) return false;
      for (i of a.entries()) if (!deepEqual(i[1], b.get(i[0]))) return false;
      return true;
    }
    if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      for (i of a.entries()) if (!b.has(i[0])) return false;
      return true;
    }
    if (a instanceof Date && b instanceof Date) {
      return a.getTime() === b.getTime();
    }
    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; ) if (a[i] !== b[i]) return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    const keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
var mergeDeep = (target, source, options = {}, path = []) => {
  const resolveMergeStrategy = (propertyPath) => typeof options.iterableMergeStrategy === "function" ? options.iterableMergeStrategy(propertyPath) : options.iterableMergeStrategy ?? "concat";
  const skipAssignUndefined = options.skipAssignUndefined ?? false;
  if (!(Array.isArray(target) || isObject(target)) || !(Array.isArray(source) || isObject(source))) {
    throw new Error("[deepMergeObjects] target and source must be objects or arrays");
  }
  const result = cloneDeep(target);
  for (const [key, value] of Object.entries(source)) {
    const valueToMerge = value;
    const currentValue = result[key];
    if (skipAssignUndefined && valueToMerge === void 0) {
      continue;
    }
    const childPath = [...path, key];
    if (Array.isArray(valueToMerge)) {
      const mergeStrategy = resolveMergeStrategy(childPath);
      switch (mergeStrategy) {
        case "concat": {
          result[key] = (currentValue ?? []).concat(valueToMerge);
          break;
        }
        case "replace": {
          result[key] = cloneDeep(valueToMerge);
          break;
        }
        case "merge": {
          result[key] = deepMergeArray(currentValue ?? [], valueToMerge, options, childPath);
          break;
        }
      }
    } else if (valueToMerge instanceof Set) {
      const mergeStrategy = resolveMergeStrategy(childPath);
      if (mergeStrategy === "replace" || currentValue === void 0) {
        result[key] = new Set(valueToMerge);
      } else {
        if (!(currentValue instanceof Set)) {
          throw new Error("[deepMergeObjects] Cannot merge or concat a Set with a non-Set");
        }
        result[key] = /* @__PURE__ */ new Set([...currentValue, ...valueToMerge]);
      }
    } else if (valueToMerge instanceof Map) {
      const mergeStrategy = resolveMergeStrategy(childPath);
      if (mergeStrategy === "replace" || currentValue === void 0) {
        result[key] = new Map(valueToMerge);
      } else {
        if (!(currentValue instanceof Map)) {
          throw new Error("[deepMergeObjects] Cannot merge or concat a Map with a non-Map");
        }
        result[key] = new Map([...currentValue, ...valueToMerge]);
      }
    } else if (isObject(valueToMerge)) {
      result[key] = mergeDeep(isObject(currentValue) ? currentValue : {}, valueToMerge, options, childPath);
    } else if (valueToMerge instanceof Date) {
      result[key] = new Date(valueToMerge);
    } else {
      result[key] = valueToMerge;
    }
  }
  return result;
};
var deepMergeArray = (target, source, options = {}, path = []) => {
  const result = target.reduce((acc, value, index) => {
    acc[index] = cloneDeep(value);
    return acc;
  }, []);
  source.forEach((value, index) => {
    let valueToMerge = result[index];
    if (Array.isArray(value)) {
      valueToMerge = deepMergeArray(valueToMerge ?? [], value, options, path);
    } else if (isObject(value)) {
      valueToMerge = mergeDeep(valueToMerge ?? {}, value, options, path);
    } else {
      valueToMerge = cloneDeep(value);
    }
    result[index] = valueToMerge;
  });
  return result;
};
var isAsyncIterable = (x) => {
  if (x === null || x === void 0) return false;
  return x && typeof x[Symbol.asyncIterator] === "function";
};
var isPromise = (value) => {
  return typeof value?.then === "function";
};
var injectAwaitSignal = (injector = inject(Injector)) => {
  return (signal2, predicate, abortSignal) => runInInjectionContext(injector, () => awaitSignal(signal2, predicate, abortSignal));
};
var awaitSignal = (signal2, predicate, abortSignal) => {
  const deferred = new Deferred();
  const effectRef = effect(() => {
    try {
      const result = signal2();
      if (predicate(result)) {
        deferred.resolve(result);
        effectRef.destroy();
      }
    } catch (e) {
      if (e instanceof Error && e.message.startsWith("NG0950")) return;
      deferred.reject(e);
      effectRef.destroy();
    }
  }, {
    debugName: "awaitSignal"
  });
  abortSignal?.addEventListener("abort", () => {
    deferred.reject(abortSignal.reason);
    effectRef.destroy();
  });
  return deferred.promise;
};
var HttpActionClient = class _HttpActionClient {
  constructor() {
    this.#http = inject(HttpClient);
    this.#methodBusy = {
      DELETE: signal(0),
      HEAD: signal(0),
      PATCH: signal(0),
      POST: signal(0),
      PUT: signal(0),
      GET: signal(0)
    };
    this.busyMethods = {
      DELETE: computed(() => this.#methodBusy.DELETE() !== 0),
      HEAD: computed(() => this.#methodBusy.HEAD() !== 0),
      PATCH: computed(() => this.#methodBusy.PATCH() !== 0),
      POST: computed(() => this.#methodBusy.POST() !== 0),
      PUT: computed(() => this.#methodBusy.PUT() !== 0),
      GET: computed(() => this.#methodBusy.GET() !== 0)
    };
    this.isBusy = computed(
      () => Object.values(this.#methodBusy).some((b) => b() !== 0),
      ...ngDevMode ? [{
        debugName: "isBusy"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#awaitSignal = injectAwaitSignal();
    this.#busyWrap = async (method, p) => {
      await this.#awaitSignal(this.#methodBusy[method], (busy) => busy === 0);
      this.#methodBusy[method].update((v) => v + 1);
      try {
        return await p;
      } finally {
        this.#methodBusy[method].update((v) => v - 1);
      }
    };
  }
  #http;
  #methodBusy;
  #awaitSignal;
  #busyWrap;
  delete(url, options = {}) {
    return this.#busyWrap("DELETE", firstValueFrom(this.#http.delete(url, options)));
  }
  head(url, options) {
    return this.#busyWrap("HEAD", firstValueFrom(this.#http.head(url, options)));
  }
  patch(url, body, options) {
    return this.#busyWrap("PATCH", firstValueFrom(this.#http.patch(url, body, options)));
  }
  post(url, body, options = {}) {
    return this.#busyWrap("POST", firstValueFrom(this.#http.post(url, body, options)));
  }
  put(url, body, options = {}) {
    return this.#busyWrap("PUT", firstValueFrom(this.#http.put(url, body, options)));
  }
  get(url, options = {}) {
    return this.#busyWrap("GET", firstValueFrom(this.#http.get(url, options)));
  }
  static {
    this.\u0275fac = function HttpActionClient_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpActionClient)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _HttpActionClient,
      factory: _HttpActionClient.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpActionClient, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var asyncComputed = (cb, initialValue, destroyRef) => {
  const state = signal(
    {
      value: initialValue,
      error: void 0
      // not adding the completed state. a Signals has no way to communicate this
      // to its consumers without custom wrapping. That is a different concern that
      // is outside the scope of this helper
      /* c8 ignore start */
    },
    ...ngDevMode ? [{
      debugName: "state"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  try {
    destroyRef = destroyRef ?? inject(DestroyRef);
  } catch (e) {
    if (!destroyRef) {
      throw new Error("[asyncComputed] destroyRef is mandatory when used outside a injection context");
    }
    if (!(destroyRef instanceof DestroyRef)) {
      throw new Error("[asyncComputed] parameter destroyRef is not a DestroyRef");
    }
  }
  let abortPrevious;
  let subscription;
  const cleanUp = () => (subscription?.unsubscribe(), abortPrevious?.abort());
  const assertContinue = (as) => {
    if (as.aborted) {
      throw new Error("aborted");
    }
  };
  destroyRef.onDestroy(() => {
    cleanUp();
    ref.destroy();
  });
  const ref = effect(
    async (onCleanup) => {
      onCleanup(cleanUp);
      try {
        abortPrevious = new AbortController();
        const abortSignal = abortPrevious.signal;
        const outcome = cb(abortSignal);
        assertContinue(abortSignal);
        if (isObservable(outcome)) {
          subscription = outcome.subscribe({
            next: (value) => {
              assertContinue(abortSignal);
              state.set({
                value
              });
            },
            error: (error) => {
              assertContinue(abortSignal);
              state.set({
                error
              });
            }
          });
        } else if (isPromise(outcome)) {
          const value = await outcome;
          assertContinue(abortSignal);
          state.set({
            value
          });
        } else if (isAsyncIterable(outcome)) {
          for await (const value of outcome) {
            assertContinue(abortSignal);
            state.set({
              value
            });
          }
        } else {
          state.set({
            value: outcome
          });
        }
      } catch (error) {
        if (error.message !== "aborted") {
          state.set({
            error
          });
        }
      }
    },
    /**
     * ManualCleanup to make sure that the cleanup is called when the effect is cleaned up, so we don't leak
     */
    {
      manualCleanup: true,
      debugName: "asyncComputed"
    }
  );
  return computed(() => {
    const currentState = state();
    if (currentState.error) {
      if (isDevMode()) {
        console.warn(`
  [asyncComputed] error: ${currentState.error.message}
    The error was thrown inside the callback function. The best way to handle
    this error is  inside that function. However, asyncComputed will rethrow
    the error to make sure that the error is not silently ignored.
    The error will be reset when one of the signals inside the function changes.
    Until that happens, the error will be re-thrown by Angular on every use
    of the signal. (usually every change detection cycle)
    (this warning is only shown in dev mode)
`);
      }
      throw currentState.error;
    }
    return currentState.value;
  });
};
var computedResource = (cb, initialValue, destroyRef) => {
  const state = signal(
    {
      value: initialValue,
      error: void 0,
      status: "init",
      stream: "init"
    },
    ...ngDevMode ? [{
      debugName: "state"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  const upState = (s) => state.update((prev) => __spreadValues(__spreadValues({}, prev), s));
  try {
    destroyRef = destroyRef ?? inject(DestroyRef);
  } catch (e) {
    if (!destroyRef) {
      throw new Error("[asyncComputed] destroyRef is mandatory when used outside a injection context");
    }
    if (!(destroyRef instanceof DestroyRef)) {
      throw new Error("[asyncComputed] parameter destroyRef is not a DestroyRef");
    }
  }
  let abortPrevious;
  let subscription;
  const cleanUp = () => (subscription?.unsubscribe(), abortPrevious?.abort());
  const assertContinue = (as) => {
    if (as.aborted) {
      throw new Error("aborted");
    }
  };
  destroyRef.onDestroy(() => {
    cleanUp();
    ref.destroy();
  });
  const ref = effect(async (onCleanup) => {
    onCleanup(cleanUp);
    upState({
      status: "triggered"
      /* ResourceState.triggered */
    });
    try {
      abortPrevious = new AbortController();
      const abortSignal = abortPrevious.signal;
      const outcome = cb(abortSignal);
      assertContinue(abortSignal);
      upState({
        status: "loading",
        stream: "init"
      });
      if (isObservable(outcome)) {
        upState({
          stream: "ongoing"
        });
        subscription = outcome.subscribe({
          next: (value) => {
            assertContinue(abortSignal);
            state.update((s) => __spreadProps(__spreadValues({}, s), {
              value,
              error: void 0,
              status: "awaiting"
              /* ResourceState.awaiting */
            }));
          },
          error: (error) => {
            assertContinue(abortSignal);
            upState({
              error,
              value: void 0,
              status: "error",
              stream: "done"
            });
          },
          complete: () => {
            assertContinue(abortSignal);
            upState({
              stream: "done"
            });
          }
        });
      } else if (isPromise(outcome)) {
        const value = await outcome;
        assertContinue(abortSignal);
        upState({
          value,
          error: void 0,
          status: "loaded",
          stream: "done"
        });
      } else if (isAsyncIterable(outcome)) {
        upState({
          stream: "ongoing"
        });
        for await (const value of outcome) {
          assertContinue(abortSignal);
          upState({
            value,
            error: void 0,
            status: "awaiting"
            /* ResourceState.awaiting */
          });
        }
        upState({
          stream: "done"
        });
      } else {
        upState({
          value: outcome,
          error: void 0,
          status: "loaded",
          stream: "done"
        });
      }
    } catch (error) {
      if (error.message !== "aborted") {
        upState({
          error
        });
      }
    }
  }, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "ref"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    manualCleanup: true
  }));
  const valueSignal = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "valueSignal"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    source: () => state().value,
    computation: (source) => source
  }));
  return computed(() => {
    const currentState = state();
    return {
      value: valueSignal,
      error: currentState.error,
      status: currentState.status,
      stream: currentState.stream
    };
  });
};
var assertObject = (value, message = "Expected an object value") => {
  if (!isObject(value)) {
    throw new Error(message);
  }
  return value;
};
var proxySignal = (prop, source) => {
  if (!isWritableSignal(source)) {
    throw new Error("Source signal must be writable");
  }
  const proxy = linkedSignal(() => assertObject(source(), "Source signal must be an object")[prop], {
    debugName: `proxySignal(${String(prop)})`
  });
  proxy.set = (newValue) => {
    source.update((currentSource) => __spreadProps(__spreadValues({}, assertObject(currentSource, "Source signal must be an object")), {
      [prop]: newValue
    }));
  };
  proxy.update = (fn) => {
    source.update((currentSource) => {
      const sourceValue = assertObject(currentSource, "Source signal must be an object");
      return __spreadProps(__spreadValues({}, sourceValue), {
        [prop]: fn(sourceValue[prop])
      });
    });
  };
  return proxy;
};
var debouncedSignal = (fn, options) => {
  let decayTime;
  const delay = options.delay ?? 500;
  if (delay <= 0) {
    throw new Error("[debouncedSignal] delay must be a positive number");
  }
  const triggerSignal = signal(
    0,
    ...ngDevMode ? [{
      debugName: "triggerSignal"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  const linked = linkedSignal({
    source: () => ({
      value: fn(),
      time: triggerSignal()
    }),
    computation: ({
      value,
      time
    }, previous) => {
      if (!previous) {
        return value;
      }
      if (!decayTime) {
        decayTime = Date.now() + delay;
        setTimeout(
          () => triggerSignal.set(time + 1),
          // trigger the signal to update the value
          delay + 1
          // add 1ms to make sure the signal is updated after the delay
        );
      }
      if (decayTime < Date.now()) {
        decayTime = void 0;
        return value;
      }
      return previous.value;
    },
    equal: options.equal,
    debugName: "debouncedSignal"
  });
  if (isWritableSignal(fn)) {
    const originSignal = fn;
    linked.set = originSignal.set;
    linked.update = originSignal.update;
  }
  return linked;
};
var debouncedComputed = (fn, options) => debouncedSignal(fn, options).asReadonly();

export {
  Deferred,
  cloneDeep,
  isObject,
  flattenRecord,
  assertDefined,
  unFlattenRecord,
  deepDiff,
  deepEqual,
  mergeDeep,
  HttpActionClient,
  asyncComputed,
  computedResource,
  proxySignal,
  debouncedComputed
};
