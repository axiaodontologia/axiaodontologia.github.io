# Axia Odontología — sitio web

Rediseño completo del sitio de Axia Odontología (Barranquilla, Colombia).

Este repositorio contiene dos cosas:

1. **`Axia Odontologia.dc.html`** — el diseño completo del sitio, navegable, con las 18 rutas, todo el copy final, la metadata y el JSON-LD por página. Es la fuente de verdad de diseño y contenido.
2. **La capa técnica** — endpoint de formulario, plantillas de email, sitemap, robots, variables de entorno y esta documentación, listos para montarse sobre Astro.

---

## Tecnología elegida: Astro

**Por qué Astro y no Next.js ni HTML suelto.**

| Criterio | Astro | Next.js | HTML plano |
|---|---|---|---|
| SEO | HTML estático puro por defecto, cero JS en el cliente | SSR/SSG, pero arrastra el runtime de React | Bien, pero sin metadata programática |
| Performance | Islands: solo hidrata lo que lo necesita (menú móvil, formulario) | Hidrata toda la página | Óptimo pero no escala |
| Contenido | Content Collections tipadas: un `.md` por artículo y por servicio | Requiere montar MDX o un CMS | Copiar y pegar 7 veces |
| Mantenimiento | Añadir un servicio = un archivo Markdown | Componente + ruta + tipos | Duplicar HTML |
| Deploy | Estático a Vercel/Netlify/Cloudflare, funciones aparte | Necesita runtime Node | Cualquier hosting |

Este sitio es 95 % contenido y 5 % interacción (menú, formulario, acordeón de FAQ). Next.js pagaría el peso de React en todas las páginas para no usarlo. Astro entrega HTML plano — que es exactamente lo que Google indexa mejor y lo que gana los Core Web Vitals — y deja el JavaScript solo donde hace falta.

### Estructura propuesta

```
axia-odontologia/
├── public/
│   ├── assets/
│   │   ├── images/{hero,services,team,clinic,results,blog}/
│   │   ├── icons/  logos/  fonts/
│   ├── favicon.ico  robots.txt
├── src/
│   ├── components/    Header, Footer, WhatsAppFloat, MobileCTA, ServiceCard,
│   │                  FAQAccordion, ContactForm, Breadcrumbs, Seo, Reveal
│   ├── sections/      Hero, TrustBar, ServicesGrid, Results, Team, BlogTeaser, CtaBand
│   ├── layouts/       BaseLayout.astro, ServiceLayout.astro, ArticleLayout.astro
│   ├── content/       services/*.md   blog/*.md      (Content Collections)
│   ├── pages/         index, nosotros, resultados, contacto, 404,
│   │                  servicios/index + [slug], blog/index + [slug], sitemap.xml.ts
│   ├── config/        site.ts  (NAP, WhatsApp, redes, analytics ids)
│   ├── utils/         whatsapp.ts  analytics.ts  schema.ts
│   └── styles/        tokens.css  base.css
├── api/contact.js
├── emails/contact-template.js
├── .env.example  .gitignore  SEO-CHECKLIST.md  DIAGNOSTICO.md  README.md
```

---

## Instalación

```bash
npm create astro@latest axia-odontologia
cd axia-odontologia
npm install
npm install resend
cp .env.example .env      # y rellena los valores
```

## Desarrollo

```bash
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve el build
```

Para ver el diseño entregado, abre `Axia Odontologia.dc.html` en el navegador.

---

## Variables de entorno

| Variable | Para qué | Obligatoria |
|---|---|---|
| `RESEND_API_KEY` | Enviar el formulario. **Solo en el servidor.** | sí |
| `FROM_EMAIL` | Remitente verificado en Resend | sí |
| `CONTACT_EMAIL` | Dónde llegan los contactos | sí |
| `PUBLIC_WHATSAPP_NUMBER` | Número en formato internacional sin +: `573159679895` | sí |
| `PUBLIC_SITE_URL` | Base de canónicas y sitemap | sí |
| `PUBLIC_PHONE` | Teléfono fijo (falta) | no |
| `PUBLIC_GA4_ID` | `G-XXXXXXXXXX` | no |
| `PUBLIC_GTM_ID` | `GTM-XXXXXXX` | no |
| `PUBLIC_META_PIXEL_ID` | Píxel de Meta | no |
| `PUBLIC_GOOGLE_SITE_VERIFICATION` | Meta de verificación de Search Console | no |

