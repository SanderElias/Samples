import {
  getConfig2
} from "./chunk-KA3JYA7F.js";
import {
  select_default
} from "./chunk-DZRHDNBA.js";
import {
  __name
} from "./chunk-MHVZE6ED.js";

// node_modules/.pnpm/mermaid@11.16.1/node_modules/mermaid/dist/chunks/mermaid.core/chunk-3NCLNEKW.mjs
var selectSvgElement = /* @__PURE__ */ __name((id) => {
  const { securityLevel } = getConfig2();
  let root = select_default("body");
  if (securityLevel === "sandbox") {
    const sandboxElement = select_default(`#i${id}`);
    const doc = sandboxElement.node()?.contentDocument ?? document;
    root = select_default(doc.body);
  }
  const svg = root.select(`#${id}`);
  return svg;
}, "selectSvgElement");

export {
  selectSvgElement
};
