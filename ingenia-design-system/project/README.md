# Ingenia Latam — Design System

**Versión 1.0 · 2026**
**Consultora de negocio, marca y crecimiento** — Perú / Ecuador / Chile

Este design system alimenta la producción de artefactos visuales de Ingenia Latam: presentaciones, informes, la web, mocks y prototipos. Úsalo como fuente única de verdad para logos, tipografía, color, voz y componentes.

---

## Index

| Archivo | Propósito |
|---|---|
| `README.md` | Este documento — fundamentals, voz, foundations, iconografía, manifest |
| `colors_and_type.css` | Variables CSS (color, type, spacing, radii, shadows, motion) + fuentes |
| `SKILL.md` | Front-matter para usar como Claude Agent Skill |
| `fonts/` | TTFs self-hosted: **DM Serif Display** + **Space Grotesk** |
| `assets/` | Logos, isotipos, backgrounds, flechas, asterisks |
| `preview/` | Tarjetas del Design System tab |
| `slides/` | Recreación HTML de la plantilla `Plantilla PPT l INGENIA LATAM.pptx` |
| `ui_kits/web/` | Recreación de la landing actual (mobile + desktop) |

### Fuentes originales
- `uploads/Web_1920x1080.jpg`, `uploads/Web_Ingenia_Mobile.jpg` — web actual ("en CONSTRUCCIÓN. Nuestra forma de trabajar, CAMBIÓ.")
- `uploads/Plantilla PPT l INGENIA LATAM.pptx` — plantilla de presentación corporativa (10 slides)
- `uploads/Fondo_01.jpg` … `Fondo_04.png`, `Fondo.png` — fondos corporativos (blobs naranjas con grain + poster rojo + trayectoria estelar)
- `Claude Context/visual-guidelines.md` — lineamientos previos (ver nota de discrepancia más abajo)

---

## The brand in one paragraph

Ingenia Latam es una consultora de **negocio, marca y crecimiento** con más de 18 años operando en LatAm. La postura editorial es **seca, adulta, sin adornos**: "No hacemos campañas. Diseñamos claridad para que los negocios avancen." El sistema visual vive en la tensión entre un **serif display italic** que dispara palabras-ancla ("CONSTRUCCIÓN", "CAMBIÓ", "18 AÑOS") y una **grotesk mecánica** que ordena todo lo demás. El único color vivo es un **rojo-naranja** que aparece como tipografía, como bloque sólido (poster), o como **gradient blob con grain** flotando sobre papel cálido.

---

## CONTENT FUNDAMENTALS — Voz y tono

### Idioma
**Español neutro LatAm.** Siempre. Nunca mezclar inglés en copy principal (salvo términos técnicos estándar). Usar signos de apertura (`¿`, `¡`). Tildes completas y correctas — es parte del cuidado de marca.

### Persona
- **Voz editorial, no publicitaria.** Suena a editorial de management, no a agencia de publicidad.
- **Primera persona plural ("nosotros")** al hablar de Ingenia. "**Acompañamos**, **diseñamos**, **entendemos**." Nunca "yo" ni "la empresa".
- **Segunda persona informal ("tú" / imperativa)** al interpelar al lector, pero sin forzar cercanía. Raramente usada — Ingenia habla sobre su trabajo, no directamente "contigo".
- **Adulta.** Asume un lector que ya entiende el negocio. No explica obviedades.

### Estructura de una afirmación típica
Oraciones cortas. Puntos. Nada de conectores blandos ("además", "por otro lado"). Un pensamiento por oración. Ejemplos reales:

> "Nuestra nueva web está en **CONSTRUCCIÓN**. Nuestra forma de trabajar, **CAMBIÓ**."
>
> "Después de más de **18 AÑOS** ejecutando comunicación, entendimos algo clave: las marcas no necesitan hacer más. Necesitan decidir mejor."
>
> "Hoy usamos la comunicación como palanca de negocio: para ordenar prioridades, reducir riesgo y sostener crecimiento."
>
> "No hacemos campañas. Diseñamos claridad para que los negocios avancen."

