---
title: robots.txt y llms.txt: qué sirve de verdad para los rastreadores de IA
description: Qué controla cada archivo, qué rastreadores de IA existen y qué dicen los datos de 2026 sobre si llms.txt se lee o no.
date: 2026-10-22
pilar: geo
---

> **Respuesta corta:** `robots.txt` es el único archivo con apoyo amplio de los operadores de IA y sirve para permitir o bloquear rastreadores. `llms.txt` es una propuesta sin respaldo oficial: según un estudio de 2026, el 97 % de esos archivos no recibió ninguna petición de sistemas de IA. Publícalo si quieres, pero no cuentes con él para ganar citas.

## Qué hace cada archivo

`robots.txt` vive en la raíz de tu dominio y le indica a cada rastreador qué puede visitar. Es una petición, no un candado: los rastreadores serios la respetan y los demás pueden ignorarla.

`llms.txt` es una propuesta de la comunidad, no un estándar oficial. Consiste en un archivo Markdown en `/llms.txt` que resume las páginas más importantes de un sitio en un formato pensado para modelos. [ProfileTree](https://profiletree.com/llms-txt-and-ai-crawlers/) señala que, a inicios de 2026, no había confirmación de que OpenAI, Anthropic o Google lo lean y prioricen al rastrear.

## Qué dicen los datos

[Originality.ai](https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/) hizo un seguimiento de más de tres millones de sitios. Los archivos `llms.txt` pasaron de 4.088 en junio de 2025 a 36.120 en mayo de 2026, es decir, 8,8 veces más en doce meses. Pero al revisar los registros de 137.210 dominios durante mayo de 2026, el 97 % de esos archivos no recibió ni una sola petición. Dentro de las pocas visitas, GPTBot supuso el 4,51 % de las peticiones y ClaudeBot el 0,80 %.

Sobre la postura de las empresas: según ese mismo informe, OpenAI y Anthropic remiten a `robots.txt` para gestionar el acceso de los rastreadores, y mencionan `llms.txt` solo en su documentación para desarrolladores. Otro análisis añade que Google ha dicho por escrito que lo ignora. Es útil sobre todo para documentación técnica que consumen agentes de programación.

## Los rastreadores que importan

Una guía de [Hyperleap](https://hyperleap.ai/blog/top-llm-crawlers-and-what-they-do-2026) identifica doce rastreadores relevantes en 2026, agrupados por empresa:

| Empresa | Rastreadores | Para qué sirven |
|---|---|---|
| OpenAI | GPTBot, OAI-SearchBot, ChatGPT-User | Entrenamiento, búsqueda y navegación a pedido del usuario |
| Anthropic | ClaudeBot, Claude-SearchBot, Claude-User | Entrenamiento, búsqueda y navegación a pedido del usuario |
| Perplexity | PerplexityBot, Perplexity-User | Búsqueda y respuestas |
| Google | Google-Extended, GoogleOther | Uso de contenido en Gemini y otros fines |
| Apple y Microsoft | Applebot-Extended, BingBot | Funciones de IA de Apple; Bing y Copilot |

Según esa guía, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot y Google-Extended respetan `robots.txt`. Un detalle importante: bloquear Google-Extended no te saca de los AI Overviews, y bloquear GPTBot no te saca de ChatGPT Search, porque esos productos usan otros rastreadores.

## Qué haría yo con un blog nuevo

1. **Permitir a los rastreadores de búsqueda de IA** de forma explícita, por nombre, no solo con el comodín `*`.
2. **Decidir por separado el entrenamiento.** Permitir GPTBot o ClaudeBot es una decisión sobre si tu contenido puede formar parte de los modelos, distinta de aparecer en las respuestas con fuente. Un blog que vive de que lo citen suele preferir permitirlos; quien vende contenido de pago puede preferir bloquearlos.
3. **Listar en `sitemap.xml`** todas las páginas importantes.
4. **Publicar `llms.txt` solo si cuesta poco.** Cuesta casi nada y te obliga a decidir qué páginas representan tu experiencia. Telar lo publica, con esta misma advertencia.
5. **Revisar los registros del servidor** para ver qué rastreadores te visitan de verdad.

Si ya aplicaste esto, el siguiente paso es el contenido: [qué es GEO y cómo estructurar tus páginas](/blog/que-es-geo-chatgpt-cite-tu-sitio/).

## Preguntas frecuentes

### ¿Bloquear GPTBot me saca de ChatGPT?

No necesariamente. GPTBot recopila datos que pueden usarse para entrenar modelos, mientras que ChatGPT Search usa otros rastreadores, como OAI-SearchBot. Por eso conviene decidir cada uno por separado.

### ¿Todos los rastreadores respetan robots.txt?

No. Es un protocolo voluntario. Los grandes operadores de IA documentan sus agentes y los respetan, pero algunos raspadores de terceros lo ignoran, y la propia Perplexity indica que su agente de usuario, el que actúa a pedido de una persona, generalmente no sigue las reglas de `robots.txt`.

### ¿Debería publicar llms.txt?

Es opcional. No hay evidencia de que mejore tus citas, así que no debe ser tu prioridad. Si tu sitio es documentación técnica para desarrolladores, tiene más sentido.

### ¿Qué es ai.txt?

Es otra propuesta, centrada en permisos y licencias de uso del contenido. Su adopción es baja y no impide que se descargue una página.

## Fuentes

- [llms.txt adoption rises 8.8x but 97% of files get zero AI requests (PPC Land, sobre Originality.ai)](https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/)
- [llms.txt and AI crawlers (ProfileTree)](https://profiletree.com/llms-txt-and-ai-crawlers/)
- [Top LLM crawlers and what they do in 2026 (Hyperleap)](https://hyperleap.ai/blog/top-llm-crawlers-and-what-they-do-2026)
- [AI crawler directives and llms.txt (Hartzer)](https://hartzer.it.com/ai-crawler-directives-and-llms-txt/)
