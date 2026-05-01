import {
  Deferred
} from "./chunk-V5IPUR26.js";
import {
  deepEqual
} from "./chunk-5LQK5NDQ.js";
import "./chunk-KVEFCSSA.js";
import "./chunk-7RJGAWPH.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Injectable,
  Input,
  Output,
  Pipe,
  ReplaySubject,
  ViewChild,
  computed,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-T5ZKQ47R.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/indexdb/indexed-db-helpers.ts
var allDbUpgrades = /* @__PURE__ */ new Map();
var getAllFromStore = async function* (dbName, storeName2) {
  const db = await openDb(dbName);
  var tx = db.transaction(storeName2);
  var store = tx.objectStore(storeName2);
  let cursorDef = new Deferred();
  store.openCursor().addEventListener("success", function(event) {
    cursorDef.resolve(event.target?.result);
  });
  while (true) {
    const cursor = await cursorDef.promise;
    if (!cursor) {
      break;
    }
    yield await { key: cursor.primaryKey, value: cursor.value };
    cursorDef = new Deferred();
    cursor.continue();
  }
  tx.onerror = function(event) {
    console.error("error", event);
  };
  tx.oncomplete = function(ev) {
    db.close();
  };
};
var saveToIndexedDb = async (dbName, storeName2, event) => new Promise(async (resolve, reject) => {
  try {
    const db = await openDb(dbName);
    if (!db.objectStoreNames.contains(storeName2)) {
      throw new Error(`Object store ${storeName2} not found in db ${dbName}`);
    }
    const tx = db.transaction(storeName2, "readwrite");
    const store = db.transaction(storeName2, "readwrite").objectStore(storeName2);
    store.put(event);
    tx.oncomplete = function() {
      db.close();
      resolve(true);
    };
    tx.onerror = function(event2) {
      reject(event2);
    };
  } catch (error) {
    reject(error);
  }
});
var openDb = (db) => new Promise((resolve, reject) => {
  const upgrade = (upgrades2) => function(event) {
    var db2 = this.result;
    const start = event.oldVersion === 0 ? 0 : event.oldVersion + 1;
    for (let i = start; i < upgrades2.length; i++) {
      const upgrade2 = upgrades2[i];
      try {
        upgrade2(db2);
      } catch (error) {
        reject(error);
      }
    }
  };
  if (typeof window === "undefined") {
    return reject("IndexedDb not available");
  }
  const idb = window.indexedDB;
  if (!idb) {
    return reject("IndexedDB not available");
  }
  const upgrades = allDbUpgrades.get(db) ?? [];
  if (upgrades.length === 0) {
    return reject(`database ${db} has no initialized upgrades, make sure to first call initializeDb('${db}', /* upgrades */)`);
  }
  const request = idb.open(db, upgrades.length);
  request.addEventListener("error", reject);
  request.addEventListener("upgradeneeded", upgrade(upgrades));
  request.addEventListener("success", () => resolve(request.result));
});
var initializeDb = (dbName, upgrades) => {
  allDbUpgrades.set(dbName, upgrades.map((u) => typeof u === "string" ? (db) => db.createObjectStore(u, { autoIncrement: true }) : u));
};

// src/app/indexdb/event-source.service.ts
var DbName = "EventSourceDb";
var storeName = "events";
var startTime = Date.now();
var EventSourceService = class _EventSourceService {
  #events;
  #put;
  #$ready;
  #buffer;
  /**
   * Persist the event to the database and notify subscribers
   * @param event
   * @returns
   */
  post(event) {
    if (!this.#$ready()) {
      this.#buffer.push(event);
      return;
    }
    while (this.#buffer.length) {
      const ev = this.#buffer.shift();
      if (ev) {
        this.#put(ev);
        this.#events.next(ev);
      }
    }
    this.#put(event);
    this.#events.next(event);
  }
  constructor() {
    this.#events = new ReplaySubject(1);
    this.events$ = this.#events.asObservable();
    this.#put = (data) => saveToIndexedDb(DbName, storeName, data);
    this.#$ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "#$ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#buffer = [];
    initializeDb(DbName, [
      (db) => db.createObjectStore(storeName, { autoIncrement: true })
    ]);
    this.#getInitialEvents();
  }
  async #getInitialEvents() {
    try {
      let rowCount = 0;
      for await (const data of getAllFromStore(DbName, storeName)) {
        rowCount += 1;
        this.#events.next(data.value);
      }
      this.#$ready.set(true);
      console.log(`IndexedDB load time: ${Date.now() - startTime}ms for ${rowCount} events`);
    } catch (error) {
      console.error(error);
    }
  }
  static {
    this.\u0275fac = function EventSourceService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventSourceService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventSourceService, factory: _EventSourceService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventSourceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/indexdb/unique-id-helpers.ts
var datePartLength = Date.now().toString(36).length;
var randomChar = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var createId = (date = Date.now()) => date.toString(36).split("").reverse().map((ch) => `${ch}${randomChar()}`).join("");
var isId = (id) => {
  if (typeof id !== "string") {
    return false;
  }
  if (id.length !== datePartLength * 2) {
    return false;
  }
  const dateString = datePart(id);
  if (dateString.length !== datePartLength || isNaN(datePart2Date(dateString).getTime())) {
    return false;
  }
  return true;
};
var datePart = (id) => id.match(/.{1,2}/g)?.map((p) => p[0]).reverse().join("") ?? "";
var datePart2Date = (datePart2) => new Date(parseInt(datePart2, 36));

// src/app/indexdb/ev-source-db.service.ts
var EvSourceDbService = class _EvSourceDbService {
  constructor() {
    this.#$inMemDb = signal(/* @__PURE__ */ new Map(), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "#$inMemDb" } : (
      /* istanbul ignore next */
      {}
    )), { equal: () => false }));
    this.#$availableTables = signal(/* @__PURE__ */ new Set(), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "#$availableTables" } : (
      /* istanbul ignore next */
      {}
    )), { equal: () => false }));
    this.#$availableTags = signal(/* @__PURE__ */ new Map(), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "#$availableTags" } : (
      /* istanbul ignore next */
      {}
    )), { equal: () => false }));
    this.#$availableTypes = signal(/* @__PURE__ */ new Map(), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "#$availableTypes" } : (
      /* istanbul ignore next */
      {}
    )), { equal: () => false }));
    this.#evs = inject(EventSourceService);
    this.#des = inject(DestroyRef).onDestroy(() => {
      this.#sub.unsubscribe();
    });
    this.$availableTables = computed(
      () => Array.from(this.#$availableTables()),
      ...ngDevMode ? [{ debugName: "$availableTables" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.getTagsForTable = (table) => computed(() => {
      const curSet = this.#$availableTags().get(table);
      return curSet ? Array.from(curSet()) : [];
    });
    this.getTypesForTable = (table) => computed(() => {
      const $typeMap = this.#$availableTypes().get(table)?.();
      if (!$typeMap) {
        throw new Error(`No types for table: ${table}`);
      }
      return $typeMap;
    });
    this.#sub = this.#evs.events$.subscribe((dbEvent) => {
      const db = this.#$inMemDb();
      if (dbEvent.type === "delete") {
        db.delete(dbEvent.payload.id);
        this.#$inMemDb.set(db);
        return;
      }
      if (dbEvent.type === "update") {
        const dbRecord = dbEvent.payload;
        const $original = db.get(dbEvent.payload.id);
        if ($original) {
          $original.set(removeEmptyValues(__spreadValues(__spreadValues({}, $original()), dbRecord)));
        } else {
          db.set(dbEvent.payload.id, signal(removeEmptyValues(dbRecord)));
          this.#$inMemDb.set(db);
        }
      }
      const newRec = db.get(dbEvent.payload.id)();
      this.#updateAvailableTableList(newRec);
      this.#updateTagsForTable(newRec);
      this.#updateTypesForTable(newRec);
    });
    this.create = (row) => {
      const id = row.id || createId();
      if (!isId(id)) {
        throw new Error("id must be a unique identifier");
      }
      if (this.#$inMemDb().has(row.id)) {
        throw new Error(`Duplicate id: ${row.id}`);
      }
      this.#evs.post({ type: "update", payload: __spreadProps(__spreadValues({}, row), { id }) });
    };
    this.read = (id) => computed(() => {
      const row = this.#$inMemDb().get(id);
      if (!row) {
        throw new Error(`No row with id: ${id}`);
      }
      return row.asReadonly();
    });
    this.getData = (id) => {
      const data = this.#$inMemDb().get(id)?.();
      if (!data) {
        throw new Error(`No row with id: ${id}`);
      }
      return __spreadValues({}, data);
    };
    this.update = (row) => {
      const current = this.#$inMemDb().get(row.id)?.();
      if (!current) {
        throw new Error(`No row with id: ${row.id}`);
      }
      const diff = Object.entries(row).reduce((acc, [key, value]) => {
        if (!deepEqual(current[key], value)) {
          acc[key] = value;
        }
        return acc;
      }, { id: row.id });
      if (Object.keys(diff).length === 1 && diff.id !== void 0) {
        return;
      }
      this.#evs.post({ type: "update", payload: diff });
    };
    this.delete = (id) => this.#evs.post({ type: "delete", payload: { id } });
    this.list = (table) => computed(() => Array.from(this.#$inMemDb().values()).filter((row) => row().table === table).map((row) => row.asReadonly()));
    this.#updateTagsForTable = (newRec) => {
      if (newRec.tags) {
        if (!this.#$availableTags().has(newRec.table)) {
          this.#$availableTags.update(mapAdd(newRec.table, signal(/* @__PURE__ */ new Set())));
        }
        const tagsForTable = this.#$availableTags().get(newRec.table);
        newRec.tags.forEach((tag) => {
          if (!tagsForTable().has(tag)) {
            tagsForTable.update(setAdd(tag));
          }
        });
      }
    };
    this.#updateAvailableTableList = (newRec) => {
      if (!this.#$availableTables().has(newRec.table)) {
        this.#$availableTables.update(setAdd(newRec.table));
      }
    };
    this.#updateTypesForTable = (newRec) => {
      const types = this.#$availableTypes();
      if (!types.has(newRec.table)) {
        this.#$availableTypes.update(mapAdd(newRec.table, signal(/* @__PURE__ */ new Map())));
      }
      const $typeSet = types.get(newRec.table);
      Object.entries(newRec).forEach(([key, value]) => {
        if (!$typeSet().has(key)) {
          $typeSet.update(mapAdd(key, typeof value));
        }
      });
    };
  }
  #$inMemDb;
  #$availableTables;
  #$availableTags;
  #$availableTypes;
  #evs;
  #des;
  // listen for events from the event source service, and update the DB accordingly
  #sub;
  /**
   * internal helper, will update the tags for a table when an event is received.
   * this means we don't have to iterate over all records to get the tags for a table.
   */
  #updateTagsForTable;
  /**
   * internal helper, will update the list of available tables when an event is received.
   * this means we don't have to iterate over all records to get the available tables.
   */
  #updateAvailableTableList;
  #updateTypesForTable;
  static {
    this.\u0275fac = function EvSourceDbService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EvSourceDbService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EvSourceDbService, factory: _EvSourceDbService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvSourceDbService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var setAdd = (value) => (set) => {
  set.add(value);
  return set;
};
var mapAdd = (key, value) => (map) => {
  map.set(key, value);
  return map;
};
var removeEmptyValues = (obj) => Object.entries(obj).reduce((acc, [key, value]) => {
  if (!(value === void 0 || value === null || typeof value === "string" && value.trim() === "")) {
    acc[key] = value;
  }
  return acc;
}, {});

// src/app/indexdb/dtos.pipe.ts
var dTos = (date) => {
  const split = {
    year: date.getFullYear(),
    month: (date.getMonth() + 1).toString().padStart(2, "0"),
    day: date.getDate().toString().padStart(2, "0"),
    hours: date.getHours().toString().padStart(2, "0"),
    minutes: date.getMinutes().toString().padStart(2, "0")
  };
  return `${split.year}-${split.month}-${split.day}T${split.hours}:${split.minutes}`;
};
var DTosPipe = class _DTosPipe {
  transform(value) {
    if (value instanceof Date) {
      return dTos(value);
    }
    if (typeof value === "string" && isDateString(value)) {
      return dTos(new Date(value));
    }
    return value;
  }
  static {
    this.\u0275fac = function DTosPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DTosPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "dTos", type: _DTosPipe, pure: false });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DTosPipe, [{
    type: Pipe,
    args: [{
      name: "dTos",
      pure: false
    }]
  }], null, null);
})();
var isDateString = (value) => {
  return isValidDate(new Date(value));
};
var isValidDate = (date) => {
  return date instanceof Date && !isNaN(date.getTime());
};

