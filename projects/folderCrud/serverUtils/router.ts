// tslint:disable: no-non-null-assertion
import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import { readFileSync } from 'fs';
import { join } from 'path';
import { pathToRegexp, match } from 'path-to-regexp';

interface Handlers {
  [url: string]: Handler;
}

interface Params {
  [key: string]: string;
}

export interface Request extends IncomingMessage {
  rawBody?: string;
}

type RouteHandler = (req: Request, res: ServerResponse, params?: Params) => void;

class Handler {
  types = ['GET'];
  match: Function | undefined;
  constructor(private handle: RouteHandler, private url?: string) {
    if (url) {
      this.match = match(url);
    }
  }
  async process(req: Request, res: ServerResponse) {
    const { params } = (this.match && this.match(req.url)) || {};
    if (req.method === 'OPTIONS') {
      return OptionsResponse(req, res);
    }
    const rawData = await new Promise<string>((resolve, reject) => {
      const data: any[] = [];
      const timeout = setTimeout(() => {
        reject('timeout');
      }, 5000);
      req.on('data', chunk => {
        data.push(chunk);
      });
      req.on('end', () => {
        clearTimeout(timeout);
        resolve(data.join()); // 'Buy the milk'
      });
      req.on('error', () => {
        clearTimeout(timeout);
        reject();
      });
    });
    req.rawBody = rawData;
    return this.handle(req, res, params);
  }
}

/**

HTTP/1.1 204 No Content
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Expires: Thu, 20 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
x-ec-custom-error: 1

*/

export function OptionsResponse(req: Request, res: ServerResponse) {
  console.log(req.headers);
  res.writeHead(200, {
    Server: 'SandersMess',
    'Cache-Control': 'max-age=604800',
    'Access-Control-Allow-Origin': req.headers.origin || '*',
    'Access-Control-Request-Methods': 'GET, PUT, OPTIONS',
    'Access-Control-Allow-Readers': 'X-PINGOTHER, Content-type',
    Date: new Date().toISOString(),
  });
  res.end();
}

const h404 = new Handler((req: IncomingMessage, res: ServerResponse) => {
  const url = parse(req.url!, true);
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('No route registered for ' + url.pathname);
  res.end();
});

export class Router {
  handlers: Handlers = {
    '404': h404,
  };
  path = join(__dirname, '../../../slides');

  register(url: string, method: RouteHandler) {
    this.handlers[url] = new Handler(method, url);
  }

  route(req: IncomingMessage) {
    const url = parse(req.url!, true);
    const matcher = matchRoute(req);
    const handler = this.handlers[Object.keys(this.handlers).find(matcher) || ''];
    return handler || this.checkForFile(req);
  }

  checkForFile(req: IncomingMessage) {
    // Try to read the file locally, this is a security hole, yo /../../etc/passwd
    const url = parse(req.url!, true);
    const path = join(this.path, (url.pathname || '').split('..//').join(''));
    try {
      const data = readFileSync(path);
      const mime = req.headers.accepts || 'text/html';
      return new Handler((req: IncomingMessage, res: ServerResponse) => {
        res.writeHead(200, { 'Content-Type': mime });
        res.write(data);
        res.end();
      });
    } catch (e) {
      // console.log('generic fallback', e, path)
      return this.handlers['404'];
    }
  }
}

function matchRoute(
  req: IncomingMessage
): (value: string, index: number, obj: string[]) => boolean {
  return route => {
    try {
      const path = req.url || '';
      if (route.endsWith('**') && route.length > 3) {
        /** handle angular wildcard route but exclude the `/**`  */
        const base = route.slice(0, route.length - 3);
        return path.startsWith(base);
      } else {
        /** use the routematcher express is using */
        const regex = pathToRegexp(route);
        const match = regex.test(path);
        return match;
      }
    } catch (e) {
      /** something blew up with unexpected paths/routes means -no match anyway */
      // console.log(req.url, r);
    }
    return false;
  };
}
