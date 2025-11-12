'use client';
import { useTranslations } from 'next-intl';
import React, { useState, useEffect, useRef } from 'react';

const skillsDataTemplate = [
  { key: 'Skill1Name', percentage: 100 },
  { key: 'Skill2Name', percentage: 100 },
  { key: 'Skill3Name', percentage: 100 },
  { key: 'Skill4Name', percentage: 100 },
  { key: 'Skill5Name', percentage: 100 },
];

const SkillBar = ({ name, percentage, isVisible }) => {
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setWidth(`${percentage}%`), 200);
    } else {
      setWidth('0%');
    }
  }, [isVisible, percentage]);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-end mb-2">
        <h4 className="text-xl font-medium text-gray-800">{name}</h4>
        <span className="text-xl font-semibold text-gray-800">{width}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="h-2 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-red-600 to-orange-500"
          style={{ width }}
        />
      </div>
    </div>
  );
};

const ServicesSecFour = () => {
  const t = useTranslations('Services'); // namespace for localization
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Localize skill names
  const skillsData = skillsDataTemplate.map((skill) => ({
    name: t(skill.key),
    percentage: skill.percentage,
  }));

  return (
    <div ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-5/12 relative pb-8 md:pb-0">
            <span
              className="absolute top-0 left-0 text-9xl sm:text-[180px] font-extrabold 
                         text-gray-100 opacity-60 pointer-events-none -z-10 select-none 
                         leading-none transform translate-y-[-40px] translate-x-[-10px] 
                         md:translate-y-[-70px] md:translate-x-[-20px]"
              aria-hidden="true"
            >
              03
            </span>

            <div className="flex items-center mb-4 pt-4 relative z-10">
              <div className="w-8 h-0.5 bg-orange-500 mr-3"></div>
              <p className="text-sm font-semibold text-orange-500 tracking-wider uppercase">
                {t('SkillsLabel')}
              </p>
            </div>

            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 relative z-10 leading-tight">
              {t('SkillsTitle')}
            </h2>

            <p className="text-gray-600 text-lg max-w-lg">
              {t('SkillsDescription')}
            </p>
          </div>
          <div className="md:w-7/12 mt-12 md:mt-0">
            {skillsData.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSecFour;
