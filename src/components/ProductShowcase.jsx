import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductVisual from './ProductVisual'
import Product3D from './Product3D'
import SignalVisualization from './SignalVisualization'
import { getCategoryName } from '../data/products'
import { navigate } from '../router'

export default function ProductShowcase({ product }) {
  const [view, setView] = useState('visual')
  const [showSpecs, setShowSpecs] = useState(false)

  const whatsappQuote = `https://wa.me/56983864148?text=${encodeURIComponent(
    `Hola SENDER, quiero cotizar: ${product.name}.`,
  )}`

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 py-6 text-xs uppercase tracking-wider text-white/45">
        <button onClick={() => navigate('/')} className="hover:text-sender">
          Inicio
        </button>
        <span>›</span>
        <button onClick={() => navigate('/categoria/all')} className="hover:text-sender">
          Catálogo
        </button>
        <span>›</span>
        <button
          onClick={() => navigate(`/categoria/${product.category}`)}
          className="hover:text-sender"
        >
          {getCategoryName(product.category)}
        </button>
        <span>›</span>
        <span className="text-white">{product.name}</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Visual / 3D */}
        <div className="reveal">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#05080a]">
            <div className="absolute left-4 top-4 z-10 flex gap-2">
              <button
                onClick={() => setView('visual')}
                className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  view === 'visual' ? 'bg-sender text-black' : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                Vista técnica
              </button>
              <button
                onClick={() => setView('3d')}
                className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  view === '3d' ? 'bg-sender text-black' : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                Vista 3D
              </button>
            </div>
            <div className="aspect-[16/11]">
              {view === 'visual' ? (
                <ProductVisual category={product.category} />
              ) : (
                <Product3D category={product.category} className="h-full w-full" />
              )}
            </div>
            {view === '3d' && (
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-widest text-white/50 backdrop-blur">
                Arrastra para rotar · zoom con la rueda
              </span>
            )}
          </div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4">
            <SignalVisualization bars={40} className="h-8" />
          </div>
        </div>

        {/* Info */}
        <div className="reveal">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-sender">
            {getCategoryName(product.category)}
          </span>
          <h1 className="mt-3 text-3xl font-black uppercase leading-tight tracking-tight md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-5 leading-relaxed text-white/70">{product.longDescription}</p>

          {/* Specs clave */}
          <div className="mt-7 grid grid-cols-2 gap-3">
            {product.specs.slice(0, 4).map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-sender">{k}</div>
                <div className="mt-1 text-sm font-semibold text-white/90">{v}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappQuote}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-sender px-8 py-3.5 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-[#00a0d6]"
            >
              Solicitar cotización
            </a>
            <button
              onClick={() => setShowSpecs(true)}
              className="rounded-full border border-sender px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-sender transition-colors hover:bg-sender hover:text-black"
            >
              Especificaciones completas
            </button>
          </div>

          {/* Contacto rápido */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold">¿Necesitas asesoría técnica?</h3>
            <p className="mt-1 text-sm text-white/55">
              Nuestro equipo te ayuda a especificar la solución correcta para tu proyecto.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={whatsappQuote}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:sender@sender.cl?subject=${encodeURIComponent(`Cotización ${product.name}`)}`}
                className="rounded-lg bg-white/10 px-5 py-2.5 text-sm font-bold transition-colors hover:bg-sender hover:text-black"
              >
                Email
              </a>
              <a
                href="tel:+56983864148"
                className="rounded-lg bg-white/10 px-5 py-2.5 text-sm font-bold transition-colors hover:bg-sender hover:text-black"
              >
                Llamar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal especificaciones completas */}
      <AnimatePresence>
        {showSpecs && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
            onClick={() => setShowSpecs(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              transition={{ type: 'spring', damping: 22, stiffness: 260 }}
              className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-sender/30 bg-[#0a0f13] p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-sender">
                    Ficha técnica
                  </span>
                  <h3 className="mt-1 text-2xl font-black">{product.name}</h3>
                </div>
                <button
                  onClick={() => setShowSpecs(false)}
                  className="text-2xl text-white/40 hover:text-white"
                  aria-label="Cerrar"
                >
                  ✕
                </button>
              </div>

              <div className="divide-y divide-white/5">
                {product.specs.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[1fr_1.4fr] gap-4 py-3.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-sender">{k}</div>
                    <div className="text-white/85">{v}</div>
                  </div>
                ))}
              </div>

              <h4 className="mb-3 mt-8 text-xs font-bold uppercase tracking-[0.25em] text-white/40">
                Aplicaciones
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <span
                    key={app}
                    className="rounded-full border border-sender/30 bg-sender/10 px-3.5 py-1.5 text-xs text-white/80"
                  >
                    {app}
                  </span>
                ))}
              </div>

              <a
                href={whatsappQuote}
                target="_blank"
                rel="noreferrer"
                className="mt-8 block rounded-xl bg-sender py-3.5 text-center text-sm font-bold uppercase tracking-wider transition-colors hover:bg-[#00a0d6]"
              >
                Cotizar este equipo
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
