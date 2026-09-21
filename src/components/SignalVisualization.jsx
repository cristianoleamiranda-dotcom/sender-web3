import { useMemo } from 'react'

/* Ecualizador de señal animado (barras estilo broadcasting) */
export default function SignalVisualization({ bars = 48, className = '' }) {
  const data = useMemo(
    () =>
      Array.from({ length: bars }, (_, i) => ({
        delay: (i % 8) * 0.12,
        duration: 0.9 + ((i * 37) % 10) / 10,
        base: 4 + ((i * 53) % 12),
      })),
    [bars],
  )

  return (
    <div className={`flex items-end justify-center gap-[3px] ${className}`} aria-hidden="true">
      {data.map((b, i) => (
        <span
          key={i}
          className="eq-bar"
          style={{
            height: `${b.base}px`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
