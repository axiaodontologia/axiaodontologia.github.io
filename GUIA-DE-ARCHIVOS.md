# Guía de fotos y videos — Axia Odontología

Dónde va cada archivo y cómo se debe llamar.

---

## Las dos carpetas que importan

```
C:\Users\Admin\Desktop\axia odonotlogia\
│
├── _entrada\            ← AQUÍ SUELTAS TÚ LOS ORIGINALES
│   ├── fotos\              tal como salen de la cámara (DSC01234.JPG, 6 MB)
│   └── videos\             tal como salen de edición (VIDEO FINAL.mp4, 150 MB)
│
└── public\assets\       ← AQUÍ QUEDAN YA OPTIMIZADOS (no tocar a mano)
    ├── images\
    └── video\
```

**No tienes que renombrar ni comprimir nada.** Suelta los originales en `_entrada\`,
dime a qué sección va cada uno, y yo los optimizo y los dejo con el nombre
correcto en `public\assets\`. Una foto de 6 MB termina pesando unos 40 KB.

`_entrada\` no se sube al repositorio ni a la web: es solo el buzón de entrega.

---

## Reglas de nombre

Si prefieres nombrarlos tú, estas son las reglas. Valen para fotos y videos.

| Regla | Sí | No |
|---|---|---|
| Todo en minúscula | `implantes-dentales.webp` | `Implantes Dentales.webp` |
| Guiones, nunca espacios | `diseno-de-sonrisa.webp` | `diseno de sonrisa.webp` |
| Sin tildes ni eñes | `diseno-de-sonrisa.webp` | `diseño-de-sonrisa.webp` |
| Describe el contenido | `recepcion-axia-barranquilla.webp` | `foto1.webp` · `IMG_2847.webp` |
| Sin fechas ni versiones | `ortodoncia-barranquilla.webp` | `ortodoncia-v2-final-OK.webp` |

**Por qué sin tildes ni espacios:** el nombre del archivo termina siendo parte de
la URL. `diseño de sonrisa.webp` se convierte en `dise%C3%B1o%20de%20sonrisa.webp`,
que se rompe en algunos servidores y se ve mal cuando alguien comparte el enlace.

**Por qué el nombre describe el contenido:** Google lee el nombre del archivo como
señal de qué muestra la imagen. `DSC01153.JPG` no le dice nada; `ortodoncia-barranquilla.webp`
sí. Por eso varios llevan "barranquilla" al final — es la búsqueda que interesa.

---

## Dónde va cada cosa

### `images\services\` — las 7 páginas de servicio

Una foto por tratamiento, horizontal. Son los nombres exactos que el código busca:

```
implantes-dentales-barranquilla.webp
diseno-de-sonrisa-barranquilla.webp
ortodoncia-barranquilla.webp
blanqueamiento-dental-barranquilla.webp
limpieza-dental-barranquilla.webp
disfuncion-atm-barranquilla.webp
odontologia-general-barranquilla.webp
```

Formato 3:2 horizontal · 1200 × 800 px · WebP

> Las 7 ya están puestas, pero con fotos clínicas genéricas: un primer plano de
> trabajo que sirve para cualquier tratamiento. Si consigues una foto real de
> cada procedimiento, se reemplazan conservando el mismo nombre y el sitio las
> toma solo.

### `images\clinic\` — la clínica y el equipo

```
axia-espacio-clinica-barranquilla.webp        recepción y sala de espera
axia-unidad-odontologica-barranquilla.webp    consultorio con el sillón
axia-instrumental-bioseguridad.webp           instrumental estéril
axia-sala-atencion-barranquilla.webp          sala de atención (home)
axia-equipo-trabajando-barranquilla.webp      el equipo en acción
```

Cuadradas 1:1 · 1100 × 1100 px · WebP

> **Falta:** una foto del **área de esterilización**. Es la única pieza que el
> recorrido "La clínica por dentro" tiene incompleta, y hoy muestra un bloque
> gris con la leyenda "Fotografía pendiente".
> Nómbrala `axia-area-esterilizacion-barranquilla.webp`.

### `images\team\` — los cinco profesionales

Patrón: `tratamiento-nombre-apellido-especialidad-barranquilla.webp`

```
dr-francisco-diaz-logreira-implantologo-barranquilla.webp
dra-yesmi-molina-rodriguez-odontologia-general-barranquilla.webp
dra-margarita-maldonado-ortodoncista-barranquilla.webp
dra-wendy-collante-mulford-estetica-dental-barranquilla.webp
dr-juan-pablo-ospina-endodoncista-barranquilla.webp
```

Vertical 2:3 · 1024 px de ancho · WebP · encuadre de medio cuerpo, mirada a cámara

### `images\results\` — casos antes y después

**Está vacía a propósito.** Son 7 espacios que hoy muestran "Fotografía pendiente":

```
diseno-de-sonrisa-antes-despues-barranquilla.webp     home, 4:5 vertical
implantes-dentales-antes-despues-barranquilla.webp    home, 4:5 vertical
ortodoncia-antes-despues-barranquilla.webp            home, 4:5 vertical

