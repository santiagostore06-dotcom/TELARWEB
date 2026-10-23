# Operación de Telar

## Comandos

```bash
cd /home/claude/telar
npm run check    # valida reglas editoriales (debe dar 0 errores)
npm run build    # genera dist/ y muestra el conteo de artículos
```

## Cómo desplegar hoy

El proyecto no está conectado a un repositorio Git. El despliegue se hace con la herramienta `create_deployment` de Vercel pasando todos los archivos fuente en línea (`vercel.json`, `package.json`, `build.mjs`, `static/style.css`, `content/**`). Vercel ejecuta `node build.mjs` y publica `dist/`. Pasos:

1. `npm run check` y `npm run build` sin errores.
2. Desplegar con `target: production`, nombre `telar-blog`.
3. Confirmar que el estado sea `READY` con `get_deployment`.
4. Anotar la fecha y los artículos nuevos en `docs/registro.md`.

Limitaciones conocidas:
- Es un proceso pesado y frágil por pegar los archivos a mano. Mejora recomendada: crear un repositorio de GitHub y conectarlo al proyecto de Vercel para que cada push despliegue solo. Requiere que el propietario autorice GitHub.
- Los agentes necesitan autorización de equipo (`authorize_team_access`) para leer logs de Vercel.
- La protección de Vercel Authentication ya fue desactivada por el propietario (no tocarla).
- El despliegue debe incluir TODOS los archivos, incluidos `content/**` y `static/style.css`; si falta alguno el build falla con `exited with 1`.

## Política de aprobación

- **Borradores y medición:** los agentes trabajan solos y dejan todo en `content/` y `data/`.
- **Publicar (desplegar):** solo con aprobación del propietario en el chat, salvo que él haya indicado por escrito que se publique automáticamente. Este permiso se registra aquí:
  - Estado actual: **publicación con aprobación manual.**
- **Contactos a marcas, compras, formularios de afiliados:** siempre con aprobación; los agentes solo preparan borradores.

## Calidad antes de publicar

- `npm run check` sin errores; revisar los avisos.
- Cada cifra verificada contra su fuente (abrir la fuente, no confiar en la memoria).
- Mínimo 3 enlaces de fuentes por artículo, 3 preguntas frecuentes, respuesta corta arriba.
- Sin afirmaciones de uso de una herramienta que no se probó.

## Medición semanal GEO

1. Tomar las 25 preguntas de `data/geo-queries.csv`.
2. Ejecutarlas en los motores disponibles (ChatGPT, Perplexity, Claude, Gemini) mediante búsqueda web.
3. Registrar cada resultado en `data/geo-log.csv`: fecha, id, motor, si Telar fue citado (sí/no), posición y nota.
4. Calcular la tasa de citación (citas / consultas) y compararla con la semana anterior.

Mientras el sitio sea privado o nuevo, el resultado esperado es 0 %; igual se registra para tener línea base.

## Actualización mensual

Revisar los artículos pilar: abrir las fuentes, ver si cambió alguna cifra, actualizar el texto y poner `updated: AAAA-MM-DD` en el front matter.

## Qué hacer si algo falla

- **El build falla:** leer el error de `node build.mjs`; casi siempre es un front matter mal formado o un enlace con paréntesis sin cerrar.
- **El despliegue falla:** revisar el estado con `get_deployment`; si falta acceso, pedir al propietario que autorice el equipo.
- **El sitio no carga:** comprobar la protección de Vercel y el alias `telar-blog.vercel.app`.
