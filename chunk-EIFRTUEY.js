import {
  Deferred
} from "./chunk-IPCX26GH.js";
import {
  HttpClient,
  httpResource
} from "./chunk-UN3GGFEO.js";
import {
  Injectable,
  catchError,
  computed,
  effect,
  firstValueFrom,
  inject,
  map,
  of,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-4YMCON7N.js";

// src/app/blogs/bloglist.ts
var Bloglist = class _Bloglist {
  constructor() {
    this.http = inject(HttpClient);
    this.#blogListResource = httpResource(
      () => "/assets/articles/articleList.json",
      ...ngDevMode ? [{ debugName: "#blogListResource" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bloglist = new Deferred();
    this._ = effect(
      () => {
        const blogList = this.#blogListResource.value();
        if (blogList) {
          this.bloglist.resolve(blogList);
        }
      },
      ...ngDevMode ? [{ debugName: "_" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.getBlogs = computed(
      () => {
        return this.#blogListResource.value() || [];
      },
      ...ngDevMode ? [{ debugName: "getBlogs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#list = firstValueFrom(this.http.get("/assets/articles/articleList.json").pipe(
      // in case the file is missing or malformed, we don't want to break the app
      // so we catch errors and return an empty list instead
      catchError(() => of([])),
      map((blogs) => {
        const list = [];
        for (const blog of blogs) {
          list.push({ id: blog.id });
          if (blog.published) {
            list.push({ id: blog.name });
          }
        }
        return list;
      })
    ));
    this.idList = () => this.#list;
  }
  #blogListResource;
  getBlogById(id) {
    if (!id) {
      return void 0;
    }
    const list = this.#blogListResource.value() || [];
    return list.find((b) => b.id === id || b.published && b.name === id);
  }
  #list;
  static {
    this.\u0275fac = function Bloglist_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Bloglist)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Bloglist, factory: _Bloglist.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Bloglist, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  Bloglist
};
