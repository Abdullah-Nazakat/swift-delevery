import React from 'react'
import HomeHero from '../../features/home/home-hero'
import Navbar from '@/components/navbar'
import HomeSecTwo from '../../features/home/home-sec-two'
import HomeSecThree from '../../features/home/home-sec-three'
import HomeSecFour from '../../features/home/home-sec-four'
import HomeSecFive from '../../features/home/home-sec-five'
import HomeSecSix from '../../features/home/home-sec-six'
import Footer from '@/components/footer'
const page = () => {
  return (
    <div>
      <Navbar/>
      <HomeHero/>
      <HomeSecTwo/>
      <HomeSecThree/>
      <HomeSecFour/>
      <div className='mt-10'>
        <HomeSecFive/>
        
      </div>

      <HomeSecSix/>
      <Footer/>
    </div>
  )
}

export default page