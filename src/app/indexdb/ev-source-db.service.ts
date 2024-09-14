import { computed, DestroyRef, inject, Injectable, signal, type WritableSignal } from '@angular/core';
import { deepEqual } from '../../utils/objects/deep-equal';
import { EventSourceService } from './event-source.service';
import type { DbRecord } from './event-source.types';
import { createId, isId, type UniqueId } from './unique-id-helpers';

@Injectable({
  providedIn: 'root',
})
export class EvSourceDbService {
  #inMemDb = signal(new Map<UniqueId, WritableSignal<DbRecord>>(), { equal: () => false });
  #availableTables = signal<Set<string>>(new Set(), { equal: () => false });

  #evs = inject(EventSourceService);
  #des = inject(DestroyRef).onDestroy(() => {
    this.#sub.unsubscribe();
  });

  availableTables = computed(() => Array.from(this.#availableTables()));

  // listen for events from the event source service, and update the DB accordingly
  #sub = this.#evs.events$.subscribe(dbEvent => {
    const db = this.#inMemDb();
    if (dbEvent.type === 'delete') {
      db.delete(dbEvent.payload.id);
      this.#inMemDb.set(db); //remove record, trigger change
      return; // no need to continue
    }
    if (dbEvent.type === 'update') {
      const dbRecord = dbEvent.payload as DbRecord;
      const old = db.get(dbEvent.payload.id);
      if (old) {
        old.set(removeUndefined({ ...old(), ...dbRecord })); // update the inner signal.
      } else {
        db.set(dbEvent.payload.id, signal(removeUndefined(dbRecord)));
        this.#inMemDb.set(db); // extra record, trigger change
      }
      const newRec = db.get(dbEvent.payload.id)!();
      if (!this.#availableTables().has(newRec.table)) {
        /* add the table to the list of available tables, and trigger signal change */
        this.#availableTables.update(tables => {
          tables.add(newRec.table);
          return tables;
        });
      }
    }
  });

  create = (row: DbRecord) => {
    const id = row.id || createId();
    if (!isId(id)) {
      throw new Error('id must be a unique identifier');
    }
    if (this.#inMemDb().has(row.id)) {
      throw new Error(`Duplicate id: ${row.id}`);
    }
    // this.#inMemDb.set(id, { ...row, id });
    this.#evs.post({ type: 'update', payload: { ...row, id } });
  };

  read = (id: UniqueId) => this.#inMemDb().get(id)?.asReadonly();
  getData = (id: UniqueId) => {
    const data = this.#inMemDb().get(id)?.();
    if (!data) {
      throw new Error(`No row with id: ${id}`);
    }
    return { ...data }; // return a shallow copy
  };

  update = (row: DbRecord): void => {
    const current = this.#inMemDb().get(row.id)?.();
    if (!current) {
      throw new Error(`No row with id: ${row.id}`);
    }

    // create a diff of the current and new row, aside from the ID, we only want to store the actual changed properties.
    const diff = Object.entries(row).reduce(
      (acc, [key, value]) => {
        if (!deepEqual(current[key], value)) {
          acc[key] = value;
        }
        return acc;
      },
      { id: row.id }
    );
    if (Object.keys(diff).length === 1 && diff.id !== undefined) {
      // no changes
      return;
    }
    this.#evs.post({ type: 'update', payload: diff });
  };

  delete = (id: UniqueId): void => this.#evs.post({ type: 'delete', payload: { id } });

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
