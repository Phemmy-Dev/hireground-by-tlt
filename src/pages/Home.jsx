import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BackStory from '../components/sections/BackStory'
import SpeakersSection from '../components/sections/SpeakersSection'
import RecruiterPartnership from '../components/sections/RecruiterPartnership'
import FaqSection from '../components/sections/FaqSection'
import Sponsors from '../components/sections/Sponsors'
import Cta from '../components/sections/Cta'
import Footer from '../components/Footer'
import CountdownModal from '../components/CountdownModal'
import { useCountdownModal } from '../hooks/useCountdownModal'
import herobg from '../assets/images/herobg.jpg'

const Home = () => {
  const { showCountdownModal, handleCloseModal } = useCountdownModal()

  return (
    <div>
        <div className={`transition-all duration-300 ${showCountdownModal ? 'blur-sm' : ''}`}>
          <Navbar />
          <Hero title='HireGround' text='Ready, Set, Your Career starts here' herobtn='Register Now' contCname='hero_cont' sectionCname='hero_text' heroImg={herobg} />
          {/* <Hero title='HireGround' text='Ready, Set, Your Career starts here' herobtn='Get Your Tickets' contCname='hero_cont' sectionCname='hero_text' heroImg={herobg} /> */}
          <BackStory />
          <SpeakersSection />
          <RecruiterPartnership />
          <Sponsors />
          <FaqSection />
          <Cta />
          <Footer />
        </div>
        

        
        {/* Countdown Modal */}
        {showCountdownModal && (
          <CountdownModal 
            isOpen={showCountdownModal} 
            onClose={handleCloseModal} 
          />
        )}


    </div>
  )
}


export default Home