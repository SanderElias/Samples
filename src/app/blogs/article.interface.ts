import type { Id } from '../in-mem-sample/in-mem.model';

export interface Article {
  id: Id;
  name: string;
  title: string;
  description: string;
  tags: string[];
  published?: boolean;
  dateAdded: string;
}
