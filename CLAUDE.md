# Telar: instrucciones del proyecto (leer primero)

Telar es un blog estático en español (LATAM) sobre IA y automatización. Meta: que ChatGPT, Claude y Perplexity lo citen, y monetizarlo con afiliados y patrocinios. Estrategia completa: `docs/ESTRATEGIA.md`. Operación: `docs/OPERACIONES.md`.

## Reglas que no se rompen

1. **Toda cifra lleva fuente enlazada.** Si no puedes verificarla con una búsqueda, no la escribas. Si la fuente tiene interés comercial, dilo.
2. **Nada inventado:** ni cifras de audiencia, ni tarifas, ni pruebas de herramientas que no se usaron, ni citas.
3. **Citas textuales:** máximo una por fuente y menos de 15 palabras; el resto se parafrasea. No copiar artículos.
4. **Enlaces comerciales:** marcar afiliados y patrocinios con aviso visible y `rel="sponsored"`. Hoy no hay afiliados activos; no escribir lo contrario.
5. **No publicar datos personales del propietario.** El único correo público autorizado es `webtelar@gmail.com` (contacto del sitio). Nunca publicar openforge18@gmail.com ni santiagostore.06@gmail.com.
6. **Sin compras, envíos de mensajes a marcas, formularios de afiliados ni cambios de seguridad** sin aprobación del propietario en el chat.
7. **No cambiar la protección de Vercel:** la desactiva el propietario.
8. **Si un dato no se puede verificar, no se publica.** Ante la duda, el artículo queda en borrador y se avisa. La publicación es automática, así que esta regla es la única red de seguridad.

## Estructura

- `content/articulos/*.md`: artículos (front matter: title, description, date, opcional updated, affiliate: si).
- `content/paginas/*.md`: páginas fijas.
- `static/style.css`: estilos. `build.mjs`: generador. `dist/`: salida (no editar).
- `scripts/check.mjs`: validador. `data/`: medición GEO.
- `docs/`: estrategia, operación, agentes, calendario.

## Flujo de un artículo

1. Elegir tema de `docs/calendario-editorial.md`.
2. Buscar fuentes actuales (varias búsquedas) y anotar enlaces.
3. Escribir con la plantilla de `docs/plantilla-articulo.md`.
4. `npm run check` y `npm run build` deben pasar.
5. Registrar el tema como hecho en el calendario.
6. Desplegar según `docs/OPERACIONES.md` solo si el propietario lo aprobó.

## Estilo

Español neutro, oraciones cortas, voz activa, sentence case, sin relleno. Primero la respuesta, después la explicación. Los límites y lo que no se sabe van a la vista.

## Dónde viven los archivos

Repositorio: `santiagostore06-dotcom/TELARWEB` en GitHub. Respaldo en el Proyecto BLOG de claude.ai, carpeta `telar/` (ver `docs/RESTAURAR.md`).

Las tareas programadas corren en sesiones nuevas sin archivos locales: deben clonar el repositorio o restaurar desde el Proyecto, y guardar los cambios de vuelta en ambos.

## Despliegue

Vercel, proyecto `telar-blog`, cuenta santiagostore.06@gmail.com. Pasos y limitaciones en `docs/OPERACIONES.md`.

**Publicación automática desde el 23 de octubre de 2026,** autorizada por el propietario en el chat. Los agentes publican sin pedir permiso y después informan. Sigue vigente la regla 8: lo que no se puede verificar no sale.

**Tareas programadas:** no pueden subir a `main`. Suben a una rama `claude/...` y la acción `publicar-articulos.yml` valida y fusiona (ver `docs/OPERACIONES.md`). Una tarea solo puede dar un artículo por publicado cuando ve el despliegue de producción con su commit en estado READY.
