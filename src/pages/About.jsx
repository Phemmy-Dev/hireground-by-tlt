import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import AboutHero from '../components/sections/aboutsections/AboutHero'
import AboutHireground from '../components/sections/aboutsections/AboutHireground'
import WhyAttend from '../components/sections/aboutsections/WhyAttend'
import Visionandmission from '../components/sections/aboutsections/Visionandmission'
import OrganizingTeam from '../components/OrganizingTeam'
import Cta from '../components/sections/Cta'
import Footer from '../components/Footer'
import FaqSection from '../components/sections/FaqSection'
import CountdownModal from '../components/CountdownModal'
import { useCountdownModal } from '../hooks/useCountdownModal'

const About = () => {
  const { showCountdownModal, handleCloseModal } = useCountdownModal()

  return (
    <>
      <Helmet>
        <title>About HireGround Ilorin Career Fair | Mission, Vision & Team</title>
        <meta name="description" content="Learn about HireGround Ilorin Career Fair - our mission to connect Kwara State talent with career opportunities, meet our organizing team, and discover why to attend." />
        <meta name="keywords" content="HireGround, Ilorin Career Fair, about us, career fair mission, organizing team, Kwara State career event" />
      </Helmet>
      <div className={`transition-all duration-300 ${showCountdownModal ? 'blur-sm' : ''}`}>
        <Navbar />
        <AboutHero />
        <AboutHireground />
        <Visionandmission />
        <WhyAttend />
        {/* <Cta /> */}
        <OrganizingTeam />
        <FaqSection />
        <Footer />
      </div>
      
      {/* Countdown Modal */}
      <CountdownModal 
        isOpen={showCountdownModal} 
        onClose={handleCloseModal} 
      />
    </>
  )
}

export default About