'use client'
import React from 'react'
import Image from 'next/image'
import Swift from '../../../public/swiftdeliver.jpg'
import { ArrowRight, Send } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const HomeHero = () => {
  const t = useTranslations('HomePage')

  return (
    <section className="relative h-screen flex items-center justify-center bg-[#f9aa33] overflow-hidden mt-2">
      <div className="absolute inset-0">
        <Image
          src={Swift}
          alt="Delivery Person"
          fill
          className="object-cover object-center opacity-100"
        />
      </div>

      <div className="absolute inset-0 bg-[#f9aa33]/50"></div>

      <div className="relative z-10 text-center text-white max-w-2xl px-4 animate-fadeIn">
        <h2 className="text-lg md:text-xl font-semibold mb-6 drop-shadow-lg">
          {t('HeroTitle')}
        </h2>

        <div className="flex justify-center gap-6">
          <Link
          href='/about'
            className="flex items-center gap-2 bg-[#ff2d20] hover:bg-[#e2251a] 
            text-white font-semibold px-8 py-4 rounded-full text-sm md:text-base 
            transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            {t('LearnAboutUs')} <Send size={18} />
          </Link>

          <Link
          href='/services-02'
            className="flex items-center gap-2 bg-white hover:bg-gray-100 
            text-[#ff2d20] font-semibold px-8 py-4 rounded-full text-sm md:text-base 
            transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            {t('OurServices')} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
