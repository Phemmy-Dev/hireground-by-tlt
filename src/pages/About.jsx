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
        <title>About HireGround | Academy & Career Development by The Light Tutors</title>
        <meta name="description" content="Learn about HireGround - our mission to empower early-career professionals through HireGround Academy and career development programs. Meet our team and discover our vision." />
        <meta name="keywords" content="HireGround, HireGround Academy, about us, career development, employability training, The Light Tutors, career program Nigeria" />
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