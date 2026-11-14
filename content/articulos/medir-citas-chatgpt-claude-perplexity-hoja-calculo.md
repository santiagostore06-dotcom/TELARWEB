---
title: Cómo medir si ChatGPT, Claude y Perplexity citan tu sitio, con una hoja de cálculo semanal
description: Un método semanal y gratuito para saber si los chatbots citan tu sitio, con los informes de IA de Google y Bing, y los límites de cada medición.
date: 2026-11-14
pilar: geo
---

> **Respuesta corta:** arma una lista fija de 20 a 25 preguntas, hazlas cada semana en cada chatbot, varias veces, y anota en una hoja si tu sitio aparece citado. Súmale dos informes gratuitos: el de IA generativa de Google Search Console y el de AI Performance de Bing Webmaster Tools. Mide el porcentaje de respuestas que te citan, no tu "posición": las listas de los chatbots cambian casi en cada consulta.

Aviso: así medimos Telar. Nuestra línea base del 6 de noviembre de 2026 fue de 0 citas en 25 preguntas, y lo contamos porque un método sirve también cuando el resultado es malo. Las fuentes se consultaron el 14 de noviembre de 2026.

## Qué significa "medir citas" en un chatbot

Un chatbot con búsqueda responde y muestra enlaces a sus fuentes. Te "cita" cuando uno de esos enlaces lleva a tu sitio. Medirlo es contar, en un conjunto fijo de preguntas, cuántas respuestas incluyen tu dominio.

No es lo mismo que el tráfico. Una cita puede no producir ningún clic. Y un clic puede llegar sin que sepas de qué respuesta salió. Por eso conviene medir las dos cosas por separado. Si recién empiezas, lee antes [qué es GEO y cómo lograr que los chatbots citen tu sitio](/blog/que-es-geo-chatgpt-cite-tu-sitio/).

## Qué dicen los datos

**Las respuestas cambian casi cada vez.** Rand Fishkin, de SparkToro, y Patrick O'Donnell, de Gumshoe.ai, repitieron las mismas preguntas de recomendación de marcas decenas de veces en ChatGPT, Claude y la IA de Google. Según el [resumen de Search Engine Journal](https://www.searchenginejournal.com/ai-recommendations-change-with-nearly-every-query-sparktoro/566242/), ChatGPT y la IA de Google repitieron la misma lista de marcas en menos del 1 % de los casos, y la misma lista en el mismo orden en menos del 0,1 %. En cambio, el porcentaje de veces que una marca aparece fue más estable. Ojo con dos cosas: el estudio no tiene revisión de pares, y Gumshoe.ai vende herramientas de seguimiento de IA, así que tiene interés comercial en el tema.

**Google ya separa la IA en Search Console.** Desde el 3 de junio de 2026, Search Console tiene [informes de rendimiento de IA generativa](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports). Muestran las impresiones de tus páginas en AI Overviews, AI Mode y Discover, por página, país, fecha y dispositivo. Google anunció que desde el 31 de agosto de 2026 están disponibles para todos los sitios. El anuncio solo habla de impresiones: no muestra las preguntas que hizo la gente.

**Bing cuenta citas en Copilot.** Desde el 10 de febrero de 2026, Bing Webmaster Tools tiene un informe [AI Performance en vista previa](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview). Cuenta cuántas veces se cita tu contenido en Microsoft Copilot, en los resúmenes de IA de Bing y en algunos socios. También muestra qué páginas se citan y una muestra de las frases que usó la IA para encontrarte. Es el dato más cercano a "citas reales" que existe gratis hoy.

