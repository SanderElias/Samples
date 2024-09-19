import { Deferred } from 'src/utils/signals/deferred';

const allDbUpgrades = new Map<string, ((db: IDBDatabase) => IDBObjectStore)[]>();

export const getAllFromStore = async function* <T = any>(
  dbName: string,
  storeName: string
): AsyncGenerator<{ key: IDBValidKey; value: T }, void, unknown> {
  const db = await openDb(dbName);
  var tx = db.transaction(storeName);
  var store = tx.objectStore(storeName);
  let cursorDef = new Deferred<IDBCursorWithValue | null>();
  store.openCursor().addEventListener('success', function (event: Event) {
    cursorDef.resolve((event.target as IDBRequest<IDBCursorWithValue>)?.result);
  });

  while (true) {
    const cursor = await cursorDef.promise;
    if (!cursor) {
      break;
    }
    yield await { key: cursor.primaryKey, value: cursor.value };
    cursorDef = new Deferred();
    cursor.continue();
  }

  tx.onerror = function (event) {
    console.error('error', event);
  };
  // Close the db when the transaction is done
  tx.oncomplete = function (ev) {
    db.close();
  };
};

export const getData = async (dbName: string, storeName: string, key: number | IDBKeyRange): Promise<any[]> =>
  new Promise(async (resolve, reject) => {
    try {
      const db = await openDb(dbName);
      const tx = db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const results: any[] = [];
      const cursorRef = store.openCursor(key);
      cursorRef.onsuccess = function (event) {
        const cursor = (event.target as IDBRequest<IDBCursorWithValue>)?.result;
        if (!cursor) {
          db.close();
          return resolve(results);
        }
        results.push(cursor.value);
      };
      cursorRef.onerror = function (event) {
        reject(event);
      };
      tx.oncomplete = function () {
        db.close();
      };
    } catch (error) {
      reject(error);
    }
  });

export const saveToIndexedDb = async (dbName: string, storeName: string, event: any): Promise<boolean> =>
  new Promise(async (resolve, reject) => {
    try {
      const db = await openDb(dbName);

      if (!db.objectStoreNames.contains(storeName)) {
        throw new Error(`Object store ${storeName} not found in db ${dbName}`);
      }
      const tx = db.transaction(storeName, 'readwrite');
      const store = db.transaction(storeName, 'readwrite').objectStore(storeName);

      store.put(event);
      tx.oncomplete = function () {
        db.close();
        resolve(true);
      };
      tx.onerror = function (event) {
        reject(event);
      };
    } catch (error) {
      reject(error);
    }
  });

/**
 * Opens an IndexedDB database with the given name and applies any necessary upgrades.
 *
 * @param {string} db - The name of the database to open.
 * @returns {Promise<IDBDatabase>} A promise that resolves to the opened IDBDatabase instance.
 */
export const openDb: (db: string) => Promise<IDBDatabase> = (db: string): Promise<IDBDatabase> =>
  new Promise((resolve, reject) => {
    // handle the upgrades
    const upgrade = (upgrades: Array<(db: IDBDatabase) => void>) =>
      function (this: IDBOpenDBRequest, event: IDBVersionChangeEvent) {
        var db = this.result;
        const start = event.oldVersion === 0 ? 0 : event.oldVersion + 1;
        for (let i = start; i < upgrades.length; i++) {
          const upgrade = upgrades[i];
          try {
            upgrade(db);
          } catch (error) {
            reject(error);
          }
        }
      };

    if (typeof window === 'undefined') {
      return reject('IndexedDb not available');
    }

    const idb = window.indexedDB;
    if (!idb) {
      return reject('IndexedDB not available');
    }

    const upgrades = allDbUpgrades.get(db) ?? [];
    if (upgrades.length === 0) {
      return reject(`database ${db} has no initialized upgrades, make sure to first call initializeDb('${db}', /* upgrades */)`);
    }

    // Open (or create) the database
    const request = idb.open(db, upgrades.length);

    request.addEventListener('error', reject);
    request.addEventListener('upgradeneeded', upgrade(upgrades));
    request.addEventListener('success', () => resolve(request.result));
  });

/**
 * Initializes the IndexedDB database with the given name and upgrades.
 *
 * @param {string} dbName - The name of the database to initialize.
 * @param {Array<((db: IDBDatabase) => IDBObjectStore) | string>} upgrades - An array of upgrade functions or object store names.
 *   - If an element is a string, it represents the name of an object store to be created with auto-increment enabled.
 *   - If an element is a function, it takes an IDBDatabase instance and run the function.
 */
export const initializeDb = (dbName: string, upgrades: (((db: IDBDatabase) => IDBObjectStore) | string)[]): void => {
  allDbUpgrades.set(
    dbName,
    upgrades.map(u => (typeof u === 'string' ? db => db.createObjectStore(u, { autoIncrement: true }) : u))
  );
};
