import { computed, Injectable, linkedSignal, signal, Signal, type Resource, type WritableSignal } from '@angular/core';
import { Id, DbRecord, type NewDbRecord } from './in-mem.model';
import { assertRecord, createId } from './in-mem-utils';
import { resource } from '../../../projects/se-ng/signal-utils/src/lib/resource';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InMemDb {
  #db = signal<Map<Id, WritableSignal<DbRecord>>>(new Map(), { equal: () => false });

  create<T extends NewDbRecord>(record: T): void {
    const id = record.id ?? createId();
    const newRecord = assertRecord({ ...record, id });
    this.#db.update(db => db.set(id, signal(newRecord)));
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
  }

  delete(id: Id): void {
    const db = this.#db();
    if (!db.has(id)) {
      throw new Error(`Record with id ${id} not found`);
    }
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

  freeTextSearch<T extends DbRecord>(predicate: (rec: T) => boolean) {

  }

  createIndex(tableName: string, sort: (dbRecord) => string): Signal<Id[]> {
    sort ??= record => record.id;
    return computed(() => {
      const db = this.#db();
      const tableRecords = Array.from(db.values()).filter(record => record().table.includes(tableName));
      const sorted = tableRecords.sort((a, b) => (sort(a()) > sort(b()) ? 1 : -1));
      return sorted.map(record => record().id);
    });
  }

  


  }

}

