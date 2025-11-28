import { create } from 'domain';
import { createId } from './in-mem-utils';

type Brand<K, T> = K & { __brand: T }


export type Id = Brand<string, 'Id'>;

export interface DbRecord  {
  id: Id;
  table: [string, ...string[]]
  [key: string]: unknown;
}

export interface NewDbRecord  {
  id?: Id;
  table: [string, ...string[]]
  [key: string]: unknown;
}


function demo() {
  const person: DbRecord = {
    id: createId(),
    table: ['users', 'admins', 'employees'],
    name: 'Alice',
    age: 30,
    email: ["alice@example.com"]
  };
}
