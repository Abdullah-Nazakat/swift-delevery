'use client'
import React, { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Truck, Package, Home, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const TechCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-[#0A0A0C] border border-white/10 p-8 h-full flex flex-col items-start overflow-hidden hover:border-white/40 transition-colors duration-500"
    >
      {/* HUD Corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white opacity-50 group-hover:opacity-100 transition-opacity"></div>

      {/* Hover Scanline Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

      {/* Icon */}
      <div className="mb-6 p-4 border border-white/10 rounded-none bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300">
        <service.Icon size={32} strokeWidth={1} />
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-mono text-gray-500">0{index + 1}</span>
        <div className="h-px w-8 bg-gray-700"></div>
      </div>

      <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4 group-hover:text-white transition-colors duration-300">
        {service.title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed font-light">
        {service.desc}
      </p>
    </motion.div>
  )
}

const HomeSecTwo = () => {
  const t = useTranslations('HomePage')

  const services = [
    {
      id: 1,
      Icon: Truck,
      title: t('Service1Title'),
      desc: t('Service1Desc'),
    },
    {
      id: 2,
      Icon: Package,
      title: t('Service2Title'),
      desc: t('Service2Desc'),
    },
    {
      id: 3,
      Icon: Home,
      title: t('Service3Title'),
      desc: t('Service3Desc'),
    },
    {
      id: 4,
      Icon: Clock,
      title: t('Service4Desc'),
      desc: t('Service4Desc'),
    },
  ]

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-4"
            >
              {t('OfferTitle') || "Mission Capabilities"}
            </motion.h2>
            <div className="h-1 w-20 bg-white"></div>
          </div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm md:text-base max-w-sm mt-6 md:mt-0 font-mono text-right"
          >
            {t('OfferSubtitle') || "Advanced logistics modules aimed at efficiency and speed."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <TechCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeSecTwo
