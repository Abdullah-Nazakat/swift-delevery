import React from 'react';
import { Smartphone, Zap, Gauge } from 'lucide-react';
import { useTranslations } from 'next-intl';

const ServicesSecFive = () => {
  const t = useTranslations('Services');

  const servicesData = [
    {
      id: 1,
      icon: Smartphone,
      title: t('Process1Title'),
      desc: t('Process1Desc'),
    },
    {
      id: 2,
      icon: Zap,
      title: t('Process2Title'),
      desc: t('Process2Desc'),
    },
    {
      id: 3,
      icon: Gauge,
      title: t('Process3Title'),
      desc: t('Process3Desc'),
    },
  ];

  return (
    <section>
      {/* Top Yellow Section */}
      <div className="bg-[#FCDA50] py-12 px-4 md:px-8">
        <div className="mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] max-w-4xl mx-auto leading-tight">
              {t('ProcessMainTitle')}
            </h2>
          </div>

          {/* Icons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {servicesData.map(({ id, icon: Icon, title, desc }) => (
              <div key={id} className="flex flex-col items-center text-center group">
                {/* Icon Circle */}
                <div className="w-28 h-28 bg-[#F4F6F9] rounded-full flex items-center justify-center mb-8 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-10 h-10 text-[#0f172a]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#111111] mb-4">
                  {title}
                </h3>
                <p className="text-[#111111]/80 text-lg leading-relaxed max-w-xs">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Dark Section */}
      <div className="bg-[#0f172a] py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-4">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide">
              {t('FooterPromoTitle')}
            </h2>
            <p className="text-gray-400 text-sm tracking-[0.2em] font-medium uppercase">
              {t('FooterPromoSubtitle')}
            </p>
          </div>

          <div>
            <a
              href="tel:+306974567"
              className="inline-block bg-[#FCDA50] hover:bg-[#fae27a] text-[#111111] font-bold py-4 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg"
            >
              +30 697 4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSecFive;
