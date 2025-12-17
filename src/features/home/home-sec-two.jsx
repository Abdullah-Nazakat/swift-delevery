'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { Truck, Package, Home, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const SimpleCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#0071E3]/30 shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 text-[#1D1D1F] group-hover:bg-[#0071E3] group-hover:text-white transition-colors duration-300">
        <service.Icon size={32} strokeWidth={1.5} />
      </div>

      <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">{service.title}</h3>
      <p className="text-gray-500 leading-relaxed text-base">{service.desc}</p>
    </motion.div>
  )
}

const HomeSecTwo = () => {
  const t = useTranslations('HomePage')

  const services = [
    { id: 1, Icon: Truck, title: t('Service1Title'), desc: t('Service1Desc') },
    { id: 2, Icon: Package, title: t('Service2Title'), desc: t('Service2Desc') },
    { id: 3, Icon: Home, title: t('Service3Title'), desc: t('Service3Desc') },
    { id: 4, Icon: Clock, title: t('Service4Desc'), desc: t('Service4Desc') },
  ]

  return (
    <section className="w-full py-24 md:py-32 px-6 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] tracking-tight mb-6">
            {t('OfferTitle') || "Our Services"}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            {t('OfferSubtitle') || "Comprehensive delivery solutions for every need."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <SimpleCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeSecTwo
