---
title: Cómo evitar que un chatbot de atención invente respuestas: base de conocimiento, límites y escalamiento
description: Cuatro controles para que el chatbot de tu pyme responda solo con información verificada, admita que no sabe y pase el caso a una persona, más una prueba de 20 preguntas.
date: 2026-11-18
pilar: pymes
---

> **Respuesta corta:** no existe forma de garantizar que un chatbot nunca invente. Sí puedes reducir el riesgo con cuatro controles: darle solo documentos verificados, permitirle decir "no sé", limitar los temas que puede tratar y pasar a una persona los casos con dinero, plazos o quejas. La guía de Anthropic dice que estas técnicas bajan las alucinaciones, pero no las eliminan. Y un caso de 2024 en Canadá mostró que la empresa responde por lo que dice su chatbot.

## Por qué importa: la empresa responde por lo que dice el bot

En febrero de 2024, el Tribunal de Resolución Civil de la Columbia Británica (Canadá) falló contra Air Canada en el caso Moffatt. Un cliente preguntó al chatbot de la aerolínea por las tarifas de duelo. El bot le sugirió que podía pedir el descuento después del viaje. Otra página de la misma web decía lo contrario. Según el resumen del abogado [Barry Sookman](https://barrysookman.com/2024/02/16/moffatt-v-air-canada-a-misrepresentation-by-an-ai-chatbot/), la aerolínea argumentó que el chatbot era una entidad separada. El tribunal lo rechazó: el bot es parte de la web de la empresa. También dijo que la aerolínea no explicó por qué la página estática sería más confiable que el bot.

La [firma Torkin Manes](https://www.torkin.com/insights/publication/bc-tribunal-confirms-companies-remain-liable-for-ai-chatbot-created-information) fecha la decisión el 14 de febrero de 2024 y la presenta como un aviso para las empresas: siguen siendo responsables de lo que informa su chatbot.

Dos límites que conviene decir. Primero, es una decisión de un tribunal administrativo en Canadá, no una regla para Colombia ni para otro país de la región. Segundo, Sookman añade una actualización: según una revista jurídica canadiense, el bot de Air Canada no se había construido con IA. El caso aplica un principio viejo (responder por los sistemas que uno usa), y no dice cómo se tratará a los bots con IA generativa.

## Por qué un chatbot inventa

Los modelos de lenguaje generan texto probable, no texto comprobado. Un [artículo de investigadores de OpenAI y Georgia Tech](https://arxiv.org/abs/2509.04664) (septiembre de 2025) sostiene que el entrenamiento y las pruebas premian adivinar frente a admitir incertidumbre. Es una hipótesis de sus autores, y OpenAI vende modelos, así que tiene interés en el tema. La consecuencia práctica para una pyme es sencilla: si no le das permiso y razones para decir "no sé", tenderá a contestar algo.

## Los cuatro controles

### 1. Una base de conocimiento corta y verificada

Dale al bot solo los documentos que tú puedes respaldar: precios vigentes, horarios, política de devoluciones, plazos de entrega. La [documentación de Anthropic](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) recomienda indicar al modelo que use únicamente la información de los documentos aportados y no su conocimiento general. Dos reglas prácticas:

- **Un solo dato, un solo lugar.** Si el precio aparece en tres documentos, un día será distinto en uno.
- **Fecha y responsable.** Cada documento lleva la fecha de la última revisión y quién lo mantiene.

### 2. Permiso explícito para decir "no sé"

La misma guía de Anthropic recomienda dar permiso explícito al modelo para admitir incertidumbre. Pone como ejemplo una instrucción para responder que no tiene información suficiente. En una pyme, la instrucción puede ser parecida a esta:

> Responde solo con los documentos adjuntos. Si la respuesta no está ahí, di: "No tengo ese dato. Te paso con una persona del equipo."

La guía también sugiere pedirle que respalde cada afirmación con una cita del documento y que retire la que no pueda respaldar. Si tu plataforma permite mostrar la fuente de cada respuesta, actívalo.

### 3. Límites claros de alcance

Define una lista corta de lo que el bot puede hacer y una lista de lo que nunca hace. Una propuesta de punto de partida:

| Puede | No debe |
|---|---|
| Informar horarios, ubicación y pasos de un trámite | Prometer descuentos, reembolsos o excepciones |
| Consultar el estado de un pedido si está conectado a tu sistema | Dar consejos legales, médicos o financieros |
| Recoger los datos del caso para una persona | Pedir contraseñas o datos de pago por chat |
| Explicar la política escrita de devoluciones | Interpretar o "mejorar" esa política |

Las promesas de dinero son el riesgo mayor, porque son las que acabaron en el caso Moffatt.

### 4. Escalamiento a una persona

Define de antemano cuándo el bot deja de responder y transfiere. Reglas simples:

1. El cliente pide hablar con una persona (en cualquier momento, sin trampas).
2. El tema es dinero, plazos, cancelaciones, quejas o datos personales.
3. El bot responde "no sé" dos veces seguidas.
4. El cliente muestra enojo o repite la pregunta.

Al transferir, el bot debe pasar el resumen del caso, para que el cliente no repita todo. Si no tienes a nadie que atienda en horario, el bot debe decirlo y ofrecer un correo o un formulario con una promesa de plazo que sí puedas cumplir.

## Una prueba de 20 preguntas que puedes repetir

Este es un método que proponemos; no es un estándar ni lo probamos en una herramienta concreta. Funciona para cualquier bot.

1. **Escribe 20 preguntas.** Mezcla: 10 con respuesta en tus documentos, 5 cuya respuesta no está y 5 que intentan sacar al bot de su alcance ("¿me devuelven el dinero si ya pasaron 90 días?", "dame un descuento del 50 %").
2. **Define la respuesta correcta antes de probar.** Para las 5 sin respuesta, lo correcto es "no sé" y transferir.
3. **Prueba y anota.** Marca cada respuesta como correcta, incorrecta o inventada. Una respuesta inventada es la que suena segura y no está en tus documentos.
4. **Repite cada vez que cambies documentos o instrucciones.** La [guía de Anthropic](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) también sugiere ejecutar el mismo prompt varias veces y comparar: si las respuestas cambian, puede haber una alucinación.
5. **Fija un umbral.** Por ejemplo, no activar el bot al público si inventa en alguna de las 15 preguntas de control. El umbral lo decides tú; no hay una cifra estándar.

Haz la prueba con preguntas reales: revisa tu bandeja de correo, WhatsApp y llamadas de las últimas semanas.

## Lo que no está demostrado

- **Que un buen prompt elimine las invenciones.** Anthropic dice lo contrario: las técnicas reducen, no eliminan. Valida siempre lo crítico.
- **Que un aviso legal te libere.** El tribunal del caso Moffatt no aceptó que el bot fuera una entidad separada. No sabemos cómo lo tratarían en tu país. Consulta a un abogado local.
- **Que haya una cifra fiable de cuánto baja el error cada control.** No encontramos una fuente que lo mida para pymes, así que no ponemos porcentajes.

## Preguntas frecuentes

### ¿Puede un chatbot de IA dejar de inventar por completo?

No. Ni siquiera con documentos propios. La guía oficial de Anthropic afirma que sus técnicas reducen las alucinaciones, pero no las eliminan, y pide validar la información crítica. Por eso conviene el escalamiento a una persona.

### ¿Qué hago si el bot ya dio una respuesta incorrecta a un cliente?

Corrige al cliente cuanto antes y por escrito, guarda la conversación y revisa de dónde salió el error: un documento desactualizado, una pregunta fuera de alcance o una instrucción floja. Añade esa pregunta a tu prueba de 20. Si hubo dinero de por medio, decide con una persona de tu equipo, no con el bot.

### ¿Soy responsable de lo que dice mi chatbot?

En el caso Moffatt, un tribunal de Canadá dijo que sí, y que el bot es parte de la web de la empresa. Esa decisión no obliga en Colombia ni en otros países. La regla práctica es trabajar como si el cliente pudiera reclamarte lo que el bot le dijo.

### ¿Necesito programar para esto?

No necesariamente. Muchas plataformas de atención permiten cargar documentos, escribir instrucciones y definir reglas de transferencia sin código. Revisa la documentación de la herramienta que uses: cada una tiene funciones distintas y aquí no probamos ninguna.

## Dónde seguir

Si aún no eliges herramienta, lee [asistentes de IA para atención al cliente: qué pueden y qué no](/blog/asistentes-ia-atencion-cliente-que-pueden/). Si tu bot atiende por mensajería, mira [cómo automatizar WhatsApp e Instagram en una pyme](/blog/automatizar-whatsapp-instagram-pyme-herramientas-limites/). Y antes de cargar datos de clientes, revisa [privacidad al usar IA en el trabajo](/blog/privacidad-ia-trabajo-que-datos-no-compartir/).

## Fuentes

- [Reduce hallucinations (documentación de Anthropic). Anthropic vende Claude, así que tiene interés comercial](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)
- [Why Language Models Hallucinate (Kalai, Nachum, Vempala y Zhang, arXiv, septiembre de 2025). Parte de los autores es de OpenAI](https://arxiv.org/abs/2509.04664)
- [Moffatt v. Air Canada: A Misrepresentation by an AI Chatbot (Barry Sookman, 16 de febrero de 2024)](https://barrysookman.com/2024/02/16/moffatt-v-air-canada-a-misrepresentation-by-an-ai-chatbot/)
- [BC Tribunal Confirms Companies Remain Liable for AI Chatbot-Created Information (Torkin Manes)](https://www.torkin.com/insights/publication/bc-tribunal-confirms-companies-remain-liable-for-ai-chatbot-created-information)
