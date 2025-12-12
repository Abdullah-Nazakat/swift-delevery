'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { Truck, Plane, Ship, Package } from 'lucide-react'
import { useTranslations } from 'next-intl'
import AboutDot from '../../../public/about-dots.jpeg'

const statsData = [
  { id: 1, number: 6482, icon: Package },
  { id: 2, number: 7209, icon: Plane },
  { id: 3, number: 10547, icon: Truck },
  { id: 4, number: 9194, icon: Ship }
]

const AboutSecThree = () => {
  const t = useTranslations('AboutUs')

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
      { threshold: 0.2 }
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
        start += Math.ceil(end / 50) // Faster increments
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
    <section ref={sectionRef} className="relative overflow-hidden py-12 px-4 md:px-8">

      {/* Background Decoration (Optional - keeping subtle if desired, otherwise removing to match clean look) */}
      {/* <div className="absolute inset-0 -z-10 opacity-10">
          <Image src={AboutDot} fill alt="background map" className="object-cover" />
       </div> */}

      <div className="max-w-6xl mx-auto px-4">

        {/* Top Section: Stats */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FCD34D] mb-4">
            Company And Statistics
          </h2>
          <p className="text-[#0B1221] font-medium text-lg max-w-2xl mx-auto">
            A shipping and delivery company with reliable track record.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16">
            {statsData.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={stat.id} className="flex flex-col items-center">
                  {/* Icon */}
                  <div className="mb-6">
                    <Icon className="w-16 h-16 text-[#FCD34D]" strokeWidth={1.5} />
                  </div>
                  {/* Number */}
                  <div className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-2">
                    {counts[index]}
                  </div>
                  {/* Underline */}
                  <div className="flex w-24 h-1 mt-2">
                    <div className="w-2/3 h-full bg-[#FCD34D]"></div>
                    <div className="w-1/3 h-full bg-[#0B1221]"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Section: Modern And Reliable */}
        <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#0B1221] grid md:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-[400px] md:h-auto w-full">
            <Image
              src="/modern-reliable-workshop.png"
              fill
              alt="Modern 3D Printer Workshop"
              className="object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="p-8 md:p-14 flex flex-col justify-center bg-[#0B1221] text-white">
            <h3 className="text-3xl md:text-4xl font-semibold text-[#FCD34D] mb-6">
              Modern And Reliable
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our company is the modern and reliable choice in the field of deliveries and shipments, offering complete solutions for every professional or personal need. With an emphasis on speed, safety and impeccable professionalism, we ensure that every shipment arrives promptly and with absolute consistency at its destination.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Utilizing advanced technologies, highly trained staff and transparent procedures, we build relationships of trust with our customers and contribute to society.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutSecThree
