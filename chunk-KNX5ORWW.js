import {
  toSignal
} from "./chunk-KQ7WRSUA.js";
import {
  GuardsCheckEnd,
  Router
} from "./chunk-WZF6MLWQ.js";
import {
  Meta,
  Title
} from "./chunk-2NL724MV.js";
import {
  HttpClient
} from "./chunk-UNRJB5KN.js";
import {
  ChangeDetectionStrategy,
  Component,
  combineLatest,
  filter,
  inject,
  map,
  setClassMetadata,
  tap,
  ɵsetClassDebugInfo,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵnamespaceSVG,
  ɵɵsanitizeUrl,
  ɵɵtext
} from "./chunk-CYK2LKQE.js";

// src/app/util/update-meta-data.ts
var updateRouteInfo = (meta, title) => (routeInfo, article) => {
  if (routeInfo?.path) {
    try {
      const origin = `https://samples.selias.dev`;
      let desc = "";
      if (article) {
        desc = `Blog post: ${article.title}
          description: ${article.description}
          author: Sander Elias
          url: ${origin}${routeInfo.path}`;
      } else {
        desc = `Angular Sample page for ${routeInfo.path}
    ${routeInfo.description}
    sourcecode: ${routeInfo.gitFolder}
    url: ${`${origin}${routeInfo.path}`}`;
      }
      const updateMeta = (prop, content) => {
        if (meta.getTag(`property="${prop}"`)) {
          meta.updateTag({ property: prop, content });
        } else {
          meta.addTag({ property: prop, content });
        }
      };
      const location = new URL(origin + routeInfo.path);
      updateMeta("description", desc);
      if (article) {
        updateMeta("og:type", "article");
        updateMeta("article:published_time", article.dateAdded);
        updateMeta("article:author", "Sander Elias");
        updateMeta("article:section", "Blog-post");
        updateMeta("article:tag", (article.tags || []).join(", "));
      } else {
        updateMeta("og:type", "website");
      }
      updateMeta("og:title", routeInfo.title);
      updateMeta("og:description", desc);
      updateMeta("og:image", `${origin}${routeInfo.largeImage}`);
      updateMeta("og:image:type", "image/png");
      updateMeta("og:image:width", "800");
      updateMeta("og:image:height", "600");
      updateMeta("og:domain", origin);
      updateMeta("og:url", location.href);
      updateMeta("twitter:title", routeInfo.title);
      updateMeta("twitter:description", desc);
      updateMeta("twitter:card", "summary_large_image");
      updateMeta("twitter:domain", origin);
      updateMeta("twitter:image", `${origin}${routeInfo.largeImage}`);
      updateMeta("twitter:url", location.href);
      title.setTitle(routeInfo.title);
    } catch (e) {
      console.log(`
----------------------------------------------------------------------
  Error updating meta tags for route ${routeInfo.path}
  article:
    ${JSON.stringify(article, void 0, 2)}
  routeInfo:
  error:
      ${e instanceof Error ? e.message : e}
  ${JSON.stringify(e, null, 2)}
----------------------------------------------------------------------
        `);
    }
  }
};

// src/app/show-source/show-source.component.ts
function ShowSourceComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 1)(2, "g");
    \u0275\u0275domElement(3, "path", 2);
    \u0275\u0275domElementEnd()();
    \u0275\u0275text(4, " View Source ");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275domProperty("href", ctx, \u0275\u0275sanitizeUrl);
  }
}
var ShowSourceComponent = class _ShowSourceComponent {
  constructor() {
    this.router = inject(Router);
    this.http = inject(HttpClient);
    this.meta = inject(Meta);
    this.title = inject(Title);
    this.path$ = this.router.events.pipe(
      filter(isGuardsCheckEnd),
      // note the typeGuard function, which makes sure that the event is a GuardsCheckEnd
      map((ev) => ev.url)
    );
    this.routes$ = this.http.get("/assets/routes.json");
    this.routeInfo = toSignal(combineLatest({ routes: this.routes$, path: this.path$ }).pipe(
      map(({ routes, path }) => routes.find((r) => r.path.startsWith(path))),
      // extract the current one.
      // tap(data => console.log(data)), // debugging check the data. seems off in production.
      tap(updateRouteInfo(this.meta, this.title))
      // update the metadata
    ));
  }
  static {
    this.\u0275fac = function ShowSourceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShowSourceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowSourceComponent, selectors: [["app-show-source"]], decls: 1, vars: 1, consts: [["target", "_blank", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "256px", "height", "250px", "viewBox", "0 0 256 250", "version", "1.1", "preserveAspectRatio", "xMidYMid"], ["d", "M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z", "fill", "#161614"]], template: function ShowSourceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ShowSourceComponent_Conditional_0_Template, 5, 1, "a", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = (tmp_0_0 = ctx.routeInfo()) == null ? null : tmp_0_0.gitFolder) ? 0 : -1, tmp_0_0);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\na[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px;\n  border-radius: 6px;\n  background-color: #f0f0f0;\n  text-decoration: none;\n  cursor: pointer;\n  color: #333;\n}\nsvg[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n  width: 28px;\n  height: 28px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowSourceComponent, [{
    type: Component,
    args: [{ selector: "app-show-source", template: `
    <!-- Only show the button if we actually have a gitFolder string -->
    @if (routeInfo()?.gitFolder; as i) {
      <a [href]="i" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="256px"
          height="250px"
          viewBox="0 0 256 250"
          version="1.1"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <path
              d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"
              fill="#161614"
            />
          </g>
        </svg>
        View Source
      </a>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;00acb3b9b8af569d3b7c21ac499a6836c3921e771a4ae68e7b237bc92d4e9eef;/home/runner/work/Samples/Samples/src/app/show-source/show-source.component.ts */\n:host {\n  display: block;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\na {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px;\n  border-radius: 6px;\n  background-color: #f0f0f0;\n  text-decoration: none;\n  cursor: pointer;\n  color: #333;\n}\nsvg {\n  display: inline-block;\n  padding: 0;\n  width: 28px;\n  height: 28px;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowSourceComponent, { className: "ShowSourceComponent", filePath: "src/app/show-source/show-source.component.ts", lineNumber: 69 });
})();
function isGuardsCheckEnd(event) {
  return event instanceof GuardsCheckEnd;
}

export {
  updateRouteInfo,
  ShowSourceComponent,
  isGuardsCheckEnd
};
