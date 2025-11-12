// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import { Anchor, Building2, Handshake } from 'lucide-react'
// import service1 from '../../../public/services-01.jpg'
// import service2 from '../../../public/services-02.jpg'
// import service3 from '../../../public/services-03.jpg'

// const AboutSecTwo = () => {
//   return (
//     <section className="py-20 bg-white">
//       {/* Top Section */}
//       <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
//         {/* Left Text Section */}
//         <div>
//           <p className="text-orange-500 font-semibold mb-2 border-l-4 border-orange-500 pl-2">About Us</p>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Modern &amp; Reliable
//           </h2>
//         </div>

//         {/* Right Description */}
//         <div>
//           <p className="text-gray-600 leading-relaxed">
//             Our company is the modern and reliable choice in the field of deliveries and shipments,
//             offering complete solutions for every professional or personal need. With an emphasis on
//             speed, safety and impeccable professionalism, we ensure that every shipment arrives promptly
//             and with absolute consistency at its destination. Utilizing advanced technologies, highly
//             trained staff and transparent procedures, we build relationships of trust with our customers
//             and contribute dynamically to the smooth operation of businesses and the everyday lives of individuals.
//           </p>
//         </div>
//       </div>

//       {/* Bottom Section - 3 Cards */}
//       <div className="max-w-6xl mx-auto px-4 mt-14 grid md:grid-cols-3 gap-10">
//         {/* Card 1 */}
//         <div>
//           <Image
//             src={service1}
//             alt="Shipment"
//             className="rounded-xl w-full h-56 object-cover mb-5"
//           />
//           <div className="flex items-center gap-2 mb-3">
//             <Anchor className="text-orange-500 w-6 h-6" />
//             <h3 className="text-xl font-bold text-gray-900">Shipment</h3>
//           </div>
//           <p className="text-gray-600 leading-relaxed">
//             Our mission is to provide fast, reliable and safe deliveries, directly serving our customers’ needs
//             and building relationships of trust with each shipment.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div>
//           <Image
//             src={service2}
//             alt="History"
//             className="rounded-xl w-full h-56 object-cover mb-5"
//           />
//           <div className="flex items-center gap-2 mb-3">
//             <Building2 className="text-orange-500 w-6 h-6" />
//             <h3 className="text-xl font-bold text-gray-900">History</h3>
//           </div>
//           <p className="text-gray-600 leading-relaxed">
//             Our story begins with the vision of offering reliable and quality delivery services, based on innovation,
//             consistency and respect for the customer. From day one until today, we have been constantly evolving,
//             creating a network that guarantees safety, speed and excellent service.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div>
//           <Image
//             src={service3}
//             alt="Why Us"
//             className="rounded-xl w-full h-56 object-cover mb-5"
//           />
//           <div className="flex items-center gap-2 mb-3">
//             <Handshake className="text-orange-500 w-6 h-6" />
//             <h3 className="text-xl font-bold text-gray-900">Why Us</h3>
//           </div>
//           <p className="text-gray-600 leading-relaxed">
//             You choose us because we combine reliability, speed and personal service in every mission,
//             offering comprehensive solutions that truly meet your needs. We continuously invest in technology
//             and human contact, so that every experience with us exceeds your expectations.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default AboutSecTwo



'use client'
import React from 'react'
import Image from 'next/image'
import { Anchor, Building2, Handshake } from 'lucide-react'
import { useTranslations } from 'next-intl' // ✅ Import translations hook
import service1 from '../../../public/services-01.jpg'
import service2 from '../../../public/services-02.jpg'
import service3 from '../../../public/services-03.jpg'

const AboutSecTwo = () => {
  const t = useTranslations('AboutUs') // ✅ Set translation namespace

  return (
    <section className="py-20 bg-white">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Text Section */}
        <div>
          <p className="text-orange-500 font-semibold mb-2 border-l-4 border-orange-500 pl-2">
            {t('AboutSubtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('AboutTitle')}
          </h2>
        </div>

        {/* Right Description */}
        <div>
          <p className="text-gray-600 leading-relaxed">
            {t('AboutDescription')}
          </p>
        </div>
      </div>

      {/* Bottom Section - 3 Cards */}
      <div className="max-w-6xl mx-auto px-4 mt-14 grid md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div>
          <Image
            src={service1}
            alt="Shipment"
            className="rounded-xl w-full h-56 object-cover mb-5"
          />
          <div className="flex items-center gap-2 mb-3">
            <Anchor className="text-orange-500 w-6 h-6" />
            <h3 className="text-xl font-bold text-gray-900">{t('Missions')}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            {t('Service1Desc')}
          </p>
        </div>

        {/* Card 2 */}
        <div>
          <Image
            src={service2}
            alt="History"
            className="rounded-xl w-full h-56 object-cover mb-5"
          />
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="text-orange-500 w-6 h-6" />
            <h3 className="text-xl font-bold text-gray-900">{t('Service2Title')}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            {t('Service2Desc')}
          </p>
        </div>

        {/* Card 3 */}
        <div>
          <Image
            src={service3}
            alt="Why Us"
            className="rounded-xl w-full h-56 object-cover mb-5"
          />
          <div className="flex items-center gap-2 mb-3">
            <Handshake className="text-orange-500 w-6 h-6" />
            <h3 className="text-xl font-bold text-gray-900">{t('Service3Title')}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            {t('Service3Desc')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSecTwo
