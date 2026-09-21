import { CATEGORIES } from '../data/products'
import { navigate, goHomeScroll } from '../router'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-black uppercase tracking-widest">
            <span className="flex h-4 items-end gap-[3px]">
              <span className="eq-bar" style={{ animationDelay: '0s' }} />
              <span className="eq-bar" style={{ animationDelay: '0.2s' }} />
              <span className="eq-bar" style={{ animationDelay: '0.4s' }} />
            </span>
            SENDER<span className="text-sender">.</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/50">
            Tecnología que transmite. Más de 20 años en broadcasting,
            telecomunicaciones y equipamiento RF.
          </p>
          <a
            href="https://www.sender.cl"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm text-sender hover:underline"
          >
            www.sender.cl
          </a>
        </div>

        <div className="md:col-span-2">
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            Productos
          </h4>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {CATEGORIES.slice(0, 8).map((c) => (
              <button
                key={c.slug}
                onClick={() => navigate(`/categoria/${c.slug}`)}
                className="text-left text-sm text-white/60 transition-colors hover:text-sender"
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            Contacto
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <a href="tel:+56983864148" className="hover:text-sender">
                (+56 9) 8386 4148
              </a>
            </li>
            <li>
              <a href="mailto:sender@sender.cl" className="hover:text-sender">
                sender@sender.cl
              </a>
            </li>
            <li>
              <a href="mailto:bis.ltda@gmail.com" className="hover:text-sender">
                bis.ltda@gmail.com
              </a>
            </li>
            <li className="text-white/40">
              Blanco Viel #1108, San Miguel,
              <br />
              Santiago, Chile
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-white/35 md:flex-row">
          <p>© {new Date().getFullYear()} SENDER · Tecnología que transmite · Santiago, Chile</p>
          <div className="flex gap-5">
            <button onClick={() => goHomeScroll('#nosotros')} className="hover:text-sender">
              Nosotros
            </button>
            <button onClick={() => navigate('/categoria/all')} className="hover:text-sender">
              Catálogo
            </button>
            <button onClick={() => goHomeScroll('#contacto')} className="hover:text-sender">
              Contacto
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
