// tslint:disable:member-ordering
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, EMPTY, from, Observable, of } from 'rxjs';
import {
  catchError,
  concatAll,
  concatMap,
  expand,
  filter,
  first,
  map,
  mergeMap,
  reduce,
  shareReplay,
  take,
  tap,
  toArray
} from 'rxjs/operators';
import { addToCache, cacheHas, getFromCache, initCache } from './cache';
import { Film, FilmsRoot } from './FilmsRoot.interface';
import { PeopleRoot, Person } from './PeopleRoot.interface';
import { SwapiRoot } from './SwapiRoot.interface';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  baseUrl = `https://swapi.co/api/`;
  swapiRoot: SwapiRoot;
  /**
   * Helper. uses fetch to load data from an URL
   * first checks the indexedDB cache if the data is already there,
   * otherwise use fetch (I needed promises here) to fetch live data
   * returns  promise that will hold the result of the URL
   */
  load = async <T>(url: string): Promise<T> => {
    /** wait until the cache is loaded */
    await initCache();
    if (!cacheHas(url)) {
      const liveData = await fetch(url)
        .then(r => r.json())
        .catch(e => undefined);
      await addToCache(url, liveData);
    }
    return (getFromCache(url) as unknown) as T;
  };

  /** the 'root' of swapi, as an reuable observable. */
  swapiRoot$ = from(this.load<SwapiRoot>(this.baseUrl)).pipe(
    tap(r => (this.swapiRoot = r)),
    shareReplay(1)
  );

  // load all people form the paged API
  // start off with loading the first page.
  swPeople$ = from(this.load<PeopleRoot>(`${this.baseUrl}people/`)).pipe(
    // expand to get additional pages
    // hint: r.next means there's another page
    expand(r => (r.next ? this.load(r.next) : EMPTY)),

    // for each page, extract the people (in results)
    map((r: PeopleRoot) => r.results),

    // scan to accumulate the pages (emitted by expand)
    reduce<Person[]>(
      (allPeople, pageOfPeople) => allPeople.concat(pageOfPeople),
      []
    ),

    map(persons =>
      persons.map(
        /** add a real random date to the persons */
        p => ({ ...p, date: getRandomDateInPast(), id: p.url } as Person)
      )
    ),

    // Share the result with all subscribers
    shareReplay(1)
  );

  /** find a person by ID (the url) (deprecated) */
  findById = (id: number): Observable<Person> =>
    this.swPeople$.pipe(
      map(list => list[id]),
      filter(Boolean),
      take(1)
    );

  /** load all the films (deprecated) */
  swFilms$ = from(this.load<FilmsRoot>(`${this.baseUrl}films/`)).pipe(
    shareReplay(1)
  );

  /** helper to fetch all the page of an swapi root endpoint */
  getAllPagedData(url): Observable<any> {
    return from(this.load(`${url}`)).pipe(
      /** use the expand operator to feed in the remaining pages */
      expand(r => (r['next'] ? this.load(r['next']) : EMPTY))
    );
  }

  /** find a film by url (deprecated) */
  findFilmByUrl = (url: string): Observable<Film> => this.get<Film>(url);

  /** helper to fetch Count random person(s), that has also some loaded films in there */
  getRandomPerson = (count = 1): Observable<Person> =>
    from(Array.from({ length: count })).pipe(
      concatMap(() =>
        this.swPeople$.pipe(
          map(list => {
            const i = Math.floor(Math.random() * list.length);
            return list[i];
          }),
          /** load in films data */
          mergeMap(data =>
            concat(...data.films.map(film => this.findFilmByUrl(film))).pipe(
              toArray(),
              map(films => ({ ...data, films }))
            )
          )
        )
      )
    );

  constructor() {
    /** kick of loading the data, and keep it alive during entire app */
    this.loadData().subscribe();
  }

  /**
   * Load an item from SWAPI using its url. uses local buffer first.
   * @param url
   */
  get<T>(url: string): Observable<T> {
    const base = Object.values(this.swapiRoot).find(top =>
      url.toLowerCase().includes(url.toLowerCase())
    );

    if (base) {
      return this.getAllPagedData(base).pipe(
        map((baseData: any) => baseData.results.find(row => row.url === url)),
        filter(Boolean),
        first()
      );
    }
    return from(this.load(url) as Promise<T>);
  }

  /** load everything from the SWAPI.co into indexedDB */
  loadData() {
    /** start off with the 'root' of swapi */
    return this.swapiRoot$.pipe(
      /** use a side-effect to store it in this service */
      tap(swapiRoot => (this.swapiRoot = swapiRoot)),
      /** loop over all listed endpoints */
      concatMap(r => Object.values(r).map(url => this.getAllPagedData(url))),
      /** combine all observables form above into a results stream */
      concatAll(),
      /** change that into an array (Only needed when going to display) */
      toArray(),
      /** keep everything in memduring app */
      shareReplay(1)
      /** log result */
      // tap(r => console.log('loadedInApi',r))
    );
  }

  enrich<T>(rec: T): Observable<T> {
    /**
     * Helper to create an observable<{propname:value}> for each property
     */
    const keyHandler = propName => {
      const value = rec[propName];
      if (Array.isArray(value) && value.length > 0) {
        /** make an observable from the array in the current prop */
        return from<string[]>(rec[propName]).pipe(
          /** turn each url to an observable */
          concatMap(url => this.get(url)),
          /** combine the array of observables to an array */
          toArray(),
          /** make it into an object that has the props name, and the result */
          map(arr => ({ [propName]: arr }))
        );
      }
      if (typeof value === 'string') {
        /** is it an url from a known set? */
        const subSet = this.detectSet(value);
        /** yes? load it from the set, otherwise just return the value */
        return (subSet ? this.get(value) : of(value)).pipe(
          map(x => ({ [propName]: x }))
        );
      }
      return of(value).pipe(map(x => ({ [propName]: x })));
    };

    return this.swapiRoot$.pipe(
      /** Split out the record to an array of observables, one for each property */
      concatMap(root => Object.keys(rec).map(keyHandler)),
      /** flatten the array of observables into results */
      concatAll(),
      /** reduce all the results back into 1 object */
      reduce((combine, res) => ({ ...combine, ...res }), {} as T),
      /** complete but don't emit a result if there is an error */
      catchError((e: Error) => {
        console.warn(e);
        return of({} as T);
      })
    );
  }

  /**
   * Helper to get all the data of an given "set"
   * @param selectedSet the name of the set we want to get.
   */
  getAllRows(selectedSet: keyof SwapiRoot) {
    /** get all pages for this set */
    return this.getAllPagedData(this.swapiRoot[selectedSet]).pipe(
      /** extract the results out of every page */
      map(resultSet => resultSet.results),
      /** combine them all into a single array */
      reduce((all, page) => all.concat(page), []),
      /** don't do this again! */
      shareReplay(1)
    );
  }

  /**
   * Helper function to search by name/tile in a "set"
   * takes the name of the set, and a string
   */
  findIn = (selectedSet: keyof SwapiRoot, nameOrTitle: string) =>
    this.getAllRows(selectedSet).pipe(
      map(list =>
        list.find(row =>
          (row.name || row.title || '')
            .toLowerCase()
            .includes(nameOrTitle.toLowerCase().trim())
        )
      )
    );

  /**
   * Helper to detect the table of an url. return the name of the set, or undefined/false
   * @param url String to test
   */
  detectSet(url) {
    if (typeof url === 'string') {
      return (Object.values(this.swapiRoot).find(setBaseUrl =>
        url.includes(setBaseUrl)
      ) as unknown) as keyof SwapiRoot;
    }
  }

  /**
   * find people by name (deprecated)
   */
  findWithName = (name: string) => this.findIn('people', name);
}

function getRandomDateInPast() {
  /** a year between 1000...2000 */
  const year = Math.ceil(Math.random() * 1000) + 1000;
  /** pick a random month */
  const month = Math.floor(Math.random() * 12);
  /** pic a random save date, (27 bcs Februari) */
  const day = Math.ceil(Math.random() * 27);
  /** combine into a date, use noon bcs time-zone's */
  return new Date(year, month, day, 12, 0);
}
