const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

function safeFilePath(requestPath) {
  const relative = requestPath === '/' ? '/index.html' : requestPath;
  const rootCandidate = path.resolve(root, `.${relative}`);
  const publicCandidate = path.resolve(root, 'public', `.${relative}`);
  const isInside = (candidate, base) => candidate === base || candidate.startsWith(`${base}${path.sep}`);
  if (isInside(rootCandidate, root) && fs.existsSync(rootCandidate) && fs.statSync(rootCandidate).isFile()) return rootCandidate;
  if (isInside(publicCandidate, path.join(root, 'public')) && fs.existsSync(publicCandidate) && fs.statSync(publicCandidate).isFile()) return publicCandidate;
  return null;
}

const server = http.createServer((request, response) => {
  let requestPath;
  try {
    requestPath = decodeURIComponent((request.url || '/').split('?')[0]);
  } catch {
    requestPath = '';
  }
  const filePath = safeFilePath(requestPath);
  if (!filePath) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  response.writeHead(200, {
    'Content-Type': types[path.extname(filePath)] || 'application/octet-stream',
    'Cache-Control': 'no-cache',
  });
  fs.createReadStream(filePath).pipe(response);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`DDC Prime preview listening on 0.0.0.0:${port}`);
});
