import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'
import { useHashRoute } from './router'

export default function App() {
  const route = useHashRoute()
  const lenisRef = useRef(null)

  /* Smooth scroll global */
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 })
    lenisRef.current = lenis
    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  /* Escucha solicitudes de scroll a secciones */
  useEffect(() => {
    const handler = (e) => {
      const selector = e.detail
      requestAnimationFrame(() => {
        lenisRef.current?.scrollTo(selector, { offset: -72, duration: 1.2 })
      })
    }
    window.addEventListener('sender:scroll', handler)
    return () => window.removeEventListener('sender:scroll', handler)
  }, [])

  /* Al cambiar de ruta: scroll arriba o a la sección pendiente */
  useEffect(() => {
    const pending = sessionStorage.getItem('sender-scroll')
    if (pending && route.page === 'home') {
      sessionStorage.removeItem('sender-scroll')
      setTimeout(() => {
        lenisRef.current?.scrollTo(pending, { offset: -72, duration: 1.2 })
      }, 180)
    } else {
      lenisRef.current?.scrollTo(0, { immediate: true })
    }
  }, [route])

  let page
  if (route.page === 'producto') page = <ProductPage slug={route.slug} />
  else if (route.page === 'categoria') page = <CategoryPage slug={route.slug} />
  else page = <HomePage />

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={route.page + '/' + (route.slug || '')}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.32, ease: 'easeOut' }}
        >
          {page}
        </motion.div>
      </AnimatePresence>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