caso-diseno-sonrisa-01-antes-despues.webp             galería, 4:3 horizontal
caso-implantes-01-antes-despues.webp                  galería, 4:3 horizontal
caso-ortodoncia-01-antes-despues.webp                 galería, 4:3 horizontal
caso-blanqueamiento-01-antes-despues.webp             galería, 4:3 horizontal
```

> ⚠️ **Ninguna de estas se publica sin autorización escrita del paciente**
> (Ley 1581 de 2012 y Decreto 1377 de 2013). Cuando me pases una, dime que la
> autorización existe y en qué caso; si no, se queda en "pendiente".
>
> Para numerar más casos: `caso-ortodoncia-02-antes-despues.webp`, `-03`, etc.

### `images\blog\` — portada de cada artículo

El nombre del archivo tiene que ser **igual al slug del artículo**:

```
cuanto-duran-los-implantes-dentales.webp
tipos-de-ortodoncia.webp
que-es-un-diseno-de-sonrisa.webp
cada-cuanto-limpieza-dental.webp
```

Formato 3:2 horizontal · 1200 × 800 px · WebP

> Si escribes un artículo nuevo, su portada se llama igual que la URL del
> artículo. Si la URL es `/blog/implantes-o-puente`, la foto es
> `implantes-o-puente.webp`.

### `images\hero\` y `images\experiencia\`

```
hero\odontologia-barranquilla-axia-poster.webp    fotograma de fondo del hero
experiencia\poster-testimonio-paciente.webp       portada del video de la paciente
experiencia\poster-dra-yesmi.webp                 portada del video de la doctora
```

Los pósters son el primer fotograma que se ve antes de darle play. Los genero yo
a partir del video, no hay que entregarlos aparte.

### `video\` — los videos del sitio

```
axia-hero-bg.mp4                 fondo del hero · horizontal · SIN audio · en bucle
testimonio-paciente-axia.mp4     testimonio · vertical 9:16 · con audio
dra-yesmi-paciente-axia.mp4      atención en consulta · vertical 9:16 · con audio
```

**Entrégalos en la máxima calidad que tengas.** Yo los comprimo. Los dos
testimonios pasaron de 145 MB y 84 MB a 8,5 MB y 6,1 MB sin pérdida visible.

Dos cosas sobre el video de fondo del hero:

- **Va sin audio** y arranca solo. Los navegadores bloquean el autoplay con
  sonido, así que la pista se elimina en la compresión.
- **Que funcione en bucle**: el final debe poder empalmar con el principio sin
  un corte brusco, porque se repite indefinidamente.

### `logos\`

```
axia-odontologia-logo-negro.png     sobre fondo claro
axia-odontologia-logo-blanco.png    sobre fondo oscuro
axia-odontologia-logo-arena.png     sobre fondo de color
```

> Están en PNG, que es lo correcto si llevan transparencia. Si tienes el logo
> en **SVG** (vectorial, el archivo de Illustrator exportado), pásamelo: pesa
> menos y se ve nítido en cualquier pantalla, incluso en retina.

---

## Formatos: qué entregar

| Tipo | Entrégame | Queda publicado como |
|---|---|---|
| Fotos | JPG o PNG original, sin tocar | `.webp` |
| Logos | SVG, o PNG con transparencia | `.svg` / `.png` |
| Videos | MP4 en máxima calidad | `.mp4` comprimido |

**WebP** pesa entre un 25% y un 35% menos que JPG con la misma calidad. Como el
sitio tiene muchas fotos, esa diferencia decide si carga rápido en el celular de
un paciente con mala señal — que es como va a entrar la mayoría.

---

## Dos cosas que conviene saber

**La rotación de las fotos engaña.** Las de la cámara se guardan como 6000 × 4000
pero muchas son verticales en realidad: traen una marca interna de rotación. Por
eso un recorte automático a formato horizontal puede cortar la cara del
profesional y dejar solo manos. Si una foto es vertical, mejor destinarla a un
espacio vertical (equipo, resultados) que a uno horizontal (servicios, blog).

**No borres lo que ya está.** Si reemplazas una foto, usa **exactamente el mismo
nombre** y el sitio la toma sola, sin tocar código. Si le cambias el nombre, el
espacio queda vacío hasta que actualicemos la referencia.

---

## Pendientes a hoy

1. **Foto del área de esterilización** — única pieza que falta del recorrido de la clínica.
2. **Casos antes/después** — 7 espacios vacíos, todos sujetos a autorización escrita del paciente.
3. **Fotos reales por tratamiento** — las 7 actuales son tomas clínicas genéricas.
4. **Logo en SVG** — si existe el vectorial.
