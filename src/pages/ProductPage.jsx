import SEOMeta from '../components/SEOMeta'
import ProductShowcase from '../components/ProductShowcase'
import ProductCard from '../components/ProductCard'
import { getProductById, relatedProducts } from '../data/products'
import { navigate, useReveal } from '../router'

export default function ProductPage({ slug }) {
  useReveal()
  const product = getProductById(slug)

  if (!product) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-[72px] text-center">
        <span className="text-6xl font-black text-sender">404</span>
        <h1 className="mt-4 text-2xl font-bold">Producto no encontrado</h1>
        <p className="mt-2 text-white/55">El equipo que buscas no existe o fue movido del catálogo.</p>
        <button
          onClick={() => navigate('/categoria/all')}
          className="mt-8 rounded-full bg-sender px-8 py-3 text-sm font-bold uppercase tracking-wider"
        >
          Ver catálogo completo
        </button>
      </main>
    )
  }

  const related = relatedProducts(product)

  return (
    <main className="pt-[72px]">
      <SEOMeta product={product} />
      <ProductShowcase product={product} />

      {related.length > 0 && (
        <div className="border-t border-white/5 bg-white/[0.02] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal mb-8 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-black uppercase tracking-tight md:text-3xl">
                Productos <span className="text-sender">relacionados</span>
              </h2>
              <button
                onClick={() => navigate(`/categoria/${product.category}`)}
                className="text-xs font-bold uppercase tracking-wider text-sender hover:underline"
              >
                Ver categoría →
              </button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
