import { get, set, del } from 'idb-keyval';
let cache: Map<string, object>;
const cacheName = 'sample-cache';

let serverSide = false;

export async function initCache() {
  try {
    if (cache) {
      return cache;
    }
    var cachedResults: Map<string, object> | undefined = await get(cacheName);
    cache = cachedResults ? new Map([...cachedResults]) : new Map();
    return cache;
  } catch {
    cache = new Map();
    serverSide = true;
    return cache;
  }
}
export function addToCache(key: string, anyData: object) {
  cache.set(key, anyData);
  if (serverSide) return;
  set(cacheName, cache);
}
export function cacheHas(key: string): boolean {
  return cache.has(key);
}
export function getFromCache(key: string) {
  return cache.get(key);
}

export function clearCache() {
  cache.clear();
  if (serverSide) return;
  del(cacheName);
}
