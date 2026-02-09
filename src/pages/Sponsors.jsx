import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import SponsorsSectionHero from '../components/sections/sponsorspagesection/SponsorsSectionHero'
import IntroToSponsors from '../components/sections/sponsorspagesection/IntroToSponsors'
import WhySponsor from '../components/sections/sponsorspagesection/WhySponsor'
import SponsorCta from '../components/sections/sponsorspagesection/SponsorCta'
import FaqSection from '../components/sections/FaqSection'
import Footer from '../components/Footer'

const Sponsors = () => {
  return (
    <div>
      <Helmet>
        <title>Partner with HireGround | Sponsorship & Partnership Opportunities</title>
        <meta name="description" content="Partner with HireGround Academy and support career development in Nigeria. Gain brand visibility, connect with early-career talent, and make an impact." />
        <meta name="keywords" content="HireGround sponsorship, HireGround Academy partners, career program sponsorship, brand visibility, talent partnership Nigeria" />
      </Helmet>
      <Navbar />
      <SponsorsSectionHero />
      <IntroToSponsors />
      <WhySponsor />
      <SponsorCta />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default Sponsors