import { Injectable } from '@angular/core';

const randomChar = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
const createId = () => Date.now().toString(36) + '-' + randomChar() + randomChar() + randomChar();

export type RowType = 'contact' | 'product' | 'order';
type Id = string;
export interface Row {
  id: Id;
  type: RowType;
  [field: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  private inMemDb = new Map<Id, Row>();

  constructor() {}
  create(row: Row) {
    const id = row.id || createId();
    if (typeof id !== 'string') {
      throw new Error('id must be a string');
    }
    if (this.inMemDb.has(row.id)) {
      throw new Error(`Duplicate id: ${row.id}`);
    }
    this.inMemDb.set(id, { ...row, id });
  }
  read(id: Id) {
    return this.inMemDb.get(id);
  }
  update(row: Row) {
    const current = this.inMemDb.get(row.id);
    if (!current) {
      throw new Error(`No row with id: ${row.id}`);
    }
    this.inMemDb.set(row.id, { ...current, ...row });
  }
  delete(id: Id) {
    this.inMemDb.delete(id);
  }
  list(type: RowType) {
    return Array.from(this.inMemDb.values()); //.filter(row => row.type === type);
  }
}
