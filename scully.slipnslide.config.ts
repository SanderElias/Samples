import { ScullyConfig } from '@scullyio/scully';
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
    },
    '/edit': {
      type: 'ignored',
    },
  },
};
