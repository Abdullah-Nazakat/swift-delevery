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
    <section className="w-full py-10 bg-white/5 overflow-hidden">
      <div className="relative flex items-center">
        {/* Animated Track */}
        <div className="flex animate-scrollX hover:[animation-play-state:paused]">
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-10 flex items-center justify-center"
            >
              <Image
                src={img}
                alt={`Logo ${i}`}
                width={50}
                height={50}
                className="object-contain opacity-90 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes scrollX {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scrollX {
          display: flex;
          width: max-content;
          animation: scrollX 20s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default HomeSecSix
