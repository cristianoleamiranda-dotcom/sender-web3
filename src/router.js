/* ──────────────────────────────────────────────
   Router por hash: 100% compatible con GitHub Pages
   Rutas:  #/  ·  #/categoria/slug  ·  #/producto/id
   ────────────────────────────────────────────── */
import { useEffect, useState } from 'react'

export function parseHash(hash) {
  const h = (hash || '').replace(/^#/, '')
  const parts = h.split('/').filter(Boolean)
  if (parts.length === 0) return { page: 'home' }
  if (parts[0] === 'categoria' && parts[1])
    return { page: 'categoria', slug: decodeURIComponent(parts[1]) }
  if (parts[0] === 'producto' && parts[1])
    return { page: 'producto', slug: decodeURIComponent(parts[1]) }
  return { page: 'home' }
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash))
  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

export function navigate(path) {
  window.location.hash = path
}

/* Va al inicio y hace scroll a una sección (ej: '#contacto') */
export function goHomeScroll(selector) {
  const current = parseHash(window.location.hash)
  if (current.page === 'home') {
    window.dispatchEvent(new CustomEvent('sender:scroll', { detail: selector }))
  } else {
    sessionStorage.setItem('sender-scroll', selector)
    navigate('/')
  }
}

/* Hook: animación reveal de secciones al hacer scroll */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
