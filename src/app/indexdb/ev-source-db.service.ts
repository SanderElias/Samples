import { computed, DestroyRef, inject, Injectable, signal, type Signal, type WritableSignal } from '@angular/core';
import { deepEqual } from '../../utils/objects/deep-equal';
import { EventSourceService } from './event-source.service';
import type { DbRecord } from './event-source.types';
import { createId, isId, type UniqueId } from './unique-id-helpers';

type TypeOf = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function';
@Injectable({
  providedIn: 'root',
})
export class EvSourceDbService {
  #$inMemDb = signal(new Map<UniqueId, WritableSignal<DbRecord>>(), { equal: () => false });
  #$availableTables = signal<Set<string>>(new Set(), { equal: () => false });
  #$availableTags = signal<Map<string, WritableSignal<Set<string>>>>(new Map(), { equal: () => false });
  #$availableTypes = signal<Map<string, WritableSignal<Map<string, TypeOf>>>>(new Map(), { equal: () => false });

  #evs = inject(EventSourceService);
  #des = inject(DestroyRef).onDestroy(() => {
    this.#sub.unsubscribe();
  });

  /* signal with the list of available tables */
  $availableTables = computed(() => Array.from(this.#$availableTables()));

  /* helper to return a signal holding the tags for a table */
  getTagsForTable = (table: string): Signal<Readonly<Array<string>>> =>
    computed(() => {
      const curSet = this.#$availableTags().get(table);
      return curSet ? Array.from(curSet()) : [];
    });

  /* helper to return a signal holding a map with types for a table */
  getTypesForTable = (table: string): Signal<Map<string, TypeOf>> =>
    computed(() => {
      const $typeMap = this.#$availableTypes().get(table)?.();
      if (!$typeMap) {
        throw new Error(`No types for table: ${table}`);
      }
      return $typeMap;
    });

  // listen for events from the event source service, and update the DB accordingly
  #sub = this.#evs.events$.subscribe(dbEvent => {
    const db = this.#$inMemDb();
    if (dbEvent.type === 'delete') {
      db.delete(dbEvent.payload.id);
      this.#$inMemDb.set(db); //remove record, trigger change
      return; // no need to continue
    }
    if (dbEvent.type === 'update') {
      const dbRecord = dbEvent.payload as DbRecord;
      const $original = db.get(dbEvent.payload.id);
      if ($original) {
        $original.set(removeEmptyValues({ ...$original(), ...dbRecord })); // update the inner signal.
      } else {
        db.set(dbEvent.payload.id, signal(removeEmptyValues(dbRecord)));
        this.#$inMemDb.set(db); // extra record, trigger change
      }
    }
    // update dependent states.
    const newRec = db.get(dbEvent.payload.id)!(); // get a reference to the updated record
    this.#updateAvailableTableList(newRec);
    this.#updateTagsForTable(newRec);
    this.#updateTypesForTable(newRec);
  });

  create = (row: DbRecord) => {
    const id = row.id || createId();
    if (!isId(id)) {
      throw new Error('id must be a unique identifier');
    }
    if (this.#$inMemDb().has(row.id)) {
      throw new Error(`Duplicate id: ${row.id}`);
    }
    // don't update the DB here, but instead post an event to the event source service.
    this.#evs.post({ type: 'update', payload: { ...row, id } });
  };

  /**
   * get a signal with the record for the given ID
   * @param id
   * @returns
   */
  read = (id: UniqueId) =>
    computed(() => {
      const row = this.#$inMemDb().get(id);
      if (!row) {
        throw new Error(`No row with id: ${id}`);
      }
      return row.asReadonly();
    });

  /**
   * Get a shallow copy of the data for the given ID
   * @param id
   * @returns
   */
  getData = (id: UniqueId) => {
    const data = this.#$inMemDb().get(id)?.();
    if (!data) {
      throw new Error(`No row with id: ${id}`);
    }
    return { ...data }; // return a shallow copy
  };

  update = (row: DbRecord): void => {
    const current = this.#$inMemDb().get(row.id)?.();
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
    // don't update the DB here, but instead post an event to the event source service.
    this.#evs.post({ type: 'update', payload: diff });
  };

  delete = (id: UniqueId): void => this.#evs.post({ type: 'delete', payload: { id } });

  list = (table: string) =>
    computed(() =>
      Array.from(this.#$inMemDb().values())
        .filter(row => row().table === table)
        .map(row => row.asReadonly())
    );

  /**
   * internal helper, will update the tags for a table when an event is received.
   * this means we don't have to iterate over all records to get the tags for a table.
   */
  #updateTagsForTable = (newRec: DbRecord) => {
    if (newRec.tags) {
      // update the tag-list for this table.
      if (!this.#$availableTags().has(newRec.table)) {
        // only trigger the signal when the table is not yet in the list.
        this.#$availableTags.update(mapAdd(newRec.table, signal(new Set())));
      }
      const tagsForTable = this.#$availableTags().get(newRec.table)!;
      newRec.tags.forEach(tag => {
        if (!tagsForTable().has(tag)) {
          // only trigger the signal when the tag is not yet in the list.
          tagsForTable.update(setAdd(tag));
        }
      });
    }
  };

  /**
   * internal helper, will update the list of available tables when an event is received.
   * this means we don't have to iterate over all records to get the available tables.
   */
  #updateAvailableTableList = (newRec: DbRecord) => {
    if (!this.#$availableTables().has(newRec.table)) {
      /* add the table to the list of available tables, and trigger signal change */
      this.#$availableTables.update(setAdd(newRec.table));
    }
  };

  #updateTypesForTable = (newRec: DbRecord) => {
    const types = this.#$availableTypes();
    if (!types.has(newRec.table)) {
      this.#$availableTypes.update(mapAdd(newRec.table, signal(new Map())));
    }
    const $typeSet = types.get(newRec.table)!;
    Object.entries(newRec).forEach(([key, value]) => {
      if (!$typeSet().has(key)) {
        $typeSet.update(mapAdd(key, typeof value));
      }
    });
  };
}

const setAdd =
  <T>(value: T): ((set: Set<T>) => Set<T>) =>
  (set: Set<T>) => {
    set.add(value);
    return set;
  };

const mapAdd =
  <K, V>(key: K, value: V): ((map: Map<K, V>) => Map<K, V>) =>
  (map: Map<K, V>) => {
    map.set(key, value);
    return map;
  };

/**
 * Helper function to remove empty values from an object (null, undefined, empty string)
 * @param obj
 * @returns
 */
const removeEmptyValues = <T extends Object>(obj: T): T =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    // > note: consider removing falsy values as well. and empty arrays/objects.
    if (!(value === undefined || value === null || (typeof value === 'string' && value.trim() === ''))) {
      acc[key] = value;
    }
    return acc;
  }, {} as T);
