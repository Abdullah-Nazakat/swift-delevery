'use client'

import React, { useRef, useEffect, memo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float, PerspectiveCamera, ContactShadows } from '@react-three/drei'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import * as THREE from 'three'

// ... DroneModel component remains the same ...
const DroneModel = memo(() => {
  const groupRef = useRef()
  const bladeRefs = useRef([])
  const lightRef = useRef()
  const { viewport } = useThree()

  const state = useRef({
    scroll: 0,
    mouse: new THREE.Vector2(0, 0),
    targetPos: new THREE.Vector3(0, 1, 0)
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      state.current.scroll = window.scrollY / (scrollHeight || 1)
    }
    const handleMouseMove = (e) => {
      state.current.mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      state.current.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useFrame((clockState, delta) => {
    if (!groupRef.current) return
    const { mouse, scroll, targetPos } = state.current
    const baseY = 1.5 - scroll * 10
    const xTarget = (mouse.x * viewport.width) * 0.25
    const yTarget = baseY + (mouse.y * viewport.height) * 0.2
    targetPos.x = THREE.MathUtils.lerp(groupRef.current.position.x, xTarget, 0.07)
    targetPos.y = THREE.MathUtils.lerp(groupRef.current.position.y, yTarget, 0.07)
    groupRef.current.position.set(targetPos.x, targetPos.y, 0)
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -mouse.x * 0.6, 0.07)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (mouse.y * 0.3) + 0.2, 0.07)
    bladeRefs.current.forEach((blade) => { if (blade) blade.rotation.y += delta * 30 })
    if (lightRef.current) lightRef.current.intensity = Math.sin(clockState.clock.elapsedTime * 5) * 1.5 + 1.5
  })

  return (
    <group ref={groupRef}>
      <mesh castShadow><cylinderGeometry args={[0.5, 0.6, 0.2, 8]} /><meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} /></mesh>
      <pointLight ref={lightRef} position={[0, 0.1, 0.4]} color="#00f2ff" distance={3} />
      <mesh position={[0, 0.05, 0.4]}><sphereGeometry args={[0.06, 16, 16]} /><meshBasicMaterial color="#00f2ff" /></mesh>
      <group rotation={[0, Math.PI / 4, 0]}>
        <mesh castShadow><boxGeometry args={[2.4, 0.07, 0.07]} /><meshStandardMaterial color="#222" /></mesh>
        <mesh castShadow rotation={[0, Math.PI / 2, 0]}><boxGeometry args={[2.4, 0.07, 0.07]} /><meshStandardMaterial color="#222" /></mesh>
      </group>
      {[[-0.85, 0, 0.85], [0.85, 0, 0.85], [-0.85, 0, -0.85], [0.85, 0, -0.85]].map((pos, i) => (
        <group key={i} position={pos}>
          <mesh castShadow><cylinderGeometry args={[0.15, 0.15, 0.2, 16]} /><meshStandardMaterial color="#000" /></mesh>
          <mesh ref={(el) => (bladeRefs.current[i] = el)} position={[0, 0.12, 0]}>
            <boxGeometry args={[1, 0.01, 0.07]} /><meshStandardMaterial color="#555" transparent opacity={0.6} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, -0.5, 0]} castShadow><boxGeometry args={[0.7, 0.7, 0.7]} /><meshStandardMaterial color="#FBB016" roughness={0.6} metalness={0.1} /></mesh>
    </group>
  )
})

DroneModel.displayName = 'DroneModel'

export default function HomeHero() {
  const t = useTranslations('HomePage')

  return (
    <section className="relative w-full min-h-screen bg-[#fcd34d] flex items-center justify-center p-4 md:p-12 overflow-hidden">

      {/* 1. BACKGROUND CANVAS: Set to z-50 to float on top, pointer-events-none allows clicks to pass through to UI */}
      <div className="fixed inset-0 z-50 pointer-events-none" aria-hidden="true">
        <Canvas shadows gl={{ antialias: true, alpha: true }} style={{ pointerEvents: 'none' }}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={35} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
          <Suspense fallback={null}>
            <Environment preset="city" />
            <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.7}>
              <DroneModel />
            </Float>
            <ContactShadows position={[0, -3.8, 0]} opacity={0.3} scale={20} blur={2.5} far={4.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* 2. UI CARD: Elevated to z-10 with pointer-events-auto to make content clickable */}
      <main className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-white/50 shadow-2xl overflow-hidden pointer-events-auto">

        {/* 3. CONTENT CONTAINER: Set pointer-events-auto to make text/buttons clickable */}
        <div className="flex flex-col justify-center p-10 md:p-24 space-y-10 pointer-events-auto">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
              {t('HeroTitle')}
            </h1>
            <p className="text-slate-800 text-lg md:text-2xl max-w-sm font-medium leading-relaxed opacity-90">
              {t('HeroDescription')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Link
              href="/about"
              className="px-12 py-5 bg-slate-900 text-white rounded-full font-bold text-center hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              {t('GetStarted')}
            </Link>
            <Link
              href="/services-02"
              className="px-12 py-5 border-2 border-slate-900 text-slate-900 rounded-full font-bold text-center hover:bg-slate-900 hover:text-white transition-all active:scale-95"
            >
              {t('LearnMore')}
            </Link>
          </div>
        </div>

        {/* Right Section (Hero Image) */}
        <div className="relative overflow-hidden pointer-events-none">
          <Image
            src="/swiftdeliver.png"
            alt="Delivery Service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
        </div>
      </main>
    </section>
  )
}