/**
 * Los siete servicios de Axia Odontología.
 *
 * Extraído literalmente del canvas de diseño (const SERVICES). El copy está
 * aprobado por la clínica: no se reescribe aquí. Para cambiar un texto,
 * se cambia en este archivo, que es ahora la fuente de verdad.
 */
export const SERVICIOS = [
  {
    slug: 'implantes-dentales', num: '01', nav: 'Implantes dentales',
    kicker: 'Rehabilitación oral',
    h1: 'Implantes dentales en Barranquilla',
    title: 'Implantes Dentales en Barranquilla | Axia Odontología',
    desc: 'Recupera el diente que perdiste con implantes dentales en Barranquilla. Diagnóstico con imágenes, planificación quirúrgica y corona a medida. Agenda por WhatsApp.',
    card: 'Recupera la función y la forma del diente perdido con una solución fija y duradera.',
    lead: 'Un implante reemplaza la raíz del diente que perdiste y sostiene una corona hecha a medida. Se ve, se siente y se usa como un diente propio.',
    imgSrc: '/assets/images/services/implantes-dentales-barranquilla.webp',
    img: 'services/implantes-dentales-barranquilla.webp — radiografía o cirugía guiada, ambiente clínico',
    waMsg: 'Hola, estoy interesado en implantes dentales en Axia Odontología.',
    problem: {
      h: 'Perder un diente no es solo un tema estético',
      paras: [
        'Cuando falta un diente, los de al lado empiezan a moverse para ocupar el espacio, la mordida se descompensa y el hueso de esa zona pierde volumen mes a mes. Masticar de un solo lado sobrecarga la articulación y, con el tiempo, aparecen dolores que parecen no tener relación con la ausencia.',
        'Por eso el implante no se plantea como un capricho: es la forma de detener una cadena de problemas que avanza sola. Y cuanto antes se planifica, menos hueso hay que reconstruir.'
      ]
    },
    treat: {
      h: 'Qué es exactamente un implante dental',
      paras: [
        'Es un tornillo de titanio que se coloca en el hueso maxilar y cumple la función de la raíz perdida. El titanio se integra al hueso en un proceso llamado osteointegración, que toma entre tres y seis meses según el caso.',
        'Sobre ese implante se atornilla un pilar y, encima, la corona definitiva, diseñada para que coincida con el color, la forma y la translucidez de tus dientes vecinos.',
        'En Axia planificamos cada implante sobre imágenes diagnósticas antes de entrar a cirugía: medimos el hueso disponible, ubicamos las estructuras que hay que respetar y definimos la posición exacta. La cirugía se ejecuta sobre un plan, no sobre una estimación.'
      ]
    },
    stepsTitle: 'El proceso de un implante, paso a paso',
    benefits: [
      { t: 'No toca los dientes vecinos', d: 'A diferencia de un puente, el implante se sostiene solo: no hay que desgastar dientes sanos.' },
      { t: 'Conserva el hueso', d: 'La carga que transmite el implante frena la reabsorción ósea de la zona.' },
      { t: 'Mastica sin pensarlo', d: 'Recuperas fuerza y sensación de mordida, sin la movilidad de una prótesis removible.' },
      { t: 'Solución de largo plazo', d: 'Con higiene y controles periódicos, un implante bien planificado dura muchos años.' }
    ],
    steps: [
      { n: '01', t: 'Diagnóstico e imágenes', d: 'Evaluamos hueso, encía y mordida, y revisamos tu estado general de salud.' },
      { n: '02', t: 'Plan quirúrgico', d: 'Definimos posición, medida del implante y si hace falta regenerar hueso. Todo por escrito.' },
      { n: '03', t: 'Colocación', d: 'Cirugía con anestesia local. La mayoría de pacientes vuelve a su rutina al día siguiente.' },
      { n: '04', t: 'Corona definitiva', d: 'Tras la osteointegración tomamos registros y colocamos la corona a medida.' }
    ],
    forWho: [
      'Perdiste uno o varios dientes por caries, fractura o enfermedad periodontal.',
      'Usas una prótesis removible que se mueve y quieres una solución fija.',
      'Te falta un diente posterior y masticas solo de un lado.',
      'Te extrajeron un diente hace poco y quieres planificar la reposición a tiempo.'
    ],
    visit: [
      'Revisión completa de boca, encías y mordida, no solo de la zona del diente ausente.',
      'Explicación en imágenes de cuánto hueso tienes y qué implica en tu caso.',
      'Alternativas reales con tiempos y costos: implante, puente o prótesis, con sus pros y contras.'
    ],
    faqs: [
      { q: '¿Colocar un implante duele?', a: 'La cirugía se hace con anestesia local, así que durante el procedimiento no vas a sentir dolor. Después es normal algo de inflamación y molestia por unos días, que se controla con la medicación que te indicamos.' },
      { q: '¿Cuánto tiempo tarda todo el tratamiento?', a: 'Entre tres y seis meses en la mayoría de casos, porque hay que esperar a que el implante se integre al hueso. Si hace falta regenerar hueso o hacer un injerto, el plazo se extiende. Te damos el cronograma de tu caso en la consulta de diagnóstico.' },
      { q: '¿Voy a quedarme sin diente durante ese tiempo?', a: 'No necesariamente. Según la zona y el caso podemos colocar una prótesis provisional para que no andes con un espacio visible mientras el implante se integra.' },
      { q: '¿Cualquier persona puede llevar implantes?', a: 'La mayoría sí, pero hay que evaluar hueso disponible, salud de las encías, tabaquismo y enfermedades como diabetes no controlada. Eso es justamente lo que se define en la consulta de diagnóstico.' }
    ],
    ctaTitle: '¿Te falta un diente y quieres saber si eres candidato?',
    related: ['diseno-de-sonrisa', 'odontologia-general']
  },
  {
    slug: 'diseno-de-sonrisa', num: '02', nav: 'Diseño de sonrisa',
    kicker: 'Odontología estética',
    h1: 'Diseño de sonrisa en Barranquilla',
    title: 'Diseño de Sonrisa en Barranquilla | Axia Odontología',
    desc: 'Diseño de sonrisa en Barranquilla: planificamos forma, color y proporción antes de tocar un diente, y te mostramos el resultado previsto. Consulta por WhatsApp.',
    card: 'Planificamos forma, color y proporción de tus dientes, y te mostramos el resultado antes de empezar.',
    lead: 'Un diseño de sonrisa no es blanquear y poner carillas. Es planificar, con criterio clínico y estético, cómo deben verse tus dientes en tu cara.',
    imgSrc: '/assets/images/services/diseno-de-sonrisa-barranquilla.webp',
    img: 'services/diseno-de-sonrisa-barranquilla.webp — retrato de sonrisa, luz suave, encuadre cercano',
    waMsg: 'Hola, quiero información sobre diseño de sonrisa en Axia Odontología.',
    problem: {
      h: 'Cuando no te gusta tu sonrisa pero no sabes explicar por qué',
      paras: [
        'Casi nadie llega diciendo "quiero carillas". Llega diciendo que no le gusta cómo se ve en las fotos, que sonríe con la boca cerrada, que un diente le quedó más corto o que el color no le convence desde hace años.',
        'Detrás de esa sensación casi siempre hay razones concretas y medibles: proporciones entre dientes, altura de la encía, línea media desviada, desgaste por bruxismo, restauraciones viejas que cambiaron de color. Nombrarlas es el primer paso para corregirlas.'
      ]
    },
    treat: {
      h: 'Diseño primero, tratamiento después',
      paras: [
        'Empezamos con registros: fotografías clínicas, modelos y evaluación de tu mordida y tu periodonto. Con eso diseñamos la sonrisa sobre tu propia cara, respetando proporciones y el movimiento de tus labios.',
        'Solo cuando el diseño está aprobado definimos qué tratamientos hacen falta para llegar ahí. Puede ser blanqueamiento y ajustes mínimos, ortodoncia previa, carillas, coronas o una combinación. El plan sigue al diseño, no al contrario.',
        'Y hay un principio que no negociamos: primero la salud. No diseñamos una sonrisa sobre encías inflamadas, caries activas o una mordida sin tratar.'
      ]
    },
    stepsTitle: 'Cómo se construye un diseño de sonrisa',
    benefits: [
      { t: 'Ves antes de decidir', d: 'Aprobamos juntos el diseño previsto antes de intervenir cualquier diente.' },
      { t: 'Proporción, no plantilla', d: 'La sonrisa se diseña para tu rostro, no con una forma estándar para todos.' },
      { t: 'Mínimo desgaste posible', d: 'Elegimos la técnica más conservadora que consiga el resultado planificado.' },
      { t: 'Resultado sostenible', d: 'Si hay bruxismo o mordida alterada, se trata: sin eso, el resultado no dura.' }
    ],
    steps: [
      { n: '01', t: 'Consulta y registros', d: 'Fotografías, modelos y evaluación de salud oral, encías y mordida.' },
      { n: '02', t: 'Diseño y aprobación', d: 'Diseñamos la sonrisa sobre tus registros y la revisamos contigo.' },
      { n: '03', t: 'Plan de tratamiento', d: 'Definimos las fases necesarias, con tiempos y costos por escrito.' },
      { n: '04', t: 'Ejecución y controles', d: 'Trabajamos por etapas y hacemos seguimiento del resultado.' }
    ],
    forWho: [
      'No te gusta la forma, el color o el tamaño de tus dientes frontales.',
      'Tienes restauraciones antiguas que se notan o cambiaron de color.',
      'Tus dientes se ven desgastados o desiguales.',
      'Vas a un evento importante y quieres planificarlo con tiempo suficiente.'
    ],
    visit: [
      'Escuchamos qué te molesta de tu sonrisa, con tus palabras, antes de proponer nada.',
      'Revisión de salud oral: sin encías sanas no hay estética que dure.',
      'Explicación honesta de qué se puede lograr en tu caso y qué no.'
    ],
    faqs: [
      { q: '¿Hay que limar mis dientes?', a: 'Depende del caso. Algunos diseños se logran con blanqueamiento y ajustes mínimos de forma; otros requieren carillas, que sí implican una preparación del esmalte. Siempre elegimos la opción más conservadora que consiga el resultado planificado, y te lo explicamos antes.' },
      { q: '¿Puedo ver cómo voy a quedar antes de empezar?', a: 'Sí. Esa es la razón de ser del diseño: aprobamos juntos la propuesta sobre tus propios registros antes de intervenir.' },
      { q: '¿Cuánto dura un diseño de sonrisa?', a: 'Depende de los tratamientos que incluya. Un caso estético sencillo puede tomar algunas semanas; si hace falta ortodoncia previa o rehabilitación, se habla de meses. El cronograma sale de la consulta de diagnóstico.' },
      { q: '¿El resultado se ve natural?', a: 'Ese es el objetivo. Un buen diseño respeta las proporciones de tu cara y la translucidez natural del diente. El aspecto de "dientes de porcelana" viene de saltarse la planificación, no de la técnica.' }
    ],
    ctaTitle: 'Diseñemos tu sonrisa antes de tocar un solo diente',
    related: ['blanqueamiento-dental', 'ortodoncia']
  },
  {
    slug: 'ortodoncia', num: '03', nav: 'Ortodoncia',
    kicker: 'Ortodoncia y ortopedia',
    h1: 'Ortodoncia en Barranquilla',
    title: 'Ortodoncia en Barranquilla | Brackets y Alineadores | Axia Odontología',
    desc: 'Ortodoncia en Barranquilla para niños, adolescentes y adultos. Brackets metálicos, estéticos y alineadores, con diagnóstico previo y controles. Escríbenos por WhatsApp.',
    card: 'Alineamos tus dientes y corregimos la mordida con el sistema que mejor se ajuste a tu caso.',
    lead: 'La ortodoncia ordena los dientes y corrige cómo muerdes. Lo primero es estético y se nota rápido; lo segundo es lo que cuida tu boca a largo plazo.',
    imgSrc: '/assets/images/services/ortodoncia-barranquilla.webp',
    img: 'services/ortodoncia-barranquilla.webp — detalle de brackets o alineador en boca',
    waMsg: 'Hola, quiero conocer opciones de ortodoncia en Axia Odontología.',
    problem: {
      h: 'Dientes torcidos, mordida que no encaja',
      paras: [
        'Los dientes apiñados retienen placa en zonas donde el cepillo no llega bien, y eso se traduce en caries e inflamación de encías que reaparecen por más que te esfuerces en la higiene.',
        'Cuando además la mordida no encaja, la carga se reparte mal: hay dientes que se desgastan más rápido, aparecen sensibilidad y, en algunos casos, molestias en la articulación de la mandíbula. Ordenar la mordida es tratar la causa, no el síntoma.'
      ]
    },
    treat: {
      h: 'No existe un solo tipo de ortodoncia',
      paras: [
        'Hay brackets metálicos, brackets estéticos y alineadores transparentes removibles. Ninguno es mejor en abstracto: el sistema correcto depende de la complejidad de tu caso, de tu edad, de tu disciplina con el uso y de tu presupuesto.',
        'El diagnóstico es lo que decide. Con radiografías, fotografías y modelos evaluamos la posición de los dientes, la relación entre los maxilares y el espacio disponible. Solo entonces se puede decir qué sistema resuelve tu caso y en cuánto tiempo.',
        'En niños hay una ventana de oportunidad: intervenir mientras el hueso está en crecimiento permite guiar el desarrollo en lugar de compensarlo después. Una primera valoración temprana no significa empezar tratamiento de inmediato.'
      ]
    },
    stepsTitle: 'Tu tratamiento de ortodoncia, de principio a fin',
    benefits: [
      { t: 'Higiene más fácil', d: 'Dientes alineados se limpian mejor: menos caries y menos inflamación de encías.' },
      { t: 'Mordida equilibrada', d: 'Reparte la carga al masticar y reduce el desgaste desigual del esmalte.' },
      { t: 'Opciones discretas', d: 'Brackets estéticos y alineadores para quienes no quieren que se note.' },
      { t: 'También en adultos', d: 'No hay edad límite: lo que importa es la salud de tus encías y tu hueso.' }
    ],
    steps: [
      { n: '01', t: 'Valoración inicial', d: 'Revisamos dientes, mordida y encías, y definimos si hay algo que tratar antes.' },
      { n: '02', t: 'Diagnóstico completo', d: 'Radiografías, fotografías y modelos para planificar el movimiento dental.' },
      { n: '03', t: 'Colocación', d: 'Instalamos el sistema elegido y te enseñamos a cuidarlo e higienizarlo.' },
      { n: '04', t: 'Controles y retención', d: 'Ajustes periódicos y, al terminar, retenedores para que no haya recaída.' }
    ],
    forWho: [
      'Tienes dientes apiñados, separados o girados.',
      'Tu mordida no encaja: los dientes de arriba y abajo no coinciden.',
      'Eres adulto y creías que ya era tarde para alinear tus dientes.',
      'Tienes un hijo y quieres saber si necesita ortodoncia o puede esperar.'
    ],
    visit: [
      'Valoración de la posición dental y de cómo encajan tus maxilares.',
      'Explicación de los sistemas que sirven en tu caso, con tiempos estimados de cada uno.',
      'Plan de controles y costos claros desde el inicio, sin sorpresas mes a mes.'
    ],
    faqs: [
      { q: '¿Cuánto dura un tratamiento de ortodoncia?', a: 'Lo habitual está entre 12 y 30 meses, según la complejidad del caso y de si hay que corregir solo posición dental o también la relación entre los maxilares. Tras el diagnóstico te damos un rango realista para tu caso.' },
      { q: '¿Los brackets duelen?', a: 'Los primeros días después de instalarlos y después de cada ajuste hay molestia y sensación de presión. Es pasajera y se maneja con analgésicos comunes y una dieta blanda por un par de días.' },
      { q: '¿Los alineadores sirven para cualquier caso?', a: 'No para todos. Resuelven muy bien apiñamientos leves y moderados, pero algunos movimientos complejos se controlan mejor con brackets. También exigen disciplina: hay que usarlos alrededor de 22 horas al día.' },
      { q: '¿Tengo que usar retenedores al terminar?', a: 'Sí, y no es opcional. Los dientes tienden a volver a su posición original: los retenedores son lo que protege el resultado de años de tratamiento.' }
    ],
    ctaTitle: '¿Quieres saber qué ortodoncia necesita tu caso?',
    related: ['diseno-de-sonrisa', 'atm']
  },
  {
    slug: 'blanqueamiento-dental', num: '04', nav: 'Blanqueamiento dental',
    kicker: 'Odontología estética',
    h1: 'Blanqueamiento dental en Barranquilla',
    title: 'Blanqueamiento Dental en Barranquilla | Axia Odontología',
    desc: 'Blanqueamiento dental profesional en Barranquilla, con evaluación previa y control de la sensibilidad. Resultados naturales y duraderos. Consulta por WhatsApp.',
    card: 'Recupera el tono natural de tus dientes con un blanqueamiento supervisado y sin sorpresas.',
    lead: 'Un blanqueamiento profesional aclara el color de tus dientes de forma controlada, cuidando el esmalte y manejando la sensibilidad. No es lo mismo que un producto de farmacia.',
    imgSrc: '/assets/images/services/blanqueamiento-dental-barranquilla.webp',
    img: 'services/blanqueamiento-dental-barranquilla.webp — procedimiento de blanqueamiento en consultorio',
    waMsg: 'Hola, quiero información sobre blanqueamiento dental en Axia Odontología.',
    problem: {
      h: 'Por qué los dientes se oscurecen',
      paras: [
        'Con los años el esmalte se adelgaza y la dentina, que es naturalmente más amarilla, se transparenta más. A eso se suman los pigmentos del café, el té, los refrescos oscuros, el vino y el cigarrillo, que se van depositando en la superficie.',
        'Hay además oscurecimientos que no responden a un blanqueamiento: manchas por medicamentos, un diente con tratamiento de conducto o una restauración vieja que cambió de color. Distinguir el origen antes de empezar es lo que evita una decepción.'
      ]
    },
    treat: {
      h: 'Blanqueamiento supervisado, no improvisado',
      paras: [
        'El proceso empieza siempre con una revisión: si hay caries, encías inflamadas o restauraciones filtradas, se tratan antes. Blanquear sobre una boca sin sanear provoca dolor y resultados desiguales.',
        'Según el caso, el blanqueamiento se hace en consultorio, en casa con férulas personalizadas y gel de concentración controlada, o combinando ambos. Lo que decide la técnica es tu tipo de mancha, tu sensibilidad previa y el tiempo del que dispones.',
        'Un punto importante: las resinas, coronas y carillas no se blanquean. Si tienes restauraciones visibles, hay que planificar su reemplazo después del blanqueamiento para que el color coincida.'
      ]
    },
    stepsTitle: 'Tu blanqueamiento, sesión por sesión',
    benefits: [
      { t: 'Color evaluado, no adivinado', d: 'Registramos el tono inicial y el objetivo para que el resultado sea comparable.' },
      { t: 'Sensibilidad bajo control', d: 'Usamos desensibilizantes y ajustamos concentración y tiempos según cómo respondas.' },
      { t: 'Resultado creíble', d: 'Buscamos el blanco que corresponde a tu rostro y tu edad, no el máximo de la escala.' },
      { t: 'Indicaciones claras', d: 'Te explicamos qué evitar los primeros días para no perder el resultado.' }
    ],
    steps: [
      { n: '01', t: 'Revisión previa', d: 'Descartamos caries, encía inflamada y restauraciones que haya que tratar antes.' },
      { n: '02', t: 'Limpieza dental', d: 'Retiramos placa y cálculo: sin eso el gel no actúa de forma uniforme.' },
      { n: '03', t: 'Blanqueamiento', d: 'En consultorio, en casa con férulas a medida o una combinación de las dos.' },
      { n: '04', t: 'Control y mantenimiento', d: 'Verificamos el tono alcanzado y definimos cada cuánto reforzarlo.' }
    ],
    forWho: [
      'Tus dientes se ven amarillentos u opacos aunque tengas buena higiene.',
      'Tomas café, té o vino con frecuencia y notas pigmentación.',
      'Acabas de terminar ortodoncia y quieres unificar el color.',
      'Tienes un evento próximo y quieres planificarlo con margen.'
    ],
    visit: [
      'Evaluación del origen real del color de tus dientes: no todas las manchas se blanquean.',
      'Registro del tono inicial para poder comparar el resultado de forma objetiva.',
      'Advertencia clara si tienes restauraciones visibles que no van a cambiar de color.'
    ],
    faqs: [
      { q: '¿El blanqueamiento daña el esmalte?', a: 'Un blanqueamiento profesional, con la concentración y los tiempos adecuados, no daña el esmalte. Los problemas aparecen con productos sin supervisión, usados más tiempo del debido o sobre una boca sin sanear.' },
      { q: '¿Cuánto dura el resultado?', a: 'Entre uno y tres años en general, y depende mucho de tus hábitos: café, cigarrillo y bebidas oscuras lo acortan. Se puede mantener con refuerzos periódicos.' },
      { q: '¿Voy a tener sensibilidad?', a: 'Es el efecto secundario más común y suele ser leve y pasajero. Se maneja con desensibilizantes antes y después, y ajustando la técnica si eres especialmente sensible.' },
      { q: '¿Sirve si tengo carillas o resinas?', a: 'El gel no cambia el color de los materiales artificiales. Si tienes restauraciones en los dientes de adelante, lo habitual es blanquear primero y reemplazarlas después para igualar el tono.' }
    ],
    ctaTitle: '¿Quieres saber cuánto pueden aclarar tus dientes?',
    related: ['diseno-de-sonrisa', 'limpieza-dental']
  },
  {
    slug: 'limpieza-dental', num: '05', nav: 'Limpieza y profilaxis dental',
    kicker: 'Prevención',
    h1: 'Limpieza dental y profilaxis en Barranquilla',
    title: 'Limpieza Dental y Profilaxis en Barranquilla | Axia Odontología',
    desc: 'Limpieza dental profesional en Barranquilla: remoción de placa y cálculo, revisión de encías y control preventivo. Agenda tu profilaxis por WhatsApp.',
    card: 'La cita más simple y la que evita los tratamientos más caros. Placa, cálculo y revisión completa.',
    lead: 'La profilaxis remueve la placa y el cálculo que el cepillado no alcanza, y es la ocasión para revisar toda tu boca antes de que algo pequeño se vuelva grande.',
    imgSrc: '/assets/images/services/limpieza-dental-barranquilla.webp',
    img: 'services/limpieza-dental-barranquilla.webp — profilaxis en consultorio, instrumental estéril',
    waMsg: 'Hola, quiero agendar una limpieza dental en Axia Odontología.',
    problem: {
      h: 'Lo que el cepillo no puede quitar',
      paras: [
        'El cepillado y el hilo controlan la placa blanda del día a día. Pero una parte de esa placa se mineraliza y se convierte en cálculo: una capa dura, adherida al diente, que ningún cepillo remueve por más técnica que tengas.',
        'Ese cálculo mantiene la encía irritada de forma continua. Primero sangra al cepillarte, después se retrae, y si el proceso avanza compromete el hueso que sostiene el diente. La enfermedad periodontal es la principal causa de pérdida dental en adultos, y empieza así.'
      ]
    },
    treat: {
      h: 'Qué incluye una profilaxis bien hecha',
      paras: [
        'Removemos placa y cálculo por encima y por debajo del borde de la encía, pulimos la superficie del diente para que la placa vuelva a adherirse más lento y evaluamos el estado de tus encías.',
        'La cita incluye una revisión completa: caries incipientes, restauraciones filtradas, desgaste por bruxismo, muelas del juicio. Detectar una caries de dos milímetros cuesta mucho menos que tratarla cuando llega al nervio.',
        'Si hay mucho cálculo acumulado o inflamación importante, dividimos el trabajo en sesiones y usamos anestesia local. No hay ninguna razón para que la cita sea incómoda.'
      ]
    },
    stepsTitle: 'Cómo es tu cita de limpieza',
    benefits: [
      { t: 'Previene la pérdida dental', d: 'Controlar la inflamación de la encía protege el hueso que sostiene tus dientes.' },
      { t: 'Detecta a tiempo', d: 'Es la ocasión de encontrar caries pequeñas y desgastes antes de que duelan.' },
      { t: 'Elimina el mal aliento', d: 'Buena parte del mal aliento persistente viene de placa y cálculo acumulados.' },
      { t: 'La opción más económica', d: 'Dos citas al año cuestan mucho menos que una rehabilitación.' }
    ],
    steps: [
      { n: '01', t: 'Revisión inicial', d: 'Evaluamos dientes, encías y nivel de acumulación de placa y cálculo.' },
      { n: '02', t: 'Remoción de cálculo', d: 'Con ultrasonido e instrumental manual, por encima y por debajo de la encía.' },
      { n: '03', t: 'Pulido y flúor', d: 'Pulimos la superficie y aplicamos flúor cuando está indicado.' },
      { n: '04', t: 'Plan de higiene', d: 'Te mostramos las zonas donde estás fallando y cada cuánto volver.' }
    ],
    forWho: [
      'Hace más de seis meses de tu última limpieza.',
      'Te sangran las encías al cepillarte o usar hilo dental.',
      'Notas una capa áspera cerca del borde de la encía.',
      'Usas ortodoncia fija: la placa se acumula más y más rápido.'
    ],
    visit: [
      'Revisión completa de dientes y encías, no solo la remoción de cálculo.',
      'Te mostramos dónde se te acumula la placa y cómo corregir tu técnica.',
      'Definimos tu intervalo real de control: no todos necesitan cada seis meses.'
    ],
    faqs: [
      { q: '¿Cada cuánto debo hacerme una limpieza?', a: 'Para la mayoría de personas con encías sanas, dos veces al año. Fumadores, pacientes con ortodoncia, diabéticos o con antecedentes de enfermedad periodontal suelen necesitarla cada tres o cuatro meses.' },
      { q: '¿La limpieza duele?', a: 'Normalmente no. Si hay mucho cálculo o la encía está muy inflamada puede ser molesta: en ese caso trabajamos por sesiones y con anestesia local si hace falta.' },
      { q: '¿La limpieza blanquea los dientes?', a: 'Retira manchas superficiales y devuelve el color natural del diente, pero no cambia el tono base del esmalte. Para eso está el blanqueamiento.' },
      { q: '¿Me van a quedar los dientes flojos o con espacios?', a: 'Lo que se remueve es cálculo, no diente. Si la encía estaba muy inflamada, al desinflamarse pueden hacerse visibles espacios que ya existían por debajo. Es una señal de que había que tratarlo.' }
    ],
    ctaTitle: 'Agenda tu limpieza y control preventivo',
    related: ['odontologia-general', 'blanqueamiento-dental']
  },
  {
    slug: 'atm', num: '06', nav: 'Disfunciones de ATM',
    kicker: 'Dolor orofacial',
    h1: 'Tratamiento de disfunciones de ATM en Barranquilla',
    title: 'Disfunciones de ATM y Bruxismo en Barranquilla | Axia Odontología',
    desc: 'Dolor de mandíbula, chasquidos al abrir la boca o bruxismo. Diagnóstico y tratamiento de disfunciones de ATM en Barranquilla. Escríbenos por WhatsApp.',
    card: 'Dolor de mandíbula, chasquidos, apretamiento nocturno o dolor de cabeza al despertar.',
    lead: 'La articulación temporomandibular conecta la mandíbula con el cráneo. Cuando algo en ese sistema no funciona bien, el síntoma no siempre aparece donde está el problema.',
    imgSrc: '/assets/images/services/disfuncion-atm-barranquilla.webp',
    img: 'services/disfuncion-atm-barranquilla.webp — evaluación de articulación temporomandibular',
    waMsg: 'Hola, tengo molestias en la mandíbula y quiero una valoración de ATM.',
    problem: {
      h: 'Cuando el dolor no parece dental',
      paras: [
        'Dolor de cabeza al despertar, molestia delante del oído, chasquido al abrir la boca, cansancio en la cara al final del día, sensación de que la mandíbula se traba. Muchos pacientes recorren varias consultas antes de que alguien relacione todo eso con la articulación temporomandibular.',
        'Detrás suele haber una combinación de factores: apretamiento o rechinamiento de dientes, una mordida que reparte mal la carga, estrés sostenido, pérdida de dientes posteriores. Tratar solo el síntoma alivia unos días; identificar el factor que lo mantiene es lo que cambia el cuadro.'
      ]
    },
    treat: {
      h: 'Diagnóstico primero, aparatología después',
      paras: [
        'La evaluación incluye la historia de tus síntomas, la palpación de la articulación y de los músculos masticadores, el rango de apertura, los ruidos articulares y el análisis de tu mordida y de tus facetas de desgaste.',
        'El tratamiento se construye por capas, empezando por lo menos invasivo: educación sobre hábitos, control de parafunciones, fisioterapia y ejercicios, placa de descarga hecha a medida y, cuando el desgaste o la mordida lo exigen, rehabilitación o ajuste oclusal.',
        'Un punto que decimos siempre: la placa de descarga no es un tratamiento por sí sola. Protege los dientes y relaja la musculatura, pero si el factor que causa el apretamiento sigue activo, el problema sigue ahí.'
      ]
    },
    stepsTitle: 'Cómo abordamos un caso de ATM',
    benefits: [
      { t: 'Protege tus dientes', d: 'El apretamiento continuo desgasta el esmalte y fractura restauraciones.' },
      { t: 'Reduce el dolor de cabeza', d: 'Buena parte de las cefaleas matutinas tiene origen muscular masticatorio.' },
      { t: 'Placa hecha a medida', d: 'Fabricada sobre tus modelos y ajustada en control, no una férula genérica.' },
      { t: 'Enfoque conservador', d: 'Empezamos por lo reversible; la rehabilitación es la última capa, no la primera.' }
    ],
    steps: [
      { n: '01', t: 'Historia y síntomas', d: 'Cuándo aparece, qué lo empeora, cómo duermes y cuánto llevas así.' },
      { n: '02', t: 'Examen clínico', d: 'Palpación muscular y articular, apertura, ruidos y análisis de tu mordida.' },
      { n: '03', t: 'Plan por capas', d: 'Hábitos, ejercicios y placa de descarga a medida como primera línea.' },
      { n: '04', t: 'Control y ajuste', d: 'Revisamos la respuesta y ajustamos. La placa se controla, no se entrega y se olvida.' }
    ],
    forWho: [
      'Te despiertas con dolor de cabeza, en la cara o en la mandíbula.',
      'Suena o chasquea la mandíbula al abrir o cerrar la boca.',
      'Te han dicho que rechinas los dientes al dormir.',
      'Notas los dientes desgastados, planos o más sensibles que antes.'
    ],
    visit: [
      'Una entrevista detallada: en ATM la historia del síntoma vale tanto como el examen.',
      'Exploración de músculos y articulación, y registro de tu apertura y tus ruidos.',
      'Explicación de qué factores están manteniendo tu cuadro y en qué orden abordarlos.'
    ],
    faqs: [
      { q: '¿El chasquido al abrir la boca es grave?', a: 'Un chasquido aislado sin dolor ni limitación puede no requerir tratamiento activo, solo control. Cuando aparece dolor, la mandíbula se traba o la apertura se reduce, sí hay que intervenir.' },
      { q: '¿La placa de descarga corrige el bruxismo?', a: 'No lo elimina: protege los dientes del desgaste y ayuda a relajar la musculatura. Es una pieza del tratamiento, no el tratamiento completo.' },
      { q: '¿El estrés causa problemas de ATM?', a: 'Es un factor que contribuye con mucha frecuencia, porque aumenta el apretamiento. Pero rara vez es la única causa: casi siempre se combina con factores mecánicos de la mordida.' },
      { q: '¿Cuánto tarda en mejorar?', a: 'Muchos pacientes notan alivio en las primeras semanas con medidas conservadoras. Los casos crónicos o con desgaste avanzado toman más tiempo y suelen requerir varias fases.' }
    ],
    ctaTitle: '¿Te duele la mandíbula o aprietas los dientes?',
    related: ['odontologia-general', 'ortodoncia']
  },
  {
    slug: 'odontologia-general', num: '07', nav: 'Odontología general',
    kicker: 'Atención integral',
    h1: 'Odontología general en Barranquilla',
    title: 'Odontología General en Barranquilla | Axia Odontología',
    desc: 'Odontología general en Barranquilla: revisión, caries, resinas, endodoncia, urgencias y control preventivo para toda la familia. Agenda por WhatsApp.',
    card: 'La puerta de entrada: revisión, caries, resinas, urgencias y control para toda la familia.',
    lead: 'Es la atención de base y la más importante: revisar, resolver a tiempo lo que aparece y evitar que un problema pequeño se convierta en un tratamiento largo.',
    imgSrc: '/assets/images/services/odontologia-general-barranquilla.webp',
    img: 'services/odontologia-general-barranquilla.webp — consulta odontológica general, paciente y profesional',
    waMsg: 'Hola, quiero agendar una consulta de odontología general en Axia.',
    problem: {
      h: 'Casi nadie llega antes de que duela',
      paras: [
        'La caries no avanza con síntomas. Cuando aparece el dolor, lo que era una restauración simple suele haberse convertido en un tratamiento de conducto, y lo que era un control de rutina en una urgencia.',
        'La consulta general existe justamente para romper ese patrón: revisar con regularidad, resolver lo pequeño mientras es pequeño y saber en qué estado está tu boca antes de que te obligue a saberlo.'
      ]
    },
    treat: {
      h: 'Qué resolvemos en odontología general',
      paras: [
        'Revisión y diagnóstico completo, restauraciones en resina del color del diente, tratamiento de caries, endodoncia cuando el nervio está comprometido, extracciones simples, urgencias por dolor o fractura y valoración de muelas del juicio.',
        'También es el punto desde el que se coordina todo lo demás: si tu caso necesita ortodoncia, implantes o rehabilitación, la consulta general es donde se define el orden y la prioridad de cada fase.',
        'Atendemos adultos y niños. En odontopediatría el objetivo no es solo tratar: es que el niño salga de la cita sin miedo a volver.'
      ]
    },
    stepsTitle: 'Tu primera consulta en Axia',
    benefits: [
      { t: 'Un solo lugar', d: 'Diagnóstico y coordinación de todas las fases con el mismo equipo.' },
      { t: 'Resinas estéticas', d: 'Restauraciones del color de tu diente, adaptadas en forma y translucidez.' },
      { t: 'Atención de urgencias', d: 'Dolor, fractura o restauración desprendida: escríbenos y priorizamos tu cita.' },
      { t: 'Toda la familia', d: 'Adultos y niños, con un enfoque distinto según la edad.' }
    ],
    steps: [
      { n: '01', t: 'Entrevista y antecedentes', d: 'Tu motivo de consulta, tu historia médica y los medicamentos que tomas.' },
      { n: '02', t: 'Examen completo', d: 'Dientes, encías, mordida y tejidos blandos, con las imágenes necesarias.' },
      { n: '03', t: 'Plan por prioridades', d: 'Primero lo urgente, después lo necesario y al final lo estético. Por escrito.' },
      { n: '04', t: 'Tratamiento y control', d: 'Ejecutamos por fases y definimos cada cuánto volver a revisión.' }
    ],
    forWho: [
      'Hace más de un año que no vas al odontólogo.',
      'Tienes dolor, sensibilidad o una restauración que se desprendió.',
      'Ves una mancha oscura o un hueco en algún diente.',
      'Quieres una revisión completa para saber en qué estado está tu boca.'
    ],
    visit: [
      'Una revisión completa, no solo del diente que te trajo a consulta.',
      'Un plan ordenado por prioridad clínica, con tiempos y costos por escrito.',
      'Respuestas claras: qué hay que hacer ya, qué puede esperar y qué no hace falta.'
    ],
    faqs: [
      { q: '¿Cada cuánto debo ir al odontólogo?', a: 'Como referencia, una revisión cada seis meses. Si tienes tendencia a la caries, enfermedad de las encías o usas ortodoncia, el intervalo se acorta según tu caso.' },
      { q: '¿Atienden urgencias?', a: 'Sí. Ante dolor intenso, fractura o una restauración desprendida, escríbenos por WhatsApp y priorizamos tu cita dentro del horario de atención.' },
      { q: '¿Atienden niños?', a: 'Sí. Adaptamos la cita a la edad, con el objetivo de que el niño se vaya tranquilo y sin miedo a volver.' },
      { q: '¿Qué pasa si necesito varios tratamientos?', a: 'Organizamos el plan por fases y por prioridad: primero lo que causa dolor o riesgo, después lo funcional y al final lo estético. Tú decides el ritmo.' }
    ],
    ctaTitle: 'Empecemos por una revisión completa',
    related: ['limpieza-dental', 'implantes-dentales']
  }
];

export const porSlug = (slug) => SERVICIOS.find((s) => s.slug === slug);
