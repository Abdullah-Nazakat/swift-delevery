'use client'
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, PerspectiveCamera, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import * as THREE from 'three'

// 3D Elements
const WireframeGlobe = (props) => {
  const mesh = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y = t * 0.1
  })

  return (
    <group {...props}>
      <mesh ref={mesh}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshBasicMaterial
          color="#333"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      {/* Core */}
      <mesh>
        <sphereGeometry args={[2.45, 64, 64]} />
        <meshBasicMaterial color="black" />
      </mesh>
    </group>
  )
}

const OrbitalRing = ({ radius, speed, color = "white", rotation = [1.6, 0, 0] }) => {
  const lineRef = useRef()
  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.rotation.z += speed * 0.01
    }
  })
  return (
    <group rotation={rotation}>
      <mesh ref={lineRef}>
        <torusGeometry args={[radius, 0.02, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </group>
  )
}


const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
      <ambientLight intensity={0.5} />

      <group position={[3, 0, -2]}>
        <WireframeGlobe />
        <OrbitalRing radius={3.2} speed={1} />
        <OrbitalRing radius={4} speed={-0.5} rotation={[1.2, 0.4, 0]} color="#555" />
      </group>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  )
}

const HomeHero = () => {
  const t = useTranslations('HomePage')

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050505] text-white">
      {/* Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none tech-grid opacity-20 z-0"></div>

      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-3xl">

          <div className="flex items-center gap-2 mb-6 opacity-70">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-mono text-sm tracking-[0.2em] uppercase">System Operational</span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8 mix-blend-difference">
              {t('HeroTitle') || "NEXT GEN \nLOGISTICS"}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="border-l-2 border-white/20 pl-6"
          >
            <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-10 leading-relaxed font-light">
              {t('HeroDescription') || "Precision delivery for extreme environments. From urban centers to the furthest frontiers."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <Link
              href='/about'
              className="group relative px-10 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-all duration-300"
            >
              <span className="relative z-10">{t('GetStarted') || "Initialize"}</span>
              <div className="absolute inset-0 border border-white translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 pointer-events-none mix-blend-difference" />
            </Link>

            <Link
              href='/services-02'
              className="px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              {t('LearnMore') || "Explore"}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Technical UI */}
      <div className="absolute top-10 right-10 flex flex-col items-end gap-1 pointer-events-none mix-blend-screen opacity-50 hidden md:flex">
        <div className="text-mono text-xs">COORDS: 45.92° N, 12.33° E</div>
        <div className="text-mono text-xs">ALT: 00450 M</div>
        <div className="w-32 h-px bg-white/50 my-2"></div>
        <div className="text-mono text-xs">STATUS: <span className="text-green-400">NOMINAL</span></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  )
}

export default HomeHero
