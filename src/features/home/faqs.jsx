'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Faqs() {
    const t = useTranslations('Faq')
    const [activeIndex, setActiveIndex] = useState(null)

    const faqsData = t.raw('faqs') // reads the array from JSON

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Ambient Backlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <div className="mb-20">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-px w-8 bg-white/50"></div>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">KNOWLEDGE BASE</span>
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter"
                    >
                        {t('title') || "SYSTEM FAQs"}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl font-light"
                    >
                        {t('subtitle') || "Common operational queries and protocols."}
                    </motion.p>
                </div>

                {/* FAQ List */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqsData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group border border-white/10 bg-[#0A0A0C] hover:border-white/30 transition-colors duration-300"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-left px-6 py-6 flex items-center justify-between"
                            >
                                <div className="flex items-start gap-4 pr-4">
                                    <span className={`font-mono text-sm pt-1 ${activeIndex === index ? 'text-white' : 'text-gray-600'}`}>
                                        {index < 9 ? `0${index + 1}` : index + 1} //
                                    </span>
                                    <span className={`font-medium text-lg md:text-xl uppercase tracking-wide transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                                        }`}>
                                        {t(`faqs.${index}.question`)}
                                    </span>
                                </div>

                                <div className={`relative flex items-center justify-center w-8 h-8 border border-white/10 transition-colors duration-300 ${activeIndex === index ? 'bg-white text-black' : 'text-white group-hover:border-white/50'}`}>
                                    {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-6 pb-8 pl-[3.5rem] md:pl-[4.5rem]">
                                            <div className="h-px w-12 bg-white/20 mb-4"></div>
                                            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
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
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-20"
                >
                    <p className="text-gray-500 mb-6 font-mono text-sm uppercase tracking-wider">
                        {t('footerText') || "Additional data required?"}
                    </p>

                    <button className="bg-transparent border border-white text-white px-8 py-3 uppercase font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                        {t('footerButton') || "CONTACT SUPPORT"}
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
