'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

const career = () => {
  const t = useTranslations('Career');

  return (
    <div className="image-career flex items-center justify-center relative">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Text */}
      <h1 className="relative z-10 text-white text-5xl md:text-6xl font-bold tracking-wide text-center">
        {t('PageTitle')}
      </h1>
    </div>
  );
};

export default career;
