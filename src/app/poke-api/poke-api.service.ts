import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addToCache, cacheHas, getFromCache, initCache } from '@se-ng/swapi';
import { EMPTY, from, Observable } from 'rxjs';
import { expand, scan, mergeMap, tap, reduce, map, toArray, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private base = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  async load<T>(url: string): Promise<T> {
    /** wait until the cache is loaded */
    await initCache();
    if (!cacheHas(url)) {
      const liveData = await fetch(url)
        .then(r => r.json())
        .catch(e => undefined);
      await addToCache(url, liveData);
    }
    return (getFromCache(url) as unknown) as T;
  }

  init() {
    console.log('ps init');
    this.load(this.base).then(list => {
      console.log(list);
      from(Object.entries(list))
        .pipe(
          tap(url => console.log('url', url)),
          concatMap(([name, baseUrl]) =>
            this.getAllPagedData(baseUrl).pipe(
              reduce((data, page) => data.concat(page.results), []),
              // concatMap((data: any) => data.map(row => from(this.load(row.url)))),
              tap((data: any) => console.log('d', data)),
              // concatMap((subData:any) => subData.url && this.load(subData.url) || subData),
              map(data => ({ name, baseUrl, data }))
            )
          ),
          toArray(),
          tap(d => console.log(d))
        )
        .subscribe();
    });

    // this.pokeDex$.subscribe(r => console.log(r));
  }

  getAllPagedData(url): Observable<any> {
    return from(this.load(`${url}`)).pipe(
      /** use the expand operator to feed in the remaining pages */
      expand(r => (r['next'] ? this.load(r['next']) : EMPTY))
    );
  }
}
