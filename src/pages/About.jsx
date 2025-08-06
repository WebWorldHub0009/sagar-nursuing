import React from 'react'
import AboutHero from '../components/HeroAbout'
import OurStory from '../components/OurStory'
import TestimonialSlider from '../components/Testimonials'
import VisionMission from '../components/VisionMission'
import TeamMembers from '../components/OurTeam'

const About = () => {
  return (
   <>
   <AboutHero/>
   <OurStory/>
  <VisionMission/>
   <TestimonialSlider/>
   <TeamMembers/>
   </>
  )
}

export default About