**ChatGPT y Perplexity no tienen un informe así.** Lo que sí publican es cómo funcionan sus rastreadores. OpenAI explica que su rastreador [OAI-SearchBot](https://developers.openai.com/api/docs/bots) decide qué sitios aparecen en la búsqueda de ChatGPT, y que si lo bloqueas no apareces en sus respuestas. Perplexity dice algo parecido de [PerplexityBot](https://docs.perplexity.ai/guides/bots). Para esos dos motores, la medición manual es la única vía gratuita.

## Qué hacer: el método semanal

1. **Escribe tus preguntas una vez y no las cambies.** Entre 20 y 25 preguntas que tu lector le haría a un chatbot, con sus palabras. Si cambias la lista cada semana, no puedes comparar. Telar guarda la suya en un archivo con número de pregunta y tema.
2. **Comprueba que los rastreadores te pueden leer.** Revisa que tu `robots.txt` no bloquee OAI-SearchBot ni PerplexityBot. Si los bloqueas, medir no tiene sentido. Lo explicamos en [robots.txt y llms.txt: qué sirve de verdad](/blog/robots-txt-llms-txt-que-sirve/).
3. **Haz cada pregunta en cada motor, más de una vez.** Usa ChatGPT con búsqueda, Perplexity, Claude con búsqueda web y Gemini o el modo IA de Google. Abre una conversación nueva cada vez. Por el estudio anterior, una sola consulta no basta: haz cada pregunta al menos tres veces.
4. **Anota una fila por consulta.** Columnas mínimas: fecha, número de pregunta, motor, intento, ¿te citó? (sí o no), URL citada y una nota. Si citó a un competidor, anótalo: te dice qué contenido gana.
5. **Calcula una sola cifra por semana.** Tu tasa de citación es: respuestas que te citan dividido entre respuestas totales. Calcúlala por motor y en total. Ignora la posición dentro de la respuesta.
6. **Cruza con los informes oficiales.** Una vez por semana, mira las impresiones en el informe de IA generativa de Search Console y las citas en AI Performance de Bing. Si suben ahí pero no en tu hoja, tus preguntas quizá no son las que hace la gente. Revisa las frases de búsqueda que muestra Bing.
7. **Mira el tráfico que llega desde los chatbots.** En tu analítica, filtra las visitas cuya fuente sea chatgpt.com, perplexity.ai, claude.ai, gemini.google.com o copilot.microsoft.com. Esto mide clics, no citas, y puede quedarse corto si el enlace se abre sin datos de origen.
8. **Compara cada cuatro a seis semanas, no cada día.** Los cambios en el contenido tardan en notarse y las respuestas varían mucho. Una semana mala no es una tendencia.

## Lo que no está demostrado

- **Que una "posición" en un chatbot signifique algo.** El estudio de SparkToro sugiere que el orden cambia casi siempre. Desconfía de herramientas que venden un ranking de IA sin explicar su método.
- **Que la medición manual represente lo que ve todo el mundo.** Las respuestas pueden variar por cuenta, idioma, país e historial. Tu hoja es una muestra, no un censo.
- **Que las impresiones en AI Overviews sean lecturas.** Una impresión dice que tu página apareció, no que alguien la leyó.
- **Que haya un plazo fijo para empezar a aparecer.** No encontramos datos fiables sobre cuánto tarda un sitio nuevo.

## Preguntas frecuentes

### ¿Cómo sé si ChatGPT cita mi sitio?

Haz tus preguntas en ChatGPT con búsqueda y revisa los enlaces de cada respuesta. OpenAI no ofrece un informe de citas para sitios. Repite cada pregunta varias veces, porque las respuestas cambian.

### ¿Hay alguna herramienta gratuita que cuente citas de IA?

Sí, para Microsoft. El informe AI Performance de Bing Webmaster Tools cuenta citas en Copilot y en los resúmenes de IA de Bing. Google Search Console muestra impresiones en AI Overviews y AI Mode, pero no citas en ChatGPT ni en Perplexity.

### ¿Cuántas preguntas necesito para medir bien?

Entre 20 y 25 preguntas fijas son un buen punto de partida para un blog pequeño. Lo importante es repetir cada una varias veces por motor y no cambiar la lista entre semanas.

### ¿Vale la pena pagar una herramienta de seguimiento de IA?

Solo si te muestra su método: cuántas veces repite cada pregunta y cómo calcula el resultado. Para un blog que empieza, una hoja de cálculo y los dos informes gratuitos alcanzan.

### ¿Qué hago si mi tasa de citación es cero?

Es normal en un sitio nuevo; la de Telar empezó en cero. Mira qué fuentes citan los chatbots en tus preguntas y mejora tus páginas para responder más directo, con datos y fuentes. Si Google ya te muestra en su modo IA, revisa [qué cambió en los enlaces de Google AI Mode](/blog/google-ai-mode-enlaces-cambios-octubre-2026-blog-pequeno/).

## Fuentes

- [Introducing Search Generative AI performance reports in Search Console (Google Search Central)](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)
- [Introducing AI Performance in Bing Webmaster Tools Public Preview (Bing Webmaster Blog)](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- [Overview of OpenAI crawlers (OpenAI)](https://developers.openai.com/api/docs/bots)
- [Perplexity crawlers (Perplexity)](https://docs.perplexity.ai/guides/bots)
- [AI recommendations change with nearly every query: SparkToro (Search Engine Journal)](https://www.searchenginejournal.com/ai-recommendations-change-with-nearly-every-query-sparktoro/566242/)
