'use client'
import React from 'react'
// Import the next-intl hook
import Image from 'next/image'
import About from '../../../public/about.png'
import { useTranslations } from 'next-intl';

const AboutHero = () => {
  const t = useTranslations('AboutUs');

  return (
    <div className="mx-auto py-12 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row bg-[#F4D03F] rounded-[30px] overflow-hidden shadow-sm">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t('AboutSubtitle')}
          </h1>
          <p className="text-slate-800 text-base md:text-lg leading-relaxed mb-8">
            {t('AboutDescription')}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-[#0f172a] text-white font-medium rounded-full hover:bg-[#1e293b] transition-colors duration-300">
              {t('GetStarted')}
            </button>
            <button className="px-8 py-3 bg-transparent border border-slate-900 text-slate-900 font-medium rounded-full hover:bg-slate-900 hover:text-white transition-colors duration-300">
              {t('LearnMore')}
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px]">
          <Image
            src={About}
            alt="About Our Company"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutHero