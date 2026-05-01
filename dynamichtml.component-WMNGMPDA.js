import {
  DomSanitizer
} from "./chunk-MOADGNT5.js";
import "./chunk-KVEFCSSA.js";
import "./chunk-H4KT6OWY.js";
import "./chunk-7RJGAWPH.js";
import {
  ApplicationRef,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  Input,
  NgZone,
  Observable,
  ReplaySubject,
  SecurityContext,
  afterNextRender,
  createComponent,
  inject,
  isSignal,
  isViewDirty,
  markForRefresh,
  merge,
  reflectComponentType,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-T5ZKQ47R.js";
import "./chunk-KCHQYSDT.js";

// node_modules/.pnpm/@angular+elements@22.0.0-next.10_@angular+core@22.0.0-next.10_@angular+compiler@22.0.0-next.10_rxjs@7.8.2__rxjs@7.8.2/node_modules/@angular/elements/fesm2022/elements.mjs
var scheduler = {
  schedule(taskFn, delay) {
    const id = setTimeout(taskFn, delay);
    return () => clearTimeout(id);
  }
};
function camelToDashCase(input) {
  return input.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
}
function isElement(node) {
  return !!node && node.nodeType === Node.ELEMENT_NODE;
}
var _matches;
function matchesSelector(el, selector) {
  if (!_matches) {
    const elProto = Element.prototype;
    _matches = elProto.matches || elProto.matchesSelector || elProto.mozMatchesSelector || elProto.msMatchesSelector || elProto.oMatchesSelector || elProto.webkitMatchesSelector;
  }
  return el.nodeType === Node.ELEMENT_NODE ? _matches.call(el, selector) : false;
}
function getDefaultAttributeToPropertyInputs(inputs) {
  const attributeToPropertyInputs = {};
  inputs.forEach(({
    propName,
    templateName,
    transform
  }) => {
    attributeToPropertyInputs[camelToDashCase(templateName)] = [propName, transform];
  });
  return attributeToPropertyInputs;
}
function getComponentInputs(component, injector) {
  return reflectComponentType(component).inputs;
}
function extractProjectableNodes(host, ngContentSelectors) {
  const nodes = host.childNodes;
  const projectableNodes = ngContentSelectors.map(() => []);
  let wildcardIndex = -1;
  ngContentSelectors.some((selector, i) => {
    if (selector === "*") {
      wildcardIndex = i;
      return true;
    }
    return false;
  });
  for (let i = 0, ii = nodes.length; i < ii; ++i) {
    const node = nodes[i];
    const ngContentIndex = findMatchingIndex(node, ngContentSelectors, wildcardIndex);
    if (ngContentIndex !== -1) {
      projectableNodes[ngContentIndex].push(node);
    }
  }
  return projectableNodes;
}
function findMatchingIndex(node, selectors, defaultIndex) {
  let matchingIndex = defaultIndex;
  if (isElement(node)) {
    selectors.some((selector, i) => {
      if (selector !== "*" && matchesSelector(node, selector)) {
        matchingIndex = i;
        return true;
      }
      return false;
    });
  }
  return matchingIndex;
}
var DESTROY_DELAY = 10;
var ComponentNgElementStrategyFactory = class {
  component;
  componentMirror;
  inputMap = /* @__PURE__ */ new Map();
  constructor(component) {
    this.component = component;
    this.componentMirror = reflectComponentType(component);
    for (const input of this.componentMirror.inputs) {
      this.inputMap.set(input.propName, input.templateName);
    }
  }
  create(injector) {
    return new ComponentNgElementStrategy(this.component, injector, this.inputMap);
  }
};
var ComponentNgElementStrategy = class {
  component;
  injector;
  inputMap;
  eventEmitters = new ReplaySubject(1);
  events = this.eventEmitters.pipe(switchMap((emitters) => merge(...emitters)));
  componentRef = null;
  scheduledDestroyFn = null;
  initialInputValues = /* @__PURE__ */ new Map();
  ngZone;
  elementZone;
  appRef;
  cdScheduler;
  constructor(component, injector, inputMap) {
    this.component = component;
    this.injector = injector;
    this.inputMap = inputMap;
    this.ngZone = this.injector.get(NgZone);
    this.appRef = this.injector.get(ApplicationRef);
    this.cdScheduler = injector.get(ChangeDetectionScheduler);
    this.elementZone = typeof Zone === "undefined" ? null : this.ngZone.run(() => Zone.current);
  }
  connect(element) {
    this.runInZone(() => {
      if (this.scheduledDestroyFn !== null) {
        this.scheduledDestroyFn();
        this.scheduledDestroyFn = null;
        return;
      }
      if (this.componentRef === null) {
        this.initializeComponent(element);
      }
    });
  }
  disconnect() {
    this.runInZone(() => {
      if (this.componentRef === null || this.scheduledDestroyFn !== null) {
        return;
      }
      this.scheduledDestroyFn = scheduler.schedule(() => {
        if (this.componentRef !== null) {
          this.componentRef.destroy();
          this.componentRef = null;
        }
      }, DESTROY_DELAY);
    });
  }
  getInputValue(property) {
    return this.runInZone(() => {
      if (this.componentRef === null) {
        return this.initialInputValues.get(property);
      }
      return this.componentRef.instance[property];
    });
  }
  setInputValue(property, value) {
    if (this.componentRef === null) {
      this.initialInputValues.set(property, value);
      return;
    }
    this.runInZone(() => {
      this.componentRef.setInput(this.inputMap.get(property) ?? property, value);
      if (isViewDirty(this.componentRef.hostView)) {
        markForRefresh(this.componentRef.changeDetectorRef);
        this.cdScheduler.notify(6);
      }
    });
  }
  initializeComponent(element) {
    const childInjector = Injector.create({
      providers: [],
      parent: this.injector
    });
    const projectableNodes = extractProjectableNodes(element, reflectComponentType(this.component).ngContentSelectors);
    this.componentRef = createComponent(this.component, {
      environmentInjector: this.injector,
      elementInjector: childInjector,
      hostElement: element,
      projectableNodes
    });
    this.initializeInputs();
    this.initializeOutputs(this.componentRef);
    this.appRef.attachView(this.componentRef.hostView);
    this.componentRef.hostView.detectChanges();
  }
  initializeInputs() {
    for (const [propName, value] of this.initialInputValues) {
      this.setInputValue(propName, value);
    }
    this.initialInputValues.clear();
  }
  initializeOutputs(componentRef) {
    const eventEmitters = reflectComponentType(this.component).outputs.map(({
      propName,
      templateName
    }) => {
      const emitter = componentRef.instance[propName];
      return new Observable((observer) => {
        const sub = emitter.subscribe((value) => observer.next({
          name: templateName,
          value
        }));
        return () => sub.unsubscribe();
      });
    });
    this.eventEmitters.next(eventEmitters);
  }
  runInZone(fn) {
    return this.elementZone && Zone.current !== this.elementZone ? this.ngZone.run(fn) : fn();
  }
};
var NgElement = class extends HTMLElement {
  ngElementEventsSubscription = null;
};
function createCustomElement(component, config) {
  const inputs = getComponentInputs(component);
  const strategyFactory = config.strategyFactory || new ComponentNgElementStrategyFactory(component);
  const attributeToPropertyInputs = getDefaultAttributeToPropertyInputs(inputs);
  class NgElementImpl extends NgElement {
    injector;
    static ["observedAttributes"] = Object.keys(attributeToPropertyInputs);
    get ngElementStrategy() {
      if (!this._ngElementStrategy) {
        const strategy = this._ngElementStrategy = strategyFactory.create(this.injector || config.injector);
        inputs.forEach(({
          propName,
          transform
        }) => {
          if (!this.hasOwnProperty(propName)) {
            return;
          }
          const value = this[propName];
          delete this[propName];
          strategy.setInputValue(propName, value, transform);
        });
      }
      return this._ngElementStrategy;
    }
    _ngElementStrategy;
    constructor(injector) {
      super();
      this.injector = injector;
    }
    attributeChangedCallback(attrName, oldValue, newValue, namespace) {
      const [propName, transform] = attributeToPropertyInputs[attrName];
      this.ngElementStrategy.setInputValue(propName, newValue, transform);
    }
    connectedCallback() {
      let subscribedToEvents = false;
      if (this.ngElementStrategy.events) {
        this.subscribeToEvents();
        subscribedToEvents = true;
      }
      this.ngElementStrategy.connect(this);
      if (!subscribedToEvents) {
        this.subscribeToEvents();
      }
    }
    disconnectedCallback() {
      if (this._ngElementStrategy) {
        this._ngElementStrategy.disconnect();
      }
      if (this.ngElementEventsSubscription) {
        this.ngElementEventsSubscription.unsubscribe();
        this.ngElementEventsSubscription = null;
      }
    }
    subscribeToEvents() {
      this.ngElementEventsSubscription = this.ngElementStrategy.events.subscribe((e) => {
        const customEvent = new CustomEvent(e.name, {
          detail: e.value
        });
        this.dispatchEvent(customEvent);
      });
    }
  }
  inputs.forEach(({
    propName,
    transform,
    isSignal: _isSignal
  }) => {
    Object.defineProperty(NgElementImpl.prototype, propName, {
      get() {
        const inputValue = this.ngElementStrategy.getInputValue(propName);
        return _isSignal && isSignal(inputValue) ? inputValue() : inputValue;
      },
      set(newValue) {
        this.ngElementStrategy.setInputValue(propName, newValue, transform);
      },
      configurable: true,
      enumerable: true
    });
  });
  return NgElementImpl;
}

// src/app/dynamichtml/dynamichtml.component.ts
var DynDataComponent = class _DynDataComponent {
  constructor() {
    this.parent = inject(DynamicHtmlComponent);
    this.property = "";
  }
  get content() {
    if (this.parent && this.property && this.parent[this.property]) {
      return this.parent[this.property];
    }
  }
  static {
    this.\u0275fac = function DynDataComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DynDataComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DynDataComponent, selectors: [["dyn-data"]], inputs: { property: "property" }, decls: 1, vars: 1, template: function DynDataComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0);
      }
      if (rf & 2) {
        \u0275\u0275textInterpolate(ctx.content);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: inline-block;\n  border: 1px solid green;\n  padding: 5px 2px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynDataComponent, [{
    type: Component,
    args: [{ selector: "dyn-data", changeDetection: ChangeDetectionStrategy.OnPush, template: `{{ content }}`, styles: ["/* angular:styles/component:css;a0a8eefd3919b7e5bed080e014fa5c8409ebecc7cc9a0f93cb3e61bbec382984;/home/runner/work/Samples/Samples/src/app/dynamichtml/dynamichtml.component.ts */\n:host {\n  display: inline-block;\n  border: 1px solid green;\n  padding: 5px 2px;\n}\n"] }]
  }], null, { property: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DynDataComponent, { className: "DynDataComponent", filePath: "src/app/dynamichtml/dynamichtml.component.ts", lineNumber: 34 });
})();
var DynamicHtmlComponent = class _DynamicHtmlComponent {
  constructor() {
    this.elmRef = inject(ElementRef);
    this.sanitizer = inject(DomSanitizer);
    this.elm = this.elmRef.nativeElement;
    this.name = "Angular";
    this.html = `
  <h1>Some random HTML</h1>
  <p>Well, <dyn-data property='name'></dyn-data> is awesome</p>
  <p>
  To do it this way is really dangerous, as it will expose to all kind of security issues.
  (see the functioning alert in the sample code!!)
  But the person that asked the question, needed a way to run script tags, and this is the easiest way.
  With this sample comes a severe warning, that this is really dangerous.
  </p>
  <button onclick="alert('hi')">hi</button>
  `;
    this._ = afterNextRender(() => {
      if (typeof document === "undefined")
        return;
      this.update(this.html);
    });
    const injector = inject(Injector);
    if (typeof document === "undefined")
      return;
    const dyn = createCustomElement(DynDataComponent, { injector });
    customElements.define("dyn-data", dyn);
  }
  update(newHtml) {
    const target = this.elm.querySelector("#target");
    target.innerHTML = newHtml;
    return;
    target.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, newHtml);
  }
  static {
    this.\u0275fac = function DynamicHtmlComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DynamicHtmlComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DynamicHtmlComponent, selectors: [["app-dynamichtml"]], decls: 7, vars: 2, consts: [["type", "text", 3, "input", "value"], [3, "input", "value"], ["id", "target"]], template: function DynamicHtmlComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "Dynamic HTML sample");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "input", 0);
        \u0275\u0275domListener("input", function DynamicHtmlComponent_Template_input_input_2_listener($event) {
          return ctx.name = $event.target.value;
        });
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "textarea", 1);
        \u0275\u0275domListener("input", function DynamicHtmlComponent_Template_textarea_input_3_listener($event) {
          return ctx.update($event.target.value);
        });
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "button");
        \u0275\u0275text(5, "Update");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(6, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275domProperty("value", ctx.name);
        \u0275\u0275advance();
        \u0275\u0275domProperty("value", ctx.html);
      }
    }, styles: ["\ntextarea[_ngcontent-%COMP%] {\n  display: block;\n  height: 6rem;\n  width: 30rem;\n  padding: 0;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicHtmlComponent, [{
    type: Component,
    args: [{ selector: "app-dynamichtml", changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <h1>Dynamic HTML sample</h1>

    <input
      type="text"
      [value]="name"
      (input)="name = $any($event.target).value"
    />
    <textarea
      [value]="html"
      (input)="update($any($event.target).value)"
    ></textarea>
    <button>Update</button>

    <div id="target"></div>
  `, styles: ["/* angular:styles/component:css;55a89ab05fd805266f20344dc96b82d2847b89a43c0fbc4f2bc1e994086e3096;/home/runner/work/Samples/Samples/src/app/dynamichtml/dynamichtml.component.ts */\ntextarea {\n  display: block;\n  height: 6rem;\n  width: 30rem;\n  padding: 0;\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DynamicHtmlComponent, { className: "DynamicHtmlComponent", filePath: "src/app/dynamichtml/dynamichtml.component.ts", lineNumber: 77 });
})();
export {
  DynamicHtmlComponent
};
