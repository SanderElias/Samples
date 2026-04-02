import {
  SwapiService
} from "./chunk-RUXK5GR4.js";
import "./chunk-JPDRYBMH.js";
import {
  toSignal
} from "./chunk-YFMQVMT3.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  NgControlStatus,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-UGNSKCWD.js";
import "./chunk-MTKF5SUL.js";
import "./chunk-72AYNUCX.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  catchError,
  combineLatest,
  computed,
  concatMap,
  debounceTime,
  distinctUntilChanged,
  filter,
  firstValueFrom,
  inject,
  input,
  map,
  of,
  setClassMetadata,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4YMCON7N.js";
import "./chunk-KCHQYSDT.js";

// src/app/complex-api/show-rec/show-rec.component.ts
function ShowRecComponent_For_1_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "details")(1, "summary");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 0);
    \u0275\u0275listener("click", function ShowRecComponent_For_1_Conditional_4_Conditional_0_Template_button_click_3_listener() {
      const rec_r2 = \u0275\u0275restoreView(_r1);
      const item_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selected.emit([ctx_r3.key(item_r3), rec_r2.name || rec_r2.title]));
    });
    \u0275\u0275text(4, " Select ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "app-show-rec", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rec_r2 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", rec_r2.name || rec_r2.title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("record", rec_r2);
  }
}
function ShowRecComponent_For_1_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r3.val(item_r3), " ");
  }
}
function ShowRecComponent_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ShowRecComponent_For_1_Conditional_4_Conditional_0_Template, 6, 2, "details")(1, ShowRecComponent_For_1_Conditional_4_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_11_0;
    const item_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_11_0 = ctx_r3.isRecord(ctx_r3.val(item_r3))) ? 0 : 1, tmp_11_0);
  }
}
function ShowRecComponent_For_1_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "details")(1, "summary");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 0);
    \u0275\u0275listener("click", function ShowRecComponent_For_1_Conditional_5_For_1_Template_button_click_3_listener() {
      const rec_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const item_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selected.emit([ctx_r3.key(item_r3), rec_r6.name || rec_r6.title]));
    });
    \u0275\u0275text(4, " Select ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "app-show-rec", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rec_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", rec_r6.name || rec_r6.title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("record", rec_r6);
  }
}
function ShowRecComponent_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ShowRecComponent_For_1_Conditional_5_For_1_Template, 6, 2, "details", null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.val(item_r3));
  }
}
function ShowRecComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl")(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275conditionalCreate(4, ShowRecComponent_For_1_Conditional_4_Template, 2, 1)(5, ShowRecComponent_For_1_Conditional_5_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.key(item_r3));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.isRecArray(item_r3) ? 4 : 5);
  }
}
var key = (e) => e[0];
var val = (e) => e[1];
var ShowRecComponent = class _ShowRecComponent {
  constructor() {
    this.record = input.required(
      ...ngDevMode ? [{ debugName: "record" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.entries = computed(
      () => this.record() && Object.entries(this.record()),
      ...ngDevMode ? [{ debugName: "entries" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = new EventEmitter();
    this.key = key;
    this.val = val;
  }
  isRecArray(e) {
    const i = val(e);
    if (Array.isArray(i) && i.length > 0) {
      const firstEnt = i[0];
      return !Array.isArray(firstEnt) && typeof firstEnt === "object";
    }
    return false;
  }
  /** returns false or an "record" */
  isRecord(x) {
    return x && !Array.isArray(x) && typeof x === "object" && x;
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function ShowRecComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShowRecComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowRecComponent, selectors: [["app-show-rec"]], inputs: { record: [1, "record"] }, outputs: { selected: "selected" }, decls: 2, vars: 0, consts: [[3, "click"], [3, "record"]], template: function ShowRecComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, ShowRecComponent_For_1_Template, 6, 2, "dl", null, \u0275\u0275repeaterTrackByIdentity);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.entries());
      }
    }, dependencies: [_ShowRecComponent], styles: ["\ndl[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 5em 1fr;\n}\ndt[_ngcontent-%COMP%] {\n  font-weight: initial;\n  max-width: 5em;\n  overflow: hidden;\n}\ndd[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  margin-left: 0.5em;\n}\nsummary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 5px;\n  padding: 2px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowRecComponent, [{
    type: Component,
    args: [{ selector: "app-show-rec", changeDetection: ChangeDetectionStrategy.OnPush, imports: [], template: '@for (item of entries(); track item) {\n  <dl>\n    <dt>{{ key(item) }}</dt>\n    <dd>\n      @if (!isRecArray(item)) {\n        @if (isRecord(val(item)); as rec) {\n          <details>\n            <summary>\n              {{ rec.name || rec.title }}\n              <button\n                (click)="selected.emit([key(item), rec.name || rec.title])"\n              >\n                Select\n              </button>\n            </summary>\n            <app-show-rec [record]="rec"></app-show-rec>\n          </details>\n        } @else {\n          {{ val(item) }}\n        }\n      } @else {\n        @for (rec of val(item); track rec) {\n          <details>\n            <summary>\n              {{ rec.name || rec.title }}\n              <button\n                (click)="selected.emit([key(item), rec.name || rec.title])"\n              >\n                Select\n              </button>\n            </summary>\n            <app-show-rec [record]="rec"></app-show-rec>\n          </details>\n        }\n      }\n    </dd>\n  </dl>\n}\n\n<style>\n  dl {\n    display: grid;\n    grid-template-columns: 5em 1fr;\n  }\n  dt {\n    font-weight: initial;\n    max-width: 5em;\n    overflow: hidden;\n  }\n  dd {\n    font-weight: bolder;\n    margin-left: 0.5em;\n  }\n  summary button {\n    display: inline-block;\n    margin-left: 5px;\n    padding: 2px;\n  }\n</style>\n', styles: ["/* angular:styles/component:css;846c908f1fd3f9e467836ff8b8d5ccdda3f59c115830f02f4e5d47a67b97e7f1;/home/runner/work/Samples/Samples/src/app/complex-api/show-rec/show-rec.component.html */\ndl {\n  display: grid;\n  grid-template-columns: 5em 1fr;\n}\ndt {\n  font-weight: initial;\n  max-width: 5em;\n  overflow: hidden;\n}\ndd {\n  font-weight: bolder;\n  margin-left: 0.5em;\n}\nsummary button {\n  display: inline-block;\n  margin-left: 5px;\n  padding: 2px;\n}\n"] }]
  }], () => [], { record: [{ type: Input, args: [{ isSignal: true, alias: "record", required: true }] }], selected: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowRecComponent, { className: "ShowRecComponent", filePath: "src/app/complex-api/show-rec/show-rec.component.ts", lineNumber: 29 });
})();

// src/app/complex-api/apisample/apisample.component.ts
function APISampleComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1);
  }
}
function APISampleComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2);
  }
}
var APISampleComponent = class _APISampleComponent {
  constructor() {
    this.#sw = inject(SwapiService);
    this.chosenSet = new FormControl("", { nonNullable: true });
    this.name = new FormControl("");
    this.rawData = {};
    this.availableSets$ = this.#sw.swapiRoot$.pipe(map((root) => Object.keys(root ?? {})));
    this.availableSets = toSignal(this.availableSets$);
    this.availableOptions = toSignal(combineLatest([
      // combine the available sets with the chosen set
      this.availableSets$,
      this.chosenSet.valueChanges
    ]).pipe(
      /** progress when the set exists */
      filter(([sets, chosen]) => sets.includes(chosen)),
      /** use the service to get the list */
      switchMap(([_, chosen]) => this.#sw.getSetNames(chosen))
    ), { initialValue: [] });
    this.result = toSignal(combineLatest([
      /** act on changes in the set/table */
      this.chosenSet.valueChanges,
      /** handle the search input */
      this.name.valueChanges.pipe(debounceTime(250), distinctUntilChanged(), filter(Boolean))
    ]).pipe(
      /** load the raw data from the API */
      switchMap(([setname, name]) => this.#sw.findIn(setname, name)),
      /** don't let empty results in */
      filter(Boolean),
      /** use a side-effect to store the raw data */
      tap((rawData) => this.rawData = rawData),
      /** parse the record, and load all child data */
      concatMap((rawData) => this.#sw.enrich(rawData)),
      /** handle errors if something goes south */
      catchError((e) => {
        console.error(e);
        return of({
          "Not Found": `Your search string didn't return any results`
        });
      })
    ));
  }
  /** injections */
  #sw;
  ngAfterViewInit() {
    this.changeTo(["people", "luke"]);
  }
  async changeTo(event) {
    const availableSets = await firstValueFrom(this.availableSets$);
    const [property, findValue] = event;
    let chosenSet = property;
    if (!availableSets.includes(property)) {
      const orgval = this.rawData[property];
      chosenSet = this.#sw.detectSet(Array.isArray(orgval) ? orgval[0] : orgval);
    }
    this.chosenSet.setValue(chosenSet, { emitEvent: true });
    this.name.setValue(findValue, { emitEvent: true });
  }
  static {
    this.\u0275fac = function APISampleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _APISampleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _APISampleComponent, selectors: [["app-apisample"]], decls: 23, vars: 3, consts: [["target", "blank", "href", "https://github.com/SanderElias/Samples/blob/master/projects/se-ng/swapi/src/lib/swapi.service.ts"], ["target", "blank", "href", "https://swapi.dev"], [3, "formControl"], ["type", "text", "list", "listOptions", "autofocus", "", 3, "formControl"], [3, "selected", "record"], ["id", "listOptions"]], template: function APISampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "H3");
        \u0275\u0275text(1, "Complex api sample");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "h4");
        \u0275\u0275text(3, "(first load might take a while!)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, " The complexity is in the API, have an look at ");
        \u0275\u0275elementStart(6, "a", 0);
        \u0275\u0275text(7, "the swapi service");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, ".");
        \u0275\u0275element(9, "br");
        \u0275\u0275text(10, " This sample loads all of ");
        \u0275\u0275elementStart(11, "a", 1);
        \u0275\u0275text(12, "SWAPI");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " and caches it to indexedDB. This is also the reason the first load takes longer.\n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "select", 2);
        \u0275\u0275repeaterCreate(15, APISampleComponent_For_16_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275element(17, "br")(18, "input", 3);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(19, "app-show-rec", 4);
        \u0275\u0275listener("selected", function APISampleComponent_Template_app_show_rec_selected_19_listener($event) {
          return ctx.changeTo($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "datalist", 5);
        \u0275\u0275repeaterCreate(21, APISampleComponent_For_22_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("formControl", ctx.chosenSet);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.availableSets());
        \u0275\u0275advance(3);
        \u0275\u0275property("formControl", ctx.name);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("record", ctx.result());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.availableOptions());
      }
    }, dependencies: [ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, FormControlDirective, ShowRecComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  max-height: 95vh;\n  max-width: 98vw;\n  overflow-x: hidden;\n  overflow-y: auto;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(APISampleComponent, [{
    type: Component,
    args: [{ selector: "app-apisample", changeDetection: ChangeDetectionStrategy.OnPush, imports: [ReactiveFormsModule, ShowRecComponent], template: '<H3>Complex api sample</H3>\n<h4>(first load might take a while!)</h4>\n<p>\n  The complexity is in the API, have an look at\n  <a\n    target="blank"\n    href="https://github.com/SanderElias/Samples/blob/master/projects/se-ng/swapi/src/lib/swapi.service.ts"\n    >the swapi service</a\n  >.<br />\n  This sample loads all of\n  <a target="blank" href="https://swapi.dev">SWAPI</a> and caches it to\n  indexedDB. This is also the reason the first load takes longer.\n</p>\n<select [formControl]="chosenSet">\n  @for (item of availableSets(); track item) {\n    <option>{{ item }}</option>\n  }\n</select>\n<br />\n<input type="text" list="listOptions" [formControl]="name" autofocus />\n<app-show-rec [record]="result()" (selected)="changeTo($event)"></app-show-rec>\n\n<datalist id="listOptions">\n  @for (item of availableOptions(); track item) {\n    <option>{{ item }}</option>\n  }\n</datalist>\n\n<style>\n  :host {\n    display: block;\n    max-height: 95vh;\n    max-width: 98vw;\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n</style>\n', styles: ["/* angular:styles/component:css;1ba8555a92a72d3a897ed76f367ca111a391be99a4b3b3cc9fe02452edd93d66;/home/runner/work/Samples/Samples/src/app/complex-api/apisample/apisample.component.html */\n:host {\n  display: block;\n  max-height: 95vh;\n  max-width: 98vw;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(APISampleComponent, { className: "APISampleComponent", filePath: "src/app/complex-api/apisample/apisample.component.ts", lineNumber: 32 });
})();
export {
  APISampleComponent
};
