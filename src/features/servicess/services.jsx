'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const Services = () => {
  const t = useTranslations('Services');

  return (
    <section className="overflow-hidden py-12 px-4 md:px-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight">
              {t('ServicesSectionTitle')}
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>{t('ServicesDesc1')}</p>
              <p>{t('ServicesDesc2')}</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-[#FFA500] rounded-[2.5rem] transform rotate-6 translate-x-2 translate-y-2"></div>

              {/* Image Container */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100">
                <Image
                  src="/service-main.png"
                  alt={t('ServiceImageAlt')}
                  width={500}
                  height={430}
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
