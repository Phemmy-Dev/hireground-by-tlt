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