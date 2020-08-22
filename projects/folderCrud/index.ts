import { createServer, IncomingMessage, ServerResponse } from 'http';
import { sendJson, sendHtml, sendText } from './utils/sendHtml';
import { join } from 'path';
import { walkSync } from './utils/walkSync';
import { OptionsResponse, Router } from './serverUtils/router';
import { readFileSync, writeFileSync } from 'fs';
import { type } from 'os';
import { IncomingHttpStatusHeader } from 'http2';

const homeFolder = join(__dirname, '../../');
const slideFolder = join(homeFolder, 'slides/');
const router = new Router();

router.register('/hello', (req, res) => {
  const send = sendHtml(req, res);
  send('world');
});

router.register('/slides', (req, res, params) => {
  const files = walkSync(slideFolder).map(folder => folder.replace(slideFolder, ''));
  sendJson(req, res)(files);
});

router.register('/slides/:file*', (req, res, params) => {
  const type = (req.method || 'get').toLowerCase();
  const send = sendJson(req, res);
  const files = walkSync(slideFolder).map(folder => folder.replace(slideFolder, ''));
  const { file } = params || {};
  const fileName = (Array.isArray(file) ? file.join('/') : file).split('..//').join('');
  console.log(fileName);
  switch (type) {
    case 'get':
      handleSlideGet(fileName, files, res, req, send);
      break;
    case 'put':
      const path = join(slideFolder, './', fileName);
      writeFileSync(path, req.rawBody);
      break;
    case 'options':
      break;
    default:
      send({ error: `unsupported method ${type.toUpperCase()}` });
  }
  send(files);
});

createServer((req, res) => {
  if (req.method==='OPTIONS') {
    return OptionsResponse(req,res)
  }
  console.log(`${req.method} url: "${req.url}"`);
  const handler = router.route(req);
  handler.process(req, res);
}).listen(8201);

function handleSlideGet(
  file: string,
  files: string[],
  res: ServerResponse,
  req: IncomingMessage,
  send: (body: object) => void
) {
  if (file) {
    console.log({ file });
    const foundFile = files.find(f => f.startsWith(file));
    if (foundFile) {
      const path = join(slideFolder, './', foundFile);
      sendText(req, res)(readFileSync(path).toString('utf-8'));
    } else {
      send({ error: `file not found ${file}` });
    }
  } else {
    send(files);
  }
}
