import {
  Deferred
} from "./chunk-V5IPUR26.js";
import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-T5ZKQ47R.js";

// src/app/crud-stuff/notify-dialog/notify-dialog.service.ts
var NotifyDialogService = class _NotifyDialogService {
  constructor() {
    this.shown = signal(
      false,
      ...ngDevMode ? [{ debugName: "shown" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.message = signal(
      "",
      ...ngDevMode ? [{ debugName: "message" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "template" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.title = signal(
      "Sorry, something went wrong",
      ...ngDevMode ? [{ debugName: "title" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.type = signal(
      "error",
      ...ngDevMode ? [{ debugName: "type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.dismissButtonText = signal(
      "dismiss",
      ...ngDevMode ? [{ debugName: "dismissButtonText" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active = new Deferred();
    this.showTemplate = (template) => {
      this.template.set(template);
      this.shown.set(true);
    };
    this.show = ({ message = "", title = this.title(), type = this.type(), dismissButtonText = this.dismissButtonText() }) => {
      this.message.set(message);
      title && this.title.set(title);
      this.type.set(type);
      this.dismissButtonText.set(dismissButtonText);
      this.shown.set(true);
      this.active = new Deferred();
      return this.active.promise;
    };
    this.close = () => {
      this.shown.set(false);
      this.template.set(void 0);
      this.message.set("");
      this.type.set("error");
      this.title.set("Sorry, something went wrong");
      this.dismissButtonText.set("dismiss");
      this.active.resolve();
    };
    this.isShown = () => {
      return this.shown();
    };
  }
  static {
    this.\u0275fac = function NotifyDialogService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotifyDialogService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotifyDialogService, factory: _NotifyDialogService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotifyDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  NotifyDialogService
};
