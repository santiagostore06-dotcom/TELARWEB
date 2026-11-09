---
title: Zapier, Make o n8n: cómo elegir sin pagar de más en 2026
description: Cómo cobra cada plataforma de automatización, cuánto cuesta un mismo flujo en Zapier, Make y n8n, y qué perfil de pyme encaja con cada una.
date: 2026-11-09
pilar: herramientas
---

> **Respuesta corta:** la diferencia que más pesa no es la lista de integraciones, sino la unidad de cobro. Zapier cobra por cada paso que se ejecuta (tarea), Make por cada acción de módulo (crédito) y n8n por cada ejecución completa del flujo, sin importar cuántos pasos tenga. Un flujo de 5 acciones que corre 500 veces al mes consume 2.500 tareas en Zapier, pero solo 500 ejecuciones en n8n. Elige Zapier si nadie del equipo es técnico, Make si quieres un punto medio visual y n8n si tienes a alguien que pueda mantenerlo.

Aviso: Telar no tiene hoy ningún enlace de afiliado ni acuerdo con estas empresas. No probamos las tres plataformas para este artículo; los datos salen de sus páginas oficiales de precios y documentación, consultadas el 9 de noviembre de 2026. Las tres fuentes principales son los propios proveedores, así que tienen interés comercial en cómo presentan sus planes.

## Qué son y en qué se parecen

Zapier, Make y n8n conectan aplicaciones para que una acción en una dispare otra. Por ejemplo: llega un formulario, se crea un contacto en el CRM y se envía un mensaje al equipo. Las tres tienen plan gratuito y un editor visual que no exige programar.

Se diferencian en tres cosas: cómo cuentan el uso, quién mantiene la infraestructura y qué puedes hacer con la licencia.

## Qué dicen los datos: cómo cobra cada una

### Zapier: cobra por tarea

