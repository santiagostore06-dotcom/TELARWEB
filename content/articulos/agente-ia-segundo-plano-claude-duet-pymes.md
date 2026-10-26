---
title: ¿Puede un agente de IA como Claude Duet trabajar por tu pyme en segundo plano?
description: Anthropic abrió el 21 de octubre de 2026 la lista de espera de Claude Duet. Qué hace, quién puede usarlo, qué riesgos tiene y qué no se sabe aún.
date: 2026-10-26
pilar: pymes
---

> **Respuesta corta:** en teoría sí: Claude Duet es un agente que revisa tus apps conectadas, te manda un resumen cada mañana y trabaja en su propia computadora en la nube aunque cierres la aplicación. En la práctica, hoy es una vista previa de investigación solo para suscriptores Pro y Max con cuenta de Estados Unidos y lista de espera, así que una pyme latinoamericana no puede contar con él todavía. Sirve, eso sí, para entender qué vendrá y qué controles exigir a cualquier agente.

## Qué es Claude Duet y qué hace

Según la [página de ayuda de Claude](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet), Duet es una vista previa de investigación de Claude a la que le escribes o le hablas como a una persona. Trabaja dentro de tus aplicaciones conectadas y pide permiso antes de enviar mensajes, hacer pagos, firmar documentos o borrar algo. Esa página es del propio proveedor, así que describe el producto como Anthropic quiere que se entienda.

Lo que documenta la empresa:

- Corre en su propia computadora en la nube, por lo que puede seguir trabajando cuando cierras la app.
- Envía un resumen matutino, publica avances y retoma conversaciones que quedaron sin respuesta.
- Los trabajos grandes vuelven como archivos editables: informes, modelos, presentaciones o paneles.
- Entre los conectores que cita están Gmail, Google Calendar, Google Drive, Slack, QuickBooks, HubSpot, Docusign y Calendly. Microsoft 365 todavía no funciona.
- Las compras usan una tarjeta de un solo uso, y no puede operar con valores bursátiles ni mover dinero entre cuentas.

