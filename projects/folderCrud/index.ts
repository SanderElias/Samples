import { certificateFor } from 'devcert';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { join } from 'path';
import { OptionsResponse, Request, Router } from './serverUtils/router';
import { sendHtml, sendJson, sendText } from './utils/sendHtml';
import { walkSync } from './utils/walkSync';

const yargs = require('yargs');
const homeFolder = join(__dirname, '../../');

const { slideFolder, src } = yargs
  .string('slideFolder')
  .default('sf', join(homeFolder, 'slides/'))
  .alias('sf', 'slideFolder')
  .string('sources')
  .alias('src', 'sources')
  .default('src', join(homeFolder, 'projects/')).argv;

if (!existsSync(slideFolder)) {
  console.log(`Folder "${slideFolder}" doesn't seem to exists`);
  process.exit(15);
}

(async () => {
  const ssl = await certificateFor('slipnslidess');
  const router = new Router();

  router.register('/hello', (req, res) => {
    const send = sendHtml(req, res);
    send('world');
  });

  router.register('/slides', (req, res, params) => {
    console.log('slides');
    const files = walkSync(slideFolder).map(folder => folder.replace(slideFolder, ''));
    sendJson(req, res)(files);
  });

  router.register('/files', (req, res, params) => {
    console.log('slides');
    const files = walkSync(src).map(folder => folder.replace(src, ''));
    sendJson(req, res)(files);
  });

  router.register('/slides/:file*', (req, res, params) => {
    fileFromFolder(slideFolder, req, res, params);
  });
  router.register('/file/:file*', (req, res, params) => {
    fileFromFolder(src, req, res, params);
  });

  createServer((req, res) => {
    if (req.method === 'OPTIONS') {
      return OptionsResponse(req, res);
    }
    console.log(`${req.method} url: "${req.url}"`);
    const handler = router.route(req);
    handler.process(req, res);
  }).listen(8201);
})();

function fileFromFolder(fileRoot: string, req: Request, res: ServerResponse, params: any) {
  try {
    const type = (req.method || 'get').toLowerCase();
    const send = sendJson(req, res);
    const files = walkSync(fileRoot).map(folder => folder.replace(fileRoot, ''));
    const { file } = params || {};
    const fileName = (Array.isArray(file) ? file.join('/') : file).split('..//').join('');
    switch (type) {
      case 'get':
        handleFileRead(fileName);
        break;
      case 'put':
        const path = join(fileRoot, './', fileName);
        // tslint:disable-next-line: no-unused-expression
        console.log({ path });
        // tslint:disable-next-line: no-unused-expression
        req.rawHeaders && writeFileSync(path, req.rawData!);
        // console.log('write', req.rawData);
        send({ ok: true });
        break;
      case 'options':
        break;
      default:
        send({ error: `unsupported method ${type.toUpperCase()}` });
    }
    function handleFileRead(file: string) {
      if (file) {
        const foundFile = files.find(f => f.startsWith(file));
        if (foundFile) {
          const path = join(fileRoot, './', foundFile);
          sendText(req, res)(readFileSync(path).toString('utf-8'));
        } else {
          send({ error: `file not found ${file}` });
        }
      } else {
        send(files);
      }
    }
  } catch (e) {
    console.error(e);
  }
}
