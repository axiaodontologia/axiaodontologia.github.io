/**
 * Fuente única de verdad de los datos de la clínica.
 *
 * Nunca escribir a mano un teléfono, una dirección o una URL dentro de un
 * componente: todo sale de aquí. Así el NAP (nombre, dirección, teléfono)
 * queda idéntico en toda la web, que es lo que Google exige para el SEO
 * local y lo que evita que un dato quede desactualizado en una esquina.
 */

export const SITIO = {
  nombre: 'Axia Odontología',
  nombreLargo: 'Axia Odontología — Clínica odontológica en Barranquilla',
  url: 'https://www.axiaodontologia.com',
  idioma: 'es-CO',

  // NAP — verificado con la clínica
  direccion: {
    calle: 'Cra. 50 #82-235',
    ciudad: 'Barranquilla',
    region: 'Atlántico',
    pais: 'CO',
  },

  whatsapp: '573159679895',
  email: 'axiaodontologia@gmail.com',

  redes: {
    instagram: 'https://www.instagram.com/axiaodontologia',
    tiktok: 'https://www.tiktok.com/@axia.odontologia',
  },

  // PENDIENTE DE CONFIRMAR CON LA CLÍNICA — ver INSTRUCCIONES-AXIA.md §9.
  // Mientras sigan sin verificarse, no se publican como dato duro ni se
  // inyectan en los datos estructurados.
  sinConfirmar: {
    horarios: 'L–V 8:00–18:00, S 8:00–13:00',
    telefonoFijo: null,
    nit: null,
    coordenadas: null,
    perfilGoogle: null,
  },
};

/** Enlace de WhatsApp con mensaje prellenado. */
export const wa = (mensaje) =>
  'https://wa.me/' + SITIO.whatsapp + '?text=' + encodeURIComponent(mensaje);

/** Navegación principal. */
export const NAV = [
  { texto: 'Inicio', url: '/' },
  { texto: 'Nosotros', url: '/nosotros' },
  { texto: 'Servicios', url: '/servicios' },
  { texto: 'Resultados', url: '/resultados' },
  { texto: 'Blog', url: '/blog' },
  { texto: 'Contacto', url: '/contacto' },
];
