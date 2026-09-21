import { useState } from 'react'
import { navigate, goHomeScroll } from '../router'

const LINKS = [
  { label: 'Inicio', action: () => navigate('/') },
  { label: 'Catálogo', action: () => navigate('/categoria/all') },
  { label: 'Nosotros', action: () => goHomeScroll('#nosotros') },
  { label: 'Contacto', action: () => goHomeScroll('#contacto') },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const run = (fn) => {
    setOpen(false)
    fn()
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-xl font-black uppercase tracking-widest"
        >
          <span className="flex h-5 items-end gap-[3px]">
            <span className="eq-bar" style={{ animationDelay: '0s' }} />
            <span className="eq-bar" style={{ animationDelay: '0.2s' }} />
            <span className="eq-bar" style={{ animationDelay: '0.4s' }} />
          </span>
          SENDER<span className="text-sender">.</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => run(l.action)}
                className="text-sm uppercase tracking-wider text-white/70 transition-colors hover:text-sender"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => goHomeScroll('#contacto')}
              className="rounded-full bg-sender px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-[#00a0d6]"
            >
              Cotizar
            </button>
          </li>
        </ul>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menú">
          <svg viewBox="0 0 24 24" className="h-6 w-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-white/5 bg-black/90 px-6 py-4 md:hidden">
          {LINKS.map((l) => (
            <li key={l.label} className="py-3">
              <button onClick={() => run(l.action)} className="uppercase tracking-wider text-white/80 hover:text-sender">
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
