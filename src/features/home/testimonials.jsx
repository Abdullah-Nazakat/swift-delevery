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
        quote: "The speed is unmatched. It feels like the package teleports.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah Johnson",
        role: "E-commerce Manager",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
        quote: "Finally, a logistics platform that feels as modern as the products we sell.",
        rating: 5
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Logistics Director",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
        quote: "Precision, transparency, and elegance. Highly recommended.",
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
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95,
            rotateY: direction > 0 ? 10 : -10
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95,
            rotateY: direction < 0 ? 10 : -10
        })
    }

    return (
        <section className="py-32 bg-[#F5F5F7]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] tracking-tight mb-4"
                    >
                        {t('TestimonialsTitle') || 'Client Stories'}
                    </motion.h2>
                </div>

                <div className="relative max-w-4xl mx-auto perspective-1000">
                    <div className="relative h-[400px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 200, damping: 25 },
                                    opacity: { duration: 0.4 },
                                    scale: { duration: 0.4 }
                                }}
                                className="absolute w-full px-6"
                            >
                                <div className="vision-glass p-12 md:p-16 text-center relative max-w-2xl mx-auto shadow-2xl bg-white/60">
                                    <div className="flex justify-center mb-8">
                                        <div className="w-20 h-20 rounded-full overflow-hidden border border-white/50 shadow-lg">
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-1 mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-[#FBB016] text-[#FBB016]" />
                                        ))}
                                    </div>

                                    <blockquote className="text-2xl md:text-3xl font-medium text-[#1D1D1F] mb-8 leading-tight tracking-tight">
                                        "{testimonials[currentIndex].quote}"
                                    </blockquote>

                                    <div>
                                        <div className="font-semibold text-[#1D1D1F]">{testimonials[currentIndex].name}</div>
                                        <div className="text-[#86868b] text-sm">{testimonials[currentIndex].role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Minimal Controls */}
                    <div className="flex items-center justify-center gap-12 mt-4">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 rounded-full bg-white/50 hover:bg-white transition-colors flex items-center justify-center text-[#1D1D1F] shadow-sm backdrop-blur-md"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className="flex gap-3">
                            {testimonials.map((_, idx) => (
                                <motion.div
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1)
                                        setCurrentIndex(idx)
                                    }}
                                    animate={{
                                        height: 4,
                                        width: idx === currentIndex ? 32 : 4,
                                        backgroundColor: idx === currentIndex ? "#1D1D1F" : "#d1d1d6"
                                    }}
                                    className="rounded-full cursor-pointer"
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full bg-white/50 hover:bg-white transition-colors flex items-center justify-center text-[#1D1D1F] shadow-sm backdrop-blur-md"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
