---
title: Datos estructurados para blogs: Article, FAQPage y qué sí muestra Google
description: Google dejó de mostrar los resultados enriquecidos de FAQ en mayo de 2026. Qué sigue valiendo en Article y FAQPage, y qué hacer con el marcado de tu blog.
date: 2026-11-16
pilar: geo
---

> **Respuesta corta:** los datos estructurados ayudan a Google a entender tu página, pero no son obligatorios ni garantizan nada. Desde el 7 de mayo de 2026 Google no muestra los resultados enriquecidos de preguntas frecuentes. Article sigue en su galería. Para aparecer en AI Overviews y AI Mode, Google dice que no necesitas marcado especial.

## Qué son los datos estructurados

Son etiquetas que describen el contenido de una página en un formato que las máquinas leen sin adivinar. El vocabulario más usado es [schema.org](https://schema.org/Article), que define tipos como Article (un artículo de noticias, un reportaje o una entrada de blog) y sus propiedades. Se suelen incluir en la página como JSON-LD.

Piensa en una ficha técnica. El texto es para la persona. La ficha le dice al buscador quién firma, cuándo se publicó y qué preguntas responde la página.

## Qué cambió con FAQ

Google anunció el 8 de mayo de 2026 que retiraba el resultado enriquecido de preguntas frecuentes. Su documentación dice que la función [dejó de aparecer en Google Search desde el 7 de mayo de 2026](https://developers.google.com/search/docs/appearance/structured-data/faqpage). El 15 de junio retiró también la documentación y confirmó que la función ya no se muestra.

Eso significa algo concreto. Si tu blog marcaba preguntas con FAQPage para ganar un desplegable bajo tu enlace, ese desplegable ya no existe.

La página de Google no aclara si conviene quitar el marcado. No dice que lo dañe ni que lo exija. Por eso no puedo afirmar que mantenerlo ayude o perjudique. Lo prudente es no gastar tiempo nuevo en él.

## Qué sigue en la galería: Article

La [galería de funciones de búsqueda](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) de Google lista hoy 25 tipos. Article está entre ellos. FAQ y HowTo ya no aparecen. Revisé la galería el 16 de noviembre de 2026.

Sobre Article, Google dice que el marcado puede ayudarle a [entender mejor la página y a mostrar mejor el título, las imágenes y la fecha](https://developers.google.com/search/docs/appearance/structured-data/article). No hay propiedades obligatorias. Estas son las recomendadas:

- **author:** una persona u organización, con nombre y una dirección (url) o un perfil (sameAs).
- **datePublished y dateModified:** en formato ISO 8601, idealmente con zona horaria.
- **headline:** el título, conciso.
- **image:** varias imágenes de alta resolución en proporciones 16:9, 4:3 y 1:1.

Una fecha de modificación solo vale si cambiaste el texto de verdad. Si la actualizas por actualizar, falseas tu propio historial.

## Qué dice Google sobre IA

Aquí hay un límite importante. La [guía de Google sobre funciones de IA](https://developers.google.com/search/docs/appearance/ai-features) afirma que no hay requisitos adicionales para aparecer en AI Overviews o AI Mode. También dice que no necesitas crear archivos legibles por máquina, archivos de texto para IA ni marcado nuevo, y que no hay un schema.org especial que añadir.

Esto choca con una promesa común: "añade schema y los chatbots te citarán". Para las funciones de IA de Google, su propia documentación dice lo contrario. Estas fuentes no dicen nada sobre ChatGPT, Claude o Perplexity. Si alguien te vende una mejora de citas por usar schema, pídele el estudio.

Ten en cuenta que Google es parte interesada: es el buscador y define su propio sistema. Su guía es la fuente primaria, pero describe a Google, no a todo el ecosistema.

## Reglas que sí importan

Las [políticas generales de datos estructurados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) piden tres cosas:

1. **El marcado debe coincidir con lo visible.** Google dice que no marques contenido que el lector no ve en la página.
2. **Nada engañoso.** No inventes reseñas ni valoraciones.
3. **Entiende el castigo.** Un problema puede causar una acción manual: la página pierde la elegibilidad para resultados enriquecidos. Según la política, el ranking no se ve afectado.

Y una más: un marcado válido no garantiza que Google muestre algo.

## Qué hacer en tu blog (pasos)

1. **Marca Article en cada entrada.** Incluye headline, datePublished, dateModified y author. Pon el nombre real del autor o de la organización.
2. **Usa JSON-LD**, no etiquetas mezcladas dentro del texto. Es más fácil de mantener.
3. **Comprueba que cada dato del marcado aparece en la página.** Si el JSON-LD dice que la fecha es del 3 de noviembre, el lector debe ver esa fecha.
4. **No inviertas tiempo nuevo en FAQPage para ganar el desplegable.** Mantén tus preguntas frecuentes como texto visible: le sirven al lector igual.
5. **Mide antes y después.** Anota la fecha del cambio y mira las impresiones y los clics de tus páginas en Search Console.
6. **No esperes saltos.** Si tu sitio es nuevo, el contenido y el tiempo pesan más que el marcado. Mira cómo [medir si los chatbots citan tu sitio](/blog/medir-citas-chatgpt-claude-perplexity-hoja-calculo/) para tener datos propios.

Para el contexto de cómo Google trata los enlaces en sus respuestas de IA, lee [qué cambió en los enlaces de Google AI Mode](/blog/google-ai-mode-enlaces-cambios-octubre-2026-blog-pequeno/). Si quieres la visión general, empieza por [qué es GEO](/blog/que-es-geo-chatgpt-cite-tu-sitio/).

## Lo que no está demostrado

- Que el schema aumente las citas en ChatGPT, Claude o Perplexity. Las fuentes citadas aquí no lo afirman.
- Que quitar un FAQPage existente cause o evite un problema. Google no lo dice en la página revisada.
- Que Article garantice una mejor presentación. Google solo dice que puede ayudar.
- Cuánto tráfico aporta cada tipo de marcado. No hay una cifra verificada en estas fuentes.

## Preguntas frecuentes

### ¿Google todavía muestra los resultados enriquecidos de preguntas frecuentes?

No. Google indica que la función dejó de aparecer en Search desde el 7 de mayo de 2026 y que ya no se muestra en los resultados.

### ¿Tengo que añadir datos estructurados para salir en AI Overviews o AI Mode?

No. Google dice que no hay requisitos adicionales ni un schema.org especial para esas funciones. Sigue las prácticas de SEO básicas y mantén el contenido útil.

### ¿Qué tipo de marcado conviene en un blog?

Article con autor, fechas, título e imagen. Google lo mantiene en su galería, aunque no es obligatorio y no garantiza un resultado enriquecido.

### ¿Puede el marcado causar una sanción?

Puede causar una acción manual si engaña o marca contenido que no se ve. El efecto descrito es perder la elegibilidad para resultados enriquecidos, no el ranking.

## Fuentes

- [Documentación de FAQ y registro de cambios (Google Search Central)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [Marcado de Article (Google Search Central)](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Galería de funciones de búsqueda (Google Search Central)](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- [Funciones de IA y tu sitio web (Google Search Central)](https://developers.google.com/search/docs/appearance/ai-features)
- [Políticas de datos estructurados (Google Search Central)](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Article en schema.org](https://schema.org/Article)
