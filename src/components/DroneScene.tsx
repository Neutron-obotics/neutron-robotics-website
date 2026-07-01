import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

const ACCENT = '#ff2158'
const ACCENT_DIM = '#7a0f2b'

function Rotor({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 28
  })
  return (
    <group position={position}>
      <mesh castShadow>
        <cylinderGeometry args={[0.05, 0.06, 0.16, 12]} />
        <meshStandardMaterial color="#1a1c22" metalness={0.6} roughness={0.4} />
      </mesh>
      <group ref={ref} position={[0, 0.1, 0]}>
        <mesh rotation={[0, 0, 0]}>
          <boxGeometry args={[0.85, 0.02, 0.09]} />
          <meshStandardMaterial color="#e8e8ef" metalness={0.3} roughness={0.5} transparent opacity={0.85} />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.85, 0.02, 0.09]} />
          <meshStandardMaterial color="#e8e8ef" metalness={0.3} roughness={0.5} transparent opacity={0.85} />
        </mesh>
      </group>
      <pointLight color={ACCENT} intensity={1.2} distance={1.2} position={[0, 0, 0]} />
    </group>
  )
}

function DroneModel() {
  const armPositions: [number, number, number][] = [
    [1.1, 0.05, 1.1],
    [-1.1, 0.05, 1.1],
    [1.1, 0.05, -1.1],
    [-1.1, 0.05, -1.1],
  ]

  return (
    <group>
      {/* central body */}
      <mesh castShadow>
        <boxGeometry args={[0.9, 0.28, 1.1]} />
        <meshStandardMaterial color="#111318" metalness={0.7} roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.16, 0]}>
        <boxGeometry args={[0.5, 0.05, 0.6]} />
        <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={1.4} toneMapped={false} />
      </mesh>
      <mesh position={[0, -0.02, 0.58]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#0a0b0e" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* arms + rotors */}
      {armPositions.map((pos, i) => (
        <group key={i}>
          <mesh position={[pos[0] / 2, pos[1], pos[2] / 2]} rotation={[0, Math.atan2(pos[0], pos[2]), 0]}>
            <boxGeometry args={[0.09, 0.07, Math.hypot(pos[0], pos[2])]} />
            <meshStandardMaterial color="#1d2027" metalness={0.6} roughness={0.4} />
          </mesh>
          <Rotor position={pos} />
        </group>
      ))}

      {/* landing legs */}
      {[
        [0.5, -0.25, 0.5],
        [-0.5, -0.25, 0.5],
        [0.5, -0.25, -0.5],
        [-0.5, -0.25, -0.5],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
          <meshStandardMaterial color="#2a2d35" />
        </mesh>
      ))}
    </group>
  )
}

function AtomRing({ radius, tilt, speed, color }: { radius: number; tilt: [number, number, number]; speed: number; color: string }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed
  })
  return (
    <group rotation={tilt} ref={ref}>
      <mesh>
        <torusGeometry args={[radius, 0.012, 16, 96]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} toneMapped={false} transparent opacity={0.8} />
      </mesh>
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} toneMapped={false} />
      </mesh>
    </group>
  )
}

function Rig() {
  const group = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!group.current) return
    const { pointer } = state
    group.current.rotation.y += (pointer.x * 0.6 - group.current.rotation.y) * 0.03
    group.current.rotation.x += (-pointer.y * 0.25 - group.current.rotation.x) * 0.03
  })

  return (
    <group ref={group} position={[1.7, -0.2, 0]} scale={0.8}>
      <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.8}>
        <DroneModel />
        <AtomRing radius={2.1} tilt={[Math.PI / 2.4, 0, 0]} speed={0.25} color={ACCENT} />
        <AtomRing radius={2.6} tilt={[Math.PI / 1.6, Math.PI / 5, 0]} speed={-0.18} color={ACCENT_DIM} />
      </Float>
    </group>
  )
}

export default function DroneScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [3.6, 1.7, 5.4], fov: 36 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#05060a']} />
        <fog attach="fog" args={['#05060a', 6, 16]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 6, 3]} intensity={1.1} castShadow />
        <pointLight position={[-4, -2, -3]} color={ACCENT} intensity={2} />
        <Stars radius={60} depth={40} count={2200} factor={2.2} saturation={0} fade speed={0.6} />
        <Rig />
      </Canvas>
    </div>
  )
}
