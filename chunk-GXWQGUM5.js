import {
  AbstractMermaidTokenBuilder,
  AbstractMermaidValueConverter,
  EmptyFileSystem,
  MermaidGeneratedSharedModule,
  RailroadPegGrammarGeneratedModule,
  __name,
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  inject
} from "./chunk-PSMVDB32.js";

// node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-747NJXEK.mjs
var RailroadPegTokenBuilder = class extends AbstractMermaidTokenBuilder {
  static {
    __name(this, "RailroadPegTokenBuilder");
  }
  constructor() {
    super(["railroad-peg-beta"]);
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
var RailroadPegValueConverter = class extends AbstractMermaidValueConverter {
  static {
    __name(this, "RailroadPegValueConverter");
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
    if (rule.name === "PEG_STRING") {
      return decodeEscapedString(input);
    }
    return void 0;
  }
};
var RailroadPegModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ __name(() => new RailroadPegTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ __name(() => new RailroadPegValueConverter(), "ValueConverter")
  }
};
function createRailroadPegServices(context = EmptyFileSystem) {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule
  );
  const RailroadPeg = inject(
    createDefaultCoreModule({ shared }),
    RailroadPegGrammarGeneratedModule,
    RailroadPegModule
  );
  shared.ServiceRegistry.register(RailroadPeg);
  return { shared, RailroadPeg };
}
__name(createRailroadPegServices, "createRailroadPegServices");

export {
  RailroadPegModule,
  createRailroadPegServices
};
