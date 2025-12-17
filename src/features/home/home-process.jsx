'use client'
import React from 'react'
import Image from "next/image";
import StepOne from "../../../public/step-1.png"
import StepTwo from "../../../public/step-2.png"
import StepThree from "../../../public/step-3.png"
import StepFour from "../../../public/step-4.png"
import { motion } from 'framer-motion'

const steps = [
    { id: 1, title: "Order", description: "Place your request online.", image: StepOne },
    { id: 2, title: "Pickup", description: "We collect your package.", image: StepTwo },
    { id: 3, title: "Transit", description: "Real-time tracking.", image: StepThree },
    { id: 4, title: "Arrival", description: "Safe delivery confirmed.", image: StepFour },
];

const SimpleStep = ({ step, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center group"
    >
        <div className="relative w-48 h-48 mb-8 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-100 group-hover:scale-105 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-10 h-10 bg-[#0071E3] rounded-full flex items-center justify-center text-white font-bold text-lg z-20">
                {step.id}
            </div>
            <div className="w-32 h-32 relative overflow-hidden rounded-xl">
                <Image src={step.image} alt={step.title} fill className="object-cover" />
            </div>
        </div>
        <h3 className="text-2xl font-bold text-[#1D1D1F] mb-2">{step.title}</h3>
        <p className="text-gray-500">{step.description}</p>
    </motion.div>
)

export default function HomeProcess() {
    return (
        <section className="relative py-24 md:py-32 bg-[#F5F5F7] z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] tracking-tight mb-4">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-500">Simple, transparent, and fast.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-24 left-0 w-full h-0.5 bg-gray-200 -z-10" />

                    {steps.map((step, index) => (
                        <SimpleStep key={step.id} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
