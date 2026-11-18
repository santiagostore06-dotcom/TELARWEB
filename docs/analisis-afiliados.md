# Análisis de afiliados: valor esperado por cada 1.000 visitas (corregido)

Documento interno (no se publica). Preparado por Koda a pedido de Oblivion, 2026-11-17 — versión 2, corrige tres puntos que Oblivion señaló sobre la versión anterior: (1) Systeme.io sí es recurrente, confirmado en systeme.io/affiliate-program ("lifetime recurring, earn every month the referral stays subscribed"); (2) el precio de $39/mes de Manychat no estaba verificado, se marca y se añade un escenario con el tramo más barato; (3) el 8% de conversión se deja como supuesto puro, sin la frase "rango típico citado" que implicaba una fuente que no existía. Base: `docs/MONETIZACION.md` (lista A) del repo TELARWEB, más precios buscados hoy. Todo lo marcado **[SUPUESTO]** sigue sin dato real de Telar (tráfico actual: 0-4 impresiones/día, 0 clics).

## Hallazgo principal

Con tráfico de 0, ningún programa da dinero hoy. El orden que sigue solo sirve para decidir **a cuál afiliado dar prioridad dentro de los artículos ya escritos** en cuanto n8n, Make y Manychat queden aprobados, y como vara de cuántas visitas mensuales *sostenidas* se necesitarían para llegar a 100 USD/mes una vez haya tráfico. La prioridad número uno sigue siendo resolver el TXT de Search Console y ganar tráfico real — esto no cambia con la corrección.

**Cambio principal vs. la versión anterior:** Systeme.io sube del último lugar al tercero, porque su comisión del 60% se repite cada mes que el referido sigue pagando, no es un pago único. Es además el único afiliado ya activo en Telar hoy.

## Supuestos (marcados, sin dato propio todavía)

| Supuesto | Valor usado | Por qué |
|---|---|---|
| Clics al enlace de afiliado por cada 1.000 visitas | 40 (4%) **[SUPUESTO]** | Estimación propia para un artículo comparativo con intención de compra; sin dato propio ni fuente externa |
| De esos clics, % que se vuelve cliente de pago | 8% **[SUPUESTO, sin fuente]** | Cifra elegida por Koda para este ejercicio, no proviene de ningún estudio citado; ver nota de sensibilidad abajo |
| Clientes de pago por cada 1.000 visitas, encaje "Alto" (n8n, Make, Manychat) | 3,2 **[SUPUESTO]** | 40 clics × 8% |
| Clientes de pago por cada 1.000 visitas, encaje "Medio" (ElevenLabs, Systeme.io) | 1,6 **[SUPUESTO]** | La mitad: el público que llega por contenido de automatización para pymes encaja menos con voz IA o con un embudo de cursos |
| Meses promedio que un cliente referido sigue pagando, dentro de la ventana de comisión | 6 de 12 **[SUPUESTO]** | A falta de dato de retención propio; es la mitad de la ventana que paga cada programa |

**Nota de sensibilidad (conversión):** si la conversión real fuera 2% en vez de 8% (una cuarta parte), todos los valores de "clientes por 1.000 visitas" y todos los EV de la tabla siguiente se dividen entre 4. El orden relativo entre programas no cambia. Esto es intencional: el supuesto de 8% es solo una vara para comparar programas entre sí, no una promesa de cuánto va a convertir Telar.

## Precio base de cada plan (buscado hoy, 2026-11-17)

