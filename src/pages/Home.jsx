import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BackStory from '../components/sections/BackStory'
import SpeakersSection from '../components/sections/SpeakersSection'
import herobg from '../assets/images/herobg.jpg'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero title='HireGround' text='Ready, Set, Your Career starts here' herobtn='Get Your Tickets' contCname='hero_cont' sectionCname='hero_text' heroImg={herobg} />
        <BackStory />
        <SpeakersSection />
    </div>
  )
}


export default Home