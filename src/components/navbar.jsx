'use client'
import React, { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import Image from 'next/image'
import logoUrl from '../../public/logo.png'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import { Link } from '@/i18n/navigation'

const Navbar = () => {
  const t = useTranslations('Navbar')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { key: 'Home', path: '/' },
    { key: 'about', path: '/about' },
    // { key: 'Job Positions', path: '/career' },
    { key: 'Services', path: '/services-02' },
    { key: 'Communication', path: '/contact' }
  ].map((item) => ({ ...item, label: t(item.key) }))

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const Divider = () => (
    <div className="hidden lg:block h-8 w-[2px] bg-gradient-to-b from-orange-400 via-orange-500 to-orange-400 opacity-70 rounded-full mx-4" />
  )

  return (
    <div className="pt-[72px]">
      <nav className="fixed top-0 left-0 w-full bg-[#0A2540] shadow-xl z-[100] transition-all duration-300">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Left: Logo */}
            <div className="flex items-center gap-3">
              <Link href="/">
                <Image
                  src={logoUrl}
                  alt={t('LogoAlt')}
                  width={50}
                  height={50}
                  className="rounded-lg shadow-md hover:opacity-90 transition-opacity duration-200"
                />
              </Link>
            </div>

            <Divider />

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.path}
                  className="text-white font-semibold text-sm uppercase tracking-wider hover:text-orange-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Divider />

            {/* Right: Contact, Language Switcher & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Contact Phone */}
              <div className="hidden sm:flex items-center gap-2 text-gray-900 font-bold text-sm bg-orange-50 transition-all duration-300 rounded-full py-2 px-4 border border-orange-200">
                <Phone className="text-orange-600 w-4 h-4" />
                <span>{t('PhoneNumber')}</span>
              </div>

              {/* Language Switcher */}
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                type="button"
                className="lg:hidden text-gray-500 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md p-2 transition-transform duration-300"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">{t('ToggleMenu')}</span>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'
            }`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            {/* Mobile Language Switcher */}
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-2 px-3 py-2 text-gray-900 font-bold text-base border-t mt-2 pt-2">
              <Phone className="text-orange-600 w-5 h-5" />
              <span>{t('CallUs')}: {t('PhoneNumber')}</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar