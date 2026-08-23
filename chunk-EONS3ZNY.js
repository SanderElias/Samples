import {
  AbstractMermaidTokenBuilder,
  AbstractMermaidValueConverter,
  EmptyFileSystem,
  MermaidGeneratedSharedModule,
  RailroadAbnfGrammarGeneratedModule,
  __name,
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  inject
} from "./chunk-PSMVDB32.js";

// node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-XHIXRSVI.mjs
var RailroadAbnfTokenBuilder = class extends AbstractMermaidTokenBuilder {
  static {
    __name(this, "RailroadAbnfTokenBuilder");
  }
  constructor() {
    super(["railroad-abnf-beta"]);
  }
};
var RailroadAbnfValueConverter = class extends AbstractMermaidValueConverter {
  static {
    __name(this, "RailroadAbnfValueConverter");
  }
  runConverter(rule, input, cstNode) {
    const value = super.runConverter(rule, input, cstNode);
    if (rule.name === "TITLE" && typeof value === "string") {
      const trimmedValue = value.trim();
      if (trimmedValue.startsWith('"') && trimmedValue.endsWith('"') || trimmedValue.startsWith("'") && trimmedValue.endsWith("'")) {
        return trimmedValue.slice(1, -1);
      }
    }
    return value;
  }
  runCustomConverter(rule, input, _cstNode) {
    if (rule.name === "ABNF_STRING") {
      return input.slice(1, -1);
    }
    return void 0;
  }
};
var RailroadAbnfModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ __name(() => new RailroadAbnfTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ __name(() => new RailroadAbnfValueConverter(), "ValueConverter")
  }
};
function createRailroadAbnfServices(context = EmptyFileSystem) {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule
  );
  const RailroadAbnf = inject(
    createDefaultCoreModule({ shared }),
    RailroadAbnfGrammarGeneratedModule,
    RailroadAbnfModule
  );
  shared.ServiceRegistry.register(RailroadAbnf);
  return { shared, RailroadAbnf };
}
__name(createRailroadAbnfServices, "createRailroadAbnfServices");

export {
  RailroadAbnfModule,
  createRailroadAbnfServices
};
