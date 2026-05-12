import {
  createUniqueId
} from "./chunk-XUVHIZKL.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate2
} from "./chunk-LHOZ36SL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/in-mem-sample/in-mem-utils.ts
var createId = () => createUniqueId();
var isDbRecord = (obj) => {
  return obj && typeof obj === "object" && "id" in obj && Array.isArray(obj.table);
};
var assertRecord = (obj) => {
  if (isDbRecord(obj)) {
    return obj;
  }
  throw new Error("Object is not a DbRecord");
};

// src/app/in-mem-sample/in-mem-db.service.ts
var InMemDb = class _InMemDb {
  #db = signal(/* @__PURE__ */ new Map(), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "#db" } : (
    /* istanbul ignore next */
    {}
  )), { equal: () => false }));
  #indexes = /* @__PURE__ */ new Map();
  create(record) {
    const id = record.id ?? createId();
    const newRecord = assertRecord(__spreadProps(__spreadValues({}, record), { id }));
    this.#db.update((db) => db.set(id, signal(newRecord)));
    this.#indexes.forEach((indexSignal) => {
      const { table, sortFn, index } = indexSignal();
      if (newRecord.table.includes(table)) {
        const key = sortFn(newRecord);
        index.set(id, key);
      }
      indexSignal.set({ table, sortFn, index });
    });
  }
  read(id) {
    if (!this.#db().has(id)) {
      throw new Error(`Record with id ${id} not found`);
    }
    return this.#db().get(id)?.asReadonly();
  }
  update(updatedRecord) {
    updatedRecord = assertRecord(updatedRecord);
    const db = this.#db();
    const recordSignal = db.get(updatedRecord.id);
    if (!recordSignal) {
      throw new Error(`Record with id ${updatedRecord.id} not found`);
    }
    const newContent = __spreadValues(__spreadValues({}, recordSignal()), updatedRecord);
    recordSignal.set(newContent);
    this.#indexes.forEach((indexSignal) => {
      const { table, sortFn, index } = indexSignal();
      if (newContent.table.includes(table)) {
        const key = sortFn(newContent);
        index.set(updatedRecord.id, key);
      } else {
        index.delete(updatedRecord.id);
      }
      indexSignal.set({ table, sortFn, index });
    });
  }
  delete(id) {
    const db = this.#db();
    if (!db.has(id)) {
      throw new Error(`Record with id ${id} not found`);
    }
    const rec = db.get(id)();
    this.#indexes.forEach((indexSignal) => {
      const { table, index } = indexSignal();
      if (rec.table.includes(table)) {
        index.delete(id);
      }
      indexSignal.set({ table, sortFn: indexSignal().sortFn, index });
    });
    db.delete(id);
  }
  listTable(tableName, sortProp = "id") {
    return signal(Array.from(this.#db().values()).filter((record) => record().table.includes(tableName)).sort((a, b) => a()[sortProp] > b()[sortProp] ? 1 : -1).map((record) => record().id));
  }
  findByProp(tableName, predicate) {
    const db = this.#db();
    for (const record of db.values()) {
      if (record().table.includes(tableName) && predicate(record())) {
        return record.asReadonly();
      }
    }
    return signal(void 0);
  }
  freeTextSearch(predicate) {
  }
  createIndex(tableName, sortFn) {
    const mapId = `${tableName}-${sortFn.toString()}`;
    if (!this.#indexes.has(mapId)) {
      const indexMap = /* @__PURE__ */ new Map();
      this.#db().forEach((record) => {
        if (record().table.includes(tableName)) {
          const key = sortFn(record());
          indexMap.set(record().id, key);
        }
      });
      this.#indexes.set(mapId, signal({ table: tableName, sortFn, index: indexMap }));
    }
    const indexSignal = this.#indexes.get(mapId);
    return computed(() => Array.from(indexSignal().index.entries()).sort((a, b) => a[1] > b[1] ? 1 : -1).map((entry) => entry[0]));
  }
  removeIndex(tableName, sort) {
    this.#indexes.delete(`${tableName}-${sort.toString()}`);
  }
  static {
    this.\u0275fac = function InMemDb_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InMemDb)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InMemDb, factory: _InMemDb.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InMemDb, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/in-mem-sample/in-mem-sample.component.ts
function InMemSampleComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const adminId_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.dbs.read(adminId_r1)().name, " (ID: ", adminId_r1, ")");
  }
}
function InMemSampleComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const userId_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.dbs.read(userId_r3)().name, " (ID: ", userId_r3, ")");
  }
}
var InMemSampleComponent = class _InMemSampleComponent {
  constructor() {
    this.dbs = inject(InMemDb);
    this.users = this.dbs.createIndex("users", (record) => record.name);
    this.admins = this.dbs.createIndex("admins", (record) => record.name);
    this.dbs.create({ table: ["users"], name: "Alice", age: 30 });
    this.dbs.create({ table: ["users", "admins"], name: "Bob", age: 25 });
    this.dbs.create({ table: ["users"], name: "Charlie", age: 35 });
    this.dbs.create({ table: ["admins"], name: "Dana", age: 28 });
    setTimeout(() => {
      this.dbs.create({ table: ["users", "admins"], name: "Eve", age: 22 });
    }, 2e3);
    setTimeout(() => {
      const bob = this.dbs.findByProp("users", (r) => r.name === "Bob");
      if (bob()) {
        this.dbs.update(__spreadProps(__spreadValues({}, bob()), { name: "Robert", age: 26 }));
      }
    }, 4e3);
  }
  static {
    this.\u0275fac = function InMemSampleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InMemSampleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InMemSampleComponent, selectors: [["se-in-mem-sample"]], decls: 12, vars: 0, template: function InMemSampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "In-Memory DB Sample");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "h2");
        \u0275\u0275text(3, "Users");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "ul");
        \u0275\u0275repeaterCreate(5, InMemSampleComponent_For_6_Template, 2, 2, "li", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(7, "h2");
        \u0275\u0275text(8, "Admins");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(9, "ul");
        \u0275\u0275repeaterCreate(10, InMemSampleComponent_For_11_Template, 2, 2, "li", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.admins());
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.users());
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InMemSampleComponent, [{
    type: Component,
    args: [{ selector: "se-in-mem-sample", imports: [], template: `
    <h1>In-Memory DB Sample</h1>
    <h2>Users</h2>
    <ul>
      @for (adminId of admins(); track adminId) {
        <li>{{ dbs.read(adminId)().name }} (ID: {{ adminId }})</li>
      }
    </ul>
    <h2>Admins</h2>
    <ul>
      @for (userId of users(); track userId) {
        <li>{{ dbs.read(userId)().name }} (ID: {{ userId }})</li>
      }
    </ul>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/in-mem-sample/in-mem-sample.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InMemSampleComponent, { className: "InMemSampleComponent", filePath: "src/app/in-mem-sample/in-mem-sample.component.ts", lineNumber: 26 });
})();
export {
  InMemSampleComponent
};
