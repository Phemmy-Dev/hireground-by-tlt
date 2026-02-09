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
        <title>Contact HireGround Ilorin Career Fair | Get in Touch</title>
        <meta name="description" content="Contact HireGround Ilorin Career Fair team for inquiries about registration, sponsorship, recruitment partnerships, and event information." />
        <meta name="keywords" content="HireGround contact, Ilorin Career Fair contact, career fair inquiries, event information, sponsorship inquiries" />
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