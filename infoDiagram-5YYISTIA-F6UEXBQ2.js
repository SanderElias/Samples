import {
  selectSvgElement
} from "./chunk-LE4WS2LY.js";
import {
  parse
} from "./chunk-LDWY4AMO.js";
import "./chunk-4QRNPKJI.js";
import "./chunk-BQI7AMOE.js";
import "./chunk-ZRE3CHWJ.js";
import "./chunk-DS2BYWXZ.js";
import "./chunk-5H5CSZZS.js";
import "./chunk-46KX4ZRR.js";
import "./chunk-K2E6PD5E.js";
import "./chunk-RWOZYKRD.js";
import "./chunk-XAVQCX6M.js";
import "./chunk-IN4AEGNM.js";
import "./chunk-5CTPDA27.js";
import {
  configureSvgSize
} from "./chunk-P7D745GY.js";
import {
  __name,
  log
} from "./chunk-SE3OUVNK.js";
import "./chunk-I7IR7MPC.js";

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
