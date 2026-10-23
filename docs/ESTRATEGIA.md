# Telar: estrategia de negocio (v1, 22 de octubre de 2026)

Blog en español (LATAM) sobre IA y automatización, operado por agentes, optimizado para que los chatbots lo citen y monetizado con afiliados y patrocinios.

## 1. Resumen ejecutivo

- **Propuesta:** guías con datos citados y límites a la vista. Diferenciador: honestidad editorial en un nicho lleno de cifras sin fuente.
- **Público:** pymes, creadores y equipos de LATAM que quieren automatizar con IA y aparecer en respuestas de ChatGPT, Claude y Perplexity.
- **Motor de crecimiento:** GEO (citas en chatbots) + SEO clásico + presencia en comunidades.
- **Ingresos:** (1) afiliados recurrentes, (2) patrocinios de herramientas de IA, (3) más adelante un producto propio (plantillas, auditoría GEO).
- **Expectativa realista:** un sitio nuevo tarda meses en ganar autoridad. No hay cifras de ingresos garantizables. Las metas de abajo son objetivos, no pronósticos.

## 2. Mercado (con fuentes)

| Dato | Fuente |
|---|---|
| Adopción de IA en LATAM: 47 % vs 45 % global | Ecosistema Startup |
| LATAM capta 1,1 % de la inversión global en IA | Ecosistema Startup |
| VC en LATAM: más de 1.030 M USD en el T1 2026 (+12 % interanual) | Data Center Dynamics |
| Mercado de IA en LATAM: crecimiento anual proyectado de 22 % (2026-2034) | IMARC Group |
| Motores de IA: según un proveedor de GEO, ~25-30 % de las consultas comerciales de alta intención | alejandrorioja.com (dato de proveedor, no verificado) |

Lectura: hay demanda de contenido práctico en español y poca oferta con rigor. El riesgo es la saturación de contenido genérico de IA.

## 3. Marca y posicionamiento

- **Nombre:** Telar (hilos que se cruzan: automatización y contenido tejido).
- **Voz:** clara, sin humo, con salvedades explícitas. Sentence case, verbos simples.
- **Regla de oro:** toda cifra lleva fuente; si la fuente tiene interés comercial, se dice.
- **Transparencia:** el sitio declara que se produce con ayuda de IA y supervisión humana.

## 4. Estrategia de contenido

Pilares (cada uno con un artículo pilar y 5-8 satélites):

1. **GEO y búsqueda con IA** (publicado: qué es GEO; robots/llms.txt).
2. **IA y automatización para pymes** (publicado: adopción en LATAM).
3. **Herramientas y flujos** (reseñas con uso real, comparativas, plantillas).
4. **Monetización de blogs y creadores** (publicado: programas de afiliados).

Plantilla de artículo (ya implementada en el sitio):
respuesta corta arriba → datos con fuente → límites → pasos → preguntas frecuentes (con marcado FAQPage) → fuentes.

Cadencia: 2 artículos por semana los primeros 90 días; actualizar los pilares cada 30-60 días con fecha visible.

## 5. Optimización para chatbots (GEO)

Hecho en el sitio:
- HTML estático rápido, un H1 por página, respuesta directa al inicio.
- Datos estructurados: Organization, WebSite, Article, BreadcrumbList, FAQPage.
- `robots.txt` que permite OAI-SearchBot, ChatGPT-User, GPTBot, Claude-SearchBot, Claude-User, ClaudeBot, PerplexityBot, Perplexity-User y Google-Extended.
- `sitemap.xml`, `rss.xml` y `llms.txt` (este último con expectativas bajas: ver el artículo del sitio).
- Fechas de publicación y actualización visibles.

Pendiente:
- Registrar el sitio en Google Search Console y Bing Webmaster Tools (ChatGPT Search recupera vía Bing).
- Dominio propio (da credibilidad ante patrocinadores y estabilidad de URL).
- Presencia útil en comunidades (Reddit, foros, LinkedIn) con valor real, sin spam.
- Medición semanal: 25 preguntas objetivo ejecutadas en ChatGPT, Perplexity, Claude y Gemini; registrar tasa de citación en una hoja.

