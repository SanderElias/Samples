import {
  AuthenticadedUserOnlyComponent
} from "./chunk-ZDQVOTNZ.js";
import "./chunk-CL5T3IPD.js";
import {
  httpResource
} from "./chunk-UNRJB5KN.js";
import "./chunk-4UOFC3SS.js";
import "./chunk-TWVYKLAR.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CYK2LKQE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/caddy/caddy.component.ts
function CaddyComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Loading config\u2026");
    \u0275\u0275elementEnd();
  }
}
function CaddyComponent_Conditional_5_For_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.handlerLabel(h_r1));
  }
}
function CaddyComponent_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details")(1, "summary");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275repeaterCreate(4, CaddyComponent_Conditional_5_For_3_For_5_Template, 2, 1, "span", 2, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ep_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ep_r3.match ? ctx_r1.hostList(ep_r3.match) : "No match conditions", " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.leafHandlers(ep_r3));
  }
}
function CaddyComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Routes (srv0)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, CaddyComponent_Conditional_5_For_3_Template, 6, 1, "details", null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.endpoints());
  }
}
var CaddyComponent = class _CaddyComponent {
  constructor() {
    this.endpointsRes = httpResource(() => ({
      url: "https://caddyadmin.eliasweb.nl/config/apps/http/servers/srv0",
      credentials: "include"
    }), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "endpointsRes" } : (
      /* istanbul ignore next */
      {}
    )), { defaultValue: {} }));
    this.endpoints = computed(
      () => {
        if (!this.endpointsRes.hasValue())
          return [];
        const val = this.endpointsRes.value();
        const routes = val?.routes || [];
        return routes;
      },
      ...ngDevMode ? [{ debugName: "endpoints" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hostList = (h = []) => h.map((match) => (match?.host ?? []).join(", ")).join("; ");
    this.RESPONDERS = /* @__PURE__ */ new Set([
      "reverse_proxy",
      "file_server",
      "static_response",
      "rewrite"
    ]);
    this.leafHandlers = (ep) => {
      const collect = (handlers) => handlers.flatMap((h) => h["handler"] === "subroute" ? (h["routes"] ?? []).flatMap((r) => collect(r.handle ?? [])) : this.RESPONDERS.has(h["handler"]) ? [h] : []);
      return collect(ep.handle ?? []);
    };
    this.handlerLabel = (h) => {
      switch (h["handler"]) {
        case "reverse_proxy":
          return `reverse_proxy \u2192 ${(h["upstreams"] ?? []).map((u) => u.dial).join(", ")}`;
        case "file_server":
          return `file_server${h["root"] ? ` (${h["root"]})` : ""}`;
        case "rewrite":
          return `rewrite${h["uri"] ? ` \u2192 ${h["uri"]}` : ""}`;
        case "static_response":
          return `static_response${h["status_code"] != null ? ` ${h["status_code"]}` : ""}`;
        default:
          return h["handler"];
      }
    };
  }
  static {
    this.\u0275fac = function CaddyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CaddyComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaddyComponent, selectors: [["se-caddy"]], decls: 6, vars: 1, consts: [[1, "caddy-root"], [1, "ep-detail"], [1, "handler-chip"]], template: function CaddyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h1");
        \u0275\u0275text(2, "Caddy Config");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "authenticated-user-only");
        \u0275\u0275conditionalCreate(4, CaddyComponent_Conditional_4_Template, 2, 0, "p")(5, CaddyComponent_Conditional_5_Template, 4, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.endpointsRes.hasValue() ? 4 : 5);
      }
    }, dependencies: [AuthenticadedUserOnlyComponent], styles: ["\n.caddy-root[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.ep-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  align-items: center;\n  padding: 0.4rem 0;\n}\n.handler-chip[_ngcontent-%COMP%] {\n  background: #e8f0fe;\n  color: #1a3c6e;\n  border-radius: 4px;\n  padding: 2px 8px;\n  font-size: 0.8rem;\n  font-family: monospace;\n}\n.terminal-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #b00020;\n  font-style: normal;\n  font-weight: 600;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaddyComponent, [{
    type: Component,
    args: [{ selector: "se-caddy", imports: [AuthenticadedUserOnlyComponent], template: `
    <section class="caddy-root">
      <h1>Caddy Config</h1>
      <authenticated-user-only>
        @if (!endpointsRes.hasValue()) {
          <p>Loading config\u2026</p>
        } @else {
          <h2>Routes (srv0)</h2>

          @for (ep of endpoints(); track $index) {
            <details>
              <summary>
                {{ ep.match ? hostList(ep.match) : 'No match conditions' }}
              </summary>
              <div class="ep-detail">
                @for (h of leafHandlers(ep); track $index) {
                  <span class="handler-chip">{{ handlerLabel(h) }}</span>
                }
              </div>
            </details>
          }
        }
      </authenticated-user-only>
    </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/caddy/caddy.component.css */\n.caddy-root {\n  padding: 1rem;\n}\n.ep-detail {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  align-items: center;\n  padding: 0.4rem 0;\n}\n.handler-chip {\n  background: #e8f0fe;\n  color: #1a3c6e;\n  border-radius: 4px;\n  padding: 2px 8px;\n  font-size: 0.8rem;\n  font-family: monospace;\n}\n.terminal-badge {\n  font-size: 0.75rem;\n  color: #b00020;\n  font-style: normal;\n  font-weight: 600;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaddyComponent, { className: "CaddyComponent", filePath: "src/app/caddy/caddy.component.ts", lineNumber: 45 });
})();
export {
  CaddyComponent
};
