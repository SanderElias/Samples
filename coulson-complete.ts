import {readFileSync, writeFile} from 'fs';
import {DefaultUrlSerializer, UrlSerializer} from '@angular/router';
import {parseAngularRoutes} from 'guess-parser';
import {httpGetJson} from './httpGetJson';
import {join} from 'path';
/** wrap in async function so I can await. */
(async () => {
  enum RoutePartTypes {
    static,
    id,
  }

  const config = {
    '/viewModel/user/:id': {
      id: {
        url: 'https://jsonplaceholder.typicode.com/users',
        property: 'id',
      },
    },
    '/viewModel/user/:id/related/:friendCode': {
      id: {
        url: 'https://jsonplaceholder.typicode.com/users',
        property: 'id',
      },
      friendCode: {
        url: 'https://jsonplaceholder.typicode.com/todos',
        property: 'id',
      },
    },
    '/viewModel/user/:id/related/:friendCode/:candy': {
      id: {
        url: 'https://jsonplaceholder.typicode.com/users',
        property: 'id',
      },
      friendCode: {
        url: 'https://jsonplaceholder.typicode.com/posts',
        property: 'id',
      },
      candy: {
        url: 'https://jsonplaceholder.typicode.com/users',
        property: 'id',
      },
    },
  };

  const routeList = JSON.parse(readFileSync('./output.json').toString());

  const handleRouteWithParams = async (r: string) => {
    const conf = config[r];
    if (!conf) {
      // TODO: add userInteraction so the user can provide this while running.
      throw new Error(`No configuration for route "${r}" found.`);
    }
    const parts = r.split('/');
    const params = parts.filter(p => p.startsWith(':')).map(id => id.slice(1));

    if (!params.every(p => conf.hasOwnProperty(p))) {
      // TODO: add userInteraction so the user can provide this while running.
      throw new Error(`missing config for parameters in router:${r}`);
    }
    const paramData = await params.reduce(async (allData, paramName) => {
      const iterim = await allData;
      const data = (await httpGetJson(conf[paramName].url)) as [];
      iterim[paramName] = data.map(row => row[conf[paramName].property]);
      return iterim;
    }, {});

    console.log(r);
    const combined = params.reduce((resultUrls, param) => {
      const place = parts.findIndex(part => part === ':' + param);
      const pData = paramData[param];
      if (resultUrls.length === 0) {
        // top level, reconstruct from 0
        return pData.map(item =>
          parts.reduce((url, part, i) => `${url}/${i === place ? item : part}`)
        );
      }
      return resultUrls.reduce((total, cur) => {
        const decon = cur.split('/');
        return total.concat(
          pData.map(item =>
            decon.reduce(
              (url, part, i) => `${url}/${i === place ? item : part}`
            )
          )
        );
      }, []);
    }, []);

    return combined; //?
  };

  const routesToGenerate = await routeList.reduce(
    async (result: string[], cur: string) => {
      const x = await result;
      if (cur.includes(':')) {
        /** work in extra lines... */
        const r = await handleRouteWithParams(cur);
        x.push(...r);
      } else {
        x.push(cur);
      }
      return x;
    },
    []
  );

  console.log(`We need to generate ${routesToGenerate.length} pages`);
//   const siteMap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
//   ${routesToGenerate.map(
//     route => `<url>
//     <loc>${route}</loc>
//   </url>`
//   )}
// </urlset>`;

//   writeFile(join(__dirname, '/dist/', 'sitemap.xml'), siteMap, 'utf8', err => {
//     if (err) {
//       throw err;
//     }
//     console.log('Sitemap has been created.');
//   });

//   writeFile(
//     'routes.json',
//     JSON.stringify(routesToGenerate, undefined, 4),
//     'utf8',
//     function(err) {
//       if (err) {
//         console.log('An error occurred while writing JSON Object to File.');
//         return console.log(err);
//       }

//       console.log('JSON file has been saved.');
//     }
//   );
})();
