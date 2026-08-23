import {
  AbstractMermaidTokenBuilder,
  CommonValueConverter,
  EmptyFileSystem,
  MermaidGeneratedSharedModule,
  PacketGrammarGeneratedModule,
  __name,
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  inject
} from "./chunk-PSMVDB32.js";

// node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-UY3FDG6J.mjs
var PacketTokenBuilder = class extends AbstractMermaidTokenBuilder {
  static {
    __name(this, "PacketTokenBuilder");
  }
  constructor() {
    super(["packet"]);
  }
};
var PacketModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ __name(() => new PacketTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
  }
};
function createPacketServices(context = EmptyFileSystem) {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule
  );
  const Packet = inject(
    createDefaultCoreModule({ shared }),
    PacketGrammarGeneratedModule,
    PacketModule
  );
  shared.ServiceRegistry.register(Packet);
  return { shared, Packet };
}
__name(createPacketServices, "createPacketServices");

export {
  PacketModule,
  createPacketServices
};
