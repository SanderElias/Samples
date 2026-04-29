import {
  seOnDestroy,
  seOnInit
} from "./chunk-PHXWCJ5H.js";
import {
  SwapiService
} from "./chunk-YLWS43JG.js";
import {
  modelFromLatest
} from "./chunk-J6MQMHVC.js";
import "./chunk-JPDRYBMH.js";
import {
  DefaultValueAccessor,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  UntypedFormControl
} from "./chunk-X4UDGVAN.js";
import {
  AsyncPipe
} from "./chunk-4UOFC3SS.js";
import "./chunk-TWVYKLAR.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  map,
  setClassMetadata,
  shareReplay,
  startWith,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CYK2LKQE.js";
import "./chunk-KCHQYSDT.js";

// src/app/observable-state/lifeycle-hooks-sample/lifeycle-hooks-sample.component.ts
function LifeycleHooksSampleComponent_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ship_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ship_r1.name);
  }
}
function LifeycleHooksSampleComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 0);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(1, "ul");
    \u0275\u0275repeaterCreate(2, LifeycleHooksSampleComponent_Conditional_0_For_3_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formControl", ctx_r2.search);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(vm_r2.search === "" ? vm_r2.allShips : vm_r2.result);
  }
}
function LifeycleHooksSampleComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
var LifeycleHooksSampleComponent = class _LifeycleHooksSampleComponent extends seOnInit(seOnDestroy(class {
})) {
  constructor() {
    super();
    this.swapi = inject(SwapiService);
    this.search = new UntypedFormControl();
    this.searchText$ = this.search.valueChanges.pipe(startWith(""));
    this.starships$ = this.seOnInit$.pipe(switchMap(() => this.swapi.getAllRows("starships")), shareReplay({ refCount: true, bufferSize: 1 }));
    this.filteredShips$ = modelFromLatest({
      ships: this.starships$,
      s: this.searchText$
    }).pipe(
      map((data) => data.ships.filter((row) => row.name.includes(data.s)))
      // tap(ships => console.log(ships))
    );
    this.viewModel$ = modelFromLatest({
      allShips: this.starships$,
      result: this.filteredShips$,
      search: this.searchText$
    });
  }
  static {
    this.\u0275fac = function LifeycleHooksSampleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LifeycleHooksSampleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LifeycleHooksSampleComponent, selectors: [["app-lifeycle-hooks-sample"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 3, consts: [["type", "text", 3, "formControl"]], template: function LifeycleHooksSampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, LifeycleHooksSampleComponent_Conditional_0_Template, 4, 1);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275conditionalBranchCreate(2, LifeycleHooksSampleComponent_Conditional_2_Template, 2, 0, "div");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.viewModel$)) ? 0 : 2, tmp_0_0);
      }
    }, dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LifeycleHooksSampleComponent, [{
    type: Component,
    args: [{ selector: "app-lifeycle-hooks-sample", changeDetection: ChangeDetectionStrategy.OnPush, imports: [ReactiveFormsModule, AsyncPipe], template: `@if (viewModel$ | async; as vm) {
  <input type="text" [formControl]="search" />

  <ul>
    @for (ship of vm.search === '' ? vm.allShips : vm.result; track ship) {
      <li>{{ ship.name }}</li>
    }
  </ul>
} @else {
  <div>Loading...</div>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LifeycleHooksSampleComponent, { className: "LifeycleHooksSampleComponent", filePath: "src/app/observable-state/lifeycle-hooks-sample/lifeycle-hooks-sample.component.ts", lineNumber: 18 });
})();
export {
  LifeycleHooksSampleComponent
};
