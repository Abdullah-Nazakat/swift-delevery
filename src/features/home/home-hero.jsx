'use client'
import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float, useScroll } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowUpRight } from 'lucide-react'
import * as THREE from 'three'

// --- The Global Scroll Drone ---
// This component reads the global scroll position and moves the drone
// --- The Global Scroll Drone ---
// This component reads the global scroll position AND mouse cursor to move the drone
const ScrollDrone = () => {
  const droneRef = useRef()
  const { viewport } = useThree() // Get viewport size for mouse scaling

  // We'll use a specific ref to track scroll and mouse without re-rendering
  const scrollData = useRef({ y: 0 })
  const mouseData = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1)
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const safeMax = maxScroll > 0 ? maxScroll : 1
      scrollData.current.y = window.scrollY / safeMax
    }

    const handleMouseMove = (e) => {
      // Normalize mouse -1 to 1
      mouseData.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseData.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useFrame((state) => {
    if (!droneRef.current) return

    // 1. SCROLL INFLUENCE (Base Y position)
    // Moves from Y=2 (top) to Y=-8 (bottom)
    const scrollBaseY = 2 - (scrollData.current.y * 12)

    // 2. MOUSE INFLUENCE (X/Y Offset)
    // Convert normalized pointer (-1 to 1) to world units
    // We scale by viewport to make movement feel 1:1 with cursor
    const mouseX = (mouseData.current.x * viewport.width) / 2
    const mouseY = (mouseData.current.y * viewport.height) / 2

    // Target Position = Scroll Base + Mouse Offset
    // We divide mouse influence to make it subtle, not erratic
    const targetX = mouseX * 0.5
    const targetY = scrollBaseY + (mouseY * 0.5)

    // Smoothly Interpolate (Lerp) to target
    droneRef.current.position.x += (targetX - droneRef.current.position.x) * 0.05
    droneRef.current.position.y += (targetY - droneRef.current.position.y) * 0.05

    // 3. DYNAMIC ROTATION (Tilt based on movement)
    // Bank left/right based on X distance to target
    const tiltX = (targetX - droneRef.current.position.x)
    const tiltY = (targetY - droneRef.current.position.y)

    droneRef.current.rotation.z = -tiltX * 1.5 // Bank
    droneRef.current.rotation.x = tiltY * 1.5   // Pitch

    // Continuous subtle yaw spin + slight mouse yaw
    droneRef.current.rotation.y += 0.005 + (mouseX * 0.001)

    // Idle Float Animation (Sine wave)
    const t = state.clock.getElapsedTime()
    droneRef.current.position.y += Math.sin(t * 3) * 0.002
  })

  return (
    <group ref={droneRef} position={[0, 2, 0]} rotation={[0.2, 0, 0]}>
      {/* --- DRONE BODY (Black Box) --- */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 0.2, 1]} />
        <meshStandardMaterial color="#111111" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* --- PACKAGE (Yellow Box) --- */}
      <mesh position={[0, -0.5, 0]} castShadow>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="#FBB016" roughness={0.8} />
        {/* Package Tape/Detail */}
        <mesh position={[0, 0, 0.31]}>
          <planeGeometry args={[0.6, 0.1]} />
          <meshBasicMaterial color="#d99000" />
        </mesh>
      </mesh>

      {/* --- GREEN LIGHT (Sphere) --- */}
      <mesh position={[0, 0.15, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#00FF00" toneMapped={false} />
      </mesh>
      <pointLight position={[0, 0.3, 0]} distance={2} intensity={2} color="#00FF00" />

      {/* --- ROTORS (4 Grey Discs) --- */}
      {[
        [-0.8, 0.8], [0.8, 0.8],
        [-0.8, -0.8], [0.8, -0.8]
      ].map((pos, i) => (
        <group key={i} position={[pos[0], 0.1, pos[1]]}>
          {/* Rotor Blade */}
          <mesh>
            <cylinderGeometry args={[0.6, 0.6, 0.02, 32]} />
            <meshStandardMaterial color="#666666" transparent opacity={0.9} />
          </mesh>
          {/* Rotor Motor Connector */}
          <mesh position={[(-pos[0] / 2), 0, (-pos[1] / 2)]} rotation={[0, Math.atan2(pos[0], pos[1]), 0]}>
            <boxGeometry args={[0.1, 0.05, 1]} />
            <meshStandardMaterial color="#222" />
          </mesh>
        </group>
      ))}
    </group>
  )
}

const HomeHero = () => {
  const t = useTranslations('HomePage')

  return (
    <section className="relative w-full h-screen bg-[#F5F5F7] overflow-hidden flex flex-col items-center justify-center">

      {/* 
          GLOBAL DRONE LAYER 
          Positioned Fixed so it stays on screen forever as user scrolls 
      */}
      <div className="fixed inset-0 z-30 w-full h-full" style={{ pointerEvents: 'none' }}>
        <Canvas
          className="pointer-events-none"
          style={{ pointerEvents: 'none' }}
          events={null}
          camera={{ position: [0, 0, 6], fov: 45 }}
          shadows
        >
          <ambientLight intensity={1} />
          <spotLight position={[5, 10, 5]} intensity={1.5} penumbra={1} castShadow />
          <Environment preset="city" />
          <ScrollDrone />
        </Canvas>
      </div>

      {/* Hero Content - Simplified & Clean */}
      <div className="relative z-10 text-center space-y-8 px-6 mt-[-10vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-[#0071E3] font-bold text-sm uppercase tracking-widest mb-6 border border-blue-100">
            Next Gen Logistics
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-[#1D1D1F] tracking-tight leading-tight">
            Swift <br />
            <span className="text-[#0071E3]">Delivery.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-500 max-w-xl mx-auto font-medium"
        >
          Fast, reliable, and intelligent shipping solutions for the modern world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-[#1D1D1F] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-black transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
            Get Started <ArrowUpRight />
          </button>
          <button className="bg-white text-[#1D1D1F] px-8 py-4 rounded-full text-lg font-bold border border-gray-200 hover:bg-gray-50 transition-colors">
            Track Order
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-400 text-sm font-medium animate-bounce"
      >
        Scroll to Explore
      </motion.div>

    </section>
  )
}

export default HomeHero
