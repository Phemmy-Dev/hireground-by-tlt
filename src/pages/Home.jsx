import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import AcademyHero from '../components/sections/AcademyHero'
import AcademyFeatures from '../components/sections/AcademyFeatures'
import WhoThisIsFor from '../components/sections/WhoThisIsFor'
import HowToApply from '../components/sections/HowToApply'
import CareerFairTeaser from '../components/sections/CareerFairTeaser'
import FaqSection from '../components/sections/FaqSection'
import Cta from '../components/sections/Cta'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HireGround Academy | Career Readiness Program by The Light Tutors</title>
        <meta name="description" content="HireGround Academy - A free 6-week employability and skills development program. Get CV support, interview training, soft skills development, and access to our talent pool. Applications now open!" />
        <meta name="keywords" content="HireGround Academy, career training, employability program, job seekers, CV writing, interview preparation, soft skills, career development, Nigeria, The Light Tutors" />
      </Helmet>
      <Navbar />
      <AcademyHero />
      <AcademyFeatures />
      <WhoThisIsFor />
      <HowToApply />
      <CareerFairTeaser />
      <FaqSection />
      <Cta />
      <Footer />
    </div>
  )
}

export default Home