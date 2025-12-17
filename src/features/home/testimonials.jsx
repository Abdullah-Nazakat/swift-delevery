'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
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
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        })
    }

    return (
        <section className="py-24  overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0B1221] mb-4 tracking-tight uppercase">
                        {t('TestimonialsTitle') || 'TESTIMONIALS'}
                    </h2>
                    <p className="text-[#4B5563] text-lg max-w-2xl mx-auto">
                        {t('TestimonialsSubtitle') || "Don't just take our word for it - hear from our satisfied customers"}
                    </p>
                </div>

                {/* Carousel Area */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative h-[450px] md:h-[350px] flex items-center justify-center">
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
                                <div className="bg-[#FDE047] rounded-2xl p-8 md:p-12 shadow-xl mx-4 md:mx-0">
                                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                        {/* Image */}
                                        <div className="relative shrink-0">
                                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-md">
                                                <img
                                                    src={testimonials[currentIndex].image}
                                                    alt={testimonials[currentIndex].name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 text-center md:text-left">
                                            {/* Stars */}
                                            <div className="flex justify-center md:justify-start gap-1 mb-4">
                                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-white text-white" />
                                                ))}
                                            </div>

                                            {/* Quote */}
                                            <blockquote className="text-[#0B1221] text-lg md:text-xl italic mb-6 leading-relaxed">
                                                "{testimonials[currentIndex].quote}"
                                            </blockquote>

                                            {/* Author */}
                                            <div>
                                                <h3 className="font-bold text-[#0B1221] text-lg">
                                                    {testimonials[currentIndex].name}
                                                </h3>
                                                <p className="text-[#0B1221]/70 font-medium">
                                                    {testimonials[currentIndex].role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex flex-col items-center gap-6 mt-8">
                        {/* Arrows */}
                        <div className="flex gap-4">
                            <button
                                onClick={handlePrev}
                                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#0B1221] hover:bg-[#FDE047] hover:scale-110 transition-all duration-300 group cursor-pointer"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#0B1221] hover:bg-[#FDE047] hover:scale-110 transition-all duration-300 group cursor-pointer"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1)
                                        setCurrentIndex(idx)
                                    }}
                                    className={`transition-all duration-300 rounded-full h-2 ${idx === currentIndex
                                            ? 'w-8 bg-[#0B1221]'
                                            : 'w-2 bg-[#0B1221]/30 hover:bg-[#0B1221]/50'
                                        }`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}