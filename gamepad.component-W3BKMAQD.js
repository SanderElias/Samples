import "./chunk-ZJWOAI6A.js";
import "./chunk-LIYAPZ72.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Service,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineService,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-ZOLZPPMV.js";
import "./chunk-I7IR7MPC.js";

// src/app/gamepad/gamepad.component.ts
function GamepadComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const button_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" Button ", $index_r2, " = ", button_r1().pressed ? "pressed" : "released", " (value: ", button_r1().value, ") ");
  }
}
function GamepadComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const axis_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Axis ", $index_r4, " = ", axis_r3());
  }
}
var GamepadComponent = class _GamepadComponent {
  constructor() {
    this.info = signal(
      {},
      ...ngDevMode ? [{ debugName: "info" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.buttons = inject(GamePad).buttons;
    this.axis = inject(GamePad).axis;
  }
  static {
    this.\u0275fac = function GamepadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GamepadComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GamepadComponent, selectors: [["se-gamepad"]], decls: 7, vars: 0, template: function GamepadComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "Gamepad");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "ul");
        \u0275\u0275repeaterCreate(3, GamepadComponent_For_4_Template, 2, 3, "li", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275repeaterCreate(5, GamepadComponent_For_6_Template, 2, 2, "li", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.buttons());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.axis());
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GamepadComponent, [{
    type: Component,
    args: [{ selector: "se-gamepad", template: `
    <h1>Gamepad</h1>
    <ul>
      @for (button of buttons(); track $index) {
        <li>
          Button {{ $index }} =
          {{ button().pressed ? 'pressed' : 'released' }} (value:
          {{ button().value }})
        </li>
      }
      @for (axis of axis(); track $index) {
        <li>Axis {{ $index }} = {{ axis() }}</li>
      }
    </ul>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/gamepad/gamepad.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GamepadComponent, { className: "GamepadComponent", filePath: "src/app/gamepad/gamepad.component.ts", lineNumber: 31 });
})();
var GamePad = class _GamePad {
  #window;
  #gamePad;
  constructor() {
    this.#window = inject(DOCUMENT).defaultView;
    this.#gamePad = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "#gamePad" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.buttons = signal(
      [],
      ...ngDevMode ? [{ debugName: "buttons" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.axis = signal(
      [],
      ...ngDevMode ? [{ debugName: "axis" }] : (
        /* istanbul ignore next */
        []
      )
    );
    const window = this.#window;
    if (window) {
      this.#window.addEventListener("gamepadconnected", (e) => {
        const gp = navigator.getGamepads()[e.gamepad.index];
        this.#gamePad.set(gp || void 0);
        console.dir(gp);
      });
      this.#window.addEventListener("gamepaddisconnected", (e) => {
        const gp = navigator.getGamepads()[e.gamepad.index];
        if (gp && gp.index === this.#gamePad()?.index) {
          this.#gamePad.set(void 0);
        }
      });
      effect(() => {
        const gp = this.#gamePad();
        if (gp) {
          this.loop();
        }
      });
    }
  }
  loop() {
    const gamePad = this.#gamePad();
    const buttonThing = (button) => ({
      value: button.value,
      pressed: button.pressed,
      touched: button.touched
    });
    if (!gamePad)
      return;
    if (gamePad.buttons.length !== this.buttons().length) {
      this.buttons.set(gamePad.buttons.map((button) => signal(buttonThing(button))));
    }
    if (gamePad.axes.length !== this.axis().length) {
      this.axis.set(gamePad.axes.map((num) => signal(num)));
    }
    gamePad.buttons.forEach((button, i) => {
      const { pressed, value, touched } = this.buttons()[i]();
      if (pressed !== button.pressed || value !== button.value || touched !== button.touched) {
        this.buttons()[i].set(buttonThing(button));
      }
    });
    gamePad.axes.forEach((axis, i) => {
      const value = this.axis()[i]();
      if (value !== axis) {
        this.axis()[i].set(axis);
      }
    });
    requestAnimationFrame(() => this.loop());
  }
  static {
    this.\u0275fac = function GamePad_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GamePad)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _GamePad, factory: _GamePad.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GamePad, [{
    type: Service
  }], () => [], null);
})();
export {
  GamepadComponent
};
