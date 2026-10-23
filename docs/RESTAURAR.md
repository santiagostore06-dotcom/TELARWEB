# Restaurar el proyecto en una sesión nueva

Las tareas programadas empiezan sin archivos locales. La copia durable está en el Proyecto BLOG, en la carpeta `telar/` (rutas idénticas a las del repositorio: `telar/build.mjs`, `telar/content/articulos/...`).

## Restaurar

1. Crear la carpeta `/home/claude/telar`.
2. Con la herramienta Projects, `project_info` para ver la lista y `project_read` de cada archivo cuya ruta empiece por `telar/`; guardar cada uno en `/home/claude/telar/<ruta sin el prefijo telar/>`. Si un archivo grande se devuelve como ruta local, copiarlo desde esa ruta.
3. Comprobar con `npm run verify` (0 errores).

## Guardar cambios

Después de trabajar, subir cada archivo creado o modificado con `project_write` (ruta `telar/<ruta>`, parámetro `local_path`). Datos que cambian cada semana: `data/geo-log.csv`, `docs/registro.md`, `docs/calendario-editorial.md` y los artículos nuevos.

## Qué NO hacer

No desplegar a Vercel desde una tarea programada. Publicar requiere aprobación del propietario en el chat.
