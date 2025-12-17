'use client'
import React from 'react'
import Image from 'next/image'
import Delivery from '../../../public/services.png'
import Truck from '../../../public/fasttruck.png'
import Express from '../../../public/express.png'
import Logistics from '../../../public/logistics.png'
import Product from '../../../public/product.png'
import Quick from '../../../public/quick.png'

const images = [Delivery, Truck, Express, Logistics, Product, Quick]

const HomeSecSix = () => {
  return (
    <section className="w-full py-12 bg-[#050505] border-y border-white/10 overflow-hidden relative">
      <div className="absolute inset-0 bg-white/5 opacity-50 mix-blend-overlay pointer-events-none"></div>

      {/* Ticker Tape Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="relative flex items-center">
        <div className="flex animate-scrollX hover:[animation-play-state:paused]">
          {[...images, ...images, ...images].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-12 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={img}
                alt={`Partner ${i}`}
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scrollX {
          display: flex;
          width: max-content;
          animation: scrollX 40s linear infinite;
        }
      `}</style>

      <div className="absolute top-2 left-4 text-[10px] font-mono text-gray-700 tracking-[0.2em] uppercase hidden md:block">
        Strategic_Alliances // Verified
      </div>
    </section>
  )
}

export default HomeSecSix
