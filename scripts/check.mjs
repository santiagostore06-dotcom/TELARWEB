// Validador de calidad de Telar. Falla (exit 1) si algo rompe las reglas editoriales.
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warns = [];

function load(dir) {
  return readdirSync(join(ROOT, dir)).filter((f) => f.endsWith('.md')).map((f) => ({ f: `${dir}/${f}`, raw: readFileSync(join(ROOT, dir, f), 'utf8') }));
}

const files = [...load('content/articulos'), ...load('content/paginas')];
for (const { f, raw } of files) {
  const isArticle = f.includes('articulos');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) { errors.push(`${f}: falta el front matter`); continue; }
  const meta = Object.fromEntries(m[1].split('\n').map((l) => { const i = l.indexOf(':'); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
  const body = m[2];
  if (!meta.title) errors.push(`${f}: falta title`);
  if (!meta.description) errors.push(`${f}: falta description`);
  else if (meta.description.length < 60 || meta.description.length > 200) warns.push(`${f}: description de ${meta.description.length} caracteres (ideal 60-200)`);
  if (/\b(TODO|TBD|XXX)\b|lorem ipsum/.test(raw) || /AAAA-MM-DD/.test(meta.date || '')) errors.push(`${f}: contiene un marcador pendiente`);
  if (/openforge18|santiagostore/i.test(raw)) errors.push(`${f}: contiene un correo del propietario; no publicar sin permiso`);
  if (!/^> /m.test(body)) errors.push(`${f}: falta el resumen inicial (línea que empieza con "> ")`);
  if (!/^## Preguntas frecuentes/m.test(body)) errors.push(`${f}: falta la sección "Preguntas frecuentes"`);
  const h3FaqCount = (body.split(/^## Preguntas frecuentes/m)[1] || '').split(/^## /m)[0].match(/^### /gm)?.length || 0;
  if (h3FaqCount < 3) warns.push(`${f}: solo ${h3FaqCount} preguntas frecuentes (ideal 3 o más)`);
  if (isArticle) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date || '')) errors.push(`${f}: date debe ser AAAA-MM-DD`);
    if (!['geo', 'pymes', 'herramientas', 'monetizacion'].includes(meta.pilar)) errors.push(`${f}: pilar debe ser geo, pymes, herramientas o monetizacion`);
    if (!/^## Fuentes/m.test(body)) errors.push(`${f}: falta la sección "Fuentes"`);
    const ext = (body.match(/\]\(https?:\/\/[^)]+\)/g) || []).length;
    if (ext < 3) errors.push(`${f}: menos de 3 enlaces externos (hay ${ext}); toda cifra necesita fuente`);
    const longQuote = body.split('\n').some((line) => [...line.matchAll(/"([^"]+?)"/g)].some((q) => q[1].split(/\s+/).length >= 15));
    if (longQuote) errors.push(`${f}: cita textual de 15 palabras o más; parafrasea`);
    if (meta.affiliate !== 'si' && /\]\(https?:[^)]*[?&](ref|aff|affiliate|via|partner|utm_source)=/i.test(body)) errors.push(`${f}: enlace con parámetros de afiliado sin "affiliate: si" en el front matter`);
    const words = body.split(/\s+/).length;
    if (words < 700) warns.push(`${f}: solo ${words} palabras (ideal 900 o más)`);
  }
}

warns.forEach((w) => console.log('AVISO ', w));
errors.forEach((e) => console.log('ERROR ', e));
console.log(`\n${files.length} archivos revisados: ${errors.length} errores, ${warns.length} avisos`);
process.exit(errors.length ? 1 : 0);
