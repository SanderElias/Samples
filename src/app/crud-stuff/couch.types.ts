

export interface CouchUpdate {
  ok: boolean;
  id: string;
  rev: string;
}

export interface CouchDbEvent {
  seq: string;
  id: string;
  deleted?: boolean;
  changes: Change[];
}

export interface Change {
  rev: string;
}
