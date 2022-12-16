import '@scullyio/scully-plugin-puppeteer';
import routes from "./src/assets/routes.json" assert { type: "json" };
const extraRoutes = routes.map(route => route.path);
export const config = {
    projectRoot: "./src",
    projectName: "samples",
    spsModulePath: "src/app/app.sps.module.ts",
    extraRoutes,
    outDir: './dist/static',
    routes: {}
};
