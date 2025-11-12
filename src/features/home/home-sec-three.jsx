'use client'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Img from '../../../public/secthree.jpg'

const HomeSecThree = () => {
  const t = useTranslations('HomePage')

  return (
    <div className="bg-white py-16 sm:py-24 font-sans -mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image */}
          <div className="order-2 md:order-1 relative rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={Img}
              alt="About Section"
              className="w-full h-96 object-cover object-center rounded-xl"
            />
          </div>

          {/* Right Column: Content */}
          <div className="order-1 md:order-2">
            <div className="relative mb-6">
              <p className="absolute -top-10 left-0 text-9xl font-extrabold text-gray-100 opacity-75 select-none z-0 hidden lg:block">
                01
              </p>

              <div className="flex items-center space-x-3 mb-2 relative z-10">
                <div className="w-8 h-0.5 bg-orange-600"></div>
                <p className="text-xl font-bold text-orange-600 uppercase tracking-widest">
                  {t('AboutSubtitle')}
                </p>
              </div>

              <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mt-1 relative z-10">
                {t('AboutTitle')}
              </h2>
            </div>

            <p className="mt-8 text-gray-600 leading-relaxed text-lg">
              {t('AboutDescription')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSecThree
