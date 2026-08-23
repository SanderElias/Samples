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
import "./chunk-LK3B5MVE.js";
import "./chunk-GZMAVDCY.js";
import {
  createRailroadAbnfServices
} from "./chunk-EONS3ZNY.js";
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

// node_modules/.pnpm/mermaid@11.16.1/node_modules/mermaid/dist/chunks/mermaid.core/abnfDiagram-N423BO3Z.mjs
var langiumParser = createRailroadAbnfServices().RailroadAbnf.parser.LangiumParser;
var transformAlternation = /* @__PURE__ */ __name((alt) => {
  const alternatives = alt.alternatives.map(transformConcatenation);
  if (alternatives.length === 1) {
    return alternatives[0];
  }
  return {
    type: "choice",
    alternatives
  };
}, "transformAlternation");
var transformConcatenation = /* @__PURE__ */ __name((concat) => {
  const elements = concat.elements.map(transformElement);
  if (elements.length === 1) {
    return elements[0];
  }
  return {
    type: "sequence",
    elements
  };
}, "transformConcatenation");
var parseRepeat = /* @__PURE__ */ __name((repeat) => {
  if (repeat.includes("*")) {
    const [minStr, maxStr] = repeat.split("*");
    const min = minStr ? parseInt(minStr, 10) : 0;
    const max = maxStr ? parseInt(maxStr, 10) : Infinity;
    return { min, max };
  }
  const exact = parseInt(repeat, 10);
  return { min: exact, max: exact };
}, "parseRepeat");
var transformElement = /* @__PURE__ */ __name((element) => {
  const inner = transformPrimary(element.primary);
  if (!element.repeat) {
    return inner;
  }
  const { min, max } = parseRepeat(element.repeat);
  if (min === 0 && max === 1) {
    return { type: "optional", element: inner };
  }
  return {
    type: "repetition",
    element: inner,
    min,
    max
  };
}, "transformElement");
var transformPrimary = /* @__PURE__ */ __name((primary) => {
  switch (primary.$type) {
    case "AbnfStringLiteral":
      return {
        type: "terminal",
        value: primary.value
      };
    case "AbnfNumVal":
      return {
        type: "terminal",
        value: primary.value
      };
    case "AbnfRuleName":
      return {
        type: "nonterminal",
        name: primary.name
      };
    case "AbnfGroup":
      return transformAlternation(primary.element);
    case "AbnfOptionalGroup":
      return {
        type: "optional",
        element: transformAlternation(primary.element)
      };
    default:
      throw new Error(`Unsupported ABNF primary node: ${primary.$type}`);
  }
}, "transformPrimary");
var transformRule = /* @__PURE__ */ __name((rule) => {
  return {
    name: rule.name,
    definition: transformAlternation(rule.definition)
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
    log.debug("[ABNF Parser] Starting Langium parse");
    const result = langiumParser.parse(input);
    if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) {
      throw new MermaidParseError(result);
    }
    const ast = result.value;
    log.debug("[ABNF Parser] Parsed rules:", ast.rules.length);
    populateDb(ast);
    log.debug("[ABNF Parser] Parse complete");
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
export {
  diagram
};
