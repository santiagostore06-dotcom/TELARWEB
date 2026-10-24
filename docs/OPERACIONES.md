# Operación de Telar

## Dónde vive el código

Repositorio: `santiagostore06-dotcom/TELARWEB` (GitHub, público).
Copia de respaldo: Proyecto BLOG de claude.ai, carpeta `telar/` (ver `docs/RESTAURAR.md`).

## Comandos

```bash
npm run check    # valida reglas editoriales (debe dar 0 errores)
npm run build    # genera dist/ y muestra el conteo
npm run verify   # ambos
```

## Cómo desplegar

**Camino normal (integración activa):** el proyecto `telar-blog` de Vercel está conectado a `santiagostore06-dotcom/TELARWEB`, rama `main`. Basta con hacer `git push origin main`. Vercel ejecuta `node build.mjs`, publica `dist/` y crea un despliegue de producción con el commit como origen.

Pasos:
1. `npm run verify` sin errores.
2. `git add -A`, commit descriptivo en español y `git push origin main`.
3. Confirmar con Vercel que existe un despliegue de producción para ese commit (`list_deployments` con `projectId` `prj_FSzeSqiKhYemN5XojiAvGoSd7MqN`, comparando `meta.githubCommitSha`) y que su estado sea `READY`.
4. Anotar el cambio en `docs/registro.md`.

**Respaldo (solo si el push falla o Vercel no crea el despliegue en unos 5 minutos):** desplegar con `create_deployment` pasando TODOS los archivos fuente en línea (`vercel.json`, `package.json`, `build.mjs`, `scripts/check.mjs`, `static/style.css`, `content/**`). Target `production`, proyecto `telar-blog`. Si falta uno, el build falla con `exited with 1`. Anotar en `docs/registro.md` que se usó el respaldo.

Limitaciones conocidas:
- La protección de Vercel (Deployment Protection) está desactivada. No tocarla.
- Si la conexión con GitHub deja de funcionar, la causa suele ser la integración de la cuenta de Vercel. Revisar Settings → Git en el proyecto.

## Política de aprobación

- **Borradores y medición:** los agentes trabajan solos y dejan todo en `content/` y `data/`.
- **Publicar (desplegar):** automático.
  - Estado actual: **publicación automática**, autorizada por el propietario el 23 de octubre de 2026. Los agentes despliegan y después informan.
  - La red de seguridad es la verificación previa: si una cifra clave no se confirma abriendo su fuente, o si el artículo no reúne 3 fuentes sólidas, queda en borrador y se avisa.
  - La revisión mensual comprueba los artículos ya publicados contra sus fuentes y corrige lo que haga falta.
- **Contactos a marcas, compras, formularios de afiliados:** siempre con aprobación.

## Calidad antes de publicar

- `npm run check` sin errores; revisar los avisos.
- Cada cifra verificada contra su fuente (abrir la fuente, no confiar en la memoria).
- Mínimo 3 enlaces de fuentes por artículo, 3 preguntas frecuentes, respuesta corta arriba.
- Sin afirmaciones de uso de una herramienta que no se probó.

## Ritmo de publicación

Un artículo nuevo los lunes, miércoles y viernes. La tarea programada analiza primero las tendencias de IA del momento con varias búsquedas y elige el tema a partir de ahí, cruzándolo con el calendario editorial para no repetir.

## Medición semanal GEO

1. Tomar las preguntas de `data/geo-queries.csv`.
2. Ejecutarlas con búsqueda web y anotar si el dominio aparece citado.
3. Registrar cada resultado en `data/geo-log.csv`: fecha, id, motor, citado, posición y nota.
4. Calcular la tasa de citación y compararla con la semana anterior.

Mientras el sitio sea nuevo o no esté indexado, el resultado esperado es 0 %; igual se registra para tener línea base.

## Actualización mensual

Revisar los artículos pilar: abrir las fuentes, ver si cambió alguna cifra, actualizar el texto y poner `updated: AAAA-MM-DD` en el front matter.

## Qué hacer si algo falla

- **El build falla:** leer el error de `node build.mjs`; casi siempre es un front matter mal formado o un enlace con paréntesis sin cerrar.
- **El despliegue falla:** revisar el estado con `get_deployment` y los eventos de build.
- **El sitio no carga:** comprobar el alias `telar-blog.vercel.app` en Vercel.
