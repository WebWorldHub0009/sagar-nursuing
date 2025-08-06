import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import ServiceCategories from '../components/ServiceSetion'
import PremiumStats from '../components/PremiumStats'
import ThoughtAndContact from '../components/ThoughtAndConnect'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <WhyChooseUs/>
    <ServiceCategories/>
    <PremiumStats/>
    <ThoughtAndContact/>
    </>
  )
}

export default Home