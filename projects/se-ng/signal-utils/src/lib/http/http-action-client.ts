import {
  HttpClient,
  type HttpContext,
  type HttpEvent,
  type HttpHeaders,
  type HttpParams,
  type HttpResponse
} from '@angular/common/http';
import { computed, inject, Injectable, signal, Signal, type WritableSignal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { injectAwaitSignal } from '../reactive/await-signal';

const availableMethods = [
  'GET', // do not use get, use httpResource instead.
  // 'CONNECT', // no default supported from httpClient
  // 'TRACE', // no default supported from httpClient
  'DELETE',
  'HEAD',
  // 'OPTIONS', // has no bearing on what we want to accomplish here.
  'PATCH',
  'POST',
  'PUT'
  // 'JSONP', // not a standard method, but supported by httpClient, but its aimed for getting data, so use httpResource instead.
] as const;
type AvailableMethods = (typeof availableMethods)[number];

/**
 * HttpActionClient is a small wrapper around the HttpClient that
 * converts the HttpClient methods to async methods.
 * It also provides a way to track the busy state of each method.
 */
@Injectable({
  providedIn: 'root'
})
export class HttpActionClient {
  #http = inject(HttpClient);
  #methodBusy: Record<AvailableMethods, WritableSignal<number>> = {
    DELETE: signal(0),
    HEAD: signal(0),
    PATCH: signal(0),
    POST: signal(0),
    PUT: signal(0),
    GET: signal(0)
  };
  busyMethods: Record<AvailableMethods, Signal<boolean>> = {
    DELETE: computed(() => this.#methodBusy.DELETE() !== 0),
    HEAD: computed(() => this.#methodBusy.HEAD() !== 0),
    PATCH: computed(() => this.#methodBusy.PATCH() !== 0),
    POST: computed(() => this.#methodBusy.POST() !== 0),
    PUT: computed(() => this.#methodBusy.PUT() !== 0),
    GET: computed(() => this.#methodBusy.GET() !== 0)
  };
  isBusy = computed(() => Object.values(this.#methodBusy).some(b => b() !== 0));
  #awaitSignal = injectAwaitSignal();
  #busyWrap = async <T>(method: AvailableMethods, p: Promise<T>) => {
    await this.#awaitSignal(this.#methodBusy[method], busy => busy === 0); // wait for the method to be free.
    this.#methodBusy[method].update(v => v + 1);
    try {
      return await p;
    } finally {
      this.#methodBusy[method].update(v => v - 1);
    }
  };
  delete(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
      body?: any;
    }
  ): Promise<ArrayBuffer>;
  delete(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
      body?: any;
    }
  ): Promise<Blob>;
  delete(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
      body?: any;
    }
  ): Promise<string>;
  delete(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
      body?: any;
    }
  ): Promise<HttpEvent<ArrayBuffer>>;
  delete(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
      body?: any;
    }
  ): Promise<HttpEvent<Blob>>;
  delete(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
      body?: any;
    }
  ): Promise<HttpEvent<string>>;
  delete(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
      body?: any;
    }
  ): Promise<HttpEvent<Object>>;
  delete<T>(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
      body?: any;
    }
  ): Promise<HttpEvent<T>>;
  delete(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
      body?: any;
    }
  ): Promise<ArrayBuffer>;
  delete(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
      body?: any;
    }
  ): Promise<Blob>;
  delete(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
      body?: any;
    }
  ): Promise<string>;
  delete(
    url: string,
    options?:
      | {
          headers?: HttpHeaders | Record<string, string | string[]> | undefined;
          context?: HttpContext | undefined;
          observe?: 'body' | undefined;
          params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
          reportProgress?: boolean | undefined;
          responseType?: 'json' | undefined;
          withCredentials?: boolean | undefined;
          body?: any;
        }
      | undefined
  ): Promise<Object>;
  delete<T>(
    url: string,
    options?:
      | {
          headers?: HttpHeaders | Record<string, string | string[]> | undefined;
          context?: HttpContext | undefined;
          observe?: 'body' | undefined;
          params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
          reportProgress?: boolean | undefined;
          responseType?: 'json' | undefined;
          withCredentials?: boolean | undefined;
          body?: any;
        }
      | undefined
  ): Promise<T>;
  delete(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]>;
      context?: HttpContext;
      observe?: 'body' | 'events' | 'response';
      params?: HttpParams | Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
      body?: any | null;
    } = {}
  ): Promise<any> {
    return this.#busyWrap('DELETE', firstValueFrom(this.#http.delete(url, options as any)));
  }

  head(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<ArrayBuffer>;
