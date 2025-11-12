'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { Truck, Package, Plane, Box } from 'lucide-react'
import BackImg from '../../../public/secfive.jpg'
import { useTranslations } from 'next-intl'

const ACCENT_COLOR = 'text-[#FF5B22]'

const HomeSecFive = () => {
  const t = useTranslations('HomePage') // Load translations
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const statsData = [
    {
      id: 1,
      number: 5631,
      label: t('Missions') || 'Missions',
      Icon: (props) => <Truck {...props} strokeWidth={1} />,
    },
    {
      id: 2,
      number: 6975,
      label: t('ProductDeliveries') || 'Product Deliveries',
      Icon: (props) => (
        <div className="relative">
          <Box {...props} strokeWidth={1} />
          <Plane
            className="absolute top-[-5px] left-[-5px] transform rotate-45"
            size={10}
            fill="#FF5B22"
            stroke="#FF5B22"
          />
          <Plane
            className="absolute bottom-[-5px] right-[-5px] transform rotate-45"
            size={10}
            fill="#FF5B22"
            stroke="#FF5B22"
          />
        </div>
      ),
    },
    {
      id: 3,
      number: 9863,
      label: t('Management') || 'Management',
      Icon: (props) => <Plane {...props} strokeWidth={1} />,
    },
    {
      id: 4,
      number: 7560,
      label: t('ShippingContainers') || 'Shipping containers',
      Icon: (props) => (
        <div className="relative">
          <Package {...props} strokeWidth={1} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-serif text-white opacity-70">
            <span className="text-xl font-bold border-2 rounded-lg p-1 border-white">i</span>
          </div>
        </div>
      ),
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src={BackImg} alt={t('CompanyStatistics')} fill className="object-cover" priority />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <header className="text-center mb-16 px-4">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className={`w-10 h-[2px] ${ACCENT_COLOR} bg-current`}></span>
            <p className={`text-lg font-semibold ${ACCENT_COLOR} tracking-widest uppercase`}>
              {t('CompanyStatistics') || 'Company Statistics'}
            </p>
            <span className={`w-10 h-[2px] ${ACCENT_COLOR} bg-current`}></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            {t('PartnershipsSpeak') || 'Our partnerships speak for us'}
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <StatBlock
              key={stat.id}
              number={stat.number}
              label={stat.label}
              Icon={stat.Icon}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Animated Stat Block
const StatBlock = ({ number, label, Icon, isVisible }) => {
  const [count, setCount] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const duration = 2000
    const increment = number / (duration / 16)

    const counter = setInterval(() => {
      start += increment
      if (start >= number) {
        start = number
        clearInterval(counter)
      }
      setCount(Math.floor(start))
      setProgress(Math.min(100, (start / 10000) * 100))
    }, 16)

    return () => clearInterval(counter)
  }, [isVisible, number])

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center bg-white/5 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition">
      <div className={`${ACCENT_COLOR} mb-6`}>
        <Icon size={72} className="w-20 h-20" />
      </div>
      <h3 className="text-6xl font-extrabold text-white flex items-start leading-none mb-3">
        {count}
        <span className={`${ACCENT_COLOR} text-4xl font-extrabold ml-1 leading-none translate-y-2`}>+</span>
      </h3>
      <p className="text-lg text-white font-medium tracking-wider mb-4">{label}</p>
      <div className="w-full max-w-[120px] h-1 rounded-full bg-gray-300/30 overflow-hidden">
        <div
          className="h-full bg-[#FF5B22] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}

export default HomeSecFive
