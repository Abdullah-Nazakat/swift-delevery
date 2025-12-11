'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { Truck, Package, Home, Clock } from 'lucide-react'

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
      title: t('Service4Title'),
      desc: t('Service4Desc'),
    },
  ]

  return (
    <section className="w-full py-12 px-4 md:px-8 overflow-hidden">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 animate-fadeIn">
          {t('OfferTitle')}
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-16 animate-slideUp">
          {t('OfferSubtitle')}
        </p>

        <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative p-8 border border-slate-200 rounded-2xl bg-[#fffef5] 
              hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
              transition-all duration-300 text-left flex flex-col items-start
              animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-[#FDE047] rounded-2xl flex items-center justify-center mb-6 
                transition-transform duration-300 group-hover:scale-120 group-hover:rotate-10 shadow-sm">
                <service.Icon size={32} className="text-slate-900" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#FDE047] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {service.desc}
              </p>

              {/* Decorative border bottom */}
              {/* <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FDE047] transition-all duration-500 group-hover:w-full rounded-b-2xl"></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeSecTwo
