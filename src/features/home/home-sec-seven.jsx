'use client'
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function HomeSecSeven() {
    const t = useTranslations('HomeSecSeven');

    return (
        <section className="relative py-32 px-6 bg-[#1D1D1F] text-white z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[#0071E3] opacity-10 pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                >
                    Ready to deliver?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                    Join thousands of customers who trust Swift Delivery for their most important shipments.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="bg-[#0071E3] text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-[#0060c2] transition-colors shadow-lg shadow-blue-500/30">
                        Create Account
                    </button>
                    <button className="bg-transparent border border-gray-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-colors">
                        Contact Sales
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
