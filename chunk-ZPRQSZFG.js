import {
  isObject
} from "./chunk-IPCX26GH.js";
import {
  Injector,
  effect,
  inject,
  signal
} from "./chunk-4YMCON7N.js";
import {
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/mqtt/util/custom-idb-keyval.ts
var get;
var set;
var update;
var del;
if (typeof indexedDB !== "undefined") {
  const { createStore, get: oGet, set: oSet, update: oUpdate, del: oDel } = await import("./dist-6KFGPD4Z.js");
  const myStore = createStore("mqtt", "se-store");
  get = (key) => oGet(key, myStore);
  set = (key, value) => oSet(key, value, myStore);
  update = (key, value) => oUpdate(key, value, myStore);
  del = (key) => oDel(key, myStore);
} else {
  const mem = /* @__PURE__ */ new Map();
  set = async (k, v) => mem.set(k, v);
  del = async (k) => mem.delete(k);
  update = async (k, v) => mem.set(k, v);
  get = async (_) => void 0;
}

// src/app/mqtt/util/idbstorage.ts
function persistentSignal(key, initialValue, injector = inject(Injector)) {
  const result = signal(initialValue, {
    debugName: `Persisted ${key}`
  });
  get(key).then((value) => {
    if (value !== void 0) {
      if (isObject(value) && isObject(initialValue)) {
        result.set(__spreadValues(__spreadValues({}, initialValue), value));
      } else {
        result.set(value);
      }
    }
  }).catch(() => void 0);
  effect(async () => {
    const value = result();
    const oldValue = await get(key).catch(() => void 0);
    if (value === oldValue)
      return;
    if (value !== void 0) {
      set(key, value).catch(() => void 0);
    } else {
      del(key).catch(() => void 0);
    }
  }, { injector, debugName: `PersistEffect` });
  return result;
}

export {
  persistentSignal
};
