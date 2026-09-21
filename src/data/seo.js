/* ══════════════════════════════════════════════════════════
   SENDER · Configuración SEO
   ══════════════════════════════════════════════════════════ */

export const SITE_URL = 'https://cristianoleamiranda-dotcom.github.io/sender-web3'
export const MAIN_SITE = 'https://www.sender.cl'

export const seoConfig = {
  global: {
    title: 'SENDER | Tecnología que Transmite — Broadcasting y Telecomunicaciones',
    description:
      'Más de 20 años en broadcasting y telecomunicaciones en Chile: transmisores AM/FM de estado sólido, antenas profesionales, sistemas NAVTEX, enlaces STL, torres y componentes RF.',
    keywords: [
      'Sender Chile',
      'Transmisores AM Chile',
      'Transmisores FM Chile',
      'Antenas AM FM HF',
      'NAVTEX Chile',
      'Enlace STL estudio planta',
      'Torres telecomunicaciones Chile',
      'Equipos radiofrecuencia Chile',
      'Broadcasting Chile',
      'Radiodifusión profesional',
    ].join(', '),
  },
  catalogo: {
    title: 'Catálogo de Productos | SENDER Chile',
    description:
      'Catálogo completo SENDER: transmisores AM y FM, antenas, NAVTEX, enlaces STL, torres, procesamiento de audio y componentes RF.',
  },
  categoria: (cat) => ({
    title: `${cat.name} | SENDER Chile`,
    description: `${cat.blurb} Más de 20 años de experiencia en broadcasting y telecomunicaciones.`,
  }),
  producto: (product) => ({
    title: `${product.name} | SENDER Chile`,
    description: product.shortDescription,
  }),
}

/* Schema.org structured data */
export const productSchema = (product) => ({
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: product.name,
  description: product.shortDescription,
  sku: product.id,
  category: product.category,
  brand: { '@type': 'Brand', name: 'SENDER' },
  manufacturer: {
    '@type': 'Organization',
    name: 'SENDER',
    url: MAIN_SITE,
    email: 'sender@sender.cl',
    telephone: '+56983864148',
  },
  offers: {
    '@type': 'Offer',
    url: `${SITE_URL}/#/producto/${product.id}`,
    availability: 'https://schema.org/InStock',
    priceCurrency: 'CLP',
  },
})

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SENDER',
  alternateName: 'BIS SpA',
  url: MAIN_SITE,
  email: 'sender@sender.cl',
  telephone: '+56983864148',
  description:
    'Empresa chilena con más de 20 años de experiencia en telecomunicaciones y radiodifusión: transmisores AM/FM, antenas, NAVTEX, enlaces STL e infraestructura RF.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Blanco Viel 1108',
    addressLocality: 'San Miguel',
    addressRegion: 'Región Metropolitana, Santiago',
    addressCountry: 'CL',
  },
}
