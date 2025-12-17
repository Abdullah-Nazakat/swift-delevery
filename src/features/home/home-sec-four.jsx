'use client'
import React, { useState, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Star/Data Map
const StarMap = (props) => {
  const ref = useRef()
  const [sphere] = useState(() => {
    const temp = new Float32Array(1000 * 3)
    for (let i = 0; i < 1000; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)
      const r = 2 + Math.random() * 2

      temp[i * 3] = r * Math.sin(theta) * Math.cos(phi)
      temp[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi)
      temp[i * 3 + 2] = r * Math.cos(theta)
    }
    return temp
  })

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20
      ref.current.rotation.y -= delta / 30
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#888"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  )
}

const InputField = ({ label, name, required, value, onChange, disabled }) => (
  <div className="relative group">
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className="peer w-full h-12 px-4 bg-transparent border-b border-white/20 text-white font-mono text-sm
                 focus:outline-none focus:border-white focus:bg-white/5
                 transition-all duration-300 placeholder-transparent"
      placeholder={label}
    />
    <label
      className="absolute left-4 top-3 text-gray-500 text-xs font-mono uppercase tracking-widest transition-all duration-300 
                 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 
                 peer-focus:top-[-10px] peer-focus:text-white peer-focus:text-[10px]
                 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-0"
    >
      {label} {required && '*'}
    </label>
    {/* Corner Tick */}
    <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 peer-focus:border-white transition-colors"></div>
  </div>
)

const HomeSecFour = () => {
  const t = useTranslations('HomePage')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    loadType: '',
    departure: '',
    surrender: '',
    internationalTrc: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus({ type: 'success', message: 'TRANSMISSION RECEIVED' })
    }, 1500)
  }

  const formFields = [
    { key: "Form.FullName", name: "fullName", required: true },
    { key: "Form.Phone", name: "phone", required: true },
    { key: "Form.LoadType", name: "loadType", required: true },
    { key: "Form.Departure", name: "departure", required: true },
    { key: "Form.Surrender", name: "surrender", required: true },
    { key: "Form.InternationalTrc", name: "internationalTrc", required: true },
  ]

  return (
    <section className="relative w-full py-24 bg-[#050505] overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.5} />
          <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
            <StarMap />
          </Float>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Data Readout */}
        <div className="text-white space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              <span className="text-xs font-mono text-gray-400">LIVE FEED // SYSTEM ACTIVE</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-6">
              {t('GetStartedSection.Title') || "GLOBAL\nTELEMETRY"}
            </h2>
            <div className="h-px w-24 bg-white mb-6"></div>

            <p className="text-gray-400 text-lg md:text-xl font-light max-w-lg leading-relaxed">
              {t('GetStartedSection.Description') || "Monitor payload vectors and logistical parameters in real-time."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8"
          >
            <div>
              <div className="text-4xl font-mono font-bold text-white mb-1">99.9%</div>
              <div className="text-xs text-gray-500 font-mono">MISSION UPTIME</div>
            </div>
            <div>
              <div className="text-4xl font-mono font-bold text-white mb-1">24/7</div>
              <div className="text-xs text-gray-500 font-mono">COMMAND CENTER</div>
            </div>
          </motion.div>
        </div>

        {/* Right: Dashboard Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hud-panel p-8 md:p-10"
        >
          <div className="hud-corners pointer-events-none absolute inset-0"></div>

          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
            <h3 className="text-xl font-mono font-bold text-white uppercase">
              {t('QuoteSectionTitle') || "Initialize Request"}
            </h3>
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-white/20"></div>
              <div className="w-1 h-3 bg-white/40"></div>
              <div className="w-1 h-3 bg-white/80"></div>
            </div>
          </div>

          {submitStatus.message && (
            <div className={`mb-6 p-4 border border-l-4 font-mono text-xs ${submitStatus.type === 'success' ? 'border-green-500 bg-green-500/10 text-green-400' : 'border-red-500 bg-red-500/10 text-red-400'
              }`}>
              &gt; {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {formFields.map((field, index) => (
                <InputField
                  key={index}
                  label={t(field.key)}
                  name={field.name}
                  required={field.required}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              ))}
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black font-bold font-mono tracking-widest uppercase hover:bg-gray-200 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "PROCESSING..." : "TRANSMIT DATA"}
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  )
}

export default HomeSecFour