Todo lo que empieza por `PUBLIC_` llega al navegador. **`RESEND_API_KEY` no lleva ese prefijo, y no debe llevarlo nunca.** Si la variable está vacía, el script correspondiente simplemente no se carga: la web no se rompe.

## Resend

1. Crea la cuenta en resend.com y **verifica el dominio** `axiaodontologia.com` (registros SPF, DKIM y DMARC en tu DNS). Sin dominio verificado los correos caen en spam.
2. Crea una API key con permiso de solo envío. Pégala en `RESEND_API_KEY`.
3. `FROM_EMAIL` debe usar el dominio verificado: `Axia Odontología <web@axiaodontologia.com>`. No uses gmail como remitente.
4. Añade las variables en el panel de Vercel/Netlify (Environment Variables), no solo en local.
5. El endpoint es `api/contact.js`. Valida y sanitiza en el servidor, aplica honeypot y rate limiting, envía el aviso interno y el acuse de recibo al paciente.
6. Prueba: envía el formulario y revisa el log de Resend.

## Google Analytics 4

1. Crea la propiedad, copia el ID `G-XXXXXXXXXX` en `PUBLIC_GA4_ID`.
2. Los eventos se disparan desde `src/utils/analytics.ts` — una sola función `track(evento, params)`:

| Evento | Cuándo |
|---|---|
| `whatsapp_click` | cualquier CTA de WhatsApp (envía `origen` y `servicio`) |
| `appointment_click` | botón "Agendar mi cita" |
| `contact_form_start` | primer foco en el formulario |
| `contact_form_submit` | envío correcto |
| `phone_click` / `email_click` | clic en teléfono o correo |
| `service_view` | vista de una página de servicio |
| `blog_article_view` | vista de un artículo |

3. En Admin → Eventos, marca `whatsapp_click`, `appointment_click` y `contact_form_submit` **como conversión**.
4. Cada evento manda `servicio`, `origen` y `pagina`, así que en Exploraciones puedes ver qué servicio genera más contactos.

## Google Search Console

1. Entra en search.google.com/search-console → **Añadir propiedad**.
2. Elige **Dominio** (`axiaodontologia.com`) para cubrir www y no-www: se verifica con un registro **TXT** en el DNS. Si no tienes acceso al DNS, usa **Prefijo de URL** y verifica con la meta `google-site-verification` (`PUBLIC_GOOGLE_SITE_VERIFICATION`).
3. Sitemaps → añade `sitemap.xml` → Enviar.
4. Indexación → Páginas: revisa a los 7–15 días qué está indexado y qué excluido, y por qué.
5. Para forzar una página importante: pega la URL en el buscador superior → **Solicitar indexación**. Hazlo con la home y las 7 páginas de servicio, una por una.
6. Vigila Experiencia → Core Web Vitals y Mejoras → Datos estructurados.

No hay ningún ID de Google inventado en el proyecto: todo sale de las variables de entorno.

## Google Tag Manager

Pon el ID en `PUBLIC_GTM_ID`. El contenedor se inyecta solo si la variable existe. Si vas a medir con GTM, evita duplicar: o cargas GA4 directo, o lo cargas desde GTM, no las dos.

## WhatsApp

Un único punto de configuración: `PUBLIC_WHATSAPP_NUMBER`. La utilidad `utils/whatsapp.ts` construye el enlace y el mensaje precargado según el origen, así que el equipo sabe de qué página viene cada paciente. Para cambiar el número, cambia la variable de entorno. Nada más.

## GitHub

```bash
git init
git add .
git commit -m "Rediseño completo del sitio de Axia Odontología"
git branch -M main
git remote add origin git@github.com:USUARIO/axia-odontologia.git
git push -u origin main
```

