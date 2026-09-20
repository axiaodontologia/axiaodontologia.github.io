/**
 * Build para GitHub Pages.
 *
 * El sitio vive en /<repo>/ y no en la raíz del dominio, así que las rutas
 * absolutas (/assets/...) —que son las correctas para el sitio final en
 * Astro— se reescriben aquí a rutas relativas. El proyecto no se toca:
 * todo se genera en _site/.
 */
const fs = require('fs');
const path = require('path');

const raiz = path.join(__dirname, '..');
const salida = path.join(raiz, '_site');

function copiarDir(origen, destino) {
  fs.mkdirSync(destino, { recursive: true });
  for (const entrada of fs.readdirSync(origen, { withFileTypes: true })) {
    const o = path.join(origen, entrada.name);
    const d = path.join(destino, entrada.name);
    if (entrada.isDirectory()) copiarDir(o, d);
    else fs.copyFileSync(o, d);
  }
}

// Partir de cero para que no queden restos de un build anterior.
fs.rmSync(salida, { recursive: true, force: true });
fs.mkdirSync(salida, { recursive: true });

// 1. Assets: public/assets/... se sirve como assets/...
copiarDir(path.join(raiz, 'public', 'assets'), path.join(salida, 'assets'));

// 2. Archivos sueltos de la raíz del sitio.
for (const f of ['support.js', 'image-slot.js', '.image-slots.state.json']) {
  fs.copyFileSync(path.join(raiz, f), path.join(salida, f));
}
for (const f of ['sitemap.xml']) {
  const o = path.join(raiz, 'public', f);
  if (fs.existsSync(o)) fs.copyFileSync(o, path.join(salida, f));
}

// 3. index.html con las rutas reescritas a relativas.
let html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');
let n = 0;
html = html.replace(/(["'])\/assets\//g, (m, q) => { n++; return q + 'assets/'; });
let p = 0;
html = html.replace(/(["'])public\/assets\//g, (m, q) => { p++; return q + 'assets/'; });
// El tweak del video del hero guarda la ruta escapada dentro de data-props.
let v = 0;
html = html.replace(/&quot;\/assets\//g, () => { v++; return '&quot;assets/'; });
fs.writeFileSync(path.join(salida, 'index.html'), html);

// 4. Pages sirve los archivos tal cual (sin Jekyll), incluidos los que
//    empiezan por punto, como el sidecar de las imágenes.
fs.writeFileSync(path.join(salida, '.nojekyll'), '');

// 5. Esta copia es una vista previa: no debe indexarse ni competir en
//    Google con el sitio real de la clínica.
fs.writeFileSync(
  path.join(salida, 'robots.txt'),
  'User-agent: *\nDisallow: /\n'
);

console.log('rutas reescritas: ' + n + ' absolutas, ' + p + ' con public/, ' + v + ' en data-props');
console.log('build listo en _site/');
