'use client'
import React from 'react'
import Image from 'next/image'
import { ChevronUp } from 'lucide-react'
import Logo from '../../public/logo.png'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('Footer') // Load translations for Footer

  return (
    <footer className="bg-[#282828] text-gray-300">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src={Logo}
            alt={t('LogoAlt') || 'Swift Deliver Logo'}
            width={100}
            height={100}
            className="object-contain mb-2"
          />
        </div>

        {/* Jobs */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-400">{t('Jobs')}</h3>
          <a
            href="#"
            className="text-white font-semibold border-b border-gray-500 w-fit hover:text-[#FF5B22] transition"
          >
            {t('ReadMore')}
          </a>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-400">{t('ContactUs')}</h3>
          <a
            href="#"
            className="text-white font-semibold border-b border-gray-500 w-fit hover:text-[#FF5B22] transition"
          >
            {t('RequestQuote')}
          </a>
        </div>

        {/* Company Info */}
        <div className="flex flex-col space-y-2">
          <p className="text-gray-400">{t('NeedHelp')}</p>
          <a
            href="#"
            className="text-white font-semibold border-b border-gray-500 w-fit hover:text-[#FF5B22] transition"
          >
            {t('ContactUs')}
          </a>

          <h3 className="text-white font-bold mt-2 leading-snug">
            {t('CompanyName')}
          </h3>
          <p className="text-gray-400">{t('GEMINumber')}</p>
          <p className="text-gray-400">{t('VATNumber')}</p>
          <a
            href="mailto:info@swiftdelivery.gr"
            className="text-white hover:text-[#FF5B22] transition"
          >
            info@swiftdelivery.gr
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 w-11/12 mx-auto"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6 text-sm text-gray-400">
        <p>{t('Copyright')}</p>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-4 md:mt-0 bg-[#1f1f1f] hover:bg-[#333] text-white p-3 rounded-full transition"
          aria-label={t('BackToTop')}
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  )
}

export default Footer
