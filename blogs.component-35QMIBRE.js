import {
  Bloglist
} from "./chunk-EIFRTUEY.js";
import "./chunk-IPCX26GH.js";
import {
  DomSanitizer,
  Title
} from "./chunk-6GT6DGDO.js";
import {
  HttpClient
} from "./chunk-UN3GGFEO.js";
import "./chunk-MTKF5SUL.js";
import "./chunk-72AYNUCX.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
  firstValueFrom,
  inject,
  input,
  linkedSignal,
  resource,
  setClassMetadata,
  setClassMetadataAsync,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefer,
  ɵɵdeferHydrateNever,
  ɵɵdeferOnIdle,
  ɵɵdefineComponent,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4YMCON7N.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/blogs/blogs.component.ts
var BlogsComponent_Defer_1_DepsFn = () => [
  /* @ts-ignore */
  import("./blog-list.component-WMKH4TQ5.js").then((m) => m.BlogListComponent)
];
function BlogsComponent_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 0);
    \u0275\u0275elementStart(1, "label", 1)(2, "span", 2);
    \u0275\u0275text(3, "Open article menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5, "Close article menu");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 4);
    \u0275\u0275element(7, "use", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "svg", 6);
    \u0275\u0275element(9, "use", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "header")(11, "h1");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "main", 8);
    \u0275\u0275element(14, "article", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "ul", 10);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(((tmp_1_0 = ctx_r0.blogList.getBlogById(ctx_r0.id())) == null ? null : tmp_1_0.title) || "Welcome to the blog");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r0.testblog.value(), \u0275\u0275sanitizeHtml);
  }
}
var BlogsComponent = class _BlogsComponent {
  constructor() {
    this.san = inject(DomSanitizer);
    this.http = inject(HttpClient);
    this.blogList = inject(Bloglist);
    this.title = inject(Title);
    this.id = input(
      ...ngDevMode ? [void 0, { debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.url = linkedSignal(
      () => {
        const id = this.id() ?? "xYj937jtgycHjWm1";
        const blog = this.blogList.getBlogById(id);
        if (blog) {
          return `/assets/articles/${blog.name}.md`;
        } else {
          return `/assets/articles/404.md`;
        }
      },
      ...ngDevMode ? [{ debugName: "url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.testblog = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "testblog" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this.url(),
      loader: async ({ params }) => {
        const content = await firstValueFrom(this.http.get(params, { responseType: "text" }));
        if (content) {
          const { parser } = await import("./parser-F2I4IBNW.js");
          const html = await parser(content);
          const title = content.match(/# (.*)/);
          if (title) {
            this.title.setTitle(title[1]);
          }
          return this.san.bypassSecurityTrustHtml(html);
        }
        return "blog not found";
      }
    }));
  }
  static {
    this.\u0275fac = function BlogsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogsComponent, selectors: [["se-blogs"]], inputs: { id: [1, "id"] }, decls: 3, vars: 0, consts: [["id", "blog-menu-toggle", "type", "checkbox", "aria-label", "Toggle article menu"], ["for", "blog-menu-toggle", "title", "Toggle article menu", 1, "blog-menu-btn"], [1, "sr-only", "menu-open-text"], [1, "sr-only", "menu-close-text"], ["aria-hidden", "true", "focusable", "false", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "menu-icon"], ["href", "#icon-menu"], ["aria-hidden", "true", "focusable", "false", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "close-icon"], ["href", "#icon-close"], ["tabindex", "0", "aria-label", "Blog article content"], [1, "rich-text", 3, "innerHTML"], ["id", "blog-list"]], template: function BlogsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domTemplate(0, BlogsComponent_Defer_0_Template, 16, 2);
        \u0275\u0275defer(1, 0, BlogsComponent_Defer_1_DepsFn, null, null, null, null, null, null, 1);
        \u0275\u0275deferHydrateNever();
        \u0275\u0275deferOnIdle();
      }
    }, styles: ['/* src/app/blogs/blogs.component.css */\nse-blogs {\n  --article-inline-size: 70ch;\n  --task-unchecked-bg: color-mix(in oklab, var(--surface-2) 88%, var(--surface-1));\n  --task-unchecked-border: color-mix(in oklab, var(--surface-4) 70%, var(--text-2));\n  --task-checked-bg: color-mix(in oklab, var(--brand) 78%, var(--surface-1));\n  --task-checked-border: color-mix(in oklab, var(--brand) 66%, var(--text-1));\n  --task-checkmark: var(--surface-1);\n  display: grid;\n  block-size: 100dvb;\n  max-inline-size: 98dvs;\n  padding: var(--size-4);\n  padding-block-end: 0;\n  overflow: clip;\n  padding-inline-end: 1rem;\n  grid-template-columns: 1fr var(--article-inline-size) auto 1fr;\n  grid-template-rows: auto 1fr 0;\n  grid-template-areas: " . header header . " " . article menu . " " footer footer footer footer ";\n  column-gap: var(--size-3);\n}\n@media (prefers-color-scheme: dark) {\n  se-blogs {\n    --task-checked-bg: color-mix(in oklab, var(--brand) 70%, var(--surface-2));\n    --task-checked-border: color-mix(in oklab, var(--brand) 58%, var(--text-1));\n    --task-unchecked-border: color-mix( in oklab, var(--surface-4) 62%, var(--text-2) );\n  }\n}\nse-blogs #blog-menu-toggle {\n  position: absolute;\n  inline-size: 1px;\n  block-size: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  white-space: nowrap;\n}\nse-blogs #blog-menu-toggle:focus-visible + .blog-menu-btn {\n  outline: 2px solid var(--blue-5);\n  outline-offset: 2px;\n}\nse-blogs .blog-menu-btn {\n  display: none;\n}\n@media (width < 1050px) {\n  se-blogs {\n    grid-template-columns: [icon] 24px [content-start] minmax(0, 1fr) [content-end];\n    grid-template-rows: [header-start] auto [body-start] 1fr [footer-start] 0 [footer-end];\n    grid-template-areas: "icon header" ". article" "footer footer";\n  }\n  se-blogs .blog-menu-btn {\n    grid-column: icon;\n    grid-row: header-start / body-start;\n    justify-self: center;\n    display: block;\n    cursor: pointer;\n    background: none;\n    border: none;\n    padding: 0;\n    inline-size: 24px;\n    min-inline-size: 24px;\n    block-size: 24px;\n    min-block-size: 24px;\n    align-self: center;\n  }\n  se-blogs .blog-menu-btn svg {\n    inline-size: 24px;\n    block-size: 24px;\n    display: block;\n  }\n}\nse-blogs :where(h1, h2, h3, h4, p, blockquote, ul, table, pre, code) {\n  max-inline-size: unset;\n}\nse-blogs .sr-only {\n  position: absolute;\n  inline-size: 1px;\n  block-size: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  white-space: nowrap;\n}\nse-blogs pre {\n  overflow-x: auto;\n  max-inline-size: 100%;\n}\nse-blogs pre code {\n  white-space: pre;\n}\nse-blogs code:not(pre code) {\n  white-space: pre-wrap;\n}\nse-blogs ::backdrop {\n  backdrop-filter: blur(2px);\n}\nse-blogs header {\n  grid-area: header;\n}\nse-blogs h1 {\n  margin-block-end: var(--size-4);\n  text-align: left;\n  text-wrap: balance;\n  max-inline-size: none;\n}\n@media (width < 1050px) {\n  se-blogs h1 {\n    align-self: center;\n    margin-block-end: 0;\n  }\n}\nse-blogs h2 {\n  border-block-end: 1px solid;\n}\nse-blogs main {\n  grid-area: article;\n  overflow-y: auto;\n  margin-inline: auto;\n  inline-size: 100%;\n  min-inline-size: 0;\n  max-inline-size: var(--article-inline-size);\n  padding-inline-end: var(--size-3);\n  text-wrap: pretty;\n  word-break: break-word;\n}\nse-blogs main h1:first-child {\n  display: none;\n}\n@media (width < 1050px) {\n  se-blogs main {\n    margin-inline: 0;\n    max-inline-size: 100%;\n  }\n}\nse-blogs mermaid-diagram {\n  display: block;\n  overflow-x: auto;\n  margin-block: var(--size-4);\n}\nse-blogs mermaid-diagram svg {\n  display: block;\n  max-inline-size: 100%;\n  height: auto;\n}\nse-blogs ul#blog-list {\n  display: block;\n  list-style: none;\n}\n@media (width >= 1050px) {\n  se-blogs ul#blog-list {\n    grid-area: menu;\n  }\n}\n@media (width < 1050px) {\n  se-blogs ul#blog-list {\n    grid-column: icon / content-end;\n    grid-row: body-start / footer-start;\n    justify-self: start;\n    align-self: stretch;\n    margin-inline-start: calc(-1 * var(--size-4));\n    inline-size: min(300px, 80vw);\n    max-inline-size: 100%;\n    padding: var(--size-4);\n    min-inline-size: 0;\n    overflow-y: auto;\n    overflow-x: hidden;\n    transform: translateX(calc(-100% - var(--size-3)));\n    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), visibility 0s linear 0.5s;\n    visibility: hidden;\n    pointer-events: none;\n    z-index: 2;\n    border-start-end-radius: var(--border-size-5);\n    scrollbar-width: thin;\n    scrollbar-color: transparent transparent;\n  }\n  se-blogs ul#blog-list:hover {\n    scrollbar-color: var(--surface-4) transparent;\n  }\n  se-blogs ul#blog-list::-webkit-scrollbar {\n    width: 4px;\n  }\n  se-blogs ul#blog-list::-webkit-scrollbar-thumb {\n    background: transparent;\n    border-radius: var(--border-size-5);\n    transition: background 0.3s;\n  }\n  se-blogs ul#blog-list:hover::-webkit-scrollbar-thumb {\n    background: var(--surface-4);\n  }\n}\n@media (width < 1050px) {\n  se-blogs:has(#blog-menu-toggle:checked) ul#blog-list {\n    transform: translateX(0);\n    visibility: visible;\n    pointer-events: auto;\n    transition-delay: 0s;\n  }\n}\n@media (width < 1050px) {\n  se-blogs .blog-menu-btn .close-icon {\n    display: none;\n  }\n  se-blogs .blog-menu-btn .menu-close-text {\n    display: none;\n  }\n  se-blogs:has(#blog-menu-toggle:checked) .blog-menu-btn .close-icon {\n    display: block;\n  }\n  se-blogs:has(#blog-menu-toggle:checked) .blog-menu-btn .menu-icon {\n    display: none;\n  }\n  se-blogs:has(#blog-menu-toggle:checked) .blog-menu-btn .menu-open-text {\n    display: none;\n  }\n  se-blogs:has(#blog-menu-toggle:checked) .blog-menu-btn .menu-close-text {\n    display: inline;\n  }\n}\nse-blogs p,\nse-blogs ul,\nse-blogs blockquote {\n  margin-block-end: var(--size-3);\n}\nse-blogs main article li:has(> input[type=checkbox]) {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.45rem;\n}\nse-blogs main article li > input[type=checkbox] {\n  margin: 0;\n  margin-block-start: 0.25em;\n  inline-size: 1em;\n  block-size: 1em;\n  flex: 0 0 auto;\n  appearance: none;\n  -webkit-appearance: none;\n  display: grid;\n  place-content: center;\n  border: 1px solid var(--task-unchecked-border);\n  border-radius: 0.2em;\n  background: var(--task-unchecked-bg);\n  cursor: default;\n}\nse-blogs main article li > input[type=checkbox]::before {\n  content: "";\n  inline-size: 0.55em;\n  block-size: 0.55em;\n  transform: scale(0);\n  transform-origin: center;\n  transition: transform 120ms ease-in-out;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0, 43% 62%);\n  background: var(--task-checkmark);\n}\nse-blogs main article li > input[type=checkbox]:checked {\n  background: var(--task-checked-bg);\n  border-color: var(--task-checked-border);\n}\nse-blogs main article li > input[type=checkbox]:checked::before {\n  transform: scale(1);\n}\nse-blogs main article li > input[type=checkbox]:disabled {\n  opacity: 1;\n}\nse-blogs main article li:has(> input[type=checkbox]:checked) {\n  color: color-mix(in oklab, var(--text-2) 84%, var(--text-1));\n  text-decoration: line-through;\n  text-decoration-thickness: 0.091em;\n  text-decoration-color: color-mix(in oklab, currentColor 70%, transparent);\n}\nse-blogs table {\n  margin-block-end: var(--size-5);\n}\nse-blogs blockquote {\n  padding: var(--size-2);\n  padding-inline-start: var(--size-3);\n  border-start-end-radius: var(--size-2);\n  border-end-end-radius: var(--size-2);\n  margin-inline: var(--size-4);\n  background-color: var(--surface-2);\n}\nse-blogs blockquote p {\n  padding-block: 0;\n  margin-block: 0;\n}\nse-blogs blockquote:has(> span.icon) {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  column-gap: var(--size-3);\n}\nse-blogs blockquote:has(> span.icon) > :not(span.icon) {\n  grid-column: 2;\n}\nse-blogs blockquote:has(> span.icon) > span.icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nse-blogs blockquote:has(> span.icon) > span.icon svg {\n  inline-size: 44px;\n  block-size: 44px;\n}\nse-blogs a {\n  cursor: pointer;\n  font-size: inherit;\n  font-weight: 700;\n  line-height: inherit;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\nse-blogs p {\n  line-height: 1.5;\n  margin-block: var(--size-2);\n}\nse-blogs :is(p, li):has(> code) {\n  line-height: 1.7;\n}\nse-blogs :is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) {\n  color: var(--text-color-1);\n}\nse-blogs :is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + *:not(se-blogs :is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6)) {\n  margin-block-start: 0;\n}\nse-blogs :where(h1, .h1) {\n  font-size: var(--font-size-h1, var(--font-size-7));\n  letter-spacing: -0.02em;\n  line-height: 1.1111111;\n  margin-block: 0 0.8888889em;\n}\nse-blogs h2,\nse-blogs .h2 {\n  font-size: var(--font-size-h2, var(--font-size-5, 2rem));\n  letter-spacing: -0.02em;\n  line-height: 1.3333333;\n  margin-block: 1em 1em;\n}\nse-blogs h3,\nse-blogs .h3 {\n  font-size: var(--font-size-h3, var(--font-size-4, 1.5rem));\n  letter-spacing: -0.01em;\n  line-height: 1.6;\n  margin-block: 1.6em 0.6em;\n}\nse-blogs h4,\nse-blogs .h4 {\n  font-size: var(--font-size-h4, var(--font-size-3, 1.25rem));\n  letter-spacing: -0.01em;\n  line-height: 1.5;\n  margin-block: 1.5em 0.5em;\n}\nse-blogs h5,\nse-blogs .h5 {\n  font-size: var(--font-size-h5, var(--font-size-2, 1.1rem));\n  line-height: 1;\n  margin-block: 0 var(--size-1);\n}\nse-blogs h6,\nse-blogs .h6 {\n  font-size: var(--font-size-h6, var(--font-size-1, 1rem));\n  line-height: 1;\n  margin-block: 0 var(--size-1);\n}\nse-blogs :where(.overline, hgroup > :where(p, .p):first-of-type:first-child) {\n  color: light-dark(oklch(from var(--text-color-2) calc(l * 1.25) c h), oklch(from var(--text-color-2) calc(l * 0.75) c h));\n  font-size: var(--font-size-xs);\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  line-height: 2.5;\n  text-transform: uppercase;\n}\nse-blogs hgroup > p {\n  margin: 0;\n}\nse-blogs hgroup > :where(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) {\n  margin-block-end: 0.4em;\n}\nse-blogs hgroup + * {\n  margin-block-start: 3em;\n}\nse-blogs hgroup > :where(p, .p):last-of-type:last-child:not(:first-child) {\n  color: oklch(from currentColor l c h / 75%);\n  font-size: var(--font-size-lg);\n  line-height: 1.6;\n}\nse-blogs ul:not([class]) {\n  list-style-type: disc;\n}\nse-blogs ol:not([class]) {\n  list-style-type: decimal;\n}\nse-blogs :where(ul, ol):not([class]) {\n  display: grid;\n  font-size: inherit;\n  gap: 0.5em;\n  line-height: inherit;\n  margin-block-start: 1.25em;\n  margin-block-end: 1.25em;\n  padding-inline-start: 1.625em;\n}\nse-blogs :where(ul, ol):not([class]) li {\n  padding-inline-start: 0.375em;\n}\nse-blogs :where(ul ul),\nse-blogs :where(ul ol),\nse-blogs :where(ol ul),\nse-blogs :where(ol ol) {\n  margin-block-start: 0.75em;\n  margin-block-end: 0.75em;\n}\nse-blogs :where(dl) {\n  font-size: inherit;\n  line-height: inherit;\n  margin-block-start: 1.25em;\n  margin-block-end: 1.25em;\n}\nse-blogs :where(dl) dt {\n  margin-block-start: 1.25em;\n}\nse-blogs :where(dl) dd {\n  margin-block-start: 0.5em;\n  padding-inline-start: 1.625em;\n}\nse-blogs figure {\n  margin-block: 2em;\n}\nse-blogs figure > * {\n  margin-block: 0;\n}\nse-blogs figure figcaption {\n  font-size: 0.875em;\n  line-height: 1.4285714;\n  margin-block-start: 0.8571429em;\n}\nse-blogs > :first-child {\n  margin-block-start: 0;\n}\nse-blogs > :last-child {\n  margin-block-end: 0;\n}\nse-blogs hr + * {\n  margin-block-start: 0;\n}\nse-blogs ::details-content {\n  transition: height 0.75s ease, content-visibility 0.1s ease allow-discrete;\n  height: 0;\n  overflow: clip;\n}\nse-blogs [open]::details-content {\n  height: auto;\n}\n@media (prefers-color-scheme: dark) {\n  se-blogs .hljs {\n    background: #1e1e1e;\n    color: #dcdcdc;\n  }\n  se-blogs .hljs-keyword,\n  se-blogs .hljs-literal,\n  se-blogs .hljs-name,\n  se-blogs .hljs-symbol {\n    color: #569cd6;\n  }\n  se-blogs .hljs-link {\n    color: #569cd6;\n    text-decoration: underline;\n  }\n  se-blogs .hljs-built_in,\n  se-blogs .hljs-type {\n    color: #4ec9b0;\n  }\n  se-blogs .hljs-class,\n  se-blogs .hljs-number {\n    color: #b8d7a3;\n  }\n  se-blogs .hljs-meta .hljs-string,\n  se-blogs .hljs-string {\n    color: #d69d85;\n  }\n  se-blogs .hljs-regexp,\n  se-blogs .hljs-template-tag {\n    color: #9a5334;\n  }\n  se-blogs .hljs-formula,\n  se-blogs .hljs-function,\n  se-blogs .hljs-params,\n  se-blogs .hljs-subst,\n  se-blogs .hljs-title {\n    color: #dcdcdc;\n  }\n  se-blogs .hljs-comment,\n  se-blogs .hljs-quote {\n    color: #57a64a;\n    font-style: italic;\n  }\n  se-blogs .hljs-doctag {\n    color: #79a56a;\n  }\n  se-blogs .hljs-meta,\n  se-blogs .hljs-meta .hljs-keyword,\n  se-blogs .hljs-tag {\n    color: #9b9b9b;\n  }\n  se-blogs .hljs-template-variable,\n  se-blogs .hljs-variable {\n    color: #bd63c5;\n  }\n  se-blogs .hljs-attr,\n  se-blogs .hljs-attribute {\n    color: #9cdcfe;\n  }\n  se-blogs .hljs-section {\n    color: gold;\n  }\n  se-blogs .hljs-emphasis {\n    font-style: italic;\n  }\n  se-blogs .hljs-strong {\n    font-weight: 700;\n  }\n  se-blogs .hljs-bullet,\n  se-blogs .hljs-selector-attr,\n  se-blogs .hljs-selector-class,\n  se-blogs .hljs-selector-id,\n  se-blogs .hljs-selector-pseudo,\n  se-blogs .hljs-selector-tag {\n    color: #d7ba7d;\n  }\n  se-blogs .hljs-addition {\n    background-color: #144212;\n    display: inline-block;\n    width: 100%;\n  }\n  se-blogs .hljs-deletion {\n    background-color: #600;\n    display: inline-block;\n    width: 100%;\n  }\n}\n@media (prefers-color-scheme: light) {\n  se-blogs .hljs {\n    background: #fff;\n    color: #000;\n  }\n  se-blogs .hljs-comment,\n  se-blogs .hljs-quote,\n  se-blogs .hljs-variable {\n    color: green;\n  }\n  se-blogs .hljs-built_in,\n  se-blogs .hljs-keyword,\n  se-blogs .hljs-name,\n  se-blogs .hljs-selector-tag,\n  se-blogs .hljs-tag {\n    color: #00f;\n  }\n  se-blogs .hljs-addition,\n  se-blogs .hljs-attribute,\n  se-blogs .hljs-literal,\n  se-blogs .hljs-section,\n  se-blogs .hljs-string,\n  se-blogs .hljs-template-tag,\n  se-blogs .hljs-template-variable,\n  se-blogs .hljs-title,\n  se-blogs .hljs-type {\n    color: #a31515;\n  }\n  se-blogs .hljs-deletion,\n  se-blogs .hljs-meta,\n  se-blogs .hljs-selector-attr,\n  se-blogs .hljs-selector-pseudo {\n    color: #0b6e87;\n  }\n  se-blogs .hljs-doctag {\n    color: #616161;\n  }\n  se-blogs .hljs-attr {\n    color: #a31515;\n  }\n  se-blogs .hljs-bullet,\n  se-blogs .hljs-link,\n  se-blogs .hljs-symbol {\n    color: #0078d4;\n  }\n  se-blogs .hljs-emphasis {\n    font-style: italic;\n  }\n  se-blogs .hljs-strong {\n    font-weight: 700;\n  }\n}\nse-blogs pre code.hljs {\n  display: block;\n  padding: 1em;\n}\nse-blogs code.hljs {\n  padding: 3px 5px;\n}\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(BlogsComponent, () => [
    /* @ts-ignore */
    import("./blog-list.component-WMKH4TQ5.js").then((m) => m.BlogListComponent)
  ], (BlogListComponent) => {
    setClassMetadata(BlogsComponent, [{
      type: Component,
      args: [{ selector: "se-blogs", imports: [BlogListComponent], template: `
    @defer (hydrate never) {
      <input
        id="blog-menu-toggle"
        type="checkbox"
        aria-label="Toggle article menu"
      />
      <label for="blog-menu-toggle" class="blog-menu-btn" title="Toggle article menu">
        <span class="sr-only menu-open-text">Open article menu</span>
        <span class="sr-only menu-close-text">Close article menu</span>
        <svg class="menu-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24">
          <use href="#icon-menu"></use>
        </svg>
        <svg class="close-icon" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24">
          <use href="#icon-close"></use>
        </svg>
      </label>
      <header>
        <h1>{{ blogList.getBlogById(id())?.title || 'Welcome to the blog' }}</h1>
      </header>
      <main tabindex="0" aria-label="Blog article content">
        <article class="rich-text" [innerHTML]="testblog.value()"></article>
      </main>
      <ul id="blog-list"></ul>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: ['/* src/app/blogs/blogs.component.css */\nse-blogs {\n  --article-inline-size: 70ch;\n  --task-unchecked-bg: color-mix(in oklab, var(--surface-2) 88%, var(--surface-1));\n  --task-unchecked-border: color-mix(in oklab, var(--surface-4) 70%, var(--text-2));\n  --task-checked-bg: color-mix(in oklab, var(--brand) 78%, var(--surface-1));\n  --task-checked-border: color-mix(in oklab, var(--brand) 66%, var(--text-1));\n  --task-checkmark: var(--surface-1);\n  display: grid;\n  block-size: 100dvb;\n  max-inline-size: 98dvs;\n  padding: var(--size-4);\n  padding-block-end: 0;\n  overflow: clip;\n  padding-inline-end: 1rem;\n  grid-template-columns: 1fr var(--article-inline-size) auto 1fr;\n  grid-template-rows: auto 1fr 0;\n  grid-template-areas: " . header header . " " . article menu . " " footer footer footer footer ";\n  column-gap: var(--size-3);\n}\n@media (prefers-color-scheme: dark) {\n  se-blogs {\n    --task-checked-bg: color-mix(in oklab, var(--brand) 70%, var(--surface-2));\n    --task-checked-border: color-mix(in oklab, var(--brand) 58%, var(--text-1));\n    --task-unchecked-border: color-mix( in oklab, var(--surface-4) 62%, var(--text-2) );\n  }\n}\nse-blogs #blog-menu-toggle {\n  position: absolute;\n  inline-size: 1px;\n  block-size: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  white-space: nowrap;\n}\nse-blogs #blog-menu-toggle:focus-visible + .blog-menu-btn {\n  outline: 2px solid var(--blue-5);\n  outline-offset: 2px;\n}\nse-blogs .blog-menu-btn {\n  display: none;\n}\n@media (width < 1050px) {\n  se-blogs {\n    grid-template-columns: [icon] 24px [content-start] minmax(0, 1fr) [content-end];\n    grid-template-rows: [header-start] auto [body-start] 1fr [footer-start] 0 [footer-end];\n    grid-template-areas: "icon header" ". article" "footer footer";\n  }\n  se-blogs .blog-menu-btn {\n    grid-column: icon;\n    grid-row: header-start / body-start;\n    justify-self: center;\n    display: block;\n    cursor: pointer;\n    background: none;\n    border: none;\n    padding: 0;\n    inline-size: 24px;\n    min-inline-size: 24px;\n    block-size: 24px;\n    min-block-size: 24px;\n    align-self: center;\n  }\n  se-blogs .blog-menu-btn svg {\n    inline-size: 24px;\n    block-size: 24px;\n    display: block;\n  }\n}\nse-blogs :where(h1, h2, h3, h4, p, blockquote, ul, table, pre, code) {\n  max-inline-size: unset;\n}\nse-blogs .sr-only {\n  position: absolute;\n  inline-size: 1px;\n  block-size: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  white-space: nowrap;\n}\nse-blogs pre {\n  overflow-x: auto;\n  max-inline-size: 100%;\n}\nse-blogs pre code {\n  white-space: pre;\n}\nse-blogs code:not(pre code) {\n  white-space: pre-wrap;\n}\nse-blogs ::backdrop {\n  backdrop-filter: blur(2px);\n}\nse-blogs header {\n  grid-area: header;\n}\nse-blogs h1 {\n  margin-block-end: var(--size-4);\n  text-align: left;\n  text-wrap: balance;\n  max-inline-size: none;\n}\n@media (width < 1050px) {\n  se-blogs h1 {\n    align-self: center;\n    margin-block-end: 0;\n  }\n}\nse-blogs h2 {\n  border-block-end: 1px solid;\n}\nse-blogs main {\n  grid-area: article;\n  overflow-y: auto;\n  margin-inline: auto;\n  inline-size: 100%;\n  min-inline-size: 0;\n  max-inline-size: var(--article-inline-size);\n  padding-inline-end: var(--size-3);\n  text-wrap: pretty;\n  word-break: break-word;\n}\nse-blogs main h1:first-child {\n  display: none;\n}\n@media (width < 1050px) {\n  se-blogs main {\n    margin-inline: 0;\n    max-inline-size: 100%;\n  }\n}\nse-blogs mermaid-diagram {\n  display: block;\n  overflow-x: auto;\n  margin-block: var(--size-4);\n}\nse-blogs mermaid-diagram svg {\n  display: block;\n  max-inline-size: 100%;\n  height: auto;\n}\nse-blogs ul#blog-list {\n  display: block;\n  list-style: none;\n}\n@media (width >= 1050px) {\n  se-blogs ul#blog-list {\n    grid-area: menu;\n  }\n}\n@media (width < 1050px) {\n  se-blogs ul#blog-list {\n    grid-column: icon / content-end;\n    grid-row: body-start / footer-start;\n    justify-self: start;\n    align-self: stretch;\n    margin-inline-start: calc(-1 * var(--size-4));\n    inline-size: min(300px, 80vw);\n    max-inline-size: 100%;\n    padding: var(--size-4);\n    min-inline-size: 0;\n    overflow-y: auto;\n    overflow-x: hidden;\n    transform: translateX(calc(-100% - var(--size-3)));\n    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), visibility 0s linear 0.5s;\n    visibility: hidden;\n    pointer-events: none;\n    z-index: 2;\n    border-start-end-radius: var(--border-size-5);\n    scrollbar-width: thin;\n    scrollbar-color: transparent transparent;\n  }\n  se-blogs ul#blog-list:hover {\n    scrollbar-color: var(--surface-4) transparent;\n  }\n  se-blogs ul#blog-list::-webkit-scrollbar {\n    width: 4px;\n  }\n  se-blogs ul#blog-list::-webkit-scrollbar-thumb {\n    background: transparent;\n    border-radius: var(--border-size-5);\n    transition: background 0.3s;\n  }\n  se-blogs ul#blog-list:hover::-webkit-scrollbar-thumb {\n    background: var(--surface-4);\n  }\n}\n@media (width < 1050px) {\n  se-blogs:has(#blog-menu-toggle:checked) ul#blog-list {\n    transform: translateX(0);\n    visibility: visible;\n    pointer-events: auto;\n    transition-delay: 0s;\n  }\n}\n@media (width < 1050px) {\n  se-blogs .blog-menu-btn .close-icon {\n    display: none;\n  }\n  se-blogs .blog-menu-btn .menu-close-text {\n    display: none;\n  }\n  se-blogs:has(#blog-menu-toggle:checked) .blog-menu-btn .close-icon {\n    display: block;\n  }\n  se-blogs:has(#blog-menu-toggle:checked) .blog-menu-btn .menu-icon {\n    display: none;\n  }\n  se-blogs:has(#blog-menu-toggle:checked) .blog-menu-btn .menu-open-text {\n    display: none;\n  }\n  se-blogs:has(#blog-menu-toggle:checked) .blog-menu-btn .menu-close-text {\n    display: inline;\n  }\n}\nse-blogs p,\nse-blogs ul,\nse-blogs blockquote {\n  margin-block-end: var(--size-3);\n}\nse-blogs main article li:has(> input[type=checkbox]) {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.45rem;\n}\nse-blogs main article li > input[type=checkbox] {\n  margin: 0;\n  margin-block-start: 0.25em;\n  inline-size: 1em;\n  block-size: 1em;\n  flex: 0 0 auto;\n  appearance: none;\n  -webkit-appearance: none;\n  display: grid;\n  place-content: center;\n  border: 1px solid var(--task-unchecked-border);\n  border-radius: 0.2em;\n  background: var(--task-unchecked-bg);\n  cursor: default;\n}\nse-blogs main article li > input[type=checkbox]::before {\n  content: "";\n  inline-size: 0.55em;\n  block-size: 0.55em;\n  transform: scale(0);\n  transform-origin: center;\n  transition: transform 120ms ease-in-out;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0, 43% 62%);\n  background: var(--task-checkmark);\n}\nse-blogs main article li > input[type=checkbox]:checked {\n  background: var(--task-checked-bg);\n  border-color: var(--task-checked-border);\n}\nse-blogs main article li > input[type=checkbox]:checked::before {\n  transform: scale(1);\n}\nse-blogs main article li > input[type=checkbox]:disabled {\n  opacity: 1;\n}\nse-blogs main article li:has(> input[type=checkbox]:checked) {\n  color: color-mix(in oklab, var(--text-2) 84%, var(--text-1));\n  text-decoration: line-through;\n  text-decoration-thickness: 0.091em;\n  text-decoration-color: color-mix(in oklab, currentColor 70%, transparent);\n}\nse-blogs table {\n  margin-block-end: var(--size-5);\n}\nse-blogs blockquote {\n  padding: var(--size-2);\n  padding-inline-start: var(--size-3);\n  border-start-end-radius: var(--size-2);\n  border-end-end-radius: var(--size-2);\n  margin-inline: var(--size-4);\n  background-color: var(--surface-2);\n}\nse-blogs blockquote p {\n  padding-block: 0;\n  margin-block: 0;\n}\nse-blogs blockquote:has(> span.icon) {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  column-gap: var(--size-3);\n}\nse-blogs blockquote:has(> span.icon) > :not(span.icon) {\n  grid-column: 2;\n}\nse-blogs blockquote:has(> span.icon) > span.icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nse-blogs blockquote:has(> span.icon) > span.icon svg {\n  inline-size: 44px;\n  block-size: 44px;\n}\nse-blogs a {\n  cursor: pointer;\n  font-size: inherit;\n  font-weight: 700;\n  line-height: inherit;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\nse-blogs p {\n  line-height: 1.5;\n  margin-block: var(--size-2);\n}\nse-blogs :is(p, li):has(> code) {\n  line-height: 1.7;\n}\nse-blogs :is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) {\n  color: var(--text-color-1);\n}\nse-blogs :is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + *:not(se-blogs :is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6)) {\n  margin-block-start: 0;\n}\nse-blogs :where(h1, .h1) {\n  font-size: var(--font-size-h1, var(--font-size-7));\n  letter-spacing: -0.02em;\n  line-height: 1.1111111;\n  margin-block: 0 0.8888889em;\n}\nse-blogs h2,\nse-blogs .h2 {\n  font-size: var(--font-size-h2, var(--font-size-5, 2rem));\n  letter-spacing: -0.02em;\n  line-height: 1.3333333;\n  margin-block: 1em 1em;\n}\nse-blogs h3,\nse-blogs .h3 {\n  font-size: var(--font-size-h3, var(--font-size-4, 1.5rem));\n  letter-spacing: -0.01em;\n  line-height: 1.6;\n  margin-block: 1.6em 0.6em;\n}\nse-blogs h4,\nse-blogs .h4 {\n  font-size: var(--font-size-h4, var(--font-size-3, 1.25rem));\n  letter-spacing: -0.01em;\n  line-height: 1.5;\n  margin-block: 1.5em 0.5em;\n}\nse-blogs h5,\nse-blogs .h5 {\n  font-size: var(--font-size-h5, var(--font-size-2, 1.1rem));\n  line-height: 1;\n  margin-block: 0 var(--size-1);\n}\nse-blogs h6,\nse-blogs .h6 {\n  font-size: var(--font-size-h6, var(--font-size-1, 1rem));\n  line-height: 1;\n  margin-block: 0 var(--size-1);\n}\nse-blogs :where(.overline, hgroup > :where(p, .p):first-of-type:first-child) {\n  color: light-dark(oklch(from var(--text-color-2) calc(l * 1.25) c h), oklch(from var(--text-color-2) calc(l * 0.75) c h));\n  font-size: var(--font-size-xs);\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  line-height: 2.5;\n  text-transform: uppercase;\n}\nse-blogs hgroup > p {\n  margin: 0;\n}\nse-blogs hgroup > :where(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) {\n  margin-block-end: 0.4em;\n}\nse-blogs hgroup + * {\n  margin-block-start: 3em;\n}\nse-blogs hgroup > :where(p, .p):last-of-type:last-child:not(:first-child) {\n  color: oklch(from currentColor l c h / 75%);\n  font-size: var(--font-size-lg);\n  line-height: 1.6;\n}\nse-blogs ul:not([class]) {\n  list-style-type: disc;\n}\nse-blogs ol:not([class]) {\n  list-style-type: decimal;\n}\nse-blogs :where(ul, ol):not([class]) {\n  display: grid;\n  font-size: inherit;\n  gap: 0.5em;\n  line-height: inherit;\n  margin-block-start: 1.25em;\n  margin-block-end: 1.25em;\n  padding-inline-start: 1.625em;\n}\nse-blogs :where(ul, ol):not([class]) li {\n  padding-inline-start: 0.375em;\n}\nse-blogs :where(ul ul),\nse-blogs :where(ul ol),\nse-blogs :where(ol ul),\nse-blogs :where(ol ol) {\n  margin-block-start: 0.75em;\n  margin-block-end: 0.75em;\n}\nse-blogs :where(dl) {\n  font-size: inherit;\n  line-height: inherit;\n  margin-block-start: 1.25em;\n  margin-block-end: 1.25em;\n}\nse-blogs :where(dl) dt {\n  margin-block-start: 1.25em;\n}\nse-blogs :where(dl) dd {\n  margin-block-start: 0.5em;\n  padding-inline-start: 1.625em;\n}\nse-blogs figure {\n  margin-block: 2em;\n}\nse-blogs figure > * {\n  margin-block: 0;\n}\nse-blogs figure figcaption {\n  font-size: 0.875em;\n  line-height: 1.4285714;\n  margin-block-start: 0.8571429em;\n}\nse-blogs > :first-child {\n  margin-block-start: 0;\n}\nse-blogs > :last-child {\n  margin-block-end: 0;\n}\nse-blogs hr + * {\n  margin-block-start: 0;\n}\nse-blogs ::details-content {\n  transition: height 0.75s ease, content-visibility 0.1s ease allow-discrete;\n  height: 0;\n  overflow: clip;\n}\nse-blogs [open]::details-content {\n  height: auto;\n}\n@media (prefers-color-scheme: dark) {\n  se-blogs .hljs {\n    background: #1e1e1e;\n    color: #dcdcdc;\n  }\n  se-blogs .hljs-keyword,\n  se-blogs .hljs-literal,\n  se-blogs .hljs-name,\n  se-blogs .hljs-symbol {\n    color: #569cd6;\n  }\n  se-blogs .hljs-link {\n    color: #569cd6;\n    text-decoration: underline;\n  }\n  se-blogs .hljs-built_in,\n  se-blogs .hljs-type {\n    color: #4ec9b0;\n  }\n  se-blogs .hljs-class,\n  se-blogs .hljs-number {\n    color: #b8d7a3;\n  }\n  se-blogs .hljs-meta .hljs-string,\n  se-blogs .hljs-string {\n    color: #d69d85;\n  }\n  se-blogs .hljs-regexp,\n  se-blogs .hljs-template-tag {\n    color: #9a5334;\n  }\n  se-blogs .hljs-formula,\n  se-blogs .hljs-function,\n  se-blogs .hljs-params,\n  se-blogs .hljs-subst,\n  se-blogs .hljs-title {\n    color: #dcdcdc;\n  }\n  se-blogs .hljs-comment,\n  se-blogs .hljs-quote {\n    color: #57a64a;\n    font-style: italic;\n  }\n  se-blogs .hljs-doctag {\n    color: #79a56a;\n  }\n  se-blogs .hljs-meta,\n  se-blogs .hljs-meta .hljs-keyword,\n  se-blogs .hljs-tag {\n    color: #9b9b9b;\n  }\n  se-blogs .hljs-template-variable,\n  se-blogs .hljs-variable {\n    color: #bd63c5;\n  }\n  se-blogs .hljs-attr,\n  se-blogs .hljs-attribute {\n    color: #9cdcfe;\n  }\n  se-blogs .hljs-section {\n    color: gold;\n  }\n  se-blogs .hljs-emphasis {\n    font-style: italic;\n  }\n  se-blogs .hljs-strong {\n    font-weight: 700;\n  }\n  se-blogs .hljs-bullet,\n  se-blogs .hljs-selector-attr,\n  se-blogs .hljs-selector-class,\n  se-blogs .hljs-selector-id,\n  se-blogs .hljs-selector-pseudo,\n  se-blogs .hljs-selector-tag {\n    color: #d7ba7d;\n  }\n  se-blogs .hljs-addition {\n    background-color: #144212;\n    display: inline-block;\n    width: 100%;\n  }\n  se-blogs .hljs-deletion {\n    background-color: #600;\n    display: inline-block;\n    width: 100%;\n  }\n}\n@media (prefers-color-scheme: light) {\n  se-blogs .hljs {\n    background: #fff;\n    color: #000;\n  }\n  se-blogs .hljs-comment,\n  se-blogs .hljs-quote,\n  se-blogs .hljs-variable {\n    color: green;\n  }\n  se-blogs .hljs-built_in,\n  se-blogs .hljs-keyword,\n  se-blogs .hljs-name,\n  se-blogs .hljs-selector-tag,\n  se-blogs .hljs-tag {\n    color: #00f;\n  }\n  se-blogs .hljs-addition,\n  se-blogs .hljs-attribute,\n  se-blogs .hljs-literal,\n  se-blogs .hljs-section,\n  se-blogs .hljs-string,\n  se-blogs .hljs-template-tag,\n  se-blogs .hljs-template-variable,\n  se-blogs .hljs-title,\n  se-blogs .hljs-type {\n    color: #a31515;\n  }\n  se-blogs .hljs-deletion,\n  se-blogs .hljs-meta,\n  se-blogs .hljs-selector-attr,\n  se-blogs .hljs-selector-pseudo {\n    color: #0b6e87;\n  }\n  se-blogs .hljs-doctag {\n    color: #616161;\n  }\n  se-blogs .hljs-attr {\n    color: #a31515;\n  }\n  se-blogs .hljs-bullet,\n  se-blogs .hljs-link,\n  se-blogs .hljs-symbol {\n    color: #0078d4;\n  }\n  se-blogs .hljs-emphasis {\n    font-style: italic;\n  }\n  se-blogs .hljs-strong {\n    font-weight: 700;\n  }\n}\nse-blogs pre code.hljs {\n  display: block;\n  padding: 1em;\n}\nse-blogs code.hljs {\n  padding: 3px 5px;\n}\n'] }]
    }], null, { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false }] }] });
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogsComponent, { className: "BlogsComponent", filePath: "src/app/blogs/blogs.component.ts", lineNumber: 50 });
})();
export {
  BlogsComponent
};
