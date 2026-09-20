/**
 * Sirve _site/ bajo un subdirectorio, imitando cómo GitHub Pages publica
 * el sitio en https://usuario.github.io/<repo>/ — así se detectan las
 * rutas que solo funcionarían en la raíz del dominio.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', '_site');
const base = '/axia-odontologia-web';
const port = 4322;

const types = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.webp': 'image/webp', '.svg': 'image/svg+xml', '.mp4': 'video/mp4',
  '.xml': 'application/xml', '.txt': 'text/plain', '.ico': 'image/x-icon',
};

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === base) { res.writeHead(302, { Location: base + '/' }); res.end(); return; }
  if (!p.startsWith(base + '/')) { res.writeHead(404); res.end('fuera del base path: ' + p); return; }
  p = p.slice(base.length);
  if (p === '/') p = '/index.html';

  const file = path.join(root, p);
  if (!file.startsWith(root)) { res.writeHead(403); res.end(); return; }

  fs.stat(file, (err, stat) => {
    if (err || !stat.isFile()) { res.writeHead(404); res.end('404 ' + p); return; }
    const ext = path.extname(file).toLowerCase();
    const range = req.headers.range;
    if (range && types[ext] === 'video/mp4') {
      const [a, b] = range.replace(/bytes=/, '').split('-');
      const start = parseInt(a, 10);
      const end = b ? parseInt(b, 10) : stat.size - 1;
      if (isNaN(start) || start >= stat.size || end >= stat.size) {
        res.writeHead(416, { 'Content-Range': `bytes */${stat.size}` }); res.end(); return;
      }
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stat.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': end - start + 1,
        'Content-Type': types[ext],
      });
      fs.createReadStream(file, { start, end }).pipe(res);
      return;
    }
    res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
}).listen(port, () => console.log(`_site servido en http://localhost:${port}${base}/`));
