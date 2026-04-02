import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterNextRender,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-4YMCON7N.js";
import "./chunk-KCHQYSDT.js";

// src/app/icon-sprite/icon-sprite.component.ts
var IconSpriteComponent = class _IconSpriteComponent {
  constructor() {
    this.elm = inject(ElementRef);
    this.loadIntoSprite = afterNextRender(async () => {
      if (!this.elm.nativeElement)
        return;
      if (!this.sprite) {
        const sprite = this.sprite = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        sprite.id = "icon-sprite";
        sprite.style.position = "absolute";
        const style = document.createElement("style");
        style.textContent = `
        use { display: none; }
        use:target { display: block;  }`;
        sprite.appendChild(style);
        document.body.insertBefore(this.sprite, document.body.firstChild);
      }
      await svgToSegment("assets/icons/cloud.svg");
      await svgToSegment("assets/icons/Ionic-Ionicons-Pause.svg");
      await svgToSegment("assets/icons/Ionic-Ionicons-Battery-charging-sharp.svg");
    });
  }
  static {
    this.\u0275fac = function IconSpriteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IconSpriteComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IconSpriteComponent, selectors: [["se-icon-sprite"]], decls: 5, vars: 0, consts: [["href", "iconSprite/#assets-icons-cloud-svg"], ["src", "./#use_assets-icons-cloud-svg", "alt", ""]], template: function IconSpriteComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "p");
        \u0275\u0275text(1, "icon-sprite WIP!");
        \u0275\u0275domElementEnd();
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(2, "svg");
        \u0275\u0275domElement(3, "use", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275domElement(4, "img", 1);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\nsvg[_ngcontent-%COMP%], \nimg[_ngcontent-%COMP%] {\n  width: 2rem;\n  aspect-ratio: 1/1;\n  color: white;\n  display: inline-block;\n  fill: white;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconSpriteComponent, [{
    type: Component,
    args: [{ selector: "se-icon-sprite", imports: [], template: `
    <p>icon-sprite WIP!</p>
    <!-- <img src="assets/icons/Ionic-Ionicons-Pause.svg"> -->
    <svg>
      <use href="iconSprite/#assets-icons-cloud-svg"></use>
    </svg>
    <img src="./#use_assets-icons-cloud-svg" alt="" />
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/icon-sprite/icon-sprite.component.css */\n:host {\n  display: block;\n}\nsvg,\nimg {\n  width: 2rem;\n  aspect-ratio: 1/1;\n  color: white;\n  display: inline-block;\n  fill: white;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IconSpriteComponent, { className: "IconSpriteComponent", filePath: "src/app/icon-sprite/icon-sprite.component.ts", lineNumber: 23 });
})();
async function svgToSegment(assetName) {
  try {
    const spriteHolder = document.getElementById("icon-sprite");
    const id = assetName.replace(/\//g, "-").replace(/\./g, "-").replace(/_/g, "-");
    if (spriteHolder.querySelector(`section#${id}`)) {
      return spriteHolder.querySelector(`section#${id}`)?.outerHTML;
    }
    const svgText = await fetch(assetName).then((res) => res.text());
    const svgElm = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElm.innerHTML = svgText;
    const orgSvg = svgElm.firstChild;
    const section = document.createElement("symbol");
    const use = document.createElement("use");
    use.setAttribute("id", `use_${id}`);
    use.setAttribute("href", `#${id}`);
    while (orgSvg.childNodes?.length) {
      section.appendChild(orgSvg.childNodes[0]);
    }
    for (let i = 0; i < orgSvg.attributes.length; i++) {
      const attr = orgSvg.attributes[i];
      section.setAttribute(attr.name, attr.value);
    }
    section.id = id;
    spriteHolder.insertBefore(section, spriteHolder.firstChild);
    spriteHolder.appendChild(use);
    console.log(`#${id}`);
    return section.outerHTML;
  } finally {
    console.log(`added sprite for "${assetName}"`);
  }
}
export {
  IconSpriteComponent
};
