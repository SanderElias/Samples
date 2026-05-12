import {
  seAfterContentInit
} from "./chunk-Z25CITNN.js";
import {
  AsyncPipe
} from "./chunk-PESRSGYJ.js";
import "./chunk-TVEZYIJQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Input,
  ViewChildren,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-LHOZ36SL.js";
import "./chunk-KCHQYSDT.js";

// src/app/directives/id.directive.ts
var IdDirective = class _IdDirective {
  static {
    this.\u0275fac = function IdDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IdDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _IdDirective, selectors: [["", "id", ""]], inputs: { id: "id" } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdDirective, [{
    type: Directive,
    args: [{
      selector: "[id]"
    }]
  }], null, { id: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
var lazyImagesLoadDirective = class _lazyImagesLoadDirective {
  constructor() {
    this.elmRef = inject(ElementRef);
    this.#elm = this.elmRef.nativeElement;
  }
  #elm;
  ngOnInit() {
    this.#elm.setAttribute("loading", "lazy");
  }
  static {
    this.\u0275fac = function lazyImagesLoadDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _lazyImagesLoadDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _lazyImagesLoadDirective, selectors: [["img", "src", ""]] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(lazyImagesLoadDirective, [{
    type: Directive,
    args: [{
      selector: "img[src]"
    }]
  }], null, null);
})();

// src/app/directives/directives-sample/directives-sample.component.ts
function DirectivesSampleComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dt");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const id_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(id_r1);
  }
}
var DirectivesSampleComponent = class _DirectivesSampleComponent extends seAfterContentInit() {
  constructor() {
    super(...arguments);
    this.ids$ = this.seAfterContentInit$.pipe(map(() => this.ids.map((idD) => idD.id)));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DirectivesSampleComponent_BaseFactory;
      return function DirectivesSampleComponent_Factory(__ngFactoryType__) {
        return (\u0275DirectivesSampleComponent_BaseFactory || (\u0275DirectivesSampleComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DirectivesSampleComponent)))(__ngFactoryType__ || _DirectivesSampleComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DirectivesSampleComponent, selectors: [["app-directives-sample"]], viewQuery: function DirectivesSampleComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(IdDirective, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ids = _t);
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 2, consts: [["id", "id1"], ["id", "id3"], ["id", "dfgs"], ["id", "sdfw"]], template: function DirectivesSampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "directives-sample!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 0);
        \u0275\u0275text(3, "one");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 1);
        \u0275\u0275text(5, "two");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 2);
        \u0275\u0275text(7, "sdf");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 3);
        \u0275\u0275text(9, "sdftr");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h4");
        \u0275\u0275text(11, "Available ids:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "dl");
        \u0275\u0275repeaterCreate(13, DirectivesSampleComponent_For_14_Template, 2, 1, "dt", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(15, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(15, 0, ctx.ids$));
      }
    }, dependencies: [IdDirective, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DirectivesSampleComponent, [{
    type: Component,
    args: [{ selector: "app-directives-sample", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IdDirective, AsyncPipe], template: '<h1>directives-sample!</h1>\n<div id="id1">one</div>\n<div id="id3">two</div>\n<div id="dfgs">sdf</div>\n<div id="sdfw">sdftr</div>\n\n<h4>Available ids:</h4>\n<dl>\n  @for (id of ids$ | async; track id) {\n    <dt>{{ id }}</dt>\n  }\n</dl>\n' }]
  }], null, { ids: [{
    type: ViewChildren,
    args: [IdDirective]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DirectivesSampleComponent, { className: "DirectivesSampleComponent", filePath: "src/app/directives/directives-sample/directives-sample.component.ts", lineNumber: 20 });
})();
export {
  DirectivesSampleComponent
};
