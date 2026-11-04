/**
 * Los artículos del blog.
 *
 * Extraído literalmente del canvas de diseño (const ARTICLES). El copy está
 * aprobado por la clínica: no se reescribe aquí. Para cambiar un texto,
 * se cambia en este archivo, que es ahora la fuente de verdad.
 */
export const ARTICULOS = [
  {
    slug: 'cuanto-duran-los-implantes-dentales',
    cluster: 'Implantes dentales', service: 'implantes-dentales',
    h1: '¿Cuánto duran los implantes dentales?',
    title: '¿Cuánto Duran los Implantes Dentales? | Axia Odontología',
    desc: 'Cuánto dura un implante dental, de qué depende su duración y qué cuidados lo mantienen sano. Lo explica el equipo de Axia Odontología en Barranquilla.',
    teaser: 'Un implante bien planificado puede acompañarte décadas. Lo que decide su duración no es la marca del titanio: es tu encía, tu higiene y tus controles.',
    author: 'Equipo Axia Odontología', date: '12 de agosto de 2026', iso: '2026-08-12', read: '5 min de lectura',
    imgSrc: '/assets/images/blog/cuanto-duran-los-implantes-dentales.webp',
    img: 'blog/cuanto-duran-los-implantes-dentales.webp',
    waMsg: 'Hola, leí el artículo sobre implantes y quiero agendar una valoración.',
    ctaTitle: 'Valoremos tu caso antes de decidir',
    ctaText: 'Si te falta un diente o estás evaluando un implante, la consulta de diagnóstico te dirá con precisión qué necesitas.',
    sections: [
      {
        h: 'La respuesta corta',
        paras: [
          'El tornillo de titanio que se integra al hueso puede durar toda la vida. La corona que va encima, la parte que se ve y que recibe el desgaste de la masticación, tiene una vida útil más corta: es habitual reemplazarla al cabo de diez o quince años, igual que se reemplaza cualquier restauración.',
          'Es una distinción importante, porque cuando alguien dice que "se le cayó el implante" muchas veces se refiere a la corona, no al implante.'
        ],
        bullets: []
      },
      {
        h: 'De qué depende de verdad',
        paras: ['La duración no la decide el material, sino cuatro factores que se pueden controlar:'],
        bullets: [
          'La salud de la encía alrededor del implante: la periimplantitis es la principal causa de pérdida a largo plazo.',
          'La higiene diaria, incluida la limpieza entre los dientes y alrededor del implante.',
          'La planificación inicial: un implante bien posicionado reparte la carga como debe.',
          'El bruxismo no tratado, que sobrecarga la corona y el hueso de forma continua.'
        ]
      },
      {
        h: 'Qué hacer para que dure',
        paras: [
          'Un implante no se caria, pero la encía que lo rodea sí se inflama. Cepillado dos veces al día, limpieza interdental y controles profesionales periódicos son lo que mantiene ese tejido sano.',
          'Si aprietas los dientes al dormir, una placa de descarga protege tanto la corona del implante como el resto de tu boca. Y el tabaco es un factor de riesgo real: reduce la irrigación de la encía y complica la cicatrización.'
        ],
        bullets: []
      },
      {
        h: 'Señales para volver a consulta',
        paras: ['No esperes a que duela. Pide una cita si notas alguna de estas señales:'],
        bullets: [
          'Sangrado o inflamación de la encía alrededor del implante.',
          'Sensación de movilidad al masticar.',
          'Mal olor persistente en esa zona.',
          'La corona se siente más alta o más baja que antes.'
        ]
      }
    ],
    faqs: [
      { q: '¿El implante se puede caer?', a: 'Es poco frecuente si estaba bien planificado, pero puede perderse por periimplantitis avanzada, sobrecarga o pérdida de hueso. Casi siempre hay señales previas: por eso importan los controles.' },
      { q: '¿La corona del implante se mancha?', a: 'El material cerámico es más estable al color que el diente natural, pero puede acumular pigmentación superficial. Una limpieza profesional lo resuelve.' },
      { q: '¿Necesito controles especiales por tener un implante?', a: 'Necesitas los mismos controles periódicos que cualquier paciente, con una revisión específica del tejido alrededor del implante y de la radiografía de la zona.' }
    ],
    related: ['tipos-de-ortodoncia', 'cada-cuanto-limpieza-dental']
  },
  {
    slug: 'tipos-de-ortodoncia',
    cluster: 'Ortodoncia', service: 'ortodoncia',
    h1: '¿Qué tipos de ortodoncia existen y cuál me conviene?',
    title: 'Tipos de Ortodoncia: Brackets y Alineadores | Axia Odontología',
    desc: 'Brackets metálicos, estéticos, linguales y alineadores transparentes: en qué se diferencian y cuál conviene según el caso. Guía de Axia Odontología, Barranquilla.',
    teaser: 'Metálicos, estéticos, linguales o alineadores. La diferencia no está solo en cómo se ven: está en qué movimientos puede controlar cada sistema.',
    author: 'Equipo Axia Odontología', date: '5 de agosto de 2026', iso: '2026-08-05', read: '6 min de lectura',
    imgSrc: '/assets/images/blog/tipos-de-ortodoncia.webp',
    img: 'blog/tipos-de-ortodoncia.webp',
    waMsg: 'Hola, leí el artículo sobre tipos de ortodoncia y quiero una valoración.',
    ctaTitle: '¿Cuál de estos sistemas necesita tu caso?',
    ctaText: 'La respuesta sale de un diagnóstico, no de una comparación general. Agenda tu valoración de ortodoncia.',
    sections: [
      {
        h: 'Brackets metálicos',
        paras: [
          'Son los más usados y los más versátiles: permiten controlar prácticamente cualquier movimiento, incluidos los casos complejos. Se fijan a la cara externa del diente y suelen ser la opción más económica.',
          'Su desventaja es visible, literalmente. En adolescentes rara vez es un problema; en adultos con exposición pública pesa más.'
        ],
        bullets: []
      },
      {
        h: 'Brackets estéticos',
        paras: [
          'Funcionan igual que los metálicos, pero están hechos de cerámica o materiales del color del diente, así que se notan mucho menos a distancia conversacional.',
          'Requieren algo más de cuidado con pigmentos como el café, el vino y el cigarrillo, y su costo es mayor.'
        ],
        bullets: []
      },
      {
        h: 'Alineadores transparentes',
        paras: [
          'Son férulas removibles que se cambian cada una o dos semanas y van moviendo los dientes de forma progresiva. Se quitan para comer y para cepillarse, lo que facilita mucho la higiene.',
          'Tienen dos condiciones. La primera es la disciplina: hay que usarlos alrededor de 22 horas al día, y si no se cumplen, el tratamiento se atrasa. La segunda es clínica: hay movimientos complejos que se controlan mejor con brackets.'
        ],
        bullets: []
      },
      {
        h: 'Cómo se elige, en la práctica',
        paras: ['El sistema se decide cruzando cuatro cosas:'],
        bullets: [
          'La complejidad del caso: qué movimientos hay que lograr y con cuánta precisión.',
          'Tu edad y si el hueso todavía está en crecimiento.',
          'Tu disposición real a cumplir con las horas de uso, si eliges alineadores.',
          'El presupuesto y la duración estimada de cada alternativa.'
        ]
      }
    ],
    faqs: [
      { q: '¿Los alineadores son más rápidos que los brackets?', a: 'No por sí mismos. En casos leves pueden ir parejo o algo más rápido; en casos complejos los brackets suelen ser más eficientes. La velocidad depende del caso, no del sistema.' },
      { q: '¿Puedo cambiar de sistema a mitad del tratamiento?', a: 'En algunos casos sí, y de hecho hay tratamientos combinados que empiezan con brackets y terminan con alineadores. Es una decisión clínica, no comercial.' },
      { q: '¿La ortodoncia en adultos funciona igual?', a: 'Sí, el diente se mueve a cualquier edad. Lo que cambia es que hay que evaluar antes el estado de las encías y del hueso, y que los movimientos suelen tomar algo más de tiempo.' }
    ],
    related: ['que-es-un-diseno-de-sonrisa', 'cuanto-duran-los-implantes-dentales']
  },
  {
    slug: 'que-es-un-diseno-de-sonrisa',
    cluster: 'Diseño de sonrisa', service: 'diseno-de-sonrisa',
    h1: '¿Qué es un diseño de sonrisa y qué incluye?',
    title: '¿Qué es un Diseño de Sonrisa? | Axia Odontología Barranquilla',
    desc: 'Qué es un diseño de sonrisa, qué tratamientos puede incluir y por qué la planificación va antes que las carillas. Explicado por Axia Odontología en Barranquilla.',
    teaser: 'No es un tratamiento: es una planificación. Y de eso depende que el resultado se vea natural o se note desde lejos.',
    author: 'Equipo Axia Odontología', date: '29 de julio de 2026', iso: '2026-07-29', read: '5 min de lectura',
    imgSrc: '/assets/images/blog/que-es-un-diseno-de-sonrisa.webp',
    img: 'blog/que-es-un-diseno-de-sonrisa.webp',
    waMsg: 'Hola, leí el artículo de diseño de sonrisa y quiero agendar una valoración.',
    ctaTitle: 'Empecemos por el diagnóstico, no por las carillas',
    ctaText: 'En la consulta revisamos tu salud oral, tomamos registros y te mostramos qué es posible en tu caso.',
    sections: [
      {
        h: 'La confusión más común',
        paras: [
          'Mucha gente usa "diseño de sonrisa" como sinónimo de carillas. No es lo mismo. Las carillas son uno de los tratamientos posibles; el diseño es el plan que decide si hacen falta, cuántas y de qué forma.',
          'Saltarse el diseño e ir directo a las carillas es la razón por la que algunos resultados se ven artificiales: dientes todos iguales, demasiado blancos y con una forma que no corresponde al rostro.'
        ],
        bullets: []
      },
      {
        h: 'Qué se analiza en un diseño',
        paras: ['El diseño trabaja con parámetros medibles, no con gustos vagos:'],
        bullets: [
          'La proporción entre el ancho y el alto de cada diente frontal.',
          'La línea media dental y su relación con la línea media de la cara.',
          'Cuánto diente y cuánta encía se ven al sonreír y al hablar.',
          'El color, la translucidez y la textura del esmalte natural.',
          'La mordida y la presencia de desgaste o bruxismo.'
        ]
      },
      {
        h: 'Qué tratamientos puede incluir',
        paras: [
          'Según el diagnóstico, un diseño puede resolverse con blanqueamiento y ajustes de forma mínimos, o requerir ortodoncia previa para ordenar los dientes antes de cualquier trabajo estético.',
          'Otros casos necesitan carillas, coronas, tratamiento de encías o rehabilitación de dientes muy desgastados. La lista sale del plan; no se define de antemano.'
        ],
        bullets: []
      },
      {
        h: 'Por qué la salud va primero',
        paras: [
          'No se diseña una sonrisa sobre encías inflamadas, caries activas o una mordida que sobrecarga los dientes. El resultado estético duraría poco y el problema de fondo seguiría avanzando por debajo.',
          'Por eso la primera fase de todo diseño de sonrisa es, sin excepción, poner la boca en salud.'
        ],
        bullets: []
      }
    ],
    faqs: [
      { q: '¿Un diseño de sonrisa siempre incluye carillas?', a: 'No. Hay casos que se resuelven con blanqueamiento, ajustes de forma y tratamiento de encías. Las carillas se indican cuando el diseño planificado no se puede alcanzar de otra forma.' },
      { q: '¿Se puede hacer si tengo los dientes torcidos?', a: 'Sí, pero normalmente conviene alinear primero con ortodoncia. Corregir con carillas lo que se corrige moviendo dientes obliga a desgastar más esmalte del necesario.' },
      { q: '¿Cuánto se blanquean los dientes en un diseño?', a: 'Hasta donde sea creíble para tu rostro y tu edad. El objetivo es un blanco natural, no el máximo posible de la escala.' }
    ],
    related: ['tipos-de-ortodoncia', 'cada-cuanto-limpieza-dental']
  },
  {
    slug: 'cada-cuanto-limpieza-dental',
    cluster: 'Salud oral', service: 'limpieza-dental',
    h1: '¿Cada cuánto se recomienda una limpieza dental?',
    title: '¿Cada Cuánto Hacerse una Limpieza Dental? | Axia Odontología',
    desc: 'Cada cuánto hacerse una limpieza dental profesional, por qué el cepillado no reemplaza la profilaxis y qué señales indican que ya la necesitas.',
    teaser: 'Cada seis meses es la referencia general, pero no aplica igual a todo el mundo. Estas son las señales que mandan sobre el calendario.',
    author: 'Equipo Axia Odontología', date: '22 de julio de 2026', iso: '2026-07-22', read: '4 min de lectura',
    imgSrc: '/assets/images/blog/cada-cuanto-limpieza-dental.webp',
    img: 'blog/cada-cuanto-limpieza-dental.webp',
    waMsg: 'Hola, quiero agendar una limpieza dental en Axia Odontología.',
    ctaTitle: 'Agenda tu limpieza y control',
    ctaText: 'Una profilaxis a tiempo evita tratamientos mucho más largos y costosos. Escríbenos y coordinamos tu cita.',
    sections: [
      {
        h: 'La referencia general y sus excepciones',
        paras: [
          'Para la mayoría de personas con encías sanas, dos limpiezas profesionales al año son suficientes. Es una referencia, no una regla universal.',
          'Hay perfiles que necesitan intervalos más cortos, de tres o cuatro meses: pacientes con antecedentes de enfermedad periodontal, fumadores, personas con ortodoncia fija, diabéticos y quienes acumulan cálculo con mucha facilidad.'
        ],
        bullets: []
      },
      {
        h: 'Por qué el cepillado no es suficiente',
        paras: [
          'El cepillado y el hilo dental controlan la placa blanda, que es la que se puede remover en casa. Pero parte de esa placa se mineraliza y se convierte en cálculo, una capa dura adherida al diente que ningún cepillo remueve.',
          'Ese cálculo es una superficie rugosa donde la bacteria se acumula con más facilidad, e irrita la encía de forma continua. Removerlo es exactamente lo que hace la profilaxis profesional.'
        ],
        bullets: []
      },
      {
        h: 'Señales de que ya la necesitas',
        paras: ['Si reconoces alguna de estas, no esperes a cumplir los seis meses:'],
        bullets: [
          'Te sangran las encías al cepillarte.',
          'Notas una capa áspera o amarillenta cerca del borde de la encía.',
          'Mal aliento que no se va con el cepillado.',
          'Sientes las encías inflamadas o más sensibles de lo normal.',
          'Hace más de un año de tu última limpieza.'
        ]
      },
      {
        h: 'Qué esperar de la cita',
        paras: [
          'Una limpieza profesional no es solo remover cálculo. Incluye la revisión de todos los dientes y del estado de las encías, que es la forma más económica de detectar una caries pequeña antes de que se convierta en un tratamiento mayor.',
          'La molestia es mínima y, si hay sensibilidad marcada o inflamación importante, se maneja en la misma cita.'
        ],
        bullets: []
      }
    ],
    faqs: [
      { q: '¿La limpieza dental daña el esmalte?', a: 'No. Realizada con la técnica adecuada, remueve cálculo y pigmentación sin desgastar el esmalte. La sensación de sensibilidad los primeros días es pasajera.' },
      { q: '¿La limpieza blanquea los dientes?', a: 'Elimina manchas superficiales y devuelve el color natural del diente, pero no cambia el tono base del esmalte. Eso lo hace un blanqueamiento.' },
      { q: '¿Duele si hace mucho tiempo que no me hago una?', a: 'Puede ser más molesta si hay mucho cálculo acumulado o la encía está inflamada. Se puede trabajar por sesiones y con anestesia local si hace falta.' }
    ],
    related: ['cuanto-duran-los-implantes-dentales', 'que-es-un-diseno-de-sonrisa']
  }
];

export const porSlug = (slug) => ARTICULOS.find((a) => a.slug === slug);
