'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Box, Users, MapPin, Award } from 'lucide-react'
import { useTranslations } from 'next-intl'

const HomeSecFive = () => {
  const t = useTranslations('HomePage')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const statsData = [
    {
      id: 1,
      number: 5631,
      label: t('PackagesDelivered') || 'Packages Delivered',
      Icon: Box,
    },
    {
      id: 2,
      number: 6975,
      label: t('HappyCustomers') || 'Happy Customers',
      Icon: Users,
    },
    {
      id: 3,
      number: 9863,
      label: t('DeliveryLocations') || 'Delivery Locations',
      Icon: MapPin,
    },
    {
      id: 4,
      number: 7561,
      label: t('AwardsWon') || 'Awards Won',
      Icon: Award,
    },
  ]

  return (
    <section ref={ref} className="relative py-12 px-4 md:px-8 overflow-hidden [background:linear-gradient(90deg,#111828_0%,#0A2540_100%)]">
{/* <div
  className="relative py-24 overflow-hidden [background:linear-gradient(90deg,#111828_0%,#0A2540_100%)]"
> */}

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#FDE047] mb-4"
          >
            {t('OurWorkSpeaks') || 'Our Work Speaks For Us'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#FDE047]/80 text-lg max-w-2xl mx-auto"
          >
            {t('WorkSubtitle') || 'Comprehensive delivery solutions tailored to meet your unique requirements'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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

const StatCard = ({ icon: Icon, number, label, index, isInView }) => {
  const [displayNumber, setDisplayNumber] = useState(0)

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const duration = 2000; // 2 seconds animation

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // Easing function for smooth effect (easeOutExpo)
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        setDisplayNumber(Math.floor(ease * number));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      // Delay start based on index
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
      className="bg-[#FDE047] rounded-xl p-8 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 shadow-lg min-h-[280px]"
    >
      <div className="mb-6">
        <Icon size={48} className="text-[#0B1221] stroke-[1.5]" />
      </div>

      <div className="text-3xl font-bold text-[#0B1221] mb-4 font-mono">
        {displayNumber}
      </div>

      <div className="w-12 h-0.5 bg-[#0B1221] rounded-full mb-4"></div>

      <p className="text-[#0B1221] font-medium text-lg leading-tight">
        {label}
      </p>
    </motion.div>
  )
}

export default HomeSecFive
