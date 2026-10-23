// Generador estático de Telar. Sin dependencias.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync, cpSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'dist');
const host = process.env.SITE_HOST || process.env.VERCEL_PROJECT_PRODUCTION_URL || 'telar-blog.vercel.app';
const SITE = `https://${host.replace(/^https?:\/\//, '')}`;
const NAME = 'Telar';
const TAGLINE = 'IA y automatización explicadas en español, con fuentes';
const EMAIL = 'webtelar@gmail.com';
const TODAY = '2026-10-23';
const GSC = 'OVxaPMKjsAHfpzite3rk5vWS6J8smG6sz4LtKIlotyk';

// Cada tema es un hilo con su propio color, definido en style.css como --c-<clave>.
const PILARES = {
  geo: { n: 'GEO y búsqueda con IA', d: 'Cómo lograr que ChatGPT, Claude y Perplexity citen tu sitio: estructura, rastreadores y medición.' },
  pymes: { n: 'IA para pymes', d: 'Adopción, productividad y automatización de tareas con datos de América Latina.' },
  herramientas: { n: 'Herramientas y flujos', d: 'Reseñas con uso real, comparativas y plantillas de automatización.' },
  monetizacion: { n: 'Monetización de blogs', d: 'Afiliados, patrocinios y cómo construir ingresos sin perder credibilidad.' },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slug = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const fmtDate = (d) => new Date(d + 'T12:00:00Z').toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

// ---------- tejidos ----------
// Marca de tres hilos. Toma el color del tema por la variable --c.
function hiloM(k, cls = '') {
  return `<svg class="hilo-m${k ? ` p-${k}` : ''}${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" aria-hidden="true" fill="var(--c,var(--acento))"><rect x="2" y="5" width="20" height="3" rx="1.5"/><rect x="2" y="10.5" width="13" height="3" rx="1.5" opacity=".55"/><rect x="2" y="16" width="17" height="3" rx="1.5" opacity=".8"/></svg>`;
}

// Telar en marcha: la urdimbre fija y las pasadas de trama que se tejen en bucle.
function telar() {
  const hilos = Object.keys(PILARES);
  let urd = '';
  for (let x = 6; x <= 414; x += 12) urd += `<path d="M${x} 4V276"/>`;
  const anchos = [408, 366, 398, 342, 408, 380, 356, 408, 372, 402, 338, 390, 408, 360];
  let pas = '';
  for (let i = 0; i < 14; i++) {
    const y = 12 + i * 19;
    const k = i % 2 === 0 ? hilos[(i / 2) % 4] : null;
    const col = k ? `var(--c-${k})` : 'rgba(234,238,249,.18)';
    pas += `<rect class="pasada" style="--i:${i}" x="6" y="${y}" width="${anchos[i]}" height="7" rx="3.5" fill="${col}"/>`;
  }
  return `<svg class="telar" viewBox="0 0 420 280" role="img" aria-label="Un telar en marcha: hilos verticales fijos sobre los que se tejen pasadas de color, una tras otra"><g class="urdimbre" fill="none">${urd}</g>${pas}</svg>`;
}

function inline(s) {
  return esc(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, u) => (/^(https?:|mailto:)/.test(u) ? `<a href="${u}" rel="noopener">${t}</a>` : `<a href="${u}">${t}</a>`));
}

function parseFront(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const meta = {};
  m[1].split('\n').forEach((l) => { const i = l.indexOf(':'); meta[l.slice(0, i).trim()] = l.slice(i + 1).trim(); });
  return { meta, body: m[2].trim() };
}

