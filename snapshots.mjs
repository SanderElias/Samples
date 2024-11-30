import { chromium } from '@playwright/test';
import { createRequire } from 'module';
import { join } from 'path';
const require = createRequire(import.meta.url);
const sharp = require('sharp');
const browser = await chromium.launch();
const page = await browser.newPage();

const folder = process.cwd();
const routesFile = join(folder, 'src/assets/routes.json');

const baseUrl = 'http://localhost:4200';
const outputFile = join(folder, 'src/assets/snapshots/');
const foreground = await sharp(join(folder, './assets/overlay.png')).resize({ height: 650 }).toBuffer({ resolveWithObject: true });

const blueSkyHandle = new Buffer.from(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="241.15981" height="33.591812">
  <path fill="#ffffff"
    d="M 3.1018103,0 241.1598,0.69258784 238.1486,33.397242 0,33.591812 Z"
    id="path951" style="stroke-width:0.79246" />
  <path fill="#1185fe"
    d="m 12.777637,6.1542141 c 3.125439,2.312825 6.500913,7.1260009 7.626072,9.9388969 a 33.129659,33.129659 0 0 1 7.626072,-9.9388969 c 2.250316,-1.625229 5.875826,-3.000422 5.875826,1.125158 0,0.937632 -0.437561,7.1260019 -0.625088,8.1261419 -0.937632,3.375475 -4.563141,4.375616 -7.688581,3.875546 5.375756,0.937632 7.000985,4.12558 3.750528,7.376037 -5.625792,6.000844 -8.126143,-1.625228 -8.751231,-3.437983 l -0.187526,-0.437562 c 0,-0.250035 0,0 -0.250036,0.437562 -0.687596,1.875264 -3.125439,9.438827 -8.75123,3.437983 C 8.46453,23.40664 9.8397234,20.406218 15.215479,19.28106 12.09004,19.718622 8.46453,18.843498 7.589407,15.343005 7.3393718,14.405374 6.9018103,7.9669681 6.9018103,7.2793721 c 0,-4.12558 3.6255097,-3.000422 5.8758267,-1.125158 z"
    id="path4" style="stroke-width:0.625088" />
  <text x="38" y="24" fill="#1185fe" font-size="23px">sanderelias.nl</text>
</svg>`);

export async function createSnapshotFor(route) {
  await page.goto(`${baseUrl}${route.path}`);
  /** give the page a moment to settle */
  await new Promise(r => setTimeout(r, 750));
  const title = (await page.locator('h1').allTextContents())[0] || 'Sanders demo page';
  route.title = route.title || title;
  /** drop the starting '/' and replace the rest with '-' */
  const name = route.path.substr(1).replace(/\//g, '-');
  /** playwright provides a 1280x720 buffer */
  const background = await page.screenshot();
  sharp(background)
    .composite([
      {
        input: foreground.data,
        top: 720 - foreground.info.height,
        left: 1280 - foreground.info.width,
      },
      {
        input: blueSkyHandle,
        top: 720 - 40,
        left: 1050,
      },
    ])
    .toFile(`${outputFile}${name}.png`);

  route.largeImage = `/assets/snapshots/${name}.png`;
  route.description = '';
  return route;
}

export const closeBrowser = async () => {
  browser.close();
};
