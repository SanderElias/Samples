// node_modules/.pnpm/idb-keyval@6.2.2/node_modules/idb-keyval/dist/index.js
function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.oncomplete = request.onsuccess = () => resolve(request.result);
    request.onabort = request.onerror = () => reject(request.error);
  });
}
function createStore(dbName, storeName) {
  let dbp;
  const getDB = () => {
    if (dbp)
      return dbp;
    const request = indexedDB.open(dbName);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    dbp = promisifyRequest(request);
    dbp.then((db) => {
      db.onclose = () => dbp = void 0;
    }, () => {
    });
    return dbp;
  };
  return (txMode, callback) => getDB().then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
var defaultGetStoreFunc;
function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore("keyval-store", "keyval");
  }
  return defaultGetStoreFunc;
}
function get(key, customStore = defaultGetStore()) {
  return customStore("readonly", (store) => promisifyRequest(store.get(key)));
}
function set(key, value, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  });
}
function setMany(entries2, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    entries2.forEach((entry) => store.put(entry[1], entry[0]));
    return promisifyRequest(store.transaction);
  });
}
function getMany(keys2, customStore = defaultGetStore()) {
  return customStore("readonly", (store) => Promise.all(keys2.map((key) => promisifyRequest(store.get(key)))));
}
function update(key, updater, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => (
    // Need to create the promise manually.
    // If I try to chain promises, the transaction closes in browsers
    // that use a promise polyfill (IE10/11).
    new Promise((resolve, reject) => {
      store.get(key).onsuccess = function() {
        try {
          store.put(updater(this.result), key);
          resolve(promisifyRequest(store.transaction));
        } catch (err) {
          reject(err);
        }
      };
    })
  ));
}
function del(key, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.delete(key);
    return promisifyRequest(store.transaction);
  });
}
function delMany(keys2, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    keys2.forEach((key) => store.delete(key));
    return promisifyRequest(store.transaction);
  });
}
function clear(customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.clear();
    return promisifyRequest(store.transaction);
  });
}
function eachCursor(store, callback) {
  store.openCursor().onsuccess = function() {
    if (!this.result)
      return;
    callback(this.result);
    this.result.continue();
  };
  return promisifyRequest(store.transaction);
}
function keys(customStore = defaultGetStore()) {
  return customStore("readonly", (store) => {
    if (store.getAllKeys) {
      return promisifyRequest(store.getAllKeys());
    }
    const items = [];
    return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
  });
}
function values(customStore = defaultGetStore()) {
  return customStore("readonly", (store) => {
    if (store.getAll) {
      return promisifyRequest(store.getAll());
    }
    const items = [];
    return eachCursor(store, (cursor) => items.push(cursor.value)).then(() => items);
  });
}
function entries(customStore = defaultGetStore()) {
  return customStore("readonly", (store) => {
    if (store.getAll && store.getAllKeys) {
      return Promise.all([
        promisifyRequest(store.getAllKeys()),
        promisifyRequest(store.getAll())
      ]).then(([keys2, values2]) => keys2.map((key, i) => [key, values2[i]]));
    }
    const items = [];
    return customStore("readonly", (store2) => eachCursor(store2, (cursor) => items.push([cursor.key, cursor.value])).then(() => items));
  });
}

export {
  promisifyRequest,
  createStore,
  get,
  set,
  setMany,
  getMany,
  update,
  del,
  delMany,
  clear,
  keys,
  values,
  entries
};
