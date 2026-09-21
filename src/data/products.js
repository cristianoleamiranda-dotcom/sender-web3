/* ══════════════════════════════════════════════════════════
   SENDER · Catálogo real de productos
   Datos extraídos de www.sender.cl
   ══════════════════════════════════════════════════════════ */

export const CATEGORIES = [
  {
    slug: 'transmisores-am',
    name: 'Transmisores AM',
    short: 'Estado sólido · 1 a 10 kW',
    blurb:
      'Serie SENDER SS: arquitectura modular Clase D con modulación PWM para banda media profesional.',
  },
  {
    slug: 'transmisores-fm',
    name: 'Transmisores FM',
    short: 'Estéreo · 30 W a 1 kW',
    blurb:
      'Sintetizador digital PLL 88–108 MHz con protección de ROE y sobretemperatura.',
  },
  {
    slug: 'antenas',
    name: 'Antenas AM / FM / MF / HF',
    short: 'Monopolos y HF profesional',
    blurb:
      'Sistemas de antena de alta eficiencia con protección contra descargas atmosféricas.',
  },
  {
    slug: 'navtex',
    name: 'Sistemas NAVTEX',
    short: 'MF · 490 / 518 kHz',
    blurb:
      'Soluciones de transmisión MF para operación confiable en entornos marítimos y de defensa.',
  },
  {
    slug: 'stl',
    name: 'STL · Enlaces Estudio–Planta',
    short: 'Serie STAL · 10 W',
    blurb:
      'Enlaces profesionales de estudio a planta transmisora para radio AM y FM.',
  },
  {
    slug: 'torres',
    name: 'Torres e Infraestructura',
    short: 'Galvanizadas · Ingeniería y montaje',
    blurb:
      'Venta e instalación de torres contraventadas y proyectos de telecomunicaciones de alta complejidad.',
  },
  {
    slug: 'audio',
    name: 'Procesamiento de Audio',
    short: 'Serie BIS · Rack 19"',
    blurb: 'Procesadores de audio profesionales para radiodifusión.',
  },
  {
    slug: 'automatizacion',
    name: 'Automatización',
    short: 'Control y monitoreo remoto',
    blurb: 'Automatización de estaciones de radiodifusión con control a distancia.',
  },
  {
    slug: 'componentes-rf',
    name: 'Componentes RF',
    short: 'Condensadores · Coaxial · IC',
    blurb: 'Componentes de alta potencia para electrónica y radiofrecuencia profesional.',
  },
  {
    slug: 'energia',
    name: 'Carros Fotovoltaicos',
    short: '2–7 kVA · Mástil telescópico 12 m',
    blurb:
      'Soluciones móviles de energía solar con mástil telescópico para operación autónoma en terreno.',
  },
]

