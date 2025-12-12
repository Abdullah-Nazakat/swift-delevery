import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import AboutHero from '@/features/about/about-hero'
import AboutSecThree from '@/features/about/about-sec-three'
import AboutSecTwo from '@/features/about/about-sec-two'
import Faqs from '@/features/home/faqs'
import React from 'react'

const page = () => {
  return (
    <div>
         <Navbar/>
        <AboutHero/>
        <AboutSecTwo/>
        <AboutSecThree/>
        <Faqs/>
        <Footer/>
    </div>
  )
}

export default page