Según la [página de precios de Zapier](https://zapier.com/pricing), una tarea se consume cada vez que un paso termina con éxito. Los disparadores y las herramientas internas (filtros, rutas, formateo, retrasos) no consumen tareas. Los pasos fallidos tampoco.

- **Gratis:** 100 tareas al mes y solo flujos de dos pasos.
- **Professional:** desde 19,99 dólares al mes con pago anual (29,99 con pago mensual) por 750 tareas.
- **5.000 tareas:** 89 dólares al mes con pago anual, 133,50 con pago mensual.
- **Excedentes:** si activas el pago por tarea extra, se cobra a 1,25 veces la tarifa base en planes anuales y a 2,5 veces en mensuales.

Un detalle útil: algunas acciones cuestan más de una tarea. La misma página indica que una llamada de herramienta por MCP cuenta como 2 tareas.

### Make: cobra por crédito

Según el [centro de ayuda de Make](https://help.make.com/credits), en las aplicaciones sin IA una operación equivale a un crédito. Los créditos reemplazaron a las operaciones como unidad de cobro, y algunos módulos de IA gastan más de un crédito por operación.

La [página de precios de Make](https://www.make.com/en/pricing) confirma que el plan gratuito incluye 1.000 créditos al mes. También indica que los créditos no usados vencen al final del periodo y que, si se acaban, los escenarios se detienen hasta comprar más. Los módulos de enrutamiento y de manejo de errores no consumen créditos.

No pudimos verificar el precio actual de los planes de pago de Make: su página bloqueó la lectura automática y las reseñas de terceros dan cifras distintas entre sí. Por eso no publicamos un precio. Consúltalo directamente antes de decidir.

### n8n: cobra por ejecución

La [página de precios de n8n](https://n8n.io/pricing/) cobra por ejecuciones mensuales, y define una ejecución como una corrida completa del flujo. El número de pasos no cambia la cuenta.

- **Starter:** 20 euros al mes con pago anual, 2.500 ejecuciones y 5 ejecuciones simultáneas.
- **Pro:** 50 euros al mes con pago anual y 10.000 ejecuciones.
- **Business:** 667 euros al mes con pago anual, 40.000 ejecuciones, solo en versión autoalojada.

Además existe una edición comunitaria que puedes instalar en tu propio servidor sin pagar licencia. Pero no es software libre en sentido estricto: su [licencia Sustainable Use](https://github.com/n8n-io/n8n/blob/master/LICENSE.md) permite usarla para fines internos del negocio o personales, y limita su redistribución a casos gratuitos y no comerciales. Si piensas revender n8n como servicio a clientes, revisa la licencia con cuidado.

## El mismo flujo en las tres

Supón un flujo típico de pyme: llega un pedido por formulario y se hacen 5 acciones (crear contacto, crear factura, actualizar inventario, avisar por chat, enviar correo). Corre 500 veces al mes.

| | Unidad | Consumo al mes | Plan que alcanza |
|---|---|---|---|
| Zapier | Tarea por paso | 2.500 tareas (el disparador no cuenta) | Professional de 5.000 tareas: 89 dólares/mes anual |
| Make | Crédito por módulo | Unos 3.000 créditos, contando el módulo de entrada | Supera el plan gratuito; precio de pago no verificado |
| n8n | Ejecución completa | 500 ejecuciones | Starter: 20 euros/mes anual, o autoalojado |

El cálculo de Make es aproximado: depende de cómo esté armado el escenario y de si el módulo de entrada lee datos en cada ciclo. Lo importante es la tendencia: cuantos más pasos tiene un flujo, más se abarata n8n frente a las otras dos.

## Qué hacer: cómo elegir en cinco pasos

1. **Cuenta tus flujos.** Anota cuántas veces corre cada uno al mes y cuántas acciones tiene. Multiplica: eso es tu consumo en Zapier y, de forma aproximada, en Make.
2. **Mira quién lo va a mantener.** Si nadie del equipo sabe de servidores, descarta el n8n autoalojado. La [documentación de n8n](https://docs.n8n.io/hosting/) pide Docker o Node.js y un servidor propio o en la nube.
3. **Revisa las integraciones que de verdad usas.** Las herramientas latinoamericanas (facturación electrónica local, pasarelas de pago regionales) no siempre tienen conector nativo. Comprueba cada una antes de pagar.
4. **Empieza en el plan gratuito.** Construye tu flujo más importante en el plan gratis de dos plataformas y mide el consumo real durante dos semanas.
5. **Calcula el costo a 12 meses con margen.** Suma un 30 % de crecimiento y revisa la tarifa de excedentes. En Zapier, pasarte de tareas con plan mensual cuesta 2,5 veces la tarifa base.

### Qué perfil encaja con cada una

- **Zapier:** equipos sin perfil técnico, pocos flujos y cortos, prioridad en que funcione rápido.
- **Make:** quien quiere ver el flujo como diagrama, con ramas y condiciones, sin administrar servidores.
- **n8n:** flujos largos o de mucho volumen, datos que no deben salir de tu servidor y alguien que pueda mantenerlo.

Si lo que quieres automatizar es la atención al cliente, lee también [qué pueden y qué no los asistentes de IA de soporte](/blog/asistentes-ia-atencion-cliente-que-pueden/). Y si te interesa delegar tareas completas en lugar de pasos fijos, revisa [qué puede hacer un agente de IA en segundo plano](/blog/agente-ia-segundo-plano-claude-duet-pymes/).

## Lo que no está demostrado

- **"Make siempre es el más barato."** Depende del número de módulos por flujo y de los módulos de IA, que gastan más de un crédito. Sin el precio verificado de sus planes, no podemos confirmarlo.
- **"n8n es gratis."** La licencia es gratuita para uso interno, pero el servidor, las copias de seguridad, las actualizaciones y el tiempo de quien lo mantiene cuestan.
- **Comparativas con cifras exactas.** Muchas reseñas en internet repiten precios antiguos o contradictorios. Usa siempre la página oficial del día en que compras.

## Preguntas frecuentes

### ¿Cuál es más barato, Zapier, Make o n8n?

Para flujos con muchos pasos, n8n suele salir más barato porque cobra por ejecución completa y no por paso. Entre los precios que sí verificamos, Zapier es el más caro a volumen. El precio de Make conviene revisarlo en su web el día que compres.

### ¿Puedo usar n8n gratis en mi empresa?

Sí, la edición comunitaria autoalojada se puede usar para fines internos del negocio sin pagar licencia. Pagas el servidor y el mantenimiento. No puedes redistribuirla con fines comerciales sin otra licencia.

### ¿Qué cuenta como una tarea en Zapier?

Cada paso de acción que termina con éxito. El disparador, los filtros, las rutas y las herramientas de formato no cuentan, y los pasos fallidos tampoco.

### ¿Qué pasa si me quedo sin créditos en Make?

Los escenarios se detienen hasta que compres más créditos o empiece el siguiente periodo. Los webhooks entrantes quedan en cola hasta el límite de tu plan.

### ¿Necesito saber programar para usar estas herramientas?

No para Zapier ni Make, ni para la versión en la nube de n8n. Sí necesitas conocimientos técnicos para instalar y mantener n8n en tu propio servidor.

## Fuentes

- [Precios de Zapier (Zapier)](https://zapier.com/pricing)
- [Precios de Make (Make)](https://www.make.com/en/pricing)
- [Créditos y operaciones (centro de ayuda de Make)](https://help.make.com/credits)
- [Precios de n8n (n8n)](https://n8n.io/pricing/)
- [Licencia Sustainable Use de n8n (GitHub)](https://github.com/n8n-io/n8n/blob/master/LICENSE.md)
- [Opciones de autoalojamiento (documentación de n8n)](https://docs.n8n.io/hosting/)
