import {
  AsyncPipe
} from "./chunk-4UOFC3SS.js";
import "./chunk-TWVYKLAR.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Subject,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-CYK2LKQE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/bintree/BinNode.ts
var randomChar = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var createId = () => Date.now().toString(36) + "-" + randomChar() + randomChar() + randomChar();
var nodes = /* @__PURE__ */ new Map();
var createNode = (value, parentId, left, right) => {
  const newNode = {
    id: createId(),
    parentId,
    value,
    left,
    right
  };
  nodes.set(newNode.id, newNode);
  return newNode;
};
var getNode = (id) => id ? nodes.get(id) : void 0;
var getRoot = () => [...nodes.values()].find((n) => n.parentId === void 0);
var reset = () => {
  nodes.clear();
};
function addNode(node, parent = getRoot()) {
  if (parent === void 0) {
    return node;
  }
  if (node.value < parent.value) {
    if (parent.left === void 0) {
      parent.left = node.id;
      node.parentId = parent.id;
      return node;
    } else {
      return addNode(node, getNode(parent.left));
    }
  }
  if (node.value > parent.value) {
    if (parent.right === void 0) {
      parent.right = node.id;
      node.parentId = parent.id;
      return node;
    } else {
      return addNode(node, getNode(parent.right));
    }
  }
  if (node.value === parent.value) {
    console.warn("thrown away duplicate value");
    nodes.delete(node.id);
  }
}
function dump() {
  console.table([...nodes.values()].sort((a, b) => a.value < b.value ? -1 : 1).map((n) => __spreadProps(__spreadValues({}, n), {
    leftVal: getNode(n.left)?.value,
    cur: n.value,
    rightVal: getNode(n.right)?.value
  })));
}
function rotateLeft(node = getRoot()) {
  const grandParent = getNode(node.parentId);
  const replaceNode = getNode(node.right);
  if (replaceNode === void 0) {
    return node;
  }
  replaceNode.parentId = grandParent?.id;
  if (grandParent !== void 0) {
    if (grandParent.left === node.id) {
      grandParent.left = replaceNode.id;
    } else {
      grandParent.right = replaceNode.id;
    }
  }
  const left = getNode(replaceNode.left);
  replaceNode.left = node.id;
  node.parentId = replaceNode.id;
  if (left !== void 0) {
    node.right = left.id;
    left.parentId = node.id;
  } else {
    node.right = void 0;
  }
  return replaceNode;
}
var getSorted = () => [...nodes.values()].sort((a, b) => a.value < b.value ? -1 : 1);
function rotateRight(node = getRoot()) {
  const grandParent = getNode(node.parentId);
  const replaceNode = getNode(node.left);
  if (replaceNode === void 0) {
    return node;
  }
  replaceNode.parentId = grandParent?.id;
  if (grandParent !== void 0) {
    if (grandParent.left === node.id) {
      grandParent.left = replaceNode.id;
    } else {
      grandParent.right = replaceNode.id;
    }
  }
  const right = getNode(replaceNode.right);
  replaceNode.right = node.id;
  node.parentId = replaceNode.id;
  if (right !== void 0) {
    node.left = right.id;
    right.parentId = node.id;
  } else {
    node.left = void 0;
  }
  return replaceNode;
}
function height(node) {
  if (node === void 0) {
    return 0;
  }
  const childHeight = Math.max(height(getNode(node.left)), height(getNode(node.right)));
  node.height = childHeight + 1;
  return node.height;
}
function balance(node) {
  if (node === void 0) {
    return 0;
  }
  const getChildHeight = (childId) => getNode(childId)?.height || 0;
  node.balance = getChildHeight(node.left) - getChildHeight(node.right);
  return node.balance;
}
function reBalance() {
  let maxIterations = 100;
  balanceNode();
  while (true) {
    const n = [...nodes.values()].find((n2) => Math.abs(balance(n2)) > 1);
    console.log(nodes.size, n?.value, balance(n));
    if (n === void 0 || !--maxIterations) {
      break;
    }
    balanceNode(n);
  }
}
function balanceNode(node = getRoot()) {
  if (node === void 0) {
    return;
  }
  const nodeBalance = balance(node);
  if (nodeBalance < -1) {
    const right = getNode(node.right);
    if (right && balance(right) > 0) {
      rotateRight(right);
    }
    const r = rotateLeft(node);
    height(getRoot());
    return balanceNode(r);
  }
  if (nodeBalance > 1) {
    const left = getNode(node.left);
    if (left && (left.balance ?? 0) < 0) {
      rotateLeft(left);
    }
    const r = rotateRight(node);
    height(getRoot());
    return balanceNode(r);
  }
  const balanceIfNeeded = (n) => {
    const b = balance(n);
    if (Math.abs(n?.balance) > 1) {
      balanceNode(n);
    }
  };
  balanceIfNeeded(getNode(node.left));
  balanceIfNeeded(getNode(node.right));
}

// src/app/bintree/b-node/b-node.component.ts
function BNodeComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r1.title(node_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (node_r1 == null ? null : node_r1.value) ?? "-", " ");
  }
}
function BNodeComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "b-node", 2)(2, "b-node", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("bNode", ctx_r1.$left());
    \u0275\u0275advance();
    \u0275\u0275property("bNode", ctx_r1.$right());
  }
}
function BNodeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, BNodeComponent_Conditional_0_Conditional_1_Template, 2, 2, "span", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, BNodeComponent_Conditional_0_Conditional_2_Template, 3, 2, "div", 1);
  }
  if (rf & 2) {
    const node_r1 = ctx;
    \u0275\u0275advance();
    \u0275\u0275conditional((node_r1 == null ? null : node_r1.value) ?? void 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((node_r1 == null ? null : node_r1.left) || (node_r1 == null ? null : node_r1.right) ? 2 : -1);
  }
}
var BNodeComponent = class _BNodeComponent {
  constructor() {
    this.bNode = input(
      void 0,
      ...ngDevMode ? [{ debugName: "bNode" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.$left = computed(
      () => {
        const left = getNode(this.bNode()?.left);
        return left && __spreadProps(__spreadValues({}, left), { time: Date.now() });
      },
      ...ngDevMode ? [{ debugName: "$left" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.$right = computed(
      () => {
        const right = getNode(this.bNode()?.right);
        return right && __spreadProps(__spreadValues({}, right), { time: Date.now() });
      },
      ...ngDevMode ? [{ debugName: "$right" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.height = height;
    this.balance = balance;
  }
  title(node) {
    return `Height: ${node.height} balance: ${balance(node)}`;
  }
  static {
    this.\u0275fac = function BNodeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BNodeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BNodeComponent, selectors: [["b-node"]], inputs: { bNode: [1, "bNode"] }, decls: 1, vars: 1, consts: [[3, "title"], [1, "row"], [1, "left", 3, "bNode"], [1, "right", 3, "bNode"]], template: function BNodeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, BNodeComponent_Conditional_0_Template, 3, 2);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.bNode()) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [_BNodeComponent], styles: ["\n[_nghost-%COMP%] {\n  display: grid;\n  width: fit-content;\n  grid-template-columns: 1fr;\n  grid-template-rows: 20px 1fr;\n  justify-content: center;\n  align-content: center;\n  gap: 2px;\n  margin: 4px;\n  padding: 2px;\n  border: 1px solid rgba(255, 255, 255, 0.774);\n}\ndiv[_ngcontent-%COMP%] {\n  text-align: center;\n}\ndiv.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\ndiv[_ngcontent-%COMP%]:first-child {\n  padding: 9px;\n  border-radius: 50%;\n  align-self: center;\n  justify-self: center;\n  background-color: rgba(93, 14, 93);\n}\n.left[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  background-color: rgba(0, 0, 255);\n}\n.right[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  background-color: rgba(0, 128, 0);\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BNodeComponent, [{
    type: Component,
    args: [{ selector: "b-node", changeDetection: ChangeDetectionStrategy.OnPush, imports: [BNodeComponent], template: `@if (bNode(); as node) {
  <div>
    @if (node?.value ?? undefined) {
      <span [title]="title(node)">
        {{ node?.value ?? '-' }}
      </span>
    }
  </div>

  @if (node?.left || node?.right) {
    <div class="row">
      <b-node class="left" [bNode]="$left()"></b-node>
      <b-node class="right" [bNode]="$right()"></b-node>
    </div>
  }
}
<style>
  :host {
    display: grid;
    width: fit-content;
    grid-template-columns: 1fr;
    grid-template-rows: 20px 1fr;
    justify-content: center;
    align-content: center;
    gap: 2px;
    margin: 4px;
    padding: 2px;
    border: 1px solid rgba(255, 255, 255, 0.774);
  }

  div {
    text-align: center;
  }

  div.row {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  div:first-child {
    padding: 9px;
    border-radius: 50%;
    align-self: center;
    justify-self: center;
    background-color: rgba(93, 14, 93);
  }

  .left > div:first-child {
    background-color: rgba(0, 0, 255);
  }

  .right > div:first-child {
    background-color: rgba(0, 128, 0);
  }
</style>
`, styles: ["/* angular:styles/component:css;f7cb87e6f272dfc9d4af98192dd80949acdfd8ae86bf1f584d32d9983bbd8207;/home/runner/work/Samples/Samples/src/app/bintree/b-node/b-node.component.html */\n:host {\n  display: grid;\n  width: fit-content;\n  grid-template-columns: 1fr;\n  grid-template-rows: 20px 1fr;\n  justify-content: center;\n  align-content: center;\n  gap: 2px;\n  margin: 4px;\n  padding: 2px;\n  border: 1px solid rgba(255, 255, 255, 0.774);\n}\ndiv {\n  text-align: center;\n}\ndiv.row {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\ndiv:first-child {\n  padding: 9px;\n  border-radius: 50%;\n  align-self: center;\n  justify-self: center;\n  background-color: rgba(93, 14, 93);\n}\n.left > div:first-child {\n  background-color: rgba(0, 0, 255);\n}\n.right > div:first-child {\n  background-color: rgba(0, 128, 0);\n}\n"] }]
  }], () => [], { bNode: [{ type: Input, args: [{ isSignal: true, alias: "bNode", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BNodeComponent, { className: "BNodeComponent", filePath: "src/app/bintree/b-node/b-node.component.ts", lineNumber: 18 });
})();

// src/app/bintree/bintree.component.ts
var BintreeComponent = class _BintreeComponent {
  constructor() {
    this.count = 31;
    this.root$ = new Subject();
    this.nodes = getSorted();
    this.dump = () => {
      dump();
      this.refresh();
    };
    this.deb = null;
  }
  ngOnInit() {
    this.reset();
  }
  async reset() {
    reset();
    const [first, ...rest] = await getData();
    const root = createNode(first);
    rest.forEach((int) => addNode(createNode(int), root));
    height(root);
    setTimeout(() => this.root$.next(root), 20);
    this.nodes = getSorted();
  }
  refresh() {
    if (this.deb) {
      clearTimeout(this.deb);
    }
    this.deb = setTimeout(() => {
      this.root$.next(__spreadProps(__spreadValues({}, getRoot()), { time: Date.now() }));
    }, 0);
    height(getRoot());
  }
  rl(node = getRoot()) {
    rotateLeft(node);
    this.refresh();
  }
  rr(node = getRoot()) {
    rotateRight(node);
    this.refresh();
  }
  rb(node = getRoot()) {
    reBalance();
    this.refresh();
  }
  static {
    this.\u0275fac = function BintreeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BintreeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BintreeComponent, selectors: [["app-bintree"]], decls: 13, vars: 3, consts: [[1, "button-bar"], [3, "click"], [3, "bNode"]], template: function BintreeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1");
        \u0275\u0275text(1, "Binary tree");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 0)(3, "button", 1);
        \u0275\u0275listener("click", function BintreeComponent_Template_button_click_3_listener() {
          return ctx.rl();
        });
        \u0275\u0275text(4, "rl");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 1);
        \u0275\u0275listener("click", function BintreeComponent_Template_button_click_5_listener() {
          return ctx.rr();
        });
        \u0275\u0275text(6, "rr");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 1);
        \u0275\u0275listener("click", function BintreeComponent_Template_button_click_7_listener() {
          return ctx.rb();
        });
        \u0275\u0275text(8, "rb");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 1);
        \u0275\u0275listener("click", function BintreeComponent_Template_button_click_9_listener() {
          return ctx.dump();
        });
        \u0275\u0275text(10, "dump");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(11, "b-node", 2);
        \u0275\u0275pipe(12, "async");
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("bNode", \u0275\u0275pipeBind1(12, 1, ctx.root$));
      }
    }, dependencies: [BNodeComponent, AsyncPipe], styles: ["\n.button-bar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  max-width: 100vw;\n}\n.row[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BintreeComponent, [{
    type: Component,
    args: [{ selector: "app-bintree", changeDetection: ChangeDetectionStrategy.OnPush, imports: [BNodeComponent, AsyncPipe], template: '<h1>Binary tree</h1>\n<div class="button-bar">\n  <button (click)="rl()">rl</button>\n  <button (click)="rr()">rr</button>\n  <button (click)="rb()">rb</button>\n  <button (click)="dump()">dump</button>\n</div>\n\n<b-node [bNode]="root$ | async"></b-node>\n\n<!-- <div class="row">\n  RL <span (click)="rl(item)" *ngFor="let item of nodes">{{item.value}}</span>\n</div>\n<div class="row">\n  RR <span (click)="rr(item)" *ngFor="let item of nodes">{{item.value}}</span>\n</div>\n<div class="row">\n  Rb <span (click)="rb(item)" *ngFor="let item of nodes">{{item.value}}</span>\n</div> -->\n\n<style>\n  .button-bar {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    max-width: 100vw;\n  }\n  .row {\n    margin-top: 1rem;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n  }\n</style>\n', styles: ["/* angular:styles/component:css;848a5f1ef7d3e40c9e47e20b7a50c31af4f66b7e7841fffbef2348367e063cc8;/home/runner/work/Samples/Samples/src/app/bintree/bintree.component.html */\n.button-bar {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  max-width: 100vw;\n}\n.row {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BintreeComponent, { className: "BintreeComponent", filePath: "src/app/bintree/bintree.component.ts", lineNumber: 28 });
})();
var randomInt = (max = 2e3) => Math.floor(Math.random() * max);
var randomArr = (count) => [
  ...new Set(Array.from({ length: count }, () => randomInt()))
];
async function getData() {
  let data = void 0;
  if (!data) {
    data = randomArr(100);
  }
  return data;
}
export {
  BintreeComponent
};