export const products = [
  /* ── TRANSMISORES AM ─────────────────────────────── */
  {
    id: 'am-1000ss',
    name: 'Transmisor AM-1000SS · 1 kW',
    category: 'transmisores-am',
    shortDescription:
      'Transmisor AM de estado sólido de 1000 W para radiodifusión profesional en banda media.',
    longDescription:
      'El AM-1000SS de la serie SENDER SS está diseñado y fabricado para radiodifusión profesional en banda media (AM). Todos los equipos de la serie utilizan arquitectura modular de alta eficiencia, con amplificación en Clase D y sistema de modulación por ancho de pulso (PWM) bifásico. Su sintetizador digital entrega excelente estabilidad de frecuencia, ajustable en cualquier canal dentro de la banda.',
    specs: [
      ['Potencia de portadora', '1 000 W'],
      ['Rango de frecuencia', '490–1700 kHz, ajustable por canal'],
      ['Estabilidad de frecuencia', 'Mejor que ±5 Hz (sintetizador digital)'],
      ['Arquitectura', 'Modular redundante, Clase D'],
      ['Modulación', 'PWM bifásico'],
      ['Impedancia de salida', '50 Ω'],
    ],
    applications: [
      'Radiodifusión AM profesional',
      'Emisoras regionales y comunitarias',
      'Estaciones de banda media',
    ],
    featured: true,
  },
  {
    id: 'am-2500ss',
    name: 'Transmisor AM-2500SS · 2 kW',
    category: 'transmisores-am',
    shortDescription:
      'Transmisor AM de 2000 W con gran capacidad de modulación para cualquier frecuencia de banda media.',
    longDescription:
      'El AM-2500SS está diseñado para operar en cualquier frecuencia dentro de la banda AM comprendida entre 490 kHz y 1700 kHz, con una gran capacidad de modulación. Fabricado completamente en estado sólido con arquitectura modular redundante basada en amplificadores de potencia de alta eficiencia Clase D.',
    specs: [
      ['Potencia de portadora', '2 000 W'],
      ['Rango de frecuencia', '490–1700 kHz'],
      ['Alimentación', 'Monofásica 220 V · 50/60 Hz'],
      ['Arquitectura', 'Modular redundante, Clase D'],
      ['Modulación', 'PWM bifásico'],
    ],
    applications: ['Radiodifusión AM', 'Emisoras comerciales', 'Proyectos de media potencia'],
  },
  {
    id: 'am-5000ss',
    name: 'Transmisor AM-5000SS · 5 kW',
    category: 'transmisores-am',
    shortDescription:
      'Transmisor AM de 5000 W con alimentación trifásica y amplia capacidad de modulación.',
    longDescription:
      'El AM-5000SS entrega una potencia nominal de 5000 W con una amplia capacidad de modulación, pensado para emisoras comerciales de alta cobertura. Su fuente de alimentación trifásica admite 220 V o 380 V a 50/60 Hz (otras opciones de alimentación a consultar con fábrica).',
    specs: [
      ['Potencia de portadora', '5 000 W'],
      ['Rango de frecuencia', '490–1700 kHz'],
      ['Alimentación', 'Trifásica 220 V / 380 V · 50/60 Hz'],
      ['Impedancia de salida', '50 Ω'],
      ['Arquitectura', 'Modular redundante, Clase D'],
    ],
    applications: ['Emisoras comerciales de alta potencia', 'Cobertura regional amplia'],
    featured: true,
  },
  {
    id: 'am-10000ss',
    name: 'Transmisor AM-10000SS · 10 kW',
    category: 'transmisores-am',
    shortDescription:
      'El tope de serie SENDER SS: 10 000 W de portadora con sintetizador digital de ±5 Hz.',
    longDescription:
      'El AM-10000SS es la solución de máxima potencia de la serie SENDER SS, con una potencia de portadora nominal de 10 000 W y amplia capacidad de modulación. Su sintetizador digital permite una excelente estabilidad de frecuencia, mejor que ±5 Hz, ajustable en cualquier canal desde 490 kHz hasta 1700 kHz.',
    specs: [
      ['Potencia de portadora', '10 000 W'],
      ['Rango de frecuencia', '490–1700 kHz, ajustable por canal'],
      ['Estabilidad de frecuencia', 'Mejor que ±5 Hz'],
      ['Arquitectura', 'Modular redundante, Clase D'],
      ['Modulación', 'PWM bifásico'],
    ],
    applications: ['Emisoras comerciales de gran cobertura', 'Proyectos de máxima potencia'],
  },

  /* ── TRANSMISORES FM ─────────────────────────────── */
  {
    id: 'fm-30',
    name: 'Transmisor FM-30 · 30 W',
    category: 'transmisores-fm',
    shortDescription:
      'Transmisor FM estéreo compacto de 30 W con sintetizador digital y protecciones activas.',
    longDescription:
      'El FM-30 es un transmisor estéreo de 30 W en chasis de 2 unidades de rack. Utiliza tecnología digital de sintetizador de frecuencia de enganche de fase de alta eficiencia (88–108 MHz), con protección de ondas estacionarias y sobretemperatura. Su potencia de salida es continuamente ajustable entre 0,5 W y 30 W, con función de bloqueo de energía.',
    specs: [
      ['Potencia nominal', '30 W estéreo'],
      ['Rango de frecuencia', '88–108 MHz (PLL)'],
      ['Chasis', '2 unidades de rack'],
      ['Salida ajustable', '0,5–30 W continuo'],
      ['Protecciones', 'ROE y sobretemperatura'],
      ['Extras', 'Bloqueo de potencia'],
    ],
    applications: ['Radios comunitarias', 'Emisoras locales', 'Enlaces de baja potencia'],
  },
  {
    id: 'fm-150',
    name: 'Transmisor FM-150 · 150 W',
    category: 'transmisores-fm',
    shortDescription:
      'Transmisor FM estéreo de 150 W con chasis 3U, PLL de alta eficiencia y salida ajustable.',
    longDescription:
      'El FM-150 entrega 150 W en estéreo con un chasis de 3 unidades de rack. Tecnología digital de sintetizador de frecuencia de enganche de fase de alta eficiencia para la banda 88–108 MHz, protecciones de ondas estacionarias y sobretemperatura, y potencia de salida continuamente ajustable entre 0,5 W y 150 W.',
    specs: [
      ['Potencia nominal', '150 W estéreo'],
      ['Rango de frecuencia', '88–108 MHz (PLL)'],
      ['Chasis', '3 unidades de rack'],
      ['Salida ajustable', '0,5–150 W continuo'],
      ['Protecciones', 'ROE y sobretemperatura'],
      ['Extras', 'Bloqueo de potencia'],
    ],
    applications: ['Emisoras FM regionales', 'Cobertura urbana', 'Plantas transmisoras'],
    featured: true,
  },
  {
    id: 'fm-350-1000',
    name: 'Transmisores FM 350 / 600 / 1000 W',
    category: 'transmisores-fm',
    shortDescription:
      'Transmisores FM profesionales de alta potencia, disponibles a pedido para proyectos de cobertura amplia.',
    longDescription:
      'Soluciones FM de alta potencia para emisoras que requieren cobertura amplia: equipos profesionales de 350 W, 600 W y 1000 W disponibles a pedido, con especificación configurada según los requerimientos de cada planta transmisora.',
    specs: [
      ['Potencias disponibles', '350 W · 600 W · 1000 W'],
      ['Rango de frecuencia', '88–108 MHz'],
      ['Disponibilidad', 'A pedido'],
      ['Configuración', 'Según proyecto'],
    ],
    applications: ['Emisoras FM de alta potencia', 'Cobertura regional', 'Proyectos llave en mano'],
  },

  /* ── ANTENAS ─────────────────────────────────────── */
  {
    id: 'monopolo-am',
    name: 'Antena Monopolo AM · 510–1700 kHz',
    category: 'antenas',
    shortDescription:
      'Sistema de antena monopolo plegado para radiodifusión AM con alta eficiencia y protección atmosférica.',
    longDescription:
      'Los sistemas de antena SENDER ofrecen alta eficiencia y un ancho de banda superior en comparación con antenas alimentadas en serie, además de incorporar protección contra descargas atmosféricas mediante torre aterrizada. Están fabricados con materiales de alta calidad —fibra de vidrio, acero galvanizado y conductores de aluminio reforzado— sometidos a estrictos controles de fabricación, para garantizar larga vida útil en condiciones ambientales exigentes.',
    specs: [
      ['Banda', '510–1700 kHz (radiodifusión AM)'],
      ['Tipo', 'Monopolo plegado'],
      ['Protección', 'Contra descargas atmosféricas (torre aterrizada)'],
      ['Materiales', 'Fibra de vidrio, acero galvanizado, aluminio reforzado'],
      ['Integración', 'TV, FM y enlaces sin aisladores especiales'],
      ['Ventaja', 'Reduce la altura requerida de torre y simplifica el ATU'],
    ],
    applications: [
      'Plantas transmisoras AM',
      'Optimización de ancho de banda y eficiencia',
      'Sitios con requerimiento de altura reducida',
    ],
    featured: true,
  },
  {
    id: 'hf-2-30',
    name: 'Antena HF Profesional · 2–30 MHz · 1 kW',
    category: 'antenas',
    shortDescription:
      'Antena HF de alto rendimiento para comunicaciones de largo alcance en entornos estratégicos.',
    longDescription:
      'Antena profesional para la banda HF (2–30 MHz) con capacidad de 1 kW, diseñada para soluciones de comunicaciones de largo alcance en entornos estratégicos. Cuenta con instalación y operación comprobada en condiciones extremas, incluyendo proyectos en Isla de Pascua.',
    specs: [
      ['Rango de frecuencia', '2–30 MHz'],
      ['Potencia', '1 kW'],
      ['Tipo', 'HF de alto rendimiento'],
      ['Operación comprobada', 'Isla de Pascua y zonas remotas'],
    ],
    applications: [
      'Comunicaciones HF de largo alcance',
      'Defensa y entornos estratégicos',
      'Zonas remotas y aisladas',
    ],
  },

  /* ── NAVTEX ──────────────────────────────────────── */
  {
    id: 'navtex-490-518',
    name: 'Sistema NAVTEX Profesional · 490/518 kHz',
    category: 'navtex',
    shortDescription:
      'Solución de transmisión MF para sistemas NAVTEX, diseñada para operación confiable en entornos marítimos y de defensa.',
    longDescription:
      'Soluciones de transmisión MF para sistemas NAVTEX en las frecuencias 490 y 518 kHz, diseñadas para operación confiable en entornos marítimos y de defensa. SENDER cuenta con experiencia comprobada en este tipo de sistemas, incluyendo proyectos desarrollados para la Armada de Chile.',
    specs: [
      ['Frecuencias', '490 kHz · 518 kHz'],
      ['Banda', 'MF'],
      ['Entorno de operación', 'Marítimo y defensa'],
      ['Referencia', 'Proyectos para la Armada de Chile'],
    ],
    applications: [
      'Sistemas de seguridad marítima',
      'Instalaciones de defensa',
      'Costas y faros',
    ],
    featured: true,
  },
  {
    id: 'amp-mf',
    name: 'Amplificador MF para AM y NAVTEX',
    category: 'navtex',
    shortDescription:
      'Amplificador de potencia MF para sistemas de radiodifusión AM y NAVTEX.',
    longDescription:
      'Amplificador MF diseñado para operar tanto en sistemas de radiodifusión AM como en sistemas NAVTEX, entregando la potencia y confiabilidad requeridas por estaciones costeras y plantas transmisoras.',
    specs: [
      ['Banda', 'MF'],
      ['Aplicación', 'AM y NAVTEX'],
      ['Configuración', 'Según requerimientos del proyecto'],
    ],
    applications: ['Estaciones costeras', 'Plantas transmisoras AM', 'Sistemas NAVTEX'],
  },

  /* ── STL / ENLACES ───────────────────────────────── */
  {
    id: 'stal-200',
    name: 'Enlace Estudio–Planta STAL-200',
    category: 'stl',
    shortDescription:
      'Enlace profesional de estudio a planta transmisora para radio AM y FM, con control completo desde panel.',
    longDescription:
      'Los enlaces Estudio–Planta de la serie STAL están diseñados para aplicaciones profesionales de radiodifusión, permitiendo una transmisión confiable y de alta calidad entre el estudio y la planta transmisora. El STAL-200 se programa desde su panel de control e incluye encendido remoto del transmisor, memorias de frecuencia, modo mono/MPX y display con idioma configurable.',
    specs: [
      ['Potencia de salida', '10 W'],
      ['Programación', 'Desde panel de control'],
      ['Encendido remoto', 'Del transmisor (TX)'],
      ['Frecuencias', 'Operación y memorias programables'],
      ['Modo de operación', 'Mono / MPX'],
      ['Audio', 'Preénfasis y nivel de modulación configurables'],
      ['Display', 'Idioma configurable'],
    ],
    applications: [
      'Enlaces estudio–planta para radio AM',
      'Enlaces estudio–planta para radio FM',
      'Operación remota de plantas transmisoras',
    ],
    featured: true,
  },

  /* ── TORRES E INFRAESTRUCTURA ────────────────────── */
  {
    id: 'torres-galvanizadas',
    name: 'Torres Contraventadas Galvanizadas',
    category: 'torres',
    shortDescription:
      'Venta e instalación de torres para telecomunicaciones, con ingeniería, montaje y desmontaje profesional.',
    longDescription:
      'Torres contraventadas galvanizadas para telecomunicaciones, con servicio integral de venta e instalación. SENDER ejecuta proyectos de telecomunicaciones de alta complejidad: ingeniería y montaje de infraestructura, incluyendo trabajos de gran envergadura como el desmontaje de una torre autosoportada de 60 metros para la Armada de Chile en Playa Ancha, Valparaíso.',
    specs: [
      ['Tipo', 'Contraventadas galvanizadas'],
      ['Servicio', 'Venta, instalación, montaje y desmontaje'],
      ['Ingeniería', 'Proyectos de alta complejidad'],
      ['Referencia', 'Torre autosoportada 60 m · Armada de Chile · Playa Ancha'],
    ],
    applications: [
      'Plantas transmisoras',
      'Infraestructura de telecomunicaciones',
      'Enlaces y sistemas de antenas',
    ],
  },

  /* ── PROCESAMIENTO DE AUDIO ──────────────────────── */
  {
    id: 'bis-ap735',
    name: 'Procesador de Audio BIS-AP735',
    category: 'audio',
    shortDescription:
      'Procesador de audio para AM en gabinete estándar de rack de 19 pulgadas.',
    longDescription:
      'El procesador de audio BIS-AP735 para radiodifusión AM está construido como un solo gabinete de 19 pulgadas por 1 unidad de rack, integrando el procesamiento de audio que la planta transmisora necesita en un formato compacto y profesional.',
    specs: [
      ['Aplicación', 'Procesamiento de audio para AM'],
      ['Formato', 'Gabinete rack 19" · 1U'],
      ['Integración', 'Plantas transmisoras AM'],
    ],
    applications: ['Plantas transmisoras AM', 'Optimización de señal al aire'],
  },

  /* ── AUTOMATIZACIÓN ──────────────────────────────── */
  {
    id: 'automatizacion-broadcast',
    name: 'Automatización para Radiodifusión',
    category: 'automatizacion',
    shortDescription:
      'Sistemas de automatización con control y monitoreo remoto para estaciones de radio.',
    longDescription:
      'Soluciones de automatización para estaciones de radiodifusión, con control y monitoreo remoto de los sistemas de transmisión. Cada proyecto se especifica según los requerimientos de la estación: consulte con nuestro equipo la configuración adecuada para su planta.',
    specs: [
      ['Control', 'Remoto'],
      ['Monitoreo', 'Según configuración del proyecto'],
      ['Configuración', 'A pedido, según requerimientos'],
    ],
    applications: ['Automatización de estaciones', 'Operación desatendida', 'Monitoreo de plantas'],
  },

  /* ── COMPONENTES RF ──────────────────────────────── */
  {
    id: 'condensadores-ceramicos',
    name: 'Condensadores Cerámicos de Alta Potencia',
    category: 'componentes-rf',
    shortDescription:
      'Condensadores cerámicos de alta potencia para RF y transmisión, en capacidades de 100 pF a 6000 pF.',
    longDescription:
      'Condensadores cerámicos de alta potencia para aplicaciones de RF y transmisión, disponibles en capacidades de 100 pF, 400 pF, 500 pF, 1000 pF, 2000 pF y 4000 pF (±20%), y 6000 pF (±20%).',
    specs: [
      ['Tipo', 'Cerámico de alta potencia'],
      ['Capacidades', '100 · 400 · 500 · 1000 · 2000 · 4000 pF (±20%)'],
      ['Capacidad especial', '6000 pF (±20%)'],
      ['Aplicación', 'RF y sistemas de transmisión'],
    ],
    applications: ['Circuitos de transmisión', 'Acopladores y ATU', 'Etapas de potencia RF'],
  },
  {
    id: 'coaxial-profesional',
    name: 'Cable Coaxial Profesional',
    category: 'componentes-rf',
    shortDescription:
      'Cable coaxial profesional 1/2" Super Flex y LMR-400 para sistemas de transmisión.',
    longDescription:
      'Cable coaxial profesional para sistemas de transmisión y telecomunicaciones, disponible en versiones 1/2" Super Flex y LMR-400, apto para tendidos entre equipos de transmisión y sistemas de antenas.',
    specs: [
      ['Versiones', '1/2" Super Flex · LMR-400'],
      ['Aplicación', 'Transmisión y telecomunicaciones'],
      ['Uso', 'Plantas transmisoras y sistemas de antenas'],
    ],
    applications: ['Líneas de transmisión', 'Conexión a antenas', 'Proyectos de planta'],
  },
  {
    id: 'circuitos-integrados',
    name: 'Circuitos Integrados para Electrónica y RF',
    category: 'componentes-rf',
    shortDescription:
      'Circuitos integrados profesionales para aplicaciones de electrónica y radiofrecuencia.',
    longDescription:
      'Suministro de circuitos integrados para electrónica y RF profesional, orientados a mantenimiento, fabricación y desarrollo de equipos de radiodifusión y telecomunicaciones.',
    specs: [
      ['Aplicación', 'Electrónica y RF profesional'],
      ['Disponibilidad', 'Consultar stock y modelos'],
    ],
    applications: ['Mantenimiento de equipos', 'Fabricación electrónica', 'Proyectos RF'],
  },
  {
    id: 'atu',
    name: 'Unidad de Sintonía de Antena (ATU)',
    category: 'componentes-rf',
    shortDescription:
      'Acoplador de antena para sistemas de transmisión, complementario a las antenas SENDER.',
    longDescription:
      'Unidad de Sintonía de Antena (ATU) para sistemas de transmisión. El diseño de monopolo plegado SENDER simplifica el uso del acoplador de antena, manteniendo o mejorando el patrón de irradiación del sistema.',
    specs: [
      ['Función', 'Acoplamiento de antena'],
      ['Compatibilidad', 'Sistemas de antena SENDER'],
      ['Configuración', 'Según frecuencia y potencia del proyecto'],
    ],
    applications: ['Plantas transmisoras AM', 'Sistemas de antena', 'Optimización de RF'],
  },
  {
    id: 'amplificador-clase-d',
    name: 'Amplificador Clase D · 1000 W',
    category: 'componentes-rf',
    shortDescription:
      'Amplificador de potencia Clase D de 1000 W para sistemas de transmisión.',
    longDescription:
      'Amplificador Clase D de 1000 W basado en la misma tecnología de alta eficiencia utilizada en la serie de transmisores SENDER SS, para integración en sistemas de transmisión y proyectos especiales.',
    specs: [
      ['Potencia', '1000 W'],
      ['Clase', 'D, alta eficiencia'],
      ['Integración', 'Sistemas de transmisión y proyectos especiales'],
    ],
    applications: ['Amplificación de potencia', 'Proyectos especiales', 'Integración OEM'],
  },

  /* ── CARROS FOTOVOLTAICOS ────────────────────────── */
  {
    id: 'carro-fotovoltaico',
    name: 'Carro Fotovoltaico · 2 a 7 kVA',
    category: 'energia',
    shortDescription:
      'Solución móvil de energía solar con mástil telescópico de 12 metros para operación autónoma en terreno.',
    longDescription:
      'Carros fotovoltaicos SENDER para alimentación autónoma de sitios de transmisión y proyectos en terreno: potencia de 2 kVA a 7 kVA, mástil telescópico de 12 metros, rueda de repuesto y extintor incluidos. Ideales para sitios remotos sin red eléctrica o como respaldo energético de plantas transmisoras.',
    specs: [
      ['Potencia', '2 kVA a 7 kVA'],
      ['Mástil', 'Telescópico de 12 metros'],
      ['Incluye', 'Rueda de repuesto'],
      ['Seguridad', 'Extintor'],
      ['Aplicación', 'Energía autónoma para sitios de transmisión'],
    ],
    applications: [
      'Sitios de transmisión remotos',
      'Respaldo energético de plantas',
      'Proyectos temporales y móviles',
    ],
    image: 'assets/images/products/carro-fotovoltaico.jpg',
    featured: true,
  },
]

