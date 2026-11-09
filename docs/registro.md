# Registro de cambios

| Fecha | Cambio | Estado |
|---|---|---|
| 2026-10-22 | Lanzamiento v1: 4 artículos, 3 páginas, robots.txt, sitemap, RSS, llms.txt | Desplegado en Vercel (producción); protección de Vercel pendiente de desactivar por el propietario |
| 2026-10-22 | Archivos de operación, validador, calendario editorial y datos de medición | Local |
| 2026-10-22 | Rediseño v2: 6 páginas fijas, temas, recursos, glosario, contacto; correo público webtelar@gmail.com | Desplegado en Vercel (producción, READY) |
| 2026-10-23 | Código fuente completo copiado al Proyecto BLOG (carpeta telar/) y tareas programadas reescritas para restaurarlo | Hecho |
| 2026-10-23 | Verificación de Google Search Console añadida al <head> de todas las páginas | Desplegado |
| 2026-10-23 | Rediseño v3 premium: Bodoni Moda + Source Serif 4, paleta de tintes (añil, verdigris, achiote, cochinilla), muestras de tejido por tema, sección "Preguntas que respondemos" con anclas y ItemList JSON-LD | Desplegado en producción (READY) |
| 2026-10-23 | Rediseño v4: interfaz oscura tipo producto, Instrument Sans + Inter, telar animado en la portada, tarjetas con glow, lista de preguntas dentro de la guía destacada | Desplegado en producción (READY) |
| 2026-10-23 | Artículo nuevo: asistentes de IA para atención al cliente (pilar herramientas), con 4 fuentes verificadas | Publicado |
| 2026-10-23 | Analítica de Vercel activada en el sitio y declarada en la página de transparencia | Publicado |
| 2026-10-24 | Publicación automática autorizada. Tarea de artículos reconfigurada: lunes, miércoles y viernes, eligiendo tema desde las tendencias del momento | Hecho |
| 2026-10-26 | Artículo de Claude Duet publicado vía git push tras adjuntar el repo a la sesión (add_repo). Datos clave verificados contra fuentes | Publicado |
| 2026-10-30 | Artículo de Google AI Mode (escrito el 28 de octubre por la tarea programada) publicado desde una sesión interactiva. Cifras reverificadas contra Google/PPC Land/Ahrefs/Search Central/SEJ; corregida una frase sobre Ahrefs que no se sostenía (no advierte que mide correlación) | Publicado |
| 2026-10-30 | Causa de los artículos sin publicar: las sesiones programadas sin supervisión no tienen `add_repo` (push denegado) y el despliegue directo lo bloquea el control de permisos. Sin despliegues desde el 26 de octubre | Pendiente de decisión del propietario |
| 2026-10-31 | Prueba de la acción de publicación: rama claude/ fusionada automáticamente en main | Prueba |
| 2026-10-31 | Prueba: una sesión programada sube una rama claude/ y la acción la fusiona en main | Prueba |
| 2026-11-06 | Oblivion (OpenMausBot) toma la administración del proyecto por pedido del propietario. Primera medición GEO real (línea base): las 25 preguntas de data/geo-queries.csv buscadas en la web; tasa de citación 0 % (ninguna cita a telar-blog.vercel.app). Coherente con 0-4 impresiones/día y 0 clics en Search Console desde el 25 de octubre | Medido |
| 2026-11-06 | Alerta: no hay commits nuevos en main desde el 31 de octubre (solo pruebas de la acción); no se publicó ningún artículo los lunes 2, miércoles 4 ni viernes 6 de noviembre a pesar del ritmo lunes/miércoles/viernes autorizado. La tarea programada de contenido de claude.ai parece detenida; requiere revisión del propietario o de esa sesión, no es algo que Oblivion pueda reactivar | Pendiente de revisión del propietario |
| 2026-11-06 | Kit de medios: cifras dinámicas limitadas al catálogo; añadidos piloto medible, métricas con fecha/fuente y reglas de independencia editorial. Quitadas promesas de tarifas/alcance sin datos. Metadatos sociales y avisos comerciales añadidos | Publicado en producción (READY, commit edf11c7) |
| 2026-11-08 | Dominio propio conectado en Vercel: `blogtelar.lat` verificado y redirige con 308 a `www.blogtelar.lat`, también verificado. Se ajusta el host canónico del generador a `https://www.blogtelar.lat`; falta añadir/verificar la propiedad en Search Console y enviar el sitemap del dominio nuevo. | Confirmado en Vercel; Search Console aún solo lista la propiedad anterior |
| 2026-11-09 | Medición GEO semanal: 0 de 25 preguntas citan a Telar (0 %, igual que la línea base del 6 nov; dominios buscados: www.blogtelar.lat y telar-blog.vercel.app). Search Console (26 oct-9 nov, propiedad telar-blog.vercel.app): 24 impresiones, 0 clics; la propiedad `sc-domain:blogtelar.lat` existe pero sigue sin verificar. Despliegues de producción READY (último: 321761b). Pipeline: último artículo en main el 30 oct (10 días); la tarea de artículos de OpenMausBot hizo su primera ejecución hoy. Posicionamiento: meta descripción de robots.txt/llms.txt con nombres de rastreadores y enlace interno del artículo GEO al de Google AI Mode | Medido; mejoras publicadas |
