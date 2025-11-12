// components/LanguageSwitcher.jsx
'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import En from '../../public/en.jpg'
import Gr from '../../public/gr.png'
import { ChevronDown } from 'lucide-react'

const LanguageSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // ✅ Supported languages with their display names and flags
  const languages = [
    { code: 'en', name: 'English', flag: En },
    { code: 'grc', name: 'Greek', flag: Gr },
  ]

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0]

  const handleLanguageChange = (locale) => {
    router.replace(pathname, { locale })
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Current Language Button - Matches Navbar Design */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-semibold text-gray-700 
                   bg-white hover:bg-orange-50 hover:text-orange-600 
                   border border-gray-200 hover:border-orange-300
                   transition-all duration-200 cursor-pointer shadow-sm"
        aria-label="Select language"
      >
        <div className="flex items-center space-x-2">
          <Image
            src={currentLanguage.flag}
            alt={currentLanguage.name}
            width={20}
            height={15}
            className="rounded-sm border border-gray-200"
          />
          <span className="hidden sm:block text-xs uppercase tracking-wide">
            {currentLanguage.code}
          </span>
        </div>
        <ChevronDown 
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`flex items-center w-full px-4 py-3 text-sm text-left transition-all duration-200 ${
                currentLocale === language.code
                  ? 'bg-orange-50 text-orange-600 font-semibold border-r-2 border-orange-500'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500'
              }`}
            >
              <Image
                src={language.flag}
                alt={language.name}
                width={20}
                height={15}
                className="rounded-sm border border-gray-200 mr-3"
              />
              <span className="flex-1">{language.name}</span>
              {currentLocale === language.code && (
                <div className="w-2 h-2 bg-orange-500 rounded-full ml-2" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher