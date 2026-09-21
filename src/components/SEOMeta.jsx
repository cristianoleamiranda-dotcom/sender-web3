import { useEffect } from 'react'
import { seoConfig, productSchema } from '../data/seo'

/* Actualiza título, meta tags, Open Graph y JSON-LD según la ruta */
export default function SEOMeta({ product, category }) {
  useEffect(() => {
    let title = seoConfig.global.title
    let description = seoConfig.global.description

    if (product) {
      ;({ title, description } = seoConfig.producto(product))
    } else if (category) {
      ;({ title, description } = category === 'catalogo'
        ? seoConfig.catalogo
        : seoConfig.categoria(category))
    }

    document.title = title
    updateMetaTag('description', description)
    updateMetaTag('keywords', seoConfig.global.keywords)
    updateMetaTag('og:title', title, 'property')
    updateMetaTag('og:description', description, 'property')
    updateMetaTag('og:type', product ? 'product' : 'website', 'property')

    if (product) {
      addStructuredData(productSchema(product))
    } else {
      removeStructuredData()
    }

    return () => removeStructuredData()
  }, [product, category])

  return null
}

function updateMetaTag(name, content, attribute = 'name') {
  let el = document.querySelector(`meta[${attribute}="${name}"]`)
  if (el) {
    el.setAttribute('content', content)
  } else {
    el = document.createElement('meta')
    el.setAttribute(attribute, name)
    el.setAttribute('content', content)
    document.head.appendChild(el)
  }
}

function addStructuredData(data) {
  let script = document.querySelector('script[data-seo="product"]')
  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seo', 'product')
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

function removeStructuredData() {
  document.querySelectorAll('script[data-seo="product"]').forEach((s) => s.remove())
}
