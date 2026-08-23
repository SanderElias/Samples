import {
  db,
  getStyles,
  renderer
} from "./chunk-NVCC4ZG2.js";
import {
  populateCommonDb
} from "./chunk-KWKSNIYH.js";
import "./chunk-KU6QIUFY.js";
import {
  MermaidParseError
} from "./chunk-DURMYMXW.js";
import "./chunk-KK7TREI2.js";
import "./chunk-BUONBROE.js";
import "./chunk-RPS4YLBK.js";
import "./chunk-VXUNSXX6.js";
import "./chunk-AC7TRITS.js";
import "./chunk-PD7AU64Y.js";
import "./chunk-QOWULBAT.js";
import {
  createRailroadServices
} from "./chunk-LK3B5MVE.js";
import "./chunk-GZMAVDCY.js";
import "./chunk-EONS3ZNY.js";
import "./chunk-GXWQGUM5.js";
import "./chunk-IPDT6NAK.js";
import "./chunk-6FHFCD6M.js";
import "./chunk-2VYGS5DG.js";
import "./chunk-ZSHVBP3X.js";
import "./chunk-PSMVDB32.js";
import "./chunk-KA3JYA7F.js";
import {
  log
} from "./chunk-DZRHDNBA.js";
import {
  __name
} from "./chunk-MHVZE6ED.js";
import "./chunk-MJUTT27M.js";

// node_modules/.pnpm/mermaid@11.16.1/node_modules/mermaid/dist/chunks/mermaid.core/railroadDiagram-AXF67PYL.mjs
var langiumParser = createRailroadServices().Railroad.parser.LangiumParser;
var transformExpression = /* @__PURE__ */ __name((expr) => {
  switch (expr.$type) {
    case "RailroadTerminalExpr":
      return {
        type: "terminal",
        value: expr.value
      };
    case "RailroadNonTerminalExpr":
      return {
        type: "nonterminal",
        name: expr.name
      };
    case "RailroadSpecialExpr":
      return {
        type: "special",
        text: expr.text
      };
    case "RailroadSequenceExpr": {
      const elements = expr.elements.map(transformExpression);
      return elements.length === 1 ? elements[0] : { type: "sequence", elements };
    }
    case "RailroadChoiceExpr": {
      const alternatives = expr.alternatives.map(transformExpression);
      return alternatives.length === 1 ? alternatives[0] : { type: "choice", alternatives };
    }
    case "RailroadOptionalExpr":
      return {
        type: "optional",
        element: transformExpression(expr.element)
      };
    case "RailroadOneOrMoreExpr":
      return {
        type: "repetition",
        element: transformExpression(expr.element),
        min: 1,
        max: Infinity
      };
    case "RailroadZeroOrMoreExpr":
      return {
        type: "repetition",
        element: transformExpression(expr.element),
        min: 0,
        max: Infinity
      };
    default:
      throw new Error(`Unsupported railroad expression: ${expr.$type}`);
  }
}, "transformExpression");
var transformRule = /* @__PURE__ */ __name((rule) => {
  return {
    name: rule.name,
    definition: transformExpression(rule.definition)
  };
}, "transformRule");
var populateDb = /* @__PURE__ */ __name((ast) => {
  populateCommonDb(ast, db);
  if (ast.title) {
    db.setTitle(ast.title);
  }
  ast.rules.map((rule) => db.addRule(transformRule(rule)));
}, "populateDb");
var parser = {
  parse: /* @__PURE__ */ __name((input) => {
    db.clear();
    log.debug("[Railroad Parser] Starting Langium parse");
    const result = langiumParser.parse(input);
    if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) {
      throw new MermaidParseError(result);
    }
    const ast = result.value;
    log.debug("[Railroad Parser] Parsed rules:", ast.rules.length);
    populateDb(ast);
    log.debug("[Railroad Parser] Parse complete");
  }, "parse"),
  parser: {
    yy: db
  }
};
var diagram = {
  parser,
  db,
  renderer,
  styles: getStyles
};
var railroadDiagram_default = diagram;
export {
  railroadDiagram_default as default,
  diagram
};
