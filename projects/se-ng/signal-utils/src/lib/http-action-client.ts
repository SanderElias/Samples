import {
  HttpClient,
  type HttpContext,
  type HttpEvent,
  type HttpHeaders,
  type HttpParams,
  type HttpResponse,
} from '@angular/common/http';
import { computed, inject, Injectable, signal, Signal, type WritableSignal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { injectAwaitSignal } from './await-signal';

const availableMethods = [
  //  "GET", not get, use httpResource instead.
  // 'CONNECT', // no default supported from httpClient
  // 'TRACE', // no default supported from httpClient
  'DELETE',
  'HEAD',
  // 'OPTIONS', // has no bearing on what we want to accomplish here.
  'PATCH',
  'POST',
  'PUT',
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
  };
  busyMethods: Record<AvailableMethods, Signal<boolean>> = {
    DELETE: computed(() => this.#methodBusy.DELETE() !== 0),
    HEAD: computed(() => this.#methodBusy.HEAD() !== 0),
    PATCH: computed(() => this.#methodBusy.PATCH() !== 0),
    POST: computed(() => this.#methodBusy.POST() !== 0),
    PUT: computed(() => this.#methodBusy.PUT() !== 0),
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
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
      body?: any;
    }
  ): Promise<HttpResponse<ArrayBuffer>>;
  delete(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
      body?: any;
    }
  ): Promise<HttpResponse<Blob>>;
  delete(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
      body?: any;
    }
  ): Promise<HttpResponse<string>>;
  delete(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
      body?: any;
    }
  ): Promise<HttpResponse<Object>>;
  delete<T>(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
      body?: any;
    }
  ): Promise<HttpResponse<T>>;
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
  head(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<Blob>;
  head(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<string>;
  head(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpEvent<ArrayBuffer>>;
  head(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpEvent<Blob>>;
  head(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpEvent<string>>;
  head(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpEvent<Object>>;
  head<T>(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpEvent<T>>;
  head(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpResponse<ArrayBuffer>>;
  head(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpResponse<Blob>>;
  head(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpResponse<string>>;
  head(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpResponse<Object>>;
  head<T>(
    url: string,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpResponse<T>>;
  head(
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
          transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
        }
      | undefined
  ): Promise<Object>;
  head<T>(
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
          transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
        }
      | undefined
  ): Promise<T>;
  head(
    url: string,
    options?: {
      headers?: HttpHeaders | Record<string, string | string[]>;
      context?: HttpContext;
      observe?: 'body' | 'events' | 'response';
      params?: HttpParams | Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
      transferCache?: { includeHeaders?: string[] } | boolean;
    }
  ): Promise<any> {
    return this.#busyWrap('HEAD', firstValueFrom(this.#http.head(url, options as any)));
  }

  patch(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
    }
  ): Promise<ArrayBuffer>;
  patch(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
    }
  ): Promise<Blob>;
  patch(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
    }
  ): Promise<string>;
  patch(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpEvent<ArrayBuffer>>;
  patch(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpEvent<Blob>>;
  patch(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpEvent<string>>;
  patch(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpEvent<Object>>;
  patch<T>(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpEvent<T>>;
  patch(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpResponse<ArrayBuffer>>;
  patch(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpResponse<Blob>>;
  patch(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpResponse<string>>;
  patch(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpResponse<Object>>;
  patch<T>(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpResponse<T>>;
  patch(
    url: string,
    body: any,
    options?:
      | {
          headers?: HttpHeaders | Record<string, string | string[]> | undefined;
          context?: HttpContext | undefined;
          observe?: 'body' | undefined;
          params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
          reportProgress?: boolean | undefined;
          responseType?: 'json' | undefined;
          withCredentials?: boolean | undefined;
        }
      | undefined
  ): Promise<Object>;
  patch<T>(
    url: string,
    body: any,
    options?:
      | {
          headers?: HttpHeaders | Record<string, string | string[]> | undefined;
          context?: HttpContext | undefined;
          observe?: 'body' | undefined;
          params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
          reportProgress?: boolean | undefined;
          responseType?: 'json' | undefined;
          withCredentials?: boolean | undefined;
        }
      | undefined
  ): Promise<T>;
  patch(url, body, options): Promise<any> {
    return this.#busyWrap('PATCH', firstValueFrom(this.#http.patch(url, body, options as any)));
  }

  post(
    url: string,
    body: any,
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
  post(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<Blob>;
  post(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<string>;
  post(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpEvent<ArrayBuffer>>;
  post(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpEvent<Blob>>;
  post(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpEvent<string>>;
  post(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpEvent<Object>>;
  post<T>(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpEvent<T>>;
  post(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpResponse<ArrayBuffer>>;
  post(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpResponse<Blob>>;
  post(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpResponse<string>>;
  post(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpResponse<Object>>;
  post<T>(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
      transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
    }
  ): Promise<HttpResponse<T>>;
  post(
    url: string,
    body: any,
    options?:
      | {
          headers?: HttpHeaders | Record<string, string | string[]> | undefined;
          context?: HttpContext | undefined;
          observe?: 'body' | undefined;
          params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
          reportProgress?: boolean | undefined;
          responseType?: 'json' | undefined;
          withCredentials?: boolean | undefined;
          transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
        }
      | undefined
  ): Promise<Object>;
  post<T>(
    url: string,
    body: any,
    options?:
      | {
          headers?: HttpHeaders | Record<string, string | string[]> | undefined;
          context?: HttpContext | undefined;
          observe?: 'body' | undefined;
          params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
          reportProgress?: boolean | undefined;
          responseType?: 'json' | undefined;
          withCredentials?: boolean | undefined;
          transferCache?: boolean | { includeHeaders?: string[] | undefined } | undefined;
        }
      | undefined
  ): Promise<T>;
  post(
    url: string,
    body: any | null,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]>;
      context?: HttpContext;
      observe?: 'body' | 'events' | 'response';
      params?: HttpParams | Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
      transferCache?: { includeHeaders?: string[] } | boolean;
    } = {}
  ): Promise<any> {
    return this.#busyWrap('POST', firstValueFrom(this.#http.post(url, body, options as any)));
  }

  put(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
    }
  ): Promise<ArrayBuffer>;
  put(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
    }
  ): Promise<Blob>;
  put(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
    }
  ): Promise<string>;
  put(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpEvent<ArrayBuffer>>;
  put(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpEvent<Blob>>;
  put(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpEvent<string>>;
  put(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpEvent<Object>>;
  put<T>(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpEvent<T>>;
  put(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpResponse<ArrayBuffer>>;
  put(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpResponse<Blob>>;
  put(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpResponse<string>>;
  put(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpResponse<Object>>;
  put<T>(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]> | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
    }
  ): Promise<HttpResponse<T>>;
  put(
    url: string,
    body: any,
    options?:
      | {
          headers?: HttpHeaders | Record<string, string | string[]> | undefined;
          context?: HttpContext | undefined;
          observe?: 'body' | undefined;
          params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
          reportProgress?: boolean | undefined;
          responseType?: 'json' | undefined;
          withCredentials?: boolean | undefined;
        }
      | undefined
  ): Promise<Object>;
  put<T>(
    url: string,
    body: any,
    options?:
      | {
          headers?: HttpHeaders | Record<string, string | string[]> | undefined;
          context?: HttpContext | undefined;
          observe?: 'body' | undefined;
          params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]> | undefined;
          reportProgress?: boolean | undefined;
          responseType?: 'json' | undefined;
          withCredentials?: boolean | undefined;
        }
      | undefined
  ): Promise<T>;
  put(
    url: string,
    body: any | null,
    options: {
      headers?: HttpHeaders | Record<string, string | string[]>;
      context?: HttpContext;
      observe?: 'body' | 'events' | 'response';
      params?: HttpParams | Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    } = {}
  ): Promise<any> {
    return this.#busyWrap('PUT', firstValueFrom(this.#http.put(url, body, options as any)));
  }
}
