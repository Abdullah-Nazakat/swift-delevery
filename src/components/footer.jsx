'use client'
import React from 'react'
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Logo from '../../public/logo.png'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const Footer = () => {
  const t = useTranslations('Footer')

  const SocialIcon = ({ Icon }) => (
    <a
      href="#"
      className="w-10 h-10 bg-[#FCD34D] rounded-lg flex items-center justify-center hover:bg-[#fbbf24] transition-colors"
    >
      <Icon className="w-5 h-5 text-white" fill="white" />
    </a>
  )

  const FooterLink = ({ href, children }) => (
    <Link
      href={href}
      className="text-gray-300 hover:text-[#FCD34D] transition-colors text-[15px]"
    >
      {children}
    </Link>
  )

  return (
    <footer
      className="pt-16 pb-8"
      style={{ background: 'linear-gradient(90deg, #111828 0%, #1E2939 100%)' }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                alt={t('LogoAlt')}
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-xl font-bold text-[#FCD34D] uppercase tracking-wide">
                Fast Delivery
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed text-[15px] pr-4">
              {t('Description')}
            </p>

            <div className="flex items-center gap-3">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Linkedin} />
              <SocialIcon Icon={Instagram} />
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t('Services')}</h3>
            <ul className="space-y-4 flex flex-col">
              <FooterLink href="/services/fast-delivery">{t('Service1')}</FooterLink>
              <FooterLink href="/services/quick-ship">{t('Service2')}</FooterLink>
              <FooterLink href="/services/local-courier">{t('Service3')}</FooterLink>
              <FooterLink href="/services/cargo-move">{t('Service4')}</FooterLink>
              <FooterLink href="/services/parcel-drop">{t('Service5')}</FooterLink>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t('Company')}</h3>
            <ul className="space-y-4 flex flex-col">
              <FooterLink href="/about">{t('Company1')}</FooterLink>
              <FooterLink href="/contact">{t('Company2')}</FooterLink>
              <FooterLink href="/blog">{t('Company3')}</FooterLink>
              <FooterLink href="/case-studies">{t('Company4')}</FooterLink>
              <FooterLink href="/partners">{t('Company5')}</FooterLink>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t('Resources')}</h3>
            <ul className="space-y-4 flex flex-col">
              <FooterLink href="/docs">{t('Resource1')}</FooterLink>
              <FooterLink href="/support">{t('Resource2')}</FooterLink>
              <FooterLink href="/privacy">{t('Resource3')}</FooterLink>
              <FooterLink href="/terms">{t('Resource4')}</FooterLink>
              <FooterLink href="/faq">{t('Resource5')}</FooterLink>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-16 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm gap-4">
          <p>{t('Copyright')}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#FCD34D] transition-colors">
              {t('PrivacyPolicy')}
            </Link>
            <Link href="/terms" className="hover:text-[#FCD34D] transition-colors">
              {t('TermsOfService')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
