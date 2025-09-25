import React from 'react'
import Navbar from '../components/Navbar'
import ContactHero from '../components/sections/contactpagesection/ContactHero'
import ContactForm from '../components/sections/contactpagesection/ContactForm'
import ContactInfo from '../components/sections/contactpagesection/ContactInfo'
import FaqSection from '../components/sections/FaqSection'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      {/* <ContactForm /> */}
      <ContactInfo />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default Contact