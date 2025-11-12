'use client'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Truckimg from '../../../public/truck-img.png'
import Truckimg1 from '../../../public/delivery.png'
import Truckimg2 from '../../../public/services.png'
import Truckimg3 from '../../../public/cargo.png'

const images = [Truckimg, Truckimg1, Truckimg2, Truckimg3]

const HomeSecTwo = () => {
  const t = useTranslations('HomePage')

  const services = [
    {
      id: 1,
      img: images[0],
      title: t.rich('Service1Title', {
        orange: (chunks) => <span className="text-orange-500">{chunks}</span>,
      }),
      desc: t('Service1Desc'),
    },
    {
      id: 2,
      img: images[1],
      title: t.rich('Service2Title', {
        orange: (chunks) => <span className="text-orange-500">{chunks}</span>,
      }),
      desc: t('Service2Desc'),
    },
    {
      id: 3,
      img: images[2],
      title: t.rich('Service3Title', {
        orange: (chunks) => <span className="text-orange-500">{chunks}</span>,
      }),
      desc: t('Service3Desc'),
    },
    {
      id: 4,
      img: images[3],
      title: t.rich('Service4Title', {
        orange: (chunks) => <span className="text-orange-500">{chunks}</span>,
      }),
      desc: t('Service4Desc'),
    },
  ]

  return (
    // <section className="w-full bg-white py-20 px-6 md:px-16">
    //   <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    //     {services.map((service) => (
    //       <div
    //         key={service.id}
    //         className="flex flex-col items-start text-gray-800"
    //       >
    //         <div className="relative mb-6 group">
    //           <div
    //             className="
    //               absolute -top-10 -left-10 
    //               w-16 h-16 bg-orange-100 rounded-md 
    //               transition-all duration-300 ease-out
    //               group-hover:top-1/2 group-hover:left-1/2
    //               group-hover:-translate-x-1/2 group-hover:-translate-y-1/2
    //             "
    //           ></div>

    //           <Image
    //             src={service.img}
    //             alt="Service Icon"
    //             width={60}
    //             height={60}
    //             className="relative z-10 object-contain transition-transform duration-300 group-hover:scale-110"
    //           />
    //         </div>

    //         <h3 className="text-lg md:text-xl font-bold leading-snug mb-3">
    //           {service.title}
    //         </h3>

    //         <p className="text-gray-600 text-sm md:text-base max-w-xs">
    //           {service.desc}
    //         </p>
    //       </div>
    //     ))}
    //   </div>
    // </section>

    <section className="w-full bg-white py-20 px-6 md:px-16 mt-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    {services.map((service) => (
      <div
        key={service.id}
        className="flex flex-col items-center text-center text-gray-800"
      >
        <div className="relative mb-6 group flex justify-center items-center w-20 h-20">
          <div
            className="
              absolute 
              w-16 h-16 bg-orange-100 rounded-md 
              transition-all duration-300 ease-out
              group-hover:scale-125
               -top-10 -left-10 
               group-hover:top-1/2 group-hover:left-1/2
    //               group-hover:-translate-x-1/2 group-hover:-translate-y-1/2
            "
          ></div>
          <Image
            src={service.img}
            alt="Service Icon"
            width={60}
            height={60}
            className="relative z-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <h3 className="text-lg md:text-xl font-bold leading-snug mb-3">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm md:text-base max-w-xs">
          {service.desc}
        </p>
      </div>
    ))}
  </div>
</section>

  )
}

export default HomeSecTwo
