'use client';
import { motion } from "framer-motion";

const brands = [
    { icon: "🚚", label: "Truck" },
    { icon: "📦", label: "Package" },
    { icon: "🚛", label: "Lorry" },
    { icon: "🚐", label: "Van" },
    { icon: "✉️", label: "Envelope" },
    { icon: "📮", label: "Mailbox" },
];

export default function ServicesSecSix() {
    // Create a list long enough to cover large screens before duplicating
    const repeatedBrands = [...brands, ...brands, ...brands, ...brands];
    // Double the list for seamless looping
    const finalItems = [...repeatedBrands, ...repeatedBrands];

    return (
        <section className="overflow-hidden py-12 px-4 md:px-8">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
                    Trusted by Leading Brands
                </h2>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for smooth fade edges */}
                <div className="absolute top-0 left-0 h-full w-20 md:w-32 bg-gradient-to-r from-[#FFFBE6] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 h-full w-20 md:w-32 bg-gradient-to-l from-[#FFFBE6] to-transparent z-10 pointer-events-none" />

                <div className="flex">
                    <motion.div
                        className="flex gap-6 md:gap-8 flex-shrink-0"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 40, // Needs to be slow enough to be readable
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {finalItems.map((brand, index) => (
                            <div
                                key={index}
                                className="w-32 h-20 md:w-40 md:h-24 bg-[#F4D03F] rounded-2xl flex items-center justify-center text-4xl md:text-5xl shadow-sm hover:-translate-y-1 transition-transform duration-300 cursor-default select-none"
                            >
                                <span className="filter drop-shadow-sm" role="img" aria-label={brand.label}>
                                    {brand.icon}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}