[TechCrunch](https://techcrunch.com/2026/10/22/claude-duet-app-is-anthropics-bet-on-agents/) informa que Anthropic lo orienta a profesionales y pequeños negocios, y que funciona sobre Claude Opus 5.5. Tanto TechCrunch como [The Next Web](https://thenextweb.com/news/anthropic-claude-duet-ai-agent) mencionan más de 6.000 integraciones disponibles. Esa cifra no aparece en la página de ayuda, así que la damos como dato de prensa, no como especificación oficial.

## Quién puede usarlo hoy

Aquí está el límite más importante para el lector de LATAM. La página de ayuda exige un plan Pro o Max y una cuenta de Claude de Estados Unidos, además de una invitación desde la lista de espera, que se envía por tandas. No está disponible en los planes Team ni Enterprise. The Next Web confirma el alcance: suscriptores Pro y Max de Estados Unidos, en iOS, Android y claude.ai. Ninguna de las fuentes que revisamos indica fecha de llegada a otros países ni idiomas compatibles.

En costos, la ayuda dice que está incluido en Pro y Max sin cargo extra durante la vista previa, pero que el trabajo en segundo plano, como el resumen matutino, consume tus límites de uso de cinco horas y semanales. Por eso puedes llegar antes al tope.

## Qué debe vigilar una pyme

Un agente que lee tu correo y puede actuar tiene un riesgo conocido: la inyección de instrucciones. Según el resumen de [OWASP AISVS](https://github.com/OWASP/AISVS/blob/main/1.01/research/chapters/C02-User-Input-Validation/C02-01-Prompt-Injection-Defense.md), es el riesgo número uno para sistemas con modelos de lenguaje, y en su versión indirecta las instrucciones maliciosas llegan escondidas en documentos, resultados de herramientas o contenido de terceros. Ese texto añade que un agente con acceso a datos privados, contenido no confiable y comunicación hacia afuera puede ser explotado con una sola entrada envenenada.

Anthropic lo reconoce de forma parcial: su ayuda dice que trata el contenido de correos y páginas como información, pero admite que la inyección sigue siendo posible y pide revisar con atención cada solicitud de aprobación.

De ahí salen reglas prácticas, que son nuestra lectura de esas fuentes y no una recomendación oficial:

1. **Empieza con tareas de bajo riesgo,** como resúmenes y borradores, antes de dar permiso para enviar o pagar. OWASP recomienda un despliegue gradual con prioridad a lo reversible.
2. **Da el mínimo acceso.** Conecta solo las apps que la tarea necesita.
3. **Lee cada aprobación.** Si el agente pide enviar un correo o pagar, comprueba destinatario y monto.
4. **Guarda un registro** de qué hizo el agente y qué aprobaste.

Si ya automatizas la atención a clientes, revisa también [qué pueden y qué no los asistentes de IA](/blog/asistentes-ia-atencion-cliente-que-pueden/).

## Lo que no está demostrado

- **Que ahorre tiempo a una pyme.** Las fuentes describen funciones, no mediciones de ahorro. No encontramos pruebas independientes con cifras.
- **Que sea mejor que sus rivales.** Según The Next Web, el analista Dan Shipper lo calificó como herramienta profesional, pero dijo que sus borradores de correo eran más débiles que los de otro agente. Es una opinión individual, no un estudio.
- **Que sus defensas basten.** Anthropic dijo que compartiría más sobre su diseño de seguridad en los días siguientes, según The Next Web. No hemos visto esa documentación. OWASP indica además que varios resultados de defensas son afirmaciones de proveedores y que los ataques adaptativos vencieron a la mayoría de las defensas publicadas.
- **Que funcione bien en español o con herramientas locales.** Ninguna fuente lo aborda.
- **Que lo hayamos probado.** No tenemos acceso: este artículo resume documentación y prensa, no una prueba propia.

## Preguntas frecuentes

### ¿Qué es Claude Duet?

Es un agente de IA en vista previa de Anthropic que trabaja en segundo plano sobre tus apps conectadas. Envía un resumen matutino, prepara archivos y pide aprobación antes de enviar mensajes, pagar, firmar o borrar.

### ¿Puedo usar Claude Duet desde Latinoamérica?

No por ahora, según la documentación oficial. Exige plan Pro o Max, cuenta de Claude de Estados Unidos e invitación desde una lista de espera. Anthropic no ha publicado fecha para otros países.

### ¿Cuánto cuesta Claude Duet?

Durante la vista previa no tiene cargo adicional para suscriptores Pro y Max. Sí consume los límites de uso de tu plan, incluido el trabajo en segundo plano. No hay precio anunciado para después.

### ¿Es seguro dejar que un agente lea mi correo?

No hay garantía total. Un agente que lee contenido de terceros puede recibir instrucciones maliciosas escondidas, y ni la empresa ni OWASP afirman que el riesgo esté resuelto. Reduce el daño con permisos mínimos, tareas reversibles y revisión de cada aprobación.

### ¿Un agente reemplaza a un asistente administrativo?

Las fuentes no lo demuestran. Describen un asistente que prepara resúmenes y borradores y que pide supervisión humana para las acciones sensibles. Tampoco documentan mediciones de ahorro de tiempo en pymes.

## Fuentes

- [Get started with Claude Duet (Claude Help Center, fuente del proveedor)](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet)
- [Claude Duet app is Anthropic's bet on agents (TechCrunch, 22 de octubre de 2026)](https://techcrunch.com/2026/10/22/claude-duet-app-is-anthropics-bet-on-agents/)
- [Anthropic previews Claude Duet, an AI agent that works in the background (The Next Web)](https://thenextweb.com/news/anthropic-claude-duet-ai-agent)
- [Prompt injection defense (OWASP AISVS)](https://github.com/OWASP/AISVS/blob/main/1.01/research/chapters/C02-User-Input-Validation/C02-01-Prompt-Injection-Defense.md)
