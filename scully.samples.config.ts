import { enableSPS, ScullyConfig } from '@scullyio/scully';
import { readFileSync } from 'fs';


enableSPS();
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "samples",
  spsModulePath: "src/app/app.sps.module.ts",
  outDir: './dist/static',
  routes: {
  }
};
