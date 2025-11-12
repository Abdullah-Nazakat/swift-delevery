'use client';
import React from 'react';
import { Minus } from 'lucide-react';
import Image from 'next/image';
import Srvice1 from '../../../public/info-service-1.png';
import Srvice2 from '../../../public/info-service-2.png';
import Srvice3 from '../../../public/info-service-3.png';
import { useTranslations } from 'next-intl';

const ServicesSecFive = () => {
  const t = useTranslations('Services'); // Namespace for localization

  const servicesData = [
    {
      id: 1,
      image: Srvice1,
      title: t('Process1Title'),
      desc: t('Process1Desc'),
    },
    {
      id: 2,
      image: Srvice2,
      title: t('Process2Title'),
      desc: t('Process2Desc'),
    },
    {
      id: 3,
      image: Srvice3,
      title: t('Process3Title'),
      desc: t('Process3Desc'),
    },
  ];

  return (
    <section className="bg-white">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center text-center mb-12">
        <div className="flex items-center justify-center mb-4 text-orange-600" aria-hidden="true">
          <Minus className="w-6 h-6 text-orange-600" />
          <span className="text-sm uppercase tracking-widest font-bold mx-2">
            {t('ProcessSubtitle')}
          </span>
          <Minus className="w-6 h-6 text-orange-600" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl">
          {t('ProcessMainTitle')}
        </h2>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {servicesData.map(({ id, image, title, desc }) => (
          <div
            key={id}
            className="group flex flex-col items-center text-center rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
          >
            {/* Image with animation */}
            <div className="mb-6 overflow-hidden rounded-full">
              <Image
                src={image}
                alt={title}
                width={150}
                height={150}
                className="transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSecFive;
