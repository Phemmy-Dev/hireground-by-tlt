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
          <title>Sponsor HireGround Ilorin Career Fair 2025 | Partnership Opportunities</title>
          <meta name="description" content="Become a sponsor of HireGround Ilorin Career Fair 2025. Gain brand visibility, connect with talent, and support career development in Kwara State." />
          <meta name="keywords" content="HireGround sponsorship, Ilorin Career Fair sponsors, event sponsorship, brand visibility, career fair partnership" />
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