| Programa | Plan usado | Precio | Fuente |
|---|---|---|---|
| n8n Cloud | Starter | €20/mes (≈ $21,60 USD) | [n8n.io/pricing](https://n8n.io/pricing/) |
| Make | Core | ≈ $10/mes (10.000 operaciones) **[NO OFICIAL — la página oficial no mostró cifras al leerla hoy; cifra de agregadores de terceros, verificar en make.com/en/pricing antes de usarla para decidir]** | varios agregadores de terceros, ninguno es la página oficial |
| Manychat | Pro (tramo alto) | $39/mes, hasta 2.500 contactos activos **[NO VERIFICADO — la página pública de precios no cargó hoy; cifra citada por agregadores de terceros, no por manychat.com directamente]** | Centro de ayuda oficial citado por agregadores; no confirmado en la fuente primaria |
| Manychat | tramo de entrada (alternativo) | ≈ $15/mes, ≈500 contactos **[NO VERIFICADO — Oblivion recuerda este tramo pero tampoco pudo confirmarlo hoy por el mismo error de carga]** | sin fuente primaria confirmada |
| ElevenLabs | Creator | $22/mes | [elevenlabs.io/pricing](https://elevenlabs.io/pricing) |
| Systeme.io | Startup | $17/mes | [systeme.io/pricing](https://systeme.io/pricing) |

## Comisión por cliente al mes, y ranking de valor esperado por 1.000 visitas

| Programa | Comisión oficial | Comisión usada | $/mes por cliente | Clientes / 1.000 visitas | EV realista /1.000 visitas (6 de 12 meses) | EV máximo /1.000 visitas (12 de 12 meses) |
|---|---|---|---|---|---|---|
| **Manychat (tramo $39, no verificado)** | 30-50% recurrente 12 meses según volumen | 30% (tramo de entrada, supuesto conservador) | $11,70 | 3,2 | **$224,60** | $449,30 |
| **n8n Cloud** | 30% durante 12 meses | 30% | $6,48 | 3,2 | **$124,42** | $248,83 |
| **Systeme.io** | Recurrente mientras el referido siga suscrito (confirmado en systeme.io/affiliate-program) | 60% | $10,20/mes **(recurrente, no pago único)** | 1,6 | **$97,90** | $195,84 |
| **Manychat (tramo $15, no verificado)** | igual que arriba | 30% | $4,50 | 3,2 | $86,40 | $172,80 |
| **Make** | 35% durante 12 meses | 35% sobre precio no oficial | $3,50 | 3,2 | $67,20 | $134,40 |
| **ElevenLabs** | 22% durante 12 meses (plan no Business/Enterprise) | 22% | $4,84 | 1,6 | $46,46 | $92,93 |

**Orden por valor esperado realista, con la incertidumbre honesta:** si Manychat de verdad asigna a Telar el tramo de $39, el orden es **Manychat > n8n > Systeme.io > Make > ElevenLabs**. Si asigna el tramo de entrada (~$15), el orden es **n8n > Systeme.io > Manychat > Make > ElevenLabs**. No se puede saber cuál aplica hasta que Manychat apruebe la solicitud y confirme el tramo real — por eso la recomendación de contenido (más abajo) ya no asume que Manychat gana sin condición.

## Visitas mensuales sostenidas necesarias para llegar a 100 USD/mes

Asume que hay que acumular clientes activos (con retención de 6 meses) hasta sostener ese ingreso cada mes, no solo un mes bueno. Fórmula: (clientes activos necesarios ÷ 6 meses de retención) ÷ clientes por 1.000 visitas × 1.000.

| Programa | Clientes activos simultáneos necesarios | Visitas mensuales sostenidas necesarias |
|---|---|---|
| **Manychat ($39)** | 9 | **≈ 470/mes** |
| **n8n Cloud** | 16 | ≈ 830/mes |
| **Systeme.io** | 10 | **≈ 1.040/mes** |
| **Manychat ($15)** | 23 | ≈ 1.200/mes |
| **Make** | 29 | ≈ 1.510/mes (cifra de base no oficial) |
| **ElevenLabs** | 21 | ≈ 2.190/mes |

Para contexto: Search Console mide 0-4 impresiones al día hoy, es decir como máximo ≈120 impresiones/mes, y una impresión no es una visita. Todos estos umbrales están lejos; el cuello de botella sigue siendo el tráfico, como ya dijo Oblivion.

## Qué hacer con esto en el contenido

1. **Systeme.io ya está activo hoy** (alta 2026-11-07, método de cobro aún sin configurar según `docs/MONETIZACION.md`). Con la corrección, es el tercer mejor EV y el único que Telar puede insertar ya mismo sin esperar aprobación de nadie. Candidato natural: `programas-afiliados-herramientas-ia-como-elegir.md`, el artículo del pilar Monetización. Antes de insertarlo falta solo configurar el método de cobro (ruta recomendada en `docs/MONETIZACION.md`: PayPal → Bancolombia/Nequi).
2. **`automatizar-whatsapp-instagram-pyme-herramientas-limites.md`** (ya publicado) sigue siendo el lugar natural para el enlace de **Manychat** cuando se apruebe — el tema calza exacto (WhatsApp/Instagram) sin importar qué tramo de precio le asignen.
3. **`zapier-make-n8n-como-elegir.md`** (ya publicado) es donde debería ir **n8n** primero y **Make** después, cuando ambos se aprueben — esto no cambió con la corrección.
4. **ElevenLabs** no tiene todavía un artículo propio con ese encaje; dado su EV más bajo, no urge escribir uno solo para esto.
5. **No asumir que Manychat gana automáticamente.** Hasta que Manychat confirme el tramo real de comisión para Telar, conviene tratar a Manychat y Systeme.io como empate técnico en prioridad, y decidir según cuál se apruebe primero.

## Huecos a verificar antes de decidir con esto

- Precio y tramo de operaciones real de Make Core en la página oficial (hoy no cargó en la lectura automática).
- Tramo de comisión y de precio real que le darán a Telar en Manychat ($39, $15, u otro) una vez aprobado — esta sigue siendo la pregunta más importante del documento, porque decide si Manychat o n8n va primero.
- Tasa de clics y de conversión reales de Telar: los supuestos de este documento (4% CTR, 8% conversión) no tienen todavía ningún dato propio detrás; usar la nota de sensibilidad (÷4 a 2% de conversión) mientras tanto.

## Investigación de competidores

Completada por separado: `docs/investigacion-competidores-geo.md`. Cubre las 25 consultas de `data/geo-queries.csv` (24 relevantes a competidores, la 19 es sobre la marca propia de Telar) con dominios en español que aparecen y formato de página, más los 5 patrones que más se repiten para dárselos al Redactor como objetivos concretos.
