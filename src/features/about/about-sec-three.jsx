'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { Truck } from 'lucide-react'
import { useTranslations } from 'next-intl'
import AboutDot from '../../../public/about-dots.jpeg'

const statsData = [
  { id: 1, number: 5631 },
  { id: 2, number: 6975 },
  { id: 3, number: 9863 },
  { id: 4, number: 7561 }
]

const AboutSecThree = () => {
  const t = useTranslations('AboutUs') // ✅ Translation namespace

  const [counts, setCounts] = useState(statsData.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !hasAnimated) {
          startCounting()
          setHasAnimated(true)
        }
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [hasAnimated])

  const startCounting = () => {
    statsData.forEach((stat, index) => {
      let start = 0
      const end = stat.number
      const duration = 2000
      const stepTime = Math.max(Math.floor(duration / end), 1)

      const timer = setInterval(() => {
        start += Math.ceil(end / 100)
        if (start >= end) {
          start = end
          clearInterval(timer)
        }

        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = start
          return newCounts
        })
      }, stepTime)
    })
  }

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Dotted Map */}
      <div className="absolute inset-0 -z-10">
        <Image src={AboutDot} fill alt="background map" className="object-cover" priority />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Section Header */}
        <p className="text-orange-500 font-semibold mb-2 inline-flex items-center relative after:content-[''] after:w-10 after:h-[2px] after:bg-orange-500 after:ml-2 before:content-[''] before:w-10 before:h-[2px] before:bg-orange-500 before:mr-2">
          {t('SectionLabel')}
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 max-w-3xl mx-auto leading-tight mb-14">
          {t('SectionTitle')}
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {statsData.map((stat, index) => (
            <div key={stat.id} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="text-orange-500 mb-3">
                <Truck className="w-14 h-14" strokeWidth={1.5} />
              </div>

              {/* Number */}
              <h3 className="text-3xl font-extrabold text-gray-900">
                {counts[index]}
                <span className="text-orange-500 align-super text-xl">+</span>
              </h3>

              {/* Label */}
              <p className="text-gray-400 mt-1 text-sm font-medium">
                {t(`Stats.${index}.label`)}
              </p>

              {/* Progress Bar */}
              <div className="w-32 h-[4px] bg-gray-200 mt-4 rounded-full overflow-hidden">
                <div
                  className="h-[4px] bg-orange-500 rounded-full"
                  style={{
                    width: `${(counts[index] / stat.number) * 100}%`,
                    transition: 'width 1s ease'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSecThree
