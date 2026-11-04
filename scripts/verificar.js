/**
 * Verificación del sitio generado.
 *
 * Comprueba sobre el HTML de salida —sin ejecutar JavaScript, igual que
 * haría un rastreador— que cada página tiene sus metadatos, un solo H1,
 * datos estructurados válidos y ningún enlace interno roto.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, '..', 'dist');

function paginas(dir, base = '') {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...paginas(p, base + '/' + e.name));
    else if (e.name.endsWith('.html')) {
      out.push({ archivo: p, ruta: e.name === 'index.html' ? base || '/' : base + '/' + e.name.replace('.html', '') });
    }
  }
  return out;
}

const etiqueta = (h, re) => { const m = h.match(re); return m ? m[1] : null; };

const lista = paginas(dist);
const rutasValidas = new Set(lista.map((p) => p.ruta));
let fallos = 0;
const filas = [];

for (const { archivo, ruta } of lista) {
  const h = fs.readFileSync(archivo, 'utf8');
  const problemas = [];

  const titulo = etiqueta(h, /<title>([^<]*)<\/title>/);
  const desc = etiqueta(h, /name="description"\s+content="([^"]*)"/);
  const canon = etiqueta(h, /rel="canonical"\s+href="([^"]*)"/);
  const og = etiqueta(h, /property="og:title"\s+content="([^"]*)"/);
  const ogImg = etiqueta(h, /property="og:image"\s+content="([^"]*)"/);
  const tw = etiqueta(h, /name="twitter:card"\s+content="([^"]*)"/);
  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  const fugas = (h.replace(/<[^>]*>/g, ' ').match(/\{\{[^}]*\}\}/g) || []).length;

  if (!titulo) problemas.push('sin title');
  if (!desc) problemas.push('sin description');
  if (!canon) problemas.push('sin canonical');
  if (!og) problemas.push('sin og:title');
  if (!ogImg) problemas.push('sin og:image');
  if (!tw) problemas.push('sin twitter:card');
  if (h1 !== 1) problemas.push(h1 + ' h1');
  if (fugas) problemas.push(fugas + ' fugas {{}}');

  // JSON-LD válido
  const ld = h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  let tipos = [];
  if (!ld) problemas.push('sin JSON-LD');
  else {
    try {
      const j = JSON.parse(ld[1]);
      tipos = (j['@graph'] || [j]).map((x) => x['@type']);
    } catch (e) {
      problemas.push('JSON-LD inválido');
    }
  }

  // Enlaces internos rotos
  const enlaces = [...h.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1].replace(/\/$/, '') || '/');
  const rotos = [...new Set(enlaces)].filter((e) => {
    // Si el enlace apunta a un archivo (tiene extensión), se comprueba en
    // disco; si no, debe corresponder a una ruta generada.
    if (/\.[a-z0-9]{2,5}$/i.test(e)) return !fs.existsSync(path.join(dist, e));
    return !rutasValidas.has(e);
  });
  if (rotos.length) problemas.push('enlaces rotos: ' + rotos.join(' '));

  if (problemas.length) fallos++;
  filas.push({ ruta, titulo: (titulo || '').slice(0, 34), tipos: tipos.join('+'), problemas });
}

console.log('RUTA'.padEnd(38) + 'H1'.padEnd(4) + 'SCHEMA'.padEnd(42) + 'ESTADO');
console.log('-'.repeat(110));
for (const f of filas) {
  console.log(
    f.ruta.padEnd(38) +
    '1'.padEnd(4) +
    f.tipos.padEnd(42) +
    (f.problemas.length ? '✗ ' + f.problemas.join(' | ') : 'ok')
  );
}
console.log('-'.repeat(110));
console.log(lista.length + ' páginas · ' + (lista.length - fallos) + ' correctas · ' + fallos + ' con problemas');
process.exit(fallos ? 1 : 0);
