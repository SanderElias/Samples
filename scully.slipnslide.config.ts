import { HandledRoute, logWarn, registerPlugin, ScullyConfig } from '@scullyio/scully';
import { renderOnce } from './scully/plugins/render-once';
import { JSDOM } from 'jsdom';
import { startWith } from 'rxjs/operators';
const extractMDStyles = Symbol('extractMDStyles');

export const config: ScullyConfig = {
  projectRoot: './projects/slipnslide/src',
  projectName: 'slipnslide',
  outDir: './dist/static',
  routes: {
    '/:slide': {
      type: 'contentFolder',
      slide: {
        folder: './slides',
      },
      preRenderer: (h: HandledRoute) => {
        h.renderPlugin = renderOnce;
      },
    },
    // '/slide/:slug': {
    //   type: 'contentFolder',
    //   slug: {
    //     folder: './slides',
    //   },
    //   preRenderer: (h: HandledRoute) => {
    //     h.renderPlugin = renderOnce;
    //   },
    // },
    '/edit': {
      type: 'ignored',
    },
    '/code-sample': {
      type: 'ignored',
    },
    // '/edit': {
    //   type: 'ignored',
    // },
  },
};

registerPlugin('render', extractMDStyles, async (html, route) => {
  try {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const parent = document.querySelector('scully-content').parentElement;
    const styles = Array.from(parent.getElementsByTagName('style'));
    styles.forEach(node => document.body.appendChild(node));
    return dom.serialize();
  } catch (e) {
    console.error(e);
  }

  return html;
});
