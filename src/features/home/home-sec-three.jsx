'use client'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Img from '../../../public/secthree.jpg'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const HomeSecThree = () => {
  const t = useTranslations('HomePage')

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  }

  const listItems = [
    t('AboutList.Item1'),
    t('AboutList.Item2'),
    t('AboutList.Item3'),
    t('AboutList.Item4')
  ]

  return (
    <div className=" py-12 px-4 md:px-8 font-sans relative overflow-hidden">
      {/* Central Dotted Line (Visual separator for larger screens) */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2  hidden lg:block" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left Column: Image with Blob Background */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative lg:pr-8 group"
          >
            {/* Yellow/Orange Blob Background */}
            <div className="absolute -inset-4 bg-[#FBB016] rounded-[2rem] rotate-3 scale-100 group-hover:scale-105 transition-transform duration-500 -z-10 shadow-lg blur-[1px]"></div>

            {/* Main Image */}
            <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl skew-y-0 transform transition-transform duration-500">
              <Image
                src={Img}
                alt="About Section"
                className="w-full h-[400px] lg:h-[500px] object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 " />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="relative lg:pl-8"
          >
            {/* Pill Label */}
            <motion.div variants={fadeIn} className="inline-block px-6 py-2 bg-[#FCD34D] rounded-full mb-6 shadow-sm border border-[#FBB016]/20">
              <span className="text-white font-bold text-lg tracking-wide uppercase drop-shadow-sm">
                {t('AboutSubtitle')}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-6 leading-tight">
              {t('AboutTitle')}
            </motion.h2>

            {/* Description */}
            <motion.p variants={fadeIn} className="text-[#4B5563] text-lg leading-relaxed mb-8">
              {t('AboutDescription')}
            </motion.p>

            {/* List */}
            <motion.div variants={stagger} className="space-y-4">
              {listItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center space-x-3 group"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#1F2937] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[#374151] text-lg font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HomeSecThree
