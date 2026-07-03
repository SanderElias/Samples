import {
  selectSvgElement
} from "./chunk-6U4QLIBN.js";
import {
  parse
} from "./chunk-4ZJXU5SM.js";
import "./chunk-DF4YLGCZ.js";
import "./chunk-LALKBW4M.js";
import "./chunk-I67OQ35R.js";
import "./chunk-AFKRV62R.js";
import "./chunk-LR2I7LNX.js";
import "./chunk-N6EL5UTK.js";
import "./chunk-W2BESNMW.js";
import "./chunk-37YX4UC3.js";
import "./chunk-2NXDR3H6.js";
import "./chunk-KAN47X3W.js";
import "./chunk-MDTVQAOZ.js";
import {
  configureSvgSize
} from "./chunk-TRSXNBRZ.js";
import {
  __name,
  log
} from "./chunk-UYUSBQJT.js";
import "./chunk-MJUTT27M.js";

// node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-5YYISTIA.mjs
var parser = {
  parse: /* @__PURE__ */ __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: "11.15.0" + (true ? "" : "-tiny")
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
