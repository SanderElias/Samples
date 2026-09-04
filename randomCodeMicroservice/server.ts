import http from 'node:http';

import { buildDemoPatches, getDemoRows } from './demoDataSimulator.ts';
import {
  codeWordPermutations,
  effectiveCodeWordPermutations,
  generateCodeWord,
  uniqueCodeWordPermutations,
} from './codeWordGenerator.ts';

const port: number = Number(process.env.PORT ?? 3000);
const host = '0.0.0.0';

const server = http.createServer((req, res) => {
  const { method, url = '/' } = req;
  const requestUrl = new URL(url, `http://${req.headers.host ?? 'localhost'}`);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type,Authorization'
  );

  if (method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (requestUrl.pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        status: 'ok',
        service: 'random-code-microservice',
        timestamp: new Date().toISOString(),
      })
    );
    return;
  }

  if (requestUrl.pathname === '/generate') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(generateCodeWord(), null, 2));
    return;
  }

  if (requestUrl.pathname === '/api/demo/rows') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(getDemoRows(), null, 2));
    return;
  }

  if (requestUrl.pathname === '/api/demo/patches') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(buildDemoPatches(), null, 2));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify(
      {
        message: 'Hello from random-code-microservice',
        method,
        path: requestUrl.pathname,
        endpoints: ['/health', '/generate', '/api/demo/rows', '/api/demo/patches'],
        permutations: codeWordPermutations,
        uniquePermutations: uniqueCodeWordPermutations,
        effectivePermutations: effectiveCodeWordPermutations,
        status: 'ok',
        timestamp: new Date().toISOString(),
      },
      null,
      2
    )
  );
});

server.listen(port, host, () => {
  console.log(`Service listening on http://${host}:${port}`);
});

process.on('SIGINT', () => {
  console.log('Shutting down gracefully');
  server.close(() => process.exit(0));
});

process.on('SIGTERM', () => {
  console.log('Termination signal received');
  server.close(() => process.exit(0));
});