Trabaja en ramas: `git checkout -b feat/blog-implantes`, y abre Pull Request. Verifica que `.env` está en `.gitignore` **antes** del primer commit: `git check-ignore -v .env`. Si alguna vez subes la API key, revócala en Resend inmediatamente — borrarla del repositorio no la invalida.

## Deploy

**Recomendación: Vercel.** Detecta Astro sin configuración, las funciones de `api/` funcionan sin adaptador extra, tiene previews por Pull Request y CDN global con nodo en Suramérica. Netlify y Cloudflare Pages sirven igual; Firebase Hosting exigiría montar las funciones aparte.

1. Vercel → Import Git Repository.
2. Framework: Astro. Build: `npm run build`. Output: `dist`.
3. Pega todas las variables de entorno en Production y Preview.
4. Deploy y prueba el formulario en la URL de Vercel antes de mover el dominio.

## Dominio

1. En Vercel → Domains añade `axiaodontologia.com` y `www.axiaodontologia.com`.
2. Elige **una** versión canónica. Recomendado: `www`, porque es la que ya está indexada.
3. Configura la redirección 301 de `axiaodontologia.com` → `www.axiaodontologia.com`.
4. DNS: `A` de la raíz al IP de Vercel y `CNAME` de `www` a `cname.vercel-dns.com`.
5. Todas las canónicas del sitio usan `PUBLIC_SITE_URL`; cámbiala si eliges no-www.
6. **Redirecciones 301 de las URLs de Wix** — mapea cada URL vieja a la nueva antes de cambiar el DNS, o pierdes el posicionamiento que ya tienes. Exporta la lista desde Search Console (Páginas indexadas) y añádelas en `vercel.json`.

## SEO

Ver `DIAGNOSTICO.md` (qué estaba mal) y `SEO-CHECKLIST.md` (qué revisar antes y después de lanzar).

Arquitectura de clusters:

- **Odontología en Barranquilla** — home + /servicios + /nosotros + /contacto
- **Implantes dentales** — /servicios/implantes-dentales + artículo de duración + artículo de pérdida dental
- **Ortodoncia** — /servicios/ortodoncia + tipos de ortodoncia + duración del tratamiento
- **Diseño de sonrisa** — /servicios/diseno-de-sonrisa + qué es un diseño de sonrisa + /resultados
- **Blanqueamiento** — /servicios/blanqueamiento-dental + cuidados posteriores
- **Salud oral** — /servicios/limpieza-dental + /servicios/atm + /servicios/odontologia-general + artículos de prevención

Cada artículo enlaza al servicio de su cluster, y cada servicio enlaza a dos servicios hermanos. Ninguna página queda aislada.

---

## Cómo mantener el sitio

### Añadir un servicio
Crea `src/content/services/nuevo-servicio.md` con el frontmatter (`title`, `h1`, `description`, `slug`, `priority`, `related`) y las secciones. La ruta `/servicios/[slug]`, el sitemap, el índice de servicios y el JSON-LD se generan solos.

### Añadir un artículo
Crea `src/content/blog/mi-articulo.md` con `title`, `description`, `date`, `author`, `image`, `cluster`, `relatedService`. Aparece en /blog automáticamente. Escribe para responder una pregunta concreta y enlaza siempre al servicio del cluster.

### Cambiar imágenes
Sustituye el archivo en `public/assets/images/<carpeta>/` conservando el nombre SEO. Exporta en WebP, ancho máximo 1920 px, y actualiza el `alt`. En la maqueta cada hueco de imagen indica el nombre de archivo que espera.

### Cambiar el número de WhatsApp
`PUBLIC_WHATSAPP_NUMBER` en las variables de entorno. Un solo sitio.

### Cambiar el email de contacto
`CONTACT_EMAIL`. El remitente es `FROM_EMAIL` y debe seguir siendo del dominio verificado.

### Cambiar colores
`src/styles/tokens.css`: `--color-primary`, `--color-primary-dark`, `--color-background`, `--color-background-soft`, `--color-text`, `--color-text-muted`, `--color-white`, `--color-border`. Ningún componente escribe un color literal.
