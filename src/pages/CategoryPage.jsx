import SEOMeta from '../components/SEOMeta'
import VideoBackground from '../components/VideoBackground'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, getCategory, getProductsByCategory } from '../data/products'
import { navigate, useReveal } from '../router'

export default function CategoryPage({ slug }) {
  useReveal()
  const isAll = slug === 'all'
  const category = getCategory(slug)
  const items = getProductsByCategory(isAll ? 'all' : slug)

  return (
    <main className="pt-[72px]">
      <SEOMeta category={isAll ? 'catalogo' : category} />

      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/5">
        <VideoBackground opacity={0.6} />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-white/45">
            <button onClick={() => navigate('/')} className="hover:text-sender">
              Inicio
            </button>
            <span>›</span>
            <span className="text-white">{isAll ? 'Catálogo' : category?.name}</span>
          </div>
          <span className="mt-6 block text-xs font-bold uppercase tracking-[0.3em] text-sender">
            {isAll ? `${items.length} productos` : category?.short}
          </span>
          <h1 className="mt-2 text-4xl font-black uppercase tracking-tight md:text-6xl">
            {isAll ? (
              <>
                Catálogo <span className="text-sender">completo</span>
              </>
            ) : (
              <>
                {category?.name.split(' ')[0]} <span className="text-sender">{category?.name.split(' ').slice(1).join(' ')}</span>
              </>
            )}
          </h1>
          <p className="mt-4 max-w-2xl text-white/60">
            {isAll
              ? 'Todo el equipamiento SENDER: transmisión, antenas, enlaces, infraestructura y componentes RF.'
              : category?.blurb}
          </p>
        </div>
      </div>

      {/* Filtro de categorías */}
      <div className="border-b border-white/5 bg-black/40">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 py-4">
          <button
            onClick={() => navigate('/categoria/all')}
            className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
              isAll ? 'bg-sender text-black' : 'bg-white/5 text-white/60 hover:bg-white/15'
            }`}
          >
            Todos
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.slug}
              onClick={() => navigate(`/categoria/${c.slug}`)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                slug === c.slug ? 'bg-sender text-black' : 'bg-white/5 text-white/60 hover:bg-white/15'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de productos */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        {items.length === 0 ? (
          <p className="py-20 text-center text-white/50">No hay productos en esta categoría.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="border-t border-white/5 bg-sender/5 py-14">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6">
          <div>
            <h3 className="text-2xl font-black uppercase">¿No encuentras lo que buscas?</h3>
            <p className="mt-1 text-white/60">
              Fabricamos y configuramos soluciones a pedido. Cuéntanos tu proyecto.
            </p>
          </div>
          <a
            href="https://wa.me/56983864148?text=Hola%20SENDER%2C%20busco%20una%20soluci%C3%B3n%20a%20medida."
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-sender px-8 py-3.5 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-[#00a0d6]"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
}
