import {
  parse
} from "./chunk-HVSGGFJI.js";
import "./chunk-2ABFDLTD.js";
import "./chunk-2M7IDSIP.js";
import {
  selectSvgElement
} from "./chunk-XDWA6UHJ.js";
import "./chunk-E3YIUYSK.js";
import "./chunk-TFTGERRM.js";
import "./chunk-C5VYZMCQ.js";
import "./chunk-JFIDRUFZ.js";
import "./chunk-WLAKQYQG.js";
import "./chunk-E2353BUA.js";
import "./chunk-MOL4SRLP.js";
import "./chunk-GL6CDZES.js";
import "./chunk-T3B4F33H.js";
import "./chunk-55WCR2MV.js";
import {
  configureSvgSize
} from "./chunk-NTZAJV54.js";
import "./chunk-5MASLJB6.js";
import {
  __name,
  log
} from "./chunk-YDLBSHZT.js";
import "./chunk-KCHQYSDT.js";

// node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-42DDH7IO.mjs
var parser = {
  parse: /* @__PURE__ */ __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: "11.14.0" + (true ? "" : "-tiny")
};
var getVersion = /* @__PURE__ */ __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = /* @__PURE__ */ __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
