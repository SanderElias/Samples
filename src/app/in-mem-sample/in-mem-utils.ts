import { createUniqueId } from '../util/random-things';

import type { DbRecord,Id } from './in-mem.model';


export const createId = () => createUniqueId() as Id

export const isDbRecord = (obj: any): obj is DbRecord => {
  return obj && typeof obj === 'object' && 'id' in obj && Array.isArray(obj.table);
}

export const assertRecord = (obj: any): DbRecord => {
  if (isDbRecord(obj)) {
    return obj;
  }
  throw new Error('Object is not a DbRecord');
}
