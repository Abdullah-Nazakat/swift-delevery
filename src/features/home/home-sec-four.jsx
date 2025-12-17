'use client'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

const HomeSecFour = () => {
  const t = useTranslations('HomePage')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus({ type: 'success', message: 'Tracking details sent.' })
    }, 1500)
  }

  return (
    <section className="relative py-24 md:py-32 bg-white z-10 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Text */}
        <div className="order-2 md:order-1">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-6 tracking-tight"
          >
            Track Your <br />
            <span className="text-[#0071E3]">Shipment.</span>
          </motion.h2>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">
            Real-time updates at your fingertips. Know exactly where your package is, from pickup to delivery.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-[#1D1D1F]">0.01s</div>
              <div className="text-gray-400">Update Speed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1D1D1F]">100%</div>
              <div className="text-gray-400">Visibility</div>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#F5F5F7] p-8 md:p-12 rounded-[2.5rem] relative"
          >
            <h3 className="text-2xl font-bold text-[#1D1D1F] mb-6">Track Package</h3>

            {submitStatus.message && (
              <div className={`mb-4 p-3 rounded-xl text-sm ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Tracking ID" className="w-full h-14 px-6 rounded-2xl bg-white border-none shadow-sm outline-none focus:ring-2 focus:ring-[#0071E3] transition-all font-medium text-lg" />
              <button className="w-full h-14 bg-[#0071E3] text-white rounded-2xl font-bold text-lg hover:bg-[#0060c2] transition-colors shadow-lg shadow-blue-500/20">
                {isSubmitting ? "Searching..." : "Track Now"}
              </button>
            </form>

            {/* Simple Map Graphic */}
            <div className="mt-8 h-48 rounded-2xl bg-white overflow-hidden relative opacity-50 grayscale">
              <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center" />
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#0071E3] rounded-full animate-ping" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default HomeSecFour
