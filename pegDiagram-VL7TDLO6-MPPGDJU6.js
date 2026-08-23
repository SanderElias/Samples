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
import "./chunk-EONS3ZNY.js";
import {
  createRailroadPegServices
} from "./chunk-GXWQGUM5.js";
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

// node_modules/.pnpm/mermaid@11.16.1/node_modules/mermaid/dist/chunks/mermaid.core/pegDiagram-VL7TDLO6.mjs
var langiumParser = createRailroadPegServices().RailroadPeg.parser.LangiumParser;
var transformOrderedChoice = /* @__PURE__ */ __name((choice) => {
  const alternatives = choice.alternatives.map(transformSequence);
  if (alternatives.length === 1) {
    return alternatives[0];
  }
  return {
    type: "choice",
    alternatives
  };
}, "transformOrderedChoice");
var transformSequence = /* @__PURE__ */ __name((sequence) => {
  const elements = sequence.elements.map(transformPrefix);
  if (elements.length === 1) {
    return elements[0];
  }
  return {
    type: "sequence",
    elements
  };
}, "transformSequence");
var transformPrefix = /* @__PURE__ */ __name((prefix) => {
  const inner = transformSuffix(prefix.suffix);
  if (!prefix.operator) {
    return inner;
  }
  const label = prefix.operator === "&" ? `&${nodeToLabel(inner)}` : `!${nodeToLabel(inner)}`;
  return {
    type: "special",
    text: label
  };
}, "transformPrefix");
var nodeToLabel = /* @__PURE__ */ __name((node) => {
  switch (node.type) {
    case "terminal":
      return `"${node.value}"`;
    case "nonterminal":
      return node.name;
    case "special":
      return node.text;
    default:
      return "(...)";
  }
}, "nodeToLabel");
var transformSuffix = /* @__PURE__ */ __name((suffix) => {
  const inner = transformPrimary(suffix.primary);
  if (!suffix.operator) {
    return inner;
  }
  switch (suffix.operator) {
    case "?":
      return { type: "optional", element: inner };
    case "*":
      return { type: "repetition", element: inner, min: 0, max: Infinity };
    case "+":
      return { type: "repetition", element: inner, min: 1, max: Infinity };
    default:
      throw new Error(`Unsupported PEG suffix operator: ${suffix.operator}`);
  }
}, "transformSuffix");
var transformPrimary = /* @__PURE__ */ __name((primary) => {
  switch (primary.$type) {
    case "PegLiteral":
      return {
        type: "terminal",
        value: primary.value
      };
    case "PegIdentifier":
      return {
        type: "nonterminal",
        name: primary.name
      };
    case "PegGroup":
      return transformOrderedChoice(primary.element);
    case "PegAny":
      return {
        type: "special",
        text: primary.dot
      };
    default:
      throw new Error(`Unsupported PEG primary node: ${primary.$type}`);
  }
}, "transformPrimary");
var transformRule = /* @__PURE__ */ __name((rule) => {
  return {
    name: rule.name,
    definition: transformOrderedChoice(rule.definition)
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
    log.debug("[PEG Parser] Starting Langium parse");
    const result = langiumParser.parse(input);
    if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) {
      throw new MermaidParseError(result);
    }
    const ast = result.value;
    log.debug("[PEG Parser] Parsed rules:", ast.rules.length);
    populateDb(ast);
    log.debug("[PEG Parser] Parse complete");
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
