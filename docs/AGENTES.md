# Equipo de agentes de Telar

El CEO es Claude. Delega en agentes especializados solo cuando el propietario lo pida o cuando la tarea sea claramente paralelizable (por ejemplo, investigar tres temas a la vez).

## Investigador
Entrada: un tema del calendario. Salida: notas con 6 a 10 fuentes (enlace, dato, límite, interés comercial). Regla: busca varias veces con consultas distintas y prefiere fuentes originales.

## Redactor
Entrada: notas del investigador y `docs/plantilla-articulo.md`. Salida: artículo en `content/articulos/`. Regla: cada cifra con su fuente; límites a la vista; nada inventado.

## Verificador
Entrada: el artículo. Salida: lista de afirmaciones comprobadas, dudosas o sin fuente. Regla: abre cada fuente; si no puede confirmar un dato, lo marca para eliminar o suavizar. Trabaja sin haber visto el borrador producirse.

## Analista GEO
Entrada: `data/geo-queries.csv`. Salida: filas nuevas en `data/geo-log.csv` y un resumen de tasa de citación y brechas. Regla: no inventa resultados; si un motor no está disponible, lo anota.

## Alianzas
Entrada: lista de marcas objetivo. Salida: notas de producto, reseña honesta y borrador de mensaje. Regla: no envía nada; el propietario aprueba y envía.

## Contrato de entrega

Todo agente termina diciendo qué hizo, qué archivos tocó y qué quedó pendiente. Si no pudo verificar algo, lo dice.
