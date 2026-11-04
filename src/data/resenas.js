/**
 * Reseñas de Google.
 *
 * Se consultan en tiempo de compilación, no desde el navegador. Dos
 * motivos: la clave de la API no viaja al cliente, y la página no depende
 * de una llamada externa para pintarse.
 *
 * Necesita dos variables de entorno:
 *
 *   GOOGLE_PLACES_API_KEY   clave con la Places API habilitada
 *   GOOGLE_PLACE_ID         identificador del Perfil de Empresa de Axia
 *
 * Sin ellas la función devuelve una lista vacía y la sección muestra el
 * aviso de pendiente. Nunca se inventan reseñas ni calificaciones: además
 * de ser falso, publicar reseñas inventadas infringe las directrices de
 * Google y puede costar el perfil.
 */

const CLAVE = import.meta.env.GOOGLE_PLACES_API_KEY;
const LUGAR = import.meta.env.GOOGLE_PLACE_ID;

/**
 * @returns {Promise<{configurado: boolean, calificacion: number|null,
 *   total: number, resenas: Array, url: string|null, error: string|null}>}
 */
export async function obtenerResenas() {
  const vacio = {
    configurado: false,
    calificacion: null,
    total: 0,
    resenas: [],
    url: null,
    error: null,
  };

  if (!CLAVE || !LUGAR) return vacio;

  try {
    // Places API (New). Se piden solo los campos necesarios: cada campo
    // extra se factura aparte.
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${LUGAR}?languageCode=es`,
      {
        headers: {
          'X-Goog-Api-Key': CLAVE,
          'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri,reviews',
        },
      }
    );

    if (!res.ok) {
      const detalle = await res.text();
      return { ...vacio, error: `La API respondió ${res.status}: ${detalle.slice(0, 160)}` };
    }

    const d = await res.json();

    return {
      configurado: true,
      calificacion: d.rating ?? null,
      total: d.userRatingCount ?? 0,
      url: d.googleMapsUri ?? null,
      error: null,
      resenas: (d.reviews || []).map((r) => ({
        autor: r.authorAttribution?.displayName ?? 'Paciente',
        foto: r.authorAttribution?.photoUri ?? null,
        estrellas: r.rating ?? null,
        texto: r.originalText?.text ?? r.text?.text ?? '',
        fecha: r.relativePublishTimeDescription ?? '',
      })),
    };
  } catch (e) {
    return { ...vacio, error: 'No se pudo consultar la API: ' + e.message };
  }
}
