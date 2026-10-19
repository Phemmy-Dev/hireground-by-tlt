import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import SponsorsSectionHero from '../components/sections/sponsorspagesection/SponsorsSectionHero'
import IntroToSponsors from '../components/sections/sponsorspagesection/IntroToSponsors'
import WhySponsor from '../components/sections/sponsorspagesection/WhySponsor'
import ExhibitionShowcase from '../components/sections/sponsorspagesection/ExhibitionShowcase'
import SponsorCta from '../components/sections/sponsorspagesection/SponsorCta'
import FaqSection from '../components/sections/FaqSection'
import Footer from '../components/Footer'
import CountdownSection from '../components/sections/CountdownSection'

const Sponsors = () => {
  return (
    <div>
      <Helmet>
        <title>Partnership & Exhibition | HireGround 2026 | The Light Tutors</title>
        <meta 
          name="description" 
          content="Sponsor HireGround 2026 or book a prime exhibition booth with an exclusive stage speaking slot. Reach 500+ top talent in-person and 10,000+ virtually." 
        />
        <meta 
          name="keywords" 
          content="HireGround sponsor, exhibition booth, speaking slot, career fair Nigeria, partner with HireGround, youth empowerment sponsorship" 
        />
      </Helmet>
      <Navbar />
      <SponsorsSectionHero />
      <IntroToSponsors />
      <WhySponsor />
      <ExhibitionShowcase />
      <SponsorCta />
      <CountdownSection />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default Sponsors