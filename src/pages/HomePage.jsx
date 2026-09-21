import { useState } from 'react'
import SEOMeta from '../components/SEOMeta'
import Hero3D from '../components/Hero3D'
import SignalVisualization from '../components/SignalVisualization'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, featuredProducts } from '../data/products'
import { navigate, goHomeScroll, useReveal } from '../router'

const MARQUEE = [
  'Transmisores AM',
  'Transmisores FM',
  'Antenas HF',
  'NAVTEX',
  'Enlaces STL',
  'Torres Galvanizadas',
  'Procesamiento de Audio',
  'Componentes RF',
]

const STATS = [
  { value: '+20', label: 'Años de experiencia' },
  { value: '10 kW', label: 'Transmisores AM estado sólido' },
  { value: '2–30 MHz', label: 'Antenas HF profesionales' },
  { value: 'AM · FM', label: 'HF · NAVTEX · STL' },
]

const PROYECTOS = [
  'Sistema NAVTEX · Armada de Chile',
  'Comunicaciones HF de largo alcance · Isla de Pascua',
  'Desmontaje torre autosoportada 60 m · Playa Ancha, Valparaíso',
  'Proyectos nacionales e internacionales',
]

export default function HomePage() {
  useReveal()
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const whatsappFromForm = `https://wa.me/56983864148?text=${encodeURIComponent(
    `Hola SENDER, soy ${form.nombre || 'un visitante'}. ${form.mensaje || 'Quisiera más información.'}`,
  )}`

  return (
    <main>
      <SEOMeta />

      {/* ══════════ HERO ══════════ */}
      <section id="inicio" className="relative h-screen w-full overflow-hidden">
        <Hero3D />
        <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="mb-6 rounded-full border border-sender/40 bg-sender/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-sender">
            Más de 20 años en Broadcasting & Telecomunicaciones
          </span>
          <h1 className="text-glow text-6xl font-black uppercase tracking-tight md:text-8xl">
            SENDER<span className="text-sender">.</span>
          </h1>
          <p className="mt-4 text-xl font-light italic text-white/85 md:text-2xl">
            Tecnología que <span className="font-semibold not-italic text-sender">transmite</span>
          </p>
          <p className="mt-4 max-w-xl text-white/60">
            Ingeniería, equipamiento RF y sistemas de transmisión: transmisores AM/FM, antenas
            profesionales, NAVTEX y enlaces STL para proyectos nacionales e internacionales.
          </p>
          <div className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/categoria/all')}
              className="rounded-full bg-sender px-8 py-3 font-semibold uppercase tracking-wider transition-colors hover:bg-[#00a0d6]"
            >
              Ver catálogo
            </button>
            <button
              onClick={() => goHomeScroll('#contacto')}
              className="rounded-full border border-white/25 px-8 py-3 font-semibold uppercase tracking-wider transition-colors hover:border-sender hover:text-sender"
            >
              Contáctanos
            </button>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-black" />
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/40">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* ══════════ MARQUEE ══════════ */}
      <div className="overflow-hidden border-y border-sender/20 bg-[#0085B2]/5 py-3">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="flex items-center gap-10 text-sm font-bold uppercase tracking-[0.3em] text-white/50">
              {m} <span className="text-sender">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════ CATEGORÍAS ══════════ */}
      <section id="catalogo" className="mx-auto max-w-6xl px-6 py-24">
        <div className="reveal mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-sender">01 — Líneas de producto</span>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">
              Catálogo <span className="text-sender">SENDER</span>
            </h2>
          </div>
          <button
            onClick={() => navigate('/categoria/all')}
            className="text-sm font-bold uppercase tracking-wider text-sender hover:underline"
          >
            Ver todo el catálogo →
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <button
              key={c.slug}
              onClick={() => navigate(`/categoria/${c.slug}`)}
              className="reveal card-hover group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left"
              style={{ transitionDelay: `${(i % 3) * 0.07}s` }}
            >
              <span className="absolute right-4 top-3 text-4xl font-black text-white/[0.06] transition-colors group-hover:text-sender/20">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-sender">{c.short}</span>
              <h3 className="mt-2 pr-10 text-lg font-bold leading-snug">{c.name}</h3>
              <p className="mt-2 text-sm text-white/55">{c.blurb}</p>
              <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-white/40 transition-colors group-hover:text-sender">
                Explorar →
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ══════════ DESTACADOS ══════════ */}
      <section className="border-y border-white/5 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-sender">02 — Destacados</span>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">
              Equipos <span className="text-sender">destacados</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts().map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ NOSOTROS ══════════ */}
      <section id="nosotros" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-sender">03 — Quiénes somos</span>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">
              Señal chilena,
              <br />
              <span className="text-sender">alcance global</span>
            </h2>
            <p className="mt-6 leading-relaxed text-white/70">
              Somos una empresa chilena con más de 20 años de experiencia en el área de
              telecomunicaciones y radiodifusión, especializada en soluciones de ingeniería,
              equipamiento RF y sistemas de transmisión.
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              Desarrollamos y suministramos tecnología para proyectos nacionales e
              internacionales, entregando soluciones confiables en equipos AM/FM/HF/NAVTEX,
              antenas profesionales y sistemas de comunicación.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {PROYECTOS.map((p) => (
                <span key={p} className="rounded-full border border-sender/30 bg-sender/10 px-3 py-1.5 text-xs text-white/75">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal grid grid-cols-2 gap-5">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
                <div className="text-3xl font-black text-sender md:text-4xl">{s.value}</div>
                <div className="mt-2 text-sm text-white/60">{s.label}</div>
              </div>
            ))}
            <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <SignalVisualization bars={56} className="h-10" />
              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.35em] text-white/35">
                Transmitiendo desde Santiago, Chile
              </p>
            </div>
            <div className="col-span-2 overflow-hidden rounded-2xl border border-white/10 bg-[#f5f6f7]">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/products/familia-am.jpg`}
                alt="Familia de transmisores AM SENDER"
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <p className="bg-black px-4 py-2.5 text-center text-[10px] uppercase tracking-[0.25em] text-white/50">
                Familia de transmisores AM SENDER · 1 a 10 kW
              </p>
            </div>
          </div>
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-6">
          <span className="rounded-xl bg-white p-2.5">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/logo-sender.png`}
              alt="Logo SENDER"
              className="h-9"
            />
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider">
              Empresa chilena · más de 20 años de trayectoria
            </p>
            <a
              href="https://www.sender.cl"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-sender hover:underline"
            >
              Sitio oficial: www.sender.cl →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ CONTACTO ══════════ */}
      <section id="contacto" className="border-t border-white/5 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-14 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-sender">04 — Hablemos</span>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">
              Cotiza tu <span className="text-sender">proyecto</span>
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-5">
            <div className="reveal space-y-4 md:col-span-2">
              <a href="tel:+56983864148" className="card-hover flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="rounded-xl bg-sender/15 p-3 text-sender">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.6 2.81.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm text-white/50">Celular / WhatsApp</span>
                  <span className="font-semibold">( +56 9 ) 8386 4148</span>
                </span>
              </a>

              <a href="mailto:sender@sender.cl" className="card-hover flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="rounded-xl bg-sender/15 p-3 text-sender">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm text-white/50">E-mail</span>
                  <span className="font-semibold">sender@sender.cl</span>
                  <span className="block text-xs text-white/40">Ventas: bis.ltda@gmail.com</span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="rounded-xl bg-sender/15 p-3 text-sender">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm text-white/50">Dirección</span>
                  <span className="text-sm font-semibold">Blanco Viel #1108, San Miguel, Santiago, Chile</span>
                </span>
              </div>

              <a
                href="https://www.sender.cl"
                target="_blank"
                rel="noreferrer"
                className="card-hover flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="rounded-xl bg-sender/15 p-3 text-sender">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18" />
                    <path d="M12 3a15 15 0 0 1 0 18" />
                    <path d="M12 3a15 15 0 0 0 0 18" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm text-white/50">Sitio principal</span>
                  <span className="font-semibold">www.sender.cl</span>
                </span>
              </a>
            </div>

            <div className="reveal md:col-span-3">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-sender/40 bg-sender/10 p-10 text-center">
                  <svg viewBox="0 0 24 24" className="mb-4 h-14 w-14 text-sender" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m8 12 3 3 5-6" />
                  </svg>
                  <h3 className="text-2xl font-bold">¡Mensaje enviado!</h3>
                  <p className="mt-2 max-w-md text-white/70">
                    Gracias por escribirnos, {form.nombre || 'amigo'}. Te responderemos a la brevedad.
                  </p>
                  <a
                    href={whatsappFromForm}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-black transition-opacity hover:opacity-90"
                  >
                    Enviar por WhatsApp →
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                  className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      required
                      name="nombre"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                      placeholder="Nombre *"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/40 focus:border-sender"
                    />
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                      placeholder="Email *"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/40 focus:border-sender"
                    />
                  </div>
                  <input
                    name="empresa"
                    value={form.empresa}
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    placeholder="Empresa / Radioemisora / Institución"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/40 focus:border-sender"
                  />
                  <textarea
                    required
                    name="mensaje"
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    placeholder="Cuéntanos tu proyecto: transmisor, antena, enlace, torre... *"
                    rows="5"
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/40 focus:border-sender"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-sender py-3.5 font-semibold uppercase tracking-wider transition-colors hover:bg-[#00a0d6]"
                  >
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
