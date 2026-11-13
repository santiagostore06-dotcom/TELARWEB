---
title: Cómo automatizar las respuestas de WhatsApp e Instagram en una pyme: herramientas y límites
description: Qué puede automatizar gratis una pyme en WhatsApp e Instagram, cuándo hace falta la API, qué cobra Meta desde octubre de 2026 y qué reglas limitan a los bots.
date: 2026-11-13
pilar: pymes
---

> **Respuesta corta:** empieza con lo gratis. La app WhatsApp Business ya trae saludo y mensaje de ausencia automáticos. Pasa a la API (directamente o con una plataforma intermedia) solo cuando varias personas atienden el mismo número o necesitas un bot que tome pedidos. Ten en cuenta dos límites: desde el 1 de octubre de 2026 Meta cobra los mensajes de servicio por encima de 1.000 al mes por número, y en WhatsApp e Instagram un bot solo puede responder dentro de una ventana de 24 horas desde el último mensaje del cliente.

Aviso: Telar no tiene enlaces de afiliado ni acuerdos con Meta ni con ninguna plataforma de mensajería. No probamos estas herramientas para este artículo. Los datos salen de la documentación oficial de Meta y de prensa tecnológica, consultadas el 13 de noviembre de 2026. Meta es la dueña de WhatsApp e Instagram y vende estos servicios, así que tiene interés comercial en cómo los presenta.

## Tres niveles de automatización

Una pyme puede automatizar sus mensajes en tres niveles. Cada uno cuesta más y exige más trabajo que el anterior.

1. **App WhatsApp Business y bandeja de Instagram.** Respuestas automáticas básicas dentro de la propia app. Según [la página oficial de WhatsApp Business](https://whatsappbusiness.com/es-la/products/business-app/), la app permite saludar en cuanto alguien inicia una conversación y responder cuando no estás disponible. Sirve para un negocio con una sola persona atendiendo.
2. **Agente de IA de Meta.** Meta lanzó en todo el mundo su agente de atención al cliente, Meta Business Agent, el 3 de junio de 2026, según [TechCrunch](https://techcrunch.com/2026/06/03/metas-ai-agent-for-whatsapp-business-is-now-available-globally/). El agente responde preguntas, recomienda productos, agenda citas, califica clientes potenciales y pasa la conversación a una persona cuando hace falta. Funciona en WhatsApp y en los mensajes directos de Instagram. Las pymes lo recibirían dentro de algunos niveles de la suscripción WhatsApp Business Premium. Ese artículo no da precios.
3. **API de WhatsApp Business o de mensajes de Instagram.** Conectas el número o la cuenta a una plataforma intermedia, a un CRM o a un flujo propio. Es lo que necesitas si varias personas atienden el mismo número, si quieres un bot propio o si quieres registrar pedidos en otra herramienta. Si vas a armar ese flujo con una plataforma de automatización, revisa [cómo cobran Zapier, Make y n8n](/blog/zapier-make-n8n-como-elegir/) antes de elegir.

## Qué cobra Meta por WhatsApp

La app WhatsApp Business no cobra por mensaje. La API sí. Según [la página de precios de la plataforma de WhatsApp Business](https://developers.facebook.com/docs/whatsapp/pricing):

- Meta cobra por cada mensaje entregado de la empresa al cliente. Los mensajes del cliente a la empresa no se cobran.
- La tarifa depende de la categoría del mensaje (marketing, utilidad, autenticación o servicio) y del país del número que recibe. Colombia tiene tarifa propia y, desde el 1 de abril de 2026, se puede facturar en pesos colombianos.
- Los mensajes de servicio, es decir, las respuestas libres dentro de una conversación abierta, fueron gratis desde noviembre de 2024. **Desde el 1 de octubre de 2026 se vuelven a cobrar.** Cada número tiene 1.000 mensajes de servicio gratis al mes, que no se acumulan.
- Si el cliente llega desde un anuncio que abre WhatsApp y respondes dentro de la ventana de atención, se abre un periodo de hasta 7 días sin cobro de mensajes. Los mensajes del agente de IA de Meta sí se cobran en ese periodo.

No publicamos la tarifa por mensaje para Colombia porque la página oficial la remite a archivos aparte y las cifras de terceros no coinciden entre sí. Si usas una plataforma intermedia, esta suele sumar su propio cobro al de Meta.

## Las reglas que limitan a un bot

**La ventana de 24 horas.** En WhatsApp, un mensaje del cliente abre una ventana de atención de 24 horas que se reinicia cada vez que vuelve a escribir. Dentro de ella puedes responder con texto libre. Fuera de ella solo puedes enviar plantillas, que se cobran según su categoría ([Meta](https://developers.facebook.com/docs/whatsapp/pricing)). En Instagram la regla es parecida. La [política de mensajería de Messenger e Instagram](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview) da 24 horas para responder en la mayoría de los casos, y hasta 7 días cuando el cliente escribe después de tocar un anuncio.

**Respuesta humana tardía.** La misma política permite una etiqueta de agente humano para responder manualmente durante un periodo aparte de 7 días. Está pensada para personas, no para el bot.

**Decir que es un bot.** La política de Meta exige que una conversación automatizada avise que la persona habla con un servicio automático cuando la ley aplicable lo pide: al inicio, después de una pausa larga o cuando pasa de humano a bot. Meta recomienda avisarlo aunque la ley no lo exija ([Meta](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview)).

**Nada de asistentes generales en WhatsApp.** Las [condiciones de Meta para la plataforma de WhatsApp Business](https://www.facebook.com/legal/Meta-Terms-for-WhatsApp-Business-Platform) (sección 4.7, actualizadas el 23 de septiembre de 2026) prohíben que los proveedores de IA usen la plataforma para ofrecer su tecnología cuando la IA es la función principal. Meta decide a su criterio qué cuenta como principal. Un bot que atiende pedidos o dudas de tu negocio no es un asistente general, pero conviene mantenerlo centrado en tu negocio.

## Qué hacer (pasos)

1. **Mide antes de automatizar.** Durante una semana, anota cuántos mensajes llegan por día y cuáles son las cinco preguntas más repetidas. Si son pocas y repetidas, la app gratis basta.
2. **Activa lo gratis primero.** Saludo y mensaje de ausencia con tu horario. Ten a mano un texto listo con las respuestas a las cinco preguntas. Mide cuánto baja el tiempo de respuesta.
3. **Escribe una base de conocimiento corta.** Precios, horarios, envíos, cambios y devoluciones. Un agente de IA, de Meta o de otra plataforma, responde tan bien como esa información. En [qué pueden y qué no los asistentes de IA de atención al cliente](/blog/asistentes-ia-atencion-cliente-que-pueden/) explicamos por qué.
4. **Pasa a la API solo con una razón concreta.** Varias personas en un mismo número, pedidos que deben llegar a otra herramienta o un volumen que ya no se puede atender a mano.
5. **Calcula el costo antes de pasar.** Cuenta cuántas respuestas de servicio envías al mes. Si pasan de 1.000 por número, consulta la tarifa de tu país en la página de Meta y súmale la cuota de la plataforma intermedia.
6. **Deja siempre una salida a una persona.** Configura una palabra o un botón para pedir atención humana, y avisa al inicio que responde un sistema automático.

## Lo que no está demostrado

- **Que un bot venda más.** No encontramos datos independientes sobre cuánto aumentan las ventas de una pyme latinoamericana al automatizar WhatsApp. Las cifras que circulan suelen venir de plataformas que venden la herramienta.
- **Que el agente de Meta esté disponible para todas las cuentas.** El lanzamiento fue anunciado como global, pero no encontramos en fuentes oficiales un precio ni una lista de cuentas habilitadas. Revisa en tu app si ya te aparece.
- **Que los precios de las plataformas intermedias se mantengan.** Varias cambiaron su forma de cobro en 2026. Verifica la página oficial de precios el día que contrates.

## Preguntas frecuentes

### ¿Puedo automatizar WhatsApp gratis?

Sí, con la app WhatsApp Business. Trae saludo y mensaje de ausencia automáticos sin cobro por mensaje. La API, en cambio, cobra por mensaje entregado, y desde el 1 de octubre de 2026 también cobra los mensajes de servicio por encima de 1.000 al mes por número.

### ¿Puedo poner ChatGPT a responder el WhatsApp de mi negocio?

Puedes usar un modelo de IA dentro de un bot que atiende a los clientes de tu negocio. Lo que Meta prohíbe en la plataforma de WhatsApp Business es que un proveedor de IA ofrezca allí su asistente general como producto principal. Mantén el bot centrado en tu negocio y avisa que es automático.

### ¿Cuánto tiempo tengo para responder un mensaje de Instagram con un bot?

Por regla general, 24 horas desde el último mensaje del cliente. Si el cliente escribió después de tocar un anuncio, la ventana puede durar hasta 7 días. Después de eso, una persona puede responder manualmente con la etiqueta de agente humano durante otros 7 días.

### ¿Necesito la API de WhatsApp para una pyme pequeña?

Casi nunca al empezar. La necesitas cuando varias personas atienden un mismo número, cuando quieres conectar los mensajes con un CRM o un sistema de pedidos, o cuando el volumen ya no se puede atender a mano.

## Fuentes

- [Pricing on the WhatsApp Business Platform (Meta for Developers)](https://developers.facebook.com/docs/whatsapp/pricing)
- [Meta Terms for WhatsApp Business Platform, sección 4.7 (Meta)](https://www.facebook.com/legal/Meta-Terms-for-WhatsApp-Business-Platform)
- [Messenger Platform and IG Messaging API Policy Overview (Meta for Developers)](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview)
- [WhatsApp Business app (WhatsApp)](https://whatsappbusiness.com/es-la/products/business-app/)
- [Meta's AI agent for WhatsApp Business is now available globally (TechCrunch, 3 de junio de 2026)](https://techcrunch.com/2026/06/03/metas-ai-agent-for-whatsapp-business-is-now-available-globally/)
