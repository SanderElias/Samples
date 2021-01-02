"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderOnce = void 0;
const scully_1 = require("@scullyio/scully");
const pluginRepository_1 = require("@scullyio/scully/src/lib/pluginManagement/pluginRepository");
const puppeteerRenderPlugin_1 = require("@scullyio/scully/src/lib/renderPlugins/puppeteerRenderPlugin");
//libs/scully/src/lib/renderPlugins/puppeteerRenderPlugin.ts
exports.renderOnce = Symbol('renderOnce');
const render = scully_1.findPlugin(puppeteerRenderPlugin_1.puppeteerRender);
const cache = new Map();
scully_1.registerPlugin(pluginRepository_1.scullySystem, exports.renderOnce, (route, config) => {
    if (!cache.has(config)) {
        cache.set(config, render(route, config));
    }
    scully_1.log(`Cache used for "${scully_1.yellow(route.route)}"`);
    return cache.get(config);
});
//# sourceMappingURL=render-once.js.map