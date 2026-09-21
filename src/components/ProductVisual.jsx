/* Ilustración técnica SVG por categoría de producto (cero assets externos) */

const S = { stroke: '#0085B2', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

function RackUnit() {
  return (
    <g {...S}>
      <rect x="60" y="85" width="280" height="90" rx="6" fill="rgba(0,133,178,0.06)" />
      <circle cx="100" cy="130" r="17" />
      <path d="M100 118v-6" />
      <circle cx="150" cy="130" r="11" />
      <rect x="185" y="108" width="95" height="26" rx="3" fill="rgba(0,133,178,0.18)" strokeWidth="1.5" />
      <path d="M192 121h30M230 115v12M240 118v6M250 112v18M260 116v8" strokeWidth="1.5" />
      <circle cx="305" cy="121" r="8" />
      <circle cx="305" cy="121" r="2.5" fill="#0085B2" />
      <path d="M70 160h260" strokeDasharray="4 6" strokeWidth="1.5" />
      <path d="M40 95l10-10M350 165l10 10M40 165l10 10M350 95l10-10" strokeWidth="1.5" opacity="0.5" />
    </g>
  )
}

function Antenna() {
  return (
    <g {...S}>
      <path d="M200 220V70" />
      <path d="M150 220l50-130 50 130" />
      <path d="M163 186h74M175 154h50M186 122h28" />
      <path d="M130 220h140" />
      <circle cx="200" cy="60" r="6" fill="rgba(0,133,178,0.35)" />
      <path d="M176 48a34 34 0 0 1 48 0" opacity="0.8" />
      <path d="M162 34a54 54 0 0 1 76 0" opacity="0.45" />
    </g>
  )
}

function Waves() {
  return (
    <g {...S}>
      <circle cx="200" cy="130" r="10" fill="rgba(0,133,178,0.35)" />
      <path d="M172 130a28 28 0 0 1 56 0" opacity="0.9" />
      <path d="M172 130a28 28 0 0 0 56 0" opacity="0.9" />
      <path d="M148 130a52 52 0 0 1 104 0" opacity="0.55" />
      <path d="M148 130a52 52 0 0 0 104 0" opacity="0.55" />
      <path d="M122 130a78 78 0 0 1 156 0" opacity="0.3" />
      <path d="M122 130a78 78 0 0 0 156 0" opacity="0.3" />
      <path d="M60 210c20-14 40-14 60 0s40 14 60 0 40-14 60 0 40 14 60 0" opacity="0.5" strokeWidth="1.5" />
    </g>
  )
}

function LinkTowers() {
  return (
    <g {...S}>
      <path d="M80 210V90M72 210l8-120 8 120M76 170h8M78 130h4" />
      <path d="M320 210V90M312 210l8-120 8 120M316 170h8M318 130h4" />
      <path d="M60 210h40M300 210h40" />
      <path d="M92 96c60-30 156-30 216 0" strokeDasharray="6 8" />
      <circle cx="200" cy="80" r="4" fill="#0085B2" />
      <path d="M188 80a12 12 0 0 1 24 0" opacity="0.6" />
    </g>
  )
}

function Lattice() {
  return (
    <g {...S}>
      <path d="M160 220L190 40h20l30 180" />
      <path d="M167 180h66M173 140h54M179 100h42M185 64h30" strokeWidth="1.5" />
      <path d="M167 180l60-40M227 180l-60-40M173 140l50-40M223 140l-50-40" strokeWidth="1" opacity="0.6" />
      <path d="M130 220h140" />
      <path d="M200 40V22" />
      <circle cx="200" cy="18" r="4" fill="rgba(0,133,178,0.35)" />
    </g>
  )
}

function Console() {
  return (
    <g {...S}>
      <path d="M70 190l30-80h200l30 80z" fill="rgba(0,133,178,0.05)" />
      <rect x="120" y="128" width="70" height="34" rx="3" strokeWidth="1.5" />
      <path d="M128 145h20M156 136v18M166 140v10M176 134v22" strokeWidth="1.5" />
      <circle cx="230" cy="145" r="12" />
      <circle cx="268" cy="145" r="12" />
      <path d="M70 210h260" strokeDasharray="4 6" strokeWidth="1.5" />
    </g>
  )
}

function Components() {
  return (
    <g {...S}>
      <path d="M60 130h50M310 130h-50" />
      <path d="M110 130c0-22 18-40 40-40s40 18 40 40-18 40-40 40" opacity="0.9" />
      <path d="M230 130c0-22 18-40 40-40s40 18 40 40" opacity="0" />
      <ellipse cx="230" cy="130" rx="14" ry="34" />
      <path d="M244 130h26" />
      <path d="M150 90v-24M150 170v24" strokeWidth="1.5" opacity="0.5" />
      <circle cx="150" cy="60" r="5" opacity="0.6" />
      <circle cx="150" cy="200" r="5" opacity="0.6" />
    </g>
  )
}

const VISUALS = {
  'transmisores-am': RackUnit,
  'transmisores-fm': RackUnit,
  audio: RackUnit,
  automatizacion: Console,
  stl: LinkTowers,
  antenas: Antenna,
  navtex: Waves,
  torres: Lattice,
  'componentes-rf': Components,
}

export default function ProductVisual({ category, className = '' }) {
  const V = VISUALS[category] || RackUnit
  return (
    <svg viewBox="0 0 400 260" className={`h-full w-full ${className}`} role="img" aria-hidden="true">
      <defs>
        <pattern id={`grid-${category}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0v20" fill="none" stroke="rgba(255,255,255,0.045)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="260" fill="#05080a" />
      <rect width="400" height="260" fill={`url(#grid-${category})`} />
      <V />
      <path d="M10 26V10h16M390 26V10h-16M10 234v16h16M390 234v16h-16" stroke="rgba(0,133,178,0.7)" strokeWidth="2" fill="none" />
    </svg>
  )
}
