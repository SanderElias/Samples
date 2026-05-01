import {
  takeUntilDestroyed
} from "./chunk-GBHLL5IT.js";
import {
  HttpClient
} from "./chunk-KVEFCSSA.js";
import {
  AsyncPipe
} from "./chunk-H4KT6OWY.js";
import "./chunk-7RJGAWPH.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  EMPTY,
  ElementRef,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  from,
  fromEvent,
  inject,
  map,
  setClassMetadata,
  shareReplay,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext
} from "./chunk-T5ZKQ47R.js";
import "./chunk-KCHQYSDT.js";

// src/app/tumblr/tumblr.component.ts
function TumblrComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "article", 2);
    \u0275\u0275domListener("click", function TumblrComponent_For_13_Template_article_click_0_listener() {
      const \u0275$index_20_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.switch(\u0275$index_20_r2));
    });
    \u0275\u0275domElement(1, "img", 5);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const i_r4 = ctx.$implicit;
    const \u0275$index_20_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("large", ctx_r2.largePositions[\u0275$index_20_r2] === 1)("super", ctx_r2.largePositions[\u0275$index_20_r2] === 2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", i_r4.images?.[0]?.link, \u0275\u0275sanitizeUrl);
  }
}
var clientId = "e972ca06cc4b961";
var TumblrComponent = class _TumblrComponent {
  constructor() {
    this.#http = inject(HttpClient);
    this.#elm = inject(ElementRef).nativeElement;
    this.largePositions = this.allRandom();
    this.searchKey$ = new BehaviorSubject("kitten");
    this.results$ = this.searchKey$.pipe(filter((s) => !!s), switchMap((key) => this.#http.get(`https://api.imgur.com/3/gallery/t/${key}`, {
      headers: { Authorization: `Client-ID ${clientId}` }
    }).pipe(catchError((e) => EMPTY))), map((data) => data?.data?.items), filter((s) => !!s), map((items) => items.filter((item) => [Type.ImageJPEG, Type.ImagePNG].includes(item?.images?.[0].type || Type.VideoMp4))), shareReplay(1));
  }
  /** injections */
  #http;
  #elm;
  // set the size of all the images to the same value
  allTo(n) {
    this.largePositions = this.largePositions.map(() => n);
  }
  // set the size of all the images to random values
  allRandom() {
    return this.largePositions = Array.from({ length: 250 }, () => {
      const r = Math.random();
      if (r < 0.2) {
        return 1;
      }
      if (r > 0.8) {
        return 2;
      }
      return 0;
    });
  }
  // switch the size of a single image to the next step, will go small -> medium -> large -> small
  switch(y) {
    this.largePositions[y] += 1;
    if (this.largePositions[y] > 2) {
      this.largePositions[y] = 0;
    }
  }
  ngOnInit() {
    const elm = this.#elm;
    if (typeof document === "undefined")
      return;
    if (elm) {
      const inp = elm.getElementsByTagName("input")[0];
      from(import("./main.module-YSD6STMZ.js")).pipe(
        /** wait for the module to load */
        map(({ wrapGrid }) => wrapGrid(elm.querySelector("#grid"))),
        /** start listening for inputs */
        switchMap(() => fromEvent(inp, "input")),
        map((ev) => {
          const target = ev.target;
          return target.value;
        }),
        // get the value as string
        debounceTime(400),
        distinctUntilChanged(),
        filter((key) => key.length > 0),
        // only search for keys with a length > 0
        takeUntilDestroyed()
        // use the V16 takeUntilDestroyed operator 😁
      ).subscribe(this.searchKey$);
    }
  }
  static {
    this.\u0275fac = function TumblrComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TumblrComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TumblrComponent, selectors: [["app-tumblr"]], decls: 15, vars: 5, consts: [[1, "tools"], ["type", "search", 3, "value"], [3, "click"], ["id", "grid"], [3, "large", "super"], ["loading", "lazy", 3, "src"]], template: function TumblrComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275domElement(1, "input", 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275domElementStart(3, "button", 2);
        \u0275\u0275domListener("click", function TumblrComponent_Template_button_click_3_listener() {
          return ctx.allTo(0);
        });
        \u0275\u0275text(4, "all small");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "button", 2);
        \u0275\u0275domListener("click", function TumblrComponent_Template_button_click_5_listener() {
          return ctx.allTo(1);
        });
        \u0275\u0275text(6, "all med");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(7, "button", 2);
        \u0275\u0275domListener("click", function TumblrComponent_Template_button_click_7_listener() {
          return ctx.allTo(2);
        });
        \u0275\u0275text(8, "all large");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(9, "button", 2);
        \u0275\u0275domListener("click", function TumblrComponent_Template_button_click_9_listener() {
          return ctx.allRandom();
        });
        \u0275\u0275text(10, "all random");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(11, "div", 3);
        \u0275\u0275repeaterCreate(12, TumblrComponent_For_13_Template, 2, 5, "article", 4, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(14, "async");
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275domProperty("value", \u0275\u0275pipeBind1(2, 1, ctx.searchKey$));
        \u0275\u0275advance(11);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(14, 3, ctx.results$));
      }
    }, dependencies: [AsyncPipe], styles: ["\nroot[_ngcontent-%COMP%] {\n  --image-nth: 3;\n}\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n#grid[_ngcontent-%COMP%] {\n  display: grid;\n  height: 87vh;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  grid-auto-rows: 150px;\n  grid-auto-flow: dense;\n  overflow-x: auto;\n  gap: 4px;\n}\n.large[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  grid-row: span 2;\n}\n.super[_ngcontent-%COMP%] {\n  grid-column: span 4;\n  grid-row: span 4;\n}\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.tools[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  padding: 0 1rem;\n  gap: 1rem;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TumblrComponent, [{
    type: Component,
    args: [{ selector: "app-tumblr", changeDetection: ChangeDetectionStrategy.OnPush, imports: [AsyncPipe], template: '<div class="tools">\n  <input type="search" [value]="searchKey$ | async" />\n  <button (click)="allTo(0)">all small</button>\n  <button (click)="allTo(1)">all med</button>\n  <button (click)="allTo(2)">all large</button>\n  <button (click)="allRandom()">all random</button>\n</div>\n<div id="grid">\n  @for (i of results$ | async; track i; let y = $index) {\n  <article\n    [class.large]="largePositions[y]===1"\n    [class.super]="largePositions[y]===2"\n    (click)="switch(y)"\n  >\n    <img [src]="i.images?.[0]?.link" loading="lazy" />\n  </article>\n  }\n</div>\n<style>\n  root {\n    --image-nth: 3;\n  }\n  :host {\n    display: block;\n    height: 100%;\n  }\n  #grid {\n    display: grid;\n    height: 87vh;\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    grid-auto-rows: 150px;\n    grid-auto-flow: dense;\n    overflow-x: auto;\n    gap: 4px;\n  }\n\n  .large {\n    grid-column: span 2;\n    grid-row: span 2;\n  }\n  .super {\n    grid-column: span 4;\n    grid-row: span 4;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .tools {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    padding: 0 1rem;\n    gap: 1rem;\n  }\n</style>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TumblrComponent, { className: "TumblrComponent", filePath: "src/app/tumblr/tumblr.component.ts", lineNumber: 32 });
})();
var SafeFlag;
(function(SafeFlag2) {
  SafeFlag2["Album"] = "album";
  SafeFlag2["Gallery"] = "gallery";
  SafeFlag2["InGallery"] = "in_gallery";
  SafeFlag2["SixthModSafe"] = "sixth_mod_safe";
})(SafeFlag || (SafeFlag = {}));
var UnsafeFlag;
(function(UnsafeFlag2) {
  UnsafeFlag2["OnsfwModUnsafe"] = "onsfw_mod_unsafe";
  UnsafeFlag2["SixthModUnsafe"] = "sixth_mod_unsafe";
  UnsafeFlag2["Under10"] = "under_10";
})(UnsafeFlag || (UnsafeFlag = {}));
var Status;
(function(Status2) {
  Status2["Completed"] = "completed";
})(Status || (Status = {}));
var Type;
(function(Type2) {
  Type2["ImageGIF"] = "image/gif";
  Type2["ImageJPEG"] = "image/jpeg";
  Type2["ImagePNG"] = "image/png";
  Type2["VideoMp4"] = "video/mp4";
})(Type || (Type = {}));
var Layout;
(function(Layout2) {
  Layout2["Blog"] = "blog";
})(Layout || (Layout = {}));
var Privacy;
(function(Privacy2) {
  Privacy2["Hidden"] = "hidden";
})(Privacy || (Privacy = {}));
var Section;
(function(Section2) {
  Section2["Empty"] = "";
  Section2["Oddlysatisfying"] = "oddlysatisfying";
  Section2["Test"] = "test";
})(Section || (Section = {}));
var Topic;
(function(Topic2) {
  Topic2["NoTopic"] = "No Topic";
})(Topic || (Topic = {}));
var Description;
(function(Description2) {
  Description2["April112020"] = "April 11 2020";
  Description2["BrushesLinesColor"] = "brushes, lines, color";
  Description2["CreativeCreations"] = "creative creations";
  Description2["CuteAndAdorable"] = "cute and adorable";
  Description2["Empty"] = "";
  Description2["FelineFriends"] = "feline friends";
  Description2["FoodAndRecipes"] = "food and recipes";
  Description2["HumanSBestFriend"] = "human's best friend";
  Description2["LOLsROFLsLMAOS"] = "LOLs, ROFLs, LMAOs";
  Description2["LightRoastOrDark"] = "light roast or dark?";
  Description2["MotorheadsUnite"] = "Motorheads unite!";
  Description2["NeatAndAmazing"] = "neat and amazing";
  Description2["ThatSNoMooOhWaitYepThatSAMoon"] = "That's no moo- oh, wait. Yep, that's a moon.";
  Description2["VideosWithSound"] = "videos with sound";
})(Description || (Description = {}));
export {
  Description,
  Layout,
  Privacy,
  SafeFlag,
  Section,
  Status,
  Topic,
  TumblrComponent,
  Type,
  UnsafeFlag
};
