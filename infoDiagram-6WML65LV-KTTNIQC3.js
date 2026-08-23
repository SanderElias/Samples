import {
  selectSvgElement
} from "./chunk-KU6QIUFY.js";
import {
  parse
} from "./chunk-DURMYMXW.js";
import "./chunk-KK7TREI2.js";
import "./chunk-BUONBROE.js";
import "./chunk-RPS4YLBK.js";
import "./chunk-VXUNSXX6.js";
import "./chunk-AC7TRITS.js";
import "./chunk-PD7AU64Y.js";
import "./chunk-QOWULBAT.js";
import "./chunk-LK3B5MVE.js";
import "./chunk-GZMAVDCY.js";
import "./chunk-EONS3ZNY.js";
import "./chunk-GXWQGUM5.js";
import "./chunk-IPDT6NAK.js";
import "./chunk-6FHFCD6M.js";
import "./chunk-2VYGS5DG.js";
import "./chunk-ZSHVBP3X.js";
import "./chunk-PSMVDB32.js";
import {
  configureSvgSize
} from "./chunk-KA3JYA7F.js";
import {
  log
} from "./chunk-DZRHDNBA.js";
import {
  __name
} from "./chunk-MHVZE6ED.js";
import "./chunk-MJUTT27M.js";

// node_modules/.pnpm/mermaid@11.16.1/node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-6WML65LV.mjs
var parser = {
  parse: /* @__PURE__ */ __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: "11.16.1" + (true ? "" : "-tiny")
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
