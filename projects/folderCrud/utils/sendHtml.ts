import { ServerResponse } from 'http';
import { brotliCompressSync } from 'zlib';

export const sendHtml = (response: ServerResponse) => (body: string) =>
  send(body, undefined, response);

export const sendJson = (response: ServerResponse) => (body: object) =>
  send(JSON.stringify(body), 'application/json', response);

export const sendText = (response: ServerResponse) => (body: string) =>
  send(body, 'text/plain', response);

export const sendMd = (response: ServerResponse) => (body: string) =>
  send(body, 'text/markdown', response);

function send(body: string, type = 'text/html', response: ServerResponse) {
  const compressed =brotliCompressSync(body)
  response
    .writeHead(200, {
      'Content-Length': Buffer.byteLength(compressed),
      'Content-Type': type,
      'content-encoding': 'br'

    })
    .end(compressed);
}
