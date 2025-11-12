'use client'
import React from 'react'
// Import the next-intl hook
import { useTranslations } from 'next-intl';

const AboutHero = () => {
  // Use translations for the 'Navbar' namespace where 'The Company' is defined
  const t = useTranslations('AboutUs'); 

  return (
    <div className="image-about flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <h1 className="relative z-10 text-white text-5xl md:text-6xl font-bold tracking-wide text-center">
        {/* Use the translation hook to render the localized title */}
        {t('The Company')}
      </h1>
    </div>
  )
}

export default AboutHero