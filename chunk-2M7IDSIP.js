import {
  AbstractMermaidValueConverter,
  EmptyFileSystem,
  MermaidGeneratedSharedModule,
  WardleyGrammarGeneratedModule,
  __name,
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  inject,
  lib_exports
} from "./chunk-GL6CDZES.js";

// node_modules/.pnpm/@mermaid-js+parser@1.1.0/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-CIAEETIT.mjs
var WardleyValueConverter = class extends AbstractMermaidValueConverter {
  static {
    __name(this, "WardleyValueConverter");
  }
  runCustomConverter(rule, input, _cstNode) {
    switch (rule.name.toUpperCase()) {
      case "LINK_LABEL":
        return input.substring(1).trim();
      default:
        return void 0;
    }
  }
};
var WardleyModule = {
  parser: {
    ValueConverter: /* @__PURE__ */ __name(() => new WardleyValueConverter(), "ValueConverter")
  }
};
function createWardleyServices(context = EmptyFileSystem) {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule
  );
  const Wardley = inject(
    createDefaultCoreModule({ shared }),
    WardleyGrammarGeneratedModule,
    WardleyModule
  );
  shared.ServiceRegistry.register(Wardley);
  return { shared, Wardley };
}
__name(createWardleyServices, "createWardleyServices");

export {
  WardleyModule,
  createWardleyServices
};
