import {
  AbstractMermaidTokenBuilder,
  AbstractMermaidValueConverter,
  EmptyFileSystem,
  MermaidGeneratedSharedModule,
  RailroadEbnfGrammarGeneratedModule,
  __name,
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  inject
} from "./chunk-PSMVDB32.js";

// node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-2ZTRR5NV.mjs
var RailroadEbnfTokenBuilder = class extends AbstractMermaidTokenBuilder {
  static {
    __name(this, "RailroadEbnfTokenBuilder");
  }
  constructor() {
    super(["railroad-ebnf-beta"]);
  }
};
var decodeEscapedString = /* @__PURE__ */ __name((input) => {
  const content = input.slice(1, -1);
  let value = "";
  for (let index = 0; index < content.length; index++) {
    const character = content[index];
    if (character === "\\" && index + 1 < content.length) {
      index++;
      const escaped = content[index];
      switch (escaped) {
        case "n":
          value += "\n";
          break;
        case "r":
          value += "\r";
          break;
        case "t":
          value += "	";
          break;
        default:
          value += escaped;
      }
      continue;
    }
    value += character;
  }
  return value;
}, "decodeEscapedString");
var RailroadEbnfValueConverter = class extends AbstractMermaidValueConverter {
  static {
    __name(this, "RailroadEbnfValueConverter");
  }
  runConverter(rule, input, cstNode) {
    const value = super.runConverter(rule, input, cstNode);
    if (rule.name === "TITLE" && typeof value === "string") {
      const trimmedValue = value.trim();
      if (trimmedValue.startsWith('"') && trimmedValue.endsWith('"') || trimmedValue.startsWith("'") && trimmedValue.endsWith("'")) {
        return decodeEscapedString(trimmedValue);
      }
    }
    return value;
  }
  runCustomConverter(rule, input, _cstNode) {
    if (rule.name === "EBNF_STRING") {
      return decodeEscapedString(input);
    }
    if (rule.name === "EBNF_SPECIAL_SEQUENCE") {
      return input.slice(1, -1).trim();
    }
    return void 0;
  }
};
var RailroadEbnfModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ __name(() => new RailroadEbnfTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ __name(() => new RailroadEbnfValueConverter(), "ValueConverter")
  }
};
function createRailroadEbnfServices(context = EmptyFileSystem) {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule
  );
  const RailroadEbnf = inject(
    createDefaultCoreModule({ shared }),
    RailroadEbnfGrammarGeneratedModule,
    RailroadEbnfModule
  );
  shared.ServiceRegistry.register(RailroadEbnf);
  return { shared, RailroadEbnf };
}
__name(createRailroadEbnfServices, "createRailroadEbnfServices");

export {
  RailroadEbnfModule,
  createRailroadEbnfServices
};
