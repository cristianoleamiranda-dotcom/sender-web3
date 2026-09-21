import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, Stars } from '@react-three/drei'
import * as THREE from 'three'

/* ──────────────────────────────────────────────
   Escena 3D del hero: rejilla de señal, núcleo
   transmisor, ondas de expansión y giroscopio
   ────────────────────────────────────────────── */

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
      pos.array[i * 3 + 1] = Math.sin(dist * 0.9 - t * 2.2) * 0.55 * Math.exp(-dist * 0.07)
    }
    pos.needsUpdate = true
  })

  return (
    <points ref={ref} geometry={geometry} position={[0, -2.1, -1]}>
      <pointsMaterial size={0.04} color="#0085B2" transparent opacity={0.75} sizeAttenuation depthWrite={false} />
    </points>
  )
}

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
          <meshStandardMaterial color="#00151d" emissive="#0085B2" emissiveIntensity={0.7} roughness={0.3} metalness={0.8} />
        </mesh>
      </group>
    </Float>
  )
}

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
          <meshBasicMaterial color="#0085B2" transparent opacity={0.4} side={THREE.DoubleSide} depthWrite={false} />
        </mesh>
      ))}
    </group>
  )
}

function Gyroscope() {
  const a = useRef()
  const b = useRef()
  useFrame((_, delta) => {
    if (a.current) {
      a.current.rotation.x += delta * 0.4
      a.current.rotation.y += delta * 0.15
    }
    if (b.current) {
      b.current.rotation.y -= delta * 0.35
      b.current.rotation.z += delta * 0.2
    }
  })
  return (
    <group>
      <mesh ref={a} rotation={[0.6, 0, 0.2]}>
        <torusGeometry args={[1.9, 0.012, 8, 90]} />
        <meshBasicMaterial color="#0085B2" transparent opacity={0.35} />
      </mesh>
      <mesh ref={b} rotation={[-0.5, 0.4, 0]}>
        <torusGeometry args={[2.35, 0.01, 8, 90]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.14} />
      </mesh>
    </group>
  )
}

function Rig() {
  useFrame(({ camera, pointer }) => {
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.05
    camera.position.y += (0.4 + pointer.y * 0.3 - camera.position.y) * 0.05
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Hero3D({ className = 'h-screen' }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas camera={{ position: [0, 0.4, 6.2], fov: 55 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#0085B2" />
        <Stars radius={60} depth={40} count={1800} factor={3} saturation={0} fade speed={0.8} />
        <Sparkles count={80} scale={[10, 6, 10]} size={2} speed={0.4} color="#0085B2" opacity={0.6} />
        <Core />
        <Gyroscope />
        <PulseRings />
        <WaveGrid />
        <Rig />
      </Canvas>
    </div>
  )
}
