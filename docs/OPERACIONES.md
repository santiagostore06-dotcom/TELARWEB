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

**Si Vercel ya está conectado al repositorio:** basta con hacer `git push` a `main`. Vercel ejecuta `node build.mjs` y publica `dist/`. Comprobar que el despliegue quede `READY`.

**Si no lo está:** desplegar con la herramienta `create_deployment` de Vercel pasando TODOS los archivos fuente en línea (`vercel.json`, `package.json`, `build.mjs`, `static/style.css`, `content/**`). Si falta alguno, el build falla con `exited with 1`. Es un proceso lento y frágil; conectar el repositorio lo resuelve.

Pasos en ambos casos:
1. `npm run verify` sin errores.
2. Desplegar con `target: production`, proyecto `telar-blog`.
3. Confirmar estado `READY` con `get_deployment`.
4. Anotar el cambio en `docs/registro.md`.

Limitaciones conocidas:
- La protección de Vercel (Deployment Protection) ya está desactivada. No tocarla.
- La integración de GitHub en Vercel está instalada en la cuenta `stgames640-sys`, no en `santiagostore06-dotcom`. Mientras no se autorice esa cuenta, Vercel no ve el repositorio.

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
