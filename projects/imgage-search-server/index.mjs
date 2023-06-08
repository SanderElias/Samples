// create nodejs server to scrape images from google
import http from 'http';
import { imgSearch } from './imgSearch.mjs';

const port = 4304;
const host = 'localhost';

const options = {
  port,
  host: 'localhost',

};

const handlers = new Map(Object.entries({
  '': (req, res) => { res.end('Hello root') },
  'imgSearch': imgSearch,
}))

const requestListener = function (req, res) {
  const url = new URL(req.url, `http://${host}:${port}`);
  const [apiName, ...options] = url.pathname.split('/').slice(1);
  if (handlers.has(apiName)) {
    return handlers.get(apiName)(req, res, options);
  }
  res.writeHead(404);
  res.end("not found");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server running on port ${port}`);
});
