import {
  AbstractMermaidTokenBuilder,
  AbstractMermaidValueConverter,
  EmptyFileSystem,
  MermaidGeneratedSharedModule,
  PieGrammarGeneratedModule,
  __name,
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  inject
} from "./chunk-PSMVDB32.js";

// node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-3Z5EZCMW.mjs
var PieTokenBuilder = class extends AbstractMermaidTokenBuilder {
  static {
    __name(this, "PieTokenBuilder");
  }
  constructor() {
    super(["pie", "showData"]);
  }
};
var PieValueConverter = class extends AbstractMermaidValueConverter {
  static {
    __name(this, "PieValueConverter");
  }
  runCustomConverter(rule, input, _cstNode) {
    if (rule.name !== "PIE_SECTION_LABEL") {
      return void 0;
    }
    return input.replace(/"/g, "").trim();
  }
};
var PieModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ __name(() => new PieTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ __name(() => new PieValueConverter(), "ValueConverter")
  }
};
function createPieServices(context = EmptyFileSystem) {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule
  );
  const Pie = inject(
    createDefaultCoreModule({ shared }),
    PieGrammarGeneratedModule,
    PieModule
  );
  shared.ServiceRegistry.register(Pie);
  return { shared, Pie };
}
__name(createPieServices, "createPieServices");

export {
  PieModule,
  createPieServices
};
