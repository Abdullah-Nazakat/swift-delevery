import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import AboutHero from '@/features/about/about-hero'
import AboutSecFour from '@/features/about/about-sec-four'
import AboutSecThree from '@/features/about/about-sec-three'
import AboutSecTwo from '@/features/about/about-sec-two'
import HomeSecSix from '@/features/home/home-sec-six'
import React from 'react'

const page = () => {
  return (
    <div>
       <div>
         <Navbar/>
       </div>
       <div>
        <AboutHero/>
        <AboutSecTwo/>
        <AboutSecThree/>
        <AboutSecFour/>
        <HomeSecSix/>
        <Footer/>
       </div>
    </div>
  )
}

export default page