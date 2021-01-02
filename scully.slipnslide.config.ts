import { HandledRoute, ScullyConfig } from '@scullyio/scully';
import { renderOnce } from './scully/plugins/render-once';
export const config: ScullyConfig = {
  projectRoot: './projects/slipnslide/src',
  projectName: 'slipnslide',
  outDir: './dist/static',
  routes: {
    '/slide/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './slides',
      },
      preRenderer: (h: HandledRoute) => {
        h.renderPlugin = renderOnce;
      },
    },
    '/edit': {
      type: 'ignored',
    },
  },
};
