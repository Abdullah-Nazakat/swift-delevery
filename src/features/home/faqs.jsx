'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Faqs() {
    const t = useTranslations('Faq')
    const [activeIndex, setActiveIndex] = useState(null)

    const faqsData = t.raw('faqs') // reads the array from JSON

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section>
            <div className="container mx-auto ">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-[#0B1221] mb-4 tracking-tight"
                    >
                        {t('title')}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-[#4B5563] text-lg max-w-2xl mx-auto"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                {/* FAQ List */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqsData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="overflow-hidden"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`w-full text-left px-8 py-6 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                                    activeIndex === index
                                        ? 'bg-[#FDE047] rounded-b-none'
                                        : 'bg-[#FDE047] hover:bg-[#FCD34D]'
                                }`}
                            >
                                <span className="text-[#0B1221] font-medium text-lg md:text-xl pr-8">
                                    {t(`faqs.${index}.question`)}
                                </span>

                                <ChevronDown
                                    className={`w-6 h-6 text-[#0B1221] transition-transform duration-300 shrink-0 ${
                                        activeIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="bg-[#FDE047] px-8 pb-6 rounded-b-2xl">
                                            <p className="text-[#0B1221]/80 text-base md:text-lg leading-relaxed">
                                                {t(`faqs.${index}.answer`)}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-[#4B5563] mb-6 text-lg">
                        {t('footerText')}
                    </p>

                    <button className="bg-[#0B1221] text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-[#1F2937] hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer">
                        {t('footerButton')}
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
