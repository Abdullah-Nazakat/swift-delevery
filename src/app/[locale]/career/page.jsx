import React from 'react'
import Career from '@/features/career/career'
import Navbar from '@/components/navbar'
import CareerSecTwo from '@/features/career/carrer-sec-two'
import CareerSecThree from '@/features/career/career-sec-three'
import HomeSecSix from '@/features/home/home-sec-six'
import Footer from '@/components/footer'
const page = () => {
  return (
    <div>
        <Navbar/>

        <Career/>

        <CareerSecTwo/>

        <CareerSecThree/>

        <HomeSecSix/>

        <Footer/>
    </div>
  )
}

export default page