Patrones a copiar:
- **Frase-contraste corta** — afirmación A + *pero* + afirmación B. "No hacemos X. Hacemos Y."
- **Tres verbos en serie** para listar servicios: "ordenar prioridades, reducir riesgo y sostener crecimiento."
- **Una palabra ancla en mayúsculas+serif** dentro del párrafo, funcionando como cita visual.

### Casing
- **Copy principal**: sentence case.
- **Palabras-ancla editoriales**: `UPPERCASE` + DM Serif Display (ver Visual Foundations).
- **Labels / metadatos / países**: `UPPERCASE` + Space Grotesk + tracking `0.14em`.
  Ejemplos: `PERÚ / ECUADOR / CHILE`, `CONSULTORA DE NEGOCIO, MARCA Y CRECIMIENTO`, `DOCUMENTO CONFIDENCIAL l 2026`, `INGENIA / 2026`.
- **Títulos de sección**: sentence case en Space Grotesk, o UPPERCASE+serif para slides poster.

### Puntuación
- Puntos al final de frase, incluso en títulos cortos. ("CAMBIÓ.")
- Comas Oxford: sin obsesión, usarlas si ayudan.
- Separador decorativo: ` / ` con espacios (ej. `PERÚ / ECUADOR / CHILE`, `INGENIA / 2026`).
- **Asterisco** `*` como marca de paso / pie de firma — aparece en triples `* * *` (ver `assets/asterisks-*.png`). Nunca como bullet.
- Evitar emojis. Prohibidos en copy de marca.
- Evitar signos de exclamación. Ingenia no grita.

### Palabras/ideas recurrentes
`claridad · foco · decidir mejor · palanca de negocio · ordenar prioridades · reducir riesgo · sostener crecimiento · gobernar la marca · construir plataformas · no hacemos campañas`

### Palabras/tonos a evitar
"transformar", "revolucionar", "disruptivo", "soluciones 360", "ADN", "partner estratégico", "ecosistema". Suenan a agencia; Ingenia es consultora.

### Vibe general
Editorial de periódico serio + consultora de management + un solo gesto de color cálido que te recuerda que esto es LatAm, no McKinsey.

---

## VISUAL FOUNDATIONS

### Paleta
Un solo color vivo (rojo-naranja) en tres tonos, más neutros cálidos. Nunca mezclar más de 3 saturados por vista.

| Token | HEX | Uso |
|---|---|---|
| `--ingenia-red` | `#ff110a` | Dominante. Bloques poster, titulares, CTAs. Usar una vez por vista. |
| `--ingenia-orange` | `#ff5800` | Soporte. Core del isotipo. Íconos, borders activos. |
| `--ingenia-orange-lt` | `#ff9400` | Highlight. Final de gradiente, badges positivos. |
| `--ink` | `#1a1a1a` | Texto, isotipo negro, chrome. Nunca usar `#000`. |
| `--paper` | `#f4f2ee` | Fondo preferido (cálido, ligeramente beige). |
| `--paper-alt` | `#eeeeee` | Fondo secundario más frío. |
| `--white` | `#ffffff` | Surface alto, texto sobre rojo. |

**Gradiente primario** — `linear-gradient(135deg, #ff110a 0%, #ff5800 55%, #ff9400 100%)`. Usado EN el isotipo y como tipografía destacada; nunca como fondo plano de página.

### Tipografía
**Dos familias. No más.**

1. **DM Serif Display** (Regular). Sólo para palabras ancla en `UPPERCASE`, dentro de párrafos o como poster editorial. Nunca para bloques largos. **No usar la variante Italic** — fuera de sistema.
2. **Space Grotesk** (300 · 400 · 500 · 600 · 700) — TODO lo demás: body, títulos funcionales, UI, labels, KPIs.

**Jerarquía sugerida** (desktop):
- Hero editorial: DM Serif Display 64–96px, UPPERCASE, `line-height: 1.02`, tracking `-0.02em`
- H1 funcional: Space Grotesk 700 · 44px
- H2: Space Grotesk 600 · 32px
- Body: Space Grotesk 400 · 16px · `line-height: 1.55`
- Eyebrow: Space Grotesk 500 · 12px · UPPERCASE · tracking `0.14em`

**Regla editorial clave:** dentro de un párrafo en Space Grotesk, las palabras-ancla se cambian a DM Serif Display UPPERCASE (ver mockups web). Es el "tic" de la marca.

### Fondos y texturas
- **Base:** papel cálido `#f4f2ee` o blanco crudo. Nunca negro (salvo en 1 poster puntual tipo slide 3 "DOCUMENTO CONFIDENCIAL").
- **Blobs naranjas con grain** (`Fondo_01–03.jpg`) — fotografías/renders de formas gradient naranjas borrosas con **grano fílmico visible**. Se usan full-bleed recortados en esquina inferior-derecha. NUNCA recrear con CSS puro; usar las imágenes.
- **Poster split** (`Fondo_04.png`) — pantalla 50/50 papel+rojo sólido con una flecha mínima cruzando la costura. Statement puro.
- **Trayectoria** (`Fondo.png`) — isotipo negro arriba-izq + línea punteada diagonal hacia asteriscos espaciados en la parte inferior. "Plano editorial" minimalista.
- No usar patrones geométricos, no usar fotografía de stock corporativa, no usar gradientes CSS como fondo de página completa.

### Layout
- **Espacio blanco generoso.** La página nunca está llena. Zonas de respiración > densidad.
- **Retícula flexible** — no es un grid de 12 columnas rígido. Texto se apoya a la izquierda (~8-12% de margen), el blob vive a la derecha-abajo.
- **Fixed elements**: el isotipo + wordmark en footer/header, línea inferior `INGENIA / 2026 / INGENIA / 2026 /…` repitiéndose como cinta transportadora, íconos sociales (LinkedIn, Instagram) en top-left con círculo negro.
- **Breakpoints:** mobile 375–430, tablet 768, desktop base 1280, hero 1920.

### Animación
- **Fades y slides** con `cubic-bezier(0.2, 0.7, 0.2, 1)` (`--ease-standard`).
- Duraciones: `120ms` (hover), `200ms` (UI), `320ms` (entrada de elemento), `520ms` (sección completa).
- **Sin bounces ni elastic.** No es playful.
- **Text reveal:** las palabras editoriales pueden aparecer con mask-reveal vertical (200–320ms). Aplicar solo una vez por scroll.
- **Blobs:** drift lento (8–15s loop, `translate` ±10px) — sutil, casi imperceptible.

### Estados interactivos
- **Hover (link)**: texto cambia de `--ink` a `--ingenia-red` en 120ms. Subrayado ya existente en rojo.
- **Hover (button primary red)**: `filter: brightness(0.92)` o fondo `#e8100a`.
- **Hover (button ghost)**: fondo `rgba(255,17,10,0.08)`, border full color.
- **Press**: `transform: translateY(1px)` + `brightness(0.88)`. Sin scale.
- **Focus**: `outline: 2px solid var(--ingenia-red); outline-offset: 3px;`
- **Disabled**: `opacity: 0.4`, cursor `not-allowed`.

### Borders, shadows, corners
- **Corner radius:** 0, 2, 4 u 8px máximo. **Nada de 16px o pills grandes.** Pills `999px` solo para badges cortos.
- **1px hairlines** (`#d9d9d9`) son el separador default. Más expresivo que shadows.
- **Shadows:**
  - `--shadow-1: 0 1px 2px rgba(0,0,0,0.06)` — hover lift mínimo
  - `--shadow-2: 0 2px 12px rgba(0,0,0,0.08)` — cards flotantes
  - `--shadow-3: 0 12px 40px rgba(26,26,26,0.12)` — modales, elementos elevados
- Sin inner shadows. Sin neumorfismo. Jamás.

