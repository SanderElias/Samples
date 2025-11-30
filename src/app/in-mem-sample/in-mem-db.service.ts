import type { Signal} from '@angular/core';
import { computed, Injectable, signal, type WritableSignal } from '@angular/core';

import type { DbRecord, Id} from './in-mem.model';
import { type NewDbRecord } from './in-mem.model';
import { assertRecord, createId } from './in-mem-utils';

@Injectable({
  providedIn: 'root'
})
export class InMemDb {
  #db = signal<Map<Id, WritableSignal<DbRecord>>>(new Map(), { equal: () => false });
  #indexes = new Map<
    string,
    WritableSignal<{
      sortFn: (dbRecord) => string;
      table: string;
      index: Map<Id, string>;
    }>
  >();

  create<T extends NewDbRecord>(record: T): void {
    const id = record.id ?? createId();
    const newRecord = assertRecord({ ...record, id });
    this.#db.update(db => db.set(id, signal(newRecord)));
    this.#indexes.forEach(indexSignal => {
      const { table, sortFn, index } = indexSignal();
      if (newRecord.table.includes(table)) {
        const key = sortFn(newRecord);
        index.set(id, key);
      }
      indexSignal.set({ table, sortFn, index });
    });
  }

  read<T extends DbRecord>(id: Id): Signal<T> {
    if (!this.#db().has(id)) {
      throw new Error(`Record with id ${id} not found`);
    }
    return this.#db().get(id)?.asReadonly() as Signal<T>;
  }

  update(updatedRecord: DbRecord): void {
    updatedRecord = assertRecord(updatedRecord);
    const db = this.#db();
    const recordSignal = db.get(updatedRecord.id);
    if (!recordSignal) {
      throw new Error(`Record with id ${updatedRecord.id} not found`);
    }
    const newContent = { ...recordSignal(), ...updatedRecord };
    recordSignal.set(newContent);
    this.#indexes.forEach(indexSignal => {
      const { table, sortFn, index } = indexSignal();
      if (newContent.table.includes(table)) {
        const key = sortFn(newContent);
        index.set(updatedRecord.id, key);
      } else {
        index.delete(updatedRecord.id);
      }
      indexSignal.set({ table, sortFn, index });
    });
  }

  delete(id: Id): void {
    const db = this.#db();
    if (!db.has(id)) {
      throw new Error(`Record with id ${id} not found`);
    }
    const rec = db.get(id)!();
    this.#indexes.forEach(indexSignal => {
      const { table, index } = indexSignal();
      if (rec.table.includes(table)) {
        index.delete(id);
      }
      indexSignal.set({ table, sortFn: indexSignal().sortFn, index });
    });
    db.delete(id);
  }

  listTable(tableName: string, sortProp = 'id'): Signal<Id[]> {
    return signal(
      Array.from(this.#db().values())
        .filter(record => record().table.includes(tableName))
        .sort((a: any, b: any) => (a()[sortProp] > b()[sortProp] ? 1 : -1))
        .map(record => record().id)
    );
  }

  findByProp<T extends DbRecord>(tableName: string, predicate: (rec: T) => boolean): Signal<T | undefined> {
    const db = this.#db();
    for (const record of db.values()) {
      if (record().table.includes(tableName) && predicate(record() as T)) {
        return record.asReadonly() as Signal<T>;
      }
    }
    return signal(undefined);
  }

  freeTextSearch<T extends DbRecord>(predicate: (rec: T) => boolean) {}

  createIndex(tableName: string, sortFn: (dbRecord) => string): Signal<Id[]> {
    const mapId = `${tableName}-${sortFn.toString()}`;
    if (!this.#indexes.has(mapId)) {
      const indexMap = new Map<Id, string>();
      this.#db().forEach(record => {
        if (record().table.includes(tableName)) {
          const key = sortFn(record());
          indexMap.set(record().id, key);
        }
      });
      this.#indexes.set(mapId, signal({ table: tableName, sortFn, index: indexMap }));
    }
    const indexSignal = this.#indexes.get(mapId)!;
    return computed(() =>
      Array.from(indexSignal().index.entries())
        .sort((a, b) => (a[1] > b[1] ? 1 : -1))
        .map(entry => entry[0])
    );
  }

  removeIndex(tableName: string, sort: (dbRecord) => string): void {
    this.#indexes.delete(`${tableName}-${sort.toString()}`);
  }
}
