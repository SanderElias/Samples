import { chromium } from '@playwright/test';
import { readFileSync, writeFileSync } from 'fs';
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
const foreground = await sharp(join(folder, './assets/overlay.png'))
  .resize({ height: 650 })
  .toBuffer({ resolveWithObject: true });

const twitterHandle =
  new Buffer.from(`<svg width="250" height="50" xmlns="http://www.w3.org/2000/svg" version="1.1" enable-background="new 0 0 600 220" xml:space="preserve">
  <g>
   <rect stroke="null" fill="#ffffff" stroke-width="0" x="-3.74301" y="-1.29498" width="200" height="52" id="svg_4" rx="8" opacity="0.75"/>
   <path id="svg_1" d="m9.85184,40.92013c15.93625,11.1446 36.1753,-1.25826 35.85657,-23.36772c1.59363,-1.25826 3.02789,-2.87603 4.14343,-4.8533c-1.59363,0.89876 -3.18725,1.43801 -4.94024,1.61777c1.81673,-1.25826 3.18725,-3.05578 3.8247,-5.2128c-1.59363,1.07851 -3.18725,1.79752 -5.25896,2.33677c-6.85259,-7.42374 -15.93625,0.53926 -14.0239,8.44833c-6.85259,-0.3595 -12.749,-4.13429 -16.89243,-9.70659c-1.91235,4.31404 -1.11554,9.88634 2.70916,12.40287c-1.43426,-0.17975 -3.02789,-0.53926 -3.8247,-1.25826c0,4.67354 2.86853,8.26858 6.53386,9.16734c-1.2749,0.3595 -2.39044,0.53926 -3.66534,0.17975c0.95618,3.59503 4.14343,6.47106 7.6494,6.47106c-3.18725,2.87603 -7.49004,4.31404 -12.11155,3.77479l0,-0.00001z" fill="#1d9bf0"/>
   <text fill="#1d9bf0" x="54.20018" y="31.86131" id="svg_2" stroke-width="0" font-size="24" text-anchor="start">esosanderelias</text>
   <rect fill="#1d9bf0" stroke-width="0" x="114.25699" y="24.70502" width="11" height="0" id="svg_5"/>
  </g>
 </svg>`);

export async function createSnapshotFor(route) {
  await page.goto(`${baseUrl}${route.path}`);
  /** give the page a moment to settle */
  await new Promise(r => setTimeout(r, 750));
  const title =
    (await page.locator('h1').allTextContents())[0] || 'Sanders demo page';
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
        input: twitterHandle,
        top: 720 - 60,
        left: 1070,
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
