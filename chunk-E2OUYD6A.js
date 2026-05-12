import {
  BehaviorSubject,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-LHOZ36SL.js";

// src/app/rvt/sampledata.service.ts
var SampledataService = class _SampledataService {
  constructor() {
    this.#data$ = new BehaviorSubject({
      name: "Sander",
      favNumber: 30,
      dob: /* @__PURE__ */ new Date("1990-01-01"),
      email: "sander@noyb.eu",
      admin: true,
      level: 4
    });
    this.data$ = this.#data$.pipe(map((data) => structuredClone(data)));
  }
  #data$;
  save(data) {
    this.#data$.next(data);
  }
  static {
    this.\u0275fac = function SampledataService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SampledataService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SampledataService, factory: _SampledataService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SampledataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  SampledataService
};
