import { createServer, ServerResponse } from 'http';
import { sendJson, sendHtml, sendText } from './utils/sendHtml';
import { join } from 'path';
import { walkSync } from './utils/walkSync';
import { Router } from './serverUtils/router';
import { readFileSync, writeFileSync } from 'fs';
import { type } from 'os';

const homeFolder = join(__dirname, '../../');
const slideFolder = join(homeFolder, 'slides/');
const router = new Router();

router.register('/hello', (req, res) => {
  const send = sendHtml(res);
  send('world');
});

router.register('/slides/:file*', (req, res, params) => {
  const type = (req.method || 'get').toLowerCase();
  const send = sendJson(res);
  const files = walkSync(slideFolder).map(folder => folder.replace(slideFolder, ''));
  const { file } = params || {};
  const fileName = (Array.isArray(file) ? file.join('/') : file).split('..//').join('');
  console.log(fileName);
  switch (type) {
    case 'get':
      handleSlideGet(fileName, files, res, send);
      break;
    case 'put':
      const path = join(slideFolder, './', fileName);
      writeFileSync(path, req.rawBody);
      break;
    default:
      send({ error: `unsupported method ${type.toUpperCase()}` });
  }
  send(files);
});

createServer((req, res) => {
  console.log(`${req.method} url: "${req.url}"`);
  const handler = router.route(req);
  handler.process(req, res);
}).listen(8201);

function handleSlideGet(
  file: string,
  files: string[],
  res: ServerResponse,
  send: (body: object) => void
) {
  if (file) {
    console.log({ file });
    const foundFile = files.find(f => f.startsWith(file));
    if (foundFile) {
      const path = join(slideFolder, './', foundFile);
      sendText(res)(readFileSync(path).toString('utf-8'));
    } else {
      send({ error: `file not found ${file}` });
    }
  } else {
    send(files);
  }
}
