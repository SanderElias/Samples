import {
  ShowSourceComponent
} from "./chunk-OX6IEDWP.js";
import "./chunk-T62MM3GH.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-XBJ54SZG.js";
import "./chunk-MKWLWAJZ.js";
import "./chunk-NMBS7RAC.js";
import "./chunk-PESRSGYJ.js";
import "./chunk-TVEZYIJQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-LHOZ36SL.js";
import "./chunk-KCHQYSDT.js";

// src/app/demo.component.ts
var _c0 = ["menuToggle"];
var _c1 = () => ["home"];
var _c2 = () => ["filterSamp"];
var _c3 = () => ["modalSamp"];
var _c4 = () => ["DirectiveSamp"];
var _c5 = () => ["mixinSamp"];
var _c6 = () => ["htmlLoad"];
var _c7 = () => ["requiredAttributes"];
var _c8 = () => ["viewModel", "user"];
var _c9 = () => ["viewModel", "theGood"];
var _c10 = () => ["viewModel", "theBad"];
var _c11 = () => ["complexAPI"];
var _c12 = () => ["observableState"];
var _c13 = () => ["dynhtml"];
var DemoComponent = class _DemoComponent {
  constructor() {
    this.title = "samples";
    this.elmRef = inject(ElementRef);
  }
  /** a setter function to hook up the above */
  set _toggle(x) {
    if (x && !this.checked) {
      this.checked = x.nativeElement;
    }
  }
  ngAfterContentInit() {
    const host = this.elmRef.nativeElement;
    if (host) {
      host.querySelectorAll("#menu a").forEach((a) => a.addEventListener("click", () => {
        this.checked.checked = false;
      }));
    }
  }
  static {
    this.\u0275fac = function DemoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoComponent, selectors: [["demo-root"]], viewQuery: function DemoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._toggle = _t.first);
      }
    }, decls: 55, vars: 26, consts: [["menuToggle", ""], ["id", "menuToggle"], ["for", "menutoggle"], ["id", "menutoggle", "type", "checkbox"], ["id", "menu"], ["routerLinkActive", "active-link", 3, "routerLink"], [3, "routerLink"], ["id", "outlet"]], template: function DemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav")(1, "div", 1)(2, "label", 2);
        \u0275\u0275text(3, "menuButton");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "input", 3, 0)(6, "span")(7, "span")(8, "span");
        \u0275\u0275elementStart(9, "ul", 4)(10, "li")(11, "a", 5);
        \u0275\u0275text(12, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li")(14, "a", 5);
        \u0275\u0275text(15, "Filter Sample");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "li")(17, "a", 5);
        \u0275\u0275text(18, "Modal Sample");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "li")(20, "a", 5);
        \u0275\u0275text(21, "Directive Sample");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "li")(23, "a", 5);
        \u0275\u0275text(24, "Mixin Sample");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "li")(26, "a", 5);
        \u0275\u0275text(27, "Html load");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "li")(29, "a", 6);
        \u0275\u0275text(30, "Required attributes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "li");
        \u0275\u0275text(32, " Reactive viewmodel ");
        \u0275\u0275elementStart(33, "ul")(34, "li")(35, "a", 5);
        \u0275\u0275text(36, "User list");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "li")(38, "a", 5);
        \u0275\u0275text(39, "The Good");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "li")(41, "a", 5);
        \u0275\u0275text(42, "The bad");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(43, "li")(44, "a", 6);
        \u0275\u0275text(45, "Complex API");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "li")(47, "a", 6);
        \u0275\u0275text(48, "Observable State");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "li")(50, "a", 6);
        \u0275\u0275text(51, "Dynamic HTML");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(52, "app-show-source");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 7);
        \u0275\u0275element(54, "router-outlet");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c1));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c2));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c3));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c4));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(17, _c5));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(18, _c6));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c7));
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(20, _c8));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c9));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(22, _c10));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(23, _c11));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(24, _c12));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(25, _c13));
      }
    }, dependencies: [RouterLinkActive, RouterLink, ShowSourceComponent, RouterOutlet], styles: ["\n[_nghost-%COMP%] {\n  display: grid;\n  grid-template-rows: 40px 1fr;\n  grid-row-gap: 4px;\n  min-block-size: 99dvh;\n  max-inline-size: 99dvw;\n}\nnav[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 0;\n  margin: 0;\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip-path: inset(50%);\n  white-space: nowrap;\n}\n#popup[_ngcontent-%COMP%] {\n  display: none;\n  margin: 0 3rem;\n  border: 2px solid green;\n}\n#outlet[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: var(--size-3);\n  max-block-size: 99dvh;\n  overflow: auto;\n  scrollbar-gutter: stable;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #232323;\n  transition: color 0.3s ease;\n}\na[_ngcontent-%COMP%]:hover {\n  color: tomato;\n}\na.active-link[_ngcontent-%COMP%] {\n  color: darkblue;\n}\n#menuToggle[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  top: 10px;\n  left: 10px;\n  z-index: 1;\n  -webkit-user-select: none;\n  user-select: none;\n}\n#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  width: 40px;\n  height: 32px;\n  position: absolute;\n  top: -7px;\n  left: -5px;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 2;\n  -webkit-touch-callout: none;\n}\n#menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 24px;\n  height: 2px;\n  margin-bottom: 5px;\n  position: relative;\n  background: #cdcdcd;\n  border-radius: 3px;\n  z-index: 1;\n  transform-origin: 4px 0px;\n  transition:\n    transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),\n    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),\n    opacity 0.55s ease;\n}\n#menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  transform-origin: 0% 0%;\n}\n#menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-last-child(2) {\n  transform-origin: 0% 100%;\n}\n#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: rotate(45deg) translate(-2px, -1px);\n  background: #232323;\n}\n#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]:nth-last-child(3) {\n  opacity: 0;\n  transform: rotate(0deg) scale(0.2, 0.2);\n}\n#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]:nth-last-child(2) {\n  transform: rotate(-45deg) translate(0, -1px);\n}\n#menu[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 300px;\n  margin: -100px 0 0 -50px;\n  padding: 50px;\n  padding-top: 95px;\n  min-height: 99vh;\n  background: #ededed;\n  list-style-type: none;\n  -webkit-font-smoothing: antialiased;\n  transform-origin: 0% 0%;\n  transform: translate(-100%, 0);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n}\n#menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  font-size: 22px;\n}\n#menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%] {\n  transform: none;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoComponent, [{
    type: Component,
    args: [{ selector: "demo-root", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLinkActive, RouterLink, ShowSourceComponent, RouterOutlet], template: `<nav>
  <div id="menuToggle">
    <!--
        A fake / hidden checkbox is used as click receiver,
        so you can use the :checked selector on it.
        -->
    <label for="menutoggle">menuButton</label
    ><input id="menutoggle" type="checkbox" #menuToggle />

    <!--
        Some spans to act as a hamburger.
        -->
    <span></span> <span></span> <span></span>

    <!--
        Too bad the menu has to be inside of the button
        but hey, it's pure CSS magic.
        -->
    <ul id="menu">
      <li>
        <a routerLinkActive="active-link" [routerLink]="['home']">Home</a>
      </li>
      <li>
        <a routerLinkActive="active-link" [routerLink]="['filterSamp']"
          >Filter Sample</a
        >
      </li>
      <li>
        <a routerLinkActive="active-link" [routerLink]="['modalSamp']"
          >Modal Sample</a
        >
      </li>
      <li>
        <a routerLinkActive="active-link" [routerLink]="['DirectiveSamp']"
          >Directive Sample</a
        >
      </li>
      <li>
        <a routerLinkActive="active-link" [routerLink]="['mixinSamp']"
          >Mixin Sample</a
        >
      </li>
      <li>
        <a routerLinkActive="active-link" [routerLink]="['htmlLoad']"
          >Html load</a
        >
      </li>
      <li><a [routerLink]="['requiredAttributes']">Required attributes</a></li>
      <li>
        Reactive viewmodel
        <ul>
          <li>
            <a
              routerLinkActive="active-link"
              [routerLink]="['viewModel', 'user']"
              >User list</a
            >
          </li>
          <li>
            <a
              routerLinkActive="active-link"
              [routerLink]="['viewModel', 'theGood']"
              >The Good</a
            >
          </li>
          <li>
            <a
              routerLinkActive="active-link"
              [routerLink]="['viewModel', 'theBad']"
              >The bad</a
            >
          </li>
        </ul>
      </li>
      <li><a [routerLink]="['complexAPI']">Complex API</a></li>
      <li><a [routerLink]="['observableState']">Observable State</a></li>
      <li><a [routerLink]="['dynhtml']">Dynamic HTML</a></li>
    </ul>
  </div>
  <app-show-source />
</nav>
<div id="outlet"><router-outlet></router-outlet></div>
<!-- <div id="popup"><router-outlet name="popup"></router-outlet></div> -->
<style>
  :host {
    display: grid;
    grid-template-rows: 40px 1fr;
    grid-row-gap: 4px;
    min-block-size: 99dvh;
    max-inline-size: 99dvw;
  }

  /*
  * visually hide labels in the menu
  * but still make them available for screen readers
  */
  nav label {
    border: 0;
    padding: 0;
    margin: 0;
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip-path: inset(
      50%
    ); /*modern browsers, clip-path works inwards from each corner*/
    white-space: nowrap; /* added line to stop words getting smushed together (as they go onto seperate lines and some screen readers do not understand line feeds as a space */
  }

  #popup {
    display: none;
    margin: 0 3rem;
    border: 2px solid green;
  }

  #outlet {
    margin: 0;
    padding: var(--size-3);
    max-block-size: 99dvh;

    overflow: auto;
    /* Reserve space for the scrollbar even when it's not shown */
    scrollbar-gutter: stable;
  }

  a {
    text-decoration: none;
    color: #232323;

    transition: color 0.3s ease;
  }

  a:hover {
    color: tomato;
  }

  a.active-link {
    color: darkblue;
  }

  #menuToggle {
    display: block;
    position: relative;
    top: 10px;
    left: 10px;

    z-index: 1;

    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }

  /*
 * Just a quick hamburger
 */
  #menuToggle span {
    display: block;
    width: 24px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition:
      transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  /*
 * Transform all the slices of hamburger
 * into a crossmark.
 */
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  /*
 * But let's hide the middle one.
 */
  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  /*
 * Oh yeah and the last one should go the other direction
 */
  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  /*
 * Make this absolute positioned
 * at the top left of the screen
 */
  #menu {
    position: absolute;
    width: 300px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 95px;
    min-height: 99vh;

    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menu li {
    padding: 10px 0;
    font-size: 22px;
  }

  #menu ul {
    list-style-type: none;
  }

  /*
 * And let's slide it in from the left
 */
  #menuToggle input:checked ~ ul {
    transform: none;
  }
</style>
`, styles: ["/* angular:styles/component:css;8a42778fb901df3bdef69002667784327755621c78a69e0dc2d203f956290d13;/home/runner/work/Samples/Samples/src/app/demo.component.html */\n:host {\n  display: grid;\n  grid-template-rows: 40px 1fr;\n  grid-row-gap: 4px;\n  min-block-size: 99dvh;\n  max-inline-size: 99dvw;\n}\nnav label {\n  border: 0;\n  padding: 0;\n  margin: 0;\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip-path: inset(50%);\n  white-space: nowrap;\n}\n#popup {\n  display: none;\n  margin: 0 3rem;\n  border: 2px solid green;\n}\n#outlet {\n  margin: 0;\n  padding: var(--size-3);\n  max-block-size: 99dvh;\n  overflow: auto;\n  scrollbar-gutter: stable;\n}\na {\n  text-decoration: none;\n  color: #232323;\n  transition: color 0.3s ease;\n}\na:hover {\n  color: tomato;\n}\na.active-link {\n  color: darkblue;\n}\n#menuToggle {\n  display: block;\n  position: relative;\n  top: 10px;\n  left: 10px;\n  z-index: 1;\n  -webkit-user-select: none;\n  user-select: none;\n}\n#menuToggle input {\n  display: block;\n  width: 40px;\n  height: 32px;\n  position: absolute;\n  top: -7px;\n  left: -5px;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 2;\n  -webkit-touch-callout: none;\n}\n#menuToggle span {\n  display: block;\n  width: 24px;\n  height: 2px;\n  margin-bottom: 5px;\n  position: relative;\n  background: #cdcdcd;\n  border-radius: 3px;\n  z-index: 1;\n  transform-origin: 4px 0px;\n  transition:\n    transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),\n    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),\n    opacity 0.55s ease;\n}\n#menuToggle span:first-child {\n  transform-origin: 0% 0%;\n}\n#menuToggle span:nth-last-child(2) {\n  transform-origin: 0% 100%;\n}\n#menuToggle input:checked ~ span {\n  opacity: 1;\n  transform: rotate(45deg) translate(-2px, -1px);\n  background: #232323;\n}\n#menuToggle input:checked ~ span:nth-last-child(3) {\n  opacity: 0;\n  transform: rotate(0deg) scale(0.2, 0.2);\n}\n#menuToggle input:checked ~ span:nth-last-child(2) {\n  transform: rotate(-45deg) translate(0, -1px);\n}\n#menu {\n  position: absolute;\n  width: 300px;\n  margin: -100px 0 0 -50px;\n  padding: 50px;\n  padding-top: 95px;\n  min-height: 99vh;\n  background: #ededed;\n  list-style-type: none;\n  -webkit-font-smoothing: antialiased;\n  transform-origin: 0% 0%;\n  transform: translate(-100%, 0);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n}\n#menu li {\n  padding: 10px 0;\n  font-size: 22px;\n}\n#menu ul {\n  list-style-type: none;\n}\n#menuToggle input:checked ~ ul {\n  transform: none;\n}\n"] }]
  }], null, { _toggle: [{
    type: ViewChild,
    args: ["menuToggle", { static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoComponent, { className: "DemoComponent", filePath: "src/app/demo.component.ts", lineNumber: 20 });
})();
export {
  DemoComponent
};
