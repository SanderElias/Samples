"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderOnce = void 0;
const scully_1 = require("@scullyio/scully");
// import { scullySystem } from '@scullyio/scully/src/lib/pluginManagement/pluginRepository';
// import { puppeteerRender } from '@scullyio/scully/src/lib/renderPlugins/puppeteerRenderPlugin';
//libs/scully/src/lib/renderPlugins/puppeteerRenderPlugin.ts
exports.renderOnce = Symbol('renderOnce');
const render = (0, scully_1.findPlugin)(scully_1.routeRenderer);
const cache = new Map();
(0, scully_1.registerPlugin)("scullySystem", exports.renderOnce, (route, config) => {
    if (!cache.has(config)) {
        cache.set(config, render(route, config));
    }
    (0, scully_1.log)(`Cache used for "${(0, scully_1.yellow)(route.route)}"`);
    return cache.get(config);
});
//# sourceMappingURL=render-once.js.map