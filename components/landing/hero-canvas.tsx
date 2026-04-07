"use client"

import { useEffect, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { Float, PerspectiveCamera, Trail } from "@react-three/drei"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import * as THREE from "three"

function GlassOrb({ meshRef }: { meshRef: React.RefObject<THREE.Mesh> }) {
  return (
    <mesh ref={meshRef} position={[-1.05, 0.42, 0.12]} castShadow>
      <sphereGeometry args={[0.82, 64, 64]} />
      <meshPhysicalMaterial
        color="#a78bfa"
        roughness={0.2}
        transmission={1}
        thickness={1.2}
        ior={1.5}
        clearcoat={1}
        clearcoatRoughness={0.08}
        metalness={0.08}
        reflectivity={1}
        attenuationColor="#60a5fa"
        attenuationDistance={1.6}
        emissive="#7c3aed"
        emissiveIntensity={0.45}
      />
    </mesh>
  )
}

function NeonTorus({ meshRef }: { meshRef: React.RefObject<THREE.Mesh> }) {
  return (
    <mesh ref={meshRef} position={[1.1, 0.82, -0.35]} rotation={[0.7, 0.2, 0.38]} castShadow>
      <torusGeometry args={[0.94, 0.16, 32, 160]} />
      <meshPhysicalMaterial
        color="#1e1b4b"
        metalness={0.82}
        roughness={0.16}
        clearcoat={1}
        clearcoatRoughness={0.08}
        emissive="#ff4fd8"
        emissiveIntensity={2.2}
      />
    </mesh>
  )
}

function NeonCrystal({ meshRef }: { meshRef: React.RefObject<THREE.Mesh> }) {
  return (
    <mesh ref={meshRef} position={[1.24, -0.94, 0.08]} rotation={[0.46, 0.66, 0.06]} castShadow>
      <octahedronGeometry args={[0.76, 0]} />
      <meshPhysicalMaterial
        color="#0f172a"
        metalness={0.56}
        roughness={0.16}
        clearcoat={1}
        clearcoatRoughness={0.06}
        emissive="#38bdf8"
        emissiveIntensity={1.95}
      />
    </mesh>
  )
}

function SceneObjects() {
  const groupRef = useRef<THREE.Group>(null)
  const sphereRef = useRef<THREE.Mesh>(null)
  const torusRef = useRef<THREE.Mesh>(null)
  const cubeRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=1600",
        scrub: 1.15,
      },
    })

    if (sphereRef.current && torusRef.current && cubeRef.current && groupRef.current) {
      timeline
        .to(groupRef.current.position, { y: -0.42, z: 0.28, ease: "none" }, 0)
        .to(groupRef.current.rotation, { z: 0.18, ease: "none" }, 0)
        .to(sphereRef.current.rotation, { x: Math.PI * 0.55, y: Math.PI * 1.15, ease: "none" }, 0)
        .to(torusRef.current.rotation, { z: Math.PI * 1.45, y: Math.PI * 0.88, ease: "none" }, 0)
        .to(cubeRef.current.rotation, { x: Math.PI * 0.82, y: Math.PI * 0.72, ease: "none" }, 0)
        .to(sphereRef.current.scale, { x: 1.26, y: 1.26, z: 1.26, ease: "none" }, 0)
        .to(cubeRef.current.scale, { x: 0.9, y: 0.9, z: 0.9, ease: "none" }, 0)
    }

    return () => timeline.scrollTrigger?.kill()
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.085
    }

    if (sphereRef.current) {
      sphereRef.current.position.y = 0.42 + Math.sin(t * 0.58) * 0.13
    }

    if (torusRef.current) {
      torusRef.current.position.x = 1.1 + Math.cos(t * 0.36) * 0.18
    }

    if (cubeRef.current) {
      cubeRef.current.position.y = -0.94 + Math.cos(t * 0.42) * 0.17
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1} rotationIntensity={0.14} floatIntensity={0.24}>
        <Trail width={1.9} length={4.5} color="#60a5fa" attenuation={(value) => value * value}>
          <GlassOrb meshRef={sphereRef} />
        </Trail>
      </Float>

      <Float speed={1.12} rotationIntensity={0.18} floatIntensity={0.34}>
        <Trail width={1.35} length={3.5} color="#ff4fd8" attenuation={(value) => value * value}>
          <NeonTorus meshRef={torusRef} />
        </Trail>
      </Float>

      <Float speed={0.9} rotationIntensity={0.15} floatIntensity={0.22}>
        <NeonCrystal meshRef={cubeRef} />
      </Float>
    </group>
  )
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const materialRef = useRef<THREE.PointsMaterial>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(160 * 3)
    for (let i = 0; i < 160; i++) {
      arr[i * 3] = THREE.MathUtils.randFloatSpread(8.5)
      arr[i * 3 + 1] = THREE.MathUtils.randFloat(-3.8, 3.4)
      arr[i * 3 + 2] = THREE.MathUtils.randFloatSpread(4.6)
    }
    return arr
  }, [])

  const seeds = useMemo(() => Array.from({ length: 160 }, () => Math.random() * Math.PI * 2), [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const geometry = pointsRef.current?.geometry
    const positionAttr = geometry?.attributes.position as THREE.BufferAttribute | undefined

    if (positionAttr) {
      for (let i = 0; i < seeds.length; i++) {
        const baseIndex = i * 3
        positionAttr.array[baseIndex + 1] += 0.003 + Math.sin(t * 0.35 + seeds[i]) * 0.0008
        if (positionAttr.array[baseIndex + 1] > 3.9) {
          positionAttr.array[baseIndex + 1] = -3.9
        }
      }
      positionAttr.needsUpdate = true
    }

    if (materialRef.current) {
      materialRef.current.opacity = 0.42 + Math.sin(t * 1.4) * 0.12
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        color="#d8b4fe"
        size={0.036}
        transparent
        opacity={0.5}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      shadows={false}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="absolute inset-0"
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5.8]} fov={40} />
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 4.5, 10.5]} />

      <ambientLight intensity={0.12} />
      <pointLight position={[2.8, 2.2, 3.6]} intensity={24} distance={10} color="#60a5fa" />
      <pointLight position={[-2.8, 1.4, 2.4]} intensity={18} distance={9} color="#d946ef" />
      <spotLight position={[0, 4.6, 5]} angle={0.42} penumbra={0.85} intensity={22} color="#818cf8" />
      <spotLight position={[0.4, -3.4, 4.2]} angle={0.48} penumbra={1} intensity={12} color="#38bdf8" />

      <ParticleField />
      <SceneObjects />

      <EffectComposer multisampling={0}>
        <Bloom
          mipmapBlur
          luminanceThreshold={0.14}
          luminanceSmoothing={0.2}
          intensity={1.65}
          radius={0.78}
        />
      </EffectComposer>
    </Canvas>
  )
}
