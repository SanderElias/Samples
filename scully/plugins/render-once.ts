import { findPlugin, HandledRoute, log, registerPlugin, routeRenderer, yellow } from '@scullyio/scully';

export const renderOnce = Symbol('renderOnce');
const render = findPlugin(routeRenderer);
const cache = new Map<any, Promise<string>>();

registerPlugin('scullySystem', renderOnce, (route: HandledRoute, config) => {
  if (!cache.has(config)) {
    cache.set(config, render(route, config));
  }
  log(`Cache used for "${yellow(route.route)}"`);
  return cache.get(config);
});
