import React from 'react'
import HomeHero from '../../features/home/home-hero'
import Navbar from '@/components/navbar'
import HomeSecTwo from '../../features/home/home-sec-two'
import HomeSecThree from '../../features/home/home-sec-three'
// import HomeSecFour from '../../features/home/home-sec-four'
import HomeSecFive from '../../features/home/home-sec-five'
// import HomeSecSix from '../../features/home/home-sec-six'
import Footer from '@/components/footer'
import HomeProcess from '@/features/home/home-process'
import Testimonials from '@/features/home/testimonials'
import Faqs from '@/features/home/faqs'
import HomeSecSeven from '@/features/home/home-sec-seven'
const page = () => {
  return (
    <div>
      <Navbar/>
      <HomeHero/>
      <HomeSecTwo/>
      <HomeProcess/>
      <HomeSecThree/>
      {/* <HomeSecFour/> */}
        <HomeSecFive/>
        <Testimonials/>
        <Faqs/>
        <HomeSecSeven/>
      {/* <HomeSecSix/> */}
      <Footer/>
    </div>
  )
}

export default page