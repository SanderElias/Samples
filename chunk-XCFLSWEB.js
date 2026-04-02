import {
  AbstractMermaidTokenBuilder,
  CommonValueConverter,
  EmptyFileSystem,
  MermaidGeneratedSharedModule,
  RadarGrammarGeneratedModule,
  __name,
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  inject,
  lib_exports
} from "./chunk-WT6WHHBT.js";

// node_modules/.pnpm/@mermaid-js+parser@1.1.0/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-2KRD3SAO.mjs
var RadarTokenBuilder = class extends AbstractMermaidTokenBuilder {
  static {
    __name(this, "RadarTokenBuilder");
  }
  constructor() {
    super(["radar-beta"]);
  }
};
var RadarModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ __name(() => new RadarTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
  }
};
function createRadarServices(context = EmptyFileSystem) {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule
  );
  const Radar = inject(
    createDefaultCoreModule({ shared }),
    RadarGrammarGeneratedModule,
    RadarModule
  );
  shared.ServiceRegistry.register(Radar);
  return { shared, Radar };
}
__name(createRadarServices, "createRadarServices");

export {
  RadarModule,
  createRadarServices
};
