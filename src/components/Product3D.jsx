import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

/* Modelo procedural por categoría — visor 3D interactivo */

function RackModel() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[2.6, 1.05, 1.1]} />
        <meshStandardMaterial color="#1c2126" metalness={0.75} roughness={0.35} />
      </mesh>
      {/* panel frontal */}
      <mesh position={[0, 0, 0.56]}>
        <boxGeometry args={[2.5, 0.95, 0.02]} />
        <meshStandardMaterial color="#242a30" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* perillas */}
      {[-0.95, -0.55].map((x) => (
        <mesh key={x} position={[x, 0.1, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 0.08, 24]} />
          <meshStandardMaterial color="#0a0d0f" metalness={0.9} roughness={0.25} />
        </mesh>
      ))}
      {/* display */}
      <mesh position={[0.25, 0.12, 0.58]}>
        <boxGeometry args={[0.85, 0.3, 0.03]} />
        <meshStandardMaterial color="#001018" emissive="#0085B2" emissiveIntensity={1.4} />
      </mesh>
      {/* leds */}
      {[0.8, 0.95, 1.1].map((x) => (
        <mesh key={x} position={[x, -0.25, 0.58]}>
          <sphereGeometry args={[0.03, 12, 12]} />
          <meshStandardMaterial color="#0085B2" emissive="#0085B2" emissiveIntensity={2} />
        </mesh>
      ))}
      {/* rejilla ventilación */}
      {[-0.2, -0.05, 0.1].map((y) => (
        <mesh key={y} position={[-0.95, y - 0.25, 0.58]}>
          <boxGeometry args={[0.5, 0.03, 0.02]} />
          <meshStandardMaterial color="#0a0d0f" />
        </mesh>
      ))}
    </group>
  )
}

function AntennaModel() {
  return (
    <group>
      <mesh position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.04, 0.07, 3.4, 12]} />
        <meshStandardMaterial color="#39424a" metalness={0.85} roughness={0.3} />
      </mesh>
      {[0.4, 0.9, 1.4].map((y, i) => (
        <mesh key={y} position={[0, y + 0.6, 0]} rotation={[0, i * 0.5, 0]}>
          <boxGeometry args={[1.6 - i * 0.35, 0.05, 0.05]} />
          <meshStandardMaterial color="#0085B2" metalness={0.7} roughness={0.35} />
        </mesh>
      ))}
      <mesh position={[0, 2.75, 0]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color="#0085B2" emissive="#0085B2" emissiveIntensity={2} />
      </mesh>
      <mesh position={[0, -0.85, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.1, 40]} />
        <meshStandardMaterial color="#10151a" metalness={0.4} roughness={0.7} />
      </mesh>
    </group>
  )
}

function TowerModel() {
  return (
    <group>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0, i * 0.85 - 1.2, 0]}>
          <boxGeometry args={[1.15 - i * 0.22, 0.85, 1.15 - i * 0.22]} />
          <meshStandardMaterial color="#0085B2" wireframe transparent opacity={0.55} />
        </mesh>
      ))}
      <mesh position={[0, 2.35, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#1c2126" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[0, 2.7, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.6, 8]} />
        <meshStandardMaterial color="#39424a" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[0, 3.05, 0]}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial color="#ff3333" emissive="#ff3333" emissiveIntensity={2.5} />
      </mesh>
    </group>
  )
}

function RfModel() {
  return (
    <group rotation={[0.2, 0, 0]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.85, 0.09, 16, 60]} />
        <meshStandardMaterial color="#b87333" metalness={0.95} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.07, 16, 60]} />
        <meshStandardMaterial color="#0085B2" metalness={0.85} roughness={0.3} />
      </mesh>
      {[-0.5, 0.5].map((y) => (
        <mesh key={y} position={[0, y, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 0.5, 24]} />
          <meshStandardMaterial color="#e8e4dc" metalness={0.3} roughness={0.5} />
        </mesh>
      ))}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 1.9, 12]} />
        <meshStandardMaterial color="#39424a" metalness={0.9} roughness={0.3} />
      </mesh>
    </group>
  )
}

const MODELS = {
  'transmisores-am': RackModel,
  'transmisores-fm': RackModel,
  audio: RackModel,
  automatizacion: RackModel,
  stl: RackModel,
  navtex: RackModel,
  antenas: AntennaModel,
  torres: TowerModel,
  'componentes-rf': RfModel,
}

export default function Product3D({ category, className = 'h-[420px]' }) {
  const Model = MODELS[category] || RackModel
  return (
    <div className={className}>
      <Canvas camera={{ position: [3, 1.6, 3.6], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 3]} intensity={1.1} />
        <pointLight position={[-4, -2, -4]} intensity={0.7} color="#0085B2" />
        <group position={[0, -0.2, 0]}>
          <Model />
        </group>
        <OrbitControls
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.6}
          minDistance={2.4}
          maxDistance={8}
        />
      </Canvas>
    </div>
  )
}
