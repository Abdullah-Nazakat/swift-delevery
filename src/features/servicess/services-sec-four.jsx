'use client';
import { useTranslations } from 'next-intl';
import React, { useState, useEffect, useRef } from 'react';

const skillsDataTemplate = [
  { key: 'Skill1Name', percentage: 98 },
  { key: 'Skill2Name', percentage: 95 },
  { key: 'Skill3Name', percentage: 92 },
  { key: 'Skill4Name', percentage: 99 },
  { key: 'Skill5Name', percentage: 96 },
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
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-medium text-slate-700">{name}</h4>
        <span className="text-lg font-semibold text-slate-800">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out bg-[#F4CE4F]"
          style={{ width }}
        />
      </div>
    </div>
  );
};

const ServicesSecFour = () => {
  const t = useTranslations('Services');
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
    <div ref={sectionRef} className="py-12 px-4 md:px-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left Column: Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F4CE4F] mb-6 leading-tight">
              {t('SkillsTitle')}
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              {t('SkillsDescription')}
            </p>
          </div>

          {/* Right Column: Skills */}
          <div>
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
