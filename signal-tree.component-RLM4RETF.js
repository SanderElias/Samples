import {
  ShowErrorsInDom
} from "./chunk-AOCRHDZE.js";
import {
  FormField,
  applyEach,
  disabled,
  form,
  minLength,
  readonly,
  required,
  schema
} from "./chunk-LIXZKSRG.js";
import "./chunk-UGNSKCWD.js";
import "./chunk-UN3GGFEO.js";
import "./chunk-MTKF5SUL.js";
import "./chunk-72AYNUCX.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext
} from "./chunk-4YMCON7N.js";
import "./chunk-KCHQYSDT.js";

// src/app/signal-forms-experiment/signal-tree/tree-node-edit/tree-node-edit.component.ts
function TreeNodeEditComponent_Conditional_10_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "se-tree-node-edit", 4);
  }
  if (rf & 2) {
    const child_r1 = ctx.$implicit;
    \u0275\u0275property("treeNode", child_r1);
  }
}
function TreeNodeEditComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "h5");
    \u0275\u0275text(2, "Children");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, TreeNodeEditComponent_Conditional_10_For_4_Template, 1, 1, "se-tree-node-edit", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.treeNode().children);
  }
}
var TreeNodeEditComponent = class _TreeNodeEditComponent {
  constructor() {
    this.treeNode = input.required(
      ...ngDevMode ? [{ debugName: "treeNode" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  addChild() {
    const children = this.treeNode().children;
    children().value.update((cs) => [
      { id: crypto.randomUUID(), name: "", children: [] },
      ...cs
    ]);
  }
  static {
    this.\u0275fac = function TreeNodeEditComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TreeNodeEditComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TreeNodeEditComponent, selectors: [["se-tree-node-edit"]], inputs: { treeNode: [1, "treeNode"] }, decls: 11, vars: 3, consts: [["type", "text", 3, "formField"], ["type", "text", "showError", "", 3, "formField"], ["type", "button", 3, "click"], [1, "children"], [3, "treeNode"]], template: function TreeNodeEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "label")(1, "span");
        \u0275\u0275text(2, "Node ID");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "input", 0);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "label")(5, "span");
        \u0275\u0275text(6, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "input", 1);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 2);
        \u0275\u0275listener("click", function TreeNodeEditComponent_Template_button_click_8_listener() {
          return ctx.addChild();
        });
        \u0275\u0275text(9, "Add Child");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, TreeNodeEditComponent_Conditional_10_Template, 5, 0, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.treeNode().id);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.treeNode().name);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.treeNode().children().value().length !== 0 ? 10 : -1);
      }
    }, dependencies: [_TreeNodeEditComponent, FormField, ShowErrorsInDom], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  border: 1px solid lightgray;\n  border-inline-end: 0;\n  border-block-start: 0;\n  margin-block-end: var(--size-3);\n  padding: var(--size-2);\n  inline-size: fit-content;\n}\n.error-messages[_ngcontent-%COMP%] {\n  color: var(--red-5);\n  grid-column: 2;\n  font-style: italic;\n  min-height: 1.5em;\n  font-variant: small-caps;\n  margin-inline-start: var(--size-2);\n  margin-block-start: calc(-1 * var(--size-2));\n}\n.error-messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.error-messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:not(:has(:nth-child(2))) {\n  list-style: none;\n  padding-inline-start: var(--size-4);\n}\ndiv.children[_ngcontent-%COMP%] {\n  margin-inline-start: var(--size-6);\n  font-style: italic;\n  color: gray;\n}\n[_ngcontent-%COMP%]:invalid {\n  border-color: var(--red-5);\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeNodeEditComponent, [{
    type: Component,
    args: [{ selector: "se-tree-node-edit", imports: [FormField, ShowErrorsInDom], template: `<label>
      <span>Node ID</span>
      <input type="text" [formField]="treeNode().id" />
    </label>
    <label>
      <span>Name</span>
      <input type="text" [formField]="treeNode().name" showError="" />
    </label>
    <button type="button" (click)="addChild()">Add Child</button>
    @if (treeNode().children().value().length !== 0) {
      <div class="children">
        <h5>Children</h5>
        @for (child of treeNode().children; track $index) {
          <!-- <div>{{ child.name }} </div> -->
          <se-tree-node-edit [treeNode]="child"></se-tree-node-edit>
        }
      </div>
    }`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/signal-forms-experiment/signal-tree/tree-node-edit/tree-node-edit.component.css */\n:host {\n  display: block;\n  border: 1px solid lightgray;\n  border-inline-end: 0;\n  border-block-start: 0;\n  margin-block-end: var(--size-3);\n  padding: var(--size-2);\n  inline-size: fit-content;\n}\n.error-messages {\n  color: var(--red-5);\n  grid-column: 2;\n  font-style: italic;\n  min-height: 1.5em;\n  font-variant: small-caps;\n  margin-inline-start: var(--size-2);\n  margin-block-start: calc(-1 * var(--size-2));\n}\n.error-messages ul {\n  font-size: 0.95rem;\n}\n.error-messages ul:not(:has(:nth-child(2))) {\n  list-style: none;\n  padding-inline-start: var(--size-4);\n}\ndiv.children {\n  margin-inline-start: var(--size-6);\n  font-style: italic;\n  color: gray;\n}\n:invalid {\n  border-color: var(--red-5);\n}\n"] }]
  }], null, { treeNode: [{ type: Input, args: [{ isSignal: true, alias: "treeNode", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TreeNodeEditComponent, { className: "TreeNodeEditComponent", filePath: "src/app/signal-forms-experiment/signal-tree/tree-node-edit/tree-node-edit.component.ts", lineNumber: 31 });
})();

// src/app/signal-forms-experiment/signal-tree/signal-tree.component.ts
var SignalTreeComponent = class _SignalTreeComponent {
  constructor() {
    this.tree = signal(
      {
        id: "root",
        name: "Root",
        children: [
          {
            id: "1",
            name: "Node 1",
            children: [
              { id: "1.1", name: "node 1.1", children: [] },
              { id: "1.2", name: "Node 1.2", children: [] }
            ]
          },
          { id: "2", name: "Node 2", children: [] }
        ]
      },
      ...ngDevMode ? [{ debugName: "tree" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fd = form(this.tree, validateSignalTreeNode);
  }
  static {
    this.\u0275fac = function SignalTreeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignalTreeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignalTreeComponent, selectors: [["se-signal-tree"]], decls: 6, vars: 1, consts: [["href", "/signalForms"], [3, "treeNode"]], template: function SignalTreeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2");
        \u0275\u0275text(1, " Signal Tree Component ");
        \u0275\u0275elementStart(2, "small")(3, "a", 0);
        \u0275\u0275text(4, "complex? form");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(5, "se-tree-node-edit", 1);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("treeNode", ctx.fd);
      }
    }, dependencies: [TreeNodeEditComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalTreeComponent, [{
    type: Component,
    args: [{ selector: "se-signal-tree", imports: [TreeNodeEditComponent], template: `
    <h2>
      Signal Tree Component
      <small><a href="/signalForms">complex? form</a></small>
    </h2>
    <se-tree-node-edit [treeNode]="fd"></se-tree-node-edit>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/signal-forms-experiment/signal-tree/signal-tree.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignalTreeComponent, { className: "SignalTreeComponent", filePath: "src/app/signal-forms-experiment/signal-tree/signal-tree.component.ts", lineNumber: 28 });
})();
var validateSignalTreeNode = schema((tn) => {
  disabled(tn.id);
  readonly(tn.id);
  required(tn.name, { message: "Name is required" });
  minLength(tn.name, 2, { message: "Name must be at least 2 characters" });
  applyEach(tn.children, validateSignalTreeNode);
});
export {
  SignalTreeComponent
};
