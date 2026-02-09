import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import ContactHero from '../components/sections/contactpagesection/ContactHero'
import ContactForm from '../components/sections/contactpagesection/ContactForm'
import ContactInfo from '../components/sections/contactpagesection/ContactInfo'
import FaqSection from '../components/sections/FaqSection'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact HireGround Academy | Get in Touch</title>
        <meta name="description" content="Contact HireGround Academy team for inquiries about program enrollment, partnerships, and career development opportunities." />
        <meta name="keywords" content="HireGround contact, HireGround Academy contact, career program inquiries, partnership inquiries, The Light Tutors" />
      </Helmet>
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