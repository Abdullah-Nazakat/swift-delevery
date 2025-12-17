'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Box, Users, MapPin, Award } from 'lucide-react'
import { useTranslations } from 'next-intl'

const StatCard = ({ icon: Icon, number, label, index, isInView }) => {
  const [displayNumber, setDisplayNumber] = useState(0)

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const duration = 2000;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        setDisplayNumber(Math.floor(ease * number));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      const timer = setTimeout(() => {
        window.requestAnimationFrame(step);
      }, index * 200);

      return () => clearTimeout(timer);
    }
  }, [isInView, number, index])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
      className="relative p-8 border-l border-white/20 hover:bg-white/5 transition-colors duration-300"
    >
      {/* Top Marker */}
      <div className="absolute top-0 left-0 w-4 h-px bg-white/50"></div>

      <div className="mb-6 opacity-50">
        <Icon size={24} className="text-white" strokeWidth={1} />
      </div>

      <div className="text-4xl md:text-5xl font-mono font-bold text-white mb-2 tracking-tighter">
        {displayNumber.toLocaleString()}
      </div>

      <div className="text-xs font-mono uppercase tracking-widest text-gray-400">
        {label}
      </div>
    </motion.div>
  )
}

const HomeSecFive = () => {
  const t = useTranslations('HomePage')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const statsData = [
    {
      id: 1,
      number: 5631,
      label: t('PackagesDelivered') || 'PAYLOADS DELIVERED',
      Icon: Box,
    },
    {
      id: 2,
      number: 6975,
      label: t('HappyCustomers') || 'CLIENTS SECURED',
      Icon: Users,
    },
    {
      id: 3,
      number: 9863,
      label: t('DeliveryLocations') || 'SECTORS REACHED',
      Icon: MapPin,
    },
    {
      id: 4,
      number: 7561,
      label: t('AwardsWon') || 'DISTINCTIONS',
      Icon: Award,
    },
  ]

  return (
    <section ref={ref} className="relative py-24 px-6 md:px-12 bg-[#050505] border-t border-white/10">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter leading-none mb-2">
              Mission Success
            </h2>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                  // AGGREGATED TELEMETRY DATA
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-right mt-6 md:mt-0"
          >
            <div className="text-xs font-mono text-gray-500">LAST UPDATE: T-MINUS 5s</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10 no-border-last">
          {statsData.map((stat, index) => (
            <StatCard
              key={stat.id}
              icon={stat.Icon}
              number={stat.number}
              label={stat.label}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeSecFive
