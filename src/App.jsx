import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, Stars } from '@react-three/drei'
import * as THREE from 'three'
import Lenis from 'lenis'

/* ══════════════════════════════════════════════════════════
   SENDER · Tecnología que transmite
   ⚙️  EDITA AQUÍ tus datos de contacto reales
   ══════════════════════════════════════════════════════════ */
const CONTACT = {
  phoneDisplay: '+56 9 1234 5678',
  phoneHref: 'tel:+56912345678',
  whatsapp:
    'https://wa.me/56912345678?text=Hola%20SENDER%2C%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto.',
  email: 'contacto@sender.cl',
  location: 'Santiago, Chile',
}

const NAV_LINKS = [
  { label: 'Inicio', target: '#inicio' },
  { label: 'Servicios', target: '#servicios' },
  { label: 'Nosotros', target: '#nosotros' },
  { label: 'Contacto', target: '#contacto' },
]

const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    {children}
  </svg>
)

const SERVICES = [
  {
    title: 'Broadcasting',
    desc: 'Transmisión de señales de TV y radio con equipamiento profesional y cobertura garantizada en todo Chile.',
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="1.5" />
        <path d="M8.5 8.5a5 5 0 0 0 0 7" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7" />
        <path d="M5.6 5.6a9 9 0 0 0 0 12.8" />
        <path d="M18.4 5.6a9 9 0 0 1 0 12.8" />
      </Icon>
    ),
  },
  {
    title: 'Telecomunicaciones',
    desc: 'Diseño e implementación de redes de datos, enlaces punto a punto y punto a multipunto para empresas.',
    icon: (
      <Icon>
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M12 7v4M12 11l-6 6M12 11l6 6M7 19h10" />
      </Icon>
    ),
  },
  {
    title: 'Fibra Óptica',
    desc: 'Tendido, fusión y certificación de fibra óptica para redes de alta velocidad y larga distancia.',
    icon: (
      <Icon>
        <path d="M13 2 3 14h7l-1 8 11-13h-7l0-7z" />
      </Icon>
    ),
  },
  {
    title: 'Streaming & IPTV',
    desc: 'Plataformas de streaming en vivo, IPTV corporativo y distribución de contenidos multiplataforma.',
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="M10 8.5l5.5 3.5-5.5 3.5z" />
      </Icon>
    ),
  },
  {
    title: 'Enlaces Satelitales',
    desc: 'Soluciones satelitales para zonas remotas, transmisiones móviles DSNG y respaldo de enlaces críticos.',
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </Icon>
    ),
  },
  {
    title: 'Soporte & Mantención',
    desc: 'Mantención preventiva y correctiva 24/7 para tus sistemas de transmisión y redes de telecomunicaciones.',
    icon: (
      <Icon>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </Icon>
    ),
  },
]

const STATS = [
  { value: '+15', label: 'Años de experiencia' },
  { value: '+120', label: 'Proyectos entregados' },
  { value: '24/7', label: 'Soporte técnico' },
  { value: '100%', label: 'Cobertura nacional' },
]

/* ──────────────────────────────────────────────
   ESCENA 3D
   ────────────────────────────────────────────── */

// Rejilla de puntos que ondula como una señal de transmisión
function WaveGrid() {
  const ref = useRef()
  const count = 42
  const separation = 0.55

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * count * 3)
    for (let i = 0; i < count * count; i++) {
      const x = Math.floor(i / count) - count / 2
      const z = (i % count) - count / 2
      positions[i * 3] = x * separation
      positions[i * 3 + 1] = 0
      positions[i * 3 + 2] = z * separation
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return g
  }, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    const pos = ref.current.geometry.attributes.position
    for (let i = 0; i < count * count; i++) {
      const x = Math.floor(i / count) - count / 2
      const z = (i % count) - count / 2
      const dist = Math.sqrt(x * x + z * z)
      pos.array[i * 3 + 1] =
        Math.sin(dist * 0.9 - t * 2.2) * 0.55 * Math.exp(-dist * 0.07)
    }
    pos.needsUpdate = true
  })

  return (
    <points ref={ref} geometry={geometry} position={[0, -2.1, -1]}>
      <pointsMaterial
        size={0.04}
        color="#0085B2"
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

// Núcleo transmisor: icosaedro wireframe + esfera emisiva
function Core() {
  const ref = useRef()
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.25
    ref.current.rotation.x += delta * 0.06
  })
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <group>
        <mesh ref={ref}>
          <icosahedronGeometry args={[1.25, 1]} />
          <meshBasicMaterial wireframe color="#0085B2" transparent opacity={0.5} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshStandardMaterial
            color="#00151d"
            emissive="#0085B2"
            emissiveIntensity={0.7}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>
      </group>
    </Float>
  )
}

