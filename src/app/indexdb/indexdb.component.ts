import { Component } from '@angular/core';

const dbName = 'sample';
const storeName = 'testPeople';

@Component({
  selector: 'se-indexdb',
  standalone: true,
  imports: [],
  template: ` <p>indexdb works!</p> `,
  styleUrl: './indexdb.component.css',
})
export class IndexdbComponent {
  async addData() {
    const db = await openDb();

    // Start a new transaction
    var tx = db.transaction(storeName, 'readwrite');
    var store = tx.objectStore(storeName);

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
  }

  async getData() {
    const db = await openDb();

    var tx = db.transaction(storeName, 'readonly');
    var store = tx.objectStore(storeName);
    let cursor: IDBCursorWithValue | null;
    store.openCursor().addEventListener('success', function (event: Event) {
      cursor = (event.target as IDBRequest<IDBCursorWithValue>)?.result;
    });

    // @ts-expect-error - cursor is not null
    while (cursor) {
      console.log(cursor.value);
      cursor.continue();
    }
    // Close the db when the transaction is done
    tx.oncomplete = function () {
      db.close();
    };
  }

  constructor() {
    this.addData();
    this.getData();
  }
}

const openDb = (
  db = dbName,
  upgrades = [(db: IDBDatabase) => db.createObjectStore(storeName, { autoIncrement: true })]
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