### Cards
- Fondo `--white` o `--paper-alt`. Radius `8px` máximo. Border `1px solid --hairline` O shadow-2, **nunca ambos**.
- El acento rojo en cards es opcional y **sutil**: un `::before` vertical rojo de 2–3px en el edge superior, o un número grande rojo en DM Serif. **No** left-border color accent (evitar ese trope).

### Transparencia y blur
Usar muy poco. Si se usa:
- Overlays sobre imágenes: `rgba(26,26,26,0.6)` + `backdrop-filter: blur(8px)` para chips/captions.
- Glass panels: no — no encaja con el vocabulario editorial.

### Tono de imagen
Las imágenes del sistema son **cálidas, saturadas en el naranja, fondo papel**. Grano visible. Si hay fotografía (no la hay en este dataset), esperar **piel cálida, luz natural LatAm, sin filtros fríos azulados**. Nunca blanco y negro estricto — siempre con calidez.

---

## ICONOGRAPHY

Ingenia NO usa un set de íconos tradicional como Lucide o Material. El sistema gráfico depende de **3 marcas visuales**:

### 1. Isotipo (el "blob")
La forma orgánica de dos círculos unidos por un puente cóncavo. Viene en tres variantes (ver `/assets`):
- `isotipo-black.png` — negro sólido, uso general
- `logo-full-gradient.png` / `logo-stacked-gradient.png` — versión rellena con el gradiente primario (rojo→naranja→ámbar)
- `isotipo-gray.png` — watermark/ghost

Nunca recortar. Nunca cambiar a colores fuera de la paleta. El gradient es direccional: círculo grande a la izquierda en rojo, chico a la derecha en ámbar.

### 2. Wordmark "ingenia latam"
Custom typeface (no es Space Grotesk). Super-elliptical, bold, con la "g" descendiendo en curva pronunciada, la "l" de "latam" alineada al baseline del grupo "enia". Viene como `logo-full-*.png` (inline con isotipo) y `logo-stacked-*.png` (isotipo arriba, wordmark abajo).

### 3. Asterisco `*`
El ÚNICO "ícono" recurrente del sistema. Forma: 6 puntas cortas tipo "splat", no el asterisco tipográfico. Usado en:
- Triples `* * *` como remate de sección / firma (`asterisks-black.png`, `asterisks-red.png`)
- Solitarios como puntos en la línea-trayectoria (`bg-trajectory.png`, `Fondo.png`)
- En línea con texto como énfasis (`"CONSULTORA DE NEGOCIO, MARCA Y CRECIMIENTO * * *"`)

### Flechas
Flechas minimalistas, linea de 1px, terminación con chevron abierto (`>`). Ver `arrow-horizontal.png` y `arrow-diagonal-down.png`. Estética de "dibujo técnico a mano".

### Íconos sociales
LinkedIn + Instagram aparecen en un círculo negro sólido con glyph blanco. Mantener el círculo a ~32–40px de diámetro. No usar logos oficiales en color.

### Fallback CDN (si se necesitan íconos de UI genéricos)
Para productos internos (dashboards, settings, etc.), usar **Lucide** via CDN como sustituto, stroke 1.5px, color `--ink`. Flaggeado: esto NO es parte del branding público; es solo un puente para prototipos internos.

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

**Regla:** jamás usar emojis en outputs de marca. Jamás recrear el isotipo con SVG a mano — usar las PNGs.

---

## Nota de discrepancia con `Claude Context/visual-guidelines.md`

El archivo previo `visual-guidelines.md` especifica **DM Sans** como font body. Los assets reales entregados (web mockup, PPTX, fonts uploaded) usan **DM Serif Display + Space Grotesk** — que es el pairing real de la marca operando en 2026. **Este design system usa el pairing real.** Si el equipo quiere volver al stack DM Sans para reportes internos, mantener esas reglas en `visual-guidelines.md` solo para dashboards HTML internos, y este sistema para todo lo customer-facing.

---

*Última actualización: 2026 · v1.0*
