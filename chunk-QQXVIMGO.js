import {
  get,
  set
} from "./chunk-JPDRYBMH.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  catchError,
  concat,
  concatAll,
  concatMap,
  filter,
  from,
  map,
  mergeMap,
  of,
  reduce,
  setClassMetadata,
  shareReplay,
  switchMap,
  take,
  tap,
  toArray,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-T5ZKQ47R.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// dist/se-ng/swapi/fesm2022/se-ng-swapi.mjs
var cache;
var cacheName = "sample-cache";
var serverSide = false;
async function initCache() {
  try {
    if (cache) {
      return cache;
    }
    var cachedResults = await get(cacheName);
    cache = cachedResults ? new Map([...cachedResults]) : /* @__PURE__ */ new Map();
    return cache;
  } catch {
    cache = /* @__PURE__ */ new Map();
    serverSide = true;
    return cache;
  }
}
function addToCache(key, anyData) {
  cache.set(key, anyData);
  if (serverSide) return;
  set(cacheName, cache);
}
function cacheHas(key) {
  return cache.has(key);
}
function getFromCache(key) {
  return cache.get(key);
}
var Gender;
(function(Gender2) {
  Gender2["Female"] = "female";
  Gender2["Male"] = "male";
  Gender2["NA"] = "n/a";
})(Gender || (Gender = {}));
var Designation;
(function(Designation2) {
  Designation2["Sentient"] = "sentient";
})(Designation || (Designation = {}));
var SwapiComponent = class _SwapiComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function SwapiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SwapiComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _SwapiComponent,
      selectors: [["lib-swapi"]],
      decls: 4,
      vars: 0,
      template: function SwapiComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275domElementStart(0, "h1");
          \u0275\u0275text(1, "Swapi module is in place");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(2, "p");
          \u0275\u0275text(3, "Inject the swapi service where you need it.");
          \u0275\u0275domElementEnd();
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwapiComponent, [{
    type: Component,
    args: [{
      selector: "lib-swapi",
      template: `
    <h1>Swapi module is in place</h1>
    <p>Inject the swapi service where you need it.</p>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [], null);
})();
var SwapiService = class _SwapiService {
  /** helper to fetch all the page of an swapi root endpoint */
  getAllPagedData(url) {
    return from(this.load(`${url}`)).pipe();
  }
  constructor() {
    this.baseUrl = `https://swapi.info/api/`;
    this.swapiRoot = {};
    this.load = async (url) => {
      url = https(url);
      await initCache();
      if (!cacheHas(url)) {
        const liveData = await fetch(url).then((r) => r.json()).catch((e) => void 0);
        await addToCache(url, liveData);
      }
      return getFromCache(url);
    };
    this.swapiRoot$ = from(this.load(this.baseUrl)).pipe(tap((r) => this.swapiRoot = r), shareReplay(1));
    this.swPeople$ = from(this.load(`${this.baseUrl}people/`)).pipe(
      // expand to get additional pages
      // hint: r.next means there's another page
      // expand(r => (r.next ? this.load<PeopleRoot>(r.next) : EMPTY)),
      // for each page, extract the people (in results)
      // map((r: PeopleRoot) => r.results),
      // scan to accumulate the pages (emitted by expand)
      // reduce<Person[], Person[]>((allPeople, pageOfPeople) => allPeople.concat(pageOfPeople), [] as Person[]),
      map((persons) => persons.map(
        /** add a real random date to the persons */
        (p) => __spreadProps(__spreadValues({}, p), {
          date: getRandomDateInPast(),
          id: p.url
        })
      )),
      // Share the result with all subscribers
      shareReplay(1)
    );
    this.findById = (id) => this.swPeople$.pipe(map((list) => list[id]), filter(Boolean), take(1));
    this.swFilms$ = from(this.load(`${this.baseUrl}films/`)).pipe(shareReplay(1));
    this.findFilmByUrl = (url) => this.get(url);
    this.getRandomPerson = (count = 1) => from(Array.from({
      length: count
    })).pipe(concatMap(() => this.swPeople$.pipe(
      map((list) => {
        const i = Math.floor(Math.random() * list.length);
        return list[i];
      }),
      /** load in films data */
      mergeMap((data) => concat(...data.films.map((film) => this.findFilmByUrl(film))).pipe(toArray(), map((films) => __spreadProps(__spreadValues({}, data), {
        films
      }))))
    )));
    this.findIn = (selectedSet, nameOrTitle) => this.getAllRows(selectedSet).pipe(map((list) => list.find((row) => (row?.name || row?.title || "").toLowerCase().includes(nameOrTitle.toLowerCase().trim()))));
    this.getSetNames = (selectedSet) => this.getAllRows(selectedSet).pipe(map((list) => list.map((row) => row?.name || row?.title || "")));
    this.findWithName = (name) => this.findIn("people", name);
    this.loadData().subscribe();
  }
  /**
   * Load an item from SWAPI using its url. uses local buffer first.
   * @param url
   */
  get(url) {
    const base = Object.values(this.swapiRoot).find((topUrl) => url.toLowerCase().includes(topUrl.toLowerCase()));
    return from(this.load(url));
  }
  /** load everything from the SWAPI.co into indexedDB */
  loadData() {
    return this.swapiRoot$.pipe(
      /** use a side-effect to store it in this service */
      tap((swapiRoot) => this.swapiRoot = swapiRoot),
      /** loop over all listed endpoints */
      concatMap((r) => Object.values(r || {}).map((url) => this.getAllPagedData(url))),
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
  /**
   * Helper function that traverse all key's of an record,
   * and checks if there is an url in there.
   * if there is it fetches the data and puts that in its place.
   * Also handles url[], and will fetch each of those.
   * Top level only, it doesn't drill down.
   */
  enrich(rec) {
    const keyHandler = (propName) => {
      const value = rec[propName];
      if (Array.isArray(value) && value.length > 0) {
        return from(value).pipe(
          /** turn e
           * ach url to an observable */
          concatMap((url) => this.get(url)),
          /** combine the array of observables to an array */
          toArray(),
          /** make it into an object that has the props name, and the result */
          map((arr) => ({
            [propName]: arr
          }))
        );
      }
      if (typeof value === "string") {
        const subSet = this.detectSet(value);
        return (subSet ? this.get(value) : of(value)).pipe(map((x) => ({
          [propName]: x
        })));
      }
      return of(value).pipe(map((x) => ({
        [propName]: x
      })));
    };
    return this.swapiRoot$.pipe(
      /** Split out the record to an array of observables, one for each property */
      concatMap((root) => Object.keys(rec).map(keyHandler)),
      /** flatten the array of observables into results */
      concatAll(),
      /** reduce all the results back into 1 object */
      reduce((combine, res) => __spreadValues(__spreadValues({}, combine), res), {}),
      /** complete and emit an empty result if there is an error */
      catchError((e) => {
        console.warn(e);
        return of({});
      })
    );
  }
  /**
   * Helper to get all the data of an given "set"
   * @param selectedSet the name of the set we want to get.
   */
  getAllRows(selectedSet) {
    return this.swapiRoot$.pipe(
      switchMap(() => this.getAllPagedData(https(this.swapiRoot[selectedSet]))),
      /** extract the results out of every page */
      map((resultSet) => resultSet.results),
      /** combine them all into a single array */
      reduce((all, page) => all.concat(page), []),
      /** don't do this again! */
      shareReplay(1)
    );
  }
  /**
   * Helper to detect the table of an url. return the name of the set, or undefined/false
   * @param url String to test
   */
  detectSet(url) {
    if (typeof url === "string") {
      const entry = Object.entries(this.swapiRoot).find(([setName, setBaseUrl]) => url.includes(setBaseUrl));
      return entry && entry[0];
    }
  }
  static {
    this.\u0275fac = function SwapiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SwapiService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _SwapiService,
      factory: _SwapiService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwapiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function getRandomDateInPast() {
  const year = Math.ceil(Math.random() * 1e3) + 1e3;
  const month = Math.floor(Math.random() * 12);
  const day = Math.ceil(Math.random() * 27);
  return new Date(year, month, day, 12, 0);
}
function https(string) {
  return string.split("http:").join("https:");
}

export {
  initCache,
  addToCache,
  cacheHas,
  getFromCache,
  SwapiService
};
