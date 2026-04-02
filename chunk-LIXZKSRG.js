import {
  AbstractControl,
  NG_VALUE_ACCESSOR,
  NgControl,
  Validators,
  isNativeFormElement,
  isNumericFormElement,
  isTextualFormElement,
  setNativeDomProperty,
  ɵFORM_FIELD_PARSE_ERRORS
} from "./chunk-UGNSKCWD.js";
import {
  isPlatformBrowser
} from "./chunk-MTKF5SUL.js";
import {
  APP_ID,
  CSP_NONCE,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  PLATFORM_ID,
  Renderer2,
  RuntimeError,
  SIGNAL,
  afterRenderEffect,
  computed,
  debounced,
  effect,
  formatRuntimeError,
  forwardRef,
  inject,
  input,
  linkedSignal,
  runInInjectionContext,
  setClassMetadata,
  signal,
  untracked,
  ɵɵControlFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory,
  ɵɵlistener
} from "./chunk-4YMCON7N.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// node_modules/.pnpm/@angular+forms@22.0.0-next.6_@angular+common@22.0.0-next.6_@angular+core@22.0.0-next.6__84000cb4d9ba85a6c7aa5e647e591e4e/node_modules/@angular/forms/fesm2022/_validation_errors-chunk.mjs
var boundPathDepth = 0;
function getBoundPathDepth() {
  return boundPathDepth;
}
function setBoundPathDepthForResolution(fn, depth) {
  return (...args) => {
    try {
      boundPathDepth = depth;
      return fn(...args);
    } finally {
      boundPathDepth = 0;
    }
  };
}
function shortCircuitFalse(value) {
  return !value;
}
function shortCircuitTrue(value) {
  return value;
}
function isArray(value) {
  return Array.isArray(value);
}
function isObject(value) {
  return (typeof value === "object" || typeof value === "function") && value != null;
}
var DYNAMIC = /* @__PURE__ */ Symbol();
var IGNORED = /* @__PURE__ */ Symbol();
var AbstractLogic = class {
  predicates;
  fns = [];
  constructor(predicates) {
    this.predicates = predicates;
  }
  push(logicFn) {
    this.fns.push(wrapWithPredicates(this.predicates, logicFn));
  }
  mergeIn(other) {
    const fns = this.predicates ? other.fns.map((fn) => wrapWithPredicates(this.predicates, fn)) : other.fns;
    this.fns.push(...fns);
  }
  hasRules() {
    return this.fns.length > 0;
  }
};
var BooleanOrLogic = class extends AbstractLogic {
  get defaultValue() {
    return false;
  }
  compute(arg) {
    return this.fns.some((f) => {
      const result = f(arg);
      return result && result !== IGNORED;
    });
  }
};
var ArrayMergeIgnoreLogic = class _ArrayMergeIgnoreLogic extends AbstractLogic {
  ignore;
  static ignoreNull(predicates) {
    return new _ArrayMergeIgnoreLogic(predicates, (e) => e === null);
  }
  constructor(predicates, ignore) {
    super(predicates);
    this.ignore = ignore;
  }
  get defaultValue() {
    return [];
  }
  compute(arg) {
    return this.fns.reduce((prev, f) => {
      const value = f(arg);
      if (value === void 0 || value === IGNORED) {
        return prev;
      } else if (isArray(value)) {
        return [...prev, ...this.ignore ? value.filter((e) => !this.ignore(e)) : value];
      } else {
        if (this.ignore && this.ignore(value)) {
          return prev;
        }
        return [...prev, value];
      }
    }, []);
  }
};
var ArrayMergeLogic = class extends ArrayMergeIgnoreLogic {
  constructor(predicates) {
    super(predicates, void 0);
  }
};
var MetadataMergeLogic = class extends AbstractLogic {
  key;
  get defaultValue() {
    return this.key.reducer.getInitial();
  }
  constructor(predicates, key) {
    super(predicates);
    this.key = key;
  }
  compute(ctx) {
    if (this.fns.length === 0) {
      return this.key.reducer.getInitial();
    }
    let acc = this.key.reducer.getInitial();
    for (let i = 0; i < this.fns.length; i++) {
      const item = this.fns[i](ctx);
      if (item !== IGNORED) {
        acc = this.key.reducer.reduce(acc, item);
      }
    }
    return acc;
  }
};
function wrapWithPredicates(predicates, logicFn) {
  if (predicates.length === 0) {
    return logicFn;
  }
  return (arg) => {
    for (const predicate of predicates) {
      let predicateField = arg.stateOf(predicate.path);
      const depthDiff = untracked(predicateField.structure.pathKeys).length - predicate.depth;
      for (let i = 0; i < depthDiff; i++) {
        predicateField = predicateField.structure.parent;
      }
      if (!predicate.fn(predicateField.context)) {
        return IGNORED;
      }
    }
    return logicFn(arg);
  };
}
var LogicContainer = class {
  predicates;
  hidden;
  disabledReasons;
  readonly;
  syncErrors;
  syncTreeErrors;
  asyncErrors;
  metadata = /* @__PURE__ */ new Map();
  constructor(predicates) {
    this.predicates = predicates;
    this.hidden = new BooleanOrLogic(predicates);
    this.disabledReasons = new ArrayMergeLogic(predicates);
    this.readonly = new BooleanOrLogic(predicates);
    this.syncErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
    this.syncTreeErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
    this.asyncErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
  }
  hasAnyLogic() {
    return this.hidden.hasRules() || this.disabledReasons.hasRules() || this.readonly.hasRules() || this.syncErrors.hasRules() || this.syncTreeErrors.hasRules() || this.asyncErrors.hasRules() || this.metadata.size > 0;
  }
  hasMetadata(key) {
    return this.metadata.has(key);
  }
  hasMetadataKeys() {
    return this.metadata.size > 0;
  }
  getMetadataKeys() {
    return this.metadata.keys();
  }
  getMetadata(key) {
    if (!this.metadata.has(key)) {
      this.metadata.set(key, new MetadataMergeLogic(this.predicates, key));
    }
    return this.metadata.get(key);
  }
  mergeIn(other) {
    this.hidden.mergeIn(other.hidden);
    this.disabledReasons.mergeIn(other.disabledReasons);
    this.readonly.mergeIn(other.readonly);
    this.syncErrors.mergeIn(other.syncErrors);
    this.syncTreeErrors.mergeIn(other.syncTreeErrors);
    this.asyncErrors.mergeIn(other.asyncErrors);
    for (const key of other.getMetadataKeys()) {
      const metadataLogic = other.metadata.get(key);
      this.getMetadata(key).mergeIn(metadataLogic);
    }
  }
};
var AbstractLogicNodeBuilder = class {
  depth;
  constructor(depth) {
    this.depth = depth;
  }
  build() {
    return new LeafLogicNode(this, [], 0);
  }
};
var LogicNodeBuilder = class _LogicNodeBuilder extends AbstractLogicNodeBuilder {
  constructor(depth) {
    super(depth);
  }
  current;
  all = [];
  addHiddenRule(logic) {
    this.getCurrent().addHiddenRule(logic);
  }
  addDisabledReasonRule(logic) {
    this.getCurrent().addDisabledReasonRule(logic);
  }
  addReadonlyRule(logic) {
    this.getCurrent().addReadonlyRule(logic);
  }
  addSyncErrorRule(logic) {
    this.getCurrent().addSyncErrorRule(logic);
  }
  addSyncTreeErrorRule(logic) {
    this.getCurrent().addSyncTreeErrorRule(logic);
  }
  addAsyncErrorRule(logic) {
    this.getCurrent().addAsyncErrorRule(logic);
  }
  addMetadataRule(key, logic) {
    this.getCurrent().addMetadataRule(key, logic);
  }
  getChild(key) {
    if (key === DYNAMIC) {
      const children = this.getCurrent().children;
      if (children.size > (children.has(DYNAMIC) ? 1 : 0)) {
        this.current = void 0;
      }
    }
    return this.getCurrent().getChild(key);
  }
  hasLogic(builder) {
    if (this === builder) {
      return true;
    }
    return this.all.some(({
      builder: subBuilder
    }) => subBuilder.hasLogic(builder));
  }
  hasRules() {
    return this.all.length > 0;
  }
  anyChildHasLogic() {
    return this.all.some(({
      builder
    }) => builder.anyChildHasLogic());
  }
  mergeIn(other, predicate) {
    if (predicate) {
      this.all.push({
        builder: other,
        predicate: {
          fn: setBoundPathDepthForResolution(predicate.fn, this.depth),
          path: predicate.path
        }
      });
    } else {
      this.all.push({
        builder: other
      });
    }
    this.current = void 0;
  }
  getCurrent() {
    if (this.current === void 0) {
      this.current = new NonMergeableLogicNodeBuilder(this.depth);
      this.all.push({
        builder: this.current
      });
    }
    return this.current;
  }
  static newRoot() {
    return new _LogicNodeBuilder(0);
  }
};
var NonMergeableLogicNodeBuilder = class extends AbstractLogicNodeBuilder {
  logic = new LogicContainer([]);
  children = /* @__PURE__ */ new Map();
  constructor(depth) {
    super(depth);
  }
  addHiddenRule(logic) {
    this.logic.hidden.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addDisabledReasonRule(logic) {
    this.logic.disabledReasons.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addReadonlyRule(logic) {
    this.logic.readonly.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addSyncErrorRule(logic) {
    this.logic.syncErrors.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addSyncTreeErrorRule(logic) {
    this.logic.syncTreeErrors.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addAsyncErrorRule(logic) {
    this.logic.asyncErrors.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addMetadataRule(key, logic) {
    this.logic.getMetadata(key).push(setBoundPathDepthForResolution(logic, this.depth));
  }
  getChild(key) {
    if (!this.children.has(key)) {
      this.children.set(key, new LogicNodeBuilder(this.depth + 1));
    }
    return this.children.get(key);
  }
  hasLogic(builder) {
    return this === builder;
  }
  hasRules() {
    return this.logic.hasAnyLogic() || this.children.size > 0;
  }
  anyChildHasLogic() {
    for (const child of this.children.values()) {
      if (child.hasRules()) {
        return true;
      }
    }
    return false;
  }
};
var LeafLogicNode = class _LeafLogicNode {
  builder;
  predicates;
  depth;
  logic;
  constructor(builder, predicates, depth) {
    this.builder = builder;
    this.predicates = predicates;
    this.depth = depth;
    this.logic = builder ? createLogic(builder, predicates, depth) : new LogicContainer([]);
  }
  getChild(key) {
    const childBuilders = this.builder ? getAllChildBuilders(this.builder, key) : [];
    if (childBuilders.length === 0) {
      return new _LeafLogicNode(void 0, [], this.depth + 1);
    } else if (childBuilders.length === 1) {
      const {
        builder,
        predicates
      } = childBuilders[0];
      return new _LeafLogicNode(builder, [...this.predicates, ...predicates.map((p) => bindLevel(p, this.depth))], this.depth + 1);
    } else {
      const builtNodes = childBuilders.map(({
        builder,
        predicates
      }) => new _LeafLogicNode(builder, [...this.predicates, ...predicates.map((p) => bindLevel(p, this.depth))], this.depth + 1));
      return new CompositeLogicNode(builtNodes);
    }
  }
  hasLogic(builder) {
    if (!this.builder) {
      return false;
    }
    return this.builder.hasLogic(builder);
  }
  hasRules() {
    return this.builder ? this.builder.hasRules() : false;
  }
  anyChildHasLogic() {
    return this.builder ? this.builder.anyChildHasLogic() : false;
  }
};
var CompositeLogicNode = class _CompositeLogicNode {
  all;
  logic;
  constructor(all) {
    this.all = all;
    this.logic = new LogicContainer([]);
    for (const node of all) {
      this.logic.mergeIn(node.logic);
    }
  }
  getChild(key) {
    return new _CompositeLogicNode(this.all.flatMap((child) => child.getChild(key)));
  }
  hasLogic(builder) {
    return this.all.some((node) => node.hasLogic(builder));
  }
  hasRules() {
    return this.all.some((node) => node.hasRules());
  }
  anyChildHasLogic() {
    return this.all.some((child) => child.anyChildHasLogic());
  }
};
function getAllChildBuilders(builder, key) {
  if (builder instanceof LogicNodeBuilder) {
    return builder.all.flatMap(({
      builder: builder2,
      predicate
    }) => {
      const children = getAllChildBuilders(builder2, key);
      if (predicate) {
        return children.map(({
          builder: builder3,
          predicates
        }) => ({
          builder: builder3,
          predicates: [...predicates, predicate]
        }));
      }
      return children;
    });
  } else if (builder instanceof NonMergeableLogicNodeBuilder) {
    return [...key !== DYNAMIC && builder.children.has(DYNAMIC) ? [{
      builder: builder.getChild(DYNAMIC),
      predicates: []
    }] : [], ...builder.children.has(key) ? [{
      builder: builder.getChild(key),
      predicates: []
    }] : []];
  } else {
    throw new RuntimeError(1909, ngDevMode && "Unknown LogicNodeBuilder type");
  }
}
function createLogic(builder, predicates, depth) {
  const logic = new LogicContainer(predicates);
  if (builder instanceof LogicNodeBuilder) {
    const builtNodes = builder.all.map(({
      builder: builder2,
      predicate
    }) => new LeafLogicNode(builder2, predicate ? [...predicates, bindLevel(predicate, depth)] : predicates, depth));
    for (const node of builtNodes) {
      logic.mergeIn(node.logic);
    }
  } else if (builder instanceof NonMergeableLogicNodeBuilder) {
    logic.mergeIn(builder.logic);
  } else {
    throw new RuntimeError(1909, ngDevMode && "Unknown LogicNodeBuilder type");
  }
  return logic;
}
function bindLevel(predicate, depth) {
  return __spreadProps(__spreadValues({}, predicate), {
    depth
  });
}
var PATH = /* @__PURE__ */ Symbol("PATH");
var FieldPathNode = class _FieldPathNode {
  keys;
  parent;
  keyInParent;
  root;
  children = /* @__PURE__ */ new Map();
  fieldPathProxy = new Proxy(this, FIELD_PATH_PROXY_HANDLER);
  logicBuilder;
  constructor(keys, root, parent, keyInParent) {
    this.keys = keys;
    this.parent = parent;
    this.keyInParent = keyInParent;
    this.root = root ?? this;
    if (!parent) {
      this.logicBuilder = LogicNodeBuilder.newRoot();
    }
  }
  get builder() {
    if (this.logicBuilder) {
      return this.logicBuilder;
    }
    return this.parent.builder.getChild(this.keyInParent);
  }
  getChild(key) {
    if (!this.children.has(key)) {
      this.children.set(key, new _FieldPathNode([...this.keys, key], this.root, this, key));
    }
    return this.children.get(key);
  }
  mergeIn(other, predicate) {
    const path = other.compile();
    this.builder.mergeIn(path.builder, predicate);
  }
  static unwrapFieldPath(formPath) {
    return formPath[PATH];
  }
  static newRoot() {
    return new _FieldPathNode([], void 0, void 0, void 0);
  }
};
var FIELD_PATH_PROXY_HANDLER = {
  get(node, property) {
    if (property === PATH) {
      return node;
    }
    return node.getChild(property).fieldPathProxy;
  }
};
var currentCompilingNode = void 0;
var compiledSchemas = /* @__PURE__ */ new Map();
var SchemaImpl = class _SchemaImpl {
  schemaFn;
  constructor(schemaFn) {
    this.schemaFn = schemaFn;
  }
  compile() {
    if (compiledSchemas.has(this)) {
      return compiledSchemas.get(this);
    }
    const path = FieldPathNode.newRoot();
    compiledSchemas.set(this, path);
    let prevCompilingNode = currentCompilingNode;
    try {
      currentCompilingNode = path;
      this.schemaFn(path.fieldPathProxy);
    } finally {
      currentCompilingNode = prevCompilingNode;
    }
    return path;
  }
  static create(schema2) {
    if (schema2 instanceof _SchemaImpl) {
      return schema2;
    }
    return new _SchemaImpl(schema2);
  }
  static rootCompile(schema2) {
    try {
      compiledSchemas.clear();
      if (schema2 === void 0) {
        return FieldPathNode.newRoot();
      }
      if (schema2 instanceof _SchemaImpl) {
        return schema2.compile();
      }
      return new _SchemaImpl(schema2).compile();
    } finally {
      compiledSchemas.clear();
    }
  }
};
function isSchemaOrSchemaFn(value) {
  return value instanceof SchemaImpl || typeof value === "function";
}
function assertPathIsCurrent(path) {
  if (currentCompilingNode !== FieldPathNode.unwrapFieldPath(path).root) {
    throw new RuntimeError(1908, ngDevMode && `A FieldPath can only be used directly within the Schema that owns it, **not** outside of it or within a sub-schema.`);
  }
}
function metadata(path, key, logic) {
  assertPathIsCurrent(path);
  const pathNode = FieldPathNode.unwrapFieldPath(path);
  pathNode.builder.addMetadataRule(key, logic);
  return key;
}
var MetadataReducer = {
  list() {
    return {
      reduce: (acc, item) => item === void 0 ? acc : [...acc, item],
      getInitial: () => []
    };
  },
  min() {
    return {
      reduce: (acc, item) => {
        if (acc === void 0 || item === void 0) {
          return acc ?? item;
        }
        return Math.min(acc, item);
      },
      getInitial: () => void 0
    };
  },
  max() {
    return {
      reduce: (prev, next) => {
        if (prev === void 0 || next === void 0) {
          return prev ?? next;
        }
        return Math.max(prev, next);
      },
      getInitial: () => void 0
    };
  },
  or() {
    return {
      reduce: (prev, next) => prev || next,
      getInitial: () => false
    };
  },
  and() {
    return {
      reduce: (prev, next) => prev && next,
      getInitial: () => true
    };
  },
  override
};
function override(getInitial) {
  return {
    reduce: (_, item) => item,
    getInitial: () => getInitial?.()
  };
}
var IS_ASYNC_VALIDATION_RESOURCE = /* @__PURE__ */ Symbol("IS_ASYNC_VALIDATION_RESOURCE");
var MetadataKey = class {
  reducer;
  create;
  brand;
  [IS_ASYNC_VALIDATION_RESOURCE];
  constructor(reducer, create) {
    this.reducer = reducer;
    this.create = create;
  }
};
function createMetadataKey(reducer) {
  return new MetadataKey(reducer ?? MetadataReducer.override());
}
function createManagedMetadataKey(create, reducer) {
  return new MetadataKey(reducer ?? MetadataReducer.override(), create);
}
var REQUIRED = createMetadataKey(MetadataReducer.or());
var MIN = createMetadataKey(MetadataReducer.max());
var MAX = createMetadataKey(MetadataReducer.min());
var MIN_LENGTH = createMetadataKey(MetadataReducer.max());
var MAX_LENGTH = createMetadataKey(MetadataReducer.min());
var PATTERN = createMetadataKey(MetadataReducer.list());
function calculateValidationSelfStatus(state) {
  if (state.errors().length > 0) {
    return "invalid";
  }
  if (state.pending()) {
    return "unknown";
  }
  return "valid";
}
var FieldValidationState = class {
  node;
  constructor(node) {
    this.node = node;
  }
  rawSyncTreeErrors = computed(() => {
    if (this.shouldSkipValidation()) {
      return [];
    }
    return [...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context), ...this.node.structure.parent?.validationState.rawSyncTreeErrors() ?? []];
  }, ...ngDevMode ? [{
    debugName: "rawSyncTreeErrors"
  }] : []);
  syncErrors = computed(() => {
    if (this.shouldSkipValidation()) {
      return [];
    }
    return [...this.node.logicNode.logic.syncErrors.compute(this.node.context), ...this.syncTreeErrors(), ...normalizeErrors(this.node.submitState.submissionErrors())];
  }, ...ngDevMode ? [{
    debugName: "syncErrors"
  }] : []);
  syncValid = computed(() => {
    if (this.shouldSkipValidation()) {
      return true;
    }
    return this.node.structure.reduceChildren(this.syncErrors().length === 0, (child, value) => value && child.validationState.syncValid(), shortCircuitFalse);
  }, ...ngDevMode ? [{
    debugName: "syncValid"
  }] : []);
  syncTreeErrors = computed(() => this.rawSyncTreeErrors().filter((err) => err.fieldTree === this.node.fieldTree), ...ngDevMode ? [{
    debugName: "syncTreeErrors"
  }] : []);
  rawAsyncErrors = computed(() => {
    if (this.shouldSkipValidation()) {
      return [];
    }
    return [...this.node.logicNode.logic.asyncErrors.compute(this.node.context), ...this.node.structure.parent?.validationState.rawAsyncErrors() ?? []];
  }, ...ngDevMode ? [{
    debugName: "rawAsyncErrors"
  }] : []);
  asyncErrors = computed(() => {
    if (this.shouldSkipValidation()) {
      return [];
    }
    return this.rawAsyncErrors().filter((err) => err === "pending" || err.fieldTree === this.node.fieldTree);
  }, ...ngDevMode ? [{
    debugName: "asyncErrors"
  }] : []);
  parseErrors = computed(() => this.node.formFieldBindings().flatMap((field) => field.parseErrors()), ...ngDevMode ? [{
    debugName: "parseErrors"
  }] : []);
  errors = computed(() => [...this.parseErrors(), ...this.syncErrors(), ...this.asyncErrors().filter((err) => err !== "pending")], ...ngDevMode ? [{
    debugName: "errors"
  }] : []);
  errorSummary = computed(() => {
    const errors = this.node.structure.reduceChildren(this.errors(), (child, result) => [...result, ...child.errorSummary()]);
    if (true) {
      untracked(() => errors.sort(compareErrorPosition));
    }
    return errors;
  }, ...ngDevMode ? [{
    debugName: "errorSummary"
  }] : []);
  pending = computed(() => this.node.structure.reduceChildren(this.asyncErrors().includes("pending"), (child, value) => value || child.validationState.asyncErrors().includes("pending")), ...ngDevMode ? [{
    debugName: "pending"
  }] : []);
  status = computed(() => {
    if (this.shouldSkipValidation()) {
      return "valid";
    }
    let ownStatus = calculateValidationSelfStatus(this);
    return this.node.structure.reduceChildren(ownStatus, (child, value) => {
      if (value === "invalid" || child.validationState.status() === "invalid") {
        return "invalid";
      } else if (value === "unknown" || child.validationState.status() === "unknown") {
        return "unknown";
      }
      return "valid";
    }, (v) => v === "invalid");
  }, ...ngDevMode ? [{
    debugName: "status"
  }] : []);
  valid = computed(() => this.status() === "valid", ...ngDevMode ? [{
    debugName: "valid"
  }] : []);
  invalid = computed(() => this.status() === "invalid", ...ngDevMode ? [{
    debugName: "invalid"
  }] : []);
  shouldSkipValidation = computed(() => this.node.hidden() || this.node.disabled() || this.node.readonly(), ...ngDevMode ? [{
    debugName: "shouldSkipValidation"
  }] : []);
};
function normalizeErrors(error) {
  if (error === void 0) {
    return [];
  }
  if (isArray(error)) {
    return error;
  }
  return [error];
}
function addDefaultField(errors, fieldTree) {
  if (isArray(errors)) {
    for (const error of errors) {
      error.fieldTree ??= fieldTree;
    }
  } else if (errors) {
    errors.fieldTree ??= fieldTree;
  }
  return errors;
}
function getFirstBoundElement(error) {
  if (error.formField) return error.formField.element;
  return error.fieldTree().formFieldBindings().reduce((el, binding) => {
    if (!el || !binding.element) return el ?? binding.element;
    return el.compareDocumentPosition(binding.element) & Node.DOCUMENT_POSITION_PRECEDING ? binding.element : el;
  }, void 0);
}
function compareErrorPosition(a, b) {
  const aEl = getFirstBoundElement(a);
  const bEl = getFirstBoundElement(b);
  if (aEl === bEl) return 0;
  if (aEl === void 0 || bEl === void 0) return aEl === void 0 ? 1 : -1;
  return aEl.compareDocumentPosition(bEl) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1;
}
var DEBOUNCER = createMetadataKey();
var FieldNodeContext = class {
  node;
  cache = /* @__PURE__ */ new WeakMap();
  constructor(node) {
    this.node = node;
    this.fieldTreeOf = this.fieldTreeOf.bind(this);
    this.stateOf = this.stateOf.bind(this);
  }
  resolve(target) {
    if (!this.cache.has(target)) {
      const resolver = computed(() => {
        const targetPathNode = FieldPathNode.unwrapFieldPath(target);
        let field = this.node;
        let stepsRemaining = getBoundPathDepth();
        while (stepsRemaining > 0 || !field.structure.logic.hasLogic(targetPathNode.root.builder)) {
          stepsRemaining--;
          field = field.structure.parent;
          if (field === void 0) {
            throw new RuntimeError(1900, ngDevMode && "Path is not part of this field tree.");
          }
        }
        for (let key of targetPathNode.keys) {
          field = field.structure.getChild(key);
          if (field === void 0) {
            throw new RuntimeError(1901, ngDevMode && `Cannot resolve path .${targetPathNode.keys.join(".")} relative to field ${["<root>", ...this.node.structure.pathKeys()].join(".")}.`);
          }
        }
        return field.fieldTree;
      }, ...ngDevMode ? [{
        debugName: "resolver"
      }] : []);
      this.cache.set(target, resolver);
    }
    return this.cache.get(target)();
  }
  get fieldTree() {
    return this.node.fieldProxy;
  }
  get state() {
    return this.node;
  }
  get value() {
    return this.node.structure.value;
  }
  get key() {
    return this.node.structure.keyInParent;
  }
  get pathKeys() {
    return this.node.structure.pathKeys;
  }
  index = computed(() => {
    const key = this.key();
    if (!isArray(untracked(this.node.structure.parent.value))) {
      throw new RuntimeError(1906, ngDevMode && "Cannot access index, parent field is not an array.");
    }
    return Number(key);
  }, ...ngDevMode ? [{
    debugName: "index"
  }] : []);
  fieldTreeOf(p) {
    return this.resolve(p);
  }
  stateOf(p) {
    return this.resolve(p)();
  }
  valueOf = (p) => {
    const result = this.resolve(p)().value();
    if (result instanceof AbstractControl) {
      throw new RuntimeError(1907, ngDevMode && `Tried to read an 'AbstractControl' value from a 'form()'. Did you mean to use 'compatForm()' instead?`);
    }
    return result;
  };
};
var FieldMetadataState = class {
  node;
  metadata = /* @__PURE__ */ new Map();
  constructor(node) {
    this.node = node;
  }
  runMetadataCreateLifecycle() {
    if (!this.node.logicNode.logic.hasMetadataKeys()) {
      return;
    }
    untracked(() => runInInjectionContext(this.node.structure.injector, () => {
      for (const key of this.node.logicNode.logic.getMetadataKeys()) {
        if (key.create) {
          const logic = this.node.logicNode.logic.getMetadata(key);
          const result = key.create(this.node, computed(() => logic.compute(this.node.context)));
          this.metadata.set(key, result);
        }
      }
    }));
  }
  get(key) {
    if (this.has(key)) {
      if (!this.metadata.has(key)) {
        if (key.create) {
          throw new RuntimeError(1912, ngDevMode && "Managed metadata cannot be created lazily");
        }
        const logic = this.node.logicNode.logic.getMetadata(key);
        this.metadata.set(key, computed(() => logic.compute(this.node.context)));
      }
    }
    return this.metadata.get(key);
  }
  has(key) {
    return this.node.logicNode.logic.hasMetadata(key);
  }
};
var FIELD_PROXY_HANDLER = {
  get(getTgt, p, receiver) {
    const tgt = getTgt();
    const child = tgt.structure.getChild(p);
    if (child !== void 0) {
      return child.fieldTree;
    }
    const value = untracked(tgt.value);
    if (isArray(value)) {
      if (p === "length") {
        return tgt.value().length;
      }
      if (p === Symbol.iterator) {
        return () => {
          tgt.value();
          return Array.prototype[Symbol.iterator].apply(tgt.fieldTree);
        };
      }
    }
    if (isObject(value)) {
      if (p === Symbol.iterator) {
        return function* () {
          for (const key in receiver) {
            yield [key, receiver[key]];
          }
        };
      }
    }
    return void 0;
  },
  getOwnPropertyDescriptor(getTgt, prop) {
    const value = untracked(getTgt().value);
    const desc = Reflect.getOwnPropertyDescriptor(value, prop);
    if (desc && !desc.configurable) {
      desc.configurable = true;
    }
    return desc;
  },
  ownKeys(getTgt) {
    const value = untracked(getTgt().value);
    return typeof value === "object" && value !== null ? Reflect.ownKeys(value) : [];
  }
};
function deepSignal(source, prop) {
  const read = computed(() => source()[prop()]);
  read[SIGNAL] = source[SIGNAL];
  read.set = (value) => {
    source.update((current) => valueForWrite(current, value, prop()));
  };
  read.update = (fn) => {
    read.set(fn(untracked(read)));
  };
  read.asReadonly = () => read;
  return read;
}
function valueForWrite(sourceValue, newPropValue, prop) {
  if (isArray(sourceValue)) {
    const newValue = [...sourceValue];
    newValue[prop] = newPropValue;
    return newValue;
  } else {
    return __spreadProps(__spreadValues({}, sourceValue), {
      [prop]: newPropValue
    });
  }
}
var FieldNodeStructure = class {
  logic;
  node;
  createChildNode;
  identitySymbol = /* @__PURE__ */ Symbol();
  _injector = void 0;
  _anyChildHasLogic;
  get injector() {
    this._injector ??= Injector.create({
      providers: [],
      parent: this.fieldManager.injector
    });
    return this._injector;
  }
  constructor(logic, node, createChildNode) {
    this.logic = logic;
    this.node = node;
    this.createChildNode = createChildNode;
  }
  children() {
    this.ensureChildrenMap();
    const map = this.childrenMap();
    if (map === void 0) {
      return [];
    }
    return Array.from(map.byPropertyKey.values()).map((child) => untracked(child.reader));
  }
  _areChildrenMaterialized() {
    return untracked(this.childrenMap) !== void 0;
  }
  ensureChildrenMap() {
    if (this._areChildrenMaterialized()) {
      return;
    }
    untracked(() => {
      this.childrenMap.update((current) => this.computeChildrenMap(this.value(), current, true));
    });
  }
  getChild(key) {
    this.ensureChildrenMap();
    const strKey = key.toString();
    let reader = untracked(this.childrenMap)?.byPropertyKey.get(strKey)?.reader;
    if (!reader) {
      reader = this.createReader(strKey);
    }
    return reader();
  }
  reduceChildren(initialValue, fn, shortCircuit) {
    const map = this.childrenMap();
    if (!map) {
      return initialValue;
    }
    let value = initialValue;
    for (const child of map.byPropertyKey.values()) {
      if (shortCircuit?.(value)) {
        break;
      }
      value = fn(untracked(child.reader), value);
    }
    return value;
  }
  destroy() {
    this.injector.destroy();
  }
  createKeyInParent(options, identityInParent, initialKeyInParent) {
    if (options.kind === "root") {
      return ROOT_KEY_IN_PARENT;
    }
    if (identityInParent === void 0) {
      const key = initialKeyInParent;
      return computed(() => {
        if (this.parent.structure.getChild(key) !== this.node) {
          throw new RuntimeError(1902, ngDevMode && `Orphan field, looking for property '${key}' of ${getDebugName(this.parent)}`);
        }
        return key;
      });
    } else {
      let lastKnownKey = initialKeyInParent;
      return computed(() => {
        const parentValue = this.parent.structure.value();
        if (!isArray(parentValue)) {
          throw new RuntimeError(1903, ngDevMode && `Orphan field, expected ${getDebugName(this.parent)} to be an array`);
        }
        const data = parentValue[lastKnownKey];
        if (isObject(data) && data.hasOwnProperty(this.parent.structure.identitySymbol) && data[this.parent.structure.identitySymbol] === identityInParent) {
          return lastKnownKey;
        }
        for (let i = 0; i < parentValue.length; i++) {
          const data2 = parentValue[i];
          if (isObject(data2) && data2.hasOwnProperty(this.parent.structure.identitySymbol) && data2[this.parent.structure.identitySymbol] === identityInParent) {
            return lastKnownKey = i.toString();
          }
        }
        throw new RuntimeError(1904, ngDevMode && `Orphan field, can't find element in array ${getDebugName(this.parent)}`);
      });
    }
  }
  createChildrenMap() {
    return linkedSignal({
      source: this.value,
      computation: (value, previous) => this.computeChildrenMap(value, previous?.value, false)
    });
  }
  computeChildrenMap(value, prevData, forceMaterialize) {
    if (!isObject(value)) {
      return void 0;
    }
    if (!forceMaterialize && prevData === void 0) {
      if (!(this._anyChildHasLogic ??= this.logic.anyChildHasLogic())) {
        return void 0;
      }
    }
    prevData ??= {
      byPropertyKey: /* @__PURE__ */ new Map()
    };
    let materializedChildren;
    const parentIsArray = isArray(value);
    if (prevData !== void 0) {
      if (parentIsArray) {
        materializedChildren = maybeRemoveStaleArrayFields(prevData, value, this.identitySymbol);
      } else {
        materializedChildren = maybeRemoveStaleObjectFields(prevData, value);
      }
    }
    for (const key of Object.keys(value)) {
      let trackingKey = void 0;
      const childValue = value[key];
      if (childValue === void 0) {
        if (prevData.byPropertyKey.has(key)) {
          materializedChildren ??= __spreadValues({}, prevData);
          materializedChildren.byPropertyKey.delete(key);
        }
        continue;
      }
      if (parentIsArray && isObject(childValue) && !isArray(childValue)) {
        trackingKey = childValue[this.identitySymbol] ??= /* @__PURE__ */ Symbol(ngDevMode ? `id:${globalId++}` : "");
      }
      let childNode;
      if (trackingKey) {
        if (!prevData.byTrackingKey?.has(trackingKey)) {
          materializedChildren ??= __spreadValues({}, prevData);
          materializedChildren.byTrackingKey ??= /* @__PURE__ */ new Map();
          materializedChildren.byTrackingKey.set(trackingKey, this.createChildNode(key, trackingKey, parentIsArray));
        }
        childNode = (materializedChildren ?? prevData).byTrackingKey.get(trackingKey);
      }
      const child = prevData.byPropertyKey.get(key);
      if (child === void 0) {
        materializedChildren ??= __spreadValues({}, prevData);
        materializedChildren.byPropertyKey.set(key, {
          reader: this.createReader(key),
          node: childNode ?? this.createChildNode(key, trackingKey, parentIsArray)
        });
      } else if (childNode && childNode !== child.node) {
        materializedChildren ??= __spreadValues({}, prevData);
        child.node = childNode;
      }
    }
    return materializedChildren ?? prevData;
  }
  createReader(key) {
    return computed(() => this.childrenMap()?.byPropertyKey.get(key)?.node);
  }
};
var RootFieldNodeStructure = class extends FieldNodeStructure {
  fieldManager;
  value;
  get parent() {
    return void 0;
  }
  get root() {
    return this.node;
  }
  get pathKeys() {
    return ROOT_PATH_KEYS;
  }
  get keyInParent() {
    return ROOT_KEY_IN_PARENT;
  }
  childrenMap;
  constructor(node, logic, fieldManager, value, createChildNode) {
    super(logic, node, createChildNode);
    this.fieldManager = fieldManager;
    this.value = value;
    this.childrenMap = this.createChildrenMap();
  }
};
var ChildFieldNodeStructure = class extends FieldNodeStructure {
  logic;
  parent;
  root;
  pathKeys;
  keyInParent;
  value;
  childrenMap;
  get fieldManager() {
    return this.root.structure.fieldManager;
  }
  constructor(node, logic, parent, identityInParent, initialKeyInParent, createChildNode) {
    super(logic, node, createChildNode);
    this.logic = logic;
    this.parent = parent;
    this.root = this.parent.structure.root;
    this.keyInParent = this.createKeyInParent({
      kind: "child",
      parent,
      pathNode: void 0,
      logic,
      initialKeyInParent,
      identityInParent,
      fieldAdapter: void 0
    }, identityInParent, initialKeyInParent);
    this.pathKeys = computed(() => [...parent.structure.pathKeys(), this.keyInParent()], ...ngDevMode ? [{
      debugName: "pathKeys"
    }] : []);
    this.value = deepSignal(this.parent.structure.value, this.keyInParent);
    this.childrenMap = this.createChildrenMap();
    this.fieldManager.structures.add(this);
  }
};
var globalId = 0;
var ROOT_PATH_KEYS = computed(() => [], ...ngDevMode ? [{
  debugName: "ROOT_PATH_KEYS"
}] : []);
var ROOT_KEY_IN_PARENT = computed(() => {
  throw new RuntimeError(1905, ngDevMode && "The top-level field in the form has no parent.");
}, ...ngDevMode ? [{
  debugName: "ROOT_KEY_IN_PARENT"
}] : []);
function getDebugName(node) {
  return `<root>.${node.structure.pathKeys().join(".")}`;
}
function maybeRemoveStaleArrayFields(prevData, value, identitySymbol) {
  let data;
  const oldKeys = new Set(prevData.byPropertyKey.keys());
  const oldTracking = new Set(prevData.byTrackingKey?.keys());
  for (let i = 0; i < value.length; i++) {
    const childValue = value[i];
    oldKeys.delete(i.toString());
    if (isObject(childValue) && childValue.hasOwnProperty(identitySymbol)) {
      oldTracking.delete(childValue[identitySymbol]);
    }
  }
  if (oldKeys.size > 0) {
    data ??= __spreadValues({}, prevData);
    for (const key of oldKeys) {
      data.byPropertyKey.delete(key);
    }
  }
  if (oldTracking.size > 0) {
    data ??= __spreadValues({}, prevData);
    for (const id of oldTracking) {
      data.byTrackingKey?.delete(id);
    }
  }
  return data;
}
function maybeRemoveStaleObjectFields(prevData, value) {
  let data;
  for (const key of prevData.byPropertyKey.keys()) {
    if (!value.hasOwnProperty(key)) {
      data ??= __spreadValues({}, prevData);
      data.byPropertyKey.delete(key);
    }
  }
  return data;
}
var FieldSubmitState = class {
  node;
  selfSubmitting = signal(false, ...ngDevMode ? [{
    debugName: "selfSubmitting"
  }] : []);
  submissionErrors;
  constructor(node) {
    this.node = node;
    this.submissionErrors = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "submissionErrors"
    } : {}), {
      source: this.node.structure.value,
      computation: () => []
    }));
  }
  submitting = computed(() => {
    return this.selfSubmitting() || (this.node.structure.parent?.submitting() ?? false);
  }, ...ngDevMode ? [{
    debugName: "submitting"
  }] : []);
};
var FieldNode = class {
  structure;
  validationState;
  metadataState;
  nodeState;
  submitState;
  fieldAdapter;
  controlValue;
  _context = void 0;
  get context() {
    return this._context ??= new FieldNodeContext(this);
  }
  fieldProxy = new Proxy(() => this, FIELD_PROXY_HANDLER);
  pathNode;
  constructor(options) {
    this.pathNode = options.pathNode;
    this.fieldAdapter = options.fieldAdapter;
    this.structure = this.fieldAdapter.createStructure(this, options);
    this.validationState = this.fieldAdapter.createValidationState(this, options);
    this.nodeState = this.fieldAdapter.createNodeState(this, options);
    this.metadataState = new FieldMetadataState(this);
    this.submitState = new FieldSubmitState(this);
    this.controlValue = this.controlValueSignal();
    this.metadataState.runMetadataCreateLifecycle();
  }
  focusBoundControl(options) {
    this.getBindingForFocus()?.focus(options);
  }
  getBindingForFocus() {
    const own = this.formFieldBindings().filter((b) => b.focus !== void 0).reduce(firstInDom, void 0);
    if (own) return own;
    return this.structure.children().map((child) => child.getBindingForFocus()).reduce(firstInDom, void 0);
  }
  pendingSync = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "pendingSync"
  } : {}), {
    source: () => this.value(),
    computation: (_source, previous) => {
      previous?.value?.abort();
      return void 0;
    }
  }));
  get fieldTree() {
    return this.fieldProxy;
  }
  get logicNode() {
    return this.structure.logic;
  }
  get value() {
    return this.structure.value;
  }
  get keyInParent() {
    return this.structure.keyInParent;
  }
  get errors() {
    return this.validationState.errors;
  }
  get parseErrors() {
    return this.validationState.parseErrors;
  }
  get errorSummary() {
    return this.validationState.errorSummary;
  }
  get pending() {
    return this.validationState.pending;
  }
  get valid() {
    return this.validationState.valid;
  }
  get invalid() {
    return this.validationState.invalid;
  }
  get dirty() {
    return this.nodeState.dirty;
  }
  get touched() {
    return this.nodeState.touched;
  }
  get disabled() {
    return this.nodeState.disabled;
  }
  get disabledReasons() {
    return this.nodeState.disabledReasons;
  }
  get hidden() {
    return this.nodeState.hidden;
  }
  get readonly() {
    return this.nodeState.readonly;
  }
  get formFieldBindings() {
    return this.nodeState.formFieldBindings;
  }
  get submitting() {
    return this.submitState.submitting;
  }
  get name() {
    return this.nodeState.name;
  }
  get max() {
    return this.metadata(MAX);
  }
  get maxLength() {
    return this.metadata(MAX_LENGTH);
  }
  get min() {
    return this.metadata(MIN);
  }
  get minLength() {
    return this.metadata(MIN_LENGTH);
  }
  get pattern() {
    return this.metadata(PATTERN) ?? EMPTY;
  }
  get required() {
    return this.metadata(REQUIRED) ?? FALSE;
  }
  metadata(key) {
    return this.metadataState.get(key);
  }
  getError(kind) {
    return this.errors().find((e) => e.kind === kind);
  }
  hasMetadata(key) {
    return this.metadataState.has(key);
  }
  markAsTouched(options) {
    untracked(() => {
      this.markAsTouchedInternal(options);
      this.flushSync();
    });
  }
  markAsTouchedInternal(options) {
    if (this.validationState.shouldSkipValidation()) {
      return;
    }
    this.nodeState.markAsTouched();
    if (options?.skipDescendants) {
      return;
    }
    for (const child of this.structure.children()) {
      child.markAsTouchedInternal();
    }
  }
  markAsDirty() {
    this.nodeState.markAsDirty();
  }
  markAsPristine() {
    this.nodeState.markAsPristine();
  }
  markAsUntouched() {
    this.nodeState.markAsUntouched();
  }
  reset(value) {
    untracked(() => this._reset(value));
  }
  _reset(value) {
    if (value !== void 0) {
      this.value.set(value);
    }
    this.nodeState.markAsUntouched();
    this.nodeState.markAsPristine();
    for (const child of this.structure.children()) {
      child._reset();
    }
  }
  reloadValidation() {
    untracked(() => this._reloadValidation());
  }
  _reloadValidation() {
    const keys = this.logicNode.logic.getMetadataKeys();
    for (const key of keys) {
      if (key[IS_ASYNC_VALIDATION_RESOURCE]) {
        const resource2 = this.metadata(key);
        resource2.reload?.();
      }
    }
    for (const child of this.structure.children()) {
      child._reloadValidation();
    }
  }
  controlValueSignal() {
    const controlValue = linkedSignal(this.value, ...ngDevMode ? [{
      debugName: "controlValue"
    }] : []);
    const {
      set,
      update
    } = controlValue;
    controlValue.set = (newValue) => {
      set(newValue);
      this.markAsDirty();
      this.debounceSync();
    };
    controlValue.update = (updateFn) => {
      update(updateFn);
      this.markAsDirty();
      this.debounceSync();
    };
    return controlValue;
  }
  sync() {
    this.value.set(this.controlValue());
  }
  flushSync() {
    const pending = this.pendingSync();
    if (pending && !pending.signal.aborted) {
      pending.abort();
      this.sync();
    }
  }
  async debounceSync() {
    const debouncer = untracked(() => {
      this.pendingSync()?.abort();
      return this.nodeState.debouncer();
    });
    if (debouncer) {
      const controller = new AbortController();
      const promise = debouncer(controller.signal);
      if (promise) {
        this.pendingSync.set(controller);
        await promise;
        if (controller.signal.aborted) {
          return;
        }
      }
    }
    this.sync();
  }
  static newRoot(fieldManager, value, pathNode, adapter) {
    return adapter.newRoot(fieldManager, value, pathNode, adapter);
  }
  createStructure(options) {
    return options.kind === "root" ? new RootFieldNodeStructure(this, options.logic, options.fieldManager, options.value, this.newChild.bind(this)) : new ChildFieldNodeStructure(this, options.logic, options.parent, options.identityInParent, options.initialKeyInParent, this.newChild.bind(this));
  }
  newChild(key, trackingId, isArray2) {
    let childPath;
    let childLogic;
    if (isArray2) {
      childPath = this.pathNode.getChild(DYNAMIC);
      childLogic = this.structure.logic.getChild(DYNAMIC);
    } else {
      childPath = this.pathNode.getChild(key);
      childLogic = this.structure.logic.getChild(key);
    }
    return this.fieldAdapter.newChild({
      kind: "child",
      parent: this,
      pathNode: childPath,
      logic: childLogic,
      initialKeyInParent: key,
      identityInParent: trackingId,
      fieldAdapter: this.fieldAdapter
    });
  }
};
var EMPTY = computed(() => [], ...ngDevMode ? [{
  debugName: "EMPTY"
}] : []);
var FALSE = computed(() => false, ...ngDevMode ? [{
  debugName: "FALSE"
}] : []);
function firstInDom(a, b) {
  if (!a) return b;
  if (!b) return a;
  const position = a.element.compareDocumentPosition(b.element);
  return position & Node.DOCUMENT_POSITION_PRECEDING ? b : a;
}
var FieldNodeState = class {
  node;
  selfTouched = signal(false, ...ngDevMode ? [{
    debugName: "selfTouched"
  }] : []);
  selfDirty = signal(false, ...ngDevMode ? [{
    debugName: "selfDirty"
  }] : []);
  markAsTouched() {
    this.selfTouched.set(true);
  }
  markAsDirty() {
    this.selfDirty.set(true);
  }
  markAsPristine() {
    this.selfDirty.set(false);
  }
  markAsUntouched() {
    this.selfTouched.set(false);
  }
  formFieldBindings = signal([], ...ngDevMode ? [{
    debugName: "formFieldBindings"
  }] : []);
  constructor(node) {
    this.node = node;
  }
  dirty = computed(() => {
    const selfDirtyValue = this.selfDirty() && !this.isNonInteractive();
    return this.node.structure.reduceChildren(selfDirtyValue, (child, value) => value || child.nodeState.dirty(), shortCircuitTrue);
  }, ...ngDevMode ? [{
    debugName: "dirty"
  }] : []);
  touched = computed(() => {
    const selfTouchedValue = this.selfTouched() && !this.isNonInteractive();
    return this.node.structure.reduceChildren(selfTouchedValue, (child, value) => value || child.nodeState.touched(), shortCircuitTrue);
  }, ...ngDevMode ? [{
    debugName: "touched"
  }] : []);
  disabledReasons = computed(() => [...this.node.structure.parent?.nodeState.disabledReasons() ?? [], ...this.node.logicNode.logic.disabledReasons.compute(this.node.context)], ...ngDevMode ? [{
    debugName: "disabledReasons"
  }] : []);
  disabled = computed(() => !!this.disabledReasons().length, ...ngDevMode ? [{
    debugName: "disabled"
  }] : []);
  readonly = computed(() => (this.node.structure.parent?.nodeState.readonly() || this.node.logicNode.logic.readonly.compute(this.node.context)) ?? false, ...ngDevMode ? [{
    debugName: "readonly"
  }] : []);
  hidden = computed(() => (this.node.structure.parent?.nodeState.hidden() || this.node.logicNode.logic.hidden.compute(this.node.context)) ?? false, ...ngDevMode ? [{
    debugName: "hidden"
  }] : []);
  name = computed(() => {
    const parent = this.node.structure.parent;
    if (!parent) {
      return this.node.structure.fieldManager.rootName;
    }
    return `${parent.name()}.${this.node.structure.keyInParent()}`;
  }, ...ngDevMode ? [{
    debugName: "name"
  }] : []);
  debouncer = computed(() => {
    if (this.node.logicNode.logic.hasMetadata(DEBOUNCER)) {
      const debouncerLogic = this.node.logicNode.logic.getMetadata(DEBOUNCER);
      const debouncer = debouncerLogic.compute(this.node.context);
      if (debouncer) {
        return (signal2) => debouncer(this.node.context, signal2);
      }
    }
    return this.node.structure.parent?.nodeState.debouncer?.();
  }, ...ngDevMode ? [{
    debugName: "debouncer"
  }] : []);
  isNonInteractive = computed(() => this.hidden() || this.disabled() || this.readonly(), ...ngDevMode ? [{
    debugName: "isNonInteractive"
  }] : []);
};
var BasicFieldAdapter = class {
  newRoot(fieldManager, value, pathNode, adapter) {
    return new FieldNode({
      kind: "root",
      fieldManager,
      value,
      pathNode,
      logic: pathNode.builder.build(),
      fieldAdapter: adapter
    });
  }
  newChild(options) {
    return new FieldNode(options);
  }
  createNodeState(node) {
    return new FieldNodeState(node);
  }
  createValidationState(node) {
    return new FieldValidationState(node);
  }
  createStructure(node, options) {
    return node.createStructure(options);
  }
};
var FormFieldManager = class {
  injector;
  rootName;
  submitOptions;
  constructor(injector, rootName, submitOptions) {
    this.injector = injector;
    this.rootName = rootName ?? `${this.injector.get(APP_ID)}.form${nextFormId++}`;
    this.submitOptions = submitOptions;
  }
  structures = /* @__PURE__ */ new Set();
  createFieldManagementEffect(root) {
    effect(() => {
      const liveStructures = /* @__PURE__ */ new Set();
      this.markStructuresLive(root, liveStructures);
      for (const structure of this.structures) {
        if (!liveStructures.has(structure)) {
          this.structures.delete(structure);
          untracked(() => structure.destroy());
        }
      }
    }, {
      injector: this.injector
    });
  }
  markStructuresLive(structure, liveStructures) {
    liveStructures.add(structure);
    for (const child of structure.children()) {
      this.markStructuresLive(child.structure, liveStructures);
    }
  }
};
var nextFormId = 0;
function normalizeFormArgs(args) {
  let model;
  let schema2;
  let options;
  if (args.length === 3) {
    [model, schema2, options] = args;
  } else if (args.length === 2) {
    if (isSchemaOrSchemaFn(args[1])) {
      [model, schema2] = args;
    } else {
      [model, options] = args;
    }
  } else {
    [model] = args;
  }
  return [model, schema2, options];
}
function form(...args) {
  const [model, schema2, options] = normalizeFormArgs(args);
  const injector = options?.injector ?? inject(Injector);
  const pathNode = runInInjectionContext(injector, () => SchemaImpl.rootCompile(schema2));
  const fieldManager = new FormFieldManager(injector, options?.name, options?.submission);
  const adapter = options?.adapter ?? new BasicFieldAdapter();
  const fieldRoot = FieldNode.newRoot(fieldManager, model, pathNode, adapter);
  fieldManager.createFieldManagementEffect(fieldRoot.structure);
  return fieldRoot.fieldTree;
}
function applyEach(path, schema2) {
  assertPathIsCurrent(path);
  const elementPath = FieldPathNode.unwrapFieldPath(path).getChild(DYNAMIC).fieldPathProxy;
  apply(elementPath, schema2);
}
function apply(path, schema2) {
  assertPathIsCurrent(path);
  const pathNode = FieldPathNode.unwrapFieldPath(path);
  pathNode.mergeIn(SchemaImpl.create(schema2));
}
function applyWhen(path, logic, schema2) {
  assertPathIsCurrent(path);
  const pathNode = FieldPathNode.unwrapFieldPath(path);
  pathNode.mergeIn(SchemaImpl.create(schema2), {
    fn: logic,
    path
  });
}
function applyWhenValue(path, predicate, schema2) {
  applyWhen(path, ({
    value
  }) => predicate(value()), schema2);
}
async function submit(form2, options) {
  const node = untracked(form2);
  const field = options === void 0 ? node.structure.root.fieldProxy : form2;
  const detail = {
    root: node.structure.root.fieldProxy,
    submitted: form2
  };
  options = typeof options === "function" ? {
    action: options
  } : options ?? node.structure.fieldManager.submitOptions;
  const action = options?.action;
  if (!action) {
    throw new RuntimeError(1915, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot submit form with no submit action. Specify the action when creating the form, or as an additional argument to `submit()`.");
  }
  node.markAsTouched();
  const onInvalid = options?.onInvalid;
  const shouldRun = shouldRunAction(node, options?.ignoreValidators);
  try {
    if (shouldRun) {
      node.submitState.selfSubmitting.set(true);
      const errors = await untracked(() => action?.(field, detail));
      errors && setSubmissionErrors(node, errors);
      return !errors || isArray(errors) && errors.length === 0;
    } else {
      untracked(() => onInvalid?.(field, detail));
    }
    return false;
  } finally {
    node.submitState.selfSubmitting.set(false);
  }
}
function schema(fn) {
  return SchemaImpl.create(fn);
}
function shouldRunAction(node, ignoreValidators) {
  switch (ignoreValidators) {
    case "all":
      return true;
    case "none":
      return untracked(node.valid);
    default:
      return !untracked(node.invalid);
  }
}
function setSubmissionErrors(submittedField, errors) {
  if (!isArray(errors)) {
    errors = [errors];
  }
  const errorsByField = /* @__PURE__ */ new Map();
  for (const error of errors) {
    const errorWithField = addDefaultField(error, submittedField.fieldTree);
    const field = errorWithField.fieldTree();
    let fieldErrors = errorsByField.get(field);
    if (!fieldErrors) {
      fieldErrors = [];
      errorsByField.set(field, fieldErrors);
    }
    fieldErrors.push(errorWithField);
  }
  for (const [field, fieldErrors] of errorsByField) {
    field.submitState.submissionErrors.set(fieldErrors);
  }
}
var CompatValidationError = class {
  kind = "compat";
  control;
  fieldTree;
  context;
  message;
  constructor({
    context,
    kind,
    control
  }) {
    this.context = context;
    this.kind = kind;
    this.control = control;
  }
};
function signalErrorsToValidationErrors(errors) {
  if (errors.length === 0) {
    return null;
  }
  const errObj = {};
  for (const error of errors) {
    errObj[error.kind] = error instanceof CompatValidationError ? error.context : error;
  }
  return errObj;
}

// node_modules/.pnpm/@angular+forms@22.0.0-next.6_@angular+common@22.0.0-next.6_@angular+core@22.0.0-next.6__84000cb4d9ba85a6c7aa5e647e591e4e/node_modules/@angular/forms/fesm2022/signals.mjs
var SIGNAL_FORMS_CONFIG = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "SIGNAL_FORMS_CONFIG" : "");
function disabled(path, logic) {
  assertPathIsCurrent(path);
  const pathNode = FieldPathNode.unwrapFieldPath(path);
  pathNode.builder.addDisabledReasonRule((ctx) => {
    let result = true;
    if (typeof logic === "string") {
      result = logic;
    } else if (logic) {
      result = logic(ctx);
    }
    if (typeof result === "string") {
      return {
        fieldTree: ctx.fieldTree,
        message: result
      };
    }
    return result ? {
      fieldTree: ctx.fieldTree
    } : void 0;
  });
}
function readonly(path, logic = () => true) {
  assertPathIsCurrent(path);
  const pathNode = FieldPathNode.unwrapFieldPath(path);
  pathNode.builder.addReadonlyRule(logic);
}
function getLengthOrSize(value) {
  const v = value;
  return typeof v.length === "number" ? v.length : v.size;
}
function getOption(opt, ctx) {
  return opt instanceof Function ? opt(ctx) : opt;
}
function isEmpty(value) {
  if (typeof value === "number") {
    return isNaN(value);
  }
  return value === "" || value === false || value == null;
}
function normalizeErrors2(error) {
  if (error === void 0) {
    return [];
  }
  if (Array.isArray(error)) {
    return error;
  }
  return [error];
}
function validate(path, logic) {
  assertPathIsCurrent(path);
  const pathNode = FieldPathNode.unwrapFieldPath(path);
  pathNode.builder.addSyncErrorRule((ctx) => {
    return addDefaultField(logic(ctx), ctx.fieldTree);
  });
}
function requiredError(options) {
  return new RequiredValidationError(options);
}
function minError(min, options) {
  return new MinValidationError(min, options);
}
function maxError(max, options) {
  return new MaxValidationError(max, options);
}
function minLengthError(minLength2, options) {
  return new MinLengthValidationError(minLength2, options);
}
function maxLengthError(maxLength2, options) {
  return new MaxLengthValidationError(maxLength2, options);
}
function patternError(pattern, options) {
  return new PatternValidationError(pattern, options);
}
var BaseNgValidationError = class {
  __brand = void 0;
  kind = "";
  fieldTree;
  message;
  constructor(options) {
    if (options) {
      Object.assign(this, options);
    }
  }
};
var RequiredValidationError = class extends BaseNgValidationError {
  kind = "required";
};
var MinValidationError = class extends BaseNgValidationError {
  min;
  kind = "min";
  constructor(min, options) {
    super(options);
    this.min = min;
  }
};
var MaxValidationError = class extends BaseNgValidationError {
  max;
  kind = "max";
  constructor(max, options) {
    super(options);
    this.max = max;
  }
};
var MinLengthValidationError = class extends BaseNgValidationError {
  minLength;
  kind = "minLength";
  constructor(minLength2, options) {
    super(options);
    this.minLength = minLength2;
  }
};
var MaxLengthValidationError = class extends BaseNgValidationError {
  maxLength;
  kind = "maxLength";
  constructor(maxLength2, options) {
    super(options);
    this.maxLength = maxLength2;
  }
};
var PatternValidationError = class extends BaseNgValidationError {
  pattern;
  kind = "pattern";
  constructor(pattern, options) {
    super(options);
    this.pattern = pattern;
  }
};
var NativeInputParseError = class extends BaseNgValidationError {
  kind = "parse";
};
function maxLength(path, maxLength2, config) {
  const MAX_LENGTH_MEMO = metadata(path, createMetadataKey(), (ctx) => typeof maxLength2 === "number" ? maxLength2 : maxLength2(ctx));
  metadata(path, MAX_LENGTH, ({
    state
  }) => state.metadata(MAX_LENGTH_MEMO)());
  validate(path, (ctx) => {
    if (isEmpty(ctx.value())) {
      return void 0;
    }
    const maxLength3 = ctx.state.metadata(MAX_LENGTH_MEMO)();
    if (maxLength3 === void 0) {
      return void 0;
    }
    if (getLengthOrSize(ctx.value()) > maxLength3) {
      if (config?.error) {
        return getOption(config.error, ctx);
      } else {
        return maxLengthError(maxLength3, {
          message: getOption(config?.message, ctx)
        });
      }
    }
    return void 0;
  });
}
function minLength(path, minLength2, config) {
  const MIN_LENGTH_MEMO = metadata(path, createMetadataKey(), (ctx) => typeof minLength2 === "number" ? minLength2 : minLength2(ctx));
  metadata(path, MIN_LENGTH, ({
    state
  }) => state.metadata(MIN_LENGTH_MEMO)());
  validate(path, (ctx) => {
    if (isEmpty(ctx.value())) {
      return void 0;
    }
    const minLength3 = ctx.state.metadata(MIN_LENGTH_MEMO)();
    if (minLength3 === void 0) {
      return void 0;
    }
    if (getLengthOrSize(ctx.value()) < minLength3) {
      if (config?.error) {
        return getOption(config.error, ctx);
      } else {
        return minLengthError(minLength3, {
          message: getOption(config?.message, ctx)
        });
      }
    }
    return void 0;
  });
}
function required(path, config) {
  const REQUIRED_MEMO = metadata(path, createMetadataKey(), (ctx) => config?.when ? config.when(ctx) : true);
  metadata(path, REQUIRED, ({
    state
  }) => state.metadata(REQUIRED_MEMO)());
  validate(path, (ctx) => {
    if (ctx.state.metadata(REQUIRED_MEMO)() && isEmpty(ctx.value())) {
      if (config?.error) {
        return getOption(config.error, ctx);
      } else {
        return requiredError({
          message: getOption(config?.message, ctx)
        });
      }
    }
    return void 0;
  });
}
function validateAsync(path, opts) {
  assertPathIsCurrent(path);
  const pathNode = FieldPathNode.unwrapFieldPath(path);
  const RESOURCE = createManagedMetadataKey((_state, params) => {
    if (opts.debounce !== void 0) {
      const debouncedResource = debounced(() => params(), opts.debounce);
      return opts.factory(debouncedResource.value);
    }
    return opts.factory(params);
  });
  RESOURCE[IS_ASYNC_VALIDATION_RESOURCE] = true;
  metadata(path, RESOURCE, (ctx) => {
    const node = ctx.stateOf(path);
    const validationState = node.validationState;
    if (validationState.shouldSkipValidation() || !validationState.syncValid()) {
      return void 0;
    }
    return opts.params(ctx);
  });
  pathNode.builder.addAsyncErrorRule((ctx) => {
    const res = ctx.state.metadata(RESOURCE);
    let errors;
    switch (res.status()) {
      case "idle":
        return void 0;
      case "loading":
      case "reloading":
        return "pending";
      case "resolved":
      case "local":
        if (!res.hasValue()) {
          return void 0;
        }
        errors = opts.onSuccess(res.value(), ctx);
        return addDefaultField(errors, ctx.fieldTree);
      case "error":
        errors = opts.onError(res.error(), ctx);
        return addDefaultField(errors, ctx.fieldTree);
    }
  });
}
function createParser(getValue, setValue, parse) {
  const errors = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "errors"
  } : {}), {
    source: getValue,
    computation: () => []
  }));
  const setRawValue = (rawValue) => {
    const result = parse(rawValue);
    errors.set(normalizeErrors2(result.error));
    if (result.value !== void 0) {
      setValue(result.value);
    }
    errors.set(normalizeErrors2(result.error));
  };
  return {
    errors: errors.asReadonly(),
    setRawValue
  };
}
function transformedValue(value, options) {
  const {
    parse,
    format
  } = options;
  const parser = createParser(value, value.set, parse);
  const formFieldParseErrors = inject(\u0275FORM_FIELD_PARSE_ERRORS, {
    self: true,
    optional: true
  });
  if (formFieldParseErrors) {
    formFieldParseErrors.set(parser.errors);
  }
  const rawValue = linkedSignal(() => format(value()), ...ngDevMode ? [{
    debugName: "rawValue"
  }] : []);
  const result = rawValue;
  result.parseErrors = parser.errors;
  const originalSet = result.set.bind(result);
  result.set = (newRawValue) => {
    parser.setRawValue(newRawValue);
    originalSet(newRawValue);
  };
  result.update = (updateFn) => {
    result.set(updateFn(rawValue()));
  };
  return result;
}
var InteropNgControl = class {
  field;
  constructor(field) {
    this.field = field;
  }
  control = this;
  get value() {
    return this.field().value();
  }
  get valid() {
    return this.field().valid();
  }
  get invalid() {
    return this.field().invalid();
  }
  get pending() {
    return this.field().pending();
  }
  get disabled() {
    return this.field().disabled();
  }
  get enabled() {
    return !this.field().disabled();
  }
  get errors() {
    return signalErrorsToValidationErrors(this.field().errors());
  }
  get pristine() {
    return !this.field().dirty();
  }
  get dirty() {
    return this.field().dirty();
  }
  get touched() {
    return this.field().touched();
  }
  get untouched() {
    return !this.field().touched();
  }
  get status() {
    if (this.field().disabled()) {
      return "DISABLED";
    }
    if (this.field().valid()) {
      return "VALID";
    }
    if (this.field().invalid()) {
      return "INVALID";
    }
    if (this.field().pending()) {
      return "PENDING";
    }
    throw new RuntimeError(1910, ngDevMode && "Unknown form control status");
  }
  valueAccessor = null;
  hasValidator(validator) {
    if (validator === Validators.required) {
      return this.field().required();
    }
    return false;
  }
  updateValueAndValidity() {
  }
};
var FIELD_STATE_KEY_TO_CONTROL_BINDING = {
  disabled: "disabled",
  disabledReasons: "disabledReasons",
  dirty: "dirty",
  errors: "errors",
  hidden: "hidden",
  invalid: "invalid",
  max: "max",
  maxLength: "maxLength",
  min: "min",
  minLength: "minLength",
  name: "name",
  pattern: "pattern",
  pending: "pending",
  readonly: "readonly",
  required: "required",
  touched: "touched"
};
var CONTROL_BINDING_TO_FIELD_STATE_KEY = /* @__PURE__ */ (() => {
  const map = {};
  for (const key of Object.keys(FIELD_STATE_KEY_TO_CONTROL_BINDING)) {
    map[FIELD_STATE_KEY_TO_CONTROL_BINDING[key]] = key;
  }
  return map;
})();
function readFieldStateBindingValue(fieldState, key) {
  const property = CONTROL_BINDING_TO_FIELD_STATE_KEY[key];
  return fieldState[property]?.();
}
var CONTROL_BINDING_NAMES = /* @__PURE__ */ (() => Object.values(FIELD_STATE_KEY_TO_CONTROL_BINDING))();
function createBindings() {
  return {};
}
function bindingUpdated(bindings, key, value) {
  if (bindings[key] !== value) {
    bindings[key] = value;
    return true;
  }
  return false;
}
function getNativeControlValue(element, currentValue, validityMonitor) {
  let modelValue;
  if (isInput(element) && validityMonitor.isBadInput(element)) {
    return {
      error: new NativeInputParseError()
    };
  }
  switch (element.type) {
    case "checkbox":
      return {
        value: element.checked
      };
    case "number":
    case "range":
    case "datetime-local":
      modelValue = untracked(currentValue);
      if (typeof modelValue === "number" || modelValue === null) {
        return {
          value: element.value === "" ? null : element.valueAsNumber
        };
      }
      break;
    case "date":
    case "month":
    case "time":
    case "week":
      modelValue = untracked(currentValue);
      if (modelValue === null || modelValue instanceof Date) {
        return {
          value: element.valueAsDate
        };
      } else if (typeof modelValue === "number") {
        return {
          value: element.valueAsNumber
        };
      }
      break;
  }
  if (element.tagName === "INPUT" && element.type === "text") {
    modelValue ??= untracked(currentValue);
    if (typeof modelValue === "number" || modelValue === null) {
      if (element.value === "") {
        return {
          value: null
        };
      }
      const parsed = Number(element.value);
      if (Number.isNaN(parsed)) {
        return {
          error: new NativeInputParseError()
        };
      }
      return {
        value: parsed
      };
    }
  }
  return {
    value: element.value
  };
}
function setNativeControlValue(element, value) {
  switch (element.type) {
    case "checkbox":
      element.checked = value;
      return;
    case "radio":
      element.checked = value === element.value;
      return;
    case "number":
    case "range":
    case "datetime-local":
      if (typeof value === "number") {
        setNativeNumberControlValue(element, value);
        return;
      } else if (value === null) {
        element.value = "";
        return;
      }
      break;
    case "date":
    case "month":
    case "time":
    case "week":
      if (value === null || value instanceof Date) {
        element.valueAsDate = value;
        return;
      } else if (typeof value === "number") {
        setNativeNumberControlValue(element, value);
        return;
      }
  }
  if (element.tagName === "INPUT" && element.type === "text") {
    if (typeof value === "number") {
      element.value = isNaN(value) ? "" : String(value);
      return;
    }
    if (value === null) {
      element.value = "";
      return;
    }
  }
  element.value = value;
}
function setNativeNumberControlValue(element, value) {
  if (isNaN(value)) {
    element.value = "";
  } else {
    element.valueAsNumber = value;
  }
}
function isInput(element) {
  return element.tagName === "INPUT";
}
function inputRequiresValidityTracking(input2) {
  return input2.type === "date" || input2.type === "datetime-local" || input2.type === "month" || input2.type === "time" || input2.type === "week";
}
function customControlCreate(host, parent) {
  host.listenToCustomControlModel((value) => parent.state().controlValue.set(value));
  host.listenToCustomControlOutput("touch", () => parent.state().markAsTouched());
  parent.registerAsBinding(host.customControl);
  const bindings = createBindings();
  return () => {
    const state = parent.state();
    const controlValue = state.controlValue();
    if (bindingUpdated(bindings, "controlValue", controlValue)) {
      host.setCustomControlModelInput(controlValue);
    }
    for (const name of CONTROL_BINDING_NAMES) {
      let value;
      if (name === "errors") {
        value = parent.errors();
      } else {
        value = readFieldStateBindingValue(state, name);
      }
      if (bindingUpdated(bindings, name, value)) {
        host.setInputOnDirectives(name, value);
        if (parent.elementAcceptsNativeProperty(name) && !host.customControlHasInput(name)) {
          setNativeDomProperty(parent.renderer, parent.nativeFormElement, name, value);
        }
      }
    }
  };
}
function cvaControlCreate(host, parent) {
  parent.controlValueAccessor.registerOnChange((value) => parent.state().controlValue.set(value));
  parent.controlValueAccessor.registerOnTouched(() => parent.state().markAsTouched());
  parent.registerAsBinding();
  const bindings = createBindings();
  return () => {
    const fieldState = parent.state();
    const value = fieldState.value();
    if (bindingUpdated(bindings, "controlValue", value)) {
      untracked(() => parent.controlValueAccessor.writeValue(value));
    }
    for (const name of CONTROL_BINDING_NAMES) {
      const value2 = readFieldStateBindingValue(fieldState, name);
      if (bindingUpdated(bindings, name, value2)) {
        const propertyWasSet = host.setInputOnDirectives(name, value2);
        if (name === "disabled" && parent.controlValueAccessor.setDisabledState) {
          untracked(() => parent.controlValueAccessor.setDisabledState(value2));
        } else if (!propertyWasSet && parent.elementAcceptsNativeProperty(name)) {
          setNativeDomProperty(parent.renderer, parent.nativeFormElement, name, value2);
        }
      }
    }
  };
}
function observeSelectMutations(select, onMutation, destroyRef) {
  if (typeof MutationObserver !== "function") {
    return;
  }
  const observer = new MutationObserver((mutations) => {
    if (mutations.some((m) => isRelevantSelectMutation(m))) {
      onMutation();
    }
  });
  observer.observe(select, {
    attributes: true,
    attributeFilter: ["value"],
    characterData: true,
    childList: true,
    subtree: true
  });
  destroyRef.onDestroy(() => observer.disconnect());
}
function isRelevantSelectMutation(mutation) {
  if (mutation.type === "childList" || mutation.type === "characterData") {
    if (mutation.target instanceof Comment) {
      return false;
    }
    for (const node of mutation.addedNodes) {
      if (!(node instanceof Comment)) {
        return true;
      }
    }
    for (const node of mutation.removedNodes) {
      if (!(node instanceof Comment)) {
        return true;
      }
    }
    return false;
  }
  if (mutation.type === "attributes" && mutation.target instanceof HTMLOptionElement) {
    return true;
  }
  return false;
}
function nativeControlCreate(host, parent, parseErrorsSource, validityMonitor) {
  let updateMode = false;
  const input2 = parent.nativeFormElement;
  const parser = createParser(() => parent.state().value(), (rawValue) => parent.state().controlValue.set(rawValue), (_rawValue) => getNativeControlValue(input2, parent.state().value, validityMonitor));
  parseErrorsSource.set(parser.errors);
  host.listenToDom("input", () => parser.setRawValue(void 0));
  host.listenToDom("blur", () => parent.state().markAsTouched());
  if (isInput(input2) && inputRequiresValidityTracking(input2)) {
    validityMonitor.watchValidity(input2, () => parser.setRawValue(void 0));
  }
  parent.registerAsBinding();
  if (input2.tagName === "SELECT") {
    observeSelectMutations(input2, () => {
      if (!updateMode) {
        return;
      }
      input2.value = parent.state().controlValue();
    }, parent.destroyRef);
  }
  const bindings = createBindings();
  return () => {
    const state = parent.state();
    const controlValue = state.controlValue();
    if (bindingUpdated(bindings, "controlValue", controlValue)) {
      setNativeControlValue(input2, controlValue);
    }
    for (const name of CONTROL_BINDING_NAMES) {
      const value = readFieldStateBindingValue(state, name);
      if (bindingUpdated(bindings, name, value)) {
        host.setInputOnDirectives(name, value);
        if (parent.elementAcceptsNativeProperty(name)) {
          setNativeDomProperty(parent.renderer, input2, name, value);
        }
      }
    }
    updateMode = true;
  };
}
var InputValidityMonitor = class _InputValidityMonitor {
  static \u0275fac = function InputValidityMonitor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputValidityMonitor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputValidityMonitor,
    factory: (__ngFactoryType__) => AnimationInputValidityMonitor.\u0275fac(__ngFactoryType__),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputValidityMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useClass: forwardRef(() => AnimationInputValidityMonitor)
    }]
  }], null, null);
})();
var AnimationInputValidityMonitor = class _AnimationInputValidityMonitor extends InputValidityMonitor {
  document = inject(DOCUMENT);
  cspNonce = inject(CSP_NONCE, {
    optional: true
  });
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  injectedStyles = /* @__PURE__ */ new WeakMap();
  watchValidity(element, callback) {
    if (!this.isBrowser) {
      return;
    }
    const rootNode = element.getRootNode();
    if (!this.injectedStyles.has(rootNode)) {
      this.injectedStyles.set(rootNode, this.createTransitionStyle(rootNode));
    }
    element.addEventListener("animationstart", (event) => {
      const animationEvent = event;
      if (animationEvent.animationName === "ng-valid" || animationEvent.animationName === "ng-invalid") {
        callback();
      }
    });
  }
  isBadInput(element) {
    return element.validity?.badInput ?? false;
  }
  createTransitionStyle(rootNode) {
    const element = this.document.createElement("style");
    if (this.cspNonce) {
      element.nonce = this.cspNonce;
    }
    element.textContent = `
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `;
    if (rootNode.nodeType === 9) {
      rootNode.head?.appendChild(element);
    } else {
      rootNode.appendChild(element);
    }
    return element;
  }
  ngOnDestroy() {
    this.injectedStyles.get(this.document)?.remove();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AnimationInputValidityMonitor_BaseFactory;
    return function AnimationInputValidityMonitor_Factory(__ngFactoryType__) {
      return (\u0275AnimationInputValidityMonitor_BaseFactory || (\u0275AnimationInputValidityMonitor_BaseFactory = \u0275\u0275getInheritedFactory(_AnimationInputValidityMonitor)))(__ngFactoryType__ || _AnimationInputValidityMonitor);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationInputValidityMonitor,
    factory: _AnimationInputValidityMonitor.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationInputValidityMonitor, [{
    type: Injectable
  }], null, null);
})();
var \u0275NgFieldDirective = /* @__PURE__ */ Symbol();
var FORM_FIELD = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "FORM_FIELD" : "");
var FormField = class _FormField {
  field = input.required(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "field"
  } : {}), {
    alias: "formField"
  }));
  state = computed(() => this.field()(), ...ngDevMode ? [{
    debugName: "state"
  }] : []);
  renderer = inject(Renderer2);
  destroyRef = inject(DestroyRef);
  injector = inject(Injector);
  element = inject(ElementRef).nativeElement;
  elementIsNativeFormElement = isNativeFormElement(this.element);
  elementAcceptsNumericValues = isNumericFormElement(this.element);
  elementAcceptsTextualValues = isTextualFormElement(this.element);
  nativeFormElement = this.elementIsNativeFormElement ? this.element : void 0;
  focuser = (options) => this.element.focus(options);
  controlValueAccessors = inject(NG_VALUE_ACCESSOR, {
    optional: true,
    self: true
  });
  config = inject(SIGNAL_FORMS_CONFIG, {
    optional: true
  });
  validityMonitor = inject(InputValidityMonitor);
  parseErrorsSource = signal(void 0, ...ngDevMode ? [{
    debugName: "parseErrorsSource"
  }] : []);
  _interopNgControl;
  get interopNgControl() {
    return this._interopNgControl ??= new InteropNgControl(this.state);
  }
  parseErrors = computed(() => this.parseErrorsSource()?.().map((err) => __spreadProps(__spreadValues({}, err), {
    fieldTree: untracked(this.state).fieldTree,
    formField: this
  })) ?? [], ...ngDevMode ? [{
    debugName: "parseErrors"
  }] : []);
  errors = computed(() => this.state().errors().filter((err) => !err.formField || err.formField === this), ...ngDevMode ? [{
    debugName: "errors"
  }] : []);
  isFieldBinding = false;
  get controlValueAccessor() {
    return this.controlValueAccessors?.[0] ?? this.interopNgControl?.valueAccessor ?? void 0;
  }
  installClassBindingEffect() {
    const classes = Object.entries(this.config?.classes ?? {}).map(([className, computation]) => [className, computed(() => computation(this))]);
    if (classes.length === 0) {
      return;
    }
    const bindings = createBindings();
    afterRenderEffect({
      write: () => {
        for (const [className, computation] of classes) {
          const active = computation();
          if (bindingUpdated(bindings, className, active)) {
            if (active) {
              this.renderer.addClass(this.element, className);
            } else {
              this.renderer.removeClass(this.element, className);
            }
          }
        }
      }
    }, {
      injector: this.injector
    });
  }
  focus(options) {
    this.focuser(options);
  }
  registerAsBinding(bindingOptions) {
    if (this.isFieldBinding) {
      throw new RuntimeError(1913, typeof ngDevMode !== "undefined" && ngDevMode && "FormField already registered as a binding");
    }
    this.isFieldBinding = true;
    this.installClassBindingEffect();
    if (bindingOptions?.focus) {
      this.focuser = (focusOptions) => bindingOptions.focus(focusOptions);
    }
    effect((onCleanup) => {
      const fieldNode = this.state();
      fieldNode.nodeState.formFieldBindings.update((controls) => [...controls, this]);
      onCleanup(() => {
        fieldNode.nodeState.formFieldBindings.update((controls) => controls.filter((c) => c !== this));
      });
    }, {
      injector: this.injector
    });
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      effect(() => {
        const fieldNode = this.state();
        if (fieldNode.hidden()) {
          const path = fieldNode.structure.pathKeys().join(".") || "<root>";
          console.warn(formatRuntimeError(1916, `Field '${path}' is hidden but is being rendered. Hidden fields should be removed from the DOM using @if.`));
        }
      }, {
        injector: this.injector
      });
    }
  }
  [\u0275NgFieldDirective];
  \u0275ngControlCreate(host) {
    if (host.hasPassThrough) {
      return;
    }
    if (this.controlValueAccessor) {
      this.\u0275ngControlUpdate = cvaControlCreate(host, this);
    } else if (host.customControl) {
      this.\u0275ngControlUpdate = customControlCreate(host, this);
    } else if (this.elementIsNativeFormElement) {
      this.\u0275ngControlUpdate = nativeControlCreate(host, this, this.parseErrorsSource, this.validityMonitor);
    } else {
      throw new RuntimeError(1914, typeof ngDevMode !== "undefined" && ngDevMode && `${host.descriptor} is an invalid [formField] directive host. The host must be a native form control (such as <input>', '<select>', or '<textarea>') or a custom form control with a 'value' or 'checked' model.`);
    }
  }
  \u0275ngControlUpdate;
  elementAcceptsNativeProperty(key) {
    if (!this.elementIsNativeFormElement) {
      return false;
    }
    switch (key) {
      case "min":
      case "max":
        return this.elementAcceptsNumericValues;
      case "minLength":
      case "maxLength":
        return this.elementAcceptsTextualValues;
      case "disabled":
      case "required":
      case "readonly":
      case "name":
        return true;
      default:
        return false;
    }
  }
  static \u0275fac = function FormField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormField)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormField,
    selectors: [["", "formField", ""]],
    inputs: {
      field: [1, "formField", "field"]
    },
    exportAs: ["formField"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: FORM_FIELD,
      useExisting: _FormField
    }, {
      provide: NgControl,
      useFactory: () => inject(_FormField).interopNgControl
    }, {
      provide: \u0275FORM_FIELD_PARSE_ERRORS,
      useFactory: () => inject(_FormField).parseErrorsSource
    }]), \u0275\u0275ControlFeature("formField")]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormField, [{
    type: Directive,
    args: [{
      selector: "[formField]",
      exportAs: "formField",
      providers: [{
        provide: FORM_FIELD,
        useExisting: FormField
      }, {
        provide: NgControl,
        useFactory: () => inject(FormField).interopNgControl
      }, {
        provide: \u0275FORM_FIELD_PARSE_ERRORS,
        useFactory: () => inject(FormField).parseErrorsSource
      }]
    }]
  }], null, {
    field: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "formField",
        required: true
      }]
    }]
  });
})();
var FormRoot = class _FormRoot {
  fieldTree = input.required(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fieldTree"
  } : {}), {
    alias: "formRoot"
  }));
  onSubmit(event) {
    event.preventDefault();
    untracked(() => {
      const fieldTree = this.fieldTree();
      const node = fieldTree();
      if (node.structure.fieldManager.submitOptions) {
        submit(fieldTree);
      }
    });
  }
  static \u0275fac = function FormRoot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormRoot)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormRoot,
    selectors: [["form", "formRoot", ""]],
    hostAttrs: ["novalidate", ""],
    hostBindings: function FormRoot_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormRoot_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        });
      }
    },
    inputs: {
      fieldTree: [1, "formRoot", "fieldTree"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormRoot, [{
    type: Directive,
    args: [{
      selector: "form[formRoot]",
      host: {
        "novalidate": "",
        "(submit)": "onSubmit($event)"
      }
    }]
  }], null, {
    fieldTree: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "formRoot",
        required: true
      }]
    }]
  });
})();

export {
  form,
  applyEach,
  apply,
  applyWhenValue,
  schema,
  disabled,
  readonly,
  validate,
  minError,
  maxError,
  minLengthError,
  patternError,
  MaxLengthValidationError,
  maxLength,
  minLength,
  required,
  validateAsync,
  transformedValue,
  FormField,
  FormRoot
};
