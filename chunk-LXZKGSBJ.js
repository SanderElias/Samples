import {
  couchEventLister,
  createIndexes,
  earlyReadToUndefined,
  goAddData
} from "./chunk-UUZ4MBE7.js";
import {
  HttpCache,
  addCachingContext
} from "./chunk-GO6WCT67.js";
import {
  NotifyDialogService
} from "./chunk-U7E63UVH.js";
import {
  LoggedIn
} from "./chunk-3GOW2HFT.js";
import {
  HttpActionClient,
  debouncedComputed,
  deepDiff,
  deepEqual,
  mergeDeep
} from "./chunk-VOWQP44C.js";
import {
  HttpClient,
  httpResource
} from "./chunk-NMBS7RAC.js";
import {
  DestroyRef,
  Injectable,
  computed,
  effect,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-LHOZ36SL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/crud-stuff/relations.service.ts
var httpCachedOptions = __spreadValues({}, addCachingContext({
  credentials: "include",
  mode: "cors"
}));
var RelationsService = class _RelationsService {
  // HttpActionClient is a wrapper around HttpClient that allows to use promises over observables.
  // also, it exposes a busy indicator I'm not( (yet) using in this sample.)
  #http;
  #httpo;
  #notifyDialog;
  #cache;
  #des;
  #filter;
  //debounce and wrap it inside an couchDB regex.
  #refresh;
  // guard to avoid repeatedly attempting database creation when multiple
  // errors fire in quick succession (prevents repeated PUT /<db>/ calls)
  #dbCreateAttempted;
  #listRes;
  #list;
  constructor() {
    this.user = inject(LoggedIn).user;
    this.base = computed(
      () => `https://${this.user() === void 0 ? "demodb" : "couchdb"}.eliasweb.nl`,
      ...ngDevMode ? [{ debugName: "base" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.baseUrl = computed(
      () => `${this.base()}/relations`,
      ...ngDevMode ? [{ debugName: "baseUrl" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.idUrl = (id) => `${this.baseUrl()}/${id}`;
    this.#http = inject(HttpActionClient);
    this.#httpo = inject(HttpClient);
    this.#notifyDialog = inject(NotifyDialogService);
    this.#cache = inject(HttpCache);
    this.#des = inject(DestroyRef);
    this.filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#filter = debouncedComputed(() => `(?i)${this.filter()}`, { delay: 250 });
    this.#refresh = signal(
      0,
      ...ngDevMode ? [{ debugName: "#refresh" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#dbCreateAttempted = false;
    this.sort = signal(
      "name",
      ...ngDevMode ? [{ debugName: "sort" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.order = signal(
      "asc",
      ...ngDevMode ? [{ debugName: "order" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#listRes = httpResource(() => ({
      url: `${this.baseUrl()}/_find?v=${this.#refresh()}`,
      method: "POST",
      body: {
        selector: {
          $or: [
            { name: { $regex: this.#filter() } },
            { username: { $regex: this.#filter() } },
            { email: { $regex: this.#filter() } }
          ]
        },
        fields: ["id", "_rev"],
        sort: [{ [this.sort()]: this.order() }],
        limit: 15
      },
      credentials: "include",
      // include credentials to support CouchDB authentication cookies.
      mode: "cors"
    }), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "#listRes" } : (
      /* istanbul ignore next */
      {}
    )), {
      defaultValue: [],
      // unwrap the CouchDB response to get the list of ids.
      parse: (response) => (response?.docs ?? []).map((i) => [i.id, i._rev])
    }));
    this.#list = this.#listRes.value;
    this.list = this.#list.asReadonly();
    this.listIsLoading = this.#listRes.isLoading;
    this._DbError = effect(
      async () => {
        const err = this.#listRes.error();
        if (!err) {
          return;
        }
        const reason = err.error?.reason;
        if (err?.status === 412 || err?.error?.error === "file_exists" || typeof reason === "string" && reason.toLowerCase().includes("file exists")) {
          console.info("CouchDB database already exists, ignoring create.", err);
          return;
        }
        if (!reason) {
          console.error("Unknown error", err);
          this.#notifyDialog.show({
            title: "CouchDB not found?",
            message: `This is a demo app, and it expects CouchDB to be running locally. Please check the console for more information.`
          });
          return;
        }
        if (reason.startsWith("No index exists")) {
          console.error("Index not found, creating it");
          try {
            await createIndexes().catch((e) => console.error("Error creating index", e));
            this.#listRes.reload();
          } catch (e) {
            console.error("Error creating index", e);
          }
        }
        if (reason.startsWith("Database does not exist")) {
          if (this.#dbCreateAttempted) {
            console.info("Database create already attempted, skipping.");
            return;
          }
          this.#dbCreateAttempted = true;
          console.error("Database not found, creating it");
          try {
            await untracked(async () => await this.#http.put(this.baseUrl(), {}, httpCachedOptions));
            await goAddData();
            this.#listRes.reload();
          } catch (e) {
            console.error("Error creating database", e);
          }
        }
        console.error(err);
        this.#notifyDialog.show({
          title: "CouchDB error?",
          message: `There is an unknown error with the database. Please check the console for more information.`
        });
      },
      ...ngDevMode ? [{ debugName: "_DbError" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.create = async (data) => {
      const url = this.idUrl(data.id);
      try {
        const response = await this.#http.put(url, data, httpCachedOptions);
        console.dir(response);
        this.#list.update((oldList) => [[data.id, ""], ...oldList].splice(0, 50));
        return true;
      } catch (e) {
        const { error: { error: err, reason } } = e ?? {};
        if (err === "forbidden") {
          await this.#notifyDialog.show({
            title: "You are not allowed to add a user",
            message: "This is likely because you are on the demo account, which has no write access"
          });
          return false;
        }
        console.error("Error creating user", e);
        return false;
      }
    };
    this.read = (ids, options = httpCachedOptions) => {
      const id = computed(
        () => earlyReadToUndefined(ids) ?? "",
        ...ngDevMode ? [{ debugName: "id" }] : (
          /* istanbul ignore next */
          []
        )
      );
      const httpOptions = computed(
        () => {
          if (!id())
            return void 0;
          return __spreadValues({
            url: this.idUrl(id())
          }, options);
        },
        ...ngDevMode ? [{ debugName: "httpOptions" }] : (
          /* istanbul ignore next */
          []
        )
      );
      return httpResource(httpOptions, {
        defaultValue: { id: id() }
      });
    };
    this.update = async (data) => {
      const id = data.id;
      const url = this.idUrl(id);
      const oldData = await this.#http.get(url, httpCachedOptions);
      if (deepEqual(oldData, data)) {
        return { result: "noChange" };
      }
      try {
        const { rev } = await this.#http.put(url, data, httpCachedOptions);
        if (oldData[this.sort()] !== data[this.sort()]) {
          console.log(`sort field changed from ${oldData[this.sort()]} to ${data[this.sort()]}`);
          this.#refresh.update((old) => old + 1);
        } else {
          this.#list.update((oldList) => oldList.reduce((acc, item) => [
            ...acc,
            [item[0], item[0] === id ? rev : item[1]]
          ], []));
        }
        return { result: "ok", rev };
      } catch (e) {
        const { error: { error: err, reason } } = e ?? {};
        if (err === "forbidden") {
          await this.#notifyDialog.show({
            title: "You are not allowed to update this data",
            message: "This is likely because you are on the demo account, which has no write access"
          });
          return { result: "error", error: "forbidden" };
        }
        if (reason.startsWith("Document update conflict")) {
          try {
            this.#cache.purge(url);
            const myDiff = deepDiff(oldData, data);
            const remoteData = await this.#http.get(url, httpCachedOptions);
            const remoteDiff = deepDiff(oldData, remoteData);
            const merged = mergeDeep(remoteData, myDiff);
            this.#notifyDialog.show({
              title: "Sorry, we detected a conflict",
              message: "we have merged in the upstream change, please verify your edit, and submit your changes again"
            });
            return { result: "conflict", user: merged };
          } catch {
            this.#notifyDialog.show({
              title: "Sorry, but an unrecoverable error happened",
              message: "please reload your app"
            });
          }
        }
        return { result: "error", error: e };
      }
    };
    this.delete = async (user) => {
      const id = user.id;
      const url = this.idUrl(id) + `?rev=${user._rev}`;
      try {
        await this.#http.delete(url, httpCachedOptions);
      } catch (e) {
        const { error: { error: err, reason } } = e ?? {};
        if (err === "forbidden") {
          this.#notifyDialog.show({
            title: "You are not allowed to delete this data",
            message: "This is likely because you are on the demo account, which has no write access"
          });
          return false;
        }
        if (err === "not_found" && reason === "deleted") {
          console.log("already deleted, ignore this log");
        } else {
          this.#cache.purge(url);
          this.#notifyDialog.show({
            title: "The data was updated",
            message: "There was an update on the data you tried to delete. I have loaded the update into the view. Review, and try to delete again if still needed."
          });
          const { _rev } = await this.#http.get(url, httpCachedOptions);
          this.#list.update((oldList) => oldList.map((i) => i[0] === id ? [i[0], _rev] : i));
          return false;
        }
      }
      this.#list.update((oldList) => oldList.filter((i) => i[0] !== id));
      return true;
    };
    this.reFetch = async (ids) => {
      const url = this.idUrl(ids);
      return firstValueFrom(this.#httpo.get(url, httpCachedOptions));
    };
    this.info = async () => {
      await goAddData();
      const url = `${this.baseUrl}`;
      return this.#http.get(url, httpCachedOptions);
    };
    setTimeout(() => {
      const s = couchEventLister(this.base(), "relations").subscribe((event) => {
        this.#cache.purge(this.idUrl(event.id));
        if (event.deleted) {
          this.#list.update((oldList) => oldList.filter((i) => i[0] !== event.id));
        } else {
          const rev = event.changes[0]?.rev ?? "";
          this.#list.update((oldList) => oldList.map((i) => i[0] === event.id ? [i[0], rev] : i));
        }
      });
      this.#des.onDestroy(() => {
        s.unsubscribe();
      });
    }, 2e3);
  }
  static {
    this.\u0275fac = function RelationsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RelationsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RelationsService, factory: _RelationsService.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RelationsService, [{
    type: Injectable
  }], () => [], null);
})();

export {
  RelationsService
};