/* Imágenes reales recuperadas de www.sender.cl (archivo Wayback Machine) */
const IMAGES = {
  'am-1000ss': 'assets/images/products/am-1000ss.png',
  'am-2500ss': 'assets/images/products/am-2500ss.jpg',
  'am-5000ss': 'assets/images/products/am-5000ss.jpg',
  'am-10000ss': 'assets/images/products/am-10000ss.jpg',
  'monopolo-am': 'assets/images/products/antena-mast.jpg',
  'hf-2-30': 'assets/images/products/hf-balun.jpg',
  'stal-200': 'assets/images/products/stl-stal100.jpg',
  'torres-galvanizadas': 'assets/images/products/torre-valparaiso.jpg',
  'circuitos-integrados': 'assets/images/products/circuitos.jpg',
  atu: 'assets/images/products/atu.jpg',
}
products.forEach((p) => {
  if (IMAGES[p.id]) p.image = IMAGES[p.id]
})

/* ── Helpers ─────────────────────────────────────────── */

export const getAllProducts = () => products

export const getProductsByCategory = (slug) =>
  slug === 'all' ? products : products.filter((p) => p.category === slug)

export const getProductById = (id) => products.find((p) => p.id === id)

export const getCategory = (slug) => CATEGORIES.find((c) => c.slug === slug)

export const getCategoryName = (slug) => getCategory(slug)?.name || 'Catálogo'

export const featuredProducts = () => products.filter((p) => p.featured)

export const relatedProducts = (product, limit = 3) =>
  products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit)
