import { IncomingMessage, ServerResponse } from 'http';
import { brotliCompressSync } from 'zlib';

export const sendHtml = (req: IncomingMessage, response: ServerResponse) => (body: string) => send(body, undefined, response, req);

export const sendJson = (req: IncomingMessage, response: ServerResponse) => (body: object) =>
  send(JSON.stringify(body), 'application/json', response, req);

export const sendText = (req: IncomingMessage, response: ServerResponse) => (body: string) =>
  send(body, 'text/plain', response, req);

export const sendMd = (req: IncomingMessage, response: ServerResponse) => (body: string) =>
  send(body, 'text/markdown', response, req);

function send(body: string, type = 'text/html', response: ServerResponse, req: IncomingMessage) {
  const compressed = brotliCompressSync(body);
  response
    .writeHead(200, {
      'Content-Length': Buffer.byteLength(compressed),
      'Content-Type': type,
      'content-encoding': 'br',
      'Access-Control-Allow-Origin': req.headers.origin || '*',
    })
    .end(compressed);
}
