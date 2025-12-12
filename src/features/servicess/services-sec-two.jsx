'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// Importing images - assuming these map well to the services.
// You can adjust these imports if the images are different.
import ImgCity from '../../../public/services-01.jpg';
import ImgDoor from '../../../public/services-02.jpg';
import ImgDelivery from '../../../public/services-03.jpg';
import ImgManagement from '../../../public/step-4.png'; // Using step-4 as the 4th image (Management/Containers)

const ServicesSecTwo = () => {
  const t = useTranslations('Services');

  const services = [
    {
      title: t('Service1Title'),
      desc: t('Service1Desc'),
      image: ImgCity,
      alt: 'City-City Delivery',
    },
    {
      title: t('Service2Title'),
      desc: t('Service2Desc'),
      image: ImgDoor,
      alt: 'Door-Door Delivery',
    },
    {
      title: t('Service3Title'),
      desc: t('Service3Desc'),
      image: ImgDelivery,
      alt: 'Professional Delivery',
    },
    {
      title: t('Service4Title'),
      desc: t('Service4Desc'),
      image: ImgManagement,
      alt: 'Logistics Management',
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 relative overflow-hidden bg-[#FCDA50]">
      {/* Background decoration (optional/subtle) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

      <div className=" mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {t('ServicesMainTitle') || 'Services For Every Need'}
          </h2>
          <p className="text-gray-800 text-lg md:text-xl max-w-2xl mx-auto">
            {t('ServicesHeaderDesc') ||
              'Comprehensive delivery solutions tailored to meet your unique requirements'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FFFDF5] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-yellow-100 flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSecTwo;
