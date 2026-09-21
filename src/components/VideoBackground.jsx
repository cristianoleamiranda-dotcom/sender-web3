import { useEffect, useRef } from 'react'

/*
  Fondo ambiental animado estilo video (canvas ligero, cero assets).
  Para usar un video real: colocar el .mp4 en public/assets/videos y
  reemplazar este componente por un <video autoPlay muted loop>.
*/
export default function VideoBackground({ opacity = 0.5 }) {
  const ref = useRef()

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let t = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth || 800
      canvas.height = canvas.offsetHeight || 300
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      t += 0.006
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < 6; i++) {
        ctx.beginPath()
        for (let x = 0; x <= w; x += 6) {
          const y =
            h * 0.5 +
            Math.sin(x * 0.008 + t * 2 + i * 1.7) * h * 0.16 * Math.sin(t * 0.7 + i)
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = `rgba(0, 133, 178, ${0.04 + i * 0.02})`
        ctx.lineWidth = 1.4
        ctx.stroke()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity }}
      aria-hidden="true"
    />
  )
}
