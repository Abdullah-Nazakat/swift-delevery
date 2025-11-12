'use client';

import React from 'react';
import { Minus } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// Import images
import Services1 from '../../../public/need-ser-1.jpeg';
import Services2 from '../../../public/need-ser-2.jpeg';
import Services3 from '../../../public/need-ser-3.jpeg';

// Main Service Card
const ServiceCard = ({ num, title, desc, imgUrl, overlayStyle }) => {
  return (
    <article 
      className="relative w-full overflow-hidden rounded-lg shadow-xl group cursor-pointer 
      transition-all duration-300 transform hover:scale-[1.02] focus-within:scale-[1.02] focus:outline-none"
      tabIndex={0}
      aria-label={`Service ${num}: ${title}`}
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imgUrl}
          alt={`${title} service`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
        />
      </div>

      <div 
        className={`absolute inset-0 ${overlayStyle} transition-opacity duration-300 group-hover:opacity-90 group-focus:opacity-90`}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col h-full p-6 text-white min-h-[400px]">
        <div className="flex-grow">
          <p
            className="text-6xl md:text-8xl font-extrabold mb-4 opacity-90 transition-opacity duration-300 group-hover:opacity-100 text-transparent"
            style={{ WebkitTextStroke: '2px white' }}
            aria-hidden="true"
          >
            {num}
          </p>
          <h3 className="text-3xl font-bold mb-2 uppercase">{title}</h3>
          <p className="text-sm max-w-[80%] leading-relaxed">{desc}</p>
        </div>

        <div className="w-full mt-4 bg-gray-900/70 p-3 -mx-6 text-center backdrop-blur-sm">
          <h4 className="text-lg font-semibold uppercase tracking-wider">{title}</h4>
        </div>
      </div>
    </article>
  );
};

const ServicesSecThree = () => {
  const t = useTranslations('Services'); // namespace for localization

  // Localized service data
  const servicesData = [
    { 
      id: 1,
      num: '01', 
      title: t('Service1Title'), 
      desc: t('Service1Desc'), 
      imgUrl: Services1,
      overlayStyle: 'bg-black/60'
    },
    { 
      id: 2,
      num: '02', 
      title: t('Service2Title'), 
      desc: t('Service2Desc'), 
      imgUrl: Services2,
      overlayStyle: 'bg-black/60'
    },
    { 
      id: 3,
      num: '03', 
      title: t('Service3Title'), 
      desc: t('Service3Desc'), 
      imgUrl: Services3,
      overlayStyle: 'bg-black/60'
    },
    { 
      id: 4,
      num: '04', 
      title: t('Service4Title'), 
      desc: t('Service4Desc'), 
      imgUrl: Services2,
      overlayStyle: 'bg-black/60'
    },
  ];

  return (
    <section className="font-sans bg-orange-600" aria-labelledby="services-heading">
      <div className="py-16 px-4 md:py-24 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4" aria-hidden="true">
            <Minus className="w-6 h-6 text-white/50" />
            <span className="text-sm uppercase tracking-widest font-medium mx-2">
              {t('ServicesSubtitle')}
            </span>
            <Minus className="w-6 h-6 text-white/50" />
          </div>
          <h1 
            id="services-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            {t('ServicesMainTitle')}
          </h1>
        </div>
      </div>

      <div className="-mt-16 md:-mt-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label={t('ServicesGridLabel')}>
          {servicesData.map((service) => (
            <div key={service.id} role="listitem">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>

      <div className="h-20 sm:h-32" aria-hidden="true"></div>
    </section>
  );
};

export default ServicesSecThree;
