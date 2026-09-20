/**
 * Build para GitHub Pages.
 *
 * El sitio vive en /<repo>/ y no en la raíz del dominio, así que las rutas
 * absolutas (/assets/...) —que son las correctas para el sitio final en
 * Astro— se reescriben aquí a rutas relativas. El proyecto no se toca:
 * todo se genera en _site/.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

// 2. Archivos sueltos de la raíz del sitio. image-slot.js y su sidecar no
//    viajan: en el build los slots ya son <img> normales (ver paso 3).
for (const f of ['support.js']) {
  fs.copyFileSync(path.join(raiz, f), path.join(salida, f));
}
for (const f of ['sitemap.xml']) {
  const o = path.join(raiz, 'public', f);
  if (fs.existsSync(o)) fs.copyFileSync(o, path.join(salida, f));
}

// 3. index.html con las rutas reescritas a relativas.
let html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');

// 3a. <image-slot> es un componente de edición: en el canvas muestra una
//     zona de "arrastra una imagen". En el sitio publicado eso parecería
//     que el visitante puede subir fotos, así que aquí se sustituye por
//     HTML plano: <img> si el slot tiene foto, y un bloque neutro si no.
const atributo = (tag, nombre) => {
  const m = tag.match(new RegExp(nombre + '="([^"]*)"'));
  return m ? m[1] : null;
};
let convertidos = 0;
let neutros = 0;
html = html.replace(/<image-slot\b([^>]*)><\/image-slot>/g, (tag) => {
  const src = atributo(tag, 'src');
  if (src) {
    convertidos++;
    const alt = atributo(tag, 'alt') || '';
    return '<img src="' + src + '" alt="' + alt + '" loading="lazy" decoding="async"' +
      ' style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">';
  }
  // Sin foto todavía (los casos antes/después). Tono neutro que funciona
  // igual sobre fondo claro y oscuro, heredando el color del texto.
  neutros++;
  return '<div aria-hidden="true" style="position:absolute;inset:0;display:grid;' +
    'place-items:center;background:rgba(128,128,128,.09);' +
    'border:1px solid rgba(128,128,128,.2)">' +
    '<span style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;' +
    'opacity:.45">Fotografía pendiente</span></div>';
});

// Sin slots, el componente y su sidecar ya no hacen falta en la página.
html = html.replace(/\s*<script src="\.\/image-slot\.js"><\/script>/, '');

// 3b. Si el destino no tiene backend (GitHub Pages), se marca para que el
//     formulario avise en vez de fingir que envió el mensaje. Con
//     --con-backend (Firebase + Cloud Function) no se marca.
const conBackend = process.argv.includes('--con-backend');
if (!conBackend) html = html.replace(
  '<script src="./support.js"></script>',
  '<script>window.AXIA_SIN_BACKEND = true;</script>\n<script src="./support.js"></script>'
);

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
console.log('image-slot -> ' + convertidos + ' imágenes, ' + neutros + ' bloques pendientes');
console.log('build listo en _site/');
