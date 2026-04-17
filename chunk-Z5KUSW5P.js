import {
  Subject
} from "./chunk-5EIP4NRL.js";

// dist/se-ng/observable-hooks/fesm2022/se-ng-observable-hooks.mjs
var _acc = /* @__PURE__ */ Symbol("_acc");
var _aci = /* @__PURE__ */ Symbol("_aci");
var _oi = /* @__PURE__ */ Symbol("_oi");
var _od = /* @__PURE__ */ Symbol("_od");
var seOnDestroy = (base = class {
}) => {
  var _a;
  return class extends base {
    constructor() {
      super(...arguments);
      this[_a] = new Subject();
      this.seOnDestroy$ = this[_od].asObservable();
    }
    static {
      _a = _od;
    }
    ngOnDestroy() {
      super["ngOnDestroy"] && super["ngOnDestroy"]();
      this[_od].next();
      this[_od].complete();
    }
  };
};
var seAfterContentChecked = (base = class {
}) => {
  var _a;
  return class extends base {
    constructor() {
      super(...arguments);
      this[_a] = new Subject();
      this.seAfterContentChecked$ = this[_acc].asObservable();
    }
    static {
      _a = _acc;
    }
    ngAfterContentChecked() {
      this[_acc].next();
      super["ngAfterContentChecked"] && super["ngAfterContentChecked"]();
    }
    ngOnDestroy() {
      this[_acc].complete();
      super["ngOnDestroy"] && super["ngOnDestroy"]();
    }
  };
};
var seAfterContentInit = (base = class {
}) => {
  var _a;
  return class extends base {
    constructor() {
      super(...arguments);
      this[_a] = new Subject();
      this.seAfterContentInit$ = this[_aci].asObservable();
    }
    static {
      _a = _aci;
    }
    ngAfterContentInit() {
      Promise.resolve().then(() => {
        this[_aci].next();
        this[_aci].complete();
      });
      super["ngAfterContentInit"] && super["ngAfterContentInit"]();
    }
  };
};
var seOnInit = (base = class {
}) => {
  var _a;
  return class extends base {
    constructor() {
      super(...arguments);
      this[_a] = new Subject();
      this.seOnInit$ = this[_oi].asObservable();
    }
    static {
      _a = _oi;
    }
    ngOnInit() {
      Promise.resolve().then(() => {
        this[_oi].next();
        this[_oi].complete();
      });
      super["ngOnInit"] && super["ngOnInit"]();
    }
  };
};

export {
  seOnDestroy,
  seAfterContentChecked,
  seAfterContentInit,
  seOnInit
};