let tbl = null;
function render(body) {
  const lines = body.split('\n');
  let html = '', list = null, para = [], faq = [], terms = [], inFaq = false, inGlos = false, curQ = null, curA = [], heads = [];
  const flushP = () => { if (para.length) { const t = para.join(' '); html += `<p>${inline(t)}</p>\n`; if (curQ) curA.push(t); para = []; } };
  const flushL = () => { if (list) { html += `<${list.t}>${list.i.map((x) => `<li>${inline(x)}</li>`).join('')}</${list.t}>\n`; if (curQ) curA.push(list.i.join(' ')); list = null; } };
  const flushQ = () => { if (curQ) { (inFaq ? faq : terms).push({ q: curQ, a: curA.join(' '), id: slug(curQ) }); curQ = null; curA = []; } };
  const flushT = () => { if (tbl) { html += table(tbl); tbl = null; } };
  for (const line of lines) {
    if (!/^\|/.test(line)) flushT();
    if (/^## /.test(line)) { flushP(); flushL(); flushQ(); const t = line.slice(3); inFaq = /^Preguntas frecuentes/i.test(t); inGlos = /^Términos/i.test(t); heads.push({ t, id: slug(t) }); html += `<h2 id="${slug(t)}">${inline(t)}</h2>\n`; continue; }
    if (/^### /.test(line)) { flushP(); flushL(); flushQ(); const t = line.slice(4); if (inFaq || inGlos) curQ = t; html += `<h3${inFaq || inGlos ? ` id="${slug(t)}"` : ''}>${inline(t)}</h3>\n`; continue; }
    if (/^> /.test(line)) { flushP(); flushL(); html += `<blockquote class="resumen">${inline(line.slice(2))}</blockquote>\n`; continue; }
    if (/^- /.test(line)) { flushP(); if (!list || list.t !== 'ul') { flushL(); list = { t: 'ul', i: [] }; } list.i.push(line.slice(2)); continue; }
    if (/^\d+\. /.test(line)) { flushP(); if (!list || list.t !== 'ol') { flushL(); list = { t: 'ol', i: [] }; } list.i.push(line.replace(/^\d+\. /, '')); continue; }
    if (/^\|/.test(line)) { flushP(); flushL(); (tbl ||= []).push(line); continue; }
    if (line.trim() === '') { flushP(); flushL(); continue; }
    para.push(line.trim());
  }
  flushP(); flushL(); flushQ(); flushT();
  return { html, faq, terms, heads };
}

function table(rows) {
  const cells = (r) => r.split('|').slice(1, -1).map((c) => c.trim());
  const [h, , ...b] = rows;
  return `<div class="tabla"><table><thead><tr>${cells(h).map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${b.map((r) => `<tr>${cells(r).map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>\n`;
}

const orgLd = { '@type': 'Organization', '@id': `${SITE}/#org`, name: NAME, url: SITE, description: TAGLINE, email: EMAIL, contactPoint: { '@type': 'ContactPoint', email: EMAIL, contactType: 'editorial y colaboraciones', availableLanguage: 'es' } };
const faqLd = (faq) => (faq.length ? [{ '@type': 'FAQPage', mainEntity: faq.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) }] : []);

function layout({ title, desc, path, body, ld = [], type = 'website' }) {
  const url = SITE + path;
  const graph = { '@context': 'https://schema.org', '@graph': [orgLd, { '@type': 'WebSite', '@id': `${SITE}/#site`, url: SITE, name: NAME, inLanguage: 'es', publisher: { '@id': `${SITE}/#org` } }, ...ld] };
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}${path === '/' ? '' : ' | ' + NAME}</title>
<meta name="description" content="${esc(desc)}">
<meta name="google-site-verification" content="${GSC}">
<meta name="theme-color" content="#0A0E1A">
<link rel="canonical" href="${url}">
<link rel="alternate" type="application/rss+xml" title="${NAME}" href="${SITE}/rss.xml">
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="${NAME}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="es_LA">
<meta name="twitter:card" content="summary">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='6' fill='%230A0E1A'/%3E%3Cg fill='%237B8CFF'%3E%3Crect x='3' y='6' width='18' height='2.6' rx='1.3'/%3E%3Crect x='3' y='10.7' width='11' height='2.6' rx='1.3' opacity='.55'/%3E%3Crect x='3' y='15.4' width='15' height='2.6' rx='1.3' opacity='.8'/%3E%3C/g%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..600&family=Inter:opsz,wght@14..32,400..600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/style.css">
<script type="application/ld+json">${JSON.stringify(graph)}</script>
</head>
<body>
<a class="saltar" href="#contenido">Saltar al contenido</a>
<header class="cab">
  <div class="cab-in">
    <a class="marca" href="/">${hiloM('')}<span>${NAME}</span></a>
    <nav aria-label="Principal"><a href="/blog/">Artículos</a><a href="/temas/">Temas</a><a href="/recursos/">Recursos</a><a href="/glosario/">Glosario</a><a href="/sobre-telar/">Sobre Telar</a><a class="nav-cta" href="/contacto/">Contacto</a></nav>
  </div>
</header>
<main id="contenido">
${body}
</main>
<footer class="pie">
  <div class="pie-in">
    <div class="pie-grid">
      <div class="pie-id">
        <p class="pie-marca">${hiloM('')}<span>${NAME}</span></p>
        <p>${TAGLINE}. Cuatro hilos: GEO, pymes, herramientas y monetización.</p>
        <p><a href="mailto:${EMAIL}">${EMAIL}</a></p>
      </div>
      <div><p class="pie-t">Leer</p><ul><li><a href="/blog/">Artículos</a></li><li><a href="/temas/">Temas</a></li><li><a href="/recursos/">Recursos</a></li><li><a href="/glosario/">Glosario</a></li></ul></div>
      <div><p class="pie-t">Telar</p><ul><li><a href="/sobre-telar/">Sobre Telar</a></li><li><a href="/transparencia/">Transparencia</a></li><li><a href="/patrocina/">Patrocina</a></li><li><a href="/contacto/">Contacto</a></li></ul></div>
      <div><p class="pie-t">Seguir</p><ul><li><a href="/rss.xml">RSS</a></li><li><a href="/sitemap.xml">Mapa del sitio</a></li><li><a href="/llms.txt">llms.txt</a></li></ul></div>
    </div>
    <p class="chico">Algunos enlaces pueden ser de afiliado: si compras, Telar puede recibir una comisión sin costo extra para ti. Lee la <a href="/transparencia/">política de transparencia</a>. Contenido elaborado con ayuda de IA y supervisión humana.</p>
  </div>
</footer>
</body>
</html>`;
}

// ---------- artículos ----------
const dir = join(ROOT, 'content', 'articulos');
const articles = readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => {
  const { meta, body } = parseFront(readFileSync(join(dir, f), 'utf8'));
  const { html, faq, heads } = render(body);
  const words = body.split(/\s+/).length;
  return { ...meta, pilar: meta.pilar && PILARES[meta.pilar] ? meta.pilar : 'geo', slug: f.replace(/\.md$/, ''), html, faq, heads, minutes: Math.max(3, Math.round(words / 200)) };
}).sort((a, b) => b.date.localeCompare(a.date));

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync(join(ROOT, 'static'), OUT, { recursive: true });
const put = (p, c) => { const f = join(OUT, p); mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, c); };

const chip = (k) => `<a class="chip p-${k}" href="/temas/${k}/">${hiloM(k)}<span>${esc(PILARES[k].n)}</span></a>`;
const card = (a, big = false) => {
  // En la tarjeta grande mostramos las preguntas que resuelve, con enlace directo a cada respuesta.
  const qs = big && a.faq.length
    ? `<ul class="mini-faq">${a.faq.slice(0, 4).map((q) => `<li><a href="/blog/${a.slug}/#${q.id}">${esc(q.q)}</a></li>`).join('')}</ul>`
    : '';
  return `<article class="tarjeta p-${a.pilar}${big ? ' grande' : ''}"><p class="meta">${chip(a.pilar)}<span><time datetime="${a.date}">${fmtDate(a.date)}</time></span><span>${a.minutes} min</span></p><h3><a href="/blog/${a.slug}/">${esc(a.title)}</a></h3><p class="res">${esc(a.description)}</p>${qs}<p class="leer"><a href="/blog/${a.slug}/">Leer la guía</a></p></article>`;
};

for (const a of articles) {
  const ld = [
    { '@type': 'Article', '@id': `${SITE}/blog/${a.slug}/#art`, headline: a.title, description: a.description, articleSection: PILARES[a.pilar].n, datePublished: a.date, dateModified: a.updated || a.date, inLanguage: 'es', author: { '@id': `${SITE}/#org` }, publisher: { '@id': `${SITE}/#org` }, mainEntityOfPage: `${SITE}/blog/${a.slug}/` },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE + '/' }, { '@type': 'ListItem', position: 2, name: 'Artículos', item: SITE + '/blog/' }, { '@type': 'ListItem', position: 3, name: a.title, item: `${SITE}/blog/${a.slug}/` }] },
    ...faqLd(a.faq),
  ];
  const rel = [...articles.filter((x) => x.slug !== a.slug && x.pilar === a.pilar), ...articles.filter((x) => x.slug !== a.slug && x.pilar !== a.pilar)].slice(0, 3);
  const toc = a.heads.length ? `<aside class="toc" aria-label="En este artículo"><p class="toc-t">En este artículo</p><ol>${a.heads.map((h) => `<li><a href="#${h.id}">${esc(h.t)}</a></li>`).join('')}</ol></aside>` : '';
  put(`blog/${a.slug}/index.html`, layout({
    title: a.title, desc: a.description, path: `/blog/${a.slug}/`, type: 'article', ld,
    body: `<div class="art-wrap p-${a.pilar}"><article class="art"><header><p class="meta">${chip(a.pilar)}<span><time datetime="${a.date}">${fmtDate(a.date)}</time></span><span>${a.minutes} min de lectura</span>${a.updated ? `<span>Actualizado ${fmtDate(a.updated)}</span>` : ''}</p><h1>${esc(a.title)}</h1><p class="firma">Por el equipo de Telar, con ayuda de IA y supervisión humana. <a href="/transparencia/">Cómo trabajamos</a></p></header><div class="cuerpo">${a.html}</div>${a.affiliate === 'si' ? '<p class="aviso">Este artículo menciona herramientas con programa de afiliados. Aun así, el criterio es editorial. Detalles en <a href="/transparencia/">transparencia</a>.</p>' : ''}<p class="aviso">¿Viste un error o tienes un dato mejor? Escribe a <a href="mailto:${EMAIL}">${EMAIL}</a> y lo corregimos con fecha visible.</p></article>${toc}</div><section class="mas"><h2>Sigue leyendo</h2><div class="rejilla">${rel.map((x) => card(x)).join('')}</div></section>`,
  }));
}

put('blog/index.html', layout({ title: 'Artículos sobre IA y automatización', desc: 'Guías en español sobre IA, automatización y búsqueda con chatbots, con datos y fuentes verificables.', path: '/blog/', body: `<section class="lista"><h1>Artículos</h1><p class="bajada">Cada guía abre con una respuesta corta, cita sus fuentes y termina con preguntas frecuentes.</p><div class="rejilla">${articles.map((a) => card(a)).join('')}</div></section>`, ld: [{ '@type': 'CollectionPage', name: 'Artículos', url: SITE + '/blog/' }] }));

// temas
const tile = (k) => { const n = articles.filter((a) => a.pilar === k).length; return `<a class="tema p-${k}" href="/temas/${k}/">${hiloM(k)}<h3>${esc(PILARES[k].n)}</h3><p>${esc(PILARES[k].d)}</p><p class="cuenta">${n ? `${n} ${n === 1 ? 'guía' : 'guías'}` : 'En preparación'}</p></a>`; };
put('temas/index.html', layout({ title: 'Temas', desc: 'Los cuatro temas de Telar: GEO, IA para pymes, herramientas y flujos, y monetización de blogs.', path: '/temas/', body: `<section class="lista"><h1>Temas</h1><p class="bajada">Telar se ordena en cuatro hilos, y cada uno se teje distinto. Cada tema tiene una guía pilar y artículos que la complementan.</p><div class="temas">${Object.keys(PILARES).map(tile).join('')}</div></section>` }));
for (const k of Object.keys(PILARES)) {
  const list = articles.filter((a) => a.pilar === k);
  put(`temas/${k}/index.html`, layout({ title: PILARES[k].n, desc: PILARES[k].d, path: `/temas/${k}/`, ld: [{ '@type': 'CollectionPage', name: PILARES[k].n, url: `${SITE}/temas/${k}/` }], body: `<section class="lista p-${k}"><p class="meta"><a href="/temas/">Temas</a></p><h1>${esc(PILARES[k].n)}</h1><p class="bajada">${esc(PILARES[k].d)}</p>${list.length ? `<div class="rejilla">${list.map((a) => card(a)).join('')}</div>` : '<p class="vacio">Todavía no hay guías en este tema. La primera está en el calendario editorial; mientras tanto, mira los <a href="/blog/">artículos publicados</a>.</p>'}</section>` }));
}

// ---------- portada ----------
const first = articles.find((a) => a.destacado === 'si') || articles[0];
const rest = articles.filter((a) => a !== first);
const principios = [
  ['Cada dato, con su fuente', 'Enlazamos el estudio original. Si la fuente tiene interés comercial, lo decimos.'],
  ['Los límites, a la vista', 'Si una muestra es pequeña o una cifra es global, lo escribimos junto al dato.'],
  ['Transparencia sobre la IA y el dinero', 'Decimos cómo se produce el contenido y marcamos todo enlace de afiliado o patrocinio.'],
];
const glosa = [['GEO', 'Optimización para que los motores de IA citen tu contenido.'], ['llms.txt', 'Propuesta de archivo con un resumen del sitio para modelos de lenguaje.'], ['Comisión recurrente', 'Pago periódico mientras el cliente referido siga suscrito.']];
// Índice de preguntas reales: ayuda al lector y a los motores de IA a encontrar la respuesta exacta.
const preguntas = articles.flatMap((a) => a.faq.map((q) => ({ q: q.q, href: `/blog/${a.slug}/#${q.id}`, pilar: a.pilar }))).slice(0, 10);
put('index.html', layout({
  title: `${NAME}: ${TAGLINE}`, desc: 'Guías prácticas en español sobre inteligencia artificial, automatización y cómo hacer que los chatbots citen tu sitio. Cada dato lleva su fuente.', path: '/',
  ld: [{ '@type': 'ItemList', name: 'Guías de Telar', itemListElement: articles.map((a, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/blog/${a.slug}/`, name: a.title })) }],
  body: `<section class="hero"><div><p class="insignia"><span class="pt" aria-hidden="true"></span>${articles.length} guías publicadas, todas con sus fuentes</p><h1>La IA, sin humo y en español.</h1><p class="bajada">Guías para pymes, creadores y equipos de América Latina que quieren automatizar su trabajo y aparecer en las respuestas de ChatGPT, Claude y Perplexity. Cada dato lleva su fuente y cada recomendación dice qué no sabemos.</p><p class="acciones"><a class="boton" href="/blog/${first.slug}/">Lee la guía destacada</a><a class="boton sec" href="/temas/">Explora los temas</a></p></div><div class="marco">${telar()}</div></section>
<section class="bloque"><div class="cabecera-s"><h2>Empieza aquí</h2><p class="sub-s">Las guías con las que conviene arrancar si vienes llegando.</p></div><div class="destacados">${card(first, true)}<div class="cola">${rest.slice(0, 2).map((a) => card(a)).join('')}</div></div><p class="mas-link"><a href="/blog/">Ver todos los artículos</a></p></section>
<section class="bloque"><div class="cabecera-s"><h2>Cuatro hilos, un mismo tejido</h2><p class="sub-s">Todo lo que publicamos entra en uno de estos cuatro temas.</p></div><div class="temas">${Object.keys(PILARES).map(tile).join('')}</div></section>
<section class="bloque"><div class="cabecera-s"><h2>Preguntas que respondemos</h2><p class="sub-s">Cada enlace va directo a la respuesta, no al inicio del artículo.</p></div><ul class="preguntas">${preguntas.map((p) => `<li class="p-${p.pilar}"><a href="${p.href}"><span class="punto" aria-hidden="true"></span><span>${esc(p.q)}</span></a></li>`).join('')}</ul></section>
<section class="bloque"><div class="cabecera-s"><h2>Cómo trabajamos</h2><p class="sub-s">Tres reglas que no se negocian. <a href="/transparencia/">Lee la política completa</a>.</p></div><div class="tres">${principios.map(([t, d]) => `<div class="principio"><span class="barra" aria-hidden="true"></span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div></section>
<section class="bloque"><div class="dos"><div class="panel"><h2>Lista de verificación GEO</h2><p>Una lista práctica para revisar si tu blog está listo para ser citado por chatbots: acceso de rastreadores, estructura del contenido, datos estructurados y medición semanal.</p><p class="acciones"><a class="boton" href="/recursos/">Ver los recursos</a></p></div><div class="panel"><h2>Glosario rápido</h2><dl class="glosa">${glosa.map(([t, d]) => `<dt>${t}</dt><dd>${d}</dd>`).join('')}</dl><p class="acciones"><a class="boton sec" href="/glosario/">Ver el glosario completo</a></p></div></div></section>
<section class="franja"><div><h2>¿Tu marca encaja con IA y automatización en español?</h2><p>Aceptamos reseñas y guías patrocinadas, siempre marcadas y sin que el patrocinador apruebe las conclusiones.</p></div><p class="acciones"><a class="boton" href="/patrocina/">Ver cómo colaborar</a><a class="boton sec" href="mailto:${EMAIL}">Escribir a Telar</a></p></section>`,
}));

// ---------- páginas fijas ----------
const pages = readdirSync(join(ROOT, 'content', 'paginas')).filter((f) => f.endsWith('.md'));
const pageList = [];
for (const f of pages) {
  const { meta, body } = parseFront(readFileSync(join(ROOT, 'content', 'paginas', f), 'utf8'));
  const { html, faq, terms } = render(body);
  const s = f.replace(/\.md$/, '');
  pageList.push(s);
  const ld = [...faqLd(faq)];
  if (s === 'glosario') ld.push({ '@type': 'DefinedTermSet', name: 'Glosario de Telar', url: `${SITE}/glosario/`, hasDefinedTerm: terms.map((t) => ({ '@type': 'DefinedTerm', name: t.q, description: t.a })) });
  put(`${s}/index.html`, layout({ title: meta.title, desc: meta.description, path: `/${s}/`, ld, body: `<article class="art solo"><header><h1>${esc(meta.title)}</h1></header><div class="cuerpo">${html}</div></article>` }));
}

// ---------- SEO e IA ----------
put('robots.txt', `User-agent: *
Allow: /

# Rastreadores de búsqueda y respuesta de IA: permitidos para que Telar pueda ser citado
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: GPTBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: Claude-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: ${SITE}/sitemap.xml
`);
const urls = ['/', '/blog/', '/temas/', ...Object.keys(PILARES).map((k) => `/temas/${k}/`), ...pageList.map((p) => `/${p}/`), ...articles.map((a) => `/blog/${a.slug}/`)];
put('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `<url><loc>${SITE}${u}</loc><lastmod>${TODAY}</lastmod></url>`).join('\n')}\n</urlset>\n`);
put('rss.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>${NAME}</title><link>${SITE}</link><description>${esc(TAGLINE)}</description><language>es</language>\n${articles.map((a) => `<item><title>${esc(a.title)}</title><link>${SITE}/blog/${a.slug}/</link><guid>${SITE}/blog/${a.slug}/</guid><pubDate>${new Date(a.date + 'T12:00:00Z').toUTCString()}</pubDate><description>${esc(a.description)}</description></item>`).join('\n')}\n</channel></rss>\n`);
put('llms.txt', `# ${NAME}\n\n> ${TAGLINE}. Blog en español para LATAM. Cada dato cita su fuente.\n\n## Artículos\n\n${articles.map((a) => `- [${a.title}](${SITE}/blog/${a.slug}/): ${a.description}`).join('\n')}\n\n## Temas\n\n${Object.keys(PILARES).map((k) => `- [${PILARES[k].n}](${SITE}/temas/${k}/): ${PILARES[k].d}`).join('\n')}\n\n## Preguntas frecuentes respondidas\n\n${preguntas.map((p) => `- [${p.q}](${SITE}${p.href})`).join('\n')}\n\n## Información\n\n- [Recursos](${SITE}/recursos/): lista de verificación GEO\n- [Glosario](${SITE}/glosario/): términos de IA, GEO y afiliados\n- [Sobre Telar](${SITE}/sobre-telar/): quién publica y cómo se trabaja\n- [Transparencia](${SITE}/transparencia/): afiliados, patrocinios y política editorial\n- [Patrocina](${SITE}/patrocina/): formatos de colaboración\n- [Contacto](${SITE}/contacto/): ${EMAIL}\n`);
put('404.html', layout({ title: 'Página no encontrada', desc: 'La página que buscas no existe.', path: '/404', body: `<section class="art solo"><h1>No encontramos esa página</h1><div class="cuerpo"><p>Puede que el enlace haya cambiado. Vuelve al <a href="/">inicio</a>, mira los <a href="/temas/">temas</a> o todos los <a href="/blog/">artículos</a>.</p></div></section>` }));
console.log(`OK: ${articles.length} artículos, ${pageList.length} páginas, ${preguntas.length} preguntas indexadas, sitio ${SITE}`);