// src/app/indexdb/edit-record/field-edit/field-edit.component.ts
function FieldEditComponent_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "input", 4);
    \u0275\u0275domListener("input", function FieldEditComponent_Case_0_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.update($event));
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("value", ctx_r1.data() ?? "");
  }
}
function FieldEditComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "input", 5);
    \u0275\u0275domListener("input", function FieldEditComponent_Case_1_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.update($event));
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("value", ctx_r1.data());
  }
}
function FieldEditComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "input", 6);
    \u0275\u0275domListener("input", function FieldEditComponent_Case_2_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.update($event));
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("checked", ctx_r1.data());
  }
}
function FieldEditComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "input", 7);
    \u0275\u0275pipe(1, "dTos");
    \u0275\u0275domListener("input", function FieldEditComponent_Case_3_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.update($event));
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("value", \u0275\u0275pipeBind1(1, 1, ctx_r1.data()));
  }
}
function FieldEditComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No editable data! ", ctx_r1.data());
  }
}
var FieldEditComponent = class _FieldEditComponent {
  constructor() {
    this.evdb = inject(EvSourceDbService);
    this.data = model(
      ...ngDevMode ? [void 0, { debugName: "data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.type = input.required(
      ...ngDevMode ? [{ debugName: "type" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  update(event) {
    const target = event.target;
    let value = target.value;
    if (this.type() === "number") {
      value = target.valueAsNumber;
    } else if (this.type() === "boolean") {
      value = target.checked;
    } else if (this.type() === "date") {
      value = new Date(target.value);
      console.log("date", value, target.value);
    }
    this.data.set(value);
  }
  static {
    this.\u0275fac = function FieldEditComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FieldEditComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FieldEditComponent, selectors: [["se-field-edit"]], inputs: { data: [1, "data"], type: [1, "type"] }, outputs: { data: "dataChange" }, decls: 5, vars: 1, consts: [["type", "text", 3, "value"], ["type", "number", 3, "value"], ["type", "checkbox", 3, "checked"], ["type", "datetime-local", 3, "value"], ["type", "text", 3, "input", "value"], ["type", "number", 3, "input", "value"], ["type", "checkbox", 3, "input", "checked"], ["type", "datetime-local", 3, "input", "value"]], template: function FieldEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, FieldEditComponent_Case_0_Template, 1, 1, "input", 0)(1, FieldEditComponent_Case_1_Template, 1, 1, "input", 1)(2, FieldEditComponent_Case_2_Template, 1, 1, "input", 2)(3, FieldEditComponent_Case_3_Template, 2, 3, "input", 3)(4, FieldEditComponent_Case_4_Template, 2, 1, "span");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.type()) === "string" ? 0 : tmp_0_0 === "number" ? 1 : tmp_0_0 === "boolean" ? 2 : tmp_0_0 === "date" ? 3 : tmp_0_0 === "nonEditable" ? 4 : -1);
      }
    }, dependencies: [DTosPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldEditComponent, [{
    type: Component,
    args: [{ selector: "se-field-edit", imports: [DTosPipe], template: `
    @switch (type()) {
      @case ('string') {
        <input type="text" [value]="data() ?? ''" (input)="update($event)" />
      }
      @case ('number') {
        <input type="number" [value]="data()" (input)="update($event)" />
      }
      @case ('boolean') {
        <input type="checkbox" [checked]="data()" (input)="update($event)" />
      }
      @case ('date') {
        <input
          type="datetime-local"
          [value]="data() | dTos"
          (input)="update($event)"
        />
      }
      @case ('nonEditable') {
        <span>No editable data! {{ data() }}</span>
      }
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/indexdb/edit-record/field-edit/field-edit.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }, { type: Output, args: ["dataChange"] }], type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FieldEditComponent, { className: "FieldEditComponent", filePath: "src/app/indexdb/edit-record/field-edit/field-edit.component.ts", lineNumber: 42 });
})();

// src/app/indexdb/edit-record/edit-record.component.ts
function EditRecordComponent_Conditional_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "se-field-edit", 9);
    \u0275\u0275twoWayListener("dataChange", function EditRecordComponent_Conditional_2_For_9_Template_se_field_edit_dataChange_3_listener($event) {
      const prop_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.$state().$data()[prop_r3.name], $event) || (ctx_r3.$state().$data()[prop_r3.name] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prop_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prop_r3.name);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("data", ctx_r3.$state().$data()[prop_r3.name]);
    \u0275\u0275property("type", prop_r3.type);
  }
}
function EditRecordComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label")(1, "span");
    \u0275\u0275text(2, "id");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label")(5, "span");
    \u0275\u0275text(6, "table");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, EditRecordComponent_Conditional_2_For_9_Template, 4, 3, "label", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(10, "label", 2)(11, "input", 3);
    \u0275\u0275listener("input", function EditRecordComponent_Conditional_2_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.$state().$newProp.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", null, 0)(14, "option", 4);
    \u0275\u0275text(15, "string");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 5);
    \u0275\u0275text(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 6);
    \u0275\u0275text(19, "boolean");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 7);
    \u0275\u0275text(21, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 8);
    \u0275\u0275listener("click", function EditRecordComponent_Conditional_2_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const sel_r5 = \u0275\u0275reference(13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addProp(sel_r5.value));
    });
    \u0275\u0275text(23, "Add Prop");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "button", 8);
    \u0275\u0275listener("click", function EditRecordComponent_Conditional_2_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.save());
    });
    \u0275\u0275text(26, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 8);
    \u0275\u0275listener("click", function EditRecordComponent_Conditional_2_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.done.emit());
    });
    \u0275\u0275text(28, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r3.id());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r3.$state().$data().table);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.$availableProps());
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r3.$state().$newProp());
  }
}
var EditRecordComponent = class _EditRecordComponent {
  constructor() {
    this.#evDb = inject(EvSourceDbService);
    this.id = input.required(
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fields = input.required(
      ...ngDevMode ? [{ debugName: "fields" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.done = output();
    this.excludedFields = /* @__PURE__ */ new Set(["id", "tags", "table"]);
    this.$state = computed(
      () => {
        const id = this.id();
        if (!id) {
          throw new Error("id is required");
        }
        const data = this.#evDb.getData(id);
        if (!data) {
          throw new Error(`Record with id ${id} not found`);
        }
        const $types = this.#evDb.getTypesForTable(data.table);
        const $data = signal(__spreadValues({}, data));
        return {
          $data,
          $newProp: signal(""),
          $types
        };
      },
      ...ngDevMode ? [{ debugName: "$state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.$availableProps = computed(
      () => {
        const available = /* @__PURE__ */ new Set([
          ...this.fields(),
          ...Object.keys(this.$state().$data())
        ]);
        for (const prop of this.excludedFields) {
          available.delete(prop);
        }
        return Array.from(available).map((name) => {
          const val = this.$state().$data()[name];
          const origType = this.$state().$types().get(name) ?? typeof val;
          let type = "nonEditable";
          switch (origType) {
            case "string":
            case "number":
            case "boolean":
              type = origType;
              break;
            case "object":
              if (val instanceof Date) {
                type = "date";
              }
              break;
          }
          return { name, type };
        });
      },
      ...ngDevMode ? [{ debugName: "$availableProps" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.updateProp = (prop, value) => {
      this.$state().$data.update((data) => __spreadProps(__spreadValues({}, data), { [prop]: value }));
    };
  }
  #evDb;
  save() {
    const data = this.$state().$data();
    const tags = (data.tags ?? "").toString().split(",").map((tag) => tag.trim());
    this.#evDb.update(__spreadProps(__spreadValues({}, data), { tags }));
    this.done.emit();
  }
  addProp(type) {
    const prop = this.$state().$newProp();
    console.log("addProp", prop, type);
    if (!prop) {
      return;
    }
    let value = "";
    switch (type) {
      case "boolean":
        value = false;
        break;
      case "number":
        value = 0;
        break;
      case "date":
        value = /* @__PURE__ */ new Date();
        break;
    }
    console.log("addProp", prop);
    this.$state().$data.update((data) => __spreadProps(__spreadValues({}, data), { [prop]: value }));
    this.$state().$newProp.set("");
  }
  static {
    this.\u0275fac = function EditRecordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditRecordComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditRecordComponent, selectors: [["se-edit-record"]], inputs: { id: [1, "id"], fields: [1, "fields"] }, outputs: { done: "done" }, decls: 3, vars: 1, consts: [["sel", ""], ["disabled", "", 3, "value"], [1, "addProp"], [3, "input", "value"], ["value", "string"], ["value", "number"], ["value", "boolean"], ["value", "date"], [3, "click"], [3, "dataChange", "data", "type"]], template: function EditRecordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h4");
        \u0275\u0275text(1, "Edit record");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(2, EditRecordComponent_Conditional_2_Template, 30, 3);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.id() ? 2 : -1);
      }
    }, dependencies: [FieldEditComponent], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  width: 30rem;\n  border: 1px solid gray;\n  background-color: rgb(38, 38, 38);\n  padding: 1rem;\n  gap: 1ch;\n  flex-direction: column;\n}\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1ch;\n  grid-template-columns: 5rem 1fr;\n  align-items: center;\n}\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: right;\n}\nlabel.addProp[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1ch;\n  align-items: flex-start;\n}\ndiv[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1ch;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditRecordComponent, [{
    type: Component,
    args: [{ selector: "se-edit-record", imports: [FieldEditComponent], template: `
    <h4>Edit record</h4>
    @if (id()) {
      <label>
        <span>id</span>
        <input [value]="id()" disabled />
      </label>
      <label>
        <span>table</span>
        <input [value]="$state().$data().table" disabled />
      </label>
      @for (prop of $availableProps(); track prop) {
        <label>
          <span>{{ prop.name }}</span>
          <se-field-edit
            [(data)]="$state().$data()[prop.name]"
            [type]="prop.type"
          />
        </label>
      }
      <label class="addProp">
        <input
          [value]="$state().$newProp()"
          (input)="$state().$newProp.set($any($event.target).value)"
        />
        <select #sel>
          <option value="string">string</option>
          <option value="number">number</option>
          <option value="boolean">boolean</option>
          <option value="date">date</option>
        </select>
        <button (click)="addProp(sel.value)">Add Prop</button>
      </label>
      <div>
        <button (click)="save()">Save</button>
        <button (click)="done.emit()">Cancel</button>
        <div></div>
      </div>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/indexdb/edit-record/edit-record.component.css */\n:host {\n  display: flex;\n  width: 30rem;\n  border: 1px solid gray;\n  background-color: rgb(38, 38, 38);\n  padding: 1rem;\n  gap: 1ch;\n  flex-direction: column;\n}\nlabel {\n  display: grid;\n  gap: 1ch;\n  grid-template-columns: 5rem 1fr;\n  align-items: center;\n}\nlabel span {\n  text-align: right;\n}\nlabel.addProp {\n  display: flex;\n  gap: 1ch;\n  align-items: flex-start;\n}\ndiv {\n  display: flex;\n  gap: 1ch;\n}\n"] }]
  }], null, { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: true }] }], fields: [{ type: Input, args: [{ isSignal: true, alias: "fields", required: true }] }], done: [{ type: Output, args: ["done"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditRecordComponent, { className: "EditRecordComponent", filePath: "src/app/indexdb/edit-record/edit-record.component.ts", lineNumber: 71 });
})();

// src/app/indexdb/indexdb.component.ts
var _c0 = ["dlg"];
function IndexdbComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("selected", ctx_r1.currentTable() === table_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(table_r1);
  }
}
function IndexdbComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(col_r3);
  }
}
function IndexdbComponent_For_16_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5()[col_r6]);
  }
}
function IndexdbComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "button", 2);
    \u0275\u0275listener("click", function IndexdbComponent_For_16_Template_button_click_2_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit(row_r5().id));
    });
    \u0275\u0275text(3, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 2);
    \u0275\u0275listener("click", function IndexdbComponent_For_16_Template_button_click_4_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.del(row_r5().id));
    });
    \u0275\u0275text(5, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, IndexdbComponent_For_16_For_7_Template, 2, 1, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.state().cols);
  }
}
function IndexdbComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "se-edit-record", 6);
    \u0275\u0275listener("done", function IndexdbComponent_Conditional_19_Template_se_edit_record_done_0_listener() {
      \u0275\u0275restoreView(_r7);
      \u0275\u0275nextContext();
      const dlg_r8 = \u0275\u0275reference(18);
      return \u0275\u0275resetView(dlg_r8.close());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r1.state().activeId())("fields", ctx_r1.state().cols);
  }
}
var IndexdbComponent = class _IndexdbComponent {
  constructor() {
    this.#evsDb = inject(EvSourceDbService);
    this.dlg = viewChild(
      "dlg",
      ...ngDevMode ? [{ debugName: "dlg" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.currentTable = signal(
      "demo-1",
      ...ngDevMode ? [{ debugName: "currentTable" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.availableTables = this.#evsDb.$availableTables;
    this.state = computed(
      () => {
        const rows = this.#evsDb.list(this.currentTable())();
        const cols = /* @__PURE__ */ new Set();
        for (const row of rows) {
          for (const col of Object.keys(row())) {
            cols.add(col);
          }
        }
        return {
          currentTable: this.currentTable(),
          rows,
          cols: Array.from(cols),
          activeId: signal(void 0)
        };
      },
      ...ngDevMode ? [{ debugName: "state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.edit = (id) => {
      this.state().activeId.set(id);
      const dlg = this.dlg()?.nativeElement;
      dlg?.showModal();
    };
    this.newRow = () => {
      const row = {
        id: createId(),
        table: this.currentTable(),
        tags: ["new"],
        date: /* @__PURE__ */ new Date()
      };
      this.state().activeId.set(row.id);
      this.#evsDb.create(row);
    };
    this.del = this.#evsDb.delete;
  }
  #evsDb;
  static {
    this.\u0275fac = function IndexdbComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IndexdbComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IndexdbComponent, selectors: [["se-indexdb"]], viewQuery: function IndexdbComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.dlg, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 20, vars: 1, consts: [["dlg", ""], [1, "cmdRow"], [3, "click"], [3, "change"], [3, "selected"], [3, "id", "fields"], [3, "done", "id", "fields"]], template: function IndexdbComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2");
        \u0275\u0275text(1, "Sample with event-source DB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 1)(3, "button", 2);
        \u0275\u0275listener("click", function IndexdbComponent_Template_button_click_3_listener() {
          return ctx.newRow();
        });
        \u0275\u0275text(4, "New Row");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "select", 3);
        \u0275\u0275listener("change", function IndexdbComponent_Template_select_change_5_listener($event) {
          return ctx.currentTable.set($event.target.value);
        });
        \u0275\u0275repeaterCreate(6, IndexdbComponent_For_7_Template, 2, 2, "option", 4, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "table")(9, "thead")(10, "tr");
        \u0275\u0275element(11, "th");
        \u0275\u0275repeaterCreate(12, IndexdbComponent_For_13_Template, 2, 1, "th", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "tbody");
        \u0275\u0275repeaterCreate(15, IndexdbComponent_For_16_Template, 8, 0, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "dialog", null, 0);
        \u0275\u0275conditionalCreate(19, IndexdbComponent_Conditional_19_Template, 1, 2, "se-edit-record", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.availableTables());
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.state().cols);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.state().rows);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.state().activeId() !== void 0 ? 19 : -1);
      }
    }, dependencies: [EditRecordComponent], styles: [`
:where(html[_ngcontent-%COMP%]) {
  --font-system-ui:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;
  --font-transitional:Charter,Bitstream Charter,Sitka Text,Cambria,serif;
  --font-old-style:Iowan Old Style,Palatino Linotype,URW Palladio L,P052,serif;
  --font-humanist:Seravek,Gill Sans Nova,Ubuntu,Calibri,DejaVu Sans,source-sans-pro,sans-serif;
  --font-geometric-humanist:Avenir,Montserrat,Corbel,URW Gothic,source-sans-pro,sans-serif;
  --font-classical-humanist:Optima,Candara,Noto Sans,source-sans-pro,sans-serif;
  --font-neo-grotesque:Inter,Roboto,Helvetica Neue,Arial Nova,Nimbus Sans,Arial,sans-serif;
  --font-monospace-slab-serif:Nimbus Mono PS,Courier New,monospace;
  --font-monospace-code:Dank Mono,Operator Mono,Inconsolata,Fira Mono,ui-monospace,SF Mono,Monaco,Droid Sans Mono,Source Code Pro,Cascadia Code,Menlo,Consolas,DejaVu Sans Mono,monospace;
  --font-industrial:Bahnschrift,DIN Alternate,Franklin Gothic Medium,Nimbus Sans Narrow,sans-serif-condensed,sans-serif;
  --font-rounded-sans:ui-rounded,Hiragino Maru Gothic ProN,Quicksand,Comfortaa,Manjari,Arial Rounded MT,Arial Rounded MT Bold,Calibri,source-sans-pro,sans-serif;
  --font-slab-serif:Rockwell,Rockwell Nova,Roboto Slab,DejaVu Serif,Sitka Small,serif;
  --font-antique:Superclarendon,Bookman Old Style,URW Bookman,URW Bookman L,Georgia Pro,Georgia,serif;
  --font-didone:Didot,Bodoni MT,Noto Serif Display,URW Palladio L,P052,Sylfaen,serif;
  --font-handwritten:Segoe Print,Bradley Hand,Chilanka,TSCu_Comic,casual,cursive;
  --font-sans:var(--font-system-ui);
  --font-serif:ui-serif,serif;
  --font-mono:var(--font-monospace-code);
  --font-weight-1:100;
  --font-weight-2:200;
  --font-weight-3:300;
  --font-weight-4:400;
  --font-weight-5:500;
  --font-weight-6:600;
  --font-weight-7:700;
  --font-weight-8:800;
  --font-weight-9:900;
  --font-lineheight-00:.95;
  --font-lineheight-0:1.1;
  --font-lineheight-1:1.25;
  --font-lineheight-2:1.375;
  --font-lineheight-3:1.5;
  --font-lineheight-4:1.75;
  --font-lineheight-5:2;
  --font-letterspacing-0:-.05em;
  --font-letterspacing-1:.025em;
  --font-letterspacing-2:.050em;
  --font-letterspacing-3:.075em;
  --font-letterspacing-4:.150em;
  --font-letterspacing-5:.500em;
  --font-letterspacing-6:.750em;
  --font-letterspacing-7:1em;
  --font-size-00:.5rem;
  --font-size-0:.75rem;
  --font-size-1:1rem;
  --font-size-2:1.1rem;
  --font-size-3:1.25rem;
  --font-size-4:1.5rem;
  --font-size-5:2rem;
  --font-size-6:2.5rem;
  --font-size-7:3rem;
  --font-size-8:3.5rem;
  --font-size-fluid-0:max(.75rem,min(2vw,1rem));
  --font-size-fluid-1:max(1rem,min(4vw,1.5rem));
  --font-size-fluid-2:max(1.5rem,min(6vw,2.5rem));
  --font-size-fluid-3:max(2rem,min(9vw,3.5rem));
  --size-000:-.5rem;
  --size-00:-.25rem;
  --size-1:.25rem;
  --size-2:.5rem;
  --size-3:1rem;
  --size-4:1.25rem;
  --size-5:1.5rem;
  --size-6:1.75rem;
  --size-7:2rem;
  --size-8:3rem;
  --size-9:4rem;
  --size-10:5rem;
  --size-11:7.5rem;
  --size-12:10rem;
  --size-13:15rem;
  --size-14:20rem;
  --size-15:30rem;
  --size-px-000:-8px;
  --size-px-00:-4px;
  --size-px-1:4px;
  --size-px-2:8px;
  --size-px-3:16px;
  --size-px-4:20px;
  --size-px-5:24px;
  --size-px-6:28px;
  --size-px-7:32px;
  --size-px-8:48px;
  --size-px-9:64px;
  --size-px-10:80px;
  --size-px-11:120px;
  --size-px-12:160px;
  --size-px-13:240px;
  --size-px-14:320px;
  --size-px-15:480px;
  --size-fluid-1:max(.5rem,min(1vw,1rem));
  --size-fluid-2:max(1rem,min(2vw,1.5rem));
  --size-fluid-3:max(1.5rem,min(3vw,2rem));
  --size-fluid-4:max(2rem,min(4vw,3rem));
  --size-fluid-5:max(4rem,min(5vw,5rem));
  --size-fluid-6:max(5rem,min(7vw,7.5rem));
  --size-fluid-7:max(7.5rem,min(10vw,10rem));
  --size-fluid-8:max(10rem,min(20vw,15rem));
  --size-fluid-9:max(15rem,min(30vw,20rem));
  --size-fluid-10:max(20rem,min(40vw,30rem));
  --size-content-1:20ch;
  --size-content-2:45ch;
  --size-content-3:60ch;
  --size-header-1:20ch;
  --size-header-2:25ch;
  --size-header-3:35ch;
  --size-xxs:240px;
  --size-xs:360px;
  --size-sm:480px;
  --size-md:768px;
  --size-lg:1024px;
  --size-xl:1440px;
  --size-xxl:1920px;
  --size-relative-000:-.5ch;
  --size-relative-00:-.25ch;
  --size-relative-1:.25ch;
  --size-relative-2:.5ch;
  --size-relative-3:1ch;
  --size-relative-4:1.25ch;
  --size-relative-5:1.5ch;
  --size-relative-6:1.75ch;
  --size-relative-7:2ch;
  --size-relative-8:3ch;
  --size-relative-9:4ch;
  --size-relative-10:5ch;
  --size-relative-11:7.5ch;
  --size-relative-12:10ch;
  --size-relative-13:15ch;
  --size-relative-14:20ch;
  --size-relative-15:30ch;
  --ease-1:cubic-bezier(.25,0,.5,1);
  --ease-2:cubic-bezier(.25,0,.4,1);
  --ease-3:cubic-bezier(.25,0,.3,1);
  --ease-4:cubic-bezier(.25,0,.2,1);
  --ease-5:cubic-bezier(.25,0,.1,1);
  --ease-in-1:cubic-bezier(.25,0,1,1);
  --ease-in-2:cubic-bezier(.50,0,1,1);
  --ease-in-3:cubic-bezier(.70,0,1,1);
  --ease-in-4:cubic-bezier(.90,0,1,1);
  --ease-in-5:cubic-bezier(1,0,1,1);
  --ease-out-1:cubic-bezier(0,0,.75,1);
  --ease-out-2:cubic-bezier(0,0,.50,1);
  --ease-out-3:cubic-bezier(0,0,.3,1);
  --ease-out-4:cubic-bezier(0,0,.1,1);
  --ease-out-5:cubic-bezier(0,0,0,1);
  --ease-in-out-1:cubic-bezier(.1,0,.9,1);
  --ease-in-out-2:cubic-bezier(.3,0,.7,1);
  --ease-in-out-3:cubic-bezier(.5,0,.5,1);
  --ease-in-out-4:cubic-bezier(.7,0,.3,1);
  --ease-in-out-5:cubic-bezier(.9,0,.1,1);
  --ease-elastic-out-1:cubic-bezier(.5,.75,.75,1.25);
  --ease-elastic-out-2:cubic-bezier(.5,1,.75,1.25);
  --ease-elastic-out-3:cubic-bezier(.5,1.25,.75,1.25);
  --ease-elastic-out-4:cubic-bezier(.5,1.5,.75,1.25);
  --ease-elastic-out-5:cubic-bezier(.5,1.75,.75,1.25);
  --ease-elastic-in-1:cubic-bezier(.5,-0.25,.75,1);
  --ease-elastic-in-2:cubic-bezier(.5,-0.50,.75,1);
  --ease-elastic-in-3:cubic-bezier(.5,-0.75,.75,1);
  --ease-elastic-in-4:cubic-bezier(.5,-1.00,.75,1);
  --ease-elastic-in-5:cubic-bezier(.5,-1.25,.75,1);
  --ease-elastic-in-out-1:cubic-bezier(.5,-.1,.1,1.5);
  --ease-elastic-in-out-2:cubic-bezier(.5,-.3,.1,1.5);
  --ease-elastic-in-out-3:cubic-bezier(.5,-.5,.1,1.5);
  --ease-elastic-in-out-4:cubic-bezier(.5,-.7,.1,1.5);
  --ease-elastic-in-out-5:cubic-bezier(.5,-.9,.1,1.5);
  --ease-step-1:steps(2);
  --ease-step-2:steps(3);
  --ease-step-3:steps(4);
  --ease-step-4:steps(7);
  --ease-step-5:steps(10);
  --ease-elastic-1:var(--ease-elastic-out-1);
  --ease-elastic-2:var(--ease-elastic-out-2);
  --ease-elastic-3:var(--ease-elastic-out-3);
  --ease-elastic-4:var(--ease-elastic-out-4);
  --ease-elastic-5:var(--ease-elastic-out-5);
  --ease-squish-1:var(--ease-elastic-in-out-1);
  --ease-squish-2:var(--ease-elastic-in-out-2);
  --ease-squish-3:var(--ease-elastic-in-out-3);
  --ease-squish-4:var(--ease-elastic-in-out-4);
  --ease-squish-5:var(--ease-elastic-in-out-5);
  --ease-spring-1:linear(0,0.006,0.025 2.8%,0.101 6.1%,0.539 18.9%,0.721 25.3%,0.849 31.5%,0.937 38.1%,0.968 41.8%,0.991 45.7%,1.006 50.1%,1.015 55%,1.017 63.9%,1.001);
  --ease-spring-2:linear(0,0.007,0.029 2.2%,0.118 4.7%,0.625 14.4%,0.826 19%,0.902,0.962,1.008 26.1%,1.041 28.7%,1.064 32.1%,1.07 36%,1.061 40.5%,1.015 53.4%,0.999 61.6%,0.995 71.2%,1);
  --ease-spring-3:linear(0,0.009,0.035 2.1%,0.141 4.4%,0.723 12.9%,0.938 16.7%,1.017,1.077,1.121,1.149 24.3%,1.159,1.163,1.161,1.154 29.9%,1.129 32.8%,1.051 39.6%,1.017 43.1%,0.991,0.977 51%,0.974 53.8%,0.975 57.1%,0.997 69.8%,1.003 76.9%,1);
  --ease-spring-4:linear(0,0.009,0.037 1.7%,0.153 3.6%,0.776 10.3%,1.001,1.142 16%,1.185,1.209 19%,1.215 19.9% 20.8%,1.199,1.165 25%,1.056 30.3%,1.008 33%,0.973,0.955 39.2%,0.953 41.1%,0.957 43.3%,0.998 53.3%,1.009 59.1% 63.7%,0.998 78.9%,1);
  --ease-spring-5:linear(0,0.01,0.04 1.6%,0.161 3.3%,0.816 9.4%,1.046,1.189 14.4%,1.231,1.254 17%,1.259,1.257 18.6%,1.236,1.194 22.3%,1.057 27%,0.999 29.4%,0.955 32.1%,0.942,0.935 34.9%,0.933,0.939 38.4%,1 47.3%,1.011,1.017 52.6%,1.016 56.4%,1 65.2%,0.996 70.2%,1.001 87.2%,1);
  --ease-bounce-1:linear(0,0.004,0.016,0.035,0.063,0.098,0.141,0.191,0.25,0.316,0.391 36.8%,0.563,0.766,1 58.8%,0.946,0.908 69.1%,0.895,0.885,0.879,0.878,0.879,0.885,0.895,0.908 89.7%,0.946,1);
  --ease-bounce-2:linear(0,0.004,0.016,0.035,0.063,0.098,0.141 15.1%,0.25,0.391,0.562,0.765,1,0.892 45.2%,0.849,0.815,0.788,0.769,0.757,0.753,0.757,0.769,0.788,0.815,0.85,0.892 75.2%,1 80.2%,0.973,0.954,0.943,0.939,0.943,0.954,0.973,1);
  --ease-bounce-3:linear(0,0.004,0.016,0.035,0.062,0.098,0.141 11.4%,0.25,0.39,0.562,0.764,1 30.3%,0.847 34.8%,0.787,0.737,0.699,0.672,0.655,0.65,0.656,0.672,0.699,0.738,0.787,0.847 61.7%,1 66.2%,0.946,0.908,0.885 74.2%,0.879,0.878,0.879,0.885 79.5%,0.908,0.946,1 87.4%,0.981,0.968,0.96,0.957,0.96,0.968,0.981,1);
  --ease-bounce-4:linear(0,0.004,0.016 3%,0.062,0.141,0.25,0.391,0.562 18.2%,1 24.3%,0.81,0.676 32.3%,0.629,0.595,0.575,0.568,0.575,0.595,0.629,0.676 48.2%,0.811,1 56.2%,0.918,0.86,0.825,0.814,0.825,0.86,0.918,1 77.2%,0.94 80.6%,0.925,0.92,0.925,0.94 87.5%,1 90.9%,0.974,0.965,0.974,1);
  --ease-bounce-5:linear(0,0.004,0.016 2.5%,0.063,0.141,0.25 10.1%,0.562,1 20.2%,0.783,0.627,0.534 30.9%,0.511,0.503,0.511,0.534 38%,0.627,0.782,1 48.7%,0.892,0.815,0.769 56.3%,0.757,0.753,0.757,0.769 61.3%,0.815,0.892,1 68.8%,0.908 72.4%,0.885,0.878,0.885,0.908 79.4%,1 83%,0.954 85.5%,0.943,0.939,0.943,0.954 90.5%,1 93%,0.977,0.97,0.977,1);
  --ease-circ-in:cubic-bezier(.6,.04,.98,.335);
  --ease-circ-in-out:cubic-bezier(.785,.135,.15,.86);
  --ease-circ-out:cubic-bezier(.075,.82,.165,1);
  --ease-cubic-in:cubic-bezier(.55,.055,.675,.19);
  --ease-cubic-in-out:cubic-bezier(.645,.045,.355,1);
  --ease-cubic-out:cubic-bezier(.215,.61,.355,1);
  --ease-expo-in:cubic-bezier(.95,.05,.795,.035);
  --ease-expo-in-out:cubic-bezier(1,0,0,1);
  --ease-expo-out:cubic-bezier(.19,1,.22,1);
  --ease-quad-in:cubic-bezier(.55,.085,.68,.53);
  --ease-quad-in-out:cubic-bezier(.455,.03,.515,.955);
  --ease-quad-out:cubic-bezier(.25,.46,.45,.94);
  --ease-quart-in:cubic-bezier(.895,.03,.685,.22);
  --ease-quart-in-out:cubic-bezier(.77,0,.175,1);
  --ease-quart-out:cubic-bezier(.165,.84,.44,1);
  --ease-quint-in:cubic-bezier(.755,.05,.855,.06);
  --ease-quint-in-out:cubic-bezier(.86,0,.07,1);
  --ease-quint-out:cubic-bezier(.23,1,.32,1);
  --ease-sine-in:cubic-bezier(.47,0,.745,.715);
  --ease-sine-in-out:cubic-bezier(.445,.05,.55,.95);
  --ease-sine-out:cubic-bezier(.39,.575,.565,1);
  --layer-1:1;
  --layer-2:2;
  --layer-3:3;
  --layer-4:4;
  --layer-5:5;
  --layer-important:2147483647;
  --shadow-color:220 3% 15%;
  --shadow-strength:1%;
  --shadow-strength-3:calc(var(--shadow-strength) + 2%);
  --shadow-strength-4:calc(var(--shadow-strength) + 3%);
  --shadow-strength-5:calc(var(--shadow-strength) + 4%);
  --shadow-strength-6:calc(var(--shadow-strength) + 5%);
  --shadow-strength-7:calc(var(--shadow-strength) + 6%);
  --shadow-strength-8:calc(var(--shadow-strength) + 7%);
  --shadow-strength-10:calc(var(--shadow-strength) + 9%);
  --inner-shadow-highlight:inset 0 -.5px 0 0 #fff,inset 0 .5px 0 0 rgba(0,0,0,.067);
  --shadow-1:0 1px 2px -1px hsl(var(--shadow-color)/var(--shadow-strength-10));
  --shadow-2:0 3px 5px -2px hsl(var(--shadow-color)/var(--shadow-strength-4)),0 7px 14px -5px hsl(var(--shadow-color)/var(--shadow-strength-6));
  --shadow-3:0 -1px 3px 0 hsl(var(--shadow-color)/var(--shadow-strength-3)),0 1px 2px -5px hsl(var(--shadow-color)/var(--shadow-strength-3)),0 2px 5px -5px hsl(var(--shadow-color)/var(--shadow-strength-5)),0 4px 12px -5px hsl(var(--shadow-color)/var(--shadow-strength-6)),0 12px 15px -5px hsl(var(--shadow-color)/var(--shadow-strength-8));
  --shadow-4:0 -2px 5px 0 hsl(var(--shadow-color)/var(--shadow-strength-3)),0 1px 1px -2px hsl(var(--shadow-color)/var(--shadow-strength-4)),0 2px 2px -2px hsl(var(--shadow-color)/var(--shadow-strength-4)),0 5px 5px -2px hsl(var(--shadow-color)/var(--shadow-strength-5)),0 9px 9px -2px hsl(var(--shadow-color)/var(--shadow-strength-6)),0 16px 16px -2px hsl(var(--shadow-color)/var(--shadow-strength-7));
  --shadow-5:0 -1px 2px 0 hsl(var(--shadow-color)/var(--shadow-strength-3)),0 2px 1px -2px hsl(var(--shadow-color)/var(--shadow-strength-4)),0 5px 5px -2px hsl(var(--shadow-color)/var(--shadow-strength-4)),0 10px 10px -2px hsl(var(--shadow-color)/var(--shadow-strength-5)),0 20px 20px -2px hsl(var(--shadow-color)/var(--shadow-strength-6)),0 40px 40px -2px hsl(var(--shadow-color)/var(--shadow-strength-8));
  --shadow-6:0 -1px 2px 0 hsl(var(--shadow-color)/var(--shadow-strength-3)),0 3px 2px -2px hsl(var(--shadow-color)/var(--shadow-strength-4)),0 7px 5px -2px hsl(var(--shadow-color)/var(--shadow-strength-4)),0 12px 10px -2px hsl(var(--shadow-color)/var(--shadow-strength-5)),0 22px 18px -2px hsl(var(--shadow-color)/var(--shadow-strength-6)),0 41px 33px -2px hsl(var(--shadow-color)/var(--shadow-strength-7)),0 100px 80px -2px hsl(var(--shadow-color)/var(--shadow-strength-8));
  --inner-shadow-0:inset 0 0 0 1px hsl(var(--shadow-color)/var(--shadow-strength-10));
  --inner-shadow-1:inset 0 1px 2px 0 hsl(var(--shadow-color)/var(--shadow-strength-10)),var(--inner-shadow-highlight);
  --inner-shadow-2:inset 0 1px 4px 0 hsl(var(--shadow-color)/var(--shadow-strength-10)),var(--inner-shadow-highlight);
  --inner-shadow-3:inset 0 2px 8px 0 hsl(var(--shadow-color)/var(--shadow-strength-10)),var(--inner-shadow-highlight);
  --inner-shadow-4:inset 0 2px 14px 0 hsl(var(--shadow-color)/var(--shadow-strength-10)),var(--inner-shadow-highlight);
  --ratio-square:1;
  --ratio-landscape:4/3;
  --ratio-portrait:3/4;
  --ratio-widescreen:16/9;
  --ratio-ultrawide:18/5;
  --ratio-golden:1.6180/1;
  --gray-0:#f8f9fa;
  --gray-1:#f1f3f5;
  --gray-2:#e9ecef;
  --gray-3:#dee2e6;
  --gray-4:#ced4da;
  --gray-5:#adb5bd;
  --gray-6:#868e96;
  --gray-7:#495057;
  --gray-8:#343a40;
  --gray-9:#212529;
  --gray-10:#16191d;
  --gray-11:#0d0f12;
  --gray-12:#030507;
  --stone-0:#f8fafb;
  --stone-1:#f2f4f6;
  --stone-2:#ebedef;
  --stone-3:#e0e4e5;
  --stone-4:#d1d6d8;
  --stone-5:#b1b6b9;
  --stone-6:#979b9d;
  --stone-7:#7e8282;
  --stone-8:#666968;
  --stone-9:#50514f;
  --stone-10:#3a3a37;
  --stone-11:#252521;
  --stone-12:#121210;
  --red-0:#fff5f5;
  --red-1:#ffe3e3;
  --red-2:#ffc9c9;
  --red-3:#ffa8a8;
  --red-4:#ff8787;
  --red-5:#ff6b6b;
  --red-6:#fa5252;
  --red-7:#f03e3e;
  --red-8:#e03131;
  --red-9:#c92a2a;
  --red-10:#b02525;
  --red-11:#962020;
  --red-12:#7d1a1a;
  --pink-0:#fff0f6;
  --pink-1:#ffdeeb;
  --pink-2:#fcc2d7;
  --pink-3:#faa2c1;
  --pink-4:#f783ac;
  --pink-5:#f06595;
  --pink-6:#e64980;
  --pink-7:#d6336c;
  --pink-8:#c2255c;
  --pink-9:#a61e4d;
  --pink-10:#8c1941;
  --pink-11:#731536;
  --pink-12:#59102a;
  --purple-0:#f8f0fc;
  --purple-1:#f3d9fa;
  --purple-2:#eebefa;
  --purple-3:#e599f7;
  --purple-4:#da77f2;
  --purple-5:#cc5de8;
  --purple-6:#be4bdb;
  --purple-7:#ae3ec9;
  --purple-8:#9c36b5;
  --purple-9:#862e9c;
  --purple-10:#702682;
  --purple-11:#5a1e69;
  --purple-12:#44174f;
  --violet-0:#f3f0ff;
  --violet-1:#e5dbff;
  --violet-2:#d0bfff;
  --violet-3:#b197fc;
  --violet-4:#9775fa;
  --violet-5:#845ef7;
  --violet-6:#7950f2;
  --violet-7:#7048e8;
  --violet-8:#6741d9;
  --violet-9:#5f3dc4;
  --violet-10:#5235ab;
  --violet-11:#462d91;
  --violet-12:#3a2578;
  --indigo-0:#edf2ff;
  --indigo-1:#dbe4ff;
  --indigo-2:#bac8ff;
  --indigo-3:#91a7ff;
  --indigo-4:#748ffc;
  --indigo-5:#5c7cfa;
  --indigo-6:#4c6ef5;
  --indigo-7:#4263eb;
  --indigo-8:#3b5bdb;
  --indigo-9:#364fc7;
  --indigo-10:#2f44ad;
  --indigo-11:#283a94;
  --indigo-12:#21307a;
  --blue-0:#e7f5ff;
  --blue-1:#d0ebff;
  --blue-2:#a5d8ff;
  --blue-3:#74c0fc;
  --blue-4:#4dabf7;
  --blue-5:#339af0;
  --blue-6:#228be6;
  --blue-7:#1c7ed6;
  --blue-8:#1971c2;
  --blue-9:#1864ab;
  --blue-10:#145591;
  --blue-11:#114678;
  --blue-12:#0d375e;
  --cyan-0:#e3fafc;
  --cyan-1:#c5f6fa;
  --cyan-2:#99e9f2;
  --cyan-3:#66d9e8;
  --cyan-4:#3bc9db;
  --cyan-5:#22b8cf;
  --cyan-6:#15aabf;
  --cyan-7:#1098ad;
  --cyan-8:#0c8599;
  --cyan-9:#0b7285;
  --cyan-10:#095c6b;
  --cyan-11:#074652;
  --cyan-12:#053038;
  --teal-0:#e6fcf5;
  --teal-1:#c3fae8;
  --teal-2:#96f2d7;
  --teal-3:#63e6be;
  --teal-4:#38d9a9;
  --teal-5:#20c997;
  --teal-6:#12b886;
  --teal-7:#0ca678;
  --teal-8:#099268;
  --teal-9:#087f5b;
  --teal-10:#066649;
  --teal-11:#054d37;
  --teal-12:#033325;
  --green-0:#ebfbee;
  --green-1:#d3f9d8;
  --green-2:#b2f2bb;
  --green-3:#8ce99a;
  --green-4:#69db7c;
  --green-5:#51cf66;
  --green-6:#40c057;
  --green-7:#37b24d;
  --green-8:#2f9e44;
  --green-9:#2b8a3e;
  --green-10:#237032;
  --green-11:#1b5727;
  --green-12:#133d1b;
  --lime-0:#f4fce3;
  --lime-1:#e9fac8;
  --lime-2:#d8f5a2;
  --lime-3:#c0eb75;
  --lime-4:#a9e34b;
  --lime-5:#94d82d;
  --lime-6:#82c91e;
  --lime-7:#74b816;
  --lime-8:#66a80f;
  --lime-9:#5c940d;
  --lime-10:#4c7a0b;
  --lime-11:#3c6109;
  --lime-12:#2c4706;
  --yellow-0:#fff9db;
  --yellow-1:#fff3bf;
  --yellow-2:#ffec99;
  --yellow-3:#ffe066;
  --yellow-4:#ffd43b;
  --yellow-5:#fcc419;
  --yellow-6:#fab005;
  --yellow-7:#f59f00;
  --yellow-8:#f08c00;
  --yellow-9:#e67700;
  --yellow-10:#b35c00;
  --yellow-11:#804200;
  --yellow-12:#663500;
  --orange-0:#fff4e6;
  --orange-1:#ffe8cc;
  --orange-2:#ffd8a8;
  --orange-3:#ffc078;
  --orange-4:#ffa94d;
  --orange-5:#ff922b;
  --orange-6:#fd7e14;
  --orange-7:#f76707;
  --orange-8:#e8590c;
  --orange-9:#d9480f;
  --orange-10:#bf400d;
  --orange-11:#99330b;
  --orange-12:#802b09;
  --choco-0:#fff8dc;
  --choco-1:#fce1bc;
  --choco-2:#f7ca9e;
  --choco-3:#f1b280;
  --choco-4:#e99b62;
  --choco-5:#df8545;
  --choco-6:#d46e25;
  --choco-7:#bd5f1b;
  --choco-8:#a45117;
  --choco-9:#8a4513;
  --choco-10:#703a13;
  --choco-11:#572f12;
  --choco-12:#3d210d;
  --brown-0:#faf4eb;
  --brown-1:#ede0d1;
  --brown-2:#e0cab7;
  --brown-3:#d3b79e;
  --brown-4:#c5a285;
  --brown-5:#b78f6d;
  --brown-6:#a87c56;
  --brown-7:#956b47;
  --brown-8:#825b3a;
  --brown-9:#6f4b2d;
  --brown-10:#5e3a21;
  --brown-11:#4e2b15;
  --brown-12:#422412;
  --sand-0:#f8fafb;
  --sand-1:#e6e4dc;
  --sand-2:#d5cfbd;
  --sand-3:#c2b9a0;
  --sand-4:#aea58c;
  --sand-5:#9a9178;
  --sand-6:#867c65;
  --sand-7:#736a53;
  --sand-8:#5f5746;
  --sand-9:#4b4639;
  --sand-10:#38352d;
  --sand-11:#252521;
  --sand-12:#121210;
  --camo-0:#f9fbe7;
  --camo-1:#e8ed9c;
  --camo-2:#d2df4e;
  --camo-3:#c2ce34;
  --camo-4:#b5bb2e;
  --camo-5:#a7a827;
  --camo-6:#999621;
  --camo-7:#8c851c;
  --camo-8:#7e7416;
  --camo-9:#6d6414;
  --camo-10:#5d5411;
  --camo-11:#4d460e;
  --camo-12:#36300a;
  --jungle-0:#ecfeb0;
  --jungle-1:#def39a;
  --jungle-2:#d0e884;
  --jungle-3:#c2dd6e;
  --jungle-4:#b5d15b;
  --jungle-5:#a8c648;
  --jungle-6:#9bbb36;
  --jungle-7:#8fb024;
  --jungle-8:#84a513;
  --jungle-9:#7a9908;
  --jungle-10:#658006;
  --jungle-11:#516605;
  --jungle-12:#3d4d04;
  --gradient-space: ;
  --gradient-1:linear-gradient(
      to bottom right var(--gradient-space),#1f005c,#5b0060,#870160,#ac255e,#ca485c,#e16b5c,#f39060,#ffb56b);
  --gradient-2:linear-gradient(
      to bottom right var(--gradient-space),#48005c,#8300e2,#a269ff);
  --gradient-3:radial-gradient(
      circle at top right var(--gradient-space),#0ff,rgba(0,255,255,0)),radial-gradient(
      circle at bottom left var(--gradient-space),#ff1492,rgba(255,20,146,0));
  --gradient-4:linear-gradient(
      to bottom right var(--gradient-space),#00f5a0,#00d9f5);
  --gradient-5:conic-gradient(
      from -270deg at 75% 110% var(--gradient-space),#f0f,#fffaf0);
  --gradient-6:conic-gradient(
      from -90deg at top left var(--gradient-space),#000,#fff);
  --gradient-7:linear-gradient(
      to bottom right var(--gradient-space),#72c6ef,#004e8f);
  --gradient-8:conic-gradient(
      from 90deg at 50% 0% var(--gradient-space),#111,50%,#222,#111);
  --gradient-9:conic-gradient(
      from .5turn at bottom center var(--gradient-space),#add8e6,#fff);
  --gradient-10:conic-gradient(
      from 90deg at 40% -25% var(--gradient-space),gold,#f79d03,#ee6907,#e6390a,#de0d0d,#d61039,#cf1261,#c71585,#cf1261,#d61039,#de0d0d,#ee6907,#f79d03,gold,gold,gold);
  --gradient-11:conic-gradient(
      at bottom left var(--gradient-space),#ff1493,cyan);
  --gradient-12:conic-gradient(
      from 90deg at 25% -10% var(--gradient-space),#ff4500,#d3f340,#7bee85,#afeeee,#7bee85);
  --gradient-13:radial-gradient(
      circle at 50% 200% var(--gradient-space),#000142,#3b0083,#b300c3,#ff059f,#ff4661,#ffad86,#fff3c7);
  --gradient-14:conic-gradient(
      at top right var(--gradient-space),lime,cyan);
  --gradient-15:linear-gradient(
      to bottom right var(--gradient-space),#c7d2fe,#fecaca,#fef3c7);
  --gradient-16:radial-gradient(
      circle at 50% -250% var(--gradient-space),#374151,#111827,#000);
  --gradient-17:conic-gradient(
      from -90deg at 50% -25% var(--gradient-space),blue,#8a2be2);
  --gradient-18:linear-gradient(
      0deg var(--gradient-space),rgba(255,0,0,.8),rgba(255,0,0,0) 75%),linear-gradient(
      60deg var(--gradient-space),rgba(255,255,0,.8),rgba(255,255,0,0) 75%),linear-gradient(
      120deg var(--gradient-space),rgba(0,255,0,.8),rgba(0,255,0,0) 75%),linear-gradient(
      180deg var(--gradient-space),rgba(0,255,255,.8),rgba(0,255,255,0) 75%),linear-gradient(
      240deg var(--gradient-space),rgba(0,0,255,.8),rgba(0,0,255,0) 75%),linear-gradient(
      300deg var(--gradient-space),rgba(255,0,255,.8),rgba(255,0,255,0) 75%);
  --gradient-19:linear-gradient(
      to bottom right var(--gradient-space),#ffe259,#ffa751);
  --gradient-20:conic-gradient(
      from -135deg at -10% center var(--gradient-space),orange,#ff7715,#ff522a,#ff3f47,#ff5482,#ff69b4);
  --gradient-21:conic-gradient(
      from -90deg at 25% 115% var(--gradient-space),red,#f06,#f0c,#c0f,#60f,#00f,#00f,#00f,#00f);
  --gradient-22:linear-gradient(
      to bottom right var(--gradient-space),#acb6e5,#86fde8);
  --gradient-23:linear-gradient(
      to bottom right var(--gradient-space),#536976,#292e49);
  --gradient-24:conic-gradient(
      from .5turn at 0% 0% var(--gradient-space),#00c476,10%,#82b0ff,90%,#00c476);
  --gradient-25:conic-gradient(
      at 125% 50% var(--gradient-space),#b78cf7,#ff7c94,#ffcf0d,#ff7c94,#b78cf7);
  --gradient-26:linear-gradient(
      to bottom right var(--gradient-space),#9796f0,#fbc7d4);
  --gradient-27:conic-gradient(
      from .5turn at bottom left var(--gradient-space),#ff1493,#639);
  --gradient-28:conic-gradient(
      from -90deg at 50% 105% var(--gradient-space),#fff,orchid);
  --gradient-29:radial-gradient(
      circle at top right var(--gradient-space),#bfb3ff,rgba(191,179,255,0)),radial-gradient(
      circle at bottom left var(--gradient-space),#86acf9,rgba(134,172,249,0));
  --gradient-30:radial-gradient(
      circle at top right var(--gradient-space),#00ff80,rgba(0,255,128,0)),radial-gradient(
      circle at bottom left var(--gradient-space),#adffd6,rgba(173,255,214,0));
  --noise-1:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.005' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
  --noise-2:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.05' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
  --noise-3:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.25' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
  --noise-4:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
  --noise-5:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
  --noise-filter-1:contrast(300%) brightness(100%);
  --noise-filter-2:contrast(200%) brightness(150%);
  --noise-filter-3:contrast(200%) brightness(250%);
  --noise-filter-4:contrast(200%) brightness(500%);
  --noise-filter-5:contrast(200%) brightness(1000%);
  --animation-fade-in:fade-in .5s var(--ease-3);
  --animation-fade-in-bloom:fade-in-bloom 2s var(--ease-3);
  --animation-fade-out:fade-out .5s var(--ease-3);
  --animation-fade-out-bloom:fade-out-bloom 2s var(--ease-3);
  --animation-scale-up:scale-up .5s var(--ease-3);
  --animation-scale-down:scale-down .5s var(--ease-3);
  --animation-slide-out-up:slide-out-up .5s var(--ease-3);
  --animation-slide-out-down:slide-out-down .5s var(--ease-3);
  --animation-slide-out-right:slide-out-right .5s var(--ease-3);
  --animation-slide-out-left:slide-out-left .5s var(--ease-3);
  --animation-slide-in-up:slide-in-up .5s var(--ease-3);
  --animation-slide-in-down:slide-in-down .5s var(--ease-3);
  --animation-slide-in-right:slide-in-right .5s var(--ease-3);
  --animation-slide-in-left:slide-in-left .5s var(--ease-3);
  --animation-shake-x:shake-x .75s var(--ease-out-5);
  --animation-shake-y:shake-y .75s var(--ease-out-5);
  --animation-shake-z:shake-z 1s var(--ease-in-out-3);
  --animation-spin:spin 2s linear infinite;
  --animation-ping:ping 5s var(--ease-out-3) infinite;
  --animation-blink:blink 1s var(--ease-out-3) infinite;
  --animation-float:float 3s var(--ease-in-out-3) infinite;
  --animation-bounce:bounce 2s var(--ease-squish-2) infinite;
  --animation-pulse:pulse 2s var(--ease-out-3) infinite;
  --border-size-1:1px;
  --border-size-2:2px;
  --border-size-3:5px;
  --border-size-4:10px;
  --border-size-5:25px;
  --radius-1:2px;
  --radius-2:5px;
  --radius-3:1rem;
  --radius-4:2rem;
  --radius-5:4rem;
  --radius-6:8rem;
  --radius-drawn-1:255px 15px 225px 15px/15px 225px 15px 255px;
  --radius-drawn-2:125px 10px 20px 185px/25px 205px 205px 25px;
  --radius-drawn-3:15px 255px 15px 225px/225px 15px 255px 15px;
  --radius-drawn-4:15px 25px 155px 25px/225px 150px 25px 115px;
  --radius-drawn-5:250px 25px 15px 20px/15px 80px 105px 115px;
  --radius-drawn-6:28px 100px 20px 15px/150px 30px 205px 225px;
  --radius-round:1e5px;
  --radius-blob-1:30% 70% 70% 30%/53% 30% 70% 47%;
  --radius-blob-2:53% 47% 34% 66%/63% 46% 54% 37%;
  --radius-blob-3:37% 63% 56% 44%/49% 56% 44% 51%;
  --radius-blob-4:63% 37% 37% 63%/43% 37% 63% 57%;
  --radius-blob-5:49% 51% 48% 52%/57% 44% 56% 43%;
  --radius-conditional-1:clamp(0px,calc(100vw - 100%) * 1e5,var(--radius-1));
  --radius-conditional-2:clamp(0px,calc(100vw - 100%) * 1e5,var(--radius-2));
  --radius-conditional-3:clamp(0px,calc(100vw - 100%) * 1e5,var(--radius-3));
  --radius-conditional-4:clamp(0px,calc(100vw - 100%) * 1e5,var(--radius-4));
  --radius-conditional-5:clamp(0px,calc(100vw - 100%) * 1e5,var(--radius-5));
  --radius-conditional-6:clamp(0px,calc(100vw - 100%) * 1e5,var(--radius-6));
  --palette-hue:250;
  --palette-hue-rotate-by:0;
  --palette-chroma:0.15;
  --color-1:oklch(98% calc(var(--palette-chroma)*0.03) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*0));
  --color-2:oklch(97% calc(var(--palette-chroma)*0.06) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*1));
  --color-3:oklch(93% calc(var(--palette-chroma)*0.1) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*2));
  --color-4:oklch(84% calc(var(--palette-chroma)*0.12) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*3));
  --color-5:oklch(80% calc(var(--palette-chroma)*0.16) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*4));
  --color-6:oklch(71% calc(var(--palette-chroma)*0.19) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*5));
  --color-7:oklch(66% calc(var(--palette-chroma)*0.2) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*6));
  --color-8:oklch(58% calc(var(--palette-chroma)*0.21) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*7));
  --color-9:oklch(53% calc(var(--palette-chroma)*0.2) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*8));
  --color-10:oklch(49% calc(var(--palette-chroma)*0.19) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*9));
  --color-11:oklch(42% calc(var(--palette-chroma)*0.17) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*10));
  --color-12:oklch(35% calc(var(--palette-chroma)*0.15) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*11));
  --color-13:oklch(27% calc(var(--palette-chroma)*0.12) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*12));
  --color-14:oklch(20% calc(var(--palette-chroma)*0.09) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*13));
  --color-15:oklch(16% calc(var(--palette-chroma)*0.07) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*14));
  --color-16:oklch(10% calc(var(--palette-chroma)*0.05) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*15));
}
@media (prefers-color-scheme: dark) {
  :where(html[_ngcontent-%COMP%]) {
    --shadow-color:220 40% 2%;
    --shadow-strength:25%;
    --inner-shadow-highlight:inset 0 -.5px 0 0 hsla(0,0%,100%,.067),inset 0 .5px 0 0 rgba(0,0,0,.467);
  }
}
@supports (background:linear-gradient(to right in oklab, #000, #fff)) {
  :where(html[_ngcontent-%COMP%]) {
    --gradient-space:in oklab;
  }
}
@keyframes _ngcontent-%COMP%_fade-in {
  to {
    opacity: 1;
  }
}
@keyframes _ngcontent-%COMP%_fade-in-bloom {
  0% {
    filter: brightness(1) blur(20px);
    opacity: 0;
  }
  10% {
    filter: brightness(2) blur(10px);
    opacity: 1;
  }
  to {
    filter: brightness(1) blur(0);
    opacity: 1;
  }
}
@keyframes _ngcontent-%COMP%_fade-out {
  to {
    opacity: 0;
  }
}
@keyframes _ngcontent-%COMP%_fade-out-bloom {
  to {
    filter: brightness(1) blur(20px);
    opacity: 0;
  }
  10% {
    filter: brightness(2) blur(10px);
    opacity: 1;
  }
  0% {
    filter: brightness(1) blur(0);
    opacity: 1;
  }
}
@keyframes _ngcontent-%COMP%_scale-up {
  to {
    transform: scale(1.25);
  }
}
@keyframes _ngcontent-%COMP%_scale-down {
  to {
    transform: scale(.75);
  }
}
@keyframes _ngcontent-%COMP%_slide-out-up {
  to {
    transform: translateY(-100%);
  }
}
@keyframes _ngcontent-%COMP%_slide-out-down {
  to {
    transform: translateY(100%);
  }
}
@keyframes _ngcontent-%COMP%_slide-out-right {
  to {
    transform: translateX(100%);
  }
}
@keyframes _ngcontent-%COMP%_slide-out-left {
  to {
    transform: translateX(-100%);
  }
}
@keyframes _ngcontent-%COMP%_slide-in-up {
  0% {
    transform: translateY(100%);
  }
}
@keyframes _ngcontent-%COMP%_slide-in-down {
  0% {
    transform: translateY(-100%);
  }
}
@keyframes _ngcontent-%COMP%_slide-in-right {
  0% {
    transform: translateX(-100%);
  }
}
@keyframes _ngcontent-%COMP%_slide-in-left {
  0% {
    transform: translateX(100%);
  }
}
@keyframes _ngcontent-%COMP%_shake-x {
  0%, to {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-5%);
  }
  40% {
    transform: translateX(5%);
  }
  60% {
    transform: translateX(-5%);
  }
  80% {
    transform: translateX(5%);
  }
}
@keyframes _ngcontent-%COMP%_shake-y {
  0%, to {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-5%);
  }
  40% {
    transform: translateY(5%);
  }
  60% {
    transform: translateY(-5%);
  }
  80% {
    transform: translateY(5%);
  }
}
@keyframes _ngcontent-%COMP%_shake-z {
  0%, to {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(-2deg);
  }
  40% {
    transform: rotate(2deg);
  }
  60% {
    transform: rotate(-2deg);
  }
  80% {
    transform: rotate(2deg);
  }
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(1turn);
  }
}
@keyframes _ngcontent-%COMP%_ping {
  90%, to {
    opacity: 0;
    transform: scale(2);
  }
}
@keyframes _ngcontent-%COMP%_blink {
  0%, to {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
@keyframes _ngcontent-%COMP%_float {
  50% {
    transform: translateY(-25%);
  }
}
@keyframes _ngcontent-%COMP%_bounce {
  25% {
    transform: translateY(-20%);
  }
  40% {
    transform: translateY(-3%);
  }
  0%, 60%, to {
    transform: translateY(0);
  }
}
@keyframes _ngcontent-%COMP%_pulse {
  50% {
    transform: scale(.9);
  }
}
@media (prefers-color-scheme: dark) {
  @keyframes fade-in-bloom {
    0% {
      filter: brightness(1) blur(20px);
      opacity: 0;
    }
    10% {
      filter: brightness(.5) blur(10px);
      opacity: 1;
    }
    to {
      filter: brightness(1) blur(0);
      opacity: 1;
    }
  }
}
@media (prefers-color-scheme: dark) {
  @keyframes fade-out-bloom {
    to {
      filter: brightness(1) blur(20px);
      opacity: 0;
    }
    10% {
      filter: brightness(.5) blur(10px);
      opacity: 1;
    }
    0% {
      filter: brightness(1) blur(0);
      opacity: 1;
    }
  }
}


:where(html[_ngcontent-%COMP%]) {
  --csstools-color-scheme--light:initial;
  --link:var(--indigo-7);
  --link-visited:var(--purple-7);
  --text-1:var(--gray-12);
  --text-2:var(--gray-7);
  --surface-1:var(--gray-0);
  --surface-2:var(--gray-2);
  --surface-3:var(--gray-3);
  --surface-4:var(--gray-4);
  --scrollthumb-color:var(--gray-7);
  -webkit-text-size-adjust: none;
  accent-color: var(--brand,var(--link));
  background-color: var(--surface-1);
  block-size: 100%;
  caret-color: var(--brand,var(--link));
  color: var(--text-1);
  color-scheme: light;
  font-family: var(--font-system-ui);
  line-height: var(--font-lineheight-3);
  scrollbar-color: var(--scrollthumb-color) transparent;
}
@media (dynamic-range: high) or (color-gamut: p3) {
  @supports (color:color(display-p3 0 0 0)) {
    :where(html[_ngcontent-%COMP%]) {
      --link:color(display-p3 .1 .39 1);
      --link-visited:color(display-p3 .6 .2 1);
    }
  }
}
:where(html[_ngcontent-%COMP%])   :where(dialog[_ngcontent-%COMP%]) {
  background-color: var(--surface-1);
}
:where(html[_ngcontent-%COMP%])   :where(button[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]) {
  --_highlight:var(--_highlight-light);
  --_bg:var(--_bg-light);
  --_ink-shadow:var(--_ink-shadow-light);
}
:where(html[_ngcontent-%COMP%])   :where(button[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%])   :where([type=reset][_ngcontent-%COMP%]) {
  --_text:var(--red-6);
  --_border:var(--red-3);
}
:where(html[_ngcontent-%COMP%])   [disabled][_ngcontent-%COMP%]:where(button, input[type=button], .btn) {
  --_text:var(--gray-6);
}
:where(html[_ngcontent-%COMP%])   [disabled][_ngcontent-%COMP%]:where(button, input[type=submit], .btn) {
  --_text:var(--gray-6);
}
:where(html[_ngcontent-%COMP%])   [disabled][_ngcontent-%COMP%]:where(button, input[type=reset], .btn) {
  --_text:var(--gray-6);
}
:where(html[_ngcontent-%COMP%])   :where(textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not([type=button], [type=submit], [type=reset])) {
  background-color: var(--surface-2);
}
@media (prefers-color-scheme: dark) {
  :where(html[_ngcontent-%COMP%]) {
    --csstools-color-scheme--light: ;
    --link:var(--indigo-3);
    --link-visited:var(--purple-3);
    --text-1:var(--gray-1);
    --text-2:var(--gray-4);
    --surface-1:var(--gray-9);
    --surface-2:var(--gray-8);
    --surface-3:var(--gray-7);
    --surface-4:var(--gray-6);
    --scrollthumb-color:var(--gray-6);
    --shadow-strength:10%;
    --shadow-color:220 40% 2%;
    color-scheme: dark;
  }
}
:where(a[href][_ngcontent-%COMP%]) {
  color: var(--brand,var(--link));
}
:where(a[href][_ngcontent-%COMP%]):where([_ngcontent-%COMP%]:visited) {
  color: var(--link-visited);
}
[_ngcontent-%COMP%]:focus-visible {
  outline-color: var(--brand,var(--link));
}
*[_ngcontent-%COMP%], 
[_ngcontent-%COMP%]:after, 
[_ngcontent-%COMP%]:before {
  box-sizing: border-box;
}
:where([_ngcontent-%COMP%]:not(dialog)) {
  margin: 0;
}
:where([_ngcontent-%COMP%]:not(fieldset, progress, meter)) {
  background-origin: border-box;
  background-repeat: no-repeat;
  border-style: solid;
  border-width: 0;
}
@media (prefers-reduced-motion: no-preference) {
  :where(html[_ngcontent-%COMP%]) {
    scroll-behavior: smooth;
  }
}
@media (prefers-reduced-motion: no-preference) {
  :where([_ngcontent-%COMP%]:focus-visible) {
    transition: outline-offset 145ms var(--ease-2);
  }
  :where([_ngcontent-%COMP%]:not(:active):focus-visible) {
    transition-duration: .25s;
  }
}
:where([_ngcontent-%COMP%]:not(:active):focus-visible) {
  outline-offset: 5px;
}
:where(body[_ngcontent-%COMP%]) {
  min-block-size: 100%;
}
:where(h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]) {
  text-wrap: balance;
  font-weight: var(--font-weight-9);
  line-height: var(--font-lineheight-1);
}
:where(h1[_ngcontent-%COMP%]) {
  font-size: var(--font-size-8);
  max-inline-size: var(--size-header-1);
}
:where(h2[_ngcontent-%COMP%]) {
  font-size: var(--font-size-6);
  max-inline-size: var(--size-header-2);
}
:where(h3[_ngcontent-%COMP%]) {
  font-size: var(--font-size-5);
}
:where(h4[_ngcontent-%COMP%]) {
  font-size: var(--font-size-4);
}
:where(h5[_ngcontent-%COMP%]) {
  font-size: var(--font-size-3);
}
:where(h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], dt[_ngcontent-%COMP%]) {
  max-inline-size: var(--size-header-3);
}
:where(p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]) {
  font-size: var(--font-size-2);
}
:where(a[_ngcontent-%COMP%], u[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%]) {
  text-underline-offset: 1px;
}
@supports (-moz-appearance:none) {
  :where(a[_ngcontent-%COMP%], u[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%]) {
    text-underline-offset: 2px;
  }
}
:where(a[href][_ngcontent-%COMP%], area[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not([type=text], [type=email], [type=number], [type=password], [type=""], [type=tel], [type=url]), label[for][_ngcontent-%COMP%], select[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], [tabindex][_ngcontent-%COMP%]:not([tabindex*="-"], pre)) {
  cursor: pointer;
}
:where(a[href][_ngcontent-%COMP%], area[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], label[for][_ngcontent-%COMP%], select[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], [tabindex][_ngcontent-%COMP%]:not([tabindex*="-"])) {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
:where(a[_ngcontent-%COMP%]):where([href][_ngcontent-%COMP%]) {
  text-decoration-color: var(--indigo-2);
}
:where(a[_ngcontent-%COMP%]):where([href][_ngcontent-%COMP%]):where([_ngcontent-%COMP%]:visited) {
  text-decoration-color: var(--purple-2);
}
:where(a[_ngcontent-%COMP%]):where([_ngcontent-%COMP%]:not(:hover)) {
  text-decoration: inherit;
}
:where(img[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%]) {
  display: block;
}
:where(img[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%]) {
  block-size: auto;
  max-inline-size: 100%;
}
:where(input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%]), 
[_ngcontent-%COMP%]:where(input[type=file])::-webkit-file-upload-button {
  color: inherit;
  font: inherit;
  font-size: inherit;
  letter-spacing: inherit;
}
[_ngcontent-%COMP%]::placeholder {
  color: var(--gray-7);
  opacity: .75;
}
:where(input[_ngcontent-%COMP%]:not([type=range]), textarea[_ngcontent-%COMP%]) {
  padding-block: var(--size-1);
  padding-inline: var(--size-2);
}
:where(select[_ngcontent-%COMP%]) {
  field-sizing: content;
  padding-block: .75ch;
  padding-inline: var(--size-relative-4) 0;
}
:where(textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not([type=button], [type=submit], [type=reset])) {
  background-color: var(--surface-2);
  border-radius: var(--radius-2);
}
:where(textarea[_ngcontent-%COMP%]) {
  field-sizing: content;
  min-block-size: 2lh;
  min-inline-size: var(--size-content-1);
  resize: vertical;
}
:where(input[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%]) {
  block-size: var(--size-3);
  inline-size: var(--size-3);
}
:where(svg[_ngcontent-%COMP%]:not([width])) {
  inline-size: var(--size-10);
}
:where(code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]) {
  font-family: var(--font-monospace-code), monospace;
}
:where([_ngcontent-%COMP%]:not(pre)    > code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%]) {
  white-space: nowrap;
}
:where(pre[_ngcontent-%COMP%]) {
  direction: ltr;
  max-inline-size: max-content;
  min-inline-size: 0;
  white-space: pre;
  writing-mode: lr;
}
:where([_ngcontent-%COMP%]:not(pre)    > code[_ngcontent-%COMP%]) {
  background: var(--surface-2);
  border-radius: var(--radius-2);
  padding: var(--size-1) var(--size-2);
  writing-mode: lr;
}
:where(kbd[_ngcontent-%COMP%], var[_ngcontent-%COMP%]) {
  border-color: var(--surface-4);
  border-radius: var(--radius-2);
  border-width: var(--border-size-1);
  padding: var(--size-1) var(--size-2);
}
:where(mark[_ngcontent-%COMP%]) {
  border-radius: var(--radius-2);
  padding-inline: var(--size-1);
}
:where(ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]) {
  padding-inline-start: var(--size-8);
}
:where(li[_ngcontent-%COMP%]) {
  padding-inline-start: var(--size-2);
}
:where(li[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%]) {
  max-inline-size: var(--size-content-2);
}
:where(p[_ngcontent-%COMP%]) {
  text-wrap: pretty;
  max-inline-size: var(--size-content-3);
}
:where(dt[_ngcontent-%COMP%], summary[_ngcontent-%COMP%]) {
  font-weight: var(--font-weight-7);
}
:where(dt[_ngcontent-%COMP%]:not(:first-of-type)) {
  margin-block-start: var(--size-5);
}
:where(small[_ngcontent-%COMP%]) {
  font-size: max(.5em, var(--font-size-0));
  max-inline-size: var(--size-content-1);
}
:where(hr[_ngcontent-%COMP%]) {
  background-color: var(--surface-3);
  height: var(--border-size-2);
  margin-block: var(--size-fluid-5);
}
:where(figure[_ngcontent-%COMP%]) {
  display: grid;
  gap: var(--size-2);
  place-items: center;
}
:where(figure[_ngcontent-%COMP%])    > :where(figcaption[_ngcontent-%COMP%]) {
  text-wrap: balance;
  font-size: var(--font-size-1);
}
:where(blockquote[_ngcontent-%COMP%], [_ngcontent-%COMP%]:not(blockquote)    > cite[_ngcontent-%COMP%]) {
  border-inline-start-width: var(--border-size-3);
}
:where(blockquote[_ngcontent-%COMP%]) {
  display: grid;
  gap: var(--size-3);
  max-inline-size: var(--size-content-2);
  padding-block: var(--size-3);
  padding-inline: var(--size-4);
}
:where([_ngcontent-%COMP%]:not(blockquote)    > cite[_ngcontent-%COMP%]) {
  padding-inline-start: var(--size-2);
}
:where(summary[_ngcontent-%COMP%]) {
  background: var(--surface-3);
  border-radius: var(--radius-2);
  margin: calc(var(--size-2)*-1) calc(var(--size-3)*-1);
  padding: var(--size-2) var(--size-3);
}
:where(details[_ngcontent-%COMP%]) {
  background: var(--surface-2);
  border-radius: var(--radius-2);
  padding-block: var(--size-2);
  padding-inline: var(--size-3);
}
:where(details[open][_ngcontent-%COMP%]    > summary[_ngcontent-%COMP%]) {
  border-end-end-radius: 0;
  border-end-start-radius: 0;
  margin-bottom: var(--size-2);
}
:where(fieldset[_ngcontent-%COMP%]) {
  border: var(--border-size-1) solid var(--surface-4);
  border-radius: var(--radius-2);
}
:where(del[_ngcontent-%COMP%]) {
  background: var(--red-9);
  color: var(--red-2);
}
:where(ins[_ngcontent-%COMP%]) {
  background: var(--green-9);
  color: var(--green-1);
}
:where(abbr[_ngcontent-%COMP%]) {
  text-decoration-color: var(--blue-5);
}
:where(dialog[_ngcontent-%COMP%]) {
  background-color: var(--surface-1);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-6);
  color: inherit;
}
:where(menu[_ngcontent-%COMP%]) {
  display: flex;
  gap: var(--size-3);
  padding-inline-start: 0;
}
:where(sup[_ngcontent-%COMP%]) {
  font-size: .5em;
}
:where(table[_ngcontent-%COMP%]) {
  --nice-inner-radius:calc(var(--radius-3) - 2px);
  background: var(--surface-2);
  border: 1px solid var(--surface-2);
  border-radius: var(--radius-3);
  width: fit-content;
}
:where(table[_ngcontent-%COMP%]:not(:has(tfoot))   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child) {
  border-end-start-radius: var(--nice-inner-radius);
}
:where(table[_ngcontent-%COMP%]:not(:has(tfoot))   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child) {
  border-end-end-radius: var(--nice-inner-radius);
}
:where(table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child) {
  border-start-start-radius: var(--nice-inner-radius);
}
:where(table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child) {
  border-start-end-radius: var(--nice-inner-radius);
}
:where(tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   th[_ngcontent-%COMP%]:first-of-type) {
  border-end-start-radius: var(--nice-inner-radius);
}
:where(tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-of-type) {
  border-end-start-radius: var(--nice-inner-radius);
}
:where(tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   th[_ngcontent-%COMP%]:last-of-type) {
  border-end-end-radius: var(--nice-inner-radius);
}
:where(tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-of-type) {
  border-end-end-radius: var(--nice-inner-radius);
}
:where(th[_ngcontent-%COMP%]) {
  background-color: var(--surface-2);
  color: var(--text-1);
}
:where(table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.does-not-exist):focus-visible) {
  outline-offset: -2px;
}
:where(table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.does-not-exist):focus-visible) {
  outline-offset: -2px;
}
:where(table[_ngcontent-%COMP%]   [contenteditable][_ngcontent-%COMP%]:focus-visible) {
  outline-offset: -2px;
}
:where(td[_ngcontent-%COMP%]) {
  text-wrap: pretty;
  background: var(--surface-1);
  max-inline-size: var(--size-content-2);
}
:where(td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]) {
  padding: var(--size-2);
  text-align: left;
}
:where(td[_ngcontent-%COMP%]:not([align])) {
  text-align: center;
}
:where(th[_ngcontent-%COMP%]:not([align])) {
  text-align: center;
}
:where(thead[_ngcontent-%COMP%]) {
  border-collapse: collapse;
}
:where(table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]), 
[_ngcontent-%COMP%]:where(tbody tr:nth-child(2n):hover td) {
  background-color: var(--surface-3);
}
:where(table[_ngcontent-%COMP%]    > caption[_ngcontent-%COMP%]) {
  margin: var(--size-3);
}
:where(tfoot[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]) {
  padding-block: var(--size-1);
  padding-inline: var(--size-3);
}
@media (prefers-color-scheme: dark) {
  :where(textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not([type=button], [type=submit], [type=reset])) {
    background-color: #171a1c;
  }
  :where(dialog[_ngcontent-%COMP%]) {
    background-color: var(--surface-2);
  }
  [_ngcontent-%COMP%]::placeholder {
    color: var(--gray-6);
  }
}


[_nghost-%COMP%] {
  display: block;
}
div.cmdRow[_ngcontent-%COMP%], 
td[_ngcontent-%COMP%]:first-child {
  display: flex;
  gap: 1ch;
}
td[_ngcontent-%COMP%]:first-child   button[_ngcontent-%COMP%] {
  width: 2.3rem;
  aspect-ratio: 1;
  border-radius: 50%;
}
table[_ngcontent-%COMP%] {
  margin-top: var(--size-2);
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
}
tr[_ngcontent-%COMP%]:nth-child(even) {
  background-color: var(--surface-1);
}
tr[_ngcontent-%COMP%]:nth-child(odd) {
  background-color: var(--surface-0);
}`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndexdbComponent, [{
    type: Component,
    args: [{ selector: "se-indexdb", imports: [EditRecordComponent], template: `
    <h2>Sample with event-source DB</h2>
    <div class="cmdRow">
      <button (click)="newRow()">New Row</button>
      <select (change)="currentTable.set($any($event.target).value)">
        @for (table of availableTables(); track $index) {
          <option [selected]="currentTable() === table">{{ table }}</option>
        }
      </select>
    </div>
    <table>
      <thead>
        <tr>
          <th></th>
          @for (col of state().cols; track $index) {
            <th>{{ col }}</th>
          }
        </tr>
      </thead>
      <tbody>
        @for (row of state().rows; track $index) {
          <tr>
            <td>
              <button (click)="edit(row().id)">\u270F\uFE0F</button>
              <button (click)="del(row().id)">\u{1F5D1}\uFE0F</button>
            </td>
            @for (col of state().cols; track $index) {
              <td>{{ row()[col] }}</td>
            }
          </tr>
        }
      </tbody>
    </table>
    <dialog #dlg>
      @if (state().activeId() !== undefined) {
        <se-edit-record
          [id]="state().activeId()!"
          [fields]="state().cols"
          (done)="dlg.close()"
        />
      }
    </dialog>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [`/* node_modules/.pnpm/open-props@1.7.23/node_modules/open-props/open-props.min.css */
:where(html) {
  --font-system-ui:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;
  --font-transitional:Charter,Bitstream Charter,Sitka Text,Cambria,serif;
  --font-old-style:Iowan Old Style,Palatino Linotype,URW Palladio L,P052,serif;
  --font-humanist:Seravek,Gill Sans Nova,Ubuntu,Calibri,DejaVu Sans,source-sans-pro,sans-serif;
  --font-geometric-humanist:Avenir,Montserrat,Corbel,URW Gothic,source-sans-pro,sans-serif;
  --font-classical-humanist:Optima,Candara,Noto Sans,source-sans-pro,sans-serif;
  --font-neo-grotesque:Inter,Roboto,Helvetica Neue,Arial Nova,Nimbus Sans,Arial,sans-serif;
  --font-monospace-slab-serif:Nimbus Mono PS,Courier New,monospace;
  --font-monospace-code:Dank Mono,Operator Mono,Inconsolata,Fira Mono,ui-monospace,SF Mono,Monaco,Droid Sans Mono,Source Code Pro,Cascadia Code,Menlo,Consolas,DejaVu Sans Mono,monospace;
  --font-industrial:Bahnschrift,DIN Alternate,Franklin Gothic Medium,Nimbus Sans Narrow,sans-serif-condensed,sans-serif;
  --font-rounded-sans:ui-rounded,Hiragino Maru Gothic ProN,Quicksand,Comfortaa,Manjari,Arial Rounded MT,Arial Rounded MT Bold,Calibri,source-sans-pro,sans-serif;
  --font-slab-serif:Rockwell,Rockwell Nova,Roboto Slab,DejaVu Serif,Sitka Small,serif;
  --font-antique:Superclarendon,Bookman Old Style,URW Bookman,URW Bookman L,Georgia Pro,Georgia,serif;
  --font-didone:Didot,Bodoni MT,Noto Serif Display,URW Palladio L,P052,Sylfaen,serif;
  --font-handwritten:Segoe Print,Bradley Hand,Chilanka,TSCu_Comic,casual,cursive;
  --font-sans:var(--font-system-ui);
  --font-serif:ui-serif,serif;
  --font-mono:var(--font-monospace-code);
  --font-weight-1:100;
  --font-weight-2:200;
  --font-weight-3:300;
  --font-weight-4:400;
  --font-weight-5:500;
  --font-weight-6:600;
  --font-weight-7:700;
  --font-weight-8:800;
  --font-weight-9:900;
  --font-lineheight-00:.95;
  --font-lineheight-0:1.1;
  --font-lineheight-1:1.25;
  --font-lineheight-2:1.375;
  --font-lineheight-3:1.5;
  --font-lineheight-4:1.75;
  --font-lineheight-5:2;
  --font-letterspacing-0:-.05em;
  --font-letterspacing-1:.025em;
  --font-letterspacing-2:.050em;
  --font-letterspacing-3:.075em;
  --font-letterspacing-4:.150em;
  --font-letterspacing-5:.500em;
  --font-letterspacing-6:.750em;
  --font-letterspacing-7:1em;
  --font-size-00:.5rem;
  --font-size-0:.75rem;
  --font-size-1:1rem;
  --font-size-2:1.1rem;
  --font-size-3:1.25rem;
  --font-size-4:1.5rem;
  --font-size-5:2rem;
  --font-size-6:2.5rem;
  --font-size-7:3rem;
  --font-size-8:3.5rem;
  --font-size-fluid-0:max(.75rem,min(2vw,1rem));
  --font-size-fluid-1:max(1rem,min(4vw,1.5rem));
  --font-size-fluid-2:max(1.5rem,min(6vw,2.5rem));
  --font-size-fluid-3:max(2rem,min(9vw,3.5rem));
  --size-000:-.5rem;
  --size-00:-.25rem;
  --size-1:.25rem;
  --size-2:.5rem;
  --size-3:1rem;
  --size-4:1.25rem;
  --size-5:1.5rem;
  --size-6:1.75rem;
  --size-7:2rem;
  --size-8:3rem;
  --size-9:4rem;
  --size-10:5rem;
  --size-11:7.5rem;
  --size-12:10rem;
  --size-13:15rem;
  --size-14:20rem;
  --size-15:30rem;
  --size-px-000:-8px;
  --size-px-00:-4px;
  --size-px-1:4px;
  --size-px-2:8px;
  --size-px-3:16px;
  --size-px-4:20px;
  --size-px-5:24px;
  --size-px-6:28px;
  --size-px-7:32px;
  --size-px-8:48px;
  --size-px-9:64px;
  --size-px-10:80px;
  --size-px-11:120px;
  --size-px-12:160px;
  --size-px-13:240px;
  --size-px-14:320px;
  --size-px-15:480px;
  --size-fluid-1:max(.5rem,min(1vw,1rem));
  --size-fluid-2:max(1rem,min(2vw,1.5rem));
  --size-fluid-3:max(1.5rem,min(3vw,2rem));
  --size-fluid-4:max(2rem,min(4vw,3rem));
  --size-fluid-5:max(4rem,min(5vw,5rem));
  --size-fluid-6:max(5rem,min(7vw,7.5rem));
  --size-fluid-7:max(7.5rem,min(10vw,10rem));
  --size-fluid-8:max(10rem,min(20vw,15rem));
  --size-fluid-9:max(15rem,min(30vw,20rem));
  --size-fluid-10:max(20rem,min(40vw,30rem));
  --size-content-1:20ch;
  --size-content-2:45ch;
  --size-content-3:60ch;
  --size-header-1:20ch;
  --size-header-2:25ch;
  --size-header-3:35ch;
  --size-xxs:240px;
  --size-xs:360px;
  --size-sm:480px;
  --size-md:768px;
  --size-lg:1024px;
  --size-xl:1440px;
  --size-xxl:1920px;
  --size-relative-000:-.5ch;
  --size-relative-00:-.25ch;
  --size-relative-1:.25ch;
  --size-relative-2:.5ch;
  --size-relative-3:1ch;
  --size-relative-4:1.25ch;
  --size-relative-5:1.5ch;
  --size-relative-6:1.75ch;
  --size-relative-7:2ch;
  --size-relative-8:3ch;
  --size-relative-9:4ch;
  --size-relative-10:5ch;
  --size-relative-11:7.5ch;
  --size-relative-12:10ch;
  --size-relative-13:15ch;
  --size-relative-14:20ch;
  --size-relative-15:30ch;
  --ease-1:cubic-bezier(.25,0,.5,1);
  --ease-2:cubic-bezier(.25,0,.4,1);
  --ease-3:cubic-bezier(.25,0,.3,1);
  --ease-4:cubic-bezier(.25,0,.2,1);
  --ease-5:cubic-bezier(.25,0,.1,1);
  --ease-in-1:cubic-bezier(.25,0,1,1);
  --ease-in-2:cubic-bezier(.50,0,1,1);
  --ease-in-3:cubic-bezier(.70,0,1,1);
  --ease-in-4:cubic-bezier(.90,0,1,1);
  --ease-in-5:cubic-bezier(1,0,1,1);
  --ease-out-1:cubic-bezier(0,0,.75,1);
  --ease-out-2:cubic-bezier(0,0,.50,1);
  --ease-out-3:cubic-bezier(0,0,.3,1);
  --ease-out-4:cubic-bezier(0,0,.1,1);
  --ease-out-5:cubic-bezier(0,0,0,1);
  --ease-in-out-1:cubic-bezier(.1,0,.9,1);
  --ease-in-out-2:cubic-bezier(.3,0,.7,1);
  --ease-in-out-3:cubic-bezier(.5,0,.5,1);
  --ease-in-out-4:cubic-bezier(.7,0,.3,1);
  --ease-in-out-5:cubic-bezier(.9,0,.1,1);
  --ease-elastic-out-1:cubic-bezier(.5,.75,.75,1.25);
  --ease-elastic-out-2:cubic-bezier(.5,1,.75,1.25);
  --ease-elastic-out-3:cubic-bezier(.5,1.25,.75,1.25);
  --ease-elastic-out-4:cubic-bezier(.5,1.5,.75,1.25);
  --ease-elastic-out-5:cubic-bezier(.5,1.75,.75,1.25);
  --ease-elastic-in-1:cubic-bezier(.5,-0.25,.75,1);
  --ease-elastic-in-2:cubic-bezier(.5,-0.50,.75,1);
  --ease-elastic-in-3:cubic-bezier(.5,-0.75,.75,1);
  --ease-elastic-in-4:cubic-bezier(.5,-1.00,.75,1);
  --ease-elastic-in-5:cubic-bezier(.5,-1.25,.75,1);
  --ease-elastic-in-out-1:cubic-bezier(.5,-.1,.1,1.5);
  --ease-elastic-in-out-2:cubic-bezier(.5,-.3,.1,1.5);
  --ease-elastic-in-out-3:cubic-bezier(.5,-.5,.1,1.5);
  --ease-elastic-in-out-4:cubic-bezier(.5,-.7,.1,1.5);
  --ease-elastic-in-out-5:cubic-bezier(.5,-.9,.1,1.5);
  --ease-step-1:steps(2);
  --ease-step-2:steps(3);
  --ease-step-3:steps(4);
  --ease-step-4:steps(7);
  --ease-step-5:steps(10);
  --ease-elastic-1:var(--ease-elastic-out-1);
  --ease-elastic-2:var(--ease-elastic-out-2);
  --ease-elastic-3:var(--ease-elastic-out-3);
  --ease-elastic-4:var(--ease-elastic-out-4);
  --ease-elastic-5:var(--ease-elastic-out-5);
  --ease-squish-1:var(--ease-elastic-in-out-1);
  --ease-squish-2:var(--ease-elastic-in-out-2);
  --ease-squish-3:var(--ease-elastic-in-out-3);
  --ease-squish-4:var(--ease-elastic-in-out-4);
  --ease-squish-5:var(--ease-elastic-in-out-5);
  --ease-spring-1:linear(0,0.006,0.025 2.8%,0.101 6.1%,0.539 18.9%,0.721 25.3%,0.849 31.5%,0.937 38.1%,0.968 41.8%,0.991 45.7%,1.006 50.1%,1.015 55%,1.017 63.9%,1.001);
  --ease-spring-2:linear(0,0.007,0.029 2.2%,0.118 4.7%,0.625 14.4%,0.826 19%,0.902,0.962,1.008 26.1%,1.041 28.7%,1.064 32.1%,1.07 36%,1.061 40.5%,1.015 53.4%,0.999 61.6%,0.995 71.2%,1);
  --ease-spring-3:linear(0,0.009,0.035 2.1%,0.141 4.4%,0.723 12.9%,0.938 16.7%,1.017,1.077,1.121,1.149 24.3%,1.159,1.163,1.161,1.154 29.9%,1.129 32.8%,1.051 39.6%,1.017 43.1%,0.991,0.977 51%,0.974 53.8%,0.975 57.1%,0.997 69.8%,1.003 76.9%,1);
  --ease-spring-4:linear(0,0.009,0.037 1.7%,0.153 3.6%,0.776 10.3%,1.001,1.142 16%,1.185,1.209 19%,1.215 19.9% 20.8%,1.199,1.165 25%,1.056 30.3%,1.008 33%,0.973,0.955 39.2%,0.953 41.1%,0.957 43.3%,0.998 53.3%,1.009 59.1% 63.7%,0.998 78.9%,1);
  --ease-spring-5:linear(0,0.01,0.04 1.6%,0.161 3.3%,0.816 9.4%,1.046,1.189 14.4%,1.231,1.254 17%,1.259,1.257 18.6%,1.236,1.194 22.3%,1.057 27%,0.999 29.4%,0.955 32.1%,0.942,0.935 34.9%,0.933,0.939 38.4%,1 47.3%,1.011,1.017 52.6%,1.016 56.4%,1 65.2%,0.996 70.2%,1.001 87.2%,1);
  --ease-bounce-1:linear(0,0.004,0.016,0.035,0.063,0.098,0.141,0.191,0.25,0.316,0.391 36.8%,0.563,0.766,1 58.8%,0.946,0.908 69.1%,0.895,0.885,0.879,0.878,0.879,0.885,0.895,0.908 89.7%,0.946,1);
  --ease-bounce-2:linear(0,0.004,0.016,0.035,0.063,0.098,0.141 15.1%,0.25,0.391,0.562,0.765,1,0.892 45.2%,0.849,0.815,0.788,0.769,0.757,0.753,0.757,0.769,0.788,0.815,0.85,0.892 75.2%,1 80.2%,0.973,0.954,0.943,0.939,0.943,0.954,0.973,1);
  --ease-bounce-3:linear(0,0.004,0.016,0.035,0.062,0.098,0.141 11.4%,0.25,0.39,0.562,0.764,1 30.3%,0.847 34.8%,0.787,0.737,0.699,0.672,0.655,0.65,0.656,0.672,0.699,0.738,0.787,0.847 61.7%,1 66.2%,0.946,0.908,0.885 74.2%,0.879,0.878,0.879,0.885 79.5%,0.908,0.946,1 87.4%,0.981,0.968,0.96,0.957,0.96,0.968,0.981,1);
  --ease-bounce-4:linear(0,0.004,0.016 3%,0.062,0.141,0.25,0.391,0.562 18.2%,1 24.3%,0.81,0.676 32.3%,0.629,0.595,0.575,0.568,0.575,0.595,0.629,0.676 48.2%,0.811,1 56.2%,0.918,0.86,0.825,0.814,0.825,0.86,0.918,1 77.2%,0.94 80.6%,0.925,0.92,0.925,0.94 87.5%,1 90.9%,0.974,0.965,0.974,1);
  --ease-bounce-5:linear(0,0.004,0.016 2.5%,0.063,0.141,0.25 10.1%,0.562,1 20.2%,0.783,0.627,0.534 30.9%,0.511,0.503,0.511,0.534 38%,0.627,0.782,1 48.7%,0.892,0.815,0.769 56.3%,0.757,0.753,0.757,0.769 61.3%,0.815,0.892,1 68.8%,0.908 72.4%,0.885,0.878,0.885,0.908 79.4%,1 83%,0.954 85.5%,0.943,0.939,0.943,0.954 90.5%,1 93%,0.977,0.97,0.977,1);
  --ease-circ-in:cubic-bezier(.6,.04,.98,.335);
  --ease-circ-in-out:cubic-bezier(.785,.135,.15,.86);
  --ease-circ-out:cubic-bezier(.075,.82,.165,1);
  --ease-cubic-in:cubic-bezier(.55,.055,.675,.19);
  --ease-cubic-in-out:cubic-bezier(.645,.045,.355,1);
  --ease-cubic-out:cubic-bezier(.215,.61,.355,1);
  --ease-expo-in:cubic-bezier(.95,.05,.795,.035);
  --ease-expo-in-out:cubic-bezier(1,0,0,1);
  --ease-expo-out:cubic-bezier(.19,1,.22,1);
  --ease-quad-in:cubic-bezier(.55,.085,.68,.53);
  --ease-quad-in-out:cubic-bezier(.455,.03,.515,.955);
  --ease-quad-out:cubic-bezier(.25,.46,.45,.94);
  --ease-quart-in:cubic-bezier(.895,.03,.685,.22);
  --ease-quart-in-out:cubic-bezier(.77,0,.175,1);
  --ease-quart-out:cubic-bezier(.165,.84,.44,1);
  --ease-quint-in:cubic-bezier(.755,.05,.855,.06);
  --ease-quint-in-out:cubic-bezier(.86,0,.07,1);
  --ease-quint-out:cubic-bezier(.23,1,.32,1);
  --ease-sine-in:cubic-bezier(.47,0,.745,.715);
  --ease-sine-in-out:cubic-bezier(.445,.05,.55,.95);
  --ease-sine-out:cubic-bezier(.39,.575,.565,1);
  --layer-1:1;
  --layer-2:2;
  --layer-3:3;
  --layer-4:4;
  --layer-5:5;
  --layer-important:2147483647;
  --shadow-color:220 3% 15%;
  --shadow-strength:1%;
  --shadow-strength-3:calc(var(--shadow-strength) + 2%);
  --shadow-strength-4:calc(var(--shadow-strength) + 3%);
  --shadow-strength-5:calc(var(--shadow-strength) + 4%);
  --shadow-strength-6:calc(var(--shadow-strength) + 5%);
  --shadow-strength-7:calc(var(--shadow-strength) + 6%);
  --shadow-strength-8:calc(var(--shadow-strength) + 7%);
  --shadow-strength-10:calc(var(--shadow-strength) + 9%);
  --inner-shadow-highlight:inset 0 -.5px 0 0 #fff,inset 0 .5px 0 0 rgba(0,0,0,.067);
  --shadow-1:0 1px 2px -1px hsl(var(--shadow-color)/var(--shadow-strength-10));
  --shadow-2:0 3px 5px -2px hsl(var(--shadow-color)/var(--shadow-strength-4)),0 7px 14px -5px hsl(var(--shadow-color)/var(--shadow-strength-6));
  --shadow-3:0 -1px 3px 0 hsl(var(--shadow-color)/var(--shadow-strength-3)),0 1px 2px -5px hsl(var(--shadow-color)/var(--shadow-strength-3)),0 2px 5px -5px hsl(var(--shadow-color)/var(--shadow-strength-5)),0 4px 12px -5px hsl(var(--shadow-color)/var(--shadow-strength-6)),0 12px 15px -5px hsl(var(--shadow-color)/var(--shadow-strength-8));
  --shadow-4:0 -2px 5px 0 hsl(var(--shadow-color)/var(--shadow-strength-3)),0 1px 1px -2px hsl(var(--shadow-color)/var(--shadow-strength-4)),0 2px 2px -2px hsl(var(--shadow-color)/var(--shadow-strength-4)),0 5px 5px -2px hsl(var(--shadow-color)/var(--shadow-strength-5)),0 9px 9px -2px hsl(var(--shadow-color)/var(--shadow-strength-6)),0 16px 16px -2px hsl(var(--shadow-color)/var(--shadow-strength-7));
  --shadow-5:0 -1px 2px 0 hsl(var(--shadow-color)/var(--shadow-strength-3)),0 2px 1px -2px hsl(var(--shadow-color)/var(--shadow-strength-4)),0 5px 5px -2px hsl(var(--shadow-color)/var(--shadow-strength-4)),0 10px 10px -2px hsl(var(--shadow-color)/var(--shadow-strength-5)),0 20px 20px -2px hsl(var(--shadow-color)/var(--shadow-strength-6)),0 40px 40px -2px hsl(var(--shadow-color)/var(--shadow-strength-8));
  --shadow-6:0 -1px 2px 0 hsl(var(--shadow-color)/var(--shadow-strength-3)),0 3px 2px -2px hsl(var(--shadow-color)/var(--shadow-strength-4)),0 7px 5px -2px hsl(var(--shadow-color)/var(--shadow-strength-4)),0 12px 10px -2px hsl(var(--shadow-color)/var(--shadow-strength-5)),0 22px 18px -2px hsl(var(--shadow-color)/var(--shadow-strength-6)),0 41px 33px -2px hsl(var(--shadow-color)/var(--shadow-strength-7)),0 100px 80px -2px hsl(var(--shadow-color)/var(--shadow-strength-8));
  --inner-shadow-0:inset 0 0 0 1px hsl(var(--shadow-color)/var(--shadow-strength-10));
  --inner-shadow-1:inset 0 1px 2px 0 hsl(var(--shadow-color)/var(--shadow-strength-10)),var(--inner-shadow-highlight);
  --inner-shadow-2:inset 0 1px 4px 0 hsl(var(--shadow-color)/var(--shadow-strength-10)),var(--inner-shadow-highlight);
  --inner-shadow-3:inset 0 2px 8px 0 hsl(var(--shadow-color)/var(--shadow-strength-10)),var(--inner-shadow-highlight);
  --inner-shadow-4:inset 0 2px 14px 0 hsl(var(--shadow-color)/var(--shadow-strength-10)),var(--inner-shadow-highlight);
  --ratio-square:1;
  --ratio-landscape:4/3;
  --ratio-portrait:3/4;
  --ratio-widescreen:16/9;
  --ratio-ultrawide:18/5;
  --ratio-golden:1.6180/1;
  --gray-0:#f8f9fa;
  --gray-1:#f1f3f5;
  --gray-2:#e9ecef;
  --gray-3:#dee2e6;
  --gray-4:#ced4da;
  --gray-5:#adb5bd;
  --gray-6:#868e96;
  --gray-7:#495057;
  --gray-8:#343a40;
  --gray-9:#212529;
  --gray-10:#16191d;
  --gray-11:#0d0f12;
  --gray-12:#030507;
  --stone-0:#f8fafb;
  --stone-1:#f2f4f6;
  --stone-2:#ebedef;
  --stone-3:#e0e4e5;
  --stone-4:#d1d6d8;
  --stone-5:#b1b6b9;
  --stone-6:#979b9d;
  --stone-7:#7e8282;
  --stone-8:#666968;
  --stone-9:#50514f;
  --stone-10:#3a3a37;
  --stone-11:#252521;
  --stone-12:#121210;
  --red-0:#fff5f5;
  --red-1:#ffe3e3;
  --red-2:#ffc9c9;
  --red-3:#ffa8a8;
  --red-4:#ff8787;
  --red-5:#ff6b6b;
  --red-6:#fa5252;
  --red-7:#f03e3e;
  --red-8:#e03131;
  --red-9:#c92a2a;
  --red-10:#b02525;
  --red-11:#962020;
  --red-12:#7d1a1a;
  --pink-0:#fff0f6;
  --pink-1:#ffdeeb;
  --pink-2:#fcc2d7;
  --pink-3:#faa2c1;
  --pink-4:#f783ac;
  --pink-5:#f06595;
  --pink-6:#e64980;
  --pink-7:#d6336c;
  --pink-8:#c2255c;
  --pink-9:#a61e4d;
  --pink-10:#8c1941;
  --pink-11:#731536;
  --pink-12:#59102a;
  --purple-0:#f8f0fc;
  --purple-1:#f3d9fa;
  --purple-2:#eebefa;
  --purple-3:#e599f7;
  --purple-4:#da77f2;
  --purple-5:#cc5de8;
  --purple-6:#be4bdb;
  --purple-7:#ae3ec9;
  --purple-8:#9c36b5;
  --purple-9:#862e9c;
  --purple-10:#702682;
  --purple-11:#5a1e69;
  --purple-12:#44174f;
  --violet-0:#f3f0ff;
  --violet-1:#e5dbff;
  --violet-2:#d0bfff;
  --violet-3:#b197fc;
  --violet-4:#9775fa;
  --violet-5:#845ef7;
  --violet-6:#7950f2;
  --violet-7:#7048e8;
  --violet-8:#6741d9;
  --violet-9:#5f3dc4;
  --violet-10:#5235ab;
  --violet-11:#462d91;
  --violet-12:#3a2578;
  --indigo-0:#edf2ff;
  --indigo-1:#dbe4ff;
  --indigo-2:#bac8ff;
  --indigo-3:#91a7ff;
  --indigo-4:#748ffc;
  --indigo-5:#5c7cfa;
  --indigo-6:#4c6ef5;
  --indigo-7:#4263eb;
  --indigo-8:#3b5bdb;
  --indigo-9:#364fc7;
  --indigo-10:#2f44ad;
  --indigo-11:#283a94;
  --indigo-12:#21307a;
  --blue-0:#e7f5ff;
  --blue-1:#d0ebff;
  --blue-2:#a5d8ff;
  --blue-3:#74c0fc;
  --blue-4:#4dabf7;
  --blue-5:#339af0;
  --blue-6:#228be6;
  --blue-7:#1c7ed6;
  --blue-8:#1971c2;
  --blue-9:#1864ab;
  --blue-10:#145591;
  --blue-11:#114678;
  --blue-12:#0d375e;
  --cyan-0:#e3fafc;
  --cyan-1:#c5f6fa;
  --cyan-2:#99e9f2;
  --cyan-3:#66d9e8;
  --cyan-4:#3bc9db;
  --cyan-5:#22b8cf;
  --cyan-6:#15aabf;
  --cyan-7:#1098ad;
  --cyan-8:#0c8599;
  --cyan-9:#0b7285;
  --cyan-10:#095c6b;
  --cyan-11:#074652;
  --cyan-12:#053038;
  --teal-0:#e6fcf5;
  --teal-1:#c3fae8;
  --teal-2:#96f2d7;
  --teal-3:#63e6be;
  --teal-4:#38d9a9;
  --teal-5:#20c997;
  --teal-6:#12b886;
  --teal-7:#0ca678;
  --teal-8:#099268;
  --teal-9:#087f5b;
  --teal-10:#066649;
  --teal-11:#054d37;
  --teal-12:#033325;
  --green-0:#ebfbee;
  --green-1:#d3f9d8;
  --green-2:#b2f2bb;
  --green-3:#8ce99a;
  --green-4:#69db7c;
  --green-5:#51cf66;
  --green-6:#40c057;
  --green-7:#37b24d;
  --green-8:#2f9e44;
  --green-9:#2b8a3e;
  --green-10:#237032;
  --green-11:#1b5727;
  --green-12:#133d1b;
  --lime-0:#f4fce3;
  --lime-1:#e9fac8;
  --lime-2:#d8f5a2;
  --lime-3:#c0eb75;
  --lime-4:#a9e34b;
  --lime-5:#94d82d;
  --lime-6:#82c91e;
  --lime-7:#74b816;
  --lime-8:#66a80f;
  --lime-9:#5c940d;
  --lime-10:#4c7a0b;
  --lime-11:#3c6109;
  --lime-12:#2c4706;
  --yellow-0:#fff9db;
  --yellow-1:#fff3bf;
  --yellow-2:#ffec99;
  --yellow-3:#ffe066;
  --yellow-4:#ffd43b;
  --yellow-5:#fcc419;
  --yellow-6:#fab005;
  --yellow-7:#f59f00;
  --yellow-8:#f08c00;
  --yellow-9:#e67700;
  --yellow-10:#b35c00;
  --yellow-11:#804200;
  --yellow-12:#663500;
  --orange-0:#fff4e6;
  --orange-1:#ffe8cc;
  --orange-2:#ffd8a8;
  --orange-3:#ffc078;
  --orange-4:#ffa94d;
  --orange-5:#ff922b;
  --orange-6:#fd7e14;
  --orange-7:#f76707;
  --orange-8:#e8590c;
  --orange-9:#d9480f;
  --orange-10:#bf400d;
  --orange-11:#99330b;
  --orange-12:#802b09;
  --choco-0:#fff8dc;
  --choco-1:#fce1bc;
  --choco-2:#f7ca9e;
  --choco-3:#f1b280;
  --choco-4:#e99b62;
  --choco-5:#df8545;
  --choco-6:#d46e25;
  --choco-7:#bd5f1b;
  --choco-8:#a45117;
  --choco-9:#8a4513;
  --choco-10:#703a13;
  --choco-11:#572f12;
  --choco-12:#3d210d;
  --brown-0:#faf4eb;
  --brown-1:#ede0d1;
  --brown-2:#e0cab7;
  --brown-3:#d3b79e;
  --brown-4:#c5a285;
  --brown-5:#b78f6d;
  --brown-6:#a87c56;
  --brown-7:#956b47;
  --brown-8:#825b3a;
  --brown-9:#6f4b2d;
  --brown-10:#5e3a21;
  --brown-11:#4e2b15;
  --brown-12:#422412;
  --sand-0:#f8fafb;
  --sand-1:#e6e4dc;
  --sand-2:#d5cfbd;
  --sand-3:#c2b9a0;
  --sand-4:#aea58c;
  --sand-5:#9a9178;
  --sand-6:#867c65;
  --sand-7:#736a53;
  --sand-8:#5f5746;
  --sand-9:#4b4639;
  --sand-10:#38352d;
  --sand-11:#252521;
  --sand-12:#121210;
  --camo-0:#f9fbe7;
  --camo-1:#e8ed9c;
  --camo-2:#d2df4e;
  --camo-3:#c2ce34;
  --camo-4:#b5bb2e;
  --camo-5:#a7a827;
  --camo-6:#999621;
  --camo-7:#8c851c;
  --camo-8:#7e7416;
  --camo-9:#6d6414;
  --camo-10:#5d5411;
  --camo-11:#4d460e;
  --camo-12:#36300a;
  --jungle-0:#ecfeb0;
  --jungle-1:#def39a;
  --jungle-2:#d0e884;
  --jungle-3:#c2dd6e;
  --jungle-4:#b5d15b;
  --jungle-5:#a8c648;
  --jungle-6:#9bbb36;
  --jungle-7:#8fb024;
  --jungle-8:#84a513;
  --jungle-9:#7a9908;
  --jungle-10:#658006;
  --jungle-11:#516605;
  --jungle-12:#3d4d04;
  --gradient-space: ;
  --gradient-1:linear-gradient(
      to bottom right var(--gradient-space),#1f005c,#5b0060,#870160,#ac255e,#ca485c,#e16b5c,#f39060,#ffb56b);
  --gradient-2:linear-gradient(
      to bottom right var(--gradient-space),#48005c,#8300e2,#a269ff);
  --gradient-3:radial-gradient(
      circle at top right var(--gradient-space),#0ff,rgba(0,255,255,0)),radial-gradient(
      circle at bottom left var(--gradient-space),#ff1492,rgba(255,20,146,0));
  --gradient-4:linear-gradient(
      to bottom right var(--gradient-space),#00f5a0,#00d9f5);
  --gradient-5:conic-gradient(
      from -270deg at 75% 110% var(--gradient-space),#f0f,#fffaf0);
  --gradient-6:conic-gradient(
      from -90deg at top left var(--gradient-space),#000,#fff);
  --gradient-7:linear-gradient(
      to bottom right var(--gradient-space),#72c6ef,#004e8f);
  --gradient-8:conic-gradient(
      from 90deg at 50% 0% var(--gradient-space),#111,50%,#222,#111);
  --gradient-9:conic-gradient(
      from .5turn at bottom center var(--gradient-space),#add8e6,#fff);
  --gradient-10:conic-gradient(
      from 90deg at 40% -25% var(--gradient-space),gold,#f79d03,#ee6907,#e6390a,#de0d0d,#d61039,#cf1261,#c71585,#cf1261,#d61039,#de0d0d,#ee6907,#f79d03,gold,gold,gold);
  --gradient-11:conic-gradient(
      at bottom left var(--gradient-space),#ff1493,cyan);
  --gradient-12:conic-gradient(
      from 90deg at 25% -10% var(--gradient-space),#ff4500,#d3f340,#7bee85,#afeeee,#7bee85);
  --gradient-13:radial-gradient(
      circle at 50% 200% var(--gradient-space),#000142,#3b0083,#b300c3,#ff059f,#ff4661,#ffad86,#fff3c7);
  --gradient-14:conic-gradient(
      at top right var(--gradient-space),lime,cyan);
  --gradient-15:linear-gradient(
      to bottom right var(--gradient-space),#c7d2fe,#fecaca,#fef3c7);
  --gradient-16:radial-gradient(
      circle at 50% -250% var(--gradient-space),#374151,#111827,#000);
  --gradient-17:conic-gradient(
      from -90deg at 50% -25% var(--gradient-space),blue,#8a2be2);
  --gradient-18:linear-gradient(
      0deg var(--gradient-space),rgba(255,0,0,.8),rgba(255,0,0,0) 75%),linear-gradient(
      60deg var(--gradient-space),rgba(255,255,0,.8),rgba(255,255,0,0) 75%),linear-gradient(
      120deg var(--gradient-space),rgba(0,255,0,.8),rgba(0,255,0,0) 75%),linear-gradient(
      180deg var(--gradient-space),rgba(0,255,255,.8),rgba(0,255,255,0) 75%),linear-gradient(
      240deg var(--gradient-space),rgba(0,0,255,.8),rgba(0,0,255,0) 75%),linear-gradient(
      300deg var(--gradient-space),rgba(255,0,255,.8),rgba(255,0,255,0) 75%);
  --gradient-19:linear-gradient(
      to bottom right var(--gradient-space),#ffe259,#ffa751);
  --gradient-20:conic-gradient(
      from -135deg at -10% center var(--gradient-space),orange,#ff7715,#ff522a,#ff3f47,#ff5482,#ff69b4);
  --gradient-21:conic-gradient(
      from -90deg at 25% 115% var(--gradient-space),red,#f06,#f0c,#c0f,#60f,#00f,#00f,#00f,#00f);
  --gradient-22:linear-gradient(
      to bottom right var(--gradient-space),#acb6e5,#86fde8);
  --gradient-23:linear-gradient(
      to bottom right var(--gradient-space),#536976,#292e49);
  --gradient-24:conic-gradient(
      from .5turn at 0% 0% var(--gradient-space),#00c476,10%,#82b0ff,90%,#00c476);
  --gradient-25:conic-gradient(
      at 125% 50% var(--gradient-space),#b78cf7,#ff7c94,#ffcf0d,#ff7c94,#b78cf7);
  --gradient-26:linear-gradient(
      to bottom right var(--gradient-space),#9796f0,#fbc7d4);
  --gradient-27:conic-gradient(
      from .5turn at bottom left var(--gradient-space),#ff1493,#639);
  --gradient-28:conic-gradient(
      from -90deg at 50% 105% var(--gradient-space),#fff,orchid);
  --gradient-29:radial-gradient(
      circle at top right var(--gradient-space),#bfb3ff,rgba(191,179,255,0)),radial-gradient(
      circle at bottom left var(--gradient-space),#86acf9,rgba(134,172,249,0));
  --gradient-30:radial-gradient(
      circle at top right var(--gradient-space),#00ff80,rgba(0,255,128,0)),radial-gradient(
      circle at bottom left var(--gradient-space),#adffd6,rgba(173,255,214,0));
  --noise-1:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.005' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
  --noise-2:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.05' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
  --noise-3:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.25' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
  --noise-4:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
  --noise-5:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
  --noise-filter-1:contrast(300%) brightness(100%);
  --noise-filter-2:contrast(200%) brightness(150%);
  --noise-filter-3:contrast(200%) brightness(250%);
  --noise-filter-4:contrast(200%) brightness(500%);
  --noise-filter-5:contrast(200%) brightness(1000%);
  --animation-fade-in:fade-in .5s var(--ease-3);
  --animation-fade-in-bloom:fade-in-bloom 2s var(--ease-3);
  --animation-fade-out:fade-out .5s var(--ease-3);
  --animation-fade-out-bloom:fade-out-bloom 2s var(--ease-3);
  --animation-scale-up:scale-up .5s var(--ease-3);
  --animation-scale-down:scale-down .5s var(--ease-3);
  --animation-slide-out-up:slide-out-up .5s var(--ease-3);
  --animation-slide-out-down:slide-out-down .5s var(--ease-3);
  --animation-slide-out-right:slide-out-right .5s var(--ease-3);
  --animation-slide-out-left:slide-out-left .5s var(--ease-3);
  --animation-slide-in-up:slide-in-up .5s var(--ease-3);
  --animation-slide-in-down:slide-in-down .5s var(--ease-3);
  --animation-slide-in-right:slide-in-right .5s var(--ease-3);
  --animation-slide-in-left:slide-in-left .5s var(--ease-3);
  --animation-shake-x:shake-x .75s var(--ease-out-5);
  --animation-shake-y:shake-y .75s var(--ease-out-5);
  --animation-shake-z:shake-z 1s var(--ease-in-out-3);
  --animation-spin:spin 2s linear infinite;
  --animation-ping:ping 5s var(--ease-out-3) infinite;
  --animation-blink:blink 1s var(--ease-out-3) infinite;
  --animation-float:float 3s var(--ease-in-out-3) infinite;
  --animation-bounce:bounce 2s var(--ease-squish-2) infinite;
  --animation-pulse:pulse 2s var(--ease-out-3) infinite;
  --border-size-1:1px;
  --border-size-2:2px;
  --border-size-3:5px;
  --border-size-4:10px;
  --border-size-5:25px;
  --radius-1:2px;
  --radius-2:5px;
  --radius-3:1rem;
  --radius-4:2rem;
  --radius-5:4rem;
  --radius-6:8rem;
  --radius-drawn-1:255px 15px 225px 15px/15px 225px 15px 255px;
  --radius-drawn-2:125px 10px 20px 185px/25px 205px 205px 25px;
  --radius-drawn-3:15px 255px 15px 225px/225px 15px 255px 15px;
  --radius-drawn-4:15px 25px 155px 25px/225px 150px 25px 115px;
  --radius-drawn-5:250px 25px 15px 20px/15px 80px 105px 115px;
  --radius-drawn-6:28px 100px 20px 15px/150px 30px 205px 225px;
  --radius-round:1e5px;
  --radius-blob-1:30% 70% 70% 30%/53% 30% 70% 47%;
  --radius-blob-2:53% 47% 34% 66%/63% 46% 54% 37%;
  --radius-blob-3:37% 63% 56% 44%/49% 56% 44% 51%;
  --radius-blob-4:63% 37% 37% 63%/43% 37% 63% 57%;
  --radius-blob-5:49% 51% 48% 52%/57% 44% 56% 43%;
  --radius-conditional-1:clamp(0px,calc(100vw - 100%) * 1e5,var(--radius-1));
  --radius-conditional-2:clamp(0px,calc(100vw - 100%) * 1e5,var(--radius-2));
  --radius-conditional-3:clamp(0px,calc(100vw - 100%) * 1e5,var(--radius-3));
  --radius-conditional-4:clamp(0px,calc(100vw - 100%) * 1e5,var(--radius-4));
  --radius-conditional-5:clamp(0px,calc(100vw - 100%) * 1e5,var(--radius-5));
  --radius-conditional-6:clamp(0px,calc(100vw - 100%) * 1e5,var(--radius-6));
  --palette-hue:250;
  --palette-hue-rotate-by:0;
  --palette-chroma:0.15;
  --color-1:oklch(98% calc(var(--palette-chroma)*0.03) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*0));
  --color-2:oklch(97% calc(var(--palette-chroma)*0.06) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*1));
  --color-3:oklch(93% calc(var(--palette-chroma)*0.1) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*2));
  --color-4:oklch(84% calc(var(--palette-chroma)*0.12) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*3));
  --color-5:oklch(80% calc(var(--palette-chroma)*0.16) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*4));
  --color-6:oklch(71% calc(var(--palette-chroma)*0.19) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*5));
  --color-7:oklch(66% calc(var(--palette-chroma)*0.2) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*6));
  --color-8:oklch(58% calc(var(--palette-chroma)*0.21) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*7));
  --color-9:oklch(53% calc(var(--palette-chroma)*0.2) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*8));
  --color-10:oklch(49% calc(var(--palette-chroma)*0.19) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*9));
  --color-11:oklch(42% calc(var(--palette-chroma)*0.17) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*10));
  --color-12:oklch(35% calc(var(--palette-chroma)*0.15) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*11));
  --color-13:oklch(27% calc(var(--palette-chroma)*0.12) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*12));
  --color-14:oklch(20% calc(var(--palette-chroma)*0.09) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*13));
  --color-15:oklch(16% calc(var(--palette-chroma)*0.07) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*14));
  --color-16:oklch(10% calc(var(--palette-chroma)*0.05) calc(var(--palette-hue) + var(--palette-hue-rotate-by)*15));
}
@media (prefers-color-scheme: dark) {
  :where(html) {
    --shadow-color:220 40% 2%;
    --shadow-strength:25%;
    --inner-shadow-highlight:inset 0 -.5px 0 0 hsla(0,0%,100%,.067),inset 0 .5px 0 0 rgba(0,0,0,.467);
  }
}
@supports (background:linear-gradient(to right in oklab, #000, #fff)) {
  :where(html) {
    --gradient-space:in oklab;
  }
}
@keyframes fade-in {
  to {
    opacity: 1;
  }
}
@keyframes fade-in-bloom {
  0% {
    filter: brightness(1) blur(20px);
    opacity: 0;
  }
  10% {
    filter: brightness(2) blur(10px);
    opacity: 1;
  }
  to {
    filter: brightness(1) blur(0);
    opacity: 1;
  }
}
@keyframes fade-out {
  to {
    opacity: 0;
  }
}
@keyframes fade-out-bloom {
  to {
    filter: brightness(1) blur(20px);
    opacity: 0;
  }
  10% {
    filter: brightness(2) blur(10px);
    opacity: 1;
  }
  0% {
    filter: brightness(1) blur(0);
    opacity: 1;
  }
}
@keyframes scale-up {
  to {
    transform: scale(1.25);
  }
}
@keyframes scale-down {
  to {
    transform: scale(.75);
  }
}
@keyframes slide-out-up {
  to {
    transform: translateY(-100%);
  }
}
@keyframes slide-out-down {
  to {
    transform: translateY(100%);
  }
}
@keyframes slide-out-right {
  to {
    transform: translateX(100%);
  }
}
@keyframes slide-out-left {
  to {
    transform: translateX(-100%);
  }
}
@keyframes slide-in-up {
  0% {
    transform: translateY(100%);
  }
}
@keyframes slide-in-down {
  0% {
    transform: translateY(-100%);
  }
}
@keyframes slide-in-right {
  0% {
    transform: translateX(-100%);
  }
}
@keyframes slide-in-left {
  0% {
    transform: translateX(100%);
  }
}
@keyframes shake-x {
  0%, to {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-5%);
  }
  40% {
    transform: translateX(5%);
  }
  60% {
    transform: translateX(-5%);
  }
  80% {
    transform: translateX(5%);
  }
}
@keyframes shake-y {
  0%, to {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-5%);
  }
  40% {
    transform: translateY(5%);
  }
  60% {
    transform: translateY(-5%);
  }
  80% {
    transform: translateY(5%);
  }
}
@keyframes shake-z {
  0%, to {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(-2deg);
  }
  40% {
    transform: rotate(2deg);
  }
  60% {
    transform: rotate(-2deg);
  }
  80% {
    transform: rotate(2deg);
  }
}
@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
@keyframes ping {
  90%, to {
    opacity: 0;
    transform: scale(2);
  }
}
@keyframes blink {
  0%, to {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
@keyframes float {
  50% {
    transform: translateY(-25%);
  }
}
@keyframes bounce {
  25% {
    transform: translateY(-20%);
  }
  40% {
    transform: translateY(-3%);
  }
  0%, 60%, to {
    transform: translateY(0);
  }
}
@keyframes pulse {
  50% {
    transform: scale(.9);
  }
}
@media (prefers-color-scheme: dark) {
  @keyframes fade-in-bloom {
    0% {
      filter: brightness(1) blur(20px);
      opacity: 0;
    }
    10% {
      filter: brightness(.5) blur(10px);
      opacity: 1;
    }
    to {
      filter: brightness(1) blur(0);
      opacity: 1;
    }
  }
}
@media (prefers-color-scheme: dark) {
  @keyframes fade-out-bloom {
    to {
      filter: brightness(1) blur(20px);
      opacity: 0;
    }
    10% {
      filter: brightness(.5) blur(10px);
      opacity: 1;
    }
    0% {
      filter: brightness(1) blur(0);
      opacity: 1;
    }
  }
}

/* node_modules/.pnpm/open-props@1.7.23/node_modules/open-props/normalize.min.css */
:where(html) {
  --csstools-color-scheme--light:initial;
  --link:var(--indigo-7);
  --link-visited:var(--purple-7);
  --text-1:var(--gray-12);
  --text-2:var(--gray-7);
  --surface-1:var(--gray-0);
  --surface-2:var(--gray-2);
  --surface-3:var(--gray-3);
  --surface-4:var(--gray-4);
  --scrollthumb-color:var(--gray-7);
  -webkit-text-size-adjust: none;
  accent-color: var(--brand,var(--link));
  background-color: var(--surface-1);
  block-size: 100%;
  caret-color: var(--brand,var(--link));
  color: var(--text-1);
  color-scheme: light;
  font-family: var(--font-system-ui);
  line-height: var(--font-lineheight-3);
  scrollbar-color: var(--scrollthumb-color) transparent;
}
@media (dynamic-range: high) or (color-gamut: p3) {
  @supports (color:color(display-p3 0 0 0)) {
    :where(html) {
      --link:color(display-p3 .1 .39 1);
      --link-visited:color(display-p3 .6 .2 1);
    }
  }
}
:where(html) :where(dialog) {
  background-color: var(--surface-1);
}
:where(html) :where(button, .btn) {
  --_highlight:var(--_highlight-light);
  --_bg:var(--_bg-light);
  --_ink-shadow:var(--_ink-shadow-light);
}
:where(html) :where(button, .btn) :where([type=reset]) {
  --_text:var(--red-6);
  --_border:var(--red-3);
}
:where(html) [disabled]:where(button, input[type=button], .btn) {
  --_text:var(--gray-6);
}
:where(html) [disabled]:where(button, input[type=submit], .btn) {
  --_text:var(--gray-6);
}
:where(html) [disabled]:where(button, input[type=reset], .btn) {
  --_text:var(--gray-6);
}
:where(html) :where(textarea, select, input:not([type=button], [type=submit], [type=reset])) {
  background-color: var(--surface-2);
}
@media (prefers-color-scheme: dark) {
  :where(html) {
    --csstools-color-scheme--light: ;
    --link:var(--indigo-3);
    --link-visited:var(--purple-3);
    --text-1:var(--gray-1);
    --text-2:var(--gray-4);
    --surface-1:var(--gray-9);
    --surface-2:var(--gray-8);
    --surface-3:var(--gray-7);
    --surface-4:var(--gray-6);
    --scrollthumb-color:var(--gray-6);
    --shadow-strength:10%;
    --shadow-color:220 40% 2%;
    color-scheme: dark;
  }
}
:where(a[href]) {
  color: var(--brand,var(--link));
}
:where(a[href]):where(:visited) {
  color: var(--link-visited);
}
:focus-visible {
  outline-color: var(--brand,var(--link));
}
*,
:after,
:before {
  box-sizing: border-box;
}
:where(:not(dialog)) {
  margin: 0;
}
:where(:not(fieldset, progress, meter)) {
  background-origin: border-box;
  background-repeat: no-repeat;
  border-style: solid;
  border-width: 0;
}
@media (prefers-reduced-motion: no-preference) {
  :where(html) {
    scroll-behavior: smooth;
  }
}
@media (prefers-reduced-motion: no-preference) {
  :where(:focus-visible) {
    transition: outline-offset 145ms var(--ease-2);
  }
  :where(:not(:active):focus-visible) {
    transition-duration: .25s;
  }
}
:where(:not(:active):focus-visible) {
  outline-offset: 5px;
}
:where(body) {
  min-block-size: 100%;
}
:where(h1, h2, h3, h4, h5, h6) {
  text-wrap: balance;
  font-weight: var(--font-weight-9);
  line-height: var(--font-lineheight-1);
}
:where(h1) {
  font-size: var(--font-size-8);
  max-inline-size: var(--size-header-1);
}
:where(h2) {
  font-size: var(--font-size-6);
  max-inline-size: var(--size-header-2);
}
:where(h3) {
  font-size: var(--font-size-5);
}
:where(h4) {
  font-size: var(--font-size-4);
}
:where(h5) {
  font-size: var(--font-size-3);
}
:where(h3, h4, h5, h6, dt) {
  max-inline-size: var(--size-header-3);
}
:where(p, ul, ol, dl, h6) {
  font-size: var(--font-size-2);
}
:where(a, u, ins, abbr) {
  text-underline-offset: 1px;
}
@supports (-moz-appearance:none) {
  :where(a, u, ins, abbr) {
    text-underline-offset: 2px;
  }
}
:where(a[href], area, button, input:not([type=text], [type=email], [type=number], [type=password], [type=""], [type=tel], [type=url]), label[for], select, summary, [tabindex]:not([tabindex*="-"], pre)) {
  cursor: pointer;
}
:where(a[href], area, button, input, label[for], select, summary, textarea, [tabindex]:not([tabindex*="-"])) {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
:where(a):where([href]) {
  text-decoration-color: var(--indigo-2);
}
:where(a):where([href]):where(:visited) {
  text-decoration-color: var(--purple-2);
}
:where(a):where(:not(:hover)) {
  text-decoration: inherit;
}
:where(img, svg, video, canvas, audio, iframe, embed, object) {
  display: block;
}
:where(img, svg, video) {
  block-size: auto;
  max-inline-size: 100%;
}
:where(input, button, textarea, select),
:where(input[type=file])::-webkit-file-upload-button {
  color: inherit;
  font: inherit;
  font-size: inherit;
  letter-spacing: inherit;
}
::placeholder {
  color: var(--gray-7);
  opacity: .75;
}
:where(input:not([type=range]), textarea) {
  padding-block: var(--size-1);
  padding-inline: var(--size-2);
}
:where(select) {
  field-sizing: content;
  padding-block: .75ch;
  padding-inline: var(--size-relative-4) 0;
}
:where(textarea, select, input:not([type=button], [type=submit], [type=reset])) {
  background-color: var(--surface-2);
  border-radius: var(--radius-2);
}
:where(textarea) {
  field-sizing: content;
  min-block-size: 2lh;
  min-inline-size: var(--size-content-1);
  resize: vertical;
}
:where(input[type=checkbox], input[type=radio]) {
  block-size: var(--size-3);
  inline-size: var(--size-3);
}
:where(svg:not([width])) {
  inline-size: var(--size-10);
}
:where(code, kbd, samp, pre) {
  font-family: var(--font-monospace-code), monospace;
}
:where(:not(pre) > code, kbd) {
  white-space: nowrap;
}
:where(pre) {
  direction: ltr;
  max-inline-size: max-content;
  min-inline-size: 0;
  white-space: pre;
  writing-mode: lr;
}
:where(:not(pre) > code) {
  background: var(--surface-2);
  border-radius: var(--radius-2);
  padding: var(--size-1) var(--size-2);
  writing-mode: lr;
}
:where(kbd, var) {
  border-color: var(--surface-4);
  border-radius: var(--radius-2);
  border-width: var(--border-size-1);
  padding: var(--size-1) var(--size-2);
}
:where(mark) {
  border-radius: var(--radius-2);
  padding-inline: var(--size-1);
}
:where(ol, ul) {
  padding-inline-start: var(--size-8);
}
:where(li) {
  padding-inline-start: var(--size-2);
}
:where(li, dd, figcaption) {
  max-inline-size: var(--size-content-2);
}
:where(p) {
  text-wrap: pretty;
  max-inline-size: var(--size-content-3);
}
:where(dt, summary) {
  font-weight: var(--font-weight-7);
}
:where(dt:not(:first-of-type)) {
  margin-block-start: var(--size-5);
}
:where(small) {
  font-size: max(.5em, var(--font-size-0));
  max-inline-size: var(--size-content-1);
}
:where(hr) {
  background-color: var(--surface-3);
  height: var(--border-size-2);
  margin-block: var(--size-fluid-5);
}
:where(figure) {
  display: grid;
  gap: var(--size-2);
  place-items: center;
}
:where(figure) > :where(figcaption) {
  text-wrap: balance;
  font-size: var(--font-size-1);
}
:where(blockquote, :not(blockquote) > cite) {
  border-inline-start-width: var(--border-size-3);
}
:where(blockquote) {
  display: grid;
  gap: var(--size-3);
  max-inline-size: var(--size-content-2);
  padding-block: var(--size-3);
  padding-inline: var(--size-4);
}
:where(:not(blockquote) > cite) {
  padding-inline-start: var(--size-2);
}
:where(summary) {
  background: var(--surface-3);
  border-radius: var(--radius-2);
  margin: calc(var(--size-2)*-1) calc(var(--size-3)*-1);
  padding: var(--size-2) var(--size-3);
}
:where(details) {
  background: var(--surface-2);
  border-radius: var(--radius-2);
  padding-block: var(--size-2);
  padding-inline: var(--size-3);
}
:where(details[open] > summary) {
  border-end-end-radius: 0;
  border-end-start-radius: 0;
  margin-bottom: var(--size-2);
}
:where(fieldset) {
  border: var(--border-size-1) solid var(--surface-4);
  border-radius: var(--radius-2);
}
:where(del) {
  background: var(--red-9);
  color: var(--red-2);
}
:where(ins) {
  background: var(--green-9);
  color: var(--green-1);
}
:where(abbr) {
  text-decoration-color: var(--blue-5);
}
:where(dialog) {
  background-color: var(--surface-1);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-6);
  color: inherit;
}
:where(menu) {
  display: flex;
  gap: var(--size-3);
  padding-inline-start: 0;
}
:where(sup) {
  font-size: .5em;
}
:where(table) {
  --nice-inner-radius:calc(var(--radius-3) - 2px);
  background: var(--surface-2);
  border: 1px solid var(--surface-2);
  border-radius: var(--radius-3);
  width: fit-content;
}
:where(table:not(:has(tfoot)) tr:last-child td:first-child) {
  border-end-start-radius: var(--nice-inner-radius);
}
:where(table:not(:has(tfoot)) tr:last-child td:last-child) {
  border-end-end-radius: var(--nice-inner-radius);
}
:where(table thead tr:first-child th:first-child) {
  border-start-start-radius: var(--nice-inner-radius);
}
:where(table thead tr:first-child th:last-child) {
  border-start-end-radius: var(--nice-inner-radius);
}
:where(tfoot tr:last-child th:first-of-type) {
  border-end-start-radius: var(--nice-inner-radius);
}
:where(tfoot tr:last-child td:first-of-type) {
  border-end-start-radius: var(--nice-inner-radius);
}
:where(tfoot tr:last-child th:last-of-type) {
  border-end-end-radius: var(--nice-inner-radius);
}
:where(tfoot tr:last-child td:last-of-type) {
  border-end-end-radius: var(--nice-inner-radius);
}
:where(th) {
  background-color: var(--surface-2);
  color: var(--text-1);
}
:where(table a:not(.does-not-exist):focus-visible) {
  outline-offset: -2px;
}
:where(table button:not(.does-not-exist):focus-visible) {
  outline-offset: -2px;
}
:where(table [contenteditable]:focus-visible) {
  outline-offset: -2px;
}
:where(td) {
  text-wrap: pretty;
  background: var(--surface-1);
  max-inline-size: var(--size-content-2);
}
:where(td, th) {
  padding: var(--size-2);
  text-align: left;
}
:where(td:not([align])) {
  text-align: center;
}
:where(th:not([align])) {
  text-align: center;
}
:where(thead) {
  border-collapse: collapse;
}
:where(table tr:hover td),
:where(tbody tr:nth-child(2n):hover td) {
  background-color: var(--surface-3);
}
:where(table > caption) {
  margin: var(--size-3);
}
:where(tfoot button) {
  padding-block: var(--size-1);
  padding-inline: var(--size-3);
}
@media (prefers-color-scheme: dark) {
  :where(textarea, select, input:not([type=button], [type=submit], [type=reset])) {
    background-color: #171a1c;
  }
  :where(dialog) {
    background-color: var(--surface-2);
  }
  ::placeholder {
    color: var(--gray-6);
  }
}

/* src/app/indexdb/indexdb.component.css */
:host {
  display: block;
}
div.cmdRow,
td:first-child {
  display: flex;
  gap: 1ch;
}
td:first-child button {
  width: 2.3rem;
  aspect-ratio: 1;
  border-radius: 50%;
}
table {
  margin-top: var(--size-2);
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
}
tr:nth-child(even) {
  background-color: var(--surface-1);
}
tr:nth-child(odd) {
  background-color: var(--surface-0);
}
`] }]
  }], null, { dlg: [{ type: ViewChild, args: ["dlg", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IndexdbComponent, { className: "IndexdbComponent", filePath: "src/app/indexdb/indexdb.component.ts", lineNumber: 64 });
})();
export {
  IndexdbComponent
};
