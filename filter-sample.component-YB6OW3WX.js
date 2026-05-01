import {
  DefaultValueAccessor,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  UntypedFormControl,
  ɵInternalFormsSharedModule
} from "./chunk-7SMB5SLG.js";
import {
  AddressService
} from "./chunk-JX56EMXU.js";
import "./chunk-XUVHIZKL.js";
import {
  AsyncPipe
} from "./chunk-H4KT6OWY.js";
import "./chunk-7RJGAWPH.js";
import {
  ChangeDetectionStrategy,
  Component,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  inject,
  map,
  setClassMetadata,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-T5ZKQ47R.js";
import "./chunk-KCHQYSDT.js";

// src/app/filter-samp/filter-sample/filter-sample.component.ts
function FilterSampleComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "img", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r1.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.name, " ");
  }
}
function FilterSampleComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "input", 1);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(2, "ul");
    \u0275\u0275repeaterCreate(3, FilterSampleComponent_Conditional_0_For_4_Template, 3, 2, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.nameFilter);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.users);
  }
}
function FilterSampleComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2");
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
var FilterSampleComponent = class _FilterSampleComponent {
  constructor() {
    this.us = inject(AddressService);
    this.nameFilter = new UntypedFormControl("");
    this.filter$ = this.nameFilter.valueChanges.pipe(debounceTime(500), distinctUntilChanged(), startWith(""), map((name) => name.trim().toLocaleLowerCase()));
    this.users$ = this.us.userCards$;
    this.vm$ = combineLatest([this.users$, this.filter$]).pipe(map(([users, filterStr]) => ({
      users: users.filter((row) => filterStr ? row.name.toLocaleLowerCase().includes(filterStr) : true)
    })));
  }
  static {
    this.\u0275fac = function FilterSampleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FilterSampleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FilterSampleComponent, selectors: [["app-filter-sample"]], decls: 3, vars: 3, consts: [[1, "backDrop"], ["type", "text", 3, "formControl"], ["alt", "", 3, "src"]], template: function FilterSampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, FilterSampleComponent_Conditional_0_Template, 5, 1, "div");
        \u0275\u0275pipe(1, "async");
        \u0275\u0275conditionalBranchCreate(2, FilterSampleComponent_Conditional_2_Template, 4, 0, "div", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.vm$)) ? 0 : 2, tmp_0_0);
      }
    }, dependencies: [\u0275InternalFormsSharedModule, DefaultValueAccessor, NgControlStatus, ReactiveFormsModule, FormControlDirective, AsyncPipe], styles: ["\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 5px;\n  overflow: auto;\n  max-height: 83dvh;\n  padding-right: 0.5rem;\n}\nli[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  border: 1px solid black;\n  background-color: #444242;\n  padding: 0;\n  gap: 0.5rem;\n  border-radius: 0.25rem;\n}\nli[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: 0.25rem 0.25rem 0 0;\n  object-fit: cover;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterSampleComponent, [{
    type: Component,
    args: [{ selector: "app-filter-sample", changeDetection: ChangeDetectionStrategy.OnPush, imports: [\u0275InternalFormsSharedModule, ReactiveFormsModule, AsyncPipe], template: '@if (vm$ | async; as vm) {\n  <div>\n    <input type="text" [formControl]="nameFilter" />\n    <ul>\n      @for (item of vm.users; track item) {\n        <li>\n          <img [src]="item.avatar" alt="" />\n          {{ item.name }}\n        </li>\n      }\n    </ul>\n  </div>\n} @else {\n  <div class="backDrop">\n    <div><h2>Loading...</h2></div>\n  </div>\n}\n\n<style>\n  ul {\n    list-style: none;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    gap: 5px;\n    overflow: auto;\n    max-height: 83dvh;\n    padding-right: 0.5rem;\n  }\n  li {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    border: 1px solid black;\n    background-color: #444242;\n    padding: 0;\n    gap: 0.5rem;\n    border-radius: 0.25rem;\n  }\n\n  li > img {\n    width: 100%;\n    aspect-ratio: 1;\n    border-radius: 0.25rem 0.25rem 0 0;\n    object-fit: cover;\n  }\n</style>\n', styles: ["/* angular:styles/component:css;169764734d993d13724ebc79b576798b2eeb08d83c03557821ee4521710c6d65;/home/runner/work/Samples/Samples/src/app/filter-samp/filter-sample/filter-sample.component.html */\nul {\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 5px;\n  overflow: auto;\n  max-height: 83dvh;\n  padding-right: 0.5rem;\n}\nli {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  border: 1px solid black;\n  background-color: #444242;\n  padding: 0;\n  gap: 0.5rem;\n  border-radius: 0.25rem;\n}\nli > img {\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: 0.25rem 0.25rem 0 0;\n  object-fit: cover;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilterSampleComponent, { className: "FilterSampleComponent", filePath: "src/app/filter-samp/filter-sample/filter-sample.component.ts", lineNumber: 28 });
})();
export {
  FilterSampleComponent
};
