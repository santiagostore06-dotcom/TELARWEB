---
title: Privacidad al usar IA en el trabajo: qué datos no compartir y una política mínima para tu equipo
description: Qué hacen ChatGPT, Claude y Gemini con lo que escribes, qué datos no pegar en un chatbot y una política de una página para una pyme.
date: 2026-11-14
pilar: pymes
---

> **Respuesta corta:** en las versiones gratuitas y personales de ChatGPT, Claude y Gemini, lo que escribes puede usarse para mejorar los modelos o ser leído por revisores humanos, salvo que cambies un ajuste. Las versiones de empresa no entrenan con tus datos por defecto. Regla práctica: no pegues datos personales de clientes, contraseñas, contratos ni cifras internas en una cuenta personal. Escribe una política de una página y usa una cuenta de empresa si el equipo trabaja con datos sensibles.

Aviso: Telar no tiene enlaces de afiliado ni acuerdos con OpenAI, Anthropic, Google ni ninguna otra empresa citada. Esto no es asesoría legal. Las reglas de cada servicio se consultaron en sus páginas oficiales el 14 de noviembre de 2026 y pueden cambiar.

## El problema: el chatbot no es un cuaderno privado

Mucha gente usa la IA en el trabajo con su cuenta personal. Pega un correo de un cliente, una hoja de pagos o un contrato y pide un resumen. Es rápido. Pero ese texto sale de la empresa y queda guardado en los servidores de otra compañía, con las reglas de una cuenta personal.

La diferencia clave no es la marca del chatbot. Es el tipo de cuenta: personal o de empresa. Las cuentas personales suelen usar tus conversaciones para mejorar el servicio, salvo que lo desactives. Las de empresa suelen excluirlo por contrato.

## Qué hace cada servicio con lo que escribes

### ChatGPT (OpenAI)

