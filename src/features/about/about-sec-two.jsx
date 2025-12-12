import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import service1 from '../../../public/services-01.jpg'
import service2 from '../../../public/services-02.jpg'
import service3 from '../../../public/services-03.jpg'

const AboutSecTwo = () => {
  const t = useTranslations('AboutUs')

  return (
   <section
  className="py-24 py-12 px-4 md:px-8"
  style={{
    background: 'linear-gradient(90deg, #111828 0%, #0A2540 100%)'
  }}
>
      {/* Top Section */}
  

      {/* Bottom Section - 3 Cards */}
      <div className="mx-auto px-4 grid md:grid-cols-3 gap-8">

        {/* Card 1 - Why Us */}
        <div className="bg-[#FFF9EA] rounded-2xl p-6 md:p-8 group hover:-translate-y-2 transition-all duration-300">
          <div className="overflow-hidden rounded-xl mb-6">
            <Image
              src={service3}
              alt="Why Us"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('Service3Title')}</h3>
          <p className="text-gray-700 leading-relaxed font-medium">
            {t('Service3Desc')}
          </p>
        </div>

        {/* Card 2 - History */}
        <div className="bg-[#FFF9EA] rounded-2xl p-6 md:p-8 group hover:-translate-y-2 transition-all duration-300">
          <div className="overflow-hidden rounded-xl mb-6">
            <Image
              src={service2}
              alt="History"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('Service2Title')}</h3>
          <p className="text-gray-700 leading-relaxed font-medium">
            {t('Service2Desc')}
          </p>
        </div>

        {/* Card 3 - Shipment */}
        <div className="bg-[#FFF9EA] rounded-2xl p-6 md:p-8 group hover:-translate-y-2 transition-all duration-300">
          <div className="overflow-hidden rounded-xl mb-6">
            <Image
              src={service1}
              alt="Shipment"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('Missions')}</h3>
          <p className="text-gray-700 leading-relaxed font-medium">
            {t('Service1Desc')}
          </p>
        </div>

      </div>
    </section>
  )
}

export default AboutSecTwo
