import Navbar from '@/components/navbar'
import Service from '@/features/servicess/services'
import ServicesSecThree from '@/features/servicess/services-sec-three'
import ServicesSecTwo from '@/features/servicess/services-sec-two'
import ServicesSecFour from '@/features/servicess/services-sec-four'
import React from 'react'
import ServicesSecFive from '@/features/servicess/services-sec-five'
import HomeSecSix from '@/features/home/home-sec-six'
import Footer from '@/components/footer'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Service/>
        <ServicesSecTwo/>
        <ServicesSecThree/>
        <ServicesSecFour/>
        <ServicesSecFive/>
        <HomeSecSix/>
        <Footer/>
    </div>
  )
}

export default page