import { HttpClient, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export function injectCrudlClient<T = Record<string, unknown>>(baseUrl: string) {
  const http = inject(HttpClient);
  return new CrudlClient<T>(baseUrl, http);
}

class CrudlClient<T> {
  constructor(
    private readonly baseUrl: string,
    private readonly http: HttpClient
  ) {}

  async create(data: T) {
    try {
      const result = await firstValueFrom(this.http.post<T>(this.baseUrl, data));
      return result;
    } catch (error) {
      // for now, we probably want to rethrow the original error
      throw new Error('Failed to create data');
    }
  }

  async read(id: string) {
    try {
      const result = await firstValueFrom(this.http.get<T>(`${this.baseUrl}/${id}`));
      return result;
    } catch (error) {
      throw new Error('Failed to read data');
    }
  }

  async update(id: string, data: T) {
    try {
      const result = await firstValueFrom(this.http.put<T>(`${this.baseUrl}/${id}`, data));
      return result;
    } catch (error) {
      throw new Error('Failed to update data');
    }
  }

  async delete(id: string) {
    try {
      await firstValueFrom(this.http.delete(`${this.baseUrl}/${id}`));
    } catch (error) {
      throw new Error('Failed to delete data');
    }
  }

  async readAll() {
    try {
      const result = await firstValueFrom(this.http.get<T[]>(this.baseUrl));
      return result;
    } catch (error) {
      throw new Error('Failed to read all data');
    }
  }

  async list(constraints: Partial<Constrains>) {
    try {
      const params = new HttpParams({ fromObject: constraints as any });
      // we probably want to add a real check and conversion from constraints to HttpParams, and put in sane defaults
      const result = await firstValueFrom(this.http.get<Id[]>(this.baseUrl, { params }));
      return result;
    } catch (error) {
      throw new Error('Failed to list data');
    }
  }
}

type FieldName = string;
type Id = string;
interface Filter {
  field: FieldName;
  value: string;
  operator: 'eq' | 'ne' | 'lt' | 'lte' | 'gt' | 'gte' | 'like' | 'in' | 'startsWith' | 'endsWith';
}
interface Constrains {
  order: 'asc' | 'desc';
  limit: number;
  offset: number;
  pageSize: number;
  filter: Filter[];
  sortBy: FieldName[];
}