## 6. Monetización

| Palanca | Cuándo | Cómo |
|---|---|---|
| Afiliados recurrentes | Mes 1-2 | Aplicar a 5-8 programas de herramientas que se usen de verdad. Verificar condiciones en la página oficial (las cifras de terceros cambian). |
| Patrocinios | Mes 2-4 | Reseñas y guías patrocinadas marcadas. Sin tarifario hasta tener datos propios de tráfico y de visitas desde chatbots. |
| Producto propio | Mes 4-6 | Plantillas de automatización, auditoría GEO para pymes, curso corto. |
| Publicidad | Solo con tráfico | Evaluar después; no es prioridad. |

Reglas: todo enlace comercial marcado y con `rel="sponsored"`; los patrocinadores no aprueban conclusiones.

## 7. Estrategia de patrocinios

- **Objetivo:** 10 marcas del nicho (IA, automatización, hosting, productividad, formación en español).
- **Pitch sin humo:** "sitio nuevo, nicho claro, contenido citable por chatbots; acuerdos de lanzamiento sin permanencia".
- **Material:** página `/patrocina/` (publicada) + un informe mensual de métricas propias a partir del mes 2.
- **Secuencia:** 1) lista de 40 marcas; 2) probar su producto; 3) escribir una reseña honesta; 4) enviarla como carta de presentación; 5) proponer formato patrocinado.
- **Ética:** no se promociona nada que no se haya probado o que no se declare como no probado.

## 8. Plan a 90 días

**Días 1-14 (base):** publicar el sitio (quitar la protección de Vercel), dominio, Search Console, Bing, canal de contacto, 4 artículos más. Solicitud a 5 programas de afiliados.

**Días 15-45 (tracción):** 2 artículos/semana, primera medición GEO, 10 participaciones útiles en comunidades, 10 contactos a marcas con reseña propia.

**Días 46-90 (ingresos):** primeras reseñas con afiliado, primer acuerdo de patrocinio, informe de métricas propio, decisión sobre producto propio según datos.

## 9. Indicadores (objetivos, no pronósticos)

| Indicador | Meta día 30 | Meta día 90 |
|---|---|---|
| Artículos publicados | 10 | 25 |
| Páginas indexadas | 10 | 25 |
| Tasa de citación en 25 consultas | medición base | +10 puntos sobre la base |
| Programas de afiliados activos | 3 | 6 |
| Conversaciones con patrocinadores | 10 | 25 |
| Primer ingreso | opcional | sí |

## 10. Equipo de agentes (CEO: Claude)

- **Investigación:** busca fuentes y datos, entrega notas con enlaces.
- **Redacción:** produce borradores con la plantilla; todo dato con fuente.
- **Verificación:** revisa cifras contra la fuente y cuestiona afirmaciones sin respaldo.
- **SEO/GEO:** revisa estructura, datos estructurados y mide citación semanal.
- **Alianzas:** prepara listas de marcas y borradores de contacto (los envías tú o los apruebas antes de salir).

## 11. Riesgos

- **Contenido genérico de IA:** mitigación con fuentes, límites y uso real de herramientas.
- **Errores factuales:** correcciones con fecha visible.
- **Dependencia de plataformas:** diversificar canales (RSS, newsletter más adelante).
- **Reglas de afiliados y publicidad:** declarar siempre; revisar la norma de tu país.
- **Autoridad baja al inicio:** paciencia y presencia en comunidades.

## 12. Qué necesito de ti

1. Quitar la protección de Vercel (ver instrucciones en la entrega).
2. Un correo público de contacto para el sitio.
3. Aprobación antes de cualquier compra (dominio) o envío de mensajes a marcas.
4. Confirmar cuenta propia para aplicar a programas de afiliados (los formularios los envías tú).