- En los planes para personas (Free, Plus y Pro), OpenAI puede usar tu contenido para entrenar sus modelos. Puedes desactivarlo en Configuración > Controles de datos, opción "Mejorar el modelo para todos", o desde su portal de privacidad ([ayuda de OpenAI](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance)).
- Ojo con el pulgar arriba o abajo: aunque hayas desactivado el entrenamiento, si das esa valoración, OpenAI puede usar toda la conversación asociada para mejorar sus modelos (misma fuente).
- Los chats temporales no se usan para entrenar mientras sigan siendo temporales, pero OpenAI puede guardar una copia hasta 30 días por seguridad ([ayuda de OpenAI sobre chats temporales](https://help.openai.com/en/articles/8914046-temporary-chat-faq)).
- En ChatGPT Business, Enterprise, Edu y la API, OpenAI dice que no entrena con tus datos por defecto. En Business y Enterprise, los administradores controlan cuánto tiempo se guardan las conversaciones ([página de privacidad empresarial de OpenAI](https://openai.com/enterprise-privacy/)).

### Claude (Anthropic)

- Desde agosto de 2025, los usuarios de Claude Free, Pro y Max eligen si sus conversaciones sirven para mejorar los modelos. Si lo permiten, Anthropic guarda los datos hasta cinco años; si no, se mantiene la retención de 30 días. Una conversación borrada no se usa para entrenamientos futuros ([anuncio de Anthropic](https://www.anthropic.com/news/updates-to-our-consumer-terms)).
- Esos cambios no aplican a Claude for Work (Team y Enterprise), Claude for Education ni la API, que siguen bajo términos comerciales (misma fuente).
- El anuncio es de 2025. No encontramos un cambio posterior, pero revisa tus ajustes de privacidad en la app antes de decidir.

### Gemini (Google)

- Google dice que revisores humanos, incluidos proveedores externos, leen parte de las conversaciones. Su propio centro de privacidad pide no incluir información confidencial que no quieras que vea un revisor ([centro de privacidad de las apps de Gemini](https://support.google.com/gemini/answer/13594961?hl=es)).
- Las conversaciones revisadas por personas no se borran cuando eliminas tu actividad: se conservan hasta tres años (misma fuente).
- Si desactivas "Guardar actividad" o usas conversaciones temporales, Google conserva esas conversaciones 72 horas en tu cuenta para responderte y por seguridad (misma fuente).

Telar no probó estos ajustes para este artículo. Lo de arriba resume lo que dicen las propias empresas.

## Qué dice la norma en Colombia

En Colombia, la Superintendencia de Industria y Comercio (SIC) expidió la Circular Externa 002 del 21 de agosto de 2024, con lineamientos para tratar datos personales al desarrollar, desplegar o usar sistemas de IA ([Portafolio](https://www.portafolio.co/tecnologia/la-sic-expidio-lineamientos-para-el-tratamiento-de-datos-en-sistemas-de-ia-611661)). Según un análisis del despacho Cuatrecasas, pide que el uso de datos personales en IA pase cuatro pruebas: idoneidad, necesidad, razonabilidad y proporcionalidad. También pide un estudio de impacto de privacidad antes de tratar datos sensibles o de alto riesgo, y poder demostrar las medidas tomadas ([Cuatrecasas](https://www.cuatrecasas.com/es/latam/tecnologia-medios-digitales/art/guia-uso-responsable-ia-datos-personales-colombia)). Cuatrecasas es una firma de abogados que asesora en el tema.

En la práctica: si tu pyme pega datos de clientes en un chatbot, eso cuenta como tratamiento de datos personales. Necesitas una razón, el mínimo de datos posible y poder explicar qué hiciste. En otros países de América Latina hay leyes de protección de datos con principios parecidos, pero no las revisamos para este artículo; consulta la autoridad de tu país.

## Qué datos no pegar en un chatbot con cuenta personal

1. **Datos personales de clientes o empleados:** nombres con cédula, teléfonos, direcciones, historiales médicos, datos de salario.
2. **Credenciales:** contraseñas, claves de API, códigos de acceso.
3. **Datos financieros:** números de tarjeta o de cuenta, estados bancarios, márgenes internos.
4. **Documentos confidenciales:** contratos, propuestas a clientes, acuerdos de confidencialidad, planes que no son públicos.
5. **Datos de menores de edad** y cualquier dato sensible, como salud, religión u orientación sexual.

Si necesitas ayuda con un texto así, quita primero lo que identifica a la persona. Cambia "Juan Pérez, cédula 123" por "el cliente A". El chatbot resuelve igual la mayoría de las tareas.

## Una política mínima de una página

Una pyme no necesita un manual de 40 páginas para empezar. Basta con una hoja que todo el equipo lea y firme:

1. **Herramientas permitidas.** Lista cuáles se pueden usar y con qué cuenta. Ejemplo: "solo la cuenta de empresa para temas de clientes".
2. **Datos prohibidos.** Copia la lista de cinco puntos de arriba.
3. **Ajustes obligatorios.** En cuentas personales, entrenamiento desactivado. Nada de pulgar arriba o abajo en conversaciones con datos de trabajo.
4. **Anonimizar antes de pegar.** Quitar nombres, documentos y cifras identificables.
5. **Revisar antes de enviar.** Lo que produce la IA lo revisa una persona antes de que llegue a un cliente. Ver [qué pueden y qué no los asistentes de atención al cliente](/blog/asistentes-ia-atencion-cliente-que-pueden/).
6. **Responsable y fecha.** Una persona revisa la política cada seis meses, porque las reglas de los servicios cambian.

Si ya automatizas tareas, la misma lógica aplica a los flujos: revisa qué datos pasan de una app a otra. Lo explicamos en [cinco tareas de una pyme que conviene automatizar primero](/blog/cinco-tareas-pyme-automatizar-primero-medir-ahorro/) y en [cómo automatizar las respuestas de WhatsApp e Instagram](/blog/automatizar-whatsapp-instagram-pyme-herramientas-limites/).

## Lo que no está demostrado

- **Que desactivar el entrenamiento borre todo.** Los servicios siguen guardando conversaciones un tiempo por seguridad: hasta 30 días en ChatGPT y 72 horas en Gemini, según sus páginas, y más si un revisor humano las vio.
- **Que una cuenta de empresa elimine todo riesgo.** Cambia las reglas de entrenamiento y retención, pero los datos siguen saliendo de tu empresa. Una mala configuración o un empleado descuidado siguen siendo riesgos.
- **Que la IA "memorice" y repita tus datos a otros usuarios.** No encontramos evidencia pública verificable sobre con qué frecuencia pasa con estos servicios. Por eso la regla es no compartir, no confiar en que no pasará.

## Preguntas frecuentes

### ¿ChatGPT usa mis conversaciones para entrenar?

En los planes Free, Plus y Pro, sí puede hacerlo, salvo que desactives "Mejorar el modelo para todos" en Controles de datos. En ChatGPT Business, Enterprise, Edu y la API, OpenAI dice que no entrena con tus datos por defecto.

### ¿Es seguro pegar datos de clientes en un chatbot?

Con una cuenta personal, no es buena idea: el texto queda en servidores de otra empresa y puede revisarse o usarse para mejorar el servicio. Quita los datos que identifican a la persona o usa una cuenta de empresa con un contrato que lo cubra.

### ¿Qué ley aplica en Colombia al usar IA con datos personales?

La Ley 1581 de 2012 de protección de datos y la Circular Externa 002 de 2024 de la SIC, que da lineamientos para sistemas de IA. Pide usar solo los datos necesarios y poder demostrar las medidas tomadas.

### ¿Los chats temporales son privados?

Son más privados, pero no desaparecen al instante. ChatGPT puede guardar una copia hasta 30 días y Gemini conserva las conversaciones temporales 72 horas, según sus páginas de ayuda.

### ¿Qué necesita una pyme como mínimo?

Una política de una página: qué herramientas usar, qué datos no pegar, qué ajustes activar, anonimizar antes de pegar, revisar lo que produce la IA y una persona responsable de actualizarla.

## Fuentes

- [How your data is used to improve model performance (OpenAI)](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance)
- [Temporary Chat FAQ (OpenAI)](https://help.openai.com/en/articles/8914046-temporary-chat-faq)
- [Enterprise privacy at OpenAI (OpenAI)](https://openai.com/enterprise-privacy/)
- [Updates to our consumer terms (Anthropic)](https://www.anthropic.com/news/updates-to-our-consumer-terms)
- [Centro de privacidad de las aplicaciones de Gemini (Google)](https://support.google.com/gemini/answer/13594961?hl=es)
- [La SIC expidió lineamientos para el tratamiento de datos en sistemas de IA (Portafolio)](https://www.portafolio.co/tecnologia/la-sic-expidio-lineamientos-para-el-tratamiento-de-datos-en-sistemas-de-ia-611661)
- [Guía para el uso responsable de IA y datos personales en Colombia (Cuatrecasas)](https://www.cuatrecasas.com/es/latam/tecnologia-medios-digitales/art/guia-uso-responsable-ia-datos-personales-colombia)
