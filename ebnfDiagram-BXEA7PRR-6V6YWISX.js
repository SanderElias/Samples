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
import {
  createRailroadEbnfServices
} from "./chunk-GZMAVDCY.js";
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

// node_modules/.pnpm/mermaid@11.16.1/node_modules/mermaid/dist/chunks/mermaid.core/ebnfDiagram-BXEA7PRR.mjs
var langiumParser = createRailroadEbnfServices().RailroadEbnf.parser.LangiumParser;
var transformChoice = /* @__PURE__ */ __name((choice) => {
  const alternatives = choice.alternatives.map(transformSequence);
  if (alternatives.length === 1) {
    return alternatives[0];
  }
  return {
    type: "choice",
    alternatives
  };
}, "transformChoice");
var transformSequence = /* @__PURE__ */ __name((sequence) => {
  const elements = sequence.elements.map(transformTerm);
  if (elements.length === 1) {
    return elements[0];
  }
  return {
    type: "sequence",
    elements
  };
}, "transformSequence");
var transformPrimary = /* @__PURE__ */ __name((primary) => {
  switch (primary.$type) {
    case "EbnfTerminal":
      return {
        type: "terminal",
        value: primary.value
      };
    case "EbnfNonTerminal":
      return {
        type: "nonterminal",
        name: primary.name
      };
    case "EbnfSpecial":
      return {
        type: "special",
        text: primary.text
      };
    case "EbnfGroup":
      return transformChoice(primary.element);
    case "EbnfOptional":
      return {
        type: "optional",
        element: transformChoice(primary.element)
      };
    case "EbnfRepetition":
      return {
        type: "repetition",
        element: transformChoice(primary.element),
        min: 0,
        max: Infinity
      };
    default:
      throw new Error(`Unsupported EBNF primary node: ${primary.$type}`);
  }
}, "transformPrimary");
var transformPostfix = /* @__PURE__ */ __name((node, postfix) => {
  switch (postfix.$type) {
    case "EbnfOptionalPostfix":
      return {
        type: "optional",
        element: node
      };
    case "EbnfZeroOrMorePostfix":
      return {
        type: "repetition",
        element: node,
        min: 0,
        max: Infinity
      };
    case "EbnfOneOrMorePostfix":
      return {
        type: "repetition",
        element: node,
        min: 1,
        max: Infinity
      };
    case "EbnfExceptionPostfix":
      return {
        type: "sequence",
        elements: [
          node,
          { type: "terminal", value: "-" },
          transformPrimary(postfix.except)
        ]
      };
    default:
      throw new Error(`Unsupported EBNF postfix node: ${postfix.$type}`);
  }
}, "transformPostfix");
var transformTerm = /* @__PURE__ */ __name((term) => {
  return term.postfixes.reduce((currentNode, postfix) => {
    return transformPostfix(currentNode, postfix);
  }, transformPrimary(term.base));
}, "transformTerm");
var transformRule = /* @__PURE__ */ __name((rule) => {
  return {
    name: rule.name,
    definition: transformChoice(rule.definition)
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
    log.debug("[EBNF Parser] Starting Langium parse");
    const result = langiumParser.parse(input);
    if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) {
      throw new MermaidParseError(result);
    }
    const ast = result.value;
    log.debug("[EBNF Parser] Parsed rules:", ast.rules.length);
    populateDb(ast);
    log.debug("[EBNF Parser] Parse complete");
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