// Ondas de expansión (señal de broadcast)
function PulseRings() {
  const group = useRef()
  useFrame(({ clock }) => {
    if (!group.current) return
    const t = clock.getElapsedTime()
    group.current.children.forEach((ring, i) => {
      const phase = (t * 0.5 + i * 0.33) % 1
      const scale = 1 + phase * 3.2
      ring.scale.setScalar(scale)
      ring.material.opacity = 0.45 * (1 - phase)
    })
  })
  return (
    <group ref={group}>
      {[0, 1, 2].map((i) => (
        <mesh key={i}>
          <ringGeometry args={[1.32, 1.36, 64]} />
          <meshBasicMaterial
            color="#0085B2"
            transparent
            opacity={0.4}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  )
}

// Parallax suave con el mouse
function Rig() {
  useFrame(({ camera, pointer }) => {
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.05
    camera.position.y += (0.4 + pointer.y * 0.3 - camera.position.y) * 0.05
    camera.lookAt(0, 0, 0)
  })
  return null
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#0085B2" />
      <Stars radius={60} depth={40} count={1800} factor={3} saturation={0} fade speed={0.8} />
      <Sparkles count={80} scale={[10, 6, 10]} size={2} speed={0.4} color="#0085B2" opacity={0.6} />
      <Core />
      <PulseRings />
      <WaveGrid />
      <Rig />
    </>
  )
}

/* ──────────────────────────────────────────────
   APP
   ────────────────────────────────────────────── */

export default function App() {
  const lenisRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  // Smooth scroll con Lenis
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

  // Animación reveal al hacer scroll
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
      { threshold: 0.15 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const scrollTo = (selector) => {
    if (lenisRef.current) lenisRef.current.scrollTo(selector, { offset: -72, duration: 1.4 })
  }

  const handleNav = (e, target) => {
    e.preventDefault()
    setMenuOpen(false)
    scrollTo(target)
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const whatsappFromForm = `https://wa.me/${CONTACT.whatsapp
    .split('wa.me/')[1]
    .split('?')[0]}?text=${encodeURIComponent(
    `Hola SENDER, soy ${form.nombre || 'un visitante'}. ${form.mensaje || 'Quisiera más información.'}`,
  )}`

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ══════════ NAVBAR ══════════ */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
        <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
          <a
            href="#inicio"
            onClick={(e) => handleNav(e, '#inicio')}
            className="flex items-center gap-2 text-xl font-black tracking-widest"
          >
            <span className="flex h-5 items-end gap-[3px]">
              <span className="eq-bar" style={{ animationDelay: '0s' }} />
              <span className="eq-bar" style={{ animationDelay: '0.2s' }} />
              <span className="eq-bar" style={{ animationDelay: '0.4s' }} />
            </span>
            SENDER<span className="text-sender">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.target}>
                <a
                  href={l.target}
                  onClick={(e) => handleNav(e, l.target)}
                  className="text-sm text-white/70 transition-colors hover:text-sender"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={(e) => handleNav(e, '#contacto')}
                className="rounded-full bg-sender px-5 py-2 text-sm font-semibold transition-colors hover:bg-[#00a0d6]"
              >
                Cotizar
              </a>
            </li>
          </ul>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </nav>

        {menuOpen && (
          <ul className="border-t border-white/5 bg-black/90 px-6 py-4 md:hidden">
            {NAV_LINKS.map((l) => (
              <li key={l.target} className="py-3">
                <a
                  href={l.target}
                  onClick={(e) => handleNav(e, l.target)}
                  className="text-white/80 hover:text-sender"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* ══════════ HERO ══════════ */}
      <section id="inicio" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Canvas
            camera={{ position: [0, 0.4, 6.2], fov: 55 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
          >
            <Scene />
          </Canvas>
        </div>

        <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="mb-6 rounded-full border border-sender/40 bg-sender/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-sender">
            Broadcasting & Telecomunicaciones · Chile
          </span>
          <h1 className="text-glow text-6xl font-black tracking-tight md:text-8xl">
            SENDER<span className="text-sender">.</span>
          </h1>
          <p className="mt-4 text-xl font-light text-white/80 md:text-2xl">
            Tecnología que <span className="font-semibold text-sender">transmite</span>
          </p>
          <p className="mt-4 max-w-xl text-white/60">
            Conectamos señales, personas y territorios: soluciones integrales de broadcasting,
            fibra óptica y telecomunicaciones para todo Chile.
          </p>
          <div className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#servicios"
              onClick={(e) => handleNav(e, '#servicios')}
              className="rounded-full bg-sender px-8 py-3 font-semibold transition-colors hover:bg-[#00a0d6]"
            >
              Ver servicios
            </a>
            <a
              href="#contacto"
              onClick={(e) => handleNav(e, '#contacto')}
              className="rounded-full border border-white/25 px-8 py-3 font-semibold transition-colors hover:border-sender hover:text-sender"
            >
              Contáctanos
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-black" />
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/40">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* ══════════ SERVICIOS ══════════ */}
      <section id="servicios" className="mx-auto max-w-6xl px-6 py-24">
        <div className="reveal mb-14 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-sender">Lo que hacemos</span>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Nuestros <span className="text-sender">Servicios</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Ingeniería, implementación y operación de sistemas de transmisión y conectividad
            con estándares de clase mundial.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="reveal card-hover rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="mb-5 inline-flex rounded-xl bg-sender/15 p-3 text-sender">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ NOSOTROS ══════════ */}
      <section id="nosotros" className="border-y border-white/5 bg-white/[0.02] py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-sender">Quiénes somos</span>
            <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
              Señal chilena, <br />
              <span className="text-sender">alcance global</span>
            </h2>
            <p className="mt-6 leading-relaxed text-white/70">
              SENDER es una empresa chilena especializada en broadcasting y telecomunicaciones.
              Diseñamos, implementamos y operamos sistemas de transmisión de TV, radio, fibra
              óptica y redes de datos para canales, productoras, empresas e instituciones a lo
              largo de todo el país.
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              Nuestro equipo combina experiencia en terreno con tecnología de última generación
              para que tu señal nunca deje de transmitir. Desde Arica a Magallanes, donde hay una
              antena chilena, puede haber tecnología SENDER.
            </p>
          </div>

          <div className="reveal grid grid-cols-2 gap-5">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-black/40 p-8 text-center"
              >
                <div className="text-4xl font-black text-sender">{s.value}</div>
                <div className="mt-2 text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CONTACTO ══════════ */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 py-24">
        <div className="reveal mb-14 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-sender">Hablemos</span>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Inicia tu <span className="text-sender">proyecto</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Cuéntanos qué necesitas transmitir y te ayudamos a hacerlo posible.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-5">
          {/* Info de contacto */}
          <div className="reveal space-y-4 md:col-span-2">
            <a
              href={CONTACT.phoneHref}
              className="card-hover flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="rounded-xl bg-sender/15 p-3 text-sender">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.6 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>
                <span className="block text-sm text-white/50">Teléfono</span>
                <span className="font-semibold">{CONTACT.phoneDisplay}</span>
              </span>
            </a>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="card-hover flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="rounded-xl bg-[#25D366]/15 p-3 text-[#25D366]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.29.18-1.42-.08-.13-.28-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.9 7 9.9 9.9 0 0 1-9.9 9.87zm8.42-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.41z" />
                </svg>
              </span>
              <span>
                <span className="block text-sm text-white/50">WhatsApp</span>
                <span className="font-semibold">Escríbenos directo</span>
              </span>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="card-hover flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="rounded-xl bg-sender/15 p-3 text-sender">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <span>
                <span className="block text-sm text-white/50">Email</span>
                <span className="font-semibold">{CONTACT.email}</span>
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
                <span className="block text-sm text-white/50">Ubicación</span>
                <span className="font-semibold">{CONTACT.location}</span>
              </span>
            </div>
          </div>

          {/* Formulario */}
          <div className="reveal md:col-span-3">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-sender/40 bg-sender/10 p-10 text-center">
                <svg viewBox="0 0 24 24" className="mb-4 h-14 w-14 text-sender" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m8 12 3 3 5-6" />
                </svg>
                <h3 className="text-2xl font-bold">¡Mensaje enviado!</h3>
                <p className="mt-2 max-w-md text-white/70">
                  Gracias por escribirnos, {form.nombre || 'amigo'}. Te responderemos dentro de
                  las próximas 24 horas hábiles.
                </p>
                <a
                  href={whatsappFromForm}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-black transition-opacity hover:opacity-90"
                >
                  O respáldalo por WhatsApp →
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Nombre *"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/40 focus:border-sender"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/40 focus:border-sender"
                  />
                </div>
                <input
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  placeholder="Empresa / Institución"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/40 focus:border-sender"
                />
                <textarea
                  required
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos tu proyecto *"
                  rows="5"
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/40 focus:border-sender"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-sender py-3.5 font-semibold transition-colors hover:bg-[#00a0d6]"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-2 text-lg font-black tracking-widest">
            <span className="flex h-4 items-end gap-[3px]">
              <span className="eq-bar" style={{ animationDelay: '0s' }} />
              <span className="eq-bar" style={{ animationDelay: '0.2s' }} />
              <span className="eq-bar" style={{ animationDelay: '0.4s' }} />
            </span>
            SENDER<span className="text-sender">.</span>
          </div>
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} SENDER · Tecnología que transmite · Santiago, Chile
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            {NAV_LINKS.slice(1).map((l) => (
              <a
                key={l.target}
                href={l.target}
                onClick={(e) => handleNav(e, l.target)}
                className="transition-colors hover:text-sender"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ══════════ BOTONES FLOTANTES ══════════ */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href={CONTACT.phoneHref}
          aria-label="Llamar"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-sender p-3 shadow-lg shadow-sender/30 transition-transform hover:scale-110"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.6 2.81.72A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="flex items-center justify-center rounded-full bg-[#25D366] p-3.5 shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#000">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.29.18-1.42-.08-.13-.28-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.9 7 9.9 9.9 0 0 1-9.9 9.87zm8.42-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.41z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
