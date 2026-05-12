import {
  httpResource
} from "./chunk-NMBS7RAC.js";
import {
  isPlatformBrowser
} from "./chunk-PESRSGYJ.js";
import {
  Injectable,
  PLATFORM_ID,
  computed,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-LHOZ36SL.js";

// src/app/grid-play/logged-in-user.service.ts
var LoggedIn = class _LoggedIn {
  constructor() {
    this.#isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this.#userRs = httpResource(
      () => this.#isBrowser ? {
        url: "https://auth.eliasweb.nl/api/state",
        withCredentials: true
      } : void 0,
      ...ngDevMode ? [{ debugName: "#userRs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user = computed(
      () => {
        if (!this.#isBrowser)
          return void 0;
        if (!this.#userRs.hasValue())
          return void 0;
        const userName = this.#userRs.value()?.data?.username || "";
        return userName ? userName : void 0;
      },
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#userDetailsRs = httpResource(
      () => this.user() ? { url: "https://notify.eliasweb.nl/me", withCredentials: true } : void 0,
      ...ngDevMode ? [{ debugName: "#userDetailsRs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ready = computed(
      () => {
        if (!this.#isBrowser)
          return true;
        return !this.#userRs.isLoading();
      },
      ...ngDevMode ? [{ debugName: "ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.userDetails = computed(
      () => this.#userDetailsRs.hasValue() ? this.#userDetailsRs.value() : void 0,
      ...ngDevMode ? [{ debugName: "userDetails" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  #isBrowser;
  #userRs;
  #userDetailsRs;
  /**
   * Refreshes the authentication session by triggering a request to the auth server.
   * This updates the JWT cookie with a fresh session.
   *
   * @returns A promise that resolves to `true` if the session was successfully refreshed,
   *          or `false` if the refresh failed or if not running in a browser environment.
   */
  async refreshSession() {
    if (!this.#isBrowser)
      return false;
    const res = await fetch("https://auth.eliasweb.nl/api/authz/ext-authz", {
      method: "get",
      credentials: "include"
    });
    if (!res.ok) {
      return false;
    }
    return true;
  }
  static {
    this.\u0275fac = function LoggedIn_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoggedIn)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoggedIn, factory: _LoggedIn.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoggedIn, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  LoggedIn
};
