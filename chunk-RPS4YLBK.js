import {
  AbstractMermaidTokenBuilder,
  CommonValueConverter,
  CynefinGrammarGeneratedModule,
  EmptyFileSystem,
  MermaidGeneratedSharedModule,
  __name,
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  inject
} from "./chunk-PSMVDB32.js";

// node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-6TQVIW2G.mjs
var CynefinTokenBuilder = class extends AbstractMermaidTokenBuilder {
  static {
    __name(this, "CynefinTokenBuilder");
  }
  constructor() {
    super(["cynefin-beta"]);
  }
};
var CynefinModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ __name(() => new CynefinTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
  }
};
function createCynefinServices(context = EmptyFileSystem) {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule
  );
  const Cynefin = inject(
    createDefaultCoreModule({ shared }),
    CynefinGrammarGeneratedModule,
    CynefinModule
  );
  shared.ServiceRegistry.register(Cynefin);
  return { shared, Cynefin };
}
__name(createCynefinServices, "createCynefinServices");

export {
  CynefinModule,
  createCynefinServices
};
