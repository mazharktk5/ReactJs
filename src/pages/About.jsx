import React from 'react'
import OurStory from '../components/OurStory'
import BenefitsSection from '../components/BenefitsSection'




function About() {
  return (
    <>
    <div className='flex ml-5 text-3xl  mt-8  font-bold'>
      <h1>About Us</h1>
    </div>
    <OurStory />
    

    <BenefitsSection />
    </>
  )
}

export default About;