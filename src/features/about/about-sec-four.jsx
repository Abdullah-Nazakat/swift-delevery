'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import COURIER_IMAGE_URL from '../../../public/bannerabout.jpeg';
// 1. Correct import for next-intl hook
import { useTranslations } from 'next-intl';

// 2. Update SKILLS to use localization keys (nameKey)
const SKILLS_CONFIG = [
  { nameKey: 'Skill1Name', percentage: 80 },
  { nameKey: 'Skill2Name', percentage: 70 },
  { nameKey: 'Skill3Name', percentage: 90 },
];

// SkillBar component does not need to use useTranslations directly as it receives the translated name
const SkillBar = ({ name, percentage, visible }) => {
  const [width, setWidth] = useState(0);
  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    if (visible) {
      let start = 0;
      const end = percentage;
      const duration = 1500;
      // Calculate step time to control animation speed
      const stepTime = Math.abs(Math.floor(duration / (end || 1)));

      const timer = setInterval(() => {
        start += 1;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setWidth(start);
        setDisplayPercent(start);
      }, stepTime);
      
      return () => clearInterval(timer);
    } else {
      // Optional: Reset state when not visible (for repeated viewing, though observer.disconnect prevents this)
      // setWidth(0); 
      // setDisplayPercent(0);
    }
  }, [visible, percentage]);

  return (
    <div className="mb-6 w-full max-w-md">
      <div className="flex justify-between items-center text-white mb-1">
        {/* The 'name' prop is now the already-translated string */}
        <span className="text-lg font-medium tracking-wider">{name}</span> 
        <span className="text-xl font-bold">{displayPercent}%</span>
      </div>
      <div className="w-full bg-red-800 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-white h-full transition-all duration-200 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const AboutSecFour = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // 3. Correct usage of next-intl hook
  // It loads translations from the 'AboutUs' namespace (as defined in your JSON structure)
  const t = useTranslations('AboutUs'); 

  // Observe when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.3 } // Trigger when 30% is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      // Cleanup observer on component unmount
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  
  // Split the title for the <br> tag placement, as it was in the original structure
  const skillsTitle = t('SkillsTitle');
  const titleParts = skillsTitle.split(' ');
  const firstLine = titleParts.slice(0, 2).join(' '); // "Our Professional" or "Η Επαγγελματική μας"
  const secondLine = titleParts.slice(2).join(' ');  // "Experience & Skills" or "Εμπειρία & Δεξιότητες"

  return (
    <section ref={sectionRef} className="font-inter bg-[#FF4500] mt-10"> 
      <div className="flex flex-col lg:flex-row min-h-[500px] shadow-2xl rounded-xl overflow-hidden mx-4 lg:mx-0">
        {/* Left Content */}
        <div className="lg:w-1/2 p-8 sm:p-12 md:p-16 flex flex-col justify-center text-white bg-[#FF4500]">
          <div className="mb-10 max-w-lg">
            <p className="text-base font-semibold uppercase tracking-widest border-l-4 border-white pl-3 mb-2">
              {/* Use translation for 'Our Skills' */}
              {t('SkillsLabel')}
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tighter">
              {/* Use translated and split title */}
              {firstLine} <br className="hidden sm:block"/> {secondLine}
            </h2>
          </div>

          {SKILLS_CONFIG.map((skill) => (
            <SkillBar 
              key={skill.nameKey} 
              // 4. Translate the name before passing it to SkillBar
              name={t(skill.nameKey)} 
              percentage={skill.percentage} 
              visible={isVisible}
            />
          ))}
        </div>

        {/* Right Image */}
        <div className="flex-1 relative min-h-[300px] lg:min-h-[500px] w-full"> 
          <Image
            src={COURIER_IMAGE_URL}
            // Alt text should ideally be localized too, but keeping it static for now
            alt="Professional courier smiling and holding a delivery box."
            fill
            style={{ objectFit: 'cover' }}
            quality={90}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSecFour;