'use client'
import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HomeSecSeven() {
    const t = useTranslations('HomeSecSeven');

    return (
        <section
            className="py-20 px-4 md:px-8 lg:px-16 mt-10"
            style={{
                background: 'linear-gradient(90deg, #111828 0%, #1E2939 100%)'
            }}
        >
            <div className="mx-auto">
                <div className="flex flex-col items-center text-center space-y-8">

                    {/* Header Content */}
                    <div className="max-w-3xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            {t('title')}
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                            {t('description')}
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="group flex items-center justify-center gap-2 bg-[#FCD34D] hover:bg-[#fbbf24] text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                            {t('ctaStart')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button className="flex items-center justify-center gap-2 bg-transparent border border-gray-600 hover:border-[#FCD34D] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[#FCD34D]/10">
                            {t('ctaPricing')}
                        </button>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full max-w-4xl">

                        {/* Call Us Card */}
                        <div className="flex items-center gap-4 bg-[#2D3748]/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl hover:border-[#FCD34D]/50 transition-colors group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center group-hover:bg-[#FCD34D]/20 transition-colors">
                                <Phone className="w-6 h-6 text-gray-300 group-hover:text-[#FCD34D] transition-colors" />
                            </div>
                            <div className="text-left">
                                <p className="text-gray-400 text-sm font-medium mb-1">{t('callUsLabel')}</p>
                                <p className="text-white text-lg font-semibold">{t('callUsNumber')}</p>
                            </div>
                        </div>

                        {/* Email Us Card */}
                        <div className="flex items-center gap-4 bg-[#2D3748]/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl hover:border-[#FCD34D]/50 transition-colors group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center group-hover:bg-[#FCD34D]/20 transition-colors">
                                <Mail className="w-6 h-6 text-gray-300 group-hover:text-[#FCD34D] transition-colors" />
                            </div>
                            <div className="text-left">
                                <p className="text-gray-400 text-sm font-medium mb-1">{t('emailUsLabel')}</p>
                                <p className="text-white text-lg font-semibold">{t('emailUsAddress')}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
