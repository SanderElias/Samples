import type { UniqueId } from './unique-id-helpers';

/**
 * Base type for a record in the database
 */
export interface BaseDbRecord {
  /** mandatory id, must be unique in the entire DB */
  id: UniqueId;
  /** mandatory, the table to use to store this record */
  table: string;
  /** tags make everything better ;-P */
  tags?: string[];
}

export interface DbRecord extends BaseDbRecord {
  /**
   * optional data, you probably want something here,
   * Note, you can extend the BaseDbRecord with any other fields you want
   */
  [key: string]: any;
}

export interface DbEvent<T extends BaseDbRecord = DbRecord> {
  date?: Date;
  type?: 'update' | 'delete';
  payload: T | { id: UniqueId };
}
