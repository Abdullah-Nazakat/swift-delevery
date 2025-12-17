'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { useTranslations } from 'next-intl'

const testimonials = [
    {
        id: 1,
        name: "Tim Hensen",
        role: "Small Business Owner",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
        quote: "FastDeliver has been a game-changer for my business. Their same-day delivery service has helped me keep my customers happy and coming back for more.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah Johnson",
        role: "E-commerce Manager",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
        quote: "Reliability is key in our industry, and Swift Delivery never disappoints. The tracking features are incredible and our customers love the transparency.",
        rating: 5
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Logistics Director",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
        quote: "We've tried multiple delivery partners, but none match the efficiency and professionalism of the team here. Highly recommended for any scaling business.",
        rating: 5
    }
]

export default function Testimonials() {
    const t = useTranslations('HomePage')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const handleNext = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const handlePrev = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        })
    }

    return (
        <section className="py-24 bg-[#050505] border-t border-white/10 relative overflow-hidden">
            {/* Background Tech Elements */}
            <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="flex items-center gap-2 mb-4 opacity-70">
                        <span className="w-1 h-1 bg-white rounded-full"></span>
                        <span className="w-1 h-1 bg-white rounded-full"></span>
                        <span className="w-1 h-1 bg-white rounded-full"></span>
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-[0.2em]">User Feedback Logs</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter uppercase leading-none">
                        {t('TestimonialsTitle') || 'MISSION REPORTS'}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                        {t('TestimonialsSubtitle') || "Verified communications from our strategic partners."}
                    </p>
                </div>

                {/* Carousel Area */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="relative h-[500px] md:h-[400px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="absolute w-full"
                            >
                                <div className="bg-[#0A0A0C] border border-white/10 p-8 md:p-12 relative overflow-hidden group">
                                    {/* Decorative Corners */}
                                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/50"></div>
                                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/50"></div>
                                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/50"></div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/50"></div>

                                    <div className="flex flex-col md:flex-row items-center gap-10">
                                        {/* Image */}
                                        <div className="relative shrink-0">
                                            <div className="relative w-28 h-28 md:w-40 md:h-40 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                                                <img
                                                    src={testimonials[currentIndex].image}
                                                    alt={testimonials[currentIndex].name}
                                                    className="w-full h-full object-cover"
                                                />
                                                {/* Tech Overlay */}
                                                <div className="absolute bottom-2 left-2 z-20 flex gap-1">
                                                    <div className="w-1 h-1 bg-white"></div>
                                                    <div className="w-1 h-1 bg-white/50"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 text-center md:text-left">
                                            {/* Stars Tech Style */}
                                            <div className="flex justify-center md:justify-start gap-1 mb-6">
                                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                    <div key={i} className="w-1 h-4 bg-white/80"></div>
                                                ))}
                                                <span className="ml-2 text-xs font-mono text-gray-500 self-center">RATING: MAX</span>
                                            </div>

                                            <Quote className="w-8 h-8 text-white/20 mb-4 mx-auto md:mx-0" />

                                            {/* Quote */}
                                            <blockquote className="text-white text-xl md:text-2xl font-light mb-8 leading-relaxed">
                                                "{testimonials[currentIndex].quote}"
                                            </blockquote>

                                            {/* Author */}
                                            <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
                                                <div>
                                                    <h3 className="font-bold text-white text-lg uppercase tracking-wide">
                                                        {testimonials[currentIndex].name}
                                                    </h3>
                                                    <p className="text-gray-500 font-mono text-sm uppercase">
                                                        {testimonials[currentIndex].role}
                                                    </p>
                                                </div>
                                                <div className="text-xs font-mono text-gray-600 uppercase">
                                                    // ID: {1000 + testimonials[currentIndex].id}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between mt-8 md:px-0">
                        {/* Dots / Indicators */}
                        <div className="flex gap-2">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1)
                                        setCurrentIndex(idx)
                                    }}
                                    className={`transition-all duration-300 h-1 ${idx === currentIndex
                                        ? 'w-8 bg-white'
                                        : 'w-2 bg-white/20 hover:bg-white/40'
                                        }`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="flex gap-4">
                            <button
                                onClick={handlePrev}
                                className="group w-12 h-12 border border-white/10 hover:border-white/50 hover:bg-white/5 flex items-center justify-center text-white transition-all duration-300"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="group w-12 h-12 border border-white/10 hover:border-white/50 hover:bg-white/5 flex items-center justify-center text-white transition-all duration-300"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
