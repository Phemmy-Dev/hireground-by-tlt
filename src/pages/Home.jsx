import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BackStory from '../components/sections/BackStory'
import SpeakersSection from '../components/sections/SpeakersSection'
import FaqSection from '../components/sections/FaqSection'
import Sponsors from '../components/sections/Sponsors'
import Cta from '../components/sections/Cta'
import Footer from '../components/Footer'
import CountdownModal from '../components/CountdownModal'
import { useCountdownModal } from '../hooks/useCountdownModal'
import herobg from '../assets/images/herobg.jpg'

const Home = () => {
  const { showCountdownModal, handleCloseModal, resetModal } = useCountdownModal()
  const [manualShow, setManualShow] = useState(false)

  return (
    <div>
        <div className={`transition-all duration-300 ${(showCountdownModal || manualShow) ? 'blur-sm' : ''}`}>
          <Navbar />
          <Hero title='HireGround' text='Ready, Set, Your Career starts here' herobtn='Get Your Tickets' contCname='hero_cont' sectionCname='hero_text' heroImg={herobg} />
          <BackStory />
          <SpeakersSection />
          <Sponsors />
          <FaqSection />
          <Cta />
          <Footer />
        </div>
        

        
        {/* Countdown Modal */}
        <CountdownModal 
          isOpen={showCountdownModal || manualShow} 
          onClose={() => {
            setManualShow(false)
            handleCloseModal()
          }} 
        />

        {/* Test Buttons */}
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 1000 }}>
          <button 
            onClick={() => setManualShow(true)}
            style={{
              padding: '10px 16px',
              backgroundColor: '#f97316',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 'bold'
            }}
          >
            Test Modal
          </button>
          <button 
            onClick={() => {
              resetModal()
              setManualShow(false)
              alert('Modal reset! Refresh the page to see it automatically.')
            }}
            style={{
              padding: '10px 16px',
              backgroundColor: '#dc2626',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 'bold'
            }}
          >
            Reset Auto
          </button>
        </div>
    </div>
  )
}


export default Home