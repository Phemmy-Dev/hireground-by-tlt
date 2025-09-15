import React from 'react'
import Navbar from '../components/Navbar'
import AboutHero from '../components/sections/aboutsections/AboutHero'
import AboutHireground from '../components/sections/aboutsections/AboutHireground'
import WhyAttend from '../components/sections/aboutsections/WhyAttend'
import Visionandmission from '../components/sections/aboutsections/Visionandmission'
import OrganizingTeam from '../components/OrganizingTeam'
import Cta from '../components/sections/Cta'
import Footer from '../components/Footer'
import FaqSection from '../components/sections/FaqSection'
const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutHireground />
      <Visionandmission />
      <WhyAttend />
      {/* <Cta /> */}
      <OrganizingTeam />
      <FaqSection />
      <Footer />
    </>
  )
}

export default About