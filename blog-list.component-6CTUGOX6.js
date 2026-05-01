import {
  Bloglist
} from "./chunk-IS5DXNPL.js";
import "./chunk-5LQK5NDQ.js";
import {
  RouterLink
} from "./chunk-KJ62TFR2.js";
import "./chunk-MOADGNT5.js";
import "./chunk-KVEFCSSA.js";
import "./chunk-H4KT6OWY.js";
import "./chunk-7RJGAWPH.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-T5ZKQ47R.js";
import "./chunk-KCHQYSDT.js";

// src/app/blogs/blog-list/blog-list.component.ts
var _c0 = (a0) => ["/blog", a0];
var _forTrack0 = ($index, $item) => $item.id;
function BlogListComponent_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 0);
    \u0275\u0275element(1, "use", 2);
    \u0275\u0275elementEnd();
  }
}
function BlogListComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275conditionalCreate(1, BlogListComponent_For_1_Conditional_1_Template, 2, 0, ":svg:svg", 0);
    \u0275\u0275elementStart(2, "a", 1);
    \u0275\u0275listener("click", function BlogListComponent_For_1_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onArticleClick());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const article_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(!article_r3.published ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, article_r3.published ? article_r3.name : article_r3.id))("title", article_r3.description);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(article_r3.title);
  }
}
var BlogListComponent = class _BlogListComponent {
  constructor() {
    this.blogList = inject(Bloglist);
    this.#w = inject(DOCUMENT);
    this.articles = computed(
      () => {
        const l = this.blogList.getBlogs();
        let host = this.#w.location?.host ?? "";
        const isDev = ["localhost", "10.", "127."].some((prefix) => host.startsWith(prefix));
        const result = [];
        for (const article of l) {
          if (article.published || isDev) {
            result.push(article);
          }
        }
        return result;
      },
      ...ngDevMode ? [{ debugName: "articles" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  #w;
  onArticleClick() {
    const toggle = this.#w?.getElementById?.("blog-menu-toggle");
    if (toggle) {
      toggle.checked = false;
    }
  }
  static {
    this.\u0275fac = function BlogListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogListComponent, selectors: [["ul", "id", "blog-list"]], decls: 2, vars: 0, consts: [["role", "img", "aria-label", "Draft"], [3, "click", "routerLink", "title"], ["href", "#icon-pencil"]], template: function BlogListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, BlogListComponent_For_1_Template, 4, 6, "li", null, _forTrack0);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.articles());
      }
    }, dependencies: [RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  background-color: var(--surface-2);\n  padding: var(--size-4);\n  margin: 0;\n  list-style-type: none;\n  inline-size: fit-content;\n  block-size: fit-content;\n  border-radius: var(--border-size-5);\n}\n@media (width < 1050px) {\n  [_nghost-%COMP%] {\n    inline-size: 100%;\n    min-inline-size: 0;\n    block-size: auto;\n    border-radius: 0;\n  }\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-block-start: var(--size-3);\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  display: inline;\n  inline-size: 0.75em;\n  block-size: 0.75em;\n  margin-inline-end: 0.25em;\n  color: var(--orange-6);\n  vertical-align: -0.0625em;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogListComponent, [{
    type: Component,
    args: [{ selector: 'ul [id="blog-list"]', imports: [RouterLink], template: `
    @for (article of articles(); track article.id) {
      <li>        @if (!article.published) {
          <svg role="img" aria-label="Draft"><use href="#icon-pencil"></use></svg>
        }        <a
          (click)="onArticleClick()"
          [routerLink]="[
            '/blog',
            article.published ? article.name : article.id
          ]"
          [title]="article.description"
          >{{ article.title }}</a
        >
      </li>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/blogs/blog-list/blog-list.component.css */\n:host {\n  display: block;\n  background-color: var(--surface-2);\n  padding: var(--size-4);\n  margin: 0;\n  list-style-type: none;\n  inline-size: fit-content;\n  block-size: fit-content;\n  border-radius: var(--border-size-5);\n}\n@media (width < 1050px) {\n  :host {\n    inline-size: 100%;\n    min-inline-size: 0;\n    block-size: auto;\n    border-radius: 0;\n  }\n}\n:host li {\n  margin: 0;\n}\n:host li + li {\n  margin-block-start: var(--size-3);\n}\n:host li > svg {\n  display: inline;\n  inline-size: 0.75em;\n  block-size: 0.75em;\n  margin-inline-end: 0.25em;\n  color: var(--orange-6);\n  vertical-align: -0.0625em;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogListComponent, { className: "BlogListComponent", filePath: "src/app/blogs/blog-list/blog-list.component.ts", lineNumber: 35 });
})();
export {
  BlogListComponent
};
