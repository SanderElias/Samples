// src/utils/signals/deferred.ts
var Deferred = class {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
};

export {
  Deferred
};
