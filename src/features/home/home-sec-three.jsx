'use client'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Img from '../../../public/secthree.jpg'
import { Square, CheckSquare } from 'lucide-react'
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
    <section className="relative py-24 px-6 md:px-12 bg-[#050505] overflow-hidden border-t border-white/10">
      {/* Background Tech Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border-t border-r border-white/10 hidden lg:block"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b border-l border-white/10 hidden lg:block"></div>
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Image with Tech Frame */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative group"
          >
            {/* Tech Frame */}
            <div className="absolute -inset-4 border border-white/20 z-0">
              <div className="absolute top-0 left-0 w-2 h-2 bg-white"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-white"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-white"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-white"></div>
            </div>

            {/* Image Container */}
            <div className="relative z-10 overflow-hidden bg-[#111] grayscale group-hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none mix-blend-overlay"></div>
              {/* Scanline */}
              <div className="absolute w-full h-1 bg-white/20 top-0 left-0 animate-scanline z-20"></div>

              <Image
                src={Img}
                alt="About Mission"
                className="w-full h-[400px] lg:h-[500px] object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 text-xs text-gray-500 font-mono hidden md:block">
              IMG_REF: A-774 // CLASSIFIED
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="relative"
          >
            {/* Pill Label */}
            <motion.div variants={fadeIn} className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-white animate-pulse"></div>
              <span className="text-white font-mono text-sm uppercase tracking-widest">
                {t('AboutSubtitle') || "System Overview"}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight leading-none">
              {t('AboutTitle')}
            </motion.h2>

            {/* Description */}
            <motion.p variants={fadeIn} className="text-gray-400 text-lg leading-relaxed mb-10 border-l-2 border-white/20 pl-6">
              {t('AboutDescription')}
            </motion.p>

            {/* List */}
            <motion.div variants={stagger} className="space-y-5">
              {listItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center space-x-4 group cursor-pointer"
                >
                  <div className="relative">
                    <Square size={20} className="text-gray-600 group-hover:hidden" />
                    <CheckSquare size={20} className="text-white hidden group-hover:block" />
                  </div>
                  <span className="text-gray-300 text-lg font-light tracking-wide group-hover:text-white transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HomeSecThree
