import { navigate } from '../router'
import { getCategoryName } from '../data/products'
import ProductVisual from './ProductVisual'

export default function ProductCard({ product, index = 0 }) {
  return (
    <button
      onClick={() => navigate(`/producto/${product.id}`)}
      className="reveal card-hover group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left"
      style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5 bg-[#f5f6f7]">
        {product.image ? (
          <img
            src={`${import.meta.env.BASE_URL}${product.image}`}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <ProductVisual category={product.category} className="transition-transform duration-500 group-hover:scale-[1.04]" />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-sender backdrop-blur">
          {getCategoryName(product.category)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-base font-bold leading-snug">{product.name}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-white/55">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
          <span className="text-xs uppercase tracking-wider text-white/40">
            {product.specs?.[0]?.[0]}: <span className="text-sender">{product.specs?.[0]?.[1]}</span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-sender transition-transform group-hover:translate-x-1">
            Ver ficha →
          </span>
        </div>
      </div>
    </button>
  )
}
