import {
  addToCache,
  cacheHas,
  getFromCache,
  initCache
} from "./chunk-KZ7SP72D.js";
import "./chunk-JPDRYBMH.js";
import {
  HttpClient
} from "./chunk-LJ2EIP3L.js";
import "./chunk-2KCW2NJN.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  EMPTY,
  Injectable,
  Input,
  TemplateRef,
  ViewContainerRef,
  concatMap,
  expand,
  from,
  inject,
  isObservable,
  map,
  reduce,
  setClassMetadata,
  shareReplay,
  tap,
  timer,
  toArray,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5EIP4NRL.js";
import "./chunk-KCHQYSDT.js";

// dist/se-ng/let/fesm2022/se-ng-let.mjs
var SeLetDirective = class _SeLetDirective {
  set seLet(x) {
    this.assign(x);
  }
  set seLetObserve(x) {
    this.assign(x);
  }
  set seLetOn(x) {
    this.assign(x);
  }
  assign(value) {
    this.sub && this.sub.unsubscribe();
    if (isObservable(value)) {
      this.sub = value.pipe(tap(() => this.cdr.markForCheck())).subscribe((data) => {
        this.context.$implicit = data;
        this.context.seLet = data;
      });
    } else {
      this.context.$implicit = value;
      this.context.seLet = value;
    }
  }
  constructor() {
    this.templateRef = inject(TemplateRef);
    this.viewContainer = inject(ViewContainerRef);
    this.cdr = inject(ChangeDetectorRef);
    this.context = {
      $implicit: void 0,
      seLet: void 0
    };
    this.assign = this.assign.bind(this);
  }
  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.templateRef, this.context);
  }
  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }
  static {
    this.\u0275fac = function SeLetDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeLetDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _SeLetDirective,
      selectors: [["", "seLet", ""]],
      inputs: {
        seLet: "seLet",
        seLetObserve: "seLetObserve",
        seLetOn: "seLetOn"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeLetDirective, [{
    type: Directive,
    args: [{
      // tslint:disable-next-line: directive-selector
      selector: "[seLet]"
    }]
  }], () => [], {
    seLet: [{
      type: Input
    }],
    seLetObserve: [{
      type: Input
    }],
    seLetOn: [{
      type: Input
    }]
  });
})();

// src/app/poke-api/poke-api.service.ts
var PokeApiService = class _PokeApiService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = "https://pokeapi.co/api/v2";
  }
  async load(url) {
    await initCache();
    if (!cacheHas(url)) {
      const liveData = await fetch(url).then((r) => r.json()).catch((e) => void 0);
      await addToCache(url, liveData);
    }
    return getFromCache(url);
  }
  init() {
    console.log("ps init");
    this.load(this.base).then((list) => {
      console.log(list);
      from(Object.entries(list)).pipe(tap((url) => console.log("url", url)), concatMap(([name, baseUrl]) => this.getAllPagedData(baseUrl).pipe(
        reduce((data, page) => data.concat(page.results), []),
        // concatMap((data: any) => data.map(row => from(this.load(row.url)))),
        // tap((data: any) => console.log('d', data)),
        // concatMap((subData:any) => subData.url && this.load(subData.url) || subData),
        map((data) => ({ name, baseUrl, data }))
      )), toArray(), tap((d) => console.log(d))).subscribe();
    });
  }
  getAllPagedData(url) {
    return from(this.load(`${url}`)).pipe(
      /** use the expand operator to feed in the remaining pages */
      expand((r) => r["next"] ? this.load(r["next"]) : EMPTY)
    );
  }
  static {
    this.\u0275fac = function PokeApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PokeApiService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PokeApiService, factory: _PokeApiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PokeApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/poke-api/pokemain/pokemain.component.ts
function PokeMainComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const samp_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(samp_r3);
  }
}
var PokeMainComponent = class _PokeMainComponent {
  constructor() {
    this.pa = inject(PokeApiService);
    this.fakePost$ = timer(1500).pipe(tap(() => console.log("done")), map(() => "hello world"), shareReplay({ refCount: true, bufferSize: 1 }));
  }
  ngOnInit() {
    console.log("pokeMain");
  }
  static {
    this.\u0275fac = function PokeMainComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PokeMainComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PokeMainComponent, selectors: [["app-pokemain"]], decls: 6, vars: 1, consts: [["save", ""], [3, "click"], [4, "seLet", "seLetObserve"]], template: function PokeMainComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "pokemain works!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "button", 1, 0);
        \u0275\u0275listener("click", function PokeMainComponent_Template_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          const save_r2 = \u0275\u0275reference(3);
          return \u0275\u0275resetView(save_r2.goSave = true);
        });
        \u0275\u0275text(4, "Save");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, PokeMainComponent_ng_container_5_Template, 3, 1, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("seLetObserve", ctx.fakePost$);
      }
    }, dependencies: [SeLetDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PokeMainComponent, [{
    type: Component,
    args: [{ selector: "app-pokemain", changeDetection: ChangeDetectionStrategy.OnPush, imports: [SeLetDirective], template: '<p>pokemain works!</p>\n\n<button #save (click)="$any(save).goSave = true">Save</button>\n<ng-container *seLet="let samp; observe: fakePost$">\n  <h1>{{ samp }}</h1>\n</ng-container>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PokeMainComponent, { className: "PokeMainComponent", filePath: "src/app/poke-api/pokemain/pokemain.component.ts", lineNumber: 16 });
})();
export {
  PokeMainComponent
};
