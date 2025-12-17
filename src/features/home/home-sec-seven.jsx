'use client'
import React from 'react';
import { ArrowRight, Plane, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';

const Hyperspace = () => {
    return (
        <group>
            <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={3} />
            <Float speed={5} rotationIntensity={2} floatIntensity={0}>
                <mesh position={[10, -5, -10]}>
                    <icosahedronGeometry args={[2, 0]} />
                    <meshBasicMaterial color="white" wireframe transparent opacity={0.1} />
                </mesh>
            </Float>
        </group>
    )
}

export default function HomeSecSeven() {
    const t = useTranslations('HomeSecSeven');

    return (
        <section className="relative py-32 px-6 overflow-hidden bg-[#000000] border-t border-white/10">
            {/* Abstract 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <Hyperspace />
                </Canvas>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-block border border-white px-6 py-2">
                        <span className="text-white font-mono uppercase tracking-[0.3em] text-sm">
                            Ready for Launch
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white uppercase leading-none mix-blend-difference">
                        {t('title') || "INITIATE \nSEQUENCE"}
                    </h2>

                    <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-light font-mono">
                        {t('description') || "Join the logistical vanguard. Precision delivery for the modern age."}
                    </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
                >
                    <button className="group relative flex items-center justify-center gap-4 bg-white text-black px-12 py-6 text-lg font-bold uppercase tracking-widest hover:bg-gray-200 transition-all duration-300 overflow-hidden">
                        <span className="relative z-10">{t('ctaStart') || "START MISSION"}</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />

                        {/* Hover Fill Effect */}
                        <div className="absolute inset-0 bg-gray-300 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                    </button>

                    <button className="flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 px-12 py-6 text-lg font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                        {t('ctaPricing') || "VIEW DATA"}
                    </button>
                </motion.div>

                {/* Status Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 max-w-2xl mx-auto"
                >
                    <div className="bg-black p-6 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer group">
                        <div className="p-3 border border-white/20 group-hover:border-white transition-colors">
                            <Plane className="text-white w-6 h-6" strokeWidth={1} />
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-gray-500 font-mono uppercase">COMMS CHANNEL</div>
                            <div className="text-white font-bold">{t('callUsNumber') || "+1 (555) 000-0000"}</div>
                        </div>
                    </div>

                    <div className="bg-black p-6 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer group">
                        <div className="p-3 border border-white/20 group-hover:border-white transition-colors">
                            <Mail className="text-white w-6 h-6" strokeWidth={1} />
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-gray-500 font-mono uppercase">DIGITAL UPLINK</div>
                            <div className="text-white font-bold">{t('emailUsAddress') || "support@swift.com"}</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
