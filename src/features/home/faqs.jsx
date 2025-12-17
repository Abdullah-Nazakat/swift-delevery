'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Faqs() {
    const t = useTranslations('Faq')
    const [activeIndex, setActiveIndex] = useState(null)
    const faqsData = t.raw('faqs')

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="py-32 bg-[#F5F5F7]">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] tracking-tight mb-4"
                    >
                        {t('title') || "Common Questions"}
                    </motion.h2>
                    <p className="text-xl text-[#86868b]">Everything you need to know about the platform.</p>
                </div>

                <div className="space-y-4">
                    {faqsData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100/50 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-left px-8 py-6 flex items-center justify-between group"
                            >
                                <span className="text-[#1D1D1F] font-medium text-lg pr-8">
                                    {t(`faqs.${index}.question`)}
                                </span>
                                <div className={`relative flex items-center justify-center w-8 h-8 rounded-full bg-[#F5F5F7] text-[#1D1D1F] transition-all duration-300 ${activeIndex === index ? 'rotate-45 bg-[#1D1D1F] text-white' : 'group-hover:bg-[#E8E8ED]'}`}>
                                    <Plus size={18} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="px-8 pb-8 pt-0">
                                            <p className="text-[#86868b] text-lg leading-relaxed">
                                                {t(`faqs.${index}.answer`)}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
