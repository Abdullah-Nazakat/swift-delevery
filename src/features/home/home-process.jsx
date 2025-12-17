'use client'
import React, { useRef ,useMemo} from 'react'
import Image from "next/image";
import StepOne from "../../../public/step-1.png"
import StepTwo from "../../../public/step-2.png"
import StepThree from "../../../public/step-3.png"
import StepFour from "../../../public/step-4.png"
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Line, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'


const steps = [
    {
        id: 1,
        title: "Initiate Order",
        description: "Input mission parameters and payload details to commence.",
        image: StepOne,
    },
    {
        id: 2,
        title: "Telemetry Tracking",
        description: "Real-time orbital monitoring of your cargo's vector.",
        image: StepTwo,
    },
    {
        id: 3,
        title: "Rapid Transit",
        description: "High-velocity transport via our specialized courier fleet.",
        image: StepThree,
    },
    {
        id: 4,
        title: "Mission Complete",
        description: "Secure payload delivery and digital confirmation sequence.",
        image: StepFour,
    },
];

const FlightPath = () => {
    const lineRef = useRef()

    // Create a more technical looking path
    const points = useMemo(() => {
        const p = []
        for (let i = -10; i <= 10; i += 0.5) {
            p.push(new THREE.Vector3(i, Math.sin(i * 0.5) * 1.5, 0))
        }
        return p
    }, [])

    return (
        <group position={[0, 0, -5]}>
            <Line
                ref={lineRef}
                points={points}
                color="#FFFFFF"
                lineWidth={1}
                dashed={true}
                dashScale={2}
                dashSize={1}
                gapSize={1}
                opacity={0.3}
                transparent
            />
        </group>
    )
}

export default function HomeProcess() {
    const containerRef = useRef(null)

    return (
        <section ref={containerRef} className="relative py-32 px-4 md:px-8 bg-[#0B0B0C] overflow-hidden">
            {/* Background 3D Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                    <FlightPath />
                </Canvas>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block border border-white/20 px-4 py-1 rounded-full mb-4 bg-white/5 backdrop-blur-md"
                    >
                        <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">Protocol Sequence</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter uppercase"
                    >
                        Operational Flow
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-zinc-900/50 border border-white/5 p-6 hover:bg-zinc-800/50 transition-colors duration-300 group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-4xl font-mono font-bold text-white/10 group-hover:text-white/30 transition-colors">
                                    0{step.id}
                                </span>
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                            </div>

                            <div className="mb-6 relative h-40 w-full overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                            </div>

                            <div className="space-y-3 border-t border-white/10 pt-4">
                                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-mono">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
