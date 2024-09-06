import { computed, DestroyRef, effect, inject, Injectable, signal, type WritableSignal } from '@angular/core';
import { EventSourceService } from './event-source.service';
import type { DbEvent, DbRecord, Id } from './event-source.types';

const randomChar = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// create a unique id, based on the current time, with a random character inserted between each digit.
export const createId = () =>
  Date.now()
    .toString(36)
    .split('')
    .map(ch => `${ch}${randomChar()}`)
    .join('');

@Injectable({
  providedIn: 'root',
})
export class EvSourceDbService {
  #inMemDb = signal(new Map<Id, WritableSignal<DbRecord>>(), { equal: () => false });
  #evs = inject(EventSourceService);
  #des = inject(DestroyRef).onDestroy(() => {
    this.#sub.unsubscribe();
  });

  availableTables = computed(() => {
    const data = this.#inMemDb().values();
    const tables = new Set<string>();
    for (const row of data) {
      tables.add(row().table);
    }
    return Array.from(tables);
  });

  // listen for events from the event source service, and update the DB accordingly
  #sub = this.#evs.events$.subscribe(dbEvent => {
    const db = this.#inMemDb();
    if (dbEvent.type === 'delete') {
      db.delete(dbEvent.payload.id);
      this.#inMemDb.set(db); //remove record, trigger change
    } else if (dbEvent.type === 'update') {
      const dbRecord = dbEvent.payload as DbRecord;
      const old = db.get(dbEvent.payload.id);
      if (old) {
        old.set(removeUndefined({ ...old(), ...dbRecord })); // update the inner signal.
      } else {
        db.set(dbEvent.payload.id, signal(removeUndefined(dbRecord)));
        this.#inMemDb.set(db); // extra record, trigger change
      }
    }
  });

  create = (row: DbRecord) => {
    const id = row.id || createId();
    if (typeof id !== 'string') {
      throw new Error('id must be a string');
    }
    if (this.#inMemDb().has(row.id)) {
      throw new Error(`Duplicate id: ${row.id}`);
    }
    // this.#inMemDb.set(id, { ...row, id });
    this.#evs.post({ type: 'update', payload: { ...row, id } });
  };

  read = (id: Id) => this.#inMemDb().get(id)?.asReadonly();
  getData = (id: Id) => {
    const data = this.#inMemDb().get(id)?.();
    if (!data) {
      throw new Error(`No row with id: ${id}`);
    }
    return {...data}; // return a shallow copy
  }

  update = (row: DbRecord): void => {
    const current = this.#inMemDb().get(row.id)?.();
    if (!current) {
      throw new Error(`No row with id: ${row.id}`);
    }

    // create a diff of the current and new row, aside from the ID, we only want to store the actual changes.
    const diff = Object.entries(row).reduce(
      (acc, [key, value]) => {
        if (current[key] !== value) {
          acc[key] = value;
        }
        return acc;
      },
      { id: row.id }
    );
    if (Object.keys(diff).length === 1 && diff.id!==undefined) {
      // no changes
      return;
    }
    this.#evs.post({ type: 'update', payload: diff });
  };

  delete = (id: Id): void => this.#evs.post({ type: 'delete', payload: { id } });

  list = (table: string) =>
    computed(() =>
      Array.from(this.#inMemDb().values())
        .filter(row => row().table === table)
        .map(row => row.asReadonly())
    );

  // constructor() {
  //   effect(() => {
  //     const db = this.#inMemDb();
  //   });
  // }
}

const removeUndefined = <T extends Object>(obj: T): T =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    if (value !== undefined || value !== null) {
      acc[key] = value;
    }
    return acc;
  }, {} as T);
