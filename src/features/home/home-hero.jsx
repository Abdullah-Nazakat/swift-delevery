'use client'
import React from 'react'
import Image from 'next/image'
import Swift from '../../../public/swiftdeliver.png'
import { ArrowRight, Send } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const HomeHero = () => {
  const t = useTranslations('HomePage')

  return (
    <section className="relative w-full py-12 px-4 md:px-8 bg-[#fcd34d] flex items-center justify-center min-h-[90vh]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-[#fcd34d] rounded-3xl overflow-hidden border border-black/5 shadow-xl min-h-[600px]">
        {/* Left Content */}
        <div className="flex flex-col justify-center p-8 md:p-16 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            {t('HeroTitle')}
          </h1>

          <p className="text-slate-800 text-lg md:text-xl max-w-md leading-relaxed">
            {t('HeroDescription') || "We provide seamless delivery solutions for all your needs. From same-day delivery to international shipping, we've got you covered."}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href='/about'
              className="px-8 py-3 bg-[#0f172a] hover:bg-[#1e293b] text-white font-medium rounded-full transition-colors duration-300 shadow-md"
            >
              {t('GetStarted') || "Get Started"}
            </Link>

            <Link
              href='/services-02'
              className="px-8 py-3 bg-transparent border-2 border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-white font-medium rounded-full transition-all duration-300"
            >
              {t('LearnMore') || "Learn More"}
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] md:h-auto w-full">
          <Image
            src={Swift}
            alt="Fast Delivery Service"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default HomeHero
