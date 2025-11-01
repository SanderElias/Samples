import { Injectable } from '@angular/core';

const randomChar = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
const createId = () => Date.now().toString(36) + '-' + randomChar() + randomChar() + randomChar();

export type RowType = 'contact' | 'product' | 'order';

export type Data =
  | string
  | number
  | boolean
  | bigint
  | null
  | undefined
  | Date
  | Set<Data>
  | Map<string, Data>
  | Data[]
  | { [key: string]: Data };
type Id = string;
export interface Row {
  id: Id;
  table: Array<string>;
  [field: string]: Data;
}

@Injectable({
  providedIn: 'root'
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
    this.inMemDb.set(id, { ...dropUndefinedFieldsFromRow(row), id });
  }
  read(id: Id) {
    return this.inMemDb.get(id);
  }
  update(row: Row) {
    const current = this.inMemDb.get(row.id);
    if (!current) {
      throw new Error(`No row with id: ${row.id}`);
    }
    this.inMemDb.set(row.id, dropUndefinedFieldsFromRow({ ...current, ...row }));
  }
  delete(id: Id) {
    this.inMemDb.delete(id);
  }
  list(table: string) {
    return Array.from(this.inMemDb.values()).filter(row => row.table.includes(table));
  }

  // for easy serialization
  // return the entire database as a JSON string
  toJson() {
    return JSON.stringify(this.inMemDb, replacer);
  }
  // load the entire database from a JSON string
  fromJson(json: string) {
    this.inMemDb = new Map<Id, Row>(JSON.parse(json, reviver));
  }
  toString() {
    return this.toJson();
  }
}


function dropUndefinedFieldsFromRow(row: Row): Row {
  const cleanedRow: Row = { id: row.id, table: row.table };
  for (const [key, value] of Object.entries(row)) {
    const cleanedValue = dropUndefinedFields(value);
    if (cleanedValue !== undefined) {
      cleanedRow[key] = cleanedValue;
    }
  }
  return cleanedRow;
}

/**
 * Recursively drop undefined fields from an object
 * @param x The object to clean
 */
function dropUndefinedFields(x: Data): Data {
  if (x === undefined) return undefined; // no need for further processing
  if (x === null) return undefined; // drop nulls as well
  // date, set, map and array are all typeof object, so we need to handle those before checking typeof
  if (x instanceof Date) return x;
  if (x instanceof Set) return x; // keep sets as is
  if (x instanceof Map) return x; // keep maps as is
  if (Array.isArray(x)) return x; // keep arrays as is
  if (typeof x === 'object') {
    const result: { [key: string]: Data } = {};
    for (const [key, value] of Object.entries(x)) {
      const cleanedValue = dropUndefinedFields(value);
      if (cleanedValue !== undefined) {
        result[key] = cleanedValue;
      }
    }
    return result;
  }

  return x; // return whatever is
}

export function replacer(key, value) {
  if (value instanceof Map) {
    return { __type: 'Map', value: Object.fromEntries(value) };
  }
  if (value instanceof Set) {
    return { __type: 'Set', value: Array.from(value) };
  }
  if (typeof value === 'bigint') {
    return { __type: 'BigInt', value: value.toString() + 'n' };
  }
  if (value instanceof Date) {
    return { __type: 'Date', value: value.toISOString() };
  }
  return value;
}

export function reviver(key, value) {
  if (value?.__type === 'Set') {
    return new Set(value.value);
  }
  if (value?.__type === 'Map') {
    return new Map(Object.entries(value.value));
  }
  if (value?.__type === 'BigInt') {
    return BigInt(value.value);
  }
  if (value?.__type === 'Date') {
    return new Date(value.value);
  }
  return value;
}
