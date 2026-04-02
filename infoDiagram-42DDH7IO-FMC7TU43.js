import {
  parse
} from "./chunk-ZBRYICRT.js";
import "./chunk-A5L6FSBM.js";
import "./chunk-GH5T4BFG.js";
import {
  selectSvgElement
} from "./chunk-MS3GZSQD.js";
import "./chunk-UZDDMFBK.js";
import "./chunk-6OJ3IOK2.js";
import "./chunk-JAO55UKM.js";
import "./chunk-QQ4FACO5.js";
import "./chunk-K72GHLAA.js";
import "./chunk-XAEWRGX4.js";
import "./chunk-XCFLSWEB.js";
import "./chunk-WT6WHHBT.js";
import "./chunk-T3B4F33H.js";
import "./chunk-55WCR2MV.js";
import {
  configureSvgSize
} from "./chunk-QBBGGA7Y.js";
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
