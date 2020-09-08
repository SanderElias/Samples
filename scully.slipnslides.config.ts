import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  outDir: './dist/static',
  routes: {
    '/:slide': {
      type: 'contentFolder',
      slide: {
        folder: './slides',
      },
    },
    '/edit': {
      type: 'ignored',
    },
  },
};
