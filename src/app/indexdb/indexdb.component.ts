import { Component } from '@angular/core';
import { Deferred } from 'src/utils/signals/deferred';

const globalDbName = 'sample';
const globalStoreName = 'testPeople';

@Component({
  selector: 'se-indexdb',
  standalone: true,
  imports: [],
  template: ` <p>indexdb works!</p> `,
  styleUrl: './indexdb.component.css',
})
export class IndexdbComponent {
  async addData() {
    try {
      const db = await openDb();

      // Start a new transaction
      var tx = db.transaction(globalStoreName, 'readwrite');
      var store = tx.objectStore(globalStoreName);

      // Add some data
      store.put({ id: 1, name: { first: 'John', last: 'Doe' }, age: 42 });
      store.put({ id: 2, name: { first: 'Bob', last: 'Smith' }, age: 35 });
      store.put({ id: 3, name: { first: 'John', last: 'Doe' }, age: 42 });
      store.put({ id: 4, name: { first: 'Bob', last: 'Smith' }, age: 35 });
      store.put({ id: 5, name: { first: 'John', last: 'Doe' }, age: 42 });
      store.put({ id: 6, name: { first: 'Bob', last: 'Smith' }, age: 35 });
      store.put({ id: 7, name: { first: 'John', last: 'Doe' }, age: 42 });
      store.put({ id: 8, name: { first: 'Bob', last: 'Smith' }, age: 35 });
      store.put({ id: 9, name: { first: 'John', last: 'Doe' }, age: 42 });
      store.put({ id: 10, name: { first: 'Bob', last: 'Smith' }, age: 35 });

      // Close the db when the transaction is done
      tx.oncomplete = function () {
        db.close();
      };
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async getData() {
    try {
      for await (const data of getAllFromStore()) {
        console.log(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  constructor() {
    try {
      // this.addData();
      this.getData();
    } catch (error) {
      console.error('No server-side indexedDB:', error);
    }
    // this.addData();
    // this.getData();
  }
}

const getAllFromStore = async function* (dbName = globalDbName, storeName = globalStoreName) {
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
    yield await {key: cursor.primaryKey, value: cursor.value};
    cursorDef = new Deferred();
    cursor.continue();
  }

  tx.onerror = function (event) {
    console.error('error', event);
  };
  // Close the db when the transaction is done
  tx.oncomplete = function (ev) {
    console.log('tx complete', ev);
    db.close();
  };
};

const openDb = (
  db = globalDbName,
  upgrades = [(db: IDBDatabase) => db.createObjectStore(globalStoreName, { autoIncrement: true })]
): Promise<IDBDatabase> =>
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
      return reject('Window not found');
    }

    const idb = window.indexedDB;
    if (!idb) {
      return reject('IndexedDB not supported');
    }

    // Open (or create) the database
    const request = idb.open(db, upgrades.length);

    request.addEventListener('error', reject);
    request.addEventListener('upgradeneeded', upgrade(upgrades));
    request.addEventListener('success', () => resolve(request.result));
  });
