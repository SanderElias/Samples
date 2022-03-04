import { enableSPS, ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer'


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "samples",
  spsModulePath: "src/app/app.sps.module.ts",
  outDir: './dist/static',
  routes: {
  }
};
