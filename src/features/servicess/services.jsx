'use client';
import { useTranslations } from 'next-intl';
import React from 'react';

const services = () => {
  const t = useTranslations('Services'); // namespace for translations

  return (
    <div className="image-career flex items-center justify-center relative">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Text */}
      <h1 className="relative z-10 text-white text-5xl md:text-6xl font-bold tracking-wide text-center">
        {t('HeroTitle')}
      </h1>
    </div>
  );
};

